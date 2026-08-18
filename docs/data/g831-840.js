// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data621-630.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "comparable",
        pos: "形",
        ipa: "/ˈkɑːmpərəbl/",
        cn: "可比较的，相当的，比得上的",
        jp: "匹敵する、同等の、比較できる",
        family: "compare / comparison / comparatively",
        tips: "商业对比高频搭配：be comparable to/with（与……相当/相媲美），comparable figures/prices（同比数据/相当的价格）。",
        desc: "The two models are comparable in price."
    },
    {
        word: "utilize",
        pos: "動",
        ipa: "/ˈjuːtəlaɪz/",
        cn: "利用，使用，运用",
        jp: "利用する、活用する",
        family: "utilization / utility / utilized",
        tips: "资源管理与技术高频：utilize resources/technology/space（利用资源/技术/空间）。",
        desc: "We utilize renewable solar energy."
    },
    {
        word: "correspond",
        pos: "動",
        ipa: "/ˌkɔːrəˈspɑːnd/",
        cn: "相符，一致；通信；相当于",
        jp: "一致する、該当する、文通する",
        family: "correspondence / correspondent / correspondingly",
        tips: "数据与商务沟通高频：correspond with/to sth（与……相符/一致），correspond with clients（与客户通信）。",
        desc: "The figures correspond with our records."
    },
    {
        word: "quota",
        pos: "名",
        ipa: "/ˈkwoʊtə/",
        cn: "配额，定额，指标",
        jp: "割当量、ノルマ、定数",
        family: "quotas",
        tips: "销售与贸易高频：sales quota（销售指标/配额），meet/exceed one's quota（完成/超出指标）。",
        desc: "She exceeded her sales quota."
    },
    {
        word: "outing",
        pos: "名",
        ipa: "/ˈaʊtɪŋ/",
        cn: "远足，郊游，集体外出活动",
        jp: "遠足、外出、社内レクリエーション",
        family: "outings / out",
        tips: "企业团建与福利高频：company/annual outing（公司团建郊游/年度外出活动）。",
        desc: "They enjoyed the company outing."
    },
    {
        word: "flaw",
        pos: "名/動",
        ipa: "/flɔː/",
        cn: "缺陷，瑕疵；使有缺陷",
        jp: "欠陥、傷、不備；損なう",
        family: "flawless / flawed / flawlessly",
        tips: "质检与设计高频：minor/fatal flaw（微小瑕疵/致命缺陷），design flaw（设计缺陷）。",
        desc: "Inspect products for any minor flaw."
    },
    {
        word: "rigorous",
        pos: "形",
        ipa: "/ˈrɪɡərəs/",
        cn: "严格的，严密的，缜密的",
        jp: "厳格な、緻密な、厳しい",
        family: "rigorously / rigor / rigorousness",
        tips: "质检与审计高频：rigorous testing/screening/inspection（严格的测试/审查/检验）。",
        desc: "Devices undergo rigorous safety tests."
    },
    {
        word: "recyclables",
        pos: "名",
        ipa: "/ˌriːˈsaɪkləblz/",
        cn: "可回收物品（复数）",
        jp: "リサイクル可能品、資源ゴミ（複数）",
        family: "recycle / recyclable / recycling",
        tips: "环保与设施管理高频：separate recyclables（将可回收物分类），collect recyclables（回收资源垃圾）。",
        desc: "Place all clean recyclables here."
    },
    {
        word: "vital",
        pos: "形",
        ipa: "/ˈvaɪtl/",
        cn: "极其重要的，必不可少的，生命攸关的",
        jp: "極めて重要な、不可欠な",
        family: "vitally / vitality / vitalize",
        tips: "企业战略高频搭配：play a vital role in sth（在某事中起关键作用），vital asset/information（核心资产/关键信息）。",
        desc: "Teamwork is vital for success."
    },
    {
        word: "undertake",
        pos: "動",
        ipa: "/ˌʌndərˈteɪk/",
        cn: "承担，着手进行，从事",
        jp: "引き受ける、着手する、請け負う",
        family: "undertook / undertaken / undertaking",
        tips: "项目与工程高频：undertake a project/study/renovation（承担项目/开展研究/进行翻修）。",
        desc: "The firm will undertake the study."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "outing",
        category: "简单",
        stem: "The human resources committee organized an annual company ________ to a nearby scenic lake for all employees.",
        options: ["outing", "quota", "flaw", "recyclables"],
        correct: "outing",
        explanations: {
            guide: "企业福利名词考点。an annual company ________ 结合前往附近风景优美的湖泊，表达全员“团建郊游/集体外出活动”，选 outing。",
            family: "outing (n.郊游/外出活动) | quota (n.配额) | flaw (n.缺陷) | recyclables (n.可回收物)。",
            details: "company outing 意为公司团建郊游。quota（定额）、flaw（瑕疵）均非员工集体出游活动。",
            cn: "人力资源委员会为全体员工组织了一年一度前往附近风景优美湖泊的公司团建郊游。",
            jp: "人事委員会は全従業員のために、近くの景色の良い湖への年次社内レクリエーション/遠足（outing）を企画しました。"
        }
    },
    {
        id: 2,
        target: "vital",
        category: "简单",
        stem: "Timely and transparent communication is ________ to the ultimate success of any cross-departmental project.",
        options: ["vital", "comparable", "flawed", "corresponding"],
        correct: "vital",
        explanations: {
            guide: "表语形容词与介词搭配。is ________ to the success 结合及时透明的沟通对跨部门项目成功不可或缺，选 vital（极其重要的/必不可少的）。",
            family: "vital (adj.极重要的/不可或缺的) | comparable (adj.可比较的) | flawed (adj.有缺陷的) | corresponding (adj.相应的)。",
            details: "be vital to sth 意为对……至关重要。flawed（有瑕疵的）语义相反，comparable 强调可比性，不符合重要性判断语境。",
            cn: "及时且透明的沟通对于任何跨部门项目的最终成功都至关重要。",
            jp: "タイムリーで透明性のあるコミュニケーションは、あらゆる部門横断型プロジェクトの最終的な成功にとって不可欠（vital）です。"
        }
    },
    {
        id: 3,
        target: "quota",
        category: "简单",
        stem: "The top regional sales representative received a generous performance bonus after exceeding her quarterly sales ________.",
        options: ["quota", "outing", "flaw", "recyclables"],
        correct: "quota",
        explanations: {
            guide: "销售考核复合名词。quarterly sales ________ 结合超额完成并获得绩效奖金（exceeding... bonus），选 quota（指标/定额）。",
            family: "quota (n.定额/配额/指标) | outing (n.郊游) | flaw (n.缺陷) | recyclables (n.可回收物)。",
            details: "sales quota 意为销售配额/业绩指标。outing（郊游）、flaw（缺陷）均无法与 sales 构成业绩考核专有名词。",
            cn: "这位区域金牌销售代表在超额完成季度销售指标后，获得了一笔丰厚的绩效奖金。",
            jp: "地域のトップ営業担当者は、四半期の販売ノルマ/目標（quota）を超過達成した後、手厚い業績ボーナスを受け取りました。"
        }
    },
    {
        id: 4,
        target: "flaw",
        category: "简单",
        stem: "Quality control inspectors examined the prototype carefully to make sure there was no manufacturing ________.",
        options: ["flaw", "outing", "quota", "vitality"],
        correct: "flaw",
        explanations: {
            guide: "质检名词考点。manufacturing ________ 结合质检员仔细检查原型以确保没有制造“缺陷/瑕疵”，选 flaw。",
            family: "flaw (n.缺陷/瑕疵) | outing (n.郊游) | quota (n.指标) | vitality (n.活力)。",
            details: "manufacturing flaw 意为制造缺陷。outing（外出活动）、vitality（生命力）均非质检排查的对象。",
            cn: "质量控制检验员仔细检查了产品原型，以确保不存在任何制造缺陷。",
            jp: "品質管理検査官は、製造上の欠陥（flaw）がないことを確認するために試作品を注意深く検査しました。"
        }
    },
    {
        id: 5,
        target: "recyclables",
        category: "简单",
        stem: "Office employees are requested to place all clean paper and plastic ________ in the designated blue bins.",
        options: ["recyclables", "quotas", "outings", "flaws"],
        correct: "recyclables",
        explanations: {
            guide: "环保分类名词复数。plastic ________ 结合投入指定的蓝色回收箱，选 recyclables（可回收物品）。",
            family: "recyclables (n.复数可回收物品) | quotas (n.配额) | outings (n.郊游) | flaws (n.缺陷)。",
            details: "paper and plastic recyclables 意为纸质与塑料可回收物。quotas（配额）、outings（郊游）均非投入回收箱的废弃物实体。",
            cn: "请办公室员工将所有干净的废纸和塑料可回收物放入指定的蓝色回收箱内。",
            jp: "オフィスの従業員は、清潔な紙類およびプラスチック製のリサイクル可能品（recyclables）をすべて指定の青いゴミ箱に入れるよう求められます。"
        }
    },
    {
        id: 6,
        target: "utilize",
        category: "简单",
        stem: "The engineering department learned how to ________ the newly installed simulation software to optimize workflows.",
        options: ["utilize", "correspond", "undertake", "quota"],
        correct: "utilize",
        explanations: {
            guide: "软件操作动词不定式。how to 后面接动词原形，结合使用新安装的仿真软件以优化工作流，选 utilize（利用/运用）。",
            family: "utilize (v.利用/使用) | correspond (v.相符/通信) | undertake (v.承担) | quota (n.指标)。",
            details: "to utilize software 意为运用/使用软件工具。correspond 需搭配介词（correspond with/to），quota 为名词，动宾搭配不成立。",
            cn: "工程部门学习了如何利用新安装的仿真软件来优化工作流程。",
            jp: "技術部門は、ワークフローを最適化するために新しく導入されたシミュレーションソフトウェアを活用する（utilize）方法を学びました。"
        }
    },
    {
        id: 7,
        target: "comparable",
        category: "中等",
        stem: "The build quality of the mid-range smartphone is easily ________ to that of premium flagship models on the market.",
        options: ["comparable", "rigorous", "vital", "flawed"],
        correct: "comparable",
        explanations: {
            guide: "产品性能对比形容词。is easily ________ to that of... 属于托业经典句型，表达中端机品质完全能与高端旗舰机“相媲美/相当”，选 comparable。",
            family: "comparable (adj.比得上的/相当的) | rigorous (adj.严格的) | vital (adj.至关重要的) | flawed (adj.有瑕疵的)。",
            details: "be comparable to 意为与……相当/可与……比拟。rigorous（严格的）、vital（不可或缺的）无法与 to that of 构成产品性能横向对比。",
            cn: "这款中端智能手机的做工品质完全可以与市场上高端旗舰机型相媲美。",
            jp: "そのミドルレンジスマートフォンの製造品質は、市場に出回っている高級フラッグシップモデルのものと容易に匹敵（comparable）します。"
        }
    },
    {
        id: 8,
        target: "undertake",
        category: "中等",
        stem: "The construction contractor agreed to ________ the comprehensive structural renovation of the historic municipal library.",
        options: ["undertake", "utilize", "correspond", "flaw"],
        correct: "undertake",
        explanations: {
            guide: "工程项目动词不定式。agreed to 后面接动词原形，结合建筑承包商承诺“承担/着手进行”市立图书馆的全面结构修缮，选 undertake。",
            family: "undertake (v.承担/着手进行) | utilize (v.利用) | correspond (v.符合) | flaw (v.使有缺陷/n.瑕疵)。",
            details: "to undertake renovation 属于商务工程核心搭配，意为承担翻修工程。utilize 修饰大型修缮工程项目不如 undertake 地道规范。",
            cn: "建筑承包商同意承担这座历史悠久的市立图书馆的全面结构翻修工程。",
            jp: "建設請負業者は、歴史的な市立図書館の包括的な構造改修工事を引き受ける（undertake）ことに合意しました。"
        }
    },
    {
        id: 9,
        target: "rigorous",
        category: "中等",
        stem: "Before receiving commercial approval from federal regulators, all newly developed pharmaceuticals must undergo ________ safety testing.",
        options: ["rigorous", "comparable", "vital", "outing"],
        correct: "rigorous",
        explanations: {
            guide: "测试标准修饰形容词。undergo ________ safety testing 结合药品上市前接受严苛的安全检测，选 rigorous（严格的/严密的）。",
            family: "rigorous (adj.严密的/严格的) | comparable (adj.相当的) | vital (adj.重要的) | outing (n.郊游)。",
            details: "rigorous testing 属于医药与工业质检高频固定搭配，意为严格缜密的测试。vital safety testing 搭配虽通，但修饰测试的严密程序规范时首选 rigorous。",
            cn: "在获得联邦监管机构的商业批准之前，所有新研发的药物都必须经过严格的安全测试。",
            jp: "連邦規制当局から商業的承認を受ける前に、新しく開発されたすべての医薬品は厳格な（rigorous）安全性テストを受けなければなりません。"
        }
    },
    {
        id: 10,
        target: "correspond",
        category: "中等",
        stem: "Receiving clerks must verify that all quantities listed on the delivery receipt ________ with the actual goods inside the crates.",
        options: ["correspond", "undertake", "utilize", "quota"],
        correct: "correspond",
        explanations: {
            guide: "核对一致动词考点。verify that quantities ________ with actual goods 结合核对送货单数量与实物“相符/一致”，选 correspond。",
            family: "correspond (v.相符/一致) | undertake (v.承担) | utilize (v.利用) | quota (n.指标)。",
            details: "correspond with 属于仓储与物流经典词组，意为与……相符/一致。undertake（承担）、utilize（利用）无法与 with 连用表达数据核验一致。",
            cn: "收货文员必须核实送货收据上列出的所有数量与板条箱内的实际货物相符。",
            jp: "受領係は、配達受領書に記載されているすべての数量が木箱内の実際の品物と一致して（correspond）いることを確認しなければなりません。"
        }
    },
    {
        id: 11,
        target: "flaw",
        category: "中等",
        stem: "Despite a minor cosmetic ________ on its exterior metal casing, the refurbished laptop performed with optimal speed.",
        options: ["flaw", "quota", "outing", "recyclable"],
        correct: "flaw",
        explanations: {
            guide: "电子产品外观名词考点。a minor cosmetic ________ 结合外壳虽有微小外观瑕疵但运行速度极佳，选 flaw（瑕疵/缺陷）。",
            family: "flaw (n.瑕疵/缺陷) | quota (n.配额) | outing (n.外出) | recyclable (adj./n.可回收物)。",
            details: "cosmetic flaw 属于质检与二手翻新高频术语，专指外观轻微划痕/瑕疵。quota（定额）、outing（郊游）语义不符。",
            cn: "尽管外部金属外壳上有轻微的外观瑕疵，这台翻新的笔记本电脑依然运行得非常流畅迅速。",
            jp: "外側の金属ケースに軽微な外観上の傷/不備（flaw）があるにもかかわらず、その整備済みノートパソコンは最適な速度で動作しました。"
        }
    },
    {
        id: 12,
        target: "utilize",
        category: "中等",
        stem: "The property management firm aims to maximize rental revenue by ensuring that all commercial office space is fully ________.",
        options: ["utilized", "utilize", "utilization", "utilizing"],
        correct: "utilized",
        explanations: {
            guide: "被动语态过去分词。is fully ________ 结构中，副词 fully 后面接过去分词，表达商业办公空间得到“充分利用”，选 utilized。",
            family: "utilized (adj./v-ed被利用的) | utilize (v.原形) | utilization (n.利用) | utilizing (v-ing)。",
            details: "fully utilized 意为被充分利用。utilization 是名词，utilize 是动词原形，均不能跟在系动词 is 和副词 fully 之后作表语分词。",
            cn: "该物业管理公司旨在通过确保所有商业办公空间得到充分利用来最大化租金收入。",
            jp: "不動産管理会社は、すべての商業オフィススペースが完全に活用される（utilized）ようにすることで、賃貸収入を最大化することを目指しています。"
        }
    },
    {
        id: 13,
        target: "rigorous",
        category: "困难",
        stem: "The newly updated cybersecurity protocols must be enforced ________ across all regional financial branches.",
        options: ["rigorously", "rigorous", "comparably", "vitally"],
        correct: "rigorously",
        explanations: {
            guide: "副词修饰被动动词。must be enforced ________ 结构中，需要副词修饰过去分词 enforced，表达安全规章必须被“严格严密地”执行，选 rigorously。",
            family: "rigorously (adv.严格地/缜密地) | rigorous (adj.严格的) | comparably (adv.相当地) | vitally (adv.极其重要地)。",
            details: "enforced rigorously 属于法律与合规绝高频动副搭配，意为严格执行。rigorous 是形容词，不能直接修饰动词 enforced。",
            cn: "最新更新的网络安全协议必须在所有区域金融分行得到严格执行。",
            jp: "新しく更新されたサイバーセキュリティプロトコルは、すべての地域金融支店で厳格に（rigorously）施行されなければなりません。"
        }
    },
    {
        id: 14,
        target: "correspond",
        category: "困难",
        stem: "When international shipping freight rates increase, retail consumer prices typically rise ________ to offset transportation expenses.",
        options: ["correspondingly", "correspond", "correspondence", "comparable"],
        correct: "correspondingly",
        explanations: {
            guide: "派生副词修饰动词。prices typically rise ________ 结构中，需要副词修饰动词 rise，表达零售价“相应地/随之”上涨以弥补运输成本，选 correspondingly。",
            family: "correspondingly (adv.相应地/随之) | correspond (v.相符) | correspondence (n.通信/信件) | comparable (adj.相当的)。",
            details: "rise correspondingly 属于经济走势分析经典搭配，意为相应地上涨。correspondence 是名词，comparable 是形容词，均不能作修饰动词 rise 的副词状语。",
            cn: "当国际海运运费上涨时，零售消费品价格通常会相应地上涨，以抵消运输成本。",
            jp: "国際貨物配送料金が上昇すると、輸送費を相殺するために小売消費者物価は通常、それに応じて/相応に（correspondingly）上昇します。"
        }
    },
    {
        id: 15,
        target: "undertake",
        category: "困难",
        stem: "Overseeing the cross-border merger and acquisition proved to be the most demanding ________ the executive board had ever faced.",
        options: ["undertaking", "undertake", "undertook", "utilization"],
        correct: "undertaking",
        explanations: {
            guide: "派生抽象名词作表语。the most demanding ________ 结构中，形容词 demanding（艰巨费力的）后面接名词形式 undertaking（艰巨任务/事业/项目）。",
            family: "undertaking (n.事业/艰巨任务/承诺) | undertake (v.承担) | undertook (v-ed过去式) | utilization (n.利用)。",
            details: "a demanding undertaking 属于托业高阶商务管理核心搭配，意为一项极其艰巨的事业/任务。undertake 是动词原形，不能作形容词最高级修饰的中心名词。",
            cn: "事实证明，主导这一跨国并购案是执行董事会所面临过的最艰巨的一项任务。",
            jp: "国境を越えた企業の合併・買収を指揮することは、執行役員会がこれまでに直面した中で最も過酷な事業/課題（undertaking）であることが判明しました。"
        }
    },
    {
        id: 16,
        target: "comparable",
        category: "困难",
        stem: "When evaluating the two consulting proposals, committee members made a direct ________ of their projected implementation timelines.",
        options: ["comparison", "comparable", "comparatively", "correspondence"],
        correct: "comparison",
        explanations: {
            guide: "派生名词固定搭配考点。made a direct ________ of... 属于托业高频动宾短语 make a comparison of，表达对两者实施时间表进行了“直接对比”，选 comparison。",
            family: "comparison (n.对比/比较) | comparable (adj.可比的) | comparatively (adv.相对地) | correspondence (n.通信/相符)。",
            details: "make a comparison of 意为对……进行比较。comparable 是形容词，comparatively 是副词，均不能跟在形容词 direct 之后作及物动词 made 的宾语中心语。",
            cn: "在评估这两份咨询方案时，委员会成员对其预计的实施时间表进行了直接对比。",
            jp: "2つのコンサルティング提案を評価する際、委員会のメンバーは予測される実施タイムラインを直接比較（comparison）しました。"
        }
    },
    {
        id: 17,
        target: "flaw",
        category: "困难",
        stem: "The quality assurance team commended the lead software engineers for delivering a completely ________ application upgrade.",
        options: ["flawless", "flaw", "flawed", "rigorous"],
        correct: "flawless",
        explanations: {
            guide: "派生形容词修饰名词。a completely ________ application upgrade 结构中，副词 completely 后面接形容词，结合表彰工程师交付了“完美无瑕的/零缺陷的”软件升级，选 flawless。",
            family: "flawless (adj.完美无瑕的/无缺陷的) | flaw (n.缺陷) | flawed (adj.有缺陷的) | rigorous (adj.严密的)。",
            details: "flawless upgrade 意为完美无瑕的升级。flawed（有缺陷的）与被质量团队表扬（commended）的褒义语境矛盾，flaw 是名词不能作定语。",
            cn: "质量保证团队表彰了首席软件工程师交付了一次完全无瑕疵的应用软件升级。",
            jp: "品質保証チームは、完全に完璧な/欠陥のない（flawless）アプリケーションのアップグレードを提供した主任ソフトウェアエンジニアを称賛しました。"
        }
    },
    {
        id: 18,
        target: "utilize",
        category: "困难",
        stem: "Optimizing warehouse space ________ enabled the logistics provider to accommodate twenty percent more inventory without expanding.",
        options: ["utilization", "utilize", "utilized", "utility"],
        correct: "utilization",
        explanations: {
            guide: "派生抽象复合名词主语。Optimizing warehouse space ________ 结构中，动名词 Optimizing 后面接复合名词词组，表达优化仓库空间“利用率/利用程度”，选 utilization。",
            family: "utilization (n.利用/利用率) | utilize (v.利用) | utilized (adj.被利用的) | utility (n.公共事业/效用)。",
            details: "space utilization 属于仓储管理核心专有名词，意为空间利用率。utility 通常指水电气公用事业或抽象效用，不能用来表示空间的充分使用率。",
            cn: "优化仓库空间利用率使该物流供应商在不扩建场地的情况下多容纳了百分之二十的库存。",
            jp: "倉庫のスペース活用度/利用率（utilization）を最適化したことで、その物流業者は敷地を拡張することなく在庫を20％多く収容できるようになりました。"
        }
    }
];