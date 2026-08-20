// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data681-690.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "bay",
        pos: "名",
        ipa: "/beɪ/",
        cn: "海湾，港湾；分隔间，专用车位/货位",
        jp: "湾、入り江；（作業・積込用の）区画、スペース",
        family: "bays",
        tips: "交通地理与仓储物流高频：loading bay（装卸货区/货位），sheltered bay（避风海湾）。",
        desc: "Ships anchored in the sheltered bay."
    },
    {
        word: "rotate",
        pos: "動",
        ipa: "/ˈroʊteɪt/",
        cn: "旋转，转动；轮流，轮换",
        jp: "回転する、回転させる；交代する",
        family: "rotation / rotational / rotated / rotating",
        tips: "设备操作与HR轮岗高频：rotate the dial/knob（旋转刻度盘/旋钮），rotate shifts/duties（轮班/轮流值岗）。",
        desc: "Rotate the control dial clockwise."
    },
    {
        word: "dial",
        pos: "名/動",
        ipa: "/ˈdaɪəl/",
        cn: "刻度盘，表盘，仪表盘；拨号，调节",
        jp: "文字盤、ダイヤル；ダイヤルを回す",
        family: "dials / dialed / dialing",
        tips: "设备操作与通信高频：control dial（控制旋钮/调节盘），turn/adjust the dial（调节刻度盘）。",
        desc: "Turn the temperature dial carefully."
    },
    {
        word: "diploma",
        pos: "名",
        ipa: "/dɪˈploʊmə/",
        cn: "文凭，毕业证书，学位证书",
        jp: "卒業証書、修了証、学位記",
        family: "diplomas / diplomat / diplomatic",
        tips: "招聘与教育资格高频：high school/college diploma（高中文凭/大学毕业证），earn/receive a diploma（获得文凭）。",
        desc: "She earned an engineering diploma."
    },
    {
        word: "appraisers",
        pos: "名",
        ipa: "/əˈpreɪzərz/",
        cn: "评估师，鉴定师，估价人员（复数）",
        jp: "鑑定士、評価人、不動産鑑定士（複数）",
        family: "appraiser / appraise / appraisal",
        tips: "不动产与艺术品估价高频：independent certified appraisers（独立认证鉴定师），real estate appraisers（房地产估价师）。",
        desc: "Certified appraisers evaluated the property."
    },
    {
        word: "authenticity",
        pos: "名",
        ipa: "/ˌɔːθenˈtɪsəti/",
        cn: "真实性，真伪，真正",
        jp: "真正性、本物であること、信ぴょう性",
        family: "authentic / authentically / authenticate",
        tips: "艺术鉴定与法务合规高频：verify the authenticity of sth（核验某物的真伪），certificate of authenticity（真品鉴定证书）。",
        desc: "Experts verified the painting's authenticity."
    },
    {
        word: "screw",
        pos: "名/動",
        ipa: "/skruː/",
        cn: "螺丝，螺钉；用螺丝固定，拧紧",
        jp: "ねじ、ボルト；ねじ留めする、ねじ込む",
        family: "screws / screwed / screwing / screwdriver",
        tips: "维修与组装高频：tighten/loosen a screw（拧紧/拧松螺丝），screw the bracket into the wall（用螺丝将支架固定在墙上）。",
        desc: "Tighten the loose screw properly."
    },
    {
        word: "easel",
        pos: "名",
        ipa: "/ˈiːzl/",
        cn: "画架，展示架",
        jp: "イーゼル、画架、展示台",
        family: "easels",
        tips: "Part 1 照片与会务展示高频：canvas on an easel（画架上的画布），display a chart on an easel（在展示架上陈列图表）。",
        desc: "A poster is displayed on the easel."
    },
    {
        word: "statues",
        pos: "名",
        ipa: "/ˈstætʃuːz/",
        cn: "雕像，雕塑像（复数）",
        jp: "彫像、像（複数）",
        family: "statue / statuary / statuesque",
        tips: "Part 1 & 文化旅游高频：marble/bronze statues（大理石/青铜雕像），statues displayed in the courtyard（庭院中展示的雕像）。",
        desc: "Marble statues line the museum hallway."
    },
    {
        word: "sculpture",
        pos: "名/動",
        ipa: "/ˈskʌlptʃər/",
        cn: "雕塑，雕刻作品；雕刻",
        jp: "彫刻、彫刻作品；彫刻する",
        family: "sculptor / sculpt / sculptural",
        tips: "艺术展览与公共空间高频：contemporary metal sculpture（当代金属雕塑），sculpture garden（雕塑花园）。",
        desc: "The park features a modern sculpture."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "dial",
        category: "简单",
        stem: "To increase the temperature in the conference room, simply adjust the thermostat ________ on the wall.",
        options: ["dial", "easel", "diploma", "screw"],
        correct: "dial",
        explanations: {
            guide: "温控设备操作名词考点。adjust the thermostat ________ on the wall 结合调节墙上的温控器旋钮/表盘，选 dial。",
            family: "dial (n.刻度盘/旋钮) | easel (n.画架) | diploma (n.文凭) | screw (n.螺丝)。",
            details: "thermostat dial 意为恒温器调节盘/旋钮。easel（画架）、diploma（文凭）均非温控调节设备上的旋钮刻度结构。",
            cn: "要调高会议室内的温度，只需调节墙上的恒温器旋钮即可。",
            jp: "会議室の温度を上げるには、壁にあるサーモスタットのダイヤル（dial）を調整するだけです。"
        }
    },
    {
        id: 2,
        target: "diploma",
        category: "简单",
        stem: "Candidates applying for the entry-level administrative role must possess at least a high school ________.",
        options: ["diploma", "easel", "screw", "bay"],
        correct: "diploma",
        explanations: {
            guide: "学历资质固定词组考点。high school ________ 结合初级行政职位的基本学历要求，选 diploma（文凭/毕业证书）。",
            family: "diploma (n.文凭/毕业证书) | easel (n.画架) | screw (n.螺丝) | bay (n.海湾/货位)。",
            details: "high school diploma 意为高中文凭。easel（画架）、bay（海湾）均非求职应聘所需的学历资质证书。",
            cn: "申请初级行政助理职位的应聘者必须至少拥有高中毕业文凭。",
            jp: "初級管理アシスタント職に応募する候補者は、少なくとも高校の卒業証書（diploma）を所持している必要があります。"
        }
    },
    {
        id: 3,
        target: "easel",
        category: "简单",
        stem: "The art instructor placed a blank canvas onto the wooden ________ before beginning the painting workshop.",
        options: ["easel", "dial", "diploma", "screw"],
        correct: "easel",
        explanations: {
            guide: "绘画设施名词考点。placed a canvas onto the wooden ________ 结合绘画课前将画布放置在木架上，选 easel（画架）。",
            family: "easel (n.画架/展示架) | dial (n.刻度盘) | diploma (n.文凭) | screw (n.螺丝)。",
            details: "wooden easel 意为木制画架。dial（表盘）、diploma（文凭）均无法作为支撑放置画布（canvas）的画架设施。",
            cn: "美术讲师在开始绘画研讨课之前，将一块空白画布放置在木制画架上。",
            jp: "絵画の講師は、ワークショップを開始する前に、木製のイーゼル（easel）の上に無地のキャンバスを置きました。"
        }
    },
    {
        id: 4,
        target: "screw",
        category: "简单",
        stem: "The maintenance technician used a screwdriver to tighten the loose ________ on the filing cabinet handle.",
        options: ["screw", "easel", "appraiser", "bay"],
        correct: "screw",
        explanations: {
            guide: "五金维修名词考点。used a screwdriver to tighten the loose ________ 结合使用螺丝刀拧紧文件柜把手上松动的零件，选 screw（螺丝/螺钉）。",
            family: "screw (n.螺丝/螺钉) | easel (n.画架) | appraiser (n.鉴定师) | bay (n.海湾/货位)。",
            details: "tighten a loose screw 意为拧紧松动的螺丝。appraiser（评估师）、bay（货位）均非用螺丝刀（screwdriver）紧固的五金紧固件。",
            cn: "维修技术人员使用螺丝刀拧紧了文件柜把手上松动的螺丝。",
            jp: "保守技術者はドライバーを使用して、ファイルキャビネットの取っ手にある緩んだねじ（screw）を締めました。"
        }
    },
    {
        id: 5,
        target: "statues",
        category: "简单",
        stem: "Visitors to the historic botanical garden admired several classical marble ________ situated along the central promenade.",
        options: ["statues", "dials", "easels", "screws"],
        correct: "statues",
        explanations: {
            guide: "景观艺术品名词复数。classical marble ________ 结合植物园中央大道两侧供游人观赏的大理石艺术像，选 statues（雕像/塑像）。",
            family: "statues (n.复数雕像) | dials (n.仪表盘) | easels (n.画架) | screws (n.螺丝)。",
            details: "marble statues 意为大理石雕像。dials（表盘）、screws（螺丝）均非林荫大道两侧陈列供游客鉴赏的古典艺术造像。",
            cn: "参观历史植物园的游客赞赏了伫立在中央步道两侧的几座古典大理石雕像。",
            jp: "歴史的な植物園の訪問者は、中央の遊歩道沿いに設置されたいくつかの古典的な大理石の彫像（statues）を鑑賞しました。"
        }
    },
    {
        id: 6,
        target: "bay",
        category: "简单",
        stem: "During the sudden coastal storm, several fishing boats sought shelter and anchored safely in the quiet ________.",
        options: ["bay", "easel", "dial", "diploma"],
        correct: "bay",
        explanations: {
            guide: "水域地理名词考点。anchored safely in the quiet ________ 结合渔船在沿海风暴中抛锚避风，水域选 bay（海湾/港湾）。",
            family: "bay (n.海湾/港湾) | easel (n.画架) | dial (n.表盘) | diploma (n.文凭)。",
            details: "anchored in the bay 意为在海湾中抛锚停泊。easel（画架）、diploma（文凭）均非可供船舶避风停靠的平静海湾水域。",
            cn: "在突发的沿海风暴期间，几艘渔船在宁静的海湾内寻求庇护并安全抛锚。",
            jp: "突然の沿岸の嵐の間、数隻の漁船が避難場所を求めて静かな湾（bay）に安全に停泊しました。"
        }
    },
    {
        id: 7,
        target: "rotate",
        category: "中等",
        stem: "According to the equipment operating manual, technicians should ________ the control knob clockwise to regulate fluid pressure.",
        options: ["rotate", "appraise", "screw", "sculpt"],
        correct: "rotate",
        explanations: {
            guide: "设备操作动词原形。should 后面接动词原形，结合顺时针方向旋转控制旋钮（________ the knob clockwise），选 rotate（旋转/转动）。",
            family: "rotate (v.旋转/转动) | appraise (v.评估) | screw (v.拧紧) | sculpt (v.雕刻)。",
            details: "rotate the knob clockwise 意为顺时针旋转旋钮。appraise（评估）、sculpt（雕刻）均无法与旋转旋钮的操作动作相搭配。",
            cn: "根据设备操作手册，技术人员应顺时针旋转控制旋钮以调节流体压力。",
            jp: "機器の取扱説明書によると、技術者は流体圧力を調整するためにコントロールノブを時計回りに回転させる（rotate）必要があります。"
        }
    },
    {
        id: 8,
        target: "appraisers",
        category: "中等",
        stem: "The commercial bank hired independent certified ________ to evaluate the current market value of the office building.",
        options: ["appraisers", "statues", "easels", "dials"],
        correct: "appraisers",
        explanations: {
            guide: "不动产估价人物名词复数。hired independent certified ________ to evaluate the market value 结合银行聘请专业人员评估写字楼市值，选 appraisers（估价师/评估师）。",
            family: "appraisers (n.复数评估师/鉴定师) | statues (n.雕像) | easels (n.画架) | dials (n.刻度盘)。",
            details: "certified appraisers 意为持证评估师/估价人员。statues（雕像）、easels（画架）均非银行雇佣来核定不动产资产价值的专业人员。",
            cn: "该商业银行聘请了独立的注册评估师来评估该写字楼当前的公允市场价值。",
            jp: "商業銀行は、オフィスビルの現在の市場価値を評価するために、独立した認定鑑定士（appraisers）を雇いました。"
        }
    },
    {
        id: 9,
        target: "authenticity",
        category: "中等",
        stem: "Before purchasing the rare historical oil painting, art collectors demanded a certificate of ________ from a recognized expert.",
        options: ["authenticity", "diploma", "easel", "rotation"],
        correct: "authenticity",
        explanations: {
            guide: "艺术品交易专有名词考点。certificate of ________ 属于艺术与古董交易核心词组，表达“真品证书/真伪鉴定证明”，选 authenticity。",
            family: "authenticity (n.真实性/真伪) | diploma (n.文凭) | easel (n.画架) | rotation (n.旋转)。",
            details: "certificate of authenticity (COA) 专指真品鉴定证书。diploma（毕业证）、rotation（循环）均不能与 certificate of 构成真伪证明短语。",
            cn: "在购买这幅罕见的历史油画之前，艺术收藏家要求出具由权威专家出具的真品鉴定证书。",
            jp: "貴重な歴史的油絵を購入する前に、美術品収集家は公認の専門家からの真正性（authenticity）証明書を要求しました。"
        }
    },
    {
        id: 10,
        target: "sculpture",
        category: "中等",
        stem: "The municipal arts council commissioned a renowned local artist to design a contemporary bronze ________ for the plaza.",
        options: ["sculpture", "dial", "appraiser", "bay"],
        correct: "sculpture",
        explanations: {
            guide: "公共艺术名词考点。design a contemporary bronze ________ for the plaza 结合委托艺术家为广场打造青铜艺术品，选 sculpture（雕塑作品）。",
            family: "sculpture (n.雕塑/雕刻品) | dial (n.旋钮) | appraiser (n.估价师) | bay (n.海湾)。",
            details: "contemporary bronze sculpture 意为当代青铜雕塑。dial（刻度盘）、bay（海湾）均非艺术家为市政广场创作的造型艺术实体。",
            cn: "市政艺术委员会委托一位著名的当地艺术家为城市广场设计一座当代青铜雕塑。",
            jp: "市芸術評議会は、広場のための現代的なブロンズ彫刻（sculpture）を制作するよう地元の著名な芸術家に依頼しました。"
        }
    },
    {
        id: 11,
        target: "rotate",
        category: "中等",
        stem: "To reduce worker fatigue on the assembly line, warehouse managers decided to ________ staff across different packaging stations every two hours.",
        options: ["rotate", "screw", "appraise", "sculpt"],
        correct: "rotate",
        explanations: {
            guide: "人力资源轮岗动词不定式。decided to 后面接动词原形，结合每两小时在不同包装工位之间“轮换/交替”员工以缓解疲劳，选 rotate。",
            family: "rotate (v.轮换/轮流/旋转) | screw (v.拧紧) | appraise (v.评估) | sculpt (v.雕塑)。",
            details: "rotate staff across stations 意为在各工位间轮换人员。appraise（评估员工表现）、sculpt（雕刻）均不符合流水线防疲劳轮岗语境。",
            cn: "为减轻流水线上工人的疲劳，仓库经理决定每两小时在不同包装工位之间轮换一次员工。",
            jp: "組み立てラインでの作業員の疲労を軽減するため、倉庫管理者は2時間ごとに異なる梱包ステーション間でスタッフを交代させる（rotate）ことを決定しました。"
        }
    },
    {
        id: 12,
        target: "authenticity",
        category: "中等",
        stem: "Forensic document specialists conducted chemical ink tests to verify the ________ of the signature on the merger agreement.",
        options: ["authenticity", "diploma", "statue", "easel"],
        correct: "authenticity",
        explanations: {
            guide: "法务文件核验名词宾语。verify the ________ of the signature 结合司法文件专家通过化学墨迹检测核实合同签名的“真实性/真伪”，选 authenticity。",
            family: "authenticity (n.真实性/真伪) | diploma (n.文凭) | statue (n.雕像) | easel (n.画架)。",
            details: "verify the authenticity of a signature 意为核实签名的真实性。diploma（文凭）、statue（雕像）均非合同签名鉴定的属性对象。",
            cn: "司法文件鉴定专家进行了化学墨迹测试，以核实并购协议上签名的真实性。",
            jp: "鑑識文書の専門家は、合併契約書の署名の真正性（authenticity）を検証するために化学インク検査を実施しました。"
        }
    },
    {
        id: 13,
        target: "appraisers",
        category: "困难",
        stem: "After conducting a rigorous on-site inspection, the commercial real estate consultant submitted a comprehensive property ________ report.",
        options: ["appraisal", "appraisers", "appraise", "authentic"],
        correct: "appraisal",
        explanations: {
            guide: "派生名词作前置定语考点。property ________ report 属于房地产金融核心专有名词，表达资产“估价/评估”报告，选派生抽象名词 appraisal。",
            family: "appraisal (n.评估/估价/考核) | appraisers (n.估价师复数) | appraise (v.评估) | authentic (adj.正宗的)。",
            details: "property appraisal report 意为不动产估价报告。appraisers 是指评估师（人），作定语修饰报告文本时应采用表示评估行为/结果的派生名词 appraisal。",
            cn: "在进行了严格的实地勘察后，商业房地产顾问提交了一份详尽的物业估价报告。",
            jp: "厳格な現地調査を実施した後、商業用不動産コンサルタントは包括的な不動産鑑定評価（appraisal）報告書を提出しました。"
        }
    },
    {
        id: 14,
        target: "sculpture",
        category: "困难",
        stem: "The national gallery opened a retrospective exhibition honoring the celebrated Italian ________ who cast the iconic bronze monuments.",
        options: ["sculptor", "sculpture", "sculptural", "sculpting"],
        correct: "sculptor",
        explanations: {
            guide: "派生人物名词考点。honoring the celebrated Italian ________ who cast the monuments 结合定语从句先行词为铸造青铜纪念碑的艺术家个人，选 sculptor（雕塑家）。",
            family: "sculptor (n.雕塑家/雕刻家) | sculpture (n.雕塑作品) | sculptural (adj.雕塑般的) | sculpting (v-ing雕刻)。",
            details: "celebrated sculptor 意为著名雕塑家。who 引导的定语从句明确修饰艺术家本人，sculpture 指艺术作品实体，不能作为表示艺术大师的名词中心语。",
            cn: "国家美术馆举办了一次回顾展，向铸造了那些标志性青铜纪念碑的著名意大利雕塑家致敬。",
            jp: "国立美術館は、象徴的なブロンズ記念碑を鋳造した著名なイタリア人彫刻家（sculptor）を称える回顧展を開幕しました。"
        }
    },
    {
        id: 15,
        target: "rotate",
        category: "困难",
        stem: "The wind turbine utilizes smooth ________ motion to convert kinetic wind energy into clean electrical power.",
        options: ["rotational", "rotate", "rotation", "rotatingly"],
        correct: "rotational",
        explanations: {
            guide: "派生形容词修饰名词。smooth ________ motion 结构中，修饰名词 motion（运动/转动），选派生形容词 rotational（旋转的/转动的）。",
            family: "rotational (adj.旋转的/转动的) | rotate (v.旋转) | rotation (n.旋转) | rotatingly (adv.旋转地)。",
            details: "rotational motion 属于机械与物理工程专有名词，意为旋转运动。rotate 是动词，rotation 是名词，均不能作形容词修饰 motion。",
            cn: "风力发电机利用平稳的旋转运动将风的动能转化为清洁电能。",
            jp: "風力タービンは、スムーズな回転（rotational）運動を利用して、風の運動エネルギーをクリーンな電力に変換します。"
        }
    },
    {
        id: 16,
        target: "screw",
        category: "困难",
        stem: "Carpenters securely ________ the heavy metal brackets directly into the wall studs to support the floating wooden shelves.",
        options: ["screwed", "screws", "screwing", "screw"],
        correct: "screwed",
        explanations: {
            guide: "谓语动词时态考点。主语为 Carpenters，后接及物谓语动词并与 brackets into the wall 搭配，表达木工用螺丝把支架固定在墙柱上，选过去式 screwed。",
            family: "screwed (v-ed用螺丝固定了) | screws (v-三单/n.复数) | screwing (v-ing) | screw (v./n.原形)。",
            details: "screwed the brackets into the wall 意为用螺丝将支架固定进墙体。全句描述施工安装完成的事实，采用一般过去时 screwed 充当谓语动词。",
            cn: "木工用螺丝将沉重的金属支架直接牢牢固定在墙柱上，以支撑悬空木质置物架。",
            jp: "大工は、フローティング木製棚を支えるために、重い金属製ブラケットを壁の間柱に直接しっかりとねじ留めしました（screwed）。"
        }
    },
    {
        id: 17,
        target: "bay",
        category: "困难",
        stem: "Freight delivery drivers must reverse their tractor-trailers carefully into the designated loading ________ behind the distribution center.",
        options: ["bays", "easels", "statues", "dials"],
        correct: "bays",
        explanations: {
            guide: "仓储物流专属复合名词复数。designated loading ________ 结合重型挂车倒车进入配送中心后方的装卸车位，选 bays（装卸货位/货台区复数）。",
            family: "bays (n.装卸货位/海湾复数) | easels (n.画架) | statues (n.雕像) | dials (n.仪表盘)。",
            details: "loading bays 属于物流仓储核心专有名词，指供货车停靠装卸货物的装卸平台车位。easels（画架）、statues（雕像）均非大型货车倒车停靠的物流设施。",
            cn: "货运卡车司机必须小心地将半挂牵引车倒进配送中心后方指定的装卸货位中。",
            jp: "貨物配達ドライバーは、配送センターの背後にある指定された積込バース/区画（loading bays）にトラクタートレーラーを慎重に後退させて進入させなければなりません。"
        }
    },
    {
        id: 18,
        target: "authenticity",
        category: "困难",
        stem: "Museum conservators used advanced ultraviolet spectroscopy to ________ that the medieval manuscript was genuinely original.",
        options: ["authenticate", "authenticity", "authentic", "authentically"],
        correct: "authenticate",
        explanations: {
            guide: "派生动词不定式考点。used spectroscopy to 后面接动词原形，that 从句作其宾语，表达利用紫外光谱技术“鉴定/证实”手稿确为原件，选 authenticate。",
            family: "authenticate (v.鉴定/证实…为真) | authenticity (n.真实性) | authentic (adj.真正的) | authentically (adv.真正地)。",
            details: "to authenticate that... 属于鉴定检测专属高阶用法，意为鉴别证明……。authenticity 是名词，authentic 是形容词，均不能跟在不定式符号 to 后面充当谓语动词原形。",
            cn: "博物馆文物保护人员利用先进的紫外光谱技术，证实了这件中世纪手稿确系原件。",
            jp: "博物館の保存専門家は、その中世の手稿が真正な原本であることを証明/鑑定する（authenticate）ために高度な紫外線分光法を使用しました。"
        }
    }
];