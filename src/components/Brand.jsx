import React from 'react'
import brand1 from '../assets/images/brand/brand1.svg'
import brand2 from '../assets/images/brand/brand2.svg'
import brand3 from '../assets/images/brand/brand3.svg'
import brand4 from '../assets/images/brand/brand4.svg'

export const Brand = () => {
  return (
    <div className='image '>
        <img src={brand1}/>
        <img src={brand2}/>
        <img src={brand3}/>
        <img src={brand4}/>
    </div>
  )
}
