// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data731-740.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "independently of",
        pos: "前置介詞短語",
        ipa: "/ˌɪndɪˈpendəntli əv/",
        cn: "独立于……，不受……支配/影响",
        jp: "〜から独立して、〜とは無関係に",
        family: "independent / independence / independently",
        tips: "企业合规与治理高频：act independently of management（独立于管理层行事），operate independently of outside factors（不受外部因素影响独立运作）。",
        desc: "The auditor acts independently of the firm."
    },
    {
        word: "peeling",
        pos: "形/動/名",
        ipa: "/ˈpiːlɪŋ/",
        cn: "剥落的，脱皮的；剥落，起皮",
        jp: "（塗料などが）剥がれ落ちている；剥離、皮むき",
        family: "peel / peeled / peeler",
        tips: "设施维保与质检高频：peeling paint/wallpaper（剥落的墙漆/脱落的壁纸），prevent paint peeling（防止油漆起皮剥落）。",
        desc: "Repaint the peeling wall paint immediately."
    },
    {
        word: "cascades",
        pos: "動/名",
        ipa: "/kæˈskeɪdz/",
        cn: "层叠传递，传导；小瀑布，级联（单三/复数）",
        jp: "連鎖的に伝わる、次々と流れる；連鎖、小滝（複数）",
        family: "cascade / cascaded / cascading",
        tips: "管理与IT高频：information cascades down to teams（信息层层传达给团队），cascades of data（瀑布式数据流）。",
        desc: "Information cascades down to all staff."
    },
    {
        word: "welded",
        pos: "形/動",
        ipa: "/ˈweldɪd/",
        cn: "焊接的，熔接的；焊接（weld的过去式/分词）",
        jp: "溶接された、しっかりと結合した",
        family: "weld / welder / welding",
        tips: "制造与施工工程高频：welded steel joints/beams（焊接钢接头/钢梁），securely welded seams（牢固焊接的接缝）。",
        desc: "Inspect the welded metal joints carefully."
    },
    {
        word: "seams",
        pos: "名",
        ipa: "/siːmz/",
        cn: "接缝，接合处，缝合线（复数）",
        jp: "継ぎ目、縫い目、接合部（複数）",
        family: "seam / seamless / seamlessly",
        tips: "质检与服装制造高频：welded/pipe seams（焊接接缝/管道接合部），reinforced seams（加固缝合线）。",
        desc: "Inspect all seams for structural flaws."
    },
    {
        word: "cascading",
        pos: "形/動",
        ipa: "/kæˈskeɪdɪŋ/",
        cn: "连锁的，层叠的，连环的",
        jp: "連鎖的な、雪崩式の、次々と伝わる",
        family: "cascade / cascades / cascaded",
        tips: "风险与系统工程高频：cascading failures/effects（连锁故障/连锁反应），cascading power outages（连环停电）。",
        desc: "A failure caused cascading system errors."
    },
    {
        word: "substation",
        pos: "名",
        ipa: "/ˈsʌbsteɪʃn/",
        cn: "变电站，分电站；分局",
        jp: "変電所、サブステーション、分署",
        family: "station / substations",
        tips: "公共事业与电力设施高频：electrical/power substation（变电站），substation maintenance（变电站维护）。",
        desc: "Engineers repaired the power substation."
    },
    {
        word: "optimally",
        pos: "副",
        ipa: "/ˈɑːptɪməli/",
        cn: "最优地，最理想地，最高效地",
        jp: "最適に、最も効率的に",
        family: "optimal / optimize / optimum",
        tips: "运营与系统性能高频：function/perform optimally（发挥最佳性能/最优运转），allocate resources optimally（最优化分配资源）。",
        desc: "Ensure all servers function optimally."
    },
    {
        word: "rendering",
        pos: "動/名",
        ipa: "/ˈrendərɪŋ/",
        cn: "呈现，渲染；效果图；提供（render的动名词/分词）",
        jp: "表現、レンダリング、完成予想図、提供",
        family: "render / rendered / renders",
        tips: "IT设计与商务高频：architectural rendering（建筑效果图），rendering assistance/services（提供援助/服务），rendering graphics（渲染图像）。",
        desc: "The architect presented a 3D rendering."
    },
    {
        word: "savory",
        pos: "形",
        ipa: "/ˈseɪvəri/",
        cn: "咸味的，咸香可口的，风味浓郁的",
        jp: "塩味の効いた、香ばしい、風味豊かな",
        family: "savor / unsavory / savoriness",
        tips: "餐饮与食品高频：savory dishes/pastries/snacks（咸香菜肴/咸味糕点/咸味小吃），sweet and savory options（甜咸两类选择）。",
        desc: "The bakery offers sweet and savory pies."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "savory",
        category: "简单",
        stem: "The catering menu includes a wide assortment of both sweet desserts and ________ pastries for the reception.",
        options: ["savory", "welded", "peeling", "cascading"],
        correct: "savory",
        explanations: {
            guide: "餐饮食品修饰形容词。与 sweet desserts 并列对比，修饰糕点，表达“咸香可口的/咸味的”，选 savory。",
            family: "savory (adj.咸香的/美味的) | welded (adj.焊接的) | peeling (adj.剥落的) | cascading (adj.连锁的)。",
            details: "sweet and savory 属于餐饮款待业最经典固定搭配，意为甜味与咸味兼备。welded（焊接的）、peeling（脱皮的）不符合点心属性。",
            cn: "招待会的餐饮菜单包含了品种丰富的甜品与咸香糕点。",
            jp: "レセプションのケータリングメニューには、甘いデザートと塩味の効いた（savory）ペストリーの両方が豊富に取りそろえられています。"
        }
    },
    {
        id: 2,
        target: "substation",
        category: "简单",
        stem: "Utility technicians were dispatched immediately to the local electrical ________ to repair damaged transformers.",
        options: ["substation", "seam", "rendering", "savory"],
        correct: "substation",
        explanations: {
            guide: "电力设施名词考点。electrical ________ 结合电力技术人员赶赴现场抢修变压器（repair transformers），选 substation（变电站）。",
            family: "substation (n.变电站) | seam (n.接缝) | rendering (n.效果图) | savory (adj.咸香的)。",
            details: "electrical substation 专指变电站。seam（接缝）、rendering（渲染图）均非安装大型变压器的公用电力设施实体。",
            cn: "电力技术人员被立即派往当地变电站以抢修损坏的变压器。",
            jp: "損傷した変圧器を修理するため、電力会社の技術者が地元の変電所（substation）に直ちに派遣されました。"
        }
    },
    {
        id: 3,
        target: "welded",
        category: "简单",
        stem: "Construction safety inspectors checked the ________ steel joints to ensure the building frame could withstand heavy winds.",
        options: ["welded", "savory", "peeling", "optimally"],
        correct: "welded",
        explanations: {
            guide: "建筑钢结构修饰形容词。the ________ steel joints 结合确保建筑钢框架能够抵御大风，选 welded（焊接的）。",
            family: "welded (adj.焊接的/熔接的) | savory (adj.咸香的) | peeling (adj.剥落的) | optimally (adv.最优地)。",
            details: "welded steel joints 意为焊接钢接头。savory（咸香的）与 optimally（副词）均无法修饰建筑钢材节点的物理结构。",
            cn: "建筑安全检查员检查了焊接钢接头，以确保建筑框架能够抵御强风。",
            jp: "建設安全検査官は、建物の骨組みが強風に耐えられることを確認するために、溶接された（welded）鋼鉄製の接合部を点検しました。"
        }
    },
    {
        id: 4,
        target: "peeling",
        category: "简单",
        stem: "Facilities maintenance scheduled a painter to scrape off and touch up the ________ paint in the main lobby.",
        options: ["peeling", "savory", "welded", "cascading"],
        correct: "peeling",
        explanations: {
            guide: "墙面维保修饰分词/形容词。the ________ paint 结合安排油漆工铲除并补漆（scrape off and touch up），选 peeling（剥落的/起皮的）。",
            family: "peeling (adj./v-ing剥落的) | savory (adj.美味的) | welded (adj.焊接的) | cascading (adj.层叠的)。",
            details: "peeling paint 属于设施保洁维保高频词组，意为剥落起皮的油漆。savory（咸香的）不合建筑墙漆语境。",
            cn: "后勤设施部门安排了一名油漆工，以刮除并修补主大厅内剥落的墙漆。",
            jp: "施設保守部門は、メインロビーの剥がれ落ちている（peeling）塗料を削り落として補修するために塗装工を手配しました。"
        }
    },
    {
        id: 5,
        target: "seams",
        category: "简单",
        stem: "The quality assurance team carefully inspected all fabric ________ on the waterproof outdoor jackets for defects.",
        options: ["seams", "substations", "cascades", "renderings"],
        correct: "seams",
        explanations: {
            guide: "服装加工质检名词复数。fabric ________ on waterproof jackets 结合检查防水户外夹克的缝合缺陷，选 seams（接缝/缝合线）。",
            family: "seams (n.复数接缝/缝合线) | substations (n.变电站) | cascades (n.瀑布/级联) | renderings (n.效果图)。",
            details: "fabric seams 意为织物接缝。substations（变电站）、renderings（效果图）均非服装制造加工中需要排查瑕疵的缝线位置。",
            cn: "质量保证团队仔细检查了防水户外夹克上的所有织物接缝，以排查是否存在缺陷。",
            jp: "品質保証チームは、欠陥がないか防水アウトドアジャケットのすべての布地の縫い目/継ぎ目（seams）を慎重に検査しました。"
        }
    },
    {
        id: 6,
        target: "optimally",
        category: "简单",
        stem: "To ensure that office heating systems perform ________, technicians clean air filters every month.",
        options: ["optimally", "savory", "welded", "peeling"],
        correct: "optimally",
        explanations: {
            guide: "副词修饰动词考点。perform ________ 结构中，需要副词修饰动词 perform，表达供暖系统“最优地/最高效地”运行，选 optimally。",
            family: "optimally (adv.最优地/最理想地) | savory (adj.咸香的) | welded (adj.焊接的) | peeling (adj.剥落的)。",
            details: "perform optimally 属于托业设备运行高频动副搭配，意为以最佳状态运转。其余三项均为形容词，不能直接修饰动词 perform。",
            cn: "为了确保办公室供暖系统保持最佳状态运行，技术人员每月都会清洁空气滤网。",
            jp: "オフィスの暖房システムが最適に（optimally）機能することを確実にするため、技術者は毎月エアフィルターを清掃しています。"
        }
    },
    {
        id: 7,
        target: "independently of",
        category: "中等",
        stem: "The corporate ethics oversight board operates ________ executive management to ensure impartial investigations.",
        options: ["independently of", "cascading from", "welded to", "optimally with"],
        correct: "independently of",
        explanations: {
            guide: "企业治理前置介词短语考点。operates ________ executive management 结合确保调查公正无偏（impartial），选 independently of（独立于……/不受……干涉）。",
            family: "independently of (prep.独立于…/不受…支配) | cascading from (短语.从…层叠) | welded to (短语.焊接在…上) | optimally with (短语.最佳地配合)。",
            details: "operate independently of management 属于公司治理极高频表达，意为独立于管理层进行运作。其余选项均无独立合规运作之意。",
            cn: "企业道德监督委员会独立于执行管理层运作，以确保调查的客观公正。",
            jp: "企業の倫理監視委員会は、公平な調査を確保するために経営陣から独立して（independently of）業務を行っています。"
        }
    },
    {
        id: 8,
        target: "cascading",
        category: "中等",
        stem: "A software glitch in the primary server triggered a ________ series of automated system reboots across the network.",
        options: ["cascading", "savory", "welded", "peeling"],
        correct: "cascading",
        explanations: {
            guide: "连锁反应修饰分词/形容词。a ________ series of reboots 结合主服务器故障引发全网一系列“连锁/连环”重启，选 cascading。",
            family: "cascading (adj./v-ing连锁的/连环发生的) | savory (adj.咸味的) | welded (adj.焊接的) | peeling (adj.剥落的)。",
            details: "a cascading series of errors/failures 属于IT系统与风险管理核心搭配，意为连环发生的一系列故障。savory（美味的）不合故障语境。",
            cn: "主服务器中的一处软件故障引发了全网络一系列连锁自动化系统重启。",
            jp: "プライマリサーバーのソフトウェア障害により、ネットワーク全体で一連の連鎖的な（cascading）自動システム再起動が引き起こされました。"
        }
    },
    {
        id: 9,
        target: "rendering",
        category: "中等",
        stem: "The lead architect displayed a realistic 3D ________ of the proposed convention center during the press briefing.",
        options: ["rendering", "substation", "seam", "savory"],
        correct: "rendering",
        explanations: {
            guide: "建筑展示设计名词。a realistic 3D ________ of the proposed center 结合新闻发布会上展示拟建会议中心的三维设计立体图，选 rendering（效果图/三维渲染图）。",
            family: "rendering (n.效果图/渲染/呈现) | substation (n.变电站) | seam (n.接缝) | savory (adj.咸香的)。",
            details: "3D rendering 属于建筑与工程规划核心专有名词，意为三维效果图。substation（变电站）、seam（接缝）均非展示的设计图纸类型。",
            cn: "首席建筑师在新闻发布会上展示了拟建会议中心逼真的三维立体效果图。",
            jp: "主任建築家は記者会見中、提案されたコンベンションセンターのリアルな3D完成予想図/レンダリング（rendering）を公開しました。"
        }
    },
    {
        id: 10,
        target: "cascades",
        category: "中等",
        stem: "Executive leadership must ensure that strategic guidance ________ down effectively to all regional department heads.",
        options: ["cascades", "welds", "peels", "substations"],
        correct: "cascades",
        explanations: {
            guide: "管理信息自上而下传递动词。ensure that guidance ________ down to department heads 结合领导层的战略方针层层“下达/传递”，选 cascades。",
            family: "cascades (v-三单层叠传递) | welds (v-三单焊接) | peels (v-三单剥落) | substations (n.复数变电站)。",
            details: "information/guidance cascades down 意为信息自上而下逐级传达。welds（焊接）、peels（剥皮）无法用于管理信息的下达。",
            cn: "高层领导必须确保战略指导方针能够有效地下达传递给所有区域部门主管。",
            jp: "経営陣は、戦略的ガイダンスがすべての地域の部門長に効果的に伝達される（cascades down）ようにしなければなりません。"
        }
    },
    {
        id: 11,
        target: "rendering",
        category: "中等",
        stem: "The graphics card is specifically engineered to handle the rapid ________ of high-definition video animations.",
        options: ["rendering", "substation", "seam", "peeling"],
        correct: "rendering",
        explanations: {
            guide: "计算机图形渲染动名词。the rapid ________ of high-definition animations 结合显卡硬件用于高清视频动画的快速“渲染/生成”，选 rendering。",
            family: "rendering (n./v-ing渲染/呈现) | substation (n.变电站) | seam (n.接缝) | peeling (n.起皮)。",
            details: "rapid rendering of video 意为视频的高速渲染生成。substation（变电站）、seam（接缝）均非显卡处理的图形图像任务。",
            cn: "该显卡经过专门设计，能够处理高清视频动画的快速图形渲染。",
            jp: "そのグラフィックカードは、高解像度ビデオアニメーションの高速レンダリング/描画（rendering）を処理するために特別に設計されています。"
        }
    },
    {
        id: 12,
        target: "seams",
        category: "中等",
        stem: "During the hydrostatic pressure test, engineers checked for tiny leaks along the pipe's longitudinal ________.",
        options: ["seams", "substations", "renderings", "cascades"],
        correct: "seams",
        explanations: {
            guide: "管道工业制造名词复数。leaks along the pipe's longitudinal ________ 结合水压测试排查管道纵向“接缝/焊缝”处的泄漏，选 seams。",
            family: "seams (n.复数接缝/结合线) | substations (n.变电站) | renderings (n.效果图) | cascades (n.瀑布)。",
            details: "pipe seams 意为管道接缝/焊缝。substations（变电站）、renderings（效果图）均非管道结构上可能渗漏的缝隙部位。",
            cn: "在静水压测试期间，工程师检查了管道纵向接缝处是否存在微小泄漏。",
            jp: "静水圧試験中、エンジニアはパイプの縦方向の継ぎ目（seams）に沿って小さな漏れがないかを点検しました。"
        }
    },
    {
        id: 13,
        target: "welded",
        category: "困难",
        stem: "Certified metallurgists conducted ultrasonic inspections on the pipeline to ensure each joint was ________ securely.",
        options: ["welded", "welding", "welder", "weld"],
        correct: "welded",
        explanations: {
            guide: "被动语态过去分词考点。was ________ securely 结构中，在助动词 was 和副词 securely 之间接过去分词，表达每个管道接头都被牢固“焊接”，选 welded。",
            family: "welded (adj./v-ed被焊接的) | welding (n./v-ing焊接) | welder (n.焊工/焊机) | weld (v.原形)。",
            details: "was welded securely 意为被牢固地焊接。welder 是焊工或焊机设备，welding 是动名词，均不能作被动语态中的谓语分词。",
            cn: "注册冶金工程师对输油管道进行了超声波检测，以确保每个接头都得到了牢固焊接。",
            jp: "認定冶金技術者は、各接合部がしっかりと溶接されている（welded）ことを確認するために、パイプラインの超音波検査を実施しました。"
        }
    },
    {
        id: 14,
        target: "substation",
        category: "困难",
        stem: "A severe lightning strike disabled the regional power ________, leaving thousands of commercial properties without electricity.",
        options: ["substation", "rendering", "seam", "savory"],
        correct: "substation",
        explanations: {
            guide: "电网基础设施名词考点。disabled the regional power ________ 结合严重雷击击毁电网枢纽导致数千家商户停电，选 substation（变电站/变电所）。",
            family: "substation (n.变电站) | rendering (n.渲染/提供) | seam (n.接缝) | savory (adj.咸香的)。",
            details: "power substation 属于市政能源高频专有名词，意为变电站。rendering（效果图）、seam（接缝）均非遭雷击瘫痪导致大面积停电的电网设施。",
            cn: "一场严重的雷击导致区域变电站瘫痪，造成数千家商业场所断电。",
            jp: "激しい落雷により地域の変電所（substation）が機能停止し、何千もの商業施設が停電に見舞われました。"
        }
    },
    {
        id: 15,
        target: "optimally",
        category: "困难",
        stem: "The newly installed database balancing algorithm dynamically reallocates network traffic to achieve ________ operating efficiency.",
        options: ["optimal", "optimally", "optimize", "optimism"],
        correct: "optimal",
        explanations: {
            guide: "派生形容词修饰名词。achieve ________ operating efficiency 结构中，修饰 efficiency（效率），需要填入形容词，表达达到“最优/最理想的”运行效率，选 optimal。",
            family: "optimal (adj.最佳的/最优的) | optimally (adv.最优地) | optimize (v.优化) | optimism (n.乐观)。",
            details: "optimal efficiency 意为最优效率。optimally 是副词，不能充当名词 efficiency 的前置定语；optimize 是动词，optimism 是乐观心态。",
            cn: "新安装的数据库均衡算法能动态重新分配网络流量，以实现最佳运行效率。",
            jp: "新しく導入されたデータベースバランシングアルゴリズムは、最適（optimal）な運用効率を達成するためにネットワークトラフィックを動的に再配分します。"
        }
    },
    {
        id: 16,
        target: "independently of",
        category: "困难",
        stem: "The regional branch operates with complete financial ________ from the overseas parent corporation.",
        options: ["independence", "independently", "independent", "independency"],
        correct: "independence",
        explanations: {
            guide: "派生抽象名词作介词宾语。with complete financial ________ from... 结构中，形容词 financial 后面接抽象名词形式 independence（独立性/自主权）。",
            family: "independence (n.独立/自主) | independently (adv.独立地) | independent (adj.独立的) | independency (n.独立国)。",
            details: "financial independence 意为财务独立/自主。independently 是副词，independent 是形容词，均不能跟在形容词 financial 之后充当介词 with 的宾语中心语。",
            cn: "该区域分公司在财务上完全独立于海外母公司运作。",
            jp: "その地域支社は、海外の親会社から完全な財政的独立（independence）を保って運営されています。"
        }
    },
    {
        id: 17,
        target: "cascading",
        category: "困难",
        stem: "Grid operators implemented emergency load-shedding measures to prevent the regional power outage from ________ across neighboring states.",
        options: ["cascading", "cascaded", "cascades", "cascade"],
        correct: "cascading",
        explanations: {
            guide: "固定介词短语接动名词。prevent sth from ________ 结构中，介词 from 后面必须接动名词形式，表达防止停电事故“连锁蔓延/层叠扩散”至邻邦，选 cascading。",
            family: "cascading (v-ing连锁蔓延/扩散) | cascaded (v-ed过去式) | cascades (v-三单) | cascade (v.原形)。",
            details: "prevent outage from cascading 属于 prevent... from doing 结构，意为防止停电故障连锁扩散。cascaded 是过去式/分词，不能直接作介词 from 的动名词宾语。",
            cn: "电网调度人员实施了紧急减载措施，以防止区域停电事故连锁蔓延至邻近各州。",
            jp: "送電網の運用担当者は、地域の停電が隣接する州全体に連鎖拡大する（cascading）のを防ぐために、緊急の負荷遮断措置を実施しました。"
        }
    },
    {
        id: 18,
        target: "rendering",
        category: "困难",
        stem: "The non-profit legal foundation was widely commended for ________ pro bono advisory assistance to low-income families.",
        options: ["rendering", "rendered", "renders", "render"],
        correct: "rendering",
        explanations: {
            guide: "介词后动名词考点（render 商务引申义）。commended for ________ pro bono assistance 结构中，介词 for 后面接动名词，表达因向低收入家庭“提供/给予”免费公益咨询援助而受到赞扬，选 rendering。",
            family: "rendering (v-ing提供/呈现) | rendered (v-ed) | renders (v-三单) | render (v.提供/致使)。",
            details: "rendering assistance 属于商务法务高阶动宾短语，意为提供援助（render help/assistance/services）。介词 for 之后必须使用动名词形式 rendering。",
            cn: "该非营利法律基金会因向低收入家庭提供公益咨询援助而广受赞誉。",
            jp: "その非営利法律財団は、低所得家庭にプロボノ（無償）の助言支援を提供した（rendering）ことで広く称賛されました。"
        }
    }
];