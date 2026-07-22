// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data31-40.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "wipe",
        pos: "動/名",
        ipa: "/waɪp/",
        cn: "擦，拭，擦拭",
        jp: "拭く、ぬぐう；拭くこと",
        family: "wiper / wiped / wiping",
        tips: "托业高频短语 wipe off/away（擦掉），wipe clean（擦干净）。听力 Part 1（图片题）常考动作 wipe the table/counter（擦桌子/柜台）。",
        desc: "Please wipe the table clean."
    },
    {
        word: "exit",
        pos: "名/動",
        ipa: "/ˈeɡzɪt/",
        cn: "出口，退场；离开，出去",
        jp: "出口；出る、退場する",
        family: "exited / exiting",
        tips: "作名词常考 emergency exit（紧急出口），fire exit（安全出口）。作动词意为离开（exit the building）。在听力与阅读标识语中极高频。",
        desc: "Use the emergency exit."
    },
    {
        word: "sink",
        pos: "名/動",
        ipa: "/sɪŋk/",
        cn: "水槽，洗涤池；下沉，下陷",
        jp: "洗面台、シンク；沈む、下がる",
        family: "sank / sunk / sinking",
        tips: "作名词指厨房/洗手间的水槽（kitchen sink）。作动词常考价格、指数或利润的“下跌/缩水”（sink below a certain level）。",
        desc: "Put the dirty dishes in the sink."
    },
    {
        word: "greet",
        pos: "動",
        ipa: "/ɡriːt/",
        cn: "问候，打招呼，迎接",
        jp: "挨拶する、出迎える、迎える",
        family: "greeting / greeter",
        tips: "及物动词，greet visitors/clients（迎接访客/客户）。其名词形式 greeting 常用作复数 greetings（问候语/致意），也常考 greeting card（贺卡）。",
        desc: "She greeted us with a smile."
    },
    {
        word: "instrument",
        pos: "名",
        ipa: "/ˈɪnstrəmənt/",
        cn: "仪器，工具；乐器",
        jp: "器具、測定器；楽器、手段",
        family: "instrumental / instrumentation",
        tips: "托业中主要考查“精密测试或测量仪器”（measuring/testing instrument）。其形容词 instrumental 常见考点为 be instrumental in doing sth（在做某事中起关键作用）。",
        desc: "He plays a musical instrument."
    },
    {
        word: "weigh",
        pos: "動",
        ipa: "/weɪ/",
        cn: "称……的重量；权衡，考虑",
        jp: "〜の重さを量る；秤量する、考量する",
        family: "weight / weighing / weighty",
        tips: "高频及物/不及物动词。考点一：邮寄/物流场景称重（weigh a parcel）；考点二：商业决策场景权衡利弊（weigh the options/pros and cons）。",
        desc: "Please weigh the box first."
    },
    {
        word: "scale",
        pos: "名/動",
        ipa: "/skeɪl/",
        cn: "秤；规模，等级；改变……的规模",
        jp: "秤、体重計；規模、スケール、割合",
        family: "scaled / scaling",
        tips: "作名词常考 on a global scale（在全球范围内）或 scale（秤）。高阶动词搭配考 scale back / scale down（缩小规模）以及 scale up（扩大规模）。",
        desc: "Step on the scale, please."
    },
    {
        word: "bend",
        pos: "動/名",
        ipa: "/bend/",
        cn: "弯曲，屈服；弯道",
        jp: "曲げる、曲がる；カーブ、曲がり角",
        family: "bent / bending",
        tips: "在听力 Part 1 中常考动作描述：bend over（弯腰）。在阅读高阶考点中常考习惯用语 bend the rules（通融/变通规章制度）。",
        desc: "Do not bend the wire."
    },
    {
        word: "cast",
        pos: "名/動",
        ipa: "/kæst/",
        cn: "全体演员；投射，提出",
        jp: "キャスト、出演者陣；投げる、投げかける",
        family: "casting / broadcast",
        tips: "作名词指演出或广告拍摄的“全体演员/阵容”（cast of the commercial）。动词高阶搭配：cast doubt on...（对……产生怀疑/提出质询）。",
        desc: "The cast of the play was great."
    },
    {
        word: "bush",
        pos: "名",
        ipa: "/bʊʃ/",
        cn: "灌木，矮树丛",
        jp: "灌木、低木、植え込み",
        family: "bushes / bushy",
        tips: "主要出现于听力 Part 1（图片描述）及阅读的园区/设施维护场景中。常考与园艺相关的修剪（trim the bushes）或园区绿化景观布置。",
        desc: "Trim the bush in the garden."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "greet",
        category: "简单",
        stem: "All visitors must sign in at the front desk where the receptionist will ________ them.",
        options: ["greet", "greeting", "exit", "sink"],
        correct: "greet",
        explanations: {
            guide: "情态动词后的动词原形考点。will 后面需要接动词原形，表达接待员将“迎接/问候”来访者，选 greet。",
            family: "greet (v.问候) | greeting (n.问候/致意) | exit (v./n.出口/离开) | sink (v./n.水槽/下沉)。",
            details: "will 为情态动词，后面必须搭配动词原形 greet。greeting 为名词或分词形式，不能直接放在 will 后面作谓语动词。",
            cn: "所有访客都必须在前台登记，接待员将在那里迎接他们。",
            jp: "すべての来客はフロントで記帳する必要があり、受付係が彼らをお出出迎（greet）します。"
        }
    },
    {
        id: 2,
        target: "exit",
        category: "简单",
        stem: "In case of an emergency, please use the nearest marked ________ immediately.",
        options: ["exit", "exited", "wipe", "scale"],
        correct: "exit",
        explanations: {
            guide: "形容词修饰名词考点。形容词 marked 后面需要接名词，表示“标识明确的出口”，选用名词 exit。",
            family: "exit (n.出口) | exited (v.过去式) | wipe (v.擦拭) | scale (n.秤/规模)。",
            details: "the nearest marked exit 构成完整名词短语，意为“最近的带有标识的出口”。exited 是动词过去式，无法作宾语中心词。",
            cn: "如遇紧急情况，请立即使用最近的带有标识的出口。",
            jp: "緊急の場合は、直ちに最寄りの表示された出口（exit）を使用してください。"
        }
    },
    {
        id: 3,
        target: "wipe",
        category: "简单",
        stem: "The maintenance staff member will ________ the conference room table after the meeting ends.",
        options: ["wipe", "wiper", "bend", "bush"],
        correct: "wipe",
        explanations: {
            guide: "情态动词后的动词原形。will 后面接动词原形 wipe，表示“擦拭”会议室桌子。",
            family: "wipe (v.擦拭) | wiper (n.雨刮器/擦拭者) | bend (v.弯曲) | bush (n.灌木)。",
            details: "will wipe 是完整的谓语表达。wiper 是名词（擦拭工具/雨刮器），在此处不能跟在 will 后面担当动词。",
            cn: "会议结束后，保洁人员会擦拭会议室的桌子。",
            jp: "会議終了後、清掃スタッフが会議室のテーブルを拭き（wipe）ます。"
        }
    },
    {
        id: 4,
        target: "weigh",
        category: "简单",
        stem: "Before mailing the parcel, the postal clerk must ________ it to calculate the exact postage fee.",
        options: ["weigh", "weight", "instrument", "cast"],
        correct: "weigh",
        explanations: {
            guide: "情态动词后的及物动词。must 后面接动词原形，后接宾语 it，表示“称……的重量”，选 weigh。",
            family: "weigh (v.称重) | weight (n.重量) | instrument (n.仪器) | cast (n./v.演员阵容/投射)。",
            details: "must weigh it 构成“情态动词+动词原形+宾语”结构。weight 是名词（重量），不能直接作及物动词。",
            cn: "在邮寄包裹之前，邮局工作人员必须先对其进行称重，以计算出准确的邮费。",
            jp: "小包を郵送する前に、郵便局員は正確な送料を計算するためにその重量を量ら（weigh）なければなりません。"
        }
    },
    {
        id: 5,
        target: "sink",
        category: "简单",
        stem: "Employees are requested not to leave dirty coffee mugs in the office kitchen ________ overnight.",
        options: ["sink", "sinking", "greet", "scale"],
        correct: "sink",
        explanations: {
            guide: "名词作介词宾语。介词 in 后面需要搭配地点名词，office kitchen sink 表示“办公室厨房的水槽”。",
            family: "sink (n.水槽) | sinking (adj./v.下沉的) | greet (v.问候) | scale (n.秤)。",
            details: "kitchen sink 是职场生活场景中的高频固定搭配。sinking 是分词或动名词，不能表达具体的洗涤水槽实体。",
            cn: "请员工不要将脏咖啡杯留在办公室厨房的水槽里过夜。",
            jp: "従業員は、汚れたコーヒーカップをオフィスの給湯室のシンク（sink）に放置して一晩置かないよう求められています。"
        }
    },
    {
        id: 6,
        target: "instrument",
        category: "简单",
        stem: "The laboratory technician calibrated the precision measuring ________ before starting the experiment.",
        options: ["instrument", "instrumental", "bend", "exit"],
        correct: "instrument",
        explanations: {
            guide: "名词短语中心词。修饰语 precision measuring 后面需要跟名词，表示“精密测量仪器”，选 instrument。",
            family: "instrument (n.仪器) | instrumental (adj.起作用的) | bend (v.弯曲) | exit (n.出口)。",
            details: "measuring instrument 属于高频科技/实验室场景复合词。instrumental 是形容词，不能直接作为谓语动词 calibrated 的宾语。",
            cn: "实验室技术人员在开始实验前对精密测量仪器进行了校准。",
            jp: "実験室の技術者は、実験を開始する前に精密測定器具（instrument）を校正しました。"
        }
    },
    {
        id: 7,
        target: "scale",
        category: "中等",
        stem: "The logistics company decided to expand its warehouse operations on a global ________.",
        options: ["scale", "scaled", "weigh", "bush"],
        correct: "scale",
        explanations: {
            guide: "固定介词短语搭配。on a global scale 是高频商务短语，意为“在全球范围内/在全球规模上”，选名词 scale。",
            family: "scale (n.规模/比例) | scaled (adj.按比例的) | weigh (v.称重) | bush (n.灌木)。",
            details: "on a... scale 结构中，scale 作名词意为“规模/程度”。scaled 为过去分词，不能放在冠词 a 及形容词 global 之后作名词中心语。",
            cn: "该物流公司决定在全球范围内扩大其仓库运营规模。",
            jp: "その物流会社は、世界的な規模（scale）で倉庫部門の運営を拡大することを決定しました。"
        }
    },
    {
        id: 8,
        target: "bend",
        category: "中等",
        stem: "Warehouse workers are strictly trained to ________ their knees when lifting heavy boxes to prevent strain.",
        options: ["bend", "bent", "cast", "wipe"],
        correct: "bend",
        explanations: {
            guide: "不定式符号后的动词原形。be trained to 后面需要接动词原形，bend one's knees 表示“弯曲膝盖/屈膝”，选 bend。",
            family: "bend (v.弯曲) | bent (v.过去式) | cast (v.投射/铸造) | wipe (v.擦拭)。",
            details: "to bend one's knees 是职业安全健康中的标准表述。bent 是过去式或过去分词，不能跟在不定式符号 to 后面。",
            cn: "仓库工人接受过严格培训，在搬运重箱子时要弯曲膝盖以防止拉伤。",
            jp: "倉庫作業員は、背中の負傷防ぐために重い箱を持ち上げる際には膝を曲げる（bend）よう厳しく訓練されています。"
        }
    },
    {
        id: 9,
        target: "cast",
        category: "中等",
        stem: "The marketing agency assembled an impressive ________ for the production of the new promotional video.",
        options: ["cast", "casting", "instrument", "greet"],
        correct: "cast",
        explanations: {
            guide: "限定词与形容词后的名词。an impressive 后面接单数可数名词，指宣传片制作的“演员阵容/演职人员”，选 cast。",
            family: "cast (n.演员阵容) | casting (n.选角/铸造) | instrument (n.仪器) | greet (v.问候)。",
            details: "cast 在此作集合名词，指选定的演职人员阵容。casting 是指“选角”的过程，与上下文“集结了一批阵容”的语义不符。",
            cn: "营销机构为新宣传片的制作集结了一阵容强大的演职人员。",
            jp: "マーケティング代理店は、新しいプロモーション動画の制作のために素晴らしいキャスト（cast）を集めました。"
        }
    },
    {
        id: 10,
        target: "bush",
        category: "中等",
        stem: "The groundskeeping team planted a decorative ________ next to the main entrance to improve curb appeal.",
        options: ["bush", "bushy", "wipe", "bend"],
        correct: "bush",
        explanations: {
            guide: "不定冠词与形容词后的单数名词。a decorative 后面需要接可数名词单数，表示“一株观赏性灌木”，选 bush。",
            family: "bush (n.灌木) | bushy (adj.灌木茂密的) | wipe (v.擦拭) | bend (v.弯曲)。",
            details: "a decorative bush 构成名词短语。bushy 是形容词（茂密的），不能直接接在形容词 decorative 后面作名词。",
            cn: "绿化养护团队在大门旁边种植了一株观赏性灌木，以提升建筑的外观吸引力。",
            jp: "造園チームは、建物の外観を高めるために正面玄関の隣に装飾用の低木（bush）を植えました。"
        }
    },
    {
        id: 11,
        target: "weigh",
        category: "中等",
        stem: "The executive committee will carefully ________ the options before committing to the long-term lease contract.",
        options: ["weigh", "weight", "instrument", "scale"],
        correct: "weigh",
        explanations: {
            guide: "助动词与副词后的动词原形。will carefully 后面需要接动词原形，weigh the options 是高频商务搭配，意为“权衡选择/考虑各种方案”。",
            family: "weigh (v.权衡/称重) | weight (n.重量) | instrument (n.工具) | scale (n.规模)。",
            details: "weigh the options 属于托业 Part 5/6 核心动宾搭配。weight 是名词，不能跟在情态动词 will 及副词 carefully 之后充当谓语动词。",
            cn: "执行委员会将在承诺签署长期租赁合同之前仔细权衡各种选择。",
            jp: "執行委員会は、長期賃貸契約を締結する前に、選択肢を慎重に吟味（weigh）する予定です。"
        }
    },
    {
        id: 12,
        target: "greet",
        category: "中等",
        stem: "The human resources director extended a warm ________ to all the new trainees during the orientation session.",
        options: ["greeting", "greet", "sink", "exit"],
        correct: "greeting",
        explanations: {
            guide: "冠词与形容词后的名词考点。a warm 后面需要接名词，extend a warm greeting 指“致以热烈的欢迎/问候”，选用名词 greeting。",
            family: "greeting (n.问候/迎接) | greet (v.问候) | sink (v./n.下沉/水槽) | exit (n.出口)。",
            details: "extend a greeting (to sb) 是固定高阶商务礼仪表述。greet 是动词原形，不能被冠词 a 和形容词 warm 直接修饰。",
            cn: "人力资源总监在入职培训期间向所有新学员致以热烈的欢迎。",
            jp: "人事部長は、オリエンテーションの中で新しく入社した研修生全員に温かい歓迎の言葉（greeting）を述べました。"
        }
    },
    {
        id: 13,
        target: "instrument",
        category: "困难",
        stem: "Ms. Patel was highly ________ in securing the venture capital funding necessary for the startup expansion.",
        options: ["instrumental", "instrument", "instrumentation", "scale"],
        correct: "instrumental",
        explanations: {
            guide: "固定表语搭配考点。be instrumental in doing sth 是托业高阶短语，意为“在做某事中起关键/重要作用”，选用形容词 instrumental。",
            family: "instrumental (adj.起重要作用的) | instrument (n.仪器/工具) | instrumentation (n.仪器化) | scale (n.规模)。",
            details: "was highly instrumental in securing... 表示在获得融资方面发挥了极其重要的作用。instrument 为名词，无法由副词 highly 修饰并作为系动词 was 的表语。",
            cn: "帕特尔女士在争取该初创企业扩张所需的风险投资资金方面发挥了极其重要的作用。",
            jp: "パテル氏は、スタートアップの拡大に必要なベンチャーキャピタル資金を確保する上で非常に重要な役割を果たし（instrumental）ました。"
        }
    },
    {
        id: 14,
        target: "scale",
        category: "困难",
        stem: "Due to unexpected budget constraints, the board voted to ________ back the scope of the international campaign.",
        options: ["scale", "scaled", "weigh", "cast"],
        correct: "scale",
        explanations: {
            guide: "高阶动词短语搭配。to 后面接动词原形，scale back 是固定短语，意为“缩减/缩小（规模/范围）”，选用 scale。",
            family: "scale (v.改变规模) | scaled (adj.缩放的) | weigh (v.权衡) | cast (v.投射)。",
            details: "scale back the scope 意为缩减活动规模。scaled 是过去分词，不能跟在动词不定式符号 to 后面。",
            cn: "由于意料之外的预算限制，董事会投票决定缩减该国际宣传活动的规模。",
            jp: "予期せぬ予算の制約のため、取締役会は国際キャンペーンの規模を縮小（scale back）することを決議しました。"
        }
    },
    {
        id: 15,
        target: "cast",
        category: "困难",
        stem: "Recent quarterly losses have ________ doubt on the feasibility of the company's ambitious overseas expansion plan.",
        options: ["cast", "casting", "bent", "wiped"],
        correct: "cast",
        explanations: {
            guide: "助动词与高阶短语搭配。have 后面跟动词过去分词构成现在完成时，cast doubt on... 是固定搭配，意为“对……提出怀疑/使……蒙上阴影”。注意 cast 的过去分词仍为 cast。",
            family: "cast (v.过去分词同形) | casting (n.选角) | bent (v.弯曲过去式) | wiped (v.擦拭过去式)。",
            details: "have cast doubt on 指使某事受到质疑。cast 的动词三态变化为 cast-cast-cast，因此在 have 之后使用原形同形的过去分词 cast。",
            cn: "最近的季度亏损使该公司雄心勃勃的海外扩张计划的可行性受到了质疑。",
            jp: "直近の四半期赤字は、同社の野心的な海外拡大計画の実現可能性に疑問を投げかけ（cast）ました。"
        }
    },
    {
        id: 16,
        target: "bend",
        category: "困难",
        stem: "Although strict compliance is mandatory, the supervisor was willing to ________ the rules slightly for this exceptional case.",
        options: ["bend", "bending", "exit", "weigh"],
        correct: "bend",
        explanations: {
            guide: "高阶习惯用语搭配。was willing to 后面接动词原形，bend the rules 是习惯用语，意为“变通/通融规章制度”，选 bend。",
            family: "bend (v.弯曲/变通) | bending (n./adj.弯曲的) | exit (v.离开) | weigh (v.权衡)。",
            details: "bend the rules 专指在特殊情况下“灵活处理/通融规定”。bending 是现在分词或动名词，不能在 was willing to 后面接原形。",
            cn: "尽管严格遵守规定是强制性的，但主管还是愿意在这个特殊情况下略微通融一下规定。",
            jp: "厳格な遵守が義務付けられていますが、監督者はこの例外的なケースに限り、規則を少し曲げる（bend）ことをいとわない姿勢でした。"
        }
    },
    {
        id: 17,
        target: "wipe",
        category: "困难",
        stem: "The security protocol requires that all confidential customer data be completely ________ from decommissioned servers.",
        options: ["wiped", "wipe", "wiper", "sunk"],
        correct: "wiped",
        explanations: {
            guide: "虚拟语气被动语态考点。requires that... (should) be + 过去分词，be wiped from... 表示“从……中彻底清空/擦除”，选用过去分词 wiped。",
            family: "wiped (v.过去分词) | wipe (v.原形) | wiper (n.擦拭器) | sunk (v.下沉过去分词)。",
            details: "require that 从句中谓语使用 (should) be + 过去分词。be completely wiped 表达数据被“彻底清除”。",
            cn: "安全协议要求将所有机密客户数据从退役的服务器中彻底清除。",
            jp: "セキュリティプロトコルにより、廃止されたサーバーからすべての機密顧客データを完全に消去（wiped）することが義務付けられています。"
        }
    },
    {
        id: 18,
        target: "sink",
        category: "困难",
        stem: "Unexpected market inflation caused consumer confidence indices to ________ to their lowest levels in a decade.",
        options: ["sink", "sinking", "greet", "bush"],
        correct: "sink",
        explanations: {
            guide: "动词不定式与比喻用法。cause sth to do 结构中，to 后面需要接动词原形，sink 指指数“下跌/沉陷”至最低点，选 sink。",
            family: "sink (v.下跌/下沉) | sinking (adj.下沉的) | greet (v.问候) | bush (n.灌木)。",
            details: "sink to lowest levels 表示跌至历史低位。sinking 为分词形式，不能用在 cause sth to do 的不定式结构中。",
            cn: "意料之外的市场通货膨胀导致消费者信心指数下跌至十年来的最低水平。",
            jp: "予期せぬ市場のインフレにより、消費者信頼感指数は過去10年間で最低の水準まで下落（sink）しました。"
        }
    }
];