import { images } from '@/constants'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { RiArrowDropDownLine } from "react-icons/ri";
import React, { useState } from 'react'

const NavItemsInfo = [
  {"name":"Home", type: "link"},
  {"name":"Articles", type: "link"},
  {"name":"Pages", type: "dropdown", items: ["About us","Contact us"]},
  {"name":"Pricing", type: "link"},
  {"name":"FAQ", type: "link"},
]

const NavItem = ({item}) => {
  const [dropdown,setdropdown] = useState(false);

  const toggleDropdownHandler =()=>{
    setdropdown((currentState) => !currentState)
  }

  return (
    <li className='relative group'>
      {item.type ==="link" ?( <>
        <a href="/" className='px-4 py-2 '>{item.name}</a>
        <span className='cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span>
      </>):(<div className='flex flex-col items-center'>
        <button className='px-4 py-2 flex gap-x-1 items-center ' onClick={toggleDropdownHandler}>
          <span>{item.name}</span> 
          <RiArrowDropDownLine/>
        </button>
        <div className=''>
          <div className={`${dropdown ? "block":"hidden"} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
            <ul className='bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden'>
              {
                item.items.map((page) => (
                  <a href="" className='hover:bg-dark-hard hover:text-white px-4 py-2 lg:text-dark-soft'>
                    {page}
                  </a>
                ))
              }
            </ul>
          </div>
        </div>
      </div>) }
      </li>
  )
};

export const Header = () => {
  const [visible,setVisisble] = useState(false);
  const navVisibilityHandle = () => {
    setVisisble((currentState) => !currentState)
  }
  return (
    <section className='sticky top-0 left-0 right-0 z-50 bg-white'>
        <header className='containers mx-auto flex justify-between items-center py-3 '>
          <div className=''>
            <img src={images.Logo} alt="Logo" className='w-16 h-16 object-contain'/>
          </div>
          <div className='lg:hidden z-50'>
            {visible ? ( 
              <AiOutlineClose className="w-6 h-6" onClick={navVisibilityHandle}/> 
            ):( 
              <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandle}/>
            )}
          </div>
          <div className={`${visible ? "right-0": "right-full"} mt-[80px] lg:mt-0 lg:text-black bg-dark-hard lg:bg-transparent z-[49] flex flex-col lg:flex-row w-full lg:w-auto justify-center lg:justify-end fixed top-0 bottom-0 lg:static gap-5 items-center transition-all duration-300`}>

            <ul className='flex text-white items-center gap-y-5 lg:text-dark-soft flex-col lg:flex-row gap-3 font-semibold'>
              {NavItemsInfo.map((items) => (
                <NavItem key={items.name} item={items}/>
              ))}
            </ul>
            <button className='text-white lg:text-black border-2 border-blue-500 rounded-full px-6 py-2 hover:bg-blue-500 hover:text-white transition-all duration-300'>Sign in</button>
          </div>
        </header>
    </section>
  )
}
