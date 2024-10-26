import React from 'react'
import CourseCard from './CourseCard'
import { courses } from '../../constant'
import Container from '../Container'

const Course = () => {
  return (
    <div className='w-full bg-white mb-20'>
    <Container className="flex flex-col items-center justify-center">
    <h1 className='text-center mb-6 text-text-head text-3xl font-semibold'>Courses We Offer</h1>
    <div className='w-[90%] grid gap-4 mt-8 mb-8' 
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
