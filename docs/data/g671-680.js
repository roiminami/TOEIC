// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag161-170 Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "accordingly",
        pos: "副",
        ipa: "/əˈkɔːrdɪŋli/",
        cn: "相应地，因此，适当地",
        jp: "それに応じて、したがって、適切に",
        family: "accord / accordance / according",
        tips: "逻辑连接与公文批复高频副词。常见用法：act accordingly（采取相应行动）、please plan accordingly（请作相应规划）、in accordance with（依照……）。",
        desc: "Please plan accordingly."
    },
    {
        word: "restrict",
        pos: "動",
        ipa: "/rɪˈstrɪkt/",
        cn: "限制，约束，限定",
        jp: "制限する、限定する",
        family: "restriction / restricted / restrictive",
        tips: "保密协议、访问权限及区域管理高频动词。核心搭配：restrict access to...（限制对……的访问）、be restricted to employees（仅限员工使用）。",
        desc: "Access is restricted here."
    },
    {
        word: "substitute",
        pos: "名/動",
        ipa: "/ˈsʌbstɪtuːt/",
        cn: "替代品，替代者；替代，替换",
        jp: "代用品、代理人；〜を代用する",
        family: "substitution / substituted",
        tips: "采购替换与人员调配高频词。核心搭配：substitute A for B（用A替代B）、serve as a substitute（充当替代人/品）。注意区分抽象名词 substitution（替代行为）。",
        desc: "Use this as a substitute."
    },
    {
        word: "favorable",
        pos: "形",
        ipa: "/ˈfeɪvərəbl/",
        cn: "有利的，赞许的，优惠的",
        jp: "好都合な、好意的な、有利な",
        family: "favor / favorably / favorite",
        tips: "商务谈判、市场评估与评价高频形容词。核心搭配：favorable terms（优惠条款/条件）、favorable response/review（良好的反响/评价）、favorable market conditions（有利的市场条件）。",
        desc: "We got a favorable response."
    },
    {
        word: "asset",
        pos: "名",
        ipa: "/ˈæset/",
        cn: "资产，财产，有价值的人/物",
        jp: "資産、財産、強み",
        family: "assets",
        tips: "财务报表与人力资源评价高频名词。核心搭配：valuable asset（宝贵的资产）、capital assets（资本资产）、liquid assets（流动资产）。",
        desc: "She is a valuable asset."
    },
    {
        word: "manner",
        pos: "名",
        ipa: "/ˈmænər/",
        cn: "方式，方法；态度，礼仪（常用复数 manners）",
        jp: "方法、やり方；態度、礼儀",
        family: "manners",
        tips: "职场沟通与行为规范高频名词。常见表达：in a timely manner（及时地）、in a professional manner（以专业的方式）、in an orderly manner（有条不紊地）。",
        desc: "Reply in a timely manner."
    },
    {
        word: "relief",
        pos: "名",
        ipa: "/rɪˈliːf/",
        cn: "缓解，减轻，救济，宽慰",
        jp: "（不安・痛みの）軽減、安堵、救援",
        family: "relieve / relieved",
        tips: "危机处理、灾害救济及税收政策高频名词。核心搭配：disaster relief（灾难救济）、tax relief（税收减免）、provide relief from...（缓解……的痛楚/压力）。动词形式为 relieve（减轻/缓解）。",
        desc: "The tax relief helped us."
    },
    {
        word: "occupied",
        pos: "形",
        ipa: "/ˈɑːkjupaɪd/",
        cn: "被占用的，使用中的，忙碌的",
        jp: "（部屋・座席が）塞がっている、使用中の、忙しい",
        family: "occupy / occupation / occupancy",
        tips: "会议室预订、酒店状态与工作忙碌高频形容词。常见搭配：fully occupied（已被占满/客满）、be occupied with work（忙于工作）。派生抽象名词 occupancy（入住率/占用率）。",
        desc: "The meeting room is occupied."
    },
    {
        word: "alike",
        pos: "形/副",
        ipa: "/əˈlaɪk/",
        cn: "相同的，相似的；同样地，两者都",
        jp: "似ている、同様の；同様に",
        family: "likeness",
        tips: "作表语形容词表示“相似的”；作副词常放在名词/代词并列结构之后，如 clients and employees alike（不论是客户还是员工）。",
        desc: "Great minds think alike."
    },
    {
        word: "heavily",
        pos: "副",
        ipa: "/ˈhevɪli/",
        cn: "大量地，严重地，沉重地",
        jp: "非常に、重く、大いに",
        family: "heavy / heaviness",
        tips: "投资比重、折扣力度及损毁程度高频副词。核心搭配：rely heavily on...（严重依赖于……）、heavily discounted（折扣力度极大）、invest heavily in...（对……大量投资）。",
        desc: "They rely heavily on technology."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "occupied",
        category: "简单",
        stem: "The conference room on the third floor is currently ________, so we will need to find another space for our team meeting.",
        options: ["occupied", "favorable", "alike", "substitute"],
        correct: "occupied",
        explanations: {
            guide: "形容词词义辨析。位于系动词 is 和副词 currently 之后，结合后半句“需要另找空间开会”，选 occupied（被占用的/使用中的）。",
            family: "occupied (adj.被占用的) | favorable (adj.有利的) | alike (adv.同样地) | substitute (n.替代品)。",
            details: "currently occupied 意为“目前已被占用”，属于会议室预订与场地使用的高频用语。",
            cn: "三楼的会议室目前已被占用，所以我们需要为团队会议另找一个空间。",
            jp: "3階の会議室は現在使用中（occupied）のため、チームミーティングのために別の場所を探す必要があります。"
        }
    },
    {
        id: 2,
        target: "manner",
        category: "简单",
        stem: "Please make sure to handle all customer inquiries in a professional and polite ________.",
        options: ["manner", "relief", "asset", "substitute"],
        correct: "manner",
        explanations: {
            guide: "名词固定搭配。结构为 in a + adj. + manner，表达以某种“方式/态度”处理客户咨询，选 manner。",
            family: "manner (n.方式/态度) | relief (n.缓解) | asset (n.资产) | substitute (n.替代品)。",
            details: "in a professional manner 意为“以专业的方式”，是客服规范与员工守则的标准表达。",
            cn: "请务必以专业且礼貌的方式处理所有客户咨询。",
            jp: "すべての顧客からの問い合わせには、前向きで礼儀正しい方法（manner）で対応してください。"
        }
    },
    {
        id: 3,
        target: "restrict",
        category: "简单",
        stem: "To ensure data security, the IT department decided to ________ access to sensitive financial files.",
        options: ["restrict", "substitute", "relieve", "occupy"],
        correct: "restrict",
        explanations: {
            guide: "动词词义与搭配。位于不定式符号 to 之后，与 access to... 构成搭配，表达“限制”对敏感文件的访问，选 restrict。",
            family: "restrict (v.限制) | substitute (v.替代) | relieve (v.缓解) | occupy (v.占用)。",
            details: "restrict access to sth 意为“限制对某物的访问”，是信息安全与系统合规的核心短语。",
            cn: "为确保数据安全，IT 部门决定限制对敏感财务文件的访问权限。",
            jp: "データセキュリティを確保するため、IT部門は機密財務ファイルへのアクセスを制限（restrict）することを決定しました。"
        }
    },
    {
        id: 4,
        target: "heavily",
        category: "简单",
        stem: "Our marketing department relies ________ on social media campaigns to reach younger consumers.",
        options: ["heavily", "accordingly", "favorable", "alike"],
        correct: "heavily",
        explanations: {
            guide: "副词固定搭配。位于动词 relies 和介词 on 之间，考查短语 rely heavily on...（严重/高度依赖于……），选 heavily。",
            family: "heavily (adv.大量地/严重地) | accordingly (adv.相应地) | favorable (adj.有利的) | alike (adv.同样地)。",
            details: "rely heavily on 属于商务战略与市场营销中的高频核心搭配，强调对某一渠道的高度依赖。",
            cn: "我们的营销部门高度依赖社交媒体宣传活动来吸引年轻消费者。",
            jp: "当社のマーケティング部門は、若年層の消費者にアプローチするためにSNSキャンペーンに大きく（heavily）依存しています。"
        }
    },
    {
        id: 5,
        target: "asset",
        category: "简单",
        stem: "Ms. Patel’s extensive experience in international trade makes her a valuable ________ to our team.",
        options: ["asset", "manner", "relief", "substitute"],
        correct: "asset",
        explanations: {
            guide: "名词词义辨析。位于形容词 valuable 之后，形容其丰富的国际贸易经验使其成为团队宝贵的“资产/财富”，选 asset。",
            family: "asset (n.资产/宝贵的人) | manner (n.方式) | relief (n.缓解) | substitute (n.替代品)。",
            details: "a valuable asset to the team 意为“团队宝贵的资产/财富”，用于赞扬人才的价值。",
            cn: "帕特尔女士在国际贸易方面的丰富经验使她成为我们团队宝贵的财富。",
            jp: "国際貿易におけるパテル氏の豊富な経験は、彼女を私たちのチームにとって貴重な資産（asset）にしています。"
        }
    },
    {
        id: 6,
        target: "favorable",
        category: "简单",
        stem: "The new product line received very ________ reviews from tech critics following its launch event.",
        options: ["favorable", "occupied", "heavily", "restrict"],
        correct: "favorable",
        explanations: {
            guide: "形容词修饰名词。修饰名词 reviews（评价/评论），结合科技影评人的态度，表达获得了“良好的/赞许的”评价，选 favorable。",
            family: "favorable (adj.赞许的/有利的) | occupied (adj.被占用的) | heavily (adv.大量地) | restrict (v.限制)。",
            details: "favorable reviews 意为“好评/赞许的评价”，是新品上市与市场营销的高频表达。",
            cn: "新产品线在发布会后获得了科技评论界非常良好的评价。",
            jp: "新しい製品ラインは、発表イベントの後、技術評論家から非常に好意的な（favorable）評価を受けました。"
        }
    },
    {
        id: 7,
        target: "substitute",
        category: "中等",
        stem: "Due to a supplier shortage, the chef had to ________ olive oil for sunflower oil in the recipe.",
        options: ["substitute", "restrict", "relieve", "occupy"],
        correct: "substitute",
        explanations: {
            guide: "动词固定结构。位于 had to 之后，考查搭配 substitute A for B（用A替代B），表达用橄榄油替代葵花籽油，选 substitute。",
            family: "substitute (v.替代) | restrict (v.限制) | relieve (v.缓解) | occupy (v.占用)。",
            details: "substitute A for B 指用 A 替换掉 B。同义结构为 replace B with A。",
            cn: "由于供应商短缺，主厨不得不以橄榄油替代配方中的葵花籽油。",
            jp: "供給業者の不足のため、シェフはレシピのひまわり油の代わりにオリーブオイルを代用（substitute）しなければなりませんでした。"
        }
    },
    {
        id: 8,
        target: "accordingly",
        category: "中等",
        stem: "The event schedule has been updated, so all staff members should adjust their personal timetables ________.",
        options: ["accordingly", "heavily", "alike", "favorable"],
        correct: "accordingly",
        explanations: {
            guide: "副词修饰句末状语。位于句尾修饰动作 adjust，表达员工应“相应地”调整各自的时间表，选 accordingly。",
            family: "accordingly (adv.相应地) | heavily (adv.大量地) | alike (adv.同样地) | favorable (adj.有利的)。",
            details: "adjust... accordingly 意为“根据情况作相应调整”，属于商务日程通知的标准用语。",
            cn: "活动日程已更新，请所有工作人员相应地调整各自的时间表。",
            jp: "イベントのスケジュールが更新されたため、すべてのスタッフはそれに応じて（accordingly）個人のタイムスケジュールを調整してください。"
        }
    },
    {
        id: 9,
        target: "relief",
        category: "中等",
        stem: "The government announced a tax ________ program to support small business owners during the economic downturn.",
        options: ["relief", "asset", "manner", "substitute"],
        correct: "relief",
        explanations: {
            guide: "复合名词搭配。与 tax 组合构成 tax relief（税收减免/救济），作 announced 的宾语，选 relief。",
            family: "relief (n.减免/缓解) | asset (n.资产) | manner (n.方式) | substitute (n.替代品)。",
            details: "tax relief program 意为“税收减免方案”，是经济政策与政府扶持政策中的核心表达。",
            cn: "政府宣布了一项税收减免计划，以在经济低迷期间支持小企业主。",
            jp: "政府は、景気后退期に小規模事業主を支援するため、減税（tax relief）プログラムを発表しました。"
        }
    },
    {
        id: 10,
        target: "alike",
        category: "中等",
        stem: "The new benefit policy was warmly welcomed by managers and entry-level employees ________.",
        options: ["alike", "accordingly", "heavily", "favorable"],
        correct: "alike",
        explanations: {
            guide: "副词后置修饰并列名词。位于并列结构 managers and entry-level employees 之后，表达“管理者和初级员工‘都/同样地’”欢迎该政策，选 alike。",
            family: "alike (adv.同样地/两者都) | accordingly (adv.相应地) | heavily (adv.大量地) | favorable (adj.有利的)。",
            details: "A and B alike 意为“不论是 A 还是 B / A和B两者都”，是阅读与福利政策公告的高频表达。",
            cn: "这项新的福利政策受到了管理者和初级员工的同样欢迎。",
            jp: "新しい福利厚生政策は、管理者とエントリーレベルの従業員の双方に（alike）温かく迎えられました。"
        }
    },
    {
        id: 11,
        target: "restrict",
        category: "中等",
        stem: "Due to spatial constraints, the venue placed strict ________ on the number of attendees for the workshop.",
        options: ["restrictions", "restrict", "restricted", "restrictive"],
        correct: "restrictions",
        explanations: {
            guide: "名词派生与搭配。位于形容词 strict 之后，作 placed 的宾语，考查短语 place restrictions on...（对……实施限制），选复数名词 restrictions。",
            family: "restrictions (n.限制/复数) | restrict (v.限制) | restricted (adj.受限的) | restrictive (adj.限制性的)。",
            details: "place strict restrictions on sth 意为“对某事实施严格限制”。restrict 为动词，不能直接放在 strict 之后作宾语。",
            cn: "由于场地空间限制，该场地对研讨会的参加人数实施了严格的限制。",
            jp: "会場の空間的制約のため、ワークショップの参加者数に厳格な制限（restrictions）が課されました。"
        }
    },
    {
        id: 12,
        target: "favorable",
        category: "中等",
        stem: "The board of directors responded ________ to the CEO's proposal for global expansion.",
        options: ["favorably", "favorable", "favorite", "favor"],
        correct: "favorably",
        explanations: {
            guide: "副词修饰动词。位于不及物动词 responded 之后，修饰动词 responded，表达董事会对提案给予了“赞许地/积极地”回应，选副词 favorably。",
            family: "favorably (adv.赞许地/积极地) | favorable (adj.有利的) | favorite (adj.最爱的) | favor (n./v.偏爱)。",
            details: "respond favorably to sth 意为“对某事给予积极/赞许的回应”，属于高管决策与商务交流核心表达。",
            cn: "董事会对首席执行官关于全球扩张的提案给予了积极赞许的回应。",
            jp: "取締役会は、CEOのグローバル拡大の提案に対して好意的に（favorably）応答しました。"
        }
    },
    {
        id: 13,
        target: "occupied",
        category: "困难",
        stem: "The survey revealed that property ________ in the business district reached an all-time high this quarter.",
        options: ["occupancy", "occupied", "occupant", "occupy"],
        correct: "occupancy",
        explanations: {
            guide: "派生抽象名词考点。位于名词 property 之后，充当从句的主语中心词，表达商业区的房产“入住率/占用率”，选抽象名词 occupancy。",
            family: "occupancy (n.入住率/占用率) | occupied (adj.被占用的) | occupant (n.居住者/占有者) | occupy (v.占用)。",
            details: "property occupancy rate / occupancy 意为“房产入住率”，是房地产与酒店管理的核心指标。occupant 指居住的人，语义不符。",
            cn: "调查显示，本季度商业区的房产入住率创下了历史新高。",
            jp: "調査によると、ビジネス街の物件占有率/入居率（occupancy）は今四半期に過去最高に達しました。"
        }
    },
    {
        id: 14,
        target: "relief",
        category: "困难",
        stem: "The engineering team worked around the clock to ________ the pressure on the damaged water dam.",
        options: ["relieve", "relief", "relieved", "substitute"],
        correct: "relieve",
        explanations: {
            guide: "动词派生与不定式结构。位于不定式符号 to 之后，作 worked 的目的状语，需要填入动词原形 relieve（减轻/缓解）。",
            family: "relieve (v.减轻/缓解) | relief (n.缓解/救济) | relieved (adj.宽慰的) | substitute (v.替代)。",
            details: "relieve the pressure 意为“缓解/减轻压力”。relief 为名词，不能直接在 to 后充当动词原形。",
            cn: "工程团队夜以继日地工作，以缓解受损水坝所承受的压力。",
            jp: "エンジニアリングチームは、損傷した水力ダムへの圧力を軽減する（relieve）ために昼夜を問わず働きました。"
        }
    },
    {
        id: 15,
        target: "manner",
        category: "困难",
        stem: "All employees are expected to follow corporate code and conduct themselves in an ________ manner.",
        options: ["orderly", "manner", "mannerly", "alike"],
        correct: "orderly",
        explanations: {
            guide: "形容词修饰名词。位于不定冠词 an 之后，名词 manner 之前，表达以“有条不紊的/遵守秩序的”方式行事，选形容词 orderly。",
            family: "orderly (adj.有条不紊的/守秩序的) | manner (n.方式) | mannerly (adj.有礼貌的) | alike (adj.相似的)。",
            details: "in an orderly manner 意为“按秩序地/有条不紊地”。orderly 是以 -ly 结尾的常见形容词。",
            cn: "所有员工都应遵守公司规范，并以有条不紊的方式约束自己的行为。",
            jp: "すべての従業員は会社規範に従い、秩序ある（orderly）方法で行動することが期待されています。"
        }
    },
    {
        id: 16,
        target: "substitute",
        category: "困难",
        stem: "When the primary speaker was delayed, a senior manager served as a temporary ________ at the summit.",
        options: ["substitute", "substitution", "substituted", "substituting"],
        correct: "substitute",
        explanations: {
            guide: "指人/物名词与抽象名词辨析。位于形容词 temporary 之后，表达充当临时的“替代者/代理人”，选可数指人名词 substitute。",
            family: "substitute (n.替代人/替代品) | substitution (n.替代行为/过程) | substituted (adj.被替代的) | substituting (pres-p.替代中)。",
            details: "serve as a substitute 意为“充当替代者/代理人”。substitution 侧重抽象的“替代行为”，不能加不定冠词 a 指代个人。",
            cn: "主讲人延误时，一位资深经理在峰会上充当了临时替代发言人。",
            jp: "メインスピーカーが遅れた際、上級マネージャーがサミットで一時的な代理人（substitute）を務めました。"
        }
    },
    {
        id: 17,
        target: "heavily",
        category: "困难",
        stem: "The retail chain offered ________ discounted items during its annual end-of-year clearance sale.",
        options: ["heavily", "heavy", "heaviness", "accordingly"],
        correct: "heavily",
        explanations: {
            guide: "副词修饰分词形容词。修饰过去分词形容词 discounted（打折的），表达“折扣力度极大地”打折，选副词 heavily。",
            family: "heavily (adv.大量地/重度地) | heavy (adj.沉重的) | heaviness (n.沉重) | accordingly (adv.相应地)。",
            details: "heavily discounted items 意为“有重大折扣的商品”，属于零售清仓大促销中的固定修饰搭配。",
            cn: "该零售连锁店在年度年末清仓大甩卖期间提供了折扣力度极大的商品。",
            jp: "その小売チェーンは、年次年末在庫処分セールの期間中、大幅に（heavily）割引された商品を提供しました。"
        }
    },
    {
        id: 18,
        target: "accordingly",
        category: "困难",
        stem: "The company signed a formal contract in ________ with regional environmental protection regulations.",
        options: ["accordance", "accordingly", "accord", "according"],
        correct: "accordance",
        explanations: {
            guide: "派生名词与固定短语。考查介词结构 in accordance with...（依照/与……一致），选名词 accordance。",
            family: "accordance (n.一致/依照) | accordingly (adv.相应地) | accord (n./v.协议/一致) | according (prep.根据)。",
            details: "in accordance with regulations 意为“依照规章/与法规保持一致”，属于商业合同与合规审查的顶尖高频词组。",
            cn: "该公司签署了一份符合区域环境保护法规的正式合同。",
            jp: "同社は地域環境保護規制に従って（in accordance with）正式な契約に署名しました。"
        }
    }
];