// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data461-470.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "mortgage",
        pos: "名/動",
        ipa: "/ˈmɔːrɡɪdʒ/",
        cn: "抵押贷款，按揭；抵押",
        jp: "住宅ローン、担保融資；抵当に入れる",
        family: "mortgaged / mortgaging / mortgagor",
        tips: "金融与房产高频：mortgage rate/payment/application（房贷利率/月供/申请）。",
        desc: "He took out a mortgage."
    },
    {
        word: "entice",
        pos: "動",
        ipa: "/ɪnˈtaɪs/",
        cn: "诱惑，吸引，诱使",
        jp: "引き付ける、誘惑する",
        family: "enticing / enticement / enticed",
        tips: "营销与招聘高频：entice customers/talent（吸引客户/人才），entice sb with discounts（用折扣吸引某人）。",
        desc: "Discounts entice new customers."
    },
    {
        word: "leverage",
        pos: "動/名",
        ipa: "/ˈlevərɪdʒ/",
        cn: "利用，借助；杠杆作用，影响力",
        jp: "活用する、てこの作用；影響力",
        family: "leveraged / leveraging / lever",
        tips: "商务战略高频：leverage assets/technology/strengths（利用资产/技术/优势）。",
        desc: "We leverage modern technology."
    },
    {
        word: "nonetheless",
        pos: "副",
        ipa: "/ˌnʌnðəˈles/",
        cn: "尽管如此，但是",
        jp: "それにもかかわらず、それでも",
        family: "none / the / less / nevertheless",
        tips: "让步转折副词，与 nevertheless 同义，用于引出克服困难后的积极结果或转折事实。",
        desc: "Nonetheless, the plan worked."
    },
    {
        word: "extended",
        pos: "形/動",
        ipa: "/ɪkˈstendɪd/",
        cn: "延长的，扩展的，长期的",
        jp: "延長された、長期にわたる",
        family: "extend / extension / extensively",
        tips: "服务与时间高频：extended warranty/hours/stay（延长保修/延长营业时间/长期逗留）。",
        desc: "They offered an extended warranty."
    },
    {
        word: "contended",
        pos: "動",
        ipa: "/kənˈtendɪd/",
        cn: "声称，主张；竞争，应对（contend的过去式/分词）",
        jp: "主張した、争った、対処した",
        family: "contend / contention / contender",
        tips: "谈判与运营高频：contended that...（主张/辩称……），contended with challenges（应对挑战）。",
        desc: "He contended that prices rose."
    },
    {
        word: "anchored",
        pos: "動/形",
        ipa: "/ˈæŋkərd/",
        cn: "锚定，抛锚停泊；固定的",
        jp: "停泊した、固定された",
        family: "anchor / anchoring / anchorage",
        tips: "Part 1 & 商业战略：anchored in the bay（停泊在海湾），anchored by a store（以主力店为依托）。",
        desc: "Ships were safely anchored."
    },
    {
        word: "sheltered",
        pos: "形/動",
        ipa: "/ˈʃeltərd/",
        cn: "有庇护的，遮蔽的，避风的",
        jp: "保護された、風雨を防ぐ",
        family: "shelter / sheltering",
        tips: "设施与户外高频：sheltered harbor/bay（避风港/避风湾），sheltered walkway（有遮顶的走廊）。",
        desc: "Boats rested in sheltered waters."
    },
    {
        word: "asynchronous",
        pos: "形",
        ipa: "/eɪˈsɪŋkrənəs/",
        cn: "异步的，不同步的",
        jp: "非同期の、同時に起こらない",
        family: "asynchronously / synchrony / synchronous",
        tips: "IT与远程办公高频：asynchronous communication/collaboration（异步沟通/远程协作）。",
        desc: "We use asynchronous communication."
    },
    {
        word: "substantial",
        pos: "形",
        ipa: "/səbˈstænʃl/",
        cn: "大量的，重大的，实质的",
        jp: "相当な、実質的な、重要な",
        family: "substantially / substantiate / substance",
        tips: "财报与增长高频：substantial increase/amount/discount（大幅增长/巨额款项/大幅折扣）。",
        desc: "Profits saw substantial growth."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "mortgage",
        category: "简单",
        stem: "The young couple applied for a 30-year ________ with a local bank to purchase their first home.",
        options: ["mortgage", "leverage", "shelter", "contention"],
        correct: "mortgage",
        explanations: {
            guide: "购房贷款名词考点。applied for a 30-year ________ 结合向银行申请购房贷款，选 mortgage（抵押贷款/按揭）。",
            family: "mortgage (n.抵押贷款) | leverage (n.杠杆/利用) | shelter (n.庇护处) | contention (n.争论)。",
            details: "applied for a 30-year mortgage 意为申请了30年按揭贷款。leverage（利用）、shelter（遮蔽处）均非银行购房贷款金融产品名称。",
            cn: "这对年轻夫妇向当地银行申请了为期 30 年的按揭贷款以购买他们的第一套住房。",
            jp: "その若い夫婦は、最初の家を購入するために地元の銀行に30年の住宅ローン（mortgage）を申請しました。"
        }
    },
    {
        id: 2,
        target: "entice",
        category: "简单",
        stem: "The department store offered limited-time gift cards to ________ shoppers into visiting during the holiday sale.",
        options: ["entice", "mortgage", "contend", "anchor"],
        correct: "entice",
        explanations: {
            guide: "促销引流动词考点。offered gift cards to 后面接动词原形，表达赠送礼品卡以“吸引/诱惑”顾客光顾，选 entice。",
            family: "entice (v.吸引/诱使) | mortgage (v.抵押) | contend (v.主张/竞争) | anchor (v.抛锚固定)。",
            details: "to entice shoppers into... 意为吸引购物者……。contend（主张）、anchor（固定）与吸引顾客来店的商业语境不符。",
            cn: "该百货商店提供限时礼品卡，以吸引购物者在假日促销期间进店消费。",
            jp: "その百貨店は、ホリデーセールの期間中に買い物客を引き付ける（entice）ために、期間限定のギフトカードを提供しました。"
        }
    },
    {
        id: 3,
        target: "substantial",
        category: "简单",
        stem: "Thanks to the success of the promotional campaign, the company reported a ________ increase in quarterly profits.",
        options: ["substantial", "asynchronous", "sheltered", "extended"],
        correct: "substantial",
        explanations: {
            guide: "修饰增长的形容词考点。修饰 increase in quarterly profits，表达利润迎来了“大幅度/重大的”增长，选 substantial。",
            family: "substantial (adj.重大的/大量的) | asynchronous (adj.异步的) | sheltered (adj.受庇护的) | extended (adj.延长的)。",
            details: "substantial increase 属于财报高频搭配，意为大幅增长。asynchronous（异步的）不能修饰利润额的增加。",
            cn: "多亏了促销活动的成功，公司报告了季度利润的大幅度增长。",
            jp: "プロモーションキャンペーンの成功のおかげで、同社は四半期利益の大幅な（substantial）増加を報告しました。"
        }
    },
    {
        id: 4,
        target: "extended",
        category: "简单",
        stem: "The electronics retailer offered an ________ three-year warranty on all newly purchased laptops.",
        options: ["extended", "substantial", "anchored", "asynchronous"],
        correct: "extended",
        explanations: {
            guide: "售后保障形容词考点。an ________ three-year warranty 属于零售高频词组，表达“延长的/延展”保修服务，选 extended。",
            family: "extended (adj.延长的/扩展的) | substantial (adj.重大的) | anchored (adj.锚定的) | asynchronous (adj.异步的)。",
            details: "extended warranty 意为延长保修期。substantial（大量的）、anchored（固定的）均不与 warranty 构成该特定售后专有名词。",
            cn: "该电子产品零售商为所有新购买的笔记本电脑提供了延长的三年质保。",
            jp: "その家電量販店は、新規購入されたすべてのノートパソコンに延長された（extended）3年間の保証を提供しました。"
        }
    },
    {
        id: 5,
        target: "anchored",
        category: "简单",
        stem: "During the sudden evening storm, several cargo vessels remained safely ________ in the bay.",
        options: ["anchored", "enticed", "contended", "leveraged"],
        correct: "anchored",
        explanations: {
            guide: "船舶停泊状态表语考点。remained safely ________ in the bay 结合货轮在暴风雨中在海湾内安全停泊，选 anchored（抛锚固定的）。",
            family: "anchored (adj./v-ed锚定的/抛锚停泊的) | enticed (v-ed受吸引的) | contended (v-ed竞争的) | leveraged (v-ed利用的)。",
            details: "safely anchored 意为安全抛锚停靠。enticed（被诱惑的）、leveraged（被利用的）均不符合船舶在港湾内的水上停靠状态。",
            cn: "在傍晚突降的风暴期间，几艘货船安全地抛锚停泊在海湾中。",
            jp: "夕方の突然の嵐の間、数隻の貨物船は湾内に安全に停泊した（anchored）ままでした。"
        }
    },
    {
        id: 6,
        target: "nonetheless",
        category: "简单",
        stem: "The project faced unexpected production delays; ________, the engineering team delivered the final prototype on time.",
        options: ["nonetheless", "substantially", "asynchronously", "extensively"],
        correct: "nonetheless",
        explanations: {
            guide: "让步转折副词考点。前半句指出面临意料之外的延误，后半句说明工程团队依然按时交付了原型机，选转折副词 nonetheless（尽管如此）。",
            family: "nonetheless (adv.尽管如此) | substantially (adv.大幅度地) | asynchronously (adv.异步地) | extensively (adv.广泛地)。",
            details: "nonetheless 引导克服困难后的转折结果。substantially（大幅地）、asynchronously（异步地）均缺乏句子间的逆向转折逻辑连接功能。",
            cn: "该项目面临着意想不到的生产延误；尽管如此，工程团队还是按时交付了最终原型机。",
            jp: "プロジェクトは予期せぬ生産の遅延に直面しました。それにもかかわらず（nonetheless）、エンジニアリングチームは最終試作品を期日通りに納品しました。"
        }
    },
    {
        id: 7,
        target: "leverage",
        category: "中等",
        stem: "The consulting firm advised the startup to ________ its strong social media presence to attract international investors.",
        options: ["leverage", "mortgage", "contend", "entice"],
        correct: "leverage",
        explanations: {
            guide: "商业战略动词考点。advised the startup to 后面接动词原形，表达“利用/发挥”其强大的社交媒体影响力，选 leverage。",
            family: "leverage (v.利用/借助) | mortgage (v.抵押) | contend (v.主张/竞争) | entice (v.诱惑)。",
            details: "to leverage its presence 意为借助/利用其影响力。entice 常接 sb（entice investors），不直接以 presence 作为被利用的手段工具。",
            cn: "该咨询公司建议这家初创企业利用其强大的社交媒体影响力来吸引国际投资者。",
            jp: "コンサルティング会社は、国際的な投資家を引き付けるために、強力なソーシャルメディアでの存在感を活用する（leverage）ようその新興企業に助言しました。"
        }
    },
    {
        id: 8,
        target: "asynchronous",
        category: "中等",
        stem: "Remote project teams across different global time zones rely heavily on ________ communication tools like messaging boards.",
        options: ["asynchronous", "sheltered", "extended", "substantial"],
        correct: "asynchronous",
        explanations: {
            guide: "远程协作前置形容词考点。________ communication tools 结合跨越全球不同时区（across different global time zones），选 asynchronous（异步的）。",
            family: "asynchronous (adj.异步的/不同步的) | sheltered (adj.受庇护的) | extended (adj.延长的) | substantial (adj.大量的)。",
            details: "asynchronous communication 指非实时/异步沟通（如留言板、邮件等）。sheltered（避风的）、substantial（大量的）与跨时区通讯模式不符。",
            cn: "跨越全球不同时区的远程项目团队严重依赖留言板等异步沟通工具。",
            jp: "世界中の異なるタイムゾーンにまたがるリモートプロジェクトチームは、メッセージボードなどの非同期（asynchronous）コミュニケーションツールに大きく依存しています。"
        }
    },
    {
        id: 9,
        target: "contended",
        category: "中等",
        stem: "The union representative ________ that the proposed shift schedule would negatively affect worker safety.",
        options: ["contended", "anchored", "sheltered", "leveraged"],
        correct: "contended",
        explanations: {
            guide: "宾语从句谓语动词。主语为 union representative，后接 that 引导的宾语从句，表达工会代表“主张/声称/辩称”，选 contended。",
            family: "contended (v-ed主张/声称) | anchored (v-ed锚定) | sheltered (v-ed庇护) | leveraged (v-ed利用)。",
            details: "contended that... 属于商务谈判高频表达，意为主张/争辩道……。anchored、sheltered 均不能直接带 that 从句表达观点陈述。",
            cn: "工会代表主张，提议的轮班时间表将对员工安全产生负面影响。",
            jp: "労働組合の代表者は、提案された交代勤務スケジュールが作業員の安全に悪影響を及ぼすと主張しました（contended）。"
        }
    },
    {
        id: 10,
        target: "sheltered",
        category: "中等",
        stem: "Fishermen navigated their small boats toward the ________ inlet to avoid the approaching coastal storm.",
        options: ["sheltered", "asynchronous", "extended", "substantial"],
        correct: "sheltered",
        explanations: {
            guide: "地理水域修饰形容词。修饰 inlet（水湾/小港湾），结合避开来袭的风暴，表达“避风的/遮蔽的”，选 sheltered。",
            family: "sheltered (adj.受庇护的/避风的) | asynchronous (adj.异步的) | extended (adj.延长的) | substantial (adj.重大的)。",
            details: "sheltered inlet 意为避风水湾。asynchronous（异步的）、substantial（大量的）均无法用来修饰防风避浪的水域环境。",
            cn: "渔民们驾驶小船驶向避风的水湾，以躲避即将来临的沿海风暴。",
            jp: "漁師たちは迫り来る沿岸の嵐を避けるため、風雨を防げる（sheltered）入り江に向かって小さな船を操舵しました。"
        }
    },
    {
        id: 11,
        target: "entice",
        category: "中等",
        stem: "The executive chef created an ________ seasonal menu featuring organic ingredients to attract local food enthusiasts.",
        options: ["enticing", "entice", "enticement", "contended"],
        correct: "enticing",
        explanations: {
            guide: "现在分词/形容词作定语。an ________ seasonal menu 结构中，修饰菜单，表达令人垂涎的/“诱人的”菜单，选形容词/分词形式 enticing。",
            family: "enticing (adj.诱人的/吸引人的) | entice (v.诱惑) | enticement (n.诱惑物) | contended (v-ed主张)。",
            details: "an enticing menu 意为诱人的菜单。entice 为动词原形，enticement 为名词，均不能直接作 seasonal menu 的前置修饰定语。",
            cn: "行政主厨打造了一份采用有机食材且极具诱惑力的应季菜单，以吸引当地的美食爱好者。",
            jp: "総料理長は地元のグルメ愛好家を引き付けるため、有機食材を取り入れた魅力的な（enticing）季節のメニューを考案しました。"
        }
    },
    {
        id: 12,
        target: "substantial",
        category: "中等",
        stem: "Operating expenses decreased ________ after the factory installed energy-efficient machinery.",
        options: ["substantially", "substantial", "substance", "asynchronous"],
        correct: "substantially",
        explanations: {
            guide: "副词修饰不及物动词。decreased ________ 结构中，用副词修饰动词 decreased，表达运营成本“大幅度地/显著地”下降，选 substantially。",
            family: "substantially (adv.大幅度地/实质上) | substantial (adj.大量的) | substance (n.物质/实质) | asynchronous (adj.异步的)。",
            details: "decreased substantially 意为大幅度减少。substantial 是形容词，substance 是名词，均不能在句中充当修饰动词的状语。",
            cn: "在工厂安装节能机器后，运营费用大幅度下降。",
            jp: "工場が省エネ機器を導入した後、運営費用は大幅に（substantially）減少しました。"
        }
    },
    {
        id: 13,
        target: "leverage",
        category: "困难",
        stem: "The corporate restructuring allowed the investment group to gain significant financial ________ during acquisition talks.",
        options: ["leverage", "leveraged", "contention", "mortgage"],
        correct: "leverage",
        explanations: {
            guide: "抽象商务名词考点。gain significant financial ________ 结构中，形容词 financial 后面接抽象名词，表达获得巨大的财务“影响力/杠杆优势”，选 leverage。",
            family: "leverage (n.影响力/杠杆作用) | leveraged (adj.利用杠杆的) | contention (n.争论) | mortgage (n.按揭贷款)。",
            details: "financial leverage 在并购谈判语境中指财务杠杆/话语权优势。leveraged 是形容词/分词，不能作 gain 的宾语中心语。",
            cn: "公司重组使该投资集团在收购谈判期间获得了巨大的财务影响力与杠杆优势。",
            jp: "企業の再編により、その投資グループは買収交渉中に大きな財務的影響力/優位性（leverage）を獲得することができました。"
        }
    },
    {
        id: 14,
        target: "extended",
        category: "困难",
        stem: "Negotiations between the two pharmaceutical companies continued for an ________ period before a merger agreement was signed.",
        options: ["extended", "extension", "extensively", "sheltered"],
        correct: "extended",
        explanations: {
            guide: "时间修饰形容词考点。an ________ period 属于商务高频表达，修饰时间段，表达经过了“长期的/延长的”谈判阶段，选 extended。",
            family: "extended (adj.延长的/长期的) | extension (n.延期/电话分机) | extensively (adv.广泛地) | sheltered (adj.受庇护的)。",
            details: "an extended period 意为相当长的一段时间。extension 是名词，extensively 是副词，均不能作 period 的前置定语。",
            cn: "两家制药公司之间的谈判持续了很长一段时间，之后才签署了合并协议。",
            jp: "両製薬会社間の交渉は、合併契約が締結されるまで長期にわたる（extended）期間継続しました。"
        }
    },
    {
        id: 15,
        target: "mortgage",
        category: "困难",
        stem: "Due to tightening central bank regulations, several regional commercial ________ lenders raised their loan qualification thresholds.",
        options: ["mortgage", "mortgages", "enticements", "contentions"],
        correct: "mortgage",
        explanations: {
            guide: "名词作前置定语单数规范。________ lenders 属于金融高频专有名词，表达“房贷放款机构/按揭放款方”，选单数名词 mortgage 作定语。",
            family: "mortgage (n.抵押贷款/按揭) | mortgages (n.复数) | enticements (n.诱惑物) | contentions (n.主张/争论)。",
            details: "mortgage lenders 意为房贷借贷机构。名词充当前置定语修饰复数名词 lenders 时，固定采用单数形式 mortgage（如 mortgage market / mortgage lender）。",
            cn: "由于央行监管收紧，几家区域性商业房贷放贷机构提高了其贷款资格门槛。",
            jp: "中央銀行の規制強化のため、いくつかの地域の商業住宅ローン（mortgage）貸付業者は融資資格の基準を引き上げました。"
        }
    },
    {
        id: 16,
        target: "contended",
        category: "困难",
        stem: "The regional distribution warehouse ________ with unprecedented supply chain bottlenecks throughout the peak holiday season.",
        options: ["contended", "anchored", "leveraged", "sheltered"],
        correct: "contended",
        explanations: {
            guide: "高阶动词与介词搭配。________ with bottlenecks 属于高阶动宾短语 contend with sth，表达与供应链瓶颈“作斗争/艰难应对”，选 contended（contend的过去式）。",
            family: "contended (v-ed艰难应对/争夺) | anchored (v-ed停泊) | leveraged (v-ed利用) | sheltered (v-ed遮蔽)。",
            details: "contended with challenges/bottlenecks 意为全力应对/克服困难挑战。anchored、leveraged 均不能与 with 搭配表达应对困境之意。",
            cn: "在整个假日高峰期，区域配送中心一直在艰难应对前所未有的供应链瓶颈。",
            jp: "地域の配送倉庫は、休暇のピークシーズンを通じて前例のないサプライチェーンのボトルネックに対処しました（contended）。"
        }
    },
    {
        id: 17,
        target: "asynchronous",
        category: "困难",
        stem: "Software development teams operating across multiple continents collaborate ________ using shared code repositories and automated workflows.",
        options: ["asynchronously", "asynchronous", "substantially", "nonetheless"],
        correct: "asynchronously",
        explanations: {
            guide: "派生副词修饰动词。collaborate ________ 结构中，用副词修饰不及物动词 collaborate，表达跨大洲团队进行“异步协作地”工作，选 asynchronously。",
            family: "asynchronously (adv.异步地) | asynchronous (adj.异步的) | substantially (adv.大幅度地) | nonetheless (adv.尽管如此)。",
            details: "collaborate asynchronously 意为异步协同工作。asynchronous 是形容词，不能直接修饰动词 collaborate。",
            cn: "跨多个大洲运营的软件开发团队通过共享代码库和自动化工作流进行异步协作。",
            jp: "複数の大陸にまたがって活動するソフトウェア開発チームは、共有コードリポジトリと自動化されたワークフローを使用して非同期に（asynchronously）協業しています。"
        }
    },
    {
        id: 18,
        target: "anchored",
        category: "困难",
        stem: "The suburban commercial shopping complex is ________ by a flagship department store and an upscale cinema.",
        options: ["anchored", "sheltered", "contended", "mortgaged"],
        correct: "anchored",
        explanations: {
            guide: "商业地产专属被动动词。is ________ by a flagship department store 属于商业地产开发核心专有名词，表达商业综合体“以主力店为依托/以旗舰百货为主力支撑”，选 anchored。",
            family: "anchored (v-ed/adj.以…为主力支撑的/锚定的) | sheltered (v-ed遮蔽的) | contended (v-ed争辩的) | mortgaged (v-ed被抵押的)。",
            details: "be anchored by a store 意为以某大型知名店铺（主力店/Anchor Tenant）为核心支撑拉动客流。其余选项均无此商业地产专属引申语义。",
            cn: "该郊区商业购物综合体由一家旗舰百货商店和一家高档电影院作为主力店支撑。",
            jp: "その郊外の商業ショッピング複合施設は、旗艦百貨店と高級映画館を中核店舗として支えられて（anchored）います。"
        }
    }
];