import React from 'react';
import { BsChevronCompactDown } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const Landing = () => {
  const { t } = useTranslation('fr', { useSuspense: false });

  return (<div id="landing">
    <h1 className='title'><strong>Clémence Guelque</strong><br />{t('landing.dev')}</h1>
    <hr />

    <div className="listWrapper">
      <div className="listRow">
        <ul className="list">
          <li className="listItem">{t('landing.create')}</li>
          <li className="listItem">{t('landing.develop')}</li>
          <li className="listItem">{t('landing.brainstorm')}</li>
          <li className="listItem">{t('landing.work')}</li>
        </ul>
      </div>
      <span>{t('landing.together')}</span>
    </div>

    <a className='chevronDown' href='#projects'><BsChevronCompactDown /></a>
  </div>
  )
}

export default Landing