// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data61-70.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "approximately",
        pos: "副",
        ipa: "/əˈprɑːksɪmətli/",
        cn: "大约，大概",
        jp: "およそ、約",
        family: "approximate / approximation",
        tips: "修饰数字或时间的高频副词，等同于 about / roughly。常考搭配：approximately 30 minutes（大约 30 分钟）。",
        desc: "The meeting will take approximately one hour."
    },
    {
        word: "productivity",
        pos: "名",
        ipa: "/ˌproʊdʌkˈtɪvəti/",
        cn: "生产率，生产力",
        jp: "生産性",
        family: "product / produce / productive / productively",
        tips: "企业管理高频考点。常考搭配：increase productivity（提高生产率）、employee productivity（员工工作效率）。",
        desc: "New technology can boost workplace productivity."
    },
    {
        word: "outstanding",
        pos: "形",
        ipa: "/aʊtˈstændɪŋ/",
        cn: "杰出的；未解决的，未支付的",
        jp: "優れた、突出した；未払いの、未解決の",
        family: "outstand / outstandingly",
        tips: "双重托业高频义项！1. 优秀（outstanding performance 卓越表现）；2. 未结清/未付（outstanding balance 未清欠款 / outstanding invoice 未付发票）。",
        desc: "She was praised for her outstanding work."
    },
    {
        word: "implement",
        pos: "動/名",
        ipa: "/ˈɪmplɪment/",
        cn: "实施，贯彻，执行；工具",
        jp: "実施する、実行する；道具",
        family: "implementation / implementer",
        tips: "动词最高频词汇之一！等同于 carry out / put into effect。常考：implement a new policy（实施新政策）或 implement safety measures（执行安全措施）。",
        desc: "We will implement the new policy next week."
    },
    {
        word: "publicity",
        pos: "名",
        ipa: "/pʌbˈlɪsəti/",
        cn: "宣传，报道；知名度",
        jp: "宣伝、広報、知名度",
        family: "public / publicize / publicly",
        tips: "公关与营销考点。常考：gain good publicity（获得良好宣传效果）、publicity campaign（宣传活动）、negative publicity（负面报道）。",
        desc: "The new product received great publicity."
    },
    {
        word: "aisle",
        pos: "名",
        ipa: "/aɪl/",
        cn: "过道，通道",
        jp: "通路（座席間・棚間の）",
        family: "aisle seat / aisle runner",
        tips: "听力与实景高频词！1. 航班/影院/火车 seat 选择：aisle seat（靠过道座位）；2. 超市/仓库：aisle 3（第 3 通道/货架通道）。",
        desc: "Please keep the aisle clear."
    },
    {
        word: "auditorium",
        pos: "名",
        ipa: "/ˌɔːdɪˈtɔːriəm/",
        cn: "礼堂，大礼堂，观众席",
        jp: "講堂、ホール、観客席",
        family: "audio / audience / auditory",
        tips: "商务会议与演出场地考点。常考：in the main auditorium（在大礼堂内）或 hold a keynote speech in the auditorium（在礼堂举办基调演讲）。",
        desc: "The presentation is in the main auditorium."
    },
    {
        word: "capacity",
        pos: "名",
        ipa: "/kəˈpæsəti/",
        cn: "容量，容纳能力；生产能力，职责",
        jp: "収容能力、容量；生産能力、職務",
        family: "capacious / capacitate",
        tips: "多重托业考点：1. 空间容量：at full capacity（满员/全负荷）；2. 生产能力：production capacity（生产能力）；3. 职位角色：in his capacity as manager。",
        desc: "The hall has a capacity of 500 people."
    },
    {
        word: "laundry",
        pos: "名",
        ipa: "/ˈlɔːndri/",
        cn: "洗衣店，要洗的衣服，洗涤",
        jp: "洗濯物、クリーニング店",
        family: "launder / laundromat / laundress",
        tips: "酒店服务与生活服务高频词。常考：laundry service（洗衣服务）、do the laundry（洗衣服）、laundry room（洗衣房）。",
        desc: "The hotel offers express laundry service."
    },
    {
        word: "fund-raising",
        pos: "名/形",
        ipa: "/ˈfʌndreɪzɪŋ/",
        cn: "筹款，资金募集；筹款的",
        jp: "資金調達、募金；資金調達の",
        family: "fundraise / fundraiser",
        tips: "慈善与社企高频词。常考：fund-raising event / campaign（筹款活动）、fund-raising gala（筹款晚会）。",
        desc: "They organized a fund-raising event."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "approximately",
        category: "简单",
        stem: "The renovation of the main branch will take ________ three weeks to complete.",
        options: ["approximately", "approximation", "capacity", "aisle"],
        correct: "approximately",
        explanations: {
            guide: "副词修饰数量与时间短语。修饰时间数量词 three weeks，表达“大约/大概”，选副词 approximately。",
            family: "approximately (adv.大约) | approximation (n.估计) | capacity (n.容量) | aisle (n.过道)。",
            details: "approximately 修饰基数词 three weeks 是托业最典型的副词考点。approximation 为名词，不能直接修饰数词短语。",
            cn: "主分店的翻修工作将需要大约三周的时间来完成。",
            jp: "本店のリノベーション工事の完了には、約（approximately）3週間かかる予定です。"
        }
    },
    {
        id: 2,
        target: "productivity",
        category: "简单",
        stem: "Management introduced new software tools to help increase overall employee ________.",
        options: ["productivity", "productive", "publicity", "auditorium"],
        correct: "productivity",
        explanations: {
            guide: "动词后的宾语名词。increase 后面需要接名词作宾语，与 employee 构成复合名词 employee productivity（员工工作效率）。",
            family: "productivity (n.生产率) | productive (adj.多产的) | publicity (n.宣传) | auditorium (n.礼堂)。",
            details: "increase employee productivity（提高员工生产率）是企业管理场景的高频核心考点。productive 是形容词，不能直接作动词 increase 的宾语。",
            cn: "管理层引入了新的软件工具，以帮助提高员工的整体工作效率。",
            jp: "経営陣は、従業員の全体的な生産性（productivity）向上を支援するため、新しいソフトウェアツールを導入しました。"
        }
    },
    {
        id: 3,
        target: "outstanding",
        category: "简单",
        stem: "Mr. Kim was awarded Employee of the Month for his ________ customer service performance.",
        options: ["outstanding", "outstand", "laundry", "capacity"],
        correct: "outstanding",
        explanations: {
            guide: "形容词作前置定语。修饰名词短语 customer service performance，表达“杰出的/卓越的”，选 outstanding。",
            family: "outstanding (adj.杰出的) | outstand (v.突出) | laundry (n.洗衣) | capacity (n.容量)。",
            details: "outstanding service/performance 属于托业员工表彰场景的核心固定表述。outstand 是动词形式。",
            cn: "金先生因其出色的客户服务表现而被授予“月度最佳员工”称号。",
            jp: "金氏は、その優れた（outstanding）顧客サービス実績により、今月の最優秀社員として表彰されました。"
        }
    },
    {
        id: 4,
        target: "implement",
        category: "简单",
        stem: "The human resources team plans to ________ a flexible work schedule starting next month.",
        options: ["implement", "implementation", "fund-raising", "aisle"],
        correct: "implement",
        explanations: {
            guide: "动词不定式结构。plans to 后面需要接动词原形，表达“实施/执行”弹性工作制度，选 implement。",
            family: "implement (v.实施) | implementation (n.实施) | fund-raising (n./adj.筹款) | aisle (n.过道)。",
            details: "plan to do sth 结构中，to 后面跟动词原形 implement。implementation 为名词，不能跟在不定式符号 to 后面作谓语动词。",
            cn: "人力资源团队计划从下个月开始实施弹性工作制。",
            jp: "人事チームは、来月からフレックスタイム制度を実施する（implement）ことを計画しています。"
        }
    },
    {
        id: 5,
        target: "publicity",
        category: "简单",
        stem: "The marketing agency launched an aggressive campaign to gain maximum ________ for the new product.",
        options: ["publicity", "publicize", "laundry", "auditorium"],
        correct: "publicity",
        explanations: {
            guide: "动词后的宾语名词。gain maximum ________ 结构中，形容词 maximum 后面需要接名词，表达获得最大限度的“宣传/知名度”，选 publicity。",
            family: "publicity (n.宣传/知名度) | publicize (v.宣传) | laundry (n.洗衣) | auditorium (n.礼堂)。",
            details: "gain publicity（获得宣传/关注）是公关营销场景的高频用语。publicize 为动词，不能接受形容词 maximum 的修饰。",
            cn: "营销机构发起了一项积极的宣传活动，以获得新产品的最大宣传效果。",
            jp: "マーケティング代理店は、新製品の最大級の宣伝（publicity）効果を得るために積極的なキャンペーンを開始しました。"
        }
    },
    {
        id: 6,
        target: "aisle",
        category: "简单",
        stem: "Passengers are requested to keep their personal belongings out of the main plane ________.",
        options: ["aisle", "auditorium", "productivity", "implement"],
        correct: "aisle",
        explanations: {
            guide: "场所名词辨析。plane ________ 指飞机的“过道/通道”，提醒乘客保持过道清空，选 aisle。",
            family: "aisle (n.过道) | auditorium (n.礼堂) | productivity (n.生产率) | implement (v.实施)。",
            details: "keep the aisle clear（保持过道畅通）是托业听力 Part 1 及客舱广播的高频考点。auditorium 是礼堂，与飞机客舱语境不符。",
            cn: "请乘客将个人物品放在飞机主过道之外。",
            jp: "乗客は、個人の所持品を飛行機のメイン通路（aisle）に置かないよう求められています。"
        }
    },
    {
        id: 7,
        target: "approximately",
        category: "中等",
        stem: "According to the preliminary report, the total cost of the project is ________ equal to original estimates.",
        options: ["approximately", "approximate", "productivity", "outstanding"],
        correct: "approximately",
        explanations: {
            guide: "副词修饰形容词。is ________ equal to 结构中，需要副词修饰形容词 equal，表达“大约等于”，选 approximately。",
            family: "approximately (adv.大约) | approximate (adj.大约的) | productivity (n.生产率) | outstanding (adj.杰出的)。",
            details: "approximately equal to 是商务分析中的高频句型。approximate 是形容词，不能用来修饰另一个形容词 equal。",
            cn: "根据初步报告，该项目的总成本大约等于最初的估计值。",
            jp: "予備報告書によると、プロジェクトの総コストは当初の見積もりとおよそ（approximately）等しいとのことです。"
        }
    },
    {
        id: 8,
        target: "aisle",
        category: "中等",
        stem: "When booking international flight tickets online, Mr. Vance always prefers an ________ seat over a window seat.",
        options: ["aisle", "auditorium", "capacity", "laundry"],
        correct: "aisle",
        explanations: {
            guide: "名词作前置定语与偏好考点。an ________ seat 属于出差预订场景，aisle seat 意为“靠过道的座位”，选 aisle。",
            family: "aisle (n.过道) | auditorium (n.礼堂) | capacity (n.容量) | laundry (n.洗衣店)。",
            details: "aisle seat（靠过道的座位）与 window seat（靠窗座位）是托业听力与阅读场景对立出现的高频词汇对。",
            cn: "在在线预订国际机票时，万斯先生总是更喜欢靠过道的座位，而不是靠窗的座位。",
            jp: "国際線の航空券をオンラインで予約する際、ヴァンス氏は常に窓側の席よりも通路（aisle）側の席を好みます。"
        }
    },
    {
        id: 9,
        target: "auditorium",
        category: "中等",
        stem: "The annual international technology conference will be held in the university's main ________.",
        options: ["auditorium", "publicity", "aisle", "implement"],
        correct: "auditorium",
        explanations: {
            guide: "场所地点名词。in the university's main ________ 中需要表示大型集会场所的名词，表达在大学的主“礼堂/大讲堂”内举行，选 auditorium。",
            family: "auditorium (n.大礼堂/讲堂) | publicity (n.宣传) | aisle (n.过道) | implement (v.实施)。",
            details: "hold a conference in the main auditorium 是学术与商务研讨会场景的核心搭配。",
            cn: "年度国际技术会议将在该大学的主礼堂内举行。",
            jp: "年次国際技術会議は、大学のメイン講堂（auditorium）で開催されます。"
        }
    },
    {
        id: 10,
        target: "publicity",
        category: "中等",
        stem: "The corporate communications manager is responsible for preparing press releases and handling negative ________.",
        options: ["publicity", "publicly", "capacity", "fund-raising"],
        correct: "publicity",
        explanations: {
            guide: "动词后的宾语名词。handling negative ________ 结构中，handling 后面需要接名词作宾语，negative publicity 指“负面宣传/不佳报道”。",
            family: "publicity (n.宣传/报道) | publicly (adv.公开地) | capacity (n.容量) | fund-raising (n.筹款)。",
            details: "negative publicity（负面公关/负面报道）是危机公关中的专属高频术语。publicly 是副词，不能充当动名词 handling 的宾语。",
            cn: "企业传播经理负责撰写新闻稿并处理负面报道。",
            jp: "広報マネージャーは、プレスリリースの作成と負の報道（publicity）への対応を担当しています。"
        }
    },
    {
        id: 11,
        target: "productivity",
        category: "中等",
        stem: "Working from home allows many employees to minimize daily office distractions and maintain high ________.",
        options: ["productivity", "productively", "approximately", "laundry"],
        correct: "productivity",
        explanations: {
            guide: "形容词后的名词宾语。maintain high ________ 结构中，形容词 high 后面需要接名词，表达保持高“生产率/工作效率”，选 productivity。",
            family: "productivity (n.生产力) | productively (adv.多产地) | approximately (adv.大约) | laundry (n.洗衣)。",
            details: "maintain high productivity（维持高效产出）属于职场管理高频搭配。productively 是副词，不能接在形容词 high 之后。",
            cn: "居家办公使许多员工能够减少日常办公室打扰，并保持高效的工作产出。",
            jp: "在宅勤務により、多くの従業員が日常のオフィスの気を散らすものを最小限に抑え、高い生産性（productivity）を維持することができます。"
        }
    },
    {
        id: 12,
        target: "capacity",
        category: "中等",
        stem: "Due to high demand, the manufacturing facility is currently operating at maximum ________.",
        options: ["capacity", "capacious", "outstanding", "implement"],
        correct: "capacity",
        explanations: {
            guide: "介词固定搭配与商业运营。at maximum ________ 属于固定表达，operating at maximum capacity 意为“以最大产能运行”。",
            family: "capacity (n.产能/容量) | capacious (adj.容量大的) | outstanding (adj.杰出的) | implement (v.实施)。",
            details: "operating at full/maximum capacity（满负荷运转）是托业工厂与制造生产场景最核心的固定搭配。",
            cn: "由于需求旺盛，该制造工厂目前正处于满负荷生产状态。",
            jp: "高い需要のため、製造施設は現在、最大能力（capacity）でフル稼働しています。"
        }
    },
    {
        id: 13,
        target: "outstanding",
        category: "困难",
        stem: "Clients are kindly requested to settle all ________ balances on their accounts before the end of the month.",
        options: ["outstanding", "outstand", "productivity", "capacity"],
        correct: "outstanding",
        explanations: {
            guide: "高阶双重词义考查。all ________ balances 中，outstanding 在此不表示“卓越”，而是表示财务场景中的“未支付的/未结清的”，选 outstanding。",
            family: "outstanding (adj.未结清的/杰出的) | outstand (v.突出) | productivity (n.生产力) | capacity (n.容量)。",
            details: "outstanding balance（未结欠款）与 outstanding invoice（未付账单）是托业财务结算场景中最常考的高阶难点含义。",
            cn: "请客户在本月底之前结清账户上的所有未付欠款。",
            jp: "お客様は、今月末までに口座のすべての未払い（outstanding）残高を決済するようお願い申し上げます。"
        }
    },
    {
        id: 14,
        target: "implement",
        category: "困难",
        stem: "Successful ________ of the strategic restructuring plan will require close cooperation between all regional offices.",
        options: ["implementation", "implement", "publicity", "approximately"],
        correct: "implementation",
        explanations: {
            guide: "主语中心词与名词衍生。Successful ________ of... 位于句首充当主语，形容词 Successful 后面必须接名词形式 implementation（实施/贯彻）。",
            family: "implementation (n.实施) | implement (v.实施) | publicity (n.宣传) | approximately (adv.大约)。",
            details: "Successful implementation of the plan（计划的成功实施）是 Part 5 常见的词性转换难点。implement 是动词，不能直接放在形容词后作主语中心词。",
            cn: "战略重组计划的成功实施将需要所有区域办事处之间的密切合作。",
            jp: "戦略的再編計画の成功裏の実施（implementation）には、すべての地域オフィス間の緊密な協力が必要となります。"
        }
    },
    {
        id: 15,
        target: "laundry",
        category: "困难",
        stem: "The luxury resort charges an additional fee for its overnight express ________ service for corporate guests.",
        options: ["laundry", "auditorium", "fund-raising", "capacity"],
        correct: "laundry",
        explanations: {
            guide: "酒店服务复合名词。express ________ service 指酒店提供的“隔夜快速洗衣服务”，选 laundry。",
            family: "laundry (n.洗衣/衣物) | auditorium (n.礼堂) | fund-raising (n.筹款) | capacity (n.容量)。",
            details: "express laundry service 是酒店与商务差旅场景下的专属用语。其他选项与清洁服饰的服务语境不配。",
            cn: "该奢华度假村对其为商务客人提供的隔夜快速洗衣服务收取额外费用。",
            jp: "その高級リゾートは、ビジネス客向けの夜間特急クリーニング（laundry）サービスに対して追加料金を請求します。"
        }
    },
    {
        id: 16,
        target: "capacity",
        category: "困难",
        stem: "Dr. Arisawa agreed to serve on the advisory board in his ________ as a senior consultant for sustainable energy.",
        options: ["capacity", "capacious", "implement", "outstanding"],
        correct: "capacity",
        explanations: {
            guide: "抽象高阶含义与固定介词搭配。in one's capacity as... 是托业阅读极高频的商务句型，意为“以……的身份/职责”，选 capacity。",
            family: "capacity (n.身份/职责/能力) | capacious (adj.宽敞的) | implement (v.实施) | outstanding (adj.杰出的)。",
            details: "in his capacity as a consultant 意为“作为顾问/以顾问的身份”。此处 capacity 不是指“容量”，而是指“法律/职能上的身份与职责”。",
            cn: "有泽博士同意以可持续能源高级顾问的身份加入顾问委员会。",
            jp: "有沢博士は、持続可能エネルギーの上級コンサルタントとしての立場（capacity）で諮問委員会に参加することに同意しました。"
        }
    },
    {
        id: 17,
        target: "auditorium",
        category: "困难",
        stem: "Because the main ________ reached full occupancy, late arrivals were redirected to an overflow room with live video feed.",
        options: ["auditorium", "aisle", "productivity", "publicity"],
        correct: "auditorium",
        explanations: {
            guide: "语篇逻辑与空间容量考点。reached full occupancy（达到满员状态）且迟到者被引导至分流房间（overflow room），说明主语是一个大型场地“大礼堂”，选 auditorium。",
            family: "auditorium (n.大礼堂) | aisle (n.过道) | productivity (n.生产力) | publicity (n.宣传)。",
            details: "main auditorium reached full occupancy 描述了大会场坐满的情形。aisle 是过道，过道不能表达坐满观众的场地概念。",
            cn: "由于主礼堂已座无虚席，迟到者被引导至配有现场视频直播的溢流休息室。",
            jp: "メイン講堂（auditorium）が満席になったため、遅れて到着した人はライブ映像が配信される別室へ案内されました。"
        }
    },
    {
        id: 18,
        target: "fund-raising",
        category: "困难",
        stem: "The non-profit foundation hosted a successful annual ________ gala that raised over two million dollars for cancer research.",
        options: ["fund-raising", "productivity", "outstanding", "laundry"],
        correct: "fund-raising",
        explanations: {
            guide: "复合形容词修饰名词。annual ________ gala 指“年度筹款晚会/募捐晚宴”，结合 raised over two million dollars（筹集了 200 多万美元），选 fund-raising。",
            family: "fund-raising (adj./n.筹款的/筹款) | productivity (n.生产率) | outstanding (adj.杰出的) | laundry (n.洗衣)。",
            details: "fund-raising gala / fund-raising event（筹款晚会/活动）是托业非营利组织与社会慈善场景的高频考点。",
            cn: "该非营利基金会举办了一场成功的年度筹款晚会，为癌症研究筹集了超过 200 万美元。",
            jp: "その非営利財団は成功裏に年次資金調達（fund-raising）ガラを開催し、がん研究のために200万ドル以上を集めました。"
        }
    }
];