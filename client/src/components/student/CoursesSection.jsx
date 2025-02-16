import React from 'react'
import { Link } from 'react-router-dom'

const CoursesSection = () => {
  return (
    <div className='px-8 py-16 md:px-40'>
        <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
        <p className='mt-3 text-sm text-gray-500 md:text-base'>Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are creafted to deliver results.</p>


        <Link to={'/course-list'} onClick={()=>scrollTo(0,0)} className='px-10 py-3 text-gray-500 border rounded border-gray-500/30'>Show all Courses</Link>
    </div>
  )
}

export default CoursesSection