import React from 'react';
import { Button, Grid } from '@material-ui/core'
import { useTranslation } from 'react-i18next';

const Policy = () => {
  const { t } = useTranslation()
  return (
    // <Paper>
    <div style={{ margin: 20 }}>
      <h2>{t('Policy.policy')}</h2>
      <Grid container spacing={1} direction="row" >
        <Grid item xs={12} sm={10} style={{ padding: 10 }}>
          <p>{t('Policy.privacyPolicy')}</p>
          <p>{t('Policy.date')}</p>
          <p>{t('Policy.policyAndTerms')}</p>
          <p>{t('Policy.trendSasu')}</p>
          <h6>{t('Policy.introduction')}</h6>
          <p>{t('Policy.mobileTrend')}</p>
          <p>{t('Policy.i69app')}</p>
          <p>{t('Policy.collected')}</p>
          <p>{t('Policy.policyExplains')}</p>
          <p>{t('Policy.realName')}</p>
          <p>§ 1. {t('Policy.myData')}</p>
          <p>§ 1.1 {t('Policy.downloadI69app')}</p>
          <p>{t('Policy.storeOperator')}</p>
          <p>{t('Policy.googlePlay')}</p>
          <p>§ 1.2 {t('Policy.installation')}</p>
          <p>{t('Policy.accessCapabilities')}</p>
          <p>{t('Policy.operatingSystem')}</p>
          <p>{t('Policy.permissions')}</p>
          <p>§ 2. {t('Policy.userProfile')}</p>
          <p>{t('Policy.isixtynine')}</p>
          <p>{t('Policy.visiter')}</p>
          <p>{t('Policy.ipAddress')}</p>
          <p>{t('Policy.pushHandle')}</p>
          <p>{t('Policy.i69AppDomain')}</p>
          <p>{t('Policy.locationData')}</p>
          <p>{t('Policy.usesCookies')}</p>
          <p>§ 3. {t('Policy.domainServices')}</p>
          <p>{t('Policy.personalData')}</p>
          <p>{t('Policy.userProfileCreation')}</p>
          <p>§ 3.1 {t('Policy.mandatoryDetails')}</p>
          <p>{t('Policy.details')}</p>
          <p>{t('Profile.gender')}</p>
          <p>{t('Profile.age')}</p>
          <p>{t('Policy.userName')}</p>
          <p>{t('Policy.location')}</p>
          <p>{t('Policy.socialNetworkAccount')}</p>
          <p>{t('Policy.profilePersonalization')}</p>
          <p>§ 3.2 {t('Policy.voluntaryData')}</p>
          <p>{t('Policy.voluntaryDetails')}</p>
          <p>{t('Policy.delivering')}</p>
          <p>{t('Policy.userProfileVoluntary')}</p>
          <p>§ 3.3{t('Policy.locationDatas')}</p>
          <p>{t('Policy.locationBased')}</p>
          <p>{t('Policy.settings')}</p>
          <p>§ 3.4 {t('Policy.ipAddresses')}</p>
          <p>{t('Policy.testingPurposes')}</p>
          <p>§ 3.5 {t('Policy.paymentData')}</p>
          <p>{t('Policy.hearts')}</p>
          <p>§ 4. {t('Policy.trackingProviders')}</p>
          <p>§ 4.1 {t('Policy.cookiesPolicy')}</p>
          <p>{t('Policy.comfortably')}</p>
          <p>{t('Policy.mobileTrendSasu')}</p>
          <p>{t('Policy.analysisServices')}</p>
          <p>{t('Policy.completelyPrevented')}</p>
          <p>{t('Policy.comfort')}</p>
          <p>§ 4.2 {t('Policy.analyticsServices')}</p>
          <p>{t('Policy.trackingAnalytics')}</p>
          <p>{t('Policy.dataProcessing')}</p>
          <p>{t('Policy.trackingProvidersAnalysis')}</p>
          <p>{t('Policy.crashlytics')}</p>
          <p>{t('Policy.firebaseCrashlytics')}</p>
          <p>{t('Policy.expresslyAgreed')}</p>
          <p>https://firebase.google.com/support/privacy.</p>
          <h6>{t('Policy.googleAnalytics')}</h6>
          <p>{t('Policy.irelandLimited')}</p>
          <p>{t('Policy.information')}</p>
          <p>{t('Policy.usageInformation')}</p>
          <p>{t('Policy.userOption')}</p>
          <p>{t('Policy.acquisition')}</p>
          <p>{t('Policy.ourPartners')}</p>
          <p>{t('Policy.advertisingPurposes')}</p>
          <p>{t('Policy.advertisingPurposesAnd')}</p>
          <p>{t('Policy.googlePlaces')}</p>
          <p>{t('Policy.googleFirebase')}</p>
          <p>{t('Policy.characterization')}</p>
          <p>{t('Policy.googleTagManager')}</p>
          <p>{t('Policy.tagManager')}</p>
          <h6>{t('Policy.googleAdwords')}</h6>
          <p>{t('Policy.onlineAdvertising')}</p>
          <h6>{t('Policy.googleReCaptcha')}</h6>
          <p>{t('Policy.recognitionBots')}</p>
          <p>{t('Policy.facebookPixel')}</p>
          <p>{t('Policy.facebookWebsites')}</p>
          <p>{t('Policy.device')}</p>
          <p>{t('Policy.successful')}</p>
          <p>{t('Policy.facebookAnalytics')}</p>
          <p>{t('Policy.facebookPrivacyPolicy')}</p>
          <p>§ 4.3 {t('Policy.socialMediaLinks')}</p>
          <p>{t('Policy.networksInstagram')}</p>
          <p>{t('Policy.association')}</p>
          <p>{t('Policy.socialNetworksCollected')}</p>
          <p>{t('Policy.personalDataInformation')}</p>
          <h6>{t('Policy.facebook')}</h6>
          <p>{t('Policy.facebookPolicy')}</p>
          <h6>{t('Policy.instagram')}</h6>
          <p>{t('Policy.instagramPolicy')}</p>
          <h6>{t('Policy.youTube')}</h6>
          <p>{t('Policy.privacyPolicyGoogle')}</p>
          <p>§ 4.4 {t('Policy.facebookConnect')}</p>
          <p>{t('Policy.trendSasuOffers')}</p>
          <p>{t('Policy.facebookID')}</p>
          <p>§5. {t('Policy.transmitted')}</p>
          <p>{t('Policy.forwardPersonal')}</p>
          <p>§ 5.1 {t('Policy.transmissionPersonalData')}</p>
          <h6>{t('Policy.otherData')}</h6>
          <p>{t('Policy.transmitCustomer')}</p>
          <p>{t('Policy.serviceProviders')}</p>
          <p>{t('Policy.affiliatedCompanies')}</p>
          <h6>{t('Policy.otherDisclosures')}</h6>
          <p>{t('Policy.permitted')}</p>
          <p>{t('Policy.businessStructure')}</p>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button variant="contained" style={{ margin: 50 }} color="secondary" href="https://play.google.com/store/apps/details?id=com.i69.isyxtinine" target="_blank">
            {t('Home.download')}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Policy;