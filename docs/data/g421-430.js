// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data151-160.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "inspection",
        pos: "名",
        ipa: "/ɪnˈspekʃn/",
        cn: "检查，检验，视察",
        jp: "検査、視察、点検",
        family: "inspect / inspector / inspectoral",
        tips: "安检与质量管理高频：safety inspection（安全检查），pass the inspection（通过检验）。",
        desc: "The inspection is completed."
    },
    {
        word: "grocery",
        pos: "名",
        ipa: "/ˈɡroʊsəri/",
        cn: "杂货，食品杂货店",
        jp: "食料雑貨、食料品店",
        family: "groceries / grocer",
        tips: "生活与零售高频：grocery store（食品杂货店），buy groceries（买菜/杂货）。",
        desc: "She buys fresh grocery items."
    },
    {
        word: "fabric",
        pos: "名",
        ipa: "/ˈfæbrɪk/",
        cn: "布料，织物",
        jp: "生地、織物",
        family: "fabricate / fabrication",
        tips: "服装与制造业高频：cotton fabric（棉布），fabric quality（面料质量）。",
        desc: "The fabric is very soft."
    },
    {
        word: "paperwork",
        pos: "名",
        ipa: "/ˈpeɪpərwɜːrk/",
        cn: "文书工作，文件",
        jp: "書類作成、事務手続",
        family: "paper / work",
        tips: "办公室高频词：complete the paperwork（完成文书工作），process paperwork（处理文件）。",
        desc: "He finished all the paperwork."
    },
    {
        word: "personnel",
        pos: "名",
        ipa: "/ˌpɜːrsəˈnel/",
        cn: "人员，员工；人事部门",
        jp: "職員、人員、人事部",
        family: "person / personal / personalize",
        tips: "注意拼写与重音：personnel department（人事部门），authorized personnel（授权人员）。",
        desc: "All personnel must attend."
    },
    {
        word: "inquire",
        pos: "動",
        ipa: "/ɪnˈkwaɪər/",
        cn: "询问，打听",
        jp: "問い合わせる、尋ねる",
        family: "inquiry / inquiring / inquirer",
        tips: "客服与商务高频：inquire about sth（询问某事）。名词形式为 inquiry（咨询/问询）。",
        desc: "She called to inquire."
    },
    {
        word: "experienced",
        pos: "形",
        ipa: "/ɪkˈspɪriənst/",
        cn: "富有经验的，资深的",
        jp: "経験豊富な、熟練した",
        family: "experience / experiencing",
        tips: "招聘与职场核心词：experienced staff/engineer（富有经验的员工/工程师）。",
        desc: "He is an experienced worker."
    },
    {
        word: "lease",
        pos: "名/動",
        ipa: "/liːs/",
        cn: "租约，租赁；出租",
        jp: "賃貸借契約；賃貸する",
        family: "lessor / lessee / leasing",
        tips: "租赁地产高频：sign a lease（签订租约），lease agreement（租赁协议）。",
        desc: "They signed the lease today."
    },
    {
        word: "multiple",
        pos: "形/名",
        ipa: "/ˈmʌltɪpl/",
        cn: "多样的，多个的；倍数",
        jp: "多数の、多様な",
        family: "multiply / multiplicity / multiplier",
        tips: "高频搭配：multiple choices（多项选择），multiple locations（多个地点）。",
        desc: "There are multiple options."
    },
    {
        word: "assign",
        pos: "動",
        ipa: "/əˈsaɪn/",
        cn: "分配，指派，布置",
        jp: "割り当てる、任命する",
        family: "assignment / assignee / assigned",
        tips: "职场任务高频：assign tasks to sb（向某人分配任务）。名词形式 assignment（任务/作业）。",
        desc: "She will assign the tasks."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "inspection",
        category: "简单",
        stem: "The safety officer conducted a thorough ________ of the manufacturing plant this morning.",
        options: ["inspection", "inspect", "paperwork", "lease"],
        correct: "inspection",
        explanations: {
            guide: "限定词与形容词后的名词考点。a thorough 后面需要接名词，表达对工厂进行“全面检查”，选 inspection。",
            family: "inspection (n.检查) | inspect (v.检查) | paperwork (n.文书) | lease (n.租约)。",
            details: "a thorough inspection 意为全面检查。inspect 是动词，不能紧跟在形容词 thorough 后面作宾语中心语。",
            cn: "安全官员今天早上对生产工厂进行了全面检查。",
            jp: "安全管理官は今朝、製造工場の徹底的な点検（inspection）を実施しました。"
        }
    },
    {
        id: 2,
        target: "grocery",
        category: "简单",
        stem: "Customers can purchase fresh produce and ________ items at the neighborhood supermarket.",
        options: ["grocery", "groceries", "fabric", "personnel"],
        correct: "grocery",
        explanations: {
            guide: "名词作前置定语。grocery items 属于固定购物短语，意为“杂货类商品/食品”，选 grocery。",
            family: "grocery (n.杂货/食品店) | groceries (n.杂货复数) | fabric (n.布料) | personnel (n.人员)。",
            details: "grocery items 是零售常见搭配。groceries 为复数形式，作前置定语修饰 items 时通常使用单数形式 grocery。",
            cn: "顾客可以在社区超市购买新鲜农产品和食品杂货。",
            jp: "お客様は近所のスーパーマーケットで新鲜な農産物や食料品（grocery）類を購入できます。"
        }
    },
    {
        id: 3,
        target: "inquire",
        category: "简单",
        stem: "Potential buyers called the office to ________ about the price of the commercial property.",
        options: ["inquire", "inquiry", "assign", "lease"],
        correct: "inquire",
        explanations: {
            guide: "动词不定式考点。called to 后面需要接动词原形，结合介词 about 构成 inquire about（询问某事），选 inquire。",
            family: "inquire (v.询问) | inquiry (n.询问/打听) | assign (v.分配) | lease (n./v.租约)。",
            details: "inquire about the price 意为询问价格。inquiry 是名词，不能用在不定式符号 to 后面。",
            cn: "潜在买家打电话给办公室询问该商业地产的价格。",
            jp: "潜在的な買主は商業物件の価格について問い合わせる（inquire）ためにオフィスに電話しました。"
        }
    },
    {
        id: 4,
        target: "paperwork",
        category: "简单",
        stem: "All new employees are requested to fill out the necessary ________ on their first day of work.",
        options: ["paperwork", "personnel", "inspection", "multiple"],
        correct: "paperwork",
        explanations: {
            guide: "办公流程名词考点。fill out the necessary ________ 结合入职流程，表达填写必要的“文书表格/文件”，选 paperwork。",
            family: "paperwork (n.文书工作/文件) | personnel (n.人员) | inspection (n.检查) | multiple (adj.多样的)。",
            details: "necessary paperwork 意为必需的文件手续。personnel（人员）、inspection（检查）均非用于填写的文档。",
            cn: "所有新员工都被要求在入职第一天填写必要的文件表格。",
            jp: "すべての新入社員は出勤初日に必要な書類（paperwork）に記入することが求められます。"
        }
    },
    {
        id: 5,
        target: "experienced",
        category: "简单",
        stem: "The project manager is looking for an ________ software engineer to lead the development team.",
        options: ["experienced", "experience", "inquire", "assign"],
        correct: "experienced",
        explanations: {
            guide: "修饰名词的形容词考点。在冠词 an 与名词 software engineer 之间需要接形容词作定语，表达“富有经验的”，选 experienced。",
            family: "experienced (adj.富有经验的) | experience (n./v.经验/经历) | inquire (v.询问) | assign (v.分配)。",
            details: "an experienced engineer 指富有经验的工程师。experience 作名词时前置修饰 engineer 不如形容词 experienced 规范地道。",
            cn: "项目经理正在寻找一位经验丰富的软件工程师来领导开发团队。",
            jp: "プロジェクトマネージャーは開発チームを率いる経験豊富な（experienced）ソフトウェアエンジニアを探しています。"
        }
    },
    {
        id: 6,
        target: "lease",
        category: "简单",
        stem: "The store owner agreed to sign a three-year ________ for the retail space downtown.",
        options: ["lease", "leasing", "fabric", "grocery"],
        correct: "lease",
        explanations: {
            guide: "合同法律名词考点。sign a three-year ________ 结合商铺空间，表达签署三年“租约”，选 lease。",
            family: "lease (n.租约) | leasing (n.租赁业务) | fabric (n.布料) | grocery (n.杂货)。",
            details: "sign a lease 意为签署租约。leasing 是抽象的租赁行业/行为，作具体签署的文件时选 lease。",
            cn: "店主同意为市中心零售场地签署一份为期三年的租约。",
            jp: "店主はダウンタウンの店舗スペースについて3年間の賃貸借契約（lease）に署名することに同意しました。"
        }
    },
    {
        id: 7,
        target: "assign",
        category: "中等",
        stem: "The team supervisor will ________ specific tasks to each team member during the morning briefing.",
        options: ["assign", "assignment", "inquire", "inspect"],
        correct: "assign",
        explanations: {
            guide: "情态动词后的动词原形。will 后面接动词原形，结合结构 assign sth to sb（把某事分配给某人），选 assign。",
            family: "assign (v.分配/指派) | assignment (n.任务) | inquire (v.询问) | inspect (v.检查)。",
            details: "will assign tasks 指将分配任务。assignment 是名词，不能紧跟在情态动词 will 后面做谓语。",
            cn: "团队主管将在晨会期间分配具体任务给每位团队成员。",
            jp: "チームの上司は朝のミーティング中に各チームメンバーに特定のタスクを割り当てる（assign）予定です。"
        }
    },
    {
        id: 8,
        target: "personnel",
        category: "中等",
        stem: "Due to confidentiality policies, only authorized ________ are allowed into the server room.",
        options: ["personnel", "personal", "paperwork", "multiple"],
        correct: "personnel",
        explanations: {
            guide: "高频职场名词短语。authorized ________ 属于企业安全管理固定词组，意为“授权人员”，选 personnel。",
            family: "personnel (n.人员/员工) | personal (adj.个人的) | paperwork (n.文书) | multiple (adj.多样的)。",
            details: "authorized personnel 意为授权人员。personal 是形容词（个人的），不能单独放在形容词 authorized 后面作主语中心语。",
            cn: "由于保密政策，只有授权人员才被允许进入服务器机房。",
            jp: "機密保持規定により、許可された人員（personnel）のみがサーバー室への入室を認められています。"
        }
    },
    {
        id: 9,
        target: "fabric",
        category: "中等",
        stem: "The fashion designer selected a lightweight silk ________ for the new summer clothing line.",
        options: ["fabric", "fabricate", "grocery", "inspection"],
        correct: "fabric",
        explanations: {
            guide: "纺织材料名词考点。lightweight silk ________ 表达服装设计的“轻盈丝绸面料/布料”，选 fabric。",
            family: "fabric (n.布料/织物) | fabricate (v.捏造/制造) | grocery (n.杂货) | inspection (n.检查)。",
            details: "silk fabric 指丝绸面料。fabricate 是动词（伪造/制作），不能充当选材对象的名词中心语。",
            cn: "服装设计师为新的夏季服装系列选择了一款轻盈的丝绸面料。",
            jp: "ファッションデザイナーは新しい夏の衣料品ラインのために軽量のシルク生地（fabric）を選びました。"
        }
    },
    {
        id: 10,
        target: "multiple",
        category: "中等",
        stem: "The job candidate holds ________ qualifications in both business administration and computer science.",
        options: ["multiple", "multiply", "experienced", "lease"],
        correct: "multiple",
        explanations: {
            guide: "修饰复数名词的形容词。修饰 qualifications（资格/证书），表达拥有“多重/多个”资格，选 multiple。",
            family: "multiple (adj.多重的/多个的) | multiply (v.乘/增加) | experienced (adj.有经验的) | lease (n.租约)。",
            details: "holds multiple qualifications 指拥有多项资格。multiply 是动词（增加/乘以），无法做前置修饰形容词。",
            cn: "该求职者拥有工商管理和计算机科学双重资格证书。",
            jp: "その応募者は経営学とコンピュータサイエンスの両方で複数の（multiple）資格を所持しています。"
        }
    },
    {
        id: 11,
        target: "inquire",
        category: "中等",
        stem: "The customer service representative promptly handled the client's ________ regarding billing discrepancies.",
        options: ["inquiry", "inquire", "assignment", "paperwork"],
        correct: "inquiry",
        explanations: {
            guide: "动词派生名词考点。handled the client's ________ 结构中，物主代词后需填写名词，表达处理客户的“质询/问询”，选 inquiry。",
            family: "inquiry (n.质询/问询) | inquire (v.询问) | assignment (n.任务) | paperwork (n.文书)。",
            details: "handled the inquiry 指处理质询。inquire 是动词，不能直接作及物动词 handle 的宾语。",
            cn: "客户服务代表迅速处理了客户关于账单差异的问询。",
            jp: "カスタマーサービス担当者は、請求書の不一致に関する顧客の問い合わせ（inquiry）迅速に対応しました。"
        }
    },
    {
        id: 12,
        target: "inspection",
        category: "中等",
        stem: "An independent quality inspector arrived at the facility to ________ the newly installed equipment.",
        options: ["inspect", "inspection", "assign", "lease"],
        correct: "inspect",
        explanations: {
            guide: "动词不定式考点。arrived at the facility to 后面接动词原形，表达来“检查/检验”设备，选 inspect。",
            family: "inspect (v.检查/检验) | inspection (n.检查) | assign (v.分配) | lease (v.出租)。",
            details: "to inspect the equipment 指检验设备。inspection 是名词，不能跟在不定式符号 to 后面作谓语动词。",
            cn: "一名独立质量检测员到达现场，检验新安装的设备。",
            jp: "第三者品質検査員が新しく設置された設備を点検する（inspect）ために施設に到着しました。"
        }
    },
    {
        id: 13,
        target: "paperwork",
        category: "困难",
        stem: "To expedite the shipping process, suppliers must submit all completed customs ________ before noon.",
        options: ["paperwork", "personnel", "grocery", "lease"],
        correct: "paperwork",
        explanations: {
            guide: "高阶商务清关短语。customs ________ 属于进出口贸易固定词组，意为“海关报关文件/清关手续”，选 paperwork。",
            family: "paperwork (n.文书文件) | personnel (n.人员) | grocery (n.杂货) | lease (n.租约)。",
            details: "customs paperwork 专指报关文书/清关文件。personnel（人员）、lease（租约）在此清关语境下均不合逻辑。",
            cn: "为了加快发货速度，供应商必须在中午之前提交所有填写完毕的海关报关文件。",
            jp: "出荷プロセスを迅速化するため、サプライヤーは正午までに完了した通関書類（paperwork）を提出しなければなりません。"
        }
    },
    {
        id: 14,
        target: "assign",
        category: "困难",
        stem: "Each technician completed their designated project ________ prior to the end of the fiscal quarter.",
        options: ["assignment", "assign", "inquiry", "inspection"],
        correct: "assignment",
        explanations: {
            guide: "动词派生名词考点。completed their designated project ________ 结构中，形容词之后接名词作宾语，选 assignment（指派任务）。",
            family: "assignment (n.分配的任务/工作) | assign (v.指派) | inquiry (n.询问) | inspection (n.检查)。",
            details: "completed project assignment 意为完成了指派的项目任务。assign 是动词，不能作动词 complete 的宾语。",
            cn: "每位技术人员都在本财季结束之前完成了指派给他们的项目任务。",
            jp: "各技術者は会計四半期の終わりまでに指定されたプロジェクト課題（assignment）を完了しました。"
        }
    },
    {
        id: 15,
        target: "lease",
        category: "困难",
        stem: "The commercial real estate company finalized the property ________ agreement with the tech startup.",
        options: ["leasing", "lease", "experienced", "multiple"],
        correct: "leasing",
        explanations: {
            guide: "复合名词定语考点。property ________ agreement 属于地产商务固定表达，意为“物业租赁协议”，选 leasing 作前置定语。",
            family: "leasing (n./adj.租赁) | lease (n./v.租约) | experienced (adj.有经验的) | multiple (adj.多重的)。",
            details: "property leasing agreement 专指地产租赁协议。lease agreement 虽然常见，但在与 property 连用修饰 agreement 时，常用动名词/分词形式 leasing 作行业专属定语。",
            cn: "这家商业地产公司与这家初创科技公司敲定了物业租赁协议。",
            jp: "商業不動産会社は技術系スタートアップ企業との物件賃貸（leasing）契約を締めくくりました。"
        }
    },
    {
        id: 16,
        target: "personnel",
        category: "困难",
        stem: "The human resources director announced a major restructuring of the department's ________ management system.",
        options: ["personnel", "personal", "paperwork", "fabric"],
        correct: "personnel",
        explanations: {
            guide: "人事管理高阶名词。________ management system 指“人员/人事管理系统”，选 personnel 作定语修饰 management。",
            family: "personnel (n.人事/人员) | personal (adj.个人的) | paperwork (n.文书) | fabric (n.布料)。",
            details: "personnel management system 是企业管理专有名词。personal management system 意为“个人管理系统”，不符合 HR 部门宣布重组公司人力资源的语境。",
            cn: "人力资源总监宣布对部门的人事管理系统进行重大重组。",
            jp: "人事部長は部門の人事（personnel）管理システムの大きな再編を発表しました。"
        }
    },
    {
        id: 17,
        target: "multiple",
        category: "困难",
        stem: "The research report indicated that the company experienced a ________ of revenue streams following the merger.",
        options: ["multiplicity", "multiple", "experienced", "inspection"],
        correct: "multiplicity",
        explanations: {
            guide: "派生高阶抽象名词。a ________ of revenue streams 是高阶短语，意为“多元化/多种多样的收入来源”，选名词 multiplicity。",
            family: "multiplicity (n.多样性/多数) | multiple (adj.多样的) | experienced (adj.有经验的) | inspection (n.检查)。",
            details: "a multiplicity of... 属于商务学术高阶短语，意为多种多样的……。multiple 是形容词，不能直接跟在不定冠词 a 后面做名词中心语。",
            cn: "研究报告指出，合并后该公司迎来了多元化的收入来源。",
            jp: "研究レポートは、合併後に同社が多様な（multiplicity）収益源を経験したことを示しました。"
        }
    },
    {
        id: 18,
        target: "experienced",
        category: "困难",
        stem: "Having ________ rapid market growth, the logistics firm decided to expand its warehouse capacity.",
        options: ["experienced", "experience", "assigned", "inquired"],
        correct: "experienced",
        explanations: {
            guide: "完成分词完成时态状语。Having 后面接过去分词，表达“在经历了……之后”，选 experienced。",
            family: "experienced (v-ed/adj.经历过/有经验的) | experience (v./n.经历) | assigned (v-ed被指派的) | inquired (v-ed询问的)。",
            details: "Having experienced rapid growth 是完成分词短语作时间/原因状语，表示“已经经历了快速增长”。experience 是动词原形，不能与 Having 搭配。",
            cn: "在经历了快速的市场增长后，该物流公司决定扩大其仓库容量。",
            jp: "急速な市場成長を経験した（experienced）ため、その物流会社は倉庫の容量を拡大することを決定しました。"
        }
    }
];