import React from 'react'
import Brain from '../assets/images/apply.svg'
import Button from './Button'
import Photo from './Photo'
import Companies from './Companies'
export const Apply = () =>{
  return (
    <div className='Apply-brain row pt-5'>
<div className='right-side col-12 col-md-6 col-lg-6   '>
<Photo imageValue={Brain}  />
</div> 
<div className='left-side col-12 col-md-6  col-lg-6 '>
<Companies h1Value="Apply AI, Deep Learning and Data Sciece to solve" />
<Companies pValue="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups." />
<Button buttonValue='Learn More'/>
</div>
    </div>
  )
}
