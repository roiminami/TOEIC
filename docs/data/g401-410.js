// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data131-140.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "supervisor",
        pos: "名",
        ipa: "/ˈsuːpərvaɪzər/",
        cn: "主管，监督人",
        jp: "上司、監督者",
        family: "supervise / supervision / supervisory",
        tips: "职场沟通极高频：report to a supervisor（向主管汇报）或 immediate supervisor（直属主管）。",
        desc: "Ask your supervisor for help."
    },
    {
        word: "storage",
        pos: "名",
        ipa: "/ˈstɔːrɪdʒ/",
        cn: "储存，仓库，存储容量",
        jp: "保管、収納、倉庫",
        family: "store / storeroom / stored",
        tips: "办公与物流高频：storage room（储藏室）或 storage capacity（存储容量/仓储能力）。",
        desc: "The boxes are in storage."
    },
    {
        word: "invoice",
        pos: "名/動",
        ipa: "/ˈɪnvɔɪs/",
        cn: "发票，请款单；开立发票",
        jp: "請求書、送り状",
        family: "invoicing / invoiced",
        tips: "财务与采购核心词：issue an invoice（开具发票）或 itemized invoice（明细发票）。",
        desc: "Please pay the invoice online."
    },
    {
        word: "associate",
        pos: "名/動/形",
        ipa: "/əˈsoʊʃieɪt/",
        cn: "同事，副职；关联；副的",
        jp: "同僚、提携する、副〜",
        family: "association / associated / disassociate",
        tips: "职场头衔与逻辑关系高频：sales associate（销售员）或 be associated with（与……相关）。",
        desc: "He is a sales associate."
    },
    {
        word: "revise",
        pos: "動",
        ipa: "/rɪˈvaɪz/",
        cn: "修改，修订",
        jp: "修正する、改訂する",
        family: "revision / revised / reviser",
        tips: "商务文件处理高频：revise a proposal/report（修改方案/报告）；名词形式为 revision（版本/修订）。",
        desc: "She will revise the report."
    },
    {
        word: "appliance",
        pos: "名",
        ipa: "/əˈplaɪəns/",
        cn: "器具，家用电器",
        jp: "電化製品、器具",
        family: "apply / applicant / application / applicable",
        tips: "零售与家居高频：household appliances（家用电器）或 energy-efficient appliances（节能电器）。",
        desc: "We bought a new appliance."
    },
    {
        word: "ensure",
        pos: "動",
        ipa: "/ɪnˈʃʊr/",
        cn: "确保，保证",
        jp: "〜を保全する、確実にする",
        family: "sure / assurance / ensurement",
        tips: "Part 5/6 语法与阅读高频：ensure that + 从句（确保……）；注意与 assure（向某人保证）的区别。",
        desc: "Ensure the door is locked."
    },
    {
        word: "catering",
        pos: "名",
        ipa: "/ˈkeɪtərɪŋ/",
        cn: "餐饮服务，宴席包办",
        jp: "ケータリング、料理手配",
        family: "cater / caterer",
        tips: "商务宴会与活动策划高频：catering service（餐饮服务公司）或 catering manager（餐饮经理）。",
        desc: "They hired a catering service."
    },
    {
        word: "inventory",
        pos: "名",
        ipa: "/ˈɪnvəntɔːri/",
        cn: "库存，存货清单",
        jp: "在庫、棚卸し",
        family: "invent / inventor / inventorial",
        tips: "供应链与零售核心词：take inventory（清点库存）或 in inventory（有存货）。",
        desc: "We must check the inventory."
    },
    {
        word: "warranty",
        pos: "名",
        ipa: "/ˈwɔːrənti/",
        cn: "保修，保用单",
        jp: "保証、保証書",
        family: "warrant / warrantor",
        tips: "售后服务核心词：under warranty（在保修期内）或 one-year warranty（一年保修期）。",
        desc: "It has a two-year warranty."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "supervisor",
        category: "简单",
        stem: "New team members should report any schedule conflicts directly to their immediate ________.",
        options: ["supervisor", "supervision", "appliance", "storage"],
        correct: "supervisor",
        explanations: {
            guide: "职场称谓名词。their immediate ________ 搭配向其汇报日程冲突，称谓选 supervisor（直属主管）。",
            family: "supervisor (n.主管) | supervision (n.监督/管理) | appliance (n.电器) | storage (n.储存)。",
            details: "immediate supervisor 指直属主管。supervision 是抽象名词（监督），不能作为汇报工作的对象。",
            cn: "新团队成员如有任何日程冲突，应直接向其直属主管汇报。",
            jp: "新しいチームメンバーは、スケジュールの変更があれば直属の上司（supervisor）に直接報告してください。"
        }
    },
    {
        id: 2,
        target: "warranty",
        category: "简单",
        stem: "The new office refrigerator comes with a standard one-year manufacturer ________.",
        options: ["warranty", "invoice", "catering", "revise"],
        correct: "warranty",
        explanations: {
            guide: "售后条款名词。comes with a standard one-year manufacturer ________ 结合采购电器，选 warranty（保修/质保）。",
            family: "warranty (n.保修) | invoice (n.发票) | catering (n.餐饮服务) | revise (v.修改)。",
            details: "manufacturer warranty 指制造商保修。revise 是动词，无法在冠词 a 之后充当名词。",
            cn: "这台新办公用冰箱附带标准的一年制造商质保。",
            jp: "新しいオフィス用冷蔵庫には、標準で1年間のメーカー保証（warranty）が付いています。"
        }
    },
    {
        id: 3,
        target: "revise",
        category: "简单",
        stem: "The editor asked the writer to ________ the second chapter of the manuscript before publication.",
        options: ["revise", "revision", "ensure", "associate"],
        correct: "revise",
        explanations: {
            guide: "动词不定式考点。asked the writer to 后面接动词原形，表达“修改/修订”手稿第二章，选 revise。",
            family: "revise (v.修改) | revision (n.修订本/修改) | ensure (v.确保) | associate (n./v.同事/关联)。",
            details: "to revise the manuscript 意为修改手稿。revision 是名词，不能跟在不定式符号 to 后面。",
            cn: "编辑要求作者在出版前修改手稿的第二章。",
            jp: "編集者は著者に対し、出版前に原稿の第2章を修正する（revise）よう求ました。"
        }
    },
    {
        id: 4,
        target: "invoice",
        category: "简单",
        stem: "The accounting department received an itemized ________ for the recently purchased office furniture.",
        options: ["invoice", "appliance", "storage", "supervisor"],
        correct: "invoice",
        explanations: {
            guide: "财务凭证名词。accounting department（财务部）收到的采购账单凭证选 invoice（发票/请款单）。",
            family: "invoice (n.发票/请款单) | appliance (n.电器) | storage (n.仓库) | supervisor (n.主管)。",
            details: "itemized invoice 指明细发票/费用请款单。appliance（电器）、storage（仓库）均非财务核销的凭证文档。",
            cn: "财务部收到了最近采购的办公家具的明细发票。",
            jp: "経理部門は、最近購入したオフィス家具の明細請求書（invoice）を受け取りました。"
        }
    },
    {
        id: 5,
        target: "storage",
        category: "简单",
        stem: "All extra filing cabinets were moved into the basement ________ room.",
        options: ["storage", "stored", "ensure", "catering"],
        correct: "storage",
        explanations: {
            guide: "办公场所复合名词。basement ________ room 属于办公设施固定搭配，意为“地下储藏室”，选 storage。",
            family: "storage (n.储存/仓库) | stored (adj.储存的) | ensure (v.确保) | catering (n.餐饮服务)。",
            details: "storage room 意为储藏室/仓库。stored 是分词，修饰 room 时不及名词直接作前置定语构成的复合名词标准。",
            cn: "所有多余的文档柜都被移到了地下储藏室。",
            jp: "余分なファイルキャビネットはすべて地下の保管（storage）室に移動されました。"
        }
    },
    {
        id: 6,
        target: "ensure",
        category: "简单",
        stem: "Please ________ that all lights are turned off before leaving the conference hall.",
        options: ["ensure", "assurance", "revise", "inventory"],
        correct: "ensure",
        explanations: {
            guide: "祈使句动词原形与从句搭配。Please 后面接动词原形，引导 that 从句，表达“确保”灯已熄灭，选 ensure。",
            family: "ensure (v.确保) | assurance (n.保证/确信) | revise (v.修改) | inventory (n.库存)。",
            details: "ensure that... 意为“确保……”。assurance 是名词，不能紧跟在 Please 后充当谓语动词。",
            cn: "离开会议厅前，请确保所有灯光均已关闭。",
            jp: "会議ホールを出る前に、すべての照明が消えていることを確認（ensure）してください。"
        }
    },
    {
        id: 7,
        target: "inventory",
        category: "中等",
        stem: "Store managers conduct a complete ________ check at the end of every quarter.",
        options: ["inventory", "inventor", "supervisor", "warranty"],
        correct: "inventory",
        explanations: {
            guide: "商业管理复合名词。________ check 表达季度末进行的“库存盘点/存货检查”，选 inventory。",
            family: "inventory (n.库存/存货) | inventor (n.发明家) | supervisor (n.主管) | warranty (n.质保)。",
            details: "inventory check 意为库存盘点。inventor 指发明家，与季度管理动作逻辑不符。",
            cn: "门店经理在每个季度末都会进行一次全面的库存盘点。",
            jp: "店舗マネージャーは四半期末ごとに完全な在庫（inventory）チェックを実施します。"
        }
    },
    {
        id: 8,
        target: "appliance",
        category: "中等",
        stem: "The retail store specializes in selling energy-efficient household ________ such as refrigerators and microwave ovens.",
        options: ["appliances", "appliance", "invoices", "warranties"],
        correct: "appliances",
        explanations: {
            guide: "复数名词举例搭配。后文举例（refrigerators and microwave ovens）为复数，指各类家用“电器”，选 appliances。",
            family: "appliances (n.复数电器) | appliance (n.单数电器) | invoices (n.发票) | warranties (n.质保)。",
            details: "household appliances 指家用电器。后文有 multiple 具体的电器具例，须用复数形式 appliances。",
            cn: "该零售店专门销售冰箱和微波炉等节能家用电器。",
            jp: "その小売店は、冷蔵庫や電子レンジなどの省エネ家電製品（appliances）の販売を専門としています。"
        }
    },
    {
        id: 9,
        target: "associate",
        category: "中等",
        stem: "Mr. Kim was recently promoted to senior sales ________ after exceeding his quarterly goals.",
        options: ["associate", "association", "supervisor", "inventory"],
        correct: "associate",
        explanations: {
            guide: "职场职位称谓。senior sales ________ 是商业固定头衔，意为“高级销售专员/高级销售员”，选 associate。",
            family: "associate (n.专员/同事/v.关联) | association (n.协会/关联) | supervisor (n.主管) | inventory (n.库存)。",
            details: "sales associate 是常见销售职位名称。association 意为机构/协会，不能用于指代个人职衔。",
            cn: "金先生在超额完成季度目标后，最近被提升为高级销售专员。",
            jp: "金氏は四半期目標を達成した後、上級販売担当者（associate）に昇进しました。"
        }
    },
    {
        id: 10,
        target: "catering",
        category: "中等",
        stem: "The committee decided to hire a local ________ company to handle the food for the annual gala.",
        options: ["catering", "caterer", "storage", "appliance"],
        correct: "catering",
        explanations: {
            guide: "服务行业复合名词。________ company 指负责提供餐饮宴席服务的“餐饮服务公司”，选 catering。",
            family: "catering (n./adj.餐饮服务的) | caterer (n.餐饮承办商个人) | storage (n.储存) | appliance (n.电器)。",
            details: "catering company 意为餐饮承办/服务公司。caterer 已经表示承办人/公司，若说 caterer company 会造成名词冗余。",
            cn: "委员会决定雇用一家当地的餐饮服务公司来负责年度盛宴的餐饮。",
            jp: "委員会は年次ガラパーティーの食事を担当するため、地元のケータリング（catering）会社を雇うことに決めました。"
        }
    },
    {
        id: 11,
        target: "ensure",
        category: "中等",
        stem: "The quality control team implemented strict procedures to ________ compliance with national safety standards.",
        options: ["ensure", "ensuring", "revise", "associate"],
        correct: "ensure",
        explanations: {
            guide: "动词不定式与宾语搭配。to 后面接动词原形，表达采取措施以“确保”符合安全标准，选 ensure。",
            family: "ensure (v.确保) | ensuring (v-ing) | revise (v.修改) | associate (v.关联)。",
            details: "procedures to ensure compliance 意为确保合规的程序。ensuring 是分词，不能跟在不定式符号 to 后。",
            cn: "质量控制团队实施了严格的程序，以确保符合国家安全标准。",
            jp: "品質管理チームは、国の安全基準への準拠を確保する（ensure）ための厳格な手順を導入しました。"
        }
    },
    {
        id: 12,
        target: "revise",
        category: "中等",
        stem: "The legal team made several urgent ________ to the employment contract before it was signed.",
        options: ["revisions", "revise", "supervisions", "inventories"],
        correct: "revisions",
        explanations: {
            guide: "动词派生名词短语。make revisions to 是固定短语，意为“对……进行修改”，在 several 之后用复数 revisions。",
            family: "revisions (n.修改/修订复数) | revise (v.修改) | supervisions (n.监督复数) | inventories (n.库存复数)。",
            details: "make revisions 意为做出修改。revise 是动词，不能直接放在形容词 urgent 之后作宾语。",
            cn: "法务团队在签署合同前，对雇佣合同进行了几处紧急修改。",
            jp: "法務チームは、雇用契約書が署名される前に、契約書にいくつかの緊急の修正（revisions）を加えました。"
        }
    },
    {
        id: 13,
        target: "supervisor",
        category: "困难",
        stem: "The regional manager conducts periodic ________ visits to assess the operational efficiency of branch offices.",
        options: ["supervisory", "supervisor", "associative", "inventorial"],
        correct: "supervisory",
        explanations: {
            guide: "派生形容词考点。修饰 visits（视察/访问），表达“监督性/管理性的视察”，选形容词 supervisory。",
            family: "supervisory (adj.监督的/管理的) | supervisor (n.主管) | associative (adj.联想的) | inventorial (adj.库存的)。",
            details: "supervisory visits 意为督导视察。supervisor 是名词，修饰 visits 时不如专业形容词 supervisory 地道精准。",
            cn: "区域经理定期进行督导视察，以评估各分公司的运营效率。",
            jp: "地域マネージャーは、支店の業務効率を評価するために定期的な監督（supervisory）訪問を実施しています。"
        }
    },
    {
        id: 14,
        target: "associate",
        category: "困难",
        stem: "Although they work in different departments, the two research projects are closely ________ with each other.",
        options: ["associated", "associate", "ensured", "revised"],
        correct: "associated",
        explanations: {
            guide: "被动语态/固定短语高阶搭配。be closely associated with 属于商务英语核心短语，意为“与……密切相关”，选 associated。",
            family: "associated (adj./v-ed关联的) | associate (v.关联) | ensured (v-ed确保的) | revised (v-ed修改的)。",
            details: "be associated with... 意为与……相关。associate 是动词原形，不能直接与 are 搭配构成系表/被动结构。",
            cn: "尽管它们在不同的部门进行，但这两个研究项目彼此之间有着密切的联系。",
            jp: "異なる部門で働いているものの、2つの研究プロジェクトは互いに密接に関連して（associated）います。"
        }
    },
    {
        id: 15,
        target: "catering",
        category: "困难",
        stem: "The resort hotel offers comprehensive event planning services, including full-service ________ for corporate retreats.",
        options: ["catering", "caterer", "invoice", "warranty"],
        correct: "catering",
        explanations: {
            guide: "抽象服务名词考点。including full-service ________ 表达包含全套的“宴席/餐饮服务”，选不可数名词 catering。",
            family: "catering (n.餐饮服务/宴席包办) | caterer (n.餐饮服务商) | invoice (n.发票) | warranty (n.质保)。",
            details: "full-service catering 意为全套餐饮服务。caterer 指具体服务商个人/公司，在此处与 full-service 搭配表达服务内容时用 catering。",
            cn: "该度假酒店提供全面的活动策划服务，包括为企业研讨休养活动提供全套餐饮服务。",
            jp: "リゾートホテルは、企業研修のためのフルサービスのカatering（catering）を含む、包括的なイベント企画サービスを提供しています。"
        }
    },
    {
        id: 16,
        target: "invoice",
        category: "困难",
        stem: "Clients will be ________ for any additional consulting hours spent beyond the original agreement.",
        options: ["invoiced", "invoice", "revised", "ensured"],
        correct: "invoiced",
        explanations: {
            guide: "动词被动语态一词多义。will be ________ 表示客户将被“开立请款单/收钱”，选过去分词 invoiced。",
            family: "invoiced (v-ed被开请款单的) | invoice (v./n.开发票/发票) | revised (v-ed被修改的) | ensured (v-ed被确保的)。",
            details: "be invoiced for sth 意为因某项费用而被开具请款单。invoice 为原形动词，不能与 will be 直接构成被动语态。",
            cn: "超出原协议范围的任何额外咨询时间，都将向客户开具请款单。",
            jp: "当初の合意を超えて費やされた追加のコンサルティング時間については、クライアントに請求書が送付され（invoiced）ます。"
        }
    },
    {
        id: 17,
        target: "warranty",
        category: "困难",
        stem: "The contract states that any unauthorized repairs will immediately void the product's ________.",
        options: ["warranty", "warrant", "supervision", "catering"],
        correct: "warranty",
        explanations: {
            guide: "法律与售后高阶短语。void the product's ________ 属于条款固定搭配，意为“使产品的质保失效”，选 warranty。",
            family: "warranty (n.质保/保修) | warrant (n.许可证/搜查令) | supervision (n.监督) | catering (n.餐饮服务)。",
            details: "void the warranty 是商务与法律合同中的标准表达。warrant 作名词意为搜查令或依据，非产品质量保证单之意。",
            cn: "合同规定，任何未经授权的修理都将立即使产品的质保失效。",
            jp: "契約書には、無許可の修理を行った場合、製品の保証（warranty）は直ちに無効になると明記されています。"
        }
    },
    {
        id: 18,
        target: "storage",
        category: "困难",
        stem: "To handle the increase in online orders, the logistics provider expanded its total ________ capacity by thirty percent.",
        options: ["storage", "stored", "inventories", "associates"],
        correct: "storage",
        explanations: {
            guide: "高阶仓储术语。expanded its total ________ capacity 属于物流核心搭配，意为扩大其总“仓储容量”，选 storage。",
            family: "storage (n.仓储/储存) | stored (adj.存储的) | inventories (n.库存复数) | associates (n.同事复数)。",
            details: "storage capacity 意为仓储容量。stored 是分词，不能直接放在形容词 total 后面作前置名词定语。",
            cn: "为了应对线上订单的增加，该物流供应商将其总仓储容量扩大了 30%。",
            jp: "オンライン注文の増加に対応するため、物流プロバイダーは全体の保管（storage）容量を30%拡大しました。"
        }
    }
];