import React from "react";
import Container from "../Container";
import { Logo } from "../../assets";
import { Navlinks } from "../../constant";
import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  const socialIcon = [
    { id: 1, Icon: <FaFacebookF />, link: "https://www.facebook.com/badgujarmanoj77" },
    { id: 2, Icon: <FaInstagram />, link: "https://www.instagram.com/badgujarmanoj77?igsh=MXVvdGI3Ymk0ZXhhdw==" },
    { id: 3, Icon: <FaYoutube />, link: "https://youtube.com/@impulsephysics?si=L63sOx_xuHXtrGK2" },
  ];

  return (
    <footer className="w-full bg-white overflow-x-hidden">
      <div className="bg-blue-btn w-full flex items-center justify-between gap-6">
        <Container className="flex items-center justify-between">
          <h1 className="text-gray-200 font-medium lg:text-lg text-md py-4">
            Ready to get Started ?
          </h1>
          <Link to="/contact"  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}>
            <button className=" border-2 px-6 py-1 lg:text-md text-sm hover:shadow-xl duration-200 rounded-xl text-white">
              Contact us
            </button>
          </Link>
        </Container>
      </div>
      <Container className="flex flex-wrap justify-between py-6 gap-10">
        <div className="lg:w-[20%] md:w-[30%] w-[60%]">
          <div className="lg:w-36 lg:h-14 md:w-32 md:h-14 w-28 h-14 mb-5">
            <img
              className="w-full h-full object-contain"
              src={Logo}
              alt="logo"
            />
          </div>
          <div className="text-text-head lg:text-md text-sm">
            <p className="mb-2">Prof. Manoj P. Badgujar</p>
            <p className="">
              Branch : Prathamik Shikshak colony, Near Dnyaneshwar Garden,
              Shanti Nagar, Bhusawal
            </p>
          </div>
        </div>
        <div className="text-text-head">
          <h1 className="font-medium lg:text-lg text-md mb-4">Categories</h1>
          <ul className="font-medium tracking-wide flex flex-col justify-center gap-2">
            {Navlinks.map((link) => (
              <li
                className="hover:underline underline-offset-2 lg:text-md text-sm lg:text-center"
                key={link.id}
              >
                <NavLink
                  to={link.link}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-text-head lg:w-auto w-full">
          <div className="flex lg:flex-col flex-row lg:gap-0 gap-5 w-full justify-between h-full items-start">
            <div>
              <h1 className="font-medium lg:text-lg text-md mb-5">
                For any Query
              </h1>
              <div className="flex items-center gap-2 mb-2 lg:text-md text-sm">
                <FaPhoneAlt className="lg:text-lg text-md" />
                <p>+91 7875252152</p>
              </div>
              <div className="flex items-center gap-2 lg:text-md text-sm">
                <MdEmail className="lg:text-xl text-lg" />
                <p>badgujarmanoj77@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-start lg:gap-6 md:gap-3 gap-2 h-full lg:text-xl md:text-lg text-md">
              {socialIcon.map((s) => (
                <a
                  aria-label="redirect to specific link"
                  className=" bg-text-head text-white lg:p-2 p-[0.35rem] rounded-full"
                  key={s.id}
                  href={s.link}
                  target="_blank"
                >
                  {s.Icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className="lg:text-[0.85rem] md:text-[0.83rem] text-[0.7rem] flex gap-5 lg:px-3 md:px-2 px-1 items-center justify-between w-full bg-text-head py-1 mt-1 text-white font-normal">
       <span> Designed and developed by WingzSphere Tech</span> © 2024 ImpulseAcademy, Inc. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
