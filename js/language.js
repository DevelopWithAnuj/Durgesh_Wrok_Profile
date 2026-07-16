/**
 * language.js
 * -----------------------------------------------------------------------
 * Handles all DOM logic for the bilingual (English ↔ Hindi) language
 * system. Reads its data from `translations` (see translations.js).
 *
 * Public API:
 *   changeLanguage(lang)  -> switches the whole page to "en" or "hi"
 *
 * Behaviour:
 *   - Updates every element with data-lang="key"          (text content)
 *   - Updates every element with data-placeholder="key"   (placeholder attr)
 *   - Updates every <option data-lang="key"> inside <select>
 *   - Persists the chosen language in localStorage
 *   - Restores the saved language automatically on page load
 *   - Flips the toggle button label (🇮🇳 हिन्दी ↔ 🇬🇧 English)
 * -----------------------------------------------------------------------
 */

(function () {
  const STORAGE_KEY = "preferredLanguage";
  const DEFAULT_LANG = "en";

  const TOGGLE_LABELS = {
    en: "🇮🇳 हिन्दी", // shown when current language is English (tap to switch to Hindi)
    hi: "🇬🇧 English", // shown when current language is Hindi (tap to switch to English)
  };

  /**
   * Updates a single element with the given translated string.
   * Uses innerHTML only when the string contains simple markup (e.g. <br />)
   * so that line breaks in addresses/hours keep working; otherwise uses
   * textContent to stay safe and fast for plain text.
   */
  function applyText(el, value) {
    if (typeof value !== "string") return;
    if (value.includes("<br")) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  }

  /**
   * Core reusable function — updates every translatable element on the
   * page to the requested language and remembers the choice.
   * @param {"en"|"hi"} lang
   */
  function changeLanguage(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];

    // 1. Elements with visible text: data-lang="key"
    document.querySelectorAll("[data-lang]").forEach((el) => {
      const key = el.getAttribute("data-lang");
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        applyText(el, dict[key]);
      }
    });

    // 2. Inputs / textareas with placeholders: data-placeholder="key"
    document.querySelectorAll("[data-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-placeholder");
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    // 3. Keep <html lang="..."> in sync for accessibility / SEO
    document.documentElement.setAttribute("lang", lang);

    // 4. Flip toggle button label(s) — desktop + mobile
    const toggleLabel = TOGGLE_LABELS[lang] || TOGGLE_LABELS[DEFAULT_LANG];
    document
      .querySelectorAll("#langToggleBtn, #langToggleBtnMobile")
      .forEach((btn) => {
        btn.textContent = toggleLabel;
      });

    // 5. Persist the choice
    localStorage.setItem(STORAGE_KEY, lang);

    // 6. Remember current language on <body> for any future CSS/JS hooks
    document.body.setAttribute("data-current-lang", lang);
  }

  /**
   * Reads the saved language (or falls back to default) and applies it.
   */
  function loadSavedLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const lang = saved === "hi" || saved === "en" ? saved : DEFAULT_LANG;
    changeLanguage(lang);
  }

  /**
   * Wires up click handlers for the toggle button(s). Toggling simply
   * flips between "en" and "hi" based on the current <html lang="...">.
   */
  function setupToggleButtons() {
    const handleToggle = () => {
      const current =
        document.documentElement.getAttribute("lang") || DEFAULT_LANG;
      const next = current === "en" ? "hi" : "en";
      changeLanguage(next);
    };

    const desktopBtn = document.getElementById("langToggleBtn");
    const mobileBtn = document.getElementById("langToggleBtnMobile");

    if (desktopBtn) desktopBtn.addEventListener("click", handleToggle);
    if (mobileBtn) mobileBtn.addEventListener("click", handleToggle);
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupToggleButtons();
    loadSavedLanguage();
  });

  // Expose for manual/debug use and for other scripts if ever needed.
  window.changeLanguage = changeLanguage;
})();
