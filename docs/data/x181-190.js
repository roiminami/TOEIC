// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data421-430.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "malicious",
        pos: "形",
        ipa: "/məˈlɪʃəs/",
        cn: "恶意的，蓄意的",
        jp: "悪意のある、有害な",
        family: "malice / maliciously / maliciousness",
        tips: "网络安全与IT高频：malicious software/code（恶意软件/代码），malicious intent（恶意企图）。",
        desc: "Software has malicious code."
    },
    {
        word: "unanimously",
        pos: "副",
        ipa: "/juːˈnænɪməsli/",
        cn: "全体一致地，无异议地",
        jp: "満場一致で、全員一致で",
        family: "unanimous / unanimity",
        tips: "董事会与表决高频：unanimously approved/voted（全体一致批准/投票）。",
        desc: "They unanimously approved it."
    },
    {
        word: "dispel",
        pos: "動",
        ipa: "/dɪˈspel/",
        cn: "驱散，消除（疑虑/谣言）",
        jp: "（疑惑・噂などを）払拭する、追い払う",
        family: "dispelled / dispelling",
        tips: "公关与沟通高频：dispel rumors/fears/doubts（消除谣言/恐惧/疑虑）。",
        desc: "He tried to dispel doubts."
    },
    {
        word: "captivated",
        pos: "形/動",
        ipa: "/ˈkæptɪveɪtɪd/",
        cn: "被深深吸引的，迷住的",
        jp: "魅了された、心奪われた",
        family: "captivate / captivating / captivation",
        tips: "演说与文化活动高频：captivated audience/listeners（被吸引的观众/听众）。",
        desc: "The audience was captivated."
    },
    {
        word: "withstand",
        pos: "動",
        ipa: "/wɪðˈstænd/",
        cn: "经受住，承受",
        jp: "耐える、持ちこたえる",
        family: "withstood / withstanding",
        tips: "材料与建筑高频：withstand pressure/heat/scrutiny（经受住压力/高温/审查）。",
        desc: "It can withstand heat."
    },
    {
        word: "harsh",
        pos: "形",
        ipa: "/hɑːrʃ/",
        cn: "严酷的，恶劣的，严厉的",
        jp: "厳しい、過酷な",
        family: "harshly / harshness",
        tips: "气候与评价高频：harsh weather/conditions/criticism（恶劣的天气/条件/严厉的批评）。",
        desc: "Winters here are harsh."
    },
    {
        word: "tariff",
        pos: "名",
        ipa: "/ˈtærɪf/",
        cn: "关税，关税表",
        jp: "関税、税率表",
        family: "tariffs",
        tips: "国际贸易高频：impose tariffs（征收关税），import tariff（进口关税）。",
        desc: "High tariffs were imposed."
    },
    {
        word: "disruptive",
        pos: "形",
        ipa: "/dɪsˈrʌptɪv/",
        cn: "破坏性的，颠覆性的",
        jp: "破壊的な、混乱をもたらす",
        family: "disrupt / disruption / disruptively",
        tips: "科技与市场高频：disruptive technology/innovation（颠覆性技术/创新）。",
        desc: "It is a disruptive change."
    },
    {
        word: "semester",
        pos: "名",
        ipa: "/sɪˈmestər/",
        cn: "学期",
        jp: "（2学期制の）学期",
        family: "semesters",
        tips: "教育与培训高频：fall/spring semester（秋季/春季学期）。",
        desc: "The fall semester started."
    },
    {
        word: "abstracts",
        pos: "名",
        ipa: "/ˈæbstrækts/",
        cn: "摘要，概要（复数）",
        jp: "抄録、要約（複数）",
        family: "abstract / abstraction",
        tips: "学术与展会高频：submit research abstracts（提交研究论文摘要）。",
        desc: "Read the research abstracts."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "malicious",
        category: "简单",
        stem: "The IT department installed a firewall to block ________ software from infecting company computers.",
        options: ["malicious", "unanimously", "harsh", "disruptive"],
        correct: "malicious",
        explanations: {
            guide: "网络安全形容词考点。修饰 software，结合防止电脑被感染，选 malicious（恶意的）。",
            family: "malicious (adj.恶意的) | unanimously (adv.一致地) | harsh (adj.严酷的) | disruptive (adj.破坏性的)。",
            details: "malicious software 指恶意软件（Malware）。其余选项与保护电脑免受病毒侵袭的语义不符。",
            cn: "IT 部门安装了防火墙，以防止恶意软件感染公司电脑。",
            jp: "IT部門は、悪意のある（malicious）ソフトウェアが会社のコンピュータに感染するのを防ぐためにファイアウォールを設置しました。"
        }
    },
    {
        id: 2,
        target: "semester",
        category: "简单",
        stem: "University students must register for their elective courses before the start of the spring ________.",
        options: ["semester", "tariff", "abstracts", "dispel"],
        correct: "semester",
        explanations: {
            guide: "学术教育名词考点。spring ________ 属于教育场景高频词组，表达“春季学期”，选 semester。",
            family: "semester (n.学期) | tariff (n.关税) | abstracts (n.摘要) | dispel (v.消除)。",
            details: "spring semester 意为春季学期。tariff（关税）、abstracts（摘要）均非学制时间概念。",
            cn: "大学生必须在春季学期开始前注册其选修课程。",
            jp: "大学生は春学期（semester）の開始前に選択科目の履修登録をしなければなりません。"
        }
    },
    {
        id: 3,
        target: "harsh",
        category: "简单",
        stem: "Outdoor workers were given protective gear to shield them from the ________ winter cold.",
        options: ["harsh", "unanimously", "captivated", "malicious"],
        correct: "harsh",
        explanations: {
            guide: "气象形容词考点。修饰 winter cold（冬季严寒），表达“严酷的/恶劣的”，选 harsh。",
            family: "harsh (adj.严酷的/恶劣的) | unanimously (adv.一致地) | captivated (adj.被吸引的) | malicious (adj.恶意的)。",
            details: "harsh winter cold 意为严酷的冬日严寒。unanimously 是副词，不能作名词 cold 的前置定语。",
            cn: "户外工人获得了防护装备，以保护他们免受冬日严酷寒冷的侵袭。",
            jp: "屋外作業者には、冬の厳しい（harsh）寒さから身を守るための防寒具が支給されました。"
        }
    },
    {
        id: 4,
        target: "dispel",
        category: "简单",
        stem: "The spokesperson called a press conference to ________ rumors about the company's financial trouble.",
        options: ["dispel", "withstand", "abstracts", "tariff"],
        correct: "dispel",
        explanations: {
            guide: "公关动词考点。to 后面接动词原形，结合消除关于财务危机的谣言（rumors），选 dispel（驱散/消除）。",
            family: "dispel (v.驱散/消除) | withstand (v.经受住) | abstracts (n.摘要) | tariff (n.关税)。",
            details: "dispel rumors 属于公关高频固定搭配，意为辟谣/消除传言。abstracts 是名词，不能跟在不定式 to 后作谓语。",
            cn: "发言人召开新闻发布会，以消除关于公司财务危机的谣言。",
            jp: "報道官は会社の財政難に関する噂を払拭する（dispel）ために記者会見を開きました。"
        }
    },
    {
        id: 5,
        target: "tariff",
        category: "简单",
        stem: "Government officials decided to reduce the import ________ on foreign electronics to encourage trade.",
        options: ["tariff", "semester", "disruptive", "malicious"],
        correct: "tariff",
        explanations: {
            guide: "国际贸易名词考点。import ________ 属于贸易高频词组，表达降低外国电子产品的“进口关税”，选 tariff。",
            family: "tariff (n.关税) | semester (n.学期) | disruptive (adj.破坏性的) | malicious (adj.恶意的)。",
            details: "import tariff 意为进口关税。semester（学期）、disruptive（破坏性的）与国际贸易税费无干。",
            cn: "政府官员决定降低对外国电子产品的进口关税，以鼓励贸易。",
            jp: "政府高官は貿易を促進するため、外国製電子製品に対する輸入関税（tariff）を引き下げることを決定しました。"
        }
    },
    {
        id: 6,
        target: "withstand",
        category: "简单",
        stem: "The new building was specifically designed to ________ severe earthquakes and hurricane-force winds.",
        options: ["withstand", "dispel", "captivated", "harsh"],
        correct: "withstand",
        explanations: {
            guide: "建筑与工程动词考点。designed to 后面接动词原形，结合经受住强烈地震（severe earthquakes），选 withstand（经受住/抵抗）。",
            family: "withstand (v.经受住) | dispel (v.消除) | captivated (adj.被迷住的) | harsh (adj.严酷的)。",
            details: "withstand earthquakes 意为经受住地震考验。captivated 和 harsh 非动词原形，不能作不定式宾语。",
            cn: "这座新建筑经过专门设计，能够经受住强震和飓风级强风的考验。",
            jp: "新しい大楼は、激しい地震やハリケーン級の強風にも耐える（withstand）よう特別に設計されました。"
        }
    },
    {
        id: 7,
        target: "unanimously",
        category: "中等",
        stem: "The board of directors voted ________ to accept the takeover offer from the multinational corporation.",
        options: ["unanimously", "maliciously", "harshly", "disruptively"],
        correct: "unanimously",
        explanations: {
            guide: "表决副词考点。voted ________ 表达董事会“全体一致地/无异议地”投票接受收购提案，选 unanimously。",
            family: "unanimously (adv.一致地) | maliciously (adv.恶意地) | harshly (adv.严厉地) | disruptively (adv.破坏性地)。",
            details: "voted unanimously 属于托业经典表决词组。maliciously（恶意地）、harshly（严厉地）不合商业决策语境。",
            cn: "董事会一致投票决定接受来自该跨国公司的收购要约。",
            jp: "取締役会は多国籍企業からの買収提案を受け入れることを満場一致で（unanimously）可決しました。"
        }
    },
    {
        id: 8,
        target: "captivated",
        category: "中等",
        stem: "The speaker's inspiring presentation ________ the audience from start to finish.",
        options: ["captivated", "withstood", "dispelled", "abstracted"],
        correct: "captivated",
        explanations: {
            guide: "演说动词过去式考点。表达鼓舞人心的演讲深深“吸引了/迷住了”全场听众，选 captivated。",
            family: "captivated (v-ed/adj.深深吸引了) | withstood (v-ed经受住) | dispelled (v-ed驱散) | abstracted (v-ed摘要/抽象化)。",
            details: "captivated the audience 意为吸引了听众。withstood（经受住）、dispelled（驱散）在此处动宾搭配不当。",
            cn: "演讲者鼓舞人心的演讲从头到尾深深吸引了听众。",
            jp: "講演者のインスピレーションを与えるプレゼンテーションは、最初から最後まで観客を魅了しました（captivated）。"
        }
    },
    {
        id: 9,
        target: "disruptive",
        category: "中等",
        stem: "Software engineers developed a ________ technology that threatens to transform the entire automotive industry.",
        options: ["disruptive", "harsh", "unanimous", "captivated"],
        correct: "disruptive",
        explanations: {
            guide: "行业创新形容词。________ technology 属于科技与商业经典表达，意为“颠覆性/破坏性”技术，选 disruptive。",
            family: "disruptive (adj.颠覆性的/破坏性的) | harsh (adj.严酷的) | unanimous (adj.一致的) | captivated (adj.被吸引的)。",
            details: "disruptive technology 意为颠覆性技术。unanimous 是形容词（全体一致的），不能用来修饰技术属性。",
            cn: "软件工程师开发出一种颠覆性技术，有可能变革整个汽车行业。",
            jp: "ソフトウェアエンジニアは、自動車産業全体を変革する可能性を秘めた破壊的な（disruptive）技術を開発しました。"
        }
    },
    {
        id: 10,
        target: "abstracts",
        category: "中等",
        stem: "Conference organizers asked researchers to submit short ________ of their papers for review.",
        options: ["abstracts", "tariffs", "semesters", "disruptions"],
        correct: "abstracts",
        explanations: {
            guide: "学术会议名词考点。submit short ________ 结合论文评估（review of papers），选 abstracts（论文摘要）。",
            family: "abstracts (n.复数摘要) | tariffs (n.关税) | semesters (n.学期) | disruptions (n.中断)。",
            details: "submit research abstracts 意为提交研究论文摘要。tariffs（关税）、semesters（学期）均非论文评审提交的文件格式。",
            cn: "会议组织者要求研究人员提交其论文的简短摘要以供审查。",
            jp: "会議の主催者は研究者に対し、査読のために論文の短い要約（abstracts）を提出するよう求めました。"
        }
    },
    {
        id: 11,
        target: "harsh",
        category: "中等",
        stem: "Management received severe criticism for implementing ________ disciplinary policies across the department.",
        options: ["harsh", "unanimous", "captivated", "abstract"],
        correct: "harsh",
        explanations: {
            guide: "纪律与规章形容词。修饰 policies（政策），结合招致严厉批评的后果，选 harsh（严厉的/严酷的）。",
            family: "harsh (adj.严厉的/严酷的) | unanimous (adj.一致的) | captivated (adj.被吸引的) | abstract (adj.抽象的)。",
            details: "harsh disciplinary policies 意为严厉的纪律规章。unanimous（一致的）、abstract（抽象的）均破坏批评语境。",
            cn: "管理层因在全部门推行严厉的纪律政策而受到严厉批评。",
            jp: "経営陣は、部門全体で厳しい（harsh）戒律方針を実施したことで深刻な批判を受けました。"
        }
    },
    {
        id: 12,
        target: "dispel",
        category: "中等",
        stem: "Strong quarterly sales figures helped to ________ concerns about the firm's long-term stability.",
        options: ["dispel", "withstand", "captivate", "disrupt"],
        correct: "dispel",
        explanations: {
            guide: "商务沟通与风险管理动词。helped to 后面接动词原形，结合消除对长期稳定性的顾虑（concerns），选 dispel。",
            family: "dispel (v.消除/驱散) | withstand (v.经受住) | captivate (v.吸引) | disrupt (v.打乱)。",
            details: "dispel concerns 意为消除顾虑。withstand（经受住）、captivate（吸引）均无法与 concerns 构成消除顾虑的动宾关系。",
            cn: "强劲的季度销售数据有助于消除人们对该公司长期稳定性的顾虑。",
            jp: "好調な四半期売上数字は、会社の長期的な安定性に対する懸念を払拭する（dispel）のに役立ちました。"
        }
    },
    {
        id: 13,
        target: "withstand",
        category: "困难",
        stem: "Materials testing confirmed that the synthetic fabric could ________ extreme heat without degrading.",
        options: ["withstand", "dispel", "captivate", "abstract"],
        correct: "withstand",
        explanations: {
            guide: "材料性能动词考点。could 后面接动词原形，结合经受住高温（extreme heat）且不降解，选 withstand。",
            family: "withstand (v.经受住/耐受) | dispel (v.消除) | captivate (v.吸引) | abstract (v.提取摘要)。",
            details: "withstand extreme heat 意为耐受高温。dispel（消除）、captivate（吸引）均非材料耐受物理特性的及物动词。",
            cn: "材料测试证实，这种合成面料能够经受住高温而不发生退化。",
            jp: "材料テストにより、その合成生地は劣化することなく極端な熱に耐える（withstand）ことができることが確認されました。"
        }
    },
    {
        id: 14,
        target: "tariff",
        category: "困难",
        stem: "Trade analysts warned that imposing additional ________ on foreign steel could increase domestic manufacturing costs.",
        options: ["tariffs", "semesters", "abstracts", "disruptions"],
        correct: "tariffs",
        explanations: {
            guide: "国际贸易高阶名物考点。imposing additional ________ 属于贸易专有名词搭配，表达对进口钢铁“征收关税”，用复数 tariffs。",
            family: "tariffs (n.复数关税) | semesters (n.学期) | abstracts (n.摘要) | disruptions (n.中断)。",
            details: "impose tariffs 属于托业经典贸易动宾表达，意为征收关税。semesters（学期）、abstracts（摘要）均非征税对象。",
            cn: "贸易分析师警告称，对外国钢铁征收额外关税可能会推高国内制造成本。",
            jp: "貿易アナリストは、外国製鋼材に追加関税（tariffs）を課すと国内の製造コストが上昇する可能性があると警告しました。"
        }
    },
    {
        id: 15,
        target: "unanimously",
        category: "困难",
        stem: "The city council's decision to approve the new public park project was supported ________ by all members.",
        options: ["unanimously", "unanimous", "disruptively", "maliciously"],
        correct: "unanimously",
        explanations: {
            guide: "副词修饰动词考点。was supported ________ by all members 结构中，用副词修饰过去分词 supported，表达受到“全体一致地”支持，选 unanimously。",
            family: "unanimously (adv.全体一致地) | unanimous (adj.一致的) | disruptively (adv.破坏性地) | maliciously (adv.恶意地)。",
            details: "was supported unanimously 意为获得了一致支持。unanimous 是形容词，不能在被动语态动词后作状语。",
            cn: "市议会批准新建公共公园项目的决定得到了全体议员一致支持。",
            jp: "新しい公園プロジェクトを承認する市議会の決定は、すべての議員によって満場一致で（unanimously）支持されました。"
        }
    },
    {
        id: 16,
        target: "malicious",
        category: "困难",
        stem: "Cybersecurity experts discovered that the data breach was caused by a ________ attempt to access private customer records.",
        options: ["malicious", "disruptive", "harsh", "unanimous"],
        correct: "malicious",
        explanations: {
            guide: "网络犯罪形容词。修饰 attempt（企图/尝试），表达非法窃取数据的“恶意的/蓄意的”企图，选 malicious。",
            family: "malicious (adj.恶意的) | disruptive (adj.破坏性的) | harsh (adj.严酷的) | unanimous (adj.一致的)。",
            details: "malicious attempt 意为蓄意/恶意的企图。与非法侵入数据库窃取客户隐私记录的行为精准吻合。",
            cn: "网络安全专家发现，数据泄露是由非法访问私人客户记录的恶意企图引起的。",
            jp: "サイバーセキュリティの専門家は、データ侵害が非公開の顧客記録にアクセスしようとする悪意のある（malicious）試みによって引き起こされたことを発見しました。"
        }
    },
    {
        id: 17,
        target: "captivated",
        category: "困难",
        stem: "Listeners were completely ________ by the pianist's emotional performance at the national concert hall.",
        options: ["captivated", "dispelled", "withstood", "abstracted"],
        correct: "captivated",
        explanations: {
            guide: "表语形容词/被动语态考点。were completely ________ 描述听众被钢琴家的精彩演奏“深深吸引/打动”，选 captivated。",
            family: "captivated (v-ed/adj.被深深吸引的) | dispelled (v-ed被驱散的) | withstood (v-ed经受住的) | abstracted (v-ed抽象化的)。",
            details: "were captivated by... 意为被……深深吸引。dispelled（被驱散）、withstood（被经受住）均非描述音乐吸引观众的表语状态。",
            cn: "在国家音乐厅，听众完全被钢琴家富有情感的演奏深深打动。",
            jp: "国立コンサートホールでのピアニストの情熱的な演奏に、聴衆はすっかり魅了されました（captivated）。"
        }
    },
    {
        id: 18,
        target: "disruptive",
        category: "困难",
        stem: "Regulators are investigating whether the firm's aggressive pricing strategy is having a ________ effect on local competition.",
        options: ["disruptive", "malicious", "harsh", "unanimous"],
        correct: "disruptive",
        explanations: {
            guide: "高阶市场监管形容词。a ________ effect 结合对市场竞争造成冲击混乱，选 disruptive（破坏性的/扰乱秩序的）。",
            family: "disruptive (adj.破坏性的/扰乱秩序的) | malicious (adj.恶意的) | harsh (adj.严酷的) | unanimous (adj.一致的)。",
            details: "disruptive effect on competition 属于反垄断与监管高频短语，意为对正常市场竞争秩序造成破坏/干扰。malicious 侧重黑客/恶意心理，不用于形容定价策略后果。",
            cn: "监管机构正在调查该公司激进的定价策略是否对当地竞争秩序造成了破坏性影响。",
            jp: "規制当局は、同社の積極的な価格設定戦略が地元の競争環境に破壊的な（disruptive）影響を与えているかどうかを調査しています。"
        }
    }
];