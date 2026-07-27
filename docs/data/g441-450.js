// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data171-180.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "extension",
        pos: "名",
        ipa: "/ɪkˈstenʃn/",
        cn: "延期；电话分机；扩展",
        jp: "延長、延期；内線電話；拡張",
        family: "extend / extended / extensive",
        tips: "商务与办公场景高频：request an extension（请求延期），call extension 402（拨打分机 402）。",
        desc: "He asked for an extension."
    },
    {
        word: "contractor",
        pos: "名",
        ipa: "/ˈkɑːntræktər/",
        cn: "承包商，承包人",
        jp: "請負業者、契約者",
        family: "contract / contracting / contractual",
        tips: "建筑与工程场景高频：hire an independent contractor（聘请独立承包商），building contractor（建筑承包商）。",
        desc: "The contractor finished the job."
    },
    {
        word: "certificate",
        pos: "名",
        ipa: "/sərˈtɪfɪkət/",
        cn: "证书，证明，执照",
        jp: "証明書、修了証、免許状",
        family: "certify / certified / certification",
        tips: "专业资质高频：gift certificate（礼品券），certificate of completion（结业证书），safety certificate（安全证书）。",
        desc: "She received a training certificate."
    },
    {
        word: "expire",
        pos: "動",
        ipa: "/ɪkˈspaɪər/",
        cn: "到期，失效",
        jp: "期限が切れる、満了する",
        family: "expiration / expired / expiry",
        tips: "合同与证件高频：expire next month（下个月到期）；名词形式为 expiration（到期/满期）。",
        desc: "My passport will expire soon."
    },
    {
        word: "assembly",
        pos: "名",
        ipa: "/əˈsembli/",
        cn: "集会，装配，组装",
        jp: "集会、組み立て、アセンブリ",
        family: "assemble / assembler / assembled",
        tips: "制造业与工程高频：assembly line（装配线/流水线），assembly instructions（组装说明书）。",
        desc: "The assembly line is running."
    },
    {
        word: "eligible",
        pos: "形",
        ipa: "/ˈelɪdʒəbl/",
        cn: "有资格的，合格的",
        jp: "資格がある、不適格でない",
        family: "eligibility / ineligible",
        tips: "福利与语法填空极高频：be eligible for sth / be eligible to do sth（有资格做/享受某事）。",
        desc: "You are eligible for benefits."
    },
    {
        word: "hardware",
        pos: "名",
        ipa: "/ˈhɑːrdwer/",
        cn: "硬件，五金器具",
        jp: "ハードウェア、金物類",
        family: "software / hardware store",
        tips: "IT与采购高频：computer hardware（计算机硬件），hardware store（五金店）。",
        desc: "They upgraded the computer hardware."
    },
    {
        word: "itinerary",
        pos: "名",
        ipa: "/aɪˈtɪnəreri/",
        cn: "行程，旅行日程",
        jp: "旅行日程、行程表",
        family: "itinerant / itinerate",
        tips: "出差与旅游高频：travel itinerary（旅行行程），detailed itinerary（详细行程表）。",
        desc: "Check your flight itinerary online."
    },
    {
        word: "highlight",
        pos: "動/名",
        ipa: "/ˈhaɪlaɪt/",
        cn: "强调，突出；亮点，精彩部分",
        jp: "強調する、目立たせる；ハイライト",
        family: "highlighted / highlighting",
        tips: "报告与演示高频：highlight the main points（强调要点），the highlight of the trip（行程的精彩亮点）。",
        desc: "The report highlights key results."
    },
    {
        word: "payroll",
        pos: "名",
        ipa: "/ˈpeɪroʊl/",
        cn: "工资表，薪酬总额",
        jp: "給与支払簿、給与総額",
        family: "pay / payee / payer",
        tips: "财务与HR核心词：on the payroll（在职/领薪人员），payroll department（薪酬部门）。",
        desc: "The payroll is processed monthly."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "extension",
        category: "简单",
        stem: "Mr. Miller requested a deadline ________ for his project proposal due to unforeseen research delays.",
        options: ["extension", "expire", "hardware", "contractor"],
        correct: "extension",
        explanations: {
            guide: "名词修饰与语境考点。deadline ________ 属于商务固定搭配，指截止日期的“延期”，选 extension。",
            family: "extension (n.延期/分机) | expire (v.到期) | hardware (n.硬件) | contractor (n.承包商)。",
            details: "deadline extension 意为截止日期延期。expire 是动词，不能在名词 deadline 后面充当中心语。",
            cn: "由于意想不到的研究延误，米勒先生申请延长其项目方案的截止日期。",
            jp: "予期せぬ研究の遅れのため、ミラー氏はプロジェクト提案の締め切りの延長（extension）を要請しました。"
        }
    },
    {
        id: 2,
        target: "expire",
        category: "简单",
        stem: "Please check your passport to ensure that it will not ________ before your upcoming international flight.",
        options: ["expire", "expiration", "eligible", "itinerary"],
        correct: "expire",
        explanations: {
            guide: "情态动词后的动词原形。will not 后面接动词原形，表达护照不会“到期/失效”，选 expire。",
            family: "expire (v.到期) | expiration (n.到期) | eligible (adj.有资格的) | itinerary (n.行程)。",
            details: "will not expire 构成将来时否定句。expiration 是名词，不能跟在情态动词 will 后。",
            cn: "请检查您的护照，确保它不会在您即将进行的国际航班之前到期。",
            jp: "近く搭乗する国際線の前にパスポートの期限が切れない（expire）か確認してください。"
        }
    },
    {
        id: 3,
        target: "hardware",
        category: "简单",
        stem: "The IT department purchased new computer ________ to improve overall network processing speed.",
        options: ["hardware", "contractor", "payroll", "certificate"],
        correct: "hardware",
        explanations: {
            guide: "IT设施名词考点。computer ________ 属于常用电脑术语，指计算机“硬件”，选 hardware。",
            family: "hardware (n.硬件) | contractor (n.承包商) | payroll (n.工资表) | certificate (n.证书)。",
            details: "computer hardware 意为计算机硬件。contractor（承包商）、payroll（工资表）均与提升网络处理速度不匹配。",
            cn: "IT 部门采购了新的计算机硬件，以提高整体网络处理速度。",
            jp: "IT部門は全体的なネットワーク処理速度を向上させるために、新しいコンピュータハードウェア（hardware）を購入しました。"
        }
    },
    {
        id: 4,
        target: "contractor",
        category: "简单",
        stem: "The company hired an independent ________ to renovate the corporate headquarters building.",
        options: ["contractor", "contracting", "assembly", "itinerary"],
        correct: "contractor",
        explanations: {
            guide: "职业/机构名词考点。hired an independent ________ 结合翻修总部大楼，雇佣的对象选 contractor（承包商）。",
            family: "contractor (n.承包商) | contracting (n.承包) | assembly (n.组装) | itinerary (n.行程)。",
            details: "independent contractor 指独立承包商。contracting 是动名词或分词，不如 contractor 指代具体承包主体精确。",
            cn: "公司聘请了一家独立承包商来翻修公司总部大楼。",
            jp: "同社は本社ビルの改修のために独立した請負業者（contractor）を雇いました。"
        }
    },
    {
        id: 5,
        target: "certificate",
        category: "简单",
        stem: "All participants who complete the training course will receive an official ________ of completion.",
        options: ["certificate", "certify", "expire", "highlight"],
        correct: "certificate",
        explanations: {
            guide: "固定资质凭证短语。________ of completion 属于培训与教育场景高频表达，意为“结业证书”，选 certificate。",
            family: "certificate (n.证书) | certify (v.证明/认证) | expire (v.到期) | highlight (v.强调)。",
            details: "certificate of completion 指结业证书。certify 为动词，不能被不定冠词 an 和形容词 official 修饰。",
            cn: "所有完成培训课程的学员都将获得正式的结业证书。",
            jp: "研修コースを修了したすべての参加者には、正式な修了証明書（certificate）が授与されます。"
        }
    },
    {
        id: 6,
        target: "eligible",
        category: "简单",
        stem: "Full-time employees are ________ to apply for tuition reimbursement after six months of service.",
        options: ["eligible", "eligibility", "assembly", "payroll"],
        correct: "eligible",
        explanations: {
            guide: "表语形容词与固定句式。be ________ to do sth 是托业最高频语法结构之一，意为“有资格做某事”，选 eligible。",
            family: "eligible (adj.有资格的) | eligibility (n.资格) | assembly (n.集会) | payroll (n.工资表)。",
            details: "are eligible to apply 指有资格申请。eligibility 是名词，不能在系动词 are 后面充当表语形容词。",
            cn: "全职员工在任职满六个月后，有资格申请学费报销。",
            jp: "正社員は勤続6ヶ月以降、授業料返還を申請する資格があります（eligible）。"
        }
    },
    {
        id: 7,
        target: "itinerary",
        category: "中等",
        stem: "The travel agent sent a detailed flight ________ to the director prior to his business trip to Tokyo.",
        options: ["itinerary", "extension", "certificate", "hardware"],
        correct: "itinerary",
        explanations: {
            guide: "出差行程名词。flight ________ 结合旅行社发送和去东京出差，文件选 itinerary（行程表/日程）。",
            family: "itinerary (n.行程表) | extension (n.延期) | certificate (n.证书) | hardware (n.硬件)。",
            details: "flight itinerary 意为航班行程单。extension（延期）、certificate（证书）均非包含航班时间安排的行程凭证。",
            cn: "旅行社在董事前往东京出差前，向其发送了详细的航班行程单。",
            jp: "旅行会社は取締役の東京出張に先立ち、詳細な飛行行程表（itinerary）を送付しました。"
        }
    },
    {
        id: 8,
        target: "assembly",
        category: "中等",
        stem: "Plant workers must strictly follow the ________ line safety guidelines during their daily shifts.",
        options: ["assembly", "assemble", "contractor", "expire"],
        correct: "assembly",
        explanations: {
            guide: "制造业复合名词。________ line 属于工厂制造专属词组，意为“装配线/流水线”，选 assembly。",
            family: "assembly (n.装配/组装) | assemble (v.组装) | contractor (n.承包商) | expire (v.到期)。",
            details: "assembly line 意为生产流水线/装配线。assemble 是动词，不能作名词 line 的前置定语。",
            cn: "工厂工人日常轮班期间必须严格遵守装配线安全准则。",
            jp: "工場の作業員は日々のシフト中、組み立てライン（assembly）の安全ガイドラインを厳格に遵守しなければなりません。"
        }
    },
    {
        id: 9,
        target: "highlight",
        category: "中等",
        stem: "The annual report will ________ the key achievements of the research team over the past year.",
        options: ["highlight", "highlighted", "eligible", "itinerary"],
        correct: "highlight",
        explanations: {
            guide: "将来时态动词原形。will 后面接动词原形，表达年度报告将“突出/强调”过去一年的关键成就，选 highlight。",
            family: "highlight (v.强调/突出) | highlighted (v-ed) | eligible (adj.合格的) | itinerary (n.行程)。",
            details: "will highlight 意为将突出强调。highlighted 是过去式/过去分词，不能跟在情态动词 will 后面。",
            cn: "年度报告将突出强调研究团队在过去一年取得的关键成就。",
            jp: "年次報告書は過去1年間の研究チームの主な成果を強調する（highlight）予定です。"
        }
    },
    {
        id: 10,
        target: "payroll",
        category: "中等",
        stem: "The accounting department is responsible for managing employee ________ and tax withholdings.",
        options: ["payroll", "hardware", "extension", "contractor"],
        correct: "payroll",
        explanations: {
            guide: "财务管理名词。managing employee ________ 结合税款代扣（tax withholdings），管理的对象选 payroll（工资表/薪酬）。",
            family: "payroll (n.工资表/薪酬) | hardware (n.硬件) | extension (n.分机) | contractor (n.承包商)。",
            details: "employee payroll 指员工薪酬/工资表。hardware（硬件）、extension（延期）与财务代扣税款职责无关。",
            cn: "财务部负责管理员工的薪酬发放和代扣税款。",
            jp: "経理部門は従業員の給与支払簿（payroll）および源泉徴収税の管理を担当しています。"
        }
    },
    {
        id: 11,
        target: "extension",
        category: "中等",
        stem: "To reach the customer service department, please dial ________ 402 on your desk phone.",
        options: ["extension", "extend", "certificate", "assembly"],
        correct: "extension",
        explanations: {
            guide: "办公电话专属名称。dial ________ 402 指拨打“分机号” 402，选 extension。",
            family: "extension (n.分机/延期) | extend (v.延伸) | certificate (n.证书) | assembly (n.装配)。",
            details: "dial extension 402 意为拨打分机 402。extend 是动词，不能放在数字前充当分机名称。",
            cn: "如需联系客户服务部，请在座机上拨打分机号 402。",
            jp: "カスタマーサービス部門にお問い合わせの際は、固定電話で内線（extension）402におかけください。"
        }
    },
    {
        id: 12,
        target: "expire",
        category: "中等",
        stem: "Subscribers are advised to renew their magazine plans before the ________ date printed on the cover.",
        options: ["expiration", "expire", "eligible", "highlight"],
        correct: "expiration",
        explanations: {
            guide: "派生名词作定语。________ date 属于商务与刊物常用表达，意为“到期日/截止日期”，选 expiration。",
            family: "expiration (n.到期/届满) | expire (v.到期) | eligible (adj.合格的) | highlight (v.强调)。",
            details: "expiration date 意为到期日。expire 是动词，不能直接修饰名词 date。",
            cn: "建议订阅者在封面印制的到期日之前续订其杂志套餐。",
            jp: "定期購読者は、表紙に印刷されている有効期限（expiration）日までに雑誌プランを更新することが推奨されます。"
        }
    },
    {
        id: 13,
        target: "eligible",
        category: "困难",
        stem: "To verify your ________ for the corporate discount program, please present a valid employee badge.",
        options: ["eligibility", "eligible", "ineligible", "payroll"],
        correct: "eligibility",
        explanations: {
            guide: "物主代词后的名词中心语。verify your ________ 结构中，物主代词 your 后面需填写名词形式 eligibility（资格）。",
            family: "eligibility (n.资格/合格性) | eligible (adj.有资格的) | ineligible (adj.无资格的) | payroll (n.工资表)。",
            details: "verify your eligibility 意为核实您的资格。eligible 是形容词，不能直接在物主代词 your 后面作动词 verify 的宾语。",
            cn: "为了核实您享受公司折扣计划的资格，请出示有效的员工证。",
            jp: "企業割引プログラムの適用資格（eligibility）を確認するため、有効な社員証をご提示ください。"
        }
    },
    {
        id: 14,
        target: "contractor",
        category: "困难",
        stem: "All commercial building repairs must adhere strictly to the ________ terms established last month.",
        options: ["contractual", "contractor", "assembly", "itinerary"],
        correct: "contractual",
        explanations: {
            guide: "派生形容词修饰名词。修饰 terms（条款），表达遵循“合同上的/契约的”条款，选形容词 contractual。",
            family: "contractual (adj.合同的/契约的) | contractor (n.承包商) | assembly (n.装配) | itinerary (n.行程)。",
            details: "contractual terms 属于法律与商务核心词组，意为合同条款。contractor 是名词（承包商），不能做 terms 的修饰形容词。",
            cn: "所有商业大楼的维修都必须严格遵循上个月确立的合同条款。",
            jp: "すべての商業ビルの修理は、先月定められた契約上の（contractual）条件を厳格に遵守しなければなりません。"
        }
    },
    {
        id: 15,
        target: "certificate",
        category: "困难",
        stem: "Only highly ________ financial advisors are authorized to manage high-net-worth client portfolios.",
        options: ["certified", "certificate", "certify", "expired"],
        correct: "certified",
        explanations: {
            guide: "分词/形容词作前置定语。修饰 financial advisors，副词 highly 后面接 certified，表达“获得认证的/持证的”，选 certified。",
            family: "certified (adj.获得认证的/持证的) | certificate (n.证书) | certify (v.证明) | expired (adj.到期的)。",
            details: "highly certified advisors 指获得高阶认证的理财顾问。certificate 是名词，不能被副词 highly 修饰作为前置定语。",
            cn: "只有获得高度认证的理财顾问，才被授权管理高净值客户的投资组合。",
            jp: "高水準の資格を持つ（certified）ファイナンシャルアドバイザーのみが、高額所得顧客のポートフォリオ管理を許可されています。"
        }
    },
    {
        id: 16,
        target: "assembly",
        category: "困难",
        stem: "Technicians were instructed to ________ the prototype machinery inside the laboratory before testing.",
        options: ["assemble", "assembly", "highlight", "extension"],
        correct: "assemble",
        explanations: {
            guide: "被动语态后接不定式动词原形。were instructed to 后面接动词原形，表达被指示去“组装”原型机械，选 assemble。",
            family: "assemble (v.组装/装配) | assembly (n.组装/集会) | highlight (v.强调) | extension (n.延期)。",
            details: "instructed to assemble... 意为被指示去组装……。assembly 是名词，不能跟在不定式符号 to 后作谓语动词原形。",
            cn: "技术人员接到指示，在测试前在实验室内部组装原型机械。",
            jp: "技術者はテストの前に実験室で試作機械を組み立てる（assemble）よう指示されました。"
        }
    },
    {
        id: 17,
        target: "itinerary",
        category: "困难",
        stem: "The sales executive maintains an ________ business schedule that requires frequent overseas travel.",
        options: ["itinerant", "itinerary", "eligible", "contractual"],
        correct: "itinerant",
        explanations: {
            guide: "高阶派生形容词考点。修饰 business schedule，表达“巡回的/流动出差的”日程安排，选形容词 itinerant。",
            family: "itinerant (adj.巡回的/流动出差的) | itinerary (n.行程表) | eligible (adj.合格的) | contractual (adj.合同的)。",
            details: "an itinerant business schedule 指经常四处奔波出差的业务日程。itinerary 是名词（行程表），不能在此充当形容词定语。",
            cn: "这位销售高管保持着频繁巡回出差的业务日程，需要经常去海外旅行。",
            jp: "その営業幹部は、頻繁な海外出張を必要とする巡回（itinerant）ビジネススケジュールを維持しています。"
        }
    },
    {
        id: 18,
        target: "payroll",
        category: "困难",
        stem: "The company currently has over five hundred full-time employees listed on its monthly ________.",
        options: ["payroll", "hardware", "expiration", "certifications"],
        correct: "payroll",
        explanations: {
            guide: "商务一词多义与固定短语。on its monthly ________ 属于职场固定表达，在领薪员工名册/工资表上用 on the payroll。",
            family: "payroll (n.工资表/在职领薪名册) | hardware (n.硬件) | expiration (n.到期) | certifications (n.认证复数)。",
            details: "listed on its payroll 意为列入其薪酬发放名册（即在职受薪员工）。expiration（到期）、hardware（硬件）均无受薪人员名册之意。",
            cn: "该公司目前有五百多名全职员工列在其月度受薪员工名册上。",
            jp: "同社は現在、月次給与支払簿（payroll）に500人以上の正社員が記載されています。"
        }
    }
];