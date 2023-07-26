import React from 'react'
import "../styles/App.css"
import "../styles/PlanPanel.css"
import ScheduleBlock from './ScheduleBlock'
import svgplus from "../svg/typcn_plus.svg"
import { useState } from 'react'

export default function PlanningPanel() {

  const [schedules, changeSchedules] = useState([{id:1, start:"7", end:"9", name:"jogging"}, {id:2, start:"9", end:"10", name:"breakfast"}])

  
  const onAddSchedule = () => {
    changeSchedules(prevSchedules => [...prevSchedules, {start:"7", end:"9", name:"breakfast"}])
  }

  const ScheduleBlocks = (
    schedules.map((schedule) => (<ScheduleBlock changeValues = {changeSchedules} schedules = {schedules} key = {schedule.id} name= {schedule.name} start = {schedule.start} end = {schedule.end}/>))
  )
  console.log(schedules)

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
    </div>
  )
}
