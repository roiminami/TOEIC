// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag341-350.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "accurate",
        pos: "形",
        ipa: "/ˈækjərət/",
        cn: "准确的，精确的",
        jp: "正確な、精密な",
        family: "accurately / accuracy / inaccurate",
        tips: "财务审计与数据分析核心形容词。常考搭配 accurate sales figures（准确的销售数据）、accurate description（准确的描述）。名词形式 accuracy（准确性）也是高频考点。",
        desc: "The report is accurate."
    },
    {
        word: "findings",
        pos: "名",
        ipa: "/ˈfaɪndɪŋz/",
        cn: "调查结果，研究发现",
        jp: "調査結果、研究成果",
        family: "finding / find / finder",
        tips: "市场调研与学术报告核心名词。在托业中通常以复数形式 findings 出现，常考搭配 survey findings（调查结果）、research findings（研究结果），常作 submit 或 present 的宾语。",
        desc: "We published the findings."
    },
    {
        word: "slightly",
        pos: "副",
        ipa: "/ˈslaɪtli/",
        cn: "稍微，略微",
        jp: "わずかに、少し",
        family: "slight / slightness / slightly",
        tips: "图表描述与业绩评估核心副词。常用来修饰动词的上升或下降，如 increase slightly（轻微增加）、drop slightly（轻微下降）。其形容词形式 slight 常修饰 delay 或 change。",
        desc: "The sales rose slightly."
    },
    {
        word: "native",
        pos: "形/名",
        ipa: "/ˈneɪtɪv/",
        cn: "出生地的，本土的，母语的；本地人",
        jp: "出生地の、土着の、母国の；生まれ故郷の人",
        family: "natively / nativity",
        tips: "招聘与跨国沟通高频词。最常考搭配 native speaker（母语使用者）。在招聘广告中常要求 'fluent in English or a native speaker'。也可指某地的植物或产品（native to the region）。",
        desc: "He is a native speaker."
    },
    {
        word: "economic",
        pos: "形",
        ipa: "/ˌiːkəˈnɒmɪk/",
        cn: "经济的，经济学上的",
        jp: "経済の、経済学の",
        family: "economy / economical / economically / economics / economists",
        tips: "商业新闻与宏观分析核心词。注意区分 economic（经济的，如 economic growth 经济增长）与 economical（节约的/经济实惠的，如 an economical car 节油型汽车）。名词 economists 指经济学家。",
        desc: "The country faces economic growth."
    },
    {
        word: "settle",
        pos: "動",
        ipa: "/ˈsetl/",
        cn: "解决（纠纷），结算（账目），定居",
        jp: "（紛争などを）解決する、（勘定を）清算する、定住する",
        family: "settlement / settled / settler",
        tips: "法律法务与财务结算核心动词。高频搭配 settle a dispute（解决纠纷）、settle an account（结清账目）。其名词形式 settlement 意为“和解协议”或“结账”。",
        desc: "They managed to settle it."
    },
    {
        word: "practical",
        pos: "形",
        ipa: "/ˈpræktɪkl/",
        cn: "切合实际的，实用的，有实际经验的",
        jp: "実用的な、現実的な、実用面での",
        family: "practice / practically / practicality",
        tips: "员工培训与产品设计高频形容词。常考搭配 practical experience（实际经验）、practical solution（切实可行的解决方案）。其副词形式 practically 意为“几乎/实际上”。",
        desc: "This is a practical tool."
    },
    {
        word: "scholarship",
        pos: "名",
        ipa: "/ˈskɒləʃɪp/",
        cn: "奖学金；学术研究",
        jp: "奨学金；学問、学識",
        family: "scholar / scholarly",
        tips: "教育资助与企业社会责任场景词。常考搭配 offer a scholarship（提供奖学金）、apply for a scholarship（申请奖学金）。其人称名词 scholar 意为“学者”。",
        desc: "She won a full scholarship."
    },
    {
        word: "import",
        pos: "動/名",
        ipa: "/ˈɪmpɔːt/",
        cn: "进口，输入；进口商品",
        jp: "輸入する；輸入、輸入品",
        family: "imported / importation / importer",
        tips: "全球供应链与贸易高频词。作动词时常考 import goods from...（从……进口货物）。作名词时常考 import duties（进口税）、import restrictions（进口限制）。",
        desc: "We import raw materials."
    },
    {
        word: "atmosphere",
        pos: "名",
        ipa: "/ˈætməsfɪər/",
        cn: "气氛，环境，大气",
        jp: "雰囲気、環境、大気",
        family: "atmospheric / atmospherically",
        tips: "办公环境与餐饮款待高频名词。常考搭配 friendly atmosphere（友好的氛围）、working atmosphere（工作氛围）。在餐厅评论场景中，常赞赏其 cozy atmosphere（舒适的用餐环境）。",
        desc: "The office has a good atmosphere."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "accurate",
        category: "简单",
        stem: "The accounting team must ensure that all financial data in the report is completely ________.",
        options: ["accurate", "slightly", "native", "memo"],
        correct: "accurate",
        explanations: {
            guide: "系动词后的形容词表语。空格前有副词 completely 修饰，作 is 的表语，结合财务数据（financial data）需要精准的语境，选 accurate。",
            family: "accurate (adj.准确的) | slightly (adv.稍微) | native (adj.本土的) | memo (n.备忘录)。",
            details: "completely accurate 意为“完全准确的”，是财务审计和日常报告编写中最基本、最高频的逻辑要求。其他选项词性不符或语义不通。",
            cn: "财务团队必须确保报告中的所有财务数据都是完全准确的。",
            jp: "経理チームは、報告書内のすべての財務データが完全に正確（accurate）であることを確認しなければなりません。"
        }
    },
    {
        id: 2,
        target: "slightly",
        category: "简单",
        stem: "According to the graph, our retail sales increased ________ during the second quarter.",
        options: ["slightly", "settle", "atmosphere", "booked"],
        correct: "slightly",
        explanations: {
            guide: "修饰不及物动词的副词辨析。空格在不及物动词 increased 之后，需要副词来修饰其增长幅度，结合业绩图表场景选 slightly。",
            family: "slightly (adv.轻微地) | settle (v.解决) | atmosphere (n.气氛) | booked (adj.已预订的)。",
            details: "increase slightly 意为“轻微增长”，是托业第一部分图表描述及第二部分商务简报中极为经典的搭配。其他选项无法修饰动词增长。",
            cn: "根据图表显示，我们的零售额在第二季度期间轻微增长。",
            jp: "グラフによると、当社の小売売上高は第2四半期中にわずかに（slightly）増加しました。"
        }
    },
    {
        id: 3,
        target: "scholarship",
        category: "简单",
        stem: "The corporate foundation announced that it will offer a full ________ to top engineering students.",
        options: ["scholarship", "findings", "import", "items"],
        correct: "scholarship",
        explanations: {
            guide: "及物动词的宾语语义辨析。空格前有形容词 full（全额的）修饰，作 offer 的直接宾语，结合企业基金会资助优秀学生（students）的背景，选 scholarship。",
            family: "scholarship (n.奖学金) | findings (n.调查结果) | import (v./n.进口) | items (n.条款/物品)。",
            details: "offer a full scholarship 意为“提供全额奖学金”，属于企业社会责任（CSR）及教育赞助文书中的核心搭配。其他名词不符合对学生的资助语境。",
            cn: "企业基金会宣布，将向优秀的工程专业学生提供全额奖学金。",
            jp: "企業財団は、優秀な工学部の学生に全額奨学金（scholarship）を提供すると発表しました。"
        }
    },
    {
        id: 4,
        target: "atmosphere",
        category: "简单",
        stem: "Management strives to maintain a collaborative and positive working ________ in the new office.",
        options: ["atmosphere", "practical", "economic", "golf"],
        correct: "atmosphere",
        explanations: {
            guide: "名词中心词的语义辨析。空格前面有 working（工作/运行），并由 collaborative and positive（合作且积极的）修饰，结合办公室环境，选 atmosphere。",
            family: "atmosphere (n.氛围) | practical (adj.实用的) | economic (adj.经济的) | golf (n.高尔夫)。",
            details: "working atmosphere 意为“工作氛围”，属于人事管理、企业文化介绍及招聘启事中不可或缺的黄金词汇。其余选项无法构成合理名词短语。",
            cn: "管理层努力在海外新办公室中保持一种合作且积极的工作氛围。",
            jp: "経営陣は、新しいオフィスで協力的かつ前向きな職場環境（atmosphere）を維持するよう努めています。"
        }
    },
    {
        id: 5,
        target: "import",
        category: "简单",
        stem: "Due to local regulations, the logistics firm needs a special permit to ________ electronic components.",
        options: ["import", "settle", "accurate", "office"],
        correct: "import",
        explanations: {
            guide: "动词不定式作目的状语。to 后面需要接动词原形，后接宾语 components（零部件），结合物流公司（logistics firm）的进出口业务背景选 import。",
            family: "import (v.进口) | settle (v.解决) | accurate (adj.准确的) | office (n.办公室)。",
            details: "import components 意为“进口零部件”，属于供应链管理、跨国贸易及海关报关场景的基础动宾搭配。其他选项词性不符或逻辑不通。",
            cn: "由于当地法规的限制，该物流公司需要特殊许可证来进口电子元件。",
            jp: "現地の規制により、その物流会社は電子部品を輸入する（import）ために特別な許可証が必要です。"
        }
    },
    {
        id: 6,
        target: "native",
        category: "简单",
        stem: "The language institute is urgently looking for a ________ English speaker to conduct the training sessions.",
        options: ["native", "slightly", "practical", "morning"],
        correct: "native",
        explanations: {
            guide: "修饰名词的形容词辨析。空格位于不定冠词 a 和名词短语 English speaker 之间作定语，选 native 构成固定商务招聘短语。",
            family: "native (adj.本土的/母语的) | slightly (adv.稍微) | practical (adj.实用的) | morning (n.早晨)。",
            details: "native English speaker 意为“英语母语使用者”，是企培、语言学校及跨国岗位招聘中极常见的固定表达。其他词汇无法修饰 speaker。",
            cn: "该语言学院正紧急寻找一名英语母语使用者来主持培训课程。",
            jp: "その語学学校は、研修セッションを担当する英語のネイティブ（native）スピーカーを至急募集しています。"
        }
    },
    {
        id: 7,
        target: "findings",
        category: "中等",
        stem: "The research team will present their latest market survey ________ at the upcoming regional seminar.",
        options: ["findings", "scholarship", "atmosphere", "summaries"],
        correct: "findings",
        explanations: {
            guide: "复合名词中心语辨析。空格前有 market survey（市场调研），作 present 的宾语，结合研发或市场团队汇报成果的场景，选 findings。",
            family: "findings (n.调查结果) | scholarship (n.奖学金) | atmosphere (n.气氛) | summaries (n.摘要/池中干扰词)。",
            details: "survey findings 意为“调查结果/研究发现”。在商务报告和市场分析场景中，findings 是指通过数据收集得到的最终结论。虽然 summaries（摘要）也常见，但与 survey 搭配不如 findings 规范地指代‘发现/成果’。",
            cn: "研究团队将在即将举行的区域研讨会上展示他们最新的市场调研结果。",
            jp: "研究チームは、近く開催される地域セミナーで最新の市場調査結果（findings）を発表する予定です。"
        }
    },
    {
        id: 8,
        target: "economic",
        category: "中等",
        stem: "Local business leaders are deeply concerned about the current ________ downturn affecting retail businesses.",
        options: ["economic", "accurate", "native", "fiscal"],
        correct: "economic",
        explanations: {
            guide: "形容词定语辨析。空格修饰名词 downturn（衰退/低迷），结合商业领袖（business leaders）关注宏观大环境的语境，选 economic。",
            family: "economic (adj.经济的) | accurate (adj.准确的) | native (adj.本土的) | fiscal (adj.财政的/池中干扰词)。",
            details: "economic downturn 意为“经济衰退/经济低迷”，是金融商贸报道及高级管理层简报中的绝对高频核心术语。fiscal 通常修饰 year 或 policy，不与 downturn 构成此类标准搭配。",
            cn: "当地商业领袖对当前影响零售业的经济衰退感到深切担忧。",
            jp: "地元のビジネスリーダーたちは、小売業に影響を与えている現在の経済（economic）低迷を深く懸念しています。"
        }
    },
    {
        id: 9,
        target: "settle",
        category: "中等",
        stem: "The legal representatives from both firms met yesterday afternoon to ________ the ongoing contractual dispute.",
        options: ["settle", "extend", "qualify", "arises"],
        correct: "settle",
        explanations: {
            guide: "不及物/及物动词的不定式用法。to 后面需接动词原形，后接宾语 dispute（纠纷），结合法务代表（legal representatives）开会谈判的场景，选 settle。",
            family: "settle (v.解决) | extend (v.延长) | qualify (v.使合格) | arises (v.出现)。",
            details: "settle the dispute 意为“解决纠纷”，是商业合同争议、法务仲裁及危机公关场景下的标准权威动宾搭配。其他动作不符合处理纠纷的逻辑。",
            cn: "两家公司的法律代表昨天下午会面，以解决正在进行的合同纠纷。",
            jp: "両社の法的代表者は、進行中の契約上の紛争を解決（settle）するために昨日の午後、会合を行いました。"
        }
    },
    {
        id: 10,
        target: "practical",
        category: "中等",
        stem: "The management workshop focuses on providing ________ tips for handling complex workplace conflicts.",
        options: ["practical", "economic", "findings", "intensive"],
        correct: "practical",
        explanations: {
            guide: "修饰名词的形容词辨析。空格修饰复数名词 tips（技巧/建议），结合管理工作坊（workshop）旨在提供切实有用指导的语境，选 practical。",
            family: "practical (adj.实用的/切实可行的) | economic (adj.经济的) | findings (n.调查结果) | intensive (adj.密集的)。",
            details: "practical tips 意为“实用的技巧”。在职业培训、技能发展及员工指南场景中，常用来指能够立刻付诸实践的建议。intensive（密集的）一般不用于修饰 tips。",
            cn: "该管理工作坊专注于提供处理复杂职场冲突的实用技巧。",
            jp: "そのマネジメントワークショップは、複雑な職場の対立を処理するための実用的な（practical）ヒントを提供することに焦点を当てています。"
        }
    },
    {
        id: 11,
        target: "accurate",
        category: "中等",
        stem: "The general manager double-checked the data to guarantee the absolute ________ of the billing statements.",
        options: ["accuracy", "accurate", "accurately", "patience"],
        correct: "accuracy",
        explanations: {
            guide: "定冠词与形容词修饰下的名词中心词。空格位于 the absolute 之后，需填入名词作 guarantee 的宾语，选用 accuracy。",
            family: "accuracy (n.准确性) | accurate (adj.准确的) | accurately (adv.准确地) | patience (n.耐心)。",
            details: "absolute accuracy 意为“绝对准确性”。常用于财务对账（billing statements）和发票审核，属于托业阅读第五部分典型的高频词性派生辨析题。",
            cn: "总经理仔细核对了数据，以保证账单的绝对准确性。",
            jp: "ゼネラルマネージャーは、請求書の絶対的な正確さ（accuracy）を保証するためにデータを再確認しました。"
        }
    },
    {
        id: 12,
        target: "slightly",
        category: "中等",
        stem: "The logistics manager noted that there might be a ________ delay in shipping due to the storm.",
        options: ["slight", "slightly", "slightness", "constant"],
        correct: "slight",
        explanations: {
            guide: "不定冠词后的形容词定语。空格位于 a 和名词 delay（延迟）之间，需填入形容词形式，选 slight。",
            family: "slight (adj.轻微的) | slightly (adv.稍微地) | slightness (n.微小) | constant (adj.恒定的)。",
            details: "a slight delay 意为“轻微的延迟”，是客服邮件、物流通知及航班延误通知中的绝对高频固定表达。副词形式不能修饰名词 delay。",
            cn: "物流经理指出，由于暴风雨的原因，出货可能会有轻微的延迟。",
            jp: "物流マネージャーは、嵐の影響で配送にわずかな（slight）遅れが生じる可能性があると指摘しました。"
        }
    },
    {
        id: 13,
        target: "settle",
        category: "困难",
        stem: "After months of intense arbitration, both electronics companies finally reached a mutually beneficial ________.",
        options: ["settlement", "settle", "settled", "arbitration"],
        correct: "settlement",
        explanations: {
            guide: "及物动词宾语的名词派生选择。空格在形容词短语 mutually beneficial（互利的）之后，作 reached 的宾语，需填入名词，选用 settlement。",
            family: "settlement (n.和解/结算) | settle (v.解决) | settled (adj.确定的) | arbitration (n.仲裁/池中干扰词)。",
            details: "reach a settlement 意为“达成和解/协议”。这是高阶商务谈判、侵权诉讼及仲裁（arbitration）结案时的核心高端法务搭配。arbitration 虽为名词，但已被句首的 After months of intense arbitration 使用，此处不能重复构成 reached a beneficial arbitration 的逻辑。",
            cn: "经过数月激烈的仲裁，两家电子公司最终达成了一个互利互惠的和解协议。",
            jp: "数ヶ月にわたる激しい仲裁の末、両方の電子機器会社はついに互いに有益な和解（settlement）に達しました。"
        }
    },
    {
        id: 14,
        target: "economic",
        category: "困难",
        stem: "Prominent ________ from the advisory council predict that inflation rates will stabilize by next fiscal year.",
        options: ["economists", "economic", "economics", "lucrative"],
        correct: "economists",
        explanations: {
            guide: "主语位置的人称名词及单复数辨析。空格前有形容词 prominent（杰出的/著名的），后有谓语动词 predict（原形，指示主语为复数），需填入复数人称名词，选 economists。",
            family: "economists (n-pl.经济学家) | economic (adj.经济的) | economics (n.经济学) | lucrative (adj.获利的)。",
            details: "prominent economists 意为“著名的经济学家”。作主语发出 predict（预测）这一动作。此处 economics（经济学学科）和 economic（形容词）均不具备发出预测动作的能力。",
            cn: "咨询委员会的著名经济学家预测，通货膨胀率将在下个财政年度前趋于稳定。",
            jp: "諮問委員会の著名な経済学者（economists）たちは、インフレ率が次の会計年度までに安定すると予測しています。"
        }
    },
    {
        id: 15,
        target: "practical",
        category: "困难",
        stem: "While the proposed marketing campaign looks creative on paper, the board questioned its long-term ________.",
        options: ["practicality", "practical", "practically", "complexity"],
        correct: "practicality",
        explanations: {
            guide: "物主代词后的抽象名词派生。空格前有形容词短语 long-term 和形容词性物主代词 its，作 questioned 的宾语，需填入名词，选用 practicality。",
            family: "practicality (n.实用性/可行性) | practical (adj.实用的) | practically (adv.几乎) | complexity (n.复杂性)。",
            details: "question the practicality 意为“质疑……的可行性/实用性”，常用于项目立项、方案评审等高管层决策（the board）语境中。complexity（复杂性）虽为名词，但与前文“纸面上看起来很有创意”的对比转折关系不如“实用性”紧密。",
            cn: "虽然拟议的营销活动在纸面上看起来很有创意，但董事会质疑其长期的实用性。",
            jp: "提案されたマーケティングキャンペーンは机上では創造的に見えますが、取締役会はその長期的な実用性（practicality）に疑問を呈しました。"
        }
    },
    {
        id: 16,
        target: "scholarship",
        category: "困难",
        stem: "The academic journal only publishes articles that meet the highest ________ standards of research.",
        options: ["scholarly", "scholarship", "scholar", "institutional"],
        correct: "scholarly",
        explanations: {
            guide: "修饰名词的形容词派生辨析。空格修饰后面的名词 standards（标准），需填入形容词，选用 scholarly（学术的）。",
            family: "scholarly (adj.学术的/学问的) | scholarship (n.奖学金) | scholar (n.学者) | institutional (adj.制度的)。",
            details: "scholarly standards 意为“学术标准”。此词专门用于修饰学术期刊（academic journal）、论文发表、专家评审等高难度、强学术性的商务/教育文摘场景。其余选项在此位置不合语法。 ",
            cn: "该学术期刊只发表符合最高研究学术标准的文章。",
            jp: "その学術誌は、最高レベルの研究上の学術的（scholarly）基準を満たす論文のみを掲載しています。"
        }
    },
    {
        id: 17,
        target: "import",
        category: "困难",
        stem: "The customs clearance department issued a strict directive regarding the ________ of certain biomedical goods.",
        options: ["importation", "import", "imported", "clearance"],
        correct: "importation",
        explanations: {
            guide: "介词后的名词派生辨析。空格位于 regarding（关于）之后，the 之后，作介词宾语，需填入表示行为过程的抽象名词，选 importation 最佳。",
            family: "importation (n.进口行为/引入) | import (v./n.进口商品) | imported (adj.进口的) | clearance (n.清关)。",
            details: "the importation of goods 意为“货物的进口行为/过程”。在海关（customs clearance）及法律合规条文中，常常使用更具法律、程序意味的词汇 importation 替代普通的 import。clearance 为重复冗余词汇。",
            cn: "海关清关部门发布了一份关于某些生物医药商品进口的严格指令。",
            jp: "通関部門は、特定のバイomedical（生物医学）製品の輸入（importation）に関する厳格な通達を発行しました。"
        }
    },
    {
        id: 18,
        target: "atmosphere",
        category: "困难",
        stem: "Due to severe ________ disturbances, the satellite communications network experienced minor technical glitches.",
        options: ["atmospheric", "atmosphere", "atmospherically", "hazardous"],
        correct: "atmospheric",
        explanations: {
            guide: "修饰名词的形容词派生辨析。空格修饰 disturbances（干扰/扰动），需要填入形容词充当定语，选用 atmospheric 构成特定技术术语。",
            family: "atmospheric (adj.大气的) | atmosphere (n.大气/气氛) | atmospherically (adv.大气地) | hazardous (adj.危险的)。",
            details: "atmospheric disturbances 意为“大气干扰/气流扰动”。用来解释卫星通信网络（satellite communications network）产生突发技术故障（glitches）的客观原因。属于高难度科技与后勤环境管理阅读场景。",
            cn: "由于严重的大气干扰，卫星通信网络经历了一些轻微的技术故障。",
            jp: "深刻な大気（atmospheric）汚染・障害により、衛星通信ネットワークに軽微な技術的障害（不具合）が発生しました。"
        }
    }
];