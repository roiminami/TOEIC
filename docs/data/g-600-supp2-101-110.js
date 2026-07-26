// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data81-90.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "stack",
        pos: "動/名",
        ipa: "/stæk/",
        cn: "堆叠，叠放；一堆",
        jp: "積み重ねる；山、積み重ね",
        family: "stacked / stacking / stackable",
        tips: "Part 1 极高频：be stacked on the table（堆放在桌上）或 stacking boxes（正在堆叠箱子）。",
        desc: "Boxes are stacked on the floor."
    },
    {
        word: "dock",
        pos: "名/動",
        ipa: "/dɑːk/",
        cn: "码头，船坞；靠岸，停泊",
        jp: "桟橋、ドック；（船が）着岸する",
        family: "docked / docking / loading dock",
        tips: "Part 1 常考 ship is docked at the harbor（船只停靠在港口）或 loading dock（装卸码头）。",
        desc: "The boat is docked at the pier."
    },
    {
        word: "kneeling",
        pos: "動/形",
        ipa: "/ˈniːlɪŋ/",
        cn: "跪着的，跪姿的",
        jp: "膝をついている",
        family: "kneel / knelt / knee",
        tips: "Part 1 姿态与动作考点：is kneeling on the ground（正跪在地上）或 kneeling beside a box（跪在箱子旁）。",
        desc: "She is kneeling on the floor."
    },
    {
        word: "staircase",
        pos: "名",
        ipa: "/ˈsterkeɪs/",
        cn: "楼梯",
        jp: "階段",
        family: "stairs / stairway / stairwell",
        tips: "建筑物内部与外部设施词，常考 walking up the staircase（走上楼梯）或 staircase with a railing（带扶手的楼梯）。",
        desc: "He is walking up the staircase."
    },
    {
        word: "stir",
        pos: "動",
        ipa: "/stɜːr/",
        cn: "搅拌，搅动",
        jp: "かき混ぜる、攪拌する",
        family: "stirring / stirred / stirrer",
        tips: "Part 1 餐饮与实验室动作考点：stirring a cup of coffee（搅拌咖啡）或 stirring a liquid（搅拌液体）。",
        desc: "She is stirring her drink."
    },
    {
        word: "server",
        pos: "名",
        ipa: "/ˈsɜːrvər/",
        cn: "侍者，服务员；服务器",
        jp: "給仕人、サーバー；サーバー",
        family: "serve / service / serving",
        tips: "Part 1/3 餐饮场景常指 restaurant server（餐厅服务员）； Part 5/7 IT场景指 computer server（计算机服务器）。",
        desc: "The server brought the food."
    },
    {
        word: "unload",
        pos: "動",
        ipa: "/ˌʌnˈloʊd/",
        cn: "卸下（货物），卸载",
        jp: "（荷物を）降ろす、下荷する",
        family: "unloading / unloaded / load",
        tips: "与 load（装载）互为反义词。Part 1 常考 unloading cargo from a truck（从卡车上卸货）。",
        desc: "They are unloading the truck."
    },
    {
        word: "briefcase",
        pos: "名",
        ipa: "/ˈbriːfkeɪs/",
        cn: "公文包",
        jp: "書類鞄、ブリーフケース",
        family: "brief / case / suitcase",
        tips: "商务与出行场景极高频，常考 carrying a briefcase（手提公文包）或 briefcase on the chair（椅上的公文包）。",
        desc: "He is carrying a briefcase."
    },
    {
        word: "pedestrian",
        pos: "名/形",
        ipa: "/pəˈdestriən/",
        cn: "行人，步行者；徒步的",
        jp: "歩行者；歩行者の",
        family: "pedestrianize / pedestrial",
        tips: "交通与城市设施高频词：pedestrian crossing（人行横道）或 pedestrians walking on the sidewalk（在人行道上行走的行人）。",
        desc: "Pedestrians are crossing the road."
    },
    {
        word: "intersection",
        pos: "名",
        ipa: "/ˌɪntərˈsekʃn/",
        cn: "十字路口，交叉路口",
        jp: "交差点",
        family: "intersect / intersecting",
        tips: "交通指路与城市道路场景高频：stop at the intersection（在十字路口停下）或 busy street intersection（繁忙的街口）。",
        desc: "Cars stopped at the intersection."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "briefcase",
        category: "简单",
        stem: "The businessman grabbed his leather ________ before heading to the morning board meeting.",
        options: ["briefcase", "staircase", "intersection", "server"],
        correct: "briefcase",
        explanations: {
            guide: "随身物品名词。leather 结合前往董事会会议的商务场景，手持物品为 briefcase（公文包）。",
            family: "briefcase (n.公文包) | staircase (n.楼梯) | intersection (n.十字路口) | server (n.服务员)。",
            details: "leather briefcase 指皮质公文包。staircase（楼梯）、intersection（十字路口）等建筑物或道路设施无法手持（grabbed）。",
            cn: "这位商人拿上他的皮质公文包，前往参加早晨的董事会会议。",
            jp: "ビジネスマンは朝の取締役会に向かう前に、革の書類鞄（briefcase）を手に取りました。"
        }
    },
    {
        id: 2,
        target: "pedestrian",
        category: "简单",
        stem: "Vehicles must stop to yield to any ________ walking across the designated crosswalk.",
        options: ["pedestrian", "pedestrians", "intersection", "staircase"],
        correct: "pedestrian",
        explanations: {
            guide: "单数名词考点。any 后面接单数可数名词，指过斑马线的“行人”，选 pedestrian。",
            family: "pedestrian (n.单数行人) | pedestrians (n.复数行人) | intersection (n.十字路口) | staircase (n.楼梯)。",
            details: "any pedestrian 指任何一位行人。pedestrians 是复数，与 any 修饰的单数可数名词语法不符。",
            cn: "车辆必须停车让行穿过指定斑马线的任何行人。",
            jp: "車両は、指定された横断歩道を渡っている歩行者（pedestrian）に道を譲るために停止しなければなりません。"
        }
    },
    {
        id: 3,
        target: "unload",
        category: "简单",
        stem: "Workers began to ________ the crates of fresh produce from the delivery van.",
        options: ["unload", "unloading", "stir", "kneeling"],
        correct: "unload",
        explanations: {
            guide: "动词不定式考点。began to 后面需要接动词原形，表达从货车上“卸下”箱子，选 unload。",
            family: "unload (v.卸货) | unloading (n./v-ing) | stir (v.搅拌) | kneeling (v-ing/adj.跪着的)。",
            details: "began to unload 构成不定式作宾语。unloading 是分词/动名词，不能直接跟在不定式符号 to 后面。",
            cn: "工人开始从送货车上卸下装满新鲜农产品的箱子。",
            jp: "作業員たちは配送バンから新鮮な農作物の木箱を降ろし（unload）始めました。"
        }
    },
    {
        id: 4,
        target: "stir",
        category: "简单",
        stem: "The barista used a small spoon to ________ the hot coffee before serving it to the customer.",
        options: ["stir", "stirring", "unload", "dock"],
        correct: "stir",
        explanations: {
            guide: "动词不定式与动作考点。used a spoon to 后面接动词原形，表达用勺子“搅拌”咖啡，选 stir。",
            family: "stir (v.搅拌) | stirring (v-ing形式) | unload (v.卸货) | dock (v.停靠)。",
            details: "used a spoon to stir 意为用勺子搅拌。stirring 是分词形式，不能用在不定式符号 to 之后。",
            cn: "咖啡师在将热咖啡端给顾客之前，用小勺搅拌了一下。",
            jp: "バリスタは、客に提供する前に小さなスプーンで温かいコーヒーをかき混ぜ（stir）ました。"
        }
    },
    {
        id: 5,
        target: "staircase",
        category: "简单",
        stem: "Visitors took the carpeted ________ to reach the second-floor art exhibit.",
        options: ["staircase", "briefcase", "intersection", "server"],
        correct: "staircase",
        explanations: {
            guide: "建筑通路设施名词。took the carpeted ________ 结合到达二楼的目标，使用的通路设施是 staircase（楼梯）。",
            family: "staircase (n.楼梯) | briefcase (n.公文包) | intersection (n.十字路口) | server (n.服务员)。",
            details: "carpeted staircase 指铺有地毯的楼梯。briefcase（公文包）、intersection（十字路口）均无法登上二楼。",
            cn: "参观者走铺有地毯的楼梯到达二楼的艺术展厅。",
            jp: "来訪者は2階の美術展に到達するために、じゅうたんが敷かれた階段（staircase）を利用しました。"
        }
    },
    {
        id: 6,
        target: "intersection",
        category: "简单",
        stem: "Drivers are advised to slow down when approaching a busy road ________.",
        options: ["intersection", "intersect", "pedestrian", "dock"],
        correct: "intersection",
        explanations: {
            guide: "道路结构名词。approaching a busy road ________ 意为靠近繁忙的道路“十字路口”，选 intersection。",
            family: "intersection (n.十字路口) | intersect (v.相交) | pedestrian (n.行人) | dock (n.码头)。",
            details: "road intersection 指道路交叉口。intersect 是动词，不能在不定冠词 a 和形容词 busy road 后面充当名词。",
            cn: "建议司机在接近繁忙的道路交叉路口时减速慢行。",
            jp: "ドライバーは、交通量の多い道路の交差点（intersection）に近づく際、減速するよう推奨されています。"
        }
    },
    {
        id: 7,
        target: "dock",
        category: "中等",
        stem: "The cargo vessel is currently ________ at the harbor for safety inspection.",
        options: ["docked", "dock", "kneeling", "unloaded"],
        correct: "docked",
        explanations: {
            guide: "被动语态/状态描述。is currently 后面接过去分词，表达货船目前“停靠”在港口，选 docked。",
            family: "docked (v-ed/adj.停靠的) | dock (v./n.停靠/码头) | kneeling (v-ing/adj.跪着的) | unloaded (v-ed被卸下的)。",
            details: "is docked at the harbor 指停靠在港口。dock 是原形动词，不能与 is 搭配充当表语/被动语态。",
            cn: "该货船目前停靠在港口接受安全检查。",
            jp: "貨物船は現在、安全点検のため港に着岸（docked）しています。"
        }
    },
    {
        id: 8,
        target: "stack",
        category: "中等",
        stem: "A tidy ________ of newly printed brochures was placed near the entrance registration desk.",
        options: ["stack", "stacked", "staircase", "briefcase"],
        correct: "stack",
        explanations: {
            guide: "量词短语名词考点。A tidy ________ of... 构成固定搭配 a stack of（一堆……），选名词 stack。",
            family: "stack (n.一堆/堆放) | stacked (adj.堆叠的) | staircase (n.楼梯) | briefcase (n.公文包)。",
            details: "a stack of brochures 指一堆手册。stacked 是分词，不能跟在不定冠词 A 和形容词 tidy 后面作名词中心语。",
            cn: "入口处签到处旁整齐地摆放着一堆新印刷的宣传手册。",
            jp: "入口の受付デスクの近くに、新しく印刷されたパンフレットの整然とした山（stack）が置かれていました。"
        }
    },
    {
        id: 9,
        target: "kneeling",
        category: "中等",
        stem: "The technician was spotted ________ on the floor to inspect the lower network cables.",
        options: ["kneeling", "kneel", "stirring", "unloading"],
        correct: "kneeling",
        explanations: {
            guide: "感官/观察动词被动语态+现在分词。was spotted ________ 表达被看到正在“跪在”地上，选 kneeling。",
            family: "kneeling (v-ing跪着的) | kneel (v.跪下) | stirring (v-ing搅拌) | unloading (v-ing卸货)。",
            details: "was spotted kneeling on the floor 表示被发现跪在地上。kneel 是动词原形，不能作分词补足语。",
            cn: "有人看到技术人员正跪在地板上检查下面的网络线路。",
            jp: "技術者が下のネットワークケーブルを点検するために床に膝をついている（kneeling）のが目撃されました。"
        }
    },
    {
        id: 10,
        target: "server",
        category: "中等",
        stem: "The friendly restaurant ________ brought a fresh jug of iced water to the table immediately.",
        options: ["server", "service", "briefcase", "dock"],
        correct: "server",
        explanations: {
            guide: "餐饮职业名词。brought water to the table（端水到桌上）的主语是 restaurant ________（餐厅服务员），选 server。",
            family: "server (n.服务员/服务器) | service (n.服务) | briefcase (n.公文包) | dock (n.码头)。",
            details: "restaurant server 指餐厅服务员。service 是抽象名词（服务），不能执行端水到桌上的动作。",
            cn: "这位友好的餐厅服务员立刻给桌上端来了一壶新鲜冰水。",
            jp: "フレンドリーなレストランの給仕人（server）は、すぐにテーブルに冷たい水のピッチャーを持ってきました。"
        }
    },
    {
        id: 11,
        target: "unload",
        category: "中等",
        stem: "Shipping logistics teams are working overtime to finish the ________ of cargo containers.",
        options: ["unloading", "unload", "staircase", "intersection"],
        correct: "unloading",
        explanations: {
            guide: "动名词/派生名词考点。finish the ________ of... 结构中，在定冠词 the 后需填写动名词/名词形式 unloading（卸货）。",
            family: "unloading (n.卸货) | unload (v.卸货) | staircase (n.楼梯) | intersection (n.十字路口)。",
            details: "finish the unloading of cargo containers 意为完成货运集装箱的卸货。unload 为动词原形，不能直接跟在定冠词 the 后面。",
            cn: "航运物流团队正在加班加点，以完成集装箱的卸货工作。",
            jp: "海運物流チームは、貨物コンテナの荷下ろし（unloading）を完了するために残業しています。"
        }
    },
    {
        id: 12,
        target: "pedestrian",
        category: "中等",
        stem: "City council decided to convert the downtown shopping street into a ________ zone.",
        options: ["pedestrian", "pedestrians", "dock", "server"],
        correct: "pedestrian",
        explanations: {
            guide: "前置定语名词考点。pedestrian zone 属于城市规划固定词组，意为“步行街/行人专用区”。",
            family: "pedestrian (n./adj.行人/徒步的) | pedestrians (n.复数) | dock (n.码头) | server (n.服务器)。",
            details: "pedestrian zone 是“步行街区”的标准表示法。作前置定语修饰 zone 时固定用单数形式 pedestrian。",
            cn: "市议会决定将市中心商业街改造为步行街区。",
            jp: "市議会は市街地のショッピング街を歩行者天国（pedestrian zone）に改修することを決定しました。"
        }
    },
    {
        id: 13,
        target: "stack",
        category: "困难",
        stem: "To maximize warehouse storage efficiency, all heavy inventory boxes should be ________ neatly.",
        options: ["stacked", "stacking", "unloaded", "kneeling"],
        correct: "stacked",
        explanations: {
            guide: "被动语态及状态动作。should be 后面接过去分词，表达库存箱子应该被整齐地“堆叠”，选 stacked。",
            family: "stacked (v-ed被堆叠的) | stacking (v-ing) | unloaded (v-ed被卸下的) | kneeling (v-ing跪着)。",
            details: "should be stacked neatly 指应该整齐堆放。stacking 是主动分词，不符合主语 boxes 被堆放的被动逻辑。",
            cn: "为了最大化仓库储存效率，所有重型库存箱都应该整齐地堆叠起来。",
            jp: "倉庫の保管効率を最大化するために、すべての重い在庫箱は整然と積み重ねられる（stacked）べきです。"
        }
    },
    {
        id: 14,
        target: "dock",
        category: "困难",
        stem: "Truck drivers were instructed to back their vehicles directly into the loading ________.",
        options: ["dock", "docked", "intersection", "staircase"],
        correct: "dock",
        explanations: {
            guide: "高频物流复合名词。loading dock 属于仓储物流核心专属术语，意为“装卸码头/装卸平台”，选 dock。",
            family: "dock (n.码头) | docked (adj.停靠的) | intersection (n.十字路口) | staircase (n.楼梯)。",
            details: "loading dock 指工厂或仓库的货车装卸货平台。docked 为分词/形容词，无法与 loading 构成固定复合名词。",
            cn: "卡车司机接到指示，将车辆直接倒进装卸平台。",
            jp: "トラック運転手は、車両を荷積みプラットフォーム（loading dock）に直接バックで入れるよう指示されました。"
        }
    },
    {
        id: 15,
        target: "server",
        category: "困难",
        stem: "The IT department scheduled system maintenance tonight to resolve issues with the corporate database ________.",
        options: ["servers", "server", "briefcase", "pedestrian"],
        correct: "servers",
        explanations: {
            guide: "IT场景名词复数与泛指。database ________ 意为“数据库服务器”，企业级设施通常涉及多台服务器，用复数 servers。",
            family: "servers (n.复数服务器) | server (n.单数服务器) | briefcase (n.公文包) | pedestrian (n.行人)。",
            details: "corporate database servers 指公司的数据库服务器群。在泛指企业整体网络设施时使用复数 servers。",
            cn: "IT 部门计划今晚进行系统维护，以解决公司数据库服务器的问题。",
            jp: "IT部門は、社内データベースサーバー（servers）の問題を解決するため、今夜システムメンテナンスを予定しました。"
        }
    },
    {
        id: 16,
        target: "stir",
        category: "困难",
        stem: "The market research survey created a considerable ________ among industry competitors.",
        options: ["stir", "stirring", "unloading", "kneeling"],
        correct: "stir",
        explanations: {
            guide: "一词多义高阶抽象名词。create a considerable ________ 是固定搭配，意为“引起了不小的轰动/反响”，选 stir。",
            family: "stir (n.轰动/骚动/v.搅拌) | stirring (adj.令人激动的) | unloading (n.卸货) | kneeling (v-ing)。",
            details: "create a stir 意为引发骚动/轰动/关注。stirring 为形容词，不能在形容词 considerable 后面作名词中心语。",
            cn: "这项市场调研在同行竞争对手中引起了不小的轰动。",
            jp: "その市場調査は、業界の競合他社の間でかなりの反響（stir）を引き起こしました。"
        }
    },
    {
        id: 17,
        target: "kneeling",
        category: "困难",
        stem: "To perform proper CPR during the first-aid training, the participant remained ________ beside the mannequin.",
        options: ["kneeling", "kneel", "stacked", "docked"],
        correct: "kneeling",
        explanations: {
            guide: "系动词状态补足语。remained 后面接形容词/分词作表语，表达保持“跪姿”，选 kneeling。",
            family: "kneeling (adj./v-ing跪着的) | kneel (v.跪下) | stacked (adj.堆叠的) | docked (adj.停靠的)。",
            details: "remained kneeling 表示保持跪着的姿势。kneel 是动词原形，不能作系动词 remained 的表语。",
            cn: "在急救培训期间为了进行正确的心肺复苏，学员保持跪在人体模型旁边的姿势。",
            jp: "応急処置訓練中に適切な心肺蘇生を行うため、参加者はマネキンの横で膝をついた（kneeling）ままでいました。"
        }
    },
    {
        id: 18,
        target: "intersection",
        category: "困难",
        stem: "Urban planners analyzed traffic flow data at several high-volume ________ to reduce morning congestion.",
        options: ["intersections", "intersection", "staircases", "pedestrians"],
        correct: "intersections",
        explanations: {
            guide: "复数名词考点。several 后面必须接可数名词复数形式，表达多个高车流量的“十字路口”，选 intersections。",
            family: "intersections (n.复数十字路口) | intersection (n.单数) | staircases (n.楼梯复数) | pedestrians (n.行人复数)。",
            details: "several high-volume intersections 意为几个高车流量的交叉路口。several 限定词要求使用复数 intersections。",
            cn: "城市规划人员分析了几个高车流量交叉路口的的交通流量数据，以减少早高峰拥堵。",
            jp: "都市計画担当者は、朝の渋滞を緩和するために、交通量の多い複数の交差点（intersections）の交通量データを分析しました。"
        }
    }
];