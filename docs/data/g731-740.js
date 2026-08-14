// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data431-440.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "slot",
        pos: "名/動",
        ipa: "/slɑːt/",
        cn: "时间段，档期；狭槽，位置",
        jp: "時間枠、スロット、投入口",
        family: "slots / slotted / slotting",
        tips: "商务预约与交通高频：time slot（时间段/档期），takeoff slot（起飞时刻/时隙）。",
        desc: "Choose an available time slot."
    },
    {
        word: "leak",
        pos: "動/名",
        ipa: "/liːk/",
        cn: "泄漏，泄露；漏洞",
        jp: "漏れる、漏らす；漏れ、漏洩",
        family: "leaked / leaking / leakage",
        tips: "设施维护与公关安全高频：water leak（漏水），leak confidential info（泄露机密信息）。",
        desc: "The pipe has a leak."
    },
    {
        word: "projection",
        pos: "名",
        ipa: "/prəˈdʒekʃn/",
        cn: "预测，推算；投影",
        jp: "予測、推計、投影",
        family: "project / projected / projector",
        tips: "财务与市场分析高频：financial/sales projections（财务/销售预测）。",
        desc: "Sales projections look positive."
    },
    {
        word: "confidential",
        pos: "形",
        ipa: "/ˌkɑːnfɪˈdenʃl/",
        cn: "机密的，保密的",
        jp: "機密の、内密の",
        family: "confidentiality / confidentially / confidence",
        tips: "合规与文档管理高频：strictly confidential（绝密），confidential documents（机密文件）。",
        desc: "Keep this document confidential."
    },
    {
        word: "lodging",
        pos: "名",
        ipa: "/ˈlɑːdʒɪŋ/",
        cn: "住宿，寄宿",
        jp: "宿泊、宿泊施設",
        family: "lodge / lodger / lodgings",
        tips: "出差与旅游高频：lodging expenses（住宿费），lodging accommodations（住宿安排）。",
        desc: "The hotel provides lodging."
    },
    {
        word: "misplace",
        pos: "動",
        ipa: "/ˌmɪsˈpleɪs/",
        cn: "放错位置，遗失",
        jp: "置き忘れる、見失う",
        family: "misplaced / misplacement",
        tips: "日常办公与客服高频：misplace a file/key（放错文件/钥匙），misplaced items（遗失物品）。",
        desc: "Do not misplace the key."
    },
    {
        word: "voucher",
        pos: "名",
        ipa: "/ˈvaʊtʃər/",
        cn: "代金券，抵用券，收据",
        jp: "引換券、クーポン券、領収証",
        family: "vouchers",
        tips: "客服与促销高频：travel voucher（旅行代金券），discount voucher（打折券）。",
        desc: "Redeem this gift voucher."
    },
    {
        word: "compliance",
        pos: "名",
        ipa: "/kəmˈplaɪəns/",
        cn: "顺从，遵守，合规",
        jp: "順守、法令順守、コンプライアンス",
        family: "comply / compliant / noncompliance",
        tips: "法律与安全高频：in compliance with regulations（符合规章制度），ensure compliance（确保合规）。",
        desc: "Ensure compliance with rules."
    },
    {
        word: "designate",
        pos: "動/形",
        ipa: "/ˈdezɪɡneɪt/",
        cn: "指定，指派；标明",
        jp: "指定する、指名する",
        family: "designated / designation / designator",
        tips: "办公与设施高频：designated parking/area（指定停车位/区域），designate a manager（指派经理）。",
        desc: "Designate a meeting room."
    },
    {
        word: "freight",
        pos: "名/動",
        ipa: "/freɪt/",
        cn: "货运，货物；运费",
        jp: "貨物、貨物輸送；輸送する",
        family: "freighter / freighting",
        tips: "物流与运输核心词：freight charges/rate（运费），air/sea freight（空运/海运）。",
        desc: "Freight charges are included."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "voucher",
        category: "简单",
        stem: "The airline provided a travel ________ to passengers affected by the unexpected flight cancellation.",
        options: ["voucher", "compliance", "projection", "lodging"],
        correct: "voucher",
        explanations: {
            guide: "客服补偿名词考点。provided a travel ________ 结合航班取消给乘客的补偿凭据，选 voucher（代金券/抵用券）。",
            family: "voucher (n.代金券) | compliance (n.合规) | projection (n.预测) | lodging (n.住宿)。",
            details: "travel voucher 意为旅行代金券。compliance（合规）、projection（预测）均非航空公司提供的补偿抵用券凭证。",
            cn: "航空公司向受突发航班取消影响的乘客提供了一张旅行代金券。",
            jp: "航空会社は、予期せぬ欠航の影響を受けた乗客に旅行クーポン券（voucher）を提供しました。"
        }
    },
    {
        id: 2,
        target: "confidential",
        category: "简单",
        stem: "All client financial statements must be kept strictly ________ and stored in locked filing cabinets.",
        options: ["confidential", "compliant", "designated", "misplaced"],
        correct: "confidential",
        explanations: {
            guide: "文档安全表语形容词。kept strictly ________ 结合存放在上锁的文件柜中，选 confidential（机密的/保密的）。",
            family: "confidential (adj.机密的) | compliant (adj.顺从的/合规的) | designated (adj.指定的) | misplaced (adj.放错地方的)。",
            details: "strictly confidential 属于托业最高频搭配，意为严格保密。其余选项与锁入文件柜的安全语境不符。",
            cn: "所有客户财务报表必须严格保密，并存放在上锁的文件柜中。",
            jp: "すべての顧客財務諸表は厳格に機密（confidential）として保持され、鍵のかかるファイルキャビネットに保管されなければなりません。"
        }
    },
    {
        id: 3,
        target: "slot",
        category: "简单",
        stem: "The clinic receptionist offered the patient an open appointment ________ on Friday afternoon.",
        options: ["slot", "leak", "freight", "lodging"],
        correct: "slot",
        explanations: {
            guide: "预约时间名词考点。an open appointment ________ 表达诊所前台提供的周五下午预约“时间段/档期”，选 slot。",
            family: "slot (n.时间段/档期) | leak (n.漏洞) | freight (n.货运) | lodging (n.住宿)。",
            details: "appointment slot 意为预约时间段/档期。freight（货运）、leak（泄漏）均非表示可供预约的时间段。",
            cn: "诊所前台为患者提供了周五下午的一个空闲预约时间段。",
            jp: "診療所の受付は、金曜日の午後に患者に空いている予約枠（slot）を案内しました。"
        }
    },
    {
        id: 4,
        target: "misplace",
        category: "简单",
        stem: "Employees are reminded not to ________ their security badges, as replacement passes incur a fee.",
        options: ["misplace", "designate", "leak", "comply"],
        correct: "misplace",
        explanations: {
            guide: "动词不定式与物品考点。reminded not to 后面接动词原形，结合安全门禁卡和补办收费，选 misplace（遗失/放错地方）。",
            family: "misplace (v.放错地方/遗失) | designate (v.指定) | leak (v.泄露) | comply (v.遵守)。",
            details: "misplace security badges 意为放错/弄丢安保门禁卡。comply 需与 with 搭配（comply with），designate 语义不合。",
            cn: "提醒员工切勿遗失安全门禁卡，因为补办通行证需要收费。",
            jp: "再発行には手数料がかかるため、従業員はセキュリティバッジを置き忘れ/紛失（misplace）しないよう注意喚起されています。"
        }
    },
    {
        id: 5,
        target: "lodging",
        category: "简单",
        stem: "The conference registration package covers all seminar materials, meals, and hotel ________ for three nights.",
        options: ["lodging", "voucher", "freight", "projection"],
        correct: "lodging",
        explanations: {
            guide: "差旅住宿名词考点。hotel ________ for three nights 表达会议包含的三晚酒店“住宿”，选 lodging。",
            family: "lodging (n.住宿) | voucher (n.代金券) | freight (n.货运) | projection (n.预测)。",
            details: "hotel lodging 意为酒店住宿。freight（货物运输）、projection（推算预测）均非酒店提供的居住留宿服务。",
            cn: "会议注册套餐包含所有研讨会资料、餐食以及三晚的酒店住宿。",
            jp: "会議登録パッケージには、すべてのセミナー資料、食事、および3泊のホテル宿泊（lodging）が含まれています。"
        }
    },
    {
        id: 6,
        target: "freight",
        category: "简单",
        stem: "The logistics provider transports heavy industrial cargo across the country via rail ________ services.",
        options: ["freight", "leak", "compliance", "slot"],
        correct: "freight",
        explanations: {
            guide: "物流运输专有名词定语。rail ________ services 结合运送重型工业货物，表达“铁路货运”服务，选 freight。",
            family: "freight (n.货运/货物) | leak (n.漏洞) | compliance (n.合规) | slot (n.时间段)。",
            details: "rail freight 专指铁路货运。compliance（合规）、slot（档期）均非表示运送货物的运输方式。",
            cn: "该物流供应商通过铁路货运服务在全国范围内运送重型工业货物。",
            jp: "その物流事業者は、鉄道貨物（freight）サービスを通じて全国に重工業貨物を輸送しています。"
        }
    },
    {
        id: 7,
        target: "compliance",
        category: "中等",
        stem: "The annual environmental audit confirmed that the manufacturing plant is operating in full ________ with clean water regulations.",
        options: ["compliance", "compliant", "projection", "lodging"],
        correct: "compliance",
        explanations: {
            guide: "固定介词短语。in full ________ with... 属于托业合规最高频词组，表达“完全符合/遵守”，选名词 compliance。",
            family: "compliance (n.遵守/合规) | compliant (adj.合规的) | projection (n.预测) | lodging (n.住宿)。",
            details: "in full compliance with 意为完全符合……。compliant 是形容词，不能直接跟在介词 in 与形容词 full 后面作宾语。",
            cn: "年度环境审计证实，该制造工厂的运营完全符合清洁水法规。",
            jp: "年次環境監査により、その製造工場が浄水規制を完全に順守（compliance）して操業していることが確認されました。"
        }
    },
    {
        id: 8,
        target: "designate",
        category: "中等",
        stem: "The building manager decided to ________ the area near the back entrance as a designated smoking zone.",
        options: ["designate", "designation", "misplace", "leak"],
        correct: "designate",
        explanations: {
            guide: "动词不定式考点。decided to 后面接动词原形，表达将后门附近的区域“指定/划定”为吸烟区，选 designate。",
            family: "designate (v.指定/划定) | designation (n.指定) | misplace (v.放错) | leak (v.泄漏)。",
            details: "to designate an area 意为指定某区域。designation 是名词，不能紧跟在不定式符号 to 后面作谓语动词。",
            cn: "大楼经理决定将后门附近的区域指定为吸烟区。",
            jp: "ビル管理人は、裏口近くのエリアを指定喫煙ゾーンとして指定する（designate）ことを決定しました。"
        }
    },
    {
        id: 9,
        target: "leak",
        category: "中等",
        stem: "Plumbing specialists were dispatched to inspect the pipes after a minor gas ________ was detected.",
        options: ["leak", "freight", "voucher", "slot"],
        correct: "leak",
        explanations: {
            guide: "设施安全名词。gas ________ 结合管道专家前往检修，选 leak（泄漏/漏气）。",
            family: "leak (n.泄漏/漏水/漏气) | freight (n.货运) | voucher (n.代金券) | slot (n.档期)。",
            details: "gas leak 意为瓦斯/燃气泄漏。freight（货运）、voucher（代金券）不符合发生气体泄漏的安全故障语境。",
            cn: "在检测到轻微的燃气泄漏后，管道专家被派去检查管道。",
            jp: "微小なガス漏れ（leak）が検出された後、配管の専門家がパイプの点検に派遣されました。"
        }
    },
    {
        id: 10,
        target: "projection",
        category: "中等",
        stem: "According to the latest quarterly financial ________, the company expects domestic sales to rise steadily.",
        options: ["projections", "projectors", "vouchers", "compliances"],
        correct: "projections",
        explanations: {
            guide: "财务分析复数名词。financial ________ 结合预期国内销售稳步上升，选 projections（推测/预测数据）。",
            family: "projections (n.复数预测) | projectors (n.投影仪) | vouchers (n.代金券) | compliances (n.合规)。",
            details: "financial projections 意为财务预测。projectors 指投影仪硬件设备，不能提供关于销售预期的经济数据。",
            cn: "根据最新的季度财务预测，该公司预计国内销售额将稳步增长。",
            jp: "最新の四半期財務予測（projections）によると、同社は国内売上高が着実に増加すると予想しています。"
        }
    },
    {
        id: 11,
        target: "confidential",
        category: "中等",
        stem: "All temporary consultants signed a non-disclosure agreement to protect the ________ of client data.",
        options: ["confidentiality", "confidential", "designation", "lodging"],
        correct: "confidentiality",
        explanations: {
            guide: "派生名词考点。protect the ________ of... 结构中，在定冠词 the 与介词 of 之间填入抽象名词 confidentiality（机密性/保密）。",
            family: "confidentiality (n.机密性/保密) | confidential (adj.机密的) | designation (n.指定) | lodging (n.住宿)。",
            details: "confidentiality of data 意为数据的保密性。confidential 是形容词，不能直接作及物动词 protect 的宾语中心语。",
            cn: "所有临时顾问都签署了保密协议，以保护客户数据的机密性。",
            jp: "すべての臨時コンサルタントは、クライアントデータの機密性（confidentiality）を保護するために秘密保持契約に署名しました。"
        }
    },
    {
        id: 12,
        target: "freight",
        category: "中等",
        stem: "International shipping invoices include both export duties and standard ________ charges.",
        options: ["freight", "leakage", "voucher", "misplaced"],
        correct: "freight",
        explanations: {
            guide: "物流费用复合名词。________ charges 属于进出口贸易高频词组，表达“货运运费”，选 freight。",
            family: "freight (n.货运/货物) | leakage (n.泄漏) | voucher (n.代金券) | misplaced (adj.放错的)。",
            details: "freight charges 意为货运费用/运费。leakage charges（泄漏费）、voucher charges 不符合国际物流发票的标准计费项目。",
            cn: "国际航运发票既包含出口关税，也包含标准的货运运费。",
            jp: "国際配送の請求書には、輸出関税と標準的な貨物運賃（freight）の両方が含まれています。"
        }
    },
    {
        id: 13,
        target: "compliance",
        category: "困难",
        stem: "The facility manager confirmed that all emergency lighting systems remain fully ________ with municipal fire codes.",
        options: ["compliant", "compliance", "confidential", "designated"],
        correct: "compliant",
        explanations: {
            guide: "表语形容词与介词搭配。remain fully ________ with... 结构中，系动词 remain 后面接形容词 compliant，表达“与……保持合规/相符”，选 compliant。",
            family: "compliant (adj.合规的/顺从的) | compliance (n.合规) | confidential (adj.机密的) | designated (adj.指定的)。",
            details: "be/remain compliant with 意为符合……规定。compliance 是名词，不能在副词 fully 修饰下充当系动词后的表语形容词。",
            cn: "设施经理确认，所有应急照明系统均完全符合市政消防法规。",
            jp: "施設管理者は、すべての非常用照明システムが市の消防法規に完全に准拠（compliant）していることを確認しました。"
        }
    },
    {
        id: 14,
        target: "designate",
        category: "困难",
        stem: "Vehicles parked in ________ visitor spaces without displaying an authorized permit will be ticketed.",
        options: ["designated", "designate", "misplaced", "projected"],
        correct: "designated",
        explanations: {
            guide: "过去分词作前置定语。修饰 visitor spaces（访客车位），表达被“指定的”专属访客车位，选过去分词 designated。",
            family: "designated (adj./v-ed指定的) | designate (v.原形) | misplaced (adj.放错的) | projected (adj.推算的)。",
            details: "designated spaces 意为指定车位。designate 是动词原形，不能直接作名词 spaces 的前置修饰定语。",
            cn: "在指定访客车位停车且未出示授权许可证的车辆将被开罚单。",
            jp: "許可証を提示せずに指定された（designated）来客用スペースに駐車された車両には、違反切符が切られます。"
        }
    },
    {
        id: 15,
        target: "misplace",
        category: "困难",
        stem: "Administrative assistants spent nearly three hours searching through the archives for the ________ sales contract.",
        options: ["misplaced", "misplace", "confidential", "compliant"],
        correct: "misplaced",
        explanations: {
            guide: "过去分词作定语修饰。修饰 sales contract（销售合同），结合花了三小时在档案库中搜寻，表达被“放错地方/遗失的”合同，选 misplaced。",
            family: "misplaced (adj./v-ed被放错位置的/遗失的) | misplace (v.动词原形) | confidential (adj.机密的) | compliant (adj.合规的)。",
            details: "misplaced contract 意为放错位置而一时找不到的合同。misplace 为原形动词，不能作名词 contract 的前置定语。",
            cn: "行政助理花了将近三个小时在档案库中搜寻那份放错位置的销售合同。",
            jp: "行政アシスタントは、置き忘れた（misplaced）売買契約書を探すためにアーカイブを3時間近く捜索しました。"
        }
    },
    {
        id: 16,
        target: "projection",
        category: "困难",
        stem: "The chief financial officer presented a detailed multi-year revenue ________ during the annual shareholder meeting.",
        options: ["projection", "projector", "compliance", "lodging"],
        correct: "projection",
        explanations: {
            guide: "商务报告复合名词。multi-year revenue ________ 属于财报专有名词，表达多年收入“预测/推算”，选 projection。",
            family: "projection (n.预测/推算) | projector (n.投影仪) | compliance (n.合规) | lodging (n.住宿)。",
            details: "revenue projection 意为收入预测。projector 指放映/投影器材，在此处不能充当描述财务走势的报告概念中心语。",
            cn: "首席财务官在年度股东大会上展示了详细的多年期收入预测。",
            jp: "最高財務責任者は、年次株主総会において詳細な複数年の収益予測（projection）を発表しました。"
        }
    },
    {
        id: 17,
        target: "leak",
        category: "困难",
        stem: "Corporate security initiated a formal investigation into the unauthorized ________ of proprietary software codes.",
        options: ["leaking", "leak", "misplacement", "freight"],
        correct: "leaking",
        explanations: {
            guide: "动名词与非授权外泄。unauthorized ________ of proprietary codes 表达对专有代码未经授权的“泄露行为”，选动名词形式 leaking 与 of 搭配。",
            family: "leaking (n./v-ing泄露行为) | leak (v./n.原形) | misplacement (n.错位) | freight (n.货运)。",
            details: "the leaking of codes 意为代码的泄露。强调有人主动执行泄密行为时，选用动名词结构 the leaking of。",
            cn: "公司安保部门对专有软件代码未经授权的泄露事件展开了正式调查。",
            jp: "企業セキュリティ部門は、専有ソフトウェアコードの不正な流出/漏洩（leaking）に関する正式な調査を開始しました。"
        }
    },
    {
        id: 18,
        target: "slot",
        category: "困难",
        stem: "Due to severe runway congestion, airport ground control assigned a revised departure ________ to the international flight.",
        options: ["slot", "freight", "lodging", "compliance"],
        correct: "slot",
        explanations: {
            guide: "航空运营高阶术语。departure ________ 属于民航专有名词，表达起飞“时刻/时隙（起飞排期）”，选 slot。",
            family: "slot (n.时刻/时隙/时间段) | freight (n.货运) | lodging (n.住宿) | compliance (n.合规)。",
            details: "departure slot 专指航空公司的起飞时刻/档期。freight（货运）、lodging（住宿）无法构成特定的民航离港排班术语。",
            cn: "由于跑道严重拥堵，机场地面管制部门为该国际航班分配了调整后的起飞时刻。",
            jp: "滑走路の激しい混雑のため、空港の地上管制は国際便に修正された出発枠（slot）を割り当てました。"
        }
    }
];