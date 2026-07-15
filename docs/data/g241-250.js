// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag151-160.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "tip",
        pos: "名/動",
        ipa: "/tɪp/",
        cn: "提示，建议；小费；倾倒",
        jp: "助言、ヒント、チップ；傾ける",
        family: "tips / tipped / tipping",
        tips: "职场效率与日常接待高频词。在听力Part 1与Part 2中，常考“小费”或“实用建议（useful tip）”语义。在阅读中，也作为动词表示“倾斜”或“提供内幕消息”。",
        desc: "The guide gave a tip."
    },
    {
        word: "admission",
        pos: "名",
        ipa: "/ədˈmɪʃn/",
        cn: "准许进入，入场，入场费；承认",
        jp: "入場、入場料、許可、告白",
        family: "admit / admissible / admittedly",
        tips: "观光休闲与会展场景核心名词。极其常考的固定搭配为 admission fee（入场费）、free admission（免费入场）。在语法中，注意其动词形式为 admit（承认/准许进入）。",
        desc: "Admission to the museum is free."
    },
    {
        word: "arrival",
        pos: "名",
        ipa: "/əˈraɪvl/",
        cn: "抵达，到达，到达者/物",
        jp: "到着、到着便、新参者",
        family: "arrive / arrivals",
        tips: "交通客运与物流运输核心名词。常考搭配 upon arrival（一到达就……）、estimated time of arrival (ETA，预计抵达时间)。在阅读中常与 departure（出发）作为反义词成对出现。",
        desc: "The arrival was on time."
    },
    {
        word: "profit",
        pos: "名/動",
        ipa: "/ˈfrɑːfɪt/",
        cn: "利润，收益；获利，得益",
        jp: "利益、収益；利益を得る",
        family: "profitable / profitably / profits",
        tips: "财务报表与商业运营高频词。极常考搭配 make a profit（获利/盈利）、net profit（净利润）。其形容词形式 profitable（盈利的/有利润的）在词性填空题中出现概率极高。",
        desc: "The company made a profit."
    },
    {
        word: "complex",
        pos: "形/名",
        ipa: "/ˈkɑːmpleks/",
        cn: "复杂的；综合设施，建筑群",
        jp: "複雑な；複合施設、コンプレックス",
        family: "complexity / complexly / complexes",
        tips: "工程建设、系统技术与办公环境高频词。作形容词时修饰 complex system（复杂系统）。作名词时指工业或住宅建筑群，如 apartment complex（公寓楼群）、office complex（办公综合体）。",
        desc: "The system is complex."
    },
    {
        word: "insurance",
        pos: "名",
        ipa: "/<i>nˈʃʊrəns/",
        cn: "保险，保险费，保险业",
        jp: "保険、保険金",
        family: "insure / insurer / insured",
        tips: "员工福利、差旅管理及风险防范核心名词。必考经典短语包括 health insurance（医疗保险）、travel insurance（旅行险）、insurance policy（保险单）。",
        desc: "We have health insurance."
    },
    {
        word: "guarantee",
        pos: "動/名",
        ipa: "/ˌɡærənˈtiː/",
        cn: "保证，担保；保修单，保证书",
        jp: "保証する、約束する；保証書",
        family: "guaranteed / guaranteeing / guarantees",
        tips: "产品销售与售后服务黄金词汇。作动词时常接宾语从句 guarantee that...（保证……）。作名词时常考 under guarantee（在保修期内），在阅读中常与 warranty 进行同义互换。",
        desc: "We guarantee the quality."
    },
    {
        word: "finalize",
        pos: "動",
        ipa: "/ˈfaɪnəlaɪz/",
        cn: "落实，最终确定，使敲定",
        jp: "最終決定する、仕上げる",
        family: "final / finally / finalization",
        tips: "合同谈判、项目管理与会议策划核心动词。高频搭配 finalize the contract（敲定合同）、finalize the schedule（最终确定日程）。在听力中常作决定性进展的标志词。",
        desc: "We will finalize the contract."
    },
    {
        word: "related",
        pos: "形",
        ipa: "/rɪˈleɪtɪd/",
        cn: "相关的，有联系的",
        jp: "関連した、関係のある",
        family: "relate / relation / relationship",
        tips: "信息归类与问题排查高频形容词。最经典的考法是 be related to...（与……相关，注意介词用 to）。在阅读中常与 connected 或 associated 进行同义替换。",
        desc: "The issues are related."
    },
    {
        word: "entry",
        pos: "名",
        ipa: "/ˈentri/",
        cn: "进入，入口；参赛作品，条目",
        jp: "入場、入り口、エントリー、項目",
        family: "enter / entries",
        tips: "安全通道、文娱活动与数据录入高频名词。常考搭配 entry fee（报名费/入场费）、data entry（数据录入）。在竞赛场景中，常指提交的“参赛作品”。",
        desc: "The entry is free."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "admission",
        category: "简单",
        stem: "The price of ________ to the historical museum is ten dollars per person.",
        options: ["admission", "finalize", "related", "office"],
        correct: "admission",
        explanations: {
            guide: "名词中心语的词义与场景搭配。空格前有介词 of，后有地点状语，需填入一个表示进入或门票概念的名词，选 admission。",
            family: "admission (n.入场/准许进入) | finalize (v.敲定) | related (adj.相关的) | office (n.办公室)。",
            details: "price of admission 意为“入场价格/门票价格”，是文旅、景区参观场景下的标准搭配。其余选项词性不符或语义不通。",
            cn: "该历史博物馆的入场门票价格为每人十美元。",
            jp: "その歴史博物館への入場料（admission）は、1人あたり10ドルです。"
        }
    },
    {
        id: 2,
        target: "arrival",
        category: "简单",
        stem: "Passengers should check the digital flight board for the estimated time of ________.",
        options: ["arrival", "insurance", "entry", "closed"],
        correct: "arrival",
        explanations: {
            guide: "特定交通运输语境下的名词搭配。空格在介词 of 之后，结合 flight board（航班指示牌）的语境，选 arrival。",
            family: "arrival (n.抵达) | insurance (n.保险) | entry (n.进入) | closed (adj.关闭的)。",
            details: "estimated time of arrival 意为“预计抵达时间 (ETA)”，是机场交通、物流运输等场景下最经典的专有名词词组。其他选项在此处没有逻辑意义。",
            cn: "旅客应查看数字化航班指示牌，以获取预计抵达时间。",
            jp: "乗客は、到着予定時刻（arrival）をデジタルフライト案内板で確認する必要があります。"
        }
    },
    {
        id: 3,
        target: "profit",
        category: "简单",
        stem: "The retail chain reported a record-breaking ________ for the second consecutive fiscal year.",
        options: ["profit", "guarantee", "related", "weekend"],
        correct: "profit",
        explanations: {
            guide: "及物动词后面的名词宾语。空格前有动词 reported（报告）和形容词 record-breaking（突破纪录的），结合企业财报选 profit。",
            family: "profit (n.利润) | guarantee (n./v.保证) | related (adj.相关的) | weekend (n.周末)。",
            details: "reported a profit 意为“报告盈利/申报利润”，是财务季度总结、年终业绩汇报中的标准行话。其余选项无法与“突破纪录”以及财报语境合理契合。",
            cn: "该零售连锁店连续第二个财政年度报告了创纪录的利润。",
            jp: "その小売チェーンは、2年連続の会計年度で過去最高の利益（profit）を報告しました。"
        }
    },
    {
        id: 4,
        target: "insurance",
        category: "简单",
        stem: "We highly recommend purchasing travel ________ before departing for your international corporate trip.",
        options: ["insurance", "tip", "arrival", "proposed"],
        correct: "insurance",
        explanations: {
            guide: "修饰名词作宾语的语意搭配。空格前有动词短语 purchasing（购买）和名词 travel（旅行），需填入与之能构成合理消费项目的名词，选 insurance。",
            family: "insurance (n.保险) | tip (n.建议/小费) | arrival (n.抵达) | proposed (adj.被提议的)。",
            details: "purchasing travel insurance 意为“购买旅行险”，是公司差旅规章、商务外派通告中的标配短语。其他名词无法与 travel 构成此类标准业务项目。",
            cn: "我们强烈建议您在出发进行国际商务旅行前购买旅行保险。",
            jp: "海外出張に出発する前に、旅行保険（insurance）に加入することを強くお勧めします。"
        }
    },
    {
        id: 5,
        target: "related",
        category: "简单",
        stem: "All documents ________ to the company merger must be submitted to the legal department by Friday.",
        options: ["related", "finalize", "guarantee", "prior"],
        correct: "related",
        explanations: {
            guide: "后置定语修饰语。空格后有介词 to 引导的短语，构成修饰主语 documents 的结构，选分词形容词 related 构成固定搭配。",
            family: "related (adj.相关的) | finalize (v.最终确定) | guarantee (v./n.保证) | prior (adj.先前的)。",
            details: "documents related to... 意为“与……相关的文档”，此处 related to 作为后置定语，修饰主语名词 documents。其他选项词性不符或不能与 to 搭配。",
            cn: "所有与公司合并相关的文档必须在周五前提交给法律部。",
            jp: "会社の合併に関連する（related）すべての書類は、金曜日までに法務部に提出しなければなりません。"
        }
    },
    {
        id: 6,
        target: "tip",
        category: "简单",
        stem: "The experienced manager shared a useful ________ on how to streamline daily office operations.",
        options: ["tip", "insurance", "complex", "other"],
        correct: "tip",
        explanations: {
            guide: "冠词与修饰词后的名词中心语。空格前有不定冠词 a 和形容词 useful（实用的），后接 on how to...（关于如何……），选 tip 表达“建议”。",
            family: "tip (n.提示/建议) | insurance (n.保险) | complex (n.综合体) | other (adj.其他的)。",
            details: "a useful tip on... 意为“一个关于……的实用建议/诀窍”，是日常行政、技能培训或导师分享中的极常用搭配。其他名词在此处语意完全不通。",
            cn: "这位经验丰富的经理分享了一个关于如何精简日常办公业务的实用建议。",
            jp: "経験豊富なマネージャーが、日常のオフィス業務を合理化する方法に関する役立つヒント（tip）を共有してくれました。"
        }
    },
    {
        id: 7,
        target: "finalize",
        category: "中等",
        stem: "The executive board will meet tomorrow morning to ________ the budget for the upcoming fiscal year.",
        options: ["finalize", "arrival", "profit", "fully"],
        correct: "finalize",
        explanations: {
            guide: "动词不定式作目的状语的词性选择。空格位于 to 之后，后面带有名词词组 budget 作宾语，必须填入及物动词原形，选 finalize。",
            family: "finalize (v.敲定) | arrival (n.抵达) | profit (n./v.利润) | fully (adv.完全地)。",
            details: "finalize the budget 意为“敲定预算/最终确定预算”，属于典型的企业高层行政和计划管理语境。其他干扰项无法构成动宾搭配。",
            cn: "执行董事会将于明天上午召开会议，以最终确定下一财政年度的预算。",
            jp: "執行役員会は、次年度の予算を最終決定する（finalize）ために明日の朝に会議を行います。"
        }
    },
    {
        id: 8,
        target: "complex",
        category: "中等",
        stem: "The newly renovated residential ________ features modern security systems and a communal garden.",
        options: ["complex", "guarantee", "admission", "booked"],
        correct: "complex",
        explanations: {
            guide: "特定地产场景的名词中心语。空格前有形容词 residential（住宅的），作为整个句子的主语中心词，选用表示建筑群或综合设施的名词 complex。",
            family: "complex (n.综合大楼/建筑群) | guarantee (n.保证) | admission (n.入场) | booked (adj.被预订的)。",
            details: "residential complex 意为“住宅小区/公寓楼群”，是房产开发、城市规划及物业管理中的高频标准术语。其余选项在此语境下无法作主语或逻辑不符。",
            cn: "新近翻修的住宅小区配备了现代化的安全系统和一个公共花园。",
            jp: "新しく改装された住宅団地（complex）には、現代的なセキュリティシステムと共同庭園が備わっています。"
        }
    },
    {
        id: 9,
        target: "guarantee",
        category: "中等",
        stem: "Our high-quality office appliances come with a two-year ________ against any mechanical glitches.",
        options: ["guarantee", "entry", "related", "intensive"],
        correct: "guarantee",
        explanations: {
            guide: "定冠词/数量词修饰下的名词中心语。空格前有 a two-year（两年的），后接介词 against，表示防范机械故障，应填入名词 guarantee（保修/保证）。",
            family: "guarantee (n.保证/保修单) | entry (n.进入) | related (adj.相关的) | intensive (adj.密集的)。",
            details: "come with a two-year guarantee 意为“附带两年保修”，是商务零售与办公设备采购合同中关于售后服务的标准表达，等同于 warranty。其他选项不合逻辑。",
            cn: "我们的高品质办公电器附带两年保修，以防发生任何机械故障。",
            jp: "当社の高品質なオフィス用電化製品には、機械的な不具合に対する2年間の保証（guarantee）が付いています。"
        }
    },
    {
        id: 10,
        target: "entry",
        category: "中等",
        stem: "The contest organizers received over five hundred ________ forms before the final submission deadline.",
        options: ["entry", "finalize", "arrival", "memo"],
        correct: "entry",
        explanations: {
            guide: "名词修饰名词的名词组合。空格修饰后面的复数名词 forms（表格），且处于大赛（contest）背景中，应选用名词 entry 构成固定复合名词。",
            family: "entry (n.报名/参赛/入口) | finalize (v.最终确定) | arrival (n.抵达) | memo (n.备忘录)。",
            details: "entry forms 意为“报名表/参赛申请表”，是在各类行业技能竞赛、促销活动中极高频出现的固定商业组合搭配。其他选项不能合理修饰 forms。",
            cn: "在大赛最终截稿日期前，活动组织者收到了五百多份报名表。",
            jp: "コンテストの主催者は、最終締め切り前に500枚以上の応募用紙（entry）を受け取りました。"
        }
    },
    {
        id: 11,
        target: "insurance",
        category: "中等",
        stem: "The human resources manager will provide details regarding the new employee health ________ package.",
        options: ["insurance", "related", "guarantee", "voluntary"],
        correct: "insurance",
        explanations: {
            guide: "多重名词修饰的中心语。空格前有 health（健康），后面是 package（套餐/方案），结合人力资源部（human resources）公布福利，选 insurance。",
            family: "insurance (n.保险) | related (adj.相关的) | guarantee (n.保证) | voluntary (adj.自愿的)。",
            details: "employee health insurance package 意为“员工医疗保险福利计划”，属于人力资源部日常行政政策发布的绝对金牌核心术语。其他词无法构成合理的福利项目。",
            cn: "人力资源部经理将提供有关新员工医疗保险计划的详细信息。",
            jp: "人事マネージャーが、新しい従業員医療保険（insurance）パッケージに関する詳細を案内する予定です。"
        }
    },
    {
        id: 12,
        target: "arrival",
        category: "中等",
        stem: "Upon their ________ at the venue, guests are requested to register at the main reception desk.",
        options: ["arrival", "arrive", "arrived", "arriving"],
        correct: "arrival",
        explanations: {
            guide: "物主代词后的名词词性选择。空格前面有形容词性物主代词 their，此处必须填入名词，选 arrival。",
            family: "arrival (n.抵达) | arrive (v.抵达) | arrived (v-ed已抵达) | arriving (v-ing抵达中)。",
            details: "upon their arrival 意为“一到达……/抵达时”，是商务接待与大型会议、展会入场时极其地道的高端固定表达，等同于 when they arrive。此处必须使用其名词形式 arrival。",
            cn: "一到达会场，宾客们就被要求在主接待台登记。",
            jp: "会場に到着（arrival）の際、ゲストの皆様はメイン受付にてご登録いただくようお願いいたします。"
        }
    },
    {
        id: 13,
        target: "profit",
        category: "困难",
        stem: "Expanding corporate operations into the European market turned out to be a highly ________ venture.",
        options: ["profitable", "profit", "profitably", "profited"],
        correct: "profitable",
        explanations: {
            guide: "副词后的形容词修饰语。空格前有程度副词 highly（高度地），后有名词 venture（企业/风险商业行为），需填入形容词作定语，选 profitable。",
            family: "profitable (adj.盈利的) | profit (n./v.利润) | profitably (adv.有利可图地) | profited (v-ed获利)。",
            details: "a highly profitable venture 意为“一个高度盈利的项目/极赚钱的买卖”。修饰商业投资的可行性和高收益。名词 profit 无法直接在此处作形容词性定语修饰单数名词 venture。",
            cn: "将公司业务拓展至欧洲市场，事实证明这是一项利润丰厚的投资。",
            jp: "ヨーロッパ市場への事業拡大は、非常に収益性の高い（profitable）事業であることが判明しました。"
        }
    },
    {
        id: 14,
        target: "complex",
        category: "困难",
        stem: "Because of the sheer ________ of the tax regulations, we hired a prestigious accounting firm to assist us.",
        options: ["complexity", "complex", "complexes", "complexly"],
        correct: "complexity",
        explanations: {
            guide: "定冠词修饰下的抽象名词词性。空格位于定冠词 the 与介词 of 之间，前面有形容词 sheer（极度的），必须填入名词，结合税收规章特性选 complexity。",
            family: "complexity (n.复杂性) | complex (adj./n.复杂的) | complexes (n-pl建筑群) | complexly (adv.复杂地)。",
            details: "sheer complexity of... 意为“……的极度复杂性”。在高端税务合规、法律咨询场景下，用来形容条文晦涩难懂。复数 complexes 在此语境下语义不符。",
            cn: "由于税收规章极其复杂，我们聘请了一家著名的会计师事务所来协助我们。",
            jp: "税規制の極めて高い複雑性（complexity）のため、当社は支援を求めて著名な会計事務所を雇いました。"
        }
    },
    {
        id: 15,
        target: "finalize",
        category: "困难",
        stem: "The agreement is currently awaiting the ________ of its terms by both legal departments.",
        options: ["finalization", "finalize", "finally", "final"],
        correct: "finalization",
        explanations: {
            guide: "定冠词后的名词中心语。空格位于定冠词 the 和介词 of 之间，作 awaiting 的宾语，必须填入名词形式，选 finalization。",
            family: "finalization (n.最终敲定) | finalize (v.最终确定) | finally (adv.最后) | final (adj.最后的)。",
            details: "awaiting the finalization of its terms 意为“等待条款的最终确定/敲定”。属于高阶合同审查与签署进度汇报中的标准语境。其他选项词性不符。",
            cn: "该协议目前正等待双方律师团队对其条款进行最终确定。",
            jp: "その契約は現在、両方の法務部門による条件の最終決定（finalization）を待っている状態です。"
        }
    },
    {
        id: 16,
        target: "admission",
        category: "困难",
        stem: "The independent arbitrator determined that the historical emails were not ________ as key evidence.",
        options: ["admissible", "admission", "admit", "admitted"],
        correct: "admissible",
        explanations: {
            guide: "系动词后的形容词表语。空格前有 were not（系动词否定式），作为表语修饰主语 emails，结合证据属性应填入表示“可采纳的”形容词 admissible。",
            family: "admissible (adj.可容许的/可采纳的) | admission (n.入场/承认) | admit (v.承认) | admitted (v-ed已被承认)。",
            details: "admissible as evidence 意为“作为证据是可以被接纳的”，是商务法务、合同纠纷调解（arbitration）中的高阶专业法律术语。名词 admission 不能作此表语。",
            cn: "独立仲裁员认定，历史电子邮件不能作为关键证据予以采信。",
            jp: "独立仲裁人は、過去の電子メールが主要な証拠として許容（admissible）されないと判断しました。"
        }
    },
    {
        id: 17,
        target: "guarantee",
        category: "困难",
        stem: "The marketing team launched a campaign promising ________ satisfaction or a full refund of the deposit.",
        options: ["guaranteed", "guarantee", "guaranteeing", "guarantees"],
        correct: "guaranteed",
        explanations: {
            guide: "名词前的修饰语选择。空格修饰名词 satisfaction（满意），此处选用过去分词形式的形容词 guaranteed，表达“有保证的/确保的”。",
            family: "guaranteed (adj.有保证的) | guarantee (v./n.保证) | guaranteeing (v-ing保证中) | guarantees (n-pl/v-3sg)。",
            details: "guaranteed satisfaction 意为“确保满意/不满意包退”，常与全额退款（full refund）和押金（deposit）共现，属于零售促销及市场营销中的绝对杀手级承诺短语。",
            cn: "营销团队推出了一项宣传活动，承诺确保客户满意，否则全额退还押金。",
            jp: "マーケティングチームは、満足度保証（guaranteed）、または手付金の全額返金を約束するキャンペーンを開始しました。"
        }
    },
    {
        id: 18,
        target: "related",
        category: "困难",
        stem: "Building a strong ________ with clients is essential for maintaining long-term business growth.",
        options: ["relationship", "related", "relate", "relation"],
        correct: "relationship",
        explanations: {
            guide: "及物动词宾语的名词派生选择。空格前有动词 building（建立）和形容词 strong（强大的），后有介词 with，结合 client 选表示人际/业务关系的名词 relationship。",
            family: "relationship (n.人际/业务关系) | related (adj.相关的) | relate (v.联系) | relation (n.关系/亲属)。",
            details: "build a strong relationship with... 意为“与……建立稳固的关系”，专指商业合作、客户维护（CRM）中的信任关系。而 relation 较多用于国家间关系或抽象联系，此处 relationship 最为贴切。",
            cn: "与客户建立稳固的关系对于保持长期业务增长至关重要。",
            jp: "クライアントとの強固な信頼関係（relationship）を構築することは、長期的なビジネス成長を維持するために不可欠です。"
        }
    }
];