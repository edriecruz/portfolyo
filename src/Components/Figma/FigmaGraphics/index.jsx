import React from 'react'
import './index.scss'

const FigmaGraphics = ({ fgd }) => {
  return (
    <div className='FGD'>
      <img 
        src={fgd.img} 
        alt=""
        className='FGD-img' />
    </div>
  )
}

export default FigmaGraphics