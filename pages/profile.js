import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

import nextI18nextConfig from '../next-i18next.config';
import ProfileCom from '../src/views/Profile';

export async function getServerSideProps({locale}){
    if(locale){
      return{
        props:{
          ...(await serverSideTranslations(
            locale,
            ['translation'],
            nextI18nextConfig
          ))
        }
      }
    }
  }
const Profile = () => {
    return (
        <ProfileCom />
    )
}

export default Profile;