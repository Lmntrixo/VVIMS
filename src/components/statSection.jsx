import React from 'react'
import Chart from './chart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCab } from '@fortawesome/free-solid-svg-icons'
import { WiMoonAltFull } from "react-icons/wi";
import { WiMoonAltNew } from "react-icons/wi";

function StatSection() {
    let time=20
  return (
    <div  className='md:flex md:mt-10 lg:flex lg:mt-10 '>
        <div className="rounded-2xl bg-white    md:rounded-2xl md:bg-white md:w-3/5">
            <div className="flex ">
                <p className='p-5 font-bold text-xl'>Entry Statistics</p>
                <div className="flex p-6">
                    <p className='mx3 flex text-base text-blue-500'> <WiMoonAltNew className='text-2xl p-1 mr-1 text-blue-700'/>visitors</p>
                    <p className="mx-3 flex text-base"><WiMoonAltFull className='text-2xl p-1 '/>vehicles</p>
                    <div className="rounded-xl">
                                                  
<form class=" max-w-56 mx-auto">
  
  <select disabled id="countries_disabled" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>This Month</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
</form>

                    </div>
                    
                </div>
            </div>
            <div className="p-1 w-full mt-14 mr-6   md:p-1 md:w-full md:mt-14 md:mr-6  lg:p-1 lg:w-3/5 lg:mt-14 lg:mr-6   ">
               <Chart/>
               </div>
        </div>

        <div className="rounded-2xl bg-white px-5 ml-3   md:rounded-2xl md:bg-white md:w-2/4 md:px-5 md:ml-11 sm:rounded-2xl sm:bg-white sm:w-full sm:px-5 sm:ml-11
        lg:rounded-2xl lg:bg-white lg:w-2/5 lg:px-4 lg:ml-11">
            <p className='text-2xl font-semibold mt-3  md:text-2xl md:font-semibold md:mt-3  sm:text-2xl sm:font-semibold sm:mt-3'>Recently Logged <br />in Vehicles</p>
            <div className="flex mt-3 lg:mt-2 sm:p-4 sm:flex md:flex  lg:p-4 lg:flex ">
                <div className="rounded-2xl h-12 w-12 bg-green-300 p-3"><FontAwesomeIcon className='mr-3 text-green-500'  icon={faCab} /></div>
                <div className="ml-5  sm:ml-5">
                    <p className="text-xs font-semibold lg:text-xs  md:text-lg md:font-semibold  sm:text-xl sm:font-semibold">toyota yaris</p>
                    <p className="text-blue-700 font-semibold lg:text-base md:text-blue-700 md:font-semibold sm:text-xl sm:text-blue-700 sm:font-semibold">SW 4980</p>

                </div>
                <div className="ml-20  md:ml-20 sm:ml-40  lg:ml-16">
                    <p className="text-xs font-semibold  md:text-xs md:font-semibold  sm:text-xl sm:font-semibold">{time}min ago</p>
                    <div className="rounded-3xl h-7 w-10 bg-red-300 text-red-400 mt-2 p-2"><p className="text-xs">flogg</p></div>
                    
                </div>
            </div>

            <div className="flex mt-6 lg:mt-2 sm:p-4 sm:flex md:flex  lg:p-4 lg:flex ">
                <div className="rounded-2xl h-12 w-12 bg-green-300 p-3"><FontAwesomeIcon className='mr-3 text-green-500'  icon={faCab} /></div>
                <div className="ml-5  sm:ml-5">
                    <p className="text-xs font-semibold lg:text-xs  md:text-lg md:font-semibold  sm:text-xl sm:font-semibold">toyota yaris</p>
                    <p className="text-blue-700 font-semibold lg:text-base md:text-blue-700 md:font-semibold sm:text-xl sm:text-blue-700 sm:font-semibold">SW 4980</p>

                </div>
                <div className="ml-20  md:ml-20 sm:ml-40  lg:ml-16">
                    <p className="text-xs font-semibold  md:text-xs md:font-semibold  sm:text-xl sm:font-semibold">{time}min ago</p>
                    <div className="rounded-3xl h-7 w-10 bg-red-300 text-red-400 mt-2 p-2"><p className="text-xs">flogg</p></div>
                    
                </div>
            </div>

            <div className="flex mt-6 lg:mt-2 sm:p-4 sm:flex md:flex  lg:p-4 lg:flex ">
                <div className="rounded-2xl h-12 w-12 bg-green-300 p-3"><FontAwesomeIcon className='mr-3 text-green-500'  icon={faCab} /></div>
                <div className="ml-5  sm:ml-5">
                    <p className="text-xs font-semibold lg:text-xs  md:text-lg md:font-semibold  sm:text-xl sm:font-semibold">toyota yaris</p>
                    <p className="text-blue-700 font-semibold lg:text-base md:text-blue-700 md:font-semibold sm:text-xl sm:text-blue-700 sm:font-semibold">SW 4980</p>

                </div>
                <div className="ml-20  md:ml-20 sm:ml-40  lg:ml-16">
                    <p className="text-xs font-semibold  md:text-xs md:font-semibold  sm:text-xl sm:font-semibold">{time}min ago</p>
                    <div className="rounded-3xl h-7 w-10 bg-red-300 text-red-400 mt-2 p-2"><p className="text-xs">flogg</p></div>
                    
                </div>
            </div>
            <div className="flex mt-6 lg:mt-2 sm:p-4 sm:flex md:flex  lg:p-4 lg:flex ">
                <div className="rounded-2xl h-12 w-12 bg-green-300 p-3"><FontAwesomeIcon className='mr-3 text-green-500'  icon={faCab} /></div>
                <div className="ml-5  sm:ml-5">
                    <p className="text-xs font-semibold lg:text-xs  md:text-lg md:font-semibold  sm:text-xl sm:font-semibold">toyota yaris</p>
                    <p className="text-blue-700 font-semibold lg:text-base md:text-blue-700 md:font-semibold sm:text-xl sm:text-blue-700 sm:font-semibold">SW 4980</p>

                </div>
                <div className="ml-20  md:ml-20 sm:ml-40  lg:ml-16">
                    <p className="text-xs font-semibold  md:text-xs md:font-semibold  sm:text-xl sm:font-semibold">{time}min ago</p>
                    <div className="rounded-3xl h-7 w-10 bg-red-300 text-red-400 mt-2 p-2"><p className="text-xs">flogg</p></div>
                    
                </div>
            </div>
        </div>

        
            
    </div>
  )
}

export default StatSection