import React from "react";

import defaultLang from "../i18n/en.json";
import { languages } from "../types/TranslationTypes";

export const TranslationContext = React.createContext({
  config: defaultLang,
  currentLang: languages.en,
  setCurrentLang: (lang: languages) => {
    lang;
  },
});
