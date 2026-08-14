// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data411-420.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "portfolio",
        pos: "名",
        ipa: "/pɔːrtˈfoʊlioʊ/",
        cn: "投资组合，作品集",
        jp: "ポートフォリオ、作品集",
        family: "portfolios",
        tips: "金融与设计高频：investment portfolio（投资组合），design portfolio（设计作品集）。",
        desc: "He showed his investment portfolio."
    },
    {
        word: "browse",
        pos: "動/名",
        ipa: "/braʊz/",
        cn: "浏览，随意翻阅",
        jp: "閲覧する、目を通す",
        family: "browser / browsing / browsed",
        tips: "电商与网络高频：browse the website/catalog（浏览网站/目录）。",
        desc: "Customers can browse our catalog."
    },
    {
        word: "pastry",
        pos: "名",
        ipa: "/ˈpeɪstri/",
        cn: "糕点，面点",
        jp: "焼き菓子、ペストリー",
        family: "pastries / pastry chef",
        tips: "餐饮与烘焙高频：fresh pastries（新鲜糕点），pastry shop（糕点店）。",
        desc: "She bought a fresh pastry."
    },
    {
        word: "durable",
        pos: "形",
        ipa: "/ˈdʊrəbl/",
        cn: "耐用的，持久的",
        jp: "耐久性のある、丈夫な",
        family: "durability / durably / duration",
        tips: "制造与采购高频：durable materials/goods（耐用材料/耐用消费品）。",
        desc: "These boots are very durable."
    },
    {
        word: "disruption",
        pos: "名",
        ipa: "/dɪsˈrʌpʃn/",
        cn: "中断，混乱，破坏",
        jp: "中断、混乱",
        family: "disrupt / disruptive / disruptor",
        tips: "交通与供应链高频：service disruption（服务中断），cause disruption（造成混乱）。",
        desc: "Storms caused a flight disruption."
    },
    {
        word: "transit",
        pos: "名/動",
        ipa: "/ˈtrænsɪt/",
        cn: "运输，过境，公共交通",
        jp: "輸送、通過、交通",
        family: "transition / transitional / transitory",
        tips: "物流与交通高频：in transit（在运输途中），public transit（公共交通）。",
        desc: "Goods are currently in transit."
    },
    {
        word: "textile",
        pos: "名/形",
        ipa: "/ˈtekstaɪl/",
        cn: "纺织品；纺织的",
        jp: "織物、繊維；織物の",
        family: "textiles",
        tips: "制造业高频：textile industry/factory（纺织业/纺织厂）。",
        desc: "They produce high quality textile."
    },
    {
        word: "landmark",
        pos: "名",
        ipa: "/ˈlændmɑːrk/",
        cn: "地标，里程碑",
        jp: "目印、歴史的建造物",
        family: "landmarks",
        tips: "旅游与房产高频：historic landmark（历史地标），landmark decision（里程碑式的决定）。",
        desc: "The tower is a landmark."
    },
    {
        word: "fleet",
        pos: "名",
        ipa: "/fliːt/",
        cn: "车队，船队",
        jp: "車両隊、艦隊",
        family: "fleets / fleeting",
        tips: "物流与运输高频：fleet of vehicles/trucks（车队），fleet management（车队管理）。",
        desc: "The company owns a fleet."
    },
    {
        word: "overview",
        pos: "名",
        ipa: "/ˈoʊvərvjuː/",
        cn: "概述，概观",
        jp: "概要、全体像",
        family: "overviews / view",
        tips: "报告与会议高频：brief overview（简短概述），provide an overview（提供概况）。",
        desc: "He provided a brief overview."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "portfolio",
        category: "简单",
        stem: "The financial advisor recommended diversifying the client's investment ________ to minimize potential risks.",
        options: ["portfolio", "pastry", "fleet", "disruption"],
        correct: "portfolio",
        explanations: {
            guide: "金融投资名词考点。investment ________ 属于金融高频搭配，表达“投资组合”，选 portfolio。",
            family: "portfolio (n.投资组合/作品集) | pastry (n.糕点) | fleet (n.车队) | disruption (n.中断)。",
            details: "investment portfolio 意为投资组合。pastry（糕点）、fleet（车队）均不属于金融理财配置实体。",
            cn: "财务顾问建议分散客户的投资组合，以最大程度地降低潜在风险。",
            jp: "ファイナンシャルアドバイザーは、潜在的なリスクを最小限に抑えるためにクライアントの投資ポートフォリオ（portfolio）を分散することを推奨しました。"
        }
    },
    {
        id: 2,
        target: "browse",
        category: "简单",
        stem: "Shoppers are welcome to ________ through the store's new online catalog at their convenience.",
        options: ["browse", "disrupt", "transit", "overview"],
        correct: "browse",
        explanations: {
            guide: "动词不定式与网购搭配。welcome to 后面接动词原形，结合 browse through the catalog（翻阅/浏览目录），选 browse。",
            family: "browse (v.浏览) | disrupt (v.打乱) | transit (n.运输) | overview (n.概述)。",
            details: "browse through a catalog 意为浏览商品目录。disrupt（打乱）、transit（运输）动宾关系不通。",
            cn: "欢迎购物者在方便时浏览商店的新线上目录。",
            jp: "買い物客は都合の良い時に店の新しいオンラインカタログを閲覧する（browse）ことができます。"
        }
    },
    {
        id: 3,
        target: "durable",
        category: "简单",
        stem: "The construction crew uses ________ materials that can withstand harsh outdoor weather conditions.",
        options: ["durable", "durability", "pastry", "landmark"],
        correct: "durable",
        explanations: {
            guide: "建材修饰形容词考点。修饰 materials，表达能经受恶劣天气的“耐用的/坚固的”材料，选 durable。",
            family: "durable (adj.耐用的) | durability (n.耐久性) | pastry (n.糕点) | landmark (n.地标)。",
            details: "durable materials 意为耐用材料。durability 是名词，不能在此作定语修饰 materials。",
            cn: "施工人员使用能够经受恶劣户外天气条件的耐用材料。",
            jp: "建設クルーは、厳しい屋外の天候条件に耐えることができる耐久性のある（durable）資材を使用しています。"
        }
    },
    {
        id: 4,
        target: "pastry",
        category: "简单",
        stem: "The local bakery is famous for its delicious fresh ________ and handmade cakes.",
        options: ["pastries", "fleets", "landmarks", "textiles"],
        correct: "pastries",
        explanations: {
            guide: "烘焙食品复数名词。bakery（面包店）售卖的食品，结合和蛋糕（cakes）并列，选 pastries（糕点/面点）。",
            family: "pastries (n.复数糕点) | fleets (n.车队) | landmarks (n.地标) | textiles (n.纺织品)。",
            details: "fresh pastries 意为新鲜糕点。fleets（车队）、landmarks（地标）均非烘焙店销售的产品。",
            cn: "当地面包店以其美味的新鲜糕点和手工蛋糕而闻名。",
            jp: "地元のベーカリーは、おいしい新鮮な焼き菓子（pastries）と手作りケーキで有名です。"
        }
    },
    {
        id: 5,
        target: "disruption",
        category: "简单",
        stem: "Severe winter weather caused a temporary ________ in regular train service this morning.",
        options: ["disruption", "browse", "portfolio", "durable"],
        correct: "disruption",
        explanations: {
            guide: "交通故障名词考点。caused a temporary ________ 结合暴风雪导致列车服务暂停，选 disruption（中断/混乱）。",
            family: "disruption (n.中断/混乱) | browse (v.浏览) | portfolio (n.投资组合) | durable (adj.耐用的)。",
            details: "service disruption 意为服务中断。browse 是动词，portfolio（投资组合）不合交通故障语境。",
            cn: "今天早上严寒的冬季天气导致常规列车服务出现了暂时性中断。",
            jp: "厳しい冬の天候のため、今朝は通常の列車サービスに一時的な中断（disruption）が発生しました。"
        }
    },
    {
        id: 6,
        target: "overview",
        category: "简单",
        stem: "The project manager gave a quick ________ of the upcoming schedule during the briefing.",
        options: ["overview", "landmark", "fleet", "transit"],
        correct: "overview",
        explanations: {
            guide: "会议报告名词。gave a quick ________ 结合对即将到来的日程进行简要介绍，选 overview（概述/概况）。",
            family: "overview (n.概述/概况) | landmark (n.地标) | fleet (n.车队) | transit (n.运输)。",
            details: "give an overview 意为作概述/介绍概况。landmark（地标）、fleet（车队）均不能与 give a quick 搭配表达简报介绍。",
            cn: "项目经理在简报会期间对即将到来的日程安排作了快速概述。",
            jp: "プロジェクトマネージャーはミーティング中、今後のスケジュールの簡単な概要（overview）の説明を行いました。"
        }
    },
    {
        id: 7,
        target: "transit",
        category: "中等",
        stem: "Tracking numbers allow customers to check whether their order packages are still in ________.",
        options: ["transit", "disruption", "browse", "textile"],
        correct: "transit",
        explanations: {
            guide: "物流高频介词短语。in ________ 属于托业物流最高频短语之一，意为“在运输途中”，选 transit。",
            family: "transit (n.运输/过境) | disruption (n.中断) | browse (v.浏览) | textile (n.纺织品)。",
            details: "in transit 意为在运输途中。disruption（中断）、textile（纺织品）均无法与介词 in 构成包裹运输状态短语。",
            cn: "快递追踪单号允许客户查询其订购的包裹是否仍在运输途中。",
            jp: "追跡番号により、顧客は注文した荷物がまだ輸送（transit）中であるかどうかを確認できます。"
        }
    },
    {
        id: 8,
        target: "fleet",
        category: "中等",
        stem: "The logistics company expanded its delivery ________ by purchasing twenty new electric trucks.",
        options: ["fleet", "portfolio", "pastry", "landmark"],
        correct: "fleet",
        explanations: {
            guide: "运输车辆集合名词。delivery ________ 结合购买新卡车（electric trucks），选 fleet（车队）。",
            family: "fleet (n.车队/船队) | portfolio (n.作品集) | pastry (n.糕点) | landmark (n.地标)。",
            details: "delivery fleet 意为送货车队。portfolio（投资组合）、pastry（糕点）均非卡车等运输工具组成的集合名词。",
            cn: "该物流公司通过采购 20 辆新的电动卡车扩大了其送货车队。",
            jp: "その物流会社は20台の新しい電気トラックを購入することで、配送車両隊（fleet）を拡大しました。"
        }
    },
    {
        id: 9,
        target: "textile",
        category: "中等",
        stem: "The region's economy relies heavily on the export of high-grade cotton and other ________ goods.",
        options: ["textile", "durable", "overview", "transit"],
        correct: "textile",
        explanations: {
            guide: "工业产品名词定语。________ goods 结合棉花（cotton），表达“纺织”商品/纺织品，选 textile。",
            family: "textile (n./adj.纺织品/纺织的) | durable (adj.耐用的) | overview (n.概述) | transit (n.运输)。",
            details: "textile goods 意为纺织商品。textile 常置于 goods 前作为前置定语，表明商品种类为纺织品。",
            cn: "该地区的经济严重依赖高档棉花和其他纺织商品的出口。",
            jp: "その地域の経済は、高級綿やその他の織物（textile）製品の輸出に大きく依存しています。"
        }
    },
    {
        id: 10,
        target: "landmark",
        category: "中等",
        stem: "The historic clock tower serves as a prominent ________ in the center of the city.",
        options: ["landmark", "portfolio", "fleet", "disruption"],
        correct: "landmark",
        explanations: {
            guide: "城市景观名词。The historic clock tower（历史悠久的钟楼）在市中心充当著名的“地标”，选 landmark。",
            family: "landmark (n.地标/里程碑) | portfolio (n.作品集) | fleet (n.车队) | disruption (n.中断)。",
            details: "prominent landmark 意为显著地标。fleet（车队）、disruption（中断）均不能用来形容钟楼这类建筑景观。",
            cn: "这座历史悠久的钟楼是市中心一座显著的地标。",
            jp: "歴史的な時計塔は、街の中心部にある目立つ目印/地標（landmark）として機能しています。"
        }
    },
    {
        id: 11,
        target: "browse",
        category: "中等",
        stem: "Website visitors can easily ________ the full list of available training courses by selecting a category.",
        options: ["browse", "browser", "durable", "transit"],
        correct: "browse",
        explanations: {
            guide: "情态动词后的动词原形。can 后面接动词原形，表达浏览课程列表，选 browse。",
            family: "browse (v.浏览) | browser (n.浏览器) | durable (adj.耐用的) | transit (n.运输)。",
            details: "can browse the list 意为可以浏览列表。browser 是名词（浏览器），不能紧跟在情态动词 can 后面作谓语原形。",
            cn: "网站访客可以通过选择类别轻松浏览可用培训课程的完整列表。",
            jp: "ウェブサイトの訪問者は、カテゴリーを選択することで利用可能な研修コースの完全なリストを簡単に閲覧（browse）できます。"
        }
    },
    {
        id: 12,
        target: "disruption",
        category: "中等",
        stem: "Unforeseen technical issues led to a minor ________ of the online reservation system yesterday.",
        options: ["disruption", "disruptive", "pastry", "overview"],
        correct: "disruption",
        explanations: {
            guide: "派生名词考点。led to a minor ________ 结构中，形容词 minor 后面接名词形式 disruption（中断/障碍）。",
            family: "disruption (n.中断) | disruptive (adj.破坏性的) | pastry (n.糕点) | overview (n.概述)。",
            details: "disruption of the system 意为系统中断。disruptive 是形容词，不能在冠词 a 和形容词 minor 后面作名词中心语。",
            cn: "意想不到的技术问题昨天导致在线预订系统出现了轻微的中断。",
            jp: "予期せぬ技術的問題により、昨日はオンライン予約システムに軽微な中断（disruption）が発生しました。"
        }
    },
    {
        id: 13,
        target: "durable",
        category: "困难",
        stem: "Industrial equipment buyers often prioritize long-term ________ over low initial purchase costs.",
        options: ["durability", "durable", "durably", "disruption"],
        correct: "durability",
        explanations: {
            guide: "派生抽象名词考点。prioritize long-term ________ 结构中，形容词 long-term 后面接名词形式 durability（耐用性/耐久度）。",
            family: "durability (n.耐用性/耐久度) | durable (adj.耐用的) | durably (adv.耐用性地) | disruption (n.中断)。",
            details: "prioritize durability 意为优先考虑耐用性。durable 是形容词，不能直接作及物动词 prioritize 的宾语。",
            cn: "工业设备买家往往优先考虑长期的耐用性，而不是低廉的初始采购成本。",
            jp: "産業機器のバイヤーは、低い初期購入コストよりも長期的な耐久性（durability）を優先することがよくあります。"
        }
    },
    {
        id: 14,
        target: "portfolio",
        category: "困难",
        stem: "Before making hiring decisions, the design agency's directors carefully evaluated each applicant's creative ________.",
        options: ["portfolio", "overview", "landmark", "fleet"],
        correct: "portfolio",
        explanations: {
            guide: "招聘与设计高频名词。evaluated each applicant's creative ________ 表达评估每位求职者的“作品集”，选 portfolio。",
            family: "portfolio (n.作品集/投资组合) | overview (n.概述) | landmark (n.地标) | fleet (n.车队)。",
            details: "creative portfolio 意为设计/创意作品集。设计机构在招聘时主要评估求职者的设计作品集（portfolio）。",
            cn: "在作出招聘决定之前，设计公司的董事们仔细评估了每位求职者的创意作品集。",
            jp: "採用の決定を下す前に、デザイン代理店の取締役は各応募者のクリエイティブな作品集（portfolio）を注意深く評価しました。"
        }
    },
    {
        id: 15,
        target: "transit",
        category: "困难",
        stem: "The regional public ________ authority announced comprehensive plans to upgrade bus routes and subway stations.",
        options: ["transit", "transition", "disruption", "textile"],
        correct: "transit",
        explanations: {
            guide: "公共交通专有名词。public ________ authority 属于城市管理固定词组，意为“公共交通管理局”，选 transit。",
            family: "transit (n.公共交通/运输) | transition (n.过渡/转变) | disruption (n.中断) | textile (n.纺织品)。",
            details: "public transit authority 指公共交通管理局。transition 意为过渡，非管理公交与地铁系统的专有名词。",
            cn: "区域公共交通管理局宣布了升级公交路线和地铁站的全面计划。",
            jp: "地域の公共交通（transit）当局は、バス路線と地下鉄駅を改修するための包括的な計画を発表しました。"
        }
    },
    {
        id: 16,
        target: "fleet",
        category: "困难",
        stem: "Proper maintenance protocols are essential for managing a corporate ________ of rental vehicles efficiently.",
        options: ["fleet", "fleeting", "overview", "portfolio"],
        correct: "fleet",
        explanations: {
            guide: "企业运营车辆集合名词。managing a corporate ________ of rental vehicles 表达管理出租车的“车队”，选 fleet。",
            family: "fleet (n.车队) | fleeting (adj.短暂的) | overview (n.概述) | portfolio (n.作品集)。",
            details: "fleet of vehicles 意为车队。fleeting 是形容词（短暂的），不能在冠词 a 和形容词 corporate 后面作名词中心语。",
            cn: "适当的维护协议对于高效管理企业的出租车车队至关重要。",
            jp: "レンタカーの企業車両隊（fleet）を効率的に管理するためには、適切なメンテナンスプロトコルが不可欠です。"
        }
    },
    {
        id: 17,
        target: "disruption",
        category: "困难",
        stem: "Analysts warned that the sudden tariff increase could have a highly ________ effect on international trade.",
        options: ["disruptive", "disruption", "durability", "transitory"],
        correct: "disruptive",
        explanations: {
            guide: "派生形容词修饰名词。a highly ________ effect 结构中，副词 highly 后面接形容词作定语，表达“破坏性的/造成混乱的”影响，选 disruptive。",
            family: "disruptive (adj.破坏性的/造成混乱的) | disruption (n.中断) | durability (n.耐用性) | transitory (adj.暂时的)。",
            details: "a disruptive effect 意为破坏性的影响。disruption 是名词，不能被副词 highly 修饰作为 effect 的前置定语。",
            cn: "分析师警告称，突然提高关税可能会对国际贸易产生极具破坏性的影响。",
            jp: "アナリストは、急激な関税引き上げが国際貿易に非常に混乱を招く（disruptive）影響を与える可能性があると警告しました。"
        }
    },
    {
        id: 18,
        target: "overview",
        category: "困难",
        stem: "The annual report begins with a comprehensive executive ________ summarizing key financial achievements.",
        options: ["overview", "landmark", "pastry", "fleet"],
        correct: "overview",
        explanations: {
            guide: "商务报告高频表达。executive ________ 属于年报高频专有名词，意为“执行概述/管理层总结概况”，选 overview。",
            family: "overview (n.概述/概况) | landmark (n.地标) | pastry (n.糕点) | fleet (n.车队)。",
            details: "executive overview 意为管理层执行概述/概况。landmark（地标）、fleet（车队）均与总结财务成就的报告章节无关。",
            cn: "年度报告以一份总结主要财务成就的全面执行概述开始。",
            jp: "年次報告書は、主な財務成果を要約した包括的なエグゼクティブ概要（overview）で始まります。"
        }
    }
];