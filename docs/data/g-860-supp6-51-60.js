// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data131-140.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "lower",
        pos: "動/形",
        ipa: "/ˈloʊər/",
        cn: "降低，减小；较低的，下方的",
        jp: "下げる、減らす；より低い、下部の",
        family: "low / lowered / lowering",
        tips: "商务高频多义考点：作动词表示下调价格、降低营运成本（lower prices / production costs / tariffs）；作形容词考比较级用法（at a lower rate / price 以更低的费率/价格）。",
        desc: "They decided to lower prices."
    },
    {
        word: "makeup",
        pos: "名",
        ipa: "/ˈmeɪkʌp/",
        cn: "构成，结构，成分；化妆品；补考",
        jp: "構成、構造、内訳；化粧品；追試",
        family: "make up",
        tips: "托业高阶熟词生义：指团队人员、人口特征或董事会的“组成结构/成分”（demographic makeup / staff makeup / board makeup），绝非仅指化妆品。",
        desc: "The demographic makeup of the team changed."
    },
    {
        word: "manage",
        pos: "動",
        ipa: "/ˈmænɪdʒ/",
        cn: "设法做到；管理，经营",
        jp: "何とかやり遂げる；管理する、経営する",
        family: "management / manager / manageable / managerial",
        tips: "双重核心考点：1. manage to do sth（历经困难设法成功做到某事）；2. 经营管理部门或团队（manage a budget / team / logistics division）。",
        desc: "She managed to finish the report."
    },
    {
        word: "margin",
        pos: "名",
        ipa: "/ˈmɑːrdʒɪn/",
        cn: "利润，利润率；差额，幅度；页边空白",
        jp: "利益（率）、マージン；差、余白；端",
        family: "marginal / marginally",
        tips: "财报与商业竞争核心考点：profit margin（利润率，如 gross/operating margin）；以微弱差距领先或获胜（win by a narrow margin）。",
        desc: "The profit margin rose this year."
    },
    {
        word: "mark",
        pos: "動/名",
        ipa: "/mɑːrk/",
        cn: "标志着，纪念；标价；显著的（marked）；记号，痕迹",
        jp: "記念する、示す；価格をつける；目印、基準",
        family: "marked / markedly / marker",
        tips: "企业庆典与活动高频词：mark an anniversary / milestone（庆祝周年/标志里程碑）；派生形容词 marked 意为“显著的”（a marked improvement / increase）。",
        desc: "The event will mark our anniversary."
    },
    {
        word: "market",
        pos: "動/名",
        ipa: "/ˈmɑːrkɪt/",
        cn: "营销，推销，推向市场；市场",
        jp: "（商品を）市場に出す、売り込む；市場",
        family: "marketing / marketable / marketplace",
        tips: "作动词为托业高频熟词生义：指将新产品进行商业推广宣传（market the new software to small businesses）；作名词常考 target market（目标市场）。",
        desc: "We plan to market the product overseas."
    },
    {
        word: "meet",
        pos: "動",
        ipa: "/miːt/",
        cn: "满足，符合（要求/标准）；赶上（截止日）；会面",
        jp: "（要求・基準を）満たす；（納期に）間に合わせる；会う",
        family: "meeting",
        tips: "阅读与听力核心搭配：meet demands / needs / requirements / specifications（满足需求/符合规格）；meet the deadline（赶上最后截止期限）。",
        desc: "The product failed to meet our standards."
    },
    {
        word: "minute",
        pos: "名/形",
        ipa: "/ˈmɪnɪt/ (n.), /maɪˈnuːt/ (adj.)",
        cn: "会议纪要（复数）；分钟；微小的，细致的",
        jp: "（会議の）議事録；分；微小な、綿密な",
        family: "minutes / minutely",
        tips: "复数 minutes 指“会议纪要”（distribute the meeting minutes / take the minutes）；形容词读音为 /maɪˈnuːt/，表示“极微小的/极其详细的”（in minute detail）。",
        desc: "The secretary will take the minutes."
    },
    {
        word: "order",
        pos: "名/動",
        ipa: "/ˈɔːrdər/",
        cn: "运转状态；顺序；订单；订购；要求",
        jp: "（正常な）状態、秩序；順序；注文；注文する",
        family: "orderly / ordered / ordering",
        tips: "设施维护高频固定短语：in working order（运转良好/处于正常工作状态）；out of order（发生故障）；商业采购考 place an order for（下订单订购）。",
        desc: "The machine is in good working order."
    },
    {
        word: "otherwise",
        pos: "副/形",
        ipa: "/ˈʌðərwaɪz/",
        cn: "否则，不然；除此以外；在其他方面；不同地",
        jp: "さもなければ；別の方法で；その他の点では",
        family: "other",
        tips: "三大核心语法考点：1. unless otherwise noted / instructed / stated（除非另有说明/指示）；2. 位于句中表“在其他方面”（an otherwise flawless performance）；3. 条件句连接词表“否则”。",
        desc: "Arrive early; otherwise, you will miss it."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "lower",
        category: "简单",
        stem: "The operations director implemented automated software to ________ operational expenses across all facilities.",
        options: ["lower", "lowering", "manage", "market"],
        correct: "lower",
        explanations: {
            guide: "动词不定式结构。to 后面需要接动词原形，与后面的宾语 operational expenses 构成动宾搭配，表达“降低/下调”营运成本，选 lower。",
            family: "lower (v.降低/adj.较低的) | lowering (动名词) | manage (v.管理/设法) | market (v.营销)。",
            details: "to lower expenses 意为降低开支。lowering 为动名词或分词，不能跟在不定式符号 to 后面充当核心谓语动词原形。",
            cn: "运营总监部署了自动化软件，以降低所有工厂设施的运营成本。",
            jp: "業務担当ディレクターは、すべての施設で運用経費を削減する（lower）ために自動化ソフトウェアを導入しました。"
        }
    },
    {
        id: 2,
        target: "manage",
        category: "简单",
        stem: "Ms. Delgado was promoted last month to ________ the newly established European logistics team.",
        options: ["manage", "management", "meet", "order"],
        correct: "manage",
        explanations: {
            guide: "动词不定式表示目的。was promoted to 后面接动词原形，manage the team 意为“领导/管理团队”，选动词 manage。",
            family: "manage (v.管理/经营) | management (n.管理层/管理) | meet (v.满足) | order (v.订购/n.订单)。",
            details: "promoted to manage the team 意为被晋升去管理该团队。management 是名词，无法充当不定式中带宾语的动词原形。",
            cn: "德尔加多女士上个月获得晋升，负责管理新成立的欧洲物流团队。",
            jp: "デルガド氏は先月、新設されたヨーロッパ物流チームを管理する（manage）ために昇進しました。"
        }
    },
    {
        id: 3,
        target: "margin",
        category: "简单",
        stem: "Increased manufacturing efficiency contributed to a higher profit ________ for the fourth fiscal quarter.",
        options: ["margin", "marginal", "makeup", "mark"],
        correct: "margin",
        explanations: {
            guide: "商业财务核心复合名词搭配。profit margin 是托业财报与经营业绩最高频的专属专有名词，意为“利润率”，选名词 margin。",
            family: "margin (n.利润/差额) | marginal (adj.微小的) | makeup (n.构成) | mark (n.记号)。",
            details: "profit margin 指利润率。marginal 是形容词（微小的），不能直接被形容词 higher 修饰作介词 for 前的名词中心词。",
            cn: "生产效率的提高促成了第四财政季度更高的利润率。",
            jp: "製造効率の向上が、第4会計四半期のより高い利益率（profit margin）に貢献しました。"
        }
    },
    {
        id: 4,
        target: "market",
        category: "简单",
        stem: "The advertising agency plans to ________ the innovative electric bicycle primarily to urban commuters.",
        options: ["market", "marketing", "minute", "otherwise"],
        correct: "market",
        explanations: {
            guide: "动词不定式与商业熟词生义。plans to 后面接动词原形，market sth to sb 意为“向某消费群体营销/推广某产品”，选 market。",
            family: "market (v.营销/推销/n.市场) | marketing (n.营销) | minute (n.会议纪要) | otherwise (adv.否则)。",
            details: "market the bicycle to commuters 指向通勤人群推广自行车。marketing 是名词或分词，不能直接放在不定式 to 后面作动词原形。",
            cn: "该广告公司计划主要面向城市通勤群体营销这款创新的电动自行车。",
            jp: "その広告代理店は、革新的な電動自転車を主に都市部の通勤者に向けて売り込む（market）ことを計画しています。"
        }
    },
    {
        id: 5,
        target: "meet",
        category: "简单",
        stem: "All suppliers must strictly adhere to production schedules to ________ the tight shipment deadline.",
        options: ["meet", "meeting", "lower", "order"],
        correct: "meet",
        explanations: {
            guide: "动词不定式与高频动宾搭配。to 后面接动词原形表目的，meet the deadline 属于托业最高频商务短语，意为“赶上截止日期”，选 meet。",
            family: "meet (v.赶上/满足/会面) | meeting (n.会议) | lower (v.降低) | order (v.订购)。",
            details: "meet the deadline 指在截止日期前完成。meeting 是动名词或名词（会议），不能在不定式符号 to 后充当动词原形。",
            cn: "所有供应商必须严格遵守生产时间表，以赶上紧迫的发货截止日期。",
            jp: "すべてのサプライヤーは、厳しい出荷期限に間に合わせる（meet）ために、製造スケジュールを厳格に順守しなければなりません。"
        }
    },
    {
        id: 6,
        target: "order",
        category: "简单",
        stem: "Customers who place an online ________ before 3:00 PM are eligible for free same-day shipping.",
        options: ["order", "ordered", "margin", "mark"],
        correct: "order",
        explanations: {
            guide: "动宾固定搭配。place an order 是电商采购与日常消费场景中最常用的短语，意为“下订单”，选名词 order。",
            family: "order (n.订单/秩序/v.订购) | ordered (adj.有序的) | margin (n.利润) | mark (n.标志)。",
            details: "place an order for sth 属于固定表达。ordered 是过去分词，不能在不定冠词 an 和形容词 online 后面充当名词中心语。",
            cn: "在下午 3:00 之前在网上提交订单的客户有资格享受免费当天发货服务。",
            jp: "午後3時前にオンライン注文（order）を出した顧客は、当日の無料配送を利用する資格があります。"
        }
    },
    {
        id: 7,
        target: "makeup",
        category: "中等",
        stem: "The corporate governance report analyzed the demographic ________ of the executive board of directors.",
        options: ["makeup", "make up", "manage", "market"],
        correct: "makeup",
        explanations: {
            guide: "复合名词熟词生义考点。the demographic ________ of 结构中，形容词 demographic（人口统计特征的）修饰名词，makeup 意为“构成/人员组成结构”，选 makeup。",
            family: "makeup (n.构成/组成/结构) | make up (动词短语) | manage (v.管理) | market (n.市场)。",
            details: "demographic makeup 指董事会的人员构成结构（性别、年龄、背景等）。make up 是动词词组，不能在此处作被形容词修饰的名词核心词。",
            cn: "企业管治报告分析了执行董事会的人员构成结构。",
            jp: "コーポレートガバナンス報告書は、執行取締役会の人口統計学的な構成（makeup）を分析しました。"
        }
    },
    {
        id: 8,
        target: "manage",
        category: "中等",
        stem: "Despite severe supply chain disruptions, the procurement manager ________ to secure sufficient raw materials.",
        options: ["managed", "managing", "marked", "ordered"],
        correct: "managed",
        explanations: {
            guide: "固定句型搭配与一般过去时态。manage to do sth 意为“设法成功完成某事”，句子缺少核心谓语动词，根据语境选用过去式 managed。",
            family: "managed (v-ed过去式/设法做到) | managing (现在分词) | marked (adj.显著的) | ordered (v-ed订购)。",
            details: "managed to secure 意为设法确保了原材料供给。managing 是分词，缺少助动词无法单独构成句子的完整谓语。",
            cn: "尽管供应链遭受严重中断，采购经理依然设法确保了充足的原材料供应。",
            jp: "深刻なサプライチェーンの混乱にもかかわらず、調達マネージャーは何とか十分な原材料を確保することに成功し（managed）ました。"
        }
    },
    {
        id: 9,
        target: "mark",
        category: "中等",
        stem: "Tonight’s formal reception will ________ the twentieth anniversary of the software company's founding.",
        options: ["mark", "marker", "lower", "meet"],
        correct: "mark",
        explanations: {
            guide: "情态动词后的动词原形与商务庆典考点。will 后面接动词原形，mark the anniversary 是托业公关活动的高频搭配，意为“纪念/标志着……周年”，选 mark。",
            family: "mark (v.标志着/纪念/n.记号) | marker (n.标识物/记号笔) | lower (v.降低) | meet (v.满足)。",
            details: "mark the twentieth anniversary 意为庆祝成立二十周年。marker 是名词，不能紧跟在情态动词 will 之后充当谓语动词。",
            cn: "今晚的正式招待会将庆祝该软件公司成立二十周年。",
            jp: "今夜の公式レセプションは、そのソフトウェア企業の設立20周年を記念する（mark）ものとなります。"
        }
    },
    {
        id: 10,
        target: "minute",
        category: "中等",
        stem: "The executive assistant distributed the official ________ of yesterday's shareholders' meeting to all board members.",
        options: ["minutes", "minute", "margins", "orders"],
        correct: "minutes",
        explanations: {
            guide: "商务办公专属名词复数用法。the official ________ of the meeting 结构中，表示会议的“正式会议纪要”，必须使用复数形式 minutes，选 minutes。",
            family: "minutes (n.会议纪要/复数) | minute (n.分钟/单数) | margins (n.利润/差额) | orders (n.订单)。",
            details: "meeting minutes 为固定商务术语，指会议记录，固定用复数。minute 单数通常指一分钟时间，与会议正式记录语境不符。",
            cn: "行政助理向所有董事会成员分发了昨天股东大会的正式会议纪要。",
            jp: "役員秘書は、昨日の株主総会の公式議事録（minutes）をすべての取締役会メンバーに配布しました。"
        }
    },
    {
        id: 11,
        target: "otherwise",
        category: "中等",
        stem: "Unless ________ instructed by the facility supervisor, all contract workers must wear safety helmets in the construction zone.",
        options: ["otherwise", "other", "ordered", "managed"],
        correct: "otherwise",
        explanations: {
            guide: "状语从句省略结构与副词固定搭配。unless otherwise + 过去分词 是托业规章制度中最高频的句型，意为“除非另有……”，选副词 otherwise。",
            family: "otherwise (adv.另行/除此以外/否则) | other (adj.其他的) | ordered (adj.有序的) | managed (v-ed管理)。",
            details: "unless otherwise instructed 是标准公文套话，相当于 unless they are instructed otherwise。other 是形容词，不能在此修饰过去分词 instructed。",
            cn: "除非设施主管另有指示，否则所有合同工在施工区域内都必须佩戴安全头盔。",
            jp: "施設管理者から別の指示がない限り（Unless otherwise instructed）、すべての契約労働者は建設区域で安全ヘルメットを着用しなければなりません。"
        }
    },
    {
        id: 12,
        target: "order",
        category: "中等",
        stem: "Technicians conducted a thorough inspection to ensure that the backup generators were in proper working ________.",
        options: ["order", "orderly", "makeup", "margin"],
        correct: "order",
        explanations: {
            guide: "固定介词短语熟词生义。in working order 是设备运行与物业工程的核心固定词组，意为“处于正常工作状态/运转良好”，选名词 order。",
            family: "order (n.运转状态/秩序/订单) | orderly (adj.整齐的) | makeup (n.构成) | margin (n.利润)。",
            details: "in proper working order 表示机器运转正常良好。orderly 是形容词（有秩序的），不能在介词短语中充当中心名词。",
            cn: "技术人员进行了全面检查，以确保备用发电机处于良好的正常运行状态。",
            jp: "技術者は、予備発電機が適切に作動する状態（in proper working order）にあることを確認するために徹底的な検査を実施しました。"
        }
    },
    {
        id: 13,
        target: "lower",
        category: "困难",
        stem: "Renewable energy providers are now offering commercial electricity tariffs at a significantly ________ rate than traditional utilities.",
        options: ["lower", "lowering", "marginal", "otherwise"],
        correct: "lower",
        explanations: {
            guide: "形容词比较级与介词搭配。at a significantly ________ rate than 结构中，副词 significantly 修饰形容词比较级，且与句中的 than 呼应，选 lower。",
            family: "lower (adj.较低的/v.降低) | lowering (动名词) | marginal (adj.微小的) | otherwise (adv.在其他方面)。",
            details: "at a lower rate than... 意为以比……更低的费率。lowering 是分词，不能与 than 构成比较级句型。",
            cn: "可再生能源供应商目前向工商业提供的电费费率明显低于传统公共事业公用事业单位。",
            jp: "再生可能エネルギーの供給事業者は現在、従来の公益事業会社よりも大幅に低い（lower）料金で商業用電気プランを提供しています。"
        }
    },
    {
        id: 14,
        target: "margin",
        category: "困难",
        stem: "The revised environmental resolution passed by a narrow ________ of only two votes during the general assembly.",
        options: ["margin", "marginally", "minute", "market"],
        correct: "margin",
        explanations: {
            guide: "介词固定短语与熟词生义。by a narrow margin 是托业政治决策与公司表决的高阶固定短语，意为“以微弱差距/险胜”，选名词 margin。",
            family: "margin (n.差额/幅度/利润) | marginally (adv.微小地) | minute (adj.细微的) | market (n.市场)。",
            details: "passed by a narrow margin of two votes 指以微弱的仅两票优势通过。marginally 为副词，不能被不定冠词 a 和形容词 narrow 修饰充当介词宾语。",
            cn: "在大会期间，修订后的环境决议仅以两票的微弱优势勉强获得通过。",
            jp: "改定された環境決議案は、総会中にわずか2票の僅差（narrow margin）で可決されました。"
        }
    },
    {
        id: 15,
        target: "meet",
        category: "困难",
        stem: "The newly designed medical implants failed to ________ the stringent safety criteria mandated by government health regulators.",
        options: ["meet", "meeting", "mark", "manage"],
        correct: "meet",
        explanations: {
            guide: "动词不定式与品质合规专属搭配。failed to 后面必须接动词原形，meet safety criteria 意为“符合安全标准/达到准则”，选 meet。",
            family: "meet (v.符合/达到/会面) | meeting (n.会议) | mark (v.纪念) | manage (v.管理)。",
            details: "meet criteria/standards 属于产品质量认证核心表达。meeting 是动名词，不能在 failed to 结构中充当动词原形。",
            cn: "新设计的医疗植入物未能达到政府卫生监管机构所规定的严格安全标准。",
            jp: "新しく設計された医療用インプラントは、政府の保健規制当局によって義務付けられた厳格な安全基準を満たす（meet）ことができませんでした。"
        }
    },
    {
        id: 16,
        target: "minute",
        category: "困难",
        stem: "The senior quality assurance auditor examined the manufacturing equipment in ________ detail to detect micro-fractures.",
        options: ["minute", "minutely", "marked", "ordered"],
        correct: "minute",
        explanations: {
            guide: "形容词高阶读音与固定短语搭配。in ________ detail 结构中需要形容词修饰不可数名词 detail，in minute detail（读音 /maɪˈnuːt/）意为“极其详尽地/细致入微地”，选 minute。",
            family: "minute (adj.极其微小的/极其细致的/n.分钟) | minutely (adv.详细地) | marked (adj.显著的) | ordered (adj.有序的)。",
            details: "in minute detail 属于托业高难度成语性短语，等同于 thoroughly / in great detail。minutely 是副词，不能修饰名词 detail。",
            cn: "高级质量保证审计员极其细致地检查了制造设备，以发现微小的裂缝。",
            jp: "上級品質保証監査官は、微小な亀裂を検出するために、製造設備を極めて詳細（minute detail）に調査しました。"
        }
    },
    {
        id: 17,
        target: "otherwise",
        category: "困难",
        stem: "A minor projector malfunction during the introduction was the only flaw in an ________ exceptional conference presentation.",
        options: ["otherwise", "other", "orderly", "marginal"],
        correct: "otherwise",
        explanations: {
            guide: "副词修饰形容词高阶用法。an ________ exceptional presentation 结构中，空格位于不定冠词 an 与形容词 exceptional 之间，otherwise 作副词意为“除此以外/在其他方面”，选 otherwise。",
            family: "otherwise (adv.在其他方面/否则) | other (adj.其他的) | orderly (adj.有序的) | marginal (adj.微小的)。",
            details: "an otherwise exceptional presentation 意为“除这处小瑕疵外在其他方面都极为精彩的演讲”。other 是形容词，不能作为程度状语副词来修饰形容词 exceptional。",
            cn: "介绍环节中投影仪的轻微故障，是一场除此以外极其出色的会议演讲中唯一的瑕疵。",
            jp: "冒頭でのプロジェクターの小さな不具合は、それ以外は（otherwise）極めて優れた会議プレゼンテーションにおける唯一の欠点でした。"
        }
    },
    {
        id: 18,
        target: "mark",
        category: "困难",
        stem: "Consumer confidence experienced a ________ improvement following the central bank's announcement regarding stable interest rates.",
        options: ["marked", "mark", "lower", "making"],
        correct: "marked",
        explanations: {
            guide: "分词派生形容词修饰名词。a ________ improvement 结构中，不定冠词 a 与名词 improvement 之间需要形容词，marked improvement 为经济新闻专属高频搭配，意为“显著的改善”，选 marked。",
            family: "marked (adj.显著的/明显的) | mark (v.标志/n.记号) | lower (adj.较低的) | making (动名词)。",
            details: "a marked improvement / increase 属于托业高阶形容词考点。mark 是动词或名词原形，无法直接修饰名词 improvement。",
            cn: "在央行公布关于维持利率稳定的公告后，消费者信心迎来了显著的改善。",
            jp: "金利安定に関する中央銀行の発表を受けて、消費者信頼感は著しい（marked）改善を示しました。"
        }
    }
];