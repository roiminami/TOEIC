// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag111-120 Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "urban planning",
        pos: "名",
        ipa: "/ˈɜːrbən ˈplænɪŋ/",
        cn: "城市规划",
        jp: "都市計画",
        family: "urban / planner",
        tips: "市政工程、土地开发与公共建设高频复合名词。指对城市土地利用、交通系统及公共设施的整体设计。核心搭配：urban planning department（城市规划部门）、degree in urban planning（城市规划学位）。",
        desc: "She studied urban planning."
    },
    {
        word: "contractor",
        pos: "名",
        ipa: "/ˈkɑːntræktər/",
        cn: "承包商，承包人",
        jp: "請負業者、建設業者",
        family: "contract / contractual",
        tips: "建筑工程、项目外包及设施维修核心人称名词。由动词/名词 contract 派生。核心搭配：independent contractor（独立承包商）、hire a contractor（聘请承包商）、general contractor（总承包商）。",
        desc: "The contractor finished the job."
    },
    {
        word: "paleontologist",
        pos: "名",
        ipa: "/ˌpeɪliənˈtɑːlədʒɪst/",
        cn: "古生物学家",
        jp: "古生物学者",
        family: "paleontology / paleontological",
        tips: "科普文章、博物馆展览及学术发现高频人称名词。指研究古生物化石的专家。核心搭配：lead paleontologist（首席古生物学家）、a team of paleontologists（古生物专家团队）。",
        desc: "The paleontologist found a fossil."
    },
    {
        word: "bricks",
        pos: "名",
        ipa: "/brɪks/",
        cn: "砖，砖块",
        jp: "レンガ",
        family: "brick / brickwork",
        tips: "建筑材料与听力 Part 1（图片题）高频名词。单数形式为 brick。常见搭配：red bricks（红砖）、stacking bricks（堆放砖头）、brick wall（砖墙）。",
        desc: "The house is built of bricks."
    },
    {
        word: "obstructions",
        pos: "名",
        ipa: "/əbˈstrʌkʃnz/",
        cn: "障碍物，阻碍，堵塞",
        jp: "障碍物、妨害、閉塞",
        family: "obstruct / obstructive",
        tips: "道路安全、航道通告及设施维保高频复数名词。指阻碍交通或视线的物体。核心搭配：remove obstructions（清除障碍物）、road obstructions（道路障碍物）。来动词 obstruct。",
        desc: "Clear any obstructions from the aisle."
    },
    {
        word: "consecutive",
        pos: "形",
        ipa: "/kənˈsekjətɪv/",
        cn: "连续的，连贯的",
        jp: "連続した、引き続いての",
        family: "consecutively / consecutiveness",
        tips: "财报分析、销售业绩及连胜纪录高频形容词。强调时间或顺序上的毫无间断。核心搭配：consecutive quarters（连续几个季度）、for three consecutive years（连续三年）。",
        desc: "Sales grew for five consecutive months."
    },
    {
        word: "preliminary",
        pos: "形/名",
        ipa: "/prɪˈlɪmɪneri/",
        cn: "初步的，预备的；预备动作",
        jp: "予備の、初歩の；準備",
        family: "preliminaries / preliminarily",
        tips: "项目规划、财务评估及初步调查极高频形容词。核心搭配：preliminary report（初步报告）、preliminary findings（初步调查结果）、preliminary budget（初步预算）。",
        desc: "Here is the preliminary report."
    },
    {
        word: "methodical",
        pos: "形",
        ipa: "/məˈθɑːdɪkl/",
        cn: "有条理的，井井有条的，有系统的",
        jp: "整然とした、体系的な、幾帳面な",
        family: "method / methodically",
        tips: "工作态度、质量把控及研究方法高频形容词。强调做事有方法、按部就班。核心搭配：methodical approach（有条不紊的方法）、methodical worker（做事有条理的员工）。",
        desc: "He took a methodical approach."
    },
    {
        word: "closure",
        pos: "名",
        ipa: "/ˈkloʊʒər/",
        cn: "关闭，停业，封闭",
        jp: "閉鎖、休止、通行止め",
        family: "close / closed",
        tips: "道路封闭、工厂停业及维修通知高频名词。核心搭配：road closure（道路封闭）、temporary closure（临时关闭）、factory closure（工厂关停）。",
        desc: "Expect delays due to road closure."
    },
    {
        word: "complexity",
        pos: "名",
        ipa: "/kəmˈpleksəti/",
        cn: "复杂性，错综复杂",
        jp: "複雑さ、複雑性",
        family: "complex / complexities",
        tips: "项目管理、软件系统及法律条文高频名词。来形容词 complex。核心搭配：complexity of the project（项目的复杂性）、add to the complexity（增加了复杂性）。",
        desc: "We must reduce system complexity."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "urban planning",
        category: "简单",
        stem: "The municipal government hired a specialist in ________ to redesign the downtown transportation network.",
        options: ["urban planning", "contractor", "paleontologist", "obstructions"],
        correct: "urban planning",
        explanations: {
            guide: "名词短语辨析。作为介词 in 的宾语，结合后文“重新设计市中心交通网络”，选 urban planning（城市规划）。",
            family: "urban planning (n.城市规划) | contractor (n.承包商) | paleontologist (n.古生物学家) | obstructions (n.障碍物)。",
            details: "specialist in urban planning 意为“城市规划专家”，属于市政建设与公共管理高频短语。",
            cn: "市政当局聘请了一位城市规划专家来重新设计市中心交通网络。",
            jp: "地方政府は都心の交通ネットワークを再設計するため、都市計画（urban planning）の専門家を雇いました。"
        }
    },
    {
        id: 2,
        target: "closure",
        category: "简单",
        stem: "Drivers should expect significant delays today due to the temporary ________ of Main Street for repairs.",
        options: ["closure", "complexity", "preliminary", "consecutive"],
        correct: "closure",
        explanations: {
            guide: "名词词义辨析。由介词 due to（由于）和形容词 temporary（临时的）引导，结合道路施工和车辆延误的语境，选 closure（封闭）。",
            family: "closure (n.封闭/关闭) | complexity (n.复杂性) | preliminary (adj.初步的) | consecutive (adj.连续的)。",
            details: "temporary closure of a street 意为“街道的临时封闭”，属于交通告示与公共广播的标准用语。",
            cn: "由于主街因维修临时封闭，司机们今天预计会出现严重延误。",
            jp: "修理によるメインストリートの一時通行止め（closure）のため、ドライバーは本日大幅な遅延を予想してください。"
        }
    },
    {
        id: 3,
        target: "contractor",
        category: "简单",
        stem: "The building owner selected an independent ________ to oversee the renovation of the lobby.",
        options: ["contractor", "paleontologist", "urban planning", "bricks"],
        correct: "contractor",
        explanations: {
            guide: "名词词义辨析。作 selected 的宾语，由形容词 independent 修饰，结合后文“监督大堂翻修工程”，选指代建筑施工方的 contractor（承包商）。",
            family: "contractor (n.承包商) | paleontologist (n.古生物学家) | urban planning (n.城市规划) | bricks (n.砖块)。",
            details: "independent contractor（独立承包商）属于工程外包与建筑施工场景的高频人称名词。",
            cn: "业主选择了一家独立的承包商来监督大堂的翻修工程。",
            jp: "ビルの所有者は、ロビーの改修工事を監督するために独立した請負業者（contractor）を選定しました。"
        }
    },
    {
        id: 4,
        target: "preliminary",
        category: "简单",
        stem: "The finance committee released its ________ budget proposal for public review before the final vote.",
        options: ["preliminary", "methodical", "consecutive", "obstructions"],
        correct: "preliminary",
        explanations: {
            guide: "形容词词义辨析。修饰预算提案（budget proposal），结合后半句“在最终投票前供公众审议”，选 preliminary（初步的/预备的）。",
            family: "preliminary (adj.初步的) | methodical (adj.有条理的) | consecutive (adj.连续的) | obstructions (n.障碍物)。",
            details: "preliminary budget proposal 意为“初步预算提案”，属于财务审查与行政公示的标准搭配。",
            cn: "财务委员会在最终投票前公布了其初步预算提案，供公众审议。",
            jp: "財務委員会は、最終投票の前に一般公開のための予備（preliminary）予算案を発表しました。"
        }
    },
    {
        id: 5,
        target: "obstructions",
        category: "简单",
        stem: "Safety inspectors requested the immediate removal of all ________ blocking the emergency exit doors.",
        options: ["obstructions", "bricks", "complexity", "urban planning"],
        correct: "obstructions",
        explanations: {
            guide: "名词词义辨析。作 removal of 的宾语，结合后文“阻挡紧急出口通道”，选 obstructions（障碍物）。",
            family: "obstructions (n.障碍物) | bricks (n.砖块) | complexity (n.复杂性) | urban planning (n.城市规划)。",
            details: "remove obstructions 意为“清除障碍物”，是消防安全演习与合规检查中的核心短语。",
            cn: "安全检查员要求立即清除阻挡紧急出口门的所有障碍物。",
            jp: "安全検査官は、非常出口のドアを塞いでいるすべての障害物（obstructions）を直ちに撤去するよう要求しました。"
        }
    },
    {
        id: 6,
        target: "bricks",
        category: "简单",
        stem: "Construction workers spent the afternoon stacking red ________ near the foundation of the new facility.",
        options: ["bricks", "contractor", "paleontologist", "closure"],
        correct: "bricks",
        explanations: {
            guide: "名词词义辨析。作 stacking（堆放）的宾语，由形容词 red 修饰，结合建筑工地基建语境，选 bricks（砖块）。",
            family: "bricks (n.砖块) | contractor (n.承包商) | paleontologist (n.古生物学家) | closure (n.关闭)。",
            details: "stacking red bricks 意为“堆放红砖”，属于建筑施工及听力 Part 1 图片描绘高频短语。",
            cn: "建筑工人们整个下午都在新设施的地基附近堆放红砖。",
            jp: "建設作業員たちは午後、新しい施設の基礎の近くに赤いレンガ（bricks）を積み上げて過ごしました。"
        }
    },
    {
        id: 7,
        target: "consecutive",
        category: "中等",
        stem: "The retail corporation reported profit growth for four ________ quarters despite tough market conditions.",
        options: ["consecutive", "preliminary", "methodical", "complexity"],
        correct: "consecutive",
        explanations: {
            guide: "形容词修饰名词。修饰复数名词 quarters（季度），表达“连续四个季度”，选 consecutive（连续的）。",
            family: "consecutive (adj.连续的) | preliminary (adj.初步的) | methodical (adj.有条理的) | complexity (n.复杂性)。",
            details: "consecutive quarters 意为“连续几季度”，是财报业绩汇报中的核心固定用法。",
            cn: "尽管市场环境艰难，该零售公司仍报告连续四个季度实现利润增长。",
            jp: "厳しい市場条件にもかかわらず、その小売り大手は4四半期連続（consecutive）の利益成長を報告しました。"
        }
    },
    {
        id: 8,
        target: "methodical",
        category: "中等",
        stem: "Thanks to her ________ approach to auditing, every financial error was identified and corrected.",
        options: ["methodical", "consecutive", "preliminary", "obstructions"],
        correct: "methodical",
        explanations: {
            guide: "形容词修饰名词。修饰名词 approach（方法），结合后半句“所有财务错误均被识别并纠正”，表达其审计工作“有条不紊的”，选 methodical。",
            family: "methodical (adj.有条理的/严谨的) | consecutive (adj.连续的) | preliminary (adj.初步的) | obstructions (n.障碍物)。",
            details: "a methodical approach 意为“条理分明/井然有序的方法”，常用于评价员工严谨的工作风格。",
            cn: "多亏了她有条不紊的审计方法，每一个财务错误都被识别并纠正了。",
            jp: "彼女の整然とした（methodical）監査アプローチのおかげで、すべての財務上のエラーが特定され修正されました。"
        }
    },
    {
        id: 9,
        target: "complexity",
        category: "中等",
        stem: "The software installation took longer than expected due to the extreme ________ of the network system.",
        options: ["complexity", "closure", "contractor", "urban planning"],
        correct: "complexity",
        explanations: {
            guide: "名词词义辨析。位于形容词 extreme（极度的）之后，作介词 due to 的宾语，结合后文网络系统的特性，选 complexity（复杂性）。",
            family: "complexity (n.复杂性) | closure (n.关闭) | contractor (n.承包商) | urban planning (n.城市规划)。",
            details: "the complexity of the system 意为“系统的复杂性”，常出现在 IT 系统部署与维护报告中。",
            cn: "由于网络系统极度复杂，软件安装耗费的时间比预期更长。",
            jp: "ネットワークシステムの極度の複雑さ（complexity）のため、ソフトウェアのインストールに予想以上の時間がかかりました。"
        }
    },
    {
        id: 10,
        target: "paleontologist",
        category: "中等",
        stem: "The museum invited a renowned ________ to deliver a guest lecture on prehistoric fossil discoveries.",
        options: ["paleontologist", "contractor", "urban planning", "obstructions"],
        correct: "paleontologist",
        explanations: {
            guide: "名词词义辨析。作 invited 的宾语，由形容词 renowned（著名的）修饰，结合后文“史前化石发现的讲座”，选 paleontologist（古生物学家）。",
            family: "paleontologist (n.古生物学家) | contractor (n.承包商) | urban planning (n.城市规划) | obstructions (n.障碍物)。",
            details: "deliver a lecture on fossil discoveries 逻辑呼应 paleontologist 的专业领域。",
            cn: "博物馆邀请了一位著名的古生物学家就史前化石发现举办客座讲座。",
            jp: "博物館は、先史時代の化石の発見に関する特別講義を行うため、著名な古生物学者（paleontologist）を招きました。"
        }
    },
    {
        id: 11,
        target: "contractor",
        category: "中等",
        stem: "The firm signed a ________ agreement with the supplier to ensure fixed prices for all raw materials.",
        options: ["contractual", "contractor", "contract", "consecutive"],
        correct: "contractual",
        explanations: {
            guide: "形容词派生与名词修饰。修饰名词 agreement（协议），需要填入派生形容词 contractual（合同上的/契约上的）。",
            family: "contractual (adj.合同的) | contractor (n.承包商) | contract (n./v.合同) | consecutive (adj.连续的)。",
            details: "contractual agreement 意为“具有法律效力的合同协议”。contractor 是人称名词，不能修饰 agreement。",
            cn: "该公司与供应商签署了一份具有合同约束力的协议，以确保所有原材料的价格固定。",
            jp: "同社は、すべての原材料の価格を固定するために、供給業者と契約上の（contractual）合意に署名しました。"
        }
    },
    {
        id: 12,
        target: "consecutive",
        category: "中等",
        stem: "The team worked ________ for twelve hours to restore power to the affected district after the storm.",
        options: ["consecutively", "consecutive", "preliminary", "methodical"],
        correct: "consecutively",
        explanations: {
            guide: "副词修饰动词。位于动词 worked 之后，作状语修饰动词，表达“连续不断地”工作了12小时，选副词 consecutively。",
            family: "consecutively (adv.连续地) | consecutive (adj.连续的) | preliminary (adj.初步的) | methodical (adj.有条理的)。",
            details: "worked consecutively for 12 hours 表示“连续不间断地工作了12个小时”，用于修饰动作持续的时间状态。",
            cn: "风暴过后，团队连续工作了十二个小时，为受影响的地区恢复了供电。",
            jp: "嵐の後、チームは被災地区の電力を復旧させるため、12時間連続で（consecutively）働きました。"
        }
    },
    {
        id: 13,
        target: "preliminary",
        category: "困难",
        stem: "After completing the initial tests, the laboratory staff will publish their ________ in next month's journal.",
        options: ["preliminaries", "preliminary", "preliminarily", "complexity"],
        correct: "preliminaries",
        explanations: {
            guide: "名词派生复数考点。位于物主代词 their 之后，作 publish 的宾语，需要填入复数名词形式 preliminaries（预备步骤/初步结果/预备事项）。",
            family: "preliminaries (n.初步事项/预备阶段/复数) | preliminary (adj.初步的) | preliminarily (adv.预备地) | complexity (n.复杂性)。",
            details: "their preliminaries 在学术出版语境中指代“初步研究事项/预备阶段成果”。preliminary 为形容词，不能直接作 publish 的宾语。",
            cn: "在完成初始测试后，实验室工作人员将在下个月的期刊上发表他们的初步成果。",
            jp: "初期テストを完了した後、研究室のスタッフは来月の雑誌に予備的成果（preliminaries）を掲載する予定です。"
        }
    },
    {
        id: 14,
        target: "methodical",
        category: "困难",
        stem: "The quality control manager checked every single component ________ to guarantee zero defects.",
        options: ["methodically", "methodical", "method", "preliminary"],
        correct: "methodically",
        explanations: {
            guide: "副词修饰动词考点。位于句末，修饰动词短语 checked every single component，表达“有条不紊地/严谨地”检查，选副词 methodically。",
            family: "methodically (adv.有条不紊地) | methodical (adj.有条理的) | method (n.方法) | preliminary (adj.初步的)。",
            details: "check methodically 表示“井井有条地/有系统地检查”，用于强调品质检测的严谨度。",
            cn: "质量控制经理井井有条地检查了每一个部件，以确保零缺陷。",
            jp: "品質管理マネージャーは、欠陥ゼロを保証するためにすべての部品を整然と（methodically）点検しました。"
        }
    },
    {
        id: 15,
        target: "obstructions",
        category: "困难",
        stem: "The fallen trees continue to ________ the main railway track, causing significant delays for commuters.",
        options: ["obstruct", "obstructions", "obstructive", "closure"],
        correct: "obstruct",
        explanations: {
            guide: "动词派生与不定式结构。位于情态/助动词 continue to 之后，需要填入动词原形 obstruct（阻碍/堵塞）。",
            family: "obstruct (v.阻碍/堵塞) | obstructions (n.障碍物) | obstructive (adj.阻碍的) | closure (n.关闭)。",
            details: "continue to obstruct... 意为“继续堵塞……”。obstructions 是名词，不能在 to 后作动词原形。",
            cn: "倒下的树木继续堵塞主铁路线，给通勤者造成了严重延误。",
            jp: "倒木が主要な線路を塞ぎ（obstruct）続けており、通勤者に大幅な遅れを引き起こしています。"
        }
    },
    {
        id: 16,
        target: "complexity",
        category: "困难",
        stem: "Consultants were hired to simplify the highly ________ tax structure facing cross-border enterprises.",
        options: ["complex", "complexity", "complexities", "methodical"],
        correct: "complex",
        explanations: {
            guide: "形容词派生与修饰考点。位于副词 highly 之后，修饰名词短语 tax structure，需要填入形容词 complex（复杂的）。",
            family: "complex (adj.复杂的) | complexity (n.复杂性) | complexities (n.复杂之处/复数) | methodical (adj.有条理的)。",
            details: "highly complex tax structure 意为“高度复杂的税务结构”。complexity 是名词，不能在此直接被副词 highly 修饰。",
            cn: "顾问被聘用来简化跨国企业所面临的高度复杂的税务结构。",
            jp: "クロスボーダー企業が直面する非常に複雑な（complex）税務構造を簡素化するために、コンサルタントが雇用されました。"
        }
    },
    {
        id: 17,
        target: "closure",
        category: "困难",
        stem: "Management announced that the plant will ________ down operations by the end of the current fiscal year.",
        options: ["close", "closure", "closed", "consecutive"],
        correct: "close",
        explanations: {
            guide: "动词与名词派生辨析。位于助动词 will 之后，与 down 搭配构成短语动词 close down（关闭/停业），选动词原形 close。",
            family: "close (v.关闭/原形) | closure (n.关闭) | closed (adj.已关闭的) | consecutive (adj.连续的)。",
            details: "will close down operations 意为“将关停业务”。closure 为名词，不能直接接在情态助动词 will 之后。",
            cn: "管理层宣布该工厂将在本财政年度结束前关停业务。",
            jp: "経営陣は、本年度末までに工場が操業を停止（close）すると発表しました。"
        }
    },
    {
        id: 18,
        target: "paleontologist",
        category: "困难",
        stem: "The university's department of ________ announced a major breakthrough in classifying ancient marine organisms.",
        options: ["paleontology", "paleontologist", "preliminary", "urban planning"],
        correct: "paleontology",
        explanations: {
            guide: "学科名词与人称名词辨析。作为介词 of 的宾语，位于 department 之后，指代大学的“古生物学系”，选学科名词 paleontology。",
            family: "paleontology (n.古生物学) | paleontologist (n.古生物学家) | preliminary (adj.初步的) | urban planning (n.城市规划)。",
            details: "department of paleontology 意为“古生物学系”。paleontologist 指学者个人，不能用作系/学科部门名称。",
            cn: "该大学的古生物学系宣布在古代海洋生物分类方面取得重大突破。",
            jp: "同大学の古生物学（paleontology）学科は、古代海洋生物の分類における大きな飛躍を発表しました。"
        }
    }
];