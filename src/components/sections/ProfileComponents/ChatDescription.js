import React from "react";
import { useTranslation } from "react-i18next";
const ChatDescription = ({ text = "Hey", time = "02:09" }) => {
    const { t } = useTranslation()
    return (
        <>
            <h3 class="text-center">{t('dashboard.chatCoin')}</h3>
            <strong>{t('dashboard.connection')}</strong>
        </>
    );
};

export default ChatDescription;
