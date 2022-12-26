import React from 'react';
import { useTranslation } from 'react-i18next';

const Header=()=>{
  const{t, i18n}=useTranslation();
  function handleLangChange(e){
    i18n.changeLanguage(e.target.className)
  };
  
  return (
    <header>
        <span>see in</span><span onClick={handleLangChange} className='fr'>fr</span><span>|</span><span onClick={handleLangChange} className='en'>en</span>
    </header>
  )
}

export default Header