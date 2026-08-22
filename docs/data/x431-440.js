// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data811-820.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "fulfillment center",
        pos: "名",
        ipa: "/fʊlˈfɪlmənt ˈsentər/",
        cn: "订单配送中心，履约中心，物流配送基地",
        jp: "フルフィルメントセンター、物流・配送拠点",
        family: "fulfill / fulfillment / fulfilled",
        tips: "电商仓储与物流高频：automated fulfillment center（自动化履约配送中心），order fulfillment process（订单履约流程）。",
        desc: "The fulfillment center processes daily orders."
    },
    {
        word: "density",
        pos: "名",
        ipa: "/ˈdensəti/",
        cn: "密度，稠密度，浓度",
        jp: "密度、密集度、濃度",
        family: "dense / densely / condense",
        tips: "仓储与人口分析高频：high-density storage（高密度仓储），population density（人口密度）。",
        desc: "The warehouse features high-density storage."
    },
    {
        word: "eligible",
        pos: "形",
        ipa: "/ˈelɪdʒəbl/",
        cn: "有资格的，符合条件的，合格的",
        jp: "資格のある、適格な、対象となる",
        family: "eligibility / eligibly",
        tips: "福利与商业优惠核心词：be eligible for a bonus/discount（有资格获得奖金/折扣），eligible to apply（有资格申请）。",
        desc: "Members are eligible for exclusive discounts."
    },
    {
        word: "reinforced",
        pos: "形/動",
        ipa: "/ˌriːɪnˈfɔːrst/",
        cn: "加固的，增强的，强化的（reinforce的过去式/分词）",
        jp: "強化された、補強された",
        family: "reinforce / reinforcement / reinforcing",
        tips: "建筑与质检高频：reinforced concrete/steel（钢筋混凝土/加固钢材），reinforced seams（加固接缝）。",
        desc: "The bridge uses reinforced steel beams."
    },
    {
        word: "conglomerate",
        pos: "名",
        ipa: "/kənˈɡlɑːmərət/",
        cn: "大型综合企业，企业集团",
        jp: "コングロマリット、複合企業",
        family: "conglomerates / conglomeration",
        tips: "商业并购与架构高频：multinational conglomerate（跨国综合企业集团），conglomerate acquisition（企业集团并购）。",
        desc: "The conglomerate acquired three regional firms."
    },
    {
        word: "tutorial",
        pos: "名/形",
        ipa: "/tuːˈtɔːriəl/",
        cn: "教程，辅导指南，操作指导；辅导的",
        jp: "チュートリアル、個別指導、操作ガイド",
        family: "tutor / tutoring / tutored",
        tips: "软件培训与IT高频：step-by-step video tutorial（分步视频教程），online onboarding tutorial（线上入职培训教程）。",
        desc: "Watch the online software tutorial first."
    },
    {
        word: "revitalization",
        pos: "名",
        ipa: "/ˌriːˌvaɪtələˈzeɪʃn/",
        cn: "复兴，重振，新生，活力恢复",
        jp: "活性化、再生、復興",
        family: "revitalize / revitalized / revitalizing",
        tips: "市政发展与经济高频：downtown revitalization project（市中心复兴项目），economic revitalization（经济振兴）。",
        desc: "The plan promotes downtown revitalization."
    },
    {
        word: "artisanal",
        pos: "形",
        ipa: "/ˌɑːrtəˈzeɪnəl/",
        cn: "手工艺的，传统手工制作的，优质精品的",
        jp: "職人技の、手作りの、伝統的な",
        family: "artisan / artisanry",
        tips: "餐饮与精品零售高频：artisanal bread/cheese（传统手作面包/奶酪），artisanal craft goods（精制手工艺品）。",
        desc: "They sell artisanal roasted coffee."
    },
    {
        word: "unmuting",
        pos: "動/名",
        ipa: "/ʌnˈmjuːtɪŋ/",
        cn: "取消静音（unmute的现在分词/动名词）",
        jp: "ミュート解除、消音解除（動名詞・分詞）",
        family: "unmute / unmuted / mute",
        tips: "远程会议与在线协作高频：unmuting the microphone（取消麦克风静音），remember unmuting before speaking（发言前请记得解除静音）。",
        desc: "Please remember unmuting your microphone."
    },
    {
        word: "intuitive",
        pos: "形",
        ipa: "/ɪnˈtuːɪtɪv/",
        cn: "直观的，易理解的，直觉的",
        jp: "直感的な、直感でわかる",
        family: "intuitively / intuition / intuitiveness",
        tips: "软件界面与产品设计核心词：intuitive user interface (UI)（直观易用的用户界面），intuitive navigation（直观的导航设计）。",
        desc: "The app features an intuitive interface."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "eligible",
        category: "简单",
        stem: "Employees who have completed their six-month probationary period are ________ to receive annual performance bonuses.",
        options: ["eligible", "artisanal", "unmuting", "density"],
        correct: "eligible",
        explanations: {
            guide: "福利资格表语形容词考点。are ________ to receive bonuses 结合通过试用期的员工有资格获取奖金，选 eligible（有资格的/符合条件的）。",
            family: "eligible (adj.符合资格的) | artisanal (adj.手作的) | unmuting (v-ing取消静音) | density (n.密度)。",
            details: "be eligible to do sth 属于托业人事制度绝高频短语，意为有资格做某事。artisanal（手工艺的）、density（密度）语义完全不通。",
            cn: "完成六个月试用期的员工有资格领取年度绩效奖金。",
            jp: "6か月の試用期間を終えた従業員は、年次業績ボーナスを受け取る資格があります（eligible）。"
        }
    },
    {
        id: 2,
        target: "tutorial",
        category: "简单",
        stem: "New users can watch a brief online video ________ to learn how to navigate the data analytics software.",
        options: ["tutorial", "conglomerate", "density", "revitalization"],
        correct: "tutorial",
        explanations: {
            guide: "培训指导名词考点。a brief online video ________ 结合帮助新用户学习如何操作数据分析软件，选 tutorial（教程/指导指南）。",
            family: "tutorial (n.教程/操作指南) | conglomerate (n.企业集团) | density (n.密度) | revitalization (n.复兴)。",
            details: "video tutorial 意为视频教程。conglomerate（综合企业）、revitalization（复兴）均非供用户自学软件操作的学习材料。",
            cn: "新用户可以观看简短的在线视频教程，以学习如何操作该数据分析软件。",
            jp: "新規ユーザーは、データ分析ソフトウェアの操作方法を学ぶために簡単なオンライン動画チュートリアル（tutorial）を視聴できます。"
        }
    },
    {
        id: 3,
        target: "fulfillment center",
        category: "简单",
        stem: "The major e-commerce retailer constructed a modern ________ near the airport to accelerate regional parcel delivery.",
        options: ["fulfillment center", "tutorial", "revitalization", "density"],
        correct: "fulfillment center",
        explanations: {
            guide: "仓储物流设施名词。constructed a modern ________ near the airport 结合电商零售商加快区域包裹配送速度，选 fulfillment center（订单履约配送中心）。",
            family: "fulfillment center (n.履约配送中心) | tutorial (n.教程) | revitalization (n.复兴) | density (n.密度)。",
            details: "e-commerce fulfillment center 专指电商物流履约仓储中心。tutorial（教程）、density（密度）均非电商建设的实体物流中枢。",
            cn: "这家大型电子商务零售商在机场附近建造了一座现代化的订单履约配送中心，以加快区域包裹配送速度。",
            jp: "大手電子商取引小売業者は、地域の小包配達を迅速化するために空港の近くに最新のフルフィルメントセンター（fulfillment center）を建設しました。"
        }
    },
    {
        id: 4,
        target: "intuitive",
        category: "简单",
        stem: "The mobile banking application features an ________ design that allows clients to transfer funds in just a few taps.",
        options: ["intuitive", "reinforced", "eligible", "unmuting"],
        correct: "intuitive",
        explanations: {
            guide: "软件设计修饰形容词。an ________ design 结合允许客户只需轻点几下即可完成转账的简便设计，选 intuitive（直观的/易理解的）。",
            family: "intuitive (adj.直观易用的) | reinforced (adj.加固的) | eligible (adj.合格的) | unmuting (v-ing取消静音)。",
            details: "intuitive design 意为直观易用的设计。reinforced（加固的）、eligible（有资格的）均无法修饰应用软件操作界面的易用性。",
            cn: "该手机银行应用程序采用了直观易用的设计，允许客户仅需轻点几次屏幕即可完成资金转账。",
            jp: "そのモバイルバンキングアプリは、顧客がわずか数回のタップで資金を送金できる直感的な（intuitive）デザインを備えています。"
        }
    },
    {
        id: 5,
        target: "reinforced",
        category: "简单",
        stem: "Structural engineers recommended installing ________ steel pillars to support the heavy upper deck of the multi-story parking garage.",
        options: ["reinforced", "intuitive", "eligible", "artisanal"],
        correct: "reinforced",
        explanations: {
            guide: "建筑构件修饰形容词。________ steel pillars 结合支撑多层停车库沉重的上层甲板，选 reinforced（加固的/增强的）。",
            family: "reinforced (adj.加固的/增强的) | intuitive (adj.直观的) | eligible (adj.有资格的) | artisanal (adj.手作的)。",
            details: "reinforced steel pillars 意为加固钢柱。intuitive（直观的）、artisanal（手工艺的）均无法用来修饰重型承重建筑构件。",
            cn: "结构工程师建议安装加固钢柱，以支撑多层立体停车库沉重的上层平台。",
            jp: "構造エンジニアは、立体駐車場の重い上層デッキを支えるために強化された/補強された（reinforced）鋼鉄製支柱を設置することを推奨しました。"
        }
    },
    {
        id: 6,
        target: "artisanal",
        category: "简单",
        stem: "The downtown gourmet market attracts food enthusiasts seeking organic herbs, locally sourced honey, and ________ cheeses.",
        options: ["artisanal", "unmuting", "intuitive", "reinforced"],
        correct: "artisanal",
        explanations: {
            guide: "精品食品修饰形容词。and ________ cheeses 与 organic herbs、locally sourced honey 并列修饰美食市场商品，选 artisanal（手作的/传统手工艺的）。",
            family: "artisanal (adj.传统手作的/精品的) | unmuting (v-ing取消静音) | intuitive (adj.直观的) | reinforced (adj.加固的)。",
            details: "artisanal cheeses 意为传统手工奶酪。intuitive（直观的）、reinforced（加固的）修饰美食菜肴不合常理。",
            cn: "市中心的高级美食市集吸引了众多寻求有机香草、当地蜂蜜和传统手工精制奶酪的美食爱好者。",
            jp: "ダウンタウンの高級食品市場は、有機ハーブ、地元産の蜂蜜、そして職人手作りの（artisanal）チーズを求める食通たちを惹きつけています。"
        }
    },
    {
        id: 7,
        target: "unmuting",
        category: "中等",
        stem: "Meeting participants are kindly reminded that ________ their microphone before speaking will prevent awkward audio delays during the video call.",
        options: ["unmuting", "reinforcing", "revitalizing", "densifying"],
        correct: "unmuting",
        explanations: {
            guide: "线上会议动名词主语。________ their microphone before speaking 结合发言前解除话筒静音以防音频延误，选 unmuting（取消静音）。",
            family: "unmuting (v-ing取消静音) | reinforcing (v-ing加固) | revitalizing (v-ing复兴) | densifying (v-ing使变稠密)。",
            details: "unmuting the microphone 意为开启话筒/解除静音。reinforcing（加固）、revitalizing（重振）均非操作远程会议麦克风的动作。",
            cn: "温馨提醒参会人员，在视频通话中发言前先取消麦克风静音，可避免出现尴尬的音频延误。",
            jp: "ビデオ通話中に発言する前にマイクのミュートを解除する（unmuting）ことで、不自然な音声の遅延を防ぐことができます。"
        }
    },
    {
        id: 8,
        target: "density",
        category: "中等",
        stem: "The newly upgraded warehouse utilizes high-________ vertical storage racks to accommodate twice as much inventory in the same floor area.",
        options: ["density", "tutorial", "conglomerate", "revitalization"],
        correct: "density",
        explanations: {
            guide: "仓储工程复合名词。high-________ vertical storage racks 结合在相同建筑面积内将仓储容量提升一倍，选 density（密度/稠密度）。",
            family: "density (n.密度) | tutorial (n.教程) | conglomerate (n.企业集团) | revitalization (n.复兴)。",
            details: "high-density storage 属于现代仓储专属术语，意为高密度存储。tutorial（教程）、revitalization（复兴）无法构成仓储密度术语。",
            cn: "新近升级的仓库采用高密度立体存储货架，在相同的占地面积内可容纳两倍的库存量。",
            jp: "新しくアップグレードされた倉庫は、同じ床面積に2倍の在庫を収容するために高密度（high-density）垂直保管ラックを利用しています。"
        }
    },
    {
        id: 9,
        target: "revitalization",
        category: "中等",
        stem: "City planners allocated twenty million dollars toward the comprehensive ________ of the historic riverfront district.",
        options: ["revitalization", "density", "tutorial", "wristband"],
        correct: "revitalization",
        explanations: {
            guide: "市政改造抽象名词。allocated twenty million dollars toward the ________ of the district 结合拨款两千万美元用于历史滨河区的全面重振改造，选 revitalization（复兴/重振）。",
            family: "revitalization (n.复兴/新生/再开发) | density (n.密度) | tutorial (n.教程) | wristband (n.腕带)。",
            details: "urban/district revitalization 专指城市更新/区域复兴开发计划。density（密度）、tutorial（教程）不合大额市政拨款开发语境。",
            cn: "城市规划部门拨付了两千万美元用于历史滨河区域的全面复兴与升级改造。",
            jp: "都市計画担当者は、歴史的なウォーターフロント地区の包括的な再開発/活性化（revitalization）に向けて2,000万ドルを計上しました。"
        }
    },
    {
        id: 10,
        target: "conglomerate",
        category: "中等",
        stem: "The multinational manufacturing ________ finalized the acquisition of three regional logistics firms to strengthen its supply chain.",
        options: ["conglomerate", "fulfillment center", "tutorial", "revitalization"],
        correct: "conglomerate",
        explanations: {
            guide: "商业组织名词主语。The multinational manufacturing ________ finalized the acquisition 结合敲定收购三家区域物流公司以强化供应链的企业买方主体，选 conglomerate（大型综合企业/集团）。",
            family: "conglomerate (n.大型企业集团) | fulfillment center (n.履约中心) | tutorial (n.教程) | revitalization (n.复兴)。",
            details: "manufacturing conglomerate 意为大型制造业集团。fulfillment center 是仓库建筑设施，不能充当签署并购协议的公司法人主体。",
            cn: "该跨国制造综合企业集团完成了对三家区域物流公司的收购，以强化其供应链网络。",
            jp: "その多国籍製造コングロマリット/複合企業（conglomerate）は、サプライチェーンを強化するために3つの地域物流企業の買収を完了しました。"
        }
    },
    {
        id: 11,
        target: "eligible",
        category: "中等",
        stem: "Retail customers who spend over seventy-five dollars on qualifying purchases are automatically ________ for complimentary home delivery.",
        options: ["eligible", "eligibility", "eligibly", "artisanal"],
        correct: "eligible",
        explanations: {
            guide: "系表结构形容词考点。are automatically ________ for... 结构中，系动词 are 和副词 automatically 后面接表语形容词，并与介词 for 搭配，选 eligible（符合条件的/有资格享受的）。",
            family: "eligible (adj.有资格的) | eligibility (n.资格) | eligibly (adv.适格地) | artisanal (adj.手作的)。",
            details: "be eligible for free delivery 属于电商促销高频短语，意为有资格享受免费送货。eligibility 是名词，不能作系动词 are 后的表语形容词。",
            cn: "在符合条件的消费中单笔支出超过七十五美元的零售顾客，将自动获得免费送货上门的资格。",
            jp: "対象となる購入で75ドル以上を支払った小売顧客は、無料の自宅配達の対象（eligible）に自動的になります。"
        }
    },
    {
        id: 12,
        target: "intuitive",
        category: "中等",
        stem: "The graphic design software was engineered so that novice illustrators could operate its drawing tools ________.",
        options: ["intuitively", "intuitive", "intuition", "intuitiveness"],
        correct: "intuitively",
        explanations: {
            guide: "副词修饰动词考点。operate drawing tools ________ 结构中，需要副词修饰动词 operate，表达初学者能够“凭直觉顺畅地/直观地”操作绘图工具，选 intuitively。",
            family: "intuitively (adv.直观地/凭直觉地) | intuitive (adj.直观的) | intuition (n.直觉) | intuitiveness (n.直观性)。",
            details: "operate intuitively 属于软件易用性高频动副搭配。intuitive 是形容词，intuition 是名词，均不能作修饰及物动词 operate 的状语。",
            cn: "该图形设计软件经过精心工程设计，使初学者插画师能够凭直觉直观轻松地操作其绘图工具。",
            jp: "そのグラフィックデザインソフトウェアは、初心者のイラストレーターでも直感的に（intuitively）描画ツールを操作できるように設計されました。"
        }
    },
    {
        id: 13,
        target: "revitalization",
        category: "困难",
        stem: "The regional development committee launched a targeted initiative to ________ traditional commercial districts that suffered during the recession.",
        options: ["revitalize", "revitalization", "revitalized", "revitalizing"],
        correct: "revitalize",
        explanations: {
            guide: "及物动词不定式考点。initiative to 后面接动词原形，后接 commercial districts 作宾语，表达采取专项措施以“重振/复兴”传统商业街区，选动词原形 revitalize。",
            family: "revitalize (v.使复兴/重振) | revitalization (n.复兴) | revitalized (adj.复兴的) | revitalizing (v-ing)。",
            details: "to revitalize commercial districts 意为使商业区重获新生。revitalization 是名词，不能紧跟在不定式符号 to 后面作谓语动词原形。",
            cn: "区域发展委员会启动了一项针对性举措，旨在重振在经济衰退期间受到冲击的传统商业区。",
            jp: "地域開発委員会は、不況期に打撃を受けた伝統的な商業地区を活性化する/復興させる（revitalize）ための重点的な取り組みを開始しました。"
        }
    },
    {
        id: 14,
        target: "density",
        category: "困难",
        stem: "Urban planning regulations prohibit the construction of heavy industrial warehouses in ________ populated residential suburbs.",
        options: ["densely", "density", "dense", "denseness"],
        correct: "densely",
        explanations: {
            guide: "副词修饰过去分词形容词。in ________ populated suburbs 结构中，修饰过去分词 populated（人口稠密的），表达“人口密集地”聚居的郊区，选副词 densely。",
            family: "densely (adv.稠密地/密集地) | density (n.密度) | dense (adj.稠密的) | denseness (n.稠密)。",
            details: "densely populated 属于人口地理与市政规划核心专有名词，意为人口稠密的。density 是名词，dense 是形容词，均不能直接修饰分词 populated 作状语。",
            cn: "城市规划法规禁止在人口密集的住宅郊区建造重工业仓库。",
            jp: "都市計画規制により、人口が密集した（densely populated）住宅郊外での重工業用倉庫の建設は禁止されています。"
        }
    },
    {
        id: 15,
        target: "reinforced",
        category: "困难",
        stem: "Structural engineers added external carbon-fiber ________ to the aging suspension bridge to withstand heavy seismic vibrations.",
        options: ["reinforcements", "reinforced", "reinforce", "reinforcing"],
        correct: "reinforcements",
        explanations: {
            guide: "工程加固构件复数名词作宾语。added external carbon-fiber ________ 结构中，形容词 external 与名词定语 carbon-fiber 后面接名词复数形式 reinforcements（加固物/加固构件）。",
            family: "reinforcements (n.复数加固材料/援军) | reinforced (adj.加固的) | reinforce (v.加固) | reinforcing (v-ing)。",
            details: "carbon-fiber reinforcements 意为碳纤维加固构件/补强结构。reinforced 是形容词，不能直接作及物动词 added 的宾语中心语。",
            cn: "结构工程师为老化的悬索桥增设了外部碳纤维加固构件，以承受强烈的地震震动。",
            jp: "構造エンジニアは、激しい地震の揺れに耐えられるよう、老朽化した吊り橋に外部炭素繊維補強材（reinforcements）を追加しました。"
        }
    },
    {
        id: 16,
        target: "eligible",
        category: "困难",
        stem: "Applicants must submit all certified academic transcripts by Friday to officially verify their ________ for the fellowship grant.",
        options: ["eligibility", "eligible", "eligibly", "artisanal"],
        correct: "eligibility",
        explanations: {
            guide: "派生抽象名词作宾语。verify their ________ for the grant 结构中，形容词性物主代词 their 后面接抽象名词形式 eligibility（资格/适格性）。",
            family: "eligibility (n.资格/受领条件) | eligible (adj.有资格的) | eligibly (adv.合格地) | artisanal (adj.手作的)。",
            details: "verify one's eligibility for a grant 属于奖学金与资质审核核心短语，意为核验资助资格。eligible 是形容词，不能直接作及物动词 verify 的宾语中心语。",
            cn: "申请人必须在周五之前提交所有经认证的学术成绩单，以正式核实其获得该研究生奖学金资助的资格。",
            jp: "応募者は、フェローシップ助成金の受給資格（eligibility）を公式に証明するために、認定されたすべての学術成績証明書を金曜日までに提出しなければなりません。"
        }
    },
    {
        id: 17,
        target: "tutorial",
        category: "困难",
        stem: "The corporate training department scheduled intensive ________ sessions to guide new employees through the accounting database system.",
        options: ["tutorial", "tutoring", "tutor", "tutored"],
        correct: "tutorial",
        explanations: {
            guide: "名词作前置定语修饰名词。intensive ________ sessions 结合培训部门为新员工安排的指导研讨课，选名词/形容词形式 tutorial（辅导的/指导性质的研讨课）。",
            family: "tutorial (n.辅导课/操作指导/adj.辅导的) | tutoring (n.辅导行为) | tutor (n.导师) | tutored (v-ed受辅导的)。",
            details: "tutorial sessions 意为辅导培训课程/指导课。tutor 是指教师个人，tutoring 强调个别家教行为，在指代企业系统培训研讨单元时固定采用 tutorial sessions。",
            cn: "企业培训部门安排了密集的辅导指导课程，以引导新员工掌握会计数据库系统的使用。",
            jp: "企業研修部門は、新入社員に会計データベースシステムを指導するために集中的なチュートリアル/個別指導（tutorial）セッションを予定しました。"
        }
    },
    {
        id: 18,
        target: "fulfillment center",
        category: "困难",
        stem: "Automating the order ________ process allowed the international distributor to handle sixty percent more shipments during the holiday rush.",
        options: ["fulfillment", "fulfill", "fulfilling", "fulfilled"],
        correct: "fulfillment",
        explanations: {
            guide: "复合名词定语考点。order ________ process 属于国际物流供应链专属专有名词，表达订单“履约/履行/配货”流程，选派生抽象名词 fulfillment。",
            family: "fulfillment (n.履约/履行/成就感) | fulfill (v.履行/执行) | fulfilling (adj.有成就感的) | fulfilled (adj.得到满足的)。",
            details: "order fulfillment process 专指订单履约全流程（包含拣货、打包、配送）。fulfill 是动词原形，不能作名词 process 的前置复合定语。",
            cn: "实现订单履约流程的自动化，使该跨国分销商在假日高峰期能够多处理百分之六十的发货量。",
            jp: "注文処理/履行（fulfillment）プロセスの自動化により、その国際流通業者はホリデーラッシュ中に60％多い出荷を処理できるようになりました。"
        }
    }
];