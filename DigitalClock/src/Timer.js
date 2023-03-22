import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [Date,setTime]=useState('');


    useEffect(()=>{
        let timers = setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=>{
            clearInterval(timers)
        } 

    },[])
  return (   <>
   <div>{Date.toLocaleString()}</div>
   </>
  )
}

export default Timer
