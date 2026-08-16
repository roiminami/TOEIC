// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data511-520.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "commended",
        pos: "動",
        ipa: "/kəˈmendɪd/",
        cn: "赞赏，表彰（commend的过去式/分词）",
        jp: "称賛された、表彰された",
        family: "commend / commendable / commendation",
        tips: "HR与管理考点：commend sb for sth（因某事表彰某人）。",
        desc: "The manager commended her efforts."
    },
    {
        word: "expenditures",
        pos: "名",
        ipa: "/ɪkˈspendɪtʃərz/",
        cn: "开支，支出，经费（复数）",
        jp: "支出、経費（複数）",
        family: "expenditure / expend / expense",
        tips: "财报考点：capital expenditures（资本开支），reduce expenditures（削减开支）。",
        desc: "Total expenditures were reduced."
    },
    {
        word: "epidemic",
        pos: "名/形",
        ipa: "/ˌepɪˈdemɪk/",
        cn: "流行病，泛滥；流行性的",
        jp: "流行病、蔓延；流行性の",
        family: "epidemiological / epidemiologist",
        tips: "公共卫生高频：flu epidemic（流感暴发），reach epidemic levels（达到泛滥水平）。",
        desc: "The flu epidemic spread rapidly."
    },
    {
        word: "arbitration",
        pos: "名",
        ipa: "/ˌɑːrbɪˈtreɪʃn/",
        cn: "仲裁，调解",
        jp: "仲裁、調停",
        family: "arbitrate / arbitrator / arbitrary",
        tips: "法务与合同高频：submit to arbitration（提交仲裁），binding arbitration（具有约束力的仲裁）。",
        desc: "They submitted to arbitration."
    },
    {
        word: "binding",
        pos: "形/名",
        ipa: "/ˈbaɪndɪŋ/",
        cn: "有约束力的；装订",
        jp: "拘束力のある；装丁",
        family: "bind / unbound / binder",
        tips: "合同高频：legally binding contract/agreement（具有法律约束力的合同/协议）。",
        desc: "The agreement is legally binding."
    },
    {
        word: "disagreements",
        pos: "名",
        ipa: "/ˌdɪsəˈɡriːmənts/",
        cn: "分歧，争执，意见不合（复数）",
        jp: "意見の不一致、対立（複数）",
        family: "disagreement / disagree / agreeable",
        tips: "商务谈判高频：resolve contractual disagreements（化解合同分歧）。",
        desc: "They resolved mutual disagreements."
    },
    {
        word: "initiative",
        pos: "名",
        ipa: "/ɪˈnɪʃətɪv/",
        cn: "倡议，新举措；主动性",
        jp: "新たな取り組み、主導権",
        family: "initiate / initiation / initiator",
        tips: "企业战略高频：launch a new initiative（发起新举措/计划），take the initiative（采取主动）。",
        desc: "She took the initiative."
    },
    {
        word: "absorb",
        pos: "動",
        ipa: "/əbˈzɔːrb/",
        cn: "吸收，承受（成本/冲击）",
        jp: "吸収する、（費用や衝撃を）負担する",
        family: "absorption / absorbed / absorbent",
        tips: "财务与材料高频：absorb extra costs（承担额外成本），absorb physical shock（吸收物理冲击）。",
        desc: "Sponges absorb liquid easily."
    },
    {
        word: "rigorously",
        pos: "副",
        ipa: "/ˈrɪɡərəsli/",
        cn: "严格地，严密地",
        jp: "厳格に、厳密に",
        family: "rigorous / rigor / rigorousness",
        tips: "质检与合规高频：rigorously tested/enforced（经过严格测试/严格执行）。",
        desc: "Products are rigorously tested."
    },
    {
        word: "forensic",
        pos: "形",
        ipa: "/fəˈrenzɪk/",
        cn: "取证的，法医的，司法查证的",
        jp: "法廷の、科学捜査の、法医学の",
        family: "forensics / forensically",
        tips: "审计与调查高频：forensic audit/accounting（司法审计/法务会计），digital forensics（数字取证）。",
        desc: "They launched a forensic audit."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "commended",
        category: "简单",
        stem: "The executive committee ________ Ms. Lee for her outstanding contributions to the marketing campaign.",
        options: ["commended", "arbitrated", "absorbed", "forensic"],
        correct: "commended",
        explanations: {
            guide: "HR表彰动词考点。________ sb for sth 结合表彰营销活动的突出贡献，选 commended（赞扬/表彰）。",
            family: "commended (v-ed表扬) | arbitrated (v-ed仲裁) | absorbed (v-ed吸收) | forensic (adj.取证的)。",
            details: "commended sb for... 属于托业经典句型，意为因……而表扬某人。arbitrated（仲裁）不合表彰语境。",
            cn: "执行委员会表彰了李女士对营销活动的杰出贡献。",
            jp: "執行委員会は、マーケティングキャンペーンへの顕著な貢献に対して李氏を表彰しました（commended）。"
        }
    },
    {
        id: 2,
        target: "expenditures",
        category: "简单",
        stem: "The accounting report shows that operational ________ were reduced by ten percent this quarter.",
        options: ["expenditures", "initiatives", "disagreements", "epidemics"],
        correct: "expenditures",
        explanations: {
            guide: "财务报表名词考点。operational ________ 结合减少了百分之十（reduced by 10%），选 expenditures（开支/经费）。",
            family: "expenditures (n.复数开支) | initiatives (n.倡议) | disagreements (n.分歧) | epidemics (n.流行病)。",
            details: "operational expenditures 意为运营开支。disagreements（分歧）、epidemics（流行病）均非财务核减项目。",
            cn: "会计报告显示，本季度运营开支减少了百分之十。",
            jp: "会計報告書によると、今四半期の営業支出（expenditures）は10%削減されました。"
        }
    },
    {
        id: 3,
        target: "binding",
        category: "简单",
        stem: "Both parties agreed that the signed contract is legally ________ upon all participants.",
        options: ["binding", "forensic", "absorbent", "epidemic"],
        correct: "binding",
        explanations: {
            guide: "合同法律修饰形容词。legally ________ 属于托业最高频词组之一，表达合同“具有法律约束力的”，选 binding。",
            family: "binding (adj.有约束力的) | forensic (adj.取证的) | absorbent (adj.有吸收力的) | epidemic (adj.流行性的)。",
            details: "legally binding 意为具有法律约束力。forensic（取证的）、absorbent（吸水的）均不能与 legally 构成该法律表述。",
            cn: "双方均同意签署的合同对所有参与方都具有法律约束力。",
            jp: "双方は、署名された契約がすべての参加者に対して法的拘束力を持つ（binding）ことに合意しました。"
        }
    },
    {
        id: 4,
        target: "initiative",
        category: "简单",
        stem: "The management team launched a green energy ________ to reduce office electricity consumption.",
        options: ["initiative", "arbitration", "disagreement", "expenditure"],
        correct: "initiative",
        explanations: {
            guide: "企业战略名词考点。launched a green energy ________ 结合旨在降低用电量，选 initiative（新举措/倡议）。",
            family: "initiative (n.倡议/新举措) | arbitration (n.仲裁) | disagreement (n.分歧) | expenditure (n.开支)。",
            details: "green energy initiative 意为绿色能源倡议/环保举措。arbitration（仲裁）、disagreement（争议）与发起节能项目语境不符。",
            cn: "管理团队发起了一项绿色能源倡议，以减少办公室用电量。",
            jp: "経営陣はオフィスの消費電力を削減するために、グリーンエネルギーの取り組み（initiative）を開始しました。"
        }
    },
    {
        id: 5,
        target: "absorb",
        category: "简单",
        stem: "The protective packaging was specially designed to ________ physical shocks during shipping.",
        options: ["absorb", "commend", "arbitrate", "initiate"],
        correct: "absorb",
        explanations: {
            guide: "动词不定式考点。designed to 后面接动词原形，结合包装吸收运输途中的物理震动（shocks），选 absorb。",
            family: "absorb (v.吸收/承受) | commend (v.表扬) | arbitrate (v.仲裁) | initiate (v.发起)。",
            details: "to absorb physical shocks 意为吸收物理震动/冲击。commend（表扬）、arbitrate（调解）动宾不通。",
            cn: "这种保护性包装经过专门设计，可在运输过程中吸收物理震动。",
            jp: "保護用梱包は、輸送中の物理的な衝撃を吸収する（absorb）よう特別に設計されました。"
        }
    },
    {
        id: 6,
        target: "disagreements",
        category: "简单",
        stem: "Department managers held a meeting to resolve internal ________ regarding budget allocations.",
        options: ["disagreements", "expenditures", "initiatives", "arbitrations"],
        correct: "disagreements",
        explanations: {
            guide: "沟通解决名词复数。resolve internal ________ 结合解决关于预算分配的分歧，选 disagreements（分歧/争端）。",
            family: "disagreements (n.复数分歧) | expenditures (n.开支) | initiatives (n.举措) | arbitrations (n.仲裁)。",
            details: "resolve internal disagreements 意为化解内部意见分歧。initiatives（倡议）、expenditures（支出）不能直接作为被化解的矛盾主体。",
            cn: "部门经理们举行会议，以化解关于预算分配的内部意见分歧。",
            jp: "部門マネージャーは、予算配分に関する社内の意見の不一致（disagreements）を解決するために会議を開きました。"
        }
    },
    {
        id: 7,
        target: "rigorously",
        category: "中等",
        stem: "Before being released to the consumer market, all medical devices are ________ tested in the laboratory.",
        options: ["rigorously", "rigorous", "binding", "absorbent"],
        correct: "rigorously",
        explanations: {
            guide: "副词修饰被动语态动词。are ________ tested 结构中，用副词修饰过去分词 tested，表达“严密地/严格地”测试，选 rigorously。",
            family: "rigorously (adv.严格地) | rigorous (adj.严格的) | binding (adj.有约束力的) | absorbent (adj.吸水的)。",
            details: "rigorously tested 属于产品质检经典词组，意为经过严格测试。rigorous 是形容词，不能在此修饰分词 tested。",
            cn: "在投放消费市场之前，所有医疗设备都在实验室接受了严格的测试。",
            jp: "消費者市場にリリースされる前に、すべての医療機器は実験室で厳格に（rigorously）テストされます。"
        }
    },
    {
        id: 8,
        target: "arbitration",
        category: "中等",
        stem: "Instead of proceeding to court, the two suppliers decided to submit their dispute to independent ________.",
        options: ["arbitration", "arbitrate", "initiative", "expenditure"],
        correct: "arbitration",
        explanations: {
            guide: "法律调解名词考点。submit their dispute to independent ________ 表达将纠纷提交给独立的“仲裁”，选 arbitration。",
            family: "arbitration (n.仲裁/调解) | arbitrate (v.仲裁) | initiative (n.举措) | expenditure (n.开支)。",
            details: "independent arbitration 意为独立仲裁。arbitrate 是动词，不能紧跟在形容词 independent 后面作介词宾语。",
            cn: "两家供应商没有对簿公堂，而是决定将争议提交给独立仲裁机构解决。",
            jp: "2社のサプライヤーは裁判所に訴訟を起こす代わりに、紛争を独立した仲裁（arbitration）に委ねることを決定しました。"
        }
    },
    {
        id: 9,
        target: "forensic",
        category: "中等",
        stem: "Outside auditors conducted a ________ examination of the financial records to detect potential fraud.",
        options: ["forensic", "binding", "commendable", "rigorousness"],
        correct: "forensic",
        explanations: {
            guide: "审计查证形容词考点。conducted a ________ examination 结合筛查潜在财务欺诈，选 forensic（司法查证的/法务取证的）。",
            family: "forensic (adj.司法取证的) | binding (adj.有约束力的) | commendable (adj.值得称赞的) | rigorousness (n.严格)。",
            details: "forensic examination 意为司法会计取证审查。rigorousness 是名词，无法作 examination 的前置定语。",
            cn: "外部审计师对财务记录进行了司法取证审查，以发现潜在的欺诈行为。",
            jp: "外部監査人は、潜在的な不正を検出するために財務記録の法医学的/科学的査定（forensic）検査を実施しました。"
        }
    },
    {
        id: 10,
        target: "epidemic",
        category: "中等",
        stem: "Public health officials took swift measures to contain the localized flu ________ before it spread further.",
        options: ["epidemic", "arbitration", "initiative", "disagreement"],
        correct: "epidemic",
        explanations: {
            guide: "公共卫生名词考点。localized flu ________ 结合防止流感进一步扩散，选 epidemic（局部流行病/暴发）。",
            family: "epidemic (n.流行病) | arbitration (n.仲裁) | initiative (n.倡议) | disagreement (n.分歧)。",
            details: "flu epidemic 意为流感流行/暴发。arbitration（仲裁）、disagreement（分歧）与卫生部门防控疾病扩散无关。",
            cn: "公共卫生官员采取了迅速措施，在局部流感流行进一步扩散之前加以控制。",
            jp: "公衆衛生当局は、局地的なインフルエンザの流行（epidemic）がさらに拡大する前に封じ込めるための迅速な措置を講じました。"
        }
    },
    {
        id: 11,
        target: "absorb",
        category: "中等",
        stem: "Despite rising raw material costs, the manufacturer chose to ________ the extra expenses rather than raising prices.",
        options: ["absorb", "absorbed", "commend", "disagree"],
        correct: "absorb",
        explanations: {
            guide: "成本承担动词原形。chose to 后面接动词原形，结合不涨价而是自己“承担/消化”额外费用，选 absorb。",
            family: "absorb (v.承担/吸收) | absorbed (v-ed) | commend (v.表扬) | disagree (v.不同意)。",
            details: "absorb expenses 属于商业财务核心搭配，意为消化/承担费用。absorbed 是过去式，不能跟在不定式符号 to 后面。",
            cn: "尽管原材料成本上涨，制造商还是选择自行消化额外费用，而不是提高售价。",
            jp: "原材料コストの上昇にもかかわらず、メーカーは値上げするのではなく余分な費用を自己負担（absorb）することを選択しました。"
        }
    },
    {
        id: 12,
        target: "initiative",
        category: "中等",
        stem: "An effective supervisor is expected to take the ________ when unexpected operational problems arise.",
        options: ["initiative", "initiate", "arbitration", "expenditure"],
        correct: "initiative",
        explanations: {
            guide: "管理素养固定短语。take the ________ 属于托业经典短语，意为“采取主动/主动带头”，选 initiative。",
            family: "initiative (n.主动性/倡议) | initiate (v.发起) | arbitration (n.仲裁) | expenditure (n.开支)。",
            details: "take the initiative 意为发挥主动性/采取主动。initiate 是动词，不能跟在定冠词 the 后面作及物动词 take 的宾语。",
            cn: "当突发运营问题出现时，一名高效的主管应当采取主动解决问题。",
            jp: "効果的な上司は、予期せぬ業務上の問題が発生したときに主導権（initiative）を握ることが期待されます。"
        }
    },
    {
        id: 13,
        target: "commended",
        category: "困难",
        stem: "The environmental organization's recent recycling efforts were widely recognized as highly ________.",
        options: ["commendable", "commended", "commendation", "binding"],
        correct: "commendable",
        explanations: {
            guide: "派生表语形容词考点。recognized as highly ________ 结构中，副词 highly 后面接形容词，表达环保举措“值得称赞的”，选 commendable。",
            family: "commendable (adj.值得称赞的) | commended (v-ed受表扬的) | commendation (n.赞赏) | binding (adj.有约束力的)。",
            details: "highly commendable 意为非常值得赞许的。commended 是被动分词，在此处修饰客观事物的性质选用形容词形式 commendable。",
            cn: "该环保组织最近开展的回收利用工作被广泛认为是非常值得称赞的。",
            jp: "環境保護団体の最近のリサイクル活動は、非常に称賛に値する（commendable）ものとして広く認められました。"
        }
    },
    {
        id: 14,
        target: "expenditures",
        category: "困难",
        stem: "The board approved significant capital ________ for the acquisition of new automated manufacturing machinery.",
        options: ["expenditures", "expenditure", "initiations", "arbitrations"],
        correct: "expenditures",
        explanations: {
            guide: "公司财务复数专有名词。capital ________ 属于企业财报固定术语（CapEx），表达巨额“资本性支出”，选复数 expenditures。",
            family: "expenditures (n.资本支出复数) | expenditure (n.单数支出) | initiations (n.入会/发起) | arbitrations (n.仲裁)。",
            details: "capital expenditures (CapEx) 专指购买厂房设备等长期资产的资本性支出，习惯使用复数形式。",
            cn: "董事会批准了用于采购新型自动化制造机械的巨额资本支出。",
            jp: "取締役会は、新しい自動製造機械の取得のための多額の資本支出（expenditures）を承認しました。"
        }
    },
    {
        id: 15,
        target: "binding",
        category: "困难",
        stem: "Both disputing corporations signed a mutually ________ arbitration agreement to settle the patent infringement case.",
        options: ["binding", "bind", "absorbent", "disagreeable"],
        correct: "binding",
        explanations: {
            guide: "法律前置复合修饰语。a mutually ________ agreement 结构中，副词 mutually 后面接形容词修饰协议，表达“相互具有约束力的”，选 binding。",
            family: "binding (adj.有约束力的) | bind (v.捆绑) | absorbent (adj.吸水的) | disagreeable (adj.不合意的)。",
            details: "mutually binding agreement 意为对双方均有约束力的协议。bind 是动词原形，不能作前置定语。",
            cn: "两家发生争议的公司签署了一份对双方均有约束力的仲裁协议，以了结专利侵权案件。",
            jp: "紛争中の両社は、特許侵害事件を解決するために相互に拘束力のある（binding）仲裁合意書に署名しました。"
        }
    },
    {
        id: 16,
        target: "arbitration",
        category: "困难",
        stem: "A certified commercial ________ was appointed to oversee the complex settlement negotiations.",
        options: ["arbitrator", "arbitration", "initiative", "expenditure"],
        correct: "arbitrator",
        explanations: {
            guide: "派生人物名词考点。A certified commercial ________ was appointed... 结合被任命主持和解谈判的人员，选 arbitrator（仲裁员）。",
            family: "arbitrator (n.仲裁员) | arbitration (n.仲裁程序) | initiative (n.倡议) | expenditure (n.开支)。",
            details: "commercial arbitrator 指商事仲裁员。arbitration 是指仲裁这一制度/程序，不能指代具体被任命的人（was appointed）。",
            cn: "一位认证商事仲裁员被任命负责监督复杂的和解谈判。",
            jp: "複雑な和解交渉を監督するため、認定商業仲裁人（arbitrator）が任命されました。"
        }
    },
    {
        id: 17,
        target: "forensic",
        category: "困难",
        stem: "Specialists in digital ________ were hired to recover corrupted server files following the security breach.",
        options: ["forensics", "forensic", "arbitration", "rigor"],
        correct: "forensics",
        explanations: {
            guide: "派生学科技术专有名词。Specialists in digital ________ 表达在数据安全事件后受聘的“电子取证/数字取证学”专家，选名词 forensics。",
            family: "forensics (n.取证学/科学取证技术) | forensic (adj.取证的) | arbitration (n.仲裁) | rigor (n.严谨)。",
            details: "digital forensics 专指数字取证学/电子取证技术。forensic 是形容词，不能直接跟在介词 in 后面作学科名词中心语。",
            cn: "安全漏洞事件发生后，聘请了数字取证专家来恢复受损的服务器文件。",
            jp: "セキュリティ侵害の後、破損したサーバーファイルを復旧するためにデジタル科学捜査（forensics）の専門家が雇われました。"
        }
    },
    {
        id: 18,
        target: "rigorously",
        category: "困难",
        stem: "The new safety protocols must be enforced with utmost ________ across all chemical processing plants.",
        options: ["rigor", "rigorously", "rigorous", "binding"],
        correct: "rigor",
        explanations: {
            guide: "派生抽象名词考点。with utmost ________ 结构中，在介词 with 和形容词 utmost 后面接抽象名词形式 rigor（严谨/严格性）。",
            family: "rigor (n.严谨/严格) | rigorously (adv.严格地) | rigorous (adj.严密的) | binding (adj.有约束力的)。",
            details: "with utmost rigor 意为以极高的严密性/极其严格地。rigorously 是副词，不能跟在形容词 utmost 后面作介词宾语。",
            cn: "所有化工厂都必须以极其严格的标准执行新的安全协议。",
            jp: "新しい安全プロトコルは、すべての化学処理工場で最大限の厳格さ（rigor）をもって施行されなければなりません。"
        }
    }
];