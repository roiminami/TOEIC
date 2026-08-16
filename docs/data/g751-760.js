// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data521-530.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "botanical",
        pos: "形/名",
        ipa: "/bəˈtænɪkl/",
        cn: "植物的，植物学的；植物性药材",
        jp: "植物の、植物学の",
        family: "botany / botanist / botanically",
        tips: "旅游与自然高频：botanical garden（植物园），botanical extracts（植物提取物）。",
        desc: "Visit the local botanical garden."
    },
    {
        word: "simplify",
        pos: "動",
        ipa: "/ˈsɪmplɪfaɪ/",
        cn: "简化，使简易",
        jp: "簡素化する、単純にする",
        family: "simple / simplification / simply",
        tips: "办公流程高频：simplify procedures/workflows（简化流程/工作流）。",
        desc: "We simplify the application process."
    },
    {
        word: "compliment",
        pos: "名/動",
        ipa: "/ˈkɑːmplɪmənt/",
        cn: "赞赏，恭维；称赞",
        jp: "お世辞、賛辞；褒める",
        family: "complimentary / complimented / complimenting",
        tips: "职场与客服高频：pay sb a compliment（称赞某人），receive compliments（受到好评）。注意与 complement（补充）区分。",
        desc: "She paid him a compliment."
    },
    {
        word: "premier",
        pos: "形/名",
        ipa: "/prɪˈmɪr/",
        cn: "首要的，最著名的，第一流的",
        jp: "首位の、最高峰の；首相",
        family: "premiership / premiere",
        tips: "商业与服务评价高频：premier provider/hotel（顶级供应商/一流酒店）。",
        desc: "This is a premier hotel."
    },
    {
        word: "bid",
        pos: "名/動",
        ipa: "/bɪd/",
        cn: "投标，出价；竞标",
        jp: "入札、入札額；入札する",
        family: "bidder / bidding / bidded",
        tips: "采购与招标高频：submit a bid（提交投标书），winning bid（中标报价）。",
        desc: "The company submitted a bid."
    },
    {
        word: "duration",
        pos: "名",
        ipa: "/duˈreɪʃn/",
        cn: "持续时间，期间",
        jp: "継続期間、所要時間",
        family: "durable / endure / during",
        tips: "差旅与活动高频：for the duration of the event（在活动持续期间）。",
        desc: "Check the flight duration today."
    },
    {
        word: "tuition",
        pos: "名",
        ipa: "/tuˈɪʃn/",
        cn: "学费，教学",
        jp: "授業料、学費",
        family: "tuitions / tutor / tutorial",
        tips: "教育与福利高频：tuition reimbursement（学费报销/补贴），tuition fees（学费）。",
        desc: "College tuition increased this year."
    },
    {
        word: "wholesale",
        pos: "形/副/名",
        ipa: "/ˈhoʊlseɪl/",
        cn: "批发的，大批的；批发",
        jp: "卸売りの、問屋の；卸売り",
        family: "wholesaler / wholesaling",
        tips: "采购与商业高频：wholesale price/supplier（批发价/批发商）。注意与 retail（零售）区分。",
        desc: "They buy at wholesale prices."
    },
    {
        word: "ongoing",
        pos: "形",
        ipa: "/ˈɑːnɡoʊɪŋ/",
        cn: "持续进行的，仍在开展的",
        jp: "継続している、進行中の",
        family: "go / ongoingness",
        tips: "项目管理高频：ongoing project/investigation/training（持续进行的项目/调查/培训）。",
        desc: "The project is still ongoing."
    },
    {
        word: "blueprint",
        pos: "名/動",
        ipa: "/ˈbluːprɪnt/",
        cn: "蓝图，设计图，规划方案",
        jp: "設計図、青写真、詳細な計画",
        family: "blueprints / blueprinting",
        tips: "工程与战略高频：architectural blueprint（建筑蓝图），blueprint for success（成功的蓝图/行动方案）。",
        desc: "Engineers reviewed the architectural blueprint."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "botanical",
        category: "简单",
        stem: "Visitors can explore a wide variety of rare exotic plants at the city's newly opened ________ garden.",
        options: ["botanical", "wholesale", "ongoing", "tuition"],
        correct: "botanical",
        explanations: {
            guide: "自然景观专有名词定语。________ garden 结合观赏珍稀奇特植物，选 botanical（植物的/植物学的）。",
            family: "botanical (adj.植物学的) | wholesale (adj.批发的) | ongoing (adj.进行中的) | tuition (n.学费)。",
            details: "botanical garden 意为植物园。wholesale（批发的）、ongoing（进行中的）均无法与 garden 构成观赏植物园实体。",
            cn: "游客可以在该市新开放的植物园里探索各种珍稀奇特的植物。",
            jp: "観光客は、市内に新しくオープンした植物園（botanical garden）で、さまざまな希少な熱帯植物を鑑賞できます。"
        }
    },
    {
        id: 2,
        target: "simplify",
        category: "简单",
        stem: "The HR department updated the online portal to ________ the reimbursement process for employees.",
        options: ["simplify", "compliment", "blueprint", "duration"],
        correct: "simplify",
        explanations: {
            guide: "动词不定式考点。to 后面接动词原形，结合更新系统以优化报销流程（the reimbursement process），选 simplify（简化）。",
            family: "simplify (v.简化) | compliment (v.赞赏) | blueprint (n.蓝图) | duration (n.持续时间)。",
            details: "simplify the process 意为简化流程。compliment（称赞）、duration（期间）动宾搭配不通。",
            cn: "人力资源部更新了在线门户网站，以简化员工的报销流程。",
            jp: "人事部は、従業員の経費精算プロセスを簡素化する（simplify）ためにオンラインポータルを更新しました。"
        }
    },
    {
        id: 3,
        target: "tuition",
        category: "简单",
        stem: "The university offers partial ________ assistance to full-time employees who enroll in graduate courses.",
        options: ["tuition", "duration", "wholesale", "premier"],
        correct: "tuition",
        explanations: {
            guide: "员工福利名词定语。________ assistance 结合修读研究生课程（graduate courses），表达“学费”资助，选 tuition。",
            family: "tuition (n.学费) | duration (n.持续时间) | wholesale (adj.批发的) | premier (adj.顶级的)。",
            details: "tuition assistance 属于托业高频福利短语，意为学费资助/学费补贴。其余选项均非教育经费报销项目。",
            cn: "大学向修读研究生课程的全职员工提供部分学费资助。",
            jp: "その大学は、大学院コースに登録するフルタイム従業員に部分的な授業料（tuition）補助を提供しています。"
        }
    },
    {
        id: 4,
        target: "bid",
        category: "简单",
        stem: "Several general contractors submitted a competitive ________ for the commercial renovation contract.",
        options: ["bid", "tuition", "compliment", "blueprint"],
        correct: "bid",
        explanations: {
            guide: "商业招标名词考点。submitted a competitive ________ 结合承包商竞逐商用装修合同，选 bid（投标/出价）。",
            family: "bid (n.投标/出价) | tuition (n.学费) | compliment (n.称赞) | blueprint (n.蓝图)。",
            details: "submit a bid 意为提交标书/竞标。tuition（学费）、compliment（称赞）均非工程招投标中提交的商业报价。",
            cn: "几家总承包商为该商业装修合同提交了具有竞争力的投标报价。",
            jp: "複数のゼネコンが、商業施設のリノベーション契約に対して競争力のある入札（bid）を提出しました。"
        }
    },
    {
        id: 5,
        target: "wholesale",
        category: "简单",
        stem: "Restaurant owners purchase fresh produce directly from local ________ markets to reduce ingredient costs.",
        options: ["wholesale", "ongoing", "botanical", "premier"],
        correct: "wholesale",
        explanations: {
            guide: "大宗采购名词定语。________ markets 结合餐厅采购食材以降低原料成本，选 wholesale（批发的）。",
            family: "wholesale (adj.批发的) | ongoing (adj.持续的) | botanical (adj.植物的) | premier (adj.顶级的)。",
            details: "wholesale market 意为批发市场。ongoing（进行中的）、botanical（植物学的）与压低进货成本的采购市场属性不符。",
            cn: "餐厅老板直接从当地批发市场采购新鲜农产品，以降低食材成本。",
            jp: "レストランのオーナーは、原材料費を削減するために地元の卸売り（wholesale）市場から直接新鮮な農産物を仕入れています。"
        }
    },
    {
        id: 6,
        target: "duration",
        category: "简单",
        stem: "Passengers are required to remain seated with their seatbelts fastened for the ________ of the flight.",
        options: ["duration", "tuition", "blueprint", "simplification"],
        correct: "duration",
        explanations: {
            guide: "时间段固定介词短语。for the ________ of... 属于航空出行高频词组，表达“在飞行全程持续期间”，选 duration。",
            family: "duration (n.持续时间/期间) | tuition (n.学费) | blueprint (n.蓝图) | simplification (n.简化)。",
            details: "for the duration of the flight 意为在整个飞行期间。tuition（学费）、blueprint（蓝图）均无时间持续的语义。",
            cn: "在整个飞行期间，乘客必须在座位上坐好并系好安全带。",
            jp: "乗客は飛行の全期間（duration）を通じて、シートベルトを締めて着席したままでいることが求められます。"
        }
    },
    {
        id: 7,
        target: "compliment",
        category: "中等",
        stem: "The restaurant manager was pleased to receive a sincere ________ from a guest regarding the attentive service.",
        options: ["compliment", "duration", "blueprint", "tuition"],
        correct: "compliment",
        explanations: {
            guide: "客户反馈名词考点。receive a sincere ________ 结合称赞周到细致的服务（attentive service），选 compliment（赞扬/夸奖）。",
            family: "compliment (n.称赞/夸奖) | duration (n.持续时间) | blueprint (n.蓝图) | tuition (n.学费)。",
            details: "receive a compliment 意为受到称赞。注意区分形近词 complement（补充）。duration 与 tuition 无法表达对服务的赞美。",
            cn: "餐厅经理很高兴收到顾客对周到服务的由衷赞赏。",
            jp: "レストランマネージャーは、行き届いたサービスに関して顧客から心からの賛辞（compliment）を受け取り、喜んでいました。"
        }
    },
    {
        id: 8,
        target: "premier",
        category: "中等",
        stem: "The law firm has earned a reputation as the region's ________ provider of corporate legal counsel.",
        options: ["premier", "wholesale", "ongoing", "botanical"],
        correct: "premier",
        explanations: {
            guide: "行业地位前置形容词。the region's ________ provider 表达该律所为区域内“首屈一指的/顶级的”法律顾问机构，选 premier。",
            family: "premier (adj.首要的/顶级的) | wholesale (adj.批发的) | ongoing (adj.进行中的) | botanical (adj.植物的)。",
            details: "premier provider 意为顶级/一流的服务提供商。botanical（植物学的）、wholesale（批发的）不符合高端法律服务机构的评价属性。",
            cn: "该律所已赢得了该地区首屈一指的企业法律顾问提供商的美誉。",
            jp: "その法律事務所は、企業法務相談を提供する地域最高峰の（premier）事業者としての名声を確立しました。"
        }
    },
    {
        id: 9,
        target: "ongoing",
        category: "中等",
        stem: "Because of ________ maintenance on the main server, network access may be intermittently unavailable this weekend.",
        options: ["ongoing", "premier", "wholesale", "simplified"],
        correct: "ongoing",
        explanations: {
            guide: "状态修饰形容词。________ maintenance 结合主服务器周末维护导致网络断续，表达“正在进行的/持续的”维护，选 ongoing。",
            family: "ongoing (adj.持续进行的) | premier (adj.顶级的) | wholesale (adj.批发的) | simplified (adj.简化的)。",
            details: "ongoing maintenance 意为正在进行的维护工作。premier（顶级的）与设备维保语境不符。",
            cn: "由于主服务器目前正在进行维护，本周末网络访问可能会出现间歇性中断。",
            jp: "メインサーバーで進行中の（ongoing）保守作業のため、今週末はネットワークアクセスが一時的に利用できなくなる可能性があります。"
        }
    },
    {
        id: 10,
        target: "blueprint",
        category: "中等",
        stem: "Before commencing construction, architects must double-check every detail on the building ________.",
        options: ["blueprint", "compliment", "tuition", "duration"],
        correct: "blueprint",
        explanations: {
            guide: "建筑工程名词考点。building ________ 结合建筑师在动工前核对图纸细节，选 blueprint（蓝图/设计图）。",
            family: "blueprint (n.蓝图/设计图) | compliment (n.赞扬) | tuition (n.学费) | duration (n.持续时间)。",
            details: "building blueprint 意为建筑施工蓝图。compliment（赞扬）、tuition（学费）均非建筑施工前核查的技术文件图纸。",
            cn: "在开始施工之前，建筑师必须仔细核对建筑蓝图上的每一处细节。",
            jp: "工事を開始する前に、建築家は建物の設計図（blueprint）のすべての詳細を再確認しなければなりません。"
        }
    },
    {
        id: 11,
        target: "simplify",
        category: "中等",
        stem: "The proposed workflow ________ will eliminate redundant approval steps and reduce administrative delays.",
        options: ["simplification", "simplify", "premier", "ongoing"],
        correct: "simplification",
        explanations: {
            guide: "派生名词考点。workflow ________ 属于复合名词主语，表达工作流“简化/简捷化”，选名词形式 simplification。",
            family: "simplification (n.简化) | simplify (v.简化) | premier (adj.顶级的) | ongoing (adj.持续的)。",
            details: "workflow simplification 意为工作流程简化。simplify 是动词，不能紧跟在名词 workflow 后面充当主语中心语。",
            cn: "提议的工作流简化方案将消除多余的审批步骤，并减少行政延误。",
            jp: "提案されたワークフローの簡素化（simplification）は、冗長な承認手順を排除し、管理上の遅延を減らします。"
        }
    },
    {
        id: 12,
        target: "bid",
        category: "中等",
        stem: "The city council selected the lowest qualified ________ to perform the municipal bridge repair work.",
        options: ["bidder", "bid", "duration", "blueprint"],
        correct: "bidder",
        explanations: {
            guide: "派生人物/实体名词。the lowest qualified ________ 结合被市议会选中执行大桥维修工程的主体，选 bidder（投标人/竞标厂商）。",
            family: "bidder (n.竞标者/投标人) | bid (n.投标书/出价) | duration (n.期间) | blueprint (n.蓝图)。",
            details: "lowest qualified bidder 意为报价最低且资质合格的竞标商。bid 是投标报价本身，执行维修工作的主体为人/企业（bidder）。",
            cn: "市议会选择了报价最低且合格的竞标商来执行市政桥梁维修工程。",
            jp: "市議会は、市の橋梁補修工事を行うために、資格を満たす最低価格入札者（bidder）を選定しました。"
        }
    },
    {
        id: 13,
        target: "compliment",
        category: "困难",
        stem: "Guests staying on the executive floor receive ________ continental breakfast and high-speed wireless Internet.",
        options: ["complimentary", "compliment", "ongoing", "botanical"],
        correct: "complimentary",
        explanations: {
            guide: "派生形容词考点。修饰 continental breakfast（欧式早餐），表达酒店提供的“免费赠送的”早餐，选 complimentary。",
            family: "complimentary (adj.免费赠送的/赞赏的) | compliment (n./v.称赞) | ongoing (adj.持续的) | botanical (adj.植物的)。",
            details: "complimentary breakfast 属于托业酒店场景绝高频固定词组，意为免费赠送的早餐。compliment 是名词/动词，不能作前置修饰定语。",
            cn: "入住行政楼层的客人可享受免费欧式早餐和高速无线网络。",
            jp: "エグゼクティブフロアに宿泊するお客様は、無料の（complimentary）コンチネンタルブレックファストと高速ワイヤレスインターネットをご利用いただけます。"
        }
    },
    {
        id: 14,
        target: "ongoing",
        category: "困难",
        stem: "Senior executives held a briefing to address ________ concerns regarding global supply chain instability.",
        options: ["ongoing", "wholesale", "premier", "simplification"],
        correct: "ongoing",
        explanations: {
            guide: "高阶商务形容词作定语。address ________ concerns 结构中，修饰对供应链不稳定的顾虑，表达“持续存在的/长期的”担忧，选 ongoing。",
            family: "ongoing (adj.持续存在的/进行中的) | wholesale (adj.批发的) | premier (adj.顶级的) | simplification (n.简化)。",
            details: "ongoing concerns 意为持续存在的担忧/顾虑。wholesale（批发的）、simplification（简化）与修饰供应链不安心理完全不匹配。",
            cn: "高级管理层举行了简报会，以解决有关全球供应链不稳定的持续担忧。",
            jp: "経営幹部は、世界的なサプライチェーンの不安定さに関する継続的な（ongoing）懸念に対処するためのブリーフィングを開催しました。"
        }
    },
    {
        id: 15,
        target: "blueprint",
        category: "困难",
        stem: "The newly appointed CEO presented a strategic ________ outlining the company's five-year international expansion.",
        options: ["blueprint", "duration", "compliment", "tuition"],
        correct: "blueprint",
        explanations: {
            guide: "企业战略抽象比喻名词。a strategic ________ outlining the expansion 表达新 CEO 提出勾勒五年出海扩张的战略“蓝图/行动纲领”，选 blueprint。",
            family: "blueprint (n.行动蓝图/规划方案) | duration (n.持续时间) | compliment (n.赞誉) | tuition (n.学费)。",
            details: "strategic blueprint 属于托业高阶商务管理固定表达，意为战略蓝图/纲领。duration（期间）、tuition（学费）无法用来承载五年战略规划。",
            cn: "新任命的首席执行官提出了一份战略蓝图，概述了公司为期五年的国际扩张计划。",
            jp: "新しく任命されたCEOは、会社の5年間の国際展開を概説する戦略的青写真/詳細計画（blueprint）を提示しました。"
        }
    },
    {
        id: 16,
        target: "wholesale",
        category: "困难",
        stem: "Retail boutiques purchase apparel in bulk from certified garment ________ to secure lower per-unit prices.",
        options: ["wholesalers", "wholesaling", "bidders", "blueprints"],
        correct: "wholesalers",
        explanations: {
            guide: "商业采购实体复数名词。purchase apparel in bulk from certified garment ________ 表达零售精品店从服装“批发商”处大批量进货，选复数 wholesalers。",
            family: "wholesalers (n.复数批发商) | wholesaling (n.批发业) | bidders (n.竞标者) | blueprints (n.蓝图)。",
            details: "garment wholesalers 意为服装批发商。wholesaling 是动名词/行业名，介词 from 后面指代供货实体时需用表示人/机构的复数名词 wholesalers。",
            cn: "零售精品店从获得认证的服装批发商处大批量采购服装，以确保获得更低的单件进价。",
            jp: "小売ブティックは、より低い単価を確保するために、認定された衣料品卸売業者（wholesalers）から大量にアパレルを仕入れています。"
        }
    },
    {
        id: 17,
        target: "premier",
        category: "困难",
        stem: "The luxury automaker unveiled its ________ electric sedan at the international motor showcase.",
        options: ["premier", "ongoing", "botanical", "complimentary"],
        correct: "premier",
        explanations: {
            guide: "产品定位高阶修饰形容词。its ________ electric sedan 结合在国际汽车展上亮相豪华旗舰纯电轿车，表达“顶级的/首要的”，选 premier。",
            family: "premier (adj.顶级的/旗舰的) | ongoing (adj.持续的) | botanical (adj.植物的) | complimentary (adj.免费的)。",
            details: "premier electric sedan 意为顶级/旗舰电动轿车。complimentary（免费的）与豪车展台新车发布语境相悖。",
            cn: "这家豪华汽车制造商在国际车展上推出了其顶级的纯电动轿车。",
            jp: "その高級自動車メーカーは、国際モーターショーで最高級（premier）電気セダンを発表しました。"
        }
    },
    {
        id: 18,
        target: "duration",
        category: "困难",
        stem: "The warranty policy guarantees free equipment repair for a minimum ________ of twenty-four months from the date of purchase.",
        options: ["duration", "tuition", "blueprint", "simplification"],
        correct: "duration",
        explanations: {
            guide: "质保合同时间名词。a minimum ________ of twenty-four months 表达免费保修的最短“持续期限”，选 duration。",
            family: "duration (n.持续期限/期间) | tuition (n.学费) | blueprint (n.蓝图) | simplification (n.简化)。",
            details: "a minimum duration of... 属于商务合同保修条款核心专有名词，意为最少持续……期限。其余选项均无表示时间长短的概念。",
            cn: "保修政策保证自购买之日起至少二十四个月的期限内提供免费设备维修。",
            jp: "保証規定により、購入日から最低24か月間の期間（duration）、機器の無料修理が保証されます。"
        }
    }
];