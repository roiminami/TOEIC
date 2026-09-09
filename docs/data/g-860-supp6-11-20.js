// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data91-100.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "capital",
        pos: "名/形",
        ipa: "/ˈkæpɪtl/",
        cn: "资金，资本；大写字母；首都；资本的",
        jp: "資本、資金；大文字；首都；主要な",
        family: "capitalize / capitalism / capitalist",
        tips: "商务高频考点：venture capital（风险投资），capital investment（资本投资），raise capital（筹资）；动词短语 capitalize on 意为“利用……获利”。",
        desc: "The firm needs more capital to expand."
    },
    {
        word: "carry",
        pos: "動",
        ipa: "/ˈkæri/",
        cn: "备有，销售（商品）；携带；承担",
        jp: "（商品を）扱う、置いている；運ぶ；引き受ける",
        family: "carrier / carrying / carried",
        tips: "托业零售与店铺场景核心考点：指商店“备有货品/上架销售某种品牌”（carry a wide selection of items / We do not carry that brand）。",
        desc: "The store does not carry this brand."
    },
    {
        word: "casual",
        pos: "形",
        ipa: "/ˈkæʒuəl/",
        cn: "非正式的，便装的；临时的",
        jp: "略式の、カジュアルな；臨時の",
        family: "casually / casualness",
        tips: "职场着装规范高频词：business casual（商务便装/半正式商务装），casual wear（休闲装）；亦可指临时雇员（casual worker）。",
        desc: "Friday is a business casual day."
    },
    {
        word: "certain",
        pos: "形",
        ipa: "/ˈsɜːrtn/",
        cn: "某些，特定的；确定的，无疑的",
        jp: "ある特定の；確信して、確実な",
        family: "certainly / certainty / uncertain / uncertainty",
        tips: "常用于商务合同与条件规程：under certain circumstances / conditions（在某些特定情况下）；作表语时搭配 be certain that...（确信……）。",
        desc: "The project starts on a certain date."
    },
    {
        word: "change",
        pos: "名/動",
        ipa: "/tʃeɪndʒ/",
        cn: "零钱，找零；变化，更改；改变",
        jp: "お釣り、小銭；変更、変化；変更する",
        family: "changeable / unchanged / exchange",
        tips: "消费与交通场景常考“零钱/找零”（exact change 正好数量的零钱；keep the change 不用找零）；商务行政中考 make changes to（对……做更改）。",
        desc: "Please keep the small change."
    },
    {
        word: "chapter",
        pos: "名",
        ipa: "/ˈtʃæptər/",
        cn: "分会，支部；章节，篇章",
        jp: "（学会・団体の）支部、分会；章",
        family: "chapters",
        tips: "托业高频熟词生义考点：指专业协会、慈善团体或工会的地方“分会/分部”（local chapter of the association）。",
        desc: "He joined the local chapter of the club."
    },
    {
        word: "checkout",
        pos: "名",
        ipa: "/ˈtʃekaʊt/",
        cn: "结账处，收银台；退房时间",
        jp: "（スーパーなどの）レジ、会計所；（ホテルの）チェックアウト",
        family: "check out",
        tips: "超市零售与酒店服务核心词：checkout counter（收银台），express checkout（快速结账通道），checkout time（退房时间）。",
        desc: "The checkout counter is over there."
    },
    {
        word: "circulation",
        pos: "名",
        ipa: "/ˌsɜːrkjəˈleɪʃn/",
        cn: "（报刊）发行量；（图书）借阅流通；循环",
        jp: "（新聞・雑誌の）発行部数；（図書の）貸出、流通；循環",
        family: "circulate / circulatory / circular",
        tips: "出版与媒体场景必考：newspaper/magazine circulation（报纸/杂志发行量）；图书馆场景考 circulation desk（借还书总服务台）及 in circulation（流通中）。",
        desc: "The journal has a large circulation."
    },
    {
        word: "complete",
        pos: "動/形",
        ipa: "/kəmˈpliːt/",
        cn: "填写，完成；完整的，完工的",
        jp: "記入する、完了する；完全な、完了した",
        family: "completion / completely / incomplete",
        tips: "托业听力与阅读双料最高频：complete the application/survey（填写申请表/问卷）；作形容词表语表示完工；固定短语 upon completion of（在……完成之时）。",
        desc: "Please complete the application form."
    },
    {
        word: "copy",
        pos: "名/動",
        ipa: "/ˈkɑːpi/",
        cn: "一份，一册（副本）；广告文案；复印",
        jp: "（書類・本の）部、冊、コピー；（広告の）原稿、コピー；複写する",
        family: "copier / copyright / hard copy",
        tips: "托业核心考点：1. 文件或出版物的“份/本”（a copy of the contract/manual）；2. 不可数名词，指广告或宣传“文案”（promotional copy / draft the copy）。",
        desc: "Send me a copy of the report."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "complete",
        category: "简单",
        stem: "Please ________ the attached registration form and return it to the human resources department by noon.",
        options: ["complete", "completed", "chapter", "casual"],
        correct: "complete",
        explanations: {
            guide: "祈使句中的动词原形。Please 引导的祈使句需要动词原形开头，后接表格名词 form，选 complete（填写/完成）。",
            family: "complete (v.填写/adj.完整的) | completed (v-ed形式) | chapter (n.分会) | casual (adj.非正式的)。",
            details: "complete the form 是托业最经典的固定搭配，意为填写表格。completed 为分词或过去式，无法在祈使句句首充当动词原形。",
            cn: "请填写随附的登记表，并在中午之前将其交回人力资源部。",
            jp: "添付の登録用紙に記入し（complete）、正午までに人事部に提出してください。"
        }
    },
    {
        id: 2,
        target: "checkout",
        category: "简单",
        stem: "Customers with five items or fewer may proceed directly to the express ________ line.",
        options: ["checkout", "checking out", "circulation", "capital"],
        correct: "checkout",
        explanations: {
            guide: "复合名词定语修饰。express checkout line 是零售超市中的高频专属短语，意为“快速结账通道”，选名词 checkout。",
            family: "checkout (n.结账处/退房) | checking out (动名词短语) | circulation (n.发行量/流通) | capital (n.资金)。",
            details: "checkout 作名词常用于修饰 line 或 counter。checking out 为动词短语的进行时或动名词形式，不符合固定专有名词结构。",
            cn: "购买五件或更少商品的顾客可以直接前往快速结账通道。",
            jp: "商品が5点以下のお客様は、エクスプレスレジ（checkout）の列へ直接お進みいただけます。"
        }
    },
    {
        id: 3,
        target: "copy",
        category: "简单",
        stem: "Please make sure to retain a printed ________ of your purchase receipt for warranty purposes.",
        options: ["copy", "copying", "change", "carry"],
        correct: "copy",
        explanations: {
            guide: "不定冠词与分词形容词后的名词中心语。a printed ________ 结构中需要填入单数可数名词，printed copy 意为“打印件/纸质副本”，选 copy。",
            family: "copy (n.一份/副本/文案) | copying (n.复印/分词) | change (n.零钱/改变) | carry (v.销售/携带)。",
            details: "a printed copy of... 指某文件的打印副本。copying 是动名词动作，不能被不定冠词 a 和形容词 printed 共同修饰为具象物品。",
            cn: "请务必保留一份购买收据的打印复印件，以用于保修服务。",
            jp: "保証のために、購入レシートの印刷された控え（copy）を必ず保管してください。"
        }
    },
    {
        id: 4,
        target: "casual",
        category: "简单",
        stem: "Employees are allowed to wear business ________ attire to the office every Friday.",
        options: ["casual", "casually", "certain", "complete"],
        correct: "casual",
        explanations: {
            guide: "职场着装固定短语搭配。business casual 是企业文化中的标准固定搭配，修饰名词 attire（服装），意为“商务便装”，选 casual。",
            family: "casual (adj.非正式的/便装的) | casually (adv.随意地) | certain (adj.特定的) | complete (adj.完整的)。",
            details: "business casual attire 指商务休闲正装。casually 是副词，无法在名词 business 和 attire 之间充当定语形容词。",
            cn: "每逢周五，员工均可身着商务便装来办公室上班。",
            jp: "従業員は毎週金曜日、ビジネスカジュアル（casual）の服装で出勤することが認められています。"
        }
    },
    {
        id: 5,
        target: "change",
        category: "简单",
        stem: "The automated parking ticket machine only accepts paper banknotes and cannot provide any ________.",
        options: ["change", "changing", "checkout", "chapter"],
        correct: "change",
        explanations: {
            guide: "商业生活与货币专属名词。provide any ________ 结构中，change 考查不可数名词“找零/零钱”，选 change。",
            family: "change (n.找零/零钱/变化) | changing (adj.变化中的) | checkout (n.结账台) | chapter (n.分会) 。",
            details: "provide change 意为找零。changing 是分词形式，不能作及物动词 provide 的名词宾语表示货币找零。",
            cn: "该自动停车缴费机仅接收纸币，无法提供任何找零。",
            jp: "自動駐車券売機は紙幣のみを受け付け、お釣り（change）を出すことはできません。"
        }
    },
    {
        id: 6,
        target: "carry",
        category: "简单",
        stem: "The neighborhood convenience store does not ________ foreign newspapers or specialized design journals.",
        options: ["carry", "carrier", "circulation", "capital"],
        correct: "carry",
        explanations: {
            guide: "助动词后的动词原形及店铺零售词义。does not 后面必须接动词原形，carry 考查零售店铺“销售/备有某种商品”的商务核心用法，选 carry。",
            family: "carry (v.销售/备有/运送) | carrier (n.承运商) | circulation (n.发行量) | capital (n.资金)。",
            details: "The store carries items 是托业听力与零售场景的核心搭配。carrier 是名词（承运公司/载体），不能充当谓语动词原形。",
            cn: "该街区便利店不销售外国报纸或专业设计期刊。",
            jp: "その近所のコンビニエンスストアでは、外国の新聞や専門デザイン雑誌を扱って（carry）いません。"
        }
    },
    {
        id: 7,
        target: "chapter",
        category: "中等",
        stem: "Representatives from the regional ________ of the International Management Association will host the annual gala.",
        options: ["chapter", "checkout", "casual", "certain"],
        correct: "chapter",
        explanations: {
            guide: "专业机构专属名词与熟词生义。the regional ________ of the Association 结构中，chapter 考查“协会地方分会/支部”的高频托业考点，选 chapter。",
            family: "chapter (n.分会/支部/章节) | checkout (n.收银台) | casual (adj.便装的) | certain (adj.特定的)。",
            details: "regional chapter 意为地区分会。checkout、casual、certain 在此与国际管理协会的组织架构搭配完全不符。",
            cn: "国际管理协会地区分会的代表们将主办本届年度盛典。",
            jp: "国際経営協会の地域支部（chapter）の代表者たちが、年次祝賀会を主催します。"
        }
    },
    {
        id: 8,
        target: "capital",
        category: "中等",
        stem: "The clean technology startup is seeking venture ________ from corporate investors to fund overseas expansion.",
        options: ["capital", "capitalize", "circulation", "change"],
        correct: "capital",
        explanations: {
            guide: "金融投资核心复合名词。venture capital 是商业经济中的核心专有名词，意为“风险投资/风险资本”，选名词 capital。",
            family: "capital (n.资本/资金) | capitalize (v.利用/资本化) | circulation (n.发行量) | change (n.零钱)。",
            details: "venture capital 指针对初创企业的风险投资金。capitalize 是动词，不能与名词 venture 搭配充当 seeking 的宾语中心词。",
            cn: "这家环保科技初创企业正在寻求来自企业投资者的风险投资，以资助其海外业务扩张。",
            jp: "そのクリーンテクノロジーの新興企業は、海外進出の資金を調達するために、企業投資家からのベンチャーキャピタル（capital）を求めています。"
        }
    },
    {
        id: 9,
        target: "certain",
        category: "中等",
        stem: "Under ________ market circumstances, smaller logistics vendors may be exempt from the import tariff.",
        options: ["certain", "certainly", "complete", "carried"],
        correct: "certain",
        explanations: {
            guide: "介词短语中的定语形容词。under ________ circumstances 结构中需要形容词修饰复数名词 circumstances，under certain circumstances 意为“在某些特定情况下”，选 certain。",
            family: "certain (adj.某些/特定的) | certainly (adv.必定) | complete (adj.完整的) | carried (v-ed形式)。",
            details: "under certain circumstances 是托业规章制度与法律文本的核心搭配。certainly 是副词，不能修饰名词 circumstances。",
            cn: "在某些特定市场情况下，规模较小的物流供应商可被豁免进口关税。",
            jp: "特定の（certain）市場状況下では、小規模な物流ベンダーは輸入関税を免除される場合があります。"
        }
    },
    {
        id: 10,
        target: "circulation",
        category: "中等",
        stem: "The financial daily newspaper boasts a certified nationwide ________ of more than two million readers.",
        options: ["circulation", "circulate", "chapter", "casual"],
        correct: "circulation",
        explanations: {
            guide: "报刊传媒专属名词。a certified nationwide ________ 结构中需要填入与报纸读者相关的名词，newspaper circulation 意为“报纸发行量”，选 circulation。",
            family: "circulation (n.发行量/循环) | circulate (v.流通/传播) | chapter (n.分会) | casual (adj.便装的)。",
            details: "nationwide circulation 指全国发行量。circulate 是动词，无法在形容词 nationwide 之后充当 boasts 的宾语中心语。",
            cn: "该财经日报拥有经认证的超过两百万读者的全国发行量。",
            jp: "その経済日刊紙は、200万人以上の読者を抱える公認の全国発行部数（circulation）を誇っています。"
        }
    },
    {
        id: 11,
        target: "complete",
        category: "中等",
        stem: "The executive board will review the merger proposal only after the comprehensive audit report is ________.",
        options: ["complete", "completely", "checkout", "copy"],
        correct: "complete",
        explanations: {
            guide: "系表结构与形容词用法。is 后面需要形容词充当主语补足语（表语），说明审计报告的状态是“完成的/完备的”，选形容词 complete。",
            family: "complete (adj.完整的/完工的/v.完成) | completely (adv.完全地) | checkout (n.结账) | copy (n.副本)。",
            details: "the report is complete 表示报告编制已完成。completely 是副词，不能单独作系动词 is 的表语。",
            cn: "执行董事会只有在全面的审计报告完成之后，才会审阅该合并提案。",
            jp: "取締役会は、包括的な監査報告書が完了（complete）した後にのみ、合併案を検討します。"
        }
    },
    {
        id: 12,
        target: "carry",
        category: "中等",
        stem: "To satisfy increased customer demand during peak season, the electronics retail warehouse ________ an extensive inventory of monitors.",
        options: ["carries", "carrier", "changing", "certain"],
        correct: "carries",
        explanations: {
            guide: "主谓一致与一般现在时态。主语是单数名词 warehouse，缺少核心谓语动词，carries 表示该仓储库“常备/存有”大量显示器库存，选 carries。",
            family: "carries (第三人称单数) | carrier (n.运输公司) | changing (adj.变化的) | certain (adj.特定的)。",
            details: "carry an inventory 意为备有库存。carrier 为名词，无法在单数主语后充当谓语动词。",
            cn: "为了满足旺季增加的客户需求，该电子零售仓库备有大量的显示器库存。",
            jp: "繁忙期の顧客需要の増加に応えるため、その家電小売り倉庫はモニターの豊富な在庫を扱って（carries）います。"
        }
    },
    {
        id: 13,
        target: "complete",
        category: "困难",
        stem: "Upon ________ of the mandatory safety orientation program, participants will receive a verified operating badge.",
        options: ["completion", "complete", "copy", "casual"],
        correct: "completion",
        explanations: {
            guide: "高阶商务介词短语搭配。Upon / On completion of... 是托业 Part 5 与规章制度中极高频的固定句型，意为“一经完成……”，介词 Upon 后需接名词 completion。",
            family: "completion (n.完成/结束) | complete (v./adj.完成/完整的) | copy (n.副本) | casual (adj.便装的)。",
            details: "upon completion of the program 意为培训项目一经完成。complete 作动词不能直接跟在介词 Upon 后面充当名词短语核心。",
            cn: "一经完成强制性安全入职培训，参与人员将获得经过验证的操作证件。",
            jp: "義務的な安全オリエンテーションプログラムの修了（completion）に伴い、参加者には確認済みの操作バッジが授与されます。"
        }
    },
    {
        id: 14,
        target: "copy",
        category: "困难",
        stem: "The creative marketing director hired an experienced writer to draft compelling promotional ________ for the fall campaign.",
        options: ["copy", "copies", "circulation", "capital"],
        correct: "copy",
        explanations: {
            guide: "广告传媒专业术语（不可数名词）。promotional copy 是广告营销核心专业术语，意为“宣传文案”，copy 作文案讲时为不可数名词，选 copy。",
            family: "copy (n.文案/广告词/不可数) | copies (n.复数副本) | circulation (n.发行量) | capital (n.资金)。",
            details: "draft promotional copy 指撰写宣传文案。copies 指具体几册书籍或复印件，不能与修饰整体文案创作内容的形容词 compelling promotional 搭配。",
            cn: "创意营销总监聘请了一位富有经验的写手，为秋季宣传活动撰写引人入胜的推广文案。",
            jp: "クリエイティブマーケティングディレクターは、秋のキャンペーンのために魅力的な宣伝用コピー（copy）を起草する経験豊富なライターを雇いました。"
        }
    },
    {
        id: 15,
        target: "certain",
        category: "困难",
        stem: "While the initial feasibility report seemed promising, executive committee members remain ________ about projected revenue figures.",
        options: ["uncertain", "certainly", "casual", "checkout"],
        correct: "uncertain",
        explanations: {
            guide: "逻辑转折与派生形容词考点。由 While（虽然……但是）引导让步状语从句，主句谓语 remain（系动词）后需要填入表示转折态度的表语形容词，uncertain（不确定的/怀疑的）符合语境。",
            family: "uncertain (adj.不确定的/心存怀疑的) | certainly (adv.确定地) | casual (adj.非正式的) | checkout (n.收银台)。",
            details: "remain uncertain about... 意为对……仍心存疑虑。certainly 是副词，不能作系动词 remain 的形容词表语。",
            cn: "虽然最初的可行性报告看似前景良好，但执行委员会成员对预期的营收数据仍持怀疑态度。",
            jp: "初期の実現可能性報告書は有望に見えたものの、執行委員会のメンバーは予測された収益の数値について依然として不確実（uncertain）であると考えています。"
        }
    },
    {
        id: 16,
        target: "capital",
        category: "困难",
        stem: "The multinational enterprise intends to ________ on expanding consumer interest in sustainable packaging alternatives.",
        options: ["capitalize", "capital", "carry", "circulation"],
        correct: "capitalize",
        explanations: {
            guide: "不定式后高阶动介短语搭配。intends to 后面接动词原形，与后面的介词 on 连用构成固定短语 capitalize on，意为“充分利用……/借机获利”，选动词 capitalize。",
            family: "capitalize (v.利用/使资本化) | capital (n.资本/资金) | carry (v.销售/携带) | circulation (n.发行量)。",
            details: "capitalize on market trends 是商业战略报告的核心词汇。capital 是名词或形容词，不能直接放在不定式 to 后面作不及物动词与 on 搭配。",
            cn: "这家跨国企业打算充分利用消费者对环保可持续包装替代品日益增长的兴趣来获取商机。",
            jp: "その多国籍企業は、持続可能な代替包装に対する消費者の関心の高まりを利用して利益を得る（capitalize on）ことを意図しています。"
        }
    },
    {
        id: 17,
        target: "circulation",
        category: "困难",
        stem: "Due to severe physical wear, several historical reference manuscripts were permanently removed from ________ by the chief archivist.",
        options: ["circulation", "circulating", "change", "chapter"],
        correct: "circulation",
        explanations: {
            guide: "图书档案借阅固定介词搭配。be removed from circulation 属于图书馆与档案管理专业术语，意为“从流通/对外借阅中撤下”，介词 from 后面接名词 circulation。",
            family: "circulation (n.流通/借阅/循环) | circulating (分词形式) | change (n.找零) | chapter (n.分会)。",
            details: "remove from circulation 属于固定搭配。circulating 是分词，在此处不如名词 circulation 符合固定的介宾搭配惯例。",
            cn: "由于物理磨损严重，几部具有历史价值的参考手稿被首席档案管理员永久停止对外借阅。",
            jp: "物理的な摩耗が激しいため、いくつかの歴史的な参考文献の原稿は、主任記録管理者によって永久に貸出流通（circulation）から外されました。"
        }
    },
    {
        id: 18,
        target: "casual",
        category: "困难",
        stem: "The division supervisor addressed the project milestones ________ during the luncheon rather than holding a formal boardroom briefing.",
        options: ["casually", "casual", "certain", "completed"],
        correct: "casually",
        explanations: {
            guide: "副词修饰及物动词短语。空格修饰动词 addressed（讲解/陈述），与后面的 rather than holding a formal... 呼应，表示“以非正式/随意的方式”沟通，选副词 casually。",
            family: "casually (adv.非正式地/随意地) | casual (adj.便装的/非正式的) | certain (adj.特定的) | completed (adj.已完成的)。",
            details: "addressed the milestones casually 构成动词与副词的修饰关系。casual 是形容词，不能在及物动词及其宾语之后修饰动作方式。",
            cn: "部门主管在午餐会期间以轻松随意的形式沟通了项目里程碑，而没有召开正式的董事会简报会。",
            jp: "部門監督者は、正式な役員会でのブリーフィングを行うのではなく、昼食会中にプロジェクトのマイルストーンについて打ち解けて（casually）話しました。"
        }
    }
];