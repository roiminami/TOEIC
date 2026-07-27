// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data121-130.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "paddle",
        pos: "名/動",
        ipa: "/ˈpædl/",
        cn: "桨，划桨",
        jp: "パドル、オール；（舟を）漕ぐ",
        family: "paddling / paddled / paddler",
        tips: "Part 1 户外水上活动高频：paddling a canoe/kayak（划划艇/皮划艇）或 holding a paddle（拿着桨）。",
        desc: "He is paddling a boat."
    },
    {
        word: "lamppost",
        pos: "名",
        ipa: "/ˈlæmppoʊst/",
        cn: "路灯柱",
        jp: "街灯柱、街灯",
        family: "lamp / post / street lamp",
        tips: "Part 1 街道建筑与公共设施：standing under a lamppost（站在路灯柱下）或 lamppost lining the street（沿街排列的路灯柱）。",
        desc: "A lamppost stands on the street."
    },
    {
        word: "curb",
        pos: "名/動",
        ipa: "/kɜːrb/",
        cn: "路缘，街边；遏制，控制",
        jp: "（歩道の）縁石、路肩；抑制する",
        family: "curbing / curbed",
        tips: "Part 1 停车与道路描写：parked by the curb（停在路缘旁）；Part 5/6 商务场景高频：curb expenses/costs（遏制开支/成本）。",
        desc: "The car is parked by the curb."
    },
    {
        word: "wheelbarrow",
        pos: "名",
        ipa: "/ˈwiːlbæroʊ/",
        cn: "独轮手推车",
        jp: "一輪車、手押し車",
        family: "barrow / wheel",
        tips: "Part 1 施工与园艺场景高频：pushing a wheelbarrow（推独轮车）或 wheelbarrow filled with soil（装满土的独轮车）。",
        desc: "He is pushing a wheelbarrow."
    },
    {
        word: "awning",
        pos: "名",
        ipa: "/ˈɔːnɪŋ/",
        cn: "雨棚，遮阳篷",
        jp: "日よけ、雨よけ、オーニング",
        family: "canopy / shade / shelter",
        tips: "Part 1 户外餐桌与店面高频：sitting under an awning（坐在遮阳篷下）或 extended over the walkway（延伸在步道上的雨棚）。",
        desc: "Tables are under the awning."
    },
    {
        word: "windowpane",
        pos: "名",
        ipa: "/ˈwɪndoʊpeɪn/",
        cn: "窗户玻璃",
        jp: "窓ガラス、窓枠のガラス",
        family: "window / pane / glass",
        tips: "Part 1 房屋与清洁动作：wiping the windowpane（擦拭窗玻璃）或 looking through the windowpane（透过窗玻璃看）。",
        desc: "She is cleaning a windowpane."
    },
    {
        word: "plaza",
        pos: "名",
        ipa: "/ˈplɑːzə/",
        cn: "广场，购物中心",
        jp: "広場、ショッピング広場",
        family: "square / shopping plaza",
        tips: "Part 1/3 城市公共空间与商业区：people gathered in the plaza（聚集在广场上的人们）或 outdoor shopping plaza（户外购物广场）。",
        desc: "People gathered in the plaza."
    },
    {
        word: "lawn mower",
        pos: "名",
        ipa: "/ˈlɔːn moʊər/",
        cn: "割草机",
        jp: "芝刈り機",
        family: "lawnmower / lawn / mow / mower",
        tips: "Part 1 庭院维护高频：operating a lawn mower（操作割草机）或 pushing a lawn mower（推着割草机）。也常拼写作单字 lawnmower。",
        desc: "He is using a lawn mower."
    },
    {
        word: "windowsill",
        pos: "名",
        ipa: "/ˈwɪndoʊsɪl/",
        cn: "窗台",
        jp: "窓台、窓枠の底",
        family: "window / sill",
        tips: "Part 1 室内摆设高频：a potted plant on the windowsill（窗台上的盆栽）或 resting elbows on the windowsill（把双肘靠在窗台上）。",
        desc: "A plant is on the windowsill."
    },
    {
        word: "canopy",
        pos: "名",
        ipa: "/ˈkænəpi/",
        cn: "遮篷，顶篷；树冠",
        jp: "キャノピー、天蓋、遮蔽用テント",
        family: "canopies / awning",
        tips: "Part 1 建筑出入口与户外活动保护设施：under a canvas canopy（在帆布顶篷下）或 forest canopy（森林树冠层）。",
        desc: "They sit under a canopy."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "paddle",
        category: "简单",
        stem: "The kayaker used a wooden ________ to navigate through the river currents.",
        options: ["paddle", "paddled", "curb", "windowsill"],
        correct: "paddle",
        explanations: {
            guide: "水上运动工具名词。used a wooden ________ 结合划皮划艇（kayaker）穿过河流，工具选 paddle（桨）。",
            family: "paddle (n.桨) | paddled (v-ed) | curb (n.路缘) | windowsill (n.窗台)。",
            details: "used a wooden paddle 指使用木桨。paddled 是动词过去式，不能被冠词 a 和形容词 wooden 修饰。",
            cn: "皮划艇划手使用木桨在河流中航行。",
            jp: "カヤックの乗り手は、川の潮流を進むために木製のパドル（paddle）を使用しました。"
        }
    },
    {
        id: 2,
        target: "lamppost",
        category: "简单",
        stem: "A tall metal ________ illuminates the sidewalk outside the town hall at night.",
        options: ["lamppost", "wheelbarrow", "awning", "plaza"],
        correct: "lamppost",
        explanations: {
            guide: "街道照明设施名词。tall metal ________ 搭配夜间照亮人行道（illuminates the sidewalk），选 lamppost（路灯柱）。",
            family: "lamppost (n.路灯柱) | wheelbarrow (n.独轮车) | awning (n.遮阳篷) | plaza (n.广场)。",
            details: "metal lamppost 指金属路灯柱。wheelbarrow（独轮车）、awning（遮阳篷）均非夜间发光照明设施。",
            cn: "一根高大的金属路灯柱在夜间照亮了市政厅外的人行道。",
            jp: "背の高い金属製の街灯柱（lamppost）が、夜間に市役所の外の歩道を照らしています。"
        }
    },
    {
        id: 3,
        target: "curb",
        category: "简单",
        stem: "Drivers must be careful not to hit the ________ when parallel parking along the street.",
        options: ["curb", "curbing", "canopy", "windowpane"],
        correct: "curb",
        explanations: {
            guide: "道路结构名词。hit the ________ 结合侧方停车（parallel parking）语境，防止刮蹭的选 curb（路缘/街边）。",
            family: "curb (n.路缘/街边) | curbing (n.路缘石材质) | canopy (n.顶篷) | windowpane (n.窗玻璃)。",
            details: "hit the curb 指碰到路缘。curbing 指路缘砌筑材料，作具体碰撞对象时选名词 curb。",
            cn: "司机沿街侧方停车时必须小心不要碰到路缘。",
            jp: "ドライバーは道路沿いに纵列駐車する際、縁石（curb）にぶつけないよう注意しなければなりません。"
        }
    },
    {
        id: 4,
        target: "wheelbarrow",
        category: "简单",
        stem: "The gardener filled the ________ with rich soil to transport it across the yard.",
        options: ["wheelbarrow", "lawn mower", "windowsill", "paddle"],
        correct: "wheelbarrow",
        explanations: {
            guide: "园艺运载工具。filled with rich soil（装满肥沃泥土）并搬运，运载工具选 wheelbarrow（独轮手推车）。",
            family: "wheelbarrow (n.独轮手推车) | lawn mower (n.割草机) | windowsill (n.窗台) | paddle (n.桨)。",
            details: "filled the wheelbarrow 指装满独轮手推车。lawn mower 是割草机械，无法用来盛装并运输泥土。",
            cn: "园丁在独轮手推车里装满肥沃的泥土，以便将其运过院子。",
            jp: "庭師は庭を越えて運ぶために、一輪車（wheelbarrow）に肥沃な土を満たしました。"
        }
    },
    {
        id: 5,
        target: "lawn mower",
        category: "简单",
        stem: "The maintenance crew brought a gasoline-powered ________ to trim the field grass.",
        options: ["lawn mower", "windowsill", "plaza", "awning"],
        correct: "lawn mower",
        explanations: {
            guide: "草坪维护机械名词。gasoline-powered ________ 结合修剪场地杂草（trim the field grass），选 lawn mower（割草机）。",
            family: "lawn mower (n.割草机) | windowsill (n.窗台) | plaza (n.广场) | awning (n.遮阳篷)。",
            details: "a gasoline-powered lawn mower 指燃油割草机。windowsill（窗台）、plaza（广场）均非工具设备。",
            cn: "维修人员带来了一台汽油驱动的割草机来修剪场地的草。",
            jp: "メンテナンス作業員は広場の草を刈るためにガソリン式の芝刈り機（lawn mower）を持参しました。"
        }
    },
    {
        id: 6,
        target: "windowpane",
        category: "简单",
        stem: "The worker wiped the glass ________ until it was completely clean and transparent.",
        options: ["windowpane", "windowsill", "lamppost", "canopy"],
        correct: "windowpane",
        explanations: {
            guide: "建筑玻璃部件。wiped the glass ________ 结合 wipe（擦拭）和 transparent（透明的），选 windowpane（窗户玻璃）。",
            family: "windowpane (n.窗户玻璃) | windowsill (n.窗台) | lamppost (n.路灯柱) | canopy (n.顶篷)。",
            details: "glass windowpane 意为窗户玻璃。windowsill 指窗台底板，擦拭至透明（transparent）的对象只能是玻璃 windowpane。",
            cn: "工人擦拭着窗户玻璃，直到它完全干净透明。",
            jp: "作業員は窓ガラス（windowpane）が完全に清潔で透明になるまで拭き上げました。"
        }
    },
    {
        id: 7,
        target: "awning",
        category: "简单",
        stem: "Outdoor diners sought shade under the retractable ________ during the bright afternoon.",
        options: ["awning", "curb", "wheelbarrow", "paddle"],
        correct: "awning",
        explanations: {
            guide: "户外遮阳设施名词。under the retractable ________（在可伸缩的……下方）寻找阴凉，选 awning（遮阳篷/雨棚）。",
            family: "awning (n.遮阳篷/雨棚) | curb (n.路缘) | wheelbarrow (n.独轮车) | paddle (n.桨)。",
            details: "retractable awning 意为可伸缩遮阳篷。curb（路缘）、wheelbarrow（独轮车）均无遮阳功能。",
            cn: "在明亮的下午，户外用餐者在可伸缩遮阳篷下寻找阴凉。",
            jp: "明かるい午後の間、屋外の食事客は可動式の日よけ（awning）の下に日陰を求めました。"
        }
    },
    {
        id: 8,
        target: "plaza",
        category: "简单",
        stem: "Local residents gathered at the central ________ to attend the annual summer food festival.",
        options: ["plaza", "windowpane", "lamppost", "lawn mower"],
        correct: "plaza",
        explanations: {
            guide: "公共开阔场所名词。gathered at the central ________ 结合举行美食节活动，选 plaza（广场/公共广场）。",
            family: "plaza (n.广场) | windowpane (n.窗玻璃) | lamppost (n.路灯柱) | lawn mower (n.割草机)。",
            details: "central plaza 指中央广场。windowpane（窗玻璃）、lamppost（路灯柱）均非群众聚集活动空间。",
            cn: "当地居民聚集在中央广场参加一年一度的夏季美食节。",
            jp: "地元の住民は年次サマーフードフェスティバルに参加するために中央広場（plaza）に集まりました。"
        }
    },
    {
        id: 9,
        target: "windowsill",
        category: "中等",
        stem: "A small potted orchid was placed neatly on the marble ________ inside the office.",
        options: ["windowsill", "windowpane", "canopy", "curb"],
        correct: "windowsill",
        explanations: {
            guide: "摆放位置名词。potted orchid placed neatly on the marble ________ 结合放在大理石材质的平台上面，选 windowsill（窗台）。",
            family: "windowsill (n.窗台) | windowpane (n.窗玻璃) | canopy (n.顶篷) | curb (n.路缘)。",
            details: "marble windowsill 意为大理石窗台。windowpane 指垂直的玻璃面，盆栽无法平稳立置于 windowpane 上。",
            cn: "一盆小巧的兰花整齐地摆放在办公室里的大理石窗台上。",
            jp: "オフィス内のおしゃれな大理石の窓台（windowsill）の上に、小さな鉢植えのランがきれいに置かれていました。"
        }
    },
    {
        id: 10,
        target: "canopy",
        category: "中等",
        stem: "Contractors erected a large canvas ________ over the outdoor stage to protect speakers from rain.",
        options: ["canopy", "awning", "lamppost", "paddle"],
        correct: "canopy",
        explanations: {
            guide: "搭建搭盖设施名词。erected a large canvas ________ over the outdoor stage 选 canopy（遮篷/天盖/顶篷）。",
            family: "canopy (n.遮篷/顶篷) | awning (n.雨棚) | lamppost (n.路灯柱) | paddle (n.桨)。",
            details: "canvas canopy 指帆布顶篷/遮篷。awning 多特指附着于建筑物墙面延伸出的遮阳篷，在独立舞台上方搭建的选 canopy。",
            cn: "承包商在户外舞台上方搭建了一个大型帆布顶篷，以保护发言人免受雨淋。",
            jp: "請負業者はスピーカーを雨から守るため、屋外ステージの上に大きなキャンバス製キャノピー（canopy）を設営しました。"
        }
    },
    {
        id: 11,
        target: "paddle",
        category: "中等",
        stem: "Tourists were spotted ________ quietly across the calm waters of the lake.",
        options: ["paddling", "paddle", "curbing", "paving"],
        correct: "paddling",
        explanations: {
            guide: "观察动词+现在分词。were spotted ________ 表达被看到正在“划桨”穿过湖面，选 paddling。",
            family: "paddling (v-ing划桨) | paddle (v./n.) | curbing (v-ing控制) | paving (v-ing铺路)。",
            details: "were spotted paddling 意为被发现正在划桨。paddle 是动词原形，不能作分词补足语。",
            cn: "有人看到游客们正划着桨安静地穿过平静的湖面。",
            jp: "観光客が静かな湖面を穏やかに漕いでいる（paddling）のが目撃されました。"
        }
    },
    {
        id: 12,
        target: "curb",
        category: "中等",
        stem: "The chief financial officer introduced new strategic measures to ________ unnecessary corporate expenses.",
        options: ["curb", "curbing", "wheelbarrow", "lawn mower"],
        correct: "curb",
        explanations: {
            guide: "商务一词多义与不定式。to 后面接动词原形，表达“遏制/控制”不必要的公司开支，选 curb。",
            family: "curb (v.遏制/控制/n.路缘) | curbing (n./v-ing) | wheelbarrow (n.手推车) | lawn mower (n.割草机)。",
            details: "measures to curb expenses 属于托业 Part 5 经典搭配，意为控制开支的措施。curbing 为分词，不能跟在 to 后作不定式。",
            cn: "首席财务官引入了新的战略措施，以遏制不必要的公司开支。",
            jp: "最高財務責任者（CFO）は、不必要な企業の経費を抑制する（curb）ための新しい戦略的施策を導入しました。"
        }
    },
    {
        id: 13,
        target: "wheelbarrow",
        category: "困难",
        stem: "The landscapers used a heavy-duty ________ to haul heavy rocks to the garden pond.",
        options: ["wheelbarrow", "lawn mower", "windowsill", "plaza"],
        correct: "wheelbarrow",
        explanations: {
            guide: "园艺工程运输装备。haul heavy rocks（搬运重石块）使用的重型工具选 wheelbarrow（独轮手推车）。",
            family: "wheelbarrow (n.独轮车) | lawn mower (n.割草机) | windowsill (n.窗台) | plaza (n.广场)。",
            details: "heavy-duty wheelbarrow 意为重型独轮手推车。lawn mower 用于切草，无法承载拖运大石块。",
            cn: "园艺师们使用重型独轮手推车将重石块拖运到花园池塘边。",
            jp: "造園家たちは庭の池に重い岩を運ぶために、頑丈な一輪車（wheelbarrow）を使用しました。"
        }
    },
    {
        id: 14,
        target: "lawn mower",
        category: "困难",
        stem: "To ensure safety, operators must check the blades of commercial ________ before cutting thick turf.",
        options: ["lawnmowers", "lawn mower", "awning", "canopy"],
        correct: "lawnmowers",
        explanations: {
            guide: "机械复数泛指考点。commercial ________ 泛指“商用割草机”，且紧跟在复数概念后，选用复数形式 lawnmowers（或 lawn mowers）。",
            family: "lawnmowers (n.复数割草机) | lawn mower (n.单数) | awning (n.雨棚) | canopy (n.顶篷)。",
            details: "check the blades of commercial lawnmowers 指检查商用割草机的刃口。lawnmower 可单词可分词拼写，此处选用复数 lawnmowers。",
            cn: "为了确保安全，操作人员在切割厚草皮之前必须检查商用割草机的刀片。",
            jp: "安全を確保するため、オペレーターは厚い芝生を刈る前に商用芝刈り機（lawnmowers）の刃を点検しなければなりません。"
        }
    },
    {
        id: 15,
        target: "awning",
        category: "困难",
        stem: "Storefront ________ need to be inspected regularly to prevent fabric tearing during severe autumn windstorms.",
        options: ["awnings", "awning", "canopies", "curbs"],
        correct: "awnings",
        explanations: {
            guide: "临街建筑物配件复数考点。Storefront ________ 搭配动词原形 need，主语须用复数，选 awnings（沿街遮阳篷/雨棚）。",
            family: "awnings (n.复数雨棚) | awning (n.单数) | canopies (n.顶篷复数) | curbs (n.路缘复数)。",
            details: "Storefront awnings 指沿街店铺的雨棚。Storefront 修饰 awnings 时，因为谓语是 need，主语必须是复数 awnings。",
            cn: "沿街店铺的遮阳篷需要定期检查，以防止在强烈的秋季风暴中布料撕裂。",
            jp: "店頭の日よけ（awnings）は、激しい秋の暴風雨の際に生地が破れるのを防ぐため、定期的に点検する必要があります。"
        }
    },
    {
        id: 16,
        target: "windowpane",
        category: "困难",
        stem: "Custom double-glazed ________ were installed throughout the high-rise office building for thermal insulation.",
        options: ["windowpanes", "windowpane", "windowsills", "lampposts"],
        correct: "windowpanes",
        explanations: {
            guide: "建材复数名词考点。double-glazed ________（双层玻璃的……）搭配谓语 were installed，主语用复数 windowpanes（窗户玻璃）。",
            family: "windowpanes (n.复数窗玻璃) | windowpane (n.单数) | windowsills (n.窗台复数) | lampposts (n.路灯柱复数)。",
            details: "double-glazed windowpanes 意为双层隔热窗玻璃。windowsills 是窗台底座，绝热玻璃材质（glazed）修饰的对象是 windowpanes。",
            cn: "高层办公大楼全楼安装了定制的双层隔热窗玻璃，以起到保温作用。",
            jp: "断熱のために、高層オフィスビル全体に特注の複層ガラス（windowpanes）が取り付けられました。"
        }
    },
    {
        id: 17,
        target: "canopy",
        category: "困难",
        stem: "In tropical rainforest regions, the dense forest ________ prevents direct sunlight from reaching the ground level.",
        options: ["canopy", "awning", "plaza", "wheelbarrow"],
        correct: "canopy",
        explanations: {
            guide: "自然地理高阶术语。forest ________ 属于生态与自然地理专属词汇，意为“林冠/树冠层”，选 canopy。",
            family: "canopy (n.树冠/顶篷) | awning (n.遮阳篷) | plaza (n.广场) | wheelbarrow (n.手推车)。",
            details: "forest canopy 专指森林树冠遮蔽层。awning 指人工建筑物上挂的雨棚，不用于描述森林自然结构。",
            cn: "在热带雨林地区，茂密的森林树冠阻挡了阳光直接照射到地面。",
            jp: "熱帯雨林地域では、密林の樹冠（canopy）が直射日光が地面に達するのを防いでいます。"
        }
    },
    {
        id: 18,
        target: "plaza",
        category: "困难",
        stem: "The urban development agency plans to construct a multi-story commercial shopping ________ downtown.",
        options: ["plaza", "windowpane", "lamppost", "curb"],
        correct: "plaza",
        explanations: {
            guide: "商业地产专属名词。commercial shopping ________ 属于托业商业高频词组，意为“商业购物广场/购物中心”，选 plaza。",
            family: "plaza (n.购物广场/商业广场) | windowpane (n.窗玻璃) | lamppost (n.路灯柱) | curb (n.路缘)。",
            details: "shopping plaza 意为购物广场。windowpane（窗玻璃）、curb（路缘）均无法作为“多层商业（multi-story commercial）”开发项目的主体设施。",
            cn: "城市开发机构计划在市中心建设一座多层商业购物广场。",
            jp: "都市開発公社は、ダウンタウンに多層階の商用ショッピングプラザ（plaza）を建設することを計画しています。"
        }
    }
];