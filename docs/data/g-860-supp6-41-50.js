// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data121-130.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "hold",
        pos: "動/名",
        ipa: "/hoʊld/",
        cn: "举办；担任（职位）；持有（学位/证书）；容纳；握持",
        jp: "開催する；（職を）務める；（学位・資格を）有する；収容する；握る",
        family: "holder / holding / uphold / withhold",
        tips: "托业高频多义考点：1. 举办会议/活动（hold a conference/meeting）；2. 担任职务（hold a position）；3. 拥有学位或资格证书（hold an advanced degree / certificate）；4. 容纳（hold up to 500 people）。",
        desc: "They will hold a meeting tomorrow."
    },
    {
        word: "honor",
        pos: "動/名",
        ipa: "/ˈɑːnər/",
        cn: "兑现，接受（优惠券/代金券）；履行（合约）；表彰；荣誉",
        jp: "（割引券などを）引き受ける、受け付ける；（契約を）遵守する；表彰する；名誉",
        family: "honorable / honorary / honored / honoring",
        tips: "托业核心熟词生义：商户“接受并兑现”优惠券、折扣码或履行质保协议（honor coupons / vouchers / warranties）；亦指按约履行合同责任（honor a contractual commitment）。",
        desc: "The store will honor this coupon."
    },
    {
        word: "house",
        pos: "動/名",
        ipa: "/haʊz/ (v.), /haʊs/ (n.)",
        cn: "容纳，存放，安置；房屋，机构",
        jp: "（データ・設備・人員などを）収容する、保管する；家、建物",
        family: "housing / household / warehouse",
        tips: "动词熟词生义必考点（动词发音为 /haʊz/）：指建筑设施或机房“容纳、存放、安置精密仪器或服务器”（the facility houses advanced equipment / servers）。",
        desc: "The new facility will house 200 servers."
    },
    {
        word: "issue",
        pos: "動/名",
        ipa: "/ˈɪʃuː/",
        cn: "核发，发放，公布；（期刊）期号；问题，争端",
        jp: "発行する、発給する；（雑誌などの）号；問題、課題",
        family: "issuance / issuer / issuing / reissued",
        tips: "托业双重考点：作动词常考“核发/发放”（issue a badge / permit / refund / statement）；作名词常指出版物“期次/刊号”（the latest issue of the magazine）。",
        desc: "The bank will issue a full refund."
    },
    {
        word: "land",
        pos: "動/名",
        ipa: "/lænd/",
        cn: "赢得，成功拿下（合同/交易/职位）；降落；土地",
        jp: "（契約・仕事などを）獲得する、勝ち取る；着陸する；土地",
        family: "landing / landlord / landmark",
        tips: "商业谈判高阶熟词生义：指通过竞争成功“赢得/斩获”重大订单或重要岗位（land a major contract / account / job）；航空场景考飞机着陆（land safely）。",
        desc: "She landed a lucrative client contract."
    },
    {
        word: "last",
        pos: "動/形/副",
        ipa: "/læst/",
        cn: "持续，维持；最后的，上一个的",
        jp: "続く、持続する；最後の、この前の",
        family: "lasting / lastly",
        tips: "动词核心考点：指研讨会、质保期或供应库存“持续多久”（last for two hours / last several weeks）；派生分词形容词 lasting 意为“持久的”（a lasting impression）。",
        desc: "The workshop will last two hours."
    },
    {
        word: "leave",
        pos: "名/動",
        ipa: "/liːv/",
        cn: "休假，假期；离开；留下",
        jp: "休暇；去る、出発する；残す",
        family: "leaving / on leave",
        tips: "不可数名词高频考点：指各类法定假与福利休假（paid leave 带薪假, sick leave 病假, parental leave 育儿假）；处于休假状态固定搭配为 be on leave。",
        desc: "He is currently on paternity leave."
    },
    {
        word: "level",
        pos: "名/形/動",
        ipa: "/ˈlevl/",
        cn: "级别，层次；水平；平坦的；使平整",
        jp: "レベル、階層；水準；平らな；平らにする",
        family: "leveled / leveling",
        tips: "职场岗位与能力层次考点：entry-level position（入门级/初级岗位），executive-level manager（高管层）；商业竞争中常考 a level playing field（公平竞争环境）。",
        desc: "This is an entry-level position."
    },
    {
        word: "line",
        pos: "名/動",
        ipa: "/laɪn/",
        cn: "行业，业务领域；产品系列；排队；行，线条",
        jp: "職種、専門；製品ライン；列；行、並ぶ",
        family: "linear / lined / lining",
        tips: "多义词综合考点：1. line of work / business 指“所从事的行业/专业门类”；2. a new line of items 指“新产品线”；3. production line 指“装配生产线”。",
        desc: "What line of work are you in?"
    },
    {
        word: "lot",
        pos: "名",
        ipa: "/lɑːt/",
        cn: "（特定用途的）场地；（拍卖/采购）批次；许多",
        jp: "（特定の用途の）用地、敷地；（競売・製品の）ロット、区画；たくさん",
        family: "lots / allotment",
        tips: "设施与仓储考点：parking lot（停车场），vacant lot（空置地块）；在采购或拍卖语境中指整批商品（the entire lot was inspected）。",
        desc: "Please park in the visitor lot."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "hold",
        category: "简单",
        stem: "The regional chamber of commerce will ________ its annual networking banquet at the Grand Hotel next Thursday.",
        options: ["hold", "holder", "land", "level"],
        correct: "hold",
        explanations: {
            guide: "情态动词后的动词原形。will 后面必须接动词原形，表达商会“举办”年度晚宴，选 hold。",
            family: "hold (v.举办/担任) | holder (n.持有者) | land (v.赢得) | level (n.级别)。",
            details: "will hold its annual banquet 属于商务活动最经典的动宾结构。holder 是名词，不能在情态动词 will 之后充当谓语动词。",
            cn: "地区商会将于下周四在格兰德酒店举办其年度交流联谊晚宴。",
            jp: "地域商工会議所は、来週の木曜日にグランドホテルで年次ネットワーキング晩餐会を開催（hold）します。"
        }
    },
    {
        id: 2,
        target: "issue",
        category: "简单",
        stem: "The accounting department promised to ________ a full refund to customers affected by the system billing error.",
        options: ["issue", "issuance", "house", "last"],
        correct: "issue",
        explanations: {
            guide: "动词不定式结构。promised to 后面需要接动词原形，issue a refund 是财务客服高频固定搭配，意为“发放/退还款项”，选 issue。",
            family: "issue (v.发放/核发/n.问题) | issuance (n.核发) | house (v.容纳) | last (v.持续)。",
            details: "to 为不定式符号，后接动词原形 issue。issuance 是名词，不能充当不定式中的谓语核心动词。",
            cn: "财务部承诺向受到系统计费错误影响的客户发放全额退款。",
            jp: "経理部門は、システムの請求エラーの影響を受けた顧客に全額返金を支給（issue）することを約束しました。"
        }
    },
    {
        id: 3,
        target: "lot",
        category: "简单",
        stem: "Visitors are politely requested to leave their vehicles in the designated parking ________ adjacent to the main building.",
        options: ["lot", "lots", "line", "leave"],
        correct: "lot",
        explanations: {
            guide: "复合名词专属固定搭配。parking lot 是园区与物业场景最常用的词汇，意为“停车场”，定冠词 the 搭配单数名词 lot。",
            family: "lot (n.场地/批次) | lots (n.复数) | line (n.产品线/排队) | leave (n.休假)。",
            details: "the designated parking lot 意为指定的停车场。lots 为复数，在此处冠词与特定场地语境下使用单数 lot 最为自然精准。",
            cn: "参访者被礼貌地告知，请将车辆停放在主楼相邻的指定停车场内。",
            jp: "来訪者は、本館に隣接する指定の駐車場（parking lot）に車両を停めるよう丁寧にお願いされています。"
        }
    },
    {
        id: 4,
        target: "level",
        category: "简单",
        stem: "The software development firm is seeking ambitious university graduates for several entry-________ programming positions.",
        options: ["level", "leveled", "honor", "hold"],
        correct: "level",
        explanations: {
            guide: "复合形容词定语修饰。entry-level 是招聘场景中最核心的高频复合词，意为“初级的/入门级的”，修饰 positions，选 level。",
            family: "level (n.级别/adj.平的) | leveled (v-ed变平) | honor (v.兑现) | hold (v.举办)。",
            details: "entry-level positions 指专门面向应届毕业生设立的初级岗位。leveled 是过去式或过去分词，不能与 entry- 连字符构成规范的职衔形容词。",
            cn: "该软件开发公司正在招聘积极进取的大学毕业生，以填补几个入门级编程职位。",
            jp: "そのソフトウェア開発企業は、いくつかのエントリーレベル（entry-level）のプログラミング職に向けて、意欲的な大卒者を求めています。"
        }
    },
    {
        id: 5,
        target: "last",
        category: "简单",
        stem: "The orientation session for newly recruited laboratory technicians will ________ for approximately ninety minutes.",
        options: ["last", "lasting", "land", "house"],
        correct: "last",
        explanations: {
            guide: "动词多义考点与时间短语搭配。will 后面接动词原形，last for + 时间段 意为“持续多长时间”，选 last。",
            family: "last (v.持续/adj.最后的) | lasting (adj.持久的) | land (v.赢得) | house (v.容纳)。",
            details: "will last for approximately 90 minutes 意为将持续大约90分钟。lasting 是形容词或分词，不能直接置于情态动词 will 之后担当动词原形。",
            cn: "新入职实验室技术员的入职培训会议将持续大约九十分钟。",
            jp: "新しく採用された実験室技術者向けのオリエンテーションセッションは、約90分間続く（last）予定です。"
        }
    },
    {
        id: 6,
        target: "honor",
        category: "简单",
        stem: "The retail boutique confirmed that it would ________ all promotional vouchers presented before the expiration date.",
        options: ["honor", "honorable", "issue", "level"],
        correct: "honor",
        explanations: {
            guide: "熟词生义与情态动词搭配。would 后面接动词原形，honor vouchers / coupons 属于托业零售消费场景极高频考点，意为“接受并兑现代金券”，选 honor。",
            family: "honor (v.兑现/表彰/n.荣誉) | honorable (adj.值得尊敬的) | issue (v.发放) | level (n.级别)。",
            details: "honor vouchers 意为商户认可并抵扣代金券金额。honorable 是形容词，无法跟在助动词 would 后面充当谓语动词原形。",
            cn: "该精品零售店确认，将接受并兑现所有在截止日期之前出示的促销代金券。",
            jp: "その小売ブティックは、有効期限前に提示されたすべての販促用引換券を受け付ける（honor）ことを確認しました。"
        }
    },
    {
        id: 7,
        target: "leave",
        category: "中等",
        stem: "During Ms. Gomez’s temporary absence on parental ________, all urgent client matters should be directed to her deputy.",
        options: ["leave", "leaving", "lot", "last"],
        correct: "leave",
        explanations: {
            guide: "职场人事专属名词搭配。on parental leave 是人事规章固定搭配，意为“休育儿假”，leave 作不可数名词表示“休假”，选 leave。",
            family: "leave (n.休假/假期/v.离开) | leaving (动名词) | lot (n.场地) | last (v.持续)。",
            details: "on leave / on parental leave 属于固定介词短语。leaving 是动名词动作，不能作为表示法定假期的名词短语使用。",
            cn: "在戈麦斯女士休育儿假暂时缺席期间，所有紧急客户事务均应转交其副手处理。",
            jp: "ゴメス氏が育児休暇（parental leave）で一時的に不在の間、すべての緊急の顧客案件は彼女の代理人に向けられるべきです。"
        }
    },
    {
        id: 8,
        target: "land",
        category: "中等",
        stem: "Thanks to a persuasive proposal, the engineering consultancy successfully ________ a multi-million-dollar infrastructure contract.",
        options: ["landed", "landing", "held", "housed"],
        correct: "landed",
        explanations: {
            guide: "高阶动词熟词生义与一般过去时。句子缺少谓语动词，land a contract 意为“成功赢得/拿下重大合同”，由 successfully 修饰，选过去式 landed。",
            family: "landed (v-ed赢得/着陆) | landing (n.着陆/动名词) | held (v-ed举办/持有) | housed (v-ed容纳)。",
            details: "land a lucrative contract 专指商务竞标成功斩获订单。landing 是现在分词，缺少助动词无法单独构成谓语。",
            cn: "得益于一份极具说服力的提案，该工程咨询公司成功赢得了一份数百万美元的基础设施合同。",
            jp: "説得力のある提案のおかげで、そのエンジニアリングコンサルタント会社は数百万ドル規模のインフラ契約を無事に獲得し（landed）ました。"
        }
    },
    {
        id: 9,
        target: "house",
        category: "中等",
        stem: "The newly constructed annex currently ________ the organization's primary data servers and high-capacity electrical generators.",
        options: ["houses", "housing", "levels", "lines"],
        correct: "houses",
        explanations: {
            guide: "动词熟词生义与主谓一致。主语是单数名词 annex（附属建筑），currently 提示一般现在时，house 作动词意为“容纳/存放设备”，选第三人称单数形式 houses。",
            family: "houses (第三人称单数/存放) | housing (n.住房/外壳) | levels (n.级别) | lines (n.产品线)。",
            details: "the building houses data servers 指大楼内安装存放有数据服务器。housing 是名词或分词，不能充当本句的主干动词。",
            cn: "新建的附属建筑目前存放着该机构的核心数据服务器和大容量发电机。",
            jp: "新築された別館には、現在、組織の主要なデータサーバーと大容量発電機が収容され（houses）ています。"
        }
    },
    {
        id: 10,
        target: "line",
        category: "中等",
        stem: "Prior to joining our investment group, Mr. Tanaka spent fifteen years in the logistics ________ of business.",
        options: ["line", "linear", "lot", "hold"],
        correct: "line",
        explanations: {
            guide: "商业行业固定搭配。line of business 属于商务履历中的固定表达，意为“行业领域/业务门类”，选名词 line。",
            family: "line (n.行业/产品线/排队) | linear (adj.线性的) | lot (n.地块) | hold (v.举办)。",
            details: "in the ... line of business 指从事某特定行业。linear 为形容词，不能在定冠词 the 和限定名词 logistics 之后充当中心名词。",
            cn: "在加入我们投资集团之前，田中先生在物流行业领域工作了十五年。",
            jp: "当社の投資グループに加わる前、田中氏は物流業界の職種（line of business）に15年間従事していました。"
        }
    },
    {
        id: 11,
        target: "issue",
        category: "中等",
        stem: "An insightful special report on industrial automation appears in the current ________ of the engineering journal.",
        options: ["issue", "issuing", "leave", "honor"],
        correct: "issue",
        explanations: {
            guide: "出版传媒专属名词用法。in the current ________ of the journal 结构中，issue 考查“期刊刊号/期次”，选名词 issue。",
            family: "issue (n.期号/问题/v.核发) | issuing (分词形式) | leave (n.假期) | honor (n.荣誉)。",
            details: "the current issue 指本期刊物。issuing 是动名词，不能在形容词 current 和定冠词后充当刊物期次的量化名词。",
            cn: "关于工业自动化的一篇见解深刻的特别报道刊登在该工程期刊的当期杂志上。",
            jp: "産業オートメーションに関する洞察に満ちた特別レポートが、その工学雑誌の最新号（current issue）に掲載されています。"
        }
    },
    {
        id: 12,
        target: "hold",
        category: "中等",
        stem: "Dr. Evans ________ a doctoral degree in organic chemistry and has published extensively in peer-reviewed scientific publications.",
        options: ["holds", "holder", "lands", "lasts"],
        correct: "holds",
        explanations: {
            guide: "学术背景资历动词与主谓一致。主语是单数专有名词 Dr. Evans，hold a degree 意为“持有/拥有学位”，并与 has published 并列，选用单数谓语 holds。",
            family: "holds (第三人称单数/拥有) | holder (n.持有者) | lands (v.赢得) | lasts (v.持续)。",
            details: "hold a doctoral degree 指拥有博士学位。holder 是名词（持有者），缺少谓语动词会导致句子语法结构坍塌。",
            cn: "埃文斯博士拥有有机化学博士学位，并在同行评议的科学刊物上发表了大量论文。",
            jp: "エヴァンス博士は有機化学の博士号を保持し（holds）、査読済みの科学出版物に幅広く執筆しています。"
        }
    },
    {
        id: 13,
        target: "honor",
        category: "困难",
        stem: "The guest speaker announced that she felt deeply ________ to deliver the commencement address to the graduating class.",
        options: ["honored", "honor", "honorable", "issued"],
        correct: "honored",
        explanations: {
            guide: "系表结构与心理状态分词形容词。felt 后面接形容词作表语，feel deeply honored to do sth 是商务演讲与仪式中的高阶固定表达，意为“对做某事深感荣幸”，选分词形容词 honored。",
            family: "honored (adj.感到荣幸的) | honor (v.兑现/n.荣誉) | honorable (adj.值得尊敬的/品德高尚的) | issued (v-ed已发放)。",
            details: "honored 表示当事人主观感受到光荣（受宠若惊）；honorable 则用来形容客体本身具有高尚品质（如 an honorable man），在此处逻辑不符。",
            cn: "演讲特邀嘉宾宣布，能够向毕业班发表毕业典礼演讲，她感到深表荣幸。",
            jp: "特別講演者は、卒業生に向けて卒業式の辞を述べることを深く光栄に（honored）思っていると発表しました。"
        }
    },
    {
        id: 14,
        target: "last",
        category: "困难",
        stem: "The intensive cross-cultural management training course had a ________ positive impact on team collaboration across overseas branches.",
        options: ["lasting", "last", "lastly", "leveled"],
        correct: "lasting",
        explanations: {
            guide: "现在分词形容词作定语。a ________ positive impact 结构中，不定冠词 a 与形容词 positive 之间需要填入形容词修饰 impact，a lasting impact 意为“持久的影响”，选 lasting。",
            family: "lasting (adj.持久的/长久的) | last (v.持续/adj.最后的) | lastly (adv.最后) | leveled (adj.拉平的)。",
            details: "lasting impact / impression 属于托业高阶专有搭配。lastly 为副词，last 为动词或表示次序的形容词，均不能修饰持续性影响力。",
            cn: "密集的跨文化管理培训课程对海外各分公司的团队协作产生了持久的积极影响。",
            jp: "集中的な異文化マネジメント研修コースは、海外支社全体のチームコラボレーションに永続的な（lasting）好影響を与えました。"
        }
    },
    {
        id: 15,
        target: "house",
        category: "困难",
        stem: "The university’s rare historical manuscripts, which are ________ in an underground fireproof vault, can be viewed only by appointment.",
        options: ["housed", "housing", "landed", "held"],
        correct: "housed",
        explanations: {
            guide: "定语从句中的被动语态与熟词生义。which are ________ in 结构中，手稿与保险库之间为“被安置/被收藏存放”的被动关系，选用过去分词 housed。",
            family: "housed (v-ed被安置/存放) | housing (n.住房/动名词) | landed (v-ed赢得) | held (v-ed举行)。",
            details: "be housed in 指珍贵物品或设备存放于某处。housing 是动名词或名词，不能与 are 组合构成合法的被动语态谓语。",
            cn: "该大学存放在地下防火库内的珍贵历史手稿，仅限提前预约方可查阅。",
            jp: "地下の耐火保管庫に収容されている（housed）大学の希少な歴史的写本は、予約制でのみ閲覧することができます。"
        }
    },
    {
        id: 16,
        target: "land",
        category: "困难",
        stem: "________ the competitive government defense contract enabled the aerospace manufacturer to expand its assembly facilities.",
        options: ["Landing", "Landed", "Holding", "Issuing"],
        correct: "Landing",
        explanations: {
            guide: "动名词短语作主语与商务熟词生义。空格位于句首并带有宾语 the competitive contract，需要动名词形式作句子的核心主语，Landing the contract 意为“赢得/拿下该合同”，选 Landing。",
            family: "Landing (动名词作主语/拿下) | Landed (过去分词) | Holding (动名词/持有) | Issuing (动名词/发放)。",
            details: "动名词短语作主语谓语用单数 enabled。Landed 是过去分词，若作主语补足状语则无法直接接及物宾语且逻辑主语会错配为 aerospace manufacturer。",
            cn: "成功拿下具有竞争力的政府国防合同，使该航空航天制造商得以扩建其装配工厂设施。",
            jp: "競争の激しい政府の防衛契約を獲得したこと（Landing）で、その航空宇宙メーカーは組立施設を拡張することが可能になりました。"
        }
    },
    {
        id: 17,
        target: "line",
        category: "困难",
        stem: "Because of strict occupational safety standards, all technicians working on the automated assembly ________ must wear protective eye gear.",
        options: ["line", "linear", "level", "lot"],
        correct: "line",
        explanations: {
            guide: "生产制造核心复合名词专属搭配。the automated assembly ________ 结构中，assembly 与 line 构成 assembly line（装配线/生产流水线），选名词 line。",
            family: "line (n.生产线/行业/列) | linear (adj.线性的) | level (n.级别) | lot (n.场地)。",
            details: "assembly line 是工厂制造与安全管理阅读的核心必考词组。linear 是形容词，level 和 lot 均无法与 assembly 构成装配流水线的固定工业术语。",
            cn: "根据严格的职业安全标准，在自动化装配线上工作的所有技术人员都必须佩戴护目装备。",
            jp: "厳格な労働安全基準のため、自動組立ライン（assembly line）で作業するすべての技術者は保護用ゴーグルを着用しなければなりません。"
        }
    },
    {
        id: 18,
        target: "leave",
        category: "困难",
        stem: "According to the newly amended corporate employee benefits policy, full-time staff members are entitled to twenty days of paid ________ per calendar year.",
        options: ["leave", "leaving", "honor", "issuance"],
        correct: "leave",
        explanations: {
            guide: "企业福利法不可数名词专属搭配。twenty days of paid ________ 结构中，形容词 paid 后面需要接名词，paid leave 是职场人事核心固定专有名词，意为“带薪休假”，选 leave。",
            family: "leave (n.休假/不可数) | leaving (动名词) | honor (n.荣誉) | issuance (n.核发)。",
            details: "paid leave 指带薪假。leaving 是离开的动名词动作，不能作为福利待遇中指代假期的量化不可数名词。",
            cn: "根据最新修订的公司员工福利政策，全职员工每个日历年享有二十天的带薪休假。",
            jp: "新しく改正された企業の従業員福利厚生規定によると、正社員には1暦年あたり20日間の有給休暇（paid leave）が与えられます。"
        }
    }
];