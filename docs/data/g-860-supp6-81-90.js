// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data161-170.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "reservation",
        pos: "名",
        ipa: "/ˌrezərˈveɪʃn/",
        cn: "预订，预约；疑虑，保留意见",
        jp: "予約；懸念、留保、慎重な態度",
        family: "reserve / reserved / unreservedly",
        tips: "核心双重考点：1. 酒店及差旅预订（make/confirm a reservation）；2. 商业谈判中表示怀疑或保留意见（have reservations about the proposal / with some reservations）。",
        desc: "I made a dinner reservation for two."
    },
    {
        word: "respect",
        pos: "名/動",
        ipa: "/rɪˈspekt/",
        cn: "方面，着眼点；关于；尊敬，尊重",
        jp: "点、側面；敬意、尊重；尊重する",
        family: "respective / respectively / respectful / respectable / irrespective",
        tips: "托业高频熟词生义：作名词表示“方面/要点”（in all respects 在各方面；in this respect 在这点上；with respect to 关于）；派生词 respective（各自的）及 respectively（各自地）为高频语法题考点。",
        desc: "The plan is sound in every respect."
    },
    {
        word: "rest",
        pos: "名/動",
        ipa: "/rest/",
        cn: "剩余部分；休息；放心（rest assured）；放，搁",
        jp: "残り；休息；安心する；置く",
        family: "restful / restless / rest assured",
        tips: "托业固定句型高频考点：1. the rest of...（剩余的人或物）；2. 商业信函与客诉承诺固定短语：rest assured that...（请放心……）；3. 工间休息（take a rest）。",
        desc: "Please rest assured that we will help."
    },
    {
        word: "room",
        pos: "名",
        ipa: "/ruːm/",
        cn: "空间，余地，机会；房间",
        jp: "余地、スペース；部屋",
        family: "roomy",
        tips: "不可数名词高阶熟词生义：表示“余地/改善空间”（room for improvement / room for negotiation / room for growth），在此考点中不可数且不与不定冠词 a 连用。",
        desc: "There is still room for improvement."
    },
    {
        word: "run",
        pos: "動/名",
        ipa: "/rʌn/",
        cn: "经营，管理；运转，运行；刊登（广告）；连载",
        jp: "（事業・会議を）運営する；作動する；（広告などを）掲載する；運行",
        family: "runner / running / rerun",
        tips: "三大核心考点：1. 经营企业或主持培训（run a business / run a workshop）；2. 机器运转或列车运行（run smoothly / run on schedule）；3. 媒体刊登广告（run an ad in the newspaper）。",
        desc: "The company will run a newspaper ad."
    },
    {
        word: "sample",
        pos: "動/名",
        ipa: "/ˈsæmpl/",
        cn: "品尝，体验，尝试；样本，试用品",
        jp: "試食する、体験する；試供品、見本、標本",
        family: "sampler / sampling",
        tips: "动词考点极高频：在餐饮、博览会及零售中表示现场品尝或试用体验（sample local specialties / sample the new software）；名词考 free samples（免费样品）。",
        desc: "Guests can sample various desserts today."
    },
    {
        word: "secure",
        pos: "動/形",
        ipa: "/səˈkjʊr/",
        cn: "获得，争取到；固定，系紧；安全的，可靠的",
        jp: "（契約・融資を）獲得する、確保する；固定する；安全な",
        family: "security / securely / unsecured",
        tips: "商务动词高阶考点：表示成功赢得或确保获得（secure a lucrative contract / secure government funding）；作动词亦表示牢牢固定货物（secure cargo）；形容词考 secure server（安全服务器）。",
        desc: "We managed to secure the new contract."
    },
    {
        word: "serve",
        pos: "動",
        ipa: "/sɜːrv/",
        cn: "担任，任职；服务；供应（餐饮）；起作用",
        jp: "（役職・委員を）務める；サービスを提供する；給仕する；役立つ",
        family: "servant / service / server / serving",
        tips: "企业高管任命高频动词：serve as chief executive / serve on the board of directors（担任CEO / 在董事会任职）；亦常考 serve the needs of clients（满足客户需求）。",
        desc: "He served as director for five years."
    },
    {
        word: "service",
        pos: "動/名",
        ipa: "/ˈsɜːrvɪs/",
        cn: "检修，维护，保养；服务，业务",
        jp: "（機械などを）点検・整備する；サービス、業務",
        family: "serviceable / servicing / serviced",
        tips: "动词熟词生义考点：指专业技术人员对设备、车辆进行定期“保养维护与检修”（have the elevator serviced regularly / service heating units）；名词考 customer service。",
        desc: "A technician will service the copy machine."
    },
    {
        word: "shade",
        pos: "名/動",
        ipa: "/ʃeɪd/",
        cn: "遮光帘，卷帘；细微差别；阴凉处；遮蔽",
        jp: "（窓の）日よけ、ブラインド；（意見・意味などの）わずかな違い；日陰",
        family: "shady / shaded / shading",
        tips: "办公设施考点：拉下窗帘（pull down the window shades）；商业分析中考 shades of meaning（细微含义差别）或 a shade lower/higher（略微更低/更高）。",
        desc: "Please lower the window shades."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "reservation",
        category: "简单",
        stem: "Travelers are strongly advised to make a hotel ________ well in advance during the peak summer tourist season.",
        options: ["reservation", "reserve", "secure", "shade"],
        correct: "reservation",
        explanations: {
            guide: "不定冠词与动宾固定搭配。make a ________ 结构中需要接可数名词单数，make a reservation 是出差差旅场景的核心搭配，意为“进行预订”，选 reservation。",
            family: "reservation (n.预订/保留意见) | reserve (v.预订/n.储备) | secure (v.获得/adj.安全的) | shade (n.遮光帘)。",
            details: "make a hotel reservation 意为预订酒店。reserve 是动词或不可数集合概念，不能直接充当不定冠词 a 后的可数中心词。",
            cn: "强烈建议旅客在夏季旅游旺季期间尽早提前预订酒店。",
            jp: "夏の観光ハイシーズン中は、事前にホテルの予約（reservation）をしておくことを強くお勧めします。"
        }
    },
    {
        id: 2,
        target: "sample",
        category: "简单",
        stem: "Attendees at the annual culinary expo will have an opportunity to ________ signature dishes prepared by award-winning chefs.",
        options: ["sample", "sampler", "service", "respect"],
        correct: "sample",
        explanations: {
            guide: "动词不定式与熟词生义考点。an opportunity to 后面需要接动词原形，后接宾语 signature dishes（招牌菜），sample 作动词意为“品尝/体验”，选 sample。",
            family: "sample (v.品尝/体验/n.样品) | sampler (n.样品集/采样器) | service (v.检修/n.服务) | respect (v./n.尊重/方面)。",
            details: "sample dishes 指品尝菜肴。sampler 是名词（样本集），不能跟在不定式符号 to 后面担任及物动词。",
            cn: "参加年度烹饪博览会的人员将有机会品尝由获奖名厨烹调的招牌菜肴。",
            jp: "年に一度の料理博覧会の参加者は、受賞歴のあるシェフが調理した特製料理を試食する（sample）機会が得られます。"
        }
    },
    {
        id: 3,
        target: "serve",
        category: "简单",
        stem: "Ms. Tanaka was unanimously appointed to ________ as the interim head of the corporate communications department.",
        options: ["serve", "service", "reservation", "run"],
        correct: "serve",
        explanations: {
            guide: "动词不定式与人事任命短语搭配。be appointed to 接动词原形，与后面的介词 as 连用构成 serve as（担任/任职为……），选 serve。",
            family: "serve (v.担任/任职/供应) | service (v.检修/n.服务) | reservation (n.预订) | run (v.经营)。",
            details: "serve as head of the department 是职场任命的标准专有短语。service 是及物动词（检修维护），不能与介词 as 搭配表达担任职务。",
            cn: "田中女士被一致任命为企业公关部的临时主管。",
            jp: "田中氏は、企業広報部門の暫定責任者を務める（serve as）よう満場一致で任命されました。"
        }
    },
    {
        id: 4,
        target: "secure",
        category: "简单",
        stem: "The purchasing manager will meet with local suppliers tomorrow to ________ a steady supply of raw construction materials.",
        options: ["secure", "securely", "rest", "shade"],
        correct: "secure",
        explanations: {
            guide: "动词不定式表目的及商务动宾搭配。to 后面需要接动词原形，后接宾语 a steady supply，secure 意为“争取到/确保获得”，选 secure。",
            family: "secure (v.确保获得/牢固固定/adj.安全的) | securely (adv.牢固地) | rest (v.休息) | shade (n.遮光帘)。",
            details: "secure a steady supply 意为确保稳定货源供应。securely 是副词，不能充当不定式中的核心谓语动词。",
            cn: "采购经理将于明天与当地供应商会面，以确保获得稳定的建筑原材料供应。",
            jp: "購買マネージャーは、建設原材料の安定した供給を確保する（secure）ために、明日地元のサプライヤーと会合を持ちます。"
        }
    },
    {
        id: 5,
        target: "service",
        category: "简单",
        stem: "A licensed technician will arrive at the branch office this afternoon to ________ the central air conditioning units.",
        options: ["service", "servicing", "sample", "room"],
        correct: "service",
        explanations: {
            guide: "动词不定式与技术维护熟词生义。to 后面接动词原形，service 作为动词专指对空调、电梯等机械进行“检修与维护保养”，选 service。",
            family: "service (v.检修/保养/n.服务) | servicing (动名词) | sample (v.品尝) | room (n.空间)。",
            details: "service air conditioning units 指对空调机组进行专业检修维护。servicing 是动名词或分词，不能在不定式符号 to 后充当动词原形。",
            cn: "持证技术人员将于今天下午抵达分公司，对中央空调机组进行检修维护。",
            jp: "認定を受けた技術者が、中央空調機器を点検・整備する（service）ために今日の午後支社に到着します。"
        }
    },
    {
        id: 6,
        target: "shade",
        category: "简单",
        stem: "To reduce glare on the computer monitors, the facilities manager asked employees to lower the window ________.",
        options: ["shades", "shady", "runs", "reserves"],
        correct: "shades",
        explanations: {
            guide: "名词复数与办公设施专属搭配。lower the window ________ 结构中，window shades 是办公环境高频词汇，意为“窗帘/百叶遮光帘”，选复数名词 shades。",
            family: "shades (n.遮光帘/复数) | shady (adj.成荫的) | runs (v./n.运行) | reserves (n.储备)。",
            details: "window shades 指卷帘式或百叶式窗帘。shady 是形容词，不能直接放在及物动词 lower 与名词定语 window 后面作宾语中心词。",
            cn: "为了减少电脑显示器上的眩光，设施经理要求员工拉下窗户遮光帘。",
            jp: "コンピューターモニターへの反射光を減らすため、施設管理者は従業員に窓の日よけ・ブラインド（shades）を下ろすよう求めました。"
        }
    },
    {
        id: 7,
        target: "run",
        category: "中等",
        stem: "The marketing firm decided to ________ a series of full-page promotional advertisements in prominent national business magazines.",
        options: ["run", "running", "serve", "service"],
        correct: "run",
        explanations: {
            guide: "动词熟词生义与媒体广告考点。decided to 后面接动词原形，run advertisements 属于传媒与公关核心动宾短语，意为“刊登/投放广告”，选 run。",
            family: "run (v.刊登广告/经营/运转) | running (动名词) | serve (v.服务) | service (v.检修)。",
            details: "run an ad in a magazine 专指在报刊杂志上刊发广告。running 是分词，缺少助动词无法跟在不定式 to 后作谓语动词原形。",
            cn: "该营销策划公司决定在知名全国性商业杂志上刊登一系列整页宣传广告。",
            jp: "そのマーケティング企業は、著名な全国ビジネス雑誌に一連の全面広告を掲載する（run）ことを決定しました。"
        }
    },
    {
        id: 8,
        target: "respect",
        category: "中等",
        stem: "The upgraded data platform is vastly superior to the older version with ________ to data encryption and response latency.",
        options: ["respect", "respectful", "reservation", "room"],
        correct: "respect",
        explanations: {
            guide: "介词固定短语搭配。with respect to 是托业极高频商务介词词组，完全等同于 regarding 或 in terms of，意为“关于/在……方面”，选名词 respect。",
            family: "respect (n.方面/尊敬) | respectful (adj.充满敬意的) | reservation (n.预订) | room (n.空间)。",
            details: "with respect to data encryption 意为在数据加密方面。respectful 是形容词，不能在介词 with 和 to 之间充当介词短语核心名词。",
            cn: "升级后的数据平台在数据加密和响应延迟方面明显优于旧版本。",
            jp: "アップグレードされたデータプラットフォームは、データの暗号化と応答遅延に関して（with respect to）、旧バージョンよりもはるかに優れています。"
        }
    },
    {
        id: 9,
        target: "room",
        category: "中等",
        stem: "While the quarterly revenue figures were satisfactory, the regional vice president noted that there is still ________ for improvement.",
        options: ["room", "roomy", "shade", "rest"],
        correct: "room",
        explanations: {
            guide: "不可数名词熟词生义与固定搭配。room for improvement 是托业绩效考评与企业运营经典短语，意为“改进空间/提升余地”，选不可数名词 room。",
            family: "room (n.空间/余地/不可数) | roomy (adj.宽敞的) | shade (n.细微差别) | rest (n.其余)。",
            details: "there is room for improvement 中的 room 表示抽象余地，前面不加冠词 a。roomy 是形容词，不能作 there is 句型的主语核心词。",
            cn: "虽然季度营收数据令人满意，但区域副总裁指出依然存在改进空间。",
            jp: "四半期の売上高の数値は満足のいくものでしたが、地域担当副社長は改善の余地（room）がまだあると指摘しました。"
        }
    },
    {
        id: 10,
        target: "rest",
        category: "中等",
        stem: "Prospective home buyers should ________ assured that all properties listed by our agency undergo rigorous structural inspections.",
        options: ["rest", "restful", "serve", "run"],
        correct: "rest",
        explanations: {
            guide: "固定句型搭配与商务信函套话。should 后面接动词原形，rest assured that... 是托业高频固定习语，意为“尽请放心/完全可以确信”，选 rest。",
            family: "rest (v.放心/停留/n.休息) | restful (adj.使人身心放松的) | serve (v.服务) | run (v.运营)。",
            details: "rest assured that 构成固定表达，assured 为过去分词作主语补足语。restful 是形容词，不能跟在情态动词 should 后面作谓语动词。",
            cn: "意向购房者完全可以放心，我们机构所列出的所有房产均经过严格的结构安全检查。",
            jp: "当代理店が掲載しているすべての物件は厳格な構造検査を受けていますので、購入希望者の方はご安心（rest assured）ください。"
        }
    },
    {
        id: 11,
        target: "reservation",
        category: "中等",
        stem: "Several executive committee members expressed serious ________ about the commercial feasibility of the overseas acquisition.",
        options: ["reservations", "reserved", "services", "samples"],
        correct: "reservations",
        explanations: {
            guide: "熟词生义与名词复数考点。express serious ________ about 结构中，reservations 考查“疑虑/保留意见”，express reservations 指“对……表达疑虑”，选 reservations。",
            family: "reservations (n.保留意见/疑虑/复数) | reserved (adj.矜持的/已预订的) | services (n.服务) | samples (n.样品)。",
            details: "have/express reservations about 是商务谈判与决议评估高频考点。reserved 是分词形容词，不能直接放在形容词 serious 后作及物动词 expressed 的宾语。",
            cn: "几位执行委员会成员对该海外收购项目的商业可行性表达了严重的疑虑。",
            jp: "複数の執行委員メンバーは、その海外買収の商業的実現可能性について深刻な懸念・留保（reservations）を表明しました。"
        }
    },
    {
        id: 12,
        target: "secure",
        category: "中等",
        stem: "Through meticulous preparation and aggressive negotiation, the aerospace startup successfully ________ a multi-million-dollar defense grant.",
        options: ["secured", "securing", "served", "rested"],
        correct: "secured",
        explanations: {
            guide: "一般过去时态与商务熟词生义。句子缺少主句谓语动词，secure a grant 意为“成功赢得/争取到拨款”，由副词 successfully 修饰，选用过去式 secured。",
            family: "secured (v-ed赢得/拿下) | securing (现在分词) | served (v-ed服务) | rested (v-ed休息)。",
            details: "secured a grant / contract 专指通过竞标竞争赢得商业或官方资金。securing 是分词，缺少助动词无法单独构成谓语。",
            cn: "通过周密的准备与积极的谈判，该航空航天初创公司成功获得了一笔数百万美元的国防资助款。",
            jp: "綿密な準備と積極的な交渉を通じて、その航空宇宙スタートアップ企業は数百万ドル規模の防衛助成金を無事に獲得し（secured）ました。"
        }
    },
    {
        id: 13,
        target: "respect",
        category: "困难",
        stem: "Department directors were instructed to distribute the revised compliance guidelines to their ________ team leaders by noon.",
        options: ["respective", "respectful", "respectable", "reserved"],
        correct: "respective",
        explanations: {
            guide: "同根形容词高阶辨析。修饰复数名词 team leaders，表示由各位主管发给“各自的/分别对应的”组长，必须使用 respective（各自的），选 respective。",
            family: "respective (adj.各自的/分别的) | respectful (adj.充满敬意的) | respectable (adj.值得尊敬的/体面的) | reserved (adj.内向的/预订的)。",
            details: "their respective teams / leaders 是托业 Part 5 经典考点。respectful 意为对人恭敬有礼，respectable 意为品格受人敬重，均不符合“各部门分头对应”的语境。",
            cn: "各部门主管接到指示，须在中午前将修订后的合规准则分发给各自对应的团队组长。",
            jp: "部門長は、正午までに改定されたコンプライアンス指針をそれぞれの（respective）チームリーダーに配布するよう指示されました。"
        }
    },
    {
        id: 14,
        target: "room",
        category: "困难",
        stem: "Because precision aerospace manufacturing adheres to microscopic tolerances, the assembly protocol leaves no ________ for error.",
        options: ["room", "rooms", "shade", "rest"],
        correct: "room",
        explanations: {
            guide: "高阶抽象名词搭配与熟词生义。leave no ________ for error 是标准商务与工程成语表达，意为“不容许有丝毫差错/不留犯错余地”，room 表示抽象余地为不可数名词，选 room。",
            family: "room (n.余地/不可数) | rooms (n.房间/复数) | shade (n.细微差别) | rest (n.其余)。",
            details: "leave no room for error 属于固定成语搭配。rooms 复数专指房屋房间，无法用于修饰抽象容错空间；shade 和 rest 无法与 leave no ... for error 搭配。",
            cn: "由于精密航空航天制造遵循微米级的公差标准，装配工艺规程绝不容许出现丝毫差错。",
            jp: "精密航空宇宙製造は微小な公差を順守しているため、組立プロトコルには誤りの余地（no room for error）が一切残されていません。"
        }
    },
    {
        id: 15,
        target: "run",
        category: "困难",
        stem: "Although migrating to automated logistics software involves substantial upfront costs, it will prove highly profitable in the long ________.",
        options: ["run", "running", "service", "sample"],
        correct: "run",
        explanations: {
            guide: "介词固定习语搭配。in the long ________ 是经济与企业战略决策的核心固定短语，in the long run 意为“从长远来看/终究”，选名词 run。",
            family: "run (n.长期进程/v.运转) | running (动名词) | service (n.服务) | sample (n.样品)。",
            details: "in the long run 属于标准习语，对应 in the short term。running 是动名词，不能替换该固定习语中的成语核心词 run。",
            cn: "虽然迁移到自动化物流软件涉及高昂的前期成本，但从长远来看，它将被证明是利润丰厚的。",
            jp: "自動化された物流ソフトウェアへの移行には多額の先行費用がかかりますが、長期的には（in the long run）非常に有益であることが証明されるでしょう。"
        }
    },
    {
        id: 16,
        target: "sample",
        category: "困难",
        stem: "To guarantee statistical accuracy, the market research agency surveyed a demographically representative ________ of prospective subscribers.",
        options: ["sample", "sampling", "reservation", "secure"],
        correct: "sample",
        explanations: {
            guide: "统计学与市场调研专属名词辨析。a representative ________ of... 结构中，指调研抽取的“具有代表性的样本/抽样群体”，必须选用具象名词 sample，选 sample。",
            family: "sample (n.样本/调查受众样本) | sampling (n.抽样行为/取样过程) | reservation (n.预订) | secure (v.确保)。",
            details: "a representative sample 指受访样本群体本身。sampling 指统计学上的抽样方法或动作过程，不能被不定冠词 a 和形容词 representative 修饰为受访人集合体。",
            cn: "为确保统计准确性，该市场研究机构对潜在订阅用户中具有人口统计代表性的样本群体进行了问卷调查。",
            jp: "統計的な正確性を保証するために、市場調査機関は見込み購読者の人口統計学的に代表的なサンプル（sample）を調査しました。"
        }
    },
    {
        id: 17,
        target: "rest",
        category: "困难",
        stem: "While two thirds of the shipment arrived at the loading dock this morning, the ________ of the ordered components is scheduled for delivery tomorrow.",
        options: ["rest", "restful", "shade", "reservation"],
        correct: "rest",
        explanations: {
            guide: "部分代词/名词搭配与单复数主谓呼应。the ________ of the ordered components 结构中，the rest of... 意为“剩余的部件”，在此作为主语与 is scheduled 搭配，选 rest。",
            family: "rest (n.剩余部分/其余) | restful (adj.宁静的) | shade (n.细微差别) | reservation (n.疑虑)。",
            details: "the rest of 表达剩余未到货物。restful 是形容词，shade（细微差异）与 reservation（预订/疑虑）在物流发货语境下均不通顺。",
            cn: "虽然三分之二的货物已于今天上午运抵装卸码头，但所订购部件的其余部分定于明天交付。",
            jp: "積送品の3分の2は今朝荷卸しドックに到着しましたが、注文された部品の残り（rest）は明日配達される予定です。"
        }
    },
    {
        id: 18,
        target: "serve",
        category: "困难",
        stem: "Dr. Vance was formally recognized at the annual shareholder gala for having ________ with distinction on the advisory committee for ten years.",
        options: ["served", "serving", "secured", "serviced"],
        correct: "served",
        explanations: {
            guide: "完成分词与动词辨析。for having ________ on the committee 结构中，having 后面需要过去分词构成完成动名词，serve on a committee 意为“在委员会任职”，选 served。",
            family: "served (v-ed在…任职/服务) | serving (现在分词) | secured (v-ed获得) | serviced (v-ed检修维护)。",
            details: "serve with distinction 指卓越尽责地任职。serviced 意为对机器进行检修保养，用来修饰人在委员会任职属于严重词义错配。",
            cn: "万斯博士在年度股东庆典上受到正式表彰，以表彰他在咨询委员会卓越任职长达十年之久。",
            jp: "ヴァンス博士は、諮問委員会で10年間にわたり見事に務めを果たした（served）ことに対し、年次株主祝賀会で正式に表彰されました。"
        }
    }
];