import React from 'react'
import Navbar from '../../Components/NavBar/Navbar';
import AddCourse from './AddCourse';
import Footer from '../../Components/Footer/Footer';

function Profile() {
  return (
    <div>
      <Navbar/>
      <AddCourse/>
      <Footer/>
    </div>
  )
}

export default Profile