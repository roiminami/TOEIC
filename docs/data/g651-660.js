// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag141-150 Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "strive",
        pos: "動",
        ipa: "/straɪv/",
        cn: "努力，奋斗，力求",
        jp: "努力する、骨を折る、目指す",
        family: "strove / striven / striving / endeavor",
        tips: "商务表达高频搭配：strive for excellence（追求卓越）、strive to improve customer satisfaction（努力提高客户满意度）。近义词辨析：endeavor / attempt。",
        desc: "We strive for quality."
    },
    {
        word: "circumstance",
        pos: "名",
        ipa: "/ˈsɜːrkəmstæns/",
        cn: "情况，环境，境遇",
        jp: "状況、事情、環境",
        family: "circumstances / circumstantial",
        tips: "行政与合同条款高频词。常考复数形式 circumstances：under no circumstances（决不，位于句首主谓倒装）、due to unforeseen circumstances（由于不可预见的情况）。",
        desc: "The circumstances changed."
    },
    {
        word: "adapt",
        pos: "動",
        ipa: "/əˈdæpt/",
        cn: "适应，改写，调整",
        jp: "適応する、適応させる、改編する",
        family: "adaptation / adaptable / adaptive / adaptability",
        tips: "跨国业务与市场扩张高频动词。常用搭配：adapt to new markets（适应新市场）、adapt to changing conditions（适应变化的情况）。注意区分 adopt（采用，收养）。",
        desc: "We must adapt quickly."
    },
    {
        word: "luxury",
        pos: "名/形",
        ipa: "/ˈlʌkʃəri/",
        cn: "奢华，奢侈品；豪华的",
        jp: "高級、贅沢、豪華さ；高級な",
        family: "luxurious / luxuriously",
        tips: "酒店住宿、高端消费与零售行销高频词。常见短语：luxury hotel（豪华酒店）、luxury goods（奢侈品）。派生形容词 luxurious（奢华的）。",
        desc: "It is a luxury hotel."
    },
    {
        word: "surprisingly",
        pos: "副",
        ipa: "/sərˈpraɪzɪŋli/",
        cn: "出人意料地，惊人地",
        jp: "驚くほど、思いのほか",
        family: "surprise / surprising / surprised",
        tips: "财报分析、业绩总结与口语表态高频副词。修饰形容词或整句，表示出乎意料的结果。常见搭配：surprisingly strong sales（出人意料的强劲销售额）。",
        desc: "The results were surprisingly good."
    },
    {
        word: "suspend",
        pos: "動",
        ipa: "/səˈspend/",
        cn: "暂停，中止，悬挂",
        jp: "停止する、中断する、吊るす",
        family: "suspension / suspended",
        tips: "服务中断、项目关停与交易暂停高频动词。常见短语：suspend operations（暂停运营）、suspend service（暂停服务）。派生名词 suspension（暂停，中断）。",
        desc: "They had to suspend service."
    },
    {
        word: "statistics",
        pos: "名",
        ipa: "/stəˈtɪstɪks/",
        cn: "统计数据，统计学",
        jp: "統計データ、統計学",
        family: "statistical / statistician / statistic",
        tips: "市场调研与数据分析核心名词。作“数据”解时谓语用复数，作“统计学”时用单数。常用搭配：sales statistics（销售数据）、official statistics（官方数据）。",
        desc: "Check the latest statistics."
    },
    {
        word: "poll",
        pos: "名/動",
        ipa: "/poʊl/",
        cn: "民意调查，投票；进行民意调查",
        jp: "世論調査、投票；世論調査をする",
        family: "polls / polling",
        tips: "市场研究、员工满意度调查及选民意向高频词。常用搭配：opinion poll（民意调查）、conduct a poll（发起调查）、exit poll（出口民调）。",
        desc: "The poll shows clear results."
    },
    {
        word: "resign",
        pos: "動",
        ipa: "/rɪˈzaɪn/",
        cn: "辞职，放弃",
        jp: "辞任する、辞職する",
        family: "resignation / resigned",
        tips: "高管变动与人事公告核心动词。核心搭配：resign from a position（辞去某个职位）、tender one's resignation（递交辞呈）。派生名词 resignation（辞职）。",
        desc: "He decided to resign."
    },
    {
        word: "gratitude",
        pos: "名",
        ipa: "/ˈɡrætɪtuːd/",
        cn: "感恩，感谢，感激之情",
        jp: "感謝、謝意",
        family: "grateful / gratefully",
        tips: "客户答谢、离职欢送及公关致辞高频名词。常用搭配：express gratitude to sb（向某人表示感谢）、in gratitude for sth（为了表达对……的感谢）。",
        desc: "We express our sincere gratitude."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "gratitude",
        category: "简单",
        stem: "The department director sent a thank-you letter to express her sincere ________ to the entire team.",
        options: ["gratitude", "circumstance", "statistics", "poll"],
        correct: "gratitude",
        explanations: {
            guide: "名词词义辨析。由形容词 sincere（真诚的）修饰，作 express 的宾语，结合后文“感谢信”，选择表示“感谢/感激之情”的名词 gratitude。",
            family: "gratitude (n.感谢) | circumstance (n.情况) | statistics (n.统计数据) | poll (n.民意调查)。",
            details: "express one's gratitude to... 意为“向……表达感激之情”，属于商务公关与内部感谢信的高频表达。",
            cn: "部门主管寄出一封感谢信，向整个团队表达她真诚的感谢。",
            jp: "部門ディレクターは、チーム全体に心からの感謝（gratitude）を伝えるために感謝状を送りました。"
        }
    },
    {
        id: 2,
        target: "suspend",
        category: "简单",
        stem: "Due to technical maintenance, the bank will temporarily ________ online banking services midnight tonight.",
        options: ["suspend", "adapt", "resign", "strive"],
        correct: "suspend",
        explanations: {
            guide: "动词词义辨析。位于助动词 will 和副词 temporarily（临时地）之后，结合“技术维护”语境，表达“暂停”服务，选 suspend。",
            family: "suspend (v.暂停) | adapt (v.适应) | resign (v.辞职) | strive (v.努力)。",
            details: "temporarily suspend services 意为“暂停服务”，是系统维护与设施升级公告的标准用语。",
            cn: "由于技术维护，该银行今晚午夜将临时暂停网上银行服务。",
            jp: "技術的な保守点検のため、銀行は今夜子時にオンラインバンキングサービスを一時停止（suspend）します。"
        }
    },
    {
        id: 3,
        target: "luxury",
        category: "简单",
        stem: "The company booked rooms at a five-star ________ hotel for the visiting international executives.",
        options: ["luxury", "gratitude", "poll", "statistics"],
        correct: "luxury",
        explanations: {
            guide: "名词作定语修饰名词。修饰 hotel，与五星级（five-star）构成组合，表达“豪华酒店”，选 luxury。",
            family: "luxury (n./adj.奢华/豪华的) | gratitude (n.感谢) | poll (n.民调) | statistics (n.统计数据)。",
            details: "five-star luxury hotel（五星级豪华酒店）属于旅游与接待场景的高频固定词组。",
            cn: "公司为来访的国际高管预订了一家五星级豪华酒店的房间。",
            jp: "同社は来日した海外幹部のために、5つ星の高級（luxury）ホテルの客室を手配しました。"
        }
    },
    {
        id: 4,
        target: "resign",
        category: "简单",
        stem: "After twenty years of service, Mr. Jenkins announced his decision to ________ from his post as Vice President.",
        options: ["resign", "suspend", "adapt", "strive"],
        correct: "resign",
        explanations: {
            guide: "动词词义与固定搭配。位于不定式符号 to 之后，与后文介词 from 及其职位（Vice President）构成短语 resign from a post（从……职位辞职），选 resign。",
            family: "resign (v.辞职) | suspend (v.暂停) | adapt (v.适应) | strive (v.努力)。",
            details: "resign from a post 意为“从某一职位辞职”，属于高管人事公告中的标准搭配。",
            cn: "在任职二十年后，詹金斯先生宣布了他辞去副总裁职务的决定。",
            jp: "20年間の勤務を経て、ジェンキンス氏は副社長の職を辞任する（resign）決断を発表しました。"
        }
    },
    {
        id: 5,
        target: "statistics",
        category: "简单",
        stem: "According to recent sales ________, demand for electric vehicles has increased significantly.",
        options: ["statistics", "luxury", "circumstance", "gratitude"],
        correct: "statistics",
        explanations: {
            guide: "名词词义辨析。由名词 sales 修饰，结合“根据最近的销售……，电动汽车需求显著增加”，选 statistics（统计数据）。",
            family: "statistics (n.统计数据) | luxury (n.奢华) | circumstance (n.情况) | gratitude (n.感谢)。",
            details: "sales statistics 意为“销售统计数据”，常出现在市场趋势分析与财报总结中。",
            cn: "根据最近的销售统计数据，对电动汽车的需求已大幅增加。",
            jp: "最近の売上統計（statistics）によると、電気自動車の需要は大幅に増加しています。"
        }
    },
    {
        id: 6,
        target: "adapt",
        category: "简单",
        stem: "Businesses must ________ to changing market trends in order to stay competitive.",
        options: ["adapt", "resign", "suspend", "poll"],
        correct: "adapt",
        explanations: {
            guide: "动词与介词搭配。位于情态动词 must 之后，与介词 to 搭配，表达企业必须“适应”变化的市场趋势，选 adapt。",
            family: "adapt (v.适应) | resign (v.辞职) | suspend (v.暂停) | poll (v./n.民调)。",
            details: "adapt to sth 意为“适应某事”，是企业战略与市场变化场景的核心表达。",
            cn: "企业必须适应不断变化的市场趋势，以保持竞争力。",
            jp: "企業は競争力を維持するために、変化する市場動向に適応（adapt）しなければなりません。"
        }
    },
    {
        id: 7,
        target: "strive",
        category: "中等",
        stem: "Our customer support team will always ________ to deliver the highest standard of service to all clients.",
        options: ["strive", "adapt", "suspend", "resign"],
        correct: "strive",
        explanations: {
            guide: "动词用法与搭配。位于情态动词 will 之后，后接不定式 to deliver，表达客服团队将始终“力求/努力”提供最高标准的服务，选 strive。",
            family: "strive (v.努力/力求) | adapt (v.适应) | suspend (v.暂停) | resign (v.辞职)。",
            details: "strive to do sth 意为“努力/力求做某事”，是企业服务宣言与质量承诺中的高频用语。",
            cn: "我们的客户支持团队将始终力求为所有客户提供最高标准的服务。",
            jp: "当社のカスタマーサポートチームは、すべての顧客に最高水準のサービスを提供するよう常に努めます（strive）。"
        }
    },
    {
        id: 8,
        target: "circumstance",
        category: "中等",
        stem: "Under no ________ should confidential financial records be shared with unauthorized personnel.",
        options: ["circumstances", "statistics", "gratitude", "polls"],
        correct: "circumstances",
        explanations: {
            guide: "固定倒装短语考点。介词短语 Under no circumstances（在任何情况下都不……）置于句首，后接部分倒装结构，选复数形式 circumstances。",
            family: "circumstances (n.情况/复数) | statistics (n.统计数据) | gratitude (n.感谢) | polls (n.民调)。",
            details: "Under no circumstances 属于商务保密协议与安全规定中的最高频倒装结构，意为“绝不”。",
            cn: "在任何情况下，绝不能将机密财务记录透漏给未经授权的人员。",
            jp: "どのような事情（circumstances）があっても、机密の財務記録を権限のない担当者と共有してはなりません。"
        }
    },
    {
        id: 9,
        target: "poll",
        category: "中等",
        stem: "The marketing agency conducted a recent opinion ________ to gauge consumer interest in the new product line.",
        options: ["poll", "luxury", "suspension", "resignation"],
        correct: "poll",
        explanations: {
            guide: "固定复合名词。与 opinion 连用构成 opinion poll（民意调查/意见测验），作 conducted 的宾语，选 poll。",
            family: "poll (n.民意调查) | luxury (n.奢华) | suspension (n.暂停) | resignation (n.辞职)。",
            details: "conduct an opinion poll 表示“发起/实施民意调查”，常用于市场调研与产品测试。",
            cn: "该营销机构最近发起了一项民意调查，以评估消费者对新产品线的兴趣。",
            jp: "マーケティング代理店は、新製品ラインに対する消費者の関心を測定するため、最近世論調査（poll）を実施しました。"
        }
    },
    {
        id: 10,
        target: "surprisingly",
        category: "中等",
        stem: "Despite initial budget constraints, quarterly profits turned out to be ________ strong.",
        options: ["surprisingly", "gratitude", "circumstance", "statistic"],
        correct: "surprisingly",
        explanations: {
            guide: "副词修饰形容词。空格修饰形容词 strong，结合前半句“尽管最初存在预算限制”，表达季度利润“出人意料地”强劲，选副词 surprisingly。",
            family: "surprisingly (adv.出人意料地) | gratitude (n.感谢) | circumstance (n.情况) | statistic (n.统计)。",
            details: "surprisingly strong 意为“出乎意料地强劲/表现好”，用于业绩超出预期的场景。",
            cn: "尽管最初面临预算限制，但季度利润出人意料地强劲。",
            jp: "当初の予算制約にもかかわらず、四半期利益は驚くほど（surprisingly）好調であることが判明しました。"
        }
    },
    {
        id: 11,
        target: "adapt",
        category: "中等",
        stem: "The new manager demonstrated great ________ when handling the sudden operational changes.",
        options: ["adaptability", "adapt", "adapted", "adaptable"],
        correct: "adaptability",
        explanations: {
            guide: "抽象名词派生考点。位于形容词 great 之后，作 demonstrated 的宾语，表达展现出强大的“适应能力”，选派生名词 adaptability。",
            family: "adaptability (n.适应能力) | adapt (v.适应) | adapted (adj.适应的) | adaptable (adj.可适应的)。",
            details: "demonstrate adaptability 意为“展现适应能力”，常用于评价领导力与员工素质。",
            cn: "新经理在应对突发的运营变化时展现出了强大的适应能力。",
            jp: "新しいマネージャーは、突然の業務変更に対応する際、素晴らしい適応能力（adaptability）を発揮しました。"
        }
    },
    {
        id: 12,
        target: "suspend",
        category: "中等",
        stem: "The sudden ________ of train services caused widespread confusion among morning commuters.",
        options: ["suspension", "suspend", "suspended", "resignation"],
        correct: "suspension",
        explanations: {
            guide: "名词派生与主语中心词。位于定冠词 The 和形容词 sudden 之后，作句子的主语，表达列车服务的突然“暂停/停运”，选派生名词 suspension。",
            family: "suspension (n.暂停/停运) | suspend (v.暂停) | suspended (adj.被暂停的) | resignation (n.辞职)。",
            details: "suspension of services 意为“服务的暂停/停运”。suspend 为动词，无法在此处直接充当主语中心词。",
            cn: "列车服务的突然暂停给早晨的通勤者造成了范围广泛的混乱。",
            jp: "列車運行の突然の中断（suspension）は、朝の通勤者の間に広範な混乱を引き起こしました。"
        }
    },
    {
        id: 13,
        target: "resign",
        category: "困难",
        stem: "The board of directors accepted the CEO's formal ________ following the unexpected quarterly loss.",
        options: ["resignation", "resign", "resigned", "gratitude"],
        correct: "resignation",
        explanations: {
            guide: "名词派生与动宾搭配。作 accepted 的宾语，由形容词 formal（正式的）修饰，表达接受了首席执行官的正式“辞呈”，选名词 resignation。",
            family: "resignation (n.辞呈/辞职) | resign (v.辞职) | resigned (adj.已辞职的) | gratitude (n.感谢)。",
            details: "accept one's formal resignation 意为“接受某人的正式辞呈”。resign 是动词，不能直接放在 formal 之后作宾语。",
            cn: "在发生意料之外的季度亏损后，董事会接受了首席执行官的正式辞呈。",
            jp: "予想外の四半期赤字を受けて、取締役会はCEOの正式な辞表（resignation）を受理しました。"
        }
    },
    {
        id: 14,
        target: "luxury",
        category: "困难",
        stem: "The newly renovated resort offers ________ suites equipped with private balconies and spa facilities.",
        options: ["luxurious", "luxury", "luxuriously", "surprising"],
        correct: "luxurious",
        explanations: {
            guide: "派生形容词修饰名词。修饰名词 suites（套房），表达配备有私人的阳台和水疗设施的“奢华的”套房，选形容词 luxurious。",
            family: "luxurious (adj.奢华的) | luxury (n.奢华/奢侈品) | luxuriously (adv.奢华地) | surprising (adj.惊人的)。",
            details: "luxurious suites 意为“奢华套房”。luxurious 比名词 luxury 更适合直接作前置修饰形容词，强调豪华属性。",
            cn: "新翻修的度假村提供配备私人阳台和水疗设施的奢华套房。",
            jp: "新しく改修されたリゾートでは、プライベートバルコニーとスパ施設を備えた豪華な（luxurious）スイートルームを提供しています。"
        }
    },
    {
        id: 15,
        target: "statistics",
        category: "困难",
        stem: "The lead ________ presented a comprehensive data analysis that projected significant market growth.",
        options: ["statistician", "statistics", "statistical", "statistically"],
        correct: "statistician",
        explanations: {
            guide: "指人名词派生考点。位于定冠词 The 和形容词 lead（首席的）之后，充当句子的主语，且谓语动词为 presented（展示），选指代个人的名词 statistician（统计学家/统计分析师）。",
            family: "statistician (n.统计分析师) | statistics (n.统计数据) | statistical (adj.统计的) | statistically (adv.统计上)。",
            details: "lead statistician 指“首席统计分析师”。学科或数据名词 statistics 无法作为人格化主语去“展示数据分析”。",
            cn: "首席统计分析师展示了一份全面的数据分析，预测了显著的市场增长。",
            jp: "主任統計技師（statistician）は、大幅な市場成長を予測する包括的なデータ分析を提示しました。"
        }
    },
    {
        id: 16,
        target: "circumstance",
        category: "困难",
        stem: "The outdoor concert was canceled due to unforeseen ________ beyond the organizers' control.",
        options: ["circumstances", "circumstantial", "gratitude", "adaptations"],
        correct: "circumstances",
        explanations: {
            guide: "名词词义与固定高频短语。位于介词 due to 和形容词 unforeseen（不可预见的）之后，表达“由于不可抗力/不可预见的情况”，选复数名词 circumstances。",
            family: "circumstances (n.情况/境遇) | circumstantial (adj.依情况而定的) | gratitude (n.感谢) | adaptations (n.改写/适应)。",
            details: "due to unforeseen circumstances（由于不可预见的情况）是托业活动取消或延期通知中的绝对核心短语。",
            cn: "由于组织者无法控制的不可预见的情况，户外音乐会被取消了。",
            jp: "主催者の管理を超えた予期せぬ事情（circumstances）により、野外コンサートは中止となりました。"
        }
    },
    {
        id: 17,
        target: "strive",
        category: "困难",
        stem: "Through continuous innovation, the research division is ________ for breakthroughs in renewable energy.",
        options: ["striving", "strive", "striven", "suspending"],
        correct: "striving",
        explanations: {
            guide: "动词现在进行时与搭配。位于系/助动词 is 之后，与介词 for 构成进行时态结构 is striving for...（正在争取/追求……），选现在分词 striving。",
            family: "striving (pres-p.正在努力/追求) | strive (v.努力) | striven (past-p.已努力) | suspending (pres-p.正在暂停)。",
            details: "is striving for breakthroughs 意为“正在努力寻求突破”。strive for sth 是固定动宾介搭配。",
            cn: "通过持续创新，研究部门正努力在可再生能源领域寻求突破。",
            jp: "継続的な革新を通じて、研究部門は再生可能エネルギーの飛躍的進歩を目指して邁進しています（striving）。"
        }
    },
    {
        id: 18,
        target: "gratitude",
        category: "困难",
        stem: "The organization extended its ________ thanks to all sponsors who contributed to the annual gala.",
        options: ["grateful", "gratitude", "gratefully", "surprisingly"],
        correct: "grateful",
        explanations: {
            guide: "形容词修饰名词考点。修饰名词 thanks（感谢/谢意），表达表达其“感激的”谢意，选形容词 grateful。",
            family: "grateful (adj.感激的) | gratitude (n.感激) | gratefully (adv.感激地) | surprisingly (adv.出人意料地)。",
            details: "extend one's grateful thanks 意为“表达其感激的谢意”。gratitude 是名词，不能在此处修饰另一个名词 thanks。",
            cn: "该机构向所有为年度盛会做出贡献的赞助商表达了深切的谢意。",
            jp: "同団体は、年次ガラに貢献したすべてのスポンサーに感謝の（grateful）意を表しました。"
        }
    }
];