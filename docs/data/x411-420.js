// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data791-800.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "manuscript",
        pos: "名",
        ipa: "/ˈmænjuskrɪpt/",
        cn: "手稿，原稿，手抄本",
        jp: "原稿、手書き文書、写本",
        family: "manuscripts",
        tips: "出版与博物馆高频：historical/original manuscript（历史手稿/原始手抄本），submit a manuscript for review（提交书稿审阅）。",
        desc: "The author submitted a draft manuscript."
    },
    {
        word: "curators",
        pos: "名",
        ipa: "/ˈkjʊreɪtərz/",
        cn: "（博物馆/美术馆）馆长，策展人，保管员（复数）",
        jp: "学芸員、キュレーター、館長（複数）",
        family: "curator / curate / curatorial / curated",
        tips: "艺术与文化展览高频：museum/gallery curators（博物馆/画廊策展人），curators organize exhibitions（策展人策划展览）。",
        desc: "Museum curators organized the art exhibition."
    },
    {
        word: "fiduciary",
        pos: "形/名",
        ipa: "/fɪˈduːʃieri/",
        cn: "受托的，基于信托的；受托人",
        jp: "信託の、受託者の；受託者",
        family: "fiduciaries",
        tips: "金融与公司法务核心词：fiduciary duty/responsibility（受信托义务/受托责任），act in a fiduciary capacity（以受托人身份行事）。",
        desc: "Board members hold a fiduciary duty."
    },
    {
        word: "coordinator",
        pos: "名",
        ipa: "/koʊˈɔːrdɪneɪtər/",
        cn: "协调员，统筹人",
        jp: "コーディネーター、調整役、進行係",
        family: "coordinate / coordination / coordinated",
        tips: "职场岗位与项目管理高频：project/event coordinator（项目/活动协调员），training coordinator（培训协调员）。",
        desc: "The project coordinator scheduled the meeting."
    },
    {
        word: "concierge",
        pos: "名",
        ipa: "/koʊnˈsjerʒ/",
        cn: "礼宾人员，前台接待总管",
        jp: "コンシェルジュ、総合案内係",
        family: "concierges",
        tips: "高端酒店与物业服务高频：hotel concierge（酒店礼宾专员），ask the concierge for directions（向礼宾员问路）。",
        desc: "The concierge assisted hotel guests."
    },
    {
        word: "randomized",
        pos: "形/動",
        ipa: "/ˈrændəmaɪzd/",
        cn: "随机化的，随机选取的（randomize的过去式/分词）",
        jp: "無作為化された、ランダム化された",
        family: "random / randomize / randomization / randomly",
        tips: "市场调研与临床试验高频：randomized trial/study（随机试验/研究），randomized customer sample（随机客户样本）。",
        desc: "Researchers conducted a randomized survey."
    },
    {
        word: "merit",
        pos: "名/動",
        ipa: "/ˈmerɪt/",
        cn: "绩效，功绩，长处；值得",
        jp: "実績、功績、利点、価値；値する",
        family: "merits / meritorious / meritocracy",
        tips: "HR薪酬与评审高频搭配：merit-based bonus/promotion（基于绩效的奖金/晋升），on its own merits（依据其自身的优劣）。",
        desc: "Raises are based on individual merit."
    },
    {
        word: "hierarchy",
        pos: "名",
        ipa: "/ˈhaɪərɑːrki/",
        cn: "层级制度，组织架构，等级体系",
        jp: "階層組織、ヒエラルキー、序列",
        family: "hierarchical / hierarchically / hierarchies",
        tips: "企业战略与管理高频：corporate/organizational hierarchy（企业组织架构/层级体系），flatten the hierarchy（使管理层级扁平化）。",
        desc: "The firm simplified its corporate hierarchy."
    },
    {
        word: "diverted",
        pos: "動/形",
        ipa: "/daɪˈvɜːrtɪd/",
        cn: "转移，改道，分流（divert的过去式/分词）",
        jp: "迂回させられた、転換された",
        family: "divert / diversion / diverting",
        tips: "交通与资金调度高频：traffic was diverted（交通被分流），diverted funds to research（将资金调拨至研发）。",
        desc: "Flights were diverted due to fog."
    },
    {
        word: "vans",
        pos: "名",
        ipa: "/vænz/",
        cn: "厢式货车，送货面包车（复数）",
        jp: "バン、小型貨物自動車（複数）",
        family: "van / minivans",
        tips: "仓储物流与交通高频：commercial delivery vans（商业送货厢式车），fleet of cargo vans（货运车队）。",
        desc: "Delivery vans departed from the warehouse."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "curators",
        category: "简单",
        stem: "Museum ________ worked closely with international conservators to prepare the ancient artifact exhibition.",
        options: ["curators", "hierarchies", "vans", "fiduciaries"],
        correct: "curators",
        explanations: {
            guide: "文化场馆职务名词复数主语。Museum ________ 结合与国际文物保护专家密切合作筹备古代文物展，选 curators（策展人/博物馆馆长）。",
            family: "curators (n.复数策展人/馆长) | hierarchies (n.层级) | vans (n.货车) | fiduciaries (n.受托人)。",
            details: "museum curators 意为博物馆策展人/馆长。hierarchies（层级结构）、vans（厢式货车）均非筹划展览的专业人员。",
            cn: "博物馆策展人与国际文物保护专家密切合作，共同筹备了古代文物展览。",
            jp: "博物館の学芸員たち（curators）は、古代遺物展を準備するために国際的な保存修復専門家と緊密に連携しました。"
        }
    },
    {
        id: 2,
        target: "coordinator",
        category: "简单",
        stem: "The corporate event ________ finalized the banquet room reservation and confirmed catering arrangements with the hotel.",
        options: ["coordinator", "manuscript", "hierarchy", "merit"],
        correct: "coordinator",
        explanations: {
            guide: "职场岗位名词主语。The corporate event ________ 结合落实宴会厅预订并与酒店确认餐饮安排，选 coordinator（协调员/统筹人）。",
            family: "coordinator (n.协调员/统筹人) | manuscript (n.手稿) | hierarchy (n.层级) | merit (n.绩效)。",
            details: "event coordinator 意为活动统筹/协调员。manuscript（手稿）、merit（功绩）均非负责具体行政联络的职务主体。",
            cn: "企业活动协调员敲定了宴会厅的预订，并向酒店确认了餐饮安排。",
            jp: "企業のイベントコーディネーター（coordinator）は、宴会場の予約を完了し、ホテルとのケータリングの手配を確認しました。"
        }
    },
    {
        id: 3,
        target: "manuscript",
        category: "简单",
        stem: "The celebrated novelist submitted the final draft of her upcoming ________ to the publishing editor yesterday.",
        options: ["manuscript", "concierge", "fiduciary", "coordinator"],
        correct: "manuscript",
        explanations: {
            guide: "出版印刷名词宾语。submitted the final draft of her ________ to the editor 结合小说家向责任编辑提交定稿，选 manuscript（原稿/书稿）。",
            family: "manuscript (n.书稿/手稿) | concierge (n.礼宾员) | fiduciary (n.受托人) | coordinator (n.协调员)。",
            details: "draft manuscript 意为书稿草稿/原稿。concierge（礼宾员）、coordinator（协调员）均非作者向出版社提交的出版文稿。",
            cn: "这位著名小说家昨天向出版编辑提交了她即将出版的新书定稿。",
            jp: "著名な小説家は昨日、出版編集者に次回作の最終原稿（manuscript）を提出しました。"
        }
    },
    {
        id: 4,
        target: "fiduciary",
        category: "简单",
        stem: "Corporate directors have a legal and ________ responsibility to act in the best financial interests of their shareholders.",
        options: ["fiduciary", "randomized", "diverted", "curated"],
        correct: "fiduciary",
        explanations: {
            guide: "法律信托修饰形容词。a legal and ________ responsibility 结合董事会对股东负有的诚信管理与财产受托责任，选 fiduciary（受信托的/受托责任的）。",
            family: "fiduciary (adj.信托的/受托的) | randomized (adj.随机的) | diverted (adj.改道的) | curated (adj.策划的)。",
            details: "fiduciary responsibility 属于公司法与金融核心专有名词，意为信托/受托责任。randomized（随机化的）不符合董事责任法律属性。",
            cn: "公司董事负有以股东最大财务利益行事的法律和信托责任。",
            jp: "会社の取締役は、株主の最善の財務的利益のために行動する法的および信託（fiduciary）責任を負っています。"
        }
    },
    {
        id: 5,
        target: "concierge",
        category: "简单",
        stem: "The luxury resort ________ helped international visitors book guided sightseeing excursions across the island.",
        options: ["concierge", "manuscript", "hierarchy", "merit"],
        correct: "concierge",
        explanations: {
            guide: "酒店服务岗位名词主语。resort ________ helped visitors book excursions 结合协助度假村国际游客预订岛上导览观光行程，选 concierge（礼宾人员/服务总管）。",
            family: "concierge (n.礼宾员) | manuscript (n.手稿) | hierarchy (n.层级) | merit (n.功绩)。",
            details: "resort concierge 专指度假村礼宾服务人员。manuscript（手稿）、hierarchy（层级）均非提供旅游咨询订票服务的工作人员。",
            cn: "这家豪华度假村的礼宾人员帮助国际游客预订了环岛观光导览行程。",
            jp: "高級リゾートのコンシェルジュ（concierge）は、外国人観光客が島内のガイド付き観光ツアーを予約するのを手伝いました。"
        }
    },
    {
        id: 6,
        target: "vans",
        category: "简单",
        stem: "The online grocery delivery service expanded its urban fleet by leasing twenty refrigerated cargo ________.",
        options: ["vans", "hierarchies", "fiduciaries", "merits"],
        correct: "vans",
        explanations: {
            guide: "冷链配送车辆名词复数。twenty refrigerated cargo ________ 结合生鲜配送服务租赁冷藏货运车扩充车队，选 vans（厢式货车/面包车）。",
            family: "vans (n.复数厢式货车) | hierarchies (n.层级体系) | fiduciaries (n.受托人) | merits (n.优点)。",
            details: "refrigerated cargo vans 意为冷藏货运厢式车。hierarchies（层级）、fiduciaries（受托人）均非生鲜配送车队中的营运车辆。",
            cn: "该在线生鲜配送服务通过租赁二十辆冷藏货运厢式车，扩大了其城市配送车队规模。",
            jp: "オンライン食料品配達サービスは、20台の冷蔵貨物バン（vans）をリースして都市部の車両群を拡充しました。"
        }
    },
    {
        id: 7,
        target: "merit",
        category: "中等",
        stem: "The consulting firm maintains a strict promotion policy where salary increases are determined entirely by professional ________.",
        options: ["merit", "hierarchy", "manuscript", "coordinator"],
        correct: "merit",
        explanations: {
            guide: "薪酬考核抽象名词。determined entirely by professional ________ 结合晋升与加薪完全依据专业工作业绩与能力，选 merit（绩效/功绩/优良表现）。",
            family: "merit (n.绩效/功绩/优点) | hierarchy (n.层级) | manuscript (n.原稿) | coordinator (n.协调员)。",
            details: "determined by merit 属于HR经典考点，意为凭绩效/实力决定。manuscript（手稿）、coordinator（协调员）均不能作为加薪的考核依据。",
            cn: "该咨询公司秉持严格的晋升政策，薪资增长完全由个人的专业工作绩效决定。",
            jp: "そのコンサルティング会社は、昇給が完全に専門職としての実績/功績（merit）によって決定される厳格な昇進方針を維持しています。"
        }
    },
    {
        id: 8,
        target: "diverted",
        category: "中等",
        stem: "Because of emergency water main repairs, all westbound vehicular traffic was ________ onto adjacent residential streets.",
        options: ["diverted", "randomized", "curated", "merited"],
        correct: "diverted",
        explanations: {
            guide: "交通管制被动动词考点。traffic was ________ onto adjacent streets 结合主供水管抢修导致西行车流被疏导至邻近街道，选 diverted（改道/分流）。",
            family: "diverted (v-ed改道/分流的) | randomized (adj.随机的) | curated (v-ed策划的) | merited (v-ed应得的)。",
            details: "traffic was diverted onto... 意为车辆被分流疏导至某路段。randomized（随机化的）不符合交通管制的逻辑语境。",
            cn: "由于主供水管道进行紧急抢修，所有西行的机动车交通都被分流改道至邻近的居民区街道。",
            jp: "水道本管の緊急修理のため、西行きのすべての車両交通は隣接する住宅街の道路に迂回させられました（diverted）。"
        }
    },
    {
        id: 9,
        target: "hierarchy",
        category: "中等",
        stem: "The technology startup adopted an open-office layout to foster collaboration and break down the traditional corporate ________.",
        options: ["hierarchy", "manuscript", "van", "fiduciary"],
        correct: "hierarchy",
        explanations: {
            guide: "企业组织管理名词。break down the traditional corporate ________ 结合采用开放式办公布局以打破传统的企业层级森严体系，选 hierarchy（层级架构/等级制度）。",
            family: "hierarchy (n.层级体系/等级制) | manuscript (n.手稿) | van (n.货车) | fiduciary (n.受托人)。",
            details: "corporate hierarchy 意为企业组织层级体系。break down the hierarchy 属于管理学高频表达，意为打破层级隔阂。",
            cn: "这家科技初创公司采用了开放式办公布局，以促进团队协作并打破传统的企业层级等级制度。",
            jp: "そのテクノロジー新興企業は、協調を促進し従来の企業階層組織（hierarchy）を打破するためにオープンオフィスのレイアウトを採用しました。"
        }
    },
    {
        id: 10,
        target: "randomized",
        category: "中等",
        stem: "The market research team conducted a ________ survey of five hundred subscribers to assess customer satisfaction accurately.",
        options: ["randomized", "diverted", "fiduciary", "hierarchical"],
        correct: "randomized",
        explanations: {
            guide: "抽样调查修饰形容词。conducted a ________ survey of subscribers 结合精确客观评估客户满意度的抽样方法，选 randomized（随机化的/随机抽样的）。",
            family: "randomized (adj.随机的/无偏抽样的) | diverted (v-ed改道的) | fiduciary (adj.信托的) | hierarchical (adj.层级的)。",
            details: "a randomized survey 意为随机抽样调查。fiduciary（信托的）、diverted（改道的）均无法用来修饰调查问卷的抽样方法。",
            cn: "市场研究团队对五百名订阅用户进行了随机抽样调查，以准确评估客户满意度。",
            jp: "市場調査チームは、顧客満足度を正確に評価するために、500人の加入者を対象とした無作為化（randomized）調査を実施しました。"
        }
    },
    {
        id: 11,
        target: "fiduciary",
        category: "中等",
        stem: "Investment advisors are bound by a strict ________ standard to prioritize their clients' financial security over company profits.",
        options: ["fiduciary", "randomized", "diverted", "curated"],
        correct: "fiduciary",
        explanations: {
            guide: "金融行业行为准则修饰形容词。bound by a strict ________ standard to prioritize clients' security 结合投资顾问必须将客户资金安全置于首位的信托标准，选 fiduciary（信托的/受托履职的）。",
            family: "fiduciary (adj.信托的/受托的) | randomized (adj.随机的) | diverted (adj.改道的) | curated (adj.策展的)。",
            details: "fiduciary standard 专指金融与资产管理行业的受托信义准则。randomized（随机的）与行业合规信条无关。",
            cn: "投资顾问受到严格的受托信托标准的约束，必须将客户的资金安全置于公司利润之上。",
            jp: "投資アドバイザーは、会社の利益よりもクライアントの財務的安全を優先する厳格な信託（fiduciary）基準に縛られています。"
        }
    },
    {
        id: 12,
        target: "manuscript",
        category: "中等",
        stem: "Archivists used non-destructive digital imaging technology to preserve the delicate fifteenth-century ________.",
        options: ["manuscript", "coordinator", "hierarchy", "van"],
        correct: "manuscript",
        explanations: {
            guide: "历史文献名词宾语。preserve the delicate fifteenth-century ________ 结合档案保护人员使用非破坏性数字化影像技术保护十五世纪的古籍珍本，选 manuscript（手抄本/历史手稿）。",
            family: "manuscript (n.手抄本/古籍手稿) | coordinator (n.协调员) | hierarchy (n.层级) | van (n.货车)。",
            details: "fifteenth-century manuscript 意为十五世纪的手抄本文献。coordinator（统筹员）、van（货车）均非档案室修复保护的古代文物对象。",
            cn: "档案保管员使用非破坏性数字成像技术来保护这件脆弱的十五世纪古代手抄本。",
            jp: "文書館員は、壊れやすい15世紀の手書き写本/古文書（manuscript）を保存するために、非破壊デジタルイメージング技術を使用しました。"
        }
    },
    {
        id: 13,
        target: "curators",
        category: "困难",
        stem: "The national gallery praised the guest specialist for her exceptional ________ oversight during the contemporary sculpture exhibition.",
        options: ["curatorial", "curators", "curator", "curating"],
        correct: "curatorial",
        explanations: {
            guide: "修饰名词的派生形容词考点。her exceptional ________ oversight 结构中，修饰名词 oversight（督导/统筹把控），选派生形容词 curatorial（策展的/馆长职责的）。",
            family: "curatorial (adj.策展的/保管工作的) | curators (n.策展人复数) | curator (n.单数) | curating (v-ing)。",
            details: "curatorial oversight 意为策展统筹与把控。curators 和 curator 是名词，不能直接充当名词 oversight 的前置形容词定语。",
            cn: "国家美术馆赞扬了这位特邀专家在当代雕塑展览期间所展现出的卓越策展统筹能力。",
            jp: "国立美術館は、現代彫刻展の期間中に優れたキュレーターとしての/企画管理（curatorial）統括を行った客員専門家を称賛しました。"
        }
    },
    {
        id: 14,
        target: "coordinator",
        category: "困难",
        stem: "Effective inter-departmental ________ is essential to ensure that the enterprise software implementation proceeds smoothly.",
        options: ["coordination", "coordinator", "coordinate", "coordinated"],
        correct: "coordination",
        explanations: {
            guide: "派生抽象名词作主语。Effective inter-departmental ________ is essential 结构中，形容词 inter-departmental（跨部门的）后面接抽象名词形式 coordination（协调/配合）。",
            family: "coordination (n.协调/配合) | coordinator (n.协调人) | coordinate (v.协调) | coordinated (adj.协同的)。",
            details: "inter-departmental coordination 意为跨部门协调。coordinator 指具体职务人员（人），表示各部门之间的协作配合机制时需使用抽象名词 coordination。",
            cn: "有效的跨部门协调对于确保企业级软件实施顺利推进至关重要。",
            jp: "全社的なソフトウェア導入を円滑に進めるためには、効果的な部門間の連携/調整（coordination）が不可欠です。"
        }
    },
    {
        id: 15,
        target: "fiduciary",
        category: "困难",
        stem: "Trust funds and asset management companies act as ________, legally obligated to manage invested capital prudently.",
        options: ["fiduciaries", "fiduciary", "hierarchies", "coordinators"],
        correct: "fiduciaries",
        explanations: {
            guide: "法律主体可数名词复数作表语。act as ________, legally obligated to... 结合信托基金和资管公司作为法律受托人代客理财，选名词复数形式 fiduciaries（受托人复数）。",
            family: "fiduciaries (n.受托人复数) | fiduciary (adj.信托的/n.单数) | hierarchies (n.层级) | coordinators (n.协调员)。",
            details: "act as fiduciaries 意为作为受托人行事。主语为复数实体（Trust funds and companies），且处于 act as 之后充当名词表语，应选用名词复数形式 fiduciaries。",
            cn: "信托基金和资产管理公司作为受托人运作，承担着依法审慎管理投资资金的法定责任。",
            jp: "信託基金や資産運用会社は受託者（fiduciaries）として機能し、投資された資本を慎重に管理する法的義務を負っています。"
        }
    },
    {
        id: 16,
        target: "hierarchy",
        category: "困难",
        stem: "In a strictly ________ organization, operational approvals must pass sequentially through multiple layers of management.",
        options: ["hierarchical", "hierarchy", "hierarchically", "hierarchies"],
        correct: "hierarchical",
        explanations: {
            guide: "修饰名词的派生形容词考点。In a strictly ________ organization 结构中，副词 strictly 后面接形容词修饰 organization，选 hierarchical（等级森严的/层级制的）。",
            family: "hierarchical (adj.层级制的/等级分明的) | hierarchy (n.等级制) | hierarchically (adv.按层级地) | hierarchies (n.复数)。",
            details: "a hierarchical organization 意为层级制组织。hierarchy 是名词，不能被副词 strictly 修饰作 organization 的定语。",
            cn: "在一个层级等级森严的组织中，业务审批必须依序经过多层管理人员的批示。",
            jp: "厳格に階層化された（hierarchical）組織では、業務の承認は複数の管理層を順番に通過しなければなりません。"
        }
    },
    {
        id: 17,
        target: "diverted",
        category: "困难",
        stem: "Airport authorities implemented emergency runway ________ protocols after sudden snowstorms reduced flight visibility.",
        options: ["diversion", "diverted", "divert", "diverting"],
        correct: "diversion",
        explanations: {
            guide: "复合名词定语考点。runway ________ protocols 属于航空运输核心专有名词，表达跑道“分流/备降”规程，选派生抽象名词 diversion。",
            family: "diversion (n.改道/分流/备降) | diverted (adj.改道的) | divert (v.分流) | diverting (adj.转向的)。",
            details: "runway diversion protocols 意为跑道备降/改航协议规程。diverted 是分词，修饰 protocols 构成复合制度专有名词时规范采用名词形式 diversion。",
            cn: "在突降暴风雪导致飞行能见度降低后，机场管理当局启动了紧急跑道分流备降预案规程。",
            jp: "突然の猛吹雪で飛行の視界が低下した後、空港当局は緊急滑走路迂回/目的地変更（diversion）プロトコルを発動しました。"
        }
    },
    {
        id: 18,
        target: "randomized",
        category: "困难",
        stem: "Clinical trials require participants to be assigned ________ to either the experimental drug or the placebo group.",
        options: ["randomly", "randomized", "randomize", "randomness"],
        correct: "randomly",
        explanations: {
            guide: "副词修饰被动动词考点。to be assigned ________ to either... 结构中，需要副词修饰过去分词 assigned，表达被“随机地”分配至实验组或对照组，选副词 randomly。",
            family: "randomly (adv.随机地/任意地) | randomized (adj.随机化的) | randomize (v.使随机) | randomness (n.随意性)。",
            details: "assigned randomly 意为随机分配。randomized 是形容词，randomness 是名词，均不能充当修饰动词 assigned 的状语成分。",
            cn: "临床试验要求将受试参与者随机分配至实验药物组或安慰剂对照组中。",
            jp: "臨床試験では、参加者を実験薬群またはプラセボ群のいずれかに無作為に/ランダムに（randomly）割り当てることが求められます。"
        }
    }
];