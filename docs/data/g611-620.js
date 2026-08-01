// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag31-40.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "dairy",
        pos: "名/形",
        ipa: "/ˈderi/",
        cn: "乳制品；牛奶的，乳品业的",
        jp: "乳製品；乳製品の",
        family: "dairying / dairyman",
        tips: "食品加工与物流考点。常考 dairy products（乳制品）或 dairy industry（乳品业）。注意拼写，切勿与 diary（日记）混淆。",
        desc: "We buy fresh dairy products."
    },
    {
        word: "collaborate",
        pos: "動",
        ipa: "/kəˈlæbəreɪt/",
        cn: "合作，协作",
        jp: "協力する、共同研究する",
        family: "collaboration / collaborative / collaborator",
        tips: "职场与团队合作核心动词。常见搭配：collaborate with sb（与某人合作）、collaborate on a project（合作做项目）。派生名词 collaboration 和形容词 collaborative 极高频。",
        desc: "They collaborate on new projects."
    },
    {
        word: "stream",
        pos: "動/名",
        ipa: "/striːm/",
        cn: "流，溪流；在线收听/收看（流媒体）",
        jp: "流れる；流れ、ストリーム",
        family: "streaming / streamer",
        tips: "数字化与商业管理高频词。作动词常考 stream video/content（流媒体在线播放）；作名词常考 revenue stream（收入来源/资金流）。",
        desc: "Users can stream live videos."
    },
    {
        word: "consist",
        pos: "動",
        ipa: "/kənˈsɪst/",
        cn: "由……组成，存在于",
        jp: "（〜から）成る、構成される",
        family: "consistent / consistency / consistently",
        tips: "不及物动词！核心考点 consist of（由……组成，不可用于被动语态）。派生形容词 consistent（一致的）与副词 consistently（一贯地）在阅读与听力中极高频。",
        desc: "The team consists of experts."
    },
    {
        word: "assume",
        pos: "動",
        ipa: "/əˈsuːm/",
        cn: "假设，认为；承担（责任/职务）",
        jp: "仮定する、引き受ける",
        family: "assumption / assumed / assuming",
        tips: "双重核心动词。一指“假设/推断”（assume that...）；二指“承担/就任”（assume responsibility / assume the role of）。派生名词 assumption 意为“假设/前提”。",
        desc: "He will assume full responsibility."
    },
    {
        word: "profession",
        pos: "名",
        ipa: "/prəˈfeʃn/",
        cn: "职业，行业",
        jp: "職業、専門職",
        family: "professional / professionally / professionalism",
        tips: "HR与个人背景核心词。与 job/career 相比更强调需要专业技能的行业（如医疗、法律、会计）。派生词 professional（专业的）和 professionalism（专业精神）极高频。",
        desc: "She chose the legal profession."
    },
    {
        word: "crucial",
        pos: "形",
        ipa: "/ˈkruːʃl/",
        cn: "至关重要的，决定性的",
        jp: "非常に重要な、決定的な",
        family: "crucially / cruciality",
        tips: "商业决策高频形容词。常考搭配：crucial factor（关键因素）、play a crucial role in（在……中起决定性作用）。语义等同于 vital 或 essential。",
        desc: "Timing is a crucial factor."
    },
    {
        word: "entitle",
        pos: "動",
        ipa: "/ɪnˈtaɪtl/",
        cn: "赋予权力/资格；给……命名",
        jp: "権利を与える、題名を付ける",
        family: "entitlement / entitled",
        tips: "员工福利与合同规章高频动词。核心被动句型：be entitled to sth / be entitled to do sth（有资格享有/有权做某事）。",
        desc: "Members are entitled to discounts."
    },
    {
        word: "enlarge",
        pos: "動",
        ipa: "/ɪnˈlɑːrdʒ/",
        cn: "扩大，扩建，放大",
        jp: "拡大する、引き伸ばす",
        family: "enlargement / enlarged",
        tips: "厂房扩建与业务拓展动词。常考 enlarge the facility/office（扩建设施/办公室）、enlarge a photo/document（放大照片/图纸）。派生名词 enlargement 意为“扩建/放大”。",
        desc: "They plan to enlarge the room."
    },
    {
        word: "partnership",
        pos: "名",
        ipa: "/ˈpɑːrtnərʃɪp/",
        cn: "合伙关系，合作伙伴关系",
        jp: "パートナーシップ、提携",
        family: "partner / partnered",
        tips: "商业战略核心词。常见搭配：in partnership with（与……合作）、form a strategic partnership（建立战略合作伙伴关系）。",
        desc: "They formed a strong partnership."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "collaborate",
        category: "简单",
        stem: "The two marketing teams agreed to ________ on the new product promotional campaign.",
        options: ["collaborate", "collaboration", "crucial", "dairy"],
        correct: "collaborate",
        explanations: {
            guide: "不定式动词原形考点。agreed to 后面需要接动词原形构成不定式结构，表达“合作”开展活动，选 collaborate。",
            family: "collaborate (v.合作) | collaboration (n.合作) | crucial (adj.至关重要的) | dairy (n.乳制品)。",
            details: "agreed to collaborate 是商务协作场景的标准搭配。collaboration 是名词，不可紧跟在不定式符号 to 后面。",
            cn: "两个营销团队同意在新的产品推广活动中进行合作。",
            jp: "2つのマーケティングチームは、新しい製品プロモーションキャンペーンで協力する（collaborate）ことに同意しました。"
        }
    },
    {
        id: 2,
        target: "enlarge",
        category: "简单",
        stem: "Due to increasing demand, the factory owners decided to ________ their assembly facility.",
        options: ["enlarge", "enlargement", "profession", "stream"],
        correct: "enlarge",
        explanations: {
            guide: "不定式动词原形考点。decided to 后面需要接动词原形，结合宾语 assembly facility（组装设施），表达“扩建”，选 enlarge。",
            family: "enlarge (v.扩建/扩大) | enlargement (n.扩建) | profession (n.职业) | stream (v./n.流)。",
            details: "decided to enlarge 表示“决定扩建”。enlargement 是名词，不能直接接在不定式符号 to 后作动词。",
            cn: "由于需求增加，工厂所有者决定扩建他们的组装设施。",
            jp: "需要の増加に伴い、工場の所有者は組み立て施設を拡大する（enlarge）ことを決定しました。"
        }
    },
    {
        id: 3,
        target: "crucial",
        category: "简单",
        stem: "Effective communication is a ________ factor in the success of any international joint venture.",
        options: ["crucial", "crucially", "partnership", "entitle"],
        correct: "crucial",
        explanations: {
            guide: "形容词修饰名词考点。不定冠词 a 与名词 factor（因素）之间需要填入形容词作定语，表达“至关重要的”因素，选 crucial。",
            family: "crucial (adj.至关重要的) | crucially (adv.关键地) | partnership (n.合作关系) | entitle (v.赋予资格)。",
            details: "crucial factor 是商务写作与阅读极高频的形容词修饰名词搭配。crucially 是副词，不能修饰名词 factor。",
            cn: "有效的沟通是任何国际合资企业取得成功的至关重要的因素。",
            jp: "効果的なコミュニケーションは、国際的な合弁事業の成功における極めて重要な（crucial）要因です。"
        }
    },
    {
        id: 4,
        target: "dairy",
        category: "简单",
        stem: "All ________ products in the supermarket must be kept under proper refrigeration.",
        options: ["dairy", "consist", "assume", "collaboration"],
        correct: "dairy",
        explanations: {
            guide: "名词修饰名词考点。dairy 与 products 构成固定表达 dairy products（乳制品），选 dairy。",
            family: "dairy (n./adj.乳制品/乳品业的) | consist (v.由……组成) | assume (v.假设/承担) | collaboration (n.合作)。",
            details: "dairy products（乳制品）是托业物流与食品零售场景固定专属短语。注意切勿混淆为 diary（日记）。",
            cn: "超市里的所有乳制品都必须妥善冷藏。",
            jp: "スーパーマーケットのすべての乳製品（dairy）は、適切な冷蔵状態で保管されなければなりません。"
        }
    },
    {
        id: 5,
        target: "entitle",
        category: "简单",
        stem: "The premium membership card will ________ holders to free entry and exclusive discounts.",
        options: ["entitle", "entitlement", "enlarge", "profession"],
        correct: "entitle",
        explanations: {
            guide: "情态动词与动词辨析。will 后面需要接动词原形，entitle sb to sth 表达“给予某人……的资格/权利”，选 entitle。",
            family: "entitle (v.赋予资格/权利) | entitlement (n.资格/权益) | enlarge (v.扩大) | profession (n.职业)。",
            details: "entitle holders to... 是会员福利说明中的标准句型。entitlement 是名词，不能跟在情态动词 will 之后作谓语。",
            cn: "高级会员卡将给予持卡人免费入场和专属折扣的资格。",
            jp: "プレミアム会員カードは、所有者に無料入場と専属割引の権利を与える（entitle）ことになります。"
        }
    },
    {
        id: 6,
        target: "partnership",
        category: "简单",
        stem: "The technological company formed a new ________ with an overseas software provider.",
        options: ["partnership", "partner", "stream", "crucial"],
        correct: "partnership",
        explanations: {
            guide: "不定冠词与形容词后的名词考点。a new 后面需要接单数可数名词作 formed 的宾语，表达建立“合作伙伴关系”，选 partnership。",
            family: "partnership (n.合作伙伴关系) | partner (n.合作伙伴) | stream (n.流) | crucial (adj.至关重要的)。",
            details: "form a partnership with sb 是企业合作的高频短语。partner 指具体的“合伙人”，此场景下抽象的合作关系用 partnership 更自然合宜。",
            cn: "该科技公司与一家海外软件供应商建立了新的合作伙伴关系。",
            jp: "その技術会社は海外のソフトウェアプロバイダーと新しいパートナーシップ（partnership）を形成しました。"
        }
    },
    {
        id: 7,
        target: "consist",
        category: "中等",
        stem: "The selection committee ________ of five senior executives from different corporate departments.",
        options: ["consists", "consistency", "consistent", "consisting"],
        correct: "consists",
        explanations: {
            guide: "主谓一致与固定动词搭配。主语为 committee（单数），空格处填入动词作谓语，consist of 表达“由……组成”，用单数谓语 consists。",
            family: "consists (v.由……组成/单三) | consistency (n.一致性) | consistent (adj.一贯的) | consisting (v-ing)。",
            details: "consist of 是不及物动词短语，绝不能用于被动语态（错误示例：is consisted of）。consistency 是名词，不能作谓语。",
            cn: "挑选委员会由来自公司不同部门的五位高管组成。",
            jp: "選考委員会は、さまざまな社内部門からの5人の上級幹部で構成されて（consists）います。"
        }
    },
    {
        id: 8,
        target: "assume",
        category: "中等",
        stem: "Ms. Patel will ________ the duties of regional director starting on the first day of next month.",
        options: ["assume", "assumption", "collaborate", "profession"],
        correct: "assume",
        explanations: {
            guide: "助动词后的动词原形与商务语义。will 后面接动词原形，assume duties 表达“承担/就任职责”，选 assume。",
            family: "assume (v.承担/就任/假设) | assumption (n.假设) | collaborate (v.合作) | profession (n.职业)。",
            details: "assume responsibility/duties/role 表示“就任/承担职责”，属于人事任命的高频考点。assumption 是名词，无法跟在 will 后。",
            cn: "帕特尔女士将于下月第一天开始履行区域总监的职责。",
            jp: "パテル氏は来月の初日から地域ディレクターの職務を引き受ける（assume）予定です。"
        }
    },
    {
        id: 9,
        target: "profession",
        category: "中等",
        stem: "All staff members are expected to maintain a high level of ________ when interacting with client representatives.",
        options: ["professionalism", "profession", "professional", "professionally"],
        correct: "professionalism",
        explanations: {
            guide: "介词后的名词与词族辨析。a high level of 后面需要接抽象名词，表达保持高度的“专业精神/专业素养”，选 professionalism。",
            family: "professionalism (n.专业精神) | profession (n.职业) | professional (adj./n.专业的/专业人员) | professionally (adv.专业地)。",
            details: "maintain a high level of professionalism 是服务与职场行为准则的经典表述。profession 指具体的“职业”，不符合“保持某种素养”的语义。",
            cn: "所有员工在与客户代表沟通时，都被期望保持高度的专业素养。",
            jp: "すべてのスタッフは、クライアントの代表者と対応する際に高度なプロ意識（professionalism）を維持することが期待されています。"
        }
    },
    {
        id: 10,
        target: "stream",
        category: "中等",
        stem: "Subscription sales continue to generate a steady revenue ________ for the digital publishing company.",
        options: ["stream", "streaming", "enlarge", "consist"],
        correct: "stream",
        explanations: {
            guide: "商务固定复合名词。revenue 与 stream 构成固定搭配 revenue stream（收入来源/资金流），在句中作宾语，选 stream。",
            family: "stream (n.流/来源) | streaming (n./adj.流媒体) | enlarge (v.扩大) | consist (v.由……组成)。",
            details: "a steady revenue stream 意为“稳定的收入流/收入来源”，是财务报表与商业模式报告的高频短语。enlarge 和 consist 均为动词。",
            cn: "订阅销售继续为该数字出版公司带来稳定的收入来源。",
            jp: "サブスクリプションの売上は、デジタル出版会社に安定した収益の流れ（stream）をもたらし続けています。"
        }
    },
    {
        id: 11,
        target: "collaborate",
        category: "中等",
        stem: "The new research lab was built to encourage close ________ among different engineering divisions.",
        options: ["collaboration", "collaborate", "collaborative", "collaboratively"],
        correct: "collaboration",
        explanations: {
            guide: "形容词修饰名词考点。close 后面需要接名词作 encourage 的宾语，表达鼓励密切的“合作”，选 collaboration。",
            family: "collaboration (n.合作) | collaborate (v.合作) | collaborative (adj.合作的) | collaboratively (adv.合作地)。",
            details: "encourage close collaboration 属于跨部门合作场景的标准动名搭配。collaborative 为形容词，不能作动词的宾语。",
            cn: "新建的研究实验室旨在鼓励不同工程部门之间的紧密合作。",
            jp: "新しい研究ラボは、さまざまな工学部門間の緊密な協力（collaboration）を促進するために建設されました。"
        }
    },
    {
        id: 12,
        target: "entitle",
        category: "中等",
        stem: "According to company policy, full-time staff members are ________ to twenty days of paid leave per year.",
        options: ["entitled", "entitlement", "entitle", "crucial"],
        correct: "entitled",
        explanations: {
            guide: "固定短语搭配。be entitled to sth 为经典商务考点短语，意为“有资格/有权享有……”，选 entitled。",
            family: "entitled (adj./v-ed享有资格的) | entitlement (n.权益) | entitle (v.赋予资格) | crucial (adj.关键的)。",
            details: "be entitled to + N / to do sth 是托业阅读与员工手册中极高频的规则说明结构。entitlement 是名词，在此处导致语法结构断裂。",
            cn: "根据公司政策，全职员工每年有权享有 20 天的带薪假期。",
            jp: "会社の規程によると、正社員は年間20日の有給休暇を取得する権利があり（entitled）ます。"
        }
    },
    {
        id: 13,
        target: "consist",
        category: "困难",
        stem: "The IT department has ________ delivered reliable technical support throughout the entire software migration process.",
        options: ["consistently", "consistent", "consist", "consistency"],
        correct: "consistently",
        explanations: {
            guide: "派生副词修饰动词。位于助动词 has 与过去分词 delivered 之间，需要副词作状语，表达“一贯地/持续地”提供支持，选 consistently。",
            family: "consistently (adv.一贯地/持续地) | consistent (adj.一致的) | consist (v.由……组成) | consistency (n.一致性)。",
            details: "consistently delivered 意为“一贯提供/持续提供”。consistent 是形容词，不能放在助动词与过去分词中间修饰动词 delivered。",
            cn: "在整个软件迁移过程中，IT 部门一贯提供可靠的技术支持。",
            jp: "IT部門は、ソフトウェア移行プロセス全体を通じて一貫して（consistently）信頼性の高い技術サポートを提供しました。"
        }
    },
    {
        id: 14,
        target: "assume",
        category: "困难",
        stem: "The board based its budget decision on the ________ that market sales would grow by five percent next quarter.",
        options: ["assumption", "assume", "assumed", "crucial"],
        correct: "assumption",
        explanations: {
            guide: "介词与定冠词后的名词考点。on the 后面接名词作介词宾语，其后带有同位语从句 that...，表达依据“假设/前提”，选 assumption。",
            family: "assumption (n.假设/前提) | assume (v.假设) | assumed (adj.假定的) | crucial (adj.关键的)。",
            details: "on the assumption that... 意为“基于……的假设/前提”，属于托业 Part 5/7 高阶同位语从句连接结构。assume 是动词，不能直接放在定冠词 the 后面。",
            cn: "董事会基于下季度市场销售额将增长 5% 的假设做出了预算决定。",
            jp: "取締役会は、来四半期に市場の売上が5％増加するという前提（assumption）に基づいて予算の決定を行いました。"
        }
    },
    {
        id: 15,
        target: "crucial",
        category: "困难",
        stem: "The newly appointed manager played a ________ important role in resolving the conflict between the logistics partners.",
        options: ["crucially", "crucial", "collaborative", "enlarged"],
        correct: "crucially",
        explanations: {
            guide: "派生副词修饰形容词。位于不定冠词 a 与形容词 important 之间，需要副词作状语修饰 important，表达“关键地/极其”重要，选 crucially。",
            family: "crucially (adv.关键地/极其) | crucial (adj.至关重要的) | collaborative (adj.合作的) | enlarged (adj.扩建的)。",
            details: "crucially important 意为“至关重要”，其中副词 crucially 修饰形容词 important。若直接用 crucial，则变成两个形容词连用修饰 role，缺少副词修饰语层次。",
            cn: "新任命的经理在解决物流合作伙伴之间的冲突中发挥了至关重要的作用。",
            jp: "新しく任命されたマネージャーは、物流パートナー間の対立を解決する上で極めて（crucially）重要な役割を果たしました。"
        }
    },
    {
        id: 16,
        target: "enlarge",
        category: "困难",
        stem: "The proposed building ________ will expand the conference room and add ten new administrative offices.",
        options: ["enlargement", "enlarge", "partnership", "profession"],
        correct: "enlargement",
        explanations: {
            guide: "复合名词主语考点。building 与 enlargement 组合为 building enlargement（建筑扩建工程），在句中充当主语，选 enlargement。",
            family: "enlargement (n.扩建/工程) | enlarge (v.扩大) | partnership (n.合作关系) | profession (n.职业)。",
            details: "building enlargement 指建筑物的扩建工程。enlarge 是动词，不能直接放在形容词/名词 building 之后充当句子的主语。",
            cn: "提议的建筑扩建工程将扩大会议室并增加十个新的行政办公室。",
            jp: "提案されている建物の増改築（enlargement）により、会議室が拡張され、10の新しい行政オフィスが追加されます。"
        }
    },
    {
        id: 17,
        target: "profession",
        category: "困难",
        stem: "Mr. Davis was recognized for handling the delicate contract renegotiation extremely ________.",
        options: ["professionally", "professional", "profession", "professionalism"],
        correct: "professionally",
        explanations: {
            guide: "副词修饰动词短语。位于副词 extremely 之后，修饰动名词短语 handling the delicate contract renegotiation，表达处理得非常“专业地”，选 professionally。",
            family: "professionally (adv.专业地) | professional (adj.专业的) | profession (n.职业) | professionalism (n.专业精神)。",
            details: "handle sth professionally 是职场能力表彰的标配句式。professionalism 是名词，extremely 是副词，副词不能直接修饰名词。",
            cn: "戴维斯先生因极其专业地处理了微妙的合同重新谈判而获得表彰。",
            jp: "デイビス氏は、繊細な契約再交渉を非常にプロフェッショナルに（professionally）処理したことで評価されました。"
        }
    },
    {
        id: 18,
        target: "partnership",
        category: "困难",
        stem: "The firm entered into a ________ relationship with a local university to recruit graduate talent.",
        options: ["partnered", "partnership", "collaborate", "stream"],
        correct: "partnered",
        explanations: {
            guide: "分词作形容词修饰名词。a 与 relationship 之间需要形容词或分词作定语，partnered relationship 表达“合作/合伙关系”，选 partnered。",
            family: "partnered (adj.合作的/结成伙伴的) | partnership (n.合作关系) | collaborate (v.合作) | stream (v.流)。",
            details: "partnered relationship 指双方结成伙伴的合作关系。partnership 是名词，如果直接用 partnership relationship 会造成语义重复且不合语法规范。",
            cn: "该公司与当地一家大学建立了合作关系，以招募优秀毕业生。",
            jp: "その会社は、卒業生の優秀な人材を採用するために、地元の大学と提携（partnered）関係を結びました。"
        }
    }
];