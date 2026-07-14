// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag111-120.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "comfortable",
        pos: "形",
        ipa: "/ˈkʌmftəbl/",
        cn: "舒服的，舒适的，宽裕的",
        jp: "快適な、心地よい、十分な",
        family: "comfort / comfortably / discomfort",
        tips: "办公环境、差旅通勤及员工福利高频形容词。常考搭配 comfortable working environment（舒适的工作环境）。在听力场景中，常用于对办公家具或出差酒店的正面反馈。",
        desc: "The chair is comfortable."
    },
    {
        word: "search",
        pos: "動/名",
        ipa: "/sɜːrtʃ/",
        cn: "寻找，搜寻，调查",
        jp: "探す、捜索する、検索する",
        family: "searcher / searched / searching",
        tips: "行政办公与技术搜索场景核心词。作动词时极常考搭配 search for...（寻找……）。在阅读中，经常与 look for 或 seek 相互进行同义替换。",
        desc: "We search for information."
    },
    {
        word: "photography",
        pos: "名",
        ipa: "/fəˈtɑːɡrəfi/",
        cn: "摄影，照相术",
        jp: "写真撮影、写真術",
        family: "photograph / photographer / photographic",
        tips: "市场营销、广告宣传与文化活动高频名词。托业中极常考复合名词形式，如 digital photography（数码摄影）。注意其人称名词 photographer（摄影师）也是语法题常客。",
        desc: "She loves photography."
    },
    {
        word: "maintain",
        pos: "動",
        ipa: "/meɪnˈteɪn/",
        cn: "维持，保持；维修，保养",
        jp: "維持する、保守する、主張する",
        family: "maintenance / maintained / maintaining",
        tips: "后勤设备、客户关系与企业战略核心动词。高频商务短语 maintain a competitive edge（保持竞争优势）、maintain equipment（保养设备）。名词形式 maintenance（维护）也是重中之重。",
        desc: "Maintain the machine regularly."
    },
    {
        word: "demand",
        pos: "名/動",
        ipa: "/dɪˈmænd/",
        cn: "需求，要求",
        jp: "需要、要求；要求する",
        family: "demanding / demanded / demands",
        tips: "供应链、销售预测与市场营销核心词。最常考搭配 in high demand（需求量很大）、meet the market demand（满足市场需求）。其形容词 demanding 意为“要求高的/吃力的”，多修饰 schedule（日程）。",
        desc: "The demand is high."
    },
    {
        word: "involve",
        pos: "動",
        ipa: "/ɪnˈvɑːlv/",
        cn: "涉及，包含；使参与",
        jp: "伴う、巻き込む、関与させる",
        family: "involvement / involved / involving",
        tips: "职责描述与项目合作高频动词。在托业语法中常考 involve doing something（涉及做某事，接动名词作宾语），或 be involved in...（参与到……中）。常与 contain 或 include 同义替换。",
        desc: "This job involves travel."
    },
    {
        word: "improvement",
        pos: "名",
        ipa: "/ɪmˈpruːvmənt/",
        cn: "改进，改善，进步",
        jp: "改善、向上、改良",
        family: "improve / improved / improvable",
        tips: "生产管理与员工绩效高频名词。极高频搭配 show a significant improvement（表现出显著改进）、room for improvement（改进空间）。其动词形式 improve 属于商务改造、重组场景的核心谓语。",
        desc: "There is some improvement."
    },
    {
        word: "postpone",
        pos: "動",
        ipa: "/pəʊˈspəʊn/",
        cn: "推迟，延期",
        jp: "延期する、後回しにする",
        family: "postponement / postponed / postponing",
        tips: "日常行程、会议安排与项目节点最核心动词。在托业阅读中，与 delay 或 put off 属于不可分割的铁三角同义替换词。常考搭配 postpone the meeting to...（将会议推迟到……）。",
        desc: "We must postpone it."
    },
    {
        word: "advise",
        pos: "動",
        ipa: "/ədˈvaɪz/",
        cn: "建议，忠告，通知",
        jp: "勧める、助言する、通知する",
        family: "advice / adviser / advisory",
        tips: "政策通知与客户咨询核心动词。核心语法结构为 advise someone to do something（建议某人做某事）。注意其名词 advice 为不可数名词，而形容词 advisory 意为“咨询的/顾问的”。",
        desc: "I advise you to go."
    },
    {
        word: "obtain",
        pos: "動",
        ipa: "/əbˈteɪn/",
        cn: "获得，得到",
        jp: "得る、獲得する",
        family: "obtainable / obtained / obtaining",
        tips: "行政资质申请、采购与合同谈判核心动词。高频搭配 obtain approval / authorization（获得批准/授权）、obtain a permit（获得许可证）。在商务写作中常用来替换更口语化的 get 或 acquire。",
        desc: "You must obtain permission."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "comfortable",
        category: "简单",
        stem: "The ergonomic office chairs provided to the graphic design team are very ________ and help reduce back pain.",
        options: ["comfortable", "postpone", "demand", "office"],
        correct: "comfortable",
        explanations: {
            guide: "系动词后的形容词作表语。空格前有系动词 are 和程度副词 very，需填入形容词，结合人体工学椅（ergonomic chairs）语境选 comfortable。",
            family: "comfortable (adj.舒适的) | postpone (v.推迟) | demand (n./v.需求) | office (n.办公室)。",
            details: "comfortable chairs 意为“舒适的椅子”，符合办公环境改善与员工福利的经典商业语境。其他干扰项无法作此形容词表语或不符逻辑。",
            cn: "提供给美工设计团队的人体工学办公椅非常舒适，有助于减轻背痛。",
            jp: "グラフィックデザインチームに提供された人間工学に基づいたオフィスチェアは非常に快適（comfortable）で、腰痛の軽減に役立っています。"
        }
    },
    {
        id: 2,
        target: "search",
        category: "简单",
        stem: "The human resources department is conducting a global ________ for a qualified financial director.",
        options: ["search", "maintain", "photography", "weekend"],
        correct: "search",
        explanations: {
            guide: "冠词与介词之间的名词中心语。空格前有不定冠词 a 和形容词 global，后有介词 for，需填入名词，结合HR寻找财务总监的语境选 search。",
            family: "search (n./v.搜寻) | maintain (v.维持) | photography (n.摄影) | weekend (n.周末)。",
            details: "conduct a search for... 意为“开展对……的搜寻/招聘”，是人力资源招聘场景的高频经典表达。其他选项词性不符或不符合介词搭配。",
            cn: "人力资源部正在全球范围内搜寻合格的财务总监。",
            jp: "人事部は、有能な財務ディレクターをグローバルに捜索（search）しています。"
        }
    },
    {
        id: 3,
        target: "photography",
        category: "简单",
        stem: "The tourism board decided to hire a professional studio to handle the marketing ________ for the new resort.",
        options: ["photography", "advise", "obtain", "closed"],
        correct: "photography",
        explanations: {
            guide: "修饰词后的名词中心词。空格前有营销（marketing），后面需填入名词作 handle 的宾语，结合 hire a professional studio（雇用专业工作室）选 photography。",
            family: "photography (n.摄影) | advise (v.建议) | obtain (v.获得) | closed (adj.关闭的)。",
            details: "marketing photography 意为“营销摄影”，在旅游推广、广告宣传中是极常见的业务外包概念。其余干扰项词性不符或意思完全不通。",
            cn: "旅游局决定雇用一家专业工作室来负责新度假村的营销摄影工作。",
            jp: "観光局は、新しいリゾートのマーケティング写真撮影（photography）を担当してもらうために、プロのスタジオを雇うことに決めました。"
        }
    },
    {
        id: 4,
        target: "maintain",
        category: "简单",
        stem: "Technicians must inspect the backup power generators regularly to ________ maximum operational safety.",
        options: ["maintain", "comfortable", "improvement", "because"],
        correct: "maintain",
        explanations: {
            guide: "动词不定式引导目的状语。To 后面必须接动词原形，结合宾语 safety（安全）选用及物动词 maintain。",
            family: "maintain (v.维持/保养) | comfortable (adj.舒适的) | improvement (n.改进) | because (conj.因为)。",
            details: "maintain safety / efficiency 意为“保持/维护安全或效率”，是后勤设备维护和安全生产的标准商务词汇。其余干扰项词性错误。",
            cn: "技术人员必须定期检查备用发电机，以维持最大的操作安全。",
            jp: "技術者は、最大の運用安全性を維持（maintain）するために、定期的に予備発電機を検査する必要があります。"
        }
    },
    {
        id: 5,
        target: "demand",
        category: "简单",
        stem: "Due to a sudden increase in consumer ________, the factory decided to double its daily production.",
        options: ["demand", "search", "postpone", "proposed"],
        correct: "demand",
        explanations: {
            guide: "名词词义与搭配辨析。空格前有 consumer（消费者），需填入名词作介词 in 的宾语，结合工厂加倍生产（double production）的供应链语境选 demand。",
            family: "demand (n./v.需求) | search (n./v.寻找) | postpone (v.推迟) | proposed (adj.提议的)。",
            details: "consumer demand 意为“消费者需求”，是微观经济与零售、生产规划中最基础的商务术语。其他选项词义与语境无关。",
            cn: "由于消费者需求的突然增加，工厂决定将每日产量翻倍。",
            jp: "消費者需要（demand）の急激な増加により、工場は1日の生産量を倍増させることを決定しました。"
        }
    },
    {
        id: 6,
        target: "postpone",
        category: "简单",
        stem: "The event coordinator had to ________ the outdoor charity run because of the heavy rain forecast.",
        options: ["postpone", "obtain", "advise", "meeting"],
        correct: "postpone",
        explanations: {
            guide: "情态动词后的动词原形。had to 后面接动词原形，结合 heavy rain forecast（大雨预报）推迟户外活动的日常运营语境，选用 postpone。",
            family: "postpone (v.推迟) | obtain (v.获得) | advise (v.建议) | meeting (n.会议)。",
            details: "postpone the event 意为“推迟活动”，是日程安排、公关和危机管理中的高频操作。其余动词不符因天气变化调整日程的语意。",
            cn: "由于大雨预报，活动协调员不得不推迟户外慈善跑步活动。",
            jp: "大雨の予報のため、イベントコーディネーターは屋外チャリティーランを延期（postpone）せざるを得ませんでした。"
        }
    },
    {
        id: 7,
        target: "search",
        category: "中等",
        stem: "The legal firm spent several weeks ________ for the historical property deed in the local archives.",
        options: ["searching", "search", "searched", "searcher"],
        correct: "searching",
        explanations: {
            guide: "非谓语动词固定搭配考核。本题考查 spend time (in) doing something 结构，空格处应填入现在分词作伴随状语，结合介词 for 选 searching。",
            family: "searching (v-ing搜寻) | search (v./n.搜寻) | searched (v-ed搜寻过) | searcher (n.搜寻者)。",
            details: "spend weeks searching for... 意为“花数周寻找……”，属于典型的商务/法律搜集档案语境，用 searching 构成非谓语固定搭配。",
            cn: "律师事务所花了几周时间在当地档案馆寻找历史房地产契约。",
            jp: "法律事務所は、地方公文書館で歴史的な不動産権利書を捜索（searching）するのに数週間を費やしました。"
        }
    },
    {
        id: 8,
        target: "photography",
        category: "中等",
        stem: "The marketing director hired an experienced ________ to capture high-quality images of the new office appliances.",
        options: ["photographer", "photography", "photograph", "photographic"],
        correct: "photographer",
        explanations: {
            guide: "指代特定职业的名词辨析。空格前有不定冠词 an 和形容词 experienced（有经验的），指代雇佣的具体人物，需填入指代人的名词，选 photographer。",
            family: "photographer (n.摄影师) | photography (n.摄影术) | photograph (n.照片/v.照相) | photographic (adj.摄影的)。",
            details: "hired a photographer 意为“雇佣了一位摄影师”，用来为新办公设备拍摄高清宣传图片。其余同族词不表示人，故排除。",
            cn: "营销总监聘请了一位经验丰富的摄影师来拍摄新办公设备的高质量照片。",
            jp: "マーケティングディレクターは、新しいオフィス機器の高品質な写真を撮影するために、経験豊富な写真家（photographer）を雇いました。"
        }
    },
    {
        id: 9,
        target: "demand",
        category: "中等",
        stem: "The project manager noted that the upcoming software update has an extremely ________ schedule.",
        options: ["demanding", "demand", "demanded", "demands"],
        correct: "demanding",
        explanations: {
            guide: "形容词修饰名词的语法考点。空格位于副词 extremely 与名词 schedule 之间，需填入形容词作定语，选用具有主动意味的 demanding。",
            family: "demanding (adj.苛求的/吃力的) | demand (n./v.要求) | demanded (v-ed被要求) | demands (n-pl/v-3sg要求)。",
            details: "demanding schedule 意为“要求高且紧凑的日程表”，是IT、制造等项目管理场景中最核心、最高频的商业修饰语搭配。",
            cn: "项目经理指出，即将进行的软件更新日程安排极其紧凑。",
            jp: "プロジェクトマネージャーは、今度のソフトウェアアップデートのスケジュールが非常に厳しい（demanding）ものであると指摘しました。"
        }
    },
    {
        id: 10,
        target: "involve",
        category: "中等",
        stem: "The upcoming training seminar will ________ hands-on practice with the new inventory management system.",
        options: ["involve", "involvement", "involved", "involving"],
        correct: "involve",
        explanations: {
            guide: "情态动词后的动词原形。will 后面要求接动词原形做谓语，结合宾语 hands-on practice（实际操作练习）选 involve。",
            family: "involve (v.涉及/包含) | involvement (n.参与/卷入) | involved (adj.参与的) | involving (prep.关于/动分)。",
            details: "involve hands-on practice 意为“包含实际操作练习”，是描述工作职责、培训内容或项目安排时的标准官方描述句。其余选项词性不符。",
            cn: "即将举行的培训研讨会将包含对新库存管理系统的实际操作练习。",
            jp: "今度のトレーニングセミナーでは、新しい在庫管理システムのハンズオン（実機）演習が含まれ（involve）ます。"
        }
    },
    {
        id: 11,
        target: "improvement",
        category: "中等",
        stem: "The latest customer feedback surveys show a significant ________ in overall service satisfaction.",
        options: ["improvement", "improve", "improved", "improving"],
        correct: "improvement",
        explanations: {
            guide: "动词后的宾语名词。show 后面需要名词充当宾语，空格前有形容词 significant（显著的），故选名词 improvement。",
            family: "improvement (n.改进) | improve (v.改善) | improved (adj.被改善的) | improving (adj.在改善的)。",
            details: "show a significant improvement in... 意为“在……方面表现出显著的改善”，是企业客户体验分析和年终总结中的经典句型。",
            cn: "最新客户反馈调查显示，整体服务满意度有了显著改善。",
            jp: "最新の顧客フィードバック調査では、全体的なサービス満足度に著しい向上（improvement）が見られます。"
        }
    },
    {
        id: 12,
        target: "advise",
        category: "中等",
        stem: "Security officers ________ all employees to wear their identification badges at all times inside the facility.",
        options: ["advise", "postpone", "obtain", "leadership"],
        correct: "advise",
        explanations: {
            guide: "双宾结构动词词义辨析。空格前为主语 Security officers，后为宾语 all employees + to do 结构，选用 advise 构成固定搭配。",
            family: "advise (v.建议/通知) | postpone (v.推迟) | obtain (v.获得) | leadership (n.领导力)。",
            details: "advise someone to do something 意为“建议某人做某事”，是公司内部合规、日常管理与安全警示广播中最核心的主谓宾宾补结构。",
            cn: "安全主管建议所有员工在设施内部时始终佩戴身份证章。",
            jp: "セキュリティ担当者は、全従業員に対して、施設内では常に身分証明バッジを着用するよう勧告（advise）しています。"
        }
    },
    {
        id: 13,
        target: "comfortable",
        category: "困难",
        stem: "The newly renovated conference hall can ________ seat up to five hundred guests for the corporate keynote speech.",
        options: ["comfortably", "comfortable", "comfort", "comforts"],
        correct: "comfortably",
        explanations: {
            guide: "情态动词与行为动词之间的修饰副词。空格位于情态动词 can 与动词原形 seat（容纳就座）之间，做状语修饰动词，应填入副词 comfortably。",
            family: "comfortably (adv.舒服地/宽裕地) | comfortable (adj.舒适的) | comfort (n./v.安慰) | comforts (n-pl/v-3sg)。",
            details: "comfortably seat 意为“宽敞舒适地容纳……就坐”，是高端酒店或会展中心宣传文案中用来描述场地容积与服务质量的固定高频搭配。",
            cn: "新近翻修的会议厅可以舒适地容纳多达五百位宾客就座，聆听企业的主旨演讲。",
            jp: "新しく改装されたカンファレンスホールは、企業基調講演のために最大500人のゲストをゆったりと（comfortably）収容することができます。"
        }
    },
    {
        id: 14,
        target: "maintain",
        category: "困难",
        stem: "To prevent system glitches, the IT department scheduled the database ________ during the weekend when traffic is low.",
        options: ["maintenance", "maintain", "maintained", "maintaining"],
        correct: "maintenance",
        explanations: {
            guide: "名词修饰名词的名词组合考点。空格位于 database 后面，与其构成复合名词充当 scheduled 的宾语，选用名词 maintenance。",
            family: "maintenance (n.维护/保养) | maintain (v.维持) | maintained (adj.维持的) | maintaining (v-ing维持)。",
            details: "database maintenance 意为“数据库维护”，是后台IT系统升级、技术支持场景中最具含金量的组合，常与 prevent glitches（预防故障）共现。",
            cn: "为防止系统故障，IT部门将数据库维护时间安排在客流量较低的周末。",
            jp: "システムの不具合を防ぐため、IT部門はアクセスの少ない週末にデータベースのメンテナンス（maintenance）をスケジュールしました。"
        }
    },
    {
        id: 15,
        target: "involve",
        category: "困难",
        stem: "The board appreciated the active ________ of all department heads in the recent company merger negotiations.",
        options: ["involvement", "involve", "involved", "involving"],
        correct: "involvement",
        explanations: {
            guide: "形容词与介词之间的名词中心语。空格前有形容词 active（积极的），后有介词 of，作 appreciated 的宾语，需填入名词，选用 involvement。",
            family: "involvement (n.参与/投入) | involve (v.涉及) | involved (adj.参与的) | involving (prep.关于)。",
            details: "active involvement of someone in... 意为“某人对……的积极参与”，常在企业高层年终评估或兼并（merger）总结报告中出现，用以褒奖团队。",
            cn: "董事会赞赏所有部门主管对近期公司合并谈判的积极参与。",
            jp: "取締役会は、最近の企業合併交渉におけるすべての部門長の積極的な関与（involvement）を高く評価しました。"
        }
    },
    {
        id: 16,
        target: "improvement",
        category: "困难",
        stem: "The consultant suggested that streamlining operations would greatly ________ the factory's quarterly revenue.",
        options: ["improve", "improvement", "improved", "improving"],
        correct: "improve",
        explanations: {
            guide: "情态动词后的谓语动词原形。greatly 为副词，其前有情态动词 would，空格需填入动词原形作宾语从句的谓语，结合宾语 revenue（收入）选 improve。",
            family: "improve (v.改善) | improvement (n.改进) | improved (adj.被改善的) | improving (adj.在改善的)。",
            details: "improve revenue 意为“提高收入/改善收益”，是咨询顾问（consultant）向制造、零售管理层呈递优化策略时的标配动词词组。",
            cn: "顾问建议，精简业务将大大提高工厂的季度收入。",
            jp: "コンサルタントは、業務の効率化が工場の四半期収益を大幅に改善（improve）するだろうと提案しました。"
        }
    },
    {
        id: 17,
        target: "advise",
        category: "困难",
        stem: "The executive committee hired a prominent law firm to provide ________ services during the structural reorganization.",
        options: ["advisory", "advise", "advice", "advised"],
        correct: "advisory",
        explanations: {
            guide: "名词前的形容词修饰语。空格后为名词 services，前有 provide，此处需要填入形容词作定语修饰 services，选 advisory。",
            family: "advisory (adj.咨询的/顾问的) | advise (v.建议) | advice (n.建议) | advised (adj.考虑周到的)。",
            details: "advisory services 意为“咨询服务/顾问服务”，在高端法律、审计及公司架构重组（reorganization）场景中是标准的行业行话词组。",
            cn: "执行委员会聘请了一家著名的律师事务所，在结构重组期间提供咨询服务。",
            jp: "執行委員会は、構造改革の期間中に顧問（advisory）サービスを提供してもらうため、著名な法律事務所を雇いました。"
        }
    },
    {
        id: 18,
        target: "obtain",
        category: "困难",
        stem: "Before launching the biomedical project commercially, the firm must ________ official clearance from the municipal council.",
        options: ["obtain", "obtained", "obtainable", "obtaining"],
        correct: "obtain",
        explanations: {
            guide: "情态动词后的动词原形。must 后面需接动词原形，结合宾语 clearance（许可/批准）选用及物动词 obtain。",
            family: "obtain (v.获得) | obtained (v-ed已获得) | obtainable (adj.可获得的) | obtaining (v-ing获取中)。",
            details: "obtain clearance 意为“获得批准/通关许可”。在高度合规化与监管严格的行业（如生物医药 biomedical）中，它是比 get 更正式的官方表述。",
            cn: "在商业化启动该生物医药项目之前，该企业必须获得市议会的官方许可。",
            jp: "バイオメディカルプロジェクトを商業的に立ち上げる前に、企業は市議会から公式の承認（obtain）を得なければなりません。"
        }
    }
];