// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data841-850.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "inaugural",
        pos: "形/名",
        ipa: "/ɪˈnɔːɡjərəl/",
        cn: "首届的，开幕的，就职的；就职演说",
        jp: "就任の、開会の、第1回目の；就任演説",
        family: "inaugurate / inauguration / inaugurating",
        tips: "展会与高管就任高频：inaugural address/speech（就职演说），inaugural flight/season/issue（首航/首季/创刊号）。",
        desc: "The company held its inaugural gala."
    },
    {
        word: "rectangular",
        pos: "形",
        ipa: "/rekˈtæŋɡjələr/",
        cn: "长方形的，矩形的",
        jp: "長方形の、矩形の",
        family: "rectangle / rectangles",
        tips: "Part 1 & 设施格局高频：rectangular conference table（长方形会议桌），rectangular layout/tray（长方形布局/托盘）。",
        desc: "The office has a rectangular table."
    },
    {
        word: "ergonomic",
        pos: "形",
        ipa: "/ˌɜːrɡəˈnɑːmɪk/",
        cn: "符合人体工学的，人性化设计的",
        jp: "人間工学に基づいた、エルゴノミクスの",
        family: "ergonomics / ergonomically",
        tips: "办公设施采购与健康高频：ergonomic office chair/keyboard（人体工学办公椅/键盘），ergonomic workspace design（人体工学工位设计）。",
        desc: "Invest in ergonomic office chairs."
    },
    {
        word: "bolster",
        pos: "動/名",
        ipa: "/ˈboʊlstər/",
        cn: "加强，增强，巩固；长垫",
        jp: "強化する、補強する、高める；長枕",
        family: "bolstered / bolstering / bolsters",
        tips: "商业战略与公关高频：bolster market confidence/share（提振市场信心/扩大市场份额），bolster customer loyalty（增强客户忠诚度）。",
        desc: "The campaign will bolster sales."
    },
    {
        word: "landfill",
        pos: "名",
        ipa: "/ˈlændfɪl/",
        cn: "垃圾填埋场，废弃物填埋",
        jp: "ゴミ埋立地、埋立処分",
        family: "landfills",
        tips: "ESG与环保政策高频：divert waste from landfills（使废弃物免于填埋/垃圾减量），landfill capacity/site（垃圾填埋场库容/场址）。",
        desc: "Recycling reduces waste in landfills."
    },
    {
        word: "hone",
        pos: "動",
        ipa: "/hoʊn/",
        cn: "磨练，提升（技能），磨砺",
        jp: "（技術などを）磨く、研ぎ澄ます",
        family: "honed / honing / hones",
        tips: "职场技能与专业培训高频：hone one's skills/craft（磨练某人的技能/手艺），hone leadership abilities（提升领导能力）。",
        desc: "Workshops help employees hone skills."
    },
    {
        word: "excavation",
        pos: "名",
        ipa: "/ˌekskəˈveɪʃn/",
        cn: "挖掘，开挖工程，发掘现场",
        jp: "発掘、掘削、掘削工事現場",
        family: "excavate / excavated / excavator",
        tips: "工程施工与基建高频：site excavation work（场地开挖作业），archaeological excavation（考古发掘）。",
        desc: "The excavation project began yesterday."
    },
    {
        word: "repurpose",
        pos: "動",
        ipa: "/riːˈpɜːrpəs/",
        cn: "重新利用，改换用途，重新设计用途",
        jp: "別の用途に使う、転用する、再利用する",
        family: "repurposed / repurposing / purpose",
        tips: "可持续发展与空间改造高频：repurpose old warehouses/facilities（将旧仓库/旧设施改换用途），repurpose existing content（二次利用现有内容）。",
        desc: "They plan to repurpose the old warehouse."
    },
    {
        word: "upholstery",
        pos: "名",
        ipa: "/ʌpˈhoʊlstəri/",
        cn: "（家具等的）室内装潢织物，软包面料，坐垫套",
        jp: "（家具の）張り地、クッション張り、布張り",
        family: "upholster / upholstered / upholsterer",
        tips: "Part 1 & 酒店家具维保高频：leather/fabric upholstery（皮革/织物软包），clean the sofa upholstery（清洁沙发座套面料）。",
        desc: "The chairs have durable leather upholstery."
    },
    {
        word: "effortlessly",
        pos: "副",
        ipa: "/ˈefərtləsli/",
        cn: "毫不费力地，轻易地，流畅自如地",
        jp: "難なく、苦も無く、軽々と",
        family: "effortless / effort / effortlessly",
        tips: "产品易用性与技能表现高频：navigate effortlessly（轻松自如地导航），perform tasks effortlessly（毫不费力地执行任务）。",
        desc: "Users can navigate the app effortlessly."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "ergonomic",
        category: "简单",
        stem: "The corporate wellness committee recommended purchasing ________ office chairs to help employees prevent posture-related back fatigue.",
        options: ["ergonomic", "rectangular", "inaugural", "effortlessly"],
        correct: "ergonomic",
        explanations: {
            guide: "办公设施修饰形容词。________ office chairs 结合预防不良坐姿引起的背部疲劳，选 ergonomic（符合人体工学设计的）。",
            family: "ergonomic (adj.人体工学的) | rectangular (adj.矩形的) | inaugural (adj.首届的) | effortlessly (adv.毫不费力地)。",
            details: "ergonomic office chairs 属于企业采购与健康高频词组。rectangular（矩形的）不能修饰防疲劳健康功能，effortlessly 是副词。",
            cn: "企业健康委员会建议采购符合人体工学设计的办公椅，以帮助员工预防不良坐姿引起的背部疲劳。",
            jp: "企業の健康委員会は、従業員の姿勢悪化による背中の疲労を防ぐため、人間工学に基づいた（ergonomic）オフィスチェアを購入することを推奨しました。"
        }
    },
    {
        id: 2,
        target: "inaugural",
        category: "简单",
        stem: "The mayor delivered the opening keynote address during the city's ________ sustainable urban innovation conference.",
        options: ["inaugural", "upholstery", "landfill", "excavation"],
        correct: "inaugural",
        explanations: {
            guide: "大型展会活动修饰形容词。the city's ________ innovation conference 结合市长在首届会议上发表开幕主旨演讲，选 inaugural（首届的/开幕的）。",
            family: "inaugural (adj.首届的/开幕的) | upholstery (n.软包面料) | landfill (n.垃圾场) | excavation (n.挖掘)。",
            details: "inaugural conference 意为首届大会。upholstery（装潢织物）、landfill（垃圾填埋场）均非修饰会议届次的名词或形容词。",
            cn: "市长在该市首届可持续城市创新大会上发表了开幕主旨演说。",
            jp: "市長は、市が開催した第1回（inaugural）持続可能な都市革新会議において、開会の基調講演を行いました。"
        }
    },
    {
        id: 3,
        target: "rectangular",
        category: "简单",
        stem: "Boardroom participants sat around a large ________ mahogany table equipped with integrated power outlets.",
        options: ["rectangular", "ergonomic", "inaugural", "effortlessly"],
        correct: "rectangular",
        explanations: {
            guide: "家具外观形状修饰形容词。a large ________ mahogany table 结合董事会成员围坐在大型长方形红木桌旁，选 rectangular（长方形的/矩形的）。",
            family: "rectangular (adj.矩形的/长方形的) | ergonomic (adj.人体工学的) | inaugural (adj.首届的) | effortlessly (adv.轻易地)。",
            details: "rectangular table 属于 Part 1 及办公设施高频搭配。inaugural（首届的）与 effortlessly（副词）均无法修饰桌子几何形状。",
            cn: "董事会与会人员围坐在一张配备集成电源插座的大型长方形红木会议桌旁。",
            jp: "役員会議の参加者は、電源コンセントが組み込まれた大型の長方形の（rectangular）マホガニー製テーブルの周りに着席しました。"
        }
    },
    {
        id: 4,
        target: "landfill",
        category: "简单",
        stem: "The manufacturing company established a zero-waste policy to prevent commercial scrap from ending up in the local ________.",
        options: ["landfill", "upholstery", "excavation", "repurpose"],
        correct: "landfill",
        explanations: {
            guide: "环保固废处置名词考点。prevent commercial scrap from ending up in the local ________ 结合零废弃政策防止工业边角料被送往垃圾填埋场，选 landfill（垃圾填埋场）。",
            family: "landfill (n.垃圾填埋场) | upholstery (n.软包面料) | excavation (n.挖掘) | repurpose (v.改换用途)。",
            details: "end up in the landfill 意为最终进入垃圾填埋场。upholstery（家具织物）、repurpose（动词）均非工业固废堆填处理的场所设施实体。",
            cn: "该制造公司推行了零废弃物政策，以防止工业边角料最终被填埋在当地垃圾填埋场中。",
            jp: "その製造会社は、産業廃棄物が地元のゴミ埋立地（landfill）に行き着くのを防ぐため、ゼロウェイスト（廃棄物ゼロ）方針を策定しました。"
        }
    },
    {
        id: 5,
        target: "hone",
        category: "简单",
        stem: "Senior executives enrolled in a series of weekend communication workshops to ________ their corporate negotiation techniques.",
        options: ["hone", "bolster", "repurpose", "excavate"],
        correct: "hone",
        explanations: {
            guide: "技能提升动词不定式。to 后面接动词原形，结合参加周末沟通工作坊以“磨砺/提升”谈判技巧（negotiation techniques），选 hone。",
            family: "hone (v.磨练/提升技能) | bolster (v.增强/支撑) | repurpose (v.改换用途) | excavate (v.开挖)。",
            details: "hone negotiation techniques 意为磨练谈判技能。bolster 通常接 confidence/sales/reputation，修饰细化技艺磨砺规范使用 hone。",
            cn: "高管们报名参加了一系列周末沟通研讨班，以进一步磨练提升他们的商务谈判技巧。",
            jp: "経営幹部は、企業の交渉技術を磨く（hone）ために、一連の週末コミュニケーションワークショップに登録しました。"
        }
    },
    {
        id: 6,
        target: "bolster",
        category: "简单",
        stem: "The pharmaceutical firm launched an extensive media campaign to ________ public confidence in its newly approved vaccine.",
        options: ["bolster", "hone", "repurpose", "excavate"],
        correct: "bolster",
        explanations: {
            guide: "公关宣传动词不定式。launched a media campaign to 后面接动词原形，结合发起广泛的媒体宣传以“提振/增强”公众信心（public confidence），选 bolster。",
            family: "bolster (v.增强/提振/支撑) | hone (v.磨练) | repurpose (v.重新利用) | excavate (v.开挖)。",
            details: "bolster public confidence 属于商务与公关核心高频搭配，意为提振公众信心。hone（磨炼技能）不能与抽象信心搭配。",
            cn: "该制药公司发起了广泛的媒体宣传活动，以增强公众对其新获批疫苗的信心。",
            jp: "その製薬会社は、新しく承認されたワクチンに対する一般の信頼を高める/強化する（bolster）ために、大々的なメディアキャンペーンを展開しました。"
        }
    },
    {
        id: 7,
        target: "repurpose",
        category: "中等",
        stem: "Urban development developers unveiled ambitious plans to ________ the abandoned waterfront warehouse into a vibrant retail plaza.",
        options: ["repurpose", "bolster", "hone", "excavate"],
        correct: "repurpose",
        explanations: {
            guide: "空间改造动词短语搭配。plans to ________ A into B 结合将废弃的滨水仓库改建为充满活力的商业广场，选 repurpose（改换用途/重新利用）。",
            family: "repurpose (v.重新利用/改造用途) | bolster (v.巩固) | hone (v.磨练) | excavate (v.挖掘)。",
            details: "repurpose A into B 属于城市更新与环保设计极高频词组，意为将A改换用途为B。hone 和 bolster 均不与 into 构成改造转化的语义。",
            cn: "城市开发商公布了雄心勃勃的规划，拟将废弃的滨水仓库重新改建为一个充满活力的商业零售广场。",
            jp: "都市開発業者は、放置されていたウォーターフロントの倉庫を活気ある商業プラザに転用する/再利用する（repurpose ... into）という野心的な計画を発表しました。"
        }
    },
    {
        id: 8,
        target: "effortlessly",
        category: "中等",
        stem: "The newly deployed customer service portal allows clients to track incoming parcel deliveries ________ on their mobile devices.",
        options: ["effortlessly", "rectangular", "ergonomic", "inaugural"],
        correct: "effortlessly",
        explanations: {
            guide: "副词修饰及物动词短语。track parcel deliveries ________ 结构中，需要副词修饰动词短语 track deliveries，表达客户可以“毫不费力地/轻松顺畅地”查件，选 effortlessly。",
            family: "effortlessly (adv.毫不费力地/轻松地) | rectangular (adj.矩形的) | ergonomic (adj.人体工学的) | inaugural (adj.首届的)。",
            details: "track deliveries effortlessly 属于IT软件易用性高频动副搭配。rectangular、ergonomic 和 inaugural 均为形容词，不能充当动词的修饰状语。",
            cn: "新部署的客户服务门户网站允许客户在移动设备上轻松自如地实时追踪进港包裹。",
            jp: "新しく導入されたカスタマーサービスポータルにより、顧客はモバイルデバイス上で小包の配送状況を難なく/簡単に（effortlessly）追跡できます。"
        }
    },
    {
        id: 9,
        target: "excavation",
        category: "中等",
        stem: "Before construction on the foundation can begin, workers must complete the deep site ________ to remove loose bedrock.",
        options: ["excavation", "upholstery", "landfill", "inaugural"],
        correct: "excavation",
        explanations: {
            guide: "建筑工程名词宾语。complete the deep site ________ 结合在浇筑地基前清理松散岩层所必需进行的场地深层开挖，选 excavation（挖掘/开挖作业）。",
            family: "excavation (n.挖掘/开挖工程) | upholstery (n.软包织物) | landfill (n.垃圾场) | inaugural (adj.首届的)。",
            details: "site excavation 属于土木与施工核心专有名词，意为场地开挖。upholstery（软包装饰面料）与地基施工无关。",
            cn: "在开始地基施工之前，工人们必须完成深层现场开挖作业以清除松散基岩。",
            jp: "基礎工事を開始する前に、作業員は緩んだ岩盤を取り除くための深い敷地掘削（excavation）を完了しなければなりません。"
        }
    },
    {
        id: 10,
        target: "upholstery",
        category: "中等",
        stem: "Hotel management hired professional commercial cleaners to deep-clean the stained fabric ________ on all lobby armchairs.",
        options: ["upholstery", "excavation", "landfill", "repurpose"],
        correct: "upholstery",
        explanations: {
            guide: "家具布艺名词考点。stained fabric ________ on all lobby armchairs 结合深度清洗大堂单人扶手椅上污损的布艺座套，选 upholstery（软包面料/装潢布艺）。",
            family: "upholstery (n.软包面料/座椅织物) | excavation (n.挖掘) | landfill (n.垃圾场) | repurpose (v.重新利用)。",
            details: "fabric upholstery 意为织物软包/座椅套面。excavation（开挖）、landfill（垃圾场）均非扶手椅上的织物构件。",
            cn: "酒店管理层聘请了专业商业保洁团队，对大堂所有扶手椅上出现污损的织物软包面料进行深度清洁。",
            jp: "ホテルの経営陣は、すべてのロビーのアームチェアの汚れた布張り地（upholstery）を徹底的に洗浄するために専門の商業清掃業者を雇いました。"
        }
    },
    {
        id: 11,
        target: "bolster",
        category: "中等",
        stem: "The regional commercial bank lowered lending rates to ________ economic development among struggling agricultural businesses.",
        options: ["bolster", "hone", "upholster", "excavate"],
        correct: "bolster",
        explanations: {
            guide: "宏观调控动词不定式。lowered rates to 后面接及物动词原形，后接 economic development（经济发展）作宾语，选 bolster（扶持/增强/提振）。",
            family: "bolster (v.提振/扶持/增强) | hone (v.磨练) | upholster (v.为…包面) | excavate (v.挖掘)。",
            details: "bolster economic development 属于财经英语核心搭配，意为提振经济发展。hone（磨练技术）、excavate（开挖）动宾逻辑完全不通。",
            cn: "该区域商业银行降低了贷款利率，以提振陷入困境的农业企业的经济发展。",
            jp: "その地域商業銀行は、苦境にある農業ビジネスの経済発展を促進する/後押しする（bolster）ために貸出金利を引き下げました。"
        }
    },
    {
        id: 12,
        target: "inaugural",
        category: "中等",
        stem: "Aviation enthusiasts gathered at the airport tarmac to witness the ________ flight of the newly developed commercial airliner.",
        options: ["inaugural", "ergonomic", "rectangular", "effortlessly"],
        correct: "inaugural",
        explanations: {
            guide: "民航客机试飞定语形容词。the ________ flight of the airliner 结合航空爱好者在停机坪见证新研发商用客机的“首航”，选 inaugural（首届的/开创性的/首航的）。",
            family: "inaugural (adj.首航的/初次的) | ergonomic (adj.人体工学的) | rectangular (adj.长方形的) | effortlessly (adv.轻易地)。",
            details: "inaugural flight 属于航空交通固定专有名词，专指首航。ergonomic（人体工学的）不能修饰航线或航班。",
            cn: "航空爱好者们齐聚机场停机坪，共同见证新研发商用客机的首航飞行。",
            jp: "航空ファンたちは、新しく開発された民間旅客機の処女航海/初飛行（inaugural flight）を見届けるために空港の駐機場に集まりました。"
        }
    },
    {
        id: 13,
        target: "ergonomic",
        category: "困难",
        stem: "The enterprise workspace was redesigned ________ to promote healthy posture and lower the frequency of repetitive strain injuries.",
        options: ["ergonomically", "ergonomic", "ergonomics", "ergonomist"],
        correct: "ergonomically",
        explanations: {
            guide: "副词修饰被动语态动词。was redesigned ________ to promote healthy posture 结构中，需要副词修饰过去分词 redesigned，表达工位经过“符合人体工学地”重新设计，选副词 ergonomically。",
            family: "ergonomically (adv.符合人体工学地) | ergonomic (adj.人体工学的) | ergonomics (n.工效学) | ergonomist (n.工效学家)。",
            details: "redesigned ergonomically 属于设施改造高频动副搭配。ergonomic 是形容词，ergonomics 是学科名词，均不能充当修饰动词分词 redesigned 的状语。",
            cn: "企业办公空间经过符合人体工学原理的重新设计，以促进健康坐姿并减少重复性劳损伤病的发生频率。",
            jp: "企業のワークスペースは、健康的な姿勢を促進し反復運動過多損傷の頻度を減らすために、人間工学的に（ergonomically）再設計されました。"
        }
    },
    {
        id: 14,
        target: "excavation",
        category: "困难",
        stem: "Before pouring the concrete foundation, the construction crew must carefully ________ the underground utility lines.",
        options: ["excavate", "excavation", "excavator", "excavated"],
        correct: "excavate",
        explanations: {
            guide: "情态助动词后接动词原形。must carefully 后面接及物动词原形，后接 utility lines 作宾语，表达施工人员必须小心地“开挖掘出”地下管线，选 excavate。",
            family: "excavate (v.开挖/挖掘) | excavation (n.挖掘工程) | excavator (n.挖掘机) | excavated (v-ed过去式/分词)。",
            details: "must excavate lines 意为必须开挖管线。excavation 是名词，excavator 指挖掘机设备，均不能跟在情态动词 must 后面作谓语动词原形。",
            cn: "在浇筑混凝土基础之前，施工队伍必须仔细开挖并探明地下公共事业管道线路。",
            jp: "コンクリートの基礎を流し込む前に、建設作業員は慎重に地下の公共施設管路を掘削しなければ（excavate）なりません。"
        }
    },
    {
        id: 15,
        target: "upholstery",
        category: "困难",
        stem: "The vintage conference room features richly ________ leather chairs that were restored by a renowned master artisan.",
        options: ["upholstered", "upholstery", "upholsterer", "upholstering"],
        correct: "upholstered",
        explanations: {
            guide: "副词后接过去分词作定语。richly ________ leather chairs 结构中，副词 richly 后面接分词修饰名词 chairs，表达做工精美的“软包覆面”皮革椅，选 upholstered。",
            family: "upholstered (adj./v-ed软包覆面的) | upholstery (n.装潢面料) | upholsterer (n.软包工匠) | upholstering (v-ing)。",
            details: "richly upholstered chairs 意为装潢软包精良的椅子。upholstery 是名词，upholsterer 指软包手艺人，均不能被副词 richly 修饰作 chairs 的定语。",
            cn: "这间具有复古风情的会议室配备了做工精良的软包皮革椅，均由一位著名手艺大师精心修复。",
            jp: "そのビンテージ風の会議室には、著名な巨匠職人によって復元された、豪華にクッション張りされた（upholstered）革張りの椅子が備え付けられています。"
        }
    },
    {
        id: 16,
        target: "hone",
        category: "困难",
        stem: "Through rigorous training simulations, flight students spent months ________ their emergency decision-making reflexes.",
        options: ["honing", "honed", "hone", "hones"],
        correct: "honing",
        explanations: {
            guide: "spend time doing 句式动名词考点。spent months ________ their reflexes 结构中，动词 spent 后面接时间加动名词，表达花费数月时间“磨练/打磨”应急决策反应能力，选 honing。",
            family: "honing (v-ing磨练/提升) | honed (v-ed过去式) | hone (v.原形) | hones (v-三单)。",
            details: "spent months honing reflexes 属于 spend + time + doing 经典句型。honed 为过去式/分词，不能在 spend time 结构中充当动名词宾语补足语。",
            cn: "通过严苛的模拟训练，飞行学员花费数月时间磨砺其应急决策反应能力。",
            jp: "厳格な訓練シミュレーションを通じて、飛行学校の生徒たちは緊急時の意思決定反射神経を研ぎ澄ます（honing）ことに何ヶ月も費やしました。"
        }
    },
    {
        id: 17,
        target: "repurpose",
        category: "困难",
        stem: "The architectural award was presented to the studio that transformed the ________ industrial grain silo into contemporary apartments.",
        options: ["repurposed", "repurpose", "repurposing", "purpose"],
        correct: "repurposed",
        explanations: {
            guide: "过去分词作前置定语考点。the ________ industrial grain silo 结构中，修饰名词 silo（筒仓），表达被“改造重赋新用途的”工业粮食筒仓，选过去分词 repurposed。",
            family: "repurposed (adj./v-ed重新利用改造的) | repurpose (v.改换用途) | repurposing (v-ing) | purpose (n.目的)。",
            details: "repurposed silo 意为改换用途的筒仓。repurpose 是动词原形，不能作名词 silo 的前置定语；repurposing 强调正在改造的主动动作，与已改建完毕的住宅语境不符。",
            cn: "建筑设计奖被授予了将改造后的工业粮食筒仓转变为现代公寓的设计工作室。",
            jp: "その建築賞は、用途変更された（repurposed）工業用穀物サイロを現代的なアパートメントへと生まれ変わらせたスタジオに贈られました。"
        }
    },
    {
        id: 18,
        target: "effortlessly",
        category: "困难",
        stem: "The guest speaker delivered an ________ presentation that made highly intricate macroeconomic concepts easy to understand.",
        options: ["effortless", "effortlessly", "effort", "effortlessness"],
        correct: "effortless",
        explanations: {
            guide: "修饰名词的前置形容词。an ________ presentation 结构中，不定冠词 an 提示后接元音开头的形容词修饰 presentation，表达“游刃有余/看起来毫不费力的”精彩演说，选 effortless。",
            family: "effortless (adj.轻松从容的/毫不费力的) | effortlessly (adv.毫不费力地) | effort (n.努力) | effortlessness (n.轻松从容)。",
            details: "an effortless presentation 属于高级职场英语地道表达，意为游刃有余、挥洒自如的演讲。effortlessly 是副词，不能充当名词 presentation 的前置修饰定语。",
            cn: "特邀演讲嘉宾带来了一场游刃有余、精彩流畅的演说，使极其复杂的宏观经济学概念变得通俗易懂。",
            jp: "ゲストスピーカーは、極めて複雑なマクロ経済学の概念を分かりやすく解説し、苦もなくスムーズな（effortless）プレゼンテーションを披露しました。"
        }
    }
];