// 錄製 GitHub 介紹頁用的課程片段（GIF 影格）與截圖，8 種語言各一套。靜音模式，不會發出聲音。
// usage: node tools/capture_readme.js [lang ...]      （需先在 course/ 起本機伺服器：python -m http.server 8765）
// 輸出：work/capture/<lang>/frames/<clip>/f0000.jpg…、work/capture/<lang>/stills/<name>.jpg
// 之後執行 python tools/build_readme.py 轉成 docs/media/<lang>/ 並產生各語言 README。
const path = require("path");
const fs = require("fs");
let puppeteer;
try { puppeteer = require("puppeteer-core"); } catch (e) { puppeteer = require(path.resolve(__dirname, "../work/capture/node_modules/puppeteer-core")); }

const BASE = "http://localhost:8765/";
const ROOT = path.resolve(__dirname, "../work/capture");
const LANGS = process.argv.slice(2).length ? process.argv.slice(2) : ["en", "zh-Hant", "zh-Hans", "es", "pt", "ja", "de", "fr"];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// 場景以「課程 id＋白板類型＋第幾個」指定；各語言因地區過濾句數不同，由頁面上的課程資料換算成句子編號
const STILLS = [
  ["map", "1.intro", "chapter", 0], ["stats", "1.1", "stats", 0], ["calc", "7.1", "calc", 0],
  ["week", "5.1", "week", 0], ["angles", "3.3", "photos", 0], ["bans", "4.7", "stats", 0],
];

async function record(page, dir, seconds, action) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  let n = 0, stop = false;
  const t0 = Date.now();
  const loop = (async () => {
    while (!stop) {
      await page.screenshot({ path: path.join(dir, `f${String(n++).padStart(4, "0")}.jpg`), type: "jpeg", quality: 88 });
      await sleep(60);
    }
  })();
  if (action) await action();
  const left = seconds * 1000 - (Date.now() - t0);
  if (left > 0) await sleep(left);
  stop = true;
  await loop;
  fs.writeFileSync(path.join(dir, "meta.json"), JSON.stringify({ frames: n, seconds: (Date.now() - t0) / 1000 }));
  console.log(" ", path.basename(dir), n, "frames");
}

async function open(page, lang, hash = "") {
  await page.goto(`${BASE}?mute=1&lang=${lang}&cap=${Date.now()}${hash}`, { waitUntil: "networkidle0" });
  await page.waitForFunction(() => !document.getElementById("btn-start").disabled);
  await page.evaluate(() => document.fonts.ready);
  await sleep(700);
}

// 找出某課第 nth 個指定類型白板「完整顯示」的那一句（下一塊白板出現前的最後一句）
async function lineOf(page, lang, lessonId, type, nth) {
  return page.evaluate((lang, lessonId, type, nth) => {
    const region = window.LANGS.find((l) => l.code === lang).region;
    const filt = (x) => Array.isArray(x) ? x.filter((v) => !(v && typeof v === "object" && v.only && v.only !== region)).map(filt)
      : x && typeof x === "object" ? Object.fromEntries(Object.entries(x).map(([k, v]) => [k, filt(v)])) : x;
    const C = filt(window.COURSES[lang]);
    let lines = null;
    for (const m of C.modules) {
      if (`${m.no}.intro` === lessonId) lines = m.intro.lines;
      if (`${m.no}.outro` === lessonId) lines = m.outro.lines;
      for (const l of m.lessons) if (l.id === lessonId) lines = l.lines;
    }
    const starts = lines.map((ln, i) => (ln.board ? i : -1)).filter((i) => i >= 0);
    const hits = starts.filter((i) => lines[i].board.type === type);
    const s = hits[nth];
    const next = starts.find((i) => i > s);
    return { start: s, end: (next === undefined ? lines.length : next) - 1 };
  }, lang, lessonId, type, nth);
}

async function still(page, dir, name) {
  fs.mkdirSync(dir, { recursive: true });
  await page.screenshot({ path: path.join(dir, `${name}.jpg`), type: "jpeg", quality: 90 });
  console.log("  still", name);
}

async function captureLang(browser, lang) {
  console.log(lang);
  const out = path.join(ROOT, lang), frames = path.join(out, "frames"), stills = path.join(out, "stills");
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 1 });
  // 錄影時跳過年齡確認；清掉進度，標題畫面顯示第一次來的樣子
  await page.evaluateOnNewDocument(() => { try { localStorage.clear(); localStorage.setItem("ofc.adult", "true"); } catch (e) {} });

  // 1) 標題 → 章節選單 → 點第一課
  await open(page, lang);
  await still(page, stills, "title");
  await record(page, path.join(frames, "hero"), 9, async () => {
    await sleep(1800);
    await page.click("#btn-chapters");
    await sleep(2400);
    await still(page, stills, "menu");
    await page.evaluate(() => [...document.querySelectorAll(".menu-lesson")][1].click());
  });

  // 2) 上課畫面：角色說話＋白板逐項出現
  const b = await lineOf(page, lang, "1.1", "bullets", 0);
  await open(page, lang, `#1.1-${b.start}`);
  await record(page, path.join(frames, "lesson"), 8, async () => { await page.click("#btn-play"); });

  // 3) 實拍範例照片：主體大小 → 光線 → 機位
  const p1 = await lineOf(page, lang, "3.1", "photos", 0), p2 = await lineOf(page, lang, "3.1", "photos", 1), p3 = await lineOf(page, lang, "3.3", "photos", 0);
  await open(page, lang, `#3.1-${p1.start}`);
  await record(page, path.join(frames, "photos"), 8, async () => {
    await sleep(2300);
    await page.evaluate((h) => { location.hash = h; }, `#3.1-${p2.start}`);
    await sleep(2600);
    await page.evaluate((h) => { location.hash = h; }, `#3.3-${p3.start}`);
  });

  // 4) 互動 checklist ＋ 紅黃綠燈
  const c = await lineOf(page, lang, "1.3", "checklist", 0);
  await open(page, lang, `#1.3-${c.start}`);
  await record(page, path.join(frames, "checklist"), 7, async () => {
    await sleep(900);
    for (let i = 0; i < 6; i++) {
      await page.evaluate((i) => { const it = document.querySelectorAll(".b-checklist .item")[i]; if (it) it.click(); }, i);
      await sleep(650);
    }
  });

  // 5) 八種語言切換（只錄一次，放共用資料夾）
  if (lang === "en") {
    const s = await lineOf(page, lang, "1.1", "stats", 0);
    await open(page, lang, `#1.1-${s.end}`);
    await record(page, path.join(ROOT, "shared", "frames", "languages"), 9, async () => {
      for (const code of ["zh-Hant", "ja", "es", "zh-Hans", "de", "fr", "pt", "en"]) {
        await page.evaluate(async (code) => {
          document.querySelector("footer .lang-btn").click();
          await new Promise((r) => setTimeout(r, 150));
          document.querySelector(`.lang-opt[data-code="${code}"]`).click();
        }, code);
        await sleep(1000);
      }
    });
  }

  // 6) 年齡確認
  await open(page, lang);
  await page.click(".of-link.big");
  await sleep(600);
  await still(page, stills, "agegate");

  // 7) 白板截圖
  for (const [name, lessonId, type, nth] of STILLS) {
    const r = await lineOf(page, lang, lessonId, type, nth);
    await open(page, lang, `#${lessonId}-${r.end}`);
    await sleep(1600);
    await still(page, stills, name);
  }

  // 8) 手機直式
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const m = await lineOf(page, lang, "3.1", "photos", 0);
  await open(page, lang, `#3.1-${m.end}`);
  await sleep(1800);
  await still(page, stills, "mobile");
  await page.close();
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
    args: ["--mute-audio", "--autoplay-policy=no-user-gesture-required"],
  });
  for (const lang of LANGS) await captureLang(browser, lang);
  await browser.close();
})();
