import React, { useState, useEffect } from 'react'
import './index.scss'

// dependencies
import { Link } from 'react-router-dom'
import { motion, useTime, useTransform } from 'framer-motion'

// components
import FigmaUX from './FigmaUX'

// assets
import backbutton from '../../Assets/circle-left.svg'
import figma from '../../Assets/Figma-logo.svg'

// data
import fuxprojects from '../Data/data1'
import fgdprojects from '../Data/data2'
import FigmaGraphics from './FigmaGraphics'

const Figma = () => {
  
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
    <div className='Figma'>
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
            src={figma} 
            alt='' 
            className='Figma-logo'
            style={{ rotate }} 
            whileHover={{ scale:1.5 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 10}}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          />

      <div className="Figma-UX">
        Figma UX
        <div className="Figma-UX-Project">
          {fuxprojects.map((uxprojects) => 
            <FigmaUX 
              fux={uxprojects}
              key={uxprojects.id} />
          )}
        </div>
        
      </div>
      <div className="Figma-Graphics">
        Figma Graphics

        <div className="Figma-GD-Project">
          {fgdprojects.map((gdprojects) => 
            <FigmaGraphics 
              fgd={gdprojects}
              key={gdprojects.id} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Figma