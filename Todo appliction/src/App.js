import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Layouts/About/About'
import Header from './Layouts/Header/Header'
import Home from './Layouts/Home/Home'
import Contact from './Layouts/Contact/Contact'
import Axios from './Layouts/Api/Axios'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/apicall' element={<Axios/>}/>
    </Routes>
    </>
  )
}

export default App