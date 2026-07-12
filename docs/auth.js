// auth.js - 南式TOEIC鬼特訓 克隆云端同步核心脚本 (终极完美弹窗UX闭环版)

// ⚠️ 【第一步】请在这里填入你真实的 Supabase 项目地址和 Anon 公钥
const SUPABASE_URL = 'https://kejeprpbzznttoqsujkk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlamVwcnBienpudHRvcXN1amtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM4MzU4MTMsImV4cCI6MjA5OTQxMTgxM30.J7ZUE5qBwdZCVPOraaEl4dfDLEwcxGDLocHfUtTJI0A';

// 🌟 【修复核心】使用 supabaseClient 变量名，绝对不要跟官方全局变量名 'supabase' 重名冲突！
let supabaseClient = null;

try {
    if (typeof supabase !== 'undefined') {
        supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        console.log("🚀 Supabase 客户端安全初始化成功");
    } else {
        console.error("❌ 错误：检测到网页未成功引入 Supabase CDN 脚本，请检查 HTML 底部！");
    }
} catch (e) {
    console.error("💥 Supabase 初始化失败:", e);
}

let currentUser = null;
let isSyncingFromServer = false;

// --- 获取本地所有的 TOEIC 数据 ---
function getAllLocalToeicData() {
    const payload = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('toeic_')) {
            try {
                payload[key] = localStorage.getItem(key);
            } catch (e) {
                console.error(`读取缓存 ${key} 失败:`, e);
            }
        }
    }
    return payload;
}

// --- 本地存储全局实时拦截 ---
const originalSetItem = localStorage.setItem;
localStorage.setItem = function(key, value) {
    originalSetItem.apply(this, arguments);
    if (key && key.startsWith('toeic_') && !isSyncingFromServer) {
        uploadDataToCloud();
    }
};

const originalRemoveItem = localStorage.removeItem;
localStorage.removeItem = function(key) {
    originalRemoveItem.apply(this, arguments);
    if (key && key.startsWith('toeic_') && !isSyncingFromServer) {
        uploadDataToCloud();
    }
};

// 页面加载完毕后，监听登录状态及重置密码回调
document.addEventListener('DOMContentLoaded', async () => {
    if (!supabaseClient) return;

    // 检测用户是否通过“忘记密码”邮件链接跳回
    if (window.location.hash && window.location.hash.includes('type=recovery')) {
        setTimeout(() => {
            window.openLoginModal();
            switchToUpdatePasswordMode();
        }, 500);
    }

    try {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (session) {
            currentUser = session.user;
            updateUserUI(currentUser.email);
            await downloadDataFromCloud();
        } else {
            updateUserUI(null);
        }
    } catch (e) {
        console.warn("读取初始化 Session 失败:", e);
    }
    
    supabaseClient.auth.onAuthStateChange(async (event, session) => {
        if (session) {
            currentUser = session.user;
            updateUserUI(currentUser.email);
            await downloadDataFromCloud();
        } else {
            currentUser = null;
            updateUserUI(null);
        }
    });
});

// 处理账号注册
async function handleSignUp(email, password) {
    if (!supabaseClient) return alert("数据库未连接");
    const { data, error } = await supabaseClient.auth.signUp({ email, password });
    if (error) {
        alert("注册失败: " + error.message);
    } else {
        // 🌟 UX升级：就地转化为收件箱提示，防止二次连击
        showAuthSuccessState(
            "📩 验证邮件已发送！",
            `我们已向 <strong class="text-slate-900 font-mono">${email}</strong> 发送了一封激活邮件。<br>请前往您的收件箱点击验证链接，激活后即可畅快刷题。`
        );
    }
}

// 处理登录
async function handleSignIn(email, password) {
    if (!supabaseClient) return alert("数据库未连接");
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if (error) {
        alert("登录失败: " + error.message);
    } else {
        alert("登录成功！全量同步已激活。");
        closeLoginModal();
    }
}

// 处理退出登录
async function handleLogout() {
    if (!supabaseClient) return;
    if (confirm("确定要退出登录吗？（您的云端同步数据将安全保留，本地数据将清空）")) {
        await supabaseClient.auth.signOut();
        isSyncingFromServer = true;
        
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith('toeic_')) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach(k => localStorage.removeItem(k));
        
        isSyncingFromServer = false;
        alert("已安全退出登录");
        window.location.reload();
    }
}

// 处理忘记密码
async function handleForgotPassword(email) {
    if (!supabaseClient) return alert("数据库未连接");
    if (!email) return alert("⚠️ 请先输入您需要找回密码的邮箱！");

    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + window.location.pathname, 
    });

    if (error) {
        alert("❌ 发送失败: " + error.message);
    } else {
        // 🌟 UX升级：就地转化为收件箱提示，杜绝连击爆接口
        showAuthSuccessState(
            "🚀 重置密码邮件已发送！",
            `系统已向 <strong class="text-slate-900 font-mono">${email}</strong> 发送了重置凭证。<br>请在 10 分钟内前往邮箱查看并点击安全链接修改您的密码。`
        );
    }
}

// 处理重置密码
async function handleUpdatePassword(newPassword) {
    if (!supabaseClient) return alert("数据库未连接");
    const { error } = await supabaseClient.auth.updateUser({ password: newPassword });

    if (error) {
        alert("❌ 修改失败: " + error.message);
    } else {
        alert("🎉 密码修改成功！新密码已生效，系统已自动为您登录。");
        window.history.replaceState({}, document.title, window.location.pathname);
        closeLoginModal();
    }
}

// 从云端数据库加载全部数据并执行增量合并
async function downloadDataFromCloud() {
    if (!currentUser || !supabaseClient) return;

    const { data, error } = await supabaseClient
        .from('user_progress')
        .select('*')
        .eq('user_id', currentUser.id)
        .single();

    if (error && error.code !== 'PGRST116') {
        console.error("加载云端同步备份失败:", error.message);
        return;
    }

    if (data && data.dict_notebook) {
        // 激活同步锁，防止本地合并引发的 setItem 再次触发上传造成死循环
        isSyncingFromServer = true; 
        
        const cloudData = data.dict_notebook;
        mergeLocalAndCloudData(cloudData);
        
        isSyncingFromServer = false;

        // 触发各页面的 UI 刷新组件
        if (typeof calculateAndRenderStats === 'function') calculateAndRenderStats();
        if (typeof filterToeicModules === 'function') filterToeicModules();
        if (typeof renderDictNotebook === 'function') renderDictNotebook();
    }
}

// 核心智能合并算法
function mergeLocalAndCloudData(cloudData) {
    // 1. 收集本地所有现存的 key 空间，并与云端 key 空间取并集
    const allKeys = new Set([...Object.keys(localStorage).filter(k => k.startsWith('toeic_')), ...Object.keys(cloudData)]);

    allKeys.forEach(key => {
        const localRaw = localStorage.getItem(key);
        const cloudRaw = cloudData[key];

        // 情况 A: 只有云端有，本地没有 -> 直接同步到本地
        if (localRaw === null && cloudRaw !== undefined) {
            localStorage.setItem(key, cloudRaw);
            return;
        }
        // 情况 B: 只有本地有，云端没有 -> 保留本地，等待后续自动触发上传
        if (localRaw !== null && cloudRaw === undefined) {
            return;
        }

        // 情况 C: 两边都有冲突 -> 开始进行多维度特征合并
        if (key === 'toeic_dict_notebook') {
            // 🌟 【核心】生词本增量合并
            const localDict = JSON.parse(localRaw || '{}');
            const cloudDict = JSON.parse(cloudRaw || '{}');
            const mergedDict = {};

            const allWords = new Set([...Object.keys(localDict), ...Object.keys(cloudDict)]);
            allWords.forEach(word => {
                const localWord = localDict[word];
                const cloudWord = cloudDict[word];

                if (!localWord) { mergedDict[word] = cloudWord; }
                else if (!cloudWord) { mergedDict[word] = localWord; }
                else {
                    // 两边都有这个单词，根据时间戳进行 Last-Write-Wins 合并
                    const localTs = localWord.ts || 0;
                    const cloudTs = cloudWord.ts || 0;
                    
                    if (cloudTs >= localTs) {
                        mergedDict[word] = cloudWord;
                        // 特殊人文关怀：如果本地有笔记，云端没有，尝试保留本地笔记防止误删
                        if (localWord.note && !cloudWord.note) mergedDict[word].note = localWord.note;
                    } else {
                        mergedDict[word] = localWord;
                        if (cloudWord.note && !localWord.note) mergedDict[word].note = cloudWord.note;
                    }
                    // 拼写练习次数累加，streak 取最大值
                    mergedDict[word].count = Math.max(localWord.count || 0, cloudWord.count || 0);
                    mergedDict[word].streak = Math.max(localWord.streak || 0, cloudWord.streak || 0);
                }
            });
            localStorage.setItem(key, JSON.stringify(mergedDict));

        } else if (key.startsWith('toeic_ghost_favorites_')) {
            // 🌟 错题本合并 -> 数组取并集（去重）
            try {
                const localFavs = JSON.parse(localRaw || '[]');
                const cloudFavs = JSON.parse(cloudRaw || '[]');
                const mergedFavs = Array.from(new Set([...localFavs, ...cloudFavs]));
                localStorage.setItem(key, JSON.stringify(mergedFavs));
            } catch(e) { localStorage.setItem(key, localRaw); }

        } else if (key.startsWith('toeic_total_') || key.startsWith('toeic_correct_')) {
            // 🌟 刷题进度与正确题数合并 -> 取高分/最大值
            const localNum = parseInt(localRaw, 10) || 0;
            const cloudNum = parseInt(cloudRaw, 10) || 0;
            localStorage.setItem(key, Math.max(localNum, cloudNum).toString());
        } else {
            // 其他未知兜底配置 -> 默认保留本地
            if (localRaw !== null) localStorage.setItem(key, localRaw);
        }
    });
}

// 打包上传云端
async function uploadDataToCloud() {
    if (!currentUser || !supabaseClient) return;
    const allToeicData = getAllLocalToeicData();
    const { error } = await supabaseClient
        .from('user_progress')
        .upsert({
            user_id: currentUser.id,
            dict_notebook: allToeicData,
            updated_at: new Date()
        });
    if (error) console.error("全量同步至云端失败:", error.message);
}

// 切换顶栏 UI 状态
function updateUserUI(email) {
    const loggedOutDiv = document.getElementById('auth-logged-out');
    const loggedInDiv = document.getElementById('auth-logged-in');
    const emailDisplay = document.getElementById('user-email-display');
    const avatar = document.getElementById('user-avatar');
    
    if (loggedOutDiv && loggedInDiv) {
        if (email) {
            loggedOutDiv.classList.add('hidden');
            loggedInDiv.classList.remove('hidden');
            if (emailDisplay) emailDisplay.textContent = email;
            if (avatar) avatar.textContent = email.charAt(0).toUpperCase();
        } else {
            loggedOutDiv.classList.remove('hidden');
            loggedInDiv.classList.add('hidden');
        }
    }
}

// 🌟 动态重置并恢复弹窗 DOM 状态架构
function resetAuthModalDOM() {
    const emailInput = document.getElementById('modal-email');
    const passInput = document.getElementById('modal-password');
    const forgotBtn = document.getElementById('auth-forgot-btn');
    const submitBtn = document.getElementById('auth-submit-btn');
    const switchText = document.getElementById('auth-switch-text');
    
    if (emailInput) emailInput.classList.remove('hidden');
    if (passInput) passInput.classList.remove('hidden');
    if (forgotBtn) forgotBtn.classList.remove('hidden');
    if (submitBtn) {
        submitBtn.classList.remove('hidden');
        submitBtn.className = "w-full bg-slate-900 text-white py-2.5 rounded-xl font-bold hover:bg-amber-600 transition text-xs cursor-pointer shadow-sm";
    }
    if (switchText && switchText.parentElement) switchText.parentElement.classList.remove('hidden');
}

// 全局弹窗开关控制
window.openLoginModal = function() { 
    resetAuthModalDOM();
    currentAuthMode = 'register'; 
    window.toggleAuthMode();
    const modal = document.getElementById('login-modal');
    if (modal) modal.classList.remove('hidden');
};

window.openRegisterModal = function() { 
    resetAuthModalDOM();
    currentAuthMode = 'login'; 
    window.toggleAuthMode();
    const modal = document.getElementById('login-modal');
    if (modal) modal.classList.remove('hidden');
};

window.closeLoginModal = function() { 
    const modal = document.getElementById('login-modal'); 
    if (modal) modal.classList.add('hidden'); 
};

// 🌟 动态切换登录/注册模式状态机 (全面对齐版)
let currentAuthMode = 'register'; 

window.toggleAuthMode = function() {
    const title = document.getElementById('auth-modal-title');
    const desc = document.getElementById('auth-modal-desc');
    const submitBtn = document.getElementById('auth-submit-btn');
    const switchText = document.getElementById('auth-switch-text');
    const switchBtn = document.getElementById('auth-switch-btn');
    
    const emailInput = document.getElementById('modal-email');
    const passInput = document.getElementById('modal-password');
    const forgotBtn = document.getElementById('auth-forgot-btn');
    
    if (currentAuthMode === 'register' || currentAuthMode === 'forgot') {
        currentAuthMode = 'login';
        title.textContent = 'Sign In (登录账号)';
        desc.innerHTML = `Welcome back! Sign in to restore your cloud progress.<br><span class="text-amber-700 font-medium">欢迎回来！输入邮箱和密码即可同步恢复所有进度。</span>`;
        if (emailInput) emailInput.classList.remove('hidden');
        if (passInput) { passInput.classList.remove('hidden'); passInput.placeholder = "Password (密码)"; }
        if (forgotBtn) forgotBtn.classList.remove('hidden');

        submitBtn.textContent = 'Sign In (立即登录)';
        submitBtn.setAttribute('onclick', "submitAuth('login')");
        switchText.textContent = "New here? (新同学请先)";
        switchBtn.textContent = 'Sign Up (去注册)';
        if (switchBtn) switchBtn.classList.remove('hidden');
    } else {
        currentAuthMode = 'register';
        title.textContent = 'Create Account (注册新账号)';
        desc.innerHTML = `Sign up first to activate your cloud sync space.<br><span class="text-amber-700 font-medium">请先注册以激活云端同步，防止刷题进度丢失。</span>`;
        if (emailInput) emailInput.classList.remove('hidden');
        if (passInput) { passInput.classList.remove('hidden'); passInput.placeholder = "Password (常用密码 8-18位字母+数字)"; }
        if (forgotBtn) forgotBtn.classList.add('hidden');

        submitBtn.textContent = 'Get Started & Sign Up (立即注册并开始)';
        submitBtn.setAttribute('onclick', "submitAuth('register')");
        switchText.textContent = "Already have an account? (已有账号？)";
        switchBtn.textContent = 'Sign In (去登录)';
        if (switchBtn) switchBtn.classList.remove('hidden');
    }
};

// 🌟 切换至找回密码界面
window.switchToForgotMode = function() {
    currentAuthMode = 'forgot';
    const title = document.getElementById('auth-modal-title');
    const desc = document.getElementById('auth-modal-desc');
    const submitBtn = document.getElementById('auth-submit-btn');
    const switchText = document.getElementById('auth-switch-text');
    const switchBtn = document.getElementById('auth-switch-btn');
    
    const emailInput = document.getElementById('modal-email');
    const passInput = document.getElementById('modal-password');
    const forgotBtn = document.getElementById('auth-forgot-btn');

    title.textContent = 'Reset Password (找回密码)';
    desc.innerHTML = `Enter your email to receive a password reset link.<br><span class="text-amber-700 font-medium">请输入您的注册邮箱，系统将发送一封重置密码邮件。</span>`;
    
    if (emailInput) emailInput.classList.remove('hidden');
    if (passInput) passInput.classList.add('hidden'); 
    if (forgotBtn) forgotBtn.classList.add('hidden');

    submitBtn.textContent = 'Send Reset Email (发送重置邮件)';
    submitBtn.setAttribute('onclick', "submitAuth('forgot')");
    switchText.textContent = "Remembered it? (想起密码了？)";
    switchBtn.textContent = 'Back to Sign In (返回登录)';
    if (switchBtn) switchBtn.classList.remove('hidden');
};

// 🌟 切换至输入新密码界面
function switchToUpdatePasswordMode() {
    currentAuthMode = 'reset_new';
    const title = document.getElementById('auth-modal-title');
    const desc = document.getElementById('auth-modal-desc');
    const submitBtn = document.getElementById('auth-submit-btn');
    const switchText = document.getElementById('auth-switch-text');
    const switchBtn = document.getElementById('auth-switch-btn');
    
    const emailInput = document.getElementById('modal-email');
    const passInput = document.getElementById('modal-password');
    const forgotBtn = document.getElementById('auth-forgot-btn');

    title.textContent = 'Setup New Password (设置新密码)';
    desc.innerHTML = `Please enter your secure new password.<br><span class="text-emerald-700 font-medium">安全验证通过！请直接输入您的新密码。</span>`;
    
    if (emailInput) emailInput.classList.add('hidden'); 
    if (passInput) {
        passInput.classList.remove('hidden');
        passInput.value = "";
        passInput.placeholder = "Enter New Password (新密码 8-18位字母+数字)";
    }
    if (forgotBtn) forgotBtn.classList.add('hidden');
    
    submitBtn.textContent = 'Save & Sign In (保存新密码并登录)';
    submitBtn.setAttribute('onclick', "submitAuth('reset_new')");
    
    if (switchText) switchText.textContent = "Security Session Active (安全重置通道已激活)";
    if (switchBtn) switchBtn.classList.add('hidden');
}

// 🌟 UX就地状态重组核心：隐藏输入框，转产为纯提示面板
function showAuthSuccessState(title, htmlMessage) {
    document.getElementById('modal-email').classList.add('hidden');
    document.getElementById('modal-password').classList.add('hidden');
    if (document.getElementById('auth-forgot-btn')) document.getElementById('auth-forgot-btn').classList.add('hidden');
    
    const titleEl = document.getElementById('auth-modal-title');
    const descEl = document.getElementById('auth-modal-desc');
    const submitBtn = document.getElementById('auth-submit-btn');
    const switchText = document.getElementById('auth-switch-text');
    
    if (titleEl) titleEl.textContent = title;
    if (descEl) {
        descEl.innerHTML = `
            <div class="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl p-3.5 my-2 text-left space-y-2">
                <div class="flex items-center space-x-1.5 font-bold text-xs text-emerald-800">
                    <span>📬 Action Required / 需检查邮箱</span>
                </div>
                <p class="text-[11px] leading-relaxed font-medium">${htmlMessage}</p>
            </div>
            <p class="text-[10px] text-slate-400 text-center mt-2">处理完毕后关闭本窗即可。</p>
        `;
    }
    
    if (submitBtn) {
        submitBtn.textContent = '我知道了 (Close Alert)';
        submitBtn.className = "w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-xl font-bold transition text-xs cursor-pointer shadow-sm text-center block";
        submitBtn.setAttribute('onclick', 'closeLoginModal()');
    }
    
    if (switchText && switchText.parentElement) switchText.parentElement.classList.add('hidden');
}

// 提交表单校验中心
window.submitAuth = function(type) {
    const email = document.getElementById('modal-email').value.trim();
    const pass = document.getElementById('modal-password').value;

    if (type === 'forgot') {
        if (!email) return alert("⚠️ 请输入邮箱地址！");
        return handleForgotPassword(email);
    }

    if (!email || !pass) {
        if (type !== 'reset_new') return alert("⚠️ 请输入邮箱和密码！");
    }
    if (type === 'reset_new' && !pass) {
        return alert("⚠️ 请输入新密码！");
    }

    if (type !== 'forgot') {
        if (pass.length < 8) return alert("❌ 密码太短啦！请至少设置 8 位。");
        if (pass.length > 18) return alert("❌ 密码太长啦！请控制在 18 位以内。");
    }

    if (type === 'register' || type === 'reset_new') {
        const hasNumber = /\d/.test(pass);
        const hasLetter = /[a-zA-Z]/.test(pass);
        const isAllSame = /^(.)\1+$/.test(pass);

        if (isAllSame || !hasNumber || !hasLetter) {
            return alert(
                "⚠️ 密码太简单有风险！\n\n" +
                "请使用「字母 + 数字」的常用组合，长度为 8 到 18 位。\n" +
                "💡 例如: toeic2026, hunter888"
            );
        }
    }

    if (type === 'login') handleSignIn(email, pass);
    if (type === 'register') handleSignUp(email, pass);
    if (type === 'reset_new') handleUpdatePassword(pass);
};

// 未登录免费体验3个单元的权限拦截中心
window.checkAuthPermission = function(targetUnit) {
    if (currentUser) return true;

    const attemptedUnits = new Set();
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('toeic_total_')) {
            const unitName = key.replace('toeic_total_', '');
            const totalValue = parseInt(localStorage.getItem(key) || '0', 10);
            if (totalValue > 0) attemptedUnits.add(unitName);
        }
    }

    if (attemptedUnits.has(targetUnit)) return true;

    if (attemptedUnits.size >= 3) {
        alert(`💡 体验额度已满：\n您当前未登录，本地已留下了 ${attemptedUnits.size} 个单元的特训记录。请注册并登录账号，解锁全量隐藏特训章节，并激活多端云同步！`);
        window.openLoginModal();
        return false; 
    }

    return true;
};