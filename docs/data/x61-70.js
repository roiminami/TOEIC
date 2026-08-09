// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data201-210.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "proficiency",
        pos: "名",
        ipa: "/prəˈfɪʃnsi/",
        cn: "熟练，精通",
        jp: "熟達、精通、熟練",
        family: "proficient / proficiently",
        tips: "语言与技能要求高频：language proficiency（语言熟练度），demonstrate proficiency（展示熟练度）。",
        desc: "Her language proficiency is impressive."
    },
    {
        word: "rake",
        pos: "名/動",
        ipa: "/reɪk/",
        cn: "耙子；用耙子耙",
        jp: "熊手、レーキ；（熊手で）集める",
        family: "raking / raked",
        tips: "Part 1 庭院维护高频：raking leaves（耙树叶）或 garden rake（园艺耙子）。",
        desc: "He uses a rake."
    },
    {
        word: "linguistics",
        pos: "名",
        ipa: "/lɪŋˈɡwɪstɪks/",
        cn: "语言学",
        jp: "言語学",
        family: "linguist / linguistic / linguistically",
        tips: "学术与招聘高频：applied linguistics（应用语言学），linguistic skills（语言能力）。",
        desc: "She studies applied linguistics."
    },
    {
        word: "quota",
        pos: "名",
        ipa: "/ˈkwoʊtə/",
        cn: "配额，限额，指标",
        jp: "割り当て、ノルマ、定員",
        family: "quotas",
        tips: "销售与贸易高频：sales quota（销售指标），meet the quota（完成配额）。",
        desc: "We met our quota."
    },
    {
        word: "landfill",
        pos: "名",
        ipa: "/ˈlændfɪl/",
        cn: "垃圾填埋场",
        jp: "ごみ埋立地、埋立",
        family: "landfills",
        tips: "环保与物流高频：waste sent to landfills（发送到填埋场的垃圾），landfill site（垃圾填埋场）。",
        desc: "The landfill is full."
    },
    {
        word: "arose",
        pos: "動",
        ipa: "/əˈroʊz/",
        cn: "产生，出现（arise的过去式）",
        jp: "生じた、起こった",
        family: "arise / arisen / arising",
        tips: "商务问题与危机处理高频：a problem arose（出现问题）；注意不规则变化 arise - arose - arisen。",
        desc: "An unexpected problem arose."
    },
    {
        word: "intranet",
        pos: "名",
        ipa: "/ˈɪntrənet/",
        cn: "内部网，企业局域网",
        jp: "イントラネット、社内情報網",
        family: "internet / network",
        tips: "IT与内部沟通高频：company intranet（公司局域网），posted on the intranet（发布在内部网上）。",
        desc: "Check the company intranet."
    },
    {
        word: "profound",
        pos: "形",
        ipa: "/prəˈfaʊnd/",
        cn: "深刻的，深远的",
        jp: "深刻な、深遠な",
        family: "profoundly / profundity",
        tips: "商务与社会影响高频：profound effect/impact（深远影响）。",
        desc: "It had a profound impact."
    },
    {
        word: "yield",
        pos: "動/名",
        ipa: "/jiːld/",
        cn: "产生，屈服；产量，收益",
        jp: "産出する、屈する；収益、産出量",
        family: "yielding / unyielding / crop yield",
        tips: "投资与农业高频：high yield（高收益/高产出），yield results（出结果）。",
        desc: "The investment yields profit."
    },
    {
        word: "skyscraper",
        pos: "名",
        ipa: "/ˈskaɪskreɪpər/",
        cn: "摩天大楼",
        jp: "超高層ビル",
        family: "skyline / high-rise",
        tips: "Part 1 建筑景观高频：tall skyscraper（高耸的摩天大楼），skyscrapers lining the street（沿街高楼）。",
        desc: "The skyscraper is tall."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "quota",
        category: "简单",
        stem: "The sales representative exceeded her monthly ________ by selling fifty additional units.",
        options: ["quota", "intranet", "landfill", "rake"],
        correct: "quota",
        explanations: {
            guide: "销售绩效名词。exceeded her monthly ________ 结合售出额外的产品，选 quota（销售指标/配额）。",
            family: "quota (n.配额/指标) | intranet (n.内部网) | landfill (n.垃圾填埋场) | rake (n.耙子)。",
            details: "monthly quota 指月度销售指标。intranet（内部网）、landfill（垃圾场）均非个人销售考核指标。",
            cn: "该销售代表通过多售出 50 台设备，超额完成了她的月度销售指标。",
            jp: "その営業担当者はさらに50台を販売し、月間ノルマ（quota）を達成しました。"
        }
    },
    {
        id: 2,
        target: "intranet",
        category: "简单",
        stem: "Employees can download the updated staff handbook directly from the company ________.",
        options: ["intranet", "skyscraper", "landfill", "proficiency"],
        correct: "intranet",
        explanations: {
            guide: "公司内部网络系统名词。download from the company ________ 结合下载员工手册，选 intranet（企业内部网）。",
            family: "intranet (n.内部网) | skyscraper (n.摩天大楼) | landfill (n.填埋场) | proficiency (n.熟练)。",
            details: "company intranet 指公司局域网/内部网。skyscraper（大楼）、landfill（填埋场）均非下载文件的网络平台。",
            cn: "员工可以直接从公司内部网下载最新的员工手册。",
            jp: "従業員は会社のイントラネット（intranet）から直接、更新された社員ハンドブックをダウンロードできます。"
        }
    },
    {
        id: 3,
        target: "rake",
        category: "简单",
        stem: "The groundskeeper used a garden ________ to gather the dry leaves into a pile.",
        options: ["rake", "yield", "arose", "linguistics"],
        correct: "rake",
        explanations: {
            guide: "园艺工具名词。used a garden ________ 结合把干树叶拢成一堆（gather dry leaves），工具选 rake（耙子）。",
            family: "rake (n.耙子) | yield (v.产生) | arose (v.产生) | linguistics (n.语言学)。",
            details: "garden rake 指园艺耙子。yield、arose 为动词，不能紧跟在形容词 garden 后面作工具名词。",
            cn: "园区管理员用一把园艺耙子把干树叶拢成了一堆。",
            jp: "グラウンド管理人は乾いた落ち葉を山に集めるためにガーデンレーキ（rake）を使用しました。"
        }
    },
    {
        id: 4,
        target: "skyscraper",
        category: "简单",
        stem: "The city skyline is dominated by a newly constructed eighty-story ________.",
        options: ["skyscraper", "landfill", "quota", "intranet"],
        correct: "skyscraper",
        explanations: {
            guide: "高层建筑名词。eighty-story（80层的）修饰大型建筑物，选 skyscraper（摩天大楼）。",
            family: "skyscraper (n.摩天大楼) | landfill (n.填埋场) | quota (n.配额) | intranet (n.内部网)。",
            details: "eighty-story skyscraper 指 80 层高的摩天大楼。landfill（填埋场）、intranet（内部网）均非高层建筑。",
            cn: "城市天际线被一栋新建的 80 层摩天大楼所占据。",
            jp: "都市のスカイラインは、新しく建設された80階建ての超高層ビル（skyscraper）によって象徴されています。"
        }
    },
    {
        id: 5,
        target: "yield",
        category: "简单",
        stem: "The new financial strategy is expected to ________ positive returns within six months.",
        options: ["yield", "arose", "profound", "rake"],
        correct: "yield",
        explanations: {
            guide: "动词不定式与金融收益搭配。is expected to 后面接动词原形，表达“产生”积极回报，选 yield。",
            family: "yield (v.产生/收益) | arose (v.产生/过去式) | profound (adj.深刻的) | rake (n.耙子)。",
            details: "yield returns 意为产生回报。arose 是过去式，不能跟在不定式符号 to 后面；profound 为形容词。",
            cn: "预计新的财务策略将在六个月内产生积极的回报。",
            jp: "新しい財務戦略は、6ヶ月以内にプラスのリターンを産出する（yield）と期待されています。"
        }
    },
    {
        id: 6,
        target: "proficiency",
        category: "简单",
        stem: "Applicants for the translator position must demonstrate high ________ in written English.",
        options: ["proficiency", "proficient", "linguistics", "quota"],
        correct: "proficiency",
        explanations: {
            guide: "能力与资格抽象名词。demonstrate high ________ 结构中，形容词 high 后面接名词，表达“熟练度/精通程度”，选 proficiency。",
            family: "proficiency (n.熟练/精通) | proficient (adj.熟练的) | linguistics (n.语言学) | quota (n.配额)。",
            details: "proficiency in English 指英语熟练度。proficient 为形容词，不能作动词 demonstrate 的宾语。",
            cn: "翻译岗位的应聘者必须具备极高的书面英语熟练度。",
            jp: "翻訳職の応募者は、英語の書面における高い熟達度（proficiency）を証明しなければなりません。"
        }
    },
    {
        id: 7,
        target: "arose",
        category: "中等",
        stem: "A technical difficulty ________ during the live broadcast, causing a brief delay in the program.",
        options: ["arose", "arise", "yielded", "profound"],
        correct: "arose",
        explanations: {
            guide: "不规则动词过去式。句中有过去的动作 causing a brief delay，表达突发问题“产生/出现”，选 arise 的过去式 arose。",
            family: "arose (v-ed出现/产生) | arise (v.原形) | yielded (v-ed产生/屈服) | profound (adj.深刻的)。",
            details: "A difficulty arose 意为出现了困难。arise 是动词原形，在此处与过去时语境不符。",
            cn: "直播过程中出现了技术困难，导致程序短暂延误。",
            jp: "生放送中に技術的な困難が生じ（arose）、番組に短い遅延が発生しました。"
        }
    },
    {
        id: 8,
        target: "profound",
        category: "中等",
        stem: "The technological breakthrough had a ________ effect on global supply chain logistics.",
        options: ["profound", "profundity", "proficient", "intranet"],
        correct: "profound",
        explanations: {
            guide: "形容词作前置定语。a ________ effect 结构中，填写形容词修饰 effect，表达“深远的影响”，选 profound。",
            family: "profound (adj.深远的/深刻的) | profundity (n.深刻) | proficient (adj.熟练的) | intranet (n.内部网)。",
            details: "profound effect 属于托业核心搭配，意为深远的影响。profundity 是名词，不能作 effect 的前置定语。",
            cn: "这一技术突破对全球供应链物流产生了深远的影响。",
            jp: "その技術的突破は、世界的なサプライチェーン物流に深刻な（profound）影響を与えました。"
        }
    },
    {
        id: 9,
        target: "landfill",
        category: "中等",
        stem: "To protect the environment, the municipal council reduced the volume of waste sent to the local ________.",
        options: ["landfill", "skyscraper", "quota", "rake"],
        correct: "landfill",
        explanations: {
            guide: "环保名词考点。waste sent to the local ________ 表达运往当地“垃圾填埋场”的废弃物，选 landfill。",
            family: "landfill (n.垃圾填埋场) | skyscraper (n.摩天大楼) | quota (n.配额) | rake (n.耙子)。",
            details: "local landfill 意为当地垃圾填埋场。skyscraper（大楼）、quota（配额）均非处置废弃物的场所。",
            cn: "为保护环境，市议会减少了送往当地垃圾填埋场的废弃物总量。",
            jp: "環境を保護するため、市議会は地元の埋立地（landfill）に送られるごみの量を削減しました。"
        }
    },
    {
        id: 10,
        target: "linguistics",
        category: "中等",
        stem: "Dr. Evans holds an advanced degree in applied ________ and specializes in language acquisition.",
        options: ["linguistics", "linguist", "proficiency", "intranet"],
        correct: "linguistics",
        explanations: {
            guide: "学术专业名称。applied ________ 属于专业名称固定表达，意为“应用语言学”，选 linguistics。",
            family: "linguistics (n.语言学) | linguist (n.语言学家) | proficiency (n.精通) | intranet (n.内部网)。",
            details: "applied linguistics 意为应用语言学。linguist 指“语言学家”个人，非学科名称。",
            cn: "埃文斯博士拥有应用语言学的高级学位，专门研究语言习得。",
            jp: "エヴァンス博士は応用言語学（linguistics）の学位を所持しており、言語習得を専門としています。"
        }
    },
    {
        id: 11,
        target: "quota",
        category: "中等",
        stem: "The international trade agreement imposed strict import ________ on foreign agricultural products.",
        options: ["quotas", "quota", "landfills", "yields"],
        correct: "quotas",
        explanations: {
            guide: "贸易名词复数泛指。import ________ 属于国际贸易专属词组，表达进口“配额/限额”，用复数 quotas。",
            family: "quotas (n.复数配额) | quota (n.单数) | landfills (n.填埋场) | yields (n.收益)。",
            details: "strict import quotas 意为严格的进口配额。在缺乏单数冠词 a/an 的情况下用复数 quotas。",
            cn: "该国际贸易协定对外国农产品实施了严格的进口配额。",
            jp: "国際貿易協定により、外国の農産物に厳しい輸入割り当て（quotas）が課されました。"
        }
    },
    {
        id: 12,
        target: "yield",
        category: "中等",
        stem: "Favorable weather conditions led to an unusually high agricultural ________ this harvest season.",
        options: ["yield", "arose", "profound", "proficient"],
        correct: "yield",
        explanations: {
            guide: "农业与生产名词考点。agricultural ________ 表达农业“产量/产出”，选名词 yield。",
            family: "yield (n.产量/收益/v.产出) | arose (v.产生) | profound (adj.深远的) | proficient (adj.熟练的)。",
            details: "agricultural yield 意为农作物产量。arose 为动词过去式，不能作名词中心语。",
            cn: "良好的天气条件导致本收获季节农作物产量异常之高。",
            jp: "好好な天候条件により、今収穫期は異例の惨事である高い農業産出（yield）がもたらされました。"
        }
    },
    {
        id: 13,
        target: "arose",
        category: "困难",
        stem: "Had an unforeseen budget deficit not ________, the expansion project would have been completed on time.",
        options: ["arisen", "arose", "arise", "yielding"],
        correct: "arisen",
        explanations: {
            guide: "虚拟语气倒装与过去分词。Had... not ________ 是过去虚拟条件句倒装结构（Had + S + not + V-ed），需用 arise 的过去分词 arisen。",
            family: "arisen (v-pp出现/产生) | arose (v-ed过去式) | arise (v.原形) | yielding (v-ing)。",
            details: "Had... not arisen 相当于 If an unforeseen budget deficit had not arisen...。arose 是过去式，不能与 Had 构成过去完成时。",
            cn: "要是没有出现意想不到的预算赤字，扩建项目本可以按时完成。",
            jp: "予期せぬ予算赤字が生じて（arisen）いなければ、拡張プロジェクトは予定通りに完了していたでしょう。"
        }
    },
    {
        id: 14,
        target: "proficiency",
        category: "困难",
        stem: "The HR director seeks candidates who are highly ________ in enterprise software systems.",
        options: ["proficient", "proficiency", "linguistics", "profound"],
        correct: "proficient",
        explanations: {
            guide: "派生表语形容词考点。are highly ________ in... 结构中，系动词 are 后面接形容词作表语，表达“精通/熟练的”，选 proficient。",
            family: "proficient (adj.精通的/熟练的) | proficiency (n.熟练) | linguistics (n.语言学) | profound (adj.深刻的)。",
            details: "be proficient in sth 属于固定短语，意为精通某事。proficiency 是名词，不能在系动词后直接充当表语。",
            cn: "人力资源总监正在寻找精通企业软件系统的候选人。",
            jp: "人事部長は、基幹ソフトウェアシステムに非常に熟達した（proficient）候補者を求めています。"
        }
    },
    {
        id: 15,
        target: "profound",
        category: "困难",
        stem: "The policy reform ________ influenced consumer spending patterns across all major sectors.",
        options: ["profoundly", "profound", "profundity", "proficient"],
        correct: "profoundly",
        explanations: {
            guide: "派生副词修饰动词。________ influenced... 结构中，需要填写副词修饰及物动词 influenced，表达“深刻地/深远地影响”，选 profoundly。",
            family: "profoundly (adv.深刻地/深远地) | profound (adj.深刻的) | profundity (n.深刻) | proficient (adj.精通的)。",
            details: "profoundly influenced 意为深刻地影响了。profound 是形容词，不能直接修饰动词 influenced。",
            cn: "政策改革深刻地影响了所有主要领域的消费者支出模式。",
            jp: "政策改革は、すべての主要部門における消費者の支出パターンに深刻に（profoundly）影響を与えました。"
        }
    },
    {
        id: 16,
        target: "intranet",
        category: "困难",
        stem: "Network administrators established a secure internal ________ system to prevent unauthorized data access.",
        options: ["intranet", "internet", "landfill", "skyscraper"],
        correct: "intranet",
        explanations: {
            guide: "高阶 IT 概念辨析。secure internal ________ system 强调企业“内部”安全局域网络，选 intranet。",
            family: "intranet (n.内部网) | internet (n.互联网) | landfill (n.垃圾填埋场) | skyscraper (n.摩天大楼)。",
            details: "internal intranet system 指内部局域网系统。internet 特指全球公用互联网，与 internal（内部的）概念相悖。",
            cn: "网络管理员建立了安全的内部局域网系统，以防止未经授权的数据访问。",
            jp: "ネットワーク管理者たちは、不正なデータアクセスを防ぐために安全な社内イントラネット（intranet）システムを構築しました。"
        }
    },
    {
        id: 17,
        target: "yield",
        category: "困难",
        stem: "The investment fund manager recommended bonds with a guaranteed high ________ rate.",
        options: ["yield", "yielding", "arose", "quota"],
        correct: "yield",
        explanations: {
            guide: "高阶金融投资术语。high ________ rate 属于金融固定名词短语，意为“高收益率/高产出率”，选 yield。",
            family: "yield (n.收益/产出/v.产生) | yielding (adj.屈从的) | arose (v.产生) | quota (n.配额)。",
            details: "high yield rate 意为高收益率。yielding 是分词/形容词，不能与 rate 构成标准的“收益率”金融专属词组。",
            cn: "投资基金经理推荐了保证高收益率的债券。",
            jp: "投資信託マネージャーは、保証された高い利回り（yield）率を持つ債券を推奨しました。"
        }
    },
    {
        id: 18,
        target: "linguistics",
        category: "困难",
        stem: "Software developers collaborated with a ________ expert to refine the natural language processing algorithm.",
        options: ["linguistic", "linguistics", "proficient", "profound"],
        correct: "linguistic",
        explanations: {
            guide: "派生形容词作定语。修饰 expert（专家），表达“语言学/语言的”专家，选形容词 linguistic。",
            family: "linguistic (adj.语言的/语言学的) | linguistics (n.语言学) | proficient (adj.精通的) | profound (adj.深刻的)。",
            details: "linguistic expert 指语言学专家。linguistics 是名词（语言学），作前置定语修饰指人的名词时，规范用法选形容词 linguistic。",
            cn: "软件开发人员与一位语言学专家合作，以改进自然语言处理算法。",
            jp: "ソフトウェア開発者は、自然言語処理アルゴリズムを改善するために言語学（linguistic）の専門家と協力しました。"
        }
    }
];