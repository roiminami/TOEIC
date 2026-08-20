// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data661-670.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "independently of",
        pos: "前置介詞短語",
        ipa: "/ˌɪndɪˈpendəntli əv/",
        cn: "独立于……，不受……影响/支配",
        jp: "〜から独立して、〜とは無関係に",
        family: "independent / independence / independently",
        tips: "企业合规与治理高频：operate independently of management（独立于管理层运作），work independently of others（独立工作）。",
        desc: "The board acts independently of management."
    },
    {
        word: "piled up",
        pos: "動/形",
        ipa: "/paɪld ʌp/",
        cn: "堆积，堆叠（pile up的过去式/分词）",
        jp: "山積みになった、積み重なった",
        family: "pile / piling / piles",
        tips: "Part 1 照片描述与办公高频：boxes piled up in the corner（角落堆积的箱子），work piled up（工作堆积如山）。",
        desc: "Boxes were piled up neatly."
    },
    {
        word: "packing tape",
        pos: "名",
        ipa: "/ˈpækɪŋ teɪp/",
        cn: "封箱胶带，包装胶带",
        jp: "梱包用テープ、ガムテープ",
        family: "pack / package / packaging",
        tips: "Part 1 & 物流仓储高频：seal cartons with packing tape（用封箱胶带密封纸箱），heavy-duty packing tape（强力封箱胶带）。",
        desc: "Seal the box with packing tape."
    },
    {
        word: "applied to",
        pos: "動/形",
        ipa: "/əˈplaɪd tuː/",
        cn: "适用于，应用于；申请（apply to的过去式/分词）",
        jp: "〜に適用された、〜に応募した",
        family: "apply / application / applicant / applicable",
        tips: "规章与财务高频：rules applied to all employees（适用于所有员工的规章），discounts applied to orders（应用于订单的折扣）。",
        desc: "The discount was applied to items."
    },
    {
        word: "wooden stool",
        pos: "名",
        ipa: "/ˈwʊdn stuːl/",
        cn: "木凳，木质矮凳",
        jp: "木製の腰掛け、木製スツール",
        family: "wood / wooden / stool / stools",
        tips: "Part 1 室内与家具高频：sit on a wooden stool（坐在木凳上），wooden stools placed by the counter（吧台旁摆放的木凳）。",
        desc: "A wooden stool is by the counter."
    },
    {
        word: "reflective vest",
        pos: "名",
        ipa: "/rɪˈflektɪv vest/",
        cn: "反光背心，安全反光马甲",
        jp: "反射ベスト、安全ベスト",
        family: "reflect / reflection / vest / vests",
        tips: "Part 1 & 施工安全高频：wear a reflective vest（穿反光背心），high-visibility reflective vest（高可见度反光背心）。",
        desc: "Workers wear a reflective vest."
    },
    {
        word: "rack",
        pos: "名/動",
        ipa: "/ræk/",
        cn: "架子，货架，置物架；放置于架上",
        jp: "棚、ラック、掛け具；棚に置く",
        family: "racks / racked / racking",
        tips: "Part 1 & 仓储物流高频：storage/display rack（储物架/陈列架），drying rack（晾干架），coat rack（衣帽架）。",
        desc: "Items are placed on the rack."
    },
    {
        word: "clipboard",
        pos: "名",
        ipa: "/ˈklɪpbɔːrd/",
        cn: "带夹写字板，剪贴板",
        jp: "クリップボード、用箋挟み",
        family: "clip / board / clipboards",
        tips: "Part 1 & 巡检记录高频：hold a clipboard（拿着写字板），take notes on a clipboard（在带夹板上做记录）。",
        desc: "The inspector held a clipboard."
    },
    {
        word: "strap",
        pos: "名/動",
        ipa: "/stræp/",
        cn: "带子，皮带，背带；用带子系紧/绑牢",
        jp: "ひも、革ひも、ストラップ；ひもで縛る",
        family: "strapped / strapping / straps",
        tips: "Part 1 & 物流包装高频：shoulder strap（单肩背带），strap cargo to the pallet（将货物用带子固定在托盘上）。",
        desc: "Fasten the adjustable shoulder strap."
    },
    {
        word: "corrode",
        pos: "動",
        ipa: "/kəˈroʊd/",
        cn: "腐蚀，侵蚀，冲垮",
        jp: "腐食する、侵食する、むしばむ",
        family: "corrosion / corrosive / corroded / corroding",
        tips: "工业制造与设施维保高频：corrode metal pipes（腐蚀金属管道），prevent rust and corrosion（防止生锈和腐蚀）。",
        desc: "Chemicals can corrode metal pipes."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "reflective vest",
        category: "简单",
        stem: "All construction workers are required to wear a high-visibility ________ while working on the roadway.",
        options: ["reflective vest", "wooden stool", "packing tape", "clipboard"],
        correct: "reflective vest",
        explanations: {
            guide: "工地施工安全防护用品考点。wear a high-visibility ________ 结合在道路施工现场作业穿戴，选 reflective vest（反光背心/安全马甲）。",
            family: "reflective vest (n.反光背心) | wooden stool (n.木凳) | packing tape (n.封箱胶带) | clipboard (n.写字夹板)。",
            details: "high-visibility reflective vest 属于工伤与安全防护最高频搭配。wooden stool（木凳）、clipboard（写字板）均非穿戴式安全防护装备。",
            cn: "所有建筑工人在道路上施工作业时都必须穿戴高可见度的反光背心。",
            jp: "すべての建設作業員は、道路上で作業する際、高視認性の反射ベスト（reflective vest）を着用することが義務付けられています。"
        }
    },
    {
        id: 2,
        target: "packing tape",
        category: "简单",
        stem: "Warehouse clerks used heavy-duty ________ to securely seal the cardboard shipping boxes.",
        options: ["packing tape", "wooden stool", "clipboard", "reflective vest"],
        correct: "packing tape",
        explanations: {
            guide: "物流封箱工具名词考点。used heavy-duty ________ to seal boxes 结合封紧硬纸运输箱，选 packing tape（封箱胶带/包装胶带）。",
            family: "packing tape (n.封箱胶带) | wooden stool (n.木凳) | clipboard (n.写字板) | reflective vest (n.反光背心)。",
            details: "seal boxes with packing tape 意为用封箱胶带封箱。wooden stool（木凳）、reflective vest（反光背心）均无法用于封箱操作。",
            cn: "仓库文员使用强力封箱胶带将纸质运输箱严实密封。",
            jp: "倉庫の係員は、段ボールの輸送箱をしっかりと密封するために頑丈な梱包用テープ（packing tape）を使用しました。"
        }
    },
    {
        id: 3,
        target: "wooden stool",
        category: "简单",
        stem: "The artisan cafe features rustic decor, including a small ________ placed next to each coffee counter.",
        options: ["wooden stool", "packing tape", "clipboard", "reflective vest"],
        correct: "wooden stool",
        explanations: {
            guide: "家具与室内陈设名词考点。placed next to each coffee counter 结合咖啡馆乡村复古装潢风格，选 wooden stool（木凳/木质矮凳）。",
            family: "wooden stool (n.木凳) | packing tape (n.胶带) | clipboard (n.写字夹板) | reflective vest (n.反光背心)。",
            details: "wooden stool 意为木凳。packing tape（胶带）、clipboard（写字板）不符合放置在咖啡吧台旁供人就座的家具实体。",
            cn: "这家手工咖啡馆采用乡村复古风格装饰，每个咖啡吧台旁都摆放着一张小木凳。",
            jp: "その職人風カフェには、各コーヒーカウンターの横に置かれた小さな木製スツール（wooden stool）など、素朴な装飾が施されています。"
        }
    },
    {
        id: 4,
        target: "clipboard",
        category: "简单",
        stem: "The safety inspector walked through the manufacturing plant while taking notes on a metal ________.",
        options: ["clipboard", "wooden stool", "packing tape", "strap"],
        correct: "clipboard",
        explanations: {
            guide: "现场巡检工具名词考点。taking notes on a metal ________ 结合安全检查员在车间巡视时记录笔记，选 clipboard（带夹写字板/用笺夹）。",
            family: "clipboard (n.带夹写字板) | wooden stool (n.木凳) | packing tape (n.胶带) | strap (n.皮带/背带)。",
            details: "taking notes on a clipboard 属于 Part 1 & 商务巡检典型场景，意为在写字夹板上记笔记。wooden stool（木凳）无法用来承托手写纸张记录。",
            cn: "安全检查员在制造车间巡视时，在一块金属写字夹板上做着记录。",
            jp: "安全検査官は、金属製のクリップボード（clipboard）にメモを取りながら製造工場内を歩いて回りました。"
        }
    },
    {
        id: 5,
        target: "piled up",
        category: "简单",
        stem: "Because of the weekend blizzard, dozens of undelivered parcels were ________ in the mailroom.",
        options: ["piled up", "corroded", "strapped", "applied to"],
        correct: "piled up",
        explanations: {
            guide: "物品积压状态表语考点。parcels were ________ in the mailroom 结合暴风雪导致未派送包裹在收发室堆积，选 piled up（堆积/堆叠）。",
            family: "piled up (adj./v-ed堆积的) | corroded (adj.被腐蚀的) | strapped (v-ed系紧的) | applied to (v-ed应用于)。",
            details: "were piled up 意为堆积如山/层叠堆放。corroded（被腐蚀的）与收发室未送达包裹的状态不符。",
            cn: "由于周末的暴风雪，数十件未送达的包裹在收发室里堆积如山。",
            jp: "週末の猛吹雪のため、配達されなかった数十個の小包が郵便室に山積みになって（piled up）いました。"
        }
    },
    {
        id: 6,
        target: "rack",
        category: "简单",
        stem: "Store employees organized the seasonal winter jackets neatly on the central display ________.",
        options: ["rack", "vest", "clipboard", "stool"],
        correct: "rack",
        explanations: {
            guide: "商品陈列设施名词考点。central display ________ 结合整齐悬挂陈列应季冬季夹克，选 rack（陈列架/衣架/货架）。",
            family: "rack (n.货架/衣架) | vest (n.马甲) | clipboard (n.写字板) | stool (n.凳子)。",
            details: "display rack 意为陈列架/展示架。vest（背心）、clipboard（夹板）均非悬挂整理服装的货架设施。",
            cn: "店员们将应季冬季夹克整齐地整理在中央陈列衣架上。",
            jp: "店舗の従業員は、季節物の冬用ジャケットを中央のディスプレイラック（rack）にきちんと整理しました。"
        }
    },
    {
        id: 7,
        target: "independently of",
        category: "中等",
        stem: "The internal audit committee operates ________ corporate executive management to ensure objective reporting.",
        options: ["independently of", "applied to", "piled up", "corroded by"],
        correct: "independently of",
        explanations: {
            guide: "公司治理前置介词短语考点。operates ________ corporate management 结合确保报告客观性，表达“独立于……运作”，选 independently of。",
            family: "independently of (prep.独立于…/不受…干预) | applied to (v-ed应用于) | piled up (v-ed堆积) | corroded by (v-ed被…腐蚀)。",
            details: "operate independently of sb/sth 属于企业审计与合规核心句型，意为独立于某人/某部门运作。其余选项均无表示独立运作的介词逻辑功能。",
            cn: "内部审计委员会独立于企业管理层运作，以确保报告的客观公正。",
            jp: "内部監査委員会は、客観的な報告を確保するため、企業の経営陣から独立して（independently of）業務を行います。"
        }
    },
    {
        id: 8,
        target: "strap",
        category: "中等",
        stem: "The executive briefcase is equipped with a padded shoulder ________ for enhanced carrying comfort.",
        options: ["strap", "rack", "tape", "stool"],
        correct: "strap",
        explanations: {
            guide: "箱包配件名词考点。padded shoulder ________ 结合带有缓冲衬垫以提升携带舒适度，选 strap（背带/肩带）。",
            family: "strap (n.肩带/带子) | rack (n.架子) | tape (n.胶带) | stool (n.凳子)。",
            details: "shoulder strap 意为单肩背带。rack（置物架）、stool（木凳）均非安装在公文包上供单肩背负的带状配件。",
            cn: "这款行政公文包配备了加垫肩带，以提升携带时的舒适度。",
            jp: "そのエグゼクティブ向けブリーフケースには、持ち運びの快適性を高めるためにパッド入りのショルダーストラップ（strap）が装備されています。"
        }
    },
    {
        id: 9,
        target: "corrode",
        category: "中等",
        stem: "Prolonged exposure to chemical runoff and saltwater will gradually ________ the facility's steel drainage pipes.",
        options: ["corrode", "perform", "strap", "pile"],
        correct: "corrode",
        explanations: {
            guide: "材料腐蚀动词原形。will gradually 后面接动词原形，结合化学废液和盐水会损坏钢制排水管，选 corrode（腐蚀/侵蚀）。",
            family: "corrode (v.腐蚀/侵蚀) | perform (v.执行) | strap (v.捆绑) | pile (v.堆叠)。",
            details: "corrode steel pipes 意为腐蚀钢管。perform（执行）、strap（捆扎）均不符合化学液体对金属管壁造成物理化学破坏的动宾语义。",
            cn: "长期暴露在化学径流和盐水中会逐渐腐蚀工厂的钢制排水管道。",
            jp: "化学物質の流出水や塩水に長期間さらされると、施設の鋼鉄製排水管が徐々に腐食（corrode）します。"
        }
    },
    {
        id: 10,
        target: "applied to",
        category: "中等",
        stem: "The promotional discount code can be ________ all eligible purchases during checkout.",
        options: ["applied to", "piled up", "corroded with", "strapped on"],
        correct: "applied to",
        explanations: {
            guide: "商业优惠被动搭配。can be ________ all eligible purchases 结合在结账时将促销折扣码使用于符合条件的购买项目，选 applied to（应用于/适用于）。",
            family: "applied to (v-ed应用于/作用于) | piled up (v-ed堆积) | corroded with (v-ed被腐蚀) | strapped on (v-ed系上)。",
            details: "be applied to purchases 意为应用于商品购买。piled up（堆放）、corroded（腐蚀）均无法与促销折扣代码连用构成结算扣减表达。",
            cn: "在结账时，该促销折扣码可应用于所有符合条件的购买交易。",
            jp: "プロモーション割引コードは、チェックアウト時にすべての対象となる購入に適用（applied to）することができます。"
        }
    },
    {
        id: 11,
        target: "reflective vest",
        category: "中等",
        stem: "Airport ground crew supervisors must ensure that all baggage handlers wear their ________ during night shifts.",
        options: ["reflective vests", "wooden stools", "packing tapes", "clipboards"],
        correct: "reflective vests",
        explanations: {
            guide: "职业防护服复数名词考点。wear their ________ during night shifts 结合机场地勤地服人员在夜班作业穿戴，选 reflective vests（反光背心复数）。",
            family: "reflective vests (n.反光背心复数) | wooden stools (n.木凳) | packing tapes (n.胶带) | clipboards (n.写字板)。",
            details: "wear reflective vests 意为穿反光背心。wooden stools（木凳）、packing tapes（胶带）均非夜间户外作业必须随身穿戴的防护反光服饰。",
            cn: "机场地勤主管必须确保所有行李搬运人员在夜班期间穿戴反光背心。",
            jp: "空港の地上クルー監督者は、すべての手荷物取扱係が夜勤中に反射ベスト（reflective vests）を着用していることを確認しなければなりません。"
        }
    },
    {
        id: 12,
        target: "packing tape",
        category: "中等",
        stem: "To prevent moisture from damaging overseas shipments, workers reinforced the box seams with waterproof ________.",
        options: ["packing tape", "wooden stool", "clipboard", "reflective vest"],
        correct: "packing tape",
        explanations: {
            guide: "仓储防水加固名词考点。reinforced the box seams with waterproof ________ 结合用防水材料加固包装箱接缝，选 packing tape（封箱胶带）。",
            family: "packing tape (n.封箱胶带) | wooden stool (n.木凳) | clipboard (n.写字夹板) | reflective vest (n.反光背心)。",
            details: "waterproof packing tape 意为防水封箱胶带。wooden stool（木凳）、clipboard（写字板）均无法用于加固纸箱接缝防止水汽渗入。",
            cn: "为防止潮气损坏海外运输货物，工人们用防水封箱胶带加固了箱子接缝。",
            jp: "湿気による海外輸送品の破損を防ぐため、作業員は防水梱包用テープ（packing tape）で箱の継ぎ目を補強しました。"
        }
    },
    {
        id: 13,
        target: "corrode",
        category: "困难",
        stem: "Industrial metallurgists applied a protective polymer coating to prevent rapid metal ________ in humid environments.",
        options: ["corrosion", "corrode", "corrosive", "corroded"],
        correct: "corrosion",
        explanations: {
            guide: "派生抽象名词作及物动词宾语。prevent rapid metal ________ 结构中，形容词 rapid 与名词定语 metal 后面接抽象名词形式 corrosion（腐蚀/侵蚀）。",
            family: "corrosion (n.腐蚀/侵蚀) | corrode (v.腐蚀) | corrosive (adj.腐蚀性的) | corroded (adj.被腐蚀的)。",
            details: "metal corrosion 属于工业与材料质检核心专有名词，意为金属腐蚀。corrode 是动词原形，不能作及物动词 prevent 的宾语中心语。",
            cn: "工业冶金工程师涂覆了聚合物保护涂层，以防止金属在潮湿环境中迅速腐蚀。",
            jp: "工業冶金技術者は、湿気の多い環境での急速な金属腐食（corrosion）を防ぐために保護ポリマーコーティングを施しました。"
        }
    },
    {
        id: 14,
        target: "independently of",
        category: "困难",
        stem: "The regulatory review panel reached its conclusions entirely ________ from political or corporate influence.",
        options: ["independently", "independent", "independence", "independency"],
        correct: "independently",
        explanations: {
            guide: "副词修饰动词短语。reached its conclusions entirely ________ from/of... 结构中，需要副词修饰动词短语 reached conclusions，表达“完全独立地得出结论”，选 independently。",
            family: "independently (adv.独立地) | independent (adj.独立的) | independence (n.独立) | independency (n.独立国)。",
            details: "reached conclusions independently 意为独立地得出结论。independent 是形容词，不能被程度副词 entirely 修饰作动词短语的状语。",
            cn: "该监管审查小组完全不受政治或企业影响，独立得出了结论。",
            jp: "規制審査パネルは、政治的または企業的影響から完全に独立して（independently）結論に達しました。"
        }
    },
    {
        id: 15,
        target: "applied to",
        category: "困难",
        stem: "The newly adopted environmental safety standards will be uniformly ________ across all regional manufacturing facilities.",
        options: ["applied", "application", "applicable", "applying"],
        correct: "applied",
        explanations: {
            guide: "被动语态过去分词考点。will be uniformly ________ across... 结构中，在助动词 will be 和副词 uniformly 后面接过去分词，表达环保安全标准将被统一“应用/实施”，选 applied。",
            family: "applied (v-ed被应用/实施的) | application (n.申请/应用) | applicable (adj.适用的) | applying (v-ing)。",
            details: "will be uniformly applied across... 意为将在……全面统一应用施行。application 是名词，applicable 是形容词，均不能构成被动时态谓语分词。",
            cn: "新通过的环境安全标准将在所有区域制造工厂中统一贯彻应用。",
            jp: "新しく採用された環境安全基準は、すべての地域の製造施設全体に均一に適用（applied）されます。"
        }
    },
    {
        id: 16,
        target: "strap",
        category: "困难",
        stem: "Logistics regulations require heavy machinery crates to be securely ________ onto flatbed transport trailers.",
        options: ["strapped", "strap", "strapping", "straps"],
        correct: "strapped",
        explanations: {
            guide: "被动语态过去分词考点。to be securely ________ onto... 结构中，在不定式被动符号 to be 和副词 securely 后面接过去分词，表达重型机箱被牢固地“用带子捆扎绑紧”，选 strapped。",
            family: "strapped (v-ed/adj.被捆扎绑紧的) | strap (v./n.原形) | strapping (v-ing) | straps (n.复数)。",
            details: "be strapped onto trailers 属于货物固定高频短语，意为被捆绑固定在平板挂车上。strap 是原形，不能作被动语态中的分词。",
            cn: "物流法规要求重型机械箱必须牢固地捆扎绑紧在平板运输挂车上。",
            jp: "物流規制により、重機用の木箱は平ボディ輸送トレーラーの上にしっかりと縛り付けられる（strapped）ことが義務付けられています。"
        }
    },
    {
        id: 17,
        target: "rack",
        category: "困难",
        stem: "The automated fulfillment center invested in a multi-tier vertical ________ system to store high-density inventory.",
        options: ["racking", "racks", "racked", "vest"],
        correct: "racking",
        explanations: {
            guide: "复合专有名词作定语。vertical ________ system 属于仓储工程固定专有名词，表达多层立式“货架存储”系统，选动名词/行业名词 racking。",
            family: "racking (n.货架结构/货架工程) | racks (n.架子复数) | racked (v-ed) | vest (n.背心)。",
            details: "vertical racking system 专指立体货架仓储系统。作复合定语修饰 system 时，习惯采用行业专有术语 racking（如 pallet racking system）。",
            cn: "该自动化配送中心投资了一套多层立体货架系统，用于存储高密度库存。",
            jp: "自動化されたフルフィルメントセンターは、高密度な在庫を保管するために多層垂直ラック（racking）システムに投資しました。"
        }
    },
    {
        id: 18,
        target: "piled up",
        category: "困难",
        stem: "Administrative assistants worked overtime to prevent pending client purchase orders from ________ during the holiday rush.",
        options: ["piling up", "piled up", "pile", "piles"],
        correct: "piling up",
        explanations: {
            guide: "固定介词短语接动名词。prevent sth from ________ 结构中，介词 from 后面必须接动名词形式，表达防止待处理订单“堆积成山”，选 piling up。",
            family: "piling up (v-ing堆积) | piled up (v-ed过去式/分词) | pile (v.原形) | piles (n.复数堆)。",
            details: "prevent orders from piling up 属于 prevent... from doing 结构，意为防止订单积压。piled up 是过去式/过去分词，不能直接作介词 from 的动名词宾语。",
            cn: "行政助理们加班工作，以防止待处理的客户采购订单在假日高峰期堆积积压。",
            jp: "管理アシスタントは、ホリデーラッシュ中に保留中の顧客注文書が山積みになる（piling up）のを防ぐために残業しました。"
        }
    }
];