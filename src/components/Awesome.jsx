import React from 'react'
import Technology from '../assets/images/technology.svg'
import Photo from './Photo'
import Companies from './Companies'
export const Awesome = () => {
  return (
   <div className='Awesome row'>
    <div className='left-side col-12 col-md-6 col-lg-6 '>
<Companies h1Value='What our clients say about our awesome solutions' />
<Companies pValue='To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.
' />
    </div>
    <div className='right-side col-12 col-md-6 col-lg-6'>
<Photo imageValue={Technology} />
    </div>
   </div>
  )
}
