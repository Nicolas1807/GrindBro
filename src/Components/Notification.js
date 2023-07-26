import React from 'react'
import "../styles/App.css"

export default function Notification() {
  return (
    <div className='notification'>
      <h1 className='notify-name'>Planning Error</h1>
      <p className='notify-content'>Remember to schedule your daily tasks with appropriate timespans. You can't do two task at a time.</p>
    </div>
  )
}
