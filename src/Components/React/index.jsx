import React, { useState, useEffect } from 'react'
import { motion, useTime, useTransform  } from 'framer-motion'
import './index.scss'
import { Link } from 'react-router-dom'

import backbutton from '../../Assets/circle-left.svg'
import react from '../../Assets/React-icon.svg.png'
import ReactProjects from './ReactProjects'
import reactprojects from '../Data/data'

const ReactJS = () => {
  const time = useTime();
  const rotate = useTransform(time, [0, 10000], [0, 360], { clamp: false });


  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0
  })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x:e.clientX,
        y:e.clientY
      })
    }
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  })

  const variants = {
    default: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: '#efe9dc',
      mixBlendMode: 'difference'
    },
    photo: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: '#efe9dc',
      mixBlendMode: 'difference'
    },
    focus :{
      height: 40,
      width: 40,
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      backgroundColor: '#efe9dc',
      mixBlendMode: 'difference'
    }
  }

  const textEnter = () => setCursorVariant("text")
  const textFocus = () => setCursorVariant("focus")
  const textLeave = () => setCursorVariant("default")

  return (
    <div className='React'>
            <motion.div
              className='cursor'
              variants={variants}
              animate={cursorVariant}
          />
      <div className="Back-Button">
        <Link
          to='/'>
            <img 
          src={backbutton} 
          alt="" 
          className='Back-Button-Item'
          onMouseEnter={textEnter}
          onMouseDown={textFocus} 
          onMouseLeave={textLeave}/>
        </Link>
      </div>
      <motion.img   
            src={react} 
            alt='' 
            className='React-logo'
            style={{ rotate }} 
            whileHover={{ scale:1.5 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 10}}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          />
          <div className="React-Projects">
            React Projects
            <div className="React-Project">
            {reactprojects.map((projects) => 
              <ReactProjects 
                project={projects}
                key={projects.id}
                />
            )}
            </div>
          </div>
    </div>
  )
}

export default ReactJS