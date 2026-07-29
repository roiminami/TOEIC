// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data111-120.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "exceptional",
        pos: "形",
        ipa: "/ɪkˈsepʃənl/",
        cn: "卓越的，杰出的；异常的",
        jp: "例外的な、非常に優れた",
        family: "exception / exceptionally / except",
        tips: "阅读与员工表彰极高频形容词！常考搭配：exceptional service（卓越的服务）、exceptional performance（杰出的表现）。副词 exceptionally 在 Part 5 常作程度状语。",
        desc: "She was recognized for her exceptional leadership."
    },
    {
        word: "long-term",
        pos: "形",
        ipa: "/ˌlɔːŋ ˈtɜːrm/",
        cn: "长期的，长远的",
        jp: "長期的な、長年にわたる",
        family: "short-term / term / terminology",
        tips: "商业规划核心复合形容词。常考：long-term goal / plan（长期目标/计划）、long-term growth（长期增长）、long-term agreement（长期合同）。",
        desc: "They developed a long-term business strategy."
    },
    {
        word: "challenging",
        pos: "形",
        ipa: "/ˈtʃælɪndʒɪŋ/",
        cn: "富有挑战性的，艰巨的",
        jp: "やりがいのある、困難な",
        family: "challenge / challenged / challenger",
        tips: "形容工作或市场环境的高频词。常考：a challenging project（一项富有挑战性的项目）、a challenging economic climate（严峻的经济环境）。",
        desc: "The team successfully completed a challenging task."
    },
    {
        word: "county",
        pos: "名",
        ipa: "/ˈkaʊnti/",
        cn: "县，郡（行政区划）",
        jp: "郡、県（行政区画）",
        family: "county office / county official",
        tips: "地方政府与公共管理考点。常考：county government（县政府）、county official（县政府官员）、county fair（地方博览会）。",
        desc: "The county official approved the building permit."
    },
    {
        word: "hesitate",
        pos: "動",
        ipa: "/ˈhezɪteɪt/",
        cn: "犹豫，迟疑",
        jp: "ためらう、躊躇する",
        family: "hesitation / hesitant / hesitantly",
        tips: "商务信函与客服极高频句型！Do not hesitate to do sth（请毫不犹豫地做某事，如 Do not hesitate to contact us 请随时与我们联系）。",
        desc: "Please do not hesitate to ask if you have questions."
    },
    {
        word: "routine",
        pos: "名/形",
        ipa: "/ruːˈtiːn/",
        cn: "例行公事，日常常规；常规的，例行的",
        jp: "日課、決まりきった仕事；日常の、定期的な",
        family: "routinely / routinize",
        tips: "设施维护与日常办公考点。常考：routine maintenance（例行检修）、routine inspection（常规检查）。副词 routinely 意为“按惯例地”。",
        desc: "The equipment will undergo routine maintenance today."
    },
    {
        word: "protective",
        pos: "形",
        ipa: "/prəˈtektɪv/",
        cn: "保护性的，防护的",
        jp: "保護する、防護用の",
        family: "protect / protection / protector / protectively",
        tips: "车间与安全规程核心词！常考搭配：protective gear / clothing（防护装备/防护服）、protective helmet（安全帽）、protective measure（保护措施）。",
        desc: "Workers must wear protective clothing in the factory."
    },
    {
        word: "input",
        pos: "名/動",
        ipa: "/ˈɪnpʊt/",
        cn: "输入，意见，建议；输入数据",
        jp: "入力、意見、提供；入力する",
        family: "inputs / inputting",
        tips: "团队研讨与数据处理高频词。1. 意见与建议：valuable input（宝贵意见）；2. 技术/数据：data input（数据输入）。",
        desc: "We would appreciate your input on the proposal."
    },
    {
        word: "expo",
        pos: "名",
        ipa: "/ˈekspoʊ/",
        cn: "博览会，展览会",
        jp: "博覧会、展示会",
        family: "exposition / expose / exposure",
        tips: "展会与行业交流场景词，等同于 exposition / trade fair。常考：trade expo（贸易博览会）、technology expo（科技博览会）。",
        desc: "Our representatives will attend the annual trade expo."
    },
    {
        word: "mechanical",
        pos: "形",
        ipa: "/məˈkænɪkl/",
        cn: "机械的，机械学的；机械般的",
        jp: "機械の、機械工学の",
        family: "mechanic / mechanism / mechanically / mechanics",
        tips: "工程技术与设备故障考点。常考：mechanical problem / failure（机械故障）、mechanical engineer（机械工程师）。区分名词 mechanic（技工）。",
        desc: "The machine stopped operating due to a mechanical issue."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "exceptional",
        category: "简单",
        stem: "The customer service supervisor was praised for providing ________ assistance to international visitors.",
        options: ["exceptional", "exception", "routine", "county"],
        correct: "exceptional",
        explanations: {
            guide: "形容词修饰名词。________ assistance 结构中需要形容词修饰不可数名词 assistance，表达“卓越的/杰出的”协助，选 exceptional。",
            family: "exceptional (adj.卓越的) | exception (n.例外) | routine (adj.常规的) | county (n.县)。",
            details: "exceptional assistance（卓越的协助）是服务行业赞扬的核心表述。exception 是名词，不能在此作前置定语。",
            cn: "客户服务主管因向国际访客提供卓越的协助而受到赞扬。",
            jp: "顧客サービススーパーバイザーは、国際的な訪問者に優れた（exceptional）支援を提供したことで称賛されました。"
        }
    },
    {
        id: 2,
        target: "hesitate",
        category: "简单",
        stem: "Please do not ________ to call our customer support helpline if you encounter any difficulties during installation.",
        options: ["hesitate", "hesitation", "routine", "county"],
        correct: "hesitate",
        explanations: {
            guide: "祈使句与固定句型。do not 后面需要接动词原形，Do not hesitate to do sth 是商务信函与客服提示的标准句型，选 hesitate。",
            family: "hesitate (v.犹豫) | hesitation (n.犹豫) | routine (n./adj.常规) | county (n.县)。",
            details: "do not 后面必须接动词原形 hesitate。hesitation 是名词，不能跟在助动词 do not 之后。",
            cn: "如果在安装过程中遇到任何困难，请随时拨打我们的客户支持热线。",
            jp: "インストール中に何か問題が発生した場合は、ご遠慮なく（do not hesitate）カスタマーサポートにお電話ください。"
        }
    },
    {
        id: 3,
        target: "routine",
        category: "简单",
        stem: "The facility manager scheduled ________ maintenance for all elevators this coming Saturday morning.",
        options: ["routine", "routinely", "input", "expo"],
        correct: "routine",
        explanations: {
            guide: "形容词作前置定语修饰名词。________ maintenance 属于设施管理的高频搭配，routine maintenance 意为“例行检修/日常维护”。",
            family: "routine (adj.例行的/n.常规) | routinely (adv.例行地) | input (n.输入/建议) | expo (n.博览会)。",
            details: "routine maintenance 是托业设施管理场景的核心固定表述。routinely 是副词，不能充当名词 maintenance 的前置定语。",
            cn: "设施经理将本周六上午安排为所有电梯的例行检修时间。",
            jp: "施設マネージャーは、今週末の土曜日の朝にすべてのエレベーターの定期（routine）保守を計画しました。"
        }
    },
    {
        id: 4,
        target: "protective",
        category: "简单",
        stem: "All factory operators must wear ________ gear, including goggles and hard hats, while inside the workshop.",
        options: ["protective", "protect", "long-term", "county"],
        correct: "protective",
        explanations: {
            guide: "形容词作前置定语。________ gear 构成安全规范词组 protective gear，意为“防护装备”，选 protective。",
            family: "protective (adj.防护的) | protect (v.保护) | long-term (adj.长期的) | county (n.县)。",
            details: "protective gear 是车间安全规定的标准用语。protect 是动词，不能直接放在名词 gear 前作修饰语。",
            cn: "所有工厂操作人员在车间内必须佩戴防护装备，包括护目镜和安全帽。",
            jp: "すべての工場オペレーターは、作業場内ではゴーグルや安全帽を含む保護（protective）具を着用しなければなりません。"
        }
    },
    {
        id: 5,
        target: "expo",
        category: "简单",
        stem: "Our marketing representatives will set up an interactive display booth at the upcoming international tech ________.",
        options: ["expo", "exceptional", "input", "hesitate"],
        correct: "expo",
        explanations: {
            guide: "展会场景名词选择。international tech ________ 指“国际科技博览会/展会”，选 expo。",
            family: "expo (n.博览会) | exceptional (adj.卓越的) | input (n.意见) | hesitate (v.犹豫)。",
            details: "tech expo（科技博览会）是托业市场营销与展会场景的专属名词。其他选项词性或语义均不符。",
            cn: "我们的营销代表将在即将来临的国际科技博览会上设置一个互动展示展位。",
            jp: "当社のマーケティング担当者は、近く開催される国際技術博覧会（expo）でインタラクティブな展示ブースを設置します。"
        }
    },
    {
        id: 6,
        target: "challenging",
        category: "简单",
        stem: "Although the assignment was ________, the research team managed to finish it before the deadline.",
        options: ["challenging", "challenge", "protective", "mechanical"],
        correct: "challenging",
        explanations: {
            guide: "系动词后的表语成分。was 后面接形容词作表语，说明任务是“富有挑战性的”，选 challenging。",
            family: "challenging (adj.挑战性的) | challenge (n./v.挑战) | protective (adj.防护的) | mechanical (adj.机械的)。",
            details: "was challenging 表示任务具有难度与挑战性。challenge 作名词时前面一般需要冠词或作主语，不能直接接在 was 后充当表语形容词。",
            cn: "尽管这项任务富有挑战性，但研究团队还是争取在截止日期之前完成了它。",
            jp: "その課題はやりがいのある（challenging）ものでしたが、研究チームは締め切りまでに完了させることができました。"
        }
    },
    {
        id: 7,
        target: "long-term",
        category: "中等",
        stem: "The corporate board is meeting to formulate a ________ strategy that will ensure sustainable profitability over the next decade.",
        options: ["long-term", "county", "hesitate", "routine"],
        correct: "long-term",
        explanations: {
            guide: "复合形容词作定语。________ strategy 表达针对未来十年的“长期战略”，选 long-term。",
            family: "long-term (adj.长期的) | county (n.县) | hesitate (v.犹豫) | routine (adj.常规的)。",
            details: "long-term strategy / goal（长期战略/目标）属于商业战略规划中的高频考法。其他选项与“未来十年（next decade）”的框架语义不符。",
            cn: "公司董事会开会制定长期战略，以确保未来十年的可持续盈利能力。",
            jp: "取締役会は、今後10年間にわたり持続可能な収益性を確保するための長期的な（long-term）戦略を策定するために会合を開いています。"
        }
    },
    {
        id: 8,
        target: "county",
        category: "中等",
        stem: "Property developers must obtain an official zoning clearance from the ________ office before starting excavation.",
        options: ["county", "protective", "exceptional", "input"],
        correct: "county",
        explanations: {
            guide: "名词作前置定语。from the ________ office 指从“县/郡政府办事处”获取行政许可，选 county。",
            family: "county (n.县/郡) | protective (adj.防护的) | exceptional (adj.卓越的) | input (n.输入/意见)。",
            details: "county office / county government（县政府/县行政机构）是托业公共行政与商业地产报批场景的固定说法。",
            cn: "房地产开发商在开始挖掘之前，必须从县政府办公室获得官方的规划许可。",
            jp: "不動産開発業者は、掘削を開始する前に郡（county）のオフィスから公式な区画整理許可を取得しなければなりません。"
        }
    },
    {
        id: 9,
        target: "mechanical",
        category: "中等",
        stem: "The flight was unexpectedly delayed because technicians detected a minor ________ problem during pre-flight checks.",
        options: ["mechanical", "mechanic", "expo", "hesitate"],
        correct: "mechanical",
        explanations: {
            guide: "形容词修饰名词。a minor ________ problem 中需要形容词修饰 problem，表达“机械故障/机械问题”，选 mechanical。",
            family: "mechanical (adj.机械的) | mechanic (n.技工) | expo (n.博览会) | hesitate (v.犹豫)。",
            details: "mechanical problem/failure 是航空与设备运行场景的标准搭配。mechanic 是指具体的“机械技工”个人，不能修饰 problem。",
            cn: "由于技术人员在飞行前检查中检测到轻微的机械问题，航班被意外推迟。",
            jp: "飛行前の点検中に技術者が軽微な機械的（mechanical）問題を検出したため、フライトは予期せず遅延しました。"
        }
    },
    {
        id: 10,
        target: "input",
        category: "中等",
        stem: "The project manager would greatly appreciate your valuable ________ regarding the revised marketing plan.",
        options: ["input", "routine", "county", "challenging"],
        correct: "input",
        explanations: {
            guide: "形容词修饰不可数名词。valuable ________ 结构中需要接名词，valuable input 表示“宝贵的意见/建议”，选 input。",
            family: "input (n.意见/建议) | routine (n.常规) | county (n.县) | challenging (adj.挑战性的)。",
            details: "appreciate your input（感谢您的意见/建议）是商务沟通与征求看法时的高频社交用语。其他选项不符合征求研讨表达的逻辑。",
            cn: "项目经理将非常感谢您对修改后的营销计划提出的宝贵意见。",
            jp: "プロジェクトマネージャーは、改訂されたマーケティング計画に関するあなたの貴重な意見（input）に深く感謝いたします。"
        }
    },
    {
        id: 11,
        target: "routine",
        category: "中等",
        stem: "Safety inspectors ________ visit the chemical manufacturing plant to verify compliance with national regulations.",
        options: ["routinely", "routine", "exceptional", "protective"],
        correct: "routinely",
        explanations: {
            guide: "副词修饰谓语动词。________ visit 结构中，位于主语与动词之间，需要副词修饰动词 visit，表达“例行地/按惯例地”访问，选 routinely。",
            family: "routinely (adv.例行地) | routine (adj./n.例行的) | exceptional (adj.卓越的) | protective (adj.防护的)。",
            details: "routinely visit 构成“副词 + 动词”结构。routine 是形容词或名词，不能在主语与谓语动词之间作状语。",
            cn: "安全检查员按惯例定期巡查该化学品制造厂，以核实其是否符合国家法规。",
            jp: "安全検査官は、国家規制への準拠を確認するために、化学製造プラントを定期的に（routinely）訪問しています。"
        }
    },
    {
        id: 12,
        target: "exceptional",
        category: "中等",
        stem: "Despite fierce market competition, the regional branch performed ________ well throughout the entire fiscal year.",
        options: ["exceptionally", "exceptional", "hesitate", "mechanical"],
        correct: "exceptionally",
        explanations: {
            guide: "副词修饰副词。________ well 结构中，需要副词修饰后面的副词 well，exceptionally well 意为“极其出色地/极其好地”，选 exceptionally。",
            family: "exceptionally (adv.极其/异常地) | exceptional (adj.卓越的) | hesitate (v.犹豫) | mechanical (adj.机械的)。",
            details: "exceptionally well 属于典型的程度副词修饰副词考法。exceptional 是形容词，不能用来修饰另一个副词 well。",
            cn: "尽管市场竞争激烈，但该区域分公司在整个财年的表现极其出色。",
            jp: "激しい市場競争にもかかわらず、地域支社は年度を通じて非常に（exceptionally）良く成果を上げました。"
        }
    },
    {
        id: 13,
        target: "long-term",
        category: "困难",
        stem: "Securing a reliable supplier is crucial for the company's ________ stability and competitive advantage in the retail sector.",
        options: ["long-term", "county", "routine", "input"],
        correct: "long-term",
        explanations: {
            guide: "形容词修饰抽象名词。________ stability 表达“长期的稳定性”，选复合形容词 long-term。",
            family: "long-term (adj.长期的) | county (n.县) | routine (adj.例行的) | input (n.输入)。",
            details: "long-term stability（长期稳定性）是商业投资与运营分析的高词频词组。其他选项均无法修饰抽象名词 stability 构成合乎逻辑的商业观点。",
            cn: "确保可靠的供应商对于公司在零售领域的长期稳定性和竞争优势至关重要。",
            jp: "信頼できるサプライヤーを確保することは、小売部門における同社の長期的な（long-term）安定性と競争優位性にとって非常に重要です。"
        }
    },
    {
        id: 14,
        target: "hesitate",
        category: "困难",
        stem: "Investors showed momentary ________ before committing funds to the high-risk technology venture.",
        options: ["hesitation", "hesitate", "protective", "mechanical"],
        correct: "hesitation",
        explanations: {
            guide: "形容词后的名词宾语。showed momentary ________ 中，形容词 momentary（短暂的）后面需要接名词形式 hesitation（犹豫/顾虑）。",
            family: "hesitation (n.犹豫) | hesitate (v.犹豫) | protective (adj.防护的) | mechanical (adj.机械的)。",
            details: "showed hesitation 意为“表现出犹豫”。hesitate 是动词，不能直接放在形容词 momentary 后作动词 showed 的宾语中心词。",
            cn: "投资者在向该高风险科技企业注入资金前，表现出了短暂的犹豫。",
            jp: "投資家たちは、高リスクの技術ベンチャー企業に資金を投入する前に、一時的な躊躇（hesitation）を見せました。"
        }
    },
    {
        id: 15,
        target: "protective",
        category: "困难",
        stem: "The municipal government passed strict regulations to ensure the ________ of endangered local wetland ecosystems.",
        options: ["protection", "protective", "exceptional", "input"],
        correct: "protection",
        explanations: {
            guide: "定冠词与介词之间的名词。ensure the ________ of... 结构中，定冠词 the 后面必须接名词形式 protection（保护）。",
            family: "protection (n.保护) | protective (adj.防护的) | exceptional (adj.卓越的) | input (n.输入)。",
            details: "ensure the protection of wetlands 意为“确保对湿地的保护”。protective 是形容词，不能直接放在定冠词 the 之后作宾语。",
            cn: "市政府通过了严格的法规，以确保保护当地受威胁的湿地生态系统。",
            jp: "地方政府は、危機に瀕している地域の湿地生態系の保護（protection）を確保するために厳格な規制を可決しました。"
        }
    },
    {
        id: 16,
        target: "challenging",
        category: "困难",
        stem: "The executive team is facing numerous macroeconomic ________ that could affect projected sales figures.",
        options: ["challenges", "challenging", "routine", "county"],
        correct: "challenges",
        explanations: {
            guide: "限定词与形容词后的复数名词。facing numerous macroeconomic ________ 中，numerous 后面需要接可数名词复数形式 challenges（挑战）。",
            family: "challenges (n.挑战/复数) | challenging (adj.挑战性的) | routine (adj.常规的) | county (n.县)。",
            details: "macroeconomic challenges 指“宏观经济挑战”。challenging 是形容词，不能在形容词 macroeconomic 之后作为可数名词的复数中心词。",
            cn: "管理团队正面临诸多可能影响预测销售数字的宏观经济挑战。",
            jp: "経営チームは、予測売上数値に影響を与える可能性のある多くのマクロ経済上の課題（challenges）に直面しています。"
        }
    },
    {
        id: 17,
        target: "mechanical",
        category: "困难",
        stem: "All high-tech manufacturing equipment is maintained by a team of certified ________ specializing in automation.",
        options: ["mechanics", "mechanical", "expo", "input"],
        correct: "mechanics",
        explanations: {
            guide: "介词后的复数人名词。a team of certified ________ 中，需要接表示“人（技工）”的名词复数形式 mechanics。",
            family: "mechanics (n.技工/复数) | mechanical (adj.机械的) | expo (n.博览会) | input (n.建议)。",
            details: "certified mechanics 意为“持证机械技工”。mechanical 是形容词，不能直接放在 of certified 后面表示专业人员团体。",
            cn: "所有高科技制造设备均由一支专注于自动化领域的持证机械技工团队负责维护。",
            jp: "すべてのハイテク製造設備は、自動化を専門とする認定メカニック（mechanics）のチームによって保守されています。"
        }
    },
    {
        id: 18,
        target: "county",
        category: "困难",
        stem: "The regional transportation authority received a substantial grant from the ________ board to expand public bus routes.",
        options: ["county", "routine", "exceptional", "hesitate"],
        correct: "county",
        explanations: {
            guide: "名词作定语修饰部门组织。from the ________ board 中，county board 特指“县理事会/县政府行政委员会”，选 county。",
            family: "county (n.县/郡) | routine (adj.例行的) | exceptional (adj.卓越的) | hesitate (v.犹豫)。",
            details: "county board（县委员会/郡理事会）是美国及地方行政拨款场景专有名词。其他选项在行政拨款机构名称中不可替换。",
            cn: "区域交通管理局从县委员会获得了一笔丰厚的拨款，用于扩大公共公交线路。",
            jp: "地域交通局は、公共バス路線を拡大するために郡委員会（county board）から多額の助成金を受け取りました。"
        }
    }
];