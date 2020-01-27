import React,{ useCallback } from 'react';
import './Languages.css';
import { useTranslation } from 'react-i18next';


let Languages = () => {

// function for change  language 
  const { i18n } = useTranslation();
  let hendleClick = useCallback(lang => {
    i18n.changeLanguage(lang); 
  }, [i18n]);

  return (
    <div className = "Languages">
       <section  onClick = {() => hendleClick('en')}
                 className={i18n.language === 'en'? "active" : "disconnected"}
        >
           <span>en</span>
       </section>
       <section  onClick = {() => hendleClick('ru')} 
                 className ={i18n.language === 'ru'? "active" : "disconnected"}
        >
           <span>ru</span>
       </section>
    </div>
  );
}

export default Languages;
