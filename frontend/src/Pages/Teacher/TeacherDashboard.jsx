import React from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import CardSlider from '../../Components/Slider/CardSlider'
import AddCourse from './AddCourse'
import Footer from '../../Components/Footer/Footer'

function TeacherDashboard() {
  return (
    <div>
        <Navbar/>
        <CardSlider/>
        <AddCourse/>
        <Footer/>
    </div>
  )
}

export default TeacherDashboard