// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data141-150.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "exterior",
        pos: "名/形",
        ipa: "/ɪkˈstɪriər/",
        cn: "外部，外表；外部的，外面的",
        jp: "外観、外部；外部の、外側の",
        family: "exteriors / exteriorly",
        tips: "建筑设施与装修场景高频词。常考搭配：exterior wall（外墙）、exterior design（外观设计）、building exterior（建筑外观）。反义词：interior。",
        desc: "The exterior wall was freshly painted."
    },
    {
        word: "tune",
        pos: "動/名",
        ipa: "/tuːn/",
        cn: "调整，调音；曲调",
        jp: "調整する、調律する；曲",
        family: "tuning / tuner / stay tuned",
        tips: "设备维护与媒体高频词。常考：tune up a machine/car（检修/调试机器或汽车）；广播媒体句型 stay tuned（保持收听/关注）。",
        desc: "The mechanic will tune the engine today."
    },
    {
        word: "assure",
        pos: "動",
        ipa: "/əˈʃʊr/",
        cn: "向……保证，使确信",
        jp: "〜に保証する、確信させる",
        family: "assurance / assured / assuredly",
        tips: "商务沟通三高词之一（assure/ensure/insure）。核心结构必须跟“人”作双宾语：assure sb that... 或 assure sb of sth（向某人保证某事）。",
        desc: "I can assure you that the shipment is on time."
    },
    {
        word: "recall",
        pos: "動/名",
        ipa: "/rɪˈkɔːl/",
        cn: "召回（缺陷产品）；回想，回忆",
        jp: "（欠陥品の）回収、リコール；思い出させる",
        family: "recalled / recalling",
        tips: "商务危机与产品质量极高频词！常考：issue a product recall（发布产品召回通知）、recall defective vehicles（召回有缺陷的车辆）。",
        desc: "The automaker issued a product recall for safety."
    },
    {
        word: "conflict",
        pos: "名/動",
        ipa: "/ˈkɑːnflɪkt/",
        cn: "冲突，分歧；抵触",
        jp: "対立、衝突、紛争；抵触する",
        family: "conflicting / conflictual",
        tips: "日程安排与人际沟通考点。常考搭配：scheduling conflict（日程冲突）、resolve conflict（化解冲突）、conflict of interest（利益冲突）。",
        desc: "She missed the meeting due to a scheduling conflict."
    },
    {
        word: "patience",
        pos: "名",
        ipa: "/ˈpeɪʃns/",
        cn: "耐心，忍耐力",
        jp: "忍耐、忍耐力、根気",
        family: "patient / patiently",
        tips: "客服与延误通知极高频词！常考信函结尾致谢短语：Thank you for your patience（感谢您的耐心等待）。",
        desc: "We appreciate your patience during the delay."
    },
    {
        word: "sightseeing",
        pos: "名/形",
        ipa: "/ˈsaɪtsiːɪŋ/",
        cn: "观光，游览；观光的",
        jp: "観光、見学；観光の",
        family: "sightseer / sightsee",
        tips: "旅游与差旅休闲场景核心词。常考搭配：sightseeing tour（观光游览）、go sightseeing（去观光览胜）、sightseeing bus（观光巴士）。",
        desc: "They booked a guided sightseeing tour."
    },
    {
        word: "gear",
        pos: "名/動",
        ipa: "/ɡɪr/",
        cn: "装备，工具，齿轮；使适合",
        jp: "用具、装備、ギア；適合させる",
        family: "geared / gearing",
        tips: "双重托业考点：1. 装备（protective gear 防护装备 / outdoor gear 户外装备）；2. 动词被动搭配 be geared toward/to（针对/面向某群体）。",
        desc: "Workers must wear proper protective gear."
    },
    {
        word: "thrilled",
        pos: "形",
        ipa: "/θrɪld/",
        cn: "非常兴奋的，极度高兴的",
        jp: "とてもワクワクしている、感激している",
        family: "thrill / thrilling / thrillingly",
        tips: "商务信函与入职感言极高频感情赞美词！常考搭配：be thrilled to do sth（对做某事感到非常高兴/荣幸）、be thrilled with...（对……感到非常满意）。",
        desc: "We are thrilled to announce our new partnership."
    },
    {
        word: "transition",
        pos: "名/動",
        ipa: "/trænˈzɪʃn/",
        cn: "过渡，转变，转型；过渡",
        jp: "移行、転換、過渡期；移行する",
        family: "transitional / transitionary / transitioned",
        tips: "企业重组与系统升级核心词。常考搭配：transition period（过渡期）、smooth transition（平稳过渡）、transition to a new system（向新系统过渡）。",
        desc: "The team ensured a smooth transition to the new software."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "assure",
        category: "简单",
        stem: "The regional account manager phoned the client to ________ them that their order would arrive before Friday.",
        options: ["assure", "assurance", "sightseeing", "gear"],
        correct: "assure",
        explanations: {
            guide: "动词不定式与双宾语结构。phoned the client to 后面需要接动词原形，且与指人的代词 them 搭配，表达向客户“保证”，选 assure。",
            family: "assure (v.保证) | assurance (n.保证) | sightseeing (n.观光) | gear (n.装备)。",
            details: "assure sb that...（向某人保证……）是托业最高频的及物动词搭配。assurance 是名词，不能跟在不定式符号 to 之后作动词。",
            cn: "区域客户经理给客户打电话，向他们保证订单将在周五之前送达。",
            jp: "地域アカウントマネージャーは、顧客に電話をかけ、注文が金曜日までに到着することを保証（assure）しました。"
        }
    },
    {
        id: 2,
        target: "recall",
        category: "简单",
        stem: "Due to a minor manufacturing fault, the automobile company decided to ________ over ten thousand vehicles.",
        options: ["recall", "recalled", "exterior", "transition"],
        correct: "recall",
        explanations: {
            guide: "动词不定式结构。decided to 后面需要接动词原形，表达决定去“召回”缺陷车辆，选 recall。",
            family: "recall (v./n.召回) | recalled (v-ed形式) | exterior (n.外观) | transition (n.过渡)。",
            details: "decide to do sth 结构中需要接动词原形 recall。recalled 是过去分词/过去式，不能跟在不定式符号 to 之后。",
            cn: "由于轻微的制造缺陷，该汽车公司决定召回一万多辆汽车。",
            jp: "軽微な製造上の欠陥のため、その自動車会社は1万台以上の車両を回収（recall）することを決定しました。"
        }
    },
    {
        id: 3,
        target: "patience",
        category: "简单",
        stem: "We would like to thank all passengers for their ________ while our staff resolves the technical delay.",
        options: ["patience", "patiently", "thrilled", "tune"],
        correct: "patience",
        explanations: {
            guide: "物主代词后的名词宾语。their 后面需要接名词，Thank you for your patience（感谢您的耐心等待）是客服高频固定表述。",
            family: "patience (n.耐心) | patiently (adv.耐心地) | thrilled (adj.兴奋的) | tune (v.调试)。",
            details: "their patience 属于典型的物主代词加名词结构。patiently 是副词，不能被物主代词 their 直接修饰。",
            cn: "在我们的工作人员解决技术延误期间，我们感谢所有乘客的耐心等待。",
            jp: "スタッフが技術的な遅延を解決する間、すべての乗客の皆様のご忍耐（patience）に感謝いたします。"
        }
    },
    {
        id: 4,
        target: "thrilled",
        category: "简单",
        stem: "The executive committee is ________ to announce the opening of our newest international branch in Tokyo.",
        options: ["thrilled", "thrill", "conflict", "sightseeing"],
        correct: "thrilled",
        explanations: {
            guide: "形容词作表语。is 后面接形容词表语，be thrilled to do sth 意为“对做某事感到非常高兴/荣幸”，选 thrilled。",
            family: "thrilled (adj.非常兴奋的) | thrill (n./v.兴奋) | conflict (n.冲突) | sightseeing (n.观光)。",
            details: "be thrilled to do sth 属于表达欣喜之情的高频情感形容词短语。thrill 是名词或动词，不能直接作系动词 is 的表语形容词。",
            cn: "执行委员会非常高兴地宣布，我们最新的东京国际分公司正式开业。",
            jp: "執行委員会は、東京に最も新しい国際支社を開設することを発表できることを大変嬉しく（thrilled）思っています。"
        }
    },
    {
        id: 5,
        target: "exterior",
        category: "简单",
        stem: "The property owner decided to hire a contractor to repaint the building’s ________ wall next month.",
        options: ["exterior", "exteriors", "tune", "recall"],
        correct: "exterior",
        explanations: {
            guide: "形容词作前置定语修饰名词。the building's ________ wall 表达“建筑的外墙”，选用 exterior 作前置定语。",
            family: "exterior (adj.外部的/n.外观) | exteriors (n.复数) | tune (v.调试) | recall (v.召回)。",
            details: "exterior wall（外墙）是建筑设施管理场景的标准名词定语修饰表达。exteriors 是名词复数，不能作 wall 的前置定语。",
            cn: "业主决定聘请承包商下个月重新粉刷大楼的外墙。",
            jp: "物件の所有者は、来月建物の外（exterior）壁を塗り直すために請負業者を雇うことに決めました。"
        }
    },
    {
        id: 6,
        target: "sightseeing",
        category: "简单",
        stem: "Conference attendees can sign up for a guided ________ tour of the city after the afternoon session.",
        options: ["sightseeing", "patience", "transition", "assure"],
        correct: "sightseeing",
        explanations: {
            guide: "名词作定语修饰名词。a guided ________ tour 构成固定词组 sightseeing tour（观光游览 tour），选 sightseeing。",
            family: "sightseeing (n./adj.观光的) | patience (n.耐心) | transition (n.过渡) | assure (v.保证)。",
            details: "sightseeing tour（城市观光游）是会议与差旅场景的固定高频考汇。其他选项与城市导览游览无逻辑关联。",
            cn: "与会人员可以在下午的会议结束后报名参加带导游的城市观光游。",
            jp: "会議の参加者は、午後のセッションの後にガイド付きの市内観光（sightseeing）ツアーに申し込むことができます。"
        }
    },
    {
        id: 7,
        target: "conflict",
        category: "中等",
        stem: "Mr. Davis could not attend the strategic planning seminar because of an unexpected scheduling ________.",
        options: ["conflict", "conflicting", "exterior", "gear"],
        correct: "conflict",
        explanations: {
            guide: "名词作中心词。scheduling ________ 属于办公日程安排最高频搭配，scheduling conflict 意为“日程冲突”。",
            family: "conflict (n.冲突) | conflicting (adj.冲突的) | exterior (n.外观) | gear (n.装备)。",
            details: "scheduling conflict（日程安排冲突）是托业阅读与听力请假、缺席会议最高频的理由。conflicting 是形容词，不能作名词 scheduling 的被修饰词。",
            cn: "由于意想不到的日程安排冲突，戴维斯先生无法参加战略规划研讨会。",
            jp: "デイビス氏は、予期せぬスケジュールの衝突（conflict）のため、戦略計画セミナーに参加できませんでした。"
        }
    },
    {
        id: 8,
        target: "gear",
        category: "中等",
        stem: "All workers on the construction site are strictly required to wear safety ________ at all times.",
        options: ["gear", "geared", "recall", "assure"],
        correct: "gear",
        explanations: {
            guide: "不可数集合名词。safety ________ 构成安全生产高频词组 safety gear（安全防护装备），选 gear。",
            family: "gear (n.装备/工具) | geared (adj.适合的) | recall (v.召回) | assure (v.保证)。",
            details: "safety gear（安全装备）与 protective gear 属于工场安全规程的核心表述。geared 是分词，不能在名词 safety 之后充当宾语中心词。",
            cn: "建筑工地上的所有工人被严格要求在任何时候都必须佩戴安全防护装备。",
            jp: "建設現場のすべての作業員は、常に安全装備（gear）を着用することが厳格に義務付けられています。"
        }
    },
    {
        id: 9,
        target: "transition",
        category: "中等",
        stem: "Management has prepared a detailed plan to ensure a smooth ________ to the new cloud-based database system.",
        options: ["transition", "transitional", "thrilled", "tune"],
        correct: "transition",
        explanations: {
            guide: "形容词修饰的名词宾语。a smooth ________ 结构中，形容词 smooth 后面需要接名词，smooth transition 意为“平稳过渡”，选 transition。",
            family: "transition (n.过渡/转型) | transitional (adj.过渡性的) | thrilled (adj.兴奋的) | tune (v.调试)。",
            details: "smooth transition to... 是托业系统升级与企业管理中极高频的搭配。transitional 是形容词，不能被形容词 smooth 修饰。",
            cn: "管理层准备了一份详细的计划，以确保向新的基于云的数据库系统平稳过渡。",
            jp: "経営陣は、新しいクラウドベースのデータベースシステムへの滑らかな移行（transition）を確保するための詳細な計画を準備しました。"
        }
    },
    {
        id: 10,
        target: "tune",
        category: "中等",
        stem: "The chief mechanic will ________ the complex engine components before the vehicle is tested on the track.",
        options: ["tune", "tuning", "patience", "sightseeing"],
        correct: "tune",
        explanations: {
            guide: "情态动词后的谓语动词。will 后面需要接动词原形，表达机械师将“调试/检修”发动机部件，选 tune。",
            family: "tune (v.调试/检修) | tuning (n.调音/调试) | patience (n.耐心) | sightseeing (n.观光)。",
            details: "will tune the engine 构成动宾谓语。tuning 是现在分词/动名词，不能直接跟在情态动词 will 之后。",
            cn: "在车辆在跑道上接受测试之前，主机械师将对复杂的发动机部件进行调试。",
            jp: "車両がコースでテストされる前に、主任メカニックが複雑なエンジン部品を調整（tune）します。"
        }
    },
    {
        id: 11,
        target: "assure",
        category: "中等",
        stem: "The customer service manager offered full ________ that the damaged items would be replaced free of charge.",
        options: ["assurance", "assure", "conflict", "exterior"],
        correct: "assurance",
        explanations: {
            guide: "形容词后的名词宾语。offered full ________ 结构中，形容词 full 后面需要接名词形式 assurance（保证/确信）。",
            family: "assurance (n.保证) | assure (v.保证) | conflict (n.冲突) | exterior (n.外观)。",
            details: "give/offer full assurance that... 意为“提供充分的保证”。assure 是动词原形，不能作动词 offered 的宾语。",
            cn: "客户服务经理提供了充分的保证，承诺损坏的物品将被免费更换。",
            jp: "カスタマーサービスマネージャーは、破損した商品が無料で交換されるという完全な保証（assurance）を提供しました。"
        }
    },
    {
        id: 12,
        target: "recall",
        category: "中等",
        stem: "The consumer safety regulatory commission ordered a total ________ of the malfunctioning kitchen appliance.",
        options: ["recall", "recalled", "gear", "sightseeing"],
        correct: "recall",
        explanations: {
            guide: "形容词与名词组合。a total ________ 中需要接名词，ordered a total recall 意为“下令全面召回”，选 recall。",
            family: "recall (n./v.召回) | recalled (v-ed形式) | gear (n.装备) | sightseeing (n.观光)。",
            details: "a total recall of the appliance 属于质量安全报告的核心词汇。recalled 是过去分词，不能作动词 ordered 的名词宾语。",
            cn: "消费者安全监管委员会下令全面召回发生故障的厨房用具。",
            jp: "消費者安全規制委員会は、故障した厨房機器の全面的な回収（recall）を命じました。"
        }
    },
    {
        id: 13,
        target: "gear",
        category: "困难",
        stem: "The new digital marketing initiative is strategically ________ toward attracting tech-savvy young professionals.",
        options: ["geared", "gear", "patience", "conflict"],
        correct: "geared",
        explanations: {
            guide: "被动语态与介词固定搭配。is strategically ________ toward... 属于固定句式 be geared toward/to，意为“针对/面向……”，选 geared。",
            family: "geared (adj./p.p.针对的) | gear (n./v.装备/调整) | patience (n.耐心) | conflict (n.冲突)。",
            details: "be geared toward young professionals 意为针对年轻专业人士。gear 是动词原形，不能在系动词 is 之后直接与副词 strategically 搭配构成被动短语。",
            cn: "这项新的数字营销倡议在战略上旨在吸引精通技术的年轻专业人士。",
            jp: "新しいデジタルマーケティングの取り組みは、テクノロジーに精通した若い専門職を引きつけることに戦略的に向けられて（geared）います。"
        }
    },
    {
        id: 14,
        target: "transition",
        category: "困难",
        stem: "The company will be ________ from traditional paper accounting records to an automated software platform over the next six months.",
        options: ["transitioning", "transition", "thrilled", "exterior"],
        correct: "transitioning",
        explanations: {
            guide: "进行时态的动词分词。will be ________ from A to B 结构构成将来进行时态，表达公司将“正在过渡”，选 transitioning。",
            family: "transitioning (现在分词) | transition (n./v.原形) | thrilled (adj.高兴的) | exterior (n.外观)。",
            details: "will be transitioning 构成进行时态。transition from A to B 是表示“从 A 转型/过渡到 B”的核心及物/不及物动词用法。",
            cn: "在接下来的六个月中，该公司将从传统纸质会计记录过渡到自动化软件平台。",
            jp: "同社は今後6ヶ月間で、従来の紙の会計記録から自動ソフトウェアプラットフォームに移行（transitioning）していく予定です。"
        }
    },
    {
        id: 15,
        target: "conflict",
        category: "困难",
        stem: "Auditors discovered a potential ________ of interest involving a member of the senior procurement selection committee.",
        options: ["conflict", "conflicting", "assurance", "recall"],
        correct: "conflict",
        explanations: {
            guide: "高阶商务专有名词。a potential ________ of interest 属于法律与商业合规的固定术语 conflict of interest（利益冲突）。",
            family: "conflict (n.冲突) | conflicting (adj.冲突的) | assurance (n.保证) | recall (n.召回)。",
            details: "conflict of interest（利益冲突）是托业 Part 5 与 Part 7 的最高频商务合规专属词。conflicting 是形容词，不能与 of interest 构成固定名词词组。",
            cn: "审计人员发现高级采购选择委员会的一名成员存在潜在的利益冲突。",
            jp: "監査人は、高級調達選考委員会のメンバーが関与する潜在的な利益相反（conflict of interest）を発見しました。"
        }
    },
    {
        id: 16,
        target: "thrilled",
        category: "困难",
        stem: "The CEO was immensely ________ with the outstanding performance turned in by the regional expansion department.",
        options: ["thrilled", "thrilling", "exterior", "tune"],
        correct: "thrilled",
        explanations: {
            guide: "系动词加副词后的形容词表语。was immensely ________ with... 中，主语是人（The CEO），be thrilled with 表达“对……非常满意/欣喜”，选 thrilled。",
            family: "thrilled (adj.非常欣喜的) | thrilling (adj.令人兴奋的) | exterior (n.外观) | tune (v.调试)。",
            details: "be thrilled with... 专指某人对某事物感到极其满意。thrilling 表达“某事物本身令人兴奋”，不能用来修饰 Human CEO 的感受。",
            cn: "首席执行官对区域扩张部门展现出的出色业绩感到无比欣喜。",
            jp: "最高経営責任者（CEO）は、地域拡張部門が挙げた優れた実績に非常に感激しました（thrilled）。"
        }
    },
    {
        id: 17,
        target: "tune",
        category: "困难",
        stem: "Before the live television broadcast, the sound engineer made precise ________ to the audio frequency levels.",
        options: ["adjustments", "tunes", "assurances", "recalls"],
        correct: "adjustments",
        explanations: {
            guide: "动词搭配与高阶同义辨析。made precise ________ to 结构中，make adjustments to 意为“对……做出精准微调”。",
            family: "adjustments (n.微调/调整) | tunes (n.曲调/复数) | assurances (n.保证) | recalls (n.召回)。",
            details: "make adjustments to... 属于商务与工程高频动词短语。tunes 作名词时指“曲调/旋律”，无法表达对音频设备 levels 进行“调整”的名词动作概念。",
            cn: "在现场电视直播之前，音响工程师对音频频率电平进行了精准微调。",
            jp: "生放送のテレビ放送の前に、音響エンジニアは音声周波数レベルに精密な調整（adjustments）を行いました。"
        }
    },
    {
        id: 18,
        target: "exterior",
        category: "困难",
        stem: "Architectural reviewers commended the design firm for seamlessly blending the building's historical ________ with modern structural elements.",
        options: ["exterior", "exteriors", "sightseeing", "patience"],
        correct: "exterior",
        explanations: {
            guide: "物主代词与形容词后的名词。the building's historical ________ 结构中，需要单数名词 exterior 表达“建筑的历史外观”。",
            family: "exterior (n.外观/外表) | exteriors (n.复数) | sightseeing (n.观光) | patience (n.耐心)。",
            details: "the building's historical exterior 意为“建筑的历史外观”。sightseeing（观光）和 patience（耐心）在建筑设计评审的语境下均不合逻辑。",
            cn: "建筑评审员赞扬了该设计公司将建筑的历史外观与现代结构元素完美融合。",
            jp: "建築審査員は、建物の歴史的な外観（exterior）と現代的な構造要素をシームレスに融合させたデザイン会社を称賛しました。"
        }
    }
];