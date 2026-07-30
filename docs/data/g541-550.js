// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data121-130.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "comprehensive",
        pos: "形",
        ipa: "/ˌkɑːmprɪˈhensɪv/",
        cn: "全面的，综合的，详尽的",
        jp: "包括的な、総合的な、詳細な",
        family: "comprehend / comprehension / comprehensively",
        tips: "商务报告与保险场景高频词！常考搭配：comprehensive report（综合报告）、comprehensive review（全面审查）、comprehensive insurance coverage（综合保险承保范围）。",
        desc: "She wrote a comprehensive report."
    },
    {
        word: "prescription",
        pos: "名",
        ipa: "/prɪˈskrɪpʃn/",
        cn: "处方，处方药",
        jp: "処方箋、処方薬",
        family: "prescribe / prescriptive / prescriber",
        tips: "医疗与药房零售高频考点。常考：prescription drug/medication（处方药）、fill a prescription（按处方抓药/配药）。",
        desc: "Pick up your prescription at the pharmacy."
    },
    {
        word: "acknowledge",
        pos: "動",
        ipa: "/əkˈnɑːlɪdʒ/",
        cn: "确认收悉，承认，告知收到",
        jp: "領収を認める、認める、感謝する",
        family: "acknowledgment / acknowledged",
        tips: "商务信函与邮件第一高频动词！常考句型：acknowledge receipt of the email/letter（确认收到邮件/信件）。名词形式 acknowledgment 同样高频。",
        desc: "Please acknowledge receipt of this email."
    },
    {
        word: "authorized",
        pos: "形/動",
        ipa: "/ˈɔːθəraɪzd/",
        cn: "经授权的，批准的",
        jp: "権限を与えられた、公認の",
        family: "authorize / authorization / authority",
        tips: "安全规章与商业代理考点。常考搭配：authorized personnel（获授权人员）、authorized dealer（授权经销商）、authorized representative（授权代表）。",
        desc: "Only authorized personnel may enter."
    },
    {
        word: "usage",
        pos: "名",
        ipa: "/ˈjuːsɪdʒ/",
        cn: "使用，使用量，用法",
        jp: "使用、使用量、語法",
        family: "use / useful / user / useless",
        tips: "能源消费与软件考点。常考搭配：water/electricity usage（用水/用电量）、daily usage（日常使用量）、data usage（数据流量使用）。",
        desc: "Monitor your daily electricity usage."
    },
    {
        word: "disappointed",
        pos: "形",
        ipa: "/ˌdɪsəˈpɔɪntɪd/",
        cn: "感到失望的，沮丧的",
        jp: "失望した、がっかりした",
        family: "disappoint / disappointing / disappointment",
        tips: "客户反馈与情感考点。人作主语用 disappointed（be disappointed with/by...）；事/物作主语或作定语修饰名词时用 disappointing（disappointing results 令人失望的结果）。",
        desc: "Customers were disappointed with the service."
    },
    {
        word: "reveal",
        pos: "動",
        ipa: "/rɪˈviːl/",
        cn: "揭露，显示，透露",
        jp: "明かす、暴露する、示す",
        family: "revelation / revealing / unrevealed",
        tips: "调查分析与新产品发布高频动词，等同于 show / disclose。常考：reveal new survey findings（揭示新调查结果）、reveal details（透露细节）。",
        desc: "The survey revealed new insights."
    },
    {
        word: "outlet",
        pos: "名",
        ipa: "/ˈaʊtlet/",
        cn: "专卖店，折扣店；电源插座；出路",
        jp: "アウトレット、販売店；コンセント",
        family: "outlets / media outlet / factory outlet",
        tips: "多重考点词：1. 商业零售：retail outlet（零售专卖店）、factory outlet（工厂直销店）；2. 设施电气：electrical outlet（电源插座）；3. 媒体：media outlet（媒体机构）。",
        desc: "Plug the cable into the outlet."
    },
    {
        word: "utility",
        pos: "名",
        ipa: "/juːˈtɪləti/",
        cn: "公用事业（水电气等）；效用，实用",
        jp: "公共事業（電気・ガス・水道）；有用性",
        family: "utilize / utilization / utilities",
        tips: "托业高频核心词！复数 utilities 特指“水电气杂费”，常考 utility bill（水电费账单）、utility company（公用事业公司）。",
        desc: "Pay your utility bill on time."
    },
    {
        word: "substantial",
        pos: "形",
        ipa: "/səbˈstænʃl/",
        cn: "大量的，可观的；重大的",
        jp: "かなりの、大幅な、実質的な",
        family: "substance / substantially / substantiate",
        tips: "财务与业绩修饰高频词！等同于 significant / considerable。常考：substantial increase/growth（大幅增长）、substantial discount（重大折扣）。副词 substantially 常考修饰比较级。",
        desc: "We achieved a substantial profit."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "comprehensive",
        category: "简单",
        stem: "The new manager prepared a ________ report covering all aspects of the quarterly budget.",
        options: ["comprehensive", "comprehension", "prescription", "outlet"],
        correct: "comprehensive",
        explanations: {
            guide: "形容词作前置定语。________ report 结构中需要形容词修饰名词 report，表达一份“全面的/综合的”报告，选 comprehensive。",
            family: "comprehensive (adj.全面的) | comprehension (n.理解) | prescription (n.处方) | outlet (n.专卖店/插座)。",
            details: "comprehensive report 是托业商务报告场景的标准表达。comprehension 是名词，不能直接充当修饰 report 的前置定语。",
            cn: "新经理准备了一份涵盖季度预算各个方面的综合报告。",
            jp: "新しいマネージャーは、四半期予算のすべての側面を網羅した包括的な（comprehensive）報告書を作成しました。"
        }
    },
    {
        id: 2,
        target: "prescription",
        category: "简单",
        stem: "Patients can pick up their ________ medication at any licensed pharmacy in the city.",
        options: ["prescription", "prescribe", "usage", "reveal"],
        correct: "prescription",
        explanations: {
            guide: "名词作前置定语。________ medication 构成固定短语，表示“处方药”，选 prescription。",
            family: "prescription (n.处方) | prescribe (v.开处方) | usage (n.使用量) | reveal (v.揭露)。",
            details: "prescription medication（处方药）属于医疗与药房零售场景的固定高频搭配。prescribe 是动词，不能直接作名词前置定语。",
            cn: "患者可以在该市的任何一家持牌药房提取其处方药。",
            jp: "患者は市内の認可された薬局で処方（prescription）薬を受け取ることができます。"
        }
    },
    {
        id: 3,
        target: "acknowledge",
        category: "简单",
        stem: "Please send a quick reply to ________ receipt of the attached contract files.",
        options: ["acknowledge", "acknowledgment", "utility", "disappointed"],
        correct: "acknowledge",
        explanations: {
            guide: "动词不定式结构。to 后面需要接动词原形，表达“确认收到”附带的合同文件，选 acknowledge。",
            family: "acknowledge (v.确认收悉) | acknowledgment (n.确认) | utility (n.公用事业) | disappointed (adj.失望的)。",
            details: "acknowledge receipt of... 是托业商务邮件的核心高频句型。acknowledgment 为名词，不能跟在不定式符号 to 之后作动词。",
            cn: "请快速回复以确认收到随附的合同文件。",
            jp: "添付された契約ファイルの受領を確認する（acknowledge）ため、簡単な返信をお送りください。"
        }
    },
    {
        id: 4,
        target: "authorized",
        category: "简单",
        stem: "Access to the server room is strictly restricted to ________ personnel only.",
        options: ["authorized", "authorization", "substantial", "outlet"],
        correct: "authorized",
        explanations: {
            guide: "形容词修饰名词。________ personnel 属于安保规程高频词组，表示“获授权的人员”，选 authorized。",
            family: "authorized (adj.获授权的) | authorization (n.授权) | substantial (adj.大量的) | outlet (n.插座/专卖店)。",
            details: "authorized personnel（授权人员）是办公安保提示的标准用语。authorization 是名词（授权书），不能直接修饰 personnel。",
            cn: "服务器机房的进入权限严格仅限于获授权人员。",
            jp: "サーバー室への立ち入りは、権限を与えられた（authorized）人員のみに厳格に制限されています。"
        }
    },
    {
        id: 5,
        target: "disappointed",
        category: "简单",
        stem: "Many investors were ________ with the company's lower-than-expected sales results.",
        options: ["disappointed", "disappointing", "usage", "comprehensive"],
        correct: "disappointed",
        explanations: {
            guide: "形容词作表语修饰人。主语是人（investors），系动词 were 后面接修饰人的心理状态形容词 disappointed（感到失望的）。",
            family: "disappointed (adj.感到失望的) | disappointing (adj.令人失望的) | usage (n.使用量) | comprehensive (adj.全面的)。",
            details: "be disappointed with/by... 意为“对……感到失望”。disappointing 用来修饰事物或客观结果，不能直接修饰表达人的感受。",
            cn: "许多投资者对该公司低于预期的销售业绩感到失望。",
            jp: "多くの投資家は、会社の予想を下回る売上結果に失望しました（disappointed）。"
        }
    },
    {
        id: 6,
        target: "reveal",
        category: "简单",
        stem: "The latest customer survey will ________ key information about consumer shopping habits.",
        options: ["reveal", "revelation", "utility", "prescription"],
        correct: "reveal",
        explanations: {
            guide: "情态动词后的动词原形。will 后面需要接动词原形，表达调查将“揭示/显示”关键信息，选 reveal。",
            family: "reveal (v.揭示) | revelation (n.揭露) | utility (n.公用事业) | prescription (n.处方)。",
            details: "will reveal 构成谓语结构。revelation 是名词，不能在情态动词 will 之后充当谓语动词。",
            cn: "最新的客户调查将揭示有关消费者购物习惯的关键信息。",
            jp: "最新の顧客調査により、消費者のショッピング習慣に関する重要な情報が明らかになる（reveal）予定です。"
        }
    },
    {
        id: 7,
        target: "usage",
        category: "中等",
        stem: "Building managers are taking steps to monitor water and electricity ________ during peak summer hours.",
        options: ["usage", "usefully", "acknowledge", "disappointed"],
        correct: "usage",
        explanations: {
            guide: "名词作宾语。monitor water and electricity ________ 结构中需要接名词，表达监控水和电的“使用量”，选 usage。",
            family: "usage (n.使用量) | usefully (adv.有用性地) | acknowledge (v.确认) | disappointed (adj.失望的)。",
            details: "water and electricity usage 是能源管理场景的固定表达。usefully 是副词，不能充当动词 monitor 的宾语。",
            cn: "大楼管理员正采取措施监控夏季用电用水高峰期的数据使用量。",
            jp: "ビルの管理者は、夏の間ピーク時の水と電気の使用量（usage）を監視するための対策を講じています。"
        }
    },
    {
        id: 8,
        target: "outlet",
        category: "中等",
        stem: "The electronic device should be safely plugged into a grounded wall ________ before turning it on.",
        options: ["outlet", "outlets", "substantial", "authorized"],
        correct: "outlet",
        explanations: {
            guide: "单数名词与场景辨析。a grounded wall ________ 结构中，前有不定冠词 a，需要接单数名词 outlet，表示“电源插座”。",
            family: "outlet (n.插座/单数) | outlets (n.复数) | substantial (adj.可观的) | authorized (adj.授权的)。",
            details: "plugged into a wall outlet（插入墙壁插座）是设施与电器使用场景的高频考点。不定冠词 a 要求使用单数形式 outlet，排除复数 outlets。",
            cn: "在打开电子设备前，应将其安全地插入已接地的墙壁插座中。",
            jp: "電子機器は、電源を入れる前にアース付きの壁コンセント（outlet）に安全に差し込む必要があります。"
        }
    },
    {
        id: 9,
        target: "utility",
        category: "中等",
        stem: "Residents are advised that monthly ________ bills can be paid online via the city council website.",
        options: ["utility", "utilize", "reveal", "comprehensive"],
        correct: "utility",
        explanations: {
            guide: "名词作前置定语修饰名词。________ bills 属于生活设施高频搭配，utility bill 意为“水电费/公用事业费账单”。",
            family: "utility (n.公用事业/实用) | utilize (v.利用) | reveal (v.揭示) | comprehensive (adj.全面的)。",
            details: "utility bill（水电费账单）是托业生活设施与财务支付场景中的核心固定表述。utilize 是动词，不能修饰名词 bills。",
            cn: "提醒居民，每月的水电费账单可以通过市政局网站在线支付。",
            jp: "住民の皆様には、毎月の公共料金（utility）の請求書は市議会のウェブサイトからオンラインで支払うことができる旨案内されています。"
        }
    },
    {
        id: 10,
        target: "substantial",
        category: "中等",
        stem: "Thanks to effective cost-cutting measures, the firm achieved a ________ increase in net profit.",
        options: ["substantial", "substantially", "prescription", "acknowledge"],
        correct: "substantial",
        explanations: {
            guide: "形容词修饰名词。a ________ increase 结构中，需要形容词修饰增幅名词 increase，表达“大幅的/可观的”增长，选 substantial。",
            family: "substantial (adj.可观的) | substantially (adv.大幅度地) | prescription (n.处方) | acknowledge (v.确认)。",
            details: "a substantial increase 属于财务业绩分析中的典型高频结构。substantially 是副词，不能接受不定冠词 a 的修饰来作前置定语。",
            cn: "得益于有效的成本削减措施，该公司实现了净利润的大幅增长。",
            jp: "効果的なコスト削減策のおかげで、同社は純利益の大幅な（substantial）増加を達成しました。"
        }
    },
    {
        id: 11,
        target: "comprehensive",
        category: "中等",
        stem: "The insurance policy provides ________ coverage against property damage and third-party liability.",
        options: ["comprehensive", "comprehend", "usage", "disappointed"],
        correct: "comprehensive",
        explanations: {
            guide: "形容词修饰不可数名词。________ coverage 属于金融保险场景的核心短语，comprehensive coverage 意为“综合保险承保范围”。",
            family: "comprehensive (adj.综合的) | comprehend (v.理解) | usage (n.使用量) | disappointed (adj.失望的)。",
            details: "comprehensive coverage（综合保险/全险）是保险理赔场景的专属考点。comprehend 为动词，不能修饰名词 coverage。",
            cn: "该保险单针对财产损失和第三方责任提供全面的综合保险保障。",
            jp: "この保険ポリシ一は、財産の損害および第三者賠償責任に対する包括的な（comprehensive）補償を提供します。"
        }
    },
    {
        id: 12,
        target: "acknowledge",
        category: "中等",
        stem: "The corporate executive board voted to ________ the employee's outstanding contributions to the team.",
        options: ["acknowledge", "acknowledgment", "authorized", "outlet"],
        correct: "acknowledge",
        explanations: {
            guide: "动词不定式与表彰语境。voted to 后面接动词原形，表达表彰与“认可/表彰”员工对团队的突出贡献，选 acknowledge。",
            family: "acknowledge (v.认可/表彰) | acknowledgment (n.认可) | authorized (adj.授权的) | outlet (n.专卖店)。",
            details: "acknowledge contributions（表彰/认可贡献）属于职场管理的高频词组。acknowledgment 是名词，不能跟在不定式符号 to 之后作谓语动词。",
            cn: "公司执行董事会投票表决，以表彰该员工对团队做出的突出贡献。",
            jp: "会社の取締役会は、チームに対するその従業員の優れた貢献を承認する（acknowledge）ことを可決しました。"
        }
    },
    {
        id: 13,
        target: "authorized",
        category: "困难",
        stem: "Without explicit written ________ from the regional supervisor, staff members may not approve expense claims.",
        options: ["authorization", "authorized", "utility", "substantial"],
        correct: "authorization",
        explanations: {
            guide: "形容词修饰的名词宾语。Without explicit written ________ 结构中，形容词 written（书面的）后面需要接名词，选 authorization（授权/批准）。",
            family: "authorization (n.授权/批准) | authorized (adj.获授权的) | utility (n.公用事业) | substantial (adj.大量的)。",
            details: "written authorization（书面授权书）属于财务报销与行政审批场景的高阶固定搭配。authorized 是形容词，不能作介词 Without 的宾语中心词。",
            cn: "未经区域主管的明确书面授权，员工不得批准报销申请。",
            jp: "地域スーパーバイザーからの明確な書面による許可（authorization）がない限り、スタッフは経費請求を承認することができません。"
        }
    },
    {
        id: 14,
        target: "disappointed",
        category: "困难",
        stem: "The marketing team expressed frustration over the ________ turnout at the product launch event.",
        options: ["disappointing", "disappointed", "usage", "reveal"],
        correct: "disappointing",
        explanations: {
            guide: "分词形容词修饰无生命名词。the ________ turnout 结构中，turnout（出席人数/结果）是无生命名词，需用动词的 -ing 分词形式 disappointing 作前置定语。",
            family: "disappointing (adj.令人失望的) | disappointed (adj.感到失望的) | usage (n.使用量) | reveal (v.揭示)。",
            details: "disappointing turnout 意为“令人失望的出席率”。disappointed 专门用来形容人的心理状态感受（如 angry/disappointed investors），不可用来修饰 turnout。",
            cn: "营销团队对产品发布会上令人失望的出席人数表示挫败。",
            jp: "マーケティングチームは、製品発表イベントでのがっかりさせるような（disappointing）参加者数に不満を表明しました。"
        }
    },
    {
        id: 15,
        target: "substantial",
        category: "困难",
        stem: "Technological advancements in production have ________ reduced manufacturing turnaround times.",
        options: ["substantially", "substantial", "prescription", "comprehensive"],
        correct: "substantially",
        explanations: {
            guide: "副词修饰动词。have ________ reduced 结构中，位于助动词 have 和过去分词 reduced 之间，需要副词作状语，选 substantially（大幅度地）。",
            family: "substantially (adv.大幅度地) | substantial (adj.大量的) | prescription (n.处方) | comprehensive (adj.全面的)。",
            details: "substantially reduced（大幅度缩短/减少）属于典型的“副词修饰动词”考法。substantial 是形容词，不能修饰动词 reduced。",
            cn: "生产技术的进步大幅缩短了制造周期时间。",
            jp: "生産における技術の進歩により、製造のターンアラウンドタイムが大幅に（substantially）短縮されました。"
        }
    },
    {
        id: 16,
        target: "outlet",
        category: "困难",
        stem: "To expand its regional market presence, the fashion retailer plans to open five new factory ________ across the province.",
        options: ["outlets", "outlet", "utility", "acknowledge"],
        correct: "outlets",
        explanations: {
            guide: "数词修饰复数名词。five new factory ________ 结构中，基数词 five 要求后面接可数名词复数形式 outlets（直销店/折扣店）。",
            family: "outlets (n.直销店/复数) | outlet (n.单数) | utility (n.公用事业) | acknowledge (v.确认)。",
            details: "factory outlets（工厂直销专卖店）是零售扩张场景的高频考点。数词 five 决定了必须充当复数名词 outlets。",
            cn: "为了扩大其区域市场份额，该服装零售商计划在该省新开五家工厂直销店。",
            jp: "地域の市場シェアを拡大するため、そのファッション小売業者は省内に5つの新しいファクトリーアウトレット（outlets）を開店する計画です。"
        }
    },
    {
        id: 17,
        target: "utility",
        category: "困难",
        stem: "The local ________ company announced a temporary service interruption scheduled for maintenance this weekend.",
        options: ["utility", "utilize", "authorized", "disappointed"],
        correct: "utility",
        explanations: {
            guide: "专有名词与机构搭配。local ________ company 指“当地公用事业（水电气）公司”，选 utility。",
            family: "utility (n.公用事业) | utilize (v.利用) | authorized (adj.授权的) | disappointed (adj.失望的)。",
            details: "utility company 是供应水、电、天然气等公共设施公司的固定专属称谓。utilize 为动词，无法作修饰 company 的定语。",
            cn: "当地公用事业公司宣布，计划在本周末进行例行维护，届时将暂停服务。",
            jp: "地元の公共事業（utility）会社は、今週末に計画されている保守作業のための一時的なサービス停止を発表しました。"
        }
    },
    {
        id: 18,
        target: "reveal",
        category: "困难",
        stem: "An internal financial audit failed to ________ any evidence of accounting misconduct among the senior staff.",
        options: ["reveal", "revelation", "usage", "prescription"],
        correct: "reveal",
        explanations: {
            guide: "否定不定式结构中的动词原形。failed to 后面需要接动词原形，表达未能“揭示/查出”任何财务违规证据，选 reveal。",
            family: "reveal (v.揭示/查出) | revelation (n.揭露) | usage (n.使用量) | prescription (n.处方)。",
            details: "failed to reveal 意为“未能揭示/未能查出”。fail to do sth 是托业阅读常见结构，to 后面需要动词原形 reveal。revelation 是名词。",
            cn: "内部财务审计未能揭示高级员工中存在任何财务不当行为的证据。",
            jp: "内部財務監査では、幹部社員による会計上の不正行為の証拠は何も明らかになりませんでした（failed to reveal）。"
        }
    }
];