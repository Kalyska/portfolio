import React, { Fragment } from 'react'
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import projectsData from './projectsData';
import { useTranslation } from 'react-i18next';
import {AiFillHome} from 'react-icons/ai';

const Project = ({ data }) => {

    const dataUrl = data.url
    const { t } = useTranslation('fr', { useSuspense: false, keyPrefix: `projects` });

    if (!data) {
        return <Fragment></Fragment>
    }

    const techDisplay= data.techList.map((tech)=><Image src={tech} alt="" width={80} height={80}/>)
    console.log(data.techList)

    return (
        <div className="project-detail">
            <Header />
            <div className="no-reverse">
                <div className="project-title">
                    <h2>{t(`${dataUrl}.name`)}<hr /></h2>
                    <div className="subhead">{t(`${dataUrl}.subhead`)}</div>
                    <div className="tech-wrapper">{t('statictext.tech')} <span>{techDisplay}</span></div>
                </div>
                <div className="project-img">
                    <Image src={data.img1} alt="" fill object-fit='contain' />
                </div>
            </div>
            <div className="reverse">
                <p>{t(`${dataUrl}.description`)}</p>
                <div className="project-img">
                    <Image src={data.img2} alt="" fill object-fit='contain' />
                </div>
            </div>
            <div className="no-reverse">
                <a className='home-icon' href={'/'}>
                    <AiFillHome />
                    <span>{t(`statictext.gohome`)}</span>
                </a>
                <div className="project-img">
                    <Image src={data.img3} alt="" fill object-fit='contain' />
                </div>
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