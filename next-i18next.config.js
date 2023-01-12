const path=require('path')

module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en','ar','de','el','sw','it','iw','ja'],
    },
    localePath: path.resolve('./public/locales'),
    defaultNS:'translation'
  }


