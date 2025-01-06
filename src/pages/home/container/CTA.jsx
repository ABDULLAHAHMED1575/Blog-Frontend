import { images } from '@/constants'
import React from 'react'

export const CTA = () => {
  return (
    <>
        <div className='w-full h-auto max-h-24 md:max-h-40 aspect-3/2 bg-dark-hard mask-curved' style={{ '--c': '70px' }}></div>
        <section className='relative bg-dark-hard px-5'>
            <div className='container grid grid-cols-12 mx-auto py-10'>
                <div className='col-span-12'>
                    <h2 className='text-white font-roboto font-bold text-2xl'>
                        Get our stories delivered from us to your inbox weekly.
                    </h2>
                    <div className='w-full max-w-[494px] mt-12 space-y-3 mx-auto'>
                        <input type="text" className='px-4 py-3 rounded-lg w-full placeholder:text-dark-light' placeholder='Your Email'/>
                        <button className='px-4 py-3 rounded-lg w-full bg-primary text-white font-bold'>Get Started</button>
                    </div>
                    <p className='text-dark-light text-sm leading-7 mt-6'>
                        <span className='font-bold italic text-[#B3BAC5]'>Get a response tomorrow</span> if you submit by 9pm today. If we received after 9pm will get a response the following day
                    </p>
                </div>
                <div className='col-span-12 hidden mt-[70px] md:block'>
                    <div className={`items-center rounded-xl overflow-hidden shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] `}>
                        <img src={images.cta} alt="Articles"  className='w-full object-fill object-center h-auto md:h-52 lg:h-48 xl:h-60'/>
                        <div className='p-5'>
                            <h2 className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]'>
                                Future of work
                            </h2>
                            <p className='text-dark-light mt-3 text-sm md:text-lg'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
