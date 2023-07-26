import React from 'react'
import "../styles/App.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='logo'>GrindBro</div>
        <ul className='optionList'>
          <li className = 'options'>Home</li>
          <li className = 'options'>Money</li>
          <li className = 'options'>Plan</li>
          <li className = 'options'>Goals</li>
          <li className = 'options'>Notes</li>
        </ul>
    </div>
  )
}
