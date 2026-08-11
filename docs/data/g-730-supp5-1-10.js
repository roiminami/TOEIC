// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data301-310.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "accessory",
        pos: "名",
        ipa: "/ækˈsesəri/",
        cn: "配件，饰品",
        jp: "アクセサリー、付属品",
        family: "accessories / accessorize",
        tips: "零售与IT设备高频：fashion accessories（时尚饰品），computer accessory（电脑配件）。",
        desc: "She bought a new accessory."
    },
    {
        word: "amenity",
        pos: "名",
        ipa: "/əˈmenəti/",
        cn: "便利设施，生活设施",
        jp: "アメニティ、快適な設備",
        family: "amenities",
        tips: "酒店与地产高频：hotel amenities（酒店便利设施），modern amenities（现代设施）。",
        desc: "The hotel offers great amenities."
    },
    {
        word: "app",
        pos: "名",
        ipa: "/æp/",
        cn: "应用程序，应用软件",
        jp: "アプリ、アプリケーション",
        family: "application / apply",
        tips: "IT与移动服务高频：mobile app（移动应用），download an app（下载应用）。",
        desc: "Download the new mobile app."
    },
    {
        word: "apparel",
        pos: "名",
        ipa: "/əˈpærəl/",
        cn: "服装，衣服",
        jp: "衣料品、服装",
        family: "apparels",
        tips: "零售与纺织高频：athletic apparel（运动服装），apparel industry（服装业）。",
        desc: "They sell athletic apparel online."
    },
    {
        word: "archive",
        pos: "名/動",
        ipa: "/ˈɑːrkaɪv/",
        cn: "档案，归档；归档",
        jp: "記録保管所、アーカイブ；保管する",
        family: "archived / archiving / archives",
        tips: "文件管理与IT高频：store in the archive（存入档案库），archive old emails（将旧邮件归档）。",
        desc: "Store old files in the archive."
    },
    {
        word: "brainstorm",
        pos: "動/名",
        ipa: "/ˈbreɪnstɔːrm/",
        cn: "头脑风暴，集思广益",
        jp: "アイデアを出し合う、ブレインストーミング",
        family: "brainstorming / brainstormed",
        tips: "会议与策划高频：brainstorm ideas（集思广益想创意），brainstorming session（头脑风暴会议）。",
        desc: "We will brainstorm new ideas."
    },
    {
        word: "cast",
        pos: "動/名",
        ipa: "/kæst/",
        cn: "投射（光/影），选角；演员阵容",
        jp: "（光・影を）投げかける；出演者",
        family: "casting / cast member",
        tips: "Part 1 & 娱乐高频：cast a shadow（投下阴影），cast members（演员阵容）。",
        desc: "The tree cast a long shadow."
    },
    {
        word: "compact",
        pos: "形/動",
        ipa: "/kəmˈpækt/",
        cn: "紧凑的，小巧的",
        jp: "コンパクトな、小型の",
        family: "compactness / compactly",
        tips: "产品设计与汽车高频：compact design（紧凑设计），compact car（小型轿车）。",
        desc: "It is a compact car."
    },
    {
        word: "condominium",
        pos: "名",
        ipa: "/ˌkɑːndəˈmɪniəm/",
        cn: "公寓大楼，个人产权公寓",
        jp: "分譲マンション、コンドミニアム",
        family: "condo / condominiums",
        tips: "房产与租赁高频：luxury condominium（豪华个人产权公寓），常缩写为 condo。",
        desc: "She lives in a new condominium."
    },
    {
        word: "customize",
        pos: "動",
        ipa: "/ˈkʌstəmaɪz/",
        cn: "定制，按客户要求改装",
        jp: "カスタマイズする、注文で作る",
        family: "customized / customization / customer",
        tips: "服务与生产高频：customize products（定制产品），customize your profile（个性化设置个人资料）。",
        desc: "You can customize your profile."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "accessory",
        category: "简单",
        stem: "The clothing boutique sells fashionable scarves and other leather ________ near the front counter.",
        options: ["accessories", "accessory", "amenity", "apparel"],
        correct: "accessories",
        explanations: {
            guide: "复数名词考点。other 后面接复数可数名词，指皮包/皮带等皮质“饰品/配件”，选 accessories。",
            family: "accessories (n.复数饰品) | accessory (n.单数) | amenity (n.便利设施) | apparel (n.服装)。",
            details: "leather accessories 意为皮革饰品/配件。other 限定词要求使用复数形式 accessories。",
            cn: "这家服装精品店在前台附近出售时尚围巾和其他皮革饰品。",
            jp: "その衣料品ブティックはフロントカウンターの近くで、ファッショナブルなスカーフやその他の革製アクセサリー（accessories）を販売しています。"
        }
    },
    {
        id: 2,
        target: "amenity",
        category: "简单",
        stem: "The luxury hotel boasts top-grade ________ such as a swimming pool and a fitness center.",
        options: ["amenities", "amenity", "condominium", "archive"],
        correct: "amenities",
        explanations: {
            guide: "酒店设施复数名词。such as 举例为游泳池和健身中心（游泳池/健身房），属于酒店提供的“便利设施”，选 amenities。",
            family: "amenities (n.复数便利设施) | amenity (n.单数) | condominium (n.公寓) | archive (n.档案)。",
            details: "top-grade amenities 意为高端便利设施。举例为多个设施，故用复数形式 amenities。",
            cn: "这家豪华酒店拥有游泳池和健身中心等高端便利设施。",
            jp: "その高級ホテルは、スイミングプールやフィットネスセンターなどの最高級のアメニティ（amenities）を誇っています。"
        }
    },
    {
        id: 3,
        target: "app",
        category: "简单",
        stem: "Users can easily track their daily package deliveries by installing the mobile ________.",
        options: ["app", "archive", "compact", "customize"],
        correct: "app",
        explanations: {
            guide: "IT手机应用名词。mobile ________ 属于高频词组，表达“手机应用程序”，选 app。",
            family: "app (n.应用) | archive (n.档案) | compact (adj.紧凑的) | customize (v.定制)。",
            details: "mobile app 意为手机应用软件。archive（档案）、compact（紧凑的）均不符合手机下载安装使用的软件实体。",
            cn: "用户可以通过安装手机应用程序轻松追踪每日包裹的派送情况。",
            jp: "ユーザーはモバイルアプリ（app）をインストールすることで、毎日の荷物配送を簡単に追跡できます。"
        }
    },
    {
        id: 4,
        target: "apparel",
        category: "简单",
        stem: "The store specializes in selling protective work ________ and safety boots for construction workers.",
        options: ["apparel", "app", "accessory", "condominium"],
        correct: "apparel",
        explanations: {
            guide: "服装总称名词。protective work ________ 结合防护靴（safety boots），表达建筑工人的“防护工作服”，选 apparel。",
            family: "apparel (n.服装) | app (n.应用) | accessory (n.饰品) | condominium (n.公寓)。",
            details: "work apparel 意为工作服。app（应用）、condominium（公寓）与工人穿戴的防护服装无关。",
            cn: "该商店专门出售建筑工人的防护工作服和安全靴。",
            jp: "その店は建設作業員向けの保護作業服（apparel）和安全靴の販売を専門としています。"
        }
    },
    {
        id: 5,
        target: "compact",
        category: "简单",
        stem: "Due to limited desk space, the employee preferred using a ________ wireless keyboard.",
        options: ["compact", "compactness", "customize", "brainstorm"],
        correct: "compact",
        explanations: {
            guide: "修饰名词的形容词。在冠词 a 与名词 wireless keyboard 之间填写形容词，表达“小巧紧凑的”，选 compact。",
            family: "compact (adj.紧凑的) | compactness (n.紧凑) | customize (v.定制) | brainstorm (v.头脑风暴)。",
            details: "a compact keyboard 意为小巧紧凑的键盘。compactness 是名词，不能在此作定语修饰 keyboard。",
            cn: "由于桌面空间有限，该员工更喜欢使用小巧紧凑的无线键盘。",
            jp: "デスクスペースが限られているため、その従業員は小型の（compact）ワイヤレスキーボードを使用することを好みました。"
        }
    },
    {
        id: 6,
        target: "customize",
        category: "简单",
        stem: "Clients are allowed to ________ the layout of their new website to fit their branding needs.",
        options: ["customize", "customization", "cast", "archive"],
        correct: "customize",
        explanations: {
            guide: "动词不定式考点。allowed to 后面接动词原形，表达“定制/自定义”网站布局，选 customize。",
            family: "customize (v.定制) | customization (n.定制) | cast (v.投射) | archive (v.归档)。",
            details: "to customize the layout 意为自定义布局。customization 是名词，不能跟在不定式符号 to 后面。",
            cn: "允许客户自定义新网站的布局，以符合其品牌需求。",
            jp: "クライアントはブランディングのニーズに合わせて、新しいウェブサイトのレイアウトをカスタマイズ（customize）することが許可されています。"
        }
    },
    {
        id: 7,
        target: "archive",
        category: "中等",
        stem: "The law firm stores all digitalized records in a secure online ________ to prevent data loss.",
        options: ["archive", "archived", "apparel", "brainstorm"],
        correct: "archive",
        explanations: {
            guide: "数据存储场所名词。in a secure online ________ 表达存放在安全的在线“档案库/数据库”，选 archive。",
            family: "archive (n.档案库/v.归档) | archived (adj.归档的) | apparel (n.服装) | brainstorm (v.头脑风暴)。",
            details: "online archive 意为在线档案库。archived 是分词，不能紧跟在冠词 a 和形容词 online 后面作名词中心语。",
            cn: "该律所将所有数字化记录存放在安全的在线档案库中，以防止数据丢失。",
            jp: "その法律事務所は、データ損失を防ぐためにすべての数字化された記録を安全なオンラインアーカイブ（archive）に保管しています。"
        }
    },
    {
        id: 8,
        target: "brainstorm",
        category: "中等",
        stem: "The marketing team met yesterday morning to ________ creative ideas for the new promotional campaign.",
        options: ["brainstorm", "brainstorming", "customize", "cast"],
        correct: "brainstorm",
        explanations: {
            guide: "动词不定式考点。met to 后面接动词原形，结合 brainstorm ideas（集思广益想创意），选 brainstorm。",
            family: "brainstorm (v.集思广益/头脑风暴) | brainstorming (n.头脑风暴) | customize (v.定制) | cast (v.投射)。",
            details: "to brainstorm creative ideas 意为集思广益构想创意。brainstorming 是分词/名词，不能跟随在 to 后作不定式。",
            cn: "营销团队昨天早上开会，为新的宣传活动集思广益构想创意。",
            jp: "マーケティングチームは昨日の朝、新しいプロモーションキャンペーンのクリエイティブなアイデアを出し合う（brainstorm）ために集まりました。"
        }
    },
    {
        id: 9,
        target: "cast",
        category: "中等",
        stem: "The tall office skyscraper ________ a wide shadow across the central plaza in the late afternoon.",
        options: ["cast", "casting", "compact", "condominium"],
        correct: "cast",
        explanations: {
            guide: "动词过去式与固定搭配。主语是 skyscraper，后面缺少谓语动词，结合 cast a shadow（投下阴影），选 cast（过去式与原形同形）。",
            family: "cast (v.投射/过去式同形) | casting (v-ing) | compact (adj.紧凑的) | condominium (n.公寓)。",
            details: "cast a wide shadow 意为投下一片宽广的阴影。cast 的过去式仍为 cast，此处表示过去发生的动作。",
            cn: "傍晚时分，高耸的办公大楼在中央广场投下一片宽广的阴影。",
            jp: "夕方、背の高いオフィスビルが中央広場に広い影を投げかけました（cast）。"
        }
    },
    {
        id: 10,
        target: "condominium",
        category: "中等",
        stem: "Real estate developers recently finished building a multi-story residential ________ near the waterfront.",
        options: ["condominium", "amenity", "apparel", "accessory"],
        correct: "condominium",
        explanations: {
            guide: "地产住宅名词。residential ________ 指“住宅公寓大楼”，选 condominium。",
            family: "condominium (n.个人产权公寓大楼) | amenity (n.便利设施) | apparel (n.服装) | accessory (n.饰品)。",
            details: "residential condominium 指住宅公寓大楼。amenity（便利设施）、apparel（服装）均非建筑物实体名称。",
            cn: "房地产开发商最近在滨水区附近完工了一栋多层住宅公寓大楼。",
            jp: "不動産開発業者は最近、ウォーターフロント近くに多層階の住宅用コンドミニアム（condominium）の建設を完了しました。"
        }
    },
    {
        id: 11,
        target: "amenity",
        category: "中等",
        stem: "The property manager highlighted the availability of modern building ________ during the apartment tour.",
        options: ["amenities", "amenity", "condominiums", "accessories"],
        correct: "amenities",
        explanations: {
            guide: "地产设施复数名词。building ________ 表达大楼的各类“便利设施”，泛指多项设施时用复数 amenities。",
            family: "amenities (n.复数便利设施) | amenity (n.单数) | condominiums (n.公寓大楼) | accessories (n.配件)。",
            details: "building amenities 意为大楼便利设施。在泛指大楼内整体配套设施时，固定选用复数形式 amenities。",
            cn: "物业经理在带看公寓期间重点介绍了大楼配备的现代便利设施。",
            jp: "不動産管理人は、アパートの見学中に現代的なビルの設備（amenities）の利用可能性を小高くアピールしました。"
        }
    },
    {
        id: 12,
        target: "customize",
        category: "中等",
        stem: "Software developers provided several ________ options so users could adjust their privacy settings easily.",
        options: ["customization", "customize", "compact", "archived"],
        correct: "customization",
        explanations: {
            guide: "派生名词作前置定语。________ options 属于软件行业高频词组，意为“自定义/定制选项”，选 customization。",
            family: "customization (n.定制/自定义) | customize (v.定制) | compact (adj.紧凑的) | archived (adj.归档的)。",
            details: "customization options 意为自定义选项。customize 为动词原形，不能作名词 options 的前置定语。",
            cn: "软件开发人员提供了几个自定义选项，以便用户可以轻松调整其隐私设置。",
            jp: "ソフトウェア開発者はユーザーがプライバシー設定を簡単に調整できるよう、いくつかのカスタマイズ（customization）オプションを提供しました。"
        }
    },
    {
        id: 13,
        target: "archive",
        category: "困难",
        stem: "For compliance purposes, all sensitive financial transactions must be carefully ________ within twenty-four hours.",
        options: ["archived", "archiving", "customized", "compacted"],
        correct: "archived",
        explanations: {
            guide: "被动语态与档案管理。must be carefully ________ 表达财务交易记录必须被“归档/封存”，选过去分词 archived。",
            family: "archived (v-ed被归档的) | archiving (v-ing) | customized (v-ed被定制的) | compacted (v-ed被压实的)。",
            details: "be carefully archived 意为被仔细归档。archiving 为主动分词，不符合主语 transactions 被归档的逻辑。",
            cn: "出于合规目的，所有敏感的财务交易必须在二十四小时内被仔细归档。",
            jp: "コンプライアンスの目的で、すべての機密財務取引は24時間以内に慎重に記録保管（archived）されなければなりません。"
        }
    },
    {
        id: 14,
        target: "brainstorm",
        category: "困难",
        stem: "The quarterly innovation session began with an intensive ________ process led by the product director.",
        options: ["brainstorming", "brainstorm", "customization", "casting"],
        correct: "brainstorming",
        explanations: {
            guide: "动名词/分词作前置定语。an intensive ________ process 属于商务创新高频短语，表达“头脑风暴流程”，选 brainstorming。",
            family: "brainstorming (n./v-ing头脑风暴) | brainstorm (v./n.头脑风暴) | customization (n.定制) | casting (n.选角)。",
            details: "brainstorming process 意为头脑风暴/集思广益流程。brainstorm 是动词原形，修饰 process 时选动名词形式 brainstorming。",
            cn: "季度创新会议以产品总监主持的密集头脑风暴流程开始。",
            jp: "四半期イノベーションセッションは、プロダクトディレクターが主導する集中したブレインストーミング（brainstorming）プロセスで始まりました。"
        }
    },
    {
        id: 15,
        target: "apparel",
        category: "困难",
        stem: "Market research indicates a sharp increase in online retail sales across the global ________ industry.",
        options: ["apparel", "accessories", "amenities", "condominiums"],
        correct: "apparel",
        explanations: {
            guide: "行业专属名词定语。the global ________ industry 属于商务高频专有名词，意为“全球服装产业”，选 apparel。",
            family: "apparel (n.服装/服装的) | accessories (n.饰品) | amenities (n.便利设施) | condominiums (n.公寓)。",
            details: "apparel industry 专指服装产业。accessories（饰品）、amenities（便利设施）均非与 global 连用修饰此特定大产业的标准定语。",
            cn: "市场研究表明，全球服装产业的在线零售额大幅增加。",
            jp: "市場調査によると、世界的な衣料品（apparel）産業全体でオンライン小売売上高が急増していることが示されています。"
        }
    },
    {
        id: 16,
        target: "cast",
        category: "困难",
        stem: "Directors are finalizing the theatrical ________ for the upcoming Broadway musical revival.",
        options: ["cast", "casting", "customization", "compactness"],
        correct: "cast",
        explanations: {
            guide: "戏剧与演出集合名词。theatrical ________ 指剧目的“演员阵容/演职人员”，选集合名词 cast。",
            family: "cast (n.演员阵容) | casting (n.选角过程) | customization (n.定制) | compactness (n.紧凑)。",
            details: "theatrical cast 指剧团/戏剧的演员阵容。casting 指选角这个动作过程，在此处表达确定的演职人员整体时用 cast。",
            cn: "导演们正在敲定即将上演的百老汇复排音乐剧的剧场演员阵容。",
            jp: "監督たちは、近く上演されるブロードウェイミュージカル再演の劇場キャスト（cast）を最終打診しています。"
        }
    },
    {
        id: 17,
        target: "compact",
        category: "困难",
        stem: "Engineers worked diligently to enhance the structural ________ of the portable power generator.",
        options: ["compactness", "compact", "customization", "archiving"],
        correct: "compactness",
        explanations: {
            guide: "派生抽象名词考点。enhance the structural ________ 结构中，在形容词后面接名词形式 compactness，表达便携发电机结构的“小巧性/紧凑度”。",
            family: "compactness (n.紧凑度/小巧) | compact (adj.紧凑的) | customization (n.定制) | archiving (n.归档)。",
            details: "structural compactness 指结构紧凑度。compact 是形容词，不能直接作及物动词 enhance 的宾语。",
            cn: "工程师们勤奋工作，以提高便携式发电机的结构紧凑度。",
            jp: "エンジニアはポータブル発電機の構造的コンパクトさ（compactness）を向上させるために精力的に作業しました。"
        }
    },
    {
        id: 18,
        target: "condominium",
        category: "困难",
        stem: "The local urban planning board approved the construction of several oceanfront ________ units downtown.",
        options: ["condominium", "condominiums", "amenities", "accessories"],
        correct: "condominium",
        explanations: {
            guide: "名词作前置定语单数形式。________ units 指“个人产权公寓单元”，名词作定语修饰复数 units 时使用单数形式 condominium。",
            family: "condominium (n.个人产权公寓) | condominiums (n.复数) | amenities (n.便利设施) | accessories (n.配件)。",
            details: "condominium units 属于地产专有名词。作前置定语修饰 units 时固定使用单数形式 condominium（如 condo units），无需用复数 condominiums。",
            cn: "当地城市规划委员会批准在市中心建设几套海景公寓单元。",
            jp: "地元の都市計画委員会は、ダウンタウンにあるいくつかのオーシャンフロントの分譲マンション（condominium）ユニットの建設を承認しました。"
        }
    }
];