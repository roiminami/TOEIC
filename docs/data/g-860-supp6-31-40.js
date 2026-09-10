// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data111-120.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "fashion",
        pos: "名/動",
        ipa: "/ˈfæʃn/",
        cn: "方式，样式；时尚，时装；塑造",
        jp: "やり方、方法；流行、ファッション；形作る",
        family: "fashionable / fashionably / old-fashioned",
        tips: "托业核心熟词生义考点是短语 in a ... fashion（以……的方式），等同于 in a ... manner（如 in a timely / professional fashion）。",
        desc: "Please respond in a timely fashion."
    },
    {
        word: "field",
        pos: "動/名",
        ipa: "/fiːld/",
        cn: "处理，答复（提问/电话）；领域；现场",
        jp: "（質問や電話に）うまく対処する、さばく；分野；現場",
        family: "fielding / fielder",
        tips: "高阶动词考点：指在会议或发布会上现场应对、解答提问（field questions/inquiries）；名词常考 field office（现场办事处/外勤办公室）。",
        desc: "She will field questions from reporters."
    },
    {
        word: "figure",
        pos: "名/動",
        ipa: "/ˈfɪɡjər/",
        cn: "数字，数值；人物；计算，弄懂",
        jp: "数字、数値；人物；計算する、理解する",
        family: "figured / figuring / figure out",
        tips: "复数 sales figures 指“销售数据/业绩”；可指知名人物（industry figure）；动词短语 figure out 意为“查明/弄懂原因”。",
        desc: "Our sales figures grew this quarter."
    },
    {
        word: "file",
        pos: "動/名",
        ipa: "/faɪl/",
        cn: "提交，提出（申请/索赔）；归档；文件",
        jp: "（書類・申請を）提出する；整理保管する；ファイル、書類",
        family: "filing / filed",
        tips: "及物动词核心考点：提交官方文件或索赔（file a claim / file a complaint / file tax returns），等同于 submit。",
        desc: "You must file the tax report today."
    },
    {
        word: "film",
        pos: "動/名",
        ipa: "/fɪlm/",
        cn: "拍摄（广告/电影）；影片，薄膜",
        jp: "（動画・CMを）撮影する；映画、フィルム、薄膜",
        family: "filming / filmed",
        tips: "商业广告与公关场景常考动词用法：film a commercial / promotional video（拍摄宣传片/电视广告）。",
        desc: "They will film a commercial tomorrow."
    },
    {
        word: "fine",
        pos: "名/動/形",
        ipa: "/faɪn/",
        cn: "罚款；处以罚款；优质的，晴朗的",
        jp: "罰金；罰金を科す；上質な、晴れた",
        family: "finely / fined / fining",
        tips: "托业高频熟词生义：作名词指违规罚金（pay a parking fine / late fine）；作动词考被动语态（be heavily fined for non-compliance）。",
        desc: "He had to pay a parking fine."
    },
    {
        word: "flat",
        pos: "形/名",
        ipa: "/flæt/",
        cn: "（增长/销售）持平的；固定的；平的；公寓",
        jp: "（売上などが）横ばいの；均一の、固定の；平らな；アパート",
        family: "flatly / flatness",
        tips: "商业财报常考“持平无变动”（sales remained flat）；计费场景考固定收费（a flat fee / a flat rate 统一费率）。",
        desc: "The company charges a flat fee."
    },
    {
        word: "forward",
        pos: "動/副/形",
        ipa: "/ˈfɔːrwərd/",
        cn: "转交，转寄；向前；向前的",
        jp: "（メール・書類を）転送する、送る；前へ；前方の",
        family: "forwarding / forwarder / forward-looking",
        tips: "办公电邮核心考点：forward an email / inquiry to sb（将邮件/咨询转交给某人）；短语 look forward to doing sth 也是语法必考点。",
        desc: "Please forward this email to HR."
    },
    {
        word: "head",
        pos: "動/名",
        ipa: "/hed/",
        cn: "领导，主管；前往；部门主管，负责人",
        jp: "率いる、指揮する；向かう；長、責任者",
        family: "heading / headed / headquarters",
        tips: "动词考点：head a division / committee（主管某部门/领导委员会）；名词考 department head（部门主管）。",
        desc: "She was chosen to head the committee."
    },
    {
        word: "health",
        pos: "名",
        ipa: "/helθ/",
        cn: "健康；（财务/经济）稳健状态",
        jp: "健康；（財政・経済の）健全性",
        family: "healthy / healthily / healthful",
        tips: "托业比喻义核心考点：指企业或财务状况稳健（financial health / economic health）；员工福利考 health insurance（医疗保险）。",
        desc: "The audit confirmed our financial health."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "file",
        category: "简单",
        stem: "All employees who incurred business travel expenses must ________ an official reimbursement claim by Friday.",
        options: ["file", "filing", "flat", "health"],
        correct: "file",
        explanations: {
            guide: "情态动词后的动词原形。情态动词 must 后面必须接动词原形，file a claim 属于托业固定搭配，意为“提交报销申请”，选 file。",
            family: "file (v.提交/归档) | filing (n.归档/申请) | flat (adj.持平的) | health (n.健康/健全)。",
            details: "file a claim 意为提交报销或赔偿申请。filing 是动名词或分词，不能直接跟在情态动词 must 之后充当谓语动词原形。",
            cn: "所有发生出差费用的员工都必须在周五之前提交正式的报销申请。",
            jp: "出張費が発生したすべての従業員は、金曜日までに正式な精算請求書を提出（file）しなければなりません。"
        }
    },
    {
        id: 2,
        target: "forward",
        category: "简单",
        stem: "Please ________ the revised contract to the legal department as soon as you review it.",
        options: ["forward", "forwarding", "fashion", "film"],
        correct: "forward",
        explanations: {
            guide: "祈使句动词原形。Please 引导的祈使句句首需使用动词原形，forward A to B 意为“把……转交/转发给……”，选 forward。",
            family: "forward (v.转交/转寄) | forwarding (n.转运/转交) | fashion (n.方式) | film (v.拍摄)。",
            details: "forward the contract to... 表示将合同转交给法务部。forwarding 为动名词或分词，无法在祈使句中充当核心谓语动词。",
            cn: "请在审阅修订后的合同后，立即将其转交给法务部门。",
            jp: "改訂された契約書を確認次第、法務部に転送（forward）してください。"
        }
    },
    {
        id: 3,
        target: "flat",
        category: "简单",
        stem: "The express courier service charges a ________ delivery fee of five dollars regardless of package weight.",
        options: ["flat", "flatly", "fine", "field"],
        correct: "flat",
        explanations: {
            guide: "形容词修饰名词与商业计费专属搭配。a ________ delivery fee 结构中需要形容词作定语，flat fee 意为“统一费用/固定费率”，选 flat。",
            family: "flat (adj.固定的/持平的) | flatly (adv.断然地) | fine (n.罚款) | field (v.处理)。",
            details: "a flat fee / rate 属于物流与服务收费中的标准表达。flatly 为副词，不能修饰名词短语 delivery fee。",
            cn: "该特快专递服务无论包裹重量如何，均收取五美元的统一固定运费。",
            jp: "その速達宅配便サービスは、荷物の重量に関係なく、一律（flat）5ドルの配送料を請求します。"
        }
    },
    {
        id: 4,
        target: "head",
        category: "简单",
        stem: "Ms. Patel scheduled an urgent meeting with the ________ of the human resources department.",
        options: ["head", "headed", "figure", "forward"],
        correct: "head",
        explanations: {
            guide: "职位名词中心语。定冠词 the 与介词 of 之间需要填入职位名称，the head of the department 意为“部门主管/负责人”，选 head。",
            family: "head (n.负责人/主管/v.领导) | headed (v-ed形式) | figure (n.数字) | forward (v.转交)。",
            details: "the head of HR 指人力资源部主管。headed 是过去分词或形容词，不能直接作冠词 the 后的名词中心语。",
            cn: "帕特尔女士安排了与人力资源部主管的紧急会议。",
            jp: "パテル氏は人事部門の責任者（head）との緊急会議を予定しました。"
        }
    },
    {
        id: 5,
        target: "fine",
        category: "简单",
        stem: "Drivers who park their vehicles in unauthorized loading zones will be required to pay a hefty ________.",
        options: ["fine", "finely", "health", "file"],
        correct: "fine",
        explanations: {
            guide: "不定冠词与形容词后的名词中心语。pay a hefty ________ 结构中，形容词 hefty（沉重的/数额巨大的）后接名词，pay a fine 意为“缴纳罚款”，选 fine。",
            family: "fine (n.罚款/v.处罚金) | finely (adv.精细地) | health (n.健康) | file (v.提交)。",
            details: "pay a fine 是法律与规章制度核心短语。finely 是副词，不能充当及物动词 pay 的宾语名词。",
            cn: "在未经授权的装卸区域停放车辆的司机将被要求缴纳巨额罚款。",
            jp: "許可されていない荷積み区域に車両を駐車したドライバーは、高額な罰金（fine）を支払う必要があります。"
        }
    },
    {
        id: 6,
        target: "film",
        category: "简单",
        stem: "The production crew will ________ a new television commercial inside the corporate headquarters this afternoon.",
        options: ["film", "filming", "flat", "fashion"],
        correct: "film",
        explanations: {
            guide: "情态动词后的动词原形。will 后面需要接动词原形，后接宾语 commercial（商业广告），film a commercial 意为“拍摄广告”，选 film。",
            family: "film (v.拍摄/n.影片) | filming (n.拍摄/动名词) | flat (adj.持平的) | fashion (n.方式)。",
            details: "will film 构成一般将来时谓语结构。filming 为动名词或分词，不能紧跟在情态动词 will 之后充当谓语动词原形。",
            cn: "摄制组将于今天下午在公司总部大楼内拍摄一部新的电视商业广告。",
            jp: "制作クルーは、今日の午後、企業本部内で新しいテレビCMを撮影（film）する予定です。"
        }
    },
    {
        id: 7,
        target: "figure",
        category: "中等",
        stem: "According to the quarterly report, overall sales ________ increased by eight percent across all overseas branches.",
        options: ["figures", "figuring", "fields", "fines"],
        correct: "figures",
        explanations: {
            guide: "复合名词与主谓一致。sales figures 属于商务财报核心表达，意为“销售额/销售数据”，作主语与谓语动词 increased 搭配，选复数名词 figures。",
            family: "figures (n.数字/销售额/复数) | figuring (动名词) | fields (n.领域) | fines (n.罚款)。",
            details: "sales figures 指销售数据总额。figuring 是动名词，不能与 sales 组成表示具体财务数字的专属复合名词短语。",
            cn: "根据季度报告，所有海外分公司的总体销售数据增长了百分之八。",
            jp: "四半期報告書によると、すべての海外支店で全体の売上高（figures）が8パーセント増加しました。"
        }
    },
    {
        id: 8,
        target: "field",
        category: "中等",
        stem: "During the press conference, the chief communications officer will ________ inquiries from international journalists.",
        options: ["field", "fielding", "head", "forward"],
        correct: "field",
        explanations: {
            guide: "动词熟词生义与情态动词搭配。will 后面接动词原形，field inquiries / questions 属于公关发布会核心动宾短语，意为“现场回答/妥善应对提问”，选 field。",
            family: "field (v.处理/答复提问/n.领域) | fielding (动名词) | head (v.领导) | forward (v.转交)。",
            details: "field questions/inquiries 专指公关发言人应对媒体提问。fielding 是分词，不能在情态动词 will 后充当谓语原形。",
            cn: "在新闻发布会期间，首席公关官将现场回答来自国际记者的提问。",
            jp: "記者会見中、広報最高責任者が国際的なジャーナリストからの問い合わせ・質問に対処する（field）予定です。"
        }
    },
    {
        id: 9,
        target: "fashion",
        category: "中等",
        stem: "Customer service representatives are trained to resolve technical complaints in a prompt and professional ________.",
        options: ["fashion", "fashioned", "flat", "figure"],
        correct: "fashion",
        explanations: {
            guide: "介词短语习惯搭配与熟词生义。in a ... fashion 属于托业高频固定表达，意为“以……的方式”，等同于 in a ... manner，选名词 fashion。",
            family: "fashion (n.方式/样式/时尚) | fashioned (adj.塑造的) | flat (adj.持平的) | figure (n.数字)。",
            details: "in a professional fashion 意为以专业的方式。fashioned 是过去式或分词形容词，不能直接放在冠词与形容词后作介词短语中心词。",
            cn: "客户服务代表接受过专业培训，能够以迅速且专业的方式解决技术投诉。",
            jp: "カスタマーサービス担当者は、迅速かつプロフェッショナルなやり方（fashion）で技術的な苦情を解決するよう訓練されています。"
        }
    },
    {
        id: 10,
        target: "health",
        category: "中等",
        stem: "The external audit confirmed that the financial ________ of the corporation remains strong despite market inflation.",
        options: ["health", "healthy", "file", "film"],
        correct: "health",
        explanations: {
            guide: "定冠词与形容词后的名词中心语。the financial ________ of 结构中，形容词 financial 修饰名词，financial health 意为“财务稳健状况”，选 health。",
            family: "health (n.稳健/健康) | healthy (adj.健康的) | file (n.文件) | film (n.影片)。",
            details: "financial health 属于企业审计报告核心术语，指财务状况良好。healthy 是形容词，不能作定冠词 the 后的主语核心词。",
            cn: "外部审计确认，尽管面临市场通胀，该公司的财务状况依然十分稳健。",
            jp: "外部監査により、市場のインフレにもかかわらず、同社の財務の健全性（health）は依然として強固であることが確認されました。"
        }
    },
    {
        id: 11,
        target: "forward",
        category: "中等",
        stem: "The executive committee is looking ________ to reviewing the innovative product proposals submitted by the engineering team.",
        options: ["forward", "forwardly", "fashion", "flatly"],
        correct: "forward",
        explanations: {
            guide: "固定动词短语搭配。look forward to doing sth 是托业最高频动词短语之一，意为“期待做某事”，空格处填入副词 forward。",
            family: "forward (adv.向前/v.转交) | forwardly (adv.鲁莽地) | fashion (n.方式) | flatly (adv.断然地)。",
            details: "look forward to 是固定成语短语，其中的 to 为介词，后接动名词 reviewing。forwardly 语义不符且在现代英语中罕见。",
            cn: "执行委员会非常期待审阅工程团队提交的创新产品提案。",
            jp: "執行委員会は、エンジニアリングチームから提出された革新的な製品提案を検討することを心待ちに（looking forward to）しています。"
        }
    },
    {
        id: 12,
        target: "file",
        category: "中等",
        stem: "Dissatisfied with the damaged shipment, the retail store manager ________ a formal complaint with the logistics vendor.",
        options: ["filed", "filing", "fined", "headed"],
        correct: "filed",
        explanations: {
            guide: "一般过去时谓语动词。句子缺少谓语动词，根据语境表示店长已经对物流商“提出了”正式投诉，选用过去式 filed。",
            family: "filed (v-ed过去式/提出) | filing (分词/动名词) | fined (v-ed罚款) | headed (v-ed领导)。",
            details: "filed a complaint 意为提出投诉。filing 是现在分词，缺少助动词无法单独充当句子的谓语动词；fined（处以罚金）在此处主客体逻辑不通。",
            cn: "由于对受损货物不满，零售店经理向物流供应商提出了正式投诉。",
            jp: "破損した積送品に不満を抱いた小売店の店長は、物流ベンダーに正式な苦情を申し立て（filed）ました。"
        }
    },
    {
        id: 13,
        target: "flat",
        category: "困难",
        stem: "Although production costs rose substantially, domestic consumer demand for luxury goods remained ________ throughout the second quarter.",
        options: ["flat", "flatly", "healthier", "fashioned"],
        correct: "flat",
        explanations: {
            guide: "系动词后的表语与熟词生义。remained 是系动词，其后需要形容词作表语，remained flat 是商业财报高频表达，意为“需求/数据保持持平（未增长亦未下降）”，选 flat。",
            family: "flat (adj.持平的/扁平的) | flatly (adv.断然地) | healthier (adj.更健康的) | fashioned (adj.塑造的)。",
            details: "remain flat 属于经济形势分析专属术语。flatly 是副词（断然地），不能在系动词 remained 后充当表语形容词。",
            cn: "尽管生产成本大幅上升，但在整个第二季度，国内消费者对奢侈品的需求依然保持持平。",
            jp: "製造コストは大幅に上昇したものの、高級品に対する国内の消費者需要は第2四半期を通じて横ばい（flat）のままでした。"
        }
    },
    {
        id: 14,
        target: "head",
        category: "困难",
        stem: "Dr. Vance was unanimously appointed to ________ the newly established regional research and development division.",
        options: ["head", "heading", "figure", "field"],
        correct: "head",
        explanations: {
            guide: "被动语态不定式补足语与熟词生义。be appointed to do sth 结构中 to 为不定式符号，后接动词原形，head 作动词意为“主管/领导（部门）”，选 head。",
            family: "head (v.主管/带领/n.负责人) | heading (n.标题/动名词) | figure (v.计算/弄懂) | field (v.答复提问)。",
            details: "appointed to head the division 意为被任命领导该部门。heading 是动名词或名词，不能在不定式符号 to 后充当动词原形。",
            cn: "万斯博士被一致任命为新成立的区域研发部门的主管。",
            jp: "ヴァンス博士は、新設された地域研究開発部門を率いる（head）ために満場一致で任命されました。"
        }
    },
    {
        id: 15,
        target: "fine",
        category: "困难",
        stem: "The manufacturing facility was heavily ________ by regulatory authorities for failing to comply with industrial emission standards.",
        options: ["fined", "finely", "forwarded", "filed"],
        correct: "fined",
        explanations: {
            guide: "被动语态与动词高阶考点。was heavily ________ by 结构中，副词 heavily 修饰过去分词，fine 作动词意为“处以罚款”，be fined 意为“被处以罚金”，选 fined。",
            family: "fined (v-ed被罚款) | finely (adv.精细地) | forwarded (v-ed转交) | filed (v-ed提交/归档)。",
            details: "be fined by authorities 指被监管部门罚款。finely 是副词（精细地），不能与 was 构成被动语态核心动词短语。",
            cn: "该制造工厂因未遵守工业排放标准而被监管机构处以巨额罚款。",
            jp: "その製造施設は、産業排出基準を順守しなかったため、規制当局から多額の罰金を科され（fined）ました。"
        }
    },
    {
        id: 16,
        target: "field",
        category: "困难",
        stem: "Ms. Tanaka is widely recognized as a leading authority in the ________ of corporate environmental compliance.",
        options: ["field", "fielding", "figure", "fashion"],
        correct: "field",
        explanations: {
            guide: "介词固定短语搭配。in the ________ of 结构中需要名词，in the field of... 属于托业高频介词短语，意为“在……领域”，选 field。",
            family: "field (n.领域/v.处理) | fielding (动名词) | figure (n.数字/人物) | fashion (n.方式)。",
            details: "authority in the field 指该领域的权威。fielding 是动名词或分词，在此处不如名词 field 符合专业领域短语搭配要求。",
            cn: "田中女士被公认为企业环境合规领域的领军权威。",
            jp: "田中氏は、企業の環境コンプライアンスの分野（field）における第一人者として広く認められています。"
        }
    },
    {
        id: 17,
        target: "figure",
        category: "困难",
        stem: "Senior data analysts are currently attempting to ________ out why online sales dropped sharply during the weekend promotion.",
        options: ["figure", "figured", "forward", "film"],
        correct: "figure",
        explanations: {
            guide: "动词不定式与高阶短语搭配。attempting to 后面接动词原形，与后面的副词 out 构成固定动词短语 figure out（查明/弄清楚），选 figure。",
            family: "figure (v.弄懂/计算/n.数字) | figured (v-ed形式) | forward (v.转交) | film (v.拍摄)。",
            details: "figure out why... 意为弄清楚……的原因。figured 是过去式或过去分词，不能跟在不定式符号 to 后面。",
            cn: "资深数据分析师目前正在试图查明为何周末促销期间在线销售额会急剧下滑。",
            jp: "シニアデータアナリストは現在、週末のプロモーション中にオンライン売上が急激に落ち込んだ理由を突き止め（figure out）ようとしています。"
        }
    },
    {
        id: 18,
        target: "health",
        category: "困难",
        stem: "Maintaining a ________ working environment is proven to reduce employee turnover and enhance overall organizational productivity.",
        options: ["healthy", "health", "healthily", "flat"],
        correct: "healthy",
        explanations: {
            guide: "形容词作定语修饰名词。a ________ working environment 结构中，不定冠词 a 与名词词组 working environment 之间需要形容词作定语，选 healthy（健康的/有益的）。",
            family: "healthy (adj.健康的/稳健的) | health (n.健康/健全) | healthily (adv.健康地) | flat (adj.持平的)。",
            details: "a healthy working environment 指健康良好的工作环境。health 是名词，无法直接作为定语形容词修饰后面的 working environment。",
            cn: "事实证明，维持一个健康良好的工作环境能够降低员工离职率并提高组织的整体生产力。",
            jp: "健康的な（healthy）職場環境を維持することは、離職率を低下させ、組織全体の生産性を向上させることが証明されています。"
        }
    }
];