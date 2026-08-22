// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data801-810.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "trolley tracks",
        pos: "名",
        ipa: "/ˈtrɑːli træks/",
        cn: "有轨电车轨道，电车铁轨（复数）",
        jp: "路面電車の線路、トロリー軌道（複数）",
        family: "trolley / track / tracks",
        tips: "市政交通与Part 1高频：cross trolley tracks carefully（小心穿过有轨电车轨道），slippery trolley tracks（湿滑的电车铁轨）。",
        desc: "Drivers crossed the trolley tracks."
    },
    {
        word: "uniformly",
        pos: "副",
        ipa: "/ˈjuːnɪfɔːrmli/",
        cn: "均匀地，一致地，一律地",
        jp: "均一に、一様に、一律に",
        family: "uniform / uniformity / uniformed",
        tips: "规章执行与生产质检高频：applied/enforced uniformly（统一适用/执行），distributed uniformly（均匀分布）。",
        desc: "Policies apply uniformly to all."
    },
    {
        word: "metallurgists",
        pos: "名",
        ipa: "/ˈmetəlɜːrdʒɪsts/",
        cn: "冶金学家，冶金工程师（复数）",
        jp: "冶金学者、金属工学技術者（複数）",
        family: "metallurgist / metallurgy / metallurgical",
        tips: "工业制造与材料质检高频：certified metallurgists（注册冶金工程师），metallurgists inspect alloy composition（冶金工程师检测合金成分）。",
        desc: "Metallurgists tested the new alloy."
    },
    {
        word: "polymer",
        pos: "名",
        ipa: "/ˈpɑːlɪmər/",
        cn: "聚合物，高分子材料",
        jp: "ポリマー、重合体、高分子化合物",
        family: "polymers / polymeric / polymerization",
        tips: "材料科学与制造高频：protective polymer coating（聚合物保护涂层），synthetic polymer materials（合成高分子材料）。",
        desc: "The pipe has a polymer coating."
    },
    {
        word: "humid",
        pos: "形",
        ipa: "/ˈhjuːmɪd/",
        cn: "潮湿的，湿热的",
        jp: "湿気の多い、湿度の高い",
        family: "humidity / humidify / humidifier",
        tips: "天气与仓储环境高频：hot and humid climate（湿热气候），humid warehouse conditions（潮湿的仓库环境）。",
        desc: "Summers here are hot and humid."
    },
    {
        word: "trailers",
        pos: "名",
        ipa: "/ˈtreɪlərz/",
        cn: "挂车，拖车，货运挂车（复数）",
        jp: "トレーラー、牽引車（複数）",
        family: "trailer / trail / trailing",
        tips: "物流货运与运输高频：flatbed/freight trailers（平板/货运挂车），tractor-trailers（半挂牵引车）。",
        desc: "Crates were loaded onto trailers."
    },
    {
        word: "flatbed",
        pos: "名/形",
        ipa: "/ˈflætbed/",
        cn: "平板卡车，平板拖车；平板式的",
        jp: "平ボディトラック、平床式の",
        family: "flatbeds",
        tips: "重型货运与物流高频：flatbed truck/trailer（平板货车/挂车），flatbed transport（平板式运输）。",
        desc: "The flatbed truck carried machinery."
    },
    {
        word: "rustic",
        pos: "形",
        ipa: "/ˈrʌstɪk/",
        cn: "乡村风味的，质朴的，粗朴的",
        jp: "素朴な、田舎風の",
        family: "rustically / rusticity",
        tips: "装潢风格与文旅高频：rustic decor/charm（乡村风情装饰/质朴魅力），rustic wooden furniture（质朴的木质家具）。",
        desc: "The cafe features rustic wooden decor."
    },
    {
        word: "neatly",
        pos: "副",
        ipa: "/ˈniːtli/",
        cn: "整洁地，整齐地，井井有条地",
        jp: "きちんと、整然と、こぎれいに",
        family: "neat / neatness",
        tips: "Part 1 & 办公陈列高频：arranged/stacked neatly（整齐排列/堆放），folded neatly（叠得整整齐齐）。",
        desc: "Documents are stacked neatly on desks."
    },
    {
        word: "blizzard",
        pos: "名",
        ipa: "/ˈblɪzərd/",
        cn: "暴风雪，大风雪",
        jp: "猛吹雪、大雪",
        family: "blizzards",
        tips: "天气警报与延误高频：severe winter blizzard（严重的冬季暴风雪），blizzard warning/delays（暴风雪预警/延误）。",
        desc: "Flights were canceled during the blizzard."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "humid",
        category: "简单",
        stem: "During the summer months, the warehouse uses industrial dehumidifiers to protect sensitive electronic components from the hot and ________ air.",
        options: ["humid", "rustic", "neatly", "flatbed"],
        correct: "humid",
        explanations: {
            guide: "环境气候修饰形容词。hot and ________ air 结合使用除湿机保护精密电子元器件，选 humid（潮湿的/湿热的）。",
            family: "humid (adj.潮湿的) | rustic (adj.乡村风味的) | neatly (adv.整齐地) | flatbed (n.平板车)。",
            details: "hot and humid air 意为湿热空气。rustic（质朴的）与 flatbed（平板式的）均无法修饰空气温湿度。",
            cn: "在夏季月份，仓库使用工业除湿机以保护敏感电子元器件免受湿热空气的影响。",
            jp: "夏季の間、倉庫は高温多湿な（humid）空気から精密な電子部品を保護するために工業用除湿機を使用しています。"
        }
    },
    {
        id: 2,
        target: "neatly",
        category: "简单",
        stem: "The administrative assistant organized all office supplies and printer cartridges ________ inside the storage cabinet.",
        options: ["neatly", "humid", "rustic", "blizzard"],
        correct: "neatly",
        explanations: {
            guide: "副词修饰动词考点。organized office supplies ________ 结构中，需要副词修饰动词 organized，表达将办公用品“整齐地/井井有条地”收纳整理，选 neatly。",
            family: "neatly (adv.整洁地/整齐地) | humid (adj.潮湿的) | rustic (adj.乡村的) | blizzard (n.暴风雪)。",
            details: "organized neatly 属于 Part 1 及日常办公高频动副搭配。humid 与 rustic 是形容词，blizzard 是名词，均不能作修饰动词的状语。",
            cn: "行政助理将所有办公用品和打印机墨盒整齐地整理在储物柜内。",
            jp: "管理アシスタントは、すべての事務用品とプリンターカートリッジを保管キャビネットの中にきちんと（neatly）整理しました。"
        }
    },
    {
        id: 3,
        target: "blizzard",
        category: "简单",
        stem: "All regional commercial flights were grounded after maritime meteorological agencies issued a severe winter ________ warning.",
        options: ["blizzard", "polymer", "flatbed", "metallurgist"],
        correct: "blizzard",
        explanations: {
            guide: "气象灾害名词考点。winter ________ warning 结合所有商业航班停飞，选 blizzard（暴风雪/大风雪）。",
            family: "blizzard (n.暴风雪) | polymer (n.聚合物) | flatbed (n.平板车) | metallurgist (n.冶金学家)。",
            details: "winter blizzard 意为冬季暴风雪。polymer（高分子材料）、flatbed（平板车）均非导致航班停飞的气象预警名称。",
            cn: "在气象部门发布严重的冬季暴风雪预警后，所有区域商业航班全部停飞。",
            jp: "気象機関が厳しい冬の猛吹雪（blizzard）警報を発令した後、すべての地域の商業フライトが欠航となりました。"
        }
    },
    {
        id: 4,
        target: "rustic",
        category: "简单",
        stem: "The boutique countryside inn attracts travelers looking for a cozy atmosphere and charming ________ wooden decor.",
        options: ["rustic", "humid", "neatly", "uniformly"],
        correct: "rustic",
        explanations: {
            guide: "建筑与装潢风格修饰形容词。charming ________ wooden decor 结合乡间客栈温馨质朴的氛围，选 rustic（乡村风味的/质朴的）。",
            family: "rustic (adj.乡村风味的/质朴的) | humid (adj.潮湿的) | neatly (adv.整齐地) | uniformly (adv.均匀地)。",
            details: "rustic wooden decor 意为质朴的木质装饰风格。humid（潮湿的）不合客栈舒适温馨的褒义宣传语境。",
            cn: "这家精品乡村客栈吸引着寻求温馨氛围和迷人质朴木质装饰风格的旅客。",
            jp: "その田舎のブティック宿は、居心地の良い雰囲気と魅力的な素朴な/田舎風の（rustic）木製装飾を求める旅行者を惹きつけています。"
        }
    },
    {
        id: 5,
        target: "flatbed",
        category: "简单",
        stem: "Heavy construction machinery was securely strapped onto a large ________ truck for long-distance highway transit.",
        options: ["flatbed", "blizzard", "metallurgist", "trolley track"],
        correct: "flatbed",
        explanations: {
            guide: "货运车辆前置定语。a large ________ truck 结合捆绑固定大型重型工程机械进行公路运输，选 flatbed（平板式的/平板卡车）。",
            family: "flatbed (adj./n.平板卡车/平板的) | blizzard (n.暴风雪) | metallurgist (n.冶金师) | trolley track (n.电车轨道)。",
            details: "flatbed truck 专指平板货车。blizzard（暴风雪）、metallurgist（冶金工程师）均不能作修饰重载运输车辆的名词定语。",
            cn: "重型建筑机械被牢固地捆绑在一辆大型平板卡车上，用于长途公路运输。",
            jp: "長距離の高速道路輸送のため、重い建設機械が大型平ボディ（flatbed）トラックの上にしっかりと固定されました。"
        }
    },
    {
        id: 6,
        target: "polymer",
        category: "简单",
        stem: "Engineers applied a protective ________ coating to the industrial steel pipes to prevent chemical corrosion.",
        options: ["polymer", "blizzard", "rustic", "trolley track"],
        correct: "polymer",
        explanations: {
            guide: "防腐材料名词作定语。a protective ________ coating 结合在工业钢管表面涂覆以防止化学腐蚀，选 polymer（聚合物/高分子材料）。",
            family: "polymer (n.聚合物/高分子) | blizzard (n.暴风雪) | rustic (adj.乡村的) | trolley track (n.电车轨道)。",
            details: "polymer coating 意为聚合物防腐涂层。blizzard（暴风雪）、trolley track（铁轨）均非涂覆在管道表面的化工防护材质。",
            cn: "工程师在工业钢管表面涂覆了一层聚合物保护涂层，以防止化学腐蚀。",
            jp: "エンジニアは、化学的腐食を防ぐために工業用鋼管に保護用ポリマー（polymer）コーティングを施しました。"
        }
    },
    {
        id: 7,
        target: "uniformly",
        category: "中等",
        stem: "Corporate compliance guidelines must be enforced ________ across all regional branch offices without exception.",
        options: ["uniformly", "rustically", "neatly", "humidly"],
        correct: "uniformly",
        explanations: {
            guide: "规章执行修饰副词。enforced ________ across all branches without exception 结合在所有分公司一律无例外地贯彻执行，选 uniformly（一律地/一致地）。",
            family: "uniformly (adv.一律地/一致地) | rustically (adv.粗朴地) | neatly (adv.整洁地) | humidly (adv.潮湿地)。",
            details: "enforced uniformly 属于企业合规管理高频动副搭配，意为统一/一律执行。neatly（整洁地）修饰法规执行不通。",
            cn: "公司合规准则必须在所有区域分公司一律严格执行，概无例外。",
            jp: "企業のコンプライアンスガイドラインは、例外なくすべての地域支社全体で一律に/均一に（uniformly）施行されなければなりません。"
        }
    },
    {
        id: 8,
        target: "trolley tracks",
        category: "中等",
        stem: "Motorists and cyclists are urged to reduce speed when navigating across the wet ________ during morning rush hour.",
        options: ["trolley tracks", "metallurgists", "polymers", "blizzards"],
        correct: "trolley tracks",
        explanations: {
            guide: "市政交通设施名词复数。navigating across the wet ________ 结合早高峰过马路减速避滑，选 trolley tracks（有轨电车铁轨）。",
            family: "trolley tracks (n.有轨电车铁轨复数) | metallurgists (n.冶金学家) | polymers (n.聚合物) | blizzards (n.暴风雪)。",
            details: "wet trolley tracks 意为湿滑的有轨电车轨道。metallurgists（冶金师）、polymers（聚合物）均非机动车和自行车横穿通行的路面设施。",
            cn: "提醒机动车驾驶员和骑行者在早高峰期间穿过湿滑的有轨电车铁轨时减速慢行。",
            jp: "ドライバーやサイクリストは、朝のラッシュアワー時に濡れた路面電車の線路（trolley tracks）を横断する際、減速するよう促されています。"
        }
    },
    {
        id: 9,
        target: "metallurgists",
        category: "中等",
        stem: "A certified team of ________ conducted advanced stress tests on the titanium alloy to verify its structural integrity.",
        options: ["metallurgists", "trailers", "flatbeds", "blizzards"],
        correct: "metallurgists",
        explanations: {
            guide: "专业技术人员名词复数。A certified team of ________ conducted stress tests on the alloy 结合对钛合金进行应力测试的专业团队主体，选 metallurgists（冶金工程师/冶金学家）。",
            family: "metallurgists (n.复数冶金学家/工程师) | trailers (n.拖车) | flatbeds (n.平板车) | blizzards (n.暴风雪)。",
            details: "team of metallurgists 意为冶金工程师团队。trailers（挂车）、flatbeds（平板车）均非执行金属力学检测的科研专家人员。",
            cn: "一支经过认证的冶金工程师团队对该钛合金进行了高级应力测试，以验证其结构完整性。",
            jp: "認定された冶金技術者（metallurgists）のチームが、チタン合金の構造的完全性を検証するために高度な応力テストを実施しました。"
        }
    },
    {
        id: 10,
        target: "trailers",
        category: "中等",
        stem: "The logistics provider invested in fifteen refrigerated ________ to transport fresh dairy products across regional markets.",
        options: ["trailers", "metallurgists", "polymers", "blizzards"],
        correct: "trailers",
        explanations: {
            guide: "物流冷链运输车辆复数。fifteen refrigerated ________ to transport dairy products 结合物流公司采购冷藏设备跨区域运送乳制品，选 trailers（货运挂车/冷藏拖车）。",
            family: "trailers (n.复数货运挂车/拖车) | metallurgists (n.冶金师) | polymers (n.聚合物) | blizzards (n.暴风雪)。",
            details: "refrigerated trailers 专指冷藏货运挂车。metallurgists（冶金人员）、polymers（聚合物）均非装载运输乳制品的货运车厢容器。",
            cn: "该物流供应商投资购置了十五辆冷藏货运挂车，用于跨区域市场运送新鲜乳制品。",
            jp: "その物流業者は、地域市場全体に新鮮な乳製品を輸送するために15台の冷蔵トレーラー（trailers）に投資しました。"
        }
    },
    {
        id: 11,
        target: "humid",
        category: "中等",
        stem: "The pharmaceutical storage facility maintains low levels of ________ to prevent sensitive chemical capsules from degrading.",
        options: ["humidity", "humid", "humidify", "humidly"],
        correct: "humidity",
        explanations: {
            guide: "派生抽象名词作宾语。maintains low levels of ________ 结构中，介词 of 后面接抽象名词形式 humidity（湿度/潮湿）。",
            family: "humidity (n.湿度/潮湿) | humid (adj.潮湿的) | humidify (v.加湿) | humidly (adv.潮湿地)。",
            details: "low levels of humidity 意为低湿度水平。humid 是形容词，humidify 是动词，均不能直接作介词 of 的中心名词。",
            cn: "该药品仓储设施保持较低的湿度水平，以防止敏感的化学胶囊变质降解。",
            jp: "医薬品保管施設は、繊細な化学カプセルの劣化を防ぐために低い湿度（humidity）レベルを維持しています。"
        }
    },
    {
        id: 12,
        target: "neatly",
        category: "中等",
        stem: "The director commended the design team for delivering a clean and ________ presentation binder to the prospective client.",
        options: ["neat", "neatly", "neatness", "rustic"],
        correct: "neat",
        explanations: {
            guide: "修饰名词的前置形容词。a clean and ________ presentation binder 结构中，与形容词 clean 并列修饰 binder（活页夹/材料册），选形容词 neat（整洁的/利落的）。",
            family: "neat (adj.整洁的/整齐的) | neatly (adv.整洁地) | neatness (n.整洁) | rustic (adj.质朴的)。",
            details: "a clean and neat binder 意为干净整洁的提案册。neatly 是副词，neatness 是名词，均不能在此充当修饰 binder 的并列前置定语。",
            cn: "总监称赞设计团队向潜在客户提交了一份干净整洁的展示活页材料册。",
            jp: "ディレクターは、見込み顧客に清潔できちんとした（neat）プレゼンテーションバインダーを提出したデザインチームを称賛しました。"
        }
    },
    {
        id: 13,
        target: "uniformly",
        category: "困难",
        stem: "Quality control inspectors monitor assembly lines continuously to maintain the highest standard of product ________.",
        options: ["uniformity", "uniformly", "uniform", "uniformed"],
        correct: "uniformity",
        explanations: {
            guide: "派生抽象名词作介词宾语。standard of product ________ 结构中，名词定语 product 后面接抽象名词形式 uniformity（一致性/均匀性/规格统一）。",
            family: "uniformity (n.一致性/均匀度) | uniformly (adv.均匀地) | uniform (adj.一致的/n.制服) | uniformed (adj.穿制服的)。",
            details: "product uniformity 属于工业质检专属术语，意为产品规格/质量的一致性。uniformly 是副词，不能作介词 of 的中心名词。",
            cn: "质量控制检验员持续监控流水线，以保持最高标准的产品质量一致性。",
            jp: "品質管理検査官は、最高水準の製品の均一性/一貫性（uniformity）を維持するために組み立てラインを継続的に監視しています。"
        }
    },
    {
        id: 14,
        target: "metallurgists",
        category: "困难",
        stem: "The load-bearing steel beam failed during stress testing due to an undetected ________ flaw within the alloy structure.",
        options: ["metallurgical", "metallurgist", "metallurgy", "metallurgists"],
        correct: "metallurgical",
        explanations: {
            guide: "修饰名词的派生形容词考点。an undetected ________ flaw 结构中，修饰 flaw（缺陷/瑕疵），选派生专业形容词 metallurgical（冶金学上的/金属结构的）。",
            family: "metallurgical (adj.冶金学的/金属加工的) | metallurgist (n.冶金师) | metallurgy (n.冶金学) | metallurgists (n.复数)。",
            details: "metallurgical flaw 意为冶金/金相结构缺陷。metallurgist 和 metallurgy 是名词，不能直接充当前置定语修饰 flaw。",
            cn: "承重钢梁在应力测试中发生断裂，原因是合金结构内部存在未被检测出的冶金学缺陷。",
            jp: "耐力鋼梁は、合金構造内の検出されなかった冶金学的（metallurgical）欠陥のため、応力テスト中に破損しました。"
        }
    },
    {
        id: 15,
        target: "polymer",
        category: "困难",
        stem: "Chemical engineers carefully regulated temperature and pressure to accelerate the ________ process during plastic manufacturing.",
        options: ["polymerization", "polymer", "polymeric", "polymers"],
        correct: "polymerization",
        explanations: {
            guide: "化工反应过程名词作定语/主语。the ________ process 结构中，结合控制温湿度以加速塑料制造中的“聚合反应”过程，选派生过程名词 polymerization（聚合/聚合反应）。",
            family: "polymerization (n.聚合反应/聚合过程) | polymer (n.聚合物) | polymeric (adj.聚合的) | polymers (n.复数)。",
            details: "polymerization process 属于化工制造标准专有名词，意为聚合反应过程。polymer 指聚合产物实体本身，表示化学反应过程时需用 polymerization。",
            cn: "化学工程师精确调节温度和压力，以加快塑料制造过程中的聚合反应进程。",
            jp: "化学エンジニアは、プラスチック製造中の重合/ポリマー化（polymerization）プロセスを加速するために温度と圧力を慎重に調整しました。"
        }
    },
    {
        id: 16,
        target: "rustic",
        category: "困难",
        stem: "International tourists are drawn to the authentic ________ of the rural village's centuries-old stone architecture.",
        options: ["rusticity", "rustic", "rustically", "neatly"],
        correct: "rusticity",
        explanations: {
            guide: "派生抽象名词作介词宾语。the authentic ________ of the architecture 结构中，在定冠词 the 和形容词 authentic 后面接抽象名词形式 rusticity（质朴/乡村风情/古朴韵味）。",
            family: "rusticity (n.乡村风情/质朴/古拙) | rustic (adj.乡村的) | rustically (adv.古朴地) | neatly (adv.整洁地)。",
            details: "authentic rusticity 意为纯正的质朴古风。rustic 是形容词，不能直接跟在定冠词和形容词之后充当介词 of 前的名词中心语。",
            cn: "国际游客被这座乡村数百年历史的石头建筑所散发出的纯正古朴质感所深深吸引。",
            jp: "外国人観光客は、その農村の数百年の歴史を持つ石造り建築の本格的な素朴さ/田舎の風情（rusticity）に惹きつけられています。"
        }
    },
    {
        id: 17,
        target: "flatbed",
        category: "困难",
        stem: "Federal highway safety regulations mandate that oversized industrial equipment must be anchored to certified ________ prior to transit.",
        options: ["flatbeds", "polymers", "blizzards", "metallurgists"],
        correct: "flatbeds",
        explanations: {
            guide: "重载运输设备复数名词考点。anchored to certified ________ prior to transit 结合超大工业设备在转运前必须固定在认证平板挂车上，选 flatbeds（平板车/平板拖车复数）。",
            family: "flatbeds (n.平板拖车复数) | polymers (n.聚合物) | blizzards (n.暴风雪) | metallurgists (n.冶金师)。",
            details: "anchored to flatbeds 意为固定在平板运输车上。polymers（高分子）、blizzards（暴风雪）均非承载超大件货物的挂车底盘实体。",
            cn: "联邦公路安全法规强制要求，超限工业设备在运输前必须固定在经过认证的平板拖车上。",
            jp: "連邦高速道路安全規制により、特大の産業機器は輸送前に認定された平ボディトレーラー（flatbeds）に固定することが義務付けられています。"
        }
    },
    {
        id: 18,
        target: "trailers",
        category: "困难",
        stem: "Port authorities expanded highway access corridors to accommodate the high volume of heavy ________ delivering shipping containers.",
        options: ["tractor-trailers", "metallurgists", "polymers", "trolley tracks"],
        correct: "tractor-trailers",
        explanations: {
            guide: "集装箱重卡复合名词复数。delivering shipping containers 结合港口扩建道路以容纳大批运送集装箱的半挂重卡，选 tractor-trailers（半挂牵引集装箱卡车）。",
            family: "tractor-trailers (n.半挂牵引车复数) | metallurgists (n.冶金师) | polymers (n.聚合物) | trolley tracks (n.电车轨道)。",
            details: "tractor-trailers 属于港口与干线货运专属复合词，专指半挂式集装箱牵引卡车。metallurgists（冶金师）、polymers（聚合物）均无法充当送货的重卡主体。",
            cn: "港口当局扩建了公路进出通道，以容纳大量运送海运集装箱的重型半挂牵引车。",
            jp: "港湾当局は、輸送コンテナを配達する大量の大型セミトレーラー/牽引トラック（tractor-trailers）を収容するために高速道路アクセス回廊を拡張しました。"
        }
    }
];