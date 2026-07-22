// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data41-50.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "lightbulb",
        pos: "名",
        ipa: "/ˈlaɪtbʌlb/",
        cn: "电灯泡",
        jp: "電球",
        family: "bulb / lighting",
        tips: "听力 Part 1 常见设施词。常考动作与状态：replace a lightbulb（更换电灯泡）或 a lightbulb is turned on（灯泡亮着）。",
        desc: "He is replacing a lightbulb."
    },
    {
        word: "in the distance",
        pos: "介短",
        ipa: "/ɪn ðə ˈdɪstəns/",
        cn: "在远处，远方",
        jp: "遠くに、遠方に",
        family: "distant / distance",
        tips: "听力与阅读场景描述词。常用于描述遥远处的建筑物、车辆或自然景观（e.g., mountains are visible in the distance）。",
        desc: "Buildings are visible in the distance."
    },
    {
        word: "platform",
        pos: "名",
        ipa: "/ˈplætfɔːrm/",
        cn: "讲台，平台；月台",
        jp: "プラットフォーム、月台、壇上",
        family: "cross-platform / platformer",
        tips: "双重高频词：1. 交通/听力场景指火车站“月台”（train platform）；2. 演讲/活动场景指“讲台/平台”；3. IT/商业场景指“数字平台”。",
        desc: "Passengers are waiting on the platform."
    },
    {
        word: "display",
        pos: "動/名",
        ipa: "/dɪˈspleɪ/",
        cn: "陈列，展示；展示品，显示屏",
        jp: "展示する、表示する；展示、ディスプレイ",
        family: "displayed / display unit",
        tips: "托业核心高频词！听力 Part 1 必考 be on display（正在展出/陈列中）；商务阅读常考 display case（陈列柜）与 electronic display（电子显示屏）。",
        desc: "New products are on display."
    },
    {
        word: "item",
        pos: "名",
        ipa: "/ˈaɪtəm/",
        cn: "物品，商品；项目，条款",
        jp: "品物、アイテム、項目",
        family: "itemize / itemized",
        tips: "极其高频的基础名词。指购物中的“商品/单品”（merchandise item），清单中的“项目”（line item），或会议议程中的“议题”。",
        desc: "Each item has a price tag."
    },
    {
        word: "vehicle",
        pos: "名",
        ipa: "/ˈviːəkl/",
        cn: "车辆，交通工具；手段，媒介",
        jp: "車両、乗り物、手段",
        family: "vehicular / motor vehicle",
        tips: "听力与阅读中的最高频概括词！听力中汽车、卡车、公交车常被统一统称为 vehicle（e.g., a vehicle is parked）。",
        desc: "The vehicle is parked outside."
    },
    {
        word: "load",
        pos: "動/名",
        ipa: "/loʊd/",
        cn: "装载，装货；负荷，货物",
        jp: "積み込む、載せる；荷物、負担",
        family: "loading / unload / overload",
        tips: "物流与 Part 1 核心词。常见搭配：load boxes into a truck（把箱子装上卡车）；反义词 unload（卸货）；名词 loading dock（装卸货台）。",
        desc: "Workers are loading the truck."
    },
    {
        word: "brick",
        pos: "名/動",
        ipa: "/brɪk/",
        cn: "砖，砖块；用砖砌",
        jp: "レンガ；レンガを敷く",
        family: "brickwork / bricklayer",
        tips: "建筑与 Part 1 描绘词。常考 brick wall（砖墙）、brick walkway（砖铺步道）或 a stack of bricks（一堆砖头）。",
        desc: "The house is built of red brick."
    },
    {
        word: "pour",
        pos: "動",
        ipa: "/pɔːr/",
        cn: "倾倒，倒（液体）；倾盆而下",
        jp: "注ぐ、かける、土砂降りに降る",
        family: "pouring / downpour",
        tips: "听力 Part 1 高频动作词。常考 pour coffee/water into a cup（将咖啡/水倒进杯子里）或 pour concrete（浇筑混凝土）。",
        desc: "She is pouring water into a glass."
    },
    {
        word: "polish",
        pos: "動/名",
        ipa: "/ˈpɑːlɪʃ/",
        cn: "擦亮，抛光；鞋油，擦光剂",
        jp: "磨く、ツヤを出す；ツヤ出し剤",
        family: "polished / polisher / polishing",
        tips: "Part 1 动作与状态词。常见动作 polish the floor/shoes（擦地板/擦鞋）；状态描述 be freshly polished（刚刚擦亮/抛光过的）。",
        desc: "He is polishing the wooden table."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "lightbulb",
        category: "简单",
        stem: "The maintenance worker stepped up the ladder to replace the burned-out ________ in the office ceiling.",
        options: ["lightbulb", "platform", "vehicle", "brick"],
        correct: "lightbulb",
        explanations: {
            guide: "名词词义辨析。由 stepped up the ladder（登上梯子）和 in the office ceiling（在办公室天花板上）可知，更换的是烧坏的“电灯泡”，选 lightbulb。",
            family: "lightbulb (n.电灯泡) | platform (n.月台/平台) | vehicle (n.车辆) | brick (n.砖块)。",
            details: "replace the burned-out lightbulb 属于职场设施维护的典型固定搭配。其他选项均不符合梯子登高更换天花板物品的逻辑。",
            cn: "维修工人登上了梯子，以更换办公室天花板上烧坏的电灯泡。",
            jp: "保守作業員は、オフィスの天井にある切れた電球（lightbulb）を交換するために脚立に登りました。"
        }
    },
    {
        id: 2,
        target: "platform",
        category: "简单",
        stem: "Commuters were standing patiently on the train ________ while waiting for the express train to arrive.",
        options: ["platform", "item", "pour", "brick"],
        correct: "platform",
        explanations: {
            guide: "交通场景名词搭配。Commuters（通勤者）在等候列车（waiting for the express train）时，站在火车站的“月台”上，选 platform。",
            family: "platform (n.月台/平台) | item (n.物品) | pour (v.倾倒) | brick (n.砖块)。",
            details: "train platform（火车站月台）为交通场景的核心固定搭配。item、pour、brick 在此语境下均不成立。",
            cn: "通勤族在等待特快列车到来时，耐心地站在火车月台上。",
            jp: "通勤客は急行電車が到着するのを待ちながら、駅のホーム（platform）で静かに立っていました。"
        }
    },
    {
        id: 3,
        target: "item",
        category: "简单",
        stem: "Customers should check each ________ listed on their receipt before leaving the supermarket cashier.",
        options: ["item", "load", "polish", "lightbulb"],
        correct: "item",
        explanations: {
            guide: "限定词修饰与商务阅读考点。check each ________ listed on their receipt 表示核对收据上列出的每一件“商品/物品”，选 item。",
            family: "item (n.物品/商品) | load (v./n.装载/货物) | polish (v.擦亮) | lightbulb (n.灯泡)。",
            details: "each 后面需要接单数可数名词。receipt（收据）上记载的是单件商品（item）。",
            cn: "顾客在离开超市收银台之前，应当核对收据上列出的每一件商品。",
            jp: "お客様は、スーパーのレジを离れる前に、レシートに記載されている各商品（item）を確認する必要があります。"
        }
    },
    {
        id: 4,
        target: "pour",
        category: "简单",
        stem: "The flight attendant began to ________ hot tea into the passenger's cup during the flight.",
        options: ["pour", "poured", "brick", "platform"],
        correct: "pour",
        explanations: {
            guide: "不定式后接动词原形。began to 后面需要接动词原形，表达将热茶“倒进”杯子里的动作，选 pour。",
            family: "pour (v.倾倒) | poured (v-ed形式) | brick (n.砖) | platform (n.平台)。",
            details: "began to do sth 结构中需要动词原形 pour。poured 为过去式/分词，不能跟在不定式符号 to 之后。",
            cn: "在飞行过程中，空乘人员开始将热茶倒进乘客的杯子里。",
            jp: "客室乗務員はフライト中、乗客のカップに温かいお茶を注ぎ（pour）始めました。"
        }
    },
    {
        id: 5,
        target: "polish",
        category: "简单",
        stem: "Before the royal banquet, the hotel staff was assigned to ________ all the antique silverware.",
        options: ["polish", "polishing", "vehicle", "in the distance"],
        correct: "polish",
        explanations: {
            guide: "不定式结构中的动词原形。was assigned to 后面需要接动词原形，表达“擦亮/擦拭”银器的动作，选 polish。",
            family: "polish (v.擦亮) | polishing (n./分词) | vehicle (n.车辆) | in the distance (介短.在远处)。",
            details: "was assigned to do sth 中，to 为不定式符号，后面必须接动词原形 polish。",
            cn: "在盛大宴会开始前，酒店员工被派去擦亮所有的古董银器。",
            jp: "盛大な晩餐会の前に、ホテルのスタッフはすべてのアンティーク銀食器を磨く（polish）よう指示されました。"
        }
    },
    {
        id: 6,
        target: "brick",
        category: "简单",
        stem: "Construction workers are using durable red ________ to build the exterior wall of the museum.",
        options: ["bricks", "lightbulb", "display", "pour"],
        correct: "bricks",
        explanations: {
            guide: "名词复数在建筑场景的搭配。durable red ________ 意为“耐用的红砖”，作为建筑材料，选复数形式 bricks。",
            family: "bricks (n.砖块/复数) | lightbulb (n.灯泡) | display (v./n.展示) | pour (v.倾倒)。",
            details: "修饰语 durable red（耐用红色的）后需接名词。build the exterior wall（建造外墙）用的是砖块（bricks）。",
            cn: "建筑工人正在使用耐用的红砖来建造博物馆的外墙。",
            jp: "建設作業員は、博物館の外壁を建てるために耐久性のある赤レンガ（bricks）を使用しています。"
        }
    },
    {
        id: 7,
        target: "in the distance",
        category: "中等",
        stem: "Looking out from the top-floor executive suite, the mountain peak was barely visible ________.",
        options: ["in the distance", "platform", "item", "load"],
        correct: "in the distance",
        explanations: {
            guide: "介词短语充当状语。was barely visible ________ 表达“在远处隐约可见”，选用固定介词短语 in the distance。",
            family: "in the distance (介短.在远处) | platform (n.月台) | item (n.物品) | load (v.装载)。",
            details: "visible in the distance 是描绘景物与实景阅读的高频固搭，其他名词选项均不能直接充当句末的地点状语。",
            cn: "从高层总裁套房向外望去，山峰在远处隐约可见。",
            jp: "最上階のエグゼクティブ・スイートから外を眺めると、遠くに（in the distance）山頂がかすかに見えました。"
        }
    },
    {
        id: 8,
        target: "display",
        category: "中等",
        stem: "The newest smartphones are currently on ________ in the retail store's central showroom.",
        options: ["display", "displayed", "vehicle", "pour"],
        correct: "display",
        explanations: {
            guide: "固定介词短语搭配。on display 是托业听力 Part 1 与 Part 7 的最高频短语，意为“陈列中/展出中”，选名词 display。",
            family: "display (n./v.展示) | displayed (v-ed形式) | vehicle (n.车辆) | pour (v.倾倒)。",
            details: "on display 属于固定介词短语，介词 on 后面接原形名词 display。不能用动词过去分词 displayed 替换短语内的 display。",
            cn: "最新的智能手机目前正在零售店的中央展厅内展出。",
            jp: "最新のスマートフォンは現在、小売店の商談用展示室で展示（display）されています。"
        }
    },
    {
        id: 9,
        target: "vehicle",
        category: "中等",
        stem: "All corporate ________ parked in the private underground facility must clearly present a valid permit.",
        options: ["vehicles", "vehicular", "lightbulb", "in the distance"],
        correct: "vehicles",
        explanations: {
            guide: "名词主语复数搭配。corporate ________ 后面跟分词短语 parked in...，表示停放在地下室的“公司车辆”，选复数名词 vehicles。",
            family: "vehicles (n.车辆/复数) | vehicular (adj.车辆的) | lightbulb (n.灯泡) | in the distance (介短.在远处)。",
            details: "parked in the underground facility（停在地下设施里）说明主语是交通工具 vehicles。vehicular 是形容词，不能直接作主语。",
            cn: "所有停放在专用地下设施内的公司车辆都必须清晰地出示有效许可证。",
            jp: "専用の地下駐車場に停められているすべての社用車（vehicles）は、有効な許可証を明示しなければなりません。"
        }
    },
    {
        id: 10,
        target: "load",
        category: "中等",
        stem: "Warehouse employees are working overtime to ________ cargo onto the delivery vans for morning shipment.",
        options: ["load", "loading", "unload", "polish"],
        correct: "load",
        explanations: {
            guide: "动词不定式与语境方向。to 后面跟动词原形，且与 onto搭配（load cargo onto...），表示将货物“装上”货车，选 load。",
            family: "load (v.装载) | loading (n./分词) | unload (v.卸货) | polish (v.擦亮)。",
            details: "load A onto B 意为把 A 装载到 B 上；而 unload 是从……卸下（unload A from B）。结合 for morning shipment（准备早间发货）可知是装货。",
            cn: "仓库员工正在加班将货物装上送货车，准备清晨发货。",
            jp: "倉庫の従業員は、朝の出荷に向けて配送車に荷物を積み込む（load）ために残業しています。"
        }
    },
    {
        id: 11,
        target: "item",
        category: "中等",
        stem: "The finance department requested an ________ breakdown of all travel expenses from last week's business trip.",
        options: ["itemized", "item", "platform", "brick"],
        correct: "itemized",
        explanations: {
            guide: "分词/形容词作前置定语。an ________ breakdown 表示“逐项列出的明细清单”，选用分词形容词 itemized。",
            family: "itemized (adj.列出明细的) | item (n.单品/项目) | platform (n.平台) | brick (n.砖)。",
            details: "itemized breakdown/statement 是商务财务高频术语，意为“分项明细表”。item 是名词原形，在此处修饰 breakdown 语法不规范。",
            cn: "财务部要求提供上周出差所有旅费的逐项明细清单。",
            jp: "経理部は、先週の出張に関するすべての旅費の項目別明細（itemized breakdown）を要求しました。"
        }
    },
    {
        id: 12,
        target: "display",
        category: "中等",
        stem: "The museum curator decided to ________ rare historical artifacts in secure glass cases for protection.",
        options: ["display", "displaying", "pour", "in the distance"],
        correct: "display",
        explanations: {
            guide: "不定式结构。decided to 后面跟动词原形 display，表示博物馆馆长决定“展示”珍贵的历史文物。",
            family: "display (v.展示/陈列) | displaying (分词) | pour (v.倾倒) | in the distance (介短.在远处)。",
            details: "decide to do sth 结构中必须接动词原形。displaying 是现在分词/动名词，不能跟在不定式符号 to 之后。",
            cn: "博物馆馆长决定将珍贵的历史文物展示在安全的玻璃柜中以进行保护。",
            jp: "博物館の学芸員は、保護のために希少な歴史的工芸品を安全なガラスケースに展示する（display）ことを決めました。"
        }
    },
    {
        id: 13,
        target: "load",
        category: "困难",
        stem: "Freight trains usually experience severe scheduling delays when the total weight of the ________ exceeds regulatory safety standards.",
        options: ["payload", "load", "loading", "lightbulb"],
        correct: "payload",
        explanations: {
            guide: "物流运输高阶复合名词。weight of the ________ 中需要名词，指货运列车的“有效载荷/收费货物重量”，选名词 payload。",
            family: "payload (n.有效载荷/货运量) | load (v./n.装载/负荷) | loading (n.装货) | lightbulb (n.灯泡)。",
            details: "total weight of the payload 属于专业物流与运载考点词。虽然 load 也有负荷之意，但专业运输场景中表达“运载货物总重”精准使用 payload。",
            cn: "当有效载荷的总重量超过法定安全标准时，货运列车通常会发生严重的日程延误。",
            jp: "積載量（payload）の総重量が規制上の安全基準を超えると、貨物列車は通常、大幅な運行遅延が発生します。"
        }
    },
    {
        id: 14,
        target: "pour",
        category: "困难",
        stem: "Heavy rainfall continued to ________ down on the port facility, forcing maritime operations to be suspended temporarily.",
        options: ["pour", "pouring", "brick", "polish"],
        correct: "pour",
        explanations: {
            guide: "动词不定式与固定搭配。continued to 后面跟动词原形，且与 down 搭配（pour down），表示暴雨“倾盆而下”，选 pour。",
            family: "pour (v.倾倒/倾盆而下) | pouring (分词) | brick (n.砖) | polish (v.擦亮)。",
            details: "continue to do sth 结构，pour down 指雨水倾泻。pouring 是分词，不能跟在不定式符号 to 后面作核心动词。",
            cn: "大雨继续倾盆而下洒在港口设施上，迫使海上作业暂停。",
            jp: "港湾施設に大雨が激しく降り注ぎ（pour down）続け、海上作業は一時中断を余儀なくされました。"
        }
    },
    {
        id: 15,
        target: "polish",
        category: "困难",
        stem: "The marketing team worked tirelessly to ________ the client proposal until it met the high standards required by the executive board.",
        options: ["polish", "polishing", "vehicle", "platform"],
        correct: "polish",
        explanations: {
            guide: "抽象商务语境与不定式。worked tirelessly to 后面接动词原形，表示“润色/完善”客户方案，选动词 polish。",
            family: "polish (v.润色/擦亮) | polishing (n./分词) | vehicle (n.车辆) | platform (n.平台)。",
            details: "polish a proposal 属于托业高阶商务引申用法，意为“润色/修改完善方案”，比单纯的物理“擦亮”更具商务针对性。",
            cn: "营销团队不知疲倦地工作，以润色客户方案，直到达到董事会要求的高标准。",
            jp: "マーケティングチームは、取締役会が要求する高い基準を満たすまで、クライアントへの提案書を磨き上げる（polish）ために精力的に働きました。"
        }
    },
    {
        id: 16,
        target: "in the distance",
        category: "困难",
        stem: "Though the factory chimney was visible ________, the environmental inspectors decided to conduct an on-site evaluation of its emissions.",
        options: ["in the distance", "platform", "vehicle", "itemized"],
        correct: "in the distance",
        explanations: {
            guide: "句法结构与介词短语。was visible 后面跟地点状语，表达“在远处”可见，选用固定短语 in the distance。",
            family: "in the distance (介短.在远处) | platform (n.平台) | vehicle (n.车辆) | itemized (adj.明细的)。",
            details: "visible in the distance 构成完整的形容词加状语结构，说明烟囱虽在远方遥遥可见，但仍需现场检测。其他选项无法在该句法位置修饰 visible。",
            cn: "尽管远处的工厂烟囱清晰可见，环境检查员仍决定对其排放物进行现场评估。",
            jp: "工場の煙突が遠くに（in the distance）見えていたものの、環境検査官はその排出物について現地評価を実施することに決めました。"
        }
    },
    {
        id: 17,
        target: "vehicle",
        category: "困难",
        stem: "The international trade conference serves as an effective ________ for promoting diplomatic dialogue among neighboring countries.",
        options: ["vehicle", "vehicular", "lightbulb", "brick"],
        correct: "vehicle",
        explanations: {
            guide: "抽象商务比喻用法。an effective ________ 中的 vehicle 在此作比喻词，意为“工具/媒介/渠道”，选单数名词 vehicle。",
            family: "vehicle (n.媒介/渠道/车辆) | vehicular (adj.车辆的) | lightbulb (n.灯泡) | brick (n.砖)。",
            details: "vehicle 用于抽象语境时意为“实现目标的手段/媒介”（a vehicle for doing sth），这是托业阅读高阶拿分点。",
            cn: "该国际贸易会议是促进邻国之间外交对话的有效媒介。",
            jp: "その国際貿易会議は、近隣国間の外交対話を促進するための効果的な手段（vehicle）として機能しています。"
        }
    },
    {
        id: 18,
        target: "brick",
        category: "困难",
        stem: "The historic downtown shopping district is famous for its charming ________ walkways that attract thousands of tourists every summer.",
        options: ["brick", "bricks", "pour", "platform"],
        correct: "brick",
        explanations: {
            guide: "名词作前置定语修饰名词。________ walkways 结构中，用单数名词 brick 作定语修饰 walkways，构成 brick walkways（砖铺步道）。",
            family: "brick (n.砖/作定语) | bricks (n.复数) | pour (v.倾倒) | platform (n.平台)。",
            details: "名词作定语修饰后续名词时，通常使用单数形式（如 brick wall, brick walkway）。使用复数形式 bricks 放置于 walkways 前不符合英语修饰习惯。",
            cn: "历史悠久的市中心商业区以其迷人的砖铺步道而闻名，每年夏天都会吸引数千名游客。",
            jp: "歴史あるダウンタウンのショッピング街は、毎年夏に何千人もの観光客を魅了する魅力的なレンガ敷きの歩道（brick walkways）で有名です。"
        }
    }
];