// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag101-110.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "solution",
        pos: "名",
        ipa: "/səˈluːʃn/",
        cn: "解决方案，答案；溶解",
        jp: "解決策、解答、溶液",
        family: "solve / soluble / solutional / solvent",
        tips: "商务办公与技术支持高频名词。核心搭配 find a solution to...（找到……的解决方案，注意介词用 to）。在阅读中经常与 answer 或 remedy 进行同义替换。",
        desc: "We found a solution."
    },
    {
        word: "range",
        pos: "名/動",
        ipa: "/reɪndʒ/",
        cn: "范围，幅度；包括，（在一定范围内）变化",
        jp: "範囲、品揃え；及ぶ",
        family: "ranges / ranged / ranging",
        tips: "产品销售与采购场景的绝对核心词。极其常考的固定搭配为 a wide range of...（系列广泛的/各种各样的……），常与 a broad selection of 进行同义互换。",
        desc: "The price range is wide."
    },
    {
        word: "luggage",
        pos: "名",
        ipa: "/ˈlʌɡɪdʒ/",
        cn: "行李",
        jp: "手荷物、旅行用トランク",
        family: "baggage",
        tips: "交通出行、机场通勤及酒店服务场景核心词。属于不可数名词，不能加s，前面也不能直接加数词。常考搭配 left-luggage office（行李寄存处）、unattended luggage（无人看管的行李）。",
        desc: "Do not leave your luggage."
    },
    {
        word: "avoid",
        pos: "動",
        ipa: "/əˈvɔɪd/",
        cn: "避免，规避，躲开",
        jp: "避ける、回避する",
        family: "avoidance / avoidable / avoided",
        tips: "语法及运营风险控制高频动词。在托业语法中是动名词（v-ing）做宾语的标志性保留动词，即 avoid doing something（避免做某事）。常考搭配 avoid disruptions（避免中断）。",
        desc: "Avoid making mistakes."
    },
    {
        word: "effective",
        pos: "形",
        ipa: "/ɪˈfektɪv/",
        cn: "有效的，生效的",
        jp: "効果的な、有効な、実施されて",
        family: "effectively / effectiveness / effect",
        tips: "行政通知与合同管理核心形容词。非常核心的商务表达为 become effective / be effective starting + 时间（自某时起生效），在阅读中常与 take effect 相互进行同义替换。",
        desc: "The strategy is effective."
    },
    {
        word: "investment",
        pos: "名",
        ipa: "/ɪnˈvestmənt/",
        cn: "投资，投资额，投入",
        jp: "投資、投資金",
        family: "invest / investor / investments",
        tips: "金融财务与企业战略场景核心名词。高频短语 make a capital investment（进行资本投资）、return on investment (ROI，投资回报率)。其人称名词 investor（投资者）也是高阶常客。",
        desc: "This is a good investment."
    },
    {
        word: "general",
        pos: "形/名",
        ipa: "/ˈdʒenrəl/",
        cn: "总的，普遍的，概括的；将军",
        jp: "全般的な、一般的な；大将",
        family: "generally / generalize / generality",
        tips: "职场行政高频词汇。必考经典职位名称为 general manager（总经理，简称GM）。其核心副词形式 generally 意为“通常/普遍地”，常用于宏观趋势描述。",
        desc: "It is a general rule."
    },
    {
        word: "degree",
        pos: "名",
        ipa: "/dɪˈɡriː/",
        cn: "学位；程度，度数",
        jp: "学位、程度、度",
        family: "degrees",
        tips: "求职招聘与宏观分析高频名词。在招聘启事中常考 university degree（大学学位）或 holding a master's degree（持有硕士学位）；在程度表达中常考 to a significant degree（在很大程度上）。",
        desc: "He has a college degree."
    },
    {
        word: "entire",
        pos: "形",
        ipa: "/ɪnˈtaɪər/",
        cn: "整个的，全部的，完全的",
        jp: "全体の、全部の",
        family: "entirely / entirety",
        tips: "日常行政与团队管理形容词。常置于定冠词 the 之后修饰整体名词，如 the entire staff（全体员工）、the entire infrastructure（整个基础设施）。其副词形式 entirely 相当于 completely。",
        desc: "The entire team worked hard."
    },
    {
        word: "crew",
        pos: "名/動",
        ipa: "/kruː/",
        cn: "全体工作人员，组员；全体船员/机组人员",
        jp: "乗組員、チーム、班",
        family: "crews",
        tips: "交通客运与工程施工场景高频集合名词。常考短语有 flight crew（机组人员）、maintenance crew（维修班组/地勤组）、construction crew（施工队）。",
        desc: "The film crew arrived."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "solution",
        category: "简单",
        stem: "The IT support team is working diligently to find a permanent ________ to the network connectivity issues.",
        options: ["solution", "luggage", "avoid", "crew"],
        correct: "solution",
        explanations: {
            guide: "动词后的名词宾语语义辨析。空格前有动词 find 和形容词 permanent（永久的），需要填入名词作宾语，结合后文的介词 to 及其技术问题语境选 solution。",
            family: "solution (n.解决方案) | luggage (n.行李) | avoid (v.避免) | crew (n.全体工作人员)。",
            details: "find a solution to... 是标准的商务及技术场景短语，意为“找到……的解决方案”。其他选项无法与技术问题和介词 to 构成合理搭配。",
            cn: "IT支持团队正努力工作，以找到解决网络连接问题的永久解决方案。",
            jp: "ITサポートチームは、ネットワーク接続問題の恒久的な解決策（solution）を見つけるために勤勉に取り組んでいます。"
        }
    },
    {
        id: 2,
        target: "range",
        category: "简单",
        stem: "The newly opened retail outlet offers a wide ________ of eco-friendly home appliances.",
        options: ["range", "investment", "general", "entire"],
        correct: "range",
        explanations: {
            guide: "固定量词短语搭配能力考核。空格前有 a wide，后有介词 of，此处应填入名词 range 构成高频短语。",
            family: "range (n.范围/品类) | investment (n.投资) | general (adj.总的) | entire (adj.整个的)。",
            details: "a wide range of... 意为“各种各样的/系列广泛的”，是零售与产品展示场景下的经典表达，用来修饰后面的家电产品。其余选项词性不符或无法构成此固定搭配。",
            cn: "新开业的零售店提供琳琅满目的环保家用电器。",
            jp: "新しくオープンした小売店では、環境に優しい家電製品を幅広く（range）取り揃えています。"
        }
    },
    {
        id: 3,
        target: "luggage",
        category: "简单",
        stem: "Passengers are reminded not to leave their ________ unattended anywhere in the airport terminal.",
        options: ["luggage", "avoid", "degree", "effective"],
        correct: "luggage",
        explanations: {
            guide: "特定公共场所的词义辨析。空格前有形容词性物主代词 their，后有形容词 unattended（无人看管的），结合 airport terminal（机场航站楼）语境选 luggage。",
            family: "luggage (n.行李) | avoid (v.避免) | degree (n.学位/程度) | effective (adj.有效的)。",
            details: "leave luggage unattended 意为“把行李留在那里无人看管”，是机场、车站等交通出行场景中极高频的广播通知行话。其余选项在语意上完全不通。",
            cn: "旅客被提醒不要将行李放在机场航站楼的任何地方而无人看管。",
            jp: "乗客の皆様は、空港ターミナルのいかなる場所でも手荷物（luggage）を放置しないようご注意ください。"
        }
    },
    {
        id: 4,
        target: "avoid",
        category: "简单",
        stem: "Please review the financial contract terms carefully to ________ any potential legal disputes later.",
        options: ["avoid", "solution", "investment", "crew"],
        correct: "avoid",
        explanations: {
            guide: "动词不定式后的核心动词语义辨析。to 后面需要接动词原形表目的，结合后面的宾语 legal disputes（法律纠纷），选用及物动词 avoid。",
            family: "avoid (v.避免) | solution (n.解决方案) | investment (n.投资) | crew (n.全体工作人员)。",
            details: "avoid disputes 意为“避免纠纷”，属于标准的合同管理与风险规避场景。其余选项皆为名词，无法直接接在 to 后面充当目的状语的动词原形。",
            cn: "请仔细审查财务合同条款，以避免日后发生任何潜在的法律纠纷。",
            jp: "後々の潜在的な法的紛争を回避する（avoid）ために、財務契約の条項を注意深く確認してください。"
        }
    },
    {
        id: 5,
        target: "effective",
        category: "简单",
        stem: "The revised office budget guidelines will become ________ starting next fiscal quarter.",
        options: ["effective", "entire", "general", "limited"],
        correct: "effective",
        explanations: {
            guide: "系动词后的形容词表语辨析。空格前面有系动词 become，后接时间短语 starting...，要求填入一个表示“生效”的形容词，选 effective。",
            family: "effective (adj.有效的/生效的) | entire (adj.整个的) | general (adj.总的) | limited (adj.有限的)。",
            details: "become effective 意为“开始生效/正式实施”，是政策、规定或合同发布的官方行政标配词组。其他选项在此结构下语义不符。",
            cn: "修改后的办公预算指南将从下一个财政季度开始生效。",
            jp: "改定されたオフィス予算ガイドラインは、次の会計四半期から適用（effective）されます。"
        }
    },
    {
        id: 6,
        target: "investment",
        category: "简单",
        stem: "Purchasing advanced manufacturing machinery is a necessary ________ for the factory's long-term growth.",
        options: ["investment", "degree", "luggage", "avoid"],
        correct: "investment",
        explanations: {
            guide: "形容词修饰下的名词中心语辨析。空格前有不定冠词 a 和形容词 necessary，需填入一个可数名词单数作表语，结合企业长期增长语境选 investment。",
            family: "investment (n.投资) | degree (n.学位) | luggage (n.行李) | avoid (v.避免)。",
            details: "a necessary investment 意为“一项必要的投资”。工厂购买先进的制造机械属于典型的资本投入行为，符合企业运营与财务逻辑。",
            cn: "购买先进的制造机械是该工厂长期增长的一项必要投资。",
            jp: "先進的な製造機械の購入は、工場の長期的な成長のために必要な投資（investment）です。"
        }
    },
    {
        id: 7,
        target: "general",
        category: "中等",
        stem: "The ________ manager will deliver the introductory speech at the annual convention tomorrow.",
        options: ["general", "entire", "effective", "potential"],
        correct: "general",
        explanations: {
            guide: "职衔名词前的专用修饰语辨析。空格与后面的名词 manager 组合构成一个特定的企业高级职位名称，结合发布主旨演讲的场景，选 general。",
            family: "general (adj.总的) | entire (adj.整个的) | effective (adj.有效的) | potential (adj.潜在的)。",
            details: "general manager 意为“总经理”，是商务职场最基本的职衔构成。虽然 entire 也是形容词，但不能直接修饰单数 manager 构成此类职衔。",
            cn: "总经理将在明天的年度大会上发表致辞。",
            jp: "ゼネラル（general）マネージャーが、明日の年次大会で導入のスピーチを行う予定です。"
        }
    },
    {
        id: 8,
        target: "degree",
        category: "中等",
        stem: "Applicants for the research position should possess a university ________ in business administration or economics.",
        options: ["degree", "solution", "investment", "range"],
        correct: "degree",
        explanations: {
            guide: "修饰语后的名词中心语语义匹配。空格前有 university（大学的），后有介词短语，此处要求填入代表学历的名词，选 degree。",
            family: "degree (n.学位/程度) | solution (n.解决方案) | investment (n.投资) | range (n.范围)。",
            details: "university degree 意为“大学学位”，是人力资源招聘（applicants）场景中关于任职资格评估的绝对核心高频行业术语。",
            cn: "应聘该研究职位者应具备工商管理或经济学领域的大学学位。",
            jp: "研究職の応募者は、経営学または経済学の大学学位（degree）を所持している必要があります。"
        }
    },
    {
        id: 9,
        target: "entire",
        category: "中等",
        stem: "The ________ staff is required to attend the mandatory safety training session on Friday afternoon.",
        options: ["entire", "general", "effective", "limited"],
        correct: "entire",
        explanations: {
            guide: "定冠词与名词之间的整体修饰语。空格位于定冠词 The 和单数集合名词 staff 之间，表达“全体/整个”概念，选用形容词 entire。",
            family: "entire (adj.整个的) | general (adj.普遍的) | effective (adj.有效的) | limited (adj.有限的)。",
            details: "the entire staff 意为“全体员工”，常用于行政通知中强调全员必须参加（mandatory）某项活动。general staff 虽存在但多指参谋人员，不符此语境。",
            cn: "全体员工都必须参加周五下午的强制性安全培训会。",
            jp: "全（entire）従業員は、金曜午後の義務的な安全トレーニングセッションに出席する必要があります。"
        }
    },
    {
        id: 10,
        target: "crew",
        category: "中等",
        stem: "The maintenance ________ arrived promptly at the satellite office to repair the broken elevator.",
        options: ["crew", "luggage", "procedure", "brochure"],
        correct: "crew",
        explanations: {
            guide: "名词修饰名词的复合结构。空格与前面的 maintenance（维修）构成复合名词充当句子的主语，结合前往分支办公室修电梯的语境，选 crew。",
            family: "crew (n.全体工作人员/班组) | luggage (n.行李) | procedure (n.程序) | brochure (n.小册子)。",
            details: "maintenance crew 意为“维修班组/后勤维修队”，是处理设备故障、设施维护等后勤场景下的标准行业行话。其他选项在语义上完全无法匹配。",
            cn: "维修人员迅速赶到分支办公室，修理损坏的电梯。",
            jp: "壊れたエレベーターを修理するために、メンテナンス班（crew）がサテライトオフィスに迅速に到着しました。"
        }
    },
    {
        id: 11,
        target: "solution",
        category: "中等",
        stem: "After hours of intensive negotiation, the committee members finally agreed on a mutually beneficial ________.",
        options: ["solution", "solve", "soluble", "solutional"],
        correct: "solution",
        explanations: {
            guide: "形容词后的名词中心语判定。空格位于形容词短语 mutually beneficial（互利的）之后，作为介词 on 的宾语，必须填入名词形式，选 solution。",
            family: "solution (n.解决方案) | solve (v.解决) | soluble (adj.可溶的) | solutional (adj.溶液的)。",
            details: "agreed on a solution 意为“就一项解决方案达成一致”。在商务谈判或纠纷调解成功后，双方最终达成互利的方案，属于高频职场叙事。",
            cn: "经过数小时的密集谈判，委员会成员最终就一个互利的解决方案达成了一致。",
            jp: "数時間にわたる集中的な交渉の末、委員会メンバーは最終的に互いに利益のある解決策（solution）で合意しました。"
        }
    },
    {
        id: 12,
        target: "avoid",
        category: "中等",
        stem: "To ________ temporary disruptions in foot traffic, the construction work will be conducted at night.",
        options: ["avoid", "avoidance", "avoidable", "avoided"],
        correct: "avoid",
        explanations: {
            guide: "动词不定式引导目的状语的词性选择。To 后面直接接动词原形，引导目的状语，后面带有宾语 disruptions，必须填入及物动词原形，选 avoid。",
            family: "avoid (v.避免) | avoidance (n.逃避) | avoidable (adj.可避免的) | avoided (v-ed已避免)。",
            details: "To avoid disruptions 意为“为了避免中断/为了规避干扰”。在市政施工或商铺翻新中，为了不影响客流量（foot traffic）而选择夜间施工，逻辑完整。",
            cn: "为避免对客流量造成暂时性干扰，施工工作将在夜间进行。",
            jp: "歩行者の通行への一時的な混乱を回避する（avoid）ため、建設工事は夜間に実施されます。"
        }
    },
    {
        id: 13,
        target: "effective",
        category: "困难",
        stem: "The manager implemented the strategic plan so ________ that the entire infrastructure upgrade was completed ahead of schedule.",
        options: ["effectively", "effective", "effectiveness", "effect"],
        correct: "effectively",
        explanations: {
            guide: "结果状语从句中的副词修饰用法。空格位于 structure 句型 so... that 之中，且前面是完整的主谓宾结构，此处必须填入副词来修饰动词 implemented，选 effectively。",
            family: "effectively (adv.有效地) | effective (adj.有效的) | effectiveness (n.有效性) | effect (n.效果)。",
            details: "implemented so effectively 意为“执行得如此有效”。副词修饰动作，形容策略落地非常成功从而导致项目提前完工（ahead of schedule）。",
            cn: "经理如此有效地执行了战略计划，以至于整个基础设施升级工作都提前完成了。",
            jp: "マネージャーが戦略計画を非常に効果的（effectively）に実行したため、インフラ全体のアップグレードが予定より前倒しで完了しました。"
        }
    },
    {
        id: 14,
        target: "investment",
        category: "困难",
        stem: "Several prominent institutional ________ have recently expressed serious interest in funding the startup.",
        options: ["investors", "investment", "invest", "investing"],
        correct: "investors",
        explanations: {
            guide: "高阶商务主语及人称名词考核。空格被形容词 prominent（杰出的）和 institutional（机构的）修饰，且充当复数主语（谓语是 have expressed），需填入指代人的名词复数，选 investors。",
            family: "investors (n-pl投资者) | investment (n.投资) | invest (v.投资) | investing (n.投资行为)。",
            details: "institutional investors 意为“机构投资者”，属于金融投资和风险投资（funding the startup）场景中权重极高的金牌高阶术语。此处不能用抽象名词 investment。",
            cn: "几家著名的机构投资者最近对资助这家初创公司表达了浓厚的兴趣。",
            jp: "いくつかの著名な機関投資家（investors）が最近、そのスタートアップへの資金提供に強い関心を示しています。"
        }
    },
    {
        id: 15,
        target: "general",
        category: "困难",
        stem: "The discretionary budget guidelines proposed by the executives were ________ well-received by department heads.",
        options: ["generally", "general", "generalize", "generality"],
        correct: "generally",
        explanations: {
            guide: "被动语态内部的修饰副词。空格位于被动语态的助动词 were 和过去分词 well-received 之间，做状语修饰整个状态，必须填入副词形式，选 generally。",
            family: "generally (adv.普遍地/通常) | general (adj.总的) | generalize (v.概括) | generality (n.概括性)。",
            details: "were generally well-received 意为“普遍受到好评”。用来描述某项财务或行政政策（budget guidelines）在企业内部推行时的宏观反馈状态。",
            cn: "高管们提出的可支配预算指南普遍受到了部门主管的好评。",
            jp: "役員によって提案された裁量的予算ガイドラインは、部門長たちに概ね（generally）好意的に受け入れられました。"
        }
    },
    {
        id: 16,
        target: "entire",
        category: "困难",
        stem: "The contract arbitration process failed because the database maintenance was not ________ completed.",
        options: ["entirely", "entire", "entirety", "entiring"],
        correct: "entirely",
        explanations: {
            guide: "副词修饰过去分词作状语的副词位置判定。空格用于修饰否定结构被动语态中的核心动词 completed，作程度副词，应选用 entirely。",
            family: "entirely (adv.完全地/整个地) | entire (adj.整个的) | entirety (n.全部) | entiring (v-ing变体)。",
            details: "not entirely completed 意为“没有完全完成”。属于标准的缺陷分析或事故报告语境，说明工作只做了一部分导致后续的流程（arbitration process）失败。",
            cn: "合同仲裁流程遭遇了失败，因为数据库的维护工作没有完全完成。",
            jp: "データベースのメンテナンスが完全に（entirely）完了していなかったため、契約仲裁プロセスは失敗に終わりました。"
        }
    },
    {
        id: 17,
        target: "range",
        category: "困难",
        stem: "The international consulting firm provides diverse corporate services, ________ from branding to financial arbitration.",
        options: ["ranging", "range", "ranges", "ranged"],
        correct: "ranging",
        exqualifications: "ranging",
        explanations: {
            guide: "非谓语动词作后置分词补足语。前面主句已经结构完整，逗号后引出范围的变化，使用现在分词主动式 ranging 与 from... to... 构成固定搭配。",
            family: "ranging (v-ing范围延伸) | range (v./n.范围) | ranges (v-3sg范围涵盖) | ranged (v-ed范围曾及)。",
            details: "ranging from A to B 属于托业长难句中极常见的后置定语/伴随结构，意为“范围从A延伸到B”，用来细化和支撑前面提到的多样化企业服务（diverse services）。",
            cn: "这家国际咨询公司提供多样化的企业服务，范围涵盖从品牌设计到财务仲裁。",
            jp: "その国際コンサルティング会社は、ブランディングから財務仲裁に及ぶ（ranging）多様な企業サービスを提供しています。"
        }
    },
    {
        id: 18,
        target: "degree",
        category: "困难",
        stem: "The unexpected surge in foot traffic helped the retail chain expand its regional market share to a significant ________.",
        options: ["degree", "thorough", "essential", "structural"],
        correct: "degree",
        explanations: {
            guide: "高级介词短语中的中心名词语义考核。to a ... degree 是一个固定高阶状语结构，空格处需要填入名词作介词 to 的宾语，选项中仅 degree 为名词。",
            family: "degree (n.程度/学位) | thorough (adj.彻底的) | essential (adj.本质的) | structural (adj.结构的)。",
            details: "to a significant degree 属于高端行话短语，意为“在很大程度上/显著地”，在阅读中常与 significantly 或 substantially 互为同义替换。其余三个干扰项均为 pool 中的高阶形容词。",
            cn: "客流量的意外激增在很大程度上帮助该零售连锁店扩大了其区域市场份额。",
            jp: "来客数の予想外の急増により、その小売チェーンは地域の市場シェアを著しい程度（degree）にまで拡大することができました。"
        }
    }
];