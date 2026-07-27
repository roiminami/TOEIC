// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data161-170.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "recruit",
        pos: "動/名",
        ipa: "/rɪˈkruːt/",
        cn: "招募，招聘；新员工",
        jp: "採用する、募集する；新入社員",
        family: "recruitment / recruiter / recruiting",
        tips: "HR核心词：recruit top talent（招募顶尖人才），recruitment agency（招聘中介）。",
        desc: "They recruit new graduates."
    },
    {
        word: "banquet",
        pos: "名",
        ipa: "/ˈbæŋkwɪt/",
        cn: "宴会，盛宴",
        jp: "宴会、バンケット",
        family: "banqueting / banquet hall",
        tips: "商务社交高频：annual banquet（年度晚宴），banquet hall（宴会厅）。",
        desc: "The banquet starts tonight."
    },
    {
        word: "venue",
        pos: "名",
        ipa: "/ˈvenjuː/",
        cn: "活动场地，举办地点",
        jp: "会場、開催地",
        family: "venues",
        tips: "活动策划核心词：conference venue（会议场地），event venue（活动地点）。",
        desc: "The venue is spacious."
    },
    {
        word: "complimentary",
        pos: "形",
        ipa: "/ˌkɑːmplɪˈmentri/",
        cn: "赠送的，免费的",
        jp: "無料の、優待の",
        family: "compliment / complimentarily",
        tips: "听力/阅读绝高频：complimentary breakfast/ticket（免费早餐/门票），与 free 同义。",
        desc: "They offer complimentary coffee."
    },
    {
        word: "conclude",
        pos: "動",
        ipa: "/kənˈkluːd/",
        cn: "结束，终止；达成（协议）",
        jp: "締めくくる、終了する、結論づける",
        family: "conclusion / conclusive / conclusively",
        tips: "商务会议高频：conclude a meeting（结束会议），conclude a contract（签订合同）。",
        desc: "We conclude the meeting."
    },
    {
        word: "sculpture",
        pos: "名",
        ipa: "/ˈskʌlptʃər/",
        cn: "雕塑，雕刻品",
        jp: "彫刻、彫像",
        family: "sculpt / sculptor / sculptural",
        tips: "Part 1 展厅与广场高频：bronze sculpture（青铜雕塑），sculpture garden（雕塑公园）。",
        desc: "A marble sculpture stands."
    },
    {
        word: "in-person",
        pos: "形/副",
        ipa: "/ˌɪn ˈpɜːrsn/",
        cn: "亲自的，线下的，实地的",
        jp: "対面の、直接の",
        family: "person / personally",
        tips: "职场与活动高频：in-person interview（线下面试），attend in person（亲自出席）。",
        desc: "We held an in-person meeting."
    },
    {
        word: "relocate",
        pos: "動",
        ipa: "/ˌriːˈloʊkeɪt/",
        cn: "搬迁，重新安置",
        jp: "移転する、引っ越す",
        family: "relocation / relocated",
        tips: "公司变动与工作派遣高频：relocate a headquarters（搬迁总部），relocate staff（调动员工）。",
        desc: "The office will relocate."
    },
    {
        word: "ingredient",
        pos: "名",
        ipa: "/ɪnˈɡriːdiənt/",
        cn: "（烹饪）原料，要素",
        jp: "材料、成分、要素",
        family: "ingredients",
        tips: "餐饮与食品高频：fresh ingredients（新鲜食材），key ingredient（关键要素）。",
        desc: "Mix all the ingredients."
    },
    {
        word: "anticipate",
        pos: "動",
        ipa: "/ænˈtɪsɪpeɪt/",
        cn: "预期，预料，期待",
        jp: "予期する、期待する",
        family: "anticipation / anticipated / participatory",
        tips: "商务预测高频：anticipate growth（预料增长），anticipate demand（预测需求）。",
        desc: "We anticipate higher sales."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "venue",
        category: "简单",
        stem: "The event manager booked a spacious ________ for the upcoming regional conference.",
        options: ["venue", "banquet", "sculpture", "ingredient"],
        correct: "venue",
        explanations: {
            guide: "活动设施名词。booked a spacious ________ 结合区域会议语境，选 venue（场地/举办地点）。",
            family: "venue (n.场地) | banquet (n.宴会) | sculpture (n.雕塑) | ingredient (n.原料)。",
            details: "spacious venue 意为宽敞的场地。banquet 指宴会活动本身，非承载会议的场地设施。",
            cn: "活动经理为即将召开的区域会议预订了一处宽敞的场地。",
            jp: "イベントマネージャーは近く開催される地域会議のために広い会場（venue）を予約しました。"
        }
    },
    {
        id: 2,
        target: "complimentary",
        category: "简单",
        stem: "All guests staying at the hotel will receive a ________ breakfast in the morning.",
        options: ["complimentary", "compliment", "anticipate", "relocate"],
        correct: "complimentary",
        explanations: {
            guide: "修饰名词的形容词。修饰 breakfast，表达酒店向客人提供的“免费/赠送的”早餐，选 complimentary。",
            family: "complimentary (adj.免费的) | compliment (n./v.赞美) | anticipate (v.预期) | relocate (v.搬迁)。",
            details: "complimentary breakfast 指免费早餐。compliment 是名词或动词，不能直接修饰名词 breakfast。",
            cn: "所有入住酒店的客人早晨均可享用免费早餐。",
            jp: "ホテルに宿泊するすべてのゲストは、朝に無料の（complimentary）朝食を受け取ることができます。"
        }
    },
    {
        id: 3,
        target: "recruit",
        category: "简单",
        stem: "The human resources team is planning to ________ ten new engineers for the tech department.",
        options: ["recruit", "recruitment", "conclude", "in-person"],
        correct: "recruit",
        explanations: {
            guide: "动词不定式考点。is planning to 后面接动词原形，表达招募工程师，选 recruit（招聘/招募）。",
            family: "recruit (v.招募) | recruitment (n.招聘) | conclude (v.结束) | in-person (adj.线下的)。",
            details: "to recruit ten new engineers 意为招聘十名新工程师。recruitment 是名词，不能跟在不定式符号 to 后面。",
            cn: "人力资源团队计划为技术部门招聘十名新工程师。",
            jp: "人事チームは技術部門のために10人の新しいエンジニアを採用する（recruit）ことを計画しています。"
        }
    },
    {
        id: 4,
        target: "banquet",
        category: "简单",
        stem: "Members of the company gathered in the main hall to attend the annual awards ________.",
        options: ["banquet", "venue", "ingredient", "sculpture"],
        correct: "banquet",
        explanations: {
            guide: "商务活动名词。attend the annual awards ________ 结合聚在主大厅，选 banquet（宴会/晚宴）。",
            family: "banquet (n.宴会) | venue (n.场地) | ingredient (n.原料) | sculpture (n.雕塑)。",
            details: "annual awards banquet 意为年度颁奖晚宴。venue 指场地，不是员工参加的活动本身。",
            cn: "公司员工聚集在大厅参加年度颁奖晚宴。",
            jp: "会社のメンバーは年次授賞宴会（banquet）に参加するためにメインホールに集まりました。"
        }
    },
    {
        id: 5,
        target: "ingredient",
        category: "简单",
        stem: "The chef insists on using fresh, locally sourced ________ for all restaurant dishes.",
        options: ["ingredients", "ingredient", "anticipate", "relocate"],
        correct: "ingredients",
        explanations: {
            guide: "复数名词泛指考点。using fresh, locally sourced ________ 表达烹饪所用的“原料/食材”，用复数 ingredients。",
            family: "ingredients (n.复数原料) | ingredient (n.单数) | anticipate (v.预期) | relocate (v.搬迁)。",
            details: "fresh ingredients 指新鲜食材。因指代烹饪菜肴所需的多种原料，需用复数形式 ingredients。",
            cn: "主厨坚持所有餐厅菜肴均使用新鲜的当地食材。",
            jp: "シェフはすべてのレストランの料理に新鮮で地元産の食材（ingredients）を使用ことにこだわっています。"
        }
    },
    {
        id: 6,
        target: "relocate",
        category: "简单",
        stem: "Due to rapid business growth, the corporate headquarters will ________ to a larger building next year.",
        options: ["relocate", "relocation", "conclude", "recruit"],
        correct: "relocate",
        explanations: {
            guide: "将来时态动词原形。will 后面接动词原形，表达 headquarters（总部）“搬迁”至更大的大楼，选 relocate。",
            family: "relocate (v.搬迁) | relocation (n.搬迁) | conclude (v.结束) | recruit (v.招募)。",
            details: "will relocate 意为将要搬迁。relocation 是名词，不能充当 will 后的核心谓语动词。",
            cn: "由于业务快速增长，公司总部明年将搬迁至一栋更大的大楼。",
            jp: "急速な事業成長のため、会社本社は来年より大きなビルに移転する（relocate）予定です。"
        }
    },
    {
        id: 7,
        target: "conclude",
        category: "中等",
        stem: "The CEO made a few closing remarks to ________ the annual shareholder meeting.",
        options: ["conclude", "conclusion", "anticipate", "relocate"],
        correct: "conclude",
        explanations: {
            guide: "动词不定式考点。made remarks to 后面接动词原形，表达“结束/总结”股东大会，选 conclude。",
            family: "conclude (v.结束) | conclusion (n.结论/结束) | anticipate (v.预期) | relocate (v.搬迁)。",
            details: "to conclude the meeting 意为结束会议。conclusion 是名词，不能紧跟在不定式符号 to 之后。",
            cn: "首席执行官发表了几句总结发言，结束了年度股东大会。",
            jp: "CEOは年次株主総会を締めくくる（conclude）ために終わりの言葉を述べました。"
        }
    },
    {
        id: 8,
        target: "anticipate",
        category: "中等",
        stem: "Market analysts ________ a significant rise in consumer demand during the upcoming holiday season.",
        options: ["anticipate", "anticipation", "complimentary", "in-person"],
        correct: "anticipate",
        explanations: {
            guide: "句子谓语动词考点。主语是 market analysts（市场分析师），后面缺乏谓语动词，表达“预料/预期”需求上升，选 anticipate。",
            family: "anticipate (v.预料) | anticipation (n.预料/期待) | complimentary (adj.免费的) | in-person (adj.线下的)。",
            details: "analysts anticipate... 表达分析师预计……。anticipation 是名词，不能在主语后充当谓语动词。",
            cn: "市场分析师预计在即将来临的假期旺季，消费者需求将显着上升。",
            jp: "市場アナリストは、近く開催されるホリデーシーズン中に消費者の需要が大幅に増加すると予想して（anticipate）阻います。"
        }
    },
    {
        id: 9,
        target: "in-person",
        category: "中等",
        stem: "Candidates who pass the online screening will be invited for an ________ interview next week.",
        options: ["in-person", "personally", "complimentary", "sculpture"],
        correct: "in-person",
        explanations: {
            guide: "复合形容词作定语。an ________ interview 属于高频职场表达，意为“线下面试/现场面试”，选 in-person。",
            family: "in-person (adj.线下的/亲自的) | personally (adv.亲自地) | complimentary (adj.免费的) | sculpture (n.雕塑)。",
            details: "an in-person interview 意为线下面试。personally 是副词，不能直接修饰名词 interview。",
            cn: "通过线上筛选的候选人将被邀请参加下周的线下面试。",
            jp: "オンライン選考を通過した候補者は、来週対面（in-person）面接に招待されます。"
        }
    },
    {
        id: 10,
        target: "sculpture",
        category: "中等",
        stem: "A large bronze ________ was placed in the center of the museum plaza.",
        options: ["sculpture", "sculptor", "venue", "banquet"],
        correct: "sculpture",
        explanations: {
            guide: "艺术展品名词辨析。A large bronze ________ 表达放置在广场中央的“青铜雕塑”，选 sculpture。",
            family: "sculpture (n.雕塑) | sculptor (n.雕塑家) | venue (n.场地) | banquet (n.宴会)。",
            details: "bronze sculpture 指青铜雕塑。sculptor 是指“雕塑家”本人，非被摆放的艺术品。",
            cn: "一座巨大的青铜雕塑被放置在博物馆广场中央。",
            jp: "美術館広場の中央に大きなブロンズ彫刻（sculpture）が設置されました。"
        }
    },
    {
        id: 11,
        target: "recruit",
        category: "中等",
        stem: "The company hired an external agency to assist with the ________ of qualified managers.",
        options: ["recruitment", "recruit", "relocation", "anticipation"],
        correct: "recruitment",
        explanations: {
            guide: "动词派生名词考点。assist with the ________ of... 结构中，在定冠词 the 与介词 of 之间填入名词 recruitment（招聘/招募）。",
            family: "recruitment (n.招聘) | recruit (v.招募) | relocation (n.搬迁) | anticipation (n.预期)。",
            details: "recruitment of managers 意为经理人员的招聘。recruit 是动词，不能直接跟在定冠词 the 后面做介词宾语。",
            cn: "该公司雇用了一家外部中介机构来协助招聘合格的经理人员。",
            jp: "同社は合格したマネージャーの採用（recruitment）を支援するために外部機関を雇いました。"
        }
    },
    {
        id: 12,
        target: "conclude",
        category: "中等",
        stem: "After hours of intense negotiation, both parties finally came to a successful ________.",
        options: ["conclusion", "conclude", "anticipation", "recruitment"],
        correct: "conclusion",
        explanations: {
            guide: "高频商务短语。come to a conclusion 属于固定短语，意为“达成协议/得出结论”，在此填入名词 conclusion。",
            family: "conclusion (n.结论/达成协议) | conclude (v.结束) | anticipation (n.预期) | recruitment (n.招聘)。",
            details: "came to a successful conclusion 意为取得了成功的结局/达成协议。conclude 为动词，不能被不定冠词 a 和形容词 successful 修饰。",
            cn: "经过数小时的激烈谈判，双方终于取得了成功的结局并达成协议。",
            jp: "数時間に及ぶ激しい交渉の末、両者はついに成功裏に締めくくり（conclusion）に達しました。"
        }
    },
    {
        id: 13,
        target: "anticipate",
        category: "困难",
        stem: "In ________ of bad weather, the organizers set up a large tent over the outdoor stage.",
        options: ["anticipation", "anticipate", "conclusion", "relocation"],
        correct: "anticipation",
        explanations: {
            guide: "高阶介词短语。in anticipation of 属于托业 Part 5 高频介词短语，意为“预料到……/鉴于对……的预期”。",
            family: "anticipation (n.预料/期待) | anticipate (v.预料) | conclusion (n.结论) | relocation (n.搬迁)。",
            details: "in anticipation of... 表示“预料到某事而提前做准备”。anticipate 是动词原形，不能跟在介词 in 后面。",
            cn: "预料到天气恶劣，组织者在户外舞台上方搭起了一个大帐篷。",
            jp: "悪天候を予想して（in anticipation of）、主催者は屋外ステージの上に大きなテントを設置しました。"
        }
    },
    {
        id: 14,
        target: "relocate",
        category: "困难",
        stem: "The HR department offered generous ________ packages to employees moving to the new regional office.",
        options: ["relocation", "relocate", "recruitment", "complimentary"],
        correct: "relocation",
        explanations: {
            guide: "职场福利复合名词。relocation packages 是企业福利专属词汇，意为“搬迁补贴/异地安置津贴”。",
            family: "relocation (n.搬迁/异地安置) | relocate (v.搬迁) | recruitment (n.招聘) | complimentary (adj.免费的)。",
            details: "relocation packages 指公司为调动员工提供的异地搬迁补贴方案。relocate 为动词，不能作 packages 的前置定语。",
            cn: "人力资源部为搬迁至新区域办公室的员工提供了丰厚的搬迁补贴方案。",
            jp: "人事部門は新しい地域オフィスに移転する従業員に手厚い移転（relocation）手当を提示しました。"
        }
    },
    {
        id: 15,
        target: "venue",
        category: "困难",
        stem: "Due to unexpected scheduling conflicts, the organizers decided to change the conference ________ at the last minute.",
        options: ["venue", "banquet", "sculpture", "ingredient"],
        correct: "venue",
        explanations: {
            guide: "商务活动名词高阶应用。change the conference ________ 表达在最后关头更换会议“地点/场地”，选 venue。",
            family: "venue (n.场地/举办地) | banquet (n.宴会) | sculpture (n.雕塑) | ingredient (n.原料)。",
            details: "conference venue 意为会议场地。change the venue 是活动管理中的高频搭配。",
            cn: "由于意想不到的日程冲突，组织者决定在最后关头更改会议场地。",
            jp: "予期せぬスケジュールの競合のため、主催者は土壇場で会議の会場（venue）を変更することを決定しました。"
        }
    },
    {
        id: 16,
        target: "complimentary",
        category: "困难",
        stem: "The airline offered passengers ________ upgrades to business class following an extensive flight delay.",
        options: ["complimentary", "compliment", "anticipatory", "in-person"],
        correct: "complimentary",
        explanations: {
            guide: "商务客服高频形容词。________ upgrades 意为“免费升级”，选形容词 complimentary。",
            family: "complimentary (adj.免费赠送的) | compliment (n.赞赏) | anticipatory (adj.预期的) | in-person (adj.线下的)。",
            details: "complimentary upgrades 属于航空公司客服常考搭配。compliment 是名词，不能在此修饰名词 upgrades。",
            cn: "航班严重延误后，航空公司向乘客提供了免费的头等舱/商务舱升级。",
            jp: "大規模な飛行遅延の後、航空会社は乗客にビジネスクラスへの無料（complimentary）アップグレードを提供しました。"
        }
    },
    {
        id: 17,
        target: "ingredient",
        category: "困难",
        stem: "Strong leadership and effective communication are essential ________ for long-term organizational success.",
        options: ["ingredients", "ingredient", "recruits", "venues"],
        correct: "ingredients",
        explanations: {
            guide: "抽象比喻语义考点。essential ________ 表示长期成功的关键“要素/成分”，用复数名词 ingredients。",
            family: "ingredients (n.复数要素/成分) | ingredient (n.单数) | recruits (n.新员工) | venues (n.场地)。",
            details: "essential ingredients 是抽象商务英语中的常见比喻搭配，指不可或缺的成功要素。Leadership 与 communication 为两个要素，故用复数 ingredients。",
            cn: "强有力的领导力和有效的沟通是组织获得长期成功的必备要素。",
            jp: "強力なリーダーシップと効果的なコミュニケーションは、組織の長期的な成功に不可欠な要素（ingredients）です。"
        }
    },
    {
        id: 18,
        target: "in-person",
        category: "困难",
        stem: "Although virtual workshops have become popular, the majority of attendees still favor ________ training sessions.",
        options: ["in-person", "personally", "personnel", "recruitment"],
        correct: "in-person",
        explanations: {
            guide: "复合形容词前置修饰。修饰 training sessions（培训课程），与 virtual workshops（线上研讨会）相对，选 in-person（线下的/实地的）。",
            family: "in-person (adj.实地的/线下的) | personally (adv.亲自地) | personnel (n.人员) | recruitment (n.招聘)。",
            details: "in-person training sessions 意为线下实地培训课程。personally 是副词，不符合修饰名词短语的语法功能。",
            cn: "尽管线上研讨会变得很流行，但大多数与会者仍然倾向于线下实地培训课程。",
            jp: "バーチャルワークショップが人気を集めているものの、参加者の過半数は依然として対面（in-person）の研修セッションを好みます。"
        }
    }
];