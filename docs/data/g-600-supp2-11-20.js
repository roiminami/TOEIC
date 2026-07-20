// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data31-40.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "post",
        pos: "動/名",
        ipa: "/poʊst/",
        cn: "张贴；邮寄；职位，岗位",
        jp: "掲示する；郵送する；職、ポスト",
        family: "poster / posting / posted",
        tips: "托业高频考点。作动词常考张贴告示（post a notice）或公布信息；作名词常表示职位（apply for the post）或网上发布的帖子。",
        desc: "Please post the notice on the board."
    },
    {
        word: "line",
        pos: "名/動",
        ipa: "/laɪn/",
        cn: "排队；线条；产品线",
        jp: "列、ライン；製品群；並ぶ",
        family: "linear / lining / lined",
        tips: "商务托业核心词。作名词常考 product line（产品线）或 wait in line（排队）。作动词时可表示衬里或沿……排列。",
        desc: "There is a long line at the entrance."
    },
    {
        word: "lay out",
        pos: "動短",
        ipa: "/leɪ aʊt/",
        cn: "展示，摆放；规划，布局",
        jp: "広げる、配置する；設計する",
        family: "layout / laying out / laid out",
        tips: "听力与阅读高频动词短语。常用于展示样品、摊开图纸或规划版面布局。其名词复合形式为 layout（版面设计/图纸布局）。",
        desc: "He laid out the blueprints on the table."
    },
    {
        word: "lead to",
        pos: "動短",
        ipa: "/liːd tuː/",
        cn: "导致，引起；通往",
        jp: "〜につながる、〜を引き起こす",
        family: "lead / leading / leader / leadership",
        tips: "表示因果关系的核心短语，完美等同于 cause 或 result in。注意其中的 to 是介词，后面接名词、代词或动名词（-ing）。",
        desc: "Hard work will lead to success."
    },
    {
        word: "glove",
        pos: "名",
        ipa: "/ɡlʌv/",
        cn: "手套",
        jp: "手袋、グローブ",
        family: "gloves / gloved",
        tips: "听力 Part 1 图片题与阅读安全规程常考词汇，通常以复数形式 gloves 出现（如 protective gloves 防护手套）。",
        desc: "She put on her safety gloves."
    },
    {
        word: "page through",
        pos: "動短",
        ipa: "/peɪdʒ θruː/",
        cn: "粗略翻阅，浏览",
        jp: "（ページを）パラパラめくる、目を通す",
        family: "page / paging / paged",
        tips: "听力 Part 1 图片题核心动作词，指快速翻阅杂志、文件夹或产品目录（page through a brochure/catalog）。",
        desc: "He is paging through a magazine."
    },
    {
        word: "remove",
        pos: "動",
        ipa: "/rɪˈmuːv/",
        cn: "移开，清除；脱下",
        jp: "取り除く、撤去する；脱ぐ",
        family: "removal / removable / removed",
        tips: "听力 Part 1 描述动作（如 remove clothing/items）；阅读中常考名词形式 removal（搬迁/免职/消除）。",
        desc: "Please remove your shoes before entering."
    },
    {
        word: "rest",
        pos: "動/名",
        ipa: "/rest/",
        cn: "休息；剩余部分，其余",
        jp: "休む；休憩、残り",
        family: "restful / restless / rest area",
        tips: "作名词时常考“the rest of...”表示“其余的/剩余的……”，充当主语时谓语动词的单复数取决于 of 后面接的名词。",
        desc: "Take a short rest after work."
    },
    {
        word: "crowded",
        pos: "形",
        ipa: "/ˈkraʊdɪd/",
        cn: "拥挤的，挤满的",
        jp: "混雑した、満員の",
        family: "crowd / crowding / uncrowded",
        tips: "听力 Part 1 及 Part 2 高频形容词，常用于描述公共场所或交通工具的状态（a crowded train station/hall）。",
        desc: "The train station was very crowded."
    },
    {
        word: "spread out",
        pos: "動短",
        ipa: "/spred aʊt/",
        cn: "展开，铺开；散开",
        jp: "広げる、分散する",
        family: "spread / spreading",
        tips: "听力 Part 1 核心场景词，常考被动语态或状态描述：papers are spread out on the desk（文件摊开在桌上）。",
        desc: "The maps are spread out on the desk."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "post",
        category: "简单",
        stem: "The office manager asked the administrative assistant to ________ the updated work schedule on the bulletin board.",
        options: ["post", "posting", "crowded", "glove"],
        correct: "post",
        explanations: {
            guide: "动词不定式结构。ask sb to do sth 结构中需要使用动词原形，表达“张贴”公告的动作，选 post。",
            family: "post (v./n.张贴/职位) | posting (n.张贴物/发布) | crowded (adj.拥挤的) | glove (n.手套)。",
            details: "to 为不定式符号，后面必须接动词原形。posting 为分词或名词，不能在不定式符号后直接作动词原形。",
            cn: "办公室经理请行政助理把最新的工作日程表张贴在公告栏上。",
            jp: "オフィスマネージャーは行政アシスタントに、更新された勤務スケジュールを掲示板に掲示（post）するよう頼みました。"
        }
    },
    {
        id: 2,
        target: "glove",
        category: "简单",
        stem: "All factory technicians must wear heavy-duty protective ________ when handling hazardous liquid chemicals.",
        options: ["gloves", "glove", "rest", "line"],
        correct: "gloves",
        explanations: {
            guide: "名词复数与安全装备搭配。wear protective gloves 是托业工厂安全考点中的固定表述，表示戴“防护手套”，选复数名词 gloves。",
            family: "gloves (n.手套/复数) | glove (n.手套/单数) | rest (v./n.休息) | line (n.列/产品线)。",
            details: "手套通常双只使用，在表达个人防护装备（PPE）时习惯使用复数形式 gloves。glove 单数一般不单独直接作动词 wear 的宾语。",
            cn: "所有工厂技术人员在处理危险液体化学品时，都必须戴上重型防护手套。",
            jp: "すべての工場技術者は、有害な液体化学物质を取り扱う際、厚手の保護手袋（gloves）を着用しなければなりません。"
        }
    },
    {
        id: 3,
        target: "remove",
        category: "简单",
        stem: "Please ________ all personal belongings from your desk before the maintenance team arrives tonight.",
        options: ["remove", "removal", "lead to", "spread out"],
        correct: "remove",
        explanations: {
            guide: "祈使句句型考点。Please 引导的祈使句句首需要使用动词原形，表达“移开/拿走”物品，选 remove。",
            family: "remove (v.移开/清除) | removal (n.清除/搬迁) | lead to (v phr.导致) | spread out (v phr.铺开)。",
            details: "祈使句须以动词原形开头。removal 是名词，无法充当祈使句的核心谓语动词。",
            cn: "在今晚维修团队到达之前，请从您的桌子上拿走所有个人物品。",
            jp: "今夜メンテナンスチームが到着する前に、デスクからすべての私物を取り除い（remove）てください。"
        }
    },
    {
        id: 4,
        target: "crowded",
        category: "简单",
        stem: "The main auditorium was extremely ________ during the opening ceremony of the annual technology summit.",
        options: ["crowded", "crowd", "rest", "page through"],
        correct: "crowded",
        explanations: {
            guide: "系动词后的表语成分。was 后需要接形容词作表语，副词 extremely 修饰该形容词，表示礼堂非常“拥挤”，选 crowded。",
            family: "crowded (adj.拥挤的) | crowd (n./v.人群/拥挤) | rest (v./n.休息) | page through (v phr.翻阅)。",
            details: "was crowded 构成系表结构。crowd 是名词或动词，不能直接被副词 extremely 修饰作表语形容词。",
            cn: "在年度技术峰会的开幕式期间，主大礼堂非常拥挤。",
            jp: "年次技術サミットの開会式中、メインオーディトリアムは非常に混雑し（crowded）ていました。"
        }
    },
    {
        id: 5,
        target: "rest",
        category: "简单",
        stem: "After driving for nearly six hours, Mr. Davis decided to pull over and ________ for a few minutes.",
        options: ["rest", "restful", "line", "lay out"],
        correct: "rest",
        explanations: {
            guide: "并列连词后的动词原形。decided to pull over and... 结构中，and 连接两个与 to 搭配的动词原形，表达“休息”，选 rest。",
            family: "rest (v./n.休息) | restful (adj.给人休息感觉的) | line (n.列/产品线) | lay out (v phr.摆放)。",
            details: "to pull over and rest 属于动词不定式的并列，and 后面省略了 to，需使用动词原形 rest。restful 是形容词，不能充当动词。",
            cn: "在连续驾驶了将近六个小时后，戴维斯先生决定靠边停车并休息几分钟。",
            jp: "6時間近く運転した後、デイビス氏は車を寄せて数分間休む（rest）ことにしました。"
        }
    },
    {
        id: 6,
        target: "line",
        category: "简单",
        stem: "Dozens of eager customers waited in a straight ________ outside the store for the doorbuster sale.",
        options: ["line", "linear", "post", "remove"],
        correct: "line",
        explanations: {
            guide: "介词短语固定搭配。in a straight line 或 wait in line 是托业常见短语，意为“排成一条直线/排队”，选名词 line。",
            family: "line (n./v.列/排队) | linear (adj.线性的) | post (v./n.张贴/职位) | remove (v.移开)。",
            details: "in a line 意为排成一行。linear 是形容词（线性的），不能被冠词 a 和形容词 straight 一起修饰作名词中心语。",
            cn: "数十名热切的顾客在商店门外排成一条直线，等待限时抢购活动开门。",
            jp: "何十人もの熱心な顧客が、目玉商品のセールを求めて店外で直線状の列（line）を作って待ちました。"
        }
    },
    {
        id: 7,
        target: "lead to",
        category: "中等",
        stem: "Failure to comply with safety regulations will eventually ________ severe financial penalties for the business.",
        options: ["lead to", "leading to", "page through", "spread out"],
        correct: "lead to",
        explanations: {
            guide: "情态动词后的动词短语。will 后面需要跟动词短语原形，表达某种行为会“导致”严重后果，选 lead to。",
            family: "lead to (v phr.导致) | leading to (分词形式) | page through (v phr.翻阅) | spread out (v phr.铺开)。",
            details: "will lead to... 表示将导致……。leading to 为现在分词，不能跟在情态动词 will 后面作核心谓语。",
            cn: "不遵守安全规程最终会导致企业面临严重的经济处罚。",
            jp: "安全規制に従わないことは、最終的に企業にとって厳しい財政的処罰を引き起こす（lead to）ことになります。"
        }
    },
    {
        id: 8,
        target: "lay out",
        category: "中等",
        stem: "Before the meeting began, the architect carefully ________ the building designs on the conference table.",
        options: ["laid out", "lay out", "rest", "gloves"],
        correct: "laid out",
        explanations: {
            guide: "一般过去时态与动词短语。根据状语从句 Before the meeting began（一般过去时），主句谓语也需用过去时，lay out 的过去式为 laid out。",
            family: "laid out (v-ed形式/过去式) | lay out (v phr.展示/布局) | rest (v./n.休息) | gloves (n.手套)。",
            details: "lay out 表达在桌上“展示/铺开”设计图。由于句中有过去时标志 began，此处必须填入过去式 laid out。",
            cn: "在会议开始之前，建筑师仔细地把建筑设计图摆放在会议桌上。",
            jp: "会議が始まる前に、建築家は会議室のテーブルの上に建築設計図を慎重に広げ（laid out）ました。"
        }
    },
    {
        id: 9,
        target: "page through",
        category: "中等",
        stem: "While waiting in the lobby, the prospective client was seen ________ a company product catalog.",
        options: ["paging through", "page through", "posted", "crowded"],
        correct: "paging through",
        explanations: {
            guide: "感官动词被动语态补语（分词短语）。was seen doing sth 表示“被看到正在做某事”，需用现在分词形式 paging through 表达正在进行的动作。",
            family: "paging through (现在分词形式) | page through (v phr.翻阅) | posted (v-ed形式) | crowded (adj.拥挤的)。",
            details: "page through 意为“翻阅/浏览”。was seen 后面跟现在分词 paging through 描述当时正在进行的“翻阅”行为。",
            cn: "在大堂等待时，人们看到那位潜在客户正在翻阅一份公司产品目录。",
            jp: "ロビーで待っている間、見込み客が会社の製品カタログをパラパラめくって（paging through）いるのが見られました。"
        }
    },
    {
        id: 10,
        target: "spread out",
        category: "中等",
        stem: "Detailed financial reports were ________ across the boardroom desk so that everyone could examine the metrics.",
        options: ["spread out", "spreading out", "removed", "line"],
        correct: "spread out",
        explanations: {
            guide: "被动语态形式。were 后面跟过去分词，构成被动语态 were spread out（被展开/摊开放在桌上）。spread 的过去分词仍为 spread。",
            family: "spread out (过去分词/摊开) | spreading out (现在分词) | removed (adj./v-ed被移开) | line (n.列)。",
            details: "spread out 表达文件摊开平铺的状态。were + spread out 构成完整的被动谓语结构。",
            cn: "详细的财务报告摊开在董事会会议桌上，以便每个人都能查看这些指标。",
            jp: "全員が指標を調査できるように、詳細な財務報告書が役員会のデスクいっぱいに広げられ（spread out）ていました。"
        }
    },
    {
        id: 11,
        target: "post",
        category: "中等",
        stem: "Qualified professionals interested in the administrative ________ are encouraged to send their resumes online.",
        options: ["post", "posting", "rest", "lead to"],
        correct: "post",
        explanations: {
            guide: "名词作“岗位/职位”考点。形容词 administrative（行政的）后接名词，表达“行政岗位/职位”，选用名词 post。",
            family: "post (n./v.职位/张贴) | posting (n.发布的职位/告示) | rest (v./n.休息) | lead to (v phr.导致)。",
            details: "the administrative post 意为“行政职位”。虽然 job posting 也常见，但在直接修饰形容词 administrative 时，post 表示具体的“职位/岗位”。",
            cn: "凡对该行政岗位感兴趣的合资格专业人士，均宜在网上提交简历。",
            jp: "管理職（post）に興味のある資格のある専門家は、オンラインで履歴書を送付することが推奨されています。"
        }
    },
    {
        id: 12,
        target: "line",
        category: "中等",
        stem: "The consumer electronics firm announced plans to introduce a new ________ of smart home appliances this autumn.",
        options: ["line", "lined", "remove", "crowded"],
        correct: "line",
        explanations: {
            guide: "核心商务名词搭配。a new line of... 是托业极高频表达，意为“一个新系列的产品/新产品线”，选名词 line。",
            family: "line (n.产品线/列) | lined (adj.有衬里的) | remove (v.移开) | crowded (adj.拥挤的)。",
            details: "a new line of smart home appliances 意为新的一系列智能家电产品线。lined 是形容词，不符合此处结构。",
            cn: "这家消费电子公司宣布，计划在今年秋季推出一个新的智能家电产品线。",
            jp: "その家電企業は、この秋にスマート家電の新しいライン（line）を導入する計画を発表しました。"
        }
    },
    {
        id: 13,
        target: "lead to",
        category: "困难",
        stem: "The research team’s persistent efforts were a ________ factor in securing the international patent approval.",
        options: ["leading", "lead to", "leader", "spread out"],
        correct: "leading",
        explanations: {
            guide: "分词作定语修饰名词。空格位于不定冠词 a 与名词 factor 之间，需要一个形容词/分词作定语，a leading factor 意为“主导因素/主要原因”。",
            family: "leading (adj.主要的/主导的) | lead to (v phr.导致) | leader (n.领导者) | spread out (v phr.铺开)。",
            details: "leading 是由 lead 派生出的形容词，常考搭配包括 leading factor（主导因素）或 leading company（龙头企业）。lead to 是动词短语，无法作定语修饰 factor。",
            cn: "研究团队的不懈努力是获得该国际专利批准的主要因素。",
            jp: "研究チームの粘り強い努力は、国際特許の承認を確保するための主要な（leading）要因でした。"
        }
    },
    {
        id: 14,
        target: "remove",
        category: "困难",
        stem: "The prompt ________ of obsolete equipment allowed the manufacturing facility to install new machinery ahead of schedule.",
        options: ["removal", "remove", "rest", "page through"],
        correct: "removal",
        explanations: {
            guide: "定冠词与形容词后的名词中心语。The prompt ________ of 结构中，形容词 prompt（迅速的）后面需要接名词形式 removal（拆除/移除）。",
            family: "removal (n.拆除/移开) | remove (v.移开) | rest (v./n.休息) | page through (v phr.翻阅)。",
            details: "the prompt removal of... 意为“迅速拆除……”。remove 是动词，无法直接在定冠词与形容词后作名词中心语。",
            cn: "淘汰设备的迅速拆除使该制造工厂得以提前安装新机械设备。",
            jp: "老朽化した設備の迅速な撤去（removal）により、製造施設は予定より早く新しい機械を設置することができました。"
        }
    },
    {
        id: 15,
        target: "rest",
        category: "困难",
        stem: "While a third of the inventory was shipped today, the ________ of the order will be dispatched from the warehouse tomorrow.",
        options: ["rest", "restful", "crowded", "lay out"],
        correct: "rest",
        explanations: {
            guide: "代词/名词固定表达。the rest of... 属于固定搭配，意为“剩余的/其余的……”，在此处代指剩余的订单货物。",
            family: "rest (n.剩余部分/休息) | restful (adj.宁静的) | crowded (adj.拥挤的) | lay out (v phr.摆放)。",
            details: "the rest of the order 意为订单的其余部分。restful 为形容词，意为给人带来休息感/宁静的，逻辑不符。",
            cn: "虽然三分之一的库存已于今天发货，但订单的其余部分将于明天从仓库发出。",
            jp: "在庫の3分の1は本日出荷されましたが、注文の残り（rest）は明日倉庫から発送されます。"
        }
    },
    {
        id: 16,
        target: "lay out",
        category: "困难",
        stem: "The executive board reviewed the final ________ of the new regional headquarters before approving the construction budget.",
        options: ["layout", "lay out", "posted", "gloves"],
        correct: "layout",
        explanations: {
            guide: "复合名词考点。the final ________ 结构中需要填入名词，layout 是 lay out 派生的名词形式，指“布局/规划图/版面设计”。",
            family: "layout (n.布局/规划图) | lay out (v phr.展示/布局) | posted (v-ed形式) | gloves (n.手套)。",
            details: "the final layout of... 意为“最终的布局设计/规划图”。lay out 为动词短语，此处限定词 final 后必须使用名词 layout。",
            cn: "执行董事会在批准施工预算之前，审阅了新区域总部的最终布局规划图。",
            jp: "取締役会は、建設予算を承認する前に、新しい地域本部の最終的なレイアウト（layout）を検討しました。"
        }
    },
    {
        id: 17,
        target: "crowded",
        category: "困难",
        stem: "Due to the unexpected rain, a large ________ of transit passengers gathered inside the station terminal building.",
        options: ["crowd", "crowded", "line", "removal"],
        correct: "crowd",
        explanations: {
            guide: "量词短语与名词修饰。a large crowd of... 意为“一大群/一大批……”，空格处需要填入单数可数名词 crowd 作核心词。",
            family: "crowd (n.人群/一大群) | crowded (adj.拥挤的) | line (n.列/产品线) | removal (n.移开)。",
            details: "a large crowd of transit passengers 意为大批过境乘客。crowded 是形容词，不能直接放在 a large 后面作名词中心语。",
            cn: "由于突如其来的降雨，一大批过境旅客聚集在车站航站楼内。",
            jp: "予期せぬ雨のため、駅のターミナルビル内に大勢の乗り換え客の群れ（crowd）が集まりました。"
        }
    },
    {
        id: 18,
        target: "page through",
        category: "困难",
        stem: "Having spent several hours ________ the thick legal contract, the senior attorney located the crucial compliance clause.",
        options: ["paging through", "paged through", "lead to", "spread out"],
        correct: "paging through",
        explanations: {
            guide: "完成分词完成时结构（Having done）。Having spent time doing sth 结构中，spend time 后面接动名词/分词形式，表达“花费时间做某事”。",
            family: "paging through (动名词/分词) | paged through (过去分词) | lead to (v phr.导致) | spread out (v phr.铺开)。",
            details: "spend time (in) doing sth 属于固定句型。spent several hours paging through 意为“花了几个小时翻阅”。paged through 为过去分词，在此语法结构中不正确。",
            cn: "花了几个小时翻阅这份厚厚的法律合同后，资深律师终于找到了关键的合规条款。",
            jp: "分厚い法律契約書を何時間もパラパラめくって（paging through）調べた後、シニア弁護士は重要なコンプライアンス条項を見つけ出しました。"
        }
    }
];