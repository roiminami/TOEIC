// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (Grammar Special: Dual-Role & Prep/Conj Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "before",
        pos: "介/接/副",
        ipa: "/bɪˈfɔːr/",
        cn: "在……之前",
        jp: "〜の前に、〜より以前に",
        family: "beforehand",
        tips: "兼类词（介词/连词/副词）。作介词后接名词/动名词（before starting）；作连词后接完整从句（before the meeting begins）；作副词放句末（months before）。",
        desc: "Please finish before leaving."
    },
    {
        word: "after",
        pos: "介/接",
        ipa: "/ˈæftər/",
        cn: "在……之后",
        jp: "〜の后に",
        family: "afterward / afterwards",
        tips: "兼类词（介词/连词）。作介词后接名词/动名词（after signing the contract）；作连词引导时间状语从句。托业中常考 after + -ing 结构。",
        desc: "Call me after the meeting."
    },
    {
        word: "until",
        pos: "介/接",
        ipa: "/ənˈtɪl/",
        cn: "直到……为止",
        jp: "〜まで（ずっと）",
        family: "till",
        tips: "兼类词。作介词后接具体时间点（until 5 P.M.）；作连词后接从句。常与持续性动词连用，否定句中构成 not... until...（直到……才……）。注意与 by（截止到，强调完成）的动作状态区别。",
        desc: "The office is open until 6 P.M."
    },
    {
        word: "as",
        pos: "接/介",
        ipa: "/æz/",
        cn: "当……时；因为；作为",
        jp: "〜のとき、〜なので、〜として",
        family: "as",
        tips: "超级高频多功能词。作连词引导时间（当……时）或原因（因为）从句；作介词后接职位/身份/功能（as a senior consultant / serve as）。",
        desc: "He works as a director."
    },
    {
        word: "since",
        pos: "介/接/副",
        ipa: "/sɪns/",
        cn: "自……以来；因为，既然",
        jp: "〜以来、〜なので",
        family: "since",
        tips: "兼类词。引导时间时主句用现在完成时（have/has done），介词形式接过去时间点（since 2010）；作原因连词时等同于 because/as，后接从句。",
        desc: "We have grown since 2020."
    },
    {
        word: "given",
        pos: "介/接",
        ipa: "/ˈɡɪvn/",
        cn: "考虑到，鉴于",
        jp: "〜を考慮すると、〜を勘案すれば",
        family: "give / giving",
        tips: "高阶商务行话兼类词。作介词后接名词短语（given the budget constraints）；作连词常用 given that + 从句（鉴于……）。",
        desc: "Given the price, quality is good."
    },
    {
        word: "in light of",
        pos: "介",
        ipa: "/ɪn laɪt əv/",
        cn: "鉴于，考虑到，根据",
        jp: "〜を考慮して、〜に鑑みて",
        family: "light",
        tips: "复合介词短语，完全等同于 considering / given，后接名词短语。常用于说明因最新情况变化而做出决策的背景（如 in light of recent sales figures）。",
        desc: "In light of new data, we revised the plan."
    },
    {
        word: "in the event of",
        pos: "介",
        ipa: "/ɪn ðə ɪˈvent əv/",
        cn: "万一……，如果发生……",
        jp: "万一〜の場合には",
        family: "event",
        tips: "复合介词短语，后接名词/名词短语（如 in the event of an emergency / system failure）。若后接从句则使用连词形式 in the event that + 从句。",
        desc: "In the event of rain, the event will move inside."
    },
    {
        word: "in addition to",
        pos: "介",
        ipa: "/ɪn əˈdɪʃn tuː/",
        cn: "除……之外（还）",
        jp: "〜に加えて、〜の他に",
        family: "add / additional / additionally",
        tips: "复合介词短语，to 为介词，后必须接名词、代词或动名词（-ing），不能接动词原形！意为“除了……还包括……”（等于 besides）。",
        desc: "In addition to salary, we offer bonuses."
    },
    {
        word: "except for",
        pos: "介",
        ipa: "/ɪkˈsept fɔːr/",
        cn: "除了……之外（不包含）",
        jp: "〜を除いては、〜以外は",
        family: "except / exception",
        tips: "介词短语，表达排除在外（等于 apart from / excluding）。后接名词或代词。注意：except 可直接接介词短语或从句，而 except for 强调从整体中排除局部细节。",
        desc: "The report is good except for a few typos."
    },
    {
        word: "regardless of",
        pos: "介",
        ipa: "/rɪˈɡɑːrdləs əv/",
        cn: "不管……，无论……",
        jp: "〜にかかわらず、〜を問わず",
        family: "regard / regarding",
        tips: "复合介词短语，后接名词、代词或 whether 引导的从句短语（如 regardless of weather / cost）。表达排除干预因素，等同于 irrespective of。",
        desc: "All members may join regardless of age."
    },
    {
        word: "instead of",
        pos: "介",
        ipa: "/ɪnˈsted əv/",
        cn: "代替……，而不是……",
        jp: "〜の代わりに、〜ではなく",
        family: "instead",
        tips: "复合介词短语，of 为介词，后接名词、代词或动名词（instead of doing sth）。注意与副词 instead（相反/替代，常置于句首或句末）的区别。",
        desc: "Use tea instead of coffee."
    },
    {
        word: "contrary to",
        pos: "介",
        ipa: "/ˈkɑːntreri tuː/",
        cn: "与……相反，违背……",
        jp: "〜に反して、〜とは逆で",
        family: "contrast / contrarily",
        tips: "复合介词短语，to 为介词，后接名词短语。常用于突出事实与预期、谣言或惯例的相反对比（如 contrary to popular belief / market expectations）。",
        desc: "Contrary to expectations, sales rose."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "before",
        category: "简单",
        stem: "All participants must submit their registration forms ________ entering the seminar hall.",
        options: ["before", "instead of", "regardless of", "except for"],
        correct: "before",
        explanations: {
            guide: "介词与动名词搭配。空格后为动名词短语 entering the seminar hall（进入研讨会大厅），结合逻辑“在进入大厅前必须提交表单”，选时间介词 before。",
            family: "before (prep.在……之前) | instead of (prep.代替) | regardless of (prep.不管) | except for (prep.除了)。",
            details: "before entering 是标准的介词+动名词结构。instead of（代替）、regardless of（不管）在句意上逻辑不符。",
            cn: "所有参赛者在进入研讨会大厅之前必须提交注册表。",
            jp: "すべての参加者は、セミナー会場に入場する前（before）に登録用紙を提出しなければなりません。"
        }
    },
    {
        id: 2,
        target: "in addition to",
        category: "简单",
        stem: "________ a competitive base salary, the company provides comprehensive medical insurance to all full-time employees.",
        options: ["In addition to", "In spite of", "Contrary to", "Except for"],
        correct: "In addition to",
        explanations: {
            guide: "介词短语词义辨析。空格后为名词短语 a competitive base salary，主句提及“还提供全面医疗保险”，表达“除了……之外还”，选 In addition to。",
            family: "In addition to (prep.除……之外还) | In spite of (prep.尽管) | Contrary to (prep.与……相反) | Except for (prep.除了……排除)。",
            details: "In addition to 表达递进累加（等于 besides），后接名词；Contrary to 表示相反；Except for 表示排除。",
            cn: "除了具有竞争力的基本工资外，公司还为所有全职员工提供全面的医疗保险。",
            jp: "競争力のある基本給に加えて（In addition to）、同社はすべての正社員に総合的な医療保険を提供しています。"
        }
    },
    {
        id: 3,
        target: "until",
        category: "简单",
        stem: "The main customer service hotline will remain open ________ 8:00 P.M. every weekday.",
        options: ["until", "since", "given", "contrary to"],
        correct: "until",
        explanations: {
            guide: "时间介词辨析。空格后接具体时间点 8:00 P.M.，配合持续性动词 remain open（保持开放），表达“一直持续到……为止”，选 until。",
            family: "until (prep.直到……为止) | since (prep.自……以来) | given (prep.鉴于) | contrary to (prep.与……相反)。",
            details: "until 强调状态一直持续至某一时刻终止；since 要求主句使用现在完成时，不与一般将来时/一般现在时谓语 remain 搭配。",
            cn: "主客服热线将在每个工作日一直保持开放至晚上 8:00。",
            jp: "メインカスタマーサービスホットラインは、平日午後8時まで（until）営業しています。"
        }
    },
    {
        id: 4,
        target: "instead of",
        category: "简单",
        stem: "To save travel expenses, the sales director suggested hosting a virtual conference ________ traveling to London.",
        options: ["instead of", "in light of", "according to", "in spite of"],
        correct: "instead of",
        explanations: {
            guide: "介词短语与动名词搭配。空格后接动名词短语 traveling to London，结合前半句“为了节省差旅费，建议举办线上会议”，表达“替代/而不是”，选 instead of。",
            family: "instead of (prep.而不是/代替) | in light of (prep.鉴于) | according to (prep.根据) | in spite of (prep.尽管)。",
            details: "instead of doing sth 意为“而不是做某事”，后接动名词，表示选定的替代方案。",
            cn: "为了节省差旅费，销售总监建议举办线上会议，而不是前往伦敦。",
            jp: "出張費を削減するため、営業部長はロンドンへ渡航する代わりに（instead of）バーチャル会議を開催することを提案しました。"
        }
    },
    {
        id: 5,
        target: "after",
        category: "简单",
        stem: "Mr. Davis will assume his new responsibilities as branch manager ________ completing his training period next month.",
        options: ["after", "until", "given", "regardless of"],
        correct: "after",
        explanations: {
            guide: "时间介词辨析。空格后接动名词短语 completing his training period，表达“在完成培训期之后”就任，选 after。",
            family: "after (prep.在……之后) | until (prep.直到……为止) | given (prep.鉴于) | regardless of (prep.不管)。",
            details: "after completing... 属于经典的介词+动名词结构，表示动作的时间先后顺接。",
            cn: "戴维斯先生将在下个月完成培训期后正式履行其支行经理的新职责。",
            jp: "デイビス氏は来月研修期間を終了した後（after）、支店長としての新しい職務に就く予定です。"
        }
    },
    {
        id: 6,
        target: "regardless of",
        category: "简单",
        stem: "The outdoor company picnic will take place as scheduled ________ the weather conditions on Saturday.",
        options: ["regardless of", "instead of", "except for", "contrary to"],
        correct: "regardless of",
        explanations: {
            guide: "介词短语辨析。空格后为名词短语 the weather conditions，结合句意“野餐将按计划进行”，表达“不管/无论”天气状况如何，选 regardless of。",
            family: "regardless of (prep.不管/无论) | instead of (prep.代替) | except for (prep.除了) | contrary to (prep.与……相反)。",
            details: "regardless of sth 意为“不管/无论某事”，常用于排除干扰因素的公告句型。",
            cn: "无论周六的天气状况如何，户外公司野餐都将按计划举行。",
            jp: "土曜日の天候にかかわらず（regardless of）、野外社内ピクニックは予定通り開催されます。"
        }
    },
    {
        id: 7,
        target: "given",
        category: "中等",
        stem: "________ the tight deadline and limited staffing, the completion of the software project was a impressive achievement.",
        options: ["Given", "In addition to", "Except for", "Instead of"],
        correct: "Given",
        explanations: {
            guide: "高阶介词辨析。空格后接名词短语 the tight deadline and limited staffing，表达“考虑到/鉴于”紧迫的截止日期和有限的人手，选 Given。",
            family: "Given (prep.考虑到/鉴于) | In addition to (prep.除了) | Except for (prep.除了……排除) | Instead of (prep.而不是)。",
            details: "Given 作介词意为“考虑到/鉴于”（等于 considering），放在句首作为背景原因交代，在商务总结中高频使用。",
            cn: "考虑到紧迫的截止时间和有限的人力，软件项目的完成是一项令人印象深刻的成就。",
            jp: "厳しい締め切りと限られた人員を考慮すると（Given）、ソフトウェアプロジェクトの完了は素晴らしい成果でした。"
        }
    },
    {
        id: 8,
        target: "in the event of",
        category: "中等",
        stem: "Employees are advised to use the emergency exit stairs ________ a fire alarm or power outage.",
        options: ["in the event of", "in addition to", "instead of", "regardless of"],
        correct: "in the event of",
        explanations: {
            guide: "条件介词短语辨析。空格后接名词短语 a fire alarm or power outage（火灾警报或停电），表达“万一发生/如果出现”，选 in the event of。",
            family: "in the event of (prep.万一发生) | in addition to (prep.除……之外) | instead of (prep.而不是) | regardless of (prep.不管)。",
            details: "in the event of sth 意为“万一发生某事”，是行政安全指南与紧急预案的标准用语。",
            cn: "建议员工在发生火灾警报或停电时使用紧急出口楼梯。",
            jp: "火災警報や停電の発生時には（in the event of）、非常出口階段を使用するよう従業員に指導しています。"
        }
    },
    {
        id: 9,
        target: "in light of",
        category: "中等",
        stem: "The executive committee decided to revise the annual sales target ________ recent market volatility.",
        options: ["in light of", "in spite of", "except for", "contrary to"],
        correct: "in light of",
        explanations: {
            guide: "介词短语词义辨析。空格后为名词短语 recent market volatility（最近的市场波动），表达“鉴于/考虑到”最新的变化而做出修订，选 in light of。",
            family: "in light of (prep.鉴于/考虑到) | in spite of (prep.尽管) | except for (prep.除了) | contrary to (prep.与……相反)。",
            details: "in light of sth 意为“鉴于/考虑到某事”，专门用于说明基于新事实或情况调整计划的依据。",
            cn: "鉴于最近的市场波动，执行委员会决定修定年度销售目标。",
            jp: "最近の市場の変動に鑑みて（in light of）、執行委員会は年間の売上目標を修正することを決定しました。"
        }
    },
    {
        id: 10,
        target: "contrary to",
        category: "中等",
        stem: "________ initial pessimistic forecasts, the company’s third-quarter revenue increased by fifteen percent.",
        options: ["Contrary to", "In addition to", "In the event of", "Given"],
        correct: "Contrary to",
        explanations: {
            guide: "介词短语对比辨析。空格后为名词短语 initial pessimistic forecasts（最初悲观的预测），主句表明“营收增长了15%”，前后呈相反关系，选 Contrary to（与……相反）。",
            family: "Contrary to (prep.与……相反) | In addition to (prep.除了) | In the event of (prep.万一) | Given (prep.考虑到)。",
            details: "Contrary to sth 意为“与某事相反”，常与预期（forecasts / expectations / rumors）搭配，突出反差。",
            cn: "与最初悲观的预测相反，该公司第三季度的收入增长了百分之十五。",
            jp: "当初の悲観的な予測に反して（Contrary to）、同社の第3四半期の売上高は15%増加しました。"
        }
    },
    {
        id: 11,
        target: "except for",
        category: "中等",
        stem: "The entire office building will be open on Saturday, ________ the accounting department on the fourth floor.",
        options: ["except for", "in addition to", "instead of", "regardless of"],
        correct: "except for",
        explanations: {
            guide: "排除介词短语辨析。整体（整栋大楼）与局部（四楼财务部）构成排除逻辑，表达“除了四楼财务部外”，选 except for。",
            family: "except for (prep.除了……排除) | in addition to (prep.除了……还) | instead of (prep.而不是) | regardless of (prep.不管)。",
            details: "except for 用于从整体中排除某一局部细节（等于 excluding）。In addition to 则是包含并递进。",
            cn: "整栋办公楼周六都将开放，除了四楼的财务部之外。",
            jp: "4階の経理部門を除いて（except for）、オフィスビル全体が土曜日に開館します。"
        }
    },
    {
        id: 12,
        target: "since",
        category: "中等",
        stem: "Revenue from online subscriptions has grown steadily ________ the mobile platform was upgraded two years ago.",
        options: ["since", "until", "before", "given"],
        correct: "since",
        explanations: {
            guide: "时态呼应与时间连词。主句谓语为现在完成时 has grown，从句为一般过去时 was upgraded，选引导时间状语从句的连词 since（自……以来）。",
            family: "since (conj.自……以来) | until (conj.直到) | before (conj.在……前) | given (prep.考虑到)。",
            details: "since 引导时间从句时，主句搭配现在完成时，表示从过去的节点（两年前升级）持续至今的增长。",
            cn: "自两年前移动平台升级以来，来自线上订阅的收入稳步增长。",
            jp: "2年前にモバイルプラットフォームが改修されて以来（since）、オンライン購読からの売上は着実に伸びています。"
        }
    },
    {
        id: 13,
        target: "as",
        category: "困难",
        stem: "Ms. Tanaka will serve ________ interim head of the human resources department until a permanent replacement is found.",
        options: ["as", "given", "like", "since"],
        correct: "as",
        explanations: {
            guide: "介词搭配考点。与动词 serve 连用，构成固定短语 serve as + 职位/身份（担任……职务/充当……），选介词 as。",
            family: "as (prep.作为) | given (prep.考虑到) | like (prep.像) | since (prep.自……以来)。",
            details: "serve as... 是托业高管任免中高频考查的动介组合，意为“担任/充当某一职位”。",
            cn: "在找到永久替代人选之前，田中女士将担任人力资源部的临时负责人。",
            jp: "永久的な後任が見つかるまで、田中氏が人事部の臨時責任者として（as）務めます。"
        }
    },
    {
        id: 14,
        target: "in addition to",
        category: "困难",
        stem: "In addition to ________ the quarter-end reports, the financial analyst is responsible for preparing annual tax filings.",
        options: ["compiling", "compile", "compiled", "compilation"],
        correct: "compiling",
        explanations: {
            guide: "复合介词后接动名词考点。In addition to 中的 to 为介词，后面必须接动名词（-ing）或名词，不能接动词原形 compile，选 compiling。",
            family: "compiling (pres-p./gerund 汇编) | compile (v.原形) | compiled (past-p.已汇编) | compilation (n.汇编)。",
            details: "In addition to doing sth 属于顶尖易错点，许多考生误将 to 当作不定式符号而选原形。此处必须选动名词 compiling。",
            cn: "除了编制季度末报告之外，财务分析师还负责准备年度税务申报。",
            jp: "四半期末の報告書をまとめることに加えて（In addition to compiling）、財務アナリストは年次の税務申告の準備も担当しています。"
        }
    },
    {
        id: 15,
        target: "given that",
        category: "困难",
        stem: "________ the main warehouse is operating at maximum capacity, the company needs to rent an external storage facility.",
        options: ["Given that", "Given", "In light of", "In the event of"],
        correct: "Given that",
        explanations: {
            guide: "从属连词结构辨析。空格后接完整的主谓从句 the main warehouse (主) + is operating (谓) ...，需要填入连词结构 Given that（鉴于/考虑到）。",
            family: "Given that (conj.鉴于从句) | Given (prep.鉴于名词) | In light of (prep.鉴于名词) | In the event of (prep.万一名词)。",
            details: "Given 是介词，后接名词短语；Given that 是从属连词，后接完整从句。In light of 和 In the event of 均为介词，不能直接接从句。",
            cn: "鉴于主仓库正在以最大容量运转，该公司需要租用一个外部存储设施。",
            jp: "メインの倉庫が最大稼働していることを考慮すると（Given that）、同社は外部の保管施設を借りる必要があります。"
        }
    },
    {
        id: 16,
        target: "until",
        category: "困难",
        stem: "The regional manager emphasized that no final decision will be reached ________ all survey data has been analyzed.",
        options: ["until", "by", "beforehand", "prior to"],
        correct: "until",
        explanations: {
            guide: "not... until... 句型与连词辨析。主句否定 no final decision will be reached，空格后为完整从句 all survey data has been analyzed，选从属连词 until。",
            family: "until (conj.直到……才) | by (prep.截止到) | beforehand (adv.事先) | prior to (prep.在……之前)。",
            details: "not... until... 意为“直到……才……”。by 和 prior to 是介词，不能直接接从句；beforehand 是副词。",
            cn: "区域经理强调，在分析完所有调查数据之前，不会做出任何最终决定。",
            jp: "エリアマネージャーは、すべての調査データが分析されるまで（until）最終決定は下されないと強調しました。"
        }
    },
    {
        id: 17,
        target: "regardless of",
        category: "困难",
        stem: "All submitted proposals will be evaluated fairly, ________ whether the applicant is an internal employee or an external contractor.",
        options: ["regardless of", "instead of", "contrary to", "except for"],
        correct: "regardless of",
        explanations: {
            guide: "介词短语与 whether 引导的从句短语。表达评估将公平进行，“不论/不管”申请人是内部员工还是外部承包商，选 regardless of。",
            family: "regardless of (prep.不论/不管) | instead of (prep.而不是) | contrary to (prep.与……相反) | except for (prep.除了)。",
            details: "regardless of whether... 属于极高频固定搭配，意为“不论/不管是否……”。",
            cn: "所有提交的企划案都将受到公平评估，无论申请人是内部员工还是外部承包商。",
            jp: "応募者が社内従業員か外部請負業者かにかかわらず（regardless of）、提出されたすべての提案は公平に評価されます。"
        }
    },
    {
        id: 18,
        target: "in the event that",
        category: "困难",
        stem: "________ the flight is canceled due to severe weather, passenger tickets will be automatically refunded in full.",
        options: ["In the event that", "In the event of", "In light of", "In addition to"],
        correct: "In the event that",
        explanations: {
            guide: "条件从属连词与介词辨析。空格后为完整从句 the flight (主) + is canceled (谓) ...，需要填入连词结构 In the event that（万一/如果）。",
            family: "In the event that (conj.万一/如果从句) | In the event of (prep.万一发生名词) | In light of (prep.鉴于) | In addition to (prep.除了)。",
            details: "In the event of 后跟名词短语；In the event that 后跟完整句子（等同于 If）。后跟从句时必须使用带 that 的连词形式。",
            cn: "如果航班因恶劣天气被取消，乘客的机票将被自动全额退款。",
            jp: "悪天候のためフライトがキャンセルされた場合（In the event that）、乗客のチケットは自動的に全額返金されます。"
        }
    }
];