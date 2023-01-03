import React, { Fragment } from 'react'
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import projectsData from './projectsData';

const Project = ({ data }) => {
    if (!data) {
        return <Fragment></Fragment>
    }

    return (
        <div className="project-detail">
            <Header/>
            <div className="row1">
                <h2>{data.name}</h2>
                <hr />
                <div className="subhead">{data.subhead}</div>
                <div className="tech-wrapper">{data.tech} {data.techList}</div>
                <Image src={data.img1} alt="" width='300' height='150'/>
            </div>
            <div className="row2">
                <Image src={data.img2} alt="" width='300' height='150'/>
                <p>{data.description}</p>
            </div>
            <div className="row3">
                {/* BOUTON RETOUR ACCUEIL */}
                <Image src={data.img3} alt="" width='300' height='150'/>
            </div>
            <Footer/>
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