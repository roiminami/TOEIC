// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data181-190.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "affordable",
        pos: "形",
        ipa: "/əˈfɔːrdəbl/",
        cn: "负担得起的，平价的",
        jp: "手頃な、手頃な価格の",
        family: "afford / affordability / affordably",
        tips: "商务与采购高频：affordable price（实惠的价格），affordable housing（平价住房）。",
        desc: "The prices are very affordable."
    },
    {
        word: "administrative",
        pos: "形",
        ipa: "/ədˈmɪnɪstreɪtɪv/",
        cn: "行政的，管理的",
        jp: "行政の、管理上の",
        family: "administer / administration / administrator",
        tips: "职场岗位高频：administrative assistant（行政助理），administrative duties（行政职责）。",
        desc: "She handles administrative tasks."
    },
    {
        word: "enroll",
        pos: "動",
        ipa: "/ɪnˈroʊl/",
        cn: "注册，报名，登记",
        jp: "登録する、入会する",
        family: "enrollment / enrolled / enroller",
        tips: "培训与课程高频：enroll in a course（报名参加课程）；名词形式为 enrollment。",
        desc: "You can enroll online today."
    },
    {
        word: "innovative",
        pos: "形",
        ipa: "/ˈɪnəveɪtɪv/",
        cn: "创新的，革新的",
        jp: "革新的な、斬新な",
        family: "innovate / innovation / innovator",
        tips: "产品与研发核心词：innovative design/technology（创新设计/技术）。",
        desc: "They launched an innovative product."
    },
    {
        word: "exceed",
        pos: "動",
        ipa: "/ɪkˈsiːd/",
        cn: "超过，超出，胜过",
        jp: "超える、上回る",
        family: "exceedingly / excess / excessive",
        tips: "业绩与预算高频：exceed expectations（超出预期），exceed the budget（超出预算）。",
        desc: "Sales exceed our targets."
    },
    {
        word: "valid",
        pos: "形",
        ipa: "/ˈvælɪd/",
        cn: "有效的，有法律效力的",
        jp: "有効な、適切な",
        family: "validate / validity / validation",
        tips: "证件与票券核心词：valid passport/ticket（有效护照/门票），valid until next month（有效期至下月）。",
        desc: "This pass is valid today."
    },
    {
        word: "refreshments",
        pos: "名",
        ipa: "/rɪˈfreʃmənts/",
        cn: "茶点，点心和饮料",
        jp: "軽食、茶菓子",
        family: "refresh / refreshing / refresher",
        tips: "会议与活动接待高频：light refreshments（精美茶点），serve refreshments（提供茶点）。",
        desc: "Light refreshments were served."
    },
    {
        word: "merger",
        pos: "名",
        ipa: "/ˈmɜːrdʒər/",
        cn: "（企业）合并，兼并",
        jp: "合併、M&A",
        family: "merge / merging / merged",
        tips: "企业战略核心词：corporate merger（企业合并），merger and acquisition (M&A)（兼并与收购）。",
        desc: "The corporate merger was approved."
    },
    {
        word: "craft",
        pos: "動/名",
        ipa: "/kræft/",
        cn: "精心制作；工艺，手艺",
        jp: "精巧に作る；工芸、技術",
        family: "craftsman / craftsmanship / crafty",
        tips: "商务方案与制造高频：craft a proposal/strategy（精心打造方案/策略），handcrafted goods（手工制品）。",
        desc: "She can craft fine strategy."
    },
    {
        word: "alternative",
        pos: "名/形",
        ipa: "/ɔːlˈtɜːrnətɪv/",
        cn: "替代方案；替代的，可供选择的",
        jp: "代替案；代わりの",
        family: "alternate / alternately / alternation",
        tips: "决策与能源高频：alternative option/plan（替代方案），alternative energy（替代能源）。",
        desc: "We need an alternative plan."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "affordable",
        category: "简单",
        stem: "The electronics company aims to produce high-quality devices at an ________ price for consumers.",
        options: ["affordable", "affordability", "administrative", "innovative"],
        correct: "affordable",
        explanations: {
            guide: "不定冠词与名词间的形容词考点。an ________ price 结构中，需要填入形容词修饰价格，表达“平价的/负担得起的”，选 affordable。",
            family: "affordable (adj.平价的) | affordability (n.负担能力) | administrative (adj.行政的) | innovative (adj.创新的)。",
            details: "an affordable price 意为平价的价格。affordability 是名词，不能在此处修饰名词 price。",
            cn: "这家电子公司旨在为消费者生产价格平价的高品质设备。",
            jp: "その電子機器会社は、消費者向けに手頃な（affordable）価格で高品質な製品を製造することを目指しています。"
        }
    },
    {
        id: 2,
        target: "enroll",
        category: "简单",
        stem: "New trainees must ________ in the mandatory safety seminar before starting their shift.",
        options: ["enroll", "enrollment", "exceed", "craft"],
        correct: "enroll",
        explanations: {
            guide: "情态动词后的动词原形。must 后面接动词原形，结合介词 in 构成 enroll in（报名/注册），选 enroll。",
            family: "enroll (v.注册/报名) | enrollment (n.注册) | exceed (v.超过) | craft (v.精心制作)。",
            details: "must enroll in... 意为必须报名参加……。enrollment 是名词，不能跟在情态动词 must 后面。",
            cn: "新学员在开始轮班前必须报名参加强制性安全研讨会。",
            jp: "新入研修生はシフトを開始する前に、義務的な安全セミナーに登録（enroll）しなければなりません。"
        }
    },
    {
        id: 3,
        target: "valid",
        category: "简单",
        stem: "Visitors must show a ________ government-issued photo ID at the security desk.",
        options: ["valid", "validity", "alternative", "merger"],
        correct: "valid",
        explanations: {
            guide: "形容词修饰名词。在冠词 a 与名词 ID 之间填写形容词，表达“有效的”身份证明，选 valid。",
            family: "valid (adj.有效的) | validity (n.有效性) | alternative (n./adj.替代的) | merger (n.合并)。",
            details: "a valid photo ID 意为有效的附照片身份证件。validity 为名词，不能直接修饰名词 ID。",
            cn: "访客必须在安检台出示有效的政府颁发的附照片身份证件。",
            jp: "来客は警備デスクで有効な（valid）政府発行の顔写真付き身分証明書を提示しなければなりません。"
        }
    },
    {
        id: 4,
        target: "refreshments",
        category: "简单",
        stem: "Complimentary coffee and light ________ will be provided during the morning break.",
        options: ["refreshments", "refreshing", "craft", "merger"],
        correct: "refreshments",
        explanations: {
            guide: "会议茶点名词。light ________ 属于商务会议接待固定短语，意为“精美茶点/点心”，选 refreshments。",
            family: "refreshments (n.茶点饮料) | refreshing (adj.令人耳目一新的) | craft (v./n.制作/工艺) | merger (n.合并)。",
            details: "light refreshments 指精美茶点。refreshing 是形容词，不能与前面的并列成分 coffee（名词）一起充当主语。",
            cn: "上午休息期间将免费提供咖啡和精美茶点。",
            jp: "午前の休憩時間には、無料のコーヒーと茶菓子（refreshments）が提供されます。"
        }
    },
    {
        id: 5,
        target: "exceed",
        category: "简单",
        stem: "The sales department expects to ________ its quarterly performance goals this month.",
        options: ["exceed", "excessive", "enroll", "valid"],
        correct: "exceed",
        explanations: {
            guide: "动词不定式考点。expects to 后面接动词原形，表达“超越/超过”季度业绩目标，选 exceed。",
            family: "exceed (v.超过/超越) | excessive (adj.过度的) | enroll (v.注册) | valid (adj.有效的)。",
            details: "expects to exceed... 意为预计将超出……。excessive 是形容词，不能置于不定式符号 to 后面。",
            cn: "销售部门预计本月将超越其季度业绩目标。",
            jp: "営業部門は今月、四半期の業績目標を上回る（exceed）と見込んでいます。"
        }
    },
    {
        id: 6,
        target: "innovative",
        category: "简单",
        stem: "The research team introduced an ________ solution to reduce manufacturing energy waste.",
        options: ["innovative", "innovation", "administrative", "affordable"],
        correct: "innovative",
        explanations: {
            guide: "不定冠词后的形容词定语。an ________ solution 结构中，填入形容词表达“创新的”解决方案，选 innovative。",
            family: "innovative (adj.创新的) | innovation (n.创新) | administrative (adj.行政的) | affordable (adj.平价的)。",
            details: "an innovative solution 意为创新的解决方案。innovation 是名词，不能在此作定语修饰 solution。",
            cn: "研究团队引入了一种创新的解决方案，以减少制造过程中的能源浪费。",
            jp: "研究チームは、製造時のエネルギー廃棄を削減するための革新的な（innovative）解決策を導入しました。"
        }
    },
    {
        id: 7,
        target: "administrative",
        category: "中等",
        stem: "The newly hired ________ assistant will manage executive schedules and process travel expenses.",
        options: ["administrative", "administration", "alternative", "refreshments"],
        correct: "administrative",
        explanations: {
            guide: "职场岗位复合名词。________ assistant 属于职场高频固定头衔，意为“行政助理”，选 administrative。",
            family: "administrative (adj.行政的) | administration (n.管理/行政) | alternative (adj./n.替代) | refreshments (n.茶点)。",
            details: "administrative assistant 指行政助理。administration 意为行政管理部门，不能修饰 assistant 表达岗位角色。",
            cn: "新聘用的行政助理将管理高管日程并处理差旅费报销。",
            jp: "新しく採用された行政（administrative）アシスタントは、役員のスケジュール管理と出張旅費の処理を担当します。"
        }
    },
    {
        id: 8,
        target: "merger",
        category: "中等",
        stem: "The board of directors unanimously approved the proposed corporate ________ with their primary rival.",
        options: ["merger", "merge", "enrollment", "validity"],
        correct: "merger",
        explanations: {
            guide: "商务战略名词考点。corporate ________ 表达与竞争对手的“企业合并”，选 merger。",
            family: "merger (n.合并/兼并) | merge (v.合并) | enrollment (n.注册) | validity (n.有效性)。",
            details: "corporate merger 意为企业合并。merge 是动词，不能在形容词 corporate 后面充当宾语中心语。",
            cn: "董事会一致批准了拟议的与主要竞争对手的企业合并计划。",
            jp: "取締役会は、主要なライバル企業との提案された企業合併（merger）を満場一致で承認しました。"
        }
    },
    {
        id: 9,
        target: "craft",
        category: "中等",
        stem: "Marketing specialists worked together to ________ an effective advertising campaign for the new product line.",
        options: ["craft", "craftsman", "exceed", "innovative"],
        correct: "craft",
        explanations: {
            guide: "动词不定式与商务搭配。worked together to 后面接动词原形，表达“精心打造/撰写”营销方案，选 craft。",
            family: "craft (v.精心打造/n.工艺) | craftsman (n.工匠) | exceed (v.超出) | innovative (adj.创新的)。",
            details: "to craft an advertising campaign 意为精心策划广告活动。craftsman 是名词（工匠），不能跟在不定式符号 to 后面。",
            cn: "营销专家共同努力，为新产品线精心打造了一场有效的广告活动。",
            jp: "マーケティングの専門家たちは、新しい製品ラインのための効果的な広告キャンペーンを精心込めて作成する（craft）ために協力しました。"
        }
    },
    {
        id: 10,
        target: "alternative",
        category: "中等",
        stem: "If flight weather conditions deteriorate further, the pilot will divert the aircraft to an ________ airport.",
        options: ["alternative", "alternatively", "affordable", "valid"],
        correct: "alternative",
        explanations: {
            guide: "航空与交通形容词考点。an ________ airport 表达“备降/替代”机场，选 alternative。",
            family: "alternative (adj.替代的/n.替代方案) | alternatively (adv.或者/替代地) | affordable (adj.平价的) | valid (adj.有效的)。",
            details: "an alternative airport 意为备降/替代机场。alternatively 是副词，不能作名词 airport 的前置定语。",
            cn: "如果飞行天气状况进一步恶化，机长将把飞机备降到替代机场。",
            jp: "天候状況がさらに悪化した場合、パイロットは航空機を代替（alternative）空港に目的地変更します。"
        }
    },
    {
        id: 11,
        target: "enroll",
        category: "中等",
        stem: "Due to high demand, course ________ for the digital marketing workshop closed earlier than scheduled.",
        options: ["enrollment", "enroll", "administrative", "exceeding"],
        correct: "enrollment",
        explanations: {
            guide: "派生名词主语考点。course ________ 指课程“报名/注册人数/名额”，选名词 enrollment。",
            family: "enrollment (n.报名/注册) | enroll (v.报名) | administrative (adj.行政的) | exceeding (adj.超越的)。",
            details: "course enrollment 指课程报名。enroll 为动词原形，不能在主语位置充当名词中心语。",
            cn: "由于需求量大，数字营销研讨会的课程报名比预定时间提前截止。",
            jp: "高い需要のため、デジタルマーケティングワークショップのコース登録（enrollment）は予定より早く締め切られました。"
        }
    },
    {
        id: 12,
        target: "valid",
        category: "中等",
        stem: "The coupon code is no longer ________ because the promotional discount period expired yesterday.",
        options: ["valid", "validate", "refreshments", "alternative"],
        correct: "valid",
        explanations: {
            guide: "系动词后的表语形容词。is no longer 后面接形容词作表语，表达优惠券“不再有效”，选 valid。",
            family: "valid (adj.有效的) | validate (v.验证) | refreshments (n.茶点) | alternative (n.替代品)。",
            details: "is no longer valid 意为不再有效。validate 是动词（使生效），不能直接在系动词 is 后充当表语。",
            cn: "该优惠券代码已不再有效，因为促销折扣期已于昨天到期。",
            jp: "プロモーション割引期間が昨日期限切れとなったため、クーポンコードはもはや有効（valid）ではありません。"
        }
    },
    {
        id: 13,
        target: "affordable",
        category: "困难",
        stem: "The government program was launched to improve the ________ of urban housing for low-income families.",
        options: ["affordability", "affordable", "innovation", "validity"],
        correct: "affordability",
        explanations: {
            guide: "派生高阶名词考点。improve the ________ of... 结构中，在定冠词 the 与介词 of 之间填写抽象名词 affordability（负担能力/平价性）。",
            family: "affordability (n.负担能力/平价) | affordable (adj.平价的) | innovation (n.创新) | validity (n.有效性)。",
            details: "affordability of urban housing 指城市住房的负担能力/平价程度。affordable 是形容词，不能直接作动词 improve 的宾语。",
            cn: "推出该政府项目旨在提高低收入家庭对城市住房的负担能力。",
            jp: "低所得世帯向けの都市住宅の価格の適正さ（affordability）を向上させるために、政府のプログラムが開始されました。"
        }
    },
    {
        id: 14,
        target: "exceed",
        category: "困难",
        stem: "The quarterly report indicated that total operational expenses were ________ higher than initial budget estimates.",
        options: ["exceedingly", "exceed", "excessive", "innovative"],
        correct: "exceedingly",
        explanations: {
            guide: "副词修饰比较级形容词。________ higher 结构中，需要填入副词修饰比较级 higher，表达“极其/非常”更高，选 exceedingly。",
            family: "exceedingly (adv.极其/非常) | exceed (v.超出) | excessive (adj.过度的) | innovative (adj.创新的)。",
            details: "exceedingly higher 指极其更高。exceed 是动词，excessive 是形容词，均不能修饰形容词比较级 higher。",
            cn: "季度报告指出，总运营费用极其高于最初的预算估计。",
            jp: "四半期報告書によると、全体の運営費は当初の予算見積もりよりも非常に（exceedingly）高かったことが示されました。"
        }
    },
    {
        id: 15,
        target: "innovative",
        category: "困难",
        stem: "Recognized as a leading ________ in renewable energy, the company holds multiple technological patents.",
        options: ["innovator", "innovative", "craftsman", "administrator"],
        correct: "innovator",
        explanations: {
            guide: "派生人员/机构名词考点。as a leading ________ 指作为可再生能源领域的“创新者/创新企业”，选 innovator。",
            family: "innovator (n.创新者/革新企业) | innovative (adj.创新的) | craftsman (n.工匠) | administrator (n.管理者)。",
            details: "a leading innovator 意为领头创新企业/创新者。innovative 为形容词，不能跟在介词 as 及冠词 a 后面充当名词中心语。",
            cn: "作为可再生能源领域的领先创新企业，该公司拥有多项技术专利。",
            jp: "再生可能エネルギーのリーディングイノベーター（innovator）として認められている同社は、複数の技術特許を保有しています。"
        }
    },
    {
        id: 16,
        target: "administrative",
        category: "困难",
        stem: "The restructuring plan aims to streamline departmental operations and reduce overall ________ overhead costs.",
        options: ["administrative", "administrator", "alternative", "merger"],
        correct: "administrative",
        explanations: {
            guide: "商务财务高阶修饰语。________ overhead costs 属于企业管理固定表达，指“行政管理管理费/行政开支”，选 administrative。",
            family: "administrative (adj.行政的/管理的) | administrator (n.管理者) | alternative (adj.替代的) | merger (n.合并)。",
            details: "administrative overhead costs 意为行政管理管理费。administrator 是名词（管理者），不能做名词短语 overhead costs 的定语修饰。",
            cn: "重组计划旨在精简部门运营，并减少整体行政管理开支。",
            jp: "リストラ計画は、部門の業務を合理化し、全体的な行政（administrative）管理間接費を削減することを目的としています。"
        }
    },
    {
        id: 17,
        target: "craft",
        category: "困难",
        stem: "The luxury watch manufacturer is renowned for the exceptional ________ displayed in every timepiece.",
        options: ["craftsmanship", "craft", "innovation", "validity"],
        correct: "craftsmanship",
        explanations: {
            guide: "高阶派生抽象名词。the exceptional ________ 表达在每块时计中展现出的卓越“工艺/匠心”，选 craftsmanship。",
            family: "craftsmanship (n.精湛工艺/匠心) | craft (v./n.制作/工艺) | innovation (n.创新) | validity (n.有效性)。",
            details: "exceptional craftsmanship 意为精湛的工艺。craft 偏向指手艺或小手工业，表达高级制造业的精湛技艺时专用 craftsmanship。",
            cn: "这家奢华手表制造商以每一块时计中所展现出的精湛工艺而闻名。",
            jp: "その高級時計メーカーは、すべての時計に発揮されている卓越した職人技（craftsmanship）で名高かいです。"
        }
    },
    {
        id: 18,
        target: "alternative",
        category: "困难",
        stem: "Because the primary highway was closed for emergency repairs, drivers were advised to travel ________.",
        options: ["alternatively", "alternative", "exceedingly", "affordably"],
        correct: "alternatively",
        explanations: {
            guide: "副词修饰动词考点。travel ________ 结构中，需要填写副词修饰动词 travel，表达“走替代路线地/另选路线地”，选 alternatively。",
            family: "alternatively (adv.替代地/另选途径地) | alternative (adj./n.替代的) | exceedingly (adv.极其地) | affordably (adv.平价地)。",
            details: "travel alternatively 意为选择替代路线出行。alternative 是形容词或名词，不能在句尾单独修饰动词 travel。",
            cn: "由于主要公路因紧急维修而关闭，建议司机选择替代路线出行。",
            jp: "主要道路が緊急修理のため通行止めとなったため、ドライバーは代わりに（alternatively）迂回して移動するようアドバイスされました。"
        }
    }
];