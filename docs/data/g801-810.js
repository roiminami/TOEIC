// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data551-560.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "surplus",
        pos: "名/形",
        ipa: "/ˈsɜːrpləs/",
        cn: "过剩，盈余；多余的",
        jp: "余剰、黒字；余分な",
        family: "surpluses",
        tips: "财务与库存高频：budget surplus（预算盈余），surplus inventory（过剩库存）。",
        desc: "The firm reported a surplus."
    },
    {
        word: "prestigious",
        pos: "形",
        ipa: "/preˈstɪdʒəs/",
        cn: "享有声望的，有威望的",
        jp: "名声のある、一流の",
        family: "prestige / prestigiously",
        tips: "奖项与机构高频：prestigious award/institution/university（知名奖项/声誉卓著的机构/名校）。",
        desc: "He won a prestigious award."
    },
    {
        word: "instrumental",
        pos: "形",
        ipa: "/ˌɪnstrəˈmentl/",
        cn: "起重要作用的，有帮助的",
        jp: "役立つ、重要な役割を果たす",
        family: "instrument / instrumentally / instrumentality",
        tips: "管理与成就高频搭配：be instrumental in doing sth（在做某事中起关键作用）。",
        desc: "She was instrumental in success."
    },
    {
        word: "congestion",
        pos: "名",
        ipa: "/kənˈdʒestʃən/",
        cn: "拥堵，拥挤，阻塞",
        jp: "混雑、渋滞",
        family: "congest / congested / congestive",
        tips: "交通与路况高频：traffic congestion（交通拥堵），ease congestion（缓解拥堵）。",
        desc: "Traffic caused severe congestion."
    },
    {
        word: "respected",
        pos: "形",
        ipa: "/rɪˈspektɪd/",
        cn: "受尊敬的，受推崇的",
        jp: "尊敬されている、評判の良い",
        family: "respect / respectful / respectable / respectively",
        tips: "人物评价高频：widely respected leader/scholar（广受推崇的领导者/学者）。",
        desc: "He is a respected scholar."
    },
    {
        word: "incur",
        pos: "動",
        ipa: "/ɪnˈkɜːr/",
        cn: "招致，遭受，带来（成本/罚金）",
        jp: "（負債や損害などを）招く、被る",
        family: "incurred / incurring / incurrence",
        tips: "财务与费用高频：incur additional fees/costs（产生额外费用），incur a penalty（招致罚款）。",
        desc: "Late returns incur a fee."
    },
    {
        word: "lengthy",
        pos: "形",
        ipa: "/ˈleŋkθi/",
        cn: "冗长的，漫长的",
        jp: "長時間の、長々とした",
        family: "length / lengthen / lengthily",
        tips: "流程与会议高频：lengthy process/delay/discussion（漫长的流程/延误/讨论）。",
        desc: "It was a lengthy meeting."
    },
    {
        word: "convey",
        pos: "動",
        ipa: "/kənˈveɪ/",
        cn: "表达，传达，运送",
        jp: "伝える、運ぶ",
        family: "conveyance / conveyor / conveyed",
        tips: "商务沟通高频：convey gratitude/wishes/messages（表达谢意/祝愿/信息）。",
        desc: "Please convey our sincere gratitude."
    },
    {
        word: "resume",
        pos: "動/名",
        ipa: "/rɪˈzuːm/",
        cn: "重新开始，恢复；履历",
        jp: "再開する、復帰する；履歴書",
        family: "resumption / resumed / resuming",
        tips: "运营与工程高频：resume operations/production（恢复运营/生产）。注意与 résumé（简历）区分。",
        desc: "Work will resume tomorrow morning."
    },
    {
        word: "eatery",
        pos: "名",
        ipa: "/ˈiːtəri/",
        cn: "餐馆，食堂，小吃店",
        jp: "飲食店、食堂",
        family: "eat / eater / eateries",
        tips: "餐饮与生活高频：casual/local eatery（休闲小餐馆/当地餐厅）。",
        desc: "They visited a popular eatery."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "incur",
        category: "简单",
        stem: "Tenants who fail to pay their rent on time will ________ a late penalty fee.",
        options: ["incur", "convey", "resume", "surplus"],
        correct: "incur",
        explanations: {
            guide: "财务动词搭配考点。will 后面接动词原形，结合逾期未交房租会“招致/产生”滞纳罚金（penalty fee），选 incur。",
            family: "incur (v.招致/遭受) | convey (v.传达) | resume (v.恢复) | surplus (n.盈余)。",
            details: "incur a fee 属于托业经典财务短语，意为产生费用/招致罚款。convey（传达）、resume（恢复）动宾搭配不通。",
            cn: "未能按时缴纳租金的租客将承担逾期滞纳金。",
            jp: "家賃を期日通りに支払わなかった賃借人は、延滞ペナルティ料金を被る（incur）ことになります。"
        }
    },
    {
        id: 2,
        target: "congestion",
        category: "简单",
        stem: "Commuters were advised to use public transit to avoid severe traffic ________ on the highway.",
        options: ["congestion", "eatery", "surplus", "resumption"],
        correct: "congestion",
        explanations: {
            guide: "交通路况名词考点。traffic ________ 属于托业最高频词组之一，表达高速公路上的“交通拥堵”，选 congestion。",
            family: "congestion (n.拥堵) | eatery (n.餐馆) | surplus (n.盈余) | resumption (n.恢复)。",
            details: "traffic congestion 意为交通拥堵。eatery（餐馆）、surplus（过剩）均非高速公路上出现的交通状况。",
            cn: "建议通勤者搭乘公共交通工具，以避免高速公路上的严重交通拥堵。",
            jp: "通勤者はハイウェイでの激しい交通渋滞（congestion）を避けるため、公共交通機関を利用するよう勧められました。"
        }
    },
    {
        id: 3,
        target: "prestigious",
        category: "简单",
        stem: "Dr. Bennett received a ________ award from the international medical association for her cancer research.",
        options: ["prestigious", "lengthy", "instrumental", "conveyed"],
        correct: "prestigious",
        explanations: {
            guide: "奖项修饰形容词。a ________ award 结合因癌症研究获得国际医学协会表彰，表达“享有盛望的/极具声望的”奖项，选 prestigious。",
            family: "prestigious (adj.享有盛望的) | lengthy (adj.漫长的) | instrumental (adj.起重要作用的) | conveyed (v-ed传达的)。",
            details: "prestigious award 意为享有盛望的知名大奖。lengthy（冗长的）与获得荣誉的褒义语境不符。",
            cn: "贝内特博士因其癌症研究获得了国际医学协会颁发的负有盛名的奖项。",
            jp: "ベネット博士は、がん研究において国際医師会から名誉ある（prestigious）賞を受賞しました。"
        }
    },
    {
        id: 4,
        target: "eatery",
        category: "简单",
        stem: "The downtown casual ________ is well known for serving authentic regional dishes.",
        options: ["eatery", "congestion", "surplus", "instrument"],
        correct: "eatery",
        explanations: {
            guide: "餐饮设施名词主语。casual ________ 结合供应正宗地方特色菜肴，选 eatery（餐馆/小吃店）。",
            family: "eatery (n.餐馆) | congestion (n.拥堵) | surplus (n.盈余) | instrument (n.乐器/工具)。",
            details: "casual eatery 意为休闲小餐馆。congestion（拥堵）、surplus（盈余）均非烹饪并提供餐饮服务的场所。",
            cn: "市中心那家休闲小餐馆因供应正宗的地方美食而闻名。",
            jp: "ダウンタウンにあるカジュアルな飲食店（eatery）は、本格的な郷土料理を提供することでよく知られています。"
        }
    },
    {
        id: 5,
        target: "resume",
        category: "简单",
        stem: "Factory workers will ________ normal assembly operations tomorrow after the scheduled maintenance.",
        options: ["resume", "incur", "convey", "congestion"],
        correct: "resume",
        explanations: {
            guide: "动词不定式考点。will 后面接动词原形，结合设备维护结束后工人们“重新开始/恢复”装配作业，选 resume。",
            family: "resume (v.恢复/重新开始) | incur (v.招致) | convey (v.传达) | congestion (n.拥堵)。",
            details: "resume operations 意为恢复运营/作业。incur（产生费用）、convey（表达）在此处动宾不合逻辑。",
            cn: "在计划的维护工作结束后，工厂工人将于明天恢复正常的装配作业。",
            jp: "工場の作業員は、定期メンテナンス終了後の明日、通常の組み立て作業を再開（resume）します。"
        }
    },
    {
        id: 6,
        target: "surplus",
        category: "简单",
        stem: "The retail store donated its ________ inventory of winter coats to a local community shelter.",
        options: ["surplus", "prestigious", "lengthy", "respected"],
        correct: "surplus",
        explanations: {
            guide: "库存前置修饰形容词。its ________ inventory 结合将多余的冬装大衣捐赠给庇护所，选 surplus（过剩的/多余的）。",
            family: "surplus (adj.多余的/过剩的) | prestigious (adj.著名的) | lengthy (adj.漫长的) | respected (adj.受尊重的)。",
            details: "surplus inventory 意为多余库存/过剩库存。prestigious（有声望的）不能用来修饰积压过剩的零售库存。",
            cn: "该零售商店将其多余的冬季大衣库存捐赠给了当地的社区收容所。",
            jp: "その小売店は、余分な（surplus）冬用コートの在庫を地元のコミュニティシェルターに寄付しました。"
        }
    },
    {
        id: 7,
        target: "instrumental",
        category: "中等",
        stem: "Ms. Tanaka was ________ in negotiating the multi-million dollar partnership with the overseas client.",
        options: ["instrumental", "respected", "lengthy", "prestigious"],
        correct: "instrumental",
        explanations: {
            guide: "表语形容词与固定介词搭配。was ________ in doing sth 属于托业经典句型，表达在谈判中“起关键/重要作用的”，选 instrumental。",
            family: "instrumental (adj.起重要作用的) | respected (adj.受尊重的) | lengthy (adj.漫长的) | prestigious (adj.著名的)。",
            details: "be instrumental in doing sth 意为在做某事中发挥了关键作用。respected 后面通常不接 in doing sth 构成此类功能性表达。",
            cn: "田中女士在与海外客户达成数百万美元的合作协议中起到了关键作用。",
            jp: "田中氏は、海外クライアントとの数百万ドル規模のパートナーシップ交渉において重要な役割を果たし（instrumental）ました。"
        }
    },
    {
        id: 8,
        target: "convey",
        category: "中等",
        stem: "The CEO sent a company-wide email to ________ her sincere gratitude to the dedicated project team.",
        options: ["convey", "incur", "resume", "congest"],
        correct: "convey",
        explanations: {
            guide: "沟通动词不定式。to 后面接动词原形，结合向项目团队表达谢意（gratitude），选 convey（传达/表达）。",
            family: "convey (v.表达/传达) | incur (v.招致) | resume (v.恢复) | congest (v.拥塞)。",
            details: "convey gratitude 属于商务书信高频固定搭配，意为表达谢意。incur（产生）、resume（重新开始）动宾搭配错误。",
            cn: "首席执行官发送了全员电子邮件，向敬业的项目团队表达她由衷的感激之情。",
            jp: "CEOは全社メールを送信し、献身的なプロジェクトチームに心からの感謝を伝え（convey）ました。"
        }
    },
    {
        id: 9,
        target: "respected",
        category: "中等",
        stem: "Mr. Davies is a highly ________ architect whose innovative building designs have won numerous prizes.",
        options: ["respected", "instrumental", "lengthy", "incurred"],
        correct: "respected",
        explanations: {
            guide: "修饰人物声望的形容词。a highly ________ architect 结合其创新的建筑设计屡获大奖，选 respected（备受推崇/尊敬的）。",
            family: "respected (adj.受推崇的) | instrumental (adj.起重要作用的) | lengthy (adj.冗长的) | incurred (v-ed招致的)。",
            details: "highly respected architect 意为德高望重/广受赞誉的建筑师。instrumental 一般作表语（be instrumental in），不直接被 highly 修饰作前置定语。",
            cn: "戴维斯先生是一位备受推崇的建筑师，其创新的建筑设计多次斩获大奖。",
            jp: "デイビス氏は、革新的な建築デザインで数々の賞を受賞している、非常に高く評価された（respected）建築家です。"
        }
    },
    {
        id: 10,
        target: "lengthy",
        category: "中等",
        stem: "After a ________ discussion that lasted over four hours, the committee finally reached a consensus.",
        options: ["lengthy", "prestigious", "surplus", "respected"],
        correct: "lengthy",
        explanations: {
            guide: "会议讨论修饰形容词。a ________ discussion 结合后文持续了四个多小时（lasted over four hours），选 lengthy（漫长的/冗长的）。",
            family: "lengthy (adj.漫长的/冗长的) | prestigious (adj.著名的) | surplus (adj.多余的) | respected (adj.受尊重的)。",
            details: "a lengthy discussion 意为冗长漫长的讨论。prestigious（有声望的）无法修饰会议耗时长的特征。",
            cn: "经过长达四个多小时的漫长讨论后，委员会终于达成了共识。",
            jp: "4時間以上に及ぶ長時間の（lengthy）議論の末、委員会は最終的に合意に達しました。"
        }
    },
    {
        id: 11,
        target: "incur",
        category: "中等",
        stem: "Travelers who exceed the checked baggage weight limit will be required to pay the ________ fees.",
        options: ["incurred", "incur", "conveyed", "resumed"],
        correct: "incurred",
        explanations: {
            guide: "过去分词作定语修饰名词。pay the ________ fees 结构中，修饰费用，表达超重所“产生的/招致的”额外费用，选 incurred。",
            family: "incurred (adj./v-ed产生的/招致的) | incur (v.原形) | conveyed (v-ed传达的) | resumed (v-ed恢复的)。",
            details: "incurred fees 意为产生的费用。incur 是动词原形，不能作名词 fees 的前置定语修饰语。",
            cn: "托运行李超重的旅客将被要求支付所产生的额外费用。",
            jp: "受託手荷物の重量制限を超過した旅行者は、発生した（incurred）追加料金を支払う必要があります。"
        }
    },
    {
        id: 12,
        target: "surplus",
        category: "中等",
        stem: "Thanks to strict fiscal management, the municipal government finished the year with a significant budget ________.",
        options: ["surplus", "congestion", "eatery", "resumption"],
        correct: "surplus",
        explanations: {
            guide: "财政收支名词考点。budget ________ 属于财报高频专有名词，结合严格的财政管理，表达“预算盈余/结余”，选 surplus。",
            family: "surplus (n.盈余/过剩) | congestion (n.拥堵) | eatery (n.餐馆) | resumption (n.恢复)。",
            details: "budget surplus 意为财政/预算盈余。congestion（拥堵）、eatery（餐馆）均非财政结余术语。",
            cn: "多亏了严格的财政管理，市政府以可观的预算盈余结束了这一年。",
            jp: "厳格な財政管理のおかげで、市当局は大幅な予算黒字（surplus）でその年を終えました。"
        }
    },
    {
        id: 13,
        target: "prestigious",
        category: "困难",
        stem: "Publishing articles in top-tier academic journals has greatly enhanced the research institution's global ________.",
        options: ["prestige", "prestigious", "instrumentality", "congestion"],
        correct: "prestige",
        explanations: {
            guide: "派生抽象名词作宾语。enhanced the research institution's global ________ 结构中，形容词 global 后面接名词形式 prestige（声望/威望）。",
            family: "prestige (n.声望/威望) | prestigious (adj.享有声望的) | instrumentality (n.手段) | congestion (n.拥堵)。",
            details: "enhance global prestige 意为提升国际声誉。prestigious 是形容词，不能直接作及物动词 enhance 的宾语中心语。",
            cn: "在顶尖学术期刊上发表文章极大地提升了该研究机构的全球声誉。",
            jp: "トップクラスの学術誌に論文を掲載したことで、その研究機関の世界的名声（prestige）は大幅に高まりました。"
        }
    },
    {
        id: 14,
        target: "resume",
        category: "困难",
        stem: "Commuters welcomed the full ________ of express train services following two weeks of track repairs.",
        options: ["resumption", "resume", "conveyance", "congestion"],
        correct: "resumption",
        explanations: {
            guide: "派生抽象名词主语/宾语。the full ________ of express train services 结构中，在定冠词 the 和介词 of 之间填入抽象名词 resumption（恢复/重新开始）。",
            family: "resumption (n.恢复/再开) | resume (v.恢复/n.简历) | conveyance (n.运输) | congestion (n.拥堵)。",
            details: "resumption of services 意为服务的恢复运营。resume 是动词，不能在定冠词和形容词修饰下作名词中心语。",
            cn: "在轨道维修两周之后，通勤者对特快列车服务的全面恢复表示欢迎。",
            jp: "2週間の線路補修工事の後、通勤客は急行列車サービスの全面的な再開（resumption）を歓迎しました。"
        }
    },
    {
        id: 15,
        target: "convey",
        category: "困难",
        stem: "The company's advertising campaign was carefully crafted to ensure the accurate ________ of its brand values.",
        options: ["conveyance", "convey", "incurrence", "surplus"],
        correct: "conveyance",
        explanations: {
            guide: "派生抽象名词考点。the accurate ________ of its brand values 结构中，形容词 accurate 后面接抽象名词 conveyance（传达/表达）。",
            family: "conveyance (n.传达/表达/运送) | convey (v.传达) | incurrence (n.招致) | surplus (n.盈余)。",
            details: "conveyance of brand values 意为品牌价值的准确传达。convey 是动词原形，不能作介词 of 短语前的中心名词。",
            cn: "公司的广告宣传活动经过精心设计，以确保其品牌价值得到准确传达。",
            jp: "その会社の広告キャンペーンは、ブランド価値の正確な伝達（conveyance）を確実にするよう慎重に作られました。"
        }
    },
    {
        id: 16,
        target: "congestion",
        category: "困难",
        stem: "Urban planners proposed dedicated bus lanes to improve traffic flow along heavily ________ corridors.",
        options: ["congested", "congestion", "lengthy", "instrumental"],
        correct: "congested",
        explanations: {
            guide: "分词作定语修饰名词。heavily ________ corridors 结构中，副词 heavily 后面接过去分词作定语，表达交通“严重拥堵的”干道走廊，选 congested。",
            family: "congested (adj./v-ed拥堵的) | congestion (n.拥堵) | lengthy (adj.漫长的) | instrumental (adj.起重要作用的)。",
            details: "heavily congested corridors 意为严重拥堵的交通走廊。congestion 是名词，不能被副词 heavily 修饰作为名词 corridors 的前置定语。",
            cn: "城市规划者提议设置公交专用道，以改善严重拥堵的主干道上的交通流量。",
            jp: "都市計画担当者は、激しく混雑した（congested）幹線道路沿いの交通の流れを改善するため、バス専用レーンを提案しました。"
        }
    },
    {
        id: 17,
        target: "instrumental",
        category: "困难",
        stem: "The chief financial officer played an ________ role in securing low-interest capital for the plant expansion.",
        options: ["instrumental", "instrument", "instrumentality", "incurred"],
        correct: "instrumental",
        explanations: {
            guide: "高阶固定动宾搭配。played an ________ role in... 属于托业经典搭配，表达发挥了“举足轻重/关键的”作用，选 instrumental。",
            family: "instrumental (adj.起关键作用的) | instrument (n.工具) | instrumentality (n.手段) | incurred (v-ed产生的)。",
            details: "play an instrumental role in sth 意为在某事中起关键作用。instrument 是名词，不能作 role 的前置定语修饰语。",
            cn: "首席财务官在为工厂扩建争取低息资金方面发挥了关键作用。",
            jp: "最高財務責任者は、工場拡張のための低金利資金の確保において極めて重要な（instrumental）役割を果たしました。"
        }
    },
    {
        id: 18,
        target: "lengthy",
        category: "困难",
        stem: "Due to the extreme ________ of the regulatory approval process, the pharmaceutical firm delayed its product release.",
        options: ["length", "lengthy", "congestion", "prestige"],
        correct: "length",
        explanations: {
            guide: "派生抽象名词考点。Due to the extreme ________ of the process 结构中，在定冠词 the 和形容词 extreme 后面接抽象名词形式 length（时长/漫长程度）。",
            family: "length (n.长度/时长) | lengthy (adj.漫长的) | congestion (n.拥堵) | prestige (n.声望)。",
            details: "the extreme length of the process 意为审批流程耗时极长。lengthy 是形容词，不能直接跟在形容词 extreme 后面作介词 of 的中心名词。",
            cn: "由于监管审批流程耗时极长，这家制药公司推迟了其产品的发布。",
            jp: "規制承認プロセスの極度の長さ（length）のため、その製薬会社は製品の発売を延期しました。"
        }
    }
];