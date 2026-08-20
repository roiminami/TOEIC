// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data691-700.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "variances",
        pos: "名",
        ipa: "/ˈveriənsɪz/",
        cn: "差异，变动，差异量（复数）",
        jp: "差異、不一致、変動（複数）",
        family: "variance / vary / variable / variation",
        tips: "财务与统计分析高频：budget/sales variances（预算/销售差异），analyze cost variances（分析成本差异）。",
        desc: "Analyze the quarterly budget variances."
    },
    {
        word: "ultimate",
        pos: "形",
        ipa: "/ˈʌltɪmət/",
        cn: "最终的，根本的，终极的",
        jp: "最終的な、究極の、根本的な",
        family: "ultimately / ultimatum",
        tips: "商业决策与目标高频：ultimate goal/objective（终极目标），ultimate decision/responsibility（最终决定/根本责任）。",
        desc: "Our ultimate goal is client satisfaction."
    },
    {
        word: "refurbished",
        pos: "形/動",
        ipa: "/ˌriːˈfɜːrbɪʃt/",
        cn: "翻新的，整修的（refurbish的过去式/分词）",
        jp: "改装された、整備済みの、改修された",
        family: "refurbish / refurbishment / refurbishing",
        tips: "消费电子与办公设备高频：refurbished laptop/phone（翻新笔记本电脑/手机），refurbished office space（翻新的办公空间）。",
        desc: "Buy certified refurbished electronics."
    },
    {
        word: "cosmetic",
        pos: "形/名",
        ipa: "/kɑːzˈmetɪk/",
        cn: "表面的，外观的；化妆品",
        jp: "表面的な、外見上の；化粧品",
        family: "cosmetics / cosmetically / cosmetologist",
        tips: "质检与零售高频：minor cosmetic damage/flaw（轻微外观损伤/瑕疵），cosmetics industry（化妆品行业）。",
        desc: "The car had minor cosmetic damage."
    },
    {
        word: "casing",
        pos: "名",
        ipa: "/ˈkeɪsɪŋ/",
        cn: "外壳，机壳，外套",
        jp: "外枠、ケース、覆い、外装",
        family: "case / encase / casings",
        tips: "硬件制造与设备维护高频：metal/plastic casing（金属/塑料外壳），protective casing（保护外壳）。",
        desc: "The phone features durable aluminum casing."
    },
    {
        word: "offset",
        pos: "動/名",
        ipa: "/ˈɔːfset/",
        cn: "抵消，弥补，补偿；抵消物",
        jp: "相殺する、埋め合わせる；相殺するもの",
        family: "offsets / offsetting / offset",
        tips: "财报与碳排放高频：offset rising costs/expenses（抵消不断上涨的成本/开支），carbon offset（碳抵消）。",
        desc: "Gains will offset earlier losses."
    },
    {
        word: "implementation",
        pos: "名",
        ipa: "/ˌɪmplɪmenˈteɪʃn/",
        cn: "实施，贯彻，执行",
        jp: "実施、履行、導入、適用",
        family: "implement / implemented / implementing",
        tips: "项目管理与IT高频：implementation plan/timeline（实施方案/执行时间表），system implementation（系统上线实施）。",
        desc: "The software implementation was successful."
    },
    {
        word: "timelines",
        pos: "名",
        ipa: "/ˈtaɪmlaɪnz/",
        cn: "时间表，进度计划，时间线（复数）",
        jp: "予定表、タイムライン、工程表（複数）",
        family: "timeline / time",
        tips: "项目规划高频：project timelines（项目进度表），strict/flexible timelines（严格/灵活的时间安排）。",
        desc: "Adhere to the project timelines."
    },
    {
        word: "demanding",
        pos: "形",
        ipa: "/dɪˈmændɪŋ/",
        cn: "要求高的，费力的，苛求的",
        jp: "要求の厳しい、骨の折れる、大変な",
        family: "demand / demanded / demandingness",
        tips: "职场与客户服务高频：demanding job/schedule/client（要求高的工作/紧凑的日程/挑剔苛刻的客户）。",
        desc: "Software engineering is a demanding job."
    },
    {
        word: "unscrewing",
        pos: "動/名",
        ipa: "/ʌnˈskruːɪŋ/",
        cn: "拧松，旋开，卸下（螺丝）",
        jp: "（ねじなどを）緩めること、回して外すこと",
        family: "unscrew / unscrewed / screw",
        tips: "维修组装与操作高频：unscrew the bolts/cover（旋开螺栓/后盖），by unscrewing the panel（通过卸下面板）。",
        desc: "Begin by unscrewing the rear panel."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "refurbished",
        category: "简单",
        stem: "The electronics retailer offers a one-year warranty on all ________ laptops and tablets sold in the clearance section.",
        options: ["refurbished", "demanding", "unscrewed", "cosmetic"],
        correct: "refurbished",
        explanations: {
            guide: "二手设备修饰形容词。sold in the clearance section 结合电子产品提供质保，选 refurbished（翻新的/整修的）。",
            family: "refurbished (adj.翻新的) | demanding (adj.要求高的) | unscrewed (v-ed拧下的) | cosmetic (adj.外观的)。",
            details: "refurbished laptops 意为翻新笔记本电脑。demanding（费力的）、cosmetic（表面的）均非零售电子产品的品类状态。",
            cn: "该电子产品零售商为清仓区售出的所有翻新笔记本电脑和平板电脑提供一年保修。",
            jp: "その家電小売店は、クリアランスコーナーで販売されるすべての再生/整備済み（refurbished）ノートパソコンおよびタブレットに1年間の保証を提供しています。"
        }
    },
    {
        id: 2,
        target: "ultimate",
        category: "简单",
        stem: "The ________ goal of the new marketing campaign is to increase brand awareness across European markets.",
        options: ["ultimate", "cosmetic", "refurbished", "demanding"],
        correct: "ultimate",
        explanations: {
            guide: "目标修饰前置形容词。The ________ goal 结合新营销活动旨在提高欧洲市场品牌知名度，选 ultimate（最终的/终极的）。",
            family: "ultimate (adj.最终的/根本的) | cosmetic (adj.表面的) | refurbished (adj.翻新的) | demanding (adj.苛刻的)。",
            details: "ultimate goal 属于托业经典商业搭配，意为最终目标。cosmetic（外观的）、refurbished（翻新的）修饰 goal 语义不通。",
            cn: "新营销活动的最终目标是在整个欧洲市场提升品牌知名度。",
            jp: "新しいマーケティングキャンペーンの最終的な（ultimate）目標は、欧州市場全体でブランド認知度を高めることです。"
        }
    },
    {
        id: 3,
        target: "casing",
        category: "简单",
        stem: "The rugged smartphone is protected by a shock-resistant aluminum ________ to withstand accidental drops.",
        options: ["casing", "timeline", "variance", "implementation"],
        correct: "casing",
        explanations: {
            guide: "设备外壳名词考点。shock-resistant aluminum ________ 结合保护手机经受住意外跌落冲击，选 casing（外壳/机壳）。",
            family: "casing (n.外壳/机壳) | timeline (n.时间表) | variance (n.差异) | implementation (n.实施)。",
            details: "aluminum casing 意为铝制外壳。timeline（时间线）、implementation（实施）均非手机机身的保护性外壳物理结构。",
            cn: "这款三防智能手机由抗震铝制外壳保护，以承受意外跌落带来的冲击。",
            jp: "その頑丈なスマートフォンは、偶発的な落下に耐えられるよう耐衝撃性アルミニウムケース/外装（casing）で保護されています。"
        }
    },
    {
        id: 4,
        target: "cosmetic",
        category: "简单",
        stem: "The vehicle sustained only minor ________ damage to its front bumper during the low-speed parking collision.",
        options: ["cosmetic", "demanding", "ultimate", "refurbished"],
        correct: "cosmetic",
        explanations: {
            guide: "损伤性质修饰形容词。minor ________ damage to its bumper 结合低速泊车剐蹭仅造成前保险杠轻微外观损伤，选 cosmetic（外观的/表面的）。",
            family: "cosmetic (adj.外观的/表面的) | demanding (adj.费力的) | ultimate (adj.最终的) | refurbished (adj.翻新的)。",
            details: "cosmetic damage 属于保险理赔与质检核心短语，意为外观划痕/表面损伤（不影响内部功能）。demanding 与 ultimate 均不搭配 damage。",
            cn: "在低速泊车碰撞中，该车辆的前保险杠仅受到了轻微的外观损伤。",
            jp: "低速での駐車中の接触事故で、その車両のフロントバンパーは軽微な外観上の（cosmetic）損傷を受けただけでした。"
        }
    },
    {
        id: 5,
        target: "timelines",
        category: "简单",
        stem: "Project managers are responsible for setting realistic ________ for each phase of product development.",
        options: ["timelines", "casings", "variances", "offsets"],
        correct: "timelines",
        explanations: {
            guide: "项目管理进度名词复数。setting realistic ________ for each phase 结合为产品开发的每个阶段设定合理进度，选 timelines（时间表/进度计划）。",
            family: "timelines (n.复数时间表/进度) | casings (n.外壳) | variances (n.差异) | offsets (n.补偿)。",
            details: "realistic timelines 意为切合实际的时间表。casings（机壳）、variances（方差/差异）均非项目阶段推进的时间规划。",
            cn: "项目经理负责为产品开发的每个阶段设定切合实际的时间表。",
            jp: "プロジェクトマネージャーは、製品開発の各段階に対して現実的な予定表/タイムライン（timelines）を設定する責任があります。"
        }
    },
    {
        id: 6,
        target: "offset",
        category: "简单",
        stem: "Strong overseas sales helped ________ the revenue losses caused by domestic supply chain disruptions.",
        options: ["offset", "unscrew", "implement", "demand"],
        correct: "offset",
        explanations: {
            guide: "财务动词不定式考点。helped (to) 后面接动词原形，结合海外强劲销量弥补/冲销国内供应链造成的收入损失，选 offset（抵消/弥补）。",
            family: "offset (v.抵消/弥补) | unscrew (v.旋开) | implement (v.实施) | demand (v.要求)。",
            details: "offset losses 属于财报绝高频动宾搭配，意为抵消亏损。unscrew（拧松）、implement（实施）与弥补损失的语境不符。",
            cn: "强劲的海外销售业绩有助于弥补国内供应链中断造成的收入损失。",
            jp: "好調な海外売上高は、国内サプライチェーンの混乱による収益の損失を相殺する（offset）のに役立ちました。"
        }
    },
    {
        id: 7,
        target: "implementation",
        category: "中等",
        stem: "The successful ________ of the automated inventory software reduced order fulfillment errors by 30 percent.",
        options: ["implementation", "timeline", "casing", "variance"],
        correct: "implementation",
        explanations: {
            guide: "IT系统上线名词考点。The successful ________ of the software 结合自动化库存软件上线使履约差错减少了30%，选 implementation（实施/贯彻/上线）。",
            family: "implementation (n.实施/贯彻) | timeline (n.时间表) | casing (n.外壳) | variance (n.差异)。",
            details: "implementation of software 意为软件系统的实施上线。timeline（时间表）、casing（外壳）均无法作带来差错率下降的行为主体。",
            cn: "自动库存管理软件的成功实施使订单履行差错减少了百分之三十。",
            jp: "自動在庫管理ソフトウェアの導入/実施（implementation）の成功により、注文処理エラーが30％減少しました。"
        }
    },
    {
        id: 8,
        target: "demanding",
        category: "中等",
        stem: "Managing the international merger proved to be a highly ________ task that required weeks of overtime work.",
        options: ["demanding", "cosmetic", "refurbished", "ultimate"],
        correct: "demanding",
        explanations: {
            guide: "工作任务修饰形容词。a highly ________ task 结合需要连续数周加班加点完成跨国并购管理，选 demanding（要求高的/费力艰巨的）。",
            family: "demanding (adj.苛求的/费力繁重的) | cosmetic (adj.表面的) | refurbished (adj.翻新的) | ultimate (adj.最终的)。",
            details: "a demanding task 意为艰巨繁重的任务。cosmetic（表面的）、refurbished（翻新的）均无法修饰耗费大量心力的管理工作。",
            cn: "事实证明，主导这一跨国并购是一项极其繁重艰巨的任务，需要连续数周加班工作。",
            jp: "国際的な企業合併の管理は、何週間もの残業を必要とする非常に骨の折れる/過酷な（demanding）業務であることが判明しました。"
        }
    },
    {
        id: 9,
        target: "variances",
        category: "中等",
        stem: "Financial auditors examined the quarterly accounting ledger to identify any significant budget ________.",
        options: ["variances", "casings", "timelines", "implementations"],
        correct: "variances",
        explanations: {
            guide: "财务审计复数名词。budget ________ 属于财务分析核心术语，结合审计师核查账簿筛查预算与实际支出的“差异/偏差”，选 variances。",
            family: "variances (n.复数差异/偏差) | casings (n.机壳) | timelines (n.进度表) | implementations (n.实施)。",
            details: "budget variances 专指预算差异（预实偏差）。casings（外壳）、timelines（时间线）均非审计账目中核查的偏差项目。",
            cn: "财务审计师审查了季度会计分类账，以查明是否存在任何重大的预算差异。",
            jp: "財務監査人は、重大な予算差異（variances）を特定するために四半期の会計元帳を調査しました。"
        }
    },
    {
        id: 10,
        target: "unscrewing",
        category: "中等",
        stem: "Technicians can access the internal circuit board by ________ the protective metal cover on the back of the device.",
        options: ["unscrewing", "implementing", "offsetting", "demanding"],
        correct: "unscrewing",
        explanations: {
            guide: "介词后动名词考点。by ________ the protective metal cover 结合卸下金属后盖以触及内部电路板，选 unscrewing（拧开/旋下）。",
            family: "unscrewing (v-ing拧开/旋松) | implementing (v-ing实施) | offsetting (v-ing抵消) | demanding (adj./v-ing要求)。",
            details: "by unscrewing the cover 意为通过旋开螺丝卸下盖板。implementing（实施）、offsetting（弥补）均非拆卸硬件面板的动作。",
            cn: "技术人员可以通过拧开设备背面的金属保护盖来接触内部电路板。",
            jp: "技術者は、機器の背面にある保護用金属カバーのねじを外す（unscrewing）ことによって、内部の回路基板にアクセスできます。"
        }
    },
    {
        id: 11,
        target: "refurbished",
        category: "中等",
        stem: "To reduce facility expenditures, the corporate office decided to ________ its existing conference room furniture rather than buying new sets.",
        options: ["refurbish", "refurbished", "refurbishment", "casing"],
        correct: "refurbish",
        explanations: {
            guide: "动词不定式原形考点。decided to 后面接动词原形，结合对现有会议室家具进行“整修翻新”而不买新品，选 refurbish。",
            family: "refurbish (v.翻新/整修) | refurbished (adj./v-ed) | refurbishment (n.翻新) | casing (n.外壳)。",
            details: "to refurbish furniture 意为翻新家具。refurbished 是过去式/分词，refurbishment 是名词，均不能直接跟在不定式符号 to 后面作谓语动词。",
            cn: "为了减少后勤设施支出，公司办公室决定整修翻新现有的会议室家具，而不是购买新家具。",
            jp: "施設の支出を削減するため、本社オフィスは新しいセットを購入するのではなく、既存の会議室の家具を改装/整備する（refurbish）ことを決定しました。"
        }
    },
    {
        id: 12,
        target: "offset",
        category: "中等",
        stem: "The airline introduced a voluntary carbon ________ program allowing passengers to invest in reforestation initiatives.",
        options: ["offset", "variance", "implementation", "timeline"],
        correct: "offset",
        explanations: {
            guide: "环保减排复合名词。carbon ________ program 属于航空与环保领域专属术语，表达“碳抵消”计划，选 offset。",
            family: "offset (n./v.抵消/补偿) | variance (n.差异) | implementation (n.实施) | timeline (n.进度表)。",
            details: "carbon offset 专指碳抵消（通过支持植树等环保项目抵消碳排放）。variance（差异）、timeline（时间线）均不能与 carbon 构成该固定环保术语。",
            cn: "该航空公司推出了一项自愿碳抵消计划，允许乘客出资支持植树造林倡议。",
            jp: "その航空会社は、乗客が植林活動に投資できるようにする自主的なカーボンオフセット（offset）プログラムを導入しました。"
        }
    },
    {
        id: 13,
        target: "ultimate",
        category: "困难",
        stem: "While initial testing showed promise, the board recognized that the new prototype would ________ determine the firm's market share.",
        options: ["ultimately", "ultimate", "cosmetic", "demanding"],
        correct: "ultimately",
        explanations: {
            guide: "副词修饰谓语动词。would ________ determine... 结构中，在情态动词 would 和及物动词 determine 之间填入副词，表达“最终/根本上决定”，选 ultimately。",
            family: "ultimately (adv.最终地/根本上) | ultimate (adj.最终的) | cosmetic (adj.表面的) | demanding (adj.苛刻的)。",
            details: "would ultimately determine 意为将最终决定。ultimate 是形容词，不能在助动词与实义动词之间充当副词状语。",
            cn: "尽管初步测试展现出良好前景，董事会意识到新原型机最终将决定公司的市场份额。",
            jp: "初期テストは有望であったものの、取締役会は新しい試作品が最終的に（ultimately）会社の市場シェアを左右することを認識していました。"
        }
    },
    {
        id: 14,
        target: "implementation",
        category: "困难",
        stem: "The engineering director announced that the company will soon ________ a new series of workplace safety protocols.",
        options: ["implement", "implementation", "implementing", "implementer"],
        correct: "implement",
        explanations: {
            guide: "谓语动词原形考点。will soon 后面接及物动词原形，后接 safety protocols 作宾语，表达将很快“执行/实施”安全规程，选 implement。",
            family: "implement (v.实施/贯彻) | implementation (n.实施) | implementing (v-ing) | implementer (n.实施者)。",
            details: "will soon implement protocols 意为将很快贯彻实施规程。implementation 是名词，不能在情态动词 will 后面充当谓语动词。",
            cn: "工程总监宣布，公司将很快实施一系列新的工作场所安全规程。",
            jp: "エンジニアリングディレクターは、会社が一連の新しい職場安全プロトコルを間もなく導入/実施する（implement）と発表しました。"
        }
    },
    {
        id: 15,
        target: "cosmetic",
        category: "困难",
        stem: "Quality assurance inspectors noted that although the returned monitors were ________ flawed, their internal components functioned perfectly.",
        options: ["cosmetically", "cosmetic", "refurbished", "demanding"],
        correct: "cosmetically",
        explanations: {
            guide: "副词修饰形容词/分词。were ________ flawed 结构中，需要副词修饰形容词 flawed（有瑕疵的），表达“在外观上/表面上”有瑕疵，选 cosmetically。",
            family: "cosmetically (adv.外观上地/表面上地) | cosmetic (adj.外观的) | refurbished (adj.翻新的) | demanding (adj.苛刻的)。",
            details: "cosmetically flawed 属于质检与评级高频搭配，意为外观存在瑕疵。cosmetic 是形容词，不能直接修饰另一个形容词 flawed。",
            cn: "质量保证检查员指出，退回的显示器尽管在外观上存在瑕疵，但其内部组件运行完全正常。",
            jp: "品質保証検査官は、返品されたモニターは外見上に（cosmetically）欠陥があるものの、内部部品は完全に機能していると指摘しました。"
        }
    },
    {
        id: 16,
        target: "variances",
        category: "困难",
        stem: "The regional sales figures ________ widely from month to month depending on seasonal agricultural demand.",
        options: ["vary", "variances", "variables", "variation"],
        correct: "vary",
        explanations: {
            guide: "句子谓语动词考点。主语为 The regional sales figures（复数），副词 widely 修饰谓语，表达月度销售数据“大幅波动/各不相同”，选动词复数形式 vary。",
            family: "vary (v.变化/有差异) | variances (n.差异) | variables (n.变量) | variation (n.变异/变动)。",
            details: "sales figures vary widely 属于经济统计高频句型，意为销售数据差异很大。variances、variables 与 variation 均为名词，不能在主语后作谓语动词。",
            cn: "根据季节性农业需求，各区域的销售数据在各月份之间存在很大差异波动。",
            jp: "地域の売上高の数字は、季節的な農業需要に応じて月ごとに大きく変動します/異なります（vary）。"
        }
    },
    {
        id: 17,
        target: "demanding",
        category: "困难",
        stem: "Meeting tight client deadlines places heavy ________ on our software development staff throughout the project cycle.",
        options: ["demands", "demanding", "demanded", "demandingly"],
        correct: "demands",
        explanations: {
            guide: "高阶动宾固定搭配名词复数。places heavy ________ on sb 属于商务英语经典词组 place demands on sb，表达对某人带来沉重的“要求/负担压力”，选复数名词 demands。",
            family: "demands (n.复数要求/重负) | demanding (adj.苛刻的) | demanded (v-ed) | demandingly (adv.苛求地)。",
            details: "place heavy demands on staff 意为对员工提出严苛要求/造成沉重负担。demanding 是形容词，不能直接跟在形容词 heavy 后面充当及物动词 places 的宾语中心语。",
            cn: "满足客户紧迫的交付期限在整个项目周期内给我们的软件开发人员带来了沉重的负担要求。",
            jp: "クライアントの厳しい納期を守ることは、プロジェクトの全期間を通じて当社のソフトウェア開発スタッフに重い負担/要求（demands）を課します。"
        }
    },
    {
        id: 18,
        target: "timelines",
        category: "困难",
        stem: "Department supervisors were praised for completing the facility renovation in a ________ and cost-effective manner.",
        options: ["timely", "timeline", "timelines", "timing"],
        correct: "timely",
        explanations: {
            guide: "派生形容词作前置定语。in a ________ and cost-effective manner 结构中，与形容词 cost-effective（具有成本效益的）并列修饰 manner，表达以“及时的”方式，选形容词 timely。",
            family: "timely (adj.及时的/适时的) | timeline (n.时间表) | timelines (n.复数) | timing (n.时机)。",
            details: "in a timely manner 属于托业最高频固定短语之一，意为及时地。timeline 与 timelines 是名词，不能充当与 cost-effective 并列的形容词定语。",
            cn: "部门主管因以及时且经济高效的方式完成设施翻修而受到表彰。",
            jp: "部門のスーパーバイザーは、タイムリーで（timely）費用対効果の高い方法で施設の改修を完了したことで称賛されました。"
        }
    }
];