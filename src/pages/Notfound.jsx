import React from 'react'
import "../pages/Notfound.css"
const Notfound = () => {
  return (
   <>
   <div className='error'>
   <div className="error-contain">
	<div className="error-text">
		<h1>404</h1>
		<p>Page not found.</p>
	</div>
	<div className="binoculars">
		<div className="back-bino"></div>
		<div className="left-bino"></div>
		<div className="right-bino"></div>
		<div className="left-bino-lense">
			<div className="eye"></div>
		</div>
		<div className="right-bino-lense">
			<div className="eye"></div>
		</div>
	</div>
</div>
   </div>
  

   </>
  )
}

export default Notfound