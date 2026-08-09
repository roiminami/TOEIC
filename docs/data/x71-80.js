// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data211-220.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "retrieve",
        pos: "動",
        ipa: "/rɪˈtriːv/",
        cn: "检索，取回，找回",
        jp: "回収する、検索する、取り弄す",
        family: "retrieval / retriever / retrieved",
        tips: "IT与文件处理高频：retrieve data/files（检索数据/文件），retrieval system（检索系统）。",
        desc: "Please retrieve the file."
    },
    {
        word: "adhere",
        pos: "動",
        ipa: "/ədˈhɪr/",
        cn: "遵守，坚持，粘附",
        jp: "遵守する、固執する",
        family: "adherence / adherent / adhesive",
        tips: "高频搭配：adhere to regulations/policies（遵守规定/政策），注意必须与介词 to 连用。",
        desc: "You must adhere to rules."
    },
    {
        word: "apparently",
        pos: "副",
        ipa: "/əˈpærəntli/",
        cn: "显然，据表面看来",
        jp: "どうやら、見たところ",
        family: "apparent / apparentness",
        tips: "阅读与转折语气高频：apparently simple（看似简单），was apparently caused by...（显然是由……引起）。",
        desc: "He is apparently busy."
    },
    {
        word: "endeavor",
        pos: "名/動",
        ipa: "/ɪnˈdevər/",
        cn: "努力，尝试，事业",
        jp: "努力、試み；努力する",
        family: "endeavored / endeavoring",
        tips: "商务高频：make every endeavor（尽一切努力），business endeavor（商业尝试）。",
        desc: "We support your endeavor."
    },
    {
        word: "boutique",
        pos: "名",
        ipa: "/buːˈtiːk/",
        cn: "精品店，专营公司",
        jp: "ブティック、専門店",
        family: "boutiques",
        tips: "零售与高端服务高频：boutique hotel（精品酒店），boutique agency（咨询专营公司）。",
        desc: "She owns a boutique."
    },
    {
        word: "crucially",
        pos: "副",
        ipa: "/ˈkruːʃəli/",
        cn: "关键地，至关重要地",
        jp: "決定的に、極めて重要なことに",
        family: "crucial / cruciality",
        tips: "商务与学术逻辑高频：more crucially（更关键地），crucially important（至关重要）。",
        desc: "It is crucially important."
    },
    {
        word: "portrait",
        pos: "名",
        ipa: "/ˈpɔːrtrət/",
        cn: "肖像，画像，描绘",
        jp: "肖像画、ポートレート",
        family: "portray / portrayal / portraiture",
        tips: "Part 1 与展出高频：family portrait（全家福），portrait painting（肖像画），portrait orientation（纵向打印/显示）。",
        desc: "A portrait hangs here."
    },
    {
        word: "relentlessly",
        pos: "副",
        ipa: "/rɪˈlentləsli/",
        cn: "不懈地，持续地，无情地",
        jp: "絶え間なく、執拗に",
        family: "relentless / relent / relentlessness",
        tips: "修饰动词高频：work relentlessly（不懈工作），pursue goals relentlessly（不懈追求目标）。",
        desc: "They work relentlessly."
    },
    {
        word: "pension",
        pos: "名",
        ipa: "/ˈpenʃn/",
        cn: "养老金，退休金",
        jp: "年金、恩給",
        family: "pensioner / pensionable / pensioning",
        tips: "人力资源与福利高频：pension plan/fund（养老金计划/基金），retire on a pension（依靠养老金退休）。",
        desc: "He receives a pension."
    },
    {
        word: "adopting",
        pos: "動/形",
        ipa: "/əˈdɑːptɪŋ/",
        cn: "采用，采纳，收养（adopt的现在分词）",
        jp: "採用すること、導入する",
        family: "adopt / adoption / adoptive / adopted",
        tips: "商务战略与技术引进高频：adopting new technology（采用新技术），adopting a strategy（采纳策略）。",
        desc: "They are adopting methods."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "adhere",
        category: "简单",
        stem: "All factory workers must ________ to safety guidelines at all times while on duty.",
        options: ["adhere", "adherence", "portrait", "pension"],
        correct: "adhere",
        explanations: {
            guide: "情态动词后的动词原形。must 后面接动词原形，结合介词 to 构成 adhere to（遵守），选 adhere。",
            family: "adhere (v.遵守) | adherence (n.遵守) | portrait (n.肖像) | pension (n.养老金)。",
            details: "must adhere to... 意为必须遵守……。adherence 是名词，不能跟在情态动词 must 后面。",
            cn: "所有工厂工人在值班期间必须随时遵守安全准则。",
            jp: "すべての工場作業員は勤務中、常に安全ガイドラインを遵守（adhere）しなければなりません。"
        }
    },
    {
        id: 2,
        target: "retrieve",
        category: "简单",
        stem: "The IT assistant was able to ________ the lost documents from the server backup system.",
        options: ["retrieve", "retrieval", "boutique", "crucially"],
        correct: "retrieve",
        explanations: {
            guide: "动词不定式考点。was able to 后面接动词原形，表达“取回/检索”丢失的文件，选 retrieve。",
            family: "retrieve (v.取回/检索) | retrieval (n.检索) | boutique (n.精品店) | crucially (adv.关键地)。",
            details: "was able to retrieve 意为能够找回。retrieval 是名词，不能跟在不定式符号 to 后面。",
            cn: "IT 助手成功从服务器备份系统中找回了丢失的文件。",
            jp: "ITアシスタントはサーバーバックアップシステムから失われた文書を回収する（retrieve）ことができました。"
        }
    },
    {
        id: 3,
        target: "pension",
        category: "简单",
        stem: "Retired employees are eligible to receive a monthly ________ from the corporate welfare fund.",
        options: ["pension", "portrait", "endeavor", "apparently"],
        correct: "pension",
        explanations: {
            guide: "福利名词考点。receive a monthly ________ 结合退休人员（retired employees），选 pension（养老金/退休金）。",
            family: "pension (n.养老金) | portrait (n.肖像) | endeavor (n.努力) | apparently (adv.显然)。",
            details: "receive a monthly pension 指每月领取养老金。portrait（肖像）、endeavor（努力）均不符合退休发放福利的语义。",
            cn: "退休员工有资格每月从公司福利基金中领取养老金。",
            jp: "退職した従業員は、企業の福利厚生基金から毎月年金（pension）を受け取る資格があります。"
        }
    },
    {
        id: 4,
        target: "boutique",
        category: "简单",
        stem: "The local clothing ________ opened a new branch in the downtown shopping district.",
        options: ["boutique", "pension", "relentlessly", "adopting"],
        correct: "boutique",
        explanations: {
            guide: "零售机构名词。clothing ________ 指服装“精品店/专营店”，选 boutique。",
            family: "boutique (n.精品店) | pension (n.养老金) | relentlessly (adv.不懈地) | adopting (v-ing/n.采用)。",
            details: "clothing boutique 指服装专卖/精品店。pension（养老金）非商店实体名称。",
            cn: "当地的服装精品店在市中心商业区开设了一家新分店。",
            jp: "地元の衣料品ブティック（boutique）は、ダウンタウンのショッピング街に新しい支店をオープンしました。"
        }
    },
    {
        id: 5,
        target: "portrait",
        category: "简单",
        stem: "A large oil ________ of the founder is hanging in the corporate boardroom.",
        options: ["portrait", "retrieve", "adhere", "crucially"],
        correct: "portrait",
        explanations: {
            guide: "艺术展品名词。A large oil ________ 表达挂在会议室里的创始人“油画肖像”，选 portrait。",
            family: "portrait (n.肖像/画像) | retrieve (v.检索) | adhere (v.遵守) | crucially (adv.关键地)。",
            details: "oil portrait 指油画肖像。retrieve 和 adhere 为动词，不能在冠词 A 和形容词 oil 后面作宾语中心语。",
            cn: "创始人的一幅巨大油画肖像挂在公司董事会会议室里。",
            jp: "創業者の大規模な油彩肖像画（portrait）が会社の取締役会室に飾られています。"
        }
    },
    {
        id: 6,
        target: "endeavor",
        category: "简单",
        stem: "The manager wished all departing team members great success in their new business ________.",
        options: ["endeavor", "endeavored", "pension", "relentlessly"],
        correct: "endeavor",
        explanations: {
            guide: "商务名词考点。business ________ 属于商务高频短语，表达新的“商业事业/尝试”，选 endeavor。",
            family: "endeavor (n.事业/尝试) | endeavored (v-ed) | pension (n.养老金) | relentlessly (adv.不懈地)。",
            details: "new business endeavor 意为新的商业尝试/事业。endeavored 为动词过去式/分词，不能充当名词中心语。",
            cn: "经理祝愿所有离职团队成员在新的商业事业中取得巨大成功。",
            jp: "マネージャーは退職するすべてのチームメンバーの新しいビジネスの試み（endeavor）での大成功を祈りました。"
        }
    },
    {
        id: 7,
        target: "apparently",
        category: "中等",
        stem: "The recent drop in quarterly profits was ________ caused by supply chain bottlenecks.",
        options: ["apparently", "apparent", "boutique", "retrieve"],
        correct: "apparently",
        explanations: {
            guide: "副词修饰被动语态动词。was ________ caused 结构中，需要填写副词修饰过去分词 caused，表达“显然地/据貌似”，选 apparently。",
            family: "apparently (adv.显然地) | apparent (adj.明显的) | boutique (n.精品店) | retrieve (v.检索)。",
            details: "was apparently caused by... 意为显然是由……引起的。apparent 是形容词，不能直接修饰动词 caused。",
            cn: "最近季度利润下降显然是由供应链瓶颈造成的。",
            jp: "最近の四半期利益の低下は、どうやら（apparently）サプライチェーンのボトルネックによって引き起こされたようです。"
        }
    },
    {
        id: 8,
        target: "crucially",
        category: "中等",
        stem: "The executive director stressed that timing is ________ important for the upcoming product launch.",
        options: ["crucially", "crucial", "portrait", "adhere"],
        correct: "crucially",
        explanations: {
            guide: "副词修饰形容词。is ________ important 结构中，用副词修饰形容词 important，表达“至关重要地”，选 crucially。",
            family: "crucially (adv.至关重要地) | crucial (adj.关键的) | portrait (n.肖像) | adhere (v.遵守)。",
            details: "crucially important 属于固定高频修饰短语。crucial 为形容词，不能直接修饰形容词 important。",
            cn: "执行董事强调，时间点对于即将推出的新产品来说至关重要。",
            jp: "専務取締役は、近く予定されている製品発表にとってタイミングが決定的に（crucially）重要であることを強調しました。"
        }
    },
    {
        id: 9,
        target: "relentlessly",
        category: "中等",
        stem: "The software development team worked ________ for three weeks to patch the security vulnerability.",
        options: ["relentlessly", "relentless", "pension", "endeavor"],
        correct: "relentlessly",
        explanations: {
            guide: "副词修饰动词。worked ________ 结构中，用副词修饰不及物动词 worked，表达“不懈地/持续地”工作，选 relentlessly。",
            family: "relentlessly (adv.不懈地/持续地) | relentless (adj.不懈的/无情的) | pension (n.养老金) | endeavor (n.努力)。",
            details: "worked relentlessly 意为不懈地努力工作。relentless 是形容词，不能直接在句中作修饰动词的状语。",
            cn: "软件开发团队不懈地工作了三周，修补了安全漏洞。",
            jp: "ソフトウェア開発チームはセキュリティの脆弱性を修復するために、3週間絶え間なく（relentlessly）作業しました。"
        }
    },
    {
        id: 10,
        target: "adopting",
        category: "中等",
        stem: "By ________ flexible working hours, the company saw a significant increase in employee morale.",
        options: ["adopting", "adopt", "retrieval", "boutique"],
        correct: "adopting",
        explanations: {
            guide: "介词后的动名词。介词 By 后面接动名词，表达“通过采纳/实行”弹性工作时间，选 adopting。",
            family: "adopting (v-ing采纳/采用) | adopt (v.采纳) | retrieval (n.检索) | boutique (n.精品店)。",
            details: "By adopting flexible hours 意为通过采纳弹性时间。adopt 为原形动词，不能直接跟在介词 By 后面做宾语。",
            cn: "通过采纳弹性工作时间，公司的员工士气显着提高。",
            jp: "フレックスタイム制を導入する（adopting）ことで、同社は従業員の士気が大幅に向上するのを目にしました。"
        }
    },
    {
        id: 11,
        target: "adhere",
        category: "中等",
        stem: "Strict ________ to international quality standards is necessary to maintain export certifications.",
        options: ["adherence", "adhere", "portrait", "relentlessly"],
        correct: "adherence",
        explanations: {
            guide: "派生抽象名词考点。Strict ________ to... 结构中，形容词 Strict 后面接名词形式 adherence，表达对标准的“严格遵守”。",
            family: "adherence (n.遵守/坚持) | adhere (v.遵守) | portrait (n.肖像) | relentlessly (adv.不懈地)。",
            details: "Strict adherence to... 意为严格遵守……。adhere 是动词，不能紧跟在形容词 Strict 后面作主语中心语。",
            cn: "要保持出口认证，就必须严格遵守国际质量标准。",
            jp: "輸出認証を維持するには、国際品質規格への厳格な遵守（adherence）が必要です。"
        }
    },
    {
        id: 12,
        target: "retrieve",
        category: "中等",
        stem: "Automated document ________ systems enable law firm employees to find archived contracts instantly.",
        options: ["retrieval", "retrieve", "pension", "crucially"],
        correct: "retrieval",
        explanations: {
            guide: "复合名词定语考点。document ________ systems 指“文件检索系统”，选名词 retrieval 作前置修饰。",
            family: "retrieval (n.检索/取回) | retrieve (v.检索) | pension (n.养老金) | crucially (adv.关键地)。",
            details: "document retrieval systems 意为文档检索系统。retrieve 是动词，不能直接作为前置名词定语修饰 systems。",
            cn: "自动文档检索系统使律所员工能够瞬间找到归档的合同。",
            jp: "自動文書検索（retrieval）システムにより、法律事務所の従業員はアーカイブされた契約書を即座に見つけることができます。"
        }
    },
    {
        id: 13,
        target: "endeavor",
        category: "困难",
        stem: "The corporate board promised to make every ________ to improve overall workplace ergonomics.",
        options: ["endeavor", "endeavored", "apparently", "adopting"],
        correct: "endeavor",
        explanations: {
            guide: "商务高阶固定短语。make every ________ 属于托业经典搭配，意为“尽一切努力”，选名词 endeavor。",
            family: "endeavor (n.努力/尝试) | endeavored (v-ed) | apparently (adv.显然) | adopting (v-ing)。",
            details: "make every endeavor 意为尽一切努力。endeavored 是动词过去式，不能跟在限定词 every 后面作动词 make 的宾语。",
            cn: "公司董事会承诺尽一切努力改善整体工作场所的人体工程学环境。",
            jp: "取締役会は、全体的な職場環境の人間工学を改善するためにあらゆる努力（endeavor）をすることを約束しました。"
        }
    },
    {
        id: 14,
        target: "pension",
        category: "困难",
        stem: "Human Resources announced planned structural changes to the corporate ________ contribution scheme.",
        options: ["pension", "pensioner", "portrait", "adherence"],
        correct: "pension",
        explanations: {
            guide: "HR高阶复合名词。________ contribution scheme 指“养老金缴费方案”，用名词 pension 作定语。",
            family: "pension (n.养老金) | pensioner (n.领养老金者) | portrait (n.肖像) | adherence (n.遵守)。",
            details: "pension contribution scheme 意为养老金缴费计划。pensioner 指领养老金的人个人，不用于修饰企业缴费方案。",
            cn: "人力资源部宣布了对公司养老金缴费方案进行结构性调整的计划。",
            jp: "人事部は、会社の年金（pension）拠出制度の計画的な構造変更を発表しました。"
        }
    },
    {
        id: 15,
        target: "boutique",
        category: "困难",
        stem: "The financial advisory firm operates as a specialized ________ agency servicing high-net-worth clients.",
        options: ["boutique", "boutiques", "relentlessly", "retrieval"],
        correct: "boutique",
        explanations: {
            guide: "高阶商务前置定语。a specialized ________ agency 意为“专营/精品咨询机构”，用单数名词 boutique 作定语。",
            family: "boutique (n./adj.精品专营的) | boutiques (n.复数) | relentlessly (adv.不懈地) | retrieval (n.检索)。",
            details: "boutique agency 指小型专精的精品机构。作前置定语时使用单数形式 boutique，无需用复数 boutiques。",
            cn: "这家财务咨询公司作为一家专门服务于高净值客户的精品专营机构运营。",
            jp: "その金融顧問会社は、高額所得顧客にサービスを提供する専門のブティック（boutique）機関として運営されています。"
        }
    },
    {
        id: 16,
        target: "portrait",
        category: "困难",
        stem: "The documentary film provides an intimate ________ of the daily challenges faced by tech entrepreneurs.",
        options: ["portrait", "portrayal", "crucially", "adhere"],
        correct: "portrait",
        explanations: {
            guide: "一词多义高阶抽象用法。an intimate ________ 表达对创业者日常挑战的生动“描绘/写照”，选 portrait（亦可用作生动生动的描绘）。",
            family: "portrait (n.写照/肖像/生动描绘) | portrayal (n.扮演/饰演) | crucially (adv.关键地) | adhere (v.遵守)。",
            details: "an intimate portrait of... 是高阶表达，意为对……深入真实的写照/描绘。portrayal 多指演员在戏剧中的角色扮演，而在文献或纪录片对事实的写照语境中常用 portrait。",
            cn: "这部纪录片深入生动地展现了科技创业者面临的日常挑战写照。",
            jp: "そのドキュメンタリー映画は、技術起業家が直面する日々の課題の親密な描写（portrait）を提供しています。"
        }
    },
    {
        id: 17,
        target: "adopting",
        category: "困难",
        stem: "The widespread ________ of artificial intelligence tools led to higher efficiency across all departments.",
        options: ["adoption", "adopting", "relentlessly", "endeavor"],
        correct: "adoption",
        explanations: {
            guide: "派生抽象名词主语考点。The widespread ________ of... 结构中，在定冠词与介词 of 之间填入名词形式 adoption（采纳/应用）。",
            family: "adoption (n.采纳/采用) | adopting (v-ing/adj.) | relentlessly (adv.不懈地) | endeavor (n.努力)。",
            details: "widespread adoption of AI tools 指人工智能工具的广泛应用/采纳。adopting 是分词/动名词，在此充当有定冠词 the 修饰的独立名词主语时选用派生名词 adoption。",
            cn: "人工智能工具的广泛应用导致所有部门效率显著提升。",
            jp: "人工知能ツールの広範な採用（adoption）により、すべての部門で効率が向上しました。"
        }
    },
    {
        id: 18,
        target: "adhere",
        category: "困难",
        stem: "Legal action may be taken against non-________ parties who breach the confidentiality clause.",
        options: ["adherent", "adhere", "retrieval", "apparently"],
        correct: "adherent",
        explanations: {
            guide: "派生前置形容词考点。non-________ parties 表达“不遵守合约的/不依附的”一方，选用派生形容词/名词修饰语 adherent。",
            family: "adherent (adj.遵守的/黏着/n.追随者) | adhere (v.遵守) | retrieval (n.检索) | apparently (adv.显然地)。",
            details: "non-adherent parties 指不遵守规范/条款的当事方。adhere 是动词原形，不能作前置修饰形容词。",
            cn: "可能会对违反保密条款的不守约方采取法律行动。",
            jp: "機密保持条項に違反した非不遵守（adherent）当事者に対して、法的措置が取られる場合があります。"
        }
    }
];