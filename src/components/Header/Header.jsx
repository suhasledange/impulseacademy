import React, { useEffect, useState } from 'react'
import Container from '../Container'
import { Logo } from '../../assets'
import { Navlinks } from '../../constant'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  

  return (
    <div className={`bg-white w-full sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
    <Container className="py-2 flex items-center justify-between">
      <div className=' md:w-40 md:h-20 w-32 h-16'>
            <img className='object-contain w-full h-full' src={Logo} alt="logo"/>
      </div>

      <div>
            <ul className='md:flex hidden font-medium text-gray-700 tracking-wide items-center gap-8'>
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
