import React from 'react'
import monitorCardImage from "../assets/monitor-card.webp"
import { IoIosArrowRoundForward } from "react-icons/io";

const ScheduleSection = () => {
  return (
    <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24'>
           
            {/* left div text  */}
            <div className='md:w-1/2 w-full'>
                <p className='text-green-500 font-semibold'>MONITOR</p>
                <h2 className='text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6'>
                    Introducing best mobile<br/>
                    carousels
                </h2>

                <p className='text-gray-600 mb-8'>Take control of your time and boost productivity with our intelligent Scheduling system.
                Automate appointements, manage team availability, and deliver exceptional customer experiences
                through seamless calendar management.
                </p>

                <a href='#' className='text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'>
                    Explore scheduling features
                    <IoIosArrowRoundForward className='size-6' />   
                </a>
            </div>

             {/* right div image */}
             <div className='md:w-1/2 w-full'>
                <img src={monitorCardImage} alt='schedule Image' className='w-full h-auto'/>
            </div>
        </div>
    </section>
  )
}

export default ScheduleSection