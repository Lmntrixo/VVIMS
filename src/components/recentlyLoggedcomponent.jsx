import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCab } from '@fortawesome/free-solid-svg-icons'
import { HiOutlineDotsVertical } from "react-icons/hi";

function RecentlyLoggedcomponent() {
    let matricule="IDCMR115750950"
    let name="Tabe lilian"
    let place="Small soppo, Buea"
    let visitreason="visit for site seeing"
    let date=" 26/03/2024-8:00 AM"
  return (
    <div className=" flex justify-between mt-8  sm:flex sm:justify-between sm:mt-8  sm:w-full sm:p-4  md:flex md:justify-between md:mt-8  lg:flex lg:justify-between lg:mt-8 lg:w-full ">
            <div className="flex lg:flex">
                <div className="rounded-2xl bg-green-300 h-11 w-12   sm:rounded-2xl sm:bg-green-300 sm:h-11 sm:w-12 sm:ml-3   md:rounded-2xl md:bg-green-300 md:h-11 md:w-12 p-3"><FontAwesomeIcon className='mr-3 text-green-500'  icon={faCab} /></div>
                <div className="ml-5 sm:ml-3 md:ml-5 lg:ml-8">
                    <p className="font-semibold">{name}</p> 
                    <p className="text-blue-400">{matricule}</p>
                    <p className=" text-base sm:text-base md:text-base lg:text-base lg:hidden">{place}</p>
                    <p className="text-base sm:text-base md:text-base lg:text-base lg:hidden">{visitreason}</p>
                </div>
            </div>
            <p className=" text-base sm:text-base sm:hidden md:text-base md:block lg:text-base lg:block hidden">{place}</p>
            <p className="text-base sm:text-base sm:hidden md:text-base md:block lg:text-base lg:block hidden">{visitreason}</p>
            <p className="text-base sm:text-base md:text-base lg:text-base">{date}</p>

            <p className="text-xl sm:text-2xl md:text-2xl lg:text-2xl"><HiOutlineDotsVertical/></p>
        </div>
  )
}

export default RecentlyLoggedcomponent