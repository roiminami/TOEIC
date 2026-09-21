// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data241-250.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "errand",
        pos: "名",
        ipa: "/ˈerənd/",
        cn: "差事，日常事务，跑腿",
        jp: "用事、使い走り",
        family: "errands / run errands",
        tips: "商务日常高频固定短语：run errands（处理杂事/外出办事），run a personal errand（处理私事），on an errand（在办事途中）。",
        desc: "He ran an errand for his boss."
    },
    {
        word: "advocate",
        pos: "動/名",
        ipa: "/ˈædvəkeɪt/ (v.), /ˈædvəkət/ (n.)",
        cn: "倡导，主张；拥护者，倡导者",
        jp: "主張する、提唱する；支持者、主唱者",
        family: "advocacy / advocating / advocated",
        tips: "动词高频搭配：advocate for policy changes / environmental protection（倡导政策变革/环保）；作名词指坚定拥护者（a vocal advocate of...）。",
        desc: "She advocates for green energy."
    },
    {
        word: "offset",
        pos: "動/名",
        ipa: "/ˌɔːfˈset/ (v.), /ˈɔːfset/ (n.)",
        cn: "抵消，弥补；补偿，抵消物",
        jp: "相殺する、埋め合わせる；相殺するもの",
        family: "offsets / offsetting / carbon offset",
        tips: "财务分析与环保核心词：offset rising production costs（抵消上涨的生产成本）；碳中和场景常考 carbon offset（碳抵消/碳补偿额度）。",
        desc: "Sales growth helped offset higher costs."
    },
    {
        word: "high-profile",
        pos: "形",
        ipa: "/ˌhaɪ ˈproʊfaɪl/",
        cn: "引人注目的，备受瞩目的，高调的",
        jp: "注目を集める、著名な、話題の",
        family: "profile / low-profile",
        tips: "商业公关与重要任命常考形容词：a high-profile client / project / marketing campaign / corporate merger（备受瞩目的客户/项目/营销活动/并购案）。",
        desc: "He is leading a high-profile case."
    },
    {
        word: "groundbreaking",
        pos: "形/名",
        ipa: "/ˈɡraʊndbreɪkɪŋ/",
        cn: "开创性的，突破性的；动工奠基仪式",
        jp: "画期的な、革新的な；着工式、地鎮祭",
        family: "groundbreak / break ground",
        tips: "两大托业核心考点：1. 修饰科研创新（groundbreaking research / technology）；2. 建筑市政工程动工（attend the groundbreaking ceremony 参加动工奠基仪式）。",
        desc: "They held a groundbreaking ceremony."
    },
    {
        word: "chronicle",
        pos: "動/名",
        ipa: "/ˈkrɑːnɪkl/",
        cn: "载入编年史，详细记录；编年史，大事记",
        jp: "（年代順に）記録する；年代記、記録",
        family: "chronicles / chronicled / chronological",
        tips: "企业历史与纪录片报道常见词：chronicle the firm's growth / history（详尽记载公司成长史）；派生形容词 chronological（按时间先后顺序的）。",
        desc: "The book chronicles the firm's history."
    },
    {
        word: "carpool",
        pos: "動/名",
        ipa: "/ˈkɑːrpuːl/",
        cn: "拼车出行，合乘汽车；拼车队伍",
        jp: "相乗りする；相乗りグループ",
        family: "carpooling / carpooler / carpool lane",
        tips: "绿色通勤与交通减排高频词：carpool to work（拼车上班），designated carpool lane（合乘专用车道），encourage carpooling（鼓励拼车）。",
        desc: "Many workers carpool to save fuel."
    },
    {
        word: "aspiring",
        pos: "形",
        ipa: "/əˈspaɪərɪŋ/",
        cn: "有抱负的，有志向的，渴望成功的",
        jp: "〜を志す、意欲的な",
        family: "aspire / aspiration / aspired",
        tips: "职场招聘与职业发展核心定语形容词：aspiring entrepreneurs / executives / designers（有抱负的创业家/管理者/设计师）；名词 aspiration（志向/抱负）。",
        desc: "The program trains aspiring managers."
    },
    {
        word: "entail",
        pos: "動",
        ipa: "/ɪnˈteɪl/",
        cn: "必然涉及，需要，带来（责任/工作）",
        jp: "（必然的に）伴う、必要とする",
        family: "entails / entailed / entailing",
        tips: "及物动词高频考点，多用于职位职责描述：the position entails frequent travel / extensive research（该职位必然涉及频繁出差/大量调研）。",
        desc: "The position entails frequent travel."
    },
    {
        word: "slate",
        pos: "動/名",
        ipa: "/sleɪt/",
        cn: "预定，安排；候选人名单；石板",
        jp: "予定する；候補者名簿；スレート板",
        family: "slated / slating / slates",
        tips: "熟词生义第一高频词：被动句型 be slated to do sth / be slated for completion（预定/计划于……）；名词指候选人名单（a slate of candidates）。",
        desc: "The report is slated for release tomorrow."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "errand",
        category: "简单",
        stem: "The administrative assistant stepped out of the office to run a quick ________ for the regional director.",
        options: ["errand", "errands", "advocate", "offset"],
        correct: "errand",
        explanations: {
            guide: "固定动宾短语与不定冠词修饰。run an errand 属于职场日常极高频搭配，意为“跑腿/办差事”，受到不定冠词 a 修饰，需填入单数名词 errand。",
            family: "errand (n.差事/跑腿/单数) | errands (n.复数) | advocate (v./n.提倡) | offset (v.抵消)。",
            details: "run a quick errand 意为办一件简短的差事。受不定冠词 a 限制，复数形式 errands 语法不成立；advocate 和 offset 词义完全不符。",
            cn: "行政助理暂时离开了办公室，为区域主管去办一件简短的差事。",
            jp: "総務アシスタントは、地域担当ディレクターのために簡単な用事（errand）を済ませようとオフィスを出ました。"
        }
    },
    {
        id: 2,
        target: "carpool",
        category: "简单",
        stem: "To reduce daily commuting expenses, several staff members decided to ________ to the suburban office campus together.",
        options: ["carpool", "carpooling", "entail", "slate"],
        correct: "carpool",
        explanations: {
            guide: "动词不定式结构。decided to 后面需要接动词原形，表达员工决定一起“拼车/合乘”前往郊区园区，选 carpool。",
            family: "carpool (v.拼车/合乘) | carpooling (动名词) | entail (v.必然涉及) | slate (v.预定)。",
            details: "to 为不定式符号，后面必须接动词原形。carpooling 是动名词，不能紧跟在不定式符号 to 后面充当谓语动词原形。",
            cn: "为了减少日常通勤开支，几位员工决定一起拼车前往郊区办公园区。",
            jp: "日々の通勤費を削減するため、数名のスタッフが一緒に郊外のオフィスコアまで相乗りする（carpool）ことに決めました。"
        }
    },
    {
        id: 3,
        target: "aspiring",
        category: "简单",
        stem: "The business incubator offers intensive coaching and networking sessions for ________ entrepreneurs in the green technology industry.",
        options: ["aspiring", "aspiration", "chronicle", "high-profile"],
        correct: "aspiring",
        explanations: {
            guide: "形容词作定语修饰名词。空格修饰后面的复数名词 entrepreneurs，aspiring entrepreneurs 是职业培训专属词汇，意为“有抱负的创业者”，选 aspiring。",
            family: "aspiring (adj.有抱负的/有志向的) | aspiration (n.抱负/志向) | chronicle (v./n.记录) | high-profile (adj.备受瞩目的)。",
            details: "aspiring entrepreneurs 指志在创业的有志之士。aspiration 是名词，无法在此充当前置定语修饰具体的人群名词。",
            cn: "该创业孵化器为环保科技行业中有志向的创业家提供密集的辅导与人脉拓展交流会。",
            jp: "そのビジネスインキュベーターは、環境技術分野の意欲的な（aspiring）起業家向けに集中的なコーチングと交流会を提供しています。"
        }
    },
    {
        id: 4,
        target: "offset",
        category: "简单",
        stem: "Strong international sales figures helped the manufacturing firm ________ rising domestic raw material costs.",
        options: ["offset", "offsetting", "advocate", "errand"],
        correct: "offset",
        explanations: {
            guide: "动词不定式（省略 to）与及物动词搭配。help sb (to) do sth 结构中需要动词原形，offset costs 意为“抵消成本/弥补支出”，选 offset。",
            family: "offset (v.抵消/弥补) | offsetting (动名词) | advocate (v.主张) | errand (n.差事)。",
            details: "help the firm offset costs 属于商业财报核心搭配。offsetting 是分词形式，不能在 help sb 后作省略 to 的不定式动词原形。",
            cn: "强劲的国际销售数据帮助该制造企业抵消了国内原材料成本的上涨。",
            jp: "好調な国際売上高は、その製造企業が国内の原材料費の高騰を相殺する（offset）のに役立ちました。"
        }
    },
    {
        id: 5,
        target: "high-profile",
        category: "简单",
        stem: "The corporate communications department hired an experienced legal team to manage media inquiries during the ________ trial.",
        options: ["high-profile", "groundbreaking", "entail", "carpool"],
        correct: "high-profile",
        explanations: {
            guide: "形容词作定语修饰名词。the ________ trial 结构中需要形容词修饰庭审案件，a high-profile trial 属于托业公关场景专属短语，意为“备受瞩目的审判”，选 high-profile。",
            family: "high-profile (adj.引人注目的/备受瞩目的) | groundbreaking (adj.开创性的) | entail (v.涉及) | carpool (v.拼车)。",
            details: "a high-profile trial 指社会广泛关注的大案要案。groundbreaking（突破性的）通常修饰科研成果，不符合法律诉讼媒体公关语境。",
            cn: "在备受瞩目的庭审期间，企业公关部门聘请了一支经验丰富的法律团队来处理媒体咨询。",
            jp: "企業広報部は、注目を集める（high-profile）裁判の間、メディアからの問い合わせに対応するために経験豊富な法務チームを雇いました。"
        }
    },
    {
        id: 6,
        target: "entail",
        category: "简单",
        stem: "Qualified applicants must understand that the overseas management role will ________ extensive regional travel.",
        options: ["entail", "entailing", "chronicle", "slate"],
        correct: "entail",
        explanations: {
            guide: "情态动词后的动词原形与职位描述考点。will 后面需要接动词原形，entail travel 意为“必然涉及/需要频繁出差”，选 entail。",
            family: "entail (v.必然涉及/带来) | entailing (现在分词) | chronicle (v.记载) | slate (v.预定)。",
            details: "will entail extensive travel 属于招聘简章中描述岗位职责的核心句型。entailing 是现在分词，不能紧跟情态动词 will 担任核心谓语动词。",
            cn: "合格的应聘者必须明白，该海外管理岗位将必然涉及大量的区域出差。",
            jp: "資格のある応募者は、その海外管理職が広範囲の地域出張を伴う（entail）ものであることを理解しなければなりません。"
        }
    },
    {
        id: 7,
        target: "advocate",
        category: "中等",
        stem: "The corporate sustainability committee continues to ________ for more aggressive energy conservation policies.",
        options: ["advocate", "advocacy", "offset", "aspiring"],
        correct: "advocate",
        explanations: {
            guide: "动介固定短语搭配。continues to 后面接动词原形，与介词 for 搭配构成 advocate for sth，意为“提倡/支持节能政策”，选 advocate。",
            family: "advocate (v.提倡/主张) | advocacy (n.倡导/辩护) | offset (v.抵消) | aspiring (adj.有抱负的)。",
            details: "advocate for policies 指积极支持某项规章政策。advocacy 是名词，不能跟在不定式符号 to 后面充当谓语动词原形。",
            cn: "企业可持续发展委员会继续倡导推行更加积极的节能政策。",
            jp: "企業の持続可能性委員会は、より積極的な省エネ政策を提唱し（advocate for）続けています。"
        }
    },
    {
        id: 8,
        target: "slate",
        category: "中等",
        stem: "The newly renovated passenger terminal at the regional airport is ________ to open ahead of the peak travel season.",
        options: ["slated", "slate", "entailed", "chronicled"],
        correct: "slated",
        explanations: {
            guide: "托业高频被动语态句型。be slated to do sth 是商务与交通规划最高频固定搭配之一，意为“预定/计划于……开业”，选过去分词 slated。",
            family: "slated (v-ed预定的/安排的) | slate (v.预定/n.名单) | entailed (v-ed涉及) | chronicled (v-ed记载)。",
            details: "is slated to open 相当于 is scheduled to open。slate 动词原形不能直接放在系动词 is 后面构成合法的被动表语结构。",
            cn: "该区域机场新近翻修的客运航站楼预定在客流出行高峰季之前投入使用。",
            jp: "地方空港の新しく改修された旅客ターミナルは、旅行のピークシーズン前にオープンする予定（slated）です。"
        }
    },
    {
        id: 9,
        target: "groundbreaking",
        category: "中等",
        stem: "Municipal leaders and commercial developers gathered yesterday to celebrate the official ________ ceremony for the new logistics hub.",
        options: ["groundbreaking", "groundbreak", "high-profile", "carpool"],
        correct: "groundbreaking",
        explanations: {
            guide: "工程建设核心复合名词搭配。celebrate the official ________ ceremony 结构中，groundbreaking ceremony 是托业不动产工程核心专有名词，意为“动工奠基仪式”，选 groundbreaking。",
            family: "groundbreaking (n./adj.奠基/动工的/开创性的) | groundbreak (非标准构词) | high-profile (adj.引人注目的) | carpool (v.拼车)。",
            details: "a groundbreaking ceremony 专指建筑动工破土典礼。groundbreak 不是合法的规范修饰词，其余选项与 ceremony 组合均不符合典礼行业惯例。",
            cn: "市政领导和商业开发商昨日齐聚一堂，共同庆祝新物流枢纽的正式动工奠基仪式。",
            jp: "自治体の指導者や商業開発業者は昨日、新しい物流ハブの公式な地鎮祭・着工式（groundbreaking ceremony）を祝うために集まりました。"
        }
    },
    {
        id: 10,
        target: "chronicle",
        category: "中等",
        stem: "The newly published commemorative volume ________ the retail company’s steady rise over the past four decades.",
        options: ["chronicles", "chronicle", "offsets", "advocates"],
        correct: "chronicles",
        explanations: {
            guide: "主谓一致与一般现在时态。主语是单数名词 volume（纪念册/书卷），缺少核心谓语动词，chronicle 意为“按时间顺序记载/详细记录”，选单三形式 chronicles。",
            family: "chronicles (第三人称单数/记载) | chronicle (动词原形/名词) | offsets (v.抵消) | advocates (v.提倡)。",
            details: "the volume chronicles the rise 意为该纪念册详细记录了公司的崛起史。主语为单数，chronicle 原形会导致主谓不一致错误。",
            cn: "新出版的这本纪念画册详细记载了这家零售企业在过去四十年中的稳步崛起。",
            jp: "新しく出版された記念本は、過去40年間にわたるその小売企業の着実な台頭を年代順に記録して（chronicles）います。"
        }
    },
    {
        id: 11,
        target: "carpool",
        category: "中等",
        stem: "Drivers who utilize designated ________ lanes during peak morning rush hours experience significantly shorter commute times.",
        options: ["carpool", "carpooling", "errand", "entail"],
        correct: "carpool",
        explanations: {
            guide: "复合名词定语修饰。designated ________ lanes 结构中，carpool 与 lanes 组合构成交通专有名词 carpool lanes，意为“合乘/拼车专用车道”，选名词 carpool。",
            family: "carpool (n./adj.拼车/合乘) | carpooling (动名词) | errand (n.差事) | entail (v.涉及)。",
            details: "carpool lane（合乘车道）是交通出行类阅读必考专有名词。carpooling 虽然表拼车行为，但道路命名固定采用名词 carpool 作定语。",
            cn: "在早高峰期间使用指定拼车专用车道的驾驶员，通勤时间明显大幅缩短。",
            jp: "朝のラッシュアワー時に指定された相乗り専用レーン（carpool lanes）を利用するドライバーは、通勤時間を大幅に短縮できます。"
        }
    },
    {
        id: 12,
        target: "offset",
        category: "中等",
        stem: "As part of its environmental plan, the airline allows passengers to purchase certified carbon ________ to neutralize flight emissions.",
        options: ["offsets", "offsetting", "slated", "aspiring"],
        correct: "offsets",
        explanations: {
            guide: "复合名词复数与碳中和场景考点。carbon 与 offsets 组合构成 carbon offsets，意为“碳抵消/碳补偿额度”，选复数名词 offsets。",
            family: "offsets (n.抵消额度/复数) | offsetting (动名词) | slated (adj.预定的) | aspiring (adj.有抱负的)。",
            details: "carbon offsets 专指用于抵消碳排放的经认证环保指标购买项。offsetting 是动名词动作，不能作为由 certified 修饰的具体可数商品名词。",
            cn: "作为其环保计划的一部分，该航空公司允许旅客购买经过认证的碳抵消额度以中和飞行排放。",
            jp: "環境計画の一環として、その航空会社は乗客がフライトの排出量を中和するための公認カーボンオフセット（carbon offsets）を購入できるようにしています。"
        }
    },
    {
        id: 13,
        target: "advocate",
        category: "困难",
        stem: "The senior board member has earned international respect for being a tireless ________ of corporate transparency and ethical labor practices.",
        options: ["advocate", "advocacy", "advocating", "entailment"],
        correct: "advocate",
        explanations: {
            guide: "人物名词考点与同源词辨析。a tireless ________ 结构中，不定冠词 a 与形容词 tireless（不知疲倦的）后面必须接表示“人”的可数名词单数，advocate 意为“倡导者/拥护者”，选 advocate。",
            family: "advocate (n.倡导者/拥护者/人) | advocacy (n.倡导行为/抽象名词) | advocating (现在分词) | entailment (n.必然结果)。",
            details: "a tireless advocate 指不知疲倦的倡导者。advocacy 是抽象行为名词，不能直接被不定冠词 a 修饰来指代有具体职务的人。",
            cn: "这位资深董事会成员因不知疲倦地倡导公司透明度与合规劳工准则而赢得了国际社会的尊重。",
            jp: "そのシニア取締役は、企業の透明性と倫理的な労働慣行の精力的な擁護者・支持者（advocate）として国際的な尊敬を集めています。"
        }
    },
    {
        id: 14,
        target: "groundbreaking",
        category: "困难",
        stem: "The medical laboratory received a prestigious innovation prize for its ________ discoveries in synthetic antibody engineering.",
        options: ["groundbreaking", "groundbreak", "high-profile", "slated"],
        correct: "groundbreaking",
        explanations: {
            guide: "形容词作定语修饰科技成果。its ________ discoveries 结构中，groundbreaking discoveries 属于科技与医药研发专属搭配，意为“开创性的/突破性的重大发现”，选 groundbreaking。",
            family: "groundbreaking (adj.开创性的/突破性的) | groundbreak (非标准构词) | high-profile (adj.引人注目的) | slated (adj.预定的)。",
            details: "groundbreaking discoveries 强调从无到有的根本性科研突破。high-profile 强调外部关注度高，修饰科研发现的本质创新性不如 groundbreaking 精准地道。",
            cn: "该医学实验室因其在合成抗体工程领域的开创性发现而获得了一项著名的创新大奖。",
            jp: "その医学研究所は、合成抗体工学における画期的・革新的（groundbreaking）な発見に対して権威あるイノベーション賞を受賞しました。"
        }
    },
    {
        id: 15,
        target: "aspiring",
        category: "困难",
        stem: "The young entrepreneur's long-standing ________ to expand the logistics company across Europe was realized after securing strategic funding.",
        options: ["aspiration", "aspiring", "advocate", "chronicle"],
        correct: "aspiration",
        explanations: {
            guide: "物主代词与形容词后的名词中心语。The entrepreneur's long-standing ________ 结构中，形容词 long-standing（长期的）后面需要接名词作主语，且后接不定式 to expand，aspiration 意为“志向/抱负/夙愿”，选 aspiration。",
            family: "aspiration (n.志向/抱负/夙愿) | aspiring (adj.有抱负的) | advocate (n.倡导者) | chronicle (n.编年史)。",
            details: "long-standing aspiration to do sth 意为长期以来的夙愿。aspiring 是形容词，不能直接作名词主语中心词被 long-standing 修饰。",
            cn: "在获得战略融资后，这位年轻企业家将物流公司扩张至全欧洲的长期夙愿终于得以实现。",
            jp: "その若い起業家の、物流会社をヨーロッパ全域に拡大するという長年の宿願・抱負（aspiration）は、戦略的資金を確保した後に実現しました。"
        }
    },
    {
        id: 16,
        target: "chronicle",
        category: "困难",
        stem: "The historical society published a meticulously documented chronological ________ of maritime trade routes in the Pacific.",
        options: ["chronicle", "chronicles", "errand", "offset"],
        correct: "chronicle",
        explanations: {
            guide: "不定冠词与形容词后的单数名词。a meticulously documented chronological ________ 结构中，受到不定冠词 a 限制，需要单数名词，a chronicle of... 意为“关于……的编年史/详尽记事录”，选 chronicle。",
            family: "chronicle (n.编年史/大事记/单数) | chronicles (n.复数) | errand (n.差事) | offset (n.抵消)。",
            details: "a chronological chronicle 意为一部按时间编排的大事记。受不定冠词 a 限制，复数形式 chronicles 语法不成立；errand 与 offset 语义严重脱节。",
            cn: "历史学会出版了一部记载详尽的太平洋海上贸易路线编年史大事记。",
            jp: "歴史学会は、太平洋における海上貿易ルートに関する、細心の注意を払って記録された年代記（chronicle）を出版しました。"
        }
    },
    {
        id: 17,
        target: "entail",
        category: "困难",
        stem: "Modernizing the corporate network infrastructure will be an ambitious undertaking, ________ substantial capital investments and staff training.",
        options: ["entailing", "entail", "entailed", "slating"],
        correct: "entailing",
        explanations: {
            guide: "现在分词短语作后置定语/伴随结果。句子主干完整（Modernizing... will be an ambitious undertaking），逗号后需要现在分词引导从属短语修饰主句动作带来的必然要求，entailing 意为“必然涉及/伴随着……”，选 entailing。",
            family: "entailing (现在分词/涉及) | entail (动词原形) | entailed (过去分词) | slating (动名词)。",
            details: "an undertaking entailing investments 意为需要巨额投资的事业，动词与宾语之间为主动态，用现在分词 entailing。entailed 为过去分词表被动，在此处语法错配。",
            cn: "对企业网络基础设施进行现代化改造将是一项宏伟的事业，必然涉及巨额的资金投资与员工培训。",
            jp: "企業のネットワークインフラを近代化することは、多額の設備投資とスタッフトレーニングを必然的に伴う（entailing）、大がかりな事業となるでしょう。"
        }
    },
    {
        id: 18,
        target: "slate",
        category: "困难",
        stem: "During yesterday’s general assembly, the nominating committee presented a comprehensive ________ of candidates for the board of directors.",
        options: ["slate", "slated", "carpool", "high-profile"],
        correct: "slate",
        explanations: {
            guide: "政治选举与董事会任命高阶熟词生义。a comprehensive ________ of candidates 结构中，a slate of candidates 是托业高管更迭与推选场景的核心专有名词，意为“一组候选人名单/候选人名册”，选名词 slate。",
            family: "slate (n.候选人名单/v.预定) | slated (adj.预定的) | carpool (n.拼车) | high-profile (adj.备受瞩目的)。",
            details: "a slate of candidates 专指经过提名委员会审查并整体打包推选的候选人组。slated 为形容词/分词，不能在不定冠词 a 和形容词 comprehensive 后面充当中心名词。",
            cn: "在昨天的全体大会期间，提名委员会提交了一份全面的董事会候选人名单。",
            jp: "昨日の総会において、指名委員会は取締役会のための包括的な候補者名簿（slate of candidates）を提示しました。"
        }
    }
];