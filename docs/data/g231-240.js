// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag141-150.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "district",
        pos: "名",
        ipa: "/ˈdɪstrɪkt/",
        cn: "地区，区域，行政区",
        jp: "地区、区域、行政区",
        family: "districts",
        tips: "商务开发与市政规划场景高频名词。常考搭配 business district（商业区）、financial district（金融区）。在阅读中常与 area 或 zone 互换，表示特定的功能规划区。",
        desc: "The business district is busy."
    },
    {
        word: "leading",
        pos: "形",
        ipa: "/ˈliːdɪŋ/",
        cn: "领先的，主要的，一流的",
        jp: "主要な、一流の、主導的な",
        family: "lead / leader / leadership",
        tips: "企业宣传、公关及行业分析中的金牌形容词。常考搭配 leading manufacturer（领先的制造商）、leading provider（领先的供应商），在听力及阅读中是极强烈的正面修饰语。",
        desc: "They are the leading brand."
    },
    {
        word: "regulation",
        pos: "名",
        ipa: "/ˌreɡjuˈleɪʃn/",
        cn: "规章，规则，条例",
        jp: "規則、規制、条例",
        family: "regulate / regulatory / regulator",
        tips: "合规管理、安全生产与法律条款核心名词。常考搭配 safety regulations（安全规章）、government regulations（政府法规）。在语法题中注意其形容词形式 regulatory，意为“监管的/规章的”。",
        desc: "Follow the safety regulation."
    },
    {
        word: "mayor",
        pos: "名",
        ipa: "/ˈmeɪər/",
        cn: "市长",
        jp: "市長",
        family: "mayors / mayoral",
        tips: "市政公共行政场景的核心名词。常与 council（市政厅/市议会）共同出现。考题中通常会在市长宣布某项市政翻修（renovation）、预算案或建设工程时高频露面。",
        desc: "The mayor gave a speech."
    },
    {
        word: "ability",
        pos: "名",
        ipa: "/əˈbɪləti/",
        cn: "能力，才干，本领",
        jp: "能力、才能",
        family: "able / abilities / ably",
        tips: "求职招聘与绩效评估核心名词。核心固定搭配为 ability to do something（做某事的能力，注意后接动词不定式）。在阅读中常与 capability 进行同义替换。",
        desc: "She has the ability."
    },
    {
        word: "temporary",
        pos: "形",
        ipa: "/ˈtempəreri/",
        cn: "暂时的，临时的",
        jp: "一時的な、臨時の",
        family: "temporarily",
        tips: "人事雇佣与设施调整高频形容词。常修饰 staff / employees（临时员工）或 closure（临时关闭）。其副词 temporarily 同样是语法高频词，表示“暂时地”。",
        desc: "This is a temporary job."
    },
    {
        word: "architect",
        pos: "名",
        ipa: "/ˈɑːrkɪtekt/",
        cn: "建筑师",
        jp: "建築家、設計者",
        family: "architecture / architectural",
        tips: "工程建设与设计研发高频人称名词。指设计建筑物的专业人员。在词汇辨析中，注意区分其衍生名词 architecture（建筑学/建筑风格）和形容词 architectural（建筑的）。",
        desc: "The architect drew the plan."
    },
    {
        word: "affect",
        pos: "動",
        ipa: "/əˈfekt/",
        cn: "影响",
        jp: "影響する、作用する",
        family: "affected / affecting",
        tips: "宏观环境、市场波动与运营障碍核心动词。托业核心语法注意点：affect 是及物动词，直接接宾语。常与名词 effect（影响/效果）进行形近词混淆辨析。",
        desc: "The weather will affect traffic."
    },
    {
        word: "efficient",
        pos: "形",
        ipa: "/ɪˈfɪʃnt/",
        cn: "高效的，效率高的",
        jp: "効率的な、有能な",
        family: "efficiently / efficiency",
        tips: "生产管理与运营评估核心形容词。常考搭配 efficient system（高效系统）、energy-efficient（节能的）。副词 efficiently 意为“高效地”，多修饰工作、运转等动词。",
        desc: "The new system is efficient."
    },
    {
        word: "statement",
        pos: "名",
        ipa: "/ˈsteɪtmənt/",
        cn: "声明，陈述；报表，账单",
        jp: "声明、記述；明細書、財務諸表",
        family: "state / statements",
        tips: "金融财务与公共关系核心名词。必考高阶搭配 financial statement（财务报表）、bank statement（银行对账单）。在公共行政中也经常指官方发布的 official statement（官方声明）。",
        desc: "We released a statement."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "district",
        category: "简单",
        stem: "The newly proposed financial ________ is home to many prestigious international investment banks.",
        options: ["district", "mayor", "architect", "office"],
        correct: "district",
        explanations: {
            guide: "名词中心语的词意选择。空格前有形容词 financial（金融的），空格后为系动词 is，需填入名词作主语，选 district。",
            family: "district (n.地区) | mayor (n.市长) | architect (n.建筑师) | office (n.办公室)。",
            details: "financial district 意为“金融区”，是标准的城市商业场景词汇。其他名词如 mayor、architect 虽然也是名词，但无法与 financial 搭配出合理的语义逻辑。",
            cn: "新拟议的金融区是许多知名国际投资银行的所在地。",
            jp: "新しく提案された金融地区（district）には、多くの著名な国際投資銀行が拠点を置いています。"
        }
    },
    {
        id: 2,
        target: "leading",
        category: "简单",
        stem: "TechNova remains a ________ provider of cloud computing solutions for small businesses.",
        options: ["leading", "temporary", "efficient", "closed"],
        correct: "leading",
        explanations: {
            guide: "修饰名词的形容词辨析。空格在不定冠词 a 和名词 provider 之间，需要填入一个形容词。结合提供云端解决方案的背景，选 leading。",
            family: "leading (adj.领先的) | temporary (adj.临时的) | efficient (adj.高效的) | closed (adj.关闭的)。",
            details: "a leading provider 意为“领先的供应商/一流的主办方”，是企业公关及产品发布文稿中的黄金高频短语。其余选项语义不符或不通顺。",
            cn: "TechNova 仍然是针对小型企业云端计算解决方案的领先供应商。",
            jp: "TechNova社は、小規模企業向けクラウドコンピューティングソリューションの一流の（leading）プロバイダーであり続けています。"
        }
    },
    {
        id: 3,
        target: "regulation",
        category: "简单",
        stem: "All facility employees must strictly comply with the safety ________ regarding the handling of hazardous items.",
        options: ["regulation", "ability", "affect", "seminar"],
        correct: "regulation",
        explanations: {
            guide: "及物动词宾语语义匹配。空格前面有 safety（安全），作为 comply with（遵守）的宾语，需填入一个表示规章的名词，选 regulation。",
            family: "regulation (n.规章) | ability (n.能力) | affect (v.影响) | seminar (n.研讨会)。",
            details: "safety regulation 意为“安全规章/安全守则”，常与 comply with 或 follow 构成固定语义链。其他选项词性不符或意思不合逻辑。",
            cn: "所有设施员工必须严格遵守关于处理危险物品的安全规章。",
            jp: "すべての施設の従業員は、危険物の取り扱いに関する安全規則（regulation）を厳格に遵守しなければなりません。"
        }
    },
    {
        id: 4,
        target: "mayor",
        category: "简单",
        stem: "The ________ of the city hosted a press conference to discuss the upcoming public transit plan.",
        options: ["mayor", "statement", "regulation", "council"],
        correct: "mayor",
        explanations: {
            guide: "特定行政职衔的名词辨析。空格作主语，且由 The ... of the city 修饰，后接动作 hosted a press conference（主持新闻发布会），选 mayor。",
            family: "mayor (n.市长) | statement (n.声明) | regulation (n.规则) | council (n.地方议会)。",
            details: "The mayor of the city 意为“市长”，作为民选行政长官主持新闻发布会，完全契合市政公关场景。其余名词无法作此动作的发出者。",
            cn: "市长主持了新闻发布会，讨论即将实施的公共交通计划。",
            jp: "市長（mayor）は記者会見を開き、今度の公共交通計画について話し合いました。"
        }
    },
    {
        id: 5,
        target: "ability",
        category: "简单",
        stem: "Applicants for the leadership position must demonstrate an ________ to work under intense pressure.",
        options: ["ability", "architect", "highly", "proposed"],
        correct: "ability",
        explanations: {
            guide: "名词词意及固定搭配考核。空格前有不定冠词 an（提示首字母为元音音素），后有动词不定式 to work，结合HR招聘任职资格选 ability。",
            family: "ability (n.能力) | architect (n.建筑师) | highly (adv.高度地) | proposed (adj.被提议的)。",
            details: "demonstrate an ability to do something 意为“展现做某事的能力”，是求职招聘、简历筛选场景的超级固定句式。其他选项皆无法与 to work 构成合理句法。",
            cn: "申请该领导岗位的人员必须证明自己具备在高压下工作的能力。",
            jp: "リーダーシップ職の応募者は、激しいプレッシャーの下で働く能力（ability）を証明しなければなりません。"
        }
    },
    {
        id: 6,
        target: "temporary",
        category: "简单",
        stem: "Due to the scheduled plumbing repairs, there will be a ________ closure of the staff lounge tomorrow.",
        options: ["temporary", "efficient", "leading", "voluntary"],
        correct: "temporary",
        explanations: {
            guide: "修饰名词的形容词词义选择。空格修饰名词 closure（关闭），结合原因 plumbing repairs（管道维修），选择 temporary。",
            family: "temporary (adj.临时的) | efficient (adj.高效的) | leading (adj.领先的) | voluntary (adj.自愿的)。",
            details: "temporary closure 意为“临时关闭”，是写字楼内部行政通知中关于设施故障或维护时的标准客套行话。其他修饰词逻辑不合理。",
            cn: "由于计划进行管道维修，员工休息室明天将临时关闭。",
            jp: "配管修理の予定があるため、明日はスタッフ休憩室が一時的（temporary）に閉鎖されます。"
        }
    },
    {
        id: 7,
        target: "architect",
        category: "中等",
        stem: "The real estate firm hired a prominent ________ to oversee the design of the renovated corporate headquarters.",
        options: ["architect", "mayor", "district", "department"],
        correct: "architect",
        explanations: {
            guide: "修饰词后的职业名词辨析。空格前有不定冠词 a 和形容词 prominent（杰出的），后面接不定式 to oversee the design（监督设计），选职业名词 architect。",
            family: "architect (n.建筑师) | mayor (n.市长) | district (n.区域) | department (n.部门)。",
            details: "prominent architect 意为“杰出的建筑师”。房地产公司雇人去负责总部大楼的建筑设计，符合建筑工程设计场景的词义匹配。其他选项均不合理。",
            cn: "这家房地产公司聘请了一位杰出的建筑师来监督翻修后的公司总部大楼的设计。",
            jp: "その不動産会社は、改装された本社ビルの設計を監督するために、著名な建築家（architect）を雇いました。"
        }
    },
    {
        id: 8,
        target: "affect",
        category: "中等",
        stem: "The unexpected supply chain disruption will directly ________ our ability to deliver items on time.",
        options: ["affect", "statement", "ability", "historical"],
        correct: "affect",
        explanations: {
            guide: "情态动词后的及物动词选择。空格在 will 和副词 directly 之后，需接及物动词原形，结合宾语 ability，选用 affect。",
            family: "affect (v.影响) | statement (n.声明) | ability (n.能力) | historical (adj.历史的)。",
            details: "directly affect our ability 意为“直接影响我们的能力”。在物流配送、制造供应链（supply chain）中，任何突发情况都会负面作用于交付能力。其余选项词性不符。",
            cn: "意外的供应链中断将直接影响我们按时交付货物的能力。",
            jp: "予期せぬサプライチェーンの混乱は、製品を予定通りに届ける当社の能力に直接影響（affect）を及ぼします。"
        }
    },
    {
        id: 9,
        target: "efficient",
        category: "中等",
        stem: "Upgrading the database software is the most ________ way to streamline our daily office operations.",
        options: ["efficient", "temporary", "leading", "selective"],
        correct: "efficient",
        explanations: {
            guide: "形容词最高级修饰语词意选择。空格在 the most 之后，用来修饰名词 way，结合 streamline operations（精简运营）的语境选 efficient。",
            family: "efficient (adj.高效的) | temporary (adj.暂时的) | leading (adj.领先的) | selective (adj.有选择性的)。",
            details: "the most efficient way 意为“最高效的方式”，是描述办公自动化、软件系统升级等 IT 后勤改善场景中的绝对金牌搭配。",
            cn: "升级数据库软件是精简我们日常办公业务的最有效方式。",
            jp: "データベースソフトウェアのアップグレードは、日常のオフィス業務を合理化するための最も効率的（efficient）な方法です。"
        }
    },
    {
        id: 10,
        target: "statement",
        category: "中等",
        stem: "The general manager released a formal ________ to clarify the company's position on the acquisition.",
        options: ["statement", "regulation", "district", "memo"],
        correct: "statement",
        explanations: {
            guide: "及物动词后的名词宾语。空格前有动词 released（发布）和形容词 formal（正式的），根据企业并购（acquisition）背景选 statement。",
            family: "statement (n.声明/财务报表) | regulation (n.规章) | district (n.地区) | memo (n.备忘录)。",
            details: "release a formal statement 意为“发表正式声明”，是公关（PR）以及高层发布重大合并或收购计划时的行业标配。虽然 memo 也可以，但通常用 issue 而不是 release，且 acquisition 多涉及外部，需用 statement 声明。",
            cn: "总经理发表了一份正式声明，以澄清公司在收购案上的立场。",
            jp: "ゼネラルマネージャーは、買収に関する会社の立場を明確にするために、公式声明（statement）を発表しました。"
        }
    },
    {
        id: 11,
        target: "district",
        category: "中等",
        stem: "Stores in the historic commercial ________ have reported higher sales since the street was renovated.",
        options: ["district", "mayor", "statement", "attractions"],
        correct: "district",
        explanations: {
            guide: "名词搭配及场景语义辨析。空格前有 commercial（商业的），用来修饰名词，表达特定的零售店铺聚集区，选 district。",
            family: "district (n.地区) | mayor (n.市长) | statement (n.声明) | attractions (n-pl景点)。",
            details: "commercial district 意为“商业区”，是托业中关于零售统计、客流量分析场景下极其核心的地理规划术语。其他干扰项无法构成合理的商业地址词组。",
            cn: "自街道翻新以来，历史商业区的店铺报告了更高的销售额。",
            jp: "通りが改装されて以来、歴史的な商業地区（district）の店舗は売上の増加を報告しています。"
        }
    },
    {
        id: 12,
        target: "ability",
        category: "中等",
        stem: "The new manager has shown an impressive ________ to coordinate large-scale brainstorming sessions.",
        options: ["ability", "able", "ably", "abilities"],
        correct: "ability",
        explanations: {
            guide: "形容词后的名词中心语。空格前有冠词 an 和形容词 impressive（令人钦佩的），此位置需填入单数名词作宾语，选 ability。",
            family: "ability (n.能力) | able (adj.能够的) | ably (adv.能干地) | abilities (n-pl能力)。",
            details: "shown an impressive ability 意为“展现出令人钦佩的能力”。由于前面有单数不定冠词 an，因而排除复数名词形式 abilities ；其余同族词非名词，故排除。",
            cn: "新任经理在协调大型头脑风暴会议方面展现出了令人钦佩的能力。",
            jp: "新しいマネージャーは、大規模なブレインストーミングセッションを調整する素晴らしい能力（ability）を示しました。"
        }
    },
    {
        id: 13,
        target: "leading",
        category: "困难",
        stem: "As a ________ manufacturer of automotive appliances, our company always prioritizes safety.",
        options: ["leading", "leader", "leadership", "lead"],
        correct: "leading",
        explanations: {
            guide: "名词前的修饰语选择。空格位于不定冠词 a 和名词 manufacturer（制造商）之间，需填入形容词作前置定语，选分词形容词 leading。",
            family: "leading (adj.领先的) | leader (n.领导者) | leadership (n.领导力) | lead (v./n.领导)。",
            details: "As a leading manufacturer 意为“作为一家领先的制造商”。虽然 leader 也是名词且意思相近，但在语法上不能直接作为前置定语修饰单数名词 manufacturer，故只能选用形容词性的 leading。",
            cn: "作为一家领先的汽车电器制造商，我们公司始终把安全放在首位。",
            jp: "自動車用電化製品のリーディング（leading）メーカーとして、当社は常に安全を最優先しています。"
        }
    },
    {
        id: 14,
        target: "regulation",
        category: "困难",
        stem: "The compliance officer ensures that all departments follow the latest ________ guidelines closely.",
        options: ["regulatory", "regulation", "regulate", "regulator"],
        correct: "regulatory",
        explanations: {
            guide: "名词前的修饰形容词派生考核。空格位于定冠词 the 与名词 guidelines 之间，作定语修饰 guidelines，选用形容词 regulatory。",
            family: "regulatory (adj.监管的/规章的) | regulation (n.规则) | regulate (v.管制) | regulator (n.监管机构)。",
            details: "regulatory guidelines 意为“监管指南/规章指南”，是制药、金融等强监管行业（compliance）中极频繁的高端行业词汇。虽 regulation 偶尔作定语，但 regulatory guidelines 为标准搭配。",
            cn: "合规官确保所有部门密切遵循最新的监管指南。",
            jp: "コンプライアンス担当者は、すべての部門が最新の規制（regulatory）ガイドラインに細心の注意を払って従うよう徹底しています。"
        }
    },
    {
        id: 15,
        target: "temporary",
        category: "困难",
        stem: "The online customer portal will be ________ unavailable on Sunday morning due to a database upgrade.",
        options: ["temporarily", "temporary", "temporal", "temporariness"],
        correct: "temporarily",
        explanations: {
            guide: "修饰形容词的副词判定。空格位于助动词 will be 与形容词 unavailable（不可用的）之间，作状语修饰形容词，应选用副词 temporarily。",
            family: "temporarily (adv.暂时地) | temporary (adj.暂时的) | temporal (adj.世俗的/时间的) | temporariness (n.临时性)。",
            details: "will be temporarily unavailable 意为“将暂时不可用”，属于各种系统维护、停机公告、通知公文中最经典、最频发的高阶固定状态陈述结构。",
            cn: "由于数据库升级，在线客户门户网站将在周日上午暂时不可用。",
            jp: "データベースのアップグレードにより、オンライン顧客ポータルは日曜日の朝に一時的（temporarily）に利用できなくなります。"
        }
    },
    {
        id: 16,
        target: "architect",
        category: "困难",
        stem: "The city council praised the majestic library for its outstanding ________ innovation.",
        options: ["architectural", "architect", "architecture", "architects"],
        correct: "architectural",
        explanations: {
            guide: "名词前的修饰形容词词性选择。空格位于物主代词 its 与名词 innovation 之间，需填入形容词修饰名词，选 architectural。",
            family: "architectural (adj.建筑的/建筑学上的) | architect (n.建筑师) | architecture (n.建筑) | architects (n-pl建筑师)。",
            details: "architectural innovation 意为“建筑学上的创新”，用来称赞公共设施的设计水平。其他同族词在名词 innovation 之前不构成正确的形容词修饰结构。",
            cn: "市议会赞扬了这座宏伟的图书馆，因其杰出的建筑设计创新。",
            jp: "市議会は、その傑出した建築（architectural）革新に対して、この壮大な図書館を称賛しました。"
        }
    },
    {
        id: 17,
        target: "affect",
        category: "困难",
        stem: "Economists predict that the proposed fiscal subsidies will significantly ________ the local housing market.",
        options: ["affect", "effect", "effectively", "affection"],
        correct: "affect",
        explanations: {
            guide: "情态动词后的动词辨析。will 后面接副词 significantly，接着必须是及物动词原形，用于修饰宾语 market，选 affect（影响）。",
            family: "affect (v.影响) | effect (n.效果/影响) | effectively (adv.有效地) | affection (n.喜爱)。",
            details: "significantly affect the market 意为“显著影响市场”。本题是托业的经典高难形近词干扰：affect（动词）与 effect（通常作名词，表效果/结果）的区别。此处作谓语必须填入动词形式 affect。",
            cn: "经济学家预测，拟议的财政补贴将显著影响当地的住房市场。",
            jp: "経済学者は、提案された財政補助金が地域の住宅市場に著しく影響（affect）を及ぼすと予測しています。"
        }
    },
    {
        id: 18,
        target: "efficient",
        category: "困难",
        stem: "By utilizing the new scheduling software, the administrative assistant completed the tasks much more ________.",
        options: ["efficiently", "efficient", "efficiency", "efficacious"],
        correct: "efficiently",
        explanations: {
            guide: "修饰完成动作的副词比较级。空格前有 much more，用于修饰完成动词 completed 及其宾语，此处必须填入副词，选 efficiently。",
            family: "efficiently (adv.高效地) | efficient (adj.高效的) | efficiency (n.效率) | efficacious (adj.有效的)。",
            details: "completed the tasks much more efficiently 意为“更高效地完成了任务”。副词修饰动词短语，用以体现使用了新调度软件后的效率改善成果。其他词性皆无法充当状语结构。",
            cn: "通过利用新的调度软件，行政助理更高效地完成了这些任务。",
            jp: "新しいスケジューリングソフトウェアを利用することで、行政アシスタントはタスクをはるかに効率的（efficiently）に完了しました。"
        }
    }
];