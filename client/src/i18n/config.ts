import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(backend)
  .init({
    fallbackLng: "en",
    lng: "en",
    backend: {
      loadPath: "locales/{{lng}}.json",
      addPath: "locales/add/{{lng}}",
    },
    interpolation: { escapeValue: false },
  });

export default i18n;