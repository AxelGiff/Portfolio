import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'dark';
  const saved = window.localStorage.getItem('portfolio-theme');
  return saved === 'light' ? 'light' : 'dark';
};

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const activeLang = (i18n.resolvedLanguage || i18n.language || 'en').slice(0, 2);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    window.localStorage.setItem('portfolio-theme', theme);

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', theme === 'light' ? '#e6ebf2' : '#000000');
    }
  }, [theme]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const isLight = theme === 'light';
  const isFr = activeLang === 'fr';

  return (
    <div className="language-selector" role="group" aria-label="Language and theme controls">
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

      <span className="lang-separator theme-divider" aria-hidden="true">·</span>

      <button
        type="button"
        onClick={toggleTheme}
        aria-pressed={isLight}
        aria-label={
          isLight
            ? isFr
              ? 'Passer en mode sombre'
              : 'Switch to dark mode'
            : isFr
              ? 'Passer en mode clair'
              : 'Switch to light mode'
        }
        title={isLight ? (isFr ? 'Mode sombre' : 'Dark mode') : isFr ? 'Mode clair' : 'Light mode'}
        className="theme-toggle-btn"
      >
        {isLight ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default LanguageSelector;
