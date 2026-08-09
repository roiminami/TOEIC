// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data241-250.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "culinary",
        pos: "形",
        ipa: "/ˈkʌlɪneri/",
        cn: "烹饪的，美食的",
        jp: "料理の、調理の",
        family: "culinarian",
        tips: "餐饮高频：culinary arts（烹饪艺术），culinary skills（烹饪技巧）。",
        desc: "She excels in culinary arts."
    },
    {
        word: "substitute",
        pos: "動/名",
        ipa: "/ˈsʌbstɪtuːt/",
        cn: "替代，替换；替代品",
        jp: "代用する；代用品",
        family: "substitution / substituted / substituting",
        tips: "高频搭配：substitute A for B（用A替代B），sugar substitute（代糖）。",
        desc: "You can substitute honey for sugar."
    },
    {
        word: "apprenticeship",
        pos: "名",
        ipa: "/əˈprentɪsʃɪp/",
        cn: "学徒期，学徒身份",
        jp: "見習い期間、徒弟制度",
        family: "apprentice / apprenticed",
        tips: "职场与技能培训高频：complete an apprenticeship（完成学徒期），apprenticeship program（学徒培训计划）。",
        desc: "He finished his apprenticeship."
    },
    {
        word: "installment",
        pos: "名",
        ipa: "/ɪnˈstɔːlmənt/",
        cn: "分期付款，分期连载的一期",
        jp: "分割払い、（分載の）一回分",
        family: "install / installment plan",
        tips: "商务与财务高频：pay in monthly installments（按月分期付款），monthly installment（每月分期付款额）。",
        desc: "Pay in monthly installments."
    },
    {
        word: "spectator",
        pos: "名",
        ipa: "/ˈspekteɪtər/",
        cn: "观众，旁观者",
        jp: "観客、見物人",
        family: "spectators / spectate / spectacular",
        tips: "体育与户外高频：spectator sports（观赏性体育运动），crowd of spectators（大量观众）。",
        desc: "Spectators cheered for the team."
    },
    {
        word: "institutional",
        pos: "形",
        ipa: "/ˌɪnstɪˈtuːʃənl/",
        cn: "机构的，制度上的",
        jp: "機関の、制度の",
        family: "institution / institute / institutionalize",
        tips: "金融与管理高频：institutional investor（机构投资者），institutional knowledge（机构知识/体制经验）。",
        desc: "They attract institutional investors."
    },
    {
        word: "prominent",
        pos: "形",
        ipa: "/ˈprɑːmɪnənt/",
        cn: "杰出的，显著的，著名的",
        jp: "著名な、顕著な",
        family: "prominence / prominently",
        tips: "商务与人物高频：prominent figure/businessman（杰出人物/著名商人），play a prominent role（扮演重要角色）。",
        desc: "He is a prominent businessman."
    },
    {
        word: "concertgoers",
        pos: "名",
        ipa: "/ˈkɑːnsərtɡoʊərz/",
        cn: "音乐会观众（复数）",
        jp: "コンサートの観客たち",
        family: "concertgoer / concert",
        tips: "娱乐与活动场景：frequent concertgoers（经常去听音乐会的人）。",
        desc: "Concertgoers filled the hall."
    },
    {
        word: "gradual",
        pos: "形",
        ipa: "/ˈɡrædʒuəl/",
        cn: "逐渐的，渐进的",
        jp: "徐々の、漸進的な",
        family: "gradually / graduation",
        tips: "趋势与变化高频：gradual increase/decrease（逐渐增加/减少），gradual process（渐进的过程）。",
        desc: "There was a gradual change."
    },
    {
        word: "procurement",
        pos: "名",
        ipa: "/prəˈkjʊrmənt/",
        cn: "采购，获得",
        jp: "調達、入手",
        family: "procure / procurer / procurable",
        tips: "供应链与企业管理核心词：procurement department（采购部），procurement process（采购流程）。",
        desc: "She works in procurement."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "substitute",
        category: "简单",
        stem: "If you do not have butter, you can ________ olive oil in the baking recipe.",
        options: ["substitute", "substitution", "installment", "gradual"],
        correct: "substitute",
        explanations: {
            guide: "情态动词后的动词原形。can 后面接动词原形，表达用橄榄油“替代”黄油，选 substitute。",
            family: "substitute (v.替代/n.替代品) | substitution (n.替代) | installment (n.分期付款) | gradual (adj.逐渐的)。",
            details: "can substitute... 意为可以替代。substitution 是名词，不能跟在情态动词 can 后面。",
            cn: "如果您没有黄油，可以在烘焙食谱中用橄榄油替代。",
            jp: "バターがない場合は、ベーキングレシピでオリーブオイルを代用（substitute）することができます。"
        }
    },
    {
        id: 2,
        target: "culinary",
        category: "简单",
        stem: "The chef attended a famous ________ school in Paris to master classic French cooking techniques.",
        options: ["culinary", "institutional", "prominent", "procurement"],
        correct: "culinary",
        explanations: {
            guide: "餐饮专业名词前置定语。________ school 指“烹饪学校”，选用专用形容词 culinary。",
            family: "culinary (adj.烹饪的/美食的) | institutional (adj.机构的) | prominent (adj.杰出的) | procurement (n.采购)。",
            details: "culinary school 意为烹饪学校。institutional（机构的）、procurement（采购）均非烹饪技术的修饰词。",
            cn: "这位厨师曾在巴黎一家著名的烹饪学校学习，以精通法式传统烹饪技术。",
            jp: "シェフは伝統的なフランス料理の技術を修得するため、パリの有名な調理（culinary）学校に通いました。"
        }
    },
    {
        id: 3,
        target: "spectator",
        category: "简单",
        stem: "Thousands of excited ________ filled the stadium to watch the championship match.",
        options: ["spectators", "spectator", "concertgoers", "installments"],
        correct: "spectators",
        explanations: {
            guide: "体育赛事复数名词。Thousands of 后面接复数可数名词，指体育场里看比赛的“观众”，选 spectators。",
            family: "spectators (n.复数观众) | spectator (n.单数观众) | concertgoers (n.音乐会观众) | installments (n.分期付款)。",
            details: "spectators 专指体育或户外表演的现场观众。concertgoers 专指音乐会听众，与体育场看比赛语境不符。",
            cn: "成千上万兴奋的观众涌入体育场观看冠军赛。",
            jp: "何千人もの興奮した観客（spectators）が選手権試合を見るためにスタジアムを埋め尽くしました。"
        }
    },
    {
        id: 4,
        target: "installment",
        category: "简单",
        stem: "Customers can choose to pay for the furniture in twelve monthly ________.",
        options: ["installments", "installment", "procurement", "apprenticeship"],
        correct: "installments",
        explanations: {
            guide: "财务分期付款复数名词。in twelve monthly ________ 表达分 12 个月“分期付款”，用复数 installments。",
            family: "installments (n.分期付款复数) | installment (n.单数) | procurement (n.采购) | apprenticeship (n.学徒期)。",
            details: "monthly installments 指按月分期付款。twelve 限定词决定了须接复数名词 installments。",
            cn: "顾客可以选择分 12 个月按月分期付款购买家具。",
            jp: "お客様は家具の代金を12回の分割払い（installments）で支払うことを選択できます。"
        }
    },
    {
        id: 5,
        target: "gradual",
        category: "简单",
        stem: "The financial analyst predicted a ________ improvement in the economy over the next two quarters.",
        options: ["gradual", "gradually", "prominent", "institutional"],
        correct: "gradual",
        explanations: {
            guide: "形容词作前置定语。修饰 improvement（改善），表达“逐渐的/平缓的”改善，选 gradual。",
            family: "gradual (adj.逐渐的) | gradually (adv.逐渐地) | prominent (adj.杰出的) | institutional (adj.机构的)。",
            details: "a gradual improvement 意为平缓逐渐的改善。gradually 是副词，不能修饰名词 improvement。",
            cn: "金融分析师预测未来两个季度经济将出现平缓渐进的改善。",
            jp: "金融アナリストは、今後2四半期にわたって景気が徐々に（gradual）改善すると予測しました。"
        }
    },
    {
        id: 6,
        target: "procurement",
        category: "简单",
        stem: "Mr. Zhang joined the corporate ________ department to manage supplier contracts and purchase orders.",
        options: ["procurement", "procure", "apprenticeship", "spectator"],
        correct: "procurement",
        explanations: {
            guide: "供应链管理部门名词。________ department 指负责合同与采购订单的“采购部”，选 procurement。",
            family: "procurement (n.采购) | procure (v.获得/采购) | apprenticeship (n.学徒期) | spectator (n.观众)。",
            details: "procurement department 意为采购部门。procure 是动词，不能直接充当部门名称的前置定语。",
            cn: "张先生加入了公司采购部，负责管理供应商合同和采购订单。",
            jp: "張氏はサプライヤー契約と発注書を管理するため、企業の調達（procurement）部門に入社しました。"
        }
    },
    {
        id: 7,
        target: "prominent",
        category: "中等",
        stem: "The conference keynote address was delivered by a ________ scientist in the field of renewable energy.",
        options: ["prominent", "prominence", "culinary", "gradual"],
        correct: "prominent",
        explanations: {
            guide: "人物评价形容词。a ________ scientist 修饰科学家，表达“杰出的/著名的”，选 prominent。",
            family: "prominent (adj.杰出的/著名的) | prominence (n.杰出/显著) | culinary (adj.烹饪的) | gradual (adj.逐渐的)。",
            details: "a prominent scientist 指杰出的科学家。prominence 是名词，不能作 scientist 的前置定语。",
            cn: "会议的主旨演讲由可再生能源领域的一位杰出科学家发表。",
            jp: "会議の基調講演は、再生可能エネルギー分野の著名な（prominent）科学者によって行われました。"
        }
    },
    {
        id: 8,
        target: "apprenticeship",
        category: "中等",
        stem: "After completing a three-year ________, the young electrician became a fully licensed professional.",
        options: ["apprenticeship", "apprentice", "installment", "procurement"],
        correct: "apprenticeship",
        explanations: {
            guide: "技能培训过程名词。completing a three-year ________ 表达完成三年“学徒期/学徒培训”，选 apprenticeship。",
            family: "apprenticeship (n.学徒期/学徒身份) | apprentice (n.学徒个人) | installment (n.分期付款) | procurement (n.采购)。",
            details: "three-year apprenticeship 意为三年学徒期。apprentice 指学徒个人，不能作为被完成（completed）的时间段/培训流程。",
            cn: "在完成三年的学徒期后，这位年轻的电工成为了持有全照的专业人士。",
            jp: "3年間の見習い期間（apprenticeship）を修了した後、その若き電気技師は正式なライセンスを持つ専門家となりました。"
        }
    },
    {
        id: 9,
        target: "institutional",
        category: "中等",
        stem: "The investment firm focuses primarily on managing portfolios for large ________ clients such as pension funds.",
        options: ["institutional", "institution", "culinary", "prominent"],
        correct: "institutional",
        explanations: {
            guide: "金融投资专业修饰语。________ clients 结合后文养基金例（pension funds），指“机构客户”，选 institutional。",
            family: "institutional (adj.机构的) | institution (n.机构) | culinary (adj.烹饪的) | prominent (adj.著名的)。",
            details: "institutional clients 指机构客户。institution 是名词，不能直接修饰 clients。",
            cn: "该投资公司主要专注于为养老基金等大型机构客户管理投资组合。",
            jp: "その投資会社は、年金基金などの大型機関（institutional）顧客のポートフォリオ管理に主に取り組んでいます。"
        }
    },
    {
        id: 10,
        target: "concertgoers",
        category: "中等",
        stem: "Special shuttle buses were arranged to transport thousands of ________ to the outdoor music arena.",
        options: ["concertgoers", "spectator", "apprenticeship", "substitute"],
        correct: "concertgoers",
        explanations: {
            guide: "音乐活动观众名词。transport thousands of ________ 结合去户外音乐竞技场（music arena），选 concertgoers（音乐会观众）。",
            family: "concertgoers (n.音乐会观众复数) | spectator (n.体育/单数观众) | apprenticeship (n.学徒期) | substitute (n.替代品)。",
            details: "concertgoers 特指音乐会/演唱会观众。spectator 虽也指观众，但在 of 后面需要复数且 concertgoers 极契合 music 语境。",
            cn: "安排了专线接驳公交车，将成千上万的音乐会观众运送到户外音乐广场。",
            jp: "何千人ものコンサートの観客（concertgoers）を野外音楽アリーナへ輸送するために、特別シャトルバスが手配されました。"
        }
    },
    {
        id: 11,
        target: "gradual",
        category: "中等",
        stem: "Company management implemented the software changes ________ over a six-month period to avoid disruption.",
        options: ["gradually", "gradual", "prominently", "institutionally"],
        correct: "gradually",
        explanations: {
            guide: "副词修饰动词。implemented... ________ 结构中，需要填写副词修饰及物动词 implemented，表达“逐渐地/逐步地”实施，选 gradually。",
            family: "gradually (adv.逐渐地) | gradual (adj.逐渐的) | prominently (adv.显著地) | institutionally (adv.机构地)。",
            details: "implemented gradually 意为逐步实施。gradual 是形容词，不能在句中修饰动词 implemented。",
            cn: "公司管理层在六个月的时间内逐步实施软件更改，以避免业务中断。",
            jp: "会社の経営陣は業務の中断を避けるため、6ヶ月の期間にわたってソフトウェアの変更を徐々に（gradually）実施しました。"
        }
    },
    {
        id: 12,
        target: "substitute",
        category: "中等",
        stem: "When the main presenter fell ill, the vice president stepped in as a last-minute ________.",
        options: ["substitute", "substitution", "procurement", "installment"],
        correct: "substitute",
        explanations: {
            guide: "替代人员名词考点。stepped in as a last-minute ________ 表达作为临时的“替代者/替补人员”，选 substitute。",
            family: "substitute (n.替代者/替代品) | substitution (n.替代行为) | procurement (n.采购) | installment (n.分期付款)。",
            details: "a last-minute substitute 指临时的替补人员。substitution 是指抽象的替代行为，不指具体的替补人员。",
            cn: "当主讲人生病时，副总裁作为临时的替补人员顶替发言。",
            jp: "メインの発表者が病気になった際、副社長が急遽代理人（substitute）として登壇しました。"
        }
    },
    {
        id: 13,
        target: "procurement",
        category: "困难",
        stem: "Strict environmental guidelines dictate that all government IT ________ must be sourced from certified green suppliers.",
        options: ["procurements", "procurement", "installments", "apprenticeships"],
        correct: "procurements",
        explanations: {
            guide: "采购项目复数名词。all government IT ________ 表达政府所有的 IT“采购项目/采买物资”，用复数 procurements。",
            family: "procurements (n.采购项目复数) | procurement (n.不可数采购/调达) | installments (n.分期付款) | apprenticeships (n.学徒期)。",
            details: "IT procurements 指各项具体的 IT 采购项目/物品。all 限定词结合复数概念选用 procurements。",
            cn: "严格的环保指南规定，政府所有的 IT 采购项目必须来自经认证的绿色供应商。",
            jp: "厳格な環境ガイドラインにより、政府のすべてのIT調達品（procurements）は認証されたグリーンサプライヤーから調達されることが義務付けられています。"
        }
    },
    {
        id: 14,
        target: "prominent",
        category: "困难",
        stem: "The new corporate headquarters features a glass facade that is placed ________ on the main boulevard.",
        options: ["prominently", "prominent", "gradually", "institutionally"],
        correct: "prominently",
        explanations: {
            guide: "副词修饰被动语态动词。is placed ________ 结构中，用副词修饰过去分词 placed，表达“显著地/引人注目地”坐落着，选 prominently。",
            family: "prominently (adv.显著地/引人注目地) | prominent (adj.杰出的) | gradually (adv.逐渐地) | institutionally (adv.机构上地)。",
            details: "is placed prominently 意为显眼/引人注目地坐落于。prominent 是形容词，不能直接修饰动词 placed。",
            cn: "新的公司总部拥有玻璃幕墙，在主干道上显眼引人注目。",
            jp: "新しい本社ビルは、大通り沿いに目立つように（prominently）配置されたガラスのファサードが特徴です。"
        }
    },
    {
        id: 15,
        target: "culinary",
        category: "困难",
        stem: "The hotel's new restaurant received high praise for its innovative ________ creations that blend local and international flavors.",
        options: ["culinary", "culinarian", "institutional", "gradual"],
        correct: "culinary",
        explanations: {
            guide: "美食与烹饪高阶修饰语。________ creations 指“烹饪/美食佳肴”，选形容词 culinary。",
            family: "culinary (adj.烹饪的/美食的) | culinarian (n.烹饪大师) | institutional (adj.机构的) | gradual (adj.逐渐的)。",
            details: "culinary creations 意为烹饪佳肴/美食作品。culinarian 是指厨师个人，不作前置形容词修饰 creations。",
            cn: "酒店的新餐厅因其融合当地与国际风味的创新烹饪佳肴而获得高度赞扬。",
            jp: "ホテルの新しいレストランは、地元の風味と国際的な風味を融合させた革新的な料理（culinary）作品で高い評価を受けました。"
        }
    },
    {
        id: 16,
        target: "institutional",
        category: "困难",
        stem: "Financial analysts noted that the rapid rise in stock prices was driven by heavy ________ buying rather than individual retail investors.",
        options: ["institutional", "institution", "prominent", "gradual"],
        correct: "institutional",
        explanations: {
            guide: "金融高阶专业术语。________ buying 属于证券市场固定词组，指“机构（投资者）买盘/机构买入”，选 institutional。",
            family: "institutional (adj.机构的) | institution (n.机构) | prominent (adj.杰出的) | gradual (adj.逐渐的)。",
            details: "institutional buying 意为机构买盘/机构资金买入。与后文的 individual retail investors（散户投资者）形成鲜明对照。",
            cn: "金融分析师指出，股价的快速上涨是由沉重的机构买盘而非散户投资者推动的。",
            jp: "金融アナリストは、株価の急激な上昇は個人投資家ではなく大口の機関（institutional）買いによって主导されたと指摘しました。"
        }
    },
    {
        id: 17,
        target: "substitute",
        category: "困难",
        stem: "Artificial sweeteners are frequently used as sugar ________ in low-calorie food manufacturing.",
        options: ["substitutes", "substitute", "installments", "procurements"],
        correct: "substitutes",
        explanations: {
            guide: "复数名词泛指考点。sugar ________ 属于食品工业高频词组，意为“代糖/糖替代品”，用复数 substitutes。",
            family: "substitutes (n.替代品复数) | substitute (n.单数) | installments (n.分期付款) | procurements (n.采购)。",
            details: "sugar substitutes 意为食糖替代品/代糖。主语为复数 Artificial sweeteners，故对应使用复数名词 substitutes。",
            cn: "人造甜味剂在低热量食品制造中经常被用作代糖（食糖替代品）。",
            jp: "人工甘味料は、低カロリー食品の製造において砂糖の代用品（substitutes）として頻繁に使用されています。"
        }
    },
    {
        id: 18,
        target: "apprenticeship",
        category: "困难",
        stem: "To bridge the skilled labor shortage, the government launched a specialized ________ training program for manufacturing technicians.",
        options: ["apprenticeship", "apprentice", "institutional", "prominent"],
        correct: "apprenticeship",
        explanations: {
            guide: "职业教育复合名词定语。________ training program 表达“学徒制培训计划”，选名词 apprenticeship 作定语。",
            family: "apprenticeship (n.学徒制/学徒期) | apprentice (n.学徒) | institutional (adj.机构的) | prominent (adj.著名的)。",
            details: "apprenticeship training program 意为学徒制培训项目。apprentice 指学徒个人，不能作修饰抽象培训体系（training program）的定语。",
            cn: "为了解决技术工人短缺问题，政府为制造技术人员启动了一项专门的学徒制培训计划。",
            jp: "熟練労働者の不足を解消するため、政府は製造技術者向けの専門的な見習い（apprenticeship）研修プログラムを開始しました。"
        }
    }
];