// i18n.jsx
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

import translationEN from "./locales/en.json";
import translationRU from "./locales/ru.json";
import translationAR from "./locales/ar.json";
import translationDE from "./locales/de.json";
import translationZH from "./locales/zh.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  ar: {
    translation: translationAR,
  },
  de: {
    translation: translationDE,
  },
  zh: {
    translation: translationZH,
  },
};

i18n.use(Backend).use(initReactI18next).init({
  resources,
  lng: "en",
  debug: true, // enable debug mode
});

export default i18n;
