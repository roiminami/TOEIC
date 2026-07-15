// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag311-320.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "donation",
        pos: "名",
        ipa: "/dəʊˈneɪʃn/",
        cn: "捐赠，捐款",
        jp: "寄付、寄付金、寄贈物",
        family: "donate / donor / donative",
        tips: "企业社会责任（CSR）、慈善筹款与社区活动高频名词。常考搭配 make a donation（进行捐赠）、charitable donation（慈善捐款）。在阅读中经常与 contribution 或 gift 相互进行同义替换。",
        desc: "The charity accepted the donation."
    },
    {
        word: "anniversary",
        pos: "名",
        ipa: "/ˌænɪˈvɜːrsəri/",
        cn: "周年纪念，周年庆",
        jp: "記念日、〜周年記念",
        family: "anniversaries",
        tips: "公司行政与社交公关高频名词。常考搭配 corporate anniversary（公司周年庆）、celebrate the anniversary（庆祝周年纪念）。听力场景中常伴随周年促销（anniversary sale）或庆祝晚宴（gala dinner）。",
        desc: "We celebrated our anniversary."
    },
    {
        word: "clerk",
        pos: "名",
        ipa: "/klɜːrk/",
        cn: "办事员，店员，接待员",
        jp: "事務員、店員、フロント係",
        family: "clerking / clerical",
        tips: "日常办公、前台接待与零售服务核心名词。常考搭配 desk clerk（前台接待员）、filing clerk（档案管理员）。在语法中，其形容词派生词 clerical 极常用于 clerical error（笔误/排印错误）。",
        desc: "The desk clerk helped us."
    },
    {
        word: "aware",
        pos: "形",
        ipa: "/əˈwer/",
        cn: "意识到的，知道的，明白的",
        jp: "意識している、気づいている",
        family: "awareness / unaware / unawareness",
        tips: "员工合规、市场分析与危机控制高频形容词。极其常考的固定搭配为 be aware of...（意识到……，注意介词用 of），其名词形式 awareness（意识）也是完形填空的高频考点。",
        desc: "She is aware of the change."
    },
    {
        word: "progress",
        pos: "名/動",
        ipa: "/ˈpɑːɡres/",
        cn: "进步，进展，前进；进行，进展",
        jp: "進歩、進捗；進む、進捗する",
        family: "progressive / progressively / progression",
        tips: "项目管理与工作汇报绝对核心词。作不可数名词时，极高频搭配 make progress（取得进展）、monitor progress（监控进度）、in progress（正在进行中）。",
        desc: "The project is making progress."
    },
    {
        word: "overall",
        pos: "形/副",
        ipa: "/ˌəʊvərˈɔːl/",
        cn: "全部的，整体的；总体上，总共",
        jp: "全体の、総合的な；全体的に、概して",
        family: "overalls",
        tips: "财务分析、业绩评估与项目总结核心词。作形容词时常修饰 performance（整体表现）或 budget（总预算）；作副词时常置于句首或句尾，表示“总的来说”，可与 in general 互换。",
        desc: "The overall cost is low."
    },
    {
        word: "delighted",
        pos: "形",
        ipa: "/dɪˈlaɪtɪd/",
        cn: "高兴的，欣喜的，愉快的",
        jp: "喜んでいる、嬉しく思う",
        family: "delight / delightful / delightfully",
        tips: "商务社交、公关信函与客户服务常用形容词。高频句式为 be delighted to do something（很高兴做某事），在商务书信中常用于表达乐于合作的态度，相当于 be pleased to do 或 be glad to do。",
        desc: "I am delighted to meet you."
    },
    {
        word: "emphasize",
        pos: "動",
        ipa: "/ˈemfəsaɪz/",
        cn: "强调，着重，突出",
        jp: "強調する、重視する",
        family: "emphasis / emphasized / emphasizing",
        tips: "高管演讲、员工培训与战略部署核心动词。在阅读中经常与 stress 或 highlight 相互同义替换。其名词形式 emphasis 极常用于搭配 place emphasis on...（强调……）。",
        desc: "We must emphasize safety."
    },
    {
        word: "vote",
        pos: "動/名",
        ipa: "/vəʊt/",
        cn: "投票，表决；选票，投票权",
        jp: "投票する、決議する；投票、選票",
        family: "voter / voting / votes",
        tips: "董事会决策与政策推行高频词。常考搭配 vote on the proposal（对提案进行表决，注意介词用 on）、cast a vote（投票）。在听力 Part 3 & 4 中，常在表决预算或人事变动时出现。",
        desc: "Please vote today."
    },
    {
        word: "worth",
        pos: "形/名",
        ipa: "/wɜːrθ/",
        cn: "值得……的；价值，财产",
        jp: "価値がある、〜に値する；価値、財産",
        family: "worthy / worthwhile / worthiness",
        tips: "成本控制、评估分析与投资理财核心词。必考语法句式为 be worth doing something（值得做某事，注意后接动名词）。在形容词辨析中，注意其派生形容词 worthwhile（值得花时间/精力的）常作定语。",
        desc: "This product is worth buying."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "donation",
        category: "简单",
        stem: "The charitable organization received a generous ________ from a prominent local entrepreneur yesterday.",
        options: ["donation", "clerk", "progress", "office"],
        correct: "donation",
        explanations: {
            guide: "及物动词宾语名词中心语辨析。空格前面有形容词 generous（慷慨的），后面有来自 local entrepreneur（本地企业家）的背景，需填入名词作 received 的宾语，选 donation。",
            family: "donation (n.捐赠/捐款) | clerk (n.办事员) | progress (n./v.进展) | office (n.办公室)。",
            details: "receive a donation 意为“收到捐款/捐赠”，完全契合慈善组织（charitable organization）的运营语境。其余选项词义完全不匹配。",
            cn: "该慈善组织昨天收到了当地一位知名企业家的一笔慷慨捐款。",
            jp: "その慈善団体は昨日、地元の著名な起業家から寛大な寄付（donation）を受け取りました。"
        }
    },
    {
        id: 2,
        target: "anniversary",
        category: "简单",
        stem: "The software firm hosted a grand gala dinner to celebrate its tenth ________ yesterday evening.",
        options: ["anniversary", "overall", "delighted", "weekend"],
        correct: "anniversary",
        explanations: {
            guide: "物主代词和序数词修饰下的名词语义。空格前面有 its tenth（它的第十个），后接 celebrate（庆祝）的动作对象，需填入一个表示庆祝日期的名词，选 anniversary。",
            family: "anniversary (n.周年纪念) | overall (adj.整体的) | delighted (adj.高兴的) | weekend (n.周末)。",
            details: "celebrate its tenth anniversary 意为“庆祝其十周年纪念”，是企业公关、宴会庆典（gala dinner）中最典型的考点。其他干扰项无法与庆祝动作和序数词合理搭配。",
            cn: "这家软件公司昨晚举行了盛大的庆祝晚宴，以庆祝其成立十周年纪念。",
            jp: "そのソフトウェア会社は昨夜、創立10周年記念（anniversary）を祝うために盛大なガラディナーを開催しました。"
        }
    },
    {
        id: 3,
        target: "clerk",
        category: "简单",
        stem: "The front desk ________ will assist you with checking in and obtaining your secure room key.",
        options: ["clerk", "emphasize", "vote", "manager"],
        correct: "clerk",
        explanations: {
            guide: "特定职位名词辨析。空格前有修饰词 front desk（前台），作为句子主语，且后接助动词 will assist，应填入表示职位的人称名词，选 clerk。",
            family: "clerk (n.办事员/接待员) | emphasize (v.强调) | vote (v./n.投票) | manager (n.经理)。",
            details: "front desk clerk 意为“前台接待员”，是酒店服务或行政前台的标准职位。虽然 manager（经理）也可以，但在托业听力和阅读语境中，front desk clerk 为极固定的配套接待职位。",
            cn: "前台接待员将协助您办理入住并获取您的安全房间钥匙。",
            jp: "フロント係（clerk）が、チェックイン手続きと安全なルームキーの受け取りをお手伝いいたします。"
        }
    },
    {
        id: 4,
        target: "aware",
        category: "简单",
        stem: "All administrative staff members should be ________ of the new database security guidelines.",
        options: ["aware", "worth", "donation", "closed"],
        correct: "aware",
        explanations: {
            guide: "形容词表语搭配。空格前有情态动词短语 should be，后接介词短语 of...，考查固定表语搭配 be aware of...（意识到/明白……）。",
            family: "aware (adj.意识到的) | worth (adj.值得的) | donation (n.捐赠) | closed (adj.关闭的)。",
            details: "be aware of the guidelines 意为“知晓/明白规章指南”，属于企业合规及日常安全管理中的标准句式。其他选项中，worth 通常不接 of，其余选项词性不符。",
            cn: "所有行政员工都应该知晓新的数据库安全指南。",
            jp: "すべての管理スタッフは、新しいデータベースセキュリティガイドラインを認識（aware）しておく必要があります。"
        }
    },
    {
        id: 5,
        target: "progress",
        category: "简单",
        stem: "The project supervisor is very satisfied with the ________ we have made so far.",
        options: ["progress", "anniversary", "delighted", "morning"],
        correct: "progress",
        explanations: {
            guide: "及物动词宾语名词中心语。空格前面有定冠词 the，后接定语从句 we have made so far，结合 make... 这一动作搭配，选用 progress。",
            family: "progress (n.进展) | anniversary (n.周年纪念) | delighted (adj.高兴的) | morning (n.早上)。",
            details: "make progress 意为“取得进展”。we have made so far 意为“我们迄今为止取得的（进展）”，是项目进度（progress）评估的黄金高频句式。其他选项无法与 make 构成合理语义链。",
            cn: "项目主管对我们迄今为止取得的进展非常满意。",
            jp: "プロジェクトスーパーバイザーは、私たちがこれまでに遂げた進捗（progress）に非常に満足しています。"
        }
    },
    {
        id: 6,
        target: "overall",
        category: "简单",
        stem: "The ________ cost of the office renovation project was much lower than initially estimated.",
        options: ["overall", "aware", "clerk", "proposed"],
        correct: "overall",
        explanations: {
            guide: "修饰名词的形容词。空格位于定冠词 The 和名词 cost（成本）之间，作定语，需填入形容词，选 overall。",
            family: "overall (adj.整体的/全部的) | aware (adj.意识到的) | clerk (n.办事员) | proposed (adj.被提议的)。",
            details: "the overall cost 意为“全部费用/整体成本”。常在预算对比（than initially estimated）的财务或工程报告中出现。其余选项无法合理修饰成本。",
            cn: "办公室翻修项目的整体成本比最初估计的要低得多。",
            jp: "オフィス改装プロジェクトの全体的な（overall）費用は、当初の見積もりよりもはるかに低く抑えられました。"
        }
    },
    {
        id: 7,
        target: "delighted",
        category: "中等",
        stem: "The board of directors was ________ to announce the successful acquisition of the biomedical subsidiary.",
        options: ["delighted", "emphasize", "donation", "voluntary"],
        correct: "delighted",
        explanations: {
            guide: "系动词后的形容词表语。空格前有 was，后接 to 引导的不定式，根据 announce acquisition（宣布收购）的积极正面语境，选形容词 delighted。",
            family: "delighted (adj.高兴的) | emphasize (v.强调) | donation (n.捐赠) | voluntary (adj.自愿的)。",
            details: "be delighted to do something 意为“很高兴/欣喜地做某事”，属于商务公关中表达欣喜或荣幸的经典客套表态词汇。其余选项不构成 be ... to do 的积极语义搭配。",
            cn: "董事会非常高兴地宣布成功收购该生物医学子公司。",
            jp: "取締役会は、バイオメディカル子会社の買収成功を発表することを大変嬉しく（delighted）思っています。"
        }
    },
    {
        id: 8,
        target: "emphasize",
        category: "中等",
        stem: "During the seminar, the safety coordinator will ________ the importance of proper protective gear.",
        options: ["emphasize", "progress", "worth", "subsidy"],
        correct: "emphasize",
        explanations: {
            guide: "情态动词后的及物动词原形。will 后面要求接动词原形，空格后面有宾语 the importance（重要性），选用及物动词 emphasize。",
            family: "emphasize (v.强调) | progress (n./v.进展) | worth (adj./n.值得) | subsidy (n.补贴)。",
            details: "emphasize the importance of... 意为“强调……的重要性”，是所有职场培训、政策推行和安全生产（safety coordinator）场景下的高频黄金动宾搭配。其他选项词性不符或词义不通。",
            cn: "在研讨会期间，安全协调员将强调正确佩戴防护装备的重要性。",
            jp: "セミナー中、安全コーディネーターは適切な保護具着用の重要性を強調（emphasize）する予定です。"
        }
    },
    {
        id: 9,
        target: "vote",
        category: "中等",
        stem: "Board members are scheduled to ________ on the proposed fiscal budget during tomorrow's morning meeting.",
        options: ["vote", "clerk", "aware", "confirmed"],
        correct: "vote",
        explanations: {
            guide: "动词不定式后的动词词义与介词搭配。scheduled to 后面接动词原形，空格后有介词 on，结合 board members（董事会成员）和 budget（预算）语境选 vote。",
            family: "vote (v.投票/表决) | clerk (n.办事员) | aware (adj.意识到的) | confirmed (adj.确定的)。",
            details: "vote on the budget 意为“对预算进行表决”。在董事会决策场景下，vote on 是固定的动介搭配。其他选项词性错误或无法与 on 构成此类行政搭配。",
            cn: "董事会成员计划在明天的早会上对拟议的财政预算案进行表决。",
            jp: "取締役会のメンバーは、明日の朝の会議で提案された予算案について投票（vote）する予定です。"
        }
    },
    {
        id: 10,
        target: "worth",
        category: "中等",
        stem: "The management consultant believes that the database upgrade is well ________ the investment.",
        options: ["worth", "donation", "anniversary", "lucrative"],
        correct: "worth",
        explanations: {
            guide: "形容词作表语修饰名词宾语。空格前面有修饰副词 well（很/非常），空格后面直接有名词 investment（投资）充当宾语，选用 worth（值得的）。",
            family: "worth (adj.值得的) | donation (n.捐赠) | anniversary (n.周年纪念) | lucrative (adj.盈利的)。",
            details: "be well worth the investment 意为“非常值得这项投资”，是描述软件升级（database upgrade）、设备引进可行性评估时的绝对核心表达。其后直接接名词宾语，lucrative 虽也表获利但不能接宾语。",
            cn: "管理顾问认为，数据库升级非常值得这项投资。",
            jp: "経営コンサルタントは、データベースのアップグレードは投資に十分値する（worth）ものだと考えています。"
        }
    },
    {
        id: 11,
        target: "donation",
        category: "中等",
        stem: "To support the communal library, several local businesses decided to ________ advanced computer equipment.",
        options: ["donate", "donation", "donor", "donating"],
        correct: "donate",
        explanations: {
            guide: "动词不定式后的动词词性变形。decided to 后面要求接动词原形作宾语，后面带有名词 equipment 作其宾语，选用及物动词 donate。",
            family: "donate (v.捐赠) | donation (n.捐赠) | donor (n.捐赠者) | donating (v-ing捐赠中)。",
            details: "decided to donate equipment 意为“决定捐赠设备”，属于典型支持公共图书馆等社区公益的商业叙事。此处必须使用其动词原形 donate。",
            cn: "为了支持社区图书馆，几家本地企业决定捐赠先进的电脑设备。",
            jp: "共同図書館を支援するため、地元のいくつかの企業が先進的なコンピュータ設備を寄付（donate）することを決定しました。"
        }
    },
    {
        id: 12,
        target: "anniversary",
        category: "中等",
        stem: "The upcoming ________ gala will celebrate twenty years of excellence in the automotive industry.",
        options: ["anniversary", "overall", "delighted", "historical"],
        correct: "anniversary",
        explanations: {
            guide: "名词作定语修饰名词。空格后为名词 gala（庆典/盛会），结合 celebrate twenty years（庆祝二十年）的背景，选用名词 anniversary 作定语。",
            family: "anniversary (n.周年) | overall (adj.整体的) | delighted (adj.高兴的) | historical (adj.历史的)。",
            details: "anniversary gala 意为“周年庆典”，是指企业创立、合并等重大日子举行的晚宴盛会。其余选项无法贴合庆祝“二十年杰出成就”这一特定场景要求。",
            cn: "即将举行的周年庆典将庆祝汽车行业二十年的杰出成就。",
            jp: "今度の周年（anniversary）ガラは、自動車業界における20年間の卓越した歩みを祝うものになります。"
        }
    },
    {
        id: 13,
        target: "aware",
        category: "困难",
        stem: "The HR director launched a training campaign to increase employee ________ of online data security.",
        options: ["awareness", "aware", "awared", "awarenesses"],
        correct: "awareness",
        explanations: {
            guide: "及物动词后的抽象名词宾语。空格前面有及物动词 increase（增加/提高）和名词定语 employee，需要填入名词形式，选用 awareness 表示“意识”。",
            family: "awareness (n.意识/知晓) | aware (adj.意识到的) | awared (v-ed变体) | awarenesses (n-pl)。",
            details: "increase employee awareness of... 意为“提高员工对……的意识”，是人力资源安全培训、日常合规宣讲中的极高频高阶学术及商务表达。awareness 是不可数名词，排除复数形式。",
            cn: "人力资源总监开展了一项培训活动，以提高员工对在线数据安全的意识。",
            jp: "人事ディレクターは、オンラインデータセキュリティに関する従業員の意識（awareness）を高めるためのトレーニングキャンペーンを開始しました。"
        }
    },
    {
        id: 14,
        target: "progress",
        category: "困难",
        stem: "The software development team utilized ________ testing methods to ensure no glitches occurred during the launch.",
        options: ["progressive", "progress", "progressively", "progression"],
        correct: "progressive",
        explanations: {
            guide: "修饰名词的形容词词性派生选择。空格用于修饰 testing methods（测试方法），需要填入形容词，选用 progressive 表示“渐进的”。",
            family: "progressive (adj.渐进的/先进的) | progress (n./v.进展) | progressively (adv.渐进地) | progression (n.前进/进程)。",
            details: "progressive testing methods 意为“渐进式测试方法”。在软件开发生命周期（SDLC）中，采用渐进式测试来排除缺陷（glitches）是高阶IT项目管理行话。其余派生词不作此定语修饰。",
            cn: "软件开发团队利用渐进式的测试方法，以确保在上线期间不发生任何系统故障。",
            jp: "ソフトウェア開発チームは、ローンチ時のシステムの不具合発生を防ぐために、段階的な（progressive）テスト手法を採用しました。"
        }
    },
    {
        id: 15,
        target: "overall",
        category: "困难",
        stem: "Although some specific departments suffered a revenue loss, the firm ________ managed to meet its annual profit goals.",
        options: ["overall", "overalls", "overalled", "overalling"],
        correct: "overall",
        explanations: {
            guide: "修饰整句的主语后置副词用法。空格前为主语 the firm，后为动词 managed，表示整体上的宏观总结，选用副词 overall。",
            family: "overall (adv.总体上) | overalls (n.工装裤) | overalled (v-ed变体) | overalling (v-ing变体)。",
            details: "the firm overall managed to... 意为“公司在整体上还是成功做到了……”，此处 overall 作副词充当状语，用于转折句中做宏观统合评价，是高端年终财务或运营总结中的常见高阶用法。其他选项不符语意或为纯干扰词。",
            cn: "尽管一些特定的部门遭受了收入损失，但该公司总体上还是成功实现了年度利润目标。",
            jp: "いくつかの特定の部門で減収があったものの、会社全体（overall）としては年間の利益目標を何とか達成することができました。"
        }
    },
    {
        id: 16,
        target: "delighted",
        category: "困难",
        stem: "The committee members were ________ surprised by the high quality of the architectural drawings submitted by the applicant.",
        options: ["delightfully", "delighted", "delight", "delighting"],
        correct: "delightfully",
        explanations: {
            guide: "修饰形容词/过去分词的副词状语。空格位于系动词 were 和过去分词 surprised 之间，修饰 surprised，必须填入副词形式，选 delightfully。",
            family: "delightfully (adv.欣喜地/令人愉快地) | delighted (adj.高兴的) | delight (n./v.欣喜) | delighting (v-ing使人高兴中)。",
            details: "were delightfully surprised by... 意为“被……带来了令人欣喜的惊喜/因……感到喜出望外”，是评价设计方案或建筑图纸（drawings）质量超出预期时的标准商务英语高级词组。",
            cn: "委员会成员对申请人提交的建筑图纸的高质量感到喜出望外。",
            jp: "委員会のメンバーは、応募者から提出された建築図面の品質の高さに、嬉しい（delightfully）驚きを覚えました。"
        }
    },
    {
        id: 17,
        target: "emphasize",
        category: "困难",
        stem: "The general manager placed strong ________ on the importance of maintaining thorough quality control.",
        options: ["emphasis", "emphasize", "emphasized", "emphasizing"],
        correct: "emphasis",
        explanations: {
            guide: "及物动词宾语的抽象名词选择。空格前有及物动词 placed 和形容词 strong，后接介词 on，考核固定高阶搭配 place emphasis on...（强调/重视……）。",
            family: "emphasis (n.强调/重视) | emphasize (v.强调) | emphasized (v-ed已强调) | emphasizing (v-ing强调中)。",
            details: "place strong emphasis on 意为“高度重视/极力强调”，是总经理在品质管理会议上要求强化控制的标准高级行头术语。此位置必须使用其名词形式 emphasis。",
            cn: "总经理高度强调了保持彻底的质量控制的重要性。",
            jp: "ゼネラルマネージャーは、徹底した品質管理を維持することの重要性を強く強調（emphasis）しました。"
        }
    },
    {
        id: 18,
        target: "worth",
        category: "困难",
        stem: "The compliance officer agreed that implementing the new safety guidelines is a highly ________ endeavor.",
        options: ["worthwhile", "worth", "worthiness", "worthy"],
        correct: "worthwhile",
        explanations: {
            guide: "修饰单数名词的可数形容词定语。空格前有不定冠词 a 和程度副词 highly，后有单数名词 endeavor（努力/事业），需要填入修饰性形容词，选 worthwhile（值得的）。",
            family: "worthwhile (adj.值得花时间精力的) | worth (adj.值钱的/值得的) | worthiness (n.价值) | worthy (adj.有价值的/配得上的)。",
            details: "a worthwhile endeavor 意为“一项非常值得付出的努力/一件非常有意义的事”。worth 属于表语形容词，一般不放在名词前作定语；worthy 通常接 of，在此不合结构。因此 worthwhile 是最佳定语选择。",
            cn: "合规官同意，实施新的安全指南是一项非常值得付出的努力。",
            jp: "コンプライアンス担当者は、新しい安全ガイドラインの実施は非常に価値のある（worthwhile）試みであるということに同意しました。"
        }
    }
];