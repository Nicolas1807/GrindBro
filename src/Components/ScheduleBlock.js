import React from 'react'
import "../styles/App.css"
import "../styles/PlanPanel.css"
import screw from "../svg/dashicons_admin-tools.svg"
import { useState } from 'react'

export default function ScheduleBlock(props) {

  const start = props.start
  const end = props.end
  const name = props.name
  const [timespanFocus, changeTimespanFocus] = useState(true)
  const [startTime, changeStartTime] = useState(start)
  const [endTime, changeEndTime] = useState(end)

  const timespanClick = (e) => {
    console.log(e.target)
    changeTimespanFocus(!timespanFocus)
  }
  const timespanAcceptClick = (e) => {
    timespanClick(e)
    changeStartTime(e.target.previousSibling.previousSibling.value)
    changeEndTime(e.target.previousSibling.value)
    console.log(props)
  }

  const timespanValue = (
      <div className='timespan' onClick={timespanClick}>
      {startTime} - {endTime}
      <img src={screw} alt = ""></img>
      </div>
  )
  const timespanControl = (
    <div className='timespan'>
    <input className = "timespan-inputs" type = "text"></input>
    <input className = "timespan-inputs"type = "text"></input>
    <div class = "accpt-timespan" onClick={timespanAcceptClick}>Accept</div>
    </div>
  )


  return (
    <div className='scheduleblock'>
      {timespanFocus?timespanValue:timespanControl}
      <div className='activities'>
        
      </div>
    </div>
  )
}
