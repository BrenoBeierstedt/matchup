import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { settingsMenuDrawerPT } from '@/i18n/locales/pt-BR/index'
import { settingsMenuDrawerEN } from '@/i18n/locales/en-US/index'

export const defaultNS = 'common';
export const resources = {
    'en-US': {
        'settingsMenuDrawer': settingsMenuDrawerEN,
    },
    'pt-BR': {

        'settingsMenuDrawer': settingsMenuDrawerPT,
    },
};

i18n.use(initReactI18next)
    .init({
        interpolation: {
            escapeValue: false,
        },
        lng: 'en-US',
        fallbackLng: 'en-US',
        debug: false,
        defaultNS,
        resources,
        compatibilityJSON: 'v3',
    });

export default i18n;
