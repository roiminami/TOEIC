// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data151-160.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "mission",
        pos: "名",
        ipa: "/ˈmɪʃn/",
        cn: "使命，任务；企业宗旨",
        jp: "使命、任務、企業理念",
        family: "missionary / mission-critical / mission statement",
        tips: "企业文化与战略高频词！常考搭配：mission statement（企业宗旨/使命宣言）、company mission（公司宗旨）、complete a mission（完成任务）。",
        desc: "The company updated its official mission statement."
    },
    {
        word: "tailor",
        pos: "動/名",
        ipa: "/ˈteɪlər/",
        cn: "定制，调整，使适应；裁缝",
        jp: "（ニーズに）合わせる、調整する；仕立屋",
        family: "tailored / tailoring / tailor-made",
        tips: "服务与方案定制高频动词，等同于 customize。常考：tailor a service to client needs（根据客户需求量身定制服务）或 tailor-made solutions（定制化解决方案）。",
        desc: "We can tailor our services to your specific needs."
    },
    {
        word: "nutrition",
        pos: "名",
        ipa: "/nuːˈtrɪʃn/",
        cn: "营养，营养学",
        jp: "栄養、栄養学",
        family: "nutritious / nutritional / nutritionist",
        tips: "食品、餐饮与健康产业高频词。常考：nutritional value（营养价值）、clinical nutrition（临床营养学）、nutrition facts（营养成分表）。",
        desc: "Fresh vegetables provide essential daily nutrition."
    },
    {
        word: "outdated",
        pos: "形",
        ipa: "/ˌaʊtˈdeɪtɪd/",
        cn: "过时的，陈旧的",
        jp: "時代遅れの、古くなった",
        family: "outdate / date / update",
        tips: "系统升级与设备更换考点！常考搭配：outdated software/equipment（过时的软件/设备）、outdated policies（陈旧的政策）。",
        desc: "The office replaced all outdated computer equipment."
    },
    {
        word: "reject",
        pos: "動/名",
        ipa: "/rɪˈdʒekt/",
        cn: "拒绝，驳回；次品",
        jp: "拒否する、不合格にする；不合格品",
        family: "rejection / rejected / rejecting",
        tips: "商务提案与质检高频词。1. 方案：reject a proposal/application（驳回提案/申请）；2. 质检：reject defective goods（拒收/剔除有缺陷的商品）。",
        desc: "The board voted to reject the initial proposal."
    },
    {
        word: "component",
        pos: "名/形",
        ipa: "/kəmˈpoʊnənt/",
        cn: "零部件，组成部分；组成的",
        jp: "部品、構成要素；構成する",
        family: "componentry / elemental",
        tips: "制造业与工程技术核心词。常考：key component（关键零部件）、electronic components（电子元件）、essential component（核心要素）。",
        desc: "Engineers inspected every component of the machine."
    },
    {
        word: "urban",
        pos: "形",
        ipa: "/ˈɜːrbən/",
        cn: "城市的，都市的",
        jp: "都市の、市街地の",
        family: "urbanization / urbanize / suburban",
        tips: "城市规划与地产开发高频词。常考搭配：urban development（城市发展）、urban planning（城市规划）、urban area（都市区域）。反义词：rural。",
        desc: "The city council approved a new urban planning project."
    },
    {
        word: "adjustment",
        pos: "名",
        ipa: "/əˈdʒʌstmənt/",
        cn: "调整，微调；适应",
        jp: "調整、微調整、適応",
        family: "adjust / adjustable / adjuster",
        tips: "财务核算与设备调试高频词！常考搭配：make minor adjustments（做出微调）、price adjustment（价格调整）、budget adjustment（预算调整）。",
        desc: "The technician made a quick adjustment to the settings."
    },
    {
        word: "promptly",
        pos: "副",
        ipa: "/ˈprɑːmptli/",
        cn: "迅速地，及时地；准时地",
        jp: "迅速に、即座に、きっちり（時間通り）",
        family: "prompt / promptness",
        tips: "商务信函与客服极高频副词！1. 及时回复：respond promptly to inquiries（及时回复询问）；2. 准时：start promptly at 9:00 AM（上午 9 点准时开始）。",
        desc: "Please reply promptly to confirm your attendance."
    },
    {
        word: "accomplishment",
        pos: "名",
        ipa: "/əˈkɑːmplɪʃmənt/",
        cn: "成就，业绩；完成",
        jp: "成就、業績、達成",
        family: "accomplish / accomplished / accomplishing",
        tips: "业绩汇报与员工表彰高频词！常考：outstanding accomplishment（杰出的成就）、sense of accomplishment（成就感）、major accomplishment（重大成果）。",
        desc: "Winning the award was a remarkable accomplishment."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "promptly",
        category: "简单",
        stem: "The customer service representative responded ________ to the client's email regarding the billing issue.",
        options: ["promptly", "prompt", "nutrition", "urban"],
        correct: "promptly",
        explanations: {
            guide: "副词修饰谓语动词。responded 后面需要副词修饰动词，表达“迅速地/及时地”回复邮件，选 promptly。",
            family: "promptly (adv.迅速地) | prompt (adj./v.迅速的/提示) | nutrition (n.营养) | urban (adj.城市的)。",
            details: "responded promptly 是商务邮件与客服沟通场景最高频的固定动副搭配。prompt 是形容词，不能修饰过去式动词 responded。",
            cn: "客户服务代表迅速回复了客户关于账单问题的电子邮件。",
            jp: "顧客サービス担当者は、請求問題に関する顧客の電子メールに迅速に（promptly）返信しました。"
        }
    },
    {
        id: 2,
        target: "reject",
        category: "简单",
        stem: "The quality control manager decided to ________ the entire shipment after discovering several damaged boxes.",
        options: ["reject", "rejection", "component", "accomplishment"],
        correct: "reject",
        explanations: {
            guide: "动词不定式结构。decided to 后面需要接动词原形，表达决定去“拒收/退回”该批货，选 reject。",
            family: "reject (v.拒收/拒绝) | rejection (n.拒绝) | component (n.零部件) | accomplishment (n.成就)。",
            details: "decide to do sth 结构中需要接动词原形 reject。rejection 是名词，不能跟在不定式符号 to 之后作谓语动词。",
            cn: "质量控制经理在发现几个损坏的箱子后，决定拒收整批货物。",
            jp: "品質管理マネージャーは、いくつかの破損した箱を発見した後、出荷全体を拒否（reject）することを決定しました。"
        }
    },
    {
        id: 3,
        target: "tailor",
        category: "简单",
        stem: "Our marketing agency can ________ promotional packages to meet the specific budgetary requirements of small businesses.",
        options: ["tailor", "tailored", "outdated", "mission"],
        correct: "tailor",
        explanations: {
            guide: "情态动词后的动词原形。can 后面需要接动词原形，表达可以为客户“量身定制”宣传方案，选 tailor。",
            family: "tailor (v.定制) | tailored (adj.定制的) | outdated (adj.过时的) | mission (n.使命)。",
            details: "can tailor 构成谓语动词结构。tailored 是过去分词，不能跟在情态动词 can 之后充当谓语原形。",
            cn: "我们的营销机构可以量身定制宣传方案，以满足小型企业的具体预算要求。",
            jp: "当社のマーケティング代理店は、中小企業の特定の予算要件を満たすためにプロモーションパッケージを調整（tailor）できます。"
        }
    },
    {
        id: 4,
        target: "outdated",
        category: "简单",
        stem: "The IT department will replace all ________ computer software to ensure corporate data remains secure.",
        options: ["outdated", "outdate", "promptly", "adjustment"],
        correct: "outdated",
        explanations: {
            guide: "形容词作前置定语修饰名词。________ computer software 表达“过时的”电脑软件，选 outdated。",
            family: "outdated (adj.过时的) | outdate (v.使过时) | promptly (adv.迅速地) | adjustment (n.调整)。",
            details: "outdated software/equipment 是系统升级场景的标准搭配。outdate 为动词，不能直接作为名词前置定语。",
            cn: "IT 部门将更换所有过时的计算机软件，以确保公司数据保持安全。",
            jp: "IT部門は、企業データの安全性を確保するために、すべての時代遅れの（outdated）コンピュータソフトウェアを交換します。"
        }
    },
    {
        id: 5,
        target: "mission",
        category: "简单",
        stem: "The chief executive officer published an updated company ________ statement on the corporate website.",
        options: ["mission", "missionary", "nutrition", "reject"],
        correct: "mission",
        explanations: {
            guide: "名词作前置定语与固定短语。company ________ statement 属于企业文化最高频词组 mission statement（企业宗旨/使命宣言）。",
            family: "mission (n.使命/宗旨) | missionary (n.传教士) | nutrition (n.营养) | reject (v.拒绝)。",
            details: "company mission statement 是商务阅读专有名词，意为公司使命宣言。missionary 意为传教士，与企业战略无关。",
            cn: "首席执行官在公司网站上发布了更新后的公司使命宣言。",
            jp: "最高経営責任者（CEO）は、企業のウェブサイトに更新された会社理念（mission）声明を掲載しました。"
        }
    },
    {
        id: 6,
        target: "accomplishment",
        category: "简单",
        stem: "Completing the high-budget engineering project ahead of schedule was a remarkable ________ for the team.",
        options: ["accomplishment", "accomplish", "urban", "outdated"],
        correct: "accomplishment",
        explanations: {
            guide: "不定冠词与形容词后的名词。a remarkable ________ 结构中需要单数名词，表达一项显著的“成就/业绩”，选 accomplishment。",
            family: "accomplishment (n.成就) | accomplish (v.完成) | urban (adj.城市的) | outdated (adj.过时的)。",
            details: "a remarkable accomplishment 是员工表彰与绩效总结的核心表述。accomplish 是动词，不能在冠词 a 和形容词之后作表语中心词。",
            cn: "提前完成高预算的工程项目对团队来说是一项显著的成就。",
            jp: "予算規模の大きいエンジニアリングプロジェクトを予定より早く完了させたことは、チームにとって目覚ましい業績（accomplishment）でした。"
        }
    },
    {
        id: 7,
        target: "component",
        category: "中等",
        stem: "Technicians inspected every critical electronic ________ before assembling the final automated system.",
        options: ["component", "componentry", "promptly", "tailor"],
        correct: "component",
        explanations: {
            guide: "限定词与形容词修饰的可数名词。every critical electronic ________ 中，every 后面接单数可数名词 component（零部件）。",
            family: "component (n.零部件/单数) | componentry (n.组件总称) | promptly (adv.迅速地) | tailor (v.定制)。",
            details: "electronic component（电子零部件）是工业制造场景的高频词组。every 要求后面接单数可数名词 component。",
            cn: "技术人员在组装最终自动化系统前，检查了每一个关键的电子零部件。",
            jp: "技術者は、最終的な自動化システムを組み立てる前に、すべての重要な電子部品（component）を点検しました。"
        }
    },
    {
        id: 8,
        target: "adjustment",
        category: "中等",
        stem: "The financial department made a minor budget ________ to accommodate increased travel expenses.",
        options: ["adjustment", "adjust", "nutrition", "reject"],
        correct: "adjustment",
        explanations: {
            guide: "形容词后的名词宾语。made a minor budget ________ 结构中需要名词，make a budget adjustment 意为“做出预算调整”。",
            family: "adjustment (n.调整) | adjust (v.调整) | nutrition (n.营养) | reject (v.拒绝)。",
            details: "make an adjustment 是托业极高频的动名词搭配，意为“进行调整”。adjust 是动词，不能在形容词 minor 后面充当宾语中心词。",
            cn: "财务部门做出了微小的预算调整，以适应增加的差旅费用。",
            jp: "経理部門は、増加した出張費に対応するために軽微な予算調整（adjustment）を行いました。"
        }
    },
    {
        id: 9,
        target: "urban",
        category: "中等",
        stem: "The city council recently voted to invest ten million dollars in local ________ renewal projects.",
        options: ["urban", "urbanization", "accomplishment", "promptly"],
        correct: "urban",
        explanations: {
            guide: "形容词作前置定语修饰名词。________ renewal projects 表达“城市”更新项目，选用形容词 urban。",
            family: "urban (adj.城市的) | urbanization (n.城市化) | accomplishment (n.成就) | promptly (adv.迅速地)。",
            details: "urban renewal / urban development（城市更新/城市发展）是公共行政与地产规划的标准专属词组。urbanization 为名词，不能作形容词修饰 renewal。",
            cn: "市议会最近投票决定投资一千多万美元用于当地的城市更新项目。",
            jp: "市議会は最近、地域の都市（urban）再開発プロジェクトに1,000万ドルを投資することを可決しました。"
        }
    },
    {
        id: 10,
        target: "nutrition",
        category: "中等",
        stem: "Health experts emphasize the importance of daily ________ to improve employee wellness in corporate offices.",
        options: ["nutrition", "nutritious", "tailor", "outdated"],
        correct: "nutrition",
        explanations: {
            guide: "介词后的名词中心语。importance of daily ________ 结构中，介词 of 后面需要接名词，选 nutrition（营养）。",
            family: "nutrition (n.营养) | nutritious (adj.营养丰富的) | tailor (v.定制) | outdated (adj.过时的)。",
            details: "daily nutrition 意为每日营养。nutritious 是形容词，不能直接放在形容词 daily 之后充当介词 of 的宾语。",
            cn: "健康专家强调每日营养对提高企业办公室员工健康水平的重要性。",
            jp: "健康の専門家は、企業のオフィスにおける従業員の健康状態を向上させるための日常的な栄養（nutrition）の重要性を強調しています。"
        }
    },
    {
        id: 11,
        target: "tailor",
        category: "中等",
        stem: "The consultant recommends providing ________ financial plans that cater specifically to high-net-worth investors.",
        options: ["tailored", "tailor", "reject", "mission"],
        correct: "tailored",
        explanations: {
            guide: "分词形容词作前置定语。providing ________ financial plans 中，需要分词形容词 tailored（定制的）修饰复数名词 plans。",
            family: "tailored (adj.定制的) | tailor (v.原形) | reject (v.拒绝) | mission (n.使命)。",
            details: "tailored financial plans（量身定制的财务计划）属于高级金融咨询服务场景的表达。tailor 是动词原形，不能直接充当修饰 plans 的前置定语。",
            cn: "顾问建议提供专门面向高净值投资者的定制化财务计划。",
            jp: "コンサルタントは、富裕層投資家に特化した調整された（tailored）財務計画を提供することを推奨しています。"
        }
    },
    {
        id: 12,
        target: "promptly",
        category: "中等",
        stem: "To avoid late registration fees, all application materials must be submitted ________ before the noon deadline.",
        options: ["promptly", "prompt", "urban", "component"],
        correct: "promptly",
        explanations: {
            guide: "副词修饰被动语态。must be submitted ________ 结构中，需要副词修饰动词短语 be submitted，表达“及时地/准时地”提交，选 promptly。",
            family: "promptly (adv.及时地) | prompt (adj.迅速地) | urban (adj.城市的) | component (n.零部件)。",
            details: "be submitted promptly 属于告示与申请提示场景中的高频及物动词短语。prompt 是形容词，不能在此修饰动词分词 submitted。",
            cn: "为避免延迟注册费，所有申请材料必须在正午截止时间前及时提交。",
            jp: "遅延登録料を回避するため、すべての応募書類は正午の締め切り前に迅速に（promptly）提出されなければなりません。"
        }
    },
    {
        id: 13,
        target: "adjustment",
        category: "困难",
        stem: "Engineers are making delicate ________ to the machine sensors to guarantee high accuracy in manufacturing.",
        options: ["adjustments", "adjustment", "nutrition", "accomplishment"],
        correct: "adjustments",
        explanations: {
            guide: "复数名词与固定句型。making delicate ________ 中，make adjustments 是固定动词短语（做出调整），根据复数修饰需要选用 adjustments。",
            family: "adjustments (n.调整/复数) | adjustment (n.单数) | nutrition (n.营养) | accomplishment (n.成就)。",
            details: "make adjustments to... 属于工业工程与设备调校的高级固定动词短语。delicate 是形容词，修饰复数名词 adjustments。",
            cn: "工程师们正在对机器传感器进行精密的微调，以确保制造过程中的高精度。",
            jp: "エンジニアは製造の高精度を保証するために、マシンセンサーに繊細な調整（adjustments）を行っています。"
        }
    },
    {
        id: 14,
        target: "reject",
        category: "困难",
        stem: "The committee issued a formal ________ of the proposal, citing significant budget deficits and environmental concerns.",
        options: ["rejection", "reject", "tailor", "outdated"],
        correct: "rejection",
        explanations: {
            guide: "冠词与形容词后的名词宾语。a formal ________ of... 结构中，形容词 formal 后面需要接名词形式 rejection（驳回/拒绝）。",
            family: "rejection (n.驳回) | reject (v.拒绝) | tailor (v.定制) | outdated (adj.过时的)。",
            details: "a formal rejection of the proposal 意为“对提案的正式驳回”。reject 是动词原形，不能接在形容词 formal 之后作动词 issued 的宾语。",
            cn: "委员会正式驳回了该提案，理由是存在重大的预算赤字和环境顾虑。",
            jp: "委員会は、大幅な予算赤字と環境上の懸念を理由に、提案の正式な拒否（rejection）を発行しました。"
        }
    },
    {
        id: 15,
        target: "accomplishment",
        category: "困难",
        stem: "The board of directors formally commended the research group for their exceptional ________ in biomedical technology.",
        options: ["accomplishments", "accomplishment", "urban", "promptly"],
        correct: "accomplishments",
        explanations: {
            guide: "形容词修饰的复数名词。their exceptional ________ 结构中，表达研究小组在生物医学技术领域的“卓越成就（复数概念）”，选 accomplishments。",
            family: "accomplishments (n.成就/复数) | accomplishment (n.单数) | urban (adj.城市的) | promptly (adv.迅速地)。",
            details: "exceptional accomplishments（卓越成就）属于董事会嘉奖表彰的高阶表达。在描述团队多项科研突破成果时习惯用复数形式 accomplishments。",
            cn: "董事会正式嘉奖了研究小组在生物医学技术领域取得的卓越成就。",
            jp: "取締役会は、生物医学技術における優れた業績（accomplishments）に対して研究グループを正式に表彰しました。"
        }
    },
    {
        id: 16,
        target: "component",
        category: "困难",
        stem: "Developing a robust cybersecurity protocol is considered an essential ________ of modern corporate risk management.",
        options: ["component", "componentry", "nutrition", "adjustment"],
        correct: "component",
        explanations: {
            guide: "形容词后的抽象名词表语。an essential ________ of... 结构中，an essential 后面需要接可数名词单数 component（组成部分/核心要素）。",
            family: "component (n.组成部分/要素) | componentry (n.组件总称) | nutrition (n.营养) | adjustment (n.调整)。",
            details: "an essential component of...（……不可或缺的组成部分）是托业 Part 5/7 极高频的抽象比喻搭配。componentry 指物理组件总称，不用于抽象管理要素概念。",
            cn: "制定完善的网络安全协议被认为是现代企业风险管理中不可或缺的核心要素。",
            jp: "堅牢なサイバーセキュリティプロトコルの構築は、現代の企業リスク管理の不可欠な構成要素（component）と考えられています。"
        }
    },
    {
        id: 17,
        target: "mission",
        category: "困难",
        stem: "Aligning daily operations with long-term strategic goals is ________-critical for ensuring sustained commercial growth.",
        options: ["mission", "missionary", "tailor", "reject"],
        correct: "mission",
        explanations: {
            guide: "复合形容词与高阶专有名词。________-critical 是固定复合形容词 mission-critical，意为“至关重要的/影响全局成败的”，选 mission。",
            family: "mission (n.使命/任务) | missionary (n.传教士) | tailor (v.定制) | reject (v.拒绝)。",
            details: "mission-critical（对任务成败至关重要的）是商务与科技领域的高阶复合词，专门修饰影响企业成败的核心流程。",
            cn: "将日常运营与长期战略目标保持一致，对于确保持续的商业增长至关重要。",
            jp: "日常の業務を長期的な戦略目標に合わせることは、持続的な商業的成長を確保するために任務不可欠（mission-critical）です。"
        }
    },
    {
        id: 18,
        target: "urban",
        category: "困难",
        stem: "Demographic trends indicate that rapid ________ in developing regions is creating unprecedented demand for public infrastructure.",
        options: ["urbanization", "urban", "promptly", "outdated"],
        correct: "urbanization",
        explanations: {
            guide: "形容词修饰的名词主语。rapid ________ in... 位于句首充当主语，形容词 rapid 后面必须接名词形式 urbanization（城市化）。",
            family: "urbanization (n.城市化) | urban (adj.城市的) | promptly (adv.迅速地) | outdated (adj.过时的)。",
            details: "rapid urbanization（快速城市化）是经济与人口发展统计的核心名词搭配。urban 是形容词，不能直接作主语中心词。",
            cn: "人口趋势表明，发展中国家地区的快速城市化正在对公共基础设施产生前所未有的需求。",
            jp: "人口動態の傾向は、発展途上地域における急速な都市化（urbanization）が公共インフラに対する未曾有の需要を生み出していることを示しています。"
        }
    }
];