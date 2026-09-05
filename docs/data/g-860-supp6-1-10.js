// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data81-90.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "accommodate",
        pos: "動",
        ipa: "/əˈkɑːmədeɪt/",
        cn: "容纳；为……提供住宿；迎合，满足（需求）",
        jp: "収容する；宿泊させる；（要望などに）応じる",
        family: "accommodation / accommodating / accommodative",
        tips: "托业核心双重考点：1. 容纳人数或车辆（accommodate up to 500 guests）；2. 满足客户的特殊要求或行程调整（accommodate special requests/needs）。",
        desc: "The hotel can accommodate 300 guests."
    },
    {
        word: "account",
        pos: "名/動",
        ipa: "/əˈkaʊnt/",
        cn: "账户；客户；解释，说明；占（比例）",
        jp: "口座；顧客、取引先；説明する；占める",
        family: "accounting / accountant / accountable / unaccounted",
        tips: "核心搭配：account for（解释原因；在总数中占……比例）；client account（大客户业务）；hold sb accountable for（让某人对某事负责）。",
        desc: "She opened a new bank account today."
    },
    {
        word: "address",
        pos: "動/名",
        ipa: "/əˈdres/ (v.), /ˈædres/ (n.)",
        cn: "处理，解决；向……发表演说；地址；演说",
        jp: "（問題に）取り組む、対処する；演説する；住所；演説",
        family: "addressed / addressee / addressing",
        tips: "托业最高频动词考点是“处理/解决（问题、担忧或投诉）”，等同于 deal with / resolve（如 address concerns/issues）；亦常考名词 keynote address（主旨演讲）。",
        desc: "We need to address customer concerns promptly."
    },
    {
        word: "air",
        pos: "動/名",
        ipa: "/er/",
        cn: "播出，播放；使通风；空气；航空",
        jp: "（番組・CMなどを）放送する；換気する；空気；航空便",
        family: "airing / aired / airborne / airline",
        tips: "托业生僻高频动词考点：播送/播出电视节目或商业广告（air a commercial / live broadcast）；作名词时常考 air freight（空运货物）。",
        desc: "The commercial will air during the evening news."
    },
    {
        word: "apply",
        pos: "動",
        ipa: "/əˈplaɪ/",
        cn: "申请；应用，运用；适用",
        jp: "申し込む、応募する；適用する；応用する",
        family: "application / applicant / applicable / applied",
        tips: "核心短语：apply for a position/permit（申请职位/许可证）；apply to（适用于……）。派生形容词 applicable（适用的/生效的）是 Part 5 语法高频难点。",
        desc: "You can apply for the job online."
    },
    {
        word: "balance",
        pos: "名/動",
        ipa: /ˈbæləns/,
        cn: "余额；结余；平衡；使平衡",
        jp: "残高、未払い額；バランス、均衡；釣り合わせる",
        family: "balanced / balancing / unbalance",
        tips: "财务语境中核心考查“账户余额/未结清款项”（remaining balance / outstanding balance）；分词形容词 balanced 常修饰预算（balanced budget）。",
        desc: "Check your bank balance online."
    },
    {
        word: "bargain",
        pos: "名/動",
        ipa: "/ˈbɑːrɡən/",
        cn: "特价商品，便宜货；协议；讨价还价",
        jp: "買い得品、格安品；協定；交渉する",
        family: "bargaining / bargained",
        tips: "零售与促销场景指超值商品（a real bargain）；职场与劳资谈判场景常考 collective bargaining（集体谈判/劳资协商）。",
        desc: "The airline ticket was a real bargain."
    },
    {
        word: "board",
        pos: "名/動",
        ipa: "/bɔːrd/",
        cn: "董事会，理事会；木板；登机，上船",
        jp: "取締役会、理事会；板；（飛行機・船に）搭乗する",
        family: "boarding / boardroom / onboard",
        tips: "作名词常考 board of directors（董事会）；作动词考机场出行与差旅场景（board the flight / train），复合词 boarding pass（登机牌）为听力高频词。",
        desc: "Passengers can now board the plane."
    },
    {
        word: "book",
        pos: "動/名",
        ipa: "/bʊk/",
        cn: "预订，预约；书籍；账簿",
        jp: "予約する；本、帳簿",
        family: "booking / booked / booklet",
        tips: "托业中作动词极高频，等同于 reserve（book a flight / reservation / conference room）；被动结构 fully booked（客满/预约已满）是听力常见考点。",
        desc: "I would like to book a table for two."
    },
    {
        word: "break",
        pos: "名/動",
        ipa: "/breɪk/",
        cn: "休息，间歇；打破，损坏；中断",
        jp: "休憩、中断；壊す、破る；途切れる",
        family: "breakage / breakable / breakdown / unbroken",
        tips: "职场日常高频名词：take a coffee break（工间小憩），lunch break（午休）；作动词常考打破销售纪录（break a sales record）或违反协议。",
        desc: "Let's take a ten-minute coffee break."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "book",
        category: "简单",
        stem: "The corporate travel coordinator will ________ hotel rooms for the visiting executives tomorrow morning.",
        options: ["book", "booking", "bargain", "air"],
        correct: "book",
        explanations: {
            guide: "情态动词后的动词原形。will 后面需要接动词原形，后接宾语 hotel rooms，表达“预订”酒店客房，选 book。",
            family: "book (v.预订/n.书籍) | booking (n.预订) | bargain (n.便宜货/v.讨价还价) | air (v.播送/n.空气)。",
            details: "will book 为标准的一般将来时谓语结构。booking 是名词或分词，不能在情态动词 will 之后充当谓语动词原形。",
            cn: "企业差旅协调员将于明天上午为来访的高管预订酒店客房。",
            jp: "企業の出張コーディネーターは、明日の朝、来訪する役員のためにホテルの部屋を予約（book）します。"
        }
    },
    {
        id: 2,
        target: "accommodate",
        category: "简单",
        stem: "The newly renovated convention hall can comfortably ________ up to eight hundred attendees for banquet events.",
        options: ["accommodate", "accommodation", "balance", "break"],
        correct: "accommodate",
        explanations: {
            guide: "情态动词与副词后的动词原形。情态动词 can 与副词 comfortably 之后需接动词原形，表示场地“容纳”参会者，选 accommodate。",
            family: "accommodate (v.容纳/迎合) | accommodation (n.住宿/膳宿) | balance (n.余额/v.平衡) | break (n.休息/v.打破)。",
            details: "can comfortably accommodate 意为能够轻松容纳。accommodation 是名词，不能在此作谓语动词。",
            cn: "翻新后的大型会议厅可以轻松容纳多达八百名宴会与会者。",
            jp: "新しく改装されたコンベンションホールは、宴会イベントで最大800人の参加者を快適に収容（accommodate）できます。"
        }
    },
    {
        id: 3,
        target: "balance",
        category: "简单",
        stem: "Account holders can review their remaining loan ________ at any time by logging into the secure client portal.",
        options: ["balance", "balanced", "apply", "board"],
        correct: "balance",
        explanations: {
            guide: "复合名词与财务中心词。their remaining loan ________ 结构中需要名词充当宾语中心词，loan balance 意为“贷款余额”，选 balance。",
            family: "balance (n.余额/平衡) | balanced (adj.平衡的) | apply (v.申请/应用) | board (n.董事会/v.登机)。",
            details: "loan balance 指未结清的贷款余额。balanced 是形容词，不能直接放在形容词性物主代词与名词修饰语后充当宾语中心语。",
            cn: "账户持有人可随时登录安全的客户门户网站查看其剩余贷款余额。",
            jp: "口座名義人は、安全なクライアントポータルにログインすることで、いつでもローンの残高（balance）を確認できます。"
        }
    },
    {
        id: 4,
        target: "board",
        category: "简单",
        stem: "The distinguished members of the ________ of directors voted unanimously to approve the proposed acquisition.",
        options: ["board", "boarding", "account", "address"],
        correct: "board",
        explanations: {
            guide: "固定商业机构短语。board of directors 是托业极高频商务表达，意为“董事会”，空格处填入名词 board。",
            family: "board (n.董事会/木板) | boarding (n.登机) | account (n.账户) | address (n.演说/地址)。",
            details: "the board of directors 为固定专属名词词组。boarding 为动名词形式，不符合此处的机构名称搭配。",
            cn: "董事会杰出的成员们一致投票赞成批准拟议的收购案。",
            jp: "取締役会（board of directors）の著名なメンバーは、提案された買収を承認することに全会一致で投票しました。"
        }
    },
    {
        id: 5,
        target: "break",
        category: "简单",
        stem: "Following three hours of intense discussion, the seminar leader announced a brief fifteen-minute coffee ________.",
        options: ["break", "breakage", "bargaining", "accommodate"],
        correct: "break",
        explanations: {
            guide: "职场日常复合名词搭配。coffee break 是托业会议与职场日常高频词汇，意为“咖啡小憩/休息时间”，选名词 break。",
            family: "break (n.休息/间歇) | breakage (n.破损/破损物) | bargaining (n.谈判) | accommodate (v.容纳)。",
            details: "a coffee break 指工间休息。breakage 是指物品损坏或破损量，与会议语境完全不符。",
            cn: "经过三个小时的热烈讨论后，研讨会主持人宣布进行十五分钟的简短咖啡休息。",
            jp: "3時間にわたる熱心な議論の後、セミナーの指導者は15分間の短いコーヒー休憩（coffee break）を発表しました。"
        }
    },
    {
        id: 6,
        target: "apply",
        category: "简单",
        stem: "Qualified candidates wishing to ________ for the open marketing position must submit their credentials by Friday.",
        options: ["apply", "applicant", "balance", "book"],
        correct: "apply",
        explanations: {
            guide: "动词不定式与固定介词搭配。wishing to 后面接动词原形，与后面的介词 for 连用构成 apply for（申请某职位），选 apply。",
            family: "apply (v.申请/适用) | applicant (n.申请人) | balance (n.余额) | book (v.预订)。",
            details: "apply for the position 是求职场景最经典表达。applicant 是名词（申请人），不能放在不定式符号 to 后面作谓语动词。",
            cn: "有意申请该市场营销空缺职位的合格候选人必须在周五前提交其资质证明。",
            jp: "募集中のマーケティング職に応募（apply）したい資格のある候補者は、金曜日までに資格証明書を提出しなければなりません。"
        }
    },
    {
        id: 7,
        target: "address",
        category: "中等",
        stem: "The senior plant manager called an all-hands meeting to ________ serious employee concerns regarding machinery maintenance.",
        options: ["address", "addressed", "air", "breakdown"],
        correct: "address",
        explanations: {
            guide: "动词不定式表示目的及高频动宾搭配。to 后面接动词原形，address concerns 是托业核心商务表达，意为“解决/处理员工担忧”，选 address。",
            family: "address (v.处理/解决/演说) | addressed (v-ed形式) | air (v.播送) | breakdown (n.故障/明细)。",
            details: "address issues/concerns 表示解决疑难问题。addressed 是过去式或过去分词，不能在不定式符号 to 后使用。",
            cn: "资深工厂厂长召集了全体员工大会，以解决员工关于机械维护的严重担忧。",
            jp: "シニアプラントマネージャーは、機械のメンテナンスに関する従業員の深刻な懸念に対処する（address）ために全社会議を招集しました。"
        }
    },
    {
        id: 8,
        target: "account",
        category: "中等",
        stem: "Subscription fees from enterprise clients currently ________ for more than half of the software company's annual revenue.",
        options: ["account for", "accounting for", "apply to", "board on"],
        correct: "account for",
        explanations: {
            guide: "动介短语搭配与谓语动词形式。主语是复数名词 fees，后接比例 more than half...，account for 意为“占（比例）”，在此充当句子的一般现在时谓语。",
            family: "account for (v phr.占比例/解释) | accounting for (分词形式) | apply to (v phr.适用于) | board on (动介混搭)。",
            details: "account for [percentage/portion] 是托业图表与财务阅读中表达“占有多大比例”的必考短语。accounting for 是分词，缺少助动词无法单独作谓语。",
            cn: "来自企业客户的订阅费目前占该软件公司年总收入的一半以上。",
            jp: "企業顧客からのサブスクリプション料金は、現在、そのソフトウェア会社の年間売上高の半分以上を占めて（account for）います。"
        }
    },
    {
        id: 9,
        target: "bargain",
        category: "中等",
        stem: "Because the imported office furniture was marked down by fifty percent, the procurement team considered it an exceptional ________.",
        options: ["bargain", "bargaining", "balance", "accommodating"],
        correct: "bargain",
        explanations: {
            guide: "不定冠词与形容词后的名词。an exceptional ________ 结构中需要单数可数名词，表达物超所值的“特价便宜货/划算的交易”，选 bargain。",
            family: "bargain (n.便宜货/协议) | bargaining (n.讨价还价) | balance (n.余额) | accommodating (adj.体贴迎合的)。",
            details: "an exceptional bargain 意为极其合算的交易。bargaining 是动名词（谈判），不能表示具体某件打折划算的物品。",
            cn: "由于进口办公家具降价了百分之五十，采购团队认为这是一笔非常划算的交易。",
            jp: "輸入オフィス家具が50パーセント値下げされたため、調達チームはそれを例外的な買い得品（bargain）だと見なしました。"
        }
    },
    {
        id: 10,
        target: "air",
        category: "中等",
        stem: "The national television network confirmed that it will ________ the exclusive interview with the entrepreneur during prime time tonight.",
        options: ["air", "airing", "address", "book"],
        correct: "air",
        explanations: {
            guide: "动词生僻商务词义与时态。will 后面需要接动词原形，后接访谈节目 interview，air 作动词意为“播出/播放（电视或广播节目）”，选 air。",
            family: "air (v.播送/n.空气) | airing (n.播送/公开) | address (v.处理/演讲) | book (v.预订)。",
            details: "air a program/interview 是媒体与广告场景的核心动词用法。airing 是动名词，不能在情态动词 will 后充当谓语动词原形。",
            cn: "国家电视网确认，将在今晚黄金时段播出对这位企业家的独家专访。",
            jp: "全国テレビネットワークは、今夜のゴールデンタイムにその起業家との独占インタビューを放送する（air）ことを確認しました。"
        }
    },
    {
        id: 11,
        target: "book",
        category: "中等",
        stem: "The front desk representative apologized that all premium suites were completely ________ for the international film festival weekend.",
        options: ["booked", "booking", "balanced", "applied"],
        correct: "booked",
        explanations: {
            guide: "被动语态与系表结构。were completely ________ 结构中需要过去分词构成表语形容词，completely booked 意为“客满/全部被预订”，选 booked。",
            family: "booked (adj.客满的/已预订的) | booking (n.预订) | balanced (adj.平衡的) | applied (adj.应用的)。",
            details: "be booked / fully booked 是酒店与客房服务场景的核心搭配。booking 是名词，无法跟在副词 completely 后面充当表语。",
            cn: "前台接待员歉意地表示，在国际电影节周末期间，所有高级套房均已被全部预订一空。",
            jp: "フロント担当者は、国際映画祭の週末にはすべてのプレミアムスイートが完全に予約で埋まって（booked）いると謝罪しました。"
        }
    },
    {
        id: 12,
        target: "board",
        category: "中等",
        stem: "Before proceeding through the airport security checkpoint, international travelers must present their passports and ________ passes.",
        options: ["boarding", "board", "account", "break"],
        correct: "boarding",
        explanations: {
            guide: "复合名词专属修饰语。boarding pass 是托业听力与出差阅读场景最核心的固定搭配，意为“登机牌”，选动名词形式 boarding。",
            family: "boarding (n./adj.登机的) | board (n.董事会/木板) | account (n.账户) | break (n.休息)。",
            details: "boarding pass（登机牌）为固定复合名词。board pass 属于非标准拼写错误，不符合航空出行行业规范表达。",
            cn: "在通过机场安检通道之前，国际旅客必须出示护照和登机牌。",
            jp: "空港の保安検査場に進む前に、海外旅行者はパスポートと搭乗（boarding）券を提示しなければなりません。"
        }
    },
    {
        id: 13,
        target: "accommodate",
        category: "困难",
        stem: "The client relations team was widely commended for being exceptionally ________ when handling last-minute schedule revisions.",
        options: ["accommodating", "accommodate", "application", "bargained"],
        correct: "accommodating",
        explanations: {
            guide: "系表结构与派生形容词考点。was widely commended for being exceptionally ________ 结构中，副词 exceptionally 后面需要接形容词作表语，accommodating 意为“乐于助人的/体贴迁就的”，选 accommodating。",
            family: "accommodating (adj.乐于助人的/迎合满足客户的) | accommodate (v.容纳/满足) | application (n.申请) | bargained (v-ed形式)。",
            details: "accommodating 是托业高难度考核点，用来形容服务团队非常善于配合并解决客户临时需求。accommodate 是动词原形，不能跟在 being + 副词后作形容词表语。",
            cn: "客户关系团队因在处理临时日程调整时表现得极为配合与周到而受到了广泛赞誉。",
            jp: "顧客対応チームは、直前のスケジュール変更に対応する際、非常に融通が利く（accommodating）として広く称賛されました。"
        }
    },
    {
        id: 14,
        target: "apply",
        category: "困难",
        stem: "The promotional discount code advertised on the promotional banner is ________ exclusively to first-time corporate subscribers.",
        options: ["applicable", "apply", "applicant", "accountable"],
        correct: "applicable",
        explanations: {
            guide: "系表结构与形容词派生及介词搭配。is ________ exclusively to 结构中，系动词 is 后接形容词与介词 to 搭配，applicable to 意为“适用于……”，选 applicable。",
            family: "applicable (adj.适用的/生效的) | apply (v.申请/应用) | applicant (n.申请人) | accountable (adj.负有责任的)。",
            details: "be applicable to... 是规章制度与促销条款中的高阶固定考点。accountable 常与 for 搭配（对某事负责），与此处介词 to 搭配不合。",
            cn: "宣传横幅上广告的促销折扣代码仅适用于首次订阅的企业客户。",
            jp: "プロモーションバナーに掲載されている割引コードは、初めて契約する企業顧客にのみ適用可能（applicable）です。"
        }
    },
    {
        id: 15,
        target: "account",
        category: "困难",
        stem: "Regional sales directors will be held strictly ________ for ensuring that quarterly revenue targets are met by their respective teams.",
        options: ["accountable", "accounting", "addressed", "balanced"],
        correct: "accountable",
        explanations: {
            guide: "主语补足语与固定法律/企业责任短语。be held accountable for sth 是企业治理高阶搭配，意为“对……被追究责任/对……承担全责”，选形容词 accountable。",
            family: "accountable (adj.负有责任的) | accounting (n.会计) | addressed (adj.已处理的) | balanced (adj.平衡的)。",
            details: "hold sb accountable for 是托业 Part 5 经典难题结构。accounting 是名词（会计业务），不能充当被动语态后修饰 directors 的主语补足语形容词。",
            cn: "区域销售总监将承担严格责任，确保其各自团队达成季度收入目标。",
            jp: "地域の営業ディレクターは、それぞれのチームが四半期の売上目標を達成することを確実にするために、厳格に責任を負う（accountable）ことになります。"
        }
    },
    {
        id: 16,
        target: "balance",
        category: "困难",
        stem: "The municipal finance committee successfully passed a carefully ________ budget that avoids cutting vital public services.",
        options: ["balanced", "balance", "booking", "airborne"],
        correct: "balanced",
        explanations: {
            guide: "分词形容词作定语修饰名词。a carefully ________ budget 结构中，副词 carefully 修饰分词形容词，balanced budget 为财政金融核心专有名词，意为“收支平衡的预算”，选 balanced。",
            family: "balanced (adj.收支平衡的/均衡的) | balance (n.余额/v.平衡) | booking (n.预订) | airborne (adj.空中的)。",
            details: "a balanced budget 指政府或企业没有赤字的收支平衡预算。balance 是名词或动词原形，不能被副词 carefully 修饰去作定语修饰 budget。",
            cn: "市政财政委员会成功通过了一份经过审慎权衡、收支平衡的预算，避免了削减关键公共服务。",
            jp: "市財政委員会は、不可欠な公共サービスの削減を回避する、慎重にバランスの取れた（balanced）予算案を無事に可決しました。"
        }
    },
    {
        id: 17,
        target: "address",
        category: "困难",
        stem: "Following the formal dinner, the visiting technology expert delivered an insightful keynote ________ on renewable energy infrastructure.",
        options: ["address", "addressee", "breakage", "bargain"],
        correct: "address",
        explanations: {
            guide: "复合名词与高阶商务词义。deliver a keynote ________ 结构中，keynote 后面需接名词表示“主旨演讲”，keynote address 意为“主旨演讲/主题报告”，选 address。",
            family: "address (n.演说/地址/v.处理) | addressee (n.收件人) | breakage (n.破损) | bargain (n.便宜货)。",
            details: "deliver a keynote address 是学术及企业峰会核心表述。addressee 意为信件或包裹的收件人，与演讲语境无关。",
            cn: "正式晚宴结束后，来访的科技专家就可再生能源基础设施发表了见解深刻的主旨演讲。",
            jp: "公式夕食会の後、来訪した技術専門家が再生可能エネルギーのインフラに関する洞察に満ちた基調講演（keynote address）を行いました。"
        }
    },
    {
        id: 18,
        target: "bargain",
        category: "困难",
        stem: "Representatives from the labor union and executive management engaged in productive collective ________ regarding annual wage adjustments.",
        options: ["bargaining", "bargain", "accommodation", "airing"],
        correct: "bargaining",
        explanations: {
            guide: "劳资关系专业术语与动名词。collective bargaining 是劳动人事与合同法核心概念，意为“集体谈判/集体协商”，空格处需填入动名词 bargaining。",
            family: "bargaining (n.谈判/协商) | bargain (n.便宜货/协议/v.讨价还价) | accommodation (n.住宿/容纳) | airing (n.公开播出)。",
            details: "collective bargaining 是固定专有名词，不可替换为 bargain 单数。accommodation 和 airing 在此搭配中均不符合劳资谈判的语义。",
            cn: "工会代表与管理层就年度薪资调整进行了富有成效的集体谈判。",
            jp: "労働組合の代表と経営陣は、年次賃金調整に関して建設的な団体交渉（collective bargaining）を行いました。"
        }
    }
];