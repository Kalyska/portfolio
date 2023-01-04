import React, { Fragment } from 'react'
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import projectsData from './projectsData';
import { useTranslation } from 'react-i18next';

const Project = ({ data }) => {

    const dataUrl = data.url

    const {t }= useTranslation('fr', {useSuspense: false, keyPrefix :`projects`});
    
    console.log(data.url);

    console.log(t(`${dataUrl}.name`));

    if (!data) {
        return <Fragment></Fragment>
    }

    return (
        <div className="project-detail">
            <Header />
            <div className="row top">
                <div className="project-title">
                    <h2>{t(`${dataUrl}.name`)}<hr /></h2>
                    <div className="subhead">{t(`${dataUrl}.subhead`)}</div>
                    <div className="tech-wrapper">{t('statictext.tech')} {t(`${dataUrl}.techList`)}</div>
                </div>
                <Image src={data.img1} alt="" width='300' height='150' />
            </div>
            <div className="row">
                <Image src={data.img2} alt="" width='300' height='150' />
                <p>{data.description}</p>
            </div>
            <div className="row">
                <div>futur bouton retour accueil</div>
                <Image src={data.img3} alt="" width='300' height='150' />
            </div>
            <Footer />
        </div>
    )
    
}

export default Project

export async function getStaticPaths() {
    const paths = projectsData.map(project => {
        return {
            params: { project: project.url }
        }
    })
    return { paths, fallback: false }
}

export function getStaticProps({ params }) {
    const data = projectsData.find(project => project.url === params.project)
    return {
        props: {
            data
        }
    }
}