// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data291-300.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "in fact",
        pos: "短副",
        ipa: "/ɪn fækt/",
        cn: "事实上，实际上",
        jp: "実際は、実は",
        family: "fact / factual / factually",
        tips: "强调与递进短语：用于引出真实情况或强化前文论述（e.g., In fact, sales improved）。",
        desc: "In fact, sales improved."
    },
    {
        word: "otherwise",
        pos: "副",
        ipa: "/ˈʌðərwaɪz/",
        cn: "否则，在其他情况下",
        jp: "さもなければ、そうでなければ",
        family: "other / wise",
        tips: "条件假设与转折高频：pay now, otherwise fees apply（立即付款，否则产生费用）。",
        desc: "Hurry up, otherwise we are late."
    },
    {
        word: "instead",
        pos: "副",
        ipa: "/ɪnˈsted/",
        cn: "相反，替代",
        jp: "その代わりに、そうではなく",
        family: "instead of",
        tips: "副词 instead 常置于句末或句首；instead of 为复合介词，后接名词/动名词。",
        desc: "We ate at home instead."
    },
    {
        word: "rather",
        pos: "副",
        ipa: "/ˈræðər/",
        cn: "相当地；准确地说；相反",
        jp: "むしろ、かなり",
        family: "rather than / would rather",
        tips: "托业核心搭配：rather than（而不是），would rather do（宁愿做某事）。",
        desc: "I prefer coffee rather."
    },
    {
        word: "consequently",
        pos: "副",
        ipa: "/ˈkɑːnsəkwentli/",
        cn: "结果是，因此",
        jp: "その結果、したがって",
        family: "consequence / consequent / inconsequential",
        tips: "因果逻辑副词，与 as a result / therefore 同义，引出直接后果。",
        desc: "Consequently, costs went down."
    },
    {
        word: "conversely",
        pos: "副",
        ipa: "/kənˈvɜːrsli/",
        cn: "相反地，颠倒地",
        jp: "逆に、反方向で",
        family: "converse / conversion / conversely",
        tips: "对比逻辑副词，用于引出互为相反/对照的逻辑或命题（e.g., Conversely, profits dropped）。",
        desc: "Conversely, profits dropped."
    },
    {
        word: "namely",
        pos: "副",
        ipa: "/ˈneɪmli/",
        cn: "即，也就是",
        jp: "すなわち、具体的には",
        family: "name / named / nameless",
        tips: "解释说明副词，用于具体列举或澄清前面的泛指概念（即：that is to say）。",
        desc: "We hired two experts, namely A and B."
    },
    {
        word: "on the contrary",
        pos: "短副",
        ipa: "/ɑːn ðə ˈkɑːntreri/",
        cn: "正好相反，相反地",
        jp: "それどころか、正反対に",
        family: "contrary / contrarily",
        tips: "强反驳/强转折短语，常用于纠正或否定前文的误解或否定假想。",
        desc: "On the contrary, sales grew."
    },
    {
        word: "thereby",
        pos: "副",
        ipa: "/ˌðerˈbaɪ/",
        cn: "从而，由此",
        jp: "それによって、したがって",
        family: "there / by",
        tips: "高阶结果状语结构：thereby + V-ing（从而导致/实现了某结果）。",
        desc: "He trained, thereby winning."
    },
    {
        word: "hence",
        pos: "副",
        ipa: "/hens/",
        cn: "因此，由此",
        jp: "したがって、それゆえに",
        family: "henceforth / henceforward",
        tips: "正式因果副词，常用于引出顺理成章推导出的结论或推论。",
        desc: "Hence, we changed strategy."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "otherwise",
        category: "简单",
        stem: "All invoice payments must be settled within thirty days; ________, a late charge will be added to the account.",
        options: ["otherwise", "instead", "namely", "conversely"],
        correct: "otherwise",
        explanations: {
            guide: "警示后果逻辑副词。前文要求30天内付款，后文指出逾期后果（产生滞纳金），选 otherwise（否则）。",
            family: "otherwise (adv.否则) | instead (adv.相反) | namely (adv.即/也就是) | conversely (adv.相反地)。",
            details: "otherwise 引导警示性的假想后果。instead（替代）、namely（即）均不符合前因后警告的逻辑。",
            cn: "所有发票款项必须在三十天内结清；否则，账户将被收取滞纳金。",
            jp: "すべての請求書の支払いは30日以内に決済されなければなりません。さもなければ（otherwise）、遅延損害金がアカウントに追加されます。"
        }
    },
    {
        id: 2,
        target: "consequently",
        category: "简单",
        stem: "The factory upgraded its automated assembly line; ________, daily production output increased by twenty percent.",
        options: ["consequently", "otherwise", "conversely", "namely"],
        correct: "consequently",
        explanations: {
            guide: "因果逻辑副词。前文提及工厂升级自动化流水线（原因），后文指出产量提升20%（直接结果），选 consequently（结果是/因此）。",
            family: "consequently (adv.因此/结果是) | otherwise (adv.否则) | conversely (adv.相反地) | namely (adv.即)。",
            details: "consequently 引出正面或负面的必然结果。conversely 用于对比，otherwise 用于假想警告，均不符合顺承因果。",
            cn: "工厂升级了自动化装配线；结果，每日产量增加了百分之二十。",
            jp: "工場は自動組み立てラインをアップグレードしました。その結果（consequently）、日々の生産高は20%増加しました。"
        }
    },
    {
        id: 3,
        target: "instead",
        category: "简单",
        stem: "The department manager decided not to order printed brochures and chose digital advertising ________.",
        options: ["instead", "thereby", "namely", "consequently"],
        correct: "instead",
        explanations: {
            guide: "句末替代副词。前文否定了纸质手册（decided not to order），后文选择数字广告作为替代，置于句末选 instead。",
            family: "instead (adv.相反/代替) | thereby (adv.从而) | namely (adv.即) | consequently (adv.结果是)。",
            details: "instead 经常放在句末，表示“取而代之/改选……”。thereby 需要接分词，namely 用于解释说明。",
            cn: "部门经理决定不订购印刷宣传册，而是选择了数字广告。",
            jp: "部門マネージャーは印刷されたパンフレットを注文しないことを決定し、代わりに（instead）デジタル広告を選択しました。"
        }
    },
    {
        id: 4,
        target: "in fact",
        category: "简单",
        stem: "The new promotional campaign was not a failure; ________, it generated the highest monthly revenue of the year.",
        options: ["in fact", "otherwise", "conversely", "namely"],
        correct: "in fact",
        explanations: {
            guide: "强调与递进短语。前文否定了失败说（was not a failure），后文补充事实指出创造了年度最高月收入，选 in fact（事实上/实际上）。",
            family: "in fact (adv.事实上) | otherwise (adv.否则) | conversely (adv.相反地) | namely (adv.即)。",
            details: "in fact 用于引出更进一步的真实事实。otherwise 表示警告，conversely 表示横向对比。",
            cn: "新的宣传活动并不是一次失败；事实上，它创造了本年度最高的月度收入。",
            jp: "新しいプロモーションキャンペーンは失敗ではありませんでした。実際（in fact）、今年最高の月間売上を生み出しました。"
        }
    },
    {
        id: 5,
        target: "namely",
        category: "简单",
        stem: "The firm recently expanded its operations into two key Asian markets, ________ Japan and South Korea.",
        options: ["namely", "thereby", "otherwise", "consequently"],
        correct: "namely",
        explanations: {
            guide: "解释说明副词。前文提到两个关键亚洲市场（泛指），后文具体列举出日本和韩国，选 namely（即/也就是）。",
            family: "namely (adv.即/也就是) | thereby (adv.从而) | otherwise (adv.否则) | consequently (adv.因此)。",
            details: "namely 用于在句中引出具体的名称或解释（相当于 that is to say）。thereby 需要后接动名词。",
            cn: "该公司最近将其业务扩展到两个关键的亚洲市场，即日本和韩国。",
            jp: "同社は最近、2つの主要なアジア市場、すなわち（namely）日本と韓国に事業を拡大しました。"
        }
    },
    {
        id: 6,
        target: "rather",
        category: "简单",
        stem: "The company chose to invest in internal staff development ________ than hiring expensive outside consultants.",
        options: ["rather", "instead", "otherwise", "thereby"],
        correct: "rather",
        explanations: {
            guide: "固定短语搭配。________ than 属于托业经典搭配，意为“而不是/与其……不如……”，选 rather。",
            family: "rather (adv.相当/相反) | instead (adv.代替) | otherwise (adv.否则) | thereby (adv.从而)。",
            details: "rather than 引导对比排除项。instead 不能直接与 than 连用（应为 instead of）。",
            cn: "公司选择投资于内部员工发展，而不是聘请昂贵的外部顾问。",
            jp: "同社は高価な外部コンサルタントを雇うのではなく（rather than）、社内スタッフの開発に投資することを選択しました。"
        }
    },
    {
        id: 7,
        target: "on the contrary",
        category: "中等",
        stem: "The online rumor did not hurt sales; ________, customer orders reached an all-time high following the press release.",
        options: ["on the contrary", "conversely", "consequently", "otherwise"],
        correct: "on the contrary",
        explanations: {
            guide: "强反驳转折短语。前文否定了谣言损害销售（did not hurt），后文用极具反差的事实（订单创历史新高）进行反驳，选 on the contrary（正好相反）。",
            family: "on the contrary (adv.正好相反) | conversely (adv.相反地) | consequently (adv.结果是) | otherwise (adv.否则)。",
            details: "on the contrary 专门用于纠正前文的否定假想。conversely 侧重于两个独立命题的相反对照。",
            cn: "网络谣言并没有损害销售；正好相反，新闻发布会后客户订单创下了历史新高。",
            jp: "オンラインの噂は売上に打撃を与えませんでした。それどころか（on the contrary）、プレスリリース後に顧客の注文は過去最高に達しました。"
        }
    },
    {
        id: 8,
        target: "thereby",
        category: "中等",
        stem: "The logistics provider optimized its delivery routes, ________ reducing total fuel consumption by fifteen percent.",
        options: ["thereby", "otherwise", "namely", "conversely"],
        correct: "thereby",
        explanations: {
            guide: "高阶结果状语结构。________ + V-ing (reducing...) 表达“由此/从而降低了……”，选副词 thereby。",
            family: "thereby (adv.从而/由此) | otherwise (adv.否则) | namely (adv.即) | conversely (adv.相反地)。",
            details: "thereby doing sth 属于托业高频句型，用于引出动作带来的直接客观结果。otherwise 等词不能直接后接 V-ing。",
            cn: "物流供应商优化了送货路线，从而将总燃料消耗降低了百分之十五。",
            jp: "物流プロバイダーは配送ルートを最適化し、それによって（thereby）燃料消費量を15%削減しました。"
        }
    },
    {
        id: 9,
        target: "conversely",
        category: "中等",
        stem: "When consumer confidence is high, retail spending increases; ________, when confidence falls, households tend to save more.",
        options: ["conversely", "in fact", "namely", "thereby"],
        correct: "conversely",
        explanations: {
            guide: "对照逻辑副词。前文陈述信心高则消费增，后文对照陈述信心低则储蓄增，选 conversely（相反地/反之）。",
            family: "conversely (adv.相反地/反之) | in fact (adv.事实上) | namely (adv.即) | thereby (adv.从而)。",
            details: "conversely 用于引导互为对照的两种相反经济情形。in fact 侧重于补充事实而非正反对比。",
            cn: "当消费者信心高涨时，零售支出就会增加；相反地，当信心下降时，家庭往往会增加储蓄。",
            jp: "消費者信頼感が好調な時、小売支出は増加します。相反地（conversely）、信頼感が低下すると、世帯は貯蓄を増やす傾向があります。"
        }
    },
    {
        id: 10,
        target: "otherwise",
        category: "中等",
        stem: "Please submit your signed travel expense report by Friday; ________, reimbursement processing will be delayed until next month.",
        options: ["otherwise", "consequently", "namely", "instead"],
        correct: "otherwise",
        explanations: {
            guide: "条件假想警告副词。前文要求周五前提交发票，分号后指出未提交的后果（报销推迟），选 otherwise（否则）。",
            family: "otherwise (adv.否则) | consequently (adv.结果是) | namely (adv.即) | instead (adv.代替)。",
            details: "otherwise 相当于 If you do not do so。consequently（结果是）误将周五前提交当作报销推迟的原因，逻辑不通。",
            cn: "请在周五前提交您签署的差旅费报告；否则，报销处理将推迟到下个月。",
            jp: "署名済みの出張旅費報告書を金曜日までに提出してください。さもなければ（otherwise）、精算処理は来月まで遅延します。"
        }
    },
    {
        id: 11,
        target: "rather",
        category: "中等",
        stem: "The board members preferred to postpone the merger decision ________ than rush into an uncertain agreement.",
        options: ["rather", "instead", "thereby", "fact"],
        correct: "rather",
        explanations: {
            guide: "固定句型搭配。prefer to do A ________ than do B 是托业高频结构，表达“宁愿做A而不愿做B”，选 rather。",
            family: "rather (adv.宁愿/相当) | instead (adv.替代) | thereby (adv.从而) | fact (n.事实)。",
            details: "prefer to... rather than... 为标准习惯表达。instead 不能与 than 直接连用。",
            cn: "董事会成员宁愿推迟合并决定，也不愿仓促达成一项不确定的协议。",
            jp: "取締役会のメンバーは、不確実な合意に急ぐよりも（rather than）、合併の決定を延期することを好みました。"
        }
    },
    {
        id: 12,
        target: "hence",
        category: "中等",
        stem: "Raw material prices rose sharply last month; ________, the manufacturing cost per unit experienced an unavoidable increase.",
        options: ["hence", "conversely", "otherwise", "namely"],
        correct: "hence",
        explanations: {
            guide: "因果逻辑副词。原材料价格大幅上涨（原因），单位制造成本不可避免地增加（必然结果），选 hence（因此/由此）。",
            family: "hence (adv.因此/由此) | conversely (adv.相反地) | otherwise (adv.否则) | namely (adv.即)。",
            details: "hence 用于书面语中引出顺理成章的逻辑结论。conversely 表示反向对比，不符合因果推导。",
            cn: "上个月原材料价格大幅上涨；因此，单位制造成本经历了不可避免的增加。",
            jp: "先月、原材料価格が急激に上昇しました。したがって（hence）、ユニットあたりの製造コストは避けられない増加を経験しました。"
        }
    },
    {
        id: 13,
        target: "instead",
        category: "困难",
        stem: "________ of launching a costly television commercial, the marketing committee allocated the entire budget toward digital ads.",
        options: ["Instead", "Rather", "Fact", "Otherwise"],
        correct: "Instead",
        explanations: {
            guide: "复合介词短语考点。________ of + V-ing 属于托业经典句型，意为“代替/而不是做某事”，选 Instead（Instead of）。",
            family: "Instead (of) (prep.代替/而不是) | Rather (adv.宁愿) | Fact (n.事实) | Otherwise (adv.否则)。",
            details: "Instead of 后面直接跟名词或动名词短语（launching...）。Rather 需与 than 连用（rather than launching）。",
            cn: "营销委员会没有投放昂贵的电视广告，而是将全部预算拨给了数字广告。",
            jp: "高価なテレビCMを開始する代わりに（Instead of）、マーケティング委員会は全予算をデジタル広告に割り当てました。"
        }
    },
    {
        id: 14,
        target: "thereby",
        category: "困难",
        stem: "The corporate restructuring streamlined internal approvals, ________ enabling regional managers to respond faster to clients.",
        options: ["thereby", "consequently", "conversely", "otherwise"],
        correct: "thereby",
        explanations: {
            guide: "长难句结果状语结构。逗号后用 ________ + V-ing (enabling...) 表达“由此使区域经理能够……”，选 thereby。",
            family: "thereby (adv.从而/由此) | consequently (adv.因此) | conversely (adv.相反地) | otherwise (adv.否则)。",
            details: "thereby + V-ing 是商务英文中表达“精简流程带来的直接积极效果”的标准高阶语法。consequently 是纯副词，不能无连词直接接 V-ing。",
            cn: "公司重组精简了内部审批流程，从而使区域经理能够更快地响应客户。",
            jp: "企業の再編により社内承認が効率化され、それによって（thereby）地域マネージャーは顧客により迅速に対応できるようになりました。"
        }
    },
    {
        id: 15,
        target: "conversely",
        category: "困难",
        stem: "Strong economic growth usually boosts stock prices; ________, high interest rates can suppress corporate borrowing and market expansion.",
        options: ["conversely", "namely", "instead", "thereby"],
        correct: "conversely",
        explanations: {
            guide: "高阶宏观经济对比副词。前文陈述经济增长拉升股价，后文指出高利率抑制借贷与扩张，选 conversely（相反地/反之）。",
            family: "conversely (adv.相反地) | namely (adv.即) | instead (adv.代替) | thereby (adv.从而)。",
            details: "conversely 在学术与商业报告中用于引出反向拉动的经济变量关系。namely 用于举例说明，thereby 引出同向结果。",
            cn: "强劲的经济增长通常会提振股价；相反地，高利率会抑制企业借贷和市场扩张。",
            jp: "好調な経済成長は通常、株価を上昇させます。反面（conversely）、高金利は企業の借り入れと市場拡大を抑制する可能性があります。"
        }
    },
    {
        id: 16,
        target: "in fact",
        category: "困难",
        stem: "Initial reports underestimated the demand for the new product; ________, sales exceeded early projections by over fifty percent.",
        options: ["in fact", "otherwise", "conversely", "namely"],
        correct: "in fact",
        explanations: {
            guide: "转折与事实递进短语。前文指出早期报告低估了需求，后文用实际销售超预期50%的客观事实进行修正和强化，选 in fact（事实上/实际上）。",
            family: "in fact (adv.事实上) | otherwise (adv.否则) | conversely (adv.相反地) | namely (adv.即)。",
            details: "in fact 在此处用于打破低估的假想，引出惊人的真实数据。otherwise 属于逻辑警告，不套合数据修正语境。",
            cn: "最初的报告低估了对新产品的需求；事实上，销售额超过早期预测百分之五十以上。",
            jp: "初期の報告では新製品の需要が低く見積もられていました。実際には（in fact）、売上は初期予測要件を50%以上上回りました。"
        }
    },
    {
        id: 17,
        target: "on the contrary",
        category: "困难",
        stem: "Far from being an obstacle to growth, the strict environmental regulation, ________, encouraged local firms to innovate.",
        options: ["on the contrary", "consequently", "otherwise", "namely"],
        correct: "on the contrary",
        explanations: {
            guide: "双重转折插入语。前文用 Far from being an obstacle（绝非阻碍）铺垫，句中插入短语进一步强调“正好相反/反倒”，选 on the contrary。",
            family: "on the contrary (adv.正好相反) | consequently (adv.因此) | otherwise (adv.否则) | namely (adv.即)。",
            details: "Far from... on the contrary 属于托业阅读高阶强调句式，表达“不仅没有阻碍，反而促进了创新”。",
            cn: "严厉的环保法规绝非发展的阻碍；正好相反，它反倒鼓励了当地企业进行创新。",
            jp: "成長の障害になるどころか、厳格な環境規制は、それどころか（on the contrary）、地元の企業に革新を促しました。"
        }
    },
    {
        id: 18,
        target: "consequently",
        category: "困难",
        stem: "The regional facility failed to comply with federal safety standards and was ________ subject to a substantial fine.",
        options: ["consequently", "conversely", "otherwise", "namely"],
        correct: "consequently",
        explanations: {
            guide: "句中因果副词。放置于助动词 was 和形容词短语 subject to（面临罚款）之间，表达“因此/结果”，选 consequently。",
            family: "consequently (adv.因此/结果是) | conversely (adv.相反地) | otherwise (adv.否则) | namely (adv.即)。",
            details: "consequently 可置于系动词之后充当句中状语，说明未合规所直接导致的处罚结果。conversely（相反地）与违规受罚逻辑矛盾。",
            cn: "该区域设施未能遵守联邦安全标准，因此面临巨额行政罚款。",
            jp: "地域施設は連邦安全基準を遵守できず、その結果（consequently）、多額の罰金を科されました。"
        }
    }
];