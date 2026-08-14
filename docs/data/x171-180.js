// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data401-410.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "contemplating",
        pos: "動/形",
        ipa: "/ˈkɑːntəmpleɪtɪŋ/",
        cn: "盘算，深思，沉思（contemplate的现在分词）",
        jp: "熟考している、検討している",
        family: "contemplate / contemplation / contemplative",
        tips: "职业与战略高频：contemplating a career change（盘算着职业转型/换工作）。",
        desc: "She is contemplating a change."
    },
    {
        word: "suppose",
        pos: "動",
        ipa: "/səˈpoʊz/",
        cn: "假设，猜想，认为",
        jp: "〜だと思う、仮定する",
        family: "supposed / supposedly / supposition",
        tips: "商务高频：be supposed to do sth（按规定应该做某事）；I suppose so（我想是的）。",
        desc: "I suppose the meeting starts soon."
    },
    {
        word: "anticipate",
        pos: "動",
        ipa: "/ænˈtɪsɪpeɪt/",
        cn: "预料，预期，期待",
        jp: "予期する、期待する",
        family: "anticipation / anticipated / anticipatory",
        tips: "商务预测高频：anticipate demand/growth（预测需求/增长）。",
        desc: "We anticipate higher sales next year."
    },
    {
        word: "engrossing",
        pos: "形",
        ipa: "/ɪnˈɡroʊsɪŋ/",
        cn: "引人入胜的，使人全神贯注的",
        jp: "夢中にさせる、引き込まれる",
        family: "engross / engrossed / engrossment",
        tips: "演示与出版高频：engrossing presentation/novel（引人入胜的演讲/小说）。",
        desc: "The presentation was truly engrossing."
    },
    {
        word: "outweighing",
        pos: "動",
        ipa: "/ˌaʊtˈweɪɪŋ/",
        cn: "超过，胜过（outweigh的现在分词）",
        jp: "〜に勝っている、上回っている",
        family: "outweigh / outweighed",
        tips: "决策与评估高频：benefits outweighing costs（利大于弊/收益胜过成本）。",
        desc: "Benefits are outweighing the risks."
    },
    {
        word: "encountering",
        pos: "動",
        ipa: "/ɪnˈkaʊntərɪŋ/",
        cn: "遇到，遭遇（encounter的现在分词）",
        jp: "遭遇すること、直面すること",
        family: "encounter / encountered",
        tips: "技术与客服高频：encountering unexpected problems（遇到意想不到的问题）。",
        desc: "They are encountering technical difficulties."
    },
    {
        word: "herb",
        pos: "名",
        ipa: "/ɜːrb/",
        cn: "草药，香草",
        jp: "ハーブ、薬草",
        family: "herbal / herbalist / herbs",
        tips: "餐饮与健康高频：fresh herbs（新鲜香草），herbal tea（草本茶）。",
        desc: "Fresh herbs add great flavor."
    },
    {
        word: "resolution",
        pos: "名",
        ipa: "/ˌrezəˈluːʃn/",
        cn: "决议，解决，决心",
        jp: "決議、解決、解像度",
        family: "resolve / resolved / resolute",
        tips: "法律与管理高频：pass a resolution（通过决议），conflict resolution（解决冲突）。",
        desc: "The board passed the resolution."
    },
    {
        word: "fiduciary",
        pos: "形/名",
        ipa: "/fɪˈduːʃieri/",
        cn: "受托的，信托的；受托人",
        jp: "受託者の、信託の",
        family: "fiduciaries / fiducially",
        tips: "金融与法律高频：fiduciary duty/responsibility（受托人责任/信托责任）。",
        desc: "Directors hold a fiduciary duty."
    },
    {
        word: "spoilage",
        pos: "名",
        ipa: "/ˈspoɪlɪdʒ/",
        cn: "腐烂，变质，损坏",
        jp: "損傷、腐敗、痛むこと",
        family: "spoil / spoiled / spoiler",
        tips: "物流与食品高频：prevent food spoilage（防止食物变质）。",
        desc: "Refrigeration prevents food spoilage."
    },
    {
        word: "rumor",
        pos: "名/動",
        ipa: "/ˈruːmər/",
        cn: "谣言，传闻；散布传闻",
        jp: "噂、デマ",
        family: "rumored / rumors",
        tips: "公关与市场高频：deny a rumor（否认传闻）。",
        desc: "She denied the false rumor."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "resolution",
        category: "简单",
        stem: "The board of directors voted unanimously to pass a ________ regarding the company's expansion plans.",
        options: ["resolution", "fiduciary", "spoilage", "herb"],
        correct: "resolution",
        explanations: {
            guide: "董事会表决名词。voted unanimously to pass a ________ 结合公司扩张计划，选 resolution（决议）。",
            family: "resolution (n.决议) | fiduciary (adj.受托的) | spoilage (n.变质) | herb (n.香草)。",
            details: "pass a resolution 意为通过一项决议。fiduciary（信托的）、spoilage（腐烂）均非通过的文件实体。",
            cn: "董事会一致投票通过了一项关于公司扩张计划的决议。",
            jp: "取締役会は会社の拡張計画に関する決議（resolution）を満場一致で可決しました。"
        }
    },
    {
        id: 2,
        target: "suppose",
        category: "简单",
        stem: "Managers ________ that the new software update will be fully operational by next Monday.",
        options: ["suppose", "supposition", "engrossing", "spoilage"],
        correct: "suppose",
        explanations: {
            guide: "句子谓语动词。主语为 Managers，后面缺乏谓语动词，表达经理们“推测/猜想”新软件将上线，选 suppose。",
            family: "suppose (v.推测/认为) | supposition (n.推测) | engrossing (adj.引人入胜的) | spoilage (n.变质)。",
            details: "Managers suppose that... 意为经理们认为/推测……。supposition 是名词，不能充当谓语动词。",
            cn: "经理们推测新软件更新将在下周一前全面投入运行。",
            jp: "マネージャーたちは新しいソフトウェアの更新が来週の月曜日までに完全に運用可能になると推測して（suppose）います。"
        }
    },
    {
        id: 3,
        target: "anticipate",
        category: "简单",
        stem: "Economic analysts ________ a steady growth in consumer spending over the coming fiscal year.",
        options: ["anticipate", "anticipation", "resolution", "fiduciary"],
        correct: "anticipate",
        explanations: {
            guide: "经济预测动词。主语为 Economic analysts，后面缺少谓语动词，表达“预料/预期”消费支出增长，选 anticipate。",
            family: "anticipate (v.预期/预料) | anticipation (n.预期) | resolution (n.决议) | fiduciary (adj.信托的)。",
            details: "analysts anticipate growth 意为分析师预测增长。anticipation 是名词，不能在主语后充当核心谓语。",
            cn: "经济分析师预料在下一个财年消费者支出将稳步增长。",
            jp: "経済アナリストは、来会計年度に消費支出が堅調に増加すると予想して（anticipate）います。"
        }
    },
    {
        id: 4,
        target: "spoilage",
        category: "简单",
        stem: "Proper refrigeration during transport is essential to prevent food ________.",
        options: ["spoilage", "resolution", "fiduciary", "rumor"],
        correct: "spoilage",
        explanations: {
            guide: "食品物流名词考点。prevent food ________ 结合冷藏运输（refrigeration），表达防止食物“腐烂/变质”，选 spoilage。",
            family: "spoilage (n.腐烂/变质) | resolution (n.决议) | fiduciary (adj.信托的) | rumor (n.谣言)。",
            details: "prevent food spoilage 意为防止食物变质。resolution（决议）、rumor（传闻）与食品冷藏防腐无关。",
            cn: "运输过程中的妥善冷藏对于防止食物变质至关重要。",
            jp: "輸送中の適切な冷蔵は食品の傷み（spoilage）を防ぐために不可欠です。"
        }
    },
    {
        id: 5,
        target: "herb",
        category: "简单",
        stem: "The restaurant chef used a blend of fresh ________ and spices to enhance the flavor of the dish.",
        options: ["herbs", "rumors", "resolutions", "fiduciaries"],
        correct: "herbs",
        explanations: {
            guide: "烹饪调味名词考点。a blend of fresh ________ and spices 表达主厨使用的“香草/草药”与香料，选用复数 herbs。",
            family: "herbs (n.复数香草) | rumors (n.传闻) | resolutions (n.决议) | fiduciaries (n.受托人)。",
            details: "herbs and spices 是餐饮烹饪经典固定词组，意为香草与香料。其余选项均非调味用原料。",
            cn: "餐厅主厨使用混合的新鲜香草和香料来提升菜肴的风味。",
            jp: "レストランのシェフは、料理の風味を高めるために新鮮なハーブ（herbs）とスパイスのブレンドを使用しました。"
        }
    },
    {
        id: 6,
        target: "rumor",
        category: "简单",
        stem: "The chief executive officer issued a statement to dispel the false ________ regarding a corporate merger.",
        options: ["rumor", "herb", "spoilage", "fiduciary"],
        correct: "rumor",
        explanations: {
            guide: "公关澄清名词考点。dispel the false ________ 结合企业合并，表达澄清虚假的“传闻/谣言”，选 rumor。",
            family: "rumor (n.谣言/传闻) | herb (n.香草) | spoilage (n.变质) | fiduciary (adj.受托的)。",
            details: "dispel a false rumor 意为辟谣/澄清不实传言。herb（香草）、spoilage（变质）不符合公关声明澄清的对象。",
            cn: "首席执行官发表声明，澄清了有关公司合并的不实传闻。",
            jp: "最高経営責任者は、企業合併に関する事実無根の噂（rumor）を打消すために声明を発表しました。"
        }
    },
    {
        id: 7,
        target: "engrossing",
        category: "中等",
        stem: "The keynote speaker delivered an ________ presentation that kept the entire audience captivated for two hours.",
        options: ["engrossing", "engrossed", "contemplating", "outweighing"],
        correct: "engrossing",
        explanations: {
            guide: "修饰物/演说的形容词。an ________ presentation 修饰演讲，表达“引人入胜的/极富吸引力的”，选 engrossing。",
            family: "engrossing (adj.引人入胜的) | engrossed (adj.全神贯注的/修饰人) | contemplating (v-ing盘算) | outweighing (v-ing超过)。",
            details: "an engrossing presentation 意为引人入胜的演讲。engrossed 通常修饰人（e.g., engrossed in a book），不能修饰 presentation。",
            cn: "主旨演讲嘉宾带来了一场极具吸引力的演说，让全场听众在两小时内全神贯注。",
            jp: "基調講演者は2時間にわたって全観客を魅了する、非常に引き込まれる（engrossing）プレゼンテーションを行いました。"
        }
    },
    {
        id: 8,
        target: "fiduciary",
        category: "中等",
        stem: "Corporate directors have a ________ responsibility to act in the best financial interest of company shareholders.",
        options: ["fiduciary", "spoilage", "engrossing", "anticipatory"],
        correct: "fiduciary",
        explanations: {
            guide: "金融法律形容词考点。a ________ responsibility 属于法律固定表达，意为“受托人责任/信托责任”，选 fiduciary。",
            family: "fiduciary (adj.受托的/信托的) | spoilage (n.损坏) | engrossing (adj.引人入胜的) | anticipatory (adj.预期的)。",
            details: "fiduciary responsibility 意为受托人/信托责任。指董事对股东负有最高标准的忠实与诚信义务。",
            cn: "公司董事负有受托责任，必须为了公司股东的最大财务利益行事。",
            jp: "企業の取締役は、会社の株主の最大の財務利益のために行動する受託者（fiduciary）責任を負っています。"
        }
    },
    {
        id: 9,
        target: "contemplating",
        category: "中等",
        stem: "After ten years in the finance industry, Ms. Taylor is ________ a career transition into education.",
        options: ["contemplating", "suppose", "outweighing", "encountering"],
        correct: "contemplating",
        explanations: {
            guide: "职业规划动词分词考点。is ________ a career transition 结合思考职业转型，表达“盘算/沉思/考虑着”，选 contemplating。",
            family: "contemplating (v-ing盘算/沉思) | suppose (v.猜想) | outweighing (v-ing胜过) | encountering (v-ing遭遇)。",
            details: "is contemplating a transition 意为正盘算/考虑着转型。suppose 是动词原形，不能与 is 直接构成进行时态。",
            cn: "在金融业工作十年后，泰勒女士正在盘算着向教育行业进行职业转型。",
            jp: "金融業界で10年過ごした後、テイラー氏は教育業界へのキャリア転向を検討して（contemplating）います。"
        }
    },
    {
        id: 10,
        target: "encountering",
        category: "中等",
        stem: "The IT department is currently ________ technical difficulties with the main database server.",
        options: ["encountering", "contemplating", "outweighing", "anticipate"],
        correct: "encountering",
        explanations: {
            guide: "故障排查动词进行时。is currently ________ technical difficulties 结合遇到技术困难，选 encountering（遇到/遭遇）。",
            family: "encountering (v-ing遇到/遭遇) | contemplating (v-ing盘算) | outweighing (v-ing胜过) | anticipate (v.预料)。",
            details: "is encountering difficulties 意为正在遇到困难。anticipate 是原形动词，且语义为预料非实际遭遇。",
            cn: "IT 部门目前在主数据库服务器上正遇到技术困难。",
            jp: "IT部門は現在、メインデータベースサーバーで技術的な困難に遭遇して（encountering）います。"
        }
    },
    {
        id: 11,
        target: "outweighing",
        category: "中等",
        stem: "Market analysts concluded that the potential long-term profits are ________ the initial investment risks.",
        options: ["outweighing", "encountering", "contemplating", "supposing"],
        correct: "outweighing",
        explanations: {
            guide: "风险评估动词考点。profits are ________ the risks 结合收益胜过风险的商业评估，选 outweighing（超过/胜过）。",
            family: "outweighing (v-ing胜过/超过) | encountering (v-ing遭遇) | contemplating (v-ing盘算) | supposing (v-ing猜想)。",
            details: "outweighing the risks 意为胜过/大于风险。指潜在长期利润超过了初始投资风险（利大于弊）。",
            cn: "市场分析师得出结论，潜在的长期利润正在胜过初始投资风险。",
            jp: "市場アナリストは、潜在的な長期利益が初期投資リスクを上回って（outweighing）いると結論付けました。"
        }
    },
    {
        id: 12,
        target: "anticipate",
        category: "中等",
        stem: "In ________ of bad weather, organizers set up a large marquee tent for the outdoor reception.",
        options: ["anticipation", "anticipate", "resolution", "fiduciary"],
        correct: "anticipation",
        explanations: {
            guide: "预先准备高频介词短语。In ________ of... 属于托业经典介词短语，意为“预料到/预见到……”，填入名词 anticipation。",
            family: "anticipation (n.预料/预见) | anticipate (v.预料) | resolution (n.决议) | fiduciary (adj.受托的)。",
            details: "In anticipation of... 意为预料到……。anticipate 是动词，不能紧跟在介词 In 后面做介词宾语。",
            cn: "预料到天气恶劣，组织者为户外招待会搭起了一座大型大棚帐篷。",
            jp: "悪天候を予想して（In anticipation of）、主催者は屋外レセプション用に大型のテントを設置しました。"
        }
    },
    {
        id: 13,
        target: "fiduciary",
        category: "困难",
        stem: "Investment advisors are held to strict ________ standards when managing client retirement funds.",
        options: ["fiduciary", "fiduciaries", "resolutional", "spoilage"],
        correct: "fiduciary",
        explanations: {
            guide: "金融合规形容词作定语。strict ________ standards 表达严格的“信托/受托人”标准，选形容词 fiduciary。",
            family: "fiduciary (adj.信托的/受托的) | fiduciaries (n.复数受托人) | resolutional (adj.决议的/非标准) | spoilage (n.损坏)。",
            details: "fiduciary standards 指信托标准。fiduciaries 是名词复数，不能在此直接充当修饰 standards 的前置定语。",
            cn: "投资顾问在管理客户退休基金时，必须遵循严格的受托人标准。",
            jp: "投資アドバイザーは、クライアントの退職基金を管理する際、厳格な受託者（fiduciary）基準を遵守することが求められます。"
        }
    },
    {
        id: 14,
        target: "resolution",
        category: "困难",
        stem: "Prompt conflict ________ protocols helped restore productive working relationships within the department.",
        options: ["resolution", "resolve", "supposition", "contemplation"],
        correct: "resolution",
        explanations: {
            guide: "高阶 HR 复合名词。conflict ________ 属于企业管理固定表达，意为“冲突解决”，选名词 resolution。",
            family: "resolution (n.解决/决议) | resolve (v.解决) | supposition (n.推测) | contemplation (n.沉思)。",
            details: "conflict resolution 意为冲突解决。resolve 是动词原形，不能与 conflict 构成标准的名词短语。",
            cn: "迅速的冲突解决协议有助于恢复部门内高效的工作关系。",
            jp: "迅速な対立解決（resolution）プロトコルは、部門内の生産的な関係を回復するのに役立ちました。"
        }
    },
    {
        id: 15,
        target: "contemplating",
        category: "困难",
        stem: "Deep ________ of market risks allowed the executive board to avoid a costly financial misstep.",
        options: ["contemplation", "contemplating", "outweighing", "encountering"],
        correct: "contemplation",
        explanations: {
            guide: "派生抽象名词主语考点。Deep ________ of... 结构中，形容词 Deep 后面接抽象名词形式 contemplation（沉思/深思熟虑）。",
            family: "contemplation (n.沉思/深思熟虑) | contemplating (v-ing/adj.) | outweighing (v-ing胜过) | encountering (v-ing遭遇)。",
            details: "Deep contemplation of market risks 意为对市场风险的深思熟虑。contemplating 是分词，在此处不如派生名词 contemplation 规范地道。",
            cn: "对市场风险的深思熟虑使执行董事会避免了一次代价高昂的财务失误。",
            jp: "市場リスクに対する深い熟考（contemplation）により、執行役員会は多大な費用がかかる財務上のミスを回避することができました。"
        }
    },
    {
        id: 16,
        target: "spoilage",
        category: "困难",
        stem: "Inadequate cold storage facilities resulted in significant inventory ________ during the summer heatwave.",
        options: ["spoilage", "spoiled", "resolution", "fiduciary"],
        correct: "spoilage",
        explanations: {
            guide: "仓储损失名词考点。resulted in significant inventory ________ 表达导致重大的库存“变质/损坏”，选 spoilage。",
            family: "spoilage (n.变质/损耗) | spoiled (adj.变质的) | resolution (n.解决) | fiduciary (adj.受托的)。",
            details: "inventory spoilage 意为库存损坏/变质。spoiled 是形容词，不能直接作动词短语 result in 后面名词短语的中心语。",
            cn: "在夏季热浪期间，不充分的冷藏设施导致了严重的库存变质损耗。",
            jp: "不十分な冷たい保管施設により、夏の猛暑中にかなりの在庫の傷み（spoilage）が発生しました。"
        }
    },
    {
        id: 17,
        target: "engrossing",
        category: "困难",
        stem: "The research report was so ________ written that committee members read the entire document without interruption.",
        options: ["engrossingly", "engrossing", "engrossed", "contemplative"],
        correct: "engrossingly",
        explanations: {
            guide: "派生副词修饰分词。was so ________ written 结构中，so 后面接副词修饰过去分词 written，表达撰写得“极其引人入胜地”，选 engrossingly。",
            family: "engrossingly (adv.引人入胜地) | engrossing (adj.引人入胜的) | engrossed (adj.全神贯注的) | contemplative (adj.沉思的)。",
            details: "so engrossingly written 意为撰写得如此引人入胜。engrossing 是形容词，不能直接修饰过去分词 written。",
            cn: "这份研究报告撰写得如此引人入胜，以至于委员会成员一口气读完了整个文档。",
            jp: "研究レポートは非常に魅力的に（engrossingly）書かれていたため、委員会のメンバーは中断することなく文書全体を読みました。"
        }
    },
    {
        id: 18,
        target: "outweighing",
        category: "困难",
        stem: "The CFO highlighted that the financial return of automating the logistics network was ________ its initial implementation cost.",
        options: ["outweighing", "encountering", "contemplating", "anticipating"],
        correct: "outweighing",
        explanations: {
            guide: "高阶商务财务评估动词。was ________ its initial cost 表达财务回报正“胜过/超过”其初始实施成本，选 outweighing。",
            family: "outweighing (v-ing胜过/超过) | encountering (v-ing遭遇) | contemplating (v-ing盘算) | anticipating (v-ing预料)。",
            details: "outweighing its cost 意为超越其成本（利大于弊/效益超过投资）。其他动词不能建立财务回报与成本之间的超越比较关系。",
            cn: "首席财务官强调，物流网络自动化的财务回报正胜过其初始实施成本。",
            jp: "CFOは、物流ネットワークの自動化による財務的リターンが初期導入コストを上回って（outweighing）いることを強調しました。"
        }
    }
];