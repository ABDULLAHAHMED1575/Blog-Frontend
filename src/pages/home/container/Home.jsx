import { MdSearch } from "react-icons/md";
import React from 'react'

import { images } from '@/constants'

export const Home = () => {
  return (
    <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row'>
        <div className='mt-10 lg:w-1/2'>
            <h1 className='text-3xl font-roboto text-center font-bold text-dark-soft md:text-5xl lg:text-left lg:max-w-[540px] xl:text-65xl'>Read the most interesting articles</h1>
            <p className='text-dark-light mt-4 text-center md:text-xl lg:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rem vitae mollitia odio inventore deleniti nesciunt debitis est corrupti ea.</p>
            <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative'>
                <div className='relative'>
                    <MdSearch className='absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]'/>
                    <input type="text" className="placeholder:font-bold  font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none border-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4" placeholder="Search..."/>
                </div>
                <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
                    search
                </button>
            </div>
            <div className="flex mt-4 flex-col lg:flex-ro0w lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
                <span className="text-dark-light font-semibold mt-2 lg:mt-4 lg:text-sm xl:text-base italic">Popular Tags: </span>
                <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
                    <li className="rounded-lg bg-primary text-primary font-bold bg-opacity-10 px-3 py-1.5">Design</li>
                    <li className="rounded-lg bg-primary text-primary font-bold bg-opacity-10 px-3 py-1.5">User Experience</li>
                    <li className="rounded-lg bg-primary text-primary font-bold bg-opacity-10 px-3 py-1.5">User Interface</li>
                </ul>
            </div>
            
        </div>
        <div className='hidden lg:block lg:1/2'>
            <img src={images.articles} alt="" className='w-[600px]'/>
        </div>
    </section>
  )
}
