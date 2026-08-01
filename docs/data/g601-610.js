// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag21-30.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "pursue",
        pos: "動",
        ipa: "/pərˈsuː/",
        cn: "追求，从事，追踪",
        jp: "追求する、従事する",
        family: "pursuit / pursuer / pursuing",
        tips: "常与事业、目标或商业机会组合：pursue a career（追求事业）、pursue market opportunities（寻求市场机会）。派生名词 pursuit 亦为高频考点。",
        desc: "We pursue new opportunities."
    },
    {
        word: "seasonal",
        pos: "形",
        ipa: "/ˈsiːzənl/",
        cn: "季节性的",
        jp: "季節の、季節的な",
        family: "season / seasonally / seasonality",
        tips: "零售与人力资源常考：seasonal demand（季节性需求）、seasonal staff/workers（临时工/季节工）。派生副词 seasonally 常考 seasonally adjusted（按季节调整的）。",
        desc: "They hired seasonal staff."
    },
    {
        word: "presence",
        pos: "名",
        ipa: "/ˈprezns/",
        cn: "存在，出席，商业影响力",
        jp: "存在、出席、影響力",
        family: "present / presentable / presently",
        tips: "品牌与市场扩展高频词：expand online presence（扩大网络影响力/线上存在感）、global presence（全球业务存在）。",
        desc: "The firm expands its presence."
    },
    {
        word: "portion",
        pos: "名/動",
        ipa: "/ˈpɔːrʃn/",
        cn: "部分，一份；分配",
        jp: "部分、分け前；分配する",
        family: "proportional / portioned / portioning",
        tips: "财务与预算考点：a large portion of the budget（预算的大部分）。派生形容词 proportional 表达“成比例的”。",
        desc: "A portion of profits is saved."
    },
    {
        word: "retain",
        pos: "動",
        ipa: "/rɪˈteɪn/",
        cn: "保留，保持，聘请",
        jp: "保持する、維持する、雇う",
        family: "retention / retainable / retainer",
        tips: "HR与客户关系核心词：retain key talent（留住关键人才）、retain existing clients（留住老客户）。名词 retention（留存率）极高频。",
        desc: "We retain our existing clients."
    },
    {
        word: "visible",
        pos: "形",
        ipa: "/ˈvɪzəbl/",
        cn: "看得见的，明显的",
        jp: "目に見える、明らかな",
        family: "visibility / visibly / vision",
        tips: "修饰增长或成果：visible improvement/progress（显而易见的改进/进展）。派生名词 visibility 表示“曝光度/知名度/可见度”。",
        desc: "The results show visible progress."
    },
    {
        word: "thoroughly",
        pos: "副",
        ipa: "/ˈθɜːroʊli/",
        cn: "彻底地，严密地",
        jp: "徹底的に、詳細に",
        family: "thorough / thoroughness",
        tips: "修饰动词如 thoroughly inspect/review/clean（彻底检查/审查/清洁）。注意区分形容词 thorough 与副词 thoroughly。",
        desc: "She thoroughly inspected the site."
    },
    {
        word: "belongings",
        pos: "名",
        ipa: "/bɪˈlɔːŋɪŋz/",
        cn: "个人物品，财产",
        jp: "所持品、所有物",
        family: "belong / belonging",
        tips: "商务场景常以复数形式 belongings 出现。常见于机场、酒店、会议公告：personal belongings（个人随身物品）。",
        desc: "Take your personal belongings."
    },
    {
        word: "paycheck",
        pos: "名",
        ipa: "/ˈpeɪtʃek/",
        cn: "薪水，付薪支票",
        jp: "給料、給与小切手",
        family: "pay / paystub / payroll",
        tips: "薪酬管理场景。常见搭配 collect a paycheck（领薪水）、weekly/monthly paycheck。注意与 payroll（工资表/发薪总额）区分。",
        desc: "He received his weekly paycheck."
    },
    {
        word: "delete",
        pos: "動",
        ipa: "/dɪˈliːt/",
        cn: "删除，擦去",
        jp: "削除する、消去する",
        family: "deletion / deletable",
        tips: "办公自动化与IT系统场景：delete a file/record（删除文件/记录）。派生名词 deletion 意为“删除/删去”。",
        desc: "Please delete the old files."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "pursue",
        category: "简单",
        stem: "The logistics company plans to ________ new market opportunities in Southeast Asia next quarter.",
        options: ["pursue", "pursuit", "visible", "seasonal"],
        correct: "pursue",
        explanations: {
            guide: "不定式动词原形考点。plans to 后面需要接动词原形构成不定式结构，表达“追求/寻觅”市场机会，选 pursue。",
            family: "pursue (v.追求) | pursuit (n.追求) | visible (adj.看得见的) | seasonal (adj.季节性的)。",
            details: "plans to pursue 是商务决策场景常见表达。pursuit 为名词，不能直接接在 to 不定式符号后作谓语动词。",
            cn: "该物流公司计划下季度在东南亚寻求新的市场机会。",
            jp: "その物流会社は来四半期に東南アジアで新しい市場の機会を追求する（pursue）ことを計画しています。"
        }
    },
    {
        id: 2,
        target: "seasonal",
        category: "简单",
        stem: "The department store needs to hire extra ________ staff to handle the holiday shopping rush.",
        options: ["seasonal", "seasonally", "belongings", "delete"],
        correct: "seasonal",
        explanations: {
            guide: "形容词修饰名词考点。空格位于形容词 extra 与名词 staff 之间，充当定语，修饰 staff 表达“季节性的/临时的”员工，选 seasonal。",
            family: "seasonal (adj.季节性的) | seasonally (adv.季节性地) | belongings (n.个人物品) | delete (v.删除)。",
            details: "seasonal staff 是人力资源与零售场景的高频固定词组，指“季节工/临时雇员”。seasonally 是副词，不能修饰名词 staff。",
            cn: "该百货公司需要雇用额外的季节性员工来应对节日购物高峰。",
            jp: "その百貨店は、ホリデーシーズンのショッピングラッシュに対応するために、臨時の季節（seasonal）スタッフを雇用する必要があります。"
        }
    },
    {
        id: 3,
        target: "delete",
        category: "简单",
        stem: "Please ________ any outdated document files from the shared server to free up storage space.",
        options: ["delete", "deletion", "retain", "portion"],
        correct: "delete",
        explanations: {
            guide: "祈使句动词原形考点。please 后面接动词原形引导祈使句，结合宾语 document files，表达“删除”陈旧文件，选 delete。",
            family: "delete (v.删除) | deletion (n.删除) | retain (v.保留) | portion (n.部分)。",
            details: "delete files 是IT与办公场景标配表达。deletion 为名词，不符合祈使句谓语结构。",
            cn: "请从共享服务器中删除所有过时的文档文件，以释放存储空间。",
            jp: "ストレージ容量を空けるため、共有サーバーから古いドキュメントファイルを削除（delete）してください。"
        }
    },
    {
        id: 4,
        target: "belongings",
        category: "简单",
        stem: "Passengers are strictly reminded to take all of their personal ________ before exiting the train.",
        options: ["belongings", "belong", "paycheck", "presence"],
        correct: "belongings",
        explanations: {
            guide: "限定词与形容词后的名词考点。their personal 后面需要接名词，组成 personal belongings（个人随身物品），选 belongings。",
            family: "belongings (n.个人物品) | belong (v.属于) | paycheck (n.薪水) | presence (n.存在)。",
            details: "personal belongings 是公共交通与酒店公告中最核心的固定搭配。belong 是动词，不能作 take 的宾语。",
            cn: "请乘客在下车前务必携带好所有个人随身物品。",
            jp: "乗客の皆様は、列車を降りる前に個人の所持品（belongings）をすべてお持ちになるよう厳重に注意されています。"
        }
    },
    {
        id: 5,
        target: "paycheck",
        category: "简单",
        stem: "All full-time employees can view their monthly ________ stubs on the intranet site.",
        options: ["paycheck", "pay", "thoroughly", "pursue"],
        correct: "paycheck",
        explanations: {
            guide: "名词修饰名词（复合名词）考点。空格与 stubs 组合成 paycheck stubs（工资单存根），修饰名词表达工资信息，选 paycheck。",
            family: "paycheck (n.薪水/付薪支票) | pay (v./n.支付) | thoroughly (adv.彻底地) | pursue (v.追求)。",
            details: "paycheck stub 为薪酬制度中的专属术语，意为“工资单存根”。thoroughly 和 pursue 不符合名词短语逻辑。",
            cn: "所有全职员工均可在内部网上查看其每月工资单存根。",
            jp: "すべての正社員は、イントラネットサイトで毎月の給与（paycheck）明細を確認できます。"
        }
    },
    {
        id: 6,
        target: "visible",
        category: "简单",
        stem: "There has been a ________ improvement in team communication since the weekly briefing was introduced.",
        options: ["visible", "visibly", "retain", "portion"],
        correct: "visible",
        explanations: {
            guide: "形容词修饰名词考点。a 后面与名词 improvement 之间需要填入形容词，表达“显而易见的”改善，选 visible。",
            family: "visible (adj.看得见的/明显的) | visibly (adv.明显地) | retain (v.保留) | portion (n.部分)。",
            details: "visible improvement 是业绩评价与管理总结的高频搭配。visibly 是副词，不能接在冠词 a 后直接修饰名词。",
            cn: "自引入每周简报会以来，团队沟通有了显而易见的改善。",
            jp: "週次ブリーフィングが導入されて以来、チームコミュニケーションに目に見える（visible）改善が見られます。"
        }
    },
    {
        id: 7,
        target: "thoroughly",
        category: "中等",
        stem: "The quality assurance inspector will ________ check every device before it is packaged for shipment.",
        options: ["thoroughly", "thorough", "delete", "presence"],
        correct: "thoroughly",
        explanations: {
            guide: "副词修饰动词考点。空格位于情态动词 will 与实义动词 check 之间，需要填入副词作状语，表达“彻底地/仔细地”检查，选 thoroughly。",
            family: "thoroughly (adv.彻底地) | thorough (adj.彻底的) | delete (v.删除) | presence (n.存在)。",
            details: "thoroughly check/inspect 是产品质检与流程审查的标准组合。thorough 是形容词，不能直接修饰动词 check。",
            cn: "质量保证检查员将在每个设备打包发货前对其进行彻底检查。",
            jp: "品質保証検査官は、出荷用に梱包される前にすべての装置を徹底的に（thoroughly）検査します。"
        }
    },
    {
        id: 8,
        target: "presence",
        category: "中等",
        stem: "By launching localized advertising campaigns, the firm hopes to strengthen its online ________ in Europe.",
        options: ["presence", "presently", "belongings", "pursue"],
        correct: "presence",
        explanations: {
            guide: "形容词后的名词考点。its online 后面需要接名词充当 strengthen 的宾语，表达建立/增强网络“存在感/影响力”，选 presence。",
            family: "presence (n.存在/影响力) | presently (adv.目前) | belongings (n.个人物品) | pursue (v.追求)。",
            details: "online presence（网络存在感/线上业务布局）是现代市场营销的高频专属考点。presently 为副词，不能作宾语。",
            cn: "通过发起本地化的广告活动，该公司希望加强其在欧洲的在线影响力。",
            jp: "ローカライズされた広告キャンペーンを開始することで、同社は欧州でのオンライン上の存在感（presence）を強化したいと考えています。"
        }
    },
    {
        id: 9,
        target: "portion",
        category: "中等",
        stem: "A major ________ of the corporate budget for next year will be allocated to research and development.",
        options: ["portion", "portioning", "paycheck", "retain"],
        correct: "portion",
        explanations: {
            guide: "固定结构与名词考点。A major ________ of... 结构中需要接名词，表达“……的大部分/主要部分”，选 portion。",
            family: "portion (n.部分) | portioning (n./v-ing分配) | paycheck (n.薪水) | retain (v.保留)。",
            details: "a major portion of 是商务报告中介绍资金或资源分配的经典搭配，等同于 a large part of。",
            cn: "明年公司预算的大部分将被分配给研发部门。",
            jp: "来年度の企業予算の大部分（portion）が研究開発に割り当てられます。"
        }
    },
    {
        id: 10,
        target: "retain",
        category: "中等",
        stem: "To ________ top talent, the company offers competitive salary packages and flexible working arrangements.",
        options: ["retain", "retention", "seasonal", "delete"],
        correct: "retain",
        explanations: {
            guide: "不定式动词原形与目的状语。句首 To 引导目的状语，后接动词原形，带宾语 top talent，表达“留住”优秀人才，选 retain。",
            family: "retain (v.保留/留住) | retention (n.留任/留存) | seasonal (adj.季节性的) | delete (v.删除)。",
            details: "retain top talent / retain clients 是职场与客户关系管理的高频短语。retention 是名词，放在 To 之后不符合语法。",
            cn: "为了留住顶尖人才，公司提供了具有竞争力的薪酬包和灵活的工作安排。",
            jp: "優秀な人材を維持する（retain）ために、会社は競争力のある給与パッケージと柔軟な勤務形態を提供しています。"
        }
    },
    {
        id: 11,
        target: "seasonal",
        category: "中等",
        stem: "Sales figures in the resort industry fluctuate ________ according to tourist arrival rates.",
        options: ["seasonally", "seasonal", "portion", "thoroughly"],
        correct: "seasonally",
        explanations: {
            guide: "副词修饰动词考点。空格在不及物动词 fluctuate（波动）之后，需要填入副词作状语，表达“按季节/季节性地”波动，选 seasonally。",
            family: "seasonally (adv.季节性地) | seasonal (adj.季节性的) | portion (n.部分) | thoroughly (adv.彻底地)。",
            details: "fluctuate seasonally 表示“呈季节性波动”，常出现在阅读 Part 7 的图表分析或商务报告中。",
            cn: "度假村行业的销售数字根据游客到达率呈季节性波动。",
            jp: "リゾート業界の売上数字は、観光客の到着率に応じて季節ごとに（seasonally）変動します。"
        }
    },
    {
        id: 12,
        target: "visible",
        category: "中等",
        stem: "The sponsored event greatly enhanced the brand's ________ among young business professionals.",
        options: ["visibility", "visible", "presence", "paycheck"],
        correct: "visibility",
        explanations: {
            guide: "名词作宾语与语义辨析。the brand's 后面需要接名词充当 enhanced 的宾语，表达提升品牌的“知名度/曝光度”，选 visibility。",
            family: "visibility (n.知名度/可见度) | visible (adj.看得见的) | presence (n.存在) | paycheck (n.薪水)。",
            details: "enhance brand visibility 属于公关与市场营销场景专属高频搭配，意为“提高品牌知名度”。visible 是形容词，不能单独作动词宾语。",
            cn: "赞助活动大大提高了该品牌在年轻商务专业人士中的知名度。",
            jp: "スポンサーイベントにより、若手ビジネスパーソンの間でのブランドの知名度（visibility）が大幅に向上しました。"
        }
    },
    {
        id: 13,
        target: "retain",
        category: "困难",
        stem: "Improving employee ________ has become a key administrative priority following the recent restructuring.",
        options: ["retention", "retain", "pursuit", "belongings"],
        correct: "retention",
        explanations: {
            guide: "复合名词作主语考点。employee 与 retention 组合为固定术语 employee retention（员工留存/留任），在句中作主语，选 retention。",
            family: "retention (n.留任/保持) | retain (v.保留) | pursuit (n.追求) | belongings (n.个人物品)。",
            details: "employee retention rate（员工留存率）是 HR 管理场景的考点核心。retain 是动词，不能在此修饰名词构成主语结构。",
            cn: "近期重组后，提高员工留存率已成为管理层的主要优先事项。",
            jp: "最近の組織再編に伴い、従業員の定着率（retention）の向上が重要な管理上の優先事項となっています。"
        }
    },
    {
        id: 14,
        target: "thoroughly",
        category: "困难",
        stem: "Only after conducting a ________ investigation into the cause of the system failure did the team restart the server.",
        options: ["thorough", "thoroughly", "visible", "seasonal"],
        correct: "thorough",
        explanations: {
            guide: "倒装句中的形容词修饰名词考点。Only after 引导状语位于句首，空格在不定冠词 a 与名词 investigation 之间，需要形容词，选 thorough。",
            family: "thorough (adj.彻底的/详尽的) | thoroughly (adv.彻底地) | visible (adj.显而易见的) | seasonal (adj.季节性的)。",
            details: "a thorough investigation（彻底的调查）是商务责任认定场景的标配。thoroughly 是副词，不能直接修饰名词 investigation。",
            cn: "团队只有在对系统故障的原因进行了彻底调查之后，才重新启动了服务器。",
            jp: "システム障害の原因について徹底的な（thorough）調査を行った後でのみ、チームはサーバーを再起動しました。"
        }
    },
    {
        id: 15,
        target: "pursue",
        category: "困难",
        stem: "The legal department worked relentlessly in ________ of a favorable settlement for the patent infringement lawsuit.",
        options: ["pursuit", "pursue", "portion", "retention"],
        correct: "pursuit",
        explanations: {
            guide: "介词搭配与派生名词。in ________ of 是高阶固定短语，意为“为了追求/为了寻求……”，后接名词，选 pursuit。",
            family: "pursuit (n.追求/寻求) | pursue (v.追求) | portion (n.部分) | retention (n.保留)。",
            details: "in pursuit of sth 属于托业阅读Part 7高阶句式（如 in pursuit of excellence 追求卓越）。pursue 是动词，不能作介词 in 的宾语。",
            cn: "法务部不懈努力，以寻求就专利侵权诉讼达成有利的和解。",
            jp: "法務部門は、特許侵害訴訟での有利な和解を追求して（in pursuit of）絶え間なく努力しました。"
        }
    },
    {
        id: 16,
        target: "delete",
        category: "困难",
        stem: "The accidental ________ of confidential customer records led to an immediate system audit across all branches.",
        options: ["deletion", "delete", "presence", "thorough"],
        correct: "deletion",
        explanations: {
            guide: "限定词与形容词后的主语名词。The accidental 后面需要接名词作句子的主语，表达“误删/意外删除”，选 deletion。",
            family: "deletion (n.删除) | delete (v.删除) | presence (n.存在) | thorough (adj.彻底的)。",
            details: "the deletion of data/records 意为“数据的删除”。delete 是动词原形，不能被定冠词和形容词修饰作为主语。",
            cn: "机密客户记录的意外删除引发了所有分部的即时系统审计。",
            jp: "機密顧客記録の誤った削除（deletion）により、全支店で即時のシステム監査が行われました。"
        }
    },
    {
        id: 17,
        target: "portion",
        category: "困难",
        stem: "The executive committee decided that performance bonuses should be ________ distributed according to individual achievements.",
        options: ["proportionately", "portion", "retained", "seasonal"],
        correct: "proportionately",
        explanations: {
            guide: "派生副词修饰被动语态动词。位于 be 与过去分词 distributed 之间，需要副词作状语，表达按比例/相称地分配，选 proportionately。",
            family: "proportionately (adv.按比例地) | portion (n.部分/v.分配) | retained (adj./v-ed留存的) | seasonal (adj.季节性的)。",
            details: "proportionately distributed 指“按比例发放/分配”。portion 为名词/动词原形，在此处无法充当副词修饰 distributed。",
            cn: "执行委员会决定，绩效奖金应根据个人成就按比例分配。",
            jp: "執行委員会は、業績ボーナスが個人の実績に応じて比例して（proportionately）分配されるべきであると決定しました。"
        }
    },
    {
        id: 18,
        target: "presence",
        category: "困难",
        stem: "The client relations team made sure all product samples were arranged in a highly ________ format prior to the meeting.",
        options: ["presentable", "presence", "thoroughly", "pursue"],
        correct: "presentable",
        explanations: {
            guide: "派生形容词修饰名词。a highly 之后、format 之前需要形容词定语，表达布局“体面的/拿得出来的/美观的”，选 presentable。",
            family: "presentable (adj.体面的/漂亮的/适合展示的) | presence (n.存在) | thoroughly (adv.彻底地) | pursue (v.追求)。",
            details: "in a presentable format 意为“以体面/易于呈现的形式”。presence 是名词，不能在此处作形容词修饰 format。",
            cn: "客户关系团队确保在会议之前将所有产品样品布置得非常体面观瞻。",
            jp: "クライアント関係チームは、会議の前にすべての製品サンプルが非常に見栄えの良い（presentable）形式で配置されていることを確認しました。"
        }
    }
];