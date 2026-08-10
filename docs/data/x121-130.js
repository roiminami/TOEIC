// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data261-270.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "deck",
        pos: "名",
        ipa: "/dek/",
        cn: "露台，甲板，木平台",
        jp: "デッキ、甲板、テラス",
        family: "deckchair / decking",
        tips: "Part 1 建筑与船只场景高频：outdoor deck（户外露台），ship's deck（船甲板）。",
        desc: "They sit on the deck."
    },
    {
        word: "novice",
        pos: "名/形",
        ipa: "/ˈnɑːvɪs/",
        cn: "新手，初学者；初学者的",
        jp: "初心者、駆け出し",
        family: "novitiate",
        tips: "培训与技能学习高频：novice programmer/skier（新手程序员/初学者滑雪者）。",
        desc: "He is a novice skier."
    },
    {
        word: "ample",
        pos: "形",
        ipa: "/ˈæmpl/",
        cn: "充裕的，充足的",
        jp: "十分な、豊富な",
        family: "amply / amplify",
        tips: "商务设施与时间安排高频：ample space/time/parking（充足的空间/时间/停车位）。",
        desc: "There is ample parking space."
    },
    {
        word: "paddle",
        pos: "名/動",
        ipa: "/ˈpædl/",
        cn: "桨；划桨，划划艇",
        jp: "パドル、オール；（舟を）漕ぐ",
        family: "paddling / paddled",
        tips: "Part 1 户外水上活动高频：paddle a kayak（划皮划艇），wooden paddle（木桨）。",
        desc: "She can paddle a kayak."
    },
    {
        word: "prescription",
        pos: "名",
        ipa: "/prɪˈskrɪpʃn/",
        cn: "处方，药方；处方药",
        jp: "処方箋、処方薬",
        family: "prescribe / prescriptive",
        tips: "医疗与健康高频：doctor's prescription（医生处方），fill a prescription（按处方抓药）。",
        desc: "The doctor wrote a prescription."
    },
    {
        word: "intact",
        pos: "形",
        ipa: "/ɪnˈtækt/",
        cn: "完好无损的，完整的",
        jp: "損なわれていない、完全な",
        family: "intactness",
        tips: "物流运输与保护高频：remain intact（保持完好无损），arrive intact（完好送达）。",
        desc: "The package arrived intact."
    },
    {
        word: "reception",
        pos: "名",
        ipa: "/rɪˈsepʃn/",
        cn: "接待，招待会；接收，信号",
        jp: "受付、歓迎会；受信",
        family: "receive / receptionist / receptive",
        tips: "多义词高频：reception desk（前台接待处），wedding reception（婚宴/招待会），poor reception（信号不佳）。",
        desc: "They attended the wedding reception."
    },
    {
        word: "malfunction",
        pos: "名/動",
        ipa: "/ˌmælˈfʌŋkʃn/",
        cn: "故障，失灵；发生故障",
        jp: "故障、不具合；故障する",
        family: "malfunctioning / malfunctioned",
        tips: "设备维护与IT高频：equipment malfunction（设备故障），system malfunction（系统失灵）。",
        desc: "The machine had a malfunction."
    },
    {
        word: "tow",
        pos: "動/名",
        ipa: "/toʊ/",
        cn: "拖，拉，牵引；拖车",
        jp: "（車などを）引っぱる、牽引する",
        family: "towing / towed / tow truck",
        tips: "交通与道路服务高频：tow away a car（把车拖走），tow truck（拖车）。",
        desc: "The truck will tow the car."
    },
    {
        word: "park ranger",
        pos: "名",
        ipa: "/pɑːrk ˈreɪndʒər/",
        cn: "护林员，公园管理员",
        jp: "公園管理官、レンジャー",
        family: "ranger / park",
        tips: "Part 1 & 景区服务高频：guided by a park ranger（由公园管理员带队）。",
        desc: "The park ranger guided us."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "prescription",
        category: "简单",
        stem: "The pharmacist filled the doctor's ________ for the patient's allergy medication.",
        options: ["prescription", "prescribe", "reception", "malfunction"],
        correct: "prescription",
        explanations: {
            guide: "医疗场景名词。filled the doctor's ________ 表达按医生的“处方”抓药，选 prescription。",
            family: "prescription (n.处方) | prescribe (v.开处方) | reception (n.接待) | malfunction (n.故障)。",
            details: "doctor's prescription 指医生的处方。prescribe 是动词，不能跟在名词所有格 doctor's 后面。",
            cn: "药剂师按照医生的处方为患者配了抗过敏药物。",
            jp: "薬剤師は患者のアレルギー治療薬のため、医師の処方箋（prescription）に従って調剤しました。"
        }
    },
    {
        id: 2,
        target: "tow",
        category: "简单",
        stem: "The driver called a service company to ________ his broken vehicle to the repair shop.",
        options: ["tow", "towing", "paddle", "novice"],
        correct: "tow",
        explanations: {
            guide: "动词不定式考点。called a service company to 后面接动词原形，表达将故障车“拖”到修理厂，选 tow。",
            family: "tow (v.拖/牵引) | towing (n./v-ing) | paddle (v.划桨) | novice (n.新手)。",
            details: "to tow his vehicle 意为拖走他的车辆。towing 是分词/动名词，不能跟在不定式符号 to 后面。",
            cn: "司机给救援公司打电话，把故障车辆拖到修理厂。",
            jp: "ドライバーは故障した車両を修理工場まで牽引する（tow）ため、ロードサービス会社に電話しました。"
        }
    },
    {
        id: 3,
        target: "deck",
        category: "简单",
        stem: "Hotel guests can relax on the outdoor wooden ________ while watching the sunset over the ocean.",
        options: ["deck", "park ranger", "prescription", "malfunction"],
        correct: "deck",
        explanations: {
            guide: "建筑户外设施名词。outdoor wooden ________ 结合在上面放松赏落日，设施选 deck（露台/木平台）。",
            family: "deck (n.露台/甲板) | park ranger (n.护林员) | prescription (n.处方) | malfunction (n.故障)。",
            details: "outdoor wooden deck 指户外木质露台。park ranger（护林员）、prescription（处方）均非建筑设施。",
            cn: "酒店客人可以在户外的木制露台上放松身心，同时观赏海上的落日。",
            jp: "ホテルのゲストは、海に沈む夕日を眺めながら屋外の木製デッキ（deck）でくつろぐことができます。"
        }
    },
    {
        id: 4,
        target: "novice",
        category: "简单",
        stem: "The coding workshop is designed specifically for ________ programmers with no prior experience.",
        options: ["novice", "ample", "intact", "reception"],
        correct: "novice",
        explanations: {
            guide: "修饰人的名词/形容词。________ programmers 结合后文没有经验（no prior experience），选 novice（新手/初学者）。",
            family: "novice (n./adj.新手/初学者的) | ample (adj.充裕的) | intact (adj.完好的) | reception (n.接待)。",
            details: "novice programmers 意为新手程序员。ample（充裕的）、intact（完好无损的）不能用来修饰程序员人。",
            cn: "该编程工作坊专门为没有任何经验的新手程序员设计。",
            jp: "プログラミングワークショップは、経験のない初心者（novice）プログラマー向けに特別に設計されています。"
        }
    },
    {
        id: 5,
        target: "park ranger",
        category: "简单",
        stem: "The ________ reminded hikers to stay on the marked trails to protect local wildlife.",
        options: ["park ranger", "novice", "prescription", "deck"],
        correct: "park ranger",
        explanations: {
            guide: "职业人物名词考点。提醒徒步者走指定小路（reminded hikers）的主语，选 park ranger（公园管理员/护林员）。",
            family: "park ranger (n.公园管理员) | novice (n.新手) | prescription (n.处方) | deck (n.露台)。",
            details: "park ranger 职责包括提醒游客遵守保护野生动物的规程。prescription（处方）、deck（露台）非指人的主语。",
            cn: "公园管理员提醒徒步旅行者留在有标记的小路上，以保护当地的野生动物。",
            jp: "公園管理官（park ranger）は、地元の野生動物を保護するため標識のある小道を外れないようハイカーに注意を促しました。"
        }
    },
    {
        id: 6,
        target: "ample",
        category: "简单",
        stem: "The new conference facility provides ________ parking for over five hundred vehicles.",
        options: ["ample", "amply", "intact", "malfunction"],
        correct: "ample",
        explanations: {
            guide: "形容词作前置定语。修饰 parking（停车位），表达提供“充裕的/足够的”停车位，选 ample。",
            family: "ample (adj.充裕的/充足的) | amply (adv.充裕地) | intact (adj.完好的) | malfunction (n.故障)。",
            details: "ample parking 属于托业高频短语，意为充裕的停车位。amply 是副词，不能直接修饰名词 parking。",
            cn: "新建的会议设施为 500 多辆汽车提供了充裕的停车位。",
            jp: "新しい会議施設は、500台以上の車両に十分な（ample）駐車場を提供しています。"
        }
    },
    {
        id: 7,
        target: "intact",
        category: "中等",
        stem: "Despite the rough weather during transit, the fragile glass vase arrived completely ________.",
        options: ["intact", "ample", "novice", "prescription"],
        correct: "intact",
        explanations: {
            guide: "表语形容词考点。arrived completely ________ 表达货物完好无损地送达，选 intact（完好无损的）。",
            family: "intact (adj.完好无损的) | ample (adj.充裕的) | novice (n.新手) | prescription (n.处方)。",
            details: "arrived intact 意为完好无损地到达。ample（充裕的）、novice（新手）在此处句意不通。",
            cn: "尽管运输途中天气恶劣，脆弱的玻璃花瓶到达时依然完好无损。",
            jp: "输送中の悪天候にもかかわらず、壊れやすいガラスの花瓶は完全に無傷（intact）で届きました。"
        }
    },
    {
        id: 8,
        target: "malfunction",
        category: "中等",
        stem: "Operations were temporarily halted due to an unexpected hardware ________ in the assembly line.",
        options: ["malfunction", "malfunctioning", "reception", "tow"],
        correct: "malfunction",
        explanations: {
            guide: "设备故障名词考点。hardware ________ 属于工业生产高频词组，意为“硬件故障/失灵”，选 malfunction。",
            family: "malfunction (n.故障) | malfunctioning (v-ing/adj.) | reception (n.接待) | tow (v.拖)。",
            details: "hardware malfunction 指硬件故障。malfunctioning 是分词，在此处不如名词 malfunction 作中心语规范。",
            cn: "由于装配线突发硬件故障，生产运营被暂时中断。",
            jp: "組み立てラインでの予期せぬハードウェアの故障（malfunction）により、操業が一時停止されました。"
        }
    },
    {
        id: 9,
        target: "paddle",
        category: "中等",
        stem: "Each participant in the canoeing race was instructed to hold their ________ securely with both hands.",
        options: ["paddle", "paddling", "tow", "deck"],
        correct: "paddle",
        explanations: {
            guide: "水上运动具象名词。hold their ________ 指用双手紧握划皮划艇的“桨”，选 paddle。",
            family: "paddle (n.桨/v.划桨) | paddling (n.划桨动作) | tow (v.拖拉) | deck (n.甲板)。",
            details: "hold their paddle 意为握住他们的桨。paddling 是划桨这一动作，不能作具体手持工具宾语。",
            cn: "划艇比赛中的每位参赛者都被指示用双手紧握划桨。",
            jp: "カヌーレースの各参加者は、両手でパドル（paddle）をしっかり握るよう指示されました。"
        }
    },
    {
        id: 10,
        target: "reception",
        category: "中等",
        stem: "Visitors are requested to register their names at the front desk in the main ________ lobby.",
        options: ["reception", "receptionist", "prescription", "novice"],
        correct: "reception",
        explanations: {
            guide: "接待场所复合名词。main ________ lobby 表达大楼的“主接待大厅”，选 reception作定语。",
            family: "reception (n.接待/招待处) | receptionist (n.接待员) | prescription (n.处方) | novice (n.新手)。",
            details: "reception lobby 意为接待大厅。receptionist 指接待员个人，不修饰建筑物公共大厅（lobby）。",
            cn: "请访客在主接待大厅的前台登记姓名。",
            jp: "来客はメインの受付（reception）ロビーのフロントデスクで名前を登録するよう求められています。"
        }
    },
    {
        id: 11,
        target: "tow",
        category: "中等",
        stem: "Illegal parking in front of the fire hydrant will result in immediate ________ of the automobile.",
        options: ["towing", "tow", "malfunction", "paddle"],
        correct: "towing",
        explanations: {
            guide: "动名词/派生名词考点。result in immediate ________ of... 结构中，在形容词后面接动名词/名词形式 towing（拖车/拖走）。",
            family: "towing (n.拖车/拖走) | tow (v.拖) | malfunction (n.故障) | paddle (n.桨)。",
            details: "towing of the automobile 意为汽车被拖走。tow 为动词原形，不能跟在形容词 immediate 后面作介词宾语。",
            cn: "在消防栓前违章停车将导致汽车被立即拖走。",
            jp: "消火栓の前での不法駐車は、自動車の即座の牽引（towing）につながります。"
        }
    },
    {
        id: 12,
        target: "ample",
        category: "中等",
        stem: "The organizers allowed ________ time for participants to ask questions after the presentation.",
        options: ["ample", "amply", "intact", "novice"],
        correct: "ample",
        explanations: {
            guide: "形容词修饰抽象名词。allowed ________ time 结构中，修饰不可数名词 time，表达留出“充裕的/足够的”时间，选 ample。",
            family: "ample (adj.充裕的) | amply (adv.充裕地) | intact (adj.完好的) | novice (n.新手)。",
            details: "allowed ample time 意为留出了充裕的时间。amply 是副词，不能修饰名词 time。",
            cn: "组织者在演示结束后为与会者留出了充裕的时间提问。",
            jp: "主催者はプレゼンテーションの後、参加者が質問できるように十分な（ample）時間を確保しました。"
        }
    },
    {
        id: 13,
        target: "prescription",
        category: "困难",
        stem: "Insurance regulations dictate that patients must present a valid medical ________ to claim reimbursement for specialized drugs.",
        options: ["prescription", "prescriptive", "reception", "malfunction"],
        correct: "prescription",
        explanations: {
            guide: "保险与医疗高阶名词考点。valid medical ________ 表达报销特殊药物费用所需的有效医疗“处方”，选 prescription。",
            family: "prescription (n.处方) | prescriptive (adj.规范的/指令性的) | reception (n.接待) | malfunction (n.故障)。",
            details: "medical prescription 指医生开具的处方。prescriptive 是形容词，不能在形容词 medical 之后作宾语中心语。",
            cn: "保险法规规定，患者必须出示有效的医疗处方才能报销特殊药物的费用。",
            jp: "保険の規定により、患者は特殊な薬の払い戻しを請求するために有効な医療処方箋（prescription）を提示しなければなりません。"
        }
    },
    {
        id: 14,
        target: "malfunction",
        category: "困难",
        stem: "Technical support confirmed that the primary server was ________ due to an electrical power surge.",
        options: ["malfunctioning", "malfunction", "towing", "intact"],
        correct: "malfunctioning",
        explanations: {
            guide: "动词进行时与状态描述。was ________ 表达服务器当时正发生“故障/运行失灵”，用现在分词 malfunctioning。",
            family: "malfunctioning (v-ing发生故障的) | malfunction (n./v.原形) | towing (n.拖车) | intact (adj.完好的)。",
            details: "was malfunctioning 意为当时正在发生故障。malfunction 是原形动词，不能直接跟随在 was 后面构成进行时。",
            cn: "技术支持确认主服务器因电力浪涌而发生故障。",
            jp: "テクニカルサポートは、電力サージのためメインサーバーが機能不全（malfunctioning）に陥っていたことを確認しました。"
        }
    },
    {
        id: 15,
        target: "deck",
        category: "困难",
        stem: "Commercial cruise liners feature specialized observation ________ that afford panoramic views of the sea.",
        options: ["decks", "decking", "park rangers", "prescriptions"],
        correct: "decks",
        explanations: {
            guide: "复数名物考点。observation ________ 指游轮上的“观景甲板”，复数表述选 decks。",
            family: "decks (n.复数甲板) | decking (n.甲板铺设材质) | park rangers (n.护林员) | prescriptions (n.处方)。",
            details: "observation decks 意为观景甲板。decking 是指建材（板材/铺设材质），非指供游客观景的船舶甲板设施主体。",
            cn: "商业大型邮轮配有专门的观景甲板，可将大海的全景尽收眼底。",
            jp: "商用クルーズ船には、海のパノラマの景色を提供する専門の展望デッキ（decks）が備わっています。"
        }
    },
    {
        id: 16,
        target: "reception",
        category: "困难",
        stem: "Due to atmospheric interference, mobile phone ________ was severely limited in the remote mountain valley.",
        options: ["reception", "receptive", "prescription", "malfunction"],
        correct: "reception",
        explanations: {
            guide: "一词多义与通讯考点。mobile phone ________ 指手机“信号接收/信号”，选 reception。",
            family: "reception (n.信号/接收/接待) | receptive (adj.善于接受的) | prescription (n.处方) | malfunction (n.故障)。",
            details: "mobile phone reception 指手机信号。receptive 是形容词（接受度高的），不能作主语名词。",
            cn: "由于大气干扰，远离喧嚣的山谷中手机信号严重受限。",
            jp: "大気干渉のため、僻地の山谷では携帯電話の電波受信（reception）が非常に制限されていました。"
        }
    },
    {
        id: 17,
        target: "ample",
        category: "困难",
        stem: "The research study was ________ funded by corporate sponsors, allowing the team to procure state-of-the-art laboratory equipment.",
        options: ["amply", "ample", "intact", "novice"],
        correct: "amply",
        explanations: {
            guide: "副词修饰被动语态动词。was ________ funded 结构中，用副词修饰过去分词 funded，表达“充裕地/极其充分地”资助，选 amply。",
            family: "amply (adv.充裕地/充分地) | ample (adj.充裕的) | intact (adj.完好的) | novice (n.新手)。",
            details: "was amply funded 意为获得了充分资助。ample 是形容词，不能直接修饰动词 funded。",
            cn: "该研究项目获得了企业赞助商的充分资助，使团队能够采购最先进的实验室设备。",
            jp: "その研究調査は企業スポンサーから十分（amply）に資金提供を受け、チームは最先端の実験設備を調達できました。"
        }
    },
    {
        id: 18,
        target: "paddle",
        category: "困难",
        stem: "The ecotourism agency offers guided ________ excursions along the scenic coastal waterways for small groups.",
        options: ["paddling", "paddle", "towing", "decking"],
        correct: "paddling",
        explanations: {
            guide: "动名词/分词作前置定语。________ excursions 指“划桨/划艇探险之旅”，选用动名词/分词形式 paddling 作定语。",
            family: "paddling (n./v-ing划桨/划艇活动) | paddle (n./v.桨/划桨) | towing (n.拖车) | decking (n.甲板建材)。",
            details: "paddling excursions 意为划浆/划艇游览远足活动。paddle 是动词原形/单数名词，修饰复数活动 excursions 时使用 paddling 更地道规范。",
            cn: "这家生态旅游机构为小团体提供沿着风景秀丽的沿海水道进行的带导游划艇探险之旅。",
            jp: "エコツーリズム代理店は、景色の良い沿岸水路沿いの小グループ向けガイド付きパドリング（paddling）ツアーを提供しています。"
        }
    }
];