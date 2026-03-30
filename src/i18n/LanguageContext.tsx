import { createContext, useContext, useState } from "react";
import { translations } from "./translations";

type Lang = "en" | "es";

const LanguageContext = createContext<any>(null);

export const LanguageProvider = ({ children }: any) => {
  const [lang, setLang] = useState<Lang>("en");
  
type TranslationKeys = keyof typeof translations.en;

  const t = (key: TranslationKeys) => {
    return translations[lang][key];
    };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);