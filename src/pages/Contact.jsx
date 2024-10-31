import React from "react";
import Container from "../components/Container";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Contact = () => {
  const cont = [
    // {
    //   id: 1,
    //   title: "Shanti Nagar Bhusawal",
    //   icon: <IoLocationSharp className="text-2xl" />,
    // },
    { id: 1, title: "78752552152", icon: <FaPhoneAlt className="text-xl" /> },
    {
      id: 2,
      title: "badgujarmanoj77@gmail.com",
      icon: <IoMdMail className="text-2xl" />,
    },
  ];
  return (
    <div className="bg-white w-full pt-8 overflow-x-hidden">

        <Container>
          <div className="w-full text-center">
            <h1 className="lg:text-3xl text-xl text-text-head  lg:w-[36%] md:w[30%] w-[70%] font-semibold mx-auto mb-5">
              Kickstart Your Career with Impulse Academy
            </h1>
            <p className="text-text-para text-md lg:w-[50%] md:w[40%] w-[100%] mx-auto">
              Join hands with us at Impulse Academy,where your success is our
              priority Get the guidance you need to excel and achieve your
              academic dreams.
            </p>
          </div>
          </Container>



          <div className="flex flex-col items-center justify-center w-full mt-14">

            <h2 className="lg:text-3xl text-2xl text-text-head font-semibold mb-8">
              Get In Touch
            </h2>


            <div className="w-full relative bg-text-para mt-36 pb-16">
             <Container>
              
              <div className=" absolute -top-32 left-0 right-0 w-full">
                <div className="flex items-center justify-center lg:gap-8 md:gap-3 gap-2">
                  {cont && cont?.map((c) => (
                    <div
                      key={c.id}
                      className="flex items-center text-text-head bg-white box-shadow-contact p-4 rounded-2xl lg:w-[15rem] lg:h-[13rem] md:w-[12rem] md:h-[12rem] w-[12rem] h-[12rem] justify-center flex-col gap-3 text-center"
                    >
                      {c.icon}
                      <h1 className="lg:text-md md:text-md text-sm overflow-hidden break-words w-full">{c.title}</h1>
                    </div>
                  ))}
                </div>
              </div>
                
                <div className="flex lg:flex-row flex-col items-center justify-between mt-44">
                  <div className="w-full">
                    <form className="max-w-md ">
                      <div className="flex flex-col w-full gap-2 mb-4">
                        <label className="text-white lg:text-xl text-lg">Name</label>
                        <input className="bg-transparent fill-none text-sm outline-none text-white border-b-2" name="name" type="text" placeholder="Enter Your Name"/>
                      </div>

                      <div className="flex flex-col w-full gap-2 mb-4">
                        <label className="text-white lg:text-xl text-lg">Email</label>
                        <input className="bg-transparent outline-none text-sm text-white border-b-2" name="name" type="text" placeholder="Enter Your Email"/>
                      </div>

                      <div className="flex flex-col w-full gap-2 mb-4">
                        <label className="text-white lg:text-xl text-lg">Message</label>
                        <textarea rows={6} cols={10} className="bg-transparent outline-none resize-none text-white border-b-2 text-sm" name="name" type="text" placeholder="Message"></textarea>
                      </div>
                     <button type="submit" className=" active:scale-95 hover:shadow-lg duration-200 shadow-md bg-white py-2 px-6 mt-6 text-text-head font-medium lg:text-md text-sm mb-8">Submit</button>
                    </form>
                  </div>

              <div className="map h-auto w-full mx-auto shadow-lg border-2 p-2 bg-white">
                <iframe
                  className="w-full"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14894.372625460826!2d75.78133614414158!3d21.048958815710513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPrathamik%20Shikshak%20colony%2C%20Near%20Dnyaneshwar%20Garden%2C%20Shanti%20Nagar%2C%20Bhusawal%20!5e0!3m2!1sen!2sin!4v1730267023171!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  height="550"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              </div>
            </Container>
            </div>
        </div>

    </div>
  );
};

export default Contact;
