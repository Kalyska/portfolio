import React from 'react';
import Carousel from "../components/Carousel";
// eslint-disable-next-line
import "swiper/css/bundle";
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('fr', { useSuspense: false });
  return (
    <div id="projects">
      <h3>{t('about.title')}</h3><hr />
      <p id="about">{t('about.text')}</p>
      <Carousel />
    </div>
  )
}

export default About