// 課程腳本：Module 1–2（中文）
// tts 欄位中的 [標籤] 是給 Fish Audio 的情緒指示，畫面上會自動移除。
// 每句台詞：pose(角色動作) / tts(台詞) / board(換白板內容) / reveal(白板逐項顯示到第幾項)
// board.source：資料來源（顯示在白板底部）
window.COURSE = {
  title: "大人的自媒體：OnlyFans 實戰課",
  modules: [
    {
      id: "m1",
      no: 1,
      title: "前導與準備",
      outcome: "清楚個人可行性與目標，確認投入前的必要條件",
      bg: "room",
      intro: {
        lines: [
          { pose: "cheer", tts: "[excited] 嗨嗨～歡迎來到「大人的自媒體：OnlyFans 實戰課」！",
            board: { type: "title", kicker: "WELCOME ♡", title: "大人的自媒體", sub: "OnlyFans 實戰課・8 大章節・從零到可持續經營" } },
          { pose: "talk", tts: "[warm, friendly] 我是你們的講師 bunnybrownie，一路做到全球前 0.01%。這堂課，我會把我自己真的在用的系統，一步一步交給你。" },
          { pose: "point", tts: "[energetic] 整堂課有八個章節：從準備、開帳號、拍攝、導流、每週經營、成長、定價留存，一直到法律與安全。每一章都能直接拿去用。",
            board: { type: "chapter", no: "1–8", title: "課程地圖", items: ["前導與準備", "帳號與系統設定", "拍攝與內容製作", "多平台開通與導流", "內容經營與週計畫", "廣告與合作增長", "定價與留存策略", "法律與安全合規"] } },
          { pose: "cheer", tts: "[excited] 那我們就從第一章開始：前導與準備！",
            board: { type: "chapter", no: 1, title: "前導與準備", items: ["1.1 什麼是 OnlyFans", "1.2 我適合做嗎？", "1.3 真的準備好了嗎？"], goal: "清楚個人可行性與目標，確認投入前的必要條件" } },
          { pose: "talk", tts: "[warm, sincere] 這一章不急著教你賺錢，而是先陪你搞清楚：這個平台是什麼、你適不適合、還缺什麼。地基打好，房子才蓋得高。" }
        ]
      },
      outro: {
        lines: [
          { pose: "talk", tts: "[warm] 來，我們幫第一章收個尾，五個重點一起複習一下。",
            board: { type: "bullets", heading: "📝 Module 1 重點回顧", items: [
              { icon: "🎟️", label: "付費會員引擎", text: "OF 負責把喜歡變成收入" },
              { icon: "🧲", label: "要自己導流", text: "OF 站內不幫你找客人" },
              { icon: "🙈", label: "先設界線", text: "寫好「絕對不公開清單」" },
              { icon: "📦", label: "4 週內容庫", text: "28 篇貼文＋8 組 PPV" },
              { icon: "🧮", label: "四個數字", text: "ARPU・RR・PPV 解鎖率・LTV" } ], reveal: 5 } },
          { pose: "cheer", tts: "[excited, proud] 恭喜你完成 Module 1！你已經比九成的人更清楚自己要什麼了。",
            board: { type: "done", title: "Module 1 完成！", text: "學習成果：清楚個人可行性與目標，確認投入前的必要條件" } },
          { pose: "point", tts: "[playful, teasing] 下一章，我們要真的動手了：開帳號、綁金流、建立工作流。把護照準備好，我們馬上出發！" }
        ]
      },
      lessons: [
        {
          id: "1.1",
          title: "什麼是 OnlyFans",
          bg: "room",
          lines: [
            { pose: "talk", tts: "[cheerful] 第一節，我們先來認識：OnlyFans 到底是什麼？",
              board: { type: "title", kicker: "MODULE 1 · 1.1", title: "什麼是 OnlyFans？", sub: "平台定位・商業模式・與其他平台差異" } },
            { pose: "point", tts: "[confident] 先講最核心的一句話：OnlyFans 是一個「訂閱＋付費解鎖」的創作者平台。",
              board: { type: "big", label: "核心概念", value: "訂閱 ＋ 付費解鎖", note: "直接向粉絲收費，建立長期、可衡量的關係與收入" } },
            { pose: "talk", tts: "[playful, storytelling] 用一個比喻：IG 跟 TikTok 像是熱鬧的大街，大家路過看看；OnlyFans 則是你自己開的會員制小店，要買票才能進來。",
              board: { type: "analogy", heading: "一個比喻就懂", items: [
                { icon: "🛣️", label: "IG／TikTok＝大街", text: "人潮多、免費看，負責讓人認識你" },
                { icon: "🎟️", label: "OnlyFans＝會員小店", text: "買票才能進，負責把喜歡變成收入" } ] } },
            { pose: "talk", tts: "[gentle] 所以你的粉絲不是廣告受眾，而是付費會員。價格你定、內容你決定，你就是老闆。" },
            { pose: "point", tts: "[impressed, energetic] 這間「店」有多大？根據官方財報，2025 年度粉絲一共付了七十八億美元，其中六十三億美元，直接分給了創作者！",
              board: { type: "stats", heading: "📈 OnlyFans 有多大？（2025 財年）", items: [
                { value: "$78.4 億", label: "粉絲總付款（美元）" },
                { value: "$62.9 億", label: "創作者實拿（美元）" },
                { value: "506 萬", label: "創作者帳號" },
                { value: "4.37 億", label: "粉絲帳號" } ],
                source: "資料來源：Fenix International（OnlyFans 母公司）FY2025 年報，財年截至 2025/11/30" } },
            { pose: "warn", tts: "[honest, serious] 但我要老實說：平均下來，每位創作者一個月只賺大約一百美金。錢，其實集中在少數會經營的人身上。",
              board: { type: "compare2", heading: "平均 vs 頂尖", left: { title: "平均創作者", value: "≈ $100／月", text: "$62.9 億 ÷ 506 萬人，一年約 $1,240" }, right: { title: "前 0.01%", value: "≈ 前 500 名", text: "506 萬人裡的 0.01%，就是我們的目標" },
                source: "依 FY2025 年報數字換算，僅供理解量級" } },
            { pose: "cheer", tts: "[determined, encouraging] 好消息是，差距不是靠運氣，而是靠系統。這，就是這堂課存在的原因！" },
            { pose: "point", tts: "[energetic] 那錢從哪裡來？主要有五種：月訂閱費、PPV 付費解鎖、小費、一對一聊天，還有直播跟付費貼文。",
              board: { type: "bullets", heading: "💰 收入來源", items: [
                { icon: "📅", label: "月訂閱費", text: "$4.99–$49.99／月，也可以開免費帳號" },
                { icon: "🔓", label: "PPV 解鎖", text: "貼文或私訊付費看" },
                { icon: "💝", label: "小費 Tips", text: "粉絲的心意" },
                { icon: "💬", label: "一對一聊天", text: "陪伴也有價值" },
                { icon: "🎥", label: "直播／付費貼文", text: "即時互動變現" } ], reveal: 5,
                source: "訂閱價格區間以 OnlyFans 後台設定為準" } },
            { pose: "think", tts: "[curious, then excited] 你猜猜看，哪一種賺最多？答案是：私訊、PPV 跟小費！據報導，2025 年它們已經佔平台收入的七成以上。",
              board: { type: "big", label: "2025 年的趨勢", value: "PPV＋小費＋私訊 ≈ 73%", note: "訂閱只是入場券，真正的收入在「互動」。所以後面會花很多時間教 DM！",
                source: "資料來源：媒體報導之 FY2025 年報分析" } },
            { pose: "warn", tts: "[serious, clear] 抽成要先記清楚：平台抽 20%，你拿 80%。粉絲付一百塊，你拿八十，而且金流跟匯兌的費用還要另外算喔。",
              board: { type: "split", heading: "平台抽成", a: { label: "你拿到", value: 80 }, b: { label: "平台", value: 20 }, note: "例：粉絲付 $100 → 你拿 $80（另計提領手續費與匯兌）" } },
            { pose: "think", tts: "[curious] 那它跟其他平台到底差在哪？我們來比一比。",
              board: { type: "compare", heading: "平台大比拚", rows: [
                { k: "IG／TikTok", v: "流量大但不能露骨，拿來「導流」" },
                { k: "Patreon", v: "偏創作贊助，成人功能少" },
                { k: "ManyVids", v: "單片解鎖、平台抽比較多，可導流到 OF" },
                { k: "Fansly", v: "功能類似，生態與金流不同" },
                { k: "PH／XH", v: "免費流量池，漏斗最上層" },
                { k: "OnlyFans", v: "付費用戶最多，DM 變現最強" } ], reveal: 6 } },
            { pose: "warn", tts: "[important, emphatic] 還有一個新手最常忽略的重點：OnlyFans 站內幾乎沒有推薦跟搜尋，粉絲不會自己找上門。流量，要靠你從外面帶進來。",
              board: { type: "big", label: "新手必知", value: "OF 不幫你找客人", note: "站內幾乎沒有推薦演算法 → 你需要外部平台導流" } },
            { pose: "talk", tts: "[explaining, lively] 所以要分工！社群負責「被看見」，免費流量池負責「給樣本」，OnlyFans 負責「收費跟經營關係」。",
              board: { type: "funnel", heading: "多平台分工漏斗", stages: [
                { label: "社群獲客", sub: "IG・TikTok・X・Reddit" },
                { label: "免費樣本", sub: "PH・XH 流量池" },
                { label: "付費轉化", sub: "OnlyFans 會員" } ] } },
            { pose: "cheer", tts: "[upbeat, encouraging] 記住：OnlyFans 就是你的「付費會員引擎」！成功的關鍵是分層定價、穩定節奏、用心的私訊，還有安全合規。",
              board: { type: "bullets", heading: "✨ 本節重點", items: [
                { icon: "🪜", label: "分層定價", text: "每個粉絲都有適合的方案" },
                { icon: "⏰", label: "穩定節奏", text: "固定更新養成習慣" },
                { icon: "💌", label: "DM 互動", text: "收入主力在私訊與解鎖" },
                { icon: "🧲", label: "外部導流", text: "OF 不幫你找客人" },
                { icon: "🛡️", label: "合規安全", text: "金流穩定才走得遠" } ], reveal: 5 } }
          ]
        },
        {
          id: "1.2",
          title: "我適合做 OnlyFans 嗎？",
          bg: "room",
          lines: [
            { pose: "think", tts: "[gentle, sincere] 開始之前，我想先認真問你一句：你，真的適合做這件事嗎？",
              board: { type: "title", kicker: "MODULE 1 · 1.2", title: "我適合做 OnlyFans 嗎？", sub: "入門條件與風險評估 Checklist" } },
            { pose: "warn", tts: "[serious, caring] 為什麼要先問？因為網路是有記憶的。內容一旦外流，幾乎不可能百分之百刪乾淨。所以，先想清楚，比什麼都重要。",
              board: { type: "big", label: "先想清楚", value: "網路是有記憶的", note: "外流內容很難完全刪除 → 開始前先設好界線，是保護自己最便宜的方法" } },
            { pose: "talk", tts: "[warm] 別緊張，這不是考試～我們用五個檢查點，陪你誠實地看看自己。",
              board: { type: "checklist", id: "c12", heading: "5 大 Check Point", items: [
                { label: "界線 OK 嗎？", text: "臉、真名、家人、工作——哪些不能公開，你心裡有數，也守得住。" },
                { label: "被說閒話可以嗎？", text: "親友知道後，頂多心裡卡一下，生活照樣走。" },
                { label: "遇到酸民怎麼辦？", text: "不吵、直接封鎖、順手留證，不跟著下去。" },
                { label: "復原速度快不快？", text: "被罵一天內能回到正常：運動、寫日記、找人聊。" },
                { label: "有自己的後援團嗎？", text: "至少 2–3 個信任的人，必要時能找諮商或法律顧問。" } ], reveal: 1 } },
            { pose: "warn", tts: "[serious, caring] 第一個，界線。臉、真名、家人、工作，哪些不能公開，你要心裡有數，而且要穩穩守住，不踩線。", reveal: 1 },
            { pose: "point", tts: "[helpful, practical] 我建議你寫一張「絕對不公開清單」。很多人露出身分，不是因為臉，而是因為刺青、窗外的風景，或是照片裡的定位資訊。",
              board: { type: "bullets", heading: "🙈 絕對不公開清單（範例）", items: [
                { icon: "🪪", label: "身分資訊", text: "真名、生日、學校、公司" },
                { icon: "🦋", label: "身體特徵", text: "刺青、胎記、特殊飾品" },
                { icon: "🪟", label: "環境線索", text: "窗外景色、門牌、車牌、制服" },
                { icon: "📍", label: "照片定位", text: "上傳前關閉／移除 GPS 資訊" },
                { icon: "🪞", label: "反光倒影", text: "鏡子、螢幕、眼睛裡的倒影" } ], reveal: 5 } },
            { pose: "talk", tts: "[relaxed, slightly teasing] 第二個，被說閒話可以嗎？親友知道了，你會不會慌到失控？頂多心裡卡一下、生活照樣過，就算過關～",
              board: { type: "checklist", id: "c12", heading: "5 大 Check Point", items: "same", reveal: 2 } },
            { pose: "point", tts: "[firm, confident] 第三個，遇到酸民！我的 SOP 很簡單：不吵、直接封鎖、順手留證。看到噁心留言，不要跟著下去。", reveal: 3 },
            { pose: "talk", tts: "[gentle] 第四個，復原速度。被罵了，一天內能不能回到正常？運動、寫日記、找朋友聊，把情緒拉回來。", reveal: 4 },
            { pose: "cheer", tts: "[warm, reassuring] 最後，你要有自己的後援團！至少兩到三個信任的人，出事的時候，你不是一個人。", reveal: 5 },
            { pose: "point", tts: "[playful] 好啦，現在換你！在右邊白板上，把符合的項目勾起來吧～全部勾滿，就可以進下一節囉！" }
          ]
        },
        {
          id: "1.3",
          title: "真的準備好了嗎？",
          bg: "room",
          lines: [
            { pose: "talk", tts: "[energetic] 心理這關過了，接下來我們來盤點：品牌、時間、心態、器材、還有系統。",
              board: { type: "title", kicker: "MODULE 1 · 1.3", title: "真的準備好了嗎？", sub: "品牌・時間・心理・資源 盤點 Checklist" } },
            { pose: "point", tts: "[confident] 第一，品牌穩不穩？你是誰、想賣什麼感覺，能不能一口氣說清楚？",
              board: { type: "checklist", id: "c13", heading: "準備度盤點", scoring: true, items: [
                { label: "品牌穩不穩", text: "主題、語氣、視覺合拍，讓人一眼認出你。" },
                { label: "時間夠不夠", text: "每週固定拍、剪、排程、回訊息；先備好 4 週內容庫。" },
                { label: "心態扛不扛", text: "酸民 SOP 到位，情緒 24–48 小時內拉回來。" },
                { label: "器材有沒有", text: "手機＋燈光＋收音，檔案有備份。" },
                { label: "後援準備好", text: "合約模板、2–3 位後援已就位。" },
                { label: "願意學系統", text: "金流 Paxum／加密貨幣、稅務版權、水印匿名策略。" },
                { label: "會看數據", text: "懂 RR 續訂率、PPV、ARPU、LTV。" } ], reveal: 1 } },
            { pose: "talk", tts: "[playful, teaching] 小練習：用一句話介紹你自己。例如「白天是乖乖上班族，晚上是你的專屬女友」。有反差，就有記憶點！",
              board: { type: "formula", heading: "一句話品牌公式", parts: ["我是＿＿＿（身分）", "＋", "但其實＿＿＿（反差）", "＝", "讓你想認識的我"], example: "例：「白天乖乖上班族 × 晚上專屬女友」" } },
            { pose: "talk", tts: "[passionate] 網路世界，就是你在現實裡碰不到的那些人。只要你夠有特色、夠有反差，在網路上，那就是致命吸引力！",
              board: { type: "checklist", id: "c13", heading: "準備度盤點", scoring: true, items: "same", reveal: 1 } },
            { pose: "warn", tts: "[serious, advising] 第二，時間。拜託，先準備好四週的內容庫再上線，不要邊上線邊抓狂。四週大概是多少？我幫你算好了。", reveal: 2 },
            { pose: "point", tts: "[clear, helpful] 每天一篇貼文，四週就是二十八篇；每週兩次私訊 PPV，就是八組付費內容；再加一個月一次的驚喜。先存好，你就有底氣。",
              board: { type: "calc", heading: "📦 4 週內容庫要準備多少？", rows: [
                { l: "日常貼文", f: "1 篇 × 28 天", r: "28 篇" },
                { l: "私訊 PPV", f: "2 組 × 4 週", r: "8 組" },
                { l: "每月驚喜", f: "1 個 × 1 月", r: "1 個" } ], total: "先備好，上線才不抓狂", source: "節奏建議取自第二章「核心節奏」" } },
            { pose: "think", tts: "[thoughtful, calm] 第三，心態。你想想，全世界有八十二億人，二十五到四十五歲的就有二十三億。那幾則惡意留言，真的微不足道。",
              board: { type: "checklist", id: "c13", heading: "準備度盤點", scoring: true, items: "same", reveal: 3 } },
            { pose: "cheer", tts: "[laughing lightly, upbeat] 而且啊，會引起討論的留言，反而會讓演算法推你！所以，專心把內容做好，讓更多人看見你的好，才是關鍵。", reveal: 3 },
            { pose: "talk", tts: "[casual, playful] 第四，器材。能錄影的手機、夠亮的燈光、簡單的收音……或是你講話超大聲也可以啦，哈哈！", reveal: 5 },
            { pose: "point", tts: "[confident, clear] 第五，願意學系統，還有看懂數字。聽起來很難？其實只有四個，我用一個小例子讓你秒懂。", reveal: 7 },
            { pose: "talk", tts: "[teaching, friendly] 假設你有一百個訂閱者，這個月總共收了一千五百美金，那每人平均貢獻十五塊，這就是 ARPU。",
              board: { type: "calc", heading: "🧮 四個數字，一個例子搞懂", rows: [
                { l: "ARPU 每人平均收入", f: "$1,500 ÷ 100 人", r: "$15" },
                { l: "RR 續訂率", f: "到期 100 人，60 人續訂", r: "60%" },
                { l: "PPV 解鎖率", f: "發給 100 人，25 人解鎖", r: "25%" },
                { l: "LTV 終身價值", f: "$15 × 平均留 4 個月", r: "$60" } ], reveal: 1, total: "LTV 越高，代表你越留得住人" } },
            { pose: "point", tts: "[clear] 一百個人到期，六十個人續訂，續訂率就是百分之六十。PPV 發給一百人、二十五個人解鎖，解鎖率就是百分之二十五。", reveal: 3 },
            { pose: "cheer", tts: "[excited] 最後，每人每月十五塊，平均留四個月，一個粉絲就值六十塊，這就是 LTV！留得越久，你賺越多。", reveal: 4 },
            { pose: "talk", tts: "[warm] 最後來自我評估：勾六項以上是綠燈，先小規模上線試水溫；四到五項是黃燈，先補強再跑四週試行；三項以下是紅燈，先做心理建設，暫時別公開。",
              board: { type: "lights", heading: "自我評估", items: [
                { color: "green", label: "綠燈 · 6 項以上", text: "情緒恢復快、系統到位 → 小規模上線試水溫" },
                { color: "yellow", label: "黃燈 · 4–5 項", text: "先補匿名、話術、後援 → 跑 4 週試行" },
                { color: "red", label: "紅燈 · 3 項以下", text: "先心理建設＋私密測試 → 暫時別公開" } ] } }
          ]
        }
      ]
    },
    {
      id: "m2",
      no: 2,
      title: "帳號與系統設定",
      outcome: "完成可營運的帳號與金流；建立基礎資料與工作流",
      bg: "office",
      intro: {
        lines: [
          { pose: "cheer", tts: "[excited] 歡迎來到第二章：帳號與系統設定！",
            board: { type: "chapter", no: 2, title: "帳號與系統設定", items: ["註冊與身份驗證", "後台介面導覽", "金流設定", "Paxum 帳戶", { t: "MAX 帳戶", only: "tw" }, "加密貨幣交易所與加密卡", "內容資產管理"], goal: "完成可營運的帳號與金流；建立基礎資料與工作流" } },
          { pose: "talk", tts: "[confident] 這是最「手作」的一章。跟著做完，你會有一個能營運的帳號、能收錢的金流，還有一套整理素材的系統。" },
          { only: "tw", pose: "warn", tts: "[playful but serious] 先提醒你：英文戶籍謄本要等好幾個工作天。建議你現在先按暫停，上網預約，再回來繼續上課！" },
          { only: "intl", pose: "warn", tts: "[playful but serious] 先提醒你：有些文件，像是最近的地址證明，需要一點時間準備。建議你現在先去整理好，再回來繼續上課！" }
        ]
      },
      outro: {
        lines: [
          { pose: "talk", tts: "[warm] 第二章好多實作，辛苦了！我們把六個重點整理一下。",
            board: { type: "bullets", heading: "📝 Module 2 重點回顧", items: [
              { icon: "📧", label: "工作私人分開", text: "專用信箱、藝名、帳號" },
              { icon: "🪪", label: "資料一致", text: "姓名地址生日＝證件" },
              { icon: "🔐", label: "開 2FA", text: "帳號就是你的店面" },
              { icon: "🧾", label: "累積再提", text: "手續費比例差 10 倍" },
              { icon: "⛓️", label: "選對鏈", text: "加密貨幣先小額測試" },
              { icon: "💾", label: "3-2-1 備份", text: "內容就是你的資產" } ], reveal: 6 } },
          { pose: "cheer", tts: "[excited, proud] 太棒了！Module 2 完成！你現在有能營運的帳號、能收錢的金流，還有一套自己的工作流。",
            board: { type: "done", title: "Module 2 完成！", text: "學習成果：完成可營運的帳號與金流；建立基礎資料與工作流" } },
          { pose: "point", tts: "[excited, teasing] 下一章是大家最期待的：拍攝與內容製作！我會教你怎麼拍出讓人忍不住付費的照片跟影片～" }
        ]
      },
      lessons: [
        {
          id: "2.1",
          title: "帳號註冊與身份驗證",
          bg: "office",
          lines: [
            { pose: "cheer", tts: "[energetic] 第一節，我們直接動手，把帳號開起來！",
              board: { type: "title", kicker: "MODULE 2 · 2.1", title: "帳號註冊與身份驗證", sub: "Step by Step 開通創作者帳號" } },
            { pose: "point", tts: "[helpful] 開始之前，先把這五樣東西放在手邊，等一下就不會卡關。",
              board: { type: "docs", heading: "🧰 註冊前準備", items: [
                { icon: "🛂", label: "護照", text: "效期充足、彩色、四角入鏡" },
                { icon: "📧", label: "工作專用 Gmail", text: "和私人帳號完全分開" },
                { icon: "📱", label: "手機", text: "收驗證碼＋自拍活體檢測" },
                { icon: "🏦", label: "收款管道", text: "Paxum 或美金帳戶（第二章會教）" },
                { icon: "💡", label: "光線好的角落", text: "自拍驗證用，不要開濾鏡" } ] } },
            { pose: "point", tts: "[helpful, clear] 第一步：先去 Gmail 註冊一個專門給工作用的信箱。工作跟私人生活，從第一天就分開。",
              board: { type: "steps", heading: "註冊流程", items: [
                { label: "建立工作信箱", text: "專用 Gmail，與私生活切分" },
                { label: "註冊並驗證 Email", text: "一人最多 3 個帳號，先開一個" },
                { label: "Become a creator", text: "More → Become a creator" },
                { label: "身份與年齡驗證", text: "護照＋自拍／活體檢測" },
                { label: "稅務資料", text: "非美國人填 W-8BEN" },
                { label: "收款設定", text: "綁定 Paxum 等，小額測試" },
                { label: "開啟 2FA", text: "備份碼＋登入提醒" } ], reveal: 2 } },
            { pose: "talk", tts: "[sharing a tip] 小祕密：一個人最多可以開三個帳號。我建議一個付費訂閱、一個免費導流，一個做 AI 帳號。不過一開始，先開一個就好。", reveal: 2 },
            { pose: "point", tts: "[instructive] 登入之後，左邊選單點 More，再點 Become a creator，填好顯示名稱、帳號、簡介跟國家。", reveal: 3 },
            { pose: "warn", tts: "[serious, emphatic] 注意！國家要跟你的證件一致，姓名、生日、地址，也都要跟證件一模一樣。不然審核一定卡。", reveal: 3 },
            { pose: "talk", tts: "[playful, light] 帳號名稱最好不要超過三個音節，好記又好拼！粉絲要能在別的平台看到，一次就打對。",
              board: { type: "names", heading: "好記的 @username", good: ["kazumi", "aisha", "mona wu"], rule: "≤ 3 個音節・好記・好拼・各平台統一" } },
            { pose: "point", tts: "[cheerful] 簡介我幫你準備好公版了，改成你自己的名字、你的尺度，就可以直接用。",
              board: { type: "bio" } },
            { pose: "talk", tts: "[instructive, calm] 接著是身份驗證。上傳護照，再做自拍的活體檢測。證件要四角入鏡、不要反光；自拍不要開濾鏡，光線要充足。",
              board: { type: "steps", heading: "註冊流程", items: "same", reveal: 4 } },
            { pose: "point", tts: "[clear] 稅務的部分，如果你不是美國人，填 W-8BEN，證明你不是美國稅務居民。然後綁定收款，記得先做一次小額測試。", reveal: 6 },
            { pose: "warn", tts: "[firm, protective] 最後，一定一定要開雙重驗證跟登入提醒。你的帳號，就是你的店面，要鎖好！", reveal: 7 },
            { pose: "warn", tts: "[serious] 還有幾個重點：平台抽二十趴；收入通常要等七天才能提領，新帳號可能更久；有第三人出鏡，一定要有書面同意書。",
              board: { type: "bullets", heading: "⚠️ 風險提示", items: [
                { icon: "💸", label: "抽成 20%", text: "你拿 80%，另計金流／匯兌" },
                { icon: "⏳", label: "等候期 ≈ 7 天", text: "新帳號或部分地區可能更久" },
                { icon: "🪪", label: "資料一致", text: "姓名地址生日與證件相同" },
                { icon: "📝", label: "第三人同意書", text: "書面同意＋年齡確認" } ], reveal: 4,
                source: "等候期依 OnlyFans 後台實際顯示為準" } },
            { pose: "cheer", tts: "[warm, cheerful] 祝你註冊順利！下一節，我帶你逛一圈後台。" }
          ]
        },
        {
          id: "2.2",
          title: "介面導覽",
          bg: "office",
          lines: [
            { pose: "talk", tts: "[lively] 帳號開好了，我們來逛逛後台！發文、貼文設定、聊天、解鎖、排程，一次搞懂。",
              board: { type: "title", kicker: "MODULE 2 · 2.2", title: "介面導覽", sub: "發文・貼文設定・聊天・解鎖・排程" } },
            { pose: "point", tts: "[explaining] 先聊發文的尺度定位。你是自由的，但從行銷角度來看：貼文裡放的，要比你付費內容的尺度，低一階。",
              board: { type: "ladder", heading: "尺度階梯", items: [
                { label: "付費內容", text: "你的最高尺度", tag: "PPV" },
                { label: "公開貼文", text: "往下一階，留住好奇心", tag: "Post" },
                { label: "氛圍感", text: "性感也可以是情緒的延伸", tag: "Vibe" } ] } },
            { pose: "talk", tts: "[intimate, soft] 就像電影預告，不會把結局放出來。越真實的照片，粉絲越有興趣。記住，他們想認識的，是真實的你。" },
            { pose: "warn", tts: "[serious, a bit sad but strong] 貼文設定裡，浮水印非常重要。要有心理準備，所有東西都可能被偷、被外流。",
              board: { type: "bullets", heading: "⚙️ 貼文設定", items: [
                { icon: "🏷️", label: "定價", text: "PPV 付費解鎖或訂閱可見" },
                { icon: "🎁", label: "解鎖條件", text: "捆綁優惠、折扣碼、限時" },
                { icon: "👀", label: "可見範圍", text: "全員／訂閱者／特定名單" },
                { icon: "💧", label: "浮水印", text: "所有照片影片都要加！" } ], reveal: 4 } },
            { pose: "talk", tts: "[hopeful, gentle] 不過別灰心，真心愛你的粉絲，是有機會追著浮水印找到你的。浮水印，也是你的免費廣告。" },
            { pose: "point", tts: "[confident] 解鎖 PPV 的技巧：先放短預告、講清楚賣點，然後分輕量、標準、豪華三檔。大部分人會選中間那個，這叫做「中間選項效應」。",
              board: { type: "tiers", heading: "PPV 分檔定價（範例）", items: [
                { label: "輕量 $8", icon: "🍬" }, { label: "標準 $15", icon: "🍰" }, { label: "豪華 $30", icon: "🎂" } ], note: "價格僅為示意｜三個選項時，多數人會選中間 → 把你最想賣的放中間" } },
            { pose: "talk", tts: "[playful, flirty tone] 私訊的話術順序是：先暖場，再拋賣點，最後限時加價購～我們來看個例子。",
              board: { type: "chat", heading: "DM 三步驟（範例）", items: ["暖場：今天好累喔，你在幹嘛呀？☕", "拋賣點：剛拍了一組新的，好害羞 👀", "限時：只給今晚有回我的人，特價喔 ⏰"] } },
            { pose: "point", tts: "[energetic] 排程是你的好朋友！基本節奏：每天至少一篇貼文、每週兩次私訊 PPV、每個月一次驚喜。",
              board: { type: "rhythm", heading: "核心節奏", items: [
                { n: "1", unit: "篇／天", label: "貼文" }, { n: "2", unit: "次／週", label: "DM PPV" }, { n: "1", unit: "次／月", label: "驚喜" } ] } },
            { pose: "think", tts: "[thoughtful] 然後每週看一次數據：續訂率、PPV 解鎖率、ARPU 跟 LTV。有小工具像 OF Buddy 可以幫你追蹤，慢慢調整你的定價跟話術。" }
          ]
        },
        {
          id: "2.3",
          title: "金流設定",
          bg: "office",
          lines: [
            { pose: "talk", tts: "[upbeat] 接下來是大家最關心的：錢，要怎麼收進來！",
              board: { type: "title", kicker: "MODULE 2 · 2.3", title: "金流設定", sub: "OnlyFans 收款與常見問題" } },
            { pose: "point", tts: "[clear] 我們跟著一百塊美金走一趟：粉絲付一百，平台抽二十，你的帳戶進八十。等候期過了，再提領到 Paxum 或你的銀行。",
              board: { type: "flow", heading: "跟著 $100 走一趟", items: [
                { icon: "🧑‍💻", label: "粉絲付 $100" }, { icon: "🏦", label: "OnlyFans", sub: "抽 $20・等待期" }, { icon: "👛", label: "你的餘額 $80", sub: "達門檻即可提領" }, { icon: "🏠", label: "銀行／Paxum", sub: "扣提領手續費" } ] } },
            { pose: "talk", tts: "[explaining] 提領有最低門檻，大約十到二十美金，依後台顯示為準。收入通常要等七天才能提，新帳號可能更久。",
              board: { type: "stats", heading: "💵 提領小常識", items: [
                { value: "≈ 7 天", label: "一般等待期" },
                { value: "最長 21 天", label: "新帳號／部分地區" },
                { value: "$10–20", label: "最低提領門檻" },
                { value: "80%", label: "你的分潤" } ],
                source: "資料來源：OnlyFans 創作者後台與 2026 年創作者指南整理，實際以後台為準" } },
            { pose: "warn", tts: "[exasperated, then emphatic] 超級重要！申請美金帳戶的時候，名字、地址一定要仔細看好。不然，你會需要一直、一直跑銀行。",
              board: { type: "bullets", heading: "❓ 常見問題", items: [
                { icon: "🪪", label: "資料不一致", text: "姓名地址生日要和護照吻合" },
                { icon: "🚀", label: "到帳時程", text: "ACH 快，國際匯款慢" },
                { icon: "🧾", label: "手續費", text: "每筆電匯都有費用 → 累積再提" },
                { icon: "⏳", label: "等候期", text: "多為 7 天後可提領" } ], reveal: 1 } },
            { pose: "talk", tts: "[explaining] 到帳速度也不一樣，ACH 通常比較快，國際匯款比較慢。而且每筆電匯都有手續費，所以別每天提，累積一筆再提比較划算。", reveal: 4 },
            { pose: "think", tts: "[sharing an idea] 等你賺到一定的金額，可以考慮開一個美金股票帳戶，讓錢繼續幫你工作。報稅的部分，每個人狀況不同，建議找熟悉跨境收入的會計師聊聊。" },
            { pose: "cheer", tts: "[encouraging] 下一節，我們就來把 Paxum 開起來！" }
          ]
        },
        {
          id: "2.4",
          title: "Paxum 帳戶",
          bg: "office",
          lines: [
            { pose: "talk", tts: "[friendly] Paxum 是大人平台最常用的電子錢包，你可以把它想成「專門收創作收入的網路銀行」。要先過身份驗證跟地址證明，才能綁定。",
              board: { type: "title", kicker: "MODULE 2 · 2.4", title: "Paxum 帳戶申請與使用", sub: "大人平台通用的收款錢包" } },
            { only: "intl", pose: "point", tts: "[instructive] 申請 Paxum 要準備兩樣東西：護照，還有近三個月的地址證明，例如水電帳單或銀行對帳單。",
              board: { type: "docs", heading: "📂 申請材料", items: [
                { icon: "🛂", label: "護照", text: "效期 6 個月以上・彩色・四角入鏡・無反光" },
                { icon: "🏠", label: "地址證明", text: "近 3 個月水電帳單或銀行對帳單，姓名地址清楚" } ] } },
            { only: "tw", pose: "point", tts: "[instructive] 在台灣要準備三樣東西：護照、英文戶籍謄本，還有英文地址證明。",
              board: { type: "docs", heading: "📂 申請材料", items: [
                { icon: "🛂", label: "護照", text: "效期 6 個月以上・彩色・四角入鏡・無反光" },
                { icon: "📜", label: "英文戶籍謄本", text: "姓名與護照一致・任一戶政事務所申請" },
                { icon: "🏠", label: "英文地址證明", text: "近 3 個月英文帳單或對帳單" } ] } },
            { only: "tw", pose: "warn", tts: "[urgent, emphatic] 英文戶籍謄本要去戶政事務所申請，一份一百塊，要等好幾個工作天，保守抓一個禮拜！所以，今天就去辦！",
              board: { type: "stats", heading: "📜 英文戶籍謄本", items: [
                { value: "NT$100", label: "第 1 份規費" },
                { value: "NT$15", label: "第 2 份起每份" },
                { value: "≈ 5–6 工作天", label: "核發時間（保守抓 7 天）" },
                { value: "可網路預約", label: "各縣市戶政網站" } ],
                source: "資料來源：戶政規費收費標準、各縣市戶政事務所公告" } },
            { only: "tw", pose: "talk", tts: "[helpful] 英文地址可以先用中華郵政的英文地址查詢，確保每份文件的格式都一致。檔案用 JPG、PNG 或 PDF，彩色、不要裁切。" },
            { only: "intl", pose: "talk", tts: "[helpful] 地址證明上的姓名跟地址，要跟你填的資料一模一樣。檔案用 JPG、PNG 或 PDF，彩色、不要裁切。" },
            { pose: "point", tts: "[step by step, clear] 流程是：在 Paxum 官網註冊、上傳文件完成 KYC，核准後建立收款帳戶，再回到 OnlyFans 的 Payout 設定綁定 Paxum，最後小額測試。",
              board: { type: "steps", heading: "申請與綁定", items: [
                { label: "Paxum 官網註冊", text: "上傳文件完成 KYC" },
                { label: "建立收款帳戶", text: "姓名地址與護照一致" },
                { label: "回 OnlyFans 綁定", text: "Settings → Payout → Paxum" },
                { label: "小額測試入金", text: "確認路徑正常" } ], reveal: 4 } },
            { pose: "warn", tts: "[careful, practical] 費用也要知道：從 Paxum 電匯美金到你自己的銀行，官網公告每筆大約五十美金。所以一樣，累積一筆再提！",
              board: { type: "calc", heading: "🧾 為什麼要「累積再提」？", rows: [
                { l: "每週提 $200", f: "手續費 $50 ÷ $200", r: "吃掉 25%" },
                { l: "每月提 $2,000", f: "手續費 $50 ÷ $2,000", r: "只吃 2.5%" } ], total: "提得越少次，越省錢",
                source: "資料來源：Paxum 官網個人帳戶費率（USD 電匯至本人帳戶），費率可能調整" } },
            { pose: "cheer", tts: "[satisfied, happy] 完成之後，Paxum 就是你的主要收款管道，現金流穩穩的！" }
          ]
        },
        {
          id: "2.5",
          only: "tw",
          title: "MAX 帳戶",
          bg: "office",
          lines: [
            { pose: "talk", tts: "[friendly] 再來是 MAX。它是台灣的加密貨幣交易所，可以收虛擬貨幣、再換成新台幣，很適合當 Fansly 跟其他平台的收款備援。",
              board: { type: "title", kicker: "MODULE 2 · 2.5", title: "MAX 帳戶申請與使用", sub: "台灣收虛擬貨幣的平台" } },
            { pose: "point", tts: "[clear] 材料跟 Paxum 很像：護照，加上英文地址證明。如果沒有新的帳單，申請 Paxum 用的那張，可以再用一次！",
              board: { type: "compare", heading: "誰走哪條路？", rows: [
                { k: "OnlyFans", v: "走 Paxum／銀行（不支援加密貨幣出金）" },
                { k: "Fansly 等", v: "可走 MAX（加密貨幣）" } ], reveal: 2 } },
            { pose: "point", tts: "[instructive] 步驟是：註冊完成 KYC、拿到錢包地址、開啟 2FA、備份好助記詞，然後在平台的 Payouts 填入收款資訊，一樣先小額測試。",
              board: { type: "steps", heading: "綁定與收款", items: [
                { label: "註冊＋KYC", text: "台幣出金需完成 Lv2 銀行認證" },
                { label: "取得錢包地址", text: "開 2FA、備份助記詞" },
                { label: "平台填入 Payouts", text: "選 Crypto，確認「鏈」一致" },
                { label: "小額測試", text: "確認通道穩定" },
                { label: "換匯台幣", text: "保留交易紀錄" } ], reveal: 5 } },
            { pose: "warn", tts: "[very serious, protective] 這裡要特別小心：轉帳時選的「鏈」一定要一致，例如兩邊都是同一條 USDT 網路。選錯鏈，錢可能就不見了。所以一定要先小額測試！",
              board: { type: "big", label: "最常見的錯誤", value: "選錯鏈 ＝ 錢不見", note: "USDT 有很多條網路，收款與出款兩邊必須選同一條 → 先轉小額確認" } },
            { pose: "talk", tts: "[explaining] 費用方面：MAX 台幣出金每筆大約三十元，另外要留意鏈上手續費跟換匯價差。大額的話分批處理，交易憑證全部下載留存。",
              board: { type: "stats", heading: "💱 MAX 費用小抄", items: [
                { value: "NT$30", label: "台幣出金／筆" },
                { value: "0 元", label: "入金手續費" },
                { value: "依鏈而定", label: "鏈上提幣費" },
                { value: "價差", label: "換匯時留意" } ],
                source: "資料來源：MAX 交易所費率整理（2026），以官方公告為準" } },
            { pose: "cheer", tts: "[playful, excited] 下一節，我再教你全球主流的交易所，還有可以直接刷卡的加密卡！" }
          ]
        },
        {
          id: "2.6",
          title: "加密貨幣交易所與加密卡",
          bg: "office",
          lines: [
            { pose: "talk", tts: "[cheerful] 這一節，我們來認識加密貨幣：全球主流的交易所，還有可以直接刷卡的加密卡。",
              board: { type: "title", kicker: "MODULE 2 · 2.6", title: "加密貨幣交易所與加密卡", sub: "收款備援・穩定幣・加密卡" } },
            { pose: "talk", tts: "[explaining] 為什麼要學？Fansly 等平台可以用加密貨幣出金，跨境又快，也等於在銀行之外，多一條收款的路。不過幣價會波動，各國的法規跟稅務也不一樣。",
              board: { type: "bullets", heading: "⚖️ 加密貨幣收款：優點與風險", items: [
                { icon: "⚡", label: "跨境快速", text: "不用等國際電匯" },
                { icon: "🛣️", label: "第二條收款路", text: "不被單一銀行卡住" },
                { icon: "📉", label: "價格波動", text: "用穩定幣降低風險" },
                { icon: "⚖️", label: "法規與稅務", text: "每個國家規定不同" } ], reveal: 4 } },
            { pose: "point", tts: "[teaching] 先搞懂穩定幣：USDT 跟 USDC 都跟美元一比一掛鉤。收款用穩定幣，就不用擔心幣價上上下下。",
              board: { type: "big", label: "穩定幣 USDT／USDC", value: "1 顆 ≈ 1 美元", note: "收款與轉帳優先用穩定幣 → 避開價格波動" } },
            { pose: "point", tts: "[explaining] 全球主流交易所，我整理了五個：Binance 規模最大、Coinbase 是美國上市公司、Kraken 是老牌、OKX 跟 Bybit 在亞洲很常用。選之前，先確認你的國家能不能用。",
              board: { type: "compare", heading: "🏦 主流加密貨幣交易所", rows: [
                { k: "Binance", v: "全球交易量最大、手續費低；部分國家受限" },
                { k: "Coinbase", v: "美國上市、合規度高；歐美友善" },
                { k: "Kraken", v: "老牌交易所、安全紀錄佳" },
                { k: "OKX", v: "亞洲常用、功能完整" },
                { k: "Bybit", v: "亞洲常用、有自家加密卡" },
                { k: "MAX", v: "台灣在地、可直接換新台幣（上一節）", only: "tw" } ], reveal: 6,
                source: "資料來源：各交易所官網；可用地區依當地法規而定" } },
            { only: "tw", pose: "talk", tts: "[friendly] 如果你在台灣，上一節教的 MAX，可以直接把穩定幣換成新台幣。想直接刷卡消費，就搭配接下來的加密卡。" },
            { pose: "cheer", tts: "[excited] 再來是加密卡！把加密貨幣存進去，就可以像一般的 Visa 或 Mastercard 一樣刷卡，還能綁手機支付。",
              board: { type: "compare", heading: "💳 主流加密卡比一比", rows: [
                { k: "Bybit Card", v: "Mastercard；轉換費約 0.9%；支援多種幣" },
                { k: "RedotPay", v: "Visa；100+ 國家；不開放美國居民" },
                { k: "Crypto.com", v: "Visa；分級回饋，等級越高回饋越多" },
                { k: "Coinbase Card", v: "美國免費申辦；清算費約 2.49%" },
                { k: "Binance Card", v: "部分地區開放；手續費約 0.9%" } ], reveal: 5,
                source: "資料來源：Coin Bureau、Koinly 2026 加密卡整理；費率與開放地區會變動" } },
            { pose: "point", tts: "[instructive] 使用步驟：在交易所完成 KYC，存入 USDT 或 USDC，申請並開卡，綁定手機支付，就可以刷了。每一筆消費都會自動換匯，記得保留紀錄。",
              board: { type: "steps", heading: "🪪 加密卡使用步驟", items: [
                { label: "完成 KYC", text: "身分驗證" },
                { label: "存入穩定幣", text: "USDT／USDC" },
                { label: "申請開卡", text: "實體或虛擬卡" },
                { label: "綁手機支付", text: "Apple Pay／Google Pay" },
                { label: "刷卡消費", text: "自動換匯，保留紀錄" } ], reveal: 5 } },
            { pose: "warn", tts: "[very serious, protective] 安全五件事：開雙重驗證、設定提幣白名單、選對鏈、先小額測試，還有，不要把全部資產都放在交易所。",
              board: { type: "bullets", heading: "🛡️ 加密貨幣安全五件事", items: [
                { icon: "🔐", label: "開 2FA", text: "登入與提幣都要驗證" },
                { icon: "📋", label: "提幣白名單", text: "只能提到你設定的地址" },
                { icon: "⛓️", label: "選對鏈", text: "USDT 有很多條網路，兩邊要一致" },
                { icon: "🧪", label: "先小額測試", text: "確認到帳再轉大額" },
                { icon: "🏦", label: "分散保管", text: "不要全部放在交易所" } ], reveal: 5 } },
            { pose: "talk", tts: "[calm] 最後提醒：加密貨幣的稅務跟法規，每個國家都不一樣。所有交易紀錄都要下載保存，報稅的時候交給會計師。" },
            { pose: "cheer", tts: "[encouraging] 學會這些，你就多了一條不會被單一銀行卡住的收款路！" }
          ]
        },
        {
          id: "2.7",
          title: "內容資產管理",
          bg: "office",
          lines: [
            { pose: "talk", tts: "[energetic] Module 2 的最後一節！我們要把所有素材、成品、授權跟數據，整理成一個系統。",
              board: { type: "title", kicker: "MODULE 2 · 2.7", title: "內容資產管理", sub: "Google Drive 排版・Sheet 規劃" } },
            { pose: "point", tts: "[organized, cheerful] Google Drive 開一個根資料夾，叫 Content Library，底下分六個資料夾，照這樣排就對了。",
              board: { type: "folders", heading: "📁 Content Library", items: ["01 日常拍攝", "02 社群媒體", "03 攝影師外拍", "04 onlyfans 剪輯輸出", "05 暫存雜物", "06 粉絲數 追蹤範例"] } },
            { pose: "talk", tts: "[clear] 檔名規範是：日期、平台、主題、版本。這樣一年後，你還是能秒找到檔案。",
              board: { type: "filename", heading: "檔名規範", parts: [
                { t: "20251124", k: "日期" }, { t: "OF", k: "平台" }, { t: "PPV_schoolgirl", k: "主題" }, { t: "v2", k: "版本" } ] } },
            { pose: "warn", tts: "[serious, caring] 備份請記住「三二一」：同一份檔案存三份、放在兩種不同的地方、其中一份在異地或雲端。你的內容，就是你的資產。",
              board: { type: "stats", heading: "💾 3-2-1 備份原則", items: [
                { value: "3", label: "份檔案" },
                { value: "2", label: "種不同儲存媒介" },
                { value: "1", label: "份放異地／雲端" },
                { value: "0", label: "次「早知道就備份」" } ],
                source: "3-2-1 為業界通用的資料備份原則" } },
            { pose: "point", tts: "[explaining] Google Sheet 我建議開六個工作表：內容流程、每週排程、素材授權、收入紀錄、點子庫，還有技術規格。",
              board: { type: "sheets", heading: "📊 Google Sheets", items: [
                { label: "Content Pipeline", text: "企劃→拍攝→後製→上架→分發→回收" },
                { label: "Weekly Schedule", text: "各平台發布日程與時段" },
                { label: "Asset Tracker", text: "出鏡同意書、授權到期日" },
                { label: "Revenue Log", text: "訂閱／PPV／小費、淨收、匯率" },
                { label: "Idea Backlog", text: "主題標籤、優先級、ROI" },
                { label: "Metadata", text: "比例、解析度、碼率、時長" } ] } },
            { pose: "talk", tts: "[warm, motivating] 最後是 SOP：建案命名、素材匯入、後製輸出、排程上架、合規存證，一週後回收數據。每一支內容都跑完這六步。",
              board: { type: "cycle", heading: "🔁 SOP 六步", items: ["建案命名", "素材匯入", "後製輸出", "上架分發", "合規存證", "成效回收"] } }
          ]
        }
      ]
    }
  ]
};
