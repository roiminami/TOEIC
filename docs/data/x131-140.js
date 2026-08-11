// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data281-290.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "humidifier",
        pos: "名",
        ipa: "/hjuːˈmɪdɪfaɪər/",
        cn: "加湿器",
        jp: "加湿器",
        family: "humid / humidity / humidify",
        tips: "Part 1 & 办公设施高频：turn on the humidifier（打开加湿器）。",
        desc: "The humidifier is running."
    },
    {
        word: "vicinity",
        pos: "名",
        ipa: "/vəˈsɪnəti/",
        cn: "附近，邻近",
        jp: "近所、周辺",
        family: "vicinage",
        tips: "听力与阅读高频搭配：in the vicinity of...（在……附近）。",
        desc: "Shops are in the vicinity."
    },
    {
        word: "errand",
        pos: "名",
        ipa: "/ˈerənd/",
        cn: "差事，跑腿",
        jp: "用事、使い",
        family: "errands",
        tips: "日常办公与生活高频：run an errand / run errands（办差事/跑腿）。",
        desc: "She ran a quick errand."
    },
    {
        word: "solicit",
        pos: "動",
        ipa: "/səˈlɪsɪt/",
        cn: "征求，招揽，请求",
        jp: "要請する、勧誘する",
        family: "solicitation / solicitor / solicitous",
        tips: "商务沟通高频：solicit feedback/donations（征求反馈/招揽捐款）。",
        desc: "They solicit client feedback."
    },
    {
        word: "perishable",
        pos: "形/名",
        ipa: "/ˈperɪʃəbl/",
        cn: "易腐烂的，易变质的",
        jp: "傷みやすい、生鮮の",
        family: "perish / perishables / imperishable",
        tips: "物流与食品高频：perishable goods/food（易腐食品/生鲜）。",
        desc: "Perishable goods need refrigeration."
    },
    {
        word: "drape",
        pos: "動/名",
        ipa: "/dreɪp/",
        cn: "悬挂，遮盖；窗帘",
        jp: "（布を）かける；カーテン",
        family: "drapes / drapery / draped",
        tips: "Part 1 高频：draped over the chair（挂在椅子上）/ Heavy drapes（厚窗帘）。",
        desc: "A cloth is draped over."
    },
    {
        word: "crouch",
        pos: "動",
        ipa: "/kraʊtʃ/",
        cn: "蹲下，蹲伏",
        jp: "かがむ、しゃがむ",
        family: "crouching / crouched",
        tips: "Part 1 人物姿态高频：crouching down to inspect（蹲下检查）。",
        desc: "He crouched on the floor."
    },
    {
        word: "circulation",
        pos: "名",
        ipa: "/ˌsɜːrkjəˈleɪʃn/",
        cn: "发行量；循环，流通",
        jp: "発行部数、循環、流通",
        family: "circulate / circulatory / circular",
        tips: "出版与商业高频：daily circulation（每日发行量），increase circulation（扩大发行量/流通）。",
        desc: "The newspaper has high circulation."
    },
    {
        word: "archeology",
        pos: "名",
        ipa: "/ˌɑːrkiˈɑːlədʒi/",
        cn: "考古学",
        jp: "考古学",
        family: "archeologist / archeological",
        tips: "学术与展出高频：archeology exhibit（考古学展览），archeological site（考古遗址）。",
        desc: "He studies ancient archeology."
    },
    {
        word: "trustee",
        pos: "名",
        ipa: "/trʌˈstiː/",
        cn: "理事，托管人，受托人",
        jp: "評議員、理事、受託者",
        family: "trust / trustful / trusteeship",
        tips: "机构管理高频：board of trustees（理事会），trustee meeting（理事会议）。",
        desc: "The trustee signed the agreement."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "humidifier",
        category: "简单",
        stem: "To increase room moisture during dry winter months, the office installed a new ________.",
        options: ["humidifier", "vicinity", "errand", "trustee"],
        correct: "humidifier",
        explanations: {
            guide: "办公设备名词考点。根据增加室内湿度（increase room moisture）的语境，设备选 humidifier（加湿器）。",
            family: "humidifier (n.加湿器) | vicinity (n.附近) | errand (n.差事) | trustee (n.理事)。",
            details: "installed a new humidifier 意为安装了新加湿器。vicinity（附近）、errand（差事）均非室内调节湿度的机械设备。",
            cn: "为了在干燥的冬季增加室内湿度，办公室安装了一台新加湿器。",
            jp: "乾燥する冬の時期に室内の湿度を上げるため、オフィスは新しい加湿器（humidifier）を設置しました。"
        }
    },
    {
        id: 2,
        target: "perishable",
        category: "简单",
        stem: "All ________ items, such as fresh milk and yogurt, should be stored in the refrigerator immediately.",
        options: ["perishable", "perish", "circulation", "archeology"],
        correct: "perishable",
        explanations: {
            guide: "修饰名词的形容词。修饰 items 且后文举例为鲜奶和酸奶（fresh milk and yogurt），选 perishable（易腐烂的/易变质的）。",
            family: "perishable (adj.易腐烂的) | perish (v.腐烂/死亡) | circulation (n.发行量) | archeology (n.考古学)。",
            details: "perishable items 指易腐食品/生鲜。perish 是动词，不能直接作 items 的前置修饰语。",
            cn: "所有易腐食品（如鲜牛奶和酸奶）都应立即存放在冰箱中。",
            jp: "牛乳やヨーグルトなどの傷みやすい（perishable）品目は、すぐに冷蔵庫に保管してください。"
        }
    },
    {
        id: 3,
        target: "errand",
        category: "简单",
        stem: "The administrative assistant briefly stepped out of the office to run a personal ________.",
        options: ["errand", "trustee", "solicit", "humidifier"],
        correct: "errand",
        explanations: {
            guide: "固定动词短语。run a personal ________ 属于日常与办公高频表达，意为“办私事/跑腿”，选 errand。",
            family: "errand (n.差事/跑腿) | trustee (n.理事) | solicit (v.征求) | humidifier (n.加湿器)。",
            details: "run an errand 意为办差事/跑腿。trustee（理事）、solicit（征求）均不与 run 搭配构成办差事之意。",
            cn: "行政助理短暂离开办公室去办一件私人差事。",
            jp: "行政アシスタントは個人的な用事（errand）を済ませるため、短時間オフィスを外に出ました。"
        }
    },
    {
        id: 4,
        target: "crouch",
        category: "简单",
        stem: "The maintenance worker had to ________ down to inspect the pipes beneath the sink.",
        options: ["crouch", "crouching", "drape", "circulation"],
        correct: "crouch",
        explanations: {
            guide: "情态动词短语。had to 后面接动词原形，结合 down 构成 crouch down，表达“蹲下”检查水槽下的管道，选 crouch。",
            family: "crouch (v.蹲下) | crouching (v-ing) | drape (v.悬挂) | circulation (n.循环)。",
            details: "crouch down 意为蹲下身。crouching 为分词形式，不能跟在 had to 之后作原形动词。",
            cn: "维修工人不得不蹲下身来检查水槽下方的管道。",
            jp: "メンテナンス作業員はシンク下の配管を点検するため、かがむ（crouch）必要がありました。"
        }
    },
    {
        id: 5,
        target: "vicinity",
        category: "简单",
        stem: "Several popular restaurants and cafes are located in the immediate ________ of the hotel.",
        options: ["vicinity", "errand", "trustee", "archeology"],
        correct: "vicinity",
        explanations: {
            guide: "高频介词短语搭配。in the immediate ________ of... 属于托业经典句型，意为“在……的紧邻附近”，选 vicinity。",
            family: "vicinity (n.附近/邻近) | errand (n.差事) | trustee (n.理事) | archeology (n.考古学)。",
            details: "in the vicinity of 意为在……附近。errand（差事）、trustee（受托人）均不能与 in the... of 构成方位短语。",
            cn: "几家受欢迎的餐厅和咖啡馆就位于酒店的紧邻附近。",
            jp: "いくつかの人気レストランやカフェが、ホテルのすぐ近く（vicinity）に位置しています。"
        }
    },
    {
        id: 6,
        target: "trustee",
        category: "简单",
        stem: "The board of ________ held an extraordinary meeting to vote on the museum's annual budget.",
        options: ["trustees", "trustee", "circulation", "solicit"],
        correct: "trustees",
        explanations: {
            guide: "机构管理固定短语。the board of ________ 意为“理事会/董事会”，接复数名词 trustees。",
            family: "trustees (n.复数理事) | trustee (n.单数理事) | circulation (n.发行量) | solicit (v.征求)。",
            details: "board of trustees 属于固定专有名词搭配，必须使用复数形式 trustees，指代集体理事成员。",
            cn: "理事会召开特别会议，对博物馆的年度预算进行投票。",
            jp: "評議員会（board of trustees）は、美術館の年次予算について投票するため臨時会議を開催しました。"
        }
    },
    {
        id: 7,
        target: "solicit",
        category: "中等",
        stem: "The non-profit foundation launched a campaign to ________ donations from corporate sponsors.",
        options: ["solicit", "solicitation", "drape", "perishable"],
        correct: "solicit",
        explanations: {
            guide: "动词不定式考点。launched a campaign to 后面接动词原形，表达“招揽/征求”捐款，选 solicit。",
            family: "solicit (v.征求/招揽) | solicitation (n.征求) | drape (v.悬挂) | perishable (adj.易腐的)。",
            details: "to solicit donations 意为募集/招揽捐款。solicitation 是名词，不能跟在不定式符号 to 后面。",
            cn: "该非营利基金会发起了一场活动，向企业赞助商募集捐款。",
            jp: "非営利財団は企業スポンサーから寄付を募る（solicit）ためのキャンペーンを開始しました。"
        }
    },
    {
        id: 8,
        target: "circulation",
        category: "中等",
        stem: "The monthly business magazine boosted its readership and total ________ by expanding digital subscriptions.",
        options: ["circulation", "circulate", "vicinity", "trustee"],
        correct: "circulation",
        explanations: {
            guide: "出版行业核心名词。boosted its readership and total ________ 表达提升期刊的“发行量”，选 circulation。",
            family: "circulation (n.发行量/流通) | circulate (v.循环/发行) | vicinity (n.附近) | trustee (n.理事)。",
            details: "total circulation 指总发行量。circulate 是动词，不能作及物动词 boosted 的宾语。",
            cn: "该月刊商业杂志通过扩大数字订阅，提高了其读者人数和总发行量。",
            jp: "月刊ビジネス誌は、デジタル購読を拡大することで読者数と総発行部数（circulation）を伸ばしました。"
        }
    },
    {
        id: 9,
        target: "drape",
        category: "中等",
        stem: "Decorators decided to ________ elegant velvet curtains over the large conference room windows.",
        options: ["drape", "draped", "crouch", "solicit"],
        correct: "drape",
        explanations: {
            guide: "动词不定式与动作搭配。decided to 后面接动词原形，表达把窗帘“悬挂/披盖”在窗户上，选 drape。",
            family: "drape (v.悬挂/披盖) | draped (v-ed) | crouch (v.蹲下) | solicit (v.征求)。",
            details: "to drape curtains over... 意为把窗帘悬挂覆盖在……上。draped 为过去式/分词，不能跟在 to 后面。",
            cn: "装饰师决定在大会议室的窗户上悬挂典雅的丝绒窗帘。",
            jp: "コーディネーターは、大きな会議室の窓にエレガントなベルベットのカーテンを掛ける（drape）ことに決めました。"
        }
    },
    {
        id: 10,
        target: "archeology",
        category: "中等",
        stem: "The university department organized an excavation project focused on regional biblical ________.",
        options: ["archeology", "archeologist", "errand", "perishable"],
        correct: "archeology",
        explanations: {
            guide: "学术学科名词考点。focused on regional biblical ________ 表达专注于区域圣经“考古学”，选 archeology。",
            family: "archeology (n.考古学) | archeologist (n.考古学家) | errand (n.差事) | perishable (adj.易腐的)。",
            details: "biblical archeology 意为圣经考古学。archeologist 指考古学家个人，非学科研究领域名称。",
            cn: "大学系所组织了一项专注于区域圣经考古学发掘的项目。",
            jp: "大学の学部は、地域の聖書考古学（archeology）に焦点を当てた発掘プロジェクトを組織しました。"
        }
    },
    {
        id: 11,
        target: "perishable",
        category: "中等",
        stem: "Cold storage facilities are critical for preventing the spoilage of highly ________ cargo.",
        options: ["perishable", "perishables", "circulation", "vicinity"],
        correct: "perishable",
        explanations: {
            guide: "物流运输形容词考点。highly ________ cargo 结构中，副词 highly 后面接形容词修饰货物，选 perishable（易腐烂的）。",
            family: "perishable (adj.易腐烂的) | perishables (n.复数易腐品) | circulation (n.流通) | vicinity (n.附近)。",
            details: "highly perishable cargo 指高度易腐烂的货物。perishables 为复数名词，不能在此作修饰 cargo 的定语。",
            cn: "冷藏设施对于防止高度易腐货物的变质至关重要。",
            jp: "冷たい保管施設は、極めて傷みやすい（perishable）貨物の痛みを防ぐために不可欠です。"
        }
    },
    {
        id: 12,
        target: "solicit",
        category: "中等",
        stem: "Organizers sent out formal survey forms to ________ constructive feedback from event participants.",
        options: ["solicit", "solicitor", "trustee", "humidifier"],
        correct: "solicit",
        explanations: {
            guide: "商务调查动词考点。sent survey forms to 后面接动词原形，表达“征求/收集”反馈意见，选 solicit。",
            family: "solicit (v.征求/招揽) | solicitor (n.法务官/律师) | trustee (n.理事) | humidifier (n.加湿器)。",
            details: "solicit constructive feedback 属于商务高频搭配，意为征求建设性反馈。solicitor 是名词（律师/法务官）。",
            cn: "组织者发送了正式调查表，以征求活动参与者的建设性反馈。",
            jp: "主催者は、イベント参加者から建設的なフィードバックを募る（solicit）ために正式な調査票を送付しました。"
        }
    },
    {
        id: 13,
        target: "circulation",
        category: "困难",
        stem: "Financial regulators warned that restriction of currency ________ could destabilize the domestic banking sector.",
        options: ["circulation", "circulatory", "archeology", "solicitation"],
        correct: "circulation",
        explanations: {
            guide: "高阶金融金融名词考点。currency ________ 属于金融专有名词，意为“货币流通/货币发行量”，选 circulation。",
            family: "circulation (n.流通/发行量) | circulatory (adj.循环的) | archeology (n.考古学) | solicitation (n.征求)。",
            details: "currency circulation 意为货币流通/资金循环。circulatory 是生物学“血液循环的”形容词，非金融名词。",
            cn: "金融监管机构警告说，限制货币流通可能会破坏国内银行业的稳定。",
            jp: "金融規制当局は、通貨の流通（circulation）を制限することが国内の銀行部門を不安定化させる可能性があると警告しました。"
        }
    },
    {
        id: 14,
        target: "drape",
        category: "困难",
        stem: "Heavy decorative ________ were hung across the theater entrance to block external light.",
        options: ["drapes", "drape", "crouching", "perishables"],
        correct: "drapes",
        explanations: {
            guide: "名词复数与设施考点。Heavy decorative ________ were hung... 结构中，谓语为复数 were hung，指挂在剧院入口的厚“窗帘/挂帘”，选 drapes。",
            family: "drapes (n.复数窗帘/挂帘) | drape (v./n.单数) | crouching (v-ing) | perishables (n.易腐品)。",
            details: "heavy drapes 意为厚重的悬挂窗帘/布帘。结合谓语动词 were hung，须选用复数形式 drapes。",
            cn: "剧院入口处挂着厚重的装饰窗帘，以遮挡外部光线。",
            jp: "外部の光を遮るため、劇場の入口には重厚な装飾カーテン（drapes）が掛けられていました。"
        }
    },
    {
        id: 15,
        target: "trustee",
        category: "困难",
        stem: "The university's board of ________ exercised its fiduciary responsibility by approving the land acquisition.",
        options: ["trustees", "trusteeship", "vicinity", "errand"],
        correct: "trustees",
        explanations: {
            guide: "机构管理高阶名词。board of ________ 属于固定专有名词，意为大学“理事会”，选复数 trustees。",
            family: "trustees (n.复数理事) | trusteeship (n.托管职位/托管权) | vicinity (n.附近) | errand (n.差事)。",
            details: "board of trustees 专指大学或非营利机构的理事会。trusteeship 意为托管权/受托管理职责，不指代集体人称。",
            cn: "大学理事会通过批准土地收购项目行使其受托责任。",
            jp: "大学の評議員会（board of trustees）は、土地買収を承認することで受託者责任を行使しました。"
        }
    },
    {
        id: 16,
        target: "archeology",
        category: "困难",
        stem: "Researchers uncovered ancient artifacts during a major ________ survey near the river valley.",
        options: ["archeological", "archeology", "soliciting", "perishable"],
        correct: "archeological",
        explanations: {
            guide: "派生形容词考点。修饰 survey（勘探/调查），表达“考古学勘探/考古调查”，选形容词 archeological。",
            family: "archeological (adj.考古学的) | archeology (n.考古学) | soliciting (v-ing) | perishable (adj.易腐的)。",
            details: "archeological survey 意为考古勘探/调查。archeology 是名词，在此处修饰 survey 时规范用法选用派生形容词 archeological。",
            cn: "研究人员在河谷附近的重大考古勘探中发掘出了古代文物。",
            jp: "研究者たちは河谷の近くでの大規模な考古学（archeological）調査中に古代の遺物を発掘しました。"
        }
    },
    {
        id: 17,
        target: "solicit",
        category: "困难",
        stem: "Strict company policies prohibit unauthorized door-to-door sales ________ on corporate premises.",
        options: ["solicitation", "solicit", "circulation", "trustee"],
        correct: "solicitation",
        explanations: {
            guide: "派生名词考点。prohibit sales ________ 结构中，表达禁止未经授权的上门销售“拉客/招揽行为”，选名词 solicitation。",
            family: "solicitation (n.招揽/征求/推销) | solicit (v.征求) | circulation (n.流通) | trustee (n.理事)。",
            details: "sales solicitation 意为推销/招揽生意。solicit 是动词，不能作及物动词 prohibit 的宾语中心语。",
            cn: "公司严格的规章制度禁止在办公场所内进行未经授权的上门推销活动。",
            jp: "厳格な社内規定により、オフィス敷地内での許可のない訪問販売勧誘（solicitation）は禁止されています。"
        }
    },
    {
        id: 18,
        target: "vicinity",
        category: "困难",
        stem: "Due to safety concerns regarding the gas leak, residents in the adjacent ________ were temporarily evacuated.",
        options: ["vicinity", "vicinage", "errands", "humidifier"],
        correct: "vicinity",
        explanations: {
            guide: "高阶商务与公共安全搭配。in the adjacent ________ 意为“在紧邻的附近区域”，选名词 vicinity。",
            family: "vicinity (n.附近/周边) | vicinage (n.邻近地区/古语) | errands (n.差事) | humidifier (n.加湿器)。",
            details: "in the adjacent vicinity 属于商务与新闻英语高频表达，意为在紧邻的周边区域。vicinage 属于极生僻古语，在托业考试中不适用。",
            cn: "由于对气体泄漏安全问题的担忧，紧邻附近区域的居民被暂时撤离。",
            jp: "ガス漏れに関する安全上の懸念のため、隣接する周辺（vicinity）の住民は一時的に避難させられました。"
        }
    }
];