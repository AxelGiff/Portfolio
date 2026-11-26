import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const activeLang = (i18n.resolvedLanguage || i18n.language || 'en').slice(0, 2);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector" role="group" aria-label="Language selector">
      <button
        type="button"
        onClick={() => changeLanguage('en')}
        className={activeLang === 'en' ? 'active-lang' : ''}
        aria-pressed={activeLang === 'en'}
        aria-label="Switch language to English"
      >
        EN
      </button>
      <span className="lang-separator" aria-hidden="true">|</span>
      <button
        type="button"
        onClick={() => changeLanguage('fr')}
        className={activeLang === 'fr' ? 'active-lang' : ''}
        aria-pressed={activeLang === 'fr'}
        aria-label="Passer la langue en français"
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSelector;
