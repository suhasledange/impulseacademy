import React, { useEffect, useState } from 'react';
import Container from '../Container';
import { Logo } from '../../assets';
import { Navlinks } from '../../constant';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"; // Close icon

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
  
        window.addEventListener('scroll', handleScroll);
  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  
    return (
        <div className={`bg-white w-full sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
            <Container className="py-2 flex items-center justify-between">
                <div className='md:w-40 md:h-20 w-32 h-16'>
                    <img className='object-contain w-full h-full' src={Logo} alt="logo" />
                </div>

                {/* Desktop Nav */}
                <ul className='md:flex hidden font-medium text-gray-700 tracking-wide items-center gap-8'>
                    {Navlinks.map(link => (
                        <li key={link.id}> 
                            <NavLink to={link.link}>
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <GiHamburgerMenu 
                        className="text-3xl cursor-pointer" 
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                </div>
            </Container>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-md transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Close Icon */}
                <div className="flex justify-end p-8">
                    <AiOutlineClose 
                        className="text-3xl cursor-pointer" 
                        onClick={() => setMenuOpen(false)}
                    />
                </div>

                {/* Mobile Menu Links */}
                <ul className="font-medium text-gray-700 tracking-wide py-4 flex flex-col items-center gap-6 text-lg">
                    {Navlinks.map(link => (
                        <li key={link.id}> 
                            <NavLink 
                                to={link.link} 
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
