// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag281-290.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "exactly",
        pos: "副",
        ipa: "/ɪɡˈzæktli/",
        cn: "确切地，精确地；完全地",
        jp: "正確に、まさに、ちょうど",
        family: "exact / exactness / exacting",
        tips: "用于确认细节或核对数据。常考 exactly the same（完全一样）、know exactly what...（确切知道……）。在阅读中常与 precisely 替换。",
        desc: "We know exactly what to do."
    },
    {
        word: "ideal",
        pos: "形/名",
        ipa: "/aɪˈdiːəl/",
        cn: "理想的，完美的；理想",
        jp: "理想的な、最適な；理想",
        family: "ideally / idealism",
        tips: "选址、招聘或方案评估高频形容词。常考搭配 ideal location for...（……的理想位置）、ideal candidate（理想的人选）。在阅读中常与 perfect 替换。",
        desc: "The location is ideal."
    },
    {
        word: "neighborhood",
        pos: "名",
        ipa: "/ˈneɪbərhʊd/",
        cn: "邻里，街区，附近区域",
        jp: "近所、地域、近隣",
        family: "neighbor / neighboring",
        tips: "商业选址与社区关系高频名词。常考 neighboring countries（邻国/周边国家）。在阅读中常考 local neighborhood（当地社区）。",
        desc: "It is a quiet neighborhood."
    },
    {
        word: "traditional",
        pos: "形",
        ipa: "/trəˈdɪʃənl/",
        cn: "传统的，惯例的",
        jp: "伝統的な、従来の",
        family: "tradition / traditionally / traditionalist",
        tips: "企业文化与市场定位常用形容词。常考 traditional methods（传统方法）、traditional marketing（传统营销）。",
        desc: "We use traditional methods."
    },
    {
        word: "explore",
        pos: "動",
        ipa: "/ɪkˈsplɔːr/",
        cn: "探索，开拓，研究",
        jp: "探索する、調査する、開拓する",
        family: "exploration / exploratory / explorer",
        tips: "商业拓展与战略规划核心动词。常考 explore new markets（开拓新市场）、explore possibilities（探讨可能性）。常与 investigate 或 look into 替换。",
        desc: "We want to explore new markets."
    },
    {
        word: "appropriate",
        pos: "形",
        ipa: "/əˈprəʊpriət/",
        cn: "合适的，恰当的",
        jp: "適切な、ふさわしい",
        family: "appropriately / appropriateness / inappropriate",
        tips: "商务沟通、行政规章与着装规范高频形容词。常考 appropriate attire（得体的着装）、appropriate action（适当的行动）。其副词 appropriately（恰当地）也极常考。",
        desc: "Wear appropriate clothes."
    },
    {
        word: "departure",
        pos: "名",
        ipa: "/dɪˈpɑːrtʃər/",
        cn: "出发，离开；离职",
        jp: "出発、離職、逸脱",
        family: "depart / departed / departing",
        tips: "差旅通勤与人事变动核心名词。常考 departure gate（登机口）、scheduled departure（计划出发时间）；在人事变动中指离职，如 departure from the company。常与 arrival（抵达）相对。",
        desc: "Check the departure time."
    },
    {
        word: "quantity",
        pos: "名",
        ipa: "/ˈkwɑːntəti/",
        cn: "数量，分量",
        jp: "数量、分量、量",
        family: "quantities / quantitative / quantify",
        tips: "采购、库存管理与供应链核心名词。常考 in large quantities（大量地）。在阅读中，经常与 amount 相互进行同义替换。注意区别 quality（质量）。",
        desc: "We ordered a large quantity."
    },
    {
        word: "minimum",
        pos: "名/形",
        ipa: "/ˈmɪnɪməm/",
        cn: "最小值，最低限度；最小的，最低的",
        jp: "最小限、最低限；最小の、最低限の",
        family: "minimal / minimize / minimally",
        tips: "财务核算与政策规定高频词。常考 minimum wage（最低工资）、minimum requirement（最低要求）。其反义词为 maximum（最大值/最高的）。",
        desc: "The minimum requirement is high."
    },
    {
        word: "identify",
        pos: "動",
        ipa: "/aɪˈdentɪfaɪ/",
        cn: "识别，确认，找出",
        jp: "特定する、確認する、識別する",
        family: "identification / identical / identified",
        tips: "问题诊断、市场分析与安全审查核心动词。常考搭配 identify glitches / errors（找出故障/错误）、identify target customers（确定目标客户）。在语法中，其名词形式 identification 常考 photo identification（带照片的身份证件，简称 photo ID）。",
        desc: "Please identify the problem."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "exactly",
        category: "简单",
        stem: "The delivery of the new office appliances arrived at ________ three o'clock, just as scheduled in the memo.",
        options: ["exactly", "explore", "neighborhood", "office"],
        correct: "exactly",
        explanations: {
            guide: "修饰时间点及句子的副词语义。空格后是具体的时间点 three o'clock，需填入副词作状语，表示“准点”。",
            family: "exactly (adv.确切地/准时地) | explore (v.探索) | neighborhood (n.街区) | office (n.办公室)。",
            details: "exactly three o'clock 意为“准准的三点整”，符合日常物流递送与行政通知的日程核对场景。其他选项在词性或语义上均不匹配。",
            cn: "新办公电器的配送在三点整准时送达，正如备忘录中安排的那样。",
            jp: "新しいオフィス用電化製品の配送は、社内文書の予定通り、ちょうど（exactly）3時に到着しました。"
        }
    },
    {
        id: 2,
        target: "ideal",
        category: "简单",
        stem: "With its scenic views and spacious conference halls, this resort is an ________ location for corporate retreats.",
        options: ["ideal", "traditional", "departure", "weekend"],
        correct: "ideal",
        explanations: {
            guide: "修饰名词的形容词词义辨析。空格前有不定冠词 an（提示首字母为元音音素），后有名词 location（位置），结合度假村优势选 ideal。",
            family: "ideal (adj.理想的) | traditional (adj.传统的) | departure (n.出发) | weekend (n.周末)。",
            details: "an ideal location 意为“一个理想的位置”。度假村风景优美且有宽敞的会议厅，自然是举办企业员工拓展（corporate retreats）的完美场所。其他选项不合逻辑。",
            cn: "凭借其优美的风景和宽敞的会议厅，这个度假村是企业员工拓展活动的理想场所。",
            jp: "美しい景色と広々とした会議室を備えたこのリゾートは、社員研修旅行にとって理想的な（ideal）場所です。"
        }
    },
    {
        id: 3,
        target: "neighborhood",
        category: "简单",
        stem: "The real estate developer is planning to build a new commercial complex in this quiet ________.",
        options: ["neighborhood", "explore", "appropriate", "proposed"],
        correct: "neighborhood",
        explanations: {
            guide: "介词宾语名词中心语辨析。空格前有指示代词 this 和形容词 quiet（安静的），此位置需填入名词，选 neighborhood。",
            family: "neighborhood (n.邻里/街区) | explore (v.探索) | appropriate (adj.合适的) | proposed (adj.被提议的)。",
            details: "in this quiet neighborhood 意为“在这个安静的街区”。房地产开发商打算在此建立新的商业综合体（commercial complex），逻辑关系完整。其他词性或语义不符。",
            cn: "房地产开发商正计划在这个安静的街区建设一个新的商业综合体。",
            jp: "不動産開発会社は、この静かな地域（neighborhood）に新しい商業複合施設を建設することを計画しています。"
        }
    },
    {
        id: 4,
        target: "explore",
        category: "简单",
        stem: "The executive committee decided to ________ new business opportunities in the biomedical industry.",
        options: ["explore", "quantity", "minimum", "closed"],
        correct: "explore",
        explanations: {
            guide: "动词不定式后的及物动词。to 后面要求接动词原形，结合宾语 new business opportunities（新的商业机会），选用 explore。",
            family: "explore (v.探索) | quantity (n.数量) | minimum (n./adj.最小值) | closed (adj.关闭的)。",
            details: "explore opportunities 意为“探索/开拓机会”，是企业高层决策与战略定位中的经典搭配。其他名词或形容词无法充当此处的动词原形。",
            cn: "执行委员会决定探索生物医学行业的新商业机会。",
            jp: "執行委員会は、バイオメディカル業界における新しいビジネス機会を模索（explore）することを決定しました。"
        }
    },
    {
        id: 5,
        target: "departure",
        category: "简单",
        stem: "Passengers are advised to check their flight ________ time on the digital information board.",
        options: ["departure", "identify", "traditional", "morning"],
        correct: "departure",
        explanations: {
            guide: "复合名词定语搭配。空格与后面的名词 time 组合，结合 passengers（乘客）和 flight（航班）的交通出行语境，选名词 departure 作定语。",
            family: "departure (n.出发/起飞) | identify (v.识别) | traditional (adj.传统的) | morning (n.早上)。",
            details: "flight departure time 意为“航班起飞时间”。是机场、车站等交通枢纽场景中的超高频金牌词组。其余选项不构成此类专用交通术语。",
            cn: "旅客被建议在数字化信息牌上核对他们的航班起飞时间。",
            jp: "乗客の皆様は、デジタル案内板でフライトの出発（departure）時刻を確認することをお勧めします。"
        }
    },
    {
        id: 6,
        target: "quantity",
        category: "简单",
        stem: "The purchasing department ordered a large ________ of office supplies to get a volume discount.",
        options: ["quantity", "exactly", "appropriate", "prior"],
        correct: "quantity",
        explanations: {
            guide: "限定词修饰的名词中心语。空格前有 a large，后接介词 of，此处需要填入名词以表示“大量的”，选 quantity。",
            family: "quantity (n.数量) | exactly (adv.确切地) | appropriate (adj.合适的) | prior (adj.先前的)。",
            details: "a large quantity of 意为“大量的……”，多用于描述采购、库存管理中的订货规模。其余选项词性不符或无法构成此特定数量搭配。",
            cn: "采购部订购了大量的办公用品，以获得大宗购买折扣。",
            jp: "購買部は、ボリュームディスカウント（大量購入割引）を適用するために、オフィス用品を大量（quantity）に注文しました。"
        }
    },
    {
        id: 7,
        target: "traditional",
        category: "中等",
        stem: "While we use modern software, some clients still prefer ________ billing methods for their records.",
        options: ["traditional", "exactly", "identify", "prestigious"],
        correct: "traditional",
        explanations: {
            guide: "修饰名词的形容词词义辨析。空格用于修饰 billing methods（计费/账单方式），与前文的 modern software（现代软件）形成对比，选 traditional。",
            family: "traditional (adj.传统的) | exactly (adv.精确地) | identify (v.识别) | prestigious (adj.有声望的)。",
            details: "traditional billing methods 意为“传统的账单寄送方式”。与现代化的数字手段形成反差，属于典型的企业数字化转型过程中的客户服务问题描述。",
            cn: "虽然我们使用现代软件，但一些客户为了记录，仍然更喜欢传统的账单方式。",
            jp: "当社は最新のソフトウェアを使用していますが、一部のクライアントは記録管理のために従来の（traditional）請求方法を依然として好んでいます。"
        }
    },
    {
        id: 8,
        target: "appropriate",
        category: "中等",
        stem: "The human resources manager will take ________ action to resolve the disputes between department heads.",
        options: ["appropriate", "ideal", "explore", "voluntary"],
        correct: "appropriate",
        explanations: {
            guide: "修饰名词宾语的形容词辨析。空格修饰名词 action（行动），结合解决部门经理之间纠纷（resolve disputes）这一日常HR语境，选用 appropriate。",
            family: "appropriate (adj.适当的/恰当的) | ideal (adj.理想的) | explore (v.探索) | voluntary (adj.自愿的)。",
            details: "take appropriate action 意为“采取适当措施”，是企业合规、危机管理和人事调解中极为频繁出现的行业标配词组。其余选项不符语境。",
            cn: "人力资源部经理将采取适当行动，以解决部门主管之间的纠纷。",
            jp: "人事マネージャーは、部門長間の紛争を解決するために適切な（appropriate）措置を講じる予定です。"
        }
    },
    {
        id: 9,
        target: "minimum",
        category: "中等",
        stem: "Applicants for the senior research position must have a ________ of three years of experience in the field.",
        options: ["minimum", "departure", "traditional", "intensive"],
        correct: "minimum",
        explanations: {
            guide: "名词搭配及限定语义辨析。空格前有不定冠词 a，后接介词 of，此处需要填入名词表示“最低限度”，选 minimum。",
            family: "minimum (n.最低限度) | departure (n.离职/出发) | traditional (adj.传统的) | intensive (adj.密集的)。",
            details: "a minimum of... 意为“至少/最低限度是……”，是求职招聘中评估候选人工作资历、背景（experience）的标准任职要求术语。",
            cn: "高级研究职位的申请人必须在该领域拥有至少三年的工作经验。",
            jp: "シニア研究職の応募者は、この分野で最低限（minimum）3年の経験を有している必要があります。"
        }
    },
    {
        id: 10,
        target: "identify",
        category: "中等",
        stem: "The compliance officer was hired to ________ potential legal risks in our current marketing contracts.",
        options: ["identify", "exactly", "neighborhood", "proposed"],
        correct: "identify",
        explanations: {
            guide: "不定式作目的状语。To 后面必须接及物动词原形，结合宾语 legal risks（法律风险）选 identify。",
            family: "identify (v.确认/找出) | exactly (adv.完全地) | neighborhood (n.邻区) | proposed (adj.提议的)。",
            details: "identify potential legal risks 意为“找出潜在的法律风险”，是合规审查、合同管理中的核心描述语。其余选项词性不符。",
            cn: "雇用合规官是为了找出我们目前营销合同中潜在的法律风险。",
            jp: "コンプライアンス担当者は、現在のマーケティング契約における潜在的な法的リスクを特定（identify）するために雇われました。"
        }
    },
    {
        id: 11,
        target: "ideal",
        category: "中等",
        stem: "The hiring manager noted that the ________ candidate should possess a university degree in business administration.",
        options: ["ideal", "exactly", "departure", "lucrative"],
        correct: "ideal",
        explanations: {
            guide: "名词前的修饰性形容词辨析。空格用于修饰名词 candidate（候选人），结合高标准的背景要求，选 ideal。",
            family: "ideal (adj.理想的/完美的) | exactly (adv.确切地) | departure (n.离职) | lucrative (adj.获利的)。",
            details: "the ideal candidate 意为“理想人选/最合适人选”，是招聘启事、HR筛选简历时最高频的行话之一。其他干扰项无法构成合理的修饰关系。",
            cn: "招聘经理指出，理想的候选人应具备工商管理专业的大学学位。",
            jp: "採用マネージャーは、理想的な（ideal）候補者は経営学の大学学位を所持しているべきだと述べました。"
        }
    },
    {
        id: 12,
        target: "explore",
        category: "中等",
        stem: "Our marketing research firm is currently ________ different ways to improve online customer engagement.",
        options: ["exploring", "explore", "exploration", "explored"],
        correct: "exploring",
        explanations: {
            guide: "动词时态在特定语境下的变形。主语为 firm，前面有助动词 is，且有 currently（目前），要求填入现在分词构成现在进行时，选 exploring。",
            family: "exploring (v-ing研究/探讨) | explore (v.探索) | exploration (n.探索) | explored (v-ed已探索)。",
            details: "is currently exploring different ways 意为“目前正在探讨不同的方法”。表示当前正在进行的市场调研动作。其他词性不符合进行时结构。",
            cn: "我们的市场研究公司目前正在探讨提高在线客户参与度的不同方法。",
            jp: "当社のマーケティング調査会社は現在、オンラインの顧客エンゲージメントを向上させるためのさまざまな方法を模索（exploring）しています。"
        }
    },
    {
        id: 13,
        target: "exactly",
        category: "困难",
        stem: "The financial auditor demanded an ________ calculation of the tax subsidies received by the subsidiary.",
        options: ["exact", "exactly", "exacting", "exactness"],
        correct: "exact",
        explanations: {
            guide: "修饰名词的形容词词性选择。空格位于不定冠词 an 与名词 calculation（计算）之间，需填入形容词作定语，选 exact。",
            family: "exact (adj.精确的) | exactly (adv.精确地) | exacting (adj.苛刻的) | exactness (n.精确性)。",
            details: "an exact calculation 意为“精确的计算”。在审计、财务申报（tax subsidies）中，要求数据的绝对精确。exacting 意为“苛求的/费劲的”，不用于修饰数据计算本身。",
            cn: "财务审计师要求对子公司收到的税收补贴进行精确计算。",
            jp: "財務監査人は、子会社が受け取った税制上の補助金について、正確な（exact）計算を求めました。"
        }
    },
    {
        id: 14,
        target: "neighborhood",
        category: "困难",
        stem: "The local council is trying to attract retail firms from ________ cities to boost the local economy.",
        options: ["neighboring", "neighborhood", "neighbor", "neighborhoods"],
        correct: "neighboring",
        explanations: {
            guide: "修饰名词的形容词派生考核。空格修饰复数名词 cities（城市），需填入表示“邻近的”形容词，选用分词形容词 neighboring。",
            family: "neighboring (adj.邻近的) | neighborhood (n.街区) | neighbor (n.邻居) | neighborhoods (n-pl街区)。",
            details: "neighboring cities 意为“邻近的城市/周边的城市”，常用于区域经济分析、地方招商引资（local council）的语境。名词 neighborhood 在此无法充当定语修饰 cities。",
            cn: "市议会正试图吸引邻近城市的零售企业，以提振当地经济。",
            jp: "地方議会は、地域経済を活性化させるために、近隣の（neighboring）都市から小売企業を誘致しようとしています。"
        }
    },
    {
        id: 15,
        target: "traditional",
        category: "困难",
        stem: "The annual holiday celebration is ________ held in the grand ballroom of the renovated corporate park.",
        options: ["traditionally", "traditional", "tradition", "traditionalist"],
        correct: "traditionally",
        explanations: {
            guide: "被动语态中的修饰副词。空格位于助动词 is 与过去分词 held（举行）之间，作状语修饰动词，需填入副词，选 traditionally。",
            family: "traditionally (adv.传统上) | traditional (adj.传统的) | tradition (n.传统) | traditionalist (n.传统主义者)。",
            details: "is traditionally held in... 意为“传统上是在……举行的/依惯例是在……举办”。常用于公司周年、节日庆典（annual celebration）的历史沿袭介绍中。其他词性不符语法结构。",
            cn: "年度节日庆祝活动传统上在翻修后的公司园区的宴会大厅举行。",
            jp: "年次の祝日の祝賀会は、改装されたオフィスパークのグランドボールルームで伝統的に（traditionally）開催されています。"
        }
    },
    {
        id: 16,
        target: "appropriate",
        category: "困难",
        stem: "The public relations team responded ________ to the media inquiries regarding the database glitches.",
        options: ["appropriately", "appropriate", "appropriateness", "appropriated"],
        correct: "appropriately",
        explanations: {
            guide: "修饰动词的副词状语。空格位于不及物动词 responded 之后，用于修饰回复的态度与策略，需填入副词，选 appropriately。",
            family: "appropriately (adv.恰当地) | appropriate (adj.适当的) | appropriateness (n.适当性) | appropriated (v-ed拨出/占用)。",
            details: "responded appropriately to... 意为“对……作出了恰当的回应”。在公关团队（PR team）应对媒体关于系统故障（glitches）的质询时，妥善合规的回答是标准危机处理逻辑。",
            cn: "公共关系团队对媒体关于数据库故障的咨询作出了恰当的回应。",
            jp: "広報チームは、データベースの不具合に関するメディアからの問い合わせに適切に（appropriately）対応しました。"
        }
    },
    {
        id: 17,
        target: "minimum",
        category: "困难",
        stem: "The IT department implemented a new security grid to ________ the risk of unauthorized database entry.",
        options: ["minimize", "minimum", "minimal", "minimally"],
        correct: "minimize",
        explanations: {
            guide: "动词不定式后的及物动词原形。空格位于 to 之后，且后面带有宾语 the risk，此处必须填入及物动词原形，选 minimize（最小化/降到最低）。",
            family: "minimize (v.最小化) | minimum (n./adj.最小值) | minimal (adj.极少的) | minimally (adv.最低限度地)。",
            details: "minimize the risk 意为“将风险降至最低”。IT部门通过部署新安全网络（security grid）来防御未经授权的数据录入或入侵（unauthorized entry），完全符合数据安全逻辑。其他选项词性不符。",
            cn: "IT部门实施了新的安全网络，以将未经授权进入数据库的风险降至最低。",
            jp: "IT部門は、データベースへの不正なアクセス（entry）リスクを最小限に抑える（minimize）ために、新しいセキュリティグリッドを導入しました。"
        }
    },
    {
        id: 18,
        target: "identify",
        category: "困难",
        stem: "Security officers require all visitors to present valid photo ________ before entering the research facility.",
        options: ["identification", "identify", "identifiable", "identified"],
        correct: "identification",
        explanations: {
            guide: "修饰词后的名词宾语。空格前有修饰词 photo（照片），作 present 的宾语，需填入名词，选 identification 构成复合词。",
            family: "identification (n.身份证明) | identify (v.识别) | identifiable (adj.可识别的) | identified (v-ed已确认的)。",
            details: "photo identification 意为“带照片的身份证件”，是公共场所、安全机要设施（research facility）准入验证的最标准高频高阶术语，通常指身份证或护照。其余同族词无法构成此类复合专用名词。",
            cn: "安全官员要求所有访客在进入研究设施前出示有效的带照片的身份证件。",
            jp: "セキュリティ担当者は、すべての訪問者に対して、研究施設に入る前に有効な写真付き身分証明書（identification）を提示するよう求めています。"
        }
    }
];