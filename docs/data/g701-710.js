// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data371-380.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "on-site",
        pos: "形/副",
        ipa: "/ˌɑːn ˈsaɪt/",
        cn: "实地的，现场的",
        jp: "現地で、現場の",
        family: "site / off-site",
        tips: "职场与服务高频：on-site inspection（现场检查），on-site parking（现场停车）。",
        desc: "We offer on-site support."
    },
    {
        word: "inconvenience",
        pos: "名/動",
        ipa: "/ˌɪnkənˈviːniəns/",
        cn: "不便，麻烦；造成不便",
        jp: "不便、ご迷惑；不便をかける",
        family: "convenient / inconvenient / conveniently",
        tips: "商务致歉高频：apologize for the inconvenience（对于造成的不便表示歉意）。",
        desc: "We apologize for the inconvenience."
    },
    {
        word: "mentor",
        pos: "名/動",
        ipa: "/ˈmentɔːr/",
        cn: "导师，指导者；指导",
        jp: "メンター、指導者；指導する",
        family: "mentorship / mentee / mentoring",
        tips: "HR与员工培训高频：assigned a mentor（指派了一位导师），mentor new staff（指导新员工）。",
        desc: "She is an experienced mentor."
    },
    {
        word: "directory",
        pos: "名",
        ipa: "/dəˈrektəri/",
        cn: "目录，通讯录，名录",
        jp: "名簿、電話帳、ディレクトリ",
        family: "direct / director / direction",
        tips: "办公与通讯高频：employee directory（员工通讯录），telephone directory（电话簿）。",
        desc: "Check the employee directory online."
    },
    {
        word: "bin",
        pos: "名",
        ipa: "/bɪn/",
        cn: "垃圾桶，大箱，储藏箱",
        jp: "（蓋付きの）ごみ箱、容器",
        family: "bins / recycling bin",
        tips: "Part 1 & 办公设施高频：recycling bin（回收桶），storage bin（储藏箱）。",
        desc: "Throw paper into the bin."
    },
    {
        word: "expertise",
        pos: "名",
        ipa: "/ˌekspɜːrˈtiːz/",
        cn: "专业知识，专长",
        jp: "専門知識、専門的技能",
        family: "expert / expertly",
        tips: "HR与服务介绍高频：technical expertise（技术专长），demonstrate expertise（展现专长）。",
        desc: "He has expertise in finance."
    },
    {
        word: "renowned",
        pos: "形",
        ipa: "/rɪˈnaʊnd/",
        cn: "著名的，有名望的",
        jp: "著名な、有名で",
        family: "renown / renownless",
        tips: "人物与企业评价高频：world-renowned architect/chef（举世闻名的建筑师/主厨）。",
        desc: "She is a renowned artist."
    },
    {
        word: "prototype",
        pos: "名",
        ipa: "/ˈproʊtətaɪp/",
        cn: "原型，雏形",
        jp: "原型、試作品",
        family: "prototypical / prototyping",
        tips: "研发与制造高频：test a prototype（测试原型机），build a prototype（制作雏形）。",
        desc: "They built a new prototype."
    },
    {
        word: "showcase",
        pos: "動/名",
        ipa: "/ˈʃoʊkeɪs/",
        cn: "展示，陈列；展示柜",
        jp: "（才能などを）披露する；ショーケース",
        family: "showcased / showcasing",
        tips: "展览与营销高频：showcase talent/products（展示才华/产品）。",
        desc: "The event showcases new technology."
    },
    {
        word: "garment",
        pos: "名",
        ipa: "/ˈɡɑːrmənt/",
        cn: "服装，衣服",
        jp: "衣類、服",
        family: "garments / garment industry",
        tips: "零售与纺织高频：garment industry（服装业），protective garments（防护服装）。",
        desc: "She bought a silk garment."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "inconvenience",
        category: "简单",
        stem: "We sincerely apologize for any ________ caused by the temporary disruption of online banking services.",
        options: ["inconvenience", "expertise", "directory", "prototype"],
        correct: "inconvenience",
        explanations: {
            guide: "商务致歉固定短语。apologize for any ________ 属于托业最高频致歉表达，选 inconvenience（不便/麻烦）。",
            family: "inconvenience (n.不便) | expertise (n.专长) | directory (n.名录) | prototype (n.原型)。",
            details: "apologize for any inconvenience 意为对造成的任何不便表示抱歉。其余选项与致歉语境无关。",
            cn: "对于因在线银行服务临时中断而造成的任何不便，我们深表歉意。",
            jp: "オンラインバンキングサービスの一時停止によりご迷惑（inconvenience）をおかけしましたことを、深謝申し上げます。"
        }
    },
    {
        id: 2,
        target: "directory",
        category: "简单",
        stem: "New employees can find contact information for all staff members in the corporate ________.",
        options: ["directory", "garment", "bin", "mentor"],
        correct: "directory",
        explanations: {
            guide: "办公通讯名词考点。in the corporate ________ 结合寻找员工联系方式（contact information），选 directory（员工名录/通讯录）。",
            family: "directory (n.通讯录/名录) | garment (n.服装) | bin (n.垃圾桶) | mentor (n.导师)。",
            details: "corporate directory 意为公司员工通讯录。garment（服装）、bin（垃圾桶）均非查阅联系方式的平台/文件。",
            cn: "新员工可以在公司员工通讯录中找到所有员工的联系方式。",
            jp: "新入社員は、社員名簿（directory）ですべてのスタッフの連絡先を見つけることができます。"
        }
    },
    {
        id: 3,
        target: "on-site",
        category: "简单",
        stem: "The facility offers ________ technical support to resolve any equipment issues immediately.",
        options: ["on-site", "renowned", "inconvenient", "prototype"],
        correct: "on-site",
        explanations: {
            guide: "服务形容词考点。________ technical support 结合立即解决设备故障（resolve immediately），选 on-site（现场的/实地的）。",
            family: "on-site (adj.现场的) | renowned (adj.著名的) | inconvenient (adj.不便的) | prototype (n.原型)。",
            details: "on-site technical support 意为现场技术支持。renowned（著名的）、inconvenient（不便的）均非形容技术人员亲临现场的服务状态。",
            cn: "该设施提供现场技术支持，以立即解决任何设备问题。",
            jp: "当施設では、機器の問題を即座に解決するための現地（on-site）テクニカルサポートを提供しています。"
        }
    },
    {
        id: 4,
        target: "bin",
        category: "简单",
        stem: "Please throw all plastic bottles and aluminum cans into the designated recycling ________.",
        options: ["bin", "directory", "garment", "showcase"],
        correct: "bin",
        explanations: {
            guide: "设施名词考点。recycling ________ 属于生活与办公高频短语，表达“回收桶”，选 bin。",
            family: "bin (n.垃圾桶/箱) | directory (n.名录) | garment (n.服装) | showcase (n.展示柜)。",
            details: "recycling bin 意为资源回收桶。directory（通讯录）、garment（服装）均非投递废弃物的容器。",
            cn: "请将所有塑料瓶和铝罐投入指定的回收桶中。",
            jp: "プラスチックボトルやアルミ缶は、指定されたリサイクル箱（bin）に捨ててください。"
        }
    },
    {
        id: 5,
        target: "garment",
        category: "简单",
        stem: "The fashion brand manufactures high-quality silk ________ sold in upscale department stores.",
        options: ["garments", "expertise", "directories", "prototypes"],
        correct: "garments",
        explanations: {
            guide: "纺织零售名词考点。manufactures high-quality silk ________ 结合时尚品牌与高档百货出售，选复数 garments（服装/衣服）。",
            family: "garments (n.复数服装) | expertise (n.专长) | directories (n.通讯录) | prototypes (n.原型)。",
            details: "silk garments 意为丝绸服装。expertise（专业知识）、directories（目录）均非时尚品牌生产制造的纺织商品。",
            cn: "该时尚品牌制造在高档百货商店出售的高品质丝绸服装。",
            jp: "そのファッションブランドは、高級百貨店で販売される高品質なシルク衣類（garments）を製造しています。"
        }
    },
    {
        id: 6,
        target: "mentor",
        category: "简单",
        stem: "Each new hire is assigned a senior manager who will act as a ________ during the probation period.",
        options: ["mentor", "showcase", "inconvenience", "directory"],
        correct: "mentor",
        explanations: {
            guide: "HR职场角色考点。act as a ________ 结合资深经理在试用期指导新员工，选 mentor（导师/指导者）。",
            family: "mentor (n.导师) | showcase (n.展示柜) | inconvenience (n.不便) | directory (n.名录)。",
            details: "act as a mentor 意为充当导师。showcase（展示柜）、directory（目录）均非指代人类指导角色的名词。",
            cn: "每位新员工都会被指派一名资深经理，在试用期内担任其导师。",
            jp: "各新入社員には、試用期間中に指導者（mentor）として行動する上级マネージャーが配属されます。"
        }
    },
    {
        id: 7,
        target: "renowned",
        category: "中等",
        stem: "The keynote address at the medical conference will be delivered by a world-________ surgeon.",
        options: ["renowned", "on-site", "garment", "mentored"],
        correct: "renowned",
        explanations: {
            guide: "人物修饰形容词考点。world-________ 属于高频复合形容词，表达“举世闻名的/声名远扬的”，选 renowned。",
            family: "renowned (adj.著名的) | on-site (adj.现场的) | garment (n.服装) | mentored (v-ed受指导的)。",
            details: "world-renowned 意为举世闻名的。garment（服装）是名词，不能与 world- 构成修饰主厨/外科医生的复合形容词。",
            cn: "医学会议的主旨演讲将由一位举世闻名外科医生发表。",
            jp: "医学会の基調講演は、世界的に著名な（renowned）外科医によって行われます。"
        }
    },
    {
        id: 8,
        target: "prototype",
        category: "中等",
        stem: "Engineering teams spent months testing the early ________ before approving mass production.",
        options: ["prototype", "inconvenience", "mentor", "directory"],
        correct: "prototype",
        explanations: {
            guide: "研发制造名词考点。testing the early ________ 结合量产前（before mass production）测试，选 prototype（原型/雏形）。",
            family: "prototype (n.原型) | inconvenience (n.不便) | mentor (n.导师) | directory (n.名录)。",
            details: "early prototype 意为早期原型机。inconvenience（不便）、directory（名录）与量产前的产品研发测试阶段无关。",
            cn: "工程团队花了数月时间测试早期原型机，然后才批准量产。",
            jp: "エンジニアリングチームは、量産を承認する前に早期試作品（prototype）のテストに数ヶ月を費やしました。"
        }
    },
    {
        id: 9,
        target: "showcase",
        category: "中等",
        stem: "The upcoming trade expo will ________ the latest innovations in renewable energy technology.",
        options: ["showcase", "mentor", "bin", "inconvenience"],
        correct: "showcase",
        explanations: {
            guide: "展会动词考点。trade expo will ________ 后面接可再生能源的最新创新成果，表达“展示/陈列”，选 showcase。",
            family: "showcase (v.展示/n.展柜) | mentor (v.指导) | bin (n.垃圾桶) | inconvenience (v.造成不便)。",
            details: "showcase innovations 意为展示创新成果。mentor（指导人）、bin（丢弃）在此处动宾逻辑不通。",
            cn: "即将举行的贸易博览会将展示可再生能源技术方面的最新创新成果。",
            jp: "近く開催される貿易博覧会では、再生可能エネルギー技術の最新の革新が披露（showcase）されます。"
        }
    },
    {
        id: 10,
        target: "expertise",
        category: "中等",
        stem: "The consulting firm was selected because of its extensive ________ in global tax regulations.",
        options: ["expertise", "expert", "prototype", "directory"],
        correct: "expertise",
        explanations: {
            guide: "能力抽象名词考点。extensive ________ in... 结构中，修饰语 extensive 后面接抽象名词，表达丰富的“专业知识/专长”，选 expertise。",
            family: "expertise (n.专长/专业知识) | expert (n.专家) | prototype (n.原型) | directory (n.名录)。",
            details: "extensive expertise 意为广泛的专业技能/专长。expert 是可数名词（专家个人），在无限定词 an/the 情况下不能直接作宾语中心语。",
            cn: "该咨询公司之所以被选中，是因为它在全球税务法规方面拥有丰富的专业知识。",
            jp: "そのコンサルティングファームは、世界的な税規制に関する広範な専門知識（expertise）が高く評価されて選定されました。"
        }
    },
    {
        id: 11,
        target: "inconvenience",
        category: "中等",
        stem: "Construction work on the main entrance may ________ visitors entering the building this morning.",
        options: ["inconvenience", "inconvenient", "expertise", "showcase"],
        correct: "inconvenience",
        explanations: {
            guide: "动词用法考点。情态动词 may 后面接动词原形，表达给入内的访客“带来不便/造成麻烦”，选及物动词 inconvenience。",
            family: "inconvenience (v.造成不便/n.不便) | inconvenient (adj.不便的) | expertise (n.专长) | showcase (v.展示)。",
            details: "may inconvenience visitors 意为可能会给访客造成不便。inconvenient 是形容词，不能跟在情态动词 may 后面作谓语动词。",
            cn: "今天早上正门的施工可能会给进入大楼的访客带来不便。",
            jp: "正面玄関の工事により、今朝ビルに入られる来客にご迷惑（inconvenience）をおかけする可能性があります。"
        }
    },
    {
        id: 12,
        target: "mentor",
        category: "中等",
        stem: "Experienced supervisors are encouraged to ________ junior staff members to help them advance their careers.",
        options: ["mentor", "mentorship", "showcase", "prototype"],
        correct: "mentor",
        explanations: {
            guide: "动词不定式考点。are encouraged to 后面接动词原形，表达资深主管“指导/辅导”初级员工，选动词 mentor。",
            family: "mentor (v.指导/n.导师) | mentorship (n.导师制) | showcase (v.展示) | prototype (n.原型)。",
            details: "to mentor junior staff 意为指导初级员工。mentorship 是抽象名词（导师机制/关系），不能作不定式动词原形。",
            cn: "鼓励有经验的主管指导初级员工，帮助他们推进职业生涯发展。",
            jp: "経験豊富な上司は、若いスタッフのキャリアアドバンスを支援するために彼らを指導する（mentor）ことが推奨されます。"
        }
    },
    {
        id: 13,
        target: "expertise",
        category: "困难",
        stem: "The project was completed successfully thanks to the ________ executed legal audit by outside counsel.",
        options: ["expertly", "expertise", "expert", "renowned"],
        correct: "expertly",
        explanations: {
            guide: "派生副词修饰分词。________ executed audit 结构中，需要填写副词修饰过去分词 executed，表达“专业地/熟练地”执行，选 expertly。",
            family: "expertly (adv.专业地/熟练地) | expertise (n.专业知识) | expert (n./adj.专家) | renowned (adj.著名的)。",
            details: "expertly executed 意为专业熟练地执行的。expertise 是名词，不能在句中作修饰分词 executed 的状语。",
            cn: "多亏了外部律师专业熟练地执行了法律审计，项目才得以成功完成。",
            jp: "外部弁護士によって専門的に（expertly）実施された法務監査のおかげで、プロジェクトは成功裏に完了しました。"
        }
    },
    {
        id: 14,
        target: "prototype",
        category: "困难",
        stem: "Industrial designers are currently ________ a lightweight battery for electric vehicles in the laboratory.",
        options: ["prototyping", "prototype", "showcasing", "inconveniencing"],
        correct: "prototyping",
        explanations: {
            guide: "研发动词进行时考点。are currently ________ 结合实验室研发轻量化电池，表达正在“制作原型/开发样品”，选现在分词 prototyping。",
            family: "prototyping (v-ing制作原型) | prototype (n./v.原形) | showcasing (v-ing展示) | inconveniencing (v-ing给…带来不便)。",
            details: "are prototyping a battery 意为正在实验室制作电池原型样品。prototype 作动词意为制作原型，在此处用进行时 prototyping。",
            cn: "工业设计师目前正在实验室里制作一种用于电动汽车的轻量化电池原型样品。",
            jp: "インダストリアルデザイナーは現在、研究室で電気自動車用の軽量バッテリーの試作（prototyping）を行っています。"
        }
    },
    {
        id: 15,
        target: "on-site",
        category: "困难",
        stem: "Auditors arrived at the plant unannounced to perform a comprehensive ________ evaluation of safety protocols.",
        options: ["on-site", "renowned", "expertly", "directory"],
        correct: "on-site",
        explanations: {
            guide: "前置形容词修饰语。a comprehensive ________ evaluation 结合审计员亲临工厂（arrived at the plant），表达“现场的/实地的”评估，选 on-site。",
            family: "on-site (adj.现场的) | renowned (adj.著名的) | expertly (adv.专业地) | directory (n.名录)。",
            details: "an on-site evaluation 指实地/现场评估。expertly 是副词，不能充当名词 evaluation 的前置修饰定语。",
            cn: "审计人员未作预告便抵达工厂，对安全协议进行全面实地评估。",
            jp: "監査人は事前に告知することなく工場に到着し、安全プロトコルの包括的な現地（on-site）評価を実施しました。"
        }
    },
    {
        id: 16,
        target: "renowned",
        category: "困难",
        stem: "The artist gained international ________ after displaying her sculptures at the national gallery.",
        options: ["renown", "renowned", "showcase", "mentorship"],
        correct: "renown",
        explanations: {
            guide: "派生抽象名词考点。gained international ________ 结构中，及物动词 gained 后面接名词，表达赢得国际“声誉/名望”，选 renown。",
            family: "renown (n.声誉/名望) | renowned (adj.著名的) | showcase (n.展柜) | mentorship (n.导师指导)。",
            details: "gain international renown 意为赢得国际声誉。renowned 是形容词，不能直接作及物动词 gain 的宾语。",
            cn: "这位艺术家在国家美术馆展出其雕塑作品后，赢得了国际声誉。",
            jp: "その芸術家は国立ギャラリーで彫刻を展示した後、国際的な名声（renown）を獲得しました。"
        }
    },
    {
        id: 17,
        target: "garment",
        category: "困难",
        stem: "Economic reports indicate that local ________ manufacturers experienced increased overseas demand this quarter.",
        options: ["garment", "garments", "showcase", "bin"],
        correct: "garment",
        explanations: {
            guide: "名词作定语单数规范。________ manufacturers 属于行业高频组合，表达“服装制造商”，用单数名词 garment 作前置定语。",
            family: "garment (n.服装) | garments (n.复数) | showcase (n.展柜) | bin (n.垃圾桶)。",
            details: "garment manufacturers 意为服装制造商。名词作定语修饰复数 manufacturers 时，规范习惯选用单数形式 garment（如 garment industry/manufacturer）。",
            cn: "经济报告表明，当地服装制造商本季度迎来了海外需求的增加。",
            jp: "経済レポートによると、地元の衣料品（garment）メーカーは今四半期、海外需要の増加を経験したことが示されています。"
        }
    },
    {
        id: 18,
        target: "showcase",
        category: "困难",
        stem: "The grand opening event served as an impressive ________ for the designer's new autumn clothing line.",
        options: ["showcase", "prototype", "expertise", "inconvenience"],
        correct: "showcase",
        explanations: {
            guide: "展示平台名词考点。served as an impressive ________ 表达盛大开业活动成为了新服装系列的绝佳“展示平台/舞台”，选 showcase。",
            family: "showcase (n.展示平台/展柜) | prototype (n.原型) | expertise (n.专长) | inconvenience (n.不便)。",
            details: "serve as a showcase for sth 意为作为展示某物的绝佳平台。prototype（原型）、inconvenience（不便）均不符合宣传新产品舞台的语义。",
            cn: "盛大的开业活动成为了设计师新秋季服装系列的精彩展示平台。",
            jp: "グランドオープニングイベントは、デザイナーの新しい秋の衣料品ラインの素晴らしい披露（showcase）の場として機能しました。"
        }
    }
];