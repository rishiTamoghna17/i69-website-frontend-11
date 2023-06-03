
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import nextI18nextConfig from '../next-i18next.config';
import SearchView from '../src/views/Search';
import "bootstrap/dist/css/bootstrap.min.css";
import PrivatLayout from '../src/layouts/PrivatLayout';
export async function getServerSideProps({ locale }) {
    if (locale) {
        return {
            props: {
                ...(await serverSideTranslations(
                    locale,
                    ['translation'],
                    nextI18nextConfig
                ))
            }
        }
    }
}
const Search = () => {
    return (
        <PrivatLayout>
            <SearchView />
        </PrivatLayout>
    )
}

export default Search;