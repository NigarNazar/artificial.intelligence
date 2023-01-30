import React from 'react'
import intro from '../assets/images/intro.svg'
import Button from './Button'
import Video from '../assets/images/video.svg'
import Photo from './Photo'
import Companies from './Companies'
function Introduction() {
    return (
        <div className='Introduction row' >
            <div className='col-12 col-md-6 col-lg-6  left-side'>
                <Companies h6Value="Next generation platform" />
                <Companies h1Value="Artificial intelligence & Cyber security" />
                <Companies pValue="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups." />
                    <div className='buttn'>
                    <Button buttonValue="Get Started" />
                    <Button buttonValue= " Watch Video" Video={Video} />
                    </div>
                   
            </div>
            <div className='col-12 col-md-6 col-lg-6  right-side '>
                <Photo imageValue={intro} />
            </div>
        </div>
    )
}

export default Introduction