// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data191-200.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "keynote",
        pos: "名/形",
        ipa: "/ˈkiːnoʊt/",
        cn: "主旨，基调；主旨演讲的",
        jp: "基調、基本方針；基調講演の",
        family: "keynote address / keynote speaker / keynote speech",
        tips: "商务峰会核心考点：keynote address / speech（主旨演讲），keynote speaker（主讲嘉宾）。常出现在 Part 7 会议日程与活动邀请函中。",
        desc: "She delivered the keynote address."
    },
    {
        word: "outage",
        pos: "名",
        ipa: "/ˈaʊtɪdʒ/",
        cn: "（电力、网络等）中断，停电",
        jp: "停電、（電力・通信などの）供給停止",
        family: "power outage / service outage / system outage",
        tips: "设施维护与应急通知高频词：power outage（停电），network/server outage（网络/服务器宕机中断），unscheduled outage（非计划停运）。",
        desc: "The storm caused a power outage."
    },
    {
        word: "expedite",
        pos: "動",
        ipa: "/ˈekspədaɪt/",
        cn: "加快，加速（处理/运输）",
        jp: "早める、迅速に処理する、促進する",
        family: "expedited / expedition / expeditious / expeditiously",
        tips: "物流配送与客服核心及物动词：expedite shipping / delivery / the processing of orders（加急运送/加快订单处理）；派生形容词 expedited shipping（加急快递）。",
        desc: "Please expedite the shipping process."
    },
    {
        word: "repave",
        pos: "動",
        ipa: "/ˌriːˈpeɪv/",
        cn: "重新铺设（路面）",
        jp: "（道路を）再舗装する",
        family: "repaving / pavement / pave",
        tips: "市政工程与交通改道通知必考词：repave a road / parking lot / highway（重铺道路/停车场/公路）；动名词形式 repaving 常用于表示施工期（during repaving）。",
        desc: "Crews will repave the parking lot."
    },
    {
        word: "artifact",
        pos: "名",
        ipa: "/ˈɑːrtɪfækt/",
        cn: "历史文物，手工艺品",
        jp: "工芸品、歴史的遺物、人工物",
        family: "artifacts / artisanal / historical artifacts",
        tips: "文化旅游、博物馆展览及公关活动核心词汇：ancient/historical artifacts on display（展出的古代/历史文物）；注意英式拼写亦作 artefact。",
        desc: "The museum houses ancient artifacts."
    },
    {
        word: "tutorial",
        pos: "名/形",
        ipa: "/tuːˈtɔːriəl/",
        cn: "教程，辅导课程；个别辅导的",
        jp: "チュートリアル、個別指導講座；個別指導の",
        family: "tutor / tutorial video / online tutorial",
        tips: "IT 软件支持与员工培训高频词：step-by-step tutorial（分步教程），video tutorial（视频教程），interactive tutorial（互动式教程）。",
        desc: "Watch the online video tutorial."
    },
    {
        word: "attire",
        pos: "名",
        ipa: "/əˈtaɪər/",
        cn: "服装，着装（不可数）",
        jp: "服装、衣装（不可算）",
        family: "attired / business attire / formal attire / casual attire",
        tips: "人事着装规范与正式晚宴核心不可数名词：business attire（商务正装），professional attire（职业着装）；动词被动常考 be appropriately attired in...",
        desc: "Business attire is required for the meeting."
    },
    {
        word: "batch",
        pos: "名/動",
        ipa: "/bætʃ/",
        cn: "一批，一组（生产/处理）；分批处理",
        jp: "一団、1回分、1バッチ；一括処理する",
        family: "batches / batching / batch process",
        tips: "生产制造、质量检测与数据处理核心词：the first batch of products（第一批产品），inspect each batch（检查每一生产批次），batch processing（批处理）。",
        desc: "The first batch of products has arrived."
    },
    {
        word: "morale",
        pos: "名",
        ipa: "/məˈræl/",
        cn: "士气，斗志",
        jp: "士気、意気込み",
        family: "moral / boost morale / employee morale / staff morale",
        tips: "企业人事管理核心高频词（注意重音在第二音节，切勿混淆于 moral /ˈmɔːrəl/ 道德）：boost/improve employee morale（提升员工士气），high/low morale。",
        desc: "The bonus boosted team morale."
    },
    {
        word: "irrigation",
        pos: "名",
        ipa: "/ˌɪrɪˈɡeɪʃn/",
        cn: "灌溉，冲洗",
        jp: "灌漑（かんがい）、水やり",
        family: "irrigate / irrigated / irrigation system",
        tips: "农业经济、园区景观与节能环保高频考点：automated irrigation system（自动化灌溉系统），water conservation through efficient irrigation（节水灌溉）。",
        desc: "The park uses a smart irrigation system."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "expedite",
        category: "简单",
        stem: "To ensure customer satisfaction, the online merchant offered to ________ the shipment of the replacement item at no extra charge.",
        options: ["expedite", "expedited", "repave", "morale"],
        correct: "expedite",
        explanations: {
            guide: "动词不定式结构。offered to 后面需要接动词原形，后接宾语 the shipment，表达零售商主动提出“加急处理/加快”换货运送，选 expedite。",
            family: "expedite (v.加快/加急) | expedited (adj.加急的) | repave (v.重铺) | morale (n.士气)。",
            details: "to expedite the shipment 是托业电商客服高频表达。expedited 是过去式或过去分词，不能在不定式符号 to 后面充当核心谓语动词原形。",
            cn: "为了确保客户满意度，该在线商家提出免费加急运送更换的商品。",
            jp: "顧客満足度を確保するため、そのオンラインショップは追加料金なしで交換品の発送を早める（expedite）ことを申し出ました。"
        }
    },
    {
        id: 2,
        target: "outage",
        category: "简单",
        stem: "Production was temporarily halted on Tuesday morning because of an unforeseen electrical power ________ at the factory.",
        options: ["outage", "outages", "artifact", "attire"],
        correct: "outage",
        explanations: {
            guide: "复合名词定语搭配。electrical power 与后面的名词组合，power outage 是公用事业与设施运维高频短语，意为“停电/电力中断”，选 outage。",
            family: "outage (n.断电/停水/中断) | outages (n.复数) | artifact (n.文物) | attire (n.服装)。",
            details: "an unforeseen power outage 意为突发的停电。受不定冠词 an 限制，此处必须填入单数名词 outage。",
            cn: "由于工厂发生意外停电，生产作业于周二上午暂时停止。",
            jp: "工場での予期せぬ停電（power outage）のため、火曜日の朝に生産が一時的に中断されました。"
        }
    },
    {
        id: 3,
        target: "attire",
        category: "简单",
        stem: "Employees attending the annual corporate awards banquet are requested to wear formal business ________.",
        options: ["attire", "attired", "batch", "tutorial"],
        correct: "attire",
        explanations: {
            guide: "不可数名词中心语与职场着装搭配。wear formal business ________ 结构中需要名词作 wear 的宾语，business attire 意为“商务正装”，选 attire。",
            family: "attire (n.服装/着装/不可数) | attired (adj.穿着…的) | batch (n.一批) | tutorial (n.教程)。",
            details: "business attire 属于人事规定不可数专属专有名词。attired 是分词形容词，不能直接放在形容词 formal business 之后作宾语中心词。",
            cn: "出席公司年度表彰晚宴的员工被要求身着正式商务正装。",
            jp: "年次企業授賞晩餐会に出席する従業員は、フォーマルなビジネスの服装（business attire）を着用することが求められています。"
        }
    },
    {
        id: 4,
        target: "repave",
        category: "简单",
        stem: "The property management firm hired a commercial contractor to ________ the employee parking lot this weekend.",
        options: ["repave", "repaving", "expedite", "irrigation"],
        correct: "repave",
        explanations: {
            guide: "动词不定式与物业工程考点。hired a contractor to 后面接动词原形，repave the parking lot 意为“重新铺设停车场路面”，选 repave。",
            family: "repave (v.重新铺设路面) | repaving (动名词) | expedite (v.加急) | irrigation (n.灌溉)。",
            details: "hired a contractor to repave 构成完整的不定式目的短语。repaving 为动名词或分词，不能跟在不定式符号 to 后作谓语动词原形。",
            cn: "物业管理公司聘请了一家商业承包商，将于本周末重新铺设员工停车场路面。",
            jp: "不動産管理会社は、今週末に従業員用駐車場を再舗装する（repave）ために商業請負業者を雇いました。"
        }
    },
    {
        id: 5,
        target: "tutorial",
        category: "简单",
        stem: "New staff members should watch the brief online video ________ before logging into the internal database.",
        options: ["tutorial", "tutor", "keynote", "outage"],
        correct: "tutorial",
        explanations: {
            guide: "复合名词定语修饰。the brief online video ________ 结构中需要名词中心语，video tutorial 属于 IT 与培训高频固定搭配，意为“视频教程”，选 tutorial。",
            family: "tutorial (n.教程/辅导课) | tutor (n.家庭教师/导师) | keynote (n.主旨) | outage (n.停运)。",
            details: "video tutorial 指教学指导视频。tutor 指具体的辅导老师个人，不能被 online video 直接修饰指代教学资料本身。",
            cn: "新入职员工在登录内部数据库之前，应观看简短的在线视频教程。",
            jp: "新入社員は、社内データベースにログインする前に、短いオンラインビデオチュートリアル（tutorial）を視聴する必要があります。"
        }
    },
    {
        id: 6,
        target: "artifact",
        category: "简单",
        stem: "The municipal museum has acquired several historical ________ from the ancient regional trading settlement.",
        options: ["artifacts", "artifact", "batches", "attires"],
        correct: "artifacts",
        explanations: {
            guide: "限定词修饰名词复数。several 后面必须接可数名词复数，historical artifacts 意为“历史手工艺品/历史文物”，选 artifacts。",
            family: "artifacts (n.文物/手工艺品/复数) | artifact (n.单数) | batches (n.批次) | attires (非标准复数)。",
            details: "several historical artifacts 指数件历史文物。artifact 为单数，不能直接被数词限定词 several 修饰。",
            cn: "市立博物馆获得了来自当地古代贸易聚落的数件历史文物。",
            jp: "市立博物館は、古代の地域交易集落からいくつかの歴史的遺物（artifacts）を取得しました。"
        }
    },
    {
        id: 7,
        target: "keynote",
        category: "中等",
        stem: "Dr. Rachel Vance has been formally invited to deliver the opening ________ address at the international renewable energy conference.",
        options: ["keynote", "keynotes", "tutorial", "morale"],
        correct: "keynote",
        explanations: {
            guide: "前置定语复合名词搭配。deliver the opening ________ address 结构中，keynote address 是托业会议场景极高频专属搭配，意为“主旨演讲”，选 keynote。",
            family: "keynote (n./adj.主旨/基调) | keynotes (n.复数) | tutorial (n.教程) | morale (n.士气)。",
            details: "keynote address 意为开幕主旨演讲。keynotes 复数形式一般不作前置修饰语来修饰单数名词 address。",
            cn: "蕾切尔·万斯博士已受正式邀请，将在国际可再生能源会议上发表开幕主旨演讲。",
            jp: "レイチェル・ヴァンス博士は、国際再生可能エネルギー会議で開会の基調（keynote）講演を行うよう正式に招待されました。"
        }
    },
    {
        id: 8,
        target: "batch",
        category: "中等",
        stem: "Quality assurance inspectors must thoroughly test a sample from every ________ of pharmaceutical tablets before distribution.",
        options: ["batch", "batching", "outage", "repave"],
        correct: "batch",
        explanations: {
            guide: "限定词后的单数名词。every 后面必须接单数可数名词，every batch of... 指药品的“每一个生产批次”，选 batch。",
            family: "batch (n.一批/批次) | batching (动名词) | outage (n.中断) | repave (v.重铺)。",
            details: "every batch of tablets 属于医药制造质量把控的核心用语。batching 是动名词动作，不能作为由 every 修饰的具象生产批次名词。",
            cn: "质量保证检验员在分发之前，必须对每一批次药片抽样进行彻底检测。",
            jp: "品質保証検査官は、流通の前に医薬品錠剤のすべてのバッチ（batch）からサンプルを徹底的に検査しなければなりません。"
        }
    },
    {
        id: 9,
        target: "morale",
        category: "中等",
        stem: "The human resources director noted that flexible working hours have significantly boosted employee ________ throughout the department.",
        options: ["morale", "moral", "artifact", "irrigation"],
        correct: "morale",
        explanations: {
            guide: "形近词辨析与职场专属搭配。boost employee ________ 结构中，boost employee morale 属于托业人事管理固定短语，意为“提升员工士气”，选 morale。",
            family: "morale (n.士气/斗志) | moral (adj.道德的/n.寓意) | artifact (n.文物) | irrigation (n.灌溉)。",
            details: "boost employee morale 指振奋团队士气。moral 作形容词意为道德上的，作名词指寓言的道德教训，在此处属于经典混淆干扰项。",
            cn: "人力资源主管指出，弹性工作制显著提升了整个部门的员工士气。",
            jp: "人事部長は、フレックスタイム制の導入が部門全体の従業員の士気（morale）を大幅に高めたと述べました。"
        }
    },
    {
        id: 10,
        target: "irrigation",
        category: "中等",
        stem: "The landscape architect designed an energy-efficient ________ system to conserve water across the corporate campus gardens.",
        options: ["irrigation", "irrigate", "attire", "keynote"],
        correct: "irrigation",
        explanations: {
            guide: "复合名词定语修饰。an energy-efficient ________ system 结构中需要名词作修饰定语，irrigation system 意为“灌溉系统/喷淋节水系统”，选 irrigation。",
            family: "irrigation (n.灌溉/冲洗) | irrigate (v.灌溉) | attire (n.服装) | keynote (n.主旨)。",
            details: "an irrigation system 专指园林或农田的喷灌排水设施。irrigate 是动词，不能直接放在形容词 energy-efficient 后面作名词系统的修饰定语。",
            cn: "景观设计师设计了一套节能灌溉系统，以节约公司园区花园的用水。",
            jp: "景観建築家は、企業キャンパスの庭園全体で節水を図るため、エネルギー効率の高い灌漑（irrigation）システムを設計しました。"
        }
    },
    {
        id: 11,
        target: "outage",
        category: "中等",
        stem: "Because of a scheduled technical ________ on the billing server, electronic invoice processing will be unavailable this Saturday.",
        options: ["outage", "outages", "expedited", "batch"],
        correct: "outage",
        explanations: {
            guide: "不定冠词与形容词后的名词中心语。a scheduled technical ________ 结构中，受不定冠词 a 限制，需要单数名词，technical outage 意为“技术停机/系统维护中断”，选 outage。",
            family: "outage (n.服务中断/停机/单数) | outages (n.复数) | expedited (adj.加急的) | batch (n.批次)。",
            details: "a technical outage 指网络或服务器因检修导致的暂停服务。outages 为复数，不能直接与不定冠词 a 连用。",
            cn: "由于计费服务器进行预定的技术停机维护，本周六电子发票处理服务将暂停使用。",
            jp: "請求サーバーの定期的な技術停止（technical outage）のため、今週の土曜日は電子請求書の処理が利用できなくなります。"
        }
    },
    {
        id: 12,
        target: "repave",
        category: "中等",
        stem: "Motorists should anticipate heavy traffic delays along Highway 4 during the scheduled ________ of the northbound lanes.",
        options: ["repaving", "repave", "tutorial", "morale"],
        correct: "repaving",
        explanations: {
            guide: "定冠词与形容词后的动名词名词化。during the scheduled ________ of the lanes 结构中，介词 of 前面需要动名词充当施工动作名词，the repaving of... 意为“重新铺设工程”，选 repaving。",
            family: "repaving (n.路面重铺工程/动名词) | repave (v.动词原形) | tutorial (n.教程) | morale (n.士气)。",
            details: "the scheduled repaving of the road 是交通广播与施工通报经典短语。repave 是动词原形，不能作定冠词 the 和形容词 scheduled 后的名词中心语。",
            cn: "在北行车道按计划进行路面重铺期间，驾驶人员应预见到 4 号公路沿线将出现严重的交通延误。",
            jp: "北行き車線の予定された再舗装（repaving）工事の間、ドライバーは国道4号線沿いの激しい交通渋滞を予想する必要があります。"
        }
    },
    {
        id: 13,
        target: "expedite",
        category: "困难",
        stem: "For an additional rush fee, the express delivery provider can offer ________ shipping on all domestic orders.",
        options: ["expedited", "expedite", "expedition", "repaved"],
        correct: "expedited",
        explanations: {
            guide: "分词派生形容词作定语修饰名词。offer ________ shipping 结构中，修饰名词 shipping，expedited shipping 是电商与物流专有名词，意为“特快专递/加急运输”，选 expedited。",
            family: "expedited (adj.加急的/特快的) | expedite (v.加快) | expedition (n.考察/远征) | repaved (adj.已重铺的)。",
            details: "expedited shipping 专指支付加急运费后的快速配送服务。expedite 为动词原形，expedition 为远征考察，均无法作定语修饰运输名词 shipping。",
            cn: "只需支付额外的加急费，该快递服务商即可为所有国内订单提供加急运输服务。",
            jp: "追加の特急料金を支払うことで、その宅配業者はすべての国内注文に対して迅速（expedited）配送を提供できます。"
        }
    },
    {
        id: 14,
        target: "keynote",
        category: "困难",
        stem: "As the ________ speaker at the global marketing symposium, Mr. Tanaka shared insights into digital branding trends.",
        options: ["keynote", "keynotes", "attire", "tutorial"],
        correct: "keynote",
        explanations: {
            guide: "名词作前置定语修饰职位。As the ________ speaker 结构中，keynote 修饰 speaker，keynote speaker 是托业会议与展会专属专有名词，意为“主讲嘉宾/主旨发言人”，选 keynote。",
            family: "keynote (adj./n.主旨发言的/基调) | keynotes (n.复数) | attire (n.服装) | tutorial (n.教程)。",
            details: "keynote speaker 指在开幕式等重要环节作核心演讲的主讲人。keynotes 是复数，不能用作修饰单数 speaker 的定语形态。",
            cn: "作为全球营销研讨会的主讲嘉宾，田中先生分享了关于数字品牌塑造趋势的独到见解。",
            jp: "グローバルマーケティングシンポジウムの基調講演者（keynote speaker）として、田中氏はデジタルブランディングのトレンドに関する洞察を共有しました。"
        }
    },
    {
        id: 15,
        target: "attire",
        category: "困难",
        stem: "All medical laboratory technicians are required to be appropriately ________ in sterile protective garments before entering the testing suite.",
        options: ["attired", "attire", "batching", "outage"],
        correct: "attired",
        explanations: {
            guide: "系表结构与高阶被动分词形容词。be appropriately ________ in 结构中，副词 appropriately 修饰形容词/分词，be attired in 属于正式书面英语，意为“身着……服装”，选 attired。",
            family: "attired (adj.身穿…服装的) | attire (n.服装/不可数) | batching (动名词) | outage (n.中断)。",
            details: "be attired in sterile garments 是实验室洁净与安全规程的高阶表述，功能等同于 be dressed in。attire 是名词，不能在系动词 be 和副词后充当表语形容词。",
            cn: "所有医学实验室技术人员在进入检测区之前，都必须按规定穿戴好无菌防护服。",
            jp: "すべての医療検査技術者は、検査室に入る前に滅菌防護服を適切に着用（attired in）することが義務付けられています。"
        }
    },
    {
        id: 16,
        target: "morale",
        category: "困难",
        stem: "While maintaining strict operational discipline is necessary, management must also take steps to sustain high staff ________ during busy quarters.",
        options: ["morale", "moral", "morality", "morally"],
        correct: "morale",
        explanations: {
            guide: "同根词与易混词高阶辨析。sustain high staff ________ 结构中，形容词 high 和名词 staff 后面需要接抽象名词，sustain staff morale 意为“维持高昂的员工士气”，选 morale。",
            family: "morale (n.士气/意气) | moral (adj.道德的/n.寓意) | morality (n.道德规范) | morally (adv.道德上)。",
            details: "staff morale 指团队精神斗志。morality 指伦理道德准则，不能与 high staff 搭配指代工作干劲；moral 是形容词，词性与含义均不符合此处动宾结构。",
            cn: "虽然维持严格的运营纪律是必要的，但管理层在繁忙的季度也必须采取措施以保持高昂的员工士气。",
            jp: "厳格な業務規律を維持することは必要ですが、経営陣は繁忙期においても従業員の高い士気（morale）を維持するための措置を講じる必要があります。"
        }
    },
    {
        id: 17,
        target: "batch",
        category: "困难",
        stem: "The automated logistics software allows the fulfillment team to ________ process customer purchase orders every evening.",
        options: ["batch", "batching", "repave", "expedite"],
        correct: "batch",
        explanations: {
            guide: "复合动词与熟词生义用法。allows sb to ________ process 结构中，batch 与 process 结合构成 batch process（批处理），选动词原形 batch 作复合谓语核心词。",
            family: "batch (v.批处理/分批/n.一批) | batching (动名词) | repave (v.重铺) | expedite (v.加速)。",
            details: "batch process 是信息工程与物流仓储的核心专业动词词组，意为对订单进行集中批处理。batching 是动名词，不能在不定式符号 to 后面修饰或复合动词 process。",
            cn: "该自动化物流软件使订单执行团队能够在每天傍晚对客户采购订单进行批量集中处理。",
            jp: "自動化された物流ソフトウェアにより、フルフィルメントチームは毎晩、顧客の購入注文を一括処理（batch process）することができます。"
        }
    },
    {
        id: 18,
        target: "irrigation",
        category: "困难",
        stem: "Extensive agricultural farmlands in the arid southern valley are sustainably ________ by water channeled from the regional reservoir.",
        options: ["irrigated", "irrigation", "artifacts", "keynote"],
        correct: "irrigated",
        explanations: {
            guide: "被动语态与动词派生。are sustainably ________ by 结构中，系动词 are 与副词 sustainably 之后需要填入过去分词构成被动语态，irrigate 意为“灌溉”，选 irrigated。",
            family: "irrigated (v-ed被灌溉的) | irrigation (n.灌溉) | artifacts (n.文物) | keynote (n.主旨)。",
            details: "farmlands are irrigated by water 意为农田由水渠引水灌溉。irrigation 是名词，无法与 are 构成表示被动动作的谓语结构。",
            cn: "南部干旱山谷中的大片农田依靠从区域水库引来的水源实现了可持续灌溉。",
            jp: "乾燥した南部渓谷の広大な農地は、地域の貯水池から引かれた水によって持続可能に灌漑（irrigated）されています。"
        }
    }
];