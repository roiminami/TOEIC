// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag91-100.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "task",
        pos: "名/動",
        ipa: "/tæsk/",
        cn: "任务，工作；分配任务",
        jp: "職務、タスク、仕事；任務を課す",
        family: "tasks / tasked / tasking",
        tips: "日常办公行政核心名词。常考短语 assign a task（分配任务）或 complete a task（完成任务）。动词用法 be tasked with doing something（被指派做某事）是 Part 5/6 极为高频的被动考点。",
        desc: "I finished the task."
    },
    {
        word: "intend",
        pos: "動",
        ipa: "/ɪnˈtend/",
        cn: "打算，计划，想要",
        jp: "意図する、～するつもりである",
        family: "intention / intentional / intended / intentionally",
        tips: "商务战略与日程规划核心动词。极其常考的经典句型为 intend to do something（打算做某事），在阅读中常与 plan to 或 aim to 进行同义替换。名词形式 intention 常与 介词 of 搭配。",
        desc: "We intend to expand."
    },
    {
        word: "directly",
        pos: "副",
        ipa: "/dəˈrektli/",
        cn: "直接地；径直地；立即",
        jp: "直接、すぐに、真っ直ぐに",
        family: "direct / direction / director / indirect",
        tips: "高频职场沟通与物流副词。常考短语 report directly to...（直接向……汇报工作）、contact the manager directly（直接联系经理）。注意其形容词/动词形式 direct 也是核心词。",
        desc: "Please contact me directly."
    },
    {
        word: "brochure",
        pos: "名",
        ipa: "/broʊˈʃʊr/",
        cn: "小册子，宣传册，资料手册",
        jp: "パンフレット、小冊子、案内書",
        family: "brochures",
        tips: "市场营销与企业形象展示核心名词。经常出现在产品推广、旅游度假或会议议程场景中。常考同义替换词包括 pamphlet, booklet 或 informational flyer。",
        desc: "Read the informational brochure."
    },
    {
        word: "competition",
        pos: "名",
        ipa: "/ˌkɑːmpəˈtɪʃn/",
        cn: "竞争；比赛；竞争对手",
        jp: "競争、コンペ、競合他社",
        family: "compete / competitive / competitor / competitively",
        tips: "商务市场与宏观经济场景绝对核心词。常考短语 face fierce competition（面临激烈竞争）。其形容词形式 competitive 常考搭配 competitive edge（竞争优势）或 competitive salary（有竞争力的薪资）。",
        desc: "The competition is fierce."
    },
    {
        word: "limited",
        pos: "形",
        ipa: "/ˈlɪmɪtɪd/",
        cn: "有限的，受限的",
        jp: "限られた、有限の、限定された",
        family: "limit / limitation / limitless / limiting",
        tips: "商务促销与库存运营高频形容词。常考固定短语 limited warranty（有限保修）、for a limited time only（仅限有限时间内/限时特惠）。名词形式 limitation 经常以复数形式出现表示预算或能力的限制。",
        desc: "We have limited time."
    },
    {
        word: "consumer",
        pos: "名",
        ipa: "/kənˈsuːmər/",
        cn: "消费者，顾客",
        jp: "消费者、顧客",
        family: "consume / consumption / consumable",
        tips: "市场研究与零售数据分析核心名词。常考短语 consumer spending（消费者支出）、consumer confidence（消费者信心）。在阅读中常与 customer, client 或 buyer 进行同义替换。",
        desc: "The consumer bought it."
    },
    {
        word: "procedure",
        pos: "名",
        ipa: "/prəˈsiːdʒər/",
        cn: "程序，步骤，手续",
        jp: "手続き、手順、処置",
        family: "proceed / procedural / procedures",
        tips: "公司行政合规与标准作业核心名词。核心标准搭配 standard operating procedure (SOP，标准作业程序) 或 follow the safety procedure（遵循安全步骤）。注意不要与动词 proceed（前进/继续进行）混淆。",
        desc: "Follow the standard procedure."
    },
    {
        word: "potential",
        pos: "形/名",
        ipa: "/pəˈtenʃl/",
        cn: "潜在的，可能的；潜力，可能性",
        jp: "潜在的な、見込みのある；潜在能力、可能性",
        family: "potentially / potentiality",
        tips: "商业开发与人才招聘高频词。作形容词时常考 potential clients/buyers（潜在客户/买家）；作名词时常与动词 show 或 realize 搭配，如 realize one's full potential（充分发挥某人的潜力）。",
        desc: "He is a potential client."
    },
    {
        word: "downtown",
        pos: "副/形/名",
        ipa: "/ˌdaʊnˈtaʊn/",
        cn: "在市中心；市中心的；市中心商业区",
        jp: "中心街で、商業地区へ；中心街の；中心街",
        family: "downtowns",
        tips: "托业出行、办公选址与日常通勤高频词。作副词时前面不加介词，如 go downtown / work downtown。作形容词时常见搭配 downtown office（市中心办公室）、downtown business district（市中心商务区）。",
        desc: "The office is downtown."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "task",
        category: "简单",
        stem: "The project manager assigned a specific ________ to each team member to ensure maximum efficiency.",
        options: ["task", "brochure", "consumer", "downtown"],
        correct: "task",
        explanations: {
            guide: "动词后的名词宾语语义辨析。空格前有不定冠词 a 和形容词 specific（具体的），需要填入可数名词单数作 assigned 的宾语，结合团队分工语境选 task。",
            family: "task (n.任务/工作) | brochure (n.小册子) | consumer (n.消费者) | downtown (n./adj.市中心)。",
            details: "assign a task to someone 意为“给某人分配任务”，是职场项目管理和日常行政的标准化搭配。其他选项均无法与分配和效率构成合乎逻辑的商务语境。",
            cn: "项目经理为每位团队成员分配了一项特定任务，以确保最大效率。",
            jp: "プロジェクトマネージャーは、最大の効率を確保するために、各チームメンバーに特定の職物（task）を割り当てました。"
        }
    },
    {
        id: 2,
        target: "intend",
        category: "简单",
        stem: "The retail chain owners ________ to open three new branch offices in Europe by the end of the fiscal year.",
        options: ["intend", "directly", "limited", "potential"],
        correct: "intend",
        explanations: {
            guide: "谓语位置的核心动词结构辨析。主语是复数名词 owners，空格后出现了动词不定式符号 to open，要求填入一个能接 to do 的动词原形，选 intend。",
            family: "intend (v.打算/计划) | directly (adv.直接地) | limited (adj.有限的) | potential (adj.潜在的)。",
            details: "intend to do something 是托业极为高频的句型，表示“计划/打算做某事”。其余三个选项的词性（副词、形容词）均无法直接充当本句的主句谓语动词。",
            cn: "该零售连锁店的老板们计划在财年结束前在欧洲开设三家新的分公司。",
            jp: "小売チェーンのオーナーたちは、今会計年度末までに欧州で3つの新しい支店を開設することを計画（intend）しています。"
        }
    },
    {
        id: 3,
        target: "directly",
        category: "简单",
        stem: "If you have any questions regarding the billing statement, please contact our accounting department ________.",
        options: ["directly", "competition", "procedure", "task"],
        correct: "directly",
        explanations: {
            guide: "句尾修饰动词短语的副词用法。句子的主体结构 please contact our accounting department 已经完整，句尾需要填入副词作状语，选 directly。",
            family: "directly (adv.直接地) | competition (n.竞争) | procedure (n.程序) | task (n.任务)。",
            details: "contact someone directly 意为“直接联系某人”。此句属于典型的客户服务或财务咨询场景，告知客户省去中间环节直接对接相关部门。其他选项均为名词。",
            cn: "如果您对账单有任何疑问，请直接联系我们的会计部门。",
            jp: "請求書に関してご不明な点がございましたら、当社の会計部門に直接（directly）ご連絡ください。"
        }
    },
    {
        id: 4,
        target: "brochure",
        category: "简单",
        stem: "The marketing team designed a colorful promotional ________ to distribute at the upcoming international trade show.",
        options: ["brochure", "consumer", "intend", "limited"],
        correct: "brochure",
        explanations: {
            guide: "形容词修饰下的名词中心语辨析。空格前面有 a colorful promotional，此处需要填入一个可数名词单数作为 designed 的宾语，选 brochure。",
            family: "brochure (n.宣传册) | consumer (n.消费者) | intend (v.打算) | limited (adj.有限的)。",
            details: "promotional brochure 意为“宣传小册子/资料手册”，分发宣传册是展会推广（trade show）和市场营销中最普遍的商务活动。其余选项词性不符或语意不通。",
            cn: "营销团队设计了一本色彩鲜艳的宣传小册子，准备在即将举行的国际贸易博览会上分发。",
            jp: "マーケティングチームは、今度開催される国際見本市で配布するために、カラフルな販促用パンフレット（brochure）を制作しました。"
        }
    },
    {
        id: 5,
        target: "competition",
        category: "简单",
        stem: "The fierce ________ between the two major airlines led to a significant drop in domestic ticket prices.",
        options: ["competition", "downtown", "potential", "directly"],
        correct: "competition",
        explanations: {
            guide: "定冠词后的主语名词辨析。空格位于定冠词 The 和形容词 fierce 后面，且后接介词 between，提示此处需要填入主语名词，选 competition。",
            family: "competition (n.竞争) | downtown (adj./adv.市中心) | potential (adj./n.潜在的/潜力) | directly (adv.直接地)。",
            details: "fierce competition 意为“激烈的竞争”。两大航空公司之间的恶性竞争导致国内机票价格大幅下降，符合标准的宏观市场逻辑。其他词汇无法构成此逻辑。",
            cn: "两家主要航空公司之间的激烈竞争导致国内机票价格大幅下降。",
            jp: "大手航空会社2社間の激しい競争（competition）により、国内線のチケット価格が大幅に下落しました。"
        }
    },
    {
        id: 6,
        target: "limited",
        category: "简单",
        stem: "Parking spaces at the corporate headquarters are ________, so employees are encouraged to use public transit.",
        options: ["limited", "intend", "procedure", "brochure"],
        correct: "limited",
        explanations: {
            guide: "系动词后的形容词表语辨析。空格前有系动词 are，后文通过 so 引导因果关系，要求填入一个表示“数量或状态受限”的形容词，选 limited。",
            family: "limited (adj.有限的) | intend (v.打算) | procedure (n.程序) | brochure (n.小册子)。",
            details: "parking spaces are limited 意为“车位有限”。因为车位有限所以鼓励使用公共交通，前后因果链条完美闭环。其余选项皆为动词或名词，无法作主语补足语。",
            cn: "公司总部的停车位是有限的，因此鼓励员工使用公共交通工具。",
            jp: "本社内の駐車スペースは限られている（limited）ため、従業員は公共交通機関を利用することが推奨されています。"
        }
    },
    {
        id: 7,
        target: "consumer",
        category: "中等",
        stem: "The market research firm conducted a nationwide survey to analyze ________ spending habits during the holiday season.",
        options: ["consumer", "competition", "potential", "downtown"],
        correct: "consumer",
        explanations: {
            guide: "名词修饰名词的复合结构辨析。空格用于修饰后面的名词短语 spending habits（消费习惯），需要填入一个属性修饰名词，选 consumer。",
            family: "consumer (n.消费者) | competition (n.竞争) | potential (adj./n.潜在的) | downtown (adj./adv.市中心)。",
            details: "consumer spending 意为“消费者支出/消费支出”，consumer spending habits 是市场调研（market research）场景中极度高频的复合名词概念。其余名词不具此商业属性。",
            cn: "这家市场研究公司开展了一项全国性调查，以分析节日期间的消费者消费习惯。",
            jp: "市場調査会社は、休暇シーズン中の消費者（consumer）の支出傾向を分析するために、全国規模の調査を実施しました。"
        }
    },
    {
        id: 8,
        target: "procedure",
        category: "中等",
        stem: "All staff members must follow the standard emergency evacuation ________ during the quarterly safety drill.",
        options: ["procedure", "task", "brochure", "intend"],
        correct: "procedure",
        explanations: {
            guide: "复合名词定语修饰语。空格位于形容词 standard 和名词定语 emergency evacuation 之后，需填入名词充当 follow 的核心宾语。",
            family: "procedure (n.程序/步骤) | task (n.任务) | brochure (n.小册子) | intend (v.打算)。",
            details: "evacuation procedure 意为“疏散程序/紧急疏散步骤”。在企业行政合规与消防演习（safety drill）语境下，follow the procedure 是最地道的权威规范表达。",
            cn: "在每季度的安全演习中，所有员工必须遵守标准的紧急疏散程序。",
            jp: "全従業員は、四半期ごとの安全訓練中に、標準的な緊急避難手順（procedure）に従わなければなりません。"
        }
    },
    {
        id: 9,
        target: "potential",
        category: "中等",
        stem: "The newly hired sales representatives are currently identifying ________ clients who might be interested in our cloud software.",
        options: ["potential", "limited", "directly", "consumer"],
        correct: "potential",
        explanations: {
            guide: "名词前的形容词修饰语辨析。空格位于动词 identifying 和名词 clients 之间，需要填入一个形容词表明客户的特定状态，选 potential。",
            family: "potential (adj.潜在的) | limited (adj.有限的) | directly (adv.直接地) | consumer (n.消费者)。",
            details: "potential clients 意为“潜在客户/见开客”。销售代表（sales representatives）的核心日常工作就是开发拓展潜在的、有购买意向的客户，逻辑高度严密。",
            cn: "新录用的销售代表目前正在寻找可能对我们的云软件感兴趣的潜在客户。",
            jp: "新しく採用された営業担当者たちは現在、当社のクラウドソフトウェアに関心を持つ可能性のある見込み（potential）客を開拓しています。"
        }
    },
    {
        id: 10,
        target: "downtown",
        category: "中等",
        stem: "The real estate developer plans to renovate several historical buildings in the ________ business district.",
        options: ["downtown", "competition", "procedure", "brochure"],
        correct: "downtown",
        explanations: {
            guide: "定冠词与名词短语之间的前置修饰语。空格需要填入一个能够修饰 business district（商业区）的词汇，在此处作定语，选 downtown。",
            family: "downtown (adj.市中心的) | competition (n.竞争) | procedure (n.程序) | brochure (n.小册子)。",
            details: "downtown business district 意为“市中心商业区”，是城市商业地产开发（real estate developer）和选址租赁题目中的常青藤组合词。其他选项均为纯名词，不符合修饰结构。",
            cn: "该房地产开发商计划翻新市中心商业区内的几栋历史建筑。",
            jp: "その不動産開発業者は、中心街（downtown）のビジネス街にあるいくつかの歴史的建造物を改修することを計画しています。"
        }
    },
    {
        id: 11,
        target: "task",
        category: "中等",
        stem: "The newly formed committee has been ________ with reviewing the company's internal security protocols.",
        options: ["tasked", "task", "tasks", "tasking"],
        correct: "tasked",
        explanations: {
            guide: "被动语态中过去分词的用法。空格前有助动词 has been，后接介词 with，提示此处需填入动词的过去分词形式构成被动语态，选 tasked。",
            family: "tasked (v-ed被指派任务) | task (v./n.任务) | tasks (n-pl任务复数) | tasking (v-ing分派任务)。",
            details: "be tasked with doing something 属于托业行政事务和项目推进的高阶被动句型，意为“被指派承担/负责某项工作”。此句指委员会被委以审查安全协议的重任。",
            cn: "新成立的委员会已被指派负责审查公司的内部安全协议。",
            jp: "新しく結成された委員会は、会社の内部セキュリティプロトコルをレビューする任務を課されて（tasked）います。"
        }
    },
    {
        id: 12,
        target: "intend",
        category: "中等",
        stem: "Senior management has expressed a clear ________ to expand the main manufacturing facility in Ohio next spring.",
        options: ["intention", "intend", "intended", "intentionally"],
        correct: "intention",
        explanations: {
            guide: "不定冠词与形容词后的宾语名词。空格前有 a clear（明确的），后面带有动词不定式 to expand 作后置定语，空格处应填入名词，选 intention。",
            family: "intention (n.意图/打算) | intend (v.打算) | intended (adj.预期的) | intentionally (adv.故意地)。",
            details: "express a clear intention to do something 意为“表达了明确的做某事意图/明确表示打算做某事”。intend 的名词派生形式完全契合此处的文体和语法框架。",
            cn: "高级管理层已明确表示打算在明年春天扩建位于俄亥俄州的主要生产设施。",
            jp: "経営陣は、来春にオハイオ州の主要製造施設を拡張するという明確な意向（intention）を表明しました。"
        }
    },
    {
        id: 13,
        target: "directly",
        category: "困难",
        stem: "Ms. Vance will report ________ to the vice president of human resources regarding the upcoming department reorganization.",
        options: ["directly", "direct", "direction", "director"],
        correct: "directly",
        explanations: {
            guide: "不及物动词后的状语修饰。report 是不及物动词，后接介词短语 to the vice president，空格位于动词和介词短语之间，必须填入副词进行修饰，选 directly。",
            family: "directly (adv.直接地) | direct (adj./v.直接的/指导) | direction (n.方向/指导) | director (n.主管/董事)。",
            details: "report directly to someone 是高级职场人事组织架构中的标志性行话，意为“直接向某人汇报工作（跨过中间层级）”。其他选项词性完全错误。",
            cn: "关于即将进行的部门重组，万斯女士将直接向人力资源副总裁汇报工作。",
            jp: "ヴァンス氏は、近く行われる部門再編に関して、人事副社長に直接（directly）報告することになります。"
        }
    },
    {
        id: 14,
        target: "brochure",
        category: "困难",
        stem: "The informational ________ details the comprehensive benefits package available to all full-time personnel.",
        options: ["brochure", "procedure", "competition", "consumer"],
        correct: "brochure",
        explanations: {
            guide: "高阶主谓语义匹配及修饰语限制。空格作句子的主语，其前有形容词 informational（提供信息的），其后谓语是 details（详细列出），能够详细列出福利组合的媒介应是 brochure。",
            family: "brochure (n.资料手册) | procedure (n.程序) | competition (n.竞争) | consumer (n.消费者)。",
            details: "informational brochure 意为“信息手册/指南小册子”。手册详细列出（details）全职员工所享有的综合福利包，完全契合人力资源与员工福利场景的文体规范。",
            cn: "该信息手册详细列出了所有全职员工可享受的综合福利组合。",
            jp: "その情報パンフレット（brochure）には、すべてのフルタイム職員が利用できる包括的な福利厚生パッケージの詳細が記載されています。"
        }
    },
    {
        id: 15,
        target: "competition",
        category: "困难",
        stem: "To maintain its ________ edge, the tech corporation invests heavily in research and development every fiscal year.",
        options: ["competitive", "competition", "competitors", "competitively"],
        correct: "competitive",
        explanations: {
            guide: "固定高阶商务短语中的专用形容词词性考核。空格位于物主代词 its 和名词 edge（优势）之间，需要填入形容词作前置定语，选 competitive。",
            family: "competitive (adj.竞争的/有竞争力的) | competition (n.竞争) | competitors (n-pl竞争对手) | competitively (adv.竞争地)。",
            details: "competitive edge 意为“竞争优势”，是整个托业企业战略、财报和市场拓展议题中权重极高的金牌短语。虽然名词修饰名词偶尔成立，但此处有专属形容词 competitive 时为唯一最优解。",
            cn: "为了保持其竞争优势，这家科技公司每个财政年度都在研发方面投入巨资。",
            jp: "競争（competitive）優位性を維持するため、そのテック企業は毎会計年度、研究開発に多額の投資を行っています。"
        }
    },
    {
        id: 16,
        target: "limited",
        category: "困难",
        stem: "Despite budget ________, the administrative team successfully managed to upgrade the entire office networking infrastructure.",
        options: ["limitations", "limited", "limit", "limitless"],
        correct: "limitations",
        explanations: {
            guide: "介词后的名词复数及特定语义考查。Despite（尽管）是介词，后接名词短语作为其宾语，结合后文“成功升级网络”的让步逻辑，应填入表示“预算限制”的名词复数形式。",
            family: "limitations (n-pl限制/局限) | limited (adj.有限的) | limit (v./n.限制) | limitless (adj.无限的)。",
            details: "budget limitations 意为“预算限制/预算局限”。在商务行政运营场景中，despite budget limitations / constraints 经常用来引导克服客观不利条件完成项目升级的叙事链。",
            cn: "尽管存在预算限制，行政团队还是成功升级了整个办公网络基础设施。",
            jp: "予算の制約（limitations）にもかかわらず、総務チームはオフィス全体のネットワークインフラのアップグレードに成功しました。"
        }
    },
    {
        id: 17,
        target: "consumer",
        category: "困难",
        stem: "The optimization of energy ________ within the manufacturing satellite offices resulted in a major reduction in utility costs.",
        options: ["consumption", "consumer", "consume", "consumable"],
        correct: "consumption",
        explanations: {
            guide: "特定行业名词派生词语义考核。空格位于 energy 之后，共同受介词 of 引导并充当主语中心语，要求填入一个表示“消耗/消耗量”的名词，选 consumption。",
            family: "consumption (n.消耗/消费额) | consumer (n.消费者) | consume (v.消耗) | consumable (adj.可消耗的)。",
            details: "energy consumption 意为“能源消耗”。此句融合了 satellite offices（分支办公室）、optimization（优化）和 reduction in utility costs（水电费降低），属于典型的高阶工业成本控制场景。",
            cn: "分支制造办公室内部能源消耗的优化，导致公用事业成本（水电费）大幅降低。",
            jp: "サテライト製造オフィス内でのエネルギー消費（consumption）の最適化により、光熱費の大幅な削減が達成されました。"
        }
    },
    {
        id: 18,
        target: "procedure",
        category: "困难",
        stem: "The international legal consultants recommended making several ________ adjustments to streamline the arbitration process.",
        options: ["procedural", "procedure", "procedures", "proceed"],
        correct: "procedural",
        explanations: {
            guide: "高阶行业形容词充当前置定语。空格位于形容词 several 和名词 adjustments（调整）之间，需要填入一个形容词表明调整的特定属性，选 procedural。",
            family: "procedural (adj.程序上的/手续上的) | procedure (n.程序) | procedures (n-pl程序复数) | proceed (v.前进)。",
            details: "procedural adjustments 意为“程序上的调整/流程上的修正”。结合后文的 streamline the arbitration process（精简仲裁流程），属于托业企业法律顾问及合同纠纷解决场景的骨灰级难词搭配。",
            cn: "国际法律顾问建议做出几项程序上的调整，以精简仲裁流程。",
            jp: "国際法務コンサルタントは、仲裁手続きを効率化するために、いくつかの手続き上の（procedural）調整を行うことを勧めました。"
        }
    }
];