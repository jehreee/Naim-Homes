import React, {useState} from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import {Link as LinkScroll} from "react-scroll";
import {Link as LinkRoute} from "react-router-dom";



const Nav = () => {

    const [nav, setNav] = useState(false);

    const link = [
        {
            id: 1,
            link: "home",
            style: "border-b-2",
        },
        {
            id: 2,
            link: "gallery",
            style: "border-t-2",
        },
        {
            id: 3,
            link: "about",
            style: "border-b-2",
        },
        {
            id: 4,
            link: "contact",
            style: "border-t-2",
        }
    ]
  return (
    <div className='flex justify-between items-center w-full h-10 px-4 text-white bg-white  fixed md:h-14'>
        
        <a href="./Home" className='font-bold text-gray-700 md:border-2 md:border-yellow-500 rounded-md'>
            <h3 className=' p-2'><span className='tracking-wider md:text-2xl'>NAIM</span><span className="font-navSign font-thin">Homes</span></h3>
                
        </a>
        

        <ul className='hidden md:flex'>
            {link.map(( {id, link, style} ) => (
                <li key={id} className={`px-4 cursor-pointer capitalize  text-gray-500 py-2 font-bold border-yellow-500 hover:text-orange-300 ${style}`}>
                    {/* Nav bar link to Scroll of not gallery and route to galler if link is gallery */}
                    {link === "gallery" ? <LinkRoute to={"/gallery"}>{link}</LinkRoute> : 
                        <LinkScroll to={link} smooth duration={500}>
                            {link}
                        </LinkScroll> 
                    }
                </li>
            ))}
            
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} /> }
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-gray-500'>
                {link.map(( {id, link} ) => (
                    
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        {link === "gallery" ? <LinkRoute to={"/gallery"}>{link}</LinkRoute> :
                            <LinkScroll onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                                {link}
                            </LinkScroll> 
                        }
                        
                    </li>
                    
                ))}
            
            </ul>
        )}

        

    </div>
  )
}

export default Nav