// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data231-240.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "cubicle",
        pos: "名",
        ipa: "/ˈkjuːbɪkl/",
        cn: "隔间，小办公隔间",
        jp: "パーティションで区切られた小部屋、キュービクル",
        family: "cube / cubic",
        tips: "办公室场景高频：office cubicle（办公隔间），work in a cubicle（在隔间里工作）。",
        desc: "She works in a cubicle."
    },
    {
        word: "prestigious",
        pos: "形",
        ipa: "/preˈstɪdʒəs/",
        cn: "有名望的，声誉高的",
        jp: "名声のある、一流の",
        family: "prestige / prestigiously",
        tips: "奖项与机构高频：prestigious award/university（有声望的奖项/大学）。",
        desc: "It is a prestigious award."
    },
    {
        word: "acquaintance",
        pos: "名",
        ipa: "/əˈkweɪntəns/",
        cn: "熟人，相识；了解",
        jp: "知人、知面",
        family: "acquaint / acquainted",
        tips: "商务人脉高频：business acquaintance（商务熟人/业务关系），make the acquaintance of sb（结识某人）。",
        desc: "He is a business acquaintance."
    },
    {
        word: "detour",
        pos: "名/動",
        ipa: "/ˈdiːtʊr/",
        cn: "绕道，绕行路；绕道而行",
        jp: "迂回路、回り道；迂回する",
        family: "detouring / detoured",
        tips: "交通与施工高频：take a detour（绕道而行），detour sign（绕行路标）。",
        desc: "We took a short detour."
    },
    {
        word: "eatery",
        pos: "名",
        ipa: "/ˈiːtəri/",
        cn: "餐馆，简便小吃店",
        jp: "飲食店、食堂",
        family: "eat / eater / eating",
        tips: "餐饮与生活场景高频：popular local eatery（受欢迎的当地小餐馆）。",
        desc: "They dined at a local eatery."
    },
    {
        word: "chimney",
        pos: "名",
        ipa: "/ˈtʃɪmni/",
        cn: "烟囱",
        jp: "煙突",
        family: "chimneys",
        tips: "Part 1 建筑与施工场景高频：brick chimney（砖砌烟囱），smoke from the chimney（烟囱冒出的烟）。",
        desc: "Smoke rises from the chimney."
    },
    {
        word: "meticulous",
        pos: "形",
        ipa: "/məˈtɪkjələs/",
        cn: "一丝不苟的，缜密的",
        jp: "細心な、極めて慎重な",
        family: "meticulously / meticulousness",
        tips: "审计与质量控制核心词：meticulous attention to detail（对细节的一丝不苟）。",
        desc: "She is meticulous about details."
    },
    {
        word: "congestion",
        pos: "名",
        ipa: "/kənˈdʒestʃən/",
        cn: "交通拥堵，拥塞",
        jp: "混雑、渋滞",
        family: "congest / congested / congestive",
        tips: "交通与城市规划高频：traffic congestion（交通拥堵），alleviate congestion（缓解拥堵）。",
        desc: "Traffic congestion is severe."
    },
    {
        word: "aligning",
        pos: "動/名",
        ipa: "/əˈlaɪnɪŋ/",
        cn: "对齐，使一致，校准（align的现在分词）",
        jp: "提携させること、整列させること",
        family: "align / alignment / aligned",
        tips: "商务战略与生产高频：aligning goals with strategies（使目标与策略保持一致）。",
        desc: "They are aligning the wheels."
    },
    {
        word: "calibrated",
        pos: "動/形",
        ipa: "/ˈkælɪbreɪtɪd/",
        cn: "校准好的，精调的（calibrate的过去式/分词）",
        jp: "調整された、校正された",
        family: "calibrate / calibration / calibrator",
        tips: "实验室与技术测量高频：precisely calibrated equipment（精确定标/校准的设备）。",
        desc: "The instrument is well calibrated."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "cubicle",
        category: "简单",
        stem: "Each customer service agent works in an individual ________ equipped with a headset and computer.",
        options: ["cubicle", "eatery", "chimney", "detour"],
        correct: "cubicle",
        explanations: {
            guide: "办公设施名词考点。an individual ________ 结合配备耳麦和电脑，指客服人员工作的小“办公隔间”，选 cubicle。",
            family: "cubicle (n.办公隔间) | eatery (n.餐馆) | chimney (n.烟囱) | detour (n.绕道)。",
            details: "individual cubicle 指个人办公隔间。eatery（餐馆）、chimney（烟囱）均不属于办公桌分区设施。",
            cn: "每位客户服务代理都在配有耳机和电脑的独立办公隔间里工作。",
            jp: "各カスタマーサービス担当者は、ヘッドセットとコンピュータが備え付けられた個別のキュービクル（cubicle）で作業しています。"
        }
    },
    {
        id: 2,
        target: "eatery",
        category: "简单",
        stem: "Tourists enjoyed a casual lunch at a small Italian ________ near the town square.",
        options: ["eatery", "detour", "congestion", "cubicle"],
        correct: "eatery",
        explanations: {
            guide: "餐饮场所名词。enjoyed lunch at a small Italian ________ 结合享用午餐，场所选 eatery（小餐馆/小吃店）。",
            family: "eatery (n.小餐馆) | detour (n.绕道) | congestion (n.拥堵) | cubicle (n.隔间)。",
            details: "Italian eatery 意为意式小餐馆。detour（绕道）、congestion（拥堵）均非用餐地点。",
            cn: "游客们在小镇广场附近的一家意式小餐馆享用了简便的午餐。",
            jp: "観光客は町の広場近くにある小さなイタリア料理店（eatery）で気軽なランチを楽しみました。"
        }
    },
    {
        id: 3,
        target: "congestion",
        category: "简单",
        stem: "The morning highway accident caused major traffic ________ for commuting workers.",
        options: ["congestion", "acquaintance", "detour", "chimney"],
        correct: "congestion",
        explanations: {
            guide: "交通状况名词。traffic ________ 属于高频固定短语，指“交通拥堵”，选 congestion。",
            family: "congestion (n.拥堵) | acquaintance (n.熟人) | detour (n.绕路) | chimney (n.烟囱)。",
            details: "traffic congestion 意为交通拥堵。acquaintance（熟人）、chimney（烟囱）与公路事故造成的交通状况无关。",
            cn: "早晨的高速公路事故给通勤工人造成了严重的交通拥堵。",
            jp: "朝の高速道路での事故により、通勤する作業員に深刻な交通渋滞（congestion）が発生しました。"
        }
    },
    {
        id: 4,
        target: "detour",
        category: "简单",
        stem: "Construction signs instructed drivers to follow a temporary ________ around the closed bridge.",
        options: ["detour", "cubicle", "eatery", "congestion"],
        correct: "detour",
        explanations: {
            guide: "道路指示名词。follow a temporary ________ 结合绕过封闭的桥梁（around the closed bridge），选 detour（绕行路/绕道）。",
            family: "detour (n.绕道/绕行路) | cubicle (n.隔间) | eatery (n.餐馆) | congestion (n.拥堵)。",
            details: "follow a temporary detour 意为遵循临时绕行路线。cubicle（隔间）、eatery（餐馆）与道路指示语境不符。",
            cn: "施工标志指示司机沿着封闭桥梁周围的临时绕行路行驶。",
            jp: "工事の標識はドライバーに対し、閉鎖された橋の周囲の臨時迂回路（detour）に従うよう指示しました。"
        }
    },
    {
        id: 5,
        target: "prestigious",
        category: "简单",
        stem: "The university offered a full scholarship to students admitted into its ________ law program.",
        options: ["prestigious", "meticulous", "calibrated", "aligning"],
        correct: "prestigious",
        explanations: {
            guide: "形容词作前置定语。修饰 law program（法学项目），表达“享有盛誉的/有名望的”，选 prestigious。",
            family: "prestigious (adj.享有盛誉的) | meticulous (adj.一丝不苟的) | calibrated (adj.校准好的) | aligning (v-ing对齐)。",
            details: "prestigious program 意为顶尖/享誉盛名的项目。meticulous 指为人或做细致工作缜密，不修饰项目本身声誉。",
            cn: "该大学向被其享有盛誉的法学项目录取的学生提供全额奖学金。",
            jp: "その大学は、名声のある（prestigious）法学プログラムに入学を認められた学生に全額奨学金を提供しました。"
        }
    },
    {
        id: 6,
        target: "chimney",
        category: "简单",
        stem: "Maintenance workers inspected the brick ________ on the roof to clear any blockage.",
        options: ["chimney", "eatery", "cubicle", "detour"],
        correct: "chimney",
        explanations: {
            guide: "建筑结构名词。brick ________ on the roof（屋顶上的砖砌……）结合清理阻塞物，选 chimney（烟囱）。",
            family: "chimney (n.烟囱) | eatery (n.餐馆) | cubicle (n.隔间) | detour (n.绕路)。",
            details: "brick chimney 意为砖砌烟囱。eatery（餐馆）、cubicle（隔间）均不建在屋顶上作排烟用途。",
            cn: "维修工人检查了屋顶上的砖砌烟囱，以清除任何堵塞物。",
            jp: "メンテナンス作業員は障害物を取り除くため、屋根の上のレンガ造りの煙突（chimney）を点検しました。"
        }
    },
    {
        id: 7,
        target: "meticulous",
        category: "中等",
        stem: "The research assistant was praised for her ________ record-keeping during the clinical trial.",
        options: ["meticulous", "prestigious", "congested", "calibrated"],
        correct: "meticulous",
        explanations: {
            guide: "工作态度形容词。修饰 record-keeping（记录工作），表达“一丝不苟的/极细致的”，选 meticulous。",
            family: "meticulous (adj.一丝不苟的) | prestigious (adj.有名望的) | congested (adj.拥堵的) | calibrated (adj.校准好的)。",
            details: "meticulous record-keeping 意为一丝不苟的记录。prestigious（有名望的）不用于修饰个人具体细致的工作动作。",
            cn: "研究助理在临床试验期间一丝不苟的记录工作受到了表扬。",
            jp: "研究助手は、治験中の極めて細心な（meticulous）記録管理で称賛されました。"
        }
    },
    {
        id: 8,
        target: "acquaintance",
        category: "中等",
        stem: "Mr. Lee met an old business ________ at the international trade exhibition yesterday.",
        options: ["acquaintance", "eatery", "congestion", "detour"],
        correct: "acquaintance",
        explanations: {
            guide: "职场人际关系名词。business ________ 属于商务高频短语，意为“业务熟人/商务相识”，选 acquaintance。",
            family: "acquaintance (n.熟人/相识) | eatery (n.餐馆) | congestion (n.拥堵) | detour (n.绕行)。",
            details: "business acquaintance 指商务熟人。eatery（餐馆）、detour（绕路）均非指代人的名词。",
            cn: "李先生昨天在国际贸易展览会上遇到了一位业务上的老熟人。",
            jp: "李氏は昨日、国際貿易展示会で古いビジネス上の知人（acquaintance）に会いました。"
        }
    },
    {
        id: 9,
        target: "calibrated",
        category: "中等",
        stem: "Laboratory technicians used a precisely ________ scale to measure the chemical compounds.",
        options: ["calibrated", "calibrating", "aligning", "congested"],
        correct: "calibrated",
        explanations: {
            guide: "分词作前置定语。precisely ________ scale（精确……的秤），表达仪器被“定标/校准好的”，选过去分词 calibrated。",
            family: "calibrated (adj./v-ed校准好的) | calibrating (v-ing校准) | aligning (v-ing对齐) | congested (adj.拥堵的)。",
            details: "precisely calibrated scale 指精确校准过的天平/秤。calibrating 表示主动校准动作，不能作为修饰测量工具状态的被动分词。",
            cn: "实验室技术人员使用精细校准过的天平来测量化学化合物。",
            jp: "研究室の技術者は、化学化合物を測定するために正確に調整された（calibrated）天秤を使用しました。"
        }
    },
    {
        id: 10,
        target: "aligning",
        category: "中等",
        stem: "The consultant is assisting the firm in ________ its operational strategies with new market demands.",
        options: ["aligning", "align", "meticulous", "detour"],
        correct: "aligning",
        explanations: {
            guide: "介词后的动名词与搭配。in 后面接动名词，结合 aligning A with B（使 A 与 B 保持一致/对齐），选 aligning。",
            family: "aligning (v-ing使一致/对齐) | align (v.对齐) | meticulous (adj.缜密的) | detour (n.绕道)。",
            details: "assisting in aligning... 意为协助调整……使其保持一致。align 是动词原形，不能跟在介词 in 后面作宾语。",
            cn: "顾问正协助该公司调整其运营策略，使其与新的市场需求保持一致。",
            jp: "コンサルタントは、同社が業務戦略を新しい市場需要に合致させる（aligning）のを支援しています。"
        }
    },
    {
        id: 11,
        target: "detour",
        category: "中等",
        stem: "Because the main road was flooded, the delivery van had to ________ through the countryside.",
        options: ["detour", "detouring", "congest", "acquaint"],
        correct: "detour",
        explanations: {
            guide: "情态动词短语。had to 后面接动词原形，表达道路被淹不得不“绕道而行”，选动词 detour。",
            family: "detour (v./n.绕道) | detouring (v-ing) | congest (v.拥塞) | acquaint (v.使熟悉)。",
            details: "had to detour 意为不得不绕行。detouring 是分词，不能跟在 had to 之后作谓语动词原形。",
            cn: "由于主路被淹，送货车不得不绕道乡村行驶。",
            jp: "主要道路が水没したため、配送バンは郊外を迂回（detour）しなければなりませんでした。"
        }
    },
    {
        id: 12,
        target: "congestion",
        category: "中等",
        stem: "City officials implemented toll charges during peak hours to alleviate severe urban ________.",
        options: ["congestion", "congested", "eatery", "chimney"],
        correct: "congestion",
        explanations: {
            guide: "动词宾语名词。alleviate severe urban ________（缓解严重的城市……），选名词 congestion（拥堵）。",
            family: "congestion (n.拥堵) | congested (adj.拥堵的) | eatery (n.餐馆) | chimney (n.烟囱)。",
            details: "alleviate congestion 属于托业经典搭配，意为缓解拥堵。congested 是形容词，不能直接作及物动词 alleviate 的宾语。",
            cn: "市官员在高峰时段实行收费，以缓解严重的城市交通拥堵。",
            jp: "市の当局者は、深刻な都市の混雑（congestion）を緩和するために、ピーク時間帯に通行料を導入しました。"
        }
    },
    {
        id: 13,
        target: "meticulous",
        category: "困难",
        stem: "The chief financial officer's ________ attention to detail prevented a significant accounting error.",
        options: ["meticulous", "meticulously", "prestigious", "acquainted"],
        correct: "meticulous",
        explanations: {
            guide: "形容词修饰抽象名词。________ attention to detail 是商务与审计场景的高阶固定表达，选形容词 meticulous。",
            family: "meticulous (adj.一丝不苟的) | meticulously (adv.一丝不苟地) | prestigious (adj.有名望的) | acquainted (adj.熟悉的)。",
            details: "meticulous attention 意为极其严谨缜密的关注。meticulously 是副词，不能作名词 attention 的前置定语。",
            cn: "首席财务官对细节的一丝不苟避免了一起重大的会计错误。",
            jp: "最高財務責任者の細部への細心な（meticulous）注意により、重大な会計上のエラーが防がれました。"
        }
    },
    {
        id: 14,
        target: "calibrated",
        category: "困难",
        stem: "High-precision manufacturing processes require the regular ________ of all electronic sensors.",
        options: ["calibration", "calibrated", "aligning", "congestive"],
        correct: "calibration",
        explanations: {
            guide: "派生名词考点。require the regular ________ of... 结构中，形容词 regular 后面接名词形式 calibration（校准/标定）。",
            family: "calibration (n.校准/标定) | calibrated (adj.校准好的) | aligning (v-ing对齐) | congestive (adj.充血的)。",
            details: "regular calibration of sensors 意为传感器的定期校准。calibrated 是过去分词，不能跟在定冠词与形容词后作宾语中心语。",
            cn: "高精度制造过程要求对所有电子传感器进行定期校准。",
            jp: "高精度な製造プロセスでは、すべての電子センサーの定期的な校正（calibration）が必要です。"
        }
    },
    {
        id: 15,
        target: "aligning",
        category: "困难",
        stem: "The merger failed primarily due to poor ________ between the corporate cultures of the two firms.",
        options: ["alignment", "aligning", "acquaintance", "detour"],
        correct: "alignment",
        explanations: {
            guide: "派生名词考点。due to poor ________ between... 结构中，形容词 poor 后面接抽象名词 alignment（契合/对齐/一致）。",
            family: "alignment (n.契合/对齐/一致) | aligning (v-ing) | acquaintance (n.熟人) | detour (n.绕道)。",
            details: "poor alignment 意为文化契合度差/缺乏一致性。aligning 是动名词/分词，在此处作独立名词概念时选用派生名词 alignment。",
            cn: "合并失败的主要原因是两家公司企业文化之间缺乏契合。",
            jp: "合併が失敗したのは、主に両社の企業文化間の整合性（alignment）が乏しかったためです。"
        }
    },
    {
        id: 16,
        target: "acquaintance",
        category: "困难",
        stem: "During his long career in finance, the executive cultivated numerous valuable professional ________.",
        options: ["acquaintances", "acquaintance", "cubicles", "eateries"],
        correct: "acquaintances",
        explanations: {
            guide: "可数名词复数考点。cultivated numerous valuable professional ________ 结构中，numerous 后面接复数可数名词，选 acquaintances（熟人/人脉关系）。",
            family: "acquaintances (n.复数熟人/人脉) | acquaintance (n.单数) | cubicles (n.隔间) | eateries (n.餐馆)。",
            details: "professional acquaintances 指职业熟人/人脉。numerous 限定词要求接复数可数名词 acquaintances。",
            cn: "在他漫长的金融生涯中，这位高管结交了许多宝贵的业内熟人与人脉。",
            jp: "金融業界での長いキャリアの中で、その幹部は数多くの価値ある専門的な知人（acquaintances）を培いました。"
        }
    },
    {
        id: 17,
        target: "prestigious",
        category: "困难",
        stem: "Winning the international award significantly elevated the young architect's professional ________.",
        options: ["prestige", "prestigious", "meticulous", "congestion"],
        correct: "prestige",
        explanations: {
            guide: "派生抽象名词考点。elevated the architect's professional ________ 结构中，物主代词与形容词后接名词，表达“声望/名气”，选 prestige。",
            family: "prestige (n.声望/威望) | prestigious (adj.有名望的) | meticulous (adj.缜密的) | congestion (n.拥堵)。",
            details: "professional prestige 意为职业声望。prestigious 是形容词，不能直接作及物动词 elevate 的宾语。",
            cn: "赢得这项国际奖项显着提升了这位年轻建筑师的专业声望。",
            jp: "国際的な賞を受賞したことで、その若手建築家の専門的な名声（prestige）は大幅に高まりました。"
        }
    },
    {
        id: 18,
        target: "chimney",
        category: "困难",
        stem: "Environmental regulations require modern manufacturing plants to install filtration systems in every exhaust ________.",
        options: ["chimney", "cubicle", "detour", "eatery"],
        correct: "chimney",
        explanations: {
            guide: "高阶工业环保名词。every exhaust ________ 指工厂的“排气烟囱”，选 chimney。",
            family: "chimney (n.烟囱/排气筒) | cubicle (n.隔间) | detour (n.绕道) | eatery (n.餐馆)。",
            details: "exhaust chimney 指排气烟囱/排气筒。cubicle（隔间）、eatery（餐馆）与工业废气过滤系统毫无关联。",
            cn: "环保法规要求现代制造工厂在每个排气烟囱中安装过滤系统。",
            jp: "環境規制により、現代の製造工場はすべての排気煙突（chimney）にろ過システムを設置することが義務付けられています。"
        }
    }
];