// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (Grammar Special: Subordinate Conjunctions)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "when",
        pos: "接/副",
        ipa: "/wen/",
        cn: "当……时",
        jp: "〜のとき",
        family: "whenever",
        tips: "从属连词，引导时间状语从句。注意：主句用一般将来时（will do）时，when 引导的从句需用一般现在时（do/does）代替将来时（主将从现）。",
        desc: "Call me when you arrive."
    },
    {
        word: "while",
        pos: "接",
        ipa: "/waɪl/",
        cn: "当……的时候，在……期间；然而",
        jp: "〜する間に、〜である一方で",
        family: "whilst",
        tips: "从属连词，引导时间或对比从句。可跟分词短语构成省略句（while doing sth）。作对比时意为“然而”（等同于 whereas）。",
        desc: "He listened while working."
    },
    {
        word: "if",
        pos: "接",
        ipa: "/ɪf/",
        cn: "如果，假使；是否",
        jp: "もし〜なら、〜かどうか",
        family: "if",
        tips: "条件从属连词，引导条件状语从句（遵循“主将从现”）。也可引导宾语从句表示“是否”（等同于 whether）。",
        desc: "Tell me if you need help."
    },
    {
        word: "as",
        pos: "接/介",
        ipa: "/æz/",
        cn: "当……时；因为；正如；作为",
        jp: "〜のとき、〜なので、〜として",
        family: "as",
        tips: "超级高频连词/介词。作连词引导时间从句（当……时）、原因从句（因为，等同于 because）或方式从句（正如）；作介词接名词表示“作为”。",
        desc: "As time passed, we grew."
    },
    {
        word: "unless",
        pos: "接",
        ipa: "/ənˈles/",
        cn: "除非，如果不",
        jp: "〜でない限り、〜でなければ",
        family: "unless",
        tips: "否定条件从属连词，相当于 if... not。后接肯定的完整从句，主句常为否定句或包含否定含义。注意：unless 引导的从句不能使用将来时。",
        desc: "Stay home unless you are needed."
    },
    {
        word: "because",
        pos: "接",
        ipa: "/bɪˈkɔːz/",
        cn: "因为，由于",
        jp: "〜だから、〜なので",
        family: "because of",
        tips: "原因从属连词，引导原因状语从句，后接完整句子（主谓）。注意与介词短语 because of（后接名词短语）的词性对比考点。",
        desc: "We stayed inside because it rained."
    },
    {
        word: "as soon as",
        pos: "接",
        ipa: "/æz suːn æz/",
        cn: "一……就……",
        jp: "〜するとすぐに",
        family: "soon",
        tips: "复合时间从属连词，引导时间状语从句，强调动作紧接着发生。同 when 一样遵循“主将从现”原则（主句用将来时，从句用现在时）。",
        desc: "I will call as soon as I arrive."
    },
    {
        word: "once",
        pos: "接/副",
        ipa: "/wʌns/",
        cn: "一旦；曾经",
        jp: "一旦〜すると；かつて",
        family: "once",
        tips: "兼类词。作连词意为“一旦”（引导时间/条件从句，后接完整句子或过去分词，如 once approved）；作副词意为“曾经”或“一次”。",
        desc: "Once confirmed, we will ship."
    },
    {
        word: "although",
        pos: "接",
        ipa: "/ɔːlˈðoʊ/",
        cn: "虽然，尽管",
        jp: "〜けれども、〜にもかかわらず",
        family: "though",
        tips: "让步从属连词，引导让步状语从句，后接完整句子。不能与 but 连用在同一个句子里！与介词 despite / in spite of 互为核心考点。",
        desc: "Although it rained, we went out."
    },
    {
        word: "though",
        pos: "接/副",
        ipa: "/ðoʊ/",
        cn: "虽然，尽管；然而",
        jp: "〜けれども；（文末で）だけど",
        family: "although",
        tips: "兼类词。作连词可与 although 互换引导从句，亦可接形容词构成省略句（though small）；作副词时常置于句中或句末，表示“然而/不过”。",
        desc: "Though tired, he kept working."
    },
    {
        word: "even though",
        pos: "接",
        ipa: "/ˈiːvn ðoʊ/",
        cn: "即使，虽然，尽管",
        jp: "たとえ〜だとしても、〜にもかかわらず",
        family: "even / though",
        tips: "强语气让步从属连词，引导让步状语从句。语气比 although / though 更强烈，强调对客观既成事实的转折。",
        desc: "He smiled even though he was sad."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "as soon as",
        category: "简单",
        stem: "The shipment will be dispatched ________ the payment confirmation is received by our system.",
        options: ["as soon as", "despite", "during", "because of"],
        correct: "as soon as",
        explanations: {
            guide: "状语从句连词辨析。空格后为完整主谓从句 the payment confirmation (主) + is received (谓)，表达“一收到付款确认就发货”，选复合时间连词 as soon as。",
            family: "as soon as (conj.一……就……) | despite (prep.尽管) | during (prep.在……期间) | because of (prep.因为)。",
            details: "as soon as 引导时间状语从句，连接两个紧密衔接的动作。despite, during, because of 均为介词，不能直接连接从句。",
            cn: "系统一收到付款确认，货物就会被发发出。",
            jp: "システムが支払い確認を受领し次第（as soon as）、商品が发送されます。"
        }
    },
    {
        id: 2,
        target: "unless",
        category: "简单",
        stem: "All employees must sign in at the front desk ________ they have a special security pass.",
        options: ["unless", "because of", "during", "despite"],
        correct: "unless",
        explanations: {
            guide: "否定条件连词辨析。空格后接完整从句 they have a special security pass，结合前文“必须在前台签到”，表达“除非有特别通行证，否则……”，选 unless。",
            family: "unless (conj.除非) | because of (prep.因为) | during (prep.在……期间) | despite (prep.尽管)。",
            details: "unless 相当于 if... not，引导否定条件从句。其余三个选项均为介词（短语），无法引导句子。",
            cn: "所有员工都必须在前台签到，除非他们持有特殊的安全通行证。",
            jp: "特別なセキュリティパスを持っていない限り（unless）、すべての従業員はフロントでサインインしなければなりません。"
        }
    },
    {
        id: 3,
        target: "because",
        category: "简单",
        stem: "The outdoor promotional event was canceled ________ bad weather was forecasted for Saturday.",
        options: ["because", "because of", "due to", "despite"],
        correct: "because",
        explanations: {
            guide: "原因从句连词与介词辨析。空格后为完整从句 bad weather (主) + was forecasted (谓)，需要填入从属连词 because（因为）。",
            family: "because (conj.因为) | because of (prep.由于) | due to (prep.由于) | despite (prep.尽管)。",
            details: "because 后面接主谓完整的从句；because of 和 due to 是介词短语，后接名词，不能直接加从句。",
            cn: "由于预报周六有恶劣天气，户外促销活动被取消了。",
            jp: "土曜日は悪天候が予想されたため（because）、野外プロモーションイベントは中止となりました。"
        }
    },
    {
        id: 4,
        target: "when",
        category: "简单",
        stem: "Please make sure to turn off all electrical equipment ________ you leave the office.",
        options: ["when", "during", "due to", "in spite of"],
        correct: "when",
        explanations: {
            guide: "时间状语从句连词。空格后跟完整句子 you leave the office，表达“当离开办公室时”，选从属连词 when。",
            family: "when (conj.当……时) | during (prep.在……期间) | due to (prep.由于) | in spite of (prep.尽管)。",
            details: "when 引导时间状语从句；during 为介词，后接名词短语（如 during the break），无法直接连接从句。",
            cn: "当您离开办公室时，请务必关闭所有电气设备。",
            jp: "オフィスを退室する際（when）は、すべての電気機器の電源を必ず切ってください。"
        }
    },
    {
        id: 5,
        target: "although",
        category: "简单",
        stem: "________ the new software was expensive, the company decided to purchase it for all departments.",
        options: ["Although", "Despite", "In spite of", "Because of"],
        correct: "Although",
        explanations: {
            guide: "让步从句连词辨析。空格后为完整句子 the new software (主) + was (谓) + expensive (表)，选从属连词 Although（虽然）。",
            family: "Although (conj.虽然) | Despite (prep.尽管) | In spite of (prep.尽管) | Because of (prep.因为)。",
            details: "Although 是从属连词，后接从句；Despite, In spite of, Because of 均为介词，后接名词短语，不能接从句。",
            cn: "虽然这款新软件价格昂贵，公司还是决定为所有部门购买它。",
            jp: "新しいソフトウェアは高价でしたが（Although）、会社はすべての部门のためにそれを购入することを决定しました。"
        }
    },
    {
        id: 6,
        target: "if",
        category: "简单",
        stem: "You can request a full refund within thirty days ________ you are not satisfied with the product.",
        options: ["if", "during", "owing to", "despite"],
        correct: "if",
        explanations: {
            guide: "条件从句连词辨析。空格后接完整主谓从句 you are not satisfied...，表达“如果对产品不满意”，选条件连词 if。",
            family: "if (conj.如果) | during (prep.在……期间) | owing to (prep.由于) | despite (prep.尽管)。",
            details: "if 引导条件状语从句。during, owing to, despite 均为介词（短语），无法在此处连接句子。",
            cn: "如果您对产品不满意，可以在三十天内申请全额退款。",
            jp: "制品にご満足いただけない场合（if）、30日以内であれば全额返金を求することができます。"
        }
    },
    {
        id: 7,
        target: "once",
        category: "中等",
        stem: "________ the legal team reviews the contract terms, we will forward the document to the client for signature.",
        options: ["Once", "During", "Because of", "In spite of"],
        correct: "Once",
        explanations: {
            guide: "连词词义辨析。空格后为完整从句 the legal team reviews...，表达“一旦法务团队审查完合同，我们就发给客户”，选兼类连词 Once（一旦）。",
            family: "Once (conj.一旦) | During (prep.在……期间) | Because of (prep.由于) | In spite of (prep.尽管)。",
            details: "Once 作为从属连词，意为“一旦……就……”，引导时间/条件状语从句。其余三项均为介词，不能接从句。",
            cn: "一旦法务团队审查完合同条款，我们就会将文件转发给客户签署。",
            jp: "法务チームが契约条件を確認し次第（Once）、署名のために文书を客様に転送します。"
        }
    },
    {
        id: 8,
        target: "while",
        category: "中等",
        stem: "Mr. Kim monitored the server performance ________ the IT team was installing the system updates.",
        options: ["while", "during", "owing to", "despite"],
        correct: "while",
        explanations: {
            guide: "时间状语从句连词。空格后为完整句子 the IT team (主) + was installing (谓) ...，表达“在……期间”，选连词 while。",
            family: "while (conj.当……时/在……期间) | during (prep.在……期间) | owing to (prep.由于) | despite (prep.尽管)。",
            details: "while 引导时间状语从句，强调主句与从句动作同时发生。during 为介词，不能直接跟完整从句。",
            cn: "在 IT 团队安装系统更新期间，金先生监控着服务器的性能。",
            jp: "ITチームがシステムアップデートをインストールしている间（while）、金氏はサーバーのパフォーマンスを监视していました。"
        }
    },
    {
        id: 9,
        target: "even though",
        category: "中等",
        stem: "The sales representative exceeded her quarterly target ________ she was newly assigned to the territory.",
        options: ["even though", "despite", "in spite of", "regardless of"],
        correct: "even though",
        explanations: {
            guide: "强语气让步连词辨析。空格后跟从句 she was newly assigned...，选让步从属连词 even though。",
            family: "even though (conj.即使/尽管) | despite (prep.尽管) | in spite of (prep.尽管) | regardless of (prep.不管)。",
            details: "even though 引导让步状语从句；despite, in spite of, regardless of 均为介词短语，后接名词，不能直接接从句。",
            cn: "尽管她是新被分配到该区域的，但这位销售代表还是超额完成了季度目标。",
            jp: "その担当地域に新しく配属されたばかりであったにもかかわらず（even though）、その营业担当者は四半期目标を大幅に达成しました。"
        }
    },
    {
        id: 10,
        target: "as",
        category: "中等",
        stem: "________ consumer demand for electric vehicles continues to rise, manufacturers are increasing production.",
        options: ["As", "Because of", "Due to", "Despite"],
        correct: "As",
        explanations: {
            guide: "原因连词辨析。空格后跟完整句子 consumer demand... continues to rise，选连词 As（由于/因为，等同于 because/since）。",
            family: "As (conj.由于/因为) | Because of (prep.由于) | Due to (prep.由于) | Despite (prep.尽管)。",
            details: "As 在此引导原因状语从句；Because of, Due to, Despite 都是介词（短语），无法直接跟包含主谓结构的从句。",
            cn: "由于消费者对电动汽车的需求持续上升，制造商正在扩大生产。",
            jp: "電気自動車に対する消費者の需要が高まり続けているため（As）、メーカーは生産量を引き上げています。"
        }
    },
    {
        id: 11,
        target: "though",
        category: "中等",
        stem: "The new regional manager is very strict with deadlines; he is ________ always willing to assist his staff.",
        options: ["though", "although", "even though", "unless"],
        correct: "though",
        explanations: {
            guide: "副词放句中/句尾考点。空格位于系动词 is 之后、副词 always 之前，充当插入语副词，表达“然而/不过”，选副词兼连词 though。",
            family: "though (adv./conj.然而/虽然) | although (conj.虽然) | even though (conj.即使) | unless (conj.除非)。",
            details: "though 可以作为副词放在句中或句末充当插入语，意为“然而/不过”。although 和 even though 只能作为连词引导从句，不能单独作插入副词。",
            cn: "新区域经理对截止日期非常严格；不过，他总是愿意协助他的员工。",
            jp: "新しいエリアマネージャーは締め切りにとても严しいですが、それでも（though）常にスタッフを助ける意欲を持っています。"
        }
    },
    {
        id: 12,
        target: "unless",
        category: "中等",
        stem: "The conference room booking will be automatically canceled ________ confirmed within twenty-four hours.",
        options: ["unless", "if", "because", "as"],
        correct: "unless",
        explanations: {
            guide: "连词+过去分词省略结构（unless [it is] confirmed）。表达“除非在24小时内获得确认，否则预订将被自动取消”，选否定条件连词 unless。",
            family: "unless (conj.除非) | if (conj.如果) | because (conj.因为) | as (conj.因为)。",
            details: "unless confirmed 相当于 unless it is confirmed。unless 引导省略了主语和 be 动词的状语从句，逻辑高度契合。",
            cn: "除非在二十四小时内予以确认，否则会议室预订将被自动取消。",
            jp: "24时间以内に确认されない限り（unless）、会议室の予约は自动的にキャンセルされます。"
        }
    },
    {
        id: 13,
        target: "once",
        category: "困难",
        stem: "________ approved by the board of directors, the restructuring plan will be implemented across all branches.",
        options: ["Once", "During", "Because of", "Until"],
        correct: "Once",
        explanations: {
            guide: "连词+过去分词省略结构（Once [it is] approved）。空格后跟过去分词 approved，表达“一旦获得董事会批准”，选连词 Once。",
            family: "Once (conj.一旦) | During (prep.在……期间) | Because of (prep.由于) | Until (prep./conj.直到)。",
            details: "Once 可以引导省略句结构（Once + past participle）。During 和 Because of 为介词，不能直接接过去分词；Until 逻辑在此处不通。",
            cn: "重组计划一旦获得董事会批准，将在所有分公司实施。",
            jp: "取締役会によって承認され次第（Once）、再編計画は全支店で実施されます。"
        }
    },
    {
        id: 14,
        target: "while",
        category: "困难",
        stem: "________ managing the daily operations of the facility, Ms. Lee also managed to complete her MBA degree.",
        options: ["While", "During", "Due to", "In spite of"],
        correct: "While",
        explanations: {
            guide: "连词+现在分词省略结构（While [she was] managing...）。空格后跟现在分词短语 managing the daily operations...，选从属连词 While。",
            family: "While (conj.在……的同时/当……时) | During (prep.在……期间) | Due to (prep.由于) | In spite of (prep.尽管)。",
            details: "While 后可跟现在分词短语（While doing sth）构成状语省略；介词 During 后面绝不能直接接带有宾语的现在分词短语。",
            cn: "在管理设施日常运营的同时，李女士还成功完成了她的 MBA 学位。",
            jp: "施設の日常業務を管理する一方で（While）、李氏はMBAの爵位も取得しました。"
        }
    },
    {
        id: 15,
        target: "when",
        category: "困难",
        stem: "The regional director will formally announce the merger ________ he addresses the shareholders tomorrow morning.",
        options: ["when", "during", "beforehand", "prior to"],
        correct: "when",
        explanations: {
            guide: "时间状语从句与“主将从现”语法。主句为将来时 will announce，空格后引导时间状语从句 he addresses the shareholders，用一般现在时 addresses 表示将来，选时间连词 when。",
            family: "when (conj.当……时) | during (prep.在……期间) | beforehand (adv.事先) | prior to (prep.在……之前)。",
            details: "when 引导时间状语从句，后接完整句子。during 和 prior to 为介词，不能直接跟从句；beforehand 为副词。",
            cn: "区域总监明天上午向股东致辞时，将正式宣布合并事宜。",
            jp: "エリアディレクターは、明朝株主に演説する際（when）、正式に合併を発表する予定です。"
        }
    },
    {
        id: 16,
        target: "though",
        category: "困难",
        stem: "________ inexperienced in international arbitration, the young attorney handled the contract dispute remarkably well.",
        options: ["Though", "Despite", "In spite of", "Because of"],
        correct: "Though",
        explanations: {
            guide: "连词+形容词省略结构（Though [he was] inexperienced...）。空格后直接跟形容词 inexperienced，属于状语从句主谓省略现象，选从属连词 Though。",
            family: "Though (conj.虽然) | Despite (prep.尽管) | In spite of (prep.尽管) | Because of (prep.因为)。",
            details: "Though 可以引导省略句（Though + adj.），表达“虽然……”。介词 Despite / In spite of 后面必须接名词或动名词，不能直接修饰形容词 inexperienced。",
            cn: "虽然在国际仲裁方面经验不足，但这位年轻律师把合同纠纷处理得相当出色。",
            jp: "国際仲裁の経験は浅かったものの（Though）、その若手弁護士は契約紛争を見事に処理しました。"
        }
    },
    {
        id: 17,
        target: "as soon as",
        category: "困难",
        stem: "We will issue the revised invoice ________ the accounting department verifies the updated pricing details.",
        options: ["as soon as", "during", "in spite of", "instead of"],
        correct: "as soon as",
        explanations: {
            guide: "复合时间连词与从句时态。主句为将来时 will issue，空格后引导时间状语从句，用一般现在时 verifies 表示将来，选复合连词 as soon as（一……就……）。",
            family: "as soon as (conj.一……就……) | during (prep.在……期间) | in spite of (prep.尽管) | instead of (prep.而不是)。",
            details: "as soon as 引导时间状语从句，遵循“主将从现”原则。选项中的其余三项均为介词短语，无法连接从句。",
            cn: "财务部一核对完更新后的价格细节，我们就会开出修改后的发票。",
            jp: "経理部門が更新された価格の詳細を確認し次第（as soon as）、改訂された請求書を発行します。"
        }
    },
    {
        id: 18,
        target: "even though",
        category: "困难",
        stem: "The project team met every milestone on schedule ________ they encountered several unexpected logistical hurdles.",
        options: ["even though", "in spite of", "despite", "regardless of"],
        correct: "even though",
        explanations: {
            guide: "让步连词与介词对比。空格后跟完整主谓从句 they (主) + encountered (谓) + several unexpected logistical hurdles (宾)，选从属连词 even though。",
            family: "even though (conj.即使/尽管) | in spite of (prep.尽管) | despite (prep.尽管) | regardless of (prep.不管)。",
            details: "even though 引导让步状语从句，后接完整句子；in spite of, despite, regardless of 均为介词短语，无法直接连接从句。",
            cn: "尽管遭遇了几个意料之外的后勤障碍，项目团队还是按计划完成了每一个里程碑目标。",
            jp: "予期せぬ物流上の障害にいくつか直面したにもかかわらず（even though）、プロジェクトチームは予定通りすべてのマイルストーンを達成しました。"
        }
    }
];