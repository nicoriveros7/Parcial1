import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Activities",
        cycling: "Cycling",
        running: "Running",
        swimming: "Swimming",
        length: "Length",
        duration: "Duration",
        city: "City",
      },
    },
    es: {
      translation: {
        title: "Actividades",
        cycling: "Ciclismo",
        running: "Correr",
        swimming: "Nadar",
        length: "Longitud",
        duration: "Duración",
        city: "Ciudad",
      },
    },
  },
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
