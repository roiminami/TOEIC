// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data231-240.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "anecdote",
        pos: "名",
        ipa: "/ˈænɪkdoʊt/",
        cn: "趣闻，轶事",
        jp: "逸話、短い実話",
        family: "anecdotal / anecdotes",
        tips: "常用于商务演讲与培训破冰：讲者通过分享简短趣闻来吸引听众（share an amusing anecdote）；形容词 anecdotal 意为“轶事的/非正式经验的”（anecdotal evidence 传闻证据）。",
        desc: "The speaker shared a personal anecdote."
    },
    {
        word: "attest",
        pos: "動",
        ipa: "/əˈtest/",
        cn: "证实，证明；作证",
        jp: "証明する、証言する",
        family: "attestation / attested / attests",
        tips: "托业高频动介搭配：attest to sth（证实/作为……的明证），后常接客户满意度、品质或项目成效（attest to the reliability/success of the program）。",
        desc: "Clients can attest to our reliable service."
    },
    {
        word: "intermission",
        pos: "名",
        ipa: "/ˌɪntərˈmɪʃn/",
        cn: "中场休息，幕间休息",
        jp: "（芝居・演奏会などの）休憩時間",
        family: "intermissions",
        tips: "演出活动、音乐会或全天学术研讨会核心词汇：during the intermission（在中场休息期间），a fifteen-minute intermission（十五分钟的中场休息）。",
        desc: "Refreshments are served during the intermission."
    },
    {
        word: "obstruction",
        pos: "名",
        ipa: "/əbˈstrʌkʃn/",
        cn: "障碍物，妨碍，阻碍",
        jp: "妨害、障害物、遮断",
        family: "obstruct / obstructive / obstructed",
        tips: "办公环境与仓储安全规程高频考点：keep hallways clear of any obstruction（保持走廊通畅无阻碍物）；动词形式 obstruct 意为阻塞通道或遮挡视线。",
        desc: "Keep the hallway clear of any obstruction."
    },
    {
        word: "footage",
        pos: "名",
        ipa: "/ˈfʊtɪdʒ/",
        cn: "（录制好的）视频片段，录像画面（不可数）",
        jp: "映像、録画場面、フッテージ（不可算）",
        family: "security footage / video footage / archival footage",
        tips: "不可数名词专属考点：security footage（安防监控录像），raw footage（原始录制素材），archival footage（历史档案影像）。",
        desc: "Security reviewed the video footage."
    },
    {
        word: "refurbish",
        pos: "動",
        ipa: "/ˌriːˈfɜːrbɪʃ/",
        cn: "翻新，整修，重新装修",
        jp: "改装する、改修する、一新する",
        family: "refurbishment / refurbished",
        tips: "酒店设施、办公楼装潢与二手电子产品核心词：refurbish the hotel lobby/facility（翻修大堂）；分词形容词 refurbished units（官方翻新设备）。",
        desc: "The company plans to refurbish the office."
    },
    {
        word: "sanitize",
        pos: "動",
        ipa: "/ˈsænɪtaɪz/",
        cn: "消毒，使卫生清洁",
        jp: "消毒する、衛生的にする",
        family: "sanitizer / sanitation / sanitary",
        tips: "食品加工、医疗环境与办公卫生高频动词：sanitize food preparation surfaces（对备餐台消毒）；派生名词 hand sanitizer 指免洗洗手液。",
        desc: "Staff sanitize all tables after each shift."
    },
    {
        word: "testimonial",
        pos: "名",
        ipa: "/ˌtestɪˈmoʊniəl/",
        cn: "客户评价，推荐信，证明信",
        jp: "推薦文、（利用者の）感想、感謝の印",
        family: "testimonials / testify / testimony",
        tips: "市场营销与网站文案极高频考点：customer testimonials（客户真实好评与推荐证言）；注意与法庭证词 testimony 区分。",
        desc: "Read the customer testimonials on our website."
    },
    {
        word: "turnout",
        pos: "名",
        ipa: "/ˈtɜːrnaʊt/",
        cn: "到场人数，出席人数；产量",
        jp: "来場者数、参加者数、人出",
        family: "turn out / high turnout / voter turnout",
        tips: "展会博览会、开幕式及投票活动核心考点：a large / record turnout（创纪录的出席人数/极高到场率），draw a massive turnout。",
        desc: "The festival had a record turnout this year."
    },
    {
        word: "drape",
        pos: "動/名",
        ipa: "/dreɪp/",
        cn: "悬挂，覆盖；窗帘（复数）",
        jp: "掛ける、覆う；カーテン（復数）",
        family: "drapes / drapery / draped",
        tips: "会展搭建与酒店设施核心词：drape cloths over tables（用桌布铺盖桌子）；复数 drapes 专指厚重的遮光窗帘（pull the window drapes closed）。",
        desc: "Workers draped cloths over the tables."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "refurbish",
        category: "简单",
        stem: "The historic boutique hotel will temporarily close its dining hall next week to ________ the interior seating area.",
        options: ["refurbish", "refurbishment", "anecdote", "drape"],
        correct: "refurbish",
        explanations: {
            guide: "动词不定式结构。close the hall to 后面需要接动词原形表达目的，后接宾语 the interior seating area，表达“翻新/重新装修”就餐区，选 refurbish。",
            family: "refurbish (v.翻新/整修) | refurbishment (n.翻新) | anecdote (n.轶事) | drape (v.悬挂/铺设)。",
            details: "to 为不定式符号，后面必须接动词原形。refurbishment 是名词，无法充当不定式中带宾语的核心谓语动词。",
            cn: "这家历史悠久的精品酒店将于下周暂时关闭其餐厅，以翻新内部就座区域。",
            jp: "歴史あるブティックホテルは、内部の座席エリアを改装する（refurbish）ため、来週ダイニングホールを一時的に閉鎖します。"
        }
    },
    {
        id: 2,
        target: "testimonial",
        category: "简单",
        stem: "Prospective buyers can visit the company's official homepage to read genuine customer ________ before placing an order.",
        options: ["testimonials", "testimonial", "turnout", "footage"],
        correct: "testimonials",
        explanations: {
            guide: "形容词后的名词复数。genuine customer 后面需要接可数名词复数作 read 的宾语，customer testimonials 意为“客户好评/真实评价”，选 testimonials。",
            family: "testimonials (n.客户评价/复数) | testimonial (n.单数) | turnout (n.出席人数) | footage (n.录像画面)。",
            details: "customer testimonials 属于电商营销核心专属短语，习惯用复数指代多条用户体验好评。单数 testimonial 前需有冠词修饰。",
            cn: "意向买家在下单之前，可以访问公司官方网站阅读真实的客户好评。",
            jp: "見込み客は、注文を出す前に会社の公式ホームページにアクセスして、本物の顧客の声・推薦文（testimonials）を読むことができます。"
        }
    },
    {
        id: 3,
        target: "intermission",
        category: "简单",
        stem: "Complimentary coffee and light refreshments will be served in the grand lobby during the fifteen-minute ________.",
        options: ["intermission", "intermissions", "obstruction", "sanitize"],
        correct: "intermission",
        explanations: {
            guide: "复合形容词后的单数名词。the fifteen-minute 复合形容词后面需要接单数可数名词，a fifteen-minute intermission 意为“十五分钟的中场休息”，选 intermission。",
            family: "intermission (n.中场休息/幕间休息) | intermissions (n.复数) | obstruction (n.障碍物) | sanitize (v.消毒)。",
            details: "during the fifteen-minute intermission 指在15分钟的幕间休息期间。intermissions 复数与前面的数词连字符定语十五分钟单数搭配不符。",
            cn: "在十五分钟的中场休息期间，大厅将供应免费咖啡和精美茶点。",
            jp: "15分間の休憩時間（intermission）の間、大ロビーで無料のコーヒーと軽食が提供されます。"
        }
    },
    {
        id: 4,
        target: "sanitize",
        category: "简单",
        stem: "Kitchen staff members must thoroughly ________ all food preparation surfaces before and after each culinary shift.",
        options: ["sanitize", "sanitation", "attest", "turnout"],
        correct: "sanitize",
        explanations: {
            guide: "情态动词与副词后的动词原形。must thoroughly 之后需要接动词原形，后接宾语 preparation surfaces，表达对台面进行“消毒/清洁”，选 sanitize。",
            family: "sanitize (v.消毒/卫生清洁) | sanitation (n.环境卫生) | attest (v.证实) | turnout (n.到场人数)。",
            details: "must thoroughly sanitize 构成情态动词与谓语动词的修饰搭配。sanitation 是名词，不能跟在副词 thoroughly 后面充当谓语动词原形。",
            cn: "厨房工作人员必须在每班次工作前后彻底对所有备餐台面进行消毒。",
            jp: "調理場のスタッフは、各シフトの前後にすべての食品調理台を徹底的に消毒（sanitize）しなければなりません。"
        }
    },
    {
        id: 5,
        target: "turnout",
        category: "简单",
        stem: "Event organizers were delighted that the annual technology job expo attracted an unprecedentedly large ________.",
        options: ["turnout", "turning out", "anecdote", "refurbish"],
        correct: "turnout",
        explanations: {
            guide: "形容词后的名词中心语。an unprecedentedly large ________ 结构中需要接名词，attract a large turnout 意为“吸引了庞大的到场人数”，选 turnout。",
            family: "turnout (n.到场人数/出席者) | turning out (动名词短语) | anecdote (n.轶事) | refurbish (v.翻新)。",
            details: "a large turnout 属于活动出席率标准表述。turning out 是动词短语的进行时态或分词，不能作为不定冠词 an 与形容词后的名词中心词。",
            cn: "活动组织方感到非常欣喜，因为年度科技招聘博览会吸引了空前庞大的到场人数。",
            jp: "イベントの主催者は、年次技術就職博覧会が前例のないほど多くの来場者数（turnout）を集めたことに大いに喜びました。"
        }
    },
    {
        id: 6,
        target: "drape",
        category: "简单",
        stem: "Hotel banquet staff will ________ clean white tablecloths over each table prior to the evening dinner reception.",
        options: ["drape", "drapery", "footage", "testimonial"],
        correct: "drape",
        explanations: {
            guide: "情态动词后的动词原形。will 后面接动词原形，drape A over B 意为“将A铺设/覆盖在B上”，选动词原形 drape。",
            family: "drape (v.悬挂/铺设/覆盖) | drapery (n.布料/褶绢) | footage (n.录像) | testimonial (n.评价)。",
            details: "will drape tablecloths over the tables 指在桌上铺桌布。drapery 是名词，无法充当情态动词 will 之后的谓语动词。",
            cn: "在晚间晚宴招待会之前，酒店宴会工作人员将在每张桌子上铺上干净的白色桌布。",
            jp: "ホテルの宴会スタッフは、夜のディナーレセプションの前に、各テーブルに清潔な白いテーブルクロスを掛け（drape）ます。"
        }
    },
    {
        id: 7,
        target: "attest",
        category: "中等",
        stem: "Hundreds of satisfied corporate clients can ________ to the exceptional reliability of our enterprise cloud storage software.",
        options: ["attest", "attestation", "intermission", "obstruction"],
        correct: "attest",
        explanations: {
            guide: "动介固定搭配与情态动词原形。can 后面接动词原形，与后面的介词 to 连用构成 attest to sth（证实/作为……的明证），选 attest。",
            family: "attest (v.证实/证明) | attestation (n.证明/鉴证) | intermission (n.中场休息) | obstruction (n.障碍)。",
            details: "attest to the reliability 意为证明可靠性。attestation 是名词，不能在情态动词 can 后面直接担任谓语动词原形。",
            cn: "数百家满意的企业客户可以证实我们企业级云存储软件卓越的可靠性。",
            jp: "何百もの満足している企業クライアントが、当社のエンタープライズクラウドストレージソフトウェアの並外れた信頼性を証明（attest to）できます。"
        }
    },
    {
        id: 8,
        target: "obstruction",
        category: "中等",
        stem: "According to municipal fire safety codes, emergency exit corridors must remain completely free of any ________ at all times.",
        options: ["obstruction", "obstruct", "sanitizer", "footage"],
        correct: "obstruction",
        explanations: {
            guide: "介词短语与安全规程名词。free of any ________ 结构中，限定词 any 后接名词，free of obstruction 意为“没有任何障碍物/通畅无阻”，选 obstruction。",
            family: "obstruction (n.障碍物/阻碍) | obstruct (v.妨碍/阻塞) | sanitizer (n.消毒液) | footage (n.录像)。",
            details: "free of any obstruction 是消防安全条款标准用语。obstruct 是动词，不能作介词 of 的宾语。",
            cn: "根据市政消防安全法规，紧急出口走廊在任何时候都必须完全保持通畅，不得有任何障碍物。",
            jp: "市の消防安全法規に基づき、非常口の通路は常にいかなる障害物（obstruction）もない状態にしておかなければなりません。"
        }
    },
    {
        id: 9,
        target: "footage",
        category: "中等",
        stem: "The security director thoroughly reviewed surveillance camera ________ to investigate the unauthorized access into the server room.",
        options: ["footage", "footing", "drapes", "anecdotes"],
        correct: "footage",
        explanations: {
            guide: "安防监控复合名词专属搭配。surveillance camera 与 footage 组合构成 surveillance camera footage，意为“监控摄像头录像画面”，选不可数名词 footage。",
            family: "footage (n.录像画面/影片素材/不可数) | footing (n.立足点/基础) | drapes (n.窗帘) | anecdotes (n.轶事)。",
            details: "security / camera footage 指拍摄到的录像片段。footing 指物理立足点或合作基础（如 on equal footing），语义完全不符。",
            cn: "安保总监仔细审查了监控摄像头的录像画面，以调查未经授权擅自进入服务器机房的事件。",
            jp: "セキュリティディレクターは、サーバー室への不正侵入を調査するために、監視カメラの映像（footage）を徹底的に確認しました。"
        }
    },
    {
        id: 10,
        target: "anecdote",
        category: "中等",
        stem: "The keynote speaker enlivened the presentation by sharing an amusing personal ________ about his early struggles in business.",
        options: ["anecdote", "anecdotal", "refurbishment", "attest"],
        correct: "anecdote",
        explanations: {
            guide: "不定冠词与形容词后的单数名词。an amusing personal ________ 结构中，形容词 personal 后接单数名词，personal anecdote 意为“个人亲身趣闻/轶事”，选 anecdote。",
            family: "anecdote (n.趣闻/轶事/单数) | anecdotal (adj.传闻的/轶事的) | refurbishment (n.翻修) | attest (v.证实)。",
            details: "share an anecdote 属于公众演讲与培训高频表达。anecdotal 是形容词，不能直接放在 personal 之后作介词短语的名词中心语。",
            cn: "主讲嘉宾通过分享一段关于自己早年商业打拼的有趣亲身轶事，活跃了演讲的气氛。",
            jp: "基調講演者は、初期のビジネスでの苦闘に関する面白い個人的な逸話（anecdote）を共有することで、プレゼンテーションを盛り上げました。"
        }
    },
    {
        id: 11,
        target: "refurbish",
        category: "中等",
        stem: "The consumer electronics warranty covers repairs as well as the certified delivery of ________ replacement units.",
        options: ["refurbished", "refurbishing", "intermission", "turnout"],
        correct: "refurbished",
        explanations: {
            guide: "过去分词作定语修饰名词。空格修饰名词 units（设备/机器），refurbished replacement units 属于质保与售后条款专有名词，意为“翻新的备用机/翻新换货单元”，选 refurbished。",
            family: "refurbished (adj.翻新的/整修过的) | refurbishing (动名词) | intermission (n.中场休息) | turnout (n.出席人数)。",
            details: "refurbished units / devices 专指经官方检验合格的翻新设备。refurbishing 是现在分词动作，不能修饰被翻新完成的产品状态。",
            cn: "消费电子产品保修不仅涵盖维修，还包括经过官方认证的翻新更换设备的交付。",
            jp: "家電製品の保証には、修理だけでなく、認定された再生品・改修済み（refurbished）の交換ユニットの配送も含まれています。"
        }
    },
    {
        id: 12,
        target: "sanitize",
        category: "中等",
        stem: "To maintain hygienic standards across all treatment rooms, the medical clinic installed automated hand ________ dispensers.",
        options: ["sanitizer", "sanitize", "obstruction", "testimonial"],
        correct: "sanitizer",
        explanations: {
            guide: "复合名词定语修饰。hand 与 sanitizer 组合构成 hand sanitizer（免洗洗手液/手部消毒剂），修饰 dispensers（分配器），选名词 sanitizer。",
            family: "sanitizer (n.消毒剂/洗手液) | sanitize (v.消毒) | obstruction (n.障碍) | testimonial (n.推荐信)。",
            details: "hand sanitizer dispensers 指自动感应洗手消毒喷雾机。sanitize 是动词，不能直接在复合名词结构中作前置定语修饰物品。",
            cn: "为了在所有诊室维持卫生标准，该医疗诊所安装了自动感应手部消毒液分配器。",
            jp: "すべての治療室で衛生基準を維持するため、その診療所は自動手指消毒剤（sanitizer）ディスペンサーを設置しました。"
        }
    },
    {
        id: 13,
        target: "drape",
        category: "困难",
        stem: "Conference center attendants pulled the motorized window ________ closed to eliminate glare on the projection screen.",
        options: ["drapes", "draped", "anecdotes", "attestations"],
        correct: "drapes",
        explanations: {
            guide: "名词熟词生义复数考点。pulled the window ________ closed 结构中，drapes 考查“厚窗帘/遮光帘”，与 closed 构成复合宾语，选复数名词 drapes。",
            family: "drapes (n.厚窗帘/复数) | draped (v-ed铺盖) | anecdotes (n.趣闻) | attestations (n.证明)。",
            details: "window drapes 指会议室遮光大窗帘，固定多用复数形式。draped 为过去分词，不能在定冠词 the 和定语 window 后充当及物动词 pulled 的宾语。",
            cn: "会议中心服务人员拉合了电动车窗遮光窗帘，以消除投影幕布上的眩光。",
            jp: "会議センターの係員は、プロジェクションスクリーンの反射光をなくすために、電動の窓用カーテン（drapes）を閉めました。"
        }
    },
    {
        id: 14,
        target: "attest",
        category: "困难",
        stem: "The remarkable surge in overseas enterprise subscriptions ________ to the exceptional performance of the new cloud platform.",
        options: ["attests", "attest", "sanitizes", "refurbishes"],
        correct: "attests",
        explanations: {
            guide: "主谓一致与动介短语搭配。主语是单数可数名词 surge（激增），缺少核心谓语动词，attests to 意为“证实了/证明了……”，选用第三人称单数形式 attests。",
            family: "attests (第三人称单数/证明) | attest (动词原形) | sanitizes (v.消毒) | refurbishes (v.翻新)。",
            details: "attest to 指有力证明了某优势。主语中心词为 The surge，谓语必须采用单三形式 attests；sanitizes 与 refurbishes 词义完全不通。",
            cn: "海外企业订阅量的显著激增，有力证实了该新云平台卓越的性能表现。",
            jp: "海外企業によるサブスクリプションの著しい急増は、新しいクラウドプラットフォームの並外れた性能を如実に証明して（attests to）います。"
        }
    },
    {
        id: 15,
        target: "anecdote",
        category: "困难",
        stem: "The research committee cautioned against drawing broad market conclusions based purely on ________ customer feedback.",
        options: ["anecdotal", "anecdote", "unobstructed", "refurbished"],
        correct: "anecdotal",
        explanations: {
            guide: "派生形容词作定语修饰名词。purely on ________ customer feedback 结构中，副词 purely 修饰形容词，anecdotal feedback 意为“传闻的/个例经验式的非系统反馈”，选 anecdotal。",
            family: "anecdotal (adj.传闻的/轶事个例的) | anecdote (n.轶事) | unobstructed (adj.通畅无阻的) | refurbished (adj.翻新的)。",
            details: "anecdotal evidence / feedback 属于商业分析高阶术语，指缺乏统计严谨性的个别口头反馈。anecdote 是名词，无法充当定语形容词修饰 feedback。",
            cn: "研究委员会告诫大家，切勿仅仅依据零散个例式的客户反馈得出广泛的市场结论。",
            jp: "調査委員会は、単なる伝聞・個別の事例による（anecdotal）顧客のフィードバックのみに基づいて広範な市場の結論を導き出さないよう警告しました。"
        }
    },
    {
        id: 16,
        target: "obstruction",
        category: "困难",
        stem: "Cargo truck drivers must verify that oversized freight loads do not ________ the driver's direct line of sight or side mirrors.",
        options: ["obstruct", "obstruction", "drape", "attest"],
        correct: "obstruct",
        explanations: {
            guide: "助动词后的及物动词原形。do not 后面必须接动词原形，后接宾语 line of sight（视线），obstruct 意为“阻碍/遮挡视线”，选 obstruct。",
            family: "obstruct (v.阻挡/阻塞/遮挡) | obstruction (n.障碍物) | drape (v.铺设) | attest (v.证实)。",
            details: "obstruct line of sight 是交通安全核心术语（遮挡视线）。obstruction 是名词，不能在助动词 do not 后面担任谓语动词原形。",
            cn: "货运卡车司机必须确认超宽超大货物不会遮挡驾驶员的直接视线或后视镜。",
            jp: "貨物トラックの運転手は、特大の貨物積載物が運転手の直接の視界やサイドミラーを遮ら（obstruct）ないことを確認しなければなりません。"
        }
    },
    {
        id: 17,
        target: "turnout",
        category: "困难",
        stem: "Despite unfavorable transit schedules, the weekend community festival drew a record ________ of over ten thousand visitors.",
        options: ["turnout", "turning out", "intermission", "testimonial"],
        correct: "turnout",
        explanations: {
            guide: "动宾高阶专有搭配。drew a record ________ 结构中，draw a record turnout 是托业阅读公关报道最高频表达，意为“创下了创纪录的到场人数”，选名词 turnout。",
            family: "turnout (n.到场人数/入场人次) | turning out (动名词) | intermission (n.中场休息) | testimonial (n.用户评价)。",
            details: "a record turnout of visitors 专指出席规模创历史新高。turning out 为分词短语，不能被不定冠词 a 和修饰语 record 直接修饰为量化名词中心词。",
            cn: "尽管公共交通班次不便，但周末社区文化节依然吸引了超过一万名游客这一创纪录的到场人数。",
            jp: "公共交通機関の運行スケジュールが不便だったにもかかわらず、週末の地域フェスティバルには1万人以上の記録的な来場者数（turnout）が集まりました。"
        }
    },
    {
        id: 18,
        target: "footage",
        category: "困难",
        stem: "The multimedia production firm obtained exclusive archival ________ of the historical bridge construction from city records.",
        options: ["footage", "footing", "sanitizers", "drapes"],
        correct: "footage",
        explanations: {
            guide: "传媒专属复合名词与不可数用法。archival ________ 结构中，archival footage 属于媒体影视制作高阶固定表达，意为“历史档案影像资料/纪录片胶片镜头”，选 footage。",
            family: "footage (n.影像资料/胶片片段/不可数) | footing (n.立足点) | sanitizers (n.消毒液) | drapes (n.窗帘)。",
            details: "archival footage 指保存在档案馆中的历史视频素材。footing 指物理立足点或基础关系，与音视频多媒体纪录片完全不符。",
            cn: "该多媒体制作公司从市档案馆获得了关于这座历史大桥建造过程的独家历史档案影像资料。",
            jp: "そのマルチメディア制作会社は、市の記録保管所から歴史的な橋の建設に関する独占的な記録映像（archival footage）を入手しました。"
        }
    }
];