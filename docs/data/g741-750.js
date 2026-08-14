// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data441-450.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "scenic",
        pos: "形",
        ipa: "/ˈsiːnɪk/",
        cn: "风景优美的，景色秀丽的",
        jp: "景色の良い、風光明媚な",
        family: "scene / scenery / scenically",
        tips: "旅游与交通路线高频：scenic route/view（风景优美的路线/景色）。",
        desc: "We took the scenic route."
    },
    {
        word: "specification",
        pos: "名",
        ipa: "/ˌspesɪfɪˈkeɪʃn/",
        cn: "规格，说明书，技术要求",
        jp: "仕様書、明細事項、規格",
        family: "specify / specific / specifically",
        tips: "工程制造与采购高频：technical specifications（技术规格），meet specifications（符合规格标准）。",
        desc: "Check the product specifications."
    },
    {
        word: "insight",
        pos: "名",
        ipa: "/ˈɪnsaɪt/",
        cn: "见解，深刻洞察",
        jp: "洞察力、見識、深い理解",
        family: "insightful / insightfully",
        tips: "商务分析与研讨高频：gain valuable insight（获得宝贵见解），provide insight into sth（提供对……的深入洞察）。",
        desc: "She shared valuable insights."
    },
    {
        word: "bulk",
        pos: "名/形",
        ipa: "/bʌlk/",
        cn: "大批，大量；大批的",
        jp: "大量、大半；大量の",
        family: "bulky / bulkiness",
        tips: "采购与物流高频搭配：in bulk（大批量地），bulk order/discount（大宗订单/大宗折扣）。",
        desc: "They buy goods in bulk."
    },
    {
        word: "medication",
        pos: "名",
        ipa: "/ˌmedɪˈkeɪʃn/",
        cn: "药物，药剂",
        jp: "薬、薬剤、医薬品",
        family: "medicate / medical / medicated",
        tips: "医疗与健康高频：prescribe medication（开处方药），take medication（服药）。",
        desc: "Take this medication daily."
    },
    {
        word: "compartment",
        pos: "名",
        ipa: "/kəmˈpɑːrtmənt/",
        cn: "隔间，隔层，行李舱",
        jp: "仕切り、収納部、客室",
        family: "compartmentalize / compartments",
        tips: "航空与交通出行高频：overhead compartment（头顶行李舱），storage compartment（储物隔间）。",
        desc: "Open the overhead compartment."
    },
    {
        word: "facilitate",
        pos: "動",
        ipa: "/fəˈsɪlɪteɪt/",
        cn: "促进，促使，使便利",
        jp: "促進する、容易にする",
        family: "facilitator / facilitation / facility",
        tips: "企业管理与流程高频：facilitate communication/trade（促进沟通/贸易）。",
        desc: "Tools facilitate team collaboration."
    },
    {
        word: "nationwide",
        pos: "形/副",
        ipa: "/ˌneɪʃnˈwaɪd/",
        cn: "全国范围的；在全国范围内",
        jp: "全国的な；全国規模で",
        family: "nation / national / nationally",
        tips: "营销与连锁扩张高频：nationwide campaign/network（全国性营销活动/全国网络）。",
        desc: "The store expanded nationwide."
    },
    {
        word: "shareholder",
        pos: "名",
        ipa: "/ˈʃerhoʊldər/",
        cn: "股东",
        jp: "株主",
        family: "shareholders / shareholding",
        tips: "公司治理与财报核心词：annual shareholder meeting（年度股东大会），shareholder value（股东价值）。",
        desc: "Shareholders approved the merger."
    },
    {
        word: "informative",
        pos: "形",
        ipa: "/ɪnˈfɔːrmətɪv/",
        cn: "提供丰富信息的，增长见识的",
        jp: "情報に富んだ、有益な",
        family: "inform / information / informatively",
        tips: "培训与会议讲座高频：informative presentation/brochure（信息详实丰富的演说/宣传册）。",
        desc: "The lecture was very informative."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "medication",
        category: "简单",
        stem: "The doctor advised the patient to take the prescribed ________ twice a day after meals.",
        options: ["medication", "compartment", "shareholder", "specification"],
        correct: "medication",
        explanations: {
            guide: "医疗处方名词考点。prescribed ________ 结合遵医嘱一日两次饭后服用，选 medication（药物/药剂）。",
            family: "medication (n.药物) | compartment (n.行李舱) | shareholder (n.股东) | specification (n.规格)。",
            details: "prescribed medication 意为处方药。compartment（隔层）、shareholder（股东）均非服用对象。",
            cn: "医生建议患者在饭后每天服用两次处方药物。",
            jp: "医師は患者に対し、処方された薬剤（medication）を1日2回食後に服用するよう助言しました。"
        }
    },
    {
        id: 2,
        target: "bulk",
        category: "简单",
        stem: "Purchasing office supplies in ________ allows companies to receive substantial volume discounts.",
        options: ["bulk", "insight", "scenic", "facilitate"],
        correct: "bulk",
        explanations: {
            guide: "商业采购固定介词短语。in ________ 属于商务高频短语，表达“大批量地”采购，选 bulk。",
            family: "bulk (n.大批量) | insight (n.洞察) | scenic (adj.优美的) | facilitate (v.促进)。",
            details: "in bulk 意为大批量地/散装地。insight（见解）、scenic（风景好的）均不能与 in 构成大宗采购短语。",
            cn: "大批量采购办公用品使公司能够获得可观的批量折扣。",
            jp: "事務用品を大量（bulk）に購入することで、企業は大幅な数量割引を受けることができます。"
        }
    },
    {
        id: 3,
        target: "scenic",
        category: "简单",
        stem: "Tourists enjoyed driving along the ________ coastal highway overlooking the Pacific Ocean.",
        options: ["scenic", "informative", "nationwide", "compartment"],
        correct: "scenic",
        explanations: {
            guide: "修饰景观道路的形容词。修饰 coastal highway（沿海公路），表达“风景优美的”，选 scenic。",
            family: "scenic (adj.风景优美的) | informative (adj.信息丰富的) | nationwide (adj.全国性的) | compartment (n.隔间)。",
            details: "scenic coastal highway 意为风景秀丽的沿海公路。informative（提供信息的）不能修饰自然风景道路。",
            cn: "游客们喜欢沿着俯瞰太平洋的风景秀丽的沿海公路驾车行驶。",
            jp: "観光客は太平洋を見渡す景色の良い（scenic）海岸沿いのハイウェイをドライブすることを楽しみました。"
        }
    },
    {
        id: 4,
        target: "shareholder",
        category: "简单",
        stem: "The corporation will hold its annual ________ meeting next Thursday to vote on executive appointments.",
        options: ["shareholder", "medication", "specification", "bulk"],
        correct: "shareholder",
        explanations: {
            guide: "公司治理专有名词定语。annual ________ meeting 属于托业最高频词组之一，意为“年度股东大会”，选 shareholder。",
            family: "shareholder (n.股东) | medication (n.药物) | specification (n.规格) | bulk (n.大量)。",
            details: "annual shareholder meeting 意为年度股东大会。其余选项均非投票决定高管任命的会议主体。",
            cn: "该公司将于下周四举行年度股东大会，就高管任命进行投票表决。",
            jp: "同社は役員の選任について投票するため、来週の木曜日に年次株主（shareholder）総会を開催します。"
        }
    },
    {
        id: 5,
        target: "informative",
        category: "简单",
        stem: "Attendees praised the workshop for its clear slides and ________ presentation on emerging market trends.",
        options: ["informative", "scenic", "shareholder", "medication"],
        correct: "informative",
        explanations: {
            guide: "演说评价形容词考点。修饰 presentation（演示/讲座），表达内容“信息丰富详实的”，选 informative。",
            family: "informative (adj.信息丰富的/有益的) | scenic (adj.风景好的) | shareholder (n.股东) | medication (n.药物)。",
            details: "informative presentation 意为内容丰富详实的演示。scenic 用来修饰自然景色，不能修饰室内商业讲座。",
            cn: "与会者称赞该研讨会幻灯片清晰，且关于新兴市场趋势的演说内容详实丰富。",
            jp: "参加者は、明確なスライドと新興市場動向に関する情報豊富で有益な（informative）プレゼンテーションを称賛しました。"
        }
    },
    {
        id: 6,
        target: "compartment",
        category: "简单",
        stem: "Flight attendants instructed passengers to place all small carry-on bags in the overhead ________.",
        options: ["compartment", "insight", "facilitate", "nationwide"],
        correct: "compartment",
        explanations: {
            guide: "机舱设施名词考点。overhead ________ 属于航空客运核心固定词组，表达“头顶行李舱”，选 compartment。",
            family: "compartment (n.隔舱/隔间) | insight (n.见解) | facilitate (v.促进) | nationwide (adj.全国的)。",
            details: "overhead compartment 意为头顶行李舱。insight（见解）、facilitate（促进）均非飞机机舱内的储物设施。",
            cn: "乘务员指示乘客将所有随身小手提包放入头顶行李舱中。",
            jp: "客室乗務員は乗客に対し、小さな機内持ち込みバッグをすべて頭上の収納棚（compartment）に入れるよう指示しました。"
        }
    },
    {
        id: 7,
        target: "facilitate",
        category: "中等",
        stem: "The new project management software was implemented to ________ smoother collaboration across international teams.",
        options: ["facilitate", "specification", "insightful", "shareholder"],
        correct: "facilitate",
        explanations: {
            guide: "动词不定式考点。was implemented to 后面接动词原形，表达实施新软件以“促进/促成”跨国团队顺畅协作，选 facilitate。",
            family: "facilitate (v.促进/使便利) | specification (n.规格) | insightful (adj.有洞察力的) | shareholder (n.股东)。",
            details: "to facilitate collaboration 意为促进合作。specification 是名词，insightful 是形容词，均不能作不定式动词。",
            cn: "实施新的项目管理软件旨在促进跨国团队之间更顺畅的协作。",
            jp: "新しいプロジェクト管理ソフトウェアは、国際チーム間のより円滑な協業を促進する（facilitate）ために導入されました。"
        }
    },
    {
        id: 8,
        target: "specification",
        category: "中等",
        stem: "Contractors must carefully review the architectural ________ before beginning construction on the foundation.",
        options: ["specifications", "specification", "medications", "compartments"],
        correct: "specifications",
        explanations: {
            guide: "工程文件复数名词。architectural ________ 指施工前必须审阅的建筑“设计规范/技术要求规格书”，用复数 specifications。",
            family: "specifications (n.复数规格书/技术要求) | specification (n.单数) | medications (n.药物) | compartments (n.隔间)。",
            details: "architectural specifications 意为建筑技术规格书。工程详图与指标集合泛指时固定采用复数形式 specifications。",
            cn: "承包商在开始地基施工之前必须仔细审查建筑技术规范要求。",
            jp: "請負業者は基礎工事を開始する前に、建築仕様書（specifications）を注意深く確認しなければなりません。"
        }
    },
    {
        id: 9,
        target: "insight",
        category: "中等",
        stem: "The guest speaker provided valuable ________ into the challenges facing the global supply chain.",
        options: ["insight", "insightful", "scenic", "nationwide"],
        correct: "insight",
        explanations: {
            guide: "抽象名词宾语考点。provided valuable ________ into... 结构中，形容词 valuable 后面接名词，表达提供宝贵的“见解/深刻洞察”，选 insight。",
            family: "insight (n.见解/洞察力) | insightful (adj.富有洞察力的) | scenic (adj.风景好的) | nationwide (adj.全国性的)。",
            details: "provide valuable insight into... 属于托业经典搭配，意为对……提供宝贵见解。insightful 是形容词，不能直接作 provided 的宾语中心语。",
            cn: "特邀演讲嘉宾对全球供应链面临的挑战提供了宝贵的深刻见解。",
            jp: "招待講演者は、世界的なサプライチェーンが直面している課題について貴重な見解（insight）を提供しました。"
        }
    },
    {
        id: 10,
        target: "nationwide",
        category: "中等",
        stem: "The retail chain launched a ________ marketing campaign to introduce its new eco-friendly product line.",
        options: ["nationwide", "informative", "compartment", "facilitator"],
        correct: "nationwide",
        explanations: {
            guide: "营销活动前置定语。a ________ marketing campaign 表达连锁店在全境推开的“全国性的”营销活动，选 nationwide。",
            family: "nationwide (adj.全国性的/adv.全国地) | informative (adj.信息丰富的) | compartment (n.隔间) | facilitator (n.引导者)。",
            details: "nationwide marketing campaign 意为全国性营销活动。强调地理覆盖范围延伸至全国各地。",
            cn: "该零售连锁店发起了一场全国性的营销活动，以推广其新的环保产品系列。",
            jp: "その小売りチェーンは、環境に優しい新製品ラインを紹介するために全国的な（nationwide）マーケティングキャンペーンを開始しました。"
        }
    },
    {
        id: 11,
        target: "compartment",
        category: "中等",
        stem: "The executive leather briefcase features several padded ________ designed specifically to protect electronic devices.",
        options: ["compartments", "compartment", "shareholders", "specifications"],
        correct: "compartments",
        explanations: {
            guide: "储物设施复数名词。several padded ________ 结合公文包内保护电子设备的加垫“分隔层/储物格”，选复数 compartments。",
            family: "compartments (n.复数隔层/隔间) | compartment (n.单数) | shareholders (n.股东) | specifications (n.规格)。",
            details: "padded compartments 意为加垫隔层。several 限定词要求后接复数可数名词 compartments。",
            cn: "这款行政真皮公文包配有数个专门用于保护电子设备的加垫隔层。",
            jp: "そのエグゼクティブ向け本革ブリーフケースには、電子機器を保護するために特別に設計されたいくつかのパッド入り収納部（compartments）が備わっています。"
        }
    },
    {
        id: 12,
        target: "bulk",
        category: "中等",
        stem: "Commercial clients are eligible for lower shipping rates when placing ________ orders for industrial equipment.",
        options: ["bulk", "bulky", "insight", "scenic"],
        correct: "bulk",
        explanations: {
            guide: "名词作前置定语考点。________ orders 属于采购专有名词，意为“大宗订单/大批量订购”，选 bulk。",
            family: "bulk (n./adj.大宗/大量) | bulky (adj.体积庞大笨重的) | insight (n.见解) | scenic (adj.风景好的)。",
            details: "bulk orders 意为大宗采购订单。注意区分 bulky（笨重的/体积大的），采购大宗产品使用 bulk order。",
            cn: "商业客户在订购大宗工业设备订单时有资格享受更低的运费费率。",
            jp: "法人顧客は、産業機器の大量（bulk）注文を行う際に、より安価な配送料金を利用する資格があります。"
        }
    },
    {
        id: 13,
        target: "informative",
        category: "困难",
        stem: "Participants commended the keynote speaker for delivering an exceptionally ________ address on artificial intelligence.",
        options: ["informative", "informatively", "information", "inform"],
        correct: "informative",
        explanations: {
            guide: "派生形容词修饰名词。an exceptionally ________ address 结构中，副词 exceptionally 后面接形容词修饰演讲，选 informative（内容详实的）。",
            family: "informative (adj.信息丰富的/有见识的) | informatively (adv.信息丰富地) | information (n.信息) | inform (v.通知)。",
            details: "an informative address 意为内容充实详尽的演说。informatively 是副词，information 是名词，均不能在此充当 address 的前置修饰定语。",
            cn: "与会者赞扬主旨演讲嘉宾就人工智能发表了一场内容极其充实详尽的演说。",
            jp: "参加者は、人工知能に関する非常に情報豊富で有益な（informative）講演を行った基調講演者を称賛しました。"
        }
    },
    {
        id: 14,
        target: "insight",
        category: "困难",
        stem: "The management consulting firm's report contained highly ________ recommendations on optimizing logistics operations.",
        options: ["insightful", "insight", "insightfully", "facilitation"],
        correct: "insightful",
        explanations: {
            guide: "派生形容词考点。contained highly ________ recommendations 结构中，副词 highly 后面接形容词修饰建议，选 insightful（富有洞察力的/深刻的）。",
            family: "insightful (adj.富有洞察力的/深刻的) | insight (n.见解) | insightfully (adv.有洞察力地) | facilitation (n.促进)。",
            details: "insightful recommendations 意为富有真知灼见的建议。insight 是名词，不能被副词 highly 修饰作为定语。",
            cn: "该管理咨询公司的报告包含了关于优化物流运营的高度富有洞察力的建议。",
            jp: "経営コンサルティング会社の報告書には、物流業務の最適化に関する非常に洞察力に満ちた（insightful）提言が含まれていました。"
        }
    },
    {
        id: 15,
        target: "facilitate",
        category: "困难",
        stem: "The appointment of an experienced project ________ helped resolve contractual disputes between the two merging firms.",
        options: ["facilitator", "facilitate", "facilitation", "facilitated"],
        correct: "facilitator",
        explanations: {
            guide: "派生人物名词考点。The appointment of an experienced project ________ 表达任命一位经验丰富的项目“协调人/引导者”，选 facilitator。",
            family: "facilitator (n.协调人/引导者) | facilitate (v.促进) | facilitation (n.促进/协调行为) | facilitated (v-ed受到促进的)。",
            details: "project facilitator 指项目协调人/调解员。facilitation 指抽象行为过程，在此处 appointment of 后接具体被任命的人员名词 facilitator。",
            cn: "任命一位经验丰富的项目协调人有助于化解两家合并公司之间的合同争议。",
            jp: "経験豊富なプロジェクト推進者/調整役（facilitator）の任命は、合併する2社間の契約上の紛争を解決するのに役立ちました。"
        }
    },
    {
        id: 16,
        target: "specification",
        category: "困难",
        stem: "The procurement agreement clearly ________ that all replacement parts must arrive within twenty-four hours.",
        options: ["specifies", "specifications", "specifically", "specifying"],
        correct: "specifies",
        explanations: {
            guide: "从句谓语动词单三形式。主语为 The procurement agreement（单数），后接谓语动词，表达合同明确“规定/载明”条款，选 specifies。",
            family: "specifies (v.三单载明/规定) | specifications (n.规格) | specifically (adv.具体地) | specifying (v-ing)。",
            details: "agreement clearly specifies that... 属于合同法律高频句式，意为协议明确载明……。specifications 是名词，不能在句中作谓语动词。",
            cn: "采购协议明确规定所有替换零件必须在二十四小时内送达。",
            jp: "調達契約書には、すべての交換部品が24時間以内に到着しなければならないと明確に規定されて（specifies）います。"
        }
    },
    {
        id: 17,
        target: "shareholder",
        category: "困难",
        stem: "The executive committee prioritizes maximizing long-term ________ value through sustainable business investments.",
        options: ["shareholder", "shareholders", "shareholding", "facilitation"],
        correct: "shareholder",
        explanations: {
            guide: "商业金融复合名词定语。long-term ________ value 属于财务管理最高频专属词组，意为“股东价值”，选单数名词 shareholder 作定语。",
            family: "shareholder (n.股东) | shareholders (n.复数) | shareholding (n.股权) | facilitation (n.促进)。",
            details: "shareholder value 属于固定金融术语（股东价值）。作前置定语修饰抽象名词 value 时习惯采用单数形式 shareholder（如 shareholder return/value）。",
            cn: "执行委员会优先考虑通过可持续的商业投资来最大化长期的股东价值。",
            jp: "執行委員会は、持続可能な事業投資を通じて長期的な株主（shareholder）価値を最大化することを最優先事項としています。"
        }
    },
    {
        id: 18,
        target: "scenic",
        category: "困难",
        stem: "Tourists choose the alpine railway journey primarily because of the breathtaking mountain ________ along the route.",
        options: ["scenery", "scenic", "scenically", "specification"],
        correct: "scenery",
        explanations: {
            guide: "派生不可数名词考点。the breathtaking mountain ________ 结构中，形容词 mountain 后面接名词中心语，表达令人叹为观止的高山“景色/风光”，选 scenery。",
            family: "scenery (n.景色/风光) | scenic (adj.风景秀丽的) | scenically (adv.风光优美地) | specification (n.规格)。",
            details: "mountain scenery 意为高山风光/风景。scenic 是形容词，不能直接在冠词与形容词修饰下作介词 because of 的名词中心语。",
            cn: "游客选择这条高山铁路之旅，主要是因为沿途令人叹为观止的高山风光。",
            jp: "観光客がこの高山鉄道の旅を選ぶ主な理由は、ルート沿いの息をのむような山岳の景色（scenery）にあります。"
        }
    }
];