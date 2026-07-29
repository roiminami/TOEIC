// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data71-80.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "predict",
        pos: "動",
        ipa: "/prɪˈdɪkt/",
        cn: "预测，预言",
        jp: "予測する、予測する",
        family: "predictable / prediction / predictor",
        tips: "商务分析高频动词。常考：predict market trends（预测市场趋势）、predict sales growth（预测销售增长）以及难以预测（difficult to predict）。",
        desc: "Analysts predict strong market growth."
    },
    {
        word: "reopen",
        pos: "動",
        ipa: "/ˌriːˈoʊpən/",
        cn: "重新开放，重新开始",
        jp: "再開する、再び開く",
        family: "reopening / open / reopened",
        tips: "设施翻新或店铺重新开业考点。常考：reopen after renovations（翻新后重新开业）或 reopen a branch（重新开放分店）。",
        desc: "The store will reopen next Monday."
    },
    {
        word: "machinery",
        pos: "名",
        ipa: "/məˈʃiːnəri/",
        cn: "机械，机械设备（不可数）",
        jp: "機械類、機械装置",
        family: "machine / machinist / mechanized",
        tips: "工业制造极高频集合名词！必须注意是不可数名词（heavy machinery 重型机械），不能加 s。常考：maintain machinery（维护机械设备）。",
        desc: "Industrial machinery requires regular maintenance."
    },
    {
        word: "dealership",
        pos: "名",
        ipa: "/ˈdiːlərʃɪp/",
        cn: "代理权，经销商，特许专卖店",
        jp: "販売代理店、ディーラー",
        family: "dealer / deal / dealing",
        tips: "托业高频专有名词场景。最常考：car dealership（汽车特许经销商/汽车 4S 店）或 local dealership（本地代理商）。",
        desc: "He bought a truck at the local car dealership."
    },
    {
        word: "hallway",
        pos: "名",
        ipa: "/ˈhɔːlweɪ/",
        cn: "走廊，门厅",
        jp: "廊下、玄関ホール",
        family: "hall / corridor",
        tips: "听力 Part 1 必考建筑设施词。同义替换 corridor。常考：in the main hallway（在主走廊）、along the hallway（沿着走廊）。",
        desc: "A potted plant was placed in the hallway."
    },
    {
        word: "initiative",
        pos: "名",
        ipa: "/ɪˈnɪʃətɪv/",
        cn: "倡议，新方案；主动性，主导权",
        jp: "取り組み、新構想；主導権、積極性",
        family: "initiate / initiator / initiation",
        tips: "托业 Part 5/7 核心词！1. 商业方案：launch a new strategic initiative（发起一项新的战略倡议）；2. 个人品质：take the initiative（采取主动）。",
        desc: "The company launched a green energy initiative."
    },
    {
        word: "talented",
        pos: "形",
        ipa: "/ˈtæləntɪd/",
        cn: "有才能的，人才出众的",
        jp: "才能のある、有能な",
        family: "talent / untalented",
        tips: "招聘与团队评价核心词。常考修饰人或团队：a talented team of engineers（一支由才华横溢的工程师组成的团队）、talented candidate（优秀候选人）。",
        desc: "We are recruiting talented software developers."
    },
    {
        word: "via",
        pos: "前",
        ipa: "/ˈvaɪə/",
        cn: "通过，经由，借助",
        jp: "〜経由で、〜によって",
        family: "via email / via airmail",
        tips: "商务沟通与交通出行核心介词！1. 沟通渠道：send via email（通过电子邮件发送）；2. 交通路线：fly to Paris via London（经由伦敦飞往巴黎）。",
        desc: "Please submit the application form via email."
    },
    {
        word: "resolve",
        pos: "動/名",
        ipa: "/rɪˈzɑːlv/",
        cn: "解决，消除；决心，决定",
        jp: "解決する、解消する；決意する",
        family: "resolution / resolved / unresolved",
        tips: "解决问题场景第一高频词！完美等同于 solve / settle。常考：resolve customer complaints（解决客户投诉）、resolve conflict（化解冲突）。",
        desc: "Our support team will resolve the issue quickly."
    },
    {
        word: "undergo",
        pos: "動",
        ipa: "/ˌʌndərˈɡoʊ/",
        cn: "经历，经受，遭受",
        jp: "（変化・検査などを）受ける、経験する",
        family: "underwent / undergone / undergoing",
        tips: "托业阅读与 Part 5 不可替代的核心动词！常考：undergo maintenance（接受检修）、undergo training（接受培训）、undergo rapid expansion（经历快速扩张）。",
        desc: "The facility will undergo extensive repairs."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "predict",
        category: "简单",
        stem: "Industry experts ________ that corporate demand for renewable energy solutions will double within five years.",
        options: ["predict", "prediction", "machinery", "hallway"],
        correct: "predict",
        explanations: {
            guide: "主语后的谓语动词原形。主语是复数名词 Industry experts，空格处需要动词原形作谓语，表达专家们“预测”，选 predict。",
            family: "predict (v.预测) | prediction (n.预测) | machinery (n.机械) | hallway (n.走廊)。",
            details: "predict 后面可以跟 that 引导的宾语从句。prediction 是名词，不能在此直接充当谓语动词。",
            cn: "行业专家预测，五年内企业对可再生能源解决方案的需求将翻倍。",
            jp: "業界の専門家は、再生可能エネルギーソリューションに対する企業需要が5年以内に倍増すると予測（predict）しています。"
        }
    },
    {
        id: 2,
        target: "hallway",
        category: "简单",
        stem: "Please ensure that no cardboard boxes are left blocking the central ________ leading to the emergency exit.",
        options: ["hallway", "machinery", "talented", "resolve"],
        correct: "hallway",
        explanations: {
            guide: "名词词义辨析与设施场景。blocking the central ________ leading to... 表达不要堵塞通往安全出口的中央“走廊”，选 hallway。",
            family: "hallway (n.走廊) | machinery (n.机械) | talented (adj.有才能的) | resolve (v.解决)。",
            details: "central hallway（中央走廊）是办公与安全管理场景下的常用表达。talented 和 resolve 词性与语义均不符合。",
            cn: "请确保没有纸箱留下来堵塞通往紧急出口的中央走廊。",
            jp: "非常口に通じる中央の廊下（hallway）を段ボール箱で塞がないようにしてください。"
        }
    },
    {
        id: 3,
        target: "talented",
        category: "简单",
        stem: "The design agency is actively recruiting ________ graphic artists to work on its new branding campaign.",
        options: ["talented", "talent", "dealership", "reopen"],
        correct: "talented",
        explanations: {
            guide: "形容词作前置定语。________ graphic artists 结构中需要形容词修饰艺术家，表达招募“才华横溢的”图形艺术家，选 talented。",
            family: "talented (adj.有才华的) | talent (n.才能/人才) | dealership (n.经销商) | reopen (v.重新开放)。",
            details: "talented 修饰具体的人或职业名词（talented graphic artists）。talent 是名词，一般不直接修饰普通复数名词。",
            cn: "该设计机构正在积极招聘有才华的图形艺术家，参与其新的品牌推广活动。",
            jp: "そのデザイン代理店は、新しいブランディングキャンペーンに参加する才能ある（talented）グラフィックアーティストを積極的に募集しています。"
        }
    },
    {
        id: 4,
        target: "via",
        category: "简单",
        stem: "Job applicants are encouraged to submit their completed application forms ________ the official career portal.",
        options: ["via", "predict", "machinery", "initiative"],
        correct: "via",
        explanations: {
            guide: "介词引导方式状语。submit their forms ________ the official portal 表达“通过”官方招聘网站提交表格，选用介词 via。",
            family: "via (prep.通过/经由) | predict (v.预测) | machinery (n.机械) | initiative (n.倡议)。",
            details: "via 后面接名词短语，表示通过某种媒介或渠道（如 via email, via portal）。其他选项均为动词或名词，无法在此充当介词。",
            cn: "鼓励求职者通过官方招聘网站提交填写好的申请表。",
            jp: "求職者は、公式キャリアポータル経由で（via）記入済みの応募書類を提出することが推奨されています。"
        }
    },
    {
        id: 5,
        target: "resolve",
        category: "简单",
        stem: "The customer relations representative was able to ________ the billing discrepancy in a timely manner.",
        options: ["resolve", "resolution", "dealership", "undergo"],
        correct: "resolve",
        explanations: {
            guide: "动词不定式结构。was able to 后面需要接动词原形，表达能够“解决”账单差异，选 resolve。",
            family: "resolve (v.解决) | resolution (n.解决) | dealership (n.经销商) | undergo (v.经历)。",
            details: "was able to do sth 结构需要动词原形。resolution 是名词（解决方案），不能作为不定式符号 to 后的谓语动词。",
            cn: "客户关系代表能够及时解决账单上的差异问题。",
            jp: "顧客対応担当者は、請求書の不一致をタイムリーに解決する（resolve）ことができました。"
        }
    },
    {
        id: 6,
        target: "reopen",
        category: "简单",
        stem: "After two months of extensive interior modeling, the popular downtown restaurant is set to ________ next Tuesday.",
        options: ["reopen", "reopening", "predict", "initiative"],
        correct: "reopen",
        explanations: {
            guide: "动词不定式结构。is set to 后面需要接动词原形，表达将于下周二“重新开业”，选 reopen。",
            family: "reopen (v.重新开业) | reopening (n./分词) | predict (v.预测) | initiative (n.倡议)。",
            details: "is set to do sth（预定做某事）是固定句型，to 后面需要动词原形 reopen。reopening 是分词/动名词形式。",
            cn: "经过两个月的内部全面装修，这家受欢迎的市中心餐厅定于下周二重新开业。",
            jp: "2ヶ月にわたる大規模な内装リフォームを経て、人気のダウンタウンのレストランは来週の火曜日に再オープン（reopen）する予定です。"
        }
    },
    {
        id: 7,
        target: "machinery",
        category: "中等",
        stem: "All heavy manufacturing ________ operated inside the plant must be inspected daily by certified technicians.",
        options: ["machinery", "machine", "undergo", "talented"],
        correct: "machinery",
        explanations: {
            guide: "不可数集合名词作主语。heavy manufacturing ________ 表达工厂内的“重型制造机械设备”，选用不可数集合名词 machinery。",
            family: "machinery (n.机械设备/不可数) | machine (n.单台机器/可数) | undergo (v.经历) | talented (adj.有才华的)。",
            details: "machinery 是表示机械设备总称的不可数名词，常用 heavy machinery；若用 machine 需使用复数 machines 来与复数谓语/语境匹配。",
            cn: "工厂内操作的所有重型制造机械设备，必须每天由认证技术人员进行检查。",
            jp: "工場内で稼働するすべての重工業機械（machinery）は、認定された技術者によって毎日点検されなければなりません。"
        }
    },
    {
        id: 8,
        target: "dealership",
        category: "中等",
        stem: "The regional car ________ is offering free maintenance packages with every new electric vehicle purchased.",
        options: ["dealership", "initiative", "predict", "via"],
        correct: "dealership",
        explanations: {
            guide: "商务场所与专有名词搭配。regional car ________ 表达“区域汽车特许经销店”，选 dealership。",
            family: "dealership (n.经销商/专卖店) | initiative (n.倡议) | predict (v.预测) | via (prep.通过)。",
            details: "car dealership（汽车经销商/4S店）是托业出行与零售场景的固定高频考点词。其他选项语义不通。",
            cn: "该区域汽车经销店正在为购买的新款电动汽车提供免费保养服务包。",
            jp: "地域のアウトディーラー（dealership）は、購入されたすべての新しい電気自動車に無料のメンテナンスパッケージを提供しています。"
        }
    },
    {
        id: 9,
        target: "initiative",
        category: "中等",
        stem: "The corporate executive board commended the logistics team for taking the ________ to reduce shipping costs.",
        options: ["initiative", "initiate", "hallway", "undergo"],
        correct: "initiative",
        explanations: {
            guide: "固定动词短语搭配。taking the ________ 是托业极高频短语 take the initiative（采取主动/发挥主导作用），选名词 initiative。",
            family: "initiative (n.主动性/倡议) | initiate (v.发起) | hallway (n.走廊) | undergo (v.经历)。",
            details: "take the initiative（采取主动行动）为固定搭配。initiate 是动词，不能接在定冠词 the 之后充当宾语。",
            cn: "公司执行董事会赞扬了物流团队在降低运输成本方面采取的主动作为。",
            jp: "企業の取締役会は、輸送コスト削減に向けた主導権（initiative）を握った物流チームを称賛しました。"
        }
    },
    {
        id: 10,
        target: "undergo",
        category: "中等",
        stem: "Before the new software is deployed system-wide, all senior managers will ________ comprehensive training next week.",
        options: ["undergo", "undergone", "prediction", "reopen"],
        correct: "undergo",
        explanations: {
            guide: "情态动词后的谓语动词。will 后面需要接动词原形，表达将“接受/经历”全面培训，选 undergo。",
            family: "undergo (v.经历/接受) | undergone (p.p.形式) | prediction (n.预测) | reopen (v.重新开业)。",
            details: "will undergo training（将接受培训）属于管理与技术应用场景的标准表达。undergone 是过去分词，不能跟在情态动词 will 之后。",
            cn: "在新软件在全系统范围内部署之前，所有高级经理将于下周接受全面培训。",
            jp: "新しいソフトウェアがシステム全体に導入される前に、すべての管理職は来週総合的なトレーニングを受ける（undergo）予定です。"
        }
    },
    {
        id: 11,
        target: "predict",
        category: "中等",
        stem: "Economic analysts remain cautious because financial market shifts are often difficult to ________ accurately.",
        options: ["predict", "predictable", "initiative", "dealership"],
        correct: "predict",
        explanations: {
            guide: "形容词背后的不定式。difficult to 后面需要接动词原形，表达金融市场变动难以被准确地“预测”，选 predict。",
            family: "predict (v.预测) | predictable (adj.可预测的) | initiative (n.倡议) | dealership (n.经销商)。",
            details: "difficult to predict（难以预测）属于典型的“形容词 + 不定式”表述。predictable 是形容词，不能跟在不定式符号 to 之后。",
            cn: "经济分析师依然保持谨慎，因为金融市场的变化往往难以准确预测。",
            jp: "金融市場の変動は正確に予測する（predict）ことが難しいため、経済アナリストは慎重な姿勢を崩していません。"
        }
    },
    {
        id: 12,
        target: "via",
        category: "中等",
        stem: "Passengers traveling to London will transfer at Frankfurt and continue their journey ________ high-speed rail.",
        options: ["via", "hallway", "reopen", "talented"],
        correct: "via",
        explanations: {
            guide: "介词引导交通工具与路线。continue their journey ________ high-speed rail 表达“通过/乘坐”高铁继续旅程，选介词 via。",
            family: "via (prep.经由/乘坐) | hallway (n.走廊) | reopen (v.重新开业) | talented (adj.有才华的)。",
            details: "via high-speed rail 意为“经由/通过高铁”。via 表示乘坐某种交通工具或经由某地，是差旅场景的典型介词考点。",
            cn: "前往伦敦的旅客将在法兰克福换乘，并通过高铁继续他们的旅程。",
            jp: "ロンドンへ向かう旅客はフランクフルトで乗り換え、高速鉄道経由で（via）旅を続けます。"
        }
    },
    {
        id: 13,
        target: "resolve",
        category: "困难",
        stem: "Prompt ________ of technical issues is essential to maintaining high customer satisfaction levels.",
        options: ["resolution", "resolve", "predictable", "undergo"],
        correct: "resolution",
        explanations: {
            guide: "形容词修饰的主语中心名词。Prompt ________ of... 位于句首充当主语，形容词 Prompt 后面必须接名词形式 resolution（解决/消除）。",
            family: "resolution (n.解决) | resolve (v.解决) | predictable (adj.可预测的) | undergo (v.经历)。",
            details: "Prompt resolution of technical issues 意为“技术问题的及时解决”。resolve 作名词时多指“决心”，表达“问题的解决”固定使用 resolution。",
            cn: "及时解决技术问题对于维持较高的客户满意度至关重要。",
            jp: "技術的な問題の迅速な解決（resolution）は、高い顧客満足度を維持するために不可欠です。"
        }
    },
    {
        id: 14,
        target: "undergo",
        category: "困难",
        stem: "The main production line is currently ________ mandatory safety inspections to ensure compliance with federal standards.",
        options: ["undergoing", "undergo", "initiative", "machinery"],
        correct: "undergoing",
        explanations: {
            guide: "进行时态的动词分词。is currently ________ 构成现在进行时态，表达主语生产线目前“正在接受”安全检查，选 undergoing。",
            family: "undergoing (现在分词) | undergo (v.原形) | initiative (n.倡议) | machinery (n.机械)。",
            details: "is currently undergoing 构成了完整的现在进行时。undergo 为原形，不能在系动词 is 之后直接构成谓语时态。",
            cn: "主要生产线目前正在接受强制性安全检查，以确保符合联邦标准。",
            jp: "メイン生産ラインは現在、連邦基準への準拠を確認するための義務的な安全点検を受けている（undergoing）ところです。"
        }
    },
    {
        id: 15,
        target: "initiative",
        category: "困难",
        stem: "The municipality has launched a broad sustainability ________ aimed at drastically reducing carbon emissions.",
        options: ["initiative", "initiate", "dealership", "reopen"],
        correct: "initiative",
        explanations: {
            guide: "形容词与名词组合。a broad sustainability ________ 中，名词 sustainability 作定语修饰后续名词 initiative，表达“可持续发展倡议/方案”。",
            family: "initiative (n.倡议/方案) | initiate (v.发起) | dealership (n.经销商) | reopen (v.重新开业)。",
            details: "launch a sustainability initiative（发起一项可持续发展倡议/计划）是托业社企与环保阅读的核心组合。initiate 为动词，无法充当 launch 的宾语中心词。",
            cn: "市政府发起了一项广泛的可持续发展倡议，旨在大幅减少碳排放。",
            jp: "自治体は、二酸化炭素排出量を大幅に削減することを目的とした広範な持続可能性構想（initiative）を開始しました。"
        }
    },
    {
        id: 16,
        target: "talented",
        category: "困难",
        stem: "The human resources director emphasized the importance of retaining highly ________ professionals in key technical roles.",
        options: ["talented", "talent", "predict", "hallway"],
        correct: "talented",
        explanations: {
            guide: "副词修饰形容词作前置定语。retaining highly ________ professionals 中，副词 highly 后面需要修饰形容词 talented，表达“极有才华的”专业人员。",
            family: "talented (adj.有才华的) | talent (n.才能) | predict (v.预测) | hallway (n.走廊)。",
            details: "highly talented professionals 属于典型的“副词 + 形容词 + 名词”结构。talent 是名词，不能被副词 highly 直接修饰。",
            cn: "人力资源总监强调了在关键技术岗位上留住极具才华的专业人才的重要性。",
            jp: "人事部長は、重要な技術職において高度に才能ある（talented）専門人材を維持することの重要性を強調しました。"
        }
    },
    {
        id: 17,
        target: "reopen",
        category: "困难",
        stem: "Following the successful ________ of its flagship store, retail revenue surged by over twenty percent in the first month.",
        options: ["reopening", "reopen", "undergo", "via"],
        correct: "reopening",
        explanations: {
            guide: "介词与形容词后的动名词/名词。Following the successful ________ 中，定冠词 the 和形容词 successful 后面需要接名词形式 reopening（重新开业）。",
            family: "reopening (n.重新开业) | reopen (v.原形) | undergo (v.经历) | via (prep.通过)。",
            details: "the successful reopening of the store 表达“门店的成功重新开业”。reopen 是动词原形，无法接受定冠词 the 与形容词的修饰。",
            cn: "在其旗舰店成功重新开业后，零售收入在第一个月内激增了 20% 以上。",
            jp: "旗艦店の成功裏の再オープン（reopening）に続いて、小売売上高は最初の1ヶ月で20％以上急増しました。"
        }
    },
    {
        id: 18,
        target: "dealership",
        category: "困难",
        stem: "The regional business magazine published a profile on the top-performing commercial ________ in the automotive industry.",
        options: ["dealerships", "dealership", "machinery", "resolve"],
        correct: "dealerships",
        explanations: {
            guide: "最高级形容词修饰复数名词。the top-performing commercial ________ 中，表达汽车行业中“表现最佳的多家商业经销商”，选用复数名词 dealerships。",
            family: "dealerships (n.经销商/复数) | dealership (n.单数) | machinery (n.机械) | resolve (v.解决)。",
            details: "在表示某一行业中同类群体的顶尖者时（the top-performing...），后接可数名词复数形式 dealerships，符合商业报道的撰写惯例。",
            cn: "该区域商业杂志刊登了一篇关于汽车行业业绩最佳的商业经销商店铺的专栏文章。",
            jp: "地域のビジネス誌は、自動車業界で最も優れた業績を上げている商業販売代理店（dealerships）に関する特集記事を掲載しました。"
        }
    }
];