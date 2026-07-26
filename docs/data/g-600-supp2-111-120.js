// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data91-100.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "couch",
        pos: "名",
        ipa: "/kaʊtʃ/",
        cn: "长沙发",
        jp: "ソファー、長椅子",
        family: "sofa / settee / armchair",
        tips: "Part 1 休息室与酒店大堂高频，常考 sitting on a couch（坐在沙发上）或 lying on a couch（躺在沙发上）。",
        desc: "She is sitting on the couch."
    },
    {
        word: "lap",
        pos: "名",
        ipa: "/læp/",
        cn: "大腿部，膝上",
        jp: "膝（座った時の腿）、膝上",
        family: "laptop / lapdog",
        tips: "Part 1 姿态与物品放置高频：holding a bag on her lap（在腿上拿着包）或 resting hands on his lap（把双手放在大腿上）。",
        desc: "The laptop is on her lap."
    },
    {
        word: "laptop",
        pos: "名",
        ipa: "/ˈlæptɑːp/",
        cn: "笔记本电脑",
        jp: "ノートパソコン",
        family: "lap / computer / notebook",
        tips: "Part 1/3/5 办公全场景极高频，常考 working on a laptop（用笔记本电脑工作）或 typing on a laptop（在笔记本上打字）。",
        desc: "He is working on a laptop."
    },
    {
        word: "cashier",
        pos: "名",
        ipa: "/kæˈʃɪr/",
        cn: "收银员",
        jp: "レジ係、会計係",
        family: "cash / cash register",
        tips: "Part 1 零售与结账场景高频，常考 standing behind the counter（站在柜台后）或 handing money to the cashier（把钱递给收银员）。",
        desc: "The cashier is scanning items."
    },
    {
        word: "crouch",
        pos: "動",
        ipa: "/kraʊtʃ/",
        cn: "蹲下，蹲伏",
        jp: "かがむ、しゃがむ",
        family: "crouching / crouched",
        tips: "Part 1 人物身体姿态极高频：crouching down to inspect（蹲下检查）或 crouching by a plant（蹲在植物旁）。",
        desc: "He is crouching on the ground."
    },
    {
        word: "trim",
        pos: "動/形",
        ipa: "/trɪm/",
        cn: "修剪，整修；整洁的",
        jp: "剪定する、整える；整齐的",
        family: "trimming / trimmed / trimmer",
        tips: "Part 1 园艺修剪与理发高频，如 trimming the hedge（修剪树篱）或 trimming tree branches（修剪树枝）。",
        desc: "He is trimming the bushes."
    },
    {
        word: "pave",
        pos: "動",
        ipa: "/peɪv/",
        cn: "铺设（路面）",
        jp: "舗装する",
        family: "pavement / paving / paved",
        tips: "Part 1 道路施工高频词：paving a walkway/road（铺设步道/道路）；常见分词定语 a paved driveway（铺好的车道）。",
        desc: "Workers are paving the road."
    },
    {
        word: "driveway",
        pos: "名",
        ipa: "/ˈdraɪvweɪ/",
        cn: "私家车道，车道",
        jp: "（車庫から道路までの）私道、ドライブウェイ",
        family: "drive / way / pathway",
        tips: "住宅与建筑户外高频，常考 parked in the driveway（停在车道上）或 walking down the driveway（沿着车道走下）。",
        desc: "A car is in the driveway."
    },
    {
        word: "stool",
        pos: "名",
        ipa: "/stuːl/",
        cn: "凳子，高脚凳",
        jp: "スツール、背もたれのない椅子",
        family: "barstool / seat / chair",
        tips: "Part 1 实验室与吧台高频：sitting on a wooden stool（坐在木凳上）或 stool at the counter（柜台边的凳子）。",
        desc: "She is sitting on a stool."
    },
    {
        word: "earth",
        pos: "名",
        ipa: "/ɜːrθ/",
        cn: "泥土，土壤；地球",
        jp: "土、土壌；地球",
        family: "earthy / earthquake / earthmoving",
        tips: "园艺施工与自然高频词，如 digging into the earth（挖土）或 rich brown earth（肥沃的黑土）。",
        desc: "Plant roots are in the earth."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "laptop",
        category: "简单",
        stem: "The manager opened his ________ to check the morning emails before the conference.",
        options: ["laptop", "lap", "stool", "couch"],
        correct: "laptop",
        explanations: {
            guide: "办公设备名词。opened his ________ 结合检查早间邮件（check emails），便携电子设备选 laptop（笔记本电脑）。",
            family: "laptop (n.笔记本电脑) | lap (n.大腿/膝上) | stool (n.凳子) | couch (n.长沙发)。",
            details: "opened his laptop 指打开笔记本电脑。lap（大腿部）是人体部位，无法打开（opened）。",
            cn: "经理在会议开始前打开笔记本电脑查看早间邮件。",
            jp: "マネージャーは会議の前に朝のメールを確認するためにノートパソコン（laptop）を開きました。"
        }
    },
    {
        id: 2,
        target: "couch",
        category: "简单",
        stem: "Two guests are sitting comfortably on the leather ________ in the hotel reception area.",
        options: ["couch", "driveway", "cashier", "stool"],
        correct: "couch",
        explanations: {
            guide: "家具名词辨析。sitting comfortably on the leather ________ 搭配酒店接待区，符合两人舒适乘坐的皮革家具选 couch（长沙发）。",
            family: "couch (n.长沙发) | driveway (n.私家车道) | cashier (n.收银员) | stool (n.高脚凳)。",
            details: "leather couch 指皮革沙发。driveway（车道）、cashier（收银员）均非室内供客人乘坐的家具。",
            cn: "两位客人舒适地坐在酒店接待区的皮沙发上。",
            jp: "2人のゲストがホテルの受付エリアにある革製ソファー（couch）に心地よく座っています。"
        }
    },
    {
        id: 3,
        target: "cashier",
        category: "简单",
        stem: "The customer handed her credit card to the ________ to pay for the groceries.",
        options: ["cashier", "couch", "driveway", "crouch"],
        correct: "cashier",
        explanations: {
            guide: "人物职业名词。handed her credit card to the ________ 结合支付杂货费用（pay for groceries），接受付款的职业为 cashier（收银员）。",
            family: "cashier (n.收银员) | couch (n.沙发) | driveway (n.车道) | crouch (v.蹲下)。",
            details: "handed her card to the cashier 意为把信用卡递给收银员。crouch 是动词，不能紧跟在冠词 the 后作为人名或职业。",
            cn: "顾客把信用卡递给收银员支付杂货费用。",
            jp: "お客様は食料品代を支払うためにクレジットカードをレジ係（cashier）に渡しました。"
        }
    },
    {
        id: 4,
        target: "stool",
        category: "简单",
        stem: "The customer chose to sit on a wooden ________ at the kitchen counter.",
        options: ["stool", "couch", "earth", "pave"],
        correct: "stool",
        explanations: {
            guide: "座位家具名词。sit on a wooden ________ at the kitchen counter 搭配厨房柜台，高位座位选 stool（高脚凳/无背椅）。",
            family: "stool (n.高脚凳) | couch (n.沙发) | earth (n.泥土) | pave (v.铺设路面)。",
            details: "a wooden stool 指木质高脚凳，最符合厨房柜台（counter）旁的坐具特征。pave 是动词，不能作 sit on 的宾语。",
            cn: "顾客选择坐在厨房柜台旁的木高脚凳上。",
            jp: "お客様はキッチンカウンターの木製スツール（stool）に座ることを選びました。"
        }
    },
    {
        id: 5,
        target: "driveway",
        category: "简单",
        stem: "The homeowner parked her silver vehicle in the paved ________ in front of the garage.",
        options: ["driveway", "stool", "laptop", "lap"],
        correct: "driveway",
        explanations: {
            guide: "住宅户外设施名词。parked her vehicle in the paved ________ in front of the garage 结合车库前停放车辆，选 driveway（私家车道）。",
            family: "driveway (n.私家车道) | stool (n.凳子) | laptop (n.笔记本电脑) | lap (n.膝上)。",
            details: "paved driveway 意为铺好的车道。stool（凳子）、laptop（笔记本）均非供停放汽车的地方。",
            cn: "房主将她的银色汽车停在车库前铺好的私家车道上。",
            jp: "家の所有者は車庫の前の舗装された私道（driveway）に銀色の車を停めました。"
        }
    },
    {
        id: 6,
        target: "trim",
        category: "简单",
        stem: "The gardener used hedge shears to ________ the overgrown bushes near the entrance.",
        options: ["trim", "trimming", "crouch", "pave"],
        correct: "trim",
        explanations: {
            guide: "动词不定式与动作考点。used hedge shears to 后面接动词原形，表达用修枝剪“修剪”树丛，选 trim。",
            family: "trim (v.修剪) | trimming (n./v-ing) | crouch (v.蹲下) | pave (v.铺路)。",
            details: "used shears to trim 意为用剪刀修剪。trimming 是分词形式，不能放在不定式符号 to 后面作谓语动词原形。",
            cn: "园丁用树篱剪修剪入口附近过度生长的灌木。",
            jp: "庭師は入口近くの伸びすぎた植木を剪定（trim）するために生垣バサミを使用しました。"
        }
    },
    {
        id: 7,
        target: "crouch",
        category: "中等",
        stem: "The technician had to ________ down to inspect the electrical outlets near the floor.",
        options: ["crouch", "crouching", "pave", "trim"],
        correct: "crouch",
        explanations: {
            guide: "情态动词短语。had to 后面接动词原形，结合 down 构成 crouch down，表达“蹲下”检查地面插座，选 crouch。",
            family: "crouch (v.蹲下) | crouching (v-ing) | pave (v.铺设) | trim (v.修剪)。",
            details: "crouch down 是固定短语，意为蹲下身。crouching 为分词形式，不能跟在 had to 之后。",
            cn: "技术人员不得不蹲下身来检查靠近地板的电源插座。",
            jp: "技術者は床近くのコンセントを点検するために、かがむ（crouch）必要がありました。"
        }
    },
    {
        id: 8,
        target: "pave",
        category: "中等",
        stem: "Construction crews will ________ the main street to smooth out the damaged surface.",
        options: ["pave", "pavement", "trim", "crouch"],
        correct: "pave",
        explanations: {
            guide: "将来时态动词原形。will 后面接动词原形，结合对象 main street（主街）与平整受损路面，选 pave（铺设/铺路）。",
            family: "pave (v.铺设路面) | pavement (n.路面/人行道) | trim (v.修剪) | crouch (v.蹲下)。",
            details: "will pave the main street 意为将铺设主街路面。pavement 是名词，不能作 will 后的核心谓语动词。",
            cn: "施工队将铺设主街路面，以平整受损的路面。",
            jp: "建設作業員は損傷した表面を滑らかにするためにメインストリートを舗装（pave）する予定です。"
        }
    },
    {
        id: 9,
        target: "lap",
        category: "中等",
        stem: "During the flight, the passenger rested her notebook on her ________ while taking notes.",
        options: ["lap", "laptop", "stool", "couch"],
        correct: "lap",
        explanations: {
            guide: "人体部位名词辨析。on her ________ 结合在坐姿乘机时将笔记本垫在“大腿/膝上”，选 lap。",
            family: "lap (n.大腿/膝上) | laptop (n.笔记本电脑) | stool (n.凳子) | couch (n.沙发)。",
            details: "rested her notebook on her lap 意为把笔记本放在腿上。laptop 本身已经是电脑，若说 rested her notebook on her laptop 语义重复且不合实际。",
            cn: "在飞行过程中，这名乘客一边做笔记一边把笔记本放在大腿上。",
            jp: "飛行中、乗客はメモを取りながらノートを膝の上（lap）に置きました。"
        }
    },
    {
        id: 10,
        target: "earth",
        category: "中等",
        stem: "The botanist placed the delicate seedling into the rich, damp ________ of the garden.",
        options: ["earth", "earthy", "driveway", "stool"],
        correct: "earth",
        explanations: {
            guide: "自然介质名词。placed the seedling into the rich, damp ________（将幼苗放入肥沃湿润的……中），选 earth（土壤/泥土）。",
            family: "earth (n.泥土/土壤) | earthy (adj.泥土的) | driveway (n.车道) | stool (n.凳子)。",
            details: "rich damp earth 指肥沃湿润的土壤。earthy 是形容词，不能直接被 rich, damp 等形容词修饰作为介词 into 的宾语。",
            cn: "植物学家把娇嫩的幼苗放入花园肥沃湿润的土壤中。",
            jp: "植物学者は繊細な苗を庭の豊かで湿った土壌（earth）の中に植えました。"
        }
    },
    {
        id: 11,
        target: "trim",
        category: "中等",
        stem: "Maintenance workers were scheduled to perform regular ________ of the trees along the boulevard.",
        options: ["trimming", "trim", "paved", "crouched"],
        correct: "trimming",
        explanations: {
            guide: "动名词/派生名词考点。perform regular ________ of the trees 结构中，形容词 regular 后面接名词形式 trimming（修剪）。",
            family: "trimming (n.修剪/裁剪) | trim (v./adj.修剪) | paved (adj.铺好的) | crouched (adj.蹲着的)。",
            details: "perform regular trimming of trees 意为对树木进行定期修剪。paved 和 crouched 均为过去分词，在此处词性不符。",
            cn: "维护工人计划定期对主干道沿线的树木进行修剪。",
            jp: "メンテナンス作業員は、大通り沿いの木々の定期的な剪定（trimming）を行う予定でした。"
        }
    },
    {
        id: 12,
        target: "stool",
        category: "中等",
        stem: "The scientist adjusted the height of her lab ________ before starting the chemical experiment.",
        options: ["stool", "couch", "cashier", "driveway"],
        correct: "stool",
        explanations: {
            guide: "实验室设施复合名词。lab ________ 指“实验室凳子/实验椅”，选 stool。",
            family: "stool (n.凳子) | couch (n.沙发) | cashier (n.收银员) | driveway (n.车道)。",
            details: "lab stool 意为实验室凳子。couch（沙发）通常不用于需要精密操作的化学实验室中。",
            cn: "科学家在开始化学实验前调整了实验凳的高度。",
            jp: "科学者は化学実験を始める前に実験用スツール（stool）の高さを調整しました。"
        }
    },
    {
        id: 13,
        target: "pave",
        category: "困难",
        stem: "The city council recently completed the ________ of the walkway leading to the waterfront park.",
        options: ["paving", "pave", "crouching", "trimming"],
        correct: "paving",
        explanations: {
            guide: "派生名词考点。completed the ________ of the walkway 结构中，在定冠词 the 与介词 of 之间填入动名词/名词 paving（铺设）。",
            family: "paving (n.铺路/铺设工程) | pave (v.铺路) | crouching (n.蹲伏) | trimming (n.修剪)。",
            details: "completed the paving of... 意为完成了……的铺设工程。pave 为动词原形，不能直接跟在定冠词 the 后面。",
            cn: "市议会最近完成了通往滨水公园步道的铺设工作。",
            jp: "市議会は最近、ウォーターフロント公園へ続く歩道の舗装（paving）工事を完了しました。"
        }
    },
    {
        id: 14,
        target: "crouch",
        category: "困难",
        stem: "The plumber was spotted ________ beneath the sink to fix the leaking water pipe.",
        options: ["crouching", "crouch", "trimmed", "paved"],
        correct: "crouching",
        explanations: {
            guide: "观察动词被动语态+现在分词补足语。was spotted ________ 表达被看到正在“蹲在”水槽下，选 crouching。",
            family: "crouching (v-ing/adj.蹲着的) | crouch (v.蹲下) | trimmed (adj.修剪好的) | paved (adj.铺好的)。",
            details: "was spotted crouching 指被看到正蹲着。crouch 为原形动词，不能充当补足主语状态的分词结构。",
            cn: "有人看到水管工蹲在水槽下方修理漏水的水管。",
            jp: "配管工が水漏れしている水道管を修理するためにシンクの下でかがんでいる（crouching）のが見られました。"
        }
    },
    {
        id: 15,
        target: "cashier",
        category: "困难",
        stem: "Retail management implemented new digital software to streamline transactions at the ________ desk.",
        options: ["cashier", "cash", "driveway", "laptop"],
        correct: "cashier",
        explanations: {
            guide: "零售场景复合名词定语。cashier desk 指收银台/结账柜台，用名词 cashier 作前置定语修饰 desk。",
            family: "cashier (n.收银员) | cash (n.现金) | driveway (n.车道) | laptop (n.笔记本电脑)。",
            details: "at the cashier desk 指在收银台。cash desk 虽也有使用，但在 TOEIC 描述结账岗位/柜台的复合词中，cashier desk 专指收银员工作台。",
            cn: "零售管理层引入了新的数字软件，以简化收银台的交易流程。",
            jp: "小売マネジメントは、レジ（cashier）デスクでの取引をスムーズにするために新しいデジタルソフトウェアを導入しました。"
        }
    },
    {
        id: 16,
        target: "driveway",
        category: "困难",
        stem: "Heavy machinery was brought in to repave the residential ________ after the severe winter freezing.",
        options: ["driveway", "pavement", "couch", "stool"],
        correct: "driveway",
        explanations: {
            guide: "住宅建筑与工程名词。residential ________ 指住宅的“私家车道”，选 driveway。",
            family: "driveway (n.私家车道) | pavement (n.路面/人行道) | couch (n.沙发) | stool (n.凳子)。",
            details: "residential driveway 意为住宅私家车道。pavement 通常指公用人行道，在 residential（住宅/住宅区的）修饰下，driveway 更符合私人房产范围内的车道设施概念。",
            cn: "严冬冻融后，重型机械被运来重新铺设住宅区的私家车道。",
            jp: "厳しい冬の凍結の後、住宅の私道（driveway）を再舗装するために重機が運び込まれました。"
        }
    },
    {
        id: 17,
        target: "laptop",
        category: "困难",
        stem: "The sales representative carried a portable ________ computer to demonstrate the new product to clients.",
        options: ["laptop", "lap", "cashier", "earth"],
        correct: "laptop",
        explanations: {
            guide: "复合名词定语。a portable ________ computer 意为“便携式笔记本电脑”，选 laptop。",
            family: "laptop (n.笔记本电脑) | lap (n.大腿/膝上) | cashier (n.收银员) | earth (n.泥土)。",
            details: "laptop computer 属于完整的复合名词表达。lap computer 并非标准商业 IT 表达。",
            cn: "销售代表携带一台便携式笔记本电脑向客户演示新产品。",
            jp: "営業担当者は、クライアントに新商品をデモするためにポータブルノートパソコン（laptop computer）を持参しました。"
        }
    },
    {
        id: 18,
        target: "earth",
        category: "困难",
        stem: "Environmental engineers tested soil samples for heavy metal contaminants before the ________ moving project began.",
        options: ["earth", "earthy", "paving", "trimming"],
        correct: "earth",
        explanations: {
            guide: "工程专属复合名词。earth moving project 属于土木工程高频词汇，意为“土方工程/土石方施工”。",
            family: "earth (n.土/泥土) | earthy (adj.泥土的) | paving (n.铺路) | trimming (n.修剪)。",
            details: "earth moving 专指土方工程/挖土工程。earthy 是形容词，不能与 moving 组成复合名词工程术语。",
            cn: "环境工程师在土方工程开始前对土壤样本进行了重金属污染物检测。",
            jp: "環境エンジニアは、土木（earth moving）プロジェクトが始まる前に、重金属汚染物質の土壌サンプルを検査しました。"
        }
    }
];