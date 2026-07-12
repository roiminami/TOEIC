// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag51-60.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "arrange",
        pos: "動",
        ipa: "/əˈreɪndʒ/",
        cn: "安排，筹备；整理",
        jp: "手配する、配置する、整える",
        family: "arrangement / arranged / arranger",
        tips: "托业高频行政动词。常考短语 arrange a meeting（安排会议）或 arrange for someone to do something（安排某人做某事）。名词形式 arrangement 也经常以复数形式 make arrangements（做出安排）出现[cite: 1]。",
        desc: "I will arrange the meeting."
    },
    {
        word: "reduce",
        pos: "動",
        ipa: "/rɪˈduːs/",
        cn: "减少，降低，缩小",
        jp: "減らす、削減する、下げる",
        family: "reduction / reduced / reducible",
        tips: "商务财务及运营场景核心词。常考搭配 reduce costs（降低成本）、reduce prices（降价）。名词形式 reduction 也是阅读和听力的常客，如 cost reduction（成本削减）[cite: 1]。",
        desc: "We must reduce costs."
    },
    {
        word: "replace",
        pos: "動",
        ipa: "/rɪˈpleɪs/",
        cn: "更替，取代，更换",
        jp: "～に取って代わる、交換する",
        family: "replacement / replaceable / replaced",
        tips: "办公设备维护及人事变动高频词。常用句型 replace A with B（用B替换A）。名词形式 replacement 既可以指“替代品”，也可以指“接替者（人）”[cite: 1]。",
        desc: "Replace the old battery."
    },
    {
        word: "register",
        pos: "動/名",
        ipa: "/ˈredʒɪstər/",
        cn: "注册，登记，报名；登记簿",
        jp: "登録する、記録する；登録簿",
        family: "registration / registered / registry",
        tips: "活动筹备或系统交互核心词。常考动词短语 register for a conference/seminar（报名参加会议/研讨会），相当于 sign up for[cite: 1]。名词形式 registration 常出现在 registration form（报名表）中[cite: 1]。",
        desc: "Please register online now."
    },
    {
        word: "focus",
        pos: "動/名",
        ipa: "/ˈfoʊkəs/",
        cn: "集中，聚焦；焦点，核心",
        jp: "集中させる、焦点を合わせる；焦点",
        family: "focused / focusable / focusing",
        tips: "常考动词短语 focus on...（专注于……），在阅读中常与 concentrate on 或 emphasize 相互进行同义替换[cite: 1]。其分词形容词形式 focused 意为“专心致志的、目标明确的”[cite: 1]。",
        desc: "We need to focus on this."
    },
    {
        word: "proposal",
        pos: "名",
        ipa: "/prəˈpoʊzl/",
        cn: "提案，建议，计划书",
        jp: "提案、企画書、発案",
        family: "propose / proposed / proposition",
        tips: "商务谈判及项目审批核心名词。是由动词 propose（提议）派生出的名词形式[cite: 1]。常见短语有 submit a proposal（提交提案）、approve a proposal（批准提案）[cite: 1]。",
        desc: "The proposal is approved."
    },
    {
        word: "introduce",
        pos: "動",
        ipa: "/ˌɪntrəˈduːs/",
        cn: "介绍，引进，推出",
        jp: "紹介する、導入する、取り入れる",
        family: "introduction / introductory / introduced",
        tips: "产品发布或新员工入职场景核心词。可指 introduce a new product（推出新产品）或 introduce a new colleague（介绍新同事）[cite: 1]。其形容词形式 introductory 常考 introductory price（体验价/首发特惠价）[cite: 1]。",
        desc: "Let me introduce myself."
    },
    {
        word: "prefer",
        pos: "動",
        ipa: "/prɪˈfɜːr/",
        cn: "更喜欢，宁愿",
        jp: "～を好む、～の方を選ぶ",
        family: "preference / preferable / preferably / preferred",
        tips: "常考经典句型 prefer A to B（比起B更喜欢A，注意介词用to而非than）[cite: 1]。派生名词 preference 常见于 meal preference（饮食偏好），副词 preferably 意为“最好是……”。",
        desc: "I prefer tea to coffee."
    },
    {
        word: "promote",
        pos: "動",
        ipa: "/prəˈmoʊt/",
        cn: "晋升，升职；促销，宣传，推动",
        jp: "昇進させる；促進する、宣伝する",
        family: "promotion / promotional / promoter",
        tips: "双重核心词义。在人事场景中指 be promoted to manager（被晋升为经理）；在市场营销场景中指 promote a new line of cosmetics（促销一系列新化妆品）[cite: 1]。",
        desc: "They promote the new product."
    },
    {
        word: "opportunity",
        pos: "名",
        ipa: "/ˌɑːpərˈtuːnəti/",
        cn: "机会，时机",
        jp: "機会、チャンス",
        family: "opportunities / opportune / opportunist",
        tips: "职场及发展前景核心高频名词。常考句型 have an opportunity to do something（有机会去做某事）[cite: 1]。在商务信函结尾，常用于表达感谢：thank you for this business opportunity[cite: 1]。",
        desc: "It is a great opportunity."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "arrange",
        category: "简单",
        stem: "The executive assistant will ________ a shuttle bus for the visiting clients tomorrow morning.",
        options: ["arrange", "reduce", "replace", "register"],
        correct: "arrange",
        explanations: {
            guide: "情态动词后的动词原形辨析[cite: 1]。will 后面需要接动词原形作为谓语，结合宾语 a shuttle bus（班车）和语境，选择 arrange（安排）[cite: 1]。",
            family: "arrange (v.安排) | reduce (v.减少) | replace (v.更换) | register (v.注册/登记)[cite: 1]。",
            details: "arrange a shuttle bus 意为安排接送班车，符合助理为客户提供后勤服务的商务场景[cite: 1]。其他动词与班车搭配语意不通[cite: 1]。",
            cn: "行政助理明天上午将为到访的客户安排一辆接送班车。",
            jp: "役員秘書は明日午前、訪問客のためにシャトルバスを手配（arrange）する予定です[cite: 1]。"
        }
    },
    {
        id: 2,
        target: "reduce",
        category: "简单",
        stem: "The factory upgraded its production machinery to ________ energy consumption by fifteen percent.",
        options: ["reduce", "promote", "focus", "introduce"],
        correct: "reduce",
        explanations: {
            guide: "不定式符号后的核心动词辨析[cite: 1]。to 后面需要接动词原形表目的，根据宾语 energy consumption（能源消耗），选 reduce（减少/降低）[cite: 1]。",
            family: "reduce (v.减少) | promote (v.促销/晋升) | focus (v.聚焦) | introduce (v.引进)[cite: 1]。",
            details: "reduce energy consumption 属于工业和环保运营场景的常见搭配，指降低能源消耗[cite: 1]。其余选项均无法与能耗构成合理的商业逻辑[cite: 1]。",
            cn: "该工厂升级了生产机械，以降低15%的能源消耗。",
            jp: "工場は生産機械をアップグレードし、エネルギー消費量を15%削減（reduce）しました[cite: 1]。"
        }
    },
    {
        id: 3,
        target: "replace",
        category: "简单",
        stem: "The IT department plans to ________ all old monitors with modern flat-screen displays next week.",
        options: ["replace", "arrange", "prefer", "register"],
        correct: "replace",
        explanations: {
            guide: "高频动词固定短语搭配[cite: 1]。空格处需填入一个动词，能与后面的介词 with 联用并符合办公设备更新的场景，选 replace[cite: 1]。",
            family: "replace (v.更换/取代) | arrange (v.安排) | prefer (v.更喜欢) | register (v.登记)[cite: 1]。",
            details: "replace A with B 是托业高频句型，意为“用B替换A”[cite: 1]。IT部门用新显示器替换老显示器完全符合办公升级语境[cite: 1]。",
            cn: "IT部门计划下周用现代平板显示器更换所有旧显示器。",
            jp: "IT部門は来週、すべての古いモニターを最新のフラットスクリーンディスプレイに交換（replace）する計画です[cite: 1]。"
        }
    },
    {
        id: 4,
        target: "register",
        category: "简单",
        stem: "All participants must ________ for the annual marketing conference before the Friday deadline.",
        options: ["register", "proposal", "reduce", "promote"],
        correct: "register",
        explanations: {
            guide: "情态动词后的不及物动词用法[cite: 1]。must 后面需要接动词原形，且该动词能与介词 for 搭配表示“报名”，选 register[cite: 1]。",
            family: "register (v.注册/报名) | proposal (n.提案) | reduce (v.减少) | promote (v.促销)[cite: 1]。",
            details: "register for a conference 是固定搭配，意为报名参加会议[cite: 1]。proposal 为名词，不能接在 must 后面[cite: 1]；reduce 和 promote 是及物动词[cite: 1]。",
            cn: "所有参与者必须在周五截止日期前报名参加年度营销大会。",
            jp: "すべての参加者は、金曜日の締め切り前に年次マーケティング会議に登録（register）しなければなりません[cite: 1]。"
        }
    },
    {
        id: 5,
        target: "focus",
        category: "简单",
        stem: "During today's seminar, the keynote speaker will ________ on the benefits of global market expansion.",
        options: ["focus", "replace", "introduce", "arrange"],
        correct: "focus",
        explanations: {
            guide: "动词与介词的固定搭配辨析[cite: 1]。空格后出现了介词 on，要求填入一个能与其构成固定词组的动词，选 focus[cite: 1]。",
            family: "focus (v.聚焦/专注) | replace (v.更换) | introduce (v.介绍) | arrange (v.安排)[cite: 1]。",
            details: "focus on 是托业的核心搭配，表示“专注于……、将焦点放在……”[cite: 1]。replace、introduce、arrange 均为及物动词，后应直接接宾语[cite: 1]。",
            cn: "在今天的研讨会上，主旨演讲者将专注于全球市场扩张带来的好处。",
            jp: "本日のセミナー中、基調講演者はグローバル市場拡大のメリットに焦点を当てて（focus）話す予定です[cite: 1]。"
        }
    },
    {
        id: 6,
        target: "proposal",
        category: "简单",
        stem: "The board of directors reviewed the financial ________ and voted to fund the new research project.",
        options: ["proposal", "opportunity", "reduce", "register"],
        correct: "proposal",
        explanations: {
            guide: "形容词后的名词中心语[cite: 1]。the financial（财务的）后面缺少一个名词作 reviewed 的宾语，结合后文投票拨款的语境，选 proposal（提案/计划书）[cite: 1]。",
            family: "proposal (n.提案) | opportunity (n.机会) | reduce (v.减少) | register (v./n.登记)[cite: 1]。",
            details: "financial proposal 意为“财务提案/计划书”[cite: 1]。董事会审阅财务提案并决定出资，符合商务决策链条[cite: 1]。reduce 和 register（常用作动词）不符[cite: 1]。",
            cn: "董事会审阅了财务提案，并投票决定资助这个新的研究项目。",
            jp: "取締役会は財務提案（proposal）を審査し、新しい研究プロジェクトへの資金提供を決議しました[cite: 1]。"
        }
    },
    {
        id: 7,
        target: "introduce",
        category: "中等",
        stem: "The marketing team is offering an ________ rate to customers who sign up for the service this month.",
        options: ["introductory", "introduce", "introduction", "introduced"],
        correct: "introductory",
        explanations: {
            guide: "名词前的形容词修饰语[cite: 1]。空格位于不定冠词 an 和名词 rate（价格）之间，需要填入形容词修饰名词，选 introductory[cite: 1]。",
            family: "introductory (adj.介绍性的/首发的) | introduce (v.引进) | introduction (n.介绍) | introduced (v-ed引进)[cite: 1]。.js",
            details: "introductory rate/price 是市场营销场景的标志性搭配[cite: 1]，意为“体验价、首发特惠价”，用来吸引新用户签约[cite: 1]。",
            cn: "营销团队正为本月签约该服务的客户提供一个体验特惠价。",
            jp: "マーケティングチームは、今月このサービスに申し込む顧客に対して、お試し（introductory）料金を提供しています[cite: 1]。"
        }
    },
    {
        id: 8,
        target: "prefer",
        category: "中等",
        stem: "Please state your dietary ________ on the registration form so we can accommodate your catering needs.",
        options: ["preference", "prefer", "preferable", "preferably"],
        correct: "preference",
        explanations: {
            guide: "形容词性物主代词后的名词成分[cite: 1]。your（你的）后面需要填入名词作 state 的宾语，结合饮食（dietary）场景，选 preference[cite: 1]。",
            family: "preference (n.偏好) | prefer (v.更喜欢) | preferable (adj.更可取的) | preferably (adv.最好是)[cite: 1]。",
            details: "dietary preference 属于商务会议及宴会预订场景的高频词组，意为“饮食偏好”（如素食、忌口等）[cite: 1]。其余选项词性不符[cite: 1]。",
            cn: "请在报名表上注明您的饮食偏好，以便我们满足您的餐饮需求。",
            jp: "ケータリングの要望に対応できるよう、登録用紙に食性の好み（preference）をご記入ください[cite: 1]。"
        }
    },
    {
        id: 9,
        target: "promote",
        category: "中等",
        stem: "Ms. Chang received a ________ to senior project manager after successfully launching the software.",
        options: ["promotion", "promote", "promotional", "promoted"],
        correct: "promotion",
        explanations: {
            guide: "不定冠词后的名词成分[cite: 1]。空格前有 a，后有介词短语 to senior project manager，提示此处需填入一个表示职位的可数名词单数，选 promotion[cite: 1]。",
            family: "promotion (n.晋升/促销) | promote (v.晋升) | promotional (adj.促销的) | promoted (v-ed被晋升)[cite: 1]。",
            details: "receive a promotion 意为“获得晋升”，是职场人事变动场景的绝对核心表达[cite: 1]。其余选项分别为动词、形容词或分词[cite: 1]。",
            cn: "在成功发布该软件后，张女士获得了晋升，成为高级项目经理。",
            jp: "張さんはソフトウェアの立ち上げに成功した後、シニアプロジェクトマネージャーへの昇進（promotion）を果たしました[cite: 1]。"
        }
    },
    {
        id: 10,
        target: "opportunity",
        category: "中等",
        stem: "Working overseas provides employees with an excellent ________ to learn about diverse business cultures.",
        options: ["opportunity", "proposal", "arrangement", "reduction"],
        correct: "opportunity",
        explanations: {
            guide: "名词语义辨析与后置不定式搭配[cite: 1]。空格后带有动词不定式短语 to learn... 作定语，结合海外工作背景，选 opportunity[cite: 1]。",
            family: "opportunity (n.机会) | proposal (n.提案) | arrangement (n.安排) | reduction (n.减少)[cite: 1]。",
            details: "have/provide an opportunity to do something 是固定句型，表示“提供做某事的机会”[cite: 1]。虽然其他词也是名词，但无法与后文构成通顺的逻辑链[cite: 1]。",
            cn: "在海外工作为员工提供了一个了解多元商业文化的绝佳机会。",
            jp: "海外で働くことは、従業員にとって多様なビジネス文化を学ぶ優れた機会（opportunity）となります[cite: 1]。"
        }
    },
    {
        id: 11,
        target: "arrange",
        category: "中等",
        stem: "The hotel staff made a special seating ________ for our corporate banquet last night.",
        options: ["arrangement", "arrange", "arranged", "arranger"],
        correct: "arrangement",
        explanations: {
            guide: "复合名词定语修饰语[cite: 1]。空格位于形容词 special 和名词定语 seating 后面，需要填入名词充当句子的核心宾语，选 arrangement[cite: 1]。",
            family: "arrangement (n.安排) | arrange (v.安排) | arranged (v-ed已安排) | arranger (n.筹办者)[cite: 1]。",
            details: "make a seating arrangement 意为“做出座位安排”[cite: 1]，是会务及餐饮活动场景下的标准商务搭配[cite: 1]。其他选项无法与 make 构成合理谓宾[cite: 1]。",
            cn: "酒店工作人员昨晚为我们的企业宴会做出了特殊的座位安排。",
            jp: "ホテルのスタッフは昨夜、私たちの企業宴会のために特別な座席配置（arrangement）をしてくれました[cite: 1]。"
        }
    },
    {
        id: 12,
        target: "reduce",
        category: "中等",
        stem: "The sudden ________ in corporate travel expenses helped the firm stay within its annual budget.",
        options: ["reduction", "reduce", "reduced", "reducible"],
        correct: "reduction",
        explanations: {
            guide: "定冠词和形容词后的主语名词[cite: 1]。The sudden 后面缺少一个名词作为整句话的主语，结合后文“差旅费下降帮助公司维持预算”的逻辑，选 reduction[cite: 1]。",
            family: "reduction (n.减少/削减) | reduce (v.减少) | reduced (adj.减少的) | reducible (adj.可约简的)[cite: 1]。",
            details: "reduction in expenses 意为“费用的减少”[cite: 1]，在财务报表汇报和企业成本控制语境中非常普遍。reduce 为动词，不能作主语[cite: 1]。",
            cn: "企业差旅费用的突然减少帮助该公司将支出控制在了年度预算之内。",
            jp: "出張費の突然の削減（reduction）により、同社は年間予算内に収めることができました[cite: 1]。"
        }
    },
    {
        id: 13,
        target: "replace",
        category: "困难",
        stem: "The company is currently interviewing several qualified candidates to find a ________ for the retiring CFO.",
        options: ["replacement", "replace", "replaceable", "replaced"],
        correct: "replacement",
        explanations: {
            guide: "不定冠词后的名词及特定语义考核[cite: 1]。空格前有 a，后有介词短语 for the retiring CFO，此处必须填入一个指代“接替者”的名词，选 replacement[cite: 1]。",
            family: "replacement (n.替代者/替代品) | replace (v.更换) | replaceable (adj.可替换的) | replaced (v-ed被替换)[cite: 1]。",
            details: "replacement 在托业人事场景中常考其特殊含义，即“接替某人职位的新员工”[cite: 1]。find a replacement for someone 属于高级职场招募短语[cite: 1]。",
            cn: "公司目前正在面试几位合格的候选人，以便为即将退休的首席财务官寻找一位接替者。",
            jp: "会社は現在、退職するCFOの交替要員（replacement）を見つけるため、複数の有能な候補者を面接しています[cite: 1]。"
        }
    },
    {
        id: 14,
        target: "register",
        category: "困难",
        stem: "The online ________ system will be temporarily offline this weekend for scheduled database maintenance.",
        options: ["registration", "register", "registered", "registry"],
        correct: "registration",
        explanations: {
            guide: "名词修饰名词的复合结构[cite: 1]。空格与 online 一起修饰后面的核心名词 system（系统），需要填入功能属性名词，选 registration[cite: 1]。",
            family: "registration (n.注册/登记) | register (v./n.注册/登记簿) | registered (adj.已注册的) | registry (n.登记处)[cite: 1]。",
            details: "online registration system 意为“在线注册系统/在线报名系统”[cite: 1]，是典型的托业IT与活动技术组合词。registry 多指婚姻或船舶登记处，语意不合[cite: 1]。",
            cn: "由于计划内的数据库维护，在线注册系统本周末将暂时离线。",
            jp: "定期的なデータベースメンテナンスのため、オンライン登録（registration）システムは今週末、一時的にオフラインになります[cite: 1]。"
        }
    },
    {
        id: 15,
        target: "focus",
        category: "困难",
        stem: "Thanks to a highly ________ marketing campaign, the tech startup doubled its online sales within three months.",
        options: ["focused", "focus", "focusing", "focusable"],
        correct: "focused",
        explanations: {
            guide: "副词修饰下的过去分词作定语[cite: 1]。空格被程度副词 highly（高度地）修饰，并共同修饰名词短语 marketing campaign，需填入具有被动/状态意义的形容词，选 focused[cite: 1]。",
            family: "focused (adj.有针对性的/集中的) | focus (v./n.聚焦) | focusing (part.聚焦中) | focusable (adj.可聚焦的)[cite: 1]。",
            details: "a highly focused marketing campaign 意为“一个针对性极强的营销活动”[cite: 1]，侧重资源和目标的高度集中。focus 为动词原形，无法被副词修饰去修饰名词[cite: 1]。",
            cn: "得益于一个针对性极强的营销活动，这家科技初创公司在三个月内将线上销售额翻了一番。",
            jp: "ターゲットを非常に絞った（focused）マーケティングキャンペーンのおかげで、そのITスタートアップは3ヶ月以内にオンライン売上を2倍にしました[cite: 1]。"
        }
    },
    {
        id: 16,
        target: "proposal",
        category: "困难",
        stem: "Under the ________ budget guidelines, department heads must cut discretionary spending by ten percent.",
        options: ["proposed", "proposal", "propose", "proposition"],
        correct: "proposed",
        explanations: {
            guide: "定冠词与名词之间的过去分词修饰语[cite: 1]。空格位于 the 和名词短语 budget guidelines 之间，需要填入一个过去分词作前置定语表被动，选 proposed[cite: 1]。",
            family: "proposed (adj.被提议的/拟议的) | proposal (n.提案) | propose (v.提议) | proposition (n.主张/见解)[cite: 1]。",
            details: "the proposed budget guidelines 意为“拟议的预算指导方针”[cite: 1]，即指已经被提出来但尚未最终通过的预算。proposal 是名词，不能在定冠词后直接修饰另一个名词短语[cite: 1]。",
            cn: "根据拟议的预算指导方针，部门主管必须将可支配支出削减10%。",
            jp: "提案された（proposed）予算ガイドラインの下では、部門長は裁量的支出を10%削減しなければなりません[cite: 1]。"
        }
    },
    {
        id: 17,
        target: "prefer",
        category: "困难",
        stem: "Candidates applying for the design position should have three years of experience, ________ in corporate branding.",
        options: ["preferably", "preference", "prefer", "preferable"],
        correct: "preferably",
        explanations: {
            guide: "独立插入语中的副词用法[cite: 1]。空格位于逗号之后，修饰整个介词短语 in corporate branding，补充说明理想的限制条件，需要填入副词，选 preferably[cite: 1]。",
            family: "preferably (adv.最好是/更适宜地) | preference (n.偏好) | prefer (v.更喜欢) | preferable (adj.更可取的)[cite: 1]。",
            details: "preferably in... 是商务招聘要求中的高阶行话，意为“（有某经验），最好是在……领域”[cite: 1]。preferable 是形容词，不能单独作此类修饰[cite: 1]。",
            cn: "应聘该设计职位的应聘者应具备三年经验，最好是在企业品牌设计方面。",
            jp: "デザイン職に応募する候補者は3年の経験が必要であり、企業ブランディングの分野が望ましい（preferably）とされています[cite: 1]。"
        }
    },
    {
        id: 18,
        target: "promote",
        category: "困难",
        stem: "The retail chain distributed ________ flyers to local residents to attract more foot traffic to the new store.",
        options: ["promotional", "promote", "promotion", "promoted"],
        correct: "promotional",
        explanations: {
            guide: "名词前的专属形容词修饰[cite: 1]。空格修饰复数名词 flyers（传单），需要填入一个形容词表明传单的特定商业用途，选 promotional[cite: 1]。",
            family: "promotional (adj.促销的/宣传的) | promote (v.促销) | promotion (n.促销/晋升) | promoted (v-ed被宣传的)[cite: 1]。",
            details: "promotional flyers 意为“促销传单/宣传海报”[cite: 1]，是典型的零售和市场营销场景核心术语。虽然 promotion 也是名词，但在有专属形容词 promotional 时不作优先考虑[cite: 1]。",
            cn: "该零售连锁店向当地居民分发了促销传单，以吸引更多客流量前往新门店。",
            jp: "小売チェーンは新店舗への来客数を増やすため、地域住民に販促用（promotional）チラシを配布しました[cite: 1]。"
        }
    }
];