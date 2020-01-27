import React from 'react';
import { useTranslation } from 'react-i18next';

let Profile = () => {
    const {t} = useTranslation();
    return <div className = "authenticated">{t("welcome.1")}</div>
}

export default Profile;