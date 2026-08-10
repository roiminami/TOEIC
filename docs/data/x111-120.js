// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data251-260.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "street stalls",
        pos: "名",
        ipa: "/striːt stɔːlz/",
        cn: "街头摊位，露天小摊",
        jp: "露店、屋台",
        family: "street stall / stall / stallholder",
        tips: "Part 1 & Part 7 户外集市与旅游场景高频：street stalls selling souvenirs（出售纪念品的街头摊位）。",
        desc: "Street stalls line the avenue."
    },
    {
        word: "thrive",
        pos: "動",
        ipa: "/θraɪv/",
        cn: "繁荣，茁壮成长",
        jp: "繁栄する、繁盛する",
        family: "thriving / thriven / thriver",
        tips: "商业与经济发展高频：thrive in competitive markets（在竞争激烈的市场中繁荣发展）。",
        desc: "Local businesses continue to thrive."
    },
    {
        word: "high-profile",
        pos: "形",
        ipa: "/ˌhaɪ ˈproʊfaɪl/",
        cn: "备受瞩目的，高调的",
        jp: "注目を集める、高調な",
        family: "profile / low-profile",
        tips: "高管招聘与重大项目高频：high-profile client/event（备受瞩目的客户/活动）。",
        desc: "He managed a high-profile project."
    },
    {
        word: "respectively",
        pos: "副",
        ipa: "/rɪˈspektɪvli/",
        cn: "分别地，依次地",
        jp: "それぞれ、順次",
        family: "respective / respect / respected",
        tips: "图表分析与报告高频句型：A and B scored 80 and 90 points respectively（A 与 B 分别获得 80 和 90 分）。",
        desc: "They ranked first and second respectively."
    },
    {
        word: "hardware store",
        pos: "名",
        ipa: "/ˈhɑːrdwer stɔːr/",
        cn: "五金店",
        jp: "金物店、ホームセンター",
        family: "hardware / store",
        tips: "生活与维修采购高频：buy tools at the hardware store（在五金店购买工具）。",
        desc: "He bought tools at the hardware store."
    },
    {
        word: "evolves",
        pos: "動",
        ipa: "/ɪˈvɑːlvz/",
        cn: "演变，进化，逐步发展",
        jp: "進化する、発展する",
        family: "evolve / evolution / evolutionary / evolving",
        tips: "技术与市场趋势高频：as technology evolves（随着技术逐步演变发展）。",
        desc: "The market constantly evolves."
    },
    {
        word: "strives",
        pos: "動",
        ipa: "/straɪvz/",
        cn: "努力，奋斗，力求",
        jp: "努力する、骨折る",
        family: "strive / strove / striven / striving",
        tips: "企业使命与质量承诺高频：strives for excellence（力求卓越），strives to improve（努力改进）。",
        desc: "Our firm strives for quality."
    },
    {
        word: "preferably",
        pos: "副",
        ipa: "/ˈprefrəbli/",
        cn: "最好是，更合意地",
        jp: "なるべく、できれば",
        family: "prefer / preferable / preference",
        tips: "招聘与条件要求高频：5 years of experience, preferably in retail（5年经验，有零售背景者佳）。",
        desc: "Send resumes online, preferably PDF."
    },
    {
        word: "curb",
        pos: "動/名",
        ipa: "/kɜːrb/",
        cn: "遏制，控制；路缘",
        jp: "抑制する；（歩道の）縁石",
        family: "curbed / curbing",
        tips: "商务管理高频：curb inflation/spending（遏制通胀/开支）；Part 1 高频：by the curb（在路缘旁）。",
        desc: "New rules aim to curb costs."
    },
    {
        word: "discretion",
        pos: "名",
        ipa: "/dɪˈskreʃn/",
        cn: "斟酌，自由裁量权；谨慎",
        jp: "裁量、慎重さ",
        family: "discreet / discretionary / discreetly",
        tips: "管理与服务高频：at the manager's discretion（由经理自行斟酌/裁量），at your discretion（随您决定）。",
        desc: "Use your own discretion."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "hardware store",
        category: "简单",
        stem: "The maintenance worker purchased extra screws and a new hammer at the local ________.",
        options: ["hardware store", "street stalls", "discretion", "curb"],
        correct: "hardware store",
        explanations: {
            guide: "采购场所名词。purchased screws and a hammer（购买螺丝和锤子）结合维修工具，场所选 hardware store（五金店）。",
            family: "hardware store (n.五金店) | street stalls (n.街头摊位) | discretion (n.斟酌) | curb (n.路缘)。",
            details: "hardware store 意为五金店。street stalls（街头摊位）、discretion（斟酌）均不符合购买专业建筑工器具的场所逻辑。",
            cn: "维修工人从当地五金店购买了额外的螺丝和一把新锤子。",
            jp: "メンテナンス作業員は地元の金物店（hardware store）で予備のネジと新しいハンマーを購入しました。"
        }
    },
    {
        id: 2,
        target: "curb",
        category: "简单",
        stem: "To keep project expenses within budget, the department head implemented new policies to ________ unnecessary spending.",
        options: ["curb", "strives", "evolves", "thrive"],
        correct: "curb",
        explanations: {
            guide: "动词不定式与商务搭配。implemented policies to 后面接动词原形，表达“遏制/控制”不必要的开支，选 curb。",
            family: "curb (v.遏制/控制) | strives (v.努力) | evolves (v.演变) | thrive (v.繁荣)。",
            details: "curb spending 属于商务英语高频搭配，意为控制/遏制开支。strives 与 evolves 为单数第三人称动词，不能紧跟在 to 后面。",
            cn: "为将项目开支控制在预算内，部门主管实施了新政策以遏制不必要的支出。",
            jp: "プロジェクト費用を予算内に抑えるため、部門長は不必要な支出を抑制する（curb）新しい方針を導入しました。"
        }
    },
    {
        id: 3,
        target: "preferably",
        category: "简单",
        stem: "Job candidates must have a bachelor's degree in business, ________ with three years of managerial experience.",
        options: ["preferably", "respectively", "discretion", "high-profile"],
        correct: "preferably",
        explanations: {
            guide: "招聘条件副词考点。修饰补充条件“带有三年管理经验者佳/更好”，选副词 preferably（最好是/更好）。",
            family: "preferably (adv.最好是) | respectively (adv.分别地) | discretion (n.斟酌) | high-profile (adj.备受瞩目的)。",
            details: "preferably with... 属于招聘广告高频句型，意为“最好具备……/有……者佳”。respectively 意为“分别地”，语境不符。",
            cn: "应聘者须拥有商科学士学位，最好具备三年管理经验。",
            jp: "応募者はビジネス分野の学士号を所持している必要があり、できれば（preferably）3年の管理職経験があることが望ましいです。"
        }
    },
    {
        id: 4,
        target: "street stalls",
        category: "简单",
        stem: "Tourists enjoyed purchasing handmade souvenirs from the vibrant ________ along the night market.",
        options: ["street stalls", "hardware store", "discretion", "respectively"],
        correct: "street stalls",
        explanations: {
            guide: "户外购物设施复数名词。vibrant ________ 结合夜市购买手工艺纪念品，选 street stalls（街头摊位/露天小摊）。",
            family: "street stalls (n.复数街头摊位) | hardware store (n.五金店) | discretion (n.斟酌) | respectively (adv.分别地)。",
            details: "street stalls 意为街头摊位/小摊。hardware store 指固定店铺且卖五金，非夜市销售手工艺纪念品的露天小摊。",
            cn: "游客们喜欢从夜市沿线充满活力的街头摊位购买手工纪念品。",
            jp: "観光客はナイトマーケット沿いの活気ある露店（street stalls）で手作りの土産物を購入することを楽しみました。"
        }
    },
    {
        id: 5,
        target: "thrive",
        category: "简单",
        stem: "With strong customer support, small retail businesses can ________ even in a competitive market.",
        options: ["thrive", "strives", "evolves", "curb"],
        correct: "thrive",
        explanations: {
            guide: "情态动词后的动词原形。can 后面接动词原形，表达零售小企业能够在竞争激烈的市场中“繁荣发展/生存”，选 thrive。",
            family: "thrive (v.繁荣/茁壮成长) | strives (v.奋斗) | evolves (v.演变) | curb (v.遏制)。",
            details: "can thrive 意为能够繁荣发展。strives 和 evolves 为三单形式，不能跟在情态动词 can 后面。",
            cn: "有了强大的客户支持，小零售企业即使在竞争激烈的市场中也能繁荣发展。",
            jp: "強い顧客の支持があれば、小規模な小売り企業は競争の激しい市場でも繁栄する（thrive）ことができます。"
        }
    },
    {
        id: 6,
        target: "strives",
        category: "简单",
        stem: "Our customer support team constantly ________ to resolve technical inquiries as quickly as possible.",
        options: ["strives", "evolves", "thrive", "curb"],
        correct: "strives",
        explanations: {
            guide: "主谓一致与动词短语。主语为 team（单数三单），后面接动词三单形式，结合 strives to do（努力做某事），选 strives。",
            family: "strives (v.努力/力求) | evolves (v.演变) | thrive (v.繁荣) | curb (v.遏制)。",
            details: "strives to resolve... 意为努力去解决……。evolves 指演变进化，与主动去解决技术问询的意图不符。",
            cn: "我们的客户支持团队不断努力，以便尽可能快地解决技术问询。",
            jp: "当社のカスタマーサポートチームは、技術的な問い合わせ尽可能迅速に解決するよう常に努力して（strives）います。"
        }
    },
    {
        id: 7,
        target: "high-profile",
        category: "中等",
        stem: "The public relations firm was hired to manage a ________ marketing campaign for the celebrity client.",
        options: ["high-profile", "respectively", "preferably", "discretionary"],
        correct: "high-profile",
        explanations: {
            guide: "前置形容词定语。a ________ marketing campaign 表达针对知名客户的“备受瞩目的/高调的”营销活动，选 high-profile。",
            family: "high-profile (adj.备受瞩目的) | respectively (adv.分别地) | preferably (adv.最好是) | discretionary (adj.自由裁量的)。",
            details: "high-profile marketing campaign 指备受瞩目的营销活动。respectively 和 preferably 是副词，不能修饰名词短语。",
            cn: "这家公关公司被雇用为那位名人客户操盘一场备受瞩目的营销活动。",
            jp: "その広報代理店は、著名人クライアントのための注目を集める（high-profile）マーケティングキャンペーンを担当するために雇われました。"
        }
    },
    {
        id: 8,
        target: "respectively",
        category: "中等",
        stem: "Sales revenues for Quarter 1 and Quarter 2 reached ten million and twelve million dollars ________.",
        options: ["respectively", "preferably", "discretion", "high-profile"],
        correct: "respectively",
        explanations: {
            guide: "图表与财务报告句尾副词。表达第一和第二季度的收入“分别”达到一千万和一千二百万美元，选 respectively。",
            family: "respectively (adv.分别地/依次地) | preferably (adv.最好地) | discretion (n.斟酌) | high-profile (adj.备受瞩目的)。",
            details: "respectively 放在句尾，用于对应前面提到的两个或多个主体。preferably（最好是）不符合数据报告的陈述逻辑。",
            cn: "第一季度和第二季度的销售收入分别达到一千万元和一千二百万元。",
            jp: "第1四半期と第2四半期の売上高は、それぞれ（respectively）1000万ドルと1200万ドルに達しました。"
        }
    },
    {
        id: 9,
        target: "evolves",
        category: "中等",
        stem: "As consumer technology rapidly ________, software developers must continually update their skill sets.",
        options: ["evolves", "strives", "thrive", "curbed"],
        correct: "evolves",
        explanations: {
            guide: "从句谓语动词与主谓一致。主语 technology 是不可数名词单数，结合语境表达技术快速“演变/进化”，选三单形式 evolves。",
            family: "evolves (v.演变/进化) | strives (v.努力) | thrive (v.繁荣) | curbed (v-ed遏制)。",
            details: "As technology rapidly evolves... 意为随着技术快速演变。strives 意为努力/奋斗，非形容科技发展的动词。",
            cn: "随着消费电子技术迅速演变，软件开发人员必须不断更新其技能体系。",
            jp: "消費者向け技術が急速に進化する（evolves）につれて、ソフトウェア開発者は常にスキルセットを更新しなければなりません。"
        }
    },
    {
        id: 10,
        target: "discretion",
        category: "中等",
        stem: "Managers are allowed to grant small refunds to dissatisfied customers at their own ________.",
        options: ["discretion", "discreet", "high-profile", "respectively"],
        correct: "discretion",
        explanations: {
            guide: "商务管理固定短语。at their own ________ 属于托业极高频短语，意为“由其自行斟酌/裁量”，选名词 discretion。",
            family: "discretion (n.斟酌/自由裁量权) | discreet (adj.谨慎的) | high-profile (adj.备受瞩目的) | respectively (adv.分别地)。",
            details: "at one's own discretion 意为凭某人自行斟酌决定。discreet 是形容词（谨慎的），不能跟在物主代词与 own 后面作名词中心语。",
            cn: "允许经理们自行斟酌，向不满意的客户提供小额退款。",
            jp: "マネージャーは、自身の裁量（discretion）で不満を持つ顧客に小額の返金を認めることが許可されています。"
        }
    },
    {
        id: 11,
        target: "curb",
        category: "中等",
        stem: "Parking along the yellow ________ is strictly prohibited to ensure emergency vehicles have clear access.",
        options: ["curb", "hardware store", "street stalls", "discretion"],
        correct: "curb",
        explanations: {
            guide: "道路设施名词考点。yellow ________ 指马路边涂黄线的“路缘”，选名词 curb。",
            family: "curb (n.路缘/街边) | hardware store (n.五金店) | street stalls (n.街头摊位) | discretion (n.斟酌)。",
            details: "yellow curb 指黄线路缘。hardware store（五金店）、street stalls（街头摊位）均无法用 yellow 修饰作为禁停的马路沿边设施。",
            cn: "严禁沿着黄色路缘停车，以确保紧急车辆拥有无阻碍的通行道。",
            jp: "緊急車両の通行を確保するため、黄色の縁石（curb）沿いの特車は固く禁止されています。"
        }
    },
    {
        id: 12,
        target: "thrive",
        category: "中等",
        stem: "The financial report showed that the startup began to ________ after securing series A funding.",
        options: ["thrive", "thriving", "strives", "evolves"],
        correct: "thrive",
        explanations: {
            guide: "动词不定式考点。began to 后面接动词原形，表达初创企业在获得 A 轮融资后开始“繁荣/快速发展”，选 thrive。",
            family: "thrive (v.繁荣/茁壮成长) | thriving (v-ing/adj.) | strives (v.努力) | evolves (v.演变)。",
            details: "began to thrive 意为开始繁荣发展。thriving 是分词，不能跟在不定式符号 to 后面作原形动词。",
            cn: "财务报告显示，该初创企业在获得 A 轮融资后开始蓬勃发展。",
            jp: "財務レポートによると、そのスタートアップはシリーズA資金を確保した後、急成長し（thrive）始めたことが示されました。"
        }
    },
    {
        id: 13,
        target: "discretion",
        category: "困难",
        stem: "The human resources committee granted departmental heads full ________ authority over local hiring decisions.",
        options: ["discretionary", "discretion", "discreet", "respectively"],
        correct: "discretionary",
        explanations: {
            guide: "派生形容词修饰名词。________ authority 属于商务管理高频表达，意为“自由裁量权/自主决定权”，选形容词 discretionary。",
            family: "discretionary (adj.自由裁量的/可自行决定的) | discretion (n.自由裁量权) | discreet (adj.谨慎的) | respectively (adv.分别地)。",
            details: "discretionary authority 意为自由裁量权。discretion 是名词，修饰 authority 时不如派生形容词 discretionary 规范。",
            cn: "人力资源委员会赋予部门负责人对当地招聘决策的全权自由裁量权。",
            jp: "人事委員会は部門長に対し、地元の採用決定に関する完全な裁量（discretionary）权を付与しました。"
        }
    },
    {
        id: 14,
        target: "strives",
        category: "困难",
        stem: "The corporate mission statement emphasizes a continuous ________ toward technological innovation and environmental sustainability.",
        options: ["striving", "strives", "thrived", "evolved"],
        correct: "striving",
        explanations: {
            guide: "动名词/派生名词作宾语。a continuous ________ 结构中，在冠词与形容词后面填写名词/动名词形式 striving（奋斗/不懈努力）。",
            family: "striving (n./v-ing不懈努力/奋斗) | strives (v.三单) | thrived (v-ed繁荣) | evolved (v-ed演变)。",
            details: "a continuous striving 意为持续不懈的奋斗努力。strives 是动词三单形式，不能跟在冠词 a 和形容词 continuous 后面。",
            cn: "公司的使命宣言强调了在技术创新和环境可持续性方面的不懈奋斗。",
            jp: "企業のミッションステートメントは、技術革新と環境の持続可能性に向けた継続的な努力（striving）を強調しています。"
        }
    },
    {
        id: 15,
        target: "evolves",
        category: "困难",
        stem: "The gradual ________ of the firm's brand identity reflects its shifting focus toward renewable energy solutions.",
        options: ["evolution", "evolves", "evolving", "thriving"],
        correct: "evolution",
        explanations: {
            guide: "派生抽象名词主语考点。The gradual ________ of... 结构中，在定冠词与形容词后面接抽象名词 evolution（演变/演进）。",
            family: "evolution (n.演变/演进) | evolves (v.演变) | evolving (v-ing/adj.) | thriving (adj.繁荣的)。",
            details: "gradual evolution 意为渐进的演变/演进。evolves 是动词，不能在定冠词和形容词后作主语中心语。",
            cn: "公司品牌形象的渐进演变反映了其向可再生能源解决方案转移的重点。",
            jp: "同社のブランドアイデンティティの段階的な進化（evolution）は、再生可能エネルギーソリューションへの重点の移行を反映しています。"
        }
    },
    {
        id: 16,
        target: "high-profile",
        category: "困难",
        stem: "Due to the sensitive nature of the litigation, the board advised executives to maintain a low ________ until the trial concludes.",
        options: ["profile", "high-profile", "respectively", "discretion"],
        correct: "profile",
        explanations: {
            guide: "高阶商务同源短语。maintain a low ________ 是固定短语，意为“保持低调”，选名词 profile（与 high-profile 形成对照）。",
            family: "profile (n.形象/姿态) | high-profile (adj.高调备受瞩目的) | respectively (adv.分别地) | discretion (n.斟酌)。",
            details: "maintain a low profile 属于商务与公关核心短语，意为保持低调/不张扬。high-profile 是形容词（高调的），且语义与低调相反。",
            cn: "由于诉讼的敏感性质，董事会建议高管们在审判结束前保持低调姿态。",
            jp: "訴訟の繊細な性質のため、取締役会は幹部に対し、裁判が終了するまで低姿勢（profile）を維持するようアドバイスしました。"
        }
    },
    {
        id: 17,
        target: "respectively",
        category: "困难",
        stem: "Mr. Tanaka and Ms. Davis were appointed as chief executive and financial officer of the newly merged firm, ________.",
        options: ["respectively", "respectful", "respectably", "preferably"],
        correct: "respectively",
        explanations: {
            guide: "形近副词/词族辨析。表达田中先生与戴维斯女士“分别”被任命为首席执行官与首席财务官，选 respectively（分别地）。",
            family: "respectively (adv.分别地) | respectful (adj.尊敬的) | respectably (adv.可观地/体面地) | preferably (adv.最好地)。",
            details: "respectively 用于将多个主语依次对应其职位（Tanaka -> CEO, Davis -> CFO）。respectful（恭敬的）、respectably（体面地）均非表达“依次对应”的副词。",
            cn: "田中先生和戴维斯女士分别被任命为这家新合并公司的首席执行官和首席财务官。",
            jp: "田中氏とデイビス氏は、新しく合併した会社の最高経営責任者（CEO）と最高財務責任者（CFO）にそれぞれ（respectively）就任しました。"
        }
    },
    {
        id: 18,
        target: "curb",
        category: "困难",
        stem: "Government regulatory bodies introduced strict monetary measures aimed at the ________ of illegal offshore transactions.",
        options: ["curbing", "curb", "curbed", "striving"],
        correct: "curbing",
        explanations: {
            guide: "介词后的动名词考点。aimed at the ________ of... 结构中，在定冠词 the 与介词 of 之间填入动名词形式 curbing（遏制/打击）。",
            family: "curbing (n./v-ing遏制/控制) | curb (v./n.遏制/路缘) | curbed (v-ed) | striving (n.奋斗)。",
            details: "the curbing of illegal transactions 意为对非法交易的遏制。curb 为原形动词，在此处需要动名词形式 curbing 与 of 搭配构成短语。",
            cn: "政府监管机构引入了严格的货币措施，旨在遏制非法离岸交易。",
            jp: "政府の規制当局は、違法なオフショア取引の抑制（curbing）を目的とした厳格な金融措置を導入しました。"
        }
    }
];