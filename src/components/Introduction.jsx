import React from 'react'
import intro from '../assets/images/intro.svg'
import Button from './Button'
import Video from '../assets/images/video.svg'
function Introduction() {
    return (
        <div className='Introduction row' >
            <div className='col-12 col-md-4 col-lg-6  left-side'>
                <h6>Next generation platform</h6>
                <h1>Artificial intelligence <br /> & Cyber security</h1>
                <p>Lorem ipsum is placeholder text commonly used in the graphic,  print, and publishing industries for previewing layouts and  visual mockups.</p>
                    <div className='buttn'>
                    <Button buttonValue="Get Started" />
                    <Button buttonValue= " Watch Video" Video={Video} />
                    </div>
                   
            </div>
            <div className='col-12 col-md-8 col-lg-6  right-side '>
<img src={intro} />
            </div>
        </div>
    )
}

export default Introduction