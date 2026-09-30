// English course script: Modules 3–8 — mirrors script_m3_8.js line-for-line.
window.COURSE_EN.modules.push(
  // ───────────────────────── MODULE 3 ─────────────────────────
  {
    id: "m3",
    no: 3,
    title: "Shooting & Content",
    outcome: "Create content that converts, and shoot safely and legally",
    bg: "studio",
    intro: {
      lines: [
        { pose: "cheer", tts: "[excited] Welcome to chapter three: shooting and content! This is the one everyone's been waiting for!",
          board: { type: "chapter", no: 3, title: "Shooting & Content", items: ["3.1 What makes a good photo", "3.2 What makes a good video", "3.3 Angles · expressions · mood", "3.4 Shooting safety"], goal: "Create content that converts, and shoot safely and legally" } },
        { pose: "talk", tts: "[confident] In this business, you are the product. This chapter teaches you to use light, framing, rhythm, and emotion to make content people stop for, and pay for." },
        { pose: "point", tts: "[playful] You don't need expensive gear. One phone and one window, and you can start!" }
      ]
    },
    outro: {
      lines: [
        { pose: "talk", tts: "[warm] That's a wrap on chapter three! Remember these five points, and your content will outsell the rest.",
          board: { type: "bullets", heading: "📝 Module 3 recap", items: [
            { icon: "🔍", label: "Fill the frame", text: "60–70% of the thumbnail" },
            { icon: "⏱️", label: "First 3 seconds", text: "Hook first, story second" },
            { icon: "🎥", label: "Signature angles", text: "High · low · close-up" },
            { icon: "🧩", label: "Sell in parts", text: "Split paid content into 5" },
            { icon: "📝", label: "Contracts & consent", text: "Verify everyone on camera" } ], reveal: 5 } },
        { pose: "cheer", tts: "[excited, proud] Congrats on finishing Module 3! You now know how to shoot content that actually earns.",
          board: { type: "done", title: "Module 3 complete!", text: "Outcome: create content that converts, and shoot safely and legally" } },
        { pose: "point", tts: "[energetic] Your content is ready, but where does it go, and how do more people see it? Next chapter, we draw your traffic map!" }
      ]
    },
    lessons: [
      {
        id: "3.1",
        title: "What makes a good photo",
        lines: [
          { pose: "talk", tts: "[cheerful] Lesson one: what makes a good photo? Just three keywords: light, framing, and story.",
            board: { type: "title", kicker: "MODULE 3 · 3.1", title: "What makes a good photo?", sub: "Light · Framing · Story" } },
          { pose: "point", tts: "[confident] Start with the simplest rule: make yourself big! You're the subject, so fill about sixty to seventy percent of the thumbnail.",
            board: { type: "big", label: "Rule number one", value: "Subject = 60–70%", note: "The smaller the thumbnail, the closer you get → instantly readable mid-scroll" } },
          { pose: "talk", tts: "[explaining] See the difference: on the left, she fills two-thirds of the frame and reads instantly as a thumbnail. On the right, she's tiny, and nobody stops scrolling.",
            board: { type: "photos", heading: "📸 Subject size: side by side", items: [ { src: "fill_good", tag: "good", cap: "Fills about 2/3" }, { src: "fill_bad", tag: "bad", cap: "Too small, too much room" } ] } },
          { pose: "talk", tts: "[explaining] Light: the subject should be a little brighter than the background, about half a stop to a stop and a half. No harsh shadows on the face, and a little sparkle in the eyes brings you to life.",
            board: { type: "bullets", heading: "💡 Light", items: [
              { icon: "☀️", label: "Clear key light", text: "Window light + diffusion" },
              { icon: "🌗", label: "Subject > background", text: "About +0.5 to 1.5 stops" },
              { icon: "✨", label: "Catchlight", text: "A sparkle in the eyes" },
              { icon: "🙅", label: "No harsh shadows", text: "Soft, layered shadows on the face" },
              { icon: "🌃", label: "At night", text: "Side or back light to outline you" } ], reveal: 5 } },
          { pose: "point", tts: "[explaining] A real example: on the left, soft window light from the side, depth on the face, a sparkle in the eyes. On the right, only harsh ceiling light, dark eye sockets, and a messy background.",
            board: { type: "photos", heading: "📸 Light: side by side", items: [ { src: "light_good", tag: "good", cap: "Window side light · catchlight" }, { src: "light_bad", tag: "bad", cap: "Overhead light · harsh · messy" } ] } },
          { pose: "talk", tts: "[teaching] For framing, use the rule of thirds: split the frame into a tic-tac-toe grid and put your eyes on an intersection. And don't crop right at the neck or joints; it looks weird.",
            board: { type: "bullets", heading: "📐 Framing", items: [
              { icon: "#️⃣", label: "Rule of thirds", text: "Eyes or subject on an intersection" },
              { icon: "🧅", label: "Three layers", text: "Foreground · subject · background" },
              { icon: "👀", label: "Look room", text: "Leave space where you're looking" },
              { icon: "✂️", label: "Don't cut joints", text: "Not at the neck, hands, or feet" },
              { icon: "📏", label: "Level lines", text: "Straight horizon and verticals" } ], reveal: 5 } },
          { pose: "point", tts: "[explaining] Framing compared: on the left, her eyes sit on a third line, with clear foreground, subject, and background. On the right, a tilted horizon, cropped neck and wrists, and a lamp growing out of her head.",
            board: { type: "photos", heading: "📸 Framing: side by side", items: [ { src: "frame_good", tag: "good", cap: "Thirds + three layers" }, { src: "frame_bad", tag: "bad", cap: "Tilted · cut joints · clutter" } ] } },
          { pose: "talk", tts: "[storytelling] Story means: one photo, one story. Character, mood, and props should match. A coffee cup, a mirror, an oversized shirt, they all help tell it.",
            board: { type: "analogy", heading: "📖 Story: one photo, one story", items: [
              { icon: "🎭", label: "Character + mood", text: "Who are you? How do you feel? Hands and eyes are the clues" },
              { icon: "☕", label: "Scene + props", text: "Fabric, cups, mirrors give cause and effect; keep outfit and tone consistent" } ] } },
          { pose: "talk", tts: "[storytelling] Like this one: a sunny window in the morning, an oversized white shirt, coffee in both hands, an open book on the bed. No words needed, everyone gets the story.",
            board: { type: "photos", heading: "📸 Story: one photo, one story", items: [ { src: "story", tag: "", cap: "A lazy morning" } ] } },
          { pose: "point", tts: "[playful, strategic] Tip: shoot the same scene in three moods: calm, playful, and peak. One set becomes a social teaser, a public post, and paid content.",
            board: { type: "photos", heading: "🎞️ One scene, three moods", items: [ { src: "mood_calm", tag: "", cap: "Calm → social teaser" }, { src: "mood_play", tag: "", cap: "Playful → public post" }, { src: "mood_peak", tag: "", cap: "Peak → paid PPV" } ] } },
          { pose: "warn", tts: "[serious, warning] Every platform has different limits! TikTok is strictest, no cleavage or underboob. Instagram and Facebook share rules: no nipples, and no links in posts. On X, turn on the sensitive content setting.",
            board: { type: "compare", heading: "⚠️ Social platform limits (safe versions)", rows: [
              { k: "TikTok", v: "Strictest: no cleavage or underboob; waist, legs, arms only" },
              { k: "IG / FB", v: "Same Meta rules: no nipples, no heavy innuendo, no links in posts" },
              { k: "Threads", v: "Linked to IG; hot takes get shared" },
              { k: "X", v: "Turn on sensitive content; cleavage max on a general account" } ], reveal: 4,
              source: "Source: TikTok Community Guidelines, Meta Community Standards, X adult content policy + instructor experience" } },
          { pose: "talk", tts: "[helpful] Specs to remember: vertical nine by sixteen, ten eighty by nineteen twenty. That works for Reels, Stories, and PPV covers. And leave a safe zone for text.",
            board: { type: "stats", heading: "📱 Universal specs", items: [
              { value: "9:16", label: "Vertical ratio" },
              { value: "1080×1920", label: "Resolution" },
              { value: "60–70%", label: "Subject in thumbnail" },
              { value: "Margins", label: "Text safe zone" } ] } },
          { pose: "cheer", tts: "[encouraging] Shoot with light, framing, and story in mind, and your photos will look great and make people stop and pay!" }
        ]
      },
      {
        id: "3.2",
        title: "What makes a good video",
        lines: [
          { pose: "talk", tts: "[energetic] Lesson two: what makes a good video? Rhythm, sound, and mood, all lined up.",
            board: { type: "title", kicker: "MODULE 3 · 3.2", title: "What makes a good video?", sub: "Rhythm · Sound · Mood" } },
          { pose: "think", tts: "[curious] First, a question: with so many free videos online, why would fans pay for yours?" },
          { pose: "talk", tts: "[sincere, intimate] Here's a secret: my best-selling video was just me folding laundry and getting surprised from behind. Fans often want real, sweet moments.",
            board: { type: "big", label: "Instructor's rule", value: "If fans buy it, it's good", note: "A real, peek-behind-the-curtain feeling and everyday sweetness — free videos can't give that" } },
          { pose: "point", tts: "[explaining] For paid long videos, I structure it like this: one to two minutes of story, three to six minutes of flirting, seven to ten minutes building to the peak, then a wrap-up. Five to twenty-five minutes all work.",
            board: { type: "steps", heading: "🎬 Paid video rhythm (13-min example)", items: [
              { label: "1–2 min: story", text: "Setting, character, why it starts" },
              { label: "3–6 min: flirting", text: "Interact with viewer or partner" },
              { label: "7–10 min: peak", text: "Slow down, then speed up" },
              { label: "11–13 min: wrap", text: "Aftermath, leave them wanting more" } ], reveal: 4 } },
          { pose: "warn", tts: "[confident, emphatic] Long or short, the first three seconds matter most! TikTok found that over sixty percent of top click-through videos show the key message in the first three seconds.",
            board: { type: "big", label: "The first 3 seconds", value: "63%", note: "63% of top-CTR TikTok videos show their key message within the first 3 seconds",
              source: "Source: TikTok for Business creative insights" } },
          { pose: "talk", tts: "[teaching] Bad sound makes people leave faster than bad video. Voice first, reduce noise, then add a little compression so the volume stays even.",
            board: { type: "bullets", heading: "🎧 Sound", items: [
              { icon: "🗣️", label: "Voice first", text: "Clean 2–4 kHz speech range" },
              { icon: "🔇", label: "Denoise first", text: "Then ~3:1 compression" },
              { icon: "🏙️", label: "Hear the scene", text: "Light room reverb, city ambience" },
              { icon: "🎼", label: "Licensed music", text: "Avoid copyright takedowns" } ], reveal: 4 } },
          { pose: "talk", tts: "[dreamy, soft] Mood makes the whole video feel like one world: one main color, one accent, consistent light direction, and the same style for captions and covers.",
            board: { type: "bullets", heading: "🌙 Mood", items: [
              { icon: "🎨", label: "Consistent color", text: "1 main + 1 accent, natural skin tones" },
              { icon: "💡", label: "Consistent light", text: "Same shadow direction across angles" },
              { icon: "🔤", label: "Brand language", text: "Captions, transitions, fonts, covers" } ], reveal: 3 } },
          { pose: "point", tts: "[playful] Short social videos are different: tell a tiny story in seven seconds, with a twist! Ideally hit two notes at once, like sexy plus funny, or sexy plus heartfelt.",
            board: { type: "stats", heading: "⚡ Short social videos", items: [
              { value: "7 sec", label: "A full story + twist" },
              { value: "21–34 sec", label: "Best TikTok completion" },
              { value: "≤ 3 min", label: "IG Reels max (best 45–60s)" },
              { value: "2 notes", label: "Sexy + funny / heartfelt" } ],
              source: "Source: Instagram 2025 Reels length update, TikTok length & retention studies" } },
          { pose: "talk", tts: "[helpful] Here's your toolkit: edit with CapCut, Edits, or InShot; beautify with Meitu; and schedule with Buffer to post to several platforms at once.",
            board: { type: "compare", heading: "🧰 Toolkit", rows: [
              { k: "Editing", v: "CapCut · Edits · InShot (captions, effects, SFX)" },
              { k: "Beauty", v: "Meitu · BeautyCam" },
              { k: "Voice", v: "ElevenLabs: build your own AI voice" },
              { k: "Translate", v: "Rask: auto multi-language (non-adult only)" },
              { k: "Schedule", v: "Buffer: post to many platforms at once" } ], reveal: 5 } },
          { pose: "cheer", tts: "[encouraging] Finally, all learning starts with imitation. Find videos with lots of shares and use them as templates. Shares, not likes!" }
        ]
      },
      {
        id: "3.3",
        title: "Angles · expressions · mood",
        lines: [
          { pose: "talk", tts: "[flirty, playful] Lesson three: angles, expressions, and guiding emotion. This is the magnetism that makes people want to pay.",
            board: { type: "title", kicker: "MODULE 3 · 3.3", title: "Angles · Expressions · Mood", sub: "Building paid-worthy presence" } },
          { pose: "point", tts: "[teaching] Build a signature angle menu: high angle with a three-quarter face looks cute; low angle shows off body lines and long legs; get close and hold eye contact for three seconds, that's intimacy.",
            board: { type: "bullets", heading: "🎥 Signature angle menu", items: [
              { icon: "⬆️", label: "High + 3/4 face", text: "With soft light → cute" },
              { icon: "⬇️", label: "Low angle", text: "Body lines → long legs, presence" },
              { icon: "🔎", label: "Close-up", text: "Hold eye contact 3 s → intimacy" },
              { icon: "↔️", label: "Profile vs space", text: "Mystery and story" } ], reveal: 4 } },
          { pose: "point", tts: "[teaching] Here's what the four angles look like: high angle looks cute, low angle makes legs look long, close-up feels intimate, and a profile with space tells a story.",
            board: { type: "photos", heading: "📸 Angle menu: examples", items: [ { src: "angle_high", tag: "", cap: "High + 3/4 face" }, { src: "angle_low", tag: "", cap: "Low · longer legs" }, { src: "angle_close", tag: "", cap: "Close · eye contact" }, { src: "angle_side", tag: "", cap: "Profile + space" } ] } },
          { pose: "talk", tts: "[soft, intimate] Practice an expression sequence: smiling eyes, parted lips, a sideways glance at the camera, a soft breath. Practice in the mirror until it flows.",
            board: { type: "steps", heading: "😊 Expression sequence (mirror practice)", items: [
              { label: "Smiling eyes", text: "Let your eyes smile first" },
              { label: "Parted lips", text: "Relax your mouth" },
              { label: "Side glance", text: "Close, then distant" },
              { label: "Soft breath", text: "Chest and shoulders move slightly" } ], reveal: 4 } },
          { pose: "talk", tts: "[explaining] Emotion needs direction: cute for the first ten seconds, flirty from twenty to forty, and always end on suspense, like looking off camera or turning off the light.",
            board: { type: "flow", heading: "💞 Emotion script", items: [
              { icon: "🍓", label: "0–10 s", sub: "Cute" }, { icon: "💋", label: "20–40 s", sub: "Flirty" }, { icon: "🔥", label: "Peak", sub: "Sexy" }, { icon: "🌙", label: "Ending", sub: "Suspense · lights off" } ] } },
          { pose: "point", tts: "[strategic] For paid content, split it into five parts and sell them one by one. Start with the story, warm up slowly, and save the peak for last. Every part makes them want the next.",
            board: { type: "steps", heading: "🧩 Sell paid content in 5 parts", items: [
              { label: "Part 1: story", text: "Set the scene and expectation" },
              { label: "Part 2: flirting", text: "Close the distance" },
              { label: "Part 3: warming up", text: "Slowly raise the heat" },
              { label: "Part 4: build", text: "Stack the tension" },
              { label: "Part 5: peak", text: "Highest price, most worth it" } ], reveal: 5 } },
          { pose: "talk", tts: "[warm] Always have a theme! Everyday scenes resonate most: folding laundry, cooking dinner, being on a video call. Everyone can picture it.",
            board: { type: "bullets", heading: "🏠 Everyday theme ideas", items: [
              { icon: "👕", label: "Folding laundry", text: "Cozy, relaxed, surprise" },
              { icon: "🍳", label: "Cooking dinner", text: "Warm, girlfriend vibe" },
              { icon: "💻", label: "Video call", text: "Contrast, thrill" },
              { icon: "🏋️", label: "After a workout", text: "Healthy, real" } ], reveal: 4 } },
          { pose: "cheer", tts: "[excited] Train your angles, expressions, and emotion, and you'll have a charm no one can copy!" }
        ]
      },
      {
        id: "3.4",
        title: "Shooting safety",
        lines: [
          { pose: "warn", tts: "[serious, caring] Lesson four is important: safety on set. Whoever you work with, your safety always comes first.",
            board: { type: "title", kicker: "MODULE 3 · 3.4", title: "Shooting safety", sub: "Photographers · Locations · Legal risk" } },
          { pose: "warn", tts: "[firm] With a photographer, always sign a contract and a model release. Agree on pay, delivery dates, and editing scope. And set a safe word and a safe gesture, so you can stop anytime you feel uncomfortable.",
            board: { type: "bullets", heading: "🤝 Working safely", items: [
              { icon: "📝", label: "Contract + release", text: "Pay, delivery, editing scope" },
              { icon: "🛑", label: "Safe word + gesture", text: "Stop anytime — feelings matter" },
              { icon: "📏", label: "Agree on limits", text: "Boundaries in writing" },
              { icon: "📞", label: "On-site contact", text: "Someone you trust knows where you are" } ], reveal: 4 } },
          { pose: "warn", tts: "[serious] OnlyFans requires that anyone seen or heard in your content verifies their ID and signs a release, partners included. Without paperwork, posts can be removed, or your account suspended.",
            board: { type: "big", label: "OnlyFans rule", value: "Verify everyone on camera", note: "Anyone seen or heard counts → ID + selfie + release form (or tag their verified account)",
              source: "Source: OnlyFans terms & creator release form guides" } },
          { pose: "talk", tts: "[instructive] Choose a legal, private space you control. Check the exits and any cameras when you arrive. For an Airbnb, you need the host's written consent for commercial and adult shoots.",
            board: { type: "bullets", heading: "📍 Choosing a location", items: [
              { icon: "🔐", label: "Legal, private, controlled", text: "No public places, no bystanders" },
              { icon: "🚪", label: "Check exits", text: "Cameras and escape routes" },
              { icon: "🔊", label: "Neighbors & noise", text: "Keep light and sound private" },
              { icon: "🏠", label: "Airbnb / hotels", text: "Written consent for adult shoots" } ], reveal: 4 } },
          { pose: "warn", tts: "[very serious] Be extra careful abroad: most Muslim-majority countries, Singapore, mainland China and others impose serious criminal penalties on making or distributing adult content. A venue's permission doesn't change local law.",
            board: { type: "big", label: "Check before travel shoots", value: "Venue OK ≠ legal", note: "Most Muslim-majority jurisdictions, Singapore, mainland China and others have strict criminal penalties" } },
          { pose: "talk", tts: "[calm, protective] Finally, have a risk plan: an emergency contact list and an exit plan. If a line is crossed, stop and document it. If there's a dispute, use your contract and evidence. Never settle it privately.",
            board: { type: "steps", heading: "🚨 Risk response", items: [
              { label: "Before", text: "Emergency contacts + exit plan" },
              { label: "Line crossed", text: "Stop immediately and document" },
              { label: "After", text: "Encrypt raw files, limit access" },
              { label: "Disputes", text: "Contract + evidence, never private deals" } ], reveal: 4 } },
          { pose: "cheer", tts: "[warm, protective] When you're safe, you can create with peace of mind, for the long run. That matters more than any viral hit!" }
        ]
      }
    ]
  },

  // ───────────────────────── MODULE 4 ─────────────────────────
  {
    id: "m4",
    no: 4,
    title: "Platforms & Traffic",
    outcome: "Build an outside traffic network to boost reach and conversion",
    bg: "city",
    intro: {
      lines: [
        { pose: "cheer", tts: "[excited] Welcome to chapter four: platforms and traffic!",
          board: { type: "chapter", no: 4, title: "Platforms & Traffic", items: ["Adult sales & sub platforms", "Adult traffic pools", "Mainstream social", "Owned channels", "OFTV & YouTube", "Link pages & redirects", "When accounts get banned"], goal: "Build an outside traffic network to boost reach and conversion" } },
        { pose: "talk", tts: "[energetic] Remember? OnlyFans won't find fans for you. In this chapter, we draw a traffic map, so fans walk into your shop from every direction.",
          board: { type: "funnel", heading: "🗺️ Traffic map", stages: [
            { label: "Mainstream social", sub: "TikTok · IG · X · Reddit" },
            { label: "Adult traffic + sales", sub: "PH · XH · ManyVids · Fansly" },
            { label: "Owned + subscription", sub: "Telegram · website · OnlyFans" } ] } }
      ]
    },
    outro: {
      lines: [
        { pose: "talk", tts: "[warm] Chapter four in one view: four types of platforms, each with its own job.",
          board: { type: "compare", heading: "📝 Module 4 recap", rows: [
            { k: "Sales / subs", v: "ManyVids, Fansly…: extra income, feeds OF" },
            { k: "Traffic pools", v: "PH, XH: highlight teasers, top of funnel" },
            { k: "Social", v: "TikTok, IG, X, Reddit: safe content, get seen" },
            { k: "Owned", v: "Telegram, website: fans you keep if banned" },
            { k: "OFTV / YT", v: "Safe long-form video, inside and outside OF" },
            { k: "Ban mindset", v: "Bans are a cost; two-layer links; back up fans" } ], reveal: 6 } },
        { pose: "cheer", tts: "[excited, proud] Congrats on finishing Module 4! Your traffic map is drawn.",
          board: { type: "done", title: "Module 4 complete!", text: "Outcome: an outside traffic network to boost reach and conversion" } },
        { pose: "point", tts: "[energetic] You have the map; now you walk it every week. Next chapter, I'll give you a weekly plan you can copy!" }
      ]
    },
    lessons: [
      {
        id: "4.1",
        title: "Adult sales & sub platforms",
        lines: [
          { pose: "talk", tts: "[cheerful] Lesson one: besides OnlyFans, which adult platforms can you open? Let's go one by one.",
            board: { type: "title", kicker: "MODULE 4 · 4.1", title: "Adult platforms", sub: "ManyVids · Fansly · Fantia · MyVids and more" } },
          { pose: "point", tts: "[explaining] First, fees and features. Remember, the lowest fee isn't always best. Built-in traffic matters too.",
            board: { type: "compare", heading: "💸 Platform fees compared", rows: [
              { k: "ManyVids", v: "Clip sales; you keep 60% on vids, 80% on subs & tips; leaderboards" },
              { k: "Fansly", v: "Like OF, 20% fee; tiered subs; crypto payouts" },
              { k: "Fantia", v: "Japan; membership tiers; from 10%; strict review" },
              { k: "MyVids", v: "Japan; direct video sales; 20–30%; leaderboards" } ], reveal: 5,
              source: "Source: ManyVids payout docs, Fansly / Fantia terms, instructor experience" } },
          { pose: "talk", tts: "[explaining] ManyVids is built for clip sales. You keep sixty percent on videos, but its leaderboards get you exposure, great for sending traffic back to OnlyFans." },
          { pose: "talk", tts: "[explaining] Fansly is a lot like OnlyFans. It also takes twenty percent, and it pays out in crypto, which is where the crypto exchanges from chapter two come in." },
          { pose: "talk", tts: "[friendly] Fantia from Japan only takes about ten percent, but its review is strict, so keep your tags and ratings clear." },
          { pose: "warn", tts: "[very serious] Must-know for Japanese platforms: Article 175 of Japan's Criminal Code requires genitals to be mosaicked. In May 2026, after police guidance, Fantia sharply tightened its mosaic standard for live-action content, and even past works had to be re-edited.",
            board: { type: "bullets", heading: "🗾 Japanese platforms (Fantia etc.): must-know rules", items: [
              { icon: "🔲", label: "Mosaic required", text: "Genitals must be fully obscured; too-thin mosaic can still be illegal" },
              { icon: "⚖️", label: "Criminal Code Art. 175", text: "Distributing obscene material: up to 2 years or ¥2.5M fine" },
              { icon: "📅", label: "Stricter since May 2026", text: "Applies to live-action; past works must be re-edited" },
              { icon: "💳", label: "Payments", text: "Visa / Mastercard suspended since May 2024; JCB, AMEX, konbini, PayPay instead" } ], reveal: 4,
              source: "Source: Fantia announcements, ITmedia NEWS (Jun 2026), Japan Criminal Code Art. 175" } },
          { pose: "talk", tts: "[strategic] So make two versions of each video: the uncensored version for OnlyFans and Fansly, and a properly mosaicked version for Japanese platforms. Also, many Japanese fans pay at convenience stores or with PayPay, so factor that into your pricing and promotions." },
          { pose: "point", tts: "[strategic] The strategy is simple: full videos go on sales platforms, short teasers go to traffic pools, linked by the same titles and thumbnails. Three price tiers, plus limited-time discounts.",
            board: { type: "bullets", heading: "🧭 Traffic strategy", items: [
              { icon: "🎬", label: "Distribution", text: "Full videos → sales; teasers → traffic pools" },
              { icon: "🪜", label: "Three tiers", text: "Basic · plus · deluxe + time limits" },
              { icon: "🏷️", label: "Source codes", text: "One promo code each for IG / X / Reddit" },
              { icon: "🔗", label: "Tracking", text: "Instructor uses link.me for clicks" } ], reveal: 4 } },
          { pose: "cheer", tts: "[encouraging] Check weekly which source converts best, and double down there!" }
        ]
      },
      {
        id: "4.2",
        title: "Adult traffic pools",
        lines: [
          { pose: "talk", tts: "[energetic] Lesson two: traffic pools. Pornhub and Xhamster are where tons of strangers meet you for the first time.",
            board: { type: "title", kicker: "MODULE 4 · 4.2", title: "Adult traffic pools", sub: "Pornhub · Xhamster" } },
          { pose: "point", tts: "[explaining] Pornhub is the world's biggest adult traffic pool. Its algorithm loves high completion and engagement. Xhamster's search and tags are precise, great for niche themes.",
            board: { type: "analogy", heading: "Two pools, two personalities", items: [
              { icon: "🌊", label: "Pornhub", text: "Biggest pool; completion & engagement → dense highlights" },
              { icon: "🔎", label: "Xhamster", text: "Search & tags → long-tail keywords, niche series" } ] } },
          { pose: "talk", tts: "[teaching] Cut your footage: thirty to ninety second dense highlights, or three to five minute story versions. Always put the platform name and a promo code at the end and in the pinned comment.",
            board: { type: "stats", heading: "✂️ Upload specs", items: [
              { value: "30–90 sec", label: "Dense highlights" },
              { value: "3–5 min", label: "Story version" },
              { value: "5–10", label: "Topic tags" },
              { value: "End CTA", label: "Platform + promo code" } ] } },
          { pose: "talk", tts: "[sharing a tip] Titles: keyword plus theme plus character. Add language, region, and style tags to catch long-tail searches. When you're new, you can even try leaked-style keywords." },
          { pose: "point", tts: "[clear] The path: traffic pool, to your link page or website, then to your sales or subscription platform. Use a separate promo code per platform, check click-through and conversion weekly, and cut edits that don't work.",
            board: { type: "funnel", heading: "Funnel & tracking", stages: [
              { label: "PH · XH highlights", sub: "Separate promo code / UTM per platform" },
              { label: "Link-in-bio / website", sub: "Landing page" },
              { label: "Sales · subscriptions", sub: "ManyVids · Fansly · OnlyFans" } ] } },
          { pose: "warn", tts: "[serious] Compliance reminder: absolutely no underage imagery and no unauthorized third parties. Use commercially licensed music and fonts, and add copyright notices." }
        ]
      },
      {
        id: "4.3",
        title: "Mainstream social",
        lines: [
          { pose: "talk", tts: "[upbeat] Lesson three: mainstream social. TikTok, Instagram, Facebook, X, and Reddit, where the most people discover you.",
            board: { type: "title", kicker: "MODULE 4 · 4.3", title: "Mainstream social", sub: "TikTok · Instagram · Facebook · X · Reddit" } },
          { pose: "point", tts: "[impressed] Look how big the pool is: Instagram has over three billion monthly users, and TikTok nearly two billion. Every one of them is a potential fan.",
            board: { type: "stats", heading: "🌍 How big is the pool?", items: [
              { value: "3B+", label: "Instagram monthly (Sep 2025)" },
              { value: "≈ 2B", label: "TikTok monthly" },
              { value: "116M", label: "Reddit daily (late 2025)" },
              { value: "1h35m", label: "TikTok time per user per day" } ],
              source: "Source: Meta announcements, DataReportal, Reddit earnings — 2025–2026 figures" } },
          { pose: "talk", tts: "[explaining] TikTok runs on strong hooks and everyday stories; use safe teasers and behind-the-scenes to spark curiosity. On Instagram, post at least one Story a day to stay visible, and pin three posts to your profile.",
            board: { type: "compare", heading: "📲 Each platform's job", rows: [
              { k: "TikTok", v: "Strong hooks + daily stories; BTS; send to link page" },
              { k: "Instagram", v: "Daily Stories; pin 3: intro / project / links" },
              { k: "FB / Threads", v: "Link to IG; create a fan page" },
              { k: "X", v: "Frequent engagement + threads; pin your links" },
              { k: "Reddit", v: "Pick subs that allow promo; work + process, no hard sell" } ], reveal: 2 } },
          { pose: "talk", tts: "[explaining] Just link Facebook and Threads to Instagram. X is for frequent engagement, with your links pinned. On Reddit, read the rules first, lead with your work and process, and never hard-sell.", reveal: 5 },
          { pose: "point", tts: "[strategic] For each piece, prepare three thumbnails: safe, teasing, and high-converting. Social gets the safe version; sales platforms get the full version.",
            board: { type: "tiers", heading: "🖼️ Three thumbnails per piece", items: [
              { label: "Safe", icon: "🌸" }, { label: "Teasing", icon: "🎣" }, { label: "Converting", icon: "🔥" } ], note: "Public social = PG-13 safe version | Sales / subs = 18+ full version" } },
          { pose: "talk", tts: "[clear] Posting rhythm: three to five short videos, two to three photo sets, and one long post a week. Give each platform its own promo code, so you know where fans come from.",
            board: { type: "rhythm", heading: "Weekly posting volume", items: [
              { n: "3–5", unit: "per week", label: "Short videos" }, { n: "2–3", unit: "per week", label: "Photo sets" }, { n: "1", unit: "per week", label: "Long post" } ] } },
          { pose: "warn", tts: "[serious] One more reminder: avoid sensitive words and sales language in captions, use licensed music, and always watermark. A suspended account is far worse than one missed post." }
        ]
      },
      {
        id: "4.4",
        title: "Owned channels",
        lines: [
          { pose: "talk", tts: "[warm] Lesson four: owned channels. These are the fans you truly get to keep.",
            board: { type: "title", kicker: "MODULE 4 · 4.4", title: "Owned channels", sub: "Snapchat · Telegram · Wix website" } },
          { pose: "warn", tts: "[serious] Why build owned channels? Because Instagram and Facebook can delete your account at any time. Owned channels are where fans can still find you, even if an account disappears.",
            board: { type: "big", label: "Think about it", value: "Banned tomorrow — fans still there?", note: "Social media is a rented shop; owned channels are your own house" } },
          { pose: "point", tts: "[explaining] Three owned-channel tools: Snapchat for high-engagement stories; Telegram for a free group plus paid channel funnel; and a Wix website as your link hub and member center.",
            board: { type: "bullets", heading: "🏡 Three owned-channel tools", items: [
              { icon: "👻", label: "Snapchat", text: "Stories + weekly perks; use emojis & codes, no sensitive words" },
              { icon: "✈️", label: "Telegram", text: "Free group → paid channel; bots send teasers & reminders" },
              { icon: "🌐", label: "Wix website", text: "Link hub + landing page + members; payments & terms here" } ], reveal: 3 } },
          { pose: "talk", tts: "[impressed] In 2025, Telegram passed one billion monthly users. It's one of the biggest owned-channel tools in the world.",
            board: { type: "big", label: "Telegram", value: "1B+ monthly users", note: "Passed 1 billion in March 2025 → free group + paid channel funnel works great",
              source: "Source: Telegram official announcement (Mar 2025)" } },
          { pose: "point", tts: "[clear] The full path: public social, to your link page, to your website, then to a paid Telegram or Snapchat circle, and finally to your sales or subscription platform.",
            board: { type: "steps", heading: "🛤️ Owned-channel path", items: [
              { label: "Public social", text: "Safe content" },
              { label: "Link-in-bio", text: "All your links" },
              { label: "Website landing page", text: "Email list + terms" },
              { label: "Paid TG / Snap circle", text: "High-engagement retention" },
              { label: "Sales / subscription", text: "Conversion" } ], reveal: 5 } },
          { pose: "warn", tts: "[careful] Protect data too: collect only what you need, and encrypt backups. Watermark your channels. If content gets leaked, start takedowns and gather evidence." }
        ]
      },
      {
        id: "4.5",
        title: "OFTV & YouTube",
        lines: [
          { pose: "talk", tts: "[energetic] Lesson five: two powerful safe-content traffic sources, OFTV and YouTube.",
            board: { type: "title", kicker: "MODULE 4 · 4.5", title: "OFTV & YouTube", sub: "Safe long-form video traffic" } },
          { pose: "point", tts: "[explaining] OFTV is a free video platform OnlyFans launched in 2021. It's safe content only, ad-free, and works on phones and smart TVs.",
            board: { type: "stats", heading: "📺 What is OFTV?", items: [
              { value: "2021", label: "Launched by OnlyFans" },
              { value: "Free · ad-free", label: "No subscription needed" },
              { value: "SFW only", label: "Fitness · cooking · comedy · vlogs" },
              { value: "Multi-device", label: "iOS · Android · Apple TV · Roku" } ],
              source: "Source: OnlyFans announcement (2021), OFTV website" } },
          { pose: "talk", tts: "[strategic] OFTV viewers are already inside the OnlyFans world, one step from subscribing. Post one tutorial, vlog, or behind-the-scenes video a week, put your links in the description, and traffic flows naturally." },
          { pose: "cheer", tts: "[proud, nostalgic] Next, YouTube. I used to post outfit-change videos that were within the rules at the time. They brought in a huge amount of traffic, and I even earned the silver play button for a hundred thousand subscribers!",
            board: { type: "big", label: "Instructor's YouTube story", value: "🏆 100K subscribers", note: "Compliant outfit-change videos drove huge traffic — but 3 channels were later terminated" } },
          { pose: "warn", tts: "[honest, serious] But later, three of my channels were terminated. Rules change, and content that was fine before may not be fine later." },
          { pose: "point", tts: "[explaining] To earn on YouTube, you join the Partner Program. There are two tiers: five hundred subscribers unlocks fan funding; a thousand subscribers plus four thousand watch hours unlocks ad revenue.",
            board: { type: "stats", heading: "💰 YouTube Partner Program", items: [
              { value: "500 subs", label: "Fan funding + shopping (plus 3,000 hours or 3M Shorts views)" },
              { value: "1,000 subs", label: "Ad revenue (plus 4,000 hours or 10M Shorts views)" },
              { value: "From 2027", label: "New applicants: 8,000 hours / 20M Shorts" },
              { value: "0", label: "Active Community Guidelines strikes" } ],
              source: "Source: YouTube Partner Program docs & 2027 update announcement" } },
          { pose: "talk", tts: "[teaching] Content tips: Shorts get you discovered, long videos build trust. Fitness, outfits, vlogs, behind-the-scenes, and Q and A all work well.",
            board: { type: "bullets", heading: "🎬 YouTube content strategy", items: [
              { icon: "📱", label: "Shorts", text: "Get discovered, grow fast" },
              { icon: "🎞️", label: "Long videos", text: "Build trust and your brand" },
              { icon: "🏋️", label: "Safe topics", text: "Fitness · outfits · vlogs · BTS · Q&A" },
              { icon: "🔗", label: "Description", text: "Your website, never adult links" } ], reveal: 4 } },
          { pose: "warn", tts: "[serious] Remember YouTube's rule: three strikes within ninety days and your channel is terminated. For outfit or try-on content, stay far more conservative than on other platforms.",
            board: { type: "big", label: "YouTube strike system", value: "3 strikes in 90 days = gone", note: "Nudity and sexual content are the easiest lines to cross; thumbnails, titles and descriptions are reviewed too",
              source: "Source: YouTube Community Guidelines strike system" } },
          { pose: "cheer", tts: "[encouraging] OFTV inside the ecosystem, YouTube outside it. Use both, and your traffic gets much steadier!" }
        ]
      },
      {
        id: "4.6",
        title: "Link pages & redirects",
        lines: [
          { pose: "talk", tts: "[cheerful] Lesson six: link pages. When fans tap through from social, this is the first thing they see.",
            board: { type: "title", kicker: "MODULE 4 · 4.6", title: "Link pages & redirects", sub: "Linktree · link.me · Bouncy · your website" } },
          { pose: "point", tts: "[explaining] Popular tools are Linktree, link.me, and Bouncy. They put all your socials and paid sites on one page. I use link.me because it tracks clicks.",
            board: { type: "bullets", heading: "🔗 Popular link-page tools", items: [
              { icon: "🌳", label: "Linktree", text: "Most popular, fastest setup" },
              { icon: "📊", label: "link.me", text: "Click tracking (instructor's pick)" },
              { icon: "🦘", label: "Bouncy", text: "Built for creators" },
              { icon: "🧭", label: "Essentials", text: "All socials + paid sites + tracking" } ], reveal: 4 } },
          { pose: "warn", tts: "[serious] But the rules keep changing. Meta's Instagram and Facebook never allowed direct OnlyFans links, so everyone switched to link pages like Linktree. Now, even single-layer redirect pages get blocked.",
            board: { type: "steps", heading: "📜 How link rules evolved", items: [
              { label: "Before", text: "No direct OnlyFans links" },
              { label: "Then", text: "Switch to link pages like Linktree" },
              { label: "Now", text: "Single-layer redirects get blocked too" },
              { label: "Fix", text: "Your website → link page (two layers)" } ], reveal: 4 } },
          { pose: "point", tts: "[strategic] So add one more layer: social links to your own website, which looks clean and neutral, and from there to your link page and paid sites. Using your own domain lowers the risk a lot.",
            board: { type: "steps", heading: "🛤️ The safer path today", items: [
              { label: "Social bio", text: "IG · FB · TikTok" },
              { label: "Your website", text: "Own domain · neutral content" },
              { label: "Link page", text: "link.me · Linktree · Bouncy" },
              { label: "Paid sites", text: "OnlyFans · Fansly · clip stores" } ], reveal: 4 } },
          { pose: "talk", tts: "[sharing a tip] Tip: right now, Threads doesn't block these links. So put your link on Threads, and have your other platforms point to Threads.",
            board: { type: "big", label: "Current tip", value: "Put the link on Threads", note: "Other platforms → Threads → paid site | rules can change anytime" } },
          { pose: "warn", tts: "[careful] Remember, these rules can change anytime. Check monthly: do your links still open? Are they restricted? Has your account received any warnings?" },
          { pose: "talk", tts: "[teaching] Finally, give each platform's link its own tracking tag and promo code, so you know where your fans come from.",
            board: { type: "bullets", heading: "📊 Link tracking", items: [
              { icon: "🏷️", label: "UTM tags", text: "e.g. ?utm_source=threads" },
              { icon: "🎟️", label: "Promo codes", text: "One per platform" },
              { icon: "📅", label: "Monthly check", text: "Links working, any restrictions" } ], reveal: 3 } }
        ]
      },
      {
        id: "4.7",
        title: "When accounts get banned",
        lines: [
          { pose: "think", tts: "[gentle, sincere] Lesson seven. I want to talk about something very real: getting banned.",
            board: { type: "title", kicker: "MODULE 4 · 4.7", title: "When accounts get banned", sub: "Mindset · causes · prevention · backup" } },
          { pose: "talk", tts: "[honest, a bit emotional] Honestly, I've had ten accounts banned: five on Instagram, three on YouTube, and two on TikTok.",
            board: { type: "stats", heading: "😵 Instructor's banned accounts", items: [
              { value: "5", label: "Instagram" },
              { value: "3", label: "YouTube (incl. a 100K channel)" },
              { value: "2", label: "TikTok" },
              { value: "10", label: "Accounts banned in total" } ] } },
          { pose: "talk", tts: "[explaining] Mostly, the content was compliant, but more suggestive photos and videos got flagged by AI moderation or by reports. And platform rules change, so what was fine before may not be later.",
            board: { type: "bullets", heading: "🔍 Common ban causes", items: [
              { icon: "🤖", label: "AI moderation", text: "Borderline but compliant content can be misjudged" },
              { icon: "🚩", label: "Mass reports", text: "Many reports trigger reviews" },
              { icon: "📜", label: "Policy changes", text: "Old content can be judged retroactively" },
              { icon: "🔗", label: "Links & keywords", text: "Links to adult sites are most sensitive" } ], reveal: 4 } },
          { pose: "cheer", tts: "[warm, firm] That's why mindset matters. A ban doesn't mean you failed; it's a cost of doing business in this industry. It's okay to be sad for a bit, then bounce back within twenty-four hours and keep going.",
            board: { type: "big", label: "Mindset", value: "A ban is a cost, not a failure", note: "Platforms are rented shops → your value is your content and fan relationships, not one account" } },
          { pose: "point", tts: "[instructive] Prevention details: reread the guidelines every quarter; never put a link and a suggestive image in the same post; tone it down as soon as you get a warning; keep safe and full versions separate.",
            board: { type: "bullets", heading: "🧷 Prevention details", items: [
              { icon: "📖", label: "Reread rules quarterly", text: "Rules change — keep up" },
              { icon: "✂️", label: "Separate links & edgy pics", text: "Never in the same post" },
              { icon: "⚠️", label: "Warned? Tone it down", text: "Strikes add up" },
              { icon: "🗂️", label: "Safe vs full versions", text: "Social gets safe only" },
              { icon: "🔑", label: "Account security", text: "2FA, so no one hijacks and breaks rules" } ], reveal: 5 } },
          { pose: "point", tts: "[strategic] Backup plan: move fans to owned channels like Telegram or email; back up all raw files; regularly download your account data; and spread across multiple platforms.",
            board: { type: "steps", heading: "🛟 Backup plan", items: [
              { label: "Owned fan list", text: "Telegram · email · website members" },
              { label: "Raw file backups", text: "3-2-1 backup rule" },
              { label: "Download account data", text: "Export posts and follower data regularly" },
              { label: "Multi-platform", text: "Don't put all eggs in one basket" } ], reveal: 4 } },
          { pose: "warn", tts: "[serious] If you're banned, appeal through the official process first, and keep screenshots and evidence. Also note: many platforms forbid creating new accounts to get around a ban, so read the terms carefully." },
          { pose: "cheer", tts: "[encouraging, warm] I was banned ten times and still made it to the global top 0.01%. As long as your system and fan relationships survive, you can always rise again!" }
        ]
      }
    ]
  },

  // ───────────────────────── MODULE 5 ─────────────────────────
  {
    id: "m5",
    no: 5,
    title: "Weekly Operations",
    outcome: "Run on a weekly rhythm and keep improving content and relationships",
    bg: "plan",
    intro: {
      lines: [
        { pose: "cheer", tts: "[excited] Welcome to chapter five: content operations and your weekly plan!",
          board: { type: "chapter", no: 5, title: "Weekly Operations", items: ["5.1 Adult platform rhythm", "5.2 Social platform rhythm", "5.3 Owned channel upkeep", "5.4 Weekly checklist & dashboard"], goal: "Run on a weekly rhythm and keep improving content and relationships" } },
        { pose: "talk", tts: "[warm, sincere] Opening platforms is just the start. What really sets you apart is showing up every week. In this chapter, I'll give you a weekly plan you can copy." }
      ]
    },
    outro: {
      lines: [
        { pose: "talk", tts: "[warm] Chapter five boils down to one line: a steady rhythm, plus a weekly review.",
          board: { type: "cycle", heading: "🔁 Weekly loop", items: ["Pick a theme", "Prep content", "Publish", "Engage", "Review data", "Adjust"] } },
        { pose: "cheer", tts: "[excited, proud] Congrats on finishing Module 5! You now have an operating rhythm you can run for the long haul.",
          board: { type: "done", title: "Module 5 complete!", text: "Outcome: a weekly rhythm to keep improving content and relationships" } },
        { pose: "point", tts: "[energetic] With a steady rhythm, it's time to accelerate! Next chapter: ads and collaborations to double your growth." }
      ]
    },
    lessons: [
      {
        id: "5.1",
        title: "Adult platform rhythm",
        lines: [
          { pose: "talk", tts: "[cheerful] Lesson one: your weekly rhythm on adult platforms. ManyVids, Fansly, Pornhub, and Xhamster each have their own beat.",
            board: { type: "title", kicker: "MODULE 5 · 5.1", title: "Adult platform rhythm", sub: "MV · Fansly · PH · XH" } },
          { pose: "point", tts: "[clear] ManyVids goes like this: new full video Monday, highlights plus a limited discount Wednesday, a bundle on Friday, and extra deals on the weekend.",
            board: { type: "week", heading: "📅 Adult platform weekly plan", days: [
              { d: "Mon", items: ["MV new video"] },
              { d: "Tue", items: ["Fansly post"] },
              { d: "Wed", items: ["MV highlight + deal", "PH story cut"] },
              { d: "Thu", items: ["Fansly post", "XH series"] },
              { d: "Fri", items: ["MV bundle", "Review data"] },
              { d: "Sat", items: ["Fansly live", "PH story cut"] },
              { d: "Sun", items: ["Weekend deal"] } ] } },
          { pose: "talk", tts: "[explaining] On Fansly: three to four posts a week, one members-only live or interactive post, and a story every day. Three perk tiers: teasers, upgraded sets, and the full version plus a monthly compilation." },
          { pose: "talk", tts: "[explaining] Pornhub gets two three-to-five minute story highlights a week; Xhamster gets one or two themed series clips. Use a fixed template for descriptions and keywords to save time." },
          { pose: "point", tts: "[strategic] Every platform has its own promo code. Every Friday, review click-through, completion, and conversion. Drop what doesn't work, double down on what does.",
            board: { type: "stats", heading: "📊 Review these every Friday", items: [
              { value: "CTR", label: "Are titles & thumbnails working?" },
              { value: "Completion", label: "Does content hold attention?" },
              { value: "Conversion", label: "Are people actually paying?" },
              { value: "MV/FS/PH/XH", label: "Separate code per platform" } ] } }
        ]
      },
      {
        id: "5.2",
        title: "Social platform rhythm",
        lines: [
          { pose: "talk", tts: "[upbeat] Lesson two: your social rhythm. TikTok, Instagram, Facebook, X, Reddit, plus OFTV.",
            board: { type: "title", kicker: "MODULE 5 · 5.2", title: "Social platform rhythm", sub: "TikTok · IG · FB · X · Reddit · OFTV" } },
          { pose: "point", tts: "[clear] Here's the weekly plan: three to five TikToks, two to three Reels plus two photo sets on Instagram, one or two posts a day on X, and a Story every single day.",
            board: { type: "week", heading: "📅 Social weekly plan", days: [
              { d: "Mon", items: ["TikTok", "IG Story", "X"] },
              { d: "Tue", items: ["IG Reel", "IG Story", "X"] },
              { d: "Wed", items: ["TikTok", "IG Story", "X"] },
              { d: "Thu", items: ["IG carousel", "IG Story", "FB post"] },
              { d: "Fri", items: ["TikTok", "IG Reel", "X"] },
              { d: "Sat", items: ["Reddit", "IG Story", "OFTV"] },
              { d: "Sun", items: ["IG carousel", "IG Story", "Plan next week"] } ] } },
          { pose: "talk", tts: "[teaching] Each TikTok runs fifteen to forty-five seconds, with a hook in the first two seconds. Use behind-the-scenes or how-to content, and end by pointing to your link page." },
          { pose: "talk", tts: "[explaining] Update Instagram Stories daily with polls, countdowns, and perk teasers. Organize Highlights into portfolio, reviews, and deals. On Facebook, one long post and one live teaser a week." },
          { pose: "point", tts: "[explaining] OFTV is OnlyFans' own free video platform, safe content only. Post one tutorial, vlog, or behind-the-scenes video a week, as your brand card and traffic bridge.",
            board: { type: "big", label: "What is OFTV?", value: "OF's free, safe video hub", note: "1 tutorial / vlog / fitness / BTS per week → build authority; links & promo code in description" } },
          { pose: "cheer", tts: "[encouraging] You don't have to do it all at once. Nail two platforms first, then add more!" }
        ]
      },
      {
        id: "5.3",
        title: "Owned channel upkeep",
        lines: [
          { pose: "talk", tts: "[warm] Lesson three: owned channel upkeep. How do you care for Snapchat, Telegram, and your website each week?",
            board: { type: "title", kicker: "MODULE 5 · 5.3", title: "Owned channel upkeep", sub: "Snapchat · Telegram · Website" } },
          { pose: "point", tts: "[clear] Monday, warm up on Snapchat and tease new drops on your site. Wednesday, a Telegram interactive post plus a limited promo code. Friday, perk teasers and a new landing page. Weekend, a Telegram weekly roundup and a newsletter.",
            board: { type: "week", heading: "📅 Owned channel rhythm", days: [
              { d: "Mon", items: ["Snap warm-up", "Site teaser"] },
              { d: "Tue", items: ["Snap daily"] },
              { d: "Wed", items: ["TG interactive", "Limited code"] },
              { d: "Thu", items: ["Snap Q&A"] },
              { d: "Fri", items: ["Snap perk teaser", "Site event page"] },
              { d: "Sat", items: ["TG roundup"] },
              { d: "Sun", items: ["Newsletter"] } ] } },
          { pose: "talk", tts: "[explaining] Your Telegram pinned post should spell out rules, links, and monthly pricing. Use a bot to send teasers, expiry reminders, and promo codes automatically, and renewals go way up." },
          { pose: "warn", tts: "[careful] Owned channels need compliance too: collect minimal data, encrypt backups, watermark your channel, and start takedowns and evidence collection if anything leaks." }
        ]
      },
      {
        id: "5.4",
        title: "Weekly checklist & dashboard",
        lines: [
          { pose: "talk", tts: "[energetic] Lesson four: your weekly checklist and dashboard. Run through this list every week, and nothing slips.",
            board: { type: "title", kicker: "MODULE 5 · 5.4", title: "Weekly checklist & dashboard", sub: "Publish · Engage · Retain · Review" } },
          { pose: "point", tts: "[playful] Here's your weekly checklist. Try ticking it off right now!",
            board: { type: "checklist", id: "c54", heading: "✅ Weekly checklist", items: [
              { label: "Publish", text: "Theme & asset list; new sales drops, pool highlights, social shorts, site update" },
              { label: "Engage", text: "IG polls & Q&A, X threads, TG pins & reminders, Snap stories" },
              { label: "Retain", text: "Tier perks, weekly roundup, renewal deals, caring DMs, newsletter" },
              { label: "Compliance", text: "No underage imagery, third-party consent, licensed assets, watermarks" },
              { label: "Versioning & backup", text: "Naming, encryption, double cloud backup, takedown flow" } ], reveal: 1 } },
          { pose: "talk", tts: "[explaining] Your dashboard tracks five kinds of numbers: reach, engagement, conversion, retention, and risk. Each has one or two key metrics.",
            board: { type: "bullets", heading: "📊 Weekly dashboard", items: [
              { icon: "📣", label: "Reach", text: "Impressions, reach, CTR" },
              { icon: "💬", label: "Engagement", text: "Engagement, completion, saves & shares" },
              { icon: "💳", label: "Conversion", text: "Landing clicks → purchases, code usage" },
              { icon: "🔁", label: "Retention", text: "Renewal rate, active members, DM response time" },
              { icon: "🚨", label: "Risk", text: "Copyright claims, warnings, leak takedowns" } ], reveal: 5 } },
          { pose: "think", tts: "[thoughtful] Don't stare at numbers every day; it's stressful. Once a week: look, log, and compare with last week. That's enough." },
          { pose: "cheer", tts: "[encouraging] Run the checklist long enough and it becomes a habit, and habits are your strongest edge!" }
        ]
      }
    ]
  },

  // ───────────────────────── MODULE 6 ─────────────────────────
  {
    id: "m6",
    no: 6,
    title: "Ads & Collab Growth",
    outcome: "Master paid and free growth channels to acquire fans efficiently",
    bg: "rooftop",
    intro: {
      lines: [
        { pose: "cheer", tts: "[excited] Welcome to chapter six: ads and collaboration growth!",
          board: { type: "chapter", no: 6, title: "Ads & Collab Growth", items: ["6.1 Adult growth: GigSocial · SFS · bundles", "6.2 Mainstream growth: ads · SEO · collabs"], goal: "Master paid and free growth channels to acquire fans efficiently" } },
        { pose: "talk", tts: "[confident] Posting alone, you'll grow slowly. With collabs and ads, you'll grow a lot faster. This chapter teaches you to spend right and partner right." }
      ]
    },
    outro: {
      lines: [
        { pose: "talk", tts: "[warm] Chapter six in a nutshell: track every paid and free channel with promo codes. Keep what works, cut what doesn't.",
          board: { type: "bullets", heading: "📝 Module 6 recap", items: [
            { icon: "📢", label: "GigSocial", text: "Buy placements on similar audiences" },
            { icon: "🤝", label: "SFS", text: "Partner with similar creators, check in 48h" },
            { icon: "🎁", label: "Bundles", text: "1× / 1.6× / 2.2× + time limits" },
            { icon: "🎯", label: "Safe ads", text: "Brand / BTS / how-to + retargeting" },
            { icon: "🔎", label: "SEO", text: "Website articles + structured data" } ], reveal: 5 } },
        { pose: "cheer", tts: "[excited, proud] Congrats on finishing Module 6! You now know how to speed up your growth.",
          board: { type: "done", title: "Module 6 complete!", text: "Outcome: paid and free growth channels to acquire fans efficiently" } },
        { pose: "point", tts: "[playful] The crowds are coming. How do you make them happy to buy, and happy to stay? Next chapter: pricing and retention!" }
      ]
    },
    lessons: [
      {
        id: "6.1",
        title: "Adult growth",
        lines: [
          { pose: "talk", tts: "[energetic] Lesson one: adult growth. Three weapons: GigSocial, SFS shoutouts, and bundle design.",
            board: { type: "title", kicker: "MODULE 6 · 6.1", title: "Adult growth", sub: "GigSocial · SFS · Bundle design" } },
          { pose: "point", tts: "[explaining] GigSocial means paying for other accounts' placements, like pinned posts, Stories, or highlights. Pick accounts with a similar audience and stable results over the last thirty days, and require screenshots and links kept for at least seven days.",
            board: { type: "bullets", heading: "📢 GigSocial paid placements", items: [
              { icon: "🎯", label: "Pick well", text: "Similar audience, stable last 30 days" },
              { icon: "📌", label: "Formats", text: "Pinned posts, Stories, highlights" },
              { icon: "📸", label: "Keep proof", text: "Screenshots + links kept 7+ days" },
              { icon: "🏷️", label: "Tracking", text: "Dedicated promo code + UTM" } ], reveal: 4 } },
          { pose: "talk", tts: "[friendly] SFS means shoutout for shoutout: you promote me, I promote you. I'm a tan, sporty Asian girl, so I look for at least one creator with similar traits.",
            board: { type: "analogy", heading: "🤝 SFS (Shoutout for Shoutout)", items: [
              { icon: "🧍‍♀️", label: "Find similar creators", text: "Style, audience, body type or theme → fans transfer easily" },
              { icon: "📦", label: "Prep a kit", text: "Thumbnail + title + 30-s clip + caption template + schedule" } ] } },
          { pose: "point", tts: "[strategic] Forty-eight hours after a shoutout, check click-through and follower growth. If a partner underperforms, don't renew." },
          { pose: "point", tts: "[explaining] Design bundles in three tiers, priced roughly one, one point six, and two point two times, with a forty-eight to seventy-two hour time limit to create scarcity.",
            board: { type: "calc", heading: "🎁 Bundle design (base $10)", rows: [
              { l: "Entry", f: "Single unlock + small perk × 1", r: "$10" },
              { l: "Plus", f: "Bundle + DM perks × 1.6", r: "$16" },
              { l: "Deluxe", f: "Monthly set + exclusive project × 2.2", r: "$22" } ], total: "Add a 48–72 hour limit to create scarcity" } },
          { pose: "talk", tts: "[instructive] Cadence: at least two GigSocial placements and one SFS a week, timed with new drops, so the landing page always matches." },
          { pose: "warn", tts: "[serious] Always keep written or chat records: dates, assets, format, and how long it stays up. If a partner deletes early or doesn't deliver, handle it per the agreement." }
        ]
      },
      {
        id: "6.2",
        title: "Mainstream growth",
        lines: [
          { pose: "talk", tts: "[upbeat] Lesson two: mainstream growth. Paid ads, SEO, and cross-platform collabs.",
            board: { type: "title", kicker: "MODULE 6 · 6.2", title: "Mainstream growth", sub: "Ads · SEO · Cross-platform collabs" } },
          { pose: "warn", tts: "[serious, clear] Let's be clear: Meta and other major ad platforms ban adult content. So ads can only use safe material: your brand story, behind-the-scenes, and how-to content.",
            board: { type: "big", label: "Ad red line", value: "Safe creative only", note: "Mainstream ad platforms ban adult content → brand / BTS / how-to, no innuendo or sales language",
              source: "Source: Meta Advertising Standards (adult content)" } },
          { pose: "talk", tts: "[sharing, sincere] From my own experience: I ran ads on Instagram and Facebook with fun everyday videos to boost exposure, for two years straight, and it worked really well." },
          { pose: "point", tts: "[strategic] Deciding if it's worth it is simple: if the subscription revenue from ads is bigger than the ad cost, keep investing. Let's run an example.",
            board: { type: "calc", heading: "📈 Are your ads worth it?", rows: [
              { l: "Ad spend", f: "This month", r: "$300" },
              { l: "New subscribers", f: "Tracked by promo code", r: "30" },
              { l: "Subscription revenue", f: "30 × LTV $50", r: "$1,500" } ], total: "Revenue $1,500 > cost $300 → keep investing" } },
          { pose: "warn", tts: "[careful] One caution: Meta's policies keep changing, so whether you can still run ads like this depends on the current rules. Test with a small budget first, then scale up." },
          { pose: "point", tts: "[strategic] Use short hook videos for cold audiences, then retarget viewers with your landing page and entry bundle. Build three retargeting pools: seven, fourteen, and thirty days.",
            board: { type: "steps", heading: "🎯 Ads & retargeting", items: [
              { label: "Cold audience", text: "Short hook videos (safe)" },
              { label: "7-day pool", text: "Watched 50% of a video" },
              { label: "14-day pool", text: "Clicked but didn't buy" },
              { label: "30-day pool", text: "Membership about to expire" },
              { label: "Two-step nudge", text: "Email / TG: teaser + promo code" } ], reveal: 5 } },
          { pose: "talk", tts: "[explaining] SEO is free, long-lasting traffic. Write topic pages and long articles on your site, like tutorials, behind-the-scenes, and gear reviews, and add structured data so search engines understand you.",
            board: { type: "bullets", heading: "🔎 SEO (website + content)", items: [
              { icon: "🧱", label: "Structured data", text: "Person / Video / FAQ schema" },
              { icon: "📝", label: "Long articles", text: "Tutorials, BTS, gear reviews" },
              { icon: "🔗", label: "Internal links", text: "Point to entry & bundle pages" },
              { icon: "🗺️", label: "Monthly refresh", text: "Sitemap + core articles" } ], reveal: 4 } },
          { pose: "talk", tts: "[cheerful] Cross-platform collabs: safe teasers on Instagram, X, and Reddit; joint compilations on ManyVids and Fansly. Contracts cover assets, dates, how long posts stay up, and revenue split." },
          { pose: "cheer", tts: "[encouraging] Every week, drop weak topics and double down on strong ones and great partners, and your growth curve gets steeper and steeper!" }
        ]
      }
    ]
  },

  // ───────────────────────── MODULE 7 ─────────────────────────
  {
    id: "m7",
    no: 7,
    title: "Pricing & Retention",
    outcome: "Make every fan tier feel it's worth it, and raise LTV and renewals",
    bg: "shop",
    intro: {
      lines: [
        { pose: "cheer", tts: "[excited] Welcome to chapter seven: pricing and retention!",
          board: { type: "chapter", no: 7, title: "Pricing & Retention", items: ["7.1 Pricing: value ladder & upsells", "7.2 Retention: DMs · surprises · events"], goal: "Make every fan tier feel it's worth it, and raise LTV and renewals" } },
        { pose: "talk", tts: "[warm, confident] Remember? Over seventy percent of platform revenue comes from DMs, unlocks, and tips. So pricing and retention are the heart of your income." }
      ]
    },
    outro: {
      lines: [
        { pose: "talk", tts: "[warm] Chapter seven in one line: make every kind of fan feel it was worth it, and not want to leave.",
          board: { type: "bullets", heading: "📝 Module 7 recap", items: [
            { icon: "🪜", label: "Value ladder", text: "Entry → core → premium" },
            { icon: "➕", label: "Upsell timing", text: "Checkout, 72h before renewal, after lives" },
            { icon: "💌", label: "3-part DM script", text: "Welcome · day 7 · before expiry" },
            { icon: "🎁", label: "Surprises", text: "Blind boxes + behavior unlocks" },
            { icon: "📈", label: "Renewal rate", text: "50%→70% = 67% more LTV" } ], reveal: 5 } },
        { pose: "cheer", tts: "[excited, proud] Congrats on finishing Module 7! You now know how to make fans happy to buy, and happy to stay.",
          board: { type: "done", title: "Module 7 complete!", text: "Outcome: every fan tier feels it's worth it, with higher LTV and renewals" } },
        { pose: "point", tts: "[serious, warm] The last chapter protects everything you've built: law and safety. Please watch it all the way through!" }
      ]
    },
    lessons: [
      {
        id: "7.1",
        title: "Pricing framework",
        lines: [
          { pose: "talk", tts: "[cheerful] Lesson one: your pricing framework. Entry, core, the value ladder, and upsells.",
            board: { type: "title", kicker: "MODULE 7 · 7.1", title: "Pricing framework", sub: "Entry · Core · Value ladder · Upsells" } },
          { pose: "point", tts: "[explaining] The value ladder has three steps: entry at about five to nine dollars, to attract new fans; core at one point six to one point eight times entry; and premium at another one point eight to two point four times, for your biggest fans.",
            board: { type: "ladder", heading: "🪜 Value ladder", items: [
              { label: "Premium $22–35", text: "Exclusive projects, custom interaction, collabs (core × 1.8–2.4)", tag: "VIP" },
              { label: "Core $12–15", text: "Monthly long video, member lives, monthly set (entry × 1.6–1.8)", tag: "Core" },
              { label: "Entry $5–9", text: "Safe teasers, BTS, weekly photo sets; first-month deal", tag: "Entry" } ] } },
          { pose: "talk", tts: "[strategic] Why tiers? Let's do the math. A hundred fans all paying seven dollars is seven hundred a month. Split into three tiers, the same hundred fans bring in one thousand ninety.",
            board: { type: "calc", heading: "🧮 Same 100 fans — what do tiers change?", rows: [
              { l: "One flat price", f: "100 × $7", r: "$700" },
              { l: "Entry: 60 fans", f: "60 × $7", r: "$420" },
              { l: "Core: 30 fans", f: "30 × $13", r: "$390" },
              { l: "Premium: 10 fans", f: "10 × $28", r: "$280" } ], total: "Tiered: $1,090 — that's 56% more!", reveal: 4 } },
          { pose: "point", tts: "[teaching] Upselling means selling a little more at the right moment: about zero point four to zero point eight times the main product, offered at checkout, seventy-two hours before renewal, or within twenty-four hours after a live.",
            board: { type: "bullets", heading: "➕ Upsells", items: [
              { icon: "🎟️", label: "Types", text: "Single unlocks, bundles, shoot diaries, event tickets" },
              { icon: "💲", label: "Price", text: "0.4–0.8× the main product + limited / timed" },
              { icon: "⏰", label: "Timing", text: "Checkout · 72h before renewal · 24h after a live" } ], reveal: 3 } },
          { pose: "talk", tts: "[explaining] Monthly promo rhythm: new drops at the start, bundles mid-month, renewal gifts at the end. New fans start at entry, upgrade to core after seven to fourteen days, and see premium during events.",
            board: { type: "flow", heading: "📆 Upgrade path", items: [
              { icon: "🌱", label: "Entry", sub: "Attract" }, { icon: "⏳", label: "7–14 days", sub: "Nurture" }, { icon: "💎", label: "Core", sub: "Steady base" }, { icon: "👑", label: "Premium", sub: "Event windows" } ] } },
          { pose: "cheer", tts: "[encouraging] Give every tier its own promo code, watch first purchases, upgrades, and renewals, and fine-tune until the prices fit you perfectly!" }
        ]
      },
      {
        id: "7.2",
        title: "Retention design",
        lines: [
          { pose: "talk", tts: "[warm] Lesson two: retention design. DM scripts, surprise mechanics, and membership events.",
            board: { type: "title", kicker: "MODULE 7 · 7.2", title: "Retention design", sub: "DM scripts · Surprises · Member events" } },
          { pose: "think", tts: "[curious] Why does retention matter so much? Let's use LTV from chapter one to find out.",
            board: { type: "calc", heading: "📈 +20 points of renewal — how much LTV?", rows: [
              { l: "Avg months retained", f: "≈ 1 ÷ (1 − renewal rate)", r: "Formula" },
              { l: "Renewal 50%", f: "$15 × 2 months", r: "$30" },
              { l: "Renewal 70%", f: "$15 × 3.3 months", r: "$50" } ], total: "The same fan is worth 67% more", reveal: 3 } },
          { pose: "cheer", tts: "[excited] See that? Raising renewals from fifty to seventy percent turns a thirty-dollar fan into a fifty-dollar fan!" },
          { pose: "point", tts: "[teaching] Your DM script has three parts: welcome new fans right away, within forty-eight hours at the latest; check in on day seven; and remind them to renew seventy-two hours before expiry.",
            board: { type: "steps", heading: "💌 Three-part DM script", items: [
              { label: "Welcome (now–48h)", text: "Hi + intro + preference quiz → BTS gift" },
              { label: "Check-in (day 7)", text: "Recap the week + ask favorites → next teaser" },
              { label: "Renewal (72h before)", text: "Reminder + two plans → bonus voice note" } ], reveal: 3 } },
          { pose: "talk", tts: "[playful, flirty tone] A welcome message could be: Hi, thanks for coming to see me! Quick question: do you like everyday vibes, or something a little spicier? Reply, and I'll send you a behind-the-scenes pic.",
            board: { type: "chat", heading: "💬 Welcome message (example)", items: ["Hi~ thanks for coming to see me 🥰", "Quick question: everyday vibes, or a little spicier?", "Reply and I'll send you a BTS pic 📸"] } },
          { pose: "point", tts: "[strategic] Surprise mechanics: a monthly blind-box perk, random bonuses like a voice note or behind-the-scenes photo, unlocked after three interactions in a row or a finished quiz. Uncertain rewards create the most excitement.",
            board: { type: "bullets", heading: "🎁 Surprise mechanics", items: [
              { icon: "🎲", label: "Monthly blind box", text: "Once a month, contents secret" },
              { icon: "✨", label: "Random bonuses", text: "Voice notes, BTS pics, stickers" },
              { icon: "🔓", label: "Behavior unlocks", text: "3 interactions in a row, finish a quiz" } ], reveal: 3 } },
          { pose: "talk", tts: "[explaining] Membership events: a theme week every week, a live or Q&A night every month, and a collab project every quarter. Different tiers unlock different events, creating a sense of ritual.",
            board: { type: "rhythm", heading: "🗓️ Membership events", items: [
              { n: "W", unit: "weekly", label: "Theme week" }, { n: "M", unit: "monthly", label: "Live / Q&A night" }, { n: "Q", unit: "quarterly", label: "Collab project" } ] } },
          { pose: "warn", tts: "[gentle, serious] Finally, respect boundaries: label everything eighteen plus, and offer ways to opt out and reach support. Trust is what keeps people the longest." }
        ]
      }
    ]
  },

  // ───────────────────────── MODULE 8 ─────────────────────────
  {
    id: "m8",
    no: 8,
    title: "Law & Safety",
    outcome: "Operate safely and legally, avoiding high risks and needless losses",
    bg: "safe",
    intro: {
      lines: [
        { pose: "talk", tts: "[warm, serious] Welcome to the final chapter: law, safety, and compliance.",
          board: { type: "chapter", no: 8, title: "Law & Safety", items: ["8.1 Rules: content · copyright · tax · regions", "8.2 Personal safety final check", "8.3 Summary: the formula for lasting growth"], goal: "Operate safely and legally, avoiding high risks and needless losses" } },
        { pose: "talk", tts: "[sincere] The first seven chapters taught you how to earn. This one teaches you how to protect it. However much you make, one incident can wipe it all out." },
        { pose: "warn", tts: "[gentle] A quick note: this chapter covers common key points, not legal advice. For your specific situation, please talk to a lawyer or accountant." }
      ]
    },
    outro: {
      lines: [
        { pose: "talk", tts: "[warm, nostalgic] We've made it through all eight chapters together. Let me tie the whole course together for you.",
          board: { type: "compare", heading: "🗺️ Whole-course recap", rows: [
            { k: "Ch 1–2", v: "Know yourself, set up account and payouts" },
            { k: "Ch 3", v: "Shoot content that earns, safely" },
            { k: "Ch 4–5", v: "Traffic map + weekly rhythm" },
            { k: "Ch 6–7", v: "Accelerate growth, pricing and retention" },
            { k: "Ch 8", v: "Compliance and safety protect it all" } ], reveal: 5 } },
        { pose: "cheer", tts: "[excited, proud, emotional] Congratulations! You've finished all eight chapters! You now have a real system that can launch, scale, and be measured.",
          board: { type: "done", title: "Course complete!", text: "A system you can launch, scale, and measure ♡" } },
        { pose: "talk", tts: "[warm, heartfelt] Thank you for learning with me all the way to the end. Remember, it's okay to go slow. Keep going, and you will see results." },
        { pose: "blink", tts: "[sweet, cheerful] I'm bunnybrownie. See you online, bye-bye!" }
      ]
    },
    lessons: [
      {
        id: "8.1",
        title: "The rules, summarized",
        lines: [
          { pose: "talk", tts: "[serious] Lesson one: the rules, summarized. Content, copyright, tax, and regional differences.",
            board: { type: "title", kicker: "MODULE 8 · 8.1", title: "OnlyFans rules summary", sub: "Content · Copyright · Tax · Regions" } },
          { pose: "warn", tts: "[very serious] Know the content red lines: absolutely no underage imagery, including unclear ages or school-age role play. Also no unauthorized third parties, violence or danger, and nothing involving animals or drugs.",
            board: { type: "bullets", heading: "🚫 Content red lines", items: [
              { icon: "🔞", label: "Underage imagery", text: "Unclear age, school-age role play — never" },
              { icon: "👥", label: "Unauthorized people", text: "Every performer: ID check + release" },
              { icon: "⚠️", label: "Violence & danger", text: "Including non-consensual content, weapons" },
              { icon: "🐾", label: "Animals & drugs", text: "Avoid entirely" } ], reveal: 4 } },
          { pose: "talk", tts: "[explaining, calm] Laws differ in every country. Some require age verification, some require performer records, like the US 2257 rules. Before you publish, check the rules where you live and where you shoot.",
            board: { type: "big", label: "Laws differ by country", value: "Check local law first", note: "Age verification, performer records (e.g. US 18 U.S.C. §2257), adult content limits → follow where you live and shoot" } },
          { pose: "point", tts: "[helpful, protective] If your intimate images leak, use StopNCII.org. It creates a digital fingerprint of the image on your own device, and the photo itself is never uploaded. Partner platforms like Meta, TikTok, Reddit, and OnlyFans can then block matching images automatically.",
            board: { type: "steps", heading: "🛡️ How StopNCII.org works", items: [
              { label: "Fingerprint on your device", text: "The photo itself is never uploaded" },
              { label: "Shared with partners", text: "Meta · TikTok · Reddit · OnlyFans and more" },
              { label: "Someone uploads a match", text: "Platforms review and block it" } ], reveal: 3,
              source: "Source: StopNCII.org (operated by SWGfL)" } },
          { pose: "talk", tts: "[explaining] For copyright, your contracts should state who owns the work, which platforms, how long, which regions, and who holds the raw files. Music, fonts, and filters must be licensed for commercial use.",
            board: { type: "bullets", heading: "©️ Copyright & assets", items: [
              { icon: "📄", label: "Ownership", text: "Platforms, term, region, commercial / sublicense" },
              { icon: "🗂️", label: "Raw files", text: "Who holds raw and edited files" },
              { icon: "🎵", label: "Third-party assets", text: "Music, fonts, filters licensed" },
              { icon: "🧯", label: "Anti-piracy", text: "Watermarks + notice-and-takedown (DMCA)" } ], reveal: 4 } },
          { pose: "talk", tts: "[calm, practical] For taxes, record income by type: subscriptions, clips, tips, and revenue shares. Keep platform statements and transfer records, plus receipts for gear, venues, editing, and ads. Have an accountant plan it with you.",
            board: { type: "bullets", heading: "🧾 Tax & money", items: [
              { icon: "🗃️", label: "Income types", text: "Subs / clips / tips / collab shares" },
              { icon: "📑", label: "Keep records", text: "Statements, transfers, receipts" },
              { icon: "🧰", label: "Costs", text: "Gear, venues, editing, ads" },
              { icon: "🌐", label: "Cross-border", text: "Source vs residence tax → ask an accountant" } ], reveal: 4 } },
          { pose: "warn", tts: "[very serious] Regional differences: most Muslim-majority and authoritarian or conservative countries ban making and distributing adult content. Check local law before any travel shoot. A venue's permission doesn't change criminal law." }
        ]
      },
      {
        id: "8.2",
        title: "Personal safety final check",
        lines: [
          { pose: "talk", tts: "[serious, caring] Lesson two: your personal safety final check. Let's tick through it one by one. Only when it's all checked are you truly ready.",
            board: { type: "title", kicker: "MODULE 8 · 8.2", title: "Personal safety final check", sub: "Identity · Data security · Contracts" } },
          { pose: "point", tts: "[clear] Group one, identity and devices: a stage name, a dedicated email and phone, photo location turned off; full-disk encryption on phone and computer, strong passwords with two-factor, and a trusted VPN.",
            board: { type: "checklist", id: "c82a", heading: "🔐 Identity & devices", items: [
              { label: "Separate identity", text: "Stage name, separate accounts, dedicated email & phone" },
              { label: "Location off", text: "Camera & social location off; hide location clues" },
              { label: "Encrypt devices", text: "Full-disk encryption; keep systems updated" },
              { label: "Strong passwords + 2FA", text: "Password manager, 2FA, backup codes" },
              { label: "VPN on public Wi-Fi", text: "Use a trusted service" } ], reveal: 1 } },
          { pose: "talk", tts: "[explaining] One small step matters a lot: turn off location tagging in your phone's camera. Otherwise your photos may carry your home's GPS coordinates.", reveal: 2 },
          { pose: "point", tts: "[clear] Group two, data, sets, and contracts: encrypt releases and raw files separately with two backups; agree on a safe word before shooting; and make sure contracts cover licensing, confidentiality, venue permission, and dispute resolution.",
            board: { type: "checklist", id: "c82b", heading: "📋 Data · Set · Contracts", items: [
              { label: "Double backups", text: "Raw files and releases encrypted separately, cloud + local" },
              { label: "On-set safety", text: "On-site contact, safe word / gesture, exit route" },
              { label: "Performance + license", text: "Platforms / term / region, raw ownership, takedowns" },
              { label: "NDA & venue permit", text: "No leaks, written consent for commercial shoots" },
              { label: "Dispute resolution", text: "Jurisdiction, governing law, mediation / arbitration" } ], reveal: 1 } },
          { pose: "warn", tts: "[firm] Finally, prepare your emergency contacts and a list of medical and legal support. If a line is crossed, stop and document it. If your rights are violated, use your contract and evidence.", reveal: 5 },
          { pose: "point", tts: "[playful, caring] Okay, your turn! Tick off both lists, and you're a creator who can run this with peace of mind." }
        ]
      },
      {
        id: "8.3",
        title: "Summary: lasting growth",
        lines: [
          { pose: "talk", tts: "[warm, reflective] Lesson three, and the summary of the whole course: good content, plus the right channels, plus long-term relationships, equals sustainable growth.",
            board: { type: "formula", heading: "The formula for lasting growth", parts: ["Good content", "+", "Right channels", "+", "Lasting relationships", "=", "Sustainable growth"], example: "Content is the root, channels are the road, relationships are the bridge" } },
          { pose: "point", tts: "[explaining] Content needs a steady rhythm and signature themes. Channels: social attracts, traffic pools catch, subscriptions convert, owned channels keep. Relationships come from tiered perks, DM scripts, and surprises.",
            board: { type: "bullets", heading: "🌱 Three pillars", items: [
              { icon: "🎬", label: "Content", text: "Steady rhythm + signature themes; safe, repeatable" },
              { icon: "🛤️", label: "Channels", text: "Social → traffic pools → subscriptions → owned" },
              { icon: "💞", label: "Relationships", text: "Tier perks, DM scripts, surprises → higher LTV" } ], reveal: 3 } },
          { pose: "talk", tts: "[inspiring] When all three reinforce each other, you get a virtuous cycle: create, drive traffic, convert, retain, review the data, and create again.",
            board: { type: "cycle", heading: "🔁 Growth loop", items: ["Create", "Traffic", "Convert", "Retain", "Review data", "Create again"] } },
          { pose: "warn", tts: "[sincere, emphatic] Finally, put compliance and safety above everything. Clear legal and data protection is what lets your growth run long and steady." }
        ]
      }
    ]
  }
);
