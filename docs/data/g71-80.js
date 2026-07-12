// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag41-50.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "management",
        pos: "名",
        ipa: "/ˈmænɪdʒmənt/",
        cn: "管理，管理层",
        jp: "管理、経営、経営陣",
        family: "manage / manager / managerial / manageable",
        tips: "托业高频词。作名词可指抽象的“管理”行为，也常作集体名词指代公司的“管理层”（如 upper management 高层管理，project management 项目管理）。",
        desc: "The management team is strong."
    },
    {
        word: "resource",
        pos: "名",
        ipa: "/ˈriːsɔːrs/",
        cn: "资源，财力",
        jp: "資源、資産、財源",
        family: "resources / resourceful / resourcefulness",
        tips: "常以复数形式 resources 出现。常见职场搭配有 human resources（人力资源，简称 HR）和 allocation of resources（资源分配）。",
        desc: "Water is a natural resource."
    },
    {
        word: "base",
        pos: "名/動",
        ipa: "/beɪs/",
        cn: "基础，基地；基于，把总部设在",
        jp: "土台、基地；～に基づかせる",
        family: "based / basic / basically / baseline",
        tips: "作动词常考被动语态 be based in/at，表示公司总部、办公地点或工厂设立在某处；短语 be based on 则表示“基于……的数据/事实”。",
        desc: "The base is made of wood."
    },
    {
        word: "currently",
        pos: "副",
        ipa: "/ˈkɜːrəntli/",
        cn: "目前，现在",
        jp: "現在、今は",
        family: "current / currency",
        tips: "托业阅读 Part 5 的核心时态标志词，相当于 at present。常用于现在进行时结构中（如 is currently reviewing），表示当前正在发生的动作或状态。",
        desc: "I am currently busy."
    },
    {
        word: "rate",
        pos: "名/動",
        ipa: "/reɪt/",
        cn: "比率，率；费用，价格；评估",
        jp: "割合、比率；料金；評価する",
        family: "rates / rating / rated / ratio",
        tips: "商务及差旅高频词。作名词常用来表达特定的标准收费，如 room rate（房价）、hourly rate（时薪）。在财务中常考 interest rate（利率）。",
        desc: "The interest rate is low."
    },
    {
        word: "financial",
        pos: "形",
        ipa: "/faɪˈnænʃl/",
        cn: "财务的，金融的",
        jp: "財務の、金融の",
        family: "finance / financially / financier",
        tips: "商务财务场景绝对核心词。常考前置定语修饰名词，如 financial advisor（财务顾问）、financial statement（财务报表）、financial constraints（财政限制）。",
        desc: "He gives financial advice."
    },
    {
        word: "consider",
        pos: "動",
        ipa: "/kənˈsɪdər/",
        cn: "考虑，思考；认为",
        jp: "検討する、よく考える；みなす",
        family: "consideration / considerable / considerably / considerate",
        tips: "动词后接名词、代词或动名词（consider doing sth，注意不接不定式）。其派生形容词 considerable 意为“相当大/多的”，副词 considerably 意为“显著地”，皆为高阶考点。",
        desc: "Please consider my idea."
    },
    {
        word: "install",
        pos: "動",
        ipa: "/ɪnˈstɔːl/",
        cn: "安装，设置",
        jp: "設置する、インストールする",
        family: "installation / installer / installed",
        tips: "常考于IT或办公设施维护场景，如 install a new software system（安装新软件系统）。其名词 installation 常见于 installation fee（安装费）。",
        desc: "Install the software now."
    },
    {
        word: "allow",
        pos: "動",
        ipa: "/əˈlaʊ/",
        cn: "允许，容许；使得",
        jp: "許可する、可能にする",
        family: "allowance / allowable / allowed",
        tips: "核心经典句型为 allow sb to do sth（允许某人做某事），在被动语态中表现为 be allowed to do sth。名词 allowance 在商务场景中常指津贴或额度。",
        desc: "They allow pets here."
    },
    {
        word: "colleague",
        pos: "名",
        ipa: "/ˈkɑːliːɡ/",
        cn: "同事，同僚",
        jp: "同僚、仲間",
        family: "colleagues",
        tips: "日常职场高频名词，指在同一家公司或同一行业共事的人。在听力或阅读中常与 co-worker 或 team member 进行同义替换。",
        desc: "He is my colleague."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "management",
        category: "简单",
        stem: "The upper ________ decided to implement a new remote work policy starting next fiscal quarter.",
        options: ["management", "financial", "allow", "consider"],
        correct: "management",
        explanations: {
            guide: "形容词后的名词中心语。the upper（高层的）后面需要搭配一个名词作句子的核心主语，结合后文做出决策的语境，选择 management（管理层）。",
            family: "management (n.管理层) | financial (adj.财务的) | allow (v.允许) | consider (v.考虑)。",
            details: "upper management 为托业高频固定搭配，指代公司高层管理人员。其他词汇词性不符或无法作为发出决策动作的主语。",
            cn: "高层管理人员决定从下一个财政季度开始实施新的远程办公政策。",
            jp: "経営高層部（management）は、次の会計四半期から新しいリモートワーク制度を導入することを決定しました。"
        }
    },
    {
        id: 2,
        target: "resource",
        category: "简单",
        stem: "Please contact the human ________ department if you need to update your direct deposit information.",
        options: ["resource", "colleague", "rate", "install"],
        correct: "resource",
        explanations: {
            guide: "复合名词定语修饰及职场场景。空格与 human 组合修饰 department，在商务求职和企业行政语境下，选择 resource（资源）。",
            family: "resource (n.资源) | colleague (n.同事) | rate (n.比率/费用) | install (v.安装)。",
            details: "human resource department（常以单数或复数形式 resources 考核）代表人力资源部。更新薪资直存账户信息必然需要联系该部门。",
            cn: "如果您需要更新您的工资直存信息，请联系人力资源部。",
            jp: "口座振込情報の更新が必要な場合は、人事（resource）部までご連絡ください。"
        }
    },
    {
        id: 3,
        target: "base",
        category: "简单",
        stem: "The consulting firm is ________ in London, but it has satellite offices across Europe and Asia.",
        options: ["based", "current", "allowed", "rated"],
        correct: "based",
        explanations: {
            guide: "被动语态及固定短语搭配。系动词 is 后面缺少一个过去分词构成被动结构，结合地点 London，选择表示“总部位于”的 based。",
            family: "based (v-ed基于/总部位于) | current (adj.当前的) | allowed (v-ed被允许) | rated (v-ed被评估)。",
            details: "be based in + 地点是标准的商业英语表达，意为总部设在某地。current 是形容词，不能直接跟在 is 后面搭配介词 in 表达该含义。",
            cn: "这家咨询公司的总部位于伦敦，但在欧洲和亚洲各地设有分支机构。",
            jp: "そのコンサルティング会社はロンドンに本拠を置いて（based）いますが、ヨーロッパとアジア全域にサテライトオフィスを持っています。"
        }
    },
    {
        id: 4,
        target: "currently",
        category: "简单",
        stem: "Ms. Tanaka is ________ reviewing the contractual terms to ensure all legal compliance.",
        options: ["currently", "financial", "consider", "management"],
        correct: "currently",
        explanations: {
            guide: "现在进行时结构中的副词修饰。空格位于系动词 is 和现在分词 reviewing 之间，需要填入一个副词修饰动作，选 currently。",
            family: "currently (adv.目前) | financial (adj.财务的) | consider (v.考虑) | management (n.管理)。",
            details: "is currently reviewing 构成标准的现在进行时态，currently 表示“目前、现在”。其他选项均为形容词、动词或名词，无法在此充当状语。",
            cn: "田中女士目前正在审查合同条款，以确保完全符合法律法规。",
            jp: "田中さんは、すべての法的コンプライアンスを確実にするために、現在（currently）契約条件をレビューしています。"
        }
    },
    {
        id: 5,
        target: "rate",
        category: "简单",
        stem: "The conference attendees are eligible for a discounted room ________ at the Grand Plaza Hotel.",
        options: ["rate", "resource", "colleague", "base"],
        correct: "rate",
        explanations: {
            guide: "复合名词及酒店住宿场景词。空格位于定语名词 room 后面，此处需要一个名词组成复合名词表达“房间价格”，选 rate。",
            family: "rate (n.价格/费用) | resource (n.资源) | colleague (n.同事) | base (n.基础)。",
            details: "room rate 是差旅场景下的绝对核心搭配，指代酒店的房间费用。discounted room rate 意为打折的房价，符合大会参会者的福利语境。",
            cn: "会议参加者有资格在格兰德广场酒店享受打折的房间价格。",
            jp: "会議の参加者は、グランドプラザホテルでの割引客室料金（rate）を利用する資格があります。"
        }
    },
    {
        id: 6,
        target: "financial",
        category: "简单",
        stem: "The chief executive officer requested a copy of the quarterly ________ statement before the board meeting.",
        options: ["financial", "install", "allow", "currently"],
        correct: "financial",
        explanations: {
            guide: "名词中心语前的形容词修饰。空格位于季度限定词 quarterly 和名词 statement 之间，需要填入一个形容词，选 financial。",
            family: "financial (adj.财务的) | install (v.安装) | allow (v.允许) | currently (adv.目前)。",
            details: "financial statement 属于高级商务会计专属名词，意为“财务报表”。首席执行官在董事会会议前审阅财务报表符合标准的商业运作逻辑。",
            cn: "首席执行官在董事会会议前索取了一份季度财务报表的副本。",
            jp: "最高経営責任者は、取締役会の前に四半期財務（financial）諸表のコピーを要求しました。"
        }
    },
    {
        id: 7,
        target: "consider",
        category: "中等",
        stem: "The product development committee will ________ the proposal thoroughly before making a final decision.",
        options: ["consider", "install", "allow", "rate"],
        correct: "consider",
        explanations: {
            guide: "情态动词后的核心动词辨析。will 后面需要接动词原形作为谓语，结合宾语 the proposal（提案）和副词 thoroughly（彻底地），选 consider（考虑/审议）。",
            family: "consider (v.考虑) | install (v.安装) | allow (v.允许) | rate (v.评估)。",
            details: "consider the proposal thoroughly 意为彻底审议该提案，在做出最终决定前必须经过这个流程。install 和 allow 均无法与提案形成合理动宾搭配。",
            cn: "产品开发委员会将在做出最终决定之前彻底考虑该提案。",
            jp: "製品開発委員会は、最終決定を下す前に、その提案を慎重に検討（consider）する予定です。"
        }
    },
    {
        id: 8,
        target: "install",
        category: "中等",
        stem: "A team of IT specialists will arrive on Friday to ________ the upgraded security software across all networks.",
        options: ["install", "consider", "allow", "base"],
        correct: "install",
        explanations: {
            guide: "不定式符号后的动词原形。to 后面需要接动词原形表目的，根据主语 IT specialists 和宾语 security software，选 install（安装）。",
            family: "install (v.安装) | consider (v.考虑) | allow (v.允许) | base (v.基于)。",
            details: "在IT系统维护场景中，安装软件系统是标准动作。to install the upgraded security software 意为安装升级后的安全软件。",
            cn: "一个由IT专家组成的团队将于周五抵达，在所有网络中安装升级后的安全软件。",
            jp: "ITの専門家チームが金曜日に到着し、すべてのネットワークにアップグレードされたセキュリティソフトウェアをインストール（install）する予定です。"
        }
    },
    {
        id: 9,
        target: "allow",
        category: "中等",
        stem: "The newly updated security guidelines will ________ authorized personnel to enter the facility after hours.",
        options: ["allow", "manage", "rate", "consider"],
        correct: "allow",
        explanations: {
            guide: "高频动词句型识别。空格后的结构为名词（authorized personnel）+ 动词不定式（to enter），只有 allow 能构成 allow sb to do sth 结构。",
            family: "allow (v.允许) | manage (v.管理/设法) | rate (v.评估) | consider (v.考虑)。",
            details: "allow sb to do sth 表示允许某人做某事。虽然 manage 也可以跟不定式，但结构是 manage to do sth，中间不能直接带此类宾语。consider 后面通常接动名词。",
            cn: "新更新的安全准则将允许获得授权的人员在工作时间之后进入设施。",
            jp: "新しく改定されたセキュリティガイドラインにより、許可された職員は営業時間外でも施設に立ち入る（allow）ことができるようになります。"
        }
    },
    {
        id: 10,
        target: "colleague",
        category: "中等",
        stem: "Dr. Evans collaborated with a close ________ from the engineering department to publish the white paper.",
        options: ["colleague", "management", "resource", "rate"],
        correct: "colleague",
        explanations: {
            guide: "不定冠词与介词短语修饰下的名词辨析。空格前有 a close（一位亲密的），后有 from the engineering department（来自工程部），提示需填入指代人的可数名词单数，选 colleague。",
            family: "colleague (n.同事) | management (n.管理/层) | resource (n.资源) | rate (n.费用)。",
            details: "collaborated with a close colleague 意为与一位亲密的同事合作。其他三个选项均为抽象或非人称名词，不能与 close 搭配指代共事的人。",
            cn: "埃文斯博士与工程部的一位密切同事合作发表了这篇白皮书。",
            jp: "エヴァンス博士は、白書を発行するために、エンジニアリング部門の親しい同僚（colleague）と協力しました。"
        }
    },
    {
        id: 11,
        target: "financial",
        category: "中等",
        stem: "Thanks to strong retail sales, the subsidiary company is now ________ independent from its parent firm.",
        options: ["financially", "financial", "finance", "current"],
        correct: "financially",
        explanations: {
            guide: "修饰形容词的副词用法。空格位于系动词 is 和形容词 independent（独立的）之间，此位置必须填入副词作状语，选 financially。",
            family: "financially (adv.财务上地) | financial (adj.财务的) | finance (n./v.金融/资助) | current (adj.当前的)。",
            details: "financially independent 为高端商业陈述中的习惯搭配，表示在财务上实现独立。financial 是形容词，不能用来修饰另一个形容词 independent。",
            cn: "得益于强劲的零售业绩，这家子公司现在在财务上已经独立于其母公司。",
            jp: "好調な小売売上のおかげで、その子会社は現在、親会社から財務的に（financially）独立しています。"
        }
    },
    {
        id: 12,
        target: "management",
        category: "中等",
        stem: "Applicants applying for the supervisor position must possess extensive ________ experience.",
        options: ["managerial", "management", "manager", "manage"],
        correct: "managerial",
        explanations: {
            guide: "名词前的形容词修饰语。空格位于形容词 extensive（广泛的）和名词 experience 之间，通常需要填入一个专门的形容词来界定经验的属性，选 managerial。",
            family: "managerial (adj.管理上的/经理的) | management (n.管理) | manager (n.经理) | manage (v.管理)。",
            details: "managerial experience（管理经验）是托业职场招聘场景的标志性词组。尽管 management 也可以作名词定语，但当存在专属形容词 managerial 时，应优先选择形容词。",
            cn: "应聘主管职位的人员必须具备丰富的管理经验。",
            jp: "スーパーバイザー職に応募する候補者は、広範な管理（managerial）経験を有していなければなりません。"
        }
    },
    {
        id: 13,
        target: "consider",
        category: "困难",
        stem: "The logistics provider achieved ________ savings in fuel costs after optimizing their delivery routes.",
        options: ["considerable", "consider", "consideration", "considerably"],
        correct: "considerable",
        explanations: {
            guide: "名词中心语前的核心形容词。空格修饰复数名词 savings（节约的款项/额度），此位置需要填入一个表示数量或程度的形容词，选 considerable。",
            family: "considerable (adj.相当大/多的) | consider (v.考虑) | consideration (n.考虑) | considerably (adv.显著地)。",
            details: "considerable savings 意为相当大的一笔节省额，是商务汇报的常用词。considerably 是副词，不能直接修饰名词 savings。",
            cn: "在优化了配送路线之后，这家物流供应商在燃料成本上实现了相当大的节省。",
            jp: "物流プロバイダーは、配送ルートを最適化した後、燃料費の大幅な（considerable）削減を達成しました。"
        }
    },
    {
        id: 14,
        target: "install",
        category: "困难",
        stem: "The prompt ________ of the server equipment prevented any potential downtime during the system migration.",
        options: ["installation", "install", "installer", "installed"],
        correct: "installation",
        explanations: {
            guide: "定冠词和形容词后的名词主语。空格前有 standard 限定词 The 和形容词 prompt（迅速的），此处必须填入名词作主语，选 installation。",
            family: "installation (n.安装) | install (v.安装) | installer (n.安装工) | installed (adj.已安装的)。",
            details: "The prompt installation 意为“迅速的安装”。虽然 installer 也是名词，但它指代安装人员（人），无法与 server equipment（服务器设备）进行合理的语意拼接。",
            cn: "服务器设备的迅速安装避免了系统迁移过程中任何潜在的停机时间。",
            jp: "サーバー機器の迅速な設置（installation）により、システム移行中の潜在的なダウンタイムが回避されました。"
        }
    },
    {
        id: 15,
        target: "resource",
        category: "困难",
        stem: "The board praised the newly appointed branch manager for being exceptionally ________ under budget constraints.",
        options: ["resourceful", "resource", "resources", "base"],
        correct: "resourceful",
        explanations: {
            guide: "系动词后的副词修饰与表语成分。空格前有系动词 being 和程度副词 exceptionally（异常地），此处必须填入一个形容词来修饰经理的特质，选 resourceful。",
            family: "resourceful (adj.足智多谋的/善找资源的) | resource (n.资源) | resources (n.资源复数) | base (n.基础)。",
            details: "resourceful 用于形容职场人士时，表示擅长利用现有条件克服困难、解决问题。在预算受限（budget constraints）的情况下，足智多谋（resourceful）是极高的赞誉。",
            cn: "董事会赞扬了新任命的分店经理，因为他在预算有限的情况下表现得异常足智多谋。",
            jp: "取締役会は、予算に制約がある中で、新しく任命された支店長が非常に機転が利く（resourceful）人物であることを称賛しました。"
        }
    },
    {
        id: 16,
        target: "allow",
        category: "困难",
        stem: "Passengers are reminded that exceeding the standard baggage ________ will result in additional service charges.",
        options: ["allowance", "allow", "allowed", "allowing"],
        correct: "allowance",
        explanations: {
            guide: "机场差旅高阶复合名词。空格位于名词 baggage 之后，共同接受 standard 的修饰并作为 exceeding 的宾语，需要填入名词形式 allowance。",
            family: "allowance (n.额度/津贴) | allow (v.允许) | allowed (v-ed被允许的) | allowing (part.允许)。",
            details: "baggage allowance 是托业听力及阅读第一、五部分常考的特定商业与交通术语，意为“行李额度”。超过行李额度会导致产生额外费用。",
            cn: "乘客被提醒，超过标准行李额度将导致产生额外的服务费用。",
            jp: "乗客の皆様は、標準の手荷物許容量（allowance）を超えると、追加の手数料が発生することをご注意ください。"
        }
    },
    {
        id: 17,
        target: "currently",
        category: "困难",
        stem: "Under ________ regulatory frameworks, digital medical providers must store patient records encryptedly.",
        options: ["current", "currently", "consider", "colleague"],
        correct: "current",
        explanations: {
            guide: "介词后的名词前置定语。空格位于介词 Under 之后，名词短语 regulatory frameworks（监管框架）之前，需要填入形容词修饰名词，选 current。",
            family: "current (adj.现行的/当前的) | currently (adv.目前) | consider (v.考虑) | colleague (n.同事)。",
            details: "under current regulatory frameworks 意为在现行的监管框架下。currently 是副词，不能在此位置直接修饰复数名词结构 frameworks。",
            cn: "在现行的监管框架下，数字医疗服务提供商必须加密存储患者的病历记录。",
            jp: "現行の（current）規制枠組みの下では、デジタル医療プロバイダーは患者の記録を暗号化して保存しなければなりません。"
        }
    },
    {
        id: 18,
        target: "consider",
        category: "困难",
        stem: "Market demand for energy-efficient appliances has increased ________ over the past fiscal year.",
        options: ["considerably", "considerable", "consider", "consideration"],
        correct: "considerably",
        explanations: {
            guide: "不及物动词后的状语修饰。句子的核心谓语动词是 has increased（已经增长，不及物），后面需要填入一个副词来修饰增长的幅度，选 considerably。",
            family: "considerably (adv.显著地/相当大地) | considerable (adj.相当大的) | consider (v.考虑) | consideration (n.考虑)。",
            details: "increase considerably 属于高端商务数据汇报的常用词组，意为“显著增长”。considerable 是形容词，不能用来修饰动词过去分词 increased。",
            cn: "在过去的一个财政年度中，市场对节能家电的需求显著增长。",
            jp: "過去の会計年度において、省エネ家電に対する市場の需要は著しく（considerably）増加しました。"
        }
    }
];