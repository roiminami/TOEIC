// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data741-750.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "flaky",
        pos: "形",
        ipa: "/ˈfleɪki/",
        cn: "酥脆的，层状起酥的，易剥落的",
        jp: "サクサクした、薄片状の、剥がれやすい",
        family: "flake / flakes / flakiness",
        tips: "餐饮烘焙与质检高频：flaky pastry crust（酥脆的糕点皮），flaky paint texture（起皮剥落的油漆质感）。",
        desc: "The pastry has a crisp, flaky crust."
    },
    {
        word: "bakery",
        pos: "名",
        ipa: "/ˈbeɪkəri/",
        cn: "面包烘焙坊，面包店，面包房",
        jp: "ベーカリー、パン屋、製パン所",
        family: "bake / baker / baked / baking",
        tips: "餐饮零售与生活服务高频：artisan bakery（手作面包坊），bakery goods/chef（烘焙食品/糕点师）。",
        desc: "The local bakery opens at dawn."
    },
    {
        word: "sourdough",
        pos: "名/形",
        ipa: "/ˈsaʊərdoʊ/",
        cn: "酸酵面团，天然酵母酸面包",
        jp: "サワードウ、天然酵母種パン",
        family: "sour / dough / sourdoughs",
        tips: "餐饮与食品零售高频：sourdough bread/crust（酸酵母面包/外皮），artisan sourdough loaf（手工酸种面包）。",
        desc: "They specialize in artisan sourdough bread."
    },
    {
        word: "scrape off",
        pos: "動詞短語",
        ipa: "/skreɪp ɔːf/",
        cn: "刮掉，刮除，擦去",
        jp: "削り落とす、こすり落とす",
        family: "scrape / scraped / scraping",
        tips: "设施维保与施工高频：scrape off peeling paint（刮掉剥落的油漆），scrape off excess adhesive（刮除多余粘合剂）。",
        desc: "Workers scrape off old peeling paint."
    },
    {
        word: "calibrated",
        pos: "形/動",
        ipa: "/ˈkælɪbreɪtɪd/",
        cn: "校准过的，精密的；校准（calibrate的过去式/分词）",
        jp: "校正された、調整済みの；校正した",
        family: "calibrate / calibration / calibrator",
        tips: "工程制造与质检仪器高频：properly/regularly calibrated equipment（恰当/定期校准的设备），calibrated sensors（经校准的传感器）。",
        desc: "Use precisely calibrated measurement tools."
    },
    {
        word: "visualize",
        pos: "動",
        ipa: "/ˈvɪʒuəlaɪz/",
        cn: "设想，使形象化，使可视化",
        jp: "視覚化する、思い描く、イメージする",
        family: "visualization / visual / visually",
        tips: "商业智能与数据分析高频：visualize complex data/trends（使复杂数据/趋势可视化），visualize future growth（展望未来增长）。",
        desc: "Dashboards help visualize sales trends."
    },
    {
        word: "robust",
        pos: "形",
        ipa: "/roʊˈbʌst/",
        cn: "强劲的，稳健的，坚固耐用的",
        jp: "頑健な、強固な、確実な、力強い",
        family: "robustly / robustness",
        tips: "财报与系统架构高频：robust financial growth/recovery（强劲的财务增长/复苏），robust cybersecurity system（稳健的网络安全系统）。",
        desc: "The company reported robust annual profits."
    },
    {
        word: "functionality",
        pos: "名",
        ipa: "/ˌfʌŋkʃəˈnæləti/",
        cn: "功能，功能性，实用操作性",
        jp: "機能性、操作性、機能",
        family: "function / functional / functionally",
        tips: "IT软件与产品设计高频：enhanced/core functionality（增强/核心功能），test product functionality（测试产品功能）。",
        desc: "The software update improved functionality."
    },
    {
        word: "utility",
        pos: "名/形",
        ipa: "/juːˈtɪləti/",
        cn: "公用事业（水电气等）；实用性，效用；多用途的",
        jp: "公共事業、公益企業（光熱水費）；有用性、実用性",
        family: "utilities / utilize / utilitarian / utilization",
        tips: "不动产与市政高频：utility bills/costs（水电气公用事业费），public utility company（公用事业公司）。",
        desc: "Tenants pay their own utility bills."
    },
    {
        word: "unwavering",
        pos: "形",
        ipa: "/ʌnˈweɪvərɪŋ/",
        cn: "坚定不移的，不动摇的，始终如一的",
        jp: "揺るぎない、確固たる、不変の",
        family: "waver / wavering / unwaveringly",
        tips: "领导力与企业文化高频：unwavering commitment/dedication/support（坚定不移的承诺/奉献/支持）。",
        desc: "We thank you for your unwavering support."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "bakery",
        category: "简单",
        stem: "The downtown artisan ________ is well known for baking fresh baguettes and croissants early every morning.",
        options: ["bakery", "utility", "functionality", "sourdough"],
        correct: "bakery",
        explanations: {
            guide: "餐饮设施名词主语。artisan ________ 结合每天清晨烘焙新鲜法棍与牛角包，选 bakery（面包烘焙坊/面包店）。",
            family: "bakery (n.面包店/烘焙坊) | utility (n.公用事业) | functionality (n.功能性) | sourdough (n.酸面团)。",
            details: "artisan bakery 意为手工烘焙坊。utility（公用事业）、functionality（功能性）均非制作烘烤面点的商铺实体。",
            cn: "市中心的手工面包烘焙坊因每天清晨烘焙新鲜法棍和牛角包而闻名。",
            jp: "ダウンタウンにある職人ベーカリー（bakery）は、毎朝早くに焼きたてのバゲットやクロワッサンを焼き上げることでよく知られています。"
        }
    },
    {
        id: 2,
        target: "flaky",
        category: "简单",
        stem: "Pastry chefs bake the savory pie until its crust turns golden brown and delightfully ________.",
        options: ["flaky", "calibrated", "unwavering", "robust"],
        correct: "flaky",
        explanations: {
            guide: "点心口感修饰形容词。turns golden brown and delightfully ________ 结合烤至金黄且口感层层起酥松脆，选 flaky（酥脆的/起酥的）。",
            family: "flaky (adj.酥脆的/层状的) | calibrated (adj.校准的) | unwavering (adj.坚定的) | robust (adj.强健的)。",
            details: "flaky crust 意为酥脆的面皮。calibrated（已校准的）、unwavering（坚定不移的）无法用来修饰馅饼外皮的松脆烘焙口感。",
            cn: "糕点师烘烤咸味馅饼，直至其外皮变得金黄诱人且极其酥脆。",
            jp: "パティシエはパイの皮がきつね色になり、心地よくサクサクする（flaky）まで香ばしいパイを焼き上げます。"
        }
    },
    {
        id: 3,
        target: "sourdough",
        category: "简单",
        stem: "Customers praised the bakery's signature ________ bread for its distinct tangy flavor and chewy texture.",
        options: ["sourdough", "functionality", "utility", "unwavering"],
        correct: "sourdough",
        explanations: {
            guide: "烘焙产品前置定语。signature ________ bread 结合微酸风味与有嚼劲的口感，选 sourdough（酸酵母/酸面种）。",
            family: "sourdough (n./adj.酸酵面团/酸种面包) | functionality (n.功能) | utility (n.公用事业) | unwavering (adj.坚定的)。",
            details: "sourdough bread 专指天然酵母酸面包。functionality（功能性）、utility（公用事业）均无法作面包种类的修饰定语。",
            cn: "顾客称赞该烘焙坊的招牌天然酵母酸面包具有独特的微酸风味和富有弹性的嚼劲。",
            jp: "顧客は、独特の酸味とモチモチした食感を理由に、そのベーカリーの看板商品であるサワードウ（sourdough）ブレッドを称賛しました。"
        }
    },
    {
        id: 4,
        target: "scrape off",
        category: "简单",
        stem: "Before applying a fresh coat of sealant, the painter must ________ the loose, peeling paint from the exterior wall.",
        options: ["scrape off", "visualize", "calibrate", "waver"],
        correct: "scrape off",
        explanations: {
            guide: "施工保洁动词短语。must 后面接动词原形，结合涂刷密封剂前必须将外墙松动剥落的旧漆清理掉，选 scrape off（刮除/刮掉）。",
            family: "scrape off (动词短语.刮掉/刮除) | visualize (v.设想/可视化) | calibrate (v.校准) | waver (v.动摇)。",
            details: "scrape off peeling paint 意为刮掉剥落的旧漆。visualize（可视化）、calibrate（校准）动宾搭配完全不通。",
            cn: "在涂抹新一层密封涂料之前，油漆工必须刮掉外墙上松动剥落的旧油漆。",
            jp: "新しいシーラント材を塗布する前に、塗装工は外壁から剥がれ落ちそうな古い塗料を削り落とさ（scrape off）なければなりません。"
        }
    },
    {
        id: 5,
        target: "utility",
        category: "简单",
        stem: "The rental lease agreement stipulates that tenants are responsible for paying their monthly ________ bills, including water and gas.",
        options: ["utility", "bakery", "sourdough", "flakiness"],
        correct: "utility",
        explanations: {
            guide: "生活费用复合名词考点。paying their monthly ________ bills, including water and gas 结合涵盖水费和燃气费，选 utility（公用事业/水电气）。",
            family: "utility (n.公用事业/水电费) | bakery (n.面包店) | sourdough (n.酸面团) | flakiness (n.酥脆)。",
            details: "utility bills 意为水电气等公用事业费。bakery（面包房）、sourdough（酸酵头）均非房屋租赁中缴纳的公共账单项目。",
            cn: "租赁协议规定，租户有责任支付其每月的公用事业账单，包括水费和燃气费。",
            jp: "賃貸契約書には、水道やガスを含む月々の公共料金（utility）の支払いは賃借人の責任であることが明記されています。"
        }
    },
    {
        id: 6,
        target: "robust",
        category: "简单",
        stem: "Thanks to surging overseas export demand, the manufacturing company reported ________ revenue growth for the third quarter.",
        options: ["robust", "flaky", "unwavering", "calibrated"],
        correct: "robust",
        explanations: {
            guide: "财务增幅修饰形容词。reported ________ revenue growth 结合海外出口激增带来的良好业绩，选 robust（强劲的/稳健的）。",
            family: "robust (adj.强劲的/稳健的) | flaky (adj.酥脆的) | unwavering (adj.坚定的) | calibrated (adj.校准的)。",
            details: "robust revenue growth 属于财报极高频经典搭配，意为强劲的收入增长。flaky（酥脆的/薄片的）修饰财务数据不通。",
            cn: "由于海外出口需求激增，该制造公司第三季度实现了强劲的收入增长。",
            jp: "海外輸出需要の急増のおかげで、その製造会社は第3四半期に力強い/好調な（robust）増収を報告しました。"
        }
    },
    {
        id: 7,
        target: "calibrated",
        category: "中等",
        stem: "Laboratory technicians verified that all thermal sensors were properly ________ before commencing the temperature-sensitive trial.",
        options: ["calibrated", "scraped off", "wavered", "flaked"],
        correct: "calibrated",
        explanations: {
            guide: "实验仪器状态被动分词。sensors were properly ________ 结合在温度敏感试验开始前确保传感器精度正常，选 calibrated（已校准的/经调校的）。",
            family: "calibrated (adj./v-ed校准的) | scraped off (v-ed刮掉) | wavered (v-ed动摇) | flaked (v-ed剥落)。",
            details: "properly calibrated 属于工程质检核心短语，意为恰当校准。scraped off（刮去）不符合对电子传感器的操作要求。",
            cn: "在开始对温度敏感的试验之前，实验室技术人员核实了所有温度传感器均已恰当校准。",
            jp: "実験室の技術者は、温度に敏感な試験を開始する前に、すべての熱センサーが適切に校正されている（calibrated）ことを確認しました。"
        }
    },
    {
        id: 8,
        target: "functionality",
        category: "中等",
        stem: "The latest smartphone software update introduced several security enhancements and improved battery ________.",
        options: ["functionality", "sourdough", "bakery", "flakiness"],
        correct: "functionality",
        explanations: {
            guide: "数码电子功能名词。improved battery ________ 结合手机系统更新提升电池操作管理特性，选 functionality（功能/实用特性）。",
            family: "functionality (n.功能/功能性) | sourdough (n.酸面团) | bakery (n.面包店) | flakiness (n.片状剥落)。",
            details: "battery functionality 意为电池功能/运作性能。sourdough（酸酵头）、bakery（面包房）均非智能手机操作系统的软件功能。",
            cn: "最新的智能手机软件更新引入了多项安全增强功能并改善了电池功能特性。",
            jp: "最新のスマートフォンソフトウェアアップデートにより、いくつかのセキュリティ強化が導入され、バッテリーの機能性（functionality）が向上しました。"
        }
    },
    {
        id: 9,
        target: "visualize",
        category: "中等",
        stem: "The new interactive analytics dashboard helps department managers ________ complex quarterly sales patterns with ease.",
        options: ["visualize", "scrape off", "waver", "bake"],
        correct: "visualize",
        explanations: {
            guide: "数据展示动词原形。helps managers (to) 后面接动词原形，结合通过交互式看板使复杂的季度销售模式一目了然，选 visualize（可视化/使形象化）。",
            family: "visualize (v.使可视化/形象化) | scrape off (短语.刮掉) | waver (v.动摇) | bake (v.烘焙)。",
            details: "visualize sales patterns 属于商业智能核心搭配，意为使销售趋势图形可视化。bake（烘烤）与数据看板处理毫无关联。",
            cn: "全新的交互式分析看板有助于部门经理轻松将复杂的季度销售模式可视化呈现。",
            jp: "新しいインタラクティブな分析ダッシュボードは、部門管理者が複雑な四半期の売上パターンを容易に視覚化する（visualize）のに役立ちます。"
        }
    },
    {
        id: 10,
        target: "unwavering",
        category: "中等",
        stem: "At the retirement ceremony, the CEO commended Ms. Vance for her ________ dedication to corporate excellence over thirty years.",
        options: ["unwavering", "flaky", "calibrated", "scraped"],
        correct: "unwavering",
        explanations: {
            guide: "职业品质修饰形容词。her ________ dedication 结合表彰其三十年如一日对企业卓越品质的奉献，选 unwavering（坚定不移的/始终如一的）。",
            family: "unwavering (adj.坚定不移的) | flaky (adj.酥脆的) | calibrated (adj.校准的) | scraped (v-ed刮掉的)。",
            details: "unwavering dedication 属于表彰与评语极高频固定搭配，意为坚定不移的奉献精神。flaky（酥脆的/易剥落的）修饰精神品质不通。",
            cn: "在退休仪式上，首席执行官称赞了万斯女士三十年来对企业追求卓越所做出的坚定不移的奉献。",
            jp: "退職式典において、CEOはヴァンス氏の30年間にわたる企業の卓越性に対する揺るぎない（unwavering）献身を称賛しました。"
        }
    },
    {
        id: 11,
        target: "utility",
        category: "中等",
        stem: "City representatives met with executives from the regional electric ________ to discuss renewable grid modernization plans.",
        options: ["utility", "functionality", "bakery", "sourdough"],
        correct: "utility",
        explanations: {
            guide: "公用事业机构专有名词。electric ________ 结合商讨电网现代化改造方案，表达“电力公用事业公司”，选 utility。",
            family: "utility (n.公用事业企业/效用) | functionality (n.功能) | bakery (n.面包房) | sourdough (n.酸面团)。",
            details: "electric utility (company) 专指电力公用事业公司。functionality（功能性）不能与 electric 构成市政公用电力供应实体。",
            cn: "市代表与区域电力公用事业公司的高管会面，商讨可再生电网现代化改造计划。",
            jp: "市の代表者は、再生可能送電網の近代化計画について話し合うため、地域の電力公益企業（electric utility）の幹部と面談しました。"
        }
    },
    {
        id: 12,
        target: "robust",
        category: "中等",
        stem: "Cybersecurity specialists recommended deploying a more ________ data encryption protocol to safeguard proprietary financial records.",
        options: ["robust", "flaky", "unwavering", "scraped"],
        correct: "robust",
        explanations: {
            guide: "安全系统修饰形容词。deploying a more ________ data encryption protocol 结合保护专有财务记录，选 robust（稳健的/高安全强度的）。",
            family: "robust (adj.稳健的/强固的) | flaky (adj.易剥落的) | unwavering (adj.坚定的) | scraped (v-ed刮除的)。",
            details: "robust encryption protocol 意为高强度的稳健加密协议。flaky（不可靠的/起皮的）语义相反，unwavering 修饰算法协议不当。",
            cn: "网络安全专家建议部署更高强度的稳健数据加密协议，以保护专有财务记录。",
            jp: "サイバーセキュリティの専門家は、専有の財務記録を保護するために、より強固な（robust）データ暗号化プロトコルを導入することを推奨しました。"
        }
    },
    {
        id: 13,
        target: "calibrated",
        category: "困难",
        stem: "The precision of the medical diagnostic tool relies entirely on the meticulous ________ of its optical imaging sensors.",
        options: ["calibration", "calibrated", "calibrator", "calibrate"],
        correct: "calibration",
        explanations: {
            guide: "派生抽象名词作介词宾语。the meticulous ________ of sensors 结构中，形容词 meticulous（细致严谨的）后面接抽象名词形式 calibration（校准/调校）。",
            family: "calibration (n.校准/调准) | calibrated (adj.已校准的) | calibrator (n.校准器) | calibrate (v.校准)。",
            details: "meticulous calibration 意为严谨细致的校准。calibrator 指校准器（设备），在此处修饰传感器精度依赖的调校过程需用抽象名词 calibration。",
            cn: "该医疗诊断工具的精度完全依赖于其光学成像传感器的严谨校准。",
            jp: "その医療診断ツールの精度は、光学画像センサーの綿密な校正/キャリブレーション（calibration）に完全に依存しています。"
        }
    },
    {
        id: 14,
        target: "visualize",
        category: "困难",
        stem: "The business intelligence software includes advanced data ________ tools that render complex metrics into intuitive interactive charts.",
        options: ["visualization", "visualize", "visual", "visually"],
        correct: "visualization",
        explanations: {
            guide: "复合名词定语考点。data ________ tools 属于商务智能专属高频专有名词，表达“数据可视化”工具，选派生抽象名词 visualization。",
            family: "visualization (n.可视化/形象化) | visualize (v.使可视化) | visual (adj.视觉的) | visually (adv.视觉上地)。",
            details: "data visualization tools 意为数据可视化工具。visualize 是动词原形，不能作名词 tools 的前置复合定语。",
            cn: "该商业智能软件包含先进的数据可视化工具，可将复杂的指标转化为直观的交互式图表。",
            jp: "そのビジネスインテリジェンスソフトウェアには、複雑な指標を直感的なインタラクティブチャートにレンダリングする高度なデータ視覚化（visualization）ツールが含まれています。"
        }
    },
    {
        id: 15,
        target: "functionality",
        category: "困难",
        stem: "Following the extensive hardware maintenance, the automated assembly line was restored to a fully ________ state.",
        options: ["functional", "functionality", "functionally", "function"],
        correct: "functional",
        explanations: {
            guide: "派生形容词作表语/定语。restored to a fully ________ state 结构中，副词 fully 后面接形容词修饰 state（状态），表达恢复到“完全正常运转的/功能齐备的”状态，选 functional。",
            family: "functional (adj.正常运转的/实用的) | functionality (n.功能性) | functionally (adv.功能上地) | function (n./v.功能/运转)。",
            details: "a fully functional state 意为完全正常运转的状态。functionality 是名词，不能被副词 fully 修饰作名词 state 的定语。",
            cn: "在进行了全面的硬件维护之后，自动化装配线恢复到了完全正常运转的状态。",
            jp: "大規模なハードウェア保守の後、自動化された組み立てラインは完全に機能する（functional）状態に復旧しました。"
        }
    },
    {
        id: 16,
        target: "robust",
        category: "困难",
        stem: "System engineers conducted simulated cyberattack drills to test the ________ of the enterprise cloud infrastructure.",
        options: ["robustness", "robust", "robustly", "unwavering"],
        correct: "robustness",
        explanations: {
            guide: "派生抽象名词作及物动词宾语。test the ________ of the infrastructure 结构中，在定冠词 the 和介词 of 之间填入抽象名词形式 robustness（稳健性/健壮度/强固性）。",
            family: "robustness (n.稳健性/强固度) | robust (adj.稳健的) | robustly (adv.强劲地) | unwavering (adj.坚定的)。",
            details: "test the robustness of a system 属于网络与系统架构核心术语，意为测试系统的稳健性。robust 是形容词，不能直接作及物动词 test 的宾语中心语。",
            cn: "系统工程师进行了模拟网络攻击演练，以测试企业云基础设施的稳健安全性。",
            jp: "システムエンジニアは、エンタープライズクラウドインフラストラクチャの堅牢性/堅固さ（robustness）をテストするために、模擬サイバー攻撃訓練を実施しました。"
        }
    },
    {
        id: 17,
        target: "unwavering",
        category: "困难",
        stem: "Despite intense pressure from international competitors, the board of directors did not ________ in its long-term sustainable growth strategy.",
        options: ["waver", "unwavering", "wavering", "unwaveringly"],
        correct: "waver",
        explanations: {
            guide: "动词原形考点。did not 后面接动词原形，表达董事会在长期可持续增长战略上“毫不动摇/未曾犹豫”，选动词原形 waver。",
            family: "waver (v.动摇/犹豫) | unwavering (adj.坚定不移的) | wavering (adj.摇摆的) | unwaveringly (adv.坚定地)。",
            details: "did not waver in sth 意为在某事上毫不动摇。unwavering 是形容词，不能跟在助动词 did not 之后充当谓语动词原形。",
            cn: "尽管面临来自国际竞争对手的巨大压力，董事会在其长期可持续增长战略上未曾发生丝毫动摇。",
            jp: "国際的な競合他社からの激しい圧力にもかかわらず、取締役会はその長期的な持続可能成長戦略において決して揺らぐ（waver）ことはありませんでした。"
        }
    },
    {
        id: 18,
        target: "scrape off",
        category: "困难",
        stem: "After ________ the rusted metal layer from the joint, the welder successfully applied the reinforced structural seam.",
        options: ["scraping off", "scraped off", "scrape off", "scrapes off"],
        correct: "scraping off",
        explanations: {
            guide: "介词后动名词短语考点。After ________ the rusted metal layer 结构中，介词 After 后面必须接动名词形式，表达“在刮除生锈金属层之后”，选 scraping off。",
            family: "scraping off (动名词短语.刮除) | scraped off (过去式/分词) | scrape off (原形) | scrapes off (三单)。",
            details: "After scraping off 属于典型的介词引导动名词短语作时间状语结构。scraped off 为过去式，不能直接作介词 After 的动名词宾语。",
            cn: "在刮除接头处生锈的金属层后，焊工成功施加了加固结构焊缝。",
            jp: "接合部から錆びた金属層を削り落とした（scraping off）後、溶接工は補強構造の継ぎ目を無事に施工しました。"
        }
    }
];