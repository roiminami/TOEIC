// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data751-760.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "farewell",
        pos: "名/形",
        ipa: "/ˌferˈwel/",
        cn: "告别，辞别；告别的，送别的",
        jp: "別れ、送別；送別の、別れの",
        family: "farewells",
        tips: "HR与活动高频：farewell party/banquet/speech（欢送会/告别晚宴/离职演说），bid farewell to sb（向某人道别）。",
        desc: "They hosted a farewell party."
    },
    {
        word: "rural",
        pos: "形",
        ipa: "/ˈrʊrəl/",
        cn: "乡村的，农村的，田园的",
        jp: "田舎の、農村の、地方の",
        family: "ruralize / rurally",
        tips: "区域发展与公共政策高频：rural areas/communities/development（农村地区/乡村社区/乡村发展）。注意与 urban（城市的）对比。",
        desc: "The project supports rural communities."
    },
    {
        word: "nutrients",
        pos: "名",
        ipa: "/ˈnuːtriənts/",
        cn: "养分，营养素，营养物质（复数）",
        jp: "栄養素、養分（複数）",
        family: "nutrient / nutritious / nutrition / nutritional",
        tips: "农业与健康食品高频：soil/essential nutrients（土壤养分/必需营养素），rich in nutrients（富含营养物质）。",
        desc: "The soil is rich in essential nutrients."
    },
    {
        word: "conglomerate",
        pos: "名",
        ipa: "/kənˈɡlɑːmərət/",
        cn: "大型综合企业，企业集团",
        jp: "コングロマリット、複合企業",
        family: "conglomerates / conglomeration",
        tips: "商业并购与组织架构高频：multinational/media conglomerate（跨国集团/传媒巨头），conglomerate merger（混合并购）。",
        desc: "The conglomerate acquired three firms."
    },
    {
        word: "stabilize",
        pos: "動",
        ipa: "/ˈsteɪbəlaɪz/",
        cn: "（使）稳定，稳固",
        jp: "安定させる、安定する",
        family: "stabilization / stability / stable / stabilizer",
        tips: "金融与宏观经济高频：stabilize prices/currency/markets（稳定物价/汇率/市场行情）。",
        desc: "Measures helped stabilize market prices."
    },
    {
        word: "governors",
        pos: "名",
        ipa: "/ˈɡʌvərnərz/",
        cn: "理事，主管，行长，州长（复数）",
        jp: "理事、総裁、知事、評議員（複数）",
        family: "governor / govern / government / governance",
        tips: "金融监管与机构治理高频：central bank governors（央行行长们），board of governors（理事会/管理委员会）。",
        desc: "Central bank governors met today."
    },
    {
        word: "averted",
        pos: "動/形",
        ipa: "/əˈvɜːrtɪd/",
        cn: "避免，防止，化解（avert的过去式/分词）",
        jp: "（危機などを）回避した、防いだ",
        family: "avert / averting / avertable",
        tips: "危机公关与运营高频：averted a crisis/strike/disaster（化解危机/避免了罢工/防止了灾难）。",
        desc: "Quick action averted a financial crisis."
    },
    {
        word: "patrolled",
        pos: "動",
        ipa: "/pəˈtroʊld/",
        cn: "巡逻，巡查（patrol的过去式/分词）",
        jp: "巡回した、パトロールした",
        family: "patrol / patrolling / patroller",
        tips: "安保与设施管理高频：patrolled the premises/facility（巡查厂区/设施场地），heavily patrolled area（严密巡逻区域）。",
        desc: "Guards patrolled the facility overnight."
    },
    {
        word: "treaty",
        pos: "名",
        ipa: "/ˈtriːti/",
        cn: "条约，协定，公约",
        jp: "条約、協定",
        family: "treaties",
        tips: "国际贸易与法务高频：bilateral trade treaty（双边贸易条约），sign/ratify a treaty（签署/批准条约）。",
        desc: "Both nations signed a trade treaty."
    },
    {
        word: "demilitarized",
        pos: "形/動",
        ipa: "/ˌdiːˈmɪlɪtəraɪzd/",
        cn: "非军事化的，设立非军事区的",
        jp: "非武装化された",
        family: "demilitarize / demilitarization / military",
        tips: "国际新闻与边境走廊高频：demilitarized zone (DMZ)（非军事区），demilitarized border area（非军事化边境地带）。",
        desc: "Monitors entered the demilitarized zone."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "farewell",
        category: "简单",
        stem: "Staff members organized a special ________ luncheon to celebrate Mr. Kim's retirement after thirty years of dedicated service.",
        options: ["farewell", "rural", "conglomerate", "treaty"],
        correct: "farewell",
        explanations: {
            guide: "员工活动前置修饰形容词。a special ________ luncheon 结合庆祝员工工作三十年后光荣退休，选 farewell（告别的/欢送的）。",
            family: "farewell (adj.欢送的/n.告别) | rural (adj.乡村的) | conglomerate (n.企业集团) | treaty (n.条约)。",
            details: "farewell luncheon 意为欢送午宴。rural（农村的）、treaty（条约）均不能用来修饰为退休员工举办的送别午餐会。",
            cn: "员工们组织了一场特别的欢送午宴，以庆祝金先生在敬业奉献三十年后的光荣退休。",
            jp: "職員たちは、30年間の献身的な勤務を経て退職するキム氏を祝うため、特別な送別（farewell）昼食会を企画しました。"
        }
    },
    {
        id: 2,
        target: "rural",
        category: "简单",
        stem: "The telecommunications provider expanded high-speed fiber-optic internet coverage to underserved ________ communities.",
        options: ["rural", "averted", "stabilized", "patrolled"],
        correct: "rural",
        explanations: {
            guide: "地域修饰形容词。underserved ________ communities 结合电信公司向偏远欠发达地区扩展光纤宽带网络覆盖，选 rural（乡村的/农村的）。",
            family: "rural (adj.乡村的/农村的) | averted (v-ed避免的) | stabilized (adj.稳定的) | patrolled (v-ed巡逻的)。",
            details: "rural communities 意为乡村社区/农村地区。averted（化解的）、patrolled（巡逻的）无法作修饰社区地理属性的前置定语。",
            cn: "该电信供应商将高速光纤互联网覆盖范围扩大到了服务不足的乡村社区。",
            jp: "その通信事業者は、サービスが十分に行き届いていない農村（rural）コミュニティに高速光ファイバーインターネットの普及を拡大しました。"
        }
    },
    {
        id: 3,
        target: "nutrients",
        category: "简单",
        stem: "Agricultural scientists developed an organic fertilizer formula rich in essential soil ________.",
        options: ["nutrients", "conglomerates", "treaties", "governors"],
        correct: "nutrients",
        explanations: {
            guide: "农业土壤成分名词复数。rich in essential soil ________ 结合富含有机肥料成分以改善土壤质量，选 nutrients（养分/营养素）。",
            family: "nutrients (n.复数养分/营养素) | conglomerates (n.企业集团) | treaties (n.条约) | governors (n.理事/行长)。",
            details: "soil nutrients 意为土壤养分。conglomerates（复合企业）、treaties（条约）均非土壤所富含的有机营养物质。",
            cn: "农业科学家开发了一种富含土壤必需养分的有机肥料配方。",
            jp: "農業科学者たちは、土壌に不可欠な養分（nutrients）を豊富に含む有機肥料の配合を開発しました。"
        }
    },
    {
        id: 4,
        target: "conglomerate",
        category: "简单",
        stem: "The multinational media ________ acquired several independent publishing houses to expand its digital content portfolio.",
        options: ["conglomerate", "farewell", "nutrient", "treaty"],
        correct: "conglomerate",
        explanations: {
            guide: "商业实体名词主语。The multinational media ________ 结合收购多家独立出版社以扩大数字资产组合，选 conglomerate（大型综合企业/集团）。",
            family: "conglomerate (n.大型企业集团) | farewell (n.告别) | nutrient (n.养分) | treaty (n.条约)。",
            details: "media conglomerate 意为传媒集团/大型跨国传媒巨头。farewell（告别）、treaty（条约）均非进行商业股权收购的企业法人主体。",
            cn: "这家跨国媒体集团收购了数家独立出版社，以扩大其数字内容业务组合。",
            jp: "その多国籍メディアコングロマリット/複合企業（conglomerate）は、デジタルコンテンツのポートフォリオを拡大するために、いくつかの独立系出版社を買収しました。"
        }
    },
    {
        id: 5,
        target: "stabilize",
        category: "简单",
        stem: "The central bank intervened in foreign exchange markets to ________ the national currency against international volatility.",
        options: ["stabilize", "patrol", "avert", "demilitarize"],
        correct: "stabilize",
        explanations: {
            guide: "金融调控动词不定式。intervened in markets to 后面接动词原形，结合央行入市干预以维持本国货币“稳定”，选 stabilize。",
            family: "stabilize (v.使稳定/稳固) | patrol (v.巡逻) | avert (v.避免) | demilitarize (v.非军事化)。",
            details: "stabilize currency 属于宏观金融核心动宾短语，意为稳定汇率/平抑货币波动。patrol（巡逻）不符合外汇市场操作语义。",
            cn: "中央银行入市干预外汇市场，以稳定本国货币并抵御国际市场波动。",
            jp: "中央銀行は、国際的な変動に対して自国通貨を安定させる（stabilize）ため、外国為替市場に介入しました。"
        }
    },
    {
        id: 6,
        target: "treaty",
        category: "简单",
        stem: "Delegates from both nations gathered in Geneva to sign a landmark bilateral trade ________.",
        options: ["treaty", "nutrient", "farewell", "conglomerate"],
        correct: "treaty",
        explanations: {
            guide: "国际法务名词考点。sign a landmark bilateral trade ________ 结合两国代表签署标志性双边贸易法律协定，选 treaty（条约/协定）。",
            family: "treaty (n.条约/协定) | nutrient (n.养分) | farewell (n.告别) | conglomerate (n.企业集团)。",
            details: "bilateral trade treaty 意为双边贸易条约。nutrient（养分）、farewell（告别）均非国家间代表在日内瓦缔结的法律条约。",
            cn: "两国代表齐聚日内瓦，签署了一项具有里程碑意义的双边贸易条约。",
            jp: "両国の代表団はジュネーブに集まり、画期的な二国間貿易条約（treaty）に署名しました。"
        }
    },
    {
        id: 7,
        target: "averted",
        category: "中等",
        stem: "Thanks to prompt mediation by government labor officials, the threatened railway transit strike was successfully ________.",
        options: ["averted", "patrolled", "stabilized", "demilitarized"],
        correct: "averted",
        explanations: {
            guide: "危机化解被动语态分词。the threatened strike was successfully ________ 结合政府劳动官员及时调解化解了铁路大罢工，选 averted（避免了/化解了）。",
            family: "averted (v-ed避免的/化解的) | patrolled (v-ed巡视的) | stabilized (v-ed稳固的) | demilitarized (v-ed非军事化的)。",
            details: "avert a strike 属于劳资关系高频固定搭配，意为避免/化解罢工。patrolled（巡逻）、demilitarized（非军事化）动宾不通。",
            cn: "多亏了政府劳工官员的迅速调解，一场迫在眉睫的铁路交通大罢工得以成功化解。",
            jp: "政府の労働担当官による迅速な調停のおかげで、懸念されていた鉄道ストライキは無事に回避されました（averted）。"
        }
    },
    {
        id: 8,
        target: "governors",
        category: "中等",
        stem: "The hospital foundation's board of ________ approved the multi-million dollar annual operating budget during their quarterly meeting.",
        options: ["governors", "nutrients", "treaties", "conglomerates"],
        correct: "governors",
        explanations: {
            guide: "机构管理层固定专有名词。board of ________ 结合季度会议审议通过医院基金会数百万美元的年度运营预算，选复数 governors（理事/管理委员）。",
            family: "governors (n.复数理事/主管/州长) | nutrients (n.养分) | treaties (n.条约) | conglomerates (n.企业集团)。",
            details: "board of governors 专指（基金会、银行、大学等机构的）理事会/管委会。nutrients（养分）、treaties（条约）不能与 board of 构成决策管理层机构。",
            cn: "该医院基金会的理事会在其季度会议上批准了数百万美元的年度运营预算。",
            jp: "病院財団の理事会（board of governors）は、四半期会議において数百万ドル規模の年次運営予算を承認しました。"
        }
    },
    {
        id: 9,
        target: "patrolled",
        category: "中等",
        stem: "Uniformed security personnel ________ the corporate research campus throughout the night to ensure sensitive facilities remained secure.",
        options: ["patrolled", "averted", "stabilized", "farewelled"],
        correct: "patrolled",
        explanations: {
            guide: "安保防卫动词过去式。security personnel ________ the campus throughout the night 结合全夜巡查以确保机密设施安全，选 patrolled（巡逻/巡查）。",
            family: "patrolled (v-ed巡逻/巡查) | averted (v-ed避免) | stabilized (v-ed稳定) | farewelled (非规范过去式)。",
            details: "security patrolled the campus 意为安保人员巡逻园区。averted（避免了）、stabilized（稳定了）均不能充当安保人员在园区彻夜巡逻的谓语动作。",
            cn: "身着制服的安保人员整夜在企业研发园区内巡逻，以确保涉密设施安全无虞。",
            jp: "制服を着た警備員が夜間を通じて企業の研究キャンパスを巡回し（patrolled）、機密施設の安全が確保されていることを確認しました。"
        }
    },
    {
        id: 10,
        target: "demilitarized",
        category: "中等",
        stem: "International peacekeeping monitors were stationed along the ________ border zone to verify strict compliance with the ceasefire pact.",
        options: ["demilitarized", "rural", "conglomerated", "nutritious"],
        correct: "demilitarized",
        explanations: {
            guide: "边境属性修饰形容词。the ________ border zone 结合维和监督员驻扎以监督停火条约执行，选 demilitarized（非军事化的/非武装的）。",
            family: "demilitarized (adj.非军事化的) | rural (adj.乡村的) | conglomerated (adj.聚结的) | nutritious (adj.有营养的)。",
            details: "demilitarized border zone 专指非军事化边境地带。rural（乡村的）、nutritious（有营养的）均无法表达根据国际停火条约设立的非武装中立区。",
            cn: "国际维和监督员驻扎在非军事化边境地带，以核查停火协议的严格遵守情况。",
            jp: "国際平和維持監視団は、停戦協定の厳格な順守を検証するために、非武装化された（demilitarized）国境地帯に駐留しました。"
        }
    },
    {
        id: 11,
        target: "farewell",
        category: "中等",
        stem: "During her emotional ________ address, the departing executive director thanked her colleagues for their steadfast support.",
        options: ["farewell", "conglomerate", "treaty", "nutrient"],
        correct: "farewell",
        explanations: {
            guide: "演说性质前置形容词。her emotional ________ address 结合即将离任的执行总监向同事致谢，选 farewell（告别的/离职的）。",
            family: "farewell (adj.告别的/n.辞别) | conglomerate (n.集团) | treaty (n.条约) | nutrient (n.养分)。",
            details: "farewell address 意为告别演说/离别致辞。conglomerate（企业集团）、treaty（条约）均不能充当离职演说的修饰定语。",
            cn: "在情真意切的离职告别演说中，即将离任的执行总监感谢了同事们坚定不移的支持。",
            jp: "感情のこもった送別/退任（farewell）演説の中で、退任する専務理事は同僚たちの確固たる支援に感謝の意を表しました。"
        }
    },
    {
        id: 12,
        target: "rural",
        category: "中等",
        stem: "Government development grants were allocated to upgrade clean drinking water infrastructure in remote ________ districts.",
        options: ["rural", "demilitarized", "averted", "stabilized"],
        correct: "rural",
        explanations: {
            guide: "区域规划修饰形容词。in remote ________ districts 结合政府拨款改造偏远地区的洁净饮用水基础设施，选 rural（乡村的/农村的）。",
            family: "rural (adj.乡村的/偏僻农庄的) | demilitarized (adj.非军事化的) | averted (v-ed避免的) | stabilized (v-ed稳定的)。",
            details: "remote rural districts 意为偏远乡村地区。demilitarized（非军事化的）与民生饮水改造拨款常规语境不符。",
            cn: "政府拨付了发展专项赠款，用于升级偏远乡村地区的清洁饮用水基础设施。",
            jp: "遠隔地の農村（rural）地区における清潔な飲料水インフラを改修するために、政府の開発助成金が配分されました。"
        }
    },
    {
        id: 13,
        target: "stabilize",
        category: "困难",
        stem: "The municipal government implemented emergency price controls to promote fiscal ________ during the economic downturn.",
        options: ["stability", "stabilize", "stabilizing", "stabilizer"],
        correct: "stability",
        explanations: {
            guide: "派生抽象名词作及物动词宾语。promote fiscal ________ 结构中，形容词 fiscal（财政的）后面接抽象名词形式 stability（稳定性/稳固）。",
            family: "stability (n.稳定性/稳定) | stabilize (v.使稳定) | stabilizing (v-ing/adj.起稳定作用的) | stabilizer (n.稳定器)。",
            details: "fiscal stability 属于宏观经济核心专有名词，意为财政稳定性。stabilize 是动词原形，不能直接作及物动词 promote 的宾语中心语。",
            cn: "市政府在经济低迷期间实施了紧急物价管控，以促进财政稳定。",
            jp: "市当局は、景気後退期における財政の安定性（stability）を促進するために緊急の価格統制を実施しました。"
        }
    },
    {
        id: 14,
        target: "nutrients",
        category: "困难",
        stem: "Dietary experts emphasize the importance of consuming a well-balanced and ________ breakfast to maintain workplace productivity.",
        options: ["nutritious", "nutrients", "nutrition", "nutritional"],
        correct: "nutritious",
        explanations: {
            guide: "派生形容词作定语修饰名词。a well-balanced and ________ breakfast 结构中，与形容词 well-balanced 并列修饰 breakfast，选形容词 nutritious（富有营养的/滋补的）。",
            family: "nutritious (adj.富有营养的/滋补的) | nutrients (n.养分复数) | nutrition (n.营养学/营养) | nutritional (adj.营养方面的)。",
            details: "a nutritious breakfast 意为营养丰富的早餐。nutrients 是名词，nutritional 通常修饰价值/标签（nutritional value/label），修饰食物本身营养丰富时规范选用 nutritious。",
            cn: "膳食专家强调摄入均衡且富有营养的早餐以保持职场工作效率的重要性。",
            jp: "栄養の専門家は、職場での生産性を維持するために、バランスが取れて栄養価の高い（nutritious）朝食を摂ることの重要性を強調しています。"
        }
    },
    {
        id: 15,
        target: "averted",
        category: "困难",
        stem: "Due to the maintenance team's rapid emergency response, a catastrophic server breakdown was entirely ________ before customer data was affected.",
        options: ["averted", "patrolled", "governed", "treatied"],
        correct: "averted",
        explanations: {
            guide: "被动语态过去分词考点。a breakdown was entirely ________ before... 结合运维团队迅速响应，使得灾难性服务器崩溃被“完全避免/化解”，选 averted。",
            family: "averted (v-ed避免的/化解的) | patrolled (v-ed巡逻的) | governed (v-ed管理的) | treatied (无此词)。",
            details: "breakdown was averted 意为故障被成功化解避免。patrolled（巡逻）与 governed（治理）均无法作为机器崩溃被化解消除的被动语态分词。",
            cn: "由于维修团队迅速的应急响应，一场灾难性的服务器崩溃在影响客户数据之前被完全化解避免了。",
            jp: "保守チームの迅速な緊急対応により、顧客データに影響が及ぶ前に壊滅的なサーバーダウンが完全に回避されました（averted）。"
        }
    },
    {
        id: 16,
        target: "governors",
        category: "困难",
        stem: "The international financial regulatory agency was established to ensure transparent corporate ________ across regional banking sectors.",
        options: ["governance", "governors", "governed", "governing"],
        correct: "governance",
        explanations: {
            guide: "派生抽象专有名词作宾语。ensure transparent corporate ________ 结构中，形容词 corporate 后面接抽象名词形式 governance（治理/管治），选 governance。",
            family: "governance (n.治理/管治/管理) | governors (n.理事复数) | governed (v-ed受管制的) | governing (adj.执政的)。",
            details: "corporate governance 属于商业金融最高频专有名词，意为公司治理。governors 指管理人员/理事个人，不能与 transparent corporate 搭配指代治理体系。",
            cn: "设立该国际金融监管机构旨在确保各区域银行业实行透明的公司治理。",
            jp: "その国際金融規制機関は、地域の銀行セクター全体で透明性のあるコーポレートガバナンス/企業統治（governance）を確保するために設立されました。"
        }
    },
    {
        id: 17,
        target: "conglomerate",
        category: "困难",
        stem: "Over the past decade, the rapid ________ of disparate commercial brands created a unified global retail enterprise.",
        options: ["conglomeration", "conglomerate", "governors", "treaties"],
        correct: "conglomeration",
        explanations: {
            guide: "派生抽象名词作主语。The rapid ________ of disparate brands 结构中，在定冠词 the 和形容词 rapid 后面接抽象名词形式 conglomeration（聚合/聚结/集团化形成过程）。",
            family: "conglomeration (n.混合聚结/企业集团化) | conglomerate (n.集团/adj.聚结的) | governors (n.理事) | treaties (n.条约)。",
            details: "the conglomeration of brands 意为不同品牌的聚集整合。conglomerate 指已成型的集团企业实体，表示多品牌汇聚重组的过程时使用派生抽象名词 conglomeration。",
            cn: "在过去的十年里，不同商业品牌的迅速整合聚结创造了一家统一的全球零售巨头企业。",
            jp: "過去10年間において、異種の商業ブランドの急速なコングロマリット化/統合（conglomeration）が、統合された世界的な小売企業を生み出しました。"
        }
    },
    {
        id: 18,
        target: "demilitarized",
        category: "困难",
        stem: "Under the provisions of the international peace accord, both nations commenced the complete ________ of the border corridor.",
        options: ["demilitarization", "demilitarized", "demilitarize", "demilitarizing"],
        correct: "demilitarization",
        explanations: {
            guide: "派生抽象名词作宾语。commenced the complete ________ of the border 结构中，在定冠词 the 和形容词 complete 后面接抽象名词形式 demilitarization（非军事化/解除武装）。",
            family: "demilitarization (n.非军事化/非武装化) | demilitarized (adj.非军事化的) | demilitarize (v.解除武装) | demilitarizing (v-ing)。",
            details: "demilitarization of the border 意为边境走廊的非军事化进程。demilitarized 是形容词，demilitarize 是动词原形，均不能作及物动词 commenced 的宾语中心语。",
            cn: "根据国际和平协议的条款规定，两国开始了边境走廊的全面非军事化进程。",
            jp: "国際和平協定の条項に基づき、両国は国境回廊の完全な非武装化（demilitarization）に着手しました。"
        }
    }
];