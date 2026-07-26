// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data71-80.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "pillow",
        pos: "名",
        ipa: "/ˈpɪloʊ/",
        cn: "枕头",
        jp: "枕",
        family: "pillowcase / pillowy",
        tips: "Part 1 酒店与卧室场景高频，如 resting head on a pillow（把头靠在枕头上）或 extra pillows in the closet（衣柜里的备用枕头）。",
        desc: "A soft pillow is on the bed."
    },
    {
        word: "spectator",
        pos: "名",
        ipa: "/ˈspekteɪtər/",
        cn: "观众，旁观者",
        jp: "観客、見物人",
        family: "spectate / spectacle / spectacular",
        tips: "Part 1 户外活动与体育赛事高频，如 spectators are watching the match（观众正在看比赛）或 crowded with spectators（挤满了观众）。",
        desc: "The spectators cheered loudly."
    },
    {
        word: "descend",
        pos: "動",
        ipa: "/dɪˈsend/",
        cn: "走下，下降",
        jp: "下りる、降りる、下降する",
        family: "descent / descendant / descending",
        tips: "Part 1 动作与方向极高频：descending the stairs / steps（走下楼梯）。注意与 ascend（上升）互为反义词。",
        desc: "They descend the stairs carefully."
    },
    {
        word: "doorway",
        pos: "名",
        ipa: "/ˈdɔːrweɪ/",
        cn: "门口，出入口",
        jp: "出入口、ドア前",
        family: "door / entrance / exit",
        tips: "Part 1 建筑内外场景高频：standing in the doorway（站在门口）或 blocking the doorway（挡在门口）。",
        desc: "He is standing in the doorway."
    },
    {
        word: "fountain",
        pos: "名",
        ipa: "/ˈfaʊntn/",
        cn: "喷泉，饮水机",
        jp: "噴水、水飲み場",
        family: "fountainhead / drinking fountain",
        tips: "Part 1 户外广场（water fountain）或办公室（drinking fountain）高频词，如 sitting near a fountain（坐在喷泉旁）。",
        desc: "Water is flowing from the fountain."
    },
    {
        word: "pavement",
        pos: "名",
        ipa: "/ˈpeɪvmənt/",
        cn: "人行道，路面",
        jp: "舗装道路、歩道",
        family: "pave / paving / paved",
        tips: "英式常用作“人行道”（=美式 sidewalk），美式常用作“铺好的路面”。常见短语 walking on the pavement（在人行道/路面上行走）。",
        desc: "They are walking on the pavement."
    },
    {
        word: "refuel",
        pos: "動",
        ipa: "/ˌriːˈfjuːəl/",
        cn: "加燃料，加油",
        jp: "燃料を補給する、給油する",
        family: "fuel / refueling / refueler",
        tips: "交通与运输高频词：refueling the vehicle（给车辆加油）或 refueling stop（加油停靠站）。",
        desc: "He stops to refuel the car."
    },
    {
        word: "crosswalk",
        pos: "名",
        ipa: "/ˈkrɔːswɔːk/",
        cn: "斑马线，人行横道",
        jp: "横断歩道",
        family: "cross / walk / pedestrian crossing",
        tips: "Part 1 街道交通高频词：crossing at the crosswalk（在斑马线处穿过马路）或 painted lines on the crosswalk（斑马线上的划线）。",
        desc: "Pedestrians are using the crosswalk."
    },
    {
        word: "jars",
        pos: "名",
        ipa: "/dʒɑːrz/",
        cn: "罐子，广口瓶（复数）",
        jp: "ビン、壺（複数形）",
        family: "jar / jarred / jarring",
        tips: "物品收纳与餐饮高频：glass jars（玻璃罐）、jars lined up on shelves（罐子在架子上排成一排）。",
        desc: "Glass jars are on the shelf."
    },
    {
        word: "sew",
        pos: "動",
        ipa: "/soʊ/",
        cn: "缝纫，缝补",
        jp: "（針と糸で）縫う、裁縫する",
        family: "sewing / sewed / sewn / seamstress",
        tips: "Part 1 手工与服装修理考点：sewing a piece of fabric（缝制一块布料）或 sewing machine（缝纫机）。",
        desc: "She is sewing a garment."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "doorway",
        category: "简单",
        stem: "The security guard stood near the main ________ to inspect the badges of all visitors.",
        options: ["doorway", "pavement", "fountain", "pillow"],
        correct: "doorway",
        explanations: {
            guide: "建筑位置名词。stood near the main ________ 指站在主“门口/出入口”检查入场证，选 doorway。",
            family: "doorway (n.门口) | pavement (n.人行道/路面) | fountain (n.喷泉) | pillow (n.枕头)。",
            details: "main doorway 指主出入口/大门口。pavement（路面）、fountain（喷泉）与门禁安检逻辑不符。",
            cn: "保安站在主门口附近，检查所有访客的证件。",
            jp: "警備員はすべての来訪者のバッジを点検するために、正面出入口（doorway）の近くに立っていました。"
        }
    },
    {
        id: 2,
        target: "pillow",
        category: "简单",
        stem: "The hotel housekeeper placed an extra ________ on the king-sized bed for the guest.",
        options: ["pillow", "pillowcase", "fountain", "crosswalk"],
        correct: "pillow",
        explanations: {
            guide: "床上用品名词。placed on the king-sized bed 结合客房服务，放上的床上用品是 pillow（枕头）。",
            family: "pillow (n.枕头) | pillowcase (n.枕套) | fountain (n.喷泉) | crosswalk (n.斑马线)。",
            details: "an extra pillow 指额外的一个枕头。pillowcase（枕套）是包裹外罩，直接放在床上的整体软具为 pillow。",
            cn: "酒店客房清洁员在特大号床上为客人多放了一个枕头。",
            jp: "ホテルの客室清掃員は、お客様のためにキングサイズベッドの上に予備の枕（pillow）をもう一つ置きました。"
        }
    },
    {
        id: 3,
        target: "fountain",
        category: "简单",
        stem: "Tourists sat on the stone bench to admire the water ________ in the middle of the park.",
        options: ["fountain", "refuel", "descend", "sew"],
        correct: "fountain",
        explanations: {
            guide: "公园景观设施名词。admire the water ________ 结合公园中央地理位置，选 fountain（喷泉）。",
            family: "fountain (n.喷泉) | refuel (v.加油) | descend (v.下降) | sew (v.缝纫)。",
            details: "water fountain 指水喷泉。refuel（加油）、descend（走下）均为动词，不能作动词 admire 的宾语。",
            cn: "游客们坐在石凳上，欣赏公园中央的喷泉。",
            jp: "観光客は公園の中央にある噴水（fountain）を鑑賞するために石のベンチに座りました。"
        }
    },
    {
        id: 4,
        target: "crosswalk",
        category: "简单",
        stem: "Pedestrians waited patiently at the traffic light before stepping onto the ________.",
        options: ["crosswalk", "doorway", "jar", "pillow"],
        correct: "crosswalk",
        explanations: {
            guide: "交通设施名词。pedestrians（行人）过马路前踏上的安全区域是 crosswalk（斑马线/人行横道）。",
            family: "crosswalk (n.斑马线) | doorway (n.门口) | jar (n.罐子) | pillow (n.枕头)。",
            details: "step onto the crosswalk 指踏上斑马线。doorway（门口）非交通信号灯旁的跨街设施。",
            cn: "行人在交通信号灯前耐心等待，然后再踏上斑马线。",
            jp: "歩行者は信号機で辛抱強く待ち、それから横断歩道（crosswalk）へと進みました。"
        }
    },
    {
        id: 5,
        target: "refuel",
        category: "简单",
        stem: "The delivery truck driver pulled into the service station to ________ before the long highway trip.",
        options: ["refuel", "refueling", "descend", "sew"],
        correct: "refuel",
        explanations: {
            guide: "动词不定式考点。pulled into the service station to 后面接动词原形，表达进入服务站“加油”，选 refuel。",
            family: "refuel (v.加油/加燃料) | refueling (n./v-ing) | descend (v.下降) | sew (v.缝纫)。",
            details: "to refuel 构成分词目的状语。refueling 是分词或名词，不能接在不定式符号 to 后面。",
            cn: "快递货车司机在开始长途高速公路行驶前，驶入服务站加油。",
            jp: "配達トラックの運転手は、長距離の高速道路移動の前に給油する（refuel）ためサービスエリアに入りました。"
        }
    },
    {
        id: 6,
        target: "sew",
        category: "简单",
        stem: "The tailor used a needle and thread to ________ a loose button back onto the jacket.",
        options: ["sew", "sewing", "pavement", "fountain"],
        correct: "sew",
        explanations: {
            guide: "动词不定式与工具逻辑。needle and thread（针线）结合重新固定纽扣的动作，选动词原形 sew（缝上）。",
            family: "sew (v.缝纫/缝补) | sewing (n./v-ing) | pavement (n.路面) | fountain (n.喷泉)。",
            details: "used a needle and thread to sew 意为“用针线缝……”。sewing 是分词形式，不能置于不定式符号 to 后面。",
            cn: "裁缝用针线把掉落的纽扣重新缝回夹克上。",
            jp: "仕立て屋は、針と糸を使ってジャケットに緩んだボタンを縫い付け（sew）直しました。"
        }
    },
    {
        id: 7,
        target: "descend",
        category: "中等",
        stem: "Passengers were requested to hold the handrail as they began to ________ the aircraft steps.",
        options: ["descend", "descent", "refuel", "crosswalk"],
        correct: "descend",
        explanations: {
            guide: "动词原形考点。began to 后面接动词原形，表达走下舷梯，选 descend（走下/降落）。",
            family: "descend (v.走下/下降) | descent (n.下降/下坡) | refuel (v.加油) | crosswalk (n.斑马线)。",
            details: "began to descend the steps 指开始走下台阶。descent 是名词（下降），不能直接跟在 to 后面充当谓语动词。",
            cn: "当乘客们开始走下飞机舷梯时，他们被要求抓紧扶手。",
            jp: "乗客はタラップを降り（descend）始めるとき、手すりにつかまるよう求められました。"
        }
    },
    {
        id: 8,
        target: "spectator",
        category: "中等",
        stem: "Thousands of excited ________ cheered loudly as the marathon runners crossed the finish line.",
        options: ["spectators", "spectator", "pavement", "doorway"],
        correct: "spectators",
        explanations: {
            guide: "复数名词考点。Thousands of 后面接可数名词复数形式，指马拉松比赛现场的“观众/观赛者”，选 spectators。",
            family: "spectators (n.复数观众) | spectator (n.单数观众) | pavement (n.路面) | doorway (n.门口)。",
            details: "Thousands of spectators 指成千上万的观众。spectator 为单数形式，无法与 Thousands of 搭配。",
            cn: "当马拉松选手冲过终点线时，成千上万兴奋的观众发出阵阵欢呼。",
            jp: "マラソンランナーがゴールインすると、何千人もの興奮した観客（spectators）が大声で歓声声を上げました。"
        }
    },
    {
        id: 9,
        target: "jars",
        category: "中等",
        stem: "The local organic market sells homemade fruit jams stored in airtight glass ________.",
        options: ["jars", "jar", "pillow", "fountain"],
        correct: "jars",
        explanations: {
            guide: "可数名词复数泛指。glass ________ 盛放果酱的器皿，在没有单数冠词 a/an 的情况下用复数形式 jars。",
            family: "jars (n.复数罐子) | jar (n.单数罐子) | pillow (n.枕头) | fountain (n.喷泉)。",
            details: "airtight glass jars 指密封的玻璃罐。单数 jar 前面缺乏冠词，不符合语法要求。",
            cn: "当地的有机市场出售储存在密封玻璃罐中的自制果酱。",
            jp: "地元のオーガニック市場では、密閉されたガラス瓶（jars）に入った手作りフルーツジャムが販売されています。"
        }
    },
    {
        id: 10,
        target: "pavement",
        category: "中等",
        stem: "City maintenance workers arrived early this morning to repair the cracked ________ on Main Street.",
        options: ["pavement", "paved", "crosswalk", "refuel"],
        correct: "pavement",
        explanations: {
            guide: "修饰关系与名词宾语。repair the cracked ________ 中，形容词 cracked（开裂的）修饰名词 pavement（路面/人行道）。",
            family: "pavement (n.路面/人行道) | paved (adj.铺过的) | crosswalk (n.斑马线) | refuel (v.加油)。",
            details: "cracked pavement 指开裂的路面。paved 是分词/形容词，不能直接作为定语形容词 cracked 的修饰对象。",
            cn: "市政维修人员今天清晨赶到，修复主街上开裂的路面。",
            jp: "市のメンテナンス作業員は、メインストリートのひび割れた舗装道路（pavement）を補修するため、今朝早くに到着しました。"
        }
    },
    {
        id: 11,
        target: "sew",
        category: "中等",
        stem: "The costume designer was busy with her ________ machine to complete the outfits before opening night.",
        options: ["sewing", "sew", "spectator", "descend"],
        correct: "sewing",
        explanations: {
            guide: "复合名词定语考点。sewing machine 是固定搭配，意为“缝纫机”，用动名词/现在分词形式 sewing 作定语。",
            family: "sewing (n./adj.缝纫的) | sew (v.缝纫) | spectator (n.观众) | descend (v.走下)。",
            details: "sewing machine 为机械专属名称。sew 是动词原形，不能直接修饰 machine 构成复合名词。",
            cn: "服装设计师正忙着使用缝纫机，以便在首演之夜前完成服装。",
            jp: "衣装デザイナーは、初日の夜までに衣装を完成させるためにミシン（sewing machine）の作業に追われていました。"
        }
    },
    {
        id: 12,
        target: "descend",
        category: "中等",
        stem: "Due to heavy air traffic above the airport, the flight captain announced a gradual ________ towards the runway.",
        options: ["descent", "descend", "refueling", "doorway"],
        correct: "descent",
        explanations: {
            guide: "动词派生名词考点。在冠词 a 和形容词 gradual 后面需要填写名词形式 descent，表示“下降/降落”。",
            family: "descent (n.下降/降落) | descend (v.下降) | refueling (n.加油) | doorway (n.门口)。",
            details: "a gradual descent 指缓缓下降。descend 是动词，不能直接放在冠词和形容词后面作宾语。",
            cn: "由于机场上空空中交通繁忙，机长宣布飞机将缓缓下降驶向跑道。",
            jp: "空港上空の混雑のため、機長は滑走路に向かって徐々に降下（descent）することを発表しました。"
        }
    },
    {
        id: 13,
        target: "spectator",
        category: "困难",
        stem: "The annual international tennis championship turned out to be a ________ success for the host city.",
        options: ["spectacular", "spectator", "descending", "paving"],
        correct: "spectacular",
        explanations: {
            guide: "同源高阶形容词辨析。a ________ success 表达“瞩目的/壮观的成功”，选形容词 spectacular。",
            family: "spectacular (adj.壮观的/惊人的) | spectator (n.观众) | descending (adj.下降的) | paving (n.铺路材料)。",
            details: "spectacular success 是商务与赛事新闻中的固定高频搭配。spectator 是名词（观众），在此处修饰抽象名词 success 逻辑不符。",
            cn: "一年一度的国际网球锦标赛给举办城市带来了瞩目的成功。",
            jp: "年次国際テニス選手権は、開催都市にとって素晴らしい（spectacular）成功となったことが判明しました。"
        }
    },
    {
        id: 14,
        target: "fountain",
        category: "困难",
        stem: "The office complex installed an eco-friendly drinking ________ system on every floor to reduce plastic waste.",
        options: ["fountain", "fountainhead", "crosswalk", "pavement"],
        correct: "fountain",
        explanations: {
            guide: "复合专有名词。drinking fountain 属于商务办公高频词，意为“饮水机/饮水喷泉”，结合系统组成了 drinking fountain system。",
            family: "fountain (n.喷泉/饮水机) | fountainhead (n.源泉) | crosswalk (n.斑马线) | pavement (n.路面)。",
            details: "drinking fountain 指直饮水设施。fountainhead 意为思想或河流的源头/发源地，不指具体饮水设备。",
            cn: "办公大楼在每层楼都安装了环保饮水机系统，以减少塑料浪费。",
            jp: "オフィスビルは、プラスチックごみを削減するために、各階に環境に優しい水飲み場（drinking fountain）システムを設置しました。"
        }
    },
    {
        id: 15,
        target: "refuel",
        category: "困难",
        stem: "Commercial airlines must schedule mandatory ________ stops during transoceanic cargo flights.",
        options: ["refueling", "refuel", "descending", "sewing"],
        correct: "refueling",
        explanations: {
            guide: "分词/动名词作定语考点。refueling stops 是物流与航空专属术语，意为“经停加油站/加油停靠点”。",
            family: "refueling (n./adj.加油的) | refuel (v.加油) | descending (adj.下降的) | sewing (n.缝纫)。",
            details: "refueling stops 意为加油停靠点。refuel 为动词原形，不能无修饰直接作为名词 stops 的前置修饰词。",
            cn: "商业航空公司在跨洋货运航班期间必须安排强制性加油停靠。",
            jp: "商用航空会社は、外洋貨物飛行中に義務的な給油（refueling）立ち寄りをスケジュールする必要があります。"
        }
    },
    {
        id: 16,
        target: "pavement",
        category: "困难",
        stem: "Municipal urban planners decided to use porous ________ materials to improve rainwater drainage across the plaza.",
        options: ["paving", "pavement", "doorway", "fountain"],
        correct: "paving",
        explanations: {
            guide: "派生名词作定语。paving materials 属于建筑城规专业词汇，意为“铺路材料/铺面材料”，选 paving。",
            family: "paving (n.铺路/铺面材料) | pavement (n.人行道/路面) | doorway (n.门口) | fountain (n.喷泉)。",
            details: "porous paving materials 意为透水铺路材料。pavement 指铺好的路面成品本身，不修饰 materials。",
            cn: "市政城市规划者决定使用透水铺路材料，以改善广场上的雨水排放。",
            jp: "市政都市計画担当者は、広場全体の雨水排水を改善するために透過性舗装（paving）材料を使用することを決定しました。"
        }
    },
    {
        id: 17,
        target: "crosswalk",
        category: "困难",
        stem: "To ensure safety near the elementary school, the transport department decided to repaint all faded ________ lines.",
        options: ["crosswalk", "crosswalks", "pavement", "fountain"],
        correct: "crosswalk",
        explanations: {
            guide: "名词作定语单数形式。crosswalk lines 意为“斑马线/人行横道线”，名词作定语修饰 lines 时通常使用单数形式 crosswalk。",
            family: "crosswalk (n.斑马线) | crosswalks (n.复数) | pavement (n.路面) | fountain (n.喷泉)。",
            details: "crosswalk lines 属于交通标志专有名词。作前置定语修饰 lines 时一般用单数 crosswalk，无需用复数 crosswalks。",
            cn: "为了确保小学附近的安全，交通部门决定重新绘制所有褪色的斑马线。",
            jp: "小学校近くの安全を確保するため、交通局は褪色したすべての横断歩道（crosswalk）の線を塗り直すことを決定しました。"
        }
    },
    {
        id: 18,
        target: "pillow",
        category: "困难",
        stem: "Luxury hotel chains often offer guests a personalized ________ menu to ensure maximum sleeping comfort.",
        options: ["pillow", "pillowcase", "spectator", "refuel"],
        correct: "pillow",
        explanations: {
            guide: "酒店行业专属复合名词。pillow menu 属于奢华酒店特色服务，意为“枕头选择菜单”，用名词 pillow 作前置定语。",
            family: "pillow (n.枕头) | pillowcase (n.枕套) | spectator (n.观众) | refuel (v.加油)。",
            details: "a personalized pillow menu 指个性化枕头菜单（可供选硬度、材质等）。pillowcase menu 指“枕套菜单”，不符合提供睡眠舒适度服务的行业常理。",
            cn: "奢华连锁酒店通常为客人提供个性化的枕头菜单，以确保最大程度的睡眠舒适度。",
            jp: "高級ホテルチェーンでは、最高の睡眠の快適さを確保するために、パーソナライズされた枕（pillow）メニューをゲストに提供することがよくあります。"
        }
    }
];