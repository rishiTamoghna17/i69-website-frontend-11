import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-xhr-backend";

  
i18next
    .use(Backend)
    .use(initReactI18next)
    .init({
      lng: "en",
      fallbackLng: "en",
      interpolation: {
        escapeValue: false
      }
    });
  
  export default i18next;
  