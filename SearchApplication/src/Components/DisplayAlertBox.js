import React from 'react'

const DisplayAlertBox = (results) => {
console.log(results)
  return (
    <>
    <div onclick={(e)=>alert(`You clicked my name ${results}`)}></div>
    </>
  )
}

export default DisplayAlertBox
