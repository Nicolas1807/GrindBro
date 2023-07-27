import React from 'react'
import "../styles/App.css"
import "../styles/CreatePlan.css"
import ScheduleBlock from './ScheduleBlock'
import svgplus from "../svg/typcn_plus.svg"
import { useState } from 'react'
import Notification from './Notification'

export default function CreatePlan(props) {

  //GETTING PROPS FROM APP.JS
  const schedules = props.schedules
  const changeSchedules = props.changeSchedules
  const [errorTitle, changeTitle] = useState("Daily Reminder")
  const [errorDesc, changeDesc] = useState("Remember to schedule your daily tasks with appropriate timespans. You can't do two task at a time.")


  
  //ADDING SCHEDULE BLOCK
  const onAddSchedule = () => {
    var idNumberFound = false
    while(!idNumberFound)
    {
      var newId = Math.round(Math.random()*9999)
      idNumberFound = true
      const ids = schedules.map((schedule) => {return schedule.id})
      if(ids.includes(newId))
      {
        idNumberFound = false
      }
      
    }
    changeSchedules([...schedules, {id:newId, start:"10:00", end:"12:00", activities:[]}])
  }


  //UPDATING TIMESPAN OF A SCHEDULE
  const scheduleTimespan = (idUpdate, start, end) => {
    console.log(idUpdate)
    console.log(start)
    console.log(end)
    const updatedSchedules = schedules.map((schedule) => {
      if (schedule.id === idUpdate)
        return {...schedule, start:start, end:end}
      return schedule
    })
    changeSchedules(updatedSchedules)
  }

  //ADDING ACTIVITIES TO A SCHEDULE
  const addActivity = (idUpdate, activities) => {
    const updatedSchedules = schedules.map((schedule) => {
        if(schedule.id === idUpdate)
        {
          return {...schedule, activities:activities}
        }
        return schedule
    })
    changeSchedules(updatedSchedules)
  }

  //DELETING SCHEDULE BLOCK BY ID
  const deleteBlock = (idDelete) => {
    const updatedSchedules = schedules.filter((schedule)=>{return schedule.id !== idDelete})
    changeSchedules(updatedSchedules)
  }

  const changeOrder = (idOrder, isDown) => {
    var updatedSchedules = []
    var index = 0
    for(var i = 0; i< schedules.length; i++){
      if (schedules[i].id === idOrder)
      {
        index = i
        if (isDown)
        {
          if(index >= schedules.length - 1)
          {
            return 0
          }
          updatedSchedules.push(schedules[i+1])
        }
        else
        {
          if(index <= 0)
          {
            return 0
          }
          updatedSchedules.push(schedules[i-1])
        }
      }
      else
      {
        updatedSchedules.push(schedules[i])
      }
    }
    if (isDown)
    {
      updatedSchedules[index+1] = schedules[index]
    }
    else
    {
      updatedSchedules[index-1] = schedules[index]
    }
    changeSchedules(updatedSchedules)
  }



  //DISPLAY SCHEDULEBLOCKS
  const ScheduleBlocks = (
    schedules.map((schedule) => (<ScheduleBlock deleteBlock = {deleteBlock} 
      scheduleTimespan = {scheduleTimespan} addActivity = {addActivity} schedule = {schedule}
       key = {schedule.id} activities= {schedule.activities} start = {schedule.start} end = {schedule.end} 
       changeTitle = {changeTitle} changeDesc = {changeDesc} changeOrder = {changeOrder}/>))
  )


  //DEUBUGGING
  console.log(schedules)


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
        <Notification errorTitle = {errorTitle} errorDesc = {errorDesc}/>
    </div>
  )
}
