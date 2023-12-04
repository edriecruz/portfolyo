import React, { useEffect, useState } from 'react'
import './index.scss';
import { Link } from 'react-router-dom'

// Animation
import { motion, useTime, useTransform } from 'framer-motion';

// Asset
import star from '../../Assets/Frame 216.png'
import steroids from '../../Assets/STG_flash (3).mp4'
import react from '../../Assets/React-icon.svg.png'
import figma from '../../Assets/Figma-logo.svg'

const Home = () => {
    
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
    <div className="Home">
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
      <header className="Home-header">
        <div className='Home-header-1'>
          <Link  
            to='/ME'
            style={{
              'textDecoration': 'none',
              'cursor': 'none'
            }}
          >
          <h1 
            onMouseEnter={textEnter}
            onMouseDown={textFocus} 
            onMouseLeave={textLeave}>
              EDRIE ISAAC CRUZ
          </h1>
          </Link>
          
        </div>
        <div className='Home-header-2'>
          <motion.img   
            src={star} 
            style={{ rotate }} 
            className='star-rotating'
            whileHover={{ scale:1.5 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 6}}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            />
        </div>
      </header>
      <div className='Home-body'>
        <video
          autoPlay
          muted="muted"
          loop="loop"
          className='Home-body-video'>
            <source 
            src={steroids}
            type='video/mp4'/>
        </video>
      </div>
      <footer className='Home-footer'>

        <div className='FIGMA'>
          <Link
            to='/FIGMA'
            style={{
              'textDecoration': 'none',
              'cursor': 'none'
            }}
            >
            <motion.img 
            src={figma} 
            alt='' 
            className='FIGMA-svg'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
          }}
            onMouseEnter={textEnter} 
            onMouseDown={textFocus} 
            onMouseLeave={textLeave}
            />
          </Link>
        </div>

        <div className='REACT'>
          <Link
            to='/REACT'
            style={{
              'textDecoration': 'none',
              'cursor': 'none'
            }}>
              <motion.img   
            src={react} 
            alt='' 
            className='REACT-svg'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            onMouseEnter={textEnter} 
            onMouseDown={textFocus} 
            onMouseLeave={textLeave}
          />
          </Link>
          
        </div>
      </footer>
    </div>
  )
}

export default Home