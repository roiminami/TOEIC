// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag301-310.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "suitable",
        pos: "形",
        ipa: "/ˈsuːtəbl/",
        cn: "合适的，适宜的",
        jp: "適切な、ふさわしい",
        family: "suit / suitability / suitably",
        tips: "商务选址与人才招聘场景高频形容词。核心搭配为 be suitable for...（适合于……，注意介词用 for）。在阅读中常与 appropriate 或 proper 进行同义替换。",
        desc: "The room is suitable."
    },
    {
        word: "priority",
        pos: "名",
        ipa: "/praɪˈɔːrəti/",
        cn: "优先，优先权，首要任务",
        jp: "優先事項、優先権",
        family: "prioritize / prior / priorities",
        tips: "项目进度管理与企业战略决策核心名词。最常考搭配为 top priority（首要任务/当务之急）或 give priority to...（优先考虑……）。动词形式 prioritize 意为“按重要性排列/优先考虑”。",
        desc: "Safety is our priority."
    },
    {
        word: "brief",
        pos: "形/動/名",
        ipa: "/briːf/",
        cn: "简短的，短暂的；向……作简要介绍；摘要",
        jp: "简洁な、短い；要約する",
        family: "briefly / briefing / briefed",
        tips: "日常办公与会议日程高频词。常修饰会议或陈述，如 brief meeting（简短会议）、brief summary（简短摘要）。其名词形式 briefing 意为“简要情况汇报会”，在听力中极高频。",
        desc: "Keep it brief."
    },
    {
        word: "reasonable",
        pos: "形",
        ipa: "/ˈruːznəbl/",
        cn: "合理的，公道的，手顷的",
        jp: "妥当な、合理的な、手頃な",
        family: "reason / reasonably / reasoning",
        tips: "价格评估、合同谈判与客户服务高频形容词。托业核心搭配 reasonable price（合理的价格），在阅读中常与 affordable 或 competitive 相互同义替换。",
        desc: "The price is reasonable."
    },
    {
        word: "setting",
        pos: "名",
        ipa: "/ˈsetɪŋ/",
        cn: "环境，背景；设置，调节",
        jp: "設定、環境、背景",
        family: "set / settings",
        tips: "设备安装、系统运行与办公场所高频名词。在IT支持中指 system settings（系统设置/参数）；在描述商业活动时，常指 formal setting（正式场合）或 professional setting（职业环境）。",
        desc: "Change the setting."
    },
    {
        word: "forecast",
        pos: "名/動",
        ipa: "/ˈfɔːrkæst/",
        cn: "预测，预报",
        jp: "予報、予測；予想する",
        family: "forecaster / forecasting / forecasts",
        tips: "财务规划与日常通勤核心词。常考搭配为 sales forecast（销售预测）、weather forecast（天气预报）。在阅读中，经常与 predict 或 project 相互进行同义替换。",
        desc: "The forecast is good."
    },
    {
        word: "fuel",
        pos: "名/動",
        ipa: "/ˈfjuːəl/",
        cn: "燃料；给……加燃料，刺激",
        jp: "燃料；燃料を供給する、煽る",
        family: "fueled / fueling",
        tips: "交通运输与能源工业高频词。常考搭配 fuel efficiency（燃油效率）、fuel costs（燃油成本）。作动词时常引申为“刺激/推动”，如 fuel the economic growth（推动经济增长）。",
        desc: "The truck ran out of fuel."
    },
    {
        word: "campus",
        pos: "名",
        ipa: "/ˈkæmpəs/",
        cn: "校园，（大企业或大医院的）园区",
        jp: "キャンパス、構内、企業敷地内",
        family: "campuses",
        tips: "招聘培训及大型企业资产运营高频名词。在托业中，不仅指学校校园，还常修饰大型企业的总部园区，如 corporate campus（企业园区）。",
        desc: "The campus is large."
    },
    {
        word: "found",
        pos: "動",
        ipa: "/faʊnd/",
        cn: "创建，创办，奠定基础",
        jp: "創設する、設立する、基づく",
        family: "foundation / founder / founded",
        tips: "企业组织创办核心动词。注意：found 在此处是动词原形（其过去式/过去分词为 founded），不要与 find 的过去式混淆。名词形式 foundation（基金会/创办）也是考点。",
        desc: "They founded the school."
    },
    {
        word: "agriculture",
        pos: "名",
        ipa: "/ˈæɡrɪkʌltʃər/",
        cn: "农业，农艺",
        jp: "農業",
        family: "agricultural / agriculturist",
        tips: "宏观经济与原材料供应链高频名词。在托业语法中，极常考其形容词形式 agricultural（农业的），如 agricultural sector（农业部门）、agricultural products（农产品）。",
        desc: "Agriculture is important."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "suitable",
        category: "简单",
        stem: "The quiet conference room is highly ________ for hosting the upcoming training seminar.",
        options: ["suitable", "priority", "brief", "office"],
        correct: "suitable",
        explanations: {
            guide: "系动词后的形容词表语辨析。空格前面有系动词 is 和修饰副词 highly，后面有介词 for，要求填入形容词，选 suitable。",
            family: "suitable (adj.合适的) | priority (n.优先权) | brief (adj.简短的) | office (n.办公室)。",
            details: "be suitable for... 是极常考的商务场景固定搭配，意为“适合于……”。其余选项词性不符或不与 for 搭配。",
            cn: "这个安静的会议室非常适合举办即将举行的培训研讨会。",
            jp: "この静かな会議室は、今度のトレーニングセミナーを開催するのに非常に適して（suitable）います。"
        }
    },
    {
        id: 2,
        target: "priority",
        category: "简单",
        stem: "Customer satisfaction remains our top ________ during this busy holiday shopping weekend.",
        options: ["priority", "setting", "campus", "morning"],
        correct: "priority",
        explanations: {
            guide: "形容词修饰下的名词中心语辨析。空格前有形容词 top（首要的/顶级的），需填入名词作 remains 的表语，选 priority。",
            family: "priority (n.首要任务) | setting (n.环境/设置) | campus (n.园区) | morning (n.早上)。",
            details: "top priority 意为“当务之急/首要任务”，是客户服务和企业战略管理中绝对高频的核心词组。其他选项在此处无法构成合理的语义。",
            cn: "在这个忙碌的节日购物周末，客户满意度仍然是我们的首要任务。",
            jp: "この忙しいホリデーショッピングの週末において、顧客満足度は依然として当社の最優先事項（priority）です。"
        }
    },
    {
        id: 3,
        target: "brief",
        category: "简单",
        stem: "The general manager delivered a ________ speech to welcome the new employees yesterday morning.",
        options: ["brief", "reasonable", "forecast", "closed"],
        correct: "brief",
        explanations: {
            guide: "名词前的修饰性形容词辨析。空格用于修饰名词 speech（演讲），结合欢迎新员工的简短发言场景，选 brief。",
            family: "brief (adj.简短的) | reasonable (adj.合理的) | forecast (n./v.预测) | closed (adj.关闭的)。",
            details: "deliver a brief speech 意为“发表简短致辞”。属于标准的职场社交和行政迎新礼仪语境。其他选项不符演讲特征。",
            cn: "昨天上午，总经理发表了简短的讲话，欢迎新员工。",
            jp: "昨日の朝、ゼネラルマネージャーは新入社員を歓迎するために簡潔な（brief）スピーチを行いました。"
        }
    },
    {
        id: 4,
        target: "reasonable",
        category: "简单",
        stem: "The newly opened retail store offers ergonomic office chairs at a very ________ price.",
        options: ["reasonable", "fuel", "found", "proposed"],
        correct: "reasonable",
        explanations: {
            guide: "形容词修饰语词义辨析。空格后为名词 price（价格），前面有修饰副词 very，需填入形容词，选 reasonable。",
            family: "reasonable (adj.合理的) | fuel (n.燃料) | found (v.创建) | proposed (adj.被提议的)。",
            details: "reasonable price 意为“合理的价格/公道的价格”，是商品营销和零售宣传中最经典的词组。其余选项均不合适。",
            cn: "新开业的零售店以非常合理的价格提供人体工学办公椅。",
            jp: "新しくオープンした小売店では、人間工学に基づいたオフィスチェアを非常に手頃な（reasonable）価格で提供しています。"
        }
    },
    {
        id: 5,
        target: "forecast",
        category: "简单",
        stem: "According to the latest weather ________, it will rain heavily on Friday morning.",
        options: ["forecast", "campus", "agriculture", "memo"],
        correct: "forecast",
        explanations: {
            guide: "特定公共信息名词中心语。空格前有 weather（天气），构成复合名词作为介词 according to 的宾语，选 forecast。",
            family: "forecast (n./v.预测/预报) | campus (n.园区) | agriculture (n.农业) | memo (n.备忘录)。",
            details: "weather forecast 意为“天气预报”，是差旅计划或户外活动安排等场景中的核心高频名词词组。其余选项不构成此类搭配。",
            cn: "根据最新的天气预报，周五早上会下大雨。",
            jp: "最新の天気予報（forecast）によると、金曜日の朝は大雨になる見込みです。"
        }
    },
    {
        id: 6,
        target: "campus",
        category: "简单",
        stem: "New hires will be given a complete tour of the corporate ________ on their first day of work.",
        options: ["campus", "suitable", "brief", "other"],
        correct: "campus",
        explanations: {
            guide: "名词中心语的词义与场景搭配。空格前有 corporate（公司的/企业的），结合新入职员工参观公司的场景，选 campus。",
            family: "campus (n.园区/校园) | suitable (adj.合适的) | brief (adj.简短的) | other (adj.其他的)。",
            details: "corporate campus 意为“企业园区/总部大楼建筑群”，在大型企业入职培训或参观接待中是极常考的后勤场景。其他选项不合适。",
            cn: "新员工在工作的第一天将完整地参观公司园区。",
            jp: "新入社員は、入社初日に企業敷地内（campus）の全体ツアー案内を受ける予定です。"
        }
    },
    {
        id: 7,
        target: "setting",
        category: "中等",
        stem: "The outdoor garden provided a beautiful ________ for the company's annual anniversary celebration.",
        options: ["setting", "priority", "forecast", "seminar"],
        correct: "setting",
        explanations: {
            guide: "及物动词宾语名词中心语。空格前有形容词 beautiful（美丽的），作为 provided 的宾语，结合户外花园和公司周年庆场景，选 setting。",
            family: "setting (n.环境/背景) | priority (n.优先权) | forecast (n.预测) | seminar (n.研讨会)。",
            details: "provided a beautiful setting 意为“提供了一个优美的环境/背景”。常用于描述企业宴会、商务酒会和社交活动举办场地。其他选项语意不通。",
            cn: "户外花园为公司的年度周年庆典提供了一个美丽的场地环境。",
            jp: "屋外の庭園は、会社の年次創立記念パーティーに美しい背景（setting）を提供してくれました。"
        }
    },
    {
        id: 8,
        target: "fuel",
        category: "中等",
        stem: "Shipping firms are actively exploring innovative ways to reduce their rising ________ costs.",
        options: ["fuel", "found", "agriculture", "purchase"],
        correct: "fuel",
        explanations: {
            guide: "名词作定语修饰名词。空格后有名词 costs（成本），结合航运公司（shipping firms）日常运营消耗，选 fuel 构成复合名词。",
            family: "fuel (n.燃料/燃油) | found (v.创建) | agriculture (n.农业) | purchase (n./v.购买)。",
            details: "fuel costs 意为“燃料成本/燃油费用”，是货运、物流、航空及航运场景中决定利润率的核心运营指标。其余干扰项词义不符。",
            cn: "航运公司正在积极探索创新方法，以降低日益增加的燃油成本。",
            jp: "配送会社は、上昇する燃料（fuel）コストを削減するための革新的な方法を積極的に模索しています。"
        }
    },
    {
        id: 9,
        target: "found",
        category: "中等",
        stem: "The two technology entrepreneurs plan to ________ a new software development startup next year.",
        options: ["found", "suitable", "campus", "meeting"],
        correct: "found",
        explanations: {
            guide: "不定式后的及物动词原形。plan to 后面接动词原形，宾语是 startup（初创企业），此处应选动词 found 表示“创建/设立”。",
            family: "found (v.创建) | suitable (adj.合适的) | campus (n.园区) | meeting (n.会议)。",
            details: "found a startup 意为“创办一家初创企业”，在IT创业与科技行业背景下是标准的行业表达。注意：found 在此是“创建”的动词原形，而非 find 的过去式。其他词性不符或不构成动宾搭配。",
            cn: "这两位技术企业家计划于明年创办一家新型软件开发初创公司。",
            jp: "2人のIT起业家は、来年新しいソフトウェア開発のスタートアップを創設する（found）計画を立てています。"
        }
    },
    {
        id: 10,
        target: "agriculture",
        category: "中等",
        stem: "The government decided to subsidize local businesses that specialize in sustainable ________.",
        options: ["agriculture", "reasonable", "setting", "preparation"],
        correct: "agriculture",
        explanations: {
            guide: "介词后的名词中心语。空格位于介词 in 之后，且被形容词 sustainable（可持续的）修饰，需要填入名词，选 agriculture。",
            family: "agriculture (n.农业) | reasonable (adj.合理的) | setting (n.设置) | preparation (n.准备)。",
            details: "sustainable agriculture 意为“可持续农业”，属于绿色经济、国家税收及财政补贴（subsidize）领域极常考的名词组合搭配。其余选项意思完全不搭配。",
            cn: "政府决定资助那些专门从事可持续农业的本地企业。",
            jp: "政府は、持続可能な農業（agriculture）を専門とする地元企業に補助金を支給することを決定しました。"
        }
    },
    {
        id: 11,
        target: "suitable",
        category: "中等",
        stem: "To ensure system compatibility, please verify if the software is ________ for your current operating system.",
        options: ["suitable", "suit", "suitability", "suitably"],
        correct: "suitable",
        explanations: {
            guide: "系动词后的形容词词性选择。空格前面有系动词 is，后接介词 for，此处需填入形容词作表语，选 suitable。",
            family: "suitable (adj.合适的) | suit (v./n.适合/西装) | suitability (n.适合性) | suitably (adv.合适地)。",
            details: "verify if the software is suitable for... 意为“验证软件是否适合于……”，属于IT技术支持、软件兼容性场景下的典型句式。其他派生词词性不符此表语位置。",
            cn: "为确保系统兼容性，请验证该软件是否适合您当前的操作系统。",
            jp: "システムの互換性を確保するため、ソフトウェアが現在のオペレーティングシステムに適合して（suitable）いるか確認してください。"
        }
    },
    {
        id: 12,
        target: "priority",
        category: "中等",
        stem: "The manager requested that we give high ________ to solving the database glitches immediately.",
        options: ["priority", "prior", "prioritize", "priorities"],
        correct: "priority",
        explanations: {
            guide: "及物动词宾语的名词词性选择。空格前有动词 give 和形容词 high，此处需要填入名词作宾语，选不可数抽象名词 priority 构成固定搭配。",
            family: "priority (n.优先权) | prior (adj.先前的) | prioritize (v.优先考虑) | priorities (n-pl优先事项)。",
            details: "give high priority to... 意为“高度优先考虑……/把……放在优先位置”（注意 to 是介词，后面接动名词 solving）。虽然 priorities 也是名词，但在 high 修饰下，通常使用单数形式表示一种抽象程度定位。",
            cn: "经理要求我们对立即解决数据库故障给予高度优先考虑。",
            jp: "マネージャーは、データベースの不具合を直ちに解決することに高い優先順位（priority）を置くよう求めました。"
        }
    },
    {
        id: 13,
        target: "brief",
        category: "困难",
        stem: "The administrative assistant prepared a detailed ________ for the executives before the press conference began.",
        options: ["briefing", "brief", "briefly", "briefed"],
        correct: "briefing",
        explanations: {
            guide: "冠词后的名词中心语词性选择。空格前有不定冠词 a 和形容词 detailed（详细的），作 prepared 的宾语，结合“高管”和“新闻发布会”语境，选名词 briefing。",
            family: "briefing (n.简要汇报/简报) | brief (adj./v.简短的) | briefly (adv.简短地) | briefed (v-ed向……作了简要汇报)。",
            details: "prepared a detailed briefing 意为“准备了一份详细的简报/汇报材料”。在公关发布、企业高层决策（executives）中，briefing 指代会议或活动前的基本情况介绍。其他选项不作此含义的名词。",
            cn: "在新闻发布会开始前，行政助理为高管们准备了一份详细的简报。",
            jp: "広報記者会見が始まる前に、行政アシスタントは役員向けに詳細な説明資料（briefing）を用意しました。"
        }
    },
    {
        id: 14,
        target: "reasonable",
        category: "困难",
        stem: "The customer service manager resolved the dispute by acting ________ and offering a full refund.",
        options: ["reasonably", "reasonable", "reason", "reasoning"],
        correct: "reasonably",
        explanations: {
            guide: "修饰动词的副词状语词性判定。空格位于介词 by 之后的动名词 acting 之后，需填入副词作状语修饰 acting，选 reasonably。",
            family: "reasonably (adv.合理地/通情达理地) | reasonable (adj.合理的) | reason (n./v.原因/推理) | reasoning (n.推理/论证)。",
            details: "acting reasonably 意为“表现得通情达理/合情合理”。描述客服经理（customer service manager）妥善化解客户纠纷（resolved the dispute）时的得体举措。其余派生词词形不符。",
            cn: "客服经理采取了合情合理的处理方式并提供了全额退款，从而化解了这起纠纷。",
            jp: "カスタマーサービスマネージャーは、合理的に（reasonably）行動し、全額返金を提示することで紛争を解決しました。"
        }
    },
    {
        id: 15,
        target: "setting",
        category: "困难",
        stem: "To optimize the power grid, the engineering crew adjusted the default system ________.",
        options: ["settings", "setting", "set", "sets"],
        correct: "settings",
        explanations: {
            guide: "名词复数在特定技术语境下的选择。空格作为 adjusted 的宾语，且被 system 修饰，描述调整系统的一系列参数，应选用表示具体物理或系统参数的复数名词 settings。",
            family: "settings (n-pl系统设置/参数) | setting (n.环境/单数设置) | set (v./n.套) | sets (n-pl套/3sg)。",
            details: "adjust default system settings 意为“调整默认系统设置”。在电力、软件及工程设备维护场景下，复数形式 settings 专指各种电子或物理设备的参数配置。单数形式 setting 侧重于宏观背景环境。",
            cn: "为了优化电网，工程人员调整了默认的系统设置。",
            jp: "送電網を最適化するため、エンジニアリングチームはデフォルトのシステム設定（settings）を調整しました。"
        }
    },
    {
        id: 16,
        target: "forecast",
        category: "困难",
        stem: "Economists are busy ________ the fiscal revenue growth for the next quarter using the new statistical models.",
        options: ["forecasting", "forecast", "forecasted", "forecaster"],
        correct: "forecasting",
        explanations: {
            guide: "进行时态中的现在分词选择。空格前面有 are 且后面有 busy（构成 are busy doing 结构，或者 present continuous 时态），后面接有宾语 growth，需填入现在分词，选 forecasting。",
            family: "forecasting (v-ing预测中) | forecast (v./n.预测) | forecasted (v-ed已预测) | forecaster (n.预报员)。",
            details: "are busy forecasting... 意为“正忙于预测……”。经济学家（economists）使用新统计模型来推算下一个季度的财政收入（fiscal revenue）增幅，是用以分析宏观趋势的高阶语境。其余词性无法在此构成 correct 语法结构。",
            cn: "经济学家正忙于使用新的统计模型预测下一季度的财政收入增长。",
            jp: "エコノミストたちは、新しい統計モデルを用いて、次の四半期の財政収益成長を予測（forecasting）することに追われています。"
        }
    },
    {
        id: 17,
        target: "found",
        category: "困难",
        stem: "The prominent charitable ________ was established in memory of the company's original general manager.",
        options: ["foundation", "found", "founder", "founded"],
        correct: "foundation",
        explanations: {
            guide: "修饰词后的主语名词选择。空格位于 The 和形容词 prominent（杰出的/著名的）、charitable（慈善的）之后，作为句子主语，需填入名词，选 foundation。",
            family: "foundation (n.基金会/基础) | found (v.创建) | founder (n.创始人) | founded (v-ed被创建的)。",
            details: "charitable foundation 意为“慈善基金会”，常考名词搭配。虽然 founder（联合创始人/发起人）也是名词，但在单数形式前，通常会更契合“组织机构”被建立（was established）的被动语态逻辑。",
            cn: "为了纪念公司原总经理，成立了这家著名的慈善基金会。",
            jp: "その著名な慈善財団（foundation）は、同社の初代ゼネラルマネージャーを記念して設立されました。"
        }
    },
    {
        id: 18,
        target: "agriculture",
        category: "困难",
        stem: "The regional market relies heavily on the export of high-quality ________ products to earn revenue.",
        options: ["agricultural", "agriculture", "agriculturally", "agriculturist"],
        correct: "agricultural",
        explanations: {
            guide: "名词前的修饰形容词词性选择。空格用于修饰后面的名词 products（产品），需要填入形容词，选 agricultural。",
            family: "agricultural (adj.农业的) | agriculture (n.农业) | agriculturally (adv.农业上) | agriculturist (n.农学家)。",
            details: "agricultural products 意为“农产品”，属于宏观供应链和跨国贸易场景中具有高分权重的专有高阶搭配词组。其他选项无法构成正确的名词修饰关系。",
            cn: "该区域市场在很大程度上依赖高品质农产品的出口来获取收益。",
            jp: "その地域市場は、収益を得るために高品質な農産（agricultural）物の輸出に大きく依存しています。"
        }
    }
];