// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data541-550.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "screening",
        pos: "名",
        ipa: "/ˈskriːnɪŋ/",
        cn: "筛查，放映，初选",
        jp: "上映、選考、ふるい分け",
        family: "screen / screened / screener",
        tips: "HR招聘与活动高频：resume/preliminary screening（简历/初步筛选），film screening（电影放映）。",
        desc: "Attend the film screening."
    },
    {
        word: "interrupt",
        pos: "動",
        ipa: "/ˌɪntəˈrʌpt/",
        cn: "打断，中断，打扰",
        jp: "中断させる、邪魔をする",
        family: "interruption / uninterrupted / interruptive",
        tips: "会议与沟通高频：interrupt a presentation/meeting（打断演示/会议），without interruption（毫无中断地）。",
        desc: "Do not interrupt the speaker."
    },
    {
        word: "discard",
        pos: "動/名",
        ipa: "/dɪˈskɑːrd/",
        cn: "丢弃，抛弃，废弃",
        jp: "廃棄する、捨てる",
        family: "discarded / discarding",
        tips: "办公环保与物流高频：discard packaging/files（丢弃包装/废弃文件）。",
        desc: "Discard old files properly."
    },
    {
        word: "introductory",
        pos: "形",
        ipa: "/ˌɪntrəˈdʌktəri/",
        cn: "入门的，介绍性的，体验优惠的",
        jp: "入門の、導入の、お試しの",
        family: "introduce / introduction",
        tips: "营销与培训高频：introductory price/offer/course（首发体验优惠价/入门课程）。",
        desc: "We offer an introductory rate."
    },
    {
        word: "sustainable",
        pos: "形",
        ipa: "/səˈsteɪnəbl/",
        cn: "可持续的，环境友好的",
        jp: "持続可能な、環境に優しい",
        family: "sustain / sustainability / sustainably",
        tips: "企业战略与环保核心词：sustainable practices/energy/growth（可持续做法/能源/增长）。",
        desc: "Use sustainable energy sources."
    },
    {
        word: "thrive",
        pos: "動",
        ipa: "/θraɪv/",
        cn: "繁荣，茁壮成长，蓬勃发展",
        jp: "繁栄する、成功する、育つ",
        family: "thriving / thrived",
        tips: "商业发展高频：thrive in a competitive market（在竞争激烈的市场中繁荣发展）。",
        desc: "Small businesses can thrive here."
    },
    {
        word: "frustrated",
        pos: "形",
        ipa: "/ˈfrʌstreɪtɪd/",
        cn: "感到沮丧的，受挫的",
        jp: "イライラした、失望した",
        family: "frustrate / frustrating / frustration",
        tips: "客服与心理高频：frustrated customer/client（感到沮丧不满的客户），feel frustrated with delays（因延误而受挫）。",
        desc: "The frustrated customer called support."
    },
    {
        word: "respectively",
        pos: "副",
        ipa: "/rɪˈspektɪvli/",
        cn: "各自地，分别地",
        jp: "それぞれ、めいめいに",
        family: "respective / respect / respectfully",
        tips: "数据财报与图表高频：grew 5% and 8% respectively（分别增长了5%和8%）。",
        desc: "Sales grew 5% and 8% respectively."
    },
    {
        word: "spectacular",
        pos: "形/名",
        ipa: "/spekˈtækjələr/",
        cn: "壮观的，引人注目的，惊人的",
        jp: "壮観な、目覚ましい",
        family: "spectacle / spectacularly",
        tips: "活动与业绩高频：spectacular view/success/growth（壮丽景色/惊人成功/显著增长）。",
        desc: "The show was truly spectacular."
    },
    {
        word: "compile",
        pos: "動",
        ipa: "/kəmˈpaɪl/",
        cn: "汇编，搜集整理，编制",
        jp: "まとめる、編集する、収集する",
        family: "compilation / compiled / compiler",
        tips: "办公与数据管理高频：compile a report/list/data（汇编报告/清单/汇总数据）。",
        desc: "Please compile the quarterly data."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "screening",
        category: "简单",
        stem: "The human resources team conducted an initial resume ________ to select candidates for in-person interviews.",
        options: ["screening", "interruption", "spectacle", "compilation"],
        correct: "screening",
        explanations: {
            guide: "HR招聘复合名词考点。resume ________ 结合筛选面试候选人，选 screening（筛查/初选）。",
            family: "screening (n.初选/筛查) | interruption (n.中断) | spectacle (n.奇观) | compilation (n.汇编)。",
            details: "resume screening 意为简历筛选。interruption（打断）、spectacle（壮观景象）均非招聘初选流程。",
            cn: "人力资源团队进行了初步的简历筛选，以挑选参加现场面试的候选人。",
            jp: "人事チームは対面面接の候補者を選抜するため、最初の履歴書選考（screening）を実施しました。"
        }
    },
    {
        id: 2,
        target: "discard",
        category: "简单",
        stem: "Please ________ any outdated marketing brochures in the designated recycling bin.",
        options: ["discard", "thrive", "interrupt", "compile"],
        correct: "discard",
        explanations: {
            guide: "祈使句动词原形考点。Please 后面接动词原形，结合将过期的营销手册投入回收桶，选 discard（丢弃/废弃）。",
            family: "discard (v.丢弃/抛弃) | thrive (v.繁荣) | interrupt (v.打断) | compile (v.汇编)。",
            details: "discard outdated brochures 意为丢弃过期的宣传册。thrive（繁荣）、interrupt（打扰）动宾关系不通。",
            cn: "请将所有过期的营销手册丢入指定的回收箱内。",
            jp: "古くなったマーケティングパンフレットは、指定されたリサイクル箱に廃棄（discard）してください。"
        }
    },
    {
        id: 3,
        target: "sustainable",
        category: "简单",
        stem: "The company invested in solar energy panels to promote ________ business practices.",
        options: ["sustainable", "frustrated", "introductory", "spectacular"],
        correct: "sustainable",
        explanations: {
            guide: "企业环保修饰形容词。修饰 business practices（商业做法），结合投资太阳能电池板，选 sustainable（可持续的/环保的）。",
            family: "sustainable (adj.可持续的) | frustrated (adj.受挫的) | introductory (adj.入门的) | spectacular (adj.壮观的)。",
            details: "sustainable business practices 意为可持续的商业运作方式。frustrated（受挫的）不符合环保投资的语境。",
            cn: "公司投资了太阳能电池板，以推广可持续的商业做法。",
            jp: "同社は持続可能な（sustainable）事業慣行を推進するため、ソーラーパネルに投資しました。"
        }
    },
    {
        id: 4,
        target: "interrupt",
        category: "简单",
        stem: "Audience members were asked not to ________ the speaker until the end of the presentation.",
        options: ["interrupt", "discard", "compile", "thrive"],
        correct: "interrupt",
        explanations: {
            guide: "演说礼仪动词不定式。asked not to 后面接动词原形，表达在演示结束前不要“打断”演讲者，选 interrupt。",
            family: "interrupt (v.打断/打扰) | discard (v.丢弃) | compile (v.汇编) | thrive (v.繁荣)。",
            details: "interrupt the speaker 意为打断演讲者。discard（丢弃）、thrive（茁壮成长）在此处动宾不合逻辑。",
            cn: "在演讲结束之前，听众被要求不要打断演讲者发言。",
            jp: "聴衆は、プレゼンテーションが終了するまで講演者を中断（interrupt）させないよう求められました。"
        }
    },
    {
        id: 5,
        target: "compile",
        category: "简单",
        stem: "The administrative assistant was asked to ________ a list of attendees before Friday's conference.",
        options: ["compile", "discard", "interrupt", "thrive"],
        correct: "compile",
        explanations: {
            guide: "数据整理动词原形。was asked to 后面接动词原形，结合编制与会人员名单（a list of attendees），选 compile（汇编/整理）。",
            family: "compile (v.汇编/编制) | discard (v.丢弃) | interrupt (v.打断) | thrive (v.繁荣)。",
            details: "compile a list 意为整理/编制清单。discard（废弃）、interrupt（打扰）均无法与编制名单搭配。",
            cn: "行政助理被要求在周五的会议之前编制一份与会者名单。",
            jp: "管理アシスタントは、金曜日の会議の前に出席者リストをまとめる（compile）よう指示されました。"
        }
    },
    {
        id: 6,
        target: "spectacular",
        category: "简单",
        stem: "Guests staying at the hillside resort enjoyed a ________ panoramic view of the ocean.",
        options: ["spectacular", "frustrated", "introductory", "sustainable"],
        correct: "spectacular",
        explanations: {
            guide: "景观修饰形容词考点。修饰 panoramic view（全景视野），结合俯瞰大海的度假村，选 spectacular（壮观的/引人注目的）。",
            family: "spectacular (adj.壮观的) | frustrated (adj.受挫的) | introductory (adj.介绍性的) | sustainable (adj.可持续的)。",
            details: "spectacular panoramic view 意为壮观的全景视野。frustrated（沮丧的）不能用来修饰自然风景。",
            cn: "入住山坡度假村的客人欣赏到了壮观的大海全景。",
            jp: "山腹のリゾートに宿泊したゲストは、海の壮観な（spectacular）パノラマビューを楽しみました。"
        }
    },
    {
        id: 7,
        target: "frustrated",
        category: "中等",
        stem: "Customer support agents were trained to handle ________ clients who experienced flight cancellations.",
        options: ["frustrated", "sustainable", "spectacular", "introductory"],
        correct: "frustrated",
        explanations: {
            guide: "客户情绪修饰形容词。修饰 clients，结合经历了航班取消造成的焦躁不满，选 frustrated（感到沮丧受挫的）。",
            family: "frustrated (adj.受挫的/沮丧的) | sustainable (adj.可持续的) | spectacular (adj.壮观的) | introductory (adj.入门的)。",
            details: "frustrated clients 意为心烦意乱/感到受挫的客户。spectacular（壮丽的）不能修饰因航班延误而愤怒的乘客。",
            cn: "客户支持代表经过培训，能够妥善应对因航班取消而感到沮丧不满的客户。",
            jp: "カスタマーサポート担当者は、フライトの欠航を経験していらだっている（frustrated）顧客に対応するようトレーニングを受けました。"
        }
    },
    {
        id: 8,
        target: "thrive",
        category: "中等",
        stem: "With strong community support and competitive pricing, local bookstores continue to ________ despite digital competition.",
        options: ["thrive", "discard", "compile", "interrupt"],
        correct: "thrive",
        explanations: {
            guide: "商业繁荣动词原形。continue to 后面接动词原形，结合在电子书竞争中依然“繁荣/蓬勃发展”，选 thrive。",
            family: "thrive (v.繁荣/蓬勃发展) | discard (v.丢弃) | compile (v.整理) | interrupt (v.打断)。",
            details: "continue to thrive 属于商业报道高频短语，意为继续繁荣发展。discard（丢弃）、interrupt（打断）不合良性发展逻辑。",
            cn: "凭借强大的社区支持和具有竞争力的定价，尽管面临数字竞争，当地书店依然持续蓬勃发展。",
            jp: "強力なコミュニティの支援と競争力のある価格設定により、地元の書店はデジタル競争にもかかわらず繁栄（thrive）し続けています。"
        }
    },
    {
        id: 9,
        target: "respectively",
        category: "中等",
        stem: "Revenue in the domestic and international divisions rose by 5 percent and 8 percent, ________.",
        options: ["respectively", "spectacularly", "sustainably", "frustratingly"],
        correct: "respectively",
        explanations: {
            guide: "数据列举副词考点。句尾用于对应前文两项数据（国内与国际部门对应 5% 和 8%），选 respectively（各自地/分别地）。",
            family: "respectively (adv.分别地) | spectacularly (adv.引人注目地) | sustainably (adv.可持续地) | frustratingly (adv.令人沮丧地)。",
            details: "rose by A and B, respectively 属于财报经典表达，意为分别增长了 A 和 B。其余选项均无顺序对应的数据连接功能。",
            cn: "国内和国际部门的收入分别增长了百分之五和百分之八。",
            jp: "国内部門と国際部門の売上高は、それぞれ（respectively）5％と8％増加しました。"
        }
    },
    {
        id: 10,
        target: "introductory",
        category: "中等",
        stem: "New subscribers are eligible for a special ________ rate during their first three months of membership.",
        options: ["introductory", "spectacular", "sustainable", "frustrated"],
        correct: "introductory",
        explanations: {
            guide: "营销优惠形容词定语。a special ________ rate 结合新会员前三个月的优惠活动，选 introductory（体验优惠的/入门的）。",
            family: "introductory (adj.体验优惠的/介绍性的) | spectacular (adj.壮观的) | sustainable (adj.可持续的) | frustrated (adj.沮丧的)。",
            details: "introductory rate 属于营销高频词组，意为首发体验折扣费率。frustrated（沮丧的）与优惠订阅语境不符。",
            cn: "新订阅用户在入会的前三个月内有资格享受特别的体验优惠费率。",
            jp: "新規加入者は、会員資格の最初の3か月間、特別なお試し（introductory）料金を利用する資格があります。"
        }
    },
    {
        id: 11,
        target: "discard",
        category: "中等",
        stem: "Warehouse protocols require workers to separate ________ packaging materials from reusable wooden crates.",
        options: ["discarded", "discard", "thriving", "compiled"],
        correct: "discarded",
        explanations: {
            guide: "过去分词作定语修饰。修饰 packaging materials，与可重复利用木箱形成对比，表达被“废弃/丢弃的”包装材料，选 discarded。",
            family: "discarded (adj./v-ed废弃的) | discard (v.原形) | thriving (adj.蓬勃的) | compiled (v-ed整理的)。",
            details: "discarded materials 意为废弃材料。discard 为动词原形，不能直接作 materials 的前置定语。",
            cn: "仓库管理规定要求工人将废弃的包装材料与可重复使用的木箱分开。",
            jp: "倉庫のプロトコルにより、作業員は廃棄された（discarded）梱包材を再利用可能な木箱から分別することが求められます。"
        }
    },
    {
        id: 12,
        target: "compile",
        category: "中等",
        stem: "Market researchers spent weeks ________ customer feedback data to generate the quarterly report.",
        options: ["compiling", "compile", "interrupting", "discarding"],
        correct: "compiling",
        explanations: {
            guide: "固定句型动名词考点。spent weeks ________ (doing sth) 结构中，表达花费数周时间“汇总/整理”数据，选 compiling。",
            family: "compiling (v-ing汇编/整理) | compile (v.原形) | interrupting (v-ing打扰) | discarding (v-ing丢弃)。",
            details: "spend time compiling data 属于 spend time doing sth 结构，意为花时间整理数据。compile 是原形，不能作此结构中的动名词。",
            cn: "市场研究人员花了数周时间整理客户反馈数据，以生成季度报告。",
            jp: "市場調査員は四半期レポートを作成するために、顧客フィードバックデータの収集/集計（compiling）に数週間を費やしました。"
        }
    },
    {
        id: 13,
        target: "sustainable",
        category: "困难",
        stem: "The corporate environmental committee prioritized the long-term ________ of all supply chain operations.",
        options: ["sustainability", "sustainable", "sustainably", "spectacle"],
        correct: "sustainability",
        explanations: {
            guide: "派生抽象名词作宾语。the long-term ________ of... 结构中，形容词 long-term 后面接名词形式 sustainability（可持续性）。",
            family: "sustainability (n.可持续性) | sustainable (adj.可持续的) | sustainably (adv.可持续地) | spectacle (n.景象)。",
            details: "long-term sustainability 意为长期可持续性。sustainable 是形容词，不能直接跟在定冠词和形容词后面作及物动词 prioritized 的宾语。",
            cn: "公司环境委员会优先考虑了所有供应链运营的长期可持续性。",
            jp: "企業の環境委員会は、すべてのサプライチェーン業務の長期的な持続可能性（sustainability）を最優先事項としました。"
        }
    },
    {
        id: 14,
        target: "interrupt",
        category: "困难",
        stem: "The automated backup system operated for twelve hours without ________, securing all sensitive transactions.",
        options: ["interruption", "interrupt", "interrupting", "screening"],
        correct: "interruption",
        explanations: {
            guide: "固定介词短语考点。without ________ 属于托业高频短语，在介词 without 后填入名词形式 interruption，表达“毫无中断地”，选 interruption。",
            family: "interruption (n.中断/阻碍) | interrupt (v.打断) | interrupting (v-ing) | screening (n.筛选)。",
            details: "without interruption 意为连续不断地/无中断地。interrupt 是动词原形，不能直接跟在介词 without 后面做固定介宾短语。",
            cn: "自动备份系统不间断运行了十二个小时，保障了所有敏感交易的安全。",
            jp: "自動バックアップシステムは中断（interruption）なしで12時間稼働し、すべての機密トランザクションを保護しました。"
        }
    },
    {
        id: 15,
        target: "frustrated",
        category: "困难",
        stem: "Commuters expressed severe ________ when signal failures caused unexpected subway delays during the evening commute.",
        options: ["frustration", "frustrated", "frustratingly", "sustainability"],
        correct: "frustration",
        explanations: {
            guide: "派生抽象名词考点。expressed severe ________ 结构中，形容词 severe 后面接名词形式 frustration（沮丧/不满情绪）。",
            family: "frustration (n.沮丧/挫败感) | frustrated (adj.感到受挫的) | frustratingly (adv.令人沮丧地) | sustainability (n.可持续性)。",
            details: "expressed severe frustration 意为表达强烈的沮丧与不满。frustrated 是形容词，不能直接作及物动词 expressed 的宾语中心语。",
            cn: "当信号故障导致晚高峰地铁意外延误时，通勤者表达了极大的沮丧与不满。",
            jp: "夕方の通勤時に信号故障で地下鉄が予期せぬ遅延を起こした際、通勤客は強い不満/苛立ち（frustration）を表明しました。"
        }
    },
    {
        id: 16,
        target: "spectacular",
        category: "困难",
        stem: "The startup grew ________ fast, expanding into three international markets in less than eighteen months.",
        options: ["spectacularly", "spectacular", "spectacle", "respectively"],
        correct: "spectacularly",
        explanations: {
            guide: "副词修饰副词考点。grew ________ fast 结构中，需要副词修饰副词 fast，表达发展得“引人注目地/极其惊人地”快速，选 spectacularly。",
            family: "spectacularly (adv.引人注目地/惊人地) | spectacular (adj.壮观的) | spectacle (n.奇观) | respectively (adv.分别地)。",
            details: "spectacularly fast 意为异常惊人快速地。spectacular 是形容词，不能用来直接修饰副词 fast。",
            cn: "这家初创公司发展极其迅速，在不到十八个月的时间里拓展到了三个国际市场。",
            jp: "その新興企業は目覚ましく（spectacularly）急速に成長し、18か月未満で3つの国際市場に進出しました。"
        }
    },
    {
        id: 17,
        target: "screening",
        category: "困难",
        stem: "The film festival organizers scheduled a special advance ________ of the award-winning documentary.",
        options: ["screening", "interruption", "compilation", "frustration"],
        correct: "screening",
        explanations: {
            guide: "文化活动专有名词。advance ________ 属于影视文化展映核心短语，表达获奖纪录片的“提前放映/点映”，选 screening。",
            family: "screening (n.点映/放映/初筛) | interruption (n.打断) | compilation (n.汇编) | frustration (n.受挫)。",
            details: "advance screening 专指电影或纪录片的提前放映/预映会。interruption（中断）、frustration（沮丧）均非影视展映活动。",
            cn: "电影节组织者安排了这部获奖纪录片的特别提前点映会。",
            jp: "映画祭の主催者は、受賞歴のあるドキュメンタリーの特別先行上映（screening）を予定しました。"
        }
    },
    {
        id: 18,
        target: "thrive",
        category: "困难",
        stem: "Economic analysts noted that the e-commerce sector experienced ________ sales throughout the holiday period.",
        options: ["thriving", "thrive", "sustainably", "respectively"],
        correct: "thriving",
        explanations: {
            guide: "分词作定语修饰名词。experienced ________ sales 结构中，修饰 sales，表达假日期间“繁荣红火的/欣欣向荣的”销售业绩，选现在分词/形容词 thriving。",
            family: "thriving (adj./v-ing繁荣的/蓬勃发展的) | thrive (v.原形) | sustainably (adv.可持续地) | respectively (adv.各自地)。",
            details: "thriving sales 意为红火繁荣的销售额。thrive 是动词原形，sustainably 是副词，均不能直接作名词 sales 的前置修饰定语。",
            cn: "经济分析师指出，电子商务领域在整个假日期间迎来了蓬勃红火的销售业绩。",
            jp: "経済アナリストは、ホリデー期間を通じて電子商取引部門が好調な/活況を呈している（thriving）売上を記録したと指摘しました。"
        }
    }
];