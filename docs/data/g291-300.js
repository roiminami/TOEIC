// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag291-300.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "satisfied",
        pos: "形",
        ipa: "/ˈsætɪsfaɪd/",
        cn: "满意的，满足的",
        jp: "満足した、満ち足りた",
        family: "satisfy / satisfaction / satisfactory / satisfying",
        tips: "客户服务与员工评价核心形容词。极高频搭配为 be satisfied with...（对……感到满意），在阅读中常与 content 或 pleased 进行同义替换。",
        desc: "She is satisfied."
    },
    {
        word: "environmental",
        pos: "形",
        ipa: "/ɪnˌvaɪrənˈmentl/",
        cn: "环境的，环保的",
        jp: "環境の、環境保護の",
        family: "environment / environmentally / environmentalist",
        tips: "企业社会责任（CSR）与公共行政高频形容词。常考搭配 environmental regulations（环保规制）、environmental impact assessment（环境影响评估）。",
        desc: "The issues are environmental."
    },
    {
        word: "former",
        pos: "形/名",
        ipa: "/ˈfɔːrmər/",
        cn: "以前的，前任的；前者",
        jp: "前の、前任の；前者",
        family: "formerly",
        tips: "人事变动与职场背景描述核心词。常考搭配 former employer（前任雇主）、former general manager（前总经理）。作代词时，the former... the latter 意为“前者……后者”。",
        desc: "He is a former manager."
    },
    {
        word: "decade",
        pos: "名",
        ipa: "/ˈdekeɪd/",
        cn: "十年，十年期",
        jp: "10年間",
        family: "decades",
        tips: "宏观经济趋势与企业发展史高频时间名词。常考固定搭配 for over a decade（十多年来）、past decade（过去十年），用以引导现在完成时的时间区间。",
        desc: "The company grew for a decade."
    },
    {
        word: "mostly",
        pos: "副",
        ipa: "/ˈməʊstli/",
        cn: "主要地，大部分，基本上",
        jp: "主に、大部分は、たいてい",
        family: "most / almost",
        tips: "运营分析与市场定位常用副词。常用于修饰原因或构成比例，如 mostly because of（主要因为）、mostly composed of（主要由……组成）。常与 primarily 互换。",
        desc: "The staff is mostly local."
    },
    {
        word: "initial",
        pos: "形/名/動",
        ipa: "/ɪˈnɪʃl/",
        cn: "最初的，开始的；首字母；签署首字母",
        jp: "最初期段階の、初発の；頭文字；頭文字をサインする",
        family: "initially / initiate / initiative / initiation",
        tips: "项目生命周期与合同签署核心词。常考形容词搭配 initial phase / stage（初始阶段）。作动词时，initial the contract 表示在合同各页边上签署姓名首字母以示确认。",
        desc: "Our initial budget was low."
    },
    {
        word: "significant",
        pos: "形",
        ipa: "/sɪɡˈnɪfɪkənt/",
        cn: "显著的，重大的，有意义的",
        jp: "著しい、重大な、意味深い",
        family: "significantly / significance / signify",
        tips: "财务分析与业绩报告黄金形容词。常修饰变化或增减，如 significant increase/improvement（显著增长/改善）。其副词 significantly 在语法题中极高频出现。",
        desc: "The increase is significant."
    },
    {
        word: "educational",
        pos: "形",
        ipa: "/ˌedʒuˈkeɪʃənl/",
        cn: "教育的，有教育意义的",
        jp: "教育の、教育的な",
        family: "education / educate / educator",
        tips: "招聘筛选与员工培训常用形容词。最常考搭配为 educational background（教育背景/学历），通常作为简历评估（resume screening）中的重点筛选项。",
        desc: "The program is educational."
    },
    {
        word: "decline",
        pos: "動/名",
        ipa: "/dɪˈklaɪn/",
        cn: "下降，减少；婉拒，拒绝",
        jp: "減少する、衰退する；辞退する、断る",
        family: "declined / declining",
        tips: "多义核心词。在财务图表题中常指数量下降（a sharp decline in profits 利润骤降）；在商务公关礼仪中指婉言拒绝，如 decline the invitation（婉拒邀请）。",
        desc: "Sales began to decline."
    },
    {
        word: "preparation",
        pos: "名",
        ipa: "/ˌprepəˈreɪʃn/",
        cn: "准备，筹备",
        jp: "準備、備え",
        family: "prepare / preparatory / prepared",
        tips: "项目筹划与活动组织核心名词。极其常考的介词搭配为 in preparation for...（为……做准备），在听力与阅读场景中频繁作为动作目的出现。",
        desc: "The preparation takes time."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "satisfied",
        category: "简单",
        stem: "The client was completely ________ with the prompt delivery of the office appliances.",
        options: ["satisfied", "former", "decline", "office"],
        correct: "satisfied",
        explanations: {
            guide: "系动词后的形容词作表语。空格前有 was 和程度副词 completely，后接 with 引导的介词短语，应填入 satisfied 表示“满意的”。",
            family: "satisfied (adj.满意的) | former (adj.前任的) | decline (v./n.下降/拒绝) | office (n.办公室)。",
            details: "be satisfied with 是高频固定短语，意为“对……感到满意”。结合配送及时（prompt delivery）的商务语境，此处选择 satisfied 逻辑最合理。",
            cn: "客户对办公设备能及时配送感到非常满意。",
            jp: "オフィス機器が迅速に配送されたことに、クライアントは完全に満足（satisfied）していました。"
        }
    },
    {
        id: 2,
        target: "environmental",
        category: "简单",
        stem: "The new chemical factory must comply with strict ________ regulations to prevent air pollution.",
        options: ["environmental", "educational", "significant", "closed"],
        correct: "environmental",
        explanations: {
            guide: "修饰名词的形容词词义选择。空格位于名词 regulations（规章）之前做定语，结合 prevent air pollution（防止空气污染）的政策语境选 environmental。",
            family: "environmental (adj.环境的/环保的) | educational (adj.教育的) | significant (adj.重大的) | closed (adj.关闭的)。",
            details: "environmental regulations 意为“环保规制”，是合规审查与工厂运营场景的常用短语。其余选项不符合污染控制背景。",
            cn: "这家新化学工厂必须遵守严格的环保规章，以防止空气污染。",
            jp: "新しい化学工場は、大気汚染を防ぐために厳格な環境（environmental）規制を遵守しなければなりません。"
        }
    },
    {
        id: 3,
        target: "former",
        category: "简单",
        stem: "The ________ manager of the procurement department attended the retirement party yesterday.",
        options: ["former", "mostly", "decade", "seminar"],
        correct: "former",
        explanations: {
            guide: "修饰名词的形容词。空格前有定冠词 The，后接名词 manager，结合退休派对（retirement party）场景，填入表示“前任的”形容词 former。",
            family: "former (adj.前任的) | mostly (adv.主要地) | decade (n.十年) | seminar (n.研讨会)。",
            details: "the former manager 意为“前任经理”，符合其参加退休庆祝会（retirement party）的人事社交场景。其他干扰项词性不符或意思不合逻辑。",
            cn: "采购部的前任经理昨天参加了退休派对。",
            jp: "調達部門の前（former）マネージャーが、昨日開催された退職記念パーティーに出席しました。"
        }
    },
    {
        id: 4,
        target: "decade",
        category: "简单",
        stem: "Our primary parts supplier has maintained a high quality standard for more than a ________.",
        options: ["decade", "preparation", "initial", "weekend"],
        correct: "decade",
        explanations: {
            guide: "介词宾语名词中心语辨析。空格前面有 a 且前面有 more than，需要填入表示时间跨度的单数名词，选 decade。",
            family: "decade (n.十年) | preparation (n.准备) | initial (adj.最初的) | weekend (n.周末)。",
            details: "for more than a decade 意为“十多年来”，表示公司和供应商（supplier）长期维持着高水平的质量标准。其余选项无法与 a 搭配构成合适的时间段。",
            cn: "我们的主要零部件供应商已经维持了十多年的高品质标准。",
            jp: "当社の主要な部品サプライヤーは、10年以上（decade）にわたり高い品質基準を維持しています。"
        }
    },
    {
        id: 5,
        target: "mostly",
        category: "简单",
        stem: "The project manager noted that the delay in the project was ________ due to unexpected database glitches.",
        options: ["mostly", "satisfied", "former", "prior"],
        correct: "mostly",
        explanations: {
            guide: "修饰介词短语的副词。空格后面是表示原因的 due to，需要副词来表达程度和原因的主次关系，选 mostly。",
            family: "mostly (adv.基本上/主要地) | satisfied (adj.满意的) | former (adj.以前的) | prior (adj.先前的)。",
            details: "mostly due to 意为“主要是因为”，是解释延误（delay）和系统故障（glitches）时极其经典的商务英语状语表达。其他形容词无法在此位置修饰 due to。",
            cn: "项目经理指出，项目的延误主要是由于意外的数据库故障造成的。",
            jp: "プロジェクトマネージャーは、プロジェクトの遅延が主に（mostly）予期せぬデータベースの不具合によるものであると指摘しました。"
        }
    },
    {
        id: 6,
        target: "initial",
        category: "简单",
        stem: "The ________ phase of the website renovation project will take approximately three weeks to complete.",
        options: ["initial", "significant", "decline", "office"],
        correct: "initial",
        explanations: {
            guide: "修饰名词的形容词定语。空格后为名词 phase（阶段），结合网站翻修项目刚开始的时间周期语境，选用 initial 表示“最初的”。",
            family: "initial (adj.最初的) | significant (adj.显著的) | decline (v./n.下降) | office (n.办公室)。",
            details: "the initial phase 意为“初始阶段”，是软件开发、办公系统更新等项目周期管理中的固定搭配。significant（显著的）不用于修饰阶段本身。",
            cn: "网站翻修项目的初始阶段将需要大约三周的时间来完成。",
            jp: "ウェブサイト改装プロジェクトの初期（initial）段階の完了には、約3週間かかります。"
        }
    },
    {
        id: 7,
        target: "significant",
        category: "中等",
        stem: "The new marketing strategy led to a ________ increase in the quarterly revenue of the subsidiary.",
        options: ["significant", "satisfied", "initial", "voluntary"],
        correct: "significant",
        explanations: {
            guide: "修饰名词宾语的形容词。空格后是名词 increase（增长），用于修饰季度营收（quarterly revenue）这一财务报表统计对象，选用 significant。",
            family: "significant (adj.显著的/重大的) | satisfied (adj.满意的) | initial (adj.最初的) | voluntary (adj.自愿的)。",
            details: "a significant increase 意为“显著的增长”，是描述业绩攀升、投资回报增长的标准高级财务词组。satisfied 不能用来修饰 increase。",
            cn: "新的营销策略促使子公司的季度收入出现了显著增长。",
            jp: "新しいマーケティング戦略により、子会社の四半期収益は著しい（significant）増加を記録しました。"
        }
    },
    {
        id: 8,
        target: "educational",
        category: "中等",
        stem: "Applicants must provide documents regarding their ________ background and previous employment history.",
        options: ["educational", "environmental", "former", "intensive"],
        correct: "educational",
        explanations: {
            guide: "修饰名词的形容词。空格位于名词 background 之前，与其构成招聘语境下的固定名词词组，结合后半句的 employment history 选 educational。",
            family: "educational (adj.教育的) | environmental (adj.环境的) | former (adj.以前的) | intensive (adj.密集的)。",
            details: "educational background 意为“教育背景/学历背景”，是人力资源招聘和入职筛查中的金牌高频术语。environmental（环境的）与此完全不搭。",
            cn: "申请人必须提供关于其教育背景和过往工作经历的文件。",
            jp: "応募者は、自身の教育（educational）背景および過去の職歴に関する書類を提出しなければなりません。"
        }
    },
    {
        id: 9,
        target: "decline",
        category: "中等",
        stem: "Due to fierce competition, the retail chain experienced a sudden ________ in its annual profit.",
        options: ["decline", "decade", "mostly", "deposit"],
        correct: "decline",
        explanations: {
            guide: "及物动词后面的名词宾语。空格前有不定冠词 a 和形容词 sudden（突然的），作 experienced 的宾语，结合激烈竞争和年利润的关系选 decline。",
            family: "decline (n./v.下降/拒绝) | decade (n.十年) | mostly (adv.主要地) | deposit (n.押金)。",
            details: "experience a decline in... 意为“经历……的下降”，在此指代因为市场竞争造成了利润的突然缩水。其他选项词性不符或意思不合商业常识。",
            cn: "由于激烈的竞争，该零售连锁店的年度利润出现了突然下降。",
            jp: "激しい競争により、その小売チェーンは年間利益の急激な減少（decline）を経験しました。"
        }
    },
    {
        id: 10,
        target: "preparation",
        category: "中等",
        stem: "The administrative staff is working diligently in ________ for the upcoming annual general meeting.",
        options: ["preparation", "satisfied", "environmental", "seminar"],
        correct: "preparation",
        explanations: {
            guide: "固定介词短语中心名词考查。空格前有介词 in，后接介词 for，考查固定短语搭配，填入名词 preparation。",
            family: "preparation (n.准备/筹备) | satisfied (adj.满意的) | environmental (adj.环境的) | seminar (n.研讨会)。",
            details: "in preparation for... 意为“为……做准备”，常用于行政后勤或会务策划（annual general meeting）等场景。其他名词在此无法构成固定语法搭配。",
            cn: "行政员工正在努力工作，为即将举行的年度股东大会做准备。",
            jp: "管理スタッフは、今度の定時株主総会の準備（preparation）として精力的に取り組んでいます。"
        }
    },
    {
        id: 11,
        target: "satisfied",
        category: "中等",
        stem: "Our customer service department strives to guarantee that all clients are fully ________.",
        options: ["satisfied", "satisfying", "satisfaction", "satisfactory"],
        correct: "satisfied",
        explanations: {
            guide: "形容词作表语与词性选择。空格位于系动词 are 之后，并被副词 fully 修饰，需填入表示感受的形容词，选 satisfied 作表语。",
            family: "satisfied (adj.满意的) | satisfying (adj.令人满意的) | satisfaction (n.满意) | satisfactory (adj.令人满意的/符合要求的)。",
            details: "strives to guarantee that... are fully satisfied 意为“努力确保所有客户都完全满意”。主语是“人”（clients），修饰人主观感受应当使用 -ed 结尾的形容词 satisfied。satisfactory 意为“合意的/满意的”，多用于修饰事物或方案。",
            cn: "我们的客户服务部门致力于确保所有客户都完全满意。",
            jp: "当社のカスタマーサービス部門は、すべての顧客に完全に満足（satisfied）していただくことを保証するよう努めています。"
        }
    },
    {
        id: 12,
        target: "initial",
        category: "中等",
        stem: "Although the budget was ________ estimated at ten thousand dollars, the actual cost was much higher.",
        options: ["initially", "initial", "initiative", "initiation"],
        correct: "initially",
        explanations: {
            guide: "被动语态中的修饰副词。空格位于被动结构 was estimated（被估计）之间，需要填入副词作状语，选 initially。",
            family: "initially (adv.起初/最初) | initial (adj.最初的) | initiative (n.倡议/主动性) | initiation (n.开始/入门)。",
            details: "was initially estimated at 意为“最初估价为……”。副词修饰过去分词 estimated，常在预算分析和实际超出预算（actual cost was higher）的对照语境中作为标配状语出现。",
            cn: "尽管最初预算估算为一万美元，但实际成本要高得多。",
            jp: "予算は当初（initially）、1万ドルと見積もられていましたが、実際の費用はそれを大幅に上回りました。"
        }
    },
    {
        id: 13,
        target: "environmental",
        category: "困难",
        stem: "The consulting firm advises automotive businesses on how to operate in an ________ friendly manner.",
        options: ["environmentally", "environmental", "environment", "environmentalists"],
        correct: "environmentally",
        explanations: {
            guide: "修饰形容词的副词状语。空格位于形容词 friendly 之前，用于修饰该形容词，需填入副词，选 environmentally。",
            family: "environmentally (adv.在环保方面地) | environmental (adj.环境的) | environment (n.环境) | environmentalists (n-pl环境学家)。",
            details: "environmentally friendly 意为“环境友好的/环保的”，是一个固定的高阶复合形容词结构，用来修饰汽车企业（automotive businesses）的运营方式。其余同族词不符语法修饰逻辑。",
            cn: "该咨询公司就如何以环保的方式进行运营，向汽车企业提供建议。",
            jp: "そのコンサルティング会社は、自動車関連企業に対して、環境に配慮した（environmentally）方法で操業する方法についてアドバイスを行っています。"
        }
    },
    {
        id: 14,
        target: "former",
        category: "困难",
        stem: "The researcher was ________ employed as a senior chemist at the prestigious biomedical facility.",
        options: ["formerly", "former", "formers", "formative"],
        correct: "formerly",
        explanations: {
            guide: "被动语态中的修饰副词。空格位于助动词 was 和过去分词 employed（被雇佣）之间，作状语修饰动词，表示过去的状态，需填入副词 formerly。",
            family: "formerly (adv.以前地/曾经) | former (adj.前任的) | formers (n-pl) | formative (adj.形成的)。",
            details: "was formerly employed as 意为“以前曾受雇为……”，是介绍高级技术人才或员工教育背景及过往履历时的标志性高阶副词用法。其余选项不作副词。",
            cn: "该研究员以前曾受雇于这家著名的生物医学机构，担任高级化学家。",
            jp: "その研究者は、以前（formerly）、その高名なバイオメディカル施設で主任化学者として雇用されていました。"
        }
    },
    {
        id: 15,
        target: "decade",
        category: "困难",
        stem: "Over the past several ________, the municipal council has focused on optimizing the public transport grid.",
        options: ["decades", "decade", "decadence", "decadent"],
        correct: "decades",
        explanations: {
            guide: "限定词后的复数名词选择。空格位于 over the past several（在过去的几个……）之后，此处必须填入可数名词复数，选 decades。",
            family: "decades (n-pl数十年) | decade (n.十年) | decadence (n.堕落) | decadent (adj.颓废的)。",
            details: "over the past several decades 意为“在过去的几十年里”，用来描绘市政交通电网（grid）优化项目的宏观时间演变。由于有 several 修饰，必须使用复数名词形式 decades。",
            cn: "在过去的几十年里，市议会一直致力于优化公共交通网络。",
            jp: "過去数十年間（decades）にわたり、市議会は公共交通網の最適化に注力してきました。"
        }
    },
    {
        id: 16,
        target: "significant",
        category: "困难",
        stem: "The introduction of the streamlined database system has ________ reduced the time spent on data entry.",
        options: ["significantly", "significant", "significance", "signifying"],
        correct: "significantly",
        explanations: {
            guide: "助动词和实义动词之间的修饰副词。空格位于现在完成时助动词 has 与过去分词 reduced 之间，作状语修饰 reduced，需填入副词 significantly。",
            family: "significantly (adv.显著地) | significant (adj.显著的) | significance (n.意义/重要性) | signifying (v-ing象征中)。",
            details: "has significantly reduced 意为“显著地减少了……”。副词在此修饰减少的幅度，是衡量IT系统流程精简（streamlined database）效率时的关键语境搭配。",
            cn: "引入精简的数据库系统显著减少了数据录入所花费的时间。",
            jp: "合理化されたデータベースシステムの導入により、データ入力に費やされる時間は著しく（significantly）削減されました。"
        }
    },
    {
        id: 17,
        target: "decline",
        category: "困难",
        stem: "Because of a tight schedule, the executive had to ________ the invitation to speak at the keynote seminar.",
        options: ["decline", "declined", "declining", "declination"],
        correct: "decline",
        explanations: {
            guide: "情态动词短语后的及物动词词义辨析。had to 后面必须接及物动词原形，结合宾语 invitation（邀请），选用 decline 表达拒绝之意。",
            family: "decline (v.拒绝/下降) | declined (v-ed已拒绝) | declining (adj.衰退的) | declination (n.倾斜/衰退)。",
            details: "decline the invitation 意为“婉拒邀请”，在日常商务接待或会议邀约（keynote seminar）中，是比 refuse 更加正式得体的高阶商务社交动词。其余选项词性或时态不符。",
            cn: "由于日程紧凑，该高管不得不婉言拒绝在主旨研讨会上发言的邀请。",
            jp: "スケジュールが過密であったため、その役員は基調セミナーでの講演依頼を辞退（decline）せざるを得ませんでした。"
        }
    },
    {
        id: 18,
        target: "preparation",
        category: "困难",
        stem: "The project supervisor asked the engineering crew to complete the ________ phases before the rainy season arises.",
        options: ["preparatory", "preparation", "prepare", "preparedness"],
        correct: "preparatory",
        explanations: {
            guide: "修饰名词的形容词定语。空格位于定冠词 the 与名词复数 phases（阶段/步骤）之间，起修饰限定作用，选用表示“准备工作的/初步的”形容词 preparatory。",
            family: "preparatory (adj.准备工作的) | preparation (n.准备) | prepare (v.筹备) | preparedness (n.准备状态)。",
            details: "preparatory phases 意为“准备阶段/前期阶段”。在大型工程施工或卫星基建项目中，表示在雨季到来（rainy season arises）前必须做好的前置准备步骤。其他选项在此无法作为形容词修饰复数名词 phases。",
            cn: "项目主管要求工程人员在雨季到来之前完成准备工作阶段。",
            jp: "プロジェクトスーパーバイザーはエンジニアリングチームに対し、雨季が始まる前に準備（preparatory）段階を完了するよう指示しました。"
        }
    }
];