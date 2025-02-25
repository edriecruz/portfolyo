import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './index.scss'

import mevideo from '../../Assets/Untitled design.gif'
import backbutton from '../../Assets/circle-left.svg'
import portrait from '../../Assets/PORTFOLIO-nobg.png'
import contact from '../../Assets/Me/me-contact.svg'
import services from '../../Assets/Me/me-prices.svg'
import burger from '../../Assets/Me/me-burger.svg'
import { Link } from 'react-router-dom'

import MeMain from './MeMain'
import MeWeb from './MeWeb'
import MeGraphic from './MeGraphic'
import MeCaseStudy from './MeCaseStudy'
import MeNeedsWants from './MeNeedsWants'
import MeServices from './MeServices'
import MePrices from './MePrices'
import MeContact from './MeContact'
import MeCTA from './MeCTA'

const Me = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  // Grid Modals //
  const [gridModal1, setGridModal1] = useState(false);
  const toggleModal1 = () => setGridModal1(prev => !prev);

  const [gridmodal2, setGridModal2] = useState(false);
  const toggleModal2 = () => setGridModal2(prev => !prev);

  const [gridmodal3, setGridModal3] = useState(false);
  const toggleModal3 = () => setGridModal3(prev => !prev);

  const [gridmodal4, setGridModal4] = useState(false);
  const toggleModal4 = () => setGridModal4(prev => !prev);

  const [gridmodal5, setGridModal5] = useState(false);
  const toggleModal5 = () => setGridModal5(prev => !prev);

  const [gridmodal6, setGridModal6] = useState(false);
  const toggleModal6 = () => setGridModal6(prev => !prev);

  const [gridmodal7, setGridModal7] = useState(false);
  const toggleModal7 = () => setGridModal7(prev => !prev);

  const [gridmodal8, setGridModal8] = useState(false);
  const toggleModal8 = () => setGridModal8(prev => !prev);

  const [gridmodal9, setGridModal9] = useState(false);
  const toggleModal9 = () => setGridModal9(prev => !prev);

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
            onMouseLeave={textLeave}
            onClick={toggleModal1}>
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
            onMouseLeave={textLeave}
            onClick={toggleModal2}>
            <p>WEB DESIGNER</p>
          </div>
          <div
            class="grid-item grid-item-3"
            tabindex="-1"
            onMouseEnter={textEnter}
            onMouseDown={textFocus}
            onMouseLeave={textLeave}
            onClick={toggleModal3}>
            <p>GRAPHIC DESIGNER</p>
          </div>
        </div>
        <div class="gridbox-2">
          <div
            class="grid-item grid-item-4"
            tabindex="-1"
            onMouseEnter={textEnter}
            onMouseDown={textFocus}
            onMouseLeave={textLeave}
            onClick={toggleModal4}>
            CASE STUDIES
          </div>
          <div
            class="grid-item grid-item-5"
            tabindex="-1"
            onMouseEnter={textEnter}
            onMouseDown={textFocus}
            onMouseLeave={textLeave}
            onClick={toggleModal5}>
            <img
              src={burger}
              alt="burger-svg"
              class='svg' />
          </div>
          <div
            class="grid-item grid-item-6"
            tabindex="-1"
            onMouseEnter={textEnter}
            onMouseDown={textFocus}
            onMouseLeave={textLeave}
            onClick={toggleModal6}>
            SERVICES
          </div>
          <div
            class="grid-item grid-item-7"
            tabindex="-1"
            onMouseEnter={textEnter}
            onMouseDown={textFocus}
            onMouseLeave={textLeave}
            onClick={toggleModal7}>
            <img
              src={services}
              alt="services-svg"
              class='svg' />
          </div>
          <div
            class="grid-item grid-item-8"
            tabindex="-1"
            onMouseEnter={textEnter}
            onMouseDown={textFocus}
            onMouseLeave={textLeave}
            onClick={toggleModal8}>
            <img
              src={contact}
              alt="contact-svg"
              class='svg' />
          </div>
          <div
            class="grid-item grid-item-9"
            tabindex="-1"
            onMouseEnter={textEnter}
            onMouseDown={textFocus}
            onMouseLeave={textLeave}
            onClick={toggleModal9}>CALL TO ACTION</div>

        </div>
      </div>

      {gridModal1 &&
        <div className="modal" onClick={() => setGridModal1(false)}>
          <MeMain />
        </div>
      }
      {gridmodal2 &&
        <div className="modal" onClick={() => setGridModal2(false)}>
          <MeWeb />
        </div>
      }
      {gridmodal3 &&
        <div className="modal" onClick={() => setGridModal3(false)}>
          <MeGraphic />
        </div>
      }
      {gridmodal4 &&
        <div className="modal" onClick={() => setGridModal4(false)}>
          <MeCaseStudy />
        </div>
      }
      {gridmodal5 &&
        <div className="modal" onClick={() => setGridModal5(false)}>
          <MeNeedsWants />
        </div>
      }
      {gridmodal6 &&
        <div className="modal" onClick={() => setGridModal6(false)}>
          <MeServices />
        </div>
      }
      {gridmodal7 &&
        <div className="modal" onClick={() => setGridModal7(false)}>
          <MePrices />
        </div>
      }
      {gridmodal8 &&
        <div className="modal" onClick={() => setGridModal8(false)}>
          <MeContact />
        </div>
      }
      {gridmodal9 &&
        <div className="modal" onClick={() => setGridModal9(false)}>
          <MeCTA />
        </div>
      }
    </div>

  )
}

export default Me