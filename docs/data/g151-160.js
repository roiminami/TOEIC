// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag81-90.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "original",
        pos: "形/名",
        ipa: "/əˈrɪdʒənl/",
        cn: "原来的，起初的；原件，原作",
        jp: "最初の、独自の；原図、原本",
        family: "originality / originally / originate",
        tips: "托业阅读及行政办公高频词。常考短语 return the original document（归还原件）或 keep the original receipt（保留原始收据）。其副词形式 originally（起初、本来）也是日程变更场景的常客。",
        desc: "Please keep the original copy."
    },
    {
        word: "selection",
        pos: "名",
        ipa: "/sɪˈlekʃn/",
        cn: "选择，挑选；选集，品类",
        jp: "選択、選出、品揃え",
        family: "select / selective / selectively / selector",
        tips: "商务采购与零售场景核心名词。极其常考的固定搭配为 a wide selection of...（琳琅满目的/供广泛选择的……），在阅读中常与 a wide variety of 或 an assortment of 进行同义替换。",
        desc: "We have a wide selection."
    },
    {
        word: "attract",
        pos: "動",
        ipa: "/əˈtrækt/",
        cn: "吸引，引起……的注意",
        jp: "惹きつける、引きつける、魅了する",
        family: "attraction / attractive / attractively",
        tips: "市场营销与广告场景的核心动词。常见考点搭配包括 attract customers（吸引客户）、attract investment（吸引投资）。名物形式 attraction 可指“吸引人的展项或景点”。",
        desc: "The new ad will attract clients."
    },
    {
        word: "handle",
        pos: "動/名",
        ipa: "/ˈhændl/",
        cn: "处理，应付；对待；把手",
        jp: "処理する、扱う；取っ手",
        family: "handled / handler / handling",
        tips: "日常行政与客户服务核心词。在题目中常与 deal with、manage 或 resolve 进行同义替换，如 handle customer complaints（处理客户投诉）。动名词形式 handling 常见于 shipping and handling（运费与装卸费）。",
        desc: "She will handle the complaints."
    },
    {
        word: "memo",
        pos: "名",
        ipa: "/ˈmemoʊ/",
        cn: "备忘录，（公司内部的）通知",
        jp: "社内連絡票、メモ、通達",
        family: "memos / memorandum",
        tips: "办公自动化与内部通信的核心词。常考短语 send a memo to staff（向员工发备忘录）、as stated in the memo（如备忘录所述），是托业 Part 7 短信/信函题型中的高阶高频文体。",
        desc: "I read the internal memo."
    },
    {
        word: "attach",
        pos: "動",
        ipa: "/əˈtætʃ/",
        cn: "附加，连接；随附（文件等）",
        jp: "添付する、取り付ける",
        family: "attachment / attached / detachable",
        tips: "商务邮件及日常行政场景核心动词。核心搭配 attach a file to the email（在邮件中随附文件）。其过去分词作定语的结构 Please find the attached report（请查收随附的报告）是听力与阅读的必考句型。",
        desc: "Please attach your resume here."
    },
    {
        word: "correct",
        pos: "形/動",
        ipa: "/kəˈrekt/",
        cn: "正确的，恰当的；修改，纠正",
        jp: "正しい、適切な；訂正する、修正する",
        family: "correction / correctly / corrective / incorrect",
        tips: "兼具形容词与动词词性。作动词时指 correct errors（纠正错误）；作形容词时指 correct information（正确的信息）。名词形式 correction 常考短语 make corrections（做出修改）。",
        desc: "This answer is correct."
    },
    {
        word: "council",
        pos: "名",
        ipa: "/ˈkaʊnsl/",
        cn: "委员会，理事会，地方议会",
        jp: "委員会、評議会、地方自治体",
        family: "councilor / councils",
        tips: "公共行政、社区事务或企业高层管理场景词汇。常考短语有 city council（市议会）、local council（地方委员会）。注意不要与发音相似的 counsel（法律顾问/建议）相混淆。",
        desc: "The city council met today."
    },
    {
        word: "suppose",
        pos: "動",
        ipa: "/səˈpoʊz/",
        cn: "假设，猜想；认为，料想",
        jp: "仮定する、思う、推測する",
        family: "supposed / supposedly / supposition",
        tips: "常考其经典的被动结构 be supposed to do something，意为“应该做某事/按计划应当做某事”，常用于表达商务规定或原本的日程计划。副词 supposedly 意为“据称/据推测”。",
        desc: "You are supposed to help."
    },
    {
        word: "regular",
        pos: "形/名",
        ipa: "/ˈreɡjələr/",
        cn: "定期的，常规的，频繁的；常客",
        jp: "定期的な、通常の、規則正しい；常連客",
        family: "regularly / regularity / regulate / regulation",
        tips: "企业运营与行政管理高频形容词。常考搭配 regular updates（定期更新）。其极其核心的派生介词短语为 on a regular basis（定期地），在阅读中等同于副词 regularly。",
        desc: "We have regular staff meetings."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "original",
        category: "简单",
        stem: "Please make sure to return the ________ contract to the legal department after signing it.",
        options: ["original", "selection", "attract", "handle"],
        correct: "original",
        explanations: {
            guide: "形容词修饰名词的语法辨析。空格后有名词 contract（合同），前面需要一个形容词进行修饰，结合商务语境选择 original（原件的/最初的）。",
            family: "original (adj.原始的/原件的) | selection (n.选择) | attract (v.吸引) | handle (v.处理)。",
            details: "return the original contract 意为“归还合同原件”，在签署法律文件和规范商务流程中属于标准化要求。其他选项与合同搭配均不符合语境。",
            cn: "签署后，请务必将合同原件交还给法律部。",
            jp: "署名後、契約書の原本（original）を法務部に必ず返却してください。"
        }
    },
    {
        id: 2,
        target: "selection",
        category: "简单",
        stem: "The downtown department store boasts a wide ________ of office supplies and electronic appliances.",
        options: ["selection", "memo", "council", "regular"],
        correct: "selection",
        explanations: {
            guide: "固定量词短语搭配能力考核。空格前有 a wide，后有介词 of，此处需要填入名词 selection 构成核心固定搭配。",
            family: "selection (n.选择/品类) | memo (n.备忘录) | council (n.委员会) | regular (adj.定期的)。",
            details: "a wide selection of... 是托业考试零售与采购场景下的经典高频表达，意为“琳琅满目的/供广泛选择的”，在此指种类繁多的办公用品和电子电器。",
            cn: "市中心的这家百货商店拥有琳琅满目的办公用品和电子家电。",
            jp: "ダウンタウンのデパートは、オフィス用品や電化製品の豊富な品揃え（selection）を誇っています。"
        }
    },
    {
        id: 3,
        target: "attract",
        category: "简单",
        stem: "The marketing team launched a new social media campaign to ________ more young customers.",
        options: ["attract", "attach", "suppose", "correct"],
        correct: "attract",
        explanations: {
            guide: "动词不定式后的核心动词语义辨析。to 后面需要接动词原形表目的，结合后面的宾语 more young customers（更多年轻客户），选用及物动词 attract。",
            family: "attract (v.吸引) | attach (v.附上) | suppose (v.假设) | correct (v.纠正)。",
            details: "attract customers 意为“吸引客户”，是市场营销、广告宣传场景下绝对的常考核心搭配。其余选项在此语境下逻辑不通。",
            cn: "营销团队推出了一个新的社交媒体活动，以吸引更多年轻客户。",
            jp: "マーケティングチームは、より多くの若い顧客を惹きつける（attract）ために、新しいSNSキャンペーンを開始しました。"
        }
    },
    {
        id: 4,
        target: "handle",
        category: "简单",
        stem: "Experienced customer service representatives can ________ difficult complaints with professional tact.",
        options: ["handle", "original", "council", "memo"],
        correct: "handle",
        explanations: {
            guide: "情态动词后的动词原形及语意辨析。can 后面需要接动词原形作为句子的核心谓语，结合宾语 complaints（投诉），选择 handle（处理）。",
            family: "handle (v.处理) | original (adj.原始的) | council (n.委员会) | memo (n.备忘录)。",
            details: "handle complaints 意为“处理投诉”，是托业客服及日常行政场景下极具代表性的行业组合形式。其余选项词性不符或语意不通。",
            cn: "经验丰富的客服代表可以用专业的技巧处理棘手的投诉。",
            jp: "経験豊富なカスタマーサービス担当者は、プロフェッショナルな機転で難しい苦情を処理する（handle）ことができます。"
        }
    },
    {
        id: 5,
        target: "memo",
        category: "简单",
        stem: "All employees are required to read the internal ________ regarding the updated parking regulations.",
        options: ["memo", "selection", "correct", "regular"],
        correct: "memo",
        explanations: {
            guide: "修饰语后的名词中心语辨析。the internal（内部的）后面缺少一个名词作动词 read 的宾语，结合后文发布规定的语境，选 memo。",
            family: "memo (n.备忘录/内部通知) | selection (n.选择) | correct (adj.正确的) | regular (adj.定期的)。",
            details: "internal memo 意为“内部备忘录/内部通知”，是企业内部下达规章制度或知会员工最常用的公文形式。因此填入名词 memo 最为恰当。",
            cn: "所有员工都需要阅读关于更新后停车规定的内部备忘录。",
            jp: "すべての従業員は、更新された駐車規則に関する社内連絡票（memo）を読む必要があります。"
        }
    },
    {
        id: 6,
        target: "attach",
        category: "简单",
        stem: "Please ________ a digital copy of your receipt to the online reimbursement form before submitting it.",
        options: ["attach", "attract", "handle", "suppose"],
        correct: "attach",
        explanations: {
            guide: "祈使句核心动词及介词短语的固定搭配。Please 后面需要接动词原形，并且能与后文的介词 to 联用表示“将……附在……上”。",
            family: "attach (v.附上) | attract (v.吸引) | handle (v.处理) | suppose (v.假设)。",
            details: "attach A to B 意为“把A附到B上”，此处指将收据的数字化副本附到线上报销单上。这属于企业财务报销及办公自动化的标志性句型。",
            cn: "在提交之前，请将收据的电子版附在线上报销单上。",
            jp: "提出する前に、オンライン経費精算書に領収書のデジタルコピーを添付（attach）してください。"
        }
    },
    {
        id: 7,
        target: "council",
        category: "中等",
        stem: "The local ________ approved the zoning plan to build a new tech park in the northern territory.",
        options: ["council", "subsidy", "dispute", "tournament"],
        correct: "council",
        explanations: {
            guide: "主语名词语义及高阶商务场景辨析。句子的谓语是 approved（批准），宾语是 zoning plan（分区规划），能够行使此行政权力的主体应是 council。",
            family: "council (n.委员会/地方议会) | subsidy (n.补贴) | dispute (n.纠纷) | tournament (n.锦标赛)。",
            details: "local council 意为“地方委员会/地方议会”。批准城市分区或公共开发规划符合行政公文场景的商业逻辑。distractor 均无法与批准规划构成合逻辑的主谓关系。",
            cn: "地方委员会批准了在北部地区建设新科技园的分区规划。",
            jp: "地方自治体（council）は、北部地域に新しいテックパークを建設する区画整理計画を承認しました。"
        }
    },
    {
        id: 8,
        target: "suppose",
        category: "中等",
        stem: "The delivery crew was ________ to install the new office appliances yesterday, but the shipment was delayed.",
        options: ["supposed", "suppose", "supposedly", "supposition"],
        correct: "supposed",
        explanations: {
            guide: "固定被动结构及语态用法。空格前面有助动词 was，后面有不定式符号 to install，构成了 be supposed to do something 的固定词组。",
            family: "supposed (adj./v-ed应有的) | suppose (v.假设) | supposedly (adv.据称) | supposition (n.假定)。",
            details: "be supposed to do 意为“本应该/按计划应当做某事”，通常在后文接 but 引导的转折句，表达原定的运营或物流计划未能按时达成。",
            cn: "配送人员本应该在昨天安装新的办公设备，但货物被延迟了。",
            jp: "配送スタッフは昨日、新しいオフィス機器を設置することになっていました（supposed）が、発送が遅れました。"
        }
    },
    {
        id: 9,
        target: "regular",
        category: "中等",
        stem: "The system administrators back up the server databases on a ________ basis to prevent data loss.",
        options: ["regular", "regularly", "regularity", "regulate"],
        correct: "regular",
        exregular: "regular",
        explanations: {
            guide: "介词短语中的专属形容词修饰。on a ... basis 是托业中极其高频的核心短语，中间必须填入形容词来修饰名词 basis。",
            family: "regular (adj.定期的) | regularly (adv.定期地) | regularity (n.规则性) | regulate (v.管制)。",
            details: "on a regular basis 意为“定期地/常规地”，其含义完全等同于副词 regularly，常用于描述IT维护、定期会议或常态化企业审计工作。",
            cn: "系统管理员定期备份服务器数据库，以防止数据丢失。",
            jp: "システム管理者は、データ損失を防ぐために定期的な（regular）ベースでサーバーデータベースをバックアップしています。"
        }
    },
    {
        id: 10,
        target: "original",
        category: "中等",
        stem: "The regional convention was ________ scheduled for Ohio, but it was moved to Chicago due to venue issues.",
        options: ["originally", "original", "originality", "originate"],
        correct: "originally",
        explanations: {
            guide: "副词修饰过去分词作状语。空格位于助动词 was 和过去分词 scheduled 之间，修饰整个被动谓语动词，需要填入副词形式。",
            family: "originally (adv.起初/本来) | original (adj.原始的) | originality (n.独创性) | originate (v.发源)。",
            details: "originally scheduled for... 意为“原定于……”，属于托业听力第三、四部分和阅读中关于会议变更、日程调整等经典商业变动考点。",
            cn: "区域大会最初计划在俄亥俄州举行，但由于场地问题被改到了芝加哥。",
            jp: "地方大会は当初（originally）、オハイオ州で予定されていましたが、会場の問題でシカゴに変更されました。"
        }
    },
    {
        id: 11,
        target: "attach",
        category: "中等",
        stem: "Please review the ________ documents for detailed specifications regarding the structural reinforcement.",
        options: ["attached", "attach", "attachment", "detachable"],
        correct: "attached",
        explanations: {
            guide: "过去分词作前置定语修饰名词。空格位于定冠词 the 和复数名词 documents 之间，需要填入具有被动/完成含义的过去分词作形容词用。",
            family: "attached (adj./v-ed随附的) | attach (v.附上) | attachment (n.附件) | detachable (adj.可拆卸的)。",
            details: "the attached documents 意为“随附的文件/附件”，是商务信函、技术说明书和电子邮件通知中最标准的行业行话表达。",
            cn: "请审阅随附的文件，以获取有关结构加固的详细规格。",
            jp: "構造補強に関する詳細な仕様については、添付された（attached）書類をご確認ください。"
        }
    },
    {
        id: 12,
        target: "correct",
        category: "中等",
        stem: "The accountant processed the transaction ________, ensuring that the itemized expenses matched the invoice.",
        options: ["correctly", "correct", "correction", "corrective"],
        correct: "correctly",
        explanations: {
            guide: "副词修饰动词短语的用法。空格位于一个完整的主谓宾结构（processed the transaction）之后，用来修饰动作的完成状态，需用副词形式。",
            family: "correctly (adv.正确地) | correct (adj./v.正确的/纠正) | correction (n.修改) | corrective (adj.纠正的)。",
            details: "process correctly 意为“正确无误地处理”。在财务会计和税务场景中，强调录入、比对和核算逐项费用的准确性。",
            cn: "会计正确地处理了这笔交易，确保逐项列出的费用与发票一致。",
            jp: "会計士は取引を正しく（correctly）処理し、品目別の経費が請求書と一致していることを確認しました。"
        }
    },
    {
        id: 13,
        target: "selection",
        category: "困难",
        stem: "The hiring committee needs to be highly ________ when appointing new executives to managerial positions.",
        options: ["selective", "selection", "selectively", "select"],
        correct: "selective",
        explanations: {
            guide: "系动词及副词修饰下的形容词表语。空格位于状态结构 needs to be 和程度副词 highly（高度地）之后，要求填入一个形容词构成系表结构。",
            family: "selective (adj.有选择性的/严格筛选的) | selection (n.选择) | selectively (adv.有选择地) | select (v.挑选)。",
            details: "be highly selective 意为“极具筛选性/要求极高的”。在高阶人力资源（appointing executives）场景中，常用来表达对高级管理职位的选拔标准极严。",
            cn: "在任命新的管理层高管时，招聘委员会需要具有高度的筛选性（严格把关）。",
            jp: "管理職の役員を任命する際、採用委員会は非常に慎重に選考する（selective）必要があります。"
        }
    },
    {
        id: 14,
        target: "handle",
        category: "困难",
        stem: "The warehouse manager implemented strict safety guidelines for the ________ of hazardous chemicals.",
        options: ["handling", "handle", "handled", "handler"],
        correct: "handling",
        explanations: {
            guide: "介词和冠词结构中的名词成分。空格位于 the 和介词 for 之后、of 之前，构成 local noun 动作过程结构，需填入动名词或特殊名词形式。",
            family: "handling (n.装卸/搬运/处理) | handle (v.处理) | handled (v-ed已处理) | handler (n.搬运工)。",
            details: "the handling of... 意为“对……的装卸/搬运/处理”，属于仓储物流、生产安全和工业运营场景的高级行业术语，特指对特定物品的操作过程。",
            cn: "仓库经理对危险化学品的搬运和处理实施了严格的安全指南。",
            jp: "倉庫マネージャーは、危険化学物質の取り扱い（handling）に関する厳格な安全ガイドラインを導入しました。"
        }
    },
    {
        id: 15,
        target: "correct",
        category: "困难",
        stem: "The editor noted several layout errors and asked the graphic designer to make the necessary ________.",
        options: ["corrections", "correct", "correctly", "corrective"],
        correct: "corrections",
        explanations: {
            guide: "固定动宾搭配及名词单复数判断。空格位于形容词 necessary（必要的）后，作为动词 make 的宾语，结合前文的 several layout errors（多处错误），应填入名词复数。",
            family: "corrections (n.复数修改/更正) | correct (v./adj.纠正/正确的) | correctly (adv.正确地) | corrective (adj.矫正的)。",
            details: "make corrections 属于固定搭配，意为“做出修改/做出更正”。本题契合出版印务、文案审核和平面设计修订的高级商务场景。",
            cn: "编辑注意到了几处排版错误，并要求平面设计师做出必要的修改。",
            jp: "編集者はいくつかのレイアウトミスを指摘し、グラフィックデザイナーに必要な修正（corrections）を行うよう求めました。"
        }
    },
    {
        id: 16,
        target: "attract",
        category: "困难",
        stem: "The historical museum boasts various interactive ________ that attract thousands of visitors during the ancient festival.",
        options: ["attractions", "attract", "attractive", "attractively"],
        correct: "attractions",
        explanations: {
            guide: "修饰语后的复数名词主导辨析。空格位于形容词 interactive（互动的）后面，作为及物动词 boasts 的宾语，再根据从句的动词 attract（未加s）判定此处需填入名词复数。",
            family: "attractions (n.复数具有吸引力的展项/景点) | attract (v.吸引) | attractive (adj.有吸引力的) | attractively (adv.有吸引力地)。",
            details: "interactive attractions 意为“互动式展项/互动式亮点”。在文旅项目、展会推广或城市公共宣传的语境中，指吸引游客的特定设施或活动。",
            cn: "这家历史博物馆拥有各种互动式吸引人的展项，在古老节日期间吸引了数千名游客。",
            jp: "その歴史博物館は、古代の祭りの期間中に何千人もの観光客を惹きつける、さまざまな体験型アトラクション（attractions）を誇っています。"
        }
    },
    {
        id: 17,
        target: "regular",
        category: "困难",
        stem: "All employees must comply with the strict environmental ________ outlined in the company handbook.",
        options: ["regulations", "regular", "regularly", "regularity"],
        correct: "regulations",
        explanations: {
            guide: "特定动词短语要求的宾语名词语义辨析。comply with 意为“遵守（规章/法律等）”，其后必须要接指代政策或法规的名词复数形式。",
            family: "regulations (n.复数规章/规定) | regular (adj.定期的) | regularly (adv.定期地) | regularity (n.规则性)。",
            details: "environmental regulations 意为“环保规定”。comply with regulations 是整个托业考试中在企业合规性、社会责任等议题中权重极高的标志性组合。",
            cn: "所有员工必须遵守公司手册中列出的严格的环境保护规定。",
            jp: "すべての従業員は、会社案内書に記載されている厳格な環境規則（regulations）を遵守しなければなりません。"
        }
    },
    {
        id: 18,
        target: "suppose",
        category: "困难",
        stem: "The tech startup launched its operations in Europe, ________ under the assumption that local subsidies would remain stable.",
        options: ["supposedly", "suppose", "supposed", "supposition"],
        correct: "supposedly",
        explanations: {
            guide: "独立结构/插入语中的副词用法。空格位于逗号之后，修饰后文整个介词短语 under the assumption...，作评注性状语，需填入副词形式。",
            family: "supposedly (adv.据说/据推测) | suppose (v.假设) | supposed (adj.所谓的) | supposition (n.假定)。",
            details: "supposedly under the assumption 意为“据称是在……的假设下”。这属于高阶商务阅读长难句中，用于分析某一商业决策或市场行为背后推测性原因的句型。",
            cn: "这家科技初创公司在欧洲展开了业务，据称是在当地补贴将保持稳定的假设下进行的。",
            jp: "そのITスタートアップは、地元の補助金が安定したままであるという仮定の下で、おそらく（supposedly）欧州での事業を開始しました。"
        }
    }
];