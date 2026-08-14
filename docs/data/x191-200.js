// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data451-460.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "harbor",
        pos: "名/動",
        ipa: "/ˈhɑːrbər/",
        cn: "港口，海港；心怀，庇护",
        jp: "港、湾；（感情などを）心に抱く",
        family: "harbors / harbored / harboring",
        tips: "设施与抽象一词多义：natural harbor（天然海港），harbor doubts/fears（心怀疑虑/恐惧）。",
        desc: "Ships enter the harbor."
    },
    {
        word: "introductory",
        pos: "形",
        ipa: "/ˌɪntrəˈdʌktəri/",
        cn: "介绍性的，入门的；体验优惠的",
        jp: "入門の、導入の、割引の",
        family: "introduce / introduction",
        tips: "营销与培训高频：introductory price/offer（首发体验价/优惠），introductory course（入门课程）。",
        desc: "They offer an introductory price."
    },
    {
        word: "preferably",
        pos: "副",
        ipa: "/ˈprefrəbli/",
        cn: "更可取地，最好是",
        jp: "できれば、なるべくなら",
        family: "prefer / preferable / preference",
        tips: "招聘条件与要求高频：5 years of experience, preferably in retail（5年经验，有零售背景者佳）。",
        desc: "Apply online, preferably today."
    },
    {
        word: "considerably",
        pos: "副",
        ipa: "/kənˈsɪdərəbli/",
        cn: "相当地，显著地",
        jp: "かなり、大幅に",
        family: "considerable / consider / consideration",
        tips: "数据与趋势修饰高频：increase considerably（大幅增加），considerably higher（显著更高）。",
        desc: "Sales grew considerably."
    },
    {
        word: "confidently",
        pos: "副",
        ipa: "/ˈkɑːnfɪdəntli/",
        cn: "自信地，有信心地",
        jp: "自信を持って、確信して",
        family: "confident / confidence",
        tips: "职场表现与演说高频：speak confidently（自信地发言），answer questions confidently（自信应对提问）。",
        desc: "She spoke very confidently."
    },
    {
        word: "precisely",
        pos: "副",
        ipa: "/prɪˈsaɪsli/",
        cn: "精确地，恰好",
        jp: "正確に、まさに",
        family: "precise / precision",
        tips: "时间与测量高频：at 9:00 precisely（准时9点整），precisely calibrated（精确校准的）。",
        desc: "The train arrived precisely."
    },
    {
        word: "canteen",
        pos: "名",
        ipa: "/kænˈtiːn/",
        cn: "员工食堂，餐厅；小卖部",
        jp: "社員食堂、売店",
        family: "canteens",
        tips: "办公设施高频：staff/office canteen（员工食堂），eat in the canteen（在食堂就餐）。",
        desc: "They eat in the canteen."
    },
    {
        word: "ivy",
        pos: "名",
        ipa: "/ˈaɪvi/",
        cn: "常春藤",
        jp: "ツタ、アイビー",
        family: "ivies",
        tips: "Part 1 建筑与植物高频：walls covered in ivy（常春藤覆盖的墙壁）。",
        desc: "Green ivy covers the wall."
    },
    {
        word: "dock",
        pos: "名/動",
        ipa: "/dɑːk/",
        cn: "码头，船坞；靠港，停泊；扣减",
        jp: "波止場、ドック；停泊する；差し引く",
        family: "docked / docking / dockside",
        tips: "Part 1 & 物流高频：dock at the pier（停靠码头），loading dock（装卸货站台）。",
        desc: "Boats dock at the pier."
    },
    {
        word: "synthetic",
        pos: "形/名",
        ipa: "/sɪnˈθetɪk/",
        cn: "合成的，人造的",
        jp: "合成の、人工の",
        family: "synthesize / synthetically / synthesis",
        tips: "制造与材料高频：synthetic fibers/materials（合成纤维/人造材料），synthetic leather（人造革）。",
        desc: "The jacket uses synthetic fabric."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "canteen",
        category: "简单",
        stem: "Employees can purchase hot lunches and fresh beverages at the company ________ on the second floor.",
        options: ["canteen", "harbor", "dock", "ivy"],
        correct: "canteen",
        explanations: {
            guide: "办公设施名词考点。purchase hot lunches and fresh beverages 结合在二楼购买热午餐和新鲜饮料，设施选 canteen（员工食堂）。",
            family: "canteen (n.食堂) | harbor (n.港口) | dock (n.码头) | ivy (n.常春藤)。",
            details: "company canteen 意为公司员工食堂。harbor（港口）、dock（码头）均非建筑物内供应午餐的餐饮设施。",
            cn: "员工可以在二楼的公司食堂购买热午餐和新鲜饮料。",
            jp: "従業員は2階にある会社の社員食堂（canteen）で温かいランチや新鮮な飲み物を購入できます。"
        }
    },
    {
        id: 2,
        target: "introductory",
        category: "简单",
        stem: "The fitness center offers a discounted ________ rate for first-time members during their first month.",
        options: ["introductory", "synthetic", "confidently", "considerably"],
        correct: "introductory",
        explanations: {
            guide: "营销优惠形容词。discounted ________ rate 结合首次入会会员首月优惠，选 introductory（体验优惠的/介绍性的）。",
            family: "introductory (adj.体验优惠的/入门的) | synthetic (adj.合成的) | confidently (adv.自信地) | considerably (adv.相当地)。",
            details: "introductory rate 属于托业商业营销经典短语，意为首发优惠价/体验折扣价。confidently 与 considerably 是副词，不能作名词 rate 的前置定语。",
            cn: "该健身中心为首次入会的会员在首月提供优惠的体验价格。",
            jp: "そのフィットネスセンターは、新規会員向けに初月の割引お試し（introductory）料金を提供しています。"
        }
    },
    {
        id: 3,
        target: "ivy",
        category: "简单",
        stem: "The historic brick building was easily recognized by the green ________ growing along its exterior walls.",
        options: ["ivy", "canteen", "dock", "harbor"],
        correct: "ivy",
        explanations: {
            guide: "植物景观名词考点。green ________ growing along its exterior walls 结合沿着外墙生长的绿色植物，选 ivy（常春藤）。",
            family: "ivy (n.常春藤) | canteen (n.食堂) | dock (n.码头) | harbor (n.港口)。",
            details: "green ivy 意为绿色常春藤。canteen（食堂）、dock（码头）均非沿外墙攀爬生长的植物。",
            cn: "这座历史悠久的砖砌建筑很容易通过沿其外墙攀爬生长的绿色常春藤辨认出来。",
            jp: "その歴史的なレンガ造りの建物は、外壁に沿って茂る緑のツタ（ivy）によって簡単に見分けることができました。"
        }
    },
    {
        id: 4,
        target: "precisely",
        category: "简单",
        stem: "The keynote presentation will begin ________ at ten o'clock in the main conference hall.",
        options: ["precisely", "preferably", "synthetic", "introductory"],
        correct: "precisely",
        explanations: {
            guide: "时间修饰副词考点。修饰具体时刻 at ten o'clock，表达“准时在十点整/恰好在十点”，选 precisely。",
            family: "precisely (adv.精确地/恰好) | preferably (adv.更可取地) | synthetic (adj.合成的) | introductory (adj.入门的)。",
            details: "precisely at ten o'clock 意为十点整。preferably（最好是）不符合宣布固定开会时刻的确定语气。",
            cn: "主旨演讲将于十点整准时在主会议厅开始。",
            jp: "基調講演はメインコンファレンスホールでちょうど（precisely）10時に始まります。"
        }
    },
    {
        id: 5,
        target: "dock",
        category: "简单",
        stem: "The ferry captain waited for permission before attempting to ________ the boat at the pier.",
        options: ["dock", "harbor", "canteen", "ivy"],
        correct: "dock",
        explanations: {
            guide: "船舶停靠动词考点。attempting to 后面接动词原形，表达将渡轮“停靠/停泊”在码头，选 dock。",
            family: "dock (v.靠港/停靠/n.码头) | harbor (n.港口/v.心怀) | canteen (n.食堂) | ivy (n.常春藤)。",
            details: "to dock the boat at the pier 意为把船停靠在码头。harbor 作及物动词时多表示窝藏/心怀，不能替代 dock 表示具体的靠泊动作。",
            cn: "渡轮船长在尝试将船停靠在码头之前等待许可指令。",
            jp: "フェリーの船長は、桟橋に船を接岸させる（dock）のを試みる前に許可を待ちました。"
        }
    },
    {
        id: 6,
        target: "synthetic",
        category: "简单",
        stem: "The manufacturer uses durable ________ fibers to make water-resistant hiking jackets.",
        options: ["synthetic", "confidently", "considerably", "introductory"],
        correct: "synthetic",
        explanations: {
            guide: "纺织材料修饰形容词。修饰 fibers（纤维），表达制作防水夹克的“合成/人造”纤维，选 synthetic。",
            family: "synthetic (adj.合成的/人造的) | confidently (adv.自信地) | considerably (adv.相当地) | introductory (adj.入门的)。",
            details: "synthetic fibers 意为合成纤维。confidently 和 considerably 为副词，不能充当名词 fibers 的前置定语。",
            cn: "制造商使用耐用的合成纤维制造防水登山夹克。",
            jp: "メーカーは耐久性のある合成（synthetic）繊維を使用して、防水ハイキングジャケットを製造しています。"
        }
    },
    {
        id: 7,
        target: "harbor",
        category: "中等",
        stem: "Several large cargo ships were anchored safely in the sheltered ________ during the severe thunderstorm.",
        options: ["harbor", "canteen", "ivy", "introductory"],
        correct: "harbor",
        explanations: {
            guide: "航运泊位名词。cargo ships were anchored safely in the sheltered ________ 结合货船在避风处安全抛锚，场所选 harbor（港口/海港）。",
            family: "harbor (n.港口/海港) | canteen (n.食堂) | ivy (n.常春藤) | introductory (adj.介绍性的)。",
            details: "sheltered harbor 意为避风港/港湾。canteen（食堂）、ivy（常春藤）均非货船抛锚停泊的水域设施。",
            cn: "在严酷的雷暴天气期间，几艘大型货船在避风港内安全抛锚。",
            jp: "激しい雷雨の間、数隻の大型貨物船が遮蔽された港（harbor）に安全に停泊していました。"
        }
    },
    {
        id: 8,
        target: "considerably",
        category: "中等",
        stem: "Operating expenses decreased ________ after the firm upgraded to energy-efficient manufacturing machinery.",
        options: ["considerably", "considerable", "synthetic", "precisely"],
        correct: "considerably",
        explanations: {
            guide: "副词修饰动词。decreased ________ 结构中，用副词修饰不及物动词 decreased，表达运营成本“大幅度地/显著地”下降，选 considerably。",
            family: "considerably (adv.显著地/大幅度地) | considerable (adj.相当大的) | synthetic (adj.合成的) | precisely (adv.精确地)。",
            details: "decreased considerably 意为大幅下降。considerable 是形容词，不能直接修饰动词 decreased 作状语。",
            cn: "在公司升级为节能制造机械后，运营费用大幅下降。",
            jp: "同社が省エネ製造機械にアップグレードした後、運営費用は大幅に（considerably）減少しました。"
        }
    },
    {
        id: 9,
        target: "preferably",
        category: "中等",
        stem: "Candidates applying for the marketing director role should have five years of managerial experience, ________ in digital retail.",
        options: ["preferably", "confidently", "considerably", "precisely"],
        correct: "preferably",
        explanations: {
            guide: "招聘偏好副词。修饰补充条件 in digital retail，表达“有数字零售背景者佳/更可取地”，选 preferably。",
            family: "preferably (adv.更可取地/最好是) | confidently (adv.自信地) | considerably (adv.相当地) | precisely (adv.精确地)。",
            details: "preferably in... 属于招聘广告高频句型，意为最好具有……背景。confidently（自信地）在此处语义不通。",
            cn: "申请营销总监职位的应聘者应具备五年管理经验，有数字零售行业背景者更佳。",
            jp: "マーケティングディレクター職に応募する候補者は、できれば（preferably）デジタル小売り分野での5年間の管理経験が必要です。"
        }
    },
    {
        id: 10,
        target: "confidently",
        category: "中等",
        stem: "Ms. Gomez answered all questions ________ during her interview with the board of directors.",
        options: ["confidently", "confident", "confidence", "synthetic"],
        correct: "confidently",
        explanations: {
            guide: "副词修饰动词。answered all questions ________ 结构中，用副词修饰及物动词短语 answered questions，表达“自信地/胸有成竹地”回答问题，选 confidently。",
            family: "confidently (adv.自信地) | confident (adj.自信的) | confidence (n.信心) | synthetic (adj.合成的)。",
            details: "answered confidently 意为自信地回答。confident 是形容词，confidence 是名词，均不能作句中修饰动词的状语。",
            cn: "戈麦斯女士在接受董事会面试期间，自信地回答了所有问题。",
            jp: "ゴメス氏は取締役会との面接中、すべての質問に自信を持って（confidently）答えました。"
        }
    },
    {
        id: 11,
        target: "dock",
        category: "中等",
        stem: "Warehouse workers unloaded heavy crates from the delivery trucks at the facility's loading ________.",
        options: ["dock", "canteen", "harbor", "ivy"],
        correct: "dock",
        explanations: {
            guide: "仓储物流专用复合名词。loading ________ 属于托业经典仓储物流搭配，意为“装卸货站台/装卸区”，选 dock。",
            family: "dock (n.装卸台/码头) | canteen (n.食堂) | harbor (n.海港) | ivy (n.常春藤)。",
            details: "loading dock 专指工厂或仓库供货车装卸货物的装卸平台。harbor 指水上大型海港，与卡车装卸货站台搭配不合。",
            cn: "仓库工人在设施的装卸货站台从送货卡车上卸下重型板条箱。",
            jp: "倉庫の作業員は、施設の荷積みドック（dock）で配達トラックから重い木箱を荷降ろししました。"
        }
    },
    {
        id: 12,
        target: "synthetic",
        category: "中等",
        stem: "Laboratory tests confirmed that the new ________ rubber compound possesses higher heat resistance than natural rubber.",
        options: ["synthetic", "synthetically", "introductory", "confident"],
        correct: "synthetic",
        explanations: {
            guide: "材料前置形容词定语。修饰 rubber compound（橡胶化合物），与后文的 natural rubber（天然橡胶）形成鲜明对照，选 synthetic（合成的/人造的）。",
            family: "synthetic (adj.合成的) | synthetically (adv.合成地) | introductory (adj.入门的) | confident (adj.自信的)。",
            details: "synthetic rubber 意为合成橡胶。synthetically 是副词，不能作名词 rubber compound 的前置定语。",
            cn: "实验室测试证实，这种新型合成橡胶化合物比天然橡胶具有更高的耐热性。",
            jp: "実験室のテストにより、新しい合成（synthetic）ゴム化合物は天然ゴムよりも高い耐熱性を備えていることが確認されました。"
        }
    },
    {
        id: 13,
        target: "introductory",
        category: "困难",
        stem: "The webinar begins with a brief ________ overview before detailing advanced strategies for foreign market expansion.",
        options: ["introductory", "introduction", "introduced", "confidently"],
        correct: "introductory",
        explanations: {
            guide: "派生形容词修饰名词。a brief ________ overview 结构中，修饰名词 overview，表达“介绍性的/概论性的”概述，选形容词 introductory。",
            family: "introductory (adj.介绍性的/引导的) | introduction (n.介绍/引入) | introduced (v-ed被引入的) | confidently (adv.自信地)。",
            details: "introductory overview 意为前言概述/入门介绍。introduction 是名词，在此处修饰 overview 时不如派生形容词 introductory 规范。",
            cn: "该网络研讨会以简要的介绍性概述开始，随后详细阐述拓展海外市场的高阶策略。",
            jp: "ウェビナーは、海外市場拡大のための高度な戦略を詳述する前に、簡単な導入（introductory）概要から始まります。"
        }
    },
    {
        id: 14,
        target: "considerably",
        category: "困难",
        stem: "The newly launched product line contributed to a ________ higher profit margin in the third quarter.",
        options: ["considerably", "considerable", "consideration", "precisely"],
        correct: "considerably",
        explanations: {
            guide: "副词修饰比较级形容词。a ________ higher profit margin 结构中，修饰形容词比较级 higher，表达“显著更高/大幅更高”，选副词 considerably。",
            family: "considerably (adv.显著地/相当大程度上) | considerable (adj.相当大的) | consideration (n.考虑) | precisely (adv.精确地)。",
            details: "considerably higher 属于托业 Part 5 经典考点（副词修饰比较级）。considerable 是形容词，不能修饰另一个形容词 higher。",
            cn: "新推出的产品系列促成了第三季度显著提高的利润率。",
            jp: "新しく発売された製品ラインは、第3四半期における大幅に（considerably）高い利益率に貢献しました。"
        }
    },
    {
        id: 15,
        target: "harbor",
        category: "困难",
        stem: "Despite positive quarterly revenue figures, several institutional investors still ________ doubts about the company's long-term sustainability.",
        options: ["harbor", "dock", "synthesize", "introduce"],
        correct: "harbor",
        explanations: {
            guide: "及物动词一词多义与搭配。主语为 several institutional investors，结合宾语 doubts（疑虑），表达“心怀/抱有”疑虑，选动词 harbor。",
            family: "harbor (v.心怀/怀有/n.港口) | dock (v.靠泊/扣除) | synthesize (v.合成) | introduce (v.介绍)。",
            details: "harbor doubts 属于商务与新闻英语高阶固定动宾搭配，意为心怀疑虑。dock、synthesize 均不能与 doubts 搭配。",
            cn: "尽管季度收入数据良好，几家机构投资者仍对公司的长期可持续性抱有疑虑。",
            jp: "良好な四半期収益数字にもかかわらず、一部の機関投資家は依然として会社の長期的な持続可能性について疑念を抱いて（harbor）います。"
        }
    },
    {
        id: 16,
        target: "precisely",
        category: "困难",
        stem: "Engineers adjusted the optical sensors with utmost ________ to ensure flawless performance on the assembly line.",
        options: ["precision", "precisely", "precise", "preferably"],
        correct: "precision",
        explanations: {
            guide: "派生抽象名词考点。with utmost ________ 结构中，介词短语 with + 形容词 utmost（极度的）后面接抽象名词 precision（精准度/精确）。",
            family: "precision (n.精准度/精确) | precisely (adv.精确地) | precise (adj.精确的) | preferably (adv.更可取地)。",
            details: "with utmost precision 属于托业高阶介词搭配，意为以极高的精度。precisely 是副词，不能跟在形容词 utmost 后面作介词宾语中心语。",
            cn: "工程师以极高的精度调整了光学传感器，以确保装配线上的无暇运行。",
            jp: "エンジニアは組み立てラインでの完璧な性能を確保するため、最高の精度（precision）で光学センサーを調整しました。"
        }
    },
    {
        id: 17,
        target: "confidently",
        category: "困难",
        stem: "Having prepared extensively for the audit, the financial controller ________ presented the quarterly balance sheet to federal regulators.",
        options: ["confidently", "confidence", "confident", "considerably"],
        correct: "confidently",
        explanations: {
            guide: "分词状语后修饰谓语动词。修饰及物动词 presented（展示/汇报），表达财务总监“满怀信心地/胸有成竹地”汇报资产负债表，选副词 confidently。",
            family: "confidently (adv.自信地) | confidence (n.信心) | confident (adj.自信的) | considerably (adv.相当地)。",
            details: "confidently presented the balance sheet 意为自信地汇报了资产负债表。confidence 是名词，confident 是形容词，均不能在主谓之间作副词状语。",
            cn: "在为审计做了充分准备之后，财务总监自信地向联邦监管机构展示了季度资产负债表。",
            jp: "監査に向けて広範な準備を行った後、財務コントローラーは自信を持って（confidently）四半期バランスシートを連邦規制当局に提示しました。"
        }
    },
    {
        id: 18,
        target: "preferably",
        category: "困难",
        stem: "For urgent project inquiries, client managers find phone consultations far more ________ to asynchronous email exchanges.",
        options: ["preferable", "preferably", "preference", "precisely"],
        correct: "preferable",
        explanations: {
            guide: "派生形容词与固定介词搭配。find sth far more ________ to... 结构中，用形容词 preferable 与介词 to 搭配（preferable to sth，意为比某物更可取/更合适），选 preferable。",
            family: "preferable (adj.更可取的/更好的) | preferably (adv.更可取地) | preference (n.偏好) | precisely (adv.精确地)。",
            details: "A is preferable to B 属于托业高阶句型，意为 A 相比 B 更可取。preferably 是副词，preference 是名词，均不能在此充当宾语补足语形容词与 to 搭配。",
            cn: "对于紧急项目问询，客户经理发现电话沟通远比异步电子邮件往来更为可取。",
            jp: "緊急のプロジェクトの問い合わせについて、クライアントマネージャーは電話相談の方が非同期のメールのやり取りよりもはるかに好ましい（preferable）と考えています。"
        }
    }
];