import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CoursesSection from '../../components/student/CoursesSection'

const Home = () => {
  return (
    <div className='flex flex-col items-center text-center space-y-7'>
      <Hero/>
      <Companies />
      <CoursesSection />
    </div>
  )
}

export default Home
