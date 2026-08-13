// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data381-390.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "commerce",
        pos: "名",
        ipa: "/ˈkɑːmɜːrs/",
        cn: "商业，贸易",
        jp: "商業、貿易",
        family: "commercial / commercially / commercialize",
        tips: "商务与经济高频：e-commerce（电子商务），chamber of commerce（商会）。",
        desc: "International commerce is growing."
    },
    {
        word: "abusive",
        pos: "形",
        ipa: "/əˈbjuːsɪv/",
        cn: "辱骂的，滥用的，虐待的",
        jp: "乱用する、口汚い",
        family: "abuse / abusively / abuser",
        tips: "合规与客服高频：abusive behavior/language（辱骂行为/语言）。",
        desc: "He used abusive language."
    },
    {
        word: "wreaking",
        pos: "動/形",
        ipa: "/ˈriːkɪŋ/",
        cn: "造成（破坏），肆虐（wreak的现在分词）",
        jp: "（破壊などを）もたらしている",
        family: "wreak / wreaked / wreaker",
        tips: "灾害与故障高频搭配：wreaking havoc（造成严重破坏/浩劫）。",
        desc: "Storms are wreaking damage."
    },
    {
        word: "havoc",
        pos: "名",
        ipa: "/ˈhævək/",
        cn: "大破坏，浩劫，混乱",
        jp: "大混乱、大破壊",
        family: "havocs",
        tips: "阅读与灾害高频短语：wreak havoc on sth（对……造成严重破坏）。",
        desc: "The storm caused havoc."
    },
    {
        word: "climactic",
        pos: "形",
        ipa: "/klaɪˈmæktɪk/",
        cn: "高潮的，顶点的",
        jp: "クライマックスの、最高潮の",
        family: "climax / climactically",
        tips: "活动与演出高频：climactic scene/ending（高潮戏/顶点结局）。注意与 climatic（气候的）区分。",
        desc: "It was a climactic moment."
    },
    {
        word: "foremost",
        pos: "形/副",
        ipa: "/ˈfɔːrmoʊst/",
        cn: "最重要的，最著名的；首先",
        jp: "第一の、最も重要な",
        family: "foremostness",
        tips: "人物评价与逻辑高频：foremost authority/expert（最权威的专家），first and foremost（首先）。",
        desc: "He is a foremost expert."
    },
    {
        word: "quite a few",
        pos: "短語",
        ipa: "/kwaɪt ə fjuː/",
        cn: "相当多的，不少的",
        jp: "かなり多くの",
        family: "quite / few",
        tips: "听力与阅读量词短语：quite a few + 可数名词复数（不少……/相当多的……）。",
        desc: "Quite a few members joined."
    },
    {
        word: "participants",
        pos: "名",
        ipa: "/pɑːrˈtɪsɪpənts/",
        cn: "参与者，与会者（复数）",
        jp: "参加者たち",
        family: "participate / participation / participant",
        tips: "研讨会与活动高频：conference participants（与会者），active participants（积极参与者）。",
        desc: "All participants received certificates."
    },
    {
        word: "opt",
        pos: "動",
        ipa: "/ɑːpt/",
        cn: "选择，挑选",
        jp: "選択する、選ぶ",
        family: "option / optional / opting",
        tips: "商务决策高频搭配：opt for sth / opt to do sth（选择某事/选择做某事）。",
        desc: "They opt for online payment."
    },
    {
        word: "dealt",
        pos: "動",
        ipa: "/delt/",
        cn: "处理，应对（deal的过去式/分词）",
        jp: "対処した、処理した",
        family: "deal / dealing / dealer",
        tips: "客服与危机处理高频：dealt with complaints/problems（处理了投诉/问题）。",
        desc: "She dealt with complaints."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "participants",
        category: "简单",
        stem: "All ________ in the workshop will receive a official certificate of attendance at the end of the day.",
        options: ["participants", "commerce", "havoc", "foremost"],
        correct: "participants",
        explanations: {
            guide: "研讨会人员复数名词。All ________ 结合后文领取结业证书，选 participants（参与者/与会者）。",
            family: "participants (n.复数参与者) | commerce (n.商业) | havoc (n.大破坏) | foremost (adj.最著名的)。",
            details: "workshop participants 意为研讨会参与者。commerce（商业）、havoc（大破坏）均非领取证书的人员主体。",
            cn: "工作坊的所有参与者都将在一天结束时获得一份正式的结业证书。",
            jp: "ワークショップのすべての参加者（participants）には、一日の終わりに正式な出席証明書が授与されます。"
        }
    },
    {
        id: 2,
        target: "opt",
        category: "简单",
        stem: "Customers can ________ to receive their monthly billing statements via email rather than by mail.",
        options: ["opt", "dealt", "abusive", "wreaking"],
        correct: "opt",
        explanations: {
            guide: "情态动词后的动词原形。can 后面接动词原形，结合 opt to do sth（选择做某事），选 opt。",
            family: "opt (v.选择) | dealt (v-ed处理了) | abusive (adj.辱骂的) | wreaking (v-ing造成)。",
            details: "can opt to receive 意为可以选择接收。dealt 为过去式/分词，不能跟在情态动词 can 后面。",
            cn: "顾客可以选择通过电子邮件而非邮寄方式接收其每月账单。",
            jp: "お客様は郵送ではなく電子メールで毎月の請求書を受け取ることを選択（opt）できます。"
        }
    },
    {
        id: 3,
        target: "quite a few",
        category: "简单",
        stem: "The human resources manager noted that ________ job applicants have already submitted their resumes online.",
        options: ["quite a few", "foremost", "climactic", "abusive"],
        correct: "quite a few",
        explanations: {
            guide: "修饰复数名词的量词短语。修饰可数名词复数 applicants（应聘者），表达“相当多的/不少”，选 quite a few。",
            family: "quite a few (短语.相当多的) | foremost (adj.最重要的) | climactic (adj.高潮的) | abusive (adj.辱骂的)。",
            details: "quite a few job applicants 意为相当多的求职者。foremost（最著名的）不能直接修饰复数泛指名词作数量限定。",
            cn: "人力资源经理注意到，相当多的求职者已经在网上提交了简历。",
            jp: "人事マネージャーは、かなり多くの（quite a few）求職者がすでにオンラインで履歴書を提出していることに気付きました。"
        }
    },
    {
        id: 4,
        target: "dealt",
        category: "简单",
        stem: "The customer service representative promptly ________ with the client's inquiry regarding the delayed shipment.",
        options: ["dealt", "opt", "wreaking", "participants"],
        correct: "dealt",
        explanations: {
            guide: "过去时态动词与搭配。dealt with 属于高频动词短语，表达“处理/应对”客户问询，选 dealt（deal的过去式）。",
            family: "dealt (v-ed处理了) | opt (v.选择) | wreaking (v-ing造成) | participants (n.参与者)。",
            details: "dealt with the inquiry 意为处理了质询。opt 是原形，且搭配 for/to而非 with；wreaking 是分词，不能作独词谓语。",
            cn: "客户服务代表迅速处理了客户关于发货延误的问询。",
            jp: "カスタマーサービス担当者は、出荷遅延に関するクライアントの問い合わせに迅速に対処しました（dealt）。"
        }
    },
    {
        id: 5,
        target: "foremost",
        category: "简单",
        stem: "Dr. Evans is recognized as the world's ________ authority on renewable energy technologies.",
        options: ["foremost", "abusive", "climactic", "dealt"],
        correct: "foremost",
        explanations: {
            guide: "最高级别的评价形容词。the world's ________ authority 属于经典搭配，表达“最著名的/首屈一指的”权威，选 foremost。",
            family: "foremost (adj.最著名的/首要的) | abusive (adj.辱骂的) | climactic (adj.高潮的) | dealt (v-ed处理)。",
            details: "foremost authority 意为首屈一指的权威/最著名的权威。abusive（辱骂的）、climactic（高潮的）均不合评价语境。",
            cn: "埃文斯博士被公认为世界上首屈一指的可再生能源技术权威。",
            jp: "エヴァンス博士は、再生可能エネルギー技術における世界第一の（foremost）権威として認められています。"
        }
    },
    {
        id: 6,
        target: "commerce",
        category: "简单",
        stem: "The rapid expansion of electronic ________ has fundamentally changed how consumers buy everyday goods.",
        options: ["commerce", "havoc", "participants", "quite a few"],
        correct: "commerce",
        explanations: {
            guide: "电商专有名词。electronic ________ 属于托业绝高频词组，意为“电子商务”，选 commerce。",
            family: "commerce (n.商业/贸易) | havoc (n.浩劫) | participants (n.参与者) | quite a few (短语.相当多)。",
            details: "electronic commerce (e-commerce) 意为电子商务。havoc（大破坏）、participants（参与者）均非该商业模式专有名词。",
            cn: "电子商务的迅速扩张从根本上改变了消费者购买日常商品的方式。",
            jp: "電子商業（commerce）の急速な拡大は、消費者が日用品を購入する方法を根本的に変えました。"
        }
    },
    {
        id: 7,
        target: "havoc",
        category: "中等",
        stem: "Severe winter storms caused total ________ across the city's public transportation network yesterday.",
        options: ["havoc", "commerce", "participants", "foremost"],
        correct: "havoc",
        explanations: {
            guide: "灾害后果名词考点。caused total ________ 结合暴风雪瘫痪交通，表达造成的严重“混乱/浩劫”，选 havoc。",
            family: "havoc (n.浩劫/大混乱) | commerce (n.商业) | participants (n.参与者) | foremost (adj.首要的)。",
            details: "cause havoc 意为造成严重混乱/浩劫。commerce（商业）、participants（参与者）不能作描述交通瘫痪严重后果的宾语。",
            cn: "昨天的严寒暴风雪给全市的公共交通网络造成了严重的混乱。",
            jp: "昨日の厳しい冬の嵐は、市内の公共交通ネットワーク全体に大混乱（havoc）をもたらしました。"
        }
    },
    {
        id: 8,
        target: "wreaking",
        category: "中等",
        stem: "The unexpected computer virus was ________ havoc on corporate servers before the IT security team contained it.",
        options: ["wreaking", "dealt", "opting", "participating"],
        correct: "wreaking",
        explanations: {
            guide: "高频固定动词短语。was ________ havoc on... 属于托业经典搭配 wreaking havoc on（对……造成严重破坏），选 wreaking。",
            family: "wreaking (v-ing肆虐/造成) | dealt (v-ed处理) | opting (v-ing选择) | participating (v-ing参与)。",
            details: "wreak havoc on 是固定动词短语，意为肆虐/造成破坏。dealt（处理）、opting（选择）均不与 havoc 构成此固定短语。",
            cn: "在 IT 安全团队将其控制之前，这种突如其来的计算机病毒一直在公司服务器上肆虐破坏。",
            jp: "予期せぬコンピュータウイルスは、ITセキュリティチームが抑え込む前に、企業のサーバーに大不具合をもたらしていました（wreaking）。"
        }
    },
    {
        id: 9,
        target: "abusive",
        category: "中等",
        stem: "The company strictly prohibits any employee from using ________ language towards colleagues or clients.",
        options: ["abusive", "climactic", "foremost", "dealt"],
        correct: "abusive",
        explanations: {
            guide: "合规与行为形容词考点。修饰 language，表达严禁使用“辱骂性的/恶劣的”语言，选 abusive。",
            family: "abusive (adj.辱骂的/恶劣的) | climactic (adj.高潮的) | foremost (adj.最著名的) | dealt (v-ed处理)。",
            details: "abusive language 意为辱骂性言语。climactic（高潮的）、foremost（首要的）与职场禁止的不当言语完全无关。",
            cn: "公司严禁任何员工对同事或客户使用辱骂性言语。",
            jp: "同社は、従業員と同僚やクライアントに対して侮辱的な（abusive）言葉を使用することを厳格に禁止しています。"
        }
    },
    {
        id: 10,
        target: "climactic",
        category: "中等",
        stem: "The three-day international conference concluded with a ________ address delivered by the guest of honor.",
        options: ["climactic", "abusive", "wreaking", "commercial"],
        correct: "climactic",
        explanations: {
            guide: "活动总结形容词。修饰 address（演讲），表达闭幕前“高潮性的/顶点的”演讲，选 climactic。",
            family: "climactic (adj.高潮的/顶点的) | abusive (adj.辱骂的) | wreaking (v-ing造成) | commercial (adj.商业的)。",
            details: "climactic address 意为高潮性的演说。注意区分形近词 climatic（气候的）。abusive（辱骂的）在此处不符合礼仪氛围。",
            cn: "为期三天的国际会议以贵宾发表的一场高潮性的演讲圆满结束。",
            jp: "3日間にわたる国際会議は、主宾によって行われた最高潮の（climactic）演説で幕を閉じました。"
        }
    },
    {
        id: 11,
        target: "opt",
        category: "中等",
        stem: "Many small business owners ________ for cloud-based accounting software to streamline their financial record-keeping.",
        options: ["opt", "deal", "abuse", "havoc"],
        correct: "opt",
        explanations: {
            guide: "主谓与固定介词搭配。________ for... 属于高频动宾短语，意为“选择/偏好”云端会计软件，选 opt。",
            family: "opt (v.选择) | deal (v.处理) | abuse (v.滥用) | havoc (n.大破坏)。",
            details: "opt for sth 意为选择某物。deal 与介词 with 搭配（deal with）；abuse、havoc 均不与介词 for 构成选择意图。",
            cn: "许多小企业主选择基于云端的会计软件，以精简其财务记录保存。",
            jp: "多くの小規模事業者主は、財務記録の保管を効率化するためにクラウドベースの会計ソフトウェアを選択して（opt）います。"
        }
    },
    {
        id: 12,
        target: "participants",
        category: "中等",
        stem: "Over three hundred ________ gathered in the main auditorium for the start of the annual medical symposium.",
        options: ["participants", "commercials", "options", "abuses"],
        correct: "participants",
        explanations: {
            guide: "活动集会复数名词。Over three hundred ________ 结合聚集在大礼堂参加医疗座谈会，选 participants（与会者/参与者）。",
            family: "participants (n.复数与会者) | commercials (n.商业广告) | options (n.选项) | abuses (n.滥用)。",
            details: "participants gathered 意为与会者聚集。commercials（广告）、options（选择）均非聚集参会的人员实体。",
            cn: "三百多名与会者聚集在大礼堂，参加年度医学座谈会的开幕。",
            jp: "300人以上の参加者（participants）が、年次医学シンポジウムの開始のためにメインオーディトリアムに集まりました。"
        }
    },
    {
        id: 13,
        target: "wreaking",
        category: "困难",
        stem: "Unprecedented supply chain disruptions ended up ________ havoc on quarterly production estimates.",
        options: ["wreaking", "dealing", "opting", "abusing"],
        correct: "wreaking",
        explanations: {
            guide: "动名词/分词固定搭搭配考点。ended up ________ havoc 结构中，end up doing 后面接 wreaking，构成 wreaking havoc on（对……造成极大毁坏/影响）。",
            family: "wreaking (v-ing造成/肆虐) | dealing (v-ing处理) | opting (v-ing选择) | abusing (v-ing滥用)。",
            details: "wreaking havoc on... 属于托业高阶固强表达，意为对季度生产预测造成极严重的冲击和混乱。其他动词均无法与 havoc 构成此特定表达。",
            cn: "前所未有的供应链中断最终对季度生产预测造成了严重破坏。",
            jp: "前例のないサプライチェーンの中断は、最終的に四半期生産見積もりに大混乱をもたらす（wreaking）ことになりました。"
        }
    },
    {
        id: 14,
        target: "climactic",
        category: "困难",
        stem: "Audience members applauded enthusiastically at the ________ finale of the world tour symphony performance.",
        options: ["climactic", "climactically", "foremost", "dealt"],
        correct: "climactic",
        explanations: {
            guide: "形近词与派生形容词考点。修饰 finale（终曲/高潮结局），表达“高潮迭起的/顶点的”终曲，选形容词 climactic。",
            family: "climactic (adj.高潮的/顶点的) | climactically (adv.高潮地) | foremost (adj.最著名的) | dealt (v-ed处理)。",
            details: "climactic finale 属于托业演出场景固定高阶搭配。climactically 是副词，不能作名词 finale 的前置定语。",
            cn: "在世界巡演交响乐演出的高潮终曲处，观众们热烈掌声。",
            jp: "観客は、世界ツアー交響楽演奏のクライマックス的（climactic）フィナーレで熱狂的に拍手しました。"
        }
    },
    {
        id: 15,
        target: "abusive",
        category: "困难",
        stem: "Management instituted a zero-tolerance policy against workplace ________ to ensure a safe and respectful environment.",
        options: ["abuse", "abusive", "abusively", "wreaking"],
        correct: "abuse",
        explanations: {
            guide: "派生名词宾语考点。against workplace ________ 结构中，介词 against 后面接名词形式 abuse（霸凌/虐待/滥用）。",
            family: "abuse (n.霸凌/滥用/虐待) | abusive (adj.辱骂的) | abusively (adv.辱骂地) | wreaking (v-ing肆虐)。",
            details: "workplace abuse 意为职场霸凌/虐待。abusive 是形容词，不能直接紧跟在介词 against 后面作宾语中心语。",
            cn: "管理层制定了针对职场霸凌的零容忍政策，以确保一个安全和互相尊重的环境。",
            jp: "経営陣は、安全で尊重し合える環境を確保するため、職場のハラスメント/虐待（abuse）に対するゼロ・トレランス方針を制定しました。"
        }
    },
    {
        id: 16,
        target: "dealt",
        category: "困难",
        stem: "Having successfully ________ with the technical glitch, the system administrators resumed regular network operations.",
        options: ["dealt", "dealing", "opted", "wreaked"],
        correct: "dealt",
        explanations: {
            guide: "完成分词状语结构。Having + 过去分词 (Having successfully ________ with...) 结构中，选 deal 的过去分词 dealt。",
            family: "dealt (v-pp处理了) | dealing (v-ing) | opted (v-ed选择) | wreaked (v-ed造成)。",
            details: "Having dealt with... 意为“在成功处理了……之后”。dealing 是现在分词，不能跟在助动词 Having 后面构成完成分词短语。",
            cn: "在成功解决了技术故障后，系统管理员恢复了正常的网络运营。",
            jp: "技術的な不具合に無事対処した（dealt）後、システム管理者は通常のネットワーク運用を再開しました。"
        }
    },
    {
        id: 17,
        target: "foremost",
        category: "困难",
        stem: "First and ________, corporate leaders must ensure that workplace safety standards are rigorously upheld.",
        options: ["foremost", "climactic", "abusive", "commercial"],
        correct: "foremost",
        explanations: {
            guide: "高阶逻辑短语。First and ________ 属于托业写作与阅读绝高频短语，意为“首先/首要的是”，选 foremost。",
            family: "foremost (adj./adv.首要的/最重要的) | climactic (adj.高潮的) | abusive (adj.辱骂的) | commercial (adj.商业的)。",
            details: "First and foremost 意为首先/最重要地。其余选项均无法与 First and 构成固定逻辑递进短语。",
            cn: "首先且最重要的是，公司领导人必须确保工作场所的安全标准得到严格遵守。",
            jp: "何よりもまず（First and foremost）、企業のリーダーは職場の安全基準が厳格に維持されることを確認しなければなりません。"
        }
    },
    {
        id: 18,
        target: "opt",
        category: "困难",
        stem: "Several regional managers ________ out of the voluntary training workshop to focus on urgent quarterly reporting.",
        options: ["opted", "options", "dealt", "wreaked"],
        correct: "opted",
        explanations: {
            guide: "高阶动词短语过去式。________ out of... 属于高阶动词搭配，意为“选择退出/不参加”，选 opted（opt的过去式）。",
            family: "opted (v-ed选择了/退出了) | options (n.选项) | dealt (v-ed处理) | wreaked (v-ed造成)。",
            details: "opt out of sth 意为选择退出某活动。options 是名词，不能在句中作谓语动词；dealt out of 语义不成立。",
            cn: "几位区域经理选择不参加自愿性的培训工作坊，以便专注于紧急的季度报告。",
            jp: "いくつかの地域マネージャーは、緊急の四半期報告に集中するために、任意研修ワークショップへの参加を辞退しました（opted）。"
        }
    }
];