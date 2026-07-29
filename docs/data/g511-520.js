// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data91-100.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "primarily",
        pos: "副",
        ipa: "/praɪˈmerəli/",
        cn: "主要地，首要地",
        jp: "主に、第一に",
        family: "primary / primary school",
        tips: "阅读与听力高频逻辑修饰副词，等同于 mainly / chiefly。常考：primarily responsible for（主要负责……）或 primarily aimed at（主要针对……）。",
        desc: "The course is primarily for new staff."
    },
    {
        word: "typically",
        pos: "副",
        ipa: "/ˈtɪpɪkli/",
        cn: "通常，典型地",
        jp: "通常、一般的に",
        family: "typical / typify",
        tips: "描述常态与规章的高频副词，等同于 usually / normally。常考：typically takes 3 days（通常需要 3 天）或 typical duties（典型职责）。",
        desc: "It typically takes three business days."
    },
    {
        word: "reliable",
        pos: "形",
        ipa: "/rɪˈlaɪəbl/",
        cn: "可靠的，可信赖的",
        jp: "信頼できる、確実な",
        family: "rely / reliance / reliability / unreliably",
        tips: "评估供应商、设备与员工的高频赞美词！常考搭配：reliable service（可靠的服务）、reliable supplier（可靠的供应商）。名词形式 reliability 极高频。",
        desc: "We need a reliable internet connection."
    },
    {
        word: "quote",
        pos: "動/名",
        ipa: "/kwoʊt/",
        cn: "报价，引用；报价单，引言",
        jp: "見積もる、引用する；見積もり",
        family: "quotation / quoted",
        tips: "采购与商务洽谈核心词。作名词等同于 price estimate；其长名词形式 quotation（报价单）是 Part 5/7 语法与阅读常考点。",
        desc: "Please send us a price quote."
    },
    {
        word: "overtime",
        pos: "名/副",
        ipa: "/ˈoʊvərtaɪm/",
        cn: "加班（时间），超时；加班地",
        jp: "残業、時間外労働；時間外に",
        family: "work overtime / overtime pay",
        tips: "HR 与薪酬计算核心词。常考：work overtime（加班）、overtime pay / rate（加班费/加班费率）。",
        desc: "He worked two hours of overtime."
    },
    {
        word: "manuscript",
        pos: "名",
        ipa: "/ˈmænjuskrɪpt/",
        cn: "原稿，手稿",
        jp: "原稿、手書き原稿",
        family: "script / handwritten",
        tips: "出版与媒体行业核心词。常考：submit a manuscript（提交原稿）、review a manuscript（审阅手稿）。",
        desc: "The author submitted her final manuscript."
    },
    {
        word: "recipient",
        pos: "名",
        ipa: "/rɪˈsɪpiənt/",
        cn: "接收者，受件人；获奖者",
        jp: "受取人、受信者；受賞者",
        family: "receive / receipt / reception",
        tips: "商务邮件与奖项颁发核心词！1. 邮件/邮寄：intended recipient（指定收件人）；2. 颁奖：award recipient（获奖者）。注意与 receipt（收据）区分。",
        desc: "Enter the recipient's email address."
    },
    {
        word: "wildlife",
        pos: "名",
        ipa: "/ˈwaɪldlaɪf/",
        cn: "野生动植物",
        jp: "野生生物",
        family: "wild / life / conservation",
        tips: "环保与生态旅游考点。常考：wildlife conservation（野生动物保护）、wildlife habitat（野生生物栖息地）。不可数名词。",
        desc: "The park is famous for its wildlife."
    },
    {
        word: "flexible",
        pos: "形",
        ipa: "/ˈfleksəbl/",
        cn: "灵活的，可变通的，柔韧的",
        jp: "柔軟な、融通の利く",
        family: "flexibility / flexibly",
        tips: "工作制度与商务条件高频词。常考：flexible working hours（弹性工作时间）、flexible policy（灵活的政策）。其名词 flexibility 极高频。",
        desc: "Our working hours are very flexible."
    },
    {
        word: "transaction",
        pos: "名",
        ipa: "/trænˈzækʃn/",
        cn: "交易，买卖；办理",
        jp: "取引、処理",
        family: "transact / transactional",
        tips: "金融、银行与电商核心词。常考：financial transaction（金融交易）、online transaction（线上交易）、transaction fee（交易手续费）。",
        desc: "The bank processes thousands of transactions."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "reliable",
        category: "简单",
        stem: "Clients trust Mr. Jenkins because he is a highly ________ and punctual consultant.",
        options: ["reliable", "reliability", "wildlife", "quote"],
        correct: "reliable",
        explanations: {
            guide: "副词修饰形容词作定语。a highly ________ and punctual consultant 中，副词 highly 与连词 and 连接的形容词 punctual 并列，空格处需填写形容词 reliable（可靠的）。",
            family: "reliable (adj.可靠的) | reliability (n.可靠性) | wildlife (n.野生生物) | quote (n./v.报价)。",
            details: "reliable 与 punctual（守时的）并列修饰顾问 consultant。reliability 是名词，不能跟在副词 highly 后面充当定语。",
            cn: "客户非常信任詹金斯先生，因为他是一位非常可靠且守时的顾问。",
            jp: "ジェンキンス氏は非常に信頼でき（reliable）、時間にも厳格なコンサルタントであるため、クライアントから信頼されています。"
        }
    },
    {
        id: 2,
        target: "flexible",
        category: "简单",
        stem: "The company offers ________ working hours to help employees balance work and family life.",
        options: ["flexible", "flexibility", "recipient", "manuscript"],
        correct: "flexible",
        explanations: {
            guide: "形容词修饰名词。________ working hours 中需要形容词修饰工作时间，表达“弹性/灵活的工作时间”，选 flexible。",
            family: "flexible (adj.灵活的) | flexibility (n.灵活性) | recipient (n.收件人) | manuscript (n.手稿)。",
            details: "flexible working hours（弹性工作时间）是托业 HR 招聘场景的核心固定表达。flexibility 是名词，不能修饰工作时间。",
            cn: "公司提供灵活的工作时间，以帮助员工平衡工作与家庭生活。",
            jp: "同社は、従業員が仕事と家庭生活のバランスを取れるよう、柔軟な（flexible）勤務時間を提供しています。"
        }
    },
    {
        id: 3,
        target: "overtime",
        category: "简单",
        stem: "Employees who work more than forty hours a week are entitled to receive ________ pay.",
        options: ["overtime", "transaction", "primarily", "typically"],
        correct: "overtime",
        explanations: {
            guide: "名词作前置定语。________ pay 构成复合名词，表达“加班费”，选 overtime。",
            family: "overtime (n.加班) | transaction (n.交易) | primarily (adv.主要地) | typically (adv.通常)。",
            details: "overtime pay（加班费）是薪酬福利场景中的专有名词。其他选项均无法与 pay 组合成合理的薪酬用语。",
            cn: "每周工作超过 40 小时的员工有权领取加班费。",
            jp: "週に40時間以上働く従業員には、残業（overtime）手当を受け取る権利があります。"
        }
    },
    {
        id: 4,
        target: "quote",
        category: "简单",
        stem: "Please contact the sales representative to request a formal price ________ for the new equipment.",
        options: ["quote", "quoted", "typically", "flexible"],
        correct: "quote",
        explanations: {
            guide: "冠词与形容词后的名词中心语。a formal price ________ 中需要接名词，price quote 意为“价格报价/报价单”。",
            family: "quote (n./v.报价) | quoted (v-ed形式) | typically (adv.通常) | flexible (adj.灵活的)。",
            details: "price quote 属于商务采购与销售场景的固定搭配。quoted 是分词/过去式，不能在此处担当名词中心词。",
            cn: "请联系销售代表，索取新设备的正式价格报价单。",
            jp: "新設備の正式な価格見積もり（quote）を請求するには、営業担当者にご連絡ください。"
        }
    },
    {
        id: 5,
        target: "recipient",
        category: "简单",
        stem: "Before hitting send, double-check the email address of the intended ________.",
        options: ["recipient", "receipt", "transaction", "overtime"],
        correct: "recipient",
        explanations: {
            guide: "形容词修饰的人名词。the intended ________ 中需要接表示“人”的名词，the intended recipient 意为“指定收件人”。",
            family: "recipient (n.收件人) | receipt (n.收据) | transaction (n.交易) | overtime (n.加班)。",
            details: "intended recipient（预期的收件人）是邮件通信场景极高频的表达。receipt 意为收据，与 email address（电子邮件地址）的指向逻辑不符。",
            cn: "在点击发送之前，请仔细核对预定收件人的电子邮件地址。",
            jp: "送信ボタンを押す前に、意図した受信者（recipient）のメールアドレスを再確認してください。"
        }
    },
    {
        id: 6,
        target: "primarily",
        category: "简单",
        stem: "The new marketing strategy is ________ aimed at attracting younger college students.",
        options: ["primarily", "primary", "wildlife", "manuscript"],
        correct: "primarily",
        explanations: {
            guide: "副词修饰分词/动词。is ________ aimed at 结构中，需要副词修饰过去分词 aimed，表达“主要旨在”，选 primarily。",
            family: "primarily (adv.主要地) | primary (adj.主要的) | wildlife (n.野生生物) | manuscript (n.手稿)。",
            details: "is primarily aimed at 构成完整动宾被动结构。primary 是形容词，不能直接修饰分词或动词结构 aimed at。",
            cn: "这项新的营销策略主要旨在吸引更年轻的大学生群。",
            jp: "新しいマーケティング戦略は、主に（primarily）若い大学生を引きつけることを目的としています。"
        }
    },
    {
        id: 7,
        target: "typically",
        category: "中等",
        stem: "Standard international shipping ________ takes three to five business days depending on the destination.",
        options: ["typically", "typical", "reliable", "quote"],
        correct: "typically",
        explanations: {
            guide: "副词修饰谓语动词。主语 Shipping 与谓语动词 takes 之间需要副词作状语，表达“通常需要”，选 typically。",
            family: "typically (adv.通常) | typical (adj.典型的) | reliable (adj.可靠的) | quote (n./v.报价)。",
            details: "typically takes 属于物流配送场景的标准表述。typical 是形容词，不能在主语与谓语动词之间修饰谓语 takes。",
            cn: "标准国际运输通常需要三到五个工作日，具体取决于目的地。",
            jp: "標準的な国際配送は、目的地に応じて通常（typically）3〜5営業日かかります。"
        }
    },
    {
        id: 8,
        target: "transaction",
        category: "中等",
        stem: "Customers will receive an automated email confirmation immediately after completing the online ________.",
        options: ["transaction", "transact", "flexible", "recipient"],
        correct: "transaction",
        explanations: {
            guide: "形容词后的名词宾语。completing the online ________ 结构中，形容词 online 后面需要接名词作动名词 completing 的宾语，选 transaction（交易）。",
            family: "transaction (n.交易) | transact (v.办理) | flexible (adj.灵活的) | recipient (n.受件人)。",
            details: "online transaction（线上交易/网上支付）是电子商务的核心词汇。transact 为动词，不能接在形容词 online 之后作宾语。",
            cn: "顾客在完成在线交易后，将立即收到一封自动发出的电子邮件确认函。",
            jp: "お客様は、オンライン取引（transaction）が完了すると直ちに、自動配信メールによる確認書を受け取ります。"
        }
    },
    {
        id: 9,
        target: "manuscript",
        category: "中等",
        stem: "The chief editor asked the author to revise the second chapter of the ________ before final publication.",
        options: ["manuscript", "recipient", "overtime", "primarily"],
        correct: "manuscript",
        explanations: {
            guide: "出版场景名词选择。the second chapter of the ________ 指该“原稿/手稿”的第二章，选 manuscript。",
            family: "manuscript (n.原稿) | recipient (n.收件人) | overtime (n.加班) | primarily (adv.主要地)。",
            details: "chapter of the manuscript（原稿的章节）属于出版与编辑场景的核心搭配。其他选项均与书籍出版编辑语境无关。",
            cn: "主编要求作者在最终出版前修改原稿的第二章。",
            jp: "編集长は、最終出版の前に手稿（manuscript）の第2章を修正するよう著者に求めました。"
        }
    },
    {
        id: 10,
        target: "wildlife",
        category: "中等",
        stem: "The municipal government established a protected reserve to safeguard native ________ species in the valley.",
        options: ["wildlife", "transaction", "flexible", "quote"],
        correct: "wildlife",
        explanations: {
            guide: "名词作前置定语。safeguard native ________ species 表达保护当地的“野生动植物”物种，选 wildlife。",
            family: "wildlife (n.野生动植物) | transaction (n.交易) | flexible (adj.灵活的) | quote (n.报价)。",
            details: "wildlife species 意为野生物种。wildlife 在此处充当名词定语修饰 species，属于环保与地理阅读常见用法。",
            cn: "市政府设立了一个保护区，以保护山谷里的野生动植物物种。",
            jp: "地方政府は、谷の固有の野生生物（wildlife）種を保護するために保護区を設立しました。"
        }
    },
    {
        id: 11,
        target: "flexible",
        category: "中等",
        stem: "Having a high level of ________ in scheduling allows the team to adapt quickly to unexpected project delays.",
        options: ["flexibility", "flexible", "typically", "manuscript"],
        correct: "flexibility",
        explanations: {
            guide: "介词后的抽象名词。a high level of ________ 中，介词 of 后面需要接名词形式 flexibility（灵活性）。",
            family: "flexibility (n.灵活性) | flexible (adj.灵活的) | typically (adv.通常) | manuscript (n.手稿)。",
            details: "a high level of flexibility 意为“高度的灵活性”。flexible 是形容词，不能直接放在介词 of 后面作介词宾语。",
            cn: "在日程安排上具备高度的灵活性，使团队能够快速适应意外的项目延误。",
            jp: "スケジュールに高度の柔軟性（flexibility）を持たせることで、チームは予期せぬプロジェクトの遅延に迅速に対応することができます。"
        }
    },
    {
        id: 12,
        target: "reliable",
        category: "中等",
        stem: "The IT department selected this server vendor because of its proven track record of product ________.",
        options: ["reliability", "reliable", "recipient", "overtime"],
        correct: "reliability",
        explanations: {
            guide: "介词后的抽象名词。track record of product ________ 中，介词 of 后面需要名词构成“产品可靠性”，选 reliability。",
            family: "reliability (n.可靠性) | reliable (adj.可靠的) | recipient (n.收件人) | overtime (n.加班)。",
            details: "product reliability（产品可靠性）是 IT 硬件采购与质量管理的核心名词。reliable 为形容词，不能充当介词 of 的宾语。",
            cn: "IT 部门选择这家服务器供应商，是因为它在产品可靠性方面有着经得起考验的良好记录。",
            jp: "IT部門は、製品の信頼性（reliability）における証明された実績を理由に、このサーバーベンダーを選定しました。"
        }
    },
    {
        id: 13,
        target: "primarily",
        category: "困难",
        stem: "While the initial phase of the corporate expansion was ________ funded by venture capital, subsequent phases relied on bank loans.",
        options: ["primarily", "primary", "wildlife", "transaction"],
        correct: "primarily",
        explanations: {
            guide: "被动语态中的副词修饰。was ________ funded by... 结构中，需要副词修饰过去分词 funded，表达“主要由……资助”，选 primarily。",
            family: "primarily (adv.主要地) | primary (adj.主要的) | wildlife (n.野生生物) | transaction (n.交易)。",
            details: "was primarily funded by 构成了被动语态中加入程度副词状语的典型高阶语法点。primary 是形容词，无法修饰动词 funded。",
            cn: "虽然公司扩张的初始阶段主要是由风险投资资助的，但随后的阶段则依赖于银行贷款。",
            jp: "企業拡大の初期段階は主に（primarily）ベンチャーキャピタルによって資金調達されましたが、その後の段階は銀行ローンに依存していました。"
        }
    },
    {
        id: 14,
        target: "quote",
        category: "困难",
        stem: "The general contractor provided a detailed financial ________ that outlined all material and labor expenses for the commercial project.",
        options: ["quotation", "quoted", "typically", "flexible"],
        correct: "quotation",
        explanations: {
            guide: "高阶商务名词派生词。a detailed financial ________ 结构中，需要接名词形式 quotation（报价单/估价单）。",
            family: "quotation (n.报价单) | quoted (v-ed形式) | typically (adv.通常) | flexible (adj.灵活的)。",
            details: "financial quotation 意为“财务报价单”。quotation 是 quote 的高级规范名词衍生形式，常用于大型工程招投标与商务合同中。",
            cn: "总承包商提供了一份详细的财务报价单，概述了该商业项目的所有材料和劳动力费用。",
            jp: "ゼネコンは、商業プロジェクトのすべての材料費と人件費の概要を記した詳細な財務見積書（quotation）を提出しました。"
        }
    },
    {
        id: 15,
        target: "overtime",
        category: "困难",
        stem: "Due to the strict project deadline, factory technicians were required to work ________ throughout the entire weekend.",
        options: ["overtime", "recipient", "manuscript", "reliability"],
        correct: "overtime",
        explanations: {
            guide: "动词后的副词/名词短语。work ________ 表达“加班工作”，overtime 在此充当副词/状语修饰不及物动词 work。",
            family: "overtime (adv./n.加班) | recipient (n.收件人) | manuscript (n.手稿) | reliability (n.可靠性)。",
            details: "work overtime 为固定动词短语，overtime 可直接作副词修饰 work。其他名词选项均无法直接跟在不及物动词 work 后面。",
            cn: "由于项目截止日期吃紧，工厂技术人员被要求在整个周末加班工作。",
            jp: "厳しいプロジェクトの締め切りのため、工場の技術者は週末全体を通して残業する（work overtime）ことが求められました。"
        }
    },
    {
        id: 16,
        target: "recipient",
        category: "困难",
        stem: "Dr. Arisawa was chosen as the honored ________ of the annual international award for excellence in medical research.",
        options: ["recipient", "reception", "wildlife", "flexibility"],
        correct: "recipient",
        explanations: {
            guide: "高阶商务与表彰场景。chosen as the honored ________ 中，需要表示“获奖人/接收者”的名词，选 recipient。",
            family: "recipient (n.获奖人/接收者) | reception (n.招待会/接收) | wildlife (n.野生生物) | flexibility (n.灵活性)。",
            details: "the recipient of the award 属于托业阅读表彰文章中的高阶固定表达。reception 意为招待会或接收信号，无法指代具体的人。",
            cn: "有泽博士被选为年度国际医学研究卓越奖的荣誉获得者。",
            jp: "有沢博士は、医学研究における卓越性をたたえる年次国際賞の栄誉ある受賞者（recipient）に選ばれました。"
        }
    },
    {
        id: 17,
        target: "transaction",
        category: "困难",
        stem: "To ensure full financial transparency, all high-value corporate ________ must be thoroughly audited by certified accountants.",
        options: ["transactions", "transactional", "quote", "manuscript"],
        correct: "transactions",
        explanations: {
            guide: "形容词修饰的复数名词主语。all high-value corporate ________ 中，限定词 all 后面需要接可数名词复数形式 transactions（交易）。",
            family: "transactions (n.交易/复数) | transactional (adj.交易的) | quote (n.报价) | manuscript (n.手稿)。",
            details: "corporate transactions 指公司的“商业交易/财务往来”。all 后面修饰可数名词时需用复数形式 transactions。transactional 是形容词。",
            cn: "为了确保充分的财务透明度，所有高价值的公司交易都必须接受注册会计师的严格审计。",
            jp: "完全な財務の透明性を確保するため、すべての高額な企業取引（transactions）は公認会計士による徹底的な監査を受けなければなりません。"
        }
    },
    {
        id: 18,
        target: "wildlife",
        category: "困难",
        stem: "The eco-tourism resort was designed to minimize environmental disruption while offering guided tours of regional ________ habitats.",
        options: ["wildlife", "typically", "overtime", "primary"],
        correct: "wildlife",
        explanations: {
            guide: "名词作前置定语与专业语境。regional ________ habitats 表达区域“野生动物栖息地”，选名词 wildlife。",
            family: "wildlife (n.野生动植物) | typically (adv.通常) | overtime (n.加班) | primary (adj.主要的)。",
            details: "wildlife habitats 属于环保与生态旅游阅读中的标准术语。wildlife 作名词定语修饰 habitats（栖息地），符合逻辑与语法要求。",
            cn: "该生态旅游度假村旨在最大限度地减少对环境的破坏，同时提供当地野生动物栖息地的导览游服务。",
            jp: "そのエコツーリズムリゾートは、環境への影響を最小限に抑えながら、地域の野生生物（wildlife）生息地のガイド付きツアーを提供するよう設計されています。"
        }
    }
];