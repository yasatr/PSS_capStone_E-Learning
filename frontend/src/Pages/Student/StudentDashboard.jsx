import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

const StudentDashboard = () => {
  const navigate = useNavigate();
  return (
    <div>StudentDashboard
      <br/>
    <Button onClick={()=>navigate('/allCourses')}>Click me</Button>
    </div>
  )
}

export default StudentDashboard