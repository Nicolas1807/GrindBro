import React, { useEffect } from 'react'
import "../styles/App.css"
import "../styles/CreatePlan.css"
import ScheduleBlock from './ScheduleBlock'
import svgplus from "../svg/typcn_plus.svg"
import { useState, useContext } from 'react'
import Notification from './Notification'
import Widget from "./Widget"
import ScheduleContext from "../Context/schedules"

export default function CreatePlan(props) {

  //Getting data from context
  const {onAddSchedule} = useContext(ScheduleContext)

  const schedules = props.schedules


  //Modifying Activity with Widget
  // const activityModify = (idSchedule, activity) => {

  // }

  //DISPLAY SCHEDULEBLOCKS
  const ScheduleBlocks = (
    schedules.map((schedule) => (<ScheduleBlock schedule = {schedule}
       key = {schedule.id} activities= {schedule.activities} start = {schedule.start} end = {schedule.end}/>))
  )


  //DEUBUGGING



  //JSX CODE
  return (
    <div className='content'>
        <div className='panel'>
            <div className='title'>Plan your day</div>
            <div className='schedule'>
              {ScheduleBlocks}
            </div>
            <div className='control'>
              <div className='add-schedule' onClick={onAddSchedule}><img src={svgplus} alt="" /> ADD</div>
              <div className='accept-schedule'>ACCEPT</div>
            </div>
        </div>
        {/* <Widget showWidget={showWidget} changeShowWidget = {changeShowWidget}/>
        <Notification errorTitle = {errorTitle} errorDesc = {errorDesc} visible = {notifyVisible}/> */}
    </div>
  )
}
