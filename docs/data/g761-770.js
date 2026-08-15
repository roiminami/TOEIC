// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data481-490.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "entrepreneur",
        pos: "名",
        ipa: "/ˌɑːntrəprəˈnɜːr/",
        cn: "企业家，创业者",
        jp: "起業家、アントレプレナー",
        family: "entrepreneurial / entrepreneurship",
        tips: "商业与初创企业高频：successful entrepreneur（成功的创业家），entrepreneurial spirit（创业精神）。",
        desc: "The entrepreneur launched a startup."
    },
    {
        word: "acclaimed",
        pos: "形",
        ipa: "/əˈkleɪmd/",
        cn: "备受赞誉的，受到高度评价的",
        jp: "絶賛された、高い評価を受けた",
        family: "acclaim / acclamation",
        tips: "人物与作品评价高频：critically acclaimed novel/film（备受评论界赞誉的小说/电影），widely acclaimed architect（广受赞誉的建筑师）。",
        desc: "She is an acclaimed author."
    },
    {
        word: "malfunction",
        pos: "名/動",
        ipa: "/ˌmælˈfʌŋkʃn/",
        cn: "故障，失灵；发生故障",
        jp: "故障、不具合；故障する",
        family: "malfunctioning / malfunctioned",
        tips: "设备维护与IT高频：equipment malfunction（设备故障），system malfunction（系统失灵）。",
        desc: "The printer had a malfunction."
    },
    {
        word: "restart",
        pos: "動/名",
        ipa: "/ˌriːˈstɑːrt/",
        cn: "重新启动，重新开始",
        jp: "再起動する、再開する；再開",
        family: "restarted / restarting",
        tips: "IT与运营高频：restart the computer/server（重启电脑/服务器），restart production（恢复生产）。",
        desc: "Please restart the computer now."
    },
    {
        word: "retreat",
        pos: "名/動",
        ipa: "/rɪˈtriːt/",
        cn: "静修会，员工集训营；撤退，退却",
        jp: "社員研修旅行、保養地；撤退する",
        family: "retreated / retreating",
        tips: "HR团建与战略高频：company/executive retreat（公司团建静修营/高管研讨会），retreat from a market（退出市场）。",
        desc: "They attended a company retreat."
    },
    {
        word: "incorporate",
        pos: "動",
        ipa: "/ɪnˈkɔːrpəreɪt/",
        cn: "包含，吸收，合并",
        jp: "組み込む、統合する、法人化する",
        family: "incorporation / incorporated / incorporating",
        tips: "战略与设计高频：incorporate feedback/features（纳入反馈/功能），incorporate A into B（将A融入B中）。",
        desc: "We incorporate user feedback daily."
    },
    {
        word: "spacious",
        pos: "形",
        ipa: "/ˈspeɪʃəs/",
        cn: "宽敞的，开阔的",
        jp: "広々とした、ゆったりした",
        family: "space / spaciously / spaciousness",
        tips: "房产与办公环境高频：spacious office/suite/conference room（宽敞的办公室/套房/会议室）。",
        desc: "The new office is spacious."
    },
    {
        word: "closure",
        pos: "名",
        ipa: "/ˈkloʊʒər/",
        cn: "关闭，停业，封路",
        jp: "閉鎖、閉店、通行止め",
        family: "close / closed / closing",
        tips: "交通与商业高频：temporary road closure（临时封路），store closure（店铺关门停业）。",
        desc: "Road closure caused major delays."
    },
    {
        word: "webinar",
        pos: "名",
        ipa: "/ˈwebɪnɑːr/",
        cn: "在线研讨会，网络讲座",
        jp: "ウェビナー、オンラインセミナー",
        family: "webinars / web",
        tips: "培训与远程高频：host/attend a webinar（主持/参加在线研讨会），free interactive webinar（免费互动网络讲座）。",
        desc: "Join our free online webinar."
    },
    {
        word: "cardboard",
        pos: "名/形",
        ipa: "/ˈkɑːrdbɔːrd/",
        cn: "硬纸板；纸板制的",
        jp: "段ボール、厚紙；段ボール製の",
        family: "cardboards / board",
        tips: "物流与仓储高频：cardboard box（瓦楞纸箱），sturdy cardboard packaging（结实的纸板包装）。",
        desc: "Pack items in cardboard boxes."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "webinar",
        category: "简单",
        stem: "Professionals can earn continuing education credits by attending the interactive online ________ this Friday.",
        options: ["webinar", "retreat", "cardboard", "closure"],
        correct: "webinar",
        explanations: {
            guide: "网络培训名词考点。interactive online ________ 结合在线修读继续教育学分，选 webinar（网络研讨会/在线讲座）。",
            family: "webinar (n.网络研讨会) | retreat (n.静修会) | cardboard (n.硬纸板) | closure (n.关闭)。",
            details: "online webinar 意为网络研讨会。cardboard（纸板）、closure（关闭）均非线上远程教育讲座实体。",
            cn: "专业人士可以通过参加本周五举行的在线互动研讨会来获得继续教育学分。",
            jp: "専門職の人々は、今週の金曜日に開催されるインタラクティブなオンラインウェビナー（webinar）に参加することで継続教育単位を取得できます。"
        }
    },
    {
        id: 2,
        target: "restart",
        category: "简单",
        stem: "Users are advised to ________ their computers after installing the mandatory security patch.",
        options: ["restart", "incorporate", "retreat", "malfunction"],
        correct: "restart",
        explanations: {
            guide: "IT操作动词考点。advised to 后面接动词原形，结合安装安全补丁后的常规操作，选 restart（重新启动）。",
            family: "restart (v.重启) | incorporate (v.合并/纳入) | retreat (v.撤退) | malfunction (v.发生故障)。",
            details: "restart computers 意为重启电脑。incorporate（纳入）、retreat（撤退）均非安装软件补丁后的电脑操作。",
            cn: "建议用户在安装强制性安全补丁后重新启动计算机。",
            jp: "ユーザーは、必須のセキュリティパッチをインストールした後にコンピュータを再起動（restart）することが推奨されます。"
        }
    },
    {
        id: 3,
        target: "cardboard",
        category: "简单",
        stem: "The moving company packed all delicate office supplies into sturdy ________ boxes.",
        options: ["cardboard", "spacious", "acclaimed", "entrepreneur"],
        correct: "cardboard",
        explanations: {
            guide: "包装材质名词作定语。修饰 boxes（箱子），结合搬家公司打包办公用品，选 cardboard（硬纸板/瓦楞纸板）。",
            family: "cardboard (n./adj.硬纸板) | spacious (adj.宽敞的) | acclaimed (adj.受赞誉的) | entrepreneur (n.创业者)。",
            details: "cardboard boxes 意为硬纸箱/瓦楞纸箱。acclaimed（备受赞誉的）、entrepreneur（企业家）不能作为包装箱材质定语。",
            cn: "搬家公司将所有易碎的办公用品打包进结实的硬纸箱中。",
            jp: "引越し業者は、すべての壊れやすい事務用品を頑丈な段ボール（cardboard）箱に梱包しました。"
        }
    },
    {
        id: 4,
        target: "spacious",
        category: "简单",
        stem: "The newly renovated boardroom is exceptionally ________, easily accommodating up to fifty executives.",
        options: ["spacious", "acclaimed", "cardboard", "entrepreneurial"],
        correct: "spacious",
        explanations: {
            guide: "空间表语形容词。is exceptionally ________ 结合能轻松容纳 50 名高管，选 spacious（宽敞的/开阔的）。",
            family: "spacious (adj.宽敞的) | acclaimed (adj.受赞誉的) | cardboard (adj.纸板的) | entrepreneurial (adj.创业的)。",
            details: "exceptionally spacious 意为极其宽敞。cardboard（纸板的）、entrepreneurial（创业的）无法用来形容会议室空间开阔。",
            cn: "新翻修的董事会会议室格外宽敞，可轻松容纳多达五十位高管。",
            jp: "新しく改装された役員会議室は非常に広々として（spacious）おり、最大50人の役員を容易に収容できます。"
        }
    },
    {
        id: 5,
        target: "closure",
        category: "简单",
        stem: "The temporary bridge ________ caused severe traffic delays for commuters during the morning rush hour.",
        options: ["closure", "webinar", "retreat", "malfunction"],
        correct: "closure",
        explanations: {
            guide: "交通路况名词考点。temporary bridge ________ 结合导致早高峰交通严重延误，选 closure（封闭/关闭）。",
            family: "closure (n.关闭/封路) | webinar (n.网课) | retreat (n.休养会) | malfunction (n.故障)。",
            details: "bridge closure 意为大桥封闭。webinar（网络讲座）、retreat（静修会）均无法与大桥结合表示交通阻断。",
            cn: "大桥的临时封闭给早高峰时段的通勤者造成了严重的交通延误。",
            jp: "橋の一時的な閉鎖（closure）により、朝のラッシュアワー時に通勤者に深刻な交通遅延が発生しました。"
        }
    },
    {
        id: 6,
        target: "entrepreneur",
        category: "简单",
        stem: "The young ________ secured venture funding to launch an innovative artificial intelligence platform.",
        options: ["entrepreneur", "webinar", "closure", "retreat"],
        correct: "entrepreneur",
        explanations: {
            guide: "商务人物主语名词。secured venture funding（获得风险投资）来创立 AI 平台的主语，选 entrepreneur（企业家/创业者）。",
            family: "entrepreneur (n.创业者/企业家) | webinar (n.网络研讨会) | closure (n.停业) | retreat (n.度假营)。",
            details: "young entrepreneur 意为青年创业家。webinar（研讨会）、closure（关闭）非指代人类创业者的主语。",
            cn: "这位年轻的创业者获得了风险投资，以推出一个创新的人工智能平台。",
            jp: "その若き起業家（entrepreneur）は、革新的な人工知能プラットフォームを立ち上げるためのベンチャー資金を確保しました。"
        }
    },
    {
        id: 7,
        target: "acclaimed",
        category: "中等",
        stem: "The conference featured a keynote speech delivered by an internationally ________ urban development expert.",
        options: ["acclaimed", "spacious", "cardboard", "malfunctioning"],
        correct: "acclaimed",
        explanations: {
            guide: "修饰专家声望的形容词。an internationally ________ expert 结合国际公认的权威专家，选 acclaimed（备受赞誉的）。",
            family: "acclaimed (adj.备受赞誉的) | spacious (adj.宽敞的) | cardboard (adj.纸板的) | malfunctioning (adj.发生故障的)。",
            details: "internationally acclaimed expert 意为国际知名/备受赞誉的专家。spacious（宽敞的）用于修饰空间而非专家个人。",
            cn: "本次会议由一位享誉国际的城市发展专家发表了主旨演讲。",
            jp: "この会議では、国際的に高く評価されている（acclaimed）都市開発の専門家による基調講演が行われました。"
        }
    },
    {
        id: 8,
        target: "malfunction",
        category: "中等",
        stem: "Production on the assembly line was temporarily halted due to an unexpected mechanical ________.",
        options: ["malfunction", "entrepreneur", "closure", "retreat"],
        correct: "malfunction",
        explanations: {
            guide: "工业设备故障名词考点。mechanical ________ 结合导致流水线暂停生产，选 malfunction（机械故障/失灵）。",
            family: "malfunction (n.故障) | entrepreneur (n.企业家) | closure (n.停业) | retreat (n.静修会)。",
            details: "mechanical malfunction 意为机械故障。entrepreneur（企业家）、retreat（静修会）均非机器发生的故障。",
            cn: "由于突发的机械故障，装配线上的生产被暂时中断。",
            jp: "予期せぬ機械の故障（malfunction）により、組み立てラインの生産が一時停止されました。"
        }
    },
    {
        id: 9,
        target: "incorporate",
        category: "中等",
        stem: "Software developers plan to ________ advanced voice recognition technology into the upcoming mobile app update.",
        options: ["incorporate", "restart", "retreat", "malfunction"],
        correct: "incorporate",
        explanations: {
            guide: "动词搭配考点。plan to 后面接动词原形，结合 incorporate A into B（将A融入/整合进B中），选 incorporate。",
            family: "incorporate (v.合并/整合) | restart (v.重启) | retreat (v.撤退) | malfunction (v.失灵)。",
            details: "incorporate technology into the app 意为将技术整合到应用中。restart、retreat 均不能与 into 搭配表达功能整合。",
            cn: "软件开发人员计划在即将推出的移动应用更新中融入先进的语音识别技术。",
            jp: "ソフトウェア開発者は、近く行われるモバイルアプリの更新に高度な音声認識技術を組み込む（incorporate）計画です。"
        }
    },
    {
        id: 10,
        target: "retreat",
        category: "中等",
        stem: "The corporate management team organized an annual leadership ________ at a scenic mountain resort.",
        options: ["retreat", "closure", "cardboard", "entrepreneur"],
        correct: "retreat",
        explanations: {
            guide: "企业培训团建名词。leadership ________ 结合在山间度假胜地举行的领导力研讨/团建活动，选 retreat（静修会/团建营）。",
            family: "retreat (n.静修会/团建营) | closure (n.关闭) | cardboard (n.纸板) | entrepreneur (n.企业家)。",
            details: "leadership retreat 意为领导力研讨静修营。closure（关闭）、cardboard（纸板）均非度假村举办的管理层活动。",
            cn: "公司管理团队在风景秀丽的山间度假村组织了一年一度的领导力研讨静修营。",
            jp: "経営陣は、景色の良い山のリゾートで年次のリーダーシップ研修旅行（retreat）を企画しました。"
        }
    },
    {
        id: 11,
        target: "spacious",
        category: "中等",
        stem: "Hotel guests frequently compliment the resort for providing exceptionally ________ guest rooms with private balconies.",
        options: ["spacious", "spaciousness", "acclaimed", "cardboard"],
        correct: "spacious",
        explanations: {
            guide: "形容词作前置定语。exceptionally ________ guest rooms 结构中，副词 exceptionally 后面接形容词修饰客房，选 spacious（宽敞的）。",
            family: "spacious (adj.宽敞的) | spaciousness (n.宽敞) | acclaimed (adj.受赞誉的) | cardboard (adj.纸板的)。",
            details: "spacious guest rooms 意为宽敞的客房。spaciousness 是名词，不能在副词后充当前置定语修饰 rooms。",
            cn: "酒店客人经常赞扬该度假村提供配有私人阳台且格外宽敞的客房。",
            jp: "ホテルの宿泊客は、プライベートバルコニー付きの非常に広々とした（spacious）客室を提供しているリゾートを頻繁に称賛しています。"
        }
    },
    {
        id: 12,
        target: "closure",
        category: "中等",
        stem: "The retail chain announced the permanent ________ of three unprofitable suburban stores by the end of the quarter.",
        options: ["closure", "close", "restart", "webinar"],
        correct: "closure",
        explanations: {
            guide: "店铺停业名词考点。the permanent ________ of stores 结构中，在定冠词与形容词后接名词，表达店铺的永久“关店/停业”，选 closure。",
            family: "closure (n.停业/关闭) | close (v./adj.关闭/接近) | restart (n.重启) | webinar (n.网络研讨会)。",
            details: "permanent closure 意为永久停业。close 作名词时通常指结尾或收盘，表示店铺关闭这一状态与行为时规范选用 closure。",
            cn: "该零售连锁店宣布将在本季度末前永久关闭三家不盈利的郊区门店。",
            jp: "その小売りチェーンは、今四半期末までに採算の合わない郊外の3店舗を完全に閉鎖（closure）することを発表しました。"
        }
    },
    {
        id: 13,
        target: "incorporate",
        category: "困难",
        stem: "The seamless ________ of user suggestions into the software interface significantly boosted customer satisfaction scores.",
        options: ["incorporation", "incorporate", "entrepreneurship", "closure"],
        correct: "incorporation",
        explanations: {
            guide: "派生抽象名词主语考点。The seamless ________ of... 结构中，在定冠词和形容词后面接抽象名词形式 incorporation（融入/纳入/整合）。",
            family: "incorporation (n.纳入/整合/法人化) | incorporate (v.包含) | entrepreneurship (n.创业精神) | closure (n.停业)。",
            details: "incorporation of suggestions 意为建议的吸纳整合。incorporate 是动词，不能在定冠词和形容词修饰下作句子主语中心语。",
            cn: "将用户建议无缝整合到软件界面中，显著提升了客户满意度得分。",
            jp: "ソフトウェアインターフェースへのユーザーの提案のシームレスな統合（incorporation）は、顧客満足度スコアを大幅に向上させました。"
        }
    },
    {
        id: 14,
        target: "entrepreneur",
        category: "困难",
        stem: "The business school established a specialized incubator to support students with strong ________ ambitions.",
        options: ["entrepreneurial", "entrepreneur", "acclaimed", "spacious"],
        correct: "entrepreneurial",
        explanations: {
            guide: "派生形容词修饰抽象名词。strong ________ ambitions 结构中，修饰抱负与志向，表达“创业的/企业家精神的”抱负，选形容词 entrepreneurial。",
            family: "entrepreneurial (adj.创业的/企业家的) | entrepreneur (n.创业者个人) | acclaimed (adj.受赞誉的) | spacious (adj.宽敞的)。",
            details: "entrepreneurial ambitions 意为创业抱负。entrepreneur 是名词，不能直接充当前置定语修饰抽象名词 ambitions。",
            cn: "这所商学院建立了一个专门的孵化器，以支持具有强烈创业抱负的学生。",
            jp: "そのビジネススクールは、強い起業家的（entrepreneurial）野心を持つ学生を支援するために専門のインキュベーターを設立しました。"
        }
    },
    {
        id: 15,
        target: "malfunction",
        category: "困难",
        stem: "Technicians worked through the night to replace the ________ server components and restore database access.",
        options: ["malfunctioning", "malfunction", "retreated", "restarted"],
        correct: "malfunctioning",
        explanations: {
            guide: "分词作前置定语。the ________ server components 结构中，修饰服务器部件，表达处于“发生故障中/运行失常的”部件，选现在分词 malfunctioning。",
            family: "malfunctioning (adj./v-ing发生故障的) | malfunction (n./v.原形) | retreated (v-ed撤退的) | restarted (v-ed重启的)。",
            details: "malfunctioning components 意为发生故障的零部件。malfunction 为原形动词/单数名词，在此处作前置修饰语必须使用分词形式 malfunctioning。",
            cn: "技术人员通宵工作以更换发生故障的服务器组件并恢复数据库访问。",
            jp: "技術者は誤作動している/不具合を起こしている（malfunctioning）サーバーコンポーネントを交換し、データベースアクセスを復旧させるために夜通し作業しました。"
        }
    },
    {
        id: 16,
        target: "acclaimed",
        category: "困难",
        stem: "The architectural design firm earned widespread critical ________ for its innovative use of sustainable timber.",
        options: ["acclaim", "acclaimed", "closure", "retreat"],
        correct: "acclaim",
        explanations: {
            guide: "派生抽象名词考点。earned widespread critical ________ 结构中，及物动词 earned 后面接抽象名词形式 acclaim（赞赏/好评/赞誉）。",
            family: "acclaim (n.赞扬/赞誉) | acclaimed (adj.备受赞誉的) | closure (n.关闭) | retreat (n.静修会)。",
            details: "critical acclaim 属于托业阅读极高频固定搭配，意为评论界的一致赞誉。acclaimed 是形容词，不能直接作 earned 的宾语中心语。",
            cn: "这家建筑设计公司因创新使用可持续木材而赢得了评论界的广泛赞誉。",
            jp: "その建築設計事務所は、持続可能な木材の革新的な使用により、広く批評家からの絶賛（acclaim）を獲得しました。"
        }
    },
    {
        id: 17,
        target: "retreat",
        category: "困难",
        stem: "Facing intense local competition and regulatory hurdles, the multinational retailer gradually ________ from the regional market.",
        options: ["retreated", "incorporation", "malfunctioned", "acclaimed"],
        correct: "retreated",
        explanations: {
            guide: "不及物动词与介词搭配。________ from the market 属于商务战略表达，表达面临激烈竞争后“退出/撤离”区域市场，选 retreated（retreat的过去式）。",
            family: "retreated (v-ed撤出/撤退) | incorporation (n.合并) | malfunctioned (v-ed失灵) | acclaimed (adj.受赞赏的)。",
            details: "retreated from the market 意为从市场中退出撤离。incorporation 是名词，malfunctioned（机械故障）与商业战略撤退无关。",
            cn: "面对激烈的本地竞争和监管障碍，这家跨国零售商逐渐退出了该区域市场。",
            jp: "激しい地元の競争と規制上のハードルに直面し、その多国籍小売り業者は地域市場から徐々に撤退しました（retreated）。"
        }
    },
    {
        id: 18,
        target: "spacious",
        category: "困难",
        stem: "The luxury apartment complex was ________ designed to provide maximum natural lighting for all living areas.",
        options: ["spaciously", "spacious", "spaciousness", "incorporate"],
        correct: "spaciously",
        explanations: {
            guide: "副词修饰过去分词考点。was ________ designed 结构中，用副词修饰过去分词 designed，表达被“宽敞开阔地”设计/布局，选副词 spaciously。",
            family: "spaciously (adv.宽敞地/开阔地) | spacious (adj.宽敞的) | spaciousness (n.宽敞) | incorporate (v.合并)。",
            details: "was spaciously designed 意为被设计得宽敞开阔。spacious 是形容词，不能在助动词 was 和分词 designed 之间作修饰动词的状语。",
            cn: "该豪华公寓大楼经过宽敞开阔的设计，为所有生活区域提供了最大的自然采光。",
            jp: "その高級アパートメント複合施設は、すべての居住エリアに最大限の自然光を提供できるよう、広々と（spaciously）設計されました。"
        }
    }
];