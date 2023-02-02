import React from 'react'
import footerSvg from '../assets/images/footer.svg'
import mailSvg from '../assets/images/papka/mail.svg'
import phoneSvg from '../assets/images/papka/phone.svg'
import locationSvg from '../assets/images/papka/location.svg'
import facebookSvg from '../assets/images/about/facebook.svg'
import instagramSvg from '../assets/images/about/instagram.svg'
import twitterSvg from '../assets/images/about/twitter.svg'
import linkedlinSvg from '../assets/images/about/linkedlin.svg'
import youtubeSvg from '../assets/images/about/youtube.svg'
import worldSvg from '../assets/images/about/world.svg'
import upSvg from '../assets/images/about/up.svg'
export const Footer = () => {
  return (
    <div className='row'>
        <div className='col-12 col-md-3 '>
            <div className='cards'>
                <img src={footerSvg} />
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</p>
                <div className='rabite'>
                <a href=''> <img src={mailSvg} /> Company@gmail.com.com</a>
                <a href=''> <img src={phoneSvg} /> Phone: (064) 332-1233</a>
                <a href=''> <img src={locationSvg} /> 450 Wall Street, USA, New York</a>
                </div>
                
            </div>
        </div>
        <div className='col-12 col-md-9 d-flex mt-5 numberOne-card'>
            <div  className='cards'>
                <h5>INFORMATION</h5>
                <p >New Collection</p>
                <p>About Store</p>
                <p>Contact Us</p>
                <p>Latest News</p>
                <p>Our Sitemap</p>
                <p>Orders History</p>
            </div>
            <div className='cards'>
            <h5>FOOTER MENU</h5>
                <p>Instagram profile</p>
                <p>New Collection</p>
                <p>Contact Us</p>
                <p>Latest News</p>
                <p>Terms & Conditions</p>
                <p>Purchase Theme</p>
            </div>
            <div className='cards'>
            <h5>USEFUL LINKS</h5>
                <p>Instagram profile</p>
                <p>New Collection</p>
                <p>Contact Us</p>
                <p>Latest News</p>
                <p>Terms & Conditions</p>
                <p>Purchase Theme</p>
                
            </div>
            <div className='cards'>
            <h5>ABOUT THE STORE</h5>
            <p>Lorem ipsum is placeholder<br /> text commonly
                 used in the <br /> graphic,
                 print, and layouts <br />and  visual mockups.</p>
            <a href=''>www.company.com</a>

            <div className='imagesCards'>
            <img src={facebookSvg} />
            <img src={instagramSvg} />
            <img src={twitterSvg} />
            <img src={linkedlinSvg} />
            <img src={youtubeSvg} />
            </div>
          
            <a href=''> <img src={worldSvg} /> English <img src={upSvg} /></a>
            </div>
        </div>
    </div>
  )
}
