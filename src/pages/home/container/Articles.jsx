import { Card } from '@/components/Card'
import { CTA } from '@/pages/home/container/CTA';
import { images } from '@/constants'

import { IoIosArrowForward } from "react-icons/io";
import React from 'react'

export const Articles = () => {
  return (
    <>
        <section className='container mx-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10'>
            <div className='flex flex-wrap md:gap-x-5 gap-y-5 pb-10'>
                <Card className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)] " image={images.post1}/>
                <Card className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" image={images.post1}/>
                <Card className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" image={images.post1}/>
            </div>
            <button className='mx-auto flex gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg items-center'>
                <span>More articles</span>
                <IoIosArrowForward className='w-3 h-3'/>
            </button>
            
        </section>
        <div>
            <CTA/>
        </div>
    </>
  )
}
