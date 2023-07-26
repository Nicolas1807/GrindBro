//To jest Seewy Aplikacja//
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import "./styles/App.css"
import Sidebar from "./Components/Sidebar.js"
import PlanningPanel from './Components/PlanningPanel';
import Notification from './Components/Notification';

function App() {

    return  <div className='container'>
                <Sidebar/>
                <PlanningPanel />
            </div>

}

export default App