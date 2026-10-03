// 課程腳本：Module 3–8（中文）— 接在 script.js 之後載入
window.COURSE.modules.push(
  // ───────────────────────── MODULE 3 ─────────────────────────
  {
    id: "m3",
    no: 3,
    title: "拍攝與內容製作",
    outcome: "能產出可轉換的影像內容，並安全合規拍攝",
    bg: "studio",
    intro: {
      lines: [
        { pose: "cheer", tts: "[excited] 歡迎來到第三章：拍攝與內容製作！這是大家最期待的一章～",
          board: { type: "chapter", no: 3, title: "拍攝與內容製作", items: ["3.1 什麼是好照片", "3.2 什麼是好影片", "3.3 角度・表情・情緒", "3.4 拍攝安全須知"], goal: "能產出可轉換的影像內容，並安全合規拍攝" } },
        { pose: "talk", tts: "[confident] 在這個行業，你本人就是商品。這一章我會教你用光線、構圖、節奏跟情緒，拍出讓人停下來、而且願意付錢的內容。" },
        { pose: "point", tts: "[playful] 不用買很貴的器材，一支手機、一扇窗戶，就可以開始了！" }
      ]
    },
    outro: {
      lines: [
        { pose: "talk", tts: "[warm] 第三章收尾囉！把這五個重點記起來，你的內容就會比別人更好賣。",
          board: { type: "bullets", heading: "📝 Module 3 重點回顧", items: [
            { icon: "🔍", label: "主角要夠大", text: "縮圖裡佔 60–70%" },
            { icon: "⏱️", label: "前三秒定生死", text: "先給重點，再講故事" },
            { icon: "🎥", label: "招牌機位菜單", text: "高機位・低機位・貼近" },
            { icon: "🧩", label: "拆段販售", text: "付費內容拆 5 小段" },
            { icon: "📝", label: "合約與同意書", text: "每個出鏡者都要驗證" } ], reveal: 5 } },
        { pose: "cheer", tts: "[excited, proud] 恭喜完成 Module 3！你現在已經知道怎麼拍出「會賺錢」的內容了。",
          board: { type: "done", title: "Module 3 完成！", text: "學習成果：能產出可轉換的影像內容，並安全合規拍攝" } },
        { pose: "point", tts: "[energetic] 內容拍好了，要放去哪裡、怎麼讓更多人看到？下一章，我們來畫你的導流地圖！" }
      ]
    },
    lessons: [
      {
        id: "3.1",
        title: "什麼是好照片",
        lines: [
          { pose: "talk", tts: "[cheerful] 第一節：什麼是好照片？答案只有三個關鍵字：光線、構圖、敘事。",
            board: { type: "title", kicker: "MODULE 3 · 3.1", title: "什麼是好照片？", sub: "光線・構圖・敘事" } },
          { pose: "point", tts: "[confident] 先記最簡單的原則：主角要夠大！你就是畫面的主體，在縮圖裡最好佔到六到七成。",
            board: { type: "big", label: "第一原則", value: "主體佔 60–70%", note: "縮圖越小越要貼近 → 讓人在滑動中一眼看到重點" } },
          { pose: "talk", tts: "[explaining] 看看實際差別：左邊主角佔了畫面三分之二，縮圖一眼就看到；右邊人太小，滑過去根本不會停。",
            board: { type: "photos", heading: "📸 主體大小：實例對比", items: [ { src: "fill_good", tag: "good", cap: "佔畫面約 2/3" }, { src: "fill_bad", tag: "bad", cap: "手腳太靠近鏡頭・變形" } ] } },
          { pose: "talk", tts: "[explaining] 光線：主體要比背景亮一點，大約亮半格到一格半。臉上不要有硬陰影，眼睛裡要有一點亮亮的眼神光，人就會活起來。",
            board: { type: "bullets", heading: "💡 光線", items: [
              { icon: "☀️", label: "主光清晰", text: "室內靠窗自然光＋柔光布" },
              { icon: "🌗", label: "主體比背景亮", text: "約 +0.5～1.5 格曝光，做出分離" },
              { icon: "✨", label: "眼神光", text: "眼睛裡要有 catchlight" },
              { icon: "🙅", label: "避免硬陰影", text: "臉部陰影要柔、有層次" },
              { icon: "🌃", label: "夜景", text: "用側光或背光勾邊，防止糊掉" } ], reveal: 5 } },
          { pose: "point", tts: "[explaining] 實際例子：左邊是窗邊側光，臉上有層次，眼睛裡有光；右邊只有天花板的頂光，眼窩變黑，背景也很亂。",
            board: { type: "photos", heading: "📸 光線：實例對比", items: [ { src: "light_good", tag: "good", cap: "窗邊側光・有眼神光" }, { src: "light_bad", tag: "bad", cap: "頂光・陰影重・背景亂" } ] } },
          { pose: "talk", tts: "[teaching] 構圖用三分法：把畫面切成井字，眼睛放在交叉點上。還有，畫面邊緣不要剛好切到脖子或手腳，看起來會很怪喔。",
            board: { type: "bullets", heading: "📐 構圖", items: [
              { icon: "#️⃣", label: "三分法", text: "眼睛或主體放在井字交點" },
              { icon: "🧅", label: "三層次", text: "前景・主體・背景，留呼吸空間" },
              { icon: "👀", label: "視線留白", text: "看向哪邊，那邊就多留空間" },
              { icon: "✂️", label: "不切關節", text: "不切脖子、不斷手腳" },
              { icon: "📏", label: "水平垂直", text: "地平線要正，直線不歪" } ], reveal: 5 } },
          { pose: "point", tts: "[explaining] 構圖對比：左邊眼睛在三分線上，前景、主體、背景三層分明；右邊地平線歪了，還切到脖子跟手腕，頭後面長出一盞燈。",
            board: { type: "photos", heading: "📸 構圖：實例對比", items: [ { src: "frame_good", tag: "good", cap: "三分法＋三層次" }, { src: "frame_bad", tag: "bad", cap: "歪斜・切關節・背景干擾" } ] } },
          { pose: "talk", tts: "[storytelling] 敘事就是：一張照片，一個故事。角色、情緒、道具要互相呼應。咖啡杯、鏡子、一件寬鬆的襯衫，都在幫你說故事。",
            board: { type: "analogy", heading: "📖 敘事：一張照片一個故事", items: [
              { icon: "🎭", label: "角色＋情緒", text: "你是誰？現在是什麼心情？手勢與眼神就是線索" },
              { icon: "☕", label: "場景＋道具", text: "衣料、杯子、鏡子提供前因後果，服裝色調風格一致" } ] } },
          { pose: "talk", tts: "[storytelling] 像這張：早晨的窗邊、寬鬆的白襯衫、雙手捧著咖啡，床上還有攤開的書。不用說話，大家就知道現在的故事。",
            board: { type: "photos", heading: "📸 敘事：一張照片一個故事", items: [ { src: "story", tag: "", cap: "早晨的慵懶時光" } ] } },
          { pose: "point", tts: "[playful, strategic] 小技巧：同一個情節，拍三段情緒：平靜、互動、高潮。這樣一組照片，就能拆成社群預告、公開貼文，還有付費內容。",
            board: { type: "photos", heading: "🎞️ 一個情節拍三段情緒", items: [ { src: "mood_calm", tag: "", cap: "平靜 → 社群預告" }, { src: "mood_play", tag: "", cap: "互動 → 公開貼文" }, { src: "mood_peak", tag: "", cap: "高潮 → 付費 PPV" } ] } },
          { pose: "warn", tts: "[serious, warning] 各平台的尺度差很多！TikTok 最嚴格，乳溝跟下緣都不能露；IG 跟臉書是同一家，不能露點，貼文也別放連結；X 要記得打開敏感內容設定。",
            board: { type: "compare", heading: "⚠️ 社群平台尺度（安全版）", rows: [
              { k: "TikTok", v: "最嚴格：不露乳溝與下緣，只拍腰腿手臂；親吻只能一下" },
              { k: "IG／FB", v: "Meta 同規範：不露點、不做過度性暗示、貼文不放連結" },
              { k: "Threads", v: "連動 IG；有話題的發言容易被轉發" },
              { k: "X", v: "開啟「敏感內容」設定；一般帳號以乳溝照為上限" } ], reveal: 4,
              source: "資料來源：TikTok 社群自律守則、Meta 社群守則、X 成人內容政策＋講師實務經驗" } },
          { pose: "talk", tts: "[helpful] 規格也記一下：直式九比十六、一零八零乘一九二零。這樣 Reels、限時動態跟 PPV 封面都能共用，還要記得留文字的安全區。",
            board: { type: "stats", heading: "📱 通用拍攝規格", items: [
              { value: "9:16", label: "直式比例" },
              { value: "1080×1920", label: "解析度" },
              { value: "60–70%", label: "主體佔比（縮圖）" },
              { value: "上下留白", label: "文字安全區" } ] } },
          { pose: "cheer", tts: "[encouraging] 照著光線、構圖、敘事這三個關鍵字拍，你的照片就會既好看，又能讓人停下來付費！" }
        ]
      },
      {
        id: "3.2",
        title: "什麼是好影片",
        lines: [
          { pose: "talk", tts: "[energetic] 第二節：什麼是好影片？節奏、聲音、氛圍，三個要對齊。",
            board: { type: "title", kicker: "MODULE 3 · 3.2", title: "什麼是好影片？", sub: "節奏・音訊・氛圍" } },
          { pose: "think", tts: "[curious] 先想一個問題：網路上免費影片那麼多，粉絲為什麼要付錢看你的？" },
          { pose: "talk", tts: "[sincere, intimate] 分享一個小祕密：我賣最好的一支影片，是我在摺衣服時，被從後面偷襲的日常。粉絲要的，常常是真實又甜蜜的瞬間。",
            board: { type: "big", label: "講師心法", value: "觀眾買單＝好影片", note: "刺激又真實的偷窺感、日常裡的小幸福，是免費影片給不了的" } },
          { pose: "point", tts: "[explaining] 付費長片我通常這樣排：前一兩分鐘交代故事，三到六分鐘調情互動，七到十分鐘推到高潮，最後收尾。長度五到二十五分鐘都可以。",
            board: { type: "steps", heading: "🎬 付費長片節奏（13 分鐘範例）", items: [
              { label: "1–2 分：交代故事", text: "情境、角色、為什麼開始" },
              { label: "3–6 分：調情互動", text: "和觀眾或畫面裡的人互動" },
              { label: "7–10 分：劇情高潮", text: "高潮前先降速，再加速" },
              { label: "11–13 分：收尾", text: "交代後續，留下期待" } ], reveal: 4 } },
          { pose: "warn", tts: "[confident, emphatic] 不管長片短片，開頭三秒最重要！TikTok 分析過：點擊率最高的影片，超過六成在前三秒就講出重點。",
            board: { type: "big", label: "開頭三秒定生死", value: "63%", note: "點擊率最高的 TikTok 影片中，有 63% 在前 3 秒就呈現重點",
              source: "資料來源：TikTok for Business 創意洞察" } },
          { pose: "talk", tts: "[teaching] 聲音比畫質更容易讓人關掉影片。人聲優先，先降噪，再做一點壓縮，讓音量不要忽大忽小。",
            board: { type: "bullets", heading: "🎧 音訊", items: [
              { icon: "🗣️", label: "人聲優先", text: "2–4 kHz 語音頻段要乾淨" },
              { icon: "🔇", label: "先降噪", text: "再壓縮約 3:1，音量穩定" },
              { icon: "🏙️", label: "聽得到場景", text: "室內輕混響、夜景加城市環境音" },
              { icon: "🎼", label: "商用授權音樂", text: "避免版權下架" } ], reveal: 4 } },
          { pose: "talk", tts: "[dreamy, soft] 氛圍就是讓整支影片像同一個世界：一個主色、一個輔色，光線方向保持一致，字幕跟封面也用同一套風格。",
            board: { type: "bullets", heading: "🌙 氛圍", items: [
              { icon: "🎨", label: "色調統一", text: "一主色＋一輔色，膚色自然不過飽和" },
              { icon: "💡", label: "光線一致", text: "換機位也維持同一陰影方向" },
              { icon: "🔤", label: "品牌語言", text: "字幕、轉場、字體、封面一致" } ], reveal: 3 } },
          { pose: "point", tts: "[playful] 社群短影片就不一樣了：七秒內講完一個小故事，要有反轉！最好同時有兩個點，像是性感加好笑，或性感加感性。",
            board: { type: "stats", heading: "⚡ 社群短影片", items: [
              { value: "7 秒", label: "講完一個故事＋反轉" },
              { value: "21–34 秒", label: "TikTok 完播率最佳長度" },
              { value: "≤ 3 分鐘", label: "IG Reels 上限（最佳 45–60 秒）" },
              { value: "2 個點", label: "性感＋好笑／感性" } ],
              source: "資料來源：Instagram 2025 年 Reels 長度更新、TikTok 長度與完播研究整理" } },
          { pose: "talk", tts: "[helpful] 工具我幫你整理好了：剪輯用剪映、Edits 或 InShot；美顏用美圖；排程用 Buffer，可以一次發到好幾個平台。",
            board: { type: "compare", heading: "🧰 工具箱", rows: [
              { k: "剪輯", v: "剪映 CapCut・Edits・InShot（字幕、特效、音效）" },
              { k: "美顏", v: "美圖秀秀・BeautyCam" },
              { k: "聲音", v: "ElevenLabs：做一組自己的 AI 聲音（英文）" },
              { k: "翻譯", v: "Rask：自動翻多國語言（限非成人內容）" },
              { k: "排程", v: "Buffer：多平台同時排程發文" } ], reveal: 5 } },
          { pose: "cheer", tts: "[encouraging] 最後，學習都是從臨摹開始。去找分享數高的影片當模板。注意喔，是看分享數，不是按讚數！" }
        ]
      },
      {
        id: "3.3",
        title: "角度・表情・情緒引導",
        lines: [
          { pose: "talk", tts: "[flirty, playful] 第三節：角度、表情、情緒引導。這是讓人「想付費」的主體魅力。",
            board: { type: "title", kicker: "MODULE 3 · 3.3", title: "角度・表情・情緒引導", sub: "打造可付費的主體魅力" } },
          { pose: "point", tts: "[teaching] 先建立你的招牌機位菜單：高機位加三分之二側臉，顯得可愛；低機位拍身體線條，顯得腿長；貼近鏡頭、眼神停三秒，就是親密感。",
            board: { type: "bullets", heading: "🎥 招牌機位菜單", items: [
              { icon: "⬆️", label: "高機位＋2/3 臉", text: "搭柔光 → 臉小、可愛" },
              { icon: "⬇️", label: "低機位", text: "強調身體線條 → 腿長、有氣勢" },
              { icon: "🔎", label: "貼近鏡頭", text: "眼神停留 3 秒 → 親密感" },
              { icon: "↔️", label: "側臉 vs 留白", text: "神秘感與故事感" } ], reveal: 4 } },
          { pose: "point", tts: "[teaching] 四種機位的實際樣子：高機位顯得可愛，低機位顯腿長，貼近鏡頭有親密感，側臉加上留白，就有故事感。",
            board: { type: "photos", heading: "📸 機位菜單：實例", items: [ { src: "angle_high", tag: "", cap: "高機位＋2/3 臉" }, { src: "angle_low", tag: "", cap: "坐地全身・俯拍" }, { src: "angle_close", tag: "", cap: "貼近・眼神交流" }, { src: "angle_side", tag: "", cap: "平視＋眼鏡小道具" } ] } },
          { pose: "talk", tts: "[soft, intimate] 表情可以練一個序列：微笑的眼神、嘴唇微張、側看鏡頭、輕輕呼吸。對著鏡子練，練到可以自然切換。",
            board: { type: "steps", heading: "😊 表情序列（對鏡練習）", items: [
              { label: "微笑眼神", text: "先讓眼睛笑" },
              { label: "半開唇", text: "放鬆嘴角" },
              { label: "側看鏡頭", text: "若即若離" },
              { label: "輕呼吸", text: "胸口與肩膀微動" } ], reveal: 4 } },
          { pose: "talk", tts: "[explaining] 情緒要有走向：前十秒可愛，二十到四十秒開始撩人，結尾一定要留懸念，例如看向鏡頭外，或是直接關燈。",
            board: { type: "flow", heading: "💞 情緒腳本", items: [
              { icon: "🍓", label: "0–10 秒", sub: "可愛" }, { icon: "💋", label: "20–40 秒", sub: "撩人" }, { icon: "🔥", label: "高潮", sub: "性感" }, { icon: "🌙", label: "結尾", sub: "留懸念・關燈" } ] } },
          { pose: "point", tts: "[strategic] 付費內容，我建議拆成五小段、一段一段賣。從劇情開始，慢慢升溫，最後才到高潮。這樣每看完一段，都會想買下一段。",
            board: { type: "steps", heading: "🧩 付費內容拆 5 段販售", items: [
              { label: "第 1 段：劇情開場", text: "建立情境與期待" },
              { label: "第 2 段：互動調情", text: "拉近距離" },
              { label: "第 3 段：逐步升溫", text: "慢慢加溫" },
              { label: "第 4 段：推進", text: "情緒堆疊" },
              { label: "第 5 段：高潮", text: "最高價、最值得" } ], reveal: 5 } },
          { pose: "talk", tts: "[warm] 記得要有主題！日常情境最容易引起共鳴：摺衣服、煮晚餐、開視訊會議，大家腦中都有畫面。",
            board: { type: "bullets", heading: "🏠 日常主題靈感", items: [
              { icon: "👕", label: "摺衣服", text: "居家、放鬆、偷襲感" },
              { icon: "🍳", label: "準備晚餐", text: "溫馨、女友感" },
              { icon: "💻", label: "開視訊會議", text: "反差、刺激" },
              { icon: "🏋️", label: "運動後", text: "健康、真實" } ], reveal: 4 } },
          { pose: "cheer", tts: "[excited] 角度、表情、情緒三個都練起來，你就有了一套別人學不走的個人魅力！" }
        ]
      },
      {
        id: "3.4",
        title: "拍攝安全須知",
        lines: [
          { pose: "warn", tts: "[serious, caring] 第四節很重要：拍攝安全。不管跟誰合作，你的安全永遠排第一。",
            board: { type: "title", kicker: "MODULE 3 · 3.4", title: "拍攝安全須知", sub: "與攝影師合作・地點選擇・法律風險" } },
          { pose: "warn", tts: "[firm] 跟攝影師合作，一定要簽合約和肖像授權，講清楚酬勞、交件時間、修圖範圍。還要約好安全詞跟安全手勢，任何時候不舒服，都可以馬上停。",
            board: { type: "bullets", heading: "🤝 合作安全", items: [
              { icon: "📝", label: "合約＋肖像授權", text: "酬勞、交期、修圖範圍" },
              { icon: "🛑", label: "安全詞＋安全手勢", text: "不舒服隨時停，情緒很重要" },
              { icon: "📏", label: "先談好尺度", text: "界線白紙黑字寫清楚" },
              { icon: "📞", label: "到場聯絡人", text: "讓信任的人知道你在哪" } ], reveal: 4 } },
          { pose: "warn", tts: "[serious] OnlyFans 規定：任何在內容裡看得到、聽得到的人，都要驗證身分並簽同意書，情侶也不例外。沒有文件，貼文可能被下架，甚至停權。",
            board: { type: "big", label: "OnlyFans 規定", value: "每個出鏡者都要驗證", note: "看得到或聽得到的人都算 → 證件＋自拍＋同意書（或標記其已驗證帳號）",
              source: "資料來源：OnlyFans 條款與創作者 Release Form 指南整理" } },
          { pose: "talk", tts: "[instructive] 地點要選合法、可控的私密空間。進場先看出入口，跟有沒有監視器。租 Airbnb 的話，商業拍攝跟成人內容，都要房東的書面同意。",
            board: { type: "bullets", heading: "📍 地點選擇", items: [
              { icon: "🔐", label: "合法可控的私密空間", text: "避開公共場所與路人入鏡" },
              { icon: "🚪", label: "檢查出入口", text: "監視設備、撤離動線" },
              { icon: "🔊", label: "鄰居與噪音", text: "注意光線與聲音的私密性" },
              { icon: "🏠", label: "Airbnb／旅宿", text: "商業＋成人拍攝需書面同意" } ], reveal: 4 } },
          { pose: "warn", tts: "[very serious] 出國拍攝要特別小心：多數穆斯林國家、新加坡、中國大陸等地，成人內容的製作跟散布都有嚴格刑責。場地許可，改變不了當地法律。",
            board: { type: "big", label: "旅拍前必查", value: "場地許可 ≠ 合法", note: "多數穆斯林法域、新加坡、中國大陸等地對成人內容有嚴格刑責" } },
          { pose: "talk", tts: "[calm, protective] 最後準備好風險應對：緊急聯絡表、撤離計畫。遇到越界，馬上停拍並且記錄；有糾紛，就依合約跟證據處理，不要私下了結。",
            board: { type: "steps", heading: "🚨 風險應對", items: [
              { label: "事前", text: "緊急聯絡表＋撤離計畫" },
              { label: "越界當下", text: "立即停拍並記錄" },
              { label: "事後", text: "原始檔加密、限制存取" },
              { label: "糾紛", text: "依合約與證據處理，不私了" } ], reveal: 4 } },
          { pose: "cheer", tts: "[warm, protective] 安全做好了，你才能安心地、長長久久地創作。這比任何一支爆款都重要！" }
        ]
      }
    ]
  },

  // ───────────────────────── MODULE 4 ─────────────────────────
  {
    id: "m4",
    no: 4,
    title: "多平台開通與導流",
    outcome: "建立外部導流矩陣，提升觸達與轉化",
    bg: "city",
    intro: {
      lines: [
        { pose: "cheer", tts: "[excited] 歡迎來到第四章：多平台開通與導流！",
          board: { type: "chapter", no: 4, title: "多平台開通與導流", items: ["成人向售片／訂閱平台", "成人向流量池", "全面向社群", "私域與自營", "OFTV 與 YouTube", "連結頁與跳轉", "帳號被封怎麼辦"], goal: "建立外部導流矩陣，提升觸達與轉化" } },
        { pose: "talk", tts: "[energetic] 還記得嗎？OnlyFans 不幫你找客人。這一章，我們要畫一張導流地圖，讓粉絲從四面八方，走進你的店。",
          board: { type: "funnel", heading: "🗺️ 導流地圖", stages: [
            { label: "全面向社群", sub: "TikTok・IG・X・Reddit" },
            { label: "成人流量池＋售片平台", sub: "PH・XH・ManyVids・Fansly" },
            { label: "私域＋訂閱", sub: "Telegram・官網・OnlyFans" } ] } }
      ]
    },
    outro: {
      lines: [
        { pose: "talk", tts: "[warm] 第四章整理一下：四種平台，各有各的任務。",
          board: { type: "compare", heading: "📝 Module 4 重點回顧", rows: [
            { k: "售片／訂閱", v: "ManyVids・Fansly 等：多一條收入，也能反導 OF" },
            { k: "流量池", v: "PH・XH：放精華預告，漏斗最上層" },
            { k: "社群", v: "TikTok・IG・X・Reddit：安全版內容，被看見" },
            { k: "私域", v: "Telegram・官網：帳號被刪也帶得走的粉絲" },
            { k: "OFTV／YT", v: "安全版長影音，生態內外一起導流" },
            { k: "被封心態", v: "被封是成本；連結要兩層、私域先備份" } ], reveal: 6 } },
        { pose: "cheer", tts: "[excited, proud] 恭喜完成 Module 4！你的導流地圖已經畫好了。",
          board: { type: "done", title: "Module 4 完成！", text: "學習成果：建立外部導流矩陣，提升觸達與轉化" } },
        { pose: "point", tts: "[energetic] 地圖有了，接下來要每週固定地走。下一章，我給你一份可以直接照抄的週計畫！" }
      ]
    },
    lessons: [
      {
        id: "4.1",
        title: "成人向售片／訂閱平台",
        lines: [
          { pose: "talk", tts: "[cheerful] 第一節：OnlyFans 以外，還有哪些成人向平台可以開？我們一個一個看。",
            board: { type: "title", kicker: "MODULE 4 · 4.1", title: "成人向平台", sub: "ManyVids・Fansly・Fantia・MyVids 等" } },
          { pose: "point", tts: "[explaining] 先看抽成跟特色。記住，抽成低不一定最好，有沒有站內流量，也很重要。",
            board: { type: "compare", heading: "💸 平台抽成比一比", rows: [
              { k: "ManyVids", v: "單片販售；影片你拿 60%、訂閱小費 80%；有排行榜導流" },
              { k: "Fansly", v: "類似 OF，抽 20%；分層訂閱；可加密貨幣出金" },
              { k: "Furuke", v: "台灣平台；月費＋單本解鎖；抽成約 10%；可分潤攝影師", only: "tw" },
              { k: "Fantia", v: "日本平台；會員等級制；抽成 10% 起；審核嚴" },
              { k: "MyVids", v: "日本平台；影片直售；抽 20–30%；有排行榜" } ], reveal: 5,
              source: "資料來源：ManyVids 官方分潤說明、Fansly／Fantia 條款、講師實務經驗" } },
          { pose: "talk", tts: "[explaining] ManyVids 主打單片販售。雖然影片你只拿六成，但它有排行榜，會幫你曝光，很適合拿來導流回 OnlyFans。" },
          { pose: "talk", tts: "[explaining] Fansly 跟 OnlyFans 很像，一樣抽兩成，而且可以用加密貨幣出金，第二章教過的加密貨幣交易所就派上用場了。" },
          { only: "tw", pose: "talk", tts: "[friendly] 台灣的 Furuke 跟日本的 Fantia，抽成都只有一成左右。Fantia 審核比較嚴，標籤跟分級一定要清楚。" },
          { only: "intl", pose: "talk", tts: "[friendly] 日本的 Fantia 抽成只有一成左右，但審核比較嚴，標籤跟分級一定要清楚。" },
          { pose: "warn", tts: "[very serious] 日本平台一定要知道：日本刑法第一百七十五條規定，性器官必須打上馬賽克。二零二六年五月，Fantia 還因為警方的指導，大幅加嚴實拍內容的馬賽克標準，連過去的作品都要重新修正。",
            board: { type: "bullets", heading: "🗾 日本平台（Fantia 等）必知規定", items: [
              { icon: "🔲", label: "馬賽克是必須", text: "性器官必須完整遮蔽；打得太薄仍可能違法" },
              { icon: "⚖️", label: "刑法 175 條", text: "散布猥褻物：最高 2 年徒刑或 250 萬日圓罰金" },
              { icon: "📅", label: "2026/5 標準加嚴", text: "實拍內容適用，過去作品也要重新修正" },
              { icon: "💳", label: "付款方式", text: "2024/5 起暫停 Visa／Mastercard；改用 JCB、AMEX、超商、PayPay 等" } ], reveal: 4,
              source: "資料來源：Fantia 官方公告、ITmedia NEWS（2026/6）、日本刑法第 175 條" } },
          { pose: "talk", tts: "[strategic] 所以同一支影片，要準備兩個版本：未修正版放 OnlyFans 跟 Fansly，打好馬賽克的修正版，才放日本平台。另外，日本粉絲很多是用超商或 PayPay 付款，定價跟促銷的時候也要考慮進去。" },
          { pose: "point", tts: "[strategic] 策略很簡單：長片放售片平台，短預告丟流量池，用一樣的標題跟縮圖串起來。價格分三層，再搭配限時折扣。",
            board: { type: "bullets", heading: "🧭 導流策略", items: [
              { icon: "🎬", label: "內容分發", text: "長片 → 售片平台；短預告 → 流量池" },
              { icon: "🪜", label: "三層價格", text: "基礎・進階・豪華＋限時折扣" },
              { icon: "🏷️", label: "來源優惠碼", text: "IG／X／Reddit 各一組" },
              { icon: "🔗", label: "追蹤工具", text: "講師使用 link.me 追蹤點擊" } ], reveal: 4 } },
          { pose: "cheer", tts: "[encouraging] 每週看一次哪個來源轉換最好，就把力氣加碼在那裡！" }
        ]
      },
      {
        id: "4.2",
        title: "成人向流量池",
        lines: [
          { pose: "talk", tts: "[energetic] 第二節：流量池。Pornhub 跟 Xhamster，是讓大量陌生人第一次認識你的地方。",
            board: { type: "title", kicker: "MODULE 4 · 4.2", title: "成人向流量池", sub: "Pornhub・Xhamster" } },
          { pose: "point", tts: "[explaining] Pornhub 是全球最大的成人流量池，演算法喜歡完播率高、互動多的影片；Xhamster 的搜尋跟標籤很精準，適合小眾題材。",
            board: { type: "analogy", heading: "兩個流量池的個性", items: [
              { icon: "🌊", label: "Pornhub", text: "最大流量池；看完播率與互動 → 放高密度精華" },
              { icon: "🔎", label: "Xhamster", text: "搜尋與標籤導流 → 長尾關鍵字、小眾系列" } ] } },
          { pose: "talk", tts: "[teaching] 素材要切：三十到九十秒的高密度精華，或是三到五分鐘的故事版。片尾跟置頂留言，一定要放平台名稱加優惠碼。",
            board: { type: "stats", heading: "✂️ 上傳素材規格", items: [
              { value: "30–90 秒", label: "高密度精華" },
              { value: "3–5 分鐘", label: "故事版" },
              { value: "5–10 個", label: "主題標籤" },
              { value: "片尾 CTA", label: "平台名＋優惠碼" } ] } },
          { pose: "talk", tts: "[sharing a tip] 標題用關鍵字加主題加角色；標籤加上語言、地區跟風格，吃長尾搜尋。素人時期，也可以試試「外流」這類關鍵字。" },
          { pose: "point", tts: "[clear] 路徑是：流量池，到你的連結頁或官網，再到售片或訂閱平台。每個平台用獨立的優惠碼，每週看點擊率跟轉換率，淘汰沒效的剪輯。",
            board: { type: "funnel", heading: "漏斗與追蹤", stages: [
              { label: "PH・XH 精華", sub: "每個平台獨立優惠碼／UTM" },
              { label: "Link-in-bio／官網", sub: "登陸頁" },
              { label: "售片・訂閱", sub: "ManyVids・Fansly・OnlyFans" } ] } },
          { pose: "warn", tts: "[serious] 合規提醒：嚴禁任何未成年意象、未授權的第三人入鏡；音樂跟字體要用可商用的授權，片頭片尾加上版權宣告。" }
        ]
      },
      {
        id: "4.3",
        title: "全面向社群",
        lines: [
          { pose: "talk", tts: "[upbeat] 第三節：全面向社群。TikTok、IG、臉書、X、Reddit，這裡是讓最多人認識你的地方。",
            board: { type: "title", kicker: "MODULE 4 · 4.3", title: "全面向社群", sub: "TikTok・Instagram・Facebook・X・Reddit" } },
          { pose: "point", tts: "[impressed] 先看池子有多大：Instagram 月活躍用戶已經超過三十億，TikTok 將近二十億。這些人，都是你的潛在粉絲。",
            board: { type: "stats", heading: "🌍 池子有多大？", items: [
              { value: "30 億+", label: "Instagram 月活躍（2025/9）" },
              { value: "≈ 20 億", label: "TikTok 月活躍" },
              { value: "1.16 億", label: "Reddit 日活躍（2025 底）" },
              { value: "1h35m", label: "TikTok 每人每日使用時間" } ],
              source: "資料來源：Meta 公告、DataReportal、Reddit 財報等 2025–2026 統計整理" } },
          { pose: "talk", tts: "[explaining] TikTok 靠強鉤子跟日常故事，用安全版的預告跟幕後花絮勾起好奇心。IG 呢，每天至少發一則限時動態刷存在感，首頁置頂三篇貼文。",
            board: { type: "compare", heading: "📲 每個社群的任務", rows: [
              { k: "TikTok", v: "強鉤子＋日常故事；BTS 花絮；導向連結頁" },
              { k: "Instagram", v: "每天限動刷存在；置頂 3 帖：介紹／企劃／入口" },
              { k: "FB／Threads", v: "連動 IG；建立粉絲專頁" },
              { k: "X", v: "高頻互動＋話題串；置頂推文放入口" },
              { k: "Reddit", v: "選允許宣傳的子版；作品＋製作心得，避免硬廣" } ], reveal: 2 } },
          { pose: "talk", tts: "[explaining] 臉書跟 Threads 連動 IG 就好。X 適合高頻互動，置頂推文放入口；Reddit 要先讀版規，用作品加製作心得切入，不要硬廣。", reveal: 5 },
          { pose: "point", tts: "[strategic] 同一個素材，準備三種縮圖：安全版、微釣魚、強轉化。社群放安全版，售片平台才放完整版。",
            board: { type: "tiers", heading: "🖼️ 同素材三檔縮圖", items: [
              { label: "安全版", icon: "🌸" }, { label: "微釣魚", icon: "🎣" }, { label: "強轉化", icon: "🔥" } ], note: "公開社群＝PG-13 安全版｜售片／訂閱平台＝18+ 完整版" } },
          { pose: "talk", tts: "[clear] 發文節奏：每週三到五支短片、兩到三組圖、一篇長文。每個平台用自己的優惠碼，才知道粉絲是從哪裡來的。",
            board: { type: "rhythm", heading: "每週發文量", items: [
              { n: "3–5", unit: "支／週", label: "短影音" }, { n: "2–3", unit: "組／週", label: "圖文" }, { n: "1", unit: "篇／週", label: "長文" } ] } },
          { pose: "warn", tts: "[serious] 最後一樣提醒：文案避開敏感詞跟交易字眼，音樂用可商用素材，水印一定要加。帳號被停，比少發一篇可怕多了。" }
        ]
      },
      {
        id: "4.4",
        title: "私域與自營",
        lines: [
          { pose: "talk", tts: "[warm] 第四節：私域與自營。這是你真正「帶得走」的粉絲。",
            board: { type: "title", kicker: "MODULE 4 · 4.4", title: "私域與自營", sub: "Snapchat・Telegram・Wix 官網" } },
          { pose: "warn", tts: "[serious] 為什麼要經營私域？因為 IG 跟臉書，隨時可能刪掉你的帳號。私域，就是就算帳號不見了，粉絲也還找得到你的地方。",
            board: { type: "big", label: "想一想", value: "帳號被刪，粉絲還在嗎？", note: "社群是租來的店面，私域才是自己的房子" } },
          { pose: "point", tts: "[explaining] 三個私域工具：Snapchat 用故事圈做高互動；Telegram 做免費群加付費頻道的雙層漏斗；Wix 官網，就是你的連結中心跟會員中心。",
            board: { type: "bullets", heading: "🏡 私域三工具", items: [
              { icon: "👻", label: "Snapchat", text: "故事圈高互動＋每週福利；用表情與代碼，避免敏感詞" },
              { icon: "✈️", label: "Telegram", text: "免費群 → 付費頻道；機器人發預告、到期提醒" },
              { icon: "🌐", label: "Wix 官網", text: "連結集中＋登陸頁＋會員中心；金流與條款放官網" } ], reveal: 3 } },
          { pose: "talk", tts: "[impressed] Telegram 在二零二五年，月活躍用戶已經突破十億，是全球最大的私域工具之一。",
            board: { type: "big", label: "Telegram", value: "10 億+ 月活躍", note: "2025 年 3 月突破 10 億 → 免費群＋付費頻道的雙層漏斗很好用",
              source: "資料來源：Telegram 官方公告（2025/3）" } },
          { pose: "point", tts: "[clear] 完整路徑是：公開社群，到連結頁，到官網，再到 Telegram 或 Snapchat 的付費圈，最後到售片或訂閱平台。",
            board: { type: "steps", heading: "🛤️ 私域導流路徑", items: [
              { label: "公開社群", text: "安全版內容" },
              { label: "Link-in-bio", text: "入口集合" },
              { label: "官網登陸頁", text: "名單＋條款" },
              { label: "TG／Snap 付費圈", text: "高互動留存" },
              { label: "售片／訂閱", text: "完成轉化" } ], reveal: 5 } },
          { pose: "warn", tts: "[careful] 資料保護也很重要：會員資料只收必要的，加密備份；頻道加防盜水印。遇到盜鏈，就啟動下架跟舉證流程。" }
        ]
      },
      {
        id: "4.5",
        title: "OFTV 與 YouTube",
        lines: [
          { pose: "talk", tts: "[energetic] 第五節：兩個很強的安全版導流站，OFTV 跟 YouTube。",
            board: { type: "title", kicker: "MODULE 4 · 4.5", title: "OFTV 與 YouTube", sub: "安全版長影音導流" } },
          { pose: "point", tts: "[explaining] OFTV 是 OnlyFans 在二零二一年推出的免費影音平台，只放安全內容、沒有廣告，手機跟智慧電視都能看。",
            board: { type: "stats", heading: "📺 OFTV 是什麼？", items: [
              { value: "2021", label: "OnlyFans 推出" },
              { value: "免費・無廣告", label: "觀眾不用訂閱" },
              { value: "只收 SFW", label: "健身・料理・搞笑・Vlog" },
              { value: "多裝置", label: "iOS・Android・Apple TV・Roku" } ],
              source: "資料來源：OnlyFans 官方公告（2021）、OFTV 官網" } },
          { pose: "talk", tts: "[strategic] OFTV 的觀眾，本來就在 OnlyFans 的生態裡，離訂閱只差一步。每週一支教學、Vlog 或幕後長片，描述區放入口，就是最自然的導流。" },
          { pose: "cheer", tts: "[proud, nostalgic] 再來是 YouTube。我以前拍換衣服的影片，當時是合規的，帶來超多流量，還拿到了十萬訂閱的銀色獎牌！",
            board: { type: "big", label: "講師的 YouTube 經歷", value: "🏆 10 萬訂閱", note: "合規的換衣影片帶來大量流量，但之後 3 個頻道陸續被停權" } },
          { pose: "warn", tts: "[honest, serious] 但是，後來我也被停了三個頻道。規則會變，以前可以的內容，之後可能就不行了。" },
          { pose: "point", tts: "[explaining] 想在 YouTube 賺錢，要加入合作夥伴計畫。門檻有兩層：五百訂閱可以開粉絲贊助；一千訂閱，加上四千小時觀看，才能分廣告收益。",
            board: { type: "stats", heading: "💰 YouTube 合作夥伴計畫門檻", items: [
              { value: "500 訂閱", label: "粉絲贊助＋購物（另需 3,000 小時或 300 萬 Shorts 觀看）" },
              { value: "1,000 訂閱", label: "廣告分潤（另需 4,000 小時或 1,000 萬 Shorts 觀看）" },
              { value: "2027 起", label: "新申請提高到 8,000 小時／2,000 萬 Shorts" },
              { value: "0 個", label: "生效中的社群規範警告" } ],
              source: "資料來源：YouTube 官方合作夥伴計畫說明與 2027 年更新公告" } },
          { pose: "talk", tts: "[teaching] 內容建議：Shorts 負責被發現，長片負責建立信任。健身、穿搭、Vlog、幕後、問答，都很適合。",
            board: { type: "bullets", heading: "🎬 YouTube 內容策略", items: [
              { icon: "📱", label: "Shorts", text: "被演算法發現、快速漲粉" },
              { icon: "🎞️", label: "長片", text: "建立信任與個人品牌" },
              { icon: "🏋️", label: "安全題材", text: "健身・穿搭・Vlog・幕後・Q&A" },
              { icon: "🔗", label: "描述區", text: "放個人網站，不放成人連結" } ], reveal: 4 } },
          { pose: "warn", tts: "[serious] YouTube 的規則一定要記住：九十天內累積三次警告，頻道就會被終止。穿搭或換衣類的內容，尺度一定要比其他平台更保守。",
            board: { type: "big", label: "YouTube 警告制度", value: "90 天內 3 次 ＝ 終止", note: "裸露與性暗示最容易踩線；縮圖、標題、描述同樣會被審查",
              source: "資料來源：YouTube 社群規範警告制度" } },
          { pose: "cheer", tts: "[encouraging] OFTV 在生態裡、YouTube 在生態外，兩個一起用，導流就更穩了！" }
        ]
      },
      {
        id: "4.6",
        title: "連結頁與跳轉",
        lines: [
          { pose: "talk", tts: "[cheerful] 第六節：連結頁。粉絲從社群點進來，第一眼看到的就是它。",
            board: { type: "title", kicker: "MODULE 4 · 4.6", title: "連結頁與跳轉", sub: "Linktree・link.me・Bouncy・個人網站" } },
          { pose: "point", tts: "[explaining] 常用的工具有 Linktree、link.me、Bouncy，可以把你所有的社群跟付費內容站，放在同一頁。我自己用 link.me，因為可以追蹤點擊。",
            board: { type: "bullets", heading: "🔗 常用連結頁工具", items: [
              { icon: "🌳", label: "Linktree", text: "最普及、上手最快" },
              { icon: "📊", label: "link.me", text: "可追蹤點擊（講師使用）" },
              { icon: "🦘", label: "Bouncy", text: "為創作者設計" },
              { icon: "🧭", label: "共通重點", text: "所有社群＋付費站＋追蹤" } ], reveal: 4 } },
          { pose: "warn", tts: "[serious] 但規則一直在變。以前 Meta 的 IG 跟臉書不能直接放 OnlyFans 連結，大家就改放 Linktree 這種個人頁；現在，連單層的跳轉頁也會被擋。",
            board: { type: "steps", heading: "📜 連結規則的演變", items: [
              { label: "以前", text: "不能直接放 OnlyFans 連結" },
              { label: "後來", text: "改放 Linktree 等集合頁" },
              { label: "現在", text: "單層跳轉頁也會被擋" },
              { label: "解法", text: "個人網站 → 集合頁（兩層）" } ], reveal: 4 } },
          { pose: "point", tts: "[strategic] 所以現在要多一層：社群先連到你自己的個人網站，網站內容乾淨中性，再從網站跳到集合頁跟付費站。用自己的網域，風險會小很多。",
            board: { type: "steps", heading: "🛤️ 現在的安全路徑", items: [
              { label: "社群 bio", text: "IG・FB・TikTok" },
              { label: "個人網站", text: "自有網域・內容中性" },
              { label: "集合頁", text: "link.me・Linktree・Bouncy" },
              { label: "付費站", text: "OnlyFans・Fansly・售片平台" } ], reveal: 4 } },
          { pose: "talk", tts: "[sharing a tip] 小技巧：目前 Threads 還不會擋連結，所以可以先把連結放在 Threads，其他平台再連到 Threads。",
            board: { type: "big", label: "目前的小技巧", value: "連結先放 Threads", note: "其他平台 → Threads → 付費站｜規則隨時可能改變" } },
          { pose: "warn", tts: "[careful] 記住，這些規則隨時會改。每個月檢查一次：連結還點得開嗎？有沒有被限制？帳號有沒有收到警告？" },
          { pose: "talk", tts: "[teaching] 最後，每個平台的連結都加上不同的追蹤參數跟優惠碼，這樣你就知道，粉絲是從哪裡來的。",
            board: { type: "bullets", heading: "📊 連結追蹤", items: [
              { icon: "🏷️", label: "UTM 參數", text: "例：?utm_source=threads" },
              { icon: "🎟️", label: "專屬優惠碼", text: "每個平台一組" },
              { icon: "📅", label: "每月檢查", text: "連結是否正常、有無限制" } ], reveal: 3 } }
        ]
      },
      {
        id: "4.7",
        title: "帳號被封怎麼辦",
        lines: [
          { pose: "think", tts: "[gentle, sincere] 第七節，我想跟你聊一個很真實的話題：帳號被封。",
            board: { type: "title", kicker: "MODULE 4 · 4.7", title: "帳號被封怎麼辦", sub: "心態・原因・預防・備援" } },
          { pose: "talk", tts: "[honest, a bit emotional] 老實說，我自己被封過十個帳號：IG 五個、YouTube 三個、TikTok 兩個。",
            board: { type: "stats", heading: "😵 講師被封過的帳號", items: [
              { value: "5 個", label: "Instagram" },
              { value: "3 個", label: "YouTube（含 10 萬訂閱頻道）" },
              { value: "2 個", label: "TikTok" },
              { value: "10 個", label: "累積被封帳號" } ] } },
          { pose: "talk", tts: "[explaining] 原因大多是：內容其實合規，但比較擦邊的照片跟影片，被 AI 審核或被檢舉判定違規。還有，平台規則會改，以前可以的，之後就不行了。",
            board: { type: "bullets", heading: "🔍 常見被封原因", items: [
              { icon: "🤖", label: "AI 自動審核", text: "擦邊但合規的內容也可能誤判" },
              { icon: "🚩", label: "被檢舉", text: "被大量檢舉就容易觸發審查" },
              { icon: "📜", label: "政策改變", text: "舊內容也可能被追溯" },
              { icon: "🔗", label: "連結與敏感詞", text: "導向成人網站的連結最敏感" } ], reveal: 4 } },
          { pose: "cheer", tts: "[warm, firm] 所以心態很重要：被封，不代表你失敗，這是這一行的經營成本。難過一下可以，二十四小時內，拉回來繼續做。",
            board: { type: "big", label: "心態", value: "被封是成本，不是失敗", note: "平台是租來的店面 → 你的價值在內容與粉絲關係，不在單一帳號" } },
          { pose: "point", tts: "[instructive] 預防的細節：每一季重看一次社群守則；同一篇貼文，不要又放連結、又放擦邊圖；收到警告就降尺度；安全版跟完整版要分開。",
            board: { type: "bullets", heading: "🧷 預防細節", items: [
              { icon: "📖", label: "每季重讀守則", text: "規則會變，要跟著更新" },
              { icon: "✂️", label: "連結與擦邊圖分開", text: "不要出現在同一篇" },
              { icon: "⚠️", label: "收到警告就降尺度", text: "警告會累積" },
              { icon: "🗂️", label: "安全版／完整版分開", text: "社群只放安全版" },
              { icon: "🔑", label: "帳號安全", text: "開 2FA，避免被盜後違規" } ], reveal: 5 } },
          { pose: "point", tts: "[strategic] 備援計畫：把粉絲導到私域，像 Telegram 或 Email；原始檔全部備份；定期下載平台的帳號資料；多個平台分散經營。",
            board: { type: "steps", heading: "🛟 備援計畫", items: [
              { label: "私域名單", text: "Telegram・Email・官網會員" },
              { label: "原始檔備份", text: "3-2-1 備份原則" },
              { label: "下載帳號資料", text: "定期匯出貼文與粉絲資料" },
              { label: "多平台分散", text: "不把雞蛋放同一個籃子" } ], reveal: 4 } },
          { pose: "warn", tts: "[serious] 被封了，先走官方申訴，保留截圖跟證據。也要注意：很多平台規定，被停權後不能再開新帳號規避，一定要先看清楚條款。" },
          { pose: "cheer", tts: "[encouraging, warm] 我被封了十次，還是走到了全球前 0.01%。只要系統跟粉絲關係還在，帳號沒了，也能重新站起來！" }
        ]
      }
    ]
  },

  // ───────────────────────── MODULE 5 ─────────────────────────
  {
    id: "m5",
    no: 5,
    title: "內容經營與週計畫",
    outcome: "建立週期化運營節奏，持續優化內容與關係",
    bg: "plan",
    intro: {
      lines: [
        { pose: "cheer", tts: "[excited] 歡迎來到第五章：內容經營與週計畫！",
          board: { type: "chapter", no: 5, title: "內容經營與週計畫", items: ["5.1 成人向平台節奏", "5.2 全面向平台節奏", "5.3 私域維運", "5.4 週清單與儀表板"], goal: "建立週期化運營節奏，持續優化內容與關係" } },
        { pose: "talk", tts: "[warm, sincere] 開好平台只是開始。真正拉開差距的，是每週穩定地做。這一章，我會給你一張可以直接照抄的週計畫。" }
      ]
    },
    outro: {
      lines: [
        { pose: "talk", tts: "[warm] 第五章的精華，其實就一句話：固定節奏，加上每週回看。",
          board: { type: "cycle", heading: "🔁 每週循環", items: ["定主題", "排素材", "發布", "互動", "回看數據", "調整下週"] } },
        { pose: "cheer", tts: "[excited, proud] 恭喜完成 Module 5！你已經有一套可以長期跑的經營節奏了。",
          board: { type: "done", title: "Module 5 完成！", text: "學習成果：建立週期化運營節奏，持續優化內容與關係" } },
        { pose: "point", tts: "[energetic] 節奏穩了，下一步就是加速！下一章，我們來聊廣告跟合作，讓成長快一倍。" }
      ]
    },
    lessons: [
      {
        id: "5.1",
        title: "成人向平台節奏",
        lines: [
          { pose: "talk", tts: "[cheerful] 第一節：成人向平台的每週節奏。ManyVids、Fansly、Pornhub、Xhamster，各有各的節拍。",
            board: { type: "title", kicker: "MODULE 5 · 5.1", title: "成人向平台節奏", sub: "MV・Fansly・PH・XH" } },
          { pose: "point", tts: "[clear] ManyVids 這樣排：週一上新長片，週三放精華剪加限時折扣，週五做合集捆綁，週末再加碼優惠。",
            board: { type: "week", heading: "📅 成人向平台週計畫", days: [
              { d: "一", items: ["MV 上新長片"] },
              { d: "二", items: ["Fansly 動態"] },
              { d: "三", items: ["MV 精華＋折扣", "PH 故事版"] },
              { d: "四", items: ["Fansly 動態", "XH 系列"] },
              { d: "五", items: ["MV 合集捆綁", "回看數據"] },
              { d: "六", items: ["Fansly 直播／互動", "PH 故事版"] },
              { d: "日", items: ["週末加碼優惠"] } ] } },
          { pose: "talk", tts: "[explaining] Fansly 每週三到四次動態、一次會員限定的直播或互動，每天一則限動。福利分三層：預告、進階寫真、完整版加月度合輯。" },
          { pose: "talk", tts: "[explaining] Pornhub 每週兩支三到五分鐘的故事版精華；Xhamster 每週一到兩支主題系列。描述跟關鍵字用固定模板，省時間又一致。" },
          { pose: "point", tts: "[strategic] 每個平台都有自己的優惠碼。每週五固定回看點擊率、完播率跟轉換，沒效的素材就淘汰，有效的題材就加碼。",
            board: { type: "stats", heading: "📊 週五回看這三個數字", items: [
              { value: "CTR", label: "點擊率：縮圖標題有沒有吸引力" },
              { value: "完播率", label: "內容有沒有留住人" },
              { value: "轉換率", label: "有沒有真的付錢" },
              { value: "MV/FS/PH/XH", label: "各平台獨立優惠碼" } ] } }
        ]
      },
      {
        id: "5.2",
        title: "全面向平台節奏",
        lines: [
          { pose: "talk", tts: "[upbeat] 第二節：全面向社群的節奏。TikTok、IG、臉書、X、Reddit，再加上 OFTV。",
            board: { type: "title", kicker: "MODULE 5 · 5.2", title: "全面向平台節奏", sub: "TikTok・IG・FB・X・Reddit・OFTV" } },
          { pose: "point", tts: "[clear] 我們直接看週計畫：TikTok 每週三到五支短片、IG 兩到三支 Reels 加兩組相簿、X 每天一到兩則，限動每天都要有。",
            board: { type: "week", heading: "📅 社群週計畫", days: [
              { d: "一", items: ["TikTok", "IG 限動", "X"] },
              { d: "二", items: ["IG Reels", "IG 限動", "X"] },
              { d: "三", items: ["TikTok", "IG 限動", "X"] },
              { d: "四", items: ["IG 相簿", "IG 限動", "FB 長文"] },
              { d: "五", items: ["TikTok", "IG Reels", "X"] },
              { d: "六", items: ["Reddit", "IG 限動", "OFTV"] },
              { d: "日", items: ["IG 相簿", "IG 限動", "排下週"] } ] } },
          { pose: "talk", tts: "[teaching] TikTok 每支十五到四十五秒，前兩秒就要有鉤子，用日常花絮或教學型內容，結尾導向連結頁。" },
          { pose: "talk", tts: "[explaining] IG 限動每天更新，用投票、倒數、福利預告互動；精選動態分成作品集、評價、優惠三類。臉書每週一篇長文加一次直播預告。" },
          { pose: "point", tts: "[explaining] OFTV 是 OnlyFans 自己的免費影音平台，只放安全內容。每週一支教學、Vlog 或幕後長片，當作你的品牌名片跟導流橋。",
            board: { type: "big", label: "OFTV 是什麼？", value: "OF 的免費安全版影音", note: "每週 1 支教學／Vlog／健身／幕後 → 建立權威感，描述區放入口與優惠碼" } },
          { pose: "cheer", tts: "[encouraging] 一開始不用全部做到，先挑兩個平台做穩，再慢慢加！" }
        ]
      },
      {
        id: "5.3",
        title: "私域維運",
        lines: [
          { pose: "talk", tts: "[warm] 第三節：私域維運。Snapchat、Telegram、官網，要怎麼每週照顧？",
            board: { type: "title", kicker: "MODULE 5 · 5.3", title: "私域維運", sub: "Snapchat・Telegram・官網更新" } },
          { pose: "point", tts: "[clear] 週一用 Snapchat 暖場、官網預告上新；週三 Telegram 互動加限時優惠碼；週五福利預告、官網活動頁上線；週末 Telegram 週合輯，再寄一封名單信。",
            board: { type: "week", heading: "📅 私域週節奏", days: [
              { d: "一", items: ["Snap 暖場", "官網上新預告"] },
              { d: "二", items: ["Snap 日常"] },
              { d: "三", items: ["TG 互動帖", "限時優惠碼"] },
              { d: "四", items: ["Snap 問答"] },
              { d: "五", items: ["Snap 福利預告", "官網活動頁"] },
              { d: "六", items: ["TG 週合輯"] },
              { d: "日", items: ["名單養護信"] } ] } },
          { pose: "talk", tts: "[explaining] Telegram 的置頂公告要寫清楚規範、入口跟月費；用機器人自動推送預告、到期提醒跟優惠碼，續費率會高很多。" },
          { pose: "warn", tts: "[careful] 私域一樣要合規：資料最小化收集、加密備份；頻道加防盜水印，遇到外流就啟動下架跟舉證。" }
        ]
      },
      {
        id: "5.4",
        title: "週清單與儀表板",
        lines: [
          { pose: "talk", tts: "[energetic] 第四節：週清單與儀表板。每週照這張清單跑一次，就不會漏東漏西。",
            board: { type: "title", kicker: "MODULE 5 · 5.4", title: "週清單與儀表板", sub: "發布・互動・留存・數據回看" } },
          { pose: "point", tts: "[playful] 這是你的每週清單，現在就可以跟著勾勾看！",
            board: { type: "checklist", id: "c54", heading: "✅ 每週清單", items: [
              { label: "發布", text: "本週主題與素材表；售片上新、流量池精華、社群短片、官網更新" },
              { label: "互動", text: "IG 投票問答、X 回覆串、TG 置頂與到期提醒、Snap 故事" },
              { label: "留存", text: "分層福利、週合輯、續費優惠、私訊關懷、名單信" },
              { label: "合規", text: "無未成年意象、第三人授權、商用授權素材、水印" },
              { label: "版控與備份", text: "命名規則、加密、雲端雙備份、下架流程" } ], reveal: 1 } },
          { pose: "talk", tts: "[explaining] 儀表板看五類數字：觸達、參與、轉化、留存，還有風險。每一類都有一兩個重點指標。",
            board: { type: "bullets", heading: "📊 每週儀表板", items: [
              { icon: "📣", label: "觸達", text: "曝光數、覆蓋率、點擊率 CTR" },
              { icon: "💬", label: "參與", text: "互動率、完播率、收藏分享" },
              { icon: "💳", label: "轉化", text: "登陸頁點擊→購買、優惠碼使用率" },
              { icon: "🔁", label: "留存", text: "續訂率、活躍會員、私訊回覆時效" },
              { icon: "🚨", label: "風險", text: "版權投訴、違規警示、盜鏈下架" } ], reveal: 5 } },
          { pose: "think", tts: "[thoughtful] 不用每天盯數字，會很焦慮。固定每週看一次、記下來、比較上週，就夠了。" },
          { pose: "cheer", tts: "[encouraging] 清單跑久了會變成習慣，習慣，就是你最強的競爭力！" }
        ]
      }
    ]
  },

  // ───────────────────────── MODULE 6 ─────────────────────────
  {
    id: "m6",
    no: 6,
    title: "廣告與合作增長",
    outcome: "掌握付費與免費增長管道，提升獲客效率",
    bg: "rooftop",
    intro: {
      lines: [
        { pose: "cheer", tts: "[excited] 歡迎來到第六章：廣告與合作增長！",
          board: { type: "chapter", no: 6, title: "廣告與合作增長", items: ["6.1 成人向增長：GigSocial・SFS・套餐", "6.2 全面向增長：投放・SEO・合作"], goal: "掌握付費與免費增長管道，提升獲客效率" } },
        { pose: "talk", tts: "[confident] 一個人慢慢發文會長大，但有合作、有投放，會長得快很多。這一章教你花對錢、找對人。" }
      ]
    },
    outro: {
      lines: [
        { pose: "talk", tts: "[warm] 第六章重點：付費跟免費的增長管道，都要用優惠碼追蹤，留下有效的、砍掉沒效的。",
          board: { type: "bullets", heading: "📝 Module 6 重點回顧", items: [
            { icon: "📢", label: "GigSocial", text: "買受眾相近帳號的曝光位" },
            { icon: "🤝", label: "SFS 互推", text: "找屬性相近的創作者，48 小時看成效" },
            { icon: "🎁", label: "套餐設計", text: "1× / 1.6× / 2.2× ＋限時" },
            { icon: "🎯", label: "安全版投放", text: "品牌／幕後／教學素材＋重定向" },
            { icon: "🔎", label: "SEO", text: "官網長文＋結構化資料" } ], reveal: 5 } },
        { pose: "cheer", tts: "[excited, proud] 恭喜完成 Module 6！你現在知道怎麼讓成長加速了。",
          board: { type: "done", title: "Module 6 完成！", text: "學習成果：掌握付費與免費增長管道，提升獲客效率" } },
        { pose: "point", tts: "[playful] 人潮來了，要怎麼讓他們買得開心、又一直留下來？下一章：定價與留存！" }
      ]
    },
    lessons: [
      {
        id: "6.1",
        title: "成人向增長",
        lines: [
          { pose: "talk", tts: "[energetic] 第一節：成人向增長。三個武器：GigSocial、SFS 互推、還有套餐設計。",
            board: { type: "title", kicker: "MODULE 6 · 6.1", title: "成人向增長", sub: "GigSocial・SFS（互推）・套餐設計" } },
          { pose: "point", tts: "[explaining] GigSocial 就是付費買別人的曝光位，像是置頂推文、限動或精選。要選受眾相近、近三十天成效穩定的帳號，並且要求截圖跟連結至少保留七天。",
            board: { type: "bullets", heading: "📢 GigSocial 付費曝光", items: [
              { icon: "🎯", label: "選對帳號", text: "受眾相近、近 30 天成效穩定" },
              { icon: "📌", label: "曝光形式", text: "置頂推文、限動、精選位" },
              { icon: "📸", label: "留證", text: "截圖＋連結保存 7 天以上" },
              { icon: "🏷️", label: "追蹤", text: "專屬優惠碼＋UTM" } ], reveal: 4 } },
          { pose: "talk", tts: "[friendly] SFS 就是互推：你幫我推、我幫你推。像我是小麥色肌膚、運動型的亞洲女生，就會找至少一個特色相近的創作者合作。",
            board: { type: "analogy", heading: "🤝 SFS（Shoutout for Shoutout）", items: [
              { icon: "🧍‍♀️", label: "找相似的人", text: "風格、受眾、體型或主題相近 → 粉絲最容易互相轉移" },
              { icon: "📦", label: "準備素材包", text: "縮圖＋標題＋30 秒精華＋文案模板＋檔期" } ] } },
          { pose: "point", tts: "[strategic] 互推完四十八小時，看點擊率跟粉絲成長。效果不好的對象，下次就不續約。" },
          { pose: "point", tts: "[explaining] 套餐設計分三層，價差大約是一倍、一點六倍、二點二倍，再加上四十八到七十二小時的限時，製造稀缺感。",
            board: { type: "calc", heading: "🎁 套餐設計（以 $10 為例）", rows: [
              { l: "入門", f: "單片解鎖＋小福利 × 1", r: "$10" },
              { l: "進階", f: "合輯捆綁＋私訊福利 × 1.6", r: "$16" },
              { l: "豪華", f: "月度合集＋獨家企劃 × 2.2", r: "$22" } ], total: "搭配 48–72 小時限時，提升稀缺感" } },
          { pose: "talk", tts: "[instructive] 執行節奏：每週至少兩次 GigSocial 曝光、一次 SFS 互推，而且跟上新同步，確保導過去的頁面是一致的。" },
          { pose: "warn", tts: "[serious] 合作一定要留下書面或聊天紀錄：檔期、素材、曝光形式跟保留時間。對方刪文或沒履約，就依約處理。" }
        ]
      },
      {
        id: "6.2",
        title: "全面向增長",
        lines: [
          { pose: "talk", tts: "[upbeat] 第二節：全面向增長。投放廣告、SEO、跨平台合作。",
            board: { type: "title", kicker: "MODULE 6 · 6.2", title: "全面向增長", sub: "投放策略・SEO・跨平台合作" } },
          { pose: "warn", tts: "[serious, clear] 先講清楚：Meta 等主流平台的廣告政策，是禁止成人內容的。所以投放只能用安全版素材：品牌故事、幕後花絮、教學型內容。",
            board: { type: "big", label: "投放紅線", value: "廣告只用安全版素材", note: "主流廣告平台禁止成人內容 → 用品牌／幕後／教學素材，避免暗示詞與交易字眼",
              source: "資料來源：Meta 廣告刊登準則（成人內容）" } },
          { pose: "talk", tts: "[sharing, sincere] 分享我的經驗：我在 IG 跟臉書，用日常有趣的小影片下廣告增加曝光，持續投了兩年，效果很不錯。" },
          { pose: "point", tts: "[strategic] 判斷值不值得很簡單：廣告帶來的訂閱收入，大於廣告成本，就值得繼續投。我們算一個例子。",
            board: { type: "calc", heading: "📈 廣告值不值得投？", rows: [
              { l: "廣告花費", f: "本月投放", r: "$300" },
              { l: "帶來新訂閱", f: "追蹤優惠碼統計", r: "30 人" },
              { l: "訂閱收入", f: "30 人 × LTV $50", r: "$1,500" } ], total: "收入 $1,500 ＞ 成本 $300 → 值得持續投入" } },
          { pose: "warn", tts: "[careful] 不過要提醒你：Meta 的政策一直在改，現在還能不能這樣下廣告，要看當下的狀況。先用小預算測試，再慢慢加碼。" },
          { pose: "point", tts: "[strategic] 冷受眾用短鉤子影片；看過的人，再重新投放登陸頁跟入門套餐。重定向可以分七天、十四天、三十天三個池。",
            board: { type: "steps", heading: "🎯 投放與重定向", items: [
              { label: "冷受眾", text: "短鉤子影片（安全版）" },
              { label: "7 天池", text: "看過 50% 影片的人" },
              { label: "14 天池", text: "點擊但沒購買的人" },
              { label: "30 天池", text: "會員即將到期的人" },
              { label: "二段式促轉", text: "郵件／TG：預告＋優惠碼" } ], reveal: 5 } },
          { pose: "talk", tts: "[explaining] SEO 是免費又長效的流量：官網寫主題頁跟長文，像教學、幕後、器材心得；加上結構化資料，讓搜尋引擎更懂你。",
            board: { type: "bullets", heading: "🔎 SEO（官網＋內容群）", items: [
              { icon: "🧱", label: "結構化資料", text: "Person／Video／FAQ schema" },
              { icon: "📝", label: "長文", text: "教學、幕後、器材心得" },
              { icon: "🔗", label: "內部連結", text: "導到入口頁／套餐頁" },
              { icon: "🗺️", label: "每月更新", text: "Sitemap＋核心長文" } ], reveal: 4 } },
          { pose: "talk", tts: "[cheerful] 跨平台合作：在 IG、X、Reddit 放安全版預告，在 ManyVids、Fansly 上聯名合輯。合約要寫清楚素材、檔期、保留時長跟分潤。" },
          { pose: "cheer", tts: "[encouraging] 每週淘汰沒效的題材、加碼有效的主題跟合作夥伴，你的成長曲線就會越來越陡！" }
        ]
      }
    ]
  },

  // ───────────────────────── MODULE 7 ─────────────────────────
  {
    id: "m7",
    no: 7,
    title: "定價與留存策略",
    outcome: "讓不同層級粉絲「都感覺值得」，提高 LTV 與續訂率",
    bg: "shop",
    intro: {
      lines: [
        { pose: "cheer", tts: "[excited] 歡迎來到第七章：定價與留存策略！",
          board: { type: "chapter", no: 7, title: "定價與留存策略", items: ["7.1 定價框架：價值階梯與加售", "7.2 留存設計：DM 劇本・驚喜・活動"], goal: "讓不同層級粉絲「都感覺值得」，提高 LTV 與續訂率" } },
        { pose: "talk", tts: "[warm, confident] 還記得嗎？平台七成以上的收入，來自私訊、解鎖跟小費。所以定價跟留存，就是你收入的心臟。" }
      ]
    },
    outro: {
      lines: [
        { pose: "talk", tts: "[warm] 第七章一句話總結：讓每一種粉絲，都覺得自己買得值得，而且捨不得離開。",
          board: { type: "bullets", heading: "📝 Module 7 重點回顧", items: [
            { icon: "🪜", label: "價值階梯", text: "入門 → 核心 → Premium" },
            { icon: "➕", label: "加售時機", text: "結帳、續費前 72 小時、直播後" },
            { icon: "💌", label: "DM 三段劇本", text: "迎新・第 7 天・到期前" },
            { icon: "🎁", label: "驚喜機制", text: "盲盒＋行為解鎖" },
            { icon: "📈", label: "續訂率", text: "50%→70%，LTV 多 67%" } ], reveal: 5 } },
        { pose: "cheer", tts: "[excited, proud] 恭喜完成 Module 7！你已經會讓粉絲買得開心、留得長久了。",
          board: { type: "done", title: "Module 7 完成！", text: "學習成果：讓不同層級粉絲都感覺值得，提高 LTV 與續訂率" } },
        { pose: "point", tts: "[serious, warm] 最後一章，是保護你所有努力的一章：法律與安全合規。一定要看完喔！" }
      ]
    },
    lessons: [
      {
        id: "7.1",
        title: "定價框架",
        lines: [
          { pose: "talk", tts: "[cheerful] 第一節：定價框架。入門、核心、價值階梯，還有加售。",
            board: { type: "title", kicker: "MODULE 7 · 7.1", title: "定價框架", sub: "入門・核心・價值階梯・加售" } },
          { pose: "point", tts: "[explaining] 價值階梯有三層：入門大約五到九美金，拿來拉新；核心是入門的一點六到一點八倍；Premium 再乘上一點八到二點四倍，服務最愛你的粉絲。",
            board: { type: "ladder", heading: "🪜 價值階梯", items: [
              { label: "Premium $22–35", text: "獨家企劃、定製互動、聯名合輯（核心 × 1.8–2.4）", tag: "VIP" },
              { label: "核心 $12–15", text: "月度長片、會員直播、月合輯（入門 × 1.6–1.8）", tag: "Core" },
              { label: "入門 $5–9", text: "安全版預告、BTS、每週照片組；首月限時折扣", tag: "Entry" } ] } },
          { pose: "talk", tts: "[strategic] 為什麼要分層？我們算一下。一百個粉絲，如果全部都只付七塊，月收七百；但如果分成三層，同樣一百個人，可以收到一千零九十。",
            board: { type: "calc", heading: "🧮 同樣 100 位粉絲，分層後差多少？", rows: [
              { l: "全部單一價", f: "100 人 × $7", r: "$700" },
              { l: "入門 60 人", f: "60 × $7", r: "$420" },
              { l: "核心 30 人", f: "30 × $13", r: "$390" },
              { l: "Premium 10 人", f: "10 × $28", r: "$280" } ], total: "分層後 $1,090，多了 56%！", reveal: 4 } },
          { pose: "point", tts: "[teaching] 加售，就是在對的時機多賣一點：價格大約是主商品的零點四到零點八倍，在結帳頁、續費前七十二小時、或直播後二十四小時推出。",
            board: { type: "bullets", heading: "➕ 加售（Upsell）", items: [
              { icon: "🎟️", label: "類型", text: "單片解鎖、合集捆綁、拍攝日誌、企劃票券" },
              { icon: "💲", label: "價位", text: "主商品的 0.4–0.8 倍＋限量／限時" },
              { icon: "⏰", label: "時機", text: "結帳頁・續費前 72h・直播後 24h" } ], reveal: 3 } },
          { pose: "talk", tts: "[explaining] 每個月的促銷節奏：月初上新檔期、月中合輯捆綁、月末續費禮。新粉絲先買入門，七到十四天後升級核心，活動檔期再推 Premium。",
            board: { type: "flow", heading: "📆 升級路徑", items: [
              { icon: "🌱", label: "入門", sub: "拉新" }, { icon: "⏳", label: "7–14 天", sub: "培養" }, { icon: "💎", label: "核心", sub: "穩定主力" }, { icon: "👑", label: "Premium", sub: "活動檔期" } ] } },
          { pose: "cheer", tts: "[encouraging] 記得每一層都用獨立的優惠碼，看首購率、升級率跟續費率，慢慢調出最適合你的價格！" }
        ]
      },
      {
        id: "7.2",
        title: "留存設計",
        lines: [
          { pose: "talk", tts: "[warm] 第二節：留存設計。DM 劇本、驚喜機制、會員週期活動。",
            board: { type: "title", kicker: "MODULE 7 · 7.2", title: "留存設計", sub: "DM 劇本・驚喜機制・會員週期活動" } },
          { pose: "think", tts: "[curious] 為什麼留存這麼重要？我們用第一章學的 LTV 來算算看。",
            board: { type: "calc", heading: "📈 續訂率提升 20%，LTV 差多少？", rows: [
              { l: "平均留存月數", f: "≈ 1 ÷（1 − 續訂率）", r: "公式" },
              { l: "續訂率 50%", f: "$15 × 2 個月", r: "$30" },
              { l: "續訂率 70%", f: "$15 × 3.3 個月", r: "$50" } ], total: "同一個粉絲，價值多了 67%", reveal: 3 } },
          { pose: "cheer", tts: "[excited] 看到了嗎？續訂率只從百分之五十提高到七十，一個粉絲的價值就從三十塊變五十塊！" },
          { pose: "point", tts: "[teaching] DM 劇本分三段：迎新要馬上回，最晚四十八小時內；第七天做關懷；到期前七十二小時提醒續費。",
            board: { type: "steps", heading: "💌 DM 三段劇本", items: [
              { label: "迎新（立刻～48h）", text: "歡迎＋自我介紹＋偏好小測驗 → 送 BTS 小福利" },
              { label: "關懷（第 7 天）", text: "回顧本週更新＋問喜好 → 送下次預告縮圖" },
              { label: "續費（到期前 72h）", text: "提醒＋兩檔方案 → 加碼限時語音" } ], reveal: 3 } },
          { pose: "talk", tts: "[playful, flirty tone] 迎新訊息可以這樣寫：嗨～謝謝你來找我！偷偷問你，你比較喜歡日常感，還是比較刺激的？回我就送你一張幕後照喔。",
            board: { type: "chat", heading: "💬 迎新訊息（範例）", items: ["嗨～謝謝你來找我 🥰", "偷偷問你：喜歡日常感，還是刺激一點的？", "回我就送你一張幕後照喔 📸"] } },
          { pose: "point", tts: "[strategic] 驚喜機制：每月盲盒福利、隨機加碼小語音或幕後照；連續互動三次、或完成問答，就解鎖。不確定的獎勵，最讓人期待。",
            board: { type: "bullets", heading: "🎁 驚喜機制", items: [
              { icon: "🎲", label: "月度盲盒", text: "每月一次，內容不公開" },
              { icon: "✨", label: "隨機加碼", text: "小語音、BTS 照、限時貼紙" },
              { icon: "🔓", label: "行為解鎖", text: "連續互動 3 次、完成問答" } ], reveal: 3 } },
          { pose: "talk", tts: "[explaining] 會員週期活動：每週一個主題週、每月一次直播或問答夜、每季一次聯名企劃。不同層級，對應不同的活動權限，建立儀式感。",
            board: { type: "rhythm", heading: "🗓️ 會員週期活動", items: [
              { n: "週", unit: "每週", label: "主題週" }, { n: "月", unit: "每月", label: "直播／問答夜" }, { n: "季", unit: "每季", label: "聯名企劃" } ] } },
          { pose: "warn", tts: "[gentle, serious] 最後，尊重界線：清楚標示十八禁、提供撤回跟客服管道。信任，才是留住人最久的東西。" }
        ]
      }
    ]
  },

  // ───────────────────────── MODULE 8 ─────────────────────────
  {
    id: "m8",
    no: 8,
    title: "法律與安全合規",
    outcome: "合規安心經營，避免高風險與不必要損失",
    bg: "safe",
    intro: {
      lines: [
        { pose: "talk", tts: "[warm, serious] 歡迎來到最後一章：法律與安全合規。",
          board: { type: "chapter", no: 8, title: "法律與安全合規", items: ["8.1 法規總整理：內容・版權・稅務・地區", "8.2 自身安全 Final Check", "8.3 總結：可持續成長的公式"], goal: "合規安心經營，避免高風險與不必要損失" } },
        { pose: "talk", tts: "[sincere] 前面七章教你怎麼賺，這一章教你怎麼「守」。賺得再多，一次出事就可能全部歸零。" },
        { pose: "warn", tts: "[gentle] 提醒一下：這一章是整理常見重點，不是法律意見。遇到具體狀況，請找律師或會計師討論喔。" }
      ]
    },
    outro: {
      lines: [
        { pose: "talk", tts: "[warm, nostalgic] 我們一起走完了八個章節。最後，幫你把整堂課串起來。",
          board: { type: "compare", heading: "🗺️ 整堂課回顧", rows: [
            { k: "1–2 章", v: "看清自己、開好帳號與金流" },
            { k: "3 章", v: "拍出會賺錢又安全的內容" },
            { k: "4–5 章", v: "導流地圖＋每週節奏" },
            { k: "6–7 章", v: "加速成長、定價與留存" },
            { k: "8 章", v: "合規與安全，守住一切" } ], reveal: 5 } },
        { pose: "cheer", tts: "[excited, proud, emotional] 恭喜你！全部八個章節都完成了！你現在擁有一套可以上線、可以擴張、也可以衡量的實戰系統。",
          board: { type: "done", title: "全部課程完成！", text: "一套可上線、可擴張、可衡量的 OnlyFans 實戰系統 ♡" } },
        { pose: "talk", tts: "[warm, heartfelt] 謝謝你一路陪我上完這堂課。記得，慢慢來也沒關係，只要持續做，你一定會看到成果。" },
        { pose: "blink", tts: "[sweet, cheerful] 我是 bunnybrownie，我們線上見，掰掰～" }
      ]
    },
    lessons: [
      {
        id: "8.1",
        title: "法規總整理",
        lines: [
          { pose: "talk", tts: "[serious] 第一節：法規總整理。內容、版權、稅務，還有地區差異。",
            board: { type: "title", kicker: "MODULE 8 · 8.1", title: "OnlyFans 法規總整理", sub: "內容・版權・稅務・地區差異" } },
          { pose: "warn", tts: "[very serious] 內容紅線先記清楚：任何未成年意象，包括年齡不明或校園未成年角色扮演，絕對禁止；還有未授權的第三人、暴力危險、動物跟藥物相關題材。",
            board: { type: "bullets", heading: "🚫 內容紅線", items: [
              { icon: "🔞", label: "未成年意象", text: "年齡不明、校園未成年扮演，一律禁止" },
              { icon: "👥", label: "未授權第三人", text: "每位出演者都要證件驗證＋同意書" },
              { icon: "⚠️", label: "暴力與危險行為", text: "含非自願內容、武器" },
              { icon: "🐾", label: "動物與藥物", text: "相關題材一律避免" } ], reveal: 4 } },
          { only: "tw", pose: "talk", tts: "[explaining, calm] 在台灣，刑法二三五條處罰散布猥褻物品。但司法院釋字六一七號說明，如果有「適當的安全隔絕措施」，例如登入、付費、年齡驗證，一般人看不到，就不一定構成。",
            board: { type: "big", label: "台灣：刑法 §235 × 釋字 617", value: "安全隔絕措施", note: "付費、登入、年齡驗證等措施，讓一般人無法任意見聞 → 公開平台切勿放露骨內容",
              source: "資料來源：司法院釋字第 617 號解釋、刑法第 235 條（非法律意見）" } },
          { only: "intl", pose: "talk", tts: "[explaining, calm] 法律每個國家都不一樣。有的國家要求年齡驗證，有的要求保存出演者紀錄，像美國的 2257 條款。上架前，一定要查清楚你所在地跟拍攝地的規定。",
            board: { type: "big", label: "各國法規不同", value: "先查當地法律", note: "年齡驗證、出演者紀錄（如美國 18 U.S.C. §2257）、成人內容限制 → 以所在地與拍攝地為準" } },
          { only: "tw", pose: "warn", tts: "[firm, protective] 反過來說，如果有人未經同意散布你的私密影像，這是犯罪，最重可以判五年。你可以向衛福部的性影像處理中心申訴，協助下架。",
            board: { type: "stats", heading: "🛡️ 被外流時的保護", items: [
              { value: "§319-3", label: "未經同意散布性影像" },
              { value: "最高 5 年", label: "有期徒刑，得併科罰金" },
              { value: "性影像處理中心", label: "衛福部：協助通知平台下架" },
              { value: "先留證", label: "網址、截圖、時間" } ],
              source: "資料來源：刑法妨害性隱私及不實性影像罪章、衛生福利部性影像處理中心" } },
          { pose: "point", tts: "[helpful, protective] 如果私密影像被外流，也可以用 StopNCII.org：它在你的裝置上產生影像的數位指紋，照片本身不會上傳。合作平台像 Meta、TikTok、Reddit、OnlyFans，就能自動攔截相同的影像。",
            board: { type: "steps", heading: "🛡️ StopNCII.org 怎麼運作", items: [
              { label: "在你的裝置上產生指紋", text: "照片本身不會上傳" },
              { label: "指紋分享給合作平台", text: "Meta・TikTok・Reddit・OnlyFans 等" },
              { label: "有人上傳相同影像", text: "平台比對後審查攔截" } ], reveal: 3,
              source: "資料來源：StopNCII.org（SWGfL 營運）" } },
          { pose: "talk", tts: "[explaining] 版權的部分：合約要寫清楚作品歸誰、授權的平台、期限、地區，還有原始檔的持有權。音樂、字體、濾鏡都要能商用。",
            board: { type: "bullets", heading: "©️ 版權與素材", items: [
              { icon: "📄", label: "著作權歸屬", text: "平台、期限、地域、商用／再授權" },
              { icon: "🗂️", label: "RAW 持有權", text: "原始檔與剪輯檔歸誰" },
              { icon: "🎵", label: "第三方素材", text: "音樂字體濾鏡須可商用" },
              { icon: "🧯", label: "防盜維權", text: "水印＋通知—移除流程（DMCA）" } ], reveal: 4 } },
          { pose: "talk", tts: "[calm, practical] 稅務：把收入分類記錄，訂閱、單片、小費、分潤分開；保留平台報表跟匯款紀錄。器材、場租、後製、廣告這些成本也要留單據，請會計師幫你規劃。",
            board: { type: "bullets", heading: "🧾 稅務與金流", items: [
              { icon: "🗃️", label: "收入分類", text: "訂閱／單片／小費／聯名分潤" },
              { icon: "📑", label: "保留憑證", text: "平台結算報表、匯款紀錄、收據" },
              { icon: "🧰", label: "成本明細", text: "器材、場租、後製、廣告" },
              { icon: "🌐", label: "跨境", text: "來源地／居住地課稅 → 找會計師" } ], reveal: 4 } },
          { pose: "warn", tts: "[very serious] 地區差異：多數穆斯林國家、威權或保守國家，都明令禁止成人內容製作跟散布。旅拍前一定要查當地法規，場地許可不會改變刑法。" }
        ]
      },
      {
        id: "8.2",
        title: "自身安全 Final Check",
        lines: [
          { pose: "talk", tts: "[serious, caring] 第二節：自身安全最終檢查。我們一項一項勾，全部勾完才算真的準備好。",
            board: { type: "title", kicker: "MODULE 8 · 8.2", title: "自身安全 Final Check", sub: "身分保護・資料安全・合作合約" } },
          { pose: "point", tts: "[clear] 第一組，身分與設備：藝名、專用信箱跟電話、關閉照片定位；手機電腦全碟加密、強密碼加雙重驗證、用可信的 VPN。",
            board: { type: "checklist", id: "c82a", heading: "🔐 身分與設備", items: [
              { label: "身分分離", text: "藝名、分離帳號、專用信箱與電話" },
              { label: "關閉定位", text: "相機與社群關閉定位，隱藏拍攝地外觀" },
              { label: "裝置加密", text: "手機／電腦全碟加密、定期更新系統" },
              { label: "強密碼＋2FA", text: "密碼管理器、雙重驗證、備份碼" },
              { label: "公共網路用 VPN", text: "選擇可信任的服務" } ], reveal: 1 } },
          { pose: "talk", tts: "[explaining] 一個小動作很重要：手機相機的「位置標記」要關掉。不然照片裡，可能藏著你家的 GPS 座標。", reveal: 2 },
          { pose: "point", tts: "[clear] 第二組，資料、現場跟合約：同意書跟原始檔分開加密、雙備份；拍攝前交換安全詞；合約要包含授權、保密、場地許可跟爭議解決。",
            board: { type: "checklist", id: "c82b", heading: "📋 資料・現場・合約", items: [
              { label: "資料雙備份", text: "原始檔與同意書分開加密，雲端＋本地" },
              { label: "現場安全", text: "到場聯絡人、安全詞／手勢、撤離動線" },
              { label: "演出＋授權合約", text: "平台／期限／地域、RAW 持有、下架流程" },
              { label: "NDA 與場地許可", text: "禁止外流、商業拍攝書面同意" },
              { label: "爭議解決", text: "管轄地、準據法、調解／仲裁" } ], reveal: 1 } },
          { pose: "warn", tts: "[firm] 最後，準備好你的緊急聯絡表、醫療跟法律支援名單。遇到越界，馬上停拍並記錄；遇到侵權，就依合約跟證據處理。", reveal: 5 },
          { pose: "point", tts: "[playful, caring] 好，現在換你了！把兩張清單都勾完，你就是一個能安心經營的創作者了。" }
        ]
      },
      {
        id: "8.3",
        title: "總結：可持續成長",
        lines: [
          { pose: "talk", tts: "[warm, reflective] 第三節，也是整堂課的總結：好的內容，加上正確的渠道，再加上長期的關係，等於可持續的成長。",
            board: { type: "formula", heading: "可持續成長公式", parts: ["好的內容", "＋", "正確渠道", "＋", "長期關係", "＝", "可持續成長"], example: "內容是根，渠道是路，關係是橋" } },
          { pose: "point", tts: "[explaining] 內容，要有穩定節奏跟招牌題材；渠道，社群拉新、流量池承接、訂閱轉化、私域沉澱；關係，靠分層福利、DM 劇本跟驚喜機制。",
            board: { type: "bullets", heading: "🌱 三個支柱", items: [
              { icon: "🎬", label: "內容", text: "穩定節奏＋招牌題材，安全合規、可複製" },
              { icon: "🛤️", label: "渠道", text: "社群拉新 → 流量池承接 → 訂閱轉化 → 私域沉澱" },
              { icon: "💞", label: "關係", text: "分層福利、DM 劇本、驚喜機制 → 提升 LTV" } ], reveal: 3 } },
          { pose: "talk", tts: "[inspiring] 三者互相強化，就會形成一個正循環：製作、導流、轉化、留存、回看數據，再製作。",
            board: { type: "cycle", heading: "🔁 成長正循環", items: ["製作", "導流", "轉化", "留存", "回看數據", "再製作"] } },
          { pose: "warn", tts: "[sincere, emphatic] 最後，請把合規跟安全，放在一切之上。清楚的法律跟資料保護，才能讓你的成長跑得長、跑得穩。" }
        ]
      }
    ]
  }
);
