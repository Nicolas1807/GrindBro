import React from 'react'
import "../styles/App.css"
import {Link} from "react-router-dom"
export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='logo'>GrindBro</div>
        <ul className='optionList'>
          <Link to = "create-plan" className = 'options'>Home</Link>
          <Link to = "create-plan" className = 'options'>Money</Link>
          <Link to = "display-plan" className = 'options'>Plan</Link>
          <Link to = "create-plan" className = 'options'>Goals</Link>
          <Link to = "create-plan" className = 'options'>Notes</Link>
        </ul>
    </div>
  )
}
