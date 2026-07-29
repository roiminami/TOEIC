// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data101-110.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "numerous",
        pos: "形",
        ipa: "/ˈnuːmərəs/",
        cn: "许多的，众多的",
        jp: "多数の、数多くの",
        family: "number / enumerate / numerously",
        tips: "阅读与语法极高频形容词！后必须接可数名词复数（e.g., numerous awards / numerous occasions），完美替代 many / various。",
        desc: "The author has won numerous awards."
    },
    {
        word: "motivate",
        pos: "動",
        ipa: "/ˈmoʊtɪveɪt/",
        cn: "激励，激发，驱使",
        jp: "動機付ける、意欲を起こさせる",
        family: "motivation / motivated / motivational / motivator",
        tips: "管理与团队建设考点。常见句型：motivate employees to do sth（激励员工做某事）。分词修饰人：highly motivated team（高度受激励的团队）。",
        desc: "Good leaders know how to motivate their team."
    },
    {
        word: "dedicated",
        pos: "形",
        ipa: "/ˈdedɪkeɪtɪd/",
        cn: "全心全意的，敬业的；专用的",
        jp: "献身的な、熱心な；専用の",
        family: "dedicate / dedication",
        tips: "双重托业高频义项：1. 敬业的（a dedicated staff 敬业的员工）；2. 专用的（a dedicated parking spot 专用停车位 / dedicated server 专用服务器）。搭配：be dedicated to doing sth。",
        desc: "She is a dedicated and hardworking employee."
    },
    {
        word: "enhance",
        pos: "動",
        ipa: "/ɪnˈhæns/",
        cn: "提高，增加，增强",
        jp: "高める、向上させる、強化する",
        family: "enhancement / enhanced / enhancer",
        tips: "商业策略与技能提升核心动词。常考：enhance customer satisfaction（提升客户满意度）、enhance efficiency（提高效率）、enhance productivity（提升生产力）。",
        desc: "The new feature will enhance user experience."
    },
    {
        word: "commute",
        pos: "動/名",
        ipa: "/kəˈmjuːt/",
        cn: "上下班往返，通勤；通勤路程",
        jp: "通勤する、通学する；通勤、道のり",
        family: "commuter / commuting",
        tips: "职场与交通高频词。常考：commute to work（上下班通勤）、daily commute（每日通勤路程）。衍生词 commuter train（通勤列车）。",
        desc: "He has a long daily commute to work."
    },
    {
        word: "coordinate",
        pos: "動",
        ipa: "/koʊˈɔːrdɪneɪt/",
        cn: "协调，统筹，配合",
        jp: "調整する、コーディネートする",
        family: "coordination / coordinator / coordinated",
        tips: "跨部门合作与项目管理核心词。常考：coordinate project details（协调项目细节）、coordinate with other departments（与其他部门协调）。名词 coordinator（协调员）。",
        desc: "She was asked to coordinate the event."
    },
    {
        word: "phase",
        pos: "名/動",
        ipa: "/feɪz/",
        cn: "阶段，时期；分阶段实施",
        jp: "段階、フェーズ；段階的に実施する",
        family: "phase in / phase out / phased",
        tips: "项目推进与产品开发核心词。常考：initial phase（初始阶段）、final phase（最终阶段）、phase in（逐步引入）、phase out（逐步淘汰）。",
        desc: "The construction project is in its final phase."
    },
    {
        word: "accessible",
        pos: "形",
        ipa: "/əkˈsesəbl/",
        cn: "易接近的，可进入的；易懂的，无障碍的",
        jp: "アクセスしやすい、利用可能な；理解しやすい",
        family: "access / accessibility / inaccessibly",
        tips: "设施与信息获取高频词。常考搭配：be easily accessible to...（对……来说易于进入/获取）、wheelchair accessible（无障碍通行的）。",
        desc: "The office is easily accessible by public transit."
    },
    {
        word: "accommodation",
        pos: "名",
        ipa: "/əˌkɑːməˈdeɪʃn/",
        cn: "住宿，留宿；适应，妥协",
        jp: "宿泊施設、収容；融通、調和",
        family: "accommodate / accommodating",
        tips: "差旅与酒店场景核心词（通常用复数 accommodations 表示酒店食宿）。动词 accommodate 表示“提供住宿/容纳/顺应需求”。",
        desc: "Hotel accommodations are included in the travel package."
    },
    {
        word: "equip",
        pos: "動",
        ipa: "/ɪˈkwɪp/",
        cn: "装备，配备",
        jp: "装備する、身につけさせる",
        family: "equipment / equipped / equipping",
        tips: "设施与资产配备核心动词。最常考被动语态与短语：be equipped with...（配备有……，例如 be equipped with modern tools）。注意名词 equipment 是不可数名词。",
        desc: "All offices are equipped with high-speed internet."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "numerous",
        category: "简单",
        stem: "The distinguished author has received ________ prestigious awards for her contributions to business journalism.",
        options: ["numerous", "number", "coordinate", "equip"],
        correct: "numerous",
        explanations: {
            guide: "形容词修饰可数名词复数。________ prestigious awards 结构中，需要形容词修饰复数名词 awards，表达“许多的/众多的”，选 numerous。",
            family: "numerous (adj.许多的) | number (n.数量) | coordinate (v.协调) | equip (v.装备)。",
            details: "numerous 后接可数名词复数 awards。number 是名词，不能直接放在形容词 prestigious 前作修饰语。",
            cn: "这位杰出的作者因其对商业新闻事业的贡献而获得了诸多杰出的奖项。",
            jp: "その著名な著者は、ビジネスジャーナリズムへの貢献に対して多数の（numerous）権威ある賞を受賞しています。"
        }
    },
    {
        id: 2,
        target: "enhance",
        category: "简单",
        stem: "The engineering team added a new filter system to ________ the overall performance of the water purifier.",
        options: ["enhance", "enhancement", "commute", "accommodation"],
        correct: "enhance",
        explanations: {
            guide: "动词不定式结构。to 后面需要接动词原形，表达“提升/增强”净水器的性能，选 enhance。",
            family: "enhance (v.提升) | enhancement (n.提升) | commute (v.通勤) | accommodation (n.住宿)。",
            details: "to 为不定式符号，后面必须接动词原形 enhance。enhancement 为名词，不能跟在不定式符号之后作动词。",
            cn: "工程团队增加了一个新的过滤系统，以提升净水器的整体性能。",
            jp: "エンジニアリングチームは、浄水器の全体的な性能を高める（enhance）ために新しいフィルターシステムを追加しました。"
        }
    },
    {
        id: 3,
        target: "commute",
        category: "简单",
        stem: "Many employees choose to live in the suburbs even though it results in a longer daily ________ to work.",
        options: ["commute", "commuter", "phase", "motivate"],
        correct: "commute",
        explanations: {
            guide: "不定冠词与形容词后的名词。a longer daily ________ 结构中需要接单数名词，表达每日的“通勤路程”，选 commute。",
            family: "commute (n./v.通勤) | commuter (n.通勤者) | phase (n.阶段) | motivate (v.激励)。",
            details: "daily commute 意为每日通勤。commuter 指具体的“通勤者个人”，不符合在此表达“往返路程/过程”的逻辑。",
            cn: "许多员工选择住在郊区，尽管这意味着每天去上班的通勤时间更长。",
            jp: "多くの従業員は、毎日の通勤（commute）時間が長くなるにもかかわらず、郊外に住むことを選んでいます。"
        }
    },
    {
        id: 4,
        target: "equip",
        category: "简单",
        stem: "The newly renovated conference center is fully ________ with advanced audiovisual systems.",
        options: ["equipped", "equipment", "accessible", "dedicated"],
        correct: "equipped",
        explanations: {
            guide: "被动语态与固定短语。is fully ________ with... 结构中，be equipped with 是托业高频固定短语，意为“配备有……”，选 equipped。",
            family: "equipped (p.p.配备的) | equipment (n.设备) | accessible (adj.易接近的) | dedicated (adj.敬业的)。",
            details: "is equipped with 构成完整的被动结构。equipment 是名词，不能跟在系动词 is 和副词 fully 之后作动词分词。",
            cn: "新翻修的会议中心配备了先进的视听系统。",
            jp: "新しく改修された会議センターには、高度な視聴覚システムが完全に見備えられています（equipped）。"
        }
    },
    {
        id: 5,
        target: "motivate",
        category: "简单",
        stem: "The manager offered performance bonuses in order to ________ sales staff to exceed their monthly targets.",
        options: ["motivate", "motivation", "accommodation", "numerous"],
        correct: "motivate",
        explanations: {
            guide: "不定式结构中的动词原形。in order to 后面需要接动词原形，表达“激励”销售员工，选 motivate。",
            family: "motivate (v.激励) | motivation (n.动力) | accommodation (n.住宿) | numerous (adj.许多的)。",
            details: "in order to do sth 结构，to 后面跟动词原形 motivate。motivation 是名词，不能跟在 in order to 之后作谓语动词。",
            cn: "经理提供绩效奖金，以激励销售人员超越每月的目标。",
            jp: "マネージャーは、営業スタッフが月間目標を超えるよう動機付ける（motivate）ために業績ボーナスを提示しました。"
        }
    },
    {
        id: 6,
        target: "accommodation",
        category: "简单",
        stem: "The business trip travel package covers airfare and four-star hotel ________ for all attending representatives.",
        options: ["accommodations", "accommodate", "coordinate", "phase"],
        correct: "accommodations",
        explanations: {
            guide: "差旅名词搭配。four-star hotel ________ 指四星级酒店“住宿”，选名词复数形式 accommodations。",
            family: "accommodations (n.住宿/复数) | accommodate (v.容纳) | coordinate (v.协调) | phase (n.阶段)。",
            details: "hotel accommodations（酒店食宿/住宿）是托业差旅报销与预订场景的标准复数名词用法。accommodate 是动词，不能作名词短语的中心词。",
            cn: "出差旅游套餐包含所有与会代表的机票和四星级酒店住宿。",
            jp: "出張旅行パッケージには、すべての参加代表者の航空運賃と4つ星ホテルの宿泊施設（accommodations）が含まれています。"
        }
    },
    {
        id: 7,
        target: "dedicated",
        category: "中等",
        stem: "The company owes its market leadership to a highly ________ team of software developers.",
        options: ["dedicated", "dedicate", "equip", "accessible"],
        correct: "dedicated",
        explanations: {
            guide: "副词修饰形容词作定语。a highly ________ team 中，副词 highly 后面需要接形容词修饰 team，表达“极具敬业精神的/全心全意的”团队，选 dedicated。",
            family: "dedicated (adj.敬业的) | dedicate (v.奉献) | equip (v.装备) | accessible (adj.易接近的)。",
            details: "a highly dedicated team 属于招聘与员工赞扬场景的高频固定搭配。dedicate 是动词原形，不能被副词 highly 直接修饰作前置定语。",
            cn: "该公司将其市场领导地位归功于一支高度敬业的软件开发人员团队。",
            jp: "同社は、その市場指導的地位を、高度に専心的な（dedicated）ソフトウェア開発チームのおかげであると考えています。"
        }
    },
    {
        id: 8,
        target: "accessible",
        category: "中等",
        stem: "The new regional headquarters is conveniently ________ by all major highways and public transit lines.",
        options: ["accessible", "accessibility", "commute", "motivate"],
        correct: "accessible",
        explanations: {
            guide: "系动词与副词后的形容词表语。is conveniently ________ 结构中，副词 conveniently 后面需要接形容词作表语，选 accessible（易于到达的）。",
            family: "accessible (adj.易于到达的) | accessibility (n.无障碍/可达性) | commute (v.通勤) | motivate (v.激励)。",
            details: "is conveniently accessible by... 是托业关于地理位置与交通便利性描述最高频的表述之一。accessibility 是名词，不能作表语。",
            cn: "新的区域总部交通便利，可以通过所有主要高速公路和公共交通线路轻松到达。",
            jp: "新しい地域本社は、すべての主要高速道路や公共交通機関から便利にアクセス可能（accessible）です。"
        }
    },
    {
        id: 9,
        target: "coordinate",
        category: "中等",
        stem: "The administrative assistant was appointed to ________ logistics for the international trade symposium.",
        options: ["coordinate", "coordination", "numerous", "accommodation"],
        correct: "coordinate",
        explanations: {
            guide: "动词不定式结构。was appointed to 后面需要接动词原形，表达被任命去“协调/统筹”后勤工作，选 coordinate。",
            family: "coordinate (v.协调) | coordination (n.协调) | numerous (adj.许多的) | accommodation (n.住宿)。",
            details: "was appointed to do sth 结构中，to 后面接动词原形 coordinate。coordination 是名词，不能直接跟在不定式符号 to 之后。",
            cn: "行政助理被任命统筹国际贸易研讨会的后勤工作。",
            jp: "行政アシスタントは、国際貿易シンポジウムのロジスティクスを調整する（coordinate）ために任命されました。"
        }
    },
    {
        id: 10,
        target: "phase",
        category: "中等",
        stem: "Architects announced that the multi-million dollar expansion project has officially entered its second ________.",
        options: ["phase", "phased", "enhance", "commute"],
        correct: "phase",
        explanations: {
            guide: "序数词与形容词后的名词。entered its second ________ 结构中，序数词 second 后面需要接名词，表达进入其第二“阶段”，选 phase。",
            family: "phase (n.阶段) | phased (adj.分阶段的) | enhance (v.提升) | commute (v.通勤)。",
            details: "enter its second phase（进入第二阶段）是工程与项目管理的核心表达。phased 是分词/形容词，不能直接作动词 entered 的宾语中心词。",
            cn: "建筑师宣布，这个耗资数百万美元的扩张项目已正式进入第二阶段。",
            jp: "建築家たちは、数百万ドル規模の拡張プロジェクトが正式に第2段階（phase）に入ったと発表しました。"
        }
    },
    {
        id: 11,
        target: "motivate",
        category: "中等",
        stem: "Creating a positive corporate culture is considered a key factor in keeping workers highly ________.",
        options: ["motivated", "motivate", "numerous", "phase"],
        correct: "motivated",
        explanations: {
            guide: "复合宾语补足语与分词形容词。keep workers highly ________ 结构中，使动动词 keep + 宾语 workers + 宾补，表达使员工保持高度“积极的/受激励的”，选 motivated。",
            family: "motivated (adj.受激励的) | motivate (v.激励) | numerous (adj.许多的) | phase (n.阶段)。",
            details: "keep sb motivated（使某人保持积极性）属于托业Part 5的高频分词考点。motivate 是动词原形，不能作宾语补足语。",
            cn: "营造积极的企业文化被认为是保持员工高度工作积极性的关键因素。",
            jp: "前向きな企業文化を構築することは、従業員が高度に意欲（motivated）を維持するための重要な要因と考えられています。"
        }
    },
    {
        id: 12,
        target: "enhance",
        category: "中等",
        stem: "The newly introduced software updates provided substantial ________ to system security and processing speeds.",
        options: ["enhancements", "enhance", "dedicated", "accessible"],
        correct: "enhancements",
        explanations: {
            guide: "形容词后的名词宾语。provided substantial ________ 中，形容词 substantial（实质性的）后面需要接名词，选 enhancements（改进/提升）。",
            family: "enhancements (n.提升/改进) | enhance (v.提升) | dedicated (adj.敬业的) | accessible (adj.易接近的)。",
            details: "provided substantial enhancements to... 意为“对……提供了大幅改进”。enhance 是动词，不能直接放在形容词 substantial 之后作宾语。",
            cn: "最新推出的软件更新对系统安全性和处理速度进行了大幅改进。",
            jp: "新しく導入されたソフトウェアアップデートにより、システムの安全性と処理速度が大幅に向上（enhancements）しました。"
        }
    },
    {
        id: 13,
        target: "dedicated",
        category: "困难",
        stem: "To process customer inquiries more efficiently, the tech company established a phone line ________ solely to technical support.",
        options: ["dedicated", "dedicate", "equip", "numerous"],
        correct: "dedicated",
        explanations: {
            guide: "非谓语动词后置定语与固定搭配。a phone line ________ solely to... 中，dedicated 作后置定语修饰 phone line，构成 be dedicated to（专门用于……）。",
            family: "dedicated (p.p.专用的/后置定语) | dedicate (v.奉献) | equip (v.装备) | numerous (adj.许多的)。",
            details: "a line dedicated to technical support 意为“专用于技术支持的电话热线”。dedicate 是动词原形，不能直接置于名词后充当修饰成分。",
            cn: "为了更高效地处理客户咨询，该科技公司建立了一条专门用于技术支持的电话热线。",
            jp: "顧客からの問い合わせをより効率的に処理するため、そのIT企業は技術サポート専用の（dedicated）電話回線を開設しました。"
        }
    },
    {
        id: 14,
        target: "coordinate",
        category: "困难",
        stem: "The smooth execution of the merger was made possible through the close ________ between human resources and accounting.",
        options: ["coordination", "coordinate", "accommodation", "commute"],
        correct: "coordination",
        explanations: {
            guide: "介词与形容词后的名词。through the close ________ 结构中，定冠词 the 和形容词 close 后面需要接名词形式 coordination（协调/配合）。",
            family: "coordination (n.协调/配合) | coordinate (v.协调) | accommodation (n.住宿) | commute (v.通勤)。",
            details: "close coordination between A and B 意为“A 与 B 之间的密切配合”。coordinate 是动词，不能直接被形容词 close 修饰作介词宾语。",
            cn: "正是由于人力资源部与财务部之间的密切配合，合并工作才得以顺利进行。",
            jp: "合併の滑らかな実施は、人事部門と経理部門の間の緊密な連携（coordination）によって可能となりました。"
        }
    },
    {
        id: 15,
        target: "accessible",
        category: "困难",
        stem: "Improving document ________ for visually impaired employees is one of the company's highest diversity priorities.",
        options: ["accessibility", "accessible", "motivate", "equip"],
        correct: "accessibility",
        explanations: {
            guide: "动名词后的名词宾语与复合名词。Improving document ________ 中，Improving 后面需要名词作宾语，选 accessibility 构成“无障碍调阅性”。",
            family: "accessibility (n.无障碍/可达性) | accessible (adj.可进入的) | motivate (v.激励) | equip (v.装备)。",
            details: "document accessibility 属于企业多元化与无障碍设施场景的高阶词汇。accessible 是形容词，不能充当动名词 Improving 的宾语中心词。",
            cn: "提高视力障碍员工的文件无障碍查阅调阅性，是该公司多元化优先事项之一。",
            jp: "視覚障害を持つ従業員のための文書のアクセシビリティ（accessibility）向上は、同社のダイバーシティにおける最優先事項の1つです。"
        }
    },
    {
        id: 16,
        target: "phase",
        category: "困难",
        stem: "The government regulatory agency decided to ________ in the strict emission rules over a three-year implementation period.",
        options: ["phase", "phased", "numerous", "dedicated"],
        correct: "phase",
        explanations: {
            guide: "动词短语搭配与不定式。decided to ________ in... 中，decide to 后面需要接动词原形，phase in 是固定短语，意为“逐步分阶段引入”。",
            family: "phase (v.分阶段实施) | phased (adj.分阶段的) | numerous (adj.许多的) | dedicated (adj.敬业的)。",
            details: "phase in sth 意为“逐步分阶段推行某政策/规定”。phased 是过去分词，不能跟在不定式符号 to 之后作动词原形。",
            cn: "政府监管机构决定在三年的实施期内逐步分阶段引入严格的排放规定。",
            jp: "政府の規制当局は、3年間の実施期間にわたって厳格な排出ルールを段階的に導入する（phase in）ことを決定しました。"
        }
    },
    {
        id: 17,
        target: "equip",
        category: "困难",
        stem: "The purchasing department is evaluating a major procurement of medical ________ for the newly built regional clinic.",
        options: ["equipment", "equip", "accommodations", "commute"],
        correct: "equipment",
        explanations: {
            guide: "不可数名词作宾语。procurement of medical ________ 结构中，介词 of 后面需要接名词，选不可数名词 equipment（设备）。",
            family: "equipment (n.设备/不可数) | equip (v.装备) | accommodations (n.住宿) | commute (v.通勤)。",
            details: "medical equipment（医疗设备）是托业设施采购场景的高频专属词。equip 是动词；equipment 永远不可数，不能加 s。",
            cn: "采购部门正在评估为新建区域诊所采购大型医疗设备的方案。",
            jp: "購買部門は、新設された地域クリニック向け医療設備（equipment）の大規模調達を評価しています。"
        }
    },
    {
        id: 18,
        target: "numerous",
        category: "困难",
        stem: "On ________ occasions, the safety director pointed out the necessity of wearing protective gear in the factory floor.",
        options: ["numerous", "number", "enhance", "accessible"],
        correct: "numerous",
        explanations: {
            guide: "形容词修饰复数名词。On ________ occasions 中，需要形容词修饰复数名词 occasions（场合/时刻），选 numerous 表达“在许多场合/多次”。",
            family: "numerous (adj.许多的) | number (n.数字) | enhance (v.提升) | accessible (adj.易接近的)。",
            details: "On numerous occasions 属于商务英语中表达“多次/屡次”的高阶固定句头介词短语。number 是名词，不能在此修饰 occasions。",
            cn: "安全总监曾多次强调在工厂车间内佩戴防护装备的必要性。",
            jp: "安全ディレクターは、工場内で保護具を着用する必要性を数多くの機会（numerous occasions）で指摘しました。"
        }
    }
];