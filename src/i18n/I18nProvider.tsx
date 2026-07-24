import React, { useState, useEffect, ReactNode } from 'react';
import { I18nContext, Language, Translation } from './types';
import { translations } from './translations';

const STORAGE_KEY = 'guia_language';

function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved as Language;
  } catch {}
  return 'es';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const [t, setT] = useState<Translation>(translations[getInitialLanguage()]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setT(translations[lang]);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  };

  useEffect(() => {
    setT(translations[language]);
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}
