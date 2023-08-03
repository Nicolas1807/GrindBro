import { createContext, useState } from "react";
import React from 'react';

const SchedulesContext = createContext();

function Provider({children}) {
    // GLOBAL STATES
    const[schedules, changeSchedules] = useState([{id:1, start:"7:00", end:"9:00", activities:["jogging", "swimming"]}, {id:2, start:"9:00", end:"10:00", activities:["breakfast",]}])
    // const [errorTitle, changeTitle] = useState("Daily Reminder")
    // const [errorDesc, changeDesc] = useState("Remember to schedule your daily tasks with appropriate timespans. You can't do two task at a time.")
    // const [notifyVisible, changeNotifyVisible] = useState(true)
    // const [showWidget, changeShowWidget] = useState(false)
    

    //ADDING SCHEDULE BLOCK FUNCTION
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


    //UPDATING TIMESPAN OF A SCHEDULE FUNCTION
    const scheduleTimespan = (idUpdate, start, end) => {
        const updatedSchedules = schedules.map((schedule) => {
        if (schedule.id === idUpdate)
            return {...schedule, start:start, end:end}
        return schedule
        })
        changeSchedules(updatedSchedules)
    }


    //CHANGING ACTIVITIES IN A SCHEDULE FUNCTION
    const changeActivities = (idschedule, activities) => {
        const updatedSchedules = schedules.map((schedule) => {
            if(schedule.id === idschedule)
            {
            return {...schedule, activities:activities}
            }
            return schedule
        })
        changeSchedules(updatedSchedules)
    }


    //DELETING SCHEDULE BLOCK BY ID FUNCTION
    const deleteBlock = (idDelete) => {
        const updatedSchedules = schedules.filter((schedule)=>{return schedule.id !== idDelete})
        changeSchedules(updatedSchedules)
    }

    //CHANGE ORDER OF SCHEDULESBLOCKS IN SCHEDULESBLOCK LIST FUNCTION
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

  const scheduleData = {
    schedules,
    onAddSchedule,
    scheduleTimespan,
    changeActivities,
    deleteBlock,
    changeOrder
  }

  return (
    <SchedulesContext.Provider value = {scheduleData}>{children}</SchedulesContext.Provider>
  )
}

export {Provider};
export default SchedulesContext;