// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data601-610.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "shelter",
        pos: "名/動",
        ipa: "/ˈʃeltər/",
        cn: "庇护所，收容所；庇护，掩蔽",
        jp: "避難所、保護施設；保護する",
        family: "sheltered / sheltering / shelters",
        tips: "社区公益与设施高频：emergency/animal shelter（紧急避难所/动物收容所），shelter from rain（避雨）。",
        desc: "They built a new shelter."
    },
    {
        word: "corridors",
        pos: "名",
        ipa: "/ˈkɔːrɪdɔːrz/",
        cn: "走廊，通道，主要交通干道（复数）",
        jp: "廊下、通路、主要交通路（複数）",
        family: "corridor / corridors",
        tips: "建筑设施与交通高频：office corridors（办公走廊），congested transit corridors（拥堵的交通走廊）。",
        desc: "Clean all office corridors daily."
    },
    {
        word: "authentic",
        pos: "形",
        ipa: "/ɔːˈθentɪk/",
        cn: "正宗的，真实的，真正的",
        jp: "本物の、正真正銘の、本場の",
        family: "authentically / authenticity / authenticate",
        tips: "餐饮与艺术高频：authentic cuisine/flavor（正宗美食/风味），authentic signature/artwork（真迹签名/真品艺术品）。",
        desc: "They serve authentic local cuisine."
    },
    {
        word: "climactic",
        pos: "形",
        ipa: "/klaɪˈmæktɪk/",
        cn: "高潮的，顶点的",
        jp: "最高潮の、クライマックスの",
        family: "climax / climactically",
        tips: "演出与活动高频：climactic moment/scene/finale（高潮时刻/顶点场面/终曲）。注意与 climatic（气候的）区分。",
        desc: "It reached a climactic moment."
    },
    {
        word: "diploma",
        pos: "名",
        ipa: "/dɪˈploʊmə/",
        cn: "文凭，毕业证书，学位证书",
        jp: "卒業証書、修了証、学位記",
        family: "diplomas / diplomat / diplomatic",
        tips: "教育与招聘高频：high school/college diploma（高中文凭/大学毕业证），earn/receive a diploma（获得文凭）。",
        desc: "She earned a college diploma."
    },
    {
        word: "mortgage",
        pos: "名/動",
        ipa: "/ˈmɔːrɡɪdʒ/",
        cn: "抵押贷款，按揭；抵押",
        jp: "住宅ローン、担保融資；抵当に入れる",
        family: "mortgages / mortgaged / mortgaging",
        tips: "金融与房产高频：apply for a mortgage（申请房贷），mortgage rate/payments（房贷利率/按揭月供）。",
        desc: "He applied for a mortgage."
    },
    {
        word: "demographic",
        pos: "名/形",
        ipa: "/ˌdeməˈɡræfɪk/",
        cn: "特定群体，人口统计数据；人口统计的",
        jp: "特定の層、人口統計（学）の",
        family: "demographics / demography / demographically",
        tips: "市场营销高频：target demographic（目标客群），demographic shifts/trends（人口结构变化/趋势）。",
        desc: "Youth is our target demographic."
    },
    {
        word: "Confronted by",
        pos: "短語/分詞",
        ipa: "/kənˈfrʌntɪd baɪ/",
        cn: "面临，面对，遭遇……（由……所面临）",
        jp: "〜に直面して、〜に直面させられて",
        family: "confront / confrontation / confronting",
        tips: "商务挑战与危机高频：confronted by challenges/competition（面临重重挑战/面临激烈竞争）。",
        desc: "Confronted by risks, they adapted."
    },
    {
        word: "Cartons",
        pos: "名",
        ipa: "/ˈkɑːrtnz/",
        cn: "纸箱，硬纸盒（复数）",
        jp: "段ボール箱、カートン（複数）",
        family: "carton / cardboard",
        tips: "物流与仓储高频：cardboard cartons（硬纸箱），pack goods in cartons（将货物装箱）。",
        desc: "Workers stacked the heavy cartons."
    },
    {
        word: "clockwise",
        pos: "副/形",
        ipa: "/ˈklɑːkwaɪz/",
        cn: "顺时针方向的；顺时针方向地",
        jp: "時計回りの；時計回りに",
        family: "counterclockwise / clock",
        tips: "设备操作与说明书高频：turn the knob clockwise（顺时针旋转旋钮），rotate clockwise（顺时针旋转）。",
        desc: "Turn the dial clockwise now."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "diploma",
        category: "简单",
        stem: "Candidates applying for the entry-level technician position must possess at least a high school ________.",
        options: ["diploma", "shelter", "mortgage", "corridor"],
        correct: "diploma",
        explanations: {
            guide: "招聘学历资格名词考点。high school ________ 属于招聘高频词组，表达“高中文凭/高中毕业证书”，选 diploma。",
            family: "diploma (n.文凭/毕业证) | shelter (n.庇护所) | mortgage (n.按揭贷款) | corridor (n.走廊)。",
            details: "high school diploma 意为高中文凭。shelter（收容所）、mortgage（房贷）均非招聘中所要求的学历证明文件。",
            cn: "申请初级技术员职位的应聘者必须至少拥有高中毕业文凭。",
            jp: "初級技術者職に応募する候補者は、少なくとも高校の卒業証書（diploma）を所持している必要があります。"
        }
    },
    {
        id: 2,
        target: "clockwise",
        category: "简单",
        stem: "To adjust the machine's pressure settings, slowly rotate the control dial in a ________ direction.",
        options: ["clockwise", "authentic", "climactic", "demographic"],
        correct: "clockwise",
        explanations: {
            guide: "机械操作方向形容词。in a ________ direction 结合旋转控制旋钮（rotate the control dial），选 clockwise（顺时针方向的）。",
            family: "clockwise (adj./adv.顺时针方向的) | authentic (adj.正宗的) | climactic (adj.顶点的) | demographic (adj.人口统计的)。",
            details: "in a clockwise direction 意为沿顺时针方向。authentic（正宗的）、climactic（高潮的）无法用来指示机械旋钮旋转方向。",
            cn: "要调整机器的压力设定，请沿顺时针方向缓慢旋转控制旋钮。",
            jp: "機械の圧力設定を調整するには、コントロールダイヤルを時計回り（clockwise）の方向にゆっくり回してください。"
        }
    },
    {
        id: 3,
        target: "authentic",
        category: "简单",
        stem: "The newly opened downtown restaurant is popular for serving ________ regional cuisine prepared with imported spices.",
        options: ["authentic", "clockwise", "climactic", "confronted"],
        correct: "authentic",
        explanations: {
            guide: "餐饮品质修饰形容词。________ regional cuisine 结合采用进口香料烹制地方美食，选 authentic（正宗的/地道的）。",
            family: "authentic (adj.正宗的/真正的) | clockwise (adj.顺时针的) | climactic (adj.高潮的) | confronted (v-ed面临)。",
            details: "authentic regional cuisine 意为正宗地道的地方菜肴。clockwise（顺时针的）无法修饰烹饪美食的纯正风味。",
            cn: "新开业的市中心餐厅因供应采用进口香料烹制的正宗地方美食而广受欢迎。",
            jp: "新しくオープンしたダウンタウンのレストランは、輸入スパイスで調理された本格的な（authentic）郷土料理を提供することで人気があります。"
        }
    },
    {
        id: 4,
        target: "shelter",
        category: "简单",
        stem: "Municipal emergency services opened a temporary ________ to accommodate residents displaced by the coastal storm.",
        options: ["shelter", "diploma", "carton", "corridor"],
        correct: "shelter",
        explanations: {
            guide: "公共救灾设施名词。opened a temporary ________ 结合安置因沿海风暴而流离失所的居民，选 shelter（避难所/庇护所）。",
            family: "shelter (n.庇护所/避难所) | diploma (n.文凭) | carton (n.纸箱) | corridor (n.走廊)。",
            details: "temporary shelter 意为临时避难所。diploma（文凭）、carton（纸箱）均非容纳受灾居民的安置场所。",
            cn: "市政应急部门开设了一处临时避难所，以安置因沿海风暴而流离失所的居民。",
            jp: "市の緊急サービスは、沿岸の嵐によって避難を余儀なくされた住民を収容するための一時的な避難所（shelter）を開設しました。"
        }
    },
    {
        id: 5,
        target: "Cartons",
        category: "简单",
        stem: "Warehouse staff carefully stacked several large cardboard ________ onto the transport pallets.",
        options: ["Cartons", "Mortgages", "Diplomas", "Corridors"],
        correct: "Cartons",
        explanations: {
            guide: "物流包装容器名词。large cardboard ________ 结合在运输托盘上码放，选 Cartons（纸箱/硬纸盒）。",
            family: "Cartons (n.复数纸箱) | Mortgages (n.房贷) | Diplomas (n.文凭) | Corridors (n.走廊)。",
            details: "cardboard cartons 意为硬纸箱/包装箱。Mortgages（房贷）、Diplomas（文凭）均非仓库托盘上堆叠的实物箱体。",
            cn: "仓库员工小心地将几个大型硬纸箱堆叠到运输托盘上。",
            jp: "倉庫スタッフは、いくつかの大きな段ボール箱（Cartons）を輸送パレットの上に慎重に積み上げました。"
        }
    },
    {
        id: 6,
        target: "mortgage",
        category: "简单",
        stem: "The client met with a bank loan specialist to apply for a 30-year fixed-rate ________.",
        options: ["mortgage", "diploma", "shelter", "carton"],
        correct: "mortgage",
        explanations: {
            guide: "金融房贷名词考点。30-year fixed-rate ________ 结合向银行信贷专员申请，选 mortgage（抵押贷款/按揭）。",
            family: "mortgage (n.抵押贷款) | diploma (n.文凭) | shelter (n.避难所) | carton (n.纸箱)。",
            details: "fixed-rate mortgage 意为固定利率按揭贷款。diploma（文凭）、carton（纸箱）均非向银行申请的贷款产品。",
            cn: "客户与银行贷款专家会面，申请了一笔 30 年期固定利率按揭贷款。",
            jp: "顧客は30年固定金利の住宅ローン（mortgage）を申請するために、銀行の融資担当者と面談しました。"
        }
    },
    {
        id: 7,
        target: "corridors",
        category: "中等",
        stem: "Regional transport authorities proposed new express bus lanes along heavily congested commuter ________.",
        options: ["corridors", "cartons", "diplomas", "shelters"],
        correct: "corridors",
        explanations: {
            guide: "交通走廊复合名词。commuter ________ 结合设置快速公交专用道以缓解拥堵，选 corridors（交通走廊/主要干道）。",
            family: "corridors (n.交通走廊/走廊) | cartons (n.纸箱) | diplomas (n.文凭) | shelters (n.庇护所)。",
            details: "commuter corridors 专指通勤交通走廊/主干干道。cartons（纸箱）、diplomas（文凭）无法用来描述交通路线通道。",
            cn: "区域交通当局提议在严重拥堵的通勤交通主干走廊沿线设置新的快速公交专用道。",
            jp: "地域の交通当局は、激しく混雑する通勤交通路/回廊（corridors）沿いに新しい急行バス専用レーンを提案しました。"
        }
    },
    {
        id: 8,
        target: "demographic",
        category: "中等",
        stem: "The advertising agency developed a mobile campaign targeting the young adult ________ aged 18 to 25.",
        options: ["demographic", "mortgage", "diploma", "shelter"],
        correct: "demographic",
        explanations: {
            guide: "市场营销客群名词考点。targeting the young adult ________ aged 18 to 25 结合锁定 18 至 25 岁的年轻群体，选 demographic（特定受众群/消费层）。",
            family: "demographic (n.特定受众群/人口群体) | mortgage (n.按揭) | diploma (n.文凭) | shelter (n.收容所)。",
            details: "target demographic 意为目标受众群。mortgage（房贷）、diploma（文凭）均非广告宣传所锁定的目标客层实体。",
            cn: "该广告公司开发了一场针对 18 至 25 岁年轻成年目标受众客群的移动端宣传活动。",
            jp: "その広告代理店は、18歳から25歳までの若年成人層（demographic）をターゲットにしたモバイルキャンペーンを開発しました。"
        }
    },
    {
        id: 9,
        target: "climactic",
        category: "中等",
        stem: "The international theatre festival concluded with a ________ performance by the world-renowned symphony orchestra.",
        options: ["climactic", "clockwise", "authentic", "sheltered"],
        correct: "climactic",
        explanations: {
            guide: "闭幕演艺修饰形容词。concluded with a ________ performance 结合艺术节闭幕时世界知名交响乐团的压轴演出，选 climactic（高潮性的/顶点的）。",
            family: "climactic (adj.高潮的/顶点的) | clockwise (adj.顺时针的) | authentic (adj.正宗的) | sheltered (adj.受庇护的)。",
            details: "climactic performance 意为高潮压轴演出。注意区分形近词 climatic（气候的）。clockwise（顺时针的）与演出评价无关。",
            cn: "国际戏剧节在举世闻名的交响乐团带来的高潮压轴演出中圆满落幕。",
            jp: "国際演劇祭は、世界的に著名な交響楽団による最高潮の（climactic）演奏で幕を閉じました。"
        }
    },
    {
        id: 10,
        target: "Confronted by",
        category: "中等",
        stem: "________ rising raw material costs, the manufacturing firm streamlined its assembly operations to maintain profitability.",
        options: ["Confronted by", "Authentic to", "Clockwise from", "Sheltered in"],
        correct: "Confronted by",
        explanations: {
            guide: "分词短语作状语。句首引导面临的不利背景（rising raw material costs），表达“面临/遭遇”原材料成本上涨，选 Confronted by。",
            family: "Confronted by (分词短语.面临/面对) | Authentic to (短语.对…真实的) | Clockwise from (短语.从…顺时针) | Sheltered in (短语.庇护于)。",
            details: "Confronted by costs 意为面对……的成本压力。其余选项均无法在句首充当引出面临严峻挑战的分词短语。",
            cn: "面对不断上涨的原材料成本，这家制造公司精简了装配作业以保持盈利能力。",
            jp: "原材料コストの上昇に直面して（Confronted by）、その製造会社は収益性を維持するために組み立て業務を合理化しました。"
        }
    },
    {
        id: 11,
        target: "authentic",
        category: "中等",
        stem: "Independent appraisers were hired to verify the ________ of the antique oil painting before the auction.",
        options: ["authenticity", "authentic", "diploma", "climactic"],
        correct: "authenticity",
        explanations: {
            guide: "派生抽象名词作宾语。verify the ________ of the painting 结构中，在定冠词 the 和介词 of 之间填入抽象名词 authenticity（真伪/真实性）。",
            family: "authenticity (n.真实性/真伪) | authentic (adj.正宗的) | diploma (n.文凭) | climactic (adj.高潮的)。",
            details: "verify authenticity 意为核验真伪。authentic 是形容词，不能直接跟在定冠词 the 后面作及物动词 verify 的宾语中心语。",
            cn: "在拍卖之前，聘请了独立鉴定师来核实这幅古董油画的真伪。",
            jp: "オークションの前に、アンティーク油絵の真贋/真正性（authenticity）を検証するために独立した鑑定士が雇われました。"
        }
    },
    {
        id: 12,
        target: "mortgage",
        category: "中等",
        stem: "Due to favorable market conditions, several homeowners chose to refinance their residential ________.",
        options: ["mortgages", "cartons", "corridors", "diplomas"],
        correct: "mortgages",
        explanations: {
            guide: "金融再融资复数名词。refinance their residential ________ 表达房主对其住房“按揭贷款”进行再融资/转按揭，选 mortgages。",
            family: "mortgages (n.复数房贷/按揭) | cartons (n.纸箱) | corridors (n.走廊) | diplomas (n.文凭)。",
            details: "refinance mortgages 属于金融房地产核心固定搭配，意为给房贷办理再融资。cartons（纸箱）、corridors（走廊）不可被再融资。",
            cn: "由于市场行情有利，数位房主选择为其住房按揭贷款办理再融资。",
            jp: "良好な市場環境のため、数名の住宅所有者が住宅ローン（mortgages）の借り換えを選択しました。"
        }
    },
    {
        id: 13,
        target: "clockwise",
        category: "困难",
        stem: "The technical manual specifies that the calibration screw should be turned ________ to increase water flow.",
        options: ["clockwise", "authenticity", "climactically", "demographic"],
        correct: "clockwise",
        explanations: {
            guide: "副词修饰动词。turned ________ 结构中，需要方向副词修饰及物动词短语 turned the screw，表达“顺时针方向地”旋转螺丝，选 clockwise。",
            family: "clockwise (adv./adj.顺时针方向地) | authenticity (n.真实性) | climactically (adv.高潮地) | demographic (adj.人口的)。",
            details: "turned clockwise 意为顺时针旋转。authenticity 是名词，demographic 是形容词，均不能充当修饰动词 turned 的方向状语。",
            cn: "技术手册明确规定，应顺时针旋转校准螺丝以增加水流流量。",
            jp: "技術マニュアルには、水流を増やすために校正ネジを時計回りに（clockwise）回す必要があると明記されています。"
        }
    },
    {
        id: 14,
        target: "Confronted by",
        category: "困难",
        stem: "The regional branch manager was ________ unexpected supply chain disruptions during the peak holiday season.",
        options: ["confronted by", "sheltered by", "authenticated by", "mortgaged by"],
        correct: "confronted by",
        explanations: {
            guide: "被动语态短语考点。was ________ unexpected disruptions 结合在旺季遭遇突发供应链中断困境，选 confronted by（面临/遭遇）。",
            family: "confronted by (短语.面临/受到…困扰) | sheltered by (短语.受…庇护) | authenticated by (短语.被…认证) | mortgaged by (短语.被…抵押)。",
            details: "be confronted by disruptions 意为面临供应链中断挑战。sheltered by（受庇护）与突发运营危机的负面语境完全相悖。",
            cn: "在假日高峰期，区域分公司经理遭遇了意料之外的供应链中断问题。",
            jp: "地域の支店長は、休暇のピークシーズン中に予期せぬサプライチェーンの混乱に直面しました（confronted by）。"
        }
    },
    {
        id: 15,
        target: "demographic",
        category: "困难",
        stem: "Economic analysts examined regional ________ shifts to forecast changes in consumer spending patterns.",
        options: ["demographic", "demographically", "demography", "diploma"],
        correct: "demographic",
        explanations: {
            guide: "修饰名词的前置形容词。regional ________ shifts 结构中，修饰名词 shifts（转变/变化），表达“人口结构的/人口统计的”变迁，选形容词 demographic。",
            family: "demographic (adj.人口结构的/统计的) | demographically (adv.人口统计学地) | demography (n.人口统计学) | diploma (n.文凭)。",
            details: "demographic shifts 属于宏观经济与商业分析高频专有名词，意为人口结构转变。demography 是学科名词，不能作 shifts 的前置修饰定语。",
            cn: "经济分析师研究了区域人口结构的变化，以预测消费者支出模式的变迁。",
            jp: "経済アナリストは、消費支出パターンの変化を予測するために地域の人口動態の（demographic）変化を調査しました。"
        }
    },
    {
        id: 16,
        target: "climactic",
        category: "困难",
        stem: "Audience members stood and applauded during the ________ finale of the international opera production.",
        options: ["climactic", "climactically", "authentic", "clockwise"],
        correct: "climactic",
        explanations: {
            guide: "演艺高潮修饰形容词。the ________ finale 结构中，修饰名词 finale（终曲/尾声），表达“高潮迭起的/顶点压轴的”，选形容词 climactic。",
            family: "climactic (adj.高潮的/顶点的) | climactically (adv.高潮地) | authentic (adj.正宗的) | clockwise (adj.顺时针的)。",
            details: "climactic finale 意为高潮终曲。climactically 是副词，不能在此直接充当名词 finale 的前置修饰定语。",
            cn: "在国际歌剧演出的高潮终曲部分，全场观众起立热烈鼓掌。",
            jp: "国際的なオペラ作品のクライマックスの（climactic）フィナーレで、観客は総立ちとなって拍手を送りました。"
        }
    },
    {
        id: 17,
        target: "corridors",
        category: "困难",
        stem: "Hospital sanitation teams sanitized all main patient ________ to maintain compliance with federal hygiene standards.",
        options: ["corridors", "cartons", "mortgages", "demographics"],
        correct: "corridors",
        explanations: {
            guide: "建筑内部通道复数名词。patient ________ 结合医院保洁消杀以符合卫生标准，选 corridors（病区走廊/通道）。",
            family: "corridors (n.复数走廊/通道) | cartons (n.纸箱) | mortgages (n.房贷) | demographics (n.人口数据)。",
            details: "patient corridors 意为病患通道/病区走廊。cartons（纸箱）、mortgages（按揭）均非医院全面消杀以符合卫生规范的建筑物通道。",
            cn: "医院保洁团队对所有主要的病区走廊进行了全面消毒，以保持符合联邦卫生标准。",
            jp: "病院の衛生管理チームは、連邦衛生基準への適合を維持するため、主要な患者用廊下（corridors）をすべて消毒しました。"
        }
    },
    {
        id: 18,
        target: "shelter",
        category: "困难",
        stem: "Several commercial fishing vessels sought refuge in the ________ bay during the coastal gale.",
        options: ["sheltered", "shelter", "confronted", "authentic"],
        correct: "sheltered",
        explanations: {
            guide: "分词/形容词作前置定语。in the ________ bay 结合商业渔船在大风期间在海湾避难，表达“受庇护的/避风的”海湾，选 sheltered。",
            family: "sheltered (adj./v-ed避风的/受庇护的) | shelter (n./v.原形) | confronted (v-ed面临的) | authentic (adj.真正的)。",
            details: "sheltered bay 意为避风海湾。shelter 为动词原形/名词，在此处作修饰 bay 的前置形容词时需使用分词形容词形式 sheltered。",
            cn: "在沿海强风暴期间，几艘商业渔船在避风的海湾中寻求庇护。",
            jp: "沿岸の強風の間、数隻の商業漁船が風雨を防げる/遮蔽された（sheltered）湾内に避難しました。"
        }
    }
];