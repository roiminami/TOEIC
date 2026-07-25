// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data31-40.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "hammer",
        pos: "名/動",
        ipa: "/ˈhæmər/",
        cn: "锤子，铁锤；锤击",
        jp: "金づち、ハンマー；（金づちで）打つ",
        family: "hammering / hammered",
        tips: "听力 Part 1（图片题）高频词，常考动作 is hammering a nail（正在钉钉子）或 holding a hammer（拿着锤子）。",
        desc: "He is using a hammer."
    },
    {
        word: "fold",
        pos: "動/名",
        ipa: "/foʊld/",
        cn: "折叠，叠放",
        jp: "折りたたむ、たたむ",
        family: "folder / folding / unfold",
        tips: "Part 1 常考折叠动作：folding some clothes（折叠衣服）。衍生词 folder（文件夹）则是 Part 5 办公室场景高频词。",
        desc: "Please fold the paper."
    },
    {
        word: "shelf",
        pos: "名",
        ipa: "/ʃelf/",
        cn: "架子，搁板",
        jp: "棚、シェルフ",
        family: "shelves / shelve / shelving",
        tips: "注意复数形式为 shelves。听力中常考 on the shelf（在架子上）或 stocking the shelves（往架子上摆放货物）。",
        desc: "The books are on the shelf."
    },
    {
        word: "pile",
        pos: "名/動",
        ipa: "/paɪl/",
        cn: "堆，叠；堆积",
        jp: "積み重ね、山；積み上げる",
        family: "piled / piling / pileup",
        tips: "Part 1 极高频词：be piled up（被堆叠起来）、a pile of documents（一堆文件）。",
        desc: "There is a pile of boxes."
    },
    {
        word: "railing",
        pos: "名",
        ipa: "/ˈreɪlɪŋ/",
        cn: "栏杆，扶手",
        jp: "手すり、柵",
        family: "rail / handrail",
        tips: "Part 1 户外与建筑场景高频词，如 hold onto the railing（抓着栏杆）或 lean against the railing（靠在栏杆上）。",
        desc: "She holds the railing."
    },
    {
        word: "sweep",
        pos: "動",
        ipa: "/swiːp/",
        cn: "打扫，清扫",
        jp: "（ほうきで）扫く、清掃する",
        family: "sweeper / sweeping / swept",
        tips: "Part 1 动作题高频：sweeping the street / sweeping the walkway（扫街/扫步道）。过去式和过去分词为 swept。",
        desc: "He is sweeping the floor."
    },
    {
        word: "walkway",
        pos: "名",
        ipa: "/ˈwɔːkweɪ/",
        cn: "步道，人行道",
        jp: "歩道、通路",
        family: "walk / sidewalk / pathway",
        tips: "Part 1 景观与建筑物周边高频词，常与 stroll（散步）、sweep（清扫）或 line（沿…排列）搭配。",
        desc: "They walk along the walkway."
    },
    {
        word: "stock",
        pos: "名/動",
        ipa: "/stɑːk/",
        cn: "库存，股票；进货，存货",
        jp: "在庫、株式；（商品を）仕入れる、並べる",
        family: "stockroom / stockholder / stocking / in stock",
        tips: "商务与零售核心词。在库：in stock / out of stock；动词常考 be stocking items on shelves（正在把货品摆上架子）。",
        desc: "The items are in stock."
    },
    {
        word: "diner",
        pos: "名",
        ipa: "/ˈdaɪnər/",
        cn: "用餐者；小餐馆",
        jp: "食事をする人；（カジュアルな）レストラン、ダイナー",
        family: "dine / dining / dinner",
        tips: "注意与 dinner（晚餐）和 dine（用餐）的区别。diner 既可指在餐厅吃饭的人，也可指美式简餐厅/小餐馆。",
        desc: "The diner is very busy."
    },
    {
        word: "lawn",
        pos: "名",
        ipa: "/lɔːn/",
        cn: "草坪，草地",
        jp: "芝生、芝",
        family: "lawnmower / lawncare",
        tips: "Part 1 庭院维护高频词：mowing the lawn（割草）、lawnmower（割草机）。",
        desc: "He is mowing the lawn."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "shelf",
        category: "简单",
        stem: "The clerk is placing several newly arrived books onto the top ________ in the display area.",
        options: ["shelf", "shelves", "walkway", "lawn"],
        correct: "shelf",
        explanations: {
            guide: "单数名词考点。限定词 top 之后接单数可数名词作介词短语宾语，表示“搁板/架子”，选 shelf。",
            family: "shelf (n.架子) | shelves (n.复数) | walkway (n.步道) | lawn (n.草坪)。",
            details: "the top shelf 指最顶层的架子。shelves 为复数形式，在单数限定词 top 后在此不适用。",
            cn: "店员正把几本新到的书放到展示区最顶层的架子上。",
            jp: "店員は展示エリアの一番上の棚（shelf）に新入荷の本を数冊 me 置き入れています。"
        }
    },
    {
        id: 2,
        target: "lawn",
        category: "简单",
        stem: "The maintenance worker is cutting the green ________ behind the main office building.",
        options: ["lawn", "diner", "railing", "fold"],
        correct: "lawn",
        explanations: {
            guide: "宾语名词辨析。句中动词 cutting 搭配修饰语 green，逻辑宾语为“草坪”，选 lawn。",
            family: "lawn (n.草坪) | diner (n.餐馆/食客) | railing (n.栏杆) | fold (v.折叠)。",
            details: "cutting the lawn 意为割草/修剪草坪。diner（餐馆）、railing（栏杆）、fold（折叠）均不符合 cutting 的动作对象逻辑。",
            cn: "后勤维修人员正在主办公楼后方修剪绿色草坪。",
            jp: "メンテナンス作業員は、メインオフィスビルの裏にある緑の芝生（lawn）を刈っています。"
        }
    },
    {
        id: 3,
        target: "sweep",
        category: "简单",
        stem: "Volunteers gathered this morning to ________ the fallen leaves off the main entrance steps.",
        options: ["sweep", "sweeper", "stock", "pile"],
        correct: "sweep",
        explanations: {
            guide: "不定式动词原形考点。to 后面需要接动词原形，表达“清扫”打落的树叶，选 sweep。",
            family: "sweep (v.清扫) | sweeper (n.清扫工/清扫机) | stock (n./v.库存) | pile (n./v.堆积)。",
            details: "to sweep the leaves 构成完整的动词不定式短语。sweeper 是名词（清扫人/工具），不能用在不定式符号 to 后面。",
            cn: "志愿者们今天早上聚集在一起，清扫主入口台阶上的落叶。",
            jp: "ボランティアたちは今朝集まり、メインエントランスの階段から落ち葉を掃除（sweep）しました。"
        }
    },
    {
        id: 4,
        target: "fold",
        category: "简单",
        stem: "Please ________ the towels neatly before putting them into the linen storage cabinet.",
        options: ["fold", "folder", "lawn", "hammer"],
        correct: "fold",
        explanations: {
            guide: "祈使句动词原形。句首 please 后面需接动词原形，表达“折叠”毛巾的动作，选 fold。",
            family: "fold (v.折叠) | folder (n.文件夹) | lawn (n.草坪) | hammer (n.锤子)。",
            details: "fold the towels 意为“把毛巾叠好”。folder 是名词（文件夹），不能充当祈使句的核心谓语动词。",
            cn: "请将毛巾叠整齐后再放进亚麻布储物柜里。",
            jp: "リネン収納タンスに入れる前に、タオルをきれいに折りたたんで（fold）ください。"
        }
    },
    {
        id: 5,
        target: "railing",
        category: "简单",
        stem: "Pedestrians should hold onto the ________ when walking down the steep icy staircase.",
        options: ["railing", "walkway", "diner", "shelf"],
        correct: "railing",
        explanations: {
            guide: "介词宾语名词考点。hold onto 后面接名词作宾语，结合“陡峭冰冻的楼梯”语境，选 railing（栏杆/扶手）。",
            family: "railing (n.栏杆/扶手) | walkway (n.步道) | diner (n.餐馆) | shelf (n.架子)。",
            details: "hold onto the railing（抓紧扶手/栏杆）是听力与阅读中的高频安全指示短语。walkway（步道）等不符合楼梯握持对象的逻辑。",
            cn: "行人走在陡峭且结冰的楼梯上时，应该抓紧扶手。",
            jp: "歩行者は、凍結した急な階段を下りる際、手すり（railing）につかまる必要があります。"
        }
    },
    {
        id: 6,
        target: "stock",
        category: "简单",
        stem: "The popular electronic item is currently in ________ at all local retail branches.",
        options: ["stock", "stockroom", "sweep", "fold"],
        correct: "stock",
        explanations: {
            guide: "固定介词短语搭配。in stock 属于商业零售高频短语，意为“有现货/有库存”，选 stock。",
            family: "stock (n.库存) | stockroom (n.储藏室) | sweep (v.清扫) | fold (v.折叠)。",
            details: "in stock 与 out of stock（无现货）互为反义词。stockroom 指具体的储藏室空间，不能与介词 in 直接构成“有现货”的固定表述。",
            cn: "这款热门电子产品目前在所有当地零售分店均有现货。",
            jp: "その人気電子商品は、現在すべての地元の小売支店で在庫（in stock）があります。"
        }
    },
    {
        id: 7,
        target: "hammer",
        category: "中等",
        stem: "The experienced carpenter used a specialized ________ to secure the wooden beams together.",
        options: ["hammer", "hammering", "shelf", "walkway"],
        correct: "hammer",
        explanations: {
            guide: "名词中心语辨析。在不定冠词 a 与形容词 specialized 之后，需接单数名词作宾语，表达木工使用的“锤子”，选 hammer。",
            family: "hammer (n.锤子) | hammering (n./v-ing敲击) | shelf (n.架子) | walkway (n.步道)。",
            details: "specialized hammer 意为“专用锤”。hammering 是动名词或分词，在此处作具体工具名称时不符合语法与语义。",
            cn: "经验丰富的木工使用一把专用锤子将木梁固定在一起。",
            jp: "熟練した大工は木製の梁を固定するために専用のハンマー（hammer）を使用しました。"
        }
    },
    {
        id: 8,
        target: "pile",
        category: "中等",
        stem: "There is a neat ________ of documents resting on top of the manager's desk.",
        options: ["pile", "piled", "lawn", "diner"],
        correct: "pile",
        explanations: {
            guide: "量词短语名词考点。a neat ________ of documents 构成固定搭配 a pile of（一堆……），选名词 pile。",
            family: "pile (n.堆) | piled (v-ed堆积) | lawn (n.草坪) | diner (n.食客)。",
            details: "a pile of documents 指一堆文件。piled 为动词过去式或分词，不能在冠词 a 和形容词 neat 后面作名词中心语。",
            cn: "经理的办公桌上整齐地放着一堆文件。",
            jp: "マネージャーのデスクの上には、書類の整然とした山（pile）が置いてあります。"
        }
    },
    {
        id: 9,
        target: "walkway",
        category: "中等",
        stem: "Hotel guests can enjoy a pleasant afternoon stroll along the paved ________ surrounding the garden.",
        options: ["walkway", "walk", "railing", "sweep"],
        correct: "walkway",
        explanations: {
            guide: "复合名词与修饰关系。paved（铺砌好的）后接名词表示“步道/人行道”，选 walkway。",
            family: "walkway (n.步道) | walk (v./n.行走) | railing (n.栏杆) | sweep (v.清扫)。",
            details: "walkway 专指花园或建筑物周围铺设好的散步道或通道。walk 作名词通常指“散步”这一行为，非指具体的道路设施。",
            cn: "酒店客人可以在花园周围铺好的步道上享受愉快的下午散步。",
            jp: "ホテルの敷地内のお客様は、庭園を囲む舗装された歩道（walkway）沿いに心地よい午後の散歩を楽しむことができます。"
        }
    },
    {
        id: 10,
        target: "diner",
        category: "中等",
        stem: "Each ________ at the seaside restaurant was offered a complimentary glass of fresh juice.",
        options: ["diner", "dine", "stock", "folder"],
        correct: "diner",
        explanations: {
            guide: "单数可数名词考点。Each 后面必须接单数可数名词，指海边餐厅的“每位用餐者”，选 diner。",
            family: "diner (n.用餐者/小餐馆) | dine (v.用餐) | stock (n.库存) | folder (n.文件夹)。",
            details: "Each diner 指每一位食客。dine 是动词（用餐），不能在限定词 Each 之后作主语。",
            cn: "海边餐厅的每位用餐者都获赠了一杯免费的鲜榨果汁。",
            jp: "海辺のレストランの各食事客（diner）には、無料の生絞りジュースが1杯提供されました。"
        }
    },
    {
        id: 11,
        target: "stock",
        category: "中等",
        stem: "Store clerks will ________ the grocery items onto the display shelves right after closing time.",
        options: ["stock", "stockholder", "railing", "walkway"],
        correct: "stock",
        explanations: {
            guide: "情态动词后的动词原形。will 后面接动词原形，表达将商品“摆放/进货”到架子上，选动词 stock。",
            family: "stock (v.进货/摆放) | stockholder (n.股东) | railing (n.栏杆) | walkway (n.步道)。",
            details: "stock items onto shelves 是零售业常见短语，表示“上货/补货”。stockholder 意为股东，与谓语动作逻辑不符。",
            cn: "关店后，店员会立即将杂货商品摆放到展示货架上。",
            jp: "閉店後、店員はすぐに食料品を展示棚に陳列（stock）します。"
        }
    },
    {
        id: 12,
        target: "fold",
        category: "中等",
        stem: "All participants were asked to store their training notes in a plastic ________ provided at registration.",
        options: ["folder", "fold", "lawn", "hammer"],
        correct: "folder",
        explanations: {
            guide: "派生名词考点。冠词 a 和形容词 plastic 后面接可数名词单数，指存放笔记的“文件夹”，选 folder。",
            family: "folder (n.文件夹) | fold (v.折叠) | lawn (n.草坪) | hammer (n.锤子)。",
            details: "a plastic folder 指塑料文件夹。fold 是动词（折叠），不能直接被冠词 a 和形容词 plastic 修饰作为具体物品。",
            cn: "所有与会人员都被要求将培训笔记存放在报到时发放的塑料文件夹中。",
            jp: "すべての参加者は、受付で配布されたプラスチック製のファイル（folder）に研修メモを保管するよう求められました。"
        }
    },
    {
        id: 13,
        target: "pile",
        category: "困难",
        stem: "The wooden crates ________ near the loading dock will be transported to the central warehouse tomorrow.",
        options: ["piled", "piling", "lawn", "walkway"],
        correct: "piled",
        explanations: {
            guide: "分词作后置定语。The wooden crates 与 pile 之间是被动关系，需要过去分词 piled 作后置定语，修饰主语 crates。",
            family: "piled (v-ed被堆放的) | piling (v-ing堆放) | lawn (n.草坪) | walkway (n.步道)。",
            details: "The wooden crates piled near the loading dock 相当于 which were piled...。piling 表示主动或进行，与“被堆放”的箱子逻辑不符。",
            cn: "堆放在装卸码头附近的木箱明天将被运往中央仓库。",
            jp: "荷積み場の近くに積み上げられた（piled）木箱は、明日中央倉庫に搬送されます。"
        }
    },
    {
        id: 14,
        target: "sweep",
        category: "困难",
        stem: "The newly implemented corporate policy resulted in ________ changes across all branch offices.",
        options: ["sweeping", "swept", "diner", "railing"],
        correct: "sweeping",
        explanations: {
            guide: "形容词/分词修饰名词考点。sweeping 充当形容词，修饰 changes，意为“彻底的/深远的/范围广的”变更。",
            family: "sweeping (adj.范围广的/彻底的) | swept (v-ed清扫) | diner (n.食客) | railing (n.栏杆)。",
            details: "sweeping changes 是商业与政策场景中的固定高阶搭配。swept 为过去分词，在此处不能作“深远的”这一抽象修饰语。",
            cn: "新实施的公司政策导致所有分公司发生了彻底的改变。",
            jp: "新しい社内施策の導入により、すべての支社で全面的な（sweeping）変更が生じました。"
        }
    },
    {
        id: 15,
        target: "railing",
        category: "困难",
        stem: "Safety inspectors recommended installing an additional protective ________ along the edge of the elevated platform.",
        options: ["railing", "railway", "lawnmower", "stockroom"],
        correct: "railing",
        explanations: {
            guide: "复合与派生名词辨析。protective ________ 指“防护栏杆”，在安全检查语境中选 railing。",
            family: "railing (n.栏杆/扶手) | railway (n.铁路) | lawnmower (n.割草机) | stockroom (n.储藏室)。",
            details: "protective railing 指平台边缘的防护栏杆。railway（铁路）、stockroom（储藏室）在此语境中均为干扰项。",
            cn: "安全检查员建议在高架平台边缘安装额外的防护栏杆。",
            jp: "安全検査官は、高架プラットフォームの端に沿って追加の保護手すり（railing）を設置することを推奨しました。"
        }
    },
    {
        id: 16,
        target: "stock",
        category: "困难",
        stem: "The board of directors called an extraordinary meeting to address the urgent concerns of key ________.",
        options: ["stockholders", "stocking", "walkway", "folding"],
        correct: "stockholders",
        explanations: {
            guide: "高阶商务派生名词。address the concerns of key ________ 表达解决主要“股东”关切的问题，选 stockholders。",
            family: "stockholders (n.股东/复数) | stocking (n.存货/袜) | walkway (n.步道) | folding (adj.可折叠的)。",
            details: "stockholder 相当于 shareholder（股东）。董事会开会应对的是“股东”关切，而不是 stock（库存）或 stocking（装货）。",
            cn: "董事会召开特别会议，以解决主要股东的紧迫关切。",
            jp: "取締役会は、主要な株主（stockholders）の緊急の懸念に対処するために臨時会議を招集しました。"
        }
    },
    {
        id: 17,
        target: "lawn",
        category: "困难",
        stem: "The facility management team hired a commercial contractor to operate the heavy-duty ________ on the field.",
        options: ["lawnmower", "lawn", "shelf", "diner"],
        correct: "lawnmower",
        explanations: {
            guide: "复合名词考点。operate the heavy-duty ________ 指操作重型“割草机”，选 lawnmower。",
            family: "lawnmower (n.割草机) | lawn (n.草坪) | shelf (n.架子) | diner (n.餐馆)。",
            details: "operate 指操作某种机械设备，因此需要填写具体的机械名称 lawnmower。lawn 指草坪本身，不能作为 operate 的机械对象。",
            cn: "设施管理团队聘请了一家商业承包商来操作场地上的重型割草机。",
            jp: "施設管理チームは、敷地内の大型芝刈り機（lawnmower）を操作するために民間業者を配備しました。"
        }
    },
    {
        id: 18,
        target: "shelf",
        category: "困难",
        stem: "The logistics manager ordered extra heavy-duty steel ________ to expand the storage capacity of the depot.",
        options: ["shelving", "shelves", "walkway", "hammering"],
        correct: "shelving",
        explanations: {
            guide: "不可数/集合名词考点。steel ________ 指“钢制架子系统/搁板设施”，用不可数集合名词 shelving。",
            family: "shelving (n.架子设施/集合名词) | shelves (n.架子/复数) | walkway (n.步道) | hammering (n.敲击)。",
            details: "shelving 作不可数名词时指整体的搁板系统（shelving units/system）。在商业采购与工业设施语境中，steel shelving 是标准化专属表达。",
            cn: "物流经理订购了额外的重型钢制货架设施，以扩大仓库的储存能力。",
            jp: "物流マネージャーは、保管場所の容量を拡大するために、追加の頑丈な鋼製棚設備（shelving）を発注しました。"
        }
    }
];