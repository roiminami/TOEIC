// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data141-150.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "panel",
        pos: "名",
        ipa: "/ˈpænl/",
        cn: "专家小组，评审小组；控制板，嵌板",
        jp: "（専門家の）委員会、審査団；計器盤、パネル",
        family: "panelist / paneled / paneling",
        tips: "托业会议与招聘高频词：a panel of experts（专家评审小组），panel discussion（专题小组座谈会）；科技与工程场景考 control panel（操作面板）或 solar panel（太阳能电池板）。",
        desc: "A panel of experts judged the contest."
    },
    {
        word: "paper",
        pos: "名/動",
        ipa: "/ˈpeɪpər/",
        cn: "证明文件，证件；研究论文；报纸；纸张",
        jp: "身元証明書、書類；研究論文；新聞；紙",
        family: "paperwork / paperless",
        tips: "多义词重点：复数 papers 常专指官方“身份证明文件/签证材料”（show your papers）；学术及科研报告考 research paper；无纸化办公考 a paperless office；繁琐行政文书考 paperwork。",
        desc: "Please sign these official papers."
    },
    {
        word: "party",
        pos: "名",
        ipa: "/ˈpɑːrti/",
        cn: "当事方，参与方；聚会，宴会；政党",
        jp: "（契約などの）当事者、関係者；パーティー、会合",
        family: "parties / partisan / third-party",
        tips: "商务合同与法律纠纷核心熟词生义：指签约或诉讼的“当事方/参与方”（both parties 双方，a third party 第三方，the injured party 受损方）；亦常考 third-party vendor（第三方供应商）。",
        desc: "Both parties agreed to the contract."
    },
    {
        word: "placement",
        pos: "名",
        ipa: "/ˈpleɪsmənt/",
        cn: "工作安置，职位推介；摆放，广告植入",
        jp: "就職斡旋、人員配置；配置、広告掲載",
        family: "place / placed / replace / placement",
        tips: "职场与营销核心考点：1. 人力资源与高校就业推介服务（job placement / placement office）；2. 营销策略中的广告投放与植入（product placement 植入式广告 / ad placement）。",
        desc: "The university offers job placement help."
    },
    {
        word: "plant",
        pos: "名/動",
        ipa: "/plænt/",
        cn: "工厂，生产车间，发电设备；植物；种植",
        jp: "工場、製造プラント；植物；植える",
        family: "planter / planted / plantation",
        tips: "工业生产与供应链必考熟词生义：manufacturing plant（制造工厂），assembly plant（装配厂），power plant（发电厂），plant manager（厂长），指具象的大型现代化制造基地。",
        desc: "The manufacturing plant is in Ohio."
    },
    {
        word: "play",
        pos: "動/名",
        ipa: "/pleɪ/",
        cn: "发挥（重要作用）；扮演（角色）；戏剧",
        jp: "（役割・機能を）果たす、演じる；演劇",
        family: "player / playful",
        tips: "托业阅读与听力核心动词搭配：play a vital / key / crucial role in...（在……中发挥关键/举足轻重的作用），等同于 serve an important function in...",
        desc: "Technology plays a vital role here."
    },
    {
        word: "pose",
        pos: "動/名",
        ipa: "/poʊz/",
        cn: "造成，引起，构成（风险/威胁/挑战）；姿势",
        jp: "（脅威・危険・問題を）もたらす、引き起こす；ポーズ",
        family: "posed / posing",
        tips: "高阶商业动词搭配：指某些不良情况对企业“造成威胁/构成挑战”（pose a threat / risk / challenge / dilemma to...），后接名词宾语表示潜在负面影响。",
        desc: "The delay poses a serious risk."
    },
    {
        word: "post",
        pos: "名/動",
        ipa: "/poʊst/",
        cn: "职位，岗位；派驻，派任；张贴，公布",
        jp: "職、役職；（人を）配属する、派遣する；掲示する",
        family: "poster / posting / posted",
        tips: "多重核心考点：作名词指职衔（apply for the post）；作动词指在内网公布信息（post updates）；高阶动词被动语态指人员外派（be posted overseas / to London 被派驻到某地任职）。",
        desc: "He applied for the management post."
    },
    {
        word: "power",
        pos: "名/動",
        ipa: "/ˈpaʊər/",
        cn: "电力，能源；职权，法定权力；驱动，提供动力",
        jp: "電力、動力；権限、権力；〜に動力を供給する",
        family: "powerful / powerhouse / powered / powerless",
        tips: "核心多义考点：1. 能源与停电（power outage / renewable power）；2. 法律与授权（power of attorney 授权委托书）；3. 动词被动语态（is powered by 由……驱动）。",
        desc: "The factory runs on solar power."
    },
    {
        word: "practice",
        pos: "名/動",
        ipa: "/ˈpræktɪs/",
        cn: "惯例，常规做法；执业，事务所（律所/诊所）；练习",
        jp: "（ビジネス上の）慣習、慣例；（医師・弁護士の）開業、業務；練習",
        family: "practitioner / practical / practiced",
        tips: "职场与企业运营核心词：standard practice（行业惯例/常规做法），best practices（行业最佳实践）；专业服务指医生或律师执业（legal/medical practice）；practitioner 指执业专员。",
        desc: "Safety is standard practice here."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "plant",
        category: "简单",
        stem: "The automobile manufacturer decided to construct a state-of-the-art assembly ________ in the suburban industrial district.",
        options: ["plant", "planting", "party", "pose"],
        correct: "plant",
        explanations: {
            guide: "工业制造复合名词搭配。assembly 与 plant 构成托业最常见的工业固定专有名词 assembly plant，意为“装配厂/制造车间”，选名词 plant。",
            family: "plant (n.工厂/制造基地) | planting (n.种植) | party (n.当事方) | pose (v.构成)。",
            details: "assembly plant 指汽车或机械总装工厂。planting 是动名词，无法与 assembly 构成表示生产制造设施的固定专业术语。",
            cn: "该汽车制造商决定在郊区工业区建造一座先进的汽车装配厂。",
            jp: "その自動車メーカーは、郊外の工業地区に最先端の組立工場（assembly plant）を建設することを決定しました。"
        }
    },
    {
        id: 2,
        target: "party",
        category: "简单",
        stem: "Confidential corporate financial data must not be disclosed to any third ________ without express written authorization.",
        options: ["party", "parties", "placement", "power"],
        correct: "party",
        explanations: {
            guide: "商务法律与保密协议核心专有短语。any third ________ 结构中，限定词 any 与序数词 third 之后接单数名词 party，third party 意为“第三方”，选 party。",
            family: "party (n.当事方/第三方) | parties (n.复数当事方) | placement (n.安置) | power (n.权力/电力)。",
            details: "third party 是信息保密条款核心术语。parties 是复数，受 any third 修饰时单数形式更严谨，且通常固定表达为 third party。",
            cn: "未经书面明确授权，严禁向任何第三方透露公司的机密财务数据。",
            jp: "書面による明確な許可がない限り、機密の企業財務データをいかなる第三者（third party）にも開示してはなりません。"
        }
    },
    {
        id: 3,
        target: "panel",
        category: "简单",
        stem: "A ________ of independent financial auditors was assembled to inspect the municipal agency's annual accounting records.",
        options: ["panel", "panelist", "plant", "post"],
        correct: "panel",
        explanations: {
            guide: "集体名词与量词短语搭配。a ________ of independent auditors 结构中，a panel of 属于固定搭配，意为“一组/一个由……组成的专家评审小组”，选 panel。",
            family: "panel (n.专家评审小组) | panelist (n.小组成员/嘉宾) | plant (n.工厂) | post (n.职位)。",
            details: "a panel of auditors 指一个审计专员小组。panelist 指小组中的某一位个体成员，无法直接跟在量词短语 a panelist of 之后修饰复数名词 auditors。",
            cn: "一个由独立财务审计员组成的专家小组已集结完毕，以审查该市政机构的年度会计账目。",
            jp: "自治体機関の年次会計記録を検査するために、独立した財務監査人のパネル・委員会（panel）が招集されました。"
        }
    },
    {
        id: 4,
        target: "power",
        category: "简单",
        stem: "The data center is equipped with industrial generators to prevent hardware failure during a sudden ________ outage.",
        options: ["power", "powerful", "paper", "play"],
        correct: "power",
        explanations: {
            guide: "电力设施核心复合名词专属搭配。power outage 是公用事业与设施运维高频短语，意为“停电/供电中断”，选名词 power 修饰 outage。",
            family: "power (n.电力/能源) | powerful (adj.强有力的) | paper (n.文件) | play (v.扮演)。",
            details: "power outage 属于标准工业表达。powerful 是形容词（强有力的），修饰 outage（断电）在逻辑和词汇搭配上均不成立。",
            cn: "该数据中心配备了工业发电机，以防止在突然停电期间发生硬件故障。",
            jp: "データセンターには、突然の停電（power outage）時のハードウェア障害を防ぐために、産業用発電機が備え付けられています。"
        }
    },
    {
        id: 5,
        target: "play",
        category: "简单",
        stem: "Effective cross-departmental collaboration will ________ a crucial role in securing the international certification.",
        options: ["play", "player", "pose", "practice"],
        correct: "play",
        explanations: {
            guide: "情态动词后的动词原形与固定短语。will 后面接动词原形，play a crucial role in... 属于托业最高频动宾搭配，意为“在……中发挥关键作用”，选 play。",
            family: "play (v.发挥作用/扮演) | player (n.参与者/选手) | pose (v.构成) | practice (n.惯例)。",
            details: "play a role in 是托业阅读常见句型。player 是名词，不能跟在情态动词 will 之后充当谓语动词原形。",
            cn: "高效的跨部门协作将在获得该项国际认证中发挥至关重要的作用。",
            jp: "部門間の効果的な連携は、国際認証の取得において極めて重要な役割を果たす（play）ことになります。"
        }
    },
    {
        id: 6,
        target: "post",
        category: "简单",
        stem: "The human resources coordinator will ________ the finalized corporate holiday calendar on the employee intranet today.",
        options: ["post", "poster", "placement", "party"],
        correct: "post",
        explanations: {
            guide: "情态动词后的及物动词用法。情态动词 will 后面需要接动词原形，post the calendar on the intranet 意为在内网“张贴/发布”日程，选 post。",
            family: "post (v.发布/张贴/n.职位) | poster (n.海报) | placement (n.安置) | party (n.当事方)。",
            details: "will post 是标准一般将来时谓语结构。poster 是名词（海报），无法充当带宾语 calendar 的核心动词。",
            cn: "人力资源协调员将于今天在员工内部网络上发布最终定稿的公司节假日日历。",
            jp: "人事コーディネーターは、本日、社員ポータル上に確定した企業休暇カレンダーを掲載（post）する予定です。"
        }
    },
    {
        id: 7,
        target: "pose",
        category: "中等",
        stem: "Unexpected increases in global container shipping rates could ________ a serious financial risk to regional exporters.",
        options: ["pose", "posing", "plant", "paper"],
        correct: "pose",
        explanations: {
            guide: "情态动词后的动词熟词生义与搭配。情态动词 could 后面需要接动词原形，pose a risk to... 意为“对……构成财务风险”，选动词原形 pose。",
            family: "pose (v.构成/造成风险) | posing (现在分词) | plant (n.工厂) | paper (n.文件)。",
            details: "pose a risk / threat 是企业风险评估专有名词搭配。posing 为分词形式，不能直接在情态动词 could 后作谓语动词原形。",
            cn: "全球集装箱海运费率的意外上涨可能会给区域出口商构成严重的财务风险。",
            jp: "世界的なコンテナ輸送運賃の予期せぬ上昇は、地域の輸出企業にとって深刻な財務リスクをもたらす（pose）可能性があります。"
        }
    },
    {
        id: 8,
        target: "practice",
        category: "中等",
        stem: "It is standard corporate ________ for the internal audit department to review travel expense reports every month.",
        options: ["practice", "practical", "panel", "placement"],
        correct: "practice",
        explanations: {
            guide: "企业规章制度核心名词搭配。standard corporate ________ 结构中，形容词 corporate 修饰名词，standard practice 属于固定表达，意为“常规做法/标准惯例”，选 practice。",
            family: "practice (n.惯例/常规做法) | practical (adj.实用的) | panel (n.专家组) | placement (n.安置)。",
            details: "standard practice 指遵循的既定规则与惯例。practical 是形容词，不能作表语从句中的名词中心词。",
            cn: "内部审计部门每月审核差旅费用报销报告，这是公司的常规做法。",
            jp: "内部監査部門が毎月出張経費報告書を審査することは、企業の標準的な慣行（standard practice）です。"
        }
    },
    {
        id: 9,
        target: "paper",
        category: "中等",
        stem: "All overseas transfer personnel must present their official identification ________ to the border control officer upon arrival.",
        options: ["papers", "paperwork", "parties", "powers"],
        correct: "papers",
        explanations: {
            guide: "名词熟词生义与复数专有含义。identification ________ 结构中，papers 复数专指“身份证明文件/证件”，选 papers。",
            family: "papers (n.证件/证明文件/复数) | paperwork (n.文书工作/不可数) | parties (n.当事方) | powers (n.权力)。",
            details: "identification papers 是出入境与身份核查的标准专属词汇。paperwork 指日常填表等文书工作，不用于指代随身携带出示的具体证件。",
            cn: "所有外派调动人员在抵达时必须向边检官员出示其官方身份证明文件。",
            jp: "すべての海外異動要員は、到着時に入国審査官に公式の身元証明書類（identification papers）を提示しなければなりません。"
        }
    },
    {
        id: 10,
        target: "placement",
        category: "中等",
        stem: "The technical institute’s career center provides dedicated job ________ assistance to graduates entering the robotics field.",
        options: ["placement", "place", "practice", "post"],
        correct: "placement",
        explanations: {
            guide: "人力资源与就业指导专属复合短语。job placement 是托业招聘与职业发展高频专有名词，意为“工作安置/职位推荐”，选名词 placement。",
            family: "placement (n.就业推介/安置) | place (v./n.放置/地方) | practice (n.惯例) | post (n.职位)。",
            details: "job placement assistance 指毕业生就业推荐协助服务。place 是动词或普通地点名词，无法与 job 组成规范的就业服务术语。",
            cn: "该技术学院的职业发展中心为进入机器人领域的毕业生提供专门的就业推荐协助。",
            jp: "その技術学校のキャリアセンターは、ロボット工学分野に進出する卒業生に専任の就職斡旋（job placement）支援を提供しています。"
        }
    },
    {
        id: 11,
        target: "party",
        category: "中等",
        stem: "After protracted negotiations, both ________ to the joint venture agreement finalized the operational timelines.",
        options: ["parties", "party", "panels", "plants"],
        correct: "parties",
        explanations: {
            guide: "限定词与名词复数及法律主谓一致。both 后面必须接可数名词复数，both parties to the agreement 意为“协议双方/双方法人当事方”，选 parties。",
            family: "parties (n.当事各方/复数) | party (n.当事方/单数) | panels (n.专家组) | plants (n.工厂)。",
            details: "both parties to the contract/agreement 是商业合同签署的核心句式。party 是单数，不能直接接在 both 后面充当复数主语中心词。",
            cn: "经过长期的谈判，合资协议的双方最终敲定了日常运营的时间表。",
            jp: "長期にわたる交渉の末、合弁事業契約の双方の当事者（both parties）は業務スケジュールを最終確定しました。"
        }
    },
    {
        id: 12,
        target: "power",
        category: "中等",
        stem: "The state-of-the-art environmental monitoring sensor is ________ by an integrated solar cell module.",
        options: ["powered", "power", "played", "posed"],
        correct: "powered",
        explanations: {
            guide: "被动语态与动词用法。is ________ by 结构中，需要过去分词构成被动语态，power 作动词意为“为……提供动力/供电”，is powered by 意为“由……驱动/供能”，选 powered。",
            family: "powered (adj./v-ed由…供电驱动的) | power (n.电力/v.供电) | played (v-ed扮演) | posed (v-ed造成)。",
            details: "is powered by solar cells 属于绿色环保与工程技术的标准表达。power 原形不能直接跟在系动词 is 后面构成被动语态。",
            cn: "这款先进的环境监测传感器由集成的太阳能电池组件提供电力驱动。",
            jp: "その最先端の環境監視センサーは、一体型の太陽電池モジュールによって電力を供給（powered）されています。"
        }
    },
    {
        id: 13,
        target: "pose",
        category: "困难",
        stem: "Severe component supply chain bottlenecks have worsened across the region, ________ a critical operational challenge for electronics firms.",
        options: ["posing", "posed", "power", "practice"],
        correct: "posing",
        explanations: {
            guide: "非谓语动词伴随/结果状语。句子主干完整（bottlenecks have worsened），逗号后需要现在分词短语作自然结果状语，表示“从而构成了严峻挑战”，选 posing。",
            family: "posing (现在分词作结果状语) | posed (过去分词) | power (n.电力) | practice (n.惯例)。",
            details: "supply shortages worsened ..., posing a challenge 是托业长篇政经报道的经典结构。posed 为过去分词，在此处缺少逻辑被动关系；power 和 practice 无法引导此状语短语。",
            cn: "该地区关键零部件供应链瓶颈日益恶化，给电子企业构成了极其严峻的运营挑战。",
            jp: "深刻な部品サプライチェーンのボトルネックが地域全体で悪化し、電子機器企業に重大な事業上の課題をもたらして（posing）います。"
        }
    },
    {
        id: 14,
        target: "practice",
        category: "困难",
        stem: "The regional environmental protection council published a technical manual outlining best industrial ________ for wastewater management.",
        options: ["practices", "practical", "placements", "panels"],
        correct: "practices",
        explanations: {
            guide: "企业运营管理核心专有搭配。best practices 是工商管理、质量认证与环境保护场景中极高频的专有名词，意为“最佳实践/行业最优做法”，固定使用复数，选 practices。",
            family: "practices (n.最佳实践/业务惯例/复数) | practical (adj.实用的) | placements (n.安置) | panels (n.专家组)。",
            details: "best industrial practices 专指经过实践检验的最优行业操作规程。practical 是形容词，无法作限定词 best 后的核心名词；placements 含义不符。",
            cn: "区域环境保护委员会发布了一本技术手册，概述了废水管理的工业最佳实践指南。",
            jp: "地域環境保護協議会は、廃水管理に関する産業上の最善の慣行（best practices）を概説した技術マニュアルを発行しました。"
        }
    },
    {
        id: 15,
        target: "post",
        category: "困难",
        stem: "After completing four consecutive years of outstanding field service, Mr. Tanaka was ________ to the international headquarters in Zurich.",
        options: ["posted", "posting", "posed", "played"],
        correct: "posted",
        explanations: {
            guide: "动词高阶熟词生义与被动语态。was ________ to 结构中，post 作及物动词可表示“派遣/派驻（人员到某地任职）”，be posted to 意为“被派驻到……”，选过去分词 posted。",
            family: "posted (v-ed被派驻/任职) | posting (n.调派/外派职务) | posed (v-ed引起) | played (v-ed扮演)。",
            details: "be posted overseas / to a branch 是外企人事调动的高阶正式用语。posting 是动名词或名词，不能与助动词 was 构成过去被动语态谓语。",
            cn: "在圆满完成连续四年的出色现场服务后，田中先生被派驻至位于苏黎世的国际总部工作。",
            jp: "4年連続の見事な現場勤務を終えた後、田中氏はチューリッヒの国際本部に配属（posted）されました。"
        }
    },
    {
        id: 16,
        target: "placement",
        category: "困难",
        stem: "The marketing agency reserved a substantial portion of its campaign budget for strategic product ________ in major motion pictures.",
        options: ["placement", "placing", "paper", "party"],
        correct: "placement",
        explanations: {
            guide: "营销传播专属复合名词。product placement 是现代商业广告宣传的核心专属术语，意为“植入式广告/产品置入”，空格处需填入名词 placement。",
            family: "placement (n.广告植入/安置) | placing (动名词) | paper (n.文件) | party (n.当事方)。",
            details: "product placement 指在电影或电视剧中展示赞助商品牌。placing 虽然是动名词，但在商业术语中固定表达专有名词为 product placement。",
            cn: "该营销机构保留了相当大一部分宣传活动预算，用于在主流院线电影中进行战略性产品植入广告。",
            jp: "そのマーケティング代理店は、主要な映画での戦略的なプロダクト・プレイスメント（product placement：商品露出・広告植入）のためにキャンペーン予算の大部分を確保しました。"
        }
    },
    {
        id: 17,
        target: "paper",
        category: "困难",
        stem: "By converting to a completely ________ documentation workflow, the accounting firm reduced annual physical storage expenditures.",
        options: ["paperless", "paper", "powerless", "practiced"],
        correct: "paperless",
        explanations: {
            guide: "派生形容词作定语修饰名词。a completely ________ documentation workflow 结构中，副词 completely 修饰形容词，paperless workflow 意为“无纸化流程”，选派生形容词 paperless。",
            family: "paperless (adj.无纸化的/数字化的) | paper (n.纸张/文件) | powerless (adj.无能为力的) | practiced (adj.熟练的)。",
            details: "a paperless office / workflow 是现代数字化转型的高频考点。paper 是名词，无法被程度副词 completely 直接修饰来担当定语形容词。",
            cn: "通过转向完全无纸化的文件工作流程，该会计师事务所降低了每年的实体档案仓储支出。",
            jp: "完全にペーパーレス（paperless）な文書ワークフローに移行することにより、その会計事務所は年間の物理的保管費用を削減しました。"
        }
    },
    {
        id: 18,
        target: "panel",
        category: "困难",
        stem: "Dr. Evans was officially invited to participate as a distinguished ________ in the panel discussion on renewable infrastructure.",
        options: ["panelist", "panel", "player", "party"],
        correct: "panelist",
        explanations: {
            guide: "人物名词考点与同源词辨析。as a distinguished ________ 结构中，形容词 distinguished（杰出的）后面需要接表示“人”的单数可数名词，指专题座谈会的“专题讨论小组成员/嘉宾”，选 panelist。",
            family: "panelist (n.专题讨论小组成员/嘉宾) | panel (n.专家小组/控制板) | player (n.参与者) | party (n.当事方)。",
            details: "a panelist in the panel discussion 指座谈会讨论嘉宾。panel 指整个专家集体而非受邀的个人，不能用 a distinguished panel 指代单数个人身份。",
            cn: "埃文斯博士受正式邀请，作为杰出讨论嘉宾参加关于可再生基础设施的专题小组研讨会。",
            jp: "エヴァンス博士は、再生可能インフラに関するパネルディスカッションに著名なパネリスト（panelist）として参加するよう正式に招待されました。"
        }
    }
];