// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag81-90.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "clothing",
        pos: "名",
        ipa: "/ˈkloʊðɪŋ/",
        cn: "衣服，服装",
        jp: "衣類、衣服",
        family: "clothes / clothe / clothing",
        tips: "托业高频集合名词，不可数。在商务制造与职场安全场景中，常见搭配有 protective clothing（防护服）或 casual clothing（便服）。",
        desc: "The clothing is warm."
    },
    {
        word: "exhibit",
        pos: "動/名",
        ipa: "/ɪɡˈzɪbɪt/",
        cn: "展览，陈列；展品",
        jp: "展示する；展示品",
        family: "exhibition / exhibitor / exhibited",
        tips: "既可作动词指“举办展览”，也可作名词指“展出物/展品”。注意其名词衍生词 exhibition 特指“展览会/博览会”。",
        desc: "They exhibit old cars."
    },
    {
        word: "property",
        pos: "名",
        ipa: "/ˈpɑːpərti/",
        cn: "财产，资产，房地产",
        jp: "財産、不動産、特性",
        family: "properties / proprietor",
        tips: "商业地产场景核心词，常指公司持有的“房产、地产”（如 commercial property 商业地产，real property 不动产）。",
        desc: "This property is big."
    },
    {
        word: "expand",
        pos: "動",
        ipa: "/ɪkˈspænd/",
        cn: "扩大，扩展，扩张",
        jp: "拡大する、拡張する",
        family: "expansion / expansive / expanded",
        tips: "企业发展与战略场景核心词。常考短语 expand operations（扩大业务规模）或 expand into new markets（打入新市场）。",
        desc: "We will expand now."
    },
    {
        word: "host",
        pos: "動/名",
        ipa: "/hoʊst/",
        cn: "主持，主办；主人，东道主",
        jp: "主催する；主催者",
        family: "hosted / hosting",
        tips: "商务会议或宴会活动场景词。作动词表示“主办/主持活动”（如 host an international conference 主办国际会议）。",
        desc: "He will host the event."
    },
    {
        word: "reserve",
        pos: "動/名",
        ipa: "/rɪˈzɜːrv/",
        cn: "预订，保留；储备物",
        jp: "予約する、保留する；蓄え",
        family: "reservation / reserved / reserves",
        tips: "酒店差旅及餐饮场景绝对高频词。作动词常考 reserve a room/table（预订房间/桌位）。注意其名词形式 reservation 常见搭配为 make a reservation。",
        desc: "Please reserve a seat."
    },
    {
        word: "pleased",
        pos: "形",
        ipa: "/pliːzd/",
        cn: "高兴的，满意的",
        jp: "喜んでいる、満足している",
        family: "please / pleasure / pleasant / pleasingly",
        tips: "职场商务书信核心形容词。常考经典句型 be pleased to do sth（很高兴做某事）或 be pleased with sth（对某事感到满意）。",
        desc: "I am pleased with it."
    },
    {
        word: "instruction",
        pos: "名",
        ipa: "/ɪnˈstrʌkʃn/",
        cn: "指示，说明，指导",
        jp: "指示、説明、教育",
        family: "instruct / instructions / instructive / instructor",
        tips: "办公设备操作或员工培训高频词。常以复数形式 instructions 出现表示“操作说明/使用指南”（如 follow the instructions 遵循说明）。",
        desc: "Read the instruction."
    },
    {
        word: "latest",
        pos: "形",
        ipa: "/ˈleɪtɪst/",
        cn: "最新的，最近的",
        jp: "最新の、最近の",
        family: "late / lately / lateness",
        tips: "产品发布与技术升级场景词。它是 late 的最高级形式，在商务语境中常指“最新的”（如 latest technology 最新技术，latest report 最新报告）。",
        desc: "This is the latest news."
    },
    {
        word: "bill",
        pos: "名/動",
        ipa: "/bɪl/",
        cn: "账单；发票；开具账单",
        jp: "請求書、法案；請求書を送る",
        family: "billing / billed / bills",
        tips: "财务与日常运营核心词。常见搭配有 utility bill（水电费账单）。动名词形式 billing 常见于 billing department（计费/财务收款部门）。",
        desc: "Pay the bill online."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "clothing",
        category: "简单",
        stem: "Employees working in the chemical laboratory are strictly required to wear protective ________ at all times.",
        options: ["clothing", "expand", "pleased", "instruction"],
        correct: "clothing",
        explanations: {
            guide: "及物动词后的名词宾语。wear 后面需要接名词作其直接宾语，结合前置定语 protective（防护的）和实验室环境，选 clothing（服装）。",
            family: "clothing (n.服装) | expand (v.扩张) | pleased (adj.高兴的) | instruction (n.指示)。",
            details: "protective clothing 是托业工厂与安全场景的经典固定搭配，意为“防护服”。其他词汇词性或语义不符。",
            cn: "在化学实验室工作的员工被严格要求随时穿着防护服。",
            jp: "化学実験室で働く従業員は、常に防護服（clothing）を着用することが厳格に義務付けられています。"
        }
    },
    {
        id: 2,
        target: "exhibit",
        category: "简单",
        stem: "The local museum will ________ a rare collection of ancient coins during the upcoming cultural festival.",
        options: ["exhibit", "property", "latest", "bill"],
        correct: "exhibit",
        explanations: {
            guide: "情态动词后的动词原形。will 后面需要接动词原形作谓语，根据主语 museum 和宾语 collection，选 exhibit（展览）。",
            family: "exhibit (v.展览) | property (n.资产) | latest (adj.最新的) | bill (n.账单)。",
            details: "exhibit a collection 意为展览收藏品，完全符合博物馆（museum）的职能语境，其他选项均非动词原形或语意不通。",
            cn: "当地博物馆将在即将到来的文化节期间展出一批罕见的古代钱币收藏。",
            jp: "地元の博物館は、近く開催される文化祭の期間中、古代硬貨の希少なコレクションを展示（exhibit）する予定です。"
        }
    },
    {
        id: 3,
        target: "property",
        category: "简单",
        stem: "The logistics company purchased a large piece of ________ near the harbor to build a new warehouse.",
        options: ["property", "host", "reserve", "expand"],
        correct: "property",
        explanations: {
            guide: "量词短语后的名词中心语。a large piece of 后面需要接名词，结合建造仓库（warehouse）的语境，选 property（地产/资产）。",
            family: "property (n.地产/资产) | host (v.主办) | reserve (v.预订) | expand (v.扩张)。",
            details: "a piece of property 意为“一块地产/房产”，在商业扩张和仓储选址中是标准的商业名词表达。",
            cn: "这家物流公司在港口附近购买了一大块土地，用于建造一个新仓库。",
            jp: "その物流会社は、新しい倉庫を建設するために港の近くの広大な土地（property）を購入しました。"
        }
    },
    {
        id: 4,
        target: "expand",
        category: "简单",
        stem: "The retail chain plans to ________ its operations into the northern territory by opening five new branches.",
        options: ["expand", "clothing", "pleased", "instruction"],
        correct: "expand",
        explanations: {
            guide: "不定式符号后的动词原形。plans to 后面需要接动词原形作目的状语，结合宾语 its operations 和介词 into，选 expand（扩张）。",
            family: "expand (v.扩张) | clothing (n.服装) | pleased (adj.高兴的) | instruction (n.指示)。",
            details: "expand its operations into... 意为将业务扩张到某地，是托业企业战略场景的高频标准搭配。",
            cn: "该零售连锁店计划通过开设五家新分店，将其业务扩张到北部地区。",
            jp: "その小売チェーンは、5つの新店舗を開設することにより、北部地域へ事業を拡大（expand）することを計画しています。"
        }
    },
    {
        id: 5,
        target: "host",
        category: "简单",
        stem: "Toronto has been chosen to ________ the international technology summit scheduled for next October.",
        options: ["host", "latest", "bill", "property"],
        correct: "host",
        explanations: {
            guide: "动词不定式作目的成分。chosen to 后面需要接动词原形，结合宾语 technology summit（技术峰会），选 host（主办）。",
            family: "host (v.主办) | latest (adj.最新的) | bill (n.账单) | property (n.资产)。",
            details: "host the summit 意为举办/主办峰会，是典型的商业会议与会务场景句型，其他词汇无法构成动宾逻辑。",
            cn: "多伦多已被选为明年十月举行的国际技术峰会的主办城市。",
            jp: "トロントは、来年10月に予定されている国際技術サミットを主催（host）する都市に選ばれました。"
        }
    },
    {
        id: 6,
        target: "reserve",
        category: "简单",
        stem: "Clients who wish to attend the VIP seminar must ________ their seats online before the end of the week.",
        options: ["reserve", "clothing", "exhibit", "pleased"],
        correct: "reserve",
        explanations: {
            guide: "情态动词后的及物动词。must 后面需要接动词原形，结合宾语 their seats（他们的座位），选 reserve（预订）。",
            family: "reserve (v.预订) | clothing (n.服装) | exhibit (v.展览) | pleased (adj.高兴的)。",
            details: "reserve their seats 意为预订座位，是票务、餐饮和商业活动场景下的核心高频表达。",
            cn: "希望参加VIP研讨会的客户必须在本周结束前在线预订座位。",
            jp: "VIPセミナーへの参加を希望されるお客様は、週末までにオンラインで席を予約（reserve）しなければなりません。"
        }
    },
    {
        id: 7,
        target: "pleased",
        category: "中等",
        stem: "The human resources manager was extremely ________ with the high quality of the job applicants.",
        options: ["pleased", "please", "pleasure", "pleasant"],
        correct: "pleased",
        explanations: {
            guide: "系动词后的形容词表语。was 后面有程度副词 extremely 修饰，且后接介词 with，表示“对……感到满意/高兴”，选 pleased。",
            family: "pleased (adj.满意的/高兴的) | please (v.使高兴) | pleasure (n.快乐/荣幸) | pleasant (adj.令人愉快的)。",
            details: "be pleased with... 为形容词固定搭配，主语通常为人，表示对某事物感到满意或高兴。其他词性均不符合此处的表语结构。",
            cn: "人力资源经理对求职者的高素质感到非常满意。",
            jp: "人事マネージャーは、求職者の質の高さに非常に満足（pleased）していました。"
        }
    },
    {
        id: 8,
        target: "instruction",
        category: "中等",
        stem: "Please review the safety ________ carefully before operating the heavy printing equipment.",
        options: ["instructions", "instruct", "instructive", "instructor"],
        correct: "instructions",
        explanations: {
            guide: "及物动词后的名词宾语。review the 后面必须填入名词作宾语，结合 safety（安全）和操作设备语境，选复数名词 instructions（说明/指南）。",
            family: "instructions (n-pl.说明/指示) | instruct (v.指导) | instructive (adj.有指导意义的) | instructor (n.教练/导师)。",
            details: "safety instructions 意为“安全操作说明”，在商务及工厂运营场景中常以复数形式出现，属于标志性高频考点。",
            cn: "在操作重型印刷设备之前，请仔细阅读安全说明。",
            jp: "重型印刷機器を操作する前に、安全指示（instructions）書をよく確認してください。"
        }
    },
    {
        id: 9,
        target: "latest",
        category: "中等",
        stem: "The engineering team is developing a mobile application using the ________ security encryption technology.",
        options: ["latest", "late", "lately", "lateness"],
        correct: "latest",
        explanations: {
            guide: "定冠词后的最高级形容词。the 后面需要填入形容词修饰名词 technology，结合技术研发的语境，选 latest（最新的）。",
            family: "latest (adj.最新的) | late (adj./adv.迟/晚) | lately (adv.最近) | lateness (n.迟到/晚)。",
            details: "the latest technology 意为“最新技术”，是IT和产品开发场景中的绝对核心搭配。lately 是副词，不能修饰名词。",
            cn: "工程团队正在使用最新的安全加密技术开发一款移动应用程序。",
            jp: "エンジニアリングチームは、最新の（latest）セキュリティ暗号化技術を使用してモバイルアプリケーションを開発しています。"
        }
    },
    {
        id: 10,
        target: "bill",
        category: "中等",
        stem: "The accounting department will send an itemized ________ to the corporate client for last month's consulting services.",
        options: ["bill", "billing", "billed", "bills"],
        correct: "bill",
        explanations: {
            guide: "不定冠词与形容词后的名词单数。an itemized（一份逐项列出的）后面需要接一个可数名词单数作宾语，选 bill（账单）。",
            family: "bill (n.账单) | billing (n.计费) | billed (v-ed开具账单) | bills (n-pl.账单复数)。",
            details: "an itemized bill 意为“明细账单”，符合财务部门发给客户索取服务费用的商业往来逻辑。billing 是不可数的计费行为，在此处不适用。",
            cn: "会计部将向企业客户寄送上个月咨询服务的明细账单。",
            jp: "経理部門は、先月のコンサルティングサービスに関する明細請求書（bill）を法人顧客に送付します。"
        }
    },
    {
        id: 11,
        target: "expand",
        category: "中等",
        stem: "The company's rapid ________ into South American markets created dozens of new executive positions.",
        options: ["expansion", "expand", "expansive", "expanded"],
        correct: "expansion",
        explanations: {
            guide: "名词主语成分判断。所有格与形容词 The company's rapid 后面需要名词作为整句话的核心主语，选 expansion（扩张）。",
            family: "expansion (n.扩张) | expand (v.扩张) | expansive (adj.广阔的) | expanded (adj.扩张的)。",
            details: "rapid expansion into... 意为“向……的快速扩张”，此处填入名词形式以承受形容词 rapid 的修饰并充当主语。其余词性均不合适。",
            cn: "该公司向南美市场的快速扩张创造了数十个新的高管职位。",
            jp: "同社の南米市場への急速な拡大（expansion）により、数多くの新しい役員ポストが創出されました。"
        }
    },
    {
        id: 12,
        target: "reserve",
        category: "中等",
        stem: "You will receive an automated confirmation email once your hotel ________ has been processed.",
        options: ["reservation", "reserve", "reserved", "reserves"],
        correct: "reservation",
        explanations: {
            guide: "复合名词作从句主语。hotel 后面需要接名词组成复合名词，并作为谓语 has been processed 的主语，选 reservation（预订）。",
            family: "reservation (n.预订) | reserve (v.预订) | reserved (adj.预留的) | reserves (n-pl.储备)。",
            details: "hotel reservation 意为“酒店预订”，是差旅商务场景下的绝对核心考点。一旦处理完毕，系统会发送确认邮件。",
            cn: "一旦您的酒店预订处理完毕，您将收到一封自动确认电子邮件。",
            jp: "ホテルの予約（reservation）が処理され次第、自動確認メールが届きます。"
        }
    },
    {
        id: 13,
        target: "pleased",
        category: "困难",
        stem: "It was a great ________ to collaborate with your design firm on the corporate branding project.",
        options: ["pleasure", "pleased", "please", "pleasant"],
        correct: "pleasure",
        explanations: {
            guide: "固定句型与名词充当表语。It was a great 后面必须接名词，构成“做某事是件幸事/令人愉快的事”的固定句型，选 pleasure。",
            family: "pleasure (n.愉快/荣幸) | pleased (adj.高兴的) | please (v.请/使高兴) | pleasant (adj.令人愉快的)。",
            details: "It is a pleasure to do sth 是商务交往、感谢信函中的高频社交客套语。great pleasure 表示极大的荣幸，pleased 是形容词，不能由 great 直接修饰并放在名词位置。",
            cn: "与您的设计公司在企业品牌推广项目上合作是件非常荣幸的事。",
            jp: "ブランディングプロジェクトで貴社のデザイン会社と協力できたことは、大きな喜び（pleasure）でした。"
        }
    },
    {
        id: 14,
        target: "instruction",
        category: "困难",
        stem: "The training workshop on international trade regulations was highly ________ for both new and experienced agents.",
        options: ["instructive", "instruction", "instruct", "instructor"],
        correct: "instructive",
        explanations: {
            guide: "副词修饰下的形容词表语。was 后面有程度副词 highly 修饰，此位置需要填入形容词作主语的补足语，选 instructive（有益的/具指导性的）。",
            family: "instructive (adj.有教益的) | instruction (n.指示) | instruct (v.指导) | instructor (n.导师)。",
            details: "highly instructive 意为“非常有启发性的/非常有教益的”，常用来形容培训、讲座或研讨会内容充实、让人获益匪浅。其他名词或动词不能被 highly 直接修饰作表语。",
            cn: "关于国际贸易法规的培训研讨会对新老代理商都非常有启发性。",
            jp: "国際貿易規制に関するワークショップは、新人・ベテラン代理店の双方にとって非常に有益（instructive）なものでした。"
        }
    },
    {
        id: 15,
        target: "exhibit",
        category: "困难",
        stem: "The upcoming industrial ________ will feature the latest advancements in automated assembly lines.",
        options: ["exhibition", "exhibit", "exhibitor", "exhibited"],
        correct: "exhibition",
        explanations: {
            guide: "限定词及形容词后的名词主语。upcoming industrial（即将到来的工业的）后面需要填入名词作主语，结合 feature（以……为特色），选 exhibition（展览会）。",
            family: "exhibition (n.展览会) | exhibit (v./n.展示/展品) | exhibitor (n.参展商) | exhibited (v-ed被展示)。",
            details: "industrial exhibition 意为“工业展览会”。虽然 exhibit 也可以作名词，但它多指具体的某件展品，而 exhibition 指整个展会活动，更符合句意。",
            cn: "即将举行的工业展览会将以自动装配线的最新进展为特色。",
            jp: "近く開催される産業展示会（exhibition）では、自動組み立てラインの最新の進歩が紹介されます。"
        }
    },
    {
        id: 16,
        target: "latest",
        category: "困难",
        stem: "Due to increased supply chain disruptions, international shipping rates have fluctuated significantly ________.",
        options: ["lately", "latest", "late", "lateness"],
        correct: "lately",
        explanations: {
            guide: "现在完成时句尾的时间状语。have fluctuated 是现在完成时，句尾需要填入一个与之呼应的时间副词作状语，选 lately（最近）。",
            family: "lately (adv.最近) | latest (adj.最新的) | late (adj./adv.迟) | lateness (n.迟到)。",
            details: "lately 意为“最近/近来”，是现在完成时的标志性时间副词，相当于 recently。latest 是最高级形容词，不能单独在句尾充当时间状语。",
            cn: "由于供应链中断的加剧，国际海运费率近来波动非常显著。",
            jp: "サプライチェーンの混乱が増したため、国際輸送運賃はここ最近（lately）大幅に変動しています。"
        }
    },
    {
        id: 17,
        target: "bill",
        category: "困难",
        stem: "For inquiries regarding incorrect statement charges, please contact a customer representative in our ________ department.",
        options: ["billing", "bill", "billed", "bills"],
        correct: "billing",
        explanations: {
            guide: "名词作定语修饰部门。空格修饰 department 构成一个特定的公司部门名称，针对对账单收费错误（incorrect charges），选 billing（计费/财务）。",
            family: "billing (n.开票/计费) | bill (n.账单) | billed (v-ed开账单) | bills (n-pl.账单复数)。",
            details: "billing department 意为“计费部/财务收款部”，是处理发票、账单争议和款项错漏的标准职场部门称谓。其余词汇不符合部门复合词搭配。",
            cn: "如需咨询关于对账单收费错误的问题，请与我们计费部的客服代表联系。",
            jp: "誤請求に関するお問い合わせは、当社の請求（billing）部門の担当者までご連絡ください。"
        }
    },
    {
        id: 18,
        target: "reserve",
        category: "困难",
        stem: "The administrative team announced that the parking spaces near the main entrance are ________ for executives.",
        options: ["reserved", "reserve", "reservation", "reserves"],
        correct: "reserved",
        explanations: {
            guide: "过去分词作表语构成被动意义。are 后面接过去分词构成 be reserved for 结构，表示“专门留给……”。",
            family: "reserved (v-ed/adj.专留的/预订的) | reserve (v.预订) | reservation (n.预订) | reserves (n-pl.储备)。",
            details: "be reserved for someone 是商务行政环境中的极高频表达，意为“专供某人使用/为某人所保留”。车位专留给高管完全符合句意。",
            cn: "行政团队宣布，靠近主入口处的停车位是专留给公司高管的。",
            jp: "総務チームは、メイン入口近くの駐車スペースが役員専用に指定（reserved）されていると発表しました。"
        }
    }
];