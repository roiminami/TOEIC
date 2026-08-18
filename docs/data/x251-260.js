// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data581-590.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "dimensions",
        pos: "名",
        ipa: "/daɪˈmenʃnz/",
        cn: "尺寸，规格，度量（复数）",
        jp: "寸法、サイズ、規格（複数）",
        family: "dimension / dimensional",
        tips: "物流与仓储高频：exact dimensions（精确尺寸），package dimensions（包裹规格）。",
        desc: "Check the exact dimensions carefully."
    },
    {
        word: "courier",
        pos: "名",
        ipa: "/ˈkʊriər/",
        cn: "快递员，快递公司，信使",
        jp: "宅配便業者、配達員、急使",
        family: "couriers / couriered",
        tips: "物流与商务高频：deliver via courier（通过快递寄送），overnight courier（隔日达快递）。",
        desc: "Send it by courier today."
    },
    {
        word: "consensus",
        pos: "名",
        ipa: "/kənˈsensəs/",
        cn: "共识，一致意见",
        jp: "合意、意見の一致",
        family: "consensual / consent",
        tips: "商务谈判与会议高频搭配：reach a consensus（达成共识），general consensus（普遍共识）。",
        desc: "The committee reached a consensus."
    },
    {
        word: "conveyance",
        pos: "名",
        ipa: "/kənˈveɪəns/",
        cn: "运送，表达，运输工具",
        jp: "輸送、運搬、伝達",
        family: "convey / conveyor / conveyed",
        tips: "法务与物流高频：conveyance of goods（货物运输），means of conveyance（交通工具）。",
        desc: "The conveyance of goods was smooth."
    },
    {
        word: "spike",
        pos: "名/動",
        ipa: "/spaɪk/",
        cn: "急增，暴涨；急剧上升",
        jp: "急上昇、急増；急増する",
        family: "spiked / spiking / spikes",
        tips: "数据与趋势高频：spike in demand/prices（需求/价格骤增），sudden spike（突然激增）。",
        desc: "Sales saw a sharp spike."
    },
    {
        word: "appropriate",
        pos: "形/動",
        ipa: "/əˈproʊpriət/",
        cn: "恰当的，合适的；拨付（款项）",
        jp: "適切な、ふさわしい；充当する",
        family: "appropriately / appropriateness / appropriation",
        tips: "职场与财务高频：appropriate attire/action（得体的着装/恰当的举措），appropriate funds（拨款）。",
        desc: "Wear appropriate business attire."
    },
    {
        word: "granular",
        pos: "形",
        ipa: "/ˈɡrænjələr/",
        cn: "细致的，颗粒状的，细分深入的",
        jp: "詳細な、きめ細かい、粒状の",
        family: "granularity / granule / granularly",
        tips: "数据分析与商业智能高频：granular data/analysis（精细化的数据/细致入微的分析）。",
        desc: "We need granular sales data."
    },
    {
        word: "preliminaries",
        pos: "名",
        ipa: "/prɪˈlɪmɪneriz/",
        cn: "准备程序，初步环节（复数）",
        jp: "準備事項、予備手続き（複数）",
        family: "preliminary / preliminarily",
        tips: "会议与商务活动高频：opening preliminaries（开场准备程序），after the preliminaries（初步环节结束后）。",
        desc: "Complete the opening preliminaries first."
    },
    {
        word: "panel",
        pos: "名",
        ipa: "/ˈpænl/",
        cn: "专家组，评审团，控制板",
        jp: "専門家集団、審査委員会、パネル",
        family: "panels / panelist",
        tips: "研讨与评审高频：panel of experts/judges（专家组/评审团），advisory panel（咨询顾问团）。",
        desc: "A panel of experts met."
    },
    {
        word: "inspiring",
        pos: "形",
        ipa: "/ɪnˈspaɪərɪŋ/",
        cn: "鼓舞人心的，启发灵感的",
        jp: "意欲を刺激する、感動的な",
        family: "inspire / inspiration / inspired",
        tips: "演说与领导力高频：inspiring speech/keynote/leader（振奋人心的演说/主旨报告/领导者）。",
        desc: "She gave an inspiring speech."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "courier",
        category: "简单",
        stem: "The urgent legal documents were delivered directly to the client's office by a local ________ service.",
        options: ["courier", "consensus", "spike", "preliminaries"],
        correct: "courier",
        explanations: {
            guide: "快递服务名词定语。________ service 结合紧急法律文件的同城派送，选 courier（信使/快递公司）。",
            family: "courier (n.快递服务/信使) | consensus (n.共识) | spike (n.激增) | preliminaries (n.预备程序)。",
            details: "courier service 意为快递服务公司。consensus（共识）、spike（暴涨）均非派送文件的服务实体。",
            cn: "紧急法律文件已由当地快递服务公司直接送达客户办公室。",
            jp: "緊急の法的文書は、地元の宅配便（courier）サービスによってクライアントのオフィスに直接届けられました。"
        }
    },
    {
        id: 2,
        target: "consensus",
        category: "简单",
        stem: "After a two-hour discussion, board members finally reached a general ________ on the annual budget.",
        options: ["consensus", "dimensions", "courier", "conveyance"],
        correct: "consensus",
        explanations: {
            guide: "商务会议核心动宾搭配。reached a general ________ 结合对年度预算达成一致，选 consensus（共识）。",
            family: "consensus (n.共识/一致意见) | dimensions (n.尺寸) | courier (n.快递) | conveyance (n.运输)。",
            details: "reach a consensus 属于托业听力与阅读极高频词组，意为达成共识。其余选项动宾搭配不通。",
            cn: "经过两小时的讨论，董事会成员终于就年度预算达成了普遍共识。",
            jp: "2時間の議論の末、取締役会のメンバーは年次予算に関してようやく一般的な合意（consensus）に達しました。"
        }
    },
    {
        id: 3,
        target: "spike",
        category: "简单",
        stem: "The retail store experienced a sudden ________ in online orders right before the holiday weekend.",
        options: ["spike", "panel", "courier", "preliminaries"],
        correct: "spike",
        explanations: {
            guide: "数据趋势名词考点。a sudden ________ in online orders 结合节假日前网购订单急剧增长，选 spike（激增/暴涨）。",
            family: "spike (n.激增/尖峰) | panel (n.专家组) | courier (n.信使) | preliminaries (n.预备环节)。",
            details: "a spike in orders 意为订单量的急剧上升。panel（评审团）、courier（快递）无法修饰订单数据的瞬间暴增。",
            cn: "在假日周末来临前，该零售商店迎来了线上订单量的突然暴增。",
            jp: "その小売店は、休暇の週末直前にオンライン注文の突然の急増（spike）を経験しました。"
        }
    },
    {
        id: 4,
        target: "inspiring",
        category: "简单",
        stem: "Attendees praised the keynote speaker for delivering a truly ________ address on entrepreneurship.",
        options: ["inspiring", "granular", "appropriate", "conveyed"],
        correct: "inspiring",
        explanations: {
            guide: "演讲评价形容词。a truly ________ address 结合赞美创业主题的精彩主旨演讲，选 inspiring（鼓舞人心的/启发灵感的）。",
            family: "inspiring (adj.鼓舞人心的) | granular (adj.细致的) | appropriate (adj.适当的) | conveyed (v-ed传达的)。",
            details: "an inspiring address 意为鼓舞人心的演说。granular（细致颗粒的）不能直接修饰创业演讲的感染力。",
            cn: "与会者称赞主旨演讲嘉宾就创业精神发表了一场极具鼓舞人心的演讲。",
            jp: "参加者は、起業家精神に関する真に意欲を刺激する（inspiring）講演を行った基調講演者を称賛しました。"
        }
    },
    {
        id: 5,
        target: "dimensions",
        category: "简单",
        stem: "Warehouse staff must measure the exact ________ of each shipping crate before loading.",
        options: ["dimensions", "panels", "couriers", "consensuses"],
        correct: "dimensions",
        explanations: {
            guide: "物流计量名词复数。measure the exact ________ 结合装载前测量运输板条箱的长宽高规格，选 dimensions（尺寸/规格）。",
            family: "dimensions (n.复数尺寸/规格) | panels (n.专家组) | couriers (n.信使) | consensuses (n.共识)。",
            details: "exact dimensions 意为精确尺寸。panels（面板/小组）、couriers（快递员）均非仓库需要测量长宽高的物理参数。",
            cn: "仓库员工在装载之前必须测量每个运输板条箱的准确尺寸。",
            jp: "倉庫スタッフは、積み込み前に各輸送用木箱の正確な寸法（dimensions）を測定しなければなりません。"
        }
    },
    {
        id: 6,
        target: "appropriate",
        category: "简单",
        stem: "Employees are expected to wear ________ business attire when meeting with overseas clients.",
        options: ["appropriate", "granular", "inspiring", "spiked"],
        correct: "appropriate",
        explanations: {
            guide: "职场礼仪形容词。wear ________ business attire 结合会见海外客户要求穿着得体正装，选 appropriate（恰当的/得体的）。",
            family: "appropriate (adj.适当的/恰当的) | granular (adj.颗粒的) | inspiring (adj.鼓舞人心的) | spiked (adj.尖锐的)。",
            details: "appropriate attire 属于托业职场常规固定词组，意为得体的着装。granular（细化的）无法修饰正装商务规范。",
            cn: "员工在会见海外客户时应当穿着得体的商务正装。",
            jp: "従業員は、海外のクライアントと面談する際に適切な（appropriate）ビジネス服装を着用することが求められます。"
        }
    },
    {
        id: 7,
        target: "panel",
        category: "中等",
        stem: "A distinguished ________ of industry experts will evaluate all architectural proposals tomorrow.",
        options: ["panel", "conveyance", "spike", "consensus"],
        correct: "panel",
        explanations: {
            guide: "集合评审名词考点。A distinguished ________ of industry experts 结合评审建筑提案，选 panel（专家评审组/专门委员会）。",
            family: "panel (n.专家组/评审团) | conveyance (n.运输) | spike (n.激增) | consensus (n.共识)。",
            details: "a panel of experts 意为专家评审团。conveyance（运输）、spike（暴增）均无法与 of experts 构成人群集合名词短语。",
            cn: "一个由知名行业专家组成的评审团将于明天对所有建筑方案进行评估。",
            jp: "著名な業界の専門家グループ（panel）が、明日すべての建築提案書を評価します。"
        }
    },
    {
        id: 8,
        target: "granular",
        category: "中等",
        stem: "The marketing team requested more ________ customer data to target specific demographic segments.",
        options: ["granular", "inspiring", "appropriate", "preliminary"],
        correct: "granular",
        explanations: {
            guide: "数据分析前置形容词。more ________ customer data 结合精准细分目标受众客层，选 granular（细分的/精细微观的）。",
            family: "granular (adj.精细的/粒度细的) | inspiring (adj.鼓舞人心的) | appropriate (adj.适当的) | preliminary (adj.初步的)。",
            details: "granular data 属于商业智能与营销高频表达，意为细致/颗粒度精细的数据。inspiring（鼓舞人心的）不能修饰数据结构深度。",
            cn: "营销团队要求提供更精细的客户数据，以锁定特定的人口细分群体。",
            jp: "マーケティングチームは、特定の人口統計層をターゲットにするために、より詳細な/きめ細かい（granular）顧客データを要求しました。"
        }
    },
    {
        id: 9,
        target: "preliminaries",
        category: "中等",
        stem: "Once the opening ________ were concluded, the delegates began formal trade negotiations.",
        options: ["preliminaries", "dimensions", "couriers", "spikes"],
        correct: "preliminaries",
        explanations: {
            guide: "会议流程名词复数。opening ________ were concluded 结合开场准备环节结束后进入正式贸易谈判，选 preliminaries（预备程序/开场事项）。",
            family: "preliminaries (n.复数准备程序) | dimensions (n.尺寸) | couriers (n.信使) | spikes (n.激增)。",
            details: "opening preliminaries 意为开场预备程序。dimensions（规格）、couriers（快递）均不能充当会议正式谈判前被结束（concluded）的议程。",
            cn: "开场准备程序一结束，代表们便开始了正式的贸易谈判。",
            jp: "開会の準備手続き（preliminaries）が終了すると、代表団は正式な貿易交渉を開始しました。"
        }
    },
    {
        id: 10,
        target: "conveyance",
        category: "中等",
        stem: "The contract outlines the legal terms governing the safe ________ of hazardous materials by rail.",
        options: ["conveyance", "consensus", "panel", "spike"],
        correct: "conveyance",
        explanations: {
            guide: "货运法务名词考点。safe ________ of hazardous materials 结合铁路运输危险化学品，选 conveyance（运送/运输）。",
            family: "conveyance (n.运送/运输) | consensus (n.共识) | panel (n.评审团) | spike (n.暴增)。",
            details: "conveyance of materials 意为材料货物的运输转运。consensus（共识）、panel（专家组）不能作为危险品被铁路运输的行为名词。",
            cn: "合同概述了规范通过铁路安全运送危险物料的法律条款。",
            jp: "契約書には、鉄道による危険物の安全な輸送（conveyance）を管理する法的条件が概説されています。"
        }
    },
    {
        id: 11,
        target: "appropriate",
        category: "中等",
        stem: "Customer service representatives are trained to respond ________ to all client complaints.",
        options: ["appropriately", "appropriate", "granular", "inspiring"],
        correct: "appropriately",
        explanations: {
            guide: "副词修饰动词。respond ________ 结构中，需要副词修饰不及物动词 respond，表达“得体地/恰当地”回应投诉，选 appropriately。",
            family: "appropriately (adv.恰当地/得体地) | appropriate (adj.适当的) | granular (adj.细致的) | inspiring (adj.鼓舞人心的)。",
            details: "respond appropriately 属于客服高频动副搭配。appropriate 是形容词，不能直接在句中充当修饰动词的状语。",
            cn: "客户服务代表经过培训，能够对所有客户投诉做出恰当得体的回应。",
            jp: "カスタマーサービス担当者は、すべての顧客の苦情に適切に（appropriately）対応するようトレーニングされています。"
        }
    },
    {
        id: 12,
        target: "spike",
        category: "中等",
        stem: "Demand for renewable energy equipment ________ dramatically after government subsidies were announced.",
        options: ["spiked", "spike", "conveyed", "paneled"],
        correct: "spiked",
        explanations: {
            guide: "动词过去式考点。主语为 Demand，结合补贴宣布后需求急剧攀升，选过去式动词 spiked（暴涨/急增）。",
            family: "spiked (v-ed急增了) | spike (v.原形) | conveyed (v-ed传达了) | paneled (adj.装嵌板的)。",
            details: "demand spiked dramatically 意为需求急剧暴涨。全句叙述过去发生的事实，选用过去时态 spiked。",
            cn: "在政府补贴政策公布后，对可再生能源设备的需求急剧暴涨。",
            jp: "政府の補助金が発表された後、再生可能エネルギー機器の需要は劇的に急増しました（spiked）。"
        }
    },
    {
        id: 13,
        target: "granular",
        category: "困难",
        stem: "The business intelligence software allows financial analysts to view data with unprecedented ________.",
        options: ["granularity", "granular", "conveyance", "consensus"],
        correct: "granularity",
        explanations: {
            guide: "派生抽象名词考点。with unprecedented ________ 结构中，形容词 unprecedented 后面接名词形式 granularity（精细度/颗粒度）。",
            family: "granularity (n.精细度/颗粒度) | granular (adj.细化的) | conveyance (n.运输) | consensus (n.共识)。",
            details: "view data with granularity 属于现代商业数据分析专有名词，意为以极高精细度查看数据。granular 是形容词，不能作介词宾语中心语。",
            cn: "该商业智能软件允许财务分析师以前所未有的精细度查看数据。",
            jp: "そのビジネスインテリジェンスソフトウェアにより、財務アナリストは前例のない詳細度/きめ細かさ（granularity）でデータを閲覧できます。"
        }
    },
    {
        id: 14,
        target: "panel",
        category: "困难",
        stem: "Distinguished conference ________ answered questions from the audience during the closing session.",
        options: ["panelists", "panels", "couriers", "dimensions"],
        correct: "panelists",
        explanations: {
            guide: "派生人物名词复数。Distinguished conference ________ 结合回答听众提问的主语，选复数人物名词 panelists（专家小组成员/座谈嘉宾）。",
            family: "panelists (n.复数座谈嘉宾/小组成员) | panels (n.专家组/面板) | couriers (n.信使) | dimensions (n.规格)。",
            details: "conference panelists 专指参加专题座谈并回答提问的发言嘉宾。panels 是指委员会整体或仪表板，非具体发言的个体专家集合。",
            cn: "知名会议座谈嘉宾在闭幕环节回答了听众的提问。",
            jp: "著名な会議のパネリストたち（panelists）は、閉会セッション中に聴衆からの質問に答えました。"
        }
    },
    {
        id: 15,
        target: "inspiring",
        category: "困难",
        stem: "The founder's visionary leadership served as a major source of ________ for the entire research team.",
        options: ["inspiration", "inspiring", "appropriateness", "granularity"],
        correct: "inspiration",
        explanations: {
            guide: "派生抽象名词考点。a major source of ________ 结构中，介词 of 后面接抽象名词形式 inspiration（灵感/鼓舞）。",
            family: "inspiration (n.灵感/鼓舞) | inspiring (adj.鼓舞人心的) | appropriateness (n.适当性) | granularity (n.细致度)。",
            details: "source of inspiration 属于托业经典搭配，意为灵感/鼓舞的源泉。inspiring 是形容词，不能直接跟在介词 of 后面作宾语中心语。",
            cn: "创始人富有远见的领导力成为了整个研究团队的重要灵感与鼓舞源泉。",
            jp: "創設者の先見性のあるリーダーシップは、研究チーム全体にとっての大きなインスピレーション/刺激（inspiration）の源となりました。"
        }
    },
    {
        id: 16,
        target: "conveyance",
        category: "困难",
        stem: "The spokesperson issued a formal press release to ________ the board's deep gratitude to loyal shareholders.",
        options: ["convey", "conveyance", "appropriate", "spike"],
        correct: "convey",
        explanations: {
            guide: "及物动词不定式考点。issued a release to 后面接动词原形，结合向股东传达谢意（gratitude），选动词原形 convey。",
            family: "convey (v.表达/传达) | conveyance (n.运输/传达) | appropriate (v.拨付/adj.适当的) | spike (v.激增)。",
            details: "to convey gratitude 意为表达谢意。conveyance 是名词形式，不能跟在不定式符号 to 后面作谓语动词。",
            cn: "发言人发布了正式新闻稿，向忠诚股东传达董事会的由衷谢意。",
            jp: "報道官は、忠実な株主に対して取締役会の深い感謝を伝える（convey）ために公式プレスリリースを発行しました。"
        }
    },
    {
        id: 17,
        target: "consensus",
        category: "困难",
        stem: "Achieving broad ________ among department heads is essential before implementing the restructuring plan.",
        options: ["consensus", "conveyance", "courier", "spike"],
        correct: "consensus",
        explanations: {
            guide: "高阶商务管理抽象名词。Achieving broad ________ among... 结合在实施重组方案前在各部门主管之间取得认同，选 consensus（共识）。",
            family: "consensus (n.共识) | conveyance (n.转运) | courier (n.信使) | spike (n.激增)。",
            details: "achieve broad consensus 属于高阶管理决策固定词组，意为达成广泛共识。conveyance（运输）、courier（信使）均不合管理认同语境。",
            cn: "在实施重组计划之前，在各部门主管之间达成广泛共识至关重要。",
            jp: "再編計画を実施する前に、部門長の間で広範な合意（consensus）を形成することが不可欠です。"
        }
    },
    {
        id: 18,
        target: "appropriate",
        category: "困难",
        stem: "The municipal council formally ________ five million dollars for the construction of the public transit terminal.",
        options: ["appropriated", "appropriate", "granulated", "inspired"],
        correct: "appropriated",
        explanations: {
            guide: "财务动词一词多义过去式考点。主语为 municipal council，结合拨出500万美元修建交通枢纽，选及物动词过去式 appropriated（拨付/划拨专款）。",
            family: "appropriated (v-ed拨付了款项) | appropriate (adj.恰当的/v.原形) | granulated (v-ed使成颗粒) | inspired (v-ed启发了)。",
            details: "appropriate funds 属于财政拨款核心高阶用法，意为划拨专款。全句叙述已完成的拨款决议，使用过去时态 appropriated。",
            cn: "市议会正式拨付了五百万美元用于建设公共交通枢纽终端。",
            jp: "市議会は、公共交通ターミナルの建設のために500万ドルを正式に計上/充当しました（appropriated）。"
        }
    }
];