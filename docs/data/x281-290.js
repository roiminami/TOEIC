// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data631-640.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "expenditures",
        pos: "名",
        ipa: "/ɪkˈspendɪtʃərz/",
        cn: "开支，支出，经费（复数）",
        jp: "支出、経費（複数）",
        family: "expenditure / expend / expense / expensive",
        tips: "财报与预算高频：capital/operating expenditures（资本/运营开支），curtail expenditures（削减开支）。",
        desc: "Total expenditures were reduced."
    },
    {
        word: "attire",
        pos: "名",
        ipa: "/əˈtaɪər/",
        cn: "服装，着装，正装",
        jp: "服装、衣装、身なり",
        family: "attired",
        tips: "职场规范与活动高频：business/formal attire（商务正装/正装），casual attire（休闲装）。",
        desc: "Wear proper business attire."
    },
    {
        word: "granular",
        pos: "形",
        ipa: "/ˈɡrænjələr/",
        cn: "细致的，微观的，细分深入的",
        jp: "詳細な、きめ細かい、粒状の",
        family: "granularity / granule / granularly",
        tips: "数据分析与商业智能高频：granular data/breakdown（细分数据/精细分解），granular level（精细颗粒度层面）。",
        desc: "We need granular sales data."
    },
    {
        word: "subsidies",
        pos: "名",
        ipa: "/ˈsʌbsədiz/",
        cn: "补贴，补助金（复数）",
        jp: "補助金、助成金（複数）",
        family: "subsidy / subsidize / subsidized",
        tips: "政府与公共政策高频：government/state subsidies（政府补贴），housing/energy subsidies（住房/能源补贴）。",
        desc: "Firms received government subsidies."
    },
    {
        word: "visionary",
        pos: "形/名",
        ipa: "/ˈvɪʒəneri/",
        cn: "富有远见的，有远见卓识的；有远见的人",
        jp: "先見の明がある、先見的な；先見者",
        family: "vision / visionarily",
        tips: "领导力与创新高频：visionary leader/founder/approach（富有远见的领导者/创始人/方法）。",
        desc: "She is a visionary leader."
    },
    {
        word: "granularity",
        pos: "名",
        ipa: "/ˌɡrænjuˈlærəti/",
        cn: "颗粒度，精细度，细致程度",
        jp: "詳細度、きめ細かさ、粒度",
        family: "granular / granule",
        tips: "大数据与系统架构高频：level of granularity（精细度层级），view data with high granularity（以高精细度查看数据）。",
        desc: "Data has a high level of granularity."
    },
    {
        word: "oral",
        pos: "形",
        ipa: "/ˈɔːrəl/",
        cn: "口头的，口述的，口试的",
        jp: "口頭の、口述の",
        family: "orally",
        tips: "沟通与招聘技能高频：oral presentation/communication（口头演示/口头沟通），oral exam（口试）。",
        desc: "He gave an oral presentation."
    },
    {
        word: "Mandarin",
        pos: "名",
        ipa: "/ˈmændərɪn/",
        cn: "普通话，华语",
        jp: "中国語（北京官話）、マンダリン",
        family: "mandarins",
        tips: "国际招聘与语言资质高频：fluent in Mandarin（普通话流利），written and spoken Mandarin（普通话听说读写能力）。",
        desc: "She is fluent in Mandarin."
    },
    {
        word: "corrupted",
        pos: "形/動",
        ipa: "/kəˈrʌptɪd/",
        cn: "（数据等）损坏的，受破坏的；腐败的",
        jp: "（データなどが）破損した、壊れた；汚職の",
        family: "corrupt / corruption / corruptible",
        tips: "IT运维与文件管理高频：corrupted files/database（损坏的文件/数据库），corrupted hard drive（损坏的硬盘）。",
        desc: "Restore the corrupted database files."
    },
    {
        word: "floral",
        pos: "形",
        ipa: "/ˈflɔːrəl/",
        cn: "花卉的，花香的，饰以花卉图案的",
        jp: "花の、花柄の、フローラルの",
        family: "flora / florist / flower",
        tips: "零售美妆与装饰高频：floral scent/perfume（花香香气/花香型香水），floral arrangement（插花花艺）。",
        desc: "The room has floral decorations."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "attire",
        category: "简单",
        stem: "All employees attending the annual corporate gala are requested to wear formal business ________.",
        options: ["attire", "expenditures", "subsidies", "granularity"],
        correct: "attire",
        explanations: {
            guide: "职场着装名词考点。formal business ________ 属于托业经典固定搭配，表达参加正式晚会时需穿着的“正装/着装”，选 attire。",
            family: "attire (n.服装/着装) | expenditures (n.开支) | subsidies (n.补贴) | granularity (n.颗粒度)。",
            details: "business attire 意为商务着装。expenditures（开支）、subsidies（补贴）均非员工在晚宴上穿戴的服装实体。",
            cn: "所有参加年度公司庆典晚会的员工都被要求穿着正式的商务正装。",
            jp: "年次企業ガラに出席するすべての従業員は、フォーマルなビジネス服装（attire）を着用することが求められます。"
        }
    },
    {
        id: 2,
        target: "subsidies",
        category: "简单",
        stem: "The municipal government offers financial ________ to small businesses that adopt solar energy systems.",
        options: ["subsidies", "attires", "corruptions", "florals"],
        correct: "subsidies",
        explanations: {
            guide: "公共政策补贴名词考点。offers financial ________ 结合市政府向采用太阳能的小微企业提供资金扶持，选 subsidies（补贴/补助金）。",
            family: "subsidies (n.复数补贴) | attires (n.服装) | corruptions (n.腐败) | florals (n.花卉)。",
            details: "financial subsidies 意为财政/资金补贴。attires（服装）、corruptions（腐败）均非政府发放的扶持款项。",
            cn: "市政府向采用太阳能系统的小型企业提供财政补贴。",
            jp: "市当局は、太陽光エネルギーシステムを導入する中小企業に財政的補助金（subsidies）を提供しています。"
        }
    },
    {
        id: 3,
        target: "floral",
        category: "简单",
        stem: "The banquet tables were decorated with elegant ________ arrangements prepared by a local florist.",
        options: ["floral", "oral", "visionary", "granular"],
        correct: "floral",
        explanations: {
            guide: "装饰花艺修饰形容词。elegant ________ arrangements 结合花艺师（florist）精心准备的宴会桌摆设，选 floral（花卉的/鲜花的）。",
            family: "floral (adj.花卉的/鲜花的) | oral (adj.口头的) | visionary (adj.有远见的) | granular (adj.细致的)。",
            details: "floral arrangements 意为鲜花插花摆设。oral（口头的）、visionary（有远见的）无法用来修饰宴会桌花饰。",
            cn: "宴会桌上摆放着由当地花艺师精心布置的优雅鲜花插花。",
            jp: "宴会テーブルは、地元の生花店によって用意されたエレガントなフラワー（floral）アレンジメントで飾られていました。"
        }
    },
    {
        id: 4,
        target: "oral",
        category: "简单",
        stem: "Candidates applying for the public relations specialist role must possess excellent ________ communication skills.",
        options: ["oral", "floral", "corrupted", "subsidized"],
        correct: "oral",
        explanations: {
            guide: "沟通技能修饰形容词。________ communication skills 结合公关专员职位要求，表达出色的“口头”沟通能力，选 oral。",
            family: "oral (adj.口头的/口述的) | floral (adj.花卉的) | corrupted (adj.损坏的) | subsidized (adj.受补贴的)。",
            details: "oral communication skills 属于职场招聘核心词组，意为口头表达与沟通技巧。floral（花香的）无法修饰职业沟通素养。",
            cn: "申请公共关系专员职位的应聘者必须具备出色的口头沟通技能。",
            jp: "広報スペシャリスト職に応募する候補者は、優れた口頭（oral）コミュニケーションスキルを有していなければなりません。"
        }
    },
    {
        id: 5,
        target: "corrupted",
        category: "简单",
        stem: "The IT technician was dispatched immediately to recover several ________ files from the backup server.",
        options: ["corrupted", "visionary", "attired", "granular"],
        correct: "corrupted",
        explanations: {
            guide: "数据损坏修饰形容词/分词。several ________ files 结合从备份服务器紧急恢复受损文件，选 corrupted（损坏的/受破坏的）。",
            family: "corrupted (adj./v-ed损坏的/受损的) | visionary (adj.有远见的) | attired (adj.穿着的) | granular (adj.细微的)。",
            details: "corrupted files 意为受损/损坏的计算机文件。visionary（有远见的）不能用来修饰计算机数据文件。",
            cn: "IT 技术人员立即被派去从备份服务器中恢复几个损坏的文件。",
            jp: "IT技術者は、バックアップサーバーからいくつかの破損した（corrupted）ファイルを復旧するために直ちに派遣されました。"
        }
    },
    {
        id: 6,
        target: "expenditures",
        category: "简单",
        stem: "The financial controller presented a detailed breakdown of all capital ________ for the previous fiscal quarter.",
        options: ["expenditures", "mandarins", "attires", "florals"],
        correct: "expenditures",
        explanations: {
            guide: "财务专有名词复数。capital ________ 属于企业财报极高频术语，表达上一季度的“资本支出”，选 expenditures。",
            family: "expenditures (n.复数支出/经费) | mandarins (n.普通话) | attires (n.服装) | florals (n.花卉图案)。",
            details: "capital expenditures (CapEx) 意为资本性支出。mandarins（普通话）、florals（花卉）均非财务报表上的开支项目。",
            cn: "财务总监提交了上一财政季度所有资本支出的详细分类清单。",
            jp: "財務コントローラーは、前会計四半期のすべての資本的支出（expenditures）の詳細な内訳を提示しました。"
        }
    },
    {
        id: 7,
        target: "visionary",
        category: "中等",
        stem: "Under the ________ leadership of its new CEO, the technology firm successfully expanded into international markets.",
        options: ["visionary", "corrupted", "granular", "oral"],
        correct: "visionary",
        explanations: {
            guide: "领导力修饰形容词。the ________ leadership 结合带领科技公司成功开拓国际市场，选 visionary（富有远见的/有前瞻性的）。",
            family: "visionary (adj.富有远见的) | corrupted (adj.损坏的) | granular (adj.细致的) | oral (adj.口头的)。",
            details: "visionary leadership 意为富有远见的领导力。corrupted（腐败的/损坏的）与带领企业成功扩张的正面语境相反。",
            cn: "在现任首席执行官富有远见的领导下，该科技公司成功开拓了国际市场。",
            jp: "新CEOの先見的な（visionary）リーダーシップの下、そのテクノロジー企業は国際市場への進出に成功しました。"
        }
    },
    {
        id: 8,
        target: "Mandarin",
        category: "中等",
        stem: "Applicants for the regional marketing position must be fluent in both written and spoken ________.",
        options: ["Mandarin", "expenditure", "subsidy", "granularity"],
        correct: "Mandarin",
        explanations: {
            guide: "语言资质专有名词。fluent in both written and spoken ________ 结合要求精通听说读写能力，选 Mandarin（普通话/华语）。",
            family: "Mandarin (n.普通话/华语) | expenditure (n.开支) | subsidy (n.补贴) | granularity (n.颗粒度)。",
            details: "spoken Mandarin 意为普通话口语。expenditure（支出）、granularity（精细度）均非人类语言名称。",
            cn: "申请区域营销职位的应聘者必须在普通话书面语和口语方面均达到流利水平。",
            jp: "地域マーケティング職の応募者は、中国語（Mandarin）の読み書きおよび会話の両方に堪能でなければなりません。"
        }
    },
    {
        id: 9,
        target: "granular",
        category: "中等",
        stem: "The business analytics dashboard allows executives to view sales performance at a highly ________ level.",
        options: ["granular", "visionary", "floral", "oral"],
        correct: "granular",
        explanations: {
            guide: "数据分析修饰形容词。at a highly ________ level 结合商业智能看板查看微观细分销售业绩，选 granular（精细的/细致微观的）。",
            family: "granular (adj.精细的/细粒度的) | visionary (adj.有远见的) | floral (adj.花卉的) | oral (adj.口头的)。",
            details: "at a granular level 属于数据智能分析经典表达，意为在精细颗粒度层面。floral（花香的）、oral（口头的）修饰数据层级不通。",
            cn: "该商业分析看板使高管能够在高度精细微观的层面上查看销售业绩。",
            jp: "ビジネス分析ダッシュボードにより、役員は高度にきめ細かい/詳細な（granular）レベルで売上実績を確認できます。"
        }
    },
    {
        id: 10,
        target: "attire",
        category: "中等",
        stem: "The employee handbook specifies that casual ________ is permitted on Fridays, provided it remains professional.",
        options: ["attire", "expenditure", "subsidy", "visionary"],
        correct: "attire",
        explanations: {
            guide: "员工规范名词考点。casual ________ 属于托业日常行政高频词组，表达周五允许的“休闲着装/便装”，选 attire。",
            family: "attire (n.服装/着装) | expenditure (n.开支) | subsidy (n.补贴) | visionary (adj.有远见的)。",
            details: "casual attire 意为休闲便服/得体便装。expenditure（支出）、subsidy（补贴）均无法与 casual 构成企业着装规范短语。",
            cn: "员工手册明确规定周五允许穿着休闲服装，前提是必须保持职业体面。",
            jp: "従業員ハンドブックには、プロフェッショナルな身だしなみを保っている限り、金曜日にはカジュアルな服装（attire）が認められると明記されています。"
        }
    },
    {
        id: 11,
        target: "subsidies",
        category: "中等",
        stem: "Due to federal budget cuts, government ________ for public transit infrastructure were temporarily reduced.",
        options: ["subsidies", "attires", "mandarins", "corruptions"],
        correct: "subsidies",
        explanations: {
            guide: "公共财政名词复数。government ________ for public transit 结合联邦预算削减导致交通基建拨款缩减，选 subsidies（补贴/拨款）。",
            family: "subsidies (n.复数补贴/资助金) | attires (n.服装) | mandarins (n.普通话) | corruptions (n.腐败)。",
            details: "government subsidies 专指政府补贴。attires（服装）、mandarins（普通话）均非政府支持基础设施建设的财政款项。",
            cn: "由于联邦预算削减，政府对公共交通基础设施的补贴被暂时缩减。",
            jp: "連邦予算の削減により、公共交通インフラに対する政府の補助金（subsidies）は一時的に減額されました。"
        }
    },
    {
        id: 12,
        target: "corrupted",
        category: "中等",
        stem: "Cybersecurity specialists implemented encryption protocols to prevent proprietary source code from being ________.",
        options: ["corrupted", "subsidized", "visionary", "attired"],
        correct: "corrupted",
        explanations: {
            guide: "被动语态分词考点。from being ________ 结合网络安全专家实施加密协议以防源码受损，选过去分词 corrupted（被损坏/被篡改）。",
            family: "corrupted (adj./v-ed被破坏的/损坏的) | subsidized (v-ed受补贴的) | visionary (adj.有远见的) | attired (adj.着装的)。",
            details: "prevent code from being corrupted 意为防止专有代码被破坏受损。subsidized（受资助）与网络防御安全语境无关。",
            cn: "网络安全专家实施了加密协议，以防止专有源代码遭到破坏损坏。",
            jp: "サイバーセキュリティの専門家は、専有ソースコードが破損/改ざん（corrupted）されるのを防ぐために暗号化プロトコルを導入しました。"
        }
    },
    {
        id: 13,
        target: "granularity",
        category: "困难",
        stem: "The newly deployed market research platform analyzes consumer behavior with unprecedented ________.",
        options: ["granularity", "granular", "granule", "visionary"],
        correct: "granularity",
        explanations: {
            guide: "派生抽象名词作介词宾语。with unprecedented ________ 结构中，形容词 unprecedented 后面接名词形式 granularity（精细度/颗粒度）。",
            family: "granularity (n.精细度/颗粒度) | granular (adj.细致的) | granule (n.微粒/颗粒) | visionary (adj.有远见的)。",
            details: "with unprecedented granularity 意为以前所未有的精细度。granular 是形容词，granule 是具体的颗粒物体，在此处修饰分析深度需用抽象名词 granularity。",
            cn: "新部署的市场研究平台以前所未有的精细度分析消费者行为。",
            jp: "新しく導入された市場調査プラットフォームは、前例のない詳細度/きめ細かさ（granularity）で消費者行動を分析します。"
        }
    },
    {
        id: 14,
        target: "expenditures",
        category: "困难",
        stem: "The board of directors rigorously reviewed total operational ________ before approving the upcoming fiscal budget.",
        options: ["expenditures", "expending", "expend", "attire"],
        correct: "expenditures",
        explanations: {
            guide: "派生复数名词宾语。reviewed total operational ________ 结构中，形容词 operational 后面接名词中心语，表达审查全部运营“开支/支出”，选 expenditures。",
            family: "expenditures (n.复数开支/经费) | expending (v-ing支出) | expend (v.花费) | attire (n.服装)。",
            details: "operational expenditures (OpEx) 属于企业财务专属术语，习惯使用复数名词 expenditures。expend 是动词原形，不能作及物动词 reviewed 的宾语。",
            cn: "董事会在批准即将到来的财政预算之前，严格审查了全部运营开支。",
            jp: "取締役会は、次期会計予算を承認する前に、総運営支出（expenditures）を厳格に審査しました。"
        }
    },
    {
        id: 15,
        target: "visionary",
        category: "困难",
        stem: "Industry experts commended the architect for her ________ approach to designing energy-efficient public spaces.",
        options: ["visionary", "vision", "visionarily", "corrupted"],
        correct: "visionary",
        explanations: {
            guide: "修饰抽象名词的派生形容词。her ________ approach 结构中，修饰名词 approach（方法/理念），选形容词 visionary（富有前瞻远见的）。",
            family: "visionary (adj.有远见的/前瞻的) | vision (n.眼光/远见) | visionarily (adv.有远见地) | corrupted (adj.损坏的)。",
            details: "visionary approach 意为富有远见的设计方法。vision 是名词，visionarily 是副词，均不能直接充当名词 approach 的前置定语。",
            cn: "行业专家称赞该建筑师在设计节能公共空间方面所采用的富有前瞻远见的方法。",
            jp: "業界の専門家は、省エネ公共空間の設計に対する彼女の先見的な（visionary）アプローチを称賛しました。"
        }
    },
    {
        id: 16,
        target: "oral",
        category: "困难",
        stem: "The research fellow was required to deliver an ________ summary of the laboratory findings during the symposium.",
        options: ["oral", "orally", "floral", "subsidized"],
        correct: "oral",
        explanations: {
            guide: "派生形容词作定语。an ________ summary 结构中，不定冠词 an 提示后接元音开头的形容词修饰 summary，表达“口头”汇报总结，选 oral。",
            family: "oral (adj.口头的/口述的) | orally (adv.口头地) | floral (adj.花卉的) | subsidized (adj.受资助的)。",
            details: "an oral summary 意为口头总结概述。orally 是副词，不能作名词 summary 的前置定语；floral（花卉的）与学术研讨会汇报无关。",
            cn: "该研究员被要求在专题研讨会期间就实验室研究结果发表口头总结报告。",
            jp: "研究員は、シンポジウム中に実験室の研究結果に関する口頭の（oral）要約を発表することを求められました。"
        }
    },
    {
        id: 17,
        target: "granular",
        category: "困难",
        stem: "To better understand regional sales variances, the audit committee requested a more ________ financial breakdown.",
        options: ["granular", "granularity", "vision", "attired"],
        correct: "granular",
        explanations: {
            guide: "比较级副词后修饰形容词。a more ________ financial breakdown 结构中，副词 more 后面接形容词修饰 breakdown（明细表/拆解分析），选 granular（细致深入的）。",
            family: "granular (adj.细致的/颗粒化的) | granularity (n.细致度) | vision (n.视野) | attired (adj.着装的)。",
            details: "a more granular breakdown 意为更精细的明细分类。granularity 是名词，不能跟在 more 后面充当修饰 breakdown 的定语。",
            cn: "为了更好地了解区域销售差异，审计委员会要求提供一份更加精细深入的财务明细分解报告。",
            jp: "地域の売上差異をより的確に把握するため、監査委員会はより詳細な/きめ細かい（granular）財務内訳を要求しました。"
        }
    },
    {
        id: 18,
        target: "corrupted",
        category: "困难",
        stem: "The database recovery software is engineered to detect and repair ________ data blocks automatically.",
        options: ["corrupted", "corruption", "corruptible", "subsidized"],
        correct: "corrupted",
        explanations: {
            guide: "过去分词作定语修饰。repair ________ data blocks 结构中，修饰数据块，表达被“破坏受损的”数据块，选过去分词 corrupted。",
            family: "corrupted (adj./v-ed受损损坏的) | corruption (n.破坏/腐败) | corruptible (adj.易腐蚀的) | subsidized (adj.受补贴的)。",
            details: "corrupted data blocks 专指损坏的计算机数据块。corruption 是名词，corruptible 表示容易变坏的倾向，均不如 corrupted 能准确表达已处于损坏状态的数据实体。",
            cn: "该数据库恢复软件专门设计用于自动检测并修复损坏的数据块。",
            jp: "そのデータベース復旧ソフトウェアは、破損した（corrupted）データブロックを自動的に検出して修復するように設計されています。"
        }
    }
];