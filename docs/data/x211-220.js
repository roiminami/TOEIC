// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data471-480.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "indicative",
        pos: "形",
        ipa: "/ɪnˈdɪkətɪv/",
        cn: "表明的，暗示的，指示的",
        jp: "〜を示唆する、示す",
        family: "indicate / indication / indicator",
        tips: "商务分析高频搭配：be indicative of sth（表明/预示着某事）。",
        desc: "These signs are indicative."
    },
    {
        word: "tempting",
        pos: "形",
        ipa: "/ˈtemptɪŋ/",
        cn: "诱人的，吸引人的",
        jp: "魅力的な、誘惑的な",
        family: "tempt / temptation / temptingly",
        tips: "营销与招聘高频：tempting offer/discount（诱人的录用条件/诱人的折扣）。",
        desc: "The offer is very tempting."
    },
    {
        word: "substantial",
        pos: "形",
        ipa: "/səbˈstænʃl/",
        cn: "大量的，实质的，重大的",
        jp: "かなりの、実質的な、重要な",
        family: "substantially / substantiate / substance",
        tips: "财务与增长高频：substantial increase/amount（大幅增加/巨额数量）。",
        desc: "They made substantial profits."
    },
    {
        word: "judicious",
        pos: "形",
        ipa: "/dʒuːˈdɪʃəs/",
        cn: "明智的，审慎的，判断正确的",
        jp: "思慮深い、賢明な、的確な",
        family: "judiciously / judiciousness / judge",
        tips: "管理与投资高频：judicious use/choice/investment（明智的使用/选择/投资）。",
        desc: "He made a judicious choice."
    },
    {
        word: "intact",
        pos: "形",
        ipa: "/ɪnˈtækt/",
        cn: "完好无损的，完整的",
        jp: "損なわれていない、無傷の",
        family: "intactness",
        tips: "物流与质检高频：remain intact（保持完好无损），arrive intact（完好送达）。",
        desc: "The package arrived intact."
    },
    {
        word: "interference",
        pos: "名",
        ipa: "/ˌɪntərˈfɪrəns/",
        cn: "干扰，干涉，阻碍",
        jp: "干渉、邪魔、電波障害",
        family: "interfere / interfering",
        tips: "技术与法律高频：signal interference（信号干扰），outside interference（外部干涉）。",
        desc: "Avoid electronic signal interference."
    },
    {
        word: "malicious",
        pos: "形",
        ipa: "/məˈlɪʃəs/",
        cn: "恶意的，蓄意的",
        jp: "悪意のある、有害な",
        family: "malice / maliciously",
        tips: "网络安全高频：malicious software/attack（恶意软件/恶意攻击）。",
        desc: "Software has malicious code."
    },
    {
        word: "distinguished",
        pos: "形",
        ipa: "/dɪˈstɪŋɡwɪʃt/",
        cn: "卓越的，杰出的，著名的",
        jp: "著名な、傑出した、気品のある",
        family: "distinguish / distinguishable / distinguishing",
        tips: "人物评价与表彰高频：distinguished career/guest/scholar（杰出的职业生涯/尊贵嘉宾/著名学者）。",
        desc: "She is a distinguished guest."
    },
    {
        word: "interfere",
        pos: "動",
        ipa: "/ˌɪntərˈfɪr/",
        cn: "干涉，妨碍，干扰",
        jp: "干渉する、邪魔する",
        family: "interference / interfering",
        tips: "日常与商务高频搭配：interfere with operations/work（妨碍运营/工作）。",
        desc: "Noise can interfere with work."
    },
    {
        word: "judiciously",
        pos: "副",
        ipa: "/dʒuːˈdɪʃəsli/",
        cn: "明智地，审慎地",
        jp: "賢明に、思慮深く",
        family: "judicious / judiciousness",
        tips: "财务与决策高频：allocate funds judiciously（明智审慎地分配资金）。",
        desc: "Spend company funds judiciously."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "distinguished",
        category: "简单",
        stem: "The annual medical gala honored a ________ scientist who made breakthrough discoveries in cancer research.",
        options: ["distinguished", "malicious", "indicative", "intact"],
        correct: "distinguished",
        explanations: {
            guide: "人物评价形容词考点。修饰 scientist（科学家），结合在癌症研究中取得突破性发现，选 distinguished（卓越的/杰出的）。",
            family: "distinguished (adj.卓越的) | malicious (adj.恶意的) | indicative (adj.暗示的) | intact (adj.完好的)。",
            details: "a distinguished scientist 意为杰出的科学家。malicious（恶意的）与表彰杰出贡献的语境完全相悖。",
            cn: "年度医学盛会表彰了一位在癌症研究领域取得突破性发现的杰出科学家。",
            jp: "年次医療ガラでは、がん研究において画期的な発見を成し遂げた著名な（distinguished）科学者が表彰されました。"
        }
    },
    {
        id: 2,
        target: "tempting",
        category: "简单",
        stem: "The travel agency offered a very ________ vacation package that included flights and five-star lodging.",
        options: ["tempting", "judicious", "interference", "substantial"],
        correct: "tempting",
        explanations: {
            guide: "产品修饰形容词。a very ________ vacation package 结合包含机票和五星级住宿的优惠套餐，选 tempting（诱人的/吸引人的）。",
            family: "tempting (adj.诱人的) | judicious (adj.明智的) | interference (n.干扰) | substantial (adj.大量的)。",
            details: "a tempting package 意为诱人的度假套餐。interference 是名词，不能修饰 vacation package。",
            cn: "这家旅行社提供了一个非常诱人的度假套餐，包含机票和五星级住宿。",
            jp: "その旅行代理店は、航空券と5つ星の宿泊施設を含む非常に魅力的な（tempting）バケーションパッケージを提供しました。"
        }
    },
    {
        id: 3,
        target: "intact",
        category: "简单",
        stem: "Despite the rough sea conditions during transit, the delicate antique vases arrived completely ________.",
        options: ["intact", "indicative", "malicious", "tempting"],
        correct: "intact",
        explanations: {
            guide: "货物状态表语形容词。arrived completely ________ 表达古董花瓶完好无损地运达，选 intact（完好无损的）。",
            family: "intact (adj.完好无损的) | indicative (adj.表明的) | malicious (adj.恶意的) | tempting (adj.诱人的)。",
            details: "arrived intact 意为完好无损地到达。indicative（表明的）、malicious（恶意的）均无法用于形容运输后物品的完整状态。",
            cn: "尽管运输途中海况恶劣，精致的古董花瓶送达时依然完好无损。",
            jp: "輸送中の荒れた海況にもかかわらず、繊細なアンティークの花瓶は完全に無傷（intact）で届きました。"
        }
    },
    {
        id: 4,
        target: "indicative",
        category: "简单",
        stem: "The sharp rise in online subscriptions is ________ of strong consumer interest in digital media.",
        options: ["indicative", "distinguished", "judicious", "interference"],
        correct: "indicative",
        explanations: {
            guide: "固定搭配考点。be ________ of sth 属于托业高频固定词组，意为“表明/预示着某事”，选 indicative。",
            family: "indicative (adj.表明的/暗示的) | distinguished (adj.卓越的) | judicious (adj.明智的) | interference (n.干扰)。",
            details: "be indicative of 意为表明/预示着。distinguished 和 judicious 均不能与 of 搭配构成表达客观数据预示趋势的词组。",
            cn: "线上订阅量的急剧增加表明消费者对数字媒体有着浓厚的兴趣。",
            jp: "オンライン購読数の急激な増加は、デジタルメディアに対する消費者の強い関心を示唆して（indicative）います。"
        }
    },
    {
        id: 5,
        target: "interference",
        category: "简单",
        stem: "The wireless communication system experienced minor ________ caused by bad weather conditions.",
        options: ["interference", "substantial", "malicious", "intact"],
        correct: "interference",
        explanations: {
            guide: "通信名词考点。experienced minor ________ 结合恶劣天气对无线通讯的影响，选 interference（干扰）。",
            family: "interference (n.干扰) | substantial (adj.大量的) | malicious (adj.恶意的) | intact (adj.完好的)。",
            details: "experienced interference 意为受到干扰。substantial、malicious 和 intact 均为形容词，不能直接作及物动词 experienced 的宾语中心语。",
            cn: "由于恶劣天气条件，无线通信系统受到了轻微的干扰。",
            jp: "悪天候のため、ワイヤレス通信システムに軽微な障害/干渉（interference）が発生しました。"
        }
    },
    {
        id: 6,
        target: "substantial",
        category: "简单",
        stem: "The recent marketing campaign generated a ________ increase in sales across all regional branches.",
        options: ["substantial", "indicative", "distinguished", "tempting"],
        correct: "substantial",
        explanations: {
            guide: "修饰增幅的形容词。a ________ increase in sales 属于商务高频搭配，表达销售额“大幅度/显著的”增长，选 substantial。",
            family: "substantial (adj.大量的/实质的) | indicative (adj.表明的) | distinguished (adj.著名的) | tempting (adj.诱人的)。",
            details: "substantial increase 意为大幅增长。distinguished 用来修饰人或生涯，不能修饰数量增幅 increase。",
            cn: "最近的营销活动带动了所有区域分公司销售额的大幅增长。",
            jp: "最近のマーケティングキャンペーンにより、すべての地域支店で売上高が大幅に（substantial）増加しました。"
        }
    },
    {
        id: 7,
        target: "judicious",
        category: "中等",
        stem: "The company's swift recovery from the crisis was attributed to the CEO's ________ allocation of resources.",
        options: ["judicious", "malicious", "indicative", "intact"],
        correct: "judicious",
        explanations: {
            guide: "决策形容词修饰语。修饰 allocation of resources（资源配置），结合帮助公司迅速从危机中恢复，选 judicious（明智的/审慎的）。",
            family: "judicious (adj.明智的/审慎的) | malicious (adj.恶意的) | indicative (adj.指示的) | intact (adj.完好无损的)。",
            details: "judicious allocation 意为明智/审慎的分配。malicious（恶意的）与带领公司走出危机的正面决策语境相反。",
            cn: "公司从危机中迅速恢复归功于首席执行官对资源的明智配置。",
            jp: "危機からの会社の迅速な回復は、CEOによる思慮深い（judicious）資源の配分によるものでした。"
        }
    },
    {
        id: 8,
        target: "malicious",
        category: "中等",
        stem: "Security software blocked a ________ program designed to gain unauthorized access to client files.",
        options: ["malicious", "judicious", "distinguished", "substantial"],
        correct: "malicious",
        explanations: {
            guide: "网络安全形容词考点。修饰 program，结合未经授权访问客户文件的非法企图，选 malicious（恶意的）。",
            family: "malicious (adj.恶意的) | judicious (adj.明智的) | distinguished (adj.杰出的) | substantial (adj.大量的)。",
            details: "malicious program 意为恶意程序。judicious（明智的）、distinguished（杰出的）不能修饰具有破坏性质的黑客攻击软件。",
            cn: "安全软件拦截了一个旨在未经授权访问客户文件的恶意程序。",
            jp: "セキュリティソフトウェアは、顧客ファイルへの不正アクセスを目的として設計された悪意のある（malicious）プログラムをブロックしました。"
        }
    },
    {
        id: 9,
        target: "distinguished",
        category: "中等",
        stem: "After thirty years of dedicated service, Professor Higgins retired with a truly ________ academic record.",
        options: ["distinguished", "tempting", "indicative", "intact"],
        correct: "distinguished",
        explanations: {
            guide: "职业履历修饰形容词。a truly ________ academic record 结合执教三十年的卓越奉献，选 distinguished（卓越的/显赫的）。",
            family: "distinguished (adj.卓越的/显赫的) | tempting (adj.诱人的) | indicative (adj.表明的) | intact (adj.完好的)。",
            details: "distinguished record 意为卓越的履历/显赫的记录。tempting（诱人的）不适合用来修饰学者的学术成就。",
            cn: "在奉献服务三十年后，希金斯教授带着真正卓越显赫的学术成就退休了。",
            jp: "30年間の献身的な勤務の後、ヒギンズ教授は真に傑出した（distinguished）学術的業績を残して退職しました。"
        }
    },
    {
        id: 10,
        target: "interfere",
        category: "中等",
        stem: "Renovation work in the lobby must not ________ with the daily routine of office employees.",
        options: ["interfere", "interference", "indicative", "judicious"],
        correct: "interfere",
        explanations: {
            guide: "情态动词后的动词原形与搭配。must not 后面接动词原形，结合 interfere with（妨碍/干扰员工日常工作），选 interfere。",
            family: "interfere (v.妨碍/干涉) | interference (n.干扰) | indicative (adj.表明的) | judicious (adj.明智的)。",
            details: "interfere with 属于托业经典动词短语。interference 是名词，不能直接跟在情态动词 must not 后面作谓语动词。",
            cn: "大堂的翻修工程绝不能妨碍办公室员工的日常工作。",
            jp: "ロビーの改修工事は、オフィス従業員の日常業務を邪魔（interfere）してはなりません。"
        }
    },
    {
        id: 11,
        target: "tempting",
        category: "中等",
        stem: "Although the competing firm offered an extremely ________ compensation package, Ms. Vance chose to stay.",
        options: ["tempting", "temptation", "malicious", "intact"],
        correct: "tempting",
        explanations: {
            guide: "薪资待遇修饰形容词。an extremely ________ compensation package 结构中，副词 extremely 后面接形容词修饰薪酬，选 tempting（诱人的/吸引人的）。",
            family: "tempting (adj.诱人的) | temptation (n.诱惑) | malicious (adj.恶意的) | intact (adj.完好的)。",
            details: "tempting compensation package 意为极具吸引力的薪酬待遇。temptation 是名词，不能在此作定语修饰 package。",
            cn: "尽管竞争对手公司开出了极具诱惑力的薪酬待遇，万斯女士还是选择留下来。",
            jp: "競合他社が非常に魅力的な（tempting）報酬パッケージを提示したにもかかわらず、ヴァンス氏は留まることを選択しました。"
        }
    },
    {
        id: 12,
        target: "indicative",
        category: "中等",
        stem: "Financial experts noted that recent stock market trends are strongly ________ of investor confidence.",
        options: ["indicative", "indication", "interfere", "judicious"],
        correct: "indicative",
        explanations: {
            guide: "系表结构与介词搭配。are strongly ________ of... 结构中，系动词 are 后接表语形容词，并与介词 of 搭配，选 indicative。",
            family: "indicative (adj.表明的/暗示的) | indication (n.迹象) | interfere (v.干涉) | judicious (adj.明智的)。",
            details: "be indicative of 意为表明/体现出。indication 是名词，若作表语通常需用 an indication of 形式。",
            cn: "金融专家指出，最近的股市趋势有力地表明了投资者的信心。",
            jp: "金融の専門家は、最近の株式市場の動向が投資家の信頼を強く示唆して（indicative）いると指摘しました。"
        }
    },
    {
        id: 13,
        target: "judiciously",
        category: "困难",
        stem: "The committee advised regional branch managers to spend their annual discretionary budgets ________.",
        options: ["judiciously", "judicious", "substantial", "distinguished"],
        correct: "judiciously",
        explanations: {
            guide: "副词修饰动词考点。spend their budgets ________ 结构中，需要副词修饰及物动词短语 spend budgets，表达“明智审慎地”花销预算，选 judiciously。",
            family: "judiciously (adv.明智审慎地) | judicious (adj.明智的) | substantial (adj.大量的) | distinguished (adj.著名的)。",
            details: "spend budgets judiciously 意为审慎地支出预算。judicious 是形容词，不能在句尾充当动词的状语。",
            cn: "委员会建议各区域分公司经理明智审慎地使用其年度自主支配预算。",
            jp: "委員会は、地域の支店長に対し、年間の裁量予算を賢明に（judiciously）使用するよう助言しました。"
        }
    },
    {
        id: 14,
        target: "substantial",
        category: "困难",
        stem: "Operational expenditures dropped ________ after the manufacturing plant automated its assembly line.",
        options: ["substantially", "substantial", "tempting", "indicative"],
        correct: "substantially",
        explanations: {
            guide: "副词修饰不及物动词。dropped ________ 结构中，用副词修饰动词 dropped，表达运营支出“大幅度地”下降，选 substantially。",
            family: "substantially (adv.大幅度地/实质上) | substantial (adj.大量的) | tempting (adj.诱人的) | indicative (adj.表明的)。",
            details: "dropped substantially 属于托业经典动副搭配，意为大幅下降。substantial 是形容词，不能直接修饰动词 dropped。",
            cn: "在制造工厂实现装配线自动化之后，运营支出大幅下降。",
            jp: "製造工場が組み立てラインを自動化した後、運用コストは大幅に（substantially）減少しました。"
        }
    },
    {
        id: 15,
        target: "interference",
        category: "困难",
        stem: "Corporate governance policies strictly prohibit any executive ________ in independent internal auditing procedures.",
        options: ["interference", "interfere", "judicious", "malicious"],
        correct: "interference",
        explanations: {
            guide: "派生名词作及物动词宾语。prohibit any executive ________ 结构中，形容词 executive 后面接名词形式 interference（干涉/介入）。",
            family: "interference (n.干涉/介入) | interfere (v.干涉) | judicious (adj.明智的) | malicious (adj.恶意的)。",
            details: "executive interference 意为管理层干涉。interfere 是动词，不能直接跟在形容词 executive 后面作及物动词 prohibit 的宾语。",
            cn: "公司治理政策严厉禁止任何管理层对独立内部审计程序的干涉。",
            jp: "コーポレートガバナンス方針により、独立した内部監査手順への役員による干渉（interference）は厳格に禁止されています。"
        }
    },
    {
        id: 16,
        target: "indicative",
        category: "困难",
        stem: "The steady rise in commercial property values serves as a clear ________ of economic revitalization downtown.",
        options: ["indication", "indicative", "distinguished", "intact"],
        correct: "indication",
        explanations: {
            guide: "派生名词考点。a clear ________ of... 结构中，在冠词 a 和形容词 clear 后面接名词形式 indication（迹象/表明）。",
            family: "indication (n.迹象/表明) | indicative (adj.表明的) | distinguished (adj.著名的) | intact (adj.完好的)。",
            details: "a clear indication of 意为……的明显迹象。indicative 是形容词，不能在此充当介词短语中的名词中心语。",
            cn: "商业地产价值的稳步上升是市中心经济复苏的明确迹象。",
            jp: "商業不動産価値の着実な上昇は、ダウンタウンの経済再生の明確な兆候（indication）として機能しています。"
        }
    },
    {
        id: 17,
        target: "tempting",
        category: "困难",
        stem: "Supermarkets strategically place promotional items near cash registers to present an irresistible ________ to shoppers.",
        options: ["temptation", "tempting", "substantial", "judiciously"],
        correct: "temptation",
        explanations: {
            guide: "派生抽象名词考点。present an irresistible ________ 结构中，冠词 an 和形容词 irresistible 后面接名词形式 temptation（诱惑）。",
            family: "temptation (n.诱惑/诱惑物) | tempting (adj.诱人的) | substantial (adj.大量的) | judiciously (adv.明智地)。",
            details: "an irresistible temptation 意为无法抗拒的诱惑。tempting 是形容词，不能直接充当及物动词 present 的宾语中心语。",
            cn: "超市战略性地将促销商品摆放在收银台附近，给购物者带来无法抗拒的诱惑。",
            jp: "スーパーマーケットは、買い物客に抵抗しがたい誘惑（temptation）を与えるために、プロモーション商品をレジの近くに戦略的に配置しています。"
        }
    },
    {
        id: 18,
        target: "malicious",
        category: "困难",
        stem: "Forensic investigators concluded that internal records were ________ altered prior to the regulatory inspection.",
        options: ["maliciously", "malicious", "distinguished", "judicious"],
        correct: "maliciously",
        explanations: {
            guide: "副词修饰被动语态动词。were ________ altered 结构中，用副词修饰过去分词 altered，表达记录被“恶意地/蓄意篡改”，选 maliciously。",
            family: "maliciously (adv.恶意地/蓄意地) | malicious (adj.恶意的) | distinguished (adj.杰出的) | judicious (adj.明智的)。",
            details: "maliciously altered 意为被恶意篡改。malicious 是形容词，不能在助动词 were 和分词 altered 之间作状语。",
            cn: "法医调查员得出结论，内部记录在监管检查之前遭到了恶意篡改。",
            jp: "鑑識捜査官は、規制検査の前に内部記録が悪意を持って（maliciously）改ざんされていたと結論付けました。"
        }
    }
];