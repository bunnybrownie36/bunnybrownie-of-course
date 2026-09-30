// English course script — mirrors script.js line-for-line.
window.COURSE_EN = {
  title: "Adult Creator Economy: OnlyFans Masterclass",
  modules: [
    {
      id: "m1",
      no: 1,
      title: "Getting Ready",
      outcome: "Know if this path fits you and what you need before you start",
      bg: "room",
      intro: {
        lines: [
          { pose: "cheer", tts: "[excited] Hiii! Welcome to the Adult Creator Economy: OnlyFans Masterclass!",
            board: { type: "title", kicker: "WELCOME ♡", title: "Adult Creator Economy", sub: "OnlyFans Masterclass · 8 chapters · zero to sustainable" } },
          { pose: "talk", tts: "[warm, friendly] I'm bunnybrownie, your instructor, and I made it into the global top 0.01%. In this course, I'm handing you the exact system I use, step by step." },
          { pose: "point", tts: "[energetic] There are eight chapters: getting ready, account setup, shooting, traffic, weekly operations, growth, pricing and retention, and finally law and safety. Every chapter is ready to use.",
            board: { type: "chapter", no: "1–8", title: "Course map", items: ["Getting ready", "Account & system setup", "Shooting & content", "Platforms & traffic", "Weekly operations", "Ads & collab growth", "Pricing & retention", "Law & safety"] } },
          { pose: "cheer", tts: "[excited] So let's start with chapter one: getting ready!",
            board: { type: "chapter", no: 1, title: "Getting Ready", items: ["1.1 What is OnlyFans?", "1.2 Is it right for me?", "1.3 Are you really ready?"], goal: "Know if this path fits you and what you need before you start" } },
          { pose: "talk", tts: "[warm, sincere] This chapter isn't about making money yet. It's about figuring out what this platform is, whether it fits you, and what's missing. Strong foundations, taller house." }
        ]
      },
      outro: {
        lines: [
          { pose: "talk", tts: "[warm] Okay, let's wrap up chapter one with five key takeaways.",
            board: { type: "bullets", heading: "📝 Module 1 recap", items: [
              { icon: "🎟️", label: "Membership engine", text: "OF turns interest into income" },
              { icon: "🧲", label: "Bring traffic", text: "OF won't find fans for you" },
              { icon: "🙈", label: "Boundaries first", text: "Write your never-public list" },
              { icon: "📦", label: "4-week bank", text: "28 posts + 8 PPV sets" },
              { icon: "🧮", label: "Four numbers", text: "ARPU · RR · PPV rate · LTV" } ], reveal: 5 } },
          { pose: "cheer", tts: "[excited, proud] Congrats, you finished Module 1! You already know what you want better than ninety percent of people.",
            board: { type: "done", title: "Module 1 complete!", text: "Outcome: you know your feasibility and goals, and what you need before you begin" } },
          { pose: "point", tts: "[playful, teasing] Next chapter, we get hands-on: open your account, set up payouts, and build your workflow. Grab your passport, let's go!" }
        ]
      },
      lessons: [
        {
          id: "1.1",
          title: "What is OnlyFans?",
          bg: "room",
          lines: [
            { pose: "talk", tts: "[cheerful] Lesson one: let's get to know what OnlyFans actually is.",
              board: { type: "title", kicker: "MODULE 1 · 1.1", title: "What is OnlyFans?", sub: "Positioning · Business model · How it differs" } },
            { pose: "point", tts: "[confident] Here's the core idea in one sentence: OnlyFans is a creator platform built on subscriptions plus pay-to-unlock.",
              board: { type: "big", label: "Core idea", value: "Subscribe + Unlock", note: "Charge fans directly and build a long-term, measurable relationship and income" } },
            { pose: "talk", tts: "[playful, storytelling] Think of it this way: Instagram and TikTok are a busy street where people just walk by. OnlyFans is your own members-only shop. You need a ticket to get in.",
              board: { type: "analogy", heading: "One simple picture", items: [
                { icon: "🛣️", label: "IG / TikTok = the street", text: "Lots of people, free to look — they get to know you" },
                { icon: "🎟️", label: "OnlyFans = your shop", text: "Ticket to enter — turns interest into income" } ] } },
            { pose: "talk", tts: "[gentle] So your fans aren't an ad audience. They're paying members. You set the prices, you decide the content. You're the boss." },
            { pose: "point", tts: "[impressed, energetic] How big is this shop? According to the official annual report, in fiscal 2025 fans paid 7.8 billion dollars, and 6.3 billion of that went straight to creators!",
              board: { type: "stats", heading: "📈 How big is OnlyFans? (FY2025)", items: [
                { value: "$7.84B", label: "Total fan payments" },
                { value: "$6.29B", label: "Paid to creators" },
                { value: "5.06M", label: "Creator accounts" },
                { value: "437M", label: "Fan accounts" } ],
                source: "Source: Fenix International (OnlyFans parent) FY2025 accounts, year ended Nov 30, 2025" } },
            { pose: "warn", tts: "[honest, serious] But let me be honest: on average, a creator makes only about a hundred dollars a month. The money is concentrated in the few who run it like a business.",
              board: { type: "compare2", heading: "Average vs top", left: { title: "Average creator", value: "≈ $100 / mo", text: "$6.29B ÷ 5.06M ≈ $1,240 a year" }, right: { title: "Top 0.01%", value: "≈ top 500", text: "0.01% of 5.06M — that's our goal" },
                source: "Derived from FY2025 figures, for scale only" } },
            { pose: "cheer", tts: "[determined, encouraging] The good news? The gap isn't luck. It's a system. And that's exactly why this course exists!" },
            { pose: "point", tts: "[energetic] So where does the money come from? Five main streams: monthly subs, PPV unlocks, tips, one-on-one chats, and live streams or paid posts.",
              board: { type: "bullets", heading: "💰 Revenue streams", items: [
                { icon: "📅", label: "Subscriptions", text: "$4.99–$49.99 / mo, or a free page" },
                { icon: "🔓", label: "PPV unlocks", text: "Paid posts or paid DMs" },
                { icon: "💝", label: "Tips", text: "Fans showing love" },
                { icon: "💬", label: "1-on-1 chat", text: "Attention has value" },
                { icon: "🎥", label: "Live / paid posts", text: "Real-time monetization" } ], reveal: 5,
                source: "Subscription range per OnlyFans creator settings" } },
            { pose: "think", tts: "[curious, then excited] Guess which one earns the most? DMs, PPV, and tips! Reportedly, in 2025 they made up over seventy percent of platform revenue.",
              board: { type: "big", label: "The 2025 trend", value: "PPV + tips + DMs ≈ 73%", note: "The subscription is just the ticket — real income comes from interaction. That's why we'll spend a lot of time on DMs!",
                source: "Source: press analysis of FY2025 accounts" } },
            { pose: "warn", tts: "[serious, clear] Know the cut: the platform takes twenty percent, you keep eighty. A fan pays a hundred, you get eighty. Payout and currency fees come on top of that.",
              board: { type: "split", heading: "Platform fee", a: { label: "You keep", value: 80 }, b: { label: "Platform", value: 20 }, note: "e.g. fan pays $100 → you get $80 (payout & FX fees extra)" } },
            { pose: "think", tts: "[curious] So how is it different from other platforms? Let's compare.",
              board: { type: "compare", heading: "Platform showdown", rows: [
                { k: "IG / TikTok", v: "Huge reach, no explicit content — for traffic" },
                { k: "Patreon", v: "Creator support, few adult features" },
                { k: "ManyVids", v: "Per-clip sales, higher cut, funnels to OF" },
                { k: "Fansly", v: "Similar tools, different ecosystem" },
                { k: "PH / XH", v: "Free traffic pools, top of funnel" },
                { k: "OnlyFans", v: "Biggest paying base, best DM tools" } ], reveal: 6 } },
            { pose: "warn", tts: "[important, emphatic] Here's what beginners miss most: OnlyFans has almost no search or recommendations. Fans won't find you on their own. You have to bring the traffic in from outside.",
              board: { type: "big", label: "Must-know", value: "OF won't find fans for you", note: "Almost no in-app discovery → you need outside platforms to drive traffic" } },
            { pose: "talk", tts: "[explaining, lively] So divide the work! Social media gets you seen, free traffic sites give a taste, and OnlyFans is where you get paid and build the relationship.",
              board: { type: "funnel", heading: "Multi-platform funnel", stages: [
                { label: "Get discovered", sub: "IG · TikTok · X · Reddit" },
                { label: "Free samples", sub: "PH · XH traffic" },
                { label: "Paid conversion", sub: "OnlyFans members" } ] } },
            { pose: "cheer", tts: "[upbeat, encouraging] Remember: OnlyFans is your paid membership engine! The keys are tiered pricing, a steady rhythm, caring DMs, and staying safe and compliant.",
              board: { type: "bullets", heading: "✨ Key takeaways", items: [
                { icon: "🪜", label: "Tiered pricing", text: "A fit for every fan" },
                { icon: "⏰", label: "Steady rhythm", text: "Post on a schedule" },
                { icon: "💌", label: "DM engagement", text: "Most income is DMs & unlocks" },
                { icon: "🧲", label: "Outside traffic", text: "OF won't find fans for you" },
                { icon: "🛡️", label: "Safe & compliant", text: "Stable payouts go further" } ], reveal: 5 } }
          ]
        },
        {
          id: "1.2",
          title: "Is OnlyFans right for me?",
          bg: "room",
          lines: [
            { pose: "think", tts: "[gentle, sincere] Before we start, I want to ask you something, for real. Is this actually right for you?",
              board: { type: "title", kicker: "MODULE 1 · 1.2", title: "Is OnlyFans right for me?", sub: "Requirements & risk checklist" } },
            { pose: "warn", tts: "[serious, caring] Why ask first? Because the internet never forgets. Once content leaks, it's almost impossible to erase completely. So thinking it through first matters more than anything.",
              board: { type: "big", label: "Think first", value: "The internet never forgets", note: "Leaked content is hard to fully remove → setting boundaries first is the cheapest protection" } },
            { pose: "talk", tts: "[warm] Don't worry, this isn't a test! We'll use five checkpoints to take an honest look together.",
              board: { type: "checklist", id: "c12", heading: "5 Checkpoints", items: [
                { label: "Clear boundaries?", text: "Face, real name, family, job — you know what stays private, and you can hold that line." },
                { label: "Okay with gossip?", text: "If friends find out, maybe it stings a bit, but life goes on." },
                { label: "Handling trolls?", text: "Don't argue, block, screenshot. Don't get dragged in." },
                { label: "Bounce back fast?", text: "Back to normal within a day: exercise, journal, talk to someone." },
                { label: "Got a support crew?", text: "2–3 people you trust, plus a counselor or lawyer if needed." } ], reveal: 1 } },
            { pose: "warn", tts: "[serious, caring] One: boundaries. Your face, real name, family, job. Know what can't go public, and hold that line firmly.", reveal: 1 },
            { pose: "point", tts: "[helpful, practical] I recommend writing a never-public list. Most people get identified not by their face, but by a tattoo, the view out the window, or location data hidden in a photo.",
              board: { type: "bullets", heading: "🙈 Never-public list (example)", items: [
                { icon: "🪪", label: "Identity", text: "Real name, birthday, school, employer" },
                { icon: "🦋", label: "Body marks", text: "Tattoos, birthmarks, unique jewelry" },
                { icon: "🪟", label: "Surroundings", text: "Window views, door numbers, plates, uniforms" },
                { icon: "📍", label: "Photo location", text: "Turn off / strip GPS before upload" },
                { icon: "🪞", label: "Reflections", text: "Mirrors, screens, even eyes" } ], reveal: 5 } },
            { pose: "talk", tts: "[relaxed, slightly teasing] Two: can you handle gossip? If friends or family find out, will you panic? If it just stings a little and life goes on, you pass!",
              board: { type: "checklist", id: "c12", heading: "5 Checkpoints", items: "same", reveal: 2 } },
            { pose: "point", tts: "[firm, confident] Three: trolls! My SOP is simple. Don't argue, just block, and keep a screenshot. Never get dragged down with them.", reveal: 3 },
            { pose: "talk", tts: "[gentle] Four: how fast do you bounce back? After a nasty comment, can you feel normal within a day? Work out, journal, call a friend.", reveal: 4 },
            { pose: "cheer", tts: "[warm, reassuring] And finally, have your own support crew! At least two or three people you trust. When something happens, you're not alone.", reveal: 5 },
            { pose: "point", tts: "[playful] Okay, your turn! Tick the ones that fit you on the board. Check them all, and you're ready for the next lesson!" }
          ]
        },
        {
          id: "1.3",
          title: "Are you really ready?",
          bg: "room",
          lines: [
            { pose: "talk", tts: "[energetic] Mindset check, done. Now let's take inventory: brand, time, mindset, gear, and systems.",
              board: { type: "title", kicker: "MODULE 1 · 1.3", title: "Are you really ready?", sub: "Brand · Time · Mindset · Resources checklist" } },
            { pose: "point", tts: "[confident] First, is your brand solid? Who are you, and what vibe are you selling? Can you say it in one breath?",
              board: { type: "checklist", id: "c13", heading: "Readiness check", scoring: true, items: [
                { label: "Solid brand", text: "Theme, voice, and visuals match — instantly recognizable." },
                { label: "Enough time", text: "Shoot, edit, schedule, reply weekly; 4 weeks of content ready." },
                { label: "Strong mindset", text: "Troll SOP ready; recover within 24–48 hours." },
                { label: "Gear ready", text: "Phone + lighting + audio, files backed up." },
                { label: "Backup ready", text: "Contract templates and 2–3 support people." },
                { label: "Willing to learn", text: "Payouts (Paxum / crypto), tax, copyright, watermarks." },
                { label: "Reads the data", text: "Knows RR, PPV rate, ARPU, LTV." } ], reveal: 1 } },
            { pose: "talk", tts: "[playful, teaching] Quick exercise: describe yourself in one line. Like, a sweet office girl by day, your private girlfriend by night. Contrast makes you memorable!",
              board: { type: "formula", heading: "One-line brand formula", parts: ["I'm ___ (who)", "+", "but secretly ___ (contrast)", "=", "someone you want to know"], example: "e.g. \"Sweet office girl by day × your girlfriend by night\"" } },
            { pose: "talk", tts: "[passionate] The internet reaches people you'd never meet in real life. If you're distinctive enough, with enough contrast, online, that's a fatal attraction!",
              board: { type: "checklist", id: "c13", heading: "Readiness check", scoring: true, items: "same", reveal: 1 } },
            { pose: "warn", tts: "[serious, advising] Two: time. Please, have four weeks of content ready before you launch. Don't scramble while you're live. How much is four weeks? I did the math.", reveal: 2 },
            { pose: "point", tts: "[clear, helpful] One post a day is twenty-eight posts. Two PPV drops a week is eight paid sets. Plus one monthly surprise. Stock up first, and you'll launch with confidence.",
              board: { type: "calc", heading: "📦 How much is 4 weeks of content?", rows: [
                { l: "Daily posts", f: "1 × 28 days", r: "28 posts" },
                { l: "DM PPV", f: "2 × 4 weeks", r: "8 sets" },
                { l: "Monthly surprise", f: "1 × 1 month", r: "1" } ], total: "Stock up first — launch stress-free", source: "Rhythm from chapter 2 \"core rhythm\"" } },
            { pose: "think", tts: "[thoughtful, calm] Three: mindset. Think about it: there are eight billion people in the world, over two billion aged twenty-five to forty-five. A few mean comments? Tiny.",
              board: { type: "checklist", id: "c13", heading: "Readiness check", scoring: true, items: "same", reveal: 3 } },
            { pose: "cheer", tts: "[laughing lightly, upbeat] Plus, comments that spark debate actually make the algorithm push you! So focus on great content and let more people see how good you are.", reveal: 3 },
            { pose: "talk", tts: "[casual, playful] Four: gear. A phone that shoots video, decent lighting, simple audio... or just talk really loud, haha!", reveal: 5 },
            { pose: "point", tts: "[confident, clear] Five: be willing to learn the system, and read the numbers. Sounds hard? There are only four, and one example makes them click.", reveal: 7 },
            { pose: "talk", tts: "[teaching, friendly] Say you have a hundred subscribers and made fifteen hundred dollars this month. Each person brought in fifteen on average. That's ARPU.",
              board: { type: "calc", heading: "🧮 Four numbers, one example", rows: [
                { l: "ARPU (avg revenue per fan)", f: "$1,500 ÷ 100 fans", r: "$15" },
                { l: "RR (renewal rate)", f: "100 due, 60 renew", r: "60%" },
                { l: "PPV unlock rate", f: "Sent to 100, 25 unlock", r: "25%" },
                { l: "LTV (lifetime value)", f: "$15 × 4 months avg", r: "$60" } ], reveal: 1, total: "Higher LTV = you keep fans longer" } },
            { pose: "point", tts: "[clear] If a hundred subs are due and sixty renew, your renewal rate is sixty percent. Send a PPV to a hundred, twenty-five unlock, that's twenty-five percent.", reveal: 3 },
            { pose: "cheer", tts: "[excited] And finally: fifteen a month, staying four months on average, means each fan is worth sixty dollars. That's LTV! The longer they stay, the more you earn.", reveal: 4 },
            { pose: "talk", tts: "[warm] Now score yourself. Six or more is a green light: launch small and test the waters. Four or five is yellow: shore up, then run a four-week trial. Three or fewer is red: build your mindset first, and don't go public yet.",
              board: { type: "lights", heading: "Self-assessment", items: [
                { color: "green", label: "Green · 6+", text: "Quick recovery, systems in place → soft launch" },
                { color: "yellow", label: "Yellow · 4–5", text: "Add anonymity, scripts, support → 4-week trial" },
                { color: "red", label: "Red · 3 or fewer", text: "Mindset work + private testing → not public yet" } ] } }
          ]
        }
      ]
    },
    {
      id: "m2",
      no: 2,
      title: "Account & System Setup",
      outcome: "A working account and payouts, plus your base data and workflow",
      bg: "office",
      intro: {
        lines: [
          { pose: "cheer", tts: "[excited] Welcome to chapter two: account and system setup!",
            board: { type: "chapter", no: 2, title: "Account & System Setup", items: ["Sign-up & verification", "Dashboard tour", "Payout setup", "Paxum account", "Crypto exchanges & cards", "Content asset management"], goal: "A working account and payouts, plus your base data and workflow" } },
          { pose: "talk", tts: "[confident] This is the most hands-on chapter. Follow along, and you'll finish with a working account, payouts that work, and a system for organizing your content." },
          { pose: "warn", tts: "[playful but serious] Quick heads-up: some documents, like a recent proof of address, can take a while to get. Gather them now, then come back!" }
        ]
      },
      outro: {
        lines: [
          { pose: "talk", tts: "[warm] So much hands-on work in chapter two, great job! Let's sum up six key points.",
            board: { type: "bullets", heading: "📝 Module 2 recap", items: [
              { icon: "📧", label: "Separate lives", text: "Work email, stage name, accounts" },
              { icon: "🪪", label: "Matching info", text: "Name, address, DOB = ID" },
              { icon: "🔐", label: "Turn on 2FA", text: "Your account is your shop" },
              { icon: "🧾", label: "Batch payouts", text: "Fee share differs 10×" },
              { icon: "⛓️", label: "Right network", text: "Test crypto with small amounts" },
              { icon: "💾", label: "3-2-1 backup", text: "Your content is your asset" } ], reveal: 6 } },
          { pose: "cheer", tts: "[excited, proud] Amazing! Module 2 is done! You now have a working account, payouts that work, and your own workflow.",
            board: { type: "done", title: "Module 2 complete!", text: "Outcome: a working account and payouts, plus your base data and workflow" } },
          { pose: "point", tts: "[excited, teasing] Next up is everyone's favorite: shooting and content! I'll show you how to make photos and videos people can't wait to pay for." }
        ]
      },
      lessons: [
        {
          id: "2.1",
          title: "Sign-up & verification",
          bg: "office",
          lines: [
            { pose: "cheer", tts: "[energetic] Lesson one: let's get hands-on and open your account!",
              board: { type: "title", kicker: "MODULE 2 · 2.1", title: "Sign-up & verification", sub: "Open your creator account, step by step" } },
            { pose: "point", tts: "[helpful] Before we start, get these five things ready, and you won't get stuck later.",
              board: { type: "docs", heading: "🧰 Before you sign up", items: [
                { icon: "🛂", label: "Passport", text: "Valid, color, all four corners" },
                { icon: "📧", label: "Work-only Gmail", text: "Fully separate from personal" },
                { icon: "📱", label: "Phone", text: "Codes + selfie liveness check" },
                { icon: "🏦", label: "Payout method", text: "Paxum or USD account (chapter 2)" },
                { icon: "💡", label: "A well-lit spot", text: "For the selfie — no filters" } ] } },
            { pose: "point", tts: "[helpful, clear] Step one: create a Gmail just for work. Keep work and personal life separate from day one.",
              board: { type: "steps", heading: "Sign-up flow", items: [
                { label: "Work email", text: "A dedicated Gmail, separate from personal" },
                { label: "Sign up & verify", text: "Up to 3 accounts; start with one" },
                { label: "Become a creator", text: "More → Become a creator" },
                { label: "ID & age check", text: "Passport + selfie liveness" },
                { label: "Tax info", text: "Non-US: W-8BEN" },
                { label: "Payout setup", text: "Link Paxum etc., test deposit" },
                { label: "Turn on 2FA", text: "Backup codes + login alerts" } ], reveal: 2 } },
            { pose: "talk", tts: "[sharing a tip] Little secret: you can have up to three accounts. I suggest one paid, one free for traffic, and one for AI content. But for now, just start with one.", reveal: 2 },
            { pose: "point", tts: "[instructive] Once you log in, click More in the left menu, then Become a creator. Fill in your display name, username, bio, and country.", reveal: 3 },
            { pose: "warn", tts: "[serious, emphatic] Careful! Your country must match your ID, and your name, birthday, and address must match it exactly. Otherwise, verification will get stuck.", reveal: 3 },
            { pose: "talk", tts: "[playful, light] Keep your username to three syllables or less. Easy to remember, easy to spell! Fans should be able to type it right the first time.",
              board: { type: "names", heading: "A catchy @username", good: ["kazumi", "aisha", "mona wu"], rule: "≤ 3 syllables · memorable · same on every platform" } },
            { pose: "point", tts: "[cheerful] I've prepared a bio template for you. Swap in your name and your level, and it's ready to go.",
              board: { type: "bio" } },
            { pose: "talk", tts: "[instructive, calm] Next, identity verification. Upload your passport, then do a live selfie check. All four corners of the ID in frame, no glare. No filters on the selfie, and plenty of light.",
              board: { type: "steps", heading: "Sign-up flow", items: "same", reveal: 4 } },
            { pose: "point", tts: "[clear] For tax, if you're not a US person, fill out the W-8BEN to show you're not a US tax resident. Then link a payout method, and do a small test deposit first.", reveal: 6 },
            { pose: "warn", tts: "[firm, protective] And finally, you must turn on two-factor authentication and login alerts. Your account is your storefront. Lock it up!", reveal: 7 },
            { pose: "warn", tts: "[serious] A few more key points: the platform takes twenty percent. Earnings usually wait seven days before withdrawal, longer for new accounts. And anyone else on camera needs written consent.",
              board: { type: "bullets", heading: "⚠️ Risk notes", items: [
                { icon: "💸", label: "20% fee", text: "You keep 80%, minus payout / FX" },
                { icon: "⏳", label: "Hold ≈ 7 days", text: "Longer for new accounts / some regions" },
                { icon: "🪪", label: "Matching info", text: "Name, address, DOB = your ID" },
                { icon: "📝", label: "Consent forms", text: "Written consent + age check" } ], reveal: 4,
                source: "Hold period as shown in your OnlyFans dashboard" } },
            { pose: "cheer", tts: "[warm, cheerful] Good luck signing up! Next, I'll give you a tour of the dashboard." }
          ]
        },
        {
          id: "2.2",
          title: "Dashboard tour",
          bg: "office",
          lines: [
            { pose: "talk", tts: "[lively] Your account's ready, so let's tour the dashboard! Posts, post settings, chat, unlocks, and scheduling, all in one go.",
              board: { type: "title", kicker: "MODULE 2 · 2.2", title: "Dashboard tour", sub: "Posts · Settings · Chat · Unlocks · Scheduling" } },
            { pose: "point", tts: "[explaining] First, content levels. You're totally free, but from a marketing angle: what you post publicly should be one level below your paid content.",
              board: { type: "ladder", heading: "Content ladder", items: [
                { label: "Paid content", text: "Your highest level", tag: "PPV" },
                { label: "Public posts", text: "One step lower, keep them curious", tag: "Post" },
                { label: "Vibe", text: "Sexy can be a mood, an emotion", tag: "Vibe" } ] } },
            { pose: "talk", tts: "[intimate, soft] It's like a movie trailer. You never show the ending. The more authentic the photo, the more fans care. They want to know the real you." },
            { pose: "warn", tts: "[serious, a bit sad but strong] In post settings, watermarks are crucial. Be prepared: everything can be stolen and leaked.",
              board: { type: "bullets", heading: "⚙️ Post settings", items: [
                { icon: "🏷️", label: "Pricing", text: "PPV unlock or subscriber-only" },
                { icon: "🎁", label: "Unlock deals", text: "Bundles, promo codes, time limits" },
                { icon: "👀", label: "Visibility", text: "Everyone / subs / custom lists" },
                { icon: "💧", label: "Watermark", text: "On every photo and video!" } ], reveal: 4 } },
            { pose: "talk", tts: "[hopeful, gentle] But don't lose heart. Fans who truly love you can follow that watermark right back to you. A watermark is free advertising, too." },
            { pose: "point", tts: "[confident] PPV tips: start with a short teaser, make the hook clear, then offer three tiers: light, standard, and deluxe. Most people pick the middle one. It's called the middle-option effect.",
              board: { type: "tiers", heading: "PPV price tiers (example)", items: [
                { label: "Light $8", icon: "🍬" }, { label: "Standard $15", icon: "🍰" }, { label: "Deluxe $30", icon: "🎂" } ], note: "Prices are illustrative | With 3 options most pick the middle → put your best seller there" } },
            { pose: "talk", tts: "[playful, flirty tone] For DMs, the flow is: warm up, drop the hook, then a limited-time upsell! Let's look at an example.",
              board: { type: "chat", heading: "DM in 3 steps (example)", items: ["Warm up: long day... what are you up to? ☕", "Hook: I just shot a new set, kinda shy 👀", "Limited: special price, only for whoever replies tonight ⏰"] } },
            { pose: "point", tts: "[energetic] Scheduling is your best friend! The base rhythm: at least one post a day, two PPV DMs a week, and one surprise a month.",
              board: { type: "rhythm", heading: "Core rhythm", items: [
                { n: "1", unit: "per day", label: "Post" }, { n: "2", unit: "per week", label: "DM PPV" }, { n: "1", unit: "per month", label: "Surprise" } ] } },
            { pose: "think", tts: "[thoughtful] Then check your numbers weekly: renewal rate, PPV unlock rate, ARPU, and LTV. Tools like OF Buddy can track them, so you can keep fine-tuning your pricing and scripts." }
          ]
        },
        {
          id: "2.3",
          title: "Payout setup",
          bg: "office",
          lines: [
            { pose: "talk", tts: "[upbeat] Next up, everyone's favorite part: how the money actually gets to you!",
              board: { type: "title", kicker: "MODULE 2 · 2.3", title: "Payout setup", sub: "Getting paid & common issues" } },
            { pose: "point", tts: "[clear] Let's follow a hundred dollars. A fan pays a hundred, the platform takes twenty, and eighty lands in your balance. After the hold period, you withdraw to Paxum or your bank.",
              board: { type: "flow", heading: "Follow the $100", items: [
                { icon: "🧑‍💻", label: "Fan pays $100" }, { icon: "🏦", label: "OnlyFans", sub: "takes $20 · hold" }, { icon: "👛", label: "Your $80", sub: "withdraw at minimum" }, { icon: "🏠", label: "Bank / Paxum", sub: "minus payout fee" } ] } },
            { pose: "talk", tts: "[explaining] There's a minimum withdrawal of around ten to twenty dollars; check your dashboard. Earnings usually wait seven days, and new accounts may wait longer.",
              board: { type: "stats", heading: "💵 Payout basics", items: [
                { value: "≈ 7 days", label: "Typical hold" },
                { value: "up to 21 days", label: "New accounts / some regions" },
                { value: "$10–20", label: "Minimum withdrawal" },
                { value: "80%", label: "Your share" } ],
                source: "Source: OnlyFans creator dashboard & 2026 creator guides — your dashboard is final" } },
            { pose: "warn", tts: "[exasperated, then emphatic] Super important! When you open a US dollar account, check your name and address carefully. Otherwise, you'll be running back to the bank again, and again.",
              board: { type: "bullets", heading: "❓ Common issues", items: [
                { icon: "🪪", label: "Mismatched info", text: "Name, address, DOB must match passport" },
                { icon: "🚀", label: "Arrival time", text: "ACH is fast, wires are slow" },
                { icon: "🧾", label: "Fees", text: "Every wire costs → withdraw in batches" },
                { icon: "⏳", label: "Hold period", text: "Usually 7 days before withdrawal" } ], reveal: 1 } },
            { pose: "talk", tts: "[explaining] Speeds differ, too. ACH is usually faster, international wires are slower. And every wire has a fee, so don't withdraw daily. Batch it up.", reveal: 4 },
            { pose: "think", tts: "[sharing an idea] Once you've earned a good amount, consider a US brokerage account so your money keeps working for you. For taxes, everyone's different, so talk to an accountant who knows cross-border income." },
            { pose: "cheer", tts: "[encouraging] In the next lesson, let's get your Paxum account set up!" }
          ]
        },
        {
          id: "2.4",
          title: "Paxum account",
          bg: "office",
          lines: [
            { pose: "talk", tts: "[friendly] Paxum is the go-to e-wallet for adult platforms. Think of it as an online bank made for creator income. You'll need ID and address verification before linking it.",
              board: { type: "title", kicker: "MODULE 2 · 2.4", title: "Paxum account", sub: "The go-to wallet for adult platforms" } },
            { pose: "point", tts: "[instructive] To apply for Paxum, you'll need two things: your passport, and proof of address from the last three months, like a utility bill or bank statement.",
              board: { type: "docs", heading: "📂 Documents", items: [
                { icon: "🛂", label: "Passport", text: "6+ months valid · color · all corners · no glare" },
                { icon: "🏠", label: "Proof of address", text: "Utility bill or bank statement from the last 3 months" } ] } },
            { pose: "talk", tts: "[helpful] The name and address on your proof must match what you enter exactly. Files can be JPG, PNG, or PDF, in color and uncropped." },
            { pose: "point", tts: "[step by step, clear] The flow: sign up on Paxum, upload your documents for KYC, set up your account once approved, go back to OnlyFans payout settings to link Paxum, and finally, a small test deposit.",
              board: { type: "steps", heading: "Apply & link", items: [
                { label: "Sign up on Paxum", text: "Upload docs, complete KYC" },
                { label: "Create account", text: "Name & address match passport" },
                { label: "Link in OnlyFans", text: "Settings → Payout → Paxum" },
                { label: "Test deposit", text: "Confirm the route works" } ], reveal: 4 } },
            { pose: "warn", tts: "[careful, practical] Know the fees, too: a USD wire from Paxum to your own bank is listed at about fifty dollars each. So again, batch your withdrawals!",
              board: { type: "calc", heading: "🧾 Why batch withdrawals?", rows: [
                { l: "Weekly $200", f: "$50 fee ÷ $200", r: "eats 25%" },
                { l: "Monthly $2,000", f: "$50 fee ÷ $2,000", r: "only 2.5%" } ], total: "Fewer withdrawals, more money kept",
                source: "Source: Paxum personal account fees (USD wire to own account); fees may change" } },
            { pose: "cheer", tts: "[satisfied, happy] Once that's done, Paxum becomes your main payout channel, and your cash flow is steady!" }
          ]
        },
        {
          id: "2.6",
          title: "Crypto exchanges & cards",
          bg: "office",
          lines: [
            { pose: "talk", tts: "[cheerful] In this lesson, let's get to know crypto: the world's major exchanges, and crypto cards you can spend with directly.",
              board: { type: "title", kicker: "MODULE 2 · 2.6", title: "Crypto exchanges & cards", sub: "Backup payouts · Stablecoins · Crypto cards" } },
            { pose: "talk", tts: "[explaining] Why learn this? Fansly and other platforms can pay out in crypto, fast and across borders, which gives you a second payout route besides your bank. But prices move, and laws and taxes differ by country.",
              board: { type: "bullets", heading: "⚖️ Crypto payouts: pros & risks", items: [
                { icon: "⚡", label: "Fast cross-border", text: "No waiting on wires" },
                { icon: "🛣️", label: "Second route", text: "Not stuck with one bank" },
                { icon: "📉", label: "Price swings", text: "Use stablecoins to reduce risk" },
                { icon: "⚖️", label: "Law & tax", text: "Rules differ by country" } ], reveal: 4 } },
            { pose: "point", tts: "[teaching] First, stablecoins: USDT and USDC are pegged one to one to the US dollar. Get paid in stablecoins, and you don't have to worry about prices going up and down.",
              board: { type: "big", label: "Stablecoins USDT / USDC", value: "1 coin ≈ $1", note: "Prefer stablecoins for payouts and transfers → avoid price swings" } },
            { pose: "point", tts: "[explaining] Here are five major exchanges: Binance is the biggest, Coinbase is a US listed company, Kraken is a veteran, and OKX and Bybit are popular in Asia. Before choosing, check they're available in your country.",
              board: { type: "compare", heading: "🏦 Major crypto exchanges", rows: [
                { k: "Binance", v: "Largest by volume, low fees; restricted in some countries" },
                { k: "Coinbase", v: "US-listed, highly regulated; US & EU friendly" },
                { k: "Kraken", v: "Veteran exchange, strong security record" },
                { k: "OKX", v: "Popular in Asia, full-featured" },
                { k: "Bybit", v: "Popular in Asia, has its own crypto card" } ], reveal: 5,
                source: "Source: exchange websites; availability depends on local law" } },
            { pose: "cheer", tts: "[excited] Next up, crypto cards! Load crypto onto them, and spend like a regular Visa or Mastercard. You can even add them to your phone wallet.",
              board: { type: "compare", heading: "💳 Crypto cards compared", rows: [
                { k: "Bybit Card", v: "Mastercard; ~0.9% conversion fee; many coins" },
                { k: "RedotPay", v: "Visa; 100+ countries; not for US residents" },
                { k: "Crypto.com", v: "Visa; tiered rewards, higher tier = more back" },
                { k: "Coinbase Card", v: "Free in the US; ~2.49% liquidation fee" },
                { k: "Binance Card", v: "Select regions; ~0.9% fee" } ], reveal: 5,
                source: "Source: Coin Bureau, Koinly 2026 crypto card reviews; fees and regions change" } },
            { pose: "point", tts: "[instructive] Steps: complete KYC on the exchange, deposit USDT or USDC, apply for and activate the card, add it to your phone wallet, and start spending. Each purchase converts automatically, so keep your records.",
              board: { type: "steps", heading: "🪪 Using a crypto card", items: [
                { label: "Complete KYC", text: "Identity verification" },
                { label: "Deposit stablecoins", text: "USDT / USDC" },
                { label: "Get the card", text: "Physical or virtual" },
                { label: "Add to phone", text: "Apple Pay / Google Pay" },
                { label: "Spend", text: "Auto-converts; keep records" } ], reveal: 5 } },
            { pose: "warn", tts: "[very serious, protective] Five safety rules: turn on two-factor authentication, set a withdrawal whitelist, pick the right network, test with a small amount first, and never keep everything on an exchange.",
              board: { type: "bullets", heading: "🛡️ Five crypto safety rules", items: [
                { icon: "🔐", label: "Turn on 2FA", text: "For login and withdrawals" },
                { icon: "📋", label: "Withdrawal whitelist", text: "Only to addresses you set" },
                { icon: "⛓️", label: "Right network", text: "USDT runs on many networks — match both sides" },
                { icon: "🧪", label: "Test small first", text: "Confirm arrival before big transfers" },
                { icon: "🏦", label: "Spread it out", text: "Don't keep it all on an exchange" } ], reveal: 5 } },
            { pose: "talk", tts: "[calm] One last reminder: crypto tax and law differ in every country. Download and keep all your transaction records, and hand them to your accountant at tax time." },
            { pose: "cheer", tts: "[encouraging] Learn this, and you'll have a payout route that no single bank can block!" }
          ]
        },
        {
          id: "2.7",
          title: "Content asset management",
          bg: "office",
          lines: [
            { pose: "talk", tts: "[energetic] Last lesson of Module 2! Let's turn all your footage, finished content, releases, and data into one system.",
              board: { type: "title", kicker: "MODULE 2 · 2.7", title: "Content asset management", sub: "Google Drive layout · Sheets planning" } },
            { pose: "point", tts: "[organized, cheerful] In Google Drive, make one root folder called Content Library, with six folders inside. Just follow this layout.",
              board: { type: "folders", heading: "📁 Content Library", items: ["01 Daily shoots", "02 Social media", "03 Photographer shoots", "04 OnlyFans exports", "05 Temp", "06 Fan tracking"] } },
            { pose: "talk", tts: "[clear] Name every file by date, platform, topic, and version. That way, even a year later, you'll find anything in seconds.",
              board: { type: "filename", heading: "File naming", parts: [
                { t: "20251124", k: "Date" }, { t: "OF", k: "Platform" }, { t: "PPV_schoolgirl", k: "Topic" }, { t: "v2", k: "Version" } ] } },
            { pose: "warn", tts: "[serious, caring] For backups, remember three-two-one: three copies, on two different kinds of storage, with one off-site or in the cloud. Your content is your asset.",
              board: { type: "stats", heading: "💾 3-2-1 backup rule", items: [
                { value: "3", label: "copies of each file" },
                { value: "2", label: "different storage types" },
                { value: "1", label: "copy off-site / cloud" },
                { value: "0", label: "\"I wish I'd backed up\"" } ],
                source: "3-2-1 is the industry-standard backup rule" } },
            { pose: "point", tts: "[explaining] In Google Sheets, I suggest six tabs: content pipeline, weekly schedule, asset tracker, revenue log, idea backlog, and technical metadata.",
              board: { type: "sheets", heading: "📊 Google Sheets", items: [
                { label: "Content Pipeline", text: "Plan → shoot → edit → post → distribute → review" },
                { label: "Weekly Schedule", text: "Posting days & times per platform" },
                { label: "Asset Tracker", text: "Consent forms, license expiry" },
                { label: "Revenue Log", text: "Subs / PPV / tips, net, FX rate" },
                { label: "Idea Backlog", text: "Tags, priority, ROI" },
                { label: "Metadata", text: "Ratio, resolution, bitrate, length" } ] } },
            { pose: "talk", tts: "[warm, motivating] Finally, the SOP: create and name, import footage, edit and export, schedule and post, file the paperwork, and review results a week later. Every piece of content goes through all six steps.",
              board: { type: "cycle", heading: "🔁 6-step SOP", items: ["Create & name", "Import", "Edit & export", "Post & share", "File consent", "Review"] } }
          ]
        }
      ]
    }
  ]
};
