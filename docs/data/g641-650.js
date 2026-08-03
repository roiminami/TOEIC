// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag131-140 Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "fairly",
        pos: "副",
        ipa: "/ˈferli/",
        cn: "相当地，还算；公正地",
        jp: "かなり、なかなか；公平に",
        family: "fair / fairness",
        tips: "阅读理解与日常商务交流高频副词。作程度副词时意为“相当地”（修饰形容词/副词，程度略低于 very），作方式副词时意为“公正地”（fairly treated）。",
        desc: "The task was fairly easy."
    },
    {
        word: "disturb",
        pos: "動",
        ipa: "/dɪˈstɜːrb/",
        cn: "打扰，打扰，干扰",
        jp: "邪魔する、妨害する、乱す",
        family: "disturbance / disturbing / undisturbed",
        tips: "办公秩序、酒店门牌与会议通知高频动词。常见短语：Do Not Disturb（请勿打扰）、disturb the peace（扰乱秩序）。派生名词 disturbance（打扰，干扰）。",
        desc: "Please do not disturb."
    },
    {
        word: "modify",
        pos: "動",
        ipa: "/ˈmɑːdɪfaɪ/",
        cn: "修改，修饰，调整",
        jp: "修正する、変更する、調整する",
        family: "modification / modified",
        tips: "方案变更、产品设计与语法结构极高频动词。同义词为 alter / adjust。常见搭配：modify a contract（修改合同）、modify the schedule（调整日程）。",
        desc: "We need to modify the plan."
    },
    {
        word: "transform",
        pos: "動",
        ipa: "/trænsˈfɔːrm/",
        cn: "转换，彻底改变，改造",
        jp: "変革する、一変させる、変換する",
        family: "transformation / transformative",
        tips: "企业数字化转型、城市更新及品牌重塑核心动词。常见短语：transform the business（转型业务）、digital transformation（数字转型）。",
        desc: "The tech transformed our work."
    },
    {
        word: "eliminate",
        pos: "動",
        ipa: "/ɪˈlɪmɪneɪt/",
        cn: "消除，排除，淘汰",
        jp: "排除する、削減する、取り除く",
        family: "elimination / eliminated",
        tips: "成本控制、风险管理与缺陷剔除核心动词。常见搭配：eliminate errors（消除错误）、eliminate waste（消除浪费）、eliminate risks（排除风险）。",
        desc: "We must eliminate waste."
    },
    {
        word: "removal",
        pos: "名",
        ipa: "/rɪˈmuːvl/",
        cn: "拆除，清除，移走",
        jp: "撤去、除去、移動",
        family: "remove / removable",
        tips: "设施维修、废弃物处理及人手调动高频名词。来动词 remove。常见搭配：garbage removal（垃圾清运）、removal of obstructions（清除障碍物）。",
        desc: "The removal process took time."
    },
    {
        word: "ownership",
        pos: "名",
        ipa: "/ˈoʊnərʃɪp/",
        cn: "所有权，产权",
        jp: "所有権、所有者であること",
        family: "own / owner",
        tips: "资产转移、产权契约与项目主责高频名词。常见搭配：transfer of ownership（所有权转移）、home ownership（房屋所有权）、take ownership of a project（对项目承担主责）。",
        desc: "They claimed property ownership."
    },
    {
        word: "interact",
        pos: "動",
        ipa: "/ˌɪntərˈækt/",
        cn: "互动，相互作用",
        jp: "交流する、相互作用する",
        family: "interaction / interactive",
        tips: "团队协作、用户体验与社交媒体高频动词。常接介词 with：interact with clients（与客户互动/沟通）、interact with software（与软件交互）。",
        desc: "Employees interact with clients."
    },
    {
        word: "sufficient",
        pos: "形",
        ipa: "/səˈfɪʃnt/",
        cn: "足够的，充分的",
        jp: "十分な、足りている",
        family: "sufficiency / sufficiently / insufficient",
        tips: "资金储备、资源配置与证据论证高频形容词。等同于 enough。常见搭配：sufficient funds（足够的资金）、sufficient time（充分的时间）。反义词为 insufficient。",
        desc: "We have sufficient funds."
    },
    {
        word: "eventually",
        pos: "副",
        ipa: "/ɪˈventʃuəli/",
        cn: "最终，终于",
        jp: "結局は、最終的には、ついに",
        family: "eventual",
        tips: "长远规划、长途谈判与项目结局高频副词。等同于 ultimately / in the end。常用于描述历经曲折或长期努力后的最终结果。",
        desc: "Eventually, they reached a deal."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "disturb",
        category: "简单",
        stem: "Please hang the 'Do Not ________' sign on your hotel room door if you wish to sleep late.",
        options: ["disturb", "modify", "eliminate", "interact"],
        correct: "disturb",
        explanations: {
            guide: "动词词义辨析。根据挂在酒店房门上的提示牌以及“想睡懒觉”的语境，选经典表示“请勿打扰”的动词 disturb。",
            family: "disturb (v.打扰) | modify (v.修改) | eliminate (v.消除) | interact (v.互动)。",
            details: "Do Not Disturb（请勿打扰）是酒店住宿与日常服务场景中的标准告示短语。",
            cn: "如果您想睡到很晚，请在酒店房间门上挂上“请勿打扰”的牌子。",
            jp: "遅くまで寝ていたい場合は、ホテルの部屋のドアに「起こさないでください（Do Not Disturb）」の札を提げてください。"
        }
    },
    {
        id: 2,
        target: "sufficient",
        category: "简单",
        stem: "The manager assured us that there were ________ resources in the budget to complete the project.",
        options: ["sufficient", "fairly", "eventually", "removal"],
        correct: "sufficient",
        explanations: {
            guide: "形容词修饰名词。空格修饰名词 resources（资源），结合预算完成项目的语境，表达有“足够的/充分的”资源，选 sufficient。",
            family: "sufficient (adj.足够的) | fairly (adv.相当地) | eventually (adv.最终) | removal (n.拆除)。",
            details: "sufficient resources（足够的资源）是商务企划与预算分析中的常见高频表达。",
            cn: "经理向我们保证，预算里有足够的资源来完成这个项目。",
            jp: "マネージャーは、プロジェクトを完了させるための十分な（sufficient）リソースが予算内にあると私たちに保証しました。"
        }
    },
    {
        id: 3,
        target: "modify",
        category: "简单",
        stem: "Clients can ________ their shipping addresses online before the order enters the delivery phase.",
        options: ["modify", "eliminate", "disturb", "ownership"],
        correct: "modify",
        explanations: {
            guide: "动词词义辨析。位于情态动词 can 之后，作谓语动词。结合宾语 shipping addresses（收货地址），表达在线“修改/更改”地址，选 modify。",
            family: "modify (v.修改) | eliminate (v.消除) | disturb (v.打扰) | ownership (n.所有权)。",
            details: "modify their shipping addresses 意为“修改他们的发货地址”，属于电商与物流服务的核心功能。",
            cn: "客户可以在订单进入配送阶段前，在网上修改其收货地址。",
            jp: "お客様は注文が配送段階に入る前に、オンラインで配送先住所を修正（modify）することができます。"
        }
    },
    {
        id: 4,
        target: "ownership",
        category: "简单",
        stem: "The legal document formally transfers the ________ of the property to the new buyer.",
        options: ["ownership", "removal", "sufficient", "fairly"],
        correct: "ownership",
        explanations: {
            guide: "名词词义辨析。作 transfers 的宾语，由定冠词 the 修饰，结合后文“房产给新买家”，选 ownership（所有权/产权）。",
            family: "ownership (n.所有权) | removal (n.移走) | sufficient (adj.足够的) | fairly (adv.相当地)。",
            details: "transfers the ownership of... 意为“转移……的所有权”，属于不动产买卖与法律合约的标准搭配。",
            cn: "该法律文件正式将该房产的所有权转让给新买家。",
            jp: "その法的文書は、物件の所有権（ownership）を正式に新しい買い手に移转します。"
        }
    },
    {
        id: 5,
        target: "eventually",
        category: "简单",
        stem: "Although the negotiation was lengthy, both parties ________ reached a mutually beneficial agreement.",
        options: ["eventually", "sufficient", "removal", "disturb"],
        correct: "eventually",
        explanations: {
            guide: "副词修饰谓语动词。修饰动词 reached，结合前半句“尽管谈判漫长”，表达“最终/终于”达成了互惠协议，选 eventually。",
            family: "eventually (adv.最终) | sufficient (adj.足够的) | removal (n.拆除) | disturb (v.打扰)。",
            details: "eventually reached an agreement 意为“终于达成协议”，常用于历经磨合的商务谈判总结。",
            cn: "尽管谈判漫长，但双方最终达成了互惠互利的协议。",
            jp: "交渉は長引いたものの、両者は最終的に（eventually）相互に有利な合意に達しました。"
        }
    },
    {
        id: 6,
        target: "fairly",
        category: "简单",
        stem: "The new software is ________ easy to navigate, even for employees with limited computer skills.",
        options: ["fairly", "sufficient", "ownership", "eliminate"],
        correct: "fairly",
        explanations: {
            guide: "副词修饰形容词。空格修饰形容词 easy，表达新软件“相当/还算”容易操作，选程度副词 fairly。",
            family: "fairly (adv.相当地/还算) | sufficient (adj.足够的) | ownership (n.所有权) | eliminate (v.消除)。",
            details: "fairly easy 意为“相当容易”，fairly 在此修饰形容词 easy 表达中等偏上的程度。",
            cn: "这款新软件相当容易操作，即便是计算机技能有限的员工也能上手。",
            jp: "新しいソフトウェアは操作がかなり（fairly）簡単で、コンピュータースキルが限られている従業員でも使いやすいです。"
        }
    },
    {
        id: 7,
        target: "eliminate",
        category: "中等",
        stem: "The new automation system will help ________ manual processing errors in the accounting department.",
        options: ["eliminate", "disturb", "interact", "ownership"],
        correct: "eliminate",
        explanations: {
            guide: "动词词义辨析。位于 help (to) 结构之后，与宾语 manual processing errors（人工处理错误）构成动宾搭配，表达“消除/排除”错误，选 eliminate。",
            family: "eliminate (v.消除) | disturb (v.打扰) | interact (v.互动) | ownership (n.所有权)。",
            details: "eliminate errors 意为“消除错误”，是自动化系统升级与流程优化中的典型用语。",
            cn: "新的自动化系统将有助于消除财务部门的人工处理错误。",
            jp: "新しい自動化システムは、経理部門における手動処理のエラーを削減・排除（eliminate）するのに役立ちます。"
        }
    },
    {
        id: 8,
        target: "transform",
        category: "中等",
        stem: "The CEO hopes to ________ the conventional retail business into a modern e-commerce platform.",
        options: ["transform", "disturb", "eliminate", "removal"],
        correct: "transform",
        explanations: {
            guide: "固定结构与动词辨析。位于不定式符号 to 之后，跟结构 transform A into B（将A彻底改造/转变为B），选 transform。",
            family: "transform (v.转换/彻底改造) | disturb (v.打扰) | eliminate (v.消除) | removal (n.拆除)。",
            details: "transform A into B 是商业转型与战略变革场景中的极高频表达。",
            cn: "首席执行官希望将传统零售业务转型为现代电子商务平台。",
            jp: "CEOは、従来の小売ビジネスを現代的な電子商取引プラットフォームへと変革（transform）することを望んでいます。"
        }
    },
    {
        id: 9,
        target: "removal",
        category: "中等",
        stem: "Road crews scheduled the ________ of fallen trees along the highway for early tomorrow morning.",
        options: ["removal", "ownership", "sufficient", "fairly"],
        correct: "removal",
        explanations: {
            guide: "名词词义辨析。作 scheduled 的宾语，由定冠词 the 修饰，后接 of fallen trees，表达道路施工队安排清除/清理倒下的树木，选 removal。",
            family: "removal (n.清除/移走) | ownership (n.所有权) | sufficient (adj.足够的) | fairly (adv.相当地)。",
            details: "the removal of fallen trees 意为“倒伏树木的清理”。removal 是动词 remove 的对应抽象/动作名词。",
            cn: "施工人员安排在明天清晨清理公路沿线倒下的树木。",
            jp: "道路作業員は、明日の早朝に幹線道路沿いの倒木の撤去（removal）を予定しました。"
        }
    },
    {
        id: 10,
        target: "interact",
        category: "中等",
        stem: "The training workshop teaches sales representatives how to ________ effectively with challenging clients.",
        options: ["interact", "transform", "modify", "eliminate"],
        correct: "interact",
        explanations: {
            guide: "动词搭配辨析。位于 how to 之后，后跟介词 with challenging clients，表达与难缠的客户有效“互动/沟通”，选 interact。",
            family: "interact (v.互动/沟通) | transform (v.转变) | modify (v.修改) | eliminate (v.消除)。",
            details: "interact with clients 意为“与客户沟通互动”，属于销售培训与客情关系管理的核心词汇。",
            cn: "该培训研讨会教授销售代表如何与难缠的客户进行有效沟通与互动。",
            jp: "研修ワークショップでは、営業担当者が対応の難しい顧客と効果的にコミュニケーション/交流（interact）する方法を教えています。"
        }
    },
    {
        id: 11,
        target: "modify",
        category: "中等",
        stem: "Any minor ________ to the architectural design must be approved by the chief structural engineer.",
        options: ["modifications", "modify", "modified", "transform"],
        correct: "modifications",
        explanations: {
            guide: "名词派生与主谓一致。位于限定词 Any 和形容词 minor 之后，作句子的主语，且谓语动词为 must be approved，表达对建筑设计的微调/修改，选复数名词 modifications。",
            family: "modifications (n.修改/微调/复数) | modify (v.修改) | modified (adj.修改过的) | transform (v.转变)。",
            details: "make modifications to... 意为“对……进行修改”。modify 是动词，不能直接放在 Any minor 之后作主语。",
            cn: "对建筑设计的任何微小修改都必须获得首席结构工程师的批准。",
            jp: "建築設計に対するいかなる軽微な修正（modifications）も、主任構造技術者の承認を得なければなりません。"
        }
    },
    {
        id: 12,
        target: "sufficient",
        category: "中等",
        stem: "The report failed to provide ________ detailed data to convince the board to expand the project.",
        options: ["sufficiently", "sufficient", "sufficiency", "fairly"],
        correct: "sufficiently",
        explanations: {
            guide: "副词修饰形容词。空格修饰形容词 detailed（详细的），需要填入副词作状语，表达“足够详细地/充分地”，选 sufficiently。",
            family: "sufficiently (adv.足够地/充分地) | sufficient (adj.足够的) | sufficiency (n.充足) | fairly (adv.相当地)。",
            details: "sufficiently detailed data 表示“足够详细的数据”。sufficiently 是副词，用来修饰后方的形容词 detailed。",
            cn: "该报告未能提供足够详细的数据来说服董事会扩大该项目。",
            jp: "その報告書は、プロジェクト拡大を取締役会に納得させるための十分（sufficiently）詳細なデータを提供できませんでした。"
        }
    },
    {
        id: 13,
        target: "transform",
        category: "困难",
        stem: "The digital ________ of the bank’s customer portal led to a forty percent increase in mobile users.",
        options: ["transformation", "transform", "transformative", "elimination"],
        correct: "transformation",
        explanations: {
            guide: "名词派生与主语中心词。位于定冠词 The 和形容词 digital 之后，作句子的主语中心词，表达银行客户门户网站的“数字转型/改造”，选 transformation。",
            family: "transformation (n.转型/改造) | transform (v.转型) | transformative (adj.变革性的) | elimination (n.消除)。",
            details: "digital transformation（数字转型）是现代金融与 IT 领域极高频的商业术语。",
            cn: "银行客户门户网站的数字化转型使移动端用户增加了百分之四十。",
            jp: "銀行のお客さまポータルのデジタル変革（transformation）により、モバイルユーザーが40%増加しました。"
        }
    },
    {
        id: 14,
        target: "eliminate",
        category: "困难",
        stem: "The strategic plan calls for the total ________ of redundant administrative positions over two years.",
        options: ["elimination", "eliminate", "eliminated", "removal"],
        correct: "elimination",
        explanations: {
            guide: "名词派生与词义精析。位于定冠词 the 和形容词 total 之后，作介词 for 的宾语，表达精简裁撤冗余行政岗位，选抽象动作名词 elimination（裁撤/精简/消除）。",
            family: "elimination (n.裁撤/消除) | eliminate (v.消除) | eliminated (adj.已被消除的) | removal (n.搬走/拆除)。",
            details: "the elimination of positions 专指岗位/编制的“裁撤精简”，比一般的物理搬迁 removal 更精准匹配人力资源的精简语境。",
            cn: "该战略计划要求在两年内彻底裁撤冗余的行政岗位。",
            jp: "戦略計画では、2年間で余剰な管理職ポストを完全に削減・廃止（elimination）することを求めています。"
        }
    },
    {
        id: 15,
        target: "interact",
        category: "困难",
        stem: "The new website features an ________ floor plan that allows buyers to customize their room layouts.",
        options: ["interactive", "interact", "interaction", "eventually"],
        correct: "interactive",
        explanations: {
            guide: "形容词派生与修饰考点。位于不定冠词 an 之后，修饰名词短语 floor plan（户型图），表达“可交互的/平面的”户型图，选形容词 interactive。",
            family: "interactive (adj.交互式的) | interact (v.互动) | interaction (n.互动) | eventually (adv.最终)。",
            details: "an interactive floor plan 指“可交互的户型平面图”，是房地产线上推广与用户体验设计中的常见短语。",
            cn: "新网站提供了一个可交互的户型图，允许买家自定义房间布局。",
            jp: "新しいウェブサイトには、買主が部屋の間取りをカスタマイズできるインタラクティブな（interactive）間取り図が備わっています。"
        }
    },
    {
        id: 16,
        target: "disturb",
        category: "困难",
        stem: "Construction noise during early morning hours caused severe ________ to nearby local residents.",
        options: ["disturbance", "disturb", "disturbing", "elimination"],
        correct: "disturbance",
        explanations: {
            guide: "名词派生词考点。位于形容词 severe 之后，作 caused 的宾语，表达施工噪音对居民造成了严重的“骚扰/打扰”，选名词 disturbance。",
            family: "disturbance (n.打扰/骚扰/干扰) | disturb (v.打扰) | disturbing (adj.令人不安的) | elimination (n.消除)。",
            details: "cause disturbance to sb 意为“对某人造成打扰/干扰”。disturb 是动词，不能直接作 caused 的宾语。",
            cn: "清晨时段的施工噪音对附近的当地居民造成了严重的干扰。",
            jp: "早朝の工事騒音は、近くの住民に深刻な迷惑・騒音（disturbance）を引き起こしました。"
        }
    },
    {
        id: 17,
        target: "fairly",
        category: "困难",
        stem: "The arbitrator worked diligently to treat both negotiating sides as ________ as possible.",
        options: ["fairly", "fair", "fairness", "sufficiently"],
        correct: "fairly",
        explanations: {
            guide: "副词修饰动词与 as... as 结构。位于及物动词 treat 和宾语 both negotiating sides 之后，在 as... as 结构中修饰动作 treat，表达“尽可能公正地”对待双方，选副词 fairly。",
            family: "fairly (adv.公正地/相当地) | fair (adj.公平的) | fairness (n.公平) | sufficiently (adv.充分地)。",
            details: "treat both sides fairly 意为“公正地对待双方”。此处 fairly 为方式副词，用来修饰动词 treat。",
            cn: "仲裁员兢兢业业地工作，以尽可能公正地对待谈判双方。",
            jp: "仲裁人は、交渉の双方を可能な限り公平に（fairly）扱うよう誠実に努めました。"
        }
    },
    {
        id: 18,
        target: "ownership",
        category: "困难",
        stem: "When the firm was privatized, employees were given the opportunity to acquire ________ shares in the enterprise.",
        options: ["ownership", "own", "owner", "modification"],
        correct: "ownership",
        explanations: {
            guide: "复合名词修饰语。修饰名词 shares（股票/股份），表达购买企业“股权/所有权股”，选 ownership 构成 ownership shares。",
            family: "ownership (n.所有权/股权) | own (v./adj.自己的) | owner (n.所有人) | modification (n.修改)。",
            details: "ownership shares 专指企业的“股权/所有权股份”，属于企业改制与员工持股计划（ESOP）高频词。",
            cn: "当该公司被私有化时，员工获得了购买企业股权的意向与机会。",
            jp: "同社が民営化された際、従業員には企業の所有権株式（ownership shares）を取得する機会が与えられました。"
        }
    }
];