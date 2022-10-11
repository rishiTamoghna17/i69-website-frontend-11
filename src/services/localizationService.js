
import en from '../i18n/en'
import fr from '../i18n/fr'

const languages = {
    en,
    fr
};
process.isBrowser = () => typeof window !== 'undefined';

// let defaultLanguage = window && window.navigator && window.navigator.language === 'en' ? 'en' : 'fr';

let defaultLanguage = 'en'
if (process.isBrowser()) {
    window.i18nData = languages[defaultLanguage];
    window.changeLanguage = (lang) => {
        window.i18nData = languages[lang];
    }
    window.i18n = (key) => window.i18nData[key];
} else {
    global.i18nData = languages[defaultLanguage];
    global.changeLanguage = (lang) => {
        global.i18nData = languages[lang];
    }
    global.i18n = (key) => global.i18nData[key];
}