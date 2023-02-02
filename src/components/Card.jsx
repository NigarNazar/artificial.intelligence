import React from 'react'


 const Card = ({imgValue,h3Value,phValue}) => {
  return (
    <>
     <div className='card'>
   {<img src={imgValue} />}
   <h3>{h3Value}</h3>
   <p>{phValue}</p>
    </div>
    </>
   
  )
}
export default Card