import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import nextI18nextConfig from '../next-i18next.config';
// import { connect } from 'react-redux';
// import { signup_user } from '../redux/actions/user';
import Register from '../src/views/Register';

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
const Signup = () => {
    return (
        <Register />
    )
}

export default Signup;