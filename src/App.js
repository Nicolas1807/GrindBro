import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import "./styles/App.css"
import Sidebar from "./Components/Sidebar.js"
import CreatePlan from './Components/CreatePlan';
import DisplayPlan from './Components/DisplayPlan';
import {Provider} from "./Context/schedules"
import axios from "axios"
function App() {

    const[schedules, changeSchedules] = useState([{id:1, start:"7:00", end:"9:00", activities:["jogging", "swimming"]}, {id:2, start:"9:00", end:"10:00", activities:["breakfast","dupa"]}])
   
    useEffect(()=>{
        const getData = async() => {
            await axios.get("http://localhost:3001/schedules", {}).then((response)=>{
                changeSchedules([...response.data])
                console.log(schedules)
            })
        }
        getData()
    }, [])
        
    
    return  <div className='container'>
                <Provider schedules = {schedules} changeSchedules = {changeSchedules}>
                    <Sidebar/>
                    {/* <DisplayPlan/> */}
                    <CreatePlan schedules = {schedules} changeSchedules = {changeSchedules}/>
                </Provider>
            </div>

}

export default App