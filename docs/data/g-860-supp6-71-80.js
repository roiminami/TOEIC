// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data151-160.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "present",
        pos: "動/形/名",
        ipa: "/prɪˈzent/ (v.), /ˈpreznt/ (adj./n.)",
        cn: "出示，呈交；提出，发表演讲；出席的；目前的；礼物",
        jp: "提示する、提出する；発表する；出席している；現在の；贈り物",
        family: "presentation / presenter / presence / presently",
        tips: "多重考点：1. 动词考出示证件（present a photo ID / boarding pass）；2. 系表结构考在场出席（be present at the meeting）；3. 名词考目前（at the present time）。",
        desc: "Please present your ticket at the gate."
    },
    {
        word: "pretty",
        pos: "副/形",
        ipa: "/ˈprɪti/",
        cn: "相当，颇；漂亮的",
        jp: "かなり、ずいぶん；きれいな",
        family: "prettily",
        tips: "托业听力与日常职场沟通核心副词用法：修饰形容词或副词，表示程度“相当/颇为”（pretty close / pretty well / pretty much / pretty far ahead of schedule）。",
        desc: "The report is pretty accurate."
    },
    {
        word: "principal",
        pos: "形/名",
        ipa: "/ˈprɪnsəpl/",
        cn: "主要的，最重要的；本金；校长",
        jp: "主要な、第一の；元金、元本；校長",
        family: "principally / principle",
        tips: "两大核心考点：1. 形容词修饰原因或资助者（principal reason / principal sponsor）；2. 金融借贷考“本金”（loan principal 与 interest 利息形成对比）；注意与 principle（原则）区分。",
        desc: "Tourism is the principal source of income."
    },
    {
        word: "produce",
        pos: "名/動",
        ipa: "/ˈprɑːduːs/ (n.), /prəˈduːs/ (v.)",
        cn: "农产品（不可数）；生产，制造；出示",
        jp: "農産物、青果物；生産する、製造する；提示する",
        family: "product / production / productive / producer / productivity",
        tips: "不可数名词熟词生义必考点（重音在前）：指蔬菜、水果等生鲜“农产品”（fresh organic produce / locally grown produce），不可加复数 -s。",
        desc: "The market sells fresh organic produce."
    },
    {
        word: "project",
        pos: "動/名",
        ipa: "/prəˈdʒekt/ (v.), /ˈprɑːdʒekt/ (n.)",
        cn: "预计，推算；投影；项目，工程",
        jp: "予測する、見積もる；投影する；企画、事業、プロジェクト",
        family: "projection / projected / projector",
        tips: "商业财报动词高阶考点（重音在后）：常以被动语态或分词形式考查对利润/销售额的“预测/推算”（projected revenue / sales are projected to rise）。",
        desc: "Sales are projected to grow next year."
    },
    {
        word: "quality",
        pos: "名/形",
        ipa: "/ˈkwɑːləti/",
        cn: "优质的，高品质的；质量，品质；特质",
        jp: "上質の、高級な；品質、質；特質",
        family: "qualitative / qualify / qualified / qualification",
        tips: "除表示“品质”外，托业常考其作前置定语形容词，表示“高品质的”（quality customer service / quality products / quality assurance 质量保证）。",
        desc: "We focus on high quality products."
    },
    {
        word: "reach",
        pos: "動/名",
        ipa: "/riːtʃ/",
        cn: "达成（协议）；联系到（某人）；达到（目标/金额）；波及范围",
        jp: "（合意に）達する；連絡を取る；（目標に）到達する；範囲",
        family: "reachable",
        tips: "三大核心搭配：1. 达成协议/妥协（reach an agreement / consensus / compromise）；2. 电话联系到某人（reach sb at this number）；3. 达到里程碑（reach a milestone）。",
        desc: "We reached an agreement yesterday."
    },
    {
        word: "realize",
        pos: "動",
        ipa: "/ˈriːəlaɪz/",
        cn: "认识到，意识到；实现（目标/潜能）；变现，实现（利润）",
        jp: "認識する、気づく；実現する；（利益などを）現金化する、生み出す",
        family: "realization / realizable / realized",
        tips: "财务与企业管理高阶考点：除“意识到”之外，常考实现商业潜力（realize its full potential）及资产变现、实现资本收益（realize a profit / gain）。",
        desc: "He realized his mistake early."
    },
    {
        word: "reception",
        pos: "名",
        ipa: "/rɪˈsepʃn/",
        cn: "欢迎会，招待会；前台，服务台；接收效果",
        jp: "歓迎会、レセプション；受付、フロント；受信状態",
        family: "receptionist / receptive / receive / recipient",
        tips: "商务场景双重考点：1. 欢迎宴会/联谊酒会（welcome reception / opening reception）；2. 酒店或企业大楼的“接待处/前台”（reception desk / area）。",
        desc: "The hotel holds a welcome reception tonight."
    },
    {
        word: "regard",
        pos: "動/名",
        ipa: "/rɪˈɡɑːrd/",
        cn: "认为，视为；注意，关注；问候（复数）",
        jp: "見なす、考える；配慮、関心；（手紙の結びの）敬具、よろしくという挨拶",
        family: "regarding / regardless / regardless of",
        tips: "短语考点极为密集：in/with regard to（关于/至于），regard A as B（把 A 视为 B），regardless of（不管/不顾），send one's regards（致以问候）。",
        desc: "I have a question in regard to the policy."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "present",
        category: "简单",
        stem: "Passengers must ________ their boarding passes and government-issued photo identification to the security officer.",
        options: ["present", "presentation", "reception", "pretty"],
        correct: "present",
        explanations: {
            guide: "情态动词后的动词原形与商务出差考点。情态动词 must 后面需要接动词原形，present photo identification 意为“出示身份证件”，选 present。",
            family: "present (v.出示/呈现) | presentation (n.报告/展示) | reception (n.招待会) | pretty (adv.相当)。",
            details: "must present their passes 属于机场与安检流程的标准表达。presentation 是名词，不能在情态动词 must 后充当谓语动词原形。",
            cn: "旅客必须向安检官员出示其登机牌和政府颁发的带照片身份证件。",
            jp: "乗客は、保安検査官に搭乗券と政府発行の写真付き身元証明書を提示（present）しなければなりません。"
        }
    },
    {
        id: 2,
        target: "reception",
        category: "简单",
        stem: "Visitors to the pharmaceutical research facility should check in at the front ________ desk upon arrival.",
        options: ["reception", "receptive", "project", "reach"],
        correct: "reception",
        explanations: {
            guide: "复合名词定语修饰。reception desk 是托业办公与酒店场景的高频专有名词，意为“前台/接待处”，选名词 reception。",
            family: "reception (n.前台/招待会) | receptive (adj.善于接受的) | project (n.项目) | reach (v.到达/联系)。",
            details: "the front reception desk 指大楼入口处的接待前台。receptive 是形容词，不能与 desk 构成表示特定办公区域的复合名词。",
            cn: "参访该制药研究设施的访客在抵达时应在前台接待处办理登记。",
            jp: "その製薬研究施設の来訪者は、到着時に正面の受付（reception）デスクでチェックインする必要があります。"
        }
    },
    {
        id: 3,
        target: "quality",
        category: "简单",
        stem: "The consumer electronics manufacturer is committed to maintaining high standards of product ________ and reliability.",
        options: ["quality", "qualify", "produce", "regard"],
        correct: "quality",
        explanations: {
            guide: "介词后的名词并列。介词 of 后面接名词短语，与 reliability（可靠性）由 and 并列，product quality 意为“产品质量”，选 quality。",
            family: "quality (n.质量/品质/adj.优质的) | qualify (v.符合资格) | produce (n.农产品) | regard (v./n.认为/关怀)。",
            details: "standards of product quality 意为产品质量标准。qualify 是动词，不能在介词 of 后面充当并列的名词中心词。",
            cn: "该消费电子制造商致力于保持高水准的产品质量和可靠性。",
            jp: "その家電メーカーは、製品の品質（quality）と信頼性の高い基準を維持することに尽力しています。"
        }
    },
    {
        id: 4,
        target: "reach",
        category: "简单",
        stem: "Corporate clients can ________ our technical support specialists by calling the toll-free hotline twenty-four hours a day.",
        options: ["reach", "reachable", "realize", "principal"],
        correct: "reach",
        explanations: {
            guide: "情态动词后的及物动词用法。情态动词 can 后面接动词原形，reach sb by phone 意为通过电话“联系到某人”，选 reach。",
            family: "reach (v.联系到/达成) | reachable (adj.可联系到的) | realize (v.意识到) | principal (adj.主要的)。",
            details: "reach specialists by calling 指通过致电联系到专家。reachable 是形容词，不能直接放在情态动词 can 后作谓语动词原形。",
            cn: "企业客户可拨打 24 小时免费热线电话联系我们的技术支持专家。",
            jp: "企業のクライアントは、24時間年中無休のフリーダイヤルに電話することで、当社の技術サポートスペシャリストに連絡を取る（reach）ことができます。"
        }
    },
    {
        id: 5,
        target: "produce",
        category: "简单",
        stem: "The upscale grocery market takes great pride in sourcing fresh, locally grown ________ directly from regional farms.",
        options: ["produce", "productive", "present", "pretty"],
        correct: "produce",
        explanations: {
            guide: "不可数名词与熟词生义。形容词短语 fresh, locally grown 后面需要名词作宾语，produce 作不可数名词意为“生鲜农产品”，选 produce。",
            family: "produce (n.农产品/v.生产) | productive (adj.富有成效的) | present (v.出示) | pretty (adv.相当)。",
            details: "fresh produce 是超市与零售语境的高频专有名词，指新鲜农果蔬。productive 是形容词，无法充当动词 sourcing 的宾语中心词。",
            cn: "这家高端生鲜超市非常自豪能够直接从本地区农场采购新鲜的当地农产品。",
            jp: "その高級食料品店は、地元の農場から新鮮な地元産の農産物（produce）を直接仕入れていることに大きな誇りを持っています。"
        }
    },
    {
        id: 6,
        target: "project",
        category: "简单",
        stem: "Ms. Alvarez was selected as the senior lead manager for the downtown commercial district revitalization ________.",
        options: ["project", "projection", "reception", "regard"],
        correct: "project",
        explanations: {
            guide: "复合名词定语结构。revitalization project 属于市政规划与企业业务核心表达，意为“振兴项目/改造工程”，选名词 project。",
            family: "project (n.项目/工程/v.预测) | projection (n.预测数据) | reception (n.招待会) | regard (n.关心)。",
            details: "a revitalization project 指一项振兴计划工程。projection 指财务或趋势预测数据，不符合作为市政具体执行项目的定义。",
            cn: "阿尔瓦雷斯女士被选为市中心商业区振兴项目的高级项目主管。",
            jp: "アルバレス氏は、ダウンタウンの商業地区活性化プロジェクト（project）のシニアリードマネージャーに選ばれました。"
        }
    },
    {
        id: 7,
        target: "principal",
        category: "中等",
        stem: "Sharp increases in international jet fuel costs were cited as the ________ cause of the airline's reduced profit margins.",
        options: ["principal", "principally", "produce", "reach"],
        correct: "principal",
        explanations: {
            guide: "定冠词后的定语形容词。the ________ cause 结构中需要形容词修饰名词 cause，principal 意为“主要的/首要的”，选 principal。",
            family: "principal (adj.主要的/n.本金) | principally (adv.主要地) | produce (n.农产品) | reach (v.达成)。",
            details: "the principal cause / reason 指最主要的原因。principally 为副词，不能直接修饰名词 cause 充当定语。",
            cn: "国际航空燃油成本的急剧攀升被指出是该航空公司利润率下降的主要原因。",
            jp: "国際的なジェット燃料費の高騰が、その航空会社の利益率低下の主な（principal）原因として挙げられました。"
        }
    },
    {
        id: 8,
        target: "realize",
        category: "中等",
        stem: "The regional marketing team failed to ________ how rapidly consumer preferences were shifting toward eco-friendly packaging.",
        options: ["realize", "realization", "projected", "quality"],
        correct: "realize",
        explanations: {
            guide: "动词不定式结构。failed to 后面必须接动词原形，后接 how 引导的宾语从句，realize 意为“认识到/意识到”，选 realize。",
            family: "realize (v.意识到/实现) | realization (n.认知/实现) | projected (adj.预计的) | quality (n.质量)。",
            details: "fail to realize 意为未能意识到。realization 是名词，不能跟在不定式符号 to 之后充当宾语从句的引导谓语动词。",
            cn: "该区域营销团队未能意识到消费者偏好正如此迅速地转向环保包装。",
            jp: "地域のマーケティングチームは、消費者の嗜好が環境に優しい包装へとどれほど急速に移行しているかを認識する（realize）ことができませんでした。"
        }
    },
    {
        id: 9,
        target: "regard",
        category: "中等",
        stem: "Please contact the human resources benefits administrator with ________ to inquiries about retirement plan contributions.",
        options: ["regard", "regardless", "reception", "principal"],
        correct: "regard",
        explanations: {
            guide: "固定介词短语搭配。with regard to 是托业极高频商务介词短语，意为“关于/至于”，等同于 concerning 或 regarding，选名词 regard。",
            family: "regard (n.关注/v.视为) | regardless (adv.不管) | reception (n.前台) | principal (adj.主要的)。",
            details: "with regard to sth 属于固定搭配。regardless 通常与 of 连用（regardless of），不能与前置介词 with 组合成合法介词短语。",
            cn: "有关退休金计划缴款方面的咨询，请联系人力资源福利管理员。",
            jp: "退職金制度への拠出に関する問い合わせに関して（with regard to）は、人事福利厚生管理者にお問い合わせください。"
        }
    },
    {
        id: 10,
        target: "present",
        category: "中等",
        stem: "Due to an urgent client negotiation in Chicago, the senior partner could not be ________ at yesterday's press conference.",
        options: ["present", "presentation", "pretty", "reachable"],
        correct: "present",
        explanations: {
            guide: "系表结构与形容词熟词生义。could not be 后接形容词作表语，be present at 意为“出席/在场”，选形容词 present。",
            family: "present (adj.出席的/在场的/v.出示) | presentation (n.报告) | pretty (adv.相当) | reachable (adj.可到达的)。",
            details: "be present at the conference 指亲自出席发布会。presentation 是名词，不能跟在系动词 be 后表达“人出席在场”的状态。",
            cn: "由于在芝加哥有一场紧急客户谈判，这位资深合伙人未能出席昨天的记者招待会。",
            jp: "シカゴでの緊急の顧客交渉のため、シニアパートナーは昨日の記者会見に出席（present）できませんでした。"
        }
    },
    {
        id: 11,
        target: "reach",
        category: "中等",
        stem: "After several days of intensive cross-border negotiations, both automotive firms finally ________ a comprehensive merger agreement.",
        options: ["reached", "reaching", "presented", "projected"],
        correct: "reached",
        explanations: {
            guide: "一般过去时谓语动词与固定搭配。句子缺少谓语动词，reach an agreement 意为“达成协议”，由副词 finally 修饰，选过去式 reached。",
            family: "reached (v-ed达成/到达) | reaching (现在分词) | presented (v-ed提出) | projected (v-ed预测)。",
            details: "reached an agreement 属于商业谈判经典短语。reaching 是分词，缺少助动词无法单独充当完整句子的谓语动词。",
            cn: "经过数天密集的跨国谈判，两家汽车制造企业终于达成了一项全面的合并协议。",
            jp: "数日間にわたる集中的な国境を越えた交渉の末、双方の自動車企業はついに包括的な合併合意に達し（reached）ました。"
        }
    },
    {
        id: 12,
        target: "project",
        category: "中等",
        stem: "According to the latest quarterly financial models, ________ earnings for the fiscal year will exceed initial analyst expectations.",
        options: ["projected", "project", "realized", "productive"],
        correct: "projected",
        explanations: {
            guide: "分词形容词作定语修饰名词。空格位于修饰 earnings（收益/利润）的位置，projected earnings 意为“预计收益/预期利润”，选分词形容词 projected。",
            family: "projected (adj.预计的/推算的) | project (n.项目/v.预测) | realized (adj.已实现的) | productive (adj.多产的)。",
            details: "projected earnings 是财务预测专有名词。project 是动词或名词原形，不能作定语修饰复数名词 earnings 表达“预期的”。",
            cn: "根据最新的季度财务模型，该会计年度的预期收益将超出分析师最初的预期。",
            jp: "最新の四半期財務モデルによると、その会計年度の予測（projected）収益はアナリストの当初の予想を上回る見込みです。"
        }
    },
    {
        id: 13,
        target: "produce",
        category: "困难",
        stem: "Because fresh agricultural ________ is highly perishable, logistics providers must implement rigorous temperature monitoring in transit.",
        options: ["produce", "production", "products", "producer"],
        correct: "produce",
        explanations: {
            guide: "不可数名词考点与生鲜专属词义。agricultural ________ 后面搭配单数系动词 is，农产品总称为不可数名词 produce，选 produce。",
            family: "produce (n.农产品/不可数) | production (n.生产/产量) | products (n.工业制成品/复数) | producer (n.生产商)。",
            details: "agricultural produce 指农作物/蔬菜水果总称，属不可数名词，谓语用 is。products 是复数名词不能与 is 搭配；production 指抽象生产行为。",
            cn: "由于新鲜农产品极易腐烂变质，物流供应商必须在运输过程中实施严格的温度监控。",
            jp: "新鮮な農産物（produce）は非常に傷みやすいため、物流業者は輸送中に厳格な温度監視を実施しなければなりません。"
        }
    },
    {
        id: 14,
        target: "principal",
        category: "困难",
        stem: "Under the restructured mortgage terms, the corporation is obligated to repay both accrued interest and a fraction of the outstanding ________.",
        options: ["principal", "principle", "projection", "qualification"],
        correct: "principal",
        explanations: {
            guide: "金融借贷术语与形近词辨析。与 accrued interest（累计利息）并列，指代借款的“本金”，必须使用名词 principal，选 principal。",
            family: "principal (n.本金/adj.主要的) | principle (n.原则/原理) | projection (n.预测) | qualification (n.资质)。",
            details: "loan principal 指贷款本金。principle 意为道德准则或科学原理（如 fundamental principle），绝对不可指代金融借贷本金。",
            cn: "根据重组后的抵押贷款条款，该企业有义务偿还累计利息以及未结清本金的一小部分。",
            jp: "再編された住宅ローン条件に基づき、その企業は未払い利息と未払いの元金（principal）の一部の両方を返済する義務があります。"
        }
    },
    {
        id: 15,
        target: "realize",
        category: "困难",
        stem: "By divesting unprofitable manufacturing operations overseas, the investment conglomerate ________ substantial capital gains this quarter.",
        options: ["realized", "realization", "presented", "regarded"],
        correct: "realized",
        explanations: {
            guide: "动词高阶金融熟词生义与时态。句子缺少谓语动词，realize a capital gain 是投资与财务核心术语，意为“实现资本利得/变现收益”，选过去式 realized。",
            family: "realized (v-ed变现/实现) | realization (n.变现/认识) | presented (v-ed提出) | regarded (v-ed视为)。",
            details: "realized capital gains 专指资产抛售后在账面上实际变现的利润。realization 是名词，不能在主语 conglomerate 之后担任核心动词。",
            cn: "通过剥离海外不盈利的制造业务，该投资企业集团在本季度实现了巨额资本收益。",
            jp: "不採算な海外製造事業を売却することにより、その投資コングロマリットは今四半期に多額のキャピタルゲインを実現し（realized）ました。"
        }
    },
    {
        id: 16,
        target: "regard",
        category: "困难",
        stem: "All regular employees may participate in the specialized technology workshop, ________ of their professional department or rank.",
        options: ["regardless", "regard", "regarding", "receptive"],
        correct: "regardless",
        explanations: {
            guide: "复合介词固定搭配与高阶让步。________ of 结构中，regardless of 是托业规章制度中极高频的短语，意为“无论/不管……”，选副词 regardless。",
            family: "regardless (adv.不顾/不管) | regard (n.关心/v.看待) | regarding (prep.关于) | receptive (adj.乐于接受的)。",
            details: "regardless of department or rank 意为不论部门和职级。regarding 是介词（关于），不能与 of 连用构成复合介词结构。",
            cn: "所有正式员工均可参加该专业技术研讨会，不论其所属专业部门或职级高低。",
            jp: "すべての正規従業員は、専門の部署や役職に関係なく（regardless of）、専門技術ワークショップに参加することができます。"
        }
    },
    {
        id: 17,
        target: "reception",
        category: "困难",
        stem: "The annual international aerospace summit will conclude tomorrow evening with an elegant networking ________ in the ballroom.",
        options: ["reception", "receptionist", "presentation", "qualification"],
        correct: "reception",
        explanations: {
            guide: "商务公关专属活动名词辨析。an elegant networking ________ 结构中，指供参会嘉宾社交交流的“冷餐招待会/酒会”，选名词 reception。",
            family: "reception (n.招待会/前台) | receptionist (n.前台接待员) | presentation (n.报告会) | qualification (n.资格)。",
            details: "a networking reception 指社交联谊酒会。receptionist 指接待人员个人，不能被形容词 elegant 修饰作为大会闭幕的社交活动。",
            cn: "年度国际航空航天峰会将于明晚在大宴会厅举行一场高雅的社交招待会后圆满落幕。",
            jp: "年次国際航空宇宙サミットは、明日の夜、大宴会場でのエレガントなネットワーキングレセプション（reception）をもって終了します。"
        }
    },
    {
        id: 18,
        target: "pretty",
        category: "困难",
        stem: "Despite unexpected regulatory inspections, the construction crew completed the bridge restoration ________ far ahead of schedule.",
        options: ["pretty", "prettily", "principally", "projected"],
        correct: "pretty",
        explanations: {
            guide: "程度副词修饰副词短语与固定习语。________ far ahead of schedule 结构中，pretty 作程度副词修饰副词 far，意为“相当/颇为提前”，选 pretty。",
            family: "pretty (adv.相当/十分/adj.漂亮的) | prettily (adv.漂亮地) | principally (adv.主要地) | projected (adj.预计的)。",
            details: "pretty far ahead of schedule 属于托业听力与阅读中表达进度的地道搭配。prettily 意为动作娇美地，语义完全错误；principally 是修饰动词原因的副词，不能修饰程度副词 far。",
            cn: "尽管遭遇了突如其来的监管检查，施工队依然相当大幅度地提前完成了大桥的修复工程。",
            jp: "予期せぬ規制検査にもかかわらず、建設クルーは予定よりかなり（pretty）早く橋の修復を完了しました。"
        }
    }
];