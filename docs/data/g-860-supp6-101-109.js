// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data181-190.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "term",
        pos: "名/動",
        ipa: "/tɜːrm/",
        cn: "条款（复数）；任期；期限；术语；称为",
        jp: "（契約などの）条件、条項；任期；期間；専門用語；〜と呼ぶ",
        family: "terms / terminal / terminate / midterm",
        tips: "托业高频多义考点：1. 复数 terms 指合同条款（terms of the contract / terms and conditions）；2. 固定短语 in terms of（在……方面）；3. 指任期或租期（a three-year term）；4. 动词考被动语态（what is termed... 被称为……）。",
        desc: "Please read the terms of the agreement."
    },
    {
        word: "text",
        pos: "動/名",
        ipa: "/tekst/",
        cn: "发手机短信；文本，正文",
        jp: "（携帯電話で）メッセージを送る；本文、テキスト",
        family: "texting / textual / textbook",
        tips: "动词熟词生义极高频：现代办公与客户服务中指发送短信（text a verification code / text the driver）；名词指合同或广告的正文（the body text）。",
        desc: "We will text you the confirmation code."
    },
    {
        word: "treat",
        pos: "動/名",
        ipa: "/triːt/",
        cn: "款待，请客；对待，处理；难得的乐事",
        jp: "おごる、もてなす；扱う、待遇する；特別な楽しみ、ごちそう",
        family: "treatment / mistreat / untreated",
        tips: "双重考点：1. 动词考 treat sb to lunch/dinner（招待/请某人吃饭）；2. 名词考难得的乐事或特别款待（as a special treat for attendees）；3. 动词考谨慎处理机密数据（treat data with care）。",
        desc: "The manager will treat the team to lunch."
    },
    {
        word: "unit",
        pos: "名",
        ipa: "/ˈjuːnɪt/",
        cn: "（产品）件，台；部门，业务单元；公寓单元",
        jp: "（製品の）1台、1個；部門、組織単位；（集合住宅の）1戸",
        family: "unitary / unite / unity",
        tips: "制造与企业组织核心词：1. 生产与销售量化单位（units produced / units sold）；2. 机构事业部（business unit）；3. 住宅套间（a residential unit）。",
        desc: "The factory produced 5,000 units this month."
    },
    {
        word: "value",
        pos: "動/名",
        ipa: "/ˈvæljuː/",
        cn: "重视，珍视；给……估价；价值；性价比",
        jp: "高く評価する、重視する；査定する；価値、価格；お値打ち",
        family: "valuable / valuation / evaluate / evaluate",
        tips: "核心多义考点：1. 及物动词表示高度重视（value customer opinions / value loyalty）；2. 名词考性价比（good value for money / exceptional value）；3. 资产估值（valued at $2 million）。",
        desc: "We highly value your feedback."
    },
    {
        word: "voice",
        pos: "動/名",
        ipa: "/vɔɪs/",
        cn: "表达，吐露（担忧/意见）；发言权；声音",
        jp: "（意見・懸念などを）口に出す、表明する；発言権；声",
        family: "voiced / vocal / vocalist",
        tips: "动词高阶熟词生义考点：表示公开表达情绪或顾虑，等同于 express（voice concerns / voice objections / voice dissatisfaction）；名词考在决策中有发言权（have a voice in...）。",
        desc: "Employees were encouraged to voice their concerns."
    },
    {
        word: "volume",
        pos: "名",
        ipa: "/ˈvɑːljuːm/",
        cn: "总量，业务量；音量；册，卷",
        jp: "量、取扱高、分量；音量；（本の）巻",
        family: "voluminous / volumetric",
        tips: "商业运营高频词汇：大量订单/业务（a high volume of calls / sales volume / shipping volume / traffic volume）；学术与出版场景指期刊书籍卷数（Volume 3）。",
        desc: "We experienced a high volume of orders."
    },
    {
        word: "wear",
        pos: "名/動",
        ipa: "/wer/",
        cn: "磨损，损耗；服装，穿着；穿，戴",
        jp: "摩耗、損耗；衣服、衣料品；身につける",
        family: "wearing / wearable / worn / glassware",
        tips: "商业服务与质保核心考点：不可数名词考“磨损”（signs of wear；wear and tear 正常损耗）；复合名词考服装类型（formal wear 正装；protective wear 防护服）。",
        desc: "The warranty covers normal wear and tear."
    },
    {
        word: "work",
        pos: "名/動",
        ipa: "/wɜːrk/",
        cn: "艺术品，著作（可数复数）；市政工程，施工（不可数）；工作；运转",
        jp: "作品、著作（可算）；工事、作業（不可算）；仕事；作動する",
        family: "worker / workforce / workplace / workable",
        tips: "三大熟词生义：1. 可数名词复数 works 指艺术品或出版物（works of art）；2. 不可数名词指市政维修工程（road work / track work）；3. 动词指设备运转正常（work properly）。",
        desc: "The museum displays famous works of art."
    },
    {
        word: "yield",
        pos: "動/名",
        ipa: "/jiːld/",
        cn: "产生，带来（利润/成果）；放弃，让步；收益率，产量",
        jp: "（利益・成果を）もたらす、生み出す；屈する、譲る；利回り、収穫量",
        family: "yielding / unyielding",
        tips: "托业高阶商业与金融考点：作动词指带来高收益或积极结果（yield high returns / yield positive results）；作名词指债券或投资收益率（annual yield / dividend yield）。",
        desc: "The investment is expected to yield high returns."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "term",
        category: "简单",
        stem: "All participants must carefully read and accept the ________ of the service agreement before registering.",
        options: ["terms", "term", "treat", "voice"],
        correct: "terms",
        explanations: {
            guide: "名词复数与商业合同固定搭配。terms of the agreement 属于法律与规章制度核心短语，意为“协议条款”，固定使用复数形式 terms。",
            family: "terms (n.条款/复数) | term (n.术语/单数) | treat (v.款待) | voice (v.表达)。",
            details: "terms of the agreement 指具体的协议条款。term 单数通常指专门术语或某一届任期，不符合合同条款复数概念。",
            cn: "所有参与者在注册之前都必须仔细阅读并接受服务协议的条款。",
            jp: "すべての参加者は、登録する前にサービス契約の利用規約・条件（terms）をよく読み、同意する必要があります。"
        }
    },
    {
        id: 2,
        target: "treat",
        category: "简单",
        stem: "To celebrate achieving the quarterly sales goal, the regional manager decided to ________ the entire staff to lunch.",
        options: ["treat", "treatment", "value", "wear"],
        correct: "treat",
        explanations: {
            guide: "动词不定式与职场固定短语搭配。decided to 后面接动词原形，treat sb to sth 意为“招待/请某人吃饭”，选 treat。",
            family: "treat (v.款待/请客) | treatment (n.对待/处理) | value (v.重视) | wear (n.磨损)。",
            details: "treat the staff to lunch 是职场庆功最地道的表达。treatment 是名词，不能在不定式符号 to 后面充当带宾语的动词原形。",
            cn: "为了庆祝达成季度销售目标，区域经理决定请全体员工吃午餐。",
            jp: "四半期の売上目標の達成を祝うため、地域担当マネージャーはスタッフ全員に昼食をおごる（treat）ことに決めました。"
        }
    },
    {
        id: 3,
        target: "value",
        category: "简单",
        stem: "Our consulting firm continues to ________ client feedback as an essential resource for service improvement.",
        options: ["value", "valuable", "volume", "unit"],
        correct: "value",
        explanations: {
            guide: "动词原形作谓语与熟词生义。continues to 后面接动词原形，value feedback 意为“高度重视客户反馈”，选 value。",
            family: "value (v.重视/评估/n.价值) | valuable (adj.有价值的) | volume (n.容量/总量) | unit (n.单元)。",
            details: "value client feedback 指珍视并重视客户意见。valuable 是形容词，不能跟在不定式 to 之后作核心及物动词。",
            cn: "我们的咨询公司一如既往地重视客户的反馈，将其视为改进服务的重要资源。",
            jp: "当コンサルティング会社は、サービスの向上に不可欠なリソースとして、顧客からのフィードバックを重視し（value）続けています。"
        }
    },
    {
        id: 4,
        target: "voice",
        category: "简单",
        stem: "Employees are strongly encouraged to ________ any safety concerns during the weekly departmental briefing.",
        options: ["voice", "voiced", "yield", "work"],
        correct: "voice",
        explanations: {
            guide: "动词不定式与熟词生义搭配。are encouraged to 后面接动词原形，voice concerns 属于托业高频动宾短语，意为“表达/提出担忧”，选 voice。",
            family: "voice (v.表达/吐露/n.声音) | voiced (v-ed形式) | yield (v.产出) | work (v.工作/运转)。",
            details: "voice concerns 等同于 express concerns。voiced 是过去式或过去分词，不能在不定式符号 to 后直接充当动词原形。",
            cn: "强烈鼓励员工在每周部门简报会期间提出任何安全方面的疑虑。",
            jp: "従業員は、毎週の部門ブリーフィング中に安全に関する懸念事項を口に出して表明する（voice）ことが強く推奨されています。"
        }
    },
    {
        id: 5,
        target: "volume",
        category: "简单",
        stem: "Due to an unusually high ________ of incoming calls, customers may experience longer wait times.",
        options: ["volume", "voluminous", "term", "text"],
        correct: "volume",
        explanations: {
            guide: "限定词与形容词后的名词中心语。an unusually high ________ of 结构中，a high volume of calls 指“大量的电话呼叫/话务量过高”，选 volume。",
            family: "volume (n.业务量/总量) | voluminous (adj.庞大的) | term (n.条款) | text (v.发短信)。",
            details: "a high volume of calls 属于呼叫中心与客服场景标准表述。voluminous 是形容词，不能作为介词短语中的名词中心词。",
            cn: "由于来电量异常巨大，客户可能会经历更长的等待时间。",
            jp: "着信の件数が異常に多いため（a high volume of calls）、お客様の待ち時間が長くなる場合があります。"
        }
    },
    {
        id: 6,
        target: "unit",
        category: "简单",
        stem: "The manufacturing facility produced more than ten thousand ________ of the new handheld device this month.",
        options: ["units", "unit", "treat", "voice"],
        correct: "units",
        explanations: {
            guide: "数词修饰名词复数。ten thousand 后面需要接复数可数名词，指制造出的产品“台数/件数”，选复数名词 units。",
            family: "units (n.产品台数/件数/复数) | unit (n.单数) | treat (v.款待) | voice (v.表达)。",
            details: "produce units of a device 指生产出若干台设备。unit 是单数，不能直接被大于一的数词 ten thousand 修饰。",
            cn: "该制造工厂本月生产了超过一万台这种新型手持设备。",
            jp: "その製造施設は今月、新型携帯機器を1万台（units）以上生産しました。"
        }
    },
    {
        id: 7,
        target: "text",
        category: "中等",
        stem: "The automated customer verification system will ________ a one-time security passcode to your registered mobile phone.",
        options: ["text", "texting", "value", "wear"],
        correct: "text",
        explanations: {
            guide: "情态动词后的动词原形与熟词生义。will 后面需要接动词原形，text a passcode 意为通过手机短信“发送验证码”，选 text。",
            family: "text (v.发短信/n.文本) | texting (动名词) | value (v.重视) | wear (n.磨损)。",
            details: "text a passcode to sb 指向某人发送验证短信。texting 是分词或动名词，不能在情态动词 will 之后充当谓语动词原形。",
            cn: "自动客户验证系统将向您注册的手机发送一次性安全验证码。",
            jp: "自動顧客認証システムが、登録された携帯電話に1回限りのセキュリティパスコードをSMSで送信（text）します。"
        }
    },
    {
        id: 8,
        target: "wear",
        category: "中等",
        stem: "The standard manufacturer warranty covers mechanical defects but does not apply to normal ________ and tear.",
        options: ["wear", "wearing", "yield", "work"],
        correct: "wear",
        explanations: {
            guide: "商业保修核心固定习语。wear and tear 是托业质保条款极高频成语短语，意为“正常磨损/日常损耗”，选名词 wear。",
            family: "wear (n.磨损/v.穿戴) | wearing (adj.令人疲劳的) | yield (v.产生) | work (n.工作)。",
            details: "normal wear and tear 是质保免责条款的专属标准用语。wearing 是分词或形容词，不能替换固定习语中的成语核心词 wear。",
            cn: "标准制造商保修涵盖机械缺陷，但不适用于正常磨损与日常老化。",
            jp: "メーカーの標準保証は機械的な欠陥を対象としていますが、通常の損耗（wear and tear）には適用されません。"
        }
    },
    {
        id: 9,
        target: "work",
        category: "中等",
        stem: "The newly renovated city art gallery is proud to display several priceless ________ of contemporary sculpture.",
        options: ["works", "work", "units", "terms"],
        correct: "works",
        explanations: {
            guide: "可数名词复数与熟词生义。several 修饰可数名词复数，works of art / sculpture 指“艺术作品/雕塑著作”，选复数名词 works。",
            family: "works (n.艺术品/著作/复数) | work (n.工作/不可数) | units (n.单元) | terms (n.条款)。",
            details: "works of sculpture 指多件雕塑作品。work 表示工作时为不可数名词，不能被 several 直接修饰；表示艺术品时必须使用复数 works。",
            cn: "新近翻修的城市美术馆十分自豪能够展出几件珍贵的现当代雕塑作品。",
            jp: "新しく改装された市立アートギャラリーは、貴重な現代彫刻の作品（works）を数点展示していることを誇りに思っています。"
        }
    },
    {
        id: 10,
        target: "yield",
        category: "中等",
        stem: "Financial analysts predict that the strategic corporate restructuring will ________ substantial cost savings next quarter.",
        options: ["yield", "yielding", "voice", "treat"],
        correct: "yield",
        explanations: {
            guide: "宾语从句情态动词后的动词原形。will 后面接动词原形，yield cost savings / profits 意为“产生/带来显著的成本节约”，选 yield。",
            family: "yield (v.产出/带来效益/n.收益率) | yielding (adj.顺从的) | voice (v.表达) | treat (v.款待)。",
            details: "yield substantial savings 指产生大幅度的节约成效。yielding 是分词，缺少助动词无法紧跟情态动词 will 充当谓语动词原形。",
            cn: "财务分析师预测，该战略性企业重组将在下个季度带来显著的成本节约。",
            jp: "財務アナリストは、戦略的な企業再編が来四半期に大幅なコスト削減をもたらす（yield）と予測しています。"
        }
    },
    {
        id: 11,
        target: "term",
        category: "中等",
        stem: "In ________ of market expansion, the overseas advertising campaign exceeded all initial sales projections.",
        options: ["terms", "term", "value", "volume"],
        correct: "terms",
        explanations: {
            guide: "固定介词短语搭配。in terms of 是托业极高频商务介词短语，意为“在……方面/就……而言”，选复数名词 terms。",
            family: "terms (n.方面/短语固定形式) | term (n.术语/单数) | value (n.价值) | volume (n.销量)。",
            details: "in terms of market expansion 属于固定句式。term 为单数形式，无法与 in ... of 构成合法的表达维度的介词词组。",
            cn: "在市场扩张方面，该海外广告宣传活动超出了所有最初的销售预期。",
            jp: "市場拡大の観点から（In terms of）、その海外広告キャンペーンは当初のすべての売上予測を上回りました。"
        }
    },
    {
        id: 12,
        target: "value",
        category: "中等",
        stem: "By bundling Internet and phone services together, the telecommunications provider offers exceptional ________ for money.",
        options: ["value", "valuable", "text", "wear"],
        correct: "value",
        explanations: {
            guide: "营销宣传固定搭配与熟词生义。value for money 属于商业广告经典短语，意为“性价比/物超所值”，选名词 value。",
            family: "value (n.性价比/价值) | valuable (adj.宝贵的) | text (n.文本) | wear (n.磨损)。",
            details: "exceptional value for money 意为极佳的性价比。valuable 是形容词，不能直接放在形容词 exceptional 后充当介词短语的核心名词。",
            cn: "通过将互联网与电话服务捆绑在一起，该电信运营商提供了极具性价比的优惠选择。",
            jp: "インターネットと電話サービスをセットにすることで、その通信事業者は並外れたコストパフォーマンス（value for money）を提供しています。"
        }
    },
    {
        id: 13,
        target: "yield",
        category: "困难",
        stem: "Institutional investors favored the twenty-year municipal bonds because they offered a consistently high annual ________.",
        options: ["yield", "yielding", "treatment", "workstation"],
        correct: "yield",
        explanations: {
            guide: "金融投资专业术语与熟词生义。high annual ________ 结构中需要名词作 offered 的宾语，yield 作名词意为“投资收益率/利息收益”，选 yield。",
            family: "yield (n.投资收益率/产出) | yielding (adj.生产的) | treatment (n.待遇) | workstation (n.工位)。",
            details: "high annual yield 专指金融债券的年收益率。yielding 是分词形容词，不能在不定冠词 a 与形容词 high annual 后充当宾语中心词。",
            cn: "机构投资者青睐二十年期市政债券，因为它们提供了持续可观的高年收益率。",
            jp: "機関投資家は、一貫して高い年間利回り（yield）を提供していたため、20年物の地方債を好みました。"
        }
    },
    {
        id: 14,
        target: "wear",
        category: "困难",
        stem: "After five years of continuous operation, the industrial conveyor belts began to show clear signs of ________.",
        options: ["wear", "wearing", "voices", "terms"],
        correct: "wear",
        explanations: {
            guide: "介词后的抽象名词与熟词生义。介词 of 后面需要名词，signs of wear 意为“磨损迹象/损耗痕迹”，wear 作不可数名词表示磨损，选 wear。",
            family: "wear (n.磨损/损耗) | wearing (动名词) | voices (n.意见) | terms (n.条款)。",
            details: "signs of wear 指工业部件表现出的物理磨损痕迹。wearing 是动名词动作，不能作为表示机械耗损状态的名词中心语。",
            cn: "经过五年的连续运转，该工业传送带开始出现明显的磨损迹象。",
            jp: "5年間の連続稼働の後、産業用コンベアベルトは明らかな摩耗（wear）の兆候を示し始めました。"
        }
    },
    {
        id: 15,
        target: "work",
        category: "困难",
        stem: "Commuters are warned that scheduled road ________ on the harbor bridge may cause extensive traffic delays during rush hour.",
        options: ["work", "works", "unit", "volume"],
        correct: "work",
        explanations: {
            guide: "不可数复合名词与市政施工。road work 指“道路施工/修路工程”，在此为不可数名词修饰工程本身，选不可数名词 work。",
            family: "work (n.市政施工/工程/不可数) | works (n.工厂/艺术作品) | unit (n.单元) | volume (n.体量)。",
            details: "scheduled road work 属于市政交通播报核心词汇，指修路作业。works 复数常指艺术著作或水利工程（waterworks），不能指单一的道路整修作业。",
            cn: "通勤人员被告知，海港大桥上按计划进行的道路施工可能会在早晚高峰时段造成严重的交通延误。",
            jp: "通勤者は、ハーバーブリッジでの予定された道路工事（road work）により、ラッシュアワー時に大規模な交通渋滞が発生する可能性があると警告されています。"
        }
    },
    {
        id: 16,
        target: "treat",
        category: "困难",
        stem: "As a special ________ for conference attendees, the keynote speaker hosted an exclusive question-and-answer reception.",
        options: ["treat", "treatment", "valuable", "yielding"],
        correct: "treat",
        explanations: {
            guide: "介词短语与高阶熟词生义。As a special ________ 结构中，treat 作可数名词表示“难得的乐事/特别款待/额外的惊喜”，选 treat。",
            family: "treat (n.特别款待/难得的乐事) | treatment (n.治疗/处理) | valuable (adj.贵重的) | yielding (分词)。",
            details: "a special treat 指给与会者带来的特殊惊喜款待。treatment 指医学治疗或对待态度，不能表达“难得一遇的乐事/福利活动”。",
            cn: "作为给参会者的特别福利，主讲嘉宾主持了一场专属的问答招待酒会。",
            jp: "会議の参加者への特別なもてなし・楽しみ（treat）として、基調講演者は独占的な質疑応答レセプションを開催しました。"
        }
    },
    {
        id: 17,
        target: "unit",
        category: "困难",
        stem: "The corporate restructuring plan will split the technology conglomerate into three autonomous business ________.",
        options: ["units", "unitary", "texts", "wears"],
        correct: "units",
        explanations: {
            guide: "商业组织架构专业术语。business units 属于企业管理核心专属名词，意为“业务单元/事业部”，数词 three 后接复数 units，选 units。",
            family: "units (n.业务单元/事业部/复数) | unitary (adj.单一的) | texts (n.短信) | wears (动词单三)。",
            details: "autonomous business units 指独立核算的自治业务单元/部门。unitary 是形容词，texts 和 wears 词义完全无关。",
            cn: "该企业重组计划将把这家科技企业集团拆分为三个自治的业务部门。",
            jp: "企業再編計画により、そのテクノロジーコングロマリットは3つの自律的な事業部門（business units）に分割されます。"
        }
    },
    {
        id: 18,
        target: "term",
        category: "困难",
        stem: "Before signing the commercial lease, the prospective tenant negotiated a favorable three-year ________ with the landlord.",
        options: ["term", "terms", "voice", "yield"],
        correct: "term",
        explanations: {
            guide: "租约期限单数名词与不定冠词呼应。a favorable three-year ________ 结构中，不定冠词 a 限制此处需填入单数可数名词，lease term 意为“租赁期限/租期”，选 term。",
            family: "term (n.期限/租期/单数) | terms (n.条款/复数) | voice (n.声音) | yield (n.收益)。",
            details: "a three-year term 指为期三年的合同期/租期。terms 虽然也与合同相关，但在不定冠词 a 和复合形容词 three-year 之后必须使用单数名词 term。",
            cn: "在签署商业租赁合同之前，意向租户与房东协商争取到了一个优惠的三年租期。",
            jp: "商業リースの契約に署名する前に、見込み賃借人は家主と有利な3年間の契約期間（term）を交渉しました。"
        }
    }
];