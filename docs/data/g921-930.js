// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data211-220.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "sturdy",
        pos: "形",
        ipa: "/ˈstɜːrdi/",
        cn: "结实的，坚固的，耐用的",
        jp: "頑丈な、丈夫な、耐久性のある",
        family: "sturdily / sturdiness",
        tips: "常用于描述仓储箱体、办公家具或施工设施的坚固耐用（sturdy construction / sturdy packaging）。",
        desc: "The shipping crate is very sturdy."
    },
    {
        word: "commemorate",
        pos: "動",
        ipa: "/kəˈmeməreɪt/",
        cn: "纪念，庆祝（周年/重大事件）",
        jp: "（記念日や人を）記念する、祝う",
        family: "commemoration / commemorative / commemorator",
        tips: "商务及公关庆典核心动词：commemorate an anniversary / milestone（庆祝周年纪念/里程碑），其形容词 commemorative（纪念性的）常考。",
        desc: "We built a monument to commemorate the event."
    },
    {
        word: "plaque",
        pos: "名",
        ipa: "/plæk/",
        cn: "纪念牌，铭牌，奖牌",
        jp: "記念額、銘板、飾り額",
        family: "plaques / commemorative plaque",
        tips: "员工表彰与建筑物落成场景核心词汇：receive a recognition plaque（获得荣誉奖牌），a bronze plaque on the wall（墙上的铜质铭牌）。",
        desc: "He received a bronze plaque for his service."
    },
    {
        word: "insulation",
        pos: "名",
        ipa: "/ˌɪnsəˈleɪʃn/",
        cn: "隔热材料，保温层；绝缘",
        jp: "断熱（材）、防音、絶縁",
        family: "insulate / insulated / insulator",
        tips: "建筑改造与绿色节能考点：thermal insulation（建筑隔热保温），improve insulation to reduce heating costs（改进隔热以削减取暖费）。",
        desc: "Good insulation reduces heating costs."
    },
    {
        word: "itemize",
        pos: "動",
        ipa: "/ˈaɪtəmaɪz/",
        cn: "逐条列记，详细列出清单",
        jp: "項目別に分ける、明細を記す",
        family: "itemized / itemization / item",
        tips: "财务报销与开票高频词：itemize expenses（逐条列出开支），过去分词形容词 itemized receipt / bill（明细收据/费用清单）是最高频考点。",
        desc: "Please itemize all travel expenses."
    },
    {
        word: "compatible",
        pos: "形",
        ipa: "/kəmˈpætəbl/",
        cn: "兼容的，相容的，匹配的",
        jp: "互換性のある、適合する、相性が良い",
        family: "compatibility / incompatible / compatibly",
        tips: "IT 软硬件支持核心词汇：be compatible with...（与……系统或硬件兼容）。名词形式 compatibility（兼容性）亦为高频难点。",
        desc: "The app is compatible with your phone."
    },
    {
        word: "proofread",
        pos: "動",
        ipa: "/ˈpruːfriːd/",
        cn: "校对，校正（文稿/合同）",
        jp: "校正する、校閲する",
        family: "proofreader / proofreading / proof",
        tips: "出版、文书呈交与合规审核核心及物动词：proofread a document / draft / manuscript（提交前校对文稿合同）。",
        desc: "Please proofread the contract carefully."
    },
    {
        word: "gala",
        pos: "名/形",
        ipa: "/ˈɡeɪlə/",
        cn: "盛大庆祝活动，盛典；庆典的",
        jp: "祝祭、ガーラ、祝賀会；華やかな",
        family: "annual gala / charity gala / fundraising gala",
        tips: "企业周年宴会与慈善募捐活动高频词：charity gala（慈善晚会），annual anniversary gala dinner（年度周年盛典晚宴）。",
        desc: "They hosted an annual charity gala."
    },
    {
        word: "inclement",
        pos: "形",
        ipa: "/ɪnˈklemənt/",
        cn: "（天气）恶劣的，严酷的",
        jp: "（天候が）荒れ模様の、悪天候の",
        family: "inclemency / clemency",
        tips: "托业广播通知与航班延误第一高频修饰词：inclement weather conditions（恶劣天气状况），相当于 severe / adverse weather。",
        desc: "The flight was delayed by inclement weather."
    },
    {
        word: "mural",
        pos: "名/形",
        ipa: "/ˈmjʊrəl/",
        cn: "壁画；墙壁的",
        jp: "壁画；壁の",
        family: "murals / muralist",
        tips: "市政公共工程与社区改造场景核心词：paint a mural（绘制壁画），restore historical murals（修复历史壁画）。",
        desc: "An artist painted a colorful wall mural."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "proofread",
        category: "简单",
        stem: "The administrative assistant was asked to carefully ________ the press release before sending it to the media.",
        options: ["proofread", "proofreading", "mural", "gala"],
        correct: "proofread",
        explanations: {
            guide: "动词不定式结构。was asked to 后面必须接动词原形，副词 carefully 修饰该动词，表达在发送给媒体前“校对”新闻通稿，选 proofread。",
            family: "proofread (v.校对) | proofreading (动名词/校对) | mural (n.壁画) | gala (n.盛典)。",
            details: "to 后面必须接动词原形。proofreading 是动名词或现在分词，不能在不定式符号 to 后面充当谓语动词原形。",
            cn: "行政助理被要求在将新闻通稿发送给媒体之前仔细进行校对。",
            jp: "総務アシスタントは、報道関係者に送付する前にプレスリリースを慎重に校正する（proofread）よう求められました。"
        }
    },
    {
        id: 2,
        target: "inclement",
        category: "简单",
        stem: "Due to ________ weather conditions forecasted for the weekend, the outdoor corporate picnic has been postponed.",
        options: ["inclement", "inclemency", "sturdy", "commemorate"],
        correct: "inclement",
        explanations: {
            guide: "形容词作定语修饰名词。修饰后面的 weather conditions，inclement weather 是托业听力与阅读极高频的专属搭配，意为“恶劣的天气”，选 inclement。",
            family: "inclement (adj.恶劣的/荒凉的) | inclemency (n.严酷/恶劣) | sturdy (adj.结实的) | commemorate (v.纪念)。",
            details: "inclement weather 属于固定气象公文用语。inclemency 是名词，不能修饰其后的名词短语 weather conditions。",
            cn: "由于预报周末有恶劣天气，公司户外野餐活动已被推迟。",
            jp: "週末に予想される悪天候（inclement weather）のため、屋外での社内ピクニックは延期されました。"
        }
    },
    {
        id: 3,
        target: "plaque",
        category: "简单",
        stem: "During the retirement reception, the regional director was presented with an engraved silver ________ to honor his decades of leadership.",
        options: ["plaque", "plaques", "itemize", "compatible"],
        correct: "plaque",
        explanations: {
            guide: "不定冠词与形容词后的单数名词。an engraved silver ________ 结构中，不定冠词 an 限制此处需填入单数名词，silver plaque 意为“银质纪念牌/荣誉奖牌”，选 plaque。",
            family: "plaque (n.纪念牌/铭牌/单数) | plaques (n.复数) | itemize (v.逐条列出) | compatible (adj.兼容的)。",
            details: "an engraved plaque 指刻有字样的表彰奖牌。plaques 为复数形式，不能与不定冠词 an 连用；itemize 和 compatible 词性与语义均不符合。",
            cn: "在欢送退休招待会上，区域总监获赠了一块刻有铭文的银质纪念奖牌，以表彰他数十年来的卓越领导。",
            jp: "退職レセプションで、地域担当ディレクターには数十年にわたる指導力を称える刻印入りの銀製記念盾（plaque）が贈呈されました。"
        }
    },
    {
        id: 4,
        target: "sturdy",
        category: "简单",
        stem: "The logistics warehouse utilizes ________ wooden packaging crates to ensure heavy automotive components are not damaged during shipment.",
        options: ["sturdy", "sturdily", "insulation", "proofread"],
        correct: "sturdy",
        explanations: {
            guide: "形容词作定语修饰名词。空格修饰后面的 packaging crates（包装木箱），表达箱体结构“结实坚固的”，选形容词 sturdy。",
            family: "sturdy (adj.结实的/坚固的) | sturdily (adv.结实地) | insulation (n.隔热) | proofread (v.校对)。",
            details: "sturdy packaging crates 意为坚固结实的包装箱。sturdily 是副词，不能直接作定语修饰名词短语 crates。",
            cn: "该物流仓库使用结实的木质包装箱，以确保沉重的汽车零部件在运输过程中不受损坏。",
            jp: "その物流倉庫では、輸送中に重量のある自動車部品が損傷しないよう、頑丈な（sturdy）木製梱包箱を使用しています。"
        }
    },
    {
        id: 5,
        target: "gala",
        category: "简单",
        stem: "Tickets for the foundation's annual charity ________ sold out within twenty-four hours of being released online.",
        options: ["gala", "galas", "mural", "inclement"],
        correct: "gala",
        explanations: {
            guide: "复合名词定语修饰与商务庆典考点。the foundation's annual charity ________ 结构中，charity gala 属于固定专有名词，意为“慈善晚会/盛典”，选单数名词 gala 修饰活动主体。",
            family: "gala (n.盛典/庆典/单数) | galas (n.复数) | mural (n.壁画) | inclement (adj.恶劣的)。",
            details: "charity gala 是托业筹款与宴会场景核心词汇。mural（壁画）无法与 charity 搭配作为售出门票的晚会活动。",
            cn: "该基金会年度慈善晚会的门票在网上开售二十四小时内便销售一空。",
            jp: "財団の年次慈善祝賀会（charity gala）のチケットは、オンラインで発売されてから24時間以内に完売しました。"
        }
    },
    {
        id: 6,
        target: "compatible",
        category: "简单",
        stem: "The IT technician verified that the new accounting software is fully ________ with our current operating system.",
        options: ["compatible", "compatibility", "itemize", "commemorate"],
        correct: "compatible",
        explanations: {
            guide: "系表结构与介词固定搭配。is fully ________ with 结构中，系动词 is 与副词 fully 之后需要接形容词作表语，be compatible with 是 IT 核心搭配，意为“与……兼容”，选 compatible。",
            family: "compatible (adj.兼容的/相容的) | compatibility (n.兼容性) | itemize (v.详细列出) | commemorate (v.纪念)。",
            details: "be compatible with the operating system 指与操作系统兼容。compatibility 是名词，不能作表语形容词与副词 fully 搭配。",
            cn: "IT 技术员证实，这款新会计软件与我们当前的操作系统完全兼容。",
            jp: "IT技術者は、新しい会計ソフトウェアが当社の現在のオペレーティングシステムと完全に互換性がある（compatible）ことを確認しました。"
        }
    },
    {
        id: 7,
        target: "commemorate",
        category: "中等",
        stem: "The municipal historical committee organized a special ceremony to ________ the fiftieth anniversary of the library's founding.",
        options: ["commemorate", "commemoration", "proofread", "sturdy"],
        correct: "commemorate",
        explanations: {
            guide: "动词不定式表目的及商务公关搭配。organized a ceremony to 后面需要接动词原形，commemorate the anniversary 意为“纪念/庆祝……周年”，选动词 commemorate。",
            family: "commemorate (v.纪念/庆祝) | commemoration (n.纪念/庆典) | proofread (v.校对) | sturdy (adj.结实的)。",
            details: "to 为不定式符号，后面必须接动词原形。commemoration 是名词，无法充当不定式中带宾语 the anniversary 的核心动词。",
            cn: "市立历史委员会组织了一场特别仪式，以纪念图书馆建馆五十周年。",
            jp: "市立歴史委員会は、図書館の設立50周年を記念する（commemorate）ための特別な式典を企画しました。"
        }
    },
    {
        id: 8,
        target: "itemize",
        category: "中等",
        stem: "Before the reimbursement can be processed, company policy requires employees to ________ all business-related dining expenditures.",
        options: ["itemize", "itemized", "insulation", "compatible"],
        correct: "itemize",
        explanations: {
            guide: "动词不定式结构。requires sb to 后面需要接动词原形，后接宾语 expenditures（开支），itemize expenses 意为“逐条列出开支明细”，选 itemize。",
            family: "itemize (v.逐条列出/列明清单) | itemized (adj.列有明细的) | insulation (n.隔热) | compatible (adj.兼容的)。",
            details: "requires employees to itemize expenditures 构成完整的动宾结构。itemized 为过去分词或过去式，不能跟在不定式符号 to 后面担任动词原形。",
            cn: "在处理报销之前，公司政策要求员工逐条列出所有与业务相关的餐饮开销明细。",
            jp: "精算が処理される前に、会社の方針として、従業員はすべての業務関連の飲食費を項目別に明記する（itemize）ことが求められています。"
        }
    },
    {
        id: 9,
        target: "insulation",
        category: "中等",
        stem: "Upgrading the commercial warehouse's thermal ________ helped reduce heating and cooling expenditures by twenty percent.",
        options: ["insulation", "insulate", "plaque", "gala"],
        correct: "insulation",
        explanations: {
            guide: "名词中心语与环保节能考点。Upgrading the warehouse's thermal ________ 结构中，形容词 thermal（热的/保温的）需要修饰名词，thermal insulation 意为“保温隔热层/隔热材料”，选 insulation。",
            family: "insulation (n.隔热/保温材料/绝缘) | insulate (v.使隔热) | plaque (n.奖牌) | gala (n.盛典)。",
            details: "thermal insulation 是建筑工程与设施升级的核心专有名词。insulate 是动词，不能直接放在形容词 thermal 之后作动名词 Upgrading 的宾语中心词。",
            cn: "对商业仓库的隔热保温层进行升级，帮助将冷暖气支出降低了百分之二十。",
            jp: "商業倉庫の断熱（insulation）性能を向上させたことで、冷暖房費を20パーセント削減することができました。"
        }
    },
    {
        id: 10,
        target: "mural",
        category: "中等",
        stem: "The downtown revitalization project commissioned a prominent local artist to paint an expansive outdoor ________ on the public library wall.",
        options: ["mural", "murals", "inclement", "itemize"],
        correct: "mural",
        explanations: {
            guide: "不定冠词与形容词后的单数名词。paint an expansive outdoor ________ 结构中，受到不定冠词 an 限制，需要单数名词作宾语，paint a mural 意为“绘制壁画”，选 mural。",
            family: "mural (n.壁画/单数) | murals (n.复数) | inclement (adj.恶劣的) | itemize (v.逐项列记)。",
            details: "paint an outdoor mural 指在户外墙体上创作壁画。murals 为复数形式，不能与不定冠词 an 连用。",
            cn: "市中心振兴项目委托了一位知名的当地艺术家在公共图书馆外墙上绘制一幅大型室外壁画。",
            jp: "ダウンタウン活性化プロジェクトは、著名な地元アーティストに依頼して、公共図書館の壁に大規模な屋外壁画（mural）を制作してもらいました。"
        }
    },
    {
        id: 11,
        target: "compatible",
        category: "中等",
        stem: "Due to outdated firmware, the legacy barcode scanner proved to be ________ with the newly installed inventory system.",
        options: ["incompatible", "compatible", "sturdiness", "commemorate"],
        correct: "incompatible",
        explanations: {
            guide: "逻辑否定与派生形容词考点。由 Due to outdated firmware（由于固件过时）可知，扫描枪与新系统在逻辑上是“不兼容的”，prove to be 后面接形容词表语，选派生反义形容词 incompatible。",
            family: "incompatible (adj.不兼容的) | compatible (adj.兼容的) | sturdiness (n.坚固) | commemorate (v.纪念)。",
            details: "prove to be incompatible with 意为被证实与……不兼容。compatible 与前文固件老旧的负面因果逻辑相悖；sturdiness 是名词，词性不符。",
            cn: "由于固件过时，旧式条码扫描枪被证实与新安装的库存系统不兼容。",
            jp: "ファームウェアが古いため、旧式のバーコードスキャナーは新しく導入された在庫管理システムと互換性がない（incompatible）ことが判明しました。"
        }
    },
    {
        id: 12,
        target: "proofread",
        category: "中等",
        stem: "The senior technical editor thoroughly ________ the user manual to eliminate any typographical errors before mass publication.",
        options: ["proofread", "proofreader", "insulation", "gala"],
        correct: "proofread",
        explanations: {
            guide: "一般过去时谓语动词。句子缺少核心谓语动词，副词 thoroughly 修饰该动词，proofread 的过去式与原形拼写相同（读音为 /ˈpruːfred/），表示“仔细校对了手册”，选 proofread。",
            family: "proofread (v.校对/过去式同形) | proofreader (n.校对员) | insulation (n.隔热) | gala (n.盛会)。",
            details: "proofread the user manual 意为校对用户手册。proofreader 指校对人员，在此处会导致全句缺少谓语动词。",
            cn: "资深技术编辑在批量印刷前仔细校对了用户手册，以消除所有排版印刷错误。",
            jp: "シニアテクニカルエディターは、大量印刷の前に誤植を排除するため、ユーザーマニュアルを徹底的に校正し（proofread）ました。"
        }
    },
    {
        id: 13,
        target: "itemize",
        category: "困难",
        stem: "To qualify for corporate reimbursement, business travelers must provide an ________ invoice clearly displaying individual hotel and meal charges.",
        options: ["itemized", "itemize", "itemization", "commemorative"],
        correct: "itemized",
        explanations: {
            guide: "过去分词作定语修饰名词。an ________ invoice 结构中，不定冠词 an 与名词 invoice（发票）之间需要填入分词形容词，itemized invoice 是托业财务报销核心专有名词，意为“明细发票/逐项开列的发票”，选 itemized。",
            family: "itemized (adj.列有明细清单的) | itemize (v.逐条列出) | itemization (n.逐条列记) | commemorative (adj.纪念性的)。",
            details: "an itemized invoice 指列有单项费用明细的发票。itemize 是动词原形，itemization 是名词，均不能作定语直接修饰 invoice。",
            cn: "为了符合公司报销资格，出差员工必须提供清晰列出各项酒店与餐饮费用的明细发票。",
            jp: "企業の経費精算の対象となるためには、出張者は個別のホテル代や食事代が明確に記載された明細付きの（itemized）請求書を提出しなければなりません。"
        }
    },
    {
        id: 14,
        target: "commemorate",
        category: "困难",
        stem: "The city council voted unanimously to erect a ________ bronze monument in recognition of the firefighters' heroic rescue efforts.",
        options: ["commemorative", "commemorate", "commemoration", "compatible"],
        correct: "commemorative",
        explanations: {
            guide: "派生形容词作定语修饰名词。a ________ bronze monument 结构中，需要形容词修饰青铜纪念碑，commemorative 意为“纪念性的/用于表彰纪念的”，选 commemorative。",
            family: "commemorative (adj.纪念性的/纪念用的) | commemorate (v.纪念) | commemoration (n.纪念) | compatible (adj.兼容的)。",
            details: "a commemorative monument 指纪念碑。commemorate 是动词，commemoration 是名词，在此处均无法充当冠词 a 之后的定语形容词。",
            cn: "市议会一致投票决定树立一座纪念性青铜雕像，以表彰消防员英勇的营救行动。",
            jp: "市議会は、消防士たちの英雄的な救助活動を称え、記念の（commemorative）ブロンズ像を建立することを満場一致で可決しました。"
        }
    },
    {
        id: 15,
        target: "compatible",
        category: "困难",
        stem: "Network administrators conducted exhaustive testing to ensure the ________ of the legacy client portal with modern web browsers.",
        options: ["compatibility", "compatible", "incompatible", "insulation"],
        correct: "compatibility",
        explanations: {
            guide: "名词作及物动词宾语。ensure the ________ of... with... 结构中，定冠词 the 后面需要接名词，the compatibility of A with B 属于 IT 架构经典句型，意为“A 与 B 的兼容性”，选 compatibility。",
            family: "compatibility (n.兼容性/相容度) | compatible (adj.兼容的) | incompatible (adj.不相容的) | insulation (n.绝缘/隔热)。",
            details: "the compatibility of the portal with browsers 意为门户网站与浏览器的兼容性。compatible 和 incompatible 是形容词，不能作 ensure 的宾语中心词。",
            cn: "网络管理员进行了详尽的测试，以确保传统客户端门户网站与现代网页浏览器的兼容性。",
            jp: "ネットワーク管理者は、従来のクライアントポータルと最新のウェブブラウザとの互換性（compatibility）を確認するために徹底的なテストを実施しました。"
        }
    },
    {
        id: 16,
        target: "sturdy",
        category: "困难",
        stem: "Because industrial transit routes are prone to severe vibrations, sensitive electronic equipment must be ________ packaged inside the crates.",
        options: ["sturdily", "sturdy", "sturdiness", "inclement"],
        correct: "sturdily",
        explanations: {
            guide: "副词修饰被动语态动词。must be ________ packaged 结构中，空格位于系动词 be 与过去分词 packaged 之间，需要副词充当状语修饰包装方式，sturdily packaged 意为“牢固坚实地包装”，选副词 sturdily。",
            family: "sturdily (adv.坚固地/结实地) | sturdy (adj.结实的) | sturdiness (n.坚固性) | inclement (adj.恶劣的)。",
            details: "be sturdily packaged 构成动词与方式状语副词的合理修饰关系。sturdy 是形容词，sturdiness 是名词，均无法在此修饰过去分词 packaged。",
            cn: "由于工业运输路线易发生剧烈震动，精密电子设备在板条箱内必须进行坚固牢靠的包装。",
            jp: "産業輸送ルートは激しい振動が発生しやすいため、精密電子機器は木箱の中で頑丈に（sturdily）梱包されなければなりません。"
        }
    },
    {
        id: 17,
        target: "insulation",
        category: "困难",
        stem: "To maintain vaccine efficacy in transit, pharmaceutical couriers must transport biological vials inside specially ________ refrigeration units.",
        options: ["insulated", "insulation", "proofreading", "mural"],
        correct: "insulated",
        explanations: {
            guide: "过去分词形容词修饰名词。specially ________ refrigeration units 结构中，副词 specially 修饰分词形容词，insulated refrigeration units 意为“具有绝热保温性能的冷藏设备”，选分词形容词 insulated。",
            family: "insulated (adj.绝热的/隔热保温的) | insulation (n.隔热材料) | proofreading (动名词) | mural (n.壁画)。",
            details: "insulated units 指具备保温隔热构造的冷藏箱单元。insulation 是名词，不能被程度副词 specially 修饰来担当定语形容词。",
            cn: "为了在运输途中保持疫苗有效性，医药快递员必须将生物制剂药瓶存放在经过特殊保温隔热的冷藏单元中运输。",
            jp: "輸送中のワクチンの有効性を維持するため、医薬品宅配業者は生物学的バイアルを特別に断熱された（insulated）冷蔵ユニット内に入れて輸送しなければなりません。"
        }
    },
    {
        id: 18,
        target: "proofread",
        category: "困难",
        stem: "After meticulous ________ of the merger contract, the legal team detected a discrepancy in the foreign currency valuation terms.",
        options: ["proofreading", "proofread", "itemized", "gala"],
        correct: "proofreading",
        explanations: {
            guide: "介词与形容词后的动名词考点。After meticulous ________ of the contract 结构中，介词 After 和形容词 meticulous（细致入微的）后面需要接动名词作介词宾语，proofreading 意为“校对工作/校勘过程”，选 proofreading。",
            family: "proofreading (n./动名词校对/校勘) | proofread (v.动词原形/过去式) | itemized (adj.列有明细的) | gala (n.盛典)。",
            details: "meticulous proofreading of the contract 属于正式法务文书处理搭配。proofread 为动词原形，不能直接被形容词 meticulous 修饰充当介词宾语。",
            cn: "在对合并合同进行了极其细致的校对之后，法务团队发现了外币估值条款中存在的一处出入。",
            jp: "合併契約書の綿密な校正（proofreading）の後、法務チームは外貨評価条件における不一致を発見しました。"
        }
    }
];