// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag71-80 Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "hotel amenities",
        pos: "名",
        ipa: "/hoʊˈtel əˈmenətiːz/",
        cn: "酒店便利设施，酒店服务设施",
        jp: "ホテルのアメニティ、ホテルの設備",
        family: "amenity / amenities",
        tips: "旅游与酒店住宿常考。指酒店提供的泳池、健身房、免费Wi-Fi、洗漱用品等各种便利设施。常考搭配：complimentary hotel amenities（免费酒店设施）。",
        desc: "The hotel amenities are great."
    },
    {
        word: "veterinarian",
        pos: "名",
        ipa: "/ˌvetərɪˈneriən/",
        cn: "兽医",
        jp: "獣医師",
        family: "vet / veterinary",
        tips: "职场角色与宠物服务诊所场景常考。口语和日常简写常为 vet。派生形容词 veterinary（兽医的），如 veterinary clinic（兽医诊所）。",
        desc: "She is a skilled veterinarian."
    },
    {
        word: "intermission",
        pos: "名",
        ipa: "/ˌɪntərˈmɪʃn/",
        cn: "幕间休息，中场休息",
        jp: "（劇やコンサートの）幕間、休憩時間",
        family: "intermissions",
        tips: "剧场、音乐会与演出广播高频词。指演出或长途活动中途的休息时间。常见短语：15-minute intermission（15分钟中场休息）、during the intermission（在幕间休息期间）。",
        desc: "There is a brief intermission."
    },
    {
        word: "thrilled",
        pos: "形",
        ipa: "/θrɪld/",
        cn: "非常兴奋的，极为高兴的",
        jp: "とてもワクワクした、非常に感激した",
        family: "thrill / thrilling",
        tips: "情绪与职场表态高频形容词。常考结构：be thrilled to do sth（很荣幸/高兴做某事）、be thrilled about/with...（对……感到非常兴奋）。分词形容词 thrilling 意为“令人兴奋的”。",
        desc: "We are thrilled to join."
    },
    {
        word: "proceeds",
        pos: "名",
        ipa: "/ˈproʊsiːdz/",
        cn: "收益，收入，出卖物所得",
        jp: "収益、売上金、所得",
        family: "proceed / proceeding",
        tips: "财务与慈善活动高频复数名词。通常以复数形式 proceeds 出现，指活动或拍卖后的净收益。常见搭配：net proceeds（净收益）、proceeds from the auction（拍卖所得）。",
        desc: "The proceeds go to charity."
    },
    {
        word: "communal",
        pos: "形",
        ipa: "/kəˈmjuːnl/",
        cn: "公共的，共享的，社区的",
        jp: "共用の、共同の、地域社会の",
        family: "community / communally",
        tips: "办公空间与住宿设施高频形容词。常修饰 area（公共区域）、kitchen（共享厨房）、space（共享空间）。等同于 shared / public。",
        desc: "They share a communal kitchen."
    },
    {
        word: "automotive",
        pos: "形",
        ipa: "/ˌɔːtəˈmoʊtɪv/",
        cn: "汽车的，机动车的",
        jp: "自動車の",
        family: "automobile",
        tips: "制造业与行业报告极高频形容词。常见搭配：automotive industry（汽车工业）、automotive parts（汽车零部件）、automotive engineer（汽车工程师）。",
        desc: "He works in automotive design."
    },
    {
        word: "optimizing",
        pos: "動/形",
        ipa: "/ˈɑːptɪmaɪzɪŋ/",
        cn: "优化，使完美；正在优化的",
        jp: "最適化すること、最適化する",
        family: "optimize / optimization / optimal",
        tips: "IT系统、生产流程与效率提升高频动词/现在分词。常见短语：optimizing performance（优化性能）、optimizing the supply chain（优化供应链）。派生形容词 optimal（最佳的）。",
        desc: "We are optimizing the system."
    },
    {
        word: "selective",
        pos: "形",
        ipa: "/sɪˈlektɪv/",
        cn: "有选择性的，严格筛选的",
        jp: "選択的な、厳選された",
        family: "select / selection / selectively",
        tips: "招聘、采购及质量把控高频形容词。常见表达：be highly selective about...（对……极其挑剔/精挑细选）、selective hiring process（严格筛选的招聘流程）。",
        desc: "They are selective about quality."
    },
    {
        word: "tact",
        pos: "名",
        ipa: "/tækt/",
        cn: "圆滑，得体，处事策略/分寸",
        jp: "機転、機知、配慮、妥当な対応",
        family: "tactful / tactfully",
        tips: "管理领导力与人际沟通高频名词。指在处理敏感问题时展现出的“得体/分寸/外交手腕”。核心搭配：handle the matter with tact（得体地处理此事）。派生词 tactful（得体的）。",
        desc: "She handled it with tact."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "hotel amenities",
        category: "简单",
        stem: "Guests staying at the resort can enjoy various ________ including a heated pool and free Wi-Fi.",
        options: ["hotel amenities", "veterinarian", "intermission", "proceeds"],
        correct: "hotel amenities",
        explanations: {
            guide: "名词短语辨析。由形容词 various（各种各样的）修饰，结合后文“恒温泳池和免费Wi-Fi”，可知是指酒店的便利设施，选择 hotel amenities。",
            family: "hotel amenities (n.酒店便利设施) | veterinarian (n.兽医) | intermission (n.幕间休息) | proceeds (n.收益)。",
            details: "hotel amenities 包含住宿场所提供的健身房、泳池、Wi-Fi等附加服务与便利设施。",
            cn: "入住度假村的客人可以享受各种酒店便利设施，包括恒温泳池和免费 Wi-Fi。",
            jp: "リゾートに滞在するお客様は、温水プールや無料Wi-Fiを含むさまざまなホテルのアメニティ（hotel amenities）を楽しむことができます。"
        }
    },
    {
        id: 2,
        target: "thrilled",
        category: "简单",
        stem: "The entire marketing team was ________ to hear that their campaign won the national award.",
        options: ["thrilled", "communal", "selective", "automotive"],
        correct: "thrilled",
        explanations: {
            guide: "形容词词义辨析。位于系动词 was 之后，结合后文“听到营销活动获得全国奖项”，表达团队感到非常高兴与兴奋，选择 thrilled。",
            family: "thrilled (adj.非常兴奋的) | communal (adj.公共的) | selective (adj.严格筛选的) | automotive (adj.汽车的)。",
            details: "be thrilled to hear...（听到……感到非常兴奋/高兴）是托业表态与庆贺语境的高频表达。",
            cn: "听说他们的营销活动获得了全国大奖，整个营销团队感到非常兴奋。",
            jp: "自分たちのキャンペーンが全国賞を受賞したと聞いて、マーケティングチーム全体がとても感激し（thrilled）ました。"
        }
    },
    {
        id: 3,
        target: "veterinarian",
        category: "简单",
        stem: "If your pet shows symptoms of illness, please take it to a qualified ________ immediately.",
        options: ["veterinarian", "intermission", "tact", "optimizing"],
        correct: "veterinarian",
        explanations: {
            guide: "名词词义辨析。由不定冠词 a 和形容词 qualified（有资质的）修饰，结合前半句宠物生病，此处应填入表示“兽医”的名词 veterinarian。",
            family: "veterinarian (n.兽医) | intermission (n.中场休息) | tact (n.得体/分寸) | optimizing (v./adj.优化)。",
            details: "take a pet to a veterinarian 意为“带宠物看兽医”，属于生活服务与诊所场景的基础常考短语。",
            cn: "如果您的宠物出现疾病症状，请立即将其带去给有资质的兽医检查。",
            jp: "ペットに病気の症状が見られる場合は、すぐに資格のある獣医師（veterinarian）に診てもらってください。"
        }
    },
    {
        id: 4,
        target: "intermission",
        category: "简单",
        stem: "Concertgoers can purchase refreshments in the lobby during the fifteen-minute ________.",
        options: ["intermission", "hotel amenities", "proceeds", "communal"],
        correct: "intermission",
        explanations: {
            guide: "名词词义辨析。由介词 during 和十五分钟这一时间修饰语引导，音乐会听众在休息期间购买茶点，选 intermission（幕间休息）。",
            family: "intermission (n.幕间休息) | hotel amenities (n.酒店设施) | proceeds (n.收益) | communal (adj.共享的)。",
            details: "fifteen-minute intermission（15分钟中场休息）是剧院与音乐会广播通知的标准表达。",
            cn: "音乐会听众可以在十五分钟的中场休息期间在大厅购买茶点。",
            jp: "コンサートの観客は、15分間の幕間（intermission）の間にロビーで軽食を購入することができます。"
        }
    },
    {
        id: 5,
        target: "automotive",
        category: "简单",
        stem: "The company manufactures precision parts for major companies in the ________ industry.",
        options: ["automotive", "thrilled", "selective", "tact"],
        correct: "automotive",
        explanations: {
            guide: "形容词修饰名词。空格修饰名词 industry（行业），结合后文“制造精密零部件”，选 automotive 构成“汽车工业”。",
            family: "automotive (adj.汽车的) | thrilled (adj.兴奋的) | selective (adj.有选择性的) | tact (n.得体/策略)。",
            details: "automotive industry 意为“汽车工业/汽车行业”，是商务制造业常考复合概念。",
            cn: "该公司为汽车行业的巨头企业制造精密零部件。",
            jp: "同社は自動車（automotive）産業の大手企業向けに精密部品を製造しています。"
        }
    },
    {
        id: 6,
        target: "proceeds",
        category: "简单",
        stem: "All ticket sales ________ from tonight’s charity gala will be donated to local shelters.",
        options: ["proceeds", "veterinarian", "intermission", "optimizing"],
        correct: "proceeds",
        explanations: {
            guide: "名词词义辨析。空格作为主语中心词，由 ticket sales（门票销售）修饰，后文提到将“捐赠给当地收容所”，选 proceeds（收益/收入）。",
            family: "proceeds (n.收益) | veterinarian (n.兽医) | intermission (n.中场休息) | optimizing (v.优化)。",
            details: "ticket sales proceeds 意为“门票销售收益”。proceeds 表示净收入时固定使用复数形式。",
            cn: "今晚慈善晚会的所有门票销售收益将捐赠给当地收容所。",
            jp: "今夜のチャリティーガラによるチケット売上収益（proceeds）はすべて、地元の支援施設に寄付されます。"
        }
    },
    {
        id: 7,
        target: "communal",
        category: "中等",
        stem: "Residents in the apartment complex share a ________ kitchen and laundry room on the ground floor.",
        options: ["communal", "selective", "automotive", "thrilled"],
        correct: "communal",
        explanations: {
            guide: "形容词词义辨析。修饰 kitchen and laundry room，结合动词 share（共享），说明这是“公共的/共享的”区域，选 communal。",
            family: "communal (adj.公共的/共享的) | selective (adj.挑剔的) | automotive (adj.汽车的) | thrilled (adj.兴奋的)。",
            details: "communal kitchen（共享厨房）常出现在公寓大楼设施说明及租赁合同中。",
            cn: "公寓大楼的居民在一楼共享一个公共厨房和洗衣房。",
            jp: "マンションの住民は、1階にある共用（communal）の台所と洗濯室をシェアしています。"
        }
    },
    {
        id: 8,
        target: "optimizing",
        category: "中等",
        stem: "By ________ its logistics network, the retail chain significantly shortened delivery times across the region.",
        options: ["optimizing", "intermission", "proceeds", "hotel amenities"],
        correct: "optimizing",
        explanations: {
            guide: "介词后接动名词。空格位于介词 By 之后，作宾语，后接名词短语 its logistics network，表达通过“优化”物流网络，选 optimizing。",
            family: "optimizing (v.优化/动名词) | intermission (n.休息) | proceeds (n.收益) | hotel amenities (n.酒店设施)。",
            details: "By optimizing...（通过优化……）表示手段与方式，后跟供应链或网络等对象。",
            cn: "通过优化其物流网络，该零售连锁店大幅缩短了全地区的送货时间。",
            jp: "物流ネットワークを最適化する（optimizing）ことによって、その小売チェーンは地域全体の配送時間を大幅に短縮しました。"
        }
    },
    {
        id: 9,
        target: "selective",
        category: "中等",
        stem: "The agency is extremely ________ about the vendors it partners with to ensure product quality.",
        options: ["selective", "communal", "automotive", "thrilled"],
        correct: "selective",
        explanations: {
            guide: "固定搭配与形容词辨析。空格跟在系动词 is 和副词 extremely 之后，结合介词 about，考查短语 be selective about...（对……精挑细选/严格筛选）。",
            family: "selective (adj.有选择性的/挑剔的) | communal (adj.共享的) | automotive (adj.汽车的) | thrilled (adj.兴奋的)。",
            details: "be selective about suppliers/vendors（对供应商严格筛选）是质量控制中的核心搭配。",
            cn: "该机构对合作的供应商精挑细选，以确保产品质量。",
            jp: "その代理店は製品の品質を確保するため、提携する業者に対して非常に厳言（selective）です。"
        }
    },
    {
        id: 10,
        target: "tact",
        category: "中等",
        stem: "The customer service representative resolved the delicate dispute with great ________ and patience.",
        options: ["tact", "veterinarian", "intermission", "proceeds"],
        correct: "tact",
        explanations: {
            guide: "名词词义辨析。作为介词 with 的宾语，由形容词 great 修饰，并与 patience（耐心）并列，表达以极大的“得体/分寸/策略”解决纠纷，选 tact。",
            family: "tact (n.得体/处事策略) | veterinarian (n.兽医) | intermission (n.休息) | proceeds (n.收益)。",
            details: "with tact and patience 意为“得体且耐心地”，是客服与危机处理场景的高频组合。",
            cn: "客服代表以极大的得体和耐心解决了一起棘手的纠纷。",
            jp: "カスタマーサービスの担当者は、素晴らしい機転（tact）と忍耐力をもって繊細な問題（紛争）を解決しました。"
        }
    },
    {
        id: 11,
        target: "thrilled",
        category: "中等",
        stem: "We are ________ to announce that our new regional office in Singapore is officially open.",
        options: ["thrilled", "thrill", "thrilling", "communal"],
        correct: "thrilled",
        explanations: {
            guide: "形容词用法辨析。空格位于系动词 are 之后，后接动词不定式 to announce，表达人为主语感受到的高兴，选形容词 thrilled。",
            family: "thrilled (adj.极为高兴的) | thrill (n./v.兴奋) | thrilling (adj.令人兴奋的) | communal (adj.共享的)。",
            details: "be thrilled to announce...（我们非常高兴地宣布……）是公司新闻稿与高管公告的标准句头。",
            cn: "我们非常高兴地宣布，我们位于新加坡的新区域办公室已正式开业。",
            jp: "シンガポールに新しい地域オフィスが正式にオープンしたことを発表でき、大変感激して（thrilled）おります。"
        }
    },
    {
        id: 12,
        target: "optimizing",
        category: "中等",
        stem: "The IT department focuses on ________ the internal database to handle larger data volumes.",
        options: ["optimizing", "optimal", "optimization", "optimistically"],
        correct: "optimizing",
        explanations: {
            guide: "介词后接动名词。空格在短语 focus on 中的介词 on 之后，且带有一词多义的宾语 the internal database，需要填入动名词形式 optimizing。",
            family: "optimizing (v.优化/动名词) | optimal (adj.最佳的) | optimization (n.优化) | optimistically (adv.乐观地)。",
            details: "focus on doing sth 结构中，后接动名词作介词宾语，同时接后面的名词短语。 optimization 为纯名词，无法直接后跟宾语。",
            cn: "IT 部门致力于优化内部数据库，以处理更大规模的数据量。",
            jp: "IT部門は、より大きなデータ量を処理するために内部データベースを最適化すること（optimizing）に注力しています。"
        }
    },
    {
        id: 13,
        target: "veterinarian",
        category: "困难",
        stem: "Dr. Chen completed her advanced training in ________ medicine before opening her own clinic.",
        options: ["veterinary", "veterinarian", "intermission", "communal"],
        correct: "veterinary",
        explanations: {
            guide: "形容词派生词辨析。空格修饰名词 medicine（医学），结合后文“开办她自己的诊所”，需要填入派生形容词 veterinary（兽医的）。",
            family: "veterinary (adj.兽医的) | veterinarian (n.兽医/人) | intermission (n.幕间休息) | communal (adj.公共的)。",
            details: "veterinary medicine 指“兽医学”。veterinarian 是指人的名词（兽医），不能直接修饰 medicine。",
            cn: "陈医生在开办自己的诊所之前，完成了兽医学的高级培训。",
            jp: "陳医師は自分のクリニックを開院する前に、獣医学（veterinary medicine）の高度な研修を修了しました。"
        }
    },
    {
        id: 14,
        target: "tact",
        category: "困难",
        stem: "When dealing with angry clients, it is crucial for managers to handle complaints ________.",
        options: ["tactfully", "tact", "tactful", "selective"],
        correct: "tactfully",
        explanations: {
            guide: "副词修饰动词。空格位于及物动词短语 handle complaints 之后，修饰动词 handle，需要填入副词形式 tactfully（得体地/圆滑地）。",
            family: "tactfully (adv.得体地/妥善地) | tact (n.分寸/策略) | tactful (adj.得体的) | selective (adj.有选择性的)。",
            details: "handle complaints tactfully 表示“得体、圆滑地处理投诉”。tact 是名词，tactful 是形容词，均不能修饰动词 handle。",
            cn: "在面对愤怒的客户时，经理们得体地处理投诉至关重要。",
            jp: "怒っている顧客に対応する際、マネージャーが不満に配慮深く/機転を利かせて（tactfully）対応することが極めて重要です。"
        }
    },
    {
        id: 15,
        target: "selective",
        category: "困难",
        stem: "The university maintains a highly ________ admissions policy, accepting fewer than ten percent of applicants.",
        options: ["selective", "selectively", "selection", "automotive"],
        correct: "selective",
        explanations: {
            guide: "形容词修饰名词。空格位于副词 highly 之后，修饰名词短语 admissions policy（录取政策），结合后文“录取率低于10%”，选 selective（严格筛选的）。",
            family: "selective (adj.严格筛选的) | selectively (adv.选择性地) | selection (n.选择) | automotive (adj.汽车的)。",
            details: "a highly selective policy 指“一项筛选极度严格的政策”。selection 是名词，无法被副词 highly 直接修饰。",
            cn: "该大学保持着极其严格的录取政策，录取率不足申请者的百分之十。",
            jp: "その大学は非常に厳選された（selective）入学選考方針を維持しており、合格率は応募者の10%未満です。"
        }
    },
    {
        id: 16,
        target: "proceeds",
        category: "困难",
        stem: "The board voted to allocate the net ________ from the property sale toward employee pension funds.",
        options: ["proceeds", "proceeding", "proceeded", "hotel amenities"],
        correct: "proceeds",
        explanations: {
            guide: "名词派生与财务词汇辨析。空格位于形容词 net（净的）之后，作 allocate 的宾语，结合来自资产销售的背景，选复数名词 proceeds（收益/所得）。",
            family: "proceeds (n.收益/所得) | proceeding (n.诉讼/程序) | proceeded (v.继续进行) | hotel amenities (n.酒店设施)。",
            details: "net proceeds 指“净收益/净所得”。proceeding 意为法律程序或诉讼，含义不符。",
            cn: "董事会投票决定将资产出售的净收益拨入员工养老基金。",
            jp: "取締役会は、不動産売却による純収益（proceeds）を従業員の年金基金に割り当てることを可決しました。"
        }
    },
    {
        id: 17,
        target: "communal",
        category: "困难",
        stem: "The design firm transformed the old office floor into a ________ space where employees can collaborate freely.",
        options: ["communal", "communally", "community", "optimizing"],
        correct: "communal",
        explanations: {
            guide: "形容词修饰名词。空格位于不定冠词 a 之后，名词 space 之前，表达改造为一个“共享/公共的”空间，选形容词 communal。",
            family: "communal (adj.共享的/公共的) | communally (adv.共同地) | community (n.社区) | optimizing (v.优化)。",
            details: "communal space 指团队可以共同使用的“公共协作空间”。communally 是副词，不能直接修饰名词 space。",
            cn: "这家设计公司将旧办公楼层改造成一个公共空间，员工可以在这里自由协作。",
            jp: "そのデザイン会社は、古いオフィスのフロアを、従業員が自由に行動・協力できる共用（communal）スペースに改修しました。"
        }
    },
    {
        id: 18,
        target: "optimizing",
        category: "困难",
        stem: "After evaluating the manufacturing line, the consultant proposed an ________ schedule to maximize daily output.",
        options: ["optimal", "optimizing", "optimization", "optimist"],
        correct: "optimal",
        explanations: {
            guide: "形容词词义与派生辨析。空格位于不定冠词 an 之后，名词 schedule 之前，表达一个“最佳的/最理想的”日程安排，选形容词 optimal。",
            family: "optimal (adj.最佳的/最理想的) | optimizing (v./adj.正在优化的) | optimization (n.优化) | optimist (n.乐观主义者)。",
            details: "an optimal schedule 意为“最优化/最佳的日程”。optimal 比现在分词 optimizing 更常用于修饰名词表达静态的“最佳”状态。",
            cn: "在评估了生产线之后，顾问提出了一份最佳的日程安排，以使每日产量最大化。",
            jp: "製造ラインを評価した後、コンサルタントは一日の生産量を最大化するための最適な（optimal）スケジュールを提案しました。"
        }
    }
];