// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data171-180.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "signature",
        pos: "名/形",
        ipa: "/ˈsɪɡnətʃər/",
        cn: "签名；招牌的，独具特色的",
        jp: "署名、サイン；特徴的な、看板の",
        family: "sign / signatory",
        tips: "熟词生义核心考点：作定语修饰菜肴或特色产品表示“招牌的/标志性的”（signature dish / signature product）；名词考合同签署（require a signature）。",
        desc: "Please add your signature here."
    },
    {
        word: "sort",
        pos: "動/名",
        ipa: "/sɔːrt/",
        cn: "分类，整理；种类，类别",
        jp: "分類する、整理する；種類",
        family: "sorted / sorting / assorted",
        tips: "动词考文件归档与邮件整理（sort mail by department / sort data chronologically）；名词考 of this sort（这种类型的）；派生形容词 assorted 意为各种各样的。",
        desc: "Please sort the files by date."
    },
    {
        word: "spare",
        pos: "形/動",
        ipa: "/sper/",
        cn: "备用的；空闲的；抽出（时间），免去",
        jp: "予備の；余分の；（時間などを）割く；免れさせる",
        family: "sparing / sparingly",
        tips: "多义词高频考点：1. 备用零件（spare parts）；2. 抽出时间（spare a few minutes for a quick chat）；3. 不遗余力（spare no expense/effort）；副词 sparingly 意为节俭地。",
        desc: "Do you have a spare key?"
    },
    {
        word: "star",
        pos: "名/動/形",
        ipa: "/stɑːr/",
        cn: "明星员工，核心人物；主演；杰出的",
        jp: "花形、スター；主演する；優秀な",
        family: "starring / starred",
        tips: "职场与媒体考点：作定语形容词指最拔尖的业务骨干（star employee / star performer）；动词考影视广告主演（star in a promotional video）。",
        desc: "She is our star employee."
    },
    {
        word: "station",
        pos: "名/動",
        ipa: "/ˈsteɪʃn/",
        cn: "工位，工作台；车站；派驻，安置",
        jp: "作業場所、ステーション；駅；配置する、配属する",
        family: "stationary / stationed / workstation",
        tips: "多重熟词生义：1. 办公室工作台/工位（workstation）；服务台/充电桩（charging station）；2. 动词被动语态指人员配置与驻守（guards are stationed at the entrance / be stationed abroad）。",
        desc: "Return to your work station."
    },
    {
        word: "steep",
        pos: "形",
        ipa: "/stiːp/",
        cn: "（价格）过高的；急剧的，陡峭的",
        jp: "（価格が）法外な、高すぎる；（増減が）急激な；急な",
        family: "steeply / steepness",
        tips: "商业财报与消费场景核心考点：修饰价格、涨跌幅度（a steep increase/drop in prices 急剧上涨/暴跌；steep discount 大幅折扣；steep charges 过高的费用）。",
        desc: "The store offered a steep discount."
    },
    {
        word: "store",
        pos: "動/名",
        ipa: "/stɔːr/",
        cn: "储存，存放；保存（数据）；商店",
        jp: "保管する、保存する；店、店舗",
        family: "storage / stored",
        tips: "高频动词考点：仓储保管（store goods in a climate-controlled warehouse）以及电子数据存储（store confidential client files securely）；名词考 storage facility（仓储设施）。",
        desc: "Store the boxes in the warehouse."
    },
    {
        word: "story",
        pos: "名",
        ipa: "/ˈstɔːri/",
        cn: "（建筑物的）层，楼层；报道，故事",
        jp: "（建物の）階；物語、記事",
        family: "multi-story / storied",
        tips: "托业物业管理与不动产核心熟词生义：指建筑楼层（a five-story office building 五层办公楼；a multi-story parking garage 多层立体车库）。",
        desc: "The office is in a five-story building."
    },
    {
        word: "stress",
        pos: "動/名",
        ipa: "/stres/",
        cn: "强调，着重；压力，重音",
        jp: "強調する、力説する；ストレス、重圧",
        family: "stressed / stressful",
        tips: "及物动词核心考点：等同于 emphasize，用于会议或演讲中强调某原则/规范（stress the importance of safety / stress that punctuality is essential）；名词搭配 place stress on...",
        desc: "The director stressed the deadline."
    },
    {
        word: "subject",
        pos: "形/動/名",
        ipa: "/ˈsʌbdʒɪkt/ (adj./n.), /səbˈdʒekt/ (v.)",
        cn: "取决于……的，易受……影响的；使遭受；主题",
        jp: "〜を受けやすい、〜次第である；受けさせる；主題、件名",
        family: "subjective / subjected / subjection",
        tips: "托业阅读与听力最高频句型第一名：be subject to change / approval / prior sale（随时可能变动/取决于管理层批准/视现有存货售完为止）；注意 to 是介词，后接名词。",
        desc: "The schedule is subject to change."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "store",
        category: "简单",
        stem: "Warehouse technicians must ________ perishable pharmaceutical shipments in temperature-controlled facilities.",
        options: ["store", "storage", "story", "steep"],
        correct: "store",
        explanations: {
            guide: "情态动词后的动词原形。情态动词 must 后面需要接动词原形，后接宾语 shipments，表达“存放/储存”物资，选 store。",
            family: "store (v.储存/n.商店) | storage (n.仓储) | story (n.楼层) | steep (adj.急剧的)。",
            details: "must store perishable shipments 属于物流仓储标准表达。storage 是名词，不能在情态动词 must 之后直接充当谓语动词原形。",
            cn: "仓库技术人员必须将易腐烂的药品存放在温控设施内。",
            jp: "倉庫の技術者は、傷みやすい医薬品の積送品を温度管理された施設に保管（store）しなければなりません。"
        }
    },
    {
        id: 2,
        target: "stress",
        category: "简单",
        stem: "During the new employee orientation, the plant supervisor will ________ the critical importance of workplace safety protocols.",
        options: ["stress", "stressful", "spare", "sort"],
        correct: "stress",
        explanations: {
            guide: "情态动词后的及物动词用法。will 后面需要接动词原形，stress the importance of 是托业高频动宾搭配，意为“强调……的重要性”，选 stress。",
            family: "stress (v.强调/n.压力) | stressful (adj.压力大的) | spare (v.抽出) | sort (v.分类)。",
            details: "will stress the importance 等同于 will emphasize the importance。stressful 是形容词，不能在情态动词 will 之后充当谓语动词。",
            cn: "在新员工入职培训期间，车间主管将强调工作场所安全规程的关键重要性。",
            jp: "新入社員オリエンテーション中、工場監督者は職場の安全プロトコルの極めて重要な重要性を強調（stress）する予定です。"
        }
    },
    {
        id: 3,
        target: "signature",
        category: "简单",
        stem: "Before the contract can become legally binding, please obtain the client's ________ on the final page.",
        options: ["signature", "signatory", "station", "star"],
        correct: "signature",
        explanations: {
            guide: "名词中心语与动宾搭配。obtain the client's ________ 结构中，所有格 client's 后面需要接名词，obtain sb's signature 意为“获取某人的签字”，选 signature。",
            family: "signature (n.签名/署名) | signatory (n.签署方) | station (n.工位) | star (n.明星)。",
            details: "obtain the client's signature 是商务签约的标准表达。signatory 指签署国或签约方法人实体，不能指代具体的签名笔迹。",
            cn: "在合同具有法律约束力之前，请在最后一页获取客户的签名。",
            jp: "契約が法的拘束力を持つ前に、最後のページにクライアントの署名（signature）をもらってください。"
        }
    },
    {
        id: 4,
        target: "story",
        category: "简单",
        stem: "The regional technology firm is planning to relocate its headquarters into a newly constructed twelve-________ office tower.",
        options: ["story", "storied", "store", "subject"],
        correct: "story",
        explanations: {
            guide: "复合形容词定语修饰与熟词生义。数词与连字符构成的复合词 twelve-story 意为“十二层的”，修饰 office tower，story 考查“楼层”，选 story。",
            family: "story (n.楼层/故事) | storied (adj.有故事的) | store (n.商店) | subject (adj.从属的)。",
            details: "a twelve-story building 是不动产与办公选址场景标准表达（英式常拼为 storey）。storied 是形容词，意为历史悠久的，语义不符。",
            cn: "该区域科技公司计划将其总部迁入一座新建的十二层办公大厦内。",
            jp: "その地域密着型のテクノロジー企業は、新築の12階建て（twelve-story）オフィスタワーに本部を移転することを計画しています。"
        }
    },
    {
        id: 5,
        target: "spare",
        category: "简单",
        stem: "The maintenance division keeps an extensive inventory of ________ parts to minimize factory machinery downtime.",
        options: ["spare", "sparingly", "steep", "stress"],
        correct: "spare",
        explanations: {
            guide: "形容词作定语修饰名词。修饰名词 parts，spare parts 是工厂设备维护的核心固定搭配，意为“备用零部件”，选形容词 spare。",
            family: "spare (adj.备用的/v.抽出) | sparingly (adv.节俭地) | steep (adj.急剧的) | stress (n.压力)。",
            details: "spare parts 指备件。sparingly 为副词，不能直接修饰名词 parts 充当定语；steep 和 stress 词义与机械维护零配件不符。",
            cn: "维修部门保留了大量备用零部件库存，以最大限度减少工厂机械的停机时间。",
            jp: "保守部門は、工場の機械の稼働停止時間を最小限に抑えるために、予備の（spare）部品の豊富な在庫を保持しています。"
        }
    },
    {
        id: 6,
        target: "sort",
        category: "简单",
        stem: "Please ________ incoming customer warranty inquiries by product category before sending them to the support team.",
        options: ["sort", "sorted", "station", "star"],
        correct: "sort",
        explanations: {
            guide: "祈使句动词原形与商务分类用法。Please 引导的祈使句需要动词原形开头，sort inquiries by... 意为“按……对咨询进行分类/整理”，选 sort。",
            family: "sort (v.分类/整理/n.种类) | sorted (v-ed形式) | station (v.派驻) | star (v.主演)。",
            details: "sort sth by category 是行政与客服派单高频短语。sorted 是过去式或过去分词，不能在祈使句句首充当谓语动词原形。",
            cn: "在将客户保修咨询发送给支持团队之前，请先按产品类别进行分类整理。",
            jp: "サポートチームに送信する前に、受け取った顧客の保証に関する問い合わせを製品カテゴリ別に分類（sort）してください。"
        }
    },
    {
        id: 7,
        target: "subject",
        category: "中等",
        stem: "Please note that special promotional airfares advertised on the website are ________ to availability and change without notice.",
        options: ["subject", "subjective", "sparing", "stored"],
        correct: "subject",
        explanations: {
            guide: "托业核心固定搭配与熟词生义。be subject to 是规章条款最高频句型，表示“视……而定/取决于……/随时可能受……影响”，选形容词 subject。",
            family: "subject (adj.取决于…的/受制于…的) | subjective (adj.主观的) | sparing (adj.节俭的) | stored (adj.储存的)。",
            details: "are subject to availability 指视存票情况而定。subjective 意为主观的，与商业免责声明语境完全不符；to 为介词，后接名词 availability。",
            cn: "请注意，网站上广告的特别促销机票价格取决于座位供应情况，且随时可能更改，恕不另行通知。",
            jp: "ウェブサイトに掲載されている特別プロモーション航空運賃は、空席状況に左右され（subject to）、予告なしに変更される場合がありますのでご注意ください。"
        }
    },
    {
        id: 8,
        target: "steep",
        category: "中等",
        stem: "Due to rising raw ingredient expenditures, the boutique confectionery was forced to introduce a ________ increase in retail prices.",
        options: ["steep", "steeply", "signature", "stationed"],
        correct: "steep",
        explanations: {
            guide: "形容词修饰名词与财报常见搭配。a ________ increase 结构中，不定冠词 a 与名词 increase 之间需要形容词，steep 意为“急剧的/大幅度的”，选 steep。",
            family: "steep (adj.急剧的/过高的) | steeply (adv.急剧地) | signature (adj.招牌的) | stationed (v-ed派驻)。",
            details: "a steep increase in prices 属于价格暴涨的标准用语。steeply 是副词，不能修饰可数名词单数 increase 作定语。",
            cn: "由于原材料支出上涨，这家精品糖果店被迫大幅提高了零售价格。",
            jp: "原材料費の高騰により、その高級菓子店は小売価格の大幅な（steep）値上げを余儀なくされました。"
        }
    },
    {
        id: 9,
        target: "station",
        category: "中等",
        stem: "To ensure adequate security during the international summit, private security guards will be ________ throughout the conference center.",
        options: ["stationed", "station", "sorting", "stressed"],
        correct: "stationed",
        explanations: {
            guide: "被动语态与动词熟词生义。will be ________ 结构中需要过去分词构成被动语态，station 作动词表示“安置/派驻（人员到某地岗位）”，选 stationed。",
            family: "stationed (v-ed被派驻/安置) | station (n.车站/工位) | sorting (动名词) | stressed (v-ed强调)。",
            details: "guards will be stationed 指安保人员将被部署在各处。station 动词原形不能跟在 will be 后面直接充当被动语态核心词。",
            cn: "为确保国际峰会期间的安全保障，私营安保人员将被派驻在整个会议中心各处。",
            jp: "国際サミット中の十分な警備を確保するため、民間警備員が会議センター全体に配置（stationed）されます。"
        }
    },
    {
        id: 10,
        target: "star",
        category: "中等",
        stem: "Mr. Henderson was widely praised by the executive board as the division's ________ performer for securing record sales.",
        options: ["star", "starred", "spare", "story"],
        correct: "star",
        explanations: {
            guide: "名词作前置定语与熟词生义。the division's ________ performer 结构中，star 作定语修饰 performer，star performer 意为“明星员工/表现最拔尖的业务骨干”，选 star。",
            family: "star (adj./n.明星员工/杰出的) | starred (adj.标记星号的) | spare (adj.备用的) | story (n.楼层)。",
            details: "star performer / star employee 属于人力资源绩效表彰专属高频短语。starred 意为加星标的，不符合表彰优秀个人的搭配惯例。",
            cn: "亨德森先生因斩获创纪录的销售额，被执行董事会一致赞誉为该部门的明星员工。",
            jp: "ヘンダーソン氏は、過去最高記録の売上を達成した功績により、部門の花形（star）パフォーマーとして執行役員会から広く称賛されました。"
        }
    },
    {
        id: 11,
        target: "signature",
        category: "中等",
        stem: "The gourmet bakery downtown is particularly renowned for its ________ chocolate croissant, which draws crowds daily.",
        options: ["signature", "signatory", "steep", "subject"],
        correct: "signature",
        explanations: {
            guide: "形容词性前置定语熟词生义。its ________ chocolate croissant 结构中，signature 作定语修饰商品，signature dish / item 意为“招牌产品/独家特色”，选 signature。",
            family: "signature (adj.招牌的/特色的/n.签名) | signatory (n.签署方) | steep (adj.急剧的) | subject (adj.从属的)。",
            details: "signature croissant 意为招牌牛角面包。signatory 指条约签署者，不能用作定语形容词来修饰糕点或菜肴。",
            cn: "市中心的美食烘焙坊尤以其招牌巧克力牛角面包闻名，每天都吸引大批人群排队。",
            jp: "ダウンタウンの高級ベーカリーは、毎日多くの人を惹きつける看板（signature）商品のチョコクロワッサンで特に有名です。"
        }
    },
    {
        id: 12,
        target: "spare",
        category: "中等",
        stem: "The division supervisor wondered whether the chief engineer could ________ ten minutes to discuss the revised blueprint.",
        options: ["spare", "sparingly", "store", "sort"],
        correct: "spare",
        explanations: {
            guide: "动词熟词生义与情态动词搭配。情态动词 could 后面接动词原形，spare ten minutes 是商务沟通极高频短语，意为“抽出/分出十分钟”，选 spare。",
            family: "spare (v.抽出时间/adj.备用的) | sparingly (adv.节俭地) | store (v.存放) | sort (v.整理)。",
            details: "could spare ten minutes 属于职场礼貌请求时间的经典表达。sparingly 是副词，不能紧跟情态动词 could 充当谓语动词原形。",
            cn: "部门主管想知道总工程师是否能抽出十分钟来讨论修改后的蓝图设计。",
            jp: "部門監督者は、主任エンジニアが改訂された設計図について話し合うために10分間の時間を割く（spare）ことができるかどうか尋ねました。"
        }
    },
    {
        id: 13,
        target: "store",
        category: "困难",
        stem: "The pharmaceutical logistics provider offers specialized climate-controlled ________ for sensitive medical vaccines.",
        options: ["storage", "store", "steepness", "sorted"],
        correct: "storage",
        explanations: {
            guide: "形容词修饰名词与仓储业务考点。specialized climate-controlled ________ 结构中，形容词 climate-controlled（温控的）后接名词作宾语，storage 意为“仓储/储存”，选 storage。",
            family: "storage (n.仓储/存储/不可数) | store (v.储存/n.商店) | steepness (n.陡峭) | sorted (adj.分类好的)。",
            details: "climate-controlled storage 意为温控仓储服务。store 作名词主要指商店店铺，若指代仓库则通常用 warehouse，在此处指代仓储功能必须使用名词 storage。",
            cn: "该医药仓储物流供应商为敏感的医疗疫苗提供专业的温控仓储服务。",
            jp: "その製薬物流プロバイダーは、繊細な医療用ワクチンのために専門的な温度管理された保管（storage）を提供しています。"
        }
    },
    {
        id: 14,
        target: "sort",
        category: "困难",
        stem: "The administrative department ordered an inventory of ________ office supplies, including notebooks, binders, and writing utensils.",
        options: ["assorted", "sort", "sorting", "starring"],
        correct: "assorted",
        explanations: {
            guide: "派生形容词作定语修饰名词。an inventory of ________ office supplies 结构中，需要形容词修饰复数名词 supplies，assorted 意为“各式各样的/什锦的”，选 assorted。",
            family: "assorted (adj.各种各样的/混杂的) | sort (v./n.分类) | sorting (动名词) | starring (adj.主演的)。",
            details: "assorted office supplies 属于托业采购场景常见专有名词，指各式混杂的文具。sort 原形无法直接作定语修饰复数名词 supplies。",
            cn: "行政部门订购了一批各式各样的办公用品库存，包括笔记本、活页夹和书写文具。",
            jp: "総務部は、ノート、バインダー、筆記用具など、さまざまな種類の（assorted）事務用品の在庫を発注しました。"
        }
    },
    {
        id: 15,
        target: "steep",
        category: "困难",
        stem: "Domestic consumer demand for hybrid commercial vehicles rose ________ following the introduction of generous government subsidies.",
        options: ["steeply", "steep", "steepness", "sparingly"],
        correct: "steeply",
        explanations: {
            guide: "副词修饰不及物动词。空格位于不及物动词 rose（上升/增长）之后充当状语，修饰增长的幅度，rose steeply 意为“急剧上升/大幅飙升”，选副词 steeply。",
            family: "steeply (adv.急剧地/大幅度地) | steep (adj.急剧的) | steepness (n.陡峭) | sparingly (adv.节俭地)。",
            details: "rose steeply 是财报阅读中描述业绩剧增的高阶词汇。steep 是形容词，不能直接放在动词 rose 之后作状语修饰动词行为。",
            cn: "在政府出台慷慨的补贴政策之后，国内对混合动力商用车的消费需求急剧上升。",
            jp: "手厚い政府補助金の導入に伴い、ハイブリッド商用車に対する国内の消費者需要は急激に（steeply）増加しました。"
        }
    },
    {
        id: 16,
        target: "subject",
        category: "困难",
        stem: "Before obtaining final commercial certification, every new electric vehicle model must be ________ to rigorous crash safety tests.",
        options: ["subjected", "subject", "subjective", "storing"],
        correct: "subjected",
        explanations: {
            guide: "动词高阶用法与被动语态。must be ________ to 结构中，subject A to B 作及物动词意为“使 A 遭受/经受 B（测试、考验或审查）”，被动语态用過去分词 subjected，选 subjected。",
            family: "subjected (v-ed遭受/经受) | subject (adj.受制于的/v.使遭受) | subjective (adj.主观的) | storing (动名词)。",
            details: "be subjected to rigorous testing 专指技术产品经受严苛测试。虽然形容词 subject 也能构成 be subject to，但形容词多接名词表示“取决于/可能变动”，表达“使承受测试程序”动作时必须使用及物动词被动语态 subjected。",
            cn: "在获得最终商业化认证之前，每款新型电动汽车型号都必须经受严格的碰撞安全测试。",
            jp: "最終的な商業認証を取得する前に、すべての新しい電気自動車モデルは厳格な衝突安全試験を受け（subjected to）なければなりません。"
        }
    },
    {
        id: 17,
        target: "stress",
        category: "困难",
        stem: "The newly appointed CEO placed particular ________ on corporate transparency and regular shareholder communications.",
        options: ["stress", "stressful", "signature", "subjected"],
        correct: "stress",
        explanations: {
            guide: "高阶商务固定搭配与动宾介短语。place stress on sth 属于托业高阶专有表达，等同于 place emphasis on，意为“特别强调/把重点放在……”，选名词 stress。",
            family: "stress (n.强调/重点/压力) | stressful (adj.充满压力的) | signature (n.签名) | subjected (v-ed经受)。",
            details: "place particular stress on transparency 指特别着重强调透明度。stressful 是形容词，无法作为及物动词 placed 的宾语中心词。",
            cn: "新上任的首席执行官特别强调公司透明度以及与股东的定期沟通。",
            jp: "新しく就任したCEOは、企業の透明性と定期的な株主との対話を特に強調（placed particular stress on）しました。"
        }
    },
    {
        id: 18,
        target: "station",
        category: "困难",
        stem: "To improve ergonomic comfort in the headquarters, the management replaced outdated office desks with motorized standing ________.",
        options: ["workstations", "station", "spares", "stories"],
        correct: "workstations",
        explanations: {
            guide: "复合名词复数与现代办公设施考点。standing 与 workstations 组合构成 standing workstations，专指“升降式办公工位/站立式工作台”，选复数名词 workstations。",
            family: "workstations (n.工作台/工位/复数) | station (n.车站/单数) | spares (n.备用品) | stories (n.楼层)。",
            details: "motorized standing workstations 是现代办公人体工程学高频考点。station 单数不能与复数代词及办公设备替换语境呼应，workstations 为精确专属术语。",
            cn: "为了提高总部的工效舒适度，管理层用电动升降式立式工作台替换了过时的办公桌。",
            jp: "本社での人間工学的な快適性を向上させるため、経営陣は時代遅れの事務机を電動昇降式のスタンディングワークステーション（workstations）に交換しました。"
        }
    }
];