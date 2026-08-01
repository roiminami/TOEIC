// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag41-50 Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "competition",
        pos: "名",
        ipa: "/ˌkɑːmpəˈtɪʃn/",
        cn: "竞争，比赛，竞争对手",
        jp: "競争、コンペ、競合他社",
        family: "compete / competitive / competitor",
        tips: "托业高频搭配：face fierce competition（面临激烈竞争）、stiff competition（残酷竞争）。Part 5中常考形容词 competitive（有竞争力的，如 competitive prices 具竞争力的价格）和名词 competitor（竞争对手）。",
        desc: "The competition was intense."
    },
    {
        word: "driveway",
        pos: "名",
        ipa: "/ˈdraɪvweɪ/",
        cn: "车道，私人出入车道",
        jp: "私道、ドライブウェイ、車道",
        family: "driveways",
        tips: "听力 Part 1 图片题与行政通知高频词。通常指连接住宅/办公楼与主路的私人车道。常见动作如 park the car in the driveway（把车停在私家车道上）。",
        desc: "The car is in the driveway."
    },
    {
        word: "adjacent",
        pos: "形",
        ipa: "/əˈdʒeɪsnt/",
        cn: "邻近的，毗连的",
        jp: "隣接した、近隣の",
        family: "adjacency",
        tips: "商务办公与酒店预订高频考点。固定搭配：adjacent to...（紧邻……，相当于 next to）。常见短语：adjacent building（邻近建筑）、adjacent room（隔壁房间）。",
        desc: "The offices are adjacent."
    },
    {
        word: "compromise",
        pos: "名/動",
        ipa: "/ˈkɑːmprəmaɪz/",
        cn: "妥协，折中；达成妥协",
        jp: "妥協、妥協案；妥協する",
        family: "compromising / compromised",
        tips: "商务谈判（Negotiation）核心词汇。常见表达：reach a compromise（达成妥协）、make a compromise（做出让步）。作动词时意为“妥协”或“危及（安全等）”。",
        desc: "They reached a compromise."
    },
    {
        word: "pavement",
        pos: "名",
        ipa: "/ˈpeɪvmənt/",
        cn: "人行道，路面",
        jp: "歩道、舗装道路",
        family: "pave / paving",
        tips: "听力 Part 1（图片描述）与场地维修通知高频词。英式英语特指“人行道”（=美式 sidewalk），托业中常考 pave the street（铺路）、walk on the pavement（在人行道上行走）。",
        desc: "Please walk on the pavement."
    },
    {
        word: "prestigious",
        pos: "形",
        ipa: "/preˈstɪdʒəs/",
        cn: "有声望的，声誉高的，顶尖的",
        jp: "名声のある、一流の、権威ある",
        family: "prestige",
        tips: "企业招聘、颁奖典礼及品牌宣传高频形容词。常用来修饰 award（有声望的奖项）、university（顶尖大学）、company（著名公司）。",
        desc: "She works at a prestigious firm."
    },
    {
        word: "arbitration",
        pos: "名",
        ipa: "/ˌɑːrbɪˈtreɪʃn/",
        cn: "仲裁，公断",
        jp: "仲裁、調停",
        family: "arbitrate / arbitrator / arbitrary",
        tips: "法律契约与劳资纠纷核心词汇。常见短语：binding arbitration（具有约束力的仲裁）、submit a dispute to arbitration（将争议提交仲裁）。",
        desc: "The dispute went to arbitration."
    },
    {
        word: "tournament",
        pos: "名",
        ipa: "/ˈtʊrnəmənt/",
        cn: "锦标赛，联赛",
        jp: "トーナメント、選手権大会",
        family: "tournaments",
        tips: "公司员工活动、赞助赛事（Sponsorship）及体育场馆通知高频词。常见搭配：golf tournament（高尔夫锦标赛）、annual tournament（年度比赛）。",
        desc: "He won the tennis tournament."
    },
    {
        word: "lucrative",
        pos: "形",
        ipa: "/ˈluːkrətɪv/",
        cn: "获利丰厚的，赚钱的",
        jp: "利益の出る、儲かる",
        family: "lucratively / lucrativeness",
        tips: "商业投资与合同签订极高频形容词。常见修饰：lucrative contract（利润丰厚的合同）、lucrative market（赚钱的市场）、lucrative deal（划算的交易）。",
        desc: "It was a lucrative contract."
    },
    {
        word: "biomedical",
        pos: "形",
        ipa: "/ˌbaɪoʊˈmedɪkl/",
        cn: "生物医学的",
        jp: "バイオメディカルの、生物医学の",
        family: "biomedicine / biology",
        tips: "科技与医疗板块图表及阅读高频行业词。常见搭配：biomedical research（生物医学研究）、biomedical device（生物医疗设备）、biomedical company（生物医药公司）。",
        desc: "They do biomedical research."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "competition",
        category: "简单",
        stem: "The smartphone maker faced intense ________ from international brands this year.",
        options: ["competition", "compromise", "pavement", "arbitration"],
        correct: "competition",
        explanations: {
            guide: "名词词义辨析。由形容词 intense（激烈的）修饰，作为 faced（面临）的宾语，结合后半句“来自国际品牌”，此处应选 competition（竞争）。",
            family: "competition (n.竞争) | compromise (n.妥协) | pavement (n.人行道) | arbitration (n.仲裁)。",
            details: "face intense competition 意为“面临激烈竞争”，是商业报道与市场分析中的固定词汇组合。",
            cn: "这家智能手机制造商今年面临着来自国际品牌的激烈竞争。",
            jp: "そのスマートフォンメーカーは今年、海外ブランドとの激しい競争（competition）に直面しました。"
        }
    },
    {
        id: 2,
        target: "driveway",
        category: "简单",
        stem: "Please do not park your vehicle in the ________ as it blocks access for trucks.",
        options: ["driveway", "pavement", "tournament", "lucrative"],
        correct: "driveway",
        explanations: {
            guide: "名词词义辨析。由介词 in 与定冠词 the 修饰，结合后半句“阻塞了货车的进出通道”，可知是指私人出入车道，选 driveway。",
            family: "driveway (n.车道) | pavement (n.人行道) | tournament (n.锦标赛) | lucrative (adj.获利丰厚的)。",
            details: "driveway 专指住宅或公司连接主干道的私人出入车道。park in the driveway（停在私家车道上）符合语境。",
            cn: "请不要将您的车辆停在车道上，因为这会阻挡货车的通行。",
            jp: "トラックの通行の妨げになりますので、私道（driveway）に車を駐車しないでください。"
        }
    },
    {
        id: 3,
        target: "adjacent",
        category: "简单",
        stem: "The storage room is located ________ to the main office for easy access.",
        options: ["adjacent", "prestigious", "biomedical", "arbitration"],
        correct: "adjacent",
        explanations: {
            guide: "固定搭配与形容词辨析。空格后有介词 to，构成 adjacent to... 结构，意为“紧邻……”，选形容词 adjacent。",
            family: "adjacent (adj.邻近的) | prestigious (adj.有声望的) | biomedical (adj.生物医学的) | arbitration (n.仲裁)。",
            details: "be located adjacent to... 表示“位于……隔壁/紧邻……”，在描述公司建筑布局时极高频。",
            cn: "储藏室紧邻主办公室，方便存取物品。",
            jp: "保管室は出し入れがしやすいよう、メインオフィスの隣（adjacent）に位置しています。"
        }
    },
    {
        id: 4,
        target: "tournament",
        category: "简单",
        stem: "The annual charity golf ________ will be held at the country club this weekend.",
        options: ["tournament", "competition", "driveway", "compromise"],
        correct: "tournament",
        explanations: {
            guide: "名词词义辨析与高频搭配。由 golf（高尔夫）修饰，构成习惯表达“高尔夫锦标赛/赛事”，选 tournament。",
            family: "tournament (n.锦标赛) | competition (n.竞争) | driveway (n.车道) | compromise (n.妥协)。",
            details: "golf tournament（高尔夫锦标赛）是托业听力与阅读中公司赞助或员工福利活动的经典常客。",
            cn: "一年一度的慈善高尔夫锦标赛将于本周末在乡村俱乐部举行。",
            jp: "例年のチャリティーゴルフ大会（tournament）が今週末、カントリークラブで開催されます。"
        }
    },
    {
        id: 5,
        target: "pavement",
        category: "简单",
        stem: "Pedestrians are advised to stay on the ________ while road repairs are underway.",
        options: ["pavement", "driveway", "lucrative", "biomedical"],
        correct: "pavement",
        explanations: {
            guide: "名词词义辨析。由主语 Pedestrians（行人）和介词 on the 引导，道路施工期间行人应当行走在“人行道”上，选 pavement。",
            family: "pavement (n.人行道) | driveway (n.私家车道) | lucrative (adj.获利丰厚的) | biomedical (adj.生物医学的)。",
            details: "stay on the pavement（走在人行道上）是公共安全与交通通知的高频表达（pavement 在托业英式语境中指人行道）。",
            cn: "道路施工期间，建议行人走在人行道上。",
            jp: "道路補修工事の間、歩行者は歩道（pavement）を通るよう勧められています。"
        }
    },
    {
        id: 6,
        target: "lucrative",
        category: "简单",
        stem: "Winning the government contract proved to be a very ________ business deal.",
        options: ["lucrative", "prestigious", "adjacent", "compromise"],
        correct: "lucrative",
        explanations: {
            guide: "形容词修饰名词。空格位于副词 very 和复合名词 business deal（商业交易）之间，表达这是一笔“获利丰厚的”交易，选 lucrative。",
            family: "lucrative (adj.获利丰厚的) | prestigious (adj.有声望的) | adjacent (adj.邻近的) | compromise (n.妥协)。",
            details: "lucrative business deal（利润丰厚的商业交易）是商业投资场景的标准搭配。",
            cn: "赢得政府合同被证明是一笔获利丰厚的商业交易。",
            jp: "政府の契約を獲得したことは、非常に利益の出る（lucrative）ビジネス取引であることが証明されました。"
        }
    },
    {
        id: 7,
        target: "compromise",
        category: "中等",
        stem: "After hours of negotiation, both sides managed to reach a fair ________ on pricing.",
        options: ["compromise", "competition", "arbitration", "pavement"],
        correct: "compromise",
        explanations: {
            guide: "固定动宾搭配与词义辨析。空格作为动词 reach 的宾语，结合前文的“长时间谈判”，考查经典短语 reach a compromise（达成妥协/折中方案）。",
            family: "compromise (n.妥协) | competition (n.竞争) | arbitration (n.仲裁) | pavement (n.人行道)。",
            details: "reach a compromise on sth 在商务谈判中意为“在某事上达成折中协议/妥协”。",
            cn: "经过数小时的谈判，双方终于在价格上达成了公平的妥协方案。",
            jp: "何時間もの交渉の末、双方は価格について公平な妥協案（compromise）に達することができました。"
        }
    },
    {
        id: 8,
        target: "prestigious",
        category: "中等",
        stem: "Dr. Vance received a ________ award in recognition of his contributions to science.",
        options: ["prestigious", "adjacent", "lucrative", "biomedical"],
        correct: "prestigious",
        explanations: {
            guide: "形容词词义辨析。修饰名词 award（奖项），结合后半句“表彰其对科学的贡献”，应选择表示“有声望的/令人尊敬的”形容词 prestigious。",
            family: "prestigious (adj.有声望的) | adjacent (adj.邻近的) | lucrative (adj.获利丰厚的) | biomedical (adj.生物医学的)。",
            details: "a prestigious award 意为“一项有声望的奖项”，是公司宣传或表彰大会中的常见句型。",
            cn: "万斯博士获得了一项享有盛誉的奖项，以表彰他对科学作出的贡献。",
            jp: "ヴァンス博士は、科学への貢献が認められ、名誉ある（prestigious）赏を受赏しました。"
        }
    },
    {
        id: 9,
        target: "arbitration",
        category: "中等",
        stem: "To avoid costly court litigation, the dispute was submitted to independent ________.",
        options: ["arbitration", "compromise", "tournament", "driveway"],
        correct: "arbitration",
        explanations: {
            guide: "名词词义辨析。空格作介词 to 的宾语，结合前半句“避免高昂的法庭诉讼”，可知将纠纷提交给独立的“仲裁”处理，选 arbitration。",
            family: "arbitration (n.仲裁) | compromise (n.妥协) | tournament (n.锦标赛) | driveway (n.车道)。",
            details: "submit a dispute to arbitration 是法律合同和商业纠纷处理的标准用语。",
            cn: "为了避免高昂的法庭诉讼，该争议被提交给了第三方独立仲裁。",
            jp: "高額な裁判費用を避けるため、紛争は第三者の仲裁（arbitration）に委ねられました。"
        }
    },
    {
        id: 10,
        target: "biomedical",
        category: "中等",
        stem: "The lab specializes in ________ engineering to create advanced medical devices.",
        options: ["biomedical", "lucrative", "prestigious", "adjacent"],
        correct: "biomedical",
        explanations: {
            guide: "复合名词修饰语。空格修饰工程学名词 engineering，结合后半句“制造先进的医疗设备”，应填入 biomedical（生物医学的）。",
            family: "biomedical (adj.生物医学的) | lucrative (adj.赚钱的) | prestigious (adj.著名的) | adjacent (adj.相邻的)。",
            details: "biomedical engineering（生物医学工程）是特定的科技专业板块及招聘高频词领域。",
            cn: "该实验室专门从事生物医学工程，以研发先进的医疗设备。",
            jp: "その研究室は、高度な医療機器を開発するためのバイオメディカル（biomedical）工学を専門としています。"
        }
    },
    {
        id: 11,
        target: "competition",
        category: "中等",
        stem: "To remain ________ in the global market, we must reduce our operating costs.",
        options: ["competitive", "competition", "competitor", "compromise"],
        correct: "competitive",
        explanations: {
            guide: "系表结构与形容词派生辨析。空格在系动词 remain 之后，充当表语，需要填入形容词。表达“保持竞争力的”，选 competitive。",
            family: "competitive (adj.具竞争力的) | competition (n.竞争) | competitor (n.竞争对手) | compromise (n./v.妥协)。",
            details: "remain competitive 意为“保持竞争力”，是企业战略规划中的绝对核心表达。",
            cn: "为了在全球市场中保持竞争力，我们必须降低运营成本。",
            jp: "世界市場で競争力（competitive）を維持するために、私たちは運営コストを削減しなければなりません。"
        }
    },
    {
        id: 12,
        target: "adjacent",
        category: "中等",
        stem: "Hotel guests can park their vehicles in the ________ lot across the street.",
        options: ["adjacent", "prestigious", "lucrative", "biomedical"],
        correct: "adjacent",
        explanations: {
            guide: "形容词修饰名词。空格修饰名词 lot（停车场），结合后文“跨过街道”，说明是“邻近的”停车场，选 adjacent。",
            family: "adjacent (adj.邻近的) | prestigious (adj.顶尖的) | lucrative (adj.赚钱的) | biomedical (adj.生物医学的)。",
            details: "adjacent lot 意为“邻近的停车场”，在行政通知与酒店设施指南中很常见。",
            cn: "酒店客人可以将车辆停在马路对面的邻近停车场。",
            jp: "ホテルの宿泊客は、通りを挟んだ隣接する（adjacent）駐車場に車を停めることができます。"
        }
    },
    {
        id: 13,
        target: "competition",
        category: "困难",
        stem: "Our new line of organic products has surpassed those of our chief ________.",
        options: ["competitors", "competition", "competitive", "arbitration"],
        correct: "competitors",
        explanations: {
            guide: "名词派生身份词及单复数辨析。空格在形容词 chief（主要的）之后，作介词 of 的宾语，根据代词 those（指代 products）可知此处要对比的是“竞争对手们”的产品，选复数人称名词 competitors。",
            family: "competitors (n.竞争对手/复数) | competition (n.竞争) | competitive (adj.具竞争力的) | arbitration (n.仲裁)。",
            details: "chief competitors 指代“主要竞争对手”。注意不能选抽象名词 competition（竞争本身无法拥有具体产品）。",
            cn: "我们的新有机产品系列已经超越了我们主要竞争对手的产品。",
            jp: "当社の新しいオーガニック製品ラインは、主要な競合他社（competitors）の製品を上回りました。"
        }
    },
    {
        id: 14,
        target: "arbitration",
        category: "困难",
        stem: "An experienced ________ was chosen to mediate the conflict between the union and management.",
        options: ["arbitrator", "arbitration", "compromise", "prestigious"],
        correct: "arbitrator",
        explanations: {
            guide: "名词派生人称词辨析。空格位于不定冠词 An 和形容词 experienced 之后，作句子的主语，且后文指出其动作是 mediate（调解），需要填入指代人的名词 arbitrator（仲裁员）。",
            family: "arbitrator (n.仲裁员) | arbitration (n.仲裁过程) | compromise (n.妥协) | prestigious (adj.声誉高的)。",
            details: "arbitrator 是由 arbitrate 派生的职业名词，指“仲裁人/公断人”，而 arbitration 指仲裁这一程序。",
            cn: "一位经验丰富的仲裁员被选来调解工会与管理层之间的冲突。",
            jp: "労働組合と経営陣の間の争いを仲裁するために、経験豊富な仲裁人（arbitrator）が选ばれました。"
        }
    },
    {
        id: 15,
        target: "compromise",
        category: "困难",
        stem: "Neither party showed any willingness to ________ on the terms of the settlement.",
        options: ["compromise", "compromising", "compromised", "competition"],
        correct: "compromise",
        explanations: {
            guide: "不定式结构与动词原形考点。空格跟在名词 willingness 之后构成不定式结构 to do sth（做某事的意愿），此处需要填入动词原形 compromise。",
            family: "compromise (v.妥协/原形) | compromising (pres-p.妥协的) | compromised (past-p.受妥协的) | competition (n.竞争)。",
            details: "willingness to do sth 是高频句型，to 后接动词原形 compromise。表达“双方均未表现出做出妥协的意愿”。",
            cn: "双方均未表现出在和解条款上做出妥协的意愿。",
            jp: "いずれの当事者も、和解条件について妥協する（compromise）姿勢を示しませんでした。"
        }
    },
    {
        id: 16,
        target: "prestigious",
        category: "困难",
        stem: "Winning the award brought great ________ to the small design agency.",
        options: ["prestige", "prestigious", "lucrative", "adjacent"],
        correct: "prestige",
        explanations: {
            guide: "名词与派生形容词辨析。空格位于动词 brought 的直接宾语位置，由形容词 great 修饰，需要填入不可数名词 prestige（声誉，威望）。",
            family: "prestige (n.声誉/威望) | prestigious (adj.有声望的) | lucrative (adj.赚钱的) | adjacent (adj.相邻的)。",
            details: "bring prestige to sb/sth 意为“给……带来声誉”。prestigious 是形容词，不能直接作 brought 的宾语。",
            cn: "赢得该奖项给这家小型设计机构带来了极大的声誉。",
            jp: "その賞を受賞したことは、小さなデザイン会社に大きな名声（prestige）をもたらしました。"
        }
    },
    {
        id: 17,
        target: "pavement",
        category: "困难",
        stem: "The city council plans to ensure that all pedestrian paths in the park are properly ________.",
        options: ["paved", "pavement", "driveway", "adjacent"],
        correct: "paved",
        explanations: {
            guide: "动词分词（被动语态）考点。空格位于系动词 are 和副词 properly 之后，构成被动语态 are paved（被铺设）。",
            family: "paved (adj./v.已铺砌的) | pavement (n.人行道) | driveway (n.私家车道) | adjacent (adj.邻近的)。",
            details: "pave 动词意为“铺路”。paved path 指“铺设好的步道”。pavement 为名词，无法在此处充当被动语态谓语动词的过去分词。",
            cn: "市议会计划确保公园内的所有步行道都得到妥善铺设。",
            jp: "市議会は、公園内のすべての遊歩道が適切に舗装される（paved）ようにすることを計画しています。"
        }
    },
    {
        id: 18,
        target: "lucrative",
        category: "困难",
        stem: "The firm operated ________ in the Asian market for over a decade before expanding into Europe.",
        options: ["lucratively", "lucrative", "lucrativeness", "prestigious"],
        correct: "lucratively",
        explanations: {
            guide: "副词修饰不及物动词。空格位于不及物动词 operated（运营/盈利）之后，作状语修饰动词，说明运营状态是“获利丰厚地”，选副词 lucratively。",
            family: "lucratively (adv.获利丰厚地) | lucrative (adj.获利丰厚的) | lucrativeness (n.获利) | prestigious (adj.有声望的)。",
            details: "operate lucratively 属于高阶商业表达，意为“盈利状况良好地运营”。此处缺少副词修饰动词 operated。",
            cn: "该公司在扩展至欧洲市场之前，在亚洲市场获利丰厚地运营了十多年。",
            jp: "同社はヨーロッパへの進出前、10年以上にもわたりアジア市場で大きな利益を上げて（lucratively）事業を展開していました。"
        }
    }
];