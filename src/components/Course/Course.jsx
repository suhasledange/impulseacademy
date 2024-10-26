import React from 'react'
import CourseCard from './CourseCard'
import { courses } from '../../constant'
import Container from '../Container'

const Course = () => {
  return (
    <div className='w-full bg-white mb-20'>
    <Container>
    <h1 className='text-center mb-6 text-text-head text-3xl font-semibold'>Courses We Offer</h1>
    <div className='flex flex-wrap justify-center items-center gap-6'>
    {
        courses.map(c =>(
            <CourseCard key={c.id} title={c.title} description={c.description} icon={c.icon}/>
        ))
    }
    </div>
    </Container>
</div>
  )
}

export default Course
