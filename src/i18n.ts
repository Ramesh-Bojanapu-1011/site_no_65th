/**
 * Initializes and configures the i18next internationalization library for the React application.
 *
 * - Imports language translation resources for English (`en`), Arabic (`ar`), and Hebrew (`he`).
 * - Sets up `initReactI18next` to enable React integration.
 * - Configures the available resources and sets English as the default and fallback language.
 * - Disables escaping for interpolation values (safe for React).
 *
 * @module i18n
 * @see https://www.i18next.com/
 * @see https://react.i18next.com/
 */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "./locales/ar.json";
import en from "./locales/en.json";
import he from "./locales/he.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
    he: { translation: he },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
