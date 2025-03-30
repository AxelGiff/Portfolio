import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css'; 

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };

  return (
    <div className="language-selector">
      <button 
        onClick={() => changeLanguage('en')}
        className={currentLang === 'en' ? 'active-lang' : ''}
      >
        EN
      </button>
      <span className="lang-separator">|</span>
      <button 
        onClick={() => changeLanguage('fr')}
        className={currentLang === 'fr' ? 'active-lang' : ''}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSelector;
