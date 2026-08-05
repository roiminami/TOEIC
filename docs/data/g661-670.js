// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag151-160 Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "exposure",
        pos: "名",
        ipa: "/ɪkˈspoʊʒər/",
        cn: "暴露，接触，曝光率",
        jp: "暴露、接触、露出、宣伝",
        family: "expose / exposed / exposing",
        tips: "市场营销与安全防范高频词。常用搭配：media exposure（媒体曝光）、exposure to risk（风险暴露）、limit exposure to...（限制接触……）。",
        desc: "The product got media exposure."
    },
    {
        word: "housekeeping",
        pos: "名",
        ipa: "/ˈhaʊskiːpɪŋ/",
        cn: "客房服务，家政，日常维护",
        jp: "客房係、ハウスキーピング、家事管理",
        family: "housekeeper / housekeep",
        tips: "酒店住宿与行政管理高频词。核心搭配：housekeeping staff（客房清洁人员）、request housekeeping（要求客房服务）。",
        desc: "Call housekeeping for new towels."
    },
    {
        word: "vacant",
        pos: "形",
        ipa: "/ˈveɪkənt/",
        cn: "空置的，未被占用的，空缺的",
        jp: "空いている、欠員の、空席の",
        family: "vacancy / vacantly",
        tips: "房屋租赁与人事招聘高频形容词。常用搭配：vacant position（空缺职位）、vacant room（空房）。名词形式 vacancy（空缺/空房）。",
        desc: "The position is still vacant."
    },
    {
        word: "premise",
        pos: "名",
        ipa: "/ˈpremɪs/",
        cn: "前提；房屋及场地（常用复数 premises）",
        jp: "前提；（敷地内・建物内， premisesで）",
        family: "premises / premised",
        tips: "合同条文与安保规范高频词。单数意为“前提”，复数 premises 特指“公司场地/房屋”。常见表达：on the premises（在场内/在办公区内）。",
        desc: "No smoking on the premises."
    },
    {
        word: "owe",
        pos: "動",
        ipa: "/oʊ/",
        cn: "欠（债/钱），归功于",
        jp: "借りがある、〜のおかげである",
        family: "owing / owed / debt",
        tips: "财务发票与成功归因高频动词。核心结构：owe sb money（欠某人钱）、owe sth to sb（把某事归功于某人）、owing to...（由于/因为……）。",
        desc: "I owe you ten dollars."
    },
    {
        word: "ease",
        pos: "動/名",
        ipa: "/iːz/",
        cn: "减轻，缓解；容易，舒适",
        jp: "和らげる、軽減する；容易さ",
        family: "easy / easily / easement",
        tips: "交通拥堵疏解、政策放宽与操作便利高频词。动词用法：ease traffic congestion（缓解交通拥堵）；名词用法：with ease（轻而易举地）。",
        desc: "This will ease the pain."
    },
    {
        word: "urge",
        pos: "動/名",
        ipa: "/ɜːrdʒ/",
        cn: "敦促，催促；强烈的欲望",
        jp: "促す、強く勧める；衝動",
        family: "urgent / urgency / urgently",
        tips: "行政倡议与高管决策高频词。核心搭配：urge sb to do sth（敦促某人做某事）。衍生词 urgent（紧急的）、urgency（紧急性）。",
        desc: "I urge you to accept."
    },
    {
        word: "kindly",
        pos: "副",
        ipa: "/ˈkaɪndli/",
        cn: "亲切地；请，烦请（敬语）",
        jp: "親切に；どうぞ〜してください",
        family: "kind / kindness",
        tips: "商务信函与客服告示高频副词。常用于祈使句开头作礼貌敬语：Kindly reply to this email（请回复此邮件，相当于 Please）。",
        desc: "Kindly sign the form."
    },
    {
        word: "artificial",
        pos: "形",
        ipa: "/ˌɑːrtɪˈfɪʃl/",
        cn: "人造的，人工的，仿造的",
        jp: "人工の、人造の、作り物の",
        family: "artificially / artificiality",
        tips: "科技AI、食品添加剂及建材高频形容词。核心搭配：artificial intelligence (AI，人工智能)、artificial flavor（人造风味）、artificial turf（人造草坪）。",
        desc: "This drink has artificial flavor."
    },
    {
        word: "illustrate",
        pos: "動",
        ipa: "/ˈɪləstreɪt/",
        cn: "说明，阐明，加插图",
        jp: "（例などで）説明する、挿絵を入れる",
        family: "illustration / illustrative / illustrator",
        tips: "商务报告、图表分析与配图设计高频动词。核心搭配：illustrate a point（阐明观点）、charts illustrate that...（图表说明……）。名词 illustration（插图/例证）。",
        desc: "The chart illustrates the trend."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "kindly",
        category: "简单",
        stem: "________ fill out the survey form after your stay to help us improve our services.",
        options: ["Kindly", "Vacant", "Artificial", "Owe"],
        correct: "Kindly",
        explanations: {
            guide: "副词修饰祈使句（礼貌敬语）。位于句首修饰动词短语 fill out，表达礼貌地请求“请/烦请”，选 Kindly。",
            family: "Kindly (adv.请/烦请) | Vacant (adj.空置的) | Artificial (adj.人造的) | Owe (v.欠)。",
            details: "Kindly 放在祈使句开头作敬语，相当于 Please，在商务邮件与服务通知中极高频。",
            cn: "入住结束后，请填写调查问卷，以帮助我们改进服务。",
            jp: "サービス向上のため、ご滞在後にアンケート用紙にご記入（Kindly）ください。"
        }
    },
    {
        id: 2,
        target: "vacant",
        category: "简单",
        stem: "The company posted an advertisement to hire a manager for the ________ position.",
        options: ["vacant", "artificial", "kindly", "premise"],
        correct: "vacant",
        explanations: {
            guide: "形容词修饰名词。修饰 position（职位），结合招募经理的语境，选 vacant（空缺的）。",
            family: "vacant (adj.空缺的) | artificial (adj.人工的) | kindly (adv.亲切地) | premise (n.前提)。",
            details: "vacant position（空缺职位）是招聘广告与 HR 招聘通知中的固定组合。",
            cn: "公司发布了一则广告，招募一名经理来填补空缺职位。",
            jp: "同社は、欠員（vacant）となっているマネージャー職を募集する求人広告を掲載しました。"
        }
    },
    {
        id: 3,
        target: "housekeeping",
        category: "简单",
        stem: "Hotel guests can call the ________ department if they need extra towels or pillows.",
        options: ["housekeeping", "exposure", "illustration", "urge"],
        correct: "housekeeping",
        explanations: {
            guide: "复合名词搭配。修饰 department，结合后文“需要额外的毛巾或枕头”，选 housekeeping（客房服务部）。",
            family: "housekeeping (n.客房服务) | exposure (n.曝光) | illustration (n.插图) | urge (n.冲动)。",
            details: "housekeeping department（客房服务部）属于酒店客房与旅游住宿场景的核心表达。",
            cn: "如果需要额外的毛巾或枕头，酒店客人可以给客房服务部打电话。",
            jp: "追加のタオルや枕が必要な場合、ホテルの宿泊客は客室係（housekeeping）に電話することができます。"
        }
    },
    {
        id: 4,
        target: "artificial",
        category: "简单",
        stem: "The new juice product contains no ________ flavors or preservatives.",
        options: ["artificial", "vacant", "kindly", "owe"],
        correct: "artificial",
        explanations: {
            guide: "形容词修饰名词。修饰 flavors（风味/色素），结合食品不含人工成分的宣传语境，选 artificial（人造的/人工的）。",
            family: "artificial (adj.人造的) | vacant (adj.空置的) | kindly (adv.请) | owe (v.欠)。",
            details: "artificial flavors（人造风味/人工香精）是零售食品与产品说明中的常见词组。",
            cn: "这种新果汁产品不含任何人造风味或防腐剂。",
            jp: "その新しいジュース製品には、人工（artificial）香料や保存料は一切含まれていません。"
        }
    },
    {
        id: 5,
        target: "illustrate",
        category: "简单",
        stem: "The speaker used several sales charts to ________ the company's growth over the past year.",
        options: ["illustrate", "owe", "ease", "urge"],
        correct: "illustrate",
        explanations: {
            guide: "动词词义辨析。位于不定式符号 to 之后，表达用销售图表来“说明/阐明”过去一年的增长，选 illustrate。",
            family: "illustrate (v.说明/阐明) | owe (v.欠) | ease (v.减轻) | urge (v.敦促)。",
            details: "illustrate the growth 意为“说明增长”，图表（charts/graphs）常与 illustrate 搭配使用。",
            cn: "演讲者使用了几张销售图表来说明公司过去一年的增长。",
            jp: "講演者は、過去1年間の会社の成長を説明（illustrate）するためにいくつかの売上グラフを使用しました。"
        }
    },
    {
        id: 6,
        target: "ease",
        category: "简单",
        stem: "Opening a new bypass road was expected to ________ traffic congestion during peak hours.",
        options: ["ease", "urge", "illustrate", "owe"],
        correct: "ease",
        explanations: {
            guide: "动词词义辨析与固定搭配。作 expected to 后的动词原形，与 traffic congestion（交通拥堵）构成搭配 ease traffic congestion（缓解交通拥堵），选 ease。",
            family: "ease (v.缓解) | urge (v.敦促) | illustrate (v.说明) | owe (v.归功于)。",
            details: "ease traffic congestion 意为“缓解交通拥堵”，是市政交通规划中的标准高频短语。",
            cn: "开通一条新的绕行公路预计将缓解高峰时段的交通拥堵。",
            jp: "新しいバイパス道路の開通により、ピーク時の交通渋滞が緩和（ease）されると期待されていました。"
        }
    },
    {
        id: 7,
        target: "premise",
        category: "中等",
        stem: "Security guards monitor all visitors to ensure that no unauthorized person enters the ________.",
        options: ["premises", "exposure", "housekeeping", "vacancy"],
        correct: "premises",
        explanations: {
            guide: "名词复数词义辨析（房屋及场地）。作 enters 的宾语，结合安保人员监控访客的语境，指不得进入公司“场地/办公区”，选复数 premises。",
            family: "premises (n.场地/房屋) | exposure (n.曝光) | housekeeping (n.家政) | vacancy (n.空缺)。",
            details: "enter the premises 意为“进入场地/厂区”。premise 在复数形式 premises 下特指公司或机构占用的建筑物及场地。",
            cn: "安保人员监控所有访客，以确保未经授权的人员不得进入场地。",
            jp: "警備員は、許可のない人員が敷地内（premises）に立ち入らないよう、すべての来訪者を監視しています。"
        }
    },
    {
        id: 8,
        target: "exposure",
        category: "中等",
        stem: "Participating in the international trade fair gave our brand valuable ________ to global markets.",
        options: ["exposure", "housekeeping", "premise", "illustration"],
        correct: "exposure",
        explanations: {
            guide: "名词词义辨析与搭配。作 gave 的宾语，由 valuable 修饰，表达让品牌获得面向全球市场的“曝光率/接触机会”，选 exposure。",
            family: "exposure (n.曝光/接触) | housekeeping (n.客房服务) | premise (n.前提) | illustration (n.插图)。",
            details: "valuable exposure to... 意为“在……领域的宝贵曝光/接触”。在展会与公关营销中极高频。",
            cn: "参加国际博览会为我们的品牌带来了面向全球市场的宝贵曝光机会。",
            jp: "国際見本市への参加は、当社のブランドに世界市場への貴重な露出（exposure）をもたらしました。"
        }
    },
    {
        id: 9,
        target: "owe",
        category: "中等",
        stem: "According to the financial statement, the firm still ________ a substantial amount to its main supplier.",
        options: ["owes", "eases", "urges", "illustrates"],
        correct: "owes",
        explanations: {
            guide: "动词主谓一致与句意。主语为单数名词 the firm，结合后文“欠主要供应商巨款”，选第三人称单数形式 owes。",
            family: "owes (v.欠/单数) | eases (v.缓解) | urges (v.敦促) | illustrates (v.说明)。",
            details: "owe money/a substantial amount to sb 意为“欠某人巨款”，属于财务报告场景的标准表达。",
            cn: "根据财务报表，该公司仍欠其主要供应商一大笔款项。",
            jp: "財務諸表によると、同社は依然として主要取引先に相当な金額を借りて（owes）います。"
        }
    },
    {
        id: 10,
        target: "urge",
        category: "中等",
        stem: "Environmental experts strongly ________ local businesses to adopt energy-saving technologies.",
        options: ["urge", "ease", "illustrate", "owe"],
        correct: "urge",
        explanations: {
            guide: "动词与固定句式。结构为 urge sb to do sth（敦促某人做某事），表达专家强烈敦促企业采取节能技术，选 urge。",
            family: "urge (v.敦促) | ease (v.减轻) | illustrate (v.说明) | owe (v.归因于)。",
            details: "urge local businesses to... 属于行政倡议与环保合规中的标准搭配。",
            cn: "环保专家强烈敦促当地企业采用节能技术。",
            jp: "環境の専門家は、地元の企業に対し、省エネ技術を導入するよう強く促して（urge）います。"
        }
    },
    {
        id: 11,
        target: "vacant",
        category: "中等",
        stem: "Job seekers are encouraged to check the website regularly for any newly opened ________.",
        options: ["vacancies", "vacant", "vacantly", "premises"],
        correct: "vacancies",
        explanations: {
            guide: "名词派生复数考点。修饰语 any newly opened 之后，需要填入复数可数名词，表达新开放的“职位空缺”，选 vacancies。",
            family: "vacancies (n.职位空缺/复数) | vacant (adj.空缺的) | vacantly (adv.茫然地) | premises (n.场地)。",
            details: "open vacancies 指“开放的招聘空缺”。vacant 是形容词，不能直接放在 opened 之后作名词中心语。",
            cn: "鼓励求职者定期查看网站，获取任何新开放的职位空缺。",
            jp: "求職者は、新しく公開された求人（vacancies）がないか定期的にウェブサイトを確認することが推奨されています。"
        }
    },
    {
        id: 12,
        target: "illustrate",
        category: "中等",
        stem: "The manual includes a series of clear ________ to help users assemble the furniture easily.",
        options: ["illustrations", "illustrate", "illustrative", "illustrator"],
        correct: "illustrations",
        explanations: {
            guide: "名词派生词辨析。位于 clear 之后，作 includes 的宾语，表达说明书里有一系列清晰的“插图/图解”，选复数名词 illustrations。",
            family: "illustrations (n.插图/图解) | illustrate (v.说明) | illustrative (adj.说明性的) | illustrator (n.插画家)。",
            details: "a series of clear illustrations 意为“一系列清晰的示意图/图解”，常出现在产品说明书与组装指南中。",
            cn: "该手册包含一系列清晰的图解，以帮助用户轻松组装家具。",
            jp: "マニュアルには、ユーザーが簡単に家具を組み立てられるよう、一連の明確な図解（illustrations）が含まれています。"
        }
    },
    {
        id: 13,
        target: "ease",
        category: "困难",
        stem: "The client noticed the remarkable ________ with which the experienced technician resolved the software glitch.",
        options: ["ease", "easy", "easily", "easement"],
        correct: "ease",
        explanations: {
            guide: "名词短语与介词结构。位于定冠词 the 和形容词 remarkable 之后，且与介词 with 构成 with ease（轻而易举地），选名词 ease。",
            family: "ease (n.容易/熟练) | easy (adj.容易的) | easily (adv.容易地) | easement (n.缓解/权利)。",
            details: "the ease with which... 意为“做某事的熟练/轻而易举”，属于高级阅读句型。ease 作名词表示“轻松/熟练”。",
            cn: "客户注意到了这位经验丰富的技术人员解决软件故障时展现出的惊人熟练度。",
            jp: "クライアントは、経験豊富な技術者がソフトウェアの不具合を驚くほどの容易さ（ease）で解決したことに気づきました。"
        }
    },
    {
        id: 14,
        target: "urge",
        category: "困难",
        stem: "The department manager sent an ________ email reminding the team about the upcoming project deadline.",
        options: ["urgent", "urgency", "urgently", "urge"],
        correct: "urgent",
        explanations: {
            guide: "派生形容词修饰名词。位于不定冠词 an 之后，修饰 email，表达发送了一封“紧急的”邮件，选派生形容词 urgent。",
            family: "urgent (adj.紧急的) | urgency (n.紧急) | urgently (adv.紧急地) | urge (v.敦促)。",
            details: "an urgent email 意为“紧急邮件”。urgent 为 urge 派生的形容词，在此作为前置修饰语。",
            cn: "部门经理发送了一封紧急邮件，提醒团队即将到来的项目截止日期。",
            jp: "部門マネージャーは、迫りくるプロジェクトの締め切りについてチームに喚起する緊急（urgent）メールを送信しました。"
        }
    },
    {
        id: 15,
        target: "owe",
        category: "困难",
        stem: "The delay in product shipment was entirely ________ to severe weather conditions along the coast.",
        options: ["owing", "owed", "owe", "eased"],
        correct: "owing",
        explanations: {
            guide: "固定短语搭配考点。结构 be owing to sth 表示“由于/归因于……”，完全等同于 due to，选分词形式 owing。",
            family: "owing (adj./prep.归因于) | owed (v.已欠) | owe (v.欠) | eased (v.已缓解)。",
            details: "owing to 是固定介词短语，意为“由于”。此处作表语构成 be owing to，用来解释出货延误的原因。",
            cn: "产品出货的延误完全是由于沿海地区的恶劣天气条件造成的。",
            jp: "製品の出荷遅延は、沿岸部の悪天候に完全に起因（owing）するものでした。"
        }
    },
    {
        id: 16,
        target: "exposure",
        category: "困难",
        stem: "Prolonged ________ to direct sunlight can cause damage to sensitive electronic components.",
        options: ["exposure", "expose", "exposed", "exposing"],
        correct: "exposure",
        explanations: {
            guide: "名词作主语考点。位于句首作主语，由形容词 Prolonged（长期的）修饰，后接介词 to，表达长期“暴露于”强光下，选名词 exposure。",
            family: "exposure (n.暴露/接触) | expose (v.暴露) | exposed (adj.暴露的) | exposing (pres-p.暴露中)。",
            details: "prolonged exposure to... 意为“长期暴露于……”，属于工业安全与电子产品使用手册中的经典行话。",
            cn: "长期暴露在直射阳光下可能会损坏敏感的电子元件。",
            jp: "直射日光に長時間暴露（exposure）すると、精密な電子部品が損傷する可能性があります。"
        }
    },
    {
        id: 17,
        target: "artificial",
        category: "困难",
        stem: "Prices in the regional housing market were inflated ________ due to speculative buying by investors.",
        options: ["artificially", "artificial", "artificiality", "vacant"],
        correct: "artificially",
        explanations: {
            guide: "副词修饰过去分词（被动语态）。位于被动语态 were inflated 之后，修饰动词 inflated（被抬高），表达“人为地”被抬高，选副词 artificially。",
            family: "artificially (adv.人为地/人造地) | artificial (adj.人造的) | artificiality (n.人工) | vacant (adj.空置的)。",
            details: "artificially inflated prices 意为“人为抬高的价格”，属于房地产与金融投机分析的高频用语。",
            cn: "由于投资者的投机性购买，区域住房市场的价格被人为抬高了。",
            jp: "投資家による投機的な買い占めにより、地域の住宅市場の価格は人為的に（artificially）吊り上げられました。"
        }
    },
    {
        id: 18,
        target: "kindly",
        category: "困难",
        stem: "The hotel receptionist greeted all incoming international guests with genuine warmth and ________.",
        options: ["kindness", "kindly", "kind", "kindlier"],
        correct: "kindness",
        explanations: {
            guide: "抽象名词派生词辨析。位于介词 with 之后，并与名词 warmth 通过 and 并列，表达以真诚的热情与“亲切/好意”，选名词 kindness。",
            family: "kindness (n.亲切/好意) | kindly (adv.亲切地/请) | kind (adj.亲切的) | kindlier (adj.更亲切的)。",
            details: "with warmth and kindness（以热情与亲切）属于服务业顾客接待中的经典搭配。kindly 为副词，不能与名词 warmth 并列。",
            cn: "酒店接待员以真诚的热情和亲切款待了所有到来的国际客人。",
            jp: "ホテルのフロント係は、真心のこもった温かさと親切さ（kindness）をもって、到着したすべての海外顧客を迎えました。"
        }
    }
];