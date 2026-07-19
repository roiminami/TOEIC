// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag111-120.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "according to",
        pos: "介",
        ipa: "/əˈkɔːrdɪŋ tuː/",
        cn: "根据，按照",
        jp: "〜によると、〜に従って",
        family: "accordingly",
        tips: "商务报告与数据引用核心介词短语。后面必须接名词或代词，常见搭配 according to the survey（根据调查）、according to the schedule（按照日程安排）。其派生副词 accordingly 意为“相应地”，常用于句末。",
        desc: "According to the report."
    },
    {
        word: "advise",
        pos: "動",
        ipa: "/ədˈvaɪz/",
        cn: "建议，通知，忠告",
        jp: "忠告する、アドバイスする、通知する",
        family: "advice / adviser / advisory",
        tips: "商务咨询与管理决策核心动词。常用句型 advise someone to do something（建议某人做某事）或 advise someone of something（将某事通知某人）。注意名词形式为 advice（不可数），切勿混淆。",
        desc: "Advise the client."
    },
    {
        word: "appear",
        pos: "動",
        ipa: "/əˈpɪr/",
        cn: "似乎，显得；出现",
        jp: "〜のように見える、現れる",
        family: "appearance / apparently",
        tips: "业绩表现与日常办公高频动词。常作连系动词，后接形容词或不定式，如 appear to be reluctant（似乎很不情愿）。名词形式 appearance 在商务场景中常指“外表”或“出席/露面”。",
        desc: "Errors appear in reports."
    },
    {
        word: "belong",
        pos: "動",
        ipa: "/bɪˈlɔːŋ/",
        cn: "属于，应归入",
        jp: "属する、〜のものである",
        family: "belongings / belonging",
        tips: "资产归属与团队建设词汇。是不及物动词，核心固定搭配为 belong to...（属于……）。其名词复数形式 belongings（所有物、财产）是托业差旅与办公环境的高频考点词。",
        desc: "The items belong here."
    },
    {
        word: "concerned",
        pos: "形",
        ipa: "/kənˈsɜːrnd/",
        cn: "担心的，忧虑的；相关的",
        jp: "懸念している、関係している",
        family: "concern / concerning",
        tips: "危机管理与公关信函核心形容词。表示“担心的”时常接介词 about/over，如 be concerned about declining sales。注意其介词形式 concerning 意为“关于”，等同于 about。",
        desc: "Employees are concerned."
    },
    {
        word: "conclude",
        pos: "動",
        ipa: "/kənˈkluːd/",
        cn: "结束，终止；推断出；缔结",
        jp: "締めくくる、結論づける、契約を結ぶ",
        family: "conclusion / conclusive / conclusively",
        tips: "会议总结与合同谈判核心动词。常见搭配 conclude the meeting（结束会议）、conclude a contract（缔结合同）。名词形式为 conclusion，常考短语 come to a conclusion（得出结论）。",
        desc: "Conclude the meeting."
    },
    {
        word: "excerpt",
        pos: "名/動",
        ipa: "/ˈeksɜːrpt/",
        cn: "摘录，节选",
        jp: "抜粋、引用",
        family: "excerpts / excerpted",
        tips: "商务合同与报告分析高频词。作为名词时，常用于阅读理解题干中，如 an excerpt from the minutes（会议记录摘录）。作为动词时指从长篇文件中提取片段。",
        desc: "Read the excerpt."
    },
    {
        word: "imply",
        pos: "動",
        ipa: "/ɪmˈplaɪ/",
        cn: "暗示，意味着",
        jp: "暗示する、仄めかす、意味する",
        family: "implication / implicit / implicitly",
        tips: "托业阅读理解 Part 7 题干常客。What is implied about...?（关于……暗示了什么？）。名词形式 implication 意为“暗示”或“可能的后果/影响”，在宏观经济分析中经常出现。",
        desc: "The results imply growth."
    },
    {
        word: "in common",
        pos: "副/介片",
        ipa: "/ɪn ˈkɑːmən/",
        cn: "共同，共有",
        jp: "共通して、共有して",
        family: "common / commonly",
        tips: "市场分析与团队协作常用短语。核心搭配 have something/much in common（有共同之处）。形容词形式 common 常考搭配 common practice（惯例、常规做法）。",
        desc: "They have much in common."
    },
    {
        word: "indicate",
        pos: "動",
        ipa: "/ˈɪndɪkeɪt/",
        cn: "表明，显示；指出",
        jp: "示す、指摘する",
        family: "indication / indicator / indicative",
        tips: "图表分析与业绩报告核心动词。后面常接 that 从句，如 studies indicate that...。名词形式 indication（迹象/暗示），经济指标则用 indicator（如 economic indicators）。",
        desc: "Studies indicate trends."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    // ==================== 简单难度 (Easy: 6题) ====================
    {
        id: 1,
        target: "according to",
        category: "简单",
        stem: "________ the latest market research report, consumer spending on electronics has increased by five percent.",
        options: ["According to", "In common", "Conclude", "Advise"],
        correct: "According to",
        explanations: {
            guide: "特定短语的语义与前置搭配考核。空格后是一个完整的名词短语，提示需要填入一个介词或介词短语，结合语义选 According to。",
            family: "According to (介.根据) | In common (副.共同) | Conclude (v.结束) | Advise (v.建议)。",
            details: "According to the report 意为“根据报告”，是商务英语中引用客观数据、图表或权威结论时最常用的标准开场白。其余选项词性或语义不符。",
            cn: "根据最新的市场研究报告，消费者在电子产品上的支出增加了百分之五。",
            jp: "最新の市場調査レポートによると（According to）、消費者の電子機器への支出は5%増加しました。"
        }
    },
    {
        id: 2,
        target: "advise",
        category: "简单",
        stem: "The legal department will ________ the board of directors on the potential risks of the international merger.",
        options: ["advise", "appear", "imply", "indicate"],
        correct: "advise",
        explanations: {
            guide: "情态动词后的动词原形搭配。will 后面需要接动词原形，根据后文的宾语 the board（董事会）以及介词 on，应选择 advise 构成固定句型。",
            family: "advise (v.建议/通知) | appear (v.显得) | imply (v.暗示) | indicate (v.表明)。",
            details: "advise someone on something 意为“就某事向某人提供建议”，此处法务部就并购风险向董事会建言，语义完全契合。appear 为不及物动词，imply 和 indicate 不与 of/on 搭配。",
            cn: "法律部门将就国际并购的潜在风险向董事会提供建议。",
            jp: "法務部は、国際合併の潜在的なリスクについて取締役会に助言（advise）する予定です。"
        }
    },
    {
        id: 3,
        target: "appear",
        category: "简单",
        stem: "Several minor technical glitches ________ to affect the new software system during its initial testing phase.",
        options: ["appear", "conclude", "excerpt", "indicate"],
        correct: "appear",
        explanations: {
            guide: "连系动词与不定式的经典搭配。空格后是不定式 to affect，提示此处需要一个可以接 to do 的动词，结合主语复数，选 appear。",
            family: "appear (v.似乎/出现) | conclude (v.结束) | excerpt (v.摘录) | indicate (v.表明)。",
            details: "appear to do something 意为“似乎/好像做某事”，用来委婉地描述系统测试中表现出的问题。indicate 后面不能直接接不定式，conclude 和 excerpt 语义不通。",
            cn: "在初始测试阶段，几个微小的技术故障似乎影响了新的软件系统。",
            jp: "初期テスト段階では、いくつかの軽微なテクニカルグリッチが新しいソフトウェアシステムに影響を与えているように見え（appear）ます。"
        }
    },
    {
        id: 4,
        target: "belong",
        category: "简单",
        stem: "Please make sure all these confidential files ________ to the accounting department before archiving them.",
        options: ["belong", "appear", "imply", "advise"],
        correct: "belong",
        explanations: {
            guide: "不及物动词与介词的固定搭配。空格后出现了介词 to，且主语是文件，要求填入一个表示资产归属的动词，选 belong。",
            family: "belong (v.属于) | appear (v.似乎) | imply (v.暗示) | advise (v.建议)。",
            details: "belong to... 意为“属于……”，在办公行政资产归属划分的语境下是绝对的核心高频搭配。其他动词均不与 to 构成此类语义。",
            cn: "在归档之前，请确保所有这些机密文件都属于会计部门。",
            jp: "アーカイブする前に、これらの機密ファイルがすべて経理部に属して（belong）いることを確認してください。"
        }
    },
    {
        id: 5,
        target: "concerned",
        category: "简单",
        stem: "The senior shareholders are highly ________ about the sudden drop in the company's quarterly revenue.",
        options: ["concerned", "indicated", "concluded", "advised"],
        correct: "concerned",
        explanations: {
            guide: "形容词作表语的固定搭配。空格前面有系动词 are 和副词 highly，后接介词 about，提示此处应填入表示情绪或态度的形容词，选 concerned。",
            family: "concerned (adj.担名的) | indicated (v-ed表明) | concluded (v-ed结束) | advised (v-ed受建议的)。",
            details: "be concerned about... 意为“对……感到担心/忧虑”，属于标准的商务危机汇报语境。其余过去分词均无法与 about 连用表达合理语义。",
            cn: "高级股东们对公司季度收入的突然下降感到高度担忧。",
            jp: "大株主たちは、会社の四半期収益の急激な下落について非常に懸念（concerned）しています。"
        }
    },
    {
        id: 6,
        target: "conclude",
        category: "简单",
        stem: "The keynote speaker will ________ the annual conference with a brief question-and-answer session.",
        options: ["conclude", "appear", "indicate", "imply"],
        correct: "conclude",
        explanations: {
            guide: "及物动词的商务语义辨析。空格前有助动词 will，后接名词宾语 the annual conference 以及方式状语 with，选 conclude 最地道。",
            family: "conclude (v.结束/缔结) | appear (v.似乎) | indicate (v.表明) | imply (v.暗示)。",
            details: "conclude something with... 意为“以……来结束某事”，常用于大型会议、研讨会或仪式的日程流程描述中。其余动词无法与 with 形成“以此结束”的搭配。",
            cn: "主旨演讲者将以一个简短的问答环节来结束本届年会。",
            jp: "基調講演者は、短い質疑応答セッションをもって年次カンファレンスを締めくくる（conclude）予定です。"
        }
    },

    // ==================== 中等难度 (Medium: 6题) ====================
    {
        id: 7,
        target: "excerpt",
        category: "中等",
        stem: "The newly published corporate brochure includes a short ________ from the CEO's upcoming autobiography.",
        options: ["excerpt", "implication", "advice", "appearance"],
        correct: "excerpt",
        explanations: {
            guide: "特定商务材料的名词语义辨析。空格前有不定冠词 a 和形容词 short，后接介词 from，提示此处需要一个表示“片段/部分”的名词，选 excerpt。",
            family: "excerpt (n.摘录/节选) | implication (n.暗示) | advice (n.建议) | appearance (n.外表/出席)。",
            details: "a short excerpt from... 意为“从……中摘录的短文”。在宣传册（brochure）里放一段CEO自传的节选，完全符合企业公文与品牌宣传的逻辑。advice 为不可数名词，不能用 a 修饰。",
            cn: "新出版的公司宣传册中包含了CEO即将出版的自传的一段简短摘录。",
            jp: "新しく発行された会社のパンフレットには、CEOの近く出版される自叙伝からの短い抜粋（excerpt）が含まれています。"
        }
    },
    {
        id: 8,
        target: "imply",
        category: "中等",
        stem: "The regional supervisor's subtle remarks seem to ________ that internal budget cuts will be implemented next month.",
        options: ["imply", "advise", "conclude", "belong"],
        correct: "imply",
        explanations: {
            guide: "动词后的宾语从句语义考查。seem to 后面接动词原形，引导后面的 that 从句，根据主语 remarks（言论）的属性，选 imply（暗示）。",
            family: "imply (v.暗示/意味着) | advise (v.建议) | conclude (v.得出结论) | belong (v.属于)。",
            details: "remarks imply that... 意为“言论暗示了……”。主管话里有话，侧面透露出预算削减的信号。advise 引导宾语从句时主句主语通常为人，conclude 语气过重，不符“subtle（微妙的）”的限定。",
            cn: "区域主管微妙的话语似乎暗示了下个月将实施内部预算削减。",
            jp: "地方スーパーバイザーの微妙な発言は、来月に内部予算の削減が実施されることを暗示（imply）しているようです。"
        }
    },
    {
        id: 9,
        target: "in common",
        category: "中等",
        stem: "Although they operate in entirely different sectors, the two subsidiary firms have many marketing strategies ________.",
        options: ["in common", "accordingly", "concerning", "implicitly"],
        correct: "in common",
        explanations: {
            guide: "固定短语的后置搭配考查。空格前面有动词 have 以及名词宾语 many marketing strategies，构成 have... in common 的结构。",
            family: "in common (短语.共同) | accordingly (adv.相应地) | concerning (介.关于) | implicitly (adv.含蓄地)。",
            details: "have strategies in common 意为“在营销策略上有共同之处”。虽然两家子公司行业不同，但手段相似，属于托业 Part 5 经典的企业架构对比题型。",
            cn: "尽管它们在完全不同的领域运营，这两家子公司在营销策略上仍有许多共同之处。",
            jp: "全く異なるセクターで事業を展開しているものの、その2つの子会社は多くのマーケティング戦略を共通して（in common）持っています。"
        }
    },
    {
        id: 10,
        target: "indicate",
        category: "中等",
        stem: "Recent consumer surveys clearly ________ a growing preference for eco-friendly packaging among young professionals.",
        options: ["indicate", "appear", "conclude", "advise"],
        correct: "indicate",
        explanations: {
            guide: "图表与市场调研主语的动词搭配。主语是 surveys（调查），修饰副词是 clearly，空格后直接接名词短语作宾语，选及物动词 indicate。",
            family: "indicate (v.表明/显示) | appear (v.似乎) | conclude (v.结束) | advise (v.建议)。",
            details: "surveys indicate... 意为“调查表明/显示……”，是商务数据分析报告中的高频标准句式。appear 是不及物动词不能直接接宾语，conclude 的主语通常是研究者而非数据本身。",
            cn: "最近的消费者调查清楚地表明，年轻的专业人士对环保包装的偏好正在增长。",
            jp: "最近の消費者調査は、若い専門職の間で環境に配慮したパッケージへの好意が高まっていることを明確に示して（indicate）います。"
        }
    },
    {
        id: 11,
        target: "according to",
        category: "中等",
        stem: "The department's quarterly budget allocation has been revised, and all project managers must adjust their spending ________.",
        options: ["accordingly", "according to", "common", "concerned"],
        correct: "accordingly",
        explanations: {
            guide: "派生词词性与句尾副词用法。空格位于完整句子末尾，用来修饰动词 adjust，提示需要填入一个副词，选 accordingly。",
            family: "accordingly (adv.相应地) | according to (介.根据) | common (adj.共同的) | concerned (adj.相关的)。",
            details: "adjust spending accordingly 意为“相应地调整支出”。根据前文预算被修订（revised）的前提，经理们做出配合性调整，修饰动词作状语非 accordingly 莫属。according to 是介词，后面不能没有宾语。",
            cn: "该部门的季度预算分配已作修改，所有项目经理必须相应地调整他们的支出。",
            jp: "部門の四半期予算配分が改定されたため、すべてのプロジェクトマネージャーはそれに応じて（accordingly）支出を調整しなければなりません。"
        }
    },
    {
        id: 12,
        target: "advise",
        category: "中等",
        stem: "The senior technical consultant provided valuable ________ on how to optimize the automated supply chain workflow.",
        options: ["advice", "advise", "adviser", "advisory"],
        correct: "advice",
        explanations: {
            guide: "词族中名词与动词及人称的派生辨析。空格前有及物动词 provided（提供）和形容词 valuable（有价值的），提示此处要填入抽象名词作宾语，选 advice。",
            family: "advice (n.建议/不可数) | advise (v.建议) | adviser (n.顾问) | advisory (adj.咨询的)。",
            details: "provide valuable advice on... 意为“就某事提供宝贵的建议”。注意 advice 是不可数名词，完美契合空格。adviser 指“顾问（人）”，通常为可数名词且与前面的语义逻辑不符（不能提供有价值的顾问）。",
            cn: "高级技术顾问就如何优化自动化供应链流程提供了宝贵的建议。",
            jp: "シニア技術コンサルタントは、自動化されたサプライチェーンのワークフローを最適化する方法について貴重な助言（advice）を提供しました。"
        }
    },

    // ==================== 困难难度 (Hard: 6题) ====================
    {
        id: 13,
        target: "appear",
        category: "困难",
        stem: "The sudden ________ of an aggressive new competitor in the regional e-commerce market forced the firm to lower its prices.",
        options: ["appearance", "appear", "apparently", "appeared"],
        correct: "appearance",
        explanations: {
            guide: "主语位置的名词派生词考核。空格前面有形容词 sudden（突然的），后面有介词短语 of...，整段作为句子的主语，必须填入名词形式，选 appearance。",
            family: "appearance (n.出现/外表) | appear (v.出现) | apparently (adv.显然地) | appeared (v-ed出现)。",
            details: "The sudden appearance of... 意为“……的突然出现”。在商战市场竞争场景中，新对手的加入彻底打破格局，其余选项词性均无法充当受形容词修饰的主语中心词。",
            cn: "区域电子商务市场中一个强劲的新竞争对手的突然出现，迫使该企业降低了价格。",
            jp: "地域的なEC市場における攻撃的な新規競合他社の突然の出現（appearance）により、同社は価格引き下げを余儀なくされました。"
        }
    },
    {
        id: 14,
        target: "belong",
        category: "困难",
        stem: "Passengers are strictly requested to check the overhead bins for any personal ________ before deplaning.",
        options: ["belongings", "belong", "belonged", "belonging"],
        correct: "belongings",
        explanations: {
            guide: "高阶商务差旅人称资产专用名词考核。空格被形容词 personal（个人的）修饰，作 check 的远端宾语，提示需要填入表示财产的所有物名词，选复数名词 belongings。",
            family: "belongings (n-pl.随身财物) | belong (v.属于) | belonged (v-ed属于) | belonging (n.归属感)。",
            details: "personal belongings 意为“个人物品/随身财产”，是托业机场广播、酒店退房通知、公共交通告示中雷打不动的超高阶固定搭配。belong 只是动词，无法被 personal 直接修饰。",
            cn: "请乘客在下机前务必检查头顶上方的行李架，以防遗落任何个人随身物品。",
            jp: "乗客の皆様は、降機前に頭上の荷物入れに個人の私物（belongings）が残っていないか確認するよう厳格に求められています。"
        }
    },
    {
        id: 15,
        target: "concerned",
        category: "困难",
        stem: "The board of directors will thoroughly review all official documentation ________ the recent breach of data safety protocols.",
        options: ["concerning", "concerned", "concern", "concerns"],
        correct: "concerning",
        explanations: {
            guide: "高阶特殊介词的词性与语义辨析。空格后面跟了一个完整的名词短语，用来修饰前面的 documentation，此处需要填入一个起介词作用的词，选 concerning。",
            family: "concerning (介.关于) | concerned (adj.相关的/担忧的) | concern (n/v.关心) | concerns (n-pl.担忧)。",
            details: "documentation concerning... 意为“关于……的官方文件”。concerning 在商务英语中是极其正式的介词，效力等同于 about 或 regarding。concerned 放在名词后通常表示“相关的（people concerned）”，但此处后面有宾语，故不行。",
            cn: "董事会将彻底审查关于最近违反数据安全协议的所有官方文件。",
            jp: "取締役会は、最近のデータ安全プロトコル違反に関する（concerning）すべての公式文書を徹底的に調査する予定です。"
        }
    },
    {
        id: 16,
        target: "conclude",
        category: "困难",
        stem: "After rigorously evaluating the laboratory test results, the pharmaceutical research team successfully reached a definitive ________.",
        options: ["conclusion", "conclude", "conclusive", "conclusively"],
        correct: "conclusion",
        explanations: {
            guide: "高级动宾搭配及名词词性考核。空格位于及物动词 reached（达到/得出）和形容词 definitive（决定性的）之后，要求填入名词作为最终宾语，选 conclusion。",
            family: "conclusion (n.结论) | conclude (v.结束) | conclusive (adj.决定性的) | conclusively (adv.决定性地)。",
            details: "reach a conclusion 意为“得出结论/达成共识”。配合前文研发团队历经严苛测试（rigorous evaluating）的情境，名词 conclusion 完美收尾。其余词性均不符合语法位置。",
            cn: "在对实验室测试结果进行严格评估后，该制药研究团队成功得出了明确的结论。",
            jp: "実験室でのテスト結果を厳格に評価した後、製薬研究チームは決定的な結論（conclusion）に無事に達しました。"
        }
    },
    {
        id: 17,
        target: "imply",
        category: "困难",
        stem: "The unexpected regulatory changes introduced by the government carry a serious financial ________ for small business owners.",
        options: ["implication", "imply", "implicit", "implicitly"],
        correct: "implication",
        explanations: {
            guide: "及物动词宾语的名词派生辨析。空格前面有动词 carry（带有）和形容词短语 serious financial，提示此处必须填入名词作宾语，选 implication。",
            family: "implication (n.含意/潜在影响) | imply (v.暗示) | implicit (adj.含蓄的) | implicitly (adv.含蓄地)。",
            details: "carry an implication for... 意为“对……带来潜在影响/连带后果”。在宏观政商环境中，法规政策的变动带来的深远后果往往用 implication 来表达，是托业高分段阅读的必背词汇。",
            cn: "政府出台的意想不到的监管变化，对小企业主而言意味着严重的财务影响。",
            jp: "政府による予期せぬ規制変更は、小規模企業のオーナーにとって深刻な財務的影響（implication）をもたらします。"
        }
    },
    {
        id: 18,
        target: "indicate",
        category: "困难",
        stem: "The sharp and continuous rise in online traffic is a strong ________ of the digital marketing campaign's immense success.",
        options: ["indication", "indicate", "indicative", "indicator"],
        correct: "indication",
        explanations: {
            guide: "近义名词及高阶句型成分考核。空格位于不定冠词 a 和形容词 strong 之后，后面有介词 of，提示填入名词，这里考查 indication 与 indicator 的高阶语义区别，选 indication。",
            family: "indication (n.迹象/表明) | indicate (v.显示) | indicative (adj.指示的) | indicator (n.指标/如经济指标)。",
            details: "is a strong indication of... 意为“是……的有力证明/明显迹象”。流量飙升这件事本身是一项“证明/迹象(indication)”，而 indicator 通常指CPI、失业率等固定的“宏观经济指标”，在此语境下 indication 更为精准。",
            cn: "线上流量猛烈且持续的增长，强有力地证明了本次数字营销活动取得了巨大的成功。",
            jp: "オンラインアクセスの急激かつ継続的な上昇は、デジタルマーケティングキャンペーンの絶大な成功の強い兆候（indication）です。"
        }
    }
];