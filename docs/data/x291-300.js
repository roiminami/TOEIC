// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data641-650.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "collided",
        pos: "動",
        ipa: "/kəˈlaɪdɪd/",
        cn: "碰撞，相撞，冲突（collide的过去式/分词）",
        jp: "衝突した、一致しなかった",
        family: "collide / collision / colliding",
        tips: "交通运输与事故调查高频：collided with a truck（与卡车相撞），interests collided（利益产生冲突）。",
        desc: "Two delivery vans collided."
    },
    {
        word: "blind",
        pos: "形/名/動",
        ipa: "/blaɪnd/",
        cn: "百叶窗；盲目的；使看不见",
        jp: "ブラインド、日よけ；盲目の；見えなくする",
        family: "blindly / blindness / blinds",
        tips: "设施与商业调研高频：window blinds（百叶窗），blind taste test / study（双盲测试/盲测研究），blind spot（盲区）。",
        desc: "Lower the window blinds now."
    },
    {
        word: "concierge",
        pos: "名",
        ipa: "/koʊnˈsjerʒ/",
        cn: "礼宾人员，礼宾接待处",
        jp: "コンシェルジュ、総合案内係",
        family: "concierges",
        tips: "酒店与高端服务高频：hotel concierge（酒店礼宾员），ask the concierge for tickets（向礼宾台咨询订票）。",
        desc: "The hotel concierge assisted guests."
    },
    {
        word: "trolley tracks",
        pos: "名",
        ipa: "/ˈtrɑːli træks/",
        cn: "有轨电车轨道，电车铁轨（复数）",
        jp: "路面電車の線路、トロリー軌道",
        family: "trolley / track / tracks",
        tips: "市政交通与安全高频：cross trolley tracks carefully（小心穿过有轨电车轨道）。",
        desc: "Cars crossed the trolley tracks."
    },
    {
        word: "demilitarized",
        pos: "形/動",
        ipa: "/ˌdiːˈmɪlɪtəraɪzd/",
        cn: "非军事化的，设立非军事区的",
        jp: "非武装化された",
        family: "demilitarize / demilitarization / military",
        tips: "国际新闻与法务高频：demilitarized zone (DMZ)（非军事区），demilitarized border corridor（非军事化边境走廊）。",
        desc: "They entered the demilitarized zone."
    },
    {
        word: "perform",
        pos: "動",
        ipa: "/pərˈfɔːrm/",
        cn: "执行，履行，运转，表演",
        jp: "実行する、機能する、演じる",
        family: "performance / performer / performing",
        tips: "管理与设备运维高频：perform routine maintenance（执行日常维护），perform efficiently（高效运转）。",
        desc: "Technicians perform safety checks daily."
    },
    {
        word: "prerequisite",
        pos: "名/形",
        ipa: "/ˌpriːˈrekwəzɪt/",
        cn: "先决条件，必备前提；必备的",
        jp: "前提条件、必須条件；必須の",
        family: "requisite / requirement / require",
        tips: "招聘与培训高频：a prerequisite for enrollment/promotion（入学/晋升的先决条件），prerequisite skills（必备技能）。",
        desc: "Experience is a prerequisite."
    },
    {
        word: "intervention",
        pos: "名",
        ipa: "/ˌɪntərˈvenʃn/",
        cn: "干预，介入，调停",
        jp: "介入、調停、干渉",
        family: "intervene / intervenor / interventional",
        tips: "管理与金融调控高频：regulatory/government intervention（监管/政府干预），timely managerial intervention（及时的管理介入）。",
        desc: "Timely intervention resolved the dispute."
    },
    {
        word: "vertical",
        pos: "形/名",
        ipa: "/ˈvɜːrtɪkl/",
        cn: "垂直的，竖直的；垂直线",
        jp: "垂直の、縦方向の；垂直線",
        family: "vertically / verticality",
        tips: "企业战略与图表高频：vertical integration（纵向一体化/垂直整合），vertical axis（纵坐标轴）。",
        desc: "The chart has a vertical axis."
    },
    {
        word: "horizontal",
        pos: "形/名",
        ipa: "/ˌhɔːrəˈzɑːntl/",
        cn: "水平的，横向的；水平线",
        jp: "水平の、横方向の；水平線",
        family: "horizontally / horizontality / horizon",
        tips: "战略与组织管理高频：horizontal expansion/merger（横向扩张/并购），horizontal alignment（水平对齐）。",
        desc: "Draw a straight horizontal line."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "concierge",
        category: "简单",
        stem: "The hotel ________ assisted international guests with booking theater tickets and arranging shuttle transportation.",
        options: ["concierge", "prerequisite", "intervention", "track"],
        correct: "concierge",
        explanations: {
            guide: "酒店服务职务名词考点。The hotel ________ assisted guests 结合帮助客人预订戏票和安排接驳车，选 concierge（礼宾人员/服务台接待员）。",
            family: "concierge (n.礼宾员) | prerequisite (n.先决条件) | intervention (n.干预) | track (n.轨道)。",
            details: "hotel concierge 专指酒店礼宾部服务人员。prerequisite（先决条件）、intervention（介入）均非协助宾客订票的职位实体。",
            cn: "酒店礼宾人员协助国际宾客预订剧院门票并安排接送班车服务。",
            jp: "ホテルのコンシェルジュ（concierge）は、外国人宿泊客の劇場チケットの予約やシャトル交通の手配をサポートしました。"
        }
    },
    {
        id: 2,
        target: "perform",
        category: "简单",
        stem: "Maintenance technicians are scheduled to ________ a comprehensive safety inspection on all elevators this weekend.",
        options: ["perform", "collide", "intervene", "demilitarize"],
        correct: "perform",
        explanations: {
            guide: "动词不定式与检查搭配。scheduled to 后面接动词原形，结合对电梯执行安全检查（________ safety inspection），选 perform。",
            family: "perform (v.执行/履行) | collide (v.碰撞) | intervene (v.干预) | demilitarize (v.使非军事化)。",
            details: "perform an inspection 属于托业运维核心动宾短语，意为执行检查。collide（相撞）、intervene（调停）动宾搭配不通。",
            cn: "维修技术人员按计划将于本周末对所有电梯执行一次全面的安全检查。",
            jp: "保守技術者は、今週末にすべてのエレベーターの包括的な安全点検を実施する（perform）予定です。"
        }
    },
    {
        id: 3,
        target: "blind",
        category: "简单",
        stem: "Office workers adjusted the window ________ to block the intense afternoon sunlight from their computer screens.",
        options: ["blinds", "trolleys", "concierges", "prerequisites"],
        correct: "blinds",
        explanations: {
            guide: "办公设施名词复数。window ________ 结合调节窗帘以阻挡强烈的午后阳光直射屏幕，选 blinds（百叶窗/遮光帘）。",
            family: "blinds (n.复数百叶窗) | trolleys (n.手推车/电车) | concierges (n.礼宾员) | prerequisites (n.前提)。",
            details: "window blinds 意为百叶窗。trolleys（电车/手推车）、concierges（礼宾人员）均非用于遮光的窗户设施。",
            cn: "办公室员工调整了百叶窗，以遮挡午后强烈的阳光照射电脑屏幕。",
            jp: "オフィスの従業員は、午後の強い日差しがコンピュータ画面に反射するのを防ぐために窓のブラインド（blinds）を調整しました。"
        }
    },
    {
        id: 4,
        target: "prerequisite",
        category: "简单",
        stem: "Prior managerial experience in retail operations is a mandatory ________ for the regional director position.",
        options: ["prerequisite", "collision", "intervention", "concierge"],
        correct: "prerequisite",
        explanations: {
            guide: "招聘任职资格名词。a mandatory ________ 结合过往零售管理经验是担任区域总监的必需要求，选 prerequisite（先决条件/必备前提）。",
            family: "prerequisite (n.先决条件/必备要求) | collision (n.碰撞) | intervention (n.干涉) | concierge (n.礼宾)。",
            details: "a mandatory prerequisite 意为强制性必备条件。collision（相撞）、intervention（干预）不符合招聘资格语境。",
            cn: "过往的零售运营管理经验是应聘区域总监职位的强制性先决条件。",
            jp: "小売り業務における事前の管理経験は、地域ディレクター職の必須の前提条件（prerequisite）です。"
        }
    },
    {
        id: 5,
        target: "collided",
        category: "简单",
        stem: "Traffic was temporarily diverted after two delivery vans ________ at the busy downtown intersection.",
        options: ["collided", "performed", "intervened", "demilitarized"],
        correct: "collided",
        explanations: {
            guide: "交通事故动词过去式。after two delivery vans ________ 结合导致繁忙十字路口交通临时改道，选 collided（相撞/碰撞）。",
            family: "collided (v-ed相撞/冲突) | performed (v-ed执行) | intervened (v-ed干预) | demilitarized (v-ed非军事化)。",
            details: "vans collided 意为货车相撞。performed（执行了）、intervened（介入了）均无法构成车辆发生交通事故的主谓短语。",
            cn: "在两辆送货货车于繁华的市中心十字路口相撞后，交通被临时分流。",
            jp: "繁華街の混雑した交差点で2台の配達用バンが衝突した（collided）後、交通は一時的に迂回させられました。"
        }
    },
    {
        id: 6,
        target: "horizontal",
        category: "简单",
        stem: "The financial analyst drew a bold ________ line across the graph to indicate the target quarterly profit margin.",
        options: ["horizontal", "blind", "collided", "prerequisite"],
        correct: "horizontal",
        explanations: {
            guide: "图表线条修饰形容词。a bold ________ line across the graph 结合在图表横跨绘制基准线，选 horizontal（水平的/横向的）。",
            family: "horizontal (adj.水平的/横向的) | blind (adj.盲目的) | collided (v-ed相撞的) | prerequisite (adj.必备的)。",
            details: "horizontal line 意为水平线/横线。blind（盲目的）、prerequisite（先决的）均无法修饰图表坐标中的线条走向。",
            cn: "财务分析师在图表上画了一条粗水平线，以标示目标季度利润率。",
            jp: "財務アナリストは、目標とする四半期利益率を示すためにグラフを横切る太い水平（horizontal）線を引きました。"
        }
    },
    {
        id: 7,
        target: "intervention",
        category: "中等",
        stem: "The threatened transit strike was averted due to the timely ________ of an independent government mediator.",
        options: ["intervention", "prerequisite", "concierge", "collision"],
        correct: "intervention",
        explanations: {
            guide: "调解纠纷名词考点。timely ________ of an independent mediator 结合避免了交通大罢工，选 intervention（介入/干预/调停）。",
            family: "intervention (n.调停/干预) | prerequisite (n.先决条件) | concierge (n.礼宾) | collision (n.冲突)。",
            details: "timely intervention 属于托业经典管理搭配，意为及时调停/介入。prerequisite（前提）、concierge（礼宾员）均非平息罢工的行为实体。",
            cn: "由于独立政府调解员的及时介入调停，一场迫在眉睫的交通罢工得以避免。",
            jp: "独立した政府調停人のタイムリーな介入/調停（intervention）のおかげで、懸念されていた交通機関のストライキは回避されました。"
        }
    },
    {
        id: 8,
        target: "vertical",
        category: "中等",
        stem: "The manufacturing giant lowered production costs through ________ integration by acquiring its key component suppliers.",
        options: ["vertical", "blind", "collided", "prerequisite"],
        correct: "vertical",
        explanations: {
            guide: "商业战略前置形容词。________ integration by acquiring suppliers 结合通过收购上游核心零部件供应商，选 vertical（垂直的/纵向的）。",
            family: "vertical (adj.垂直的/纵向的) | blind (adj.盲目的) | collided (v-ed碰撞的) | prerequisite (adj.必备的)。",
            details: "vertical integration 属于商业管理专属高频词组（纵向一体化/垂直整合），指收购上下游供应链。horizontal integration 则指横向收购同类竞争对手。",
            cn: "该制造巨头通过收购其核心零部件供应商实现了纵向一体化整合，从而降低了生产成本。",
            jp: "その製造大手は、主要な部品サプライヤーを買収して垂直（vertical）統合を進めることで、生産コストを削減しました。"
        }
    },
    {
        id: 9,
        target: "trolley tracks",
        category: "中等",
        stem: "Drivers in the historic district are advised to yield and reduce speed when navigating across the active ________.",
        options: ["trolley tracks", "concierges", "prerequisites", "interventions"],
        correct: "trolley tracks",
        explanations: {
            guide: "城市道路设施名词复数。navigating across the active ________ 结合提醒机动车驾驶员在历史街区减速避让，选 trolley tracks（有轨电车轨道）。",
            family: "trolley tracks (n.有轨电车轨道) | concierges (n.礼宾员) | prerequisites (n.先决条件) | interventions (n.干预)。",
            details: "active trolley tracks 意为正在运行的有轨电车轨道。concierges（礼宾员）、interventions（干预）均非车辆在路面上横穿行驶的基础设施。",
            cn: "建议历史街区的驾驶员在穿过正在运行的有轨电车轨道时减速并注意礼让。",
            jp: "歴史地区のドライバーは、現在稼働している路面電車の線路（trolley tracks）を横断する際、減速して道を譲るよう勧められます。"
        }
    },
    {
        id: 10,
        target: "demilitarized",
        category: "中等",
        stem: "International peacekeeping monitors patrolled the designated ________ border zone to ensure treaty compliance.",
        options: ["demilitarized", "horizontal", "vertical", "blind"],
        correct: "demilitarized",
        explanations: {
            guide: "边境地带修饰形容词。the designated ________ border zone 结合维和人员巡逻以确保条约执行，选 demilitarized（非军事化的）。",
            family: "demilitarized (adj.非军事化的) | horizontal (adj.水平的) | vertical (adj.垂直的) | blind (adj.盲目的)。",
            details: "demilitarized zone (DMZ) 意为非军事区。horizontal（水平的）、vertical（垂直的）均无法修饰具有条约法律效力的非武装安全区。",
            cn: "国际维和监督员在指定的非军事化边境地带巡逻，以确保停火条约得到遵守。",
            jp: "国際平和維持監視団は、条約の順守を確実にするために、指定された非武装（demilitarized）国境地帯を巡回しました。"
        }
    },
    {
        id: 11,
        target: "perform",
        category: "中等",
        stem: "The high-efficiency cooling unit continued to ________ reliably even during prolonged periods of extreme summer heat.",
        options: ["perform", "performance", "performer", "performing"],
        correct: "perform",
        explanations: {
            guide: "动词原形作不定式宾语。continued to 后面接动词原形，副词 reliably 修饰动词，表达设备在极端酷暑下依然可靠“运转/工作”，选 perform。",
            family: "perform (v.运转/执行) | performance (n.性能/表现) | performer (n.执行者/表演者) | performing (v-ing)。",
            details: "continue to perform reliably 意为继续可靠运行。performance 是名词，performer 是人物名词，均不能跟在 to 后面作谓语动词原形。",
            cn: "即使在夏季持续极端酷热的时期，这台高效冷却机组依然能够保持可靠运转。",
            jp: "高効率冷却ユニットは、夏の極端な猛暑が続く期間でも、確実に機能し/作動し（perform）続けました。"
        }
    },
    {
        id: 12,
        target: "collided",
        category: "中等",
        stem: "Insurance investigators determined that the delivery truck ________ with a guardrail due to brake failure.",
        options: ["collided", "collision", "colliding", "concierge"],
        correct: "collided",
        explanations: {
            guide: "从句谓语动词过去式。that 从句中主语为 the delivery truck，后接谓语动词并与 with 搭配，表达货车“撞上了”护栏，选 collided。",
            family: "collided (v-ed撞击/冲突) | collision (n.碰撞) | colliding (v-ing) | concierge (n.礼宾)。",
            details: "collided with the guardrail 意为撞上护栏。collision 是名词，不能在 that 引导的宾语从句中充当谓语动词。",
            cn: "保险调查员认定，送货卡车是由于刹车失灵而撞上了防护栏。",
            jp: "保険調査員は、配達トラックがブレーキの故障によりガードレールに衝突した（collided）と判断しました。"
        }
    },
    {
        id: 13,
        target: "intervention",
        category: "困难",
        stem: "Central bank governors decided not to ________ directly in foreign exchange markets, allowing currency values to stabilize naturally.",
        options: ["intervene", "intervention", "interventional", "intervened"],
        correct: "intervene",
        explanations: {
            guide: "派生动词原形考点。decided not to 后面接动词原形，结合央行决定不直接“干预/介入”外汇市场，选动词原形 intervene。",
            family: "intervene (v.干预/介入) | intervention (n.干预) | interventional (adj.介入的) | intervened (v-ed过去式)。",
            details: "to intervene in markets 属于金融宏观政策高频短语，意为入市干预。intervention 是名词，不能直接跟在不定式符号 to 后面作谓语动词。",
            cn: "央行行长们决定不直接干预外汇市场，允许汇率自然趋于稳定。",
            jp: "中央銀行総裁らは外国為替市場に直接介入（intervene）しないことを決定し、通貨価値が自然に安定するのを待ちました。"
        }
    },
    {
        id: 14,
        target: "vertical",
        category: "困难",
        stem: "The automated logistics center utilizes ________ stacked storage racks to maximize warehouse capacity.",
        options: ["vertically", "vertical", "verticality", "horizontal"],
        correct: "vertically",
        explanations: {
            guide: "副词修饰过去分词考点。________ stacked storage racks 结构中，修饰过去分词 stacked（堆叠的），表达“垂直竖向地”堆放货架，选副词 vertically。",
            family: "vertically (adv.垂直地/竖向地) | vertical (adj.垂直的) | verticality (n.垂直状态) | horizontal (adj.水平的)。",
            details: "vertically stacked racks 意为垂直层叠货架。vertical 是形容词，不能直接修饰过去分词 stacked 作状语。",
            cn: "自动化物流中心采用垂直层叠堆放的存储货架，以最大化仓库仓储容量。",
            jp: "自動化された物流センターは、倉庫の収容能力を最大化するために垂直に（vertically）積み重ねられた保管ラックを利用しています。"
        }
    },
    {
        id: 15,
        target: "horizontal",
        category: "困难",
        stem: "The corporate hierarchy was reorganized ________ to encourage rapid communication across different business units.",
        options: ["horizontally", "horizontal", "horizontality", "vertical"],
        correct: "horizontally",
        explanations: {
            guide: "副词修饰被动语态动词。was reorganized ________ 结构中，用副词修饰过去分词 reorganized，表达组织架构被“扁平化/横向地”重组，选 horizontally。",
            family: "horizontally (adv.横向地/水平地) | horizontal (adj.水平的) | horizontality (n.水平状态) | vertical (adj.垂直的)。",
            details: "reorganized horizontally 意为横向重组/扁平化重构。horizontal 是形容词，不能在系动词与分词短语后充当修饰动词的状语。",
            cn: "公司的组织架构进行了横向扁平化重组，以促进不同业务部门之间的快速沟通。",
            jp: "異なる事業部門間の迅速なコミュニケーションを促進するために、企業の階層構造は水平方向に（horizontally）再編されました。"
        }
    },
    {
        id: 16,
        target: "prerequisite",
        category: "困难",
        stem: "Demonstrating fluency in basic accounting principles is considered a ________ qualification for taking advanced corporate finance.",
        options: ["prerequisite", "prerequisites", "requisition", "requiring"],
        correct: "prerequisite",
        explanations: {
            guide: "形容词作前置定语考点。a ________ qualification 结构中，修饰单数名词 qualification，表达“先决必备的”资格要求，选单数/形容词形式 prerequisite。",
            family: "prerequisite (adj.必备的/先决的/n.前提) | prerequisites (n.复数) | requisition (n.申请单) | requiring (v-ing)。",
            details: "a prerequisite qualification 意为先决必备资格。prerequisites 是名词复数，不能被不定冠词 a 修饰作定语；requisition（征用单）语义不通。",
            cn: "展示出对基础会计原理的熟练掌握，被视为选修高级公司金融课程的必备先决资格。",
            jp: "基本的な会計原則の流暢な理解を証明することは、上級企業財務を受講するための前提（prerequisite）資格と見なされます。"
        }
    },
    {
        id: 17,
        target: "blind",
        category: "困难",
        stem: "The consumer testing panel conducted a randomized ________ comparison to ensure participants were not influenced by brand names.",
        options: ["blind", "blindly", "blindness", "blinds"],
        correct: "blind",
        explanations: {
            guide: "调研专有名词前置定语。a randomized ________ comparison 结合确保受试者不受品牌名称影响，选 blind（盲测的/隐去信息的）。",
            family: "blind (adj.盲测的/盲目的) | blindly (adv.盲目地) | blindness (n.盲目) | blinds (n.百叶窗)。",
            details: "blind comparison / blind test 属于市场调研专属术语，专指盲测对比。blindly 是副词，blindness 是名词，均不能作前置定语修饰 comparison。",
            cn: "消费者测试小组进行了一次随机盲测对比，以确保参与者不受品牌名称的心理影响。",
            jp: "消費者テストパネルは、参加者がブランド名に影響されないようにするために、無作為化ブラインド/目隠し（blind）比較を実施しました。"
        }
    },
    {
        id: 18,
        target: "perform",
        category: "困难",
        stem: "At the year-end awards gala, the executive committee recognized the department's top ________ with substantial merit bonuses.",
        options: ["performers", "performances", "perform", "performing"],
        correct: "performers",
        explanations: {
            guide: "指代人物复数名词作宾语。recognized the department's top ________ 结合发放绩效奖金表彰的对象是表现出色的“员工/绩优人员”，选复数名词 performers。",
            family: "performers (n.复数绩优员工/表演者) | performances (n.复数绩效/表现) | perform (v.执行) | performing (adj.表演的)。",
            details: "top performers 属于企业人力资源极高频专属表达，专指绩优员工/拔尖人才。performances 指抽象的业绩表现，不能直接被授予奖金（recognized with bonuses）。",
            cn: "在年终颁奖盛典上，执行委员会向该部门的顶尖绩优员工发放了丰厚的绩效奖金以示表彰。",
            jp: "年末の表彰ガラにおいて、執行委員会は多額の業績ボーナスを授与して部門のトップパフォーマー/成績優秀者たち（performers）を表彰しました。"
        }
    }
];