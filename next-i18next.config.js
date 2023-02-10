const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'de', 'el', 'sw', 'it', 'iw', 'ja', 'fa', 'es', 'fr', 'ko', 'nl', 'ru', 'pt_br', 'pt_pt', 'zh_cn', 'zh_tw', 'he', 'pl', 'no', 'sv', 'hr', 'cs', 'sw'],
  },
  localePath: path.resolve('./public/locales'),
  defaultNS: 'translation',
  react: { useSuspense: false },
}

