// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data61-70.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "outlook",
        pos: "名",
        ipa: "/ˈaʊtlʊk/",
        cn: "前景，展望；观点",
        jp: "見通し、展望；見解",
        family: "look / lookout",
        tips: "托业高频商务考点，常用于经济预测或销售前景分析（economic outlook / business outlook / positive outlook for sales）。",
        desc: "The economic outlook for next year is bright."
    },
    {
        word: "privilege",
        pos: "名/動",
        ipa: "/ˈprɪvəlɪdʒ/",
        cn: "特权，优惠；给予特权",
        jp: "特権、特典；特権を与える",
        family: "privileged / underprivileged",
        tips: "商务常考会员专属权益（membership privileges / exclusive privilege）及形容词形式 privileged（感到荣幸的/享有特权的）。",
        desc: "Members enjoy exclusive parking privileges."
    },
    {
        word: "remainder",
        pos: "名",
        ipa: "/rɪˈmeɪndər/",
        cn: "剩余部分，其余",
        jp: "残り、余り、残余",
        family: "remain / remaining / remains",
        tips: "高频固定句型：the remainder of the year / budget / week（今年/预算/本周的剩余部分），托业常考其与 the rest of 的同义替换。",
        desc: "She will spend the remainder of the week in Tokyo."
    },
    {
        word: "patent",
        pos: "名/動/形",
        ipa: "/ˈpætnt/",
        cn: "专利，专利权；申请专利；获专利的",
        jp: "特許、特許権；特許を取得する；特許の",
        family: "patented / patentee / patentable",
        tips: "核心商务搭配：apply for / file a patent（申请专利），patent infringement（专利侵权），patented technology（专利技术）。",
        desc: "The company filed a patent for the new device."
    },
    {
        word: "devise",
        pos: "動",
        ipa: "/dɪˈvaɪz/",
        cn: "设计，想出，制定（方案/策略）",
        jp: "考案する、工夫する、立案する",
        family: "device / deviser",
        tips: "及物动词，常与策略、方案搭配（devise a strategy / plan / system），注意区分动词 devise 与名词 device（设备）。",
        desc: "We must devise a new marketing plan."
    },
    {
        word: "subsequently",
        pos: "副",
        ipa: "/ˈsʌbsɪkwəntli/",
        cn: "随后，后来，接着",
        jp: "その後、続いて、結果として",
        family: "subsequent / subsequence",
        tips: "高频副词，常用于时间承接（相当于 later / afterward）。其形容词短语 subsequent to 表示“在……之后”，等同于 following。",
        desc: "He was promoted and subsequently moved to London."
    },
    {
        word: "evenly",
        pos: "副",
        ipa: "/ˈiːvnli/",
        cn: "均匀地，平均地；平坦地",
        jp: "均等に、公平に、むらなく",
        family: "even / uneven / unevenly / evenness",
        tips: "常修饰资金分配、工作分摊或涂抹（distribute evenly 均匀分配；divided evenly 平均分摊）。",
        desc: "The bonus was distributed evenly among the team."
    },
    {
        word: "moderate",
        pos: "形/動",
        ipa: "/ˈmɑːdərət/ (adj.), /ˈmɑːdəreɪt/ (v.)",
        cn: "温和的，中等的，适度的；缓和，主持",
        jp: "適度な、中くらいの、控えめな；和らげる",
        family: "moderately / moderation / moderator",
        tips: "形容词常修饰增长、价格或需求（moderate growth / moderate price）；副词 moderately（适度地/合理地）也是托业高频词。",
        desc: "The company reported moderate growth this quarter."
    },
    {
        word: "humidity",
        pos: "名",
        ipa: "/hjuːˈmɪdəti/",
        cn: "湿度，潮湿",
        jp: "湿気、湿度",
        family: "humid / humidify / dehumidifier",
        tips: "常考仓储环境与设施维护（high humidity 高湿度；temperature and humidity controls 温湿度控制）。",
        desc: "Electronic parts should be stored in low humidity."
    },
    {
        word: "tentative",
        pos: "形",
        ipa: "/ˈtentətɪv/",
        cn: "暂定的，初步的",
        jp: "暫定的な、仮の、不確かな",
        family: "tentatively / tentativeness",
        tips: "商务行程与协议高频词：tentative schedule / itinerary（暂定日程），tentative agreement（初步协议），副词 tentatively（暂定地）。",
        desc: "We agreed on a tentative schedule for the project."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "devise",
        category: "简单",
        stem: "The engineering committee will meet tomorrow morning to ________ a more efficient manufacturing process.",
        options: ["devise", "device", "tentative", "humidity"],
        correct: "devise",
        explanations: {
            guide: "动词不定式结构。to 后面需要接动词原形，表达“设计/制定”更高效的制造流程，选 devise。",
            family: "devise (v.设计/想出) | device (n.装置/设备) | tentative (adj.暂定的) | humidity (n.湿度)。",
            details: "to 为不定式符号，后面必须接动词原形。device 是名词（设备），不能在不定式符号后充当谓语动词。",
            cn: "工程委员会将于明天上午开会，以设计出一套更高效的制造流程。",
            jp: "エンジニアリング委員会は、より効率的な製造プロセスを考案する（devise）ために、明日の朝に会合を開きます。"
        }
    },
    {
        id: 2,
        target: "tentative",
        category: "简单",
        stem: "The human resources department has released a ________ schedule for the upcoming employee training sessions.",
        options: ["tentative", "tentatively", "remainder", "privilege"],
        correct: "tentative",
        explanations: {
            guide: "形容词作定语修饰名词。a ________ schedule 结构中需要填入形容词修饰日程表，表示“暂定的日程”，选 tentative。",
            family: "tentative (adj.暂定的/初步的) | tentatively (adv.暂定地) | remainder (n.剩余部分) | privilege (n.特权)。",
            details: "a tentative schedule 意为暂定时间表。tentatively 是副词，不能直接放在冠词 a 后面作定语修饰名词 schedule。",
            cn: "人力资源部已公布了即将举行的员工培训课程的暂定时间表。",
            jp: "人事部は、近く開催される従業員研修セッションの暫定的な（tentative）スケジュールを公開しました。"
        }
    },
    {
        id: 3,
        target: "evenly",
        category: "简单",
        stem: "The surplus year-end bonus funds will be ________ distributed among all full-time customer support staff.",
        options: ["evenly", "evenness", "moderate", "patent"],
        correct: "evenly",
        explanations: {
            guide: "被动语态中的副词修饰。在 be ________ distributed 结构中，需要副词修饰过去分词 distributed，表示奖金被“平均地/均匀地”分配，选 evenly。",
            family: "evenly (adv.均匀地/平均地) | evenness (n.平均/平坦) | moderate (adj.适度的) | patent (n.专利)。",
            details: "be evenly distributed 属于托业常见被动语态搭配。evenness 是名词，不能在助动词 be 和过去分词之间作状语修饰谓语动词。",
            cn: "年终结余的奖金将平均分配给所有全职客户支持人员。",
            jp: "余剰の年末ボーナス資金は、すべてのフルタイムのカスタマーサポート担当者に均等に（evenly）分配されます。"
        }
    },
    {
        id: 4,
        target: "patent",
        category: "简单",
        stem: "The research laboratory recently filed a ________ for its innovative energy-saving battery technology.",
        options: ["patent", "patented", "devise", "subsequently"],
        correct: "patent",
        explanations: {
            guide: "动宾固定搭配。file a patent 是托业研发与知识产权场景的核心固定短语，意为“申请专利”，选名词 patent。",
            family: "patent (n.专利/v.申请专利) | patented (adj.受专利保护的) | devise (v.设计) | subsequently (adv.随后)。",
            details: "file a patent 意为提交专利申请。patented 是分词形容词，不能直接作为不定冠词 a 后的宾语中心名词。",
            cn: "该研究实验室最近为其创新的节能电池技术申请了专利。",
            jp: "その研究所は最近、革新的な省エネバッテリー技術の特許（patent）を出願しました。"
        }
    },
    {
        id: 5,
        target: "humidity",
        category: "简单",
        stem: "Sensitive electronic components should always be stored in a facility with low ________ levels.",
        options: ["humidity", "humid", "outlook", "tentative"],
        correct: "humidity",
        explanations: {
            guide: "复合名词与仓储环境考点。low ________ levels 结构中需要名词作修饰定语，humidity levels 意为“湿度水平”，选名词 humidity。",
            family: "humidity (n.湿度/湿气) | humid (adj.潮湿的) | outlook (n.前景) | tentative (adj.暂定的)。",
            details: "low humidity levels 属于仓储设施标准术语。humid 是形容词，通常不与 levels 组成复合名词结构。",
            cn: "精密电子元器件应始终存放在低湿度环境的设施中。",
            jp: "精密電子部品は、常に湿気（humidity）レベルの低い施設に保管する必要があります。"
        }
    },
    {
        id: 6,
        target: "privilege",
        category: "简单",
        stem: "Gold-tier members are entitled to exclusive dining ________ at all affiliated international resort hotels.",
        options: ["privileges", "privileged", "remainder", "evenly"],
        correct: "privileges",
        explanations: {
            guide: "名词复数作宾语。形容词 exclusive dining（专属餐饮）后需要填入名词复数，dining privileges 意为“餐饮特权/优惠”，选 privileges。",
            family: "privileges (n.特权/优惠/复数) | privileged (adj.享有特权的) | remainder (n.剩余部分) | evenly (adv.均匀地)。",
            details: "exclusive privileges 指专属特权。privileged 是形容词，不能直接放在形容词短语 exclusive dining 后充当介词 to 的宾语中心词。",
            cn: "金卡会员在所有附属国际度假酒店均享有专属餐饮特权。",
            jp: "ゴールド会員は、すべての提携国際リゾートホテルで特別な食事の特典（privileges）を受ける権利があります。"
        }
    },
    {
        id: 7,
        target: "outlook",
        category: "中等",
        stem: "Despite recent economic uncertainties, the industry analysts reported an optimistic ________ for online retail sales.",
        options: ["outlook", "lookout", "subsequently", "moderate"],
        correct: "outlook",
        explanations: {
            guide: "冠词与形容词后的名词中心语。an optimistic ________ 结构中需要名词，an optimistic outlook 指“乐观的前景/展望”，选 outlook。",
            family: "outlook (n.前景/展望) | lookout (n.监视/守望) | subsequently (adv.随后) | moderate (adj.适度的)。",
            details: "optimistic outlook 意为乐观的前景。lookout 意为监视或守望者，语义不符合商务市场分析语境。",
            cn: "尽管近期经济存在不确定性，但行业分析师对在线零售的前景表达了乐观的看法。",
            jp: "最近の経済の不透明さにもかかわらず、業界アナリストはオンライン小売売上高に対して楽観的な見通し（outlook）を報告しました。"
        }
    },
    {
        id: 8,
        target: "remainder",
        category: "中等",
        stem: "Ms. Tanaka will work remotely from the regional branch office for the ________ of the fiscal quarter.",
        options: ["remainder", "remains", "tentative", "privilege"],
        correct: "remainder",
        explanations: {
            guide: "固定介词短语表达。for the remainder of... 是托业高频短语，意为“在……的剩余时间里”，选名词 remainder。",
            family: "remainder (n.剩余部分/其余) | remains (n.遗迹/残余物) | tentative (adj.暂定的) | privilege (n.特权)。",
            details: "the remainder of the quarter 意为本季度的剩余时间。remains 通常指遗骸或废墟，不能用于表达时间上的剩余段落。",
            cn: "田中女士将在本财政季度的剩余时间里，在区域分公司进行远程办公。",
            jp: "田中氏は、その会計四半期の残り（remainder）の期間、地方支社からリモートで勤務します。"
        }
    },
    {
        id: 9,
        target: "subsequently",
        category: "中等",
        stem: "Mr. Clark completed the executive leadership program and was ________ appointed as regional director.",
        options: ["subsequently", "subsequent", "evenly", "devise"],
        correct: "subsequently",
        explanations: {
            guide: "副词修饰谓语动词。was ________ appointed 结构中需要副词作状语，表达完成培训之后“随后”被任命，选 subsequently。",
            family: "subsequently (adv.随后/接着) | subsequent (adj.随后的) | evenly (adv.平均地) | devise (v.设计)。",
            details: "was subsequently appointed 属于商务履历中的标准表述。subsequent 是形容词，不能修饰被动语态的动词 appointed。",
            cn: "克拉克先生完成了高管领导力项目，随后被任命为区域总监。",
            jp: "クラーク氏はエグゼクティブリーダーシッププログラムを修了し、その後（subsequently）地域ディレクターに任命されました。"
        }
    },
    {
        id: 10,
        target: "moderate",
        category: "中等",
        stem: "The financial report indicated a ________ increase in international export revenues over the past six months.",
        options: ["moderate", "moderately", "humidity", "patent"],
        correct: "moderate",
        explanations: {
            guide: "形容词作定语修饰名词。a ________ increase 结构中需要填入形容词修饰 increase，表达出口收入实现“温和的/适度的”增长，选 moderate。",
            family: "moderate (adj.适度的/温和的) | moderately (adv.适度地) | humidity (n.湿度) | patent (n.专利)。",
            details: "a moderate increase 意为温和适度的增长。moderately 是副词，不能直接放在不定冠词 a 后面作定语修饰单数可数名词 increase。",
            cn: "财务报告显示，过去六个月里国际出口收入实现了适度的增长。",
            jp: "財務報告書によると、過去6か月間の国際輸出売上高は緩やかな（moderate）増加を示しました。"
        }
    },
    {
        id: 11,
        target: "devise",
        category: "中等",
        stem: "The senior marketing strategist ________ a comprehensive advertising campaign that boosted online subscriptions.",
        options: ["devised", "device", "tentative", "outlook"],
        correct: "devised",
        explanations: {
            guide: "一般过去时谓语动词。句子缺少核心谓语动词，且从句 boosted 提示为过去时，主句谓语需用过去式 devised，表示“策划/制定了”活动方案。",
            family: "devised (v-ed形式/过去式) | device (n.装置/设备) | tentative (adj.暂定的) | outlook (n.前景)。",
            details: "devised a campaign 意为策划了一场宣传活动。device 是名词，不能在主语 strategist 后面充当带宾语的核心动词。",
            cn: "资深营销策略师策划了一场全面的广告宣传活动，大幅提升了在线订阅量。",
            jp: "シニアマーケティングストラテジストは、オンラインの購読数を押し上げた包括的な広告キャンペーンを考案し（devised）ました。"
        }
    },
    {
        id: 12,
        target: "tentative",
        category: "中等",
        stem: "The annual international trade symposium is ________ scheduled to take place on Friday, November 18.",
        options: ["tentatively", "tentative", "remainder", "privilege"],
        correct: "tentatively",
        explanations: {
            guide: "副词修饰被动语态。is ________ scheduled to do sth 结构中需要副词作状语修饰过去分词 scheduled，表达“暂定于……举行”，选 tentatively。",
            family: "tentatively (adv.暂定地/初步地) | tentative (adj.暂定的) | remainder (n.剩余部分) | privilege (n.特权)。",
            details: "is tentatively scheduled 是托业会议与活动安排最高频句型之一。tentative 是形容词，不能修饰过去分词 scheduled。",
            cn: "年度国际贸易研讨会暂定于 11 月 18 日星期五举行。",
            jp: "年次国際貿易シンポジウムは、11月18日金曜日に開催されることが暫定的に（tentatively）予定されています。"
        }
    },
    {
        id: 13,
        target: "patent",
        category: "困难",
        stem: "The pharmaceutical enterprise manufactures a widely prescribed allergy medication using its ________ chemical formula.",
        options: ["patented", "patent", "patentable", "evenly"],
        correct: "patented",
        explanations: {
            guide: "过去分词作定语修饰名词。its ________ chemical formula 结构中需要分词形容词，表达受专利保护的“专利配方”，选 patented。",
            family: "patented (adj.受专利保护的/专利的) | patent (n./v.专利) | patentable (adj.可申请专利的) | evenly (adv.均匀地)。",
            details: "patented formula 意为专利配方。patentable 意为“具备申请专利资格的”，与语境中企业已经在生产该药物的事实不符。",
            cn: "该制药企业利用其专利化学配方生产一种广泛使用的处方抗过敏药物。",
            jp: "その製薬企業は、特許取得済みの（patented）化学処方を使用して、広く処方されているアレルギー薬を製造しています。"
        }
    },
    {
        id: 14,
        target: "privilege",
        category: "困难",
        stem: "The keynote speaker stated that she felt deeply ________ to address such an accomplished gathering of corporate leaders.",
        options: ["privileged", "privilege", "moderately", "subsequent"],
        correct: "privileged",
        explanations: {
            guide: "系表结构与分词形容词。felt 后面接形容词作表语，feel privileged to do sth 是商务演讲致辞的高阶固定表达，意为“对做某事深感荣幸”，选 privileged。",
            family: "privileged (adj.深感荣幸的/享有特权的) | privilege (n.特权) | moderately (adv.适度地) | subsequent (adj.随后的)。",
            details: "feel deeply privileged 意为感到极其荣幸。privilege 是名词，不能直接在系动词 felt 和副词 deeply 之后充当形容词性表语。",
            cn: "主讲嘉宾表示，能够向如此杰出的企业领袖群体发表讲话，她感到深表荣幸。",
            jp: "基調講演者は、このような優れた企業リーダーの集まりに向けて講演できることを深く光栄に（privileged）思っていると述べました。"
        }
    },
    {
        id: 15,
        target: "subsequently",
        category: "困难",
        stem: "________ to the announcement of the corporate merger, the firm's stock value appreciated by fifteen percent.",
        options: ["Subsequent", "Subsequently", "Outlook", "Tentative"],
        correct: "Subsequent",
        explanations: {
            guide: "高阶复合介词结构。Subsequent to 是托业高阶商务介词短语，完全等同于 following 或 after，意为“在……之后”，选形容词 Subsequent 构成短语。",
            family: "Subsequent (adj.在…之后的) | Subsequently (adv.随后地) | Outlook (n.前景) | Tentative (adj.暂定的)。",
            details: "Subsequent to [noun phrase] 是标准介词短语用法。Subsequently 是副词，不能直接与介词 to 连用在句首引导名词短语充当时间状语。",
            cn: "在宣布企业合并之后，该公司的股票价值上涨了百分之十五。",
            jp: "企業の合併発表に続いて（Subsequent to）、同社の株価は15パーセント上昇しました。"
        }
    },
    {
        id: 16,
        target: "moderate",
        category: "困难",
        stem: "The newly opened downtown conference facility offers several ________ priced meeting packages for nonprofit organizations.",
        options: ["moderately", "moderate", "moderation", "remainder"],
        correct: "moderately",
        explanations: {
            guide: "副词修饰分词形容词。空格修饰过去分词形容词 priced（定价的），共同修饰名词 packages，moderately priced 意为“价格适中的/合理的”，选副词 moderately。",
            family: "moderately (adv.适度地/合理地) | moderate (adj.适度的) | moderation (n.适度/节制) | remainder (n.剩余部分)。",
            details: "moderately priced 是托业最高频的复合修饰语之一。moderate 是形容词，不能修饰过去分词 priced。",
            cn: "新开业的市中心会议中心为非营利组织提供了几套价格适中的会议套餐。",
            jp: "新しくオープンしたダウンタウンの会議施設は、非営利団体向けに適度な価格の（moderately priced）会議パッケージをいくつか提供しています。"
        }
    },
    {
        id: 17,
        target: "humidity",
        category: "困难",
        stem: "Warehouse managers must ensure that archive storage rooms do not become excessively ________ during the monsoon season.",
        options: ["humid", "humidity", "evenly", "devised"],
        correct: "humid",
        explanations: {
            guide: "系表结构与程度副词修饰。become 为系动词，其后需要形容词作表语，副词 excessively（极度地）修饰该形容词，选 humid（潮湿的）。",
            family: "humid (adj.潮湿的/湿热的) | humidity (n.湿度) | evenly (adv.均匀地) | devised (v-ed形式)。",
            details: "become excessively humid 意为变得过度潮湿。humidity 是名词，不能被程度副词 excessively 直接修饰充当系动词 become 的表语。",
            cn: "仓库主管必须确保档案库房在雨季期间不会变得过于潮湿。",
            jp: "倉庫管理者は、モンスーンの季節中に文書保管室が過度に湿気の多い（humid）状態にならないようにしなければなりません。"
        }
    },
    {
        id: 18,
        target: "remainder",
        category: "困难",
        stem: "After allocating funds for building renovations, the ________ balance in the reserve account will cover operational costs.",
        options: ["remaining", "remainder", "privileges", "patented"],
        correct: "remaining",
        explanations: {
            guide: "现在分词作定语修饰名词。the ________ balance 结构中，定冠词 the 与名词 balance（余额）之间需要填入分词形容词，the remaining balance 意为“剩余余额”，选 remaining。",
            family: "remaining (adj.剩下的/剩余的) | remainder (n.剩余部分) | privileges (n.特权) | patented (adj.受专利保护的)。",
            details: "remaining 作定语直接修饰 balance（the remaining balance）。remainder 是名词，若使用则必须写成 the remainder of the balance，不能直接放在名词前作定语。",
            cn: "在拨出建筑翻修资金之后，储备账户中的剩余余额将用于支付日常运营成本。",
            jp: "建物の改修に資金を割り当てた後、予備口座の残りの（remaining）残高が運営費に充てられます。"
        }
    }
];