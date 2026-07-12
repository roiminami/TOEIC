// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag41-50.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "confirm",
        pos: "動",
        ipa: "/kənˈfɜːrm/",
        cn: "确认，证实",
        jp: "確認する、確証する",
        family: "confirmation / confirmed / confirming",
        tips: "商务书信与日常办公的高频动词，意为对已有的预订、安排或会议进行最终确认（例如：confirm a reservation / confirm the meeting schedule）。名词 confirmation 常考 written confirmation（书面确认）。",
        desc: "Please confirm your flight details."
    },
    {
        word: "note",
        pos: "動/名",
        ipa: "/noʊt/",
        cn: "注意，留意；笔记，便签",
        jp: "注意する、指摘する；メモ、ノート",
        family: "noted / notable / notice / notation",
        tips: "常用于祈使句结构 'Please note that...' 引导宾语从句提示重要事项。作名词时常指短笺、备忘录或通知，高频搭配有 take notes（记笔记）和 leave a note（留便条）。",
        desc: "Please note the departure time."
    },
    {
        word: "package",
        pos: "名/動",
        ipa: "/ˈpækɪdʒ/",
        cn: "包裹，包装；一揽子方案",
        jp: "小包、荷物；パッケージ、一括案",
        family: "packaging / packed / packer",
        tips: "物流与人事场景的核心词汇。除了指邮寄的“包裹”，在人力资源或商务谈判中经常指代一揽子福利或薪酬组合，如 compensation package（薪酬福利组合）。",
        desc: "The package arrived this morning."
    },
    {
        word: "document",
        pos: "名/動",
        ipa: "/ˈdɑːkjumənt/",
        cn: "文件，公文；记录，记载",
        jp: "書類、文書；記録する、文書化する",
        family: "documentation / documentary / documented",
        tips: "办公日常场景词。作名词常考 confidential document（机密文件）或 sign a document（签署文件）。作动词时指用文件或证据记录下来，其不可数名词形式 documentation（证明文件）也极常考。",
        desc: "Please sign this official document."
    },
    {
        word: "mail",
        pos: "名/動",
        ipa: "/meɪl/",
        cn: "邮件，邮政；邮寄",
        jp: "郵便、メール；郵送する",
        family: "mailing / mailed / mailbox",
        tips: "职场与物流高频词。常用作动词表示寄出信件或包裹（如 mail a letter）。名词形式常用于复合名词中，例如 mailing address（邮寄地址）和 express mail（快递）。",
        desc: "I will mail the contract today."
    },
    {
        word: "extra",
        pos: "形/名/副",
        ipa: "/ˈekstrə/",
        cn: "额外的，附加的；额外收费的事物",
        jp: "追加の、余分の；余分なもの",
        family: "extraordinary / extract",
        tips: "常作形容词修饰费用、时间或材料，表示在原有基础上的追加，如 extra charge（额外收费）、extra time（额外时间），与 additional 互为近义词。派生词 extraordinary 意为非凡的。",
        desc: "We need an extra copy."
    },
    {
        word: "firm",
        pos: "名/形",
        ipa: "/fɜːrm/",
        cn: "公司，商号；坚固的，坚定的",
        jp: "会社、事務所；堅い、確固たる",
        family: "firmly / firmness",
        tips: "托业专属商务词。常指合伙制或提供专业服务的公司，如 law firm（律师事务所）和 accounting firm（会计师事务所）。作形容词时常考 firm commitment（坚定的承诺）或 firm grip（紧握）。",
        desc: "He works for a law firm."
    },
    {
        word: "publish",
        pos: "動",
        ipa: "/ˈpʌblɪʃ/",
        cn: "出版，发行，发表，公布",
        jp: "出版する、掲載する、発表する",
        family: "publication / publisher / publishing",
        tips: "传媒与公司行政场景核心词。常指出版书籍、刊发研究报告（publish a report）或向公众正式公布政策、新规。其名词形式 publication 常考于印刷品发行语境。",
        desc: "The company will publish a report."
    },
    {
        word: "located",
        pos: "形",
        ipa: "/ˈloʊkeɪtɪd/",
        cn: "位于……的，坐落于……的",
        jp: "位置する、ある",
        family: "locate / location / local",
        tips: "通常与系动词搭配构成 be located in/at/on 结构，用于描述公司总部、分店、工厂或设施的具体地理位置。其核心动词 locate 意为找出……的位置，名词 location 意为地点。",
        desc: "The office is located downtown."
    },
    {
        word: "broadcast",
        pos: "動/名",
        ipa: "/ˈbrɔːdkæst/",
        cn: "广播，播放，播送",
        jp: "放送する、放映する；放送",
        family: "broadcasting / broadcaster",
        tips: "注意其过去式与过去分词通常形式不变（仍为 broadcast）。在商务听力与阅读中，常指电视/电台的节目播放，或者公司内部视讯会议、信息的全员广播（如 live broadcast 现场直播）。",
        desc: "They will broadcast the news live."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "confirm",
        category: "简单",
        stem: "The administrative assistant called the hotel to ________ our room reservations for the annual convention.",
        options: ["confirm", "publish", "mail", "document"],
        correct: "confirm",
        explanations: {
            guide: "动词不定式引导目的状语。called the hotel to 后面需要接动词原形来表达打电话的目的，结合宾语 room reservations（房间预订），选择 confirm。",
            family: "confirm (v.确认) | publish (v.出版) | mail (v.邮寄) | document (v.记录/n.文件)。",
            details: "confirm a reservation 是极为经典的商务住宿场景固定搭配，意为确认预订。其他选项与预订房间组合在语义上不通顺。",
            cn: "行政助理打电话给酒店，以确认我们年度大会的房间预订。",
            jp: "行政アシスタントは、年次総会の客室予約を確認（confirm）するためにホテルに電話をかけました。"
        }
    },
    {
        id: 2,
        target: "note",
        category: "简单",
        stem: "Please ________ that the regional headquarters will be closed next Monday due to the national holiday.",
        options: ["note", "extra", "broadcast", "firm"],
        correct: "note",
        explanations: {
            guide: "祈使句动词原形及从句引导。空格位于句首，后接由 that 引导的完整宾语从句，起到提示和提醒员工的作用，选动词原形 note。",
            family: "note (v.注意/n.笔记) | extra (adj.额外的) | broadcast (v./n.广播) | firm (n.公司/adj.坚固的)。",
            details: "Please note that...（请注意……）是职场邮件和公告中绝对高频的固定句型。extra 为形容词，firm 和 broadcast 在此处不符合引导通知的语境。",
            cn: "请注意，由于国家法定节假日，区域总部下周一将关闭。",
            jp: "祝日のため、来週の月曜日は地域本部が休館となりますのでご注意（note）ください。"
        }
    },
    {
        id: 3,
        target: "package",
        category: "简单",
        stem: "The overnight courier delivered a large ________ to the reception desk just a few minutes ago.",
        options: ["package", "confirm", "located", "publish"],
        correct: "package",
        explanations: {
            guide: "不定冠词与形容词后的名词辨析。空格前有 a large，提示此处必须填入一个可数名词单数形式，充当 delivered 的宾语，选 package。",
            family: "package (n.包裹) | confirm (v.确认) | located (adj.位于) | publish (v.出版)。",
            details: "根据快递员（courier）和交付（delivered）的上下文语境，只有名词 package（包裹）最符合商务物流的场景逻辑。其他选项词性或语意均不符。",
            cn: "特快专递员几分钟前把一个大包裹送到了接待处。",
            jp: "夜間宅配便の業者が、数分前に受付に大きな小包（package）を届けました。"
        }
    },
    {
        id: 4,
        target: "document",
        category: "简单",
        stem: "All new employees must read the policy ________ thoroughly before signing their employment contracts.",
        options: ["document", "mail", "extra", "broadcast"],
        correct: "document",
        explanations: {
            guide: "复合名词修饰语及动宾搭配。空格位于名词 policy 之后，共同接受定冠词 the 的修饰，并作为 read 的宾语，应填入名词 document。",
            family: "document (n.文件) | mail (n.邮件/v.邮寄) | extra (adj.额外的) | broadcast (n./v.广播)。",
            details: "policy document 意为政策文件。新员工在签合同前需要仔细阅读该文件。mail 和 broadcast 无法与 policy 组合成符合此类职场规范的词组。",
            cn: "所有新员工在签署雇佣合同之前，必须彻底阅读该政策文件。",
            jp: "すべての新入社員は、雇用契約書に署名する前に、ポリシー文書（document）を熟読しなければなりません。"
        }
    },
    {
        id: 5,
        target: "mail",
        category: "简单",
        stem: "The marketing department plans to ________ the promotional brochures to all registered clients tomorrow.",
        options: ["mail", "note", "firm", "package"],
        correct: "mail",
        explanations: {
            guide: "动词不定式结构。plans to 后面缺少一个动词原形作核心谓语，结合介词 to 构成的动宾短语机制，选动词 mail。",
            family: "mail (v.邮寄/n.邮件) | note (v.注意) | firm (n.公司) | package (v.包装/n.包裹)。",
            details: "mail sth to sb 意为把某物邮寄给某人，是商务宣传材料分发的标准表达。虽然 package 也能作动词，但它不能与后面的介词 to 形成“寄送”的顺畅语意。",
            cn: "市场部计划明天将宣传手册邮寄给所有注册客户。",
            jp: "マーケティング部門は、明日、すべての登録クライアントにプロモーション用パンフレットを郵送（mail）する計画です。"
        }
    },
    {
        id: 6,
        target: "extra",
        category: "简单",
        stem: "If you need an ________ copy of the financial report, please inform the supervisor immediately.",
        options: ["extra", "confirm", "publish", "document"],
        correct: "extra",
        explanations: {
            guide: "不定冠词与名词之间的定语修饰。空格前是不定冠词 an（注意是以元音音素开头），后是单数名词 copy，空格处需要填入一个形容词，选 extra。",
            family: "extra (adj.额外的) | confirm (v.确认) | publish (v.出版) | document (n.文件/v.记录)。",
            details: "an extra copy 意为额外的一份拷贝/副本，符合办公用品或资料分发的惯用场景。其他选项均为动词或名词，且不以元音音素开头，故排除。",
            cn: "如果您需要一份额外的财务报告副本，请立即通知主管。",
            jp: "財務報告書の追加の（extra）コピーが必要な場合は、すぐに上司に知らせてください。"
        }
    },
    {
        id: 7,
        target: "firm",
        category: "中等",
        stem: "Ms. Green recently left her previous job to join a prestigious international law ________ downtown.",
        options: ["firm", "package", "broadcast", "mail"],
        correct: "firm",
        explanations: {
            guide: "名词词组及特定职场机构辨析。空格前有形容词 international 和名词 law，此处需要填入一个名词来完成这家机构的名词属性短语，选 firm。",
            family: "firm (n.公司) | package (n.包裹) | broadcast (n.广播) | mail (n.邮件)。",
            details: "law firm 为商务英语中固定的专属名词，指“律师事务所”。其他名词如 package（包裹）、broadcast（广播）均无法与 law 搭配成合理的商业机构。",
            cn: "格林女士最近辞去了之前的工作，加入了市中心一家颇负盛名的国际律师事务所。",
            jp: "グリーンさんは最近、前職を辞め、ダウンタウンにある有名な国際法律事務所（firm）に入社しました。"
        }
    },
    {
        id: 8,
        target: "publish",
        category: "中等",
        stem: "The research institute hopes to ________ its latest findings on market trends early next month.",
        options: ["publish", "located", "note", "extra"],
        correct: "publish",
        explanations: {
            guide: "动词及宾宾搭配辨析。hopes to 后面需要接动词原形，结合其后的宾语 its latest findings（其最新研究发现），选择具有发表含义的动词 publish。",
            family: "publish (v.出版/发表) | located (adj.位于) | note (v.注意) | extra (adj.额外的)。",
            details: "publish findings / reports 是科研与企业日常发布高频搭配，意为发表研究结果。located 和 extra 词性不符，note 在此语意不及 publish 准确精准。",
            cn: "该研究所希望在下个月初发表关于市场趋势的最新研究发现。",
            jp: "その研究所は、来月初旬に市場動向に関する最新の知見を発表（publish）したいと考えています。"
        }
    },
    {
        id: 9,
        target: "located",
        category: "中等",
        stem: "The newly built conference center is conveniently ________ within walking distance of two major hotels.",
        options: ["located", "confirm", "document", "firm"],
        correct: "located",
        explanations: {
            guide: "系动词后的形容词表语。空格前有系动词 is 和修饰副词 conveniently，此处需要一个形容词或分词来描述建筑物的地理位置状态，选 located。",
            family: "located (adj.位于……的) | confirm (v.确认) | document (n.文件) | firm (adj.坚固的/n.公司)。",
            details: "be conveniently located 属于托业阅读及听力第三、四部分极高频的固定搭配，意为交通便利/坐落于便利的位置。其他词汇在此语法结构下均不成立。",
            cn: "新建 Conference 中心位置十分便利，步行即可到达两家主要酒店。",
            jp: "新しく建設された会議センターは、2つの主要ホテルの徒歩圏内にあり、非常に便利な場所（located）にあります。"
        }
    },
    {
        id: 10,
        target: "broadcast",
        category: "中等",
        stem: "The local radio network will ________ the mayor's speech regarding economic reforms tomorrow night.",
        options: ["broadcast", "package", "mail", "publish"],
        correct: "broadcast",
        explanations: {
            guide: "情态动词后的动词辨析。will 后面要求接动词原形，主语是 radio network（无线电广播网），根据媒介特征选择动词 broadcast。",
            family: "broadcast (v.广播/播送) | package (v.包装) | mail (v.邮寄) | publish (v.出版)。",
            details: "电台网络（radio network）发出的动作通常是“播送、广播（broadcast）”演讲，而不是邮寄（mail）或包装（package）。",
            cn: "当地广播网络将于明晚播送市长关于经济改革的讲话。",
            jp: "地元のラジオ放送局は、明晩、経済改革に関する市長の演説を放送（broadcast）する予定です。"
        }
    },
    {
        id: 11,
        target: "confirm",
        category: "中等",
        stem: "We are currently awaiting official written ________ from the supplier before distributing the products.",
        options: ["confirmation", "confirming", "confirm", "confirmed"],
        correct: "confirmation",
        explanations: {
            guide: "形容词后的名词中心语。空格前有形容词 official（官方的）和 written（书面的），此位置必须填入一个名词来作为 awaiting 的宾语中心语，选 confirmation。",
            family: "confirmation (n.确认) | confirming (part.确认中) | confirm (v.确认) | confirmed (adj.确认的)。",
            details: "written confirmation 是高阶商务采购或物流的固定短语，表示书面确认函/件。其他派生词词性无法在句中充当名词中心语。",
            cn: "在分销产品之前，我们目前正在等待供应商的官方书面确认。",
            jp: "製品を流通させる前に、現在、サプライヤーからの正式な書面による確認（confirmation）を待っています。"
        }
    },
    {
        id: 12,
        target: "note",
        category: "中等",
        stem: "Professor Vance is a highly ________ authority on international trade laws and corporate regulations.",
        options: ["noted", "note", "notable", "notation"],
        correct: "noted",
        explanations: {
            guide: "副词修饰过去分词作定语。空格位于程度副词 highly 之后，名词 authority（权威/专家）之前，需要填入一个常用来形容人声望的形容词或过去分词，选 noted。",
            family: "noted (adj.著名的/知名的) | note (v.注意) | notable (adj.值得注意的) | notation (n.符号/记号)。",
            details: "highly noted 相当于 highly respected 或 famous，常用来修饰专家或学者。notable 虽然也是形容词，但它多用于修饰事物（如变动、成就），修饰人时以 noted 最佳。",
            cn: "万斯教授是一位在国际贸易法和公司条令方面享有盛誉的权威专家。",
            jp: "ヴァンス教授は、国際貿易法と企業規制に関する非常に高名な（noted）権威者です。"
        }
    },
    {
        id: 13,
        target: "package",
        category: "困难",
        stem: "The factory has introduced automated equipment to speed up the ________ process of fragile electronics.",
        options: ["packaging", "package", "packer", "packed"],
        correct: "packaging",
        explanations: {
            guide: "复合名词定语成分。空格前有定冠词 the，后有名词 process（流程），此位置需要填入一个动名词或名词充当定语，指代动作概念的“包装”，选 packaging。",
            family: "packaging (n.包装物/包装工作) | package (n.小包/一揽子方案) | packer (n.包装工) | packed (adj.拥挤的)。",
            details: "packaging process 意为包装流程。虽然 package 也是名词，但它指代具体的某个包裹物品，而表示“流水线包装过程/动作”时必须使用不可数名词 packaging。",
            cn: "该工厂引进了自动化设备，以加快易碎电子产品的包装流程。",
            jp: "その工場は、壊れやすい電子機器の梱包（packaging）プロセスを加速するために自動化設備を導入しました。"
        }
    },
    {
        id: 14,
        target: "document",
        category: "困难",
        stem: "The legal department requires comprehensive ________ before the board can approve the cross-border merger.",
        options: ["documentation", "document", "documentary", "documented"],
        correct: "documentation",
        explanations: {
            guide: "形容词后的不可数名词识别。requires 后面需要接名词作宾语，前面的形容词 comprehensive（全面的）修饰该名词。结合合规场景，选不可数名词 documentation。",
            family: "documentation (n.证明文件/文献资料) | document (n.单份文件) | documentary (n.纪录片) | documented (adj.有记录的)。",
            details: "document 是可数名词，若用单数前必须加冠词。此处表示一整套的“证明材料、文献汇编”，属于不可数名词 documentation 的核心商务法务考点。",
            cn: "在董事会能够批准这项跨国合并案之前，法律部需要全面的证明文件材料。",
            jp: "取締役会がクロスボーダー合併を承認する前に、法務部門は包括的な書類一式（documentation）を必要としています。"
        }
    },
    {
        id: 15,
        target: "publish",
        category: "困难",
        stem: "The unexpected delay in the ________ of the economic survey caused fluctuation in the stock market.",
        options: ["publication", "publish", "publisher", "publishing"],
        correct: "publication",
        explanations: {
            guide: "介词后的名词中心语识别。空格位于定冠词 the 之后、介词短语 in the... 之前，必须填入名词充当介词 in 的宾语中心语，选表示出版物的名词 publication。",
            family: "publication (n.出版/发行) | publish (v.出版) | publisher (n.出版商) | publishing (n.出版业)。",
            details: "the publication of the economic survey 指该经济调查报告的“出版发行/公布”。publisher 指人（出版商），与报告本身不搭配；publish 是动词，无法置于冠词后。",
            cn: "经济调查报告公布的意外延迟导致了股市的波动。",
            jp: "経済調査報告の公表（publication）が不意に遅れたことで、株式市場に変動が生じました。"
        }
    },
    {
        id: 16,
        target: "located",
        category: "困难",
        stem: "Finding an ideal ________ for the new research laboratory remains the primary challenge for the committee.",
        options: ["location", "located", "locate", "local"],
        correct: "location",
        explanations: {
            guide: "动名词短语内部的宾语成分。Finding 后面需要接名词作其宾语，空格前有不定冠词 an 和形容词 ideal，应选名词形式 location。",
            family: "location (n.位置/地点) | located (adj.位于) | locate (v.定位) | local (adj.当地的)。",
            details: "an ideal location 意为理想的地点/选址。located 是过去分词/形容词，不能直接放在冠词和形容词后面作宾语中心语。",
            cn: "为新的研究实验室寻找一个理想的地点仍然是该委员会面临的首要挑战。",
            jp: "新しい研究ラボのための理想的な立地（location）を見つけることが、依然として委員会にとっての主な課題です。"
        }
    },
    {
        id: 17,
        target: "firm",
        category: "困难",
        stem: "The executive board believes ________ that regular training programs are essential for employee retention.",
        options: ["firmly", "firm", "firmness", "firms"],
        correct: "firmly",
        explanations: {
            guide: "副词修饰动词谓语。空格位于主语 board 和谓语动词 believes 之间，需要一个副词来修饰动词 believes，表达深信不疑的态度，选 firmly。",
            family: "firmly (adv.坚定地) | firm (adj.坚定的/n.公司) | firmness (n.坚固) | firms (n.公司复数)。",
            details: "firmly believe（坚定地认为/深信）是高阶商务报告和职场表态中的极高频修饰语。其他词性在此位置均属于语法错误。",
            cn: "执行董事会坚定地认为，定期的培训项目对于留住员工至关重要。",
            jp: "執行役員会は、定期的な研修プログラムが従業員の定着に不可欠であると確固として（firmly）信じています。"
        }
    },
    {
        id: 18,
        target: "extra",
        category: "困难",
        stem: "Due to the ________ efforts of the product engineering team, the project was finished ahead of schedule.",
        options: ["extraordinary", "extra", "extract", "extras"],
        correct: "extraordinary",
        explanations: {
            guide: "特定高阶形容词语义修饰。空格在定冠词 the 和复数名词 efforts 之间，需要填入形容词作定语。结合“提前完工”的正面因果关系，选 extraordinary。",
            family: "extraordinary (adj.非凡的/超常的) | extra (adj.额外的) | extract (v.提取) | extras (n.额外的事物)。",
            details: "extraordinary efforts 意为非凡的努力、加倍的努力。虽然 extra（额外的）也是形容词，但在修饰人的努力且带来极佳结果（提前完工）的语境下，词义不如 extraordinary 深刻与地道。",
            cn: "由于产品工程团队付出了非凡的努力，该项目得以提前完工。",
            jp: "製品エンジニアリングチームの並外れた（extraordinary）努力のおかげで、プロジェクトは予定より前倒しで完了しました。"
        }
    }
];