// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag291-300.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "connection",
        pos: "名",
        ipa: "/kəˈnekʃn/",
        cn: "连接，关系，人脉，联运交通",
        jp: "接続、関係、コネ、乗り継ぎ",
        family: "connect / connection / connections / connected / connectivity",
        tips: "网络通信、商务人脉建立以及交通中转高频词。听力中极其常考航班、列车的 connection（中转交通工具）；阅读中常考 in connection with...（与……有关）。",
        desc: "The connection is good."
    },
    {
        word: "rush",
        pos: "動/名/形",
        ipa: "/rʌʃ/",
        cn: "匆忙，奔忙，催促；高峰的",
        jp: "急ぐ、急ぎ立てる；大急ぎ、ラッシュ",
        family: "rush / rushed / rushing / rushes",
        tips: "物流加急与日常行政时间管理核心词。常考搭配 rush the order（加急订单）、rush hour（上下班高峰期）。其形容词化分词 rushed 意为“仓促的/草率的”。",
        desc: "Do not rush."
    },
    {
        word: "preserve",
        pos: "動/名",
        ipa: "/prɪˈzɜːrv/",
        cn: "保护，保存，维持；保护区",
        jp: "保護する、保存する、維持する",
        family: "preserve / preservation / preservative / preserved",
        tips: "历史建筑翻新、环境资源保护与档案数据存储高频动词。常用于企业社会责任（CSR）报告中，如 preserve historical monuments（保护历史古迹），其名词形式 preservation 极高频。",
        desc: "We preserve records."
    },
    {
        word: "crop",
        pos: "名/動",
        ipa: "/krɑːp/",
        cn: "农作物，收成；裁剪，突然出现",
        jp: "作物、収穫高；切り取る、突然現れる",
        family: "crop / crops / cropped / cropping",
        tips: "农业经济、大宗商品进出口及图像处理双重高频词。作名词指农作物收成（crop yield）；作动词短语 crop up 属于托业高阶听力考点，意为“（问题等）突然发生/冒出”。",
        desc: "The crop is small."
    },
    {
        word: "aim",
        pos: "動/名",
        ipa: "/eɪm/",
        cn: "旨在，目标，瞄准；目的",
        jp: "目指す、〜を目標とする；目的、目標",
        family: "aim / aimed / aiming / aimless / aimlessly",
        tips: "企业战略规划与营销目标核心词。作动词时最常考经典结构 be aimed at doing something（旨在做某事/以……为目标）或 aim to do something（力求做到某事）。",
        desc: "Our aim is clear."
    },
    {
        word: "normally",
        pos: "副",
        ipa: "/ˈnɔːrməli/",
        cn: "正常地，通常，常规情况下",
        jp: "通常は、正常に、普通は",
        family: "normal / normally / normality / normalize",
        tips: "系统运行状态描述与日常工作惯例高频副词。常用于语法题中修饰动词，表示设备“正常运转（operate normally）”，或在阅读中作为常规商业惯例的前置背景修饰。",
        desc: "It works normally."
    },
    {
        word: "attempt",
        pos: "動/名",
        ipa: "/əˈtempt/",
        cn: "试图，尝试",
        jp: "試みる、企てる；試み、努力",
        family: "attempt / attempted / attempting / attempts",
        tips: "项目危机应对与商务攻坚高频词。名动同形。常考固定句型 make an attempt to do something（试图做某事）或作为及物动词直接接不定式 attempt to resolve the issue（试图解决问题）。",
        desc: "They made an attempt."
    },
    {
        word: "factor",
        pos: "名/動",
        ipa: "/ˈfæktər/",
        cn: "因素，要素；把……折算进去",
        jp: "要因、要素；要素として考慮に入れる",
        family: "factor / factors / factored / factoring",
        tips: "风险评估、市场调研与财务分析核心词。作名词时常考 a key factor in...（……的关键因素）。作动词时，极其常考的高阶短语为 factor in / factor into...（将……纳入考量/折算进去）。",
        desc: "Price is a factor."
    },
    {
        word: "election",
        pos: "名",
        ipa: "/ɪˈlekʃn/",
        cn: "选举，当选",
        jp: "選挙、当選",
        family: "elect / election / elections / electoral / elective",
        tips: "公司治理、董事会表决与地方行政高频名词。常考搭配 board election（董事会选举）、committee election（委员会选举）。其动词形式 elect 意为“选举/推选”。",
        desc: "The election is over."
    },
    {
        word: "promising",
        pos: "形",
        ipa: "/ˈprɑːmɪsɪŋ/",
        cn: "有前途的，大有可为的，前景光明的",
        jp: "前途有望な、見込みのある",
        family: "promise / promising / promisingly / promised",
        tips: "项目招商、职业招聘及市场开发高频形容词。常用来修饰人才、市场或技术，如 promising candidate（有前途的候选人）、promising market（前景光明的市场）。由动词形式派生而来。",
        desc: "The market is promising."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "connection",
        category: "简单",
        stem: "The internet ________ in the newly renovated office building is extremely stable, allowing for seamless video conferencing.",
        options: ["connection", "rush", "crop", "items"],
        correct: "connection",
        explanations: {
            guide: "名词词义辨析。空格前有定冠词 the 与名词 internet 修饰，空格处需要填入一个名词作主语，结合后文网络稳定、视频会议流畅选出正确词义。",
            family: "connection (n.连接) | rush (n./v.匆忙) | crop (n.农作物) | items (n-pl物品)。",
            details: "internet connection 意为“网络连接”，是现代办公翻新、IT设备升级场景中最经典的基础名词搭配。其余干扰项词义完全不通。",
            cn: "新翻修的办公大楼内的网络连接极其稳定，可以实现无缝的视频会议。",
            jp: "新しく改装されたオフィスビルのインターネット接続（connection）は非常に安定しており、シームレスなビデオ会議が可能です。"
        }
    },
    {
        id: 2,
        target: "rush",
        category: "简单",
        stem: "The shipping department had to ________ the delivery of the promotional materials to meet the strict weekend deadline.",
        options: ["rush", "aim", "normally", "memo"],
        correct: "rush",
        explanations: {
            guide: "动词词义辨析。空格前有情态助动词 had to，后接名词短语作宾语，此处必须填入及物动词原形。",
            family: "rush (v.加急/催促) | aim (v.旨在) | normally (adv.通常) | memo (n.备忘录)。",
            details: "rush the delivery 意为“加急递送/赶运”，符合物流货运部门为了赶在周末截止日期（deadline）前完成任务的职场紧急行政叙事。其余选项词性不符或语意不顺。",
            cn: "运输部门不得不加急递送宣传材料，以赶上严格的周末截止日期。",
            jp: "配送部門は、厳しい週末の締め切りに間に合わせるために、販促資材の配送を急ぐ（rush）必要がありました。"
        }
    },
    {
        id: 3,
        target: "preserve",
        category: "简单",
        stem: "The municipal historical society strives to ________ old landmarks to maintain the cultural heritage of the town.",
        options: ["preserve", "factor", "election", "golf"],
        correct: "preserve",
        explanations: {
            guide: "动词词义辨析。空格前有动词 strived（努力/争取）及不定式标记 to，后接名词 landmarks 作宾语，需填入及物动词原形。",
            family: "preserve (v.保护/保存) | factor (n.因素) | election (n.选举) | golf (n.高尔夫)。",
            details: "preserve old landmarks 意为“保护古老的地标建筑”，是城市规划、历史文化保护等公共事务听力与阅读场景中的高频正确搭配。其余干扰项词性或逻辑不符。",
            cn: "地方历史学会努力保护古老的地标，以维持该小镇的文化遗产。",
            jp: "地方歴史協会は、町の文化遺産を維持するために、古い歴史的建造物を保護する（preserve）ことに尽力しています。"
        }
    },
    {
        id: 4,
        target: "crop",
        category: "简单",
        stem: "Unfavorable weather conditions severely affected the regional wheat ________ during the last fiscal year.",
        options: ["crop", "connection", "promising", "studio"],
        correct: "crop",
        explanations: {
            guide: "修饰中心名词的名词定语语义辨析。空格前有形容词 regional（区域的）和名词 wheat（小麦），需选出能与小麦构成合理业务搭配的名词。",
            family: "crop (n.农作物/收成) | connection (n.连接) | promising (adj.有前途的) | studio (n.工作室)。",
            details: "wheat crop 意为“小麦收成/小麦作物”，符合农业进出口、商品供应链因恶劣天气（unfavorable weather）受到冲击的财务汇报语境。其余项不构成名词修饰。",
            cn: "在上一财政年度，不利的天气条件严重影响 locally 了该地区的麦作物收成。",
            jp: "悪天候のため、前会計年度の地域の小麦作物（crop）は深刻な影響を受けました。"
        }
    },
    {
        id: 5,
        target: "aim",
        category: "简单",
        stem: "The primary ________ of the upcoming training seminar is to streamline the client onboarding procedure.",
        options: ["aim", "preserve", "attempt", "lounge"],
        correct: "aim",
        explanations: {
            guide: "句子的主语名词词义辨析。空格前有定冠词 the 和形容词 primary（主要的），后有 of 引导的修饰结构，此处需要填入名词作主语，且后文由 is 引导表语从句。",
            family: "aim (n.目的/目标) | preserve (v.保护) | attempt (n./v.尝试) | lounge (n.休息室)。",
            details: "the primary aim 意为“主要目标”，常用于宣讲、会议章程或培训手册的开篇，指出活动旨在精简客户入职流程。attempt 放在此处一般不与 primary 搭配，侧重于尝试而非既定目的。",
            cn: "即将举行的培训研讨会的主要目的是精简客户入职流程。",
            jp: "間もなく開催される研修セミナーの主な目的（aim）は、顧客のオンボーディング手続きを効率化することです。"
        }
    },
    {
        id: 6,
        target: "normally",
        category: "简单",
        stem: "Under standard working conditions, the technical support hotline ________ operates twenty-four hours a day.",
        options: ["normally", "rush", "factor", "crates"],
        correct: "normally",
        explanations: {
            guide: "修饰谓语动词的状语副词判定。空格位于主语 hotline 与谓语动词 operates 之间，需要填入副词作状语，用以描述常规运行状态。",
            family: "normally (adv.通常/正常地) | rush (v./n.匆忙) | factor (n.因素) | crates (n-pl板条箱)。",
            details: "normally operates 意为“通常/正常情况下运转”，前文有 Under standard working conditions（在标准工作条件下）作为温和的语境暗示。其余选项词性完全不对。",
            cn: "在标准工作条件下，技术支持热线通常一天二十四小时运营。",
            jp: "標準的な勤務条件下では、テクニカルサポートのホットラインは通常（normally）、1日24時間稼働しています。"
        }
    },
    {
        id: 7,
        target: "attempt",
        category: "中等",
        stem: "The database management team will ________ to resolve the network glitches before the executive meeting starts.",
        options: ["attempt", "election", "promising", "streamline"],
        correct: "attempt",
        explanations: {
            guide: "动词及后续不定式搭配辨析。空格前有情态动词 will，后接带 to 的动词不定式结构，需填入一个能接 to do 的及物或不及物动词原形。",
            family: "attempt (v.试图/尝试) | election (n.选举) | promising (adj.有前途的) | streamline (v.精简)。",
            details: "attempt to do something 意为“试图/尝试做某事”，是IT支持、应急方案中形容团队全力抢修故障（glitches）时的核心高级动词。streamline 是及物动词，后接名词宾语，不能直接接 to do。",
            cn: "数据库管理团队将在执行会议开始前试图解决网络故障。",
            jp: "データベース管理チームは、役員会議が始まる前にネットワークの不具合を解決しようと試みる（attempt）予定です。"
        }
    },
    {
        id: 8,
        target: "factor",
        category: "中等",
        stem: "Increasing international transportation cost is a major ________ that must be considered during the budget review.",
        options: ["factor", "connection", "normally", "revenue"],
        correct: "factor",
        explanations: {
            guide: "作表语的名词词义辨析。空格前有不定冠词 a 和形容词 major（主要的），后有定语从句修饰，此处需填入单数可数名词作表语。",
            family: "factor (n.因素) | connection (n.连接) | normally (adv.通常) | revenue (n.收入)。",
            details: "a major factor 意为“一个主要因素”，指运输成本增加是预算审查中必须考量的重要原因，符合企业成本控制与供应链管理的典型商业语境。其余项语意不匹配。",
            cn: "国际运输成本的增加是预算审查期间必须考虑的一个主要因素。",
            jp: "国際輸送コストの増加は、予算審査の際に考慮しなければならない主要な要因（factor）です。"
        }
    },
    {
        id: 9,
        target: "election",
        category: "中等",
        stem: "The upcoming committee ________ will determine who will fill the vacant role of the general manager.",
        options: ["election", "crop", "aim", "clearance"],
        correct: "election",
        explanations: {
            guide: "修饰主语的复合名词语义选择。空格前有形容词 upcoming（即将举行的）与名词 committee（委员会），后面是谓语动词 will determine，需要填入名词作主语核心词。",
            family: "election (n.选举) | crop (n.农作物) | aim (n.目标) | clearance (n.清仓/许可)。",
            details: "committee election 意为“委员会选举”，用于决定空缺的高管职位（general manager）由谁接任，是公司治理与行政人事投票场景的标配。其余干扰项词义脱节。",
            cn: "即将举行的委员会选举将决定谁来填补总经理的空缺职位。",
            jp: "間もなく行われる委員会選挙（election）によって、空席となっているゼミや総支配人の職を誰が引き継ぐかが決定されます。"
        }
    },
    {
        id: 10,
        target: "promising",
        category: "中等",
        stem: "The MBA graduates from the prestigious university show ________ signs of leadership potential in their initial evaluations.",
        options: ["promising", "rush", "preserve", "selective"],
        correct: "promising",
        explanations: {
            guide: "修饰中心名词的定语形容词语义辨析。空格位于复数名词 signs（迹象）之前，作为定语，需填入能够形容潜力优秀的形容词。",
            family: "promising (adj.有前途的/有希望的) | rush (v.匆忙) | preserve (v.保护) | selective (adj.选择性的)。",
            details: "promising signs 意为“良好的迹象/大有可为的兆头”，用来修饰顶尖学府MBA毕业生在入职初期评估中展现出的卓越领导力潜质。selective（选择性的）在此处语义不通。",
            cn: "名牌大学的MBA毕业生在最初的评估中展现出了有前途的领导潜力迹象。",
            jp: "名門大学のMBA卒業生たちは、初期の評価において、将来有望な（promising）リーダーシップのポテンシャルの兆候を示しています。"
        }
    },
    {
        id: 11,
        target: "connection",
        category: "中等",
        stem: "The two prominent automotive firms are closely ________ through a long-term parts supply agreement.",
        options: ["connected", "connection", "connectivity", "connects"],
        correct: "connected",
        explanations: {
            guide: "词族派生词与被动语态语法结构判定。空格前有系动词 are 和修饰副词 closely（紧密地），后接介词 through，此处需填入过去分词构成被动语态或表语结构。",
            family: "connected (v-ed连接的/相关的) | connection (n.连接) | connectivity (n.连通性) | connects (v-3sg)。",
            details: "be closely connected through... 意为“通过……紧密联系在一起”，属于工业制造、跨国车企间通过零部件供应协议建立起战略合作纽带的经典商业关系描述。其余选项词性错乱。",
            cn: "这两家著名的汽车公司通过长期的零部件供应协议紧密联系在一起。",
            jp: "その2つの大手自動車会社は、長期的な部品供給契約を通じて密接に関連して（connected）います。"
        }
    },
    {
        id: 12,
        target: "rush",
        category: "中等",
        stem: "Because of the unexpected server failure, the IT advisory firm made a ________ decision to deploy the backup grid.",
        options: ["rushed", "rushly", "rushing", "rushes"],
        correct: "rushed",
        explanations: {
            guide: "名词前置修饰的形容词分词派生选择。空格位于不定冠词 a 和名词 decision（决定）之间，需填入具有形容词性质的词进行修饰。",
            family: "rushed (adj.仓促的/草率的) | rushly (错误副词变体) | rushing (v-ing冲向) | crushes (n-pl/v-3sg)。",
            details: "a rushed decision 意为“一个仓促的决定/草率的决定”，指由于突发服务器故障（server failure），IT顾问公司在承受巨大时间压力下匆忙做出的危机响应举措。rushly 并非标准英语副词。",
            cn: "由于意外的服务器故障，IT咨询公司做出了一个仓促的决定来部署备份电网。",
            jp: "予期せぬサーバー障害のため、ITアドバイザリー企業はバックアップグリッドを配置するという大急ぎの（rushed）決定を下しました。"
        }
    },
    {
        id: 13,
        target: "preserve",
        category: "困难",
        stem: "The regional council demanded the strict ________ of the historical estate to safeguard its unique architectural style.",
        options: ["preservation", "preserve", "preservative", "preserved"],
        correct: "preservation",
        explanations: {
            guide: "词族派生词词性辨析。空格前有定冠词 the 和形容词 strict（严格的），后有 of 引导的介词短语，此处必须填入名词充当 demanded 的宾语核心词。",
            family: "preservation (n.保护/保存) | preserve (v.保护/n.保护区) | preservative (n.防腐剂) | preserved (adj.被保存的)。",
            details: "strict preservation 意为“严格保护”，名词形式专指对历史房产（historical estate）这一客观资产的物理保护与原样维系工作。preservative 意为防腐剂，语意错误；动词原形 preserve 在此处语法不通。",
            cn: "地方议会要求对历史地产进行严格的保护，以维护其独特的建筑风格。",
            jp: "地域評議会は、その独特な建築様式を守るために、歴史的遺産の厳格な保存（preservation）を求めました。"
        }
    },
    {
        id: 14,
        target: "crop",
        category: "困难",
        stem: "Several administrative glitches are expected to ________ up during the initial transition to the new accounting system.",
        options: ["crop", "cropping", "cropped", "crops"],
        correct: "crop",
        explanations: {
            guide: "高阶商务动词短语搭配与语态判定。空格前有动词不定式标记 to，后接副词 up，考核固定高阶不及物动词短语的搭配原形。",
            family: "crop (v.突发/裁剪) | cropping (v-ing) | cropped (v-ed) | crops (v-3sg)。",
            details: "crop up 意为“（问题、故障等）突然发生/出乎意料地冒出”，在托业高级听力与项目管理公文中经常作为 delay 的起因词出现。be expected to do 后接动词原形 crop。其他分词或复数形式均不符合不定式语法。",
            cn: "在最初过渡到新会计系统的过程中，预计会出现几个行政上的小故障。",
            jp: "新しい会計システムへの移行の初期段階において、いくつかの管理上の不具合が突然発生する（crop）と予想されます。"
        }
    },
    {
        id: 15,
        target: "aim",
        category: "困难",
        stem: "The latest promotional campaign executed by the agency is ________ primarily at young tech entrepreneurs.",
        options: ["aimed", "aim", "aiming", "aimless"],
        correct: "aimed",
        explanations: {
            guide: "动词固定短语的被动语态语法结构。空格前有系动词 is 及其修饰副词 primarily（主要地），后接介词 at，考核被动分词固定搭配。",
            family: "aimed (v-ed旨在/针对) | aim (v/n.目标) | aiming (v-ing瞄准) | aimless (adj.无目的的)。",
            details: "be aimed at someone/something 意为“旨在……/目标针对……”，属于典型的市场公关与营销受众定位（targeting）的高级表达，此处指最新的宣传活动主要面向年轻的科技创业者。现在分词 aiming 无法在此处表达“被动针对”的含义。",
            cn: "该机构执行的最新宣传活动主要针对年轻的科技创业者。",
            jp: "そのエージェンシーによって実施された最新のプロモーションキャンペーンは、主に若いIT起草家を対象として（aimed）います。"
        }
    },
    {
        id: 16,
        target: "normally",
        category: "困难",
        stem: "The leading economists assessed whether the sharp drop in tax revenue fell within the range of statistical ________.",
        options: ["normality", "normally", "normal", "normalize"],
        correct: "normality",
        explanations: {
            guide: "词族派生词的高阶抽象名词判定。空格前有介词 of 和定语形容词 statistical（统计的），空格处必须填入名词以完成介词短语结构。",
            family: "normality (n.正常状态/常态) | normally (adv.通常) | normal (adj.正常的/n.常态) | normalize (v.使常态化)。",
            details: "statistical normality 是高级统计学与经济分析术语，意为“统计学常态/正常范围”，用以评估税收暴跌（drop in tax revenue）究竟属于异常危机还是在合理波动范围之内。虽然 normal 也可作名词表示常态，但在该学术/经济严谨公文中，表示性质状态的专用名词 normality 最为精准切合。",
            cn: "顶尖的经济学家评估了税收的急剧下降是否属于统计学上的常态范围。",
            jp: "主要なエコノミストたちは、税収の急激な減少が統計的な正常性（normality）の範囲内に収まっているかどうかを評価しました。"
        }
    },
    {
        id: 17,
        target: "attempt",
        category: "困难",
        stem: "The corporate headquarters made an ________ acquisition of its primary competitor, but the council rejected the merger.",
        options: ["attempted", "attempt", "attempts", "attempting"],
        correct: "attempted",
        explanations: {
            guide: "修饰名词的前置分词形容词辨析。空格位于不定冠词 an 与名词 acquisition（收购）之间，需填入一个过去分词作定语，表示该动作“已尝试但未成功”。",
            family: "attempted (adj.尝试过的/未遂的) | attempt (v./n.尝试) | attempts (n-pl) | attempting (v-ing)。",
            details: "an attempted acquisition 意为“一次试图进行的收购/未遂的收购”，后半句有转折词 but 明确说明该合并案被议会驳回（rejected the merger），反向印证了这场收购仅停留在“尝试过”的阶段。名词 attempt 无法直接作前置定语修饰另一个单数可数名词。",
            cn: "公司总部对其次要竞争对手进行了一次试图收购，但委员会拒绝了该合并案。",
            jp: "本社は主要な競合企業の買収を試み（attempted）ましたが、評議会はその合併案を否決しました。"
        }
    },
    {
        id: 18,
        target: "factor",
        category: "困难",
        stem: "Financial analysts failed to ________ the newly converted government subsidies into their long-term revenue projections.",
        options: ["factor", "factors", "factored", "factoring"],
        correct: "factor",
        explanations: {
            guide: "高阶动词短语与不定式语法结构。空格前有带 to 的动词不定式标记，后接宾语短语，再往后出现了介词 into，考核高阶固定动介短语搭配的原形。",
            family: "factor (v.把……因素折算进去) | factors (n-pl/v-3sg) | factored (v-ed) | factoring (v-ing)。",
            details: "factor A into B 意为“将A因素考虑并折算进B当中”，是财务预测、高阶精算场景中的核心动词短语。本句中指未能将政府补贴（subsidies）折算进长期收入预测中。to 后面必须接动词原形 factor。",
            cn: "财务分析师未能将新转换的政府补贴纳入其长期收入预测中。",
            jp: "財務アナリストたちは、新しく転換された政府補助金を長期的な収益予測に組み入れる（factor）ことができませんでした。"
        }
    }
];