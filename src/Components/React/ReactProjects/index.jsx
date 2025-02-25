import React, { useState } from 'react'
import { motion, useTime, useTransform } from 'framer-motion'
import './index.scss'

import arrow from '../../../Assets/square-arrow-up-right.png'
import xmark from '../../../Assets/xmark.png'

const ReactProjects = ({ project }) => {
  
  const time = useTime();
  const rotate = useTransform(time, [0, 10000], [0, 360], { clamp: false });


  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(prev => !prev);


  const stopMovie = (e) => {
    e.target.pause();
    e.target.currentTime = 0;
  }
  const playMovie = (e) => {
    e.target.play();
  }

  return (
    <>
    <motion.video 
        className='project'
        poster={project.img}
        onMouseOver={playMovie}
        onMouseOut={stopMovie}
        onClick={toggleModal}
        src={project.vid}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
    />
    {modal &&
    <div className='Modal'>
      <img 
        src={project.deets} 
        alt={project.deets}
        className='deets-Modal' />
      <motion.img 
        src={xmark} 
        className='close-Modal'
        onClick={toggleModal}
        style={{ rotate }} 
        whileHover={{ scale:3 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 6}}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
         />
         <a 
            href={project.link}
            target='_blank'
            rel='noreferrer' >
         <motion.img 
        src={arrow} 
        className='Arrow'
        whileHover={{ scale:1.1 }}
        transition={{ 
          anticipate: [0.17, 0.67, 0.83, 0.67]
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
         />
         </a>
    </div>}
    </>
  )
}

export default ReactProjects