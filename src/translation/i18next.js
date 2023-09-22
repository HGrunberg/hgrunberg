import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import da from './da.json';
import en from './en.json';

export const languageResources = {
  en: {translation: en},
  da: {translation: da},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'da',
  fallbackLng: 'da',
  resources: languageResources,
});

export default i18next;