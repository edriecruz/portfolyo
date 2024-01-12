import React, { useState } from 'react'
import './index.scss'
import { motion } from 'framer-motion'

const FigmaGraphics = ({ fgd }) => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  }


  return (
    <div className='FGD'>
      <motion.img 
        src={fgd.img} 
        alt=""
        className='FGD-img'
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      />
    </div>
  )
}

export default FigmaGraphics