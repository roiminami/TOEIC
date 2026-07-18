// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag281-290.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "surround",
        pos: "動/名",
        ipa: "/səˈraʊnd/",
        cn: "围绕，环绕，包围；周围物",
        jp: "囲む、取り囲む、包囲する",
        family: "surround / surrounding / surroundings / surrounded",
        tips: "办公环境设计、酒店选址及房地产开发高频词。常考搭配 be surrounded by...（被……所环绕）。其名词复数形式 surroundings 意为“周围环境”，专指物理空间或自然景观。",
        desc: "Trees surround the office."
    },
    {
        word: "afterward",
        pos: "副",
        ipa: "/ˈæftərwərd/",
        cn: "后来，之后，随后",
        jp: "その後、後で",
        family: "afterward / afterwards",
        tips: "商务日程安排、会议纪要与流程变更核心副词。常用作时间连接词，表示某事发生之后的后续动作。注意它与介词 after 的区别：afterward 是副词，其后不能直接加名词或从句。",
        desc: "We left afterward."
    },
    {
        word: "closely",
        pos: "副",
        ipa: "/ˈkloʊsli/",
        cn: "紧密地，密切地，仔细地",
        jp: "密接に、注意深く、綿密に",
        family: "close / closely / closeness",
        tips: "团队协作、市场监控与审计核对高频副词。常考地道搭配包括 work closely with...（与……紧密合作）、monitor closely（密切监控）。在阅读中也常用于修饰 examine 或 inspect，表示“仔细察看”。",
        desc: "Watch it closely."
    },
    {
        word: "permanent",
        pos: "形/名",
        ipa: "/ˈpɜːrmənənt/",
        cn: "永久的，固定的，长期的；烫发",
        jp: "永久的な、常勤の、終身の",
        family: "permanent / permanently / permanence",
        tips: "人事招聘、劳务合同与资产配置核心形容词。托业职场中最核心的表达为 permanent position（固定/全职职位），用以与 temporary（临时的）或 contractual（合同制的）相对比。",
        desc: "The job is permanent."
    },
    {
        word: "deserve",
        pos: "動",
        ipa: "/dɪˈzɜːrv/",
        cn: "值得，应得",
        jp: "〜に値する、〜を受けるに足る",
        family: "deserve / deserved / deserving / deservedly",
        tips: "绩效评估、员工表彰与客户反馈高频状态动词。常用结构为 deserve recognition（值得表彰）、deserve a promotion（理应获得晋升）。通常不用于进行时态。",
        desc: "You deserve it."
    },
    {
        word: "existing",
        pos: "形",
        ipa: "/ɪɡˈzɪstɪŋ/",
        cn: "现有的，现行的",
        jp: "既存の、現行の",
        family: "exist / existence / existing / existed",
        tips: "资产盘点、系统升级与客户保留核心形容词。常考经典商业搭配如 existing clients（现有客户）、existing equipment（现有设备）。由动词 exist 的现在分词转化而来，仅作前置定语。",
        desc: "Use existing files."
    },
    {
        word: "regret",
        pos: "動/名",
        ipa: "/rɪˈɡret/",
        cn: "后悔，遗憾，抱歉；遗憾",
        jp: "後悔する、残念に思う；後悔、遺憾",
        family: "regret / regrettable / regrettably / regretful",
        tips: "商务信函致歉或通知调整的标志性核心词。极其高频的公文句式为 We regret to inform you that...（我们很遗憾地通知您……）。注意其名动同形特征及衍生副词 regrettably（遗憾地）。",
        desc: "I regret it."
    },
    {
        word: "treatment",
        pos: "名",
        ipa: "/ˈtriːtmənt/",
        cn: "对待，处理，治疗",
        jp: "取り扱い、待遇、治療",
        family: "treat / treatment / treatments",
        tips: "员工福利、医疗保险理赔与工业污水废弃物处理多义高频名词。在人力资源语境中指 preferential treatment（优待/特遇），在环境工程语境中指废水或材料的 treatment（加工/处理）。",
        desc: "The treatment worked."
    },
    {
        word: "dozen",
        pos: "名/形",
        ipa: "/ˈdʌzn/",
        cn: "一打，十二个；许多",
        jp: "ダース、12個；多数の",
        family: "dozen / dozens",
        tips: "行政采购与库存清点高频量词。固定搭配 a dozen + 复数名词（如 a dozen office appliances 一打办公设备）。若前有基数词，dozen 必须用单数形式；若是 dozens of... 则表示“数十个/许多”。",
        desc: "Buy a dozen."
    },
    {
        word: "proceed",
        pos: "動",
        ipa: "/proʊˈsiːd/",
        cn: "前进，继续进行，着手",
        jp: "進む、続行する、着手する",
        family: "proceed / procedure / proceeding / proceeds",
        tips: "流程审批、项目推进与财务收益核心动词。最常考固定搭配为 proceed with...（继续进行某事），如 proceed with the expansion plan。其名词复数 proceeds 意为“收益/红利”，属于高阶考点。",
        desc: "Please proceed now."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "surround",
        category: "简单",
        stem: "Beautiful green spaces ________ the corporate headquarters, providing a peaceful working environment for the staff.",
        options: ["surround", "dozen", "proceed", "items"],
        correct: "surround",
        explanations: {
            guide: "谓语动词词义辨析。空格前为主语复数名词词组 green spaces（绿地），空格后为宾语，此处需要填入及物动词原形作谓语。",
            family: "surround (v.围绕) | dozen (n./adj.一打) | proceed (v.继续进行) | items (n-pl物品)。",
            details: "根据句意“美丽的绿地围绕着公司总部”，只有及物动词 surround 符合逻辑，构建经典的办公选址与外部环境描述场景。其余干扰项词性或语意完全不通。",
            cn: "美丽的绿地围绕着公司总部，为员工提供了一个宁静的工作环境。",
            jp: "美しい緑地が本社を取り囲んで（surround）おり、スタッフに穏やかな勤務環境を提供しています。"
        }
    },
    {
        id: 2,
        target: "afterward",
        category: "简单",
        stem: "The executive manager gave a brief presentation and answered several policy questions ________ during the luncheon.",
        options: ["afterward", "closely", "permanent", "memo"],
        correct: "afterward",
        explanations: {
            guide: "时间状语副词词义辨析。空格位于完整句子的末尾，用于修饰整个动作发生的时间先后顺序，需填入时间副词。",
            family: "afterward (adv.后来/随后) | closely (adv.紧密地) | permanent (adj.永久的) | memo (n.备忘录)。",
            details: "afterward 意为“后来/随后”，在此处作时间状语，表示在简短演讲“之后”回答了问题，非常符合商务会议与招待会流程叙事。其余选项无法表达时间先后或词性不符。",
            cn: "执行经理作了简短的演讲，随后在午宴期间回答了几个政策问题。",
            jp: "執行マネージャーは短いプレゼンテーションを行い、その後（afterward）の昼食会でいくつかの政策に関する質問に答えました。"
        }
    },
    {
        id: 3,
        target: "closely",
        category: "简单",
        stem: "The legal department examined the joint venture contract ________ to ensure that all clauses protected our interests.",
        options: ["closely", "existing", "treatment", "booked"],
        correct: "closely",
        explanations: {
            guide: "修饰动词的状语副词词义辨析。空格前有及物动词 examined（审查）及其宾语 contract，此处需填入副词作状语以修饰审查的细致程度。",
            family: "closely (adv.仔细地/密切地) | existing (adj.现有的) | treatment (n.处理/对待) | booked (adj.被预订的)。",
            details: "examine closely 是托业法务审计场景中的标志性地道搭配，意为“仔细审查/严格核对”，用以引出后续确保条款安全的目的。其他选项不符合修饰动词的语义。",
            cn: "法律部门仔细审查了合资合同，以确保所有条款都能保护我们的利益。",
            jp: "法務部門は、すべての条項が当社の利益を保護しているか確認するため、合弁契約書を注意深く（closely）調査しました。"
        }
    },
    {
        id: 4,
        target: "permanent",
        category: "简单",
        stem: "After completing the intensive six-month probationary period, Mr. Lu was finally offered a ________ position.",
        options: ["permanent", "deserve", "regret", "morning"],
        correct: "permanent",
        precedence: "Lu",
        explanations: {
            guide: "修饰中心名词的定语形容词辨析。空格位于不定冠词 a 和名词 position 之间，此位置必须填入形容词作前置定语。",
            family: "permanent (adj.永久的/固定的) | deserve (v.值得) | regret (v./n.遗憾) | morning (n.早晨)。",
            details: "permanent position 意为“固定职位/全职员工”，与前文完成试用期（probationary period）的职场晋升叙事形成完美的逻辑因果。其余干扰项无法修饰职位。",
            cn: "在完成了为期六个月的密集试用期后，Lu先生终于获得了固定职位。",
            jp: "6ヶ月間の集中的な試用期間を終えた後、Lu氏はついに正規の（permanent）職を提示されました。"
        }
    },
    {
        id: 5,
        target: "deserve",
        category: "简单",
        stem: "Outstanding team members who consistently exceed their quarterly performance goals ________ special recognition.",
        options: ["deserve", "surround", "afterward", "golf"],
        correct: "deserve",
        explanations: {
            guide: "限定动词谓语的语义选择。主语是 Outstanding team members（后接 who 引导的定语从句），空格处需要填入复数谓语动词原形。",
            family: "deserve (v.值得/应得) | surround (v.围绕) | afterward (adv.后来) | golf (n.高尔夫)。",
            details: "deserve special recognition 意为“理应获得特别表彰”，是企业绩效评估与员工关系管理中的高频正面搭配，契合优秀员工超额完成目标的语境。",
            cn: "始终如一地超额完成季度绩效目标的优秀团队成员理应获得特别表彰。",
            jp: "四半期の業績目標を常に達成している優秀なチームメンバーは、特別な評価を受けるに値し（deserve）ます。"
        }
    },
    {
        id: 6,
        target: "existing",
        category: "简单",
        stem: "The technical advisory team recommended integrating the new software into our ________ network infrastructure.",
        options: ["existing", "closely", "dozen", "crates"],
        correct: "existing",
        explanations: {
            guide: "名词前的定语形容词语义辨析。空格位于物主代词 our 与名词词组 network infrastructure 之间，需填入形容词修饰网络基础设施。",
            family: "existing (adj.现有的/现行的) | closely (adv.紧密地) | dozen (n./adj.一打) | crates (n-pl板条箱)。",
            details: "existing infrastructure 意为“现有的/现行的基础设施”，完美符合IT咨询与系统升级中“将新软件融入旧系统”的经典托业办公场景。其他选项词性错乱或不合逻辑。",
            cn: "技术咨询团队建议将新软件整合到我们现有的网络基础设施中。",
            jp: "技術アドバイザリーチームは、新しいソフトウェアを当社の既存の（existing）ネットワークインフラに統合することを推奨しました。"
        }
    },
    {
        id: 7,
        target: "regret",
        category: "中等",
        stem: "We ________ to inform all registered participants that the upcoming leadership seminar has been canceled.",
        options: ["regret", "proceed", "deserve", "encounter"],
        correct: "regret",
        explanations: {
            guide: "谓语动词及固定搭配判定。空格位于主语 We 之后，后接动词不定式结构 to inform，考核特定商业致歉句型。",
            family: "regret (v.遗憾/抱歉) | proceed (v.继续) | deserve (v.值得) | encounter (v.遭遇)。",
            details: "We regret to inform you that... 是托业考试中商务信函、紧急邮件通知调整或取消活动时的铁板官方套话，意为“我们很遗憾地通知您”。其他选项虽是动词，但均不符合此类通知公文语境。",
            cn: "我们很遗憾地通知所有注册参与者，即将举行的领导力研讨会已被取消。",
            jp: "登録された参加者の皆様に、間もなく開催予定のリーダーシップセミナーが中止になったことをお知らせすることを遺憾に（regret）思います。"
        }
    },
    {
        id: 8,
        target: "treatment",
        category: "中等",
        stem: "The newly updated corporate manual prioritizes fair ________ and equal professional opportunities for all employees.",
        options: ["treatment", "permanent", "existing", "subsidy"],
        correct: "treatment",
        explanations: {
            guide: "动词宾语的名词语义辨析。空格位于及物动词 prioritizes（优先考虑）之后，且与并列成分 opportunities 由 and 连接，需填入名词作宾语。",
            family: "treatment (n.对待/处理) | permanent (adj.永久的) | existing (adj.现有的) | subsidy (n.补贴)。",
            details: "fair treatment 意为“公平的对待/公平的待遇”，是现代企业规章制度、员工保障手册中极为高频的人事核心术语。subsidy（补贴）一般不用 fair 修饰，且无法与 professional opportunities 完美并列。",
            cn: "新更新的公司手册优先考虑为所有员工提供公平的对待和均等的职业机会。",
            jp: "新しく改訂された社内マニュアルでは、すべての従業員に対する公平な待遇（treatment）と平等なキャリア機会が最優先されています。"
        }
    },
    {
        id: 9,
        target: "dozen",
        category: "中等",
        stem: "The administrative department ordered a ________ new ergonomic chairs to replace the old furniture in the lounge.",
        options: ["dozen", "surround", "afterward", "revenue"],
        correct: "dozen",
        explanations: {
            guide: "限定修饰名词的量词辨析。空格前有不定冠词 a，后接形容词加复数可数名词 new ergonomic chairs，需填入能修饰复数名词的特定数量单位词。",
            family: "dozen (n./adj.一打/十二个) | surround (v.围绕) | afterward (adv.后来) | revenue (n.收入)。",
            details: "a dozen 意为“一打/十二个”，在此处直接修饰复数名词 chairs，符合行政部批量采购办公耗材或家具的后勤日常场景。其余项词性不合，无法构成数量修饰。",
            cn: "行政部门订购了一打新型人体工学椅，以更换休息室里的旧家具。",
            jp: "総務部門は、ラウンジの古い家具を交換するために、1ダース（dozen）の新しい人間工学に基づいた椅子を注文しました。"
        }
    },
    {
        id: 10,
        target: "proceed",
        category: "中等",
        stem: "The municipal council advised the real estate developers to ________ with the residential construction project immediately.",
        options: ["proceed", "closely", "regret", "streamline"],
        correct: "proceed",
        explanations: {
            guide: "动词不定式及介词固定搭配。空格前有带 to 的不定式标记，后接介词 with 引导的短语，需填入一个不及物动词原形。",
            family: "proceed (v.继续进行/着手) | closely (adv.紧密地) | regret (v.遗憾) | streamline (v.精简)。",
            details: "proceed with something 是高频固定短语，意为“继续进行/着手处理某事”，在此处指继续推进住宅建设工程。streamline 是及物动词，不能直接接 with 结构。",
            cn: "市议会建议房地产开发商立即继续推进住宅建设项目的实施。",
            jp: "市議会は、不動産開発業者に対し、住宅建設プロジェクトを直ちに続行する（proceed）ようアドバイスしました。"
        }
    },
    {
        id: 11,
        target: "permanent",
        category: "中等",
        stem: "Due to the massive departmental restructuring, several confidential financial files will be ________ archived in the cloud.",
        options: ["permanently", "permanent", "permanence", "permanency"],
        correct: "permanently",
        explanations: {
            guide: "词族派生词词性判定。空格位于助动词 will be 与过去分词 archived（归档）之间，修饰被动语态中的动词，必须填入副词形式。",
            family: "permanently (adv.永久地) | permanent (adj.永久的) | permanence (n.永久/持久) | permanency (n.永久性)。",
            details: "permanently archived 意为“永久归档/长久保存”。在数字化办公和公司架构重组的叙事语境下，需要副词来修饰动词短语。其余选项词性均不符合此位置要求。",
            cn: "由于大规模的部门重组，几个机密财务文件将被永久归档在云端。",
            jp: "大規模な部門再編のため、いくつかの機密財務ファイルはクラウドに永久に（permanently）保管されることになります。"
        }
    },
    {
        id: 12,
        target: "existing",
        category: "中等",
        stem: "The prestigious biomedical laboratory has been in ________ for twenty years, leading innovation in the market.",
        options: ["existence", "existing", "exists", "existed"],
        correct: "existence",
        explanations: {
            guide: "词族派生词与介词短语搭配。空格位于介词 in 之后，与之构成固定状态短语，此位置必须填入名词形式。",
            family: "existence (n.存在) | existing (adj.现有的) | exists (v-3sg存在) | existed (v-ed存在过)。",
            details: "be in existence 是地道固定搭配，意为“存在/创立/开办”，在此处指该顶尖生物医学实验室已经成立存在了二十年，展现历史悠久。其他分词或动词形式无法接在介词 in 后面。",
            cn: "这家声誉卓著的生物医学实验室已经存在了二十年，一直在市场上引领创新。",
            jp: "その名声高いバイオメディカル研究所は20年間存続（existence）しており、市場におけるイノベーションをリードしてきました。"
        }
    },
    {
        id: 13,
        target: "closely",
        category: "困难",
        stem: "The independent marketing firm works ________ with local culinary attractions to boost regional tourism revenue.",
        options: ["closely", "close", "closeness", "closer"],
        correct: "closely",
        explanations: {
            guide: "高阶同族副词用法辨析。空格后有介词短语 with...，修饰不及物动词 works，需区分 close 与 closely 在商务场景中的抽象语义差异。",
            family: "closely (adv.紧密地/密切地) | close (adv.靠近地/adj.亲密的) | closeness (n.亲密) | closer (adj/adv-comp更接近)。",
            details: "work closely with 意为“与……紧密合作/密切配合”，侧重于商务协同与抽象业务往来。而 close 作副词时主要指物理距离上的接近（如 sit close to the door），在此处语义不符。因此选副词 closely。",
            cn: "这家独立的营销公司与当地的餐饮景点紧密合作，以提升地区旅游收入。",
            jp: "その独立系マーケティング会社は、地域の観光収益を向上させるため、地元のグルメスポットと密接に（closely）連携しています。"
        }
    },
    {
        id: 14,
        target: "regret",
        category: "困难",
        stem: "________, the dispute arbitration process took much longer than anticipated, forcing the firms to delay the signing ceremony.",
        options: ["Regrettably", "Regretful", "Regret", "Regretted"],
        correct: "Regrettably",
        explanations: {
            guide: "句首评注性副词语法判定。空格位于句首，且后面有逗号与主句隔开，说明该词用于修饰整个句子的客观态度，必须填入副词。",
            family: "Regrettably (adv.遗憾地/不幸的是) | Regretful (adj.后悔的) | Regret (v./n.遗憾) | Regretted (v-ed后悔)。",
            details: "Regrettably 意为“遗憾地/令人遗憾的是”，是一个高阶评注性副词，常置于商务公文句首，用以委婉引出坏消息（如仲裁超时、签约被迫推迟）。其余选项词性不符，无法独立修饰全句。",
            cn: "遗憾的是，纠纷仲裁过程比预期的要长得多，迫使两家公司推迟了签约仪式。",
            jp: "あいにく（Regrettably）、紛争調停プロセスが予想以上に長引いたため、両社は調印式を延期せざるを得ませんでした。"
        }
    },
    {
        id: 15,
        target: "proceed",
        category: "困难",
        stem: "All the net ________ from the high-profile charity golf tournament will be allocated to support public housing projects.",
        options: ["proceeds", "procedures", "proceeding", "proceed"],
        correct: "proceeds",
        explanations: {
            guide: "特殊名词语义及数的变化辨析。空格前有定冠词 the 和定语形容词 net（净的），且后续谓语为 will be allocated，此处需填入名词作主语。",
            family: "proceeds (n-pl收益/实收款项) | procedures (n-pl程序/手续) | proceeding (n.诉讼/行动) | proceed (v.继续进行)。",
            details: "net proceeds 是高阶商业财务专有名词，意为“净收益/实收款项”，通常固定使用复数形式，完美对应慈善高尔夫锦标赛筹集资金流向的语境。procedures（流程）与 net 无法合理搭配。",
            cn: "这场备受瞩目的慈善高尔夫锦标赛的所有净收益都将被拨用于支持公共住房项目。",
            jp: "注目のチャリティゴルフ大会による純収益（proceeds）はすべて、公営住宅プロジェクトの支援に割り当てられます。"
        }
    },
    {
        id: 16,
        target: "surround",
        category: "困难",
        stem: "The methodical laboratory team quickly adapted to the new workspace and its technologically advanced ________.",
        options: ["surroundings", "surrounds", "surrounded", "surrounding"],
        correct: "surroundings",
        explanations: {
            guide: "物主代词后的核心名词辨析。空格前有形容词词组 advanced 修饰，且处于其物主代词 its 引导的并列结构末尾，此处必须填入名词形式。",
            family: "surroundings (n-pl周围环境) | surrounds (v-3sg围绕/n.边沿) | surrounded (v-ed包围) | surrounding (adj.周围的)。",
            details: "surroundings 是固定名词，意为“周围环境/物理空间”，且常用复数形式。此句指实验室团队适应了技术先进的“工作环境”。surrounding 是形容词，不能在句末无名词时单独使用。",
            cn: "有条不紊的实验室团队迅速适应了新的工作空间及其技术先进的周围环境。",
            jp: "整然とした実験チームは、新しいワークスペースとその技術的に高度な環境（surroundings）に素早く適応しました。"
        }
    },
    {
        id: 17,
        target: "deserve",
        category: "困难",
        stem: "The senior software architect was ________ elected to the technology advisory council after years of flawless dedication.",
        options: ["deservedly", "deserve", "deserving", "deserved"],
        correct: "deservedly",
        explanations: {
            guide: "修饰被动语态的副词位置判定。空格位于助动词 was 和过去分词 elected 之间，作状语修饰该动作，必须填入副词形式。",
            family: "deservedly (adv.理所当然地/应得地) | deserve (v.值得) | deserving (adj.值得支持的) | deserved (adj.应得的)。",
            details: "deservedly 意为“理所当然地/当之无愧地”，是一个高阶职场修饰副词，用来强调某人因为多年无瑕的奉献（flawless dedication）而获得顾问委员会的席位是众望所归。其他同族词汇词性不符。",
            cn: "在付出了多年无瑕的奉献后，这位高级软件架构师当之无愧地入选了技术顾问委员会。",
            jp: "長年の完璧な貢献を経て、主任ソフトウェアアーキテクトは当然のことながら（deservedly）技術諮問委員会に選出されました。"
        }
    },
    {
        id: 18,
        target: "afterward",
        category: "困难",
        stem: "The committee thoroughly vetted the initial budget proposal and voted on the contentious amendments shortly ________.",
        options: ["afterward", "after", "before", "prior"],
        correct: "afterward",
        explanations: {
            guide: "时间状语副词与介词的词性深度辨析。空格位于句尾句号前，前面有修饰词 shortly（不久），此处必须填入能独立作状语的副词。",
            family: "afterward (adv.后来/此后) | after (prep/conj.在……之后) | before (prep/adv.在……之前) | prior (adj/adv.在先的)。",
            details: "shortly afterward 意为“此后不久/随后不久”，是极地道的固定副词短语，用以说明投票表决是在仔细审查提案之后紧接着发生的。干扰项 after 是介词或连词，后面必须接名词或从句，不能在此处单独断句。prior 必须与 to 搭配（prior to）。",
            cn: "委员会彻底审查了最初的预算提案，并在此后不久对有争议的修正案进行了投票表决。",
            jp: "委員会は最初の予算案を徹底的に審査し、そのすぐ後（afterward）に、議論の余地がある修正案について採決を行いました。"
        }
    }
];