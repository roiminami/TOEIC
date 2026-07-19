// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE ( g41-50.js Expansion )
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "suggest",
        pos: "動",
        ipa: "/səɡˈdʒest/",
        cn: "建议，表明，提议",
        jp: "提案する、示唆する、勧める",
        family: "suggestion / suggestive / suggested",
        tips: "职场日常沟通核心词。注意其后接动名词结构（suggest doing sth），若接 that 引导的宾语从句，从句谓语动词需使用虚拟语气，即“(should) + 动词原形”。",
        desc: "I suggest this plan."
    },
    {
        word: "take place",
        pos: "動",
        ipa: "/teɪk pleɪs/",
        cn: "发生，举行",
        jp: "開催される、行われる、起こる",
        family: "took place / taken place",
        tips: "听力和阅读 Part 7 极高频短语，常用来指代会议、研讨会、展览或颁奖典礼的举办。属于不及物动词短语，绝对没有被动语态（错误表达如 be taken place）。",
        desc: "The meeting took place."
    },
    {
        word: "unable",
        pos: "形",
        ipa: "/ʌnˈeɪbl/",
        cn: "无法的，不能的",
        jp: "〜することができない、不可能な",
        family: "inability / unable / ably",
        tips: "商务公文、书信拒绝或说明设备故障时的核心高频词。经典句型为 be unable to do sth（无法做某事），在商务书信语境中比 cannot 更加正式和客气。",
        desc: "He is unable to come."
    },
    {
        word: "warn",
        pos: "動",
        ipa: "/wɔːrn/",
        cn: "警告，提醒，告诫",
        jp: "警告する、注意する、予告する",
        family: "warning / warned / warningly",
        tips: "工厂安全、设备操作规范及金融风险控制场景高频词。核心语法结构常考 warn sb of/about sth（就某事警告某人）以及 warn sb to do sth（告诫某人做某事）。",
        desc: "We warned them early."
    },
    {
        word: "justify",
        pos: "動",
        ipa: /ˈdʒʌstɪfaɪ/,
        cn: "证明……有理，为……辩护",
        jp: "正当化する、正しいと証明する",
        family: "justification / justifiable / justified",
        tips: "商务预算申请、战略转型、裁员或涨价场景的辩解核心词。常考高频动宾搭配：justify the expense（证明开支合理）、justify the decision（证明决定正确）。",
        desc: "You must justify it."
    },
    {
        word: "misleading",
        pos: "形",
        ipa: "/ˌmɪsˈliːdɪŋ/",
        cn: "误导性的，令人误解的",
        jp: "误解を招くような、紛らわしい",
        family: "mislead / misled / misleadingly",
        tips: "广告法规、消费者权益投诉和市场分析常考词。在阅读中，经常搭配名词出现，如 misleading advertisement（误导性广告）、misleading statistics（误导性统计数据）。",
        desc: "The ad is misleading."
    },
    {
        word: "misunderstanding",
        pos: "名",
        ipa: "/ˌmɪsʌndərˈstændɪŋ/",
        cn: "误解，误会",
        jp: "誤解、行き違い、思い違い",
        family: "misunderstand / misunderstood",
        tips: "职场沟通纠纷与客户危机处理核心词。听力场景常出现因“时间、地点沟通不畅”导致的误会。经典高频短语为 clear up a misunderstanding（消除误会）。",
        desc: "It was a misunderstanding."
    },
    {
        word: "profile",
        pos: "名/動",
        ipa: "/ˈproʊfaɪl/",
        cn: "简介，概要；扼要介绍，特色专栏",
        jp: "経歴、プロフィール、会社概要；〜の紹介を書く",
        family: "profiled / profiling / profiles",
        tips: "职场社交、公司官网及媒体报道高频词。商务阅读常考 company profile（公司简介）。作动词时指在报刊、杂志上“对某名高管或企业做专题人物专访/简介”。",
        desc: "Read the company profile."
    },
    {
        word: "publicize",
        pos: "動",
        ipa: "/ˈpʌblɪsaɪz/",
        cn: "宣传，公布，推广",
        jp: "宣伝する、公表する、広告する",
        family: "publicity / public / publicly",
        tips: "市场公关（PR）与产品线发布核心动词。多指通过媒体、网络等手段使公众知晓，常见搭配包括 publicize a new product（宣传新产品）或 publicize the event（宣传该活动）。",
        desc: "They publicize the event."
    },
    {
        word: "reassure",
        pos: "動",
        ipa: "/ˌriːəˈʃʊr/",
        cn: "使安心，使消除疑虑",
        jp: "安心させる、安心の言葉をかける",
        family: "reassurance / reassuring / reassured",
        tips: "客诉解决与团队管理高频词。管理层或客服通过提供事实来消除对方的顾虑。常考结构：reassure customers that...（向客户保证……），或名词短语 give reassurance to sb。",
        desc: "She reassured the client."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "unable",
        category: "简单",
        stem: "The technician was ________ to repair the copy machine because the necessary spare parts were temporarily out of stock.",
        options: ["unable", "suggest", "warn", "publicize"],
        correct: "unable",
        explanations: {
            guide: "句型结构与商务语义辨析。空格位于系动词 was 之后，且后面带有动词不定式 to repair，要求填入形容词构成表语结构，选 unable。",
            family: "unable (adj.无法的) | suggest (v.建议) | warn (v.警告) | publicize (v.宣传)。",
            details: "be unable to do sth 是托业官方最核心的故障说明句型，表达“由于零件缺货而无法维修”。其他选项皆为动词，不符合语法结构。",
            cn: "由于必要的备件暂时缺货，技术人员无法维修这台复印机。",
            jp: "必要な交換部品が一時的に在庫切れだったため、技術者はコピー機を修理することができません（unable）でした。"
        }
    },
    {
        id: 2,
        target: "take place",
        category: "简单",
        stem: "Please note that the annual international marketing seminar will ________ in the main conference hall tomorrow morning.",
        options: ["take place", "publicize", "justify", "reassure"],
        correct: "take place",
        explanations: {
            guide: "情态动词后的动词短语辨析。will 后面接动词原形，结合地点状语 in the main conference hall（在主会议厅），表达活动“举行”，选 take place。",
            family: "take place (v.举行/发生) | publicize (v.宣传) | justify (v.证明合理) | reassure (v.使安心)。",
            details: "会议、研讨会等商务活动的举办，在托业中通常使用 take place 这一不及物短语，表示届时会准时召开。其他及物动词由于后无宾语，皆不能入选。",
            cn: "请注意，一年一度的国际营销研讨会将于明天上午在主会议厅举行。",
            jp: "年次の国際マーケティングセミナーは、明日の朝、メインカンファレンスホールで開催（take place）されますのでご留意ください。"
        }
    },
    {
        id: 3,
        target: "suggest",
        category: "简单",
        stem: "Mr. Gomez will most likely ________ a few adjustments to the budget plan during the board meeting this afternoon.",
        options: ["suggest", "unable", "warn", "misunderstanding"],
        correct: "suggest",
        explanations: {
            guide: "谓语动词原形辨析。空格前有助动词 will 及副词短语 most likely，此处需要填入动词原形，结合宾语 adjustments（调整），选 suggest。",
            family: "suggest (v.建议/提出) | unable (adj.无法的) | warn (v.警告) | misunderstanding (n.误解)。",
            details: "suggest adjustments to sth 意为对某计划“提出调整建议”，动宾语义逻辑完美契合。unable 为形容词，misunderstanding 为名词，词性均不符。",
            cn: "戈麦斯先生很可能会在今天下午的董事会上对预算计划提出几项调整建议。",
            jp: "ゴメス氏は、今日の午後に行われる取締役会で、予算案に対していくつかの修正を提案（suggest）する可能性が最も高いです。"
        }
    },
    {
        id: 4,
        target: "profile",
        category: "简单",
        stem: "Job applicants are highly encouraged to update their professional ________ on the website before applying for the position.",
        options: ["profile", "misunderstanding", "purpose", "publicize"],
        correct: "profile",
        explanations: {
            guide: "复合名词语义及职场场景。空格受到形容词 professional（专业的）修饰，前面有物主代词 their，需要填入名词作为宾语中心语，选 profile。",
            family: "profile (n.简介/简历) | misunderstanding (n.误解) | purpose (n.目的) | publicize (v.宣传)。",
            details: "professional profile 在求职招聘场景中意为“职业履历/个人简介”。更新网站上的个人简历以配合职位申请符合职场客观逻辑。",
            cn: "强烈建议求职者在申请该职位之前，先在网站上更新他们的专业个人履历。",
            jp: "求職者は、その職に応募する前に、ウェブサイト上で自身の職歴プロフィール（profile）を更新することが強く推奨されます。"
        }
    },
    {
        id: 5,
        target: "warn",
        category: "简单",
        stem: "The facility manager decided to ________ the workshop employees about the potential hazards of the new chemicals.",
        options: ["warn", "justify", "reassure", "unable"],
        correct: "warn",
        explanations: {
            guide: "动词不定式与其固定搭配。decided to 后面需要接动词原形，后方的介词搭配是 sb about sth，表达因隐患而“警告/提醒”某人，选 warn。",
            family: "warn (v.警告) | justify (v.证明合理) | reassure (v.使安心) | unable (adj.无法的)。",
            details: "warn sb about sth 是极其高频的固定工厂安全搭配，用来表示警告某人注意某事。虽 reassure（使安心）也是及物动词，但与化学品危险的语境背道而驰。",
            cn: "设备经理决定就新化学品的潜在危险向车间员工发出警告。",
            jp: "施設の管理職は、新しい化学物質の潜在的な危険性について、ワークショップの従業員に警告（warn）することを決定しました。"
        }
    },
    {
        id: 6,
        target: "misleading",
        category: "简单",
        stem: "The consumer protection agency stated that the promotional advertisement contained ________ information about the product's origin.",
        options: ["misleading", "unable", "invited", "mainly"],
        correct: "misleading",
        explanations: {
            guide: "名词前置定语辨析。空格位于名词 information（信息）之前，需填入形容词作定语。结合消协（consumer protection agency）的语境，选 misleading。",
            family: "misleading (adj.误导性的) | unable (adj.无法的) | invited (adj.受邀的) | mainly (adv.主要地)。",
            details: "misleading information 意为“误导性信息/不实信息”，常与广告、欺诈投诉场景挂钩。unable 虽是形容词，但不能修饰无生命的信息。",
            cn: "消费者保护机构声明称，该促销广告包含了有关产品产地的误导性信息。",
            jp: "消費者保護機関は、そのプロモーション広告に製品の原産地に関する誤解を招く（misleading）情報が含まれていたと述べました。"
        }
    },
    {
        id: 7,
        target: "publicize",
        category: "中等",
        stem: "The marketing department is launching a strategic social media campaign to ________ the upcoming product launch next month.",
        options: ["publicize", "reassure", "justify", "suggest"],
        correct: "publicize",
        explanations: {
            guide: "目的状语动词辨析。to 引导目的状语，需要动词原形。动作的发出者是 marketing department（市场部），动作对象是新品发布，选 publicize。",
            family: "publicize (v.宣传/推广) | reassure (v.使安心) | justify (v.证明合理) | suggest (v.建议)。",
            details: "publicize an event / a product launch 是公关营销场景的核心固定搭配，意为“宣传/推广某项活动”。市场部做社交媒体活动（campaign）的目的就是为了曝光和宣传。",
            cn: "市场部正在发起一场战略性的社交媒体活动，以宣传下个月即将举行的新品发布会。",
            jp: "マーケティング部門は、来月の新製品発表会を宣伝（publicize）するために、戦略的なSNSキャンペーンを展開しています。"
        }
    },
    {
        id: 8,
        target: "reassure",
        category: "中等",
        stem: "The branch manager called an emergency meeting to ________ the staff that no layoffs would occur during the corporate restructure.",
        options: ["reassure", "warn", "publicize", "take place"],
        correct: "reassure",
        explanations: {
            guide: "高级及物动词用法及句型。空格后紧接宾语 the staff 以及 that 引导的从句。表达经理向员工保证、让员工“消除顾虑/安心”，选 reassure。",
            family: "reassure (v.使安心) | warn (v.警告) | publicize (v.宣传) | take place (v.举行)。",
            details: "reassure sb that... 意为“向某人保证/让某人放心……”，常用在企业面临变动（如重组 restructure）时安抚民心的场景。warn sb that 通常引导负面警告，不接后续的安抚内容。",
            cn: "分行经理召开紧急会议，向全体员工保证在公司重组期间不会发生任何裁员。",
            jp: "支店長は緊急会議を招集し、企業の再編成中に人員削減は行われないことをスタッフに伝えて安心（reassure）させました。"
        }
    },
    {
        id: 9,
        target: "misunderstanding",
        category: "中等",
        stem: "To avoid any further ________, the complete terms of the distribution agreement must be documented clearly in writing.",
        options: ["misunderstanding", "justification", "profile", "suggestion"],
        correct: "misunderstanding",
        explanations: {
            guide: "商务纠纷语境下的名词辨析。avoid any further... 意为“避免任何进一步的……”，结合合同条款必须白纸黑字写清楚的上下文，选 misunderstanding。",
            family: "misunderstanding (n.误解) | justification (n.正当理由) | profile (n.简介) | suggestion (n.建议)。",
            details: "avoid misunderstanding（避免误解/误会）是商务合同、备忘录中最为经典的写作意图表述。写清条款（documented clearly）是为了杜绝双方后期的争议与误读。",
            cn: "为避免任何进一步的误解，分销协议的完整条款必须以书面形式清晰地记录下来。",
            jp: "これ以上の誤解（misunderstanding）を避けるために、販売代理店契約の完全な条件は書面で明確に記録されなければなりません。"
        }
    },
    {
        id: 10,
        target: "justify",
        category: "中等",
        stem: "The sales director had to ________ the high expenditure on foreign travel by presenting a report on new client acquisitions.",
        options: ["justify", "reassure", "suggest", "warn"],
        correct: "justify",
        explanations: {
            guide: "固定动宾搭配及商务逻辑。had to 后面接动词原形，宾语是 high expenditure（高额开支），通过展示新客户获取报告来“证明开支是合理的”，选 justify。",
            family: "justify (v.证明…有理) | reassure (v.使安心) | suggest (v.建议) | warn (v.警告)。",
            details: "justify the expenditure/expense 是托业财务、行政审批场景中的常客。经理必须提供证据（新客户增多）来向总部证明这笔差旅费花得值。其他动词均无法和开支搭配并表达此逻辑。",
            cn: "销售总监不得不通过提交一份关于开拓新客户的报告，来证明海外差旅的高额开支是合理的。",
            jp: "営業ディレクターは、新規顧客獲得に関するレポートを提示することで、海外出張への高額な支出を正当化（justify）しなければなりませんでした。"
        }
    },
    {
        id: 11,
        target: "suggest",
        category: "中等",
        stem: "The project planning committee welcomes any constructive ________ from department heads regarding workflow automation.",
        options: ["suggestions", "suggests", "suggested", "suggestively"],
        correct: "suggestions",
        explanations: {
            guide: "形容词后的名词中心语。空格位于形容词 constructive（建设性的）之后，且受到限定词 any 的修饰，此处需填入名词作 welcomes 的宾语，选 suggestions。",
            family: "suggestions (n.建议复数) | suggests (v-单三) | suggested (v-ed建议) | suggestively (adv.暗示地)。",
            details: "constructive suggestions 意为“建设性意见/建议”，是职场沟通的黄金高频词。此处作可数名词复数，符合 any 后的宾语成分要求。",
            cn: "项目规划委员会欢迎各部门主管提出任何关于工作流程自动化的建设性建议。",
            jp: "プロジェクト計画委員会は、ワークフローの自動化に関する部門長からの建設的な提案（suggestions）を歓迎しています。"
        }
    },
    {
        id: 12,
        target: "publicize",
        category: "中等",
        stem: "The newly established technology firm received extensive ________ after its software won the innovation award.",
        options: ["publicity", "publicize", "publicly", "publicized"],
        correct: "publicity",
        explanations: {
            guide: "及物动词后的名词宾语。received（收到/获得）是及物动词，后面受到形容词 extensive（广泛的）修饰，需要填入名词作宾语，选 publicity。",
            family: "publicity (n.宣传/公众瞩目) | publicize (v.宣传) | publicly (adv.公开地) | publicized (v-ed已宣传)。",
            details: "receive extensive publicity 意为“获得广泛的媒体宣传/社会关注”。本题容易混淆名词与动词，通过形容词修饰语可直接锁定名词形式 publicity。",
            cn: "这家新成立的技术公司在其软件荣获创新奖后，获得了媒体的广泛宣传与关注。",
            jp: "新しく設立されたそのIT企業は、自社のソフトウェアがイノベーション賞を受賞した後、広範な宣伝（publicity）効果を得ました。"
        }
    },
    {
        id: 13,
        target: "justify",
        category: "困难",
        stem: "The senior board members requested a detailed written ________ before approving the massive budget increase for the research lab.",
        options: ["justification", "justify", "justifiable", "justified"],
        correct: "justification",
        explanations: {
            guide: "定冠词与形容词后的名词主干。不定冠词 a 以及形容词 detailed（详细的）、written（书面的）共同修饰后面的名词，空格处应为名词中心语，选 justification。",
            family: "justification (n.正当理由/证明) | justify (v.证明合理) | justifiable (adj.可证明合理的) | justified (adj.合理的)。",
            details: "written justification 意为“书面正当理由/说明书”。在托业财务审批、高阶阅读中，要求对预算激增给出合理辩解（justification）是标准的企业管理流程。",
            cn: "高级董事会成员在批准研究实验室巨额预算增加之前，要求提交一份详细的书面正当理由说明。",
            jp: "シニア取締役会のメンバーは、研究ラボの巨額な予算増額を承認する前に、詳細な書面による正当な理由（justification）を要求しました。"
        }
    },
    {
        id: 14,
        target: "reassure",
        category: "困难",
        stem: "Despite the recent stock market fluctuations, the chief financial officer delivered a ________ speech to the major shareholders.",
        options: ["reassuring", "reassurance", "reassure", "reassured"],
        correct: "reassuring",
        explanations: {
            guide: "前置形容词定语。空格位于不定冠词 a 和名词 speech（演讲）之间，需要填入现在分词转化为形容词的形式，表达“令人安心的/带来信心的”，选 reassuring。",
            family: "reassuring (adj.令人安心的) | reassurance (n.安慰) | reassure (v.使安心) | reassured (adj.感到安心的)。",
            details: "reassuring speech 意为“安抚人心的演讲/使人宽心的表态”。由于 speech 是物而非人，应当使用具有主动发出“令人安心”特征的现在分词形式，不能用 reassured（主语一般为人，指感到安心的）。",
            cn: "尽管最近股市出现波动，但首席财务官还是向主要股东发表了一番令人安心的讲话。",
            jp: "最近の株式市場の変動にもかかわらず、最高財務責任者（CFO）は大株主に対して安心させる（reassuring）スピーチを行いました。"
        }
    },
    {
        id: 15,
        target: "warn",
        category: "困难",
        stem: "The database management system will automatically generate a ________ notification if unauthorized login attempts are detected.",
        options: ["warning", "warned", "warns", "warnly"],
        correct: "warning",
        explanations: {
            guide: "名词修饰名词（名词定语）。空格位于不定冠词 a 之后，名词 notification（通知）之前，需要填入名词构成复合结构，表达“警告通知”，选 warning。",
            family: "warning (n./adj.警告) | warned (v-ed已警告) | warns (v-单三) | warnly (错误副词)。",
            details: "warning notification / warning message（警告通知/警示信息）是IT网络场景及系统操作提示中的标准职场商务用语。warning 在此完美充当名词定语成分。",
            cn: "如果检测到未经授权的登录尝试，数据库管理系统将自动生成一条警告通知。",
            jp: "不正なログイン試行が検出された場合、データベース管理システムは自動的に警告（warning）通知を生成します。"
        }
    },
    {
        id: 16,
        target: "misleading",
        category: "困难",
        stem: "Retailers who intentionally ________ consumers regarding product warranties are subject to severe fines under the new law.",
        options: ["mislead", "misleading", "misleadingly", "misled"],
        correct: "mislead",
        explanations: {
            guide: "定语从句谓语动词。who 引导定语从句修饰主语复数名词 Retailers，空格在副词 intentionally 之后，缺少定语从句的谓语动词，且时态为一般现在时，选原形 mislead。",
            family: "mislead (v.误导原形) | misleading (adj.误导性的) | misleadingly (adv.误导性地) | misled (v-ed已误导)。",
            details: "本题重点考察词族中的核心动词原形。定语从句的主语 who 代表复数零售商（Retailers），因此从句谓语动词应用一般现在时的原形形式，表达法律条文的客观陈述。",
            cn: "根据新法律，故意在产品保修期方面误导消费者的零售商将面临巨额罚款。",
            jp: "新しい法律の下では、製品の保証に関して意図的に消費者を誤導する（mislead）小売業者は、厳しい罰金の対象となります。"
        }
    },
    {
        id: 17,
        target: "profile",
        category: "困难",
        stem: "Dr. Elena Rostova, a pioneer in renewable engineering, will be ________ in next month's special edition of Eco-Business Magazine.",
        options: ["profiled", "profile", "profiles", "profiling"],
        correct: "profiled",
        explanations: {
            guide: "被动语态谓语动词形式。will be 之后需要接动词的过去分词形式构成被动语态，表达该人物在杂志中“被专题介绍/做简介”，选 profiled。",
            family: "profiled (v-ed被介绍) | profile (v./n.简介) | profiles (v-单三) | profiling (v-ing简介中)。",
            details: "当 profile 用作动词时，意为对某人进行“扼要介绍/人物专访”。Rostova 博士作为被介绍的对象，应当使用被动语态 will be profiled，这也是托业阅读 Part 7 媒体题材的常见源头句型。",
            cn: "可再生工程领域的先驱埃琳娜·罗斯托娃博士将在下个月出版的《生态商务杂志》特刊中获得专题介绍。",
            jp: "再生可能エンジニアリングのパイオニアであるエレナ・ロストヴァ博士は、来月号のエコビジネス・マガジン特別版で特集（profiled）される予定です。"
        }
    },
    {
        id: 18,
        target: "unable",
        category: "困难",
        stem: "The electronics firm's sudden decline was largely attributed to its ________ to adapt to rapidly shifting market preferences.",
        options: ["inability", "unable", "ability", "ably"],
        correct: "inability",
        explanations: {
            guide: "物主代词后的名词中心语。形容词性物主代词 its 之后需要接名词来充当介词 to 的宾语。结合“导致企业衰退（decline）”的负面上下文，表达“无能力”，选 inability。",
            family: "inability (n.无能力/无法) | unable (adj.无法的) | ability (n.能力) | ably (adv.精明能干地)。",
            details: "its inability to do sth 意为“它无法/无能力做某事”。虽然 ability 也是名词，但在企业遇到衰退、破产等失败逻辑中，必然是因为“不具备某种能力（inability）”，因此语义分析在此是解题核心。",
            cn: "这家电子公司的突然衰退在很大程度上归咎于其未能适应快速变化的市场偏好。",
            jp: "その電子機器企業の急激な衰退は、急速に変化する市場の好みに適応できなかったこと（inability、無能力）が主な原因とされました。"
        }
    }
];