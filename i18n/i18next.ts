import i18next from "i18next";
import { header } from "./en";

const components = {
  header,
};

const en = {
  components,
};

i18next.init({
  lng: "en",
  resources: {
    en: {
      translation: en,
    },
  },
});

export function useTranslation() {
  return {
    t: i18next.t,
  };
}

export default i18next;
