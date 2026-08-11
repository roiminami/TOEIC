// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data311-320.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "packing slip",
        pos: "名",
        ipa: "/ˈpækɪŋ slɪp/",
        cn: "装箱单，发货单",
        jp: "梱包明細書、納品書",
        family: "pack / packing / slip",
        tips: "物流与仓储高频：check the packing slip（核对装箱单）。",
        desc: "Check the packing slip."
    },
    {
        word: "subject",
        pos: "名/形/動",
        ipa: "/ˈsʌbdʒɪkt/",
        cn: "主题；受……影响的；服从",
        jp: "件名、主题；〜を受けやすい",
        family: "subjected / subjection / subjective",
        tips: "邮件高频 subject line（邮件主题）；语法考点 be subject to change（易受……影响/可能变更）。",
        desc: "The subject line is clear."
    },
    {
        word: "avid",
        pos: "形",
        ipa: "/ˈævɪd/",
        cn: "热心的，酷爱的",
        jp: "熱心な、貪欲な",
        family: "avidly / avidity",
        tips: "人物兴趣描写：avid reader/collector（热心的读者/收藏家）。",
        desc: "He is an avid reader."
    },
    {
        word: "arborist",
        pos: "名",
        ipa: "/ˈɑːrbərɪst/",
        cn: "树艺师，树木养护专家",
        jp: "樹木医、樹木家",
        family: "arbor / arboriculture / arboricultural",
        tips: "园艺与市政维护：hired a certified arborist（聘请了认证树艺师）。",
        desc: "The arborist pruned the tree."
    },
    {
        word: "rafting",
        pos: "名",
        ipa: "/ˈræftɪŋ/",
        cn: "漂流活动，橡皮艇漂流",
        jp: "ラフティング、川下り",
        family: "raft / rafter",
        tips: "户外旅游高频：white-water rafting（激流漂流）。",
        desc: "They went white-water rafting."
    },
    {
        word: "ample",
        pos: "形",
        ipa: "/ˈæmpl/",
        cn: "充裕的，充足的",
        jp: "十分な、豊富な",
        family: "amply / amplify",
        tips: "高频搭配：ample time/space/parking（充足的时间/空间/停车位）。",
        desc: "We have ample time."
    },
    {
        word: "dismal",
        pos: "形",
        ipa: "/ˈdɪzməl/",
        cn: "惨淡的，阴沉的",
        jp: "惨憺たる、暗い",
        family: "dismally",
        tips: "业绩与数据分析高频：dismal sales figures（惨淡的销售数据）。",
        desc: "Sales figures were dismal."
    },
    {
        word: "rumor",
        pos: "名/動",
        ipa: "/ˈruːmər/",
        cn: "谣言，传闻；散布谣言",
        jp: "噂、デマ",
        family: "rumored / rumors",
        tips: "收购与新闻高频：merger rumor（合并传闻），it is rumored that...（据传……）。",
        desc: "The rumor spread quickly."
    },
    {
        word: "commodities",
        pos: "名",
        ipa: "/kəˈmɑːdətiz/",
        cn: "商品，大宗商品（复数）",
        jp: "商品、日用品、大口商品",
        family: "commodity / commodify",
        tips: "贸易与投资高频：agricultural commodities（农产品大宗商品），commodity market（大宗商品市场）。",
        desc: "Prices of commodities rose."
    },
    {
        word: "pallets",
        pos: "名",
        ipa: "/ˈpælɪts/",
        cn: "托盘，货板（复数）",
        jp: "パレット、荷役台",
        family: "pallet / palletize / palletized",
        tips: "仓储与物流高频：wooden pallets（木托盘），stacked on pallets（堆放在托盘上）。",
        desc: "Boxes are on wooden pallets."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "packing slip",
        category: "简单",
        stem: "The warehouse clerk verified the contents of the shipment against the attached ________.",
        options: ["packing slip", "arborist", "rumor", "pallets"],
        correct: "packing slip",
        explanations: {
            guide: "物流查验明细。对照附带的“装箱单/发货单”核对货物内容，选 packing slip。",
            family: "packing slip (n.装箱单) | arborist (n.树艺师) | rumor (n.谣言) | pallets (n.托盘)。",
            details: "verify against the packing slip 意为对照装箱单核对。arborist（树艺师）、rumor（谣言）均非物流出货单据。",
            cn: "仓库员对照附带的装箱单核对了发货货物的数量与内容。",
            jp: "倉庫係は添付された梱包明細書（packing slip）と照合して出荷内容を確認しました。"
        }
    },
    {
        id: 2,
        target: "avid",
        category: "简单",
        stem: "Ms. Gable, an ________ reader of financial news, subscribes to several daily business journals.",
        options: ["avid", "dismal", "ample", "subject"],
        correct: "avid",
        explanations: {
            guide: "修饰人的兴趣态度。an ________ reader 属于高频搭配，表达“热心的/酷爱的”读者，选 avid。",
            family: "avid (adj.热心的/酷爱的) | dismal (adj.惨淡的) | ample (adj.充裕的) | subject (n./adj.主题/易受影响的)。",
            details: "an avid reader 意为热心的读者。dismal（惨淡的）、ample（充裕的）不能用来修饰读者对阅读的热情。",
            cn: "盖布尔女士是一位热心的财经新闻读者，她订阅了数份每日商业期刊。",
            jp: "金融ニュースの熱心な（avid）読者であるゲーブル氏は、いくつかの日刊ビジネス誌を購読しています。"
        }
    },
    {
        id: 3,
        target: "rumor",
        category: "简单",
        stem: "Management issued an official statement to deny the false ________ regarding a corporate merger.",
        options: ["rumor", "commodities", "rafting", "pallets"],
        correct: "rumor",
        explanations: {
            guide: "企业辟谣声明考点。deny the false ________ 表达澄清关于公司合并的虚假“谣言/传闻”，选 rumor。",
            family: "rumor (n.谣言/传闻) | commodities (n.大宗商品) | rafting (n.漂流) | pallets (n.托盘)。",
            details: "false rumor 意为虚假传闻/谣言。commodities（商品）、pallets（托盘）均非辟谣否认的内容。",
            cn: "管理层发表了一份正式声明，澄清了有关公司合并的不实谣言。",
            jp: "経営陣は企業合併に関する事実无根の噂（rumor）を否定するため、公式声明を発表しました。"
        }
    },
    {
        id: 4,
        target: "ample",
        category: "简单",
        stem: "The new corporate headquarters features ________ parking space for both employees and guests.",
        options: ["ample", "dismal", "avid", "subject"],
        correct: "ample",
        explanations: {
            guide: "设施形容词修饰。________ parking space 属于托业经典搭配，表达“充裕的”停车空间，选 ample。",
            family: "ample (adj.充裕的) | dismal (adj.惨淡的) | avid (adj.热心的) | subject (adj.易受…影响的)。",
            details: "ample parking space 意为充裕的停车位。dismal（阴沉惨淡的）不能修饰设施空间充裕。",
            cn: "新的公司总部拥有为员工和访客准备的充裕停车位。",
            jp: "新しい本社ビルには、従業員と来客の両方向けの十分な（ample）駐車スペースが備わっています。"
        }
    },
    {
        id: 5,
        target: "arborist",
        category: "简单",
        stem: "A certified ________ was hired to inspect the ancient oak trees in the city park.",
        options: ["arborist", "subject", "commodities", "packing slip"],
        correct: "arborist",
        explanations: {
            guide: "职业技能名词。检查城市公园古老树木的专业人员，选 arborist（树艺师/树木养护专家）。",
            family: "arborist (n.树艺师) | subject (n.主题) | commodities (n.商品) | packing slip (n.装箱单)。",
            details: "certified arborist 意为持证树艺师。其余选项均非修剪或养护树木的专业人员。",
            cn: "聘请了一名有资质的树艺师来检查市立公园里的古老橡树。",
            jp: "市立公園の樹齢を重ねたオークの木を点検するため、有資格の樹木医（arborist）が雇われました。"
        }
    },
    {
        id: 6,
        target: "rafting",
        category: "简单",
        stem: "Tourists participated in an exciting white-water ________ excursion down the mountain river.",
        options: ["rafting", "pallets", "rumor", "dismal"],
        correct: "rafting",
        explanations: {
            guide: "水上户外运动。white-water ________ 属于旅游高频专有名词，表达“激流漂流”，选 rafting。",
            family: "rafting (n.漂流) | pallets (n.托盘) | rumor (n.谣言) | dismal (adj.惨淡的)。",
            details: "white-water rafting 指激流漂流运动。pallets（托盘）、rumor（传闻）均非户外运动。",
            cn: "游客们参加了沿着山间河流进行的刺激的激流漂流远足活动。",
            jp: "観光客は山間部の川を下るエキサイティングなラフティング（rafting）ツアーに参加しました。"
        }
    },
    {
        id: 7,
        target: "dismal",
        category: "中等",
        stem: "Following the ________ Q3 sales report, the board requested an urgent cost-reduction plan.",
        options: ["dismal", "ample", "avid", "subjected"],
        correct: "dismal",
        explanations: {
            guide: "业绩评价形容词。修饰销售报告（sales report），结合要求紧急削减成本的后果，选 dismal（惨淡的/糟糕的）。",
            family: "dismal (adj.惨淡的/糟糕的) | ample (adj.充裕的) | avid (adj.热心的) | subjected (adj.受服从的)。",
            details: "dismal sales report 意为惨淡的销售报告。正因为业绩惨淡，董事会才要求紧急削减成本。",
            cn: "在惨淡的第三季度销售报告公布后，董事会要求提出一项紧急的成本削减计划。",
            jp: "惨憺たる（dismal）第3四半期の売上報告を受けて、取締役会は緊急のコスト削減計画を要求しました。"
        }
    },
    {
        id: 8,
        target: "commodities",
        category: "中等",
        stem: "The international trade firm specializes in importing agricultural ________ such as wheat and soybeans.",
        options: ["commodities", "pallets", "packing slips", "rumors"],
        correct: "commodities",
        explanations: {
            guide: "大宗商品复数名词。agricultural ________ 结合举例小麦和大豆（wheat and soybeans），选 commodities（大宗商品）。",
            family: "commodities (n.复数大宗商品) | pallets (n.托盘) | packing slips (n.装箱单) | rumors (n.谣言)。",
            details: "agricultural commodities 专指农产品大宗商品。pallets（托盘）是承载运输工具，非商品本身。",
            cn: "这家国际贸易公司专门进口小麦和大豆等农产品大宗商品。",
            jp: "その国際貿易会社は小麦や大豆などの農産物（commodities）の輸入を専門としています。"
        }
    },
    {
        id: 9,
        target: "subject",
        category: "中等",
        stem: "Please note that flight departure schedules are ________ to change without prior notice due to weather.",
        options: ["subject", "subjection", "avid", "dismal"],
        correct: "subject",
        explanations: {
            guide: "高频语法表语结构。be ________ to change 属于托业最高频固定表述之一，意为“容易改变/可能变更”，选 subject。",
            family: "subject (adj.易受…影响的/可能…的) | subjection (n.服从/征服) | avid (adj.热心的) | dismal (adj.惨淡的)。",
            details: "be subject to change 意为可能随时变更。subjection 是名词，不能在系动词 are 后面充当表语形容词。",
            cn: "请注意，由于天气原因，航班起飞时间如有变更，恕不另行通知。",
            jp: "天候により、飛行機の出発スケジュールは予告なく変更される場合があります（be subject to change）。"
        }
    },
    {
        id: 10,
        target: "pallets",
        category: "中等",
        stem: "Forklift drivers carefully loaded several heavy wooden ________ into the cargo container.",
        options: ["pallets", "packing slips", "arborists", "rumors"],
        correct: "pallets",
        explanations: {
            guide: "仓储物流设施名词。forklift drivers（叉车司机）装载的重型木质承重平台选 pallets（托盘/货板）。",
            family: "pallets (n.复数托盘) | packing slips (n.装箱单) | arborists (n.树艺师) | rumors (n.谣言)。",
            details: "heavy wooden pallets 意为重型木托盘。packing slips（装箱单）是纸质凭证，无法用叉车作为重物装载。",
            cn: "叉车司机小心翼翼地将几个重型木托盘装入集装箱中。",
            jp: "フォークリフトの作業員は、いくつかの重い木製パレット（pallets）を貨物コンテナに慎重に積み込みました。"
        }
    },
    {
        id: 11,
        target: "rumor",
        category: "中等",
        stem: "It is ________ that the technology startup will launch its initial public offering next spring.",
        options: ["rumored", "rumor", "subjected", "dismally"],
        correct: "rumored",
        explanations: {
            guide: "形式主语被动语态。It is ________ that... 属于固定句型，表达“据传言/据传”，选用过去分词/形容词 rumored。",
            family: "rumored (adj./v-ed据传的) | rumor (n.谣言) | subjected (v-ed受制于) | dismally (adv.惨淡地)。",
            details: "It is rumored that... 意为据传言……。rumor 是动词原形/名词，不能与 is 构成被动表语结构。",
            cn: "据传，这家科技初创公司将于明年春天首次公开募股（IPO）。",
            jp: "その技術系スタートアップ企業が来春に新規公開株式（IPO）を実施すると噂されています（It is rumored）。"
        }
    },
    {
        id: 12,
        target: "ample",
        category: "中等",
        stem: "The conference schedule provides ________ time for networking between afternoon presentations.",
        options: ["ample", "amply", "dismal", "avid"],
        correct: "ample",
        explanations: {
            guide: "形容词修饰不可数名词。修饰 time，表达留出“充裕的”交流时间，选形容词 ample。",
            family: "ample (adj.充裕的) | amply (adv.充裕地) | dismal (adj.惨淡的) | avid (adj.热心的)。",
            details: "ample time 意为充裕的时间。amply 是副词，不能直接修饰名词 time。",
            cn: "会议日程为下午各演示会之间的交流留出了充裕的时间。",
            jp: "会議のスケジュールは、午後のプレゼンテーションの合間に交流のための十分な（ample）時間を確保しています。"
        }
    },
    {
        id: 13,
        target: "subject",
        category: "困难",
        stem: "Include a clear description in the email ________ line so that recipients can prioritize your request.",
        options: ["subject", "packing slip", "commodity", "rumor"],
        correct: "subject",
        explanations: {
            guide: "商务邮件专属词组。email ________ line 属于办公固定搭配，意为“邮件主题行”，选 subject。",
            family: "subject (n.主题/题目) | packing slip (n.装箱单) | commodity (n.商品) | rumor (n.传闻)。",
            details: "email subject line 意为邮件主题行。其余选项均非邮件开头的标题分类栏名称。",
            cn: "请在邮件主题行中附上清晰的描述，以便收件人能够优先处理您的请求。",
            jp: "受信者がリクエストの優先順位をつけられるよう、メールの件名（subject）行に明確な説明を含めてください。"
        }
    },
    {
        id: 14,
        target: "commodities",
        category: "困难",
        stem: "Investors shifted their portfolios toward raw ________ to hedge against rising global inflation.",
        options: ["commodities", "pallets", "packing slips", "arborists"],
        correct: "commodities",
        explanations: {
            guide: "金融投资高阶搭配。raw ________ 属于金融对冲交易专属词组，意为“原材料/初级大宗商品”，选 commodities。",
            family: "commodities (n.大宗商品复数) | pallets (n.托盘) | packing slips (n.装箱单) | arborists (n.树艺师)。",
            details: "raw commodities 意为原材料大宗商品。pallets（托盘）非金融对冲资产。",
            cn: "投资者将其投资组合转向大宗原材料商品，以规避全球通胀上升的风险。",
            jp: "投資家は、世界的なインフレの上昇を回避するため、ポートフォリオを未加工のコモディティ（commodities）へシフトしました。"
        }
    },
    {
        id: 15,
        target: "dismal",
        category: "困难",
        stem: "The company's stock price performed ________ during the last fiscal quarter due to rising fuel costs.",
        options: ["dismally", "dismal", "amply", "avidly"],
        correct: "dismally",
        explanations: {
            guide: "副词修饰不及物动词。performed ________ 结构中，需要填写副词修饰 performed，表达股价表现“惨淡地/糟糕地”，选 dismally。",
            family: "dismally (adv.惨淡地) | dismal (adj.惨淡的) | amply (adv.充裕地) | avidly (adv.热心地)。",
            details: "performed dismally 意为表现惨淡。dismal 是形容词，不能直接修饰不及物动词 performed。",
            cn: "由于燃料成本上升，该公司股价在上个财季表现惨淡。",
            jp: "燃料コストの上昇により、同社の株価は前会計四半期において惨憺たる（dismally）パフォーマンスを示しました。"
        }
    },
    {
        id: 16,
        target: "pallets",
        category: "困难",
        stem: "To streamline logistics in the distribution depot, all incoming shipments must be properly ________ before storage.",
        options: ["palletized", "pallets", "subjected", "rumored"],
        correct: "palletized",
        explanations: {
            guide: "仓储物流高阶被动分词。must be properly ________ 表达货物入库前必须被“打托盘/码垛”，选过去分词 palletized。",
            family: "palletized (v-ed/adj.打托盘的) | pallets (n.复数托盘) | subjected (v-ed使服从) | rumored (v-ed据传的)。",
            details: "must be properly palletized 意为必须妥善打托盘码放。pallets 是名词复数，不能与 be 构成被动语态。",
            cn: "为简化配送中心的物流，所有进货在入库前都必须妥善打托盘码放。",
            jp: "配送センターでの物流を効率化するため、すべての入荷品は保管前に適切にパレット積み（palletized）されなければなりません。"
        }
    },
    {
        id: 17,
        target: "packing slip",
        category: "困难",
        stem: "The customer service agent requested a copy of the original ________ to process the missing item claim.",
        options: ["packing slip", "commodities", "arborist", "subject"],
        correct: "packing slip",
        explanations: {
            guide: "物流索赔核验凭证。处理少货退赔申诉所需的原本出货依据选 packing slip（装箱单）。",
            family: "packing slip (n.装箱单) | commodities (n.商品) | arborist (n.树艺师) | subject (n.主题)。",
            details: "copy of the packing slip 意为装箱单副本。核对具体箱内货物品名与数量的索赔凭证为 packing slip。",
            cn: "客户服务代理索要了原始装箱单的副本，以处理物品遗失赔偿申请。",
            jp: "カスタマーサービス担当者は、欠品補償請求を処理するために元の梱包明細書（packing slip）の写しを要求しました。"
        }
    },
    {
        id: 18,
        target: "arborist",
        category: "困难",
        stem: "Municipal urban planning regulations require a certified ________ report before removing large mature trees.",
        options: ["arboricultural", "arborist", "avid", "dismal"],
        correct: "arboricultural",
        explanations: {
            guide: "派生专业形容词考点。修饰 report，表达“树木栽培/树艺的”评估报告，选衍生形容词 arboricultural。",
            family: "arboricultural (adj.树木栽培的/树艺的) | arborist (n.树艺师) | avid (adj.热心的) | dismal (adj.惨淡的)。",
            details: "arboricultural report 指树木养护评估报告。arborist 是指树艺师个人，修饰 report 时使用专有形容词 arboricultural 更规范地道。",
            cn: "市政城市规划法规要求在移走大型成树之前，必须出具一份经认证的树艺评估报告。",
            jp: "市の都市計画規制では、大型の成木を撤去する前に認定樹木管理（arboricultural）報告書を義務付けています。"
        }
    }
];