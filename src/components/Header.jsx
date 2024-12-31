import { images } from '@/constants'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import React, { useState } from 'react'

const NavItemsInfo = [
  {"name":"Home"},
  {"name":"Articles"},
  {"name":"Pages"},
  {"name":"Pricing"},
  {"name":"FAQ"},
]

const NavItem = ({name}) => {
  return (
    <li className='relative group'>
      <a href="/" className='px-4 py-2 '>{name}</a>
      <span className='text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span>
    </li>
  )
};

export const Header = () => {
  const [visible,setVisisble] = useState(false);
  const navVisibilityHandle = () => {
    setVisisble((currentState) => {
      return !currentState;
    })
  }
  return (
    <div>
        <header className='container mt-2 mx-auto flex justify-between items-center py-4 '>
          <div className=''>
            <img src={images.Logo} alt="Logo" className='h-10 w-10'/>
          </div>
          <div className='z-50'>
            {setVisisble ? ( 
              <AiOutlineClose className="w-6 h-6" onClick={navVisibilityHandle}/> 
            ):( 
              < AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandle}/>
            )}
          </div>
          <div className={`${setVisisble ? "right-0": "-right-full"} z-[49] flex flex-col lg:flex-row w-full lg:w-auto justify-center lg:justify-end fixed top-0 bottom-0 lg:static  lex gap-x-9 items-center`}>

            <ul className='flex gap-3'>
              {NavItemsInfo.map((items) => (
                <NavItem key={items.name} name = {items.name}/>
              ))}
            </ul>
            <button className='border-2 border-blue-500 px-6 py-2 rounded-full  hover:bg-blue-500 hover:text-white transition-all duration-300'>Sign in</button>
          </div>
        </header>
    </div>
  )
}
