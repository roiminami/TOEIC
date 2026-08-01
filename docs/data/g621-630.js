// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag41-50.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "scratch",
        pos: "動/名",
        ipa: "/skrætʃ/",
        cn: "抓，划；划痕；从零开始",
        jp: "ひっかく、削る；かすり傷、ゼロから",
        family: "scratched / scratching",
        tips: "商务与项目场景常考固定搭配 from scratch（从零开始，从无到有，如 start/build from scratch）。作动词也可指划伤或擦掉。",
        desc: "They built it from scratch."
    },
    {
        word: "compensation",
        pos: "名",
        ipa: "/ˌkɑːmpenˈseɪʃn/",
        cn: "补偿，赔偿；薪酬，报酬",
        jp: "補償、賠償；報酬、手当",
        family: "compensate / compensatory",
        tips: "HR与法律双高频词。一指“薪酬福利”（compensation package）；二指“事故/延误赔偿”（compensation for delay）。",
        desc: "The compensation package is generous."
    },
    {
        word: "steady",
        pos: "形/動",
        ipa: "/ˈstedi/",
        cn: "稳定的，持续的",
        jp: "着実な、安定した",
        family: "steadily / steadiness",
        tips: "图表与业绩报告考点。常修饰 growth/stream/increase（steady growth 稳定增长）。派生副词 steadily（稳定地）极高频。",
        desc: "Sales showed steady growth."
    },
    {
        word: "enthusiastic",
        pos: "形",
        ipa: "/ɪnˌθuːziˈæstɪk/",
        cn: "热情的，热心的",
        jp: "熱心な、情熱的な",
        family: "enthusiasm / enthusiastically / enthusiast",
        tips: "常修饰员工态度或客户反应：be enthusiastic about（对……充满热情）。派生名词 enthusiasm 意为“热情”。",
        desc: "She is enthusiastic about art."
    },
    {
        word: "emerging",
        pos: "形",
        ipa: "/ɪˈmɜːrdʒɪŋ/",
        cn: "新兴的，初露头角的",
        jp: "新興の、新しく現れた",
        family: "emerge / emergence",
        tips: "市场与经济场景核心形容词。常修饰 markets/technologies/trends（emerging markets 新兴市场）。",
        desc: "They invest in emerging markets."
    },
    {
        word: "differ",
        pos: "動",
        ipa: "/ˈdɪfər/",
        cn: "不同，相异；持不同意见",
        jp: "異なる、意見を異にする",
        family: "different / difference / differently",
        tips: "不及物动词！常考搭配 differ from（与……不同）和 differ on/about（在……上有分歧）。派生词 difference 与 different 是考点常客。",
        desc: "Our opinions differ slightly."
    },
    {
        word: "critical",
        pos: "形",
        ipa: "/ˈkrɪtɪkl/",
        cn: "关键的；批评的；危急的",
        jp: "重要な、批判的な、危機的な",
        family: "critique / critically / criticize",
        tips: "商务场景双考点：一指“关键的/决定性的”（be critical to/for）；二指“批评的/审查的”（critical evaluation 批判性评价）。",
        desc: "This is a critical decision."
    },
    {
        word: "physician",
        pos: "名",
        ipa: "/fɪˈzɪʃn/",
        cn: "医师，内科医生",
        jp: "医師、内科医",
        family: "physics / physical / physicist",
        tips: "医疗与保险常考词。指执业医生，注意与 physicist（物理学家）和 physics（物理学）区分。",
        desc: "The physician examined the patient."
    },
    {
        word: "consistently",
        pos: "副",
        ipa: "/kənˈsɪstəntli/",
        cn: "一贯地，始终如一地",
        jp: "一貫して、終始",
        family: "consistent / consist / consistency",
        tips: "修饰动词或形容词（consistently exceed sales targets 持续超出销售目标）。表示行为或结果稳定可靠。",
        desc: "He consistently performs well."
    },
    {
        word: "sector",
        pos: "名",
        ipa: "/ˈsektər/",
        cn: "部门，领域，行业",
        jp: "部門、分野、セクター",
        family: "sectoral / sectoring",
        tips: "宏观经济与行业划分考点：public sector（公共部门）、private sector（私营部门）、financial sector（金融领域）。",
        desc: "The tech sector is growing."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "scratch",
        category: "简单",
        stem: "The software development team had to build the entire system from ________ because of compatibility issues.",
        options: ["scratch", "scratched", "steady", "sector"],
        correct: "scratch",
        explanations: {
            guide: "固定短语搭配。from scratch 为固定介词短语，意为“从零开始/白手起家”，选 scratch。",
            family: "scratch (n.划痕/从零开始) | scratched (adj./v-ed被划伤的) | steady (adj.稳定的) | sector (n.行业)。",
            details: "build/start from scratch 是项目开发中极高频的表达。scratched 为分词形式，不能接在介词 from 后面构成该固定搭配。",
            cn: "由于兼容性问题，软件开发团队不得不从零开始构建整个系统。",
            jp: "互換性の問題があるため、ソフトウェア開発チームはシステム全体をゼロから（from scratch）構築しなければなりませんでした。"
        }
    },
    {
        id: 2,
        target: "physician",
        category: "简单",
        stem: "Patients are advised to consult a licensed ________ before starting any new exercise routine.",
        options: ["physician", "physics", "critical", "emerging"],
        correct: "physician",
        explanations: {
            guide: "不定冠词与形容词后的名词考点。a licensed 后面需要接表示人的单数可数名词作宾语，选 physician。",
            family: "physician (n.医师) | physics (n.物理学) | critical (adj.关键的) | emerging (adj.新兴的)。",
            details: "consult a physician 意为“咨询医生”，是健康与医疗保险场景标配。physics 是学科名词（物理学），语法和语义均不符。",
            cn: "建议患者在开始任何新的锻炼计划之前咨询执业医师。",
            jp: "患者は、新しい運動ルーチンを開始する前にライセンスを持つ医師（physician）に相談することが勧められています。"
        }
    },
    {
        id: 3,
        target: "sector",
        category: "简单",
        stem: "The report indicates significant growth in the renewable energy ________ over the past decade.",
        options: ["sector", "sectoral", "differ", "compensation"],
        correct: "sector",
        explanations: {
            guide: "名词修饰名词（复合名词）考点。energy 后接名词构成 energy sector（能源领域/行业），选 sector。",
            family: "sector (n.部门/领域) | sectoral (adj.部门的) | differ (v.不同) | compensation (n.补偿/薪酬)。",
            details: "renewable energy sector（可再生能源领域）属于宏观经济与商业报告的高频术语。sectoral 是形容词，不能被 energy 修饰。",
            cn: "报告表明，过去十年可再生能源领域取得了显著增长。",
            jp: "レポートは、過去10年間に再生可能エネルギー分野（sector）で著しい成長があったことを示しています。"
        }
    },
    {
        id: 4,
        target: "enthusiastic",
        category: "简单",
        stem: "The manager was very ________ about the innovative design proposed by the creative team.",
        options: ["enthusiastic", "enthusiastically", "scratch", "consistently"],
        correct: "enthusiastic",
        explanations: {
            guide: "系动词与副词后的形容词考点。was very 后面需要接形容词表语，be enthusiastic about 为固定搭配，选 enthusiastic。",
            family: "enthusiastic (adj.热情的) | enthusiastically (adv.热情地) | scratch (n.划痕) | consistently (adv.一贯地)。",
            details: "be enthusiastic about sth 意为“对……充满热情/热心”。enthusiastically 是副词，不能作连系动词 was 的表语。",
            cn: "经理对创意团队提出的创新设计非常热衷。",
            jp: "マネージャーは、クリエイティブチームから提案された革新的なデザインに非常に熱心（enthusiastic）でした。"
        }
    },
    {
        id: 5,
        target: "steady",
        category: "简单",
        stem: "The company has maintained a ________ increase in monthly revenue despite market competition.",
        options: ["steady", "steadily", "differ", "physician"],
        correct: "steady",
        explanations: {
            guide: "形容词修饰名词考点。a 与 increase（增长，名词）之间需要形容词定语，表达“稳定的”增长，选 steady。",
            family: "steady (adj.稳定的) | steadily (adv.稳定地) | differ (v.不同) | physician (n.医师)。",
            details: "steady increase/growth 是图表与业绩报告的高频搭配。steadily 是副词，不能修饰名词 increase。",
            cn: "尽管存在市场竞争，该公司仍保持了每月收入的稳定增长。",
            jp: "市場の競争にもかかわらず、同社は月次売上高の安定した（steady）増加を維持しています。"
        }
    },
    {
        id: 6,
        target: "compensation",
        category: "简单",
        stem: "New hires are offered an attractive ________ package that includes health insurance and bonus schemes.",
        options: ["compensation", "compensate", "emerging", "critical"],
        correct: "compensation",
        explanations: {
            guide: "商务高频复合名词。an attractive 后面与 package 组合成 compensation package（薪酬福利包），选 compensation。",
            family: "compensation (n.薪酬/赔偿) | compensate (v.补偿) | emerging (adj.新兴的) | critical (adj.关键的)。",
            details: "compensation package 为 HR 招聘场景最核心固定词组。compensate 是动词原形，不能在此修饰 package。",
            cn: "新员工获得了一份吸引人的薪酬福利包，其中包括医疗保险和奖金计划。",
            jp: "新入社員には、健康保険やボーナス制度を含む魅力的な報酬（compensation）パッケージが提示されます。"
        }
    },
    {
        id: 7,
        target: "differ",
        category: "中等",
        stem: "Product specifications may ________ slightly from the description published in the annual catalog.",
        options: ["differ", "different", "consistently", "sector"],
        correct: "differ",
        explanations: {
            guide: "情态动词后的动词原形与固定搭配。may 后面接动词原形，结合介词 from，构成 differ from（与……不同），选 differ。",
            family: "differ (v.不同) | different (adj.不同的) | consistently (adv.一贯地) | sector (n.领域)。",
            details: "differ from... 表示“与……有所差异”。different 是形容词，若填在此处缺少谓语动词（应为 be different from）。",
            cn: "产品规格可能与年度目录中发布的描述略有不同。",
            jp: "製品の仕様は、年間カタログに掲載されている説明と多少異なる（differ）場合があります。"
        }
    },
    {
        id: 8,
        target: "emerging",
        category: "中等",
        stem: "Venture capitalists are eager to invest in ________ markets with high growth potential.",
        options: ["emerging", "emergence", "enthusiastic", "scratch"],
        correct: "emerging",
        explanations: {
            guide: "分词作形容词修饰名词。空格位于介词 in 与名词 markets 之间，表达“新兴的”市场，选 emerging。",
            family: "emerging (adj.新兴的) | emergence (n.出现/新兴) | enthusiastic (adj.热情的) | scratch (n.划痕)。",
            details: "emerging markets（新兴市场）是投资与国际贸易场景极高频的专业术语。emergence 是名词，不可作定语修饰复数名词 markets。",
            cn: "风险投资人急于投资具有高增长潜力的新兴市场。",
            jp: "ベンチャーキャピタリストは、高い成長可能性を秘めた新興（emerging）市場への投資に意欲的です。"
        }
    },
    {
        id: 9,
        target: "critical",
        category: "中等",
        stem: "Timely delivery of the components is ________ to meeting the final project deadline.",
        options: ["critical", "critically", "physician", "compensation"],
        correct: "critical",
        explanations: {
            guide: "系动词与固定介词搭配。is 后面接形容词表语，be critical to sth 表达“对……至关重要”，选 critical。",
            family: "critical (adj.关键的/至关重要的) | critically (adv.关键地/审查地) | physician (n.医师) | compensation (n.补偿)。",
            details: "be critical to doing sth 意为“对做某事至关重要”（注意 to 为介词后接 V-ing）。critically 为副词，不能独立充当表语。",
            cn: "按时交付零部件对于赶上最终项目截止日期至关重要。",
            jp: "部品の適時納品は、最終的なプロジェクトの締め切りを守るために極めて重要（critical）です。"
        }
    },
    {
        id: 10,
        target: "consistently",
        category: "中等",
        stem: "The customer service representative was commended for ________ delivering excellent support to clients.",
        options: ["consistently", "consistent", "steady", "differ"],
        correct: "consistently",
        explanations: {
            guide: "副词修饰动名词。位于介词 for 与动名词 delivering 之间，需要副词作状语，表达“一贯地/持续地”提供支持，选 consistently。",
            family: "consistently (adv.一贯地) | consistent (adj.一致的) | steady (adj.稳定的) | differ (v.不同)。",
            details: "consistently delivering 支持副词修饰动名词短语。consistent 是形容词，不能修饰动名词 delivering。",
            cn: "该客户服务代表因始终如一地为客户提供卓越支持而受到表彰。",
            jp: "そのカスタマーサービス担当者は、クライアントに優れたサポートを一貫して（consistently）提供したことで表彰されました。"
        }
    },
    {
        id: 11,
        target: "steady",
        category: "中等",
        stem: "Inflation rates have risen ________ over the last two quarters, prompting financial policy adjustments.",
        options: ["steadily", "steady", "emerging", "sector"],
        correct: "steadily",
        explanations: {
            guide: "副词修饰不及物动词。have risen 为不及物动词结构，后面需要副词作状语修饰 risen，表达“稳定地/持续地”上升，选 steadily。",
            family: "steadily (adv.稳定地) | steady (adj.稳定的) | emerging (adj.新兴的) | sector (n.部门)。",
            details: "rise steadily（稳步上升）是经济分析与图表描述的标准动副搭配。steady 是形容词，不能直接修饰动词 risen。",
            cn: "在过去两个季度中，通胀率稳步上升，促使金融政策进行调整。",
            jp: "インフレ率は過去2四半期で着実に（steadily）上昇しており、金融政策の調整を促しています。"
        }
    },
    {
        id: 12,
        target: "compensation",
        category: "中等",
        stem: "The airline provided financial ________ to passengers whose flights were delayed for more than four hours.",
        options: ["compensation", "compensatory", "enthusiastic", "physician"],
        correct: "compensation",
        explanations: {
            guide: "形容词后的名词宾语。financial 后面接名词充当 provided 的宾语，financial compensation 表达“经济赔偿/补偿”，选 compensation。",
            family: "compensation (n.赔偿/补偿) | compensatory (adj.赔偿性的) | enthusiastic (adj.热情的) | physician (n.医师)。",
            details: "financial compensation 属于客服申诉与法律违约场景核心专属搭配。compensatory 是形容词，不可作动词的宾语。",
            cn: "航空公司向航班延误超过四小时的乘客提供了经济赔偿。",
            jp: "航空会社は、フライトが4時間以上遅延した乗客に金銭的補償（compensation）を提供しました。"
        }
    },
    {
        id: 13,
        target: "critical",
        category: "困难",
        stem: "The CEO praised the R&D team for their ________ acclaimed breakthrough in battery technology.",
        options: ["critically", "critical", "consistently", "emerging"],
        correct: "critically",
        explanations: {
            guide: "副词修饰分词形容词。修饰分词形容词 acclaimed，构成固定短语 critically acclaimed（备受好评的/广受赞誉的），选 critically。",
            family: "critically (adv.批判性地/极为) | critical (adj.关键的) | consistently (adv.一贯地) | emerging (adj.新兴的)。",
            details: "critically acclaimed 为高级表达，意为“获得评论界/专业人士高度赞誉的”。critical 是形容词，不能直接修饰形容词 acclaimed。",
            cn: "首席执行官赞扬了研发团队在电池技术方面取得的备受赞誉的突破。",
            jp: "CEOは、バッテリー技術における非常に高評価を受けた（critically acclaimed）突破口についてR&Dチームを称賛しました。"
        }
    },
    {
        id: 14,
        target: "differ",
        category: "困难",
        stem: "Although both proposals are well-designed, they ________ significantly in terms of estimated maintenance costs.",
        options: ["differ", "difference", "enthusiastic", "sector"],
        correct: "differ",
        explanations: {
            guide: "主谓结构与副词修饰。主语为 they，后面需要复数谓语动词，受副词 significantly 修饰，表达在成本方面“相异/不同”，选 differ。",
            family: "differ (v.不同/相异) | difference (n.不同) | enthusiastic (adj.热情的) | sector (n.领域)。",
            details: "differ significantly in... 意为“在……方面有显著差异”。difference 是名词，无法充当从句的谓语动词。",
            cn: "尽管两份提议都设计得很完善，但它们在预估的维护成本方面差异显著。",
            jp: "両方の提案はよく設計されていますが、見積もりメンテナンス費用においては大きく異なります（differ）。"
        }
    },
    {
        id: 15,
        target: "emerging",
        category: "困难",
        stem: "The sudden ________ of competitive local brands has forced multinational corporations to lower prices.",
        options: ["emergence", "emerging", "compensation", "steadily"],
        correct: "emergence",
        explanations: {
            guide: "冠词与形容词后的名词主语。The sudden 后面接名词充当主语，表达竞争性本土品牌的突然“出现/崛起”，选 emergence。",
            family: "emergence (n.出现/崛起) | emerging (adj.新兴的) | compensation (n.补偿) | steadily (adv.稳定地)。",
            details: "the emergence of... 意为“……的出现/兴起”。emerging 是形容词/现在分词，不能接在定冠词+形容词之后作名词主语。",
            cn: "竞争性本土品牌的突然崛起，迫使跨国公司降低价格。",
            jp: "競争力のあるローカルブランドの突然の出現（emergence）により、多国籍企業は値下げを余儀なくされました。"
        }
    },
    {
        id: 16,
        target: "enthusiastic",
        category: "困难",
        stem: "The new product launch was received so ________ by consumers that pre-orders sold out in minutes.",
        options: ["enthusiastically", "enthusiastic", "critical", "physician"],
        correct: "enthusiastically",
        explanations: {
            guide: "so...that 结构中修饰被动动词的副词考点。so 修饰修饰动词 received 的副词，表达受接待/响应得非常“热情地”，选 enthusiastically。",
            family: "enthusiastically (adv.热情地) | enthusiastic (adj.热情的) | critical (adj.关键的) | physician (n.医师)。",
            details: "be received enthusiastically 表示“获得热烈反响”。enthusiastic 是形容词，在此无法直接修饰动词 received。",
            cn: "新产品发布受到了消费者极其热烈的反响，预售在几分钟内就售罄了。",
            jp: "新製品の発売は消費者から非常に熱心に（enthusiastically）受け入れられ、予約注文は数分で完売しました。"
        }
    },
    {
        id: 17,
        target: "physician",
        category: "困难",
        stem: "Applicants must undergo a comprehensive ________ examination before being approved for life insurance.",
        options: ["physical", "physician", "scratched", "consistently"],
        correct: "physical",
        explanations: {
            guide: "派生形容词修饰名词。a comprehensive 之后、examination 之前需要形容词定语，physical examination 构成“体格检查/体检”，选 physical。",
            family: "physical (adj.身体的/体格的) | physician (n.医师) | scratched (adj.划伤的) | consistently (adv.一贯地)。",
            details: "physical examination 是医疗与人寿保险核保场景固定表达（等同于 medical checkup）。physician 为名词（医生），修饰 examination 属于词性误用。",
            cn: "申请人在获批人寿保险之前必须接受一次全面的体格检查。",
            jp: "申請者は、生命保険の承認を受ける前に、包括的な身体（physical）検査を受ける必要があります。"
        }
    },
    {
        id: 18,
        target: "sector",
        category: "困难",
        stem: "Policy changes are expected to affect both the public and private ________ across the region.",
        options: ["sectors", "sectoral", "differing", "compensate"],
        correct: "sectors",
        explanations: {
            guide: "并列结构与名词复数考点。both the public and private 后面需要接复数名词，表达公共与私营“两大部门/领域”，选 sectors。",
            family: "sectors (n.部门/复数) | sectoral (adj.部门的) | differing (adj.有差异的) | compensate (v.补偿)。",
            details: "the public and private sectors 表示“公共与私营部门”，由于涵盖两个领域，故使用复数名词 sectors。sectoral 为形容词，不可作动词 affect 的宾语。",
            cn: "政策变化预计将影响该地区公共和私营两大领域。",
            jp: "政策変更は、地域全体の官民両方の部門（sectors）に影響を与えると見込まれています。"
        }
    }
];