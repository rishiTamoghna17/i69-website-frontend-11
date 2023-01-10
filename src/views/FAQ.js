import React from 'react';
import { Button, Grid } from '@material-ui/core'
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation()
  return (
    // <Paper>
    <div style={{margin: 100}}>
      <h2>{t('FAQ.faq')}</h2>
      <Grid container spacing={1} direction="row" >
        <Grid item xs={12} sm={10} style = {{padding: 10}}>
          <h6>{t('FAQ.social')}</h6>
          <p><b>{t('FAQ.connect')}</b>{t('FAQ.teamDetermined')}</p>
          
          <h6>{t('FAQ.matches')}</h6>
          <p>{t('FAQ.anotherUser')}</p>
          
          <h6>{t('FAQ.searches')}</h6>
          <p>{t('FAQ.noLimits')}</p>
          
          <h6>{t('FAQ.conversations')}</h6>
          <p>{t('FAQ.noLimits')}</p>
          
          <h6>{t('FAQ.profileTags')}</h6>
          <p>{t('FAQ.express')}</p>
          
          <h6>{t('FAQ.filterSearch')}</h6>
          <p>{t('FAQ.searchTab')}</p>
          <p>{t('FAQ.socialUsers')}</p>

          <h6>{t('FAQ.datingApps')}</h6>
          <p>{t('FAQ.listedCompany')}</p>
          
          <h6>{t('FAQ.roomMates')}</h6>
          <p>{t('FAQ.absolutely')}</p>

          <h6>{t('FAQ.businessPartners')}</h6>
          <p>{t('FAQ.absolutelyYes')}</p>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button variant="contained" style={{ margin: 50 }} color="secondary" href="https://play.google.com/store/apps/details?id=soft.agency.kbt.com.i69.stage&hl=en" target="_blank">
            {t('Home.download')}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default FAQ;