import React, { useState } from 'react'
import "../styles/App.css"

export default function Notification(props) {

  const[visible, changeVisibility] = useState(true)
  const errorTitle = props.errorTitle
  const errorDesc = props.errorDesc


  const Note = (
  <div className='notification'>
    <h1 className='notify-name'>{errorTitle}</h1>
    <p className='notify-content'>{errorDesc}</p>
  </div>
  )
  setTimeout(()=>{changeVisibility(false)}, 5000)
  return (
    visible?Note:""
  )
}
