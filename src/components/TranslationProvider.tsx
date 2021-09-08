import React, { ReactElement, useEffect, useState } from "react";

import { TranslationContext } from "../contexts/TranslationContext";
import defaultLangConfig from "../i18n/en.json";
import { languages } from "../types/TranslationTypes";

export default function TranslationProvider(props: { children: ReactElement }) {
  const [config, setConfig] = useState(defaultLangConfig);
  const [currentLang, setCurrentLang] = useState(languages.en);

  useEffect(() => {
    async function loadLang() {
      const data = (await import(`../i18n/${currentLang}.json`)) as {
        default: typeof config;
      };
      setConfig(data.default);
    }
    loadLang();
  }, [currentLang]);

  return (
    <TranslationContext.Provider
      value={{ config, setCurrentLang, currentLang }}
    >
      {props.children}
    </TranslationContext.Provider>
  );
}
