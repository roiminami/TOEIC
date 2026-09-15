// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data201-210.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "crate",
        pos: "名/動",
        ipa: "/kreɪt/",
        cn: "板条箱，包装箱；装箱",
        jp: "木箱、クレート；木箱に詰める",
        family: "crated / crating",
        tips: "物流与仓储场景核心词汇：wooden crate（木质板条箱），crate of produce/goods（一箱货物）；动词考被动装箱（be securely crated）。",
        desc: "The workers packed fruit into a wooden crate."
    },
    {
        word: "detour",
        pos: "名/動",
        ipa: "/ˈdiːtʊr/",
        cn: "绕道，迂回路线；绕行",
        jp: "回り道、迂回（うかい）路；回り道をする",
        family: "detouring / detoured",
        tips: "听力与交通路况播报高频词：take a detour（绕道而行），follow the detour signs（跟随绕行标志）。",
        desc: "Drivers must take a detour due to road work."
    },
    {
        word: "raffle",
        pos: "名/動",
        ipa: "/ˈræfl/",
        cn: "抽奖活动，抽彩售物",
        jp: "福引、ラッフル（慈善などのくじ引き）",
        family: "raffle ticket / raffle winner",
        tips: "企业年会、慈善晚会及营销庆典必考词：raffle tickets（抽奖券），hold a raffle（举办抽彩活动）。",
        desc: "She won a tablet in the charity raffle."
    },
    {
        word: "cubicle",
        pos: "名",
        ipa: "/ˈkjuːbɪkl/",
        cn: "（办公室）隔间，工作小隔间",
        jp: "（オフィスの）仕切り付き小部屋、キュービクル",
        family: "office cubicle / cubicle partition",
        tips: "现代办公环境核心场景词：work in a cubicle（在隔间办公），cubicle partition（工位隔板）。",
        desc: "He decorated his office cubicle with photos."
    },
    {
        word: "redeem",
        pos: "動",
        ipa: "/rɪˈdiːm/",
        cn: "兑换，兑现（优惠券/积分）；赎回",
        jp: "（商品券・ポイントなどを）換える、引き換える",
        family: "redeemable / redemption",
        tips: "会员忠诚计划与零售营销高频词：redeem points for merchandise（用积分兑换商品），redeem a voucher（兑换代金券）；形容词 redeemable（可兑换的）。",
        desc: "You can redeem the coupon at checkout."
    },
    {
        word: "stunning",
        pos: "形",
        ipa: "/ˈstʌnɪŋ/",
        cn: "令人叹为观止的，极好的，极具吸引力的",
        jp: "素晴らしい、息をのむほど美しい、驚くべき",
        family: "stun / stunned / stunningly",
        tips: "酒店度假、商业地产与宣传文案高频赞美形容词：stunning views of the harbor（迷人的海港景色），a stunning performance（精彩的演出）。",
        desc: "The hotel offers stunning ocean views."
    },
    {
        word: "outreach",
        pos: "名/形",
        ipa: "/ˈaʊtriːtʃ/",
        cn: "外展服务，社区关怀活动；外展的",
        jp: "地域奉仕活動、アウトリーチ；拡大奉仕の",
        family: "community outreach / outreach program / outreach efforts",
        tips: "企业社会责任（CSR）与公共关系高频词：community outreach program（社区关怀计划），outreach efforts（对外宣传拓展）。",
        desc: "The hospital launched a health outreach program."
    },
    {
        word: "waive",
        pos: "動",
        ipa: "/weɪv/",
        cn: "免除，放弃（费用/要求/权利）",
        jp: "（手数料・権利などを）免除する、放棄する",
        family: "waiver / waiving / waived",
        tips: "商业客诉与金融服务核心动词：waive the fee / late penalty（免除费用/滞纳金）；派生名词 waiver（免责声明书/放弃协议）。",
        desc: "The bank agreed to waive the late fee."
    },
    {
        word: "rafting",
        pos: "名",
        ipa: "/ˈræftɪŋ/",
        cn: "急流漂筏，漂流运动",
        jp: "ラフティング、いかだ下り",
        family: "raft / rafter / whitewater rafting",
        tips: "旅游度假、公司团建与休闲活动高频词：whitewater rafting excursion（白水激流漂筏远足）。",
        desc: "We went whitewater rafting during our vacation."
    },
    {
        word: "refill",
        pos: "名/動",
        ipa: "/ˈriːfɪl/ (n.), /ˌriːˈfɪl/ (v.)",
        cn: "续杯；补充装；再次加满，续添",
        jp: "（飲み物の）おかわり；詰め替え品；再び満たす",
        family: "refillable / refilled / refilling",
        tips: "餐饮服务与办公耗材核心考点：complimentary refill on coffee（咖啡免费续杯）；派生形容词 refillable bottle（可重复装填的水瓶）。",
        desc: "Customers are entitled to one free coffee refill."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "waive",
        category: "简单",
        stem: "As a gesture of goodwill, the customer service representative agreed to ________ the late processing fee.",
        options: ["waive", "waiver", "refill", "crate"],
        correct: "waive",
        explanations: {
            guide: "动词不定式结构。agreed to 后面需要接动词原形，waive the fee 属于托业客户服务场景核心动宾搭配，意为“免除费用”，选 waive。",
            family: "waive (v.免除/放弃) | waiver (n.免责协议/弃权书) | refill (n.续杯) | crate (n.包装箱)。",
            details: "to 后面必须使用动词原形。waiver 是名词，不能在不定式符号 to 后面充当谓语动词。",
            cn: "作为善意的表示，客户服务代表同意免除滞纳处理费。",
            jp: "好意の印として、カスタマーサービス担当者は手数料の遅延処理料を免除する（waive）ことに同意しました。"
        }
    },
    {
        id: 2,
        target: "cubicle",
        category: "简单",
        stem: "Each marketing assistant was assigned a personal office ________ equipped with an adjustable desk and computer.",
        options: ["cubicle", "detour", "raffle", "rafting"],
        correct: "cubicle",
        explanations: {
            guide: "不定冠词与名词中心语。an office ________ 结构中，office 与 cubicle 组合构成 office cubicle，意为“办公室隔间工位”，选 cubicle。",
            family: "cubicle (n.隔间/小工作间) | detour (n.绕道) | raffle (n.抽奖) | rafting (n.漂流)。",
            details: "an office cubicle 属于现代办公环境的标准专有名词。detour、raffle 和 rafting 在语义上均不能与 office 构成合理的办公设施搭配。",
            cn: "每位营销助理都分配到了一个独立的办公室隔间工位，配备了升降桌和电脑。",
            jp: "各マーケティングアシスタントには、昇降式デスクとコンピューターが備え付けられた個別のオフィス用キュービクル（cubicle）が割り当てられました。"
        }
    },
    {
        id: 3,
        target: "detour",
        category: "简单",
        stem: "Because of emergency pipeline maintenance on Main Street, motorists were advised to take a brief ________.",
        options: ["detour", "detouring", "outreach", "redeem"],
        correct: "detour",
        explanations: {
            guide: "动宾固定搭配。take a detour 是交通播报与日常出行场景的核心搭配，意为“绕道而行/采取迂回路线”，选名词 detour。",
            family: "detour (n.绕道/迂回路/v.绕行) | detouring (动名词) | outreach (n.外展服务) | redeem (v.兑换)。",
            details: "take a detour 为固定成语短语。detouring 是动名词，受不定冠词 a 限制，此处应使用单数具象名词 detour。",
            cn: "由于主街进行紧急管道维修，驾驶人员被建议采取简短的绕行路线。",
            jp: "メインストリートでの緊急の配管工事のため、ドライバーは少し回り道・迂回路（detour）を通るよう勧められました。"
        }
    },
    {
        id: 4,
        target: "refill",
        category: "简单",
        stem: "Customers who purchase any specialty hot beverage are entitled to one complimentary ________ of regular coffee.",
        options: ["refill", "refilled", "stunning", "crate"],
        correct: "refill",
        explanations: {
            guide: "限定词与形容词后的名词中心语。one complimentary ________ 结构中需要接单数可数名词，complimentary refill 意为“免费续杯”，选 refill。",
            family: "refill (n.续杯/补充/v.续满) | refilled (v-ed形式) | stunning (adj.极好的) | crate (n.板条箱)。",
            details: "a complimentary refill 是餐饮与咖啡馆服务高频搭配。refilled 为过去分词或过去式，不能充当介词短语中的名词中心词。",
            cn: "凡购买任何特调热饮的顾客，均可享受一杯免费续杯的普通咖啡。",
            jp: "特製温飲料をご購入いただいたお客様は、レギュラーコーヒーの無料おかわり（refill）を1回受ける資格があります。"
        }
    },
    {
        id: 5,
        target: "crate",
        category: "简单",
        stem: "The fresh organic oranges were carefully packaged inside a reinforced wooden ________ to prevent bruising in transit.",
        options: ["crate", "crating", "waive", "cubicle"],
        correct: "crate",
        explanations: {
            guide: "容器名词与运输包装考点。a reinforced wooden ________ 结构中需要名词中心语，wooden crate 意为“木质包装板条箱”，选 crate。",
            family: "crate (n.板条箱/包装箱) | crating (n.装箱/动名词) | waive (v.免除) | cubicle (n.隔间)。",
            details: "a wooden crate 指装载水果货物的坚固木箱。crating 是装箱操作动作，不能被不定冠词 a 和形容词 reinforced wooden 修饰为具体容器。",
            cn: "新鲜有机橙被小心包装在加固的木质板条箱内，以防止运输途中压伤。",
            jp: "新鮮な有機オレンジは、輸送中の傷みを防ぐために強化木箱（crate）の中に慎重に梱包されました。"
        }
    },
    {
        id: 6,
        target: "raffle",
        category: "简单",
        stem: "Attendees who purchased a charity ________ ticket had the chance to win a luxury weekend getaway package.",
        options: ["raffle", "raffling", "rafting", "redeem"],
        correct: "raffle",
        explanations: {
            guide: "复合名词前置定语。charity raffle ticket 属于托业社交与慈善晚会极高频表达，意为“慈善抽奖券”，选名词 raffle。",
            family: "raffle (n.抽奖活动) | raffling (动名词) | rafting (n.漂流) | redeem (v.兑换)。",
            details: "a raffle ticket 专指抽彩票/抽奖券。rafting 是急流漂筏运动，与 ticket 组合在语义上不合慈善赢取假期的语境。",
            cn: "购买了慈善抽奖券的与会者有机会赢取豪华周末度假套餐。",
            jp: "チャリティー福引（raffle）券を購入した参加者には、豪華な週末旅行パッケージが当たるチャンスがありました。"
        }
    },
    {
        id: 7,
        target: "redeem",
        category: "中等",
        stem: "The updated customer loyalty program allows members to ________ accumulated reward points for exclusive travel merchandise.",
        options: ["redeem", "redemption", "waive", "crate"],
        correct: "redeem",
        explanations: {
            guide: "动词不定式与介词短语搭配。allow sb to 后面接动词原形，与后面的介词 for 连用构成 redeem points for merchandise（用积分兑换商品），选 redeem。",
            family: "redeem (v.兑换/兑现) | redemption (n.兑换) | waive (v.免除) | crate (n.板条箱)。",
            details: "redeem A for B 是会员积分兑换核心考点句型。redemption 是名词，不能跟在不定式符号 to 之后充当谓语动词原形。",
            cn: "更新后的客户忠诚度计划允许会员使用累计的奖励积分兑换专属旅行商品。",
            jp: "更新された顧客ロイヤルティプログラムにより、会員は蓄積された特典ポイントを限定の旅行商品と引き換える（redeem）ことができます。"
        }
    },
    {
        id: 8,
        target: "stunning",
        category: "中等",
        stem: "Located along the coastal cliffs, the newly opened conference resort boasts a ________ panoramic view of the Pacific Ocean.",
        options: ["stunning", "stunningly", "cubicle", "detour"],
        correct: "stunning",
        explanations: {
            guide: "形容词修饰名词。a ________ panoramic view 结构中需要形容词修饰 view，stunning view 属于托业酒店与旅游广告核心专有名词搭配，意为“令人赞叹的壮丽景致”，选 stunning。",
            family: "stunning (adj.极好的/令人惊叹的) | stunningly (adv.惊人地) | cubicle (n.隔间) | detour (n.绕道)。",
            details: "a stunning view 意为迷人景色。stunningly 是副词，不能直接修饰名词词组 panoramic view 作定语。",
            cn: "这座新开业的会议度假酒店坐落于海岸悬崖边，坐拥太平洋令人赞叹的壮丽全景。",
            jp: "海岸の崖沿いに位置する新しくオープンした会議リゾートは、太平洋の息をのむほど素晴らしい（stunning）パノラマの景色を誇っています。"
        }
    },
    {
        id: 9,
        target: "outreach",
        category: "中等",
        stem: "As part of its corporate social responsibility agenda, the bank increased funding for regional community ________ initiatives.",
        options: ["outreach", "outreached", "raffle", "refill"],
        correct: "outreach",
        explanations: {
            guide: "复合名词作定语与企业社会责任考点。community outreach initiatives 意为“社区外展服务/公益关怀倡议”，outreach 作定语修饰 initiatives，选 outreach。",
            family: "outreach (n.外展服务/拓展/adj.外展的) | outreached (v-ed形式) | raffle (n.抽奖) | refill (n.续杯)。",
            details: "community outreach 是企业 CSR 与公共关怀高频专属专有名词。outreached 是动词过去式，不能在此充当规范的定语成分。",
            cn: "作为其企业社会责任议程的一部分，该银行增加了对区域社区关怀拓展倡议的资助。",
            jp: "企業の社会的責任（CSR）アジェンダの一環として、その銀行は地域のコミュニティ支援活動（outreach）イニシアチブへの資金提供を増やしました。"
        }
    },
    {
        id: 10,
        target: "rafting",
        category: "中等",
        stem: "For their quarterly team-building retreat, company employees participated in a guided whitewater ________ excursion down the river.",
        options: ["rafting", "rafter", "waived", "redeemable"],
        correct: "rafting",
        explanations: {
            guide: "复合名词户外团建专有名词。whitewater rafting 属于托业听力 Part 1/Part 4 与团建通知核心固定词组，意为“白水激流漂筏”，选 rafting。",
            family: "rafting (n.漂流运动) | rafter (n.漂流者/椽) | waived (v-ed免除) | redeemable (adj.可兑换的)。",
            details: "a whitewater rafting excursion 指一次激流漂流远足旅行。rafter 指漂流的人（名词单数），无法与 excursion 构成活动类复合名词。",
            cn: "作为季度团队建设静修活动的一部分，公司员工参加了一次顺流而下的有向导激流漂流远足。",
            jp: "四半期ごとのチームビルディング研修の一環として、会社の従業員は川を下るガイド付きのホワイトウォーター・ラフティング（rafting）遠足に参加しました。"
        }
    },
    {
        id: 11,
        target: "waive",
        category: "中等",
        stem: "If the shipment is delayed by more than forty-eight hours, all standard delivery charges will be completely ________.",
        options: ["waived", "waive", "waiver", "crated"],
        correct: "waived",
        explanations: {
            guide: "被动语态谓语动词。will be completely ________ 结构中需要填入及物动词的过去分词，charges will be waived 意为“费用将被完全免除”，选 waived。",
            family: "waived (v-ed被免除的) | waive (v.免除) | waiver (n.豁免) | crated (v-ed装箱)。",
            details: "be waived 意为被豁免或免除收费。waive 为动词原形，waiver 为名词，均不能跟在 will be + 副词 后面构成被动语态。",
            cn: "如果货物延误超过四十八小时，所有标准送货费用将全部予以免除。",
            jp: "積送品が48時間以上遅れた場合、標準配送料は完全に免除（waived）されます。"
        }
    },
    {
        id: 12,
        target: "detour",
        category: "中等",
        stem: "Highway construction crews set up reflective orange signs directing daily commuters along an alternative ________.",
        options: ["detour", "detoured", "cubicle", "outreach"],
        correct: "detour",
        explanations: {
            guide: "形容词后的名词中心语。an alternative ________ 结构中，alternative（替代的/备选的）后面接单数名词，an alternative detour 意为“替代绕行路线”，选 detour。",
            family: "detour (n.绕道路线/迂回) | detoured (v-ed形式) | cubicle (n.隔间) | outreach (n.外展)。",
            details: "an alternative detour 指指示的一条替代绕行路线。detoured 为过去分词，不能在冠词 an 和形容词 alternative 后直接作中心名词。",
            cn: "公路施工队设立了橙色反光标志，引导日常通勤者沿着一条替代绕行路线行驶。",
            jp: "高速道路の建設クルーは、日々の通勤者を別の迂回路（detour）沿いに誘導するオレンジ色の反射標識を設置しました。"
        }
    },
    {
        id: 13,
        target: "redeem",
        category: "困难",
        stem: "Promotional travel vouchers distributed during the expo are ________ for round-trip flights booked before December 31.",
        options: ["redeemable", "redemption", "redeem", "waived"],
        correct: "redeemable",
        explanations: {
            guide: "系表结构与派生形容词考点。are 后面接形容词作表语，与介词 for 搭配，be redeemable for 属于托业促销票券核心高阶短语，意为“可兑换成……”，选派生形容词 redeemable。",
            family: "redeemable (adj.可兑换的/可兑现的) | redemption (n.兑换) | redeem (v.兑现) | waived (adj.已免除的)。",
            details: "vouchers are redeemable for flights 意为代金券可兑换机票。redemption 是名词，不能在系动词 are 后面充当主语补足语形容词；redeem 是动词原形。",
            cn: "博览会期间分发的促销旅行代金券可用于兑换 12 月 31 日之前预订的往返航班机票。",
            jp: "博覧会で配布された販促用旅行バウチャーは、12月31日までに予約された往復航空券と引き換え可能（redeemable）です。"
        }
    },
    {
        id: 14,
        target: "waive",
        category: "困难",
        stem: "Before taking part in the outdoor extreme sports training, every participant must sign a legal liability ________.",
        options: ["waiver", "waive", "waiving", "refill"],
        correct: "waiver",
        explanations: {
            guide: "商务法律核心复合名词搭配。sign a liability ________ 结构中，liability waiver 是托业合同与活动协议核心专有名词，意为“免责声明书/责任放弃协议”，选名词 waiver。",
            family: "waiver (n.放弃/免责声明书) | waive (v.免除/放弃) | waiving (动名词) | refill (n.续杯)。",
            details: "sign a liability waiver 意为签署免责协议书。waive 是动词，不能在不定冠词 a 和名词定语 liability 后作宾语中心名词。",
            cn: "在参加户外极限运动培训之前，每位参与者都必须签署一份法定免责声明书。",
            jp: "アウトドアエクストリームスポーツのトレーニングに参加する前に、すべての参加者は法的な責任免除証明書（waiver）に署名しなければなりません。"
        }
    },
    {
        id: 15,
        target: "stunning",
        category: "困难",
        stem: "The architectural firm received international acclaim for creating a ________ innovative and eco-friendly municipal headquarters.",
        options: ["stunningly", "stunning", "stunned", "crate"],
        correct: "stunningly",
        explanations: {
            guide: "副词修饰形容词并列结构。a ________ innovative and eco-friendly headquarters 结构中，空格修饰后面的形容词 innovative，需要副词作状语，stunningly innovative 意为“令人赞叹地创新/极富创新性的”，选副词 stunningly。",
            family: "stunningly (adv.令人赞叹地/绝妙地) | stunning (adj.极好的) | stunned (adj.目瞪口呆的) | crate (n.板条箱)。",
            details: "stunningly innovative 意为极具惊艳创新色彩。stunning 是形容词，通常不直接修饰另一个普通形容词 innovative 作程度修饰。",
            cn: "该建筑设计事务所因打造了一座极其新颖且环保的市政总部大楼而荣获国际赞誉。",
            jp: "その建築設計事務所は、息をのむほど（stunningly）革新的で環境に優しい自治体本部を設計したことで国際的な称賛を受けました。"
        }
    },
    {
        id: 16,
        target: "crate",
        category: "困难",
        stem: "The antique bronze sculptures were securely ________ in customized protective containers prior to international air transit.",
        options: ["crated", "crating", "crate", "raffled"],
        correct: "crated",
        explanations: {
            guide: "被动语态与动词高阶熟词生义。were securely ________ in 结构中，crate 作及物动词意为“将……装入箱中”，be securely crated 意为“被牢固地装箱打包”，选过去分词 crated。",
            family: "crated (v-ed装箱的/被装入箱的) | crating (动名词) | crate (v./n.装箱/板条箱) | raffled (v-ed抽奖的)。",
            details: "sculptures were crated 指雕塑品在空运前完成木箱加固装箱。crating 是现在分词，缺少被动含义，在此语法结构中不成立。",
            cn: "古董青铜雕塑在进行国际航空运输之前，被牢固地装箱打包在定制的防护容器内。",
            jp: "アンティークの青銅彫刻は、国際航空輸送の前に、特注の保護用コンテナにしっかりと木箱詰め（crated）されました。"
        }
    },
    {
        id: 17,
        target: "refill",
        category: "困难",
        stem: "To minimize corporate plastic waste, management provided each employee with a durable, ________ stainless-steel beverage bottle.",
        options: ["refillable", "refill", "refilled", "stunningly"],
        correct: "refillable",
        explanations: {
            guide: "派生形容词作定语修饰名词。a durable, ________ stainless-steel beverage bottle 结构中，需要形容词修饰 bottle，refillable 意为“可重复加装的/可循环续杯的”，选派生形容词 refillable。",
            family: "refillable (adj.可重复装填的/可续杯的) | refill (n./v.续杯) | refilled (adj.已装满的) | stunningly (adv.惊人地)。",
            details: "a refillable bottle 指环保可重复注水的杯子。refill 是名词或动词原形，无法与 durable 构成并列的形容词定语。",
            cn: "为最大限度减少公司的塑料废弃物，管理层为每位员工提供了一个耐用且可重复加注的不锈钢饮水瓶。",
            jp: "企業のプラスチック廃棄物を最小限に抑えるため、経営陣は各従業員に耐久性のある詰め替え可能・再利用可能（refillable）なステンレス製飲料ボトルを支給しました。"
        }
    },
    {
        id: 18,
        target: "outreach",
        category: "困难",
        stem: "The foundation expanded its educational ________ efforts by offering complimentary coding workshops in rural secondary schools.",
        options: ["outreach", "outreached", "cubicle", "rafting"],
        correct: "outreach",
        explanations: {
            guide: "复合名词前置定语与企业社会拓展。educational outreach efforts 属于托业非营利组织与企业社会拓展核心专有名词搭配，意为“教育公益外展举措/拓展服务努力”，选 outreach。",
            family: "outreach (n./adj.外展服务/公益拓展) | outreached (v-ed形式) | cubicle (n.工位) | rafting (n.漂流)。",
            details: "outreach efforts 专指深入基层社区开展的拓展关怀活动。outreached 是动词过去式，不能在此充当规范的名词性定语。",
            cn: "该基金会通过在乡村中学提供免费编程工作坊，扩大了其教育外展关怀举措。",
            jp: "その財団は、農村部の中学校で無料のプログラミングワークショップを提供することにより、教育支援・奉仕活動（outreach）の取り組みを拡大しました。"
        }
    }
];