// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data51-60.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "revenue",
        pos: "名",
        ipa: "/ˈrevənuː/",
        cn: "（公司或政府的）营业收入，税收",
        jp: "（企業や政府の）収益、歳入",
        family: "revenues / revenue stream",
        tips: "商务财务场景第一高频词！常考搭配：annual revenue（年收入）、generate revenue（创造收入）以及 revenue growth（收入增长）。",
        desc: "The company reported high revenue."
    },
    {
        word: "summary",
        pos: "名/形",
        ipa: "/ˈsʌməri/",
        cn: "摘要，概要；简略的",
        jp: "要約、サマリー；簡略な",
        family: "summarize / summarization",
        tips: "办公与阅读高频词。常考短语：executive summary（执行摘要）、in summary（总而言之）、a brief summary of the report（报告简述）。",
        desc: "Read the summary of the report."
    },
    {
        word: "questionnaire",
        pos: "名",
        ipa: "/ˌkwestʃəˈner/",
        cn: "调查问卷",
        jp: "アンケート、質問票",
        family: "question / questioner",
        tips: "市场调查与客户反馈场景核心词。常考：fill out a questionnaire（填写问卷）或 complete the customer satisfaction questionnaire（完成客户满意度问卷）。",
        desc: "Please fill out this questionnaire."
    },
    {
        word: "tourism",
        pos: "名",
        ipa: "/ˈtʊrɪzəm/",
        cn: "旅游业，观光",
        jp: "観光業、観光",
        family: "tour / tourist / touristic",
        tips: "托业阅读（如地方经济、酒店、景点宣传）核心词。常考搭配：tourism industry（旅游业）、boost tourism（促进旅游业发展）。",
        desc: "Tourism is vital for the local economy."
    },
    {
        word: "prior",
        pos: "形/名",
        ipa: "/ˈpraɪər/",
        cn: "先前的，优先的；优先事项",
        jp: "前の、事前交渉の；優先事項",
        family: "priority / prioritize / priority list",
        tips: "核心短语：prior to（在……之前，等同于 before）。形容词常考 prior experience（先前经验）或 prior notice（事先通知）。",
        desc: "No prior experience is required."
    },
    {
        word: "household",
        pos: "名/形",
        ipa: "/ˈhaʊshoʊld/",
        cn: "家庭，户；家庭的，日常的",
        jp: "世帯、家庭；家庭の、日常の",
        family: "householder / housekeeping",
        tips: "经济与调查统计场景词。常考：household income（家庭收入）、household appliance（家用电器）、household budget（家庭预算）。",
        desc: "Average household income has increased."
    },
    {
        word: "acquire",
        pos: "動",
        ipa: "/əˈkwaɪər/",
        cn: "收购；获得，取得",
        jp: "買収する、取得する、獲得する",
        family: "acquisition / acquired / acquirer",
        tips: "托业 M&A（并购）核心动词！常考 acquire a company（收购一家公司）或 acquire new skills（掌握新技能）。其名词 acquisition 极高频。",
        desc: "They plan to acquire a competitor."
    },
    {
        word: "pharmacy",
        pos: "名",
        ipa: "/ˈfɑːrməsi/",
        cn: "药房，药店；药剂学",
        jp: "薬局、ドラッグストア；薬学",
        family: "pharmaceutical / pharmacist",
        tips: "医疗与商业零售高频词。同义表达包括 drugstore。注意其衍生形容词 pharmaceutical company（制药公司）也是托业高频词。",
        desc: "She works at a local pharmacy."
    },
    {
        word: "oversee",
        pos: "動",
        ipa: "/ˌoʊvərˈsiː/",
        cn: "监督，管理，负责",
        jp: "監督する、統括する",
        family: "overseer / oversight / overseeing",
        tips: "管理职责描述的核心及物动词！完美替代 supervise，常考 oversee a project（监督项目）或 oversee daily operations（管理日常运营）。",
        desc: "He was hired to oversee operations."
    },
    {
        word: "outline",
        pos: "動/名",
        ipa: "/ˈaʊtlaɪn/",
        cn: "概述，轮廓；纲要，轮廓线",
        jp: "概要を述べる；輪郭、概要",
        family: "outlined / outlining",
        tips: "商务邮件与会议核心词。常考：outline a strategy（概述策略）或 directly follows the steps outlined in the manual（遵循手册中列出的步骤）。",
        desc: "The manager will outline the plan."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "revenue",
        category: "简单",
        stem: "The regional sales team generated significant ________ during the final quarter of the fiscal year.",
        options: ["revenue", "summary", "pharmacy", "prior"],
        correct: "revenue",
        explanations: {
            guide: "及物动词后的宾语名词。generated（创造/产生）后面需要接名词作宾语，结合“在财年最后一个季度”，表达创造了显著的“营业收入”，选 revenue。",
            family: "revenue (n.营业收入) | summary (n.摘要) | pharmacy (n.药房) | prior (adj.先前的)。",
            details: "generated significant revenue 是财务与销售报告中的典型核心搭配。其他名词选项不符合销售团队创造财务成果的逻辑。",
            cn: "该区域销售团队在财年的最后一个季度创造了显著的营业收入。",
            jp: "地域営業チームは、年度の最終四半期に大幅な収益（revenue）を上げました。"
        }
    },
    {
        id: 2,
        target: "questionnaire",
        category: "简单",
        stem: "All seminar participants are kindly requested to complete a short feedback ________ before leaving.",
        options: ["questionnaire", "tourism", "household", "oversee"],
        correct: "questionnaire",
        explanations: {
            guide: "可数名词宾语。complete a short feedback... 结构中需要接名词，表达完成一份反馈“问卷”，选 questionnaire。",
            family: "questionnaire (n.调查问卷) | tourism (n.旅游业) | household (n.家庭) | oversee (v.监督)。",
            details: "complete a feedback questionnaire 属于托业调查与活动反馈场景的标准固定表述。oversee 是动词，无法作动词 complete 的宾语。",
            cn: "请所有研讨会参加者在离开前填写一份简短的反馈问卷。",
            jp: "すべてのセミナー参加者は、退出する前に短いフィードバック質問票（questionnaire）に記入するようお願いしています。"
        }
    },
    {
        id: 3,
        target: "prior",
        category: "简单",
        stem: "Candidates applying for the senior analyst position must have at least three years of ________ experience.",
        options: ["prior", "priority", "acquire", "outline"],
        correct: "prior",
        explanations: {
            guide: "形容词作前置定语。________ experience 中需要形容词修饰不可数名词 experience，表达“先前的”工作经验，选 prior。",
            family: "prior (adj.先前的) | priority (n.优先事项) | acquire (v.获得) | outline (v./n.概述)。",
            details: "prior experience 是招聘信息中的最高频考点短语。priority 是名词（优先权），在此处不能替代形容词作前置定语。",
            cn: "应聘高级分析师职位的候选人必须具有至少三年的相关先前工作经验。",
            jp: "上級アナリストの職に応募する候補者は、少なくとも3年間の関連する事前（prior）経験が必要です。"
        }
    },
    {
        id: 4,
        target: "oversee",
        category: "简单",
        stem: "The new project director was appointed to ________ the construction of the corporate headquarters.",
        options: ["oversee", "oversight", "pharmacy", "summary"],
        correct: "oversee",
        explanations: {
            guide: "动词不定式结构。was appointed to 后面需要接动词原形，表达任命某人去“监督/管理”建设工程，选 oversee。",
            family: "oversee (v.监督) | oversight (n.疏忽/监督) | pharmacy (n.药店) | summary (n.摘要)。",
            details: "to 为不定式符号，后面必须接动词原形 oversee。oversight 为名词，不能跟在不定式符号 to 之后。",
            cn: "新项目总监被任命来监督公司总部的建设过程。",
            jp: "新しいプロジェクトディレクターは、本社ビルの建設を監督（oversee）するために任命されました。"
        }
    },
    {
        id: 5,
        target: "pharmacy",
        category: "简单",
        stem: "Customers can pick up their prescribed medication from the retail ________ located on First Avenue.",
        options: ["pharmacy", "household", "tourism", "revenue"],
        correct: "pharmacy",
        explanations: {
            guide: "地点名词与场景词汇。pick up their prescribed medication（取处方药）对应的场所是“药房/药店”，选 pharmacy。",
            family: "pharmacy (n.药房) | household (n.家庭) | tourism (n.旅游业) | revenue (n.收入)。",
            details: "prescribed medication（处方药）与 retail pharmacy（零售药房）构成绝对场景对应。其他名词与药品取用无关。",
            cn: "顾客可以从位于第一大道的零售药房提取他们购买的处方药。",
            jp: "お客様は、ファースト・アベニューにある小売薬局（pharmacy）で処方薬を受け取ることができます。"
        }
    },
    {
        id: 6,
        target: "summary",
        category: "简单",
        stem: "The consultant provided a brief ________ of the proposed budget changes during the morning meeting.",
        options: ["summary", "summarize", "acquire", "questionnaire"],
        correct: "summary",
        explanations: {
            guide: "不定冠词与形容词后的名词中心语。a brief 后面需要接名词单数，表达提供一份简短的“摘要/概述”，选 summary。",
            family: "summary (n.摘要) | summarize (v.总结) | acquire (v.获得) | questionnaire (n.问卷)。",
            details: "a brief summary of...（……的简短摘要）是办公汇报高频结构。summarize 是动词，不能跟在冠词和形容词之后作宾语。",
            cn: "顾问在早会上提供了拟议预算变更的简短摘要。",
            jp: "コンサルタントは朝の会議で、提案された予算変更の簡単な要約（summary）を提出しました。"
        }
    },
    {
        id: 7,
        target: "tourism",
        category: "中等",
        stem: "The municipal government launched a new marketing campaign to promote regional ________ during the summer season.",
        options: ["tourism", "tourist", "acquire", "household"],
        correct: "tourism",
        explanations: {
            guide: "抽象概念名词。promote 后面接名词，表达促进区域“旅游业”，选抽象名词 tourism。",
            family: "tourism (n.旅游业) | tourist (n.游客) | acquire (v.收购) | household (n.家庭)。",
            details: "promote regional tourism 是地方政府经济政策中的固定表达。tourist 指具体的游客个人，修饰区域发展时应使用行业抽象名词 tourism。",
            cn: "市政府推出了一项新的营销活动，以在夏季推广区域旅游业。",
            jp: "地方政府は、夏季の地域観光業（tourism）を振興するための新しいマーケティングキャンペーンを開始しました。"
        }
    },
    {
        id: 8,
        target: "prior",
        category: "中等",
        stem: "All participants must submit their registration forms at least two days ________ to the start of the conference.",
        options: ["prior", "priority", "revenue", "outline"],
        correct: "prior",
        explanations: {
            guide: "介词固定短语。prior to 是托业最高频的介词短语之一，完美等同于 before（在……之前）。",
            family: "prior (adj./介短) | priority (n.优先权) | revenue (n.收入) | outline (v.概述)。",
            details: "prior to the start of... 意为“在会议开始之前”。priority 不能与 to 组合充当引导时间状语的复合介词。",
            cn: "所有参赛者必须在会议开始前至少两天提交注册表。",
            jp: "すべての参加者は、会議の開始前（prior to）に少なくとも2日までに登録フォームを提出しなければなりません。"
        }
    },
    {
        id: 9,
        target: "acquire",
        category: "中等",
        stem: "The global conglomerate announced its decision to ________ a promising artificial intelligence startup.",
        options: ["acquire", "acquisition", "oversee", "summary"],
        correct: "acquire",
        explanations: {
            guide: "不定式结构中的动词原形。decision to 后面接动词原形，表达决定去“收购”一家 AI 创业公司，选 acquire。",
            family: "acquire (v.收购/获得) | acquisition (n.收购) | oversee (v.监督) | summary (n.摘要)。",
            details: "decision to acquire a startup（收购创业公司的决定）是商业新闻的核心逻辑。acquisition 为名词，不能直接接在不定式符号 to 之后。",
            cn: "这家跨国财团宣布了收购一家有前途的人工智能创业公司的决定。",
            jp: "その巨大複合企業は、有望な人工知能スタートアップ企業を買収する（acquire）決定を発表しました。"
        }
    },
    {
        id: 10,
        target: "household",
        category: "中等",
        stem: "The survey gathered detailed demographic data on average ________ spending habits across the nation.",
        options: ["household", "householdings", "pharmacy", "prior"],
        correct: "household",
        explanations: {
            guide: "名词作前置定语。average ________ spending habits 中，用单数名词 household 作定语修饰 spending habits，表示“家庭”消费习惯。",
            family: "household (n./adj.家庭的) | householdings (非标准形式) | pharmacy (n.药房) | prior (adj.先前的)。",
            details: "household spending / household income 是经济调查与统计场景中的标准复合词。其他选项在语义和语法上均不符合。",
            cn: "该调查收集了关于全国平均家庭消费习惯的详细人口统计数据。",
            jp: "この調査では、全国の平均的な世帯（household）支出習慣に関する詳細な人口統計データを収集しました。"
        }
    },
    {
        id: 11,
        target: "outline",
        category: "中等",
        stem: "The chief executive officer will ________ the company's long-term expansion plans during the upcoming press conference.",
        options: ["outline", "outlining", "prior", "questionnaire"],
        correct: "outline",
        explanations: {
            guide: "情态动词后的动词原形。will 后面需要接动词原形，表达 CEO 将在发布会上“概述/讲解”扩张计划，选 outline。",
            family: "outline (v.概述/勾勒) | outlining (分词) | prior (adj.先前的) | questionnaire (n.问卷)。",
            details: "will outline 构成句子的谓语动词。outlining 是分词形式，不能直接与情态动词 will 构成谓语。",
            cn: "首席执行官将在即将来临的新闻发布会上概述公司的长期扩展计划。",
            jp: "最高経営責任者（CEO）は、近く開催される記者会見で会社の長期拡張計画の概要を述べる（outline）予定です。"
        }
    },
    {
        id: 12,
        target: "summary",
        category: "中等",
        stem: "At the end of each chapter, the author provides a concise ________ of the key management concepts discussed.",
        options: ["summary", "summarize", "revenue", "tourism"],
        correct: "summary",
        explanations: {
            guide: "不定冠词与形容词后的名词。a concise 后面接名词单数 summary，表示提供对核心管理概念的简明“总结/摘要”。",
            family: "summary (n.摘要) | summarize (v.总结) | revenue (n.收入) | tourism (n.旅游业)。",
            details: "a concise summary 是商务书刊与报告中的典型搭配。summarize 为动词，无法接受冠词 a 与形容词 concise 的修饰。",
            cn: "在每一章的结尾，作者都对所讨论的核心管理概念进行了简明扼要的总结。",
            jp: "各章の終わりに、著者は議論された主要な経営概念の簡潔な要約（summary）を提供しています。"
        }
    },
    {
        id: 13,
        target: "acquire",
        category: "困难",
        stem: "Following months of regulatory review, the antitrust commission finally approved the merger and ________ of the pharmaceutical firm.",
        options: ["acquisition", "acquire", "oversee", "questionnaire"],
        correct: "acquisition",
        explanations: {
            guide: "并列连词后的名词。the merger and ________ 中，and 并列两个名词，the merger（合并）与 the acquisition（收购），选名词 acquisition。",
            family: "acquisition (n.收购) | acquire (v.收购) | oversee (v.监督) | questionnaire (n.问卷)。",
            details: "M&A（Mergers and Acquisitions）是托业商业并购的核心专属词。acquire 是动词原形，不能与定冠词 the 和名词 merger 并列。",
            cn: "经过数月的监管审查，反垄断委员会终于批准了该制药公司的合并与收购。",
            jp: "数ヶ月にわたる規制上の審査を経て、公正取引委員会は製薬企業の合併および買収（acquisition）を最終的に承認しました。"
        }
    },
    {
        id: 14,
        target: "outline",
        category: "困难",
        stem: "All regional department managers are instructed to follow the safety guidelines strictly as ________ in the employee handbook.",
        options: ["outlined", "outline", "prior", "revenue"],
        correct: "outlined",
        explanations: {
            guide: "状语从句省缺结构与过去分词。as ________ in... 结构中，as 引导省略从句，使用过去分词 outlined，表示“如员工手册中所概述的那样”。",
            family: "outlined (p.p.被概述的) | outline (v.原形) | prior (adj.先前的) | revenue (n.收入)。",
            details: "as outlined in the handbook 相当于 as they are outlined in the handbook，属于托业阅读最高频的过去分词状语搭配。",
            cn: "要求所有区域部门经理严格遵守员工手册中所概述的安全准则。",
            jp: "すべての地域部門マネージャーは、従業員ハンドブックに記載されている（outlined）安全ガイドラインに厳格に従うよう指示されています。"
        }
    },
    {
        id: 15,
        target: "revenue",
        category: "困难",
        stem: "Diversifying our product offerings is essential for building a reliable and long-term ________ stream for the enterprise.",
        options: ["revenue", "summary", "pharmacy", "household"],
        correct: "revenue",
        explanations: {
            guide: "高阶商务复合名词搭配。a reliable revenue stream 意为“稳定可靠的收入流/资金来源”，选名词 revenue。",
            family: "revenue (n.营业收入) | summary (n.摘要) | pharmacy (n.药房) | household (n.家庭)。",
            details: "revenue stream 为金融与商业运营高频专属术语，意为“收益流/收入来源”。其他选项无法与 stream 组成合理的商业表达。",
            cn: "丰富我们的产品线对于为企业建立可靠且长期的收入流至关重要。",
            jp: "製品ラインナップの多様化は、企業にとって信頼性の高い長期的な収益（revenue）ストリームを構築するために不可欠です。"
        }
    },
    {
        id: 16,
        target: "oversee",
        category: "困难",
        stem: "The senior vice president will maintain full ________ over the implementation of the new international supply chain logistics.",
        options: ["oversight", "oversee", "prior", "tourism"],
        correct: "oversight",
        explanations: {
            guide: "形容词后的名词与搭配。maintain full ________ over... 中，形容词 full 后面需要接名词形式 oversight，构成 maintain oversight over（对……保持全面监督）。",
            family: "oversight (n.监督/管控) | oversee (v.监督) | prior (adj.先前的) | tourism (n.旅游业)。",
            details: "oversight 做名词时表示“监督/管理”。maintain full oversight over... 是管理层权责划分的高阶用语。oversee 是动词，不能作 maintain 的宾语。",
            cn: "高级副总裁将对新的国际供应链物流的实施保持全面监督。",
            jp: "上級副社長は、新しい国際サプライチェーン物流の実施に対して完全な統括（oversight）を維持します。"
        }
    },
    {
        id: 17,
        target: "household",
        category: "困难",
        stem: "Through continuous innovation and aggressive marketing, the brand quickly grew to become a prominent ________ name across Europe.",
        options: ["household", "householdings", "acquire", "questionnaire"],
        correct: "household",
        explanations: {
            guide: "高阶习惯用语/复合名词。a household name 是英语中的固定习语，意为“家喻户晓的名字/知名品牌”，选 household。",
            family: "household (n./adj.家喻户晓的) | householdings (非标准形式) | acquire (v.获得) | questionnaire (n.问卷)。",
            details: "become a household name 属于商业阅读中的高级成语表达，意为成为知名大牌。其他选项均无法与 name 搭配产生该习语含义。",
            cn: "通过持续创新和积极的营销，该品牌迅速成长为全欧洲家喻户晓的知名名字。",
            jp: "継続的なイノベーションと積極的なマーケティングにより、そのブランドは急速に成長し、ヨーロッパ中で誰もが知る（household）名前となりました。"
        }
    },
    {
        id: 18,
        target: "prior",
        category: "困难",
        stem: "Submitting the strategic budget proposal to the executive board should be treated as the highest ________ for this quarter.",
        options: ["priority", "prior", "summary", "outline"],
        correct: "priority",
        explanations: {
            guide: "冠词与最高级形容词后的名词。the highest ________ 中，最高级形容词 highest 后面需要接名词单数 priority，表示“当务之急/最高优先事项”。",
            family: "priority (n.优先事项) | prior (adj.先前的) | summary (n.摘要) | outline (v./n.轮廓)。",
            details: "treated as the highest priority 意为被视为最高优先事项。prior 是形容词，不能直接放在最高级形容词 highest 后面作名词表语。",
            cn: "向董事会提交战略预算提案应被视为本季度最重要的当务之急。",
            jp: "戦略的予算提案を取締役会に提出することは、今四半期の最優先事項（priority）として扱われるべきです。"
        }
    }
];