import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCog, faChartBar, faTachometerAlt, faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons'
let name="FON TEBOH"

function Header() {
  return (      
        <div className="lg:h-14 fixed bg-blue-600  sm:h-14 sm:bg-blue-500 md:h-14 md:bg-blue-500  lg:bg-blue-600 lg:w-full">
            <div className="flex  ">
                <div className="logo  "><img className='lg:ml-10 lg:h-14 lg:w-40    sm:h-14 sm:w-28 md:h-12 ' src="/src/assets/images/logo.png" alt="" /></div>
                <div className="pt-2 flex content-between  lg:pt-2 lg:flex lg:content-between  sm:pt-2 sm:flex sm:content-between">
                 <div className=" md:flex ">
                    <input className='md:rounded-3xl md:h-9 md:w-60 md:mt-1 md:ml-16 md:px-2 md:focus:outline-none md:focus:border-blue-500  
                     rounded-3xl h-9 w-60 mt-1 ml-16 px-2 focus:outline-none focusborder-blue-500 hidden
                     sm:rounded-3xl sm:h-9 sm:w-60 sm:mt-1 sm:ml-16 sm:px-1 sm:focus:outline-none sm:block sm:focus:border-blue-500
                     lg:rounded-3xl lg:h-9 lg:w-60 lg:mt-1 lg:ml-16 lg:px-2 lg:pl-9 lg:focus:outline-none lg:focus:border-blue-500' placeholder="Search" type="search" name="search" id="" />
                    <FontAwesomeIcon className='text-black relative right-0 left-72 -top-7   lg:text-gray-500 lg:relative lg:right-0 lg:-left-56 lg:top-4'  icon={faSearch} />
                 </div>
                  <div className="flex ml-6 items-center mr-14  md:flex md:ml-60 md:items-center md:mr-8
                   lg:flex lg:ml-96 lg:items-center lg:mr-14    sm:flex sm:ml-8 sm:items-center sm:mr-11 sm:pb-4">
                    <div className="bell mx-3"><FontAwesomeIcon className='text-white'  icon={faBell} /></div>
                    <div className="seting mx-3"><FontAwesomeIcon className='text-white'  icon={faCog} /></div>
                    <div className="profile mx-5 mb-2 rounded-full h-12 w-12  lg:mx-5 lg:mb-2 lg:rounded-full lg:h-12 lg:w-12 lg:border-2 lg:border-green-500"><img className='rounded-full h-12 w-12 lg:rounded-full lg:h-11 lg:w-12' src="src/assets/images/homme.avif" alt="" /></div>
                    <div className="name font-bold mx-5 sm:font-semibold sm:mx-2 lg:font-medium text-white">{name}</div>
                    <div className="menu"><FontAwesomeIcon className='mr-2 text-white' icon={faAngleDown}/></div>
                  </div>
            </div>
            </div>
       </div>
  )
}

export default Header  