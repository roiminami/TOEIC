// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data101-110.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "dig",
        pos: "動",
        ipa: "/dɪɡ/",
        cn: "挖掘，挖洞",
        jp: "掘る、掘削する",
        family: "digging / dug / digger",
        tips: "Part 1 施工与园艺高频：digging a hole/trench（挖洞/沟）或 digging into the soil（挖土）。",
        desc: "He is digging a hole."
    },
    {
        word: "lean",
        pos: "動",
        ipa: "/liːn/",
        cn: "倾斜，依靠，倚靠",
        jp: "寄りかかる、傾く",
        family: "leaning / leaned / leant",
        tips: "Part 1 姿态与物体状态高频：leaning against a wall/railing（靠在墙上/栏杆上）或 leaning over a counter（俯身在柜台上）。",
        desc: "She is leaning on the rail."
    },
    {
        word: "patio",
        pos: "名",
        ipa: "/ˈpætioʊ/",
        cn: "露台，天井，露天庭院",
        jp: "パティオ、中庭、テラス",
        family: "patio table / patio furniture",
        tips: "Part 1 户外餐饮与建筑设施：patio furniture（露台家具）或 sitting on the patio（坐在露台上）。",
        desc: "They dine on the patio."
    },
    {
        word: "unoccupied",
        pos: "形",
        ipa: "/ˌʌnˈɑːkjupaɪd/",
        cn: "空闲的，未被占用的",
        jp: "空いている、占有されていない",
        family: "occupy / occupant / occupation / occupied",
        tips: "Part 1 状态描述高频：the seats are unoccupied（座位是空着的）。与 vacant/empty 同义，与 occupied 互为反义词。",
        desc: "The seats are unoccupied."
    },
    {
        word: "rug",
        pos: "名",
        ipa: "/rʌɡ/",
        cn: "小地毯，垫子",
        jp: "ラグ、敷物",
        family: "carpet / mat",
        tips: "Part 1 室内家具描写高频：a rug on the floor（地板上的小地毯）。注意与 carpet（铺满全屋的大地毯）的区别。",
        desc: "A rug is on the floor."
    },
    {
        word: "broom",
        pos: "名",
        ipa: "/bruːm/",
        cn: "扫帚",
        jp: "ほうき",
        family: "sweep / sweeper",
        tips: "Part 1 清洁工具高频：holding a broom（拿着扫帚）或 sweeping with a broom（用扫帚扫地）。",
        desc: "She sweeps with a broom."
    },
    {
        word: "microscope",
        pos: "名",
        ipa: "/ˈmaɪkrəskoʊp/",
        cn: "显微镜",
        jp: "顕微鏡",
        family: "microscopic / microscopy",
        tips: "Part 1 实验室场景高频：looking through a microscope（透过显微镜观察）。",
        desc: "He looks into a microscope."
    },
    {
        word: "skyscraper",
        pos: "名",
        ipa: "/ˈskaɪskreɪpər/",
        cn: "摩天大楼",
        jp: "超高層ビル",
        family: "skyline / high-rise / building",
        tips: "Part 1 城市景观高频：skyscrapers lining the street（街边高楼林立）或 tall skyscraper（高耸的摩天大楼）。",
        desc: "The skyscraper is very tall."
    },
    {
        word: "rake",
        pos: "名/動",
        ipa: "/reɪk/",
        cn: "耙子；用耙子耙（叶子/土）",
        jp: "熊手、レーキ；（熊手で）集める",
        family: "raking / raked",
        tips: "Part 1 庭院维护高频：raking leaves（耙树叶）或 holding a rake（拿着耙子）。",
        desc: "He is raking the leaves."
    },
    {
        word: "utensil",
        pos: "名",
        ipa: "/juːˈtensl/",
        cn: "用具，器具（尤指厨具）",
        jp: "調理器具、用具",
        family: "kitchen utensil / cooking utensil",
        tips: "Part 1 厨房餐饮场景高频：kitchen utensils（厨房用具）或 utensils hanging on the rack（用具挂在架上）。",
        desc: "Utensils are on the rack."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "lean",
        category: "简单",
        stem: "The construction worker is ________ against the wooden railing while talking to his colleague.",
        options: ["leaning", "lean", "digging", "patio"],
        correct: "leaning",
        explanations: {
            guide: "动词分词与姿态考点。is 后面接现在分词构进行时，结合 against the wooden railing（靠着木栏杆），选 leaning。",
            family: "leaning (v-ing/adj.倾斜的/靠着的) | lean (v.靠/倾斜) | digging (v-ing挖掘) | patio (n.露台)。",
            details: "is leaning against 意为正靠在……上。lean 是原形动词，不能与 is 直接构成进行时。",
            cn: "建筑工人在与同事交谈时靠在木栏杆上。",
            jp: "建設作業員は同僚と話しながら木製の手すりに寄りかかって（leaning）います。"
        }
    },
    {
        id: 2,
        target: "unoccupied",
        category: "简单",
        stem: "All the seats in the waiting room are currently ________, so visitors may sit anywhere.",
        options: ["unoccupied", "occupy", "skyscraper", "broom"],
        correct: "unoccupied",
        explanations: {
            guide: "表语形容词辨析。系动词 are 后面接形容词，结合后半句“访客可以随便坐”，表达座位“未被占用的/空着的”，选 unoccupied。",
            family: "unoccupied (adj.空闲的/未被占用的) | occupy (v.占用) | skyscraper (n.摩天大楼) | broom (n.扫帚)。",
            details: "are currently unoccupied 指目前都是空着的。occupy 是动词，不能在系动词 are 后面充当表语形容词。",
            cn: "候诊室里的所有座位目前都空着，因此访客可以坐在任何地方。",
            jp: "待合室のすべての席は現在空いて（unoccupied）いるため、来客はどこにでも座ることができます。"
        }
    },
    {
        id: 3,
        target: "microscope",
        category: "简单",
        stem: "The researcher looked through the ________ to examine the biological tissue samples.",
        options: ["microscope", "microscopic", "rake", "rug"],
        correct: "microscope",
        explanations: {
            guide: "实验室器材名词。looked through the ________ 结合观察生物组织样本，选仪器名词 microscope（显微镜）。",
            family: "microscope (n.显微镜) | microscopic (adj.微观的/极小的) | rake (n.耙子) | rug (n.小地毯)。",
            details: "looked through the microscope 指透过显微镜观察。microscopic 是形容词，不能作介词 through 的宾语。",
            cn: "研究人员透过显微镜观察生物组织样本。",
            jp: "研究者は生物組織のサンプルを検査するために顕微鏡（microscope）を覗き込みました。"
        }
    },
    {
        id: 4,
        target: "broom",
        category: "简单",
        stem: "The custodian grabbed a ________ from the closet to sweep up the dirt on the hallway floor.",
        options: ["broom", "utensil", "patio", "lean"],
        correct: "broom",
        explanations: {
            guide: "清洁工具名词。搭配 sweep up the dirt（打扫灰尘/泥土），使用的工具选 broom（扫帚）。",
            family: "broom (n.扫帚) | utensil (n.用具) | patio (n.露台) | lean (v.靠)。",
            details: "grabbed a broom 指拿了一把扫帚。utensil（用具/厨具）没有 broom 在打扫场景中精准。",
            cn: "管理员从柜子里拿了一把扫帚，清扫走廊地板上的泥土。",
            jp: "管理人（清掃員）は廊下の床の汚れを掃除するために、クローゼットからほうき（broom）を取り出しました。"
        }
    },
    {
        id: 5,
        target: "skyscraper",
        category: "简单",
        stem: "Construction on the new seventy-story ________ is expected to be completed by next fall.",
        options: ["skyscraper", "skyline", "rug", "rake"],
        correct: "skyscraper",
        explanations: {
            guide: "建筑物名词辨析。seventy-story（70层的）修饰大型建筑，选 skyscraper（摩天大楼）。",
            family: "skyscraper (n.摩天大楼) | skyline (n.天际线) | rug (n.地毯) | rake (n.耙子)。",
            details: "seventy-story skyscraper 意为70层高的摩天大楼。skyline 指天际线整体轮廓，非具体的建筑物实体。",
            cn: "新建的 70 层摩天大楼预计将于明年秋天完工。",
            jp: "新しい70階建ての超高層ビル（skyscraper）の建設は、来年の秋までに完了する予定です。"
        }
    },
    {
        id: 6,
        target: "patio",
        category: "简单",
        stem: "Restaurant guests enjoyed their afternoon tea on the outdoor ________ overlooking the garden.",
        options: ["patio", "unoccupied", "dig", "microscope"],
        correct: "patio",
        explanations: {
            guide: "户外建筑设施名词。outdoor ________ 结合喝下午茶和俯瞰花园的语境，选 patio（露台/天井/露天庭院）。",
            family: "patio (n.露台/庭院) | unoccupied (adj.空置的) | dig (v.挖) | microscope (n.显微镜)。",
            details: "outdoor patio 意为户外露台。unoccupied 为形容词，不能在形容词 outdoor 后面作名词中心语。",
            cn: "餐厅宾客在俯瞰花园的户外露台上享用下午茶。",
            jp: "レストランの客は、庭園を見渡す屋外パティオ（patio）で午後の紅茶を楽しみました。"
        }
    },
    {
        id: 7,
        target: "dig",
        category: "中等",
        stem: "Construction workers used heavy machinery to ________ a deep trench for the new pipeline.",
        options: ["dig", "digging", "lean", "rake"],
        correct: "dig",
        explanations: {
            guide: "动词不定式考点。used heavy machinery to 后面接动词原形，表达“挖掘”一条深沟，选 dig。",
            family: "dig (v.挖掘) | digging (v-ing/n.) | lean (v.依靠) | rake (v.耙)。",
            details: "to dig a deep trench 意为挖掘深沟。digging 是分词形式，不能置于不定式符号 to 后面。",
            cn: "建筑工人使用重型机械为新管道挖掘了一条深沟。",
            jp: "建設作業員は新しいパイプラインのために深い溝を掘る（dig）ために重機を使用しました。"
        }
    },
    {
        id: 8,
        target: "rug",
        category: "中等",
        stem: "A decorative woolen ________ was laid under the coffee table in the executive office lobby.",
        options: ["rug", "unoccupied", "utensil", "broom"],
        correct: "rug",
        explanations: {
            guide: "室内织物家具名词。woolen ________（羊毛的……）铺在茶几下方（laid under the coffee table），选 rug（小地毯/垫子）。",
            family: "rug (n.小地毯/垫子) | unoccupied (adj.未被占用的) | utensil (n.用具) | broom (n.扫帚)。",
            details: "woolen rug 指羊毛地毯。utensil（用具）、broom（扫帚）均不符合放置在茶几下方的家具布置特征。",
            cn: "行政办公室大堂的茶几下方铺着一块装饰性的羊毛小地毯。",
            jp: "役員オフィスロビーのコーヒーテーブルの下に、装飾的なウール製ラグ（rug）が敷かれていました。"
        }
    },
    {
        id: 9,
        target: "rake",
        category: "中等",
        stem: "Landscapers were assigned to ________ up the dry autumn leaves scattered across the park grass.",
        options: ["rake", "raking", "dig", "lean"],
        correct: "rake",
        explanations: {
            guide: "动词短语与不定式。were assigned to 后面接动词原形，结合 up dry leaves（清理干树叶），选 rake（用耙子耙/清理）。",
            family: "rake (v.用耙子耙/n.耙子) | raking (v-ing) | dig (v.挖掘) | lean (v.靠)。",
            details: "rake up leaves 是园艺场景固定短语，意为把树叶耙成堆。raking 为分词，不能跟随在不定式符号 to 后面。",
            cn: "园艺工人被派去用耙子耙集散落在公园草坪上的干秋叶。",
            jp: "造園業者は、公園の芝生に散らばった乾いた秋の落ち葉を掻き集める（rake）よう割り当てられました。"
        }
    },
    {
        id: 10,
        target: "utensil",
        category: "中等",
        stem: "Chef knives and other metal kitchen ________ should be cleaned immediately after preparing seafood.",
        options: ["utensils", "utensil", "skyscrapers", "brooms"],
        correct: "utensils",
        explanations: {
            guide: "复数名词考点。other 后面接复数名词，结合 metal kitchen（金属厨房），选 utensils（器具/用具）。",
            family: "utensils (n.复数用具) | utensil (n.单数用具) | skyscrapers (n.摩天大楼) | brooms (n.扫帚)。",
            details: "kitchen utensils 指厨房用具。other 要求后接复数可数名词 utensils，而非单数 utensil。",
            cn: "准备完海鲜后，厨师刀和其他金属厨房用具应立即清洗。",
            jp: "シーフードを調理した後は、シェフナイフやその他の金属製調理器具（utensils）をすぐに洗浄する必要があります。"
        }
    },
    {
        id: 11,
        target: "unoccupied",
        category: "中等",
        stem: "The hotel manager confirmed that several executive suites remain ________ for the upcoming weekend.",
        options: ["unoccupied", "occupied", "patio", "microscope"],
        correct: "unoccupied",
        explanations: {
            guide: "表语形容词语义辨析。remain 后面接形容词作表语，在订房与空房管理语境中表达房间“未被预订/空闲的”，选 unoccupied。",
            family: "unoccupied (adj.未被占用的/空闲的) | occupied (adj.被占用的) | patio (n.露台) | microscope (n.显微镜)。",
            details: "remain unoccupied 意为保持空房状态。patio（露台）、microscope（显微镜）均非形容词。",
            cn: "酒店经理确认有几间行政套房在即将到来的周末依然空置。",
            jp: "ホテルの支配人は、今週末のいくつかのエグゼクティブスィートが空室の（unoccupied）ままであることを確認しました。"
        }
    },
    {
        id: 12,
        target: "lean",
        category: "中等",
        stem: "The painter placed the extension ladder so that it would ________ securely against the exterior wall.",
        options: ["lean", "leaning", "dig", "rake"],
        correct: "lean",
        explanations: {
            guide: "情态动词后的动词原形。would 后面接动词原形，结合 against the exterior wall（靠在外墙上），选 lean（依靠/斜靠）。",
            family: "lean (v.依靠/斜靠) | leaning (v-ing) | dig (v.挖掘) | rake (v.耙)。",
            details: "would lean securely 指能够安全地斜靠着。leaning 为分词形式，不能跟在情态动词 would 之后。",
            cn: "画家放置了伸缩梯，使其能够安全地靠在外墙上。",
            jp: "塗装工は、伸びるはしごが外壁に安全に寄りかかる（lean）ように配置しました。"
        }
    },
    {
        id: 13,
        target: "dig",
        category: "困难",
        stem: "The archaeological crew is currently ________ for ancient artifacts near the historic castle ruins.",
        options: ["digging", "dug", "leaning", "raking"],
        correct: "digging",
        explanations: {
            guide: "考古场景动词分词与搭配。is currently 后面接现在分词，结合 for ancient artifacts（搜寻古文物），选 digging（发掘/挖掘）。",
            family: "digging (v-ing发掘/挖掘) | dug (v-ed) | leaning (v-ing倾斜) | raking (v-ing耙集)。",
            details: "digging for artifacts 是考古场景固定搭配，意为发掘/挖掘文物。dug 为过去式/过去分词，不能与 is currently 构成现在进行时。",
            cn: "考古队目前正在历史城堡遗址附近发掘古代文物。",
            jp: "考古学チームは現在、歴史的な城の遺跡の近くで古代の遺物を発掘して（digging）います。"
        }
    },
    {
        id: 14,
        target: "patio",
        category: "困难",
        stem: "Property developers decided to furnish the residential balcony with durable ________ furniture.",
        options: ["patio", "unoccupied", "skyscraper", "utensil"],
        correct: "patio",
        explanations: {
            guide: "前置定语名词考点。patio furniture 属于家居与地产固定词组，意为“露台/庭院家具”，选 patio 作定语修饰 furniture。",
            family: "patio (n.露台/庭院) | unoccupied (adj.空置的) | skyscraper (n.摩天大楼) | utensil (n.用具)。",
            details: "durable patio furniture 指耐用的露台家具。unoccupied（未被占用的）修饰 furniture 逻辑不通。",
            cn: "房地产开发商决定为住宅阳台配备耐用的露台家具。",
            jp: "不動産開発業者は、住宅のバルコニーに耐久性のあるパティオ（patio）用家具を備え付けることに決めました。"
        }
    },
    {
        id: 15,
        target: "microscope",
        category: "困难",
        stem: "The laboratory director ordered new ________ equipment to enhance the precision of medical tests.",
        options: ["microscopy", "microscope", "broom", "rug"],
        correct: "microscopy",
        explanations: {
            guide: "高阶同源名词/形容词修饰。microscopy equipment 指“显微技术设备/显微镜检设备”，选专有名词 microscopy 作定语。",
            family: "microscopy (n.显微镜检查/显微技术) | microscope (n.显微镜) | broom (n.扫帚) | rug (n.地毯)。",
            details: "microscopy equipment 专指显微技术设备。microscope 偏向指单台显微镜，在修饰抽象的装备体系 equipment 时使用 microscopy 更符合实验室采购规范。",
            cn: "实验室主任订购了新的显微镜检设备，以提高医学检测的精准度。",
            jp: "研究室の所長は、医療検査の精度を高めるために新しい顕微鏡（microscopy）設備を発注しました。"
        }
    },
    {
        id: 16,
        target: "unoccupied",
        category: "困难",
        stem: "Due to the economic downturn, the commercial building suffered from a high rate of ________ offices.",
        options: ["unoccupied", "occupant", "leaning", "digging"],
        correct: "unoccupied",
        explanations: {
            guide: "商业地产形容词考点。a high rate of ________ offices 表达高“空置”办公室比例，选形容词 unoccupied。",
            family: "unoccupied (adj.空置的) | occupant (n.居住者/占用者) | leaning (v-ing/adj.倾斜的) | digging (v-ing挖掘)。",
            details: "unoccupied offices 意为未出租/空置的办公室。occupant 为名词（住户/租户），不能直接修饰复数名词 offices。",
            cn: "由于经济低迷，该商业大楼面临着极高的办公室空置率。",
            jp: "景気後退のため、その商用ビルは未入居の（unoccupied）オフィスの高い割合に悩まされました。"
        }
    },
    {
        id: 17,
        target: "rake",
        category: "困难",
        stem: "Maintenance staff gathered all the lawn debris into a single pile using a long-handled garden ________.",
        options: ["rake", "raking", "broom", "utensil"],
        correct: "rake",
        explanations: {
            guide: "园艺专用工具名词辨析。long-handled garden ________ 结合将草坪杂物（lawn debris）集中成堆，工具选 garden rake（园艺耙子）。",
            family: "rake (n.耙子) | raking (n.耙树叶动作) | broom (n.扫帚) | utensil (n.用具)。",
            details: "a long-handled garden rake 意为长柄园艺耙。broom（扫帚）用于清扫硬质路面灰尘，清理草坪碎屑/杂物专用的长柄工具为 rake。",
            cn: "维护人员用一把长柄园艺耙将所有草坪杂物堆成一堆。",
            jp: "メンテナンススタッフは、柄の長いガーデンレーキ（rake）を使用して、すべての芝生のくずを1つの山に集めました。"
        }
    },
    {
        id: 18,
        target: "skyscraper",
        category: "困难",
        stem: "Urban planning regulations were updated to restrict the height of future ________ developments near the airport.",
        options: ["skyscraper", "skyline", "microscope", "patio"],
        correct: "skyscraper",
        explanations: {
            guide: "高阶城市规划复合名词。restrict the height of future ________ developments 表达限制未来“摩天大楼”开发项目的高度，选 skyscraper。",
            family: "skyscraper (n.摩天大楼) | skyline (n.天际线) | microscope (n.显微镜) | patio (n.露台)。",
            details: "skyscraper developments 意为摩天大楼开发项目。skyline 是“天际线”视觉效果，无法作为有建设高度限制的具体“开发项目（developments）”。",
            cn: "城市规划法规进行了更新，以限制机场附近未来摩天大楼开发项目的高度。",
            jp: "空港近くの将来の超高層ビル（skyscraper）開発の高さを制限するために、都市計画規制が更新されました。"
        }
    }
];