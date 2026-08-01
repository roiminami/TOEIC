// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag61-70 Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "symposium",
        pos: "名",
        ipa: "/sɪmˈpoʊziəm/",
        cn: "专题研讨会，座谈会",
        jp: "シンポジウム、討論会、学術会議",
        family: "symposiums / symposia",
        tips: "商务学术会议与行业高峰论坛高频词。托业常见搭配：annual symposium（年度研讨会）、hold a symposium（举办研讨会）、keynote speech at the symposium（研讨会上的主旨演讲）。复数形式包含 symposia 与 symposiums。",
        desc: "The symposium starts tomorrow."
    },
    {
        word: "consequently",
        pos: "副",
        ipa: "/ˈkɑːnsəkwentli/",
        cn: "因此，结果",
        jp: "したがって、その結果として",
        family: "consequence / consequent",
        tips: "阅读理解与逻辑连接词核心考点。常作为句首副词或分号后引导结果句（等同于 as a result / therefore）。注意区分名词形式 consequence（后果，结果）。",
        desc: "Consequently, the sales increased."
    },
    {
        word: "comparable",
        pos: "形",
        ipa: "/ˈkɑːmpərəbl/",
        cn: "可比较的，比得上的，相当的",
        jp: "比較可能な、同等の、匹敵する",
        family: "compare / comparison / comparatively",
        tips: "产品对比与财报分析极高频形容词。常接介词 to 或 with：be comparable to/with...（与……相当/比得上……）。注意重音在第一个音节，派生副词 comparatively 表示“比较地，相对地”。",
        desc: "The two items are comparable."
    },
    {
        word: "admission",
        pos: "名",
        ipa: "/ədˈmɪʃn/",
        cn: "准许进入，入场费，承认",
        jp: "入場、入場料、入会許可",
        family: "admit / admitted / admissible",
        tips: "展览、活动门票与机构准入高频词。核心搭配：admission fee/ticket（门票/入场费）、free admission（免费入场）、gain admission to（获准进入）。来自及物动词 admit。",
        desc: "Admission is free today."
    },
    {
        word: "company retreat",
        pos: "名",
        ipa: "/ˈkʌmpəni rɪˈtriːt/",
        cn: "公司团建休假，员工研讨休假",
        jp: "社員研修旅行、社内リトリート",
        family: "retreats",
        tips: "行政通知与 HR 内部公告高频复合名词。指公司组织员工前往度假村等地的“团建研讨休假”。常考搭配：annual company retreat（年度公司团建活动）。",
        desc: "We joined the company retreat."
    },
    {
        word: "council",
        pos: "名",
        ipa: "/ˈkaʊnsl/",
        cn: "委员会，理事会，市议会",
        jp: "評議会、理事会、市議会",
        family: "councilor / councilmember",
        tips: "行政公共事务与公司决策层高频词。常见短语：city council（市议会）、executive council（执行委员会）、council member（委员会成员）。注意与 counsel（咨询，法律顾问）区分。",
        desc: "The council held a meeting."
    },
    {
        word: "subsidiary",
        pos: "名/形",
        ipa: "/səbˈsɪdieri/",
        cn: "子公司，附属机构；辅助的",
        jp: "子会社、附属物；補助的な",
        family: "subsidiaries / subsidize",
        tips: "跨国企业架构与商业新闻必考词。常见表达：wholly owned subsidiary（全资子公司）、overseas subsidiary（海外子公司）。注意与动词 subsidize（给……资助/补助）的词性辨析。",
        desc: "It is an overseas subsidiary."
    },
    {
        word: "confirmed",
        pos: "形/動",
        ipa: "/kənˈfɜːrmd/",
        cn: "确定的，已确认的；确认（过去式）",
        jp: "確認された、確定した",
        family: "confirm / confirmation",
        tips: "商务预约、行程安排与交易确认高频词。常用于修饰 reservation（确定的预订）、appointment（确定的预约）或作表语：The status is confirmed. 名词形式 confirmation（确认信）是托业听力与阅读大户。",
        desc: "The reservation is confirmed."
    },
    {
        word: "crates",
        pos: "名",
        ipa: "/kreɪts/",
        cn: "木箱，条板箱",
        jp: "木箱、クレート、梱包箱",
        family: "crate",
        tips: "听力 Part 1（图片描述题）与物流运输场景高频复数名词。指装载货物的大型木箱。常见场景：wooden crates（木箱）、crates stacked in the warehouse（堆放在仓库里的木箱）。",
        desc: "The wooden crates are full."
    },
    {
        word: "discretionary",
        pos: "形",
        ipa: "/dɪˈskreʃəneri/",
        cn: "自行决定的，自由裁量的，可支配的",
        jp: "自由裁量の、任意の、可処分な",
        family: "discretion / discreet",
        tips: "财务预算、高管授权与员工奖金高频形容词。核心搭配：discretionary bonus（可支配/酌情发放的奖金）、discretionary income/funds（可支配收入/资金）。名词形式为 discretion（裁量权，谨慎）。",
        desc: "It is a discretionary bonus."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "admission",
        category: "简单",
        stem: "The price of general ________ to the museum has been increased to fifteen dollars per person.",
        options: ["admission", "symposium", "crates", "subsidiary"],
        correct: "admission",
        explanations: {
            guide: "名词词义辨析。由形容词 general（通用的）修饰，结合后半句“到博物馆……的价格已上涨至每人15美元”，此处指博物馆的“入场/门票”，选择 admission。",
            family: "admission (n.准许进入/门票) | symposium (n.专题研讨会) | crates (n.木箱) | subsidiary (n.子公司)。",
            details: "general admission 意为“普通门票/通用入场”，属于展馆与演出场景的高频固定表达。",
            cn: "该博物馆的普通门票价格已上涨至每人15美元。",
            jp: "美術館の一般入場料（admission）は1人15ドルに引き上げられました。"
        }
    },
    {
        id: 2,
        target: "confirmed",
        category: "简单",
        stem: "The travel agent called to ensure that our hotel reservation had been ________.",
        options: ["confirmed", "consequently", "comparable", "discretionary"],
        correct: "confirmed",
        explanations: {
            guide: "动词过去分词作表语/完成被动语态。空格在助动词 had been 之后，需要填入动词过去分词，表达酒店预订已经“被确认”，选择 confirmed。",
            family: "confirmed (adj./v.已确认的) | consequently (adv.因此) | comparable (adj.可比较的) | discretionary (adj.自行决定的)。",
            details: "hotel reservation has been confirmed（酒店预订已被确认）是行程确认中的高频商务搭配。",
            cn: "旅行社打来电话，确保我们的酒店预订已经得到确认。",
            jp: "旅行代理店から、ホテルの予約が確認された（confirmed）かどうかを確認する電話がありました。"
        }
    },
    {
        id: 3,
        target: "company retreat",
        category: "简单",
        stem: "All department staff are invited to attend the annual ________ at the lakeside resort next weekend.",
        options: ["company retreat", "council", "subsidiary", "crates"],
        correct: "company retreat",
        explanations: {
            guide: "名词短语辨析。空格位于定冠词 the 和形容词 annual（年度的）之后，结合后文地点“湖边度假村”，可知是指公司的“团建休假/员工研讨活动”，选择 company retreat。",
            family: "company retreat (n.公司团建休假) | council (n.委员会) | subsidiary (n.子公司) | crates (n.木箱)。",
            details: "annual company retreat 属于 HR 内部通知中的核心固定表达，指一年一度的员工团建或外聘研讨会。",
            cn: "邀请所有部门员工参加下周末在湖边度假村举行的一年一度的公司团建休假活动。",
            jp: "すべての部門のスタッフは、来週末に湖畔のリゾートで開催される年次社員研修旅行（company retreat）に招待されています。"
        }
    },
    {
        id: 4,
        target: "crates",
        category: "简单",
        stem: "Warehouse workers loaded several heavy wooden ________ onto the delivery truck this morning.",
        options: ["crates", "symposium", "admission", "consequently"],
        correct: "crates",
        explanations: {
            guide: "名词词义辨析。空格位于形容词 heavy wooden（沉重木制的）之后，充当动词 loaded（装载）的宾语，结合装上“卡车”的场景，选 crates（木箱）。",
            family: "crates (n.木箱/复数) | symposium (n.研讨会) | admission (n.门票) | consequently (adv.因此)。",
            details: "heavy wooden crates（沉重的木质条板箱）是物流与仓储场景中的典型名词表达。",
            cn: "今天早晨，仓库工人将几个沉重的木箱搬上了运输卡车。",
            jp: "今朝、倉庫の作業員たちはいくつかの重い木箱（crates）を配送トラックに積み込みました。"
        }
    },
    {
        id: 5,
        target: "symposium",
        category: "简单",
        stem: "Dr. Miller will deliver the opening speech at the upcoming technology ________ next month.",
        options: ["symposium", "council", "crates", "subsidiary"],
        correct: "symposium",
        explanations: {
            guide: "名词词义辨析。空格在形容词 upcoming（即将到来的）和名词 technology（科技）之后，结合“发表开幕演讲”，可知是指“科技研讨会”，选 symposium。",
            family: "symposium (n.专题研讨会) | council (n.委员会) | crates (n.木箱) | subsidiary (n.子公司)。",
            details: "technology symposium 意为“科技研讨会”，后接 deliver a speech（发表演讲），逻辑高度吻合。",
            cn: "米勒博士将在下个月即将举行的科技研讨会上发表开幕演讲。",
            jp: "ミラー博士は、来月開催される技術シンポジウム（symposium）で開会スピーチを行う予定です。"
        }
    },
    {
        id: 6,
        target: "consequently",
        category: "简单",
        stem: "The heavy rain delayed the shipment of raw materials; ________, factory operations were put on hold.",
        options: ["consequently", "comparable", "discretionary", "confirmed"],
        correct: "consequently",
        explanations: {
            guide: "连接副词辨析。空格在分号之后、逗号之前，用于连接前后两个表示因果关系的句子。表达“因此/结果”，选连接副词 consequently。",
            family: "consequently (adv.因此) | comparable (adj.可比较的) | discretionary (adj.自行决定的) | confirmed (adj.确定的)。",
            details: "consequently 作句首或分号后的连接状语，等同于 as a result，用于表明由于原材料延迟导致工厂暂停的因果逻辑。",
            cn: "大雨推迟了原材料的运输；因此，工厂的运转被暂停了。",
            jp: "大雨のため原材料の輸送が遅れました。その結果（consequently）、工場の稼働は中断されました。"
        }
    },
    {
        id: 7,
        target: "council",
        category: "中等",
        stem: "The local city ________ unanimously approved the proposal to build a new public library.",
        options: ["council", "subsidiary", "symposium", "admission"],
        correct: "council",
        explanations: {
            guide: "复合名词与主语辨析。空格与修饰词 local city 组合充当主语，结合谓语动词 approved（批准）与“建造新公共图书馆”的行政决策，选 council（议会/委员会）。",
            family: "council (n.委员会/议会) | subsidiary (n.子公司) | symposium (n.研讨会) | admission (n.准入)。",
            details: "city council 意为“市议会”，是托业公共事务与地块规划场景中的绝对高频表达。",
            cn: "当地市议会一致批准了建造新公共图书馆的提案。",
            jp: "地元の市議会（council）は、新しい市立図書館を建設する提案を満場一致で承認しました。"
        }
    },
    {
        id: 8,
        target: "comparable",
        category: "中等",
        stem: "The quality of our new laptop screen is fully ________ to that of top market competitors.",
        options: ["comparable", "consequently", "discretionary", "confirmed"],
        correct: "comparable",
        explanations: {
            guide: "固定搭配与形容词辨析。空格位于副词 fully 之后作表语，且后接介词 to，构成结构 be comparable to...（与……相当/比得上……），选 comparable。",
            family: "comparable (adj.比得上的) | consequently (adv.因此) | discretionary (adj.可支配的) | confirmed (adj.确定的)。",
            details: "be comparable to sth 表示“在质量/性能上与某物相当”。注意 comparison 是名词，无法在此作表语接 to。",
            cn: "我们新款笔记本电脑屏幕的质量完全可以媲美市场上顶尖的竞争对手。",
            jp: "当社の新しいノートパソコンの画面品質は、市場のトップ競合他社のものと十分に匹敵（comparable）します。"
        }
    },
    {
        id: 9,
        target: "subsidiary",
        category: "中等",
        stem: "The European parent company established a fully owned ________ in Tokyo to manage East Asian distribution.",
        options: ["subsidiary", "council", "company retreat", "crates"],
        correct: "subsidiary",
        explanations: {
            guide: "名词词义辨析。由形容词组 fully owned（全资的）修饰，作 established 的宾语。结合“母公司（parent company）在东京建立”的语境，选 subsidiary（子公司）。",
            family: "subsidiary (n.子公司) | council (n.理事会) | company retreat (n.团建) | crates (n.木箱)。",
            details: "a fully owned subsidiary（全资子公司）是商业架构与跨国拓展中的标准高阶行话。",
            cn: "这家欧洲母公司在东京成立了一家全资子公司，以管理东亚地区的分销业务。",
            jp: "欧州の親会社は、東アジアでの配送を管理するため、東京に完全子会社（subsidiary）を設立しました。"
        }
    },
    {
        id: 10,
        target: "discretionary",
        category: "中等",
        stem: "Department managers were given a ________ budget to reward high-performing team members with bonuses.",
        options: ["discretionary", "comparable", "confirmed", "admission"],
        correct: "discretionary",
        explanations: {
            guide: "形容词修饰名词。空格修饰名词 budget（预算），结合后半句“用奖金奖励高绩效团队成员”，说明这笔预算是经理可“自行决定/自主支配的”，选 discretionary。",
            family: "discretionary (adj.自行决定的) | comparable (adj.可比的) | confirmed (adj.确认的) | admission (n.门票)。",
            details: "discretionary budget 意为“自主支配预算/自由裁量预算”，属于企业财务管理高频表达。",
            cn: "部门经理获得了一笔可自主支配的预算，用于向高绩效的团队成员发放奖金。",
            jp: "部門マネージャーには、優秀なチームメンバーにボーナスを支給するための自由裁量（discretionary）予算が与えられました。"
        }
    },
    {
        id: 11,
        target: "confirmed",
        category: "中等",
        stem: "We will process the order immediately once we receive written ________ from the client.",
        options: ["confirmation", "confirmed", "consequently", "symposium"],
        correct: "confirmation",
        explanations: {
            guide: "名词派生词辨析。空格位于形容词 written（书面的）之后，作 receive 的宾语，需要填入名词形式 confirmation（确认信/确认件）。",
            family: "confirmation (n.确认/确认信) | confirmed (adj.确定的) | consequently (adv.因此) | symposium (n.研讨会)。",
            details: "written confirmation（书面确认）是商务采购与订单履约中的核心搭配。选项 confirmed 是形容词或动词，不能作名词宾语。",
            cn: "一旦收到客户的书面确认，我们将立即处理订单。",
            jp: "顧客からの書面による確認（confirmation）を受け取り次第、直ちに注文を処理いたします。"
        }
    },
    {
        id: 12,
        target: "comparable",
        category: "中等",
        stem: "Sales figures for the third quarter were ________ higher than those recorded during the same period last year.",
        options: ["comparatively", "comparable", "comparison", "consequently"],
        correct: "comparatively",
        explanations: {
            guide: "副词修饰比较级形容词。空格位于连系动词 were 之后，比较级形容词 higher 之前，需要填入副词作状语，表达“相对地/比较起来地”，选 comparatively。",
            family: "comparatively (adv.比较地) | comparable (adj.可比较的) | comparison (n.比较) | consequently (adv.因此)。",
            details: "comparatively higher 意为“相对更高”。comparatively 用于修饰形容词比较级，比普通副词更具学术与商业说服力。",
            cn: "第三季度的销售数据比去年同期记录的数据相对更高。",
            jp: "第3四半期の売上数字は、前年同期に記録された数字と比較して（comparatively）高いものでした。"
        }
    },
    {
        id: 13,
        target: "admission",
        category: "困难",
        stem: "The senior accountant readily ________ that an oversight occurred during the tax audit process.",
        options: ["admitted", "admission", "admissible", "discretionary"],
        correct: "admitted",
        explanations: {
            guide: "动词派生及时态辨析。空格位于副词 readily（坦然地/爽快地）之后，作为主语 The senior accountant 的谓语动词。表达“承认”，选动词过去式 admitted。",
            family: "admitted (v.承认/过去式) | admission (n.准许进入/承认) | admissible (adj.可采纳的) | discretionary (adj.自行决定的)。",
            details: "admit that... 引导宾语从句表示“承认……”。admission 是名词，无法在句中作谓语动词。",
            cn: "资深会计师坦然承认在税务审计过程中出现了疏忽。",
            jp: "主任会計士は、税務調査の過程で過失があったことをあっさりと認めました（admitted）。"
        }
    },
    {
        id: 14,
        target: "subsidiary",
        category: "困难",
        stem: "The regional government offered to ________ public transit operators to keep ticket prices low.",
        options: ["subsidize", "subsidiary", "council", "company retreat"],
        correct: "subsidize",
        explanations: {
            guide: "动词派生与不定式结构。空格跟在不定式符号 to 之后，需要填入动词原形。表达给公共交通运营商“提供补贴”，选动词 subsidize。",
            family: "subsidize (v.资助/补贴) | subsidiary (n.子公司) | council (n.议会) | company retreat (n.团建)。",
            details: "subsidize 是名词 subsidiary（子公司）和 subsidy（补贴）的动词同源派生形式，意为“给……发放资助/补贴”。",
            cn: "地方政府提出向公共交通运营商提供补贴，以保持低票价。",
            jp: "地域政府は、チケット価格を低く抑えるために、公共交通事業者に補助金を支給する（subsidize）ことを提案しました。"
        }
    },
    {
        id: 15,
        target: "discretionary",
        category: "困难",
        stem: "Project supervisors have full ________ to reallocate resources based on urgent project needs.",
        options: ["discretion", "discretionary", "consequently", "comparable"],
        correct: "discretion",
        explanations: {
            guide: "名词派生词辨析。空格位于形容词 full（充分的）之后，作及物动词 have 的宾语，需要填入不可数名词 discretion（自主决定权/裁量权）。",
            family: "discretion (n.自由裁量权) | discretionary (adj.自行决定的) | consequently (adv.因此) | comparable (adj.可比的)。",
            details: "have full discretion to do sth 属于高阶商务授权表达，意为“拥有全权自主决定做某事”。discretionary 是形容词，不能直接作 have 的宾语。",
            cn: "项目主管拥有全权决定权，可以根据紧急项目需求重新分配资源。",
            jp: "プロジェクト監督者は、緊急のプロジェクトのニーズに基づいてリソースを再配分する完全な裁量権（discretion）を持っています。"
        }
    },
    {
        id: 16,
        target: "consequently",
        category: "困难",
        stem: "Failing to adhere to strict safety protocols can lead to severe financial ________ for the company.",
        options: ["consequences", "consequently", "consequent", "confirmed"],
        correct: "consequences",
        explanations: {
            guide: "名词派生与复数考点。空格位于形容词 severe financial（严重的财务……）之后，作为介词 to 的宾语，需要填入复数名词 consequences（后果）。",
            family: "consequences (n.后果/复数) | consequently (adv.因此) | consequent (adj.随之发生的) | confirmed (adj.已确认的)。",
            details: "lead to severe financial consequences（导致严重的财务后果）属于企业合规风险管理场景的标准高阶短语。",
            cn: "未能遵循严格的安全协议可能会给公司带来严重的财务后果。",
            jp: "厳格な安全プロトコルに従わない場合、会社に重大な財務的后果（consequences）をもたらす可能性があります。"
        }
    },
    {
        id: 17,
        target: "symposium",
        category: "困难",
        stem: "The academic board will coordinate several regional ________ throughout the upcoming fiscal year.",
        options: ["symposia", "symposium", "crates", "admission"],
        correct: "symposia",
        explanations: {
            guide: "名词不规则复数考点。空格由 several（几个/数个）修饰，作动词 coordinate 的宾语，需要填入复数形式。symposium 的标准学术不规则复数为 symposia。",
            family: "symposia (n.研讨会/复数) | symposium (n.研讨会/单数) | crates (n.木箱) | admission (n.准入)。",
            details: "several 后接可数名词复数。symposium 的复数可写为 symposia（源自希腊/拉丁语不规则复数）或 symposiums，单数形式 symposium 在此处语法不适用。",
            cn: "学术委员会将在即将来临的财政年度内协调举办几次区域性研讨会。",
            jp: "学術委員会は、次の年度を通じていくつかの地域シンポジウム（symposia）を調整する予定です。"
        }
    },
    {
        id: 18,
        target: "council",
        category: "困难",
        stem: "A prominent city ________ met with business executives to discuss urban renewal projects.",
        options: ["councilor", "council", "subsidiary", "company retreat"],
        correct: "councilor",
        explanations: {
            guide: "名词派生指人身份词辨析。空格在不定冠词 A 和形容词 prominent（杰出的）之后，充当句子的主语，且后文指出其动作是 met with executives（与高管会面），需要填入指代人的名词 councilor（市议员/委员）。",
            family: "councilor (n.议员/委员) | council (n.议会/委员会) | subsidiary (n.子公司) | company retreat (n.团建)。",
            details: "city councilor 指“市议会议员”。抽象机构名称 council 无法单独作为人格化主体去与企业高管进行会谈。",
            cn: "一位杰出的市议员与企业高管会面，讨论城市更新项目。",
            jp: "著名な市議会議員（councilor）がビジネス幹部と会谈し、都市再開発プロジェクトについて議論しました。"
        }
    }
];