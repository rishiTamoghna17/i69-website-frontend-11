const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['ar', 'cs', 'de', 'el', 'en', 'es', 'fa', 'fr', 'he', 'hr', 'it', 'iw', 'ja', 'ko', 'nl', 'no', 'pl', 'pt_br', 'pt_pt', 'ru', 'sv', 'sw', 'zh_cn', 'zh_tw'],
  },
  localePath: path.resolve('./public/locales'),
  defaultNS: 'translation',
  react: { useSuspense: false },
}

