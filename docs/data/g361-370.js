// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag281-290.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "valuable",
        pos: "形",
        ipa: "/ˈvæljuəbl/",
        cn: "宝贵的，有价值的，贵重的",
        jp: "貴重な、価値のある",
        family: "value / valuably / valuation / invaluable",
        tips: "资产评估、咨询建议与市场调研高频形容词。常考搭配 valuable advice（宝贵的建议）、valuable assets（贵重资产）。注意其派生词 invaluable 意为“极宝贵的/无价的”，而非否定。",
        desc: "This data is valuable."
    },
    {
        word: "extremely",
        pos: "副",
        ipa: "/ɪkˈstriːmli/",
        cn: "极其，极端地，非常",
        jp: "非常に、極端に",
        family: "extreme / extremism / extremity",
        tips: "高频程度副词。在语法与阅读中常用来修饰形容词或过去分词，如 extremely efficient（极其高效）、extremely difficult（极其困难），用于强调超出常规的程度。",
        desc: "It is extremely hot."
    },
    {
        word: "soil",
        pos: "名/動",
        ipa: "/sɔɪl/",
        cn: "土壤，土地；弄脏",
        jp: "土壌、土地；汚す",
        family: "soils / soiled / soiling",
        tips: "园林绿化、农业开发与环境工程高频词。常考搭配 soil quality（土壤质量）、soil erosion（土壤侵蚀）。在写字楼物业翻修或绿化外包场景中经常作为核心名词出现。",
        desc: "The soil is fertile."
    },
    {
        word: "relatively",
        pos: "副",
        ipa: "/ˈrelətɪvli/",
        cn: "相对地，比较地",
        jp: "相对的に、比較的",
        family: "relative / relation / relativity",
        tips: "数据对比与业绩评估高频副词。常用于修饰形容词或副词，构成温和的对比，如 relatively small investment（相对较小的投资）、relatively short period（相对较短的时间）。",
        desc: "The cost is relatively low."
    },
    {
        word: "appeal",
        pos: "動/名",
        ipa: "/əˈpiːl/",
        cn: "吸引，呼吁，上诉；吸引力",
        jp: "魅力、訴え；引きつける、アピールする",
        family: "appealing / appealed / appeals",
        tips: "市场营销、产品设计与公关宣传核心词。作动词时极其常考的固定搭配为 appeal to...（对……有吸引力/向……呼吁）。其形容词形式 appealing 意为“有吸引力的”。",
        desc: "The idea appeals to me."
    },
    {
        word: "eager",
        pos: "形",
        ipa: "/ˈiːɡər/",
        cn: "渴望的，热切的",
        jp: "热心な、しきりに〜したがっている",
        family: "eagerly / eagerness",
        tips: "日常团队协作、求职招聘与员工发展高频形容词。最核心的句型为 be eager to do something（渴望做某事）。其副词形式 eagerly 常常修饰 anticipate（热切期待）。",
        desc: "He is eager to learn."
    },
    {
        word: "storm",
        pos: "名/動",
        ipa: "/stɔːrm/",
        cn: "暴风雨，风暴；猛攻",
        jp: "岚、暴風雨；激怒する",
        family: "storms / stormy / stormed / storming",
        tips: "天气突变与后勤危机管理核心词。经常在听力与阅读的日程变更场景中作为干扰起因出现，如 delayed by the storm（受暴风雨耽搁）。形容词形式 stormy 意为“暴风雨般的”。",
        desc: "A storm is coming."
    },
    {
        word: "lack",
        pos: "名/動",
        ipa: "/læk/",
        cn: "缺乏，不足",
        jp: "不足、欠乏；〜を欠いている",
        family: "lacking / lacked / lacks",
        tips: "项目障碍分析与供应链短缺高频词。作名词时常考 a lack of...（缺乏……）。作动词时是及物动词，直接接宾语。高阶短语 be lacking in... 意为“在……方面有所匮乏”。",
        desc: "They lack experience."
    },
    {
        word: "essential",
        pos: "形/名",
        ipa: "/ɪˈsenʃl/",
        cn: "必不可少的，核心的，本质的；要素",
        jp: "不可欠な、本質的な；本質的要素",
        family: "essentially / essentiality / essentials",
        tips: "项目管理、战略评估与核心条款形容词。高频句式为 it is essential that...（重要的是……，注意从句常用动词原形虚拟语气）。常与 necessary 或 crucial 互换。",
        desc: "Water is essential."
    },
    {
        word: "reflect",
        pos: "動",
        ipa: "/rɪˈflekt/",
        cn: "反映，映射，显示；深思",
        jp: "反映する、反射する、熟考する",
        family: "reflection / reflective / reflected",
        tips: "财务季度总结与市场趋势描述核心动词。在托业阅读中极高频句式为 accurately reflect the market trend（准确反映市场趋势）。其名词形式 reflection 意为“反映/倒影”。",
        desc: "Mirrors reflect light."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "valuable",
        category: "简单",
        stem: "The senior consultant provided ________ advice on how to optimize our corporate structure during the meeting.",
        options: ["valuable", "soil", "storm", "office"],
        correct: "valuable",
        explanations: {
            guide: "修饰中心名词的形容词语义辨析。空格前有形容词 senior（高级的），后有名词 advice（建议），需填入合适的形容词作定语。",
            family: "valuable (adj.宝贵的) | soil (n.土壤) | storm (n.暴风雨) | office (n.办公室)。",
            details: "valuable advice 意为“宝贵的建议”，是商业咨询、日常行政会议中的经典正面修饰搭配。其余干扰项词性或语意完全不通。",
            cn: "高级顾问在会议期间就如何优化我们的公司架构提供了宝贵的建议。",
            jp: "シニアコンサルタントは会議中、当社の組織構造を最適化する方法について貴重な（valuable）助言を提供しました。"
        }
    },
    {
        id: 2,
        target: "extremely",
        category: "简单",
        stem: "The new automated scheduling software turned out to be ________ efficient for the administrative team.",
        options: ["extremely", "eager", "lack", "weekend"],
        correct: "extremely",
        explanations: {
            guide: "修饰形容词的程度副词位置判定。空格后为形容词 efficient（高效的），此处需填入副词作状语以修饰该形容词。",
            family: "extremely (adv.极其/非常) | eager (adj.渴望的) | lack (n./v.缺乏) | weekend (n.周末)。",
            details: "extremely efficient 意为“极其高效的”，副词用来修饰形容词，体现办公软件更新后带来的巨大效率提升。其余选项词性不符。",
            cn: "事实证明，这款新型自动排程软件对行政团队来说极其高效。",
            jp: "新しい自動スケジューリングソフトウェアは、管理チームにとって非常に（extremely）効率的であることが分かりました。"
        }
    },
    {
        id: 3,
        target: "soil",
        category: "简单",
        stem: "The landscaping crew tested the local ________ quality before planting the new trees around the campus.",
        options: ["soil", "appeal", "reflect", "purchase"],
        correct: "soil",
        explanations: {
            guide: "复合名词定语词义辨析。空格后有名词 quality（质量），且前文有绿化团队（landscaping crew）和植树的动作，需填入对应的名词作定语。",
            family: "soil (n.土壤) | appeal (v./n.吸引) | reflect (v.反映) | purchase (v./n.购买)。",
            details: "soil quality 意为“土壤质量”，符合园林绿化工程前置检测的常规商业场景逻辑。其他干扰项无法与质量构成合理的行业专有名词。",
            cn: "绿化团队在园区周围种植新树木之前，测试了当地的土壤质量。",
            jp: "造園チームは、敷地内に新しい木を植える前に、地元の土壌（soil）の質を検査しました。"
        }
    },
    {
        id: 4,
        target: "relatively",
        category: "简单",
        stem: "Despite the complex guidelines, the database upgrade was completed in a ________ short period.",
        options: ["relatively", "valuable", "essential", "closed"],
        correct: "relatively",
        explanations: {
            guide: "修饰形容词的程度副词辨析。空格位于不定冠词 a 和形容词 short 之间，需填入副词来修饰形容词 short（短暂的）。",
            family: "relatively (adv.相对地) | valuable (adj.宝贵的) | essential (adj.必不可少的) | closed (adj.关闭的)。",
            details: "relatively short period 意为“相对较短的一段时间”，用于描述尽管指南复杂，系统升级却完成得较快。其余选项为形容词，在此处语法结构不成立。",
            cn: "尽管指南很复杂，但数据库升级在相对较短的时间内就完成了。",
            jp: "複雑なガイドラインにもかかわらず、データベースのアップグレードは比較的（relatively）短い期間で完了しました。"
        }
    },
    {
        id: 5,
        target: "appeal",
        category: "简单",
        stem: "The marketing director believes the new promotional flyer will ________ to a diverse clientele.",
        options: ["appeal", "storm", "eager", "seminar"],
        correct: "appeal",
        explanations: {
            guide: "动词词义与特定介词的搭配。空格前有情态动词 will，后接介词 to 引导的宾语短语，需填入一个可以与 to 搭配的动词原形。",
            family: "appeal (v.吸引/呼吁) | storm (n.暴风雨) | eager (adj.渴望的) | seminar (n.研讨会)。",
            details: "appeal to someone 意为“对某人有吸引力”，是市场营销中用来形容宣传品（promotional flyer）迎合受众群体的核心地道动介搭配。其余干扰项词性不符或无法与 to 搭配。",
            cn: "营销总监相信，新的宣传传单会对多样化的客户群产生吸引力。",
            jp: "マーケティングディレクターは、新しい販促用チラシが多様な顧客層を引きつける（appeal）と信じています。"
        }
    },
    {
        id: 6,
        target: "eager",
        category: "简单",
        stem: "The recent university graduates are ________ to join the intensive training program next week.",
        options: ["eager", "reflect", "soil", "prior"],
        correct: "eager",
        explanations: {
            guide: "系动词后的固定形容词表语结构。空格前有系动词 are，后接动词不定式 to join，考核形容词的特定搭配句式。",
            family: "eager (adj.渴望的) | reflect (v.反映) | soil (n.土壤) | prior (adj.先前的)。",
            details: "be eager to do something 意为“渴望/热切地做某事”，属于职场新人（graduates）展现积极态度时的常用修饰语。其他干扰项无法构成此语法逻辑。",
            cn: "刚毕业的大学生们渴望参加下周的密集培训计划。",
            jp: "最近大学を卒業した若者たちは、来週の集中的な研修プログラムに参加することを熱望して（eager）います。"
        }
    },
    {
        id: 7,
        target: "storm",
        category: "中等",
        stem: "The outdoor anniversary celebration had to be postponed due to a severe ________ forecast.",
        options: ["storm", "appeal", "essential", "subsidy"],
        correct: "storm",
        explanations: {
            guide: "修饰中心名词的名词定语辨析。空格修饰后面的名词 forecast（预报），结合前文因恶劣天气导致推迟（postponed）的逻辑选名词 storm。",
            family: "storm (n.暴风雨) | appeal (n.吸引力) | essential (n.要素) | subsidy (n.补贴)。",
            details: "storm forecast 意为“暴风雨预报”。在户外庆典活动（outdoor celebration）中，突发恶劣天气预报是导致行程调整最经典的行政叙事。其他干扰项无法构成因果对应。",
            cn: "由于恶劣的暴风雨预报，户外周年庆典活动不得不推迟。",
            jp: "猛烈な嵐（storm）の予報のため、屋外の創立記念祝賀会は延期せざるを得ませんでした。"
        }
    },
    {
        id: 8,
        target: "lack",
        category: "中等",
        stem: "The software development project experienced a temporary delay because of a sudden ________ of labor.",
        options: ["lack", "soil", "valuable", "glitches"],
        correct: "lack",
        explanations: {
            guide: "介词短语中的中心名词辨析。空格前有不定冠词 a 和形容词 sudden（突然的），后接介词 of，考核固定名词表达。",
            family: "lack (n.缺乏) | soil (n.土壤) | valuable (adj.珍贵的) | glitches (n-pl故障)。",
            details: "a lack of... 意为“缺乏……”，此处代表劳动力短缺（lack of labor）导致项目产生了延误（delay）。虽然 glitches 也符合延误起因，但不能与前置的单数冠词 a 和介词 of 构成合理搭配。",
            cn: "由于突然缺乏劳动力，该软件开发项目经历了暂时性的延误。",
            jp: "突然の労働力不足（lack）のため、ソフトウェア開発プロジェクトは一時的な遅れに直面しました。"
        }
    },
    {
        id: 9,
        target: "essential",
        category: "中等",
        stem: "Thorough quality control is considered ________ for maintaining our brand reputation in the automotive industry.",
        options: ["essential", "extremely", "reflect", "voluntary"],
        correct: "essential",
        explanations: {
            guide: "被动语态后面的形容词补足语。主语是 quality control，谓语是 is considered，此处需要填入形容词作主语补足语，说明质量控制的必要性。",
            family: "essential (adj.必不可少的) | extremely (adv.极其) | reflect (v.反映) | voluntary (adj.自愿的)。",
            details: "be considered essential 意为“被认为是必不可少的/核心的”，用于强调质量控制对维持汽车行业（automotive industry）品牌声誉的决定性作用。其余选项词性不符或语意不通。",
            cn: "彻底的质量控制被认为是维持我们在汽车行业品牌声誉的关键所在。",
            jp: "自動車業界で当社のブランド評価を維持するためには、徹底した品質管理が不可欠（essential）であると考えられています。"
        }
    },
    {
        id: 10,
        target: "reflect",
        category: "中等",
        stem: "The quarterly revenue figures accurately ________ the success of our recent market expansion strategy.",
        options: ["reflect", "eager", "relatively", "keynote"],
        correct: "reflect",
        explanations: {
            guide: "谓语动词词义选择。主语是复数名词 figures（数据），空格前有修饰副词 accurately（准确地），后面带有完整的宾语结构，需填入及物动词原形作谓语。",
            family: "reflect (v.反映) | eager (adj.渴望的) | relatively (adv.相对地) | keynote (n.基调)。",
            details: "accurately reflect 意为“准确反映”，用以表述财务收入数据与公司扩张战略成功（success）之间的必然映射关系。其余选项词性完全不符。",
            cn: "季度收入数据准确反映了我们近期市场扩张战略的成功。",
            jp: "四半期収益の数値は、当社の最近の市場拡大戦略の成功を正確に反映（reflect）しています。"
        }
    },
    {
        id: 11,
        target: "valuable",
        category: "中等",
        stem: "The executive board recognized the immense ________ of the patent during the contract negotiation.",
        options: ["value", "valuable", "valuably", "valuations"],
        correct: "value",
        explanations: {
            guide: "词族派生词词性辨析。空格前有定冠词 the 和形容词 immense（巨大的），作为 recognized 的宾语，此位置必须填入名词形式。",
            family: "value (n.价值) | valuable (adj.有价值的) | valuably (adv.有价值地) | valuations (n-pl估值)。",
            details: "immense value 意为“巨大的价值”。董事会认可了该技术专利（patent）在谈判中蕴含的巨大抽象资产价值，用单数抽象名词 value。valuations 侧重于估值行为或多次资产评估的数值，在此处不如 value 贴切契合。",
            cn: "在合同谈判期间，执行董事会认可了该项专利的巨大价值。",
            jp: "執行役員会は契約交渉中、その特許が持つ莫大な価値（value）を認めました。"
        }
    },
    {
        id: 12,
        target: "extremely",
        category: "中等",
        stem: "The economists warned that the sudden drop in consumer demand represents an ________ case.",
        options: ["extreme", "extremely", "extremes", "extremism"],
        correct: "extreme",
        explanations: {
            guide: "名词前的定语形容词派生选择。空格前有不定冠词 an，后接单数可数名词 case（案例/情况），需填入形容词形式。",
            family: "extreme (adj.极端的) | extremely (adv.极其地) | extremes (n-pl极端) | extremism (n.极端主义)。",
            details: "an extreme case 意为“一个极端的案例”，用以形容消费者需求暴跌的严重宏观经济警示。副词 extremely 无法直接修饰单数可数名词 case。",
            cn: "经济学家警告说，消费者需求的突然下降代表了一个极端的案例。",
            jp: "エコノミストたちは、消費者需要の急激な減少は極端な（extreme）事例であると警告しました。"
        }
    },
    {
        id: 13,
        target: "relatively",
        category: "困难",
        stem: "The new regional branch achieved its annual profit goals ________ easily because of low labor costs.",
        options: ["relatively", "relative", "relation", "relativity"],
        correct: "relatively",
        explanations: {
            guide: "修饰副词的程度副词语法判定。空格后为副词 easily（容易地），用于修饰该副词以表达容易的程度，必须填入副词形式，选 relatively。",
            family: "relatively (adv.相对地) | relative (adj.相对的) | relation (n.关系) | relativity (n.相对论)。",
            details: "relatively easily 意为“相对轻松地”，副词修饰副词，用于解释由于人工成本（labor costs）低廉使得分支机构顺利完成年度利润目标。其余同族选项词性不符。",
            cn: "由于人工成本较低，新的区域分支机构相对轻松地实现了其年度利润目标。",
            jp: "新しい地域支部は、労働コストが低かったため、年間利益目標を比較的（relatively）容易に達成しました。"
        }
    },
    {
        id: 14,
        target: "appeal",
        category: "困难",
        stem: "The consulting firm designed an ________ promotional package to attract institutional investors.",
        options: ["appealing", "appeal", "appealed", "appeals"],
        correct: "appealing",
        explanations: {
            guide: "修饰名词的前置分词形容词考核。空格前有不定冠词 an，后有名词短语 promotional package（宣传方案），需填入具有主动、修饰性质的形容词，选 appealing。",
            family: "appealing (adj.有吸引力的) | appeal (v./n.吸引) | appealed (v-ed被吸引) | appeals (n-pl吸引力)。",
            details: "an appealing package 意为“一个极具吸引力的方案”，属于吸引机构投资者（institutional investors）加盟的高阶路演话术形容词搭配。其余词性不符作定语的需求。",
            cn: "该咨询公司设计了一个极具吸引力的宣传方案，以吸引机构投资者。",
            jp: "そのコンサルティング会社は、機関投資家を惹きつけるために魅力的な（appealing）プロモーションパッケージを設計しました。"
        }
    },
    {
        id: 15,
        target: "eager",
        category: "困难",
        stem: "The marketing team ________ anticipated the announcement of the strategic partnership with the automotive firm.",
        options: ["eagerly", "eager", "eagerness", "eagered"],
        correct: "eagerly",
        explanations: {
            guide: "修饰行为动词的副词状语位置。空格位于主语 marketing team 和过去时态动词 anticipated（期待）之间，作状语修饰动词，需填入副词，选 eagerly。",
            family: "eagerly (adv.热切地) | eager (adj.渴望的) | eagerness (n.渴望) | eagered (v-ed变体)。",
            details: "eagerly anticipated 意为“热切地期待/充满渴望地企盼”。常用于描述企业员工对重大战略合作协议发布时的振奋情绪。其余同族选项无法充当此处的动词修饰语。",
            cn: "营销团队热切期待着宣布与该汽车公司建立战略合作伙伴关系的消息。",
            jp: "マーケティングチームは、その自動車会社との戦略的提携の発表を熱切に（eagerly）期待していました。"
        }
    },
    {
        id: 16,
        target: "storm",
        category: "困难",
        stem: "The shipping division suspended all operations temporarily due to the ________ weather conditions.",
        options: ["stormy", "storm", "stormed", "storming"],
        correct: "stormy",
        explanations: {
            guide: "名词前的修饰形容词派生选择。空格后为名词词组 weather conditions（天气状况），前面有定冠词 the，需要填入形容词作定语，选 stormy。",
            family: "stormy (adj.暴风雨般的/恶劣的) | storm (n.暴风雨) | stormed (v-ed侵袭) | storming (v-ing猛攻)。",
            details: "stormy weather 意为“暴风雨天气/恶劣气候”，是物流、海运、航空货运（shipping division）因不可抗力导致暂停业务（suspended operations）时最地道的高阶行业术语。",
            cn: "由于恶劣的暴风雨天气，航运部门暂时暂停 openings 了所有业务。",
            jp: "海運部門は、悪天候（stormy）のため、すべての業務を一時的に停止しました。"
        }
    },
    {
        id: 17,
        target: "lack",
        category: "困难",
        stem: "The independent arbitrator noted that the firm was ________ in concrete proof to support its legal claim.",
        options: ["lacking", "lack", "lacked", "lacks"],
        correct: "lacking",
        explanations: {
            guide: "高阶形容词短语结构判定。空格前有系动词 was，后接介词 in 引导的短语，构成表示属性不足的固定结构，选现在分词形式转化的形容词 lacking。",
            family: "lacking (adj.匮乏的/缺乏的) | lack (v./n.缺乏) | lacked (v-ed已缺乏) | lacks (v-3sg)。",
            details: "be lacking in something 意为“在某方面有所匮乏/缺少”，是法务仲裁（arbitrator）中指出诉讼缺乏客观证据（concrete proof）支持主张（claim）时的标志性高端文体结构。其余形式不符该语法短语。",
            cn: "独立仲裁员指出，该企业在支持其法律诉求方面缺乏具体的证据。",
            jp: "独立仲裁人は、その企業が法的請求を支持するための具体的な証拠を欠いて（lacking）いると指摘しました。"
        }
    },
    {
        id: 18,
        target: "essential",
        category: "困难",
        stem: "The two technology startups are ________ proposing the same solution to the network grid failure.",
        options: ["essentially", "essential", "essentiality", "essentials"],
        correct: "essentially",
        explanations: {
            guide: "修饰进行时态动词短语的副词。空格位于助动词 are 和现在分词 proposing 之间，作状语修饰整个谓语动作，必须填入副词，选 essentially。",
            family: "essentially (adv.本质上/基本上) | essential (adj.核心的) | essentiality (n.本质) | essentials (n-pl要素)。",
            details: "are essentially proposing 意为“本质上是在提出……”，用来阐明两家初创企业（startups）的技术方案其实大同小异，符合IT竞标或产品对比的高阶商务语境。其他词性皆无法充当此类助动词后的状语。",
            cn: "这两家科技初创公司本质上是在针对网络电网故障提出相同的解决方案。",
            jp: "2つのITスタートアップは、ネットワークグリッドの障害に対して本質的に（essentially）同じ解決策を提案しています。"
        }
    }
];