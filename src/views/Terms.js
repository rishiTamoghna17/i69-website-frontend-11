import React from 'react';
import { Button, Grid } from '@material-ui/core'
import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation()
  return (
    // <Paper>
    <div style={{margin: 20}}>
      <h2>{t('Terms.terms')}</h2>
      <Grid container spacing={1} direction="row" >
        <Grid item xs={12} sm={10} style = {{padding: 10}}>
          <h6>{t('Terms.termsAndConditions')}</h6>
          <p>§ 1. {t('Terms.scopeApplication')}</p>
          <p>{t('Terms.generalTermsAndConditions')}</p>
          <p>§ 1.2 {t("Terms.servicesExclusively")}</p>
          <p>§ 1.3 {t('Terms.guardianship')}</p>
          <p>§ 2. {t('Terms.conclusion')}</p>
          <p>{t('Terms.contract')}</p>
          <p>§ 3. {t('Terms.subjectMatter')}</p>
          <p>§ 3.1 {t('Terms.serviceProvided')}</p>
          <p>§ 3.2 {t('Terms.operator')}</p>
          <p>§ 3.3 {t('Terms.basicService')}</p>
          <p>§ 3.4 {t('Terms.wish')}</p>
          <p>§ 3.5 {t('Terms.chargeableService')}</p>
          <p>§ 3.6 {t('Terms.guarantee')}</p> 
          <p>§ 3.7 {t('Terms.welcome')}</p>
          <p>§ 4. {t('Terms.contractual')}</p>
          <p>§ 4.1 {t('Terms.unrestricted')}</p>
          <p>§ 4.2 {t('Terms.completely')}</p>
          <p>§ 4.3 {t('Terms.service')}</p>
          <p>§ 4.4 {t('Terms.permitted')}</p>
          <p>§ 4.5 {t('Terms.messages')}</p>
          <p>§ 4.6 {t('Terms.violateUser')}</p>
          <p>§ 4.7 {t('Terms.responsibility')}</p>
          <p>§ 4.8 {t('Terms.appropriate')}</p>
          <p>§ 4.9 {t('Terms.parties')}</p>
          <p>§ 4.10 {t('Terms.legalClaim')}</p>
          <p>§ 5. {t('Terms.development')}</p>
          <p>§ 5.1 {t('Terms.improvements')}</p>
          <p>§ 5.2 {t('Terms.newVersions')}</p>
          <p>§ 6. {t('Terms.liability')}</p>
          <p>§ 6.1 {t('Terms.operatorContract')}</p>
          <p>§ 6.2 {t('Terms.principle')}</p>
          <p>§ 6.3 {t('Terms.damages')}</p>
          <p>§ 6.4 {t('Terms.grossly')}</p>
          <p>§ 6.5 {t('Terms.provisions')}</p>
          <p>§ 7. {t('Terms.contractTermination')}</p>
          <p>§ 7.1 {t('Terms.indefinitePeriod')}</p>
          <p>§ 7.2 {t('Terms.terminated')}</p>
          <p>§ 7.3 {t('Terms.extraordinaryTermination')}</p>
          <p>§ 8. {t('Terms.refund')}</p>
          <p>{t('Terms.acknowledges')}</p>
          <p>§ 9. {t('Terms.finalProvisions')}</p>
          <p>§ 9.1 {t('Terms.republic')}</p>
          <p>§ 9.2 {t('Terms.ineffective')}</p>
          <p>§ 10. {t('Terms.gifted')}</p>
          <p>§ 10.1 {t('Terms.giftedCoins')}</p>
          <p>§ 10.2 {t('Terms.userGift')}</p>
          <p>§ 10.3 {t('Terms.balance')}</p>
          <p>§ 11. {t('Terms.rules')} </p>
          <p> {t('Terms.houseRules')}</p>
          <h6>{t('Terms.refrain')}</h6>
          <p>{t("Terms.purpose")}</p>
          <p>{t('Terms.nefarious')}</p>
          <p>{t('Terms.damageI69app')}</p>
          <p>{t('Terms.spamming')}</p>
          <p>{t('Terms.impersonating')}</p>
          <p>{t('Terms.bullying')}</p>
          <p>{t('Terms.infringes')}</p>
          <p>{t('Terms.content')}</p>
          <p>{t('Terms.promotes')}</p>
          <p>{t('Terms.soliciting')}</p>
          <p>{t('Terms.account')}</p>
          <p>{t('Terms.investigate')}</p>
          <p>§ 12. {t('Terms.prizeDraw')}</p>
          <p>{t('Terms.time')}</p>
          <h6>{t('Terms.prize')}</h6>
          <p>1. {t('Terms.entering')}</p>
          <p>2. {t('Terms.offered')} </p>
          <p>3. {t('Terms.entrants')}</p>
          <p>4. {t('Terms.eligible')}</p>
          <p>5. {t('Terms.maximum')}</p>
          <p>6. {t('Terms.free')}</p>
          <h6>{t('Terms.enter')}</h6>
          <p>7. {t('Terms.registered')}</p>
          <p>8. {t('Terms.specialOffers')}</p>
          <p>9. {t('Terms.contactDetails')}</p>
          <p>10. {t('Terms.described')}</p>
          <p>11. {t('Terms.indicated')}</p>
          <p>12. {t('Terms.random')}</p>
          <p>13. {t('Terms.alternatives')}</p>
          <p>14. {t('Terms.reserves')}</p>
          <p>15. {t('Terms.decision')}</p>
          <h6>{t('Terms.Winner')}</h6>
          <p>16. {t('Terms.notifiedDirectly')}</p>
          <p>17. {t('Terms.contact')}</p>
          <p>18. {t('Terms.respond')}</p>
          <h6>{t('Terms.receipt')}</h6>
          <p>19. {t('Terms.delivery')}</p>
          <h6>{t('Terms.protection')}</h6>
          <p>20. {t('Terms.consent')}</p>
          <p>21. {t('Terms.participant')}</p>
          <p>22. {t('Terms.winnerAgrees')}</p>
          <p>23. {t('Terms.announcement')}</p>          
          <p>24. {t('Terms.privacyNotice')}</p>
          <h6>{t('Terms.limitation')}</h6>
          <p>25. {t('Terms.negligence')}</p>
          <p>26. {t('Terms.responsibilities')}</p>
          <h6>{t('Terms.general')}</h6>
          <p>27. {t('Terms.conditions')}</p>
          <p>28. {t('Terms.frenchLaw')}</p>
        </Grid>
        <Grid item xs={12} sm={2}>
<<<<<<< HEAD
          <Button variant="contained" style={{ margin: 50 }} color="secondary" href="https://play.google.com/store/apps/details?id=com.i69.isyxtinine" target="_blank">
=======
          <Button variant="contained" style={{ margin: 50 }} color="secondary" href="https://play.google.com/store/apps/details?id=com.i69app.i69app&pli=1" target="_blank">
>>>>>>> 136ba71321dee0c50c1d48eedae06c95a909a1e2
            {t('Home.download')}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Terms;