// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag11-20.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "prohibit",
        pos: "動",
        ipa: "/prəˈhɪbɪt/",
        cn: "禁止，阻止",
        jp: "禁止する、妨げる",
        family: "prohibition / prohibitive / prohibitively",
        tips: "托业高频动词。常用于规章制度，考点包含 be prohibited from -ing（被禁止做某事）。派生词 prohibitive / prohibitively 常修饰 cost/expensive（价格高得令人望而却步）。",
        desc: "Smoking is prohibited here."
    },
    {
        word: "assess",
        pos: "動",
        ipa: "/əˈses/",
        cn: "评估，估算，核定",
        jp: "評価する、査定する",
        family: "assessment / assessor / assessable",
        tips: "商务评估核心动词。常见搭配有 assess the damage（评估损失）、assess performance（评估绩效）、assess risks（评估风险）。名词形式 assessment 在托业中极高频。",
        desc: "We must assess the risks."
    },
    {
        word: "clarify",
        pos: "動",
        ipa: "/ˈklærəfaɪ/",
        cn: "澄清，阐明",
        jp: "明确にする、解明する",
        family: "clarification / clarity / clarifying",
        tips: "职场沟通与邮件高频动词。常考 clarify a policy/procedure（澄清政策/流程）。派生名词 clarification 组合为 seek clarification（寻求澄清）。",
        desc: "Please clarify your statement."
    },
    {
        word: "independent",
        pos: "形",
        ipa: "/ˌɪndɪˈpendənt/",
        cn: "独立的，自主的",
        jp: "独立した、自主的な",
        family: "independence / independently / depend",
        tips: "常修饰机构或人员，如 independent auditor（独立审计员）、independent contractor（独立承包商）。介词搭配为 be independent of（独立于……）。",
        desc: "He works as an independent contractor."
    },
    {
        word: "urgent",
        pos: "形",
        ipa: "/ˈɜːrdʒənt/",
        cn: "紧急的，紧迫的",
        jp: "紧急の、急を要する",
        family: "urgency / urgently",
        tips: "商务沟通常用形容词。修饰名词如 urgent request（紧急请求）、urgent matter（紧急事项）。派生名词 urgency 与副词 urgently 同为托业考点。",
        desc: "I have an urgent message."
    },
    {
        word: "skilled",
        pos: "形",
        ipa: "/skɪld/",
        cn: "熟练的，有技能的",
        jp: "熟练した、技能を持つ",
        family: "skill / skillful / skillfully",
        tips: "招聘与人力资源场景核心词。常修饰 worker/technician（熟练技术人员）。注意搭配 be skilled at/in doing sth（擅长于做某事）。",
        desc: "She is a skilled manager."
    },
    {
        word: "remark",
        pos: "動/名",
        ipa: "/rɪˈmɑːrk/",
        cn: "评论，谈到；话语，评论",
        jp: "述べる、コメントする；意见、発言",
        family: "remarkable / remarkably / remarker",
        tips: "作动词常搭配 remark on/that（谈及/评论）。作名词常指发言或评论（opening remarks 开场白）。派生形容词 remarkable（卓越的，显著的）是高频形容词。",
        desc: "He made a brief remark."
    },
    {
        word: "weekday",
        pos: "名",
        ipa: "/ˈwiːkdeɪ/",
        cn: "工作日（周一至周五）",
        jp: "平日（月曜日から金曜日）",
        family: "weekdays / weekend",
        tips: "商务营业时间与物流日程高频词。常考介词搭配 on weekdays（在工作日）、weekday delivery（工作日派送）。与 weekend（周末）形成对比。",
        desc: "The office is open on weekdays."
    },
    {
        word: "personalized",
        pos: "形",
        ipa: "/ˈpɜːrsənəlaɪzd/",
        cn: "个性化的，定制的",
        jp: "パーソナライズされた、特注の",
        family: "personalize / personality / personal",
        tips: "市场营销与客户服务核心词。常见搭配有 personalized service（个性化服务）、personalized experience（定制化体验）。由动词 personalize 过去分词转化而来。",
        desc: "We offer personalized service."
    },
    {
        word: "stain",
        pos: "名/動",
        ipa: "/steɪn/",
        cn: "污渍，玷污；染色，弄脏",
        jp: "シミ、汚れ；汚す、着色する",
        family: "stainless / stained / staining",
        tips: "酒店服务、产品质量争议或清洁维护场景考点。作名词常考 remove a stain（去除污渍）；派生形容词 stainless 常考 stainless steel（不锈钢）。",
        desc: "There is a stain on the carpet."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "prohibit",
        category: "简单",
        stem: "Safety regulations strictly ________ employees from entering the construction site without a hard hat.",
        options: ["prohibit", "prohibition", "urgent", "assess"],
        correct: "prohibit",
        explanations: {
            guide: "句子主语为 Safety regulations（复数），空格处需要填入谓语动词原形，表达“禁止”员工无安全帽进入工地，选 prohibit。",
            family: "prohibit (v.禁止) | prohibition (n.禁止) | urgent (adj.紧急的) | assess (v.评估)。",
            details: "prohibit sb from doing sth 是固定句型，表示“禁止某人做某事”。prohibition 是名词，在此处会导致句子缺少动词谓语。",
            cn: "安全规章严格禁止员工在未佩戴安全帽的情况下进入施工现场。",
            jp: "安全规制により、作业员が安全ヘルメットを着用せずに工事现场に入ることは厳しく禁止（prohibit）されています。"
        }
    },
    {
        id: 2,
        target: "assess",
        category: "简单",
        stem: "The inspector will visit the facility tomorrow to ________ the condition of the manufacturing equipment.",
        options: ["assess", "assessment", "skilled", "clarify"],
        correct: "assess",
        explanations: {
            guide: "不定式动词原形考点。will visit... to 后面需要接动词原形构成目的状语，表达“评估”设备状况，选 assess。",
            family: "assess (v.评估) | assessment (n.评估) | skilled (adj.熟练的) | clarify (v.澄清)。",
            details: "to 不定式符号后需接动词原形 assess。assessment 为名词，不能直接紧跟在不定式符号 to 后面。",
            cn: "检查员将于明天访问该设施，以评估制造设备状况。",
            jp: "检验员は制造设备の状态を物理的に评价（assess）するために、明日施设を访问します。"
        }
    },
    {
        id: 3,
        target: "urgent",
        category: "简单",
        stem: "Please respond to this ________ message as soon as possible regarding the client's order.",
        options: ["urgent", "urgently", "weekday", "stain"],
        correct: "urgent",
        explanations: {
            guide: "形容词修饰名词考点。空格在指示代词 this 与名词 message 之间，需要填入形容词修饰 message，表示“紧急的”消息，选 urgent。",
            family: "urgent (adj.紧急的) | urgently (adv.紧急地) | weekday (n.工作日) | stain (n.污渍)。",
            details: "urgent message 是商务沟通中的高频搭配。urgently 是副词，不能直接修饰名词 message。",
            cn: "请尽快回复这条关于客户订单的紧急消息。",
            jp: "顾客の注文に関するこの紧急（urgent）メッセージにできるだけ早く相答してください。"
        }
    },
    {
        id: 4,
        target: "skilled",
        category: "简单",
        stem: "The company needs to hire more ________ workers to operate the newly acquired machinery.",
        options: ["skilled", "skillfully", "prohibit", "remark"],
        correct: "skilled",
        explanations: {
            guide: "形容词修饰名词考点。空格在限定词 more 与名词 workers 之间，需要填入形容词作定语修饰 workers，选 skilled。",
            family: "skilled (adj.熟练的) | skillfully (adv.熟练地) | prohibit (v.禁止) | remark (v./n.评论)。",
            details: "skilled workers 指“熟练工人/技术工人”，属于招聘场景的标准表达。skillfully 是副词，不能修饰名词 workers。",
            cn: "公司需要雇用更多熟练工人来操作新购置的机械设备。",
            jp: "会社は新しく购入した机械を操作するために、より多くの熟练した（skilled）作业员を雇う必要があります。"
        }
    },
    {
        id: 5,
        target: "weekday",
        category: "简单",
        stem: "Deliveries are normally scheduled on any ________ between 9:00 A.M. and 5:00 P.M.",
        options: ["weekday", "personalized", "assess", "clarify"],
        correct: "weekday",
        explanations: {
            guide: "介词与限定词后的名词考点。on any 后面需要接单数可数名词，结合时间段 9:00 A.M. to 5:00 P.M.，表达在“工作日”，选 weekday。",
            family: "weekday (n.工作日) | personalized (adj.个性化的) | assess (v.评估) | clarify (v.澄清)。",
            details: "on any weekday 意为“在任何工作日”。personalized 是形容词，assess 和 clarify 是动词，均不符合语法要求。",
            cn: "派送通常安排在上午 9:00 至下午 5:00 之间的任何工作日进行。",
            jp: "配达は通常、午前9時から下午5时までの平日（weekday）に等しく计画されています。"
        }
    },
    {
        id: 6,
        target: "stain",
        category: "简单",
        stem: "The housekeeping staff used a special cleaning agent to remove the dark ________ from the rug.",
        options: ["stain", "stainless", "urgent", "prohibit"],
        correct: "stain",
        explanations: {
            guide: "限定词与形容词后的名词考点。the dark 后面需要接名词充当宾语，表达去除深色“污渍”，选 stain。",
            family: "stain (n.污渍/v.弄脏) | stainless (adj.无瑕的/不锈钢的) | urgent (adj.紧急的) | prohibit (v.禁止)。",
            details: "remove a stain 是酒店与保洁场景固定词组，意为“去除污渍”。stainless 是形容词，不能作 remove 的宾语。",
            cn: "客房清洁人员使用一种特殊的清洁剂去除了毯子上的深色污渍。",
            jp: "客室清扫员は特別な洗剤を使用して、ラグから暗いシミ（stain）を取り除きました。"
        }
    },
    {
        id: 7,
        target: "clarify",
        category: "中等",
        stem: "The director scheduled a meeting with the team to ________ several ambiguous points in the project proposal.",
        options: ["clarify", "clarification", "independent", "skilled"],
        correct: "clarify",
        explanations: {
            guide: "不定式动词原形与商务语义。to 后面需要接动词原形，带宾语 several ambiguous points，表示“澄清/阐明”模糊之处，选 clarify。",
            family: "clarify (v.阐明) | clarification (n.澄清) | independent (adj.独立的) | skilled (adj.熟练的)。",
            details: "clarify points/issues 意为“澄清要点/问题”，是商务会议高频表达。clarification 为名词，放在 to 后面语法不成立。",
            cn: "主管与团队安排了一次会议，以澄清项目建议书中几处模糊不清的要点。",
            jp: "ディレクターは、プロジェクト提案书のいくつかの不明确な点を明确（clarify）にするために、チームとの会议を设定しました。"
        }
    },
    {
        id: 8,
        target: "independent",
        category: "中等",
        stem: "An ________ auditing firm was hired to review the company's financial statements for accuracy.",
        options: ["independent", "independently", "remark", "stain"],
        correct: "independent",
        explanations: {
            guide: "不定冠词与名词前的形容词考点。An 提示后面需接以元音音素开头的形容词修饰 auditing firm（审计事务所），选 independent。",
            family: "independent (adj.独立的) | independently (adv.独立地) | remark (n./v.评论) | stain (n.污渍)。",
            details: "independent auditing firm（第三方/独立审计事务所）是托业财务审计场景专属高频复合名词短语。independently 为副词，不可修饰名词。",
            cn: "公司雇用了一家独立的审计事务所，以审查财务报表的准确性。",
            jp: "财务诸表の准确性を确认するために、独立した（independent）监査法人名が雇われました。"
        }
    },
    {
        id: 9,
        target: "remark",
        category: "中等",
        stem: "During the opening ceremony, the chief executive officer made a brief ________ about the company's future goals.",
        options: ["remark", "remarkable", "assess", "urgent"],
        correct: "remark",
        explanations: {
            guide: "不定冠词与形容词后的名词考点。a brief 后面需要接单数可数名词作 made 的宾语，表达做出简短“致辞/评论”，选 remark。",
            family: "remark (n.评论/话语) | remarkable (adj.非凡的) | assess (v.评估) | urgent (adj.紧急的)。",
            details: "make a remark（发表评论/讲话）是固定搭配。remarkable 是形容词，不能直接作为动词 make 的宾语。",
            cn: "开幕式期间，首席执行官就公司的未来目标发表了简短的致辞。",
            jp: "开会式の中で、最高经营责任者は会社の将来の目标について短い短评（remark）を述べました。"
        }
    },
    {
        id: 10,
        target: "personalized",
        category: "中等",
        stem: "The hotel offers ________ recommendation services to help guests plan their sightseeing itineraries.",
        options: ["personalized", "personalize", "weekday", "prohibit"],
        correct: "personalized",
        explanations: {
            guide: "分词作形容词修饰名词。空格处需要形容词修饰 recommendation services（推荐服务），表达“个性化的/定制的”，选 personalized。",
            family: "personalized (adj.个性化的) | personalize (v.个性化) | weekday (n.工作日) | prohibit (v.禁止)。",
            details: "personalized service 是客户服务与旅游酒店行业的标配高频表达。personalize 是动词，不能直接作定语修饰名词服务。",
            cn: "该酒店提供个性化的推荐服务，帮助客人规划他们的观光行程。",
            jp: "ホテルは、ゲストが观光日程を计画するのを支援するために、パーソナライズされた（personalized）推荐サービスを提供しています。"
        }
    },
    {
        id: 11,
        target: "prohibit",
        category: "中等",
        stem: "The high budget requirement proved to be ________ expensive, leading management to cancel the expansion project.",
        options: ["prohibitively", "prohibitive", "clarify", "skilled"],
        correct: "prohibitively",
        explanations: {
            guide: "副词修饰形容词。空格位于系动词 to be 之后、形容词 expensive 之前，需要填入副词修饰 expensive，选 prohibitively。",
            family: "prohibitively (adv.极高地/让人望而生畏地) | prohibitive (adj.过高的) | clarify (v.澄清) | skilled (adj.熟练的)。",
            details: "prohibitively expensive 是托业极具标志性的高阶搭配，意为“价格过于高昂以至于让人放弃”。prohibitive 是形容词，无法修饰形容词 expensive。",
            cn: "高昂的预算要求被证明是过于昂贵的，导致管理层取消了扩建项目。",
            jp: "高い预算要件は高価すぎて禁止的（prohibitively）であると判明し、经营阵は扩张プロジェクトを中止しました。"
        }
    },
    {
        id: 12,
        target: "assess",
        category: "中等",
        stem: "After a thorough ________ of the market conditions, the board decided to postpone the product launch.",
        options: ["assessment", "assess", "independent", "stain"],
        correct: "assessment",
        explanations: {
            guide: "介词与形容词后的名词考点。After a thorough 后面必须接单数名词充当介词宾语，表达对市场状况进行彻底“评估”，选 assessment。",
            family: "assessment (n.评估) | assess (v.评估) | independent (adj.独立的) | stain (n.污渍)。",
            details: "a thorough assessment 属于托业商业决策场景的高频搭配。assess 是动词，不能接在冠词+形容词结构之后。",
            cn: "在对市场状况进行了彻底评估之后，董事会决定推迟新产品发布。",
            jp: "市场状况の彻底的な评价（assessment）の後、取缔役会は制品の発売を延期することを决定しました。"
        }
    },
    {
        id: 13,
        target: "clarify",
        category: "困难",
        stem: "If you require further ________ concerning the terms of the lease agreement, please do not hesitate to contact our legal department.",
        options: ["clarification", "clarify", "personalized", "weekday"],
        correct: "clarification",
        explanations: {
            guide: "形容词后的名词与商务固定表达。further 为形容词，后接不可数名词，结合 require 可知表达“寻求进一步澄清”，选 clarification。",
            family: "clarification (n.澄清/说明) | clarify (v.澄清) | personalized (adj.个性化的) | weekday (n.工作日)。",
            details: "require further clarification 是托业商务信函与合同条款中的经典句型。clarify 是动词原形，不能作 require 的宾语。",
            cn: "如果您对租赁协议的条款需要进一步澄清，请随时联系我们的法务部门。",
            jp: "借家契约の条件に関して更なる明确化（clarification）が必要な場合は、犹豫なく当社の法务部门にご连络ください。"
        }
    },
    {
        id: 14,
        target: "independent",
        category: "困难",
        stem: "The research division has been operating ________ from the main headquarters to foster innovative product development.",
        options: ["independently", "independent", "urgently", "skilled"],
        correct: "independently",
        explanations: {
            guide: "副词修饰不及物动词。has been operating 是完整谓语结构（operating 为不及物动词），需要副词修饰其运作方式，选 independently。",
            family: "independently (adv.独立地) | independent (adj.独立的) | urgently (adv.紧急地) | skilled (adj.熟练的)。",
            details: "operate independently from... 意为“独立于……进行运营”。independent 是形容词，不能修饰动词 operate。",
            cn: "研发部门一直在独立于总部的状态下运营，以促进创新产品的开发。",
            jp: "研究部门は革新的な制品开発を促进するために、本社から独立して（independently）运营されています。"
        }
    },
    {
        id: 15,
        target: "urgent",
        category: "困难",
        stem: "Because of the extreme ________ of the situation, the board of directors convened an extraordinary emergency meeting.",
        options: ["urgency", "urgent", "prohibition", "remark"],
        correct: "urgency",
        explanations: {
            guide: "介词短语中的名词考点。Because of the extreme 后面需要接名词，语义表示局势的极其“紧迫性”，选 urgency。",
            family: "urgency (n.紧迫/紧急) | urgent (adj.紧急的) | prohibition (n.禁止) | remark (n.评论)。",
            details: "the extreme urgency of the situation 意为“局势的极度紧迫”。urgent 是形容词，不能在冠词和形容词 extreme 后直接作名词使用。",
            cn: "由于局势极其紧迫，董事会召开了一次特别紧急会议。",
            jp: "事态の极度の紧急性（urgency）のため、取缔役会は特别紧急会议を招集しました。"
        }
    },
    {
        id: 16,
        target: "skilled",
        category: "困难",
        stem: "The IT technician solved the network problem so ________ that system operations resumed within ten minutes.",
        options: ["skillfully", "skilled", "assessment", "clarify"],
        correct: "skillfully",
        explanations: {
            guide: "so...that 结构中修饰动词的副词考点。so 修饰修饰动作 solved 的副词，表达解决问题解决得非常“熟练地/高明地”，选 skillfully。",
            family: "skillfully (adv.熟练地) | skilled (adj.熟练的) | assessment (n.评估) | clarify (v.澄清)。",
            details: "solve a problem skillfully 构成动词与副词的有效修饰。skilled 是形容词，在此处不能修饰动词 solved。",
            cn: "IT 技术人员非常熟练地解决了网络问题，以至于系统操作在十分钟内就恢复了。",
            jp: "IT技术者はネットワークの问题を非常に巧みに（skillfully）解决したため、システム运用は10分以内に再开されました。"
        }
    },
    {
        id: 17,
        target: "remark",
        category: "困难",
        stem: "The sales division achieved a ________ increase in quarterly revenue despite overall economic uncertainty.",
        options: ["remarkable", "remarkably", "personalized", "weekday"],
        correct: "remarkable",
        explanations: {
            guide: "形容词修饰名词。a 与 increase（增长，名词）之间需要形容词作定语，表示“显著的/非凡的”增长，选 remarkable。",
            family: "remarkable (adj.显著的/非凡的) | remarkably (adv.显著地) | personalized (adj.个性化的) | weekday (n.工作日)。",
            details: "a remarkable increase 意为“显著的增长”，是阅读与听力图表分析的高频形容词。remarkably 是副词，不能修饰名词 increase。",
            cn: "尽管整体经济存在不确定性，销售部门的季度收入仍取得了显著的增长。",
            jp: "全体的な经济の不透明感にもかかわらず、营业部门は四半期売上高で著しい（remarkable）増加を达成しました。"
        }
    },
    {
        id: 18,
        target: "personalized",
        category: "困难",
        stem: "Through advanced analytics, the platform allows marketers to ________ promotional offers based on customer browsing history.",
        options: ["personalize", "personalized", "prohibit", "urgent"],
        correct: "personalize",
        explanations: {
            guide: "allow sb to do sth 结构中的动词原形。to 后面需要接动词原形，表达“个性化定制”促销优惠，选 personalize。",
            family: "personalize (v.个性化) | personalized (adj.个性化的) | prohibit (v.禁止) | urgent (adj.紧急的)。",
            details: "allow marketers to personalize... 意为“允许营销人员个性化定制……”。personalized 是形容词/过去分词，不符合不定式结构。",
            cn: "通过高级分析，该平台允许营销人员根据客户的浏览历史记录来定制促销优惠。",
            jp: "高度な分析を通じて、プラットフォームはマーケターが顾客の阅覧能力の履历に基づいてプロモーションオファーをカスタマイズ（personalize）することを可能にします。"
        }
    }
];
