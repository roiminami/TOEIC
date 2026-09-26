// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data261-270.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "turnover",
        pos: "名",
        ipa: "/ˈtɜːrnoʊvər/",
        cn: "员工离职率，人员流动；营业额，周转率",
        jp: "離職率、人員の入れ替わり；売上高、回転率",
        family: "turn over / employee turnover / inventory turnover",
        tips: "托业双重考点：1. 人事场景考员工流失（high/low staff turnover）；2. 财务与供应链考营业额或库存周转率（inventory turnover）。",
        desc: "The firm has a high staff turnover."
    },
    {
        word: "anonymous",
        pos: "形",
        ipa: "/əˈnɑːnɪməs/",
        cn: "匿名的，不署名的",
        jp: "匿名の、名前を明かさない",
        family: "anonymously / anonymity",
        tips: "员工满意度调查与客户反馈高频词：an anonymous survey / feedback（匿名问卷/意见）；副词 anonymously 意为“匿名地提交”。",
        desc: "Employees completed an anonymous survey."
    },
    {
        word: "intact",
        pos: "形",
        ipa: "/ɪnˈtækt/",
        cn: "完好无损的，完整的",
        jp: "無傷の、損なわれていない、完全な",
        family: "remain intact / arrive intact",
        tips: "物流运输与质检常考表语形容词：常与 remain, arrive 搭配（the fragile shipment arrived intact 货物完好无损地送达）。",
        desc: "The package arrived completely intact."
    },
    {
        word: "complement",
        pos: "動/名",
        ipa: "/ˈkɑːmplɪment/ (v.), /ˈkɑːmplɪmənt/ (n.)",
        cn: "补充，互补，使相得益彰；补充物",
        jp: "補完する、引き立てる；補完物",
        family: "complementary / complemented / complementing",
        tips: "常考技能或产品组合互补（complement each other）；注意与 compliment（称赞）区分；派生形容词 complementary 意为“互补的”。",
        desc: "The new software complements our system."
    },
    {
        word: "reproduce",
        pos: "動",
        ipa: "/ˌriːprəˈduːs/",
        cn: "复制，翻印；重现，再现",
        jp: "複製する、複写する；再現する",
        family: "reproduction / reproducible / reproduced",
        tips: "版权声明与培训教材高频词：may not be reproduced without written permission（未经书面许可不得翻印）；科学场景指重现实验结果。",
        desc: "Do not reproduce this document."
    },
    {
        word: "embark",
        pos: "動",
        ipa: "/ɪmˈbɑːrk/",
        cn: "着手，开始（新项目/新计划）；登船",
        jp: "（事業・計画などに）乗り出す、着手する；乗船する",
        family: "embarkation / embarked / embarking",
        tips: "高频动介短语搭配：embark on / upon a new project / venture / strategy（着手开展新项目/战略扩张），等同于 commence 或 initiate。",
        desc: "We will embark on a new project."
    },
    {
        word: "compelling",
        pos: "形",
        ipa: "/kəmˈpelɪŋ/",
        cn: "令人信服的，极具吸引力的",
        jp: "説得力のある、人を引きつける",
        family: "compel / compelled / compellingly",
        tips: "商务提案与营销演示高频词：a compelling presentation / proposal / argument / narrative（极具说服力的演示/令人无法抗拒的方案）。",
        desc: "She gave a compelling presentation."
    },
    {
        word: "consecutive",
        pos: "形",
        ipa: "/kənˈsekjətɪv/",
        cn: "连续的，连贯的",
        jp: "連続した、引き続く",
        family: "consecutively / consecution",
        tips: "财报与业绩增长必考词：for three consecutive quarters / years（连续三个季度/年），副词 consecutively 意为“连续不断地”。",
        desc: "Profits grew for three consecutive years."
    },
    {
        word: "faucet",
        pos: "名",
        ipa: "/ˈfɔːsɪt/",
        cn: "水龙头",
        jp: "（水道の）蛇口",
        family: "faucets / leaky faucet",
        tips: "听力 Part 1 与设施维护核心生活词汇：repair a leaky faucet（修理漏水水龙头）；亦可指办公茶水间或洗手间供水设施。",
        desc: "The kitchen faucet was leaking."
    },
    {
        word: "imperative",
        pos: "形/名",
        ipa: "/ɪmˈperətɪv/",
        cn: "迫切的，至关重要的；当务之急，必要之事",
        jp: "極めて重要な、緊急の；必須事項、急務",
        family: "imperatively",
        tips: "托业高频句型：it is imperative that sb (should) do sth（……是至关重要的）；名词短语 a strategic imperative 意为“战略当务之急”。",
        desc: "It is imperative to meet the deadline."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "consecutive",
        category: "简单",
        stem: "The regional sales division reported record-breaking revenue growth for three ________ quarters.",
        options: ["consecutive", "consecutively", "imperative", "faucet"],
        correct: "consecutive",
        explanations: {
            guide: "数词后的定语形容词。数词 three 后面修饰复数名词 quarters，表达“连续三个季度”，选形容词 consecutive。",
            family: "consecutive (adj.连续的) | consecutively (adv.连续地) | imperative (adj.至关重要的) | faucet (n.水龙头)。",
            details: "consecutive quarters 是托业财报中最核心的固定搭配。consecutively 是副词，不能充当 quarters 前的定语形容词。",
            cn: "该区域销售部门连续三个季度报告了创纪录的营收增长。",
            jp: "その地域営業部門は、3四半期連続（consecutive）で過去最高の増収を報告しました。"
        }
    },
    {
        id: 2,
        target: "faucet",
        category: "简单",
        stem: "The building maintenance technician was dispatched to repair a leaking ________ in the third-floor washroom.",
        options: ["faucet", "faucets", "turnover", "intact"],
        correct: "faucet",
        explanations: {
            guide: "不定冠词与分词形容词后的单数名词。a leaking ________ 结构中，leaking 修饰水暖设施，a leaking faucet 意为“漏水的水龙头”，选 faucet。",
            family: "faucet (n.水龙头/单数) | faucets (n.复数) | turnover (n.离职率) | intact (adj.完好的)。",
            details: "a leaking faucet 属于物业报修核心专属表达。受不定冠词 a 限制，复数形式 faucets 语法不成立；turnover 和 intact 词义与修水管语境脱节。",
            cn: "大楼维修技术员被派去修理三楼盥洗室内漏水的水龙头。",
            jp: "ビルの保守技術者が、3階の洗面所にある水漏れしている蛇口（faucet）を修理するために派遣されました。"
        }
    },
    {
        id: 3,
        target: "anonymous",
        category: "简单",
        stem: "To encourage candid feedback from all staff members, management conducted an ________ survey regarding workplace satisfaction.",
        options: ["anonymous", "anonymously", "compelling", "embark"],
        correct: "anonymous",
        explanations: {
            guide: "不定冠词后的定语形容词。an ________ survey 结构中，不定冠词 an 提示后接元音音素开头的形容词修饰调查问卷，选 anonymous（匿名的）。",
            family: "anonymous (adj.匿名的) | anonymously (adv.匿名地) | compelling (adj.令人信服的) | embark (v.着手) 。",
            details: "an anonymous survey 意为匿名问卷调查。anonymously 是副词，不能修饰名词 survey；compelling 首音为辅音音素，与冠词 an 矛盾。",
            cn: "为了鼓励全体员工提出坦诚的反馈，管理层开展了一项关于职场满意度的匿名调查。",
            jp: "全従業員からの率直なフィードバックを促すため、経営陣は職場の満足度に関する匿名（anonymous）のアンケートを実施しました。"
        }
    },
    {
        id: 4,
        target: "intact",
        category: "简单",
        stem: "Despite experiencing severe turbulence during international transit, the fragile glass ornaments arrived completely ________.",
        options: ["intact", "imperative", "turnover", "consecutive"],
        correct: "intact",
        explanations: {
            guide: "系动词/动词后的主语补足语。arrived 后面接形容词作主语状态补足语，副词 completely 修饰该形容词，arrived intact 意为“完好无损地送达”，选 intact。",
            family: "intact (adj.完好无损的/完整的) | imperative (adj.迫切的) | turnover (n.营业额) | consecutive (adj.连续的)。",
            details: "arrive intact 是托业物流运输经典搭配。turnover 是名词，imperative 和 consecutive 词义与易碎玻璃制品的运输结果完全不符。",
            cn: "尽管在跨国运输途中遭遇了剧烈的颠簸，但那些易碎的玻璃饰品依然完好无损地送达了。",
            jp: "国際輸送中に激しい乱気流に遭遇したにもかかわらず、壊れやすいガラスの装飾品は完全に無傷の（intact）状態で到着しました。"
        }
    },
    {
        id: 5,
        target: "reproduce",
        category: "简单",
        stem: "No part of this proprietary training manual may be ________ in any format without prior written authorization from the author.",
        options: ["reproduced", "reproducing", "embarked", "faucet"],
        correct: "reproduced",
        explanations: {
            guide: "被动语态谓语动词。may be 后面接及物动词的过去分词构成被动语态，教材与复制之间为被动关系，be reproduced 意为“被翻印/被复制”，选 reproduced。",
            family: "reproduced (v-ed被复制的) | reproducing (现在分词) | embarked (v-ed着手) | faucet (n.水龙头)。",
            details: "may be reproduced 是版权声明标准公文用语。reproducing 是现在分词，不能在 may be 之后表达被动语态含义。",
            cn: "未经作者事先书面许可，不得以任何形式翻印或复制本专有培训手册的任何部分。",
            jp: "著者の事前の書面による許可なしに、この専有トレーニングマニュアルのいかなる部分もいかなる形式でも複製（reproduced）することは禁じられています。"
        }
    },
    {
        id: 6,
        target: "compelling",
        category: "简单",
        stem: "The creative director delivered a ________ proposal that convinced the board of directors to approve the autumn marketing budget.",
        options: ["compelling", "compel", "intact", "turnover"],
        correct: "compelling",
        explanations: {
            guide: "形容词作定语修饰名词。a ________ proposal 结构中需要形容词修饰提案，表达提案“极具说服力/引人入胜”，选 compelling。",
            family: "compelling (adj.令人信服的/引人注目的) | compel (v.强迫) | intact (adj.完好的) | turnover (n.流动率)。",
            details: "a compelling proposal 意为极具说服力的提案。compel 是动词原形，不能作定语修饰名词 proposal。",
            cn: "创意总监作了一份极具说服力的提案，说服了董事会批准秋季营销预算。",
            jp: "クリエイティブディレクターは、取締役会を説得して秋のマーケティング予算を承認させる説得力のある（compelling）提案を行いました。"
        }
    },
    {
        id: 7,
        target: "embark",
        category: "中等",
        stem: "The renewable energy corporation announced plans to ________ on an ambitious solar panel installation project across the region.",
        options: ["embark", "embarkation", "reproduce", "complement"],
        correct: "embark",
        explanations: {
            guide: "动词不定式与固定动介短语搭配。plans to 后面接动词原形，与介词 on 连用构成 embark on sth，意为“着手开展/开始进行”，选动词原形 embark。",
            family: "embark (v.着手/登船) | embarkation (n.登机/着手) | reproduce (v.复制) | complement (v.补充)。",
            details: "embark on a project 属于商业发展战略核心短语。embarkation 是名词，不能在不定式符号 to 后面担任谓语动词原形。",
            cn: "该可再生能源公司宣布，计划在该地区着手开展一项雄心勃勃的太阳能电池板安装项目。",
            jp: "その再生可能エネルギー企業は、地域全体で野心的なソーラーパネル設置プロジェクトに乗り出す（embark on）計画を発表しました。"
        }
    },
    {
        id: 8,
        target: "complement",
        category: "中等",
        stem: "The newly developed mobile application is designed to ________ our existing desktop inventory management platform.",
        options: ["complement", "complementary", "anonymous", "consecutive"],
        correct: "complement",
        explanations: {
            guide: "动词不定式表目的及动宾搭配。is designed to 后面接动词原形，后接宾语 platform，表达新应用旨在与现有平台“相辅相成/互补”，选 complement。",
            family: "complement (v.补充/互补/n.补充物) | complementary (adj.互补的) | anonymous (adj.匿名的) | consecutive (adj.连续的)。",
            details: "complement the platform 意为使平台功能更完善互补。complementary 是形容词，不能在不定式符号 to 后直接充当谓语动词原形。",
            cn: "这款新开发的移动端应用程序旨在与我们现有的桌面库存管理平台相辅相成。",
            jp: "新しく開発されたモバイルアプリケーションは、既存のデスクトップ在庫管理プラットフォームを補完する（complement）ように設計されています。"
        }
    },
    {
        id: 9,
        target: "imperative",
        category: "中等",
        stem: "Given the strict government safety inspection tomorrow, it is absolutely ________ that all factory emergency exits remain unobstructed.",
        options: ["imperative", "imperatively", "compelling", "intact"],
        correct: "imperative",
        explanations: {
            guide: "虚拟语气句型与表语形容词。it is absolutely ________ that... 结构中，副词 absolutely 修饰形容词表语，it is imperative that 意为“……是极其重要的/当务之急”，选 imperative。",
            family: "imperative (adj.至关重要的/迫切的) | imperatively (adv.必要地) | compelling (adj.有说服力的) | intact (adj.完整的)。",
            details: "it is imperative that... 是托业规章通知最高频句型之一。imperatively 是副词，不能作形式主语 it 引导的系表从句表语形容词。",
            cn: "鉴于明天政府将进行严格的安全检查，所有工厂紧急出口保持通畅无阻是绝对至关重要的。",
            jp: "明日の厳格な政府安全検査を考慮すると、工場のすべての非常口に障害物がない状態を維持することが絶対に不可欠（imperative）です。"
        }
    },
    {
        id: 10,
        target: "turnover",
        category: "中等",
        stem: "The human resources director introduced flexible telecommuting options to address high employee ________ among software engineers.",
        options: ["turnover", "turn over", "faucet", "embarkation"],
        correct: "turnover",
        explanations: {
            guide: "复合名词专属人事搭配。employee 与 turnover 组合构成 employee turnover，意为“员工离职率/员工流动”，选名词 turnover。",
            family: "turnover (n.离职率/营业额) | turn over (动词短语) | faucet (n.水龙头) | embarkation (n.登机)。",
            details: "high employee turnover 专指员工跳槽或流失率高。turn over 是动词短语，不能作为形容词 high 后的中心名词。",
            cn: "人力资源主管推行了弹性远程办公制度，以解决软件工程师群体中居高不下的员工离职率问题。",
            jp: "人事部長は、ソフトウェアエンジニアの間での高い従業員離職率（turnover）に対処するため、柔軟な在宅勤務の選択肢を導入しました。"
        }
    },
    {
        id: 11,
        target: "anonymous",
        category: "中等",
        stem: "Staff members wishing to report accounting discrepancies may submit their concerns ________ through the secure portal.",
        options: ["anonymously", "anonymous", "consecutive", "imperative"],
        correct: "anonymously",
        explanations: {
            guide: "副词修饰及物动词短语。空格修饰动词短语 submit their concerns，表示以“匿名的方式”提交顾虑，选副词 anonymously。",
            family: "anonymously (adv.匿名地) | anonymous (adj.匿名的) | consecutive (adj.连续的) | imperative (adj.迫切的)。",
            details: "submit concerns anonymously 构成动词与方式状语副词的合理修饰关系。anonymous 是形容词，不能直接作状语修饰动词 submit。",
            cn: "希望报告会计账目出入的员工可以通过安全门户网站匿名提交他们的疑虑。",
            jp: "会計上の不一致を報告したいスタッフは、安全なポータルを通じて匿名で（anonymously）懸念を提出することができます。"
        }
    },
    {
        id: 12,
        target: "consecutive",
        category: "中等",
        stem: "The automated assembly line operated ________ for seventy-two hours without requiring any mechanical adjustments.",
        options: ["consecutively", "consecutive", "intact", "compelling"],
        correct: "consecutively",
        explanations: {
            guide: "副词修饰不及物动词。空格修饰动词 operated（运转/操作），表示设备“连续不断地”运转了 72 小时，选副词 consecutively。",
            family: "consecutively (adv.连续地) | consecutive (adj.连续的) | intact (adj.完好的) | compelling (adj.引人注目的)。",
            details: "operated consecutively 意为连续运行。consecutive 是形容词，不能直接放在动词 operated 之后充当修饰动作方式的时间状语副词。",
            cn: "该自动化装配流水线连续运转了七十二小时，期间未进行任何机械调整。",
            jp: "その自動組立ラインは、機械的な調整を一切必要とせずに、72時間連続して（consecutively）稼働しました。"
        }
    },
    {
        id: 13,
        target: "complement",
        category: "困难",
        stem: "The strategic management consultant noted that the two merging enterprises possess highly ________ technology skill sets.",
        options: ["complementary", "complement", "complimentary", "anonymous"],
        correct: "complementary",
        explanations: {
            guide: "形近词辨析与定语形容词考点。修饰 skill sets，表达两家公司的技能组合是“互补的/相辅相成的”，选派生形容词 complementary（互补的）。",
            family: "complementary (adj.互补的/相辅相成的) | complement (v./n.互补) | complimentary (adj.免费的/赞美的) | anonymous (adj.匿名的)。",
            details: "complementary skill sets 指相得益彰的互补型技能。complimentary 意为免费赠送的或赞赏的，属于托业 Part 5 最经典的形近干扰词。",
            cn: "战略管理顾问指出，这两家正在合并的企业拥有高度互补的技术技能组合。",
            jp: "戦略経営コンサルタントは、合併する2社が高度に補完的な（complementary）技術スキルセットを有していると指摘しました。"
        }
    },
    {
        id: 14,
        target: "imperative",
        category: "困难",
        stem: "In today’s fiercely competitive retail sector, accelerating digital supply chain transformation has become a critical business ________.",
        options: ["imperative", "imperatively", "compelling", "turnover"],
        correct: "imperative",
        explanations: {
            guide: "熟词生义与名词中心语。a critical business ________ 结构中，不定冠词 a 与形容词 business 之后需要接单数名词，imperative 考查名词“当务之急/必要举措”，选 imperative。",
            family: "imperative (n.当务之急/必要之事/adj.迫切的) | imperatively (adv.急迫地) | compelling (adj.令人信服的) | turnover (n.离职率)。",
            details: "a business imperative 属于商业评论与企业战略核心高阶短语，意为商业当务之急。compelling 是形容词，turnover 含义在此不通顺。",
            cn: "在当今竞争激烈的零售行业中，加速数字化供应链转型已成为一项至关重要的商业当务之急。",
            jp: "今日の激しい競争が繰り広げられる小売業界において、デジタルサプライチェーンの変革を加速させることは極めて重要なビジネス上の急務・必須事項（imperative）となっています。"
        }
    },
    {
        id: 15,
        target: "reproduce",
        category: "困难",
        stem: "External researchers encountered severe difficulty when attempting the precise ________ of the initial clinical trial findings.",
        options: ["reproduction", "reproduce", "intact", "embarked"],
        correct: "reproduction",
        explanations: {
            guide: "定冠词与形容词后的名词中心语。the precise ________ of the findings 结构中，形容词 precise（精确的）后面需要接名词作 attempting 的宾语，选 reproduction（再现/重现）。",
            family: "reproduction (n.重现/再现/复制) | reproduce (v.复制/再现) | intact (adj.完好的) | embarked (v-ed着手)。",
            details: "the reproduction of findings 指科研实验结果的可重复性/重现。reproduce 是动词，不能在定冠词 the 和形容词 precise 后充当名词中心词。",
            cn: "外部研究人员在尝试精确重现最初的临床试验结果时遇到了极大的困难。",
            jp: "外部の研究者たちは、初期の臨床試験結果の正確な再現（reproduction）を試みた際に深刻な困難に直面しました。"
        }
    },
    {
        id: 16,
        target: "compelling",
        category: "困难",
        stem: "Market analysts found the financial forecast presented by the startup's founder to be ________ persuasive.",
        options: ["compellingly", "compelling", "anonymously", "consecutively"],
        correct: "compellingly",
        explanations: {
            guide: "副词修饰表语形容词。found the forecast to be ________ persuasive 结构中，空格修饰形容词 persuasive（有说服力的），需要副词作状语，compellingly persuasive 意为“极其令人信服的”，选 compellingly。",
            family: "compellingly (adv.令人信服地/引人注目地) | compelling (adj.令人信服的) | anonymously (adv.匿名地) | consecutively (adv.连续地)。",
            details: "compellingly persuasive 属于托业高阶程度修饰短语。compelling 是形容词，不能直接用来修饰另一个形容词 persuasive。",
            cn: "市场分析师发现该初创企业创始人展示的财务预测极具说服力。",
            jp: "市場アナリストは、スタートアップの創業者が提示した財務予測が非常に説得力に富んで（compellingly persuasive）いると判断しました。"
        }
    },
    {
        id: 17,
        target: "turnover",
        category: "困难",
        stem: "By integrating automated order-fulfillment systems, the wholesale distributor significantly accelerated its annual inventory ________.",
        options: ["turnover", "turned over", "reproduction", "faucet"],
        correct: "turnover",
        explanations: {
            guide: "商业供应链专属复合名词搭配。annual inventory ________ 结构中，inventory turnover 是托业仓储与财报核心专有名词，意为“存货周转率”，选名词 turnover。",
            family: "turnover (n.周转率/营业额/离职率) | turned over (v-ed形式) | reproduction (n.复制) | faucet (n.水龙头)。",
            details: "inventory turnover 属于物流金融与供应链的核心考点，指库存周转速度。reproduction（复制）与 faucet（水龙头）在此处毫无语义逻辑关联。",
            cn: "通过整合自动化订单执行系统，该批发分销商大幅提高了其年度库存周转率。",
            jp: "自動注文処理システムを統合することにより、その卸売販売業者は年間在庫回転率（inventory turnover）を大幅に加速させました。"
        }
    },
    {
        id: 18,
        target: "embark",
        category: "困难",
        stem: "Prior to ________ upon the multi-million-dollar European market expansion, the executive board conducted an exhaustive risk assessment.",
        options: ["embarking", "embarked", "embark", "embarkation"],
        correct: "embarking",
        explanations: {
            guide: "介词后接动名词结构与熟词生义。Prior to 是复合介词，后面接动名词作宾语，并与介词 upon 连用构成 Prior to embarking upon...（在着手进行……之前），选 embarking。",
            family: "embarking (动名词/着手) | embarked (过去式/过去分词) | embark (动词原形) | embarkation (n.登机/启程)。",
            details: "Prior to doing sth 属于托业 Part 5 经典介词考点。embarking upon the expansion 意为着手开展业务扩张；embarkation 通常指实际登船动作，不能直接带介词 upon 接商业项目。",
            cn: "在着手开展价值数百万美元的欧洲市场扩张之前，执行董事会进行了全面的风险评估。",
            jp: "数百万ドル規模のヨーロッパ市場拡大に乗り出す（embarking upon）前に、執行役員会は徹底的なリスク評価を実施しました。"
        }
    }
];