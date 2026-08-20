// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data701-710.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "shoelaces",
        pos: "名",
        ipa: "/ˈʃuːleɪsɪz/",
        cn: "鞋带（复数）",
        jp: "靴ひも（複数）",
        family: "shoelace / lace / lacing",
        tips: "Part 1 照片动作高频：tie one's shoelaces（系鞋带），untied shoelaces（松开的鞋带）。",
        desc: "He stopped to tie his shoelaces."
    },
    {
        word: "descending",
        pos: "動/形",
        ipa: "/dɪˈsendɪŋ/",
        cn: "走下，下降；下行的（descend的现在分词）",
        jp: "（階段や坂を）降りている、下降している",
        family: "descend / descent / descendant",
        tips: "Part 1 & 交通高频：descending the stairs/steps（走下台阶），descending from an aircraft（从飞机舷梯走下）。",
        desc: "Passengers are descending the stairs."
    },
    {
        word: "ramp",
        pos: "名",
        ipa: "/ræmp/",
        cn: "斜坡，坡道",
        jp: "スロープ、傾斜路、ランプ",
        family: "ramps / ramped",
        tips: "Part 1 & 无障碍设施高频：wheelchair ramp（轮椅坡道），loading ramp（装卸坡道），walk up a ramp（走上斜坡）。",
        desc: "A wheelchair ramp is installed."
    },
    {
        word: "handrail",
        pos: "名",
        ipa: "/ˈhændreɪl/",
        cn: "（楼梯等的）扶手，栏杆",
        jp: "手すり、欄干",
        family: "handrails / rail / railing",
        tips: "Part 1 照片细节高频：hold onto the handrail（扶着扶手），a staircase with a metal handrail（装有金属扶手的楼梯）。",
        desc: "Hold the handrail while walking down."
    },
    {
        word: "deserted",
        pos: "形/動",
        ipa: "/dɪˈzɜːrtɪd/",
        cn: "空无一人的，废弃的，荒凉的",
        jp: "人けのない、寂れた、見捨てられた",
        family: "desert / deserting / desertion",
        tips: "Part 1 场景状态高频：a deserted street/hallway/plaza（空无一人的街道/走廊/广场）。",
        desc: "The office hallway was completely deserted."
    },
    {
        word: "patterned",
        pos: "形",
        ipa: "/ˈpætərnd/",
        cn: "有图案的，有花样的",
        jp: "模様のある、柄入りの",
        family: "pattern / patterns / patterning",
        tips: "Part 1 物品特征高频：patterned carpet/wallpaper/fabric（有花纹的地毯/壁纸/织物）。",
        desc: "The room features a patterned carpet."
    },
    {
        word: "duct pipe",
        pos: "名",
        ipa: "/dʌkt paɪp/",
        cn: "导管，风管，通风管道",
        jp: "ダクト管、通気管、配管",
        family: "duct / ductwork / pipe / pipes",
        tips: "Part 1 & 建筑设备高频：overhead duct pipes（头顶上方的通风管道），install ventilation duct pipes（安装通风管道）。",
        desc: "Duct pipes run along the ceiling."
    },
    {
        word: "containers of drinking water",
        pos: "名",
        ipa: "/kənˈteɪnərz əv ˈdrɪŋkɪŋ ˈwɔːtər/",
        cn: "饮用水容器，饮用水桶（复数）",
        jp: "飲料水の容器、給水タンク（複数）",
        family: "container / contain / drinking water",
        tips: "Part 1 & 应急物资高频：stack containers of drinking water（堆放饮用水桶），plastic containers of drinking water（塑料饮用水容器）。",
        desc: "Containers of drinking water were unloaded."
    },
    {
        word: "leaning",
        pos: "動/形",
        ipa: "/ˈliːnɪŋ/",
        cn: "倚靠，倾斜；倾斜的（lean的现在分词）",
        jp: "寄りかかっている、傾いている",
        family: "lean / leaned / leans",
        tips: "Part 1 动作与状态高频：leaning against the wall/counter（靠在墙上/吧台上），leaning over the balcony（倚在阳台上）。",
        desc: "A bicycle is leaning against the wall."
    },
    {
        word: "parasol",
        pos: "名",
        ipa: "/ˈpærəsɔːl/",
        cn: "遮阳伞，大遮阳棚",
        jp: "パラソル、日傘、日よけ傘",
        family: "parasols",
        tips: "Part 1 户外餐饮与休闲高频：patio parasol（庭院遮阳伞），tables shaded by parasols（遮阳伞下的餐桌）。",
        desc: "Guests sat under a patio parasol."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "shoelaces",
        category: "简单",
        stem: "The jogger paused near the park bench to tie his loose ________ before continuing his morning run.",
        options: ["shoelaces", "handrails", "ramps", "parasols"],
        correct: "shoelaces",
        explanations: {
            guide: "日常动作与服装配件名词。tie his loose ________ 结合慢跑者停在长椅旁弯腰系紧，选 shoelaces（鞋带）。",
            family: "shoelaces (n.复数鞋带) | handrails (n.扶手) | ramps (n.坡道) | parasols (n.遮阳伞)。",
            details: "tie shoelaces 属于 Part 1 及日常动作极高频搭配，意为系鞋带。handrails（扶手）、ramps（坡道）均非鞋上可系紧的物件。",
            cn: "慢跑者在公园长椅旁停下，系好松开的鞋带，然后继续进行晨跑。",
            jp: "ジョギングをしていた男性は、朝のランニングを続ける前に、公園のベンチの近くで立ち止まり緩んだ靴ひも（shoelaces）を結びました。"
        }
    },
    {
        id: 2,
        target: "parasol",
        category: "简单",
        stem: "Patrons enjoyed chilled beverages at the outdoor cafe while seated beneath a large patio ________.",
        options: ["parasol", "handrail", "shoelace", "duct pipe"],
        correct: "parasol",
        explanations: {
            guide: "户外餐饮设施名词考点。seated beneath a large patio ________ 结合在露天咖啡馆就座饮冷饮，选 parasol（遮阳伞/遮阳棚）。",
            family: "parasol (n.遮阳伞) | handrail (n.扶手) | shoelace (n.鞋带) | duct pipe (n.风管)。",
            details: "patio parasol 意为露台/庭院大遮阳伞。handrail（扶手）、duct pipe（通风管道）均非室外遮阳设施。",
            cn: "顾客坐在露天咖啡馆的大遮阳伞下，悠闲地享用着冰镇饮品。",
            jp: "利用客は、パティオの大きなパラソル（parasol）の下に座りながら、屋外カフェで冷たい飲み物を楽しみました。"
        }
    },
    {
        id: 3,
        target: "handrail",
        category: "简单",
        stem: "For safety reasons, pedestrians are advised to hold onto the ________ when walking down the icy outdoor stairs.",
        options: ["handrail", "parasol", "shoelace", "duct pipe"],
        correct: "handrail",
        explanations: {
            guide: "楼梯安全设施名词考点。hold onto the ________ when walking down the stairs 结合走下结冰台阶时抓紧支撑物，选 handrail（扶手/栏杆）。",
            family: "handrail (n.扶手/栏杆) | parasol (n.遮阳伞) | shoelace (n.鞋带) | duct pipe (n.通风管)。",
            details: "hold onto the handrail 属于 Part 1 & 安全指示高频短语，意为扶紧楼梯扶手。parasol（遮阳伞）不符合楼梯防跌滑语境。",
            cn: "出于安全考虑，建议行人在走下结冰的室外台阶时抓住扶手。",
            jp: "安全のため、凍結した屋外の階段を降りる際は手すり（handrail）につかまることが推奨されます。"
        }
    },
    {
        id: 4,
        target: "ramp",
        category: "简单",
        stem: "The municipal library renovated its entrance by adding an accessible wheelchair ________ next to the main steps.",
        options: ["ramp", "shoelace", "parasol", "duct pipe"],
        correct: "ramp",
        explanations: {
            guide: "无障碍设施名词考点。wheelchair ________ next to the main steps 结合在主台阶旁加装无障碍轮椅通道，选 ramp（斜坡/坡道）。",
            family: "ramp (n.斜坡/坡道) | shoelace (n.鞋带) | parasol (n.遮阳伞) | duct pipe (n.风管)。",
            details: "wheelchair ramp 专指轮椅无障碍坡道。shoelace（鞋带）、parasol（遮阳伞）均非建筑物出入口的通行斜坡设施。",
            cn: "市立图书馆对主入口进行了翻修，在主台阶旁增设了一个无障碍轮椅坡道。",
            jp: "市立図書館は、メイン階段の横に車椅子用スロープ（ramp）を増設して玄関を改装しました。"
        }
    },
    {
        id: 5,
        target: "deserted",
        category: "简单",
        stem: "Late on Sunday evening, the commercial shopping plaza was completely ________, with no customers in sight.",
        options: ["deserted", "patterned", "descending", "leaning"],
        correct: "deserted",
        explanations: {
            guide: "场景状态表语形容词。with no customers in sight 结合周日深夜商场空无一人，选 deserted（空无一人的/荒凉寂静的）。",
            family: "deserted (adj.空无一人的) | patterned (adj.有花纹的) | descending (adj.下行的) | leaning (adj.倾斜的)。",
            details: "completely deserted 意为空无一人。patterned（有图案的）、descending（下降的）均无法用来形容没有客人的商场空旷状态。",
            cn: "周日深夜，商业购物广场上完全空无一人，看不到一个顾客的身影。",
            jp: "日曜日の夜遅く、商業ショッピングプラザには客の姿が全くなく、完全に人けのない（deserted）状態でした。"
        }
    },
    {
        id: 6,
        target: "leaning",
        category: "简单",
        stem: "A delivery bicycle is currently ________ against the brick exterior wall beside the bakery entrance.",
        options: ["leaning", "descending", "patterned", "deserted"],
        correct: "leaning",
        explanations: {
            guide: "Part 1 照片状态现在分词。bicycle is currently ________ against the brick wall 结合送货自行车靠在砖墙边，选 leaning（倚靠/靠着）。",
            family: "leaning (v-ing/adj.倚靠的/倾斜的) | descending (v-ing下降的) | patterned (adj.有花纹的) | deserted (adj.荒凉的)。",
            details: "leaning against the wall 属于 Part 1 绝高频场景搭配，意为靠在墙上。descending（走下）、patterned（有花纹的）不符合自行车靠墙放置的动词搭配。",
            cn: "一辆送货自行车目前正靠在面包店入口旁的砖质外墙上。",
            jp: "配達用自転車が現在、ベーカリーの入り口横にあるレンガ造りの外壁に寄りかかって（leaning）います。"
        }
    },
    {
        id: 7,
        target: "descending",
        category: "中等",
        stem: "Flight attendants stood by the cabin door to assist elderly passengers who were slowly ________ the boarding stairs.",
        options: ["descending", "leaning", "patterned", "deserted"],
        correct: "descending",
        explanations: {
            guide: "移动方向现在分词。were slowly ________ the boarding stairs 结合乘务员协助年长旅客走下登机梯，选 descending（走下/下行）。",
            family: "descending (v-ing走下/下降) | leaning (v-ing倚靠) | patterned (adj.有图案的) | deserted (adj.空旷的)。",
            details: "descending the stairs 属于托业 Part 1 & 听力核心短语，意为走下楼梯。leaning（靠着）接宾语 the stairs 不符合下机梯行动作。",
            cn: "乘务员站在舱门旁，协助缓慢走下登机舷梯的老年乘客。",
            jp: "客室乗務員はキャビンドアのそばに立ち、搭乗階段をゆっくりと降りてくる（descending）高齢の乗客をサポートしました。"
        }
    },
    {
        id: 8,
        target: "patterned",
        category: "中等",
        stem: "The interior designer selected a modern ________ wallpaper to add visual interest to the corporate reception lobby.",
        options: ["patterned", "descending", "deserted", "leaning"],
        correct: "patterned",
        explanations: {
            guide: "装饰材质前置形容词。a modern ________ wallpaper 结合室内设计师挑选壁纸以增强前台大厅视觉美感，选 patterned（有图案的/带花纹的）。",
            family: "patterned (adj.有花纹的/带图案的) | descending (adj.下行的) | deserted (adj.废弃的) | leaning (adj.倚靠的)。",
            details: "patterned wallpaper 意为带图案的花纹壁纸。descending（下降的）、deserted（空旷的）均无法修饰室内墙纸样式。",
            cn: "室内设计师挑选了一款现代花纹壁纸，以增添企业接待大厅的视觉美感。",
            jp: "インテリアデザイナーは、企業受付ロビーに視覚的な魅力を加えるために、モダンな柄入りの（patterned）壁紙を選びました。"
        }
    },
    {
        id: 9,
        target: "containers of drinking water",
        category: "中等",
        stem: "Emergency relief volunteers unloaded dozens of sealed ________ from the supply truck to assist storm victims.",
        options: ["containers of drinking water", "duct pipes", "handrails", "shoelaces"],
        correct: "containers of drinking water",
        explanations: {
            guide: "应急救援物资名词复数。unloaded dozens of sealed ________ from the truck to assist victims 结合从物资卡车上卸下救助受灾群众的饮水用具，选 containers of drinking water（饮用水容器/饮用水桶）。",
            family: "containers of drinking water (n.饮用水容器桶) | duct pipes (n.通风管道) | handrails (n.扶手) | shoelaces (n.鞋带)。",
            details: "sealed containers of drinking water 意为密封饮用水桶。duct pipes（风管）、handrails（扶手）均非应急卡车发放给灾民的生活饮水物资。",
            cn: "紧急救灾志愿者从物资卡车上卸下了数十个密封的饮用水桶，以援助受灾居民。",
            jp: "緊急救援ボランティアは、被災者を支援するために、補給トラックから数十個の密閉された飲料水容器（containers of drinking water）を荷降ろししました。"
        }
    },
    {
        id: 10,
        target: "duct pipe",
        category: "中等",
        stem: "Building engineers inspected the large metal ________ running along the basement ceiling to check for air ventilation leaks.",
        options: ["duct pipe", "parasol", "wooden stool", "shoelace"],
        correct: "duct pipe",
        explanations: {
            guide: "建筑通风设施名词。metal ________ running along the basement ceiling 结合检查地下室天花板上的通风管道漏风情况，选 duct pipe（风管/通风管道）。",
            family: "duct pipe (n.通风管道/风管) | parasol (n.遮阳伞) | wooden stool (n.木凳) | shoelace (n.鞋带)。",
            details: "metal duct pipe 意为金属通风管。parasol（遮阳伞）、wooden stool（木凳）均非沿地下室天花板安装的空调通风构件。",
            cn: "建筑工程师检查了沿着地下室天花板延伸的大型金属通风管道，以排查通风泄漏情况。",
            jp: "建築エンジニアは、換気漏れをチェックするために、地下室の天井に沿って走る大きな金属製ダクト管（duct pipe）を点検しました。"
        }
    },
    {
        id: 11,
        target: "ramp",
        category: "中等",
        stem: "Warehouse personnel wheeled the heavy pallet jack up the loading ________ directly into the freight container.",
        options: ["ramp", "parasol", "shoelace", "duct pipe"],
        correct: "ramp",
        explanations: {
            guide: "仓储物流装卸通道名词。wheeled the pallet jack up the loading ________ 结合推着托盘搬运车顺着装卸通道进入货柜，选 ramp（斜坡/装卸坡道）。",
            family: "ramp (n.装卸坡道/斜坡) | parasol (n.遮阳伞) | shoelace (n.鞋带) | duct pipe (n.风管)。",
            details: "loading ramp 属于物流仓储经典专有名词，意为装卸货坡道。parasol（遮阳伞）、shoelace（鞋带）均不符合装卸货物通道设施。",
            cn: "仓库员工推着沉重的托盘搬运车顺着装卸坡道直接进入了货运集装箱。",
            jp: "倉庫の作業員は、重いパレットジャッキを積込用スロープ（ramp）から直接貨物コンテナの中に押し入れました。"
        }
    },
    {
        id: 12,
        target: "handrail",
        category: "中等",
        stem: "The municipal safety inspector mandated that a continuous metal ________ be installed along the entire pedestrian footbridge.",
        options: ["handrail", "parasol", "shoelace", "duct pipe"],
        correct: "handrail",
        explanations: {
            guide: "市政安全防护栏杆名词。a continuous metal ________ installed along the footbridge 结合沿人行天桥全长安装连续防护扶手，选 handrail（扶手/栏杆）。",
            family: "handrail (n.扶手/栏杆) | parasol (n.遮阳伞) | shoelace (n.鞋带) | duct pipe (n.风管)。",
            details: "metal handrail 意为金属扶手栏杆。parasol（遮阳伞）、shoelace（鞋带）不符合市政天桥防坠落扶手防护要求。",
            cn: "市政安全检查员强制要求沿着整座人行天桥全线安装连续的金属扶手栏杆。",
            jp: "市の安全検査官は、歩道橋の全長に沿って連続した金属製の手すり（handrail）を設置することを義務付けました。"
        }
    },
    {
        id: 13,
        target: "descending",
        category: "困难",
        stem: "Due to heavy air turbulence, air traffic control instructed the pilot to begin a gradual ________ toward the landing runway.",
        options: ["descent", "descending", "descendant", "descended"],
        correct: "descent",
        explanations: {
            guide: "派生名词作动词宾语。begin a gradual ________ toward... 结构中，形容词 gradual 后面接名词形式 descent（下降/下落过程）。",
            family: "descent (n.下降/降落) | descending (v-ing/adj.下降的) | descendant (n.后代/子孙) | descended (v-ed过去式)。",
            details: "a gradual descent 属于民航交通核心术语，意为平缓下降。descendant 指子孙后代，descending 是分词/动名词，在此处不如派生抽象名词 descent 规范。",
            cn: "由于遭遇强烈空中颠簸，空中交通管制部门指示飞行员开始向着陆跑道平缓下降。",
            jp: "激しい乱気流のため、航空交通管制は着陸滑走路に向けて緩やかな降下（descent）を開始するようパイロットに指示しました。"
        }
    },
    {
        id: 14,
        target: "patterned",
        category: "困难",
        stem: "The textile manufacturing plant automated its weaving machinery to produce intricate geometric ________ on upholstery fabrics.",
        options: ["patterns", "patterned", "patterning", "pattern"],
        correct: "patterns",
        explanations: {
            guide: "派生名词复数作宾语。produce intricate geometric ________ 结构中，形容词 geometric 后面接名词复数形式 patterns（图案/花纹）。",
            family: "patterns (n.复数图案/花样) | patterned (adj.有花纹的) | patterning (n.图案形成) | pattern (n.单数)。",
            details: "geometric patterns 意为几何图案。produce 后面需要名词作宾语，由复数概念织造各种精美图案，选复数名词 patterns。",
            cn: "该纺织制造工厂对其织布机械进行了自动化改造，以在室内装潢织物上生产复杂的几何图案。",
            jp: "その繊維製造工場は、室内装飾用生地に複雑な幾何学模様（patterns）を製造するために織布機械を自動化しました。"
        }
    },
    {
        id: 15,
        target: "deserted",
        category: "困难",
        stem: "Despite experiencing severe budgetary constraints, the municipal council refused to ________ the downtown revitalization project.",
        options: ["desert", "deserted", "desertion", "deserting"],
        correct: "desert",
        explanations: {
            guide: "及物动词不定式考点（desert 一词多义）。refused to 后面接及物动词原形，表达市议会拒绝“放弃/遗弃”市中心复兴项目，选 desert。",
            family: "desert (v.遗弃/放弃/n.沙漠) | deserted (adj.空旷的/废弃的) | desertion (n.遗弃) | deserting (v-ing)。",
            details: "to desert a project 意为放弃/搁置某项目。deserted 是形容词/过去式，不能直接跟在不定式符号 to 后面作谓语动词原形。",
            cn: "尽管面临着严重的预算紧缩，市议会仍拒绝放弃市中心区域复兴项目。",
            jp: "深刻な予算の制約に直面しているにもかかわらず、市議会はダウンタウンの活性化プロジェクトを放棄する（desert）ことを拒否しました。"
        }
    },
    {
        id: 16,
        target: "leaning",
        category: "困难",
        stem: "To reduce operating overhead and minimize waste, the automotive manufacturer adopted ________ manufacturing principles across all assembly lines.",
        options: ["lean", "leaning", "leaned", "leans"],
        correct: "lean",
        explanations: {
            guide: "管理学专有名词形容词考点。adopted ________ manufacturing principles 属于现代生产管理专有名词，表达“精益制造/精益生产”原则，选形容词原形 lean。",
            family: "lean (adj.精益的/瘦的/v.倾斜) | leaning (n.倾向/v-ing倚靠) | leaned (v-ed) | leans (v-三单)。",
            details: "lean manufacturing 属于企业运营与生产管理核心术语（精益生产）。leaning 指倾斜状态或个人倾向，不能修饰精益管理体系。",
            cn: "为了降低运营开支并最大限度地减少浪费，该汽车制造商在所有装配线上均采用了精益制造原则。",
            jp: "運営諸経費を削減し無駄を最小限に抑えるため、その自動車メーカーはすべての組み立てラインでリーン（lean）生産方式の原則を採用しました。"
        }
    },
    {
        id: 17,
        target: "containers of drinking water",
        category: "困难",
        stem: "The commercial shipping firm invested heavily in modern intermodal equipment to ________ freight shipments for international rail transit.",
        options: ["containerize", "containers", "containment", "containerized"],
        correct: "containerize",
        explanations: {
            guide: "派生动词不定式考点。invested heavily in equipment to 后面接动词原形，表达对货物进行“集装箱化/装箱整合运输”，选动词 containerize。",
            family: "containerize (v.用集装箱装运/集装箱化) | containers (n.容器/集装箱) | containment (n.控制/封锁) | containerized (adj.集装箱化的)。",
            details: "to containerize shipments 意为将货物集装箱化打包。containers 是名词，不能在不定式符号 to 后面充当及物谓语动词。",
            cn: "该商业货运公司斥巨资投入现代化多式联运设备，以便将货物集装箱化用于国际铁路运输。",
            jp: "その商業海運会社は、国際鉄道輸送向けに貨物輸送をコンテナ化（containerize）するために、最新の複合一貫輸送設備に多額の投資を行いました。"
        }
    },
    {
        id: 18,
        target: "duct pipe",
        category: "困难",
        stem: "The architectural engineering blueprint specifies where the main heating and air conditioning ________ should be routed through the ceiling grid.",
        options: ["ducts", "parasols", "shoelaces", "ramps"],
        correct: "ducts",
        explanations: {
            guide: "暖通工程名词复数主语。heating and air conditioning ________ 属于建筑暖通（HVAC）核心术语，表达穿过吊顶格栅布局的暖通“风管/管道”，选 ducts。",
            family: "ducts (n.暖通风管复数) | parasols (n.遮阳伞) | shoelaces (n.鞋带) | ramps (n.坡道)。",
            details: "air conditioning ducts 专指空调通风管道。parasols（遮阳伞）、shoelaces（鞋带）均非建筑吊顶内部布置的暖通管路。",
            cn: "建筑工程设计蓝图明确规定了主采暖和空调风管在吊顶格栅中的走向布局路径。",
            jp: "建築エンジニアリングの設計図には、主要な冷暖房ダクト（ducts）を天井グリッドを通してどこに配管すべきかが明記されています。"
        }
    }
];