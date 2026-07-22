// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data31-40.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "hang",
        pos: "動",
        ipa: "/hæŋ/",
        cn: "悬挂，挂起",
        jp: "掛ける、吊るす",
        family: "hanging / hanger / hung",
        tips: "听力 Part 1 高频核心词。常考被动或状态描述：be hanging on the wall（挂在墙上）或 hang from the ceiling（从天花板挂下）。",
        desc: "A painting is hanging on the wall."
    },
    {
        word: "pots",
        pos: "名",
        ipa: "/pɑːts/",
        cn: "锅，罐，花盆（复数）",
        jp: "鉢、鍋（複数形）",
        family: "pot / potted / pottery",
        tips: "托业常见于厨房或园艺场景。常考烹饪用锅（cooking pots）或装植物的花盆，注意与 potted plant（盆栽）的词族联动。",
        desc: "The kitchen has several cooking pots."
    },
    {
        word: "row",
        pos: "名/動",
        ipa: "/roʊ/",
        cn: "一排，一行；划船",
        jp: "列、並び；船をこぐ",
        family: "rows / rowing / rower",
        tips: "听力 Part 1 与阅读最高频短语：in a row（排成一排）。常用于描写座位、树木、桌椅呈线性整齐排列。",
        desc: "Chairs are arranged in a row."
    },
    {
        word: "examine",
        pos: "動",
        ipa: "/ɪɡˈzæmɪn/",
        cn: "检查，仔细观察",
        jp: "検査する、調査する、診察する",
        family: "examination / examiner / examinee",
        tips: "高频商务动作词。听力 Part 1 常见 examine a document（检查文件）或 examine equipment（检修设备）；阅读常考其名词 examination（审查）。",
        desc: "He is examining a document now."
    },
    {
        word: "path",
        pos: "名",
        ipa: "/pæθ/",
        cn: "小路，通路；路径",
        jp: "小道、通路、パス",
        family: "pathway / footpath",
        tips: "实景考点指公园或建筑周边的“步行径”（walking path）。阅读引申义指“发展路径/途径”（path to success / career path）。",
        desc: "A walking path leads to the garden."
    },
    {
        word: "arrange",
        pos: "動",
        ipa: "/əˈreɪndʒ/",
        cn: "安排，排列，布置",
        jp: "手配する、整列させる、配置する",
        family: "arrangement / arranger / rearranged",
        tips: "托业双重核心词：1. 物品布局（be arranged in a row）；2. 商务事务安排（arrange a meeting/travel）。其名词 arrangements 极高频。",
        desc: "Please arrange the chairs properly."
    },
    {
        word: "ceiling",
        pos: "名",
        ipa: "/ˈsiːlɪŋ/",
        cn: "天花板；最高限额",
        jp: "天井；上限",
        family: "ceiling fan / high-ceiling",
        tips: "实物考点指室内天花板（如 ceiling light 顶灯）；商务金融阅读中考查引申义“最高限额”（如 budget ceiling 预算上限）。",
        desc: "The room has a high ceiling."
    },
    {
        word: "position",
        pos: "名/動",
        ipa: "/pəˈzɪʃn/",
        cn: "位置，职位；放置",
        jp: "位置、職、立場；配置する",
        family: "positioning / reposition / positional",
        tips: "1. 招聘场景核心词指“职位”（job position）；2. 动作/被动句型指“被摆放在某处”（be positioned near the window）。",
        desc: "She applied for a new position."
    },
    {
        word: "button",
        pos: "名/動",
        ipa: "/ˈbʌtn/",
        cn: "按钮，扣子；按按钮，扣上",
        jp: "ボタン；ボタンを留める",
        family: "buttoned / unbutton / push-button",
        tips: "设备操作高频词：press/push the button（按按钮）。服装场景常考 button a shirt/coat（扣上衬衫/大衣扣子）。",
        desc: "Press the green button to start."
    },
    {
        word: "potted plant",
        pos: "名",
        ipa: "/ˌpɑːtɪd ˈplænt/",
        cn: "盆栽，盆栽植物",
        jp: "鉢植えの植物",
        family: "pot / potted / plant",
        tips: "托业 Part 1 听力必考核心实体词！专指办公室、大堂、走廊或露台摆放的室内盆栽植物（常用复数 potted plants）。",
        desc: "There is a potted plant in the hallway."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "hang",
        category: "简单",
        stem: "Several colorful artwork frames will ________ on the wall of the main conference hallway.",
        options: ["hang", "hanging", "ceiling", "position"],
        correct: "hang",
        explanations: {
            guide: "情态动词后的动词原形。will 后面需要接动词原形，充当句子的核心谓语，选 hang。",
            family: "hang (v.悬挂) | hanging (n./adj.悬挂的) | ceiling (n.天花板) | position (n.位置)。",
            details: "will 后面必须跟动词原形。hanging 是分词形式，不能直接放在情态动词 will 之后作谓语。",
            cn: "几幅色彩鲜艳的艺术画框将挂在大会议室走廊的墙上。",
            jp: "いくつかの鮮やかな絵画の額縁が、メイン会議室の廊下の壁に掛けられる（hang）予定です。"
        }
    },
    {
        id: 2,
        target: "arrange",
        category: "简单",
        stem: "The event coordinator was asked to ________ all the chairs before the seminar begins.",
        options: ["arrange", "arrangement", "examine", "button"],
        correct: "arrange",
        explanations: {
            guide: "动词不定式结构。was asked to 后面必须接动词原形，表达“安排/排列”椅子的动作，选 arrange。",
            family: "arrange (v.安排/排列) | arrangement (n.安排) | examine (v.检查) | button (n.按钮)。",
            details: "to 为不定式符号，后接动词原形。arrangement 是名词，不能跟在不定式符号 to 之后作动词。",
            cn: "活动协调员被要求在研讨会开始前将所有椅子排列好。",
            jp: "イベントコーディネーターは、セミナーが始まる前にすべての椅子を整列させる（arrange）よう要求されました。"
        }
    },
    {
        id: 3,
        target: "potted plant",
        category: "简单",
        stem: "A small ________ was placed near the window to brighten up the reception desk.",
        options: ["potted plant", "pots", "path", "ceiling"],
        correct: "potted plant",
        explanations: {
            guide: "不定冠词与形容词修饰的可数名词。a small 后面需要接可数名词单数，表达接待台旁的“盆栽植物”，选 potted plant。",
            family: "potted plant (n.盆栽植物) | pots (n.罐/花盆) | path (n.小路) | ceiling (n.天花板)。",
            details: "a small 后面修饰单数名词。pots 是复数形式，且含义侧重于锅或花盆本身，不符合此处表达特定一盆植物的语义。",
            cn: "前台接待桌旁摆放了一株小盆栽，使环境显得更有生气。",
            jp: "受付デスクを明るくするために、窓の近くに小さな鉢植え（potted plant）が置かれました。"
        }
    },
    {
        id: 4,
        target: "examine",
        category: "简单",
        stem: "The technician will ________ the broken printer to identify why it stopped printing.",
        options: ["examine", "examination", "row", "hang"],
        correct: "examine",
        explanations: {
            guide: "情态动词后的动词原形。will 后面接动词原形 examine，表示技术人员去“检查”故障打印机。",
            family: "examine (v.检查) | examination (n.检查) | row (n.一排) | hang (v.悬挂)。",
            details: "will 后面需要接动词原形。examination 是名词，无法在情态动词后充当谓语动词。",
            cn: "技术人员将检查故障打印机，以查明其停止打印的原因。",
            jp: "技術者は、壊れたプリンターが印刷を停止した原因を特定するためにそれを検査（examine）する予定です。"
        }
    },
    {
        id: 5,
        target: "position",
        category: "简单",
        stem: "Ms. Patel is very qualified for the managerial ________ in the marketing department.",
        options: ["position", "positioned", "arrange", "path"],
        correct: "position",
        explanations: {
            guide: "形容词后的名词表“职位”。for the managerial 后面需要接名词，组成 managerial position（管理职位）。",
            family: "position (n.职位/位置) | positioned (v-ed形式) | arrange (v.安排) | path (n.小路)。",
            details: "managerial 是形容词（管理上的），空格处需接名词。positioned 是动词过去式/分词，不能作介词 for 的宾语中心词。",
            cn: "帕特尔女士非常有资格胜任市场部的管理职位。",
            jp: "パテル氏は、マーケティング部門の管理職（position）に非常に適任です。"
        }
    },
    {
        id: 6,
        target: "path",
        category: "简单",
        stem: "Visitors are reminded to stay on the paved ________ while walking around the botanical garden.",
        options: ["path", "row", "pots", "button"],
        correct: "path",
        explanations: {
            guide: "形容词修饰的名词。on the paved 后面接名词，构成 paved path（铺好的小路/石板路）。",
            family: "path (n.小路) | row (n.一排) | pots (n.花盆) | button (n.按钮)。",
            details: "paved（铺设好的）是形容词，后面修饰名词 path。其他选项在植物园游览的语境下逻辑均不通。",
            cn: "提醒游客在游览植物园时请走在铺设好的小路上。",
            jp: "植物園を散策する際、来園者は舗装された小道（path）を進むよう案内されています。"
        }
    },
    {
        id: 7,
        target: "row",
        category: "中等",
        stem: "All computer workstations in the new laboratory were set up neatly in a ________.",
        options: ["row", "rows", "arrange", "position"],
        correct: "row",
        explanations: {
            guide: "固定介词短语搭配。in a row 是托业超高频短语，意为“成一排/排成一行”，选单数名词 row。",
            family: "row (n.一排) | rows (n.复数) | arrange (v.安排) | position (n.位置)。",
            details: "由于前面有不定冠词 a，此处必须用可数名词单数 row，不能用复数 rows。",
            cn: "新实验室里的所有电脑工作站都整齐地排成了一排。",
            jp: "新しい研究室のすべてのコンピュータワークステーションは、一列（row）に整然と配置されました。"
        }
    },
    {
        id: 8,
        target: "ceiling",
        category: "中等",
        stem: "Maintenance workers are replacing the fluorescent light fixtures installed on the office ________.",
        options: ["ceiling", "potted plant", "examine", "path"],
        correct: "ceiling",
        explanations: {
            guide: "介词后的名词修饰。on the office 后面需要接表示场所/建筑位置的名词 ceiling，指“办公室天花板”。",
            family: "ceiling (n.天花板) | potted plant (n.盆栽) | examine (v.检查) | path (n.小路)。",
            details: "light fixtures installed on... 指安装在某个表面上的灯具。结合 office 构成“办公室天花板”，只有 ceiling 符合逻辑。",
            cn: "维修工人正在更换安装在办公室天花板上的荧光灯具。",
            jp: "保守作業員は、オフィスの天井（ceiling）に取り付けられた蛍光灯器具を交換しています。"
        }
    },
    {
        id: 9,
        target: "button",
        category: "中等",
        stem: "To start the digital projector, simply press the power ________ located on the top panel.",
        options: ["button", "buttoned", "pots", "hang"],
        correct: "button",
        explanations: {
            guide: "名词作宾语修饰。press the power 后面接名词，构成 power button（电源按钮）。",
            family: "button (n.按钮) | buttoned (adj.扣上的) | pots (n.锅/罐) | hang (v.悬挂)。",
            details: "power button 为固定科技商务用语。buttoned 是形容词/过去分词，不能作为动词 press 的直接宾语。",
            cn: "要启动数字投影仪，只需按下位于顶部的电源按钮即可。",
            jp: "デジタルプロジェクターを起動するには、上面パネルにある電源ボタン（button）を押すだけです。"
        }
    },
    {
        id: 10,
        target: "pots",
        category: "中等",
        stem: "The restaurant chef ordered new stainless-steel cooking ________ for the renovated kitchen.",
        options: ["pots", "potted plant", "position", "arrange"],
        correct: "pots",
        explanations: {
            guide: "形容词与名词组合。cooking pots 指“烹饪用锅”，在厨房翻新场景中表示购买的新锅，选复数 pots。",
            family: "pots (n.锅/罐) | potted plant (n.盆栽) | position (n.位置) | arrange (v.安排)。",
            details: "cooking 用作定语修饰 pots。potted plant 意为“盆栽”，与厨房烹饪（cooking/kitchen）语境不匹配。",
            cn: "餐厅大厨为翻新后的厨房订购了新的不锈钢烹饪锅。",
            jp: "レストランのシェフは、改装された厨房用に新しいステンレス製の調理用鍋（pots）を注文しました。"
        }
    },
    {
        id: 11,
        target: "arrange",
        category: "中等",
        stem: "The travel agency made all the necessary travel ________ for the executive board members.",
        options: ["arrangements", "arrange", "examines", "ceiling"],
        correct: "arrangements",
        explanations: {
            guide: "形容词修饰与商务短语。make necessary travel arrangements 为固定搭配，意为“安排行程”，选复数名词 arrangements。",
            family: "arrangements (n.安排/复数) | arrange (v.安排) | examines (v.单三) | ceiling (n.天花板)。",
            details: "make 后需要动词的宾语，travel arrangements 是固定的商务用语。arrange 是动词，不能直接放在形容词 necessary 后面作宾语。",
            cn: "旅行社为高管团队成员安排好了所有必要的出行行程。",
            jp: "旅行会社は、役員のために必要なすべての旅行の手配（arrangements）を行いました。"
        }
    },
    {
        id: 12,
        target: "examine",
        category: "中等",
        stem: "After a thorough ________ of the financial records, the auditing team found no major errors.",
        options: ["examination", "examine", "hanging", "positioned"],
        correct: "examination",
        explanations: {
            guide: "介词后的名词中心语。After a thorough 后面需要接名词，表示“经过彻底的检查”，选 examination。",
            family: "examination (n.检查) | examine (v.检查) | hanging (adj.悬挂的) | positioned (adj.位于…的)。",
            details: "a thorough 后面必须接名词。examine 是动词原形，不能作介词 After 的宾语。",
            cn: "对财务记录进行彻底审查后，审计小组没有发现重大错误。",
            jp: "財務記録の徹底的な調査（examination）の後、監査チームは重大なエラーを発見しませんでした。"
        }
    },
    {
        id: 13,
        target: "position",
        category: "困难",
        stem: "To maximize exposure during the upcoming trade fair, our booth will be strategically ________ near the main entrance.",
        options: ["positioned", "position", "arrangement", "examine"],
        correct: "positioned",
        explanations: {
            guide: "被动语态谓语成分。be + strategically + 过去分词，构成被动语态，表示展位被“战略性地摆放/布置”，选 positioned。",
            family: "positioned (v-ed/被动) | position (n./v.) | arrangement (n.安排) | examine (v.检查)。",
            details: "will be 后面需要分词形式构成被动语态。position 是动词原形，不能与 be 动词直接搭配组成谓语。",
            cn: "为了在即将举行的展销会上获得最大曝光，我们的展位将被战略性地安排在主入口附近。",
            jp: "近く開催される見本市での露出を最大化するため、当社のブースはメインエントランスの近くに戦略的に配置（positioned）されます。"
        }
    },
    {
        id: 14,
        target: "hang",
        category: "困难",
        stem: "The newly framed decorative tapestries ________ along the corridor give the headquarters hotel a refined atmosphere.",
        options: ["hanging", "hang", "potted plant", "buttoned"],
        correct: "hanging",
        explanations: {
            guide: "非谓语动词作后置定语。The tapestries ________ along the corridor... 中，hanging 作后置定语修饰 tapestries，表示“挂在走廊沿线的”。",
            family: "hanging (分词/后置定语) | hang (v.原形) | potted plant (n.盆栽) | buttoned (adj.扣上的)。",
            details: "句子的主谓结构是 tapestries... give...，空格处为非谓语动词。hanging 作后置定语表示挂着的自然状态；hang 放置于此会导致双谓语语法错误。",
            cn: "悬挂在走廊沿线的新框挂毯为总部酒店增添了高雅的气息。",
            jp: "廊下に沿って掛けられている（hanging）新しい額入りの装飾タペストリーは、本社ホテルに洗練された雰囲気を与えています。"
        }
    },
    {
        id: 15,
        target: "path",
        category: "困难",
        stem: "Adopting energy-efficient technology offers the manufacturing firm a sustainable ________ toward long-term profitability.",
        options: ["path", "row", "ceiling", "pots"],
        correct: "path",
        explanations: {
            guide: "抽象商务语境与形容词修饰。a sustainable ________ toward... 意为“通往长期盈利的可持续路径”，选 path。",
            family: "path (n.路径/通路) | row (n.排) | ceiling (n.上限) | pots (n.锅)。",
            details: "path 在商务阅读中常引申为“发展路径/途径”。a sustainable path 引申为可持续发展的道路。其他名词在此引申义下不合逻辑。",
            cn: "采用节能技术为这家制造企业提供了一条通往长期盈利的可持续发展路径。",
            jp: "省エネ技術の導入は、製造企業に長期的な収益性に向けた持続可能な道筋（path）を提供します。"
        }
    },
    {
        id: 16,
        target: "ceiling",
        category: "困难",
        stem: "In an effort to control rising operational expenses, the board of directors agreed to set a strict budget ________ on department spending.",
        options: ["ceiling", "position", "arrangement", "button"],
        correct: "ceiling",
        explanations: {
            guide: "抽象金融/预算语境。budget ceiling 是商务高频词组，意为“预算上限/最高限额”，选 ceiling。",
            family: "ceiling (n.上限/天花板) | position (n.位置) | arrangement (n.安排) | button (n.按钮)。",
            details: "set a strict budget ceiling 意为“设定严格的预算上限”。ceiling 除天花板外，在托业中常考“最高限额”的引申含义。",
            cn: "为了控制日益增加的运营开支，董事会同意对部门支出设定严格的预算上限。",
            jp: "増加する営業費用を抑制するため、取締役会は部門の支出に厳格な予算上限（ceiling）を設定することに合意しました。"
        }
    },
    {
        id: 17,
        target: "arrange",
        category: "困难",
        stem: "The floor manager inspected the ________ display units before opening the retail store to the public.",
        options: ["arranged", "arrange", "examination", "pathway"],
        correct: "arranged",
        explanations: {
            guide: "过去分词作前置定语。the ________ display units 结构中，需要分词修饰 display units，表示“已被布置/排列好的展示柜”，选 arranged。",
            family: "arranged (adj./分词) | arrange (v.原形) | examination (n.检查) | pathway (n.小路)。",
            details: "arranged 作为过去分词作定语修饰名词 units，表达“被妥善布置的”。arrange 是动词原形，不能作前置定语。",
            cn: "楼层经理在向公众开放零售店之前，检查了布置完毕的陈列柜。",
            jp: "フロアマネージャーは、店舗を一般に公開する前に、配置された（arranged）展示ユニットを検査しました。"
        }
    },
    {
        id: 18,
        target: "potted plant",
        category: "困难",
        stem: "Landscape architects decided to place a decorative ________ on every outdoor balcony to enhance the building's aesthetic appeal.",
        options: ["potted plant", "pots", "examine", "positioning"],
        correct: "potted plant",
        explanations: {
            guide: "高阶可数名词辨析。a decorative ________ 中，冠词 a 说明后接可数名词单数，且 place a potted plant on every balcony 逻辑极通顺。",
            family: "potted plant (n.盆栽植物) | pots (n.复数锅/盆) | examine (v.检查) | positioning (n.定位)。",
            details: "place a potted plant 意为“摆放一株盆栽”。pots 是复数，不能加单数冠词 a；examine 是动词，无法作 place 的宾语。",
            cn: "景观设计师决定在每个户外阳台上摆放一盆装饰性盆栽，以提升建筑的美学吸引力。",
            jp: "景観設計家は、建物の美的魅力を高めるために、すべての屋外バルコニーに装飾的な鉢植え（potted plant）を置くことに決めました。"
        }
    }
];