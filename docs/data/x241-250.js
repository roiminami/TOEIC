// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data561-570.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "solicitation",
        pos: "名",
        ipa: "/ˌsəˌlɪsɪˈteɪʃn/",
        cn: "征集，恳请，募捐",
        jp: "勧誘、懇願、募集",
        family: "solicit / solicitor / unsolicited",
        tips: "公关与法务高频：solicitation of donations/funds（募集捐款/资金），unsolicited proposals（未经请求的提案）。",
        desc: "Charities rely on fund solicitation."
    },
    {
        word: "salute",
        pos: "動/名",
        ipa: "/səˈluːt/",
        cn: "向……致敬，赞扬；敬礼",
        jp: "敬意を表する、称賛する；敬礼",
        family: "saluted / saluting / salutation",
        tips: "表彰与企业文化高频：salute dedication/achievements（向奉献精神/成就致敬）。",
        desc: "We salute your hard work."
    },
    {
        word: "scooters",
        pos: "名",
        ipa: "/ˈskuːtərz/",
        cn: "滑板车，踏板车（复数）",
        jp: "スクーター、キックボード（複数）",
        family: "scooter / scooting",
        tips: "城市交通与物流高频：electric scooters（电动滑板车），shared scooters（共享踏板车）。",
        desc: "Electric scooters reduce city traffic."
    },
    {
        word: "demographic",
        pos: "名/形",
        ipa: "/ˌdeməˈɡræfɪk/",
        cn: "特定群体，人口统计数据；人口统计的",
        jp: "特定の層、人口統計学の",
        family: "demographics / demography / demographically",
        tips: "市场营销高频：target demographic（目标受众群/目标客层），demographic trends（人口结构趋势）。",
        desc: "Youth is our target demographic."
    },
    {
        word: "lanes",
        pos: "名",
        ipa: "/leɪnz/",
        cn: "车道，航道，专用道（复数）",
        jp: "車線、専用レーン（複数）",
        family: "lane / laned",
        tips: "交通与物流高频：bus/bike lanes（公交/自行车专用道），shipping lanes（海上航线）。",
        desc: "Drivers stayed in designated lanes."
    },
    {
        word: "bed linens",
        pos: "名",
        ipa: "/ˈbed lɪnɪnz/",
        cn: "床上用品，床单被套",
        jp: "ベッドリネン、寝具類",
        family: "linen / bed / beddings",
        tips: "酒店管理与客房服务高频：fresh bed linens（干净的床单被套），wash bed linens（清洗床上用品）。",
        desc: "Hotel rooms have fresh bed linens."
    },
    {
        word: "ledger",
        pos: "名",
        ipa: "/ˈledʒər/",
        cn: "总账，分类账簿",
        jp: "元帳、会計帳簿",
        family: "ledgers / bookkeeping",
        tips: "财务与审计高频：digital/general ledger（电子总账/总分类账），record in the ledger（记入账册）。",
        desc: "Accountants updated the financial ledger."
    },
    {
        word: "hurdles",
        pos: "名",
        ipa: "/ˈhɜːrdlz/",
        cn: "障碍，难关，困难（复数）",
        jp: "障害、困難、ハードル（複数）",
        family: "hurdle / hurdling",
        tips: "商业运营高频：overcome regulatory hurdles（克服监管障碍），clear financial hurdles（化解财务难关）。",
        desc: "The team cleared all hurdles."
    },
    {
        word: "retreated",
        pos: "動",
        ipa: "/rɪˈtriːtɪd/",
        cn: "撤退，撤回，后退（retreat的过去式）",
        jp: "撤退した、後退した",
        family: "retreat / retreating",
        tips: "商业战略高频：retreated from the unprofitable market（从无利可图的市场撤出）。",
        desc: "The company retreated from expansion."
    },
    {
        word: "mandate",
        pos: "名/動",
        ipa: "/ˈmændeɪt/",
        cn: "指令，法定要求，授权；强制执行",
        jp: "指令、義務、権限；義務付ける",
        family: "mandatory / mandated / mandating",
        tips: "法律与合规高频：safety mandate（安全法规指令），legal mandate（法定授权要求）。",
        desc: "The government issued a mandate."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "bed linens",
        category: "简单",
        stem: "The hotel housekeeping staff replaces all ________ with freshly laundered sheets every morning.",
        options: ["bed linens", "scooters", "hurdles", "ledgers"],
        correct: "bed linens",
        explanations: {
            guide: "酒店客房保洁名词考点。replaces all ________ 结合用洗净的床单进行每日更换，选 bed linens（床上用品/床单被套）。",
            family: "bed linens (n.床上用品) | scooters (n.滑板车) | hurdles (n.障碍) | ledgers (n.账簿)。",
            details: "bed linens 意为床上用品。scooters（踏板车）、ledgers（账簿）均非客房保洁每日清洗更换的物品。",
            cn: "酒店客房保洁人员每天早晨都会将所有床上用品更换为刚洗好的床单。",
            jp: "ホテルの客室清掃スタッフは、毎朝すべてのベッドリネン（bed linens）を洗濯したてのシーツに交換します。"
        }
    },
    {
        id: 2,
        target: "scooters",
        category: "简单",
        stem: "Urban commuters often rent electric ________ to travel short distances around the downtown area.",
        options: ["scooters", "lanes", "ledgers", "mandates"],
        correct: "scooters",
        explanations: {
            guide: "市内短途交通工具名词。rent electric ________ 结合在市中心区域短途代步，选 scooters（滑板车/踏板车）。",
            family: "scooters (n.滑板车/踏板车) | lanes (n.车道) | ledgers (n.账簿) | mandates (n.指令)。",
            details: "electric scooters 意为电动滑板车/踏板车。lanes（车道）、ledgers（分类账）均非供市民租赁代步的交通工具。",
            cn: "城市通勤者经常租用电动滑板车在市中心进行短途出行。",
            jp: "都市の通勤者は、ダウンタウン周辺の短距離を移動するために電動スクーター（scooters）をよくレンタルします。"
        }
    },
    {
        id: 3,
        target: "salute",
        category: "简单",
        stem: "Company executives gathered at the annual banquet to ________ senior employees for their decades of dedication.",
        options: ["salute", "retreat", "hurdle", "mandate"],
        correct: "salute",
        explanations: {
            guide: "动词不定式考点。gathered to 后面接动词原形，结合表彰老员工数十年如一日的奉献，选 salute（向……致敬/表彰）。",
            family: "salute (v.致敬/赞扬) | retreat (v.撤退) | hurdle (v.跨越) | mandate (v.强制要求)。",
            details: "to salute employees for dedication 意为向员工的奉献精神致敬。retreat（撤退）与企业年会表彰氛围相反。",
            cn: "公司高管聚集在年度宴会上，向资深员工数十年的敬业奉献致敬。",
            jp: "会社幹部は年次晩餐会に集まり、長年の献身的な努力を称えてシニア従業員に敬意を表し（salute）ました。"
        }
    },
    {
        id: 4,
        target: "lanes",
        category: "简单",
        stem: "City planners added dedicated bicycle ________ to improve safety for riders during morning rush hour.",
        options: ["lanes", "scooters", "hurdles", "solicitations"],
        correct: "lanes",
        explanations: {
            guide: "市政道路设施复合名词。dedicated bicycle ________ 结合提高早高峰骑行安全性，选 lanes（车道/专用道）。",
            family: "lanes (n.专用车道) | scooters (n.滑板车) | hurdles (n.障碍) | solicitations (n.征集)。",
            details: "bicycle lanes 意为自行车专用道。scooters（滑板车）、hurdles（障碍）均不能与 bicycle 构成道路基础设施名词。",
            cn: "城市规划师增设了自行车专用道，以提高早高峰期间骑行者的安全性。",
            jp: "都市計画担当者は、朝のラッシュアワー時の安全性を向上させるため、自転車専用レーン（lanes）を増設しました。"
        }
    },
    {
        id: 5,
        target: "ledger",
        category: "简单",
        stem: "The bookkeeper carefully recorded every incoming payment in the company's general ________.",
        options: ["ledger", "hurdle", "salute", "mandate"],
        correct: "ledger",
        explanations: {
            guide: "财务会计名词考点。recorded every incoming payment in the general ________ 结合簿记员登账，选 ledger（分类账/总账）。",
            family: "ledger (n.分类账/总账簿) | hurdle (n.障碍) | salute (n.致敬) | mandate (n.指令)。",
            details: "general ledger 专指企业总分类账。hurdle（难关）、salute（敬意）均非记录收入款项的会计账簿。",
            cn: "簿记员仔细地将每笔进账款项记录在公司的总分类账簿中。",
            jp: "簿記係は、すべての入金記録を会社の総勘定元帳（ledger）に慎重に記帳しました。"
        }
    },
    {
        id: 6,
        target: "hurdles",
        category: "简单",
        stem: "The biotechnology startup successfully cleared several regulatory ________ before launching its diagnostic tool.",
        options: ["hurdles", "bed linens", "scooters", "lanes"],
        correct: "hurdles",
        explanations: {
            guide: "商业挑战动宾搭配。cleared several regulatory ________ 结合产品上市前跨越监管审批阻碍，选 hurdles（障碍/难关）。",
            family: "hurdles (n.复数障碍/难关) | bed linens (n.床单被套) | scooters (n.滑板车) | lanes (n.车道)。",
            details: "clear regulatory hurdles 属于托业经典搭配，意为跨越监管障碍。bed linens（床上用品）、lanes（车道）均不搭配。",
            cn: "这家生物科技初创公司在推出其诊断工具之前，成功跨越了数道监管障碍。",
            jp: "そのバイオテクノロジー新興企業は、診断ツールを発売する前にいくつかの規制上のハードル（hurdles）を無事にクリアしました。"
        }
    },
    {
        id: 7,
        target: "demographic",
        category: "中等",
        stem: "The marketing agency launched a digital campaign specifically tailored to the young adult ________.",
        options: ["demographic", "solicitation", "ledger", "salute"],
        correct: "demographic",
        explanations: {
            guide: "市场营销客群名词考点。specifically tailored to the young adult ________ 结合针对年轻人群体投放数字广告，选 demographic（特定消费客群/人口群体）。",
            family: "demographic (n.特定人群/adj.人口统计的) | solicitation (n.募捐) | ledger (n.总账) | salute (n.致敬)。",
            details: "target demographic 指目标受众客群。solicitation（征集）、ledger（账本）均非营销定位所指代的目标消费人群。",
            cn: "该营销机构发起了一场专门针对年轻成年消费客群的数字化宣传活动。",
            jp: "そのマーケティング代理店は、特に若年成人の層（demographic）に合わせたデジタルキャンペーンを展開しました。"
        }
    },
    {
        id: 8,
        target: "retreated",
        category: "中等",
        stem: "Confronted by fierce price competition and supply bottlenecks, the retailer ________ from regional operations.",
        options: ["retreated", "saluted", "mandated", "hurdled"],
        correct: "retreated",
        explanations: {
            guide: "商业战略不及物动词过去式。________ from regional operations 结合面对激烈价格竞争与供应瓶颈选择退出，选 retreated（撤出/撤退）。",
            family: "retreated (v-ed撤出/撤退) | saluted (v-ed致敬) | mandated (v-ed强制要求) | hurdled (v-ed跨越)。",
            details: "retreated from operations 意为从业务运营中撤出。saluted（致敬）、mandated（指令）均不与 from 构成战略收缩短语。",
            cn: "面对激烈的价格竞争和供应链瓶颈，该零售商退出了区域业务运营。",
            jp: "激しい価格競争と供給のボトルネックに直面し、その小売業者は地域事業の展開から撤退しました（retreated）。"
        }
    },
    {
        id: 9,
        target: "mandate",
        category: "中等",
        stem: "Municipal safety inspectors enforced a strict ________ requiring fire extinguishers on every floor of commercial buildings.",
        options: ["mandate", "solicitation", "demographic", "ledger"],
        correct: "mandate",
        explanations: {
            guide: "安全法规名词考点。enforced a strict ________ requiring... 结合要求每层楼配备灭火器的强制规章，选 mandate（法定指令/强制规定）。",
            family: "mandate (n.指令/法定要求) | solicitation (n.征集) | demographic (n.特定群体) | ledger (n.总账)。",
            details: "a strict safety mandate 意为严格的安全指令/法定规章。solicitation（募捐）、demographic（人口群体）均无强制法规效力。",
            cn: "市政安全检查员执行了一项严格的法规指令，要求商业建筑的每一层都必须配备灭火器。",
            jp: "市の安全検査官は、商業ビルのすべての階に消火器の設置を義務付ける厳格な指令（mandate）を執行しました。"
        }
    },
    {
        id: 10,
        target: "solicitation",
        category: "中等",
        stem: "The hospital foundation adheres to transparent legal guidelines regarding the public ________ of funds.",
        options: ["solicitation", "demographic", "hurdle", "bed linen"],
        correct: "solicitation",
        explanations: {
            guide: "慈善募捐名词考点。regarding the public ________ of funds 结合医院基金会面向公众筹集资金，选 solicitation（征集/募捐）。",
            family: "solicitation (n.募捐/征集) | demographic (n.群体) | hurdle (n.障碍) | bed linen (n.床上用品)。",
            details: "solicitation of funds 意为资金募集/募捐。demographic（群体）、hurdle（难关）不能与 funds 构成筹款表达。",
            cn: "该医院基金会遵守有关向公众公开募捐资金的透明法律准则。",
            jp: "その病院財団は、資金の公的な募集（solicitation）に関する透明な法的ガイドラインを順守しています。"
        }
    },
    {
        id: 11,
        target: "salute",
        category: "中等",
        stem: "At the retirement ceremony, the managing director paid a glowing ________ to the chief engineer's lifelong contributions.",
        options: ["salute", "mandate", "ledger", "lane"],
        correct: "salute",
        explanations: {
            guide: "表彰致敬固定短语。paid a glowing ________ to... 属于托业经典搭配，表达对总工程师的终身成就表示由衷的“致敬/赞誉”，选 salute。",
            family: "salute (n.致敬/赞誉) | mandate (n.指令) | ledger (n.总账) | lane (n.车道)。",
            details: "pay a salute to sb 意为向某人致敬。mandate（指令）、ledger（账册）均无法与 pay a glowing... to 搭配表达赞赏。",
            cn: "在退休仪式上，总经理对总工程师一生的杰出贡献表达了由衷的崇高敬意。",
            jp: "退職式典において、専務取締役は主任技師の生涯にわたる貢献に対して熱烈な敬意（salute）を表しました。"
        }
    },
    {
        id: 12,
        target: "lanes",
        category: "中等",
        stem: "Port authorities monitored cargo vessel navigation along congested international shipping ________.",
        options: ["lanes", "scooters", "hurdles", "demographics"],
        correct: "lanes",
        explanations: {
            guide: "海运航路专有名词。international shipping ________ 结合港口当局监控货轮通航，选 lanes（航道/航线）。",
            family: "lanes (n.航道/专用车道) | scooters (n.踏板车) | hurdles (n.障碍) | demographics (n.人口统计)。",
            details: "shipping lanes 专指海上航道/通航航线。scooters（踏板车）、demographics（人口数据）均不用于描述船舶航行水域通道。",
            cn: "港口当局密切监控货船在繁忙的国际海上航道上的航行情况。",
            jp: "港湾当局は、混雑した国際航路（shipping lanes）に沿った貨物船の航行を監視しました。"
        }
    },
    {
        id: 13,
        target: "mandate",
        category: "困难",
        stem: "Under federal workplace safety legislation, all industrial operators are ________ to conduct annual emergency drills.",
        options: ["mandated", "mandating", "saluted", "retreated"],
        correct: "mandated",
        explanations: {
            guide: "派生被动语态考点。are ________ to conduct... 结构中，表达工业运营方被法律法规“强制要求/指令”开展演练，选过去分词 mandated。",
            family: "mandated (adj./v-ed被授权的/被强制要求的) | mandating (v-ing) | saluted (v-ed受致敬的) | retreated (v-ed撤退的)。",
            details: "be mandated to do sth 属于托业法务合规绝高频句式，意为被强制要求做某事。mandating 是现在分词，不能在 are 后面构成被动要求。",
            cn: "根据联邦工作场所安全法规，所有工业运营商均被强制要求每年进行应急演练。",
            jp: "連邦職場安全法に基づき、すべての産業事業者は年次の緊急訓練を実施することが義務付けられて（mandated）います。"
        }
    },
    {
        id: 14,
        target: "demographic",
        category: "困难",
        stem: "Economists warned that shifting ________ trends across the region will significantly impact local labor supply.",
        options: ["demographic", "demographically", "demography", "solicitation"],
        correct: "demographic",
        explanations: {
            guide: "修饰名词的前置形容词。shifting ________ trends 结构中，修饰 trends（趋势），表达“人口结构的/人口统计的”趋势，选形容词 demographic。",
            family: "demographic (adj.人口统计的/结构的) | demographically (adv.人口统计学地) | demography (n.人口统计学) | solicitation (n.募捐)。",
            details: "demographic trends 意为人口结构趋势。demography 是学科名词，demographically 是副词，均不能直接作 trends 的前置修饰定语。",
            cn: "经济学家警告称，该地区不断变化的人口结构趋势将对当地劳动力供应产生重大影响。",
            jp: "エコノミストは、地域全体で変化する人口動態（demographic）トレンドが地元の労働力供給に大きな影響を与えると警告しました。"
        }
    },
    {
        id: 15,
        target: "solicitation",
        category: "困难",
        stem: "The procurement committee has a strict policy to reject any ________ sales proposals sent by outside vendors.",
        options: ["unsolicited", "solicitation", "soliciting", "mandated"],
        correct: "unsolicited",
        explanations: {
            guide: "派生前置形容词考点。修饰 proposals（方案/推销提案），结合采购委员会拒绝外部供应商“未经请求主动寄来的/非要约的”推销函，选 unsolicited。",
            family: "unsolicited (adj.未经请求的/主动送上门的) | solicitation (n.征集) | soliciting (v-ing) | mandated (adj.法定的)。",
            details: "unsolicited proposals 属于商务采购核心术语，专指未主动招标而外部供应商不请自来的商业提案。solicitation 是名词，不能作此类定语。",
            cn: "采购委员会有严格的规定，拒绝任何由外部供应商主动寄来的未经请求的销售方案。",
            jp: "調達委員会には、外部業者から送られてくる未要請の（unsolicited）営業提案をすべて拒否する厳格な方針があります。"
        }
    },
    {
        id: 16,
        target: "ledger",
        category: "困难",
        stem: "External forensic auditors examined the company's computerized general ________ to verify the accuracy of past tax filings.",
        options: ["ledgers", "scooters", "lanes", "salutes"],
        correct: "ledgers",
        explanations: {
            guide: "会计总分类账复数名词。computerized general ________ 结合外部法务审计师核对历年报税数据，选 ledgers（总账簿/会计账目册）。",
            family: "ledgers (n.总账册复数) | scooters (n.踏板车) | lanes (n.车道) | salutes (n.致敬)。",
            details: "general ledgers 指多套总分类账册。scooters（滑板车）、lanes（航道）均非审计核查的会计记录对象。",
            cn: "外部司法审计师检查了该公司的电子总分类账册，以核实以往纳税申报的准确性。",
            jp: "外部の法医学監査人は、過去の税務申告の正確性を検証するために、会社のコンピュータ化された総勘定元帳（ledgers）を調査しました。"
        }
    },
    {
        id: 17,
        target: "hurdles",
        category: "困难",
        stem: "Securing foreign licensing rights proved to be one of the most challenging ________ encountered during the global expansion.",
        options: ["hurdles", "lanes", "scooters", "mandates"],
        correct: "hurdles",
        explanations: {
            guide: "高阶商务障碍表述。one of the most challenging ________ 结合跨国扩张中获取海外授权牌照，表达最艰难的“难关/阻碍”之一，选 hurdles。",
            family: "hurdles (n.复数难关/障碍) | lanes (n.车道) | scooters (n.滑板车) | mandates (n.指令)。",
            details: "challenging hurdles 意为艰巨的难关阻碍。lanes（航道）、scooters（滑板车）不符合跨国商业扩张遭遇的困难语境。",
            cn: "获得海外许可授权被证明是全球扩张过程中遇到的最艰难的挑战之一。",
            jp: "海外ライセンス権の確保は、世界展開の過程で遭遇した最も困難なハードル（hurdles）の1つであることが判明しました。"
        }
    },
    {
        id: 18,
        target: "retreated",
        category: "困难",
        stem: "The executive board scheduled a weekend strategic ________ at a quiet countryside resort to draft the five-year roadmap.",
        options: ["retreat", "retreated", "solicitation", "ledger"],
        correct: "retreat",
        explanations: {
            guide: "派生/词性转换名词考点。a weekend strategic ________ 结合董事会在乡间度假村举行起草五年路线图的封闭研讨会，选名词 retreat（静修研讨会/团建研讨营）。",
            family: "retreat (n.研讨营/静修会/v.撤退) | retreated (v-ed撤退了) | solicitation (n.募捐) | ledger (n.账簿)。",
            details: "strategic retreat 属于高阶企业管理专有名词，意为战略研讨静修营。retreated 是过去式动词，不能紧跟在不定冠词 a 和形容词 strategic 之后作中心名词。",
            cn: "执行董事会在一家安静的乡村度假村安排了一次周末战略研讨静修营，以起草五年路线图。",
            jp: "執行役員会は、5か年ロードマップを起草するため、静かな田舎のリゾートで週末の戦略研修会（retreat）を予定しました。"
        }
    }
];