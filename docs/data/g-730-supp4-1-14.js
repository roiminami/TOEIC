// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (Grammar Special: Prep vs Conj)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "during",
        pos: "介",
        ipa: "/ˈdʊrɪŋ/",
        cn: "在……期间",
        jp: "〜の間に",
        family: "duration",
        tips: "介词，后接名词/名词短语（如 during the meeting/summer），不能接句子或动名词。常与从属连词 while 进行对比辨析。",
        desc: "He left during the meeting."
    },
    {
        word: "while",
        pos: "接",
        ipa: "/waɪl/",
        cn: "当……的时候，在……期间；然而",
        jp: "〜する間に、〜である一方で",
        family: "whilst",
        tips: "从属连词，后接完整句子（主语+谓语）或分词短语（while working）。表示时间同时发生或前后对比。",
        desc: "She called while I was away."
    },
    {
        word: "because of",
        pos: "介",
        ipa: "/bɪˈkɔːz əv/",
        cn: "因为，由于",
        jp: "〜のために、〜的原因で",
        family: "because",
        tips: "介词短语，后接名词、代词或动名词（-ing），不能直接加从句。与从属连词 because 构成核心语法区分点。",
        desc: "We stayed home because of rain."
    },
    {
        word: "due to",
        pos: "介",
        ipa: "/duː tuː/",
        cn: "由于，因为",
        jp: "〜に起因して、〜のために",
        family: "due",
        tips: "介词短语，后接名词短语。托业中常见短语 due to unforeseen circumstances（由于不可预见的情况）。也可作表语（be due to）。",
        desc: "The delay was due to traffic."
    },
    {
        word: "owing to",
        pos: "介",
        ipa: "/ˈoʊɪŋ tuː/",
        cn: "由于，因为",
        jp: "〜のおかげで、〜のために",
        family: "owe / owing",
        tips: "正式介词短语，等同于 because of / due to，后接名词或名词短语。常置于句首或句中作状语。",
        desc: "Owing to bad weather, we stopped."
    },
    {
        word: "because",
        pos: "接",
        ipa: "/bɪˈkɔːz/",
        cn: "因为，由于",
        jp: "〜だから、〜なので",
        family: "because of",
        tips: "从属连词，引导原因状语从句，后面必须接完整的句子（主语+谓语）。与介词短语 because of / due to 互为考点。",
        desc: "He stayed home because he was sick."
    },
    {
        word: "since",
        pos: "接/介",
        ipa: "/sɪns/",
        cn: "因为，既然；自……以来",
        jp: "〜だから、〜以来",
        family: "since",
        tips: "从属连词。作原因连词时意为“既然/因为”（等同于 as/because）；作时间介词/连词时主句常与现在完成时（have done）连用。",
        desc: "Since it is raining, we stayed inside."
    },
    {
        word: "as",
        pos: "接/介",
        ipa: "/æz/",
        cn: "因为，由于；当……时；作为",
        jp: "〜なので、〜のとき、〜として",
        family: "as",
        tips: "多义连词/介词。在托业 Part 5 中作原因连词等同于 because/since（后接从句）；作介词时意为“作为”（如 as a manager）。",
        desc: "As prices rose, sales dropped."
    },
    {
        word: "despite",
        pos: "介",
        ipa: "/dɪˈspaɪt/",
        cn: "尽管，虽然",
        jp: "〜にもかかわらず",
        family: "spite",
        tips: "介词，后接名词、代词或动名词，绝对不能加 of（despite of 是错词！）。与从属连词 although/even though 构成让步考点。",
        desc: "We went out despite the rain."
    },
    {
        word: "in spite of",
        pos: "介",
        ipa: "/ɪn spaɪt əv/",
        cn: "尽管，虽然",
        jp: "〜にもかかわらず",
        family: "spite",
        tips: "三词介词短语，含义及用法完全等同于 despite，后接名词/代词/动名词，不能直接接完整句子。",
        desc: "In spite of the rain, we went."
    },
    {
        word: "notwithstanding",
        pos: "介/副",
        ipa: "/ˌnɑːtwɪθˈstændɪŋ/",
        cn: "尽管，虽然；尽管如此",
        jp: "〜にもかかわらず",
        family: "notwithstanding",
        tips: "高阶正式介词，等同于 despite / in spite of，后接名词短语。作副词时常放在句末，意为“尽管如此”。",
        desc: "Notwithstanding the weather, we met."
    },
    {
        word: "although",
        pos: "接",
        ipa: "/ɔːlˈðoʊ/",
        cn: "虽然，尽管",
        jp: "〜けれども、〜にもかかわらず",
        family: "though",
        tips: "从属连词，引导让步状语从句，后面必须跟着完整的句子（主+谓）。与介词 despite / in spite of 构成核心对比。",
        desc: "Although it rained, we enjoyed it."
    },
    {
        word: "though",
        pos: "接/副",
        ipa: "/ðoʊ/",
        cn: "虽然，尽管；然而",
        jp: "〜けれども；（文末で）だけど",
        family: "although",
        tips: "从属连词，引导让步状语从句（可与 although 互换）。作副词时常放在句末，表示“不过/然而”。",
        desc: "Though it was cold, he went out."
    },
    {
        word: "even though",
        pos: "接",
        ipa: "/ˈiːvn ðoʊ/",
        cn: "即使，虽然，尽管",
        jp: "たとえ〜だとしても、〜にもかかわらず",
        family: "even / though",
        tips: "强语气从属连词，引导让步状语从句，语气比 although/though 更强，表示客观既成事实的让步。",
        desc: "Even though he failed, he tried again."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "during",
        category: "简单",
        stem: "All mobile devices must be switched to silent mode ________ the conference presentation.",
        options: ["during", "while", "because", "although"],
        correct: "during",
        explanations: {
            guide: "介词与连词辨析。空格后为名词短语 the conference presentation（会议演讲），需要填入介词表示“在……期间”，选择 during。",
            family: "during (prep.在……期间) | while (conj.当……时) | because (conj.因为) | although (conj.虽然)。",
            details: "during 是介词，后面接名词或名词短语；while 是连词，后面必须接包含主谓结构的完整句子。",
            cn: "在会议演讲期间，所有移动设备必须切换至静音模式。",
            jp: "会議のプレゼンテーション中（during）は、すべての携帯端末をマナーモードに設定する必要があります。"
        }
    },
    {
        id: 2,
        target: "because of",
        category: "简单",
        stem: "The outdoor concert was moved indoors ________ the sudden heavy rainfall.",
        options: ["because of", "because", "although", "while"],
        correct: "because of",
        explanations: {
            guide: "原因介词与连词辨析。空格后接名词短语 the sudden heavy rainfall（突发的大雨），缺少介词短语引导原因，选 because of。",
            family: "because of (prep.因为) | because (conj.因为) | although (conj.虽然) | while (conj.当……时)。",
            details: "because of 后面接名词短语；because 是从属连词，后面接主谓完整的从句。",
            cn: "由于突降大雨，户外音乐会改在室内举行。",
            jp: "突然の激しい雨のため（because of）、野外コンサートは屋内に変更されました。"
        }
    },
    {
        id: 3,
        target: "although",
        category: "简单",
        stem: "________ the initial budget was limited, the design team managed to deliver an outstanding prototype.",
        options: ["Although", "Despite", "In spite of", "During"],
        correct: "Although",
        explanations: {
            guide: "让步连词与介词辨析。空格后引导一个完整的从句 the initial budget (主语) + was (谓语) + limited (表语)，需要填入从属连词 Although。",
            family: "Although (conj.虽然) | Despite (prep.尽管) | In spite of (prep.尽管) | During (prep.在……期间)。",
            details: "Although 是从属连词，后接句子；Despite 和 In spite of 是介词，后接名词或代词。",
            cn: "虽然最初的预算有限，但设计团队还是成功交付了杰出的原型机。",
            jp: "当初の予算は限られていましたが（Although）、デザインチームは素晴らしい試作品を納品することができました。"
        }
    },
    {
        id: 4,
        target: "while",
        category: "简单",
        stem: "Please review the contract terms carefully ________ you are waiting in the reception lounge.",
        options: ["while", "during", "despite", "owing to"],
        correct: "while",
        explanations: {
            guide: "时间连词与介词辨析。空格后跟完整的状语从句 you are waiting...，需要填入从属连词 while（当……的时候）。",
            family: "while (conj.当……时) | during (prep.在……期间) | despite (prep.尽管) | owing to (prep.由于)。",
            details: "while 是连词，引导时间状语从句；during 是介词，不能直接跟完整主谓句子。",
            cn: "当您在接待大厅等待时，请仔细核对合同条款。",
            jp: "受付ラウンジでお待ちいただいている間（while）、契約条件をよくご確認ください。"
        }
    },
    {
        id: 5,
        target: "due to",
        category: "简单",
        stem: "The flight delay was ________ severe fog at the international airport.",
        options: ["due to", "because", "since", "even though"],
        correct: "due to",
        explanations: {
            guide: "原因介词短语与连词辨析。空格在系动词 was 之后，后接名词短语 severe fog（浓雾），构成 be due to... 结构表示“归因于/由于”，选 due to。",
            family: "due to (prep.由于) | because (conj.因为) | since (conj.因为) | even though (conj.即使)。",
            details: "be due to sth 意为“由于某事”，due to 为介词短语，后接名词；because, since, even though 均为连词，后接句子。",
            cn: "航班延误是由于国际机场的大雾天气。",
            jp: "フライトの遅延は、国際空港での濃霧によるものでした（due to）。"
        }
    },
    {
        id: 6,
        target: "despite",
        category: "简单",
        stem: "The product achieved record sales ________ the fierce competition in the tech industry.",
        options: ["despite", "although", "even though", "because"],
        correct: "despite",
        explanations: {
            guide: "让步介词与连词辨析。空格后为名词短语 the fierce competition（激烈的竞争），选介词 despite（尽管）。注意 despite 后绝不接 of。",
            family: "despite (prep.尽管) | although (conj.虽然) | even though (conj.即使) | because (conj.因为)。",
            details: "despite 为介词，后接名词短语；although 和 even though 为连词，后接完整句子。",
            cn: "尽管科技行业竞争激烈，该产品还是创下了销售纪录。",
            jp: "IT業界の激しい競争にもかかわらず（despite）、その製品は過去最高の売上を達成しました。"
        }
    },
    {
        id: 7,
        target: "since",
        category: "中等",
        stem: "________ the main factory is undergoing scheduled maintenance, production will be temporarily shifted to the secondary site.",
        options: ["Since", "Because of", "Due to", "In spite of"],
        correct: "Since",
        explanations: {
            guide: "原因从属连词辨析。空格后跟完整的原因状语从句 the main factory is undergoing scheduled maintenance，选原因连词 Since（既然/因为）。",
            family: "Since (conj.因为/既然) | Because of (prep.由于) | Due to (prep.由于) | In spite of (prep.尽管)。",
            details: "Since 作原因连词时表示“既然/由于”，后接从句。Because of 和 Due to 均为介词，不能接主谓从句。",
            cn: "鉴于主工厂正在进行例行维护，生产将临时转移至辅厂。",
            jp: "メイン工場が定期保守点検中のため（Since）、生産は一時的にサブ工場へ移管されます。"
        }
    },
    {
        id: 8,
        target: "in spite of",
        category: "中等",
        stem: "The firm continued to invest in research and development ________ facing significant quarterly financial losses.",
        options: ["in spite of", "even though", "although", "while"],
        correct: "in spite of",
        explanations: {
            guide: "让步介词短语与连词辨析。空格后跟动名词短语 facing significant quarterly financial losses，缺少介词短语，选 in spite of。",
            family: "in spite of (prep.尽管) | even though (conj.即使) | although (conj.虽然) | while (conj.当……时)。",
            details: "in spite of 属于三词介词短语，可接动名词（-ing）或名词短语；even though 和 although 为连词，接完整句子。",
            cn: "尽管面临巨额季度财务亏损，该公司仍继续投资于研发。",
            jp: "大幅な四半期赤字に直面しているにもかかわらず（in spite of）、同社は研究開発への投資を続けました。"
        }
    },
    {
        id: 9,
        target: "even though",
        category: "中等",
        stem: "The board approved the new marketing budget ________ several executive members expressed reservations during the meeting.",
        options: ["even though", "despite", "notwithstanding", "due to"],
        correct: "even though",
        explanations: {
            guide: "强语气让步连词辨析。空格后为完整主谓从句 several executive members expressed reservations，选从属连词 even though。",
            family: "even though (conj.即使/尽管) | despite (prep.尽管) | notwithstanding (prep.尽管) | due to (prep.由于)。",
            details: "even though 引导让步状语从句，表达既成事实的让步；despite 和 notwithstanding 为介词，不能直接接从句。",
            cn: "尽管几位高管在会议期间表达了保留意见，董事会还是批准了新的营销预算。",
            jp: "会議中に数名の役員が懸念を示したにもかかわらず（even though）、取締役会は新しいマーケティング予算を承認しました。"
        }
    },
    {
        id: 10,
        target: "owing to",
        category: "中等",
        stem: "________ unforeseen supply chain disruptions, the delivery of raw materials will be delayed by two weeks.",
        options: ["Owing to", "Because", "Since", "As"],
        correct: "Owing to",
        explanations: {
            guide: "介词短语与连词辨析。空格后紧跟名词短语 unforeseen supply chain disruptions，缺少引导原因的介词，选 Carrying formal 介词短语 Owing to。",
            family: "Owing to (prep.由于) | Because (conj.因为) | Since (conj.因为) | As (conj.因为)。",
            details: "Owing to 意为“由于”，是正式介词短语，后接名词短语；Because, Since, As 均为从属连词，后接句子。",
            cn: "由于不可预见的供应链中断，原材料的交付将延迟两周。",
            jp: "予期せぬサプライチェーンの混乱のため（Owing to）、原材料の配送は2週間遅れます。"
        }
    },
    {
        id: 11,
        target: "as",
        category: "中等",
        stem: "________ the cost of raw materials continues to rise, the manufacturer was forced to adjust its wholesale prices.",
        options: ["As", "Because of", "Due to", "Despite"],
        correct: "As",
        explanations: {
            guide: "原因连词辨析。空格后为完整句子 the cost of raw materials (主) + continues (谓) + to rise，选连词 As（由于/因为）。",
            family: "As (conj.由于/因为) | Because of (prep.因为) | Due to (prep.由于) | Despite (prep.尽管)。",
            details: "As 在此作从属连词，引导原因状语从句，相当于 because 或 since；其余选项均为介词，无法连接句子。",
            cn: "由于原材料成本持续上涨，制造商被迫调整了批发价格。",
            jp: "原材料コストが上昇し続けているため（As）、メーカーは卸売価格の調整を余儀なくされました。"
        }
    },
    {
        id: 12,
        target: "notwithstanding",
        category: "中等",
        stem: "The merger agreement was finalized on schedule, ________ several regulatory hurdles raised by the competition authority.",
        options: ["notwithstanding", "although", "though", "even though"],
        correct: "notwithstanding",
        explanations: {
            guide: "高阶让步介词辨析。空格后跟名词短语 several regulatory hurdles...，需要填入介词，选高阶介词 notwithstanding（尽管）。",
            family: "notwithstanding (prep.尽管) | although (conj.虽然) | though (conj.虽然) | even though (conj.即使)。",
            details: "notwithstanding 是高级商务法律英语中常考的让步介词，等同于 despite；although, though, even though 均为连词。",
            cn: "尽管面临竞争监管机构提出的若干监管障碍，合并协议仍按期敲定。",
            jp: "公正取引委員会によるいくつかの規制上のハードルにもかかわらず（notwithstanding）、合併協定は予定通り妥結しました。"
        }
    },
    {
        id: 13,
        target: "while",
        category: "困难",
        stem: "________ expanding into international markets, the company remains dedicated to serving its core domestic customer base.",
        options: ["While", "During", "Because of", "Due to"],
        correct: "While",
        explanations: {
            guide: "连词+分词省略结构（Participle Reduction）。空格后接现在分词短语 expanding into...，省略了主语和 be 动词（While [it is] expanding...），选从属连词 While。",
            family: "While (conj.当……时/在……的同时) | During (prep.在……期间) | Because of (prep.由于) | Due to (prep.由于)。",
            details: "While 后可跟分词短语构成省略句（While doing sth）；介词 During 后面绝对不能直接接带有宾语的现在分词短语。",
            cn: "在向国际市场扩张的同时，该公司仍致力于服务其核心国内客户群。",
            jp: "海外市場へ拡大する一方で（While）、同社は引き続きコアとなる国内顧客層へのサービスに全力を尽くしています。"
        }
    },
    {
        id: 14,
        target: "since",
        category: "困难",
        stem: "Mr. Harrison has served as Chief Financial Officer ________ the company completed its initial public offering in 2018.",
        options: ["since", "because of", "during", "although"],
        correct: "since",
        explanations: {
            guide: "时间连词与现在完成时呼应。主句谓语为现在完成时 has served，从句为一般过去时 completed in 2018，选引导时间状语从句的连词 since（自……以来）。",
            family: "since (conj./prep.自……以来) | because of (prep.由于) | during (prep.在……期间) | although (conj.虽然)。",
            details: "since 引导时间状语从句时，主句通常使用现在完成时（have/has done），从句使用一般过去时，表示动作自过去延续至今。",
            cn: "自该公司于2018年完成首次公开募股以来，哈里森先生一直担任首席财务官。",
            jp: "同社が2018年に新規株式公開（IPO）を完了して以来（since）、ハリソン氏は最高財務責任者を務めています。"
        }
    },
    {
        id: 15,
        target: "despite",
        category: "困难",
        stem: "The engineering team completed the prototype ahead of schedule, ________ the lack of specialized equipment.",
        options: ["despite", "despite of", "although that", "because that"],
        correct: "despite",
        explanations: {
            guide: "介词错误结构排除与正确用法。空格后接名词短语 the lack of specialized equipment，选正确介词 despite。特别注意 despite of 是彻底错误的假词。",
            family: "despite (prep.尽管) | despite of (错误拼写) | although that (错误结构) | because that (错误结构)。",
            details: "despite 本身就是介词，绝不能加 of（in spite of 才带 of）。although that 和 because that 在英语中均属于语法错误连词结构。",
            cn: "尽管缺少专业设备，工程团队还是提前完成了原型机的制作。",
            jp: "専門設備の不足にもかかわらず（despite）、エンジニアリングチームは予定より早く試作品を完成させました。"
        }
    },
    {
        id: 16,
        target: "though",
        category: "困难",
        stem: "________ small, the newly established research branch has produced several groundbreaking patents.",
        options: ["Though", "Despite", "In spite of", "Because of"],
        correct: "Though",
        explanations: {
            guide: "连词+形容词省略结构。空格后直接跟形容词 small，这是状语从句的主语+系动词省略现象（Though [it is] small），选连词 Though。",
            family: "Though (conj.虽然) | Despite (prep.尽管) | In spite of (prep.尽管) | Because of (prep.因为)。",
            details: "Though 可以引导省略句（Though + adj.），表示“虽然……”。介词 Despite / In spite of 后面必须接名词或动名词，不能直接修饰形容词 small。",
            cn: "虽然规模较小，但新成立的研究分机构已经产出了几项突破性的专利。",
            jp: "小规模ながらも（Though）、新設された研究支所はいくつかの画期的な特許を生み出しました。"
        }
    },
    {
        id: 17,
        target: "because",
        category: "困难",
        stem: "The conference was canceled not because of budget constraints, but ________ the keynote speaker was unable to attend.",
        options: ["because", "because of", "due to", "owing to"],
        correct: "because",
        explanations: {
            guide: "平行结构与连词/介词精确匹配。句式为 not because of [名词短语], but ________ [主谓从句]。but 之后是完整从句 the keynote speaker was unable to attend，必须填入从属连词 because。",
            family: "because (conj.因为) | because of (prep.因为) | due to (prep.由于) | owing to (prep.由于)。",
            details: "not... but... 平行结构中，需根据各自后接的语法成分选择介词或连词。but 后面跟句子，因而必须选连词 because。",
            cn: "会议被取消不是因为预算限制，而是因为主讲嘉宾无法出席。",
            jp: "会議が中止されたのは予算の制約のためではなく、基調講演者が出席できなくなったためです（because）。"
        }
    },
    {
        id: 18,
        target: "due to",
        category: "困难",
        stem: "The sudden sharp decline in third-quarter revenue was primarily ________ increased competition and rising shipping costs.",
        options: ["due to", "because", "since", "although"],
        correct: "due to",
        explanations: {
            guide: "表语介词短语用法。位于系动词 was 和副词 primarily 之后，做句子的表语，后接名词短语，构成 ... was primarily due to [名词短语]，选 due to。",
            family: "due to (prep.由于/归因于) | because (conj.因为) | since (conj.因为) | although (conj.虽然)。",
            details: "be due to sth 是标准的系表结构，意为“（主语）主要是由于/归因于……”。从属连词 because/since 不能直接接在系动词 was 后面做表语。",
            cn: "第三季度收入的突然大幅下降，主要是由于竞争加剧和运输成本上升所致。",
            jp: "第3四半期の売上高の急激な減少は、主に競争の激化と配送コストの上昇によるものでした（due to）。"
        }
    }
];