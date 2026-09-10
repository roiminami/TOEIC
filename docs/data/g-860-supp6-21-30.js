// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data101-110.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "cover",
        pos: "動/名",
        ipa: "/ˈkʌvər/",
        cn: "支付，承担（费用）；包含；报道；顶替（代班）",
        jp: "（費用を）賄う、負担する；カバーする；報道する；代理を務める",
        family: "coverage / covered / uncovering",
        tips: "托业高频多义词：1. 承担差旅/保险费用（cover travel expenses）；2. 代班顶替（cover a shift / cover for sb）；名词形式 coverage 指保险范围或媒体报道。",
        desc: "The insurance will cover the cost."
    },
    {
        word: "credit",
        pos: "動/名",
        ipa: "/ˈkredɪt/",
        cn: "把……归功于；赞誉；挂账，积分，信用",
        jp: "（功績を）帰する；称賛、功績；信用、掛け売り、ポイント",
        family: "credited / creditor / credible / creditworthy",
        tips: "动词被动常考 be credited with（被归功于/被公认为……的创立者）；作名词考商场退换积分/挂账（store credit）及财务信用（credit limit）。",
        desc: "She was given credit for the work."
    },
    {
        word: "deliver",
        pos: "動",
        ipa: "/dɪˈlɪvər/",
        cn: "发表（演说）；递送，交付；履行（诺言）",
        jp: "（スピーチを）行う；配達する；（約束を）果たす",
        family: "delivery / deliverable / delivered",
        tips: "熟词生义核心考点：除了送快递（deliver parcels），高频考查 deliver a speech / keynote address（发表演讲）以及兑现承诺（deliver on promises）。",
        desc: "They will deliver the package today."
    },
    {
        word: "direct",
        pos: "動/形/副",
        ipa: "/dəˈrekt/ , /daɪˈrekt/",
        cn: "寄往，转交（问题）；指引，指导；直接的",
        jp: "（質問などを）向ける、送る；指導する；直接の、直行の",
        family: "directly / director / directional / directive",
        tips: "高阶动词考点：direct inquiries / questions to...（将问题转交给某人处理）；作形容词考直飞航班（direct flight）；副词 directly 意为“直接地”。",
        desc: "Please direct all inquiries to me."
    },
    {
        word: "direction",
        pos: "名",
        ipa: "/dəˈrekʃn/ , /daɪˈrekʃn/",
        cn: "指示，使用说明；方向；指导，管理",
        jp: "指示、説明書；方向；指導、指揮",
        family: "directional / directions",
        tips: "复数 directions 常指“操作指南/使用说明”（directions for use）或路线指引；under the direction of... 指“在……的指导与管理之下”。",
        desc: "Follow the directions on the box."
    },
    {
        word: "drill",
        pos: "名/動",
        ipa: "/drɪl/",
        cn: "演习，训练；钻头；钻孔",
        jp: "（非常時などの）訓練、演習；ドリル；訓練する",
        family: "drilling / drilled",
        tips: "职场安全与物业维护高频词：fire drill（消防演习），safety drill（安全演练），evacuation drill（疏散演习）。",
        desc: "We hold a fire drill every year."
    },
    {
        word: "due",
        pos: "形/名",
        ipa: "/duː/",
        cn: "到期的；预定的；由于；会费（复数）",
        jp: "期日の、支払期日の；到着予定の；〜のために；会費（復数）",
        family: "dues",
        tips: "三大核心考点：1. 账单/款项到期（payment is due）；2. 航班/列车预定到达（is due to arrive at 5 PM）；3. 介词短语 due to（由于/因为）；复数 dues 为会员费。",
        desc: "The final report is due on Friday."
    },
    {
        word: "enjoy",
        pos: "動",
        ipa: "/ɪnˈdʒɔɪ/",
        cn: "享有，拥有（声誉/特权/成功）；享受",
        jp: "（評判・特権などを）享受する、持っている；楽しむ",
        family: "enjoyable / enjoyment",
        tips: "商业托业高阶熟词生义：enjoy a strong reputation / steady growth / tax benefits（享有良好声誉/稳步增长/税收优惠），并非单纯指“玩得开心”。",
        desc: "Our products enjoy a great reputation."
    },
    {
        word: "express",
        pos: "動/形/副",
        ipa: "/ɪkˈspres/",
        cn: "表达，表示；特快的；特快递送",
        jp: "（意見・懸念などを）表明する、表す；急行の、速達の；速達便",
        family: "expression / expressly / expressive",
        tips: "动词搭配高频：express interest / concern / gratitude（表达意向/担忧/感谢）；副词 expressly 意为“明确地/特意地”（expressly prohibited 明确禁止）。",
        desc: "He expressed interest in the job."
    },
    {
        word: "extend",
        pos: "動",
        ipa: "/ɪkˈstend/",
        cn: "延长（期限）；提供，致以（问候/邀请）；扩展",
        jp: "（期限を）延長する；（招待・感謝を）差し伸べる、表す；広げる",
        family: "extension / extended / extensive / extensively",
        tips: "核心商务搭配：extend the deadline / contract（延长截止日/续约）；extend an invitation / warm welcome to sb（向某人发出邀请/致以热烈欢迎）；名词 extension（延期/分机号码）。",
        desc: "They agreed to extend the deadline."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "deliver",
        category: "简单",
        stem: "The regional courier service guarantees to ________ all commercial express parcels within two business days.",
        options: ["deliver", "delivery", "extend", "enjoy"],
        correct: "deliver",
        explanations: {
            guide: "动词不定式结构。guarantees to 后面必须接动词原形，后接宾语 parcels，表达快递公司“递送/交付”包裹，选 deliver。",
            family: "deliver (v.递送/发表演说) | delivery (n.递送) | extend (v.延长) | enjoy (v.享有/享受)。",
            details: "guarantee to do sth 结构中 to 为不定式符号，后接动词原形。delivery 是名词，不能充当不定式中的谓语动词。",
            cn: "该区域快递服务保证在两个工作日内递送所有商业特快包裹。",
            jp: "地域の宅配便サービスは、2営業日以内にすべての商業速達小包を配達（deliver）することを保証しています。"
        }
    },
    {
        id: 2,
        target: "due",
        category: "简单",
        stem: "Payment for the corporate consulting invoice is ________ within thirty days of the billing date.",
        options: ["due", "dues", "cover", "drill"],
        correct: "due",
        explanations: {
            guide: "系表结构与商业到期日表达。is 后面需要接形容词作表语，is due within... 意为“在……期限内到期应付”，选形容词 due。",
            family: "due (adj.到期的/应付的) | dues (n.会费/复数) | cover (v.支付/覆盖) | drill (n.演练)。",
            details: "payment is due 属于财务发票最标准的固定套话。dues 为名词（会费），不能作系动词 is 的表语形容词。",
            cn: "该企业咨询发票的款项须在开票之日起三十天内到期支付。",
            jp: "企業コンサルティング請求書の支払いは、請求日から30日以内に期日（due）を迎えます。"
        }
    },
    {
        id: 3,
        target: "drill",
        category: "简单",
        stem: "The building management office conducts a mandatory evacuation ________ every year to ensure tenant safety.",
        options: ["drill", "drilling", "direction", "credit"],
        correct: "drill",
        explanations: {
            guide: "安全应急复合名词专属搭配。a mandatory evacuation ________ 结构中需要名词中心词，evacuation drill 意为“疏散演练/演习”，选名词 drill。",
            family: "drill (n.演习/演练) | drilling (n.钻孔/动名词) | direction (n.指示/说明) | credit (n.信用/赞誉)。",
            details: "evacuation drill 是物业消防与安全规范专属表达。drilling 偏向指工业钻孔作业，不符合火灾疏散演习的含义。",
            cn: "大楼物业管理处每年都会举行一次强制性疏散演习，以确保租户的人身安全。",
            jp: "ビル管理事務所は、テナントの安全を確保するために、毎年義務的な避難訓練（drill）を実施しています。"
        }
    },
    {
        id: 4,
        target: "cover",
        category: "简单",
        stem: "The departmental travel stipend is designed to ________ reasonable hotel accommodation and dining costs.",
        options: ["cover", "coverage", "deliver", "express"],
        correct: "cover",
        explanations: {
            guide: "动词不定式结构与高频商业词义。is designed to 后面接动词原形，cover costs 意为“承担/支付费用”，选动词原形 cover。",
            family: "cover (v.支付/承担/包含) | coverage (n.保险范围/报道) | deliver (v.递送) | express (v.表达)。",
            details: "cover expenses/costs 是托业报销场景核心搭配。coverage 是名词，不能跟在不定式 to 后面作谓语动词。",
            cn: "部门差旅津贴旨在支付合理的酒店住宿和餐饮费用。",
            jp: "部門の出張手当は、妥当なホテル宿泊費や飲食費を賄う（cover）ように設計されています。"
        }
    },
    {
        id: 5,
        target: "direction",
        category: "简单",
        stem: "Before setting up the digital conference projector, please read the printed ________ on the leaflet carefully.",
        options: ["directions", "directional", "due", "extend"],
        correct: "directions",
        explanations: {
            guide: "名词作及物动词宾语。read 后面接名词作为宾语，printed directions 意为“印制的操作指南/使用说明”，选用复数名词 directions。",
            family: "directions (n.使用说明/操作指南/复数) | directional (adj.方向的) | due (adj.到期的) | extend (v.延长)。",
            details: "directions 作“说明书/指南”时通常以复数形式出现（如 directions for assembly）。directional 是形容词，不能作 read 的宾语。",
            cn: "在安装数字会议投影仪之前，请仔细阅读单页上的印刷使用说明。",
            jp: "デジタル会議用プロジェクターを設置する前に、チラシに印刷された説明（directions）をよくお読みください。"
        }
    },
    {
        id: 6,
        target: "express",
        category: "简单",
        stem: "Several international investors have formally arrived to ________ interest in financing the logistics center.",
        options: ["express", "expression", "enjoy", "direct"],
        correct: "express",
        explanations: {
            guide: "不定式表目的及商务动宾搭配。arrived to 接动词原形表达目的，express interest in 属于商务合作核心短语，意为“对……表示意向/兴趣”，选 express。",
            family: "express (v.表达/表示) | expression (n.表达/表情) | enjoy (v.享有) | direct (v.指引)。",
            details: "express interest in 是投资意向洽谈中的标准表述。expression 是名词，不能在不定式符号 to 后充当谓语动词原形。",
            cn: "数家国际投资者已正式到访，表达了对该物流中心提供融资的意向。",
            jp: "複数の海外投資家が、物流センターへの融資に関心を表明する（express）ために正式に到着しました。"
        }
    },
    {
        id: 7,
        target: "direct",
        category: "中等",
        stem: "Conference participants are politely requested to ________ any technical inquiries to the IT support desk in the lobby.",
        options: ["direct", "direction", "cover", "drill"],
        correct: "direct",
        explanations: {
            guide: "动词不定式与介词搭配。are requested to 后面接动词原形，构成 direct inquiries to sb（把咨询/问题转交或寄往某处），选动词 direct。",
            family: "direct (v.转交/指导/寄往) | direction (n.说明/方向) | cover (v.支付) | drill (n.演习)。",
            details: "direct A to B 意为将某事/某问题定向转至某部门处理。direction 是名词，无法充当受 requested to 修饰的谓语动词。",
            cn: "参会人员被礼貌地告知，请将任何技术咨询转至大堂的 IT 技术支持台。",
            jp: "会議の参加者は、技術的な問い合わせは大ロビーのITサポートデスクに向ける（direct）よう丁寧にお願いされています。"
        }
    },
    {
        id: 8,
        target: "credit",
        category: "中等",
        stem: "The senior system architect was widely ________ with redesigning the corporate database infrastructure.",
        options: ["credited", "credit", "extended", "enjoyed"],
        correct: "credited",
        explanations: {
            guide: "被动语态高阶固定搭配。be credited with (doing) sth 属于托业人物业绩评定中的极高频句型，意为“因……而受到赞誉/被公认完成了某事”，选 credited。",
            family: "credited (adj./v-ed被归功于) | credit (v./n.归功/信用) | extended (adj.延长的) | enjoyed (v-ed享有)。",
            details: "was widely credited with 是职场表彰核心搭配。credit 必须用过去分词形式与 was 构成被动语态，且与介词 with 完美呼应。",
            cn: "这位资深系统架构师因重新设计了公司的数据库基础设施而受到广泛赞誉。",
            jp: "その主任システムアーキテクトは、企業のデータベース基盤を再設計した功績を広く認められ（credited）ました。"
        }
    },
    {
        id: 9,
        target: "extend",
        category: "中等",
        stem: "In order to allow more research firms to submit bids, the municipal authority chose to ________ the tender submission deadline.",
        options: ["extend", "extension", "deliver", "express"],
        correct: "extend",
        explanations: {
            guide: "不定式搭配与商务动宾短语。chose to 后面必须接动词原形，extend the deadline 意为“延长截止日期”，选动词 extend。",
            family: "extend (v.延长/提供) | extension (n.延期/分机) | deliver (v.递送) | express (v.表达)。",
            details: "extend the deadline 属于托业合同招投标最常见搭配。extension 是名词，不能在不定式符号 to 后直接充当谓语动词原形。",
            cn: "为了让更多研究机构能够提交标书，市政当局决定延长投标截止日期。",
            jp: "より多くの研究企業が入札書類を提出できるようにするため、自治体当局は入札提出期限を延長する（extend）ことを選択しました。"
        }
    },
    {
        id: 10,
        target: "enjoy",
        category: "中等",
        stem: "Because of its exceptional after-sales support, the boutique home appliance brand continues to ________ strong market popularity.",
        options: ["enjoy", "enjoyment", "due", "credit"],
        correct: "enjoy",
        explanations: {
            guide: "熟词生义与不定式用法。continues to 接动词原形，enjoy 在商业语境中意为“享有/拥有（良好声誉或市场地位）”，后接 popularity，选 enjoy。",
            family: "enjoy (v.享有/享受) | enjoyment (n.享受) | due (adj.到期的) | credit (n.信用)。",
            details: "enjoy popularity/reputation 意为享有极高知名度/声誉。enjoyment 为名词，不能直接接在 continues to 后面作谓语动词。",
            cn: "由于其出色的售后支持，这家精品家电品牌继续享有很高的市场美誉度和人气。",
            jp: "その卓越したアフターサポートにより、その高級家電ブランドは引き続き高い市場的人気を享受し（enjoy）ています。"
        }
    },
    {
        id: 11,
        target: "due",
        category: "中等",
        stem: "The regional workshop on trade policies was rescheduled ________ to an unforeseen schedule conflict of the keynote speaker.",
        options: ["due", "dues", "express", "direct"],
        correct: "due",
        explanations: {
            guide: "复合介词原因状语搭配。due to 是托业商务通知与行程变动中最高频的原因介词短语，意为“由于/因为”，与后方介词 to 构成短语，选 due。",
            family: "due (adj.由于/到期的) | dues (n.会费) | express (v.表达) | direct (v.指导)。",
            details: "rescheduled due to... 意为由于……原因而改期。dues 是复数名词，不能与介词 to 构成表原因的复合介词结构。",
            cn: "由于主讲嘉宾突发日程冲突，贸易政策区域研讨会被重新安排了时间。",
            jp: "基調講演者の予期せぬスケジュールの都合により（due to）、貿易政策に関する地域ワークショップの日程が変更されました。"
        }
    },
    {
        id: 12,
        target: "cover",
        category: "中等",
        stem: "All regular full-time personnel are provided with comprehensive medical ________ starting on the first day of employment.",
        options: ["coverage", "cover", "direction", "drill"],
        correct: "coverage",
        explanations: {
            guide: "复合名词定语修饰与福利名词。comprehensive medical ________ 结构中需要名词作为介词 with 的宾语，medical coverage 意为“医疗保险范围/医疗保障”，选 coverage。",
            family: "coverage (n.保险范围/新闻报道) | cover (v.支付/n.封面) | direction (n.指示) | drill (n.演习)。",
            details: "medical coverage 是员工福利制度中的核心专业术语。cover 作名词时通常指封面或遮盖物，指代保单保障范围必须使用 coverage。",
            cn: "所有正式全职员工自入职第一天起即可享有全面的医疗保险保障。",
            jp: "すべての正規フルタイム従業員には、雇用初日から包括的な医療保険適用（coverage）が提供されます。"
        }
    },
    {
        id: 13,
        target: "deliver",
        category: "困难",
        stem: "The guest economist has been officially invited to ________ the opening address at the international trade symposium tomorrow.",
        options: ["deliver", "delivery", "enjoyable", "extended"],
        correct: "deliver",
        explanations: {
            guide: "高阶商务动宾搭配与熟词生义。has been invited to 后面需要接动词原形，deliver an address 意为“发表演讲/发表致辞”，选动词 deliver。",
            family: "deliver (v.发表/递送) | delivery (n.送货) | enjoyable (adj.令人愉快的) | extended (adj.延长的)。",
            details: "deliver a speech/keynote address 是学术会议与企业盛会专属搭配，等同于 give a speech。delivery 为名词，不能在不定式符号 to 后充当谓语动词原形。",
            cn: "这位受邀的经济学家已正式应邀在明天的国际贸易研讨会上发表开幕致辞。",
            jp: "客員の経済学者は、明日の国際貿易シンポジウムで開会の辞を述べる（deliver）よう正式に招待されました。"
        }
    },
    {
        id: 14,
        target: "credit",
        category: "困难",
        stem: "Customers returning undamaged goods without an original purchase receipt will be granted store ________ valid for six months.",
        options: ["credit", "creditor", "direction", "express"],
        correct: "credit",
        explanations: {
            guide: "零售退换政策专业术语。store credit 是托业商场退换货条款的核心专有名词，意为“店内消费积分/购物挂账额度（非现金退款）”，选不可数名词 credit。",
            family: "credit (n.挂账额度/积分/信用) | creditor (n.债权人) | direction (n.指示) | express (adj.特快的)。",
            details: "be granted store credit 指顾客获得可在店内抵扣消费的积分额度。creditor 指债权方公司或个人，与退款凭据语义完全不符。",
            cn: "没有原始购买凭证而退还完好商品的顾客将获得有效期为六个月的店内消费抵扣额度。",
            jp: "購入時のレシートなしで破損のない商品を返品する顧客には、6か月間有効なストアクレジット（credit）が付与されます。"
        }
    },
    {
        id: 15,
        target: "direct",
        category: "困难",
        stem: "Prospective vendors wishing to clarify technical specifications should contact the chief procurement specialist ________.",
        options: ["directly", "direct", "due", "coverage"],
        correct: "directly",
        explanations: {
            guide: "副词修饰及物动词短语。空格位于 contact + 宾语 之后，需要副词作状语修饰动作方式，contact sb directly 意为“直接联系某人”，选 directly。",
            family: "directly (adv.直接地/立即) | direct (adj.直接的/v.指引) | due (adj.到期的) | coverage (n.保险范围)。",
            details: "contact sb directly 构成动词与状语副词的合理修饰关系。direct 作副词时通常指路线“径直走向”，在修饰商务沟通行为时应使用派生副词 directly。",
            cn: "有意明确技术规格细节的意向供应商，应直接联系首席采购专员。",
            jp: "技術仕様を明確にしたい見込みベンダーは、調達主任スペシャリストに直接（directly）連絡してください。"
        }
    },
    {
        id: 16,
        target: "direction",
        category: "困难",
        stem: "Under the creative ________ of the newly hired executive chef, the hotel bistro received its first culinary award.",
        options: ["direction", "directional", "deliverable", "drill"],
        correct: "direction",
        explanations: {
            guide: "介词固定短语搭配。under the ________ of 是托业人物评介和管理更迭中的高频词组，under the direction of 指“在……的指导与统筹领导下”，选名词 direction。",
            family: "direction (n.指导/指挥/方向) | directional (adj.定向的) | deliverable (n.交付成果) | drill (n.演习)。",
            details: "under the creative direction of 指在……的创意指导之下。directional 是形容词，不能在定冠词 the 和形容词 creative 之后充当介词短语中心词。",
            cn: "在新聘行政总厨的创意指导下，该酒店小酒馆荣获了首座烹饪大奖。",
            jp: "新しく採用されたエグゼクティブシェフの創造的な指導（direction）の下、ホテルのビストロは初めての料理賞を受賞しました。"
        }
    },
    {
        id: 17,
        target: "extend",
        category: "困难",
        stem: "The lead research fellow submitted a formal request for a one-month ________ on the renewable energy project report.",
        options: ["extension", "extend", "credit", "enjoyment"],
        correct: "extension",
        explanations: {
            guide: "不定冠词与复合定语后的名词。a one-month ________ 结构中，形容词短语 a one-month 需要修饰单数可数名词，a one-month extension 意为“一个月的展期/延期”，选 extension。",
            family: "extension (n.展期/延期/电话分机) | extend (v.延长) | credit (n.赞誉) | enjoyment (n.享受)。",
            details: "request an extension 属于职场工作汇报常见短语（申请延期）。extend 为动词原形，不能作不定冠词 a 后的名词中心语。",
            cn: "首席研究员就可再生能源项目报告正式提交了一个月展期的申请。",
            jp: "主任研究員は、再生可能エネルギープロジェクトの報告書について1か月の延長（extension）を正式に申請しました。"
        }
    },
    {
        id: 18,
        target: "express",
        category: "困难",
        stem: "Transferring classified customer data onto unencrypted portable hard drives is ________ prohibited under company regulations.",
        options: ["expressly", "express", "coverage", "directed"],
        correct: "expressly",
        explanations: {
            guide: "副词修饰过去分词形容词。is ________ prohibited 结构中，需要副词作状语修饰动词分词 prohibited，expressly prohibited 是合规文本高阶固定搭配，意为“明确禁止”，选 expressly。",
            family: "expressly (adv.明确地/特意地) | express (adj.特快的/v.表达) | coverage (n.范围) | directed (v-ed指导)。",
            details: "expressly forbidden / prohibited 属于商务法律与信息安全条款固定搭配。express 是形容词或动词，不能在被动语态中充当状语修饰过去分词 prohibited。",
            cn: "根据公司规章制度，严禁将机密客户数据传输至未加密的便携式移动硬盘上。",
            jp: "会社の社内規定に基づき、機密の顧客データを暗号化されていないポータブルハードドライブに転送することは、明白に（expressly）禁止されています。"
        }
    }
];