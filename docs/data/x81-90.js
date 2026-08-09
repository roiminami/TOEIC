// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data221-230.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "reunion",
        pos: "名",
        ipa: "/ˌriːˈjuːniən/",
        cn: "重聚，聚会",
        jp: "同窓会、再会",
        family: "reunite / reunited",
        tips: "常考社交与家庭场景：family reunion（家庭聚会），class reunion（同学聚会）。",
        desc: "They attended a family reunion."
    },
    {
        word: "acclaimed",
        pos: "形",
        ipa: "/əˈkleɪmd/",
        cn: "备受好评的，受到赞赏的",
        jp: "絶賛された、評価の高い",
        family: "acclaim / acclamation",
        tips: "修饰艺术与商业表现：critically acclaimed artist/novel（备受赞誉的艺术家/小说）。",
        desc: "He is an acclaimed artist."
    },
    {
        word: "carpenter",
        pos: "名",
        ipa: "/ˈkɑːrpəntər/",
        cn: "木匠，木工",
        jp: "大工",
        family: "carpentry",
        tips: "Part 1 动作与施工高频：a carpenter fixing the wooden frame（木匠修理木框）。",
        desc: "The carpenter built a table."
    },
    {
        word: "commensurate",
        pos: "形",
        ipa: "/kəˈmenʃərət/",
        cn: "相称的，相当的",
        jp: "同等の、見合った",
        family: "commensurately",
        tips: "招聘与薪酬核心句型：salary commensurate with experience（与经验相称的薪水）。",
        desc: "Pay is commensurate with experience."
    },
    {
        word: "dispose",
        pos: "動",
        ipa: "/dɪˈspoʊz/",
        cn: "处理，处置，丢弃",
        jp: "処分する、廃棄する",
        family: "disposal / disposable / disposed",
        tips: "极高频短语：dispose of waste/garbage（处理废弃物/垃圾）。注意必须与介词 of 连用。",
        desc: "Please dispose of trash properly."
    },
    {
        word: "residential",
        pos: "形",
        ipa: "/ˌrezɪˈdenʃl/",
        cn: "住宅的，居住区的",
        jp: "住宅の、居住の",
        family: "reside / resident / residence",
        tips: "地产与建筑高频：residential area/property（住宅区/房产）。",
        desc: "It is a residential area."
    },
    {
        word: "patronage",
        pos: "名",
        ipa: "/ˈpeɪtrənɪdʒ/",
        cn: "赞助，光顾，支持",
        jp: "愛顧、支援",
        family: "patron / patronize",
        tips: "商务与艺术高频：thank clients for their patronage（感谢客户的光顾支持）。",
        desc: "We appreciate your patronage."
    },
    {
        word: "turnout",
        pos: "名",
        ipa: "/ˈtɜːrnaʊt/",
        cn: "出席人数，到场率",
        jp: "出席者数、人出",
        family: "turn / turn out",
        tips: "活动与选举高频：large turnout（大量到场人数），voter turnout（投票率）。",
        desc: "There was a large turnout."
    },
    {
        word: "reform",
        pos: "動/名",
        ipa: "/rɪˈfɔːrm/",
        cn: "改革，改进",
        jp: "改革、改善；改革する",
        family: "reformer / reformation",
        tips: "政策与企业改革：policy/tax reform（政策/税制改革），reform the system（改革体制）。",
        desc: "The company announced tax reform."
    },
    {
        word: "glitches",
        pos: "名",
        ipa: "/ˈɡlɪtʃɪz/",
        cn: "小故障，技术缺陷（复数）",
        jp: "不具合、グリッチ",
        family: "glitch / glitchy",
        tips: "IT与设备高频：technical glitches（技术小故障），system glitches（系统小毛病）。",
        desc: "The system had technical glitches."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "commensurate",
        category: "简单",
        stem: "The job posting states that salary will be ________ with the candidate's professional experience.",
        options: ["commensurate", "residential", "acclaimed", "dispose"],
        correct: "commensurate",
        explanations: {
            guide: "招聘薪酬固定结构。salary will be ________ with 属于托业经典招聘搭配，意为“薪水与……相称”，选 commensurate。",
            family: "commensurate (adj.相称的) | residential (adj.住宅的) | acclaimed (adj.备受好评的) | dispose (v.处理)。",
            details: "be commensurate with... 意为与……成比例/相称。residential（住宅的）、acclaimed（备受赞誉的）均不符合薪资匹配逻辑。",
            cn: "招聘启事表明，薪资将与候选人的专业经验相称。",
            jp: "求人票には、給与は応募者の実務経験に見合った（commensurate）ものになると記載されています。"
        }
    },
    {
        id: 2,
        target: "dispose",
        category: "简单",
        stem: "All chemical waste must be ________ of according to strict environmental regulations.",
        options: ["disposed", "dispose", "reform", "reunion"],
        correct: "disposed",
        explanations: {
            guide: "动词被动语态与短语搭配。must be ________ of 结构中，过去分词与 of 构成 dispose of 的被动形式，选 disposed。",
            family: "disposed (v-ed被处置的) | dispose (v.处置) | reform (v.改革) | reunion (n.聚会)。",
            details: "be disposed of 意为被处置/被清除。dispose 为原形动词，不能与 be 构成被动语态。",
            cn: "所有化学废弃物必须根据严格的环保法规进行处置。",
            jp: "すべての化学廃棄物は、厳格な環境規制に従って処分され（disposed）なければなりません。"
        }
    },
    {
        id: 3,
        target: "residential",
        category: "简单",
        stem: "The real estate developer plans to build a new ________ complex near the city center.",
        options: ["residential", "commensurate", "glitches", "patronage"],
        correct: "residential",
        explanations: {
            guide: "地产名词修饰语。a new ________ complex 表达新建的“住宅建筑群/小区”，选 residential。",
            family: "residential (adj.住宅的) | commensurate (adj.相称的) | glitches (n.小故障) | patronage (n.赞助/光顾)。",
            details: "residential complex 意为住宅小区/住宅综合体。commensurate（相称的）不能用来修饰建筑物。",
            cn: "房地产开发商计划在市中心附近新建一个住宅小区。",
            jp: "不動産開発業者は、市街地近くに新しい住宅（residential）団地を建設することを計画しています。"
        }
    },
    {
        id: 4,
        target: "carpenter",
        category: "简单",
        stem: "An experienced ________ was hired to repair the damaged wooden beams in the historic house.",
        options: ["carpenter", "turnout", "reunion", "reform"],
        correct: "carpenter",
        explanations: {
            guide: "职业技能名词。修复木梁（repair wooden beams）所需的工种为 carpenter（木匠/木工）。",
            family: "carpenter (n.木匠) | turnout (n.出席人数) | reunion (n.聚会) | reform (n.改革)。",
            details: "carpenter 指木匠。turnout（出席人数）、reform（改革）均非施工人员职业。",
            cn: "雇用了一位经验丰富的木匠来修复这座历史建筑中受损的木梁。",
            jp: "歴史的な家屋の損傷した木製の梁を修理するために、経験豊富な大工（carpenter）が雇われました。"
        }
    },
    {
        id: 5,
        target: "glitches",
        category: "简单",
        stem: "The software team spent the morning resolving minor technical ________ in the new mobile app.",
        options: ["glitches", "glitch", "patronage", "reunion"],
        correct: "glitches",
        explanations: {
            guide: "IT缺陷复数名词考点。minor technical ________ 表达软件中细小的“技术小故障”，在修饰词 minor 后选用复数 glitches。",
            family: "glitches (n.复数小故障) | glitch (n.单数小故障) | patronage (n.赞助) | reunion (n.聚会)。",
            details: "technical glitches 意为技术小毛病。因泛指多个排查出的问题，使用复数形式 glitches。",
            cn: "软件团队整个上午都在解决新移动应用中的轻微技术小故障。",
            jp: "ソフトウェアチームは午前中、新しいモバイルアプリの軽微な技術的不具合（glitches）の修正に費やしました。"
        }
    },
    {
        id: 6,
        target: "turnout",
        category: "简单",
        stem: "Organizers were pleased with the impressive ________ at the annual charity gala.",
        options: ["turnout", "dispose", "carpenter", "residential"],
        correct: "turnout",
        explanations: {
            guide: "活动到场率名词考点。the impressive ________ 结合慈善晚会，表达令人瞩目的“到场人数/出席率”，选 turnout。",
            family: "turnout (n.到场人数) | dispose (v.处置) | carpenter (n.木匠) | residential (adj.住宅的)。",
            details: "impressive turnout 意为令人印象深刻的到场人数。dispose 是动词，不能跟在形容词 impressive 后面做宾语中心语。",
            cn: "组织者对年度慈善晚会上令人瞩目的出席人数感到非常高兴。",
            jp: "主催者は、年次チャリティーガラでの素晴らしい出席者数（turnout）に満足していました。"
        }
    },
    {
        id: 7,
        target: "acclaimed",
        category: "中等",
        stem: "The museum is featuring an exhibition by a critically ________ international sculptor.",
        options: ["acclaimed", "acclaim", "commensurate", "disposed"],
        correct: "acclaimed",
        explanations: {
            guide: "副词修饰分词形容词。critically ________ sculptor 属于艺术界固定高频搭配，表达“备受推崇的/极受赞誉的”，选 acclaimed。",
            family: "acclaimed (adj.备受好评的) | acclaim (n./v.赞誉) | commensurate (adj.相称的) | disposed (adj.处置的)。",
            details: "critically acclaimed 指深受影评人/艺术评论家好评的。acclaim 是名词或原形动词，不能被副词 critically 修饰作为前置定语。",
            cn: "该博物馆正在举办一位备受评论界赞誉的国际雕塑家的展览。",
            jp: "美術館は、批判的に高い評価を受けている（acclaimed）国際的な彫刻家の展覧会を開催しています。"
        }
    },
    {
        id: 8,
        target: "patronage",
        category: "中等",
        stem: "The restaurant manager sent thank-you vouchers to express gratitude for customer ________.",
        options: ["patronage", "patron", "reform", "glitches"],
        correct: "patronage",
        explanations: {
            guide: "商务礼仪抽象名词。express gratitude for customer ________ 属于商业谢辞固定短语，意为感谢客户的“惠顾/光顾支持”，选 patronage。",
            family: "patronage (n.光顾/赞助) | patron (n.顾客) | reform (n.改革) | glitches (n.小故障)。",
            details: "customer patronage 指客户的光顾与支持。patron 是指“顾客”个人，表达感谢客人的光顾这一行为概念时用 patronage。",
            cn: "餐厅经理发送了感谢券，以表达对客户光顾支持的谢意。",
            jp: "レストランの支配人は、顧客の愛顧（patronage）に感謝を表すために御礼のクーポンを送付しました。"
        }
    },
    {
        id: 9,
        target: "reunion",
        category: "中等",
        stem: "Former classmates gathered at the grand hotel for their twentieth high school ________.",
        options: ["reunion", "turnout", "carpenter", "residential"],
        correct: "reunion",
        explanations: {
            guide: "校友社交名词。high school ________ 结合老同学聚会（former classmates），专指“同学会/重聚”，选 reunion。",
            family: "reunion (n.聚会/重聚) | turnout (n.出席人数) | carpenter (n.木匠) | residential (adj.住宅的)。",
            details: "high school reunion 意为高中同学聚会。turnout 指人数，不能作为具体的“聚会活动”实体。",
            cn: "老同学们聚集在大酒店里，参加他们的二十周年高中同学会。",
            jp: "昔の同級生たちは、20周年の高校の同窓会（reunion）のためにグランドホテルに集まりました。"
        }
    },
    {
        id: 10,
        target: "reform",
        category: "中等",
        stem: "The chief executive officer introduced structural ________ to improve departmental productivity.",
        options: ["reforms", "reform", "commensurate", "acclaimed"],
        correct: "reforms",
        explanations: {
            guide: "企业管理复数名词考点。introduced structural ________ 表达推行结构性“改革措施”，用复数 reforms。",
            family: "reforms (n.改革措施复数) | reform (v./n.单数) | commensurate (adj.相当的) | acclaimed (adj.受好评的)。",
            details: "structural reforms 意为结构性改革措施。在泛指多项具体改革动作时选用复数形式 reforms。",
            cn: "首席执行官推行了结构性改革，以提高部门生产力。",
            jp: "最高経営責任者は、部門の生産性を向上させるために構造改革（reforms）を導入しました。"
        }
    },
    {
        id: 11,
        target: "dispose",
        category: "中等",
        stem: "Proper waste ________ facilities are located behind the main factory building.",
        options: ["disposal", "dispose", "residential", "glitches"],
        correct: "disposal",
        explanations: {
            guide: "动词派生名词作前置定语。waste ________ facilities 指“垃圾/废弃物处置设施”，选派生名词 disposal。",
            family: "disposal (n.处置/处理) | dispose (v.处置) | residential (adj.住宅的) | glitches (n.小故障)。",
            details: "waste disposal facilities 意为废弃物处置设施。dispose 是动词，不能作名词 facilities 的前置定语。",
            cn: "适当的废弃物处置设施位于主厂房大楼后方。",
            jp: "適切な廃棄物処分（disposal）施設は、メイン工場ビルの裏手に位置しています。"
        }
    },
    {
        id: 12,
        target: "residential",
        category: "中等",
        stem: "Residents in the ________ district complained about the noise from the nearby construction site.",
        options: ["residential", "reside", "acclaimed", "patronage"],
        correct: "residential",
        explanations: {
            guide: "社区区域形容词考点。in the ________ district 修饰 district（街区），表达“住宅区”，选 residential。",
            family: "residential (adj.住宅的) | reside (v.居住) | acclaimed (adj.受好评的) | patronage (n.赞助)。",
            details: "residential district 意为住宅区。reside 是动词（居住），不能直接作名词 district 的前置定语。",
            cn: "住宅区内的居民对附近施工现场的噪音提出了投诉。",
            jp: "住宅（residential）街の住民は、近くの建設現場からの騒音について苦情を申し立てました。"
        }
    },
    {
        id: 13,
        target: "commensurate",
        category: "困难",
        stem: "Employees are eligible for performance bonuses that are ________ to their individual sales achievements.",
        options: ["commensurate", "commensurately", "disposed", "acclaimed"],
        correct: "commensurate",
        explanations: {
            guide: "定语从句表语形容词。that are ________ to/with... 结构中，系动词 are 后面接形容词作表语，表达与业绩“相当的/相称的”，选 commensurate。",
            family: "commensurate (adj.相称的) | commensurately (adv.相当地) | disposed (adj.处置的) | acclaimed (adj.备受好评的)。",
            details: "bonuses that are commensurate to... 意为与业绩相称的奖金。commensurately 是副词，不能在系动词 are 后作表语。",
            cn: "员工有资格获得与其个人销售业绩相称的绩效奖金。",
            jp: "従業員は、個人の販売実績に見合った（commensurate）業績ボーナスを受け取る資格があります。"
        }
    },
    {
        id: 14,
        target: "turnout",
        category: "困难",
        stem: "Despite the bad weather, voter ________ for the municipal election reached a record high.",
        options: ["turnout", "reunion", "carpentry", "glitch"],
        correct: "turnout",
        explanations: {
            guide: "高阶政治与社会名词短语。voter ________ 属于选举固定搭配，意为“选民投票率/到场投票人数”，选 turnout。",
            family: "turnout (n.出席人数/投票率) | reunion (n.聚会) | carpentry (n.木工手艺) | glitch (n.小故障)。",
            details: "voter turnout 专指选民投票率/投票人数。reunion（聚会）、carpentry（木工）均不符合选举投票语境。",
            cn: "尽管天气恶劣，市政选举的选民投票率仍创下历史新高。",
            jp: "悪天候にもかかわらず、地方選挙の有権者投票率（turnout）は過去最高に達しました。"
        }
    },
    {
        id: 15,
        target: "glitches",
        category: "困难",
        stem: "Unexpected system ________ during the peak shopping hour led to temporary payment processing delays.",
        options: ["glitches", "reform", "patronage", "disposal"],
        correct: "glitches",
        explanations: {
            guide: "IT与电商高阶主语考点。Unexpected system ________ 复数主语结合导致支付延迟，选 glitches（系统小故障）。",
            family: "glitches (n.系统小故障) | reform (n.改革) | patronage (n.赞助) | disposal (n.处置)。",
            details: "system glitches 意为系统小故障/技术缺陷。后接谓语 led to 表示这些技术故障导致了系统支付延迟。",
            cn: "购物高峰时段意外出现的系统小故障导致了暂时的支付处理延迟。",
            jp: "ショッピングのピーク時間帯における予期せぬシステム障害（glitches）により、一時的に決済処理の遅延が発生しました。"
        }
    },
    {
        id: 16,
        target: "carpenter",
        category: "困难",
        stem: "The master artisan runs a successful ________ workshop specializing in custom mahogany furniture.",
        options: ["carpentry", "carpenter", "reunion", "turnout"],
        correct: "carpentry",
        explanations: {
            guide: "派生行业名词作前置定语。________ workshop 表达木工工艺的“木工车间/木工作坊”，选用行业名词 carpentry。",
            family: "carpentry (n.木工手艺/木工业) | carpenter (n.木匠) | reunion (n.聚会) | turnout (n.到场人数)。",
            details: "carpentry workshop 意为木工作坊。carpenter 指木匠个人，修饰 workshop（车间/作坊）时用专业行业名词 carpentry。",
            cn: "这位大师经营着一家成功的木工作坊，专门制作定制红木家具。",
            jp: "その熟練職人は、カスタムマホガニー家具を専門とする成功した木工（carpentry）工房を運営しています。"
        }
    },
    {
        id: 17,
        target: "acclaimed",
        category: "困难",
        stem: "The novel received widespread critical ________ and remained on the bestseller list for months.",
        options: ["acclaim", "acclaimed", "commensurate", "residential"],
        correct: "acclaim",
        explanations: {
            guide: "派生名词宾语考点。received widespread critical ________ 结构中，形容词 critical 后面接名词形式 acclaim（赞誉/好评）。",
            family: "acclaim (n.赞誉/好评) | acclaimed (adj.备受赞誉的) | commensurate (adj.相当的) | residential (adj.住宅的)。",
            details: "received critical acclaim 意为获得了评论界的广泛赞誉。acclaimed 是形容词，不能直接作及物动词 receive 的宾语。",
            cn: "这部小说获得了评论界的广泛赞誉，并在畅销书榜上保留了数月之久。",
            jp: "その小説は批評家から広範な絶賛（acclaim）を受け、何ヶ月もの間ベストセラーリストに載り続けました。"
        }
    },
    {
        id: 18,
        target: "reform",
        category: "困难",
        stem: "Regulatory authorities passed a set of ________ measures aimed at tightening financial oversight.",
        options: ["reform", "reformed", "glitches", "patronage"],
        correct: "reform",
        explanations: {
            guide: "名词作定语修饰名词。a set of ________ measures 表达一系列的“改革措施”，用名词 reform 作前置定语。",
            family: "reform (n./v.改革) | reformed (adj.改革后的) | glitches (n.小故障) | patronage (n.赞助)。",
            details: "reform measures 属于政策与商务专属词组，意为改革措施。reformed 指被改革过的，不符合“旨在加强金融监管”的针对性政策措施语义。",
            cn: "监管机构通过了一系列旨在加强金融监管的改革措施。",
            jp: "規制当局は、金融監督を強化することを目的とした一連の改革（reform）措置を可決しました。"
        }
    }
];