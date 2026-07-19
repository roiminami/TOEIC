// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE ( g31-40.js Expansion )
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "infer",
        pos: "動",
        ipa: "/ɪnˈfɜːr/",
        cn: "推断，推定，暗示",
        jp: "推測する、察する、結論づける",
        family: "inference / inferential / inferred",
        tips: "托业阅读 Part 7 题干常客，常以 What can be inferred about...? 形式出现。要求考生根据文章细节进行合乎逻辑的推断，而非生搬硬套原文原词。",
        desc: "What can you infer?"
    },
    {
        word: "intend",
        pos: "動",
        ipa: "/ɪnˈtend/",
        cn: "打算，想要，企图",
        jp: "意図する、つもりである、～向けに作られる",
        family: "intention / intentional / intended",
        tips: "商务计划与目标设定常用词。常见核心结构为 intend to do sth（打算做某事）或被动语态 be intended for（专供……之用、专为……设计）。",
        desc: "I intend to go."
    },
    {
        word: "invited",
        pos: "形/動",
        ipa: "/ɪnˈvaɪtɪd/",
        cn: "受邀的；邀请（invite的过去式/过去分词）",
        jp: "招待された、招かれた",
        family: "invite / invitation / inviting",
        tips: "商务宴会、年会及研讨会高频词。在语法题中常考 invited guests（受邀嘉宾）这一复合结构，或以 be invited to attend（受邀参加）的被动语态形式出现。",
        desc: "He was invited here."
    },
    {
        word: "mainly",
        pos: "副",
        ipa: "/ˈmeɪnli/",
        cn: "主要地，大体上",
        jp: "主に、大部分は、概して",
        family: "main",
        tips: "听力与阅读主旨题高频词，常考 mainly about（主要是关于...）或 mainly discuss（主要讨论），用来考察考生对整篇文章或对话核心议题的宏观概括能力。",
        desc: "The book is mainly good."
    },
    {
        word: "mention",
        pos: "動/名",
        ipa: "/ˈmenʃn/",
        cn: "提及，说起，说到",
        jp: "言及する、触れる、口にする；言及",
        family: "mentioned / mentionable",
        tips: "托业阅读细节排除题的经典题干标志词：What is NOT mentioned about...? 要求考生在四个选项中找出原文未涉及的干扰项，极为考验定位速度。",
        desc: "Do not mention it."
    },
    {
        word: "most likely",
        pos: "副/形",
        ipa: "/moʊst ˈlaɪkli/",
        cn: "最可能地；最可能的",
        jp: "最も可能性が高い、おそらく",
        family: "likely / likelihood",
        tips: "托业听力和阅读 Part 7 中出镜率极高的推断题标志词，如 Where does the conversation most likely take place?（对话最可能发生在哪里？），解答时需要捕捉场景特征词。",
        desc: "He will most likely win."
    },
    {
        word: "probably",
        pos: "副",
        ipa: "/ˈprɑːbəbli/",
        cn: "大概，或许，很可能",
        jp: "おそらく、たぶん",
        family: "probable / probability",
        tips: "商务口语与日常沟通高频词，用于缓和语气、表达可能性。语气强于 possibly，略弱于 certainly。常在句子中修饰动词或形容词短语。",
        desc: "It will probably rain."
    },
    {
        word: "purpose",
        pos: "名",
        ipa: "/ˈpɜːrpəs/",
        cn: "目的，意图，宗旨",
        jp: "目的、意図、趣旨",
        family: "purposeful / purposely / purposeless",
        tips: "商务书信与公告阅读开篇必考：What is the purpose of the letter/memo? 通常对应信件第一段或前两句阐述的写作意图，属于送分主旨题。",
        desc: "What is your purpose?"
    },
    {
        word: "reluctant",
        pos: "形",
        ipa: "/rɪˈlʌktənt/",
        cn: "不情愿的，勉强的",
        jp: "気が進まない、ためらう、渋る",
        family: "reluctance / reluctantly",
        tips: "职场沟通与商务谈判高频词，经典核心句型为 be reluctant to do sth（不情愿做某事），常用来表达员工或管理层对预算削减、政策调整的顾虑或保留态度。",
        desc: "She is reluctant to leave."
    },
    {
        word: "state",
        pos: "動/名",
        ipa: "/steɪt/",
        cn: "陈述，声明，写明；状态，国家",
        jp: "述べる、表明する、明記する；状態、州",
        family: "statement / stated / stateless",
        tips: "作动词时属于商务正式用语，等同于 express 或 clearly write。阅读理解常考 As stated in the contract（正如合同中所写明的）。名词形式常考 financial statement（财务报表）。",
        desc: "Please state your name."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "invited",
        category: "简单",
        stem: "The CEO personally ________ all senior managers to the annual gala held at the Grand Hotel last night.",
        options: ["invited", "intended", "mentioned", "stated"],
        correct: "invited",
        explanations: {
            guide: "过去时动词语义辨析。句子缺少核心谓语动词，结合宾语 all senior managers（全体高级经理）以及 annual gala（年度晚宴）场景，表达“邀请”最符合逻辑，选 invited。",
            family: "invited (v-ed邀请) | intened (v-ed打算) | mentioned (v-ed提及) | stated (v-ed陈述)。",
            details: "invite sb to sth 是商业社交场景的标配搭配，表示邀请某人参加某活动。其他动词均不符合与晚宴搭配的逻辑语义。",
            cn: "首席执行官昨晚亲自邀请了所有高级经理参加在格兰德酒店举行的年度晚宴。",
            jp: "最高経営責任者（CEO）は昨晩、グランドホテルで開催された年次ガラディナーに、すべてのシニアマネージャーを個人的に招待（invited）しました。"
        }
    },
    {
        id: 2,
        target: "purpose",
        category: "简单",
        stem: "The primary ________ of today's morning orientation is to introduce the new software platform to the staff.",
        options: ["purpose", "mention", "state", "inference"],
        correct: "purpose",
        explanations: {
            guide: "名词中心语语义辨析。定冠词 The 和形容词 primary（主要的）后面需要接一个名词作整句的主语，结合句意“今天上午入职培训的主要目的”，选 purpose。",
            family: "purpose (n.目的) | mention (n./v.提及) | state (n./v.陈述/状态) | inference (n.推断)。",
            details: "The primary purpose of... is to do sth 是托业公文阅读与商务演讲的经典黄金句型，意为“……的主要目的是做某事”。",
            cn: "今天上午入职培训的主要目的是向全体员工介绍新的软件平台。",
            jp: "今朝のオリエンテーションの主な目的（purpose）は、スタッフに新しいソフトウェアプラットフォームを紹介することです。"
        }
    },
    {
        id: 3,
        target: "probably",
        category: "简单",
        stem: "According to the weather report, Mr. Vance will ________ postpone the outdoor marketing event until next Friday.",
        options: ["probably", "mainly", "reluctant", "intended"],
        correct: "probably",
        explanations: {
            guide: "词性与副词修饰语辨析。空格位于情态动词 will 和动词原形 postpone（推迟）之间，需要填入副词，表示“很可能/大概”，选 probably。",
            family: "probably (adv.大概/可能) | mainly (adv.主要地) | reluctant (adj.不情愿的) | intended (adj.预期的)。",
            details: "reluctant 是形容词，不能直接放在 will 和动词原形之间。mainly（主要地）在语义上无法合理修饰推迟活动的动作。probably 完美表达概率。",
            cn: "根据天气预报，万斯先生很可能会把户外营销活动推迟到下周五。",
            jp: "天気予報によると、ヴァンス氏はアウトドアマーケティングイベントを来週の金曜日までおそらく（probably）延期するでしょう。"
        }
    },
    {
        id: 4,
        target: "mention",
        category: "简单",
        stem: "Did the supervisor ________ the new reimbursement policy during the department meeting this morning?",
        options: ["mention", "infer", "intend", "state"],
        correct: "mention",
        explanations: {
            guide: "助动词后的动词原形及语意辨析。Did 引导的过去时疑问句中，空格处需填入动词原形。结合报销政策（policy），表达“提及/说起”最符合日常开会语境，选 mention。",
            family: "mention (v.提及) | infer (v.推断) | intend (v.打算) | state (v.陈述)。",
            details: "mention sth 意为顺便提及或说起某事。虽然 state 也有陈述之意，但在疑问句口语中询问“有没有提到某事”时，mention 是最高频地道的用法。",
            cn: "主管今天上午在部门会议上提到新的报销政策了吗？",
            jp: "スーパーバイザーは今朝の部門会議で、新しい経費精算ポリシーについて言及（mention）しましたか。"
        }
    },
    {
        id: 5,
        target: "mainly",
        category: "简单",
        stem: "The industry analysis report focuses ________ on the market trends of renewable energy in Southeast Asia.",
        options: ["mainly", "probably", "reluctant", "invited"],
        correct: "mainly",
        explanations: {
            guide: "副词修饰动词短语。空格用于修饰动词短语 focuses on（专注于），需要一个副词来表示程度，表达“主要专注于”，选 mainly。",
            family: "mainly (adv.主要地) | probably (adv.大概) | reluctant (adj.不情愿的) | invited (adj.受邀的)。",
            details: "focus mainly on 或 mainly focus on 是学术及商务行业报告中的标准表达，意为“主要集中于/重点关注”。其余选项词性或语意不符。",
            cn: "该行业分析报告主要关注东南亚可再生能源的市场趋势。",
            jp: "その業界分析レポートは、主に（mainly）東南アジアにおける再生可能エネルギーの市場動向に焦点を当てています。"
        }
    },
    {
        id: 6,
        target: "intend",
        category: "简单",
        stem: "We ________ to upgrade our server infrastructure as soon as the next fiscal year budget is approved.",
        options: ["intend", "infer", "mention", "state"],
        correct: "intend",
        explanations: {
            guide: "动词固定搭配结构。空格后接动词不定式 to upgrade，在四个核心动词中，只有 intend 能直接接 to do 结构构成固定搭配，选 intend。",
            family: "intend (v.打算) | infer (v.推断) | mention (v.提及) | state (v.陈述)。",
            details: "intend to do sth 意为“打算/计划做某事”。infer、mention 和 state 后面通常直接接名词宾语或 that 引导的从句，不接动词不定式。",
            cn: "一旦下一财政年度的预算获得批准，我们打算立即升级我们的服务器基础设施。",
            jp: "次年度の予算が承認され次第、私たちはサーバーインフラをアップグレードすることを意図（intend）しています。"
        }
    },
    {
        id: 7,
        target: "state",
        category: "中等",
        stem: "All job applicants must clearly ________ their salary expectations on the provided application form.",
        options: ["state", "intend", "mention", "infer"],
        correct: "state",
        explanations: {
            guide: "正式商务动词辨析。空格在情态动词 must 和副词 clearly 之后，需填入动词原形。在申请表上“写明/声明”期望薪资，使用正式动词 state 最为恰当。",
            family: "state (v.陈述/明记) | intend (v.打算) | mention (v.提及) | infer (v.推断)。",
            details: "state sth clearly（清晰写明/陈述某事）是合同、申请表等法律/商务文件中的标准表述。mention 语义过弱，不符合官方文件的强硬要求。",
            cn: "所有求职者必须在提供的申请表上清晰地写明他们的薪资预期。",
            jp: "すべての求職者は、提供された応募用紙に希望給与を明確に記載（state）しなければなりません。"
        }
    },
    {
        id: 8,
        target: "infer",
        category: "中等",
        stem: "From the quarterly sales charts, investors can easily ________ that the new product line has been successful.",
        options: ["infer", "intend", "mention", "state"],
        correct: "infer",
        explanations: {
            guide: "逻辑推断语意辨析。由介词短语 From the quarterly sales charts（从季度销售图表中）可知，此处表达通过数据“推断出”某种结论，选 infer。",
            family: "infer (v.推断) | intend (v.打算) | mention (v.提及) | state (v.陈述)。",
            details: "infer that... 意为“推断出……”。根据图表或间接证据得出某种合理结论，是托业阅读和逻辑分析的高频核心考察点。",
            cn: "从季度销售图表中，投资者可以很容易地推断出新产品线已经取得了成功。",
            jp: "四半期売上チャートから、投資家は新しい製品ラインが成功したことを容易に推測（infer）することができます。"
        }
    },
    {
        id: 9,
        target: "most likely",
        category: "中等",
        stem: "The technical support team will ________ be expanding their hours to provide 24-hour service next month.",
        options: ["most likely", "mainly", "probably", "reluctant"],
        correct: "most likely",
        explanations: {
            guide: "高频推测短语辨析。空格处填入修饰动词短语 will be expanding 的部分。虽然 probably 和 most likely 都可以表示可能，但在表示“极有可能”的商务前瞻性计划时，most likely 契合度极高。",
            family: "most likely (adv.最可能) | mainly (adv.主要地) | probably (adv.大概) | reluctant (adj.不情愿的)。",
            details: "will most likely be doing 属于高频口语与官方通知句型，用来描述根据目前趋势最大概率会发生的情况。reluctant 为形容词，不可直接置于此处。",
            cn: "技术支持团队下个月极有可能延长服务时间，以提供24小时全天候服务。",
            jp: "テクニカルサポートチームは、来月24時間サービスを提供するために、営業時間を延長する可能性が最も高い（most likely）です。"
        }
    },
    {
        id: 10,
        target: "reluctant",
        category: "中等",
        stem: "Management was initially ________ to adopt the remote work policy due to cybersecurity concerns.",
        options: ["reluctant", "intended", "invited", "mainly"],
        correct: "reluctant",
        explanations: {
            guide: "形容词固定搭配与语义辨析。空格位于系动词 was 之后，且后面带有动词不定式 to adopt，需要填入一个形容词，表达管理层“不情愿/持保留态度”，选 reluctant。",
            family: "reluctant (adj.不情愿的) | intended (adj.有意的) | invited (adj.受邀的) | mainly (adv.主要地)。",
            details: "be reluctant to do sth 是托业职场沟通的高频短语，用来形容对某项新政策、新系统心存顾虑而不愿推进。intended 和 invited 无法与句意吻合。",
            cn: "由于对网络安全的担忧，管理层最初对采取远程办公政策感到有些不情愿。",
            jp: "サイバーセキュリティへの懸念から、経営陣は当初、リモートワーク制度の導入に気が進まない（reluctant）様子でした。"
        }
    },
    {
        id: 11,
        target: "purpose",
        category: "中等",
        stem: "Mr. Kim booked a flight to London for the express ________ of attending the international textbook fair.",
        options: ["purpose", "statement", "intention", "inference"],
        correct: "purpose",
        explanations: {
            guide: "商业行为目的表达。空格受到定冠词 the 和形容词 express（明确的/特意的）修饰，后接 of doing sth，表达“为了明确的目的”，选 purpose。",
            family: "purpose (n.目的) | statement (n.声明) | intention (n.意图) | inference (n.推断)。",
            details: "for the express purpose of doing sth 是高端商务英语的固定搭配，意为“特意为了……的目的”。虽然 intention 也有意图之意，但不与 express 构成此固定商业短语。",
            cn: "金先生订了去伦敦的机票，特意是为了参加国际教科书博览会。",
            jp: "キム氏は、国際教科書見本市に出席するという明確な目的（purpose）のためにロンドン行きの航空券を予約しました。"
        }
    },
    {
        id: 12,
        target: "intend",
        category: "中等",
        stem: "We regret to inform you that we do not ________ to renew the lease agreement for the warehouse next year.",
        options: ["intend", "state", "mention", "invite"],
        correct: "intend",
        explanations: {
            guide: "否定助动词后的动词辨析。do not 后面接动词原形，再结合后面的 to renew 结构，表达公司“不打算”续签合同，选 intend。",
            family: "intend (v.打算) | state (v.陈述) | mention (v.提及) | invite (v.邀请)。",
            details: "do not intend to do sth 是商务租约、合同往来邮件中的标准委婉拒绝或知会用语，表示“无意做某事”。其他动词均不符合后接 to do 的结构。",
            cn: "我们很遗憾地通知您，我们明年不打算续签该仓库的租赁协议。",
            jp: "残念ながら、来年は倉庫の賃貸借契約を更新する意図（intend）がないことをお知らせいたします。"
        }
    },
    {
        id: 13,
        target: "state",
        category: "困难",
        stem: "The official ________ issued by the board of directors clarified the details regarding the corporate merger.",
        options: ["statement", "state", "stated", "stating"],
        correct: "statement",
        explanations: {
            guide: "名词词族派生词辨析。空格位于定冠词 The 和形容词 official 之后，需填入名词作整句的主语。过去分词短语 issued by... 作后置定语，表达“官方声明”，选 statement。",
            family: "statement (n.声明/报表) | state (v./n.陈述/状态) | stated (adj.规定的) | stating (v-ing陈述中)。",
            details: "official statement 意为“官方声明”。本题属于典型的托业 Part 5 词性辨析难题，要求考生能够准确切分句子主干，避开过去分词干扰，锁定名词主语。",
            cn: "董事会发布的官方声明澄清了关于公司合并的细节。",
            jp: "取締役会によって発表された公式声明（statement）は、企業合併に関する詳細を明らかにしました。"
        }
    },
    {
        id: 14,
        target: "reluctant",
        category: "困难",
        stem: "The survey revealed widespread ________ among employees regarding the proposed shift in health insurance providers.",
        options: ["reluctance", "reluctant", "reluctantly", "reluctances"],
        correct: "reluctance",
        explanations: {
            guide: "动宾结构与抽象名词词性辨析。及物动词 revealed 后面需要接名词短语作其宾语。形容词 widespread（广泛的）修饰名词，表达“不情愿/抵触情绪”，选不可数名词 reluctance。",
            family: "reluctance (n.不情愿) | reluctant (adj.不情愿的) | reluctantly (adv.不情愿地) | reluctances (错误复数)。",
            details: "reluctance 是不可数抽象名词。职场员工对福利或保险制度的变更产生“抵触/不情愿情绪”是托业阅读极高频的职场心理场景。reluctances 形式不存在。",
            cn: "调查显示，员工对拟议的医疗保险供应商的更换普遍存在不情愿的情绪。",
            jp: "調査の結果、提案された健康保険会社の変更に対して、従業員の間に広範なためらい（reluctance）があることが判明しました。"
        }
    },
    {
        id: 15,
        target: "intend",
        category: "困难",
        stem: "These internal financial spreadsheets are ________ solely for the review of the senior auditing committee.",
        options: ["intended", "intention", "intend", "intending"],
        correct: "intended",
        explanations: {
            guide: "被动语态与派生形容词高阶用法。空格位于系动词 are 之后，与介词 for 结合，表达“专供……之用/专为……设计”，使用过去分词转化为形容词的 intended，构成 be intended for 结构。",
            family: "intended (adj.预期的/专供的) | intention (n.意图) | intend (v.打算) | intending (v-ing打算)。",
            details: "be intended for sb/sth 是托业机密文件、产品手册中极高频的固定搭配，用来限定资料的阅读权限或产品的适用人群。意思等同于 be designed exclusively for。",
            cn: "这些内部财务表格仅供高级审计委员会审查之用。",
            jp: "これらの内部財務スプレッドシートは、シニア監査委員会によるレビューのみを目的（intended）としています。"
        }
    },
    {
        id: 16,
        target: "infer",
        category: "困难",
        stem: "The audit committee drew a reasonable ________ regarding the asset discrepancy after verifying the ledgers.",
        options: ["inference", "infer", "inferred", "inferring"],
        correct: "inference",
        explanations: {
            guide: "名词派生词与动宾固定搭配。动词 drew（draw的过去式）常与名词 inference 搭配，构成 draw an inference，意为“得出推论/推断”，选名词 inference。",
            family: "inference (n.推论/结论) | infer (v.推断) | inferred (v-ed已推断) | inferring (v-ing推断中)。",
            details: "draw a reasonable inference 是商务审计与法务场景的高阶核心搭配，指通过核对账簿（verifying the ledgers）后得出的合逻辑的“推论”。",
            cn: "审计委员会在核对账簿后，对资产不符的情况得出了合理的推断。",
            jp: "監査委員会は元帳を照合した後、資産の不一致に関して妥当な推論（inference）を導き出しました。"
        }
    },
    {
        id: 17,
        target: "invited",
        category: "困难",
        stem: "A formal ________ to the technology symposium was extended to all prominent figures in the local business community.",
        options: ["invitation", "invite", "invited", "inviting"],
        correct: "invitation",
        explanations: {
            guide: "特指名词作主语。空格位于不定冠词 A 和形容词 formal 之后，需要填入单数可数名词作整句的主语，表达“邀请函”，选 invitation。",
            family: "invitation (n.邀请/邀请函) | invite (v.邀请) | invited (v-ed受邀) | inviting (adj.诱人的)。",
            details: "extend an invitation to sb 是非常正式的商务礼仪用语，意为“向某人发出邀请/递交邀请函”。此处 invitation 作主语被动提前，是 Part 5 极具杀伤力的变形题。",
            cn: "主办方向当地商界的所有杰出人士都发出了参加技术座谈会的正式邀请。",
            jp: "技術シンポジウムへの正式な招待状（invitation）が、地元のビジネス界のすべての著名な人物に送られました。"
        }
    },
    {
        id: 18,
        target: "mainly",
        category: "困难",
        stem: "The Chief Executive Officer emphasized that our ________ objective this fiscal year is to expand into European markets.",
        options: ["main", "mainly", "maintaining", "mains"],
        correct: "main",
        explanations: {
            guide: "反向词族词性考察（副词还原为形容词）。空格用于修饰后面的名词宾语 objective（目标），物主代词 our 之后需要填入形容词作定语，选 main。",
            family: "main (adj.主要的) | mainly (adv.主要地) | maintaining (v-ing维持) | mains (n.总管道)。",
            details: "虽然本期核心词是副词 mainly，但本题反向考察其词族根源 main (形容词)。main objective 意为“主要目标”，等于 primary goal，完美修饰名词。mainly 作为副词不能修饰名词。",
            cn: "首席执行官强调，我们本财政年度的主要目标是进军欧洲市场。",
            jp: "最高経営責任者は、当会計年度の主な（main）目標は欧州市場への進出であると強調しました。"
        }
    }
];