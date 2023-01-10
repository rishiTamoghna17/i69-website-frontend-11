import React from 'react';
import { Button, Grid } from '@material-ui/core'
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const Policy = () => {
  const { t } = useTranslation()
  return (
    // <Paper>
    <div style={{ margin: 100 }}>
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
          <p>The data provided by you will be collected, processed and used for the purpose of using i69app. Without limitation these details serve for the mandatory data like personal address, authentication, age verification, profile personalization, the display of suitable user profiles. They may also be used in connection with and for advertising purposes (see item 4).</p>
          <p>§ 3.2 Voluntary data</p>
          <p>In addition, you can provide various voluntary details in your user profile. This serves, in particular, for the i69app function whereby recommendations for other user profiles according to various criteria are selected for the user and displayed within yoomee. Additional information increases the chance of, matching and meeting suitable user profiles. These details may be provided by you optional and can be viewed, entered, modified or deleted by you at any time in the profile under Details.</p>
          <p>The data provided is collected, processed, and used by us for the purpose of delivering the i69app service.</p>
          <p>These voluntary details are visible to all users logged in within i69app, but can be deleted or modified at any time by the owner of the user profile under the settings in the user profile.</p>
          <p>§ 3.3 Location data</p>
          <p>i69app also includes so-called location-based services, under which the user will have access to special functions that are tailored to the respective location. Hereby, the user or, in particular, other users, who are around and nearby, can be displayed. In order to offer these functions within the i69app, i69app collects location data via the GPS of the device in use as well as location data via radio access nodes. When the location service is active, with permission, the location will be regularly transmitted to Mobile Trend sasu i69 (isixtynine), where it will be processed and used.</p>
          <p>The user can modify this function in the operating system settings on their device at any time. This means to permit or revoke the acquisition of location data.</p>
          <p>§ 3.4 IP addresses</p>
          <p>User IP addresses are recorded for security and testing purposes. This should prevent any misuse of the service. The data is processed and used to prevent and combat illegal activities and spam as well as securing the integrity and stability of the i69app platform.</p>
          <p>§ 3.5 Payment data</p>
          <p>Any in-app purchases or the purchase of so-called “hearts” will be charged by external payment providers. No payment data is collected or processed by Mobile Trend sasu i69(isixtynine) for any of such purchases. The entry as well as the processing of the payment data is solely by the payment provider. Technical data (the transaction ID and other) is being exchanged between Mobile Trend sasu i69(isixtynine) and the chosen payment provider in order to validate the purchase.</p>
          <p>§ 4. Which cookies, tracking providers, analytical services does i69app use? How are Social Media and Like buttons embedded?</p>
          <p>§ 4.1 Cookies and cookie policy</p>
          <p>In order to be able to use the i69app domain as comfortably as possible, we use cookies on the i69app domain. Cookies are small text files that are stored locally in the cache of the Internet browser (so-called session cookies) or on the hard disk of the mobile device or computer used (so-called permanent cookies). The browser settings can be selected so that cookies are rejected or a reference is made to them before cookies are set. By setting cookies, users are assigned pseudonymized IDs. Cookies do not run programs on the user's end device or even transmit viruses. Session cookies are deleted from the cache after the end of the browser session.</p>
          <p>Mobile Trend sasu i69 (isixtynine) also uses cookies to increase the security of the i69app domain. For example, to authenticate the user during a session, to avoid cross-site scripting or to prevent phishing and fraudulent actions such as scamming.</p>
          <p>Furthermore, tracking providers / analysis services (see also the explanations under point 4.2 Use for the use of tracking providers / analysis services) place cookies on the user's device on behalf of Mobile Trend sasu i69 (isixtynine) in order to record the usage data. This is data that can be collected while the user is z. B. moves on the pages of the i69app domain or clicks on advertising. These cookies are used to display targeted advertising, to optimize reports on advertising campaigns and to prevent identical advertising from being displayed multiple times.</p>
          <p>Users can influence the use of cookies. Most browsers have a setting option with which the storage of cookies is restricted or completely prevented.</p>
          <p>However, we would like to point out that the use and in particular the comfort of use of i69app can be restricted without the use of cookies.</p>
          <p>§ 4.2 Tracking providers, analytics services</p>
          <p>i69app carries out user tracking analytics in order to optimize the i69app services and user experience. Mobile Trend sasu i69(isixtynine) implements analytical methods that enables i69app to analyse visits to the i69app domain and i69app. Furthermore, third-party tracking tools are integrated to analyse the range of different advertising campaigns and marketing activities. Personal data can also be transmitted under use of third-party tools.</p>
          <p>In addition to troubleshooting, the purpose of data processing is the optimization of i69app with regard to user experience. With web analysis methods, Mobile Trend sasu i69(isixtynine) also obtains statistics on visitor numbers and their temporal browsing of popular content as well as the duration of visits per click and page. When appropriate, it can be tracked whether a user profile was created subsequent to viewing an advertisement. The data is processed and used to prevent and combat fake profiles, unlawful activities and spam as well as to ensure the security of the i69app platform. User data is transmitted to various third parties to carry out the analysis.</p>
          <p>The following analysis and tracking providers are currently in use with i69app:</p>
          <h6>Crashlytics</h6>
          <p>The i69app uses the Firebase Crashlytics analysis tool by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (hereinafter “Crashlytics”). This analysis program uses IP addresses of the users for analysis purposes, which are used only anonymously however. It is not possible to trace a specific person. Crashlytics delivers analysis to Mobile Trend sasu i69 (isixtynine) on system crashes and thereby facilitates maintenance and improvement of the i69app and i69app domain. A user ID, the clicks and the technical device data is transmitted to analyse the error.</p>
          <p>If you have voluntarily and expressly agreed to submit a crash report in the App settings or after a crash, anonymous information (device type, version of the operating system, hardware data of the mobile device, current position in the source code, time of the crash and the state of the application for Time of the crash) will be transmitted to the servers of Google and stored for evaluation. Crash reports contain no personal information. For more information about privacy, visit </p>
          <p>https://firebase.google.com/support/privacy.</p>
          <h6>Google Analytics</h6>
          <p>i69app uses “Google Analytics”, a service by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland (hereinafter: “Google”). Mobile Trend sasu i69 (isixtynine) points out that for use with i69app, Google Analytics has been extended with the IP masking function “_gat. _anonymizeIp”, to guarantee the recording of anonymized IP addresses.</p>
          <p>The following information on the use of Google Analytics should be noted:</p>
          <p>Google Analytics uses cookies that are stored on the device and enable an analysis of the use of i69app. The i69app usage information produced by the cookie is generally transmitted to a Google server in the USA for storage. However, since IP anonymization is active, the IP addresses of all uses in the EU and associated countries are shortened by Google prior to transmission to the USA. Under contract between Mobile Trend GmbH and Google, Google uses the information to evaluate the use of our services, to compile reports on activities and to provide the operator with further services.</p>          
          <p>The user has the option to opt out:</p>
          <p>Google Analytics data acquisition and storage can be revoked at any time with future effect. The user also has the option to install a browser plugin issued by Google. This is available for various browser versions and can be downloaded here. You can learn more about data usage for advertising purposes, settings and opting out on the following Google webpages:</p>
          <p>(“Google’s data usage when you use our partners’ websites and apps”),</p>
          <p>(“Data usage for advertising purposes”),</p>
          <p>(“Data usage for advertising purposes”) and</p>
          <p>(“Determine what advertising Google places”).</p>
          <h6>Google Firebase</h6>
          <p>Furthermore, we use the service “Google Firebase” for the analysis and characterization of our user groups and the delivery of push notifications. You can find Firebase’s privacy policy here (insert link) as well as Google’s privacy policy here.</p>
          <h6>Google-Tag-Manager</h6>
          <p>We use Google Tag Manager. Google Tag Manager is a solution, with which marketers can manage website tags via an interface. The Tag Manager tool itself is a domain without cookies and the tool does not collect any personal data. The tool triggers other tags, which for their part may collect data. Google Tag Manager does not access this data. If disabled at the domain or cookie level, this remains the case for all tracking tags that were implemented with Google Tag Manager.</p>
          <h6>Google Adwords</h6>
          <p>We use the online advertising program “Google AdWords” and conversion tracking within the framework of Google AdWords. Google Conversion Tracking is an analytical service by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland ("Google"). When you click on an advertisement placed by Google, a cookie for the conversion tracking will be placed on your computer. The cookies have limited validity, contain no personal data and do not enable a personal identification. If you visit certain internet pages on our website and the cookie has not yet expired, we and Google can recognize that you clicked on the advertisement and were redirected to this site. Every Google AdWords customer receives a different cookie. It is therefore not possible for cookies to be tracked over the websites of Google AdWords customers. The information obtained with the help of the conversion cookie serves for the creation of conversion statistics for AdWords customers, who have selected conversion tracking. Hereby, the customers learn the total number of users that have clicked on their advert and have been redirected to a page with a conversion tracking tag. They receive, however, no information that can be used to personally identify users. If you do not want to participate in tracking, you can opt out by blocking the installation of cookies through a corresponding setting in your browser software (deactivation option). Upon opting out you will not be recorded in the conversion tracking statistics. You can find further information as well as Google’s privacy policy here.</p>        
          <h6>Google ReCaptcha</h6>
          <p>We integrate the function for the recognition of bots (“ReCaptcha”), e.g. for entries in online forms, offered by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. You have the right to opt out.</p>          
          <h6>Facebook Pixel and SDK</h6>
          <p>We use the "Facebook Pixel" on our websites https://www.i69app.lovcom and https://i69app.blog/ and in our i69App the "Software Developer KIT" (SDK) of the social network Facebook, 1601 South California Avenue, Palo Alto, CA 94304, United States. These counting pixels are integrated on our pages and in the i69app. When visiting our websites and using our app, a direct connection between your browser or mobile device and the Facebook server is being established.</p>          
          <p>Facebook gets the information from your browser that our website has received from your device. If you are a Facebook user, Facebook may assign your visit to our Sites and the use of our App to your account. We point out that we are not aware of the content of the transmitted data and their use by Facebook. We can only choose which category of Facebook users (such as age, interests) our ad should display.</p>
          <p>By calling the pixel from your browser, Facebook can also tell if a Facebook ad was successful. In this way we record the effectiveness of Facebook advertisements for statistical and market research purposes.</p>
          <p>We use the data obtained from the Facebook pixel in the Facebook analysis tool "Facebook Analytics" to optimize our websites and our app.</p>
          <p>For more information, see the Facebook Privacy Policy at https://www.facebook.com/about/privacy/. Please click on the following link if you do not want to collect data via Facebook Pixel: Opt out of Facebook Pixel Tracking here</p>
          <p>§ 4.3 Social media links</p>
          <p>Links to Mobile Trend i69app accounts with the social networks Instagram and Facebook are incorporated on the i69app domain. After clicking on the integrated graphic, the user will be redirected to the respective provider of Instagram or Facebook. This means that only then will user information be transmitted to the respective provider.</p>
          <p>If the user is logged in to their user profile on the respective social network, after activation of the button, an association with the i69app visit is made.</p>
          <p>If the user does not want data to be collected via the i69app domain by the social networks, they should log out of these before visiting the i69app domain. However, every time the corresponding button is activated through a click, a cookie or cookies with an identifier are set by i69app. Data could be collected and a profile created through the use of this function, which could, under certain circumstances, be traced back to an individual person. If the user does not want this, they can deactivate the link within the i69app domain with a click. The user can also set up their browser in such a way so as to generally exclude the use of cookies. We point out, however, that, in this case, functionality of i69app could be limited.</p>
          <p>Information on the handling of personal data when using these websites can be taken from the respective provider’s privacy policy.</p>
          <h6>Facebook</h6>
          <p>Facebooks’s privacy policy (operated by Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA) can be found here.</p>          
          <h6>Instagram</h6>
          <p>Instagram’s privacy policy (operated by Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA) can be found here or here.</p>
          <h6>YouTube</h6>
          <p>The privacy policy of Google and YouTube (each operated by Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland) can be found here.</p>
          <p>§ 4.4 Facebook-Connect</p>
          <p>Mobile Trend sasu i69(isixtynine) offers the user the option to register for i69app with Facebook Connect. The user will be redirected to the Facebook website (operated by Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA) to register, where they log in with their user data as long as they are not already logged in. With a click, the respective Facebook profile and the i69app user profile are linked. Upon linking, Mobile Trend sasu i69(isixtynine) automatically receives user data from Facebook in the form of the email address and further data from the user’s public Facebook profile. The public Facebook profile contains data, which the user has made publicly accessible on Facebook. The public Facebook profile typically comprises the following data: name, profile picture, sex, language, country, age range, Facebook ID, friends, likes and relationship status.</p>
          <p>Of the data transmitted by Facebook, Mobile Trend sasu i69(isixtynine) uses the email address, Facebook ID, profile picture and date of birth. This information is used for the user profile. Further information on Facebook Connect and the privacy settings can be found in Facebook’s data protection information and terms of use.</p>          
          <p>§5. How is data disclosed / transmitted?</p>
          <p>Mobile Trend sasu i69(isixtynine) does not forward personal data of a user to third parties, unless the user has given his or her consent to do so, or the transmission is prescribed by law or permitted by law.</p>
          <p>§ 5.1 General information on the transmission of personal data</p>
          <h6>User data and other data</h6>
          <p>i69app is permitted to transmit customer data to the following third parties for the execution of the agreement:</p>
          <p>External service providers and representatives. i69app can employ external companies or individuals to process customer data.</p>
          <p>Affiliated companies. i69app can employ affiliated companies to process customer data.</p>
          <h6>Other disclosures</h6>
          <p>yoomee is permitted to transmit and disclose customer data as follows:</p>
          <p>As part of changes to business structure. In connection with mergers, acquisitions, insolvency proceedings, liquidation proceedings, restructuring measures, divestment of all or part of yoomee's assets, financing, </p>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button variant="contained" style={{ margin: 50 }} color="secondary" href="https://play.google.com/store/apps/details?id=soft.agency.kbt.com.i69.stage&hl=en" target="_blank">
            Download
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Policy;