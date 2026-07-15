// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag181-190.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "electric",
        pos: "形",
        ipa: "/ɪˈlektrɪk/",
        cn: "电的，电动的",
        jp: "電気の、電動の",
        family: "electricity / electrical / electronically / electrician",
        tips: "办公数字化与汽车工业高频形容词。常考搭配 electric vehicle（EV，电动汽车）、electric motor（电动机）。在语法题中，注意与 electrical（与电有关的，如 electrical engineer）进行微小语义辨析。",
        desc: "The vehicle is electric."
    },
    {
        word: "particular",
        pos: "形/名",
        ipa: "/pərˈtɪkjələr/",
        cn: "特定的，特别的；挑剔的",
        jp: "特定の、特別な；好みがうるさい",
        family: "particularly / particularity",
        tips: "运营规划、需求分析与客户服务高频词。其副词形式 particularly 意为“特别地/尤其是”，经常在阅读中引导强调句，其核心同义替换词为 especially。",
        desc: "He has a particular task."
    },
    {
        word: "legal",
        pos: "形",
        ipa: "/ˈliːɡl/",
        cn: "法律的，合法的",
        jp: "法律の、合法的な",
        family: "legally / legality / legalize / illegal",
        tips: "合同拟定、合规审查与企业法务核心形容词。常考搭配 legal department（法律部）、legal advice（法律咨询）、legal requirements（法律要求）。其副词 legally 常修饰 bound（受法律约束的）。",
        desc: "Get some legal advice."
    },
    {
        word: "willing",
        pos: "形",
        ipa: "/ˈwɪlɪŋ/",
        cn: "乐意的，愿意的",
        jp: "喜んで〜する、〜する気がある",
        family: "willingness / willingly / will",
        tips: "团队协作、客服响应与志愿服务场景常用形容词。最核心的句型为 be willing to do something（乐意做某事）。在阅读中，经常与 ready 或 prepared 进行同义替换。",
        desc: "They are willing to help."
    },
    {
        word: "properly",
        pos: "副",
        ipa: "/ˈfrɑːpərli/",
        cn: "正确地，合适地，妥善地",
        jp: "適切に、正しく、適切に",
        family: "proper / property / improper",
        tips: "设备操作、系统运行与后勤维护核心副词。常考搭配 properly installed（妥善安装）、properly functioning（运行正常）。在听力 Part 3 & 4 中常用于确认故障设备已被妥善处理。",
        desc: "The machine runs properly."
    },
    {
        word: "claim",
        pos: "動/名",
        ipa: "/kleɪm/",
        cn: "声称；索赔，要求；所有权",
        jp: "主張する、請求する；請求、主張",
        family: "claims / claimed / claiming / claimant",
        tips: "客户服务、财务报销及保险保障核心词。常考搭配 file an insurance claim（提出保险索赔）、expense claim（报销申请）。在阅读中，也常指 baggage claim（行李提取处）。",
        desc: "File an insurance claim."
    },
    {
        word: "drawing",
        pos: "名",
        ipa: "/ˈdrɔːɪŋ/",
        cn: "图纸，图画；抽奖",
        jp: "図面、絵、デッサン；抽選",
        family: "draw / drawings / drawer",
        tips: "建筑工程、产品设计与促销推广高频名词。常考搭配 architectural drawing（建筑图纸）、technical drawing（技术图纸）。在活动推广场景中，prize drawing 意为“抽奖”。",
        desc: "The drawing is detailed."
    },
    {
        word: "flavor",
        pos: "名/動",
        ipa: "/ˈfleɪvər/",
        cn: "风味，味道；给……调味",
        jp: "味、風味、香料；風味をつける",
        family: "flavors / flavorful / flavoring",
        tips: "餐饮服务、食品研发与市场调研高频名词。常考搭配 new flavor（新口味）、flavor profiling（风味特征分析）。多用于讨论食品公司研发新饮品、新零食以迎合市场的题材。",
        desc: "I like this flavor."
    },
    {
        word: "graduate",
        pos: "動/名",
        ipa: "/ˈɡrædʒuət/",
        cn: "毕业；毕业生",
        jp: "卒業する；卒業生",
        family: "graduation / graduated / graduating",
        tips: "求职招聘与学历背景调查高阶词汇。常考搭配 graduate from（毕业于）、recent graduate（应届毕业生）。在招聘启事中，经常作为对应聘者学历资质筛选的基本考查点。",
        desc: "She is a recent graduate."
    },
    {
        word: "familiar",
        pos: "形",
        ipa: "/fəˈmɪliər/",
        cn: "熟悉的，常见的",
        jp: "馴染みのある、よく知られた",
        family: "familiarity / familiarize / familiarly",
        tips: "员工培训、技术说明与业务交接核心形容词。必考搭配 be familiar with...（熟悉……，注意介词用 with）。常用于说明新入职员工必须熟悉公司规章或新软件系统。",
        desc: "We are familiar with it."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "electric",
        category: "简单",
        stem: "The manufacturer decided to recall the new ________ vehicle because of potential safety glitches in the battery grid.",
        options: ["electric", "particular", "drawing", "office"],
        correct: "electric",
        explanations: {
            guide: "修饰名词的形容词词义辨析。空格后为名词 vehicle（车辆），结合 battery grid（电池网格）和 recall（召回）等工业背景选 electric。",
            family: "electric (adj.电动地/电的) | particular (adj.特定的) | drawing (n.图纸/抽奖) | office (n.办公室)。",
            details: "electric vehicle 意为“电动汽车（EV）”，是现代汽车制造和绿色能源场景下的高频行业词汇。其他选项不符合“汽车类型”的逻辑修饰关系。",
            cn: "由于电池电网存在潜在的安全故障，该制造商决定召回这款新型电动汽车。",
            jp: "バッテリーグリッドの潜在的な安全上の不具合のため、メーカーはその新型電気（electric）自動車の回収（リコール）を決定しました。"
        }
    },
    {
        id: 2,
        target: "legal",
        category: "简单",
        stem: "We highly recommend consulting our ________ department before signing any formal agreements with the supplier.",
        options: ["legal", "willing", "flavor", "closed"],
        correct: "legal",
        explanations: {
            guide: "名词前的修饰性形容词词义辨析。空格与后面的 department 组合构成一个公司职能部门名称，结合前文的 signing agreements（签署协议），选 legal。",
            family: "legal (adj.法律的/合法的) | willing (adj.乐意的) | flavor (n.风味) | closed (adj.关闭的)。",
            details: "legal department 意为“法律部/法务部”。在签署正式协议（formal agreements）前进行法务合规咨询是企业标准的风险防范措施。其余修饰词不符合部门名称。",
            cn: "我们强烈建议在与供应商签署任何正式协议之前，先咨询我们的法律部门。",
            jp: "サプライヤーと正式な契約を結ぶ前に、当社の法務（legal）部にご相談いただくことを強くお勧めします。"
        }
    },
    {
        id: 3,
        target: "willing",
        category: "简单",
        stem: "Please let the training coordinator know if you are ________ to volunteer for the upcoming corporate seminar.",
        options: ["willing", "properly", "graduate", "proposed"],
        correct: "willing",
        explanations: {
            guide: "系动词后的形容词表语搭配。空格前有 are，后接 to 引导的动词不定式，需要填入形容词表语，选用 willing 构成固定结构。",
            family: "willing (adj.乐意的) | properly (adv.正确地) | graduate (v./n.毕业) | proposed (adj.提议的)。",
            details: "be willing to do something 意为“乐意/愿意做某事”，属于团队协作和志愿活动中极高频的经典搭配。其余选项词性不符或不能与 to volunteer 搭配。",
            cn: "如果您愿意为即将举行的企业研讨会做志愿者，请告知培训协调员。",
            jp: "今度の企業セミナーにボランティアとして参加する意思がある（willing）場合は、研修コーディネーターにお知らせください。"
        }
    },
    {
        id: 4,
        target: "claim",
        category: "简单",
        stem: "To receive a full refund, customers must submit their warranty ________ within thirty days of purchase.",
        options: ["claim", "drawing", "familiar", "weekend"],
        correct: "claim",
        explanations: {
            guide: "名词宾语语义与场景搭配。空格位于形容词性物主代词 their 和名词 warranty（保修）之后，作为 submit 的宾语，结合退款（refund）语境选 claim。",
            family: "claim (n.索赔/申请) | drawing (n.图纸/抽奖) | familiar (adj.熟悉的) | weekend (n.周末)。",
            details: "warranty claim 意为“保修申请/保修索赔”，是售后服务与客诉处理中的高频标准短语。其余干扰项词意完全不通。",
            cn: "要获得全额退款，客户必须在购买后三十天内提交其保修申请。",
            jp: "全額返金を受け取るには、顧客は購入後30日以内に保証請求（claim）を提出しなければなりません。"
        }
    },
    {
        id: 5,
        target: "flavor",
        category: "简单",
        stem: "The beverage company launched a new strawberry ________ to attract younger consumers this summer.",
        options: ["flavor", "particular", "properly", "deposit"],
        correct: "flavor",
        explanations: {
            guide: "修饰词后的名词中心语。空格前有 strawberry（草莓），作为 launched（推出）的宾语，结合饮料公司（beverage company）背景选 flavor。",
            family: "flavor (n.风味/口味) | particular (adj.特定的) | properly (adv.正确地) | deposit (n./v.押金)。",
            details: "strawberry flavor 意为“草莓口味/草莓风味”。在快消品及零售场景中，推出新口味（launch a new flavor）是刺激销量、吸引年轻消费群体的常见行销手段。",
            cn: "这家饮料公司推出了一种新型草莓风味饮料，以在今年夏天吸引年轻消费者。",
            jp: "その飲料会社は、この夏、若い消費者を引きつけるために新しいイチゴ味（flavor）を発売しました。"
        }
    },
    {
        id: 6,
        target: "familiar",
        category: "简单",
        stem: "New employees must become ________ with the safety regulations of the manufacturing facility during their first week.",
        options: ["familiar", "electric", "legal", "historical"],
        correct: "familiar",
        explanations: {
            guide: "系动词后的形容词表语搭配。空格前有系动词 become，后接介词 with，结合“新员工”和“安全规章”语境选 familiar。",
            family: "familiar (adj.熟悉的) | electric (adj.电动的) | legal (adj.法律的) | historical (adj.历史的)。",
            details: "become familiar with... 意为“熟悉……”，是入职培训、流程交接等人力资源场景下的绝对核心搭配。其余选项不能接介词 with 表达该语义。",
            cn: "新员工在入职的第一周内必须熟悉制造设施的安全规章。",
            jp: "新入社員は、最初の1週間で製造施設の安全規則をよく理解（familiar）しなければなりません。"
        }
    },
    {
        id: 7,
        target: "particular",
        category: "中等",
        stem: "The general manager is looking for a ________ type of software to streamline the database maintenance.",
        options: ["particular", "willing", "graduate", "lucrative"],
        correct: "particular",
        explanations: {
            guide: "修饰名词的形容词。空格位于不定冠词 a 和名词 type（类型）之间，起修饰作用，根据寻找特定软件以简化数据库维护的语意选 particular。",
            family: "particular (adj.特定的/特别的) | willing (adj.乐意的) | graduate (n./v.毕业生) | lucrative (adj.获利的)。",
            details: "a particular type of... 意为“一种特定类型的……”。总经理并非寻找任意软件，而是要找一种“特定的”软件来达到 streamline（精简）的目的。其余修饰词不符逻辑。",
            cn: "总经理正在寻找一种特定类型的软件，以精简数据库的维护工作。",
            jp: "ゼネラルマネージャーは、データベースのメンテナンスを合理化するために特定の（particular）タイプのソフトウェアを探しています。"
        }
    },
    {
        id: 8,
        target: "properly",
        category: "中等",
        stem: "Please make sure that all electronic appliances are ________ shut down before the office closes for the weekend.",
        options: ["properly", "particular", "willing", "thoroughly"],
        correct: "properly",
        explanations: {
            guide: "修饰过去分词的副词。空格位于 are 和过去分词 shut down 之间，作状语，结合电器关闭和办公安全的日常行政语境选 properly。",
            family: "properly (adv.正确地/妥善地) | particular (adj.特定的) | willing (adj.乐意的) | thoroughly (adv.彻底地)。",
            details: "properly shut down 意为“妥善关闭/正确关闭”。强调在周末办公室关闭前，所有电器应按照规定安全地关闭。虽然 thoroughly（彻底地）意思相近，但 properly 与 shut down、installed、maintained 属于更经典的商务固定资产维护搭配。",
            cn: "在办公室因周末关闭前，请务必确保所有电器设备都已妥善关闭。",
            jp: "週末にオフィスが閉まる前に、すべての電化製品が適切に（properly）シャットダウンされていることを確認してください。"
        }
    },
    {
        id: 9,
        target: "drawing",
        category: "中等",
        stem: "The lead architect has finalized the detailed ________ for the renovated corporate headquarters.",
        options: ["drawing", "legal", "claim", "department"],
        correct: "drawing",
        explanations: {
            guide: "修饰词后的名词中心语。空格前有形容词 detailed（详细的），作 finalized（敲定）的宾语，结合主语 lead architect（首席建筑师）选 drawing。",
            family: "drawing (n.图纸) | legal (adj.法律的) | claim (n./v.索赔) | department (n.部门)。",
            details: "architectural/technical drawing 意为“建筑/技术图纸”。建筑师最终确定总部翻修设计图纸，属于标准的工程建设和房产开发场景。其他名词无法在此语境下充当 finalized 的合理宾语。",
            cn: "首席建筑师已经敲定了翻修后的公司总部的详细设计图纸。",
            jp: "主任建築家は、改装された本社ビルの詳細な設計図面（drawing）を最終決定しました。"
        }
    },
    {
        id: 10,
        target: "graduate",
        category: "中等",
        stem: "Applicants who did not ________ from a university must have at least five years of experience in the automotive industry.",
        options: ["graduate", "claim", "familiar", "qualify"],
        correct: "graduate",
        explanations: {
            guide: "助动词后的不及物动词词义及搭配。空格位于 did not 之后，后接介词 from，此处需要填入不及物动词原形，选 graduate。",
            family: "graduate (v.毕业) | claim (v.声称) | familiar (adj.熟悉的) | qualify (v.符合资格)。",
            details: "graduate from a university 意为“大学毕业”，是人力资源招聘和简历评估场景中的核心语法搭配。虽然 qualify（符合资格）词义相关，但通常接 for 或 to do，不与 from 构成此类搭配。",
            cn: "未从大学毕业的申请人必须在汽车行业拥有至少五年的工作经验。",
            jp: "大学を卒業（graduate）していない応募者は、自動車業界で少なくとも5年の経験を持っていなければなりません。"
        }
    },
    {
        id: 11,
        target: "legal",
        category: "中等",
        stem: "The independent arbitrator resolved the dispute, ensuring that both firms acted in accordance with ________ requirements.",
        options: ["legal", "electric", "flavor", "proposed"],
        correct: "legal",
        options: ["legal", "electric", "flavor", "proposed"],
        explanations: {
            guide: "名词前的修饰性形容词。空格用于修饰名词 requirements（要求/规定），结合 arbitrator（仲裁员）和 dispute（纠纷）等法务合规背景，选用 legal。",
            family: "legal (adj.法律的) | electric (adj.电动的) | flavor (n.风味) | proposed (adj.提议的)。",
            details: "legal requirements 意为“法律要求/法律规定”。在仲裁或合同纠纷中，确保双方的行为符合法律规定是结案标准描述。其他选项无法构成合理的修饰关系。",
            cn: "独立仲裁员解决了该纠纷，确保了两家公司的行为都符合法律要求。",
            jp: "独立仲裁人は紛争を解決し、両社が法的（legal）要件に従って行動したことを確認しました。"
        }
    },
    {
        id: 12,
        target: "willing",
        category: "中等",
        stem: "The customer service team showed great ________ to assist clients who encountered database glitches.",
        options: ["willingness", "willing", "willingly", "will"],
        correct: "willingness",
        explanations: {
            guide: "形容词修饰下的名词中心语。空格前有形容词 great（极大的），且后接 to assist 结构作目的状语，此位置需要填入抽象名词作 showed 的宾语，选 willingness。",
            family: "willingness (n.乐意/意愿) | willing (adj.乐意的) | willingly (adv.欣然地) | will (n.意志/v.将要)。",
            details: "showed great willingness to do something 意为“表现出极大的乐意/配合度去协助做某事”，是评估员工绩效、客户服务满意度时的标配高阶词汇。其余同族词词性不符。",
            cn: "客服团队表现出极大的乐意，去协助那些遇到数据库故障的客户。",
            jp: "カスタマーサービスチームは、データベースの不具合に遭遇したクライアントを支援することに非常に前向きな姿勢（willingness）を示しました。"
        }
    },
    {
        id: 13,
        target: "electric",
        category: "困难",
        stem: "Due to the sudden power grid failure, the manufacturing plant is experiencing a complete loss of ________ power.",
        options: ["electrical", "electricity", "electrician", "electrically"],
        correct: "electrical",
        explanations: {
            guide: "名词前的修饰词词性辨析。空格用于修饰名词 power（能量/电力），在形容词修饰的选择中，electrical 用于表示“与电相关的/由电产生或传递的”，是更地道的修饰语。",
            family: "electrical (adj.电的/与电有关的) | electricity (n.电) | electrician (n.电工) | electrically (adv.电力地)。",
            details: "electrical power 意为“电力”，指由电网输送的电能量。虽然 electric 也表示电，但修饰动力、输电系统、故障等通常采用形式更广的 electrical。这里 electricity 是名词，不修饰单数名词 power。",
            cn: "由于电网突然故障，该制造厂目前处于完全断电状态。",
            jp: "突然の送電網の故障により、製造工場は電気（electrical）供給の完全な喪失を経験しています。"
        }
    },
    {
        id: 14,
        target: "particular",
        category: "困难",
        stem: "The executive committee was ________ pleased with the rapid revenue growth of our biomedical subsidiary.",
        options: ["particularly", "particular", "particulars", "particularity"],
        correct: "particularly",
        explanations: {
            guide: "修饰形容词的副词位置判定。空格修饰形容词 pleased（感到满意的/高兴的），此位置必须填入副词，选用 particularly 表示程度。",
            family: "particularly (adv.特别地/尤其是) | particular (adj.特定的) | particulars (n-pl详情) | particularity (n.特异性)。",
            details: "was particularly pleased with... 意为“对……感到特别满意”，常在企业季报中用于点名褒奖表现突出的业务板块或子公司（subsidiary）。其余选项非副词，无法修饰形容词 pleased。",
            cn: "执行委员会对我们生物医学子公司收入的快速增长感到特别满意。",
            jp: "執行委員会は、当社のバイオメディカル子会社の急速な収益増加に特に（particularly）満足していました。"
        }
    },
    {
        id: 15,
        target: "properly",
        category: "困难",
        stem: "The database upgrade was not ________ executed, resulting in several unattended system glitches.",
        options: ["properly", "proper", "propriety", "improper"],
        correct: "properly",
        explanations: {
            guide: "被动语态中的修饰状语副词。空格位于助动词 was not 与过去分词 executed（执行）之间，需填入副词修饰执行动作，选 properly。",
            family: "properly (adv.正确地/妥善地) | proper (adj.恰当的) | propriety (n.得体) | improper (adj.不恰当的)。",
            details: "was not properly executed 意为“未被妥善执行/没有正确实施”。属于IT事故分析、运营质量评估场景下最核心的句式，用来阐释产生故障（glitches）的深层原因。",
            cn: "数据库升级未被妥善执行，导致出现了几个无人处理的系统故障。",
            jp: "データベースのアップグレードが適切に（properly）実行されなかったため、いくつかの放置されたシステムの不具合が発生しました。"
        }
    },
    {
        id: 16,
        target: "claim",
        category: "困难",
        stem: "The firm's legal representatives ________ that they originally developed the software before the patent dispute arose.",
        options: ["claimed", "claim", "claimant", "claims"],
        correct: "claimed",
        explanations: {
            guide: "谓语动词时态选择。空格作 that 引导的宾语从句的谓语动词，结合从句中的 originally（最初）以及主句前的过去时条件 arose，判定主句动词用过去时，选 claimed。",
            family: "claimed (v-ed声称) | claim (v.声称) | claimant (n.索赔人) | claims (v-3sg/n-pl)。",
            details: "claimed that... 意为“声称/主张……”。在法务与专利纠纷（patent dispute）场景下，叙述双方最初主张所有权的行为。其余形式在时态上与句尾过去式 arose 冲突。",
            cn: "该公司的法律代表声称，在专利纠纷发生之前，他们最初就开发了该软件。",
            jp: "同社の法的代理人は、特許紛争が発生する前に、自分たちが元々そのソフトウェアを開発したと主張（claimed）しました。"
        }
    },
    {
        id: 17,
        target: "drawing",
        category: "困难",
        stem: "Hundreds of local residents attended the annual promotional event in hopes of winning the prize ________.",
        options: ["drawing", "draw", "drawings", "drawn"],
        correct: "drawing",
        explanations: {
            guide: "复合名词中心词的词性判定。空格前有修饰名词 prize（奖品），二者组合构成固定名词，作为 winning 的宾语，选 drawing。",
            family: "drawing (n.抽奖/图纸) | draw (v.吸引/画) | drawings (n-pl图纸) | drawn (v-ed被画)。",
            details: "prize drawing 意为“抽奖活动”，是托业中关于零售促销、新店开业、社区活动场景中的金牌常备词汇，表示抽取幸运奖品的具体行为。此处为单数特指概念，用单数形式 drawing。",
            cn: "数百名当地居民参加了年度宣传活动，希望能在抽奖中赢得奖品。",
            jp: "何百人もの地元住民が、抽選（drawing）で賞品を当てることを期待して、年次の販促イベントに参加しました。"
        }
    },
    {
        id: 18,
        target: "graduate",
        category: "困难",
        stem: "Our internship program is specifically designed to provide recent university ________ with practical business experience.",
        options: ["graduates", "graduate", "graduation", "graduated"],
        correct: "graduates",
        explanations: {
            guide: "修饰词后的复数名词选择。空格前有 recent university（近期的大学），作为 provide... with 结构的宾语，需填入指代人的复数名词（应届毕业生群体），选 graduates。",
            family: "graduates (n-pl毕业生) | graduate (n-sg/v.毕业生/毕业) | graduation (n.毕业典礼) | graduated (v-ed毕业的)。",
            details: "provide recent university graduates with... 意为“为应届大学毕业生提供……”。毕业生作为接受实习项目（internship program）的受体，需要使用人称名词的复数形式。graduation（毕业行为/典礼）不合逻辑。",
            cn: "我们的实习计划专门设计用于为应届大学毕业生提供实际的商业经验。",
            jp: "当社のインターンシッププログラムは、最近の大学卒業生（graduates）に実践的なビジネス経験を提供するために特別に設計されています。"
        }
    }
];