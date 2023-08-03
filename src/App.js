import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import "./styles/App.css"
import Sidebar from "./Components/Sidebar.js"
import CreatePlan from './Components/CreatePlan';
import DisplayPlan from './Components/DisplayPlan';
import {Provider} from "./Context/schedules"

function App() {


    const [schedules, changeSchedules] = useState([{id:1, start:"7:00", end:"9:00", activities:["jogging", "swimming"]}, {id:2, start:"9:00", end:"10:00", activities:["breakfast",]}])

    return  <div className='container'>
                <Provider>
                    <Sidebar/>
                    {/* <DisplayPlan/> */}
                    <CreatePlan schedules = {schedules} changeSchedules = {changeSchedules}/>
                </Provider>
            </div>

}

export default App