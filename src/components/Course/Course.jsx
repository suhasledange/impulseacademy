import React from 'react'
import CourseCard from './CourseCard'
import { courses } from '../../constant'
import Container from '../Container'

const Course = () => {
  return (
    <div className='w-full bg-white lg:mb-20 md:mb-16 mb-12'>
    <Container className="flex flex-col items-center justify-center">
    <h1 className='text-center lg:mb-6 mb-0 text-text-head lg:text-3xl text-2xl font-semibold'>Courses We Offer</h1>
    <div className='lg:w-[90%] w-[95%] grid gap-4 mt-8 mb-8' 
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}
        >
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
