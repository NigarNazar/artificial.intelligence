import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {

  const formRef = useRef();

  const sendEmail = (e) => {
  e.preventDefault()
  emailjs.sendForm('service_l9oop7n', 'template_300k7km',formRef.current, '9Pk5CoIg9B5FDBWKo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
   <>
   <div className=' contact'>
<form onSubmit={sendEmail}  ref={formRef}>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1"  className="form-label text-white">Subject</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1"  className="form-label text-white">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name"/>
</div>
   <div className="mb-3">
  <label htmlFor="exampleFormControlInput1"  className="form-label text-white">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label  text-white">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="submit" className='button'>Send</button> 
</form>
  
   </div>
   
  
   </>
  )
}

export default Contact