// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data341-350.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "partition",
        pos: "名/動",
        ipa: "/pɑːrˈtɪʃn/",
        cn: "隔断，隔板；分割",
        jp: "仕切り、パーティション；分割する",
        family: "partitioned / partitioning",
        tips: "办公环境高频：glass partition（玻璃隔断），partition walls（隔墙）。",
        desc: "The glass partition divides rooms."
    },
    {
        word: "podcast",
        pos: "名",
        ipa: "/ˈpɑːdkæst/",
        cn: "播客，网络广播",
        jp: "ポッドキャスト、音声配信",
        family: "podcasting / podcaster",
        tips: "媒体与传播高频：subscribe to a podcast（订阅播客），weekly podcast（每周播客）。",
        desc: "She listens to a podcast."
    },
    {
        word: "provider",
        pos: "名",
        ipa: "/prəˈvaɪdər/",
        cn: "供应商，服务提供商",
        jp: "提供者、事業者、プロバイダー",
        family: "provide / provision / provided",
        tips: "商务采购与服务高频：service provider（服务提供商），healthcare provider（医疗服务机构）。",
        desc: "They chose a new provider."
    },
    {
        word: "recipe",
        pos: "名",
        ipa: "/ˈresəpi/",
        cn: "菜谱，配方；秘诀",
        jp: "レシピ、調理法；処方",
        family: "recipes",
        tips: "餐饮与生活高频：secret recipe（秘密配方），recipe book（食谱书）。",
        desc: "Follow the secret recipe closely."
    },
    {
        word: "rehearsal",
        pos: "名",
        ipa: "/rɪˈhɜːrsl/",
        cn: "彩排，排练",
        jp: "リハーサル、通し稽古",
        family: "rehearse / rehearsing / rehearsed",
        tips: "活动与演出高频：dress rehearsal（彩排/总排练），rehearsal time（排练时间）。",
        desc: "The dress rehearsal went well."
    },
    {
        word: "scan",
        pos: "動/名",
        ipa: "/skæn/",
        cn: "扫描；浏览，细查",
        jp: "スキャンする；閲覧する",
        family: "scanner / scanned / scanning",
        tips: "办公与文档高频：scan a document（扫描文档），scan the barcode（扫描条形码）。",
        desc: "Please scan the barcode now."
    },
    {
        word: "series",
        pos: "名",
        ipa: "/ˈsɪriːz/",
        cn: "系列，连续",
        jp: "系列、一连、シリーズ",
        family: "serial / serially",
        tips: "讲座与产品高频：a series of lectures（系列讲座），lecture series（系列讲座）。",
        desc: "They launched a new series."
    },
    {
        word: "session",
        pos: "名",
        ipa: "/ˈseʃn/",
        cn: "会议，（某项活动的）段时间/环节",
        jp: "会期、セッション、研修",
        family: "sessions",
        tips: "会议与培训高频：training session（培训环节/课程），q&a session（问答环节）。",
        desc: "Attend the training session."
    },
    {
        word: "shuttle",
        pos: "名/動",
        ipa: "/ˈʃʌtl/",
        cn: "穿梭巴士；往返穿梭",
        jp: "シャトルバス；往復運航する",
        family: "shuttling / shuttled",
        tips: "交通与酒店高频：shuttle bus（接驳巴士），airport shuttle（机场穿梭巴士）。",
        desc: "Take the airport shuttle bus."
    },
    {
        word: "smoothly",
        pos: "副",
        ipa: "/ˈsmuːðli/",
        cn: "顺利地，平稳地",
        jp: "円滑に、スムーズに",
        family: "smooth / smoothness",
        tips: "运营与项目表达高频：run smoothly（平稳运行/顺利进行）。",
        desc: "The event ran very smoothly."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "shuttle",
        category: "简单",
        stem: "Guests staying at the hotel can take advantage of the complimentary airport ________ service.",
        options: ["shuttle", "recipe", "partition", "rehearsal"],
        correct: "shuttle",
        explanations: {
            guide: "酒店服务交通名词。complimentary airport ________ service 表达“免费的机场接驳班车服务”，选 shuttle。",
            family: "shuttle (n.接驳巴士) | recipe (n.菜谱) | partition (n.隔断) | rehearsal (n.彩排)。",
            details: "airport shuttle service 意为机场接驳班车服务。recipe（菜谱）、partition（隔断）均非交通服务设施。",
            cn: "入住酒店的客人可以利用免费的机场接驳班车服务。",
            jp: "ホテルに宿泊するゲストは、無料の空港シャトル（shuttle）サービスを利用できます。"
        }
    },
    {
        id: 2,
        target: "smoothly",
        category: "简单",
        stem: "The IT department worked diligently to ensure that the software upgrade went ________.",
        options: ["smoothly", "smooth", "session", "provider"],
        correct: "smoothly",
        explanations: {
            guide: "副词修饰动词。went ________ 结构中，用副词修饰不及物动词 went，表达升级进行得“顺利/平稳”，选 smoothly。",
            family: "smoothly (adv.顺利地) | smooth (adj.平滑的) | session (n.环节) | provider (n.供应商)。",
            details: "went smoothly 属于托业经典动副搭配，意为进展顺利。smooth 是形容词，不能直接修饰动词 went。",
            cn: "IT 部门勤奋工作，以确保软件升级顺利进行。",
            jp: "IT部門は、ソフトウェアのアップグレードがスムーズに（smoothly）進行するよう熱心に作業しました。"
        }
    },
    {
        id: 3,
        target: "recipe",
        category: "简单",
        stem: "The restaurant chef strictly followed the traditional family ________ to prepare the signature dish.",
        options: ["recipe", "rehearsal", "podcast", "partition"],
        correct: "recipe",
        explanations: {
            guide: "餐饮烹饪名词。followed the traditional family ________ 结合主厨烹制招牌菜，选 recipe（菜谱/配方）。",
            family: "recipe (n.菜谱/配方) | rehearsal (n.彩排) | podcast (n.播客) | partition (n.隔断)。",
            details: "family recipe 意为家传菜谱/配方。rehearsal（彩排）、podcast（播客）与烹饪招牌菜不符。",
            cn: "餐厅主厨严格遵循传统的家传菜谱来烹制招牌菜。",
            jp: "レストランのシェフは、看板料理を調理するために伝統的な秘伝のレシピ（recipe）を厳格に守りました。"
        }
    },
    {
        id: 4,
        target: "scan",
        category: "简单",
        stem: "Please ________ the original contract and email it to the HR department as a PDF document.",
        options: ["scan", "scanner", "shuttle", "podcast"],
        correct: "scan",
        explanations: {
            guide: "祈使句动词原形。Please 后面接动词原形，表达“扫描”原件并发送邮件，选 scan。",
            family: "scan (v.扫描) | scanner (n.扫描仪) | shuttle (n.班车) | podcast (n.播客)。",
            details: "Please scan the contract 意为请扫描合同。scanner 是名词（扫描仪），不能紧跟在 Please 后面做祈使句谓语。",
            cn: "请扫描合同原件，并将其作为 PDF 文档发送邮件至人力资源部。",
            jp: "契約書の原文をスキャン（scan）し、PDF文書として人事部にメールで送信してください。"
        }
    },
    {
        id: 5,
        target: "session",
        category: "简单",
        stem: "Attendees were invited to participate in a brief Q&A ________ following the main presentation.",
        options: ["session", "series", "shuttle", "recipe"],
        correct: "session",
        explanations: {
            guide: "商务会议高频短语。Q&A ________ 属于会议表达，意为“问答环节/问答会”，选 session。",
            family: "session (n.环节/时间) | series (n.系列) | shuttle (n.班车) | recipe (n.配方)。",
            details: "Q&A session 意为问答环节。series（系列）、shuttle（班车）均不能与 Q&A 组成固定的会议环节词组。",
            cn: "与会者被邀请在主演示会后参加一个简短的问答环节。",
            jp: "参加者はメインプレゼンテーションの後の短い質疑応答セッション（session）に参加するよう案内されました。"
        }
    },
    {
        id: 6,
        target: "provider",
        category: "简单",
        stem: "The purchasing manager selected a new internet service ________ to reduce annual communication fees.",
        options: ["provider", "provide", "partition", "rehearsal"],
        correct: "provider",
        explanations: {
            guide: "IT与采购名词考点。internet service ________ 属于固定表达，意为“网络服务提供商/运营商”，选 provider。",
            family: "provider (n.提供商) | provide (v.提供) | partition (n.隔断) | rehearsal (n.彩排)。",
            details: "service provider 意为服务提供商。provide 为动词，不能在名词短语中充当中心语。",
            cn: "采购经理选择了一家新的网络服务提供商，以降低年度通信费用。",
            jp: "購買マネージャーは、年間通信費を削減するために新しいインターネットサービスプロバイダー（provider）を選択しました。"
        }
    },
    {
        id: 7,
        target: "rehearsal",
        category: "中等",
        stem: "Cast members assembled on stage for the final dress ________ before opening night.",
        options: ["rehearsal", "rehearse", "recipe", "shuttle"],
        correct: "rehearsal",
        explanations: {
            guide: "演艺活动高频短语。final dress ________ 属于戏剧与演出固定表达，意为“最后一次总彩排”，选 rehearsal。",
            family: "rehearsal (n.彩排/排练) | rehearse (v.排练) | recipe (n.菜谱) | shuttle (n.班车)。",
            details: "dress rehearsal 专指带妆彩排/总彩排。rehearse 是动词，不能放在形容词 final dress 后面作名词中心语。",
            cn: "演员们在舞台上集合，进行首演夜前的最后一次总彩排。",
            jp: "出演者たちは初日の夜を前に、最後のドレスリハーサル（rehearsal）のためにステージに集まりました。"
        }
    },
    {
        id: 8,
        target: "partition",
        category: "中等",
        stem: "Facilities management installed a clear glass ________ to separate the reception area from the workstations.",
        options: ["partition", "provider", "series", "podcast"],
        correct: "partition",
        explanations: {
            guide: "办公隔断设施名词。a clear glass ________ 结合分隔接待区与工作台，设施选 partition（隔断/隔板）。",
            family: "partition (n.隔断/隔板) | provider (n.提供商) | series (n.系列) | podcast (n.播客)。",
            details: "glass partition 意为玻璃隔断。provider（提供商）、series（系列）均非建筑工程隔离设施。",
            cn: "设施管理部门安装了一块透明玻璃隔断，将接待区与工作台分隔开来。",
            jp: "施設管理部門は、受付エリアとワークステーションを分離するために透明なガラスの仕切り（partition）を設置しました。"
        }
    },
    {
        id: 9,
        target: "podcast",
        category: "中等",
        stem: "The financial advisory firm launched a weekly ________ discussing global market investment strategies.",
        options: ["podcast", "rehearsal", "recipe", "partition"],
        correct: "podcast",
        explanations: {
            guide: "数字媒体名词考点。launched a weekly ________ 结合讨论全球市场投资策略，媒体形式选 podcast（播客）。",
            family: "podcast (n.播客) | rehearsal (n.彩排) | recipe (n.配方) | partition (n.隔断)。",
            details: "weekly podcast 意为每周播客。rehearsal（彩排）、partition（隔断）与讨论投资策略的定期数字音频节目无关。",
            cn: "这家财务咨询公司推出了一档每周播客，讨论全球市场投资策略。",
            jp: "その金融顧問会社は、世界市場の投資戦略について議論する週刊ポッドキャスト（podcast）を開始しました。"
        }
    },
    {
        id: 10,
        target: "series",
        category: "中等",
        stem: "The university will host a ________ of public lectures on renewable energy during the fall semester.",
        options: ["series", "session", "smoothly", "scan"],
        correct: "series",
        explanations: {
            guide: "固定数量短语。a ________ of public lectures 属于经典托业表达，意为“一系列（公共讲座）”，选 series。",
            family: "series (n.系列/连续) | session (n.环节/会议) | smoothly (adv.顺利地) | scan (v.扫描)。",
            details: "a series of... 意为一系列……。session 需用短语 a session of 时多指单次会议/环节，表述多场讲座组成的系列用 series。",
            cn: "该大学将在秋季学期举办一系列关于可再生能源的公开讲座。",
            jp: "その大学は秋学期に、再生可能エネルギーに関する一連の（series）公開講座を開催する予定です。"
        }
    },
    {
        id: 11,
        target: "scan",
        category: "中等",
        stem: "Records officers use a high-speed document ________ to convert historical paper archives into digital files.",
        options: ["scanner", "scan", "provider", "shuttle"],
        correct: "scanner",
        explanations: {
            guide: "派生设备名词考点。high-speed document ________ 指用于将纸质文件转为电子档的“扫描仪”，选 scanner。",
            family: "scanner (n.扫描仪) | scan (v./n.扫描) | provider (n.提供商) | shuttle (n.班车)。",
            details: "document scanner 意为文档扫描仪。scan 为动词原形，不能在此作表示具体硬件设备的名词中心语。",
            cn: "档案官员使用高速文档扫描仪将历史纸质档案转换为数字文件。",
            jp: "記録担当者は、歴史的な紙のアーカイブをデジタルファイルに変換するために高速ドキュメントスキャナー（scanner）を使用しています。"
        }
    },
    {
        id: 12,
        target: "provider",
        category: "中等",
        stem: "The corporate procurement committee is evaluating proposals from several telecom ________.",
        options: ["providers", "provider", "partitions", "rehearsals"],
        correct: "providers",
        explanations: {
            guide: "商业采购复数名词。several 后面接可数名词复数，评估来自几家电信“服务提供商/运营商”的提案，选 providers。",
            family: "providers (n.复数提供商) | provider (n.单数) | partitions (n.隔断) | rehearsals (n.彩排)。",
            details: "telecom providers 指电信运营商/提供商。several 限定词要求使用复数形式 providers。",
            cn: "公司采购委员会正在评估来自几家电信提供商的提案。",
            jp: "企業の調達委員会は、いくつかの電気通信事業者（providers）からの提案書を評価しています。"
        }
    },
    {
        id: 13,
        target: "smoothly",
        category: "困难",
        stem: "Project managers established clear protocols to guarantee the ________ of the system migration process.",
        options: ["smoothness", "smoothly", "session", "series"],
        correct: "smoothness",
        explanations: {
            guide: "派生抽象名词考点。guarantee the ________ of... 结构中，在定冠词 the 与介词 of 之间填入抽象名词 smoothness（顺利/平稳）。",
            family: "smoothness (n.平稳/顺利) | smoothly (adv.顺利地) | session (n.环节) | series (n.系列)。",
            details: "smoothness of the process 意为过程的平稳顺利。smoothly 是副词，不能跟在定冠词 the 后面做及物动词 guarantee 的宾语。",
            cn: "项目经理制定了明确的协议，以保证系统迁移过程的平稳顺利。",
            jp: "プロジェクトマネージャーは、システム移行プロセスの円滑さ（smoothness）を保証するための明確なプロトコルを確立しました。"
        }
    },
    {
        id: 14,
        target: "rehearsal",
        category: "困难",
        stem: "The theatrical group spent weeks ________ their complex choreography prior to the national tour.",
        options: ["rehearsing", "rehearsal", "podcasting", "shuttling"],
        correct: "rehearsing",
        explanations: {
            guide: "固定句型与动名词。spent time ________ (V-ing) 结构中，表达花费数周时间“排练”舞蹈编排，选 rehearsing。",
            family: "rehearsing (v-ing排练) | rehearsal (n.彩排) | podcasting (v-ing制作播客) | shuttling (v-ing穿梭)。",
            details: "spent weeks rehearsing... 属于 spend time doing sth 结构。rehearsal 是名词，不能紧跟在 spent weeks 后面做动名词宾语。",
            cn: "剧团在全国巡演前花了数周时间排练其复杂的舞蹈动作。",
            jp: "その劇団は全国ツアーに先立ち、複雑な振付を練習する（rehearsing）のに数週間を費やしました。"
        }
    },
    {
        id: 15,
        target: "partition",
        category: "困难",
        stem: "Contractors ________ the open-plan office space into distinct meeting rooms using soundproof drywall.",
        options: ["partitioned", "partition", "scanned", "shuttled"],
        correct: "partitioned",
        explanations: {
            guide: "及物动词过去式与结构。partition A into B 属于高频建筑/办公空间短语，意为“把 A 分隔/隔离成 B”，选 partitioned。",
            family: "partitioned (v-ed隔开/隔断) | partition (v./n.原形) | scanned (v-ed扫描) | shuttled (v-ed穿梭)。",
            details: "partitioned A into B 意为把 A 隔成了 B。partition 是动词原形，在此处与全句过去时态不符。",
            cn: "承包商使用隔音干壁将开放式办公空间分隔成不同的会议室。",
            jp: "請負業者は、防音ドライウォールを使用して、オープンプランのオフィススペースを個別の会議室に区切りました（partitioned）。"
        }
    },
    {
        id: 16,
        target: "session",
        category: "困难",
        stem: "The corporate training department scheduled multiple specialized ________ to enhance workplace leadership skills.",
        options: ["sessions", "session", "recipes", "podcasts"],
        correct: "sessions",
        explanations: {
            guide: "培训会议复数考点。scheduled multiple specialized ________ 结构中，multiple 后面接复数可数名词，选 sessions（培训环节/课程）。",
            family: "sessions (n.复数培训课程/环节) | session (n.单数) | recipes (n.配方) | podcasts (n.播客)。",
            details: "training sessions 意为培训课程/环节。multiple 限定词决定了需要使用复数名词 sessions。",
            cn: "公司培训部门安排了多次专业培训环节，以提升工作场所的领导技能。",
            jp: "企業の研修部門は、職場でのリーダーシップスキルを向上させるために、いくつかの専門セッション（sessions）をスケジュールしました。"
        }
    },
    {
        id: 17,
        target: "provider",
        category: "困难",
        stem: "The efficient ________ of emergency medical services is critical to ensuring public safety during large events.",
        options: ["provision", "provider", "recipe", "rehearsal"],
        correct: "provision",
        explanations: {
            guide: "派生抽象名词考点。The efficient ________ of... 结构中，在定冠词与介词 of 之间填入抽象名词 provision（提供/供应）。",
            family: "provision (n.提供/供应) | provider (n.提供商/个人) | recipe (n.配方) | rehearsal (n.彩排)。",
            details: "provision of services 意为服务的提供/供给。provider 指具体的人或机构，在此处表达“服务的提供这一行为”时选用抽象名词 provision。",
            cn: "高效提供紧急医疗服务对于确保大型活动期间的公共安全至关重要。",
            jp: "大型イベント中の公共の安全を確保するためには、救急医療サービスの効率的な提供（provision）が不可欠です。"
        }
    },
    {
        id: 18,
        target: "shuttle",
        category: "困难",
        stem: "To ease downtown traffic congestion, municipal authorities operates a dedicated fleet of ________ vehicles.",
        options: ["shuttle", "shuttling", "smoothly", "partitioned"],
        correct: "shuttle",
        explanations: {
            guide: "名词作前置定语考点。a dedicated fleet of ________ vehicles 表达“接驳车辆”，用名词 shuttle 作前置定语修饰 vehicles。",
            family: "shuttle (n./adj.接驳/穿梭) | shuttling (v-ing) | smoothly (adv.顺利地) | partitioned (adj.隔开的)。",
            details: "shuttle vehicles 属于交通运输专属短语，意为接驳车/穿梭车。shuttle 在此处作前置定语，修饰复数名词 vehicles。",
            cn: "为缓解市中心交通拥堵，市政当局运营着一支专门的接驳车辆车队。",
            jp: "ダウンタウンの交通渋滞を緩和するため、市当局は専属のシャトル（shuttle）車両艦隊を運行しています。"
        }
    }
];