// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data61-70.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "artwork",
        pos: "名",
        ipa: "/ˈɑːrtwɜːrk/",
        cn: "艺术品，美术作品",
        jp: "芸術作品、美術品",
        family: "art / artist / artistic",
        tips: "Part 1 展览/博物馆场景高频，常考 artwork is displayed on the wall（墙上展示着艺术品）。",
        desc: "The artwork is on display."
    },
    {
        word: "scattered",
        pos: "形/動",
        ipa: "/ˈskætərd/",
        cn: "散落的，零散的",
        jp: "散乱した、あちこちに散らばった",
        family: "scatter / scattering",
        tips: "Part 1 状态描述极高频：documents are scattered on the floor（文件散落在一地）。",
        desc: "Papers are scattered on the desk."
    },
    {
        word: "backpack",
        pos: "名",
        ipa: "/ˈbækpæk/",
        cn: "双肩包，背包",
        jp: "リュックサック、バックパック",
        family: "pack / packing / backpacker",
        tips: "Part 1 随身物品高频，如 wearing a backpack（背着双肩包）或 placing a backpack on the bench（把背包放在长椅上）。",
        desc: "He is wearing a backpack."
    },
    {
        word: "scarf",
        pos: "名",
        ipa: "/skɑːrf/",
        cn: "围巾，丝巾",
        jp: "スカーフ、マフラー",
        family: "scarves / scarfs",
        tips: "注意复数形式可为 scarves 或 scarfs。常用搭配：wearing a scarf（戴着围巾）。",
        desc: "She is wearing a warm scarf."
    },
    {
        word: "lid",
        pos: "名",
        ipa: "/lɪd/",
        cn: "盖子，容器盖",
        jp: "（容器の）蓋",
        family: "lidded / lidless",
        tips: "Part 1 物品状态与动作高频：closing the lid（盖上盖子）或 the lid of the container（容器的盖子）。",
        desc: "He removed the lid."
    },
    {
        word: "frame",
        pos: "名/動",
        ipa: "/freɪm/",
        cn: "框架，画框；给……装框",
        jp: "額縁、枠；額に入れる",
        family: "framed / framework / framing",
        tips: "Part 1 常考 a framed picture（装框的照片/画）；Part 5 常考 complete the framework（完成框架）。",
        desc: "The picture has a wooden frame."
    },
    {
        word: "overlook",
        pos: "動",
        ipa: "/ˌoʊvərˈlʊk/",
        cn: "俯瞰；忽略，忽视",
        jp: "見下ろす、見渡す；見落とす",
        family: "overlooked / overlooking / overlooker",
        tips: "Part 1 常考地点方位：the balcony overlooks the ocean（阳台俯瞰大海）；Part 5/6 常考“忽略细节”（overlook a detail）。",
        desc: "The room overlooks the park."
    },
    {
        word: "bookcase",
        pos: "名",
        ipa: "/ˈbʊkkeɪs/",
        cn: "书架，书柜",
        jp: "本棚、書棚",
        family: "book / case / bookshelves",
        tips: "办公室/书房高频家具词，与 bookshelf 近义。常考 books stacked in a bookcase（书堆在书柜里）。",
        desc: "The bookcase is near the wall."
    },
    {
        word: "suspend",
        pos: "動",
        ipa: "/səˈspend/",
        cn: "悬挂，吊挂；暂停，中断",
        jp: "吊るす、下げる；一時停止する",
        family: "suspended / suspension / suspense",
        tips: "Part 1 状态考点：lights are suspended from the ceiling（灯悬挂在天花板上）；Part 5 考点：suspend operations（暂停运营）。",
        desc: "Lamps are suspended from above."
    },
    {
        word: "sleeved",
        pos: "形",
        ipa: "/sliːvd/",
        cn: "有袖的",
        jp: "袖のある",
        family: "sleeve / sleeveless / long-sleeved / short-sleeved",
        tips: "服装特征描写词，常见分词结构：long-sleeved shirt（长袖衬衫）或 short-sleeved top（短袖上衣）。",
        desc: "He wears a long-sleeved shirt."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "backpack",
        category: "简单",
        stem: "The hiker adjusted the straps on his ________ before continuing up the mountain path.",
        options: ["backpack", "scarf", "lid", "bookcase"],
        correct: "backpack",
        explanations: {
            guide: "随身装备名词。straps（背带）结合爬山语境，需调紧背带的物品为 backpack（双肩包）。",
            family: "backpack (n.双肩包) | scarf (n.围巾) | lid (n.盖子) | bookcase (n.书柜)。",
            details: "straps on his backpack 指双肩包的背带。scarf（围巾）、lid（盖子）没有可调节的背带（straps）。",
            cn: "徒步旅行者在继续沿着山路向上爬之前，调整了背包上的背带。",
            jp: "ハイカーは登山道をさらに登り始める前に、リュックサック（backpack）のストラップを調整しました。"
        }
    },
    {
        id: 2,
        target: "lid",
        category: "简单",
        stem: "Please make sure to tightly close the ________ of the paint container after each use.",
        options: ["lid", "frame", "overlook", "suspend"],
        correct: "lid",
        explanations: {
            guide: "容器部件名词。tightly close 结合 of the paint container（油漆容器的……），选 lid（盖子）。",
            family: "lid (n.盖子) | frame (n.框架) | overlook (v.俯瞰/忽略) | suspend (v.悬挂/暂停)。",
            details: "close the lid 指盖紧盖子。frame（框架）、overlook（俯瞰）均无法用于封闭容器。",
            cn: "每次使用后，请务必盖紧油漆桶的盖子。",
            jp: "使用後は毎回、塗料容器の蓋（lid）をしっかりと閉めるようにしてください。"
        }
    },
    {
        id: 3,
        target: "scarf",
        category: "简单",
        stem: "She wrapped a soft woolen ________ around her neck to protect against the chilly morning wind.",
        options: ["scarf", "sleeved", "artwork", "bookcase"],
        correct: "scarf",
        explanations: {
            guide: "服饰名词。wrapped around her neck（系在脖子上）结合 woolen（羊毛的），选 scarf（围巾）。",
            family: "scarf (n.围巾) | sleeved (adj.有袖的) | artwork (n.艺术品) | bookcase (n.书柜)。",
            details: "woolen scarf 指羊毛围巾。sleeved 是形容词，不能直接放在不定冠词 a 和形容词 woolen 后面作名词。",
            cn: "她把一条软羊毛围巾围在脖子上，以抵御早晨清冷的风。",
            jp: "彼女は朝の冷たい风から身を守るために、柔らかいウールのマフラー（scarf）を首に巻きつけました。"
        }
    },
    {
        id: 4,
        target: "bookcase",
        category: "简单",
        stem: "The office assistant organized the user manuals neatly in the wooden ________.",
        options: ["bookcase", "backpack", "lid", "overlook"],
        correct: "bookcase",
        explanations: {
            guide: "家具收纳名词。organize manuals neatly in...（将手册整齐整理在……里），家具选 wooden bookcase（木制书柜）。",
            family: "bookcase (n.书柜) | backpack (n.背包) | lid (n.盖子) | overlook (v.俯瞰)。",
            details: "wooden bookcase 意为木制书架/书柜。backpack（背包）通常用于外出携带，非办公室存放大量手册的固定家具。",
            cn: "办公室助理把使用手册整齐地整理在木制书柜里。",
            jp: "オフィスアシスタントは取扱説明書を木製の本棚（bookcase）できちんと整理しました。"
        }
    },
    {
        id: 5,
        target: "artwork",
        category: "简单",
        stem: "Visitors were requested not to touch any ________ exhibited in the gallery without permission.",
        options: ["artwork", "artistic", "suspend", "scarf"],
        correct: "artwork",
        explanations: {
            guide: "展品名词辨析。exhibited in the gallery（在画廊中展出）的物品为不可数集合名词 artwork（艺术品）。",
            family: "artwork (n.艺术品) | artistic (adj.艺术的) | suspend (v.悬挂) | scarf (n.围巾)。",
            details: "touch any artwork 指触摸任何艺术品。artistic 为形容词，不能作动词 touch 的宾语。",
            cn: "参观者被要求在未获许可的情况下，不得触摸画廊中展出的任何艺术品。",
            jp: "来馆者は、許可なくギャラリーに展示されている美術品（artwork）に触れないよう求められました。"
        }
    },
    {
        id: 6,
        target: "overlook",
        category: "简单",
        stem: "The top-floor executive suite features huge glass windows that ________ the city skyline.",
        options: ["overlook", "overlooked", "backpack", "frame"],
        correct: "overlook",
        explanations: {
            guide: "定语从句谓语动词原形。主语为复数名词 windows，从句引导词 that 后面接动词原形，表达“俯瞰”城市天际线，选 overlook。",
            family: "overlook (v.俯瞰) | overlooked (v-ed形式) | backpack (n.背包) | frame (n.框架)。",
            details: "windows that overlook the city skyline 指俯瞰城市天际线的窗户。一般现在时陈述客观特征，使用原形 overlook。",
            cn: "顶层的高管套房配有巨大玻璃窗，可俯瞰城市天际线。",
            jp: "最上階のエグゼクティブスィートには、都市のスカイラインを見渡す（overlook）大きなガラス窓が備わっています。"
        }
    },
    {
        id: 7,
        target: "scattered",
        category: "中等",
        stem: "After the sudden gust of wind, several important proposal documents were ________ across the lawn.",
        options: ["scattered", "scatter", "suspend", "sleeved"],
        correct: "scattered",
        explanations: {
            guide: "被动语态/状态描述。were 后面接过去分词，表达文件被大风“吹散/散落”在草坪上，选 scattered。",
            family: "scattered (adj./v-ed散落的) | scatter (v.散开) | suspend (v.悬挂) | sleeved (adj.有袖的)。",
            details: "were scattered across the lawn 表达散落在草坪各处。scatter 是动词原形，不能与 were 直接构成被动语态/状态表达。",
            cn: "一阵突如其来的强风过后，几份重要的方案文件散落在了草坪上。",
            jp: "突風が吹いた後、いくつかの重要な提案書類が芝生の上に散らばり（scattered）ました。"
        }
    },
    {
        id: 8,
        target: "frame",
        category: "中等",
        stem: "The museum curator decided to replace the damaged wooden ________ around the famous oil painting.",
        options: ["frame", "framed", "lid", "artwork"],
        correct: "frame",
        explanations: {
            guide: "名物部件辨析。around the oil painting（油画周围）被损坏的木制部件是 frame（画框）。",
            family: "frame (n.画框/框架) | framed (adj.装框的) | lid (n.盖子) | artwork (n.艺术品)。",
            details: "replace the damaged wooden frame 意为更换损坏的木制画框。framed 为形容词，不能直接跟在形容词 wooden 后面作名词中心语。",
            cn: "博物馆馆长决定更换名贵油画周围损坏的木制画框。",
            jp: "美術館の学芸員は、有名な油絵の周囲にある傷んだ木製額縁（frame）を交換することにしました。"
        }
    },
    {
        id: 9,
        target: "suspend",
        category: "中等",
        stem: "Decorative modern lamps are ________ directly from the ceiling above the main conference table.",
        options: ["suspended", "suspend", "scattered", "overlook"],
        correct: "suspended",
        explanations: {
            guide: "被动语态与方位短语。are 后面接过去分词，结合 directly from the ceiling（直接从天花板上），选 suspended（悬挂）。",
            family: "suspended (v-ed/adj.悬挂的) | suspend (v.悬挂) | scattered (adj.散落的) | overlook (v.俯瞰)。",
            details: "are suspended from the ceiling 指悬挂在天花板上。scattered 指散落，与 Lamp（灯具悬挂）挂装逻辑不符。",
            cn: "现代装饰灯直接悬挂主会议桌上方的天花板上。",
            jp: "モダンな装飾照明が、メインの会議テーブルの上の天井から直接吊り下げられて（suspended）います。"
        }
    },
    {
        id: 10,
        target: "sleeved",
        category: "中等",
        stem: "During the formal evening presentation, all staff members are required to wear long-________ shirts.",
        options: ["sleeved", "sleeve", "scarf", "backpack"],
        correct: "sleeved",
        explanations: {
            guide: "复合形容词考点。long-________ shirts 属于固定服装特征搭配，表达“长袖衬衫”，选 sleeved。",
            family: "sleeved (adj.有袖的) | sleeve (n.袖子) | scarf (n.围巾) | backpack (n.背包)。",
            details: "long-sleeved shirt 是“长袖衬衫”的标准固定说法。sleeve 是单数名词，不能直接在连字符 long- 后构成修饰 shirts 的复合形容词。",
            cn: "在正式的晚间演示会期间，所有员工都被要求穿着长袖衬衫。",
            jp: "正式な夜のプレゼンテーション中、すべてのスタッフは長袖（long-sleeved）のシャツを着用することが求められます。"
        }
    },
    {
        id: 11,
        target: "overlook",
        category: "中等",
        stem: "The quality assurance team must review the entire production report carefully so as not to ________ any defects.",
        options: ["overlook", "overlooking", "suspend", "scatter"],
        correct: "overlook",
        explanations: {
            guide: "不定式短语与一词多义。so as not to 后面需要接动词原形，表达为了不“忽略/遗漏”任何缺陷，选 overlook。",
            family: "overlook (v.忽略/俯瞰) | overlooking (v-ing) | suspend (v.暂停) | scatter (v.散播)。",
            details: "so as not to overlook any defects 意为“为了不错过/忽略任何缺陷”。overlooking 是分词形式，不能用在 so as not to 结构中。",
            cn: "质量保证团队必须仔细审查整个生产报告，以免忽略任何缺陷。",
            jp: "品質保証チームは、不具合を見落とさない（overlook）ように、全生産レポートを注意深く確認しなければなりません。"
        }
    },
    {
        id: 12,
        target: "artwork",
        category: "中等",
        stem: "The corporate headquarters hired a well-known local designer to create original ________ for the lobby wall.",
        options: ["artwork", "artist", "bookcase", "lid"],
        correct: "artwork",
        explanations: {
            guide: "动词宾语辨析。create original ________ 指创作原创“艺术品”，选集合名词 artwork。",
            family: "artwork (n.艺术品) | artist (n.艺术家) | bookcase (n.书柜) | lid (n.盖子)。",
            details: "create original artwork 意为创作原创艺术品。artist 是“艺术家”本人，公司雇用设计师不是为了“创作一个艺术家”。",
            cn: "公司总部聘请了一位当地知名设计师，为大堂墙面创作原创艺术品。",
            jp: "会社の本社は、ロビーの壁用にオリジナルの芸術作品（artwork）を制作するために、地元の有名デザイナーを雇いました。"
        }
    },
    {
        id: 13,
        target: "suspend",
        category: "困难",
        stem: "Due to ongoing regulatory compliance investigations, the board of directors decided to temporarily ________ construction at the site.",
        options: ["suspend", "suspension", "overlook", "scatter"],
        correct: "suspend",
        explanations: {
            guide: "动词不定式高阶应用。decided to 后面接动词原形，在商务审查语境中表达“暂停/中止”施工，选 suspend。",
            family: "suspend (v.暂停/中断) | suspension (n.暂停/中止) | overlook (v.忽略) | scatter (v.散开)。",
            details: "temporarily suspend construction 指临时暂停施工。suspension 是名词，不能紧跟在不定式符号 to 及副词 temporarily 之后。",
            cn: "由于正在进行的监管合规调查，董事会决定暂时暂停现场施工。",
            jp: "進行中の規制遵守調査のため、取締役会は現場での建設作業を一時的に停止（suspend）することを決定しました。"
        }
    },
    {
        id: 14,
        target: "frame",
        category: "困难",
        stem: "The senior architect presented a conceptual ________ for the sustainable urban development initiative.",
        options: ["framework", "frame", "bookcase", "sleeved"],
        correct: "framework",
        explanations: {
            guide: "派生高阶商务名词。a conceptual ________ 意为概念性的“框架/体系结构”，选 framework。",
            family: "framework (n.框架/体系) | frame (n.画框/结构) | bookcase (n.书架) | sleeved (adj.有袖的)。",
            details: "conceptual framework 是商业规划与学术提案中的高频术语，指概念框架/架构。frame 多指具体的画框或实物构架。",
            cn: "高级建筑师提交了一份可持续城市发展倡议的概念框架。",
            jp: "主任建築家は、持続可能な都市開発構想のための概念的なフレームワーク（framework）を提示しました。"
        }
    },
    {
        id: 15,
        target: "overlook",
        category: "困难",
        stem: "The seaside resort boasts a spacious private terrace ________ the clear blue waters of the bay.",
        options: ["overlooking", "overlook", "suspended", "scattered"],
        correct: "overlooking",
        explanations: {
            guide: "现在分词作后置定语。a spacious private terrace 与 overlook 之间是主动方位关系，用 overlooking 修饰 terrace。",
            family: "overlooking (v-ing俯瞰着的) | overlook (v.原形) | suspended (v-ed悬挂的) | scattered (v-ed散落的)。",
            details: "terrace overlooking the bay... 意为“俯瞰海湾的露台”。overlook 为动词原形，不能无连词直接跟随在名词后作定语。",
            cn: "这家海滨度假村拥有一个可俯瞰海湾蔚蓝海水的宽敞私人露台。",
            jp: "そのシーサイドリゾートは、湾の澄んだ青い海を見渡す（overlooking）広々としたプライベートテラスを誇っています。"
        }
    },
    {
        id: 16,
        target: "scattered",
        category: "困难",
        stem: "The survey revealed that the target demographic is geographically ________ across three different continents.",
        options: ["scattered", "scattering", "suspended", "sleeved"],
        correct: "scattered",
        explanations: {
            guide: "表语形容词/过去分词高阶用法。is geographically ________ 表达目标人群在地理分布上是“分散的/零散的”，选 scattered。",
            family: "scattered (adj.分散的) | scattering (n./v-ing散播) | suspended (adj.悬浮的) | sleeved (adj.有袖的)。",
            details: "geographically scattered 是统计分析高频词组，意为地理分布分散。scattering 为动名词或现在分词，不表示状态结果。",
            cn: "调查显示，目标受众群体在地理上分散在三个不同的大洲。",
            jp: "調査によると、ターゲット層は地理的に3つの異なる大陸に分散している（scattered）ことが明らかになりました。"
        }
    },
    {
        id: 17,
        target: "suspend",
        category: "困难",
        stem: "The municipal transport authority announced an immediate ________ of train services following the heavy snowfall.",
        options: ["suspension", "suspend", "artwork", "frame"],
        correct: "suspension",
        explanations: {
            guide: "动词派生名词考点。在冠词 an 和形容词 immediate 之后，需要填写名词形式 suspension，表达“暂停/停运”。",
            family: "suspension (n.暂停/停运) | suspend (v.暂停) | artwork (n.艺术品) | frame (n.框架)。",
            details: "an immediate suspension of train services 意为列车服务的立即停运。suspend 是动词，不能直接放在形容词 immediate 之后作宾语。",
            cn: "大雪过后，市政交通局宣布立即暂停列车服务。",
            jp: "大雪を受けて、市立交通局は電車運行の即时停止（suspension）を発表しました。"
        }
    },
    {
        id: 18,
        target: "frame",
        category: "困难",
        stem: "The historical photograph was carefully ________ behind protective anti-glare glass to prevent discoloration.",
        options: ["framed", "frame", "overlooked", "scattered"],
        correct: "framed",
        explanations: {
            guide: "被动语态及动作语义。was carefully ________ 被动语态，结合 behind protective glass（防眩光玻璃后），选 framed（被装框）。",
            family: "framed (v-ed装框的) | frame (v.装框) | overlooked (v-ed被忽略的) | scattered (v-ed被散落的)。",
            details: "was carefully framed 意为“被精心裱框”。overlooked（被忽略）、scattered（被吹散）在此处均不符合防褪色保护措施的逻辑。",
            cn: "这张历史照片被精心裱框在防眩光保护玻璃后，以防止变色。",
            jp: "歴史的な写真は、変色を防ぐために保護用反射防止ガラスの後ろに丁寧に額装（framed）されました。"
        }
    }
];