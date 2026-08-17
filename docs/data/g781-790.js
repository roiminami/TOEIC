// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data531-540.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "segment",
        pos: "名/動",
        ipa: "/ˈseɡmənt/",
        cn: "部分，细分市场；分割，划分",
        jp: "区分、部分、市場セグメント；分割する",
        family: "segmented / segmentation / segmenting",
        tips: "市场营销高频：market segment（细分市场），customer segment（客户群体）。",
        desc: "This market segment is growing."
    },
    {
        word: "activate",
        pos: "動",
        ipa: "/ˈæktɪveɪt/",
        cn: "激活，启动",
        jp: "有効にする、作動させる",
        family: "activation / activated / active",
        tips: "IT与客服高频：activate an account/card（激活账户/银行卡）。",
        desc: "Please activate your card now."
    },
    {
        word: "logistics",
        pos: "名",
        ipa: "/ləˈdʒɪstɪks/",
        cn: "物流，后勤",
        jp: "物流、ロジスティクス、後方支援",
        family: "logistic / logistical / logistically",
        tips: "供应链与交通核心词：logistics network/management（物流网络/管理）。",
        desc: "Logistics costs increased this month."
    },
    {
        word: "managerial",
        pos: "形",
        ipa: "/ˌmænəˈdʒɪriəl/",
        cn: "管理的，经营上的",
        jp: "管理職の、経営上の",
        family: "manage / manager / management / managerially",
        tips: "HR招聘高频：managerial position/experience/role（管理岗位/经验/职责）。",
        desc: "She has strong managerial skills."
    },
    {
        word: "detergent",
        pos: "名",
        ipa: "/dɪˈtɜːrdʒənt/",
        cn: "洗涤剂，清洁剂",
        jp: "洗剤",
        family: "detergents",
        tips: "日常与酒店设施高频：laundry detergent（洗衣液/洗衣粉），liquid detergent（液体洗涤剂）。",
        desc: "Use mild laundry detergent daily."
    },
    {
        word: "solicit",
        pos: "動",
        ipa: "/səˈlɪsɪt/",
        cn: "征求，征集，恳请",
        jp: "求める、懇願する、勧誘する",
        family: "solicitation / solicitor / unsolicited",
        tips: "商务沟通与公关高频：solicit feedback/bids/donations（征求反馈/招标/征集捐款）。",
        desc: "We solicit feedback from clients."
    },
    {
        word: "audit",
        pos: "名/動",
        ipa: "/ˈɔːdɪt/",
        cn: "审计，查账；旁听",
        jp: "監査、会計検査；監査する",
        family: "auditor / audited / auditing",
        tips: "财务与合规高频：financial/tax audit（财务/税务审计），conduct an audit（进行审计）。",
        desc: "The firm conducts an audit."
    },
    {
        word: "preview",
        pos: "名/動",
        ipa: "/ˈpriːvjuː/",
        cn: "预览，预映，预先查看",
        jp: "試写、プレビュー；下見する",
        family: "previewed / previewing",
        tips: "活动与软件高频：exclusive preview（独家预览/预展），preview mode（预览模式）。",
        desc: "They watched a movie preview."
    },
    {
        word: "proceeds",
        pos: "名",
        ipa: "/ˈproʊsiːdz/",
        cn: "收益，收入，所得款项",
        jp: "収益、売上金（複数扱い）",
        family: "proceed / proceeding",
        tips: "财务与慈善高频：net proceeds（净收益），proceeds from the sale/auction（销售/拍卖所得款）。",
        desc: "Proceeds will support local schools."
    },
    {
        word: "conservation",
        pos: "名",
        ipa: "/ˌkɑːnsərˈveɪʃn/",
        cn: "保护，保存，节约",
        jp: "保護、保存、節約",
        family: "conserve / conservative / conservational",
        tips: "环保与设施高频：energy/water conservation（节能/节水），environmental conservation（环境保护）。",
        desc: "Energy conservation saves company money."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "activate",
        category: "简单",
        stem: "Customers must call customer service to ________ their new credit card before using it.",
        options: ["activate", "solicit", "audit", "preview"],
        correct: "activate",
        explanations: {
            guide: "客服操作动词考点。to 后面接动词原形，结合在使用新信用卡之前操作，选 activate（激活/开通）。",
            family: "activate (v.激活) | solicit (v.征求) | audit (v.审计) | preview (v.预览)。",
            details: "activate a credit card 属于金融与客服常用搭配，意为激活信用卡。其余选项均与开通信用卡语境不符。",
            cn: "客户在使用新信用卡之前，必须致电客服将其激活。",
            jp: "お客様は新しいクレジットカードを使用する前に、カスタマーサービスに電話して有効化（activate）しなければなりません。"
        }
    },
    {
        id: 2,
        target: "detergent",
        category: "简单",
        stem: "The hotel housekeeping staff uses an eco-friendly laundry ________ to wash bed linens.",
        options: ["detergent", "segment", "logistics", "proceeds"],
        correct: "detergent",
        explanations: {
            guide: "清洁用品名词考点。laundry ________ 结合洗涤床上用品，选 detergent（洗涤剂/洗衣液）。",
            family: "detergent (n.洗涤剂) | segment (n.细分部分) | logistics (n.物流) | proceeds (n.收益)。",
            details: "laundry detergent 意为洗衣洗涤剂。segment（部分）、proceeds（收益）均非洗涤清洁用品。",
            cn: "酒店客房保洁人员使用环保洗衣剂清洗床单。",
            jp: "ホテルの客室係は、ベッドリネンを洗うために環境に優しい洗濯洗剤（detergent）を使用しています。"
        }
    },
    {
        id: 3,
        target: "logistics",
        category: "简单",
        stem: "The manufacturing company hired a specialist to oversee global supply chain and ________ operations.",
        options: ["logistics", "conservation", "managerial", "preview"],
        correct: "logistics",
        explanations: {
            guide: "供应链名词定语。supply chain and ________ operations 与供应链并列，选 logistics（物流/后勤）。",
            family: "logistics (n.物流) | conservation (n.节约/保护) | managerial (adj.管理的) | preview (n.预览)。",
            details: "logistics operations 意为物流运营。managerial 是形容词，不能直接与名词短语 supply chain 用 and 并列作前置定语。",
            cn: "这家制造公司聘请了一位专家来监督全球供应链和物流运营。",
            jp: "その製造会社は、グローバルなサプライチェーンと物流（logistics）業務を監督するために専門家を雇いました。"
        }
    },
    {
        id: 4,
        target: "proceeds",
        category: "简单",
        stem: "All ________ from the charity auction will be donated to the children's hospital foundation.",
        options: ["proceeds", "detergents", "audits", "segments"],
        correct: "proceeds",
        explanations: {
            guide: "财务款项名词主语。All ________ from the charity auction 结合全部捐给儿童医院基金会，选 proceeds（收益/所得款项）。",
            family: "proceeds (n.所得款项/收益) | detergents (n.洗涤剂) | audits (n.审计) | segments (n.部分)。",
            details: "proceeds from an auction 意为拍卖所得收益。detergents（洗涤剂）、audits（审计）均非捐赠的资金款项实体。",
            cn: "慈善拍卖会的所有收益款项都将捐赠给儿童医院基金会。",
            jp: "チャリティーオークションのすべての収益金（proceeds）は、小児病院財団に寄付されます。"
        }
    },
    {
        id: 5,
        target: "preview",
        category: "简单",
        stem: "Subscribers were invited to attend a private ________ of the new art gallery exhibition.",
        options: ["preview", "conservation", "logistics", "solicitation"],
        correct: "preview",
        explanations: {
            guide: "艺术展览名词考点。attend a private ________ 结合艺术画廊新展览开幕前受邀观展，选 preview（预展/预览）。",
            family: "preview (n.预展/预映) | conservation (n.保护) | logistics (n.物流) | solicitation (n.征集)。",
            details: "private preview 意为专属预展/预先参观。conservation（节约保护）、logistics（物流）不合展览参观语境。",
            cn: "订阅会员受邀参加了新艺术画廊展览的专属预展。",
            jp: "定期購読者は、新しいアートギャラリー展覧会の特別内覧会/プレビュー（preview）に招待されました。"
        }
    },
    {
        id: 6,
        target: "managerial",
        category: "简单",
        stem: "Candidates applying for the director post must possess at least five years of ________ experience.",
        options: ["managerial", "activated", "detergent", "solicited"],
        correct: "managerial",
        explanations: {
            guide: "招聘资历修饰形容词。修饰 experience（经验），结合申请总监职位（director post），选 managerial（管理的/管理层的）。",
            family: "managerial (adj.管理的) | activated (adj.激活的) | detergent (n.洗涤剂) | solicited (adj.征集的)。",
            details: "managerial experience 意为管理经验。activated（激活的）、detergent（洗涤剂）均不能用来修饰管理层履历。",
            cn: "申请总监职位的应聘者必须具备至少五年的管理经验。",
            jp: "ディレクター職に応募する候補者は、少なくとも5年間の管理職（managerial）経験を有している必要があります。"
        }
    },
    {
        id: 7,
        target: "solicit",
        category: "中等",
        stem: "The customer satisfaction team sent out online surveys to ________ feedback from recent buyers.",
        options: ["solicit", "activate", "audit", "segment"],
        correct: "solicit",
        explanations: {
            guide: "动词不定式与客户反馈搭配。to 后面接动词原形，结合通过在线问卷征集买家意见（feedback），选 solicit（征求/征集）。",
            family: "solicit (v.征求/征集) | activate (v.激活) | audit (v.审计) | segment (v.分割)。",
            details: "solicit feedback 属于托业经典动宾搭配，意为征求反馈。activate（激活）、audit（审计）均不与 feedback 搭配。",
            cn: "客户满意度团队发送了在线调查问卷，以征求近期买家的反馈意见。",
            jp: "顧客満足度チームは、最近の購入者からのフィードバックを募る/求める（solicit）ためにオンラインアンケートを送信しました。"
        }
    },
    {
        id: 8,
        target: "conservation",
        category: "中等",
        stem: "The municipal government launched a water ________ campaign to reduce consumption during the summer drought.",
        options: ["conservation", "proceeds", "detergent", "logistics"],
        correct: "conservation",
        explanations: {
            guide: "环保举措复合名词。water ________ campaign 结合夏季干旱期间减少用水消耗，选 conservation（节约/保护）。",
            family: "conservation (n.节约/保存) | proceeds (n.收益) | detergent (n.洗涤剂) | logistics (n.物流)。",
            details: "water conservation 意为节约用水。proceeds（收益）、detergent（洗涤剂）均不能与 water 构成节水倡议词组。",
            cn: "市政府发起了一场节水运动，以减少夏季干旱期间的用水量。",
            jp: "市当局は、夏の干ばつ期の消費量を削減するために節水（water conservation）キャンペーンを開始しました。"
        }
    },
    {
        id: 9,
        target: "segment",
        category: "中等",
        stem: "Marketing analysts identified the youth demographic as the fastest-growing market ________ for electric scooters.",
        options: ["segment", "audit", "preview", "proceeds"],
        correct: "segment",
        explanations: {
            guide: "市场营销专有名词。market ________ 结合年轻消费群体，表达电动滑板车增长最快的“细分市场/板块”，选 segment。",
            family: "segment (n.细分市场/部分) | audit (n.审计) | preview (n.预览) | proceeds (n.收益)。",
            details: "market segment 意为细分市场。audit（审计）、preview（预展）均非市场学中的客群划分专有名词。",
            cn: "营销分析师认定青年群体是电动滑板车增长最快的细分市场。",
            jp: "マーケティングアナリストは、若年層が電動スクーターの最も急速に成長している市場セグメント（segment）であると特定しました。"
        }
    },
    {
        id: 10,
        target: "audit",
        category: "中等",
        stem: "External accountants were brought in to conduct an independent financial ________ of corporate records.",
        options: ["audit", "detergent", "preview", "conservation"],
        correct: "audit",
        explanations: {
            guide: "财务审查动宾搭配。conduct an independent financial ________ 表达外部会计师对公司记录进行“财务审计/查账”，选 audit。",
            family: "audit (n.审计/核查) | detergent (n.洗涤剂) | preview (n.预览) | conservation (n.节约)。",
            details: "conduct a financial audit 属于托业核心搭配，意为进行财务审计。preview（预览）、conservation（保护）与会计核账无关。",
            cn: "聘请了外部会计师对公司记录进行独立的财务审计。",
            jp: "企業記録の独立した財務監査（audit）を実施するために、外部の会計士が招かれました。"
        }
    },
    {
        id: 11,
        target: "activate",
        category: "中等",
        stem: "Users must enter a one-time verification code to complete the ________ of their mobile banking profile.",
        options: ["activation", "activate", "solicitation", "logistics"],
        correct: "activation",
        explanations: {
            guide: "派生名词考点。complete the ________ of... 结构中，在定冠词 the 和介词 of 之间填入抽象名词 activation（激活/开通）。",
            family: "activation (n.激活/开通) | activate (v.激活) | solicitation (n.征集) | logistics (n.物流)。",
            details: "activation of an account/profile 意为账户/配置文件的激活。activate 是动词，不能直接作及物动词 complete 的宾语中心语。",
            cn: "用户必须输入一次性验证码，以完成其手机银行账户配置文件的激活。",
            jp: "ユーザーはモバイルバンキングプロファイルの有効化（activation）を完了するために、ワンタイム確認コードを入力しなければなりません。"
        }
    },
    {
        id: 12,
        target: "managerial",
        category: "中等",
        stem: "The newly appointed team leader demonstrated exceptional ________ competence during the departmental merger.",
        options: ["managerial", "manager", "manage", "managerially"],
        correct: "managerial",
        explanations: {
            guide: "修饰名词的派生形容词。exceptional ________ competence 结构中，修饰名词 competence（能力/胜任力），选形容词 managerial（管理上的）。",
            family: "managerial (adj.管理的) | manager (n.经理) | manage (v.管理) | managerially (adv.管理上地)。",
            details: "managerial competence 意为管理能力。manager 是名词，managerially 是副词，均不能作 competence 的前置定语。",
            cn: "新任命的团队负责人在部门合并期间展现出了卓越的管理才能。",
            jp: "新しく任命されたチームリーダーは、部門の統合中に優れた管理（managerial）能力を発揮しました。"
        }
    },
    {
        id: 13,
        target: "solicit",
        category: "困难",
        stem: "The non-profit organization strictly complies with municipal guidelines regarding the public ________ of donations.",
        options: ["solicitation", "solicit", "conservation", "proceeds"],
        correct: "solicitation",
        explanations: {
            guide: "派生名词考点。regarding the public ________ of donations 表达关于面向公众“募捐/征集捐款”的规定，选抽象名词 solicitation。",
            family: "solicitation (n.征集/募捐) | solicit (v.征求) | conservation (n.节约) | proceeds (n.收益)。",
            details: "solicitation of donations 意为募捐/征集捐款。solicit 是动词，不能在定冠词与形容词修饰下作介词 regarding 的宾语。",
            cn: "该非营利组织严格遵守市政关于公开募捐的相关指导准则。",
            jp: "その非営利団体は、寄付金の公的な勧誘/募集（solicitation）に関する市のガイドラインを厳格に順守しています。"
        }
    },
    {
        id: 14,
        target: "proceeds",
        category: "困难",
        stem: "After paying off all transaction fees and taxes, the net ________ from the real estate sale were distributed to shareholders.",
        options: ["proceeds", "proceeding", "proceedings", "procedure"],
        correct: "proceeds",
        explanations: {
            guide: "财务专有名词辨析。the net ________ 结合房产销售扣除税费后分给股东，选复数名词 proceeds（净收益/所得款）。",
            family: "proceeds (n.收益/所得款项) | proceeding (n.进行/行动) | proceedings (n.诉讼程序/会议记录) | procedure (n.步骤/程序)。",
            details: "net proceeds 指净收益/变现所得。注意区分 proceedings（法律诉讼程序/学术会议论文集）和 procedure（操作规程）。",
            cn: "在付清所有交易费用和税款后，房地产销售所得的净收益已分配给各位股东。",
            jp: "すべての取引手数料と税金を支払った後、不動産売却による純収益（proceeds）が株主に分配されました。"
        }
    },
    {
        id: 15,
        target: "conservation",
        category: "困难",
        stem: "The facility manager introduced automated LED lighting systems to promote corporate energy ________.",
        options: ["conservation", "conservative", "conservatively", "conserve"],
        correct: "conservation",
        explanations: {
            guide: "复合名词宾语考点。promote corporate energy ________ 结构中，修饰语 energy 后面接名词中心语，表达促进企业“节能”，选 conservation。",
            family: "conservation (n.节约/保存) | conservative (adj.保守的) | conservatively (adv.保守地) | conserve (v.节约)。",
            details: "energy conservation 属于能源与环保固定专有名词，意为节能。conservative 是形容词，conserve 是动词，均不能作中心语。",
            cn: "设施经理引入了自动化 LED 照明系统，以促进企业的能源节约。",
            jp: "施設管理者は、企業の省エネルギー（energy conservation）を推進するために自動LED照明システムを導入しました。"
        }
    },
    {
        id: 16,
        target: "segment",
        category: "困难",
        stem: "The executive committee decided to ________ the database by customer purchase history to deliver targeted promotional emails.",
        options: ["segment", "segmentation", "segmented", "solicit"],
        correct: "segment",
        explanations: {
            guide: "及物动词不定式考点。decided to 后面接动词原形，结合按购买历史对数据库进行“细分/划分”，选 segment。",
            family: "segment (v.细分/分割/n.部分) | segmentation (n.细分化) | segmented (adj.分割的) | solicit (v.征求)。",
            details: "to segment the database 意为对数据库进行细分。segmentation 是名词，不能跟在不定式符号 to 后面作谓语动词。",
            cn: "执行委员会决定根据客户购买历史细分数据库，以发送精准的促销电子邮件。",
            jp: "執行委員会は、ターゲットを絞ったプロモーションメールを配信するために、顧客の購入履歴ごとにデータベースをセグメント化/細分化する（segment）ことを決定しました。"
        }
    },
    {
        id: 17,
        target: "audit",
        category: "困难",
        stem: "The company's digital ledger was thoroughly ________ by a team of certified forensic accountants.",
        options: ["audited", "audit", "auditing", "auditor"],
        correct: "audited",
        explanations: {
            guide: "被动语态过去分词考点。was thoroughly ________ by... 结构中，助动词 was 和副词 thoroughly 后面接过去分词，表达账目被“彻底审计”，选 audited。",
            family: "audited (v-ed被审计的) | audit (n./v.原形) | auditing (n./v-ing) | auditor (n.审计员)。",
            details: "was audited by accountants 意为被会计师审计。auditor 是指审计人员，不能作被动语态的谓语动词分词。",
            cn: "该公司的数字账本由一组注册司法会计师进行了彻底的审计。",
            jp: "会社のデジタル元帳は、認定法医学会計士のチームによって徹底的に監査されました（audited）。"
        }
    },
    {
        id: 18,
        target: "logistics",
        category: "困难",
        stem: "The warehouse expansion required a ________ complex reorganization of shipping lanes and inventory storage racks.",
        options: ["logistically", "logistics", "logistic", "managerial"],
        correct: "logistically",
        explanations: {
            guide: "派生副词修饰形容词。a ________ complex reorganization 结构中，修饰形容词 complex（复杂的），表达“在物流操作层面上”复杂的重组，选副词 logistically。",
            family: "logistically (adv.在物流/后勤上) | logistics (n.物流) | logistic (adj.物流的) | managerial (adj.管理的)。",
            details: "logistically complex 意为物流操作层面上非常复杂的。logistics 是名词，logistic 是形容词，均不能直接修饰形容词 complex 作状语。",
            cn: "仓库扩建工程要求对运输通道和库存货架进行一项在物流操作层面上极其复杂的重组。",
            jp: "倉庫の拡張には、出荷レーンと在庫保管ラックのロジスティクス的に（logistically）複雑な再編成が必要でした。"
        }
    }
];