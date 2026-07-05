// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data1-10.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "anyway",
        pos: "副",
        ipa: "/ˈenieweɪ/",
        cn: "无论如何，不管怎样，至少",
        jp: "とにかく、いずれにせよ、ともかく",
        family: "-",
        tips: "常作转折/补充，往往位于句首或句尾。在托业阅读中通常用来排除干扰或表达观点的最终确定。",
        desc: "The project was difficult, but we finished it on time anyway."
    },
    {
        word: "following",
        pos: "形/前",
        ipa: "/ˈfɑːloʊɪŋ/",
        cn: "在…之后；接下来的，随后的",
        jp: "〜に続いて、〜の後に；次の、それに続く",
        family: "follow / follower / preceding",
        tips: "“following + 名词” 常作介词，等同于 after，属于正式的商务写作风格；作形容词时，常与 the 连用，表示‘接下来的’。",
        desc: "Following the meeting, we had a short break."
    },
    {
        word: "refer",
        pos: "動",
        ipa: "/rɪˈfɜːr/",
        cn: "参考，提及，引荐，咨询",
        jp: "言及する、参照する、照会する、紹介する",
        family: "reference / referral / mention / consult",
        tips: "核心短语“refer to + 名词”（参考/指代）；“be referred to as”（被称为）；“refer A to B”（将A推荐给B）。",
        desc: "Please refer to the user manual for help."
    },
    {
        word: "employee",
        pos: "名",
        ipa: "/ɪmˈplɔɪiː/",
        cn: "员工，受雇者",
        jp: "従業員、社員、雇用者",
        family: "employ / employer / employment / staff",
        tips: "托业最爱复合词组：“employee benefits”（员工福利）；“employee training”（员工培训）；“employee engagement”（员工敬业度）。",
        desc: "Every new employee must attend the safety training."
    },
    {
        word: "offer",
        pos: "動/名",
        ipa: "/ˈɔːfər/",
        cn: "提供，提议，开价",
        jp: "提供する、申し出る、提案",
        family: "offered / offering / propose / refuse",
        tips: "重点句型：“offer to do”（主动提议做某事）；“offer sb sth”（提供某人某物）或“offer sth to sb”。名词常考“job offer”。",
        desc: "We are happy to offer you a discount today."
    },
    {
        word: "likely",
        pos: "形/副",
        ipa: "/ˈlaɪkli/",
        cn: "很有可能的；有希望地",
        jp: "〜しそうな、可能性が高い；おそらく",
        family: "likelihood / unlikely / probable",
        tips: "核心重点：“be likely to do”（极可能做某事）。副词用法“most likely”在真题中常作修饰词，指“极有可能”。",
        desc: "It is highly likely that the train will be late."
    },
    {
        word: "provide",
        pos: "動",
        ipa: "/prəˈvaɪd/",
        cn: "提供，供给，准备",
        jp: "提供する、供給する、用意する",
        family: "provision / provider / supply / withhold",
        tips: "托业高频结构必背：“provide A with B”（为A提供B）；“provide B for/to A”（把B提供给A）。",
        desc: "Our company will provide free lunch for all workers."
    },
    {
        word: "available",
        pos: "形",
        ipa: "/əˈveɪləbl/",
        cn: "可用的，可得到的，有空的",
        jp: "利用可能な、入手できる、手が空いている",
        family: "availability / unavailable / free / busy",
        tips: "常考结构：“be available to/for”（对…可用/有空）；“available online”（在线可获）。修饰名词时常置于名词后作后置定语。",
        desc: "The conference room is available this afternoon."
    },
    {
        word: "conference",
        pos: "名",
        ipa: "/ˈkɑːnfərəns/",
        cn: "会议，研讨会，协商会",
        jp: "会議、総会、カンファレンス",
        family: "confer / conferencing / meeting / convention",
        tips: "“attend a conference” (出席会议)；“hold a conference” (举行会议)；“teleconference/video conference” (视频会议)。",
        desc: "She will attend an international business conference."
    },
    {
        word: "purchase",
        pos: "動/名",
        ipa: "/ˈpɜːrtʃəs/",
        cn: "购买，采购；采购的物品",
        jp: "購入する、買い入れる；購入、購入品",
        family: "purchaser / purchasing / buy / sell",
        tips: "“make a purchase”（进行采购）；“purchase of sth”；“purchasing department”（采购部）。比 buy 更加正式。",
        desc: "You can purchase the tickets at the main counter."
    }
];

// 2. 背景真题难词库 (Context Background Difficult Words)
const helperVocabBank = [
    { word: "logistics", pos: "名", ipa: "/ləˈdʒɪstɪks/", cn: "物流，后勤", jp: "物流、ロジスティクス" },
    { word: "prospectus", pos: "名", ipa: "/prəˈspektəs/", cn: "招股书，内容说明书", jp: "目論見書、パンフレット" },
    { word: "itinerary", pos: "名", ipa: "/aɪˈtɪnəreri/", cn: "行程表，旅行日程", jp: "旅行日程表、旅程" },
    { word: "delegate", pos: "名", ipa: "/ˈdelɪɡət/", cn: "代表，会议代表", jp: "代表者、代理人" },
    { word: "compensation", pos: "名", ipa: "/ˌkɑːmpenˈseɪʃn/", cn: "补偿，薪酬", jp: "報酬、埋め合わせ" },
    { word: "regulatory", pos: "形", ipa: "/ˈreɡjələtɔːri/", cn: "监管的，调控的", jp: "規制の、取り占めの" },
    { word: "authorization", pos: "名", ipa: "/ˌɔːθərəˈzeɪʃn/", cn: "批准，授权书", jp: "許可、認可、承認" },
    { word: "subsidiary", pos: "名", ipa: "/səbˈsɪdieri/", cn: "子公司，辅助物", jp: "子会社、補助的な" },
    { word: "discrepancy", pos: "名", ipa: "/dɪˈskrepənsi/", cn: "不符之处，矛盾，差异", jp: "不一致、相違点" },
    { word: "procurement", pos: "名", ipa: "/prəˈkjʊrmənt/", cn: "采购，获得", jp: "調達、入手" },
    { word: "onboarding", pos: "名", ipa: "/ˈɑːnbɔːrdɪŋ/", cn: "入职培训，新员工融入", jp: "オンボーディング、新入社員研修" },
    { word: "reimbursement", pos: "名", ipa: "/ˌriːɪmˈbɜːrsmənt/", cn: "报销，退还", jp: "払い戻し、返済" },
    { word: "merger", pos: "名", ipa: "/ˈmɜːrdʒər/", cn: "合并，并购", jp: "合併" },
    { word: "foyer", pos: "名", ipa: "/ˈfɔɪər/", cn: "大堂，门厅", jp: "ロビー、エントランスホール" },
    { word: "venue", pos: "名", ipa: "/ˈvenjuː/", cn: "场地，聚会地点", jp: "開催地、会場" },
    { word: "vendor", pos: "名", ipa: "/ˈvendər/", cn: "供应商，小贩", jp: "業者、販売元" }
];

// 3. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "anyway",
        category: "简单",
        stem: "The flight was delayed by four hours due to severe weather; ________, the consulting team managed to arrive in time for the summit.",
        options: ["anyway", "following", "offer", "refer"],
        correct: "anyway",
        explanations: {
            guide: "连词副词的逻辑转折作用。根据上下文，航班延误但顾问团队依然及时赶到，故选表示‘无论如何/不管怎样’的转折副词 anyway。",
            family: "anyway (adv.无论如何) | following (prep.在...之后) | refer (v.参考)。",
            details: "anyway 放在句首或句尾，用逗号隔开，能完美连接前后让步及转折关系。此处修饰整句逻辑。",
            cn: "由于恶劣天气，航班延误了四个小时；无论如何，咨询团队还是设法及时赶到了峰会。",
            jp: "悪天候のためフライトが4時間遅れましたが、いずれにせよ（anyway）、コンサルティングチームはサミットに間に合うように到着することができました。"
        }
    },
    {
        id: 2,
        target: "following",
        category: "中等",
        stem: "________ the keynote session on market integration, delegates will gather in the grand foyer for a light luncheon.",
        options: ["Following", "Follower", "Refer", "Likely"],
        correct: "Following",
        explanations: {
            guide: "介词用法考点。空格后直接跟着名词短语，代表动作发生的时间先后关系，应选用介词性质的 Following（相当于 after）。",
            family: "following (prep.在...之后 / adj.) | follower (n.追随者) | follow (v.跟随)。",
            details: "Following 作为介词，意为“在……之后”，在托业商务场景中极高频，属于正式写作风格。Follower 是名词，不具备引导时间状语的功能。",
            cn: "在关于市场一体化的主题会议之后，代表们将在大堂大厅集合，享用便宴。",
            jp: "市場統合に関する基調講演に続いて（Following）、代表者たちは軽い昼食のためにグランドホワイエに集まります。"
        }
    },
    {
        id: 3,
        target: "refer",
        category: "简单",
        stem: "For a comprehensive breakdown of our quarterly expenditures, please ________ to page nine of the prospectus.",
        options: ["refer", "reference", "offer", "provide"],
        correct: "refer",
        explanations: {
            guide: "动词短语固定搭配。please 后面加动词原形。这里考查经典高频搭配 refer to（参考、翻阅）。",
            family: "refer (v.参考) | reference (n.参考/推荐信) | offer (v.提供)。",
            details: "refer to 是商务手册和分析报告中最常见的结构。名词形式为 reference，不能与 to 构成此谓语结构。",
            cn: "有关我们季度支出的全面细目分类，请参阅招股说明书的第九页。",
            jp: "四半期支出の包括的な内訳については、目論見書（prospectus）の9ページを参照（refer）してください。"
        }
    },
    {
        id: 4,
        target: "employee",
        category: "简单",
        stem: "The regional branch director implemented an aggressive training initiative to enhance ________ engagement.",
        options: ["employee", "employer", "employ", "employment"],
        correct: "employee",
        explanations: {
            guide: "复合名词定语用法。空格与后面的 engagement（参与度、敬业度）构成高频复合名词短语 employee engagement。",
            family: "employee (n.员工) | employer (n.雇主) | employment (n.雇佣) | employ (v.雇用)。",
            details: "employee engagement 属于现代企业管理核心词汇，表示“员工敬业度”或“员工参与感”。其余派生词均无法与其正确搭配。",
            cn: "地区分支机构主管实施了一项强有力的培训计划，以提高员工的参与敬业度。",
            jp: "地域支店長は、従業員（employee）のエンゲージメントを高めるために、積極的なトレーニング施策を実施しました。"
        }
    },
    {
        id: 5,
        target: "offer",
        category: "中等",
        stem: "As part of the joint venture, the electronics supplier will ________ to install the advanced systems free of charge.",
        options: ["offer", "offering", "refer", "available"],
        correct: "offer",
        explanations: {
            guide: "及物动词搭配不定式。will 助动词后接动词原形，常考固定结构为 offer to do sth（主动提议/承诺做某事）。",
            family: "offer (v./n.提供) | offering (n.提供物) | available (adj.可用的)。",
            details: "offer 搭配 to install，逻辑契合。其含义为“提议、主动提供”，比 propose 更口语一些但在商务采购中同样频繁使用。",
            cn: "作为合资企业的一部分，电子供应商将主动提出免费安装这些先进系统。",
            jp: "合弁事業の一環として、電子機器サプライヤーは先進システムを無料で設置することを申し出る（offer）予定です。"
        }
    },
    {
        id: 6,
        target: "likely",
        category: "中等",
        stem: "Due to a unexpected discrepancy in the logistics database, the shipping timeline is ________ to change.",
        options: ["likely", "likelihood", "unlikely", "anyway"],
        correct: "likely",
        explanations: {
            guide: "固定形容词结构。be likely to do sth 属于托业必背语法，意为“极有可能做某事”。",
            family: "likely (adj.可能的) | likelihood (n.可能性) | unlikely (adj.不太可能的/此处与逻辑相悖)。",
            details: "因为物流数据库出现不符（discrepancy），所以运输时间线“极有可能”发生改变。由于 likelihood 为名词，不能直接接在 is 后面配 to change。",
            cn: "由于物流数据库中出现了意外的不符，运输时间线很可能会发生改变。",
            jp: "ロジスティクスデータベースに予想外の不一致が発生したため、出荷スケジュールは変更される可能性が高い（likely）です。"
        }
    },
    {
        id: 7,
        target: "provide",
        category: "中等",
        stem: "The central procurement team plans to ________ all newly hired staff with essential tech equipment on Monday.",
        options: ["provide", "provision", "offer", "refer"],
        correct: "provide",
        explanations: {
            guide: "双宾结构与介词搭配。考查经典结构 provide A with B（为A提供B）。",
            family: "provide (v.提供) | provision (n.条款/提供) | offer (v.提供/常搭配 offer sb sth)。",
            details: "空格后跟着人（all staff）再加上介词 with 连带物，这是 provide 的绝对标志性结构。而 offer 的搭配通常为 offer staff sth（不用 with）。",
            cn: "中央采购团队计划于周一为所有新录用的员工提供必备的IT技术设备。",
            jp: "中央調達チームは月曜日に、すべての新入社員に必須のIT機器を支給（provide A with B）する計画です。"
        }
    },
    {
        id: 8,
        target: "available",
        category: "简单",
        stem: "Please note that the updated training schedules and conference room booking sheets are now ________ online.",
        options: ["available", "availability", "offer", "following"],
        correct: "available",
        explanations: {
            guide: "系表结构形容词。are 后面作表语，说明资料 and 表格当前是“可获取的、可用的”（available）。",
            family: "available (adj.可获取的) | availability (n.可用性) | following (adj./prep.)。",
            details: "available online 是极高频的商务表述，意为“在线可获取的/可查阅的”。名词 availability 无法作表语修饰主语的在线状态。",
            cn: "请注意，更新后的培训日程表 and 会议室预订表现在可以在线获取。",
            jp: "更新された研修スケジュールと会議室予約シートは、現在オンラインで利用可能（available）ですのでご確認ください。"
        }
    },
    {
        id: 9,
        target: "conference",
        category: "中等",
        stem: "More than forty representatives from our overseas subsidiary are scheduled to attend the annual marketing ________.",
        options: ["conference", "refer", "confer", "offer"],
        correct: "conference",
        explanations: {
            guide: "名词与动词搭配。attend 后面接会议或活动，故这里需要名词 conference（研讨会/会议）。",
            family: "conference (n.会议) | confer (v.协商) | refer (v.)。",
            details: "attend the annual marketing conference（出席年度营销会议）是完全经典的托业商务环境搭配。confer 是动词，不可在此作宾语。",
            cn: "来自我们海外子公司的四十多位代表预定出席一年一度的营销研讨大会。",
            jp: "海外子会社の40人以上の代表者が、年次マーケティング会議（conference）に出席する予定です。"
        }
    },
    {
        id: 10,
        target: "purchase",
        category: "中等",
        stem: "To qualify for the bulk discount, the procurement manager had to ________ the office furniture directly from the factory.",
        options: ["purchase", "purchasing", "refer", "offer"],
        correct: "purchase",
        explanations: {
            guide: "动词不定式。had to 后面必须加动词原形作为谓语。意为“采购、购买”。",
            family: "purchase (v./n.购买) | purchasing (n.采购) | purchaser (n.购买者)。",
            details: "名词宾语是 office furniture，在商务语境下直接购买，选用 purchase 最为正式。purchasing 是名词或动名词，在此语法不通。",
            cn: "为了获得大宗折扣，采购经理不得不直接从工厂采购办公家具。",
            jp: "まとめ買い割引の適用を受けるため、調達マネージャーはオフィス家具を工場から直接購入（purchase）しなければなりませんでした。"
        }
    },
    {
        id: 11,
        target: "anyway",
        category: "困难",
        stem: "We ran into several licensing issues during onboarding, but we had to push forward with the system integration ________.",
        options: ["anyway", "following", "likely", "refer"],
        correct: "anyway",
        explanations: {
            guide: "副词修饰整句。在遇到各种入职与合规问题后，我们“无论如何（anyway）”都要推进系统集成。anyway 常放在句尾作状语。",
            family: "anyway (adv.) | following (prep.) | likely (adj.)。",
            details: "本题难在结合了高难背景词汇 onboarding 和 system integration，在句末置入 anyway 表达转折后的坚定决心，是地道商业英语的表现形式。",
            cn: "我们在员工入职培训期间遇到了几个许可问题，但无论如何我们都必须推进系统集成。",
            jp: "オンボーディング中にいくつかのライセンスの問題が発生しましたが、いずれにせよ（anyway）、システム統合を推し進めなければなりませんでした。"
        }
    },
    {
        id: 12,
        target: "following",
        category: "困难",
        stem: "A press briefing will be hosted in Grand Room B immediately ________ the merger announcement on Tuesday afternoon.",
        options: ["following", "follow", "referring", "available"],
        correct: "following",
        explanations: {
            guide: "介词功能辨析。immediately following 表示“在……之后立即”，表示紧接其后的时间概念。",
            family: "following (prep.在...之后) | follow (v.跟随) | referring (v-ing)。",
            details: "immediately following the merger announcement（并购公告发布后立即）。这是托业商务听力和阅读中屡试不爽的黄金词组搭配，用来修饰事件的紧凑关联。",
            cn: "在周二下午的并购宣布之后，Grand Room B 将立即举行媒体简报会。",
            jp: "火曜日の午後の合併発表の直後（following）に、グランドルームBで記者会見が行われます。"
        }
    },
    {
        id: 13,
        target: "refer",
        category: "困难",
        stem: "Please note that the terms and conditions outlined in the contract are frequently ________ to as the standard code.",
        options: ["referred", "refer", "referral", "reference"],
        correct: "referred",
        explanations: {
            guide: "被动语态与介词固定搭配。are frequently ________ to as 构成 be referred to as 结构（被称为……/被定义为……）。",
            family: "referred (v.过去分词) | refer (v.原形) | referral (n.推荐) | reference (n.参考)。",
            details: "因为 contract terms 是被称作 standard code，所以此处必须使用过去分词 referred 构成被动语态（be referred to as）。",
            cn: "请注意，合同中列出的条款和条件通常被称为标准守则。",
            jp: "契約書に記載されている諸条件は、しばしば標準規約と言及（referred to as）されますのでご注意ください。"
        }
    },
    {
        id: 14,
        target: "employee",
        category: "困难",
        stem: "The human resources coordinator announced that a newly structured ________ benefits policy will take effect next fiscal year.",
        options: ["employee", "employment", "employee's", "employer"],
        correct: "employee",
        explanations: {
            guide: "复合名词定语高级考点。employee benefits 是固定的行业高阶词汇，表示“员工福利”，不用名词所有格 employee's。",
            family: "employee (n.员工) | employment (n.雇佣) | employer (n.雇主)。",
            details: "虽然名词所有格在普通语法中常见，但在固定名词定语组合中，employee 直接充当修饰成分（如 employee training, employee records），这是托业最爱考查的细节。",
            cn: "人力资源主管宣布，一个全新构架的员工福利政策将在下一财政年度生效。",
            jp: "人事コーディネーターは、新しく再構築された福利厚生（employee benefits）制度が来会計年度から施行されると発表しました。"
        }
    },
    {
        id: 15,
        target: "offer",
        category: "困难",
        stem: "The client relations team plans to ________ a sincere apology and compensation vouchers to the affected travel delegates.",
        options: ["offer", "offering", "refer", "provide"],
        correct: "offer",
        explanations: {
            guide: "及物动词语义与搭配。offer sth to sb 意为“向某人提供某物”，这里名词宾语是 apology & vouchers，后接介词 to。",
            family: "offer (v.提供) | provide (v.常与 with 搭配) | refer (v.提及)。",
            details: "如果选用 provide，由于后方介词是 to affected delegates，一般应为 provide sth to/for sb，但在表达“致歉”与“发出提议”时，offer an apology to sb 是最标准且尊重的商务书面语。",
            cn: "客户关系团队计划向受影响的参会代表表示诚挚的歉意并提供补偿券。",
            jp: "顧客関係チームは、影響を受けた旅行代表者たちに、誠意ある謝罪と補償クーポンを提示（offer ... to）する計画です。"
        }
    },
    {
        id: 16,
        target: "likely",
        category: "困难",
        stem: "The research and development group confirmed that a complete technology upgrade is the ________ cause of the system error.",
        options: ["most likely", "likelihood", "unlikely", "anyway"],
        correct: "most likely",
        explanations: {
            guide: "意图修饰。the most likely cause 意为“最可能的原因”，此处 most likely 作为副词短语极其契合修饰 cause 的发生可能性。",
            family: "most likely (adv.最可能地) | likelihood (n.可能性) | unlikely (adj.不太可能的)。",
            details: "the 后面需要最高级性质限定词。most likely 作为副词短语修饰形容词或名词原因时表示概率极高，是最地道的表达方法。",
            cn: "研发小组证实，全面的技术升级是造成系统错误的最可能原因。",
            jp: "研究開発グループは、完全な技術アップグレードがシステムエラーの最も可能性の高い（most likely）原因であることを確認しました。"
        }
    },
    {
        id: 17,
        target: "provide",
        category: "困难",
        stem: "The contract obligates the vendor to ________ a comprehensive travel itinerary for the delegates prior to departure.",
        options: ["provide", "provision", "offer", "refer"],
        correct: "provide",
        explanations: {
            guide: "及物动词与其宾语搭配。provide + 物 + for + 人，在此宾语是 travel itinerary，后面配有 for the delegates 介词短语。",
            family: "provide (v.提供) | provision (n.准备/条款) | offer (v.通常搭配 offer sb sth)。",
            details: "由于后方是 for the delegates，形成 provide B for A 结构，表示为代表们提供日程表。本题难度在于将高阶词汇 obligates（迫使、使负有义务）和 itinerary 植入背景中。",
            cn: "合同规定，供应商必须在出发前为代表们提供一份详尽的旅行行程表。",
            jp: "契約により、ベンダーは出発前に代表者のために詳細な旅行日程表を用意（provide B for A）することが義務付けられています。"
        }
    },
    {
        id: 18,
        target: "purchase",
        category: "困难",
        stem: "No travel reimbursement requests will be processed without a valid invoice confirming the ________ of the flight tickets.",
        options: ["purchase", "purchasing", "refer", "offer"],
        correct: "purchase",
        explanations: {
            guide: "冠词后的名词词性考点。the ________ of the flight tickets，定冠词 the 后面需要名词，构成 the purchase of sth（购买某物）。",
            family: "purchase (n./v.采购) | purchasing (n.采购行为/部门) | refer (v.参考)。",
            details: "虽然 purchase 可作动词，但它同时是标准的名词，表示购买行为或所购之物。而 purchasing 作为名词时通常直接修饰 department（如采购部），不常与 of 连用表示具体单次交易。",
            cn: "如果没有确认购买机票的有效发票，任何出差报销申请都将不予处理。",
            jp: "航空券の購入（purchase）を確認する有効な請求書がなければ、出張旅費精算の申請は処理されません。"
        }
    }
];