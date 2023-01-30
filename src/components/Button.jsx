import React from 'react'
 const Button = ({buttonValue , Video}) => {
  return (
    <button className="btn-duyme" type="submit">{ Video && <img src={Video}/>} {buttonValue}</button>
  )
}
 export default Button