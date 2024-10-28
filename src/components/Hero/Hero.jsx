import React from 'react'
import Container from '../Container'
import { CourseAssign, Ellipse1, HomeFaculty, OpenBook } from '../../assets'
import Counter from './Counter'

const Hero = () => {
  return (
    <div className='w-full bg-white lg:mt-3 md:mt-5 mt-6'>
    <Container>

        <div className='flex items-center gap-20 md:justify-between justify-center'>
        <div className='md:w-[60%] lg:w-[50%] w-[100%]'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-text-head font-Alata font-semibold'>Achieve Excellence in JEE, MHT-CET, & 11th/12th grade physics with-Bhusawal’s leading academy.</h1>
            <p className='mt-4 font-Inder lg:text-[1.2rem] md:text-[1rem] text-[0.9rem] leading-6 text-text-para'>
            Learn from top educators, master competitive exams,
            and secure your future success.
            </p>
            <button className='bg-blue-btn hover:bg-text-para duration-300 hover:drop-shadow-lg mt-6 text-white px-8 py-4 text-sm lg:text-md md:text-md rounded-full active:scale-95'>Explore Courses</button>
        </div>

        <div className='hidden md:block'>
            <div className='relative w-[23rem] h-[23rem]'>
                <div className='w-full'>
                    <img src={Ellipse1} alt='art'/>
                </div>
                
               
                <div className='absolute bottom-3 left-10 w-full h-full'>
                    <img className='w-[85%]' src={HomeFaculty} alt='homefalculty'/>
                </div>

                <div className='absolute left-0 bottom-6 w-10 h-10 p-1 bg-back-primary rounded-md'>
                    <img className=' object-contain w-full h-full' src={CourseAssign} alt='courseimg' />
                </div>

                
                <div className='absolute right-0 top-32 w-10 h-10 p-1 bg-back-secondary rounded-md'>
                    <img className=' object-contain w-full h-full' src={OpenBook} alt='courseimg' />
                </div>
            </div>
        </div>

        </div>
        <div className='hidden lg:block'>
            <Counter/>
        </div>


    </Container>
    </div>
  )
}

export default Hero
