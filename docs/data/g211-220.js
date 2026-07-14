// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag121-130.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "immediately",
        pos: "副",
        ipa: "/ɪˈmiːdiətli/",
        cn: "立即，马上",
        jp: "直ちに、すぐに",
        family: "immediate / immediacy",
        tips: "日常办公与紧急通知核心词。常修饰动作，如 respond immediately（立即回复）、implement immediately（立即实施）。在听力和阅读中经常作为“限时、立刻”的时间考点。",
        desc: "Please respond immediately."
    },
    {
        word: "electronic",
        pos: "形",
        ipa: "/ɪˌlekˈtrɑːnɪk/",
        cn: "电子的，电子化构成的",
        jp: "電子の、電子的な",
        family: "electronically / electronics",
        tips: "办公数字化与现代科技场景高频形容词。常考搭配 electronic signature（电子签名）、electronic equipment（电子设备）。其副词 electronically 经常与 submit（提交）进行搭配考查。",
        desc: "We use electronic billing."
    },
    {
        word: "highly",
        pos: "副",
        ipa: "/ˈhaɪli/",
        cn: "高度地，非常，极",
        jp: "非常に、大いに、高く",
        family: "high / height / heighten",
        tips: "极高频程度副词。常用于修饰形容词或过去分词，如 highly recommended（强烈推荐）、highly qualified（资历极深的）。在词汇辨析中，注意它用来表达抽象意义的“极其”。",
        desc: "He is highly qualified."
    },
    {
        word: "deal",
        pos: "動/名",
        ipa: "/diːl/",
        cn: "处理，应对；交易，协议",
        jp: "扱う、取引、対処する",
        family: "dealing / dealt / dealer",
        tips: "客服支持与商务谈判核心词。作动词时必考搭配 deal with...（处理/应对……）。作名词时常指商贸协议（close a deal 达成交易）。",
        desc: "We must deal with complaints."
    },
    {
        word: "regarding",
        pos: "介",
        ipa: "/rɪˈɡɑːrdɪŋ/",
        cn: "关于，至于",
        jp: "〜に関する、〜について",
        family: "regard / regardless",
        tips: "商务书信与邮件标题中绝对核心的介词。在语法填空和阅读中，可以与 about, concerning 或 with respect to 进行 100% 同义词替换。",
        desc: "I have a question regarding the order."
    },
    {
        word: "determine",
        pos: "動",
        ipa: "/dɪˈtɜːrmɪn/",
        cn: "决定，确定，查明",
        jp: "決定する、判断する、特定する",
        family: "determination / determined / determining",
        tips: "市场调研、财务分析与战略决策高频动词。常接宾语从句或名词，如 determine the cause of...（查明……的原因）。在阅读中与 figure out 语义重合。",
        desc: "We need to determine the cause."
    },
    {
        word: "complaint",
        pos: "名",
        ipa: "/kəmˈpleɪnt/",
        cn: "投诉，抱怨",
        jp: "苦情、クレーム",
        family: "complain / complainer",
        tips: "客户服务与质量管理（CRM）的常客。高频搭配 handle customer complaints（处理客户投诉）、file a complaint（提出投诉）。注意 complain 是动词，而 complaint 是名词。",
        desc: "She filed a formal complaint."
    },
    {
        word: "division",
        pos: "名",
        ipa: "/dɪˈvɪʒn/",
        cn: "部门，分支机构；分割",
        jp: "部門、課、分割",
        family: "divide / divided / divisible",
        tips: "企业组织架构核心名词。在公司语境下完全等同于 department 或 branch。例如 marketing division（营销部门）、division manager（部门经理）。",
        desc: "He works in the marketing division."
    },
    {
        word: "retire",
        pos: "動",
        ipa: "/rɪˈtaɪər/",
        cn: "退休，退役",
        jp: "退職する、引退する",
        family: "retirement / retired / retiree",
        tips: "人事变动与公司庆典核心动词。常考 retirement party（退休派对）或 retire from the company（从公司退休）。其人称名词 retiree 意为“退休者”。",
        desc: "He plans to retire next year."
    },
    {
        word: "method",
        pos: "名",
        ipa: "/ˈmeθəd/",
        cn: "方法，办法，条理",
        jp: "方法、方式",
        family: "methodical / methodology / methods",
        tips: "生产效率与财务支付高频名词。常考搭配 payment method（支付方式）、efficient method（高效的方法）。在阅读中常与 way 或 approach 同义替换。",
        desc: "Choose your preferred payment method."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "immediately",
        category: "简单",
        stem: "If you encounter any glitches in the system, please contact the IT support team ________.",
        options: ["immediately", "complaint", "office", "prior"],
        correct: "immediately",
        explanations: {
            guide: "句子结构及副词修饰语辨析。修饰动词 contact，表示紧急情况下的动作，填入副词 immediately。",
            family: "immediately (adv.立即) | complaint (n.投诉) | office (n.办公室) | prior (adj.先前的)。",
            details: "contact immediately 意为“立即联系”，是IT支持、安全警示等办公故障场景的经典通知表达。其余干扰项无法修饰动词。",
            cn: "如果您在系统中遇到任何故障，请立即联系IT支持团队。",
            jp: "システムに不具合が発生した場合は、直ちに（immediately）ITサポートチームに連絡してください。"
        }
    },
    {
        id: 2,
        target: "electronic",
        category: "简单",
        stem: "Please make sure to shut down all ________ appliances before leaving the office for the weekend.",
        options: ["electronic", "retire", "thoroughly", "deposit"],
        correct: "electronic",
        explanations: {
            guide: "形容词修饰名词。空格后为名词 appliances（家电/电器），需填入形容词作定语修饰，选 electronic。",
            family: "electronic (adj.电子的) | retire (v.退休) | thoroughly (adv.彻底地) | deposit (n./v.定金/存款)。",
            details: "electronic appliances 意为“电器设备”，常用于日常行政通知，叮嘱员工在周末（weekend）下班前关闭电源，保障消防安全。其他选项词性不符。",
            cn: "周末下班离开办公室前，请务必关闭所有电器设备的电源。",
            jp: "週末にオフィスを出る前に、すべての電化（electronic）製品の電源を切っていることを確認してください。"
        }
    },
    {
        id: 3,
        target: "highly",
        category: "简单",
        stem: "The upcoming training seminar on leadership is ________ recommended for all newly promoted managers.",
        options: ["highly", "regarding", "division", "proposed"],
        correct: "highly",
        explanations: {
            guide: "程度副词修饰过去分词。空格位于 is 和 recommended 之间，需填入副词作程度修饰，选 highly。",
            family: "highly (adv.高度地/极其) | regarding (prep.关于) | division (n.部门) | proposed (adj.被提议的)。",
            details: "is highly recommended 意为“被强烈推荐”，是人力资源培训、产品介绍等场景中的超高频金牌词组。其余选项不作副词或意思不通。",
            cn: "即将举行的领导力培训研讨会强烈推荐所有新晋升的经理参加。",
            jp: "今度のリーダーシップに関するトレーニングセミナーは、新しく昇進したすべてのマネージャーに強く（highly）推奨されています。"
        }
    },
    {
        id: 4,
        target: "deal",
        category: "简单",
        stem: "Our customer service agents are trained to ________ politely with stressful inquiries and disputes.",
        options: ["deal", "highly", "method", "closed"],
        correct: "deal",
        explanations: {
            guide: "动词不定式后的核心动词及固定搭配。空格前有 to，后有介词 with，结合客服应对纠纷的语境选 deal。",
            family: "deal (v./n.处理) | highly (adv.高度地) | method (n.方法) | closed (adj.关闭的)。",
            details: "deal with 意为“处理，应对”，是托业中极常考的动介搭配，语义上契合处理客户咨询（inquiries）或纠纷（disputes）。其余选项无法与 with 搭配。",
            cn: "我们的客服人员经过专业培训，能礼貌地处理棘手的咨询与纠纷。",
            jp: "当社のカスタマーサービス担当者は、ストレスの多い問い合わせや紛争に礼儀正しく対処（deal）するよう訓練されています。"
        }
    },
    {
        id: 5,
        target: "regarding",
        category: "简单",
        stem: "The general manager issued a new memo ________ the upcoming office renovation plans.",
        options: ["regarding", "determine", "complaint", "lucrative"],
        correct: "regarding",
        explanations: {
            guide: "介词语义辨析。空格前是名词 memo（备忘录），空格后是名词 plans（计划），需要填入介词表示“关于”，选 regarding。",
            family: "regarding (prep.关于) | determine (v.决定) | complaint (n.投诉) | lucrative (adj.获利的)。",
            details: "memo regarding... 意为“关于……的备忘录”，属于标准行政公文标题，等同于 memo about。其余干扰项均为动词、名词或形容词。",
            cn: "总经理发布了一份关于即将进行的办公室翻修计划的新备备忘录。",
            jp: "ゼネラルマネージャーは、今度のオフィス改装計画に関する（regarding）新しい社内文書を発行しました。"
        }
    },
    {
        id: 6,
        target: "determine",
        category: "简单",
        stem: "The research team will conduct a thorough analysis to ________ the feasibility of the project.",
        options: ["determine", "immediately", "division", "historical"],
        correct: "determine",
        explanations: {
            guide: "动词不定式作目的状语。空格在 to 之后，且后面带有 feasibility（可行性）作宾语，选用及物动词原形 determine。",
            family: "determine (v.确定/判断) | immediately (adv.立即) | division (n.部门) | historical (adj.历史的)。",
            details: "determine the feasibility of... 意为“确定……的可行性”，是项目前期调研、战略规划时的标配核心动词。其他选项词性不符。",
            cn: "研究团队将进行彻底的分析，以确定该项目的可行性。",
            jp: "研究チームは、プロジェクトの実現可能性を判断（determine）するために、徹底的な分析を行います。"
        }
    },
    {
        id: 7,
        target: "complaint",
        category: "中等",
        stem: "A customer submitted a formal ________ because the delivery of the office supplies was delayed.",
        options: ["complaint", "complain", "complained", "complaining"],
        correct: "complaint",
        explanations: {
            guide: "名词作动词宾语的词性选择。空格前有不定冠词 a 和形容词 formal（正式的），需填入可数名词单数作 submitted 的宾语，选 complaint。",
            family: "complaint (n.投诉) | complain (v.抱怨) | complained (v-ed已抱怨) | complaining (v-ing抱怨中)。",
            details: "submit a formal complaint 意为“提交正式投诉”，是客户关系、质量事故处理中的固定名词搭配。complain 为其动词形式，在此词性不符。",
            cn: "由于办公用品的配送延误，一位客户提交了正式投诉。",
            jp: "オフィス用品の配送が遅れたため、顧客が正式な苦情（complaint）を申し立てました。"
        }
    },
    {
        id: 8,
        target: "division",
        category: "中等",
        stem: "All purchase requests must be approved by the head of the procurement ________ before signing.",
        options: ["division", "divide", "divided", "divisible"],
        correct: "division",
        explanations: {
            guide: "公司架构名词及词性辨析。空格前面有 procurement（采购）修饰，此处需要填入指代“部门”的名词构成复合名词，选 division。",
            family: "division (n.部门/分支) | divide (v.分割) | divided (adj.分裂的) | divisible (adj.可分割的)。",
            details: "procurement division 意为“采购部门”，在企业管理语境下等同于 procurement department。其余选项为同一词族的动词、形容词，无法修饰该语境。",
            cn: "所有采购申请在签署前，必须获得采购部门主管的批准。",
            jp: "すべての購入申請は、署名する前に購買部門（division）の長による承認を得る必要があります。"
        }
    },
    {
        id: 9,
        target: "retire",
        category: "中等",
        stem: "After thirty years of diligent service, the CFO announced her plan to ________ next fiscal year.",
        options: ["retire", "retirement", "retired", "retiree"],
        correct: "retire",
        explanations: {
            guide: "不定式后动词原形的词性匹配。空格前面有 plan to，后面常接动词原形构成不定式表示计划做某事，选不及物动词 retire。",
            family: "retire (v.退休) | retirement (n.退休) | retired (adj.退休的) | retiree (n.退休人员)。",
            details: "plan to retire 意为“计划退休”。虽然 retirement 也是名词且可用作修饰，但在 plan to do 结构中必须使用动词原形。retiree 是人称名词，不符语法。",
            cn: "在勤勉服务了三十年后，这位首席财务官宣布了她计划在下一财政年度退休的消息。",
            jp: "30年間にわたる勤勉な勤務を経て、CFOは次の会計年度に退職（retire）する計画を発表しました。"
        }
    },
    {
        id: 10,
        target: "method",
        category: "中等",
        stem: "The accounting department will introduce a more efficient ________ for processing travel expense claims.",
        options: ["method", "methodical", "methodology", "methods"],
        correct: "method",
        explanations: {
            guide: "冠词后的单数名词中心语。空格前面有不定冠词 a 和形容词 efficient（高效的），需要填入可数名词单数，选 method。",
            family: "method (n.方法) | methodical (adj.有条理的) | methodology (n.方法论) | methods (n-pl方法)。",
            details: "a more efficient method for doing 意为“一种做某事更高效的方法”，常用于流程优化。由于前面有 a 修饰，排除复数形式 methods。",
            cn: "财务部将引入一种更高效的方法来处理出差费用报销。",
            jp: "経理部は、出張旅費精算を処理するためのより効率的な方法（method）を導入する予定です。"
        }
    },
    {
        id: 11,
        target: "immediately",
        category: "中等",
        stem: "The HR director requested an ________ response regarding the proposed salary adjustments.",
        options: ["immediate", "immediately", "immediacy", "immediacies"],
        correct: "immediate",
        explanations: {
            guide: "形容词修饰名词。空格前面有不定冠词 an，后面有名词 response（回复），空格处需要填入形容词，选 immediate。",
            family: "immediate (adj.立即的) | immediately (adv.立即) | immediacy (n.紧迫性) | immediacies (n-pl紧急状态)。",
            details: "an immediate response 意为“立即回复/即时答复”，常在紧迫的人事变动、危机处理或会议确认中作为核心词。副词 immediately 无法直接修饰名词。",
            cn: "人力资源总监要求对拟议的薪资调整方案做出立即回复。",
            jp: "人事ディレクターは、提案された給与調整に関して即座の（immediate）回答を求めました。"
        }
    },
    {
        id: 12,
        target: "highly",
        category: "中等",
        stem: "The company's innovative market expansion strategy led to a ________ profitable fiscal year.",
        options: ["highly", "high", "heighten", "height"],
        correct: "highly",
        explanations: {
            guide: "副词修饰形容词。空格后是形容词 profitable（盈利的），修饰形容词需要副词，选用 highly。",
            family: "highly (adv.高度地/极其) | high (adj.高的) | heighten (v.提高) | height (n.高度)。",
            details: "a highly profitable fiscal year 意为“一个高度盈利的财政年度”。high 虽也可作副词，但 highly 专门用于修饰抽象形容词表达“极其/高度”概念，是财务报告常用句式。",
            cn: "公司创新的市场扩张战略带来了一个高度盈利的财政年度。",
            jp: "会社の革新的な市場拡大戦略により、非常に（highly）収益性の高い会計年度となりました。"
        }
    },
    {
        id: 13,
        target: "electronic",
        category: "困难",
        stem: "Customers are strongly encouraged to submit their tax return summaries ________ to ensure rapid processing.",
        options: ["electronically", "electronic", "electronics", "electron"],
        correct: "electronically",
        explanations: {
            guide: "动词的后置状语副词。空格位于完整的被动结构 submit summaries 之后，需填入副词修饰动作 submit，选 electronically。",
            family: "electronically (adv.电子化地) | electronic (adj.电子的) | electronics (n.电子学/设备) | electron (n.电子)。",
            details: "submit electronically 意为“通过电子方式提交”，是环保数字化办公、在线报税（tax return）等流程中典型的极高阶商务表达。",
            cn: "强烈建议客户通过电子方式提交其报税单摘要，以确保快速处理。",
            jp: "迅速な処理を確保するため、顧客は納税申告書の要約を電子的に（electronically）提出することが強く推奨されています。"
        }
    },
    {
        id: 14,
        target: "deal",
        category: "困难",
        stem: "The subsidiary is currently ________ with a severe revenue loss after the voluntary clearance of its old stock.",
        options: ["dealing", "dealt", "deal", "dealer"],
        correct: "dealing",
        explanations: {
            guide: "动词时态在特定语境下的变形。主语为 The subsidiary，前面有助动词 is，后面有介词 with，且有 currently（目前），要求填入现在分词构成现在进行时，选 dealing。",
            family: "dealing (v-ing处理/交易) | dealt (v-ed处理) | deal (v.处理) | dealer (n.经销商)。",
            details: "is currently dealing with... 意为“目前正在处理/应对……”。主语 subsidiary（子公司）面临清仓（clearance）和收入减少，需要表达进行时的动作。",
            cn: "在自愿清仓旧库存后，该子公司目前正在应对严重的收入损失。",
            jp: "古い在庫の自主的な一掃の後、その子会社は現在、深刻な収益減少に対処（dealing）しています。"
        }
    },
    {
        id: 15,
        target: "determine",
        category: "困难",
        stem: "Our marketing research firm conducts deep analysis, and the ________ of customer preference is our top priority.",
        options: ["determination", "determine", "determining", "determinable"],
        correct: "determination",
        explanations: {
            guide: "主语名词词性及格的判定。空格前有定冠词 the，后有介词短语 of customer preference，且作为并列句主语，此处必须填入名词，选 determination。",
            family: "determination (n.确定/测定) | determine (v.决定) | determining (adj.决定性的) | determinable (adj.可决定的)。",
            details: "determination of customer preference 意为“客户偏好的测定/确定”，这里 determination 作抽象名词，意为“查明/测定”，符合高阶调研与商业数据分析的严谨语境。",
            cn: "我们的市场研究公司进行深度分析，而对客户偏好的确定是我们的首要任务。",
            jp: "当社の市場調査会社は深い分析を行っており、顧客の好みを特定（determination）することが当社の最優先事項です。"
        }
    },
    {
        id: 16,
        target: "complaint",
        category: "困难",
        stem: "Although the service team handled the glitches diligently, the client continued to ________ about the delay.",
        options: ["complain", "complaint", "complaining", "complained"],
        correct: "complain",
        explanations: {
            guide: "不定式后动词原形的语境选择。空格前有 to，且后接介词 about，此处需要填入不及物动词原形，选 complain。",
            family: "complain (v.抱怨/投诉) | complaint (n.投诉) | complaining (v-ing抱怨) | complained (v-ed已抱怨)。",
            details: "continue to complain about... 意为“继续抱怨/投诉……”。由于空格前面是 to，后面是 about，complain 是经典的不及物动词，可接 about。而名词 complaint 不适用于此语法位置。",
            cn: "尽管服务团队尽职尽责地处理了系统故障，但客户仍继续就延误进行投诉。",
            jp: "サービスチームが勤勉に不具合に対処したにもかかわらず、クライアントは遅延について不満を言い（complain）続けました。"
        }
    },
    {
        id: 17,
        target: "retire",
        category: "困难",
        stem: "The board announced that several senior executives have opted for early ________ during this fiscal year's restructuring.",
        options: ["retirement", "retire", "retiring", "retired"],
        correct: "retirement",
        explanations: {
            guide: "介词后的名词中心语。空格前有形容词 early（早期的），且作为介词 for 的宾语，需填入名词，选 retirement。",
            family: "retirement (n.退休) | retire (v.退休) | retiring (adj.即将退休的) | retired (adj.已退休的)。",
            details: "opt for early retirement 意为“选择提前退休”，是企业在组织架构重组（restructuring）或裁员时非常常见的高阶人力资源管理术语。",
            cn: "董事会宣布，在今年财政年度的重组期间，几位高级管理人员已选择提前退休。",
            jp: "取締役会は、今年度の組織再編の間に、数人の上級役員が早期退職（retirement）を選択したと発表しました。"
        }
    },
    {
        id: 18,
        target: "method",
        category: "困难",
        stem: "To ensure thorough quality control, the engineering team applied a highly ________ approach to test the satellite grid.",
        options: ["methodical", "method", "methodology", "methods"],
        correct: "methodical",
        explanations: {
            guide: "修饰名词的形容词选择。空格后为名词 approach（方法/步骤），前面有程度副词 highly，需要填入形容词作定语修饰 approach，选 methodical。",
            family: "methodical (adj.有条不紊的/极具条理的) | method (n.方法) | methodology (n.方法论) | methods (n-pl方法)。",
            details: "methodical approach 意为“有条不紊的方法/极具条理的步骤”，常用来描述工程检测、质量控制等需要严格按部就班的高阶商务科技场景。",
            cn: "为确保彻底的质量控制，工程团队采用了一种非常有条理的方法来测试卫星电网。",
            jp: "徹底した品質管理を確保するため、エンジニアリングチームは衛星グリッドをテストするために非常に体系的な（methodical）アプローチを適用しました。"
        }
    }
];