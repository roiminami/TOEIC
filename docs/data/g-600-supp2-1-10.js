// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE ( g51-60.js Expansion )
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "place",
        pos: "動/名",
        ipa: "/pleɪs/",
        cn: "放置，安置；地方，职位",
        jp: "置く、設置する、発注する；場所、職、立場",
        family: "placement / placeable / replace / misplace",
        tips: "托业高频核心动词，常考 place an order（下订单）或 place an advertisement（投放广告）。名词形式常考 take the place of（取代）。",
        desc: "Please place the box here."
    },
    {
        word: "wear",
        pos: "動/名",
        ipa: "/wer/",
        cn: "穿，戴；磨损，服饰",
        jp: "身に着けている、着用している；摩耗、耐久性",
        family: "wearable / wearer / footwear / overwear",
        tips: "听力 Part 1（图片描述题）的绝对核心词。注意 wear 表示“穿着的状态”（状态动词），而 put on 表示“穿上的动作”（动作动词），二者在听力中常作干扰项。",
        desc: "She is wearing a hat."
    },
    {
        word: "face",
        pos: "動/名",
        ipa: "/feɪs/",
        cn: "面对，面向；脸，表面",
        jp: "直面する、面する、向く；顔、表面",
        family: "multifaceted / faceless / faceplate / surface",
        tips: "作动词时常考两种职场场景：一是物理面向（The building faces the park）；二是抽象面对挑战或危机（face financial difficulties 或 be faced with fierce competition）。",
        desc: "The desk faces the window."
    },
    {
        word: "sign",
        pos: "名/動",
        ipa: "/saɪn/",
        cn: "标志，告示，迹象；签署，签名",
        jp: "標識、看板、兆候；署名する、サインする",
        family: "signature / signage / signatory / signing",
        tips: "商务行政高频词。动词常考 sign a contract（签合同）。名词需要注意派生词形式：signature 指“个人签名”，而 signage 则指公共场所的“引导标识/招牌统称”。",
        desc: "Please sign the contract."
    },
    {
        word: "reach",
        pos: "動/名",
        ipa: "/riːtʃ/",
        cn: "达到，抵达，联络，伸手及至",
        jp: "〜に達する、連絡を取る、手が届く；範囲",
        family: "unreachable / reachability / overreach",
        tips: "商务沟通核心词。动词常考 reach an agreement / compromise（达成协议/妥协）；另外在电话或邮件场景中，常表达为 reach sb at the extension number（拨打分机号与某人取得联系）。",
        desc: "He reached for the cup."
    },
    {
        word: "hand",
        pos: "動/名",
        ipa: "/hænd/",
        cn: "递交，交付；手，协助",
        jp: "手渡す、渡す；手、人手、援助",
        family: "handed / handful / handbook / handbag",
        tips: "听力与职场高频动词。重点考察短语：hand in（提交，等同于 submit）、hand out（分发，等同于 distribute）。名词常见短语 have a hand in（参与/介入某事）。",
        desc: "Hand me the report."
    },
    {
        word: "water",
        pos: "動/名",
        ipa: "/ˈwɔːtər/",
        cn: "浇水，灌溉；水",
        jp: "水をやる、注水する；水、水域",
        family: "waterfront / waterproof / watermill",
        tips: "常在听力 Part 1 物业维护或办公室日常场景中以动词形式出现。常见描绘句型：He is watering the plants（他正在给植物浇水）或 The lawn is being watered（草坪正在被浇水）。",
        desc: "Water the plants daily."
    },
    {
        word: "point",
        pos: "動/名",
        ipa: "/pɔɪnt/",
        cn: "指向，指出；观点，要点，得分",
        jp: "指さす、指摘する；点、要点、目的",
        family: "pointed / pointless / pointer / pointedly",
        tips: "听力 Part 1 常见动作词，如 point at the screen（指着屏幕）。在阅读 Part 5/6 中，常考动词短语 point out that...（指出/强调某事）。名词常考 boiling point（沸点）或 starting point（起点）。",
        desc: "He pointed at the map."
    },
    {
        word: "side by side",
        pos: "副",
        ipa: "/saɪd baɪ saɪd/",
        cn: "并肩地，并排地",
        jp: "並んで、並行して、肩を並べて",
        family: "sideways / alongside",
        tips: "听力 Part 1 照片描述题的高频满分答案词。常用来描述两个人并排散步（walking side by side）、或者两台办公设备并排摆放（placed side by side）。",
        desc: "They walked side by side."
    },
    {
        word: "board",
        pos: "名/動",
        ipa: "/bɔːrd/",
        cn: "董事会，木板；登上（船、车、飞机）",
        jp: "取締役会、委員会、板；（飛行機や船に）搭乗する",
        family: "boarding / boardroom / boardwalk / onboard",
        tips: "托业双栖高频词。作名词最常考 board of directors（董事会）；作动词时是交通通勤场景的核心词，指“检票登机/上船/上车”，如 board the flight。",
        desc: "Passengers are boarding now."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "wear",
        category: "简单",
        stem: "All laboratory personnel are strictly required to ________ protective goggles while handling chemical substances.",
        options: ["wear", "place", "face", "board"],
        correct: "wear",
        explanations: {
            guide: "动词语义辨析。空前有动词不定式符号 to，空处需填入动词原形。结合宾语 protective goggles（防护护目镜），表达“佩戴”安全装备，选 wear。",
            family: "wear (v.穿/戴) | place (v.放置) | face (v.面对) | board (v.登机)。",
            details: "wear protective gear/goggles 是工厂安全与实验室场景的标准搭配。其他动词均无法与护目镜构成合理的动宾逻辑。",
            cn: "所有实验室人员在处理化学物质时，都被严格要求佩戴防护护目镜。",
            jp: "化学物質を取り扱う際、すべての実験室職員は保護ゴーグルを着用（wear）することが厳格に義務付けられています。"
        }
    },
    {
        id: 2,
        target: "sign",
        category: "简单",
        stem: "Please ________ your name on the bottom line of the nondisclosure agreement before returning it to HR.",
        options: ["sign", "reach", "hand", "point"],
        correct: "sign",
        explanations: {
            guide: "祈使句动词原形辨析。Please 后面接动词原形，结合宾语 your name（你的名字）以及商务合同语境，表达“签署/签名”，选 sign。",
            family: "sign (v.签署/签名) | reach (v.达到) | hand (v.递交) | point (v.指向)。",
            details: "sign your name 意为“签下你的名字”，是入职或签署合同时最常见的职场指令。其余选项与 name 搭配语义不通。",
            cn: "在将保密协议交回人力资源部之前，请在协议底栏签上您的名字。",
            jp: "秘密保持契約書を人事部に返却する前に、一番下の行に署名（sign）してください。"
        }
    },
    {
        id: 3,
        target: "place",
        category: "简单",
        stem: "Customers who ________ an order online before 2:00 P.M. qualify for same-day shipping.",
        options: ["place", "wear", "water", "board"],
        correct: "place",
        explanations: {
            guide: "定语从句谓语动词及固定搭配。who 引导的定语从句修饰复数名词 Customers，空处需要填入动词原形，且与后面的 an order 构成固定搭配，选 place。",
            family: "place (v.下订单/放置) | wear (v.穿戴) | water (v.浇水) | board (v.登机)。",
            details: "place an order 是电子商务与物流买卖场景中最高频的固定短语，意为“下订单”。其他动词均不与 order 构成此类商务特定搭配。",
            cn: "下午2:00之前在网上开单的客户，有资格享受当天发货服务。",
            jp: "午後2時前にオンラインで注文（place an order）されたお客様は、当日発送の対象となります。"
        }
    },
    {
        id: 4,
        target: "board",
        category: "简单",
        stem: "Passengers traveling to London should proceed to Gate 15 to ________ the aircraft immediately.",
        options: ["board", "face", "reach", "hand"],
        correct: "board",
        explanations: {
            guide: "动词不定式及交通运输场景。to 后面接动词原形，针对的宾语是 the aircraft（飞机），表达“登上”交通工具，选 board。",
            family: "board (v.登上飞机/船) | face (v.面对) | reach (v.抵达) | hand (v.传递)。",
            details: "board the aircraft/flight/train 意为登机/上车，是机场广播和旅游听力Part 1/3/4 的核心词。reach 虽表示抵达，但它是及物动词，直接接目的地（如 reach London），不能接交通工具表示登机。",
            cn: "前往伦敦的旅客请立即前往15号登机口登机。",
            jp: "ロンドンへご旅行のお客様は、すぐに15番ゲートへ進み、航空機に搭乗（board）してください。"
        }
    },
    {
        id: 5,
        target: "water",
        category: "简单",
        stem: "The maintenance staff will ________ the indoor decorative plants every Monday morning.",
        options: ["water", "point", "sign", "wear"],
        correct: "water",
        explanations: {
            guide: "助动词后的动词原形语义辨析。will 后面需要接动词原形，主语是维护人员（maintenance staff），宾语是植物（plants），选 water。",
            family: "water (v.浇水) | point (v.指向) | sign (v.签署) | wear (v.穿戴)。",
            details: "water the plants 意为“给植物浇水”，属于办公室后勤、设施维护场景的经典Part 1 动作。其他动词均不合逻辑。",
            cn: "物业维护人员将在每周一早上为室内的装饰植物浇水。",
            jp: "メンテナンススタッフは、毎週月曜日の朝に室内の装飾植物に水やり（water）をします。"
        }
    },
    {
        id: 6,
        target: "side by side",
        category: "简单",
        stem: "The two newly acquired computer servers were installed ________ in the temperature-controlled server room.",
        options: ["side by side", "mainly", "probably", "most likely"],
        correct: "side by side",
        explanations: {
            guide: "副词短语修饰语辨析。空格用于修饰动词被动语态 were installed，用以形容两台服务器物理摆放的相对位置，选 side by side。",
            family: "side by side (adv.并排地) | mainly (adv.主要地) | probably (adv.大概) | most likely (adv.最可能)。",
            details: "installed side by side 表示“并排安装”，完美契合机房设备配置或办公室布局场景。其他副词无法提供空间方位特征。",
            cn: "这两台新购置的计算机服务器并排安装在控温机房内。",
            jp: "新しく購入された2台のコンピューターサーバーは、温度管理されたサーバー室内に並んで（side by side）設置されました。"
        }
    },
    {
        id: 7,
        target: "reach",
        category: "中等",
        stem: "After several rounds of intense negotiations, the legal teams finally managed to ________ a compromise on the contract terms.",
        options: ["reach", "face", "point", "sign"],
        correct: "reach",
        explanations: {
            guide: "固定动宾搭配。managed to 后面接动词原形，结合宾语 a compromise（妥协/折中方案），表达达成某种商务共识，选 reach。",
            family: "reach (v.达成/联系) | face (v.面对) | point (v.指出) | sign (v.签署)。",
            details: "reach a compromise 或 reach an agreement 是商务谈判的黄金高频短语，表示经过谈判“达成妥协/协议”。其他动词均不能与 compromise 构成该固定语义。",
            cn: "经过几轮激烈的谈判，法律团队最终成功就合同条款达成了妥协。",
            jp: "数回にわたる激しい交渉の末、法務チームはついに契約条件について妥協に達する（reach a compromise）ことができました。"
        }
    },
    {
        id: 8,
        target: "face",
        category: "中等",
        stem: "The manufacturing industry is expected to ________ severe labor shortages over the next decade due to demographic shifts.",
        options: ["face", "board", "wear", "water"],
        correct: "face",
        explanations: {
            guide: "高阶商务动词语义辨析。is expected to 后面需要接动词原形，针对的宾语是未来的负面危机 severe labor shortages（严重的劳动力短缺），选 face。",
            family: "face (v.面对/直面) | board (v.登机) | wear (v.穿戴) | water (v.浇水)。",
            details: "face shortages/challenges 意为“面临短缺/挑战”，用于描述行业或公司所遭遇的客观困境。其他选项在语义上完全无法与职场危机搭配。",
            cn: "由于人口结构的变化，预计制造业在未来十年将面临严重的劳动力短缺。",
            jp: "人口動態の変化により、製造業は今後10年間にわたり深刻な労働力不足に直面する（face）と予想されています。"
        }
    },
    {
        id: 9,
        target: "hand",
        category: "中等",
        stem: "Mr. Tanaka ________ in his official resignation letter to the department head after receiving a better job offer.",
        options: ["handed", "pointed", "placed", "signed"],
        correct: "handed",
        explanations: {
            guide: "动词短语及职场场景。空格后有介词 in 组成短语，且主语为个人，宾语为离职信（resignation letter），表达“提交”，选 handed。",
            family: "handed (v-ed提交/传递) | pointed (v-ed指出) | placed (v-ed放置) | signed (v-ed签署)。",
            details: "hand in 是 submit 的高频地道同义短语，意为“提交/上交（报告、辞职信等）”。虽然 signed a letter 语意可行，但 sign 不能与介词 in 搭配，故排除。",
            cn: "在收到更好的工作邀约后，田中先生向部门主管递交了正式的辞职信。",
            jp: "より良い条件の求人を受け取った後、田中氏は部門長に正式な辞任届を提出（handed in）しました。"
        }
    },
    {
        id: 10,
        target: "point",
        category: "中等",
        stem: "During the quarterly review, the financial analyst ________ out that operational costs had decreased by ten percent.",
        options: ["pointed", "boarded", "reached", "faced"],
        correct: "pointed",
        explanations: {
            guide: "动词短语配合从句。空格后带介词 out，且后方接 that 引导的宾语从句，表达在会上“指出/表明某事实”，选 pointed。",
            family: "pointed (v-ed指出) | boarded (v-ed登机) | reached (v-ed抵达) | faced (v-ed面对)。",
            details: "point out 是托业阅读与听力中极高频的动词短语，意为“指出”。board out, reach out (通常接 to sb), face out 均无法引导后面的事实从句。",
            cn: "在季度审查期间，财务分析师指出，运营成本已经降低了百分之十。",
            jp: "四半期レビューの中で、財務アナリストは運営コストが10％減少したことを指摘（pointed out）しました。"
        }
    },
    {
        id: 11,
        target: "place",
        category: "中等",
        stem: "The human resources manager announced the permanent ________ of the new workstations on the third floor.",
        options: ["placement", "placeable", "placing", "placed"],
        correct: "placement",
        explanations: {
            guide: "名词词族派生词辨析。空格位于定冠词 the 和形容词 permanent（永久的）之后，需要填入名词作为宾语中心语，选 placement。",
            family: "placement (n.布置/安置/人员配置) | placeable (adj.可放置的) | placing (v-ing放置中) | placed (v-ed已放置)。",
            details: "placement 在办公语境中指代办公桌、设备等的“安置/布置/合理摆放”，或者指人才的“职位分配”。其他变形不是传统核心名词，无法在此充当中心语。",
            cn: "人力资源部经理宣布了三楼新工作站的永久安置方案。",
            jp: "人事マネージャーは、3階の新しいワークステーションの恒久的な配置（placement）を発表しました。"
        }
    },
    {
        id: 12,
        target: "board",
        category: "中等",
        stem: "The airline agent announced that ________ passes must be presented along with a valid government-issued ID.",
        options: ["boarding", "boardroom", "boarded", "boards"],
        correct: "boarding",
        explanations: {
            guide: "名词修饰与专有名词搭配。空格修饰后面的名词复数 passes（证件/票据），构成复合专有名词“登机牌”，选 boarding。",
            family: "boarding (n./adj.登机) | boardroom (n.董事会会议室) | boarded (v-ed已登机) | boards (n.木板/复数)。",
            details: "boarding pass 是机场通勤场景必考的复合名词，意为“登机牌”。boardroom pass 语意不通；其他动词形式不具备定语修饰功能。",
            cn: "航空公司工作人员宣布，必须出示登机牌以及政府签发的有效身份证件。",
            jp: "航空会社の係員は、政府発行の有効な身分証明書と一緒に搭乗（boarding）券を提示しなければならないと発表しました。"
        }
    },
    {
        id: 13,
        target: "sign",
        category: "困难",
        stem: "The contract will become legally binding only after the CEO's authorized ________ is affixed to the document.",
        options: ["signature", "signage", "signatory", "signing"],
        correct: "signature",
        explanations: {
            guide: "名词派生词高阶语义辨析。空格位于所有格 CEO's 以及形容词 authorized（经授权的）之后，需填入名词作从句主语。指代印在文件上的“亲笔签名”，选 signature。",
            family: "signature (n.个人签名) | signage (n.引导标识) | signatory (n.签署国/签署方) | signing (n.签署行为)。",
            details: "signature 指个人的具体签名。signage 泛指商场或街道的指示牌、招牌，完全不符合文件盖章签名的场景。affix a signature to a document 意为在文件上签名。",
            cn: "该合同只有在首席执行官的授权签名盖在文件上之后，才具有法律约束力。",
            jp: "CEOの権限ある署名（signature）が書類に付されて初めて、その契約は法的拘束力を持つようになります。"
        }
    },
    {
        id: 14,
        target: "wear",
        category: "困难",
        stem: "The technology startup specializes in developing innovative ________ devices that track employee health metrics.",
        options: ["wearable", "weariness", "wearing", "wearer"],
        correct: "wearable",
        explanations: {
            guide: "形容词派生词及前置定语。空格位于名词 devices 之前，需要填入形容词作定语。结合健康监测设备的技术语境，表达“可穿戴的”，选 wearable。",
            family: "wearable (adj.可穿戴的) | weariness (n.疲惫) | wearing (adj.令人疲倦的) | wearer (n.穿着者)。",
            details: "wearable devices / wearable technology 是高新职场及智能硬件场景的黄金核心词，指“可穿戴设备”。weariness 指人的肉体疲劳，与设备无关。",
            cn: "这家技术初创公司专门开发用于追踪员工健康指标的创新型可穿戴设备。",
            jp: "そのITスタートアップ企業は、従業員の健康指標を追跡する革新的なウェアラブル（wearable）機器の開発を専門としています。"
        }
    },
    {
        id: 15,
        target: "reach",
        category: "困难",
        stem: "Due to a severe network outage, the company's central cloud database remained completely ________ for over three hours.",
        options: ["unreachable", "reachability", "overreached", "reaching"],
        correct: "unreachable",
        explanations: {
            guide: "否定前缀形容词作表语。空格位于系动词 remained 之后，且受到副词 completely 修饰，需填入形容词。结合网络故障（outage）造成的负面结果，选 unreachable。",
            family: "unreachable (adj.无法联络的/无法触及的) | reachability (n.可达性) | overreached (v-ed伸手过长/超负荷) | reaching (v-ing达到中)。",
            details: "unreachable 在IT与电信场景中表示服务器、数据库“无法访问/无法连接”。由于是负面故障，带有否定前缀 un- 的形容词是唯一符合逻辑的选项。",
            cn: "由于网络严重中断，公司的中央云数据库在三个多小时内完全无法访问。",
            jp: "深刻なネットワーク障害のため、会社のセントラルクラウドデータベースは3時間以上にわたり完全にアクセス不能（unreachable）な状態が続きました。"
        }
    },
    {
        id: 16,
        target: "face",
        category: "困难",
        stem: "Resolving the complex supply chain bottleneck requires a ________ strategy involving multiple global vendors.",
        options: ["multifaceted", "faceplate", "faceless", "surfaced"],
        correct: "multifaceted",
        explanations: {
            guide: "高阶派生形容词辨析。空格用于修饰名词 strategy（策略），需要一个能体现“结合多个国际供应商、处理复杂瓶颈”的形容词，表达“多维度的/多方面的”，选 multifaceted。",
            family: "multifaceted (adj.多层面的/多才多艺的) | faceplate (n.面板) | faceless (adj.不知名的/无个性的) | surfaced (v-ed浮出水面)。",
            details: "multifaceted 衍生自 face（面），意为多层面的、复杂的，是高级商务公文评价战略（strategy）或问题时的常用词。其余源自 face 的词汇均不符合策略的修饰属性。",
            cn: "解决复杂的供应链瓶颈需要一个涉及多个全球供应商的多层面战略。",
            jp: "複雑なサプライチェーンのボトルネックを解決するには、複数のグローバルベンダーが関与する多面的な（multifaceted）戦略が必要です。"
        }
    },
    {
        id: 17,
        target: "board",
        category: "困难",
        stem: "The critical decision regarding the corporate merger will be finalized in the ________ tomorrow afternoon.",
        options: ["boardroom", "boarding", "boardwalk", "scoreboard"],
        correct: "boardroom",
        explanations: {
            guide: "复合名词高阶地点辨析。定冠词 the 之后需要接一个地点名词。涉及公司合并（corporate merger）这类核心最高机密的拍板决策，开会地点必然在“董事会会议室”，选 boardroom。",
            family: "boardroom (n.董事会会议室) | boarding (n.搭乘) | boardwalk (n.木板路) | scoreboard (n.记分牌)。",
            details: "boardroom 是托业行政高管板块的绝对高频词，专指公司核心层开会的董事会大厅。boardwalk 是旅游景区海边的木板步行道，属于典型的字面干扰项。",
            cn: "关于公司合并的重大决定将于明天下午在董事会会议室敲定。",
            jp: "企業合併に関する重大な決定は、明日の午後、取締役会会議室（boardroom）で最終決定される予定です。"
        }
    },
    {
        id: 18,
        target: "point",
        category: "困难",
        stem: "Without comprehensive market research, launching a promotional campaign at this stage would be entirely ________.",
        options: ["pointless", "pointed", "pointer", "pointedly"],
        correct: "pointless",
        explanations: {
            guide: "否定后缀形容词及高阶语意。would be 后面需要填入形容词作表语。前置条件是“缺乏全面的市场调研（Without comprehensive research）”，因此在这个阶段强行推进活动是“毫无意义的”，选 pointless。",
            family: "pointless (adj.毫无意义的/徒劳的) | pointed (adj.尖锐的) | pointer (n.指针/提示) | pointedly (adv.尖锐地)。",
            details: "pointless 意为没有得分点、没有实际目的和价值，即毫无意义。pointed 虽也是形容词，但通常表示说话言辞尖锐，与商业投资的成败逻辑不符。",
            cn: "如果没有全面的市场调研，在现阶段发起促销活动将完全是毫无意义的。",
            jp: "包括的な市場調査がなければ、この段階でプロモーションキャンペーンを展開することは完全に無意味（pointless）でしょう。"
        }
    }
];