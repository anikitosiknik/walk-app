import React from "react";
import { LANGS } from "../types/TranslationTypes";
import defaultLang from "../i18n/en.json";

export const TranslationContext = React.createContext({
  config: defaultLang,
  currentLang: LANGS.en,
  changeLang: (lang: LANGS) => {},
});
