
import { VscVerifiedFilled } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import React from 'react'

export const Card = ({className, image}) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] ${className}`}>
        <img src={image} alt="Articles"  className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60'/>
        <div className='p-5'>
            <h2 className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]'>
                Future of work
            </h2>
            <p className='text-dark-light mt-3 text-sm md:text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis?
            </p>
            <div className='flex justify-between flex-nowrap items-center mt-6 '>
                <div className='flex items-center gap-x-2 md:gap-x-2.5'>
                    <CgProfile className='w-9 h-9 md:w-10 md:h-10 rounded-full'/>
                    <div className='flex flex-col'>
                        <h4 className='font-bold italic text-dark-soft text-sm md:text-base'>
                            Abdullah Ahmed
                        </h4>
                        <div className='flex items-center gap-x-2'>
                            <span>
                                <VscVerifiedFilled/>
                            </span>
                            <span className='text-dark-light italic text-xs md:text-sm'>
                                Verified Writer
                            </span>
                        </div>
                    </div>
                </div>
                <div className='font-bold text-dark-light italic text-sm md:text-base'>
                    date
                </div>
            </div>
        </div>
    </div>
  )
}
