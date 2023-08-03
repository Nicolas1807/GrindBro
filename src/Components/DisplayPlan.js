import React, { useState } from 'react'
import "../styles/DisplayPlan.css";
import { useEffect } from 'react';




export default function DisplayPlan() {

  const d = new Date()
  const [year, setYear] = useState(d.getFullYear())
  const [month, setMonth] = useState(d.toLocaleString('en-US', { month: 'long', lang: "eng" }))
  const [day, setDate] = useState(d.getDate())
  const [monthWeekDays, changeMonthWeekDays] = useState([])
  const [rowsNum, changeRowsNum] = useState(1)

  useEffect(()=>{
    var numOfRows = 1
    var lastDay = new Date(year, d.getMonth()+1, 0).getDate()
    for(var i = 1; i<= lastDay; i++){
      const w = new Date(year, d.getMonth(), i)
      console.log(w.getDay())
      if(w.getDay()===0)
      {
        numOfRows = numOfRows+1
      } 
      changeRowsNum(numOfRows)
    }
    

  }, [])
 // Stwórz dynamicznie tabele
  // const arr = new Array(rowsNum)
  // const Table = (
  //   arr.map((index) => {
  //     <tr><td>index</td></tr>
  //   })

  // )


  return (

    <div className='DisplayPlan'>
         <div className='panel'>
          <div className='monthTitle'>{month[0].toUpperCase() + month.slice(1,) + " " + year}</div>
          <div className='monthCallendar'>
          {rowsNum}
          </div>
         </div>
    </div>
  )
}
