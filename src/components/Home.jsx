import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdRoofing } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import noBgLogo from "../assets/logos/png/Naim-Homes.png";
import { Link} from "react-router-dom";


const Home = () => {
  const socials = [
    {
      id:1,
      child:(
        <>
          <FaFacebook size={15} className='ml-3'/>
        </>
      ),
      href: 'https://facebook.com/'
    },
    {
      id:2,
      child:(
        <>
          <FaTwitter size={15} className='ml-3'/>
        </>
      ),
      href: 'https://twitter.com/'
    },
    {
      id:3,
      child:(
        <>
          <FaLinkedin size={15} className='ml-3'/>
        </>
      ),
      href: 'https://linkedin.com/'
    },
    {
      id:4,
      child:(
        <>
          <HiOutlineMail size={15} className='ml-3'/>
        </>
      ),
      href: 'mailto:'
    },
    {
      id:5,
      child:(
        <>
          <FaWhatsapp size={15} className='ml-3' />
        </>
      ),
      href: 'https://wa.link/akprc1'
    },
  ]

  return (
    <div name="home"  className='bg-homeImage bg-cover h-screen w-full flex justify-between items-center text-white'>
      <div className=' w-full flex flex-col h-full bg-black/[.6]  justify-center mx-auto py-40 px-4 items-center text-center'>

          
          <div className='group flex flex-row divide-x-2 divide-yellow-500  text-center items-center'>
            <div>
              <img alt='siteLogo' className='flex ml-2 h-16 w-16 justify-between md:w-44 md:h-44' src={noBgLogo}></img>
            </div>
            
            <div className='flex flex-col pl-2 text-center items-center'>
              <h1 className='flex tracking-wider text-3xl md:text-6xl font-semibold'>
              
                NAIM H 
                <span className='transition-transform group-hover:rotate-90 duration-300'>
                  <MdRoofing />
                </span>
                MES
              </h1>
            
              <p className='hidden md:flex tracking-wider text-sm mb-15'>If you can imagine it, we can create it</p>
            </div>

          </div>
          
          

          
          <ul className='flex mb-14'>
            {socials.map(({id, child, href}) => (
              <li key={id} className='flex flex-row py-6 px-4 justify-between hover:text-orange-300'>
                <a href={href}>
                  {child}
                </a>
              </li>
            ))}
            
              
              
          </ul>
          

            
          <Link to="/gallery">
            <button  className='w-fit px-6 py-3 my-2 bg-gray-600 border-2 border-white shadow-md rounded-lg hover:shadow-yellow-600 flex hover:bg-gray-500 font-semibold items-center  transition ease-out duration-300 cursor-pointer'>
              Gallery
              <span className="hover:rotate-90 transition duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </button>
          </Link>


      </div>
    </div>
  )
}

export default Home;