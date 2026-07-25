// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data41-50.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "workstation",
        pos: "名",
        ipa: "/ˈwɜːrksteɪʃn/",
        cn: "工作站，工位",
        jp: "ワークステーション、作業台",
        family: "work / station / workspace",
        tips: "办公场景高频词，常指配备电脑与办公设施的独立个人工作台（a personal workstation）。",
        desc: "She is at her workstation."
    },
    {
        word: "purse",
        pos: "名",
        ipa: "/pɜːrs/",
        cn: "手提包，钱包",
        jp: "ハンドバッグ、財布",
        family: "handbag / wallet / pouch",
        tips: "Part 1 动作与状态题高频，如 carrying a purse（提着手提包）或 searching in a purse（在包里翻找东西）。",
        desc: "She is carrying a purse."
    },
    {
        word: "shovel",
        pos: "名/動",
        ipa: "/ˈʃʌvl/",
        cn: "铲子，铁锹；用铲子铲",
        jp: "シャベル、スコップ；（シャベルで）すくう",
        family: "shoveling / shoveled",
        tips: "Part 1 户外清洁与施工场景高频，常考 shoveling snow（铲雪）或 holding a shovel（拿着铲子）。",
        desc: "He is holding a shovel."
    },
    {
        word: "mount",
        pos: "動",
        ipa: "/maʊnt/",
        cn: "安装，架设，固定；增加",
        jp: "取り付ける、固定する；高まる",
        family: "mounted / mounting / dismount",
        tips: "Part 1 设施描述常考被动语态 be mounted on the wall（挂在/固定在墙上）；Part 5/6 常考 mounting pressure（日益增长的压力）。",
        desc: "The TV is mounted on the wall."
    },
    {
        word: "glance",
        pos: "動/名",
        ipa: "/ɡlæns/",
        cn: "扫视，看一眼",
        jp: "ちらりと見る；一瞥",
        family: "glancing / glanced / at a glance",
        tips: "常与介词 at 搭配使用：glance at a document（看一眼文件）；短语 at a glance 意为“一目了然”。",
        desc: "He took a glance at his watch."
    },
    {
        word: "watering can",
        pos: "名",
        ipa: "/ˈwɔːtərɪŋ kæn/",
        cn: "浇水壶，喷壶",
        jp: "じょうろ",
        family: "water / watercan",
        tips: "Part 1 园艺与植物保养场景专属词，常考 holds a watering can（拿喷壶）或 using a watering can（使用浇水壶）。",
        desc: "She is holding a watering can."
    },
    {
        word: "drawer",
        pos: "名",
        ipa: "/drɔːr/",
        cn: "抽屉",
        jp: "引き出し",
        family: "drawers / desk drawer / file drawer",
        tips: "办公室场景高频物品词，常考 in the top drawer（在最顶层抽屉）或 opening a drawer（打开抽屉）。",
        desc: "The paper is in the drawer."
    },
    {
        word: "adjust",
        pos: "動",
        ipa: "/əˈdʒʌst/",
        cn: "调整，调节",
        jp: "調整する、調律する",
        family: "adjustment / adjustable / adjusted",
        tips: "Part 1 高频动作 adjusting the equipment（调节设备）；Part 5 派生词形容词 adjustable chair（可调节的椅）或名词 make an adjustment（做出调整）。",
        desc: "He is adjusting his glasses."
    },
    {
        word: "ladder",
        pos: "名",
        ipa: "/ˈlædər/",
        cn: "梯子",
        jp: "はしご",
        family: "step ladder / stepladder",
        tips: "Part 1 维修与建造场景极高频，常见短语 climbing a ladder（爬梯子）或 leaning against a ladder（靠在梯子上）。",
        desc: "He is climbing a ladder."
    },
    {
        word: "container",
        pos: "名",
        ipa: "/kənˈteɪnər/",
        cn: "容器，集装箱",
        jp: "容器、コンテナ",
        family: "contain / containment",
        tips: "物流与仓储高频词，如 shipping container（海运集装箱）或 storage container（储物容器）。",
        desc: "The container is full of goods."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "ladder",
        category: "简单",
        stem: "The electrician climbed up the ________ to repair the overhead ceiling light in the conference room.",
        options: ["ladder", "drawer", "purse", "shovel"],
        correct: "ladder",
        explanations: {
            guide: "名词辨析。句中有动作 climbed up（爬上去）和目的“维修顶灯”，符合工具逻辑的名词是 ladder（梯子）。",
            family: "ladder (n.梯子) | drawer (n.抽屉) | purse (n.手提包) | shovel (n.铲子)。",
            details: "climbed up the ladder 是托业听力与阅读中修缮场景的标准表述。drawer（抽屉）、purse（包）均无法攀爬。",
            cn: "电工爬上梯子去修理会议室顶部的吊灯。",
            jp: "電気技師は会議室の天井照明を修理するために、はしご（ladder）に登りました。"
        }
    },
    {
        id: 2,
        target: "drawer",
        category: "简单",
        stem: "Office supplies such as pens and sticky notes are stored in the top ________ of the desk.",
        options: ["drawer", "workstation", "watering can", "glance"],
        correct: "drawer",
        explanations: {
            guide: "家具与收纳位置名词。in the top ________ of the desk 属于办公场所常见搭配，指桌子的“最上层抽屉”，选 drawer。",
            family: "drawer (n.抽屉) | workstation (n.工位) | watering can (n.浇水壶) | glance (v./n.扫视)。",
            details: "the top drawer of the desk 意为桌子最上层的抽屉。workstation 是工位整体，不能作为桌内收纳空间。",
            cn: "办公用品（如钢笔和便签纸）保存在办公桌最上面的抽屉里。",
            jp: "ペンや付箋などの事務用品は、デスクの一番上の引き出し（drawer）に保管されています。"
        }
    },
    {
        id: 3,
        target: "adjust",
        category: "简单",
        stem: "Please ________ the height of your office chair to maintain good posture throughout the workday.",
        options: ["adjust", "adjustment", "mount", "container"],
        correct: "adjust",
        explanations: {
            guide: "祈使句谓语动词原形。句首 Please 后面必须接动词原形，表达“调节”椅子高度，选 adjust。",
            family: "adjust (v.调整) | adjustment (n.调整) | mount (v.安装) | container (n.容器)。",
            details: "adjust the height 意为“调整高度”。adjustment 是名词，不能跟在 Please 后面充当祈使句动词。",
            cn: "请调整办公椅的高度，以在整个工作日期间保持良好的坐姿。",
            jp: "勤務時間中に良い姿勢を保つために、オフィスチェアの高さを調整（adjust）してください。"
        }
    },
    {
        id: 4,
        target: "purse",
        category: "简单",
        stem: "The customer accidentally left her leather ________ on the chair before leaving the coffee shop.",
        options: ["purse", "workstation", "shovel", "ladder"],
        correct: "purse",
        explanations: {
            guide: "个人随身物品名词辨析。修饰语 leather（皮革的）修饰可随身携带的个人物品，选 purse（手提包/钱包）。",
            family: "purse (n.手提包/钱包) | workstation (n.工位) | shovel (n.铲子) | ladder (n.梯子)。",
            details: "leather purse 意为皮革手提包/钱包。其他选项均为工器具或大型办公设施，无法作为个人在咖啡馆遗忘在椅子上的随身物品。",
            cn: "这位顾客在离开咖啡馆前，不小心把她的皮质手提包留在了椅子上。",
            jp: "お客様はカフェを出る前に、誤って革のハンドバッグ（purse）を椅子の上に忘れてしまいました。"
        }
    },
    {
        id: 5,
        target: "watering can",
        category: "简单",
        stem: "The gardener used a plastic ________ to water the potted plants in the hotel lobby.",
        options: ["watering can", "container", "glance", "adjust"],
        correct: "watering can",
        explanations: {
            guide: "专用园艺工具名词。句中有动词 water（浇水）和对象 potted plants（盆栽），使用的专用工具为 watering can（浇水壶）。",
            family: "watering can (n.浇水壶) | container (n.容器) | glance (n.扫视) | adjust (v.调整)。",
            details: "watering can 专指植物浇水用的喷壶/水壶。container（容器）概念过于宽泛，没有 watering can 具体准确。",
            cn: "园丁用一个塑料浇水壶给酒店大堂的盆栽植物浇水。",
            jp: "庭師はプラスチック製のじょうろ（watering can）を使って、ホテルのロビーにある鉢植えに水をやりました。"
        }
    },
    {
        id: 6,
        target: "container",
        category: "简单",
        stem: "All recyclable waste should be placed in the designated green ________ in the hallway.",
        options: ["container", "containment", "shovel", "drawer"],
        correct: "container",
        explanations: {
            guide: "可数名词物名考点。冠词 a/the 以及形容词 designated green 后面接可数名词单数，指回收废弃物的“容器/回收箱”，选 container。",
            family: "container (n.容器) | containment (n.控制/封堵) | shovel (n.铲子) | drawer (n.抽屉)。",
            details: "designated green container 指指定的绿色回收箱/容器。containment 是抽象名词（控制/遏制），不指具体的容器器皿。",
            cn: "所有可回收垃圾都应放入走廊指定的绿色垃圾箱中。",
            jp: "すべてのリサイクル可能なゴミは、廊下にある指定された緑色の容器（container）に入れる必要があります。"
        }
    },
    {
        id: 7,
        target: "workstation",
        category: "中等",
        stem: "Each new employee is assigned a fully equipped ________ with a dual-monitor desktop setup.",
        options: ["workstation", "purse", "ladder", "watering can"],
        correct: "workstation",
        explanations: {
            guide: "办公场景名词辨析。句中有分配（assigned）和电脑配置（dual-monitor desktop setup），指配备齐全的“工位”，选 workstation。",
            family: "workstation (n.工位/工作站) | purse (n.手提包) | ladder (n.梯子) | watering can (n.浇水壶)。",
            details: "fully equipped workstation 意为配备齐全的工作站/工位。其他选项均非包含电脑设备的办公空间。",
            cn: "每位新员工都会被分配到一个配备双显示器桌面终端的完整工位。",
            jp: "各新入社員には、デュアルモニターのデスクトップ設定を備えた完全装備のワークステーション（workstation）が割り当てられます。"
        }
    },
    {
        id: 8,
        target: "mount",
        category: "中等",
        stem: "Technicians will ________ the new high-definition projector onto the conference room ceiling tomorrow.",
        options: ["mount", "mounted", "adjust", "glance"],
        correct: "mount",
        explanations: {
            guide: "情态动词/将来时态动词原形。will 后面接动词原形，表达将投影仪“安装/悬挂”到天花板上，选 mount。",
            family: "mount (v.安装/架设) | mounted (v-ed形式) | adjust (v.调整) | glance (v.扫视)。",
            details: "mount... onto... 是固定搭配，表示“将……安装固定到……之上”。mounted 为过去式或过去分词，不能跟在 will 后面。",
            cn: "技术人员明天将把新的高清投影仪安装到会议室的天花板上。",
            jp: "技術者は明日、新しい高画質プロジェクターを会議室の天井に取り付け（mount）ます。"
        }
    },
    {
        id: 9,
        target: "glance",
        category: "中等",
        stem: "The marketing director took a quick ________ at the sales figures before addressing the shareholders.",
        options: ["glance", "glancing", "shovel", "container"],
        correct: "glance",
        explanations: {
            guide: "动名词短语搭配。take a glance at 是托业高频固定短语，意为“扫视/看一眼”，空格填入名词 glance。",
            family: "glance (n./v.扫视) | glancing (v-ing/adj.瞥见的) | shovel (n.铲子) | container (n.容器)。",
            details: "take a quick glance at sth 意为“快速浏览某物”。glancing 是分词形式，不能被不定冠词 a 和形容词 quick 修饰。",
            cn: "在向股东致辞之前，市场总监快速浏览了一下销售数据。",
            jp: "マーケティング部長は株主に説明する前に、売上数字を素早くちらりと見（glance）ました。"
        }
    },
    {
        id: 10,
        target: "shovel",
        category: "中等",
        stem: "Maintenance workers used a heavy-duty metal ________ to clear path snow away after the winter storm.",
        options: ["shovel", "drawer", "purse", "ladder"],
        correct: "shovel",
        explanations: {
            guide: "工具名词语义辨析。结合后半句 clear path snow away（清理路面积雪），使用的金属工具为 shovel（铲子/雪铲）。",
            family: "shovel (n.铲子) | drawer (n.抽屉) | purse (n.包) | ladder (n.梯子)。",
            details: "heavy-duty metal shovel 意为重型金属铲。drawer（抽屉）、purse（钱包）等均不符合清理积雪的工具属性。",
            cn: "暴风雪过后，维修工人用一把重型金属铲清理了路面上的积雪。",
            jp: "冬の嵐の後、メンテナンス作業員は通路の雪を取り除くために頑丈な金属製シャベル（shovel）を使用しました。"
        }
    },
    {
        id: 11,
        target: "adjust",
        category: "中等",
        stem: "After receiving constructive feedback from clients, the engineering team made a slight ________ to the draft.",
        options: ["adjustment", "adjust", "mounted", "container"],
        correct: "adjustment",
        explanations: {
            guide: "动词派生名词短语。make an adjustment to 属于高频商务短语，意为“对……进行微调”，空格填入名词 adjustment。",
            family: "adjustment (n.调整/微调) | adjust (v.调整) | mounted (adj.安装好的) | container (n.容器)。",
            details: "make a slight adjustment 表示做出微调。adjust 是动词，不能直接放在不定冠词 a 和形容词 slight 后面作宾语。",
            cn: "在收到来自客户的建设性反馈后，工程团队对草案进行了微调。",
            jp: "クライアントから建設的なフィードバックを受けた後、エンジニアリングチームは草案にわずかな調整（adjustment）を加えました。"
        }
    },
    {
        id: 12,
        target: "container",
        category: "中等",
        stem: "The international shipping company loaded hundreds of cargo ________ onto the freighter at the port.",
        options: ["containers", "container", "workstation", "watering can"],
        correct: "containers",
        explanations: {
            guide: "复数名词语义考点。hundreds of 后面必须接可数名词复数形式，且在物流运输语境中指“货运集装箱”，选 containers。",
            family: "containers (n.复数集装箱) | container (n.单数) | workstation (n.工位) | watering can (n.浇水壶)。",
            details: "cargo containers 意为货运集装箱。hundreds of 结构要求必须使用复数名词 containers，而非单数 container。",
            cn: "这家国际运输公司在港口将数百个货运集装箱装上了货轮。",
            jp: "国際海運会社は、港で貨物船に数百個の貨物コンテナ（containers）を積み込みました。"
        }
    },
    {
        id: 13,
        target: "mount",
        category: "困难",
        stem: "There is ________ pressure on the logistics department to reduce delivery times during the peak shopping season.",
        options: ["mounting", "mount", "adjusted", "glance"],
        correct: "mounting",
        explanations: {
            guide: "分词作定语高阶考点。mounting 充当形容词修饰不可数名词 pressure，表示“日益增长的/不断的”压力。",
            family: "mounting (adj.日益增长的) | mount (v.安装/增加) | adjusted (adj.调整好的) | glance (n.扫视)。",
            details: "mounting pressure 是托业阅读与听力中的固定高阶搭配。mount 是动词原形，在此处不能作为修饰 pressure 的前置形容词。",
            cn: "在购物旺季期间，物流部门面临着缩短送货时间的日益增长的压力。",
            jp: "ショッピングのピークシーズン中、配送時間を短縮するという物流部門への高まる（mounting）プレッシャーがあります。"
        }
    },
    {
        id: 14,
        target: "glance",
        category: "困难",
        stem: "________ at the financial summary, one can immediately notice a significant increase in quarterly operating revenue.",
        options: ["Glancing", "Glance", "Mounted", "Shoveling"],
        correct: "Glancing",
        explanations: {
            guide: "现在分词短语作状语。逻辑主语是句中的 one，Glancing at... 构成分词短语表示“一扫视/一看到……”，选 Glancing。",
            family: "Glancing (v-ing分词) | Glance (v.动词原形) | Mounted (v-ed分词) | Shoveling (v-ing铲)。",
            details: "Glancing at the financial summary... 相当于 When one glances at...。Glance 是动词原形，不能无连词直接置于句首引导状语。",
            cn: "扫视一眼财务汇总表，人们就能立刻注意到季度营业收入的显着增长。",
            jp: "財務要約をちらりと見ると（Glancing）、四半期の営業収益が大幅に増加していることにすぐに気づきます。"
        }
    },
    {
        id: 15,
        target: "drawer",
        category: "困难",
        stem: "The legal department keeps all confidential contracts stored in locked file ________ for strict compliance.",
        options: ["drawers", "drawer", "workstations", "purses"],
        correct: "drawers",
        explanations: {
            guide: "复合名词复数修饰。locked file ________ 指“带锁的文件夹/文件抽屉”，结合泛指复数概念选 drawers。",
            family: "drawers (n.复数抽屉) | drawer (n.单数) | workstations (n.工位) | purses (n.包)。",
            details: "file drawers 指档案抽屉。在泛指此类办公设施时，用复数形式 drawers 符合英语泛指习惯且与 stores/keeps 复数语义相符。",
            cn: "为了严格遵守合规要求，法务部将所有保密合同保存在带锁的文件抽屉里。",
            jp: "法務部門は、コンプライアンスを厳格に遵守するため、すべての機密契約書を鍵付きのファイル引き出し（drawers）に保管しています。"
        }
    },
    {
        id: 16,
        target: "workstation",
        category: "困难",
        stem: "To improve ergonomic health, the wellness committee recommended installing height-adjustable ________ for all employees.",
        options: ["workstations", "workstation", "containers", "ladders"],
        correct: "workstations",
        explanations: {
            guide: "商务复合名词与复数概念。height-adjustable ________ 指“升降可调式工位”，全公司员工使用需用复数 workstations。",
            family: "workstations (n.复数工位) | workstation (n.单数) | containers (n.容器) | ladders (n.梯子)。",
            details: "height-adjustable workstations 是现代办公健康领域的高频专属词汇。for all employees（面向所有员工）决定了需接复数名词。",
            cn: "为了改善人体工学健康，健康委员会建议为所有员工安装可调节高度的工位。",
            jp: "人間工学的な健康を改善するために、ウェルネス委員会はすべての従業員に高さ調整可能なワークステーション（workstations）を設置することを推奨しました。"
        }
    },
    {
        id: 17,
        target: "shovel",
        category: "困难",
        stem: "The maintenance crew was spotted ________ fresh soil into the raised flowerbeds near the main entrance.",
        options: ["shoveling", "shoveled", "mounting", "adjusting"],
        correct: "shoveling",
        explanations: {
            guide: "感官/观察动词+宾语+现在分词补足语。was spotted ________ 结构中，动作发出者 crew 与 shovel 是主动关系，用现在分词 shoveling。",
            family: "shoveling (v-ing铲/搬运) | shoveled (v-ed形式) | mounting (v-ing安装) | adjusting (v-ing调整)。",
            details: "was spotted shoveling soil 表示“被看到正在用铲子铲土”。shoveled 表示被动或完成，不符合现场正在进行的动作描述。",
            cn: "有人看到维修人员正在主入口附近的抬高花坛里用铲子填填新土。",
            jp: "メインエントランス近くの花壇に、メンテナンスの作業員が新しい土をシャベルですくって（shoveling）入れているのが見られました。"
        }
    },
    {
        id: 18,
        target: "container",
        category: "困难",
        stem: "Strict environmental regulations dictate that liquid chemical hazardous waste must be stored in specialized ________ facilities.",
        options: ["containment", "container", "drawer", "watering can"],
        correct: "containment",
        explanations: {
            guide: "高阶派生名词作定语。containment facility 是专业环保术语，意为“安全封堵/防泄漏设施”，选 containment。",
            family: "containment (n.防泄封堵/遏制) | container (n.容器) | drawer (n.抽屉) | watering can (n.喷壶)。",
            details: "containment facilities 指专业防泄漏/封存危害物的设施。container 指具体的普通容器，无法修饰 facilities 表达“防护封堵系统”的概念。",
            cn: "严格的环境法规规定，液体化学危险废物必须储存在专门的防泄漏封堵设施中。",
            jp: "厳格な環境規制により、液体化学有害廃棄物は専門の封じ込め（containment）施設に保管することが義務付けられています。"
        }
    }
];