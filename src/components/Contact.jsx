import React from 'react';

export default function Contact() {
    return (
        <div name="contact" className=" w-full h-screen p-4">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-orange-500">Contact</p>
                    <p className="py-6">Submit the form bellow to get in touch with us!</p>
                </div>

                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/348a46a2-a0b0-477f-bb55-8b389cb8a14d" method="POST" className="flex flex-col w-full md:w-1/2">
                        <input type="text" name="name" placeholder="Enter your Name" className="p-2 bg-transparent border-4 rounded-md  " />
                        <input type="text" name="email" placeholder="Enter your Email" className="my-4 p-2 bg-transparent border-4 rounded-md " />
                        <textarea name="message" placeholder="Enter your message" rows="10" className="p-2 bg-transparent border-4 rounded-md "></textarea>
                        <button className="text-white bg-gray-600 border-2 border-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:bg-gray-500 duration-300">Let's Talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}