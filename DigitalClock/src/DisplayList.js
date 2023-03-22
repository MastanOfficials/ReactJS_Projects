import React, { useEffect, useState } from 'react'

const DisplayList = () => {
  let [date,setDate]=useState(new Date());

  useEffect(()=>{
    let timer=setInterval(()=>{
      setDate(new Date())},1000);
      return ()=>{clearInterval(timer)};
    },[]);

  return (
    <div>
       <h1>{date.toLocaleDateString()}</h1>
       <i>{Date.now()}</i>
    </div>
  )
}

export default DisplayList
