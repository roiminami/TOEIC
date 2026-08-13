// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data391-400.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "plumbing",
        pos: "名",
        ipa: "/ˈplʌmɪŋ/",
        cn: "水管设施，管道系统",
        jp: "水道管、配管",
        family: "plumber / plumb",
        tips: "设施维护高频：plumbing system/issue（管道系统/水管问题）。",
        desc: "The plumbing system is old."
    },
    {
        word: "spokesperson",
        pos: "名",
        ipa: "/ˈspoʊkspɜːrsn/",
        cn: "发言人，新闻发言人",
        jp: "報道官、スポークスパーソン",
        family: "spoke / speak / spokespersonship",
        tips: "企业公关高频：company spokesperson（公司发言人）。",
        desc: "The spokesperson read a statement."
    },
    {
        word: "verify",
        pos: "動",
        ipa: "/ˈverɪfaɪ/",
        cn: "核实，证实，确认",
        jp: "確認する、検証する",
        family: "verification / verifiable / verified",
        tips: "商务核对高频：verify employment/credentials（核实履历/凭证）。",
        desc: "Please verify your email address."
    },
    {
        word: "state-of-the-art",
        pos: "形",
        ipa: "/ˌsteɪt əv ði ˈɑːrt/",
        cn: "最先进的，顶尖的",
        jp: "最先端の、最新式の",
        family: "art / state",
        tips: "产品与设施高频：state-of-the-art facility/technology（最先进的设施/技术）。",
        desc: "They use state-of-the-art technology."
    },
    {
        word: "reimburse",
        pos: "動",
        ipa: "/ˌriːɪmˈbɜːrs/",
        cn: "报销，偿还",
        jp: "払い戻す、精算する",
        family: "reimbursement / reimbursable",
        tips: "财务与差旅高频：reimburse travel expenses（报销差旅费）。",
        desc: "We will reimburse travel costs."
    },
    {
        word: "cuisine",
        pos: "名",
        ipa: "/kwɪˈziːn/",
        cn: "菜肴，佳肴，烹饪",
        jp: "料理、調理法",
        family: "cuisines",
        tips: "餐饮与酒店高频：Italian/local cuisine（意式佳肴/当地美食）。",
        desc: "The hotel serves French cuisine."
    },
    {
        word: "discontinue",
        pos: "動",
        ipa: "/ˌdɪskənˈtɪnjuː/",
        cn: "终止，停产，中断",
        jp: "生産を中止する、取りやめる",
        family: "discontinued / discontinuation",
        tips: "产品生命周期高频：discontinue a product/service（停产某产品/中止服务）。",
        desc: "They decided to discontinue production."
    },
    {
        word: "culinary",
        pos: "形",
        ipa: "/ˈkʌlɪneri/",
        cn: "烹饪的，美食的",
        jp: "料理の、調理の",
        family: "culinarian",
        tips: "餐饮与职业高频：culinary arts/skills（烹饪艺术/技巧）。",
        desc: "She improved her culinary skills."
    },
    {
        word: "pottery",
        pos: "名",
        ipa: "/ˈpɑːtəri/",
        cn: "陶器，制陶工艺",
        jp: "陶器、焼き物",
        family: "potter / potteries",
        tips: "艺术与展览高频：handmade pottery（手工陶器），pottery workshop（陶艺工作坊）。",
        desc: "He makes handmade clay pottery."
    },
    {
        word: "defective",
        pos: "形",
        ipa: "/dɪˈfektɪv/",
        cn: "有缺陷的，有故障的",
        jp: "欠陥のある、不良の",
        family: "defect / defectively / defectiveness",
        tips: "质量控制与退货高频：defective merchandise/product（有缺陷的商品/产品）。",
        desc: "Return all defective items today."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "reimburse",
        category: "简单",
        stem: "The accounting department will ________ employees for any pre-approved business travel expenses.",
        options: ["reimburse", "discontinue", "verify", "defective"],
        correct: "reimburse",
        explanations: {
            guide: "财务报销动词考点。will 后面接动词原形，结合预先批准的出差费用（travel expenses），选 reimburse（报销/偿还）。",
            family: "reimburse (v.报销) | discontinue (v.停产/中止) | verify (v.核实) | defective (adj.有缺陷的)。",
            details: "reimburse employees for expenses 属于托业经典财务词组，意为向员工报销费用。",
            cn: "财务部将为员工报销任何预先批准的商务差旅费用。",
            jp: "経理部門は、事前に承認された出張経費について従業員に精算（reimburse）します。"
        }
    },
    {
        id: 2,
        target: "defective",
        category: "简单",
        stem: "Customers may return any ________ merchandise within thirty days for a full refund.",
        options: ["defective", "state-of-the-art", "culinary", "spokesperson"],
        correct: "defective",
        explanations: {
            guide: "退货场景形容词考点。修饰 merchandise（商品），结合全额退款（full refund），选 defective（有缺陷的/有故障的）。",
            family: "defective (adj.有缺陷的) | state-of-the-art (adj.最先进的) | culinary (adj.烹饪的) | spokesperson (n.发言人)。",
            details: "defective merchandise 意为有缺陷/故障的商品。state-of-the-art（最先进的）不符合退款理由。",
            cn: "顾客可以在三十天内退回任何有缺陷的商品并获得全额退款。",
            jp: "お客様は、30日以内であれば欠陥のある（defective）商品をご返品いただき、全額返金を受けることができます。"
        }
    },
    {
        id: 3,
        target: "spokesperson",
        category: "简单",
        stem: "A company ________ issued an official statement regarding the recent merger negotiations.",
        options: ["spokesperson", "plumbing", "cuisine", "pottery"],
        correct: "spokesperson",
        explanations: {
            guide: "企业公关人物名词。发表官方声明（issued an official statement）的主语，选 spokesperson（发言人）。",
            family: "spokesperson (n.发言人) | plumbing (n.水管设施) | cuisine (n.佳肴) | pottery (n.陶器)。",
            details: "company spokesperson 指公司新闻发言人。其余选项均非代表公司发表声明的人员实体。",
            cn: "一位公司发言人就最近的合并谈判发表了一份官方声明。",
            jp: "会社の報道官（spokesperson）は、最近の合併交渉に関する公式声明を発表しました。"
        }
    },
    {
        id: 4,
        target: "verify",
        category: "简单",
        stem: "Please ________ your shipping address carefully before submitting the online order.",
        options: ["verify", "reimburse", "discontinue", "culinary"],
        correct: "verify",
        explanations: {
            guide: "祈使句动词原形。Please 后面接动词原形，表达提交订单前“核实/确认”收货地址，选 verify。",
            family: "verify (v.核实/确认) | reimburse (v.报销) | discontinue (v.中止) | culinary (adj.烹饪的)。",
            details: "verify your shipping address 意为核实您的收货地址。culinary 是形容词，不能在祈使句中作谓语动词。",
            cn: "请在提交在线订单之前仔细核实您的收货地址。",
            jp: "オンライン注文を送信する前に、配送先住所を慎重に確認（verify）してください。"
        }
    },
    {
        id: 5,
        target: "cuisine",
        category: "简单",
        stem: "The luxury hotel features three top-rated restaurants offering fine international ________.",
        options: ["cuisine", "pottery", "plumbing", "spokesperson"],
        correct: "cuisine",
        explanations: {
            guide: "高级餐饮名词考点。fine international ________ 结合顶级餐厅，表达提供精致的国际“菜肴/佳肴”，选 cuisine。",
            family: "cuisine (n.佳肴/菜肴) | pottery (n.陶器) | plumbing (n.管道) | spokesperson (n.发言人)。",
            details: "fine cuisine 意为精美佳肴。pottery（陶器）、plumbing（水管）均非餐厅供应的食品内容。",
            cn: "这家豪华酒店拥有三家顶级餐厅，提供精致的国际佳肴。",
            jp: "その高級ホテルには、質の高い国際料理（cuisine）を提供する3つの最高評価のレストランがあります。"
        }
    },
    {
        id: 6,
        target: "discontinue",
        category: "简单",
        stem: "The manufacturer decided to ________ the older product line due to declining market demand.",
        options: ["discontinue", "reimburse", "verify", "culinary"],
        correct: "discontinue",
        explanations: {
            guide: "动词不定式与产品线搭配。decided to 后面接动词原形，结合市场需求下降，表达“停产/终止”旧产品线，选 discontinue。",
            family: "discontinue (v.停产/终止) | reimburse (v.报销) | verify (v.核实) | culinary (adj.烹饪的)。",
            details: "to discontinue a product line 意为停产某产品线。reimburse（报销）与处置旧产品线语境不符。",
            cn: "由于市场需求下降，制造商决定停产旧产品线。",
            jp: "メーカーは市場需要の低下のため、旧製品ラインの生産を中止（discontinue）することを決定しました。"
        }
    },
    {
        id: 7,
        target: "state-of-the-art",
        category: "中等",
        stem: "The new research laboratory is equipped with ________ technology to support groundbreaking medical discoveries.",
        options: ["state-of-the-art", "defective", "culinary", "discontinued"],
        correct: "state-of-the-art",
        explanations: {
            guide: "形容词作前置定语。修饰 technology（技术），表达实验室配备了“最先进的/顶尖的”技术，选 state-of-the-art。",
            family: "state-of-the-art (adj.最先进的) | defective (adj.有缺陷的) | culinary (adj.烹饪的) | discontinued (adj.停产的)。",
            details: "state-of-the-art technology 意为最先进的技术。defective（缺陷的）、discontinued（停产的）均破坏科研优势语境。",
            cn: "新的研究实验室配备了最先进的技术，以支持突破性的医学发现。",
            jp: "新しい研究実験室には、画期的な医学的発見を支援するための最先端の（state-of-the-art）技術が備わっています。"
        }
    },
    {
        id: 8,
        target: "plumbing",
        category: "中等",
        stem: "Maintenance workers were called immediately to repair a severe ________ leak in the basement.",
        options: ["plumbing", "pottery", "cuisine", "spokesperson"],
        correct: "plumbing",
        explanations: {
            guide: "建筑设施复合名词考点。________ leak 表达地下室的“水管/管道”泄漏，选 plumbing。",
            family: "plumbing (n.管道设施) | pottery (n.陶器) | cuisine (n.佳肴) | spokesperson (n.发言人)。",
            details: "plumbing leak 意为水管漏水。pottery（陶器）、cuisine（菜肴）均非发生液体泄漏的建筑设施管道。",
            cn: "维修工人立即被召来修复地下室严重的水管泄漏。",
            jp: "地下室での深刻な配管（plumbing）漏れを修理するため、メンテナンス作業員が直ちに呼び出されました。"
        }
    },
    {
        id: 9,
        target: "culinary",
        category: "中等",
        stem: "The vocational institute offers specialized diploma programs in the ________ arts.",
        options: ["culinary", "state-of-the-art", "defective", "reimbursed"],
        correct: "culinary",
        explanations: {
            guide: "专有名词固定修饰。the ________ arts 属于职业教育经典词组，意为“烹饪艺术/烹饪专业”，选 culinary。",
            family: "culinary (adj.烹饪的) | state-of-the-art (adj.最先进的) | defective (adj.有缺陷的) | reimbursed (adj.受报销的)。",
            details: "culinary arts 指烹饪艺术。state-of-the-art（先进的）不能与 arts 组成此特定职业学科名称。",
            cn: "该职业学院提供烹饪艺术领域的专业文凭课程。",
            jp: "その職業訓練校は、調理（culinary）分野の専門ディプロマプログラムを提供しています。"
        }
    },
    {
        id: 10,
        target: "pottery",
        category: "中等",
        stem: "Local artisans displayed their unique handmade ________ at the annual community craft fair.",
        options: ["pottery", "plumbing", "cuisine", "spokesperson"],
        correct: "pottery",
        explanations: {
            guide: "手工艺品名词考点。handmade ________ 结合当地手艺人在工艺品市集上展示，选 pottery（陶器）。",
            family: "pottery (n.陶器) | plumbing (n.水管) | cuisine (n.佳肴) | spokesperson (n.发言人)。",
            details: "handmade pottery 意为手工陶器。plumbing（水管）并非手工展出拍卖的工艺作品。",
            cn: "当地手艺人在年度社区工艺品市集上展示了他们独一无二的手工陶器。",
            jp: "地元の職人たちは、年次コミュニティクラフトフェアでユニークな手作り陶器（pottery）を展示しました。"
        }
    },
    {
        id: 11,
        target: "reimburse",
        category: "中等",
        stem: "Employees must attach all original receipts to their expense claims to qualify for ________.",
        options: ["reimbursement", "reimburse", "discontinuation", "verification"],
        correct: "reimbursement",
        explanations: {
            guide: "派生名词宾语考点。qualify for ________ 结构中，介词 for 后面接抽象名词形式 reimbursement（报销/退款）。",
            family: "reimbursement (n.报销/精算) | reimburse (v.报销) | discontinuation (n.中止) | verification (n.确认)。",
            details: "qualify for reimbursement 意为符合报销资格。reimburse 是动词，不能直接跟在介词 for 后面作宾语。",
            cn: "员工必须在其费用报销申请中附上所有原始收据，以获得报销资格。",
            jp: "精算（reimbursement）を受ける資格を得るには、従業員は経費請求書にすべての領収書原文を添付しなければなりません。"
        }
    },
    {
        id: 12,
        target: "verify",
        category: "中等",
        stem: "The loan officer requested additional employment ________ before processing the mortgage application.",
        options: ["verification", "verify", "reimbursement", "discontinuation"],
        correct: "verification",
        explanations: {
            guide: "复合名词定语考点。employment ________ 属于金融与 HR 常用词组，表达“职场/就业履历核实”，选 verification。",
            family: "verification (n.核实/确认) | verify (v.核实) | reimbursement (n.报销) | discontinuation (n.中止)。",
            details: "employment verification 意为在职/履历核实。verify 是动词，不能在名词 employment 后面充当名词中心语。",
            cn: "信贷员在处理抵押贷款申请前要求提供额外的在职履历核实。",
            jp: "ローン担当者は、住宅ローン申請を処理する前に追加の雇用証明/確認（verification）を要求しました。"
        }
    },
    {
        id: 13,
        target: "defective",
        category: "困难",
        stem: "Quality control inspectors identified a structural ________ in the electronic component during batch testing.",
        options: ["defect", "defective", "plumbing", "cuisine"],
        correct: "defect",
        explanations: {
            guide: "派生名词宾语考点。identified a structural ________ 结构中，形容词 structural 后面接名词形式 defect（缺陷/故障）。",
            family: "defect (n.缺陷/瑕疵) | defective (adj.有缺陷的) | plumbing (n.水管) | cuisine (n.佳肴)。",
            details: "structural defect 意为结构缺陷。defective 是形容词，不能直接在冠词 a 和形容词 structural 之后作及物动词 identify 的宾语。",
            cn: "质量控制检查员在批量测试期间发现电子元件存在结构缺陷。",
            jp: "品質管理検査員はバッチテスト中、電子部品に構造上の欠陥（defect）があることを特定しました。"
        }
    },
    {
        id: 14,
        target: "discontinue",
        category: "困难",
        stem: "The sudden ________ of the software support service caused widespread operational confusion among corporate clients.",
        options: ["discontinuation", "discontinue", "reimbursement", "verification"],
        correct: "discontinuation",
        explanations: {
            guide: "派生抽象名词主语考点。The sudden ________ of... 结构中，在定冠词与形容词后面填写抽象名词 discontinuation（中止/停止）。",
            family: "discontinuation (n.中止/停止) | discontinue (v.中止) | reimbursement (n.报销) | verification (n.确认)。",
            details: "discontinuation of service 意为服务的停止/中止。discontinue 是动词，不能在定冠词和形容词修饰下作句子主语。",
            cn: "软件支持服务的突然中止给企业客户造成了广泛的运营混乱。",
            jp: "ソフトウェアサポートサービスが突然中止（discontinuation）されたことで、企業クライアントの間に広範な業務混乱が生じました。"
        }
    },
    {
        id: 15,
        target: "state-of-the-art",
        category: "困难",
        stem: "The headquarters features ________ conference rooms that set a new industry benchmark for remote collaboration.",
        options: ["state-of-the-art", "defective", "discontinued", "culinary"],
        correct: "state-of-the-art",
        explanations: {
            guide: "前置形容词修饰语。修饰 conference rooms（会议室），表达树立行业新标杆的“最先进的”会议室，选 state-of-the-art。",
            family: "state-of-the-art (adj.最先进的) | defective (adj.有缺陷的) | discontinued (adj.停产的) | culinary (adj.烹饪的)。",
            details: "state-of-the-art conference rooms 意为最先进的会议室。defective（缺陷的）、discontinued（停产的）与树立新标杆（set a benchmark）语境矛盾。",
            cn: "公司总部配有最先进的会议室，为远程协作树立了新的行业标杆。",
            jp: "本社には、リモートコラボレーションの新しい業界ベンチマークを設定する最先端の（state-of-the-art）会議室が備わっています。"
        }
    },
    {
        id: 16,
        target: "spokesperson",
        category: "困难",
        stem: "Official company ________ confirmed that contract negotiations are currently ongoing between both corporate parties.",
        options: ["spokespersons", "spokesperson", "cuisines", "plumbings"],
        correct: "spokespersons",
        explanations: {
            guide: "复数名词主语考点。在缺乏单数冠词 A/An 且后接复数谓语动词 confirmed 的主语位置，选复数形式 spokespersons（发言人们）。",
            family: "spokespersons (n.复数发言人) | spokesperson (n.单数发言人) | cuisines (n.佳肴) | plumbings (n.管道)。",
            details: "official company spokespersons 意为官方发言人们。在缺乏单数限定词的情况下选用复数形式 spokespersons。",
            cn: "公司官方发言人们证实，双方之间的合同谈判目前正在进行中。",
            jp: "会社の公式報道官（spokespersons）は、両社間の契約交渉が現在進行中であることを確認しました。"
        }
    },
    {
        id: 17,
        target: "cuisine",
        category: "困难",
        stem: "Renowned international chefs gathered at the festival to celebrate traditional regional ________.",
        options: ["cuisine", "culinary", "pottery", "defective"],
        correct: "cuisine",
        explanations: {
            guide: "名形辨析考点（cuisine vs culinary）。在形容词 regional 后面接名词中心语，表达庆祝传统的地方“菜肴/美食”，选 cuisine。",
            family: "cuisine (n.菜肴/佳肴) | culinary (adj.烹饪的) | pottery (n.陶器) | defective (adj.有缺陷的)。",
            details: "regional cuisine 意为地方菜肴/烹饪美食。culinary 是形容词，不能直接紧跟在形容词 regional 后面作宾语中心语。",
            cn: "来自世界各地的著名厨师聚集在美食节上，庆祝传统的区域佳肴。",
            jp: "著名な国際的シェフたちがフェスティバルに集まり、伝統的な地域の料理（cuisine）を称えました。"
        }
    },
    {
        id: 18,
        target: "reimburse",
        category: "困难",
        stem: "All travel claims must be submitted within two business weeks in order to be completely ________.",
        options: ["reimbursable", "reimburse", "verification", "defective"],
        correct: "reimbursable",
        explanations: {
            guide: "派生表语形容词考点。in order to be ________ 结构中，系动词 be 后面接形容词，表达发票可被“予以报销的”，选 reimbursable。",
            family: "reimbursable (adj.可报销的) | reimburse (v.报销) | verification (n.确认) | defective (adj.有缺陷的)。",
            details: "to be reimbursable 意为可予以报销。reimburse 是动词原形，不能直接跟在系动词 be 后面作表语形容词。",
            cn: "所有差旅费报销申请必须在两个工作周内提交，以便能够完全予以报销。",
            jp: "すべての出張費用の請求は、完全に払い戻し可能（reimbursable）となるように2営業週間以内に提出されなければなりません。"
        }
    }
];