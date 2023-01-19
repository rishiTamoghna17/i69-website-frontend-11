const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'de', 'el', 'sw', 'it', 'iw', 'ja', 'fa', 'es', 'fr', 'ko', 'nl', 'ru', 'pt-br', 'pt-pt', 'zh-cn','Zh-tw'],
  },
  localePath: path.resolve('./public/locales'),
  defaultNS: 'translation'
}


