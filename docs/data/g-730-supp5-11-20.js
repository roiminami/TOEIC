// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data321-330.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "debut",
        pos: "名/動",
        ipa: "/deɪˈbjuː/",
        cn: "初次登台，首演，首次亮相",
        jp: "デビュー、初登場；デビューする",
        family: "debuted / debuting",
        tips: "商务与娱乐高频：make a debut（首次亮相），debut album/product（首张专辑/首发产品）。",
        desc: "The band made their debut."
    },
    {
        word: "draft",
        pos: "名/動",
        ipa: "/dræft/",
        cn: "草案，汇票；起草，草拟",
        jp: "草案、下書き；起草する",
        family: "drafted / drafting / draftsman",
        tips: "商务文件处理高频：rough draft（初稿），draft a contract（起草合同）。",
        desc: "She wrote a rough draft."
    },
    {
        word: "expert",
        pos: "名/形",
        ipa: "/ˈekspɜːrt/",
        cn: "专家，行家；专业的，熟练的",
        jp: "専門家、エキスパート；熟練した",
        family: "expertise / expertly",
        tips: "职场与顾问高频：industry expert（行业专家），expert advice（专家建议）。",
        desc: "He is an industry expert."
    },
    {
        word: "follow up",
        pos: "動/名",
        ipa: "/ˈfɑːloʊ ʌp/",
        cn: "跟进，后续行动",
        jp: "フォローアップする、追跡する；追跡",
        family: "follow-up / followed",
        tips: "商务沟通高频：follow up on an inquiry（跟进问询）；作形容词/名词时加连字符 follow-up meeting（后续跟进会议）。",
        desc: "Please follow up with clients."
    },
    {
        word: "freelance",
        pos: "形/副/動",
        ipa: "/ˈfriːlæns/",
        cn: "自由职业的，特约的",
        jp: "フリーランスの、特约の",
        family: "freelancer / freelancing",
        tips: "招聘与岗位高频：freelance writer/designer（自由撰稿人/设计师）。",
        desc: "She is a freelance writer."
    },
    {
        word: "gourmet",
        pos: "形/名",
        ipa: "/ˈɡʊrmeɪ/",
        cn: "美食的，高档美味的；美食家",
        jp: "グルメの、高級な；美食家",
        family: "gourmets",
        tips: "餐饮与酒店高频：gourmet restaurant（美食餐厅），gourmet coffee（高档咖啡）。",
        desc: "They visited a gourmet restaurant."
    },
    {
        word: "guideline",
        pos: "名",
        ipa: "/ˈɡaɪdlaɪn/",
        cn: "指导方针，准则",
        jp: "指針、ガイドライン",
        family: "guidelines / guide",
        tips: "安全与规范高频：safety guidelines（安全指南），follow guidelines（遵守准则）。",
        desc: "Follow the safety guidelines closely."
    },
    {
        word: "incentive",
        pos: "名",
        ipa: "/ɪnˈsentɪv/",
        cn: "激励，刺激，奖金",
        jp: "動機付け、インセンティブ、報奨金",
        family: "incentivize / incentives",
        tips: "销售与管理高频：financial incentive（经济激励），offer an incentive（提供激励机制）。",
        desc: "Bonuses provide a strong incentive."
    },
    {
        word: "infrastructure",
        pos: "名",
        ipa: "/ˈɪnfrəstrʌktʃər/",
        cn: "基础设施，下层结构",
        jp: "インフラ、社会基盤",
        family: "infrastructural",
        tips: "城市规划与经济高频：transportation infrastructure（交通基础设施），modern infrastructure（现代基础设施）。",
        desc: "City infrastructure needs urgent repairs."
    },
    {
        word: "inn",
        pos: "名",
        ipa: "/ɪn/",
        cn: "小旅馆，客栈",
        jp: "宿屋、イン、小旅館",
        family: "innkeeper / inns",
        tips: "旅游与住宿高频：cozy inn（舒适的小旅馆），historic inn（历史悠久的客栈）。",
        desc: "We stayed at a cozy inn."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "expert",
        category: "简单",
        stem: "The company hired an IT ________ to upgrade the corporate cybersecurity system.",
        options: ["expert", "expertise", "inn", "debut"],
        correct: "expert",
        explanations: {
            guide: "职业人物名词考点。hired an IT ________ 表达雇佣一名 IT“专家”，选 expert。",
            family: "expert (n.专家) | expertise (n.专业知识) | inn (n.小旅馆) | debut (n.首演)。",
            details: "IT expert 意为 IT 专家。expertise 是抽象名词（专业技能），不能用冠词 an 修饰指代具体的人。",
            cn: "公司聘请了一位 IT 专家来升级公司网络安全系统。",
            jp: "同社は企業のサイバーセキュリティシステムをアップグレードするためにIT専門家（expert）を雇いました。"
        }
    },
    {
        id: 2,
        target: "guideline",
        category: "简单",
        stem: "All employees must carefully read the safety ________ before operating the factory machinery.",
        options: ["guidelines", "guideline", "incentive", "infrastructure"],
        correct: "guidelines",
        explanations: {
            guide: "安全规范复数名词。read the safety ________ 属于生产管理固定短语，表达阅读安全“指南/准则”，用复数 guidelines。",
            family: "guidelines (n.复数准则) | guideline (n.单数) | incentive (n.激励) | infrastructure (n.基础设施)。",
            details: "safety guidelines 意为安全指南/准则。在泛指一套管理规则时固定选用复数形式 guidelines。",
            cn: "所有员工在操作工厂机械之前都必须仔细阅读安全指南。",
            jp: "すべての従業員は工場の機械を操作する前に、安全指針（guidelines）を熟読しなければなりません。"
        }
    },
    {
        id: 3,
        target: "draft",
        category: "简单",
        stem: "The legal assistant prepared a rough ________ of the agreement for the manager to review.",
        options: ["draft", "drafted", "freelance", "gourmet"],
        correct: "draft",
        explanations: {
            guide: "文档名词考点。a rough ________ 属于商务文书高频短语，表达协议的“草案/初稿”，选 draft。",
            family: "draft (n.草案/初稿) | drafted (v-ed) | freelance (adj.自由职业的) | gourmet (adj.美食的)。",
            details: "rough draft 意为初稿/草案。drafted 是过去式或分词，不能在形容词 rough 后面作名词中心语。",
            cn: "法务助理准备了一份协议初稿供经理审查。",
            jp: "法務アシスタントはマネージャーが確認できるように協定の初稿（draft）を作成しました。"
        }
    },
    {
        id: 4,
        target: "follow up",
        category: "简单",
        stem: "The sales representative called the client to ________ on the status of the recently sent quotation.",
        options: ["follow up", "follow-up", "debut", "incentive"],
        correct: "follow up",
        explanations: {
            guide: "动词不定式考点。called the client to 后面接动词短语原形（不带连字符），表达“跟进”报价单状态，选 follow up。",
            family: "follow up (v.跟进) | follow-up (n./adj.后续/跟进的) | debut (n.首演) | incentive (n.激励)。",
            details: "to follow up on... 意为跟进某事。作动词短语时中间不加连字符；带连字符的 follow-up 是名词或形容词。",
            cn: "销售代表给客户打电话，以跟进最近发送的报价单状态。",
            jp: "営業担当者は最近送信した見積書の状況を追跡（follow up）するためにクライアントに電話しました。"
        }
    },
    {
        id: 5,
        target: "incentive",
        category: "简单",
        stem: "The firm offered a generous cash ________ to staff members who surpassed their annual targets.",
        options: ["incentive", "incentivize", "infrastructure", "inn"],
        correct: "incentive",
        explanations: {
            guide: "销售福利名词。a generous cash ________ 表达向超额完成目标员工提供的现金“奖励/激励”，选 incentive。",
            family: "incentive (n.激励/奖金) | incentivize (v.激励) | infrastructure (n.基础设施) | inn (n.客栈)。",
            details: "cash incentive 意为现金奖励/激励。incentivize 是动词（激励），不能被冠词 a 和形容词 generous 修饰。",
            cn: "公司向超越年度目标的员工提供了丰厚的现金奖励。",
            jp: "同社は年間目標を超越したスタッフに手厚い現金インセンティブ（incentive）を提供しました。"
        }
    },
    {
        id: 6,
        target: "inn",
        category: "简单",
        stem: "Tourists decided to spend the night at a charming historic ________ near the lake.",
        options: ["inn", "innkeeper", "debut", "draft"],
        correct: "inn",
        explanations: {
            guide: "住宿场所名词考点。spend the night at a charming historic ________ 表达在住宿场所“小旅馆/客栈”过夜，选 inn。",
            family: "inn (n.小旅馆/客栈) | innkeeper (n.客栈老板) | debut (n.首演) | draft (n.草案)。",
            details: "historic inn 意为历史悠久的客栈。innkeeper 指经营客栈的老板，非住宿设施实体。",
            cn: "游客们决定在湖边一家富有魅力且历史悠久的客栈过夜。",
            jp: "観光客は湖の近くにある魅力的で歴史的なイン（inn）で夜を過ごすことに決めました。"
        }
    },
    {
        id: 7,
        target: "debut",
        category: "中等",
        stem: "The technology corporation will make its global ________ with an innovative folding smartphone next month.",
        options: ["debut", "debuted", "infrastructure", "freelance"],
        correct: "debut",
        explanations: {
            guide: "产品发布高频短语。make its global ________ 属于商务高频搭配，意为完成其全球“首次亮相/首发”，选 debut。",
            family: "debut (n.首次亮相/首发) | debuted (v-ed) | infrastructure (n.基础设施) | freelance (adj.自由职业的)。",
            details: "make a debut 意为首次亮相。debuted 是动词过去式，不能跟在物主代词与形容词后面做宾语。",
            cn: "这家科技公司下个月将携一款创新的折叠屏智能手机完成其全球首次亮相。",
            jp: "その技術企業は来月、革新的な折りたたみスマートフォンで世界的な初登場（debut）を果たします。"
        }
    },
    {
        id: 8,
        target: "freelance",
        category: "中等",
        stem: "After leaving the design agency, Mr. Ross chose to work as a ________ graphic consultant.",
        options: ["freelance", "freelancer", "gourmet", "expert"],
        correct: "freelance",
        explanations: {
            guide: "前置形容词定语。作定语修饰 graphic consultant，表达作为“自由职业的”平面设计顾问工作，选 freelance。",
            family: "freelance (adj.自由职业的) | freelancer (n.自由职业者) | gourmet (adj.美食的) | expert (n.专家)。",
            details: "freelance graphic consultant 意为自由职业平面顾问。freelancer 是名词，作前置定语修饰 consultant 造成名词冗余。",
            cn: "离开设计公司后，罗斯先生选择作为一名自由职业平面设计顾问工作。",
            jp: "デザイン会社を退职した後、ロス氏はフリーランスの（freelance）グラフィックコンサルタントとして働くことを選びました。"
        }
    },
    {
        id: 9,
        target: "infrastructure",
        category: "中等",
        stem: "The municipal government approved additional funding to upgrade the city's aging public ________.",
        options: ["infrastructure", "infrastructural", "guidelines", "incentives"],
        correct: "infrastructure",
        explanations: {
            guide: "城市规划名词。public ________ 指城市的公共“基础设施”，选 infrastructure。",
            family: "infrastructure (n.基础设施) | infrastructural (adj.基础设施的) | guidelines (n.准则) | incentives (n.激励)。",
            details: "public infrastructure 意为公共基础设施。infrastructural 是形容词，不能在形容词 aging 后面充当宾语中心语。",
            cn: "市政府批准了额资金，用于升级城市日益老化的公共基础设施。",
            jp: "市当局は、老朽化する都市の公共インフラ（infrastructure）を改修するための追加資金を承認しました。"
        }
    },
    {
        id: 10,
        target: "gourmet",
        category: "中等",
        stem: "The luxury cruise ship features a ________ restaurant managed by a Michelin-starred chef.",
        options: ["gourmet", "freelance", "draft", "inn"],
        correct: "gourmet",
        explanations: {
            guide: "高级餐饮修饰语。a ________ restaurant 结合米其林主厨管理，表达“高档美食餐厅”，选 gourmet。",
            family: "gourmet (adj./n.美食的/美食家) | freelance (adj.自由职业的) | draft (n.草稿) | inn (n.客栈)。",
            details: "gourmet restaurant 意为高档美食餐厅。freelance（自由职业的）、draft（草稿）与餐饮毫无关联。",
            cn: "这家豪华邮轮配有一间由米其林星级主厨主理的高档美食餐厅。",
            jp: "その豪華客船には、ミシュランの星を獲得したシェフが手掛ける高級（gourmet）レストランが備わっています。"
        }
    },
    {
        id: 11,
        target: "follow up",
        category: "中等",
        stem: "All customer service representatives were instructed to schedule a ________ session within forty-eight hours.",
        options: ["follow-up", "follow up", "guideline", "draft"],
        correct: "follow-up",
        explanations: {
            guide: "复合形容词作定语。修饰 session（回访会议/环节），带连字符的 follow-up 充当形容词，表达“后续跟进的”，选 follow-up。",
            family: "follow-up (adj./n.后续跟进的/跟进) | follow up (v.动词短语) | guideline (n.指南) | draft (n.草图)。",
            details: "a follow-up session 意为后续跟进环节。修饰名词作前置定语时必须选用带连字符的形容词形式 follow-up。",
            cn: "所有客户服务代表都接到指示，要在四十八小时内安排一次后续跟进环节。",
            jp: "すべてのカスタマーサービス担当者は、48時間以内にフォローアップ（follow-up）セッションをスケジュールするよう指示されました。"
        }
    },
    {
        id: 12,
        target: "expert",
        category: "中等",
        stem: "Ms. Tanaka demonstrated her technical ________ during the complex network installation project.",
        options: ["expertise", "expert", "expertly", "incentive"],
        correct: "expertise",
        explanations: {
            guide: "派生抽象名词宾语考点。demonstrated her technical ________ 结构中，物主代词与形容词后面接名词形式 expertise（专业技能/专长）。",
            family: "expertise (n.专业技能/专长) | expert (n.专家) | expertly (adv.专业地) | incentive (n.激励)。",
            details: "demonstrate technical expertise 意为展现技术专业技能。expert 是指“专家”个人，展示的内容应为抽象技能 expertise。",
            cn: "田中女士在复杂的网络安装项目期间展现了她的技术专业技能。",
            jp: "田中氏は、複雑なネットワーク設置プロジェクトにおいて技術的専門技能（expertise）を発揮しました。"
        }
    },
    {
        id: 13,
        target: "incentive",
        category: "困难",
        stem: "The corporate board introduced structured performance schemes to ________ sales representatives to exceed targets.",
        options: ["incentivize", "incentive", "infrastructure", "drafting"],
        correct: "incentivize",
        explanations: {
            guide: "动词不定式考点。schemes to 后面接动词原形，表达“激励/刺激”销售代表超越目标，选 incentivize。",
            family: "incentivize (v.激励) | incentive (n.激励/奖金) | infrastructure (n.基础设施) | drafting (v-ing起草)。",
            details: "to incentivize employees 意为激励员工。incentive 是名词，不能跟在不定式符号 to 后面作谓语动词。",
            cn: "公司董事会推出了结构化的绩效方案，以激励销售代表超越目标。",
            jp: "取締役会は、営業担当者が目標を達成するように動機付ける（incentivize）ための構造化された業績制度を導入しました。"
        }
    },
    {
        id: 14,
        target: "debut",
        category: "困难",
        stem: "The celebrated fashion label successfully ________ its eco-friendly spring line during Paris Fashion Week.",
        options: ["debuted", "debut", "freelanced", "incentivized"],
        correct: "debuted",
        explanations: {
            guide: "及物动词过去式。句中缺少谓语动词，表达品牌成功“首发/首次推出了”其春季系列，选 debuted。",
            family: "debuted (v-ed首发/首次推出) | debut (v./n.原形) | freelanced (v-ed自由职业) | incentivized (v-ed激励)。",
            details: "debuted its spring line 意为首发了春季系列。debut 作及物动词时意为“首次推出（新产品/系列）”，此处使用过去式 debuted。",
            cn: "该著名时尚品牌在巴黎时装周期间成功首发了其环保春季系列。",
            jp: "その有名ファッションブランドは、パリファッションウィークで環境に優しい春のラインを成功裏に初公開しました（debuted）。"
        }
    },
    {
        id: 15,
        target: "infrastructure",
        category: "困难",
        stem: "A comprehensive upgrade of the regional power grid is essential for long-term ________ growth.",
        options: ["infrastructural", "infrastructure", "gourmet", "guideline"],
        correct: "infrastructural",
        explanations: {
            guide: "派生形容词修饰名词。修饰 growth（增长），表达“基础设施方面的/下层结构的”增长与发展，选形容词 infrastructural。",
            family: "infrastructural (adj.基础设施的) | infrastructure (n.基础设施) | gourmet (adj.美食的) | guideline (n.准则)。",
            details: "infrastructural growth 意为基础设施方面的增长。infrastructure 是名词，此处修饰 growth 时选用专有形容词 infrastructural 更为地道规范。",
            cn: "电网的全面升级对于区域基础设施的长期增长至关重要。",
            jp: "地域の電力網の包括的なアップグレードは、長期的なインフラ上の（infrastructural）成長に不可欠です。"
        }
    },
    {
        id: 16,
        target: "draft",
        category: "困难",
        stem: "The senior architect spent several days ________ the revised structural blueprints for the office tower.",
        options: ["drafting", "draft", "following up", "incentivizing"],
        correct: "drafting",
        explanations: {
            guide: "固定句型与现在分词。spent time ________ (V-ing) 结构中，表达花费时间在“起草/绘制”蓝图上，选 drafting。",
            family: "drafting (v-ing起草/绘制) | draft (v./n.起草/草案) | following up (v-ing跟进) | incentivizing (v-ing激励)。",
            details: "spend time drafting blueprints 属于固定动名词搭配。draft 为动词原形，不能直接接在 spent several days 后面。",
            cn: "高级建筑师花了几天时间起草办公大楼修改后的结构蓝图。",
            jp: "主任建築家は、オフィスビルの修正された構造青写真を起草する（drafting）のに数日を費やしました。"
        }
    },
    {
        id: 17,
        target: "expert",
        category: "困难",
        stem: "The comprehensive financial audit was ________ performed by a team of senior accountants.",
        options: ["expertly", "expert", "expertise", "freelance"],
        correct: "expertly",
        explanations: {
            guide: "副词修饰被动语态动词。was ________ performed 结构中，用副词修饰过去分词 performed，表达“专业地/熟练地”执行，选 expertly。",
            family: "expertly (adv.专业地/熟练地) | expert (n./adj.专家) | expertise (n.专业知识) | freelance (adj.自由职业的)。",
            details: "was expertly performed 意为被专业熟练地执行。expert 是形容词/名词，不能在句中修饰动词 performed。",
            cn: "这项全面的财务审计是由一组资深会计师专业地完成的。",
            jp: "包括的な財務監査は、上級会計士のチームによって専門的に（expertly）実施されました。"
        }
    },
    {
        id: 18,
        target: "freelance",
        category: "困难",
        stem: "To meet tight publishing deadlines, the editorial board contracted several experienced ________ to complete the translations.",
        options: ["freelancers", "freelance", "experts", "innkeepers"],
        correct: "freelancers",
        explanations: {
            guide: "派生人员名词复数考点。contracted several experienced ________ 结构中，several 后面接可数名词复数，指“自由职业者/特约人员”，选 freelancers。",
            family: "freelancers (n.自由职业者复数) | freelance (adj.自由职业的) | experts (n.专家) | innkeepers (n.客栈老板)。",
            details: "contracted several freelancers 指签约了几位自由职业者。freelance 是形容词，不能直接作及物动词 contracted 的宾语。",
            cn: "为赶上紧迫的出版截止日期，编辑板签约了几位经验丰富的自由职业者来完成翻译。",
            jp: "厳しい出版の締め切りに間に合わせるため、編集委員会は翻訳を完了させるために数人の経験豊富なフリーランサー（freelancers）と契約しました。"
        }
    }
];