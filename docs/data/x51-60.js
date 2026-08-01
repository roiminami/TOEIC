// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag91-100 Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "choreographer",
        pos: "名",
        ipa: "/ˌkɔːriˈɑːɡrəfər/",
        cn: "编舞家，舞蹈指导",
        jp: "振付師、コレオグラファー",
        family: "choreograph / choreography / choreographic",
        tips: "演艺娱乐、大型活动策划及公司周年庆演出高频名词。由动词 choreograph（编舞）衍生。常见短语：famed choreographer（著名编舞家）、hire a choreographer（聘请编舞指导）。",
        desc: "She is a famous choreographer."
    },
    {
        word: "stapler",
        pos: "名",
        ipa: "/ˈsteɪplər/",
        cn: "订书机",
        jp: "ホチキス、ステープラー",
        family: "staple / staples",
        tips: "办公用品（Office Supplies）采购与听力 Part 1（图片题）高频词。注意 staple 作名词时指“订书针”或“日常必需品”，作动词指“用订书机钉住”。",
        desc: "The stapler is on the desk."
    },
    {
        word: "boast",
        pos: "動/名",
        ipa: "/boʊst/",
        cn: "拥有（引以为傲的特色）；吹嘘，自夸",
        jp: "（誇るべきものを）所有する、自慢する",
        family: "boastful / boastfully",
        tips: "酒店宣传、园区介绍及企业实力展示极高频动词。托业中常考及物动词用法“拥有（极好的设施/景观）”，如 boast modern amenities（拥有现代便利设施）、boast state-of-the-art facilities（拥有最先进的设施）。",
        desc: "The hotel boasts a great view."
    },
    {
        word: "relocate",
        pos: "動",
        ipa: "/ˌriːˈloʊkeɪt/",
        cn: "迁移，搬迁，重新安置",
        jp: "移転する、引っ越す、配置転換する",
        family: "relocation / relocated",
        tips: "公司搬迁、部门调整与员工调岗高频动词。核心搭配：relocate to a new city（搬迁至新城市）、relocation package（搬迁福利包）。",
        desc: "They decided to relocate the office."
    },
    {
        word: "a compelling story",
        pos: "名",
        ipa: "/ə kəmˈpelɪŋ ˈstɔːri/",
        cn: "一个引人入胜的故事，一个极具说服力的内容",
        jp: "説得力のあるストーリー、惹きつけられる話",
        family: "compel / compelling / compellingly",
        tips: "品牌营销、广告文案及公共关系高频短语。compelling 表示“极具说服力的/引人入胜的”。常用搭配：tell a compelling story（讲述一个引人入胜的故事）、compelling argument（令人信服的论据）。",
        desc: "He told a compelling story."
    },
    {
        word: "hazardous",
        pos: "形",
        ipa: "/ˈhæzərdəs/",
        cn: "危险的，有害的",
        jp: "危険な、有害な",
        family: "hazard / hazardously",
        tips: "职业安全、工场合规与危险废弃物处理高频形容词。核心搭配：hazardous waste（危险废弃物）、hazardous chemical（危险化学品）、hazardous work conditions（危险的工作环境）。",
        desc: "Wear gloves for hazardous materials."
    },
    {
        word: "evacuation",
        pos: "名",
        ipa: "/ɪˌvækjuˈeɪʃn/",
        cn: "撤离，疏散",
        jp: "避難、立ち退き",
        family: "evacuate / evacuee",
        tips: "办公室安全演练与紧急预案高频名词。来自动词 evacuate（撤离/疏散）。常见表达：emergency evacuation drill（紧急疏散演练）、evacuation route（疏散路线）。",
        desc: "Follow the evacuation plan."
    },
    {
        word: "dispute",
        pos: "名/動",
        ipa: "/dɪˈspjuːt/",
        cn: "争端，纠纷；对……提出异议",
        jp: "紛争、議論；〜に異議を唱える",
        family: "disputed / disputable / disputant",
        tips: "商业合同、劳资谈判及账单争议高频词。核心搭配：resolve a dispute（解决纠纷）、labor dispute（劳资纠纷）、dispute a charge（对扣费提出异议）。",
        desc: "They resolved the dispute quickly."
    },
    {
        word: "diligently",
        pos: "副",
        ipa: "/ˈdɪlɪdʒəntli/",
        cn: "勤奋地，兢兢业业地",
        jp: "勤勉に、入念に、真面目に",
        family: "diligence / diligent",
        tips: "员工绩效评估与推荐信高频副词。修饰动词 work、study、prepare。常见搭配：work diligently（勤奋工作）、diligently prepare for...（兢兢业业地筹备……）。",
        desc: "She works diligently every day."
    },
    {
        word: "sought",
        pos: "動",
        ipa: "/sɔːt/",
        cn: "寻找，寻求，争取（seek的过去式/过去分词）",
        jp: "探した、求めた（seekの過去・過去分詞形）",
        family: "seek / seeking / sought-after",
        tips: "商务咨询、法律建议与寻求合作高频动词形式。核心搭配：sought legal advice（寻求法律建议）、highly sought-after position（炙手可热的职位）。",
        desc: "He sought approval from management."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "stapler",
        category: "简单",
        stem: "Please make sure to put the office ________ back in the supply closet after binding the documents.",
        options: ["stapler", "evacuation", "dispute", "choreographer"],
        correct: "stapler",
        explanations: {
            guide: "名词词义辨析。由名词 office 修饰，结合后文“在装订完文件之后”，此处应填入表示“订书机”的名词 stapler。",
            family: "stapler (n.订书机) | evacuation (n.疏散) | dispute (n.纠纷) | choreographer (n.编舞家)。",
            details: "binding the documents（装订文件）是办公场景中与 stapler 紧密挂钩的动作。",
            cn: "装订完文件后，请务必将办公订书机放回供应柜中。",
            jp: "書類をホチキスで留めた後は、オフィスのホチキス（stapler）を必ず備品戸棚に戻してください。"
        }
    },
    {
        id: 2,
        target: "relocate",
        category: "简单",
        stem: "Due to the expansion, the company decided to ________ its head office to a larger downtown building.",
        options: ["relocate", "boast", "dispute", "evacuation"],
        correct: "relocate",
        explanations: {
            guide: "动词词义辨析。位于不定式符号 to 之后，结合句意“由于扩张，公司决定将总部……至市中心更大的大楼”，选 relocate（搬迁）。",
            family: "relocate (v.搬迁) | boast (v.拥有/吹嘘) | dispute (n./v.争议) | evacuation (n.疏散)。",
            details: "relocate its head office to... 意为“将总部搬迁至……”，是企业场地变更的标准表达。",
            cn: "由于业务扩张，公司决定将总部搬迁至市中心一座更大的大楼。",
            jp: "事業拡大に伴い、同社は本社を都心のより大きなビルに移転する（relocate）ことを決定しました。"
        }
    },
    {
        id: 3,
        target: "hazardous",
        category: "简单",
        stem: "Workers must wear protective masks when handling ________ chemicals in the processing plant.",
        options: ["hazardous", "diligently", "sought", "compelling"],
        correct: "hazardous",
        explanations: {
            guide: "形容词词义辨析。修饰名词 chemicals（化学品），结合前半句“工人必须佩戴防护面罩”，此处应选择表示“危险的/有害的”形容词 hazardous。",
            family: "hazardous (adj.危险的) | diligently (adv.勤奋地) | sought (v.寻求) | compelling (adj.引人入胜的)。",
            details: "hazardous chemicals 意为“危险化学品”，属于工厂安全生产的标准短语。",
            cn: "工人在加工厂处理危险化学品时必须佩戴防护面罩。",
            jp: "作業員は処理工場で有害な（hazardous）化学物質を取り扱う際、防護マスクを着用しなければなりません。"
        }
    },
    {
        id: 4,
        target: "evacuation",
        category: "简单",
        stem: "All employees participated in the annual safety fire ________ drill yesterday morning.",
        options: ["evacuation", "stapler", "choreographer", "relocate"],
        correct: "evacuation",
        explanations: {
            guide: "复合名词修饰与词义辨析。空格与 fire 和 drill 组合，表达“消防疏散演练”，选 evacuation。",
            family: "evacuation (n.疏散) | stapler (n.订书机) | choreographer (n.编舞家) | relocate (v.搬迁)。",
            details: "fire evacuation drill 是行政安全管理中的固定短语，意为“消防疏散演练”。",
            cn: "昨天上午，所有员工都参加了一年一度的消防疏散演练。",
            jp: "昨日の午前、全従業員が年に一度の火災避難（evacuation）訓練に参加しました。"
        }
    },
    {
        id: 5,
        target: "diligently",
        category: "简单",
        stem: "The research team worked ________ to finish the quarterly market report before the deadline.",
        options: ["diligently", "hazardous", "sought", "boast"],
        correct: "diligently",
        explanations: {
            guide: "副词修饰不及物动词。空格位于动词 worked 之后，作状语修饰工作态度，表达“勤奋地/兢兢业业地”，选副词 diligently。",
            family: "diligently (adv.勤奋地) | hazardous (adj.危险的) | sought (v.寻求) | boast (v.拥有/吹嘘)。",
            details: "work diligently 意为“勤奋地工作/兢兢业业地工作”，常出现在员工考核与团队评价中。",
            cn: "研究团队兢兢业业地工作，以便在截止日期前完成季度市场报告。",
            jp: "研究チームは、締め切りまでに四半期市場報告書を完成させるため、勤勉に（diligently）働きました。"
        }
    },
    {
        id: 6,
        target: "a compelling story",
        category: "简单",
        stem: "The brand's new advertisement crafted ________ that deeply resonated with prospective customers.",
        options: ["a compelling story", "evacuation", "stapler", "dispute"],
        correct: "a compelling story",
        explanations: {
            guide: "名词短语辨析。作及物动词 crafted（精心打磨/制作）的宾语，结合后半句“在潜在客户中引发深刻共鸣”，选 a compelling story（一个引人入胜的故事）。",
            family: "a compelling story (短语) | evacuation (n.疏散) | stapler (n.订书机) | dispute (n.争议)。",
            details: "craft a compelling story（打造一个引人入胜的故事）是品牌叙事与营销广告的高频短语。",
            cn: "该品牌的新广告打造了一个引人入胜的故事，在潜在客户中引发了强烈共鸣。",
            jp: "そのブランドの新しい広告は、見込み客の心深くに響く説得力のあるストーリー（a compelling story）を作り上げました。"
        }
    },
    {
        id: 7,
        target: "boast",
        category: "中等",
        stem: "The new conference center can ________ state-of-the-art audiovisual technology and seating for thousands.",
        options: ["boast", "relocate", "dispute", "evacuate"],
        correct: "boast",
        explanations: {
            guide: "动词词义辨析。位于情态动词 can 之后，结合宾语“最先进的视听技术和容纳千人的座位”，表达“拥有（令人骄傲的特色）”，选 boast。",
            family: "boast (v.拥有/引以为豪) | relocate (v.搬迁) | dispute (v.争执) | evacuate (v.疏散)。",
            details: "boast state-of-the-art facilities（拥有最先进的设施）是场馆与酒店宣传文案的标准搭配。",
            cn: "新建的会议中心拥有最先进的视听技术和可容纳数千人的座位。",
            jp: "新しいコンベンションセンターは、最先端の音響映像技術と数千人分の座席を誇って（boast）います。"
        }
    },
    {
        id: 8,
        target: "choreographer",
        category: "中等",
        stem: "The production team hired an experienced ________ to coordinate the dance sequences for the commercial.",
        options: ["choreographer", "evacuation", "stapler", "dispute"],
        correct: "choreographer",
        explanations: {
            guide: "名词词义辨析。作 hired 的宾语，由 experienced（经验丰富的）修饰，结合后文“协调广告的舞蹈动作”，选 choreographer（编舞家/舞蹈指导）。",
            family: "choreographer (n.编舞家) | evacuation (n.疏散) | stapler (n.订书机) | dispute (n.纠纷)。",
            details: "hire a choreographer to coordinate dance sequences 逻辑高度顺畅，指聘请专业舞蹈指导。",
            cn: "制作团队聘请了一位经验丰富的编舞家来协调电视广告的舞蹈动作。",
            jp: "制作チームは、CMのダンスシーンをコーディネートするために経験豊富な振付師（choreographer）を雇いました。"
        }
    },
    {
        id: 9,
        target: "dispute",
        category: "中等",
        stem: "Legal advisors were called in to help the two firms settle a contract ________ amicably.",
        options: ["dispute", "relocation", "hazardous", "diligently"],
        correct: "dispute",
        explanations: {
            guide: "复合名词与固定表达。作 settle 的宾语，与 contract 组合构成 contract dispute（合同纠纷），选 dispute。",
            family: "dispute (n.纠纷) | relocation (n.搬迁) | hazardous (adj.危险的) | diligently (adv.勤奋地)。",
            details: "settle a contract dispute amicably 意为“友好地解决合同纠纷”，是商务法律事务中的标准表达。",
            cn: "法律顾问被请来协助两家公司友好地解决合同纠纷。",
            jp: "両社が契約紛争（dispute）を和解により解決できるよう、法律アドバイザーが呼ばれました。"
        }
    },
    {
        id: 10,
        target: "sought",
        category: "中等",
        stem: "Before making the final decision on the merger, executive board members ________ professional advice from financial consultants.",
        options: ["sought", "boast", "dispute", "relocated"],
        correct: "sought",
        explanations: {
            guide: "动词时态与词义辨析。主句谓语动词，结合宾语 professional advice（专业建议）及介词 from，表达“寻求了”建议，选 sought（seek 的过去式）。",
            family: "sought (v.寻求/过去式) | boast (v.拥有) | dispute (v.争论) | relocated (v.已搬迁)。",
            details: "sought advice from... 意为“向……寻求建议”。seek advice 是商务决策中的极高频搭配。",
            cn: "在对合并做出最终决定之前，执行董事会成员向财务顾问寻求了专业建议。",
            jp: "合併に関する最終決定を下す前に、執行役員会は財務コンサルタントに専門的な助言を求めました（sought）。"
        }
    },
    {
        id: 11,
        target: "relocate",
        category: "中等",
        stem: "The HR department prepared a comprehensive ________ package for employees transferring to the overseas branch.",
        options: ["relocation", "relocate", "relocated", "dispute"],
        correct: "relocation",
        explanations: {
            guide: "名词修饰名词。空格修饰 package，构成复合名词短语。结合“调往海外分公司”，选 relocation（搬迁/安置）。",
            family: "relocation (n.搬迁/安置) | relocate (v.搬迁) | relocated (adj.已搬迁的) | dispute (n.纠纷)。",
            details: "relocation package 指公司为调岗搬迁员工提供的“搬迁福利/补贴包”。",
            cn: "人力资源部为调往海外分公司的员工准备了详尽的搬迁福利包。",
            jp: "人事部は、海外支社に転勤する従業員のために包括的な引っ越し手当（relocation package）を用意しました。"
        }
    },
    {
        id: 12,
        target: "hazardous",
        category: "中等",
        stem: "Proper storage of toxic waste is necessary to eliminate environmental ________ in industrial zones.",
        options: ["hazards", "hazardous", "diligently", "evacuation"],
        correct: "hazards",
        explanations: {
            guide: "名词派生词辨析。作 eliminate 的宾语，由形容词 environmental 修饰，选名词复数 hazards（危险隐患）。",
            family: "hazards (n.危险/隐患/复数) | hazardous (adj.危险的) | diligently (adv.勤奋地) | evacuation (n.疏散)。",
            details: "environmental hazards 指“环境隐患/危险”。hazardous 是形容词，不能直接作 eliminate 的宾语。",
            cn: "妥善存储有毒废弃物对于消除工业园区的环境隐患至关重要。",
            jp: "工業地帯における環境上の危険要因（hazards）を排除するには、有毒廃棄物の適切な保管が必要です。"
        }
    },
    {
        id: 13,
        target: "evacuation",
        category: "困难",
        stem: "Security personnel instructed all office staff to ________ the building immediately after the alarm sounded.",
        options: ["evacuate", "evacuation", "hazardous", "diligently"],
        correct: "evacuate",
        explanations: {
            guide: "动词派生与不定式结构。空格跟在 instruct sb to 之后，需要填入动词原形 evacuate（撤离/疏散）。",
            family: "evacuate (v.撤离) | evacuation (n.撤离/疏散) | hazardous (adj.危险的) | diligently (adv.勤奋地)。",
            details: "evacuate the building 意为“撤离大楼”。evacuation 为名词形式，不能直接在 to 后作动词原形。",
            cn: "警报响起后，安保人员指示所有办公人员立即撤离大楼。",
            jp: "警報が鳴った後、警備員はすべてのオフィススタッフにすぐにビルから避難する（evacuate）よう指示しました。"
        }
    },
    {
        id: 14,
        target: "diligently",
        category: "困难",
        stem: "The project manager praised the technician for her exceptional ________ and attention to detail.",
        options: ["diligence", "diligently", "diligent", "sought"],
        correct: "diligence",
        explanations: {
            guide: "名词派生词辨析。位于形容词 exceptional 之后，作介词 for 的宾语，并与 attention 并列，选不可数名词 diligence（勤勉/敬业）。",
            family: "diligence (n.勤勉/敬业) | diligently (adv.勤奋地) | diligent (adj.勤奋的) | sought (v.寻求)。",
            details: "exceptional diligence 意为“卓越的敬业精神/勤勉”。diligently 是副词，不能被形容词 exceptional 修饰。",
            cn: "项目经理称赞了该技术人员卓越的敬业精神和对细节的关注。",
            jp: "プロジェクトマネージャーは、その技術者の卓越した勤勉さ（diligence）と細部へのこだわりを称賛しました。"
        }
    },
    {
        id: 15,
        target: "a compelling story",
        category: "困难",
        stem: "The keynote speaker presented a ________ case for investing in renewable energy infrastructure.",
        options: ["compelling", "compel", "compulsion", "dispute"],
        correct: "compelling",
        explanations: {
            guide: "分词作形容词辨析。空格位于不定冠词 a 之后，名词 case（论据/理由）之前，选形容词 compelling（令人信服的/强有力的）。",
            family: "compelling (adj.令人信服的) | compel (v.强迫) | compulsion (n.强迫) | dispute (n.争议)。",
            details: "a compelling case 意为“令人信服的论据/强有力的理由”，属于高阶商务演讲与企划案高频搭配。",
            cn: "主讲人就投资可再生能源基础设施提出了令人信服的强有力论据。",
            jp: "基調講演者は、再生可能エネルギーインフラへの投資に対して、説得力のある（compelling）根拠を提示しました。"
        }
    },
    {
        id: 16,
        target: "dispute",
        category: "困难",
        stem: "The ownership of the land remains highly ________ among local developers and municipal authorities.",
        options: ["disputed", "dispute", "disputing", "evacuation"],
        correct: "disputed",
        explanations: {
            guide: "过去分词作表语/形容词考点。位于连系动词 remains 和副词 highly 之后，表达该土地所有权仍“存有争议的”，选 disputed。",
            family: "disputed (adj.存有争议的) | dispute (n./v.争议) | disputing (v.正在争论) | evacuation (n.疏散)。",
            details: "remains highly disputed 表示“仍然存在极大争议”。disputed 在此充当形容词表语。",
            cn: "当地开发商与市政当局之间对该土地的所有权仍存在极大争议。",
            jp: "その土地の所有権をめぐっては、地元の開発業者と地方自治体の間で依然として議論が分かれて（disputed）います。"
        }
    },
    {
        id: 17,
        target: "sought",
        category: "困难",
        stem: "Ms. Patel is a highly ________ management consultant known for restructuring troubled corporations.",
        options: ["sought-after", "seeking", "sought", "boastful"],
        correct: "sought-after",
        explanations: {
            guide: "复合形容词考点。位于副词 highly 之后，修饰名词短语 management consultant，表达“炙手可热的/深受推崇的”，选 sought-after。",
            family: "sought-after (adj.炙手可热的/受欢迎的) | seeking (v.寻求中) | sought (v.寻求) | boastful (adj.自夸的)。",
            details: "a highly sought-after consultant 意为“一位非常受欢迎/炙手可热的管理顾问”。",
            cn: "帕特尔女士是一位非常炙手可热的管理顾问，以重组陷入困境的企业而闻名。",
            jp: "パテル氏は、困窮している企業の再建で知られる、非常に引っ張りだこの（sought-after）経営コンサルタントです。"
        }
    },
    {
        id: 18,
        target: "choreographer",
        category: "困难",
        stem: "The intricate ________ of the opening ceremony required months of intensive rehearsals.",
        options: ["choreography", "choreographer", "choreograph", "evacuation"],
        correct: "choreography",
        explanations: {
            guide: "名词派生抽象词辨析。位于定冠词 The 和形容词 intricate（复杂的）之后，作句子的主语，表达开幕式的“舞蹈编排”，选 choreography。",
            family: "choreography (n.舞蹈编排) | choreographer (n.编舞家) | choreograph (v.编舞) | evacuation (n.疏散)。",
            details: "the choreography of the ceremony 指“仪式的舞蹈编排”。choreographer 指编舞者个人，无法充当需要“数月排练”的对象。",
            cn: "开幕式复杂的舞蹈编排需要经过数月的高强度排练。",
            jp: "開会式の複雑な振付（choreography）は、数ヶ月にわたる猛練習を必要としました。"
        }
    }
];