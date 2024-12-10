import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './index.scss'

import mevideo from '../../Assets/Untitled design.gif'
import backbutton from '../../Assets/circle-left.svg'
import portrait from '../../Assets/PORTFOLIO-nobg.png'
import { Link } from 'react-router-dom'

const Me = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
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
    focus: {
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
  const photoEnter = () => setCursorVariant("photo")
  const textLeave = () => setCursorVariant("default")

  return (
    <div className='Me'>

      {/* ----- MOUSE ----- */}
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />

      {/* ----- BACK BUTTON ----- */}
      <div className="Back-Button">
        <Link
          to='/'>
          <img
            src={backbutton}
            alt=""
            className='Back-Button-Item'
            onMouseEnter={textEnter}
            onMouseDown={textFocus}
            onMouseLeave={textLeave} />
        </Link>
      </div>

      {/* ----- CONTENT ----- */}

      <div class="grid-container">
        <div class="gridbox-1">
          <div
            class="grid-item grid-item-1"
            tabindex="-1"
            onMouseEnter={textEnter}
            onMouseDown={textFocus}
            onMouseLeave={textLeave}>
            <img
              src={mevideo}
              alt=""
              className='Me-Vid-Item' />
          </div>
          <div
            class="grid-item grid-item-2"
            tabindex="-1"
            onMouseEnter={textEnter}
            onMouseDown={textFocus}
            onMouseLeave={textLeave}></div>
          <div
            class="grid-item grid-item-3"
            tabindex="-1"
            onMouseEnter={textEnter}
            onMouseDown={textFocus}
            onMouseLeave={textLeave}></div>
        </div>
        <div class="gridbox-2">
          <div
            class="grid-item grid-item-4"
            tabindex="-1"
            onMouseEnter={textEnter}
            onMouseDown={textFocus}
            onMouseLeave={textLeave}></div>
          <div
            class="grid-item grid-item-5"
            tabindex="-1"
            onMouseEnter={textEnter}
            onMouseDown={textFocus}
            onMouseLeave={textLeave}></div>
          <div
            class="grid-item grid-item-6"
            tabindex="-1"
            onMouseEnter={textEnter}
            onMouseDown={textFocus}
            onMouseLeave={textLeave}></div>
          <div
            class="grid-item grid-item-7"
            tabindex="-1"
            onMouseEnter={textEnter}
            onMouseDown={textFocus}
            onMouseLeave={textLeave}></div>
          <div
            class="grid-item grid-item-8"
            tabindex="-1"
            onMouseEnter={textEnter}
            onMouseDown={textFocus}
            onMouseLeave={textLeave}></div>
          <div
            class="grid-item grid-item-9"
            tabindex="-1"
            onMouseEnter={textEnter}
            onMouseDown={textFocus}
            onMouseLeave={textLeave}></div>

        </div>
      </div>

      {/* <div className="Me-Vid">
        <img
          src={mevideo}
          alt=""
          className='Me-Vid-Item' />
      </div>

      <div className="Portrait">
        <img
          src={portrait}
          alt=""
          className='Portrait-Item'
          onMouseEnter={photoEnter}
          onMouseLeave={textLeave} />
      </div> */}
    </div>

  )
}

export default Me