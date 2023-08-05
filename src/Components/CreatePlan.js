import "../styles/App.css"
import "../styles/CreatePlan.css"
import ScheduleBlock from './ScheduleBlock'
import svgplus from "../svg/typcn_plus.svg"
import { useState, useContext, useEffect} from 'react'
import Notification from './Notification'
import Widget from "./Widget"
import ScheduleContext from "../Context/schedules"
import { useParams } from "react-router-dom"


export default function CreatePlan(props) {

  //Getting data from context
  const {onAddSchedule, fetchSchedulesByDate, schedules, changeCurrentDate} = useContext(ScheduleContext)


  const {url} = useParams()
  const [date, changeDate] = useState(new Date())
  


  useEffect(()=> {
    const dateUrls = url.split('-')
    changeDate(new Date(dateUrls[0], dateUrls[1]-1, dateUrls[2]))
    fetchSchedulesByDate(url)
  }, [])


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
            <div className='title'>Plan {date.getDate()} {date.toLocaleString('en-US', { month: 'long', lang: "eng" })} {date.getFullYear()}</div>
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
