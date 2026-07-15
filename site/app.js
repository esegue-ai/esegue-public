const translations = {
  en: {
    skip: "Skip to content", nav_aria: "Primary navigation", nav_technology: "Technology", nav_products: "Products", nav_process: "Process", nav_roadmap: "Roadmap", language_aria: "Language", open_menu: "Open menu", close_menu: "Close menu",
    hero_eyebrow: "Systematic market intelligence", hero_statement: "From market context to disciplined decisions.", hero_support: "A quantitative research framework built to rank opportunities, identify regime shifts and make market evidence traceable.", hero_cta: "Explore the engines", hero_note: "View the public repository", scope_aria: "System scope", scope_1: "01 Context", scope_2: "02 Signals", scope_3: "03 Risk", scope_4: "04 Learning",
    technology_label: "Technology", technology_title: "Decision intelligence that supports a disciplined workflow.", technology_copy: "eSEGuE does not replace the investment process with a black box. It connects market data, technical structure, relative scoring and execution controls in an auditable chain where every exclusion and every action can be explained.",
    products_label: "Products", products_title: "Two engines. One decision framework.", products_intro: "The engines answer different questions: which equity opportunities deserve attention, and where capital is rotating across global markets.", products_aria: "eSEGuE products", signal_short: "Multi-Strategy Signal Engine", regime_short: "Market Regime Engine", illustrative: "Illustrative system view",
    signal_visual_aria: "Illustrative multi-strategy Signal Engine", signal_context: "Market context & investment horizon", signal_volatility: "Volatility Probability", signal_breakout: "Breakout V3", signal_dip: "Dip Long", signal_fundamental: "Fundamental Ranking", signal_title: "Multi-Strategy Signal Engine", signal_lead: "Selects and ranks equity opportunities through complementary strategies that adapt to market context and investment horizon.", signal_feature_1: "Volatility Probability: short-term opportunities in uncertain, trendless markets", signal_feature_2: "Breakout V3: short- and medium-term participation in established upward trends", signal_feature_3: "Dip Long: value opportunities temporarily penalised by adverse macro or regime conditions", signal_feature_4: "Fundamental Ranking: business quality and outlook not yet fully reflected in market prices",
    regime_visual_aria: "Illustrative Market Regime Engine rotation matrix", regime_title: "Market Regime Engine", regime_lead: "Measures trend strength across equities, rates, credit, commodities and currencies to identify leadership, regime and capital rotation.", regime_feature_1: "Comparable 0-100 scores across asset-class sleeves", regime_feature_2: "Risk appetite, inflation pulse and regional leadership", regime_feature_3: "Stable, accelerating and reversing rotation phases", regime_analysis_only: "Analysis only. This engine cannot send orders.", rotation_europe: "Europe", rotation_usa: "USA", rotation_bonds: "Bonds", rotation_equity: "Equity", rotation_commodities: "Commodities", rotation_credit: "Credit",
    process_label: "Workflow", process_title: "A traceable path from evidence to action.", process_1_title: "Acquire", process_1_copy: "Market, event and contextual data with explicit cache and fallback provenance.", process_2_title: "Validate", process_2_copy: "Trend, freshness and hard filters define the eligible population.", process_3_title: "Prioritise", process_3_copy: "Scoring orders valid opportunities without overriding safety constraints.", process_4_title: "Control", process_4_copy: "Cash, exposure, duplicate and broker checks remain independent gates.", process_5_title: "Evaluate", process_5_copy: "Fills and forward outcomes feed diagnostics, backtests and policy review.",
    roadmap_label: "Roadmap", roadmap_title: "Building a broader market intelligence layer.", roadmap_1: "Broader European and cross-asset coverage", roadmap_2: "Richer market-regime classification", roadmap_3: "Dynamic, evidence-based signal prioritisation", roadmap_4: "Portfolio-level risk and reporting analytics", footer_project: "Independent quantitative research project.", footer_notice: "For informational purposes only. Nothing published here constitutes investment advice. Past or simulated performance does not guarantee future results.",
    cookie_settings: "Privacy & cookie settings", cookie_label: "Privacy choices", cookie_title: "Help us understand website traffic.", cookie_copy: "With your permission, eSEGuE uses Google Analytics to measure aggregate visits and improve the public website. Analytics is disabled until you accept. Advertising and personalised tracking remain disabled.", cookie_google_privacy: "Google privacy information", cookie_reject: "Decline analytics", cookie_accept: "Accept analytics"
  },
  it: {
    skip: "Vai al contenuto", nav_aria: "Navigazione principale", nav_technology: "Tecnologia", nav_products: "Prodotti", nav_process: "Processo", nav_roadmap: "Roadmap", language_aria: "Lingua", open_menu: "Apri menu", close_menu: "Chiudi menu",
    hero_eyebrow: "Market intelligence sistematica", hero_statement: "Dal contesto di mercato a decisioni disciplinate.", hero_support: "Un framework quantitativo di ricerca progettato per ordinare le opportunita, individuare cambi di regime e rendere tracciabili le evidenze di mercato.", hero_cta: "Esplora i motori", hero_note: "Vai al repository pubblico", scope_aria: "Ambiti del sistema", scope_1: "01 Contesto", scope_2: "02 Segnali", scope_3: "03 Rischio", scope_4: "04 Apprendimento",
    technology_label: "Tecnologia", technology_title: "Decision intelligence a supporto di un processo disciplinato.", technology_copy: "eSEGuE non sostituisce il processo di investimento con una black box. Collega dati di mercato, struttura tecnica, scoring relativo e controlli di execution in una catena verificabile, nella quale ogni esclusione e ogni azione possono essere spiegate.",
    products_label: "Prodotti", products_title: "Due motori. Un solo framework decisionale.", products_intro: "I motori rispondono a domande diverse: quali opportunita azionarie meritano attenzione e dove si sta spostando il capitale nei mercati globali.", products_aria: "Prodotti eSEGuE", signal_short: "Signal Engine Multi-Strategia", regime_short: "Market Regime Engine", illustrative: "Vista illustrativa del sistema",
    signal_visual_aria: "Vista illustrativa del Signal Engine multi-strategia", signal_context: "Contesto di mercato e orizzonte", signal_volatility: "Volatility Probability", signal_breakout: "Breakout V3", signal_dip: "Dip Long", signal_fundamental: "Ranking Fondamentale", signal_title: "Signal Engine Multi-Strategia", signal_lead: "Seleziona e ordina opportunita azionarie attraverso strategie complementari che si adattano al contesto di mercato e all'orizzonte di investimento.", signal_feature_1: "Volatility Probability: opportunita di breve termine in mercati incerti e privi di trend solidi", signal_feature_2: "Breakout V3: partecipazione di breve e medio periodo a trend rialzisti consolidati", signal_feature_3: "Dip Long: opportunita value temporaneamente penalizzate da regime o condizioni macro avverse", signal_feature_4: "Ranking Fondamentale: solidita e prospettive di business non ancora pienamente riflesse nei prezzi",
    regime_visual_aria: "Matrice illustrativa del Market Regime Engine", regime_title: "Market Regime Engine", regime_lead: "Misura la forza del trend su equity, tassi, credito, commodity e valute per identificare leadership, regime e rotazioni di capitale.", regime_feature_1: "Score 0-100 confrontabili tra sleeve di asset class", regime_feature_2: "Risk appetite, inflation pulse e leadership regionale", regime_feature_3: "Fasi di rotation stabile, in accelerazione e inversione", regime_analysis_only: "Solo analisi. Questo motore non puo inviare ordini.", rotation_europe: "Europa", rotation_usa: "USA", rotation_bonds: "Bond", rotation_equity: "Equity", rotation_commodities: "Commodity", rotation_credit: "Credito",
    process_label: "Processo", process_title: "Un percorso tracciabile dall'evidenza all'azione.", process_1_title: "Acquisire", process_1_copy: "Dati di mercato, eventi e contesto con provenienza esplicita di cache e fallback.", process_2_title: "Validare", process_2_copy: "Trend, freschezza e filtri hard definiscono la popolazione ammissibile.", process_3_title: "Prioritizzare", process_3_copy: "Lo scoring ordina opportunita valide senza superare i vincoli di sicurezza.", process_4_title: "Controllare", process_4_copy: "Cash, esposizione, duplicati e stato del broker restano gate indipendenti.", process_5_title: "Valutare", process_5_copy: "Fill e risultati futuri alimentano diagnostica, backtest e revisione delle policy.",
    roadmap_label: "Roadmap", roadmap_title: "Costruire un livello piu ampio di market intelligence.", roadmap_1: "Maggiore copertura europea e cross-asset", roadmap_2: "Classificazione piu ricca dei regimi di mercato", roadmap_3: "Prioritizzazione dinamica basata sulle evidenze", roadmap_4: "Analisi di rischio e reporting a livello di portafoglio", footer_project: "Progetto indipendente di ricerca quantitativa.", footer_notice: "Contenuti a solo scopo informativo. Nulla di quanto pubblicato costituisce consulenza finanziaria. Le performance passate o simulate non garantiscono risultati futuri.",
    cookie_settings: "Privacy e preferenze cookie", cookie_label: "Scelte sulla privacy", cookie_title: "Aiutaci a comprendere il traffico del sito.", cookie_copy: "Con il tuo consenso, eSEGuE utilizza Google Analytics per misurare le visite aggregate e migliorare il sito pubblico. Analytics resta disattivato finche non accetti. Pubblicita e tracciamento personalizzato rimangono disabilitati.", cookie_google_privacy: "Informazioni sulla privacy di Google", cookie_reject: "Rifiuta Analytics", cookie_accept: "Accetta Analytics"
  }
};

const root = document.documentElement;
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const languageButtons = document.querySelectorAll("[data-language]");
const consentBanner = document.querySelector("[data-consent-banner]");
const consentAccept = document.querySelector("[data-consent-accept]");
const consentReject = document.querySelector("[data-consent-reject]");
const consentSettings = document.querySelector("[data-consent-settings]");
const GOOGLE_ANALYTICS_ID = "G-2YTJV7388B";
const CONSENT_STORAGE_KEY = "esegue-analytics-consent-v1";
let analyticsLoaded = false;

function loadGoogleAnalytics() {
  if (analyticsLoaded) return;
  analyticsLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });
  window.gtag("js", new Date());
  window.gtag("config", GOOGLE_ANALYTICS_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GOOGLE_ANALYTICS_ID)}`;
  document.head.appendChild(script);
}

function readAnalyticsConsent() {
  try { return localStorage.getItem(CONSENT_STORAGE_KEY); } catch (_) { return null; }
}

function setAnalyticsConsent(value) {
  try { localStorage.setItem(CONSENT_STORAGE_KEY, value); } catch (_) {}
  if (value === "granted") loadGoogleAnalytics();
  if (value === "denied" && analyticsLoaded && typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
  }
  consentBanner.hidden = true;
}

function openConsentBanner() {
  consentBanner.hidden = false;
  requestAnimationFrame(() => consentBanner.classList.add("visible"));
  consentReject?.focus();
}

function closeConsentBanner(value) {
  consentBanner.classList.remove("visible");
  setTimeout(() => setAnalyticsConsent(value), 180);
}

function translatePage(language) {
  const dictionary = translations[language] || translations.en;
  root.lang = language;
  document.title = language === "it" ? "eSEGuE | Market Intelligence Sistematica" : "eSEGuE | Systematic Market Intelligence";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = dictionary[node.dataset.i18n];
    if (value) node.textContent = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const value = dictionary[node.dataset.i18nAria];
    if (value) node.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-i18n-title]").forEach((node) => {
    const value = dictionary[node.dataset.i18nTitle];
    if (value) node.setAttribute("title", value);
  });
  languageButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.language === language)));
  try { localStorage.setItem("esegue-language", language); } catch (_) {}
}

let savedLanguage = "en";
try { savedLanguage = localStorage.getItem("esegue-language") || "en"; } catch (_) {}
translatePage(savedLanguage);
languageButtons.forEach((button) => button.addEventListener("click", () => translatePage(button.dataset.language)));

const storedAnalyticsConsent = readAnalyticsConsent();
if (storedAnalyticsConsent === "granted") loadGoogleAnalytics();
else if (storedAnalyticsConsent !== "denied") openConsentBanner();
consentAccept?.addEventListener("click", () => closeConsentBanner("granted"));
consentReject?.addEventListener("click", () => closeConsentBanner("denied"));
consentSettings?.addEventListener("click", openConsentBanner);

if (window.lucide) window.lucide.createIcons();

function closeNav() {
  nav?.classList.remove("open");
  navToggle?.setAttribute("aria-expanded", "false");
  if (navToggle) {
    navToggle.dataset.i18nAria = "open_menu";
    navToggle.innerHTML = '<i data-lucide="menu" aria-hidden="true"></i>';
  }
  translatePage(root.lang);
  if (window.lucide) window.lucide.createIcons();
}

navToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.dataset.i18nAria = open ? "close_menu" : "open_menu";
  navToggle.innerHTML = `<i data-lucide="${open ? "x" : "menu"}" aria-hidden="true"></i>`;
  translatePage(root.lang);
  if (window.lucide) window.lucide.createIcons();
});
nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNav));

document.querySelectorAll("[data-product-tab]").forEach((tab) => {
  tab.addEventListener("click", () => {
    const product = tab.dataset.productTab;
    document.querySelectorAll("[data-product-tab]").forEach((item) => item.setAttribute("aria-selected", String(item === tab)));
    document.querySelectorAll("[data-product-panel]").forEach((panel) => {
      const active = panel.dataset.productPanel === product;
      panel.hidden = !active;
      panel.classList.toggle("active", active);
    });
    if (window.lucide) window.lucide.createIcons();
  });
});

function updateHeader() { header?.classList.toggle("scrolled", window.scrollY > 40); }
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const canvas = document.querySelector("[data-flow-canvas]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (canvas) {
  const context = canvas.getContext("2d");
  const lines = Array.from({ length: 7 }, (_, index) => ({ phase: index * .8, amplitude: 70 + index * 18, speed: .00012 + index * .000012 }));
  function resizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.round(rect.width * ratio);
    canvas.height = Math.round(rect.height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }
  function draw(time = 0) {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    context.clearRect(0, 0, width, height);
    lines.forEach((line, index) => {
      const baseline = height * (.47 + (index - 3) * .025);
      const motion = reducedMotion ? 0 : Math.sin(time * line.speed + line.phase) * 16;
      context.beginPath();
      context.moveTo(-20, baseline + motion);
      context.bezierCurveTo(width * .28, baseline - line.amplitude, width * .62, baseline + line.amplitude, width + 20, height * .48);
      context.strokeStyle = `rgba(255,255,255,${.14 + index * .018})`;
      context.lineWidth = 1;
      context.stroke();
      const progress = ((time * line.speed * 42 + index * .13) % 1);
      const x = width * progress;
      const y = baseline + Math.sin(progress * Math.PI * 2 + line.phase) * line.amplitude * .45;
      context.beginPath(); context.arc(x, y, index % 3 === 0 ? 3 : 2, 0, Math.PI * 2); context.fillStyle = index % 3 === 0 ? "#71d5ad" : "rgba(255,255,255,.9)"; context.fill();
    });
    if (!reducedMotion) requestAnimationFrame(draw);
  }
  resizeCanvas(); draw();
  window.addEventListener("resize", resizeCanvas);
}

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());
