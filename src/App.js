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

    return  <div className='container'>
                <Provider>
                    <Sidebar/>
                    <Routes>
                    <Route exact path = "/display-plan" element = {<DisplayPlan/>}/>
                    <Route exact path = "/create-plan/:url" element = {<CreatePlan/>}/>
                    </Routes>
                </Provider>
            </div>

}

export default App