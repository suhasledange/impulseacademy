import React from 'react'
import Container from '../Container'
import { CourseAssign, Ellipse1, HomeFaculty, OpenBook } from '../../assets'
import Counter from './Counter'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='w-full bg-white lg:mt-3 md:mt-5 mt-6 overflow-x-hidden'>
    <Container>

        <div className='flex items-center lg:gap-20 md:gap-16 gap-14 md:justify-between justify-center'>
        <div className='md:w-[60%] lg:w-[50%] w-[100%]'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl text-text-head font-Alata font-semibold'>Achieve Excellence in JEE, MHT-CET, & 11th/12th STATE BOARD PHYSICS with-Bhusawal’s leading academy.</h1>
            <p className='mt-4 font-Inder lg:text-[1.2rem] md:text-[1rem] text-[0.9rem] leading-6 text-text-para'>
            Learn from top educators, master competitive exams,
            and secure your future success.
            </p>
            <Link to="/courses">
            <button  className='bg-blue-btn hover:bg-text-para duration-300 hover:drop-shadow-lg mt-6 text-white px-8 py-4 text-sm lg:text-md md:text-md rounded-full active:scale-95'>Explore Courses</button>
            </Link>
        </div>

        <div className='hidden md:block'>
            <div className='relative lg:w-[23rem] lg:h-[23rem] md:w-[20rem] md:h-[20rem]'>
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
        <div className=''>
            <Counter/>
        </div>


    </Container>
    </div>
  )
}

export default Hero
