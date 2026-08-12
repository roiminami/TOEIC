// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data361-370.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "lens",
        pos: "名",
        ipa: "/lenz/",
        cn: "镜头，透镜，镜片",
        jp: "レンズ、カメラレンズ",
        family: "lenses",
        tips: "摄影与视力设备高频：camera lens（相机镜头），contact lenses（隐形眼镜）。",
        desc: "The camera lens is clean."
    },
    {
        word: "stain",
        pos: "名/動",
        ipa: "/steɪn/",
        cn: "污渍，印迹；玷污，染色",
        jp: "染み、汚れ；弄物にする",
        family: "stained / stainless / staining",
        tips: "Part 1 & 清洁维护高频：remove a stain（去除污渍），stainless steel（不锈钢）。",
        desc: "She removed the carpet stain."
    },
    {
        word: "infect",
        pos: "動",
        ipa: "/ɪnˈfekt/",
        cn: "感染，传染，侵染（系统）",
        jp: "感染させる、汚染する",
        family: "infection / infectious / infected",
        tips: "医疗与IT安全高频：infect computers（感染电脑），infectious disease（传染病）。",
        desc: "Viruses can infect computers."
    },
    {
        word: "obligated",
        pos: "形",
        ipa: "/ˈɑːblɪɡeɪtɪd/",
        cn: "有义务的，有责任的",
        jp: "義務がある、責任を負う",
        family: "obligate / obligation / obligatory",
        tips: "合同与法律高频：feel obligated to do sth（觉得有义务做某事），be obligated by law（依法负有义务）。",
        desc: "We are obligated to help."
    },
    {
        word: "commerce",
        pos: "名",
        ipa: "/ˈkɑːmɜːrs/",
        cn: "商业，贸易",
        jp: "商業、貿易、通商",
        family: "commercial / commercially / commercialize",
        tips: "经济与IT高频：electronic commerce / e-commerce（电子商务），chamber of commerce（商会）。",
        desc: "International commerce is growing fast."
    },
    {
        word: "southbound",
        pos: "形/副",
        ipa: "/ˈsaʊθbaʊnd/",
        cn: "向南的，南下的；向南",
        jp: "南行きの、南へ向かう",
        family: "south / southbound",
        tips: "交通与路况高频：southbound lane/traffic（南下车道/流量），southbound train（南下列车）。",
        desc: "Take the southbound highway lane."
    },
    {
        word: "barring",
        pos: "介",
        ipa: "/ˈbɑːrɪŋ/",
        cn: "除非，若无……",
        jp: "〜がなければ、〜を除いて",
        family: "bar / barred",
        tips: "商务预测高频介词：barring unforeseen delays/weather（除非有不可预见的延误/恶劣天气）。",
        desc: "Barring rain, we will play."
    },
    {
        word: "ado",
        pos: "名",
        ipa: "/əˈduː/",
        cn: "纷扰，忙乱，拖延",
        jp: "騒ぎ、面倒、無駄な時間",
        family: "ado",
        tips: "演讲与会议高频固定短语：without further ado（言归正传/不再啰嗦）。",
        desc: "Without further ado, let's start."
    },
    {
        word: "preservative",
        pos: "名/形",
        ipa: "/prɪˈzɜːrvətɪv/",
        cn: "防腐剂；防腐的，保存的",
        jp: "防腐剤、保存料；保存の",
        family: "preserve / preservation / preserved",
        tips: "食品与包装高频：free of artificial preservatives（不含人工防腐剂）。",
        desc: "No artificial preservatives were added."
    },
    {
        word: "compensated",
        pos: "形/動",
        ipa: "/ˈkɑːmpenseɪtɪd/",
        cn: "获得补偿的，受赔偿的",
        jp: "補償された、賠償を受けた",
        family: "compensate / compensation / compensatory",
        tips: "HR与财务高频：fully compensated for overtime/losses（加班/损失获得全额补偿）。",
        desc: "Workers were fully compensated."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "stain",
        category: "简单",
        stem: "The customer used a special cleaner to remove a coffee ________ from his white shirt.",
        options: ["stain", "lens", "commerce", "preservative"],
        correct: "stain",
        explanations: {
            guide: "清洁与衣物名词考点。remove a coffee ________ 结合衬衫洗涤，选 stain（污渍）。",
            family: "stain (n.污渍) | lens (n.镜头) | commerce (n.商业) | preservative (n.防腐剂)。",
            details: "coffee stain 意为咖啡污渍。lens（镜头）、commerce（商业）均不符合衣物清洁语境。",
            cn: "顾客使用了一种特殊的清洁剂去除了白衬衫上的咖啡污渍。",
            jp: "お客様は白いシャツについたコーヒーの染み（stain）を取り除くために特別な洗剤を使用しました。"
        }
    },
    {
        id: 2,
        target: "lens",
        category: "简单",
        stem: "The photographer wiped the camera ________ carefully before taking portraits of the executives.",
        options: ["lens", "stain", "ado", "preservative"],
        correct: "lens",
        explanations: {
            guide: "摄影器材名词考点。wiped the camera ________ 结合摄影师擦拭器材，选 lens（镜头）。",
            family: "lens (n.镜头) | stain (n.污渍) | ado (n.纷扰) | preservative (n.防腐剂)。",
            details: "camera lens 意为相机镜头。stain（污渍）、ado（忙乱）均非摄影师擦拭保养的设备部件。",
            cn: "摄影师在为高管拍摄肖像之前，仔细擦拭了相机镜头。",
            jp: "写真家は役員のポートレートを撮影する前に、カメラのレンズ（lens）を慎重に拭きました。"
        }
    },
    {
        id: 3,
        target: "commerce",
        category: "简单",
        stem: "The city established a local chamber of ________ to support small business owners.",
        options: ["commerce", "infection", "obligation", "preservative"],
        correct: "commerce",
        explanations: {
            guide: "商务组织专有名词。chamber of ________ 属于固定商业短语，表达“商会”，选 commerce。",
            family: "commerce (n.商业) | infection (n.感染) | obligation (n.义务) | preservative (n.防腐剂)。",
            details: "chamber of commerce 指商会。infection（感染）、obligation（义务）无法构成该商业组织专有名词。",
            cn: "该市成立了当地商会，以支持小企业主。",
            jp: "市は小規模事業者主を支援するため、地元の商工会議所（chamber of commerce）を設立しました。"
        }
    },
    {
        id: 4,
        target: "southbound",
        category: "简单",
        stem: "Commuters should expect heavy traffic on the ________ highway during peak evening hours.",
        options: ["southbound", "obligated", "compensated", "infectious"],
        correct: "southbound",
        explanations: {
            guide: "交通方向修饰语。________ highway 结合晚高峰交通，表达“向南的/南下的”高速公路，选 southbound。",
            family: "southbound (adj.向南的) | obligated (adj.有义务的) | compensated (adj.受补偿的) | infectious (adj.传染的)。",
            details: "southbound highway 意为南下方向的高速公路。obligated（有义务的）无法修饰交通公路。",
            cn: "在傍晚高峰时段，通勤者应预料到南下方向的高速公路将出现拥堵。",
            jp: "通勤者は夕方のピーク時間帯に、南行き（southbound）高速道路での激しい渋滞を予想すべきです。"
        }
    },
    {
        id: 5,
        target: "ado",
        category: "简单",
        stem: "Without further ________, the host introduced the keynote speaker to the audience.",
        options: ["ado", "stain", "commerce", "lens"],
        correct: "ado",
        explanations: {
            guide: "主持与演说固定短语。Without further ________ 属于托业经典听力与主持句式，意为“不再啰嗦/言归正传”，选 ado。",
            family: "ado (n.纷扰/拖延) | stain (n.污渍) | commerce (n.商业) | lens (n.镜头)。",
            details: "Without further ado 意为不再啰嗦/言归正传。stain（污渍）、commerce（商业）无此固定搭配。",
            cn: "不再啰嗦，主持人向听众介绍了主旨演讲嘉宾。",
            jp: "前置きはこれくらいにして（Without further ado）、司会者は基調講演者を観客に紹介しました。"
        }
    },
    {
        id: 6,
        target: "preservative",
        category: "简单",
        stem: "The food company prides itself on producing organic juices without any artificial ________.",
        options: ["preservatives", "obligations", "lenses", "infections"],
        correct: "preservatives",
        explanations: {
            guide: "食品添加剂名词复数。without any artificial ________ 结合有机果汁，选 preservatives（防腐剂）。",
            family: "preservatives (n.复数防腐剂) | obligations (n.义务) | lenses (n.镜片) | infections (n.感染)。",
            details: "artificial preservatives 意为人造防腐剂。obligations（义务）、lenses（镜片）不属于食品中的成分添加物。",
            cn: "这家食品公司以生产不含任何人工防腐剂的有机果汁而自豪。",
            jp: "その食品会社は、人工防腐剤（preservatives）を一切使用しないオーガニックジュースの製造に誇りを持っています。"
        }
    },
    {
        id: 7,
        target: "obligated",
        category: "中等",
        stem: "According to the contract terms, the tenant is not ________ to pay for structural building repairs.",
        options: ["obligated", "compensated", "southbound", "infectious"],
        correct: "obligated",
        explanations: {
            guide: "合同条款表语形容词。is not ________ to pay... 结合租客责任，表达无“义务/责任”支付，选 obligated。",
            family: "obligated (adj.有义务的) | compensated (adj.受补偿的) | southbound (adj.南下的) | infectious (adj.传染的)。",
            details: "be obligated to do sth 意为有义务做某事。compensated 意为获得赔偿，与承担维修费用的职责相反。",
            cn: "根据合同条款，租户没有义务支付建筑物结构维修费用。",
            jp: "契約条件によると、賃借人は建物の構造修理代金を支払う義務（obligated）はありません。"
        }
    },
    {
        id: 8,
        target: "barring",
        category: "中等",
        stem: "________ any unforeseen weather delays, the construction project will be finished on Friday.",
        options: ["Barring", "Infecting", "Commercializing", "Compensating"],
        correct: "Barring",
        explanations: {
            guide: "商务预估前置介词。句首填入介词表示“除非有……/若无……”，选 Barring（除非/若无）。",
            family: "Barring (prep.除非/若无) | Infecting (v-ing感染) | Commercializing (v-ing商业化) | Compensating (v-ing补偿)。",
            details: "Barring unforeseen delays 属于商务与工程预测经典结构，意为除非有意外延误。Infecting（感染）不合逻辑。",
            cn: "除非出现意想不到的天气延误，否则该施工项目将于周五完成。",
            jp: "予期せぬ天候による遅延がなければ（Barring）、建設プロジェクトは金曜日に完了する予定です。"
        }
    },
    {
        id: 9,
        target: "compensated",
        category: "中等",
        stem: "Employees who worked overtime during the holiday weekend will be properly ________.",
        options: ["compensated", "obligated", "stained", "infected"],
        correct: "compensated",
        explanations: {
            guide: "HR薪酬与福利被动语态。will be properly ________ 结合假期加班，表达获得合理的“补偿/报酬”，选 compensated。",
            family: "compensated (v-ed/adj.受到补偿的) | obligated (adj.有义务的) | stained (v-ed弄脏的) | infected (v-ed被感染的)。",
            details: "properly compensated 意为获得合理的报酬/补偿。obligated 意为有义务，无法表达给予加班工资酬劳。",
            cn: "在节日周末加班的员工将获得合理的报酬/补偿。",
            jp: "休日の週末に残業した従業員には、適切に補償（compensated）されます。"
        }
    },
    {
        id: 10,
        target: "infect",
        category: "中等",
        stem: "Network administrators installed firewall updates to prevent malicious computer viruses from ________ internal servers.",
        options: ["infecting", "compensating", "barring", "staining"],
        correct: "infecting",
        explanations: {
            guide: "IT网络安全动名词考点。prevent viruses from ________ 表达防止恶意病毒“侵染/感染”服务器，选 infecting。",
            family: "infecting (v-ing感染) | compensating (v-ing补偿) | barring (prep.除非) | staining (v-ing沾污)。",
            details: "infect internal servers 指入侵/感染内部服务器。compensating（补偿）、barring（除非）在此处动宾逻辑不符。",
            cn: "网络管理员安装了防火墙更新，以防止恶意计算机病毒感染内部服务器。",
            jp: "ネットワーク管理者は、悪意のあるコンピュータウイルスが内部サーバーに感染する（infecting）のを防ぐためにファイアウォールを更新しました。"
        }
    },
    {
        id: 11,
        target: "commerce",
        category: "中等",
        stem: "The rapid expansion of electronic ________ has changed traditional retail shopping habits worldwide.",
        options: ["commerce", "commercial", "preservative", "obligation"],
        correct: "commerce",
        explanations: {
            guide: "电商专有名词。electronic ________ 属于托业最高频词组之一，意为“电子商务”，选 commerce。",
            family: "commerce (n.商业) | commercial (adj.商业的/n.广告) | preservative (n.防腐剂) | obligation (n.义务)。",
            details: "electronic commerce (e-commerce) 指电子商务。commercial 是形容词，不能直接紧跟在形容词 electronic 后面作中心语。",
            cn: "电子商务的迅速扩张改变了全球传统的零售购物习惯。",
            jp: "電子商業（commerce）の急速な拡大は、世界中で従来の小売りショッピングの習慣を変えました。"
        }
    },
    {
        id: 12,
        target: "stain",
        category: "中等",
        stem: "Maintenance staff applied a coat of protective wood ________ to the outdoor deck.",
        options: ["stain", "lens", "preservative", "infection"],
        correct: "stain",
        explanations: {
            guide: "建材防护一词多义。applied a coat of wood ________ 指为户外木平台刷一层“木材着色剂/木油漆”，选 stain。",
            family: "stain (n.着色剂/污渍) | lens (n.镜片) | preservative (n.防腐剂) | infection (n.感染)。",
            details: "wood stain 专指用于木材着色与保护的漆面着色剂。preservative 虽有保存之意，但与 wood 连用表述特定涂料时定为 wood stain。",
            cn: "维修人员在户外的木制露台上涂了一层木材保护着色漆。",
            jp: "メンテナンススタッフは屋外デッキに保護用のウッドステイン（stain）を1層塗布しました。"
        }
    },
    {
        id: 13,
        target: "obligated",
        category: "困难",
        stem: "The company fulfilled its legal ________ by providing comprehensive safety training to all factory workers.",
        options: ["obligations", "preservatives", "infections", "compensations"],
        correct: "obligations",
        explanations: {
            guide: "派生名词考点。fulfilled its legal ________ 结构中，形容词 legal 后面接复数名词，表达履行其法律“义务/责任”，选 obligations。",
            family: "obligations (n.复数义务) | preservatives (n.防腐剂) | infections (n.感染) | compensations (n.补偿)。",
            details: "fulfill legal obligations 意为履行法律义务。preservatives（防腐剂）、infections（感染）均非企业履行的合规内容。",
            cn: "该公司通过向所有工厂工人提供全面的安全培训，履行了其法律义务。",
            jp: "同社はすべての工場作業員に包括的な安全研修を提供することで、法的義務（obligations）を果たしました。"
        }
    },
    {
        id: 14,
        target: "compensated",
        category: "困难",
        stem: "The airline offered travel vouchers as ________ to passengers affected by the flight cancellation.",
        options: ["compensation", "preservation", "obligation", "infection"],
        correct: "compensation",
        explanations: {
            guide: "派生名词考点。as ________ 结构中，介词 as 后面接抽象名词，表达作为航班取消的“赔偿/补偿”，选 compensation。",
            family: "compensation (n.赔偿/补偿金) | preservation (n.保存) | obligation (n.义务) | infection (n.感染)。",
            details: "as compensation for... 意为作为对……的赔偿。obligation 是义务，保券是作为给乘客的物质补偿（compensation）。",
            cn: "航空公司向受航班取消影响的乘客提供了旅行代金券作为赔偿。",
            jp: "航空会社は欠航の影響を受けた乗客に、補償（compensation）として旅行クーポンを提示しました。"
        }
    },
    {
        id: 15,
        target: "infect",
        category: "困难",
        stem: "Health officials issued an urgent advisory warning the public about a highly ________ strain of influenza.",
        options: ["infectious", "obligated", "southbound", "compensated"],
        correct: "infectious",
        explanations: {
            guide: "派生形容词作定语。a highly ________ strain 结构中，副词 highly 后面接形容词修饰病毒株，表达“高传染性的”，选 infectious。",
            family: "infectious (adj.高传染性的) | obligated (adj.有义务的) | southbound (adj.南下的) | compensated (adj.受补偿的)。",
            details: "highly infectious strain 意为高度传染性的流感毒株。obligated（有义务的）、southbound（向南的）修饰毒株不合逻辑。",
            cn: "卫生官员发布了紧急警告，提醒公众注意一种高度传染性的流感毒株。",
            jp: "衛生当局は、感染力の高い（infectious）インフルエンザ株について住民に注意を促す緊急アドバイザリーを発令しました。"
        }
    },
    {
        id: 16,
        target: "preservative",
        category: "困难",
        stem: "The historical society dedicated significant resources to the ________ of ancient wooden structures.",
        options: ["preservation", "compensation", "obligation", "infection"],
        correct: "preservation",
        explanations: {
            guide: "派生抽象名词考点。dedicated resources to the ________ of... 表达对古代建筑的“保存/保护”，选名词 preservation。",
            family: "preservation (n.保存/维护) | compensation (n.补偿) | obligation (n.义务) | infection (n.感染)。",
            details: "preservation of ancient structures 意为古代建筑的保存维护。preservative 是防腐剂，非保护保存这一行为过程（preservation）。",
            cn: "历史学会投入了大量资源用于古代木制建筑的保护与保存。",
            jp: "歴史協会は古代の木造建造物の保存（preservation）に多大なリソースを投入しました。"
        }
    },
    {
        id: 17,
        target: "commerce",
        category: "困难",
        stem: "The company decided to air its new Television ________ during the championship football game.",
        options: ["commercial", "commerce", "obligated", "preservative"],
        correct: "commercial",
        explanations: {
            guide: "派生名词一词多义。Television ________ 属于传媒高频词组，意为“电视商业广告”，选 commercial 作名词。",
            family: "commercial (n.商业广告/adj.商业的) | commerce (n.商业) | obligated (adj.有义务的) | preservative (n.防腐剂)。",
            details: "Television commercial 意为电视广告。commerce 是抽象名词（商业），在此处不能与 Television 构成具体的播出电视广告实体。",
            cn: "该公司决定在足球锦标赛期间播放其新的电视商业广告。",
            jp: "同社はサッカー選手権の試合中に新しいテレビCM（commercial）を放映することを決定しました。"
        }
    },
    {
        id: 18,
        target: "barring",
        category: "困难",
        stem: "The project manager confirmed that ________ any unexpected regulatory delays, the new facility will open in October.",
        options: ["barring", "obligation", "preservation", "compensation"],
        correct: "barring",
        explanations: {
            guide: "商务预估前置介词高阶考点。句首填写介词与条件搭配，表达“除非/若无”监管延误，选 barring。",
            family: "barring (prep.除非/若无) | obligation (n.义务) | preservation (n.保存) | compensation (n.补偿)。",
            details: "barring any delays 是托业Part 5的高频高阶考点，相当于 unless there are delays。其余选项均为名词，无法直接引导此类介词短语。",
            cn: "项目经理确认，除非出现意想不到的监管延误，新设施将于 10 月投入使用。",
            jp: "プロジェクトマネージャーは、予期せぬ規制上の遅延がない限り（barring）、新しい施設は10月にオープンすることを確認しました。"
        }
    }
];