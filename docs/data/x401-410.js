// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data781-790.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "cooking utensils",
        pos: "名",
        ipa: "/ˈkʊkɪŋ juːˈtenslz/",
        cn: "烹饪用具，厨房器具（复数）",
        jp: "調理器具、台所用品（複数）",
        family: "utensil / utensils / cook / cooking",
        tips: "Part 1 & 酒店餐饮高频：stainless steel cooking utensils（不锈钢厨具），hang cooking utensils above the stove（在炉灶上方悬挂厨具）。",
        desc: "Cooking utensils hang above the counter."
    },
    {
        word: "wristband",
        pos: "名",
        ipa: "/ˈrɪstbænd/",
        cn: "腕带，手环，入场手带",
        jp: "リストバンド、腕輪、入場用テープ",
        family: "wristbands / wrist / band",
        tips: "展会、活动与Part 1高频：wear an admission wristband（佩戴入场腕带），color-coded wristband（按颜色区分的手环）。",
        desc: "Attendees wear a colored wristband."
    },
    {
        word: "have one's ... bent",
        pos: "動詞句/構文",
        ipa: "/hæv wʌnz ... bent/",
        cn: "弯曲（膝盖/手臂等身体部位）",
        jp: "（膝や腕などを）曲げている、曲げた状態にする",
        family: "bend / bent / bending",
        tips: "Part 1 动作与身体姿势高频：have his knees bent while lifting boxes（搬箱子时弯曲膝盖），have her arms bent（双臂弯曲）。",
        desc: "He has his knees bent while lifting."
    },
    {
        word: "intersection",
        pos: "名",
        ipa: "/ˌɪntərˈsekʃn/",
        cn: "十字路口，交叉路口，交汇处",
        jp: "交差点、交差",
        family: "intersect / intersecting / intersections",
        tips: "市政交通与Part 1高频：busy downtown intersection（繁华的市中心十字路口），pedestrian crossing at the intersection（十字路口的斑马线）。",
        desc: "Traffic stopped at the busy intersection."
    },
    {
        word: "workbench",
        pos: "名",
        ipa: "/ˈwɜːrkbentʃ/",
        cn: "工作台，操作台，工匠台",
        jp: "作業台、ワークベンチ",
        family: "workbenches / bench",
        tips: "Part 1 & 制造车间高频：tools arranged on the workbench（工作台上整齐排列的工具），stand by the wooden workbench（站在木质操作台旁）。",
        desc: "Tools are laid out on the workbench."
    },
    {
        word: "commodities",
        pos: "名",
        ipa: "/kəˈmɑːdətiz/",
        cn: "大宗商品，初级产品，商品（复数）",
        jp: "商品、日用品、一次産品（複数）",
        family: "commodity / commoditize / commoditization",
        tips: "国际贸易与金融高频：agricultural/raw commodities（农产品/大宗原材料），commodities trading/market（大宗商品交易/市场）。",
        desc: "Prices of raw commodities increased."
    },
    {
        word: "auditorium",
        pos: "名",
        ipa: "/ˌɔːdɪˈtɔːriəm/",
        cn: "大礼堂，音乐厅，观众席",
        jp: "講堂、大ホール、観客席",
        family: "auditoriums / auditoria / audio",
        tips: "会务设施与大型活动高频：university/spacious auditorium（大学礼堂/宽敞的礼堂），gather in the auditorium（在礼堂集合）。",
        desc: "The keynote speaker entered the auditorium."
    },
    {
        word: "sunshades",
        pos: "名",
        ipa: "/ˈsʌnʃeɪdz/",
        cn: "遮阳帘，遮阳板，遮阳伞（复数）",
        jp: "日よけ、サンシェード、ブラインド（複数）",
        family: "sunshade / shade / shaded",
        tips: "Part 1 & 建筑设施高频：lower the sunshades（拉下遮阳帘），patio tables equipped with sunshades（配有遮阳棚的露台餐桌）。",
        desc: "Offices lowered the window sunshades."
    },
    {
        word: "a bunch of flowers",
        pos: "名詞句",
        ipa: "/ə bʌntʃ əv ˈflaʊərz/",
        cn: "一束花，一把花",
        jp: "花束、ひと房の花",
        family: "bunch / flower / flowers / bouquet",
        tips: "Part 1 照片描述核心短语：holding a bunch of flowers（拿着一束花），a bunch of flowers placed in a vase（花瓶里插着一束花）。",
        desc: "A vase holds a fresh bunch of flowers."
    },
    {
        word: "fallen petals",
        pos: "名",
        ipa: "/ˈfɔːlən ˈpetlz/",
        cn: "散落的花瓣，飘落的花瓣（复数）",
        jp: "落ちた花びら、散った花弁（複数）",
        family: "petal / petals / fall / fallen",
        tips: "Part 1 场景细节高频：fallen petals scattered on the walkway（散落步道上的花瓣），sweep the fallen petals（清扫散落的花瓣）。",
        desc: "Fallen petals covered the garden pathway."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "cooking utensils",
        category: "简单",
        stem: "The executive chef organized various stainless steel ________ neatly on the magnetic rack above the kitchen counter.",
        options: ["cooking utensils", "wristbands", "sunshades", "fallen petals"],
        correct: "cooking utensils",
        explanations: {
            guide: "厨房用品名词短语考点。stainless steel ________ 结合主厨在厨房台面上方的磁吸架上整齐收纳，选 cooking utensils（烹饪用具/厨具）。",
            family: "cooking utensils (n.厨具/烹饪用具) | wristbands (n.手环) | sunshades (n.遮阳帘) | fallen petals (n.花瓣)。",
            details: "stainless steel cooking utensils 意为不锈钢厨具。wristbands（手环）、sunshades（遮阳帘）均非厨房料理操作用具。",
            cn: "行政主厨将各种不锈钢烹饪用具整齐地收纳在厨房台面上方的磁吸架上。",
            jp: "総料理長は、キッチンカウンターの上のマグネットラックに様々なステンレス製調理器具（cooking utensils）をきちんと整理しました。"
        }
    },
    {
        id: 2,
        target: "wristband",
        category: "简单",
        stem: "Conference attendees must show their official admission ________ at the security checkpoint before entering the exhibition hall.",
        options: ["wristband", "workbench", "intersection", "auditorium"],
        correct: "wristband",
        explanations: {
            guide: "参会凭证名词考点。admission ________ 结合在安检处出示以进入展厅，选 wristband（手环/入场腕带）。",
            family: "wristband (n.手环/腕带) | workbench (n.工作台) | intersection (n.十字路口) | auditorium (n.礼堂)。",
            details: "admission wristband 属于展会与大型活动常用短语，专指佩戴在手腕上的入场标识手环。workbench（工作台）非个人凭据。",
            cn: "参会人员在进入展厅之前，必须在安检口出示其官方入场腕带。",
            jp: "会議の参加者は、展示ホールに入る前にセキュリティチェックポイントで公式の入場用リストバンド（wristband）を提示しなければなりません。"
        }
    },
    {
        id: 3,
        target: "intersection",
        category: "简单",
        stem: "Traffic police officers were deployed to direct vehicles when the traffic lights failed at the busy downtown ________.",
        options: ["intersection", "wristband", "workbench", "sunshade"],
        correct: "intersection",
        explanations: {
            guide: "道路交通设施名词考点。busy downtown ________ 结合红绿灯故障交警现场疏导交通，选 intersection（十字路口/交叉路口）。",
            family: "intersection (n.十字路口) | wristband (n.腕带) | workbench (n.工作台) | sunshade (n.遮阳帘)。",
            details: "downtown intersection 意为市中心十字路口。workbench（工作台）、wristband（腕带）均非车辆通行的道路交通节点。",
            cn: "在繁华的市中心十字路口信号灯发生故障时，交警被派往现场疏导车辆。",
            jp: "繁華街の混雑した交差点（intersection）で信号機が故障した際、車両を誘導するために交通警察官が配置されました。"
        }
    },
    {
        id: 4,
        target: "workbench",
        category: "简单",
        stem: "The carpenter wiped sawdust off the heavy wooden ________ before starting on the next custom furniture piece.",
        options: ["workbench", "intersection", "auditorium", "wristband"],
        correct: "workbench",
        explanations: {
            guide: "车间加工设施名词。wiped sawdust off the heavy wooden ________ 结合木匠擦去木屑开始下一件定制家具的制作，选 workbench（工作台/操作台）。",
            family: "workbench (n.工作台/操作台) | intersection (n.十字路口) | auditorium (n.礼堂) | wristband (n.腕带)。",
            details: "wooden workbench 专指木工或工匠操作台。intersection（十字路口）、auditorium（大礼堂）均非木工作业的工作台面。",
            cn: "木匠在开始制作下一件定制家具之前，擦掉了沉重木质工作台上的锯末木屑。",
            jp: "大工は、次の特注家具の製作に取り掛かる前に、重い木製作業台（workbench）から木くずを拭き取りました。"
        }
    },
    {
        id: 5,
        target: "auditorium",
        category: "简单",
        stem: "Hundreds of shareholders gathered in the corporate ________ to hear the annual financial briefing from the CEO.",
        options: ["auditorium", "wristband", "workbench", "sunshade"],
        correct: "auditorium",
        explanations: {
            guide: "大型集会场所名词。gathered in the corporate ________ to hear the briefing 结合数百名股东齐聚听取首席执行官的财报汇报，选 auditorium（大礼堂/音乐厅）。",
            family: "auditorium (n.大礼堂/报告厅) | wristband (n.手环) | workbench (n.工作台) | sunshade (n.遮阳板)。",
            details: "corporate auditorium 意为企业大礼堂/报告厅。workbench（工作台）、wristband（腕带）均非容纳数百人开会听讲座的大型场馆建筑。",
            cn: "数百名股东齐聚公司大礼堂，听取首席执行官所做的年度财务汇报。",
            jp: "何百人もの株主がCEOによる年次財務説明を聞くために、企業の大ホール/講堂（auditorium）に集まりました。"
        }
    },
    {
        id: 6,
        target: "a bunch of flowers",
        category: "简单",
        stem: "The hotel receptionist placed a ceramic vase containing ________ on the front reception desk to welcome new guests.",
        options: ["a bunch of flowers", "cooking utensils", "trolley tracks", "commodities"],
        correct: "a bunch of flowers",
        explanations: {
            guide: "Part 1 前台陈设短语考点。a ceramic vase containing ________ 结合在前台放置装有花卉的陶瓷花瓶以欢迎宾客，选 a bunch of flowers（一束花）。",
            family: "a bunch of flowers (短语.一束花) | cooking utensils (n.厨具) | trolley tracks (n.电车铁轨) | commodities (n.大宗商品)。",
            details: "a bunch of flowers in a vase 属于前台及室内装饰典型搭配，意为花瓶里的一束鲜花。cooking utensils（厨具）不会插在陶瓷花瓶中做迎宾陈列。",
            cn: "酒店接待员在总服务台前台摆放了一个插有一束鲜花的陶瓷花瓶，以欢迎新入住的宾客。",
            jp: "ホテルの受付係は、新しい宿泊客を歓迎するために、花束（a bunch of flowers）が入った陶器の花瓶をフロントデスクの上に置きました。"
        }
    },
    {
        id: 7,
        target: "commodities",
        category: "中等",
        stem: "Due to geopolitical tensions and transport bottlenecks, global market prices for raw ________ rose significantly this quarter.",
        options: ["commodities", "auditoriums", "wristbands", "workbenches"],
        correct: "commodities",
        explanations: {
            guide: "国际贸易大宗原料名词复数。prices for raw ________ 结合地缘紧张与运输瓶颈导致国际市场原材料价格大幅上涨，选 commodities（大宗商品/初级原材料）。",
            family: "commodities (n.复数大宗商品/原料) | auditoriums (n.礼堂) | wristbands (n.手环) | workbenches (n.操作台)。",
            details: "raw commodities 专指大宗原料商品（如原油、粮食、金属矿产等）。auditoriums（礼堂）、wristbands（腕带）均非全球期货大宗交易标的物。",
            cn: "由于地缘政治紧张局势和运输瓶颈，本季度全球大宗原材料价格大幅上涨。",
            jp: "地政学的緊張と輸送のボトルネックのため、原材料となる一次産品/商品（commodities）の国際市場価格が今四半期に大幅に上昇しました。"
        }
    },
    {
        id: 8,
        target: "sunshades",
        category: "中等",
        stem: "Office workers lowered the motorized window ________ to reduce glare on their computer monitors during peak afternoon sunlight.",
        options: ["sunshades", "wristbands", "commodities", "intersections"],
        correct: "sunshades",
        explanations: {
            guide: "建筑遮光设施名词复数。lowered the motorized window ________ 结合午后强光时拉下电动遮阳设备以减少电脑屏幕反光眩光，选 sunshades（遮阳帘/遮阳板）。",
            family: "sunshades (n.遮阳帘/日遮) | wristbands (n.手环) | commodities (n.大宗商品) | intersections (n.交叉路口)。",
            details: "window sunshades 意为窗户遮阳帘/遮阳板。wristbands（手环）、intersections（十字路口）均非阻挡刺眼强光反射屏幕的窗用遮阳装置。",
            cn: "办公室员工拉下了电动窗户遮阳帘，以减少午后强烈阳光照射在电脑显示屏上的眩光。",
            jp: "オフィスの従業員は、午後の強い日差しによるコンピュータ画面の反射やまぶしさを軽減するために、電動の窓用サンシェード（sunshades）を下げました。"
        }
    },
    {
        id: 9,
        target: "fallen petals",
        category: "中等",
        stem: "Groundskeeper staff used blowers to clear the colorful ________ from the courtyard stone pathway after the cherry blossom festival.",
        options: ["fallen petals", "cooking utensils", "workbenches", "wristbands"],
        correct: "fallen petals",
        explanations: {
            guide: "自然景观地面物复数。clear the colorful ________ from the stone pathway 结合樱花节后清洁工从庭院石板路上清扫五彩斑斓的掉落物，选 fallen petals（散落的花瓣）。",
            family: "fallen petals (n.散落的花瓣) | cooking utensils (n.厨具) | workbenches (n.操作台) | wristbands (n.手环)。",
            details: "fallen petals 意为飘落/散落的花瓣。cooking utensils（厨具）、workbenches（工作台）均非用吹叶机在石道上清扫的花木落瓣。",
            cn: "樱花节过后，园区绿化维护人员使用吹叶机清扫了庭院石板小径上五彩斑斓的散落花瓣。",
            jp: "桜祭りの後、敷地の整備員は中庭の石畳の小道から色鮮やかに散った花びら（fallen petals）を取り除くためにブロワーを使用しました。"
        }
    },
    {
        id: 10,
        target: "have one's ... bent",
        category: "中等",
        stem: "Safety guidelines dictate that warehouse loaders should always ________ while lifting heavy cargo boxes to prevent back strain.",
        options: ["have their knees bent", "have their wristbands worn", "have their intersections cleared", "have their sunshades lowered"],
        correct: "have their knees bent",
        explanations: {
            guide: "Part 1 & 工伤安全操作身体姿势固定句式。搬运重物防止腰部拉伤时正确的身体力学姿态，选 have their knees bent（弯曲膝盖）。",
            family: "have one's knees bent (短语.弯曲膝盖) | have wristbands worn (短语.佩戴腕带) | have intersections cleared (短语.清理路口) | have sunshades lowered (短语.拉下遮阳帘)。",
            details: "have one's knees bent 属于托业 Part 1 动作描述与安全搬运核心搭配，意为屈膝。其余选项均非保护腰背部的搬运姿势。",
            cn: "安全规范明确要求，仓库搬运工在搬运沉重货物箱时应始终保持屈膝姿势，以防止背部肌肉拉伤。",
            jp: "安全ガイドラインでは、背中の痛みを防ぐために重い貨物箱を持ち上げる際、倉庫の荷役作業員は常に膝を曲げた状態にする（have their knees bent）ことが義務付けられています。"
        }
    },
    {
        id: 11,
        target: "cooking utensils",
        category: "中等",
        stem: "The restaurant supply catalog features a wide selection of durable aluminum ________ designed for commercial kitchen use.",
        options: ["utensils", "wristbands", "sunshades", "petals"],
        correct: "utensils",
        explanations: {
            guide: "商业厨具名词考点。durable aluminum ________ designed for commercial kitchen 结合商用厨房用品目录，选 utensils（用具/厨具）。",
            family: "utensils (n.复数用具/器具) | wristbands (n.手环) | sunshades (n.遮阳板) | petals (n.花瓣)。",
            details: "aluminum utensils 意为铝制器具/厨具。wristbands（手环）、petals（花瓣）均非餐饮设备供应目录中列出的商用厨房用具。",
            cn: "这家餐厅用品目录提供了丰富多样的耐用铝制烹饪器具，专为商业厨房设计。",
            jp: "レストラン用品のカタログには、業務用厨房向けに設計された耐久性のあるアルミニウム製調理器具（utensils）が豊富に取りそろえられています。"
        }
    },
    {
        id: 12,
        target: "intersection",
        category: "中等",
        stem: "City planners proposed installing an automated pedestrian crossing signal at the heavily trafficked ________ of 5th Avenue and Pine Street.",
        options: ["intersection", "workbench", "auditorium", "canteen"],
        correct: "intersection",
        explanations: {
            guide: "市政道路路口专有名词。the heavily trafficked ________ of 5th Avenue and Pine Street 结合在两条街道的交汇口加装自动人行过街信号灯，选 intersection（十字路口/交叉路口）。",
            family: "intersection (n.十字路口/交叉点) | workbench (n.工作台) | auditorium (n.礼堂) | canteen (n.食堂)。",
            details: "the intersection of Street A and Street B 属于市政交通最地道固定表达，意为两条路的十字交叉口。auditorium（礼堂）、canteen（食堂）不用于街道交叉。",
            cn: "城市规划者提议在第五大道与松树街车流繁忙的十字路口安装自动人行过街信号灯。",
            jp: "都市計画担当者は、5番街とパイン通りの交通量の多い交差点（intersection）に自動歩行者横断信号を設置することを提案しました。"
        }
    },
    {
        id: 13,
        target: "commodities",
        category: "困难",
        stem: "Financial analysts noted that gold is widely regarded as a reliable ________ asset during periods of severe currency devaluation.",
        options: ["commodity", "commodities", "commoditization", "commoditized"],
        correct: "commodity",
        explanations: {
            guide: "单数名词作前置定语考点。a reliable ________ asset 结构中，不定冠词 a 修饰单数名词短语，作为前置定语修饰 asset（资产），选单数名词形式 commodity。",
            family: "commodity (n.单数大宗商品/作定语) | commodities (n.复数商品) | commoditization (n.商品化) | commoditized (adj.商品化的)。",
            details: "commodity asset 意为大宗商品类资产。名词作前置定语时通常采用单数形式 commodity（如 commodity prices, commodity market, commodity asset）。",
            cn: "金融分析师指出，在货币严重贬值时期，黄金被广泛视为一种可靠的大宗商品类避险资产。",
            jp: "財務アナリストは、深刻な通貨切り下げの時期において、金は信頼できる商品/コモディティ（commodity）資産として広く見なされていると指摘しました。"
        }
    },
    {
        id: 14,
        target: "auditorium",
        category: "困难",
        stem: "Acoustic engineers tested the modern concert hall to ensure that sound levels were distributed evenly across the entire ________ seating area.",
        options: ["auditorium", "auditory", "audio", "audience"],
        correct: "auditorium",
        explanations: {
            guide: "建筑专有名词作定语考点。the entire ________ seating area 结合声学工程师测试音乐大厅以确保声音均匀分布在观众席，选 auditorium（礼堂/观众厅）。",
            family: "auditorium (n.礼堂/观众席作定语) | auditory (adj.听觉的) | audio (n./adj.音频) | audience (n.观众)。",
            details: "auditorium seating area 意为大礼堂观众席座区。auditory 意为生理上的听觉感官，不能修饰建筑物理座椅大厅；audience 指观众群体（人）。",
            cn: "声学工程师对现代化音乐厅进行了测试，以确保声音能均匀分布在整个大礼堂观众席区域。",
            jp: "音響エンジニアは、講堂/大ホール（auditorium）の客席エリア全体に音響レベルが均等に行き渡ることを確認するために、近代的なコンサートホールをテストしました。"
        }
    },
    {
        id: 15,
        target: "workbench",
        category: "困难",
        stem: "Precision measuring calipers and soldering irons were neatly ________ across the technician's wooden workbench.",
        options: ["arranged", "arranging", "arrangement", "arrange"],
        correct: "arranged",
        explanations: {
            guide: "Part 1 状态被动语态过去分词考点。were neatly ________ across the workbench 结合精密卡尺和电烙铁在工作台上被整齐排列摆放，选过去分词 arranged。",
            family: "arranged (adj./v-ed被整齐排列的) | arranging (v-ing) | arrangement (n.排列) | arrange (v.原形)。",
            details: "were neatly arranged across the workbench 属于 Part 1 高频被动状态句式，意为在工作台上整齐排列。arranging 为主动分词，不能与 were 搭配表达物品静态放置。",
            cn: "精密游标卡尺和电烙铁整齐地排列在技术人员的木质工作台上。",
            jp: "精密測定ノギスとハンダごてが、技術者の木製作業台の上にきちんと配置されて（arranged）いました。"
        }
    },
    {
        id: 16,
        target: "wristband",
        category: "困难",
        stem: "Security personnel used barcode scanners to verify the digital ________ affixed to each festival participant's wrist.",
        options: ["wristbands", "sunshades", "workbenches", "petals"],
        correct: "wristbands",
        explanations: {
            guide: "可穿戴电子标签名词复数。scanners to verify the digital ________ affixed to each participant's wrist 结合安保人员用条码枪扫描佩戴在参与者手腕上的数字手环，选 wristbands。",
            family: "wristbands (n.复数手环/腕带) | sunshades (n.遮阳板) | workbenches (n.工作台) | petals (n.花瓣)。",
            details: "digital wristbands 意为电子数字腕带/手环。affixed to wrist（附着在手腕上）明确限定了佩戴在人体手腕上的物品属性。",
            cn: "安保人员使用条形码扫描仪核实了佩戴在每位音乐节参与者手腕上的数字智能手环。",
            jp: "警備員はバーコードスキャナーを使用して、各フェスティバル参加者の手首に取り付けられたデジタルリストバンド（wristbands）を確認しました。"
        }
    },
    {
        id: 17,
        target: "sunshades",
        category: "困难",
        stem: "The building's smart energy management system automatically adjusts exterior ________ according to the changing angle of the sun.",
        options: ["sunshades", "wristbands", "workbenches", "intersections"],
        correct: "sunshades",
        explanations: {
            guide: "智能建筑外遮阳设施名词复数。adjusts exterior ________ according to the changing angle of the sun 结合智能节能系统根据太阳高度角自动调节室外遮阳板，选 sunshades。",
            family: "sunshades (n.复数遮阳帘/外遮阳板) | wristbands (n.手环) | workbenches (n.工作台) | intersections (n.十字路口)。",
            details: "exterior sunshades 专指绿色建筑的室外遮阳板/遮阳百叶。wristbands（手环）、workbenches（操作台）均非建筑根据光照角度自动调节的节能遮阳设施。",
            cn: "大楼的智能能源管理系统可根据太阳角度的变化自动调节室外遮阳板。",
            jp: "ビルのスマートエネルギー管理システムは、太陽の角度の変化に応じて外部の日よけ/サンシェード（sunshades）を自動的に調整します。"
        }
    },
    {
        id: 18,
        target: "have one's ... bent",
        category: "困难",
        stem: "Ergonomics specialists instructed assembly line workers to keep their elbows ________ at a ninety-degree angle to prevent joint fatigue.",
        options: ["bent", "bend", "bending", "bends"],
        correct: "bent",
        explanations: {
            guide: "keep + 宾语 + 过去分词（形容词）宾补考点。keep their elbows ________ at a 90-degree angle 结合人体工效学专家指导装配工人将肘部保持在“弯曲成90度”的状态，选过去分词/形容词 bent。",
            family: "bent (adj./v-ed弯曲的/保持弯曲) | bend (v.原形) | bending (v-ing) | bends (v-三单)。",
            details: "keep elbows bent 意为使肘部保持弯曲。keep sth + 过去分词/形容词表示使某物保持某种物理状态，bend 是动词原形，不能作宾语补足语。",
            cn: "人体工效学专家指导装配线工人将肘部保持在弯曲九十度的角度，以防止关节疲劳。",
            jp: "人間工学の専門家は、関節の疲労を防ぐために肘を90度の角度に曲げた状態を保つ（keep their elbows bent）よう組み立てラインの作業員に指導しました。"
        }
    }
];