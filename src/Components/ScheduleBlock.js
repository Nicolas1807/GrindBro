import React from 'react'
import "../styles/App.css"
import "../styles/CreatePlan.css"
import tool from "../svg/dashicons_admin-tools.svg"
import plus from "../svg/typcn_plus.svg"
import { useState, useContext } from 'react'
import yes from "../svg/dashicons_yes.svg"
import bin from "../svg/mdi_bin.svg"
import arrow from "../svg/arrow.svg"
import tools from "../svg/mdi_tool.svg"
import ScheduleContext from "../Context/schedules"


export default function ScheduleBlock(props) {

  const{deleteBlock, changeOrder, scheduleTimespan, changeActivities} = useContext(ScheduleContext)


  const [start, changeStart] = useState(props.start)
  const [end, changeEnd] = useState(props.end)
  const [localActivities, changeLocalActivities] = useState(props.activities)

  const schedule = props.schedule


  // const scheduleTimespan = props.scheduleTimespan
  // const addActivity= props.addActivity
  // const deleteBlock = props.deleteBlock
  // const changeOrder = props.changeOrder



  const[timespanFocus, changeTimespanFocus] = useState(true)
  const[addActivityFocus, changeActFocus] = useState(false)
  const[newActivity, changeNewAct] = useState("")
  const[blockDone, changeBlockDone] = useState(false)
  

  //TIMESPAN CLICK
  const timespanClick = (e) => {
    changeTimespanFocus(!timespanFocus)
  }

  //CHANGING THE TIMESPAN
  const timespanAcceptClick = (e) => {
    e.preventDefault()
    
    let [startHour, startMinute] = start.split(":")
    let [endHour, endMinute] = end.split(":")
    console.log(startHour)
    console.log(startMinute)
    if(isNaN(startHour) || isNaN(startMinute) || isNaN(endHour) || isNaN(endMinute))
    {
      // changeTitle("Enter Correct Timespans")
      // changeDesc("Remeber to not leave empty inputs")
      changeStart("")
      changeEnd("")
    }
    else if(startHour>endHour || (startHour===endHour && startMinute >= endMinute)){
        // changeTitle("Missing Logic")
        // changeDesc("Make sure you enter hours correctly")
        changeStart("")
        changeEnd("")
    }
    else{
    changeStart(startHour + ":" + startMinute)
    changeEnd(endHour + ":" + endMinute)
    scheduleTimespan(schedule.id, start, end)
    timespanClick(e)
    }
    
  }

  //DISPLAY TIMESPAN
  const timespanValue = (
      <div className='timespan' onClick={blockDone?()=>{}:timespanClick}>
      {start} - {end}
      <img src={tool} alt = ""></img>
      </div>
  )
  
  //START VALUE HANDLER
  const handleStartChange = (e) => {
    changeStart(e.target.value)
  }
  //END VALUE HANDLER
  const handleEndChange = (e) => {
    changeEnd(e.target.value)
  }

  
  //DISPLAY FORM TO CHANGE TIMESPAN
  const timespanControl = (
    <form className='timespan' onSubmit={timespanAcceptClick}>
      <input className = "timespan-inputs" type = "time" onChange={handleStartChange} value = {start}></input>
      <input className = "timespan-inputs"type = "time" onChange={handleEndChange} value = {end}></input>
      <input type = "submit" class = "accpt-timespan" value = "Accept"/>
    </form>
  )


    const handleActClick = (e) => {
      changeLocalActivities(localActivities.filter((act) => {
        return act !== e.target.textContent
      }))
      changeActivities(schedule.id, localActivities)
    }


  //DISPLAY ACTIVITIES
  const Activities = (
   localActivities.map((activity) => {
    return <div key = {activity} className='activity-block' onClick={blockDone?()=>{}:handleActClick}>{activity}</div>
   })
  )
  
  //WHEN SB CLICKS TO ADD NEW ACTIVITY
  const handleActFocus = (e) => {
    changeActFocus(!addActivityFocus)
  }

  //HANDLE ADDICTION OF NEW ACTIVITY
  const handleActivityAdd = (e) => {
    e.preventDefault()
    if (newActivity === "")
    {
      // changeTitle("Typing Error")
      // changeDesc("Make sure you enter activities correctly")
      changeNewAct("")
    }
    else
    {

      changeLocalActivities([...localActivities, newActivity])
      console.log([...localActivities, newActivity])
      console.log(localActivities)
      changeNewAct("")
      changeActivities(schedule.id, [...localActivities, newActivity])

      handleActFocus()
    }

  }
  //HANDLER OF ACTIVITY VALUE CHANGE
  const handleNewAct = (e) => {
    changeNewAct(e.target.value)
  }

  //PANEL WITH PLUS TO ADD NEW ACTIVITY
  const addAcitivityPanel = (
    localActivities.length > 3 ? "" : <div className = "add-act" onClick = {handleActFocus}><img src = {plus} alt = "add activity"></img></div>
  )

  //PANEL TO ADD NEW ACTIVITY
  const activityControl = (
    <form className = "act-control" onSubmit = {handleActivityAdd}>
      <input type='text' value = {newActivity} onChange={handleNewAct}></input>
      <button type='submit' className='acpt-act'><img src = {yes} alt = "yes"/></button>
    </form>
  )
  
  //DELETING A BLOCK
  const handleBlockDelete = (e) => {
    deleteBlock(schedule.id)
  }
  
  const onBlockSubmit = (e) => {
    changeBlockDone(!blockDone)
  }


  const handleArrowDown = (e) => {
    changeOrder(schedule.id, true)
  }

  const handleArrowUp = (e) => {
    changeOrder(schedule.id, false)
  }


  return (
    <div className={blockDone?" scheduleblock-green":"scheduleblock"}>
      {timespanFocus?timespanValue:timespanControl}
      <div className='activities'>
        {Activities}
        {blockDone?"":addActivityFocus?activityControl:addAcitivityPanel}
        
      </div>
      <div className='block-control'>  
          <div className='arrows'>
            <img src = {arrow} alt = "arrow" onClick = {handleArrowUp}></img>
            <img className = "arr-down" src = {arrow} alt = "arrow" onClick = {handleArrowDown}></img>
          </div>
          <div className="bin" onClick={blockDone?()=>{}:handleBlockDelete}><img src = {bin} alt = "bin"></img></div>
          {
          blockDone?
          <div className='done-block' onClick={onBlockSubmit}><img src = {tools} alt = "yes"></img></div>:
          <div className='accept-block' onClick={onBlockSubmit}><img src = {yes} alt = "yes"></img></div>
          }
        </div>
    </div>
  )
}
