import React, { useState } from 'react'
import { motion, useTime, useTransform } from 'framer-motion';
import './index.scss'

const FigmaUX = ({ fux }) => {

  const time = useTime();
  const rotate = useTransform(time, [0, 10000], [0, 360], { clamp: false });


  const [modal, setModal] = useState(false)
  const openModal = () => {
    setModal(true);
  }
  const closeModal = () => {
    setModal(false);
  }

  return (
    <div className='FUX'>
      <motion.img 
        src={fux.img} 
        alt=""
        className='FUX-img'
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
     />
     <h1 className='FUX-title'>
     {fux.title}
     </h1>
    </div>
  )
}

export default FigmaUX