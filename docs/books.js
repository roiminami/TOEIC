/**
 * 📖 3D立体书 & 前端控制台 大一统配置中心
 * * 以后不管是增加 3D 书籍还是修改控制台卡片皮肤，全在这里统一操作！
 */
const my3DBooksDataset = [
    {
        bookId: "progress",
        title: "我的学习报告",
        typeTag: "全库盲刷",
        author: "SYSTEM",
        slogan: "打破边界，盲区空投。",
        sloganColor: "text-amber-600 font-extrabold animate-pulse", 
        coverBg: "#1c1a16",          
        coverBorder: "#967633",      
        backBg: "#282520",           
        spineBg: "#12100e",          
        initLeft: "20%",             
        initTop: "2%",              
        
        scopeCode: "SHUFFLE_MODE",
        lockBadgeStyle: "bg-amber-600/20 text-amber-600 border border-amber-600/30",
        cardTheme: "border-amber-600/20 hover:border-amber-600 hover:bg-amber-50/10",
        dotColor: "bg-amber-600 shadow-amber-600/50"
    },
    {
        bookId: "gold",
        title: "金之流", // 🌟 按照之前要求同步精简为“投资”
        typeTag: "新形式对应",
        author: "INVEST",
        slogan: "最新、最強。",
        sloganColor: "text-red-600",
        coverBg: "#b59247",          
        coverBorder: "#967633",      
        backBg: "#a0803b",           
        spineBg: "#8c6e30",          
        initLeft: "40%",             
        initTop: "2%",              
        
        scopeCode: "ALPHA",                                                           
        lockBadgeStyle: "bg-amber-500/20 text-amber-700 border border-amber-500/30", 
        cardTheme: "border-amber-500/30 hover:border-amber-500 hover:bg-amber-50/20",  
        dotColor: "bg-amber-500 shadow-amber-500/50"                                  
    },
    {
        bookId: "black",
        title: "黒之流",
        typeTag: "顶级突破",
        author: "TOEIC 990",
        slogan: "顶点を极めよ。",
        sloganColor: "text-neutral-400",
        coverBg: "#1a202c",          
        coverBorder: "#2d3748",      
        backBg: "#2d3748", 
        spineBg: "#111827",
        initLeft: "60%",             
        initTop: "2%",              
        
        scopeCode: "GAMMA",
        lockBadgeStyle: "bg-neutral-800/20 text-neutral-800 border border-neutral-800/30",
        cardTheme: "border-neutral-800/30 hover:border-neutral-800 hover:bg-neutral-800/10",
        dotColor: "bg-neutral-800 shadow-neutral-800/50"
    }
];

// =====================================================================
// ⚡ 自动化渲染与纯点击等比联动引擎
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
    inject3DBookStyles(); 
    render3DBooks();      
    initBookClickListeners(); 
});

function inject3DBookStyles() {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
        .book-3d-space { position: absolute; width: 64px; height: 92px; perspective: 1000px; z-index: 50; cursor: pointer; user-select: none; transition: all 0.3s ease; }
        .book-3d-space:hover { transform: translateY(-4px) scale(1.05); }
        .book-3d-box { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; transform: rotateX(54deg) rotateY(0deg) rotateZ(-36deg); transition: transform 0.3s ease; }
        .book-face { position: absolute; box-sizing: border-box; backface-visibility: visible; }
        .book-face.front { width: 64px; height: 92px; border-radius: 1px 2px 2px 1px; box-shadow: inset -1px 0 3px rgba(0, 0, 0, 0.15); font-family: 'Inter', 'Noto Sans JP', sans-serif; }
        .book-face.back { width: 64px; height: 92px; border-radius: 2px 1px 1px 2px; transform: translateZ(-5px) rotateY(180deg); }
        .book-face.spine { width: 10px; height: 92px; left: -5px; transform: rotateY(-90deg); }
        .book-face.page-right { width: 10px; height: 92px; right: -5px; background: #f2ebd9; background-image: linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px); background-size: 100% 2.5px; transform: rotateY(90deg); }
        .book-face.page-top { width: 64px; height: 10px; top: -5px; background: #ebe3cf; background-image: linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px); background-size: 2.5px 100%; transform: rotateX(90deg); }
        .book-face.page-bottom { width: 64px; height: 10px; bottom: -5px; background: #ebe3cf; transform: rotateX(-90deg); }
        .book-ambient-shadow { position: absolute; width: 68px; height: 96px; top: 2px; left: -2px; background: rgba(15, 12, 6, 0.65); filter: blur(4px); transform: translateZ(-8px); pointer-events: none; }
    `;
    document.head.appendChild(styleEl);
}

function render3DBooks() {
    const wrapper = document.getElementById('deskAssetWrapper');
    if (!wrapper) {
        console.error("Mount Error: '#deskAssetWrapper' container is missing.");
        return;
    }

    my3DBooksDataset.forEach(book => {
        const bookContainer = document.createElement('div');
        bookContainer.className = 'book-3d-space';
        bookContainer.style.left = book.initLeft;
        bookContainer.style.top = book.initTop;

        // 🌟 终极修正：去掉写死的宽度拦截，换成全宽 break-words，让标题能够完美进行智能多行折行渲染
        bookContainer.innerHTML = `
            <div class="book-3d-box">
                <div class="book-ambient-shadow"></div>
                <div class="book-face front flex flex-col justify-between p-1 overflow-hidden select-none" style="background: ${book.coverBg}; border: 1px solid ${book.coverBorder};">
                    <div class="self-center text-[4.5px] text-amber-950/80 font-black border border-dashed border-amber-950/40 rounded px-0.5 scale-85 bg-amber-100/10 leading-none">${book.typeTag}</div>
                    <div class="flex flex-col items-center my-auto tracking-tighter w-full px-0.5">
                        <span class="text-[9px] font-black text-white bg-slate-900/90 px-1 py-0.5 rounded shadow-sm my-0.5 leading-tight tracking-normal text-center block break-words w-full">${book.title}</span>
                        <span class="text-[4.5px] text-white/60 font-bold scale-75 leading-none mt-0.5">${book.author}</span>
                    </div>
                    <div class="bg-white -mx-1 -mb-1 p-0.5 text-center border-t border-amber-950/20 shrink-0">
                        <span class="text-[5px] font-black ${book.sloganColor} block scale-90 tracking-wide truncate">${book.slogan}</span>
                    </div>
                </div>
                <div class="book-face back" style="background: ${book.backBg};"></div>
                <div class="book-face spine" style="background: ${book.spineBg};"></div>
                <div class="book-face page-right"></div>
                <div class="book-face page-top"></div>
                <div class="book-face page-bottom"></div>
            </div>
        `;
        wrapper.appendChild(bookContainer);
    });
}

function initBookClickListeners() {
    const books = document.querySelectorAll('.book-3d-space');

    books.forEach(bookEl => {
        bookEl.addEventListener('click', (e) => {
            e.preventDefault();
            
            books.forEach(b => {
                b.style.zIndex = "50";
                b.style.opacity = "0.4"; 
            });
            bookEl.style.zIndex = "60";
            bookEl.style.opacity = "1"; 

            const currentBookConfig = my3DBooksDataset[Array.from(books).indexOf(bookEl)];
            if (currentBookConfig && typeof window.setBookFilter === 'function') {
                window.setBookFilter(currentBookConfig.bookId);
            }
        });
    });
}

window.resetBookVisuals = function() {
    const books = document.querySelectorAll('.book-3d-space');
    books.forEach(b => {
        b.style.zIndex = "50";
        b.style.opacity = "1";
    });
};