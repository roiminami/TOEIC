// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag151-160.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "quarter",
        pos: "名",
        ipa: "/ˈkwɔːrtər/",
        cn: "季度，四分之一",
        jp: "四半期、4分の1",
        family: "quarterly / quarters / quartered",
        tips: "财务报告与业绩评估场景的绝对高频词。商业上常指三个月组成的季度（如 fiscal quarter 财政季度）。其形容词/副词形式 quarterly（每季度的/每季度地）在阅读第五部分属于词性题核心考点。",
        desc: "Sales rose this quarter."
    },
    {
        word: "respond",
        pos: "動",
        ipa: "/rɪˈspɑːnd/",
        cn: "回复，响应，做出回应",
        jp: "返信する、対応する、反応する",
        family: "response / responsive / respondent / responsiveness",
        tips: "日常办公与客户服务场景的核心动词。标准用法为不及物动词搭配介词 to（respond to an email/complaint）。名词形式 response（回复/回应）在听力与阅读中极常见。",
        desc: "Please respond to me."
    },
    {
        word: "manufacturer",
        pos: "名",
        ipa: "/ˌmænjuˈfæktʃərər/",
        cn: "制造商，制造厂",
        jp: "製造業者、メーカー",
        family: "manufacture / manufacturing / manufactured",
        tips: "生产制造与供应链管理场景的基础名词。专指生产货物的企业或厂家。其动词形式 manufacture（制造）和动名词形式 manufacturing（制造业/生产的）也经常在商务公文中交互考查。",
        desc: "He is a manufacturer."
    },
    {
        word: "cause",
        pos: "動/名",
        ipa: "/kɔːz/",
        cn: "导致，引起；原因，起因",
        jp: "引き起こす、原因となる；原因、理由",
        family: "causal / causation / caused / causing",
        tips: "故障分析与危机公关中的高频动词。作动词时常接具体问题作宾语（如 cause a delay/disruption 导致延迟/中断）。作名词时常与 root 连用（root cause 根本原因）。",
        desc: "Smoking can cause fires."
    },
    {
        word: "device",
        pos: "名",
        ipa: "/dɪˈvaɪs/",
        cn: "设备，装置，仪器",
        jp: "装置、機器、デバイス",
        family: "devices / devise",
        tips: "办公自动化与技术支持场景的核心可数名词。通常指电子或机械设备（如 mobile device 移动设备，electronic device 电子装置）。注意不要与发音相似的动词 devise（设计/发明）混淆。",
        desc: "This device is useful."
    },
    {
        word: "warehouse",
        pos: "名/動",
        ipa: "/ˈwerhaʊs/",
        cn: "仓库，货栈；存入仓库",
        jp: "倉庫、物流センター；倉庫に保管する",
        family: "warehouses / warehousing",
        tips: "仓储物流与库存盘点场景的绝对高频名词。常指存放待出货商品的建筑实体。常见词组如 warehouse manager（仓库主管）或 inventory in the warehouse（仓库库存）。",
        desc: "Goods are in the warehouse."
    },
    {
        word: "contain",
        pos: "動",
        ipa: "/kənˈteɪn/",
        cn: "包含，容纳",
        jp: "含む、収容する",
        family: "container / containment / contained",
        tips: "产品说明、货物装箱及法律合同场景的高频及物动词。意为内部装有或包含某些成分、条款或货物。其名词形式 container（集装箱/容器）在物流场景中极常用。",
        desc: "Boxes contain books."
    },
    {
        word: "individual",
        pos: "名/形",
        ipa: "/ˌɪndɪˈvɪdʒuəl/",
        cn: "个人，个体；单独的，个人的",
        jp: "個人；個人の、個々の",
        family: "individually / individuality / individualism",
        tips: "人事管理与税务保单场景的核心双重词性词汇。作形容词时用于强调每一个独立的个体（如 individual performance 个人表现）；作名词指单独的人或员工。",
        desc: "Every individual can vote."
    },
    {
        word: "permit",
        pos: "名/動",
        ipa: "/ˈpɜːrmɪt/ (名) /pərˈmɪt/ (動)",
        cn: "许可证，执照；允许，准许",
        jp: "許可証、免許証；許可する",
        family: "permission / permissive / permissible / permitted",
        tips: "行政审批与施工安全场景的常考词。作名词时是可数名词，指具体的实体证件（如 parking permit 停车许可证，building permit 建筑许可证）。其派生名词 permission 则是不可数名词，表示抽象的许可准许。",
        desc: "You need a permit."
    },
    {
        word: "transfer",
        pos: "動/名",
        ipa: "/trænsˈfɜːr/ (動) /ˈtrænsfɜːr/ (名)",
        cn: "转移，转调，转账；调动，转让",
        jp: "転勤させる、移す、振り込む；転勤、移動、振込",
        family: "transference / transferable / transferred / transferring",
        tips: "人事变动与财务结算场景的核心高频词。作动词或名词皆可指员工部门调动（transfer to another department）或资金转账（wire transfer 电子汇款）。",
        desc: "Please transfer the funds."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "quarter",
        category: "简单",
        stem: "The company's profits increased significantly during the third ________ of the fiscal year.",
        options: ["quarter", "warehouse", "device", "subsidy"],
        correct: "quarter",
        explanations: {
            guide: "名词词义辨析。空格前有定冠词 the 和序数词 third（第三），且处于表示时间区段的介词短语中，需填入符合商业财年划分的单数可数名词。",
            family: "quarter (n.季度) | warehouse (n.仓库) | device (n.设备) | subsidy (n.补贴)。",
            details: "在财政年度（fiscal year）的语境下，结合 third（第三）可知此处指代的是“第三季度（third quarter）”。其他选项无法与序数词搭配表达特定财务周期。",
            cn: "公司利润在财政年度的第三季度有了显著增长。",
            jp: "会社の利益は、会計年度の第3四半期（quarter）に大幅に増加しました。"
        }
    },
    {
        id: 2,
        target: "respond",
        category: "简单",
        stem: "Employees are strictly required to ________ to urgent client emails within two hours.",
        options: ["respond", "cause", "contain", "proceed"],
        correct: "respond",
        explanations: {
            guide: "不及物动词与介词固定搭配辨析。分析句型结构，空格位于不定式符号 to 之后，需要填入一个能与后方介词 to 完美搭配的不及物动词原形。",
            family: "respond (v.回复/回应) | cause (v.导致) | contain (v.包含) | proceed (v.前进/继续)。",
            details: "能与介词 to 连用并针对“紧急客户邮件（urgent client emails）”发起动作的只能是 respond，构成 respond to...（回复……）的办公高频搭配。",
            cn: "员工被严格要求在两小时内回复紧急客户邮件。",
            jp: "従業員は、緊急のクライアントメールに対して2時間以内に返信（respond）することを厳格に求められています。"
        }
    },
    {
        id: 3,
        target: "manufacturer",
        category: "简单",
        stem: "The leading automobile ________ announced plans to build a new factory in Ohio next year.",
        options: ["manufacturer", "individual", "warehouse", "permit"],
        correct: "manufacturer",
        options: ["manufacturer", "individual", "warehouse", "permit"],
        correct: "manufacturer",
        explanations: {
            guide: "名词词义辨析。空格前面有行业定语 automobile（汽车），后续动作是宣布计划建造新工厂（build a new factory），判定缺少主语核心身份名词。",
            family: "manufacturer (n.制造商) | individual (n.个人) | warehouse (n.仓库) | permit (n.许可证)。",
            details: "能够建设新工厂并以“汽车（automobile）”作为前置修饰的商业主体必定是“汽车制造商（automobile manufacturer）”。",
            cn: "这家领先的汽车制造商宣布了明年在俄亥俄州建造一座新工厂的计划。",
            jp: "大手の自動車製造業者（manufacturer）は、来年オハイオ州に新しい工場を建設する計画を発表しました。"
        }
    },
    {
        id: 4,
        target: "device",
        category: "简单",
        stem: "Please remember to disconnect your electronic ________ before leaving the communal laboratory.",
        options: ["device", "quarter", "cause", "transfer"],
        correct: "device",
        explanations: {
            guide: "名词词义辨析。空格作为及物动词 disconnect（断开/切断电源）的直接宾语，前有形容词 electronic（电子的）修饰。",
            family: "device (n.设备/装置) | quarter (n.季度) | cause (n.原因) | transfer (n.转移)。",
            details: "在实验室（laboratory）环境离开前需要断开电源的物件通常是“电子设备（electronic device）”。其他词汇词义与句意完全不兼容。",
            cn: "在离开公共实验室之前，请记得切断您的电子设备的电源。",
            jp: "共同ラボを離れる前に、電子機器（device）の接続を切ることを忘れないでください。"
        }
    },
    {
        id: 5,
        target: "warehouse",
        category: "简单",
        stem: "Extra security cameras were recently installed outside the main ________ to protect the inventory.",
        options: ["warehouse", "permit", "individual", "cause"],
        correct: "warehouse",
        explanations: {
            guide: "特定商业场景名词辨析。空格前有定冠词 the 和形容词 main（主要的）修饰，后接不定式短语“为了保护库存（protect the inventory）”，提示此处为存储货物的地点名词。",
            family: "warehouse (n.仓库) | permit (n.许可证) | individual (n.个人) | cause (n.原因)。",
            details: "既然安装摄像头是为了保护“库存货物（inventory）”，那么该建筑实体必然是“仓库（warehouse）”。",
            cn: "最近，主仓库外安装了额外的监控摄像头，以保护库存安全。",
            jp: "在庫（inventory）を保護するため、最近、メインの倉庫（warehouse）の外側に立ち入り監視カメラが追加設置されました。"
        }
    },
    {
        id: 6,
        target: "contain",
        category: "简单",
        stem: "The large shipping crates ________ confidential documents that must be sorted immediately.",
        options: ["contain", "respond", "transfer", "cause"],
        correct: "contain",
        explanations: {
            guide: "及物动词词义辨析。分析句子结构，主语是复数名词 shipping crates（装运箱），后接复数名词机密文件作宾语，中间缺少谓语动词原形。",
            family: "contain (v.包含/装有) | respond (v.回复) | transfer (v.转移) | cause (v.导致)。",
            details: "装运箱（crates）与文件（documents）之间的物理关系最契合的是“包含/内部装有（contain）”。",
            cn: "这些大型装运箱里装有必须立即分类的机密文件。",
            jp: "その大きな輸送用木箱には、すぐに分類しなければならない機密書類が含まれて（contain / 入って）います。"
        }
    },
    {
        id: 7,
        target: "cause",
        category: "中等",
        stem: "An unexpected technical fault on the main grid ________ a severe disruption in daily operations.",
        options: ["caused", "responded", "permitted", "transferred"],
        correct: "caused",
        explanations: {
            guide: "及物动词词义与时态辨析。主语是技术故障（technical fault），宾语是严重运营中断（severe disruption），此句缺少过去时态的谓语动词来表达因果关系。",
            family: "caused (v.过去式/导致) | responded (v.过去式/回复) | permitted (v.过去式/允许) | transferred (v.过去式/转移)。",
            details: "主语“技术故障”是因，宾语“运营中断”是果，表示“导致/引起”需选用 caused。respond 是不及物动词，其他动词不符合语义逻辑。",
            cn: "主电网上一场意料之外的技术故障导致了日常运营的严重中断。",
            jp: "メイングリッドでの予期せぬ技術的障害が、日常業務に深刻な混乱を引き起こ（caused）しました。"
        }
    },
    {
        id: 8,
        target: "individual",
        category: "中等",
        stem: "Supervisors will meet with each ________ employee to discuss the quarterly performance incentives.",
        options: ["individual", "thorough", "diverse", "inclusive"],
        correct: "individual",
        explanations: {
            guide: "限定词修饰语与形容词辨析。空格位于限定词 each（每个）之后和单数可数名词 employee（员工）之前，需要填入起修饰作用的形容词。",
            family: "individual (adj.单独的/个体的) | thorough (adj.彻底的) | diverse (adj.多样化的) | inclusive (adj.包容的)。",
            details: "each individual employee 是商务职场沟通中的典型惯用短语，意为“每一位单独的员工/每位员工个体”。其他形容词不能与单数可数名词搭配出此语义。",
            cn: "主管将与每位员工单独面谈，讨论季度绩效奖励事宜。",
            jp: "スーパーバイザーは、四半期の業績インセンティブについて話し合うため、個々の（individual）従業員と面談する予定です。"
        }
    },
    {
        id: 9,
        target: "permit",
        category: "中等",
        stem: "Contractors must display a valid construction ________ before commencing any structural alterations.",
        options: ["permit", "quarter", "device", "registration"],
        correct: "permit",
        explanations: {
            guide: "特定商务行政场景名词辨析。动词为 display（出示/悬挂），前置定语为 construction（施工），需要填入表示官方证明文件的可数名词。",
            family: "permit (n.许可证/执照) | quarter (n.季度) | device (n.设备) | registration (n.登记/注册)。",
            details: "进行建筑结构改造（structural alterations）前，承包商必须出示合法的“施工许可证（construction permit）”。registration 侧重注册行为，通常不与施工进行这种实物执照搭配。",
            cn: "承包商在开始任何结构改造之前，必须出示有效的施工许可证。",
            jp: "請負業者は、構造変更工事を開始する前に、有効な建築許可証（permit）を提示しなければなりません。"
        }
    },
    {
        id: 10,
        target: "transfer",
        category: "中等",
        stem: "The logistics manager requested a ________ to the company's new satellite office in Chicago.",
        options: ["transfer", "manufacturer", "warehouse", "cause"],
        correct: "transfer",
        explanations: {
            guide: "职场行政场景名词辨析。空格前有不定冠词 a，后面接介词短语 to the satellite office（去卫星办公室），表明此动作为地点的变换。",
            family: "transfer (n.调动/转移) | manufacturer (n.制造商) | warehouse (n.仓库) | cause (n.原因)。",
            details: "由于目的地是公司在芝加哥设立的“分部/卫星办公室”，经理申请的必然是内部岗位的“调动/转调（transfer）”。",
            cn: "物流经理申请调往公司在芝加哥新设立的卫星办公室。",
            jp: "物流マネージャーは、シカゴにある会社の新しいサテライトオフィスへの転勤（transfer）を申請しました。"
        }
    },
    {
        id: 11,
        target: "device",
        category: "中等",
        stem: "The maintenance crew is responsible for testing all fire safety ________ throughout the facility.",
        options: ["devices", "quarters", "manufacturers", "sources"],
        correct: "devices",
        explanations: {
            guide: "复合名词复数形辨析。空格前有限定词 all，修饰语为 fire safety（消防安全），需填入复数可数名词作 testing 的宾语。",
            family: "devices (n.复数设备) | quarters (n.复数季度) | manufacturers (n.复数制造商) | sources (n.复数来源)。",
            details: "消防安全设施（如灭火器、烟雾报警器等）在商业楼宇行政管理中被统称为“消防安全设备/装置（fire safety devices）”。",
            cn: "维护团队负责对整个设施内的所有消防安全装置进行测试。",
            jp: "メンテナンスチームは、施設内のすべての消防安全設備（devices）のテストを担当しています。"
        }
    },
    {
        id: 12,
        target: "warehouse",
        category: "中等",
        stem: "The retail chain utilizes a massive ________ network to streamline its nationwide product distribution.",
        options: ["warehouse", "individual", "previous", "structural"],
        correct: "warehouse",
        explanations: {
            guide: "名词作定语（复合名词）辨析。空格用于修饰后面的名词 network（网络），且与产品分销（product distribution）的供应链逻辑挂钩。",
            family: "warehouse (n.仓库) | individual (adj.个人的) | previous (adj.先前的) | structural (adj.结构的)。",
            details: "为了使全国范围内的商品配送顺畅，零售连锁店需要利用庞大的“仓储网络（warehouse network）”。此处名词 warehouse 充当前置定语修饰 network。",
            cn: "该零售连锁店利用庞大的仓储网络来优化其全国范围内的产品分销渠道。",
            jp: "その小売チェーンは、全国的な製品配送を効率化するために、大規模な倉庫（warehouse）ネットワークを活用しています。"
        }
    },
    {
        id: 13,
        target: "quarter",
        category: "困难",
        stem: "The executive board reviews the ________ financial summaries to determine the discretionary spending limits.",
        options: ["quarterly", "quarter", "quarters", "quartering"],
        correct: "quarterly",
        explanations: {
            guide: "词性判定与特定商业短语修饰语。空格位于定冠词 the 和名词短语 financial summaries 之间，需要填入形容词作定语。",
            family: "quarterly (adj.每季度的) | quarter (n.季度) | quarters (n.复数季度) | quartering (n.四等分)。",
            details: "board 审阅的往往是具有周期性的财务摘要。quarterly 在此作为形容词，构成 quarterly financial summaries（季度财务摘要），符合企业定期复盘的固定商业公文搭配。",
            cn: "执行董事会审阅季度财务摘要，以确定自主支配开支的限额。",
            jp: "執行役員会は、裁量的支出の制限を決定するために、四半期ごと（quarterly）の財務サマリーを評価します。"
        }
    },
    {
        id: 14,
        target: "respond",
        category: "困难",
        stem: "The tech support team received public praise for its prompt and helpful ________ to system glitches.",
        options: ["responses", "respond", "responsive", "responsively"],
        correct: "responses",
        explanations: {
            guide: "词性判定与单复数语境。空格前有物主代词 its 以及两个并列形容词 prompt（迅速的）和 helpful（有帮助的），此处缺少名词作介词 for 的核心宾语。",
            family: "responses (n.复数回复/回应) | respond (v.回复) | responsive (adj.反应敏锐的) | responsively (adv.响应地)。",
            details: "分析结构可知此处应填名词。结合后方介词 to system glitches（对系统故障），表示做出的具体回应行为，应选名词复数形式 responses。这构成了对各类故障的多次“回应”。",
            cn: "技术支持团队因其对系统故障做出的迅速且有建设性的回应而赢得了公开赞誉。",
            jp: "テクニカルサポートチームは、システムの不具合に対する迅速かつ有益な対応（responses）で公に称賛されました。"
        }
    },
    {
        id: 15,
        target: "manufacturer",
        category: "困难",
        stem: "Optimizing the automotive ________ process allowed the firm to reduce production expenses significantly.",
        options: ["manufacturing", "manufacture", "manufacturer", "manufactured"],
        correct: "manufacturing",
        explanations: {
            guide: "名词词族及复合名词定语辨析。空格位于形容词 automotive（汽车的）和核心名词 process（流程/工序）之间，需填入充当定语的名词性成分。",
            family: "manufacturing (n.制造业/生产过程) | manufacture (v.制造) | manufacturer (n.制造商) | manufactured (adj.制造的)。",
            details: "此处表示“优化制造/生产流程（manufacturing process）”。虽然 manufacture 也有名词意，但专指具体的工业生产品门类时，表示“生产制造过程”标准术语一律使用动名词形态的 manufacturing。",
            cn: "优化汽车制造流程使该公司大幅降低了生产费用。",
            jp: "自動車製造（manufacturing）プロセスの最適化により、同社は生産コストを大幅に削減することができました。"
        }
    },
    {
        id: 16,
        target: "individual",
        category: "困难",
        stem: "Year-end bonuses will be distributed ________ based on each manager's total focus log metrics.",
        options: ["individually", "individual", "individuality", "individualized"],
        correct: "individually",
        explanations: {
            guide: "谓语动词后的副词修饰语判定。句子主谓结构完整（bonuses will be distributed），空格用于修饰被动语态动词短语的分配方式，需填入状态副词。",
            family: "individually (adv.单独地/逐个地) | individual (adj./n.个人的) | individuality (n.个性) | individualized (adj.个性化的)。",
            details: "根据后文“基于每位经理的总专注日志指标（based on each manager's...）”，奖金将被“单独地/分别地（individually）”发放到个人。其他词性不能充当状语来修饰动词 distributed。",
            cn: "年终奖金将根据每位经理的专注日志总指标进行单独核算与发放。",
            jp: "年末ボーナスは、各マネージャーの集中ログの総メトリクスに基づいて、個別に（individually）支給されます。"
        }
    },
    {
        id: 17,
        target: "permit",
        category: "困难",
        stem: "The structural renovation cannot proceed until written ________ is granted by the local council.",
        options: ["permission", "permit", "permissible", "permitting"],
        correct: "permission",
        explanations: {
            guide: "近义名词及可数/不可数限制判定。空格在形容词 written（书面的）之后，充当 until 引导的条件从句中的主语，且谓语动词为单数形式的 is granted。",
            family: "permission (n.不可数/允许) | permit (n.可数/许可证) | permissible (adj.可允许的) | permitting (n.起主导作用的)。",
            details: "written permission 意为“书面许可（抽象概念，不可数）”，而 written permit 指“书面许可证（实体物，可数）”。因为空格前没有任何冠词（如 a written permit），且谓语是单数 is，故必须填入不可数名词 permission。这是托业考试辨析可数与不可数的经典杀手题。",
            cn: "在获得地方委员会的书面许可之前，结构翻修工程无法进行。",
            jp: "地方議会（local council）による書面での許可（permission）が下りるまで、構造改修工事を進めることはできません。"
        }
    },
    {
        id: 18,
        target: "transfer",
        category: "困难",
        stem: "Management officially confirmed that the software license is fully ________ to any corporate subsidiary.",
        options: ["transferable", "transfer", "transferred", "transference"],
        correct: "transferable",
        explanations: {
            guide: "主系表结构中的表语形容词判定。空格位于系动词 is 和程度副词 fully 之后，用于修饰主语 software license（软件授权），需填入形容词后缀的派生词。",
            family: "transferable (adj.可转让的/可转移的) | transfer (v./n.转让) | transferred (v.过去式) | transference (n.移情/转让)。",
            details: "软件授权（license）具备的属性是“可转让给任何子公司（fully transferable to any corporate subsidiary）”。-able 后缀代表具备某种能力，完美充当句子的表语。",
            cn: "管理层正式确认，该软件许可完全可以转让给任何企业子公司。",
            jp: "経営陣は、そのソフトウェアライセンスがどの子会社（subsidiary）に対しても完全に譲渡可能（transferable）であることを正式に発表しました。"
        }
    }
];