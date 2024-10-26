import React from 'react'
import { courses } from '../constant'
import Course from '../components/Course/Course'
import Container from '../components/Container'

const Courses = () => {
  return (
        <div className='w-full bg-white mb-20'>
            <Container>
            <h1 className='text-center mb-6 text-text-head text-3xl font-semibold'>Courses We Offer</h1>
            <div className='flex flex-wrap justify-center items-center gap-6'>
            {
                courses.map(c =>(
                    <Course key={c.id} title={c.title} description={c.description} icon={c.icon}/>
                ))
            }
            </div>
            </Container>
        </div>
  )
}

export default Courses
