// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data251-260.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "apprenticeship",
        pos: "名",
        ipa: "/əˈprentɪʃɪp/",
        cn: "学徒期，见习期，学徒工身份",
        jp: "見習い期間、実務修業",
        family: "apprentice / apprenticed",
        tips: "职业技术教育与人事培训核心词汇：serve an apprenticeship（当学徒/完成见习），vocational apprenticeship program（职业学徒见习计划）。",
        desc: "He completed a two-year apprenticeship."
    },
    {
        word: "sizable",
        pos: "形",
        ipa: "/ˈsaɪzəbl/",
        cn: "相当大的，可观的",
        jp: "かなり大きい、相当な",
        family: "size / sizably / sizeable",
        tips: "财报与商务投资高频修饰词：a sizable investment / profit / donation / proportion（巨额投资/可观利润/大笔捐赠/相当大的比例）。",
        desc: "The company made a sizable profit."
    },
    {
        word: "vicinity",
        pos: "名",
        ipa: "/vəˈsɪnəti/",
        cn: "邻近，附近",
        jp: "近辺、付近、周辺",
        family: "in the vicinity of",
        tips: "商业选址与物业环境核心考点，几乎固定考查介词短语：in the vicinity of... 或 in the immediate vicinity（在……的紧邻区域内）。",
        desc: "There are shops in the vicinity."
    },
    {
        word: "installment",
        pos: "名",
        ipa: "/ɪnˈstɔːlmənt/",
        cn: "分期付款；（分期连载的）一期，一部",
        jp: "分割払い（の1回分）；（連載などの）1回分",
        family: "install / installment plan / monthly installments",
        tips: "消费金融与大宗采购必考词：pay in monthly installments（按月分期付款），an installment plan（分期付款方案）。",
        desc: "You can pay in monthly installments."
    },
    {
        word: "perishable",
        pos: "形/名",
        ipa: "/ˈperɪʃəbl/",
        cn: "易腐烂的，易变质的；生鲜易腐食品（复数）",
        jp: "傷みやすい、腐りやすい；生鮮食品",
        family: "perish / perishables / non-perishable",
        tips: "仓储物流与生鲜零售核心词汇：perishable goods / items（易腐生鲜货物）；复数形式 perishables 直接指代易腐食品群。",
        desc: "Milk is a perishable product."
    },
    {
        word: "bustling",
        pos: "形",
        ipa: "/ˈbʌslɪŋ/",
        cn: "繁忙的，熙熙攘攘的，喧闹繁华的",
        jp: "活気に満ちた、にぎやかな",
        family: "bustle / bustled",
        tips: "听力 Part 1 与阅读选址高频形容词：a bustling commercial district / bustling street / bustling port（繁华热闹的商业区/街道/繁忙的港口）。",
        desc: "The hotel is in a bustling area."
    },
    {
        word: "ventilation",
        pos: "名",
        ipa: "/ˌventɪˈleɪʃn/",
        cn: "通风，换气设备",
        jp: "換気、風通し、換気設備",
        family: "ventilate / ventilated / ventilator",
        tips: "厂房安全规程与设施维护高频词：improve air ventilation（改善空气流通），adequate ventilation system（完备的换气系统）。",
        desc: "The room needs good ventilation."
    },
    {
        word: "demolish",
        pos: "動",
        ipa: "/dɪˈmɑːlɪʃ/",
        cn: "拆毁，拆除（建筑物）",
        jp: "（建物を）取り壊す、解体する",
        family: "demolition / demolished / demolishing",
        tips: "市政规划与不动产改造核心动词：demolish the outdated factory / warehouse（拆除旧厂房），派生名词 demolition permit（拆除许可证）。",
        desc: "They plan to demolish the old building."
    },
    {
        word: "avid",
        pos: "形",
        ipa: "/ˈævɪd/",
        cn: "热衷的，狂热的，渴求的",
        jp: "熱心な、熱狂的な",
        family: "avidly / avidity",
        tips: "职场人物特质与阅读描写高频词：an avid reader / supporter / collector（狂热的读者/热心支持者/狂热收藏家），等同于 enthusiastic。",
        desc: "She is an avid reader."
    },
    {
        word: "delegate",
        pos: "動/名",
        ipa: "/ˈdelɪɡeɪt/ (v.), /ˈdelɪɡət/ (n.)",
        cn: "委派，授（权）；代表，参会代表",
        jp: "（権限などを）委任する；代表者、代議員",
        family: "delegation / delegated / delegating",
        tips: "托业双重核心考点：1. 动词考向属下分派授权（delegate tasks/authority to subordinates）；2. 名词考国际峰会参会代表（conference delegates）。",
        desc: "Managers must learn to delegate tasks."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "demolish",
        category: "简单",
        stem: "The municipal redevelopment agency plans to ________ the abandoned warehouse to make way for a modern community park.",
        options: ["demolish", "demolition", "bustling", "perishable"],
        correct: "demolish",
        explanations: {
            guide: "动词不定式结构。plans to 后面必须接动词原形，后接宾语 the abandoned warehouse，表达市政机构计划“拆除”废弃仓库，选 demolish。",
            family: "demolish (v.拆除/拆毁) | demolition (n.拆毁) | bustling (adj.繁华忙碌的) | perishable (adj.易腐的)。",
            details: "to 为不定式符号，后面必须接动词原形。demolition 是名词，无法充当不定式中带宾语的核心动词原形。",
            cn: "市政重建机构计划拆除该废弃仓库，以便为建设现代社区公园腾出空间。",
            jp: "市再開発局は、近代的なコミュニティパークの敷地を確保するため、廃墟となった倉庫を取り壊す（demolish）ことを計画しています。"
        }
    },
    {
        id: 2,
        target: "perishable",
        category: "简单",
        stem: "All ________ grocery items, such as fresh dairy products and seafood, must be transported in refrigerated containers.",
        options: ["perishable", "perish", "avid", "installment"],
        correct: "perishable",
        explanations: {
            guide: "形容词作定语修饰名词。空格修饰名词短语 grocery items，perishable goods/items 是托业生鲜零售与仓储物流核心专属搭配，选 perishable。",
            family: "perishable (adj.易腐烂的/易变质的) | perish (v.丧生/腐烂) | avid (adj.热衷的) | installment (n.分期付款)。",
            details: "perishable grocery items 意为易腐食品杂货。perish 是动词，不能直接放在限定词 All 之后充当前置定语形容词。",
            cn: "所有易变质的杂货商品，如新鲜乳制品和海鲜，都必须存放在冷藏集装箱内进行运输。",
            jp: "新鮮な乳製品や魚介類など、傷みやすい（perishable）食料品はすべて、冷蔵コンテナで輸送しなければなりません。"
        }
    },
    {
        id: 3,
        target: "bustling",
        category: "简单",
        stem: "The new retail branch is strategically located in a ________ commercial district near the central subway terminal.",
        options: ["bustling", "bustle", "ventilation", "delegate"],
        correct: "bustling",
        explanations: {
            guide: "形容词作定语修饰名词。a ________ commercial district 结构中需要形容词修饰商业区，bustling 意为“熙熙攘攘的/繁华忙碌的”，选 bustling。",
            family: "bustling (adj.繁忙的/熙熙攘攘的) | bustle (v./n.喧闹/忙乱) | ventilation (n.通风) | delegate (v.授权/n.代表)。",
            details: "a bustling commercial district 意为繁华热闹的商业区。bustle 是动词或名词，不能直接作为前置定语修饰名词短语 district。",
            cn: "新零售分店地理位置优越，坐落于靠近中央地铁终点站的繁华商业区内。",
            jp: "新しい小売支店は、中央地下鉄ターミナル近くの活気に満ちた（bustling）商業地区に戦略的に位置しています。"
        }
    },
    {
        id: 4,
        target: "ventilation",
        category: "简单",
        stem: "Factory technicians installed industrial exhaust fans to improve air ________ in the chemical testing facility.",
        options: ["ventilation", "ventilate", "sizable", "vicinity"],
        correct: "ventilation",
        explanations: {
            guide: "复合名词定语修饰。air 与 ventilation 组合，air ventilation 是工业安全与设施维护核心专有名词，意为“空气通风/换气系统”，选 ventilation。",
            family: "ventilation (n.通风/换气设备) | ventilate (v.使通风) | sizable (adj.相当大的) | vicinity (n.邻近)。",
            details: "air ventilation 属于工厂环境标准术语。ventilate 是动词，不能与名词 air 组合充当 improve 的宾语名词中心词。",
            cn: "工厂技术人员安装了工业排气扇，以改善化学检测设施内的空气流通。",
            jp: "工場の技術者は、化学試験施設内の空気の換気（ventilation）を改善するために工業用換気扇を設置しました。"
        }
    },
    {
        id: 5,
        target: "avid",
        category: "简单",
        stem: "As an ________ supporter of environmental sustainability, Dr. Vance frequently speaks at clean energy conferences.",
        options: ["avid", "avidly", "demolish", "apprenticeship"],
        correct: "avid",
        explanations: {
            guide: "不定冠词与名词之间的定语形容词。an ________ supporter 结构中需要形容词修饰名词 supporter，avid 意为“热衷的/坚定的”，选 avid。",
            family: "avid (adj.热衷的/热切的) | avidly (adv.热切地) | demolish (v.拆除) | apprenticeship (n.见习期)。",
            details: "an avid supporter 指坚定狂热的支持者。avidly 是副词，不能被不定冠词 an 修饰充当名词 supporter 的定语。",
            cn: "作为环境可持续发展的热心支持者，万斯博士经常在清洁能源会议上发表演讲。",
            jp: "環境の持続可能性の熱心な（avid）支持者として、ヴァンス博士はクリーンエネルギー会議で頻繁に講演しています。"
        }
    },
    {
        id: 6,
        target: "delegate",
        category: "简单",
        stem: "More than five hundred international ________ attended the opening reception of the global logistics symposium.",
        options: ["delegates", "delegation", "bustling", "perishable"],
        correct: "delegates",
        explanations: {
            guide: "数词修饰可数名词复数。five hundred 后面必须接可数名词复数，conference delegates 意为“会议代表/与会嘉宾”，选 delegates。",
            family: "delegates (n.参会代表/复数) | delegation (n.代表团) | bustling (adj.繁华的) | perishable (adj.易腐的)。",
            details: "five hundred delegates 指五百名参会代表个人。delegation 指代表团整体（集合名词），不能直接被数量五百修饰表示具体人数。",
            cn: "五百多位国际代表出席了全球物流研讨会的开幕招待酒会。",
            jp: "500人以上の海外からの代表者（delegates）が、グローバル物流シンポジウムの開会レセプションに出席しました。"
        }
    },
    {
        id: 7,
        target: "installment",
        category: "中等",
        stem: "Qualified commercial buyers may pay for the industrial printing machinery in twelve equal monthly ________.",
        options: ["installments", "installation", "vicinity", "sizable"],
        correct: "installments",
        explanations: {
            guide: "商业结算核心专属短语。pay in monthly installments 属于托业金融支付高频表达，意为“按月分期付款”，选复数名词 installments。",
            family: "installments (n.分期付款/复数) | installation (n.安装/设施) | vicinity (n.邻近) | sizable (adj.可观的)。",
            details: "in twelve monthly installments 专指分十二期月供付款。installation 指机器设备安装工程，与分期付款的财务概念完全脱节。",
            cn: "符合资格的企业买家可以分十二期等额月付款来购买这套工业印刷机械。",
            jp: "資格のある法人バイヤーは、12回の均等月払い分割払い（installments）で工業用印刷機械の代金を支払うことができます。"
        }
    },
    {
        id: 8,
        target: "vicinity",
        category: "中等",
        stem: "Because several residential complexes are located in the immediate ________ of the construction site, work must halt by 8:00 PM.",
        options: ["vicinity", "vicinities", "bustling", "delegate"],
        correct: "vicinity",
        explanations: {
            guide: "固定介词短语搭配。in the immediate vicinity of... 是不动产与施工管理核心短语，意为“在……的紧邻区域内”，选单数名词 vicinity。",
            family: "vicinity (n.邻近/周边/单数) | vicinities (n.复数) | bustling (adj.繁忙的) | delegate (v.授权)。",
            details: "in the immediate vicinity of 属于固定搭配。vicinity 在此搭配中固定采用单数形式，不使用复数。",
            cn: "由于几个住宅小区位于施工工地的紧邻区域内，所有施工作业必须在晚上 8:00 之前停止。",
            jp: "建設現場のすぐ近隣（immediate vicinity）にいくつかの住宅団地が位置しているため、作業は午後8時までに中止しなければなりません。"
        }
    },
    {
        id: 9,
        target: "sizable",
        category: "中等",
        stem: "The regional technology startup secured a ________ investment from a prominent venture capital firm yesterday.",
        options: ["sizable", "sizably", "demolish", "ventilation"],
        correct: "sizable",
        explanations: {
            guide: "不定冠词与名词之间的定语形容词。a ________ investment 结构中需要形容词修饰 investment，a sizable investment 意为“巨额投资/可观的投资”，选 sizable。",
            family: "sizable (adj.可观的/相当大的) | sizably (adv.相当大比例地) | demolish (v.拆除) | ventilation (n.通风)。",
            details: "a sizable investment 意为数额可观的投资。sizably 是副词，不能直接放在不定冠词 a 之后充当名词 investment 的定语。",
            cn: "该区域科技初创企业昨天获得了一家知名风险投资机构的巨额投资。",
            jp: "その地域のテクノロジースタートアップ企業は昨日、著名なベンチャーキャピタル会社からかなりの額の（sizable）投資を確保しました。"
        }
    },
    {
        id: 10,
        target: "delegate",
        category: "中等",
        stem: "To maintain operational efficiency, the project director must learn to ________ routine administrative tasks to department assistants.",
        options: ["delegate", "delegated", "avid", "installment"],
        correct: "delegate",
        explanations: {
            guide: "动词不定式与动介短语搭配。learn to 后面接动词原形，与介词 to 搭配构成 delegate tasks to sb（向某人分派/授权任务），选动词原形 delegate。",
            family: "delegate (v.分派/授权/n.代表) | delegated (v-ed形式) | avid (adj.热衷的) | installment (n.分期付款)。",
            details: "delegate routine tasks 意为授权分派日常琐事。delegated 为过去式或过去分词，不能在不定式符号 to 后面充当核心动词原形。",
            cn: "为了保持运营效率，项目总监必须学会将日常行政任务分派给部门助理。",
            jp: "業務効率を維持するために、プロジェクトディレクターは日常的な管理業務を部門アシスタントに委任する（delegate）ことを学ばなければなりません。"
        }
    },
    {
        id: 11,
        target: "apprenticeship",
        category: "中等",
        stem: "After completing a rigorous two-year ________ in commercial electrical wiring, Ms. Tanaka obtained her master technician license.",
        options: ["apprenticeship", "apprentice", "perishable", "vicinity"],
        correct: "apprenticeship",
        explanations: {
            guide: "不定冠词与复合定语后的名词中心语。a rigorous two-year ________ 结构中，修饰培训期，complete an apprenticeship 意为“完成见习期/学徒期”，选 apprenticeship。",
            family: "apprenticeship (n.学徒期/见习期) | apprentice (n.学徒工/人) | perishable (adj.易腐的) | vicinity (n.附近)。",
            details: "complete an apprenticeship 指修完学徒培训期。apprentice 指具体的学徒工个人，不能与描述时间跨度的 two-year 组合充当表示研修历程的名词。",
            cn: "在完成了为期两年的商业电气布线严格学徒见习之后，田中女士获得了高级技术员执照。",
            jp: "商業用電気配線に関する厳格な2年間の実務見習い期間（apprenticeship）を修了した後、田中氏は主任技術者のライセンスを取得しました。"
        }
    },
    {
        id: 12,
        target: "demolish",
        category: "中等",
        stem: "The outdated office complex is scheduled to be ________ next month to prepare the site for a residential tower.",
        options: ["demolished", "demolishing", "sizable", "bustling"],
        correct: "demolished",
        explanations: {
            guide: "被动语态不定式结构。scheduled to be 后面接及物动词的过去分词，建筑物与拆除之间为被动关系，be demolished 意为“被拆除”，选 demolished。",
            family: "demolished (v-ed被拆除的) | demolishing (现在分词) | sizable (adj.相当大的) | bustling (adj.繁华的)。",
            details: "is scheduled to be demolished 是建筑改造规划的标准被动语态表达。demolishing 为现在分词，缺少被动含义，在此语法结构中不成立。",
            cn: "该老旧办公楼建筑群定于下个月拆除，以便为住宅大厦建设平整场地。",
            jp: "時代遅れのオフィス複合施設は、住宅タワーのための敷地を準備するために来月取り壊される（demolished）予定です。"
        }
    },
    {
        id: 13,
        target: "perishable",
        category: "困难",
        stem: "The temperature-controlled freight logistics fleet is dedicated exclusively to the rapid transport of high-value ________.",
        options: ["perishables", "perishable", "installments", "ventilation"],
        correct: "perishables",
        explanations: {
            guide: "熟词生义与名词复数考点。介词 of 后面接名词复数作宾语，perishables 专指“生鲜易腐食品/易腐货物”，选复数名词 perishables。",
            family: "perishables (n.生鲜易腐货物/复数) | perishable (adj.易腐的) | installments (n.分期付款) | ventilation (n.通风)。",
            details: "transport of high-value perishables 指运输高价值生鲜品。perishable 是形容词，不能直接放在形容词 high-value 之后充当介词 of 的中心名词。",
            cn: "该温控货运物流车队专门致力于高价值生鲜易腐货物的快速运输。",
            jp: "温度管理された貨物物流フリートは、高価値の生鮮食品（perishables）の迅速な輸送専用に充てられています。"
        }
    },
    {
        id: 14,
        target: "delegate",
        category: "困难",
        stem: "A high-level trade ________ representing European agricultural exporters arrived in Tokyo yesterday to initiate bilateral talks.",
        options: ["delegation", "delegate", "apprenticeship", "vicinity"],
        correct: "delegation",
        explanations: {
            guide: "集体名词考点与同源词辨析。a high-level trade ________ 结构中，trade delegation 属于国际贸易谈判核心专有名词，意为“贸易代表团”，选 delegation。",
            family: "delegation (n.代表团/代表人员总称) | delegate (n.单个代表/v.授权) | apprenticeship (n.见习期) | vicinity (n.附近)。",
            details: "a trade delegation 指由多人组成的官方代表团集体。delegate 单数通常指具体的某一位代表个体，不能直接被 a high-level trade 修饰指代整个跨国代表团队。",
            cn: "代表欧洲农业出口商的高级别贸易代表团昨日抵达东京，开启双边会谈。",
            jp: "ヨーロッパの農業輸出企業を代表する高官級の通商代表団（delegation）が、2国間協議を開始するために昨日東京に到着しました。"
        }
    },
    {
        id: 15,
        target: "sizable",
        category: "困难",
        stem: "Strong consumer demand for the updated hybrid vehicle contributed ________ to the automaker's third-quarter revenue growth.",
        options: ["sizably", "sizable", "bustling", "avidly"],
        correct: "sizably",
        explanations: {
            guide: "副词修饰不及物动词短语。空格修饰动词 contributed（促成/做贡献），contributed sizably to 意为“对……做出相当可观的贡献/很大程度上促成了……”，选副词 sizably。",
            family: "sizably (adv.相当大比例地/可观地) | sizable (adj.可观的) | bustling (adj.繁华的) | avidly (adv.热切地)。",
            details: "contributed sizably to revenue growth 构成动词与程度状语副词的合理修饰关系。sizable 是形容词，不能直接在及物/不及物动词后修饰动词行为。",
            cn: "对改款混合动力汽车的强劲消费需求，为该汽车制造商第三季度的营收增长做出了相当可观的贡献。",
            jp: "改良されたハイブリッド車に対する消費者の旺盛な需要は、自動車メーカーの第3四半期の増収に少なからず・大いに（sizably）貢献しました。"
        }
    },
    {
        id: 16,
        target: "demolish",
        category: "困难",
        stem: "Commercial builders must secure an official ________ permit from the municipal zoning commission prior to dismantling the historic facade.",
        options: ["demolition", "demolish", "installment", "perishable"],
        correct: "demolition",
        explanations: {
            guide: "名词作前置定语修饰名词。a ________ permit 结构中需要名词定语，demolition permit 是不动产法务与市政施工核心专有名词，意为“拆除施工许可证”，选 demolition。",
            family: "demolition (n.拆毁/拆除作业) | demolish (v.动词原形) | installment (n.分期付款) | perishable (adj.易腐的)。",
            details: "a demolition permit 专指拆迁工程许可证。demolish 是动词，不能直接放在冠词 an 和名词 permit 之间作定语名词。",
            cn: "商业建筑商在拆除历史建筑门面之前，必须先从市政规划委员会获得正式的拆除许可证。",
            jp: "商業建設業者は、歴史的なファサードを解体する前に、市の都市計画委員会から正式な解体（demolition）許可証を取得しなければなりません。"
        }
    },
    {
        id: 17,
        target: "ventilation",
        category: "困难",
        stem: "Occupational safety regulations dictate that any storage area holding volatile solvents must be thoroughly ________.",
        options: ["ventilated", "ventilation", "demolished", "sizable"],
        correct: "ventilated",
        explanations: {
            guide: "系表结构与分词形容词考点。must be thoroughly 后面需要接过去分词形容词作表语，ventilated 意为“通风良好的/换气的”，选 ventilated。",
            family: "ventilated (adj.通风良好的/换气的) | ventilation (n.通风/换气) | demolished (adj.被拆除的) | sizable (adj.可观的)。",
            details: "thoroughly ventilated 是工厂安防合规标准搭配。ventilation 是名词，不能紧跟在副词 thoroughly 后面充当被动语态/系表结构的核心词。",
            cn: "职业安全法规规定，任何存放易挥发溶剂的仓储区域都必须保持彻底良好的通风。",
            jp: "労働安全衛生規制により、揮発性溶剤を保管するすべての保管エリアは徹底的に換気されて（ventilated）いなければならないと定められています。"
        }
    },
    {
        id: 18,
        target: "avid",
        category: "困难",
        stem: "International investors have been ________ pursuing commercial real estate acquisitions in the newly designated financial free zone.",
        options: ["avidly", "avid", "delegated", "vicinity"],
        correct: "avidly",
        explanations: {
            guide: "副词修饰现在进行时谓语动词。have been ________ pursuing 结构中，助动词 have been 与现在分词 pursuing 之间需要填入副词作状语，avidly pursuing 意为“极其热切地争取/积极追求”，选副词 avidly。",
            family: "avidly (adv.热切地/极其渴求地) | avid (adj.热衷的) | delegated (adj.授权的) | vicinity (n.附近)。",
            details: "avidly pursuing real estate 意为极其积极热切地追逐地产并购。avid 是形容词，不能在进行时态动词词组中间作修饰分词的状语。",
            cn: "国际投资者一直在极其积极地争取在新建金融自贸区内进行商业地产收购。",
            jp: "海外の投資家たちは、新しく指定された金融自由地域における商業不動産の買収を極めて熱心に（avidly）追求し続けています。"
        }
    }
];