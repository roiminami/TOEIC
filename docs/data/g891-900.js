// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data71-80.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "compromise",
        pos: "動/名",
        ipa: "/ˈkɑːmprəmaɪz/",
        cn: "妥协，折中；危及，损害",
        jp: "妥協する、歩み寄る；妥協；（信用・安全などを）損なう",
        family: "compromised / compromising / uncompromising",
        tips: "托业高频动词搭配为 reach a compromise（达成妥协）；作动词时除了表示“妥协”，还常考高阶考点“危及/损害（安全或数据）”（compromise security/confidentiality）。",
        desc: "We reached a compromise on the price."
    },
    {
        word: "fraction",
        pos: "名",
        ipa: "/ˈfrækʃn/",
        cn: "一小部分，片段，分数",
        jp: "ほんの少し、わずか、端数",
        family: "fractional / fractionally",
        tips: "托业核心固定搭配：at a fraction of the cost（仅花费原成本的一小部分/极低成本），在企业降本增效和促销宣传语篇中高频出现。",
        desc: "The software costs a fraction of the original price."
    },
    {
        word: "appraisal",
        pos: "名",
        ipa: "/əˈpreɪzl/",
        cn: "评估，评价，绩效考核",
        jp: "評価、査定、鑑定",
        family: "appraise / appraiser / reappraisal",
        tips: "人力资源与资产评估场景核心词：performance appraisal（绩效考核/员工评估），real estate appraisal（房地产价值评估）。",
        desc: "Annual performance appraisals start next week."
    },
    {
        word: "coincidence",
        pos: "名",
        ipa: "/koʊˈɪnsɪdəns/",
        cn: "巧合，同时发生",
        jp: "偶然の一致、巡り合わせ",
        family: "coincide / coincidental / coincidentally",
        tips: "常考固定短语：by coincidence（纯属巧合），it is no coincidence that...（……绝非偶然）。其副词形式 coincidentally 常用于篇章衔接。",
        desc: "It was a pure coincidence that we met."
    },
    {
        word: "straightforward",
        pos: "形",
        ipa: "/ˌstreɪtˈfɔːrwərd/",
        cn: "简单易懂的；坦率诚恳的",
        jp: "わかりやすい、簡単な；率直な",
        family: "straightforwardly / straightforwardness",
        tips: "常修饰操作指南、申请流程或合同条款（straightforward instructions / a straightforward procedure），表示流程清晰、不复杂。",
        desc: "The installation process is straightforward."
    },
    {
        word: "interim",
        pos: "形/名",
        ipa: "/ˈɪntərɪm/",
        cn: "临时的，过渡期的；过渡期",
        jp: "暫定の、臨時の；合間、暫定期間",
        family: "interim report / interim CEO / in the interim",
        tips: "职场高管更迭与财务报告高频词：interim CEO / director（代理/临时首席执行官），interim financial report（中期财务报告），in the interim（在此期间）。",
        desc: "Ms. Lee was appointed as interim director."
    },
    {
        word: "prime",
        pos: "形/名/動",
        ipa: "/ˈpraɪm/",
        cn: "首要的，主要的；最佳的；黄金时期",
        jp: "最も重要な、第一の；最良の；全盛期",
        family: "primarily / primary / primacy",
        tips: "商业地产与市场营销高频词：prime location（黄金地段），prime example（典型范例），prime candidate（最佳人选）。",
        desc: "The shop is located in a prime location."
    },
    {
        word: "controversial",
        pos: "形",
        ipa: "/ˌkɑːntrəˈvɜːrʃl/",
        cn: "有争议的，引起争论的",
        jp: "物議を醸す、議論の余地がある",
        family: "controversy / controversially",
        tips: "常用于修饰争议性政策、决议或项目提议（a controversial decision / proposal / policy）。名词形式 controversy（争议）为高频考点。",
        desc: "The new tax rule is controversial."
    },
    {
        word: "acquaintance",
        pos: "名",
        ipa: "/əˈkweɪntəns/",
        cn: "熟人，相识的人；了解，相识",
        jp: "知人、知り合い；面識、知識",
        family: "acquaint / acquainted",
        tips: "商务社交高频表达：make sb's acquaintance（结识某人），have an acquaintance with（对……有所了解），be acquainted with（熟悉……）。",
        desc: "He is a business acquaintance of mine."
    },
    {
        word: "transparent",
        pos: "形",
        ipa: "/trænsˈpærənt/",
        cn: "透明的；公开透明的，坦诚的",
        jp: "透明な；明白な、透明性の高い",
        family: "transparency / transparently",
        tips: "托业商务中常考其比喻义，指政策、收费或决策过程“公开透明”（transparent pricing / transparent decision-making process）。",
        desc: "We maintain a transparent pricing policy."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "straightforward",
        category: "简单",
        stem: "The software manual includes ________ instructions on how to set up the wireless office network.",
        options: ["straightforward", "straightforwardly", "controversial", "fraction"],
        correct: "straightforward",
        explanations: {
            guide: "形容词修饰名词。空格后为名词 instructions（说明/指南），需要填入形容词作定语，表达“简单易懂的”指南，选 straightforward。",
            family: "straightforward (adj.简单明了的) | straightforwardly (adv.直接地) | controversial (adj.有争议的) | fraction (n.小部分)。",
            details: "straightforward instructions 意为易懂的说明。straightforwardly 是副词，不能直接作定语修饰名词 instructions。",
            cn: "该软件手册包含了关于如何设置无线办公网络的简单易懂的说明。",
            jp: "そのソフトウェアマニュアルには、ワイヤレスオフィスネットワークの設定方法に関するわかりやすい（straightforward）手順が含まれています。"
        }
    },
    {
        id: 2,
        target: "prime",
        category: "简单",
        stem: "The luxury clothing boutique is situated in a ________ location near the city's central railway terminal.",
        options: ["prime", "primarily", "interim", "appraisal"],
        correct: "prime",
        explanations: {
            guide: "形容词修饰名词及商业专属搭配。a ________ location 结构中需要形容词作定语，prime location 是托业商业地产高频搭配，意为“黄金地段”。",
            family: "prime (adj.首要的/最佳的) | primarily (adv.主要地) | interim (adj.临时的) | appraisal (n.评估)。",
            details: "prime location 指地理位置优越的黄金地段。primarily 为副词，无法在此处直接修饰单数名词 location。",
            cn: "这家高档服装精品店坐落于靠近市中心铁路总站的黄金地段。",
            jp: "その高級衣料品ブティックは、市の中央鉄道ターミナルに近い一等地（prime location）に位置しています。"
        }
    },
    {
        id: 3,
        target: "compromise",
        category: "简单",
        stem: "After several hours of intensive negotiation, both trade representatives finally agreed to reach a ________.",
        options: ["compromise", "compromised", "acquaintance", "transparent"],
        correct: "compromise",
        explanations: {
            guide: "动词与名词的固定商务短语。reach a compromise 是托业极高频商务表达，意为“达成妥协/达成折中协议”，选名词 compromise。",
            family: "compromise (n./v.妥协/折中) | compromised (adj.妥协的/受损的) | acquaintance (n.熟人) | transparent (adj.透明的)。",
            details: "reach a compromise 属于动宾固定搭配。compromised 是分词或过去式，不能作为不定冠词 a 后的名词宾语。",
            cn: "经过数小时的紧张谈判，双方贸易代表最终同意达成妥协。",
            jp: "数時間にわたる集中的な交渉の末、双方の貿易代表者はついに妥協（compromise）に達することに合意しました。"
        }
    },
    {
        id: 4,
        target: "transparent",
        category: "简单",
        stem: "The consulting firm strives to keep its fee structure ________ so clients know exactly what they are paying for.",
        options: ["transparent", "transparency", "coincidence", "fraction"],
        correct: "transparent",
        explanations: {
            guide: "复合宾语结构中的形容词作宾补。keep + 宾语 (fee structure) + 形容词宾补，表示使收费结构保持“公开透明”，选形容词 transparent。",
            family: "transparent (adj.透明的/公开的) | transparency (n.透明度) | coincidence (n.巧合) | fraction (n.一小部分)。",
            details: "keep sth transparent 意为使某事物保持透明公开。transparency 是名词，不能在此处充当形容词性的宾语补足语。",
            cn: "该咨询公司力求保持其收费结构公开透明，以便客户确切知晓他们所支付的费用内容。",
            jp: "そのコンサルティング会社は、クライアントが何に対して支払っているのかを正確に把握できるよう、料金体系を透明（transparent）に保つよう努めています。"
        }
    },
    {
        id: 5,
        target: "acquaintance",
        category: "简单",
        stem: "During the international trade summit, Mr. Vance had the opportunity to make the ________ of several regional directors.",
        options: ["acquaintance", "acquainted", "compromise", "interim"],
        correct: "acquaintance",
        explanations: {
            guide: "动词短语固定搭配。make the acquaintance of sb 意为“结识某人/结交某人”，空格处需填入名词 acquaintance。",
            family: "acquaintance (n.相识的人/熟人/相识) | acquainted (adj.熟悉的) | compromise (n./v.妥协) | interim (adj.临时的)。",
            details: "make the acquaintance of 是托业职场社交核心固定短语。acquainted 为形容词，不能直接放在定冠词 the 之后构成该短语。",
            cn: "在国际贸易峰会期间，万斯先生有机会结识了几位区域主管。",
            jp: "国際貿易サミット中、ヴァンス氏は数名の地域ディレクターと知己を得る（make the acquaintance of）機会に恵まれました。"
        }
    },
    {
        id: 6,
        target: "appraisal",
        category: "简单",
        stem: "The human resources manager will conduct a comprehensive performance ________ for each employee at the end of the quarter.",
        options: ["appraisal", "appraise", "controversial", "prime"],
        correct: "appraisal",
        explanations: {
            guide: "名词修饰与人事场景专属搭配。performance appraisal 意为“绩效评估/员工考核”，空格处需要名词 appraisal 作 conduct 的宾语核心词。",
            family: "appraisal (n.评估/考核) | appraise (v.评估) | controversial (adj.有争议的) | prime (adj.首要的)。",
            details: "a comprehensive performance appraisal 指一次全面的绩效考核。appraise 是动词，无法直接在不定冠词与形容词后充当名词中心语。",
            cn: "人力资源部经理将在季度末对每位员工进行一次全面的绩效评估。",
            jp: "人事マネージャーは、四半期末に各従業員に対して包括的な業績評価（performance appraisal）を実施します。"
        }
    },
    {
        id: 7,
        target: "fraction",
        category: "中等",
        stem: "By migrating data to cloud servers, the startup reduced its annual hosting expenses to a ________ of previous costs.",
        options: ["fraction", "fractional", "coincidence", "straightforward"],
        correct: "fraction",
        explanations: {
            guide: "介词短语核心表达。to/at a fraction of... 是托业高频固定搭配，意为“仅为……的一小部分/大幅缩减至……”，选名词 fraction。",
            family: "fraction (n.一小部分/分数) | fractional (adj.微小的/部分的) | coincidence (n.巧合) | straightforward (adj.简单明了的)。",
            details: "a fraction of previous costs 表达费用仅为原先的一小部分。fractional 是形容词，不能直接在不定冠词 a 后面充当介词短语中心词。",
            cn: "通过将数据迁移到云服务器，这家初创企业将年度托管费用缩减到了以往成本的一小部分。",
            jp: "データをクラウドサーバーに移行することにより、その新興企業は年間ホスティング費用を以前のコストのほんの一部（fraction）に削減しました。"
        }
    },
    {
        id: 8,
        target: "interim",
        category: "中等",
        stem: "Following the sudden retirement of the chief financial officer, the board appointed Ms. Alvarez as the ________ CFO.",
        options: ["interim", "primarily", "transparent", "appraisal"],
        correct: "interim",
        explanations: {
            guide: "职场职称形容词定语。interim CFO 意为“临时/代理首席财务官”，interim 作形容词修饰职位名称，选 interim。",
            family: "interim (adj.临时的/过渡期的/n.过渡期) | primarily (adv.主要地) | transparent (adj.透明的) | appraisal (n.评估)。",
            details: "appointed sb as the interim CFO 是企业高管变动中的标准表达。primarily 为副词，appraisal 为名词，均不符合修饰职位的要求。",
            cn: "在首席财务官突然退休后，董事会任命阿尔瓦雷斯女士为代理首席财务官。",
            jp: "最高財務責任者（CFO）の突然の退任を受けて、取締役会はアルバレス氏を暫定（interim）CFOに任命しました。"
        }
    },
    {
        id: 9,
        target: "coincidence",
        category: "中等",
        stem: "It was entirely by ________ that the two competing sales representatives booked rooms at the same boutique hotel.",
        options: ["coincidence", "coincidental", "compromise", "controversial"],
        correct: "coincidence",
        explanations: {
            guide: "介词固定短语搭配。by coincidence 是固定介词短语，意为“出于巧合/碰巧”，由副词 entirely 修饰，选名词 coincidence。",
            family: "coincidence (n.巧合) | coincidental (adj.巧合的) | compromise (n./v.妥协) | controversial (adj.有争议的)。",
            details: "by coincidence 属于固定搭配。coincidental 是形容词，介词 by 后面接名词构成介宾短语，不能直接接形容词原形。",
            cn: "两家竞争公司的销售代表碰巧预订了同一家精品酒店的房间，这纯属巧合。",
            jp: "競合する2人の営業担当者が同じブティックホテルに部屋を予約したのは、まったくの偶然（by coincidence）でした。"
        }
    },
    {
        id: 10,
        target: "controversial",
        category: "中等",
        stem: "The proposal to eliminate complimentary parking for staff members proved to be the most ________ issue of the meeting.",
        options: ["controversial", "controversy", "acquaintance", "prime"],
        correct: "controversial",
        explanations: {
            guide: "最高级结构修饰名词。the most ________ issue 结构中，the most 后面需要多音节形容词原级构成形容词最高级，修饰 issue，选 controversial。",
            family: "controversial (adj.有争议的) | controversy (n.争议) | acquaintance (n.熟人) | prime (adj.首要的)。",
            details: "the most controversial issue 意为最具争议的问题。controversy 是名词，无法与 the most 直接构成修饰名词 issue 的形容词最高级短语。",
            cn: "取消员工免费停车福利的提议被证明是本次会议上最具争议的议题。",
            jp: "従業員向けの無料駐車場を廃止するという提案は、会議で最も物議を醸す（controversial）問題であることが判明しました。"
        }
    },
    {
        id: 11,
        target: "acquaintance",
        category: "中等",
        stem: "All newly recruited customer service representatives are required to become fully ________ with company return policies.",
        options: ["acquainted", "acquaintance", "transparently", "fraction"],
        correct: "acquainted",
        explanations: {
            guide: "形容词短语固定搭配。become/be acquainted with sth 意为“熟悉/了解某事物”，空格处在 become 后作表语形容词，选 acquainted。",
            family: "acquainted (adj.熟悉的/了解的) | acquaintance (n.熟人/了解) | transparently (adv.显然地) | fraction (n.一小部分)。",
            details: "become fully acquainted with policies 意为充分熟悉各项规章制度。acquaintance 是名词，无法与 become ... with 搭配充当此类主语补足语。",
            cn: "所有新入职的客户服务代表都必须完全熟悉公司的退换货政策。",
            jp: "新しく採用されたすべてのカスタマーサービス担当者は、会社の返品ポリシーを十分に熟知する（acquainted）ことが義務付けられています。"
        }
    },
    {
        id: 12,
        target: "straightforward",
        category: "中等",
        stem: "The technical support specialist explained the system migration procedure ________ and clearly to the client.",
        options: ["straightforwardly", "straightforward", "controversially", "compromised"],
        correct: "straightforwardly",
        explanations: {
            guide: "副词并列修饰动词。空格处与副词 clearly 由 and 连接，共同修饰谓语动词 explained，表示“直截了当地/清楚明白地”解释，选副词 straightforwardly。",
            family: "straightforwardly (adv.简明坦率地) | straightforward (adj.简单明了的) | controversially (adv.有争议地) | compromised (adj.受损害的)。",
            details: "explained ... straightforwardly and clearly 构成副词并列修饰动词。straightforward 是形容词，不能直接修饰动词 explained。",
            cn: "技术支持专家向客户简明扼要且清晰地解释了系统迁移的步骤。",
            jp: "技術サポートスペシャリストは、システムの移行手順をクライアントに対してわかりやすく（straightforwardly）明確に説明しました。"
        }
    },
    {
        id: 13,
        target: "compromise",
        category: "困难",
        stem: "Unauthorized access to internal communications servers could severely ________ the confidentiality of proprietary research.",
        options: ["compromise", "compromising", "interim", "fraction"],
        correct: "compromise",
        explanations: {
            guide: "情态动词后的动词原形及高阶词义。could severely ________ the confidentiality 结构中需要动词原形，compromise 在此考查高阶考点“危及/损害”，选 compromise。",
            family: "compromise (v.危及/损害/妥协) | compromising (adj.有损名誉的) | interim (adj.临时的) | fraction (n.一小部分)。",
            details: "compromise confidentiality 指破坏/危及机密性。compromising 是分词或形容词，不能跟在情态动词 could 和副词 severely 后作谓语动词原形。",
            cn: "未经授权访问内部通信服务器可能会严重损害专有研究成果的保密性。",
            jp: "内部通信サーバーへの不正アクセスは、専有研究の機密性を深刻に損なう（compromise）可能性があります。"
        }
    },
    {
        id: 14,
        target: "transparent",
        category: "困难",
        stem: "The regional regulatory agency commended the multinational manufacturer for enhancing its environmental ________.",
        options: ["transparency", "transparent", "acquaintance", "coincidence"],
        correct: "transparency",
        explanations: {
            guide: "形容词修饰名词中心语。enhancing its environmental ________ 结构中，形容词 environmental 后面需要名词作宾语，表示提升环保“透明度”，选 transparency。",
            family: "transparency (n.透明度/公开性) | transparent (adj.透明的) | acquaintance (n.熟人) | coincidence (n.巧合)。",
            details: "environmental transparency 意为环境信息公开透明度。transparent 为形容词，不能直接放在形容词 environmental 之后充当动词 enhancing 的宾语中心词。",
            cn: "区域监管机构赞扬了这家跨国制造企业提升其环境信息公开透明度的做法。",
            jp: "地域の規制当局は、その多国籍メーカーが環境に関する透明性（transparency）を高めたことを称賛しました。"
        }
    },
    {
        id: 15,
        target: "controversial",
        category: "困难",
        stem: "The city council's plan to rezone the historic district for commercial use has generated considerable public ________.",
        options: ["controversy", "controversial", "appraisal", "prime"],
        correct: "controversy",
        explanations: {
            guide: "动宾搭配与名词词性考点。generate public ________ 结构中，形容词 public 后面需要填入名词作 generated 的宾语，意为引起“公开争议/舆论争论”，选 controversy。",
            family: "controversy (n.公开争论/争议) | controversial (adj.有争议的) | appraisal (n.评估) | prime (adj.首要的)。",
            details: "generate controversy 是托业高阶社论及新闻语篇常见短语。controversial 是形容词，无法充当及物动词 generated 的宾语。",
            cn: "市议会关于将该历史街区重新规划为商业用地的计划引发了相当大的公众争议。",
            jp: "歴史地区を商業用地に再区分するという市議会の計画は、かなりの世論の議論・論争（controversy）を引き起こしました。"
        }
    },
    {
        id: 16,
        target: "coincidence",
        category: "困难",
        stem: "________, the firm's critical software upgrade became available on the exact date the older platform reached its end-of-life status.",
        options: ["Coincidentally", "Coincidence", "Straightforwardly", "Primarily"],
        correct: "Coincidentally",
        explanations: {
            guide: "句首评注性副词修饰全句。空格位于句首且有逗号隔开，修饰整个句子表达“巧合的是/碰巧的是”，选副词形式 Coincidentally。",
            family: "coincidentally (adv.巧合地) | coincidence (n.巧合) | straightforwardly (adv.直接地) | primarily (adv.主要地)。",
            details: "Coincidentally, [clause] 属于托业长篇阅读高阶衔接词。Coincidence 是名词，不能单独置于句首用逗号隔开作评注性修饰语。",
            cn: "巧合的是，该公司的关键软件升级发布之日，恰好是旧平台到达官方停止支持期限的同一天。",
            jp: "偶然にも（Coincidentally）、同社の重要なソフトウェアアップグレードは、旧プラットフォームがサポート終了日を迎えたまさにその日に利用可能になりました。"
        }
    },
    {
        id: 17,
        target: "appraisal",
        category: "困难",
        stem: "Before extending the multimillion-dollar commercial mortgage, the bank mandated an independent ________ of the property's value.",
        options: ["appraisal", "appraiser", "compromise", "transparent"],
        correct: "appraisal",
        explanations: {
            guide: "名词词义辨析与介词搭配。an independent ________ of the property's value 结构中，表达对财产价值的“专业评估/估价”，选 appraisal（评估报告/行为）。",
            family: "appraisal (n.估价/评估) | appraiser (n.估价师/评估人) | compromise (n.妥协) | transparent (adj.透明的)。",
            details: "an appraisal of value 意为对价值的评估。appraiser 指具体的评估师（人），后接 of the property's value 属于逻辑错配。",
            cn: "在发放数百万美元的商业抵押贷款之前，银行要求对该房产的价值进行独立评估。",
            jp: "数百万ドルの商業住宅ローンを提供する前に、銀行はその不動産の価値について独立した鑑定評価（appraisal）を義務付けました。"
        }
    },
    {
        id: 18,
        target: "prime",
        category: "困难",
        stem: "The dramatic rise in fourth-quarter profitability was ________ driven by strong consumer demand for eco-friendly packaging.",
        options: ["primarily", "prime", "fractional", "interim"],
        correct: "primarily",
        explanations: {
            guide: "被动语态中的副词修饰。在 was ________ driven by 结构中，系动词 was 与过去分词 driven 之间需填入副词作状语，primarily 意为“主要地/首要地”，选 primarily。",
            family: "primarily (adv.主要地/根本上) | prime (adj.主要的/最佳的) | fractional (adj.微小的) | interim (adj.临时的)。",
            details: "was primarily driven by 意为主要受到……的推动。prime 是形容词，不能在被动语态谓语动词结构中充当修饰动词的分词状语。",
            cn: "第四季度盈利能力的显著提升，主要是受到消费者对环保包装强劲需求的推动。",
            jp: "第4四半期の収益力の大幅な向上は、環境に優しい包装に対する消費者の旺盛な需要によって主として（primarily）推進されました。"
        }
    }
];