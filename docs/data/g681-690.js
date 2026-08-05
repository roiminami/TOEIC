// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag171-180 Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "outcome",
        pos: "名",
        ipa: "/ˈaʊtkʌm/",
        cn: "结果，产出，成效",
        jp: "結果、成果",
        family: "outcomes",
        tips: "商务谈判、项目总结与临床实验高频名词。常见短语：successful outcome（成功的结局）、desired outcome（期望的结果）、outcome of the election/meeting（会议/选举的结果）。",
        desc: "The outcome was positive."
    },
    {
        word: "persuade",
        pos: "動",
        ipa: "/pərˈsweɪd/",
        cn: "说服，劝说",
        jp: "説得する、納得させる",
        family: "persuasion / persuasive / persuasively",
        tips: "商务谈判与销售推广核心动词。常见搭配：persuade sb to do sth（说服某人做某事）、persuasive argument（有说服力的论据）。",
        desc: "She persuaded him."
    },
    {
        word: "confusing",
        pos: "形",
        ipa: "/kənˈfjuːzɪŋ/",
        cn: "令人困惑的，混乱不清的",
        jp: "紛らわしい、混乱させる",
        family: "confuse / confused / confusion",
        tips: "产品说明书、政策解读与用户反馈高频分词形容词。修饰物或状况。注意区分修饰人的 confused（感到困惑的）以及名词 confusion（混乱/困惑）。",
        desc: "The instructions were confusing."
    },
    {
        word: "dispose",
        pos: "動",
        ipa: "/dɪˈspoʊz/",
        cn: "处理，处置，排列",
        jp: "処分する、配置する",
        family: "disposal / disposable / disposition",
        tips: "环保合规、废弃物处理与设备淘汰高频动词。核心固定搭配：dispose of sth（处理/丢弃某物）。派生词 disposable（一次性的）、disposal（处理/废弃）。",
        desc: "Dispose of waste properly."
    },
    {
        word: "prominent",
        pos: "形",
        ipa: "/ˈprɑːmɪnənt/",
        cn: "杰出的，显眼的，著名的",
        jp: "著名な、顕著な、目立つ",
        family: "prominently / prominence",
        tips: "企业名流介绍、高管致辞与产品标识高频形容词。核心搭配：prominent business figure（杰出商务人士）、prominently displayed（被显眼地展示）。",
        desc: "He is a prominent lawyer."
    },
    {
        word: "faculty",
        pos: "名",
        ipa: "/ˈfæklti/",
        cn: "全体教员，院系，官能/能力",
        jp: "（大学の）教職員全体、学部、能力",
        family: "faculties",
        tips: "高校招聘、学术研讨与机构介绍高频名词。核心搭配：faculty member（教员/教师）、faculty meeting（全体教员会议）、faculty of medicine（医学院）。",
        desc: "The faculty held a meeting."
    },
    {
        word: "in-house",
        pos: "形/副",
        ipa: "/ˌɪn ˈhaʊs/",
        cn: "机构内部的，自营的；在内部",
        jp: "社内の、組織内の；社内で",
        family: "in house",
        tips: "外包（outsourcing）的反义概念。指公司内部自行进行而非外包的服务或团队。核心搭配：in-house training（内部培训）、in-house legal team（内部法务团队）。",
        desc: "We have an in-house team."
    },
    {
        word: "rapidly",
        pos: "副",
        ipa: "/ˈræpɪdli/",
        cn: "迅速地，飞快地",
        jp: "急速に、迅速に",
        family: "rapid / rapidity",
        tips: "市场增长、科技演进及人口变迁高频副词。修饰动词 grow、expand、develop、change。核心搭配：grow rapidly（快速增长）、rapidly changing market（迅速变化的市场）。",
        desc: "Prices are rising rapidly."
    },
    {
        word: "investigate",
        pos: "動",
        ipa: "/ɪnˈvestɪɡeɪt/",
        cn: "调查，审查，排查",
        jp: "調査する、捜査する",
        family: "investigation / investigative / investigator",
        tips: "客户投诉、合规审查、事故原因排查高频动词。核心搭配：investigate the cause of the incident（调查事故原因）、under investigation（正在接受调查）。",
        desc: "They will investigate the cause."
    },
    {
        word: "apparently",
        pos: "副",
        ipa: "/əˈpærəntli/",
        cn: "据称，表面上，显然",
        jp: "一見したところ、どうやら〜らしい",
        family: "apparent",
        tips: "传闻报道、口头汇报与事实澄清高频副词。用于修饰句子或动词，表示根据目前迹象看似乎如此（但可能尚待查证）。近义词：supposedly / reportedly / seemingly。",
        desc: "He is apparently moving away."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "rapidly",
        category: "简单",
        stem: "The company's subscriber base grew ________ after launching the new mobile application.",
        options: ["rapidly", "confusing", "prominent", "faculty"],
        correct: "rapidly",
        explanations: {
            guide: "副词修饰动词。修饰不及物动词 grew（增长），表达推出新移动应用后用户基数“迅速地”增长，选副词 rapidly。",
            family: "rapidly (adv.迅速地) | confusing (adj.令人困惑的) | prominent (adj.杰出的) | faculty (n.教员)。",
            details: "grow rapidly 意为“快速增长”，是描述市场扩展和用户增加的典型商务表达。",
            cn: "推出新移动应用后，该公司的订户基数迅速增长。",
            jp: "新しいアプリをリリースした後、同社の会員数は急速に（rapidly）増加しました。"
        }
    },
    {
        id: 2,
        target: "faculty",
        category: "简单",
        stem: "The university invited all ________ members to attend the annual commencement ceremony on Saturday.",
        options: ["faculty", "outcome", "in-house", "dispose"],
        correct: "faculty",
        explanations: {
            guide: "名词作定语与固定短语。修饰 members，构成固定短语 faculty members（全体教员/教师），选 faculty。",
            family: "faculty (n.全体教员) | outcome (n.结果) | in-house (adj.内部的) | dispose (v.处理)。",
            details: "faculty members 专指学校或学术机构的“教员/教师队伍”，属于学术与招聘通知中的标准搭配。",
            cn: "大学邀请所有教员参加周六举行的一年一度的毕业典礼。",
            jp: "大学は土曜日に行われる年次卒業式にすべての教職員（faculty）が出席するよう招待しました。"
        }
    },
    {
        id: 3,
        target: "dispose",
        category: "简单",
        stem: "Employees are required to ________ of confidential documents by using the office shredder.",
        options: ["dispose", "persuade", "investigate", "rapidly"],
        correct: "dispose",
        explanations: {
            guide: "动词与介词固定搭配。位于不定式符号 to 之后，与介词 of 构成短语 dispose of...（处理/销毁……），选 dispose。",
            family: "dispose (v.处理) | persuade (v.说服) | investigate (v.调查) | rapidly (adv.迅速地)。",
            details: "dispose of confidential documents 意为“销毁/处理机密文件”，属于公司保密与废弃物处理的核心用语。",
            cn: "要求员工使用办公室碎纸机销毁机密文件。",
            jp: "従業員は、オフィスのシュレッダーを使用して機密書類を処分（dispose）することが義務付けられています。"
        }
    },
    {
        id: 4,
        target: "in-house",
        category: "简单",
        stem: "Instead of hiring external consultants, the firm decided to conduct an ________ training program.",
        options: ["in-house", "confusing", "prominent", "apparently"],
        correct: "in-house",
        explanations: {
            guide: "形容词修饰名词。修饰 training program，与前半句“聘请外部顾问”形成对比，表达举办“机构内部的”培训计划，选 in-house。",
            family: "in-house (adj.内部的) | confusing (adj.令人困惑的) | prominent (adj.杰出的) | apparently (adv.据称)。",
            details: "an in-house training program 指“企业内部培训”。in-house 表示由本单位自行开展而非外包。",
            cn: "该公司决定开展内部培训计划，而不是聘请外部顾问。",
            jp: "外部コンサルタントを雇う代わりに、同社は社内（in-house）研修プログラムを実施することを決定しました。"
        }
    },
    {
        id: 5,
        target: "investigate",
        category: "简单",
        stem: "The engineering team was asked to ________ the cause of yesterday's system failure.",
        options: ["investigate", "persuade", "dispose", "outcome"],
        correct: "investigate",
        explanations: {
            guide: "动词词义辨析。位于不定式符号 to 之后，作 requested 的宾语补足成分，与 the cause of yesterday's system failure 构成动宾搭配，表达“调查”原因，选 investigate。",
            family: "investigate (v.调查) | persuade (v.说服) | dispose (v.处置) | outcome (n.结果)。",
            details: "investigate the cause 意为“调查原因”，常用于故障排查与事故处理报告。",
            cn: "工程团队被要求调查昨天系统故障的原因。",
            jp: "エンジニアリングチームは、昨日のシステム障害の原因を調査する（investigate）よう依頼されました。"
        }
    },
    {
        id: 6,
        target: "confusing",
        category: "简单",
        stem: "Several users complained that the instructions provided in the user manual were too ________.",
        options: ["confusing", "rapidly", "in-house", "faculty"],
        correct: "confusing",
        explanations: {
            guide: "形容词作表语。位于连系动词 were 和副词 too 之后，修饰主语 instructions（说明书指南），表达内容“令人困惑的”，选 confusing。",
            family: "confusing (adj.令人困惑的) | rapidly (adv.迅速地) | in-house (adj.内部的) | faculty (n.教员)。",
            details: "instructions were confusing 表达说明书内容混乱不清。修饰物时使用 -ing 结尾的形容词 confusing。",
            cn: "几位用户抱怨用户手册中提供的说明过于令人困惑。",
            jp: "取扱説明書の指示が分かりにくく混乱させる（confusing）ものだったと、数名のユーザーから苦情がありました。"
        }
    },
    {
        id: 7,
        target: "outcome",
        category: "中等",
        stem: "Management was pleased with the positive ________ of the negotiation with the overseas client.",
        options: ["outcome", "faculty", "disposal", "persuasion"],
        correct: "outcome",
        explanations: {
            guide: "名词词义辨析。位于形容词 positive 之后，作介词 with 的宾语，结合后文“与海外客户的谈判”，表达令人满意的“成效/结果”，选 outcome。",
            family: "outcome (n.结果) | faculty (n.全体教员) | disposal (n.处理) | persuasion (n.说服)。",
            details: "positive outcome of negotiation 意为“谈判的积极结果”，属于商务谈判总结的高频词汇。",
            cn: "管理层对与海外客户谈判取得的积极结果感到满意。",
            jp: "経営陣は、海外顧客との交渉の好ましい結果（outcome）に満足していました。"
        }
    },
    {
        id: 8,
        target: "prominent",
        category: "中等",
        stem: "The keynote speaker at the international conference is a ________ scientist in renewable energy.",
        options: ["prominent", "confusing", "in-house", "rapidly"],
        correct: "prominent",
        explanations: {
            guide: "形容词修饰名词。修饰 scientist（科学家），表达主讲人是可再生能源领域的“杰出的/著名的”科学家，选 prominent。",
            family: "prominent (adj.杰出的/著名的) | confusing (adj.令人困惑的) | in-house (adj.内部的) | rapidly (adv.迅速地)。",
            details: "a prominent scientist 意为“一位杰出的科学家”，用于介绍行业权威与嘉宾背景。",
            cn: "国际会议上的主讲人是可再生能源领域的杰出科学家。",
            jp: "基調講演者は、再生可能エネルギー分野で著名な（prominent）科学者です。"
        }
    },
    {
        id: 9,
        target: "persuade",
        category: "中等",
        stem: "The sales representative managed to ________ the client to switch to our premium service package.",
        options: ["persuade", "investigate", "dispose", "outcome"],
        correct: "persuade",
        explanations: {
            guide: "固定句式与动词辨析。位于 managed to 之后，考查句型 persuade sb to do sth（说服某人做某事），选 persuade。",
            family: "persuade (v.说服) | investigate (v.调查) | dispose (v.处理) | outcome (n.结果)。",
            details: "persuade the client to... 意为“说服客户做……”，是销售与市场开发中的核心短语。",
            cn: "销售代表成功说服客户改用我们的高级服务包。",
            jp: "営業担当者は、プレミアムサービスパックに切り替えるよう顧客を説得すること（persuade）に成功しました。"
        }
    },
    {
        id: 10,
        target: "apparently",
        category: "中等",
        stem: "The chief technology officer was ________ pleased with the performance of the new database system.",
        options: ["apparently", "prominent", "confusing", "disposal"],
        correct: "apparently",
        explanations: {
            guide: "副词修饰形容词。位于系动词 was 和形容词 pleased 之间，表达 CTO“显然/据看”对新数据库系统的性能感到满意，选副词 apparently。",
            family: "apparently (adv.据称/显然) | prominent (adj.杰出的) | confusing (adj.困惑的) | disposal (n.处理)。",
            details: "was apparently pleased 意为“显然很满意/据观察很满意”，常用于评价高管对项目进展的态度。",
            cn: "首席技术官显然对新数据库系统的性能感到满意。",
            jp: "最高技術責任者は、新しいデータベースシステムのパフォーマンスに一見したところ（apparently）満足しているようでした。"
        }
    },
    {
        id: 11,
        target: "rapidly",
        category: "中等",
        stem: "Due to the ________ changing technological landscape, IT professionals must continually update their skills.",
        options: ["rapidly", "rapid", "rapidity", "apparent"],
        correct: "rapidly",
        explanations: {
            guide: "副词修饰分词形容词。修饰现在分词形容词 changing（变化中的），表达“迅速地”变化，选副词 rapidly。",
            family: "rapidly (adv.迅速地) | rapid (adj.快速的) | rapidity (n.迅速) | apparent (adj.明显的)。",
            details: "rapidly changing landscape 意为“飞速变化的环境/格局”。副词 rapidly 用来修饰形容词 changing。",
            cn: "由于技术环境的迅速变化，IT 专业人员必须不断更新自己的技能。",
            jp: "急速に（rapidly）変化する技術環境のため、IT技術者は絶えずスキルを更新しなければなりません。"
        }
    },
    {
        id: 12,
        target: "dispose",
        category: "中等",
        stem: "The manufacturing plant implemented a strict waste ________ policy to comply with local regulations.",
        options: ["disposal", "dispose", "disposable", "investigate"],
        correct: "disposal",
        explanations: {
            guide: "复合名词修饰语。与 waste 组合构成 waste disposal（废弃物处理），修饰 policy，选名词 disposal。",
            family: "disposal (n.处理/废弃) | dispose (v.处理) | disposable (adj.一次性的) | investigate (v.调查)。",
            details: "waste disposal policy 意为“废弃物处理政策”，属于工厂管理与环保合规的标准行话。",
            cn: "制造工厂实施了严格的废弃物处理政策，以符合当地法规。",
            jp: "製造工場は、地域の規制を遵守するため、厳格な廃棄物処理（disposal）方針を実施しました。"
        }
    },
    {
        id: 13,
        target: "persuade",
        category: "困难",
        stem: "The marketing director presented a highly ________ argument for expanding into the South American market.",
        options: ["persuasive", "persuade", "persuasion", "persuasively"],
        correct: "persuasive",
        explanations: {
            guide: "派生形容词修饰名词。位于副词 highly 之后，修饰名词 argument（论据/主张），表达提出了一项极具“说服力的”论据，选形容词 persuasive。",
            family: "persuasive (adj.有说服力的) | persuade (v.说服) | persuasion (n.说服) | persuasively (adv.口才好地)。",
            details: "a highly persuasive argument 意为“非常具有说服力的论据”，属于高层企划与战略拓展的高频表达。",
            cn: "营销总监就进军南美市场提出了极具说服力的论据。",
            jp: "マーケティングディレクターは、南米市場への進出に向け、非常に説得力のある（persuasive）根拠を提示しました。"
        }
    },
    {
        id: 14,
        target: "investigate",
        category: "困难",
        stem: "Independent auditors were brought in to conduct a thorough ________ into the company's financial records.",
        options: ["investigation", "investigate", "investigative", "investigator"],
        correct: "investigation",
        explanations: {
            guide: "名词派生与搭配考点。位于形容词 thorough（彻底的）之后，作 conduct 的宾语，考查短语 conduct an investigation into...（对……发起调查），选名词 investigation。",
            family: "investigation (n.调查) | investigate (v.调查) | investigative (adj.调查的) | investigator (n.调查员)。",
            details: "conduct an investigation into sth 意为“对某事展开调查”。investigate 为动词，无法接在不定冠词 a 和形容词之后作宾语。",
            cn: "聘请了独立审计师对公司的财务记录进行彻底调查。",
            jp: "会社の財務記録に対する徹底的な調査（investigation）を行うため、外部監査人が招かれました。"
        }
    },
    {
        id: 15,
        target: "confusing",
        category: "困难",
        stem: "To avoid any ________ regarding the new travel reimbursement policy, HR issued a step-by-step guide.",
        options: ["confusion", "confusing", "confused", "confunded"],
        correct: "confusion",
        explanations: {
            guide: "抽象名词派生考点。位于限定词 any 之后，作 avoid 的宾语，表达避免任何关于报销政策的“困惑/混乱”，选抽象名词 confusion。",
            family: "confusion (n.困惑/混乱) | confusing (adj.令人困惑的) | confused (adj.困惑的) | confunded (错误拼写)。",
            details: "avoid any confusion 意为“避免产生任何困惑”，是公司发布行政规章与操作指南时的常见表达。",
            cn: "为避免对新的差旅报销政策产生任何困惑，人力资源部发布了一份逐步操作指南。",
            jp: "出張旅費の払い戻し規定に関する混乱（confusion）を避けるため、人事部は詳細なガイドを発行しました。"
        }
    },
    {
        id: 16,
        target: "prominent",
        category: "困难",
        stem: "The company logo must be ________ displayed at the entrance of the exhibition booth.",
        options: ["prominently", "prominent", "prominence", "apparently"],
        correct: "prominently",
        explanations: {
            guide: "副词修饰过去分词（被动语态）。位于被动语态 must be ... displayed 之间，修饰动词 displayed，表达被“显眼地/突出地”展示，选副词 prominently。",
            family: "prominently (adv.显眼地/显著地) | prominent (adj.显著的) | prominence (n.显赫) | apparently (adv.显然)。",
            details: "prominently displayed 意为“被显眼地展示/摆放在突出位置”，常出现在展会布展与商标规范中。",
            cn: "公司标识必须显眼地展示在展台入口处。",
            jp: "会社のロゴは、展示ブースの入口に目立つように（prominently）表示されなければなりません。"
        }
    },
    {
        id: 17,
        target: "dispose",
        category: "困难",
        stem: "The cafeteria replaced all single-use plastic utensils with environmentally friendly ________ alternatives.",
        options: ["disposable", "disposal", "dispose", "outcome"],
        correct: "disposable",
        explanations: {
            guide: "派生形容词修饰名词。修饰 alternatives（替代品），表达替换掉一次性塑料餐具，选可作为形容词或修饰语的 disposable（一次性的）。",
            family: "disposable (adj.一次性的) | disposal (n.处理) | dispose (v.处理) | outcome (n.结果)。",
            details: "disposable alternatives / products 意为“一次性替代品/用品”。disposal 为名词（处理），在此不充当修饰性形容词。",
            cn: "自助餐厅用环保的可降解替代品替换了所有一次性塑料用具。",
            jp: "カフェテリアは、使い捨てのプラスチック製器具をすべて環境に優しい代替品（disposable alternatives）に置き換えました。"
        }
    },
    {
        id: 18,
        target: "in-house",
        category: "困难",
        stem: "By establishing an ________ legal department, the corporation significantly reduced its reliance on outside law firms.",
        options: ["in-house", "outcomes", "faculties", "investigative"],
        correct: "in-house",
        explanations: {
            guide: "复合形容词修饰名词。修饰 legal department（法务部门），结合后半句“降低对外部律所的依赖”，选 in-house（机构内部的）。",
            family: "in-house (adj.内部的) | outcomes (n.结果) | faculties (n.教员) | investigative (adj.调查的)。",
            details: "an in-house legal department 指“公司内部的法务部门”。与 outside law firms 形成鲜明对照。",
            cn: "通过建立内部法务部门，该公司显著降低了对外部律师事务所的依赖。",
            jp: "社内（in-house）の法務部門を設立することで、同社は外部の法律事務所への依存を大幅に減らしました。"
        }
    }
];