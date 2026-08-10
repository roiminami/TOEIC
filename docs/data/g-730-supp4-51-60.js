// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data271-280.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "therefore",
        pos: "副",
        ipa: "/ˈðerfɔːr/",
        cn: "因此，所以",
        jp: "したがって、それゆえに",
        family: "there / for",
        tips: "因果关系副词，常用于句首或分号后修饰整句逻辑（e.g., therefore, we postponed the event）。",
        desc: "Therefore, we postponed the event."
    },
    {
        word: "however",
        pos: "副",
        ipa: "/haʊˈevər/",
        cn: "然而，但是",
        jp: "しかしながら、けれども",
        family: "how / ever",
        tips: "转折副词，托业Part 5/6极高频。注意区分：however 作副词修饰整句，不可直接作连词连接两个独立句子。",
        desc: "However, the budget was limited."
    },
    {
        word: "nevertheless",
        pos: "副",
        ipa: "/ˌnevərðəˈles/",
        cn: "然而，尽管如此",
        jp: "それにもかかわらず",
        family: "never / the / less",
        tips: "让步转折副词，与 nonetheless 同义。常表达“虽然存在前述不利情况，但依然发生了后续结果”。",
        desc: "Nevertheless, they finished on time."
    },
    {
        word: "moreover",
        pos: "副",
        ipa: "/mɔːrˈoʊvər/",
        cn: "此外，而且",
        jp: "さらに、その上",
        family: "more / over",
        tips: "递进副词，用于追加补充重要信息或强化观点（e.g., Moreover, it saves money）。",
        desc: "Moreover, the quality is excellent."
    },
    {
        word: "furthermore",
        pos: "副",
        ipa: "/ˌfɜːrðərˈmɔːr/",
        cn: "此外，而且",
        jp: "さらに、なお",
        family: "further / more",
        tips: "正式递进副词，与 moreover/in addition 同义，常置于句首引出进一步的商务论述。",
        desc: "Furthermore, we offer free shipping."
    },
    {
        word: "in addition",
        pos: "短副",
        ipa: "/ɪn əˈdɪʃn/",
        cn: "此外，另外",
        jp: "さらに、それに加えて",
        family: "add / addition / additional",
        tips: "递进过渡短语。注意语法区分：in addition 作副词单独修饰句；in addition to 为介词短语，后接名词/动名词。",
        desc: "In addition, we provide warranty."
    },
    {
        word: "thus",
        pos: "副",
        ipa: "/ðʌs/",
        cn: "因此，从而",
        jp: "したがって、このように",
        family: "thusly",
        tips: "因果与方式副词，托业阅读高阶句型常考“thus + 现在分词”（e.g., thus increasing efficiency）。",
        desc: "Thus, the problem was solved."
    },
    {
        word: "as a result",
        pos: "短副",
        ipa: "/æz ə rɪˈzʌlt/",
        cn: "结果，因此",
        jp: "结果として、その結果",
        family: "result / resulting / resultantly",
        tips: "因果连接短语。as a result 做副词修饰句子；as a result of 为复合介词短语，后接名词/代词（由于……）。",
        desc: "As a result, sales increased."
    },
    {
        word: "meanwhile",
        pos: "副",
        ipa: "/ˈmiːnwaɪl/",
        cn: "与此同时，在此期间",
        jp: "その間に、一方では",
        family: "mean / time / in the meantime",
        tips: "时间与对比副词，表达主线任务推进的同时另一件事也在并行发生，或用于两事物的横向对照。",
        desc: "Meanwhile, the team prepared food."
    },
    {
        word: "in contrast",
        pos: "短副",
        ipa: "/ɪn ˈkɑːntræst/",
        cn: "相比之下，与此相反",
        jp: "対照的に、反面",
        family: "contrast / contrasting / contrastive",
        tips: "对比连接短语。in contrast 单独作副词修饰全句；in contrast to/with 为介词短语，后接对比对象名词。",
        desc: "In contrast, exports grew rapidly."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "therefore",
        category: "简单",
        stem: "The weather forecast predicts heavy rain tomorrow; ________, the outdoor concert will be postponed.",
        options: ["therefore", "however", "meanwhile", "furthermore"],
        correct: "therefore",
        explanations: {
            guide: "因果逻辑副词。前半句陈述原因（预计有大雨），后半句为必然结果（音乐会延期），选因此（therefore）。",
            family: "therefore (adv.因此) | however (adv.然而) | meanwhile (adv.与此同时) | furthermore (adv.此外)。",
            details: "therefore 表达逻辑上的因果导出。however（然而）表示转折，furthermore（此外）表示递进，均不符合因果关系。",
            cn: "天气预报预测明天有大雨；因此，户外音乐会将延期举行。",
            jp: "天気予報は明日大雨を予測しています。したがって（therefore）、野外コンサートは延期されます。"
        }
    },
    {
        id: 2,
        target: "however",
        category: "简单",
        stem: "The new laptop model is quite expensive; ________, it comes with a three-year full warranty.",
        options: ["however", "therefore", "thus", "moreover"],
        correct: "however",
        explanations: {
            guide: "转折逻辑副词。前半句提及其价格昂贵（负面），后半句指出附赠三年全保（正面），逻辑转折选 however。",
            family: "however (adv.然而) | therefore (adv.因此) | thus (adv.从而) | moreover (adv.此外)。",
            details: "however 引出与前文相反或对立的优势。therefore 与 thus 表示因果，moreover 表示递进，在此处均不通顺。",
            cn: "新款笔记本电脑模型相当昂贵；然而，它附带三年的全额质保。",
            jp: "新しいノートパソコンのモデルはかなり高価です。しかしながら（however）、3年間の完全保証が付いています。"
        }
    },
    {
        id: 3,
        target: "moreover",
        category: "简单",
        stem: "The proposed software is user-friendly; ________, it significantly reduces operational costs.",
        options: ["moreover", "however", "nevertheless", "in contrast"],
        correct: "moreover",
        explanations: {
            guide: "递进逻辑副词。前半句强调软件易用，后半句追加补充其能降低成本的另一优势，选递进副词 moreover。",
            family: "moreover (adv.此外/而且) | however (adv.然而) | nevertheless (adv.尽管如此) | in contrast (adv.相比之下)。",
            details: "moreover 用于同向追加正面的优点。however、nevertheless、in contrast 均属于转折/对比副词。",
            cn: "提议的软件操作简便；此外，它还能显着降低运营成本。",
            jp: "提案されたソフトウェアは使いやすいです。此外（moreover）、運営コスト大幅に削減します。"
        }
    },
    {
        id: 4,
        target: "in addition",
        category: "简单",
        stem: "The hotel offers free airport shuttle service; ________, guests enjoy a complimentary breakfast.",
        options: ["in addition", "thus", "however", "as a result"],
        correct: "in addition",
        explanations: {
            guide: "递进补充短语。前半句列出免费接送服务，后半句追加免费早餐福利，选递进短语 in addition（此外）。",
            family: "in addition (adv.此外) | thus (adv.因此) | however (adv.然而) | as a result (adv.结果)。",
            details: "in addition 用于补充平行信息。thus 与 as a result 表示因果，however 表示转折，与补充福利的语气不符。",
            cn: "酒店提供免费的机场接送班车服务；此外，客人还可享用免费早餐。",
            jp: "ホテルは無料の空港シャトルサービスを提供しています。さらに（in addition）、ゲストは無料の朝食を楽しめます。"
        }
    },
    {
        id: 5,
        target: "meanwhile",
        category: "简单",
        stem: "Engineers are inspecting the main server; ________, technical support agents are assisting affected clients.",
        options: ["meanwhile", "therefore", "furthermore", "in contrast"],
        correct: "meanwhile",
        explanations: {
            guide: "时间并行副词。表达工程师检查服务器的同时，客服人员也在协助受影响的客户，选 meanwhile（与此同时）。",
            family: "meanwhile (adv.与此同时) | therefore (adv.因此) | furthermore (adv.此外) | in contrast (adv.相比之下)。",
            details: "meanwhile 强调两个动作在同一时间段内平行进行。therefore、furthermore 等均缺乏时间平行的语义。",
            cn: "工程师们正在检查主服务器；与此同时，技术支持代理正协助受影响的客户。",
            jp: "技術者がメインサーバーを点検しています。その間に（meanwhile）、カスタマーサポート担当者は影響を受けたクライアントを支援しています。"
        }
    },
    {
        id: 6,
        target: "in contrast",
        category: "简单",
        stem: "Domestic sales fell by ten percent this quarter; ________, international exports increased sharply.",
        options: ["in contrast", "therefore", "thus", "moreover"],
        correct: "in contrast",
        explanations: {
            guide: "对比逻辑短语。前半句描述国内销售下滑，后半句指出国际出口大幅增长，选表达对比的 in contrast。",
            family: "in contrast (adv.相比之下) | therefore (adv.因此) | thus (adv.从而) | moreover (adv.此外)。",
            details: "in contrast 用于对照两个截然相反的趋势（下滑 vs 增长）。therefore 和 thus 误将反向趋势视作因果关系。",
            cn: "本季度国内销售额下降了百分之十；相比之下，国际出口量大幅增加。",
            jp: "今四半期の国内売上高は10%減少しました。対照的に（in contrast）、国際輸出は急激に増加しました。"
        }
    },
    {
        id: 7,
        target: "furthermore",
        category: "中等",
        stem: "The candidate has extensive managerial experience; ________, she speaks three foreign languages fluently.",
        options: ["furthermore", "however", "nevertheless", "as a result"],
        correct: "furthermore",
        explanations: {
            guide: "递进追加副词。前文提到丰富的管理经验（优势1），后文追加流利的语言能力（优势2），选 furthermore（此外）。",
            family: "furthermore (adv.此外/而且) | however (adv.然而) | nevertheless (adv.尽管如此) | as a result (adv.结果)。",
            details: "furthermore 在商务履历评估中用于层层追加应聘者的优势。however 和 nevertheless 属于转折，语义不符。",
            cn: "该应聘者拥有丰富的管理经验；此外，她还能流利地说三门外语。",
            jp: "その候補者は豊富な管理職特有の経験を持っています。さらに（furthermore）、彼女は3つの外国語を流暢に話します。"
        }
    },
    {
        id: 8,
        target: "as a result",
        category: "中等",
        stem: "The marketing team launched an aggressive social media campaign; ________, online traffic doubled in one month.",
        options: ["as a result", "however", "nevertheless", "in contrast"],
        correct: "as a result",
        explanations: {
            guide: "因果结果短语。激烈的营销活动（原因）导致线上访问量一个月内翻倍（结果），选 as a result（结果/因此）。",
            family: "as a result (adv.结果/因此) | however (adv.然而) | nevertheless (adv.尽管如此) | in contrast (adv.相比之下)。",
            details: "as a result 引出由前文动作直接导致的积极或消极结果。其余选项均为转折或对比词。",
            cn: "营销团队发起了一场攻势强劲的社交媒体宣传活动；结果，线上访问量在一个月内翻了一番。",
            jp: "マーケティングチームは積極的なソーシャルメディアキャンペーンを開始しました。その結果（as a result）、オンラインアクセス数は1ヶ月で2倍になりました。"
        }
    },
    {
        id: 9,
        target: "nevertheless",
        category: "中等",
        stem: "The project faced severe supply chain delays; ________, the construction crew managed to complete the building on schedule.",
        options: ["nevertheless", "therefore", "thus", "moreover"],
        correct: "nevertheless",
        explanations: {
            guide: "让步转折副词。面临严重延误（困难），但施工队依然克服困难按时完工（结果），选 nevertheless（尽管如此/然而）。",
            family: "nevertheless (adv.尽管如此/然而) | therefore (adv.因此) | thus (adv.从而) | moreover (adv.此外)。",
            details: "nevertheless 强调克服不利因素后的转折成果。因此（therefore）误将延误当成按时完工的原因，逻辑颠倒。",
            cn: "项目面临着严重的供应链延误；尽管如此，施工队还是设法按计划完成了大楼建设。",
            jp: "プロジェクトは深刻なサプライチェーンの遅延に直面しました。それにもかかわらず（nevertheless）、建設クルーは予定通りに建物を完成させることができました。"
        }
    },
    {
        id: 10,
        target: "thus",
        category: "中等",
        stem: "The firm streamlined its manufacturing process, ________ reducing overall production expenses by fifteen percent.",
        options: ["thus", "however", "nevertheless", "meanwhile"],
        correct: "thus",
        explanations: {
            guide: "因果与分词状语考点。________ + 现在分词 (reducing...) 构成高阶结果状语结构，意为“从而降低了……”，选 thus。",
            family: "thus (adv.从而/因此) | however (adv.然而) | nevertheless (adv.尽管如此) | meanwhile (adv.与此同时)。",
            details: "thus doing sth 是托业Part 5的高频固定搭配，用于引出顺理成章的自然结果。however 等无法直接这样连接分词短语。",
            cn: "该公司精简了制造流程，从而将整体生产费用降低了百分之十五。",
            jp: "同社は製造プロセスを効率化し、これにより（thus）全体の生産費用を15%削減しました。"
        }
    },
    {
        id: 11,
        target: "in addition",
        category: "中等",
        stem: "________ to managing daily store operations, the supervisor is responsible for staff recruitment.",
        options: ["In addition", "Furthermore", "Moreover", "As a result"],
        correct: "In addition",
        explanations: {
            guide: "介词搭配辨析。________ to + N/V-ing 是固定介词短语 In addition to（除了……之外还），选 In addition。",
            family: "In addition (to) (prep.除了…之外) | Furthermore (adv.此外) | Moreover (adv.此外) | As a result (adv.结果)。",
            details: "In addition to 后面可以跟名词或动名词短语。Furthermore、Moreover 是纯副词，后面不能直接紧跟介词 to + 名词。",
            cn: "除了管理门店日常运营之外，主管还负责员工招聘。",
            jp: "日常の店舗運営を管理することに加えて（In addition to）、副支配人はスタッフの採用も担当しています。"
        }
    },
    {
        id: 12,
        target: "however",
        category: "中等",
        stem: "The proposal was well-written; ________ carefully detailed the financial estimates were, the board requested further revisions.",
        options: ["however", "therefore", "furthermore", "meanwhile"],
        correct: "however",
        explanations: {
            guide: "高阶让步状语倒装结构。however + adj/adv + S + V 是固定语法句型，意为“无论……多么……”，在此选 however。",
            family: "however (adv.无论多么/然而) | therefore (adv.因此) | furthermore (adv.此外) | meanwhile (adv.与此同时)。",
            details: "however carefully detailed... were 意为“无论财务预测细节多么详尽……”。其余选项无法后接形容词/副词引导让步状语从句。",
            cn: "方案写得很好；然而，无论财务预测细节多么详尽，董事会还是要求作进一步修改。",
            jp: "提案書はよく書かれていました。しかしながら（however）、財務見積もりがどれほど詳細に記載されていたとしても、取締役会はさらなる修正を要請しました。"
        }
    },
    {
        id: 13,
        target: "as a result",
        category: "困难",
        stem: "Due to the unexpected railway strike, several key shipments were delayed, ________ of which the factory paused production.",
        options: ["as a result", "in addition", "nevertheless", "furthermore"],
        correct: "as a result",
        explanations: {
            guide: "高阶介词短语与非限制性定语从句。________ of which 构成介词短语 + 关系代词引导从句，表达“由于这一结果”，选 as a result。",
            family: "as a result (of) (prep.由于…的结果) | in addition (adv.此外) | nevertheless (adv.尽管如此) | furthermore (adv.此外)。",
            details: "as a result of which 相当于 and as a result of this delay。in addition of 非标准介词搭配（应为 in addition to）。",
            cn: "由于意外的铁路罢工，几批关键货物延误，导致工厂暂停了生产。",
            jp: "予期せぬ鉄道ストライキのため、いくつかの主要な出荷が遅延し、その結果として（as a result of which）工場は生産を停止しました。"
        }
    },
    {
        id: 14,
        target: "thus",
        category: "困难",
        stem: "By restructuring its regional distribution network, the logistics company eliminated redundant routes, ________ improving delivery speeds across all territories.",
        options: ["thus", "however", "nevertheless", "contrast"],
        correct: "thus",
        explanations: {
            guide: "长难句分词作结果状语。句中用逗号隔开，用 ________ + V-ing (improving...) 表达“由此/从而改善了配送速度”，选动词修饰副词 thus。",
            family: "thus (adv.从而/由此) | however (adv.然而) | nevertheless (adv.尽管如此) | contrast (n.对比)。",
            details: "thus improving 是托业 Part 5 难题高频考点，用于连接前因与后果分词。however 等副词不能无连词直接带 V-ing 充当结果状语。",
            cn: "通过重组区域配送网络，该物流公司消除了冗余路线，从而提高了所有地区的送货速度。",
            jp: "地域配送ネットワークを再編することで、その物流会社は冗長なルートを削減し、これにより（thus）全地域での配送速度を向上させました。"
        }
    },
    {
        id: 15,
        target: "in contrast",
        category: "困难",
        stem: "________ to last year's dismal sales figures, the current fiscal report indicates a remarkable recovery across all retail sectors.",
        options: ["In contrast", "In addition", "Furthermore", "As a result"],
        correct: "In contrast",
        explanations: {
            guide: "高阶介词短语搭配。________ to + 名词短语，表达“与……形成鲜明对比”，选 In contrast（In contrast to...）。",
            family: "In contrast (to) (prep.与…相比/与…相反) | In addition (to) (prep.除…之外) | Furthermore (adv.此外) | As a result (adv.结果)。",
            details: "In contrast to 意为与……相比之下。In addition to 表示增加/除了；根据句意“去年惨淡数字 vs 今年显著复苏”，须用对比关系的 In contrast。",
            cn: "与去年惨淡的销售数字相比，当前的财政报告显示所有零售领域均出现了显着的复苏。",
            jp: "昨年の惨状たる売上数字とは対照的に（In contrast to）、現在の会計報告書はすべての小売り部門で著しい回復を示しています。"
        }
    },
    {
        id: 16,
        target: "nevertheless",
        category: "困难",
        stem: "The survey indicated widespread customer dissatisfaction; the management team, ________, decided to proceed with the proposed rate increase.",
        options: ["nevertheless", "therefore", "thus", "moreover"],
        correct: "nevertheless",
        explanations: {
            guide: "插入语位置的副词考点。放置于主语与谓语之间（the management team, ________, decided...），表达强烈的让步转折“尽管如此，还是决定……”，选 nevertheless。",
            family: "nevertheless (adv.尽管如此/然而) | therefore (adv.因此) | thus (adv.从而) | moreover (adv.此外)。",
            details: "前文是顾客广泛不满，后文是坚持涨价。两句之间是明显的对抗/让步关系，因此选表示逆向转折的 nevertheless。",
            cn: "调查显示顾客普遍存在不满；尽管如此，管理团队还是决定继续按计划提高收费标准。",
            jp: "調査は顧客の広範な不満を示しました。それにもかかわらず（nevertheless）、経営陣は提案された料金大幅値上げを進めることを決定しました。"
        }
    },
    {
        id: 17,
        target: "moreover",
        category: "困难",
        stem: "The new office complex is located near major transit hubs; ________, its energy-efficient architecture qualifies for federal tax credits.",
        options: ["moreover", "however", "nevertheless", "in contrast"],
        correct: "moreover",
        explanations: {
            guide: "商务投资分析递进。前文指出交通便利（优点1），分号后引出符合联邦税收减免（优点2），选表同向递进追加的 moreover。",
            family: "moreover (adv.此外/而且) | however (adv.然而) | nevertheless (adv.尽管如此) | in contrast (adv.相比之下)。",
            details: "moreover 用于商务报告中对某物业/项目的多重红利优势进行层层叠加论述。其余三项均为逆向转折或对比词。",
            cn: "新的办公大楼位于主要交通枢纽附近；此外，其节能建筑结构还使其有资格享受联邦税收抵免。",
            jp: "新しいオフィスビルは主要な交通ハブの近くに位置しています。さらに（moreover）、その省エネ建築は連邦税控除の対象となります。"
        }
    },
    {
        id: 18,
        target: "therefore",
        category: "困难",
        stem: "The board of directors passed a resolution requiring strict compliance with local environmental laws; ________, non-compliant facilities will face immediate suspension.",
        options: ["therefore", "however", "nevertheless", "in contrast"],
        correct: "therefore",
        explanations: {
            guide: "法律合规因果逻辑。董事会通过严格合规决议（原因），因此违规设施将面临立即停业（警告后果），选因此（therefore）。",
            family: "therefore (adv.因此/所以) | however (adv.然而) | nevertheless (adv.尽管如此) | in contrast (adv.相比之下)。",
            details: "therefore 在合同与公司决议中用于引出违规将承担的必然法律后果。转折词（however/nevertheless）破坏了合规决议的严肃警告逻辑。",
            cn: "董事会通过了一项要求严格遵守当地环保法律的决议；因此，不合规的设施将面临立即停业处分。",
            jp: "取締役会は地域の環境法への厳格な准拠を求める決議を可決しました。したがって（therefore）、非准拠の施設は即座に操業停止に直面します。"
        }
    }
];