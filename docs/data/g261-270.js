// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag171-180.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "journal",
        pos: "名",
        ipa: "/ˈdʒɜːrnl/",
        cn: "期刊，杂志；日志",
        jp: "専門誌、定期刊行物、日誌",
        family: "journalist / journalism / journalistic",
        tips: "学术出版、行业资讯与日常记录高频名词。常考 trade journal（行业期刊）、scientific journal（科学杂志）。在阅读中，经常与 magazine 或 publication 相互同义替换。",
        desc: "He writes in a journal."
    },
    {
        word: "reward",
        pos: "名/動",
        ipa: "/rɪˈwɔːrd/",
        cn: "报酬，奖励，回报；奖励，报答",
        jp: "報酬、褒美；報いる、報奨金を与える",
        family: "rewards / rewarding / rewarded",
        tips: "员工激励与客户忠诚度计划（loyalty program）高频词。常考搭配 loyalty reward（忠诚度奖励）、reward program（积分回馈计划）。其形容词 rewarding 意为“值得的/有意义的”。",
        desc: "This is a great reward."
    },
    {
        word: "status",
        pos: "名",
        ipa: "/ˈsteɪtəs/",
        cn: "状态，状况；地位，身份",
        jp: "状況、ステータス、社会的地位",
        family: "statuses",
        tips: "物流货运、项目管理及行政审批核心名词。极其常考的固定搭配为 flight status（航班状态）、order status（订单状态）、delivery status（配送状态）。",
        desc: "Check the order status."
    },
    {
        word: "nearly",
        pos: "副",
        ipa: "/ˈnɪrli/",
        cn: "几乎，将近",
        jp: "ほとんど、ほぼ、もう少しで",
        family: "near / nearness",
        tips: "高频程度副词。在听力和阅读中通常修饰数字、百分比或完成状态，如 nearly 50%（将近50%）、nearly completed（几乎完成）。常与 almost 相互同义替换。",
        desc: "The project is nearly done."
    },
    {
        word: "approach",
        pos: "動/名",
        ipa: "/əˈprəʊtʃ/",
        cn: "接近，靠近；方法，途径",
        jp: "近づく、接近する；アプローチ、方法",
        family: "approaches / approached / approaching",
        tips: "项目规划、学术研究与日常交通高频词。作名词时极其常考搭配 approach to...（解决……的方法，注意 to 是介词，后接名词或 v-ing）。作动词时意为“接近”。",
        desc: "We need a new approach."
    },
    {
        word: "content",
        pos: "名/形",
        ipa: "/ˈkɑːntent/",
        cn: "内容，目录，容量；满意的",
        jp: "内容、目次、コンテンツ；満足している",
        family: "contented / contentment",
        tips: "数字化营销、合同条款与物流包装核心词。常考搭配 website content（网站内容）、table of contents（目录）。在听力场景中，也常考查形容词 be content with...（对……感到满意）。",
        desc: "The content is informative."
    },
    {
        word: "flyer",
        pos: "名",
        ipa: "/ˈflaɪər/",
        cn: "传单，广告单",
        jp: "チラシ、フライヤー、パンフレット",
        family: "flyers",
        tips: "市场营销、活动宣传及零售促销高频名词。指用来派发的小广告单。在阅读中，经常与 brochure, leaflet, pamphlet 相互进行同义替换。",
        desc: "Distribute the promotional flyer."
    },
    {
        word: "automobile",
        pos: "名",
        ipa: "/ˈɔːtəməbiːl/",
        cn: "汽车",
        jp: "自動車",
        family: "automobiles / automotive",
        tips: "交通出行与制造行业高频名词。在托业中，其形容词形式 automotive 极常用于 automotive industry（汽车行业）。常与 car 或 vehicle 互换。",
        desc: "The automobile is new."
    },
    {
        word: "frequently",
        pos: "副",
        ipa: "/ˈfriːkwəntli/",
        cn: "频繁地，经常",
        jp: "頻繁に、しばしば",
        family: "frequent / frequency",
        tips: "日常办公与客户反馈高频副词。极其常考的搭配为 frequently asked questions (FAQ，常见问题解答)。在阅读中常与 often 互换。",
        desc: "They meet frequently."
    },
    {
        word: "various",
        pos: "形",
        ipa: "/ˈveriəs/",
        cn: "各种各样的，不同的",
        jp: "さまざまな、多様な",
        family: "variety / vary / variedly",
        tips: "产品选择、供应商评估与市场调研核心形容词。常修饰复数名词，如 various options（各种选择）、various factors（各种因素）。在阅读中，经常与 diverse 或 a variety of 相互进行同义替换。",
        desc: "There are various designs."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "status",
        category: "简单",
        stem: "Customers can track their delivery ________ online by entering the tracking number on our website.",
        options: ["status", "journal", "flyer", "office"],
        correct: "status",
        explanations: {
            guide: "名词词义与搭配辨析。空格前有 delivery（配送），后面接在线查询的语境，需填入一个表示状态的名词，选 status。",
            family: "status (n.状态) | journal (n.期刊) | flyer (n.传单) | office (n.办公室)。",
            details: "delivery status 意为“配送状态”，是物流查询和电子商务场景中极其常见的固定搭配。其他选项无法与之组合出合理的含义。",
            cn: "客户可以通过在我们的网站上输入快递单号，在网上查询他们的配送状态。",
            jp: "お客様は、当社のウェブサイトに追跡番号を入力することで、オンラインで配送状況（status）を追跡することができます。"
        }
    },
    {
        id: 2,
        target: "nearly",
        category: "简单",
        stem: "The administrative assistant has ________ completed the preparation of the quarterly meeting summaries.",
        options: ["nearly", "various", "frequently", "proposed"],
        correct: "nearly",
        explanations: {
            guide: "修饰过去分词的副词。空格后为过去分词 completed（已完成），此处需要副词来表达动作的完成程度，选用 nearly 表示“几乎”。",
            family: "nearly (adv.几乎/将近) | various (adj.各种各样的) | frequently (adv.频繁地) | proposed (adj.提议的)。",
            details: "nearly completed 意为“几乎完成”，是商务文书、工作汇报中描述项目或任务进度的标准状语。其余选项词性不符或意思不合逻辑。",
            cn: "行政助理几乎已经完成了季度会议纪要的准备工作。",
            jp: "行政アシスタントは、四半期会議の要約の準備をほぼ（nearly）完了しました。"
        }
    },
    {
        id: 3,
        target: "flyer",
        category: "简单",
        stem: "The marketing department designed a colorful ________ to promote the upcoming golf tournament.",
        options: ["flyer", "automobile", "content", "closed"],
        correct: "flyer",
        explanations: {
            guide: "名词宾语语义辨析。空格前有不定冠词 a 和形容词 colorful（色彩鲜艳的），作 designed 的宾语，结合宣传活动（promote）语境选 flyer。",
            family: "flyer (n.传单/广告单) | automobile (n.汽车) | content (n.内容) | closed (adj.关闭的)。",
            details: "designed a flyer 意为“设计了传单”，是促销宣传、活动策划场景的典型词汇。其他选项不符合该宣传语境。",
            cn: "营销部门设计了一张色彩鲜艳的传单，以宣传即将举行的高尔夫锦标赛。",
            jp: "マーケティング部は、今度のゴルフ大会を宣伝するために、カラフルなチラシ（flyer）をデザインしました。"
        }
    },
    {
        id: 4,
        target: "content",
        category: "简单",
        stem: "The website editor is responsible for updating the online ________ on a daily basis.",
        options: ["content", "journal", "reward", "prior"],
        correct: "content",
        explanations: {
            guide: "名词词义与场景搭配。空格前有 online（在线的/网上的），作为 updating 的宾语，结合网站编辑的职责（website editor），选 content。",
            family: "content (n.内容) | journal (n.期刊) | reward (n./v.奖励) | prior (adj.先前的)。",
            details: "online content 意为“在线内容/网站内容”，是数字化媒体、网站运营和市场营销中的标准表达。其余选项语义不符。",
            cn: "网站编辑负责每天更新在线内容。",
            jp: "ウェブサイトのエディターは、オンラインコンテンツ（content）を毎日更新する責任があります。"
        }
    },
    {
        id: 5,
        target: "automobile",
        category: "简单",
        stem: "The leading manufacturer is planning to launch a new eco-friendly ________ next year.",
        options: ["automobile", "flyer", "status", "morning"],
        correct: "automobile",
        explanations: {
            guide: "名词中心语的词意选择。空格前有形容词 eco-friendly（环保的），作为 launch（发布/推出）的宾语，结合制造商背景选 automobile。",
            family: "automobile (n.汽车) | flyer (n.传单) | status (n.状态) | morning (n.早上)。",
            details: "launch a new eco-friendly automobile 意为“推出一款新型环保汽车”。符合汽车工业或现代绿色科技的发布语境。其他名词不合适。",
            cn: "这家领先的制造商计划明年推出一款新型环保汽车。",
            jp: "その一流メーカーは、来年新しい環境に優しい自動車（automobile）を発売することを計画しています。"
        }
    },
    {
        id: 6,
        target: "reward",
        category: "简单",
        stem: "Our customer loyalty program offers a special ________ for members who shop frequently at our stores.",
        options: ["reward", "approach", "various", "weekend"],
        correct: "reward",
        explanations: {
            guide: "名词宾语语义匹配。空格前有形容词 special（特殊的/特别的），作为 offers 的宾语，结合客户忠诚度计划（loyalty program），选 reward。",
            family: "reward (n.奖励/报酬) | approach (n./v.方法/接近) | various (adj.各种各样的) | weekend (n.周末)。",
            details: "offers a special reward 意为“提供特别奖励/福利”，常在零售会员制、营销回馈（rewards program）语境中作为核心宾语。其他选项词义不匹配。",
            cn: "我们的客户忠诚度计划为经常在店内购物的会员提供特别奖励。",
            jp: "当社の顧客ロイヤルティプログラムは、店舗で頻繁に買い物をする会員に特別な特典（reward）を提供しています。"
        }
    },
    {
        id: 7,
        target: "journal",
        category: "中等",
        stem: "The prominent researcher published a groundbreaking study in a prestigious scientific ________.",
        options: ["journal", "flyer", "status", "seminar"],
        correct: "journal",
        explanations: {
            guide: "修饰词后的专业名词辨析。空格前有 scientific（科学的），充当介词 in 的宾语，结合发表突破性研究（published a study）的语境，选 journal。",
            family: "journal (n.期刊/日志) | flyer (n.传单) | status (n.地位/状态) | seminar (n.研讨会)。",
            details: "scientific journal 意为“科学期刊”，指发布学术成果的专业杂志，是研发、学术及制药背景下的标准用词。flyer（传单）无法承载专业论文的发表。",
            cn: "这位杰出的研究员在一家著名的科学期刊上发表了一项突破性的研究成果。",
            jp: "その著名な研究者は、一流の科学専門誌（journal）に画期的な研究論文を発表しました。"
        }
    },
    {
        id: 8,
        target: "approach",
        category: "中等",
        stem: "The board of directors agreed to adopt a new ________ to handle customer complaints more efficiently.",
        options: ["approach", "reward", "content", "purchase"],
        correct: "approach",
        explanations: {
            guide: "及物动词后的名词宾语。空格前有形容词 new，作为 adopt（采用）的宾语，结合解决客户投诉的方案语境，选 approach。",
            family: "approach (n.方法/途径) | reward (n.奖励) | content (n.内容) | purchase (n./v.购买)。",
            details: "adopt a new approach 意为“采用一种新方法/新途径”，是管理层优化流程、应对问题（handle complaints）时的金牌商业短语。其他名词意思不通。",
            cn: "董事会同意采用一种新方法，以更高效地处理客户投诉。",
            jp: "取締役会は、顧客からの苦情をより効率的に処理するために、新しいアプローチ（approach）を採用することに合意しました。"
        }
    },
    {
        id: 9,
        target: "frequently",
        category: "中等",
        stem: "The IT support team has compiled a list of ________ asked questions to help users resolve system glitches.",
        options: ["frequently", "nearly", "various", "fully"],
        correct: "frequently",
        explanations: {
            guide: "修饰过去分词的副词。空格位于过去分词 asked 之前，修饰 asked questions（被问及的问题），选 frequently 构成固定搭配。",
            family: "frequently (adv.频繁地) | nearly (adv.几乎) | various (adj.各种各样的) | fully (adv.完全地)。",
            details: "frequently asked questions (FAQ) 意为“常见问题解答”，是所有科技支持、客户服务、系统管理场景中不可分割的固化术语。其余选项不构成此结构。",
            cn: "IT支持团队整理了一份常见问题解答列表，以帮助用户解决系统故障。",
            jp: "ITサポートチームは、ユーザーがシステムの不具合を解決するのを助けるために、よくある（frequently）質問のリストをまとめました。"
        }
    },
    {
        id: 10,
        target: "various",
        category: "中等",
        stem: "The supervisor assigned ________ tasks to the team members to ensure the project is completed on time.",
        options: ["various", "highly", "electronic", "closed"],
        correct: "various",
        explanations: {
            guide: "修饰复数名词的形容词。空格后为复数名词 tasks（任务），且直接作定语，需填入修饰词，选表示“各种各样的”形容词 various。",
            family: "various (adj.各种各样的) | highly (adv.高度地) | electronic (adj.电子的) | closed (adj.关闭的)。",
            details: "various tasks 意为“各种各样的任务”，常用于项目分工、人力资源管理。highly 是副词，不能修饰名词；electronic 与任务本身搭配不合理。",
            cn: "主管向团队成员分配了各种各样的任务，以确保项目能按时完成。",
            jp: "スーパーバイザーは、プロジェクトが予定通りに完了するように、チームメンバーにさまざまな（various）タスクを割り当てました。"
        }
    },
    {
        id: 11,
        target: "nearly",
        category: "中等",
        stem: "The renovation work on the corporate headquarters is ________ finished, with only minor details remaining.",
        options: ["nearly", "near", "nearness", "nearing"],
        correct: "nearly",
        explanations: {
            guide: "修饰形容词的副词词性选择。空格位于系动词 is 和形容词/过去分词 finished 之间，作状语，选用程度副词 nearly（几乎/将近）。",
            family: "nearly (adv.几乎) | near (adj./prep.接近的) | nearness (n.接近) | nearing (v-ing接近中)。",
            details: "is nearly finished 意为“几乎完成了”，是典型的工程、项目、任务进度的状态描述。其余同词族词汇无法在此处作修饰语。",
            cn: "公司总部的翻修工作几乎已经完成了，只剩下一些细节问题。",
            jp: "本社の改装工事はほぼ（nearly）完了しており、残るは細かいディテールのみとなっています。"
        }
    },
    {
        id: 12,
        target: "status",
        category: "中等",
        stem: "Before signing the agreement, we need to verify the financial ________ of the subsidiary.",
        options: ["status", "reward", "journal", "memo"],
        correct: "status",
        explanations: {
            guide: "名词短语修饰与词义辨析。空格前有 financial（财务的），后接介词 of，在合同签署前需要审核子公司的资产状态，选 status。",
            family: "status (n.状况/状态) | reward (n.报酬) | journal (n.期刊) | memo (n.备忘录)。",
            details: "financial status 意为“财务状况”，是合同管理、并购审核（due diligence）和投资评估中最常见的高频商务词组，等同于 financial position/condition。其他选项不符语意。",
            cn: "在签署协议之前，我们需要核实该子公司的财务状况。",
            jp: "契約に署名する前に、子会社の財務状況（status）を確認する必要があります。"
        }
    },
    {
        id: 13,
        target: "various",
        category: "困难",
        stem: "To meet the demands of a diverse clientele, our travel agency provides services of great ________.",
        options: ["variety", "various", "vary", "variously"],
        correct: "variety",
        explanations: {
            guide: "介词后的名词派生词性选择。空格位于形容词 great 之后，作介词 of 的宾语，此位置必须填入名词，选用 variety 构成表示特征的介词短语。",
            family: "variety (n.多样性/各种) | various (adj.各种各样的) | vary (v.变化) | variously (adv.不同地)。",
            details: "of great variety 意为“具有极大多样性的/各种各样的”，在语法上等同于 highly diverse。这是托业考试中针对 various / variety 词性辨析的高频难点。其余派生词词性不符。",
            cn: "为了满足多元化客户的需求，我们的旅行社提供各种各样的服务。",
            jp: "多様な顧客のニーズに応えるため、当旅行代理店は非常に多様な（variety）サービスを提供しています。"
        }
    },
    {
        id: 14,
        target: "approach",
        category: "困难",
        stem: "The management consultant suggested a highly methodical ________ to streamlining the distribution channel.",
        options: ["approach", "approachable", "approaching", "approached"],
        correct: "approach",
        explanations: {
            guide: "名词中心语及其介词搭配考核。空格前有形容词 methodical（有条理的），后面接介词 to 引导的短语，此处需要填入名词做 suggested 的宾语，选 approach。",
            family: "approach (n.方法/途径) | approachable (adj.平易近人的) | approaching (adj.逼近的) | approached (v-ed靠近)。",
            details: "approach to doing something 意为“做某事的方法/途径”，注意此处的 to 是介词，后接动名词形式 streamlining。这是考法非常高级的语法结构，其余干扰项多为形容词或分词。",
            cn: "管理顾问建议采用一种非常有条理的方法来精简分销渠道。",
            jp: "経営コンサルタントは、流通チャネルを合理化するために、非常に体系的なアプローチ（approach）を提案しました。"
        }
    },
    {
        id: 15,
        target: "reward",
        category: "困难",
        stem: "Working diligently on the biomedical research project proved to be a highly ________ experience for the young scientist.",
        options: ["rewarding", "reward", "rewards", "rewarded"],
        correct: "rewarding",
        explanations: {
            guide: "形容词修饰语的派生词词性辨析。空格前有程度副词 highly，后有名词 experience，此位置需要填入一个形容词，选用 rewarding 表示“值得的/有意义的”。",
            family: "rewarding (adj.有报偿的/值得的) | reward (n./v.奖励) | rewards (n-pl) | rewarded (v-ed受到奖赏)。",
            details: "a highly rewarding experience 意为“一次非常有意义的经历/收获颇丰的体验”，常用于描述极具技术挑战性或个人成长价值的工作、项目。其他词性在此无法构成正确的修饰关系。",
            cn: "在这项生物医学研究项目上的勤勉工作，事实证明对这位年轻科学家来说是一次收获颇丰的经历。",
            jp: "バイオメディカル研究プロジェクトに勤勉に取り組むことは、若い科学者にとって非常にやりがいのある（rewarding）経験であることが証明されました。"
        }
    },
    {
        id: 16,
        target: "journal",
        category: "困难",
        stem: "Several professional ________ will attend the press conference to cover the upcoming product launch.",
        options: ["journalists", "journal", "journalism", "journalistic"],
        correct: "journalists",
        explanations: {
            guide: "指代特定职业的复数名词辨析。空格前有 Several（几个/数个）和形容词 professional（专业的），且后接 attend（参加）做主语，需填入指代人的复数名词，选 journalists。",
            family: "journalists (n-pl新闻记者) | journal (n.期刊) | journalism (n.新闻业) | journalistic (adj.新闻业的)。",
            details: "professional journalists 意为“专业记者”。参加新闻发布会并对产品发布会进行报道（cover），符合公关与媒体传播（PR）场景下的主语设定。其余派生词意思不匹配。",
            cn: "几位专业记者将出席新闻发布会，报道即将举行的新品发布会。",
            jp: "今度の新製品発表会を取材するために、数人のプロのジャーナリスト（journalists）が記者会見に出席する予定です。"
        }
    },
    {
        id: 17,
        target: "content",
        category: "困难",
        stem: "Although the budget was limited, the department head felt ________ with the proposed infrastructure upgrade.",
        options: ["content", "contentment", "contently", "contents"],
        correct: "content",
        explanations: {
            guide: "系动词后的形容词表语。空格前有系动词 felt，后接介词 with，此处需填入形容词表语表示对升级方案的态度，选用 content 表达“满意的”。",
            family: "content (adj.满意的/满足的) | contentment (n.满足) | contently (adv.满足地) | contents (n-pl内容/目录)。",
            details: "feel content with... 意为“对……感到满意/知足”，在听力Part 2或阅读长难句中，常作为 satisfied 的高阶同义词替换。其他干扰项为名词或副词，无法作 felt 的表语。",
            cn: "尽管预算有限，部门主管对拟议的基础设施升级方案依然感到满意。",
            jp: "予算は限られていましたが、部門長は提案されたインフラのアップグレードに満足して（content）いるようでした。"
        }
    },
    {
        id: 18,
        target: "frequently",
        category: "困难",
        stem: "Because system glitches occur with increasing ________, the database maintenance team must work overtime.",
        options: ["frequency", "frequently", "frequent", "frequentness"],
        correct: "frequency",
        explanations: {
            guide: "介词短语中的名词中心语。空格位于介词 with 之后，并被现在分词/形容词 increasing（增加的）修饰，此处必须填入名词，选 frequency 构成固定状语结构。",
            family: "frequency (n.频率/频繁) | frequently (adv.频繁地) | frequent (adj.频繁的) | frequentness (n.频繁度)。",
            details: "with increasing frequency 意为“以递增的频率/越来越频繁地”，是描述IT故障（glitches）或故障发生频率的高级书面语体。其余派生词词性不符或不是常用术语。",
            cn: "由于系统故障发生得越来越频繁，数据库维护团队必须加班工作。",
            jp: "システムの不具合が発生する頻度（frequency）がますます高くなっているため、データベースメンテナンスチームは残業をしなければなりません。"
        }
    }
];