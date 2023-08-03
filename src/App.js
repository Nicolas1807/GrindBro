import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import "./styles/App.css"
import Sidebar from "./Components/Sidebar.js"
import CreatePlan from './Components/CreatePlan';
import DisplayPlan from './Components/DisplayPlan';
import {Provider} from "./Context/schedules"
import {Switch,Routes,Route,Link} from "react-router-dom";

import axios from "axios"
function App() {

    const[schedules, changeSchedules] = useState([, ]);
   
    useEffect(()=>{
        const getData = async() => {
            await axios.get("http://localhost:3001/schedules", {}).then((response)=>{
                changeSchedules([...response.data])
            })
        }
        getData()
    }, [])
        
    
    return  <div className='container'>
                <Provider schedules = {schedules} changeSchedules = {changeSchedules}>
                    <Sidebar/>
                    <Routes>
                    <Route path = "/display-plan" element = {<DisplayPlan/>}/>
                    <Route path = "/create-plan" element = {<CreatePlan schedules = {schedules} changeSchedules = {changeSchedules}/>}/>
                    </Routes>
                </Provider>
            </div>

}

export default App