// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data41-50.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "unveil",
        pos: "動",
        ipa: "/ʌnˈveɪl/",
        cn: "公布，揭幕，推出（新产品）",
        jp: "発表する、初公開する、明らかにする",
        family: "unveiling / veiled",
        tips: "商务高频动词，常用于新产品发布会或企业战略公布（unveil a new product / unveil expansion plans）。",
        desc: "The company will unveil its new smartphone tomorrow."
    },
    {
        word: "artisan",
        pos: "名/形",
        ipa: "/ˈɑːrtəzn/",
        cn: "工匠，手艺人；手工制作的",
        jp: "職人、熟練工；職人技の、手作りの",
        family: "artisanal / artisanship",
        tips: "常用于描述高品质传统手工制品（artisan bakery / artisanal cheese），形容词形式 artisanal 也是高频考点。",
        desc: "The bread is baked by a local artisan."
    },
    {
        word: "top-notch",
        pos: "形",
        ipa: "/ˌtɑːp ˈnɑːtʃ/",
        cn: "顶尖的，第一流的，高品质的",
        jp: "一流の一流の、最高の、最高級の",
        family: "notch",
        tips: "商业宣传与客户评价中常见的高阶形容词，常修饰服务、设施或专家团队（top-notch service / top-notch facilities）。",
        desc: "The hotel offers top-notch service."
    },
    {
        word: "distraction",
        pos: "名",
        ipa: "/dɪˈstrækʃn/",
        cn: "分心的事物，分散注意力的因素",
        jp: "気を散らすもの、気晴らし、注意散漫",
        family: "distract / distracted / distracting",
        tips: "职场办公效率常考词汇（minimize distractions 减少干扰；without distraction 专心致志地）。",
        desc: "Noise is a big distraction in the office."
    },
    {
        word: "autograph",
        pos: "名/動",
        ipa: "/ˈɔːtəɡræf/",
        cn: "亲笔签名；在……上亲笔签名",
        jp: "（有名人の）サイン；サインをする",
        family: "autographed / autographing",
        tips: "多指名人、作家或运动员的亲笔签名，常考搭配：autograph session（签名会）、autographed copy（签名版书本）。",
        desc: "The author will autograph books after the talk."
    },
    {
        word: "influential",
        pos: "形",
        ipa: "/ˌɪnfluˈenʃl/",
        cn: "有很大影响力的，有权势的",
        jp: "影響力のある、有力な",
        family: "influence / influenced / influencer",
        tips: "常修饰行业领袖、分析报告或重要刊物（an influential leader / influential study），后常接介词 in / on。",
        desc: "She is an influential business leader."
    },
    {
        word: "attribute",
        pos: "動/名",
        ipa: "/əˈtrɪbjuːt/ (v.), /ˈætrɪbjuːt/ (n.)",
        cn: "把……归因于；特性，品质",
        jp: "〜のせいにする、〜に帰する；特性、属性",
        family: "attribution / attributable",
        tips: "核心短语搭配：attribute A to B（把 A 归因于 B）。作名词时重音在首音节，意为“特质、品质/属性”。",
        desc: "He attributes his success to hard work."
    },
    {
        word: "dominate",
        pos: "動",
        ipa: "/ˈdɑːmɪneɪt/",
        cn: "在……中占主要地位，主导，支配",
        jp: "支配する、優位に立つ、主導する",
        family: "dominance / dominant / domination",
        tips: "商业竞争场景核心考点（dominate the market 占领/主导市场）。其形容词 dominant（占支配地位的）也是高频重点。",
        desc: "The brand continues to dominate the market."
    },
    {
        word: "breakdown",
        pos: "名",
        ipa: "/ˈbreɪkdaʊn/",
        cn: "明细表，分类明细；故障，失灵",
        jp: "内訳、明細；（機械の）故障、決裂",
        family: "break down",
        tips: "托业双重考点：1. 财务预算明细（a detailed cost breakdown）；2. 机械设备故障（equipment breakdown）。",
        desc: "Please provide a breakdown of the costs."
    },
    {
        word: "sophisticated",
        pos: "形",
        ipa: "/səˈfɪstɪkeɪtɪd/",
        cn: "尖端的，精密的，先进的；老练的",
        jp: "洗練された、高性能な、高度な",
        family: "sophistication / unsophisticated",
        tips: "修饰系统、仪器或技术时表示“先进复杂的”（sophisticated technology / sophisticated software）；修饰人时指富有经验的。",
        desc: "The lab uses sophisticated equipment."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "unveil",
        category: "简单",
        stem: "The technology company is scheduled to ________ its latest line of laptops at the trade show tomorrow.",
        options: ["unveil", "unveiling", "distraction", "artisan"],
        correct: "unveil",
        explanations: {
            guide: "固定句型与不定式考点。be scheduled to 后面需要接动词原形，表达科技公司“公布/推出”新笔记本电脑产品，选 unveil。",
            family: "unveil (v.公布/推出) | unveiling (n.发布会) | distraction (n.干扰) | artisan (n.工匠)。",
            details: "to 为不定式符号，后面必须接动词原形。unveiling 是动名词或现在分词，不能在不定式符号后直接充当核心动词。",
            cn: "该科技公司计划在明天的贸易展上公布其最新的笔记本电脑产品线。",
            jp: "そのテクノロジー企業は、明日の見本市で最新のノートパソコン製品ラインを発表（unveil）する予定です。"
        }
    },
    {
        id: 2,
        target: "autograph",
        category: "简单",
        stem: "Fans lined up around the block to get a signed ________ from the best-selling mystery novelist.",
        options: ["autograph", "autographed", "dominate", "influential"],
        correct: "autograph",
        explanations: {
            guide: "不定冠词与形容词后的名词。在 a signed ________ 结构中，形容词 signed 后面需要接名词单数，表示获取“亲笔签名”，选 autograph。",
            family: "autograph (n./v.亲笔签名) | autographed (adj.有签名的) | dominate (v.主导) | influential (adj.有影响力的)。",
            details: "get an autograph 表示索要/获取亲笔签名。autographed 是分词形容词，不能直接放在形容词 signed 后作宾语中心词。",
            cn: "粉丝们绕着街区排起长队，只为获得这位畅销悬疑小说家的一份亲笔签名。",
            jp: "ファンはベストセラーの推理小説家からサイン入りのサイン（autograph）をもらうために、街区を囲むように並びました。"
        }
    },
    {
        id: 3,
        target: "top-notch",
        category: "简单",
        stem: "The new boutique hotel received rave reviews for offering ________ customer service to all guests.",
        options: ["top-notch", "notch", "breakdown", "attribute"],
        correct: "top-notch",
        explanations: {
            guide: "形容词修饰名词。空格处需要填入形容词修饰后面的名词短语 customer service，表示提供“顶尖的/一流的”客户服务，选 top-notch。",
            family: "top-notch (adj.顶尖的) | notch (n.等级/凹口) | breakdown (n.明细/故障) | attribute (v./n.归因/特质)。",
            details: "top-notch service 是托业高频好评用语。breakdown 与 attribute 词性与语义均不符合修饰客户服务的要求。",
            cn: "这家新精品酒店因向所有客人提供顶尖的客户服务而获得了极高的评价。",
            jp: "新しいブティックホテルは、すべての宿泊客に一流の（top-notch）カスタマーサービスを提供したことで絶賛されました。"
        }
    },
    {
        id: 4,
        target: "distraction",
        category: "简单",
        stem: "Employees are advised to mute their personal mobile phones to avoid any unnecessary ________ during meetings.",
        options: ["distraction", "distract", "sophisticated", "unveil"],
        correct: "distraction",
        explanations: {
            guide: "限定词与形容词后的名词中心语。any unnecessary 后面需要接名词，表达避免“分心/干扰”，选名词 distraction。",
            family: "distraction (n.分心/干扰) | distract (v.使分心) | sophisticated (adj.尖端的) | unveil (v.公布)。",
            details: "avoid distraction 意为避免干扰。distract 是动词，不能被形容词 unnecessary 修饰充当介词短语的宾语。",
            cn: "建议员工将个人手机静音，以避免在会议期间造成任何不必要的干扰。",
            jp: "従業員は、会議中の不要な気晴らし・妨害（distraction）を避けるために、個人の携帯電話をマナーモードにすることが推奨されます。"
        }
    },
    {
        id: 5,
        target: "dominate",
        category: "简单",
        stem: "With its innovative electric vehicles, the manufacturer aims to ________ the global automotive market.",
        options: ["dominate", "dominant", "artisan", "autograph"],
        correct: "dominate",
        explanations: {
            guide: "动词不定式搭配。aims to 后面必须接动词原形，后接宾语 the global automotive market，表示“主导/支配”市场，选 dominate。",
            family: "dominate (v.主导/支配) | dominant (adj.占主导地位的) | artisan (n.工匠) | autograph (n./v.签名)。",
            details: "dominate the market 属于商业核心固定搭配。dominant 是形容词，不能在不定式符号 to 后面作谓语动词。",
            cn: "凭借其创新的电动汽车，该制造商旨在主导全球汽车市场。",
            jp: "そのメーカーは革新的な電気自動車によって、世界的な自動車市場を支配する（dominate）ことを目指しています。"
        }
    },
    {
        id: 6,
        target: "breakdown",
        category: "简单",
        stem: "The finance department requested a complete ________ of travel expenses before processing the reimbursement.",
        options: ["breakdown", "break down", "influential", "top-notch"],
        correct: "breakdown",
        explanations: {
            guide: "不定冠词与形容词后的名词。在 a complete ________ 结构中，需要填入名词形式，表达费用的“细目分析/明细表”，选 breakdown。",
            family: "breakdown (n.明细/故障) | break down (v phr.分解/故障) | influential (adj.有影响力的) | top-notch (adj.一流的)。",
            details: "a complete breakdown of expenses 意为完整的开支明细。break down 是动词短语，不能作为名词中心语被冠词 a 修饰。",
            cn: "财务部在处理报销之前，要求提供一份完整的差旅费用明细表。",
            jp: "経理部門は、払い戻しを処理する前に、出張費用の完全な内訳（breakdown）を要求しました。"
        }
    },
    {
        id: 7,
        target: "artisan",
        category: "中等",
        stem: "The specialty grocery store features a wide variety of ________ cheeses handcrafted by regional producers.",
        options: ["artisanal", "artisan", "distracted", "dominance"],
        correct: "artisanal",
        explanations: {
            guide: "形容词作定语修饰名词。空格处修饰复数名词 cheeses，表达“手工制作的/传统工艺的”乳酪，选用派生形容词 artisanal。",
            family: "artisanal (adj.手工艺的/手工制造的) | artisan (n.工匠) | distracted (adj.心烦意乱的) | dominance (n.主导地位)。",
            details: "artisanal cheeses 意为手工精制乳酪，是托业餐饮及零售场景的高频词。artisan 通常作名词表示工匠个人，此处形容词 artisanal 修饰商品更精确。",
            cn: "这家特色杂货店提供由当地生产者手工制作的各种传统手工乳酪。",
            jp: "その専門店では、地元の生産者によって手作りされた多種多様な職人技の（artisanal）チーズを取り揃えています。"
        }
    },
    {
        id: 8,
        target: "influential",
        category: "中等",
        stem: "Dr. Vance is considered one of the most ________ economists in the field of renewable energy research.",
        options: ["influential", "influence", "breakdown", "unveil"],
        correct: "influential",
        explanations: {
            guide: "形容词最高级结构。one of the most 后面需要接多音节形容词原级构成最高级，修饰名词 economists，选 influential（有影响力的）。",
            family: "influential (adj.有很大影响力的) | influence (n./v.影响) | breakdown (n.明细/故障) | unveil (v.公布)。",
            details: "the most influential economists 意为最有影响力的经济学家。influence 是名词或动词，不能与 the most 组合修饰名词复数。",
            cn: "万斯博士被认为是可再生能源研究领域最具影响力的经济学家之一。",
            jp: "ヴァンス博士は、再生可能エネルギー研究の分野で最も影響力のある（influential）経済学者の一人と見なされています。"
        }
    },
    {
        id: 9,
        target: "attribute",
        category: "中等",
        stem: "Industry analysts ________ the sudden surge in quarterly profits to the success of the recent promotional campaign.",
        options: ["attribute", "attribution", "sophisticated", "autograph"],
        correct: "attribute",
        explanations: {
            guide: "谓语动词及动介搭配。主语是复数名词 analysts，后面紧跟宾语 the sudden surge... 并与后面的介词 to 呼应，构成 attribute A to B（把…归因于…）。",
            family: "attribute (v.归因于/n.品质) | attribution (n.归属/归因) | sophisticated (adj.尖端的) | autograph (n./v.签名)。",
            details: "attribute... to... 是托业高频商务因果动词搭配。attribution 是名词，不能在句子中充当谓语动词。",
            cn: "行业分析师将季度利润的突然激增归因于近期促销活动的成功。",
            jp: "業界のアナリストは、四半期利益の急増を最近のプロモーションキャンペーンの成功によるものと説明して（attribute）います。"
        }
    },
    {
        id: 10,
        target: "sophisticated",
        category: "中等",
        stem: "The laboratory purchased a ________ diagnostic software system to detect network security vulnerabilities faster.",
        options: ["sophisticated", "sophistication", "dominate", "artisan"],
        correct: "sophisticated",
        explanations: {
            guide: "形容词作定语修饰名词系统。冠词 a 与名词 short system 之间需要填入形容词，表示“尖端的/精密的”软件系统，选 sophisticated。",
            family: "sophisticated (adj.尖端的/先进的) | sophistication (n.精密/老练) | dominate (v.支配) | artisan (n.工匠)。",
            details: "a sophisticated diagnostic software system 意为尖端的诊断软件系统。sophistication 是名词，无法作定语修饰名词词组。",
            cn: "该实验室购买了一套先进的诊断软件系统，以更快地检测网络安全漏洞。",
            jp: "研究室は、ネットワークのセキュリティ脆弱性をより迅速に検出するために、高度な（sophisticated）診断ソフトウェアシステムを購入しました。"
        }
    },
    {
        id: 11,
        target: "unveil",
        category: "中等",
        stem: "At the upcoming press briefing, the municipal board will ________ its five-year infrastructure improvement plan.",
        options: ["unveil", "unveiled", "distraction", "influential"],
        correct: "unveil",
        explanations: {
            guide: "情态动词后的动词原形。will 后面需要加动词原形充当谓语，表达市政委员会将“公布”五年规划，选 unveil。",
            family: "unveil (v.公布/揭幕) | unveiled (v-ed形式) | distraction (n.干扰) | influential (adj.有影响力的)。",
            details: "will unveil 构成一般将来时谓语结构。unveiled 是过去式或过去分词，不能直接紧跟在情态动词 will 之后。",
            cn: "在即将举行的新闻发布会上，市政委员会将公布其五年基础设施改善计划。",
            jp: "今度の記者会見で、市街委員会は5カ年のインフラ改善計画を正式に発表（unveil）する予定です。"
        }
    },
    {
        id: 12,
        target: "dominate",
        category: "中等",
        stem: "Despite fierce competition from newer startups, the corporation has maintained a ________ market position.",
        options: ["dominant", "dominate", "top-notch", "breakdown"],
        correct: "dominant",
        explanations: {
            guide: "形容词修饰名词。在 a ________ market position 结构中，需要填入形容词修饰市场地位，表达“主导性的/占支配地位的”，选用派生形容词 dominant。",
            family: "dominant (adj.占主导地位的) | dominate (v.主导/支配) | top-notch (adj.顶尖的) | breakdown (n.明细/故障)。",
            details: "dominant market position 是商业分析中的标准术语。dominate 是动词，不能直接放在冠词 a 后面作定语修饰名词。",
            cn: "尽管面临来自新兴初创企业的激烈竞争，该跨国公司依然保持着主导的市场地位。",
            jp: "新しい新興企業との激しい競争にもかかわらず、その企業は支配的な（dominant）市場地位を維持しています。"
        }
    },
    {
        id: 13,
        target: "attribute",
        category: "困难",
        stem: "Leadership potential and adaptability under pressure are essential ________ sought by modern corporate recruiters.",
        options: ["attributes", "attributions", "distractions", "unveilings"],
        correct: "attributes",
        explanations: {
            guide: "名词词义与复数主谓一致。主语是复数概念（领导潜力与适应力），空格处在系动词 are 后面作表语名词，表示重要的“特质/品质”，选复数名词 attributes。",
            family: "attributes (n.特质/属性/复数) | attributions (n.归因/归属) | distractions (n.干扰因素) | unveilings (n.公布/发布会)。",
            details: "attribute 作名词时意为“特性/品质”，essential attributes 指不可或缺的品质。attributions 意为“归因”，不符合句中描述人的素质这一逻辑。",
            cn: "领导潜力和压力下的适应能力是现代企业招聘人员所看重的重要特质。",
            jp: "指導力の可能性とプレッシャー下での適応力は、現代の企業の採用担当者が求める不可欠な特質（attributes）です。"
        }
    },
    {
        id: 14,
        target: "sophisticated",
        category: "困难",
        stem: "Due to the increasing ________ of cyber threats, the IT department implemented multi-factor authentication protocols.",
        options: ["sophistication", "sophisticated", "influential", "artisan"],
        correct: "sophistication",
        explanations: {
            guide: "名词作介词短语核心语。the increasing ________ of 结构中，现在分词 increasing 修饰后面的名词，表达网络威胁日渐上升的“精密性/复杂程度”，选名词 sophistication。",
            family: "sophistication (n.精密/复杂性) | sophisticated (adj.尖端的) | influential (adj.有影响力的) | artisan (n.工匠)。",
            details: "the sophistication of threats 指威胁的复杂精密程度。sophisticated 是形容词，不能在定冠词 the 与分词定语后充当名词核心词。",
            cn: "由于网络安全威胁的日益复杂与精密，IT 部门实施了多重身份验证协议。",
            jp: "サイバー脅威の高度化・複雑化（sophistication）が進んでいるため、IT部門は多要素認証プロトコルを導入しました。"
        }
    },
    {
        id: 15,
        target: "autograph",
        category: "困难",
        stem: "The charity auction will feature a rare, ________ first-edition copy of the former prime minister's historical memoir.",
        options: ["autographed", "autograph", "dominating", "breakdown"],
        correct: "autographed",
        explanations: {
            guide: "分词作定语修饰名词。空格位于形容词 rare 后面，修饰名词短语 first-edition copy（初版书），表示被作者“亲笔签名的”，需使用过去分词形容词 autographed。",
            family: "autographed (adj.亲笔签名的) | autograph (n./v.签名) | dominating (adj.主导的) | breakdown (n.故障/明细)。",
            details: "an autographed copy 是托业文化与拍卖场景中的专属表达（签名版书籍）。autograph 原形无法直接作定语修饰后面的 copy。",
            cn: "本次慈善拍卖会将推出前首相历史回忆录的珍贵亲笔签名初版书。",
            jp: "慈善オークションでは、元首相の歴史的回顧録の希少な直筆サイン入り（autographed）初版が出品されます。"
        }
    },
    {
        id: 16,
        target: "distraction",
        category: "困难",
        stem: "Employees working in the open-plan office found the continuous construction noise to be highly ________.",
        options: ["distracting", "distraction", "top-notch", "attribute"],
        correct: "distracting",
        explanations: {
            guide: "复合宾语结构与分词形容词。found + 宾语 + to be + 宾语补足语（形容词）。副词 highly 修饰该补足语，表示施工噪音“极易令人分心的”，选用 -ing 形容词 distracting。",
            family: "distracting (adj.令人分心的) | distraction (n.干扰事物) | top-notch (adj.顶尖的) | attribute (v./n.归因/特质)。",
            details: "find sth to be distracting 属于高阶阅读句型，表示发觉某事物令人分心。distraction 是名词，不能被程度副词 highly 直接修饰充当形容词性宾补。",
            cn: "在开放式办公室工作的员工发现，持续不断的施工噪音极易让人分心。",
            jp: "オープンオフィスの従業員は、継続的な工事の騒音が非常に気が散る（distracting）ものであると感じました。"
        }
    },
    {
        id: 17,
        target: "influential",
        category: "困难",
        stem: "The keynote speaker exercised considerable ________ over the committee's final resolution on clean energy guidelines.",
        options: ["influence", "influential", "breakdown", "unveiling"],
        correct: "influence",
        explanations: {
            guide: "高阶商务搭配与名词用法。动词 exercise（施加/运用）与介词 over 搭配，中间由形容词 considerable（相当大的）修饰，构成 exercise influence over...（对…施加影响），选名词 influence。",
            family: "influence (n./v.影响/影响力) | influential (adj.有影响力的) | breakdown (n.明细/故障) | unveiling (n.发布/公布)。",
            details: "exercise influence over 是托业高阶阅读固定搭配。influential 是形容词，不能直接放在动词 exercised 和形容词 considerable 之后作宾语。",
            cn: "主讲嘉宾对委员会关于清洁能源准则的最终决议施加了相当大的影响力。",
            jp: "基調講演者は、クリーンエネルギー指針に関する委員会の最終決議に対して少なからぬ影響力（influence）を行使しました。"
        }
    },
    {
        id: 18,
        target: "breakdown",
        category: "困难",
        stem: "An unexpected mechanical ________ on the automated assembly line forced the production plant to halt operations.",
        options: ["breakdown", "break down", "artisan", "dominant"],
        correct: "breakdown",
        explanations: {
            guide: "名词在设备故障语境中的应用。An unexpected mechanical ________ 结构中，形容词 mechanical（机械的）后面需要接名词，表示设备“故障/停摆”，选用复合名词 breakdown。",
            family: "breakdown (n.故障/明细) | break down (v phr.出故障/拆分) | artisan (n.工匠) | dominant (adj.占主导的)。",
            details: "mechanical breakdown 属于工厂设备维护与运营管理场景的核心高阶短语，意为机械故障。break down 是动词词组，不能作冠词与形容词后的主语核心词。",
            cn: "自动装配线上突发的机械故障迫使该生产工厂暂停了运营。",
            jp: "自動組立ラインでの予期せぬ機械の故障（breakdown）により、製造工場は操業停止を余儀なくされました。"
        }
    }
];