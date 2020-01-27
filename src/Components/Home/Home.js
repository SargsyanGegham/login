import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';

const Home = () => {
  let { t } = useTranslation();

  return (
    <div className="Home">
        <NavLink to = "/login">{t("LogIn.1")}</NavLink>
    </div>
  );
}

export default Home;
