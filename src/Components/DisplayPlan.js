import React, { useState } from 'react'
import "../styles/DisplayPlan.css";
import { useEffect } from 'react';
import bigArrowLeft from "../svg/Vector 21.svg"
import bigArrowRight from "../svg/Vector 20.svg"
import {Link} from "react-router-dom"


export default function DisplayPlan() {


  const[day, setDay] = useState(new Date())
  const [month, setMonth] = useState(day.toLocaleString('en-US', { month: 'long', lang: "eng" }))
  const [rowsNum, changeRowsNum] = useState(1)
  const [tableContent, changeTableContent] = useState()



  const getUrlConf = (dayCount) =>{
    const n = new Date(day.getFullYear(),day.getMonth(),dayCount+1)
    return n.toISOString().split('T')[0]
  }


  const createTableContent = (rows, weekDays) => {
    const rowArray = [...Array(rows).keys()]
    const colArray = [...Array(7).keys()]
    var dayCount = 0
    const Content = (
        rowArray.map((i) => {
          return (<tr key = {"TableRow" + i}>
          {colArray.map((index) => {
            if(index === weekDays[0])
            {
              dayCount = dayCount + 1
              weekDays.shift()
              return <td key= {"WeekDay" + dayCount}><Link to={"../create-plan/" + getUrlConf(dayCount) } ><div className='weekDay'>{dayCount}</div></Link></td>
            }
            else
            {
            return <td key= {"NotWeekDay" + index}></td>
            }
          })}</tr>)
        })
    )
    return Content
  }

  useEffect(()=>{
    setMonth(day.toLocaleString('en-US', { month: 'long', lang: "eng" }))
    var numOfRows = 1
    var lastDay = new Date(day.getFullYear(), day.getMonth()+1, 0).getDate()
    var weekDays = []
    for(var i = 0; i< lastDay; i++){
      const w = new Date(day.getFullYear(), day.getMonth(), i)
      weekDays.push(w.getDay())
      if(w.getDay()===0)
      {
        numOfRows = numOfRows+1
      } 
      changeRowsNum(numOfRows)   
    }
    console.log(weekDays)
  

    changeTableContent(createTableContent(numOfRows, weekDays))
    

  }, [day])
  
  const handleRightArrow = () => {
    setDay(new Date(day.getFullYear(), day.getMonth()+1, 1))
  }
  const handleLeftArrow = () => {
    setDay(new Date(day.getFullYear(), day.getMonth()-1, 1))
    
  }



  return (

    <div className='DisplayPlan'>
         <div className='panel'>
          <div className='monthTitle'>{month[0].toUpperCase() + month.slice(1,) + " " + day.getFullYear()}</div>
          <div className='callendarPanel'>
            <img src = {bigArrowLeft} alt = "Big Arrow" onClick = {handleLeftArrow}></img>
            <table className='callendarTable'>
              <thead>
                <tr className='tableHead'>
                  <td style = {{color:"cyan"}}>Monday</td>
                  <td style = {{color:"orange"}}>Tuesday</td>
                  <td style = {{color:"darkgreen"}}>Wednesday</td>
                  <td style = {{color:"yellow"}}>Thursday</td>
                  <td style = {{color:"red"}}>Friday</td>
                  <td style = {{color:"pink"}}>Saturday</td>
                  <td style = {{color:"magenta"}}>Sunday</td>
                </tr>
              </thead>
              <tbody>
                {tableContent}
              </tbody>
            </table>
            <img src = {bigArrowRight} onClick = {handleRightArrow} alt = "Big Arrow"></img>
            </div>
          
         </div>
    </div>
  )
}
