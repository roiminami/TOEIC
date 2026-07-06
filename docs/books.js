/**
 * 📖 3D立体书配置中心
 * * 以后如果你想【追加新书】或者【修改内容】，只需要在这个数组里增删改对象即可！
 * 每一个 {} 代表一本书。
 */
const my3DBooksDataset = [
    {
        title: "金のフレーズ",
        typeTag: "新形式对应",
        author: "TEX加藤",
        slogan: "最新、最強。",
        sloganColor: "text-red-600", // 底部标语文字颜色
        coverBg: "#b59247",          // 标志性黄铜底色
        coverBorder: "#967633",      // 封面边框色
        backBg: "#a0803b",           // 背面底色
        spineBg: "#8c6e30",          // 书脊阴影暗金色
        initLeft: "22%",             // 初始摆放的左右位置
        initTop: "60%"               // 初始摆放的上下位置
    },
    {
        title: "银のフレーズ",
        typeTag: "新形式对应",
        author: "TEX加藤",
        slogan: "基础から学ぶ。",
        sloganColor: "text-slate-600",
        coverBg: "#718096",          // 银灰色底色
        coverBorder: "#4a5568",
        backBg: "#5a6578",
        spineBg: "#4a5568",
        initLeft: "32%",             // 错开位置，防止重叠
        initTop: "62%"
    }
    // 💡 以后想加第三本书（比如黑金版），直接在下面复制贴上这一套格式即可！
];


// =====================================================================
// ⚡ 3D 书本自动化渲染与自由拖拽核心引擎（无需修改）
// =====================================================================

document.addEventListener('DOMContentLoaded', () => {
    inject3DBookStyles(); // 动态注入 CSS
    render3DBooks();      // 动态生成 HTML
    initBookDraggable();  // 激活多书独立拖拽引擎
});

// 1. 动态注入 3D 核心 CSS 样式，让 index.html 保持绝对干净
function inject3DBookStyles() {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
        .book-3d-space {
            position: fixed;
            width: 80px;
            height: 116px;
            perspective: 1000px;
            z-index: 50;
            cursor: grab;
            user-select: none;
        }
        .book-3d-space:active { cursor: grabbing; }
        .book-3d-box {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            transform: rotateX(54deg) rotateY(0deg) rotateZ(-36deg);
            transition: transform 0.1s ease;
        }
        .book-face { position: absolute; box-sizing: border-box; backface-visibility: visible; }
        .book-face.front {
            width: 80px; height: 116px;
            border-radius: 1px 2px 2px 1px;
            box-shadow: inset -2px 0 4px rgba(0, 0, 0, 0.15);
            font-family: 'Noto Sans JP', sans-serif;
        }
        .book-face.back { width: 80px; height: 116px; border-radius: 2px 1px 1px 2px; transform: translateZ(-6px) rotateY(180deg); }
        .book-face.spine { width: 12px; height: 116px; left: -6px; transform: rotateY(-90deg); }
        .book-face.page-right {
            width: 12px; height: 116px; right: -6px; background: #f2ebd9;
            background-image: linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px);
            background-size: 100% 2.5px; transform: rotateY(90deg);
        }
        .book-face.page-top {
            width: 80px; height: 12px; top: -6px; background: #ebe3cf;
            background-image: linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px);
            background-size: 2.5px 100%; transform: rotateX(90deg);
        }
        .book-face.page-bottom { width: 80px; height: 12px; bottom: -6px; background: #ebe3cf; transform: rotateX(-90deg); }
        .book-ambient-shadow {
            position: absolute; width: 84px; height: 120px; top: 3px; left: -2px;
            background: rgba(15, 12, 6, 0.65); filter: blur(5px); transform: translateZ(-10px); pointer-events: none;
        }
    `;
    document.head.appendChild(styleEl);
}

// 2. 根据数据中心，全自动批量生产 HTML 书本模型并挂载到页面上
function render3DBooks() {
    my3DBooksDataset.forEach(book => {
        const bookContainer = document.createElement('div');
        bookContainer.className = 'book-3d-space';
        bookContainer.style.left = book.initLeft;
        bookContainer.style.top = book.initTop;

        bookContainer.innerHTML = `
            <div class="book-3d-box">
                <div class="book-ambient-shadow"></div>
                
                <div class="book-face front flex flex-col justify-between p-1 overflow-hidden select-none" 
                     style="background: ${book.coverBg}; border: 1px solid ${book.coverBorder};">
                    <div class="self-center text-[5px] text-amber-950/80 font-black border border-dashed border-amber-950/40 rounded px-0.5 scale-90 bg-amber-100/10 leading-none">
                        ${book.typeTag}
                    </div>
                    <div class="flex flex-col items-center my-auto tracking-tighter">
                        <span class="text-[6px] font-black text-slate-900 font-mono leading-none">TOEIC® L&R</span>
                        <span class="text-[8px] font-black text-slate-900 mt-0.5 leading-none">出る単特急</span>
                        <span class="text-[9px] font-black text-white bg-slate-900 px-1 py-0.5 rounded shadow-sm my-0.5 leading-none tracking-normal scale-105">
                            ${book.title}
                        </span>
                        <span class="text-[5px] text-amber-950 font-bold scale-75 leading-none">${book.author}</span>
                    </div>
                    <div class="bg-white -mx-1 -mb-1 p-0.5 text-center border-t border-amber-950/20">
                        <span class="text-[6px] font-black ${book.sloganColor} block scale-90 tracking-wider">
                            ${book.slogan}
                        </span>
                    </div>
                </div>

                <div class="book-face back" style="background: ${book.backBg};"></div>
                <div class="book-face spine" style="background: ${book.spineBg};"></div>
                <div class="book-face page-right"></div>
                <div class="book-face page-top"></div>
                <div class="book-face page-bottom"></div>
            </div>
        `;
        document.body.appendChild(bookContainer);
    });
}

// 3. 多书独立拖拽以及点击自动置顶引擎
function initBookDraggable() {
    let activeBook = null;
    let offsetX = 0;
    let offsetY = 0;

    // 动态获取刚刚渲染出来的所有书本
    const books = document.querySelectorAll('.book-3d-space');

    books.forEach(bookEl => {
        bookEl.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return; // 仅限左键
            
            activeBook = bookEl;
            
            // 点击置顶：被点击的书层级提到 60，其他的恢复 50
            books.forEach(b => b.style.zIndex = "50");
            activeBook.style.zIndex = "60";

            const rect = activeBook.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            
            e.preventDefault();
        });
    });

    document.addEventListener('mousemove', (e) => {
        if (!activeBook) return;
        let newLeft = e.clientX - offsetX;
        let newTop = e.clientY - offsetY;
        activeBook.style.left = `${newLeft}px`;
        activeBook.style.top = `${newTop}px`;
    });

    document.addEventListener('mouseup', () => {
        activeBook = null;
    });
}