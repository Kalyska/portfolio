import React, { Fragment } from 'react'
import Image from 'next/image'

const Project = ({ data }) => {
    if (!data) {
        return <Fragment></Fragment>
    }

    return (
        <div>
            <h2>{data.name}</h2>
            <div className="subhead">Projet de formation</div>
            <Image src={data.image} alt="" />
        </div>
    )
}

export default Project

export async function getStaticPaths() {
    const paths= projectsData.map(project=>{
        return {
            params: {project: project.name}
        }
    })
    return {paths, fallback: false}
}

export async function getStaticProps({ params }) {
    // Le nom du paramètre id provient directement du nom du fichier avec l'information stockée dans les []
    const data = await fetch(`https://picsum.photos/id/${params.id}/info`).then(res => res.json());

    return {
        props: {
            data
        }
    }
}