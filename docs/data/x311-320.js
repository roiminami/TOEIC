// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data671-680.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "sanitation",
        pos: "名",
        ipa: "/ˌsænɪˈteɪʃn/",
        cn: "环境卫生，公共卫生，卫生设施",
        jp: "衛生設備、公衆衛生、衛生管理",
        family: "sanitize / sanitized / sanitary / sanitizer",
        tips: "设施管理与质检高频：sanitation standards/department（卫生标准/环卫部门），food sanitation（食品卫生）。",
        desc: "Maintain strict workplace sanitation standards."
    },
    {
        word: "sanitized",
        pos: "形/動",
        ipa: "/ˈsænɪtaɪzd/",
        cn: "已消毒的，杀菌的；对……消毒（sanitize的过去式/分词）",
        jp: "消毒された、殺菌された",
        family: "sanitize / sanitation / sanitizer",
        tips: "医疗与餐饮保洁高频：thoroughly sanitized equipment（彻底消毒的设备），sanitized surfaces（消过毒的台面）。",
        desc: "All medical tools were sanitized."
    },
    {
        word: "hygiene",
        pos: "名",
        ipa: "/ˈhaɪdʒiːn/",
        cn: "卫生，清洁，保健",
        jp: "衛生、清潔、衛生状態",
        family: "hygienic / hygienically / hygienist",
        tips: "餐饮服务与安全合规高频：personal/food hygiene（个人/食品卫生），hygiene regulations（卫生法规）。",
        desc: "Kitchen staff follow strict hygiene."
    },
    {
        word: "corridors",
        pos: "名",
        ipa: "/ˈkɔːrɪdɔːrz/",
        cn: "走廊，通道，主要交通干线（复数）",
        jp: "廊下、通路、主要交通路（複数）",
        family: "corridor / corridors",
        tips: "建筑设施与交通走廊高频：office corridors（办公走廊），busy transportation corridors（繁忙的交通干线）。",
        desc: "Clean the hallway corridors regularly."
    },
    {
        word: "profitability",
        pos: "名",
        ipa: "/ˌprɑːfɪtəˈbɪləti/",
        cn: "盈利能力，收益性，利润率",
        jp: "収益性、採算性",
        family: "profit / profitable / profitably",
        tips: "财报与商业战略核心词：long-term profitability（长期盈利能力），improve/restore profitability（提高/恢复盈利）。",
        desc: "The plan will increase profitability."
    },
    {
        word: "cuisine",
        pos: "名",
        ipa: "/kwɪˈziːn/",
        cn: "烹饪，风味美食，菜肴",
        jp: "料理、特定の地域の料理",
        family: "culinary",
        tips: "餐饮与款待业高频：authentic/international cuisine（正宗/国际美食），gourmet cuisine（精致佳肴）。",
        desc: "They serve fine local cuisine."
    },
    {
        word: "orchestra",
        pos: "名",
        ipa: "/ˈɔːrkɪstrə/",
        cn: "管弦乐队，交响乐团",
        jp: "オーケストラ、管弦楽団",
        family: "orchestral / orchestrate / orchestration",
        tips: "文化活动与赞助高频：symphony/philharmonic orchestra（交响乐团/爱乐乐团），orchestra conductor（乐团指挥）。",
        desc: "The symphony orchestra performed tonight."
    },
    {
        word: "refuge",
        pos: "名",
        ipa: "/ˈrefjuːdʒ/",
        cn: "避难，庇护，避难所",
        jp: "避難、避難所、保護",
        family: "refugee / refuges",
        tips: "安全与天气高频搭配：seek/take refuge from the storm（在暴风雨中避难），wildlife refuge（野生动物保护区）。",
        desc: "Travelers sought refuge from rain."
    },
    {
        word: "sought",
        pos: "動",
        ipa: "/sɔːt/",
        cn: "寻找，谋求，请求（seek的过去式/分词）",
        jp: "求めた、探した（seekの過去・過去分詞）",
        family: "seek / seeking / seeker",
        tips: "商务决策与法务高频搭配：sought approval/advice/funding（寻求批准/征求建议/谋求资金）。",
        desc: "They sought expert legal advice."
    },
    {
        word: "gale",
        pos: "名",
        ipa: "/ɡeɪl/",
        cn: "大风，强风，八级大风",
        jp: "強風、大風、疾風",
        family: "gales / gale-force",
        tips: "天气警报与航运高频：gale warning（大风警报），gale-force winds（强风/暴风）。",
        desc: "The severe gale caused delays."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "cuisine",
        category: "简单",
        stem: "The downtown bistro is celebrated by food critics for serving authentic Mediterranean ________.",
        options: ["cuisine", "orchestra", "refuge", "gale"],
        correct: "cuisine",
        explanations: {
            guide: "餐饮菜肴名词考点。authentic Mediterranean ________ 结合美食评论家的称赞，选 cuisine（烹饪/风味美食）。",
            family: "cuisine (n.风味美食/菜肴) | orchestra (n.管弦乐团) | refuge (n.避难所) | gale (n.大风)。",
            details: "Mediterranean cuisine 意为地中海风味美食。orchestra（管弦乐队）、refuge（避难所）均非餐厅供应的菜肴实体。",
            cn: "这家市中心的小酒馆因供应正宗的地中海美食而备受美食评论家的赞赏。",
            jp: "ダウンタウンのビストロは、本格的な地中海料理（cuisine）を提供することで料理評論家から高く評価されています。"
        }
    },
    {
        id: 2,
        target: "orchestra",
        category: "简单",
        stem: "The city's philharmonic ________ will hold a special charity concert at the municipal theater this Saturday.",
        options: ["orchestra", "sanitation", "profitability", "corridor"],
        correct: "orchestra",
        explanations: {
            guide: "音乐演出团体名词考点。philharmonic ________ 结合在市立剧院举办慈善音乐会，选 orchestra（交响乐团/管弦乐队）。",
            family: "orchestra (n.管弦乐队/交响乐团) | sanitation (n.环境卫生) | profitability (n.盈利能力) | corridor (n.走廊)。",
            details: "philharmonic orchestra 意为爱乐乐团/交响乐团。sanitation（卫生）、profitability（盈利）均非举办音乐会的主体演艺团体。",
            cn: "该市爱乐交响乐团将于本周六在市立剧院举办一场特别慈善音乐会。",
            jp: "市のフィルハーモニー管弦楽団（orchestra）は、今週の土曜日に市劇場で特別チャリティーコンサートを開催します。"
        }
    },
    {
        id: 3,
        target: "hygiene",
        category: "简单",
        stem: "All food service employees must follow strict personal ________ protocols, including frequent handwashing.",
        options: ["hygiene", "profitability", "orchestra", "gale"],
        correct: "hygiene",
        explanations: {
            guide: "餐饮卫生规范名词考点。strict personal ________ protocols 结合勤洗手等健康要求，选 hygiene（卫生/清洁）。",
            family: "hygiene (n.卫生/清洁) | profitability (n.盈利能力) | orchestra (n.乐团) | gale (n.大风)。",
            details: "personal hygiene 意为个人卫生。profitability（盈利）、orchestra（乐团）与洗手消毒等安全卫生守则无关。",
            cn: "所有餐饮服务员工都必须遵守严格的个人卫生规范，包括经常洗手。",
            jp: "すべての飲食サービス従業員は、頻繁な手洗いを含む厳格な個人衛生（hygiene）プロトコルに従わなければなりません。"
        }
    },
    {
        id: 4,
        target: "gale",
        category: "简单",
        stem: "Coastal ferry services were suspended after maritime authorities issued a severe ________ warning.",
        options: ["gale", "cuisine", "refuge", "profitability"],
        correct: "gale",
        explanations: {
            guide: "恶劣天气名词考点。severe ________ warning 结合沿海轮渡停运，选 gale（大风/强风）。",
            family: "gale (n.大风/强风) | cuisine (n.美食) | refuge (n.避难) | profitability (n.收益性)。",
            details: "gale warning 属于航运与气象专属词组，意为大风预警。cuisine（美食）、profitability（盈利）均非导致停航的天气灾害警报。",
            cn: "在海事部门发布严重大风预警后，沿海轮渡服务被暂停营运。",
            jp: "海事当局が深刻な強風（gale）警報を発令した後、沿岸フェリーの運航は停止されました。"
        }
    },
    {
        id: 5,
        target: "sought",
        category: "简单",
        stem: "Before signing the commercial lease agreement, the prospective tenant ________ legal counsel from a property lawyer.",
        options: ["sought", "sanitized", "corridored", "cuisined"],
        correct: "sought",
        explanations: {
            guide: "动宾搭配过去式考点。________ legal counsel 结合签署租赁合同前向律师咨询，选 sought（寻求/谋求，seek的过去式）。",
            family: "sought (v-ed寻求/谋求) | sanitized (v-ed消毒) | corridored (无此词) | cuisined (无此词)。",
            details: "sought legal counsel 意为寻求法律咨询/向律师请教。sanitized（消毒）不能与法律顾问搭配。",
            cn: "在签署商业租赁协议之前，意向租户向房地产律师寻求了法律咨询。",
            jp: "商業用不動産賃貸契約に署名する前に、見込み賃借人は不動産弁護士に法的助言を求めました（sought）。"
        }
    },
    {
        id: 6,
        target: "profitability",
        category: "简单",
        stem: "The strategic cost-reduction initiative significantly improved the manufacturing plant's overall ________.",
        options: ["profitability", "cuisine", "orchestra", "gale"],
        correct: "profitability",
        explanations: {
            guide: "财务指标名词考点。cost-reduction initiative improved overall ________ 结合降本增效举措提升工厂表现，选 profitability（盈利能力/收益性）。",
            family: "profitability (n.盈利能力/利润率) | cuisine (n.菜肴) | orchestra (n.乐团) | gale (n.大风)。",
            details: "improve profitability 意为提高盈利能力。cuisine（菜肴）、gale（大风）均非工厂成本削减举措所提升的财务指标。",
            cn: "这项战略性成本削减举措显著提高了该制造工厂的整体盈利能力。",
            jp: "戦略的なコスト削減の取り組みにより、製造工場の全体的な収益性（profitability）が大幅に向上しました。"
        }
    },
    {
        id: 7,
        target: "sanitation",
        category: "中等",
        stem: "Health inspectors awarded the industrial food processing facility the highest grade for plant ________ and safety.",
        options: ["sanitation", "profitability", "refuge", "corridor"],
        correct: "sanitation",
        explanations: {
            guide: "卫生安全并列名词。plant ________ and safety 结合卫生检查员对食品加工厂进行评估评级，选 sanitation（环境卫生/卫生设施）。",
            family: "sanitation (n.环境卫生/卫生管理) | profitability (n.盈利能力) | refuge (n.避难) | corridor (n.走廊)。",
            details: "plant sanitation and safety 意为工厂卫生与安全。profitability（盈利能力）、refuge（避难）均非食品卫生检查的评级考核对象。",
            cn: "卫生检查员因工厂出色的环境卫生与安全状况，向该工业食品加工厂评定了最高等级。",
            jp: "衛生検査官は、工場の衛生管理（sanitation）と安全性の高さに対し、食品加工施設に最高評価を与えました。"
        }
    },
    {
        id: 8,
        target: "corridors",
        category: "中等",
        stem: "Facilities staff installed motion-sensor LED lighting throughout all office ________ to reduce electricity consumption.",
        options: ["corridors", "cuisines", "orchestras", "gales"],
        correct: "corridors",
        explanations: {
            guide: "建筑内部通道名词复数。all office ________ 结合安装人体感应 LED 照明以节约用电，选 corridors（走廊/通道）。",
            family: "corridors (n.复数走廊/通道) | cuisines (n.菜肴) | orchestras (n.管弦乐团) | gales (n.大风)。",
            details: "office corridors 意为办公楼走廊通道。cuisines（风味美食）、orchestras（交响乐团）均非安装照明感应灯具的建筑物理区域。",
            cn: "后勤设施员工在所有办公室走廊安装了人体感应 LED 照明，以减少用电量。",
            jp: "施設スタッフは電力消費を削減するため、すべてのオフィスの廊下（corridors）に人感センサー付きLED照明を設置しました。"
        }
    },
    {
        id: 9,
        target: "refuge",
        category: "中等",
        stem: "Stranded commuters sought temporary ________ inside the train station during the sudden winter blizzard.",
        options: ["refuge", "hygiene", "profitability", "cuisine"],
        correct: "refuge",
        explanations: {
            guide: "动宾固定短语考点。sought temporary ________ inside the station 结合滞留乘客在暴风雪期间进站躲避，选 refuge（避难/庇护）。",
            family: "refuge (n.避难/庇护所) | hygiene (n.卫生) | profitability (n.盈利) | cuisine (n.菜肴)。",
            details: "seek/sought refuge 属于托业经典搭配，意为寻求庇护/避难。hygiene（卫生）、cuisine（餐饮）无法与 sought temporary 搭配。",
            cn: "在突降冬季暴风雪期间，滞留的通勤者在火车站内寻求临时避难。",
            jp: "冬の突然の猛吹雪の中、立ち往生した通勤客は駅の構内に一時的な避難（refuge）を求めました。"
        }
    },
    {
        id: 10,
        target: "sanitized",
        category: "中等",
        stem: "Hospital cleaning crews ensured that all surgical instruments were thoroughly ________ prior to the procedure.",
        options: ["sanitized", "profitable", "sought", "corridored"],
        correct: "sanitized",
        explanations: {
            guide: "医疗设备状态被动分词。instruments were thoroughly ________ 结合手术前对器械进行严格处理，选 sanitized（已消毒的/已杀菌的）。",
            family: "sanitized (adj./v-ed消毒的) | profitable (adj.盈利的) | sought (v-ed寻求的) | corridored (无此词)。",
            details: "thoroughly sanitized 意为彻底消毒。profitable（有利润的）、sought（被寻求的）与手术器械的无菌消毒处理语境不符。",
            cn: "医院保洁团队确保所有手术器械在手术开始前都经过了彻底消毒。",
            jp: "病院の清掃クルーは、手術の前にすべての手術器具が完全に消毒されている（sanitized）ことを確認しました。"
        }
    },
    {
        id: 11,
        target: "sought",
        category: "中等",
        stem: "The technology startup actively ________ venture capital funding to accelerate the development of its cloud platform.",
        options: ["sought", "sanitized", "galed", "orchestrated"],
        correct: "sought",
        explanations: {
            guide: "融资商业动词过去式。actively ________ venture capital funding 结合初创企业筹集风投资金以加速研发，选 sought（谋求/寻求，seek的过去式）。",
            family: "sought (v-ed谋求/寻找) | sanitized (v-ed消毒) | galed (无此词) | orchestrated (v-ed精心策划/编曲)。",
            details: "sought funding 意为寻求资金支持。sanitized（消毒）不能修饰资本运作。",
            cn: "该科技初创公司积极寻求风险投资资金，以加快其云平台的开发。",
            jp: "そのテクノロジー新興企業は、クラウドプラットフォームの開発を加速させるためにベンチャーキャピタル資金を積極的に求めました（sought）。"
        }
    },
    {
        id: 12,
        target: "profitability",
        category: "中等",
        stem: "Despite rising raw material expenditures, the company maintained its ________ by streamlining global supply operations.",
        options: ["profitability", "cuisine", "orchestra", "sanitation"],
        correct: "profitability",
        explanations: {
            guide: "经营收益名词考点。maintained its ________ 结合原材料成本上涨但通过优化供应链维持了利润，选 profitability（盈利能力/利润率）。",
            family: "profitability (n.盈利能力/收益性) | cuisine (n.菜肴) | orchestra (n.乐团) | sanitation (n.卫生)。",
            details: "maintain profitability 属于财报高频搭配，意为保持盈利水平。cuisine（菜肴）、orchestra（乐团）均非商业运营维持的财务指标。",
            cn: "尽管原材料支出上涨，该公司仍通过精简全球供应业务保持了其盈利能力。",
            jp: "原材料費の上昇にもかかわらず、同社はグローバル供給業務を効率化することによって収益性（profitability）を維持しました。"
        }
    },
    {
        id: 13,
        target: "hygiene",
        category: "困难",
        stem: "The pharmaceutical laboratory operates under strictly ________ conditions to prevent cross-contamination during manufacturing.",
        options: ["hygienic", "hygiene", "hygienically", "sanitation"],
        correct: "hygienic",
        explanations: {
            guide: "派生形容词修饰名词。under strictly ________ conditions 结构中，副词 strictly 后面接形容词修饰 conditions，选 hygienic（卫生的/清洁无菌的）。",
            family: "hygienic (adj.卫生的/无菌的) | hygiene (n.卫生) | hygienically (adv.卫生地) | sanitation (n.卫生设施)。",
            details: "hygienic conditions 意为卫生/洁净条件。hygiene 是名词，不能被副词 strictly 直接修饰充当 conditions 的定语。",
            cn: "该制药实验室在极其卫生的条件下运行，以防止制造过程中的交叉污染。",
            jp: "その製薬実験室は、製造中の交差汚染を防ぐために極めて衛生的な（hygienic）条件下で稼働しています。"
        }
    },
    {
        id: 14,
        target: "sanitation",
        category: "困难",
        stem: "Food processing regulations mandate that workers ________ all production surfaces at the end of each work shift.",
        options: ["sanitize", "sanitation", "sanitary", "sanitizer"],
        correct: "sanitize",
        explanations: {
            guide: "mandate that 从句虚拟语气动词原形。mandate that workers ________ 结构中，that 从句采用 (should) + 动词原形，表达对生产台面进行“消毒/清洗”，选动词原形 sanitize。",
            family: "sanitize (v.消毒/杀菌) | sanitation (n.环境卫生) | sanitary (adj.卫生的) | sanitizer (n.消毒剂)。",
            details: "sanitize surfaces 意为对台面进行消毒。sanitation 是名词，不能在从句中充当主语 workers 后的谓语动词。",
            cn: "食品加工法规强制要求工人在每班工作结束时对所有生产台面进行消毒。",
            jp: "食品加工規制により、作業員は各シフトの終わりにすべての製造作業台を消毒する（sanitize）ことが義務付けられています。"
        }
    },
    {
        id: 15,
        target: "cuisine",
        category: "困难",
        stem: "The executive chef gained international recognition for her innovative ________ techniques blending Asian and European flavors.",
        options: ["culinary", "cuisine", "cuisines", "sanitary"],
        correct: "culinary",
        explanations: {
            guide: "派生烹饪修饰形容词。innovative ________ techniques 结构中，修饰 techniques（技法/技艺），选派生形容词 culinary（烹饪的/美食的）。",
            family: "culinary (adj.烹饪的/厨房的) | cuisine (n.风味菜肴) | cuisines (n.复数菜肴) | sanitary (adj.卫生的)。",
            details: "culinary techniques 意为烹饪技法。cuisine 是名词（指菜系/风味菜肴本身），修饰技能与技法时规范选用派生形容词 culinary。",
            cn: "这位行政主厨因其融合亚洲与欧洲风味的创新烹饪技法而赢得了国际赞誉。",
            jp: "総料理長は、アジアとヨーロッパの風味を融合させた革新的な料理（culinary）技術で国際的な評価を獲得しました。"
        }
    },
    {
        id: 16,
        target: "orchestra",
        category: "困难",
        stem: "Music critics commended the guest conductor for delivering a masterfully ________ performance with the philharmonic.",
        options: ["orchestrated", "orchestra", "orchestral", "orchestration"],
        correct: "orchestrated",
        explanations: {
            guide: "副词修饰过去分词形容词。a masterfully ________ performance 结构中，副词 masterfully 后面接分词/形容词形式 orchestrated，表达“精心编排的/巧妙协调的”演出，选 orchestrated。",
            family: "orchestrated (adj./v-ed精心编排协调的) | orchestra (n.乐团) | orchestral (adj.管弦乐的) | orchestration (n.管弦乐编曲)。",
            details: "a masterfully orchestrated performance 意为一场编排极其巧妙精湛的演出。orchestra 是名词，不能被副词 masterfully 修饰作定语。",
            cn: "乐评人赞扬特邀指挥家与爱乐乐团带来了一场编排极其精湛出色的演出。",
            jp: "音楽評論家は、フィルハーモニーとともに見事に編成/調整された（orchestrated）演奏を披露した客演指揮者を称賛しました。"
        }
    },
    {
        id: 17,
        target: "refuge",
        category: "困难",
        stem: "Commercial cargo vessels sought safe ________ in the deep-water harbor to avoid the approaching offshore typhoon.",
        options: ["refuge", "refugee", "sanitation", "gale"],
        correct: "refuge",
        explanations: {
            guide: "航运避风固定动宾搭配。sought safe ________ in the harbor 结合商船入港躲避台风，选 refuge（庇护/避难）。",
            family: "refuge (n.避难/庇护) | refugee (n.难民) | sanitation (n.卫生) | gale (n.大风)。",
            details: "seek safe refuge 意为寻求安全避风港/避难。refugee 指难民（人），gale 指大风灾害本身，不能作 sought safe 的宾语中心语。",
            cn: "商用货船在深水港寻求安全庇护，以躲避即将来临的近海台风。",
            jp: "商業貨物船は、迫り来る沖合の台風を避けるために深水港に安全な避難（refuge）を求めました。"
        }
    },
    {
        id: 18,
        target: "gale",
        category: "困难",
        stem: "The newly constructed wind turbine towers were engineered to withstand sustained ________ winds without structural damage.",
        options: ["gale-force", "gale", "gales", "hygiene"],
        correct: "gale-force",
        explanations: {
            guide: "复合形容词修饰名词。sustained ________ winds 结构中，修饰 winds（大风），表达“大风级别的/烈风级的”强风，选复合形容词形式 gale-force。",
            family: "gale-force (adj.大风强度的/烈风级的) | gale (n.大风) | gales (n.复数大风) | hygiene (n.卫生)。",
            details: "gale-force winds 属于气象与工程高频专有名词，专指大风/烈风。修饰 winds 时固定使用复合形容词形式 gale-force。",
            cn: "新建造的风力发电机塔架经过专门工程设计，能够承受持续的烈风级大风而不会发生结构性损坏。",
            jp: "新しく建設された風力タービンタワーは、構造的な損傷を受けることなく持続的な強風規模の（gale-force）風に耐えられるよう設計されました。"
        }
    }
];