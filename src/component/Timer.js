import React, { useState, useEffect} from 'react'

const Timer = ({setStop,questionNumber}) => {
    const [timer,setTimer]=useState(30)

   useEffect(() => {
    if(timer ===0) {
        setStop(true)
        return
    } 
     const interval= setInterval (()=>{
        setTimer((prev)=>prev -1)
     },2000)

     return () =>clearInterval(interval)
     
   },[ setStop,timer])
   
  useEffect(() => {
     setTimer(30)
  },[questionNumber])

  return (
    <div>{timer}</div>
  )
}

export default Timer