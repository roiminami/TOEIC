// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data501-510.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "last-minute",
        pos: "形/副",
        ipa: "/ˌlæst ˈmɪnɪt/",
        cn: "临时的，最后一刻的",
        jp: "直前の、間際の",
        family: "minute / last",
        tips: "差旅与预订高频：last-minute changes/cancellation（临时的变动/取消）。",
        desc: "Avoid last-minute travel changes."
    },
    {
        word: "hands-on",
        pos: "形",
        ipa: "/ˌhændz ˈɑːn/",
        cn: "亲身实践的，实操的",
        jp: "実地の、実践的な",
        family: "hand / hands",
        tips: "培训与工作技能高频：hands-on experience/training（实操经验/动手培训）。",
        desc: "We provide hands-on training."
    },
    {
        word: "mandatory",
        pos: "形",
        ipa: "/ˈmændətɔːri/",
        cn: "强制的，法定的，必修的",
        jp: "義務的な、必須の",
        family: "mandate / mandated",
        tips: "规章与安全培训高频：mandatory meeting/training（必须参加的会议/强制培训）。",
        desc: "Attendance is strictly mandatory."
    },
    {
        word: "checkup",
        pos: "名",
        ipa: "/ˈtʃekʌp/",
        cn: "健康检查，全面检查",
        jp: "健康診断、点検",
        family: "check / check up",
        tips: "医疗与健康福利高频：annual medical checkup（年度身体体检）。",
        desc: "She scheduled a medical checkup."
    },
    {
        word: "resistant",
        pos: "形",
        ipa: "/rɪˈzɪstənt/",
        cn: "有抵抗力的，耐……的，防……的",
        jp: "耐性のある、〜に強い",
        family: "resist / resistance / resisting",
        tips: "产品规格与材料高频：water-resistant / heat-resistant（防水的/耐热的）。",
        desc: "The watch is water resistant."
    },
    {
        word: "fragile",
        pos: "形",
        ipa: "/ˈfrædʒl/",
        cn: "易碎的，脆弱的",
        jp: "壊れやすい、脆い",
        family: "fragility / fragilely",
        tips: "物流与包装高频：handle fragile items carefully（小心轻放易碎品）。",
        desc: "Glass items are fragile."
    },
    {
        word: "dimension",
        pos: "名",
        ipa: "/daɪˈmenʃn/",
        cn: "尺寸，度量，维度",
        jp: "寸法、サイズ、側面",
        family: "dimensional / dimensions",
        tips: "运输与产品规格高频：package dimensions（包裹尺寸），measure dimensions（测量尺寸）。",
        desc: "Check the exact dimensions."
    },
    {
        word: "prospective",
        pos: "形",
        ipa: "/prəˈspektɪv/",
        cn: "潜在的，未来的，预期的",
        jp: "見込みのある、将来の",
        family: "prospect / prospectively / prospects",
        tips: "销售与招聘高频：prospective clients/buyers/employees（潜在客户/意向买家/候选员工）。",
        desc: "We meet prospective clients."
    },
    {
        word: "furnished",
        pos: "形/動",
        ipa: "/ˈfɜːrnɪʃt/",
        cn: "配备家具的",
        jp: "家具付きの",
        family: "furnish / furniture / furnishings",
        tips: "租房与地产高频：fully furnished apartment（家具齐全的公寓）。",
        desc: "Rent a furnished apartment."
    },
    {
        word: "suite",
        pos: "名",
        ipa: "/swiːt/",
        cn: "套房；（软件）套件",
        jp: "スイートルーム、一式",
        family: "suites",
        tips: "酒店与IT高频：executive suite（行政套房），software suite（办公/软件套件）。",
        desc: "Book an executive suite."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "mandatory",
        category: "简单",
        stem: "All newly hired employees must attend the ________ orientation session tomorrow morning.",
        options: ["mandatory", "fragile", "furnished", "checkup"],
        correct: "mandatory",
        explanations: {
            guide: "HR入职规章修饰形容词。修饰 orientation session，表达新员工必须参加的“强制性/必修的”迎新培训，选 mandatory。",
            family: "mandatory (adj.强制的/必修的) | fragile (adj.易碎的) | furnished (adj.配家具的) | checkup (n.检查)。",
            details: "mandatory orientation 意为必须参加的迎新会。fragile（易碎的）、furnished（配家具的）不能用来修饰会议培训。",
            cn: "所有新入职的员工都必须参加明天早上的强制性迎新培训环节。",
            jp: "すべての新入社員は、明日の朝の必須（mandatory）オリエンテーションセッションに出席しなければなりません。"
        }
    },
    {
        id: 2,
        target: "fragile",
        category: "简单",
        stem: "Please handle the glass vase carefully because it is extremely ________.",
        options: ["fragile", "resistant", "hands-on", "mandatory"],
        correct: "fragile",
        explanations: {
            guide: "物品特性表语形容词。handle carefully 结合玻璃花瓶（glass vase），表达物品“易碎的”，选 fragile。",
            family: "fragile (adj.易碎的) | resistant (adj.耐…的) | hands-on (adj.实操的) | mandatory (adj.强制的)。",
            details: "extremely fragile 意为极其易碎。resistant（有抵抗力的）与需要小心轻放（handle carefully）的理由矛盾。",
            cn: "请小心拿放这个玻璃花瓶，因为它非常易碎。",
            jp: "ガラスの花瓶は非常に壊れやすい（fragile）ため、慎重に取り扱ってください。"
        }
    },
    {
        id: 3,
        target: "checkup",
        category: "简单",
        stem: "Employees are encouraged to visit the company clinic for an annual medical ________.",
        options: ["checkup", "dimension", "suite", "mandate"],
        correct: "checkup",
        explanations: {
            guide: "健康医疗名词考点。annual medical ________ 属于健康福利经典表达，表达年度“体检/健康检查”，选 checkup。",
            family: "checkup (n.健康检查/体检) | dimension (n.尺寸) | suite (n.套房) | mandate (n.授权/指令)。",
            details: "medical checkup 意为身体体检。dimension（尺寸）、suite（套房）均非诊所进行的健康检查活动。",
            cn: "鼓励员工前往公司诊所进行年度身体健康检查。",
            jp: "従業員は、年次の健康診断（checkup）のために会社の診療所を訪れることが推奨されます。"
        }
    },
    {
        id: 4,
        target: "furnished",
        category: "简单",
        stem: "The visiting consultant rented a fully ________ apartment near the corporate headquarters.",
        options: ["furnished", "fragile", "prospective", "resistant"],
        correct: "furnished",
        explanations: {
            guide: "租房修饰形容词考点。a fully ________ apartment 属于租房与不动产高频短语，表达“配备齐全家具的”公寓，选 furnished。",
            family: "furnished (adj.配备家具的) | fragile (adj.易碎的) | prospective (adj.潜在的) | resistant (adj.耐受的)。",
            details: "fully furnished apartment 意为家具齐全的公寓。fragile（易碎的）、prospective（预期的）不修饰出租公寓的家电配置状态。",
            cn: "来访的顾问在公司总部附近租了一间家具齐全的公寓。",
            jp: "訪問したコンサルタントは、本社近くにある家具付きの（furnished）アパートを借りました。"
        }
    },
    {
        id: 5,
        target: "hands-on",
        category: "简单",
        stem: "The training workshop provides ________ experience with the new manufacturing equipment.",
        options: ["hands-on", "last-minute", "fragile", "mandatory"],
        correct: "hands-on",
        explanations: {
            guide: "技能培训形容词考点。________ experience 结合实际操作制造设备，表达“亲身实践的/实操”经验，选 hands-on。",
            family: "hands-on (adj.实操的/动手实践的) | last-minute (adj.临时的) | fragile (adj.易碎的) | mandatory (adj.强制的)。",
            details: "hands-on experience 意为实操经验/亲身体验。last-minute（最后一刻的）不能用来修饰设备操作技能培训的实操性质。",
            cn: "该培训工作坊提供了操作新制造设备的实操经验。",
            jp: "トレーニングワークショップでは、新しい製造機器に関する実践的な（hands-on）経験が提供されます。"
        }
    },
    {
        id: 6,
        target: "suite",
        category: "简单",
        stem: "The overseas client booked a luxury executive ________ at the downtown hotel.",
        options: ["suite", "dimension", "checkup", "furnishing"],
        correct: "suite",
        explanations: {
            guide: "酒店房型名词考点。luxury executive ________ 属于酒店客房高频词组，表达“豪华行政套房”，选 suite。",
            family: "suite (n.套房/套件) | dimension (n.尺寸) | checkup (n.检查) | furnishing (n.家具陈设)。",
            details: "executive suite 意为行政套房。dimension（尺寸）、checkup（体检）均非酒店可供预订的客房类型。",
            cn: "这位海外客户在市中心的酒店预订了一间豪华行政套房。",
            jp: "海外のクライアントは、ダウンタウンのホテルにある高級エグゼクティブスイート（suite）を予約しました。"
        }
    },
    {
        id: 7,
        target: "prospective",
        category: "中等",
        stem: "Sales representatives will host a product demonstration for several ________ buyers this afternoon.",
        options: ["prospective", "fragile", "mandatory", "furnished"],
        correct: "prospective",
        explanations: {
            guide: "商业客户修饰形容词。修饰 buyers（买家），表达举办演示会接待的“潜在的/意向”客户，选 prospective。",
            family: "prospective (adj.潜在的/未来的) | fragile (adj.脆弱的) | mandatory (adj.强制的) | furnished (adj.配家具的)。",
            details: "prospective buyers 意为潜在买家/意向买家。fragile（易碎的）、mandatory（强制的）不能修饰销售对象。",
            cn: "销售代表今天下午将为几位潜在买家举办一场产品演示会。",
            jp: "営業担当者は今日の午後、何人かの見込み（prospective）バイヤー向けに製品デモを開催します。"
        }
    },
    {
        id: 8,
        target: "last-minute",
        category: "中等",
        stem: "Due to a ________ schedule change, the project kickoff meeting had to be postponed until Thursday.",
        options: ["last-minute", "hands-on", "resistant", "prospective"],
        correct: "last-minute",
        explanations: {
            guide: "突发变动修饰形容词。a ________ schedule change 结合导致启动会议被推迟，表达“临时的/最后一刻的”变动，选 last-minute。",
            family: "last-minute (adj.临时的/最后的) | hands-on (adj.实操的) | resistant (adj.耐受的) | prospective (adj.潜在的)。",
            details: "last-minute change 属于托业经典搭配，意为临时变动。hands-on（实操的）、resistant（抵抗的）修饰变更不通顺。",
            cn: "由于临时日程变动，项目启动会议不得不推迟到周四举行。",
            jp: "直前の（last-minute）スケジュール変更のため、プロジェクト開始ミーティングは木曜日まで延期せざるを得ませんでした。"
        }
    },
    {
        id: 9,
        target: "resistant",
        category: "中等",
        stem: "The outdoor electronic display screen is specially designed to be water ________.",
        options: ["resistant", "fragile", "furnished", "mandatory"],
        correct: "resistant",
        explanations: {
            guide: "材料性能表语复合形容词。water ________ 属于工业设计专有名词，表达户外屏幕是“防水的/耐水的”，选 resistant。",
            family: "resistant (adj.耐受的/防…的) | fragile (adj.易碎的) | furnished (adj.配家具的) | mandatory (adj.强制的)。",
            details: "water-resistant 意为防水的/耐水的。fragile（易碎的）、mandatory（强制的）均不能与 water 构成防水短语。",
            cn: "该户外电子显示屏经过特殊设计，具有防水性能。",
            jp: "その屋外用電子ディスプレイ画面は、耐水性（water-resistant）を備えるよう特別に設計されています。"
        }
    },
    {
        id: 10,
        target: "dimension",
        category: "中等",
        stem: "The shipping department needs to know the exact ________ of the crate before calculating freight charges.",
        options: ["dimensions", "checkups", "suites", "prospects"],
        correct: "dimensions",
        explanations: {
            guide: "物流计量复数名词。the exact ________ of the crate 结合计算运费（freight charges），需要知道板条箱的“尺寸/长宽高”，选 dimensions。",
            family: "dimensions (n.复数尺寸/度量) | checkups (n.体检) | suites (n.套房) | prospects (n.前景)。",
            details: "exact dimensions 指精确的长宽高尺寸。checkups（体检）、suites（套房）均非物流计费所需的长宽高规格。",
            cn: "运输部门在计算运费前需要知道货箱的准确尺寸。",
            jp: "出荷部門は運賃を計算する前に、木箱の正確な寸法（dimensions）を知る必要があります。"
        }
    },
    {
        id: 11,
        target: "furnished",
        category: "中等",
        stem: "The property management agency agreed to ________ the temporary office space with ergonomic desks and chairs.",
        options: ["furnish", "furnished", "fragile", "dimension"],
        correct: "furnish",
        explanations: {
            guide: "动词不定式原形考点。agreed to 后面接动词原形，结合使用人体工学桌椅配置办公空间（________ space with desks and chairs），选 furnish。",
            family: "furnish (v.布置家具/提供) | furnished (adj./v-ed) | fragile (adj.易碎的) | dimension (n.尺寸)。",
            details: "to furnish space with... 意为用……布置空间。furnished 是过去式/形容词，不能直接跟在 to 后作不定式原形。",
            cn: "物业管理机构同意为临时办公空间配备人体工程学桌椅。",
            jp: "不動産管理会社は、人間工学に基づいた机と椅子で一時的なオフィススペースを整える（furnish）ことに同意しました。"
        }
    },
    {
        id: 12,
        target: "checkup",
        category: "中等",
        stem: "Facility technicians perform a routine safety ________ on the backup power generator every three months.",
        options: ["checkup", "dimension", "suite", "furnishing"],
        correct: "checkup",
        explanations: {
            guide: "设备维护名词考点。perform a routine safety ________ 结合对备用发电机定期排查，选 checkup（检查/点检）。",
            family: "checkup (n.检查/点检) | dimension (n.尺寸) | suite (n.套房) | furnishing (n.家具)。",
            details: "safety checkup 意为安全检查/点检。dimension（尺寸）、suite（套房）均无法与 perform a routine safety 搭配。",
            cn: "设施技术人员每三个月对备用发电机进行一次常规安全检查。",
            jp: "施設の技術者は、3か月ごとに予備発電機の定期安全点検（checkup）を実施しています。"
        }
    },
    {
        id: 13,
        target: "mandatory",
        category: "困难",
        stem: "Regulatory agencies issued a strict legal ________ requiring all chemical plants to inspect storage containers quarterly.",
        options: ["mandate", "mandatory", "fragility", "dimension"],
        correct: "mandate",
        explanations: {
            guide: "派生名词考点。issued a strict legal ________ 结构中，形容词 legal 后面接名词形式 mandate（法定指令/强制要求）。",
            family: "mandate (n.法定指令/授权) | mandatory (adj.强制的) | fragility (n.脆弱性) | dimension (n.尺寸)。",
            details: "legal mandate 意为法定指令/强制令。mandatory 是形容词，不能在冠词 a 和形容词 legal 之后作宾语中心语。",
            cn: "监管机构发布了一项严格的法定指令，要求所有化工厂每季度检查一次储存容器。",
            jp: "規制当局は、すべての化学工場に貯蔵容器の四半期ごとの点検を義務付ける厳格な法的指令（mandate）を発出しました。"
        }
    },
    {
        id: 14,
        target: "prospective",
        category: "困难",
        stem: "Market analysts evaluated the long-term growth ________ of the renewable energy sector before recommending the acquisition.",
        options: ["prospects", "prospective", "dimensions", "suites"],
        correct: "prospects",
        explanations: {
            guide: "派生名词复数考点。growth ________ 属于商业分析高频词组，表达行业未来的“增长前景/前途”，选复数名词 prospects。",
            family: "prospects (n.前景/前途) | prospective (adj.未来的/潜在的) | dimensions (n.尺寸) | suites (n.套件)。",
            details: "growth prospects 意为增长前景。prospective 是形容词，不能在此作 evaluated 的名词宾语中心语。",
            cn: "市场分析师在建议收购之前评估了可再生能源行业的长期增长前景。",
            jp: "市場アナリストは、買収を推奨する前に再生可能エネルギー部門の長期的な成長見通し（prospects）を評価しました。"
        }
    },
    {
        id: 15,
        target: "resistant",
        category: "困难",
        stem: "The new synthetic coating demonstrated exceptional ________ to extreme temperatures during laboratory stress tests.",
        options: ["resistance", "resistant", "fragility", "dimension"],
        correct: "resistance",
        explanations: {
            guide: "派生抽象名词考点。demonstrated exceptional ________ to... 结构中，形容词 exceptional 后面接名词形式 resistance（抵抗力/耐受性）。",
            family: "resistance (n.耐受性/抵抗力) | resistant (adj.耐受的) | fragility (n.脆弱性) | dimension (n.尺寸)。",
            details: "exceptional resistance to heat 意为对高温卓越的耐受性。resistant 是形容词，不能直接作及物动词 demonstrate 的宾语。",
            cn: "在实验室压力测试中，这种新型合成涂层表现出了对极端温度的卓越耐受性。",
            jp: "新しい合成コーティングは、実験室でのストレステスト中に極端な温度に対する優れた耐性（resistance）を示しました。"
        }
    },
    {
        id: 16,
        target: "fragile",
        category: "困难",
        stem: "Due to the extreme ________ of the antique glassware, the courier company required specialized packaging protocols.",
        options: ["fragility", "fragile", "resistance", "dimension"],
        correct: "fragility",
        explanations: {
            guide: "派生抽象名词考点。Due to the extreme ________ of... 结构中，在定冠词 the 和形容词 extreme 后面接抽象名词 fragility（脆弱性/易碎性）。",
            family: "fragility (n.易碎性/脆弱) | fragile (adj.易碎的) | resistance (n.耐受性) | dimension (n.尺寸)。",
            details: "fragility of glassware 意为玻璃制品的易碎性。fragile 是形容词，不能在此充当介词短语中的名词中心语。",
            cn: "由于这批古董玻璃器皿极度易碎，快递公司要求执行专门的包装协议。",
            jp: "アンティークガラス製品の極度の壊れやすさ（fragility）のため、宅配便会社は特別な梱包プロトコルを要求しました。"
        }
    },
    {
        id: 17,
        target: "hands-on",
        category: "困难",
        stem: "The engineering internship emphasizes ________ learning, allowing students to operate specialized machinery directly under supervision.",
        options: ["hands-on", "last-minute", "prospective", "resistant"],
        correct: "hands-on",
        explanations: {
            guide: "高阶教育与实习修饰形容词。________ learning 结合后文允许学生在监督下直接操作机器，表达“注重实践/动手实操的”学习模式，选 hands-on。",
            family: "hands-on (adj.动手实操的/亲身体验的) | last-minute (adj.临时的) | prospective (adj.潜在的) | resistant (adj.耐受的)。",
            details: "hands-on learning 意为实践学习/实操训练。last-minute（临时）、resistant（抵抗）均无法修饰强调动手操作的教学模式。",
            cn: "该工程实习强调实践学习，允许学生在指导监督下直接操作专业机械设备。",
            jp: "そのエンジニアリングインターンシップは実践的な（hands-on）学習を重視しており、学生が指導監督の下で専門機器を直接操作できるようにしています。"
        }
    },
    {
        id: 18,
        target: "suite",
        category: "困难",
        stem: "The technology firm unveiled an integrated ________ of cloud-based cybersecurity applications tailored for enterprise clients.",
        options: ["suite", "dimensions", "furnishings", "mandate"],
        correct: "suite",
        explanations: {
            guide: "IT软件集合名词。an integrated ________ of applications 属于软件与IT高频专有名词，表达一体化应用程序“套件/集合包”，选 suite。",
            family: "suite (n.套件/套房) | dimensions (n.尺寸) | furnishings (n.陈设家具) | mandate (n.指令)。",
            details: "a suite of applications 专指软件应用套件（如 Office suite/Cybersecurity suite）。dimensions（尺寸）、furnishings（家具）均非软件套件。",
            cn: "这家科技公司推出了一套专为企业客户量身定制的云端网络安全应用集成套件。",
            jp: "そのテクノロジー企業は、法人顧客向けにカスタマイズされたクラウドベースのサイバーセキュリティアプリケーションの統合スイート（suite）を発表しました。"
        }
    }
];