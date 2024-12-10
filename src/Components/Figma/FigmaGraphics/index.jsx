import React, { useState } from 'react'
import './index.scss'
import { motion, useTime, useTransform } from 'framer-motion'

import xmark from '../../../Assets/xmark.png'

const FigmaGraphics = ({ fgd }) => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  }

  const time = useTime();
  const rotate = useTransform(time, [0, 10000], [0, 360], { clamp: false });

  return (
    <>
    <div className='FGD'>
      <motion.img 
        src={fgd.img} 
        alt=""
        className='FGD-img'
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={openModal}
        />
    </div>
    {modal && 
      <div className="FGD-Modal" onClick={closeModal}>
      <img 
        src={fgd.img} 
        alt={fgd.img}
        className='img-Modal' />
      </div>
    }
    </>
  )
}

export default FigmaGraphics