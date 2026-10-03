// 用法：cd work/capture && npm install puppeteer-core@23 && node ../../tools/capture_readme.js（需先啟動本機伺服器 port 8765）
// 錄製 README 用的課程片段（GIF 影格）與截圖。靜音模式，不會發出聲音。
const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const BASE = "http://localhost:8765/";
const OUT = path.resolve(__dirname, "../work/capture/frames");
const STILLS = path.resolve(__dirname, "../work/capture/stills");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function record(page, name, seconds, action) {
  const dir = path.join(OUT, name);
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
  const dur = (Date.now() - t0) / 1000;
  fs.writeFileSync(path.join(dir, "meta.json"), JSON.stringify({ frames: n, seconds: dur }));
  console.log(name, n, "frames", dur.toFixed(1), "s");
}

async function open(page, lang, hash = "") {
  await page.goto(`${BASE}?mute=1&lang=${lang}&cap=${Date.now()}${hash}`, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  await sleep(800);
}

async function setLang(page, code) {
  await page.evaluate(async (code) => {
    document.querySelector("footer .lang-btn").click();
    await new Promise((r) => setTimeout(r, 150));
    document.querySelector(`.lang-opt[data-code="${code}"]`).click();
  }, code);
  await sleep(900);
}

async function still(page, name) {
  fs.mkdirSync(STILLS, { recursive: true });
  await page.screenshot({ path: path.join(STILLS, `${name}.jpg`), type: "jpeg", quality: 90 });
  console.log("still", name);
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
    args: ["--mute-audio", "--autoplay-policy=no-user-gesture-required"],
    defaultViewport: { width: 1280, height: 720, deviceScaleFactor: 1 },
  });
  const page = await browser.newPage();
  await page.evaluateOnNewDocument(() => { try { localStorage.clear(); localStorage.setItem("ofc.adult", "true"); localStorage.setItem("ofc.introSeen", "true"); } catch (e) {} }); // 錄影時跳過年齡確認與介紹影片

  // 1) 標題 → 選單 → 開始上課
  await open(page, "zh-Hant");
  await still(page, "title");
  await record(page, "hero", 9, async () => {
    await sleep(1800);
    await page.click("#btn-chapters");
    await sleep(2200);
    await still(page, "menu");
    await page.evaluate(() => [...document.querySelectorAll(".menu-lesson")][1].click());
  });

  // 2) 上課畫面：角色說話＋白板逐項出現
  await open(page, "zh-Hant", "#1.1-8");
  await record(page, "lesson", 8, async () => {
    await page.click("#btn-play");
  });

  // 3) 實拍範例照片
  await open(page, "zh-Hant", "#3.1-2");
  await record(page, "photos", 8, async () => {
    await sleep(2300);
    await page.evaluate(() => { location.hash = "#3.1-4"; });
    await sleep(2600);
    await page.evaluate(() => { location.hash = "#3.3-2"; });
  });

  // 4) 八種語言切換（同一張白板）
  await open(page, "zh-Hant", "#1.1-5");
  await record(page, "languages", 9, async () => {
    for (const c of ["en", "ja", "es", "zh-Hans", "de", "fr", "pt"]) { await setLang(page, c); await sleep(250); }
  });

  // 5) 互動 checklist ＋ 紅黃綠燈
  await open(page, "zh-Hant", "#1.3-1");
  await record(page, "checklist", 7, async () => {
    await sleep(900);
    for (let i = 0; i < 6; i++) {
      await page.evaluate((i) => document.querySelectorAll(".b-checklist .item")[i].click(), i);
      await sleep(650);
    }
  });

  // 6) OnlyFans 連結 → 18+ 年齡確認
  await open(page, "zh-Hant");
  await record(page, "agegate", 5, async () => {
    await sleep(1400);
    await page.click(".of-link.big");
  });
  await still(page, "agegate");

  // 截圖集
  const shots = [
    ["zh-Hant", "#1.1-5", "stats"], ["zh-Hant", "#5.1-1", "week"], ["zh-Hant", "#7.1-2", "calc"],
    ["zh-Hant", "#3.3-2", "angles"], ["zh-Hant", "#4.7-1", "bans"], ["en", "#4.1-5", "japan_en"],
    ["ja", "#1.1-5", "stats_ja"], ["zh-Hant", "#1.intro-2", "map"], ["en", "#2.6-5", "crypto_en"],
  ];
  for (const [lang, hash, name] of shots) {
    await open(page, lang, hash);
    await sleep(1500);
    await still(page, name);
  }
  await browser.close();
})();
