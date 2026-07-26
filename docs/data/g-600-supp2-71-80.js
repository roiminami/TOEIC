// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data51-60.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "motorcycle",
        pos: "名",
        ipa: "/ˈmoʊtərsaɪkl/",
        cn: "摩托车，机车",
        jp: "オートバイ、バイク",
        family: "motorcycling / motorcyclist / motor",
        tips: "Part 1 交通工具与户外场景高频，常考 riding a motorcycle（骑摩托车）或 parked on the curb（停在路边）。",
        desc: "He is riding a motorcycle."
    },
    {
        word: "shelving unit",
        pos: "名",
        ipa: "/ˈʃelvɪŋ juːnɪt/",
        cn: "货架单元，组装货架",
        jp: "組み立て棚、シェルフユニット",
        family: "shelf / shelves / shelving",
        tips: "仓库与零售场景专属词，指由多层搁板构成的整体货架，常考 items stacked on a shelving unit（物品堆放在货架上）。",
        desc: "The shelving unit is full."
    },
    {
        word: "column",
        pos: "名",
        ipa: "/ˈkɑːləm/",
        cn: "柱子，圆柱；专栏；列",
        jp: "柱、円柱；コラム；（表の）列",
        family: "columnist / columnar",
        tips: "Part 1 常考建筑物结构支撑柱（support column）；Part 5/6 常考报刊专栏（newspaper column）或表格的列。",
        desc: "The building has large columns."
    },
    {
        word: "stove",
        pos: "名",
        ipa: "/stoʊv/",
        cn: "炉灶，火炉",
        jp: "調理用コンロ、ストーブ",
        family: "stovetop / cooktop",
        tips: "厨房与餐饮场景高频词，常考 cooking on a stove（在炉灶上做饭）或 standing near the stove（站在炉灶旁）。",
        desc: "She is cooking at the stove."
    },
    {
        word: "bookshelf",
        pos: "名",
        ipa: "/ˈbʊkʃelf/",
        cn: "书架，书柜",
        jp: "本棚",
        family: "bookshelves / shelf / shelving",
        tips: "办公室与图书馆场景高频词，注意复数形式为 bookshelves。常考 filled with books（塞满书）或 against the wall（靠墙放）。",
        desc: "The bookshelf is against the wall."
    },
    {
        word: "cupboard",
        pos: "名",
        ipa: "/ˈkʌbərd/",
        cn: "橱柜，碗柜",
        jp: "食器棚、戸棚",
        family: "cabinet / pantry",
        tips: "注意发音中 p 不发音 (/ˈkʌbərd/)。厨房收纳核心词，常考 opening a cupboard door（打开橱柜门）或 cups stored in a cupboard（碗碟储存在橱柜里）。",
        desc: "The cups are in the cupboard."
    },
    {
        word: "deck",
        pos: "名",
        ipa: "/dek/",
        cn: "甲板，露台，木平台",
        jp: "デッキ、甲板、テラス",
        family: "deckchair / decking",
        tips: "Part 1 船只场景常指 ship's deck（船甲板）；建筑场景指住宅或餐厅后院的木质露台（outdoor deck）。",
        desc: "They are sitting on the deck."
    },
    {
        word: "vase",
        pos: "名",
        ipa: "/veɪs/",
        cn: "花瓶",
        jp: "花瓶",
        family: "vessel / flowerpot",
        tips: "室内与前台桌摆设高频词，常考 a vase of fresh flowers（一瓶鲜花）或 placing flowers into a vase（把花插进花瓶）。",
        desc: "A vase is on the table."
    },
    {
        word: "hold onto",
        pos: "短動",
        ipa: "/hoʊld ˈɑːntuː/",
        cn: "紧紧抓住，握住；保留",
        jp: "〜にしっかりつかまる；〜を保持する",
        family: "hold / holding / held",
        tips: "Part 1 安全动作考点 hold onto the railing/handrail（抓紧栏杆/扶手）；Part 5 商务场景考点 hold onto stock/shares（坚持握有股票）。",
        desc: "Please hold onto the handrail."
    },
    {
        word: "bucket",
        pos: "名",
        ipa: "/ˈbʌkɪt/",
        cn: "水桶，提桶",
        jp: "バケツ",
        family: "bucketful / pail",
        tips: "清洁与工地施工高频物品，常考 bucket of water（一桶水）或 filling a bucket（打水/装满水桶）。",
        desc: "The bucket is filled with water."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "motorcycle",
        category: "简单",
        stem: "The delivery person parked his ________ outside the entrance before stepping into the building.",
        options: ["motorcycle", "motorcycling", "column", "vase"],
        correct: "motorcycle",
        explanations: {
            guide: "名词辨析。在物主代词 his 后面接可数名词单数，指停在建筑物入口外的“摩托车”，选 motorcycle。",
            family: "motorcycle (n.摩托车) | motorcycling (n.骑摩托车运动) | column (n.柱子) | vase (n.花瓶)。",
            details: "parked his motorcycle 构成完整的动宾结构。motorcycling 是抽象运动名词，不能作为可停放的具体交通工具。",
            cn: "外送员在走进大楼前把摩托车停在入口外。",
            jp: "配達員は大楼に入る前に、入口の外にオートバイ（motorcycle）を停めました。"
        }
    },
    {
        id: 2,
        target: "stove",
        category: "简单",
        stem: "The chef placed a large pot of water on the ________ to bring it to a boil.",
        options: ["stove", "stovetop", "bucket", "deck"],
        correct: "stove",
        explanations: {
            guide: "厨房场景名词。介词 on the 后面接表示烹饪设备的设施名词，指将水锅放在“炉灶”上，选 stove。",
            family: "stove (n.炉灶) | stovetop (n.炉灶顶面) | bucket (n.水桶) | deck (n.甲板/露台)。",
            details: "place a pot on the stove（把锅放在炉灶上）是餐饮烹饪场景的标准表述。bucket（水桶）、deck（露台）均无法用于煮水。",
            cn: "主厨把一大锅水放在炉灶上烧开。",
            jp: "シェフは水を沸腾させるために、大きな鍋をコンロ（stove）の上に置きました。"
        }
    },
    {
        id: 3,
        target: "bookshelf",
        category: "简单",
        stem: "The librarian helped the student find the history reference guide on the second ________.",
        options: ["bookshelf", "bookshelves", "cupboard", "vase"],
        correct: "bookshelf",
        explanations: {
            guide: "单数名词考点。在序数词 the second 后面接可数名词单数，表示第二个“书架”，选 bookshelf。",
            family: "bookshelf (n.单数书架) | bookshelves (n.复数书架) | cupboard (n.橱柜) | vase (n.花瓶)。",
            details: "the second bookshelf 指第二个书架。bookshelves 为复数形式，在序数词 second 修饰单数概念时不符合语法规则。",
            cn: "图书管理员帮助学生在第二个书架上找到了历史参考指南。",
            jp: "司書は学生が2番目の本棚（bookshelf）で歴史の参考书を見つけるのを手伝いました。"
        }
    },
    {
        id: 4,
        target: "hold onto",
        category: "简单",
        stem: "Passengers are reminded to ________ the railing when the ferry is moving across the bay.",
        options: ["hold onto", "holding onto", "column", "deck"],
        correct: "hold onto",
        explanations: {
            guide: "不定式动词短语。to 后面必须接动词原形，构成 be reminded to do 结构，表达“紧紧抓住”栏杆，选 hold onto。",
            family: "hold onto (v.抓住/握住) | holding onto (v-ing形式) | column (n.柱子) | deck (n.甲板)。",
            details: "to hold onto the railing 是听力与安全告示中的高频表述。holding onto 是分词，不能跟在不定式符号 to 后面。",
            cn: "渡轮穿过海湾行驶时，提醒乘客抓紧栏杆。",
            jp: "フェリーが湾を航行している間、乗客は手すりにしっかりつかまる（hold onto）よう注意を促されています。"
        }
    },
    {
        id: 5,
        target: "bucket",
        category: "简单",
        stem: "The janitor filled a large plastic ________ with soapy water to mop the floor.",
        options: ["bucket", "vase", "cupboard", "column"],
        correct: "bucket",
        explanations: {
            guide: "清洁工具名词。搭配 filled with soapy water（装满肥皂水）和拖地目的，容器应为 plastic ________（水桶），选 bucket。",
            family: "bucket (n.水桶) | vase (n.花瓶) | cupboard (n.橱柜) | column (n.柱子)。",
            details: "a plastic bucket（塑料水桶）是拖地清洁的标准工具。vase（花瓶）装的是插花水，不能用来拖地。",
            cn: "清洁工在一个大塑料桶里装满肥皂水来拖地。",
            jp: "用務員は床をモップ掛けするために、大きなプラスチック製バケツ（bucket）に石鹸水を満たしました。"
        }
    },
    {
        id: 6,
        target: "vase",
        category: "简单",
        stem: "A decorative glass ________ filled with fresh roses was placed on the reception desk.",
        options: ["vase", "bucket", "deck", "stove"],
        correct: "vase",
        explanations: {
            guide: "装饰物品名词。搭配 glass 和 filled with fresh roses（装满鲜玫瑰），符合插花盛放逻辑的名词是 vase（花瓶）。",
            family: "vase (n.花瓶) | bucket (n.水桶) | deck (n.甲板) | stove (n.炉灶)。",
            details: "A decorative glass vase 指装饰性的玻璃花瓶。bucket（水桶）通常不作为前台摆放鲜花的精致装饰器皿。",
            cn: "前台桌子上放着一个插满新鲜玫瑰花的装饰玻璃花瓶。",
            jp: "受付のデスクには、一輪の新鮮なバラが活けられた装飾的なガラスの花瓶（vase）が置かれていました。"
        }
    },
    {
        id: 7,
        target: "cupboard",
        category: "中等",
        stem: "All clean coffee mugs and tea glasses should be stored inside the wall-mounted ________.",
        options: ["cupboard", "bookshelf", "column", "shelving unit"],
        correct: "cupboard",
        explanations: {
            guide: "收纳家具名词。wall-mounted 结合存放物品 coffee mugs and tea glasses（咖啡杯与茶杯），最合理的家具是 cupboard（橱柜/碗柜）。",
            family: "cupboard (n.橱柜) | bookshelf (n.书架) | column (n.柱子) | shelving unit (n.货架单元)。",
            details: "wall-mounted cupboard 意为壁挂式橱柜/餐具柜。bookshelf（书架）主要用来放书，非存放餐具首选。",
            cn: "所有干净的咖啡杯和茶杯都应该存放在壁挂式橱柜里。",
            jp: "きれいなコーヒーカップやティーグラスはすべて、壁掛け式の戸棚（cupboard）の中に保管してください。"
        }
    },
    {
        id: 8,
        target: "deck",
        category: "中等",
        stem: "During the summer conference, guests gathered on the outdoor ________ to enjoy the evening view.",
        options: ["deck", "column", "bucket", "motorcycle"],
        correct: "deck",
        explanations: {
            guide: "建筑露天设施名词。outdoor 结合 gathered on（聚集在……上）和欣赏夜景的语境，选 deck（露台/木平台）。",
            family: "deck (n.露台/甲板) | column (n.柱子) | bucket (n.水桶) | motorcycle (n.摩托车)。",
            details: "outdoor deck 意为户外露台/木平台。column（柱子）、bucket（水桶）等均无法承载宾客聚集赏景。",
            cn: "在夏季会议期间，宾客们聚集在户外露台上欣赏夜景。",
            jp: "夏の会議中、ゲストは夜景を楽しむために屋外のデッキ（deck）に集まりました。"
        }
    },
    {
        id: 9,
        target: "column",
        category: "中等",
        stem: "Architects installed a solid marble ________ in the center of the lobby to support the weight of the ceiling.",
        options: ["column", "columnist", "vase", "deck"],
        correct: "column",
        explanations: {
            guide: "建筑结构名词。搭配 solid marble（坚固的大理石）与功能 support the weight of the ceiling（支撑天花板重量），选 column（柱子）。",
            family: "column (n.柱子/专栏) | columnist (n.专栏作家) | vase (n.花瓶) | deck (n.甲板)。",
            details: "solid marble column 指大理石立柱。columnist 是指撰写专栏的“作家”，不属于建筑结构。",
            cn: "建筑师在大堂中央安装了一根坚固的大理石柱子，以支撑天花板的重量。",
            jp: "建築家は天井の重量を支えるために、ロビーの中央に頑丈な大理石の柱（column）を設置しました。"
        }
    },
    {
        id: 10,
        target: "shelving unit",
        category: "中等",
        stem: "The warehouse supervisor ordered a heavy-duty steel ________ to organize the extra inventory efficiently.",
        options: ["shelving unit", "shelves", "bookshelf", "cupboard"],
        correct: "shelving unit",
        explanations: {
            guide: "仓库与工业设施组合名词。a heavy-duty steel 后面接单数名词，指仓库用于整理存货的“钢制货架单元”，选 shelving unit。",
            family: "shelving unit (n.货架单元) | shelves (n.搁板复数) | bookshelf (n.书架) | cupboard (n.橱柜)。",
            details: "heavy-duty steel shelving unit 指工业级重型钢制货架。shelves 是复数，不能用在不定冠词 a 后面；bookshelf 偏向办公/家居书本收纳。",
            cn: "仓库主管订购了一套重型钢制货架单元，以便有效地整理额外库存。",
            jp: "倉庫管理者は、余分な在庫を効率的に整理するために、頑丈なスチール製シェルフユニット（shelving unit）を発注しました。"
        }
    },
    {
        id: 11,
        target: "hold onto",
        category: "中等",
        stem: "While walking up the steep outdoor steps, elderly visitors are advised to ________ the handrail for safety.",
        options: ["hold onto", "held onto", "column", "motorcycle"],
        correct: "hold onto",
        explanations: {
            guide: "被动语态后接不定式动词原形。are advised to 后面接动词原形，表达出于安全考量“抓住/握住”扶手，选 hold onto。",
            family: "hold onto (v.抓住/握住) | held onto (v-ed过去式) | column (n.柱子) | motorcycle (n.摩托车)。",
            details: "advised to hold onto the handrail 是公共安全提示固定句型。held onto 为过去式，不能跟在 to 后面作不定式。",
            cn: "在走上陡峭的户外台阶时，建议老年游客抓紧扶手以确保安全。",
            jp: "急な屋外の階段を上る際、高齢の観光客は安全のために手すりにつかまる（hold onto）よう勧められています。"
        }
    },
    {
        id: 12,
        target: "motorcycle",
        category: "中等",
        stem: "Before taking a long road trip, the rider took his ________ to the repair shop for a comprehensive safety check.",
        options: ["motorcycle", "motorcyclist", "deck", "stove"],
        correct: "motorcycle",
        explanations: {
            guide: "动词宾语与语境逻辑。the rider（骑手）送去修理厂进行安全检查的对象是他的“摩托车”，选 motorcycle。",
            family: "motorcycle (n.摩托车) | motorcyclist (n.摩托车骑手) | deck (n.甲板) | stove (n.炉灶)。",
            details: "took his motorcycle to the repair shop 逻辑通顺。motorcyclist 指骑手本人，不能作为被送到修理厂维护的车辆工具。",
            cn: "在开始长途骑行之前，骑手把他的摩托车送到修理厂进行了全面的安全检查。",
            jp: "長距离のツーリングに出かける前に、ライダーは総合的な安全点検のためにオートバイ（motorcycle）を修理工場に持っていきました。"
        }
    },
    {
        id: 13,
        target: "column",
        category: "困难",
        stem: "A senior business analyst writes a weekly newspaper ________ analyzing recent international financial trends.",
        options: ["column", "columnist", "shelving unit", "bookshelf"],
        correct: "column",
        explanations: {
            guide: "一词多义与新闻出版考点。a weekly newspaper ________ 意为报纸的“每周专栏”，在此处填入名词 column。",
            family: "column (n.专栏/柱/列) | columnist (n.专栏作家) | shelving unit (n.货架) | bookshelf (n.书架)。",
            details: "write a newspaper column 指撰写报纸专栏。columnist 指“专栏作家”本人，若填入则变成“撰写一位专栏作家”，语义不通。",
            cn: "一位资深商业分析师撰写每周报纸专栏，分析最新的国际金融趋势。",
            jp: "上級ビジネスアナリストは、最近の国際金融動向を分析する週刊新聞コラム（column）を執筆しています。"
        }
    },
    {
        id: 14,
        target: "bookshelf",
        category: "困难",
        stem: "The interior designer selected custom mahogany ________ to maximize vertical storage in the home office.",
        options: ["bookshelves", "bookshelf", "cupboard", "vase"],
        correct: "bookshelves",
        explanations: {
            guide: "名词复数泛指与空间利用。根据 maximize vertical storage（最大化垂直收纳）和没有不定冠词 a，此处应使用复数形式 bookshelves。",
            family: "bookshelves (n.复数书架) | bookshelf (n.单数书架) | cupboard (n.橱柜) | vase (n.花瓶)。",
            details: "selected custom mahogany bookshelves 指选择了定制的红木书架（复数）。单数 bookshelf 前缺少冠词 a/the，不符合此处语法规范。",
            cn: "室内设计师选择了定制的红木书架，以最大化家庭办公室的垂直收纳空间。",
            jp: "インテリアデザイナーは、ホームオフィスの垂直方向の収納を最大化するために、カスタムのマホガニー製本棚（bookshelves）を選びました。"
        }
    },
    {
        id: 15,
        target: "deck",
        category: "困难",
        stem: "Before passenger boarding began, the ship crew washed down the wooden ________ to prepare for departure.",
        options: ["deck", "decking", "column", "bucket"],
        correct: "deck",
        explanations: {
            guide: "航海与船舶专业名词。ship crew washed down the wooden ________ 指船员冲洗木质“甲板”，选 deck。",
            family: "deck (n.甲板/露台) | decking (n.铺设甲板的木材/材质) | column (n.柱子) | bucket (n.水桶)。",
            details: "the wooden deck 指船上的木质甲板。decking 是指建材（甲板用木材/板材集合名词），非指具体的船舶甲板整体结构。",
            cn: "在乘客开始登船之前，船员冲洗了木质甲板，为起航做准备。",
            jp: "乗客の搭乗が始まる前に、乗組員は出港準備のために木製デッキ（deck）を洗い流しました。"
        }
    },
    {
        id: 16,
        target: "hold onto",
        category: "困难",
        stem: "The financial advisor urged corporate investors to ________ their shares despite temporary stock market fluctuations.",
        options: ["hold onto", "held onto", "holding onto", "holds onto"],
        correct: "hold onto",
        explanations: {
            guide: "商务一词多义与不定式。urged sb to 后面接动词原形，hold onto 在金融场景中表示“长期持有/保留”股票资产。",
            family: "hold onto (v.保留/持有/抓住) | held onto (v-ed) | holding onto (v-ing) | holds onto (v-s)。",
            details: "urged investors to hold onto their shares 意为敦促投资者继续持有股票。held onto 为过去式，不能跟在 to 后面。",
            cn: "财务顾问敦促企业投资者尽管股市出现暂时波动，仍要继续持有股票。",
            jp: "ファイナンシャル・アドバイザーは法人投資家に対し、一時的な株式市場の変動にもかかわらず株式を保持する（hold onto）よう強く勧めました。"
        }
    },
    {
        id: 17,
        target: "stove",
        category: "困难",
        stem: "Commercial kitchens are required to install specialized ventilation hoods above every gas ________ to meet safety standards.",
        options: ["stovetop", "stove", "bucket", "cupboard"],
        correct: "stovetop",
        explanations: {
            guide: "专业派生复合名词考点。gas ________ 与通风罩（ventilation hoods）搭配，指具体的“气体炉灶顶面/排气灶面”，选 stovetop。",
            family: "stovetop (n.炉灶面) | stove (n.炉灶整体) | bucket (n.水桶) | cupboard (n.橱柜)。",
            details: "gas stovetop 专指燃气灶的灶面部分（即上方安装排烟罩的具体部位）。stove 指整个炉灶设备，在工业规范和安检语境中用 stovetop 更符合特定构想。",
            cn: "商业厨房被要求在每个燃气灶面上方安装专用排风罩，以符合安全标准。",
            jp: "業務用厨房では、安全基準を満たすために、すべてのガスコンロ（stovetop）の上に専門の換気フードを設置することが義務付けられています。"
        }
    },
    {
        id: 18,
        target: "shelving unit",
        category: "困难",
        stem: "To optimize space in the main distribution depot, workers assembled several modular ________ systems.",
        options: ["shelving", "shelving unit", "bookshelf", "cupboard"],
        correct: "shelving",
        explanations: {
            guide: "高阶集合名词作定语考点。shelving systems 属于仓储物流专属词汇，意为“货架系统/搁板存储系统”，在此选不可数集合名词 shelving。",
            family: "shelving (n.搁板系统/架子集合概念) | shelving unit (n.单组货架) | bookshelf (n.书架) | cupboard (n.橱柜)。",
            details: "shelving systems 指整体的模块化货架系统。shelving unit 本身已经是包含 unit 的名词，若写成 shelving unit systems 则造成名词冗余（unit systems）。",
            cn: "为了优化主配送中心的空间，工人组装了几套模块化货架系统。",
            jp: "メイン配送センターのスペースを最適化するために、作業員はいくつかのモジュール式棚（shelving）システムを組み立てました。"
        }
    }
];