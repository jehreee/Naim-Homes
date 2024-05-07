import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { Link} from "react-router-dom";
import { Media } from "../media/index";

export default function Gallery() {

    const [file, setFile] = useState(null);
    
    return (
        
        <div name="gallery" className="flex bg-black w-full h-full ">
            <div className="container w-11/12 min-h-screen relative m-auto ">
                <div className="p-6">
                    <Link to="../">
                        <div className="flex flex-row fixed text-white py-6">
                            <IoIosArrowBack size={25} className="mr-1"/>  Back
                        </div>
                    </Link>
                    <div className="pt-8">
                        <h1 className="text-white text-center p-4 text-4xl font-bold">Gallery</h1>
                    </div>
                    
                </div>
                <div className="media-container grid grid-cols-auto-fill-grid-col gap-4 mx-5 my-auto">
                    
                    
                    {
                        Media.map((file, index) => (
                            <div className="media h-56 w-full border-4 border-solid border-white shadow-md shadow-gray-500 overflow-hidden cursor-pointer" key={index} onClick={() => setFile(file)}>
                                
                                {
                                    file.type === 'image' ? 
                                    <img src={file.url} alt="" className="h-full w-full object-cover transition-all duration-300 ease-linear hover:scale-110" /> 
                                    : <video src={`${file.url}#t=0.001`} muted preload="metadata" className="h-full w-full object-cover transition-all duration-300 ease-linear hover:scale-110" />
                                }
                            </div>
                        ))
                    }
                </div>
                <div className="popup-media  fixed left-0 top-0  bg-black/[.8] w-screen h-screen" style={{display: file ? "block" : "none"}}>
                    <span 
                        onClick={() => setFile(null)}
                        className=" absolute top-4 right-5 md:right-44 font-extrabold text-5xl z-100 cursor-pointer text-white select-none white"
                    >
                        <FaTimes />
                    </span>
                    <div className="flex justify-center items-center h-full w-full">
                        {
                            file?.type === "video" 
                            ? <video src={file?.url} muted autoPlay controls loop className="w-full md:w-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain border-4 border-white" />
                            : <img src={file?.url} alt="" className=" w-full md:w-1/2 border-4 border-white" />
                        }
                    </div>
                    
                </div>

            </div>
        </div>
    )
}