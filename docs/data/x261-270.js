// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data591-600.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "crisp",
        pos: "形",
        ipa: "/krɪsp/",
        cn: "酥脆的，清脆的，新鲜干脆的",
        jp: "カリッとした、さわやかな、新鮮な",
        family: "crisply / crispness",
        tips: "餐饮与生活高频：crisp texture/crust（酥脆的质感/外皮），crisp morning air（清凉干爽的晨间空气）。",
        desc: "The bread has crisp crust."
    },
    {
        word: "crust",
        pos: "名",
        ipa: "/krʌst/",
        cn: "（面包、馅饼等的）酥皮，外皮，硬壳",
        jp: "（パンやパイの）皮、外皮、硬い外層",
        family: "crusty / crusted",
        tips: "餐饮与烘焙高频：crisp/golden crust（酥脆/金黄的外皮），pie crust（馅饼皮）。",
        desc: "The bread has golden crust."
    },
    {
        word: "optimal",
        pos: "形",
        ipa: "/ˈɑːptɪml/",
        cn: "最佳的，最优的，最理想的",
        jp: "最適な、最善の",
        family: "optimally / optimize / optimum",
        tips: "运营与工程高频：optimal performance/conditions/results（最佳性能/最理想条件/最优结果）。",
        desc: "Maintain optimal operating conditions."
    },
    {
        word: "extinguishers",
        pos: "名",
        ipa: "/ɪkˈstɪŋɡwɪʃərz/",
        cn: "灭火器（复数）",
        jp: "消火器（複数）",
        family: "extinguish / extinguisher / extinguishable",
        tips: "安全与建筑设施高频：fire extinguishers（灭火器），install fire extinguishers（安装灭火器）。",
        desc: "Inspect all fire extinguishers monthly."
    },
    {
        word: "filings",
        pos: "名",
        ipa: "/ˈfaɪlɪŋz/",
        cn: "（官方）申报文件，备案，档案（复数）",
        jp: "提出書類、申告、届出書類（複数）",
        family: "file / filing / filer",
        tips: "法律与财报高频：tax/regulatory filings（纳税申报/监管备案文件），quarterly filings（季度申报）。",
        desc: "Submit all tax filings promptly."
    },
    {
        word: "podium",
        pos: "名",
        ipa: "/ˈpoʊdiəm/",
        cn: "讲台，演讲台，指挥台",
        jp: "演台、表彰台、演壇",
        family: "podiums / podia",
        tips: "会议与演讲高频：step up to the podium（走上讲台），speak at the podium（在讲台发言）。",
        desc: "The speaker approached the podium."
    },
    {
        word: "pantry",
        pos: "名",
        ipa: "/ˈpæntri/",
        cn: "食品储藏室，茶水间",
        jp: "給湯室、パントリー、食品庫",
        family: "pantries",
        tips: "办公设施与生活高频：office pantry（办公室茶水间/食品储存柜），stock the pantry（填充茶水间零食/食材）。",
        desc: "Snacks are in the pantry."
    },
    {
        word: "peeling",
        pos: "形/動/名",
        ipa: "/ˈpiːlɪŋ/",
        cn: "剥落的，脱皮的；剥皮",
        jp: "（塗料などが）剥がれ落ちている；皮むき",
        family: "peel / peeled / peeler",
        tips: "设施维护与质检高频：peeling paint/wallpaper（剥落的油漆/脱落的壁纸）。",
        desc: "Repaint the peeling wall paint."
    },
    {
        word: "cascade",
        pos: "動/名",
        ipa: "/kæˈskeɪd/",
        cn: "层叠传递，连锁反应；小瀑布",
        jp: "連鎖的に伝わる、次々と流れる；小滝",
        family: "cascaded / cascading / cascades",
        tips: "管理与IT高频：cascade information down（层层向下传达信息），cascading effects/failures（连锁反应/连锁故障）。",
        desc: "Information will cascade down teams."
    },
    {
        word: "resumption",
        pos: "名",
        ipa: "/rɪˈzʌmpʃn/",
        cn: "重新开始，恢复",
        jp: "再開、復帰",
        family: "resume / resumed / resuming",
        tips: "运营与交通高频：resumption of services/flights/production（恢复服务/航班/生产）。",
        desc: "Services saw a quick resumption."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "podium",
        category: "简单",
        stem: "The keynote speaker walked up to the ________ to deliver the opening address to the conference attendees.",
        options: ["podium", "pantry", "crust", "resumption"],
        correct: "podium",
        explanations: {
            guide: "会议演讲设施名词考点。walked up to the ________ 结合发表开幕致辞（deliver the opening address），选 podium（讲台/演讲台）。",
            family: "podium (n.讲台) | pantry (n.茶水间) | crust (n.酥皮) | resumption (n.恢复)。",
            details: "walk up to the podium 属于会议场景经典搭配，意为走上讲台。pantry（茶水间）、crust（酥皮）均非演讲发言设施。",
            cn: "主旨演讲嘉宾走上讲台，向与会者发表了开幕致辞。",
            jp: "基調講演者は会議の参加者に向けて開会の辞を述べるため、演壇（podium）へと歩み寄りました。"
        }
    },
    {
        id: 2,
        target: "extinguishers",
        category: "简单",
        stem: "According to municipal fire safety codes, certified fire ________ must be installed on every floor of the office building.",
        options: ["extinguishers", "filings", "pantries", "podiums"],
        correct: "extinguishers",
        explanations: {
            guide: "消防设施名词考点。fire ________ 属于消防安全高频词组，结合每层楼必须配备安装，选 extinguishers（灭火器）。",
            family: "extinguishers (n.灭火器复数) | filings (n.申报文件) | pantries (n.茶水间) | podiums (n.讲台)。",
            details: "fire extinguishers 意为灭火器。filings（备案文件）、pantries（茶水间）均非用于扑灭火灾的消防专用设施。",
            cn: "根据市政消防安全法规，办公大楼的每一层都必须安装经认证的灭火器。",
            jp: "市の消防安全法規に基づき、オフィスビルのすべての階に認定された消火器（extinguishers）を設置しなければなりません。"
        }
    },
    {
        id: 3,
        target: "pantry",
        category: "简单",
        stem: "Employees can find complimentary coffee, tea, and fresh fruit in the office ________ on the third floor.",
        options: ["pantry", "podium", "filing", "crust"],
        correct: "pantry",
        explanations: {
            guide: "办公设施名词考点。结合放置免费咖啡、茶水与新鲜水果的办公场所，选 pantry（茶水间/食品储藏处）。",
            family: "pantry (n.茶水间/食品室) | podium (n.讲台) | filing (n.归档) | crust (n.酥皮)。",
            details: "office pantry 意为办公室茶水间/备餐室。podium（演讲台）、crust（外皮）均非存放供应饮品茶歇的办公区域。",
            cn: "员工可以在三楼的办公室茶水间找到免费提供的咖啡、茶水和新鲜水果。",
            jp: "従業員は、3階にあるオフィスのパントリー/給湯室（pantry）で無料のコーヒー、紅茶、新鮮な果物を利用できます。"
        }
    },
    {
        id: 4,
        target: "crisp",
        category: "简单",
        stem: "The artisan bakery is famous for its sourdough bread, which features a golden and ________ crust.",
        options: ["crisp", "optimal", "peeling", "cascading"],
        correct: "crisp",
        explanations: {
            guide: "食品口感修饰形容词。a golden and ________ crust 与 golden 并列修饰面包外皮，选 crisp（酥脆的/清脆的）。",
            family: "crisp (adj.酥脆的) | optimal (adj.最佳的) | peeling (adj.剥落的) | cascading (adj.层叠的)。",
            details: "crisp crust 意为酥脆的外皮。optimal（最优的）、peeling（脱皮的）无法用来形容面包烘烤后松脆香口的外皮质感。",
            cn: "这家手工面包店因其酸酵母面包而闻名，该面包具有金黄酥脆的外皮。",
            jp: "その職人ベーカリーは、きつね色でカリッとした（crisp）クラストが特徴のサワードウブレッドで有名です。"
        }
    },
    {
        id: 5,
        target: "filings",
        category: "简单",
        stem: "The accounting firm assisted the corporate client in completing all required annual tax ________ before the deadline.",
        options: ["filings", "extinguishers", "podiums", "pantries"],
        correct: "filings",
        explanations: {
            guide: "财税事务名词复数。annual tax ________ 结合在截止日期前完成，选 filings（申报文件/纳税申报表）。",
            family: "filings (n.申报/备案文件) | extinguishers (n.灭火器) | podiums (n.讲台) | pantries (n.茶水间)。",
            details: "tax filings 意为纳税申报/报税文件。extinguishers（灭火器）、podiums（讲台）均非会计师协助客户完成的法定申报手续。",
            cn: "该会计师事务所协助企业客户在截止日期前完成了所有必需的年度纳税申报。",
            jp: "その会計事務所は、期日前に必要なすべての年次税務申告（filings）を完了するよう法人クライアントを支援しました。"
        }
    },
    {
        id: 6,
        target: "resumption",
        category: "简单",
        stem: "Commuters celebrated the official ________ of regular subway service after two weeks of track maintenance.",
        options: ["resumption", "extinguisher", "pantry", "crust"],
        correct: "resumption",
        explanations: {
            guide: "交通运营名词考点。official ________ of subway service 结合为期两周的轨道维护后恢复服务，选 resumption（重新开始/恢复）。",
            family: "resumption (n.恢复/再开) | extinguisher (n.灭火器) | pantry (n.茶水间) | crust (n.外皮)。",
            details: "resumption of service 属于交通与服务高频搭配，意为恢复服务。extinguisher（灭火器）、pantry（茶水间）语境不符。",
            cn: "在为期两周的轨道维护结束后，通勤者庆祝常规地铁服务的正式恢复。",
            jp: "2週間の線路保守作業の後、通勤客は通常の地下鉄サービスの公式な再開（resumption）を祝いました。"
        }
    },
    {
        id: 7,
        target: "optimal",
        category: "中等",
        stem: "Engineers calibrated the server cooling system to maintain ________ operating temperatures throughout the data center.",
        options: ["optimal", "peeling", "crisp", "cascaded"],
        correct: "optimal",
        explanations: {
            guide: "工程运行修饰形容词。maintain ________ operating temperatures 结合校准冷却系统以确保数据中心运行在最适温度，选 optimal（最佳的/最理想的）。",
            family: "optimal (adj.最佳的) | peeling (adj.脱落的) | crisp (adj.酥脆的) | cascaded (adj.层叠的)。",
            details: "optimal operating temperatures 意为最佳运行温度。peeling（剥落的）、crisp（干脆的）无法修饰服务器设定的理想工况温度。",
            cn: "工程师校准了服务器冷却系统，以在整个数据中心维持最佳运行温度。",
            jp: "エンジニアは、データセンター全体で最適（optimal）な動作温度を維持するためにサーバー冷却システムを調整しました。"
        }
    },
    {
        id: 8,
        target: "peeling",
        category: "中等",
        stem: "Facilities management scheduled a painting crew to scrape off and repaint the ________ paint in the hallway.",
        options: ["peeling", "optimal", "crisp", "cascading"],
        correct: "peeling",
        explanations: {
            guide: "建筑修缮修饰形容词/分词。the ________ paint 结合安排油漆工铲除并重刷走廊墙漆，选 peeling（剥落的/脱皮的）。",
            family: "peeling (adj./v-ing剥落的) | optimal (adj.最佳的) | crisp (adj.酥脆的) | cascading (adj.层叠的)。",
            details: "peeling paint 属于设施维护高频固定搭配，意为剥落脱落的油漆。optimal（最佳的）不合修缮破损墙面的语境。",
            cn: "设施管理部门安排了油漆班组，负责刮除并重新粉刷走廊中剥落的油漆。",
            jp: "施設管理部門は、廊下の剥がれかけている（peeling）塗料を削り落として塗り直すため、塗装クルーを手配しました。"
        }
    },
    {
        id: 9,
        target: "cascade",
        category: "中等",
        stem: "Department directors must ensure that key strategic goals ________ down clearly to team supervisors and frontline staff.",
        options: ["cascade", "peel", "extinguish", "file"],
        correct: "cascade",
        explanations: {
            guide: "管理信息传达动词考点。ensure that goals ________ down 属于企业管理高频搭配，表达将战略目标层层“传达/自上而下传递”，选 cascade。",
            family: "cascade (v.层叠传递/倾泻) | peel (v.剥皮) | extinguish (v.扑灭) | file (v.归档/申报)。",
            details: "cascade down to staff 意为自上而下逐级传达落实到员工。peel（剥皮）、extinguish（熄灭）均无此管理信息层层下达之意。",
            cn: "部门主管必须确保关键战略目标能够清晰地层层传达给团队主管和一线员工。",
            jp: "部門長は、主要な戦略目標がチームのスーパーバイザーや現場スタッフに明確に伝達（cascade）されるようにしなければなりません。"
        }
    },
    {
        id: 10,
        target: "crust",
        category: "中等",
        stem: "The chef baked the savory pie until the pastry ________ turned flaky and golden brown.",
        options: ["crust", "podium", "pantry", "resumption"],
        correct: "crust",
        explanations: {
            guide: "烘焙食品复合名词。pastry ________ 结合烤至起酥且呈金黄色（flaky and golden brown），选 crust（外皮/酥皮）。",
            family: "crust (n.酥皮/外皮) | podium (n.讲台) | pantry (n.茶水间) | resumption (n.恢复)。",
            details: "pastry crust 意为馅饼面皮/酥皮。podium（讲台）、resumption（恢复）均非西点烹饪中的外壳面皮结构。",
            cn: "主厨烘烤咸味馅饼，直至面皮变得酥脆且呈金黄色。",
            jp: "シェフはパイの皮（crust）がサクサクとしたきつね色になるまで、香ばしいパイを焼き上げました。"
        }
    },
    {
        id: 11,
        target: "extinguishers",
        category: "中等",
        stem: "Maintenance personnel are trained to ________ small workplace fires quickly using the proper emergency equipment.",
        options: ["extinguish", "extinguisher", "cascade", "resume"],
        correct: "extinguish",
        explanations: {
            guide: "派生动词考点。are trained to 后面接动词原形，结合扑灭工作场所初起火灾（fires），选及物动词 extinguish（扑灭/熄灭）。",
            family: "extinguish (v.扑灭) | extinguisher (n.灭火器) | cascade (v.层叠传递) | resume (v.恢复)。",
            details: "to extinguish fires 意为灭火/扑灭火灾。extinguisher 是名词（灭火器），不能直接跟在不定式符号 to 后面作谓语动词。",
            cn: "维修人员经过专业培训，能够使用适当的应急设备迅速扑灭工作场所的初起火灾。",
            jp: "メンテナンス要員は、適切な緊急用機器を使用して職場の小規模な火災を迅速に消火する（extinguish）よう訓練を受けています。"
        }
    },
    {
        id: 12,
        target: "filings",
        category: "中等",
        stem: "Legal compliance officers must review all regulatory ________ before they are officially submitted to federal authorities.",
        options: ["filings", "extinguishers", "pantries", "cascades"],
        correct: "filings",
        explanations: {
            guide: "合规法务名词复数。regulatory ________ 结合提交给联邦监管机构（submitted to federal authorities），选 filings（备案文件/申报资料）。",
            family: "filings (n.备案/申报文件) | extinguishers (n.灭火器) | pantries (n.茶水间) | cascades (n.瀑布/连锁)。",
            details: "regulatory filings 专指呈交监管部门的合规备案/报告材料。extinguishers（灭火器）、pantries（茶水间）不符合呈交政府文件的属性。",
            cn: "合规法务专员在向联邦当局正式提交之前，必须审查所有监管备案文件。",
            jp: "法務コンプライアンス担当者は、連邦当局に正式に提出される前に、すべての規制関連の届出書類（filings）を確認しなければなりません。"
        }
    },
    {
        id: 13,
        target: "optimal",
        category: "困难",
        stem: "The supply chain director recommended software upgrades to ________ delivery routes across the regional distribution network.",
        options: ["optimize", "optimal", "optimally", "resumption"],
        correct: "optimize",
        explanations: {
            guide: "派生动词不定式考点。recommended software upgrades to 后面接动词原形，结合对配送路线进行“优化”，选动词 optimize。",
            family: "optimize (v.优化) | optimal (adj.最佳的) | optimally (adv.最优地) | resumption (n.恢复)。",
            details: "to optimize routes 意为优化路线。optimal 是形容词，optimally 是副词，均不能直接作不定式后的及物谓语动词。",
            cn: "供应链总监建议升级软件，以优化区域配送网络中的送货路线。",
            jp: "サプライチェーンディレクターは、地域配送ネットワーク全体の配送ルートを最適化する（optimize）ためのソフトウェアのアップグレードを推奨しました。"
        }
    },
    {
        id: 14,
        target: "cascade",
        category: "困难",
        stem: "A minor electrical failure at the substation triggered a ________ series of power outages across the entire industrial park.",
        options: ["cascading", "cascade", "peeling", "resumed"],
        correct: "cascading",
        explanations: {
            guide: "现在分词作前置定语。a ________ series of power outages 表达变电站故障引发了一系列“连锁/连环发生”的停电事故，选现在分词 cascading。",
            family: "cascading (adj./v-ing连锁的/层叠的) | cascade (n./v.原形) | peeling (adj.剥落的) | resumed (adj.恢复的)。",
            details: "a cascading series 意为连环发生/连带反应的一系列事件。cascade 为原形动词/名词，不能充当修饰 series 的前置分词定语。",
            cn: "变电站的一处微小电气故障引发了整个工业园区内一系列连锁停电事故。",
            jp: "変電所での軽微な電気的故障が、工業団地全体で連鎖的な（cascading）一連の停電を引き起こしました。"
        }
    },
    {
        id: 15,
        target: "crisp",
        category: "困难",
        stem: "The new high-resolution monitor displays images with exceptional clarity, rendering text and graphics ________.",
        options: ["crisply", "crisp", "crispness", "optimal"],
        correct: "crisply",
        explanations: {
            guide: "副词修饰现在分词短语。rendering text and graphics ________ 结构中，需要副词修饰呈现效果，表达文字与图形被渲染得“清晰锐利地”，选 crisply。",
            family: "crisply (adv.清晰锐利地/干脆地) | crisp (adj.清晰脆嫩的) | crispness (n.清脆/锐度) | optimal (adj.最佳的)。",
            details: "render graphics crisply 意为清晰锐利地呈现图文。crisp 是形容词，crispness 是名词，均不能在此充当动词的分词状语修饰词。",
            cn: "这款新型高分辨率显示器展现出非凡的清晰度，将文字和图形呈现得极其清晰锐利。",
            jp: "新しい高解像度モニターは卓越した鮮明さで画像を表示し、テキストやグラフィックをくっきりと（crisply）レンダリングします。"
        }
    },
    {
        id: 16,
        target: "resumption",
        category: "困难",
        stem: "Following the resolution of the labor dispute, factory management announced the immediate ________ of manufacturing operations.",
        options: ["resumption", "resuming", "extinguishment", "filing"],
        correct: "resumption",
        explanations: {
            guide: "派生抽象名词考点。announced the immediate ________ of operations 结构中，在定冠词和形容词后面接抽象名词形式 resumption（恢复/重新开始）。",
            family: "resumption (n.恢复/再开) | resuming (v-ing恢复) | extinguishment (n.熄灭) | filing (n.归档)。",
            details: "resumption of operations 属于商业合同与运营极高频短语，意为业务恢复运作。resumption 较 resuming 更具正式名词规范性。",
            cn: "在劳资纠纷解决之后，工厂管理层宣布立即恢复生产作业。",
            jp: "労働争議の解決を受けて、工場の経営陣は製造業務の即時再開（resumption）を発表しました。"
        }
    },
    {
        id: 17,
        target: "optimal",
        category: "困难",
        stem: "To ensure that server resources are utilized ________, the IT department configured automated load-balancing algorithms.",
        options: ["optimally", "optimal", "optimize", "crisply"],
        correct: "optimally",
        explanations: {
            guide: "副词修饰被动语态动词。are utilized ________ 结构中，需要副词修饰过去分词 utilized，表达资源得到“最优化地/最理想地”利用，选 optimally。",
            family: "optimally (adv.最优地/最理想地) | optimal (adj.最优的) | optimize (v.优化) | crisply (adv.清晰地)。",
            details: "utilized optimally 意为得到最优利用。optimal 是形容词，optimize 是动词，均不能在句中充当修饰分词 utilized 的状语。",
            cn: "为确保服务器资源得到最优化利用，IT 部门配置了自动化负载均衡算法。",
            jp: "サーバーリソースが最適に（optimally）利用されるようにするため、IT部門は自動負荷分散アルゴリズムを設定しました。"
        }
    },
    {
        id: 18,
        target: "peeling",
        category: "困难",
        stem: "Quality inspectors rejected the shipment of metal parts due to noticeable paint ________ along the welded seams.",
        options: ["peeling", "peeled", "cascades", "filings"],
        correct: "peeling",
        explanations: {
            guide: "动名词/名词质检考点。noticeable paint ________ 结合焊接接缝处漆面脱落，选动名词/名词形式 peeling（剥落/起皮）。",
            family: "peeling (n./v-ing剥落/起皮) | peeled (v-ed去皮的) | cascades (n.瀑布) | filings (n.文件)。",
            details: "paint peeling 意为油漆剥落/脱落。peeled 是过去分词，不能跟在名词 paint 后面构成表达“油漆起皮剥落这一缺陷现象”的复合名词短语。",
            cn: "质量检验员因焊接接缝处存在明显的油漆剥落缺陷而拒收了这批金属零件。",
            jp: "品質検査官は、溶接部に沿って顕著な塗装の剥がれ（peeling）があったため、金属部品の出荷を不合格としました。"
        }
    }
];