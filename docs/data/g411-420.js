// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data141-150.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "specialize",
        pos: "動",
        ipa: "/ˈspeʃəlaɪz/",
        cn: "专门从事，专攻",
        jp: "専門とする、特化する",
        family: "specialist / specialization / special",
        tips: "高频搭配：specialize in + 领域/行业（专门从事/专营某领域）。",
        desc: "They specialize in IT services."
    },
    {
        word: "retail",
        pos: "名/形/動",
        ipa: "/ˈriːteɪl/",
        cn: "零售；零售的",
        jp: "小売；小売の",
        family: "retailer / retailing",
        tips: "商务高频短语：retail store（零售店），retail price（零售价）。",
        desc: "She works in retail."
    },
    {
        word: "strategy",
        pos: "名",
        ipa: "/ˈstrætədʒi/",
        cn: "策略，战略",
        jp: "戦略、方策",
        family: "strategic / strategically / strategist",
        tips: "高频商务搭配：marketing strategy（营销策略），business strategy（商业战略）。",
        desc: "We need a new strategy."
    },
    {
        word: "consult",
        pos: "動",
        ipa: "/kənˈsʌlt/",
        cn: "咨询，请教；商议",
        jp: "相談する、コンサルティングする",
        family: "consultant / consultation / consultative",
        tips: "高频短语：consult with sb（与某人商量），consult a manual（查阅手册）。",
        desc: "Please consult your manager."
    },
    {
        word: "beverage",
        pos: "名",
        ipa: "/ˈbevərɪdʒ/",
        cn: "饮料",
        jp: "飲料、飲み物",
        family: "beverages",
        tips: "餐饮与服务场景高频：hot and cold beverages（冷热饮料），beverage industry（饮料业）。",
        desc: "Coffee is a popular beverage."
    },
    {
        word: "notify",
        pos: "動",
        ipa: "/ˈnoʊtɪfaɪ/",
        cn: "通知，告知",
        jp: "通知する、知らせる",
        family: "notification / notice / notified",
        tips: "高频句型：notify sb of sth / notify sb that...（通知某人某事）。",
        desc: "We will notify you soon."
    },
    {
        word: "agenda",
        pos: "名",
        ipa: "/əˈdʒendə/",
        cn: "议程，议程表",
        jp: "議題、日程",
        family: "agendas",
        tips: "会议场景核心词：meeting agenda（会议议程），on the agenda（在议程上）。",
        desc: "The agenda is ready."
    },
    {
        word: "trail",
        pos: "名/動",
        ipa: "/treɪl/",
        cn: "小径，步道；追踪",
        jp: "小道、ハイキングコース；追跡する",
        family: "trailhead / trailing",
        tips: "户外与景区高频：walking trail（徒步小径），hiking trail（远足步道）。",
        desc: "They walk on the trail."
    },
    {
        word: "subscription",
        pos: "名",
        ipa: "/səbˈskrɪpʃn/",
        cn: "订阅，订阅费",
        jp: "定期購読、サブスクリプション",
        family: "subscribe / subscriber / unsubscribed",
        tips: "出版与软件服务高频：annual subscription（年度订阅），subscription fee（订阅费）。",
        desc: "I renewed my subscription."
    },
    {
        word: "vendor",
        pos: "名",
        ipa: "/ˈvendər/",
        cn: "供应商，小贩",
        jp: "業者、販売主、露天商",
        family: "vend / vending",
        tips: "采购核心词：approved vendor（合格供应商），vending machine（自动售货机）。",
        desc: "The vendor sells fresh fruit."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "notify",
        category: "简单",
        stem: "We will ________ all applicants regarding their interview results by Friday afternoon.",
        options: ["notify", "notification", "consult", "retail"],
        correct: "notify",
        explanations: {
            guide: "情态动词后的动词原形。will 后面接动词原形，表达“通知”申请人，选 notify。",
            family: "notify (v.通知) | notification (n.通知) | consult (v.咨询) | retail (n.零售)。",
            details: "will notify 构成完整的将来时谓语结构。notification 是名词，不能跟在情态动词 will 后面。",
            cn: "我们将在周五下午之前将面试结果通知所有申请人。",
            jp: "金曜日の午後までに、すべての応募者に面接結果を通知（notify）します。"
        }
    },
    {
        id: 2,
        target: "beverage",
        category: "简单",
        stem: "Complimentary hot and cold ________ will be served in the waiting lounge.",
        options: ["beverages", "beverage", "agenda", "vendor"],
        correct: "beverages",
        explanations: {
            guide: "复数名词考点。hot and cold（冷热……）修饰复数可数名词，指供应的各类“饮料”，选 beverages。",
            family: "beverages (n.复数饮料) | beverage (n.单数) | agenda (n.议程) | vendor (n.供应商)。",
            details: "complimentary beverages 意为免费饮料。同时包含热饮与冷饮，需用复数形式 beverages。",
            cn: "等候室将免费供应冷热饮料。",
            jp: "ウェイティングラウンジでは、無料の温かい飲料と冷たい飲料（beverages）が提供されます。"
        }
    },
    {
        id: 3,
        target: "agenda",
        category: "简单",
        stem: "Please review the meeting ________ attached to the email before tomorrow's conference.",
        options: ["agenda", "subscription", "strategy", "trail"],
        correct: "agenda",
        explanations: {
            guide: "会议商务名词。review the meeting ________ 结合邮件附件，指在开会前查阅“会议议程”，选 agenda。",
            family: "agenda (n.议程) | subscription (n.订阅) | strategy (n.策略) | trail (n.小径)。",
            details: "meeting agenda 意为会议议程。subscription（订阅）、trail（小径）均不属于开会前需审查的附件文件。",
            cn: "请在明天开会前审查邮件附件中的会议议程。",
            jp: "明日の会議の前に、メールに添付されている会議の議題（agenda）をご確認ください。"
        }
    },
    {
        id: 4,
        target: "retail",
        category: "简单",
        stem: "The company plans to open three new ________ stores in downtown Chicago this fall.",
        options: ["retail", "retailer", "notify", "beverage"],
        correct: "retail",
        explanations: {
            guide: "前置定语名词。修饰 stores 构成固定商务搭配，指开设新的“零售店”，选 retail。",
            family: "retail (n./adj.零售) | retailer (n.零售商) | notify (v.通知) | beverage (n.饮料)。",
            details: "retail stores 意为零售店。retailer 指“零售商”个人或公司，不用于修饰具体门店实体。",
            cn: "该公司计划今年秋天在芝加哥市中心开设三家新的零售店。",
            jp: "同社は今秋、シカゴのダウンタウンに新しい小売（retail）店舗を3店出店する計画です。"
        }
    },
    {
        id: 5,
        target: "consult",
        category: "简单",
        stem: "Employees should ________ the user guide if they encounter any technical difficulties.",
        options: ["consult", "consultant", "specialize", "vendor"],
        correct: "consult",
        explanations: {
            guide: "情态动词后的动词原形。should 后面接动词原形，表达遇到了技术困难应当“查阅/参考”使用指南，选 consult。",
            family: "consult (v.查阅/咨询) | consultant (n.顾问) | specialize (v.专门从事) | vendor (n.供应商)。",
            details: "consult the user guide 意为查阅用户指南。consultant 为名词（顾问），不能在 should 后充当核心谓语。",
            cn: "如果员工遇到任何技术困难，应当查阅用户指南。",
            jp: "従業員は技術的な問題が発生した場合、ユーザーガイドを参照（consult）する必要があります。"
        }
    },
    {
        id: 6,
        target: "subscription",
        category: "简单",
        stem: "You can easily cancel your magazine ________ online at any time.",
        options: ["subscription", "subscriber", "strategy", "agenda"],
        correct: "subscription",
        explanations: {
            guide: "服务服务名词。cancel your magazine ________ 指在线取消杂志的“订阅”，选 subscription。",
            family: "subscription (n.订阅) | subscriber (n.订阅者) | strategy (n.策略) | agenda (n.议程)。",
            details: "cancel a subscription 意为取消订阅。subscriber 指订户个人，不能作为被取消的系统服务服务对象。",
            cn: "您可以随时在网上轻松取消您的杂志订阅。",
            jp: "雑誌の定期購読（subscription）は、いつでもオンラインで簡単に解約できます。"
        }
    },
    {
        id: 7,
        target: "specialize",
        category: "简单",
        stem: "Our law firm has attorneys who ________ in intellectual property rights and corporate finance.",
        options: ["specialize", "specialist", "notify", "consult"],
        correct: "specialize",
        explanations: {
            guide: "定语从句谓语动词与固定搭配。who 引导的定语从句中缺乏谓语动词，结合介词 in 构成 specialize in（专门从事/专攻），选 specialize。",
            family: "specialize (v.专门从事) | specialist (n.专家) | notify (v.通知) | consult (v.咨询)。",
            details: "attorneys who specialize in... 指精通……领域的律师。specialist 为名词，不能接在关系代词 who 后面做谓语动词。",
            cn: "我们律师事务所的律师专门从事知识产权和公司金融业务。",
            jp: "当法律事務所には、知的財産権と企業財務を専門とする（specialize）弁護士が所属しています。"
        }
    },
    {
        id: 8,
        target: "strategy",
        category: "中等",
        stem: "The marketing director presented a comprehensive sales ________ to boost quarterly revenue.",
        options: ["strategy", "strategic", "subscription", "trail"],
        correct: "strategy",
        explanations: {
            guide: "复合名词中心语。sales ________ 构成商务核心短语，表达“销售策略/营销战略”，选 strategy。",
            family: "strategy (n.策略) | strategic (adj.战略的) | subscription (n.订阅) | trail (n.小径)。",
            details: "sales strategy 意为销售策略。strategic 是形容词，不能在名词 sales 后面作为句子的宾语中心语。",
            cn: "营销总监提出了一个全面的销售策略，以提高季度收入。",
            jp: "マーケティング部長は、四半期売上を伸ばすための包括的な販売戦略（strategy）を提示しました。"
        }
    },
    {
        id: 9,
        target: "vendor",
        category: "中等",
        stem: "The purchasing manager is evaluating proposals from several prospective ________.",
        options: ["vendors", "vendor", "beverages", "agendas"],
        correct: "vendors",
        explanations: {
            guide: "商业采购复数名词。several 后面接可数名词复数，结合评估提案（evaluating proposals）的采购语境，选 vendors（供应商）。",
            family: "vendors (n.复数供应商) | vendor (n.单数) | beverages (n.饮料) | agendas (n.议程)。",
            details: "prospective vendors 指潜在供应商。several 限定词要求使用复数形式 vendors。",
            cn: "采购经理正在评估来自几家潜在供应商的提案。",
            jp: "購買マネージャーは、いくつかの有力な業者（vendors）からの提案書を評価しています。"
        }
    },
    {
        id: 10,
        target: "trail",
        category: "中等",
        stem: "Park visitors are reminded to stay on the designated walking ________ to protect the plant life.",
        options: ["trail", "trailing", "retail", "consult"],
        correct: "trail",
        explanations: {
            guide: "景区通路设施名词。designated walking ________ 指指定的“步道/小径”，选 trail。",
            family: "trail (n.步道/小径) | trailing (v-ing/adj.追踪的) | retail (n.零售) | consult (v.咨询)。",
            details: "walking trail 指步行小径。trailing 为分词形式，在此处不能作表示道路设施的名词中心语。",
            cn: "提醒公园游客走在指定的步行小径上，以保护植物。",
            jp: "公園の利用者は、植物を保護するために指定された歩道（trail）を外れないよう注意されています。"
        }
    },
    {
        id: 11,
        target: "consult",
        category: "中等",
        stem: "Before making major investment decisions, the board decided to hire an external financial ________.",
        options: ["consultant", "consult", "strategy", "specialize"],
        correct: "consultant",
        explanations: {
            guide: "职业派生名词考点。hire an external financial ________ 指雇佣外部金融“顾问”，选 consultant。",
            family: "consultant (n.顾问) | consult (v.咨询) | strategy (n.策略) | specialize (v.专攻)。",
            details: "financial consultant 意为财务/金融顾问。consult 是动词，不能在不定冠词 an 和形容词 financial 后面作宾语。",
            cn: "在做出重大投资决策之前，董事会决定聘请外部金融顾问。",
            jp: "重大な投資決定を下す前に、取締役会は外部の財務コンサルタント（consultant）を雇うことを決定しました。"
        }
    },
    {
        id: 12,
        target: "notify",
        category: "中等",
        stem: "All staff members must receive written ________ at least two weeks before any department relocation.",
        options: ["notification", "notify", "subscription", "vendor"],
        correct: "notification",
        explanations: {
            guide: "动词派生名词考点。receive written ________ 结构中，形容词 written 后面接名词形式 notification，表达收到书面“通知”。",
            family: "notification (n.通知) | notify (v.通知) | subscription (n.订阅) | vendor (n.供应商)。",
            details: "written notification 意为书面通知。notify 为动词原形，不能作动词 receive 的宾语。",
            cn: "所有员工在部门搬迁前至少两周必须收到书面通知。",
            jp: "すべてのスタッフは、部門の移転の少なくとも2週間前に書面による通知（notification）を受け取らなければなりません。"
        }
    },
    {
        id: 13,
        target: "specialize",
        category: "困难",
        stem: "The medical device manufacturer hired a clinical ________ to oversee the new testing procedures.",
        options: ["specialist", "specialize", "consultation", "retailing"],
        correct: "specialist",
        explanations: {
            guide: "派生人员名词高阶考点。hired a clinical ________ 表达雇佣一名临床“专家/专业人员”，选 specialist。",
            family: "specialist (n.专家/专员) | specialize (v.专门从事) | consultation (n.咨询) | retailing (n.零售业)。",
            details: "clinical specialist 意为临床专家。specialize 是动词，不能跟在不定冠词 a 之后充当宾语。",
            cn: "医疗器械制造商聘请了一位临床专家来监督新的测试流程。",
            jp: "医療機器メーカーは、新しい検査手順を監督するために臨床専門家（specialist）を雇いました。"
        }
    },
    {
        id: 14,
        target: "strategy",
        category: "困难",
        stem: "The CEO outlined several ________ partnerships aimed at expanding the company's international presence.",
        options: ["strategic", "strategy", "subscription", "beverage"],
        correct: "strategic",
        explanations: {
            guide: "同源形容词修饰名词。修饰复数名词 partnerships（伙伴关系），表达“战略”合作关系，选形容词 strategic。",
            family: "strategic (adj.战略的/策略的) | strategy (n.策略) | subscription (n.订阅) | beverage (n.饮料)。",
            details: "strategic partnerships 属于商务英语高频核心短语，意为战略合作伙伴关系。strategy 是名词，修饰 partnerships 时不如 strategic 地道。",
            cn: "首席执行官概述了几项旨在扩大公司国际影响力的战略合作伙伴关系。",
            jp: "CEOは、同社の国際的な存在感を拡大することを目的としたいくつかの戦略的（strategic）パートナーシップの概要を説明しました。"
        }
    },
    {
        id: 15,
        target: "subscription",
        category: "困难",
        stem: "The digital newspaper reported a steady increase in paid online ________ over the last quarter.",
        options: ["subscribers", "subscription", "agendas", "vendors"],
        correct: "subscribers",
        explanations: {
            guide: "派生复数名词考点。paid online ________ 指付费的线上“订阅者/订户”，用复数名词 subscribers。",
            family: "subscribers (n.订阅者/订户复数) | subscription (n.订阅服务/费) | agendas (n.议程) | vendors (n.供应商)。",
            details: "paid online subscribers 意为线上付费订户。subscription 指订阅这一行为或服务本身，而增加的数量主体是指具体的人（subscribers）。",
            cn: "该数字报纸报道称，上个季度线上付费订户数量稳定增加。",
            jp: "そのデジタル新聞は、前四半期に有料オンライン読者（subscribers）が着実に増加したと報じました。"
        }
    },
    {
        id: 16,
        target: "retail",
        category: "困难",
        stem: "Online e-commerce platforms have posed significant challenges to traditional ________ businesses.",
        options: ["retail", "retailer", "notified", "consulting"],
        correct: "retail",
        explanations: {
            guide: "商务名词作定语。traditional ________ businesses 表达传统的“零售”企业/商业，选用名词 retail 作前置定语。",
            family: "retail (n./adj.零售) | retailer (n.零售商) | notified (adj.被通知的) | consulting (n./adj.咨询)。",
            details: "traditional retail businesses 属于固定表达，指传统零售企业。retailer 指商家个体，不作前置定语修饰 businesses。",
            cn: "在线电子商务平台对传统的零售企业提出了严峻挑战。",
            jp: "オンライン電子商取引プラットフォームは、従来の小売（retail）企業に重大な課題をもたらしています。"
        }
    },
    {
        id: 17,
        target: "consult",
        category: "困难",
        stem: "The legal department scheduled an urgent ________ with outside counsel regarding the pending lawsuit.",
        options: ["consultation", "consult", "strategy", "agenda"],
        correct: "consultation",
        explanations: {
            guide: "派生抽象名词考点。scheduled an urgent ________ 指安排了一次紧急“咨询/会商”，选名词 consultation。",
            family: "consultation (n.咨询/会商) | consult (v.咨询) | strategy (n.策略) | agenda (n.议程)。",
            details: "an urgent consultation 指紧急咨询会。consult 是动词，不能在冠词 an 和形容词 urgent 之后作宾语。",
            cn: "法务部安排了一次与外部律师针对未决诉讼的紧急咨询。",
            jp: "法務部門は、保留中の訴訟に関して外部弁護士との緊急協議（consultation）を予定しました。"
        }
    },
    {
        id: 18,
        target: "vendor",
        category: "困难",
        stem: "All corporate IT acquisitions must be sourced exclusively from approved ________.",
        options: ["vendors", "vending", "notifications", "specialize"],
        correct: "vendors",
        explanations: {
            guide: "高阶采购术语。approved ________ 属于企业 IT 与设备采购专有名词，意为“合格供应商/认可的供应商”，用复数 vendors。",
            family: "vendors (n.供应商复数) | vending (n.出售/贩卖) | notifications (n.通知复数) | specialize (v.专攻)。",
            details: "approved vendors 指经审核合格的供应商列表。vending 是动名词（贩售），不符合采购来源的主体逻辑。",
            cn: "公司所有的 IT 采购必须完全来自经过批准的合格供应商。",
            jp: "企業のすべてのIT調達は、承認された業者（vendors）からのみ調達されなければなりません。"
        }
    }
];