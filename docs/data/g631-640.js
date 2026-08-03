// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag121-130 Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "workload",
        pos: "名",
        ipa: "/ˈwɜːrkloʊd/",
        cn: "工作量，工作负荷",
        jp: "仕事量、作業負荷",
        family: "workloads",
        tips: "职场效率与员工任务分配高频名词。托业高频搭配：heavy workload（繁重的工作量）、manage workload（管理工作负荷）、distribute workload（分配工作量）。",
        desc: "The workload is heavy."
    },
    {
        word: "fulfill",
        pos: "動",
        ipa: "/fʊlˈfɪl/",
        cn: "履行，实现，满足（需求/订单）",
        jp: "（注文・契約を）果たす、満たす、実行する",
        family: "fulfillment / fulfilled / fulfilling",
        tips: "电商履约、合同履行与客户服务核心动词。常见短语：fulfill an order（处理/履行订单）、fulfill requirements（满足要求）、fulfill expectations（达到期望）。",
        desc: "They fulfilled the order."
    },
    {
        word: "cite",
        pos: "動",
        ipa: "/saɪt/",
        cn: "引用，举例，引证",
        jp: "引用する、言及する",
        family: "citation / cited",
        tips: "商务报告、学术论文及法律合规高频动词。核心搭配：cite a source（引用来源）、cite statistics（引用统计数据）、cite reasons（举出理由）。",
        desc: "Please cite your sources."
    },
    {
        word: "diverse",
        pos: "形",
        ipa: "/daɪˈvɜːrs/",
        cn: "多种多样的，形形色的",
        jp: "多様な、多種多様な",
        family: "diversity / diversify / diversification",
        tips: "企业文化、团队建设与投资组合高频形容词。核心搭配：diverse background（多样化背景）、diverse workforce（多元化员工队伍）、diverse range of products（丰富多样的产品系列）。",
        desc: "We have a diverse team."
    },
    {
        word: "hopefully",
        pos: "副",
        ipa: "/ˈhoʊpfəli/",
        cn: "希望，但愿",
        jp: "うまくいけば、願わくは",
        family: "hope / hopeful / hopeless",
        tips: "商务口语沟通、项目预测与邮件表态高频副词。常用于句首作句子状语，表达对未来事项的期待，如 Hopefully, the project will be completed on time.",
        desc: "Hopefully, we will win."
    },
    {
        word: "lately",
        pos: "副",
        ipa: "/ˈleɪtli/",
        cn: "近来，最近",
        jp: "最近、近頃",
        family: "late / lateness",
        tips: "时态考察与日常办公高频副词。通常与现在完成时（have/has done）或现在完成进行时连用，等同于 recently。常放在句末，如 Have you seen him lately?",
        desc: "I have been busy lately."
    },
    {
        word: "brand-new",
        pos: "形",
        ipa: "/ˌbrænd ˈnuː/",
        cn: "崭新的，全新推出的",
        jp: "真新しい、新品の",
        family: "brand / new",
        tips: "产品发布、设备采购与市场营销高频复合形容词。修饰名词表达全新未使用的状态。常见搭配：brand-new facility（全新设施）、brand-new model（崭新机型）。",
        desc: "This is a brand-new car."
    },
    {
        word: "informal",
        pos: "形",
        ipa: "/ɪnˈfɔːrml/",
        cn: "非正式的，轻松自由的",
        jp: "非公式の、カジュアルな",
        family: "informally / informality / formal",
        tips: "团队聚会、轻松会议及沟通风格高频形容词。核心搭配：informal meeting（非正式会议）、informal discussion（轻松讨论）、informal gathering（非正式聚会）。",
        desc: "It was an informal meeting."
    },
    {
        word: "shortage",
        pos: "名",
        ipa: "/ˈʃɔːrtɪdʒ/",
        cn: "短缺，不足",
        jp: "不足、欠乏",
        family: "short / shorten / shortly",
        tips: "供应链危机、劳动力市场与物资保障高频名词。核心搭配：labor shortage（劳动力短缺）、food shortage（食物短缺）、supply shortage（供应不足）。",
        desc: "There is a water shortage."
    },
    {
        word: "portrait",
        pos: "名",
        ipa: "/ˈpɔːrtreɪt/",
        cn: "肖像，画像，纵向（打印）",
        jp: "肖像画、ポートレート、縦向き",
        family: "portray / portrayal",
        tips: "办公打印设置与艺术宣传高频名词。托业中除了指“肖像/描绘”外，常考打印设置中的“纵向模式”（portrait orientation / portrait mode），与横向（landscape）相对。",
        desc: "He painted a portrait."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "workload",
        category: "简单",
        stem: "Due to the sudden increase in customer orders, the support team is facing a heavy ________.",
        options: ["workload", "shortage", "portrait", "citation"],
        correct: "workload",
        explanations: {
            guide: "名词词义辨析。由形容词 heavy（繁重的）修饰，结合前半句“客户订单突然增加”，客服团队面临的是繁重的“工作量”，选择 workload。",
            family: "workload (n.工作量) | shortage (n.短缺) | portrait (n.肖像/纵向) | citation (n.引用)。",
            details: "heavy workload 属于极其高频的职场商务固定搭配，指任务繁重的状态。",
            cn: "由于客户订单突然增加，支持团队面临着繁重的工作量。",
            jp: "顧客からの注文が急増したため、サポートチームは重い作業負荷（workload）に直面しています。"
        }
    },
    {
        id: 2,
        target: "fulfill",
        category: "简单",
        stem: "The warehouse staff worked overtime to ________ all pending online orders before Friday.",
        options: ["fulfill", "cite", "diversify", "portray"],
        correct: "fulfill",
        explanations: {
            guide: "动词词义辨析。位于不定式符号 to 之后，作 worked overtime 的目的状语。结合宾语 pending online orders（待处理的线上订单），选 fulfill（履行/处理）。",
            family: "fulfill (v.履行/处理) | cite (v.引用) | diversify (v.多样化) | portray (v.描绘)。",
            details: "fulfill orders 意为“履行/完成订单”，是电商与物流仓储场景中的标准用语。",
            cn: "仓库员工加班加点，以便在周五前处理完所有待处理的线上订单。",
            jp: "倉庫のスタッフは、金曜日までに保留中のオンライン注文をすべて処理（fulfill）するために残業しました。"
        }
    },
    {
        id: 3,
        target: "brand-new",
        category: "简单",
        stem: "The company decided to replace its outdated equipment with ________ machines to boost efficiency.",
        options: ["brand-new", "informal", "diverse", "lately"],
        correct: "brand-new",
        explanations: {
            guide: "形容词修饰名词。修饰名词 machines，与前文 outdated equipment（陈旧设备）形成对比，表达用“崭新的”机器替换旧设备，选 brand-new。",
            family: "brand-new (adj.崭新的) | informal (adj.非正式的) | diverse (adj.多种多样的) | lately (adv.近来)。",
            details: "brand-new machines 意为“崭新的机器”，在采购与设施升级场景中十分常见。",
            cn: "公司决定用崭新的机器替换陈旧的设备，以提高效率。",
            jp: "同社は効率を高めるため、古い設備を真新しい（brand-new）機械に買い替えることを決定しました。"
        }
    },
    {
        id: 4,
        target: "shortage",
        category: "简单",
        stem: "Severe weather conditions caused a temporary ________ of fresh produce in local supermarkets.",
        options: ["shortage", "workload", "portrait", "fulfillment"],
        correct: "shortage",
        explanations: {
            guide: "名词词义辨析。由形容词 temporary（临时的）修饰，作 caused 的宾语，结合后文“生鲜农产品”，选 shortage（短缺）。",
            family: "shortage (n.短缺) | workload (n.工作量) | portrait (n.肖像) | fulfillment (n.履行)。",
            details: "a temporary shortage of... 意为“……的临时短缺”，是供应链与零售业的高频词汇组合。",
            cn: "恶劣的天气条件导致当地超市生鲜农产品出现临时短缺。",
            jp: "悪天候のため、地元のスーパーマーケットでは生鮮食品の一時的な不足（shortage）が発生しました。"
        }
    },
    {
        id: 5,
        target: "informal",
        category: "简单",
        stem: "Colleagues gathered in the staff lounge for an ________ discussion about the upcoming holiday party.",
        options: ["informal", "diverse", "brand-new", "hopefully"],
        correct: "informal",
        explanations: {
            guide: "形容词修饰名词。位于不定冠词 an 之后，修饰名词 discussion（讨论），结合前文在“员工休息室聚首”，表达“非正式的/轻松的”讨论，选 informal。",
            family: "informal (adj.非正式的) | diverse (adj.多种多样的) | brand-new (adj.崭新的) | hopefully (adv.希望)。",
            details: "an informal discussion 意为“非正式讨论/轻松交流”，符合休假聚会筹备的语境。",
            cn: "同事们聚集在员工休息室，就即将到来的节日聚会展开了非正式的讨论。",
            jp: "同僚たちはスタッフラウンジに集まり、今後のホリデーパーティーについてカジュアルな（informal）話し合いを行いました。"
        }
    },
    {
        id: 6,
        target: "diverse",
        category: "简单",
        stem: "Our multinational firm is proud to have a workforce with ________ cultural backgrounds.",
        options: ["diverse", "lately", "shortage", "informal"],
        correct: "diverse",
        explanations: {
            guide: "形容词修饰名词。修饰名词短语 cultural backgrounds（文化背景），结合前文“跨国公司”，表达拥有一支具备“多元”文化背景的员工队伍，选 diverse。",
            family: "diverse (adj.多种多样的/多元的) | lately (adv.最近) | shortage (n.短缺) | informal (adj.非正式的)。",
            details: "diverse cultural backgrounds 意为“多元文化背景”，是企业多元化（D&I）主题中的核心表达。",
            cn: "我们的跨国公司很自豪能拥有一支具备多元文化背景的员工队伍。",
            jp: "当社の多国籍企業は、多様な（diverse）文化的背景を持つ従業員を擁していることを誇りに思っています。"
        }
    },
    {
        id: 7,
        target: "cite",
        category: "中等",
        stem: "In his research report, the economist was careful to ________ reliable sources for all statistical data.",
        options: ["cite", "fulfill", "portray", "diversify"],
        correct: "cite",
        explanations: {
            guide: "动词词义辨析。位于不定式符号 to 之后，与 reliable sources（可靠来源）构成动宾搭配，表达“引用”可靠来源，选 cite。",
            family: "cite (v.引用) | fulfill (v.履行) | portray (v.描绘) | diversify (v.多样化)。",
            details: "cite reliable sources 意为“引用可靠来源”，是商务分析与学术报告中的标准固定短语。",
            cn: "在他的研究报告中，这位经济学家非常注意为所有统计数据引用可靠的来源。",
            jp: "研究報告書の中で、その研究者はすべての統計データについて信頼できる情報源を引用（cite）するよう注意を払いました。"
        }
    },
    {
        id: 8,
        target: "hopefully",
        category: "中等",
        stem: "The renovation of the main conference room is progressing well, and ________ it will be finished next week.",
        options: ["hopefully", "lately", "informally", "shortly"],
        correct: "hopefully",
        explanations: {
            guide: "副词修饰整个句子（句子状语）。位于并列连词 and 之后，修饰从句 it will be finished next week，表达对下周按期完工的期待，选 hopefully（但愿/希望）。",
            family: "hopefully (adv.希望地/但愿) | lately (adv.近来) | informally (adv.非正式地) | shortly (adv.不久/立刻)。",
            details: "hopefully 作为句首/分句首状语，用于对未来进展表达积极乐观的愿望。",
            cn: "主会议室的翻修工程进展顺利，希望下周能够完工。",
            jp: "メイン会議室の改修は順調に進んでおり、うまくいけば（hopefully）来週には完了する予定です。"
        }
    },
    {
        id: 9,
        target: "lately",
        category: "中等",
        stem: "Several clients have been complaining about slower response times from technical support ________.",
        options: ["lately", "hopefully", "informal", "brand-new"],
        correct: "lately",
        explanations: {
            guide: "副词与时态搭配考点。位于句末，修饰现在完成进行时谓语 have been complaining，表达“近来/最近”一直在抱怨，选 lately。",
            family: "lately (adv.近来) | hopefully (adv.希望) | informal (adj.非正式的) | brand-new (adj.崭新的)。",
            details: "lately 与现在完成时或现在完成进行时完美契合，常放在句尾作为时间状语，等同于 recently。",
            cn: "几位客户最近一直在抱怨技术支持团队的响应速度变慢了。",
            jp: "最近（lately）、技術サポートからの返信時間が遅くなっていることについて、数名の顧客から不満が寄せられています。"
        }
    },
    {
        id: 10,
        target: "portrait",
        category: "中等",
        stem: "Before sending the document to the printer, make sure the page orientation is set to ________ mode.",
        options: ["portrait", "workload", "shortage", "citation"],
        correct: "portrait",
        explanations: {
            guide: "名词词义与打印术语辨析。修饰 mode，与 page orientation（页面方向）搭配，指将打印设置设定为“纵向”模式，选 portrait。",
            family: "portrait (n.纵向/肖像) | workload (n.工作量) | shortage (n.短缺) | citation (n.引用)。",
            details: "portrait mode / orientation 指打印或排版中的“纵向模式”，与之相对的是 landscape（横向）。",
            cn: "在将文档发送到打印机之前，请确保页面方向设置为纵向模式。",
            jp: "ドキュメントをプリンターに送信する前に、ページ方向が縦向き（portrait）モードに設定されていることを確認してください。"
        }
    },
    {
        id: 11,
        target: "fulfill",
        category: "中等",
        stem: "Prompt order ________ is crucial for maintaining high customer satisfaction ratings in e-commerce.",
        options: ["fulfillment", "fulfill", "fulfilled", "workload"],
        correct: "fulfillment",
        explanations: {
            guide: "复合名词与主语中心词考点。位于形容词 Prompt 和名词 order 之后，充当句子的主语中心词，表达“订单履约/订单处理”，选抽象名词 fulfillment。",
            family: "fulfillment (n.履约/满足) | fulfill (v.履行) | fulfilled (adj.已履行的) | workload (n.工作量)。",
            details: "order fulfillment（订单履约）是电子商务和物流供应链中的标准核心词组。此处需要名词作主语。",
            cn: "及时完成订单履约对于保持电子商务中的高客户满意度至关重要。",
            jp: "電子商取引において高い顧客満足度を維持するためには、迅速な注文履行（fulfillment）が極めて重要です。"
        }
    },
    {
        id: 12,
        target: "diverse",
        category: "中等",
        stem: "The HR director emphasized the importance of workplace ________ during the new employee orientation.",
        options: ["diversity", "diverse", "diversify", "shortage"],
        correct: "diversity",
        explanations: {
            guide: "名词派生词考点。位于介词 of 之后，由 workplace 修饰，作 importance 的后置定语，表达“职场多元化/多样性”，选名词 diversity。",
            family: "diversity (n.多样性/多元化) | diverse (adj.多种多样的) | diversify (v.多样化) | shortage (n.短缺)。",
            details: "workplace diversity（职场多元化）属于现代企业人力资源管理极高频考点。此处缺少名词作介词宾语。",
            cn: "人力资源总监在新员工入职培训期间强调了职场多元化的重要性。",
            jp: "人事部長は、新入社員研修の中で職場における多様性（diversity）の重要性を強調しました。"
        }
    },
    {
        id: 13,
        target: "cite",
        category: "困难",
        stem: "The author received an award for academic excellence after her publication earned a high number of scholarly ________.",
        options: ["citations", "cites", "citing", "portraits"],
        correct: "citations",
        explanations: {
            guide: "名词派生与复数考点。作 earned 的宾语，由形容词 scholarly（学术的）和 a high number of 修饰，表达获得了大量的学术“引用/引证”，选复数名词 citations。",
            family: "citations (n.引用/引证/复数) | cites (v.引用/单数) | citing (pres-p.引用中) | portraits (n.肖像/复数)。",
            details: "scholarly citations 意为“学术引用”。cite 为动词，无法直接被形容词 scholarly 修饰并接在 a high number of 之后。",
            cn: "该作者的著作在获得大量学术引用后，荣获了学术卓越奖。",
            jp: "その著者は、論文が多くの学術的引用（citations）を獲得したことで、優秀学術賞を受賞しました。"
        }
    },
    {
        id: 14,
        target: "informal",
        category: "困难",
        stem: "Despite the ________ of the dinner gathering, several key business partnerships were established.",
        options: ["informality", "informal", "informally", "shortage"],
        correct: "informality",
        explanations: {
            guide: "抽象名词派生考点。位于定冠词 the 之后、介词 of 之前，作介词 Despite 的宾语，表达尽管晚宴聚会具有“非正式性/随意性”，选名词 informality。",
            family: "informality (n.非正式/随意) | informal (adj.非正式的) | informally (adv.非正式地) | shortage (n.短缺)。",
            details: "the informality of... 意为“……的非正式性/轻松气氛”。informal 为形容词，不能直接放在 the ... of 之间充当名词中心语。",
            cn: "尽管晚宴聚会十分轻松随意，但双方还是建立了几个关键的商业合作关系。",
            jp: "夕食会のカジュアルさ（informality）にもかかわらず、いくつかの重要なビジネスパートナーシップが確立されました。"
        }
    },
    {
        id: 15,
        target: "shortage",
        category: "困难",
        stem: "The technician informed us that power to the facility will be restored ________ after the transformer is repaired.",
        options: ["shortly", "shortage", "shorten", "lately"],
        correct: "shortly",
        explanations: {
            guide: "副词派生词辨析。修饰将来时谓语动词 will be restored，表达电力将在变压器修复后“不久/很快”恢复，选副词 shortly。",
            family: "shortly (adv.不久/很快) | shortage (n.短缺) | shorten (v.缩短) | lately (adv.最近)。",
            details: "shortly 意为“不久/很快”（= soon），常与一般将来时（will do）连用。shortage 为名词（短缺），语法不符。",
            cn: "技术人员告知我们，变压器修复后，该设施的电力很快就会恢复。",
            jp: "技術者は、変圧器の修理後、施設の電力がまもなく（shortly）復旧すると説明しました。"
        }
    },
    {
        id: 16,
        target: "portrait",
        category: "困难",
        stem: "The documentary film managed to ________ the struggles and triumphs of early tech entrepreneurs accurately.",
        options: ["portray", "portrait", "portrayal", "cite"],
        correct: "portray",
        explanations: {
            guide: "动词派生与不定式考点。位于 managed to 之后，需要填入动词原形，与后面的宾语 struggles and triumphs 构成动宾搭配，表达精准“描绘/展现”，选 portray。",
            family: "portray (v.描绘/展现) | portrait (n.肖像/纵向) | portrayal (n.描绘) | cite (v.引用)。",
            details: "portray the struggles and triumphs 意为“描绘奋斗与成功”。portray 是名词 portrait 的同源派生动词。",
            cn: "这部纪录片成功准确地描绘了早期科技创业者的奋斗与成功。",
            jp: "そのドキュメンタリー映画は、初期のIT起業家たちの苦闘と勝利を正確に描写すること（portray）に成功しました。"
        }
    },
    {
        id: 17,
        target: "diverse",
        category: "困难",
        stem: "To minimize financial risk, investment advisors strongly recommend that clients ________ their asset portfolios.",
        options: ["diversify", "diverse", "diversity", "fulfillment"],
        correct: "diversify",
        explanations: {
            guide: "虚拟语气与派生动词考点。recommend that 从句中谓语动词需使用原形动词（should + 动词原形，should 常被省略）。表达将资产组合“进行多样化配置”，选动词 diversify。",
            family: "diversify (v.使多样化/分散投资) | diverse (adj.多种多样的) | diversity (n.多样性) | fulfillment (n.履行)。",
            details: "diversify asset portfolios（分散资产投资组合）是金融投资领域极高频的标准行话。diverse 是形容词，不能充当从句谓语。",
            cn: "为了最大程度降低财务风险，投资顾问强烈建议客户实现其资产组合的多样化。",
            jp: "財務リスクを最小限に抑えるため、投資アドバイザーは顧客が資産ポートフォリオを分散（diversify）することを強く推奨しています。"
        }
    },
    {
        id: 18,
        target: "workload",
        category: "困难",
        stem: "To prevent employee burnout, management implemented a new software system to evenly distribute the administrative ________.",
        options: ["workload", "shortage", "fulfillment", "citation"],
        correct: "workload",
        explanations: {
            guide: "名词搭配与高阶语境考点。作 distribute（分配）的宾语，由形容词 administrative（行政的）修饰，结合前文“防止员工职业倦怠”，选 workload（工作量）。",
            family: "workload (n.工作量) | shortage (n.短缺) | fulfillment (n.履行) | citation (n.引用)。",
            details: "distribute administrative workload 意为“平均分配行政工作量”，是企业组织管理与人力资源优化的核心逻辑。",
            cn: "为了防止员工产生职业倦怠，管理层实施了一个新的软件系统来均匀分配行政工作量。",
            jp: "従業員のバーンアウトを防ぐため、経営陣は管理業務の負荷（workload）を均等に分散する新しいソフトウェアシステムを導入しました。"
        }
    }
];