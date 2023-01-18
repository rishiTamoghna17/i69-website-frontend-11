const path=require('path')

module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en','ar','de','el','sw','it','iw','ja','fa','es','fr','ko','nl','ru'],
    },
    localePath: path.resolve('./public/locales'),
    defaultNS:'translation'
  }


