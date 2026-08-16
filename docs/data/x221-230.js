// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data491-500.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "proficient",
        pos: "形",
        ipa: "/prəˈfɪʃnt/",
        cn: "熟练的，精通的",
        jp: "熟達した、堪能な",
        family: "proficiency / proficiently",
        tips: "职场与语言技能高频：proficient in English/software（精通英语/熟练使用软件）。",
        desc: "She is proficient in English."
    },
    {
        word: "sturdy",
        pos: "形",
        ipa: "/ˈstɜːrdi/",
        cn: "结实的，牢固的，坚固的",
        jp: "頑丈な、丈夫な",
        family: "sturdily / sturdiness",
        tips: "包装与家具设备高频：sturdy packaging/construction（结实的包装/坚固的结构）。",
        desc: "The table is very sturdy."
    },
    {
        word: "community outreach",
        pos: "名",
        ipa: "/kəˈmjuːnəti ˈaʊtriːtʃ/",
        cn: "社区拓展，社区关怀服务",
        jp: "地域支援活動、地域アウトリーチ",
        family: "outreach / reach",
        tips: "企业社会责任与非营利高频：community outreach program/initiative（社区关怀计划）。",
        desc: "They joined community outreach events."
    },
    {
        word: "in light of",
        pos: "前置介詞短語",
        ipa: "/ɪn laɪt əv/",
        cn: "鉴于，考虑到，根据",
        jp: "〜を考慮して、〜に照らして",
        family: "light / enlighten",
        tips: "商务决策与调整高频：in light of recent developments/findings（鉴于最近的事态发展/调查结果）。",
        desc: "In light of costs, we delayed."
    },
    {
        word: "epidemic",
        pos: "名/形",
        ipa: "/ˌepɪˈdemɪk/",
        cn: "流行病，泛滥；流行性的",
        jp: "流行病、蔓延；流行性の",
        family: "epidemiological / epidemiologist",
        tips: "公共卫生高频：flu epidemic（流感暴发/蔓延），reach epidemic proportions（达到蔓延规模）。",
        desc: "The flu epidemic spread fast."
    },
    {
        word: "pandemic",
        pos: "名/形",
        ipa: "/pænˈdemɪk/",
        cn: "全球大流行病；大流行的",
        jp: "（世界的・広域的な）大流行病",
        family: "pandemics",
        tips: "全球宏观与卫生高频：global pandemic（全球大流行），pandemic preparedness（大流行应对准备）。",
        desc: "The global pandemic affected travel."
    },
    {
        word: "cartons",
        pos: "名",
        ipa: "/ˈkɑːrtnz/",
        cn: "纸箱，硬纸盒（复数）",
        jp: "段ボール箱、カートン（複数）",
        family: "carton / cardboard",
        tips: "物流仓储高频：packed in cartons（打包在纸箱中），beverage cartons（饮料包装盒）。",
        desc: "Stack the cartons carefully."
    },
    {
        word: "emerging",
        pos: "形/動",
        ipa: "/iˈmɜːrdʒɪŋ/",
        cn: "新兴的，初露头角的",
        jp: "新興の、現れつつある",
        family: "emerge / emergence",
        tips: "宏观投资与技术高频：emerging markets/technologies（新兴市场/新兴技术）。",
        desc: "They invest in emerging markets."
    },
    {
        word: "dispute",
        pos: "名/動",
        ipa: "/dɪˈspjuːt/",
        cn: "纠纷，争端；争论，提出异议",
        jp: "紛争、論争；異議を唱える",
        family: "disputable / indisputable / disputing",
        tips: "法律与合同高频：settle/resolve a contract dispute（解决合同纠纷），labor dispute（劳资纠纷）。",
        desc: "They resolved the contract dispute."
    },
    {
        word: "padded",
        pos: "形/動",
        ipa: "/ˈpædɪd/",
        cn: "加垫的，填有衬垫的",
        jp: "パッド入りの、緩衝材が入った",
        family: "pad / padding / unpadded",
        tips: "邮寄保护与办公高频：padded envelope/bag（防震气泡信封/加垫袋），padded chair（软垫椅）。",
        desc: "Send it in a padded envelope."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "proficient",
        category: "简单",
        stem: "Applicants for the international translator position must be highly ________ in both English and Japanese.",
        options: ["proficient", "sturdy", "padded", "epidemic"],
        correct: "proficient",
        explanations: {
            guide: "语言能力形容词考点。be highly ________ in both... 结合精通双语技能，选 proficient（熟练的/精通的）。",
            family: "proficient (adj.熟练的) | sturdy (adj.结实的) | padded (adj.加垫的) | epidemic (n.流行病)。",
            details: "be proficient in a language 意为精通某种语言。sturdy（结实的）、padded（加垫的）均不能用来修饰人的专业语言水平。",
            cn: "申请国际翻译职位的人员必须高度精通英语和日语。",
            jp: "国際翻訳職の応募者は、英語と日本語の両方に極めて堪能（proficient）でなければなりません。"
        }
    },
    {
        id: 2,
        target: "cartons",
        category: "简单",
        stem: "Warehouse staff carefully stacked several large cardboard ________ onto the wooden pallets.",
        options: ["cartons", "disputes", "pandemics", "outreach"],
        correct: "cartons",
        explanations: {
            guide: "仓储容器名词考点。large cardboard ________ 结合码放在木托盘上，选 cartons（纸箱/硬纸盒）。",
            family: "cartons (n.复数纸箱) | disputes (n.纠纷) | pandemics (n.全球大流行) | outreach (n.拓展服务)。",
            details: "cardboard cartons 意为硬纸箱。disputes（纠纷）、pandemics（大流行病）均非可以在仓库中搬运堆放的包装实体。",
            cn: "仓库员工小心地将几个大型硬纸箱堆放到木托盘上。",
            jp: "倉庫のスタッフは、いくつかの大きな段ボール箱（cartons）を木製パレットの上に慎重に積み上げました。"
        }
    },
    {
        id: 3,
        target: "in light of",
        category: "简单",
        stem: "________ recent supply chain disruptions, the executive committee decided to adjust annual production targets.",
        options: ["In light of", "Proficient in", "Padded with", "Disputing with"],
        correct: "In light of",
        explanations: {
            guide: "商务决策前置介词短语。句首引导原因背景，表达“鉴于/考虑到”近期供应链中断，选 In light of。",
            family: "In light of (prep.鉴于/考虑到) | Proficient in (adj.精通于) | Padded with (adj.垫有) | Disputing with (v-ing与…争论)。",
            details: "In light of recent disruptions 意为鉴于近期的中断情况。其余选项均无法在句首充当引出客观背景原因的介词短语。",
            cn: "鉴于近期供应链的中断情况，执行委员会决定调整年度生产目标。",
            jp: "最近のサプライチェーンの混乱を考慮して（In light of）、執行委員会は年間生産目標を調整することを決定しました。"
        }
    },
    {
        id: 4,
        target: "sturdy",
        category: "简单",
        stem: "The logistics provider uses ________ wooden crates to protect heavy machine parts during overseas transport.",
        options: ["sturdy", "padded", "emerging", "proficient"],
        correct: "sturdy",
        explanations: {
            guide: "包装质量形容词考点。修饰 wooden crates（木箱），表达能保护重型机件的“结实的/坚固的”箱体，选 sturdy。",
            family: "sturdy (adj.结实的/坚固的) | padded (adj.加垫的) | emerging (adj.新兴的) | proficient (adj.精通的)。",
            details: "sturdy wooden crates 意为坚固结实的木板箱。proficient（精通的）、emerging（新兴的）不能用来修饰木质包装箱的抗压牢固度。",
            cn: "物流供应商使用坚固的木箱在海外运输途中保护重型机械零部件。",
            jp: "物流事業者は、海外輸送中に重機部品を保護するために頑丈な（sturdy）木箱を使用しています。"
        }
    },
    {
        id: 5,
        target: "community outreach",
        category: "简单",
        stem: "The corporate foundation organized a ________ initiative to provide educational support to local public schools.",
        options: ["community outreach", "carton", "pandemic", "dispute"],
        correct: "community outreach",
        explanations: {
            guide: "企业社会责任名词作定语。a ________ initiative 结合向当地公立学校提供教育支持，选 community outreach（社区拓展/社区关怀）。",
            family: "community outreach (n.社区拓展关怀) | carton (n.纸盒) | pandemic (n.大流行病) | dispute (n.纠纷)。",
            details: "community outreach initiative 意为社区公益拓展计划。carton（纸箱）、dispute（争端）均不符合公益帮扶语境。",
            cn: "该企业基金会组织了一项社区拓展关怀计划，为当地公立学校提供教育支持。",
            jp: "その企業財団は、地元の公立学校に教育支援を提供するための地域支援（community outreach）の取り組みを組織しました。"
        }
    },
    {
        id: 6,
        target: "dispute",
        category: "简单",
        stem: "The legal department successfully resolved the contract ________ with the supplier before filing a lawsuit.",
        options: ["dispute", "epidemic", "outreach", "carton"],
        correct: "dispute",
        explanations: {
            guide: "合同法务名词考点。resolved the contract ________ 结合起诉前解决与供应商的分歧，选 dispute（争端/纠纷）。",
            family: "dispute (n.纠纷/争端) | epidemic (n.流行病) | outreach (n.关怀拓展) | carton (n.纸盒)。",
            details: "contract dispute 意为合同纠纷。epidemic（流行病）、carton（纸箱）均非起诉前需要法务调解的争议内容。",
            cn: "法务部在提起诉讼之前成功解决了与供应商之间的合同纠纷。",
            jp: "法務部は訴訟を提起する前に、サプライヤーとの契約上の紛争（dispute）を無事に解決しました。"
        }
    },
    {
        id: 7,
        target: "emerging",
        category: "中等",
        stem: "The investment fund focuses primarily on supporting startups located in fast-growing ________ markets.",
        options: ["emerging", "padded", "sturdy", "proficient"],
        correct: "emerging",
        explanations: {
            guide: "宏观经济修饰形容词。________ markets 属于金融与商业经典专有名词，表达“新兴市场”，选 emerging。",
            family: "emerging (adj.新兴的/初露头角的) | padded (adj.加垫的) | sturdy (adj.结实的) | proficient (adj.熟练的)。",
            details: "emerging markets 专指新兴市场。padded（加垫的）、sturdy（结实的）无法修饰国家或区域的经济市场。",
            cn: "该投资基金主要专注于支持位于快速增长的新兴市场中的初创企业。",
            jp: "その投資ファンドは、急速に成長している新興（emerging）市場にある新興企業の支援に主に取り組んでいます。"
        }
    },
    {
        id: 8,
        target: "padded",
        category: "中等",
        stem: "To prevent fragile optical lenses from breaking in the mail, clerks placed them inside ________ envelopes.",
        options: ["padded", "emerging", "proficient", "disputed"],
        correct: "padded",
        explanations: {
            guide: "邮寄包装修饰形容词。________ envelopes 结合防止脆弱的光学镜片在邮寄途中破损，选 padded（填有衬垫的/防震加垫的）。",
            family: "padded (adj.加垫的/有衬垫的) | emerging (adj.新兴的) | proficient (adj.熟练的) | disputed (adj.有争议的)。",
            details: "padded envelopes 意为气泡/加垫信封。emerging（新兴的）、disputed（有争议的）不符合防护信封的物理特性。",
            cn: "为防止脆弱的光学镜片在邮寄过程中破裂，工作人员将其放入加垫气泡信封中。",
            jp: "壊れやすい光学レンズが郵送中に破損するのを防ぐため、係員はそれらを緩衝材入り（padded）の封筒に入れました。"
        }
    },
    {
        id: 9,
        target: "pandemic",
        category: "中等",
        stem: "The rapid global spread of the ________ forced international airlines to cancel thousands of scheduled flights.",
        options: ["pandemic", "dispute", "carton", "sturdiness"],
        correct: "pandemic",
        explanations: {
            guide: "全球公共事件名词。global spread of the ________ 结合迫使国际航空公司取消数千架次航班，选 pandemic（全球大流行病）。",
            family: "pandemic (n.全球大流行病) | dispute (n.纠纷) | carton (n.纸盒) | sturdiness (n.坚固)。",
            details: "global pandemic 意为全球大流行。dispute（纠纷）、carton（纸箱）不能用来描述跨国全球蔓延导致航线停运的公共卫生灾难。",
            cn: "全球大流行的迅速蔓延迫使国际航空公司取消了数千架次定期航班。",
            jp: "世界的大流行（pandemic）の急速な拡大により、国際航空会社は何千もの定期便の欠航を余儀なくされました。"
        }
    },
    {
        id: 10,
        target: "epidemic",
        category: "中等",
        stem: "Regional health authorities issued safety advisories to control the seasonal flu ________ during the winter months.",
        options: ["epidemic", "dispute", "cartons", "outreach"],
        correct: "epidemic",
        explanations: {
            guide: "区域公共卫生名词。seasonal flu ________ 表达冬季控制季节性流感的“区域性流行/暴发”，选 epidemic。",
            family: "epidemic (n.流行病/蔓延) | dispute (n.纠纷) | cartons (n.纸箱) | outreach (n.拓展)。",
            details: "flu epidemic 专指流感暴发/局部流行。dispute（纠纷）、cartons（纸箱）与卫生机构发布冬季防疫指南无关。",
            cn: "区域卫生当局发布了安全通告，以在冬季控制季节性流感的流行蔓延。",
            jp: "地域の保健当局は、冬の間に季節性インフルエンザの流行（epidemic）を抑制するための安全勧告を発令しました。"
        }
    },
    {
        id: 11,
        target: "in light of",
        category: "中等",
        stem: "The hotel management decided to renovate the banquet hall ________ rising customer demand for event spaces.",
        options: ["in light of", "proficient in", "disputing about", "padded with"],
        correct: "in light of",
        explanations: {
            guide: "句中介词短语考点。decided to renovate... ________ rising demand 表达“鉴于/考虑到”客户对活动场地需求的增加，选 in light of。",
            family: "in light of (prep.鉴于/根据) | proficient in (adj.精通) | disputing about (v-ing争论) | padded with (adj.填充)。",
            details: "in light of rising demand 意为鉴于日益增长的需求。proficient in（精通于）无法连接后面的名词短语作为决策依据。",
            cn: "鉴于客户对活动场地需求的不断增长，酒店管理层决定翻修宴会厅。",
            jp: "イベントスペースに対する顧客需要の高まりを考慮して（in light of）、ホテル経営陣は宴会場を改装することを決定しました。"
        }
    },
    {
        id: 12,
        target: "proficient",
        category: "中等",
        stem: "Job applicants who demonstrate technical ________ in cloud computing platforms will receive immediate consideration.",
        options: ["proficiency", "proficient", "sturdiness", "dispute"],
        correct: "proficiency",
        explanations: {
            guide: "派生抽象名词作宾语。demonstrate technical ________ 结构中，形容词 technical 后面接抽象名词 proficiency（精通/熟练程度）。",
            family: "proficiency (n.熟练/精通) | proficient (adj.精通的) | sturdiness (n.坚固) | dispute (n.纠纷)。",
            details: "technical proficiency 意为技术熟练度/专业技能。proficient 是形容词，不能直接作及物动词 demonstrate 的宾语中心语。",
            cn: "在云计算平台方面展现出技术熟练度的求职者将获得立即考量。",
            jp: "クラウドコンピューティングプラットフォームにおける技術的熟達（proficiency）を証明した求職者は、即座に検討の対象となります。"
        }
    },
    {
        id: 13,
        target: "dispute",
        category: "困难",
        stem: "Both corporate parties agreed to submit their contractual disagreements to binding arbitration because the ownership rights remained in ________.",
        options: ["dispute", "disputable", "cartons", "outreach"],
        correct: "dispute",
        explanations: {
            guide: "高阶固定介词短语。remained in ________ 属于法律与商务高频搭配，意为“处于争议之中/悬而未决”，选名词 dispute。",
            family: "dispute (n.争端/争议) | disputable (adj.有争议的) | cartons (n.纸箱) | outreach (n.拓展)。",
            details: "in dispute 属于固定介词短语（处于争议中）。disputable 是形容词，不能直接跟在介词 in 后面构成此固定短语。",
            cn: "由于所有权仍处于争议之中，双方公司均同意将合同分歧提交具有法律约束力的仲裁。",
            jp: "所有権が依然として係争中（in dispute）であったため、両社は契約上の相違を拘束力のある仲裁に委ねることに合意しました。"
        }
    },
    {
        id: 14,
        target: "sturdy",
        category: "困难",
        stem: "Quality control engineers rigorously tested the structural ________ of the newly designed portable workstation.",
        options: ["sturdiness", "sturdy", "sturdily", "padding"],
        correct: "sturdiness",
        explanations: {
            guide: "派生抽象名词宾语考点。tested the structural ________ 结构中，形容词 structural 后面接名词形式 sturdiness（坚固性/耐用度）。",
            family: "sturdiness (n.坚固性/牢固度) | sturdy (adj.结实的) | sturdily (adv.坚固地) | padding (n.衬垫)。",
            details: "structural sturdiness 意为结构坚固性。sturdy 是形容词，sturdily 是副词，均不能直接作 tested 的名词宾语中心语。",
            cn: "质量控制工程师严格测试了新设计的便携式工作站的结构坚固性。",
            jp: "品質管理エンジニアは、新しく設計されたポータブルワークステーションの構造的堅牢さ（sturdiness）を厳格にテストしました。"
        }
    },
    {
        id: 15,
        target: "emerging",
        category: "困难",
        stem: "The keynote speaker analyzed the rapid ________ of artificial intelligence tools across modern manufacturing sectors.",
        options: ["emergence", "emerging", "dispute", "proficient"],
        correct: "emergence",
        explanations: {
            guide: "派生抽象名词考点。analyzed the rapid ________ of... 结构中，在定冠词 the 与介词 of 之间填入抽象名词 emergence（出现/兴起）。",
            family: "emergence (n.出现/兴起) | emerging (adj.新兴的) | dispute (n.纠纷) | proficient (adj.精通的)。",
            details: "the rapid emergence of AI tools 意为人工智能工具的迅速兴起。emerging 是分词/形容词，在此处不如派生名词 emergence 规范。",
            cn: "主旨演讲嘉宾分析了人工智能工具在现代制造行业中的迅速兴起。",
            jp: "基調講演者は、現代の製造業全体における人工知能ツールの急速な台頭/出現（emergence）を分析しました。"
        }
    },
    {
        id: 16,
        target: "community outreach",
        category: "困难",
        stem: "The multinational enterprise expanded its corporate social responsibility budget to fund specialized educational ________ programs.",
        options: ["outreach", "cartons", "epidemics", "disputes"],
        correct: "outreach",
        explanations: {
            guide: "复合名词定语考点。educational ________ programs 属于企业公共事务高频词组，表达“教育外展/关怀项目”，选 outreach。",
            family: "outreach (n.外展/关怀拓展) | cartons (n.纸箱) | epidemics (n.流行病) | disputes (n.纠纷)。",
            details: "educational outreach programs 意为教育外展支援项目。cartons（纸箱）、epidemics（流行病）均非企业社责出资的项目类别。",
            cn: "该跨国企业扩大了其企业社会责任预算，以资助专门的教育外展公益项目。",
            jp: "その多国籍企業は、専門的な教育支援（outreach）プログラムに資金を提供するために企業の社会的責任予算を拡大しました。"
        }
    },
    {
        id: 17,
        target: "padded",
        category: "困难",
        stem: "The heavy-duty cargo crate was lined with protective foam ________ to absorb shock during long-distance shipping.",
        options: ["padding", "padded", "sturdily", "emergence"],
        correct: "padding",
        explanations: {
            guide: "派生名词考点。lined with protective foam ________ 结构中，形容词 foam 后面接名词形式 padding（填充垫/缓冲衬垫材料）。",
            family: "padding (n.缓冲衬垫/填充物) | padded (adj.加垫的) | sturdily (adv.坚固地) | emergence (n.出现)。",
            details: "protective foam padding 意为保护性泡沫衬垫。padded 是形容词/过去分词，不能在介词短语中充当被填充物的名词中心语。",
            cn: "重型货箱内部衬有保护性泡沫缓冲垫，以吸收长途运输途中的震动。",
            jp: "頑丈な貨物箱の内側には、長距離輸送中の衝撃を吸収するために保護用のフォーム緩衝材（padding）が敷かれていました。"
        }
    },
    {
        id: 18,
        target: "pandemic",
        category: "困难",
        stem: "International health agencies drafted a comprehensive ________ preparedness framework to coordinate cross-border resource distribution.",
        options: ["pandemic", "proficient", "padded", "disputed"],
        correct: "pandemic",
        explanations: {
            guide: "公共卫生专有名词定语。________ preparedness framework 属于全球卫生防御固定词组，表达“大流行防备应对框架”，选名词 pandemic 作定语。",
            family: "pandemic (n./adj.大流行/全球流行的) | proficient (adj.精通的) | padded (adj.加垫的) | disputed (adj.有争议的)。",
            details: "pandemic preparedness 专指针对全球大流行病的防备机制。proficient（熟练的）、padded（加垫的）与跨国公共卫生防备框架完全无关。",
            cn: "国际卫生机构起草了一份全面的全球大流行防备应对框架，以协调跨境资源分配。",
            jp: "国際保健機関は、国境を越えた資源配分を調整するために、包括的なパンデミック（pandemic）対策準備フレームワークを起草しました。"
        }
    }
];