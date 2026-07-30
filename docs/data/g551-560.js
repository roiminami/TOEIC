// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data131-140.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "internal",
        pos: "形",
        ipa: "/ɪnˈtɜːrnl/",
        cn: "内部的，国内的",
        jp: "内部の、国内の",
        family: "internally / internalize",
        tips: "企业管理与沟通高频词。常考搭配：internal audit（内部审计）、internal memo（内部备忘录）、internal communications（内部沟通）。反义词：external。",
        desc: "The memo was sent to all internal staff."
    },
    {
        word: "loyal",
        pos: "形",
        ipa: "/ˈlɔɪəl/",
        cn: "忠诚的，忠实的",
        jp: "忠实な、忠诚な",
        family: "loyalty / loyally",
        tips: "客户关系与营销极高频词！常考搭配：loyal customer（忠实客户）、customer loyalty program（客户忠诚度计划）。",
        desc: "We reward our loyal customers with special discounts."
    },
    {
        word: "cookware",
        pos: "名",
        ipa: "/ˈkʊkwer/",
        cn: "厨具，烹饪器具（不可数）",
        jp: "調理器具（不可算）",
        family: "cook / cooking / cooktop",
        tips: "托业 Part 1/Part 7 零售商品考点。集合不可数名词（如 stainless-steel cookware 不锈钢厨具），指平底锅、炖锅等。注意不能加 s。",
        desc: "The store offers high-quality nonstick cookware."
    },
    {
        word: "boost",
        pos: "動/名",
        ipa: "/buːst/",
        cn: "促进，推动，提高；推动力",
        jp: "高める、促進する；押し上げ",
        family: "booster / boosting",
        tips: "业绩与销量高频词！等同于 increase / enhance。常考：boost sales/revenue（促进销售/提升收入）、boost employee morale（提高员工士气）。",
        desc: "The marketing campaign helped boost sales."
    },
    {
        word: "knowledgeable",
        pos: "形",
        ipa: "/ˈnɑːlɪdʒəbl/",
        cn: "知识渊博的，精通的",
        jp: "知識が豊富な、精通している",
        family: "know / knowledge / knowledgably",
        tips: "员工评价与客服的高频形容词。常考：knowledgeable staff/salesperson（知识渊博/精通业务的员工）。常见搭配：be knowledgeable about...",
        desc: "Our staff is highly knowledgeable about the products."
    },
    {
        word: "committed",
        pos: "形",
        ipa: "/kəˈmɪtɪd/",
        cn: "全心全意的，尽职尽责的；承诺的",
        jp: "献身的な、コミットした",
        family: "commit / commitment / committing",
        tips: "企业宗旨与个人评价核心词。最高频句型：be committed to doing sth（致力于做某事，注意 to 为介词后接动名词）。",
        desc: "We are committed to providing top quality service."
    },
    {
        word: "commission",
        pos: "名/動",
        ipa: "/kəˈmɪʃn/",
        cn: "佣金，提成；委员会；委任",
        jp: "歩合、手数料；委員会；委任する",
        family: "commissioner / commissioned / commissioning",
        tips: "双重高频考点：1. 销售薪酬：sales commission（销售提成/佣金）；2. 机构组织：planning commission（规划委员会）。",
        desc: "Sales representatives earn a 10% commission."
    },
    {
        word: "timeline",
        pos: "名",
        ipa: "/ˈtaɪmlaɪn/",
        cn: "时间表，进度安排",
        jp: "タイムライン、予定表",
        family: "time / timeframe / schedule",
        tips: "项目管理核心词！常考搭配：project timeline（项目时间表）、proposed timeline（拟议进度表）、ahead of/behind timeline（提前/落后于进度）。",
        desc: "Please refer to the project timeline."
    },
    {
        word: "souvenir",
        pos: "名",
        ipa: "/ˌsuːvəˈnɪr/",
        cn: "纪念品，纪念物",
        jp: "お土産、記念品",
        family: "souvenir shop / souvenir photo",
        tips: "旅游与展会活动场景词。常考：souvenir shop（纪念品商店）、buy souvenirs（购买纪念品）、complimentary souvenir（赠送的纪念品）。",
        desc: "She bought a souvenir at the gift shop."
    },
    {
        word: "exclusive",
        pos: "形/名",
        ipa: "/ɪkˈskluːsɪv/",
        cn: "独家专有的，排他的，高档的；独家新闻",
        jp: "独占的な、限定の、高級な",
        family: "exclude / exclusion / exclusively",
        tips: "商业特权与合同高频词。常考：exclusive offer/deal（独家优惠）、exclusive rights（独家经营/代理权）、exclusive access（专属权限）。副词 exclusively 极高频。",
        desc: "Members enjoy exclusive discounts on all items."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "loyal",
        category: "简单",
        stem: "The retail store established a new rewards program to express gratitude to its ________ customers.",
        options: ["loyal", "loyalty", "souvenir", "commission"],
        correct: "loyal",
        explanations: {
            guide: "形容词作前置定语。________ customers 结构中需要形容词修饰复数名词 customers，表达“忠实的/忠诚的”客户，选 loyal。",
            family: "loyal (adj.忠诚的) | loyalty (n.忠诚) | souvenir (n.纪念品) | commission (n.佣金)。",
            details: "loyal customers（忠实客户）属于托业客户关系与营销场景的标准表达。loyalty 是名词，不能在此作前置定语。",
            cn: "该零售店建立了一项新的奖励计划，以向其忠实客户表达感谢。",
            jp: "その小売店は、忠実な（loyal）顧客に感謝の意を表すための新しい特典プログラムを設立しました。"
        }
    },
    {
        id: 2,
        target: "boost",
        category: "简单",
        stem: "The strategic promotional campaign was successfully launched to ________ third-quarter sales figures.",
        options: ["boost", "booster", "internal", "timeline"],
        correct: "boost",
        explanations: {
            guide: "动词不定式结构。was launched to 后面需要接动词原形，表达去“提升/推动”销售额，选 boost。",
            family: "boost (v.提升) | booster (n.推动器) | internal (adj.内部的) | timeline (n.时间表)。",
            details: "to 为不定式符号，后面必须接动词原形 boost。booster 是名词，不能跟在不定式符号之后作谓语动词。",
            cn: "成功发起了这项战略宣传活动，以提升第三季度的销售数据。",
            jp: "第3四半期の売上数字を引き上げる（boost）ため、戦略的なプロモーションキャンペーンが成功裏に開始されました。"
        }
    },
    {
        id: 3,
        target: "souvenir",
        category: "简单",
        stem: "Tourists visiting the historic castle can purchase a unique ________ at the museum gift shop.",
        options: ["souvenir", "cookware", "commission", "boost"],
        correct: "souvenir",
        explanations: {
            guide: "不定冠词与形容词后的单数名词。a unique ________ 结构中需要单数可数名词，表达购买独特的“纪念品”，选 souvenir。",
            family: "souvenir (n.纪念品) | cookware (n.厨具) | commission (n.佣金) | boost (v./n.提升)。",
            details: "a unique souvenir 是旅游与零售场景的高频词组。cookware 是不可数名词，不能受不定冠词 a 修饰。",
            cn: "参观这座历史悠久城堡的游客可以在博物馆礼品店购买独特的纪念品。",
            jp: "歴史的な城を訪れる観光客は、博物館のギフトショップでユニークなお土産（souvenir）を購入できます。"
        }
    },
    {
        id: 4,
        target: "committed",
        category: "简单",
        stem: "Our customer service team is fully ________ to resolving all client inquiries within twenty-four hours.",
        options: ["committed", "commitment", "knowledgeable", "exclusive"],
        correct: "committed",
        explanations: {
            guide: "固定表述与系表结构。is fully ________ to doing sth 是托业最高频固定搭配 be committed to doing sth（致力于做某事），选 committed。",
            family: "committed (adj.致力于的) | commitment (n.承诺/奉献) | knowledgeable (adj.渊博的) | exclusive (adj.独家的)。",
            details: "be committed to 后面接动名词（resolving）。commitment 是名词，不能直接接在系动词 is 和副词 fully 之后作表语形容词。",
            cn: "我们的客户服务团队全力致力于在 24 小时内解决所有客户咨询。",
            jp: "当社のカスタマーサービスチームは、24時間以内にすべての顧客の問い合わせを解決することに全力を尽くしています（is committed to）。"
        }
    },
    {
        id: 5,
        target: "timeline",
        category: "简单",
        stem: "The lead architect presented a revised project ________ during the weekly progress meeting.",
        options: ["timeline", "internal", "loyal", "knowledgeable"],
        correct: "timeline",
        explanations: {
            guide: "名词词义辨析与项目管理。presented a revised project ________ 表达展示了一份修改后的项目“时间表/进度表”，选 timeline。",
            family: "timeline (n.时间表) | internal (adj.内部的) | loyal (adj.忠诚的) | knowledgeable (adj.渊博的)。",
            details: "project timeline（项目时间表）是项目管理的核心词组。internal、loyal、knowledgeable 均为形容词，无法充当动词 presented 的宾语中心词。",
            cn: "主设计师在每周进度会议上展示了一份修改后的项目时间表。",
            jp: "主任建築家は、週例進捗会議で改訂されたプロジェクトのタイムライン（timeline）を提示しました。"
        }
    },
    {
        id: 6,
        target: "knowledgeable",
        category: "简单",
        stem: "Sales consultants at the electronics store are extremely ________ about the latest digital home products.",
        options: ["knowledgeable", "knowledge", "cookware", "exclusive"],
        correct: "knowledgeable",
        explanations: {
            guide: "系动词加副词后的形容词表语。are extremely ________ 结构中，副词 extremely 后面需要接形容词作表语，表达对产品“精通的/知识渊博的”，选 knowledgeable。",
            family: "knowledgeable (adj.精通的) | knowledge (n.知识) | cookware (n.厨具) | exclusive (adj.独家的)。",
            details: "be knowledgeable about... 意为“精通/了解……”。knowledge 是名词，不能在系动词 are 和副词 extremely 之后作表语。",
            cn: "电子产品专卖店的销售顾问对最新的数码家居产品非常精通。",
            jp: "家電量販店の販売コンサルタントは、最新のデジタル家電製品について非常に知識が豊富です（knowledgeable）。"
        }
    },
    {
        id: 7,
        target: "cookware",
        category: "中等",
        stem: "The home goods store launched a sale on premium nonstick ________ to attract culinary enthusiasts.",
        options: ["cookware", "loyal", "timeline", "commission"],
        correct: "cookware",
        explanations: {
            guide: "集合不可数名词作宾语。premium nonstick ________ 表达高质量不粘“厨具”，选集合名词 cookware。",
            family: "cookware (n.厨具/不可数) | loyal (adj.忠诚的) | timeline (n.时间表) | commission (n.佣金)。",
            details: "cookware 指烹饪用器具总称，是不可数名词，经常与 nonstick、stainless-steel 搭配。其他选项语义不符。",
            cn: "家居用品店发起了优质不粘厨具的促销活动，以吸引烹饪爱好者。",
            jp: "ホーム用品店は、料理愛好家を引きつけるために高品質のノンスティック調理器具（cookware）のセールを開始しました。"
        }
    },
    {
        id: 8,
        target: "internal",
        category: "中等",
        stem: "All employees received an ________ memo detailing updated policies regarding remote work equipment.",
        options: ["internal", "internally", "souvenir", "boost"],
        correct: "internal",
        explanations: {
            guide: "形容词作前置定语。an ________ memo 结构中，需要形容词修饰名词 memo，表达“内部”备忘录，选 internal。",
            family: "internal (adj.内部的) | internally (adv.内部地) | souvenir (n.纪念品) | boost (v.提升)。",
            details: "internal memo（公司内部备忘录）是办公沟通中的高频专属词组。internally 是副词，不能修饰名词 memo。",
            cn: "所有员工都收到了一份内部备忘录，详细说明了有关远程办公设备的最新政策。",
            jp: "すべての従業員は、在宅勤務機器に関する更新されたポリシーの詳細を記載した社内（internal）メモを受け取りました。"
        }
    },
    {
        id: 9,
        target: "commission",
        category: "中等",
        stem: "Sales agents receive a monthly base salary in addition to a generous ________ for every vehicle sold.",
        options: ["commission", "committed", "knowledgeable", "cookware"],
        correct: "commission",
        explanations: {
            guide: "薪酬场景名词。a generous ________ 结构中需要接名词，表达对售出车辆发放丰厚的“提成/佣金”，选 commission。",
            family: "commission (n.佣金/提成) | committed (adj.尽职的) | knowledgeable (adj.精通的) | cookware (n.厨具)。",
            details: "receive a commission（获得提成/佣金）属于销售与薪酬福利场景的标准表达。committed 是形容词，不能充当冠词 a 的宾语。",
            cn: "销售代理除了固定的月基本工资外，每售出一辆汽车还能获得丰厚的提成。",
            jp: "販売代理店は、売却された車両ごとに手厚い歩合給（commission）に加えて、月額の基本給を受け取ります。"
        }
    },
    {
        id: 10,
        target: "exclusive",
        category: "中等",
        stem: "VIP club members are granted ________ access to the executive lounge and priority check-in services.",
        options: ["exclusive", "exclusively", "internal", "committed"],
        correct: "exclusive",
        explanations: {
            guide: "形容词修饰名词。________ access 结构中，需要形容词修饰名词 access，表达“专属的/独家的”使用权限，选 exclusive。",
            family: "exclusive (adj.独家的/专属的) | exclusively (adv.专门地) | internal (adj.内部的) | committed (adj.尽职的)。",
            details: "exclusive access（专属权限/独家通行）属于会员权益与酒店礼宾场景的高频考点。exclusively 是副词，不能充当前置定语。",
            cn: "VIP 俱乐部会员享有进入行政休息室的专属权限和优先办理入住服务。",
            jp: "VIPクラブ会員には、エグゼクティブラウンジへの独占的な（exclusive）アクセスと優先チェックインサービスが与えられます。"
        }
    },
    {
        id: 11,
        target: "loyal",
        category: "中等",
        stem: "Customer ________ is crucial for long-term business success, which is why we invest heavily in post-purchase support.",
        options: ["loyalty", "loyal", "souvenir", "boost"],
        correct: "loyalty",
        explanations: {
            guide: "名词主语中心词。Customer ________ 位于句首作主语，需要名词形式 loyalty 构成 Customer loyalty（客户忠诚度）。",
            family: "loyalty (n.忠诚度) | loyal (adj.忠诚的) | souvenir (n.纪念品) | boost (v.提升)。",
            details: "Customer loyalty（客户忠诚度）是商业管理与市场营销场景的核心概念。loyal 是形容词，不能在名词 Customer 后作句子的主语中心词。",
            cn: "客户忠诚度对于企业的长期成功至关重要，这就是我们在售后支持方面投入巨资的原因。",
            jp: "顧客の忠実さ（loyalty）はビジネスの長期的な成功に不可欠であり、だからこそ当社はアフターサポートに多額の投資をしています。"
        }
    },
    {
        id: 12,
        target: "exclusive",
        category: "中等",
        stem: "The high-end boutique caters ________ to high-net-worth clients seeking custom-made luxury apparel.",
        options: ["exclusively", "exclusive", "knowledgeable", "committed"],
        correct: "exclusively",
        explanations: {
            guide: "副词修饰动词短语。caters ________ to... 结构中，需要副词修饰不及物动词 caters，exclusively to 意为“专门面向/独家服务于”，选 exclusively。",
            family: "exclusively (adv.专门地/独家地) | exclusive (adj.独家的) | knowledgeable (adj.精通的) | committed (adj.尽职的)。",
            details: "cater exclusively to...（专门面向……服务）属于高级商务阅读中的常见句型。exclusive 是形容词，不能直接修饰动词 caters。",
            cn: "这家高端精品店专门服务于寻求定制奢华服饰的高净值客户。",
            jp: "その高級ブティックは、カスタムメイドの高級衣料を求める高額所得顧客に専門に（exclusively）対応しています。"
        }
    },
    {
        id: 13,
        target: "committed",
        category: "困难",
        stem: "The executive board demonstrated a firm ________ to environmental sustainability by phasing out single-use plastics.",
        options: ["commitment", "committed", "internal", "commission"],
        correct: "commitment",
        explanations: {
            guide: "形容词修饰的名词宾语。demonstrated a firm ________ 中，形容词 firm（坚定的）后面需要接名词，选 commitment（承诺/奉献）。",
            family: "commitment (n.承诺/坚定态度) | committed (adj.尽职的) | internal (adj.内部的) | commission (n.佣金)。",
            details: "demonstrate a commitment to... 意为“展现对……的坚定承诺”。committed 是形容词，不能作动词 demonstrated 的宾语中心词。",
            cn: "执行董事会通过逐步淘汰一次性塑料，展现了对环境可持续性的坚定承诺。",
            jp: "取締役会は、使い捨てプラスチックを段階的に廃止することにより、環境の持続可能性への強いコミットメント（commitment）を示しました。"
        }
    },
    {
        id: 14,
        target: "knowledgeable",
        category: "困难",
        stem: "The firm was selected because of the profound ________ displayed by its senior financial analysts during the pitch.",
        options: ["knowledge", "knowledgeable", "souvenir", "timeline"],
        correct: "knowledge",
        explanations: {
            guide: "定冠词与形容词后的名词中心语。the profound ________ 结构中，形容词 profound（深厚的/渊博的）后面需要接不可数名词 knowledge（知识/专业学识）。",
            family: "knowledge (n.知识/专业度) | knowledgeable (adj.精通的) | souvenir (n.纪念品) | timeline (n.时间表)。",
            details: "the profound knowledge displayed... 意为“所展现出的深厚专业知识”。knowledgeable 是形容词，不能接在形容词 profound 之后作名词中心词。",
            cn: "该公司之所以入选，是因为其高级财务分析师在竞标过程中展示了深厚的专业知识。",
            jp: "その会社が選ばれたのは、プレゼンテーション中に上級財務アナリストが見せた深い専門知識（knowledge）のためでした。"
        }
    },
    {
        id: 15,
        target: "boost",
        category: "困难",
        stem: "Industry experts predict that the recent reduction in import tariffs will provide a welcome ________ to local manufacturing.",
        options: ["boost", "booster", "committed", "cookware"],
        correct: "boost",
        explanations: {
            guide: "名词短语与固定搭配。provide a welcome ________ 中需要接名词，provide a boost to... 是托业极高频短语，意为“为……注入动力/提供推动”。",
            family: "boost (n./v.推动/提升) | booster (n.促进剂) | committed (adj.尽职的) | cookware (n.厨具)。",
            details: "provide a boost to... 属于经济与产业新闻的高阶固定搭配。booster 常指物理助推器，不如 boost 契合经济层面的“推动力”语义。",
            cn: "行业专家预测，近期降低进口关税将为本地制造业注入一股受欢迎的推动力。",
            jp: "業界の専門家は、最近の輸入関税の引き下げが地元の製造業に歓迎すべき追い風（boost）を与えると予測しています。"
        }
    },
    {
        id: 16,
        target: "commission",
        category: "困难",
        stem: "The local municipal ________ voted unanimously to approve the funding for the new community park construction.",
        options: ["commission", "commissioned", "exclusive", "loyal"],
        correct: "commission",
        explanations: {
            guide: "专有名词与机构选择。The local municipal ________ 指“当地市政委员会”，选机构名词 commission。",
            family: "commission (n.委员会/佣金) | commissioned (v-ed形式) | exclusive (adj.独家的) | loyal (adj.忠诚的)。",
            details: "municipal commission（市政委员会）指地方政府决策机构。commissioned 是过去分词，不能作为主语名词中心词。",
            cn: "当地市政委员会一致投票通过了为新社区公园建设提供资金的决定。",
            jp: "地元の市政委員会（commission）は、新しいコミュニティ公園建設のための資金調達を承認することを満場一致で可決しました。"
        }
    },
    {
        id: 17,
        target: "internal",
        category: "困难",
        stem: "To maintain full regulatory compliance, financial institutions are required to conduct ________ audits at least twice a year.",
        options: ["internal", "internally", "souvenir", "boost"],
        correct: "internal",
        explanations: {
            guide: "形容词修饰复数名词。conduct ________ audits 中，需要形容词修饰复数名词 audits，表达“进行内部审计”，选 internal。",
            family: "internal (adj.内部的) | internally (adv.内部地) | souvenir (n.纪念品) | boost (n./v.提升)。",
            details: "internal audit（内部审计）是托业金融与合规场景中最核心的专属词组。internally 为副词，不能充当 audits 的前置修饰语。",
            cn: "为保持完全符合监管规定，金融机构被要求每年至少进行两次内部审计。",
            jp: "規制への完全な準拠を維持するため、金融機関は少なくとも年に2回、内部（internal）監査を実施することが義務付けられています。"
        }
    },
    {
        id: 18,
        target: "timeline",
        category: "困难",
        stem: "Unforeseen supply chain disruptions have forced the contractor to adjust the construction ________ for the skyscraper.",
        options: ["timeline", "internal", "committed", "exclusive"],
        correct: "timeline",
        explanations: {
            guide: "动词后的宾语名词。adjust the construction ________ 表达“调整建设进度表/时间表”，选 timeline。",
            family: "timeline (n.时间表) | internal (adj.内部的) | committed (adj.尽职的) | exclusive (adj.独家的)。",
            details: "construction timeline（施工时间表/工程进度）属于建筑与工程管理的核心组合。其他选项均为形容词，不能充当动词 adjust 的宾语。",
            cn: "不可预见的供应链中断迫使承包商调整了摩天大楼的施工时间表。",
            jp: "予期せぬサプライチェーンの混乱により、請負業者は超高層ビルの建設タイムライン（timeline）を調整せざるを得なくなりました。"
        }
    }
];