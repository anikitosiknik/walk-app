import React, { ReactElement, useEffect, useState } from "react";
import { TranslationContext } from "../contexts/TranslationContext";
import { LANGS } from "../types/TranslationTypes";
import defaultLang from "../i18n/en.json";

export default function TranslationProvider(props: { children: ReactElement }) {
  const [config, changeConfig] = useState(defaultLang);
  const [currentLang, changeLang] = useState(LANGS.en);

  useEffect(() => {
    async function loadLang() {
      const data = (await import(`../i18n/${currentLang}.json`)) as {
        default: typeof config;
      };
      changeConfig(data.default);
    }
    loadLang();
  }, [currentLang]);

  return (
    <TranslationContext.Provider value={{ config, changeLang, currentLang }}>
      {props.children}
    </TranslationContext.Provider>
  );
}
