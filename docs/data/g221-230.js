// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag131-140.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "agreement",
        pos: "名",
        ipa: "/əˈɡriːmənt/",
        cn: "协定，协议，同意",
        jp: "合意、協定、契約書",
        family: "agree / agreeable / agreeably",
        tips: "商务合同与谈判场景的核心名词。常考搭配 reach an agreement（达成协议）、sign an agreement（签署协议）。在阅读中，经常与 contract 或 treaty 相互进行同义替换。",
        desc: "They signed the agreement."
    },
    {
        word: "celebration",
        pos: "名",
        ipa: "/ˌselɪˈbreɪʃn/",
        cn: "庆祝，庆祝会",
        jp: "お祝い、祝賀会",
        family: "celebrate / celebratory / celebrated",
        tips: "公司行政与社交活动高频名词。常考搭配 in celebration of...（为了庆祝……）。在听力场景中，通常伴随着周年庆典（anniversary）或业绩达成的主题。",
        desc: "We had a celebration."
    },
    {
        word: "modern",
        pos: "形",
        ipa: "/ˈmɑːdərn/",
        cn: "现代的，新式的",
        jp: "現代的な、最新の",
        family: "modernize / modernization / modernly",
        tips: "办公环境与设备更新常用形容词。常修饰 facilities（设施）、equipment（设备）。在阅读中经常与 state-of-the-art 或 up-to-date 进行同义替换。",
        desc: "The office is modern."
    },
    {
        word: "standard",
        pos: "名/形",
        ipa: "/ˈstændərd/",
        cn: "标准，规格；标准的，规范的",
        jp: "基準、標準；標準的な",
        family: "standards / standardize / standardization",
        tips: "质量控制与行业规范核心词。常考搭配 industry standards（行业标准）、standard safety procedures（标准安全步骤）。其动词形式 standardize 意为“使标准化”。",
        desc: "This is our standard."
    },
    {
        word: "responsible",
        pos: "形",
        ipa: "/rɪˈspɑːnsəbl/",
        cn: "负责的，有责任的",
        jp: "担当している、責任がある",
        family: "responsibility / responsibly",
        tips: "人事职责与项目管理核心形容词。必考固定搭配为 be responsible for...（对……负责），在职位描述中高频出现。名词形式 responsibility 表示“职责”。",
        desc: "She is responsible."
    },
    {
        word: "enclose",
        pos: "動",
        ipa: "/ɪnˈkləʊz/",
        cn: "随信附上，附寄，围住",
        jp: "同封する、囲む",
        family: "enclosure / enclosed / enclosing",
        tips: "商务书信与邮件往来核心动词。在托业信函中极常考过去分词作定语，如 the enclosed document（随附文件）。常与 attach 相互进行同义替换。",
        desc: "Please enclose the receipt."
    },
    {
        word: "specific",
        pos: "形",
        ipa: "/spəˈsɪfɪk/",
        cn: "具体的，特定的，明确的",
        jp: "具体的な、特定の",
        family: "specifically / specification / specifications",
        tips: "需求分析与技术文档核心形容词。常修饰 instructions（具体说明）或 information（特定信息）。复数名词 specifications 常简称 specs（规格说明书）。",
        desc: "Give specific details."
    },
    {
        word: "renew",
        pos: "動",
        ipa: "/rɪˈnuː/",
        cn: "更新，续签，续订",
        jp: "更新する、継続する",
        family: "renewal / renewable / renewed",
        tips: "合同管理与订阅服务核心动词。高频搭配 renew a contract（续签合同）、renew a subscription（续订期刊/数据库）。名词形式 renewal 同样是高频考点。",
        desc: "I want to renew."
    },
    {
        word: "definitely",
        pos: "副",
        ipa: "/ˈdefɪnətli/",
        cn: "明确地，肯定地，毫无疑问地",
        jp: "確かに、間違いなく",
        family: "definite / definitive / definition",
        tips: "商务口语沟通与书信回复核心副词。常用于修饰动词或表达强烈的肯定态度，如 will definitely attend（一定会参加）。在阅读中，经常与 certainly 或 without a doubt 替换。",
        desc: "We will definitely attend."
    },
    {
        word: "destination",
        pos: "名",
        ipa: "/ˌdestɪˈneɪʃn/",
        cn: "目的地，终点",
        jp: "目的地、行き先",
        family: "destine / destined",
        tips: "旅游观光、客运交通与物流快递核心名词。常考搭配 popular travel destination（热门旅游目的地）、final destination（最终目的地）。",
        desc: "The resort is our destination."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "agreement",
        category: "简单",
        stem: "The two companies signed a formal ________ to collaborate on the new software project.",
        options: ["agreement", "celebration", "enclose", "seminar"],
        correct: "agreement",
        explanations: {
            guide: "及物动词宾语语义辨析。空格前有不定冠词 a 和形容词 formal（正式的），后面接不定式引导的目的状语，此处应填入名词 agreement 作宾语。",
            family: "agreement (n.协定/协议) | celebration (n.庆祝会) | enclose (v.随信附上) | seminar (n.研讨会)。",
            details: "sign a formal agreement 意为“签署正式协议”，符合商务合作语境。其余选项不构成固定搭配或词性不符。",
            cn: "两家公司签署了一项正式协议，共同合作开发这个新软件项目。",
            jp: "両社は、新しいソフトウェアプロジェクトで共同作業を行うための正式な合意（agreement）に署名しました。"
        }
    },
    {
        id: 2,
        target: "celebration",
        category: "简单",
        stem: "All employees are invited to the office ________ for the annual holiday next Friday.",
        options: ["celebration", "destination", "definitely", "weekend"],
        correct: "celebration",
        explanations: {
            guide: "名词修饰词和场景语义辨析。空格前面有修饰语 office（办公室），后面有介词短语，表示“节日”，填入名词 celebration。",
            family: "celebration (n.庆祝会) | destination (n.目的地) | definitely (adv.肯定地) | weekend (n.周末)。",
            details: "office celebration 意为“办公室庆祝活动”，与 annual holiday（年度节日）完美契合。其他选项意思不通或无法合理构成搭配。",
            cn: "所有员工都被邀请参加下周五为庆祝年度节日而举办的办公室庆祝活动。",
            jp: "すべての従業員は、来週金曜日の年次祝日のためのオフィス祝賀会（celebration）に招待されています。"
        }
    },
    {
        id: 3,
        target: "modern",
        category: "简单",
        stem: "The newly built research facility features ________ laboratory equipment to improve safety.",
        options: ["modern", "responsible", "renew", "closed"],
        correct: "modern",
        explanations: {
            guide: "名词前的修饰性形容词辨析。空格用于修饰名词 equipment（设备），根据 improve safety 逻辑，填入表示“现代/先进的”形容词 modern。",
            family: "modern (adj.现代的) | responsible (adj.负责的) | renew (v.更新) | closed (adj.关闭的)。",
            details: "modern equipment 意为“现代化的设备”，常用于企业设施更新的描述。其余选项词性不符或无法修饰设备。",
            cn: "新建的研发设施配备了现代化的实验室设备，以提高安全性。",
            jp: "新しく建設された研究施設は、安全性を向上させるために最新の（modern）実験設備を備えています。"
        }
    },
    {
        id: 4,
        target: "standard",
        category: "简单",
        stem: "Our customer service agents must follow a ________ procedure when handling inquiries.",
        options: ["standard", "agreement", "enclose", "other"],
        correct: "standard",
        explanations: {
            guide: "修饰语名词定语选择。空格修饰名词 procedure（步骤/流程），需填入形容词或名词定语，结合客服语境选 standard。",
            family: "standard (adj.标准的) | agreement (n.同意/协议) | enclose (v.附上) | other (adj.其他的)。",
            details: "standard procedure 意为“标准流程/标准步骤”，是客户服务与质量体系建设中最常见的规范语境。其他选项语义不顺。",
            cn: "我们的客服专员在处理咨询时必须遵循标准流程。",
            jp: "当社のカスタマーサービス担当者は、問い合わせに対応する際、標準的な（standard）手順に従わなければなりません。"
        }
    },
    {
        id: 5,
        target: "responsible",
        category: "简单",
        stem: "The marketing director is ________ for planning the launch of the new promotional campaign.",
        options: ["responsible", "definitely", "celebration", "upcoming"],
        correct: "responsible",
        explanations: {
            guide: "系动词后的固定形容词短语考点。空格前有 is，后有 for，考核固定搭配 be responsible for...（负责……）。",
            family: "responsible (adj.负责的) | definitely (adv.明确地) | celebration (n.庆祝) | upcoming (adj.即将来临的)。",
            details: "be responsible for doing something 意为“负责做某事”，是岗位职责划分中的绝对金牌短语。其余选项不接介词 for。",
            cn: "营销总监负责策划新宣传活动的启动。",
            jp: "マーケティングディレクターは、新しいプロモーションキャンペーンの立ち上げ計画を担当（responsible）しています。"
        }
    },
    {
        id: 6,
        target: "enclose",
        category: "简单",
        stem: "Please ________ a copy of your purchase receipt when submitting the warranty claim form.",
        options: ["enclose", "renew", "modern", "deposit"],
        correct: "enclose",
        explanations: {
            guide: "祈使句的谓语动词词义选择。Please 后面直接接动词原形，结合宾语 receipt（收据）和保修申请场景选 enclose。",
            family: "enclose (v.随信附上) | renew (v.更新) | modern (adj.现代的) | deposit (n./v.押金/存款)。",
            details: "enclose a copy of... 意为“附上一份……的副本”，常用于说明书信附件、邮寄报销或申请保修。其他动词词意不通。",
            cn: "提交保修申请表时，请附上一份您的购买收据副本。",
            jp: "保証請求書を提出する際は、購入領収書の写しを同封（enclose）してください。"
        }
    },
    {
        id: 7,
        target: "specific",
        category: "中等",
        stem: "We need to hire a technician with ________ expertise in maintaining biomedical equipment.",
        options: ["specific", "standard", "responsible", "voluntary"],
        correct: "specific",
        explanations: {
            guide: "修饰名词的形容词词义辨析。空格修饰名词 expertise（专长/专业知识），结合特定生物医药设备的维护，选 specific。",
            family: "specific (adj.具体的/特定的) | standard (adj.标准的) | responsible (adj.负责的) | voluntary (adj.自愿的)。",
            details: "specific expertise 意为“特定的专业知识/专门技能”。在技术性招聘中，强调特定岗位所需要具备的针对性技术。其他干扰项无法构成此逻辑。",
            cn: "我们需要雇用一位在维护生物医学设备方面具有特定专业知识的技术人员。",
            jp: "バイオメディカル機器の保守における特定の（specific）専門知識を持つ技術者を雇用する必要があります。"
        }
    },
    {
        id: 8,
        target: "renew",
        category: "中等",
        stem: "To avoid service interruptions, please ________ your online database subscription before it expires.",
        options: ["renew", "enclose", "destination", "purchase"],
        correct: "renew",
        explanations: {
            guide: "祈使句动词语义及搭配。空格作谓语动词，后面接宾语 subscription（订阅），在过期（expires）前要进行更新，选 renew。",
            family: "renew (v.续订/更新) | enclose (v.附上) | destination (n.目的地) | purchase (v./n.购买)。",
            details: "renew a subscription 意为“续订订阅”，是在软件即服务（SaaS）或期刊订阅场景中的标准表达。其余干扰项在此语法结构和语义下均不合理。",
            cn: "为避免服务中断，请在您的在线数据库订阅过期前及时续订。",
            jp: "サービスの中断を避けるため、オンラインデータベースの購読が期限切れになる前に更新（renew）してください。"
        }
    },
    {
        id: 9,
        target: "definitely",
        category: "中等",
        stem: "If we complete the preparation phase on time, we will ________ meet the project deadline.",
        options: ["definitely", "modern", "specific", "proposed"],
        correct: "definitely",
        explanations: {
            guide: "情态动词与动词原形之间的修饰语。空格后是动词 meet（遇到/满足），前面是 will，此位置应填入副词做状语，选 definitely。",
            family: "definitely (adv.肯定地) | modern (adj.现代的) | specific (adj.具体的) | proposed (adj.提议的)。",
            details: "will definitely meet... 意为“肯定能赶上……”，常在项目里程碑评估或对上级保证中作为肯定的高频状语。其他干扰项皆非副词形式。",
            cn: "如果我们按时完成准备阶段，我们肯定能赶上项目截止日期。",
            jp: "準備フェーズを予定通りに完了すれば、プロジェクトの期限を間違いなく（definitely）守ることができます。"
        }
    },
    {
        id: 10,
        target: "destination",
        category: "中等",
        stem: "The historic city of Kyoto remains a popular travel ________ for international tourists.",
        options: ["destination", "agreement", "celebration", "attractions"],
        correct: "destination",
        explanations: {
            guide: "旅游场景名词辨析。空格前有 popular travel（热门旅游的），此处需要填入表示地点的名词，选 destination。",
            family: "destination (n.目的地) | agreement (n.协议) | celebration (n.庆祝) | attractions (n-pl景点)。",
            details: "travel destination 意为“旅游目的地”，是观光及酒店管理板块中的金牌核心搭配。虽然 attractions（景点）词意相关，但在单数冠词 a 修饰下，此处无法使用复数形式 attractions 充当单数保护的表语名词。",
            cn: "历史名城京都仍然是国际游客喜爱的热门旅游目的地。",
            jp: "歴史ある都市・京都は、海外からの観光客にとって依然として人気のある旅行目的地（destination）です。"
        }
    },
    {
        id: 11,
        target: "agreement",
        category: "中等",
        stem: "After several rounds of intense negotiation, both parties finally came to a mutual ________ on the contract terms.",
        options: ["agreement", "destination", "definitely", "arbitration"],
        correct: "agreement",
        explanations: {
            guide: "商务谈判中的名词搭配辨析。空格前有不定冠词 a 和形容词 mutual（相互的），后有介词 on，构成达成一致的语境，选 agreement。",
            family: "agreement (n.合意/协议) | destination (n.目的地) | definitely (adv.肯定地) | arbitration (n.仲裁)。",
            details: "come to an agreement 意为“达成协议/达成一致”。虽然 arbitration（仲裁）也符合谈判背景，但无法与 mutual 构成合理的逻辑修饰搭配。",
            cn: "经过几轮激烈的谈判，双方最终就合同条款达成了一致意见。",
            jp: "数回にわたる激しい交渉の末、両者は最終的に契約条件について相互の合意（agreement）に達しました。"
        }
    },
    {
        id: 12,
        target: "responsible",
        category: "中等",
        stem: "The engineering team is ________ for optimizing the power grid to reduce energy loss.",
        options: ["responsible", "modern", "enclose", "selective"],
        correct: "responsible",
        explanations: {
            guide: "固定结构修饰与语义搭配。空格前有系动词 is，后接介词 for，构成表示职责划分的形容词短语，选 responsible。",
            family: "responsible (adj.负责的) | modern (adj.现代的) | enclose (v.附上) | selective (adj.有选择性的)。",
            details: "be responsible for optimizing... 意为“负责优化……”，是工程部门职责描述（job descriptions）中的标准语句。其他形容词或动词在此处结构上不成立。",
            cn: "工程团队负责优化电网，以减少能量损失。",
            jp: "エンジニアリングチームは、電力損失を削減するために送電網を最適化する責任を負って（responsible）います。"
        }
    },
    {
        id: 13,
        target: "agreement",
        category: "困难",
        stem: "The legal department is preparing the final draft of the licensing ________ for the new software.",
        options: ["agreement", "agree", "agreeable", "agreeably"],
        correct: "agreement",
        explanations: {
            guide: "名词与动词词性变形辨析。空格前有定冠词 the 和修饰名词 licensing（许可），后有介词短语，此位置必须填入名词，选 agreement。",
            family: "agreement (n.协定) | agree (v.同意) | agreeable (adj.惬意的) | agreeably (adv.欣然地)。",
            details: "licensing agreement 意为“许可协议”，在知识产权（IP）以及软件销售合同领域是不可替代的官方商业名词。其余选项为同一词族的动词、形容词和副词，词性不符。",
            cn: "法律部门正在起草新软件许可协议的最终草案。",
            jp: "法務部は、新しいソフトウェアのライセンス契約（agreement）の最終草案を準備しています。"
        }
    },
    {
        id: 14,
        target: "enclose",
        category: "困难",
        stem: "Please review the ________ document carefully before signing the employment agreement.",
        options: ["enclosed", "enclose", "enclosure", "enclosing"],
        correct: "enclosed",
        explanations: {
            guide: "分词作定语修饰名词。空格位于定冠词 the 与名词 document 之间，需填入形容词性质的词进行修饰，根据被动含义（被随信附上的），选 enclosed。",
            family: "enclosed (adj.随附的) | enclose (v.附寄) | enclosure (n.附件) | enclosing (v-ing附寄中)。",
            details: "the enclosed document 意为“随附的文件”，常指信封中或邮件附件中的补充材料。在此处作为前置定语，enclosed 充当形容词，是托业语法中的标志性考点。",
            cn: "在签署雇佣协议之前，请仔细审查随附的文件。",
            jp: "雇用契約書に署名する前に、同封された（enclosed）書類を注意深く確認してください。"
        }
    },
    {
        id: 15,
        target: "specific",
        category: "困难",
        stem: "The training manual explains ________ how to handle system glitches and database errors.",
        options: ["specifically", "specific", "specification", "specifications"],
        correct: "specifically",
        explanations: {
            guide: "修饰整句或动词的副词用法。空格位于动词 explains 和宾语从句 how to... 之间，需填入副词作状语修饰动词，选 specifically。",
            family: "specifically (adv.明确地/具体地) | specific (adj.具体的) | specification (n.规格) | specifications (n-pl规格书)。",
            details: "explains specifically how to... 意为“具体解释了如何……”。副词用于强调步骤指导的清晰性，属于标准技术支持操作规程（SOP）文书语境。其他选项词性不符。",
            cn: "培训手册具体解释了如何处理系统故障和数据库错误。",
            jp: "トレーニングマニュアルには、システムの不具合やデータベースのエラーにどのように対処するかが具体的に（specifically）説明されています。"
        }
    },
    {
        id: 16,
        target: "renew",
        category: "困难",
        stem: "The tenant must submit a written notice for lease ________ at least thirty days prior to expiration.",
        options: ["renewal", "renew", "renewable", "renewed"],
        correct: "renewal",
        explanations: {
            guide: "介词宾语名词化选择。空格位于介词 for 之后，且被 lease 修饰，构成复合结构，应填入名词形式，选 renewal。",
            family: "renewal (n.续签/重建) | renew (v.续签) | renewable (adj.可再生的) | renewed (adj.更新的)。",
            details: "lease renewal 意为“租约续签”，是商业地产租赁及物业管理中的超核心高阶词汇。虽然 renew 是动词，但在介词 for 后不适合直接充当宾语，应选名词形式 renewal。",
            cn: "承租人必须在租约到期前至少三十天提交一份书面的续租通知。",
            jp: "テナントは、有効期限の少なくとも30日前までに、賃貸契約更新（renewal）の書面通知を提出しなければなりません。"
        }
    },
    {
        id: 17,
        target: "responsible",
        category: "困难",
        stem: "The general manager accepted full ________ for the delayed launch of the promotional campaign.",
        options: ["responsibility", "responsible", "responsibly", "responsibilities"],
        correct: "responsibility",
        explanations: {
            guide: "及物动词后的抽象名词宾语。空格前有动词 accepted 和形容词 full（全部的），此位置需填入名词作宾语，选抽象不可数名词形式 responsibility。",
            family: "responsibility (n.责任) | responsible (adj.有责任的) | responsibly (adv.负责地) | responsibilities (n-pl职责)。",
            details: "accept full responsibility for... 意为“对……承担全部责任”，是公关危机或企业责任检讨时的标准句式。由于 full 修饰，此处倾向于使用代表抽象概念的单数不可数名词 responsibility。",
            cn: "总经理对推迟启动宣传活动承担了全部责任。",
            jp: "ゼネラルマネージャーは、プロモーションキャンペーンの立ち上げが遅れたことについて、全責任（responsibility）を負いました。"
        }
    },
    {
        id: 18,
        target: "definitely",
        category: "困难",
        stem: "The marketing director spoke so ________ about the upcoming product launch that the entire team felt motivated.",
        options: ["definitely", "definite", "definition", "definitive"],
        correct: "definitely",
        explanations: {
            guide: "结果状语从句中的修饰副词。空格修饰不及物动词 spoke，位于 so... that 结构中，需填入副词，选 definitely。",
            family: "definitely (adv.明确地) | definite (adj.明确的) | definition (n.定义) | definitive (adj.决定性的)。",
            details: "spoke so definitely 意为“说话如此笃定/语气如此肯定”，修饰说话的方式与态度。其余选项分别为形容词、名词，无法作副词修饰动词 spoke。",
            cn: "营销总监对即将发布的产品说得如此笃定，以至于整个团队都倍感鼓舞。",
            jp: "マーケティングディレクターが今度の製品発表について非常に明確に（definitely）語ったため、チーム全体がモチベーションを高めました。"
        }
    }
];