import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BsFillPentagonFill } from "react-icons/bs";
import { HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineLogout } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineCog6Tooth } from "react-icons/hi2";

import { faBell, faCog, faChartBar, faTachometerAlt, faHome, faCar, faUserGroup, faAngleRight, faLongArrowAltLeft, faUsers, faCab } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    const name="FON TEBOH"
    const [focusedItem, setfocusedItem]=useState(null);
    const handleClick =(buttonName) =>{
        setfocusedItem(buttonName);
    }
  return (
    <div className='lg:fixed lg:h-screen lg:bg-white lg:overflow-auto lg:mt-14 lg:block  md:fixed md:h-screen md:bg-white md:overflow-auto md:mt-14 hidden    '>
         <div className="flex items-center mx-6 py-4">
            <div className="lg:rounded-full lg:h-12 lg:w-12 lg: bg-blue-400   sm:rounded-full sm:h-10 sm:w-10  md:rounded-full md:h-10 md:w-10 lg:border-2 lg:border-green-500"><img className='lg:rounded-full lg:h-11 lg:w-12 sm:rounded-full sm:h-10 sm:w-10  md:rounded-full md:h-10 md:w-10' src="src/assets/images/homme.avif" alt="" /></div>
            <div className="name mx-3  font-semibold">{name} <FontAwesomeIcon className='ml-3' icon={faAngleRight}/></div>
        </div>
        <hr className='lg:text-5xl lg:text-black w-44 ml-5 h-2 -mt-3'/>
        <ul className="lg:p-3 lg:mx-3 md:p-4 md:mx-3 md:hidden sm:hidden lg:block ">
            <li  className="  lg:font-bold lg: text-blue-700 py-2 flex" onClick={()=>handleClick('Dashboard')} > <BsFillPentagonFill className='mr-2 text-xl text-gray-500 lg:text-blue-700 '/> Dashboard</li>
            <li className="  py-2 flex" > <HiOutlineUserGroup className='mr-3 text-xl mt2 text-gray-500'/> visitors</li>
            <li className=" py-2 flex" ><FontAwesomeIcon icon={faCab} className=' text-lg mr-3 text-gray-500'/> vehicles</li>
            <li className=" py-2 flex " > <HiOutlineChartBar className=' text-xl mr-3 text-gray-500'/>Reports</li>
            <li className=" py-2 flex" > <HiOutlineCog6Tooth className='mr-3 text-xl text-gray-500'/>Setting</li>
        </ul>


        <div className="bg-blue-600 rounded-xl h-40 w-48 mx-6 py-3  mt-20">

            <div className="bg-white h-10 w-10 rounded-xl items-center pt-5 ms-3">
                <div className="rounded-full bg-blue-500 h-6 w-6 relative -right-2 -top-3"><p className='mx-2 text-white'>?</p></div>
            </div>
            <div className="mx-5 mt-6">
            <p className='text-xs text-white font-bold '>Need help?</p>
            <p className='text-xs text-white'>please check our docs</p>
            <button className='bg-white text-neutral-950 text-xs mt-1 h-8 w-40 pb-2 '>DOCUMENTATION</button>
            </div>
        </div>

        <div className="text-red-500 flex mt-6 ml-14">
            <span><HiOutlineLogout className='mr-3 text-xl'/></span>
            <p>Log Out</p>
        </div>
        
        
    </div>
  )
}

export default Sidebar