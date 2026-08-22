// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data711-720.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "refrain",
        pos: "動",
        ipa: "/rɪˈfreɪn/",
        cn: "克制，节制，避免",
        jp: "控える、遠慮する、慎む",
        family: "refrained / refraining",
        tips: "公共指示与会议高频搭配：refrain from doing sth（请勿做某事/克制做某事），refrain from smoking/using phones（禁止吸烟/请勿使用手机）。",
        desc: "Please refrain from taking photos."
    },
    {
        word: "allocate",
        pos: "動",
        ipa: "/ˈæləkeɪt/",
        cn: "分配，拨出，配置（资金/资源）",
        jp: "割り当てる、配分する、計上する",
        family: "allocation / allocated / allocating",
        tips: "财务与项目管理高频：allocate funds/budget/resources to sth（向某事拨款/分配资源）。",
        desc: "The board will allocate the budget."
    },
    {
        word: "transcript",
        pos: "名",
        ipa: "/ˈtrænskrɪpt/",
        cn: "成绩单；文字记录，会议记录抄本",
        jp: "成績証明書、写し、文字起こし記録",
        family: "transcribe / transcription / transcripts",
        tips: "求职申请与法务会议高频：official academic transcript（官方学术成绩单），interview transcript（面试/访谈逐字记录）。",
        desc: "Submit an official college transcript."
    },
    {
        word: "trustee",
        pos: "名",
        ipa: "/trʌˈstiː/",
        cn: "理事，受托人，托管机构成员",
        jp: "理事、受託者、評議員",
        family: "trust / trusteed / trusteeship",
        tips: "机构治理高频：board of trustees（董事会/理事会），appoint a trustee（任命受托人）。",
        desc: "The board of trustees met today."
    },
    {
        word: "adjacent",
        pos: "形",
        ipa: "/əˈdʒeɪsnt/",
        cn: "毗连的，邻近的，挨着的",
        jp: "隣接した、隣の、すぐ近くの",
        family: "adjacently / adjacency",
        tips: "设施与差旅高频搭配：adjacent to the lobby/station（紧邻大堂/车站），adjacent building（毗邻建筑）。",
        desc: "The parking lot is adjacent to the hotel."
    },
    {
        word: "novice",
        pos: "名/形",
        ipa: "/ˈnɑːvɪs/",
        cn: "新手，初学者；新手的",
        jp: "初心者、新米；初心者の",
        family: "novices",
        tips: "培训与软件使用高频：novice user/programmer（初学者用户/新手程序员），suitable for novices（适合新手）。",
        desc: "The tutorial is ideal for novices."
    },
    {
        word: "subsidiary",
        pos: "名/形",
        ipa: "/səbˈsɪdieri/",
        cn: "子公司，附属机构；附属的，次要的",
        jp: "子会社、系列会社；補助的な",
        family: "subsidiaries / subsidize / subsidy",
        tips: "公司架构高频：wholly owned subsidiary（全资子公司），overseas subsidiary（海外子公司）。注意与 subsidy（补贴）区分。",
        desc: "The firm opened an overseas subsidiary."
    },
    {
        word: "periodic",
        pos: "形",
        ipa: "/ˌpɪriˈɑːdɪk/",
        cn: "定期的，周期的",
        jp: "定期的な、周期的な",
        family: "periodically / period / periodicity",
        tips: "运维与人事考核高频：periodic maintenance/inspection（定期维护/检查），periodic review（定期审查）。",
        desc: "They conduct periodic safety checks."
    },
    {
        word: "assorted",
        pos: "形",
        ipa: "/əˈsɔːrtɪd/",
        cn: "各种各样的，什锦的，混杂的",
        jp: "詰め合わせの、各種取りそろえた、多種多様な",
        family: "assortment / assort / assorter",
        tips: "餐饮茶歇与采购高频：assorted pastries/snacks（什锦点心/各种小吃），an assorted selection（各式各样的精选）。",
        desc: "They served assorted fruit platters."
    },
    {
        word: "understaffed",
        pos: "形",
        ipa: "/ˌʌndərˈstæft/",
        cn: "人手不足的，人员短缺的",
        jp: "人員不足の、人手不足の",
        family: "staff / understaffing / short-staffed",
        tips: "职场与客服运营高频：severely understaffed department（严重人手短缺的部门），operate while understaffed（在人手紧缺下运营）。",
        desc: "The clinic was temporarily understaffed."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "refrain",
        category: "简单",
        stem: "Audience members are politely requested to ________ from taking flash photographs during the classical concert.",
        options: ["refrain", "allocate", "transcribe", "understaff"],
        correct: "refrain",
        explanations: {
            guide: "动宾固定搭配考点。requested to ________ from taking... 属于公共礼仪高频短语，表达“克制/请勿”使用闪光灯拍照，选 refrain。",
            family: "refrain (v.克制/避免) | allocate (v.分配) | transcribe (v.抄写) | understaff (v.配备人员不足)。",
            details: "refrain from doing sth 意为请勿/克制做某事。allocate（拨出）、transcribe（听写）均无法与介词 from 搭配表达禁止行为。",
            cn: "敬请各位观众在古典音乐会演出期间勿使用闪光灯拍照。",
            jp: "クラシックコンサートの最中は、フラッシュ撮影を控えて（refrain）いただきますようお願い申し上げます。"
        }
    },
    {
        id: 2,
        target: "adjacent",
        category: "简单",
        stem: "The municipal parking garage is located ________ to the public library for the convenience of visitors.",
        options: ["adjacent", "assorted", "periodic", "novice"],
        correct: "adjacent",
        explanations: {
            guide: "方位表语形容词考点。located ________ to the library 属于托业设施位置绝高频搭配，表达“紧邻/毗连”，选 adjacent。",
            family: "adjacent (adj.邻近的/毗连的) | assorted (adj.什锦的) | periodic (adj.定期的) | novice (n.新手)。",
            details: "adjacent to 意为靠近/毗连……。assorted（各式各样的）、periodic（定期的）无法与 to 搭配构成指示建筑物地理方位的表语。",
            cn: "为了方便访客，市立停车楼位于紧邻公共图书馆的位置。",
            jp: "市立駐車場は、来館者の利便性を考慮して公共図書館に隣接して（adjacent）位置しています。"
        }
    },
    {
        id: 3,
        target: "allocate",
        category: "简单",
        stem: "The executive board voted to ________ additional financial resources to the overseas marketing team.",
        options: ["allocate", "refrain", "transcribe", "adjacent"],
        correct: "allocate",
        explanations: {
            guide: "财务动词不定式考点。voted to 后面接动词原形，结合向海外营销团队“拨出/分配”额外财务资源（resources to...），选 allocate。",
            family: "allocate (v.分配/拨出) | refrain (v.克制) | transcribe (v.记录) | adjacent (adj.邻近的)。",
            details: "allocate resources to sb 属于管理与预算核心搭配，意为向某方分配资源。refrain（避免）动宾逻辑相反。",
            cn: "执行董事会投票决定向海外营销团队拨出额外的财务资源。",
            jp: "執行役員会は、海外マーケティングチームに追加の資金リソースを配分する（allocate）ことを投票で決定しました。"
        }
    },
    {
        id: 4,
        target: "assorted",
        category: "简单",
        stem: "The catering service delivered a platter of ________ fresh pastries and seasonal fruits for the morning meeting.",
        options: ["assorted", "understaffed", "adjacent", "novice"],
        correct: "assorted",
        explanations: {
            guide: "食品餐饮修饰形容词。a platter of ________ fresh pastries 结合为早会准备的拼盘，表达“各式各样/什锦的”新鲜面点糕点，选 assorted。",
            family: "assorted (adj.各式各样的/什锦的) | understaffed (adj.人手不足的) | adjacent (adj.邻近的) | novice (n.初学者)。",
            details: "assorted pastries 意为各式什锦糕点。understaffed（人手短缺的）不能用来修饰早会供应的点心拼盘。",
            cn: "餐饮外包服务公司为早会送来了一盘各式各样的新鲜糕点与时令水果。",
            jp: "ケータリングサービスは、朝の会議のために各種取りそろえた（assorted）焼きたて菓子と季節のフルーツの盛り合わせを届けました。"
        }
    },
    {
        id: 5,
        target: "understaffed",
        category: "简单",
        stem: "Because several nurses called in sick, the emergency clinic was severely ________ throughout the weekend.",
        options: ["understaffed", "assorted", "adjacent", "periodic"],
        correct: "understaffed",
        explanations: {
            guide: "人力资源状态表语形容词。several nurses called in sick 结合多名护士请病假导致诊所运转困难，选 understaffed（人手不足的/人员短缺的）。",
            family: "understaffed (adj.人手不足的) | assorted (adj.各式各样的) | adjacent (adj.毗连的) | periodic (adj.周期的)。",
            details: "severely understaffed 意为人手严重短缺。assorted（各种各样的）、adjacent（邻近的）无法用来形容机构缺员状态。",
            cn: "由于几名护士请了病假，急诊诊所在整个周末期间严重人手不足。",
            jp: "数名の看護師が病欠の連絡を入れたため、救急クリニックは週末を通して深刻な人員不足（understaffed）に陥りました。"
        }
    },
    {
        id: 6,
        target: "transcript",
        category: "简单",
        stem: "Applicants for the international graduate fellowship must submit an official university ________ by Friday.",
        options: ["transcript", "trustee", "subsidiary", "novice"],
        correct: "transcript",
        explanations: {
            guide: "学业证明名词考点。submit an official university ________ 结合申请研究生奖学金项目，选 transcript（学术成绩单/官方成绩证明）。",
            family: "transcript (n.成绩单/文字记录) | trustee (n.理事) | subsidiary (n.子公司) | novice (n.新手)。",
            details: "official university transcript 属于留学与求职专属高频短语，意为官方大学成绩单。trustee（理事）、subsidiary（子公司）均非申请时提交的学业材料。",
            cn: "申请国际研究生奖学金的申请人必须在周五之前提交官方大学成绩单。",
            jp: "国際大学院フェローシップの応募者は、金曜日までに公式の大学成績証明書（transcript）を提出しなければなりません。"
        }
    },
    {
        id: 7,
        target: "trustee",
        category: "中等",
        stem: "The university's board of ________ approved the multi-million dollar budget for the new biomedical laboratory.",
        options: ["trustees", "transcripts", "novices", "subsidiaries"],
        correct: "trustees",
        explanations: {
            guide: "机构治理专有名词复数。board of ________ 结合审批大学新建生物医学实验室的数百万预算，选 trustees（受托人/理事会成员）。",
            family: "trustees (n.复数理事/受托人) | transcripts (n.成绩单) | novices (n.新手) | subsidiaries (n.子公司)。",
            details: "board of trustees 属于托业非营利与大学机构核心治理专有名词，意为董事会/理事会。transcripts（成绩单）无法充当董事会的主体。",
            cn: "大学理事会批准了用于新建生物医学实验室的数百万美元预算。",
            jp: "大学の理事会（board of trustees）は、新しい生物医学実験室のための数百万ドル規模の予算を承認しました。"
        }
    },
    {
        id: 8,
        target: "subsidiary",
        category: "中等",
        stem: "The global automotive conglomerate established a wholly owned ________ in Singapore to manage regional distribution.",
        options: ["subsidiary", "trustee", "transcript", "allocation"],
        correct: "subsidiary",
        explanations: {
            guide: "企业架构复合名词。established a wholly owned ________ 结合跨国车企设立全资分支机构以统管区域分销，选 subsidiary（子公司）。",
            family: "subsidiary (n.子公司/附属公司) | trustee (n.理事) | transcript (n.成绩单) | allocation (n.分配)。",
            details: "wholly owned subsidiary 属于商业法务极高频固定术语，专指全资子公司。trustee（受托人）、transcript（成绩单）语义不合。",
            cn: "该跨国汽车集团在新加坡建立了一家全资子公司，以管理区域分销业务。",
            jp: "その世界的な自動車コングロマリットは、地域配送を管理するためにシンガポールに完全子会社（subsidiary）を設立しました。"
        }
    },
    {
        id: 9,
        target: "periodic",
        category: "中等",
        stem: "The engineering team conducts ________ maintenance inspections on the factory cooling towers every quarter.",
        options: ["periodic", "understaffed", "assorted", "refrained"],
        correct: "periodic",
        explanations: {
            guide: "设备维保前置形容词。conducts ________ maintenance inspections 结合每季度进行定期排查，选 periodic（定期的/周期的）。",
            family: "periodic (adj.定期的/周期的) | understaffed (adj.人手短缺的) | assorted (adj.各式各样的) | refrained (v-ed克制)。",
            details: "periodic maintenance inspections 意为定期维护检查。understaffed（人手不足的）不能修饰既定维护检查的日程性质。",
            cn: "工程团队每季度对工厂冷却塔进行一次定期的维护检查。",
            jp: "エンジニアリングチームは、四半期ごとに工場の冷却塔の定期的な（periodic）保守点検を実施しています。"
        }
    },
    {
        id: 10,
        target: "novice",
        category: "中等",
        stem: "The software tutorial features step-by-step instructions designed to help ________ users navigate the interface.",
        options: ["novice", "adjacent", "assorted", "periodic"],
        correct: "novice",
        explanations: {
            guide: "用户群体修饰形容词/名词定语。help ________ users navigate 结合手把手教程指导初次接触系统的人群，选 novice（初学者的/新手的）。",
            family: "novice (adj./n.新手/初学者的) | adjacent (adj.邻近的) | assorted (adj.各种各样的) | periodic (adj.定期的)。",
            details: "novice users 意为初学者用户/新手用户。adjacent（邻近的）、periodic（定期的）均无法修饰软件初级使用者。",
            cn: "该软件教程包含分步说明，旨在帮助初学者用户熟悉界面操作。",
            jp: "そのソフトウェアチュートリアルには、初心者（novice）ユーザーがインターフェースを操作できるように設計された段階的な手順が含まれています。"
        }
    },
    {
        id: 11,
        target: "refrain",
        category: "中等",
        stem: "During the webinar presentation, participants should ________ from unmuting their microphones until the designated question segment.",
        options: ["refrain", "allocate", "subsidize", "transcribe"],
        correct: "refrain",
        explanations: {
            guide: "情态动词后的动词原形与介词搭配。should 后面接动词原形，并与 from unmuting 搭配，表达“克制/避免开启麦克风”，选 refrain。",
            family: "refrain (v.克制/节制) | allocate (v.分配) | subsidize (v.资助) | transcribe (v.抄录)。",
            details: "refrain from doing sth 属于线上会议守则高频短语。allocate、subsidize 均不能与介词 from 连用表达禁言要求。",
            cn: "在网络研讨会演讲期间，参会者在指定的提问环节之前应避免开启麦克风静音。",
            jp: "ウェビナーのプレゼンテーション中、参加者は指定された質問セグメントまでマイクのミュート解除を控える（refrain）必要があります。"
        }
    },
    {
        id: 12,
        target: "adjacent",
        category: "中等",
        stem: "Conference participants can easily walk to the fine dining restaurants ________ to the convention center.",
        options: ["adjacent", "adjacently", "adjacency", "assorted"],
        correct: "adjacent",
        explanations: {
            guide: "后置定语形容词短语。restaurants ________ to the convention center 结构中，形容词短语作后置定语修饰餐厅，表达“与会议中心相邻的”，选 adjacent。",
            family: "adjacent (adj.邻近的/毗连的) | adjacently (adv.相邻地) | adjacency (n.邻近) | assorted (adj.什锦的)。",
            details: "restaurants adjacent to the center 意为与中心毗邻的餐厅。adjacently 是副词，adjacency 是名词，均不能在此处作后置定语形容词短语。",
            cn: "与会人员可以轻松步行前往紧邻会议中心的高档餐厅。",
            jp: "会議の参加者は、コンベンションセンターに隣接する（adjacent）高級レストランへ簡単に歩いて行くことができます。"
        }
    },
    {
        id: 13,
        target: "allocate",
        category: "困难",
        stem: "The municipal council approved the strategic ________ of five million dollars for the downtown revitalization initiative.",
        options: ["allocation", "allocate", "allocated", "allocating"],
        correct: "allocation",
        explanations: {
            guide: "派生抽象名词作及物动词宾语。approved the strategic ________ of funds 结构中，形容词 strategic 后面接名词形式 allocation（拨款/资金分配）。",
            family: "allocation (n.拨款/分配额) | allocate (v.分配) | allocated (adj./v-ed已分配的) | allocating (v-ing)。",
            details: "strategic allocation of funds 属于政经高频专有名词，意为资金的战略性划拨。allocate 是动词，不能作及物动词 approved 的宾语中心语。",
            cn: "市议会批准了用于市中心振兴计划的五百万美元战略拨款。",
            jp: "市議会は、ダウンタウン活性化の取り組みに対する500万ドルの戦略的配分/予算計上（allocation）を承認しました。"
        }
    },
    {
        id: 14,
        target: "subsidiary",
        category: "困难",
        stem: "The multinational conglomerate manages several regional ________ across Asia to distribute electronic components.",
        options: ["subsidiaries", "subsidies", "subsidiary", "subsidizing"],
        correct: "subsidiaries",
        explanations: {
            guide: "名词复数与形近词辨析。manages several regional ________ 结合管理分布在亚洲各地分销元器件的机构，选复数名词 subsidiaries（子公司复数）。",
            family: "subsidiaries (n.复数子公司) | subsidies (n.复数政府补贴) | subsidiary (n.单数子公司) | subsidizing (v-ing资助)。",
            details: "regional subsidiaries 意为区域子公司。注意区分 subsidies（补贴），量词 several 要求后接可数名词复数 subsidiaries。",
            cn: "该跨国集团在亚洲管理着几家区域子公司，负责分销电子元器件。",
            jp: "その多国籍コングロマリットは、電子部品を流通させるためにアジア全域でいくつかの地域子会社（subsidiaries）を管理しています。"
        }
    },
    {
        id: 15,
        target: "periodic",
        category: "困难",
        stem: "Quality control engineers are required to inspect the automated assembly line ________ to ensure compliance with federal standards.",
        options: ["periodically", "periodic", "periodicity", "periods"],
        correct: "periodically",
        explanations: {
            guide: "副词修饰动词考点。inspect the line ________ 结构中，需要副词修饰动词 inspect，表达“定期地/周期性地”检查自动化生产线，选 periodically。",
            family: "periodically (adv.定期地/周期性地) | periodic (adj.定期的) | periodicity (n.周期性) | periods (n.期间)。",
            details: "inspect lines periodically 意为定期检查流水线。periodic 是形容词，不能在句末充当修饰动词 inspect 的状语成分。",
            cn: "质量控制工程师必须定期检查自动化装配线，以确保符合联邦标准。",
            jp: "品質管理エンジニアは、連邦基準への適合を確実にするために、自動化された組み立てラインを定期的に（periodically）検査することが義務付けられています。"
        }
    },
    {
        id: 16,
        target: "assorted",
        category: "困难",
        stem: "The executive holiday gift basket contained an ________ of artisanal chocolates and imported fine teas.",
        options: ["assortment", "assorted", "assorting", "assort"],
        correct: "assortment",
        explanations: {
            guide: "派生抽象名词考点。contained an ________ of... 结构中，在不定冠词 an 和介词 of 之间填入名词形式 assortment（各式各样的组合/精选合集）。",
            family: "assortment (n.什锦/各式各样的集合) | assorted (adj.各种各样的) | assorting (v-ing分类) | assort (v.分类)。",
            details: "an assortment of chocolates 意为巧克力什锦礼包。assorted 是形容词，不能直接跟在不定冠词 an 后面充当宾语中心语。",
            cn: "这份行政假日礼品篮包含了一组精选的手工巧克力和进口高档茶叶合集。",
            jp: "エグゼクティブ向けホリデーギフトバスケットには、職人手作りのチョコレートや輸入高級茶の詰め合わせ（assortment）が含まれていました。"
        }
    },
    {
        id: 17,
        target: "understaffed",
        category: "困难",
        stem: "Severe ________ during the peak holiday season led to unprecedented shipping delays across the logistics network.",
        options: ["understaffing", "understaffed", "understaff", "staffed"],
        correct: "understaffing",
        explanations: {
            guide: "派生抽象名词作主语。Severe ________ led to delays 结构中，形容词 Severe 后面接不可数抽象名词 understaffing（人手不足/人员匮乏现象）。",
            family: "understaffing (n.人员不足现象) | understaffed (adj.人手不足的) | understaff (v.配备人员不足) | staffed (adj.配备人员的)。",
            details: "Severe understaffing 意为严重的人员短缺。understaffed 是形容词，不能直接跟在形容词 Severe 之后充当句子的主语中心语。",
            cn: "在假日高峰期间严重的人手短缺导致了整个物流网络前所未有的运输延误。",
            jp: "ホリデーシーズンのピーク時における深刻な人員不足（understaffing）は、物流ネットワーク全体で前例のない発送遅延を引き起こしました。"
        }
    },
    {
        id: 18,
        target: "novice",
        category: "困难",
        stem: "The newly released investment mobile app is engineered to be intuitive enough for even a ________ trader to use comfortably.",
        options: ["novice", "novices", "novelty", "novitiate"],
        correct: "novice",
        explanations: {
            guide: "名词作前置定语单数规范。even a ________ trader 结构中，不定冠词 a 提示修饰单数名词 trader，选单数名词/形容词修饰语 novice（新手/初学者）。",
            family: "novice (n.新手/adj.初学者的) | novices (n.复数) | novelty (n.新奇事物) | novitiate (n.见习期)。",
            details: "a novice trader 意为初学者交易员/新手投资者。novices 是复数形式不能跟在 a 后面，novelty（新奇）与指代人的投资交易者属性不符。",
            cn: "新发布的移动端投资应用设计得足够直观，即使是新手交易者也能轻松舒适地使用。",
            jp: "新しくリリースされた投資モバイルアプリは、初心者（novice）のトレーダーでさえ快適に使用できるほど直感的に設計されています。"
        }
    }
];