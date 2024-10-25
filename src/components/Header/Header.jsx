import React from 'react'
import Container from '../Container'
import { Logo } from '../../assets'
import { Navlinks } from '../../constant'
import { NavLink } from 'react-router-dom'

const Header = () => {

  

  return (
    <div className='bg-white w-full'>
    <Container className="py-2 flex items-center justify-between">
      <div className=' w-40 h-20'>
            <img className='object-contain w-full h-full' src={Logo} alt="logo"/>
      </div>

      <div>
            <ul className='font-medium flex items-center gap-8'>
                {
                    Navlinks.map(link=>(
                        <li key={link.id}> 
                        <NavLink to={link.link}>
                        {link.title}
                        </NavLink>
                        </li>
                    ))
                }
            </ul>
      </div>
      
    </Container>
    </div>
  )
}

export default Header
