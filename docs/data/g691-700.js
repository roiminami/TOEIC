// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag181-190 Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "capture",
        pos: "動/名",
        ipa: "/ˈkæptʃər/",
        cn: "捕获，捕捉，占用（注意力），拍摄",
        jp: "捕獲する、捉える、撮影する",
        family: "captured / capturing / captive / captivating",
        tips: "商务与市场营销高频动词。常见搭配：capture market share（占领市场份额）、capture customer attention（吸引客户注意力）、capture a moment（捕捉瞬间）。",
        desc: "They captured the market share."
    },
    {
        word: "adequate",
        pos: "形",
        ipa: "/ˈædɪkwət/",
        cn: "充足的，胜任的，适当的",
        jp: "十分な、適切で足りている",
        family: "adequately / adequacy / inadequate",
        tips: "预算评估、人手配备及技能要求高频形容词。等同于 sufficient。常见短语：adequate resources（充足的资源）、adequate preparation（充分的准备）。",
        desc: "We have adequate supplies."
    },
    {
        word: "separately",
        pos: "副",
        ipa: "/ˈseprətli/",
        cn: "单独地，分别地",
        jp: "別々に、個別に",
        family: "separate / separation / separable",
        tips: "发票列举、包装出货及账单支付高频副词。核心搭配：sold separately（单独出售）、billed separately（分别开具账单）、mailed separately（分开邮寄）。",
        desc: "Batteries are sold separately."
    },
    {
        word: "rarely",
        pos: "副",
        ipa: "/ˈrerli/",
        cn: "罕见地，很少，难得",
        jp: "めったに〜ない、まれに",
        family: "rare / rareness",
        tips: "频度副词与倒装结构高频词。表示否定概念（等于 seldom / hardly ever）。位于句首时主谓倒装，如 Rarely do we see such growth.",
        desc: "He rarely comes late."
    },
    {
        word: "concentrate",
        pos: "動",
        ipa: "/ˈkɑːnsntreɪt/",
        cn: "集中，专心，聚集",
        jp: "集中する、集中的に取り組む",
        family: "concentration / concentrated",
        tips: "业务聚焦、资源整合及注意力集中高频动词。核心搭配：concentrate on sth（专心于/致力于某事）、concentrate effort/resources（集中力量/资源）。",
        desc: "Please concentrate on your work."
    },
    {
        word: "abandon",
        pos: "動",
        ipa: "/əˈbændən/",
        cn: "放弃，中止，遗弃",
        jp: "断念する、放棄する、捨て去る",
        family: "abandoned / abandonment",
        tips: "项目关停、方案废弃与设施遗弃高频动词。常用搭配：abandon a plan/project（放弃计划/项目）、abandon a facility（废弃设施）。同义词：give up / cancel。",
        desc: "They had to abandon the plan."
    },
    {
        word: "objective",
        pos: "名/形",
        ipa: "/əbˈdʒektɪv/",
        cn: "目标，目的；客观的，公正的",
        jp: "目的、目標；客観的な",
        family: "objectively / objectivity / object",
        tips: "企划目标与绩效考评核心词。作名词等同于 goal/target；作形容词与 subjective（主观的）相对。常见搭配：achieve the primary objective（达成主要目标）、objective assessment（客观评估）。",
        desc: "Our main objective is quality."
    },
    {
        word: "partial",
        pos: "形",
        ipa: "/ˈpɑːrʃl/",
        cn: "部分的，局部的；偏袒的",
        jp: "部分的な、一部の；不公平な",
        family: "partially / partiality / part",
        tips: "财务退款、项目进度及发货高频形容词。核心搭配：partial refund（部分退款）、partial shipment（部分分批发货）。派生副词 partially（部分地）。",
        desc: "They gave a partial refund."
    },
    {
        word: "ambitious",
        pos: "形",
        ipa: "/æmˈbɪʃəs/",
        cn: "雄心勃勃的，抱负不凡的，宏伟的",
        jp: "野心的な、大望を抱いた、雄大な",
        family: "ambition / ambitiously",
        tips: "公司拓展计划、战略规划与员工考评高频形容词。常用搭配：ambitious project/plan（宏伟的计划）、ambitious goal（雄心勃勃的目标）。",
        desc: "It is an ambitious plan."
    },
    {
        word: "caution",
        pos: "名/動",
        ipa: "/ˈkɔːʃn/",
        cn: "谨慎，警告，小心；提醒",
        jp: "注意、用心、警告；注意を与える",
        family: "cautious / cautiously / cautionary",
        tips: "安全规程、投资防范与警告标志高频词。常用搭配：exercise caution（保持谨慎）、proceed with caution（谨慎行事）。形容词 cautious（谨慎的）。",
        desc: "Proceed with extreme caution."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "separately",
        category: "简单",
        stem: "Please note that accessories for the electronic device are sold ________ and not included in the main box.",
        options: ["separately", "rarely", "partial", "adequate"],
        correct: "separately",
        explanations: {
            guide: "副词修饰被动语态。位于 are sold 之后，表达配件是“单独地/分开地”出售，选副词 separately。",
            family: "separately (adv.单独地) | rarely (adv.很少) | partial (adj.部分的) | adequate (adj.充足的)。",
            details: "sold separately 是零售与电子产品包装上的典型固定短语，意为“单独出售”。",
            cn: "请注意，该电子设备的配件是单独出售的，不包含在主包装盒内。",
            jp: "電子機器のアクセサリは別売り（separately）となっており、本体箱には含まれていませんのでご注意ください。"
        }
    },
    {
        id: 2,
        target: "abandon",
        category: "简单",
        stem: "Due to severe budget cuts, the firm was forced to ________ its expansion plan in Europe.",
        options: ["abandon", "capture", "concentrate", "caution"],
        correct: "abandon",
        explanations: {
            guide: "动词词义辨析。位于不定式符号 to 之后，结合前半句“由于严重的预算削减”，表达被迫“放弃”扩张计划，选 abandon。",
            family: "abandon (v.放弃) | capture (v.捕获) | concentrate (v.集中) | caution (n./v.警告)。",
            details: "abandon an expansion plan 意为“放弃/中止扩张计划”，属于企业战略收缩的标准表达。",
            cn: "由于严重的预算削减，该公司迫不得不放弃其在欧洲的扩张计划。",
            jp: "深刻な予算削減のため、同社は欧州での拡大計画を断念（abandon）せざるを得ませんでした。"
        }
    },
    {
        id: 3,
        target: "adequate",
        category: "简单",
        stem: "Management promised to ensure that all workers receive ________ training before operating the new machinery.",
        options: ["adequate", "separately", "rarely", "partial"],
        correct: "adequate",
        explanations: {
            guide: "形容词修饰名词。修饰名词 training（培训），表达在操作新机械之前接受“充分的/适当的”培训，选 adequate。",
            family: "adequate (adj.充足的) | separately (adv.单独地) | rarely (adv.很少) | partial (adj.部分的)。",
            details: "adequate training 意为“充分的培训”，是职业安全与岗前培训的高频短语。",
            cn: "管理层承诺确保所有工人在操作新机械前都接受充分的培训。",
            jp: "経営陣は、すべての作業員が新しい機械を操作する前に十分な（adequate）トレーニングを受けることを保証すると約束しました。"
        }
    },
    {
        id: 4,
        target: "objective",
        category: "简单",
        stem: "The primary ________ of this morning's meeting is to review the annual marketing strategy.",
        options: ["objective", "caution", "capture", "abandon"],
        correct: "objective",
        explanations: {
            guide: "名词词义辨析。作句子的主语，由形容词 primary（主要的）修饰，结合后文“审查年度营销策略”，表达会议的主要“目标/目的”，选 objective。",
            family: "objective (n.目标/目的) | caution (n.谨慎) | capture (v.捕获) | abandon (v.放弃)。",
            details: "the primary objective 意为“主要目标”，是会议议程与项目企划的标配词组。",
            cn: "今天上午会议的主要目的是审查年度营销策略。",
            jp: "今朝の会議の主な目的（objective）は、年間のマーケティング戦略を検討することです。"
        }
    },
    {
        id: 5,
        target: "partial",
        category: "简单",
        stem: "Because the order was incomplete, the customer received a ________ refund for the missing items.",
        options: ["partial", "ambitious", "adequate", "rarely"],
        correct: "partial",
        explanations: {
            guide: "形容词修饰名词。修饰名词 refund（退款），结合前半句“订单不完整”，表达收到了针对缺失商品的“部分”退款，选 partial。",
            family: "partial (adj.部分的) | ambitious (adj.宏伟的) | adequate (adj.充足的) | rarely (adv.很少)。",
            details: "partial refund 意为“部分退款”，属于电商与客服退换货处理中的核心术语。",
            cn: "由于订单不完整，客户收到了针对缺失商品的部分退款。",
            jp: "注文が不完全だったため、顧客は不足品に対して部分的な（partial）返金を受け取りました。"
        }
    },
    {
        id: 6,
        target: "rarely",
        category: "简单",
        stem: "The chief executive officer ________ speaks to the press without consulting her legal advisor first.",
        options: ["rarely", "separately", "partial", "adequate"],
        correct: "rarely",
        explanations: {
            guide: "频度副词修饰动词。位于主语和谓语动词 speaks 之间，表达CEO“很少/难得”在未咨询法律顾问的情况下接受媒体采访，选 rarely。",
            family: "rarely (adv.很少/罕见地) | separately (adv.单独地) | partial (adj.部分的) | adequate (adj.充足的)。",
            details: "rarely 在句中作状语修饰动词 speaks，表示动作发生的频率极低。",
            cn: "首席执行官很少在没有事先咨询法律顾问的情况下向媒体发言。",
            jp: "最高経営責任者は、法務顧問に相談することなくメディアに話すことはめったにありません（rarely）。"
        }
    },
    {
        id: 7,
        target: "capture",
        category: "中等",
        stem: "The new advertising campaign helped the smartphone brand ________ a larger market share this quarter.",
        options: ["capture", "abandon", "concentrate", "caution"],
        correct: "capture",
        explanations: {
            guide: "动词与名词搭配。位于 help sb (to) do 结构中，与 market share（市场份额）构成动宾搭配，表达“占领/夺取”市场份额，选 capture。",
            family: "capture (v.捕获/占领) | abandon (v.放弃) | concentrate (v.集中) | caution (v.提醒)。",
            details: "capture market share 意为“占领/赢取市场份额”，是商务竞争与市场报告的极高频搭配。",
            cn: "新的广告宣传活动帮助该智能手机品牌在本季度占领了更大的市场份额。",
            jp: "新しい広告キャンペーンにより、そのスマートフォンブランドは今四半期にシェアを拡大（capture）することができました。"
        }
    },
    {
        id: 8,
        target: "ambitious",
        category: "中等",
        stem: "The board approved an ________ expansion plan that aims to open fifty new branch offices next year.",
        options: ["ambitious", "partial", "adequate", "rarely"],
        correct: "ambitious",
        explanations: {
            guide: "形容词修饰名词。位于不定冠词 an 之后，修饰 expansion plan，结合后文“开设50家新分公司”，表达“雄心勃勃的/宏伟的”计划，选 ambitious。",
            family: "ambitious (adj.雄心勃勃的) | partial (adj.部分的) | adequate (adj.充足的) | rarely (adv.很少)。",
            details: "an ambitious expansion plan 意为“宏伟的扩张计划”，用于形容极具抱负的企业战略。",
            cn: "董事会批准了一项宏伟的扩张计划，旨在明年开设五十家新分公司。",
            jp: "取締役会は、来年50の新しい支社を開設することを目標とする野心的な（ambitious）拡大計画を承認しました。"
        }
    },
    {
        id: 9,
        target: "caution",
        category: "中等",
        stem: "Financial advisors advised individual investors to exercise ________ when buying stocks in volatile markets.",
        options: ["caution", "objective", "abandonment", "separately"],
        correct: "caution",
        explanations: {
            guide: "固定动宾搭配。作 exercise 的宾语，结合在动荡市场购买股票的语境，考查短语 exercise caution（保持谨慎），选 caution。",
            family: "caution (n.谨慎) | objective (n.目标) | abandonment (n.放弃) | separately (adv.单独地)。",
            details: "exercise caution 意为“保持谨慎/谨慎行事”，是投资理财与风险提示的高频公文用语。",
            cn: "财务顾问建议个人投资者在波动剧烈的市场中购买股票时要保持谨慎。",
            jp: "ファイナンシャルアドバイザーは、変動の激しい市場で株を購入する際には慎重を期す（exercise caution）よう個人投資家に助言しました。"
        }
    },
    {
        id: 10,
        target: "concentrate",
        category: "中等",
        stem: "To complete the design proposal before tomorrow's deadline, the creative team must ________ on their tasks.",
        options: ["concentrate", "capture", "abandon", "separately"],
        correct: "concentrate",
        explanations: {
            guide: "动词与介词搭配。位于情态动词 must 之后，与介词 on 连用，表达团队必须“专心于/集中精力于”任务，选 concentrate。",
            family: "concentrate (v.集中/专心) | capture (v.捕获) | abandon (v.放弃) | separately (adv.单独地)。",
            details: "concentrate on sth 意为“集中精力于某事”，属于职场效率与项目筹备的核心表达。",
            cn: "为了在明天截止日期前完成设计企划案，创意团队必须专注于各自的任务。",
            jp: "明日の締め切りまでに設計提案を完成させるため、クリエイティブチームは業務に集中（concentrate）しなければなりません。"
        }
    },
    {
        id: 11,
        target: "adequate",
        category: "中等",
        stem: "The project manager checked the inventory to confirm that the team was ________ prepared for the product launch.",
        options: ["adequately", "adequate", "adequacy", "ambitious"],
        correct: "adequately",
        explanations: {
            guide: "副词修饰形容词/分词。修饰过去分词形容词 prepared（准备好的），需要填入副词作状语，表达“充分地”准备好，选 adequately。",
            family: "adequately (adv.充分地) | adequate (adj.充足的) | adequacy (n.充足) | ambitious (adj.雄心勃勃的)。",
            details: "adequately prepared 意为“做了充分准备的”。adequately 是副词，用来修饰后方的形容词/分词。",
            cn: "项目经理检查了库存，以确认团队为产品发布做好了充分的准备。",
            jp: "プロジェクトマネージャーは在庫を確認し、チームが製品発表に向けて十分に（adequately）準備できていることを確かめました。"
        }
    },
    {
        id: 12,
        target: "partial",
        category: "中等",
        stem: "The warehouse was ________ damaged by the storm, but luckily most of the inventory remained intact.",
        options: ["partially", "partial", "partiality", "rarely"],
        correct: "partially",
        explanations: {
            guide: "副词修饰过去分词（被动语态）。位于 was 和 damaged 之间，修饰动词 damaged，结合后半句“大部分库存完好”，表达仓库“局部/部分地”受损，选副词 partially。",
            family: "partially (adv.部分地) | partial (adj.部分的) | partiality (n.偏袒) | rarely (adv.很少)。",
            details: "partially damaged 意为“局部受损/部分受损”。partially 作状语修饰形容词或分词。",
            cn: "仓库在风暴中局部受损，但幸运的是大部分库存完好无损。",
            jp: "倉庫は嵐によって部分的に（partially）損傷を受けましたが、幸いにも在庫の大部分は無事でした。"
        }
    },
    {
        id: 13,
        target: "caution",
        category: "困难",
        stem: "Investment analysts are taking a ________ approach until the central bank releases its quarterly interest rate policy.",
        options: ["cautious", "caution", "cautiously", "ambitious"],
        correct: "cautious",
        explanations: {
            guide: "派生形容词修饰名词。位于不定冠词 a 之后，修饰 approach（方法/态度），表达分析师们正在采取一种“谨慎的”态度，选形容词 cautious。",
            family: "cautious (adj.谨慎的) | caution (n.谨慎) | cautiously (adv.谨慎地) | ambitious (adj.雄心勃勃的)。",
            details: "take a cautious approach 意为“采取谨慎的态度”，是金融与经济预测场景中的高频行话。",
            cn: "在中央银行公布季度利率政策之前，投资分析师们正在采取谨慎的态度。",
            jp: "中央銀行が四半期金利政策を発表するまで、投資アナリストは慎重な（cautious）姿勢をとっています。"
        }
    },
    {
        id: 14,
        target: "objective",
        category: "困难",
        stem: "Third-party consultants were brought in to conduct an ________ evaluation of the proposed corporate merger.",
        options: ["objective", "objectively", "objectivity", "abandoned"],
        correct: "objective",
        explanations: {
            guide: "形容词作前置修饰语。位于不定冠词 an 之后，修饰 evaluation（评估），表达对拟议的企业合并进行一次“客观的”评估，选形容词 objective。",
            family: "objective (adj.客观的/n.目标) | objectively (adv.客观地) | objectivity (n.客官性) | abandoned (adj.被废弃的)。",
            details: "an objective evaluation 意为“一次客观的评估”。objective 在此作形容词，修饰名词 evaluation。",
            cn: "聘请了第三方顾问对拟议的企业合并进行客观的评估。",
            jp: "提案された企業合併の客観的な（objective）評価を行うため、外部コンサルタントが招かれました。"
        }
    },
    {
        id: 15,
        target: "concentrate",
        category: "困难",
        stem: "The role requires deep ________ and meticulous attention to detail during complex financial auditing procedures.",
        options: ["concentration", "concentrate", "concentrated", "separately"],
        correct: "concentration",
        explanations: {
            guide: "抽象名词派生考点。位于形容词 deep 之后，作 requires 的宾语，表达该岗位需要高度的“专注/注意力集中”，选名词 concentration。",
            family: "concentration (n.专注/集中) | concentrate (v.集中) | concentrated (adj.集中的) | separately (adv.单独地)。",
            details: "deep concentration 意为“高度专注”。concentrate 是动词，不能直接被形容词 deep 修饰作宾语。",
            cn: "该岗位在复杂的财务审计过程中需要高度的专注和对细节的细致关注。",
            jp: "この職務には、複雑な財務監査手続きにおける深い集中力（concentration）と細部への細心の注意が必要です。"
        }
    },
    {
        id: 16,
        target: "rarely",
        category: "困难",
        stem: "________ do we see a technology startup achieve such rapid international profitability within its first year.",
        options: ["Rarely", "Separately", "Partially", "Adequately"],
        correct: "Rarely",
        explanations: {
            guide: "否定副词置于句首引出倒装结构。句首空格后跟部分倒装语序 do we see...，表示否定或罕见含义，选否定副词 Rarely（很少/难得）。",
            family: "Rarely (adv.很少/难得) | Separately (adv.单独地) | Partially (adv.部分地) | Adequately (adv.充分地)。",
            details: "Rarely do we see... 是托业 Part 5 语法高频倒装句型，否定副词 Rarely 放在句首时，句子需用助动词进行部分倒装。",
            cn: "我们很少看到一家科技初创公司能在第一年内就取得如此迅速的国际盈利。",
            jp: "技術系スタートアップが初年度にこれほど急速に国際的な収益性を達成するのは、めったに見られません（Rarely）。"
        }
    },
    {
        id: 17,
        target: "ambitious",
        category: "困难",
        stem: "The young entrepreneur's relentless ________ drove her to build a multi-million-dollar logistics firm.",
        options: ["ambition", "ambitious", "ambitiously", "caution"],
        correct: "ambition",
        explanations: {
            guide: "抽象名词派生考点。位于形容词 relentless（不懈的）之后，作主语中心词，表达不懈的“雄心/抱负”，选抽象名词 ambition。",
            family: "ambition (n.雄心/抱负) | ambitious (adj.雄心勃勃的) | ambitiously (adv.野心勃勃地) | caution (n.谨慎)。",
            details: "relentless ambition 意为“不懈的雄心壮志”。ambitious 是形容词，不能直接放在形容词之后作主语中心语。",
            cn: "这位年轻创业者不懈的雄心壮志驱使她建立了一家价值数百万美元的物流公司。",
            jp: "若い起業家の絶え間ない野心（ambition）が、彼女を数百万ドル規模の物流企業の設立へと駆り立てました。"
        }
    },
    {
        id: 18,
        target: "capture",
        category: "困难",
        stem: "The marketing director delivered a ________ presentation that kept the entire board of directors thoroughly engaged.",
        options: ["captivating", "capture", "captured", "captive"],
        correct: "captivating",
        explanations: {
            guide: "分词形容词修饰考点。位于不定冠词 a 之后，修饰 presentation（演示汇报），表达一次“扣人心弦的/引人入胜的”汇报，选现在分词转化为形容词的 captivating。",
            family: "captivating (adj.引人入胜的/迷人的) | capture (v.捕获) | captured (adj.被捕获的) | captive (n./adj.俘虏/受控制的)。",
            details: "a captivating presentation 意为“一次极其精彩引人入胜的演示”。captivating 用于修饰能吸引注意的事物。",
            cn: "营销总监做了一场扣人心弦的演示，使整个董事会全程高度投入。",
            jp: "マーケティングディレクターは、取締役会全体を終始引き込む、魅惑的で説得力のある（captivating）プレゼンテーションを行いました。"
        }
    }
];