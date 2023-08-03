import React, { useState, useEffect } from 'react'
import "../styles/App.css"

export default function Notification(props) {

  const visible = props.visible
  const errorTitle = props.errorTitle
  const errorDesc = props.errorDesc

  useEffect(() => {
    console.log("Error Occured")
  }, [visible])

  const Note = (
  <div className='notification'>
    <h1 className='notify-name'>{errorTitle}</h1>
    <p className='notify-content'>{errorDesc}</p>
  </div>
  )
  
  return (
    visible?Note:""
  )
}
