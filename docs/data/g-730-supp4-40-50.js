// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (Grammar Special: Advanced Subordinate Conjunctions)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "whether",
        pos: "接",
        ipa: "/ˈweðər/",
        cn: "是否；无论（是否）",
        jp: "〜かどうか、〜であろうとなかろうと",
        family: "whether",
        tips: "重要从属连词。常引导名词性从句（是否，如 check whether...）或状语从句（无论是否，配合 or / or not，如 whether it rains or not）。",
        desc: "I wonder whether he will come."
    },
    {
        word: "whenever",
        pos: "接/副",
        ipa: "/wenˈevər/",
        cn: "每当，无论何时",
        jp: "〜するときはいつでも、いつ〜しようとも",
        family: "when",
        tips: "时间/让步从属连词（等于 no matter when）。引导时间状语从句，表达频次规律或无条件的规则，如 whenever a problem arises.",
        desc: "Call me whenever you need help."
    },
    {
        word: "whereas",
        pos: "接",
        ipa: "/ˌwerˈæz/",
        cn: "然而，鉴于，反之",
        jp: "〜であるのに対して、〜である一方で",
        family: "whereas",
        tips: "对比从属连词，等同于 while。用于连接两个表示对比的事实，如 Sales increased in Asia, whereas they declined in Europe.",
        desc: "He likes tea, whereas she prefers coffee."
    },
    {
        word: "even if",
        pos: "接",
        ipa: "/ˈiːvn ɪf/",
        cn: "即使，纵然",
        jp: "たとえ〜だとしても",
        family: "even / if",
        tips: "假设让步从属连词。与 even though（既成事实的让步）不同，even if 侧重对“未发生或假设性状况”的让步，意为“即使发生某种假设”。",
        desc: "I will go even if it rains."
    },
    {
        word: "in case",
        pos: "接",
        ipa: "/ɪn keɪs/",
        cn: "以防，万一，假使",
        jp: "〜するといけないので、万一〜の場合に備えて",
        family: "case",
        tips: "目的/预防从属连词。引导目的或预防性状语从句，表示“为了防备某种可能性”（等同于 for fear that）。注意后接完整句子。",
        desc: "Take an umbrella in case it rains."
    },
    {
        word: "as long as",
        pos: "接",
        ipa: "/æz lɔːŋ æz/",
        cn: "只要",
        jp: "〜である限り、〜でありさえすれば",
        family: "so long as",
        tips: "限制性条件从属连词（等同于 so long as / provided that）。引导条件从句，表达只要满足前提条件，主句结果就会成立。",
        desc: "You can stay as long as you are quiet."
    },
    {
        word: "now that",
        pos: "接",
        ipa: "/naʊ ðæt/",
        cn: "既然，由于，既然现在",
        jp: "今や〜なので、〜となった以上は",
        family: "now / that",
        tips: "因果从属连词。引导原因状语从句，强调由于“新近发生的事实或新情况”而导致之后的结果（that 有时可省略）。",
        desc: "Now that you are here, we can start."
    },
    {
        word: "so that",
        pos: "接",
        ipa: "/soʊ ðæt/",
        cn: "为了，以便于；结果是",
        jp: "〜するように、〜するために",
        family: "so / in order that",
        tips: "目的从属连词（等同于 in order that）。从句中常包含情态动词 can / could / may / will。注意与表示结果的 so 相区分。",
        desc: "Speak clearly so that everyone can hear."
    },
    {
        word: "provided that",
        pos: "接",
        ipa: "/prəˈvaɪdɪd ðæt/",
        cn: "只要，在……条件下",
        jp: "〜という条件で、〜でありさえすれば",
        family: "providing that / provide",
        tips: "正式条件从属连词（等同于 providing that / as long as）。that 在口语和部分商务公文中可省略。引导条件状语从句。",
        desc: "You may go provided that you finish your work."
    },
    {
        word: "given that",
        pos: "接",
        ipa: "/ˈɡɪvn ðæt/",
        cn: "鉴于，考虑到",
        jp: "〜であることを考慮すると、〜に鑑みて",
        family: "given / give",
        tips: "推论/原因从属连词。后接完整句子，表达基于既定已知事实推出的原因与结论。注意与介词 given（后接名词短语）区别。",
        desc: "Given that fuel prices rose, fares will increase."
    },
    {
        word: "in the event that",
        pos: "接",
        ipa: "/ɪn ðə ɪˈvent ðæt/",
        cn: "万一，如果，在……情况下",
        jp: "万一〜する場合には",
        family: "in the event of",
        tips: "正式条件从属连词（等同于 if / in case）。后接完整主谓从句。注意与介词短语 in the event of（后接名词短语）的词性与结构对比。",
        desc: "In the event that the server crashes, call IT."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "as long as",
        category: "简单",
        stem: "You may use the executive conference room for your presentation ________ you reserve it at least two days in advance.",
        options: ["as long as", "so that", "even if", "whereas"],
        correct: "as long as",
        explanations: {
            guide: "条件连词辨析。空格后为完整从句 you reserve it at least two days in advance，表达“只要提前至少两天预订，就可以使用”，选条件从属连词 as long as。",
            family: "as long as (conj.只要) | so that (conj.以便于) | even if (conj.即使) | whereas (conj.然而)。",
            details: "as long as 引导条件状语从句，表达充要前提。so that 表达目的；even if 表达让步；whereas 表达对比。",
            cn: "只要您提前至少两天预订，就可以使用行政会议室进行演示汇报。",
            jp: "少なくとも2日前に予約しさえすれば（as long as）、プレゼンテーションのために役員会議室を使用することができます。"
        }
    },
    {
        id: 2,
        target: "so that",
        category: "简单",
        stem: "Please submit your expense receipts before Friday ________ the accounting team can process your reimbursement promptly.",
        options: ["so that", "now that", "whereas", "even if"],
        correct: "so that",
        explanations: {
            guide: "目的连词辨析。空格后从句中包含情态动词 can (can process)，表达“提交发票的目的是为了让财务团队及时处理”，选目的从属连词 so that。",
            family: "so that (conj.以便于/为了) | now that (conj.既然现在) | whereas (conj.然而) | even if (conj.即使)。",
            details: "so that 引导目的状语从句，从句中常含有 can/could/may/will 等情态动词。now that 引导原因；whereas 引导对比。",
            cn: "请在周五前提交费用发票，以便财务团队能够及时处理您的报销申请。",
            jp: "経理チームが迅速に精算処理を行えるように（so that）、金曜日までに経費の領収書を提出してください。"
        }
    },
    {
        id: 3,
        target: "now that",
        category: "简单",
        stem: "________ the new warehouse facility is fully operational, we can process twice as many customer orders daily.",
        options: ["Now that", "So that", "Even if", "Whereas"],
        correct: "Now that",
        explanations: {
            guide: "原因连词辨析。空格后从句为已知的新事实 the new warehouse facility is fully operational，表达“既然新仓库设施已全面投入运营”，选 Now that。",
            family: "Now that (conj.既然/由于现在) | So that (conj.为了) | Even if (conj.即使) | Whereas (conj.然而)。",
            details: "Now that 引导原因状语从句，专指由于某项新情况或新事实的发生而带来的结果。",
            cn: "既然新的仓库设施已经全面投入运营，我们每天可以处理两倍于以往的客户订单。",
            jp: "新しい倉庫施設が完全に稼働した以上は（Now that）、毎日2倍の顧客注文を処理することができます。"
        }
    },
    {
        id: 4,
        target: "in case",
        category: "简单",
        stem: "Please bring an extra copy of the contract ________ the client requests additional documentation during the meeting.",
        options: ["in case", "as long as", "now that", "whereas"],
        correct: "in case",
        explanations: {
            guide: "预防/目的连词辨析。空格后从句说明了一种潜在的可能性 the client requests additional documentation，表达“带上合同副本以防万一”，选 in case。",
            family: "in case (conj.以防/万一) | as long as (conj.只要) | now that (conj.既然) | whereas (conj.然而)。",
            details: "in case 引导预防性状语从句，表达为了防备某种可能发生的情况而提前准备。",
            cn: "请带上一份合同副本，以防客户在会议期间要求提供额外文件。",
            jp: "会議中に顧客が追加書類を要求する場合に備えて（in case）、契約書の控えをもう1部持参してください。"
        }
    },
    {
        id: 5,
        target: "whereas",
        category: "简单",
        stem: "Revenue from our European market increased significantly, ________ sales in the North American region remained flat.",
        options: ["whereas", "so that", "as long as", "now that"],
        correct: "whereas",
        explanations: {
            guide: "对比连词辨析。前句表明欧洲市场收入显著增加，后句表明北美地区销售额持平，前后形成鲜明对比，选从属连词 whereas（然而/而）。",
            family: "whereas (conj.然而/而) | so that (conj.以便) | as long as (conj.只要) | now that (conj.既然)。",
            details: "whereas 属于对比连词，连接两个互相对照的事实，完全等同于 while。",
            cn: "我们欧洲市场的收入显著增加，而北美地区的销售额则持平。",
            jp: "欧州市場からの売上高が大幅に増加したのに対して（whereas）、北米地域での売上は横ばいのままでした。"
        }
    },
    {
        id: 6,
        target: "even if",
        category: "简单",
        stem: "The flight will depart as scheduled ________ bad weather causes minor delays on the tarmac.",
        options: ["even if", "so that", "now that", "provided that"],
        correct: "even if",
        explanations: {
            guide: "假设让步连词辨析。空格后为假设性不利条件 bad weather causes minor delays，表达“即使恶劣天气造成轻微延误，航班也将按时起飞”，选 even if。",
            family: "even if (conj.即使/纵然) | so that (conj.以便) | now that (conj.既然) | provided that (conj.只要)。",
            details: "even if 引导假设让步状语从句，表达对未来或未定假设状况的让步。provided that 表肯定条件；now that 表既成事实原因。",
            cn: "即使恶劣天气在跑道上造成轻微延误，航班也将按计划起飞。",
            jp: "悪天候により滑走路で多少の遅れが生じたとしても（even if）、便は予定通り出発します。"
        }
    },
    {
        id: 7,
        target: "whether",
        category: "中等",
        stem: "The manager has not yet determined ________ the team should launch the marketing campaign this month or wait until next quarter.",
        options: ["whether", "whenever", "whereas", "now that"],
        correct: "whether",
        explanations: {
            guide: "名词性从句连词（or 搭配）。空格位于及物动词 determined 之后，引导宾语从句，且从句后方有选择连词 or，考查 whether... or... 结构，选 whether。",
            family: "whether (conj.是否/无论是否) | whenever (conj.每当) | whereas (conj.然而) | now that (conj.既然)。",
            details: "whether... or... 引导名词性宾语从句，表达“是……还是……”。whenever 引导时间从句；whereas 引导对比从句。",
            cn: "经理尚未确定团队应当在本月启动营销活动，还是等到下一个季度。",
            jp: "マネージャーは、チームが今月マーケティングキャンペーンを開始すべきか、それとも来四半期まで待つべきか（whether）をまだ決定していません。"
        }
    },
    {
        id: 8,
        target: "provided that",
        category: "中等",
        stem: "The vendor agreed to give us a ten percent discount ________ we place an order for at least five hundred units.",
        options: ["provided that", "so that", "whereas", "even if"],
        correct: "provided that",
        explanations: {
            guide: "正式条件连词辨析。空格后为条件从句 we place an order for at least five hundred units，表达“只要我们订购至少500件，供应商就同意打九折”，选 provided that。",
            family: "provided that (conj.只要/在……条件下) | so that (conj.以便) | whereas (conj.然而) | even if (conj.即使)。",
            details: "provided that 属于正式商务条件连词，完全等同于 as long as 或 providing that。",
            cn: "供应商同意给我们打九折，前提是我们下订单至少五百件。",
            jp: "少なくとも500個発注するという条件で（provided that）、業者は10%の割引に同意しました。"
        }
    },
    {
        id: 9,
        target: "whenever",
        category: "中等",
        stem: "Our automated system sends a confirmation email to the client ________ a new transaction is processed.",
        options: ["whenever", "whereas", "so that", "even if"],
        correct: "whenever",
        explanations: {
            guide: "频次/时间连词辨析。空格后从句表达规律性重复发生的动作 a new transaction is processed，选时间连词 whenever（每当/无论何时）。",
            family: "whenever (conj.每当) | whereas (conj.然而) | so that (conj.以便) | even if (conj.即使)。",
            details: "whenever 意为“每当/无论何时”（等于 no matter when），强调规律性或无条件的每次重复发生。",
            cn: "每当处理一笔新交易时，我们的自动化系统就会向客户发送一封确认电子邮件。",
            jp: "新しい取引が処理されるたびに（whenever）、当社の自動システムは顧客に確認メールを送信します。"
        }
    },
    {
        id: 10,
        target: "given that",
        category: "中等",
        stem: "________ the candidate possesses over fifteen years of executive experience, she is exceptionally well qualified for the position.",
        options: ["Given that", "So that", "Even if", "Whereas"],
        correct: "Given that",
        explanations: {
            guide: "推论/原因连词辨析。空格后从句为已知事实 the candidate possesses over fifteen years...，表达“鉴于该候选人拥有超过15年的高管经验”，选 Given that。",
            family: "Given that (conj.鉴于/考虑到) | So that (conj.以便) | Even if (conj.即使) | Whereas (conj.然而)。",
            details: "Given that 是从属连词，后接完整主谓从句，表达根据已知事实推出的合理因果结论。",
            cn: "鉴于该候选人拥有超过十五年的高管经验，她非常胜任这一职位。",
            jp: "候補者が15年以上の管理職経験を持っていることを考慮すると（Given that）、彼女はその職務に非常に適任です。"
        }
    },
    {
        id: 11,
        target: "in the event that",
        category: "中等",
        stem: "All backup battery generators will activate automatically ________ the main power supply fails.",
        options: ["in the event that", "so that", "now that", "whereas"],
        correct: "in the event that",
        explanations: {
            guide: "条件连词与介词区别。空格后跟完整句子 the main power supply fails，表达“万一主电源故障”，选连词结构 in the event that。",
            family: "in the event that (conj.万一/在……情况下) | so that (conj.以便) | now that (conj.既然) | whereas (conj.然而)。",
            details: "in the event that 后面必须接完整的句子；而介词短语 in the event of 后面只能接名词短语。",
            cn: "万一主电源发生故障，所有备用电池发电机都将自动启动。",
            jp: "万一主電源が故障した場合には（in the event that）、すべての予備バッテリー発電機が自動的に起動します。"
        }
    },
    {
        id: 12,
        target: "whether",
        category: "中等",
        stem: "All employees must attend the mandatory compliance training ________ they work full-time or part-time.",
        options: ["whether", "whenever", "so that", "now that"],
        correct: "whether",
        explanations: {
            guide: "状语从句连词（whether... or...）。空格后从句为 they work full-time or part-time，表达“无论他们是全职还是兼职”，选 whether。",
            family: "whether (conj.无论是否/是否) | whenever (conj.每当) | so that (conj.以便) | now that (conj.既然)。",
            details: "whether... or... 在此引导让步状语从句，表达排除两种可能选项的无条件限制（等于 regardless of whether...）。",
            cn: "所有员工都必须参加强制性的合规培训，无论他们是全职还是兼职。",
            jp: "フルタイム勤務かパートタイム勤務かにかかわらず（whether）、すべての従業員は必須のコンプライアンストレーニングに参加しなければなりません。"
        }
    },
    {
        id: 13,
        target: "so that",
        category: "困难",
        stem: "The IT administrator upgraded the company firewall ________ external security threats could be prevented effectively.",
        options: ["so that", "now that", "whereas", "as long as"],
        correct: "so that",
        explanations: {
            guide: "从句时态与目的连词。空格后从句含有情态动词 could (could be prevented)，表达升级防火墙的目的是为了有效防止外部安全威胁，选 so that。",
            family: "so that (conj.为了/以便于) | now that (conj.既然) | whereas (conj.然而) | as long as (conj.只要)。",
            details: "so that 引导目的从句，当主句为过去时（upgraded）时，从句中的情态动词相应使用过去式 could / would / might。",
            cn: "IT 管理员升级了公司防火墙，以便能够有效地防止外部安全威胁。",
            jp: "外部からのセキュリティ脅威を効果的に防ぐことができるように（so that）、IT管理者は会社のファイアウォールをアップグレードしました。"
        }
    },
    {
        id: 14,
        target: "now that",
        category: "困难",
        stem: "________ all legal agreements have been signed by both corporate parties, the joint venture can officially move forward.",
        options: ["Now that", "So that", "Even if", "Whereas"],
        correct: "Now that",
        explanations: {
            guide: "完成时从句与因果连词。空格后从句使用现在完成时 have been signed，表达“既然现在双方都已经签署了所有法律协议”，选 Now that。",
            family: "Now that (conj.既然/由于现在) | So that (conj.为了) | Even if (conj.即使) | Whereas (conj.然而)。",
            details: "Now that 经常与现在完成时从句连用，强调因近期完成的新事实而触发主句行动。",
            cn: "既然双方公司现在都已经签署了所有法律协议，合资企业就可以正式推进了。",
            jp: "両社によってすべての法的合意書が署名された以上は（Now that）、合弁事業は正式に前進することができます。"
        }
    },
    {
        id: 15,
        target: "provided that",
        category: "困难",
        stem: "The software company will grant a full license refund ________ the cancellation notice is submitted within fourteen business days.",
        options: ["provided that", "so that", "whereas", "now that"],
        correct: "provided that",
        explanations: {
            guide: "限制条件连词辨析。从句 the cancellation notice is submitted... 是主句 grant a refund 的前提条件，选条件连词 provided that（只要/前提是）。",
            family: "provided that (conj.只要/前提是) | so that (conj.以便) | whereas (conj.然而) | now that (conj.既然)。",
            details: "provided that 相当于 on condition that 或 if，常用于商业合同、退款规则与许可条款。",
            cn: "软件公司将退还全额许可费用，前提是在十四个工作日内提交取消通知。",
            jp: "解約通知が14営業日以内に提出されるという条件で（provided that）、ソフトウェア会社はライセンス料の全額返金に応じます。"
        }
    },
    {
        id: 16,
        target: "whereas",
        category: "困难",
        stem: "Senior executives receive an unlimited annual travel budget, ________ mid-level managers must adhere to strict spending limits.",
        options: ["whereas", "so that", "provided that", "now that"],
        correct: "whereas",
        explanations: {
            guide: "对比从句连词。高管（Senior executives）与中层经理（mid-level managers）在差旅预算上形成鲜明对比，选表示对比的从属连词 whereas（而/然而）。",
            family: "whereas (conj.而/然而) | so that (conj.以便) | provided that (conj.只要) | now that (conj.既然)。",
            details: "whereas 连接两个独立且形成显着对照的并列从句，在薪酬与福利对比政策中极高频。",
            cn: "高层管理人员享有无限制的年度差旅预算，而中层经理则必须遵守严格的支出限制。",
            jp: "上級幹部が無制限の年間出張予算を受け取るのに対して（whereas）、中堅マネージャーは厳格な支出制限に従わなければなりません。"
        }
    },
    {
        id: 17,
        target: "in case",
        category: "困难",
        stem: "The project coordinator decided to print paper backup files ________ the central cloud server experiences technical difficulties.",
        options: ["in case", "as long as", "now that", "whereas"],
        correct: "in case",
        explanations: {
            guide: "预防性目的连词辨析。后句从句 the central cloud server experiences... 说明了预防对象，表达“打印纸质备份以防云服务器故障”，选 in case。",
            family: "in case (conj.以防/万一) | as long as (conj.只要) | now that (conj.既然) | whereas (conj.然而)。",
            details: "in case 引导预防目的状语从句，表达主句采取的预防措施是为了应对从句可能发生的突发状况。",
            cn: "项目协调员决定打印纸质备份文件，以防中央云服务器出现技术故障。",
            jp: "プロジェクトコーディネーターは、中央クラウドサーバーで技術的トラブルが発生した場合に備えて（in case）、紙のバックアップファイルを印刷することにしました。"
        }
    },
    {
        id: 18,
        target: "given that",
        category: "困难",
        stem: "________ raw material costs have dropped significantly over the past two quarters, the manufacturing firm expects higher profit margins.",
        options: ["Given that", "So that", "Even if", "In the event of"],
        correct: "Given that",
        explanations: {
            guide: "原因连词与介词短语区分。空格后跟完整主谓从句 raw material costs (主) + have dropped (谓) ...，需要填入连词结构 Given that（鉴于/考虑到）。",
            family: "Given that (conj.鉴于/考虑到) | So that (conj.以便) | Even if (conj.即使) | In the event of (prep.万一发生)。",
            details: "Given that 是从属连词，接主谓从句；In the event of 是介词短语，后接名词。根据从句结构排除介词选项。",
            cn: "鉴于原材料成本在过去两个季度大幅下降，该制造公司预计利润率将有所提高。",
            jp: "過去2四半期で原材料コストが大幅に低下したことを考慮すると（Given that）、製造会社は利益率の向上を見込んでいます。"
        }
    }
];