import React from 'react'
import resume1 from "../../Assets/resume.jpg"
import resume2 from "../../Assets/resume.jpg"

import "./Styles.css"
const Contact = () => {
  return (
    <div className='contact-container'>
        <img src={resume1} alt='resume not found'/>
        <img src={resume2} alt="resume not found"/>
    </div>
  )
}

export default Contact