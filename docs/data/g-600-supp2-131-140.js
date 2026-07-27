// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data111-120.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "binoculars",
        pos: "名",
        ipa: "/bɪˈnɑːkjələrz/",
        cn: "双筒望远镜",
        jp: "双眼鏡",
        family: "binocular",
        tips: "Part 1 观察姿态高频：looking through binoculars（透过望远镜观察）或 holding binoculars（拿着望远镜）。",
        desc: "He looks through binoculars."
    },
    {
        word: "shoreline",
        pos: "名",
        ipa: "/ˈʃɔːrlaɪn/",
        cn: "海岸线，滨水区",
        jp: "海岸線、岸辺",
        family: "shore / shoreward",
        tips: "Part 1 景物描写高频：walking along the shoreline（沿着海岸线散步）或 buildings lining the shoreline（沿海岸线排列的建筑）。",
        desc: "They walk along the shoreline."
    },
    {
        word: "pier",
        pos: "名",
        ipa: "/pɪr/",
        cn: "码头，突堤",
        jp: "桟橋、埠頭",
        family: "piers",
        tips: "Part 1 港口与水边高频：boats docked at the pier（停靠在码头的船只）或 walking onto the pier（走上码头）。",
        desc: "Boats are docked at the pier."
    },
    {
        word: "ramp",
        pos: "名/動",
        ipa: "/ræmp/",
        cn: "坡道，斜坡；加大，提高",
        jp: "スロープ、傾斜路；（生産などを）増やす",
        family: "wheelchair ramp / ramp up",
        tips: "Part 1 常考 wheelchair ramp（无障碍轮椅坡道）；Part 5/6 常考高频短语 ramp up production（加大生产）。",
        desc: "He pushes a cart up the ramp."
    },
    {
        word: "runway",
        pos: "名",
        ipa: "/ˈrʌnweɪ/",
        cn: "跑道，滑行道",
        jp: "（空港の）滑走路、ランウェイ",
        family: "run / way",
        tips: "航空交通与机场场景高频：airplane on the runway（跑道上的飞机）或 landing on the runway（降落在跑道上）。",
        desc: "The plane is on the runway."
    },
    {
        word: "hose",
        pos: "名/動",
        ipa: "/hoʊz/",
        cn: "软管，水管；用水管冲洗",
        jp: "ホース；ホースで水を取りまく",
        family: "garden hose / hosing",
        tips: "Part 1 园艺与清洁动作高频：holding a hose（拿着水管）或 hosing down the patio（用水管冲洗露台）。",
        desc: "He is using a water hose."
    },
    {
        word: "light fixture",
        pos: "名",
        ipa: "/laɪt ˈfɪkstʃər/",
        cn: "灯具，固定照明设备",
        jp: "照明器具",
        family: "fixture / light / fix",
        tips: "Part 1 室内与建筑高频：overhead light fixture（顶灯设备）或 installing a light fixture（安装灯具）。",
        desc: "The light fixture is on the ceiling."
    },
    {
        word: "prop",
        pos: "動/名",
        ipa: "/prɑːp/",
        cn: "支撑，支撑物，道具",
        jp: "（支柱で）支える；小道具、支柱",
        family: "propped / propping",
        tips: "Part 1 动作与状态极高频：propped against a wall（靠在墙上支撑着）或 propping open a door（把门支撑开着）。",
        desc: "The ladder is propped against the wall."
    },
    {
        word: "stroll",
        pos: "動/名",
        ipa: "/stroʊl/",
        cn: "散步，闲逛",
        jp: "散歩する、ぶらぶら歩く",
        family: "strolling / stroller",
        tips: "Part 1 休闲动作高频：strolling along the beach/path（在海滩/小路上散步）；衍生词 stroller 意为“婴儿推车”。",
        desc: "They stroll through the park."
    },
    {
        word: "podium",
        pos: "名",
        ipa: "/ˈpoʊdiəm/",
        cn: "讲台，演讲台，指挥台",
        jp: "講壇、演台",
        family: "lectern / platform",
        tips: "Part 1/3 会议与演讲场景高频：standing behind a podium（站在演讲台后）或 speaking at a podium（在讲台上发言）。",
        desc: "She is speaking at the podium."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "podium",
        category: "简单",
        stem: "The key speaker stood behind the wooden ________ to deliver her opening presentation.",
        options: ["podium", "runway", "hose", "ramp"],
        correct: "podium",
        explanations: {
            guide: "会议演讲设施名词。stood behind the wooden ________ 结合做开场演讲的语境，选 podium（讲台/演讲台）。",
            family: "podium (n.讲台/演讲台) | runway (n.跑道) | hose (n.水管) | ramp (n.坡道)。",
            details: "stood behind the wooden podium 指站在木制演讲台后面。runway（跑道）、ramp（坡道）均非演讲发言设施。",
            cn: "主讲人站在木制演讲台后面发表开场演讲。",
            jp: "基調講演者は開会のプレゼンテーションを行うために、木製の演台（podium）の後ろに立ちました。"
        }
    },
    {
        id: 2,
        target: "binoculars",
        category: "简单",
        stem: "The bird watcher raised his ________ to get a clearer view of the eagle in the distance.",
        options: ["binoculars", "light fixture", "podium", "pier"],
        correct: "binoculars",
        explanations: {
            guide: "观察工具名词。raised his ________ 结合看清远处的鹰，使用的观测工具选 binoculars（双筒望远镜）。",
            family: "binoculars (n.双筒望远镜) | light fixture (n.灯具) | podium (n.讲台) | pier (n.码头)。",
            details: "raised his binoculars 意为举起双筒望远镜。light fixture（灯具）、podium（讲台）无法举起用于远距离观测。",
            cn: "观鸟者举起双筒望远镜，以便更清楚地观察远处的鹰。",
            jp: "バードウォッチャーは遠くのワシをよりはっきりと見るために双眼鏡（binoculars）を掲げました。"
        }
    },
    {
        id: 3,
        target: "stroll",
        category: "简单",
        stem: "Pedestrians decided to ________ along the coastal path during the warm afternoon.",
        options: ["stroll", "stroller", "prop", "ramp"],
        correct: "stroll",
        explanations: {
            guide: "动词不定式考点。decided to 后面接动词原形，表达沿海岸小路“散步/闲逛”，选 stroll。",
            family: "stroll (v.散步) | stroller (n.婴儿推车) | prop (v.支撑) | ramp (n.坡道)。",
            details: "to stroll along the path 意为沿小路散步。stroller 是名词（婴儿车），不能跟在不定式符号 to 后面。",
            cn: "行人们决定在温暖的下午沿着海岸小路散步。",
            jp: "歩行者たちは暖かい午後の間、海岸沿いの小道を散歩する（stroll）ことに決めました。"
        }
    },
    {
        id: 4,
        target: "hose",
        category: "简单",
        stem: "The gardener used a garden ________ to water the flower beds behind the house.",
        options: ["hose", "runway", "binoculars", "podium"],
        correct: "hose",
        explanations: {
            guide: "园艺工具名词。used a garden ________ 搭配浇花动作（water the flower beds），选 hose（软管/水管）。",
            family: "hose (n.水管/软管) | runway (n.跑道) | binoculars (n.望远镜) | podium (n.讲台)。",
            details: "garden hose 意为花园软管/水管。runway（跑道）、podium（讲台）均非浇花工具。",
            cn: "园丁用花园水管给房子后面的花坛浇水。",
            jp: "庭師は家の後ろの花壇に水をやるためにガーデンホース（hose）を使用しました。"
        }
    },
    {
        id: 5,
        target: "pier",
        category: "简单",
        stem: "Several fishing boats are tied to the wooden ________ near the harbor entrance.",
        options: ["pier", "ramp", "light fixture", "shoreline"],
        correct: "pier",
        explanations: {
            guide: "港口水上设施名词。tied to the wooden ________ 结合渔船系泊，选 pier（码头/突堤）。",
            family: "pier (n.码头/突堤) | ramp (n.坡道) | light fixture (n.灯具) | shoreline (n.海岸线)。",
            details: "tied to the wooden pier 意为系在木码头上。shoreline（海岸线）指水陆交界线，船只系泊的具体设施为 pier。",
            cn: "几艘渔船系在港口入口附近的木码头上。",
            jp: "港の入口近くにある木製の桟橋（pier）に数隻の漁船が繋がれています。"
        }
    },
    {
        id: 6,
        target: "light fixture",
        category: "简单",
        stem: "An electrician was hired to replace the broken ________ hanging in the hallway.",
        options: ["light fixture", "runway", "stroller", "hose"],
        correct: "light fixture",
        explanations: {
            guide: "电工维修物品名词。electrician（电工）结合 hanging in the hallway（挂在走廊里），维修的设施选 light fixture（灯具/固定照明设备）。",
            family: "light fixture (n.灯具) | runway (n.跑道) | stroller (n.婴儿车) | hose (n.水管)。",
            details: "replace the broken light fixture 意为更换损坏的灯具。stroller（婴儿车）、hose（水管）与电工维修悬挂设施不符。",
            cn: "聘请了一名电工来更换走廊里挂着的坏灯具。",
            jp: "廊下に掛かっている壊れた照明器具（light fixture）を交換するために電気工事士が雇われました。"
        }
    },
    {
        id: 7,
        target: "ramp",
        category: "中等",
        stem: "The building manager installed a wheelchair ________ beside the main stairs for accessibility.",
        options: ["ramp", "runway", "podium", "pier"],
        correct: "ramp",
        explanations: {
            guide: "无障碍设施复合名词。wheelchair ________ 属于建筑公用设施固定词组，意为“轮椅坡道”，选 ramp。",
            family: "ramp (n.坡道) | runway (n.跑道) | podium (n.讲台) | pier (n.码头)。",
            details: "wheelchair ramp 指无障碍轮椅坡道。runway（机场跑道）、podium（讲台）均非建筑出入口的无障碍设施。",
            cn: "大楼经理在主楼梯旁安装了轮椅无障碍坡道，以便通行。",
            jp: "ビルの管理人は、バリアフリーのためにメイン階段の横に車椅子用スロープ（ramp）を設置しました。"
        }
    },
    {
        id: 8,
        target: "prop",
        category: "中等",
        stem: "The maintenance worker used a wooden beam to ________ open the heavy entrance door.",
        options: ["prop", "propped", "stroll", "hose"],
        correct: "prop",
        explanations: {
            guide: "动词不定式与动作搭配。used a beam to 后面接动词原形，结合 open the door 构成 prop open，表达“撑开”大门，选 prop。",
            family: "prop (v.支撑) | propped (v-ed) | stroll (v.散步) | hose (v.水管冲洗)。",
            details: "prop open the door 指用物体把门撑开。propped 为过去式/分词，不能跟在不定式符号 to 后面。",
            cn: "维修工人用一根木梁撑开沉重的入口大门。",
            jp: "メンテナンス作業員は、重い入口のドアを開けたまま支える（prop）ために木製の角材を使用しました。"
        }
    },
    {
        id: 9,
        target: "shoreline",
        category: "中等",
        stem: "Luxurious modern hotels line the scenic ________, offering magnificent ocean views.",
        options: ["shoreline", "runway", "podium", "light fixture"],
        correct: "shoreline",
        explanations: {
            guide: "地理景观名词。line the scenic ________ 结合提供壮丽海景（ocean views），豪华酒店沿其排列的选 shoreline（海岸线）。",
            family: "shoreline (n.海岸线/滨水区) | runway (n.跑道) | podium (n.讲台) | light fixture (n.灯具)。",
            details: "line the scenic shoreline 指沿风景秀丽的海岸线排列。runway（跑道）、podium（讲台）与海景无关联。",
            cn: "豪华的现代酒店沿着风景秀丽的海岸线一字排开，提供壮丽的海景。",
            jp: "豪華なモダンホテルが景色の良い海岸線（shoreline）沿いに立ち並び、素晴らしい海の景色を提供しています。"
        }
    },
    {
        id: 10,
        target: "runway",
        category: "中等",
        stem: "Ground crews cleared all ice from the airport ________ before the international flight landed.",
        options: ["runway", "ramp", "pier", "binoculars"],
        correct: "runway",
        explanations: {
            guide: "机场设施名词。cleared all ice from the airport ________ 结合国际航班降落（flight landed），地面人员清理的对象选 runway（跑道）。",
            family: "runway (n.跑道) | ramp (n.坡道) | pier (n.码头) | binoculars (n.望远镜)。",
            details: "airport runway 指机场跑道。pier（水运码头）、binoculars（望远镜）与飞机降落场地无关。",
            cn: "地勤人员在国际航班降落前清理了机场跑道上的所有积冰。",
            jp: "地上作業員は、国際便が着陸する前に空港の滑走路（runway）からすべての氷を取り除きました。"
        }
    },
    {
        id: 11,
        target: "stroll",
        category: "中等",
        stem: "A young family was spotted pushing a baby ________ through the quiet neighborhood park.",
        options: ["stroller", "stroll", "podium", "hose"],
        correct: "stroller",
        explanations: {
            guide: "派生具象名词考点。pushing a baby ________ 属于高频生活与出行词组，表达推着“婴儿推车”，选 stroller。",
            family: "stroller (n.婴儿推车) | stroll (v./n.散步) | podium (n.讲台) | hose (n.水管)。",
            details: "baby stroller 指婴儿推车。stroll 是动词或抽象名词（散步），不能直接作为被推动的具体婴儿车器具。",
            cn: "有人看到年轻的一家三口推着婴儿车穿过安静的社区公园。",
            jp: "若い家族が静かな近所の公園でベビーカー（stroller）を押しているのが目撃されました。"
        }
    },
    {
        id: 12,
        target: "prop",
        category: "中等",
        stem: "The painter left his folding ladder ________ securely against the side of the house.",
        options: ["propped", "prop", "hosing", "strolling"],
        correct: "propped",
        explanations: {
            guide: "过去分词作后置定语/补足语。ladder 与 prop 之间是被动关系，表达梯子被“靠着支撑”在房子旁，选 propped。",
            family: "propped (adj./v-ed支撑着的) | prop (v.支撑) | hosing (v-ing冲洗) | strolling (v-ing散步)。",
            details: "left his ladder propped against... 指让梯子依靠着支撑在……。prop 为原形动词，无法充当补足梯子状态的分词结构。",
            cn: "画家把他的折叠梯牢牢地靠在房子一侧。",
            jp: "塗装工は折りたたみはしごを家の側面にしっかりと立て掛けた（propped）ままにしました。"
        }
    },
    {
        id: 13,
        target: "ramp",
        category: "困难",
        stem: "The manufacturing company decided to ________ up production to meet the surge in seasonal demand.",
        options: ["ramp", "stroll", "prop", "hose"],
        correct: "ramp",
        explanations: {
            guide: "商务高阶动词搭配。ramp up 属于商务与供应链核心短语，意为“提高/加大/逐步增加（生产/产能）”，选 ramp。",
            family: "ramp (v.加大/坡道) | stroll (v.散步) | prop (v.支撑) | hose (v.水管冲洗)。",
            details: "ramp up production 意为加大生产。stroll up（漫步上）、prop up（支撑起）均不符合增加产能的商业语境。",
            cn: "该制造公司决定加大生产力度，以满足季节性需求的激增。",
            jp: "製造会社は、季節的な需要の急増に応えるために生産を拡大する（ramp up）ことを決定しました。"
        }
    },
    {
        id: 14,
        target: "light fixture",
        category: "困难",
        stem: "All ceiling-mounted ________ in the conference center must comply with strict energy-efficiency regulations.",
        options: ["fixtures", "fixture", "runways", "podiums"],
        correct: "fixtures",
        explanations: {
            guide: "复数名词考点。ceiling-mounted ________ 搭配 All，意为“天花板安装的灯具设施”，用复数 fixtures。",
            family: "fixtures (n.复数固定设施/灯具) | fixture (n.单数) | runways (n.跑道) | podiums (n.讲台)。",
            details: "light fixtures / ceiling fixtures 专指照明灯具。All 限定词搭配复数名词 fixtures，而非单数 fixture。",
            cn: "会议中心所有安装在天花板上的灯具都必须符合严格的节能法规。",
            jp: "会議センターの天井に取り付けられたすべての照明器具（fixtures）は、厳格な省エネ規制に準拠しなければなりません。"
        }
    },
    {
        id: 15,
        target: "hose",
        category: "困难",
        stem: "Maintenance workers were seen ________ down the dusty pavement outside the shopping center.",
        options: ["hosing", "hose", "propping", "strolling"],
        correct: "hosing",
        explanations: {
            guide: "现在分词与动作考点。were seen ________ down 结构中，动作与人是主动关系，表达用软管“冲洗”路面，选 hosing。",
            family: "hosing (v-ing水管冲洗) | hose (v./n.水管) | propping (v-ing支撑) | strolling (v-ing散步)。",
            details: "hosing down the pavement 指用水管冲洗路面。hose 是动词原形，不能直接置于 were seen 后面作分词补足语。",
            cn: "有人看到维护工人正在用软管冲洗购物中心外积满灰尘的路面。",
            jp: "メンテナンス作業員がショッピングセンターの外のほこりっぽい舗道にホースで水をまいて（hosing）いるのが目撃されました。"
        }
    },
    {
        id: 16,
        target: "shoreline",
        category: "困难",
        stem: "Environmental scientists measured the extent of ________ erosion following the severe tropical storm.",
        options: ["shoreline", "shoreward", "runway", "pier"],
        correct: "shoreline",
        explanations: {
            guide: "高阶环保与地理名词。shoreline erosion 属于环境科学高频术语，意为“海岸线侵蚀/滨水区侵蚀”。",
            family: "shoreline (n.海岸线) | shoreward (adv./adj.向岸的) | runway (n.跑道) | pier (n.码头)。",
            details: "shoreline erosion 专指海岸线侵蚀。shoreward 是副词/形容词（向岸边的），不能直接修饰名词 erosion 作定语。",
            cn: "环境科学家测量了强热带风暴后海岸线侵蚀的程度。",
            jp: "環境科学者たちは、猛烈な熱帯熱帯暴風雨の後の海岸線（shoreline）侵食の程度を測定しました。"
        }
    },
    {
        id: 17,
        target: "podium",
        category: "困难",
        stem: "The guest conductor stepped onto the ________ and raised his baton to signal the orchestra.",
        options: ["podium", "ramp", "runway", "pier"],
        correct: "podium",
        explanations: {
            guide: "一词多义与艺术演出场景。stepped onto the ________ 结合指挥棒（baton）和管弦乐队（orchestra），选 podium（指挥台/讲台）。",
            family: "podium (n.指挥台/讲台) | ramp (n.坡道) | runway (n.跑道) | pier (n.码头)。",
            details: "conductor stepped onto the podium 指客席指挥登上指挥台。ramp（斜坡）、runway（跑道）均非乐团指挥站立位置。",
            cn: "客席指挥登上指挥台，举起指挥棒向管弦乐队示意。",
            jp: "客演指揮者は指揮台（podium）に上がり、オーケストラにサインを出すために指揮棒を掲げました。"
        }
    },
    {
        id: 18,
        target: "binoculars",
        category: "困难",
        stem: "The coast guard officer used high-powered ________ to monitor maritime traffic near the harbor.",
        options: ["binoculars", "binocular", "fixtures", "strollers"],
        correct: "binoculars",
        explanations: {
            guide: "复数名物考点。high-powered ________ 指高倍率“双筒望远镜”，作为双镜片仪器固定使用复数形式 binoculars。",
            family: "binoculars (n.复数望远镜) | binocular (adj.双目的) | fixtures (n.固定设施) | strollers (n.婴儿车)。",
            details: "high-powered binoculars 指高倍双筒望远镜。binocular 单独使用时多为形容词（如 binocular vision 双眼视觉），表示具体测量仪器时须用复数 binoculars。",
            cn: "海岸警卫队官员使用高倍双筒望远镜监控港口附近的海上交通。",
            jp: "沿岸警備隊の士官は、港の近くの海上交通を監視するために高倍率の双眼鏡（binoculars）を使用しました。"
        }
    }
];