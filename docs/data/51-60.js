// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag101-110 Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "endeavor",
        pos: "名/動",
        ipa: "/ɪnˈdevər/",
        cn: "努力，尝试，事业",
        jp: "努力、試み、事業",
        family: "endeavored / endeavoring",
        tips: "商务致辞、欢送会及祝酒词高频词。作名词指“艰苦的尝试或新事业”，作动词指“努力做某事”（endeavor to do sth）。常见短语：business endeavor（商业事业）、artistic endeavor（艺术尝试）。",
        desc: "The endeavor was successful."
    },
    {
        word: "inaugural",
        pos: "形",
        ipa: "/ɪˈnɔːɡjərəl/",
        cn: "就职的，首次的，开幕的",
        jp: "就任の、初の、開会の",
        family: "inaugurate / inauguration",
        tips: "高管就职、新品发布及首届活动高频形容词。核心搭配：inaugural speech/address（就职演说）、inaugural issue（创刊号）、inaugural flight（首航）。来词动词 inaugurate（使就职，开创）。",
        desc: "He gave an inaugural speech."
    },
    {
        word: "sophisticated",
        pos: "形",
        ipa: "/səˈfɪstɪkeɪtɪd/",
        cn: "精密的，尖端的，老练的",
        jp: "精巧な、高度な、洗練された",
        family: "sophistication / sophisticate",
        tips: "高端技术设备、金融模型及市场分析高频形容词。核心搭配：sophisticated technology/system（尖端技术/精密系统）、sophisticated algorithm（复杂精密的算法）。",
        desc: "We use sophisticated equipment."
    },
    {
        word: "anticipated",
        pos: "形/動",
        ipa: "/ænˈtɪsɪpeɪtɪd/",
        cn: "预期的，期待的，受期待的",
        jp: "予期された、待ち望まれた",
        family: "anticipate / anticipation",
        tips: "新产品上市、财报预测及重大活动高频分词形容词。核心短语：eagerly anticipated（热切期待的）、highly anticipated release（备受期待的新品发布）。",
        desc: "The event was highly anticipated."
    },
    {
        word: "logistics",
        pos: "名",
        ipa: "/ləˈdʒɪstɪks/",
        cn: "物流，后勤，组织工作",
        jp: "物流、ロジスティクス、後方支援",
        family: "logistic / logistical / logistically",
        tips: "供应链管理、货物运输及大型会议组织核心名词。常接复数谓语或视作整体处理。核心搭配：logistics department（物流部门）、logistics management（物流管理）。",
        desc: "She works in logistics."
    },
    {
        word: "arises",
        pos: "動",
        ipa: "/əˈraɪzɪz/",
        cn: "出现，发生，产生（arise第三人称单数）",
        jp: "生じる、発生する（ariseの三人称単数形）",
        family: "arise / arose / arisen",
        tips: "危机处理、售后服务及突发状况高频不及物动词。常用于条件从句或通知中。核心搭配：if any problem arises（如果出现任何问题）、a conflict arises（产生冲突）。",
        desc: "A new problem arises."
    },
    {
        word: "unattended",
        pos: "形",
        ipa: "/ˌʌnəˈtendɪd/",
        cn: "无人看管的，无人照管的",
        jp: "放置された、付き添いのない",
        family: "attend / attendance / attendant",
        tips: "机场安全广播、车站告示及公共场所安全守则高频形容词。核心短语：leave luggage unattended（将行李至于无人看管状态）。注意动词 attend 有“照顾/出席”之意。",
        desc: "Do not leave bags unattended."
    },
    {
        word: "involvement",
        pos: "名",
        ipa: "/ɪnˈvɑːlvmənt/",
        cn: "参与，卷入，牵连",
        jp: "関与、参加、巻き込まれること",
        family: "involve / involved / involving",
        tips: "社区公益、项目合作及危机调查高频名词。核心搭配：community involvement（社区参与）、direct involvement in...（直接参与……）。来动词 involve。",
        desc: "Her involvement was helpful."
    },
    {
        word: "deed",
        pos: "名",
        ipa: "/diːd/",
        cn: "契约，证书；行为，事迹",
        jp: "不動産権利証書、証書；行為",
        family: "deeds",
        tips: "房地产交易、法律文书及产权过户高频名词。托业中最常考“房地产产权证书”之意。核心搭配：property deed（房产证/产权契约）、deed of ownership（所有权证书）。",
        desc: "He signed the property deed."
    },
    {
        word: "expiration",
        pos: "名",
        ipa: "/ˌekspəˈreɪʃn/",
        cn: "到期，截止，期满",
        jp: "有効期限、満了、期限切れ",
        family: "expire / expired / expiring",
        tips: "合同到期、证件换发及食品保质期高频名词。核心搭配：expiration date（截止日期/保质期）、upon expiration of the contract（合同到期时）。动词形式为 expire。",
        desc: "Check the expiration date."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "unattended",
        category: "简单",
        stem: "Passengers are reminded not to leave their personal belongings ________ at the airport terminal.",
        options: ["unattended", "inaugural", "expiration", "deed"],
        correct: "unattended",
        explanations: {
            guide: "形容词词义辨析。由 Leave sth + adj. 构成复合宾语结构，结合机场公共安全守则“切勿将个人物品置于……状态”，选 unattended（无人看管的）。",
            family: "unattended (adj.无人看管的) | inaugural (adj.首次的) | expiration (n.到期) | deed (n.契约)。",
            details: "leave personal belongings unattended（将随身物品置于无人看管状态）是机场与车站广播的标准警告用语。",
            cn: "请乘客注意，切勿将随身物品至于无人看管状态。",
            jp: "空港ターミナル内では、手荷物を放置（unattended）しないようご注意ください。"
        }
    },
    {
        id: 2,
        target: "expiration",
        category: "简单",
        stem: "Please make sure to renew your passport before its ________ date to avoid travel delays.",
        options: ["expiration", "involvement", "logistics", "endeavor"],
        correct: "expiration",
        explanations: {
            guide: "名词词义辨析与固定搭配。由名词 date 修饰，构成复合短语，表达在护照“截止/到期”日期之前续签，选 expiration。",
            family: "expiration (n.到期) | involvement (n.参与) | logistics (n.物流) | endeavor (n.努力/事业)。",
            details: "expiration date 意为“到期日/截止日期”，是证件、信用卡及合同续签场景的高频词。",
            cn: "请务必在护照到期日之前办理续签，以避免延误行程。",
            jp: "旅行の遅延を防ぐため、有効期限（expiration）日までにパスポートを更新してください。"
        }
    },
    {
        id: 3,
        target: "logistics",
        category: "简单",
        stem: "The newly appointed director will oversee supply chain management and international ________.",
        options: ["logistics", "arises", "unattended", "deed"],
        correct: "logistics",
        explanations: {
            guide: "名词词义辨析。与 supply chain management（供应链管理）通过 and 并列作 oversee 的宾语，选 logistics（物流）。",
            family: "logistics (n.物流) | arises (v.出现) | unattended (adj.无人看管的) | deed (n.契约)。",
            details: "international logistics 意为“国际物流”，属于企业运营与供应链管理的常见术语。",
            cn: "新上任的总监将监督供应链管理和国际物流业务。",
            jp: "新しく着任したディレクターは、サプライチェーン管理と国際物流（logistics）を統括します。"
        }
    },
    {
        id: 4,
        target: "anticipated",
        category: "简单",
        stem: "The highly ________ software update was finally released to users yesterday morning.",
        options: ["anticipated", "sophisticated", "inaugural", "endeavor"],
        correct: "anticipated",
        explanations: {
            guide: "分词作形容词辨析。由副词 highly 修饰，作定语修饰 software update，结合句意“备受期待的软件更新终于发布”，选 anticipated。",
            family: "anticipated (adj.预期的/期待的) | sophisticated (adj.精密的) | inaugural (adj.首次的) | endeavor (n.事业)。",
            details: "highly anticipated 意为“备受期待的/受瞩目的”，常用于修饰新品发布或软件更新。",
            cn: "备受期待的软件更新终于在昨天上午向用户发布。",
            jp: "非常に期待されていた（anticipated）ソフトウェアアップデートが、昨日の朝ついにユーザーへ公開されました。"
        }
    },
    {
        id: 5,
        target: "inaugural",
        category: "简单",
        stem: "The CEO welcomed all attendees to the company's ________ annual leadership conference in Chicago.",
        options: ["inaugural", "unattended", "expiration", "arises"],
        correct: "inaugural",
        explanations: {
            guide: "形容词词义辨析。修饰名词短语 annual leadership conference，表达这是该公司举办的“首届/开幕的”年度领导力会议，选 inaugural。",
            family: "inaugural (adj.首次的/开幕的) | unattended (adj.无人看管的) | expiration (n.到期) | arises (v.出现)。",
            details: "inaugural conference 指“首届会议/开幕会议”，常用于企业重大历史节点活动。",
            cn: "首席执行官欢迎所有与会者参加公司在芝加哥举办的首届年度领导力会议。",
            jp: "CEOは、シカゴで開催された同社初の（inaugural）年次リーダーシップ会議のすべての参加者を歓迎しました。"
        }
    },
    {
        id: 6,
        target: "deed",
        category: "简单",
        stem: "Before closing the real estate transaction, the legal team must review the property ________ carefully.",
        options: ["deed", "involvement", "logistics", "sophisticated"],
        correct: "deed",
        explanations: {
            guide: "名词词义辨析与固定搭配。作 review 的宾语，由 property 修饰，结合房地产交易语境，选 deed（产权证书/契约）。",
            family: "deed (n.契约/证书) | involvement (n.参与) | logistics (n.物流) | sophisticated (adj.精密的)。",
            details: "property deed 专指房地产的“产权证书/房屋产权契约”，属于不动产买卖的标准表达。",
            cn: "在完成房地产交易之前，法律团队必须仔细审查房产产权证书。",
            jp: "不動産取引を完了する前に、法務チームは不動産権利証書（deed）を注意深く確認しなければなりません。"
        }
    },
    {
        id: 7,
        target: "arises",
        category: "中等",
        stem: "Whenever an unexpected scheduling conflict ________, the project manager quickly adjusts the deadline.",
        options: ["arises", "involvement", "expiration", "unattended"],
        correct: "arises",
        explanations: {
            guide: "主谓一致与不及物动词考点。Whenever 引导的时间状语从句中，主语为单数名词 conflict，需要填入单数谓语动词，表达冲突“出现/发生”，选 arises。",
            family: "arises (v.出现/单数) | involvement (n.参与) | expiration (n.到期) | unattended (adj.无人看管的)。",
            details: "conflict arises 意为“出现冲突/产生矛盾”。arise 为不及物动词，符合句法逻辑。",
            cn: "每当出现意料之外的日程冲突时，项目经理都会迅速调整截止日期。",
            jp: "予期せぬスケジュールの競合が発生する（arises）たびに、プロジェクトマネージャーは迅速に締め切りを調整します。"
        }
    },
    {
        id: 8,
        target: "involvement",
        category: "中等",
        stem: "The success of the fundraising drive was largely due to the active ________ of local business owners.",
        options: ["involvement", "endeavor", "deed", "logistics"],
        correct: "involvement",
        explanations: {
            guide: "名词词义辨析。由形容词 active（积极的）修饰，后接介词 of，表达当地企业主的积极“参与”，选 involvement。",
            family: "involvement (n.参与) | endeavor (n.努力) | deed (n.证书) | logistics (n.物流)。",
            details: "active involvement of... 意为“……的积极参与”，常出现在公益筹款与社区合作报道中。",
            cn: "筹款活动的成功很大程度上归功于当地企业主的积极参与。",
            jp: "資金調達キャンペーンの成功は、地元の事業主の積極的な関与（involvement）によるところが大い me 自身でした。"
        }
    },
    {
        id: 9,
        target: "endeavor",
        category: "中等",
        stem: "The board of directors wished Ms. Vance great success in her new entrepreneurial ________.",
        options: ["endeavor", "inaugural", "unattended", "anticipated"],
        correct: "endeavor",
        explanations: {
            guide: "名词词义辨析。位于形容词 entrepreneurial（创业的）之后，表达祝愿其在新的创业“事业/尝试”中取得成功，选 endeavor。",
            family: "endeavor (n.事业/努力) | inaugural (adj.首次的) | unattended (adj.无人看管的) | anticipated (adj.预期的)。",
            details: "entrepreneurial endeavor 意为“创业事业/商业尝试”，是欢送致词与高管离职祝词的标配短语。",
            cn: "董事会祝愿万斯女士在她新的创业事业中取得巨大成功。",
            jp: "取締役会は、ヴァンス氏の新しい起業への試み（endeavor）における大いなる成功を祈りました。"
        }
    },
    {
        id: 10,
        target: "sophisticated",
        category: "中等",
        stem: "To protect sensitive client data, the cybersecurity firm installed a highly ________ encryption system.",
        options: ["sophisticated", "expiration", "arises", "involvement"],
        correct: "sophisticated",
        explanations: {
            guide: "形容词词义辨析。位于副词 highly 之后，修饰名词 system，表达安装了一套高度“精密的/尖端的”加密系统，选 sophisticated。",
            family: "sophisticated (adj.精密的/尖端的) | expiration (n.到期) | arises (v.出现) | involvement (n.参与)。",
            details: "sophisticated encryption system 意为“精密的加密系统”，属于网络安全领域的常见组合。",
            cn: "为了保护敏感的客户数据，网络安全公司安装了一套高度精密的加密系统。",
            jp: "機密性の高い顧客データを保護するため、サイバーセキュリティ企業は非常に高度な（sophisticated）暗号化システムを導入しました。"
        }
    },
    {
        id: 11,
        target: "expiration",
        category: "中等",
        stem: "Gym memberships will automatically become invalid upon ________ unless renewed prior to the final date.",
        options: ["expiration", "expired", "expire", "expiring"],
        correct: "expiration",
        explanations: {
            guide: "介词后接名词考点。位于介词 upon（在……之时）之后，作介词宾语，需要填入抽象名词 expiration，表达“一到期即失效”。",
            family: "expiration (n.到期) | expired (adj.已过期的) | expire (v.到期) | expiring (v.即期的)。",
            details: "upon expiration 意为“期满时/到期时”，属于协议与会员资格条款中的标准法律行话。",
            cn: "健身房会员资格将在到期时自动失效，除非在最后日期前办理续费。",
            jp: "ジムの会員権は、最終日までに更新されない限り、満了（expiration）時に自動的に無効となります。"
        }
    },
    {
        id: 12,
        target: "logistics",
        category: "中等",
        stem: "Coordinating accommodation and travel for over five hundred delegates presented significant ________ hurdles.",
        options: ["logistical", "logistics", "logistician", "logistically"],
        correct: "logistical",
        explanations: {
            guide: "形容词派生与名词修饰。空格修饰名词 hurdles（障碍/难题），需要填入派生形容词 logistical（后勤上的/物流上的）。",
            family: "logistical (adj.后勤上的/物流上的) | logistics (n.物流) | logistician (n.物流专家) | logistically (adv.后勤上地)。",
            details: "logistical hurdles/challenges 表示“后勤上的困难/组织协调上的障碍”。",
            cn: "为五百多名代表协调住宿和行程带来了重大的后勤难题。",
            jp: "500人以上の代表者の宿泊と移動を調整することは、重大な後方支援上の（logistical）障害となりました。"
        }
    },
    {
        id: 13,
        target: "inaugural",
        category: "困难",
        stem: "The regional government plans to ________ its new high-speed rail line with an official ribbon-cutting ceremony.",
        options: ["inaugurate", "inaugural", "inauguration", "unattended"],
        correct: "inaugurate",
        explanations: {
            guide: "动词派生与不定式结构。空格跟在不定式符号 to 之后，作 plans 的宾语补足成分，需要填入动词原形 inaugurate（为……举行开幕/开通仪式）。",
            family: "inaugurate (v.开创/举行开幕式) | inaugural (adj.首次的) | inauguration (n.就职典礼) | unattended (adj.无人看管的)。",
            details: "inaugurate a rail line 意为“为铁路线举行开通剪彩仪式”。inaugural 是形容词，不能直接作动词。",
            cn: "地方政府计划通过正式的剪彩仪式为新的高铁线路举行开通典礼。",
            jp: "地方政府は、公式なテープカット式典とともに新しい高速鉄道線を開業する（inaugurate）ことを計画しています。"
        }
    },
    {
        id: 14,
        target: "arises",
        category: "困难",
        stem: "Any operational disputes ________ from non-compliance with environmental standards will be thoroughly investigated.",
        options: ["arising", "arises", "arise", "arisen"],
        correct: "arising",
        explanations: {
            guide: "分词作后置定语。主句已有谓语动词 will be investigated，空格处引导后置定语修饰复数主语 disputes。表达“由……产生的”争议，选现在分词 arising。",
            family: "arising (pres-p.产生的/源于) | arises (v.产生/单数) | arise (v.产生/原形) | arisen (past-p.已产生的)。",
            details: "disputes arising from... 意为“由……引起的争议”。arising 作为现在分词后置修饰名词，表示主动和进行逻辑。",
            cn: "因未遵守环保标准而产生的任何运营争议都将受到彻底调查。",
            jp: "環境基準の不遵守から生じる（arising）いかなる業務上の紛争も、徹底的に調査されます。"
        }
    },
    {
        id: 15,
        target: "involvement",
        category: "困难",
        stem: "The executive producer urged all team leaders to keep their staff fully ________ in the decision-making process.",
        options: ["involved", "involvement", "involve", "involving"],
        correct: "involved",
        explanations: {
            guide: "形容词作宾语补足语。位于结构 keep + staff（宾语）+ fully（副词）之后，要求填入形容词 involved 作宾语补足语，表达“使员工充分参与”。",
            family: "involved (adj.参与的/卷入的) | involvement (n.参与) | involve (v.使卷入) | involving (prep.包含)。",
            details: "keep sb involved in sth 意为“让某人参与某事”。involvement 是名词，不能在 keep sb 后充当形容词性宾补。",
            cn: "执行制作人鼓励所有团队领导让员工充分参与到决策过程中。",
            jp: "エグゼクティブプロデューサーは、すべてのチームリーダーに対し、意思決定プロセスにスタッフを十分に配慮・関与させる（involved）よう促しました。"
        }
    },
    {
        id: 16,
        target: "sophisticated",
        category: "困难",
        stem: "The technical ________ of the financial modeling tool impressed even the most experienced auditors.",
        options: ["sophistication", "sophisticated", "sophisticate", "sophisticatedly"],
        correct: "sophistication",
        explanations: {
            guide: "名词派生词考点。位于定冠词 The 和形容词 technical 之后，作句子的主语，需要填入不可数名词 sophistication（精密性/复杂性）。",
            family: "sophistication (n.精密性/洗练) | sophisticated (adj.精密的) | sophisticate (v.使复杂) | sophisticatedly (adv.老练地)。",
            details: "technical sophistication 意为“技术精密性”。sophisticated 是形容词，无法在此充当主语中心词。",
            cn: "该财务建模工具的技术精密性给最经验丰富的审计师都留下了深刻印象。",
            jp: "その財務モデリングツールの技術的な精巧さ（sophistication）は、最も経験豊富な監査人さえも感銘させました。"
        }
    },
    {
        id: 17,
        target: "endeavor",
        category: "困难",
        stem: "Despite facing strict budget limits, the engineering team ________ to complete the bridge repairs on time.",
        options: ["endeavored", "endeavor", "endeavoring", "involvement"],
        correct: "endeavored",
        explanations: {
            guide: "动词时态与主谓结构。主句缺少谓语动词，根据句意表达工程团队“努力”按时完成修缮，结合上下文需要填入过去时态谓语动词 endeavored。",
            family: "endeavored (v.努力/过去式) | endeavor (n./v.努力) | endeavoring (pres-p.努力中) | involvement (n.参与)。",
            details: "endeavor to do sth 意为“努力做某事”。此处作为主句谓语动词，与动词不定式 to complete 结合。",
            cn: "尽管面临严格的预算限制，工程团队仍努力按时完成了桥梁修缮工作。",
            jp: "厳しい予算制限に直面したにもかかわらず、エンジニアリングチームは橋の補修を予定通りに完了するよう努めました（endeavored）。"
        }
    },
    {
        id: 18,
        target: "anticipated",
        category: "困难",
        stem: "In ________ of higher holiday shopping demand, the retailer expanded its warehouse staff by twenty percent.",
        options: ["anticipation", "anticipated", "anticipate", "anticipating"],
        correct: "anticipation",
        explanations: {
            guide: "固定介词短语考点。介词 In 之后，介词 of 之前，要求填入名词构成固定结构 In anticipation of...（期盼着……/预料到……）。",
            family: "anticipation (n.预料/期望) | anticipated (adj.预期的) | anticipate (v.预料) | anticipating (pres-p.预料中)。",
            details: "In anticipation of sth 属于高级商务写作常考短语，意为“预料到某事/鉴于对某事的预期”。",
            cn: "预料到假期购物需求会增加，该零售商将仓库员工扩充了百分之二十。",
            jp: "休日ショッピングの需要増を見込んで（In anticipation of）、その小売業者は倉庫スタッフを20%増员しました。"
        }
    }
];