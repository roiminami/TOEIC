// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data81-90.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "packet",
        pos: "名",
        ipa: "/ˈpækɪt/",
        cn: "小包，资料包",
        jp: "小包、資料パック",
        family: "pack / package / packaging",
        tips: "商务培训与迎新场景高频词。常考：welcome packet（迎新资料包）、information packet（信息资料册）。",
        desc: "Please review the welcome packet carefully."
    },
    {
        word: "biography",
        pos: "名",
        ipa: "/baɪˈɑːɡrəfi/",
        cn: "传记，个人简介",
        jp: "伝記、経歴紹介",
        family: "biographical / biographer / autobiography",
        tips: "会议与发言人介绍考点。常考：speaker biography（演讲者简介）或 short biography（简短个人履历）。",
        desc: "A brief biography of the keynote speaker is included."
    },
    {
        word: "engage",
        pos: "動",
        ipa: "/ɪnˈɡeɪdʒ/",
        cn: "吸引，参与，聘请",
        jp: "引き込む、関与する、雇う",
        family: "engaged / engagement / engaging",
        tips: "托业多频考点：1. 吸引顾客/观众（engage customers/audience）；2. 参与（engage in market research）；3. 聘请服务（engage a consultant）。",
        desc: "The interactive seminar engaged all participants."
    },
    {
        word: "inspire",
        pos: "動",
        ipa: "/ɪnˈspaɪər/",
        cn: "激发，鼓舞，启发",
        jp: "触発する、奮起させる、ひらめきを与える",
        family: "inspired / inspiring / inspiration",
        tips: "企业领导力与演讲考点。常考：inspire employees（鼓舞员工）或 inspire creative thinking（激发创造性思维）。",
        desc: "The CEO’s speech inspired the entire team."
    },
    {
        word: "relevant",
        pos: "形",
        ipa: "/ˈreləvənt/",
        cn: "相关的，切题的",
        jp: "関連のある、適切な",
        family: "relevance / irrelevance / irrelevant",
        tips: "招聘与阅读填空极高频。常考：relevant experience（相关工作经验）与 relevant document（相关文件）。反义词：irrelevant。",
        desc: "Please attach all relevant work documents."
    },
    {
        word: "alert",
        pos: "動/名/形",
        ipa: "/əˈlɜːrt/",
        cn: "警示，使警觉；警报；警觉的",
        jp: "警告する、通知する；警報；警戒した",
        family: "alerted / alerting / alertness",
        tips: "系统通知与安全管理考点。常考动词短语 alert sb to sth（提醒某人注意某事），以及名词 security alert（安全警报）或 email alert（邮件提醒）。",
        desc: "An automated system will alert you to updates."
    },
    {
        word: "tenant",
        pos: "名",
        ipa: "/ˈtenənt/",
        cn: "租户，房客",
        jp: "テナント、借入人、入居者",
        family: "tenancy / tenantless",
        tips: "物业管理与商业租赁核心词！常考：prospective tenant（潜在租户）、commercial tenant（商业租户）与 lease agreement（租赁协议）。",
        desc: "The new commercial tenant signed a two-year lease."
    },
    {
        word: "coverage",
        pos: "名",
        ipa: "/ˈkʌvərɪdʒ/",
        cn: "新闻报道；保险范围，覆盖率",
        jp: "報道、取材；（保険の）補償範囲",
        family: "cover / covered / coverage area",
        tips: "两大核心义项：1. 保险理赔（insurance coverage / comprehensive coverage 综合保险）；2. 媒体报道（media coverage 媒体报道）。",
        desc: "The policy provides comprehensive insurance coverage."
    },
    {
        word: "aircraft",
        pos: "名",
        ipa: "/ˈerkræft/",
        cn: "飞机，航空器（单复数同形）",
        jp: "航空機（単複同形）",
        family: "aircraft maintenance / aircraft mechanic",
        tips: "航空与差旅考点。单复数同形（an aircraft / two aircraft）。常考：aircraft maintenance（飞机检修）与 commercial aircraft（商用客机）。",
        desc: "The aircraft undergoes routine safety checks."
    },
    {
        word: "restore",
        pos: "動",
        ipa: "/rɪˈstɔːr/",
        cn: "恢复，修复，还原",
        jp: "復元する、修復する、回復させる",
        family: "restoration / restored / restorative",
        tips: "IT 与设施维护双重考点。1. 系统恢复：restore service / restore data（恢复服务/数据）；2. 建筑/文物修复：restore a historic building（修复历史建筑）。",
        desc: "Technicians worked quickly to restore power."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "packet",
        category: "简单",
        stem: "All new recruits are requested to review the orientation ________ before attending the training session.",
        options: ["packet", "tenant", "aircraft", "inspire"],
        correct: "packet",
        explanations: {
            guide: "名词词义辨析。review the orientation ________ 表达审阅入职培训“资料包”，选 packet。",
            family: "packet (n.资料包) | tenant (n.租户) | aircraft (n.飞机) | inspire (v.鼓舞)。",
            details: "orientation packet（入职资料包）是托业 HR 与新员工培训场景的标准表达。其他选项在此语义不通。",
            cn: "要求所有新员工在参加培训会议之前审阅入职培训资料包。",
            jp: "すべての新入社員は、研修セッションに参加する前にオリエンテーション資料パック（packet）を確認することが求められます。"
        }
    },
    {
        id: 2,
        target: "relevant",
        category: "简单",
        stem: "Applicants must attach their updated resumes along with any ________ certificates of professional qualifications.",
        options: ["relevant", "relevance", "aircraft", "restore"],
        correct: "relevant",
        explanations: {
            guide: "形容词作前置定语。________ certificates 中需要形容词修饰证书，表达“相关的”专业资格证书，选 relevant。",
            family: "relevant (adj.相关的) | relevance (n.相关性) | aircraft (n.飞机) | restore (v.恢复)。",
            details: "relevant certificates / experience 是招聘要求的固定表达。relevance 是名词，不能充当前置定语修饰 certificates。",
            cn: "申请人必须附上其最新的简历以及任何相关的专业资格证书。",
            jp: "応募者は、最新の履歴書とともに、関連する（relevant）専門資格証明書を添付しなければなりません。"
        }
    },
    {
        id: 3,
        target: "tenant",
        category: "简单",
        stem: "The property manager reminded each commercial ________ to pay their monthly rent on time.",
        options: ["tenant", "coverage", "alert", "inspire"],
        correct: "tenant",
        explanations: {
            guide: "物业管理名词。reminded each commercial ________ 指提醒每一位商业“租户/房客”，选 tenant。",
            family: "tenant (n.租户) | coverage (n.保险范围/报道) | alert (v./n.警报) | inspire (v.鼓舞)。",
            details: "commercial tenant（商业租户）是租赁与物业管理场景核心考点。each 后面需要接单数名词 tenant。",
            cn: "物业经理提醒每一位商业租户按时缴纳每月租金。",
            jp: "物件管理者（不動産管理会社）は、各商用テナント（tenant）に毎月の家賃を期日通りに支払うよう注意を促しました。"
        }
    },
    {
        id: 4,
        target: "restore",
        category: "简单",
        stem: "Engineers worked through the night to ________ full power service to the downtown business district.",
        options: ["restore", "restoration", "biography", "packet"],
        correct: "restore",
        explanations: {
            guide: "不定式后接动词原形。worked through the night to 后面需要接动词原形，表达“恢复”供电服务，选 restore。",
            family: "restore (v.恢复) | restoration (n.恢复) | biography (n.传记) | packet (n.资料包)。",
            details: "to 为不定式符号，后面必须跟动词原形 restore。restoration 为名词，不能接在不定式符号之后。",
            cn: "工程师们通宵达旦地工作，以恢复市中心商业区的完全供电服务。",
            jp: "エンジニアたちは、ダウンタウンのビジネス街への完全な電力供給を復旧（restore）させるために徹夜で作業しました。"
        }
    },
    {
        id: 5,
        target: "inspire",
        category: "简单",
        stem: "The keynote speaker used compelling personal stories to ________ young entrepreneurs at the summit.",
        options: ["inspire", "inspiration", "aircraft", "coverage"],
        correct: "inspire",
        explanations: {
            guide: "不定式结构中的动词原形。used stories to 后面接动词原形，表达“激发/鼓舞”年轻创业者，选 inspire。",
            family: "inspire (v.鼓舞) | inspiration (n.灵感) | aircraft (n.飞机) | coverage (n.报道/覆盖)。",
            details: "used sth to do sth 结构，to 后面跟动词原形 inspire。inspiration 是名词，不能作此处动词短语的核心谓语。",
            cn: "主旨演讲者用引人入胜的亲身经历在峰会上鼓舞年轻创业者。",
            jp: "基調講演者は、サミットで若い起業家たちを奮起させる（inspire）ために、説得力のある個人の体験談を語りました。"
        }
    },
    {
        id: 6,
        target: "biography",
        category: "简单",
        stem: "A brief ________ of each guest panelist can be found on the back page of the event program.",
        options: ["biography", "engage", "alert", "tenant"],
        correct: "biography",
        explanations: {
            guide: "不定冠词与形容词后的名词。A brief 后面需要接单数名词，表达演讲嘉宾的简短“个人简介”，选 biography。",
            family: "biography (n.个人简介/传记) | engage (v.吸引) | alert (v./n.警示) | tenant (n.租户)。",
            details: "brief biography（简短履历/个人简介）是会议活动手册中的常见用法。engage 是动词，不能直接受形容词 brief 的修饰。",
            cn: "活动日程表的封底附有每位嘉宾小组成员的简短个人简介。",
            jp: "イベントプログラムの裏表紙には、各ゲストパネリストの簡単な経歴紹介（biography）が掲載されています。"
        }
    },
    {
        id: 7,
        target: "aircraft",
        category: "中等",
        stem: "The regional airline recently expanded its fleet by purchasing three modern commercial ________.",
        options: ["aircraft", "aircrafts", "biography", "packet"],
        correct: "aircraft",
        explanations: {
            guide: "单复数同形名词考点。基数词 three 后面需要接名词，aircraft 是单复数同形词（three aircraft），选 aircraft。",
            family: "aircraft (n.单复数同形) | aircrafts (错误形式) | biography (n.传记) | packet (n.资料包)。",
            details: "aircraft 是典型的单复数同形可数名词，不可加 -s 变成 aircrafts。这是 Part 5 极具混淆性的语法红线考点。",
            cn: "该区域航空公司最近通过购买三架现代商用客机扩大了其机队规模。",
            jp: "その地域航空会社は最近、現代的な商用航空機（aircraft）を3機購入して保有機数を拡大しました。"
        }
    },
    {
        id: 8,
        target: "coverage",
        category: "中等",
        stem: "Clients should check with their representative to verify if international travel is included under their insurance ________.",
        options: ["coverage", "cover", "relevant", "inspire"],
        correct: "coverage",
        explanations: {
            guide: "金融保险场景高频搭配。under their insurance ________ 表达在他们的保险“理赔/保障范围”之内，选 coverage。",
            family: "coverage (n.保障范围/报道) | cover (v./n.覆盖) | relevant (adj.相关的) | inspire (v.鼓舞)。",
            details: "insurance coverage（保险保障范围）是托业保险理赔场景的核心专有名词。coverage 为抽象不可数名词，符合此处搭配。",
            cn: "客户应与其代表核实，确认国际旅行是否包含在其保险理赔范围之内。",
            jp: "お客様は、国際旅行が保険補償範囲（coverage）に含まれているかどうかを補償担当者に確認する必要があります。"
        }
    },
    {
        id: 9,
        target: "engage",
        category: "中等",
        stem: "To boost brand loyalty, the marketing department launched social media campaigns to ________ with younger consumers.",
        options: ["engage", "engagement", "tenant", "alert"],
        correct: "engage",
        explanations: {
            guide: "不定式结构与介词搭配。to 后面跟动词原形，且与 into/with 搭配（engage with...），表达与年轻人“互动/建立联系”，选 engage。",
            family: "engage (v.互动/吸引) | engagement (n.互动) | tenant (n.租户) | alert (v.警示)。",
            details: "engage with consumers 是公关与营销中的高频短语。engagement 是名词，不能跟在不定式符号 to 之后作谓语动词。",
            cn: "为了提升品牌忠诚度，营销部门发起了社交媒体活动，以与年轻消费者互动。",
            jp: "ブランド・ロイヤルティを高めるため、マーケティング部門は若い消費者と対話（engage）するためのソーシャルメディアキャンペーンを開始しました。"
        }
    },
    {
        id: 10,
        target: "alert",
        category: "中等",
        stem: "An automated system notification will ________ the IT team immediately if unusual network activity is detected.",
        options: ["alert", "alertness", "relevant", "biography"],
        correct: "alert",
        explanations: {
            guide: "情态动词后的谓语动词。will 后面接动词原形，表达系统通知将立刻“提醒/向……发出警报”，选 alert。",
            family: "alert (v.警示/提醒) | alertness (n.警惕) | relevant (adj.相关的) | biography (n.传记)。",
            details: "will alert the team 构成动宾结构。alertness 是名词（警惕性），无法充当情态动词 will 后的动词原形。",
            cn: "如果检测到异常网络活动，自动化系统通知将立即向 IT 团队发出警报。",
            jp: "異常なネットワークアクティビティが検出された場合、自動システム通知が直ちにITチームに警告（alert）します。"
        }
    },
    {
        id: 11,
        target: "coverage",
        category: "中等",
        stem: "The product launch event received extensive media ________ across several prominent business publications.",
        options: ["coverage", "cover", "packet", "engage"],
        correct: "coverage",
        explanations: {
            guide: "公关与媒体场景。extensive media ________ 表达获得了广泛的媒体“报道”，选 coverage。",
            family: "coverage (n.新闻报道/覆盖) | cover (v.覆盖) | packet (n.资料包) | engage (v.吸引)。",
            details: "media coverage（媒体报道）是公关传播中的核心固定搭配。extensive media coverage 属于 Part 5 高频满分表达。",
            cn: "新产品发布会在几家知名商业出版物上获得了广泛的媒体报道。",
            jp: "新製品発表イベントは、いくつかの著名なビジネス出版物で広範なメディア報道（coverage）を受けました。"
        }
    },
    {
        id: 12,
        target: "inspire",
        category: "中等",
        stem: "The creative director’s innovative presentation was highly ________ to the design team working on the new campaign.",
        options: ["inspiring", "inspire", "tenant", "aircraft"],
        correct: "inspiring",
        explanations: {
            guide: "系动词后的表语成分。was highly ________ 中，需要形容词作表语，表达演示令人“深受鼓舞的/启发灵感的”，选 inspiring。",
            family: "inspiring (adj.鼓舞人心的) | inspire (v.鼓舞) | tenant (n.租户) | aircraft (n.飞机)。",
            details: "was highly inspiring 属于“系动词 + 副词 + 形容词”结构。inspire 是动词原形，不能直接作表语。",
            cn: "创意总监富有创意的演示对于正在参与新营销活动的团队来说极具启发性。",
            jp: "クリエイティブディレクターの革新的なプレゼンテーションは、新しいキャンペーンに取り組むデザインチームにとって非常に刺激的（inspiring）でした。"
        }
    },
    {
        id: 13,
        target: "tenant",
        category: "困难",
        stem: "Before the lease contract can be finalized, the landlord must review the credit rating of the prospective ________.",
        options: ["tenant", "tenancy", "restore", "alert"],
        correct: "tenant",
        explanations: {
            guide: "形容词修饰的人名词。prospective ________ 结构中，形容词 prospective（潜在的）后面需要接表示人的名词，选 tenant（租户）。",
            family: "tenant (n.租户) | tenancy (n.租期/租赁关系) | restore (v.恢复) | alert (v.警示)。",
            details: "prospective tenant（意向租户/潜在房客）是商业地产租赁中的高频固定组合。tenancy 是抽象名词（租期），不能被 prospective 修饰表达人。",
            cn: "在最终敲定租赁合同之前，房东必须审查潜在租户的信用评级。",
            jp: "賃貸契約を最終決定する前に、家主は見込みテナント（tenant）の信用格付けを確認する必要があります。"
        }
    },
    {
        id: 14,
        target: "relevant",
        category: "困难",
        stem: "Statements that are deemed completely ________ to the core subject will be excluded from the official meeting minutes.",
        options: ["irrelevant", "relevant", "biography", "coverage"],
        correct: "irrelevant",
        explanations: {
            guide: "高阶反义词与句意逻辑。will be excluded（将被排除在外），说明这些声明与主题“无关”，选否定前缀派生词 irrelevant。",
            family: "irrelevant (adj.不相关的) | relevant (adj.相关的) | biography (n.传记) | coverage (n.报道)。",
            details: "deemed irrelevant to...（被认为与……无关）。根据上下文将从会议纪要中排除可知，应选择表示否定含意的派生词 irrelevant。",
            cn: "被认为与核心议题完全无关的言论将被排除在官方会议纪要之外。",
            jp: "主議題に完全に無関係（irrelevant）とみなされた発言は、公式の議事録から除外されます。"
        }
    },
    {
        id: 15,
        target: "engage",
        category: "困难",
        stem: "The consulting firm was retained to assist with increasing customer ________ across all digital marketing channels.",
        options: ["engagement", "engage", "aircraft", "packet"],
        correct: "engagement",
        explanations: {
            guide: "形容词与名词组合充当宾语。increasing customer ________ 中，需要名词形式构成 customer engagement（客户参与度/互动率）。",
            family: "engagement (n.参与度/互动) | engage (v.吸引) | aircraft (n.飞机) | packet (n.资料包)。",
            details: "customer engagement 为高阶数字营销术语。engage 是动词，无法直接接在名词 customer 之后充当介词 with 的宾语中心词。",
            cn: "该咨询公司被聘请协助提高所有数字营销渠道上的客户参与度。",
            jp: "コンサルティング会社は、すべてのデジタル・マーケティング・チャネルにおいて顧客エンゲージメント（engagement）を高める支援をするために起用されました。"
        }
    },
    {
        id: 16,
        target: "restore",
        category: "困难",
        stem: "The historic hotel underwent an extensive million-dollar ________ project to return its lobby to its original splendor.",
        options: ["restoration", "restore", "alert", "biography"],
        correct: "restoration",
        explanations: {
            guide: "名词作定语与复合名词。an extensive million-dollar ________ project 中，需要名词 restoration 构成 restoration project（修复工程）。",
            family: "restoration (n.修复/还原) | restore (v.修复) | alert (n./v.警报) | biography (n.传记)。",
            details: "restoration project 意为“古建筑/设施的修复工程”。restore 是动词原形，不能作修饰 project 的定语中心词。",
            cn: "这家历史悠久的酒店经历了耗资数百万美元的翻修工程，使其大堂恢复了最初的光彩。",
            jp: "その歴史あるホテルは、ロビーを創業当時の輝きに戻すため、数百万ドル規模の修復（restoration）プロジェクトを実施しました。"
        }
    },
    {
        id: 17,
        target: "alert",
        category: "困难",
        stem: "Security officers stayed highly ________ throughout the international summit to respond immediately to any potential safety threats.",
        options: ["alert", "alertness", "relevant", "inspire"],
        correct: "alert",
        explanations: {
            guide: "系动词加副词后的形容词表语。stayed highly ________ 中，stayed 作系动词（保持），后面接形容词 alert（警觉的/警惕的）。",
            family: "alert (adj.警觉的) | alertness (n.警惕) | relevant (adj.相关的) | inspire (v.鼓舞)。",
            details: "stay alert 是托业高频状态表述，意为“保持警惕”。alertness 是名词，不能在系动词 stayed 和副词 highly 后充当表语。",
            cn: "安保人员在整个国际峰会期间保持高度警惕，以便对任何潜在的安全威胁做出一时间响应。",
            jp: "警備員は、潜在的な安全上の脅威に直ちに連絡できるよう、国際サミットを通じて高度に警戒（alert）していました。"
        }
    },
    {
        id: 18,
        target: "packet",
        category: "困难",
        stem: "Delegates attending the annual trade convention were handed an information ________ containing the schedule and venue map.",
        options: ["packet", "tenant", "coverage", "aircraft"],
        correct: "packet",
        explanations: {
            guide: "语境中心名词选择。an information ________ containing the schedule... 指包含日程安排和场馆地图的“信息资料包/资料手册”。",
            family: "packet (n.资料包) | tenant (n.租户) | coverage (n.报道) | aircraft (n.飞机)。",
            details: "an information packet 是展会与大型会议发放的资料包专属表述。其他选项与纸质/数字日程及地图载体不符。",
            cn: "参加年度贸易大会的代表们收到了一个包含日程表和场馆地图的信息资料包。",
            jp: "年次貿易協定に参加した代表者には、スケジュールと会場マップが入った情報パック（packet）が配布されました。"
        }
    }
];