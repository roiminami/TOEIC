// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data351-360.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "social media",
        pos: "名",
        ipa: "/ˌsoʊʃl ˈmiːdiə/",
        cn: "社交媒体",
        jp: "ソーシャルメディア",
        family: "media / social",
        tips: "营销与公关高频：social media campaign（社交媒体宣传活动），social media platform（社交媒体平台）。",
        desc: "He posted on social media."
    },
    {
        word: "sponsor",
        pos: "名/動",
        ipa: "/ˈspɑːnsər/",
        cn: "赞助商；赞助",
        jp: "スポンサー、後援者；出資する",
        family: "sponsorship / sponsored",
        tips: "活动与营销高频：corporate sponsor（企业赞助商），sponsor an event（赞助活动）。",
        desc: "The company will sponsor the event."
    },
    {
        word: "stressful",
        pos: "形",
        ipa: "/ˈstresfl/",
        cn: "充满压力的，紧张的",
        jp: "ストレスの多い、緊張させる",
        family: "stress / stressfully / stressed",
        tips: "职场心理高频：stressful environment/job（充满压力的环境/工作）。",
        desc: "This deadline is very stressful."
    },
    {
        word: "symposium",
        pos: "名",
        ipa: "/sɪmˈpoʊziəm/",
        cn: "研讨会，专题座谈会",
        jp: "シンポジウム、討論会",
        family: "symposia / symposiums",
        tips: "学术与商务高频：annual symposium（年度研讨会），host a symposium（举办研讨会）。",
        desc: "We attended an academic symposium."
    },
    {
        word: "terminal",
        pos: "名/形",
        ipa: "/ˈtɜːrmɪnl/",
        cn: "航站楼，终点站；末端的",
        jp: "ターミナル、終点",
        family: "terminally / terminate",
        tips: "机场与运输高频：airport terminal（机场航站楼），bus terminal（客运终点站）。",
        desc: "Meet me at terminal two."
    },
    {
        word: "theme",
        pos: "名",
        ipa: "/θiːm/",
        cn: "主题，主旨",
        jp: "テーマ、主題",
        family: "thematic / thematically",
        tips: "会议与活动高频：conference theme（会议主题），theme song（主题曲）。",
        desc: "The conference theme is innovation."
    },
    {
        word: "tight",
        pos: "形/副",
        ipa: "/taɪt/",
        cn: "紧张的，紧密的；紧地",
        jp: "（日程などが）厳しい、きつい",
        family: "tightly / tighten / tightness",
        tips: "商务与日程高频：tight schedule/budget（紧凑的日程/紧张的预算）。",
        desc: "We have a tight schedule."
    },
    {
        word: "timely",
        pos: "形",
        ipa: "/ˈtaɪmli/",
        cn: "及时的，适时的",
        jp: "タイムリーな、適時の",
        family: "timeliness / time",
        tips: "客服与回复高频：in a timely manner（及时地），timely response（及时的回复）。",
        desc: "They provided a timely response."
    },
    {
        word: "upgrade",
        pos: "動/名",
        ipa: "/ˈʌpɡreɪd/",
        cn: "升级，提升；改进",
        jp: "アップグレードする、昇格させる",
        family: "upgraded / upgrading",
        tips: "IT与系统高频：upgrade the software（升级软件），system upgrade（系统升级）。",
        desc: "We need to upgrade software."
    },
    {
        word: "venture",
        pos: "名/動",
        ipa: "/ˈventʃər/",
        cn: "风险企业，投机；冒险",
        jp: "ベンチャー企業、冒険的事業",
        family: "joint venture / venturesome",
        tips: "商务创业与投资高频：joint venture（合资企业），venture capital（风险资本）。",
        desc: "They launched a joint venture."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "timely",
        category: "简单",
        stem: "Customer support representatives are trained to respond to inquiries in a ________ manner.",
        options: ["timely", "stressful", "tight", "theme"],
        correct: "timely",
        explanations: {
            guide: "客服服务形容词固定短语。in a ________ manner 属于托业最高频表达之一，意为“及时地”，选 timely。",
            family: "timely (adj.及时的) | stressful (adj.充满压力的) | tight (adj.紧凑的) | theme (n.主题)。",
            details: "in a timely manner 意为及时地。stressful（有压力的）、tight（紧凑的）均不符合客服优质回应的语境。",
            cn: "客户服务代表经过培训，能够以及时的态度回应问询。",
            jp: "カスタマーサポート担当者は、タイムリーな（timely）方法で問い合わせに対応するようトレーニングされています。"
        }
    },
    {
        id: 2,
        target: "social media",
        category: "简单",
        stem: "The marketing department launched a new promotional campaign across all major ________ platforms.",
        options: ["social media", "terminal", "symposium", "sponsor"],
        correct: "social media",
        explanations: {
            guide: "营销渠道名词定语。________ platforms 结合推广宣传活动，选 social media（社交媒体）。",
            family: "social media (n.社交媒体) | terminal (n.航站楼) | symposium (n.研讨会) | sponsor (n.赞助商)。",
            details: "social media platforms 意为社交媒体平台。terminal（航站楼）、symposium（研讨会）均非营销宣传发布平台。",
            cn: "营销部门在所有主要社交媒体平台上发起了一场新的促销活动。",
            jp: "マーケティング部門は、すべての主要なソーシャルメディア（social media）プラットフォームで新しいプロモーションキャンペーンを開始しました。"
        }
    },
    {
        id: 3,
        target: "tight",
        category: "简单",
        stem: "Because of the ________ deadline, the engineering team worked extra hours to finish the project.",
        options: ["tight", "timely", "stressful", "venture"],
        correct: "tight",
        explanations: {
            guide: "形容词修饰商务名词。修饰 deadline（截止日期），表达“紧凑的/紧张的”截止日期，选 tight。",
            family: "tight (adj.紧张的/紧凑的) | timely (adj.及时的) | stressful (adj.有压力的) | venture (n.风险企业)。",
            details: "tight deadline 属于托业经典搭配，意为紧迫的截止日期。timely（及时的）不能修饰 deadline 本身。",
            cn: "由于截止日期紧迫，工程团队加班加点以完成项目。",
            jp: "厳しい（tight）締め切りのため、エンジニアリングチームはプロジェクトを完了するために残業しました。"
        }
    },
    {
        id: 4,
        target: "sponsor",
        category: "简单",
        stem: "A major local bank offered to ________ the annual charity marathon this spring.",
        options: ["sponsor", "upgrade", "venture", "terminal"],
        correct: "sponsor",
        explanations: {
            guide: "动词不定式与活动搭配。offered to 后面接动词原形，表达银行决定“赞助”慈善马拉松，选 sponsor。",
            family: "sponsor (v.赞助/n.赞助商) | upgrade (v.升级) | venture (n.风险企业) | terminal (n.航站楼)。",
            details: "to sponsor an event 意为赞助一项活动。upgrade（升级）、venture（冒险）与出资支持马拉松赛事逻辑不符。",
            cn: "当地一家大型银行提出赞助今年春季举行的年度慈善马拉松比赛。",
            jp: "地元の大手銀行は、今春の年次チャリティーマラソンに資金を提供する（sponsor）ことを申し出ました。"
        }
    },
    {
        id: 5,
        target: "terminal",
        category: "简单",
        stem: "Passengers catching international flights should proceed directly to Departure ________ 3.",
        options: ["Terminal", "Symposium", "Theme", "Venture"],
        correct: "Terminal",
        explanations: {
            guide: "机场设施专有名词。Departure ________ 3 表达“3号离港航站楼”，选 Terminal。",
            family: "Terminal (n.航站楼/终点站) | Symposium (n.研讨会) | Theme (n.主题) | Venture (n.风险企业)。",
            details: "Departure Terminal 指离港航站楼。Symposium（研讨会）、Theme（主题）均非机场搭乘航班的设施地点。",
            cn: "搭乘国际航班的旅客应直接前往 3 号出发航站楼。",
            jp: "国際線に乗る乗客は、出発ターミナル（Terminal）3に直接向かってください。"
        }
    },
    {
        id: 6,
        target: "upgrade",
        category: "简单",
        stem: "The IT department plans to ________ the server software over the weekend.",
        options: ["upgrade", "sponsor", "venture", "tighten"],
        correct: "upgrade",
        explanations: {
            guide: "动词不定式与软件搭配。plans to 后面接动词原形，表达对服务器软件进行“升级”，选 upgrade。",
            family: "upgrade (v.升级/提升) | sponsor (v.赞助) | venture (v.冒险) | tighten (v.收紧)。",
            details: "upgrade the software 意为升级软件。sponsor（赞助）、tighten（拉紧）均不符合软件系统维护的操作。",
            cn: "IT 部门计划在周末升级服务器软件。",
            jp: "IT部門は週末にサーバーソフトウェアを更新する（upgrade）計画です。"
        }
    },
    {
        id: 7,
        target: "symposium",
        category: "中等",
        stem: "Leading climate scientists will gather at the university for an international ________ on renewable energy.",
        options: ["symposium", "terminal", "theme", "venture"],
        correct: "symposium",
        explanations: {
            guide: "学术会议名词考点。gather for an international ________ 表达科学家聚集参加“研讨会/专题座谈会”，选 symposium。",
            family: "symposium (n.研讨会) | terminal (n.航站楼) | theme (n.主题) | venture (n.风险企业)。",
            details: "international symposium 意为国际研讨会。terminal（航站楼）、theme（主题）均非专家学者聚集参会的会议实体。",
            cn: "顶尖的气候科学家将聚集在这所大学，参加一场关于可再生能源的国际研讨会。",
            jp: "主要な気候学者が大学に集まり、再生可能エネルギーに関する国際シンポジウム（symposium）を開催します。"
        }
    },
    {
        id: 8,
        target: "stressful",
        category: "中等",
        stem: "Managing multiple high-priority projects simultaneously can be extremely ________ for new supervisors.",
        options: ["stressful", "timely", "tight", "upgraded"],
        correct: "stressful",
        explanations: {
            guide: "表语形容词考点。can be extremely ________ 描述同时管理多个高优先级项目的心理状态为“充满压力的”，选 stressful。",
            family: "stressful (adj.充满压力的) | timely (adj.及时的) | tight (adj.紧凑的) | upgraded (adj.升级的)。",
            details: "extremely stressful 意为极其充满压力的。timely（及时的）、tight（紧凑的）不能直接作形容多任务管理感受的表语。",
            cn: "对于新主管来说，同时管理多个高优先级的项目可能会非常充满压力。",
            jp: "複数の優先度の高いプロジェクト同时管理することは、新しい上司にとって非常にストレスの多い（stressful）ものになり得ます。"
        }
    },
    {
        id: 9,
        target: "theme",
        category: "中等",
        stem: "The main ________ of this year's regional business conference is sustainable corporate growth.",
        options: ["theme", "symposium", "terminal", "sponsor"],
        correct: "theme",
        explanations: {
            guide: "会议核心概念名词。The main ________ 结合后文的可持续增长，表达会议的“主题/主旨”，选 theme。",
            family: "theme (n.主题) | symposium (n.研讨会) | terminal (n.航站楼) | sponsor (n.赞助商)。",
            details: "main theme 意为主要主题。symposium 是会议本身，不能作为表达可持续增长这一议题内容的中心语。",
            cn: "今年区域商业会议的主主题是企业可持续增长。",
            jp: "今年の地域ビジネス会議の主なテーマ（theme）は、持続可能な企業の成長です。"
        }
    },
    {
        id: 10,
        target: "venture",
        category: "中等",
        stem: "The two technology firms agreed to form a joint ________ to develop artificial intelligence applications.",
        options: ["venture", "sponsor", "symposium", "upgrade"],
        correct: "venture",
        explanations: {
            guide: "商业合作高频词组。form a joint ________ 属于商业合作专有名词，意为建立“合资企业/合作项目”，选 venture。",
            family: "venture (n.风险企业/合作项目) | sponsor (n.赞助商) | symposium (n.研讨会) | upgrade (n.升级)。",
            details: "joint venture 意为合资企业。sponsor（赞助商）、symposium（研讨会）均不能与 joint 构成合资企业短语。",
            cn: "两家科技公司同意建立合资企业，以开发人工智能应用。",
            jp: "2つの技術企業は、人工知能アプリケーションを開発するための合弁事業（venture）を設立することに同意しました。"
        }
    },
    {
        id: 11,
        target: "sponsor",
        category: "中等",
        stem: "Organizers expressed gratitude to corporate ________ for their financial contributions to the event.",
        options: ["sponsors", "symposia", "ventures", "terminals"],
        correct: "sponsors",
        explanations: {
            guide: "复数名词考点。corporate ________ 指提供资金资助的“赞助商”，用复数 sponsors。",
            family: "sponsors (n.复数赞助商) | symposia (n.复数研讨会) | ventures (n.复数企业) | terminals (n.复数航站楼)。",
            details: "corporate sponsors 意为企业赞助商。后文的 for their financial contributions 明确指代出资赞助的主体人/机构。",
            cn: "组织者对企业赞助商为活动提供的资金捐助表示感谢。",
            jp: "主催者は、イベントへの資金提供に対して企業のスポンサー（sponsors）に感謝の意を表明しました。"
        }
    },
    {
        id: 12,
        target: "timely",
        category: "中等",
        stem: "Thanks to the ________ arrival of critical replacement parts, the factory resumed operations ahead of schedule.",
        options: ["timely", "tight", "stressful", "upgraded"],
        correct: "timely",
        explanations: {
            guide: "形容词作前置定语。修饰 arrival（到达），表达关键零部件“及时的”到达，选 timely。",
            family: "timely (adj.及时的) | tight (adj.紧凑的) | stressful (adj.充满压力的) | upgraded (adj.升级的)。",
            details: "timely arrival 意为及时到达。正因为零部件及时送达，工厂才得以提前恢复运营。",
            cn: "多亏了关键替换零部件的及时送达，工厂得以提前恢复运营。",
            jp: "重要な交換部品がタイムリーに（timely）到着したおかげで、工場は予定より早く操業を再開しました。"
        }
    },
    {
        id: 13,
        target: "tight",
        category: "困难",
        stem: "Management decided to ________ administrative expenditure across all branch offices starting next month.",
        options: ["tighten", "tight", "upgrade", "venture"],
        correct: "tighten",
        explanations: {
            guide: "派生动词考点。decided to 后面接动词原形，结合 expenditure（开支），表达“缩减/收紧”行政开支，选动词 tighten。",
            family: "tighten (v.收紧/紧缩) | tight (adj.紧的) | upgrade (v.升级) | venture (v.冒险)。",
            details: "tighten expenditure 属于商务高频动宾搭配，意为紧缩开支。tight 是形容词，不能直接跟在不定式符号 to 后面作谓语动词。",
            cn: "管理层决定从下个月开始收紧所有分公司的行政开支。",
            jp: "経営陣は来月からすべての支社で管理支出を締め締める（tighten）ことを決定しました。"
        }
    },
    {
        id: 14,
        target: "upgrade",
        category: "困难",
        stem: "Hotel guests who completed the customer feedback survey received a complimentary room ________.",
        options: ["upgrade", "sponsorship", "venture", "symposium"],
        correct: "upgrade",
        explanations: {
            guide: "酒店客服名词考点。complimentary room ________ 属于酒店高频专有名词，意为“免费房间升级”，选 upgrade。",
            family: "upgrade (n.升级/改靓) | sponsorship (n.赞助) | venture (n.企业) | symposium (n.研讨会)。",
            details: "room upgrade 意为房间升级。sponsorship（赞助）、symposium（研讨会）均非酒店赠予客人的房型升级福利。",
            cn: "填写客户反馈调查表的酒店客人获得了免费的房间升级。",
            jp: "顧客フィードバック調査に回答したホテルのゲストは、無料の部屋のアップグレード（upgrade）を受け取りました。"
        }
    },
    {
        id: 15,
        target: "stressful",
        category: "困难",
        stem: "Human Resources introduced wellness programs to help employees manage workplace ________ effectively.",
        options: ["stress", "stressful", "tightness", "timeliness"],
        correct: "stress",
        explanations: {
            guide: "派生名词宾语考点。manage workplace ________ 结构中，及物动词 manage 后面接名词形式 stress（压力）。",
            family: "stress (n.压力) | stressful (adj.充满压力的) | tightness (n.紧密) | timeliness (n.及时性)。",
            details: "manage workplace stress 意为管理工作场所压力。stressful 是形容词，不能直接作及物动词 manage 的宾语。",
            cn: "人力资源部推出了健康项目，以帮助员工有效地管理工作场所压力。",
            jp: "人事部は従業員が職場のストレス（stress）を効果的に管理できるようにウェルネスプログラムを導入しました。"
        }
    },
    {
        id: 16,
        target: "sponsor",
        category: "困难",
        stem: "Securing official corporate ________ was essential for funding the construction of the new community center.",
        options: ["sponsorship", "sponsor", "venture", "theme"],
        correct: "sponsorship",
        explanations: {
            guide: "派生抽象名词主语考点。Securing official corporate ________ 结构中，需要填写抽象名词 sponsorship（赞助/赞助资金）。",
            family: "sponsorship (n.赞助/赞助金) | sponsor (n.赞助商) | venture (n.企业) | theme (n.主题)。",
            details: "corporate sponsorship 指企业赞助/赞助行为。sponsor 指赞助商个人/公司，在此处表达被获得的赞助资金支持时选 sponsorship。",
            cn: "获得官方的企业赞助对于资助新社区中心的建设至关重要。",
            jp: "新しいコミュニティセンターの建設に資金を提供するには、公式な企業のスポンサーシップ（sponsorship）を確保することが不可欠でした。"
        }
    },
    {
        id: 17,
        target: "symposium",
        category: "困难",
        stem: "Distinguished scholars submitted research abstracts to be reviewed by the ________ executive committee.",
        options: ["symposium", "terminal", "social media", "venture"],
        correct: "symposium",
        explanations: {
            guide: "会议机构名词定语。________ executive committee 指“研讨会执行委员会”，选名词 symposium 作定语。",
            family: "symposium (n.研讨会) | terminal (n.航站楼) | social media (n.社交媒体) | venture (n.风险企业)。",
            details: "symposium executive committee 意为研讨会执行委员会。terminal（航站楼）、social media（社交媒体）不符合审核学者论文摘要的学术组织属性。",
            cn: "著名学者提交了研究摘要，供研讨会执行委员会进行审查。",
            jp: "著名な学者たちが研究要約を提出し、シンポジウム（symposium）の執行委員会によって査読されました。"
        }
    },
    {
        id: 18,
        target: "venture",
        category: "困难",
        stem: "The startup firm received substantial funding from a prominent ________ capital group.",
        options: ["venture", "sponsor", "terminal", "theme"],
        correct: "venture",
        explanations: {
            guide: "金融投资高频短语。________ capital group 属于金融风投固定搭配，意为“风险投资/创业投资集团”，选 venture。",
            family: "venture (n.风险/创业) | sponsor (n.赞助商) | terminal (n.航站楼) | theme (n.主题)。",
            details: "venture capital 属于托业金融核心词组，专指风险资本/创业投资。sponsor（赞助商）不与 capital 构成该特定金融专有名词。",
            cn: "这家初创公司从一家著名的风险投资集团获得了巨额资金。",
            jp: "そのスタートアップ企業は、著名なベンチャー（venture）キャピタルグループから多額の資金提供を受けました。"
        }
    }
];