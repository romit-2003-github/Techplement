import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import {message} from 'antd';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const loggedInUser = JSON.parse(localStorage.getItem("userToken"));

    const logoutHandler = () => {
        localStorage.removeItem("userToken");
        message.success("Successfully Logged Out");
        navigate("/login");
    }
    return (
        <nav className="bg-white fixed shadow-md w-full z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            {/* <img className="h-8 w-8" src="your-logo.png" alt="Logo" /> */}
                            <h1 className='text-3xl text-[#3B3362] font-bold cursor-pointer' onClick={()=>navigate("/")}>Quotes4U</h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">Home</a>
                                <a href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">About</a>
                                <a href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">Services</a>
                                <a href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-lg font-medium">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            {!loggedInUser ? <button className="text-white bg-[#3B3362] hover:bg-blue-700 px-4 py-2 text-md font-medium" style={{ borderRadius: "30px" }}><Link to='/login'>Get Started</Link></button> : <button className="text-white bg-[#3B3362] hover:bg-blue-700 px-4 py-2 text-md font-medium" style={{ borderRadius: "30px" }} onClick={logoutHandler}>Logout</button> }
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 focus:text-gray-900">
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {ref => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="/" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Home</a>
                            <a href="/" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">About</a>
                            <a href="/" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Services</a>
                            <a href="/" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                            {!loggedInUser ? <button className="text-white bg-[#3B3362] hover:bg-blue-700 px-4 py-2 text-md font-medium" style={{ borderRadius: "30px" }}><Link to='/login'>Get Started</Link></button> : <button className="text-white bg-[#3B3362] hover:bg-blue-700 px-4 py-2 text-md font-medium" style={{ borderRadius: "30px" }} onClick={logoutHandler}>Logout</button> }
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
}

export default Navbar;
