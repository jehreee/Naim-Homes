import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className='flex justify-center text-center w-full h-10  border-t-4 border-gray-500 md:h-10'>
            <footer className='pt-2'>
                <p>
                    Copyright ⓒ {year}
                    <span className="font-bold">
                        <span className='tracking-wider '> NAIM</span>
                        <span className="font-navSign font-thin">Homes  </span>
                    </span>  
                    
                </p>
            </footer>
        </div>
    )
}