// 介面文字與語系設定（8 種語言）
// region: "tw" 只有繁體中文顯示台灣專屬內容；其他語系一律 "intl"
window.OF_URL = "https://onlyfans.com/bunnybrownie";

window.LANGS = [
  { code: "zh-Hant", label: "繁體中文", short: "繁中", region: "tw", latin: false },
  { code: "zh-Hans", label: "简体中文", short: "简中", region: "intl", latin: false },
  { code: "en", label: "English", short: "EN", region: "intl", latin: true },
  { code: "es", label: "Español", short: "ES", region: "intl", latin: true },
  { code: "pt", label: "Português", short: "PT", region: "intl", latin: true },
  { code: "ja", label: "日本語", short: "日本", region: "intl", latin: false },
  { code: "de", label: "Deutsch", short: "DE", region: "intl", latin: true },
  { code: "fr", label: "Français", short: "FR", region: "intl", latin: true },
];

const bioSideEN = [["@your job", "Real job or online persona"], ["NSFW", "State your level"], ["Daily Uploads", "Post daily — use scheduling"], ["Tip Rating", "USD 50–200 per clip"], ["Custom", "Customs: USD 200 / min"]];

window.UI_STRINGS = {
  "zh-Hant": {
    ofLink: "我的 OnlyFans", gateTitle: "年齡確認", gateText: "即將前往的頁面含有成人內容，僅限年滿 18 歲（或你所在地區法定成年年齡）者瀏覽。", gateYes: "我已滿 18 歲，前往", gateNo: "未滿 18 歲／取消",
    kicker: "★ 全球 0.01% 創作者 bunnybrownie 親授 ★", logo: "大人的自媒體", logoSub: "OnlyFans 實戰課", start: "▶ 按下開始",
    menuTitle: "選擇章節", menuHint: "點任何一節開始上課 ♡", name: "bunnybrownie ♡", noVoice: "🎙️ 語音尚未生成，目前以字幕模式播放",
    end: "全部課程到這裡結束囉～謝謝你一路陪我上完，我們線上見 ♡", bio: "📝 簡介公版",
    bioSide: [["@your job", "真實職業或網路人設"], ["NSFW", "寫上你的尺度"], ["Daily Uploads", "每天更新，善用排程"], ["Tip Rating", "一支 50–200 USD"], ["Custom", "客訂 200 USD／分鐘"]],
    score: (n) => `已勾 ${n} 項`, title: "大人的自媒體", intro: "開場", outro: "總結", outroTitle: "本章總結",
    good: "✓ 推薦", bad: "✕ 避免", language: "語言",
    ctrl: { prev: "上一句 (←)", play: "播放／暫停 (空白鍵)", next: "下一句 (→)", auto: "自動播放", bgm: "背景音樂", voice: "語音", menu: "章節選單" },
  },
  "zh-Hans": {
    ofLink: "我的 OnlyFans", gateTitle: "年龄确认", gateText: "即将前往的页面含有成人内容，仅限年满 18 岁（或你所在地区法定成年年龄）者浏览。", gateYes: "我已满 18 岁，前往", gateNo: "未满 18 岁／取消",
    kicker: "★ 全球 0.01% 创作者 bunnybrownie 亲授 ★", logo: "大人的自媒体", logoSub: "OnlyFans 实战课", start: "▶ 按下开始",
    menuTitle: "选择章节", menuHint: "点任何一节开始上课 ♡", name: "bunnybrownie ♡", noVoice: "🎙️ 语音尚未生成，目前以字幕模式播放",
    end: "全部课程到这里结束啦～谢谢你一路陪我上完，我们线上见 ♡", bio: "📝 简介模板",
    bioSide: [["@your job", "真实职业或网络人设"], ["NSFW", "写上你的尺度"], ["Daily Uploads", "每天更新，善用排程"], ["Tip Rating", "一条 50–200 USD"], ["Custom", "定制 200 USD／分钟"]],
    score: (n) => `已勾 ${n} 项`, title: "大人的自媒体", intro: "开场", outro: "总结", outroTitle: "本章总结",
    good: "✓ 推荐", bad: "✕ 避免", language: "语言",
    ctrl: { prev: "上一句 (←)", play: "播放／暂停 (空格)", next: "下一句 (→)", auto: "自动播放", bgm: "背景音乐", voice: "语音", menu: "章节菜单" },
  },
  en: {
    ofLink: "My OnlyFans", gateTitle: "Age verification", gateText: "The page you're about to visit contains adult content and is only for people aged 18+ (or the age of majority where you live).", gateYes: "I'm 18 or older — continue", gateNo: "I'm under 18 / Cancel",
    kicker: "★ Taught by bunnybrownie · global top 0.01% ★", logo: "Adult Creator", logoSub: "OnlyFans Masterclass", start: "▶ PRESS START",
    menuTitle: "Choose a lesson", menuHint: "Pick any lesson to begin ♡", name: "bunnybrownie ♡", noVoice: "🎙️ Voice not generated yet — subtitle mode",
    end: "That's the whole course — thank you for learning with me. See you online ♡", bio: "📝 Bio template", bioSide: bioSideEN,
    score: (n) => `${n} checked`, title: "Adult Creator Course", intro: "Intro", outro: "Recap", outroTitle: "Chapter recap",
    good: "✓ Do", bad: "✕ Avoid", language: "Language",
    ctrl: { prev: "Previous (←)", play: "Play / pause (space)", next: "Next (→)", auto: "Auto-play", bgm: "Music", voice: "Voice", menu: "Lessons" },
  },
  es: {
    ofLink: "Mi OnlyFans", gateTitle: "Verificación de edad", gateText: "La página que vas a visitar contiene contenido para adultos y es solo para mayores de 18 años (o la mayoría de edad en tu país).", gateYes: "Tengo 18 o más — continuar", gateNo: "Soy menor / Cancelar",
    kicker: "★ Impartido por bunnybrownie · top 0,01% mundial ★", logo: "Creadora Adulta", logoSub: "Curso práctico de OnlyFans", start: "▶ EMPEZAR",
    menuTitle: "Elige una lección", menuHint: "Toca cualquier lección para empezar ♡", name: "bunnybrownie ♡", noVoice: "🎙️ Voz aún no generada — modo subtítulos",
    end: "¡Ese es todo el curso! Gracias por aprender conmigo. Nos vemos en línea ♡", bio: "📝 Plantilla de bio",
    bioSide: [["@your job", "Trabajo real o personaje"], ["NSFW", "Indica tu nivel"], ["Daily Uploads", "Publica a diario, programa"], ["Tip Rating", "50–200 USD por clip"], ["Custom", "Pedidos: 200 USD / min"]],
    score: (n) => `${n} marcadas`, title: "Curso Creadora Adulta", intro: "Intro", outro: "Resumen", outroTitle: "Resumen del capítulo",
    good: "✓ Sí", bad: "✕ Evita", language: "Idioma",
    ctrl: { prev: "Anterior (←)", play: "Reproducir / pausa (espacio)", next: "Siguiente (→)", auto: "Auto", bgm: "Música", voice: "Voz", menu: "Lecciones" },
  },
  pt: {
    ofLink: "Meu OnlyFans", gateTitle: "Verificação de idade", gateText: "A página que você vai visitar tem conteúdo adulto e é só para maiores de 18 anos (ou a maioridade no seu país).", gateYes: "Tenho 18 ou mais — continuar", gateNo: "Sou menor / Cancelar",
    kicker: "★ Com bunnybrownie · top 0,01% mundial ★", logo: "Criadora Adulta", logoSub: "Curso prático de OnlyFans", start: "▶ COMEÇAR",
    menuTitle: "Escolha uma aula", menuHint: "Toque em qualquer aula para começar ♡", name: "bunnybrownie ♡", noVoice: "🎙️ Voz ainda não gerada — modo legenda",
    end: "Esse é o curso completo — obrigada por aprender comigo. Até mais ♡", bio: "📝 Modelo de bio",
    bioSide: [["@your job", "Trabalho real ou persona"], ["NSFW", "Informe seu nível"], ["Daily Uploads", "Poste todo dia, agende"], ["Tip Rating", "50–200 USD por vídeo"], ["Custom", "Pedidos: 200 USD / min"]],
    score: (n) => `${n} marcados`, title: "Curso Criadora Adulta", intro: "Intro", outro: "Resumo", outroTitle: "Resumo do capítulo",
    good: "✓ Faça", bad: "✕ Evite", language: "Idioma",
    ctrl: { prev: "Anterior (←)", play: "Tocar / pausar (espaço)", next: "Próximo (→)", auto: "Auto", bgm: "Música", voice: "Voz", menu: "Aulas" },
  },
  ja: {
    ofLink: "私のOnlyFans", gateTitle: "年齢確認", gateText: "この先のページには成人向けコンテンツが含まれます。18歳以上（またはお住まいの地域の成人年齢以上）の方のみご覧いただけます。", gateYes: "18歳以上です — 進む", gateNo: "18歳未満／キャンセル",
    kicker: "★ 世界トップ0.01% bunnybrownie 直伝 ★", logo: "大人のメディア術", logoSub: "OnlyFans 実践講座", start: "▶ スタート",
    menuTitle: "レッスンを選ぶ", menuHint: "好きなレッスンから始めよう ♡", name: "bunnybrownie ♡", noVoice: "🎙️ 音声はまだ生成されていません（字幕モード）",
    end: "これで全講座おしまい！最後まで一緒に学んでくれてありがとう。またオンラインで会おうね ♡", bio: "📝 プロフィール文テンプレート",
    bioSide: [["@your job", "本業またはネット上のキャラ"], ["NSFW", "自分の表現レベル"], ["Daily Uploads", "毎日更新、予約投稿を活用"], ["Tip Rating", "1本 50–200 USD"], ["Custom", "個別依頼：200 USD／分"]],
    score: (n) => `${n} 個チェック`, title: "大人のメディア術", intro: "オープニング", outro: "まとめ", outroTitle: "この章のまとめ",
    good: "✓ おすすめ", bad: "✕ NG", language: "言語",
    ctrl: { prev: "前へ (←)", play: "再生／一時停止 (スペース)", next: "次へ (→)", auto: "自動再生", bgm: "BGM", voice: "音声", menu: "レッスン一覧" },
  },
  de: {
    ofLink: "Mein OnlyFans", gateTitle: "Altersbestätigung", gateText: "Die folgende Seite enthält Inhalte für Erwachsene und ist nur für Personen ab 18 Jahren (bzw. ab der Volljährigkeit in deinem Land).", gateYes: "Ich bin 18+ — weiter", gateNo: "Unter 18 / Abbrechen",
    kicker: "★ Mit bunnybrownie · weltweit Top 0,01 % ★", logo: "Adult Creator", logoSub: "OnlyFans-Praxiskurs", start: "▶ STARTEN",
    menuTitle: "Lektion wählen", menuHint: "Wähle eine Lektion zum Starten ♡", name: "bunnybrownie ♡", noVoice: "🎙️ Stimme noch nicht erzeugt — Untertitelmodus",
    end: "Das war der ganze Kurs — danke, dass du mit mir gelernt hast. Bis bald online ♡", bio: "📝 Bio-Vorlage",
    bioSide: [["@your job", "Echter Job oder Online-Persona"], ["NSFW", "Dein Level angeben"], ["Daily Uploads", "Täglich posten, planen"], ["Tip Rating", "50–200 USD pro Clip"], ["Custom", "Wunschvideos: 200 USD / Min."]],
    score: (n) => `${n} abgehakt`, title: "Adult-Creator-Kurs", intro: "Intro", outro: "Rückblick", outroTitle: "Kapitel-Rückblick",
    good: "✓ So", bad: "✕ Nicht so", language: "Sprache",
    ctrl: { prev: "Zurück (←)", play: "Abspielen / Pause (Leertaste)", next: "Weiter (→)", auto: "Auto", bgm: "Musik", voice: "Stimme", menu: "Lektionen" },
  },
  fr: {
    ofLink: "Mon OnlyFans", gateTitle: "Vérification de l'âge", gateText: "La page suivante contient du contenu pour adultes, réservé aux personnes de 18 ans et plus (ou l'âge de la majorité dans ton pays).", gateYes: "J'ai 18 ans ou plus — continuer", gateNo: "J'ai moins de 18 ans / Annuler",
    kicker: "★ Avec bunnybrownie · top 0,01 % mondial ★", logo: "Créatrice Adulte", logoSub: "Formation OnlyFans", start: "▶ COMMENCER",
    menuTitle: "Choisir une leçon", menuHint: "Choisis une leçon pour commencer ♡", name: "bunnybrownie ♡", noVoice: "🎙️ Voix pas encore générée — mode sous-titres",
    end: "C'est la fin de la formation — merci d'avoir appris avec moi. À bientôt en ligne ♡", bio: "📝 Modèle de bio",
    bioSide: [["@your job", "Vrai métier ou persona"], ["NSFW", "Indique ton niveau"], ["Daily Uploads", "Poste chaque jour, programme"], ["Tip Rating", "50–200 USD par clip"], ["Custom", "Sur mesure : 200 USD / min"]],
    score: (n) => `${n} cochées`, title: "Formation Créatrice Adulte", intro: "Intro", outro: "Récap", outroTitle: "Récap du chapitre",
    good: "✓ À faire", bad: "✕ À éviter", language: "Langue",
    ctrl: { prev: "Précédent (←)", play: "Lecture / pause (espace)", next: "Suivant (→)", auto: "Auto", bgm: "Musique", voice: "Voix", menu: "Leçons" },
  },
};

// 各語系課程資料：繁中／英文在 script*.js，其餘由 course_<code>.js 補上
window.COURSES = Object.assign(window.COURSES || {}, { "zh-Hant": window.COURSE, en: window.COURSE_EN });
