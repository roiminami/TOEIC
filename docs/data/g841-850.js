// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data651-660.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "seasoned",
        pos: "形",
        ipa: "/ˈsiːznd/",
        cn: "经验丰富的，老练的；调过味的",
        jp: "経験豊富な、熟練の；味付けされた",
        family: "season / seasoning / unseasoned",
        tips: "职场与管理高频：seasoned professional/executive/investor（经验丰富的专业人士/高管/投资者）。",
        desc: "He is a seasoned manager."
    },
    {
        word: "overwhelming",
        pos: "形",
        ipa: "/ˌoʊvərˈwelmɪŋ/",
        cn: "压倒性的，巨大的，势不可挡的",
        jp: "圧倒的な、途方もない",
        family: "overwhelm / overwhelmed / overwhelmingly",
        tips: "反馈与数据高频：overwhelming majority/support/response（绝大多数/压倒性支持/极其热烈的反响）。",
        desc: "They received overwhelming support."
    },
    {
        word: "devoted",
        pos: "形/動",
        ipa: "/dɪˈvoʊtɪd/",
        cn: "致力于……的，忠诚的，专心致志的",
        jp: "献身的な、専念した、〜に捧げられた",
        family: "devote / devotion / devotedly",
        tips: "企业使命与员工评价高频搭配：be devoted to doing sth（致力于做某事/专用于……），devoted employee（忠诚敬业的员工）。",
        desc: "She is devoted to her work."
    },
    {
        word: "shed",
        pos: "動/名",
        ipa: "/ʃed/",
        cn: "摆脱，去除，精简；棚屋，储藏棚",
        jp: "（不要なものを）削減する、脱ぎ捨てる；小屋、物置",
        family: "sheds / shedding",
        tips: "企业重组与调查高频：shed jobs/unprofitable assets（裁员/剥离非核心亏损资产），shed light on sth（阐明/揭示某事），storage shed（储物棚）。",
        desc: "The company will shed jobs."
    },
    {
        word: "outgoing",
        pos: "形",
        ipa: "/ˈaʊtɡoʊɪŋ/",
        cn: "即将离任的，即将离职的；外向友好的；发出的",
        jp: "退任する、離職する；社交的な；送信の",
        family: "outgo / outgoings",
        tips: "人事交接与通信高频：outgoing president/director（即将离任的总裁/董事），outgoing mail/calls（发出的邮件/呼出电话）。注意与 incoming（新上任的/收到的）区分。",
        desc: "We thanked the outgoing president."
    },
    {
        word: "supplement",
        pos: "動/名",
        ipa: "/ˈsʌplɪmənt/",
        cn: "补充，增补；补充物，附录",
        jp: "補う、補足する；補足、付録、サプリメント",
        family: "supplementary / supplemental / supplemented",
        tips: "财务与出版高频：supplement one's income（补充收入），supplementary materials/budget（补充材料/追加预算）。",
        desc: "He worked part-time to supplement income."
    },
    {
        word: "fertilizer",
        pos: "名",
        ipa: "/ˈfɜːrtəlaɪzər/",
        cn: "肥料，化肥",
        jp: "肥料、化学肥料",
        family: "fertilize / fertility / fertilization",
        tips: "农业与园林高频：organic/chemical fertilizer（有机肥/化肥），apply fertilizer（施肥）。",
        desc: "Use organic fertilizer for crops."
    },
    {
        word: "withstand",
        pos: "動",
        ipa: "/wɪðˈstænd/",
        cn: "经受住，承受，抵挡",
        jp: "耐える、持ちこたえる、抵抗する",
        family: "withstood / withstanding",
        tips: "材料质检与建筑高频：withstand extreme weather/temperatures/pressure（经受住极端天气/严苛温度/压力），withstand scrutiny（经受住严格审查）。",
        desc: "The building can withstand storms."
    },
    {
        word: "authentic",
        pos: "形",
        ipa: "/ɔːˈθentɪk/",
        cn: "正宗的，真正的，真实的",
        jp: "本物の、正真正銘の、本場の",
        family: "authenticity / authentically / authenticate",
        tips: "餐饮、艺术与品牌高频：authentic flavor/experience（正宗风味/地道体验），verify authentic signatures（核验真实签名）。",
        desc: "They serve authentic Italian pizza."
    },
    {
        word: "landlord",
        pos: "名",
        ipa: "/ˈlændlɔːrd/",
        cn: "房东，地主",
        jp: "家主、大家、地主",
        family: "landlords / landlady",
        tips: "不动产租赁与法务高频：contact the landlord（联系房东），landlord-tenant agreement（房东与租客协议）。",
        desc: "The landlord renewed our lease."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "seasoned",
        category: "简单",
        stem: "The technology firm appointed a ________ marketing executive to oversee its expansion into European markets.",
        options: ["seasoned", "fertilizer", "withstand", "landlord"],
        correct: "seasoned",
        explanations: {
            guide: "人才资历修饰形容词。a ________ marketing executive 结合指派负责欧洲市场扩张的高管，表达“经验丰富的/资深的”，选 seasoned。",
            family: "seasoned (adj.经验丰富的) | fertilizer (n.肥料) | withstand (v.经受) | landlord (n.房东)。",
            details: "a seasoned executive 意为经验丰富的高管。fertilizer（肥料）、landlord（房东）无法作为修饰商业人才的定语形容词。",
            cn: "这家科技公司任命了一位经验丰富的营销高管来负责其进军欧洲市场的扩张业务。",
            jp: "そのテクノロジー企業は、欧州市場への事業拡大を統括するために、経験豊富な（seasoned）マーケティング担当役員を任命しました。"
        }
    },
    {
        id: 2,
        target: "landlord",
        category: "简单",
        stem: "Before signing the commercial lease, the tenant negotiated directly with the ________ regarding utility maintenance.",
        options: ["landlord", "supplement", "shed", "devotion"],
        correct: "landlord",
        explanations: {
            guide: "不动产租赁主体名词考点。the tenant negotiated directly with the ________ 结合签署商用租赁合同，与租客对应的谈判主体选 landlord（房东/出租方）。",
            family: "landlord (n.房东) | supplement (n.补充) | shed (n.储物棚) | devotion (n.奉献)。",
            details: "tenant（租户）与 landlord（房东）属于托业不动产租赁核心对应名词。supplement（增补）、shed（棚屋）均非租赁签约当事方。",
            cn: "在签署商业租赁协议之前，租户直接与房东就公共设施的维护事宜进行了协商。",
            jp: "商業用賃貸契約に署名する前に、賃借人は光熱費や設備の維持管理に関して家主（landlord）と直接交渉しました。"
        }
    },
    {
        id: 3,
        target: "overwhelming",
        category: "简单",
        stem: "The proposed flexible work policy received ________ support from employees across all regional branches.",
        options: ["overwhelming", "outgoing", "seasoned", "withstood"],
        correct: "overwhelming",
        explanations: {
            guide: "民意支持修饰形容词。received ________ support 结合各区域分公司员工对弹性工作制的高度认可，选 overwhelming（压倒性的/巨大的）。",
            family: "overwhelming (adj.压倒性的) | outgoing (adj.即将离任的) | seasoned (adj.经验丰富的) | withstood (v-ed经受)。",
            details: "overwhelming support 属于托业经典搭配，意为压倒性/极大的支持。outgoing（外向的/离任的）不能修饰员工的支持力度。",
            cn: "提议的弹性工作政策获得了所有区域分公司员工的压倒性支持。",
            jp: "提案されたフレックスタイム制の勤務方針は、すべての地域支店の従業員から圧倒的な（overwhelming）支持を受けました。"
        }
    },
    {
        id: 4,
        target: "supplement",
        category: "简单",
        stem: "Many freelancers take on short-term consulting projects to ________ their monthly income.",
        options: ["supplement", "withstand", "fertilize", "shed"],
        correct: "supplement",
        explanations: {
            guide: "财务动词不定式考点。to 后面接动词原形，结合自由职业者接短期咨询项目以“补充/增补”月收入（income），选 supplement。",
            family: "supplement (v.补充/增补) | withstand (v.经受) | fertilize (v.施肥) | shed (v.去除)。",
            details: "to supplement income 意为增加/补充收入。withstand（承受）、fertilize（受精/施肥）动宾搭配完全不通。",
            cn: "许多自由职业者承接短期咨询项目以补充其每月的收入。",
            jp: "多くのフリーランサーは、月々の収入を補う（supplement）ために短期のコンサルティング案件を引き受けています。"
        }
    },
    {
        id: 5,
        target: "withstand",
        category: "简单",
        stem: "The heavy-duty outdoor equipment is specially engineered to ________ extreme weather conditions.",
        options: ["withstand", "supplement", "shed", "landlord"],
        correct: "withstand",
        explanations: {
            guide: "设备性能动词不定式。engineered to 后面接动词原形，结合户外重型设备能够“经受住/承受”极端天气条件，选 withstand。",
            family: "withstand (v.承受/经受住) | supplement (v.补充) | shed (v.摆脱) | landlord (n.房东)。",
            details: "to withstand extreme weather 属于工业质检高频固定搭配，意为经受住恶劣气候。landlord 是名词，无法作不定式谓语动词。",
            cn: "这种重型户外设备经过特殊设计，能够承受极端恶劣的天气条件。",
            jp: "その頑丈な屋外機器は、過酷な気象条件に耐える（withstand）よう特別に設計されています。"
        }
    },
    {
        id: 6,
        target: "outgoing",
        category: "简单",
        stem: "Staff members organized a farewell banquet to honor the ________ board director for her ten years of leadership.",
        options: ["outgoing", "authentic", "devoted", "overwhelming"],
        correct: "outgoing",
        explanations: {
            guide: "人事职务前置修饰形容词。a farewell banquet to honor the ________ board director 结合举办欢送宴会表彰工作十年的董事，选 outgoing（即将离任的/卸任的）。",
            family: "outgoing (adj.即将离任的/外向的) | authentic (adj.正宗的) | devoted (adj.忠诚的) | overwhelming (adj.压倒性的)。",
            details: "the outgoing director 意为即将离任的董事。farewell banquet（欢送宴）明确提示该董事处于离任移交阶段。",
            cn: "员工们组织了一场欢送晚宴，以向即将离任并领导了十年的董事会董事表达敬意。",
            jp: "職員たちは、10年間のリーダーシップに敬意を表すため、退任する（outgoing）取締役を称える送別晩餐会を企画しました。"
        }
    },
    {
        id: 7,
        target: "devoted",
        category: "中等",
        stem: "The non-profit foundation is fully ________ to providing clean drinking water to rural communities.",
        options: ["devoted", "outgoing", "seasoned", "overwhelming"],
        correct: "devoted",
        explanations: {
            guide: "系表结构与固定介词搭配。is fully ________ to doing sth 属于托业经典句型，表达基金会完全“致力于”为乡村社区提供洁净饮用水，选 devoted。",
            family: "devoted (adj.致力于…的/忠诚的) | outgoing (adj.离任的) | seasoned (adj.老练的) | overwhelming (adj.巨大的)。",
            details: "be devoted to doing sth 意为致力于做某事（此处 to 为介词，后接动名词 providing）。seasoned 后面不接 to doing 构成此固定含义。",
            cn: "该非营利基金会全心致力于为农村社区提供清洁饮用水。",
            jp: "その非営利財団は、農村地域に清潔な飲料水を提供することに全力を注いで（devoted）います。"
        }
    },
    {
        id: 8,
        target: "shed",
        category: "中等",
        stem: "As part of its corporate restructuring plan, the multinational conglomerate decided to ________ several unprofitable retail divisions.",
        options: ["shed", "withstand", "supplement", "fertilize"],
        correct: "shed",
        explanations: {
            guide: "企业重组动词考点。decided to 后面接动词原形，结合跨国集团剥离/精简非盈利的零售部门（unprofitable divisions），选 shed（摆脱/去除/精简）。",
            family: "shed (v.摆脱/精简/剥离) | withstand (v.经受) | supplement (v.补充) | fertilize (v.施肥)。",
            details: "shed unprofitable divisions 属于商务财经新闻高频用法，意为剥离/精简亏损业务部门。withstand（承受）动宾逻辑相反。",
            cn: "作为公司重组计划的一部分，这家跨国企业集团决定精简剥离几个不盈利的零售部门。",
            jp: "事業再編計画の一環として、その多国籍コングロマリットはいくつかの不採算な小売部門を切り離す/削減する（shed）ことを決定しました。"
        }
    },
    {
        id: 9,
        target: "fertilizer",
        category: "中等",
        stem: "Agricultural specialists recommended using organic ________ to enhance soil nutrients without damaging the environment.",
        options: ["fertilizer", "landlord", "supplement", "shed"],
        correct: "fertilizer",
        explanations: {
            guide: "农业园林材料名词。using organic ________ to enhance soil nutrients 结合提升土壤肥力且不破坏环境，选 fertilizer（肥料/化肥）。",
            family: "fertilizer (n.肥料) | landlord (n.房东) | supplement (n.补充) | shed (n.棚屋)。",
            details: "organic fertilizer 意为有机肥料。landlord（房东）、shed（储藏棚）均非用于改良土壤营养成分的农用物资。",
            cn: "农业专家建议使用有机肥料来增加土壤养分，同时不破坏生态环境。",
            jp: "農業の専門家は、環境を損なうことなく土壌の養分を高めるために有機肥料（fertilizer）を使用することを推奨しました。"
        }
    },
    {
        id: 10,
        target: "authentic",
        category: "中等",
        stem: "The travel agency organized a guided tour offering visitors an ________ cultural experience in historic Kyoto.",
        options: ["authentic", "outgoing", "seasoned", "overwhelming"],
        correct: "authentic",
        explanations: {
            guide: "文化旅游修饰形容词。an ________ cultural experience 结合在历史名城京都体验正宗地道的文化，选 authentic（正宗的/地道的/真正的）。",
            family: "authentic (adj.正宗的/真正的) | outgoing (adj.离职的) | seasoned (adj.有经验的) | overwhelming (adj.压倒性的)。",
            details: "an authentic experience 属于旅游与文化高频搭配，意为地道纯正的体验。seasoned 用来修饰人，不能修饰抽象的文化体验。",
            cn: "该旅行社组织了一次导览游，为游客在历史悠久的京都提供了地道的文化体验。",
            jp: "その旅行代理店は、歴史ある京都で観光客に本格的な（authentic）文化体験を提供するガイドツアーを企画しました。"
        }
    },
    {
        id: 11,
        target: "overwhelming",
        category: "中等",
        stem: "Shareholders voted ________ in favor of the proposed merger during the extraordinary general meeting.",
        options: ["overwhelmingly", "overwhelming", "overwhelm", "overwhelmed"],
        correct: "overwhelmingly",
        explanations: {
            guide: "副词修饰动词考点。voted ________ in favor of... 结构中，需要副词修饰动词 voted，表达股东以“压倒性地”多数投票赞成并购，选 overwhelmingly。",
            family: "overwhelmingly (adv.压倒性地/极其) | overwhelming (adj.压倒性的) | overwhelm (v.压倒) | overwhelmed (adj.不知所措的)。",
            details: "vote overwhelmingly in favor of 属于商务会议极高频词组，意为以压倒性优势投票赞成。overwhelming 是形容词，不能直接修饰动词 voted。",
            cn: "在特别股东大会上，股东们以压倒性多数投票赞成提议的并购方案。",
            jp: "臨時株主総会において、株主らは提案された合併に圧倒的多数で（overwhelmingly）賛成票を投じました。"
        }
    },
    {
        id: 12,
        target: "withstand",
        category: "中等",
        stem: "Thanks to robust emergency backup generators, the server facility ________ the severe power outage without data loss.",
        options: ["withstood", "withstand", "withstanding", "withstands"],
        correct: "withstood",
        explanations: {
            guide: "谓语动词过去式考点。主语为 the server facility，全句叙述过去发生的突发断电中设备成功“经受住了”考验且无数据丢失，选过去式 withstood（withstand的过去式）。",
            family: "withstood (v-ed经受住了) | withstand (v.原形) | withstanding (v-ing) | withstands (v-三单)。",
            details: "withstood the power outage 意为经受住了停电考验。叙述已发生的停电事件必须使用一般过去时 withstood。",
            cn: "多亏了强大的应急备用发电机，服务器设施经受住了严重停电的考验，没有发生数据丢失。",
            jp: "強力な緊急予備発電機のおかげで、サーバー施設はデータ損失なしに深刻な停電を持ちこたえました（withstood）。"
        }
    },
    {
        id: 13,
        target: "supplement",
        category: "困难",
        stem: "The training coordinator distributed ________ reading materials to help participants prepare for the advanced certification exam.",
        options: ["supplementary", "supplement", "supplementation", "supplementing"],
        correct: "supplementary",
        explanations: {
            guide: "派生形容词作定语。修饰 reading materials（阅读材料），表达分发“补充的/辅助性的”学习材料，选派生形容词 supplementary。",
            family: "supplementary (adj.补充的/追加的) | supplement (n./v.补充) | supplementation (n.增补行为) | supplementing (v-ing)。",
            details: "supplementary materials 属于培训教育专属高频词组，意为补充材料。supplementation 是名词，不能在此直接充当前置修饰定语。",
            cn: "培训协调员分发了补充阅读材料，以帮助学员为高级认证考试做好准备。",
            jp: "研修コーディネーターは、受講生が上級認定試験の準備をするのを支援するために、補足の（supplementary）読書資料を配布しました。"
        }
    },
    {
        id: 14,
        target: "devoted",
        category: "困难",
        stem: "The human resources director praised Ms. Keller for her unwavering ________ to employee wellness programs.",
        options: ["devotion", "devoted", "devotedly", "devote"],
        correct: "devotion",
        explanations: {
            guide: "派生抽象名词作介词宾语。for her unwavering ________ to... 结构中，形容词 unwavering（坚定不移的）后面接抽象名词形式 devotion（奉献/专心投入）。",
            family: "devotion (n.奉献/投入) | devoted (adj.忠诚的) | devotedly (adv.忠诚地) | devote (v.奉献)。",
            details: "devotion to a program 意为对某项计划的全身心投入与奉献。devoted 是形容词，devote 是动词，均不能直接充当介词 for 的名词宾语中心语。",
            cn: "人力资源总监称赞凯勒女士对员工健康福利计划坚定不移的奉献精神。",
            jp: "人事部長は、従業員の健康増進プログラムに対するケラー氏の揺るぎない献身（devotion）を称賛しました。"
        }
    },
    {
        id: 15,
        target: "authentic",
        category: "困难",
        stem: "Before purchasing the rare historical manuscript, museum curators hired certified forensic experts to verify its ________.",
        options: ["authenticity", "authentic", "authentically", "authenticate"],
        correct: "authenticity",
        explanations: {
            guide: "派生抽象名词作宾语。to verify its ________ 结构中，形容词性物主代词 its 后面接名词形式 authenticity（真实性/真伪）。",
            family: "authenticity (n.真实性/真伪) | authentic (adj.真正的) | authentically (adv.真正地) | authenticate (v.鉴定)。",
            details: "verify its authenticity 属于文物与艺术品鉴定高频短语，意为核验其真伪。authentic 是形容词，authenticate 是动词，不能作 verify 的宾语。",
            cn: "在购买这份珍贵的历史手稿之前，博物馆馆长聘请了认证司法鉴定专家来核实其真实性。",
            jp: "貴重な歴史的手稿を購入する前に、博物館の学芸員はその真贋/真正性（authenticity）を検証するために認定法医学専門家を雇いました。"
        }
    },
    {
        id: 16,
        target: "seasoned",
        category: "困难",
        stem: "Even ________ financial auditors found the complex offshore tax structures exceptionally difficult to analyze.",
        options: ["seasoned", "seasoning", "seasons", "seasonable"],
        correct: "seasoned",
        explanations: {
            guide: "分词形容词修饰专业人员。Even ________ financial auditors 结构中，修饰财务审计师，表达即便是“经验丰富/资深的”审计师也觉得难，选 seasoned。",
            family: "seasoned (adj.资深的/老练的) | seasoning (n.调味品) | seasons (n.季节) | seasonable (adj.应季的/及时的)。",
            details: "seasoned auditors 意为资深审计人员。seasoning（调味品）、seasonable（合季节的）均不能用来修饰审计师的专业履历水平。",
            cn: "即便是经验丰富的财务审计师，也发现这种复杂的离岸税务架构极其难以分析。",
            jp: "経験豊富な（seasoned）財務監査人でさえ、その複雑なオフショア税務構造を分析するのは極めて困難であると感じました。"
        }
    },
    {
        id: 17,
        target: "outgoing",
        category: "困难",
        stem: "During the leadership transition ceremony, the ________ president formally handed over operational responsibilities to his successor.",
        options: ["outgoing", "incoming", "devoted", "authentic"],
        correct: "outgoing",
        explanations: {
            guide: "语境逻辑与职务修饰词辨析。the ________ president handed over responsibilities to his successor 结合将职责移交给其继任者（successor），选 outgoing（即将离任的/卸任的）。",
            family: "outgoing (adj.离任的/卸任的) | incoming (adj.新上任的) | devoted (adj.忠诚的) | authentic (adj.正宗的)。",
            details: "the outgoing president 指交出权力的卸任总裁。incoming 指新上任的总裁，向继任者移交工作的主体只能是 outgoing president。",
            cn: "在领导层交接仪式上，即将离任的总裁正式将运营管理职责移交给了他的继任者。",
            jp: "リーダーシップの移行式典において、退任する（outgoing）社長は後継者に業務責任を正式に引き継ぎました。"
        }
    },
    {
        id: 18,
        target: "shed",
        category: "困难",
        stem: "The independent research report is expected to ________ light on consumer spending patterns during the economic transition.",
        options: ["shed", "withstand", "supplement", "devote"],
        correct: "shed",
        explanations: {
            guide: "高阶动词习惯搭配考点。is expected to ________ light on... 属于托业阅读与写作高阶固定动宾短语 shed light on sth，表达“阐明/揭示某事”，选 shed。",
            family: "shed (v.阐明/去除/流出) | withstand (v.经受) | supplement (v.增补) | devote (v.奉献)。",
            details: "shed light on sth 意为照亮/阐明某事。withstand、supplement 和 devote 均不能与 light on 构成此特定引申短语。",
            cn: "预计这份独立研究报告将揭示经济转型期间的消费者支出模式。",
            jp: "その独立した調査報告書は、経済移行期における消費者支出パターンを解明する/明らかにする（shed light on）ものと期待されています。"
        }
    }
];