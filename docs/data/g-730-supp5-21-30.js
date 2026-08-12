// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data331-340.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "intern",
        pos: "名/動",
        ipa: "/ˈɪntɜːrn/",
        cn: "实习生；做实习生",
        jp: "インターン、実習生；実習生として働く",
        family: "internship / interning",
        tips: "职场与招聘高频：summer intern（暑期实习生），intern at a firm（在公司做实习）。",
        desc: "She is a summer intern."
    },
    {
        word: "jewelry",
        pos: "名",
        ipa: "/ˈdʒuːəlri/",
        cn: "珠宝，首饰",
        jp: "宝飾品、ジュエリー",
        family: "jeweler / jeweled",
        tips: "零售与奢侈品高频：fine jewelry（高级珠宝），jewelry store（珠宝店）。",
        desc: "She bought fine jewelry."
    },
    {
        word: "loan",
        pos: "名/動",
        ipa: "/loʊn/",
        cn: "贷款，借出；出借",
        jp: "融資、ローン；貸し出す",
        family: "lender / loaner / loaning",
        tips: "金融与银行核心词：bank loan（银行贷款），take out a loan（申请贷款）。",
        desc: "The bank approved the loan."
    },
    {
        word: "membership",
        pos: "名",
        ipa: "/ˈmembərʃɪp/",
        cn: "会员身份，会员资格",
        jp: "会員資格、メンバーシップ",
        family: "member / dismember",
        tips: "客户与服务高频：annual membership（年度会员），membership fee（会费）。",
        desc: "My annual membership is active."
    },
    {
        word: "networking",
        pos: "名",
        ipa: "/ˈnetwɜːrkɪŋ/",
        cn: "人脉建立，网络化",
        jp: "ネットワーク作り、人脈作り",
        family: "network / networked",
        tips: "商务与职业发展高频：networking event（人脉拓展/社交活动），social networking（社交网络）。",
        desc: "They attended a networking event."
    },
    {
        word: "nominate",
        pos: "動",
        ipa: "/ˈnɑːmɪneɪt/",
        cn: "提名，任命",
        jp: "指名する、ノミネートする",
        family: "nomination / nominee / nominative",
        tips: "奖项与选举高频：nominate a candidate（提名候选人），be nominated for an award（获得某奖项提名）。",
        desc: "They will nominate a candidate."
    },
    {
        word: "organic",
        pos: "形",
        ipa: "/ɔːrˈɡænɪk/",
        cn: "有机的，自然的",
        jp: "有機の、オーガニックの",
        family: "organically / organism",
        tips: "零售与食品高频：organic produce/food（有机农产品/食品），organic growth（自然增长）。",
        desc: "They sell organic produce."
    },
    {
        word: "orientation",
        pos: "名",
        ipa: "/ˌɔːriənˈteɪʃn/",
        cn: "岗前培训，迎新会，方向",
        jp: "研修、オリエンテーション",
        family: "orient / oriented / orientate",
        tips: "HR与入职高频：employee orientation（新员工岗前培训），orientation session（迎新会/培训环节）。",
        desc: "New staff attended orientation."
    },
    {
        word: "packaging",
        pos: "名",
        ipa: "/ˈpækɪdʒɪŋ/",
        cn: "包装，包装材料",
        jp: "包装、パッケージング",
        family: "package / unpack / packager",
        tips: "物流与零售高频：eco-friendly packaging（环保包装），packaging materials（包装材料）。",
        desc: "The packaging is eco-friendly."
    },
    {
        word: "paperless",
        pos: "形",
        ipa: "/ˈpeɪpərləs/",
        cn: "无纸化的",
        jp: "ペーパーレスの、紙を使わない",
        family: "paper / paperlessing",
        tips: "办公与环保高频：paperless office（无纸化办公），paperless billing（无纸化账单/电子账单）。",
        desc: "We adopted paperless billing."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "orientation",
        category: "简单",
        stem: "New employees are required to attend the company ________ on their first day of work.",
        options: ["orientation", "packaging", "loan", "jewelry"],
        correct: "orientation",
        explanations: {
            guide: "HR入职场景名词。attend the company ________ 结合入职第一天（first day of work），选 orientation（岗前培训/迎新会）。",
            family: "orientation (n.岗前培训) | packaging (n.包装) | loan (n.贷款) | jewelry (n.珠宝)。",
            details: "company orientation 指公司岗前培训。packaging（包装）、loan（贷款）均非新员工首日参加活动。",
            cn: "新员工被要求在入职第一天参加公司岗前培训。",
            jp: "新入社員は出勤初日に会社のオリエンテーション（orientation）に参加することが求められます。"
        }
    },
    {
        id: 2,
        target: "loan",
        category: "简单",
        stem: "Mr. Miller applied for a small business ________ to purchase new kitchen equipment for his restaurant.",
        options: ["loan", "intern", "membership", "networking"],
        correct: "loan",
        explanations: {
            guide: "金融名词考点。applied for a small business ________ 结合采购厨房设备，选 loan（贷款）。",
            family: "loan (n.贷款) | intern (n.实习生) | membership (n.会员资格) | networking (n.人脉拓展)。",
            details: "applied for a loan 意为申请贷款。intern（实习生）、membership（会员）与筹集采购资金无关。",
            cn: "米勒先生申请了一笔小企业贷款，为其餐厅购买新的厨房设备。",
            jp: "ミラー氏はレストランの新しい厨房機器を購入するため、小規模事業者向け融資（loan）を申請しました。"
        }
    },
    {
        id: 3,
        target: "organic",
        category: "简单",
        stem: "The local supermarket carries a wide variety of fresh ________ fruits and vegetables.",
        options: ["organic", "paperless", "nominated", "internship"],
        correct: "organic",
        explanations: {
            guide: "修饰农产品的形容词。修饰 fruits and vegetables（水果和蔬菜），表达“有机的”，选 organic。",
            family: "organic (adj.有机的) | paperless (adj.无纸化的) | nominated (v-ed被体名的) | internship (n.实习)。",
            details: "organic fruits and vegetables 意为有机水果和蔬菜。paperless（无纸化的）不能用来修饰生鲜农产品。",
            cn: "当地超市提供品种繁多的新鲜有机水果和蔬菜。",
            jp: "地元のスーパーマーケットでは、多種多様な新鮮なオーガニック（organic）の果物や野菜を取り扱っています。"
        }
    },
    {
        id: 4,
        target: "packaging",
        category: "简单",
        stem: "The shipping department uses durable ________ to protect fragile items during transit.",
        options: ["packaging", "jewelry", "membership", "orientation"],
        correct: "packaging",
        explanations: {
            guide: "物流设施名词。uses durable ________ 结合保护易碎品（protect fragile items），选 packaging（包装材料）。",
            family: "packaging (n.包装) | jewelry (n.珠宝) | membership (n.会员资格) | orientation (n.培训)。",
            details: "durable packaging 意为耐用的包装。jewelry（珠宝）、membership（会员）非运送易碎物品的保护材料。",
            cn: "运输部门使用耐用的包装材料在运输途中保护易碎物品。",
            jp: "出荷部門は輸送中に壊れやすい品物を保護するため、耐久性のある包装（packaging）を使用しています。"
        }
    },
    {
        id: 5,
        target: "intern",
        category: "简单",
        stem: "The law firm hired a college student as a summer ________ to assist with legal research.",
        options: ["intern", "orientation", "loan", "packaging"],
        correct: "intern",
        explanations: {
            guide: "职场角色名词考点。hired a college student as a summer ________ 表达聘用大学生作为暑期“实习生”，选 intern。",
            family: "intern (n.实习生) | orientation (n.培训) | loan (n.贷款) | packaging (n.包装)。",
            details: "summer intern 意为暑期实习生。orientation（培训）、loan（贷款）均非描述人员身份的名词。",
            cn: "律所聘用了一名大学生担任暑期实习生，协助开展法律研究。",
            jp: "法律事務所は法律調査を支援するため、大学生を夏季インターン（intern）として雇いました。"
        }
    },
    {
        id: 6,
        target: "paperless",
        category: "简单",
        stem: "To reduce waste, the accounting office switched to a ________ billing system.",
        options: ["paperless", "organic", "nominated", "internship"],
        correct: "paperless",
        explanations: {
            guide: "办公与环保形容词。switched to a ________ billing system 结合减少浪费（reduce waste），选 paperless（无纸化的）。",
            family: "paperless (adj.无纸化的) | organic (adj.有机的) | nominated (v-ed被体名的) | internship (n.实习期)。",
            details: "paperless billing system 指无纸化/电子开票系统。organic（有机的）不修饰办公开票系统。",
            cn: "为减少浪费，会计办公室切换到了无纸化开票系统。",
            jp: "廃棄物を削減するため、経理オフィスはペーパーレス（paperless）請求システムに切り替えました。"
        }
    },
    {
        id: 7,
        target: "membership",
        category: "中等",
        stem: "Gym members must present their valid ________ card at the reception desk before entering.",
        options: ["membership", "member", "networking", "loan"],
        correct: "membership",
        explanations: {
            guide: "服务服务复合名词。present their valid ________ card 指在健身房前台出示“会员卡”，选 membership。",
            family: "membership (n.会员身份/资格) | member (n.会员个人) | networking (n.人脉) | loan (n.贷款)。",
            details: "membership card 意为会员卡。member 指会员个人，作前置定语修饰 card 时习惯选用抽象专有名词 membership。",
            cn: "健身房会员在进入前必须在前台出示其有效的会员卡。",
            jp: "ジムの会員は入場する前に、受付で有効な会員（membership）証を提示しなければなりません。"
        }
    },
    {
        id: 8,
        target: "networking",
        category: "中等",
        stem: "Attending industry trade shows provides excellent ________ opportunities for young professionals.",
        options: ["networking", "orientation", "packaging", "jewelry"],
        correct: "networking",
        explanations: {
            guide: "职业发展复合名词定语。________ opportunities 属于商务高频短语，表达建立“人脉/社交”的机会，选 networking。",
            family: "networking (n.人脉拓展/社交) | orientation (n.迎新) | packaging (n.包装) | jewelry (n.珠宝)。",
            details: "networking opportunities 意为建立人脉的机会。orientation（培训）、packaging（包装）均与在行业展会上拓展人脉不匹配。",
            cn: "参加行业贸易展会为年轻专业人士提供了绝佳的人脉拓展机会。",
            jp: "業界の展示会に参加することは、若い専門家にとって素晴らしい人脈作り（networking）の機会となります。"
        }
    },
    {
        id: 9,
        target: "nominate",
        category: "中等",
        stem: "The committee decided to ________ Ms. Davis for the Employee of the Year award.",
        options: ["nominate", "nomination", "orient", "organically"],
        correct: "nominate",
        explanations: {
            guide: "动词不定式考点。decided to 后面接动词原形，表达“提名”戴维斯女士角逐奖项，选 nominate。",
            family: "nominate (v.提名) | nomination (n.提名) | orient (v.使朝向) | organically (adv.有机地)。",
            details: "to nominate sb for an award 意为提名某人角逐奖项。nomination 是名词，不能紧跟在不定式符号 to 后面。",
            cn: "委员会决定提名戴维斯女士角逐年度优秀员工奖。",
            jp: "委員会はデイビス氏を年間最優秀社員賞に指名する（nominate）ことに決めました。"
        }
    },
    {
        id: 10,
        target: "jewelry",
        category: "中等",
        stem: "The high-end retail shop gained fame for its custom handmade ________ crafted from gold and silver.",
        options: ["jewelry", "packaging", "internship", "paperless"],
        correct: "jewelry",
        explanations: {
            guide: "零售品类名词考点。handmade ________ crafted from gold and silver 结合由金银打造，选 jewelry（首饰/珠宝）。",
            family: "jewelry (n.首饰/珠宝) | packaging (n.包装) | internship (n.实习) | paperless (adj.无纸化的)。",
            details: "handmade jewelry 意为手工首饰/珠宝。packaging（包装）、internship（实习）均非用金银加工的商品主体。",
            cn: "这家高端零售店因其用金银打造的定制手工首饰而闻名。",
            jp: "その高級小売店は、金や銀で作られたカスタムメイドの手作り宝飾品（jewelry）で名声を博しました。"
        }
    },
    {
        id: 11,
        target: "intern",
        category: "中等",
        stem: "After successfully completing her summer ________, Sarah was offered a full-time position.",
        options: ["internship", "intern", "orientation", "membership"],
        correct: "internship",
        explanations: {
            guide: "派生名词考点。completing her summer ________ 结构中，物主代词与形容词后接名词，表达完成其暑期“实习期”，选 internship。",
            family: "internship (n.实习期) | intern (n.实习生) | orientation (n.培训) | membership (n.会员)。",
            details: "completing an internship 意为完成实习期。intern 指实习生个人，不能作为被完成（completed）的时间段/流程。",
            cn: "在成功完成暑期实习后，莎拉获得了全职岗位。",
            jp: "夏季インターンシップ（internship）を正常に修了した後、サラはフルタイムの職を提示されました。"
        }
    },
    {
        id: 12,
        target: "organic",
        category: "中等",
        stem: "The brand's customer base grew ________ through positive word-of-mouth recommendations.",
        options: ["organically", "organic", "paperless", "nominated"],
        correct: "organically",
        explanations: {
            guide: "副词修饰不及物动词。grew ________ 结构中，用副词修饰动词 grew，表达客户群“自然地/有机地”增长，选 organically。",
            family: "organically (adv.自然地/有机地) | organic (adj.有机的) | paperless (adj.无纸化的) | nominated (v-ed被体名的)。",
            details: "grew organically 属于商业发展高频词组，意为靠口碑等实现自然增长。organic 是形容词，不能直接修饰动词 grew。",
            cn: "该品牌的客户群通过良好的口口相传实现了自然增长。",
            jp: "同社の顧客基盤は、良好な口コミの推奨を通じて自然に（organically）拡大しました。"
        }
    },
    {
        id: 13,
        target: "nominate",
        category: "困难",
        stem: "The board of directors formally submitted the director's ________ for the prestigious industry prize.",
        options: ["nomination", "nominate", "orientation", "networking"],
        correct: "nomination",
        explanations: {
            guide: "派生名词宾语考点。submitted the director's ________ 结构中，所有格后面接名词形式 nomination（提名书/提名）。",
            family: "nomination (n.提名/提名文件) | nominate (v.提名) | orientation (n.培训) | networking (n.人脉)。",
            details: "submitted the nomination 意为提交了提名。nominate 是动词，不能直接作及物动词 submit 的宾语。",
            cn: "董事会正式提交了该董事角逐这一享誉盛名的行业奖项的提名。",
            jp: "取締役会は、権威ある業界賞に対するその取締役の指名（nomination）を正式に提出しました。"
        }
    },
    {
        id: 14,
        target: "packaging",
        category: "困难",
        stem: "The manufacturer redesigned its product ________ to incorporate recyclable materials.",
        options: ["packaging", "packager", "paperless", "organic"],
        correct: "packaging",
        explanations: {
            guide: "生产与环保名词考点。redesigned its product ________ 表达重新设计其产品“包装”，选 packaging。",
            family: "packaging (n.包装) | packager (n.包装机/打包员) | paperless (adj.无纸化的) | organic (adj.有机的)。",
            details: "product packaging 意为产品包装。packager 指打包工人或包装设备，非被重新设计的包装结构外观。",
            cn: "制造商重新设计了其产品包装，以包含可回收材料。",
            jp: "メーカーはリサイクル可能な素材を取り入れるため、製品の包装（packaging）を再設計しました。"
        }
    },
    {
        id: 15,
        target: "orientation",
        category: "困难",
        stem: "The HR manager organized a highly ________ workshop aimed at aligning team goals with company strategy.",
        options: ["oriented", "orientation", "organically", "nominated"],
        correct: "oriented",
        explanations: {
            guide: "派生形容词/分词定语。a highly ________ workshop 结构中，副词 highly 后面接 oriented，表达“导向明确的/以……为导向的”，选 oriented。",
            family: "oriented (adj.有明确导向的/定向的) | orientation (n.培训/方向) | organically (adv.自然地) | nominated (v-ed被体名的)。",
            details: "a highly oriented workshop 意为目标明确导向的研讨会。orientation 是名词，不能被副词 highly 修饰作为前置定语。",
            cn: "人力资源经理组织了一场导向明确的研讨会，旨在将团队目标与公司战略对齐。",
            jp: "人事マネージャーはチームの目標を会社の戦略に合わせることを目的とした、非常に明確に指向された（oriented）ワークショップを組織しました。"
        }
    },
    {
        id: 16,
        target: "networking",
        category: "困难",
        stem: "The IT department upgraded the corporate ________ infrastructure to support remote employee access.",
        options: ["network", "networking", "paperless", "membership"],
        correct: "network",
        explanations: {
            guide: "IT设施名词定语考点。corporate ________ infrastructure 专指企业“网络”基础设施，选派生/基础名词 network 作定语。",
            family: "network (n.网络) | networking (n.人脉拓展/社交) | paperless (adj.无纸化的) | membership (n.会员)。",
            details: "network infrastructure 意为网络基础设施（硬件/局域网）。networking 特指人脉拓展/社交活动，与 IT 远程访问硬件基础（network）语义不同。",
            cn: "IT 部门升级了公司的网络基础设施，以支持远程员工访问。",
            jp: "IT部門はリモート従業員のアクセスを支援するため、企業のネットワーク（network）インフラをアップグレードしました。"
        }
    },
    {
        id: 17,
        target: "loan",
        category: "困难",
        stem: "Strict banking regulations dictate that all commercial ________ must verify the financial background of applicants.",
        options: ["lenders", "loans", "interns", "memberships"],
        correct: "lenders",
        explanations: {
            guide: "派生机构/人员名词复数。all commercial ________ 结合后文验证申请人财务背景（verify background），选 lenders（放款机构/借贷方）。",
            family: "lenders (n.放款机构/出贷方复数) | loans (n.贷款复数) | interns (n.实习生) | memberships (n.会员)。",
            details: "commercial lenders 指商业放款机构/银行。loans（贷款）是资金金额本身，无法执行“验证财务背景”的动作。",
            cn: "严格的银行法规规定，所有商业放款机构都必须核实申请人的财务背景。",
            jp: "厳格な銀行規制により、すべての商業貸付機関（lenders）は応募者の財務背景を確認しなければなりません。"
        }
    },
    {
        id: 18,
        target: "paperless",
        category: "困难",
        stem: "Moving toward a completely ________ office environment requires significant staff training on digital document management.",
        options: ["paperless", "organic", "oriented", "nominated"],
        correct: "paperless",
        explanations: {
            guide: "高阶商务办公术语。a completely ________ office environment 属于企业数字化转型高频短语，选 paperless（无纸化的）。",
            family: "paperless (adj.无纸化的) | organic (adj.有机的) | oriented (adj.导向的) | nominated (v-ed被体名的)。",
            details: "paperless office environment 意为无纸化办公环境。与后文的 digital document management（数字文档管理）精确对应。",
            cn: "走向完全无纸化的办公环境需要对员工进行大量的数字文档管理培训。",
            jp: "完全にペーパーレスな（paperless）オフィス環境へ移行するには、デジタル文書管理に関するスタッフの大規模な研修が必要です。"
        }
    }
];