(() => {
  "use strict";
  const VOICES = window.VOICE || {};
  const MUTE = /[?&]mute=1/.test(location.search); // 測試用：完全靜音
  const playClip = (src) => { if (!MUTE) new Audio(src).play().catch(() => {}); };
  const $ = (s) => document.querySelector(s);
  const store = {
    get(k, d) { try { const v = localStorage.getItem("ofc." + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem("ofc." + k, JSON.stringify(v)); } catch {} },
  };

  // ---------- 舞台縮放 ----------
  const stage = $("#stage");
  // 直式螢幕（手機／平板直拿）改用 720×1280 的直式版面，其餘用 1280×720
  let portrait = null;
  function fit() {
    const p = innerWidth / innerHeight < 0.8;
    // 直式：高度依螢幕比例延伸（1280～1560），讓長螢幕手機不留黑邊
    const W = p ? 720 : 1280, H = p ? Math.round(Math.min(1560, Math.max(1280, 720 * innerHeight / innerWidth))) : 720;
    stage.style.height = H + "px";
    stage.style.setProperty("--stage-h", H + "px");
    const s = Math.min(innerWidth / W, innerHeight / H);
    stage.classList.toggle("portrait", p);
    document.body.classList.toggle("portrait", p);
    stage.style.transform = `translate(-50%, -50%) scale(${s})`;
    if (portrait !== null && portrait !== p) {
      // 轉向後重新計算白板縮放與字幕字級
      setTimeout(() => {
        const b = document.querySelector("#board");
        if (b && typeof fitBoard === "function") fitBoard(b);
        const dt = document.querySelector("#dialog-text");
        if (dt && dt.textContent && typeof fitDialog === "function") fitDialog(dt, dt.textContent);
      }, 50);
    }
    portrait = p;
  }
  addEventListener("resize", fit); fit();

  // ---------- 語言 & 資料 ----------
  const UI = window.UI_STRINGS, LANGS = window.LANGS, COURSES = window.COURSES;
  const LEGACY = { zh: "zh-Hant", "zh-TW": "zh-Hant", "zh-HK": "zh-Hant", "zh-CN": "zh-Hans", "zh-SG": "zh-Hans" };
  const available = (c) => LANGS.some((l) => l.code === c) && COURSES[c];
  function detectLang() {
    const q = (location.search.match(/[?&]lang=([\w-]+)/) || [])[1];
    const cands = [q, store.get("lang"), ...(navigator.languages || [navigator.language || ""])];
    for (let c of cands) {
      if (!c) continue;
      c = LEGACY[c] || c;
      if (available(c)) return c;
      if (/^zh/i.test(c)) return /hans|cn|sg/i.test(c) ? "zh-Hans" : "zh-Hant";
      const base = c.split("-")[0];
      if (available(base)) return base;
    }
    return "en";
  }
  let lang = detectLang();

  // 依地區過濾：帶 only:"tw" 的內容只在繁中出現，only:"intl" 只在其他語系出現
  function filterRegion(x, region) {
    if (Array.isArray(x)) return x.filter((v) => !(v && typeof v === "object" && v.only && v.only !== region)).map((v) => filterRegion(v, region));
    if (x && typeof x === "object") { const o = {}; for (const k in x) o[k] = filterRegion(x[k], region); return o; }
    return x;
  }

  let C, LESSONS, VOICE, T, LANG;
  function loadLang() {
    LANG = LANGS.find((l) => l.code === lang);
    C = filterRegion(COURSES[lang], LANG.region);
    // 語音目前只有中文與英文：中文語系用中文語音，其他語系一律播英文語音（字幕仍為該語言）
    VOICE = VOICES[lang.startsWith("zh") ? lang : "en"] || {};
    T = UI[lang] || UI.en;
    LESSONS = [];
    C.modules.forEach((m) => {
      if (m.intro) LESSONS.push({ ...m.intro, id: `${m.no}.intro`, label: T.intro, title: m.title, kind: "intro", bg: m.intro.bg || m.bg, module: m });
      m.lessons.forEach((l, i) => LESSONS.push({ ...l, label: `${m.no}.${i + 1}`, bg: l.bg || m.bg, module: m }));
      if (m.outro) LESSONS.push({ ...m.outro, id: `${m.no}.outro`, label: T.outro, title: T.outroTitle, kind: "outro", bg: m.outro.bg || m.bg, module: m });
    });
    document.documentElement.lang = lang;
    document.body.classList.toggle("lang-en", LANG.latin);
    document.body.dataset.lang = lang;
    document.title = T.title;
    const set = (sel, v) => { const e = $(sel); if (e) e.textContent = v; };
    set(".title-kicker", T.kicker); set(".logo", T.logo); set(".logo-sub", T.logoSub); set("#btn-start", T.start);
    set(".menu-title", T.menuTitle); set(".menu-hint", T.menuHint); set(".nameplate", T.name); set("#no-voice-note", T.noVoice);
    const tip = (sel, v) => { const e = $(sel); if (e) { e.title = v; e.setAttribute("aria-label", v); } };
    tip("#btn-prev", T.ctrl.prev); tip("#btn-play", T.ctrl.play); tip("#btn-next", T.ctrl.next);
    tip("#btn-auto", T.ctrl.auto); tip("#btn-bgm", T.ctrl.bgm); tip("#btn-voice", T.ctrl.voice); tip("#btn-menu", T.ctrl.menu);
    document.querySelectorAll(".lang-btn").forEach((b) => { b.textContent = "🌐 " + LANG.short; b.title = T.language; });
    document.querySelectorAll(".of-label").forEach((e) => e.textContent = T.ofLink);
    set("#gate-title", T.gateTitle); set("#gate-text", T.gateText); set("#gate-yes", T.gateYes); set("#gate-no", T.gateNo);
    $("#no-voice-note").hidden = Object.keys(VOICE).length > 0;
  }
  loadLang();

  // 語言選單
  const langMenu = document.createElement("div");
  langMenu.id = "lang-menu"; langMenu.className = "px-box"; langMenu.hidden = true;
  stage.appendChild(langMenu);
  function openLangMenu(btn) {
    langMenu.innerHTML = LANGS.filter((l) => COURSES[l.code]).map((l) =>
      `<button class="lang-opt${l.code === lang ? " on" : ""}" data-code="${l.code}">${l.label}</button>`).join("");
    const r = btn.getBoundingClientRect(), sr = stage.getBoundingClientRect(), k = sr.width / 1280;
    langMenu.style.right = `${(sr.right - r.right) / k}px`;
    langMenu.style.top = btn.closest(".controls") ? "" : `${(r.bottom - sr.top) / k + 8}px`;
    langMenu.style.bottom = btn.closest(".controls") ? `${(sr.bottom - r.top) / k + 8}px` : "";
    langMenu.hidden = false;
    langMenu.querySelectorAll(".lang-opt").forEach((o) => o.onclick = (e) => {
      e.stopPropagation(); langMenu.hidden = true; sfx("select");
      if (o.dataset.code !== lang) switchLang(o.dataset.code);
    });
  }
  addEventListener("click", () => { langMenu.hidden = true; });
  function switchLang(code) {
    const cur = LESSONS && LESSONS[state.li] ? LESSONS[state.li].id : null;
    lang = code; store.set("lang", lang);
    loadLang();
    if ($("#menu-screen").classList.contains("active")) buildMenu();
    if ($("#lesson-screen").classList.contains("active")) {
      let li = LESSONS.findIndex((l) => l.id === cur);
      if (li < 0) li = Math.min(state.li, LESSONS.length - 1);
      stopLine(); enterLesson(li); playLine(Math.min(state.i, LESSONS[li].lines.length - 1));
    }
  }
  document.querySelectorAll(".lang-btn").forEach((b) => b.onclick = (e) => { e.stopPropagation(); sfx("select"); langMenu.hidden ? openLangMenu(b) : (langMenu.hidden = true); });
  const ICON = {
    play: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2h2v1h2v1h2v1h2v1h2v4h-2v1h-2v1h-2v1H6v1H4z"/></svg>',
    pause: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 2h4v12H3zM9 2h4v12H9z"/></svg>',
  };
  const stripTags = (t) => t.replace(/\[[^\]]*\]\s*/g, "").trim();
  const MOUTH = { talk: "talk_c", point: "point_c", cheer: "cheer_c", blink: "blink_c" };
  const EMOTE = { cheer: "✨", warn: "❗", think: "", point: "", talk: "", idle: "" };
  const BG = Object.fromEntries(["room", "office", "studio", "city", "plan", "rooftop", "shop", "safe"].map((k) => [k, `img/bg_${k}.jpg`]));
  const BGM = {
    title: "audio/bgm_title.mp3", room: "audio/bgm_room.mp3", office: "audio/bgm_office.mp3",
    studio: "audio/bgm_room.mp3", shop: "audio/bgm_room.mp3",
    city: "audio/bgm_upbeat.mp3", rooftop: "audio/bgm_upbeat.mp3",
    plan: "audio/bgm_calm.mp3", safe: "audio/bgm_calm.mp3",
  };

  // 預載精靈圖
  ["idle", "talk", "talk_c", "point", "point_c", "think", "warn", "cheer", "cheer_c", "blink", "blink_c"]
    .forEach((n) => { const i = new Image(); i.src = `img/char_${n}.png`; });

  // ---------- 閃亮粒子 ----------
  document.querySelectorAll(".sparkles").forEach((el) => {
    for (let i = 0; i < 26; i++) {
      const s = document.createElement("i");
      if (i % 4 === 0) { s.className = "h"; s.textContent = "♥"; s.style.bottom = "-20px"; s.style.animationDelay = `${-Math.random() * 9}s`; }
      else { s.style.top = `${Math.random() * 100}%`; s.style.animationDelay = `${-Math.random() * 3}s`; }
      s.style.left = `${Math.random() * 100}%`;
      el.appendChild(s);
    }
  });

  // ---------- 音效 (WebAudio 8-bit) ----------
  let ac = null;
  function sfx(type) {
    if (!ac || MUTE) return;
    const t = ac.currentTime, o = ac.createOscillator(), g = ac.createGain();
    o.type = "square"; o.connect(g); g.connect(ac.destination);
    const P = {
      blip: [[880 + Math.random() * 180, 0], 0.025, 0.03],
      pop: [[520, 0], [1040, 0.06], 0.05, 0.12],
      check: [[660, 0], [990, 0.07], [1320, 0.14], 0.05, 0.22],
      uncheck: [[440, 0], [330, 0.06], 0.04, 0.12],
      select: [[523, 0], [784, 0.05], 0.05, 0.1],
    }[type];
    const vol = P[P.length - 2], dur = P[P.length - 1];
    P.slice(0, -2).forEach(([f, at]) => o.frequency.setValueAtTime(f, t + at));
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.start(t); o.stop(t + dur + 0.02);
  }

  // ---------- 背景音樂 ----------
  const bgm = new Audio(); bgm.loop = true;
  const voiceEl = new Audio(); voiceEl.preload = "auto";
  // iOS Safari：音訊元件需在使用者手勢中先播放一次才會解鎖
  function unlockAudio() {
    if (MUTE) return;
    try { voiceEl.muted = true; voiceEl.play().then(() => { voiceEl.pause(); voiceEl.muted = false; }).catch(() => { voiceEl.muted = false; }); } catch (e) {}
  }
  let bgmOn = store.get("bgm", true), voiceOn = store.get("voice", true), auto = store.get("auto", true);
  const BGM_VOL = 0.45, BGM_DUCK = 0.16; // Lyria 曲目已正規化到 -26 LUFS，說話時再壓低
  function playBgm(key) {
    const src = BGM[key];
    if (!src || MUTE) return;
    if (!bgm.src.endsWith(src)) { bgm.src = src; }
    bgm.volume = BGM_VOL;
    if (bgmOn) bgm.play().catch(() => {});
  }
  function duck(on) { bgm.volume = on ? BGM_DUCK : BGM_VOL; }

  // ---------- 畫面切換 ----------
  function show(id) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.toggle("active", s.id === id));
  }
  function wipe(mid) {
    const w = document.createElement("div"); w.className = "wipe";
    for (let i = 0; i < 16; i++) { const b = document.createElement("b"); b.style.animationDelay = `${i * 0.015}s`; w.appendChild(b); }
    stage.appendChild(w);
    setTimeout(mid, 330);
    setTimeout(() => w.remove(), 1000);
  }

  // ---------- 標題 & 選單 ----------
  $("#btn-start").disabled = false; // 資料載入完成才可開始
  $("#btn-start").onclick = () => {
    if (!store.get("adult")) return openGate(null, "enter", start); // 第一次進課程先確認 18+
    start();
  };
  function start() {
    unlockAudio();
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    sfx("select");
    playBgm("title");
    wipe(() => { buildMenu(); show("menu-screen"); });
  }
  function buildMenu() {
    const done = store.get("done", {});
    const list = $("#menu-list"); list.innerHTML = "";
    C.modules.forEach((m) => {
      const h = document.createElement("div"); h.className = "menu-module";
      h.innerHTML = `MODULE ${m.no}｜${esc(m.title)}<small>${esc(m.outcome)}</small>`;
      list.appendChild(h);
      const g = document.createElement("div"); g.className = "menu-lessons";
      LESSONS.forEach((l, li) => {
        if (l.module !== m) return;
        const b = document.createElement("button");
        b.className = "menu-lesson" + (done[l.id] ? " done" : "") + (l.kind ? " " + l.kind : "");
        const title = l.kind ? (l.kind === "intro" ? "✨ " : "🏁 ") + l.title : l.title;
        b.innerHTML = `<span class="no">${esc(l.label)}</span><span>${esc(title)}</span>`;
        b.onclick = () => { sfx("select"); startLesson(li); };
        g.appendChild(b);
      });
      list.appendChild(g);
    });
  }
  $("#btn-menu").onclick = () => { stopLine(); sfx("select"); playBgm("title"); wipe(() => { buildMenu(); show("menu-screen"); }); };

  // ---------- 課堂播放 ----------
  const state = { li: 0, i: 0, playing: false, boardKey: null, boardType: null };
  let timers = [], voice = null, flap = null, typer = null, lineDone = false, lineToken = 0;

  function clearTimers() { timers.forEach(clearTimeout); timers = []; clearInterval(flap); clearInterval(typer); flap = typer = null; }
  function stopLine() {
    clearTimers();
    lineToken++; // 讓上一句尚未完成的 play() 失敗回呼失效
    if (voice) { voice.onended = null; voice.pause(); voice = null; }
    duck(false);
    $("#char").classList.remove("talking");
  }

  function enterLesson(li) {
    state.li = li; state.boardKey = null;
    const L = LESSONS[li];
    show("lesson-screen");
    $("#lesson-bg").style.backgroundImage = `url(${BG[L.bg]})`;
    $("#hud-module").textContent = `MODULE ${L.module.no}｜${L.module.title}`;
    $("#hud-lesson").textContent = `${L.label} ${L.title}`;
    playBgm(L.bg);
  }
  function startLesson(li, atLine = 0) {
    stopLine();
    wipe(() => { enterLesson(li); setPlaying(true); playLine(atLine); });
  }

  // 計算第 i 句時的白板狀態（支援倒退）
  function boardAt(L, i) {
    let board = null, key = null, reveal = 0, focus = -1;
    for (let k = 0; k <= i; k++) {
      const ln = L.lines[k];
      if (ln.board) {
        board = ln.board;
        if (board.items === "same") {
          for (let j = k - 1; j >= 0; j--) if (L.lines[j].board && L.lines[j].board.type === board.type && Array.isArray(L.lines[j].board.items)) { board = { ...board, items: L.lines[j].board.items }; break; }
        }
        key = `${L.id}-${k}`;
        reveal = board.reveal ?? Infinity; focus = -1;
      }
      if (ln.reveal != null) { reveal = ln.reveal; focus = k === i ? ln.reveal - 1 : -1; }
      else if (k === i) focus = -1;
    }
    return { board, key, reveal, focus };
  }

  function setPose(pose, hop) {
    const c = $("#char");
    c.src = `img/char_${pose}.png`;
    c.dataset.pose = pose;
    if (hop) {
      c.classList.remove("hop", "jump", "shake"); void c.offsetWidth;
      c.classList.add(pose === "cheer" ? "jump" : pose === "warn" ? "shake" : "hop");
      setTimeout(() => c.classList.remove("hop", "jump", "shake"), 1000);
      const e = $("#emote"); const em = EMOTE[pose];
      if (em) { e.textContent = em; e.classList.remove("show"); void e.offsetWidth; e.classList.add("show"); }
    }
  }

  function playLine(i) {
    stopLine();
    const L = LESSONS[state.li];
    if (i >= L.lines.length) return finishLesson();
    if (i < 0) { if (state.li > 0) startLesson(state.li - 1, LESSONS[state.li - 1].lines.length - 1); return; }
    state.i = i; lineDone = false;
    const ln = L.lines[i];
    const text = stripTags(ln.tts);

    // 白板
    const b = boardAt(L, i);
    if (b.key !== state.boardKey) { renderBoard(b.board, b.reveal); state.boardKey = b.key; sfx("pop"); }
    updateReveal(b.reveal, b.focus);

    // 角色
    const prevPose = $("#char").dataset.pose;
    setPose(ln.pose || "talk", prevPose !== ln.pose);

    // 進度
    $("#progress-bar").style.width = `${((i + 1) / L.lines.length) * 100}%`;

    // 語音 or 字幕模式
    const v = VOICE[`${L.id}-${i}`];
    const useVoice = v && voiceOn && !MUTE;
    const dur = useVoice ? v.dur : Math.max(2.8, text.length * 0.2);
    typeText(text, Math.min(dur * 0.9, text.length * 0.09 + 0.4));
    startFlap(ln.pose || "talk");
    const dlg = $("#dialog"); dlg.classList.remove("ready");

    const onEnd = () => {
      lineDone = true;
      stopFlap(ln.pose || "talk");
      duck(false);
      dlg.classList.add("ready");
      if (state.playing && auto) timers.push(setTimeout(() => playLine(state.i + 1), 900));
    };
    if (useVoice) {
      voice = voiceEl; voice.src = v.file;
      duck(true);
      voice.onended = onEnd;
      const token = ++lineToken;
      voice.play().catch(() => { if (token === lineToken) timers.push(setTimeout(onEnd, dur * 1000)); });
      if (!state.playing) voice.pause();
    } else {
      timers.push(setTimeout(onEnd, dur * 1000));
    }
  }

  function fitDialog(el, text) {
    const keep = el.textContent;
    el.style.fontSize = ""; el.textContent = text;
    const d = $("#dialog"), cs = getComputedStyle(d);
    const maxH = d.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom) - 2;
    let fs = parseFloat(getComputedStyle(el).fontSize);
    while (el.scrollHeight > maxH && fs > 15) { fs -= 1; el.style.fontSize = fs + "px"; }
    el.textContent = keep;
  }

  function typeText(text, seconds) {
    const el = $("#dialog-text");
    // 自動縮小字級，確保長句能完整放進對話框
    el.textContent = text;
    fitDialog(el, text);
    el.textContent = "";
    let n = 0; const step = Math.max(18, (seconds * 1000) / text.length);
    typer = setInterval(() => {
      n++; el.textContent = text.slice(0, n);
      if (n % 3 === 0 && !voice) sfx("blip");
      if (n >= text.length) { clearInterval(typer); typer = null; }
    }, step);
  }
  function startFlap(pose) {
    const c = $("#char");
    c.classList.add("talking");
    if (!MOUTH[pose]) return;
    let open = true;
    flap = setInterval(() => {
      if (voice && voice.paused) return;
      open = Math.random() < (open ? 0.45 : 0.8);
      c.src = `img/char_${open ? pose : MOUTH[pose]}.png`;
    }, 110);
  }
  function stopFlap(pose) {
    clearInterval(flap); flap = null;
    const c = $("#char"); c.classList.remove("talking");
    c.src = `img/char_${MOUTH[pose] || pose}.png`;
  }

  function finishLesson() {
    const L = LESSONS[state.li];
    const done = store.get("done", {}); done[L.id] = true; store.set("done", done);
    if (state.li + 1 < LESSONS.length) {
      // 全部課程串接播放：直接進入下一節（跨章節時由下一章的「開場」接手）
      startLesson(state.li + 1);
    } else {
      playClip("audio/jingle_done.mp3");
      setPlaying(false);
      $("#dialog-text").textContent = T.end;
    }
  }

  // ---------- 控制 ----------
  function setPlaying(p) {
    state.playing = p;
    $("#btn-play").innerHTML = p ? ICON.pause : ICON.play;
    $("#btn-play").classList.toggle("paused", !p);
    if (voice) p ? voice.play().catch(() => {}) : voice.pause();
    if (p && lineDone && auto) playLine(state.i + 1);
  }
  function next() {
    sfx("select");
    if (typer || (!lineDone && !voice)) {
      // 先顯示完整字幕
      if (typer) { clearInterval(typer); typer = null; $("#dialog-text").textContent = stripTags(LESSONS[state.li].lines[state.i].tts); return; }
    }
    playLine(state.i + 1);
  }
  function prev() { sfx("select"); playLine(state.i - 1); }
  $("#btn-next").onclick = next;
  $("#btn-prev").onclick = prev;
  $("#btn-play").onclick = () => { sfx("select"); setPlaying(!state.playing); };
  $("#dialog").onclick = next;
  const tog = (id, val) => $(id).classList.toggle("on", val);
  tog("#btn-auto", auto); tog("#btn-bgm", bgmOn); tog("#btn-voice", voiceOn);
  $("#btn-auto").onclick = () => { auto = !auto; store.set("auto", auto); tog("#btn-auto", auto); if (auto && lineDone && state.playing) playLine(state.i + 1); };
  $("#btn-bgm").onclick = () => { bgmOn = !bgmOn; store.set("bgm", bgmOn); tog("#btn-bgm", bgmOn); bgmOn ? bgm.play().catch(() => {}) : bgm.pause(); };
  $("#btn-voice").onclick = () => { voiceOn = !voiceOn; store.set("voice", voiceOn); tog("#btn-voice", voiceOn); playLine(state.i); };
  addEventListener("keydown", (e) => {
    if (!$("#lesson-screen").classList.contains("active") || !$("#age-gate").hidden) return;
    if (e.code === "Space") { e.preventDefault(); setPlaying(!state.playing); }
    if (e.code === "ArrowRight") next();
    if (e.code === "ArrowLeft") prev();
  });

  // 深連結：#2.1 或 #2.1-5 直接跳到某節某句
  function fromHash() {
    const m = location.hash.match(/^#(\d+\.(?:\d+|intro|outro))(?:-(\d+))?$/);
    if (!m) return;
    const li = LESSONS.findIndex((l) => l.id === m[1]);
    if (li < 0) return;
    if (!store.get("adult")) return openGate(null, "enter", fromHash); // 直接連到某一頁也要先確認 18+
    stopLine();
    enterLesson(li);
    setPlaying(!m[2]);
    playLine(+(m[2] || 0));
  }
  addEventListener("hashchange", fromHash);

  // ---------- OnlyFans 連結＋年齡確認 ----------
  const gate = $("#age-gate");
  let resumeAfterGate = false, gateMode = "of", gateThen = null;
  // mode "of"：前往 OnlyFans；mode "enter"：進入課程（確認後記住，不再詢問）
  function openGate(e, mode, then) {
    if (e) e.stopPropagation();
    gateMode = mode === "enter" ? "enter" : "of";
    gateThen = then || null;
    const enter = gateMode === "enter";
    $("#gate-text").textContent = enter ? T.enterText : T.gateText;
    $("#gate-yes").textContent = enter ? T.enterYes : T.gateYes;
    $("#gate-no").textContent = enter ? T.enterNo : T.gateNo;
    if (enter) {
      if (!gate.hidden) return; // 已經開著（例如 hashchange 又觸發一次）
    } else sfx("select");
    resumeAfterGate = state.playing;
    if (state.playing) setPlaying(false);
    gate.hidden = false;
    $("#gate-no").focus();
  }
  function closeGate() {
    gate.hidden = true;
    if (resumeAfterGate) setPlaying(true);
  }
  document.querySelectorAll("[data-of]").forEach((b) => b.onclick = openGate);
  $("#gate-yes").onclick = (e) => {
    e.stopPropagation();
    if (gateMode === "enter") {
      store.set("adult", true);
      const then = gateThen;
      resumeAfterGate = false;
      closeGate();
      if (then) then();
      return;
    }
    window.open(window.OF_URL, "_blank", "noopener,noreferrer");
    closeGate();
  };
  $("#gate-no").onclick = (e) => { e.stopPropagation(); closeGate(); };
  gate.onclick = (e) => { if (e.target === gate) closeGate(); };
  addEventListener("keydown", (e) => { if (!gate.hidden && e.key === "Escape") closeGate(); }, true);

  // ---------- 白板繪製 ----------
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const checks = store.get("checks", {});

  function renderBoard(b, reveal) {
    const el = $("#board");
    el.className = "board px-box"; void el.offsetWidth; el.classList.add("enter");
    if (!b) { el.innerHTML = ""; return; }
    const H = b.heading ? `<div class="b-heading">${esc(b.heading)}</div>` : "";
    const R = {
      title: () => `<div class="b-title"><span class="kicker">${esc(/^MODULE \d+ · [\d.]+$/.test(b.kicker) && LESSONS[state.li] ? `MODULE ${LESSONS[state.li].module.no} · ${LESSONS[state.li].label}` : b.kicker)}</span><h2>${esc(b.title)}</h2><div class="sub">${esc(b.sub)}</div><div class="deco">🎀</div></div>`,
      big: () => `<div class="b-big"><div class="label">${esc(b.label)}</div><div class="value">${esc(b.value)}</div><div class="note">${esc(b.note || "")}</div></div>`,
      bullets: () => `${H}<div class="b-bullets">${b.items.map((it) => `<div class="item"><span class="ic">${it.icon}</span><span class="lb">${esc(it.label)}</span><span class="tx">${esc(it.text)}</span></div>`).join("")}</div>`,
      split: () => `${H}<div class="b-split"><div class="bars"><div class="seg a" data-w="${b.a.value}">${esc(b.a.label)} ${b.a.value}%</div><div class="seg b" data-w="${b.b.value}">${b.b.value}%</div></div><div class="coins">${"🪙".repeat(8)}<span style="opacity:.35">${"🪙".repeat(2)}</span></div><div class="b-note">${esc(b.note)}</div></div>`,
      compare: () => `${H}<div class="b-compare">${b.rows.map((r) => `<div class="item${r.k === "OnlyFans" ? " star" : ""}"><div class="k">${esc(r.k)}</div><div class="v">${esc(r.v)}</div></div>`).join("")}</div>`,
      funnel: () => `${H}<div class="b-funnel">${b.stages.map((s, i) => `${i ? '<div class="arrow">▼</div>' : ""}<div class="item"><b style="font-weight:normal">${esc(s.label)}</b><small>${esc(s.sub)}</small></div>`).join("")}</div>`,
      checklist: () => {
        const on = checks[b.id] || [];
        return `${H}<div class="b-checklist${b.items.length > 5 ? " compact" : ""}" data-id="${b.id}">${b.items.map((it, i) => `<div class="item${on[i] ? " checked" : ""}" data-i="${i}"><div class="box"></div><div><div class="lb">${esc(it.label)}</div><div class="tx">${esc(it.text)}</div></div></div>`).join("")}</div>${b.scoring ? `<div class="score"><span id="score-n"></span><div class="lamp" id="score-lamp"></div></div>` : ""}`;
      },
      lights: () => `${H}<div class="b-lights">${b.items.map((it) => `<div class="item" data-c="${it.color}"><div class="bulb lamp ${it.color}"></div><div><div class="lb">${esc(it.label)}</div><div class="tx">${esc(it.text)}</div></div></div>`).join("")}</div>`,
      steps: () => `${H}<div class="b-steps${b.items.length > 5 ? " compact" : ""}">${b.items.map((it) => `<div class="item"><span>${esc(it.label)}</span><span class="tx">${esc(it.text)}</span></div>`).join("")}</div>`,
      names: () => `${H}<div class="b-names"><div class="tags">${b.good.map((n) => `<div class="tag">@${esc(n)}</div>`).join("")}</div><div class="rule">✔ ${esc(b.rule)}</div></div>`,
      bio: () => `<div class="b-heading">${T.bio}</div><div class="b-bio"><div class="phone"><pre><div class="scroll">Hi my baby 💕  @username is here
I'll show you whatever you want—as long as you're nice to me 💕
SHOWING EVERYTHING JUST FOR YOU 😉
✨ Lewds / Explicit / 🔞 Tapes / Uncensored
✨ Digital Creator / @your job
✨ NSFW (B/G)(G/G)(Solo)
✨ Collabs
✨ Daily Uploads
✨ 🔞 tip Rating
💕 Exclusive &amp; Premium Content
💕 Custom Requests

LEGAL NOTICE
All content on @username belongs to me. You may not use, copy, reproduce, distribute, modify, or print any material — this includes comments and private messages. Failure to comply will result in legal action. By subscribing, you agree to these conditions.</div></pre><div class="side">${T.bioSide.map(([k, v]) => `<div><b>${k}</b><br>${v}</div>`).join("")}</div></div></div>`,
      ladder: () => `${H}<div class="b-ladder">${b.items.map((it) => `<div class="item"><div class="tag">${esc(it.tag)}</div><div><div class="lb">${esc(it.label)}</div><div class="tx">${esc(it.text)}</div></div></div>`).join("")}</div>`,
      tiers: () => `${H}<div class="b-tiers"><div class="row">${b.items.map((it) => `<div class="item"><span class="ic">${it.icon}</span>${esc(it.label)}</div>`).join("")}</div><div class="b-note">${esc(b.note)}</div></div>`,
      chat: () => `${H}<div class="b-chat">${b.items.map((t, i) => `<div class="bubble item"><span class="n">${i + 1}.</span>${esc(t)}</div>`).join("")}</div>`,
      rhythm: () => `${H}<div class="b-rhythm"><div class="row">${b.items.map((it) => `<div class="item"><div class="n">${esc(it.n)}</div><div class="unit">${esc(it.unit)}</div><div class="lb">${esc(it.label)}</div></div>`).join("")}</div></div>`,
      flow: () => `${H}<div class="b-flow"><div class="row">${b.items.map((it, i) => `${i ? '<div class="arrow">▶</div>' : ""}<div class="item"><span class="ic">${it.icon}</span><div class="lb">${esc(it.label)}</div><div class="sub">${esc(it.sub || "")}</div></div>`).join("")}</div><div class="coin">🪙</div></div>`,
      docs: () => `${H}<div class="b-docs${b.items.length > 3 ? " compact" : ""}">${b.items.map((it) => `<div class="item"><div class="ic">${it.icon}</div><div><div class="lb">${esc(it.label)}</div><div class="tx">${esc(it.text)}</div></div></div>`).join("")}</div>`,
      folders: () => `${H}<div class="b-folders"><div class="tree">${b.items.map((t) => `<div class="item"><span>📁 ${esc(t)}</span></div>`).join("")}</div></div>`,
      filename: () => `${H}<div class="b-filename"><div class="fn">${b.parts.map((p, i) => `${i ? '<div class="sep">_</div>' : ""}<div class="part item"><div class="t">${esc(p.t)}</div><div class="k">${esc(p.k)}</div></div>`).join("")}</div><div class="example">YYYYMMDD_platform_topic_vN</div></div>`,
      sheets: () => `${H}<div class="b-sheets"><div class="grid">${b.items.map((it) => `<div class="item"><div class="lb">${esc(it.label)}</div><div class="tx">${esc(it.text)}</div></div>`).join("")}</div></div>`,
      cycle: () => {
        const pos = [[205, 0], [405, 62], [405, 172], [205, 234], [5, 172], [5, 62]];
        return `${H}<div class="b-cycle"><div class="ring">${b.items.map((t, i) => `<div class="item" style="left:${pos[i][0]}px;top:${pos[i][1]}px"><b>STEP ${i + 1}</b>${esc(t)}</div>`).join("")}<div class="center">🔁</div></div></div>`;
      },
      analogy: () => `${H}<div class="b-analogy">${b.items.map((it, i) => `${i ? '<div class="vs">VS</div>' : ""}<div class="item"><div class="ic">${it.icon}</div><div class="lb">${esc(it.label)}</div><div class="tx">${esc(it.text)}</div></div>`).join("")}</div>`,
      stats: () => `${H}<div class="b-stats">${b.items.map((it) => `<div class="item"><div class="v${String(it.value).length > 6 ? " long" : ""}">${esc(it.value)}</div><div class="lb">${esc(it.label)}</div></div>`).join("")}</div>`,
      compare2: () => `${H}<div class="b-compare2"><div class="item l"><div class="t">${esc(b.left.title)}</div><div class="v">${esc(b.left.value)}</div><div class="tx">${esc(b.left.text)}</div></div><div class="vs">VS</div><div class="item r"><div class="t">${esc(b.right.title)}</div><div class="v">${esc(b.right.value)}</div><div class="tx">${esc(b.right.text)}</div></div></div>`,
      formula: () => `${H}<div class="b-formula"><div class="row">${b.parts.map((p) => /^[+=＋＝]$/.test(p) ? `<div class="op">${esc(p)}</div>` : `<div class="item">${esc(p)}</div>`).join("")}</div><div class="ex">${esc(b.example)}</div></div>`,
      calc: () => `${H}<div class="b-calc">${b.rows.map((r) => `<div class="item"><div class="l">${esc(r.l)}</div><div class="f">${esc(r.f)}</div><div class="eq">＝</div><div class="r">${esc(r.r)}</div></div>`).join("")}${b.total ? `<div class="total">💡 ${esc(b.total)}</div>` : ""}</div>`,
      photos: () => `${H}<div class="b-photos n${b.items.length}">${b.items.map((it) => `<figure class="item${it.tag ? " " + it.tag : ""}"><div class="ph"><img src="img/photos/${esc(it.src)}.jpg" alt="${esc(it.cap)}" loading="lazy">${it.tag ? `<span class="tag">${it.tag === "good" ? T.good : T.bad}</span>` : ""}</div><figcaption>${esc(it.cap)}</figcaption></figure>`).join("")}</div>`,
      week: () => `${H}<div class="b-week">${b.days.map((d) => `<div class="item"><div class="d">${esc(d.d)}</div>${d.items.map((t) => `<div class="chip">${esc(t)}</div>`).join("")}</div>`).join("")}</div>`,
      chapter: () => `<div class="b-chapter"><div class="no">MODULE ${esc(b.no)}</div><h2>${esc(b.title)}</h2><div class="list">${b.items.map((t, i) => `<div class="item"><span class="n">${i + 1}</span>${esc(String(typeof t === "string" ? t : t.t).replace(/^\d+\.\d+\s+/, ""))}</div>`).join("")}</div>${b.goal ? `<div class="goal">🎯 ${esc(b.goal)}</div>` : ""}</div>`,
      done: () => `<div class="b-done"><div class="medal">🏆</div><h2>${esc(b.title)}</h2><p>${esc(b.text)}</p></div>`,
    };
    el.innerHTML = `<div class="board-inner">${(R[b.type] || (() => ""))()}</div>` + (b.source ? `<div class="b-source">📚 ${esc(b.source)}</div>` : "");
    fitBoard(el);
    if (document.fonts) document.fonts.ready.then(() => fitBoard(el));
    state.boardType = b.type;
    el.classList.toggle("has-source", !!b.source);

    // 互動與動畫
    if (b.type === "split") setTimeout(() => el.querySelectorAll(".seg").forEach((s) => (s.style.width = s.dataset.w + "%")), 60);
    if (b.type === "checklist") {
      el.querySelectorAll(".b-checklist .item").forEach((it) => {
        it.onclick = (e) => {
          e.stopPropagation();
          const id = b.id, i = +it.dataset.i;
          checks[id] = checks[id] || [];
          checks[id][i] = !checks[id][i];
          store.set("checks", checks);
          it.classList.toggle("checked", checks[id][i]);
          sfx(checks[id][i] ? "check" : "uncheck");
          updateScore(b);
        };
      });
      updateScore(b);
    }
    if (b.type === "lights") {
      const n = (checks.c13 || []).filter(Boolean).length;
      const mine = n >= 6 ? "green" : n >= 4 ? "yellow" : n > 0 ? "red" : null;
      if (mine) el.querySelector(`.item[data-c="${mine}"]`)?.classList.add("mine");
    }
    if (b.type === "done") playClip("audio/jingle_done.mp3");
  }

  // 內容超出白板時自動等比縮小（不同語言字長不同）
  function fitBoard(el) {
    const inner = el.querySelector(".board-inner");
    if (!inner) return;
    inner.style.zoom = 1;
    const cs = getComputedStyle(el);
    let availH = el.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    const src = el.querySelector(".b-source");
    if (src) availH = Math.min(availH, src.offsetTop - inner.offsetTop - 6); // 來源若換行成兩行，內容區也要跟著縮
    const availW = el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    // 量測時暫時移除項目的進場位移（translateX），寬度才會準確
    inner.classList.add("measuring"); // 量測內容本身的高度（不含 min-height）
    const k = Math.min(1, availH / inner.scrollHeight, availW / inner.scrollWidth);
    inner.classList.remove("measuring");
    if (k < 0.995) inner.style.zoom = Math.max(0.6, k - 0.01);
  }

  function updateScore(b) {
    if (!b.scoring) return;
    const n = (checks[b.id] || []).filter(Boolean).length;
    $("#score-n").textContent = T.score(n);
    $("#score-lamp").className = "lamp " + (n >= 6 ? "green" : n >= 4 ? "yellow" : n > 0 ? "red" : "");
  }

  function updateReveal(reveal, focus) {
    const items = [...document.querySelectorAll("#board .item")];
    const isChecklist = state.boardType === "checklist";
    items.forEach((it, idx) => {
      const vis = isChecklist || idx < reveal;
      if (vis && !it.classList.contains("in")) {
        const already = items.slice(0, idx).filter((x) => x.classList.contains("in")).length;
        setTimeout(() => it.classList.add("in"), (idx - (isChecklist ? 0 : already)) * 140 + 80);
      }
      if (!vis) it.classList.remove("in");
      it.classList.toggle("focus", idx === focus);
      it.classList.toggle("current", idx === focus);
    });
  }
  fromHash();
})();
