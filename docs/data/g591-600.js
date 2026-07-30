// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data161-170.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "forum",
        pos: "名",
        ipa: "/ˈfɔːrəm/",
        cn: "论坛，研讨会",
        jp: "フォーラム、討論会",
        family: "forums / fora",
        tips: "商务研讨与交流考点。常考：public forum（公开论坛）、online forum（在线论坛）、business forum（商务论坛）。",
        desc: "He attended an online business forum."
    },
    {
        word: "domestic",
        pos: "形",
        ipa: "/dəˈmestɪk/",
        cn: "国内的，本国的；家庭的",
        jp: "国内の、家庭の",
        family: "domestically / domesticity",
        tips: "航空差旅与经济贸易高频词。常考：domestic flight（国内航班）、domestic market（国内市场）、domestic sales（国内销量）。反义词：international / overseas。",
        desc: "They booked a domestic flight to Chicago."
    },
    {
        word: "round-trip",
        pos: "形/名",
        ipa: "/ˈraʊnd trɪp/",
        cn: "往返的，双程的；往返航程",
        jp: "往復の、往復旅行",
        family: "one-way / trip / ticket",
        tips: "差旅预订核心词！常考：round-trip ticket（往返机票/车票）、round-trip flight（往返航班）。反义词：one-way ticket（单程票）。",
        desc: "I bought a round-trip ticket to Tokyo."
    },
    {
        word: "calculate",
        pos: "動",
        ipa: "/ˈkælkjuleɪt/",
        cn: "计算，核算，估算",
        jp: "計算する、算出する",
        family: "calculation / calculator / calculated",
        tips: "财务与成本核算核心动词。常考：calculate total costs（计算总成本）、calculate interest（计算利息）。名词 calculation 极高频。",
        desc: "Please calculate the total cost for us."
    },
    {
        word: "popularity",
        pos: "名",
        ipa: "/ˌpɑːpjuˈlærəti/",
        cn: "流行，普及，受欢迎程度",
        jp: "人気、普及",
        family: "popular / popularize / popularly",
        tips: "市场分析与产品推广高频词。常考搭配：gain/grow in popularity（越来越受欢迎）、increase in popularity（普及度提高）。",
        desc: "The app gained rapid popularity worldwide."
    },
    {
        word: "remote",
        pos: "形",
        ipa: "/rɪˈmoʊt/",
        cn: "远程的，偏远的；微乎其微的",
        jp: "リモートの、遠隔の、偏遠な",
        family: "remotely / remoteness / remote control",
        tips: "办公模式与 IT 核心词！常考：remote work/working（远程办公）、remote location（偏远地区）、remote control（遥控器）。",
        desc: "Many staff members prefer remote work."
    },
    {
        word: "encounter",
        pos: "動/名",
        ipa: "/ɪnˈkaʊntər/",
        cn: "遭遇，遇到（困难/问题）；偶遇",
        jp: "（問題などに）直面する、遭遇する；遭遇",
        family: "encountered / encountering",
        tips: "项目推进与问题解决高频词！等同于 run into / experience。常考：encounter unexpected delays/problems（遇到意外延误/问题）。",
        desc: "We may encounter unexpected problems tomorrow."
    },
    {
        word: "convert",
        pos: "動",
        ipa: "/kənˈvɜːrt/",
        cn: "转换，转变，兑换",
        jp: "変換する、換金する、改造する",
        family: "conversion / converter / convertible",
        tips: "IT 格式转换、汇率兑换与建筑改造高频词。常考：convert currency（兑换外币）、convert file formats（转换文件格式）、convert A into B。",
        desc: "You can convert currency at the bank."
    },
    {
        word: "videoconference",
        pos: "名/動",
        ipa: "/ˈvɪdioʊkɑːnfərəns/",
        cn: "视频会议；召开视频会议",
        jp: "テレビ会議、ビデオ会議",
        family: "videoconferencing / video call",
        tips: "远程协作核心词。常考：hold/arrange a videoconference（举办视频会议）、via videoconference（通过视频会议）。",
        desc: "We scheduled a videoconference for Monday."
    },
    {
        word: "postal",
        pos: "形",
        ipa: "/ˈpoʊstl/",
        cn: "邮政的，邮寄的",
        jp: "郵便の、郵便に関する",
        family: "post / postage / postal code / post office",
        tips: "物流与信函场景高频词。常考搭配：postal service（邮政服务）、postal code/zip code（邮政编码）、postal rate（邮资标准）。",
        desc: "Please enter your valid postal code."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "remote",
        category: "简单",
        stem: "The IT department recommends installing secure software to support employees who work from ________ locations.",
        options: ["remote", "remotely", "postal", "forum"],
        correct: "remote",
        explanations: {
            guide: "形容词作前置定语修饰名词。________ locations 结构中需要形容词修饰复数名词 locations，表达“远程的/偏远的”地点，选 remote。",
            family: "remote (adj.远程的) | remotely (adv.远程地) | postal (adj.邮政的) | forum (n.论坛)。",
            details: "remote locations（远程地点/异地）是 IT 与远程办公场景的标准搭配。remotely 是副词，不能直接作前置定语修饰名词 locations。",
            cn: "IT 部门建议安装安全软件，以支持在远程地点工作的员工。",
            jp: "IT部門は、遠隔地（remote locations）で働く従業員を支援するためにセキュリティソフトウェアをインストールすることを推奨しています。"
        }
    },
    {
        id: 2,
        target: "round-trip",
        category: "简单",
        stem: "When booking travel online, selecting a ________ ticket is often cheaper than purchasing two single passes.",
        options: ["round-trip", "convert", "calculate", "videoconference"],
        correct: "round-trip",
        explanations: {
            guide: "差旅与交通乘车场景。a ________ ticket 表达“往返机票/车票”，与 purchasing two single passes（买两张单程票）对比，选 round-trip。",
            family: "round-trip (adj.往返的) | convert (v.转换) | calculate (v.计算) | videoconference (n.视频会议)。",
            details: "round-trip ticket（往返票）是托业出行预订场景的核心表达。其他选项词性或语义均不符。",
            cn: "在在线预订行程时，选择往返票通常比购买两张单程票更便宜。",
            jp: "オンラインで旅行を予約する際、往復（round-trip）チケットを選択する方が、片道券を2枚購入するよりも安くなることがよくあります。"
        }
    },
    {
        id: 3,
        target: "domestic",
        category: "简单",
        stem: "Travelers flying on ________ flights should arrive at the airport at least two hours before departure.",
        options: ["domestic", "encounter", "popularity", "postal"],
        correct: "domestic",
        explanations: {
            guide: "形容词作前置定语。 flying on ________ flights 结构中需要形容词修饰复数名词 flights，表达“国内航班”，选 domestic。",
            family: "domestic (adj.国内的) | encounter (v.遭遇) | popularity (n.普及/流行) | postal (adj.邮政的)。",
            details: "domestic flight（国内航班）与 international flight（国际航班）构成托业差旅阅读的高频对比组。",
            cn: "乘坐国内航班的旅客应在起飞前至少两小时到达机场。",
            jp: "国内線（domestic flights）を利用する旅行者は、出発の少なくとも2時間前に空港に到着する必要があります。"
        }
    },
    {
        id: 4,
        target: "calculate",
        category: "简单",
        stem: "The accountant will ________ the tax deduction for all eligible corporate business expenses.",
        options: ["calculate", "calculation", "remote", "forum"],
        correct: "calculate",
        explanations: {
            guide: "情态动词后的动词原形。will 后面需要接动词原形，表达会计将“计算/核算”扣税额，选 calculate。",
            family: "calculate (v.计算) | calculation (n.计算) | remote (adj.远程的) | forum (n.论坛)。",
            details: "will calculate 构成谓语结构。calculation 是名词，不能跟在情态动词 will 之后充当谓语动词。",
            cn: "会计将计算所有符合条件的公司营业费用的税收扣除额。",
            jp: "会計士は、対象となるすべての企業経費の所得控除額を計算（calculate）します。"
        }
    },
    {
        id: 5,
        target: "videoconference",
        category: "简单",
        stem: "The overseas team joined the urgent weekly meeting via a high-definition ________ system.",
        options: ["videoconference", "convert", "encounter", "round-trip"],
        correct: "videoconference",
        explanations: {
            guide: "名词作前置定语修饰名词。a high-definition ________ system 表达高清“视频会议”系统，选 videoconference。",
            family: "videoconference (n.视频会议) | convert (v.转换) | encounter (v.遭遇) | round-trip (adj.往返的)。",
            details: "videoconference system 意为视频会议系统。其他选项词性或语义均不符合办公设施系统描述。",
            cn: "海外团队通过高清视频会议系统参加了紧急周会。",
            jp: "海外チームは、高画質テレビ会議（videoconference）システムを通じて緊急週例会議に参加しました。"
        }
    },
    {
        id: 6,
        target: "postal",
        category: "简单",
        stem: "Customers must write down their full address along with a correct ________ code on the delivery form.",
        options: ["postal", "popularity", "domestic", "remote"],
        correct: "postal",
        explanations: {
            guide: "物流与邮寄场景固定短语。________ code 构成固定表述 postal code（邮政编码），选 postal。",
            family: "postal (adj.邮政的) | popularity (n.流行) | domestic (adj.国内的) | remote (adj.远程的)。",
            details: "postal code（邮政编码）是托业物流与个人信息填写场景的标准用语。popularity 是名词，不能修饰 code。",
            cn: "顾客必须在送货单上写下其完整地址以及正确的邮政编码。",
            jp: "お客様は、配達用紙に正確な郵便番号（postal code）とともに完全な住所を記入しなければなりません。"
        }
    },
    {
        id: 7,
        target: "encounter",
        category: "中等",
        stem: "If field technicians ________ any unexpected equipment failure, they must notify the manager immediately.",
        options: ["encounter", "encountered", "videoconference", "forum"],
        correct: "encounter",
        explanations: {
            guide: "条件状语从句的主谓一致。If 从句中，主语是复数名词 field technicians，空格处需要动词原形作谓语，表达“遭遇/遇到”设备故障，选 encounter。",
            family: "encounter (v.遭遇) | encountered (v-ed形式) | videoconference (n.视频会议) | forum (n.论坛)。",
            details: "If 从句表达一般将来可能发生的事，用一般现在时表将来（technicians encounter...）。encountered 是过去式，不符合真实条件句的时态规则。",
            cn: "如果现场技术人员遇到任何意外的设备故障，他们必须立即通知经理。",
            jp: "現場の技術者が予期せぬ機器の故障に遭遇した場合（encounter）、直ちにマネージャーに通知しなければなりません。"
        }
    },
    {
        id: 8,
        target: "forum",
        category: "中等",
        stem: "Leading industry executives gathered at the annual business ________ to discuss market innovation strategies.",
        options: ["forum", "round-trip", "calculate", "convert"],
        correct: "forum",
        explanations: {
            guide: "商务会议场所名词。gathered at the annual business ________ 表达高管们聚集在年度商业“论坛/研讨会”，选 forum。",
            family: "forum (n.论坛) | round-trip (adj.往返的) | calculate (v.计算) | convert (v.转换)。",
            details: "annual business forum（年度商业论坛）属于托业商务会议场景的标准表达。其他选项词性或语义均不符。",
            cn: "领先的行业高管聚集在年度商业论坛上，讨论市场创新策略。",
            jp: "業界のトップエグゼクティブが年次ビジネスフォーラム（forum）に集まり、市場の革新戦略について議論しました。"
        }
    },
    {
        id: 9,
        target: "popularity",
        category: "中等",
        stem: "Due to its growing ________ among young consumers, the eco-friendly product line was expanded.",
        options: ["popularity", "popular", "postal", "domestic"],
        correct: "popularity",
        explanations: {
            guide: "物主代词与形容词后的名词。its growing ________ 结构中，形容词 growing 后面需要接名词，表达其不断增长的“受欢迎程度/普及度”，选 popularity。",
            family: "popularity (n.流行/普及) | popular (adj.受欢迎的) | postal (adj.邮政的) | domestic (adj.国内的)。",
            details: "growing popularity（日益增长的普及度）是市场营销与消费趋势分析的高频搭配。popular 是形容词，不能直接放在形容词 growing 之后作宾语。",
            cn: "由于其在年轻消费者中日益普及，环保产品线得到了扩大。",
            jp: "若年消費者の間で人気（popularity）が高まっているため、環境に優しい製品ラインナップが拡大されました。"
        }
    },
    {
        id: 10,
        target: "convert",
        category: "中等",
        stem: "The new software allows users to easily ________ PDF documents into editable spreadsheet files.",
        options: ["convert", "conversion", "encounter", "remote"],
        correct: "convert",
        explanations: {
            guide: "动词不定式与固定搭配。allows users to easily ________ A into B 结构中，to 后面需要接动词原形，表达将文件格式“转换”为另一个格式，选 convert。",
            family: "convert (v.转换) | conversion (n.转换) | encounter (v.遭遇) | remote (adj.远程的)。",
            details: "convert A into B 是格式转换与外币兑换的标准搭配。conversion 是名词，不能跟在不定式符号 to 之后。",
            cn: "新软件允许用户轻松地将 PDF 文档转换为可编辑的电子表格文件。",
            jp: "新しいソフトウェアを使用すると、ユーザーはPDFドキュメントを編集可能なスプレッドシートファイルに簡単に変換（convert）できます。"
        }
    },
    {
        id: 11,
        target: "calculate",
        category: "中等",
        stem: "A careful ________ of total shipping fees must be conducted before submitting the final procurement order.",
        options: ["calculation", "calculate", "popularity", "videoconference"],
        correct: "calculation",
        explanations: {
            guide: "冠词与形容词后的名词主语。A careful ________ of... 位于句首作主语，形容词 careful 后面必须接名词形式 calculation（计算/核算）。",
            family: "calculation (n.计算) | calculate (v.计算) | popularity (n.流行) | videoconference (n.视频会议)。",
            details: "A careful calculation of fees 意为对费用的仔细核算。calculate 是动词原形，不能作句子的主语中心词。",
            cn: "在提交最终采购订单之前，必须对总运费进行仔细核算。",
            jp: "最終的な調達注文を提出する前に、配送料総額の注意深い計算（calculation）を行わなければなりません。"
        }
    },
    {
        id: 12,
        target: "domestic",
        category: "中等",
        stem: "While international exports dropped slightly, ________ sales increased significantly over the past year.",
        options: ["domestic", "domestically", "round-trip", "postal"],
        correct: "domestic",
        explanations: {
            guide: "形容词作前置定语与对比语境。与 international exports（国际出口）对比，________ sales 表达“国内”销售额，选 domestic。",
            family: "domestic (adj.国内的) | domestically (adv.在国内) | round-trip (adj.往返的) | postal (adj.邮政的)。",
            details: "domestic sales（国内销售额）属于商务业绩报告的典型核心表达。domestically 是副词，不能充当 sales 的前置定语。",
            cn: "虽然国际出口微幅下降，但过去一年国内销售额增长显著。",
            jp: "国際的な輸出がわずかに減少した一方で、国内（domestic）の売上は過去1年間で大幅に増加しました。"
        }
    },
    {
        id: 13,
        target: "convert",
        category: "困难",
        stem: "The seamless ________ of the historical warehouse into modern loft office space was praised by urban planners.",
        options: ["conversion", "convert", "encounter", "forum"],
        correct: "conversion",
        explanations: {
            guide: "冠词与形容词后的名词主语。The seamless ________ of... 结构中，形容词 seamless 后面需要接名词形式 conversion（改造/转换）。",
            family: "conversion (n.改造/转换) | convert (v.转换) | encounter (v.遭遇) | forum (n.论坛)。",
            details: "conversion of A into B 意为“把 A 改造/转换为 B”。convert 是动词，不能直接接受定冠词 the 和形容词 seamless 的修饰作主语。",
            cn: "将历史仓库无缝改造为现代阁楼办公空间的做法得到了城市规划师的赞扬。",
            jp: "歴史ある倉庫から現代的なロフトオフィススペースへのスムーズな転換（conversion）は、都市計画家から称賛されました。"
        }
    },
    {
        id: 14,
        target: "remote",
        category: "困难",
        stem: "Due to the high efficiency of digital collaboration tools, many IT engineers now work ________ from home.",
        options: ["remotely", "remote", "postal", "round-trip"],
        correct: "remotely",
        explanations: {
            guide: "副词修饰不及物动词。work ________ 结构中，需要副词修饰不及物动词 work，work remotely 意为“远程工作/异地办公”，选 remotely。",
            family: "remotely (adv.远程地) | remote (adj.远程的) | postal (adj.邮政的) | round-trip (adj.往返的)。",
            details: "work remotely 属于现代办公场景极高频的动副短语。remote 是形容词，不能直接充当修饰不及物动词 work 的状语。",
            cn: "得益于数字协作工具的高效率，许多 IT 工程师现在在家远程办公。",
            jp: "デジタルコラボレーションツールの高い効率性により、多くのITエンジニアが現在在宅でリモートで（remotely）働いています。"
        }
    },
    {
        id: 15,
        target: "encounter",
        category: "困难",
        stem: "During the initial testing phase of the newly developed software, engineers ________ multiple unexpected system bugs.",
        options: ["encountered", "encounter", "videoconference", "calculate"],
        correct: "encountered",
        explanations: {
            guide: "过去时态的谓语动词。时间状语表示“在初始测试阶段”，句子谓语需要使用一般过去时，表达工程师们“遭遇了/遇到了”多个 Bug，选 encountered。",
            family: "encountered (v-ed/过去式) | encounter (v.原形) | videoconference (n.视频会议) | calculate (v.计算)。",
            details: "encountered 表示过去发生的动作。encounter 是动词原形，在过去发生的测试阶段语境下主谓时态不匹配。",
            cn: "在新开发软件的初始测试阶段，工程师们遇到了多个意外的系统漏洞。",
            jp: "新しく開発されたソフトウェアの初期テスト段階で、エンジニアは複数の予期せぬシステムバグに遭遇しました（encountered）。"
        }
    },
    {
        id: 16,
        target: "postal",
        category: "困难",
        stem: "The national ________ service announced an increase in international express mailing rates starting next month.",
        options: ["postal", "postage", "domestic", "popularity"],
        correct: "postal",
        explanations: {
            guide: "机构专有名词修饰。The national ________ service 表达“国家邮政服务/国家邮局”，选用形容词 postal 作前置定语。",
            family: "postal (adj.邮政的) | postage (n.邮资) | domestic (adj.国内的) | popularity (n.流行)。",
            details: "national postal service（国家邮政局/国家邮政服务）是固定词组。postage 是名词（邮资），不能充当 service 的修饰语。",
            cn: "国家邮政局宣布从下个月开始提高国际快递邮寄费率。",
            jp: "国家郵便（postal）サービスは、来月から国際速達郵便料金を引き上げると発表しました。"
        }
    },
    {
        id: 17,
        target: "popularity",
        category: "困难",
        stem: "The mobile application has gained widespread ________ throughout Asia as a result of an aggressive marketing campaign.",
        options: ["popularity", "popularly", "forum", "remote"],
        correct: "popularity",
        explanations: {
            guide: "形容词后的名词宾语。gained widespread ________ 结构中，形容词 widespread 后面需要接名词，gain widespread popularity 意为“获得广泛的普及/欢迎”。",
            family: "popularity (n.普及/知名度) | popularly (adv.广泛地) | forum (n.论坛) | remote (adj.远程的)。",
            details: "gain widespread popularity（获得广泛欢迎/普及）属于商业阅读高阶动宾表达。popularly 是副词，不能作动词 gained 的宾语中心词。",
            cn: "由于积极的营销活动，该移动应用程序在整个亚洲获得了广泛的普及。",
            jp: "積極的なマーケティングキャンペーンの結果、そのモバイルアプリケーションはアジア全域で広範な人気（popularity）を獲得しました。"
        }
    },
    {
        id: 18,
        target: "videoconference",
        category: "困难",
        stem: "Conducting international negotiations via ________ has saved the multinational corporation millions in annual travel budgets.",
        options: ["videoconferencing", "videoconference", "round-trip", "convert"],
        correct: "videoconferencing",
        explanations: {
            guide: "介词后的动名词/抽象名词。via ________ 结构中，表达“通过视频会议（这一方式/过程）”，选用抽象动名词形式 videoconferencing。",
            family: "videoconferencing (n.视频会议技术/过程) | videoconference (n.单次视频会议) | round-trip (adj.往返的) | convert (v.转换)。",
            details: "via videoconferencing 指“通过视频会议交流（这一抽象通信方式）”，作介词 via 的宾语。videoconference 指具体的某一场会议，缺乏冠词（a/the）时语法不完备。",
            cn: "通过视频会议方式进行国际谈判，为这家跨国公司每年节省了数百万美元的差旅预算。",
            jp: "テレビ会議（videoconferencing）を通じて国際交渉を行うことで、その多国籍企業は年間の出張予算を数百万ドル節約しました。"
        }
    }
];