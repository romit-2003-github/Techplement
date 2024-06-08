import React from 'react'
import front from '../components/front.jpeg'
const MainPage = () => {
    return (
        <>
            <div className="container md:flex md:flex-row md:justify-between md:items-center w-100 flex-col">
                <div className="flex flex-col justify-center md:my-0 md:items-start h-screen md:w-[50%] w-full mx-16 mt-4">
                    <h1 className="text-7xl text-[#3B3362] mt-28 md:my-0 text-center md:text-start font-bold">Inspirational
                        <br />Quotes</h1>
                    <h1 className="text-2xl text-[#3B3362] font-bold my-10 md:w-full md:align-start text-center md:text-start justify-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sapiente laborum ipsa ex sequi hic aliquam, accusantium quos eligendi eveniet.</h1>
                    <div className="flex items-center justify-center">
                        <button className="text-white bg-[#3B3362] hover:bg-blue-700 px-4 py-2 text-md font-medium" style={{ borderRadius: "30px" }}>Get Started</button>
                    </div>
                </div>
                <div className="block mainPhoto md:mx-8 my-6 md:w-[50%] w-full">
                    <img src={front} className='md:w-[1000px] md:h-[500px] w-full h-[100vh] my-8 flex items-center' alt="Loading" />
                </div>
            </div>
        </>
    )
}

export default MainPage
