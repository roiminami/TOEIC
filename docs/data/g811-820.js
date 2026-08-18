// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data571-580.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "notable",
        pos: "形",
        ipa: "/ˈnoʊtəbl/",
        cn: "显著的，值得注意的，著名的",
        jp: "注目すべき、顕著な、著名な",
        family: "notably / note / noted",
        tips: "商业成就与评价高频：notable achievement/feature/success（显著成就/显著特征/瞩目成功）。",
        desc: "She made notable achievements."
    },
    {
        word: "boast",
        pos: "動/名",
        ipa: "/boʊst/",
        cn: "拥有（值得自豪的事物）；夸耀",
        jp: "（誇るべきものを）持つ、誇る",
        family: "boasts / boasted / boasting",
        tips: "设施与广告宣传高频：boast modern facilities/scenic views（拥有现代化设施/迷人风光）。",
        desc: "The hotel boasts ocean views."
    },
    {
        word: "tremendous",
        pos: "形",
        ipa: "/trəˈmendəs/",
        cn: "巨大的，极好的，惊人的",
        jp: "途方もない、巨大な、素晴らしい",
        family: "tremendously",
        tips: "财报与增长高频：tremendous success/growth/effort（巨大的成功/显著增长/巨大努力）。",
        desc: "Sales saw tremendous growth."
    },
    {
        word: "preliminary",
        pos: "形/名",
        ipa: "/prɪˈlɪmɪneri/",
        cn: "初步的，预备的；准备阶段",
        jp: "予備の、事前の、準備段階の",
        family: "preliminaries / preliminarily",
        tips: "项目与调查高频：preliminary results/findings/approval（初步结果/调查发现/初步批准）。",
        desc: "Check the preliminary results."
    },
    {
        word: "surpass",
        pos: "動",
        ipa: "/sərˈpæs/",
        cn: "超过，胜过，优于",
        jp: "超える、勝る、凌駕する",
        family: "surpassed / surpassing / surpassable",
        tips: "业绩与预期高频：surpass expectations/targets/records（超出预期/超过目标/打破记录）。",
        desc: "Profits surpass annual targets."
    },
    {
        word: "municipal",
        pos: "形",
        ipa: "/mjuːˈnɪsɪpl/",
        cn: "市政的，地方自治的",
        jp: "市の、地方自治体の",
        family: "municipality / municipally",
        tips: "公共管理与设施高频：municipal government/library/bonds（市政府/市立图书馆/市政债券）。",
        desc: "Visit the municipal library."
    },
    {
        word: "criterion",
        pos: "名",
        ipa: "/kraɪˈtɪriən/",
        cn: "（评判、决定的）标准，准则",
        jp: "（判断・評価の）基準、規範",
        family: "criteria (复数) / criterion",
        tips: "评估与招聘核心词：single criterion（单一标准），meet the criteria（符合多项标准）。",
        desc: "Cost is the main criterion."
    },
    {
        word: "excursion",
        pos: "名",
        ipa: "/ɪkˈskɜːrʒn/",
        cn: "短途旅行，远足",
        jp: "小旅行、遠足、観光ツアー",
        family: "excursions / excursionist",
        tips: "旅游与活动高频：guided excursion（有向导的短途旅行），day excursion（一日游）。",
        desc: "They joined a boat excursion."
    },
    {
        word: "texture",
        pos: "名",
        ipa: "/ˈtekstʃər/",
        cn: "质地，口感，手感，纹理",
        jp: "感触、手触り、食感、質感",
        family: "textured / textural / texturing",
        tips: "材料质检与餐饮高频：smooth texture（平滑的质地/顺滑的口感），fabric texture（面料质感）。",
        desc: "The fabric has smooth texture."
    },
    {
        word: "memorable",
        pos: "形",
        ipa: "/ˈmemərəbl/",
        cn: "值得纪念的，难忘的",
        jp: "記憶に残る、忘れられない",
        family: "memory / memorize / memorably",
        tips: "客服与活动高频：memorable experience/event/stay（难忘的体验/活动/住宿经历）。",
        desc: "It was a memorable trip."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "surpass",
        category: "简单",
        stem: "Third-quarter sales revenue is expected to ________ all initial financial targets set by the board.",
        options: ["surpass", "excursion", "texture", "municipal"],
        correct: "surpass",
        explanations: {
            guide: "财务业绩动词考点。is expected to 后面接动词原形，结合超过董事会设定的财务目标（targets），选 surpass（超过/胜过）。",
            family: "surpass (v.超过) | excursion (n.短途旅行) | texture (n.质地) | municipal (adj.市政的)。",
            details: "surpass financial targets 属于托业财报绝高频短语，意为超越财务目标。其余选项动宾关系均不成立。",
            cn: "预计第三季度销售收入将超过董事会设定的所有初始财务目标。",
            jp: "第3四半期の売上高は、取締役会が設定したすべての初期財務目標を超過する（surpass）と予想されています。"
        }
    },
    {
        id: 2,
        target: "municipal",
        category: "简单",
        stem: "Residents can renew their residential parking permits at the local ________ office on Main Street.",
        options: ["municipal", "memorable", "preliminary", "tremendous"],
        correct: "municipal",
        explanations: {
            guide: "公共机构修饰形容词。________ office 结合居民办理停车许可证，选 municipal（市政的/市政府的）。",
            family: "municipal (adj.市政的) | memorable (adj.难忘的) | preliminary (adj.初步的) | tremendous (adj.巨大的)。",
            details: "municipal office 意为市政办公室/市政当局办事处。memorable（难忘的）、tremendous（巨大的）无法修饰办公机构。",
            cn: "居民可以在大街上的当地市政办事处办理居民停车许可证的续期。",
            jp: "住民はメインストリートにある地元の市（municipal）役所で居住者用駐車許可証を更新できます。"
        }
    },
    {
        id: 3,
        target: "excursion",
        category: "简单",
        stem: "Conference organizers arranged a guided weekend ________ to the historic botanical gardens for attendees.",
        options: ["excursion", "criterion", "texture", "surpass"],
        correct: "excursion",
        explanations: {
            guide: "旅游活动名词考点。guided weekend ________ 结合前往历史植物园参观，选 excursion（短途旅行/远足）。",
            family: "excursion (n.短途旅行) | criterion (n.标准) | texture (n.质地) | surpass (v.超过)。",
            details: "guided excursion 意为有向导带领的短途旅行。criterion（标准）、texture（质地）均非会务组织的出行游览活动。",
            cn: "会议组织者为与会者安排了一次由向导带领的前往历史植物园的周末短途旅行。",
            jp: "会議の主催者は、参加者のために歴史的な植物園へのガイド付き週末小旅行（excursion）を手配しました。"
        }
    },
    {
        id: 4,
        target: "boast",
        category: "简单",
        stem: "The luxury seaside resort is proud to ________ three heated swimming pools and five gourmet restaurants.",
        options: ["boast", "surpass", "discard", "interrupt"],
        correct: "boast",
        explanations: {
            guide: "酒店设施特色动词。proud to 后面接动词原形，表达豪华海滨度假村“拥有（自豪地配备）”三座恒温泳池，选 boast。",
            family: "boast (v.拥有自豪之物/夸耀) | surpass (v.超越) | discard (v.丢弃) | interrupt (v.打断)。",
            details: "boast heated pools 意为拥有恒温泳池。boast 作为及物动词常用于酒店或景区宣传，表示自豪地拥有某项优质设施。",
            cn: "这家豪华海边度假村引以为豪地拥有三座恒温游泳池和五家美食餐厅。",
            jp: "その高級海浜リゾートは、3つの温水プールと5つの高級レストランを誇りに備えて（boast）います。"
        }
    },
    {
        id: 5,
        target: "texture",
        category: "简单",
        stem: "The bakery's new artisan bread is famous for its crisp crust and soft, chewy ________.",
        options: ["texture", "criterion", "excursion", "preliminary"],
        correct: "texture",
        explanations: {
            guide: "餐饮口感名词考点。soft, chewy ________ 结合面包外皮酥脆与内里松软有嚼劲，选 texture（口感/质地）。",
            family: "texture (n.口感/质地) | criterion (n.标准) | excursion (n.短途旅行) | preliminary (adj.初步的)。",
            details: "chewy texture 意为有嚼劲的口感。criterion（标准）、excursion（旅行）均非描述食品口感物理特性的名词。",
            cn: "这家面包店的新款手工面包以其酥脆的外皮和柔软有嚼劲的口感而闻名。",
            jp: "そのベーカリーの新しい職人パンは、カリッとしたクラストと柔らかくモチモチした食感（texture）で有名です。"
        }
    },
    {
        id: 6,
        target: "memorable",
        category: "简单",
        stem: "The hotel staff worked tirelessly to ensure all guests enjoyed a pleasant and ________ stay.",
        options: ["memorable", "municipal", "preliminary", "tremendous"],
        correct: "memorable",
        explanations: {
            guide: "住宿体验形容词考点。a pleasant and ________ stay 与 pleasant 并列，修饰客人在酒店的住宿经历，选 memorable（难忘的/值得纪念的）。",
            family: "memorable (adj.难忘的) | municipal (adj.市政的) | preliminary (adj.初步的) | tremendous (adj.巨大的)。",
            details: "a memorable stay 属于酒店客服核心搭配，意为难忘的住宿体验。municipal（市政的）无法用来形容留宿体验。",
            cn: "酒店员工不知疲倦地工作，以确保所有客人都享有愉快而难忘的住宿体验。",
            jp: "ホテルのスタッフは、すべての宿泊客が快適で記憶に残る（memorable）滞在を楽しめるよう精力的に働きました。"
        }
    },
    {
        id: 7,
        target: "preliminary",
        category: "中等",
        stem: "According to the ________ report released this morning, quarterly earnings increased by four percent.",
        options: ["preliminary", "memorable", "notable", "surpassing"],
        correct: "preliminary",
        explanations: {
            guide: "商业报告前置形容词。the ________ report 结合今早刚发布的初版财报数据，选 preliminary（初步的/预备阶段的）。",
            family: "preliminary (adj.初步的) | memorable (adj.难忘的) | notable (adj.著名的) | surpassing (adj.胜过的)。",
            details: "preliminary report 意为初步报告/预备报告。memorable（难忘的）不符合发布经济数据的严谨商业报告语境。",
            cn: "根据今天上午发布的初步报告，季度收益增长了百分之四。",
            jp: "今朝発表された暫定/予備（preliminary）報告書によると、四半期収益は4％増加しました。"
        }
    },
    {
        id: 8,
        target: "notable",
        category: "中等",
        stem: "One ________ feature of the new smartphone model is its extended battery life of up to forty-eight hours.",
        options: ["notable", "municipal", "fragile", "tremendous"],
        correct: "notable",
        explanations: {
            guide: "产品特征修饰形容词。One ________ feature 结合长达48小时的突出续航能力，选 notable（显著的/值得注意的）。",
            family: "notable (adj.显著的/值得注意的) | municipal (adj.市政的) | fragile (adj.脆弱的) | tremendous (adj.巨大的)。",
            details: "notable feature 意为显著特点/瞩目特征。municipal（市政的）、fragile（易碎的）均无法修饰智能手机的核心优势功能。",
            cn: "这款新智能手机型号的一个显著特点是其长达四十八小时的超长电池续航。",
            jp: "新しいスマートフォンモデルの注目すべき（notable）特徴の1つは、最大48時間の延長されたバッテリー寿命です。"
        }
    },
    {
        id: 9,
        target: "tremendous",
        category: "中等",
        stem: "The marketing campaign achieved ________ success, attracting thousands of new subscribers in its first week.",
        options: ["tremendous", "preliminary", "municipal", "textured"],
        correct: "tremendous",
        explanations: {
            guide: "成就修饰形容词考点。achieved ________ success 结合首周便吸引数千名新订阅用户，选 tremendous（巨大的/惊人的）。",
            family: "tremendous (adj.巨大的/极好的) | preliminary (adj.初步的) | municipal (adj.市政的) | textured (adj.有纹理的)。",
            details: "tremendous success 属于托业经典搭配，意为巨大的成功。preliminary（初步的）与后半句已经实现的亮眼业绩矛盾。",
            cn: "该营销活动取得了巨大的成功，在第一周就吸引了数千名新订阅者。",
            jp: "そのマーケティングキャンペーンは途方もない/目覚ましい（tremendous）成功を収め、第1週で何千人もの新規加入者を獲得しました。"
        }
    },
    {
        id: 10,
        target: "criterion",
        category: "中等",
        stem: "Reliability in high-temperature environments was the single most important ________ used to select the vendor.",
        options: ["criterion", "criteria", "excursion", "texture"],
        correct: "criterion",
        explanations: {
            guide: "单数名词考点（criterion vs criteria）。the single most important ________ 明确提示单数，选单数形式 criterion（标准/准则）。",
            family: "criterion (n.单数标准) | criteria (n.复数标准) | excursion (n.旅行) | texture (n.质地)。",
            details: "the single most important criterion 意为唯一最重要的评判标准。criteria 是复数名词，不能与 the single 连用。",
            cn: "在高温环境下的可靠性是用来挑选供应商时唯一最重要的标准。",
            jp: "高温環境での信頼性は、ベンダーを選定するために使用された唯一かつ最も重要な基準（criterion）でした。"
        }
    },
    {
        id: 11,
        target: "surpass",
        category: "中等",
        stem: "Final year-end earnings ________ even the most optimistic market forecasts by several million dollars.",
        options: ["surpassed", "surpass", "boasted", "interrupted"],
        correct: "surpassed",
        explanations: {
            guide: "过去时态动词考点。主语为 Final year-end earnings，结合以数百万美元的优势超越预测，选过去式 surpassed（超过了/胜过）。",
            family: "surpassed (v-ed超越了) | surpass (v.原形) | boasted (v-ed拥有/夸耀) | interrupted (v-ed打断了)。",
            details: "surpassed the forecasts 意为超出了预测。全句描述年终结算完成的事实，使用过去时 surpassed。",
            cn: "最终的年终收益甚至比最乐观的市场预测还高出了数百万美元。",
            jp: "最終的な年末収益は、最も楽観的な市場予測でさえ数百万ドル上回り（surpassed）ました。"
        }
    },
    {
        id: 12,
        target: "boast",
        category: "中等",
        stem: "The newly renovated convention center can ________ state-of-the-art audiovisual technology in every meeting room.",
        options: ["boast", "boasting", "surpass", "convey"],
        correct: "boast",
        explanations: {
            guide: "情态动词后的动词原形。can 后面接动词原形，表达会议中心“自豪地配备/拥有”最先进的音视频技术，选 boast。",
            family: "boast (v.自豪拥有) | boasting (v-ing) | surpass (v.超过) | convey (v.表达)。",
            details: "can boast technology 意为引以为豪地配备该技术。boasting 是分词，不能直接紧跟在情态动词 can 后面作谓语原形。",
            cn: "新近翻修的会议中心在每个会议室都自豪地配备了最先进的视听技术。",
            jp: "新しく改装されたコンベンションセンターは、すべての会議室に最先端の音響映像技術を誇らしげに備えて（boast）います。"
        }
    },
    {
        id: 13,
        target: "notable",
        category: "困难",
        stem: "Several regional divisions performed well, most ________ the commercial logistics department with a 20 percent revenue gain.",
        options: ["notably", "notable", "memorable", "tremendous"],
        correct: "notably",
        explanations: {
            guide: "派生副词固定短语考点。most ________ 属于托业写作与阅读高阶逻辑词组，意为“尤其是/特别显著的是”，选副词 notably。",
            family: "notably (adv.尤其是/显著地) | notable (adj.显著的) | memorable (adj.难忘的) | tremendous (adj.巨大的)。",
            details: "most notably 意为尤其是/最引人注目的是。notable 是形容词，不能在此充当修饰插入语的副词成分。",
            cn: "几个区域部门表现出色，尤其是商业物流部门，收入增长了百分之二十。",
            jp: "いくつかの地域部門が好調であり、特に（most notably）商業物流部門は20％の増収を達成しました。"
        }
    },
    {
        id: 14,
        target: "criterion",
        category: "困难",
        stem: "Job applicants must satisfy all minimum educational and professional ________ specified in the vacancy notice.",
        options: ["criteria", "criterion", "excursions", "textures"],
        correct: "criteria",
        explanations: {
            guide: "名词复数考点（criteria vs criterion）。satisfy all minimum educational and professional ________ 中 all 明确要求接复数名词，选 criteria（标准/准则复数）。",
            family: "criteria (n.复数标准) | criterion (n.单数标准) | excursions (n.旅行) | textures (n.质地)。",
            details: "satisfy all criteria 意为满足所有标准要求。criterion 是单数形式，不能与量词 all 连用。",
            cn: "求职者必须满足招聘公告中载明的所有最低学历和专业准则要求。",
            jp: "求職者は、募集告知に明記されているすべての最低限の教育および職歴基準（criteria）を満たさなければなりません。"
        }
    },
    {
        id: 15,
        target: "memorable",
        category: "困难",
        stem: "The keynote speaker delivered an inspiring address, ________ summarizing the company's thirty-year evolution.",
        options: ["memorably", "memorable", "tremendous", "notably"],
        correct: "memorably",
        explanations: {
            guide: "派生副词修饰分词。________ summarizing the evolution 结构中，需要副词修饰现在分词 summarizing，表达“令人难忘地/精妙生动地”总结，选 memorably。",
            family: "memorably (adv.令人难忘地/显著地) | memorable (adj.难忘的) | tremendous (adj.巨大的) | notably (adv.尤其是)。",
            details: "memorably summarizing 意为令人印象深刻地进行了总结。memorable 是形容词，不能直接修饰分词短语作状语。",
            cn: "主旨演讲嘉宾发表了鼓舞人心的演说，令人难忘地总结了公司三十年的发展演变历程。",
            jp: "基調講演者は感動的な演説を行い、会社の30年間の進化を記憶に残る形で（memorably）要約しました。"
        }
    },
    {
        id: 16,
        target: "municipal",
        category: "困难",
        stem: "The local ________ approved funding for the construction of a new public transit terminal.",
        options: ["municipality", "municipal", "criterion", "excursion"],
        correct: "municipality",
        explanations: {
            guide: "派生行政实体名词考点。The local ________ approved funding 结合具有拨款审批权限的地方行政当局主体，选 municipality（地方自治市/地方当局）。",
            family: "municipality (n.地方自治当局/自治市) | municipal (adj.市政的) | criterion (n.标准) | excursion (n.旅行)。",
            details: "local municipality 指地方市政当局。municipal 是形容词，不能在定冠词和形容词 local 后面充当句子的主语中心语。",
            cn: "当地市政当局批准了用于建造新公共交通枢纽站的资金。",
            jp: "地元の自治体（municipality）は、新しい公共交通ターミナルの建設資金を承認しました。"
        }
    },
    {
        id: 17,
        target: "preliminary",
        category: "困难",
        stem: "After the opening ________ were concluded, the panel commenced the formal contract negotiation session.",
        options: ["preliminaries", "preliminary", "textures", "criteria"],
        correct: "preliminaries",
        explanations: {
            guide: "派生名词复数考点。After the opening ________ were concluded 结合开场准备环节结束并进入正式谈判，选复数名词 preliminaries（预备阶段/开场准备步骤）。",
            family: "preliminaries (n.预备步骤/开场事项复数) | preliminary (adj.初步的) | textures (n.质地) | criteria (n.标准)。",
            details: "opening preliminaries 意为开场准备步骤/预备程序。preliminary 是形容词，不能在句中直接作为主语并搭配复数谓语 were concluded。",
            cn: "在开场预备程序结束后，专家组开始了正式的合同谈判环节。",
            jp: "開会の準備手順（preliminaries）が終了した後、委員会は正式な契約交渉セッションを開始しました。"
        }
    },
    {
        id: 18,
        target: "tremendous",
        category: "困难",
        stem: "Operating efficiency increased ________ across all assembly plants following the deployment of automated machinery.",
        options: ["tremendously", "tremendous", "memorably", "notably"],
        correct: "tremendously",
        explanations: {
            guide: "副词修饰不及物动词。increased ________ 结构中，需要副词修饰动词 increased，表达运营效率“极其巨大地/显著地”提升，选副词 tremendously。",
            family: "tremendously (adv.极其巨大地/惊人地) | tremendous (adj.巨大的) | memorably (adv.难忘地) | notably (adv.尤其是)。",
            details: "increased tremendously 属于高阶动副搭配，意为大幅显著增长。tremendous 是形容词，不能直接修饰动词 increased。",
            cn: "在部署自动化机械后，所有装配工厂的运营效率都得到了极大的提升。",
            jp: "自動化機械の導入後、すべての組み立て工場で業務効率が大幅に/劇的に（tremendously）向上しました。"
        }
    }
];