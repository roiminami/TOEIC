// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data221-230.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "centerpiece",
        pos: "名",
        ipa: "/ˈsentərpiːs/",
        cn: "最重要（引人注目）的部分；中心装饰品",
        jp: "最重要項目、中心的存在；テーブル中央の装飾物",
        family: "center / piece",
        tips: "商务战略与新闻报道高频词：the centerpiece of the strategy/reform（战略/改革的核心与重中之重）；亦指宴会中央装饰花艺。",
        desc: "The strategy is the centerpiece of our plan."
    },
    {
        word: "endorsement",
        pos: "名",
        ipa: "/ɪnˈdɔːrsmənt/",
        cn: "代言，背书；认可，赞同",
        jp: "（著名人の）推薦、支持、エンドースメント；承認",
        family: "endorse / endorser / endorsed / endorsing",
        tips: "市场营销与商业公关核心词：celebrity endorsement deal（名人代言协议），formal endorsement of the proposal（对提案的正式支持）。",
        desc: "The athlete signed an endorsement deal."
    },
    {
        word: "credentials",
        pos: "名",
        ipa: "/krəˈdenʃlz/",
        cn: "资质，证书，履历资格（常用复数）",
        jp: "資格、資格証明書、経歴",
        family: "credential / credentialing / credentialed",
        tips: "人事招聘核心词汇，几乎固定以复数形式出现：verify applicant credentials（核实求职者资质证书），academic/professional credentials。",
        desc: "Please submit your professional credentials."
    },
    {
        word: "debris",
        pos: "名",
        ipa: "/dəˈbriː/",
        cn: "残骸，碎片，瓦砾（不可数，s不发音）",
        jp: "（破壊物の）破片、がれき、残骸",
        family: "clear debris",
        tips: "物业管理与恶劣天气灾后恢复高频不可数名词：clear storm debris from the road（清理路面的暴风雨残骸）；注意末尾 s 不发音。",
        desc: "Crews worked hard to clear the debris."
    },
    {
        word: "overdue",
        pos: "形",
        ipa: "/ˌoʊvərˈduː/",
        cn: "逾期的，过期的；迟到的",
        jp: "支払期日を過ぎた、延滞の；期限の遅れた",
        family: "due",
        tips: "财务发票与图书借阅必考词：overdue payment / invoice（逾期未付款项/账单）；短语 a long overdue change（早就该推行的改革）。",
        desc: "The invoice is two weeks overdue."
    },
    {
        word: "reunion",
        pos: "名",
        ipa: "/ˌriːˈjuːniən/",
        cn: "聚会，重聚；校友会，联谊会",
        jp: "同窓会、再会、親睦会",
        family: "reunite / reunited",
        tips: "酒店宴会预订高频场景词：alumni reunion（校友联谊会），family reunion（家庭聚会），host a class reunion（主办班级聚会）。",
        desc: "They will host an alumni reunion."
    },
    {
        word: "feasible",
        pos: "形",
        ipa: "/ˈfiːzəbl/",
        cn: "可行的，行得通的",
        jp: "実現可能な、実行できる",
        family: "feasibility / feasibly / unfeasible",
        tips: "项目策划与商务投资核心词：a financially/economically feasible plan（经济上可行的方案）；名词搭配 feasibility study（可行性研究）。",
        desc: "The proposed budget seems feasible."
    },
    {
        word: "kiosk",
        pos: "名",
        ipa: "/ˈkiːɑːsk/",
        cn: "自助服务终端机；售货亭，报摊",
        jp: "自動端末機、キオスク、売店",
        family: "kiosks",
        tips: "机场出行与零售商场高频考点：self-service check-in kiosk（自助值机终端机），interactive information kiosk（互动信息查询亭）。",
        desc: "Print your ticket at the self-service kiosk."
    },
    {
        word: "tow",
        pos: "動/名",
        ipa: "/toʊ/",
        cn: "拖走，牵引；拖车",
        jp: "（車などを）牽引する、レッカー移動する；牽引",
        family: "towed / towing / tow truck",
        tips: "停车管理与物业告示必考词：vehicles parked illegally will be towed at the owner's expense（违章停放车辆将被拖走，费用由车主承担）；tow truck（拖车）。",
        desc: "Illegally parked cars will be towed."
    },
    {
        word: "streamline",
        pos: "動",
        ipa: "/ˈstriːmlaɪn/",
        cn: "精简，简化（流程/操作）；使成流线型",
        jp: "（業務などを）合理化する、簡素化する",
        family: "streamlined / streamlining",
        tips: "企业降本增效与数字化转型第一核心动词：streamline operations / procedures / workflow（精简业务流程/提高工作效率）。",
        desc: "We need to streamline our workflow."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "streamline",
        category: "简单",
        stem: "The management team decided to adopt cloud-based software to ________ the customer onboarding process.",
        options: ["streamline", "streamlining", "feasible", "debris"],
        correct: "streamline",
        explanations: {
            guide: "动词不定式结构。decided to 后面需要接动词原形，后接宾语 the customer onboarding process，表达“精简/简化”入职流程，选 streamline。",
            family: "streamline (v.精简/优化) | streamlining (动名词) | feasible (adj.可行的) | debris (n.残骸)。",
            details: "to 为不定式符号，后接动词原形。streamlining 是分词或动名词，不能直接在不定式符号后充当谓语动词原形。",
            cn: "管理团队决定采用基于云端的软件，以精简新客户导入流程。",
            jp: "管理チームは、顧客のオンボーディングプロセスを合理化する（streamline）ために、クラウドベースのソフトウェアを採用することを決定しました。"
        }
    },
    {
        id: 2,
        target: "kiosk",
        category: "简单",
        stem: "Passengers traveling without checked baggage may check in quickly at any automated airport ________.",
        options: ["kiosk", "kiosks", "reunion", "endorsement"],
        correct: "kiosk",
        explanations: {
            guide: "限定词后的单数名词。any automated airport ________ 结构中，限定词 any 修饰单数可数名词，check-in kiosk 意为“自助值机终端机”，选 kiosk。",
            family: "kiosk (n.自助终端机/单数) | kiosks (n.复数) | reunion (n.聚会) | endorsement (n.代言)。",
            details: "airport kiosk 属于机场差旅场景的固定专有名词。kiosks 为复数，在此特定单数搭配语境下不及单数 kiosk 精准规范。",
            cn: "未携带托运行李的旅客可以在任何一台机场自动化自助服务终端机上快速办理乘机手续。",
            jp: "受託手荷物のない乗客は、空港の自動端末機（kiosk）で素早くチェックイン手続きを行うことができます。"
        }
    },
    {
        id: 3,
        target: "overdue",
        category: "简单",
        stem: "The accounting department issued an urgent reminder because the client's invoice was more than thirty days ________.",
        options: ["overdue", "feasibility", "towed", "credentials"],
        correct: "overdue",
        explanations: {
            guide: "系表结构与商业催款考点。was 后面接形容词作表语，表达账单已经“逾期/超期”三十余天，选 overdue。",
            family: "overdue (adj.逾期的) | feasibility (n.可行性) | towed (v-ed拖走) | credentials (n.资质)。",
            details: "invoice is overdue 属于财务发票账务处理标准用语。feasibility 是名词，towed 是过去分词，均无法作此处表示款项逾期的表语形容词。",
            cn: "由于客户的发票已经逾期超过三十天，财务部门发出了紧急催缴通知。",
            jp: "クライアントへの請求書が30日以上延滞して（overdue）いたため、経理部は緊急の督促状を発行しました。"
        }
    },
    {
        id: 4,
        target: "tow",
        category: "简单",
        stem: "Vehicles parked in designated emergency fire lanes without official authorization will be ________ immediately.",
        options: ["towed", "towing", "streamline", "debris"],
        correct: "towed",
        explanations: {
            guide: "被动语态谓语动词。will be 后面需要接及物动词的过去分词构成被动语态，车辆与拖拽之间为被动关系，be towed 意为“被拖走”，选 towed。",
            family: "towed (v-ed被拖走的) | towing (动名词) | streamline (v.精简) | debris (n.残骸)。",
            details: "vehicles will be towed 是物业与交通警示标识的核心高频表达。towing 是现在分词，不能与 will be 组合表达被动含义。",
            cn: "未经官方授权擅自停放在指定紧急消防通道内的车辆将被立即拖走。",
            jp: "正式な許可なく指定された緊急消防車専用レーンに駐車された車両は、直ちにレッカー移動（towed）されます。"
        }
    },
    {
        id: 5,
        target: "credentials",
        category: "简单",
        stem: "Candidates applying for the senior research chemist position must submit verified academic ________ along with their resumes.",
        options: ["credentials", "credential", "centerpiece", "reunion"],
        correct: "credentials",
        explanations: {
            guide: "名词复数与招聘专属搭配。submit academic ________ 结构中，指提交学术学历“证书/资历文件”，固定使用复数形式 credentials，选 credentials。",
            family: "credentials (n.资历/证书/复数) | credential (n.单数/较少单独使用) | centerpiece (n.核心) | reunion (n.重聚)。",
            details: "academic credentials 是人事招聘审查的固定搭配，习惯用复数形式代表一系列文凭与资格证明。",
            cn: "应聘高级研究化学家职位的候选人必须在提交简历的同时附上经过认证的学历资质证书。",
            jp: "主任研究化学者の役職に応募する候補者は、履歴書とともに確認済みの学歴資格証明書（credentials）を提出しなければなりません。"
        }
    },
    {
        id: 6,
        target: "reunion",
        category: "简单",
        stem: "The downtown luxury hotel reserved its grand ballroom to host an annual university alumni ________ next Saturday.",
        options: ["reunion", "reunite", "kiosk", "endorsement"],
        correct: "reunion",
        explanations: {
            guide: "复合名词定语修饰。an annual university alumni ________ 结构中需要名词中心语，alumni reunion 意为“校友联谊会/校友重聚活动”，选 reunion。",
            family: "reunion (n.聚会/重聚) | reunite (v.重聚) | kiosk (n.自助亭) | endorsement (n.背书)。",
            details: "an alumni reunion 指校友聚会。reunite 是动词，不能直接放在冠词 an 与名词定语 alumni 后面作宾语中心词。",
            cn: "市中心豪华酒店预留了其大宴会厅，用于在下周六举办一年一度的大学校友联谊会。",
            jp: "ダウンタウンの高級ホテルは、来週の土曜日に年次大学同窓会（reunion）を開催するために大宴会場を予約しました。"
        }
    },
    {
        id: 7,
        target: "feasible",
        category: "中等",
        stem: "Due to high installation costs, converting the entire delivery fleet to electric vehicles does not seem financially ________ at this time.",
        options: ["feasible", "feasibility", "overdue", "streamlining"],
        correct: "feasible",
        explanations: {
            guide: "系表结构与副词修饰形容词。seem 后面接形容词作表语，副词 financially 修饰该形容词，financially feasible 意为“在经济上切实可行的”，选 feasible。",
            family: "feasible (adj.可行的) | feasibility (n.可行性) | overdue (adj.逾期的) | streamlining (动名词)。",
            details: "financially feasible 属于商务投资论证专属搭配。feasibility 是名词，不能作系动词 seem 的形容词表语。",
            cn: "由于高昂的改装成本，目前将整个配送车队全部更换为电动汽车在财务上似乎并不可行。",
            jp: "導入コストが高いため、配送フリート全体を電気自動車に転換することは、現時点では財政的に実現可能（feasible）とは思われません。"
        }
    },
    {
        id: 8,
        target: "endorsement",
        category: "中等",
        stem: "The athletic apparel manufacturer saw an immediate surge in quarterly sales after securing an ________ deal with a tennis champion.",
        options: ["endorsement", "endorsed", "credentials", "centerpiece"],
        correct: "endorsement",
        explanations: {
            guide: "复合名词定语搭配。an ________ deal 结构中，endorsement deal 是品牌营销与公关赞助的核心专属名词，意为“代言协议/代言合同”，选 endorsement。",
            family: "endorsement (n.代言/认可) | endorsed (v-ed形式) | credentials (n.资质) | centerpiece (n.核心)。",
            details: "a celebrity endorsement deal 属于营销专有词汇。endorsed 是分词，在此处不如名词 endorsement 构成复合名词 deal 的固定搭配规范自然。",
            cn: "这家运动服装制造商在与一位网球冠军签下代言协议后，季度销售额立即迎来了激增。",
            jp: "そのスポーツウェアメーカーは、テニスのチャンピオンと推薦広告・スポンサー契約（endorsement deal）を結んだ後、四半期の売上高が即座に急増しました。"
        }
    },
    {
        id: 9,
        target: "centerpiece",
        category: "中等",
        stem: "The proposed high-speed rail network is considered the ________ of the government's ten-year economic modernization plan.",
        options: ["centerpiece", "debris", "reunion", "feasible"],
        correct: "centerpiece",
        explanations: {
            guide: "定冠词后的名词中心语与熟词生义。the ________ of the plan 结构中，centerpiece 考查比喻义，指政策或规划中的“核心内容/重中之重”，选 centerpiece。",
            family: "centerpiece (n.核心部分/中心装饰) | debris (n.残骸) | reunion (n.聚会) | feasible (adj.可行的)。",
            details: "the centerpiece of the plan 意为规划方案中最核心、最引人瞩目的关键支柱。debris、reunion 在语义上与政府宏观经济现代化规划完全不合。",
            cn: "拟建的高速铁路网被视为政府十年经济现代化规划的核心举措。",
            jp: "提案された高速鉄道網は、政府の10カ年経済近代化計画の目玉・中心的存在（centerpiece）と見なされています。"
        }
    },
    {
        id: 10,
        target: "debris",
        category: "中等",
        stem: "Municipal maintenance crews worked throughout the night to clear fallen tree branches and other storm ________ from the highway.",
        options: ["debris", "kiosks", "towed", "endorser"],
        correct: "debris",
        explanations: {
            guide: "不可数名词中心语与市政清理考点。storm ________ 结构中，storm debris 是托业听力与阅读极高频气象灾害搭配，意为“风暴残骸/瓦砾垃圾”，选 debris。",
            family: "debris (n.残骸/瓦砾/不可数) | kiosks (n.自助终端) | towed (v-ed拖走) | endorser (n.代言人)。",
            details: "storm debris 指狂风暴雨后散落的断枝瓦砾等杂物。debris 为不可数名词；kiosks 和 endorser 词义与路面清障场景无关。",
            cn: "市政维修工作人员彻夜工作，以清理公路上折断的树枝和其他风暴残留碎片。",
            jp: "市の保守クルーは、高速道路から倒れた木の枝やその他の暴風雨のがれき（debris）を取り除くために一晩中作業しました。"
        }
    },
    {
        id: 11,
        target: "streamline",
        category: "中等",
        stem: "By consolidating multiple regional warehouses into a central logistics hub, the distributor successfully ________ its supply chain operations.",
        options: ["streamlined", "streamlining", "feasible", "overdue"],
        correct: "streamlined",
        explanations: {
            guide: "一般过去时谓语动词。句子主句缺少核心谓语动词，副词 successfully 修饰该动词，streamlined operations 意为“成功精简了运营环节”，选用过去式 streamlined。",
            family: "streamlined (v-ed过去式/精简) | streamlining (现在分词) | feasible (adj.可行的) | overdue (adj.逾期的)。",
            details: "streamlined its operations 构成完整的动宾谓语。streamlining 是分词，缺少助动词无法单独充当句子的谓语动词。",
            cn: "通过将多个区域仓库合并为一个中央物流枢纽，该分销商成功精简了其供应链运营。",
            jp: "複数の地域倉庫を中央物流ハブに統合することにより、その販売代理店はサプライチェーン業務の合理化に成功し（streamlined）ました。"
        }
    },
    {
        id: 12,
        target: "tow",
        category: "中等",
        stem: "Following the delivery van's engine breakdown on Highway 10, the logistics coordinator promptly dispatched a commercial ________ truck.",
        options: ["tow", "towed", "reunion", "credentials"],
        correct: "tow",
        explanations: {
            guide: "名词作前置定语修饰名词。a commercial ________ truck 结构中，tow 与 truck 组合构成托业高频专有名词 tow truck，意为“清障拖车”，选名词 tow。",
            family: "tow (n.拖拽/v.牵引) | towed (adj.被拖的) | reunion (n.聚会) | credentials (n.资历)。",
            details: "tow truck 是救援拖车的固定专有名称。towed 是过去分词，修饰 truck 意为“被拖拽的卡车”，与调度救援拖车前去施救的语境不符。",
            cn: "送货货车在 10 号公路上发生发动机故障后，物流协调员迅速调度了一辆商用清障拖车。",
            jp: "10号線での配達バンのエンジン故障を受けて、物流コーディネーターは直ちに民間のレッカー車（tow truck）を手配しました。"
        }
    },
    {
        id: 13,
        target: "feasible",
        category: "困难",
        stem: "Before committing venture capital to the wind farm expansion, corporate directors commissioned an independent study to evaluate its economic ________.",
        options: ["feasibility", "feasible", "endorsement", "centerpiece"],
        correct: "feasibility",
        explanations: {
            guide: "形容词修饰名词中心语与商务投资考点。evaluate its economic ________ 结构中，形容词 economic 后面需要名词作 evaluate 的宾语，economic feasibility 意为“经济可行性”，选派生名词 feasibility。",
            family: "feasibility (n.可行性) | feasible (adj.可行的) | endorsement (n.代言) | centerpiece (n.核心)。",
            details: "economic feasibility 指项目在经济层面的可行程度。feasible 是形容词，不能直接放在形容词 economic 之后充当宾语中心词。",
            cn: "在对风电场扩建项目投入风险投资之前，公司董事们委托进行了一项独立研究，以评估其经济可行性。",
            jp: "風力発電所の拡張にベンチャーキャピタルを投入する前に、企業の取締役は経済的実現可能性（feasibility）を評価するための独立した調査を依頼しました。"
        }
    },
    {
        id: 14,
        target: "endorsement",
        category: "困难",
        stem: "The executive steering committee unanimously ________ the proposed environmental guidelines during yesterday's board meeting.",
        options: ["endorsed", "endorsement", "streamlined", "overdue"],
        correct: "endorsed",
        explanations: {
            guide: "一般过去时谓语动词与商务熟词生义。句子缺少谓语动词，副词 unanimously（一致地）修饰动词，endorse 表决支持/认可方案，选用过去式 endorsed。",
            family: "endorsed (v-ed正式支持/认可) | endorsement (n.背书/认可) | streamlined (v-ed精简) | overdue (adj.逾期的)。",
            details: "unanimously endorsed the guidelines 意为一致批准通过环保准则。endorsement 是名词，不能充当句子的谓语中心动词。",
            cn: "执行指导委员会在昨天的董事会会议上一致通过并支持了拟议的环境准则。",
            jp: "執行運営委員会は、昨日の役員会において、提案された環境ガイドラインを満場一致で承認・支持し（endorsed）ました。"
        }
    },
    {
        id: 15,
        target: "overdue",
        category: "困难",
        stem: "After months of persistent scheduling delays, management introduced a long ________ overhaul of the internal communication protocol.",
        options: ["overdue", "feasible", "towing", "debris"],
        correct: "overdue",
        explanations: {
            guide: "固定复合修饰语与熟词生义。a long ________ overhaul 结构中，long overdue 属于托业高阶固定习语短语，作前置定语修饰 overhaul，意为“早就该进行的/姗姗来迟的全面改革”，选 overdue。",
            family: "overdue (adj.早该发生的/逾期的) | feasible (adj.可行的) | towing (动名词) | debris (n.残骸)。",
            details: "long overdue overhaul 意为早就应该实施的彻底整改。feasible、towing 与 long 组合无法构成修饰改革举措的合法习语短语。",
            cn: "经过数月持续的进度延误后，管理层对内部沟通流程进行了一次早就该实施的彻底整顿。",
            jp: "数か月にわたる度重なるスケジュールの遅延を経て、経営陣は内部コミュニケーション手順の長年待ち望まれていた・とっくに実施されるべきだった（long overdue）見直しを導入しました。"
        }
    },
    {
        id: 16,
        target: "debris",
        category: "困难",
        stem: "The municipal environmental safety inspector reported that industrial ________ from the demolition site had not been disposed of in accordance with hazardous waste regulations.",
        options: ["debris", "credentialing", "reunion", "kiosks"],
        correct: "debris",
        explanations: {
            guide: "不可数名词主语与主谓一致。空格作从句主语，与后方单数谓语 had not been disposed of 呼应，industrial debris 意为“工业拆迁废料/残骸瓦砾”，选不可数名词 debris。",
            family: "debris (n.建筑垃圾/残骸/不可数) | credentialing (n.资质核准) | reunion (n.聚会) | kiosks (n.售货亭)。",
            details: "industrial debris 专指工业拆除施工留下的残料废墟。credentialing（资质审查认证）与拆迁危险废弃物处理逻辑完全不符。",
            cn: "市政环境安全督察员报告称，拆除施工现场的工业废料瓦砾未按照危险废物管理规程进行妥善处置。",
            jp: "市の環境安全検査官は、解体現場からの産業用がれき・廃棄物（debris）が有害廃棄物規制に従って処分されていなかったと報告しました。"
        }
    },
    {
        id: 17,
        target: "centerpiece",
        category: "困难",
        stem: "An exquisite glass fountain designed by a renowned Italian sculptor will serve as the artistic ________ of the hotel's central atrium.",
        options: ["centerpiece", "endorsement", "streamline", "feasibility"],
        correct: "centerpiece",
        explanations: {
            guide: "形容词修饰名词中心语。the artistic ________ of the central atrium 结构中，形容词 artistic 修饰名词，centerpiece 考查具体景观的“视觉中心/核心焦点”，选 centerpiece。",
            family: "centerpiece (n.焦点/中心装饰品) | endorsement (n.代言) | streamline (v.精简) | feasibility (n.可行性)。",
            details: "the artistic centerpiece 意为大堂中庭的艺术视觉核心焦点。endorsement（背书）与 feasibility（可行性）不能被艺术雕塑喷泉所体现担当。",
            cn: "一座由著名意大利雕塑家设计的精美玻璃喷泉将作为酒店中央中庭的艺术视觉核心焦点。",
            jp: "有名なイタリアの彫刻家によって設計された見事なガラスの噴水が、ホテルの中央アトリウムの芸術的な目玉・中心的存在（centerpiece）として機能します。"
        }
    },
    {
        id: 18,
        target: "credentials",
        category: "困难",
        stem: "The hospital's human resources division implemented a rigorous new protocol for the formal ________ of all incoming medical specialists.",
        options: ["credentialing", "credentials", "reunion", "overdue"],
        correct: "credentialing",
        explanations: {
            guide: "专业人事术语与动名词/抽象名词辨析。for the formal ________ of all incoming medical specialists 结构中，表达对入职专家资历证书进行审核认证的“资质认定/证书审核流程”，需使用抽象名词 credentialing，选 credentialing。",
            family: "credentialing (n.资质认定/执业资格审核) | credentials (n.具体资质文件/复数) | reunion (n.聚会) | overdue (adj.逾期的)。",
            details: "the credentialing of doctors 是医疗机构与跨国公司核实执业资格的规范专业术语。credentials 指求职者持有的具体实体证书证件，不能在此与介词 of 构成审核动作的客体流程定义。",
            cn: "医院人力资源部门实施了一项严格的新规程，用于对所有新入职医学专家进行正式的执业资质审核认证。",
            jp: "病院の人事部は、新しく着任するすべての医療専門家の正式な資格認定・審査手続き（credentialing）のための厳格な新プロトコルを導入しました。"
        }
    }
];