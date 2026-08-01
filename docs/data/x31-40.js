// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag81-90 Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "file (a complaint)",
        pos: "動",
        ipa: "/faɪl ə kəmˈpleɪnt/",
        cn: "提交/提起（投诉，抱怨）",
        jp: "（苦情・不満を）申し立てる、提出する",
        family: "filed / filing",
        tips: "客户服务与法律合规高频搭配。file 在此作动词，意为“正式提交（文件/诉求）”。核心搭配：file a complaint with customer service（向客服提起投诉）、file a formal grievance（提交正式申诉）。",
        desc: "Customers may file a complaint."
    },
    {
        word: "compartment",
        pos: "名",
        ipa: "/kəmˈpɑːrtmənt/",
        cn: "隔间，分隔厢，行李箱/舱",
        jp: "（列車などの）個室、収納コンパートメント、区画",
        family: "compartments / compartmentalize",
        tips: "听力 Part 1（图片题）与交通物流高频词。常见搭配：overhead compartment（头顶行李架）、glove compartment（副驾驶储物箱）、storage compartment（储物隔间）。",
        desc: "Put the bag in the compartment."
    },
    {
        word: "assume (a role)",
        pos: "動",
        ipa: "/əˈsuːm ə roʊl/",
        cn: "承担/担任（角色，职务）",
        jp: "（役割・職務を）引き受ける、就任する",
        family: "assumed / assuming / assumption",
        tips: "人事任命与职场变动核心短语。assume 表示“承担（责任/角色）”或“假设”。同义短语：take on a role、assume responsibility（承担责任）。",
        desc: "She will assume a new role."
    },
    {
        word: "cutting-edge-technology",
        pos: "名/形",
        ipa: "/ˌkʌtɪŋ ˈedʒ tekˈnɑːlədʒi/",
        cn: "尖端技术，前沿科技",
        jp: "最先端技術",
        family: "cutting-edge / technology",
        tips: "科技产品介绍与企业宣传极高频复合词。cutting-edge 充当形容词修饰 technology，表示“最先进的/前沿的”。常用搭配：adopt cutting-edge technology（采用尖端技术）。",
        desc: "We use cutting-edge technology."
    },
    {
        word: "sales pitch",
        pos: "名",
        ipa: "/ˈseɪlz pɪtʃ/",
        cn: "推销话术，推销推介",
        jp: "セールストーク、売り込みの言葉",
        family: "sales / pitch",
        tips: "市场营销与商务演讲高频短语。指为了说服客户购买而进行的针对性演讲或推销口才。常见表达：deliver a persuasive sales pitch（进行有说服力的推销）。",
        desc: "He gave a convincing sales pitch."
    },
    {
        word: "territory",
        pos: "名",
        ipa: "/ˈterətɔːri/",
        cn: "领土，版图，销售负责区域",
        jp: "領土、販売担当地域、縄張り",
        family: "territories / territorial",
        tips: "销售管理与业务拓展高频词。在商务语境中常指“销售管理区域”。核心搭配：sales territory（销售区域）、expand into new territory（开拓新区域）。",
        desc: "This is our sales territory."
    },
    {
        word: "assumption",
        pos: "名",
        ipa: "/əˈsʌmpʃn/",
        cn: "假设，假定，承担",
        jp: "仮定、想定、引き受け",
        family: "assume / assumed",
        tips: "逻辑阅读与项目评估核心词。来自及物动词 assume。常用搭配：make an assumption（做出假设）、on the assumption that...（在……的假设下）。",
        desc: "The plan is based on a false assumption."
    },
    {
        word: "reinforcement",
        pos: "名",
        ipa: "/ˌriːɪnˈfɔːrsmənt/",
        cn: "加固，强化，增援",
        jp: "補強、強化、増援",
        family: "reinforce / reinforced",
        tips: "工程施工、结构安全及管理激励高频词。来自动词 reinforce（加固）。常见搭配：structural reinforcement（结构加固）、positive reinforcement（正向激励/强化）。",
        desc: "The wall needs reinforcement."
    },
    {
        word: "subsidies",
        pos: "名",
        ipa: "/ˈsʌbsədiːz/",
        cn: "补贴，补助金",
        jp: "補助金、助成金",
        family: "subsidy / subsidize",
        tips: "政府政策、财报及新能源扶持高频复数名词。单数形式为 subsidy。常见短语：government subsidies（政府补贴）、receive subsidies for...（收到对……的补贴）。",
        desc: "The government offers subsidies."
    },
    {
        word: "supposedly",
        pos: "副",
        ipa: "/səˈpoʊzədli/",
        cn: "据称，据推测，大概",
        jp: "推定では、建前上は、伝えられるところでは",
        family: "suppose / supposed",
        tips: "商务传闻、传言及新闻报道副词。用于修饰未完全证实的事实，相当于 reportedly 或 allegedly。常用于句首或修饰形容词/动词。",
        desc: "The new model is supposedly faster."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "file (a complaint)",
        category: "简单",
        stem: "If you receive a damaged package, you should ________ with the customer service desk immediately.",
        options: ["file a complaint", "assume a role", "sales pitch", "reinforcement"],
        correct: "file a complaint",
        explanations: {
            guide: "动宾短语辨析。根据空格后“与客服台”以及收到受损包裹的语境，此处需要填入表达“提起投诉”的短语 file a complaint。",
            family: "file a complaint (提交投诉) | assume a role (担任角色) | sales pitch (推销话术) | reinforcement (加固)。",
            details: "file a complaint with... 意为“向……提起投诉”，属于客户服务沟通中的极高频表达。",
            cn: "如果您收到损坏的包裹，应立即向客服台提起投诉。",
            jp: "破損した荷物を受け取った場合は、すぐにカスタマーサービスデスクに苦情を申し立てる（file a complaint）必要があります。"
        }
    },
    {
        id: 2,
        target: "compartment",
        category: "简单",
        stem: "Passengers are requested to store their carry-on luggage in the overhead ________ before takeoff.",
        options: ["compartment", "territory", "assumption", "subsidies"],
        correct: "compartment",
        explanations: {
            guide: "名词词义辨析与固定搭配。由形容词 overhead（头顶上的）修饰，结合登机后“存放随身行李”的语境，选 compartment（行李厢/隔间）。",
            family: "compartment (n.隔间/行李厢) | territory (n.区域) | assumption (n.假设) | subsidies (n.补贴)。",
            details: "overhead compartment（头顶行李架/行李舱）是托业听力 Part 1 和航空运输场景的标准词汇。",
            cn: "请乘客在起飞前将随身行李存放在头顶行李舱内。",
            jp: "ご乗客の皆様は、離陸前に機内持ち込み手荷物を頭上の収納棚（overhead compartment）に収納するようお願いいたします。"
        }
    },
    {
        id: 3,
        target: "sales pitch",
        category: "简单",
        stem: "The representative delivered a compelling ________ that persuaded the client to sign the agreement.",
        options: ["sales pitch", "file a complaint", "reinforcement", "compartment"],
        correct: "sales pitch",
        explanations: {
            guide: "名词短语辨析。由形容词 compelling（令人信服的）修饰，作 delivered 的宾语，结合“说服客户签署协议”，选 sales pitch（推销推介/话术）。",
            family: "sales pitch (n.推销话术) | file a complaint (v.提交投诉) | reinforcement (n.加固) | compartment (n.隔间)。",
            details: "deliver a sales pitch 表示“做推销演示/说推销话术”，属于商务谈判与销售场景的高频表达。",
            cn: "销售代表做了一场令人信服的推销演示，说服了客户签署协议。",
            jp: "担当者は説得力のあるセールストーク（sales pitch）を行い、クライアントに合意書への署名を納得させました。"
        }
    },
    {
        id: 4,
        target: "cutting-edge-technology",
        category: "简单",
        stem: "The new laboratory is equipped with ________ to speed up the drug development process.",
        options: ["cutting-edge-technology", "sales pitch", "territory", "subsidies"],
        correct: "cutting-edge-technology",
        explanations: {
            guide: "复合名词/名词短语辨析。介词 with 的宾语，结合后半句“加快药物研发流程”，实验室配备的应当是“前沿/尖端技术”，选 cutting-edge-technology。",
            family: "cutting-edge-technology (n.尖端技术) | sales pitch (n.推销话术) | territory (n.销售区域) | subsidies (n.补贴)。",
            details: "equipped with cutting-edge technology 意为“配备了尖端技术”，是高科技与研发场景中的固定句式。",
            cn: "新实验室配备了尖端技术，以加快药物研发流程。",
            jp: "新しい研究所には、創薬プロセスをスピードアップするための最先端技術（cutting-edge-technology）が備えられています。"
        }
    },
    {
        id: 5,
        target: "territory",
        category: "简单",
        stem: "As the new regional manager, Ms. Gomez will be responsible for expanding our sales ________ in Asia.",
        options: ["territory", "assumption", "compartment", "supposedly"],
        correct: "territory",
        explanations: {
            guide: "复合名词搭配。由名词 sales 修饰，结合“新区域经理”及“在亚洲拓展”的语境，选 territory（负责区域/版图）。",
            family: "territory (n.区域/版图) | assumption (n.假设) | compartment (n.隔间) | supposedly (adv.据称)。",
            details: "sales territory 专指销售代表或管理者所负责的“销售区域/业务版图”。",
            cn: "作为新任区域经理，戈麦斯女士将负责拓展我们在亚洲的销售区域。",
            jp: "新しい地域マネージャーとして、ゴメス氏はアジアにおける当社の販売担当地域（sales territory）の拡大を担当します。"
        }
    },
    {
        id: 6,
        target: "subsidies",
        category: "简单",
        stem: "Local manufacturers received state ________ to encourage the adoption of green energy solutions.",
        options: ["subsidies", "compartment", "sales pitch", "reinforcement"],
        correct: "subsidies",
        explanations: {
            guide: "名词词义辨析。作 received 的宾语，由 state（州的/政府的）修饰，结合后文“鼓励使用绿色能源”，选 subsidies（补贴/补助金）。",
            family: "subsidies (n.补贴/复数) | compartment (n.隔间) | sales pitch (n.推销话术) | reinforcement (n.加固)。",
            details: "receive subsidies 表示“获得补贴”。政府对环保或新兴产业的资金支持通常使用 subsidies。",
            cn: "当地制造商获得了州政府的补贴，以鼓励采用绿色能源解决方案。",
            jp: "地元の製造業者は、グリーンエネルギーソリューションの導入を促進するために州の補助金（subsidies）を受け取りました。"
        }
    },
    {
        id: 7,
        target: "assume (a role)",
        category: "中等",
        stem: "Mr. Lin will officially ________ as Chief Executive Officer starting at the beginning of next quarter.",
        options: ["assume a role", "file a complaint", "supposedly", "subsidies"],
        correct: "assume a role",
        explanations: {
            guide: "动词短语辨析。空格充当谓语动词，结合后文 CEO 这一高管职位及时间提示，表达正式“担任角色/就任职务”，选 assume a role。",
            family: "assume a role (v.担任角色) | file a complaint (v.提交投诉) | supposedly (adv.据称) | subsidies (n.补贴)。",
            details: "assume a role as... 表示“担任……的角色/职位”，常出现在高管任免与人事变动公告中。",
            cn: "林先生将于下季度初正式担任首席执行官一职。",
            jp: "林氏は、来四半期の初めから正式に最高経営責任者としての役割を引き受ける（assume a role）予定です。"
        }
    },
    {
        id: 8,
        target: "assumption",
        category: "中等",
        stem: "The forecast was based on the ________ that consumer spending would continue to grow steadily.",
        options: ["assumption", "territory", "compartment", "reinforcement"],
        correct: "assumption",
        explanations: {
            guide: "名词词义辨析与同位语从句结构。空格位于定冠词 the 之后，后跟 that 引导的同位语从句，表达“预测基于……的假设”，选 assumption。",
            family: "assumption (n.假设) | territory (n.区域) | compartment (n.隔间) | reinforcement (n.加固)。",
            details: "based on the assumption that...（基于……的假设）是商务财报与市场预测分析中的高频句型。",
            cn: "该预测是基于消费者支出将继续稳定增长的假设。",
            jp: "その予測は、消費者支出が堅調に伸び続けるという仮定（assumption）に基づいています。"
        }
    },
    {
        id: 9,
        target: "reinforcement",
        category: "中等",
        stem: "Structural engineers recommended additional wall ________ to prevent damage during earthquakes.",
        options: ["reinforcement", "sales pitch", "subsidies", "assumption"],
        correct: "reinforcement",
        explanations: {
            guide: "名词修饰与词义辨析。由形容词 additional（额外的）和名词 wall 修饰，结合结构工程师及“防震”语境，选 reinforcement（加固/强化）。",
            family: "reinforcement (n.加固) | sales pitch (n.推销话术) | subsidies (n.补贴) | assumption (n.假设)。",
            details: "wall reinforcement 指“墙体加固”。工程与设施翻修场景中常见此类术语。",
            cn: "结构工程师建议增加额外的墙体加固，以防止地震期间发生损坏。",
            jp: "構造技術者は、地震時の損傷を防ぐために追加の壁の補強（reinforcement）を推奨しました。"
        }
    },
    {
        id: 10,
        target: "supposedly",
        category: "中等",
        stem: "The newly launched software is ________ five times faster than its previous iteration.",
        options: ["supposedly", "territory", "compartment", "subsidies"],
        correct: "supposedly",
        explanations: {
            guide: "副词修饰形容词比较级。空格位于系动词 is 和比较级 five times faster 之间，修饰形容词，表达“据称/据推测”，选副词 supposedly。",
            family: "supposedly (adv.据称) | territory (n.区域) | compartment (n.隔间) | subsidies (n.补贴)。",
            details: "is supposedly faster 表示“据称更快（尚待实际使用验证）”，常用于新产品宣传与新闻报道。",
            cn: "这款新推出的软件据称比上一个版本快五倍。",
            jp: "新しく発売されたソフトウェアは、以前のバージョンよりも5倍速いと言われています（supposedly）。"
        }
    },
    {
        id: 11,
        target: "assume (a role)",
        category: "中等",
        stem: "Following the restructuring, the Operations Manager will ________ responsibility for logistics safety.",
        options: ["assume", "assumption", "assumed", "supposedly"],
        correct: "assume",
        explanations: {
            guide: "动词用法与搭配考点。空格位于情态动词 will 之后，需要填入动词原形。与后文 responsibility（责任）构成搭配 assume responsibility（承担责任），选 assume。",
            family: "assume (v.承担/假设) | assumption (n.假设) | assumed (adj./v.承担的) | supposedly (adv.据称)。",
            details: "will assume responsibility 意为“将承担责任”。assume 在此为派生同族核心动词。",
            cn: "结构调整后，运营经理将承担物流安全的责任。",
            jp: "再編に伴い、運行管理者が物流安全の責任を引き受ける（assume）ことになります。"
        }
    },
    {
        id: 12,
        target: "subsidies",
        category: "中等",
        stem: "The government decided to ________ clean energy technology startups to accelerate green growth.",
        options: ["subsidize", "subsidies", "subsidiary", "assumption"],
        correct: "subsidize",
        explanations: {
            guide: "动词派生与不定式结构。空格位于不定式符号 to 之后，需要填入动词原形，表达政府决定“资助/给……提供补贴”，选 subsidize。",
            family: "subsidize (v.给……资助) | subsidies (n.补贴/复数) | subsidiary (n.子公司) | assumption (n.假设)。",
            details: "decided to subsidize... 表达“决定资助……”。subsidize 是名词 subsidies 的同源及物动词。",
            cn: "政府决定资助清洁能源初创企业，以加快绿色增长。",
            jp: "政府はグリーン成長を加速させるため、クリーンエネルギー関連のスタートアップ企業に補助金を出す（subsidize）ことを決定しました。"
        }
    },
    {
        id: 13,
        target: "file (a complaint)",
        category: "困难",
        stem: "The client instructed her legal team to proceed with the ________ of a formal petition against the manufacturer.",
        options: ["filing", "filed", "file a complaint", "supposedly"],
        correct: "filing",
        explanations: {
            guide: "介词后接动名词/名词化考点。空格位于定冠词 the 之后、介词 of 之前，作 proceed with 的宾语，需要填入名词化形式 filing（提交/归档）。",
            family: "filing (n.提交/归档) | filed (v.已提交) | file a complaint (短语) | supposedly (adv.据称)。",
            details: "the filing of a formal petition 意为“提交正式请愿书/诉状”。filing 为 file 的动名词/名词形式，适合与 of 连用。",
            cn: "客户指示其法律团队继续向制造商提交正式请愿书。",
            jp: "クライアントは法律チームに対し、メーカーに対する正式な請願書の提出（filing）を進めるよう指示しました。"
        }
    },
    {
        id: 14,
        target: "reinforcement",
        category: "困难",
        stem: "Management decided to ________ the existing security team by hiring ten additional guards.",
        options: ["reinforce", "reinforcement", "reinforced", "assumption"],
        correct: "reinforce",
        explanations: {
            guide: "动词派生与不定式考点。空格位于不定式符号 to 之后，需要填入动词原形，表达“加强/增援”安保团队，选 reinforce。",
            family: "reinforce (v.加强/加固) | reinforcement (n.加固/增援) | reinforced (adj.加固的) | assumption (n.假设)。",
            details: "reinforce the security team 意为“加强安保团队”。reinforcement 为其名词形式，无法直接放在 to 后作动词原形。",
            cn: "管理层决定通过聘请十名额外保安来加强现有的安保团队。",
            jp: "経営陣は、警備員を10名追加採用することで、既存の警備チームを強化する（reinforce）ことを決定しました。"
        }
    },
    {
        id: 15,
        target: "assumption",
        category: "困难",
        stem: "The consultant warned against making unverified ________ regarding customer demographics without research.",
        options: ["assumptions", "assume", "assumed", "territory"],
        correct: "assumptions",
        explanations: {
            guide: "动宾搭配与名词复数考点。作短语 making 的宾语，由形容词 unverified（未经证实）修饰，表达做出未证实“假设”，选复数名词 assumptions。",
            family: "assumptions (n.假设/复数) | assume (v.假设) | assumed (adj.假定的) | territory (n.区域)。",
            details: "make assumptions 意为“做出假设”。此处复数形式与前文 unverified 匹配，指代多项未经证实的推测。",
            cn: "顾问警告称，在没有调研的情况下，不要对客户人口统计数据做出未经证实的假设。",
            jp: "コンサルタントは、調査なしに顧客の人口統計に関する検証されていない想定（assumptions）を行うことに注意を促しました。"
        }
    },
    {
        id: 16,
        target: "territory",
        category: "困难",
        stem: "The non-disclosure agreement remains strictly ________ to the region specified in Clause 4.",
        options: ["territorial", "territory", "subsidies", "compartment"],
        correct: "territorial",
        explanations: {
            guide: "形容词派生与表语考点。空格位于系动词 remains 和副词 strictly 之后，充当表语修饰主语 agreement，选派生形容词 territorial（领土的/区域的/属地的）。",
            family: "territorial (adj.区域的/领土的) | territory (n.区域) | subsidies (n.补贴) | compartment (n.隔间)。",
            details: "remains strictly territorial 表示“在地域上受到严格限制/仅限特定区域”。territory 为名词，不能在此作描述状态的表语。",
            cn: "保密协议严格局限于第4条指定的区域范围。",
            jp: "秘密保持契約は、第4条で指定された地域に厳格に限定（territorial）されます。"
        }
    },
    {
        id: 17,
        target: "supposedly",
        category: "困难",
        stem: "Although the device was ________ tested before release, multiple technical glitches were reported.",
        options: ["supposedly", "assumption", "reinforcement", "sales pitch"],
        correct: "supposedly",
        explanations: {
            guide: "副词修饰过去分词考点。空格位于助动词 was 和过去分词 tested 之间，修饰被动语态谓语，结合转折句意“尽管据称在发布前测试过，但收到了多个故障报告”，选 supposedly。",
            family: "supposedly (adv.据称/按说) | assumption (n.假设) | reinforcement (n.加固) | sales pitch (n.推销话术)。",
            details: "was supposedly tested 表示“据称经过了测试（但实际效果存疑）”，极其符合转折从句中的传闻逻辑。",
            cn: "尽管据称该设备在发布前进行了测试，但还是报告了多个技术故障。",
            jp: "その装置は発売前にテストされたと言われていましたが（supposedly）、複数の技術的トラブルが報告されました。"
        }
    },
    {
        id: 18,
        target: "compartment",
        category: "困难",
        stem: "The design agency decided to ________ the workspace to allow separate teams to focus without noise.",
        options: ["compartmentalize", "compartment", "cutting-edge-technology", "subsidies"],
        correct: "compartmentalize",
        explanations: {
            guide: "动词派生与不定式结构。空格跟在不定式符号 to 之后，需要填入动词原形。表达将工作空间“隔断/划分成不同独立区域”，选派生动词 compartmentalize。",
            family: "compartmentalize (v.隔开/划分) | compartment (n.隔间) | cutting-edge-technology (n.尖端技术) | subsidies (n.补贴)。",
            details: "compartmentalize the workspace 意为“将办公空间分隔成独立小区域”。compartment 是名词，不能在此作动词。",
            cn: "设计公司决定将工作空间分隔成不同独立区域，以便不同的团队专注工作不受噪音干扰。",
            jp: "デザイン会社は、別々のチームが騒音なく集中できるように、ワークスペースを区划する（compartmentalize）ことにしました。"
        }
    }
];