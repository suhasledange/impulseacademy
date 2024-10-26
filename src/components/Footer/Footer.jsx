import React from 'react'
import Container from '../Container'
import { Logo } from '../../assets'
import { Navlinks } from '../../constant'
import { NavLink } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className='w-full bg-white'>
            <div className='bg-blue-btn w-full flex items-center justify-between gap-6'>
                <Container className="flex items-center justify-between">
                    <h1 className='text-gray-200 font-medium text-xl py-4'>Ready to get Started ?</h1>
                    <button className=' border-2 px-6 py-1 hover:shadow-xl duration-200 rounded-xl text-white'>Contact us</button>
                </Container>
            </div>
        <Container className="flex flex-wrap justify-between py-6 gap-10">
            <div>
                <div className='w-36 h-14 mb-5'>
                    <img className='w-full h-full object-contain' src={Logo} alt='logo'/>
                </div>
                <div className='text-text-head'>
                <p className='mb-2'>Prof. Manoj P. Badgujar</p>
                <p>Branch : Shanti Nagar Bhusawal</p>
                </div>
            </div>
            <div className='text-text-head'>
                <h1 className='font-medium text-lg mb-4'>Categories</h1>
                <ul className='font-medium tracking-wide flex flex-col justify-center gap-1'>
                {
                    Navlinks.map(link=>(
                        <li className='hover:underline underline-offset-2' key={link.id}> 
                        <NavLink to={link.link}>
                        {link.title}
                        </NavLink>
                        </li>
                    ))
                }
            </ul>
            </div>
            <div className='text-text-head'>
                <h1 className='font-medium text-lg mb-5'>For any Query</h1>
                <div className='flex items-center gap-2 mb-2'>
                    <FaPhoneAlt className='text-lg'/>
                    <p>+91 7875252152</p>
                </div>
                <div className='flex items-center gap-2'>
                    <MdEmail className='text-xl'/>
                    <p>manojbadgujar@gmail.com</p>
                </div>
            </div>
           
        </Container>
    </div>
  )
}

export default Footer
