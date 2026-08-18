// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data611-620.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "courtyard",
        pos: "名",
        ipa: "/ˈkɔːrtjɑːrd/",
        cn: "庭院，天井，中庭",
        jp: "中庭、コートヤード",
        family: "courtyards",
        tips: "建筑设施与酒店高频：central courtyard（中心庭院），hotel courtyard（酒店中庭花园）。",
        desc: "The hotel has a courtyard."
    },
    {
        word: "proficiency",
        pos: "名",
        ipa: "/prəˈfɪʃnsi/",
        cn: "熟练，精通",
        jp: "熟達、堪能、熟練",
        family: "proficient / proficiently",
        tips: "HR招聘与技能考核高频：language proficiency（语言熟练度），demonstrate technical proficiency（展现技术精通）。",
        desc: "She demonstrated high proficiency."
    },
    {
        word: "courteous",
        pos: "形",
        ipa: "/ˈkɜːrtiəs/",
        cn: "有礼貌的，客气的，周到的",
        jp: "礼儀正しい、丁寧な",
        family: "courteously / courtesy",
        tips: "客服与接待高频：courteous staff/service（有礼貌的员工/周到的服务）。",
        desc: "The staff was very courteous."
    },
    {
        word: "retrieve",
        pos: "動",
        ipa: "/rɪˈtriːv/",
        cn: "取回，检索，找回",
        jp: "回収する、検索する、取り戻す",
        family: "retrieval / retrieved / retriever",
        tips: "IT与办公高频：retrieve files/data（检索文件/调取数据），retrieve luggage（取回行李）。",
        desc: "Please retrieve the lost file."
    },
    {
        word: "lumber",
        pos: "名/動",
        ipa: "/ˈlʌmbər/",
        cn: "木材，木料；缓慢移动",
        jp: "木材、製材；のそのそ動く",
        family: "lumberyard / lumbering",
        tips: "建筑与制造高频：lumber industry/prices（木材行业/木材价格），raw lumber（原木料）。",
        desc: "They sell high quality lumber."
    },
    {
        word: "fascinating",
        pos: "形",
        ipa: "/ˈfæsɪneɪtɪŋ/",
        cn: "迷人的，引人入胜的",
        jp: "魅力的な、非常に興味深い",
        family: "fascinate / fascinated / fascination",
        tips: "文化与讲座高频：fascinating presentation/exhibit（引人入胜的演示/展览）。",
        desc: "The exhibit was truly fascinating."
    },
    {
        word: "perspective",
        pos: "名",
        ipa: "/pərˈspektɪv/",
        cn: "视角，观点，远景",
        jp: "視点、観点、見解",
        family: "perspectives / perspectival",
        tips: "商务分析与战略高频：fresh perspective（新颖视角），from a global perspective（从全球视角来看）。",
        desc: "He shared a fresh perspective."
    },
    {
        word: "cutting-edge",
        pos: "形",
        ipa: "/ˌkʌtɪŋ ˈedʒ/",
        cn: "尖端的，前沿的，最先进的",
        jp: "最先端の",
        family: "edge / cutting",
        tips: "科技与研发高频：cutting-edge technology/facility（尖端技术/先进设施）。",
        desc: "We use cutting-edge technology."
    },
    {
        word: "situated",
        pos: "形/動",
        ipa: "/ˈsɪtʃueɪtɪd/",
        cn: "位于……的，坐落于……的",
        jp: "〜に位置している、建っている",
        family: "situate / situation / situating",
        tips: "房产与旅游高频：conveniently situated（交通便利/位置优越），ideally situated（地理位置理想）。",
        desc: "The hotel is centrally situated."
    },
    {
        word: "perfume",
        pos: "名/動",
        ipa: "/ˈpɜːrfjuːm/",
        cn: "香水，芳香；使发香",
        jp: "香水、芳香；香りを漂わせる",
        family: "perfumes / perfumed / perfumery",
        tips: "零售与美妆高频：luxury perfume（奢华香水），perfume bottle（香水瓶）。",
        desc: "She bought luxury French perfume."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "courteous",
        category: "简单",
        stem: "Hotel guests frequently praised the front desk receptionist for providing ________ and prompt service.",
        options: ["courteous", "lumber", "perfume", "courtyard"],
        correct: "courteous",
        explanations: {
            guide: "服务评价修饰形容词。与 prompt 并列修饰接待服务，表达“有礼貌的/周到的”，选 courteous。",
            family: "courteous (adj.有礼貌的/周到的) | lumber (n.木材) | perfume (n.香水) | courtyard (n.庭院)。",
            details: "courteous and prompt service 意为礼貌周到且迅速的服务。lumber（木材）、perfume（香水）均非修饰服务质量的形容词。",
            cn: "酒店客人经常称赞前台接待员提供了周到礼貌且迅速的服务。",
            jp: "ホテルの宿泊客は、丁寧で（courteous）迅速なサービスを提供したフロントデスクの受付係を頻繁に称賛しました。"
        }
    },
    {
        id: 2,
        target: "retrieve",
        category: "简单",
        stem: "The customer service representative accessed the secure database to ________ the client's past order history.",
        options: ["retrieve", "perfume", "lumber", "fascinate"],
        correct: "retrieve",
        explanations: {
            guide: "IT系统数据操作动词。accessed the database to 后面接动词原形，表达进入数据库以“检索/调取”历史订单，选 retrieve。",
            family: "retrieve (v.检索/取回) | perfume (v.使发香/n.香水) | lumber (n.木材) | fascinate (v.迷住)。",
            details: "to retrieve order history 意为调取/检索订单历史记录。perfume（香水）、lumber（木材）不符合系统数据处理动作。",
            cn: "客户服务代表访问了安全数据库以调取该客户以往的订单记录。",
            jp: "カスタマーサービス担当者は、クライアントの過去の注文履歴を検索/取得（retrieve）するために安全なデータベースにアクセスしました。"
        }
    },
    {
        id: 3,
        target: "cutting-edge",
        category: "简单",
        stem: "The research laboratory is equipped with ________ equipment to accelerate medical vaccine development.",
        options: ["cutting-edge", "courteous", "situated", "fascinating"],
        correct: "cutting-edge",
        explanations: {
            guide: "科研设备修饰形容词。equipped with ________ equipment 结合加速疫苗研发，表达配备了“尖端的/最先进的”设备，选 cutting-edge。",
            family: "cutting-edge (adj.尖端的/最前沿的) | courteous (adj.有礼貌的) | situated (adj.位于的) | fascinating (adj.迷人的)。",
            details: "cutting-edge equipment 意为尖端设备。courteous（礼貌的）修饰实验室硬件设备不合逻辑。",
            cn: "该研究实验室配备了尖端设备，以加速医学疫苗的研发进程。",
            jp: "その研究実験室には、医療用ワクチンの開発を加速させるための最先端の（cutting-edge）機器が備わっています。"
        }
    },
    {
        id: 4,
        target: "courtyard",
        category: "简单",
        stem: "During the summer months, restaurant patrons enjoy dining outdoors in the shaded central ________.",
        options: ["courtyard", "proficiency", "perspective", "perfume"],
        correct: "courtyard",
        explanations: {
            guide: "户外用餐场所名词考点。dining outdoors in the shaded central ________ 结合在带遮荫的中心户外空间就餐，选 courtyard（庭院/中庭）。",
            family: "courtyard (n.庭院/中庭) | proficiency (n.熟练度) | perspective (n.视角) | perfume (n.香水)。",
            details: "central courtyard 意为中心庭院。proficiency（熟练度）、perspective（视角）均非室外实体建筑庭院空间。",
            cn: "在夏季，餐厅顾客喜欢在带遮荫的中央庭院里进行户外用餐。",
            jp: "夏の間、レストランの利用客は日陰のある中央の中庭（courtyard）で屋外での食事を楽しみます。"
        }
    },
    {
        id: 5,
        target: "lumber",
        category: "简单",
        stem: "The residential construction contractor placed a bulk order for high-grade pine ________.",
        options: ["lumber", "courtesy", "perfume", "retrieval"],
        correct: "lumber",
        explanations: {
            guide: "建材采购名词考点。placed a bulk order for high-grade pine ________ 结合建筑承包商大批量采购松木原料，选 lumber（木材/木料）。",
            family: "lumber (n.木材/木料) | courtesy (n.礼貌) | perfume (n.香水) | retrieval (n.检索)。",
            details: "pine lumber 意为松木木材。courtesy（礼貌）、perfume（香水）均非住宅建造施工所需的大宗板材原料。",
            cn: "住宅建筑承包商大批量订购了高等级的松木木材。",
            jp: "住宅建設請負業者は、高級マツ木材（lumber）の大口注文を行いました。"
        }
    },
    {
        id: 6,
        target: "perfume",
        category: "简单",
        stem: "The luxury cosmetics brand launched a new floral ________ just in time for the spring holiday season.",
        options: ["perfume", "courtyard", "proficiency", "lumber"],
        correct: "perfume",
        explanations: {
            guide: "美妆零售名词考点。launched a new floral ________ 结合高端化妆品品牌在春季推出的花香调新品，选 perfume（香水）。",
            family: "perfume (n.香水/芳香) | courtyard (n.庭院) | proficiency (n.熟练) | lumber (n.木材)。",
            details: "floral perfume 意为花香型香水。courtyard（庭院）、lumber（木材）均非化妆品品牌推出的商品种类。",
            cn: "这家高端化妆品品牌及时在春季假日季推出了一款新的花香调香水。",
            jp: "その高級化粧品ブランドは、春のホリデーシーズンに間に合うように新しいフローラル香水（perfume）を発売しました。"
        }
    },
    {
        id: 7,
        target: "situated",
        category: "中等",
        stem: "The boutique hotel is conveniently ________ just two blocks away from the central train station.",
        options: ["situated", "courteous", "fascinating", "proficient"],
        correct: "situated",
        explanations: {
            guide: "地理位置表语形容词。is conveniently ________ 属于托业经典句型，结合距离中心火车站仅两个街区，选 situated（位于/坐落于）。",
            family: "situated (adj.位于的/坐落的) | courteous (adj.有礼貌的) | fascinating (adj.迷人的) | proficient (adj.精通的)。",
            details: "conveniently situated 意为地理位置优越/交通便利。courteous（礼貌的）、proficient（精通的）无法作表示建筑坐落方位的表语。",
            cn: "这家精品酒店地理位置十分优越，距离中央火车站仅有两个街区。",
            jp: "そのブティックホテルは中央駅からわずか2ブロックという、便利な場所に位置して（situated）います。"
        }
    },
    {
        id: 8,
        target: "perspective",
        category: "中等",
        stem: "The newly appointed consultant provided a fresh ________ on optimizing regional supply chain logistics.",
        options: ["perspective", "lumber", "courtyard", "retrieval"],
        correct: "perspective",
        explanations: {
            guide: "商务见解名词考点。provided a fresh ________ on... 结合对优化供应链物流提出独到见解，选 perspective（视角/观点）。",
            family: "perspective (n.视角/观点) | lumber (n.木材) | courtyard (n.庭院) | retrieval (n.取回)。",
            details: "a fresh perspective 意为崭新的视角/独特的见解。lumber（木材）、courtyard（庭院）不合顾问业务咨询语境。",
            cn: "新任命的咨询顾问对优化区域供应链物流提出了崭新的视角与观点。",
            jp: "新しく任命されたコンサルタントは、地域のサプライチェーン物流の最適化に関して新鮮な視点（perspective）を提供しました。"
        }
    },
    {
        id: 9,
        target: "proficiency",
        category: "中等",
        stem: "Job applicants for the translator role must demonstrate verified ________ in both oral and written Mandarin.",
        options: ["proficiency", "proficient", "courteous", "perspective"],
        correct: "proficiency",
        explanations: {
            guide: "派生抽象名词作宾语。demonstrate verified ________ in... 结构中，形容词 verified 后面接抽象名词，表达展现经过验证的“熟练度/精通”，选 proficiency。",
            family: "proficiency (n.熟练/精通) | proficient (adj.精通的) | courteous (adj.有礼貌的) | perspective (n.视角)。",
            details: "demonstrate proficiency in a language 意为展现语言熟练程度。proficient 是形容词，不能直接作及物动词 demonstrate 的宾语中心语。",
            cn: "应聘翻译职位的求职者必须展现出经过验证的普通话口语和书面语熟练精通水平。",
            jp: "翻訳職の応募者は、中国語の口頭および書面の両方で証明された熟達度（proficiency）を示さなければなりません。"
        }
    },
    {
        id: 10,
        target: "fascinating",
        category: "中等",
        stem: "The guest speaker gave a ________ lecture on the economic potential of artificial intelligence technologies.",
        options: ["fascinating", "fascinated", "courteously", "situated"],
        correct: "fascinating",
        explanations: {
            guide: "修饰物/讲座的形容词。a ________ lecture 结构中，修饰讲座，表达内容“引人入胜的/极富吸引力的”，选现在分词形容词 fascinating。",
            family: "fascinating (adj.引人入胜的/修饰事物) | fascinated (adj.被深深吸引的/修饰人) | courteously (adv.有礼貌地) | situated (adj.位于的)。",
            details: "a fascinating lecture 意为引人入胜的讲座。fascinated 通常用来形容人感到着迷的状态，不能直接充当前置定语修饰 lecture。",
            cn: "特邀演讲嘉宾就人工智能技术的经济潜力发表了一场引人入胜的演讲。",
            jp: "招待講師は、人工知能技術の経済的潜在力に関する非常に興味深い/魅力的な（fascinating）講演を行いました。"
        }
    },
    {
        id: 11,
        target: "courteous",
        category: "中等",
        stem: "Customer support agents are expected to interact ________ with clients even during challenging inquiries.",
        options: ["courteously", "courteous", "proficiency", "cutting-edge"],
        correct: "courteously",
        explanations: {
            guide: "副词修饰动词。interact ________ 结构中，需要副词修饰不及物动词 interact，表达“有礼貌地/客气得体地”与客户沟通，选 courteously。",
            family: "courteously (adv.有礼貌地/客气地) | courteous (adj.有礼貌的) | proficiency (n.熟练) | cutting-edge (adj.尖端的)。",
            details: "interact courteously 意为有礼貌地互动交流。courteous 是形容词，不能在此处直接充当修饰动词的状语。",
            cn: "客户支持代表即使在处理棘手的问询时，也应与客户保持礼貌客气的沟通。",
            jp: "カスタマーサポート担当者は、困難な問い合わせの最中でもクライアントと礼儀正しく（courteously）対話することが求められます。"
        }
    },
    {
        id: 12,
        target: "retrieve",
        category: "中等",
        stem: "The IT department introduced an automated data ________ tool to recover corrupted financial records.",
        options: ["retrieval", "retrieve", "perfume", "lumber"],
        correct: "retrieval",
        explanations: {
            guide: "复合名词定语考点。data ________ tool 属于计算机信息管理固定词组，表达数据“检索/恢复”工具，选派生名词 retrieval。",
            family: "retrieval (n.检索/取回) | retrieve (v.检索) | perfume (n.香水) | lumber (n.木材)。",
            details: "data retrieval tool 意为数据检索/恢复工具。retrieve 是动词原形，在此处构成名词词组时应使用派生名词形式 retrieval。",
            cn: "IT 部门引入了一种自动数据检索工具，以恢复受损的财务记录。",
            jp: "IT部門は、破損した財務記録を復旧するために自動データ検索/回収（retrieval）ツールを導入しました。"
        }
    },
    {
        id: 13,
        target: "cutting-edge",
        category: "困难",
        stem: "The technology company attributes its market leadership to maintaining a ________ research and development program.",
        options: ["cutting-edge", "courteously", "fascinated", "proficiently"],
        correct: "cutting-edge",
        explanations: {
            guide: "战略研发修饰形容词。a ________ research and development program 结构中，修饰研发项目，表达“前沿尖端的”，选 cutting-edge。",
            family: "cutting-edge (adj.尖端的/前沿的) | courteously (adv.有礼貌地) | fascinated (adj.着迷的) | proficiently (adv.熟练地)。",
            details: "cutting-edge R&D program 意为前沿尖端的研发项目。courteously 与 proficiently 为副词，fascinated 修饰人，均无法作此处定语。",
            cn: "这家科技公司将其市场领导地位归功于保持着一项尖端前沿的研发计划。",
            jp: "そのテクノロジー企業は、最先端の（cutting-edge）研究開発プログラムを維持していることが市場でのリーダーシップにつながっていると考えています。"
        }
    },
    {
        id: 14,
        target: "perspective",
        category: "困难",
        stem: "Encouraging employees to share diverse ________ during brainstorming sessions often leads to innovative breakthroughs.",
        options: ["perspectives", "perspectival", "retrievals", "courtyards"],
        correct: "perspectives",
        explanations: {
            guide: "头脑风暴复数名词考点。share diverse ________ 结合在集思广益中分享多元化的“观点/视角”，选复数名词 perspectives。",
            family: "perspectives (n.复数观点/视角) | perspectival (adj.透视的) | retrievals (n.检索) | courtyards (n.庭院)。",
            details: "share diverse perspectives 意为分享不同视角观点。perspectival 是形容词，retrievals（检索）不符合头脑风暴分享思想的语境。",
            cn: "在头脑风暴会议期间鼓励员工分享多元化的观点和视角，往往能带来创新突破。",
            jp: "ブレインストーミングセッション中に従業員が多様な視点（perspectives）を共有することを奨励すると、革新的なブレークスルーにつながることがよくあります。"
        }
    },
    {
        id: 15,
        target: "fascinating",
        category: "困难",
        stem: "Conference attendees were completely ________ by the keynote architect's vision for sustainable urban design.",
        options: ["fascinated", "fascinating", "fascination", "situated"],
        correct: "fascinated",
        explanations: {
            guide: "人为主语表语形容词/被动考点。attendees were completely ________ by... 描述参会者被主旨建筑师的愿景“深深吸引/迷住”，选过去分词形容词 fascinated。",
            family: "fascinated (adj.被深深吸引的/着迷的) | fascinating (adj.引人入胜的) | fascination (n.魅力) | situated (adj.位于的)。",
            details: "be fascinated by sth 意为被某事物深深吸引。主语是人（attendees），表示人的内心感受时需选用 -ed 结尾的形容词 fascinated。",
            cn: "与会者完全被主讲建筑师关于可持续城市设计的愿景所深深吸引。",
            jp: "会議の参加者は、持続可能な都市デザインに関する基調講演建築家のビジョンにすっかり魅了されました（fascinated）。"
        }
    },
    {
        id: 16,
        target: "lumber",
        category: "困难",
        stem: "A sharp increase in global ________ tariffs significantly drove up material procurement costs for furniture manufacturers.",
        options: ["lumber", "lumberyard", "proficiency", "retrieval"],
        correct: "lumber",
        explanations: {
            guide: "进出口大宗物资名词作定语。global ________ tariffs 结合给家具制造商推高采购成本，表达“木材”关税，选单数名词 lumber 作定语。",
            family: "lumber (n.木材) | lumberyard (n.木材堆放场) | proficiency (n.熟练度) | retrieval (n.检索)。",
            details: "lumber tariffs 意为木材进口关税。lumberyard（木料场）不能直接作 tariffs 的前置定语来指代征税的原材料品类。",
            cn: "全球木材关税的急剧上涨显著推高了家具制造商的原材料采购成本。",
            jp: "世界的な木材（lumber）関税の急激な引き上げは、家具メーカーの原材料調達コストを大幅に押し上げました。"
        }
    },
    {
        id: 17,
        target: "situated",
        category: "困难",
        stem: "The corporate development committee decided to ________ the new regional logistics hub close to the international airport.",
        options: ["situate", "situated", "situation", "courteous"],
        correct: "situate",
        explanations: {
            guide: "动词不定式原形考点。decided to 后面接及物动词原形，结合将新的区域物流枢纽“设置/安置”在国际机场附近，选动词原形 situate。",
            family: "situate (v.使位于/设置) | situated (adj./v-ed) | situation (n.情况/位置) | courteous (adj.有礼貌的)。",
            details: "to situate the hub close to... 意为将枢纽安置于……附近。situated 是过去式/形容词，不能直接跟在不定式符号 to 后面充当谓语动词原形。",
            cn: "企业发展委员会决定将新的区域物流枢纽设置在国际机场附近。",
            jp: "企業開発委員会は、新しい地域物流拠点を国際空港の近くに配置する（situate）ことを決定しました。"
        }
    },
    {
        id: 18,
        target: "proficiency",
        category: "困难",
        stem: "Candidates who are proven to be highly ________ in financial modeling software will receive immediate hiring priority.",
        options: ["proficient", "proficiency", "proficiently", "perspective"],
        correct: "proficient",
        explanations: {
            guide: "系表结构形容词考点。proven to be highly ________ in... 结构中，系动词 be 和副词 highly 后面接表语形容词，并与介词 in 搭配，选 proficient（精通的/熟练的）。",
            family: "proficient (adj.熟练的/精通的) | proficiency (n.熟练度) | proficiently (adv.熟练地) | perspective (n.视角)。",
            details: "be proficient in sth 属于托业招聘高频句型，意为精通某项技能。proficiency 是名词，proficiently 是副词，均不能作系动词 be 后的表语形容词。",
            cn: "被证实高度精通财务建模软件的候选人将获得优先录用。",
            jp: "財務モデリングソフトウェアに極めて堪能である（proficient）ことが証明された候補者は、優先的に採用されます。"
        }
    }
];