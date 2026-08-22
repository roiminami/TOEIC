// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data721-730.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "modest",
        pos: "形",
        ipa: "/ˈmɑːdɪst/",
        cn: "适度的，微小的，适中的；谦虚的",
        jp: "控えめな、わずかな、適度な；謙虚な",
        family: "modestly / modesty",
        tips: "财报与商业指标高频：modest growth/increase/gain（小幅增长/适度增益），modest budget/price（适度的预算/平实的价格）。",
        desc: "Sales showed a modest increase."
    },
    {
        word: "accumulate",
        pos: "動",
        ipa: "/əˈkjuːmjəleɪt/",
        cn: "积累，积聚，堆积",
        jp: "蓄積する、積み上げる、たまる",
        family: "accumulation / accumulative / accumulated",
        tips: "会员体系与资产高频：accumulate points/wealth/experience（积累积分/财富/经验），accumulate debt（积累债务）。",
        desc: "Members accumulate reward points."
    },
    {
        word: "consent",
        pos: "名/動",
        ipa: "/kənˈsent/",
        cn: "同意，赞同，准许；同意",
        jp: "同意、承諾、許可；同意する",
        family: "consensual / consenting / consented",
        tips: "法务与客户隐私高频搭配：prior written consent（事先书面同意），consent to sth（同意某事），obtain consent（获得同意）。",
        desc: "Obtain written consent beforehand."
    },
    {
        word: "optimistic",
        pos: "形",
        ipa: "/ˌɑːptɪˈmɪstɪk/",
        cn: "乐观的，抱有希望的",
        jp: "楽観的な、前向きな",
        family: "optimism / optimistically / optimist",
        tips: "市场展望与分析高频搭配：remain optimistic about sth（对……保持乐观），optimistic forecast/outlook（乐观的预测/展望）。",
        desc: "Analysts remain optimistic about growth."
    },
    {
        word: "intensive",
        pos: "形",
        ipa: "/ɪnˈtensɪv/",
        cn: "强化的，密集的，集约的",
        jp: "集中的な、徹底的な、集約的な",
        family: "intensity / intensify / intensively",
        tips: "培训与管理高频：intensive training course（强化培训课程），labor-intensive / capital-intensive（劳动密集型/资本密集型）。",
        desc: "She completed an intensive course."
    },
    {
        word: "endeavor",
        pos: "名/動",
        ipa: "/ɪnˈdevər/",
        cn: "努力，尽力；尝试，努力做",
        jp: "努力、試み、事業；努力する",
        family: "endeavors / endeavored / endeavoring",
        tips: "商务沟通与承诺高频搭配：make every endeavor to do sth（竭尽全力做某事），endeavor to resolve inquiries（努力解决问询）。",
        desc: "We make every endeavor to satisfy clients."
    },
    {
        word: "adhere",
        pos: "動",
        ipa: "/ədˈhɪr/",
        cn: "遵守，坚持；黏附",
        jp: "（規則・方針を）遵守する、忠実に従う；付着する",
        family: "adherence / adherent / adhering / adhesive",
        tips: "合规与制度高频搭配：adhere to policies/guidelines/regulations（遵守规章/准则/法规），strict adherence（严格遵守）。",
        desc: "Employees must adhere to safety rules."
    },
    {
        word: "dispatch",
        pos: "動/名",
        ipa: "/dɪˈspætʃ/",
        cn: "派遣，发送，调度；特急件，发出",
        jp: "派遣する、発送する；発送、特報",
        family: "dispatched / dispatching / dispatcher / dispatches",
        tips: "物流仓储与售后高频：dispatch technicians/couriers（派遣技术人员/信使），prompt dispatch of orders（订单迅速发出）。",
        desc: "We will dispatch the order today."
    },
    {
        word: "ample",
        pos: "形",
        ipa: "/ˈæmpl/",
        cn: "充裕的，充足的，宽敞的",
        jp: "十分な、豊富な、広々とした",
        family: "amply / amplify / amplitude",
        tips: "设施与资源高频：ample parking space（充裕的停车位），ample time/resources（充裕的时间/资源）。",
        desc: "The facility offers ample parking space."
    },
    {
        word: "protocol",
        pos: "名",
        ipa: "/ˈproʊtəkɑːl/",
        cn: "规程，协议，行为准则，礼仪",
        jp: "規約、手順、プロトコル、行動規範",
        family: "protocols / protocolled",
        tips: "安全与合规高频：safety/security protocol（安全/安保规程），standard emergency protocol（标准应急规程）。",
        desc: "Follow the standard security protocol."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "adhere",
        category: "简单",
        stem: "All laboratory technicians must strictly ________ to standard safety guidelines while handling hazardous chemical substances.",
        options: ["adhere", "consent", "dispatch", "modest"],
        correct: "adhere",
        explanations: {
            guide: "规章合规动词搭配考点。must strictly 后面接动词原形，并与后文介词 to 搭配，表达“严格遵守安全准则”，选 adhere。",
            family: "adhere (v.遵守/坚持) | consent (v.同意) | dispatch (v.派遣) | modest (adj.适度的)。",
            details: "adhere to guidelines 属于托业最高频固定搭配之一，意为遵守指导准则。consent to 意为同意，dispatch（派遣）不接 to 表达遵守规定。",
            cn: "所有实验室技术人员在处理危险化学物质时都必须严格遵守标准安全准则。",
            jp: "すべての実験室技術者は、危険な化学物質を取り扱う際、標準的な安全ガイドラインを厳格に遵守（adhere to）しなければなりません。"
        }
    },
    {
        id: 2,
        target: "consent",
        category: "简单",
        stem: "Medical researchers must obtain written ________ from participants before enrolling them in clinical trials.",
        options: ["consent", "endeavor", "protocol", "dispatch"],
        correct: "consent",
        explanations: {
            guide: "法务合规名词考点。obtain written ________ 结合在临床试验招募前获得受试者的书面准许，选 consent（同意/知情同意书）。",
            family: "consent (n.同意/准许) | endeavor (n.努力) | protocol (n.规程) | dispatch (n.派遣)。",
            details: "written consent 意为书面同意。endeavor（努力）、protocol（规程）均无法与 obtain written 搭配指代受试者签署的许可凭据。",
            cn: "医学研究人员在将参与者纳入临床试验之前，必须获得他们的书面同意。",
            jp: "医学研究者は、参加者を臨床試験に登録する前に、参加者から書面による同意（consent）を得なければなりません。"
        }
    },
    {
        id: 3,
        target: "dispatch",
        category: "简单",
        stem: "The logistics coordinator promised to ________ a dedicated courier to deliver the urgent contract by noon.",
        options: ["dispatch", "accumulate", "adhere", "optimistic"],
        correct: "dispatch",
        explanations: {
            guide: "物流调度动词不定式。promised to 后面接动词原形，后接 a dedicated courier（专属信使/快递员）作宾语，选 dispatch（派遣/派出）。",
            family: "dispatch (v.派遣/发出) | accumulate (v.积累) | adhere (v.遵守) | optimistic (adj.乐观的)。",
            details: "to dispatch a courier 意为派遣快递员。accumulate（积累）、adhere（遵守）动宾逻辑均不成立。",
            cn: "物流协调员承诺在中午之前派遣一名专属信使送达这份紧急合同。",
            jp: "物流コーディネーターは、正午までに緊急契約書を届けるために専任の宅配便業者を派遣する（dispatch）と約束しました。"
        }
    },
    {
        id: 4,
        target: "ample",
        category: "简单",
        stem: "The newly constructed corporate headquarters features ________ parking space to accommodate over five hundred vehicles.",
        options: ["ample", "intensive", "modest", "optimistic"],
        correct: "ample",
        explanations: {
            guide: "空间修饰形容词。features ________ parking space 结合可容纳超过五百辆车的大型停车场，选 ample（充裕的/宽敞充足的）。",
            family: "ample (adj.充裕的/宽敞的) | intensive (adj.密集的) | modest (adj.微小的) | optimistic (adj.乐观的)。",
            details: "ample parking space 属于托业设施描述极高频词组，意为充裕的停车位。intensive（集约强化的）、optimistic（乐观的）不能修饰场地空间。",
            cn: "新建的企业总部拥有充裕的停车位，可容纳五百多辆汽车。",
            jp: "新しく建設された本社ビルには、500台以上の車両を収容できる十分な/広々とした（ample）駐車スペースが備わっています。"
        }
    },
    {
        id: 5,
        target: "protocol",
        category: "简单",
        stem: "Security officers are trained to follow the standard emergency ________ in the event of a power outage.",
        options: ["protocol", "endeavor", "consent", "transcript"],
        correct: "protocol",
        explanations: {
            guide: "应急规程名词考点。standard emergency ________ 结合断电突发事件时安保人员严格依循的行动规范，选 protocol（规程/预案/操作步骤）。",
            family: "protocol (n.规程/操作规范) | endeavor (n.努力) | consent (n.同意) | transcript (n.成绩单)。",
            details: "emergency protocol 意为应急规程/应急预案。endeavor（尝试）、transcript（记录本）均非突发事件的操作规程专有名词。",
            cn: "安保人员经过专业培训，在发生停电事件时能够依循标准应急规程采取行动。",
            jp: "警備員は、停電が発生した場合に標準的な緊急プロトコル/手順（protocol）に従うよう訓練されています。"
        }
    },
    {
        id: 6,
        target: "optimistic",
        category: "简单",
        stem: "Despite recent market volatility, senior financial analysts remain ________ about long-term stock market recovery.",
        options: ["optimistic", "intensive", "ample", "modest"],
        correct: "optimistic",
        explanations: {
            guide: "表语形容词与介词搭配。remain ________ about... 结合对股市长期复苏抱有积极信心，选 optimistic（乐观的）。",
            family: "optimistic (adj.乐观的) | intensive (adj.强化的) | ample (adj.充裕的) | modest (adj.微小的)。",
            details: "remain optimistic about sth 意为对……保持乐观。intensive（密集的）、ample（充足的）均无法与 remain ... about 连用表达人的积极预期心理。",
            cn: "尽管近期市场出现波动，资深金融分析师对股市的长期复苏仍保持乐观态度。",
            jp: "最近の市場のボラティリティにもかかわらず、上級財務アナリストは株式市場の長期的な回復について楽観的（optimistic）な見通しを維持しています。"
        }
    },
    {
        id: 7,
        target: "accumulate",
        category: "中等",
        stem: "Frequent flyers can ________ travel miles with every ticket purchased and redeem them for free flights.",
        options: ["accumulate", "dispatch", "adhere", "consent"],
        correct: "accumulate",
        explanations: {
            guide: "会员积分动词原形。can 后面接动词原形，结合通过购票“积累”里程并兑换免费机票（________ miles and redeem them），选 accumulate。",
            family: "accumulate (v.积累/积攒) | dispatch (v.发送) | adhere (v.遵守) | consent (v.同意)。",
            details: "accumulate miles/points 意为积累里程/积分。dispatch（派遣）、adhere（遵守）均无法与 travel miles 构成常旅客积分动宾搭配。",
            cn: "常旅客可以通过每次购买机票来积累飞行里程，并将其兑换为免费航班。",
            jp: "フリークエントフライヤーは、航空券を購入するたびにフライトマイルを蓄積（accumulate）し、無料航空券と引き換えることができます。"
        }
    },
    {
        id: 8,
        target: "modest",
        category: "中等",
        stem: "The retail chain reported a ________ revenue growth of two percent for the second quarter amid fierce competition.",
        options: ["modest", "optimistic", "intensive", "ample"],
        correct: "modest",
        explanations: {
            guide: "财报增幅修饰形容词。a ________ revenue growth of two percent 结合在激烈竞争中仅实现了2%的小幅微增，选 modest（适度的/小幅的）。",
            family: "modest (adj.小幅的/适度的) | optimistic (adj.乐观的) | intensive (adj.密集的) | ample (adj.充裕的)。",
            details: "modest growth 属于财报经典表达，意为小幅温和增长。optimistic 通常修饰人或前景展望，ample 强调充足充裕，均不如 modest 准确契合 2% 的微小增幅。",
            cn: "在激烈竞争中，该零售连锁店第二季度实现了百分之二的温和温幅收入增长。",
            jp: "その小売チェーンは、激しい競争の中で第2四半期に2％のわずかな/控えめな（modest）増収を報告しました。"
        }
    },
    {
        id: 9,
        target: "endeavor",
        category: "中等",
        stem: "The project management team will make every ________ to ensure that the office relocation is completed before Monday.",
        options: ["endeavor", "protocol", "dispatch", "consent"],
        correct: "endeavor",
        explanations: {
            guide: "商业承诺固定动宾搭配。make every ________ to ensure 属于托业经典句型，表达“竭尽全力/做出一切努力”，选 endeavor。",
            family: "endeavor (n.努力/尽力) | protocol (n.规程) | dispatch (n.调度) | consent (n.同意)。",
            details: "make every endeavor to do sth 意为竭尽全力做某事。protocol（规程）、consent（同意）均不能与 make every... to 搭配表示尽全力。",
            cn: "项目管理团队将竭尽一切努力，确保办公室搬迁在周一之前完成。",
            jp: "プロジェクト管理チームは、月曜日までにオフィスの移転が完了することを確実にするために、あらゆる努力（endeavor）を払います。"
        }
    },
    {
        id: 10,
        target: "intensive",
        category: "中等",
        stem: "All newly hired software developers must complete a two-week ________ coding boot camp prior to joining their assigned project teams.",
        options: ["intensive", "modest", "ample", "optimistic"],
        correct: "intensive",
        explanations: {
            guide: "培训性质修饰形容词。a two-week ________ coding boot camp 结合新入职员工参加两周的高强度编程训练营，选 intensive（强化的/密集的）。",
            family: "intensive (adj.强化的/集中的) | modest (adj.微小的) | ample (adj.充足的) | optimistic (adj.乐观的)。",
            details: "intensive training / boot camp 意为强化训练营。modest（平实的）、ample（充裕的）均不能修饰课程的高强度训练属性。",
            cn: "所有新聘用的软件开发人员在加入指定的项目团队之前，必须完成为期两周的强化编程训练营。",
            jp: "新しく採用されたすべてのソフトウェア開発者は、割り当てられたプロジェクトチームに参加する前に、2週間の集中（intensive）コーディングブートキャンプを修了しなければなりません。"
        }
    },
    {
        id: 11,
        target: "adhere",
        category: "中等",
        stem: "Strict ________ to international environmental standards enabled the manufacturing company to secure prestigious global contracts.",
        options: ["adherence", "adhere", "adherent", "adhering"],
        correct: "adherence",
        explanations: {
            guide: "派生抽象名词作主语。Strict ________ to standards 结构中，形容词 Strict 后面接抽象名词形式 adherence（遵守/遵循）。",
            family: "adherence (n.遵守/遵循) | adhere (v.遵守) | adherent (n.追随者/adj.黏着的) | adhering (v-ing)。",
            details: "strict adherence to regulations 意为对法规的严格遵守。adhere 是动词原形，不能作被形容词修饰的句子主语中心语。",
            cn: "对国际环境标准的严格遵守使该制造公司得以赢得极具声望的全球合同。",
            jp: "国際的な環境基準の厳格な遵守（adherence）により、その製造会社は名誉ある国際契約を獲得することができました。"
        }
    },
    {
        id: 12,
        target: "dispatch",
        category: "中等",
        stem: "Emergency technical support crews were ________ immediately after the regional server network experienced an unexpected failure.",
        options: ["dispatched", "dispatch", "dispatching", "dispatches"],
        correct: "dispatched",
        explanations: {
            guide: "被动语态过去分词。were ________ immediately 结构中，在助动词 were 和副词 immediately 之后接过去分词，表达技术支援团队被紧急“派遣/调遣”，选 dispatched。",
            family: "dispatched (v-ed被派遣的) | dispatch (v.原形) | dispatching (v-ing) | dispatches (v-三单/n.复数)。",
            details: "were dispatched immediately 意为被立即派遣。dispatch 是原形，不能构成被动时态谓语分词。",
            cn: "在区域服务器网络出现突发故障后，应急技术支持团队被立即派遣到位。",
            jp: "地域のサーバーネットワークで予期せぬ障害が発生した後、緊急技術サポートクルーが直ちに派遣されました（dispatched）。"
        }
    },
    {
        id: 13,
        target: "consent",
        category: "困难",
        stem: "Disclosing proprietary commercial data without prior written ________ from the board of directors is strictly prohibited.",
        options: ["consent", "consensual", "consenting", "consented"],
        correct: "consent",
        explanations: {
            guide: "法务名词作介词宾语。without prior written ________ 结构中，形容词 prior（事先的）与 written（书面的）后面接名词形式 consent（同意/许可）。",
            family: "consent (n.同意/准许/v.同意) | consensual (adj.经双方同意的) | consenting (adj.赞同的) | consented (v-ed过去式)。",
            details: "prior written consent 属于托业保密协议 (NDA) 绝高频法律用语，意为事先书面许可。consensual 与 consenting 是形容词，不能充当介词 without 的宾语中心语。",
            cn: "未经董事会事先书面同意，严禁泄露公司的专有商业数据。",
            jp: "取締役会からの事前の書面による同意（consent）なしに、専有の商業データを開示することは固く禁じられています。"
        }
    },
    {
        id: 14,
        target: "accumulate",
        category: "困难",
        stem: "The steady ________ of unpaid client invoices over the past two quarters prompted the credit management department to revise payment terms.",
        options: ["accumulation", "accumulate", "accumulated", "accumulative"],
        correct: "accumulation",
        explanations: {
            guide: "派生抽象名词作主语。The steady ________ of unpaid invoices 结构中，在定冠词 the 和形容词 steady 后面接抽象名词形式 accumulation（积累/堆积）。",
            family: "accumulation (n.积累/堆积) | accumulate (v.积累) | accumulated (adj.累积的) | accumulative (adj.累加的)。",
            details: "the accumulation of unpaid invoices 意为未付发票的堆积积压。accumulate 是动词，不能在定冠词后作句子的主语中心语。",
            cn: "过去两个季度未付客户发票的不断积压，促使信用管理部门修改了付款条款。",
            jp: "過去2四半期にわたる未払いの顧客請求書の着実な累積/蓄積（accumulation）により、信用管理部門は支払い条件を改訂することになりました。"
        }
    },
    {
        id: 15,
        target: "optimistic",
        category: "困难",
        stem: "Leading market research analysts expressed cautious ________ regarding the commercial viability of autonomous delivery drones.",
        options: ["optimism", "optimistic", "optimistically", "optimist"],
        correct: "optimism",
        explanations: {
            guide: "派生抽象名词作及物动词宾语。expressed cautious ________ 结构中，形容词 cautious（谨慎的）后面接抽象名词形式 optimism（乐观态度/乐观情绪）。",
            family: "optimism (n.乐观/乐观态度) | optimistic (adj.乐观的) | optimistically (adv.乐观地) | optimist (n.乐天派/人)。",
            details: "cautious optimism 属于商务与宏观财经分析核心短语，意为审慎的乐观。optimistic 是形容词，optimist 指具体的人，均不能作表达态度的宾语中心语。",
            cn: "主流市场研究分析师对自动送货无人机的商业可行性表达了审慎的乐观态度。",
            jp: "主要な市場調査アナリストは、自動配達ドローンの商業的実現可能性に関して慎重な楽観論（optimism）を表明しました。"
        }
    },
    {
        id: 16,
        target: "ample",
        category: "困难",
        stem: "The spacious auditorium was ________ equipped with state-of-the-art acoustics and simultaneous translation booths.",
        options: ["amply", "ample", "amplify", "amplitude"],
        correct: "amply",
        explanations: {
            guide: "副词修饰被动动词。was ________ equipped with... 结构中，需要副词修饰过去分词 equipped，表达会堂配备得“极其充分/完备地”，选 amply。",
            family: "amply (adv.充足地/充分地) | ample (adj.充裕的) | amplify (v.放大/增强) | amplitude (n.幅度/广阔)。",
            details: "amply equipped with 属于托业设施介绍高阶词组，意为充分/齐备地配备。ample 是形容词，不能直接修饰动词分词 equipped。",
            cn: "宽敞的礼堂充分配备了最先进的声学设备和同声传译室。",
            jp: "広々とした講堂には、最先端の音響設備と同時通訳ブースが十分に（amply）備え付けられていました。"
        }
    },
    {
        id: 17,
        target: "intensive",
        category: "困难",
        stem: "Engineers worked ________ around the clock for three days to restore database connectivity after the server crash.",
        options: ["intensively", "intensive", "intensity", "intensify"],
        correct: "intensively",
        explanations: {
            guide: "副词修饰不及物动词。worked ________ around the clock 结构中，需要副词修饰动词 worked，表达工程师们“高强度地/紧密密集地”通宵达旦工作，选 intensively。",
            family: "intensively (adv.集中地/高强度地) | intensive (adj.密集的) | intensity (n.强度) | intensify (v.加剧)。",
            details: "worked intensively 意为全力以赴/高强度地工作。intensive 是形容词，intensity 是名词，均不能充当修饰动词 worked 的副词状语。",
            cn: "在服务器崩溃后，工程师们夜以继日地高强度工作了三天，以恢复数据库连接。",
            jp: "サーバーがダウンした後、エンジニアはデータベースの接続を復旧するために3日間集中的に/懸命に（intensively）24時間体制で作業しました。"
        }
    },
    {
        id: 18,
        target: "endeavor",
        category: "困难",
        stem: "The customer relations director affirmed that the support team will ________ to resolve all client service inquiries within twenty-four hours.",
        options: ["endeavor", "endeavoring", "endeavored", "endeavors"],
        correct: "endeavor",
        explanations: {
            guide: "情态助动词后接动词原形。will 后面接及物动词原形，并与 to resolve 构成 endeavor to do sth，表达将“努力/尽力”在24小时内解决问询，选 endeavor。",
            family: "endeavor (v.努力/尝试/n.努力) | endeavoring (v-ing) | endeavored (v-ed) | endeavors (v-三单/n.复数)。",
            details: "will endeavor to do sth 属于商务客服承诺核心高阶句式，意为将竭力做某事。endeavoring 是分词，endeavored 是过去式，均不能紧跟在情态动词 will 之后充当谓语动词原形。",
            cn: "客户关系总监确认，支持团队将尽力在二十四小时内解决所有客户服务问询。",
            jp: "顧客対応ディレクターは、サポートチームが24時間以内にすべての顧客サービスに関する問い合わせを解決するよう努める（endeavor）と明言しました。"
        }
    }
];