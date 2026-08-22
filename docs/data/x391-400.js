// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data761-770.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "guardrail",
        pos: "名",
        ipa: "/ˈɡɑːrdreɪl/",
        cn: "护栏，防护栏，防护挡板",
        jp: "ガードレール、防護柵、手すり",
        family: "guardrails / rail / railing",
        tips: "道路交通与工业安全高频：metal highway guardrail（高速公路金属护栏），safety guardrail around equipment（设备周围的安全防护栏）。",
        desc: "Workers installed a highway guardrail."
    },
    {
        word: "concierge",
        pos: "名",
        ipa: "/koʊnˈsjerʒ/",
        cn: "礼宾人员，前台接待总管",
        jp: "コンシェルジュ、総合案内係",
        family: "concierges",
        tips: "酒店管理与高端物业高频：ask the concierge for reservations（向礼宾员咨询预订），luxury hotel concierge（豪华酒店礼宾接待）。",
        desc: "The concierge booked dinner tickets."
    },
    {
        word: "randomized",
        pos: "形/動",
        ipa: "/ˈrændəmaɪzd/",
        cn: "随机化的，随机选取的（randomize的过去式/分词）",
        jp: "無作為化された、ランダム化された",
        family: "random / randomize / randomization / randomly",
        tips: "市场调研与医药临床高频：randomized controlled trial（随机对照试验），randomized sample/survey（随机抽样/随机调查）。",
        desc: "They conducted a randomized clinical study."
    },
    {
        word: "merit",
        pos: "名/動",
        ipa: "/ˈmerɪt/",
        cn: "绩效，优点，功绩；值得，应得",
        jp: "実績、功績、利点、価値；値する",
        family: "merits / meritorious / meritocracy",
        tips: "HR薪酬与提案评审高频：merit-based bonus/raise（绩效奖金/调薪），evaluate proposals on their own merits（依据提案本身的优劣进行评估）。",
        desc: "Promotions are based on merit."
    },
    {
        word: "hierarchy",
        pos: "名",
        ipa: "/ˈhaɪərɑːrki/",
        cn: "层级制度，组织架构，等级体系",
        jp: "階層組織、ヒエラルキー、序列",
        family: "hierarchical / hierarchically / hierarchies",
        tips: "企业战略与管理高频：corporate/organizational hierarchy（企业组织架构/层级体系），flat hierarchy（扁平化层级）。",
        desc: "The company flattened its hierarchy."
    },
    {
        word: "diverted",
        pos: "動/形",
        ipa: "/daɪˈvɜːrtɪd/",
        cn: "转移，改道，分流（divert的过去式/分词）",
        jp: "迂回させられた、転換された",
        family: "divert / diversion / diverting",
        tips: "交通运输与资金管理高频：traffic was diverted to alternate routes（交通被分流至备用路线），divert funds/resources（转移资金/调拨资源）。",
        desc: "Flight was diverted due to fog."
    },
    {
        word: "vans",
        pos: "名",
        ipa: "/vænz/",
        cn: "厢式货车，面包车，客货两用车（复数）",
        jp: "バン、小型貨物自動車（複数）",
        family: "van / minivans",
        tips: "仓储物流与车队管理高频：delivery/cargo vans（送货厢式车/货运面包车），fleet of commercial vans（商用车队）。",
        desc: "The fleet includes ten delivery vans."
    },
    {
        word: "trolley tracks",
        pos: "名",
        ipa: "/ˈtrɑːli træks/",
        cn: "有轨电车轨道，电车铁轨（复数）",
        jp: "路面電車の線路、トロリー軌道（複数）",
        family: "trolley / track / tracks",
        tips: "市政交通与Part 1高频：cross trolley tracks carefully（小心穿过有轨电车轨道），maintenance on trolley tracks（电车轨道维护）。",
        desc: "Cyclists avoided slippery trolley tracks."
    },
    {
        word: "canteen",
        pos: "名",
        ipa: "/kænˈtiːn/",
        cn: "（企业/学校）食堂，小卖部；便携水壶",
        jp: "社員食堂、学食、売店；水筒",
        family: "canteens",
        tips: "员工福利与设施高频：staff/company canteen（员工食堂），eat lunch in the canteen（在食堂吃午饭）。",
        desc: "Staff gather in the company canteen."
    },
    {
        word: "sipping",
        pos: "動/名",
        ipa: "/ˈsɪpɪŋ/",
        cn: "啜饮，小口喝（sip的现在分词/动名词）",
        jp: "少しずつ飲んでいる、すすっている",
        family: "sip / sipped / sips",
        tips: "Part 1 照片描述核心动作：sipping a beverage/coffee（小口喝饮料/咖啡），sipping from a cup（从杯子里小口喝）。",
        desc: "She is sipping hot herbal tea."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "canteen",
        category: "简单",
        stem: "Employees from all departments gather in the staff ________ on the ground floor to enjoy subsidized hot lunches.",
        options: ["canteen", "guardrail", "hierarchy", "concierge"],
        correct: "canteen",
        explanations: {
            guide: "企业就餐场所名词考点。staff ________ 结合员工在一楼享用补贴热午餐，选 canteen（员工食堂/餐厅）。",
            family: "canteen (n.食堂/餐厅) | guardrail (n.护栏) | hierarchy (n.层级) | concierge (n.礼宾员)。",
            details: "staff canteen 意为员工食堂。guardrail（护栏）、hierarchy（层级制度）均非就餐场地设施。",
            cn: "来自各个部门的员工齐聚一楼的员工食堂，享用享有补贴的热乎午餐。",
            jp: "全休部門の従業員が1階の社員食堂（canteen）に集まり、補助金付きの温かい昼食を楽しんでいます。"
        }
    },
    {
        id: 2,
        target: "concierge",
        category: "简单",
        stem: "Guests staying at the boutique hotel can approach the ________ in the main lobby for local dining recommendations.",
        options: ["concierge", "canteen", "guardrail", "van"],
        correct: "concierge",
        explanations: {
            guide: "酒店服务职务名词。approach the ________ in the main lobby 结合向大厅服务人员咨询当地餐饮推荐，选 concierge（礼宾人员/前台问讯处）。",
            family: "concierge (n.礼宾员) | canteen (n.食堂) | guardrail (n.护栏) | van (n.货车)。",
            details: "hotel concierge 专指提供订票、咨询与迎送服务的酒店礼宾专员。guardrail（防护栏）非服务人员。",
            cn: "入住该精品酒店的宾客可前往主大厅的礼宾人员处，咨询当地的餐饮推荐。",
            jp: "ブティックホテルに宿泊するゲストは、地元の食事処のおすすめについてメインロビーのコンシェルジュ（concierge）に尋ねることができます。"
        }
    },
    {
        id: 3,
        target: "guardrail",
        category: "简单",
        stem: "Highway maintenance crews installed a reinforced steel ________ along the sharp curve to improve vehicle safety.",
        options: ["guardrail", "concierge", "hierarchy", "canteen"],
        correct: "guardrail",
        explanations: {
            guide: "道路安全防护设施名词。reinforced steel ________ along the sharp curve 结合急转弯处安装加固钢制防护构件以提升行车安全，选 guardrail（护栏/防护挡板）。",
            family: "guardrail (n.防护栏/护栏) | concierge (n.礼宾员) | hierarchy (n.层级) | canteen (n.食堂)。",
            details: "steel guardrail 意为钢制护栏。concierge（礼宾员）、canteen（食堂）均非道路防撞设施。",
            cn: "公路养护人员在急转弯路段安装了加固钢质护栏，以提高车辆通行的安全性。",
            jp: "高速道路の維持管理クルーは、車両の安全性を高めるために急カーブ沿いに強化スチール製ガードレール（guardrail）を設置しました。"
        }
    },
    {
        id: 4,
        target: "sipping",
        category: "简单",
        stem: "In the cafe courtyard, several patrons are ________ chilled beverages while reviewing conference agendas.",
        options: ["sipping", "diverting", "patrolling", "randomizing"],
        correct: "sipping",
        explanations: {
            guide: "Part 1 动作分词考点。are ________ chilled beverages 结合在咖啡馆中一边看会议日程一边喝冷饮，选 sipping（小口喝/啜饮）。",
            family: "sipping (v-ing小口喝/啜饮) | diverting (v-ing分流/转移) | patrolling (v-ing巡逻) | randomizing (v-ing随机化)。",
            details: "sipping chilled beverages 属于餐饮与休闲高频搭配，意为啜饮冰镇饮料。diverting（转移）、randomizing（随机化）动宾不通。",
            cn: "在咖啡馆庭院中，几位顾客一边小口喝着冰镇饮料，一边翻阅着会议议程。",
            jp: "カフェの中庭では、数名の利用客が会議のアジェンダを確認しながら冷たい飲み物をすすって（sipping）います。"
        }
    },
    {
        id: 5,
        target: "vans",
        category: "简单",
        stem: "The regional courier company expanded its fleet by purchasing fifteen new electric delivery ________.",
        options: ["vans", "hierarchies", "canteens", "guardrails"],
        correct: "vans",
        explanations: {
            guide: "货运车辆名词复数。electric delivery ________ 结合快递公司采购车辆扩充车队，选 vans（厢式货车/面包车）。",
            family: "vans (n.复数厢式货车) | hierarchies (n.层级) | canteens (n.食堂) | guardrails (n.护栏)。",
            details: "electric delivery vans 意为电动送货车。hierarchies（层级体系）、guardrails（护栏）均非物流公司购置的营运车辆。",
            cn: "该区域快递公司通过采购十五辆新型纯电动送货厢式车，扩大了其车队规模。",
            jp: "その地域宅配会社は、15台の新しい電気配送バン（vans）を購入して自社の車両群を拡充しました。"
        }
    },
    {
        id: 6,
        target: "merit",
        category: "简单",
        stem: "Annual salary raises and promotional opportunities are awarded strictly based on individual job ________.",
        options: ["merit", "guardrail", "canteen", "van"],
        correct: "merit",
        explanations: {
            guide: "绩效考核名词考点。awarded strictly based on individual job ________ 结合调薪与晋升严格基于个人工作业绩，选 merit（绩效/功绩/优点）。",
            family: "merit (n.绩效/功绩/价值) | guardrail (n.护栏) | canteen (n.食堂) | van (n.货车)。",
            details: "based on job merit 意为基于工作绩效。canteen（食堂）、guardrail（护栏）不合人力资源晋升考核语境。",
            cn: "年度加薪和晋升机会完全严格根据个人工作绩效进行评定与授予。",
            jp: "年次昇給および昇進の機会は、個人の職務実績/功績（merit）に厳格に基づいて授与されます。"
        }
    },
    {
        id: 7,
        target: "diverted",
        category: "中等",
        stem: "Inbound traffic was ________ to secondary roads after an overturned truck blocked all lanes on the expressway.",
        options: ["diverted", "sipped", "randomized", "merited"],
        correct: "diverted",
        explanations: {
            guide: "交通管制被动动词考点。traffic was ________ to secondary roads 结合翻车事故阻断主干道导致车流被疏导改道，选 diverted（分流/改道）。",
            family: "diverted (v-ed改道/分流的) | sipped (v-ed小口喝的) | randomized (adj.随机化的) | merited (v-ed值得的)。",
            details: "traffic was diverted 属于交通与新闻播报极高频句型，意为车辆被分流改道。sipped（喝了）与交通疏导语义完全无关。",
            cn: "在一辆侧翻的卡车堵塞了高速公路的所有车道后，进城方向的交通被分流至次干道。",
            jp: "横転したトラックが高速道路の全車線を塞いだ後、上り線の交通は一般道路に迂回させられました（diverted）。"
        }
    },
    {
        id: 8,
        target: "hierarchy",
        category: "中等",
        stem: "The corporate restructuring eliminated several middle-management layers to create a flatter organizational ________.",
        options: ["hierarchy", "canteen", "guardrail", "concierge"],
        correct: "hierarchy",
        explanations: {
            guide: "企业架构名词考点。create a flatter organizational ________ 结合削减中层管理结构以构建更扁平的组织架构，选 hierarchy（层级体系/等级架构）。",
            family: "hierarchy (n.层级制度/组织架构) | canteen (n.食堂) | guardrail (n.护栏) | concierge (n.礼宾员)。",
            details: "flatter organizational hierarchy 意为更扁平的企业层级体系。canteen（食堂）、guardrail（护栏）均非企业管理架构术语。",
            cn: "公司重组精简了多个中层管理岗位，以打造更加扁平化的组织架构体系。",
            jp: "企業の事業再編により、いくつかの中間管理層が削減され、よりフラットな組織階層（hierarchy）が形成されました。"
        }
    },
    {
        id: 9,
        target: "randomized",
        category: "中等",
        stem: "To evaluate consumer preferences without bias, market researchers conducted a ________ blind product trial.",
        options: ["randomized", "diverted", "sipped", "hierarchical"],
        correct: "randomized",
        explanations: {
            guide: "调查方法修饰形容词。a ________ blind product trial 结合客观无偏见地评估消费者喜好，选 randomized（随机化的/无规则选取的）。",
            family: "randomized (adj.随机化的/盲选的) | diverted (v-ed改道的) | sipped (v-ed啜饮的) | hierarchical (adj.层级制的)。",
            details: "randomized blind trial 属于市场调查与实验高频术语，意为随机双盲试验。hierarchical（分等级的）不符合科学抽样无偏原则。",
            cn: "为了客观公正地评估消费者偏好，市场研究人员进行了一次随机盲测产品试验。",
            jp: "先入観なしに消費者の好みを評価するため、市場調査員は無作為化（randomized）ブラインド製品テストを実施しました。"
        }
    },
    {
        id: 10,
        target: "trolley tracks",
        category: "中等",
        stem: "Cyclists riding through the historic downtown area must exercise caution when crossing wet ________.",
        options: ["trolley tracks", "concierges", "hierarchies", "canteens"],
        correct: "trolley tracks",
        explanations: {
            guide: "城市道路设施名词复数。crossing wet ________ 结合提醒骑车人在历史街区小心穿过湿滑地面设施，选 trolley tracks（有轨电车铁轨）。",
            family: "trolley tracks (n.复数有轨电车轨道) | concierges (n.礼宾员) | hierarchies (n.层级) | canteens (n.食堂)。",
            details: "wet trolley tracks 意为湿滑的有轨电车铁轨。concierges（礼宾人员）、canteens（食堂）均非路面上易致滑倒的轨道构件。",
            cn: "骑自行车穿过历史悠久的市中心区域的骑行者在穿过湿滑的有轨电车轨道时必须格外小心。",
            jp: "歴史的なダウンタウン地区を走るサイクリストは、濡れた路面電車の線路（trolley tracks）を横断する際に注意を払う必要があります。"
        }
    },
    {
        id: 11,
        target: "merit",
        category: "中等",
        stem: "The evaluation committee decided to review each research grant proposal strictly on its own ________.",
        options: ["merits", "guardrails", "canteens", "vans"],
        correct: "merits",
        explanations: {
            guide: "固定短语名词复数考点。review each proposal strictly on its own ________ 属于托业经典搭配 on one's own merits，表达依据其“自身价值/优劣本身”，选 merits。",
            family: "merits (n.复数价值/长处/优缺点) | guardrails (n.护栏) | canteens (n.食堂) | vans (n.货车)。",
            details: "judge/review on its own merits 意为实事求是、根据事物本身的优劣来评判。其余选项均无此类抽象评价逻辑。",
            cn: "评审委员会决定严格根据每份科研资助申请方案本身的优劣价值来进行审核。",
            jp: "評価委員会は、各研究助成金提案をそれ自体の利点/価値（merits）に厳格に基づいて審査することを決定しました。"
        }
    },
    {
        id: 12,
        target: "diverted",
        category: "中等",
        stem: "Due to heavy fog and zero visibility at the destination, the international flight was ________ to a nearby regional airport.",
        options: ["diverted", "sipped", "randomized", "hierarchical"],
        correct: "diverted",
        explanations: {
            guide: "航空运输被动动词考点。flight was ________ to a nearby airport 结合大雾能见度极低导致航班备降其他机场，选 diverted（改飞/备降/转向）。",
            family: "diverted (v-ed改道/备降的) | sipped (v-ed喝了的) | randomized (adj.随机的) | hierarchical (adj.层级的)。",
            details: "flight was diverted 属于民航高频专属表达，专指航班因故备降或改降其他机场。sipped 与 randomized 均不用于飞机航线变更。",
            cn: "由于目的地机场出现大雾且能见度为零，该国际航班备降改飞至附近的区域机场。",
            jp: "目的地の濃霧と視界不良のため、その国際線フライトは近くの地方空港に目的地変更/迂回（diverted）させられました。"
        }
    },
    {
        id: 13,
        target: "hierarchy",
        category: "困难",
        stem: "The newly appointed managing director introduced a less ________ management structure to encourage collaborative problem-solving.",
        options: ["hierarchical", "hierarchy", "hierarchically", "hierarchies"],
        correct: "hierarchical",
        explanations: {
            guide: "修饰名词的派生形容词考点。a less ________ management structure 结构中，副词 less 后面接形容词修饰 structure，表达层级色彩较弱的/扁平化的管理结构，选 hierarchical。",
            family: "hierarchical (adj.等级制度的/层级结构的) | hierarchy (n.等级制) | hierarchically (adv.按等级划分地) | hierarchies (n.复数)。",
            details: "hierarchical structure 意为层级化结构。hierarchy 是名词，不能跟在 less 后面直接作名词 structure 的前置修饰定语。",
            cn: "新任命的总经理引入了一种层级化色彩更弱的管理架构，以鼓励协同解决问题。",
            jp: "新しく任命された専務取締役は、協調的な問題解決を促進するため、階層性（hierarchical）の低い管理体制を導入しました。"
        }
    },
    {
        id: 14,
        target: "randomized",
        category: "困难",
        stem: "Statisticians verified that the complete ________ of survey participants eliminated demographic bias from the polling results.",
        options: ["randomization", "randomized", "randomize", "randomly"],
        correct: "randomization",
        explanations: {
            guide: "派生抽象名词作主语。the complete ________ of participants 结构中，在定冠词 the 和形容词 complete 后面接抽象名词形式 randomization（随机化/随机抽样过程）。",
            family: "randomization (n.随机化/无规化) | randomized (adj.随机的) | randomize (v.使随机) | randomly (adv.随机地)。",
            details: "complete randomization 意为彻底的随机化抽样。randomized 是形容词/分词，不能在定冠词和形容词之后作主语中心语。",
            cn: "统计学家证实，受访参与者的完全随机化抽样消除了民意调查结果中的人口统计偏差。",
            jp: "統計学者は、調査参加者の完全な無作為化（randomization）によって世論調査結果から人口統計的な偏りが排除されたことを確認しました。"
        }
    },
    {
        id: 15,
        target: "merit",
        category: "困难",
        stem: "The regional branch manager was formally recognized for her ________ contributions to improving supply chain efficiency.",
        options: ["meritorious", "merit", "meritocracy", "merited"],
        correct: "meritorious",
        explanations: {
            guide: "派生褒义形容词作定语。her ________ contributions 结构中，修饰名词 contributions（贡献），表达“值得称赞的/立下功劳的”贡献，选派生形容词 meritorious。",
            family: "meritorious (adj.值得称赞的/立功的) | merit (n.优点/绩效) | meritocracy (n.精英管理体制) | merited (adj.应得的)。",
            details: "meritorious contributions 属于表彰嘉奖正式书面语，意为功勋卓越的贡献。merit 是名词，不能在此直接充当修饰 contributions 的前置形容词。",
            cn: "该区域分公司经理因其在提升供应链效率方面做出的卓越功绩贡献而受到正式表彰。",
            jp: "地域支社長は、サプライチェーン効率向上のための称賛に値する/功績ある（meritorious）貢献に対し、公式に表彰されました。"
        }
    },
    {
        id: 16,
        target: "diverted",
        category: "困难",
        stem: "The water main break caused a major traffic ________, forcing commuters to seek alternative subway routes.",
        options: ["diversion", "diverted", "divert", "diverting"],
        correct: "diversion",
        explanations: {
            guide: "派生抽象名词作宾语。caused a major traffic ________ 结构中，形容词 major 与名词定语 traffic 后面接抽象名词形式 diversion（改道/分流/改道指令）。",
            family: "diversion (n.分流/改道/转向) | diverted (adj./v-ed分流的) | divert (v.分流) | diverting (adj.有趣的/转向的)。",
            details: "traffic diversion 属于市政交通核心专有名词，意为交通改道/车辆分流。diverted 是分词，不能直接作为及物动词 caused 的宾语中心语。",
            cn: "主供水管道破裂造成了严重的交通改道，迫使通勤者改乘其他地铁线路。",
            jp: "水道本管の破損により大規模な交通迂回（diversion）が発生し、通勤客は代替の地下鉄ルートを探すことを余儀なくされました。"
        }
    },
    {
        id: 17,
        target: "guardrail",
        category: "困难",
        stem: "Factory safety compliance officers mandated that protective ________ be installed around all high-speed stamping presses.",
        options: ["guardrails", "hierarchies", "canteens", "concierges"],
        correct: "guardrails",
        explanations: {
            guide: "工业安全防护复数名词。protective ________ installed around presses 结合冲压机床周围强制安装的安全物理护栏，选 guardrails（防护栏/安全挡板复数）。",
            family: "guardrails (n.复数防护栏) | hierarchies (n.层级) | canteens (n.食堂) | concierges (n.礼宾员)。",
            details: "protective guardrails 专指工业现场的机械设备安全防护栏。hierarchies（层级）、canteens（食堂）均非车间防工伤物理挡栏设施。",
            cn: "工厂安全合规专员强制要求在所有高速冲压机床周围安装防护护栏。",
            jp: "工場の安全コンプライアンス担当者は、すべての高速プレス機の周囲に保護用安全柵（guardrails）を設置することを義務付けました。"
        }
    },
    {
        id: 18,
        target: "sipping",
        category: "困难",
        stem: "The barista demonstrated proper sensory evaluation by taking a small ________ of the freshly brewed espresso.",
        options: ["sip", "sipping", "sipped", "sipper"],
        correct: "sip",
        explanations: {
            guide: "可数单数名词考点。taking a small ________ of the espresso 结构中，冠词 a 和形容词 small 后面接单数名词形式 sip，表达“抿了一小口”，选名词 sip。",
            family: "sip (n.一小口/啜饮/v.小口喝) | sipping (v-ing/n.啜饮动作) | sipped (v-ed过去式) | sipper (n.啜饮者/吸嘴)。",
            details: "take a sip of sth 属于托业经典动宾短语，意为喝一小口某饮品。sipping 是动名词，在已有冠词 a 和形容词 small 时，应选用规范的可数单数名词 sip。",
            cn: "咖啡师通过品尝一小口刚冲煮好的浓缩咖啡，演示了正确的感官风味评估方法。",
            jp: "バリスタは、淹れたてのエスプレッソを一口（sip）飲んで、適切な官能評価の方法を実演しました。"
        }
    }
];