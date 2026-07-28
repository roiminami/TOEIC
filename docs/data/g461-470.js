// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data191-200.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "historic",
        pos: "形",
        ipa: "/hɪˈstɔːrɪk/",
        cn: "具有历史意义的，历史性的",
        jp: "歴史的な、歴史上重要な",
        family: "history / historical / historically",
        tips: "注意区分 historic（具有重大历史意义的）与 historical（历史上的/与历史相关的）。",
        desc: "This is a historic building."
    },
    {
        word: "negotiate",
        pos: "動",
        ipa: "/nɪˈɡoʊʃieɪt/",
        cn: "谈判，协商",
        jp: "交渉する、取り決める",
        family: "negotiation / negotiator / negotiable",
        tips: "商务合同高频：negotiate a contract（谈判合同），negotiate with suppliers（与供应商谈判）。",
        desc: "They negotiate the contract terms."
    },
    {
        word: "qualified",
        pos: "形",
        ipa: "/ˈkwɑːlɪfaɪd/",
        cn: "有资格的，合格的",
        jp: "資格のある、適任の",
        family: "qualify / qualification / qualifying",
        tips: "招聘与岗位核心词：be qualified for the position（胜任该职位）。",
        desc: "She is a qualified applicant."
    },
    {
        word: "receptionist",
        pos: "名",
        ipa: "/rɪˈsepʃənɪst/",
        cn: "接待员，前台",
        jp: "受付係、フロント係",
        family: "receive / reception / receptive",
        tips: "Part 1/3 办公室与酒店高频：front desk receptionist（前台接待员）。",
        desc: "The receptionist greeted the guest."
    },
    {
        word: "pickup",
        pos: "名",
        ipa: "/ˈpɪkʌp/",
        cn: "取货，接人；皮卡车",
        jp: "集荷、受取り；送迎",
        family: "pick / pick up",
        tips: "物流与服务高频：curbside pickup（路边取货），pickup location（接人/取货地点）。",
        desc: "Your order is ready for pickup."
    },
    {
        word: "evaluate",
        pos: "動",
        ipa: "/ɪˈvæljueɪt/",
        cn: "评估，评价",
        jp: "評価する、査定する",
        family: "evaluation / evaluator / evaluative",
        tips: "绩效与投资高频：evaluate performance（评估绩效），evaluate a proposal（评估方案）。",
        desc: "We evaluate the final report."
    },
    {
        word: "remodel",
        pos: "動",
        ipa: "/ˌriːˈmɑːdl/",
        cn: "改造，翻新，重新塑造",
        jp: "改装する、リフォームする",
        family: "remodeling / remodeled",
        tips: "建筑与店铺改造高频：remodel the kitchen/office（改造厨房/办公室）。",
        desc: "They plan to remodel the store."
    },
    {
        word: "patron",
        pos: "名",
        ipa: "/ˈpeɪtrən/",
        cn: "顾客，赞助人",
        jp: "常連客、パトロン、支援者",
        family: "patronage / patronize",
        tips: "餐饮与艺术场景高频：patrons of the restaurant（餐厅的顾客），loyal patron（老顾客）。",
        desc: "The patron entered the cafe."
    },
    {
        word: "generate",
        pos: "動",
        ipa: "/ˈdʒenəreɪt/",
        cn: "产生，引起，发电",
        jp: "生み出す、発生させる",
        family: "generation / generator / generative",
        tips: "财务与电力高频：generate revenue/income（产生收入），generate power（发电）。",
        desc: "Ads generate new leads."
    },
    {
        word: "overnight",
        pos: "副/形",
        ipa: "/ˌoʊvərˈnaɪt/",
        cn: "过夜地，通宵地；过夜的",
        jp: "一晩中、一泊の；急激に",
        family: "night / nightfall",
        tips: "物流与出差高频：overnight shipping/delivery（隔夜送达/次日达），stay overnight（过夜）。",
        desc: "They stayed overnight at hotel."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "receptionist",
        category: "简单",
        stem: "The front desk ________ greeted all visitors and handed them temporary visitor badges.",
        options: ["receptionist", "reception", "negotiate", "evaluate"],
        correct: "receptionist",
        explanations: {
            guide: "职场人物名词考点。The front desk ________ 结合句中的问候访客（greeted visitors）动作，选择表示人的职业名词 receptionist（接待员）。",
            family: "receptionist (n.接待员) | reception (n.接待/接待处) | negotiate (v.谈判) | evaluate (v.评估)。",
            details: "front desk receptionist 指前台接待员。reception 是抽象名词（接待处），不能作句中表示人物的主语。",
            cn: "前台接待员向所有访客致意，并向他们发放了临时访客证。",
            jp: "フロントの受付係（receptionist）はすべての来客にあいさつし、一時的な来客用バッジを手渡しました。"
        }
    },
    {
        id: 2,
        target: "pickup",
        category: "简单",
        stem: "Customers can choose standard home delivery or free store ________ at online checkout.",
        options: ["pickup", "pick", "overnight", "patron"],
        correct: "pickup",
        explanations: {
            guide: "电商与物流名词。free store ________ 属于零售高频短语，表达“到店自提/取货”，选 pickup。",
            family: "pickup (n.取货/自提) | pick (v.挑选) | overnight (adj./adv.过夜的) | patron (n.顾客)。",
            details: "free store pickup 意为免费到店自提。pick 是动词，不能紧跟在形容词 free 后面作名词中心语。",
            cn: "顾客在在线结账时可以选择标准送货上门或免费到店自提。",
            jp: "お客様はオンライン決済時に、標準の自宅配送か無料の店舗受取り（pickup）を選択できます。"
        }
    },
    {
        id: 3,
        target: "negotiate",
        category: "简单",
        stem: "Both companies met yesterday to ________ the final terms of the supply agreement.",
        options: ["negotiate", "negotiation", "remodel", "generate"],
        correct: "negotiate",
        explanations: {
            guide: "动词不定式考点。met yesterday to 后面接动词原形，表达“谈判/协商”合同条款，选 negotiate。",
            family: "negotiate (v.谈判) | negotiation (n.谈判) | remodel (v.改造) | generate (v.产生)。",
            details: "to negotiate the final terms 意为谈判最终条款。negotiation 是名词，不能跟在不定式符号 to 后面。",
            cn: "两家公司昨天会面，以谈判供应协议的最终条款。",
            jp: "両社は昨日、供給合意の最終条件を交渉する（negotiate）ために会合を開きました。"
        }
    },
    {
        id: 4,
        target: "qualified",
        category: "简单",
        stem: "The hiring manager is looking for a highly ________ candidate for the managerial position.",
        options: ["qualified", "qualify", "historic", "pickup"],
        correct: "qualified",
        explanations: {
            guide: "修饰名词的形容词。highly ________ candidate 结构中，副词 highly 后面接形容词作定语，表达“合格的/有资格的”，选 qualified。",
            family: "qualified (adj.合格的/有资格的) | qualify (v.取得资格) | historic (adj.历史性的) | pickup (n.取货)。",
            details: "a highly qualified candidate 意为高素质/完全合格的候选人。qualify 是动词，不能作名词 candidate 的前置定语。",
            cn: "招聘经理正在为管理岗位寻找一位非常合格的候选人。",
            jp: "採用マネージャーは、管理職のポストに適した非常に優秀な（qualified）候補者を探しています。"
        }
    },
    {
        id: 5,
        target: "remodel",
        category: "简单",
        stem: "The restaurant owner decided to ________ the dining area to attract more local customers.",
        options: ["remodel", "remodeling", "generate", "evaluate"],
        correct: "remodel",
        explanations: {
            guide: "动词不定式考点。decided to 后面接动词原形，表达“装修改造”用餐区，选 remodel。",
            family: "remodel (v.改造/装修) | remodeling (n.翻新工程) | generate (v.产生) | evaluate (v.评估)。",
            details: "decided to remodel... 意为决定改造……。remodeling 是动名词或分词，不能直接跟随在不定式符号 to 后面。",
            cn: "餐厅老板决定改造用餐区，以吸引更多当地顾客。",
            jp: "レストランのオーナーは、より多くの地元の顧客を惹きつけるために食堂エリアを改造する（remodel）ことに決めました。"
        }
    },
    {
        id: 6,
        target: "patron",
        category: "简单",
        stem: "A loyal ________ of the library donated a generous amount of money for purchasing new books.",
        options: ["patron", "patronage", "receptionist", "pickup"],
        correct: "patron",
        explanations: {
            guide: "赞助者/顾客名词考点。A loyal ________ 结构中需要填写可数名词单数，表达图书馆的“老赞助人/资深读者”，选 patron。",
            family: "patron (n.赞助人/顾客) | patronage (n.赞助/光顾) | receptionist (n.接待员) | pickup (n.取货)。",
            details: "loyal patron 意为忠实的赞助人/读者。patronage 是不可数抽象名词（赞助行为），不能用冠词 A 修饰指代具体的人。",
            cn: "图书馆的一位忠实赞助人捐赠了一笔巨款用于购买新书。",
            jp: "図書館の忠实な支援者（patron）が、新刊本を購入するために多額の資金を寄付しました。"
        }
    },
    {
        id: 7,
        target: "evaluate",
        category: "中等",
        stem: "The executive committee will ________ the feasibility of the proposed expansion next week.",
        options: ["evaluate", "evaluation", "negotiate", "remodel"],
        correct: "evaluate",
        explanations: {
            guide: "将来时态动词原形。will 后面接动词原形，表达“评估”扩建方案的可行性，选 evaluate。",
            family: "evaluate (v.评估) | evaluation (n.评估) | negotiate (v.谈判) | remodel (v.改造)。",
            details: "will evaluate the feasibility 意为将评估可行性。evaluation 是名词，不能跟在情态动词 will 后面做核心谓语。",
            cn: "执行委员会将于下周评估拟议扩建方案的可行性。",
            jp: "執行委員会は来週、提案された拡張案の実現可能性を評価する（evaluate）予定です。"
        }
    },
    {
        id: 8,
        target: "generate",
        category: "中等",
        stem: "The new digital marketing strategy is expected to ________ substantial revenue for the company.",
        options: ["generate", "generator", "historic", "overnight"],
        correct: "generate",
        explanations: {
            guide: "动词不定式与商务搭配。is expected to 后面接动词原形，结合 revenue（收入），表达“产生”收入，选 generate。",
            family: "generate (v.产生) | generator (n.发电机) | historic (adj.历史性的) | overnight (adj./adv.过夜的)。",
            details: "generate revenue 属于商务英语核心动宾搭配，意为产生收入。generator 是名词（发电机），不能构成不定式。",
            cn: "新的数字营销策略预计将为公司带来丰厚的收入。",
            jp: "新しいデジタルマーケティング戦略は、会社に大幅な収益を生み出す（generate）と期待されています。"
        }
    },
    {
        id: 9,
        target: "overnight",
        category: "中等",
        stem: "For urgent shipments, the logistics team offers an ________ express delivery service.",
        options: ["overnight", "pickup", "qualified", "patron"],
        correct: "overnight",
        explanations: {
            guide: "物流服务形容词考点。an ________ express delivery 属于高频物流短语，表达“隔夜/次日达”快递服务，选 overnight。",
            family: "overnight (adj./adv.过夜地/隔夜的) | pickup (n.自提) | qualified (adj.合格的) | patron (n.顾客)。",
            details: "an overnight express delivery service 指隔夜/次日达快递服务。pickup（自提）、patron（顾客）均不能修饰 express delivery。",
            cn: "对于紧急运输，物流团队提供隔夜快递服务。",
            jp: "急ぎの荷物のために、物流チームは翌日配達（overnight）速達サービスを提供しています。"
        }
    },
    {
        id: 10,
        target: "historic",
        category: "中等",
        stem: "The city council voted to preserve the ________ building located in the central plaza.",
        options: ["historic", "history", "negotiate", "evaluate"],
        correct: "historic",
        explanations: {
            guide: "形容词作前置定语。preserve the ________ building 结构中，填写形容词修饰建筑，表达“具有历史意义的”，选 historic。",
            family: "historic (adj.具有历史意义的) | history (n.历史) | negotiate (v.谈判) | evaluate (v.评估)。",
            details: "historic building 意为历史名胜建筑/具重大历史意义的建筑。history 是名词，不能在此直接充当修饰建筑的定语。",
            cn: "市议会投票决定保护位于中央广场的这座历史性建筑。",
            jp: "市議会は中央広場にある歴史的（historic）建造物を保存することに投票しました。"
        }
    },
    {
        id: 11,
        target: "negotiate",
        category: "中等",
        stem: "Contract ________ took several weeks due to disagreements over pricing structures.",
        options: ["negotiations", "negotiate", "evaluations", "receptionists"],
        correct: "negotiations",
        explanations: {
            guide: "商务复合名词主语考点。Contract ________ 表达合同“谈判”，结合谓语 took（花费了几周），用复数名词 negotiations。",
            family: "negotiations (n.谈判复数) | negotiate (v.谈判) | evaluations (n.评估复数) | receptionists (n.接待员复数)。",
            details: "Contract negotiations 意为合同谈判。negotiate 是动词原形，不能在主语位置与 Contract 组成复合名词。",
            cn: "由于在价格结构上存在分歧，合同谈判持续了数周。",
            jp: "価格体系をめぐる不一致のため、契約交渉（negotiations）には数週間かかりました。"
        }
    },
    {
        id: 12,
        target: "evaluate",
        category: "中等",
        stem: "Department managers complete annual performance ________ for all team members every December.",
        options: ["evaluations", "evaluate", "remodels", "patrons"],
        correct: "evaluations",
        explanations: {
            guide: "HR绩效评估名词。annual performance ________ 属于人力资源固定短语，意为“年度绩效评估”，用复数 evaluations。",
            family: "evaluations (n.评估/评价复数) | evaluate (v.评估) | remodels (v./n.改造) | patrons (n.顾客)。",
            details: "performance evaluations 意为绩效考核/评估。evaluate 是动词，不能作动词 complete 的宾语。",
            cn: "部门经理每年 12 月都会为所有团队成员完成年度绩效评估。",
            jp: "部門マネージャーは毎年12月に、すべてのチームメンバーの年次業績評価（evaluations）を完了します。"
        }
    },
    {
        id: 13,
        target: "qualified",
        category: "困难",
        stem: "To apply for the position, applicants must meet all minimum educational ________.",
        options: ["qualifications", "qualified", "historic", "negotiations"],
        correct: "qualifications",
        explanations: {
            guide: "派生名词考点。meet all minimum educational ________ 结构中，在形容词后面接复数名词，表达满足所有“学历/资格要求”，选 qualifications。",
            family: "qualifications (n.资格/学历证书复数) | qualified (adj.合格的) | historic (adj.历史性的) | negotiations (n.谈判)。",
            details: "educational qualifications 意为学历资格要求。qualified 是形容词，不能直接放在形容词 educational 后面作宾语中心语。",
            cn: "要申请该职位，申请人必须符合所有最低学历资格要求。",
            jp: "その職種に応募するには、応募者はすべての最低教育資格（qualifications）を満たしていなければなりません。"
        }
    },
    {
        id: 14,
        target: "patron",
        category: "困难",
        stem: "The museum expressed deep gratitude for the continued ________ of local business leaders.",
        options: ["patronage", "patron", "receptionist", "pickup"],
        correct: "patronage",
        explanations: {
            guide: "派生高阶抽象名词。for the continued ________ 表达对当地商业领袖持续“赞助/光顾”的谢意，选不可数名词 patronage。",
            family: "patronage (n.赞助/光顾/支持) | patron (n.赞助人) | receptionist (n.接待员) | pickup (n.取货)。",
            details: "continued patronage 意为长期的赞助/支持。patron 指赞助人个人，在前面有 continued 修饰表达行为支持时，选用抽象名词 patronage。",
            cn: "博物馆对当地商业领袖的持续赞助表示深切感谢。",
            jp: "美術館は地元のビジネスリーダーたちの継続的な支援（patronage）に深い感謝を表明しました。"
        }
    },
    {
        id: 15,
        target: "remodel",
        category: "困难",
        stem: "During the extensive office ________ project, staff members worked remotely from home.",
        options: ["remodeling", "remodel", "generating", "evaluating"],
        correct: "remodeling",
        explanations: {
            guide: "动名词/分词作前置定语。office ________ project 属于建筑工程常见修饰，表达办公室“翻新/改造”项目，选 remodeling。",
            family: "remodeling (n./v-ing改造/装修改造) | remodel (v.改造) | generating (v-ing产生) | evaluating (v-ing评估)。",
            details: "office remodeling project 意为办公室改造工程。remodel 是动词原形，不能作名词 project 的前置定语。",
            cn: "在大型办公室改造工程期间，员工们居家远程办公。",
            jp: "大規模なオフィス改修（remodeling）プロジェクトの間、スタッフは自宅からリモートで勤務しました。"
        }
    },
    {
        id: 16,
        target: "historic",
        category: "困难",
        stem: "It is important to distinguish between ________ events of great significance and ordinary historical records.",
        options: ["historic", "historical", "qualified", "negotiable"],
        correct: "historic",
        explanations: {
            guide: "形近易混考点（historic vs historical）。________ events of great significance 表达“具有重大历史意义的事件”，专选 historic。",
            family: "historic (adj.具有重大历史意义的) | historical (adj.历史上的/有关历史的) | qualified (adj.合格的) | negotiable (adj.可谈判的)。",
            details: "historic 强调事件本身极其重要、影响深远（historic event）；而 historical 仅强调“存在于历史中/与历史事实相关（historical record）”。",
            cn: "区分具有重大历史意义的事件与普通的历史记载是非常重要的。",
            jp: "重大な意味を持つ歴史的（historic）出来事と通常の歴史的記録を区別することが重要です。"
        }
    },
    {
        id: 17,
        target: "generate",
        category: "困难",
        stem: "Backup power ________ were installed in the facility to prevent data loss during emergency outages.",
        options: ["generators", "generate", "receptionists", "evaluators"],
        correct: "generators",
        explanations: {
            guide: "派生设备名词考点。Backup power ________ 意为“备用发电机”，选名词复数 generators。",
            family: "generators (n.发电机复数) | generate (v.发电/产生) | receptionists (n.接待员) | evaluators (n.评估员)。",
            details: "power generators 指发电机设备。generate 是动词，不能作主语名词；receptionists（接待员）、evaluators（评估员）均指人类，无法提供备用电力。",
            cn: "设施内安装了备用发电机，以防止紧急停电期间数据丢失。",
            jp: "緊急停電時のデータ損失を防ぐため、施設にはバックアップ発電機（generators）が設置されました。"
        }
    },
    {
        id: 18,
        target: "negotiate",
        category: "困难",
        stem: "The purchasing department indicated that the vendor's wholesale prices are open to ________.",
        options: ["negotiation", "negotiate", "qualification", "evaluation"],
        correct: "negotiation",
        explanations: {
            guide: "介词后的名词与固定表达。be open to ________ 属于商务高频短语，表达“可协商/可谈判的”，选名词 negotiation。",
            family: "negotiation (n.谈判/协商) | negotiate (v.谈判) | qualification (n.资格) | evaluation (n.评估)。",
            details: "open to negotiation 意为可以协商谈判。negotiate 是动词，不能直接紧跟在介词 to 后面作宾语。",
            cn: "采购部指出，供应商的批发价格是可以协商的。",
            jp: "購買部門は、業者の卸売価格が交渉（negotiation）の余地があることを示しました。"
        }
    }
];