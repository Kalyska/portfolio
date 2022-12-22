import {BsLinkedin, BsGithub, BsFileEarmarkPdf} from 'react-icons/bs'
import {IoLocationSharp} from 'react-icons/io'
import React from 'react'

const Footer=()=>{
  return (
    <footer>
        <a className='github' href='https://github.com/Kalyska'><strong><BsGithub /></strong><br/>Github</a>
        <a className='linkedin' href='https://linkedin.com/in/clemence-guelque'><strong><BsLinkedin /></strong><br/>LinkedIn</a>
        <a className='cv'  href="CV_Clemence_Guelque.pdf" download=""><strong><BsFileEarmarkPdf /></strong><br/>C.V.</a>
    </footer>
  )
}

export default Footer