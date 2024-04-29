import { faCab, faCableCar, faCarAlt, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function CardSection() {
    let number=60
    let percent=1.23
     let rating=10
  return (
    <div className='mt-20  md:mt-20 lg:mt-20 sm:mt-10'>
        <div className='  md:grid md:grid-cols-3 md:gap-4 md:mt-16 lg:grid lg:grid-cols-3 lg:gap-4 lg:mt-16 sm:grid sm:grid-cols-3 sm:gap-4 sm:mt-16'>
                <div className=" shadow-lg rounded-2xl h-48 bg-white p-3 text-center mb-5   md:shadow-lg md:rounded-2xl md:h-48 md:bg-white md:p-3 md:text-center  lg:shadow-lg lg:rounded-2xl lg:h-48 lg:bg-white lg:p-3 lg:text-center">
                    <div className="flex">
                        <div className="bg-blue-500 rounded-full h-14 w-14 p-4 ">
                            <FontAwesomeIcon className='text-white ' icon={faUsers}/>
                        </div>
                        <p className='ml-6 font-medium mt-2'>Total <br /> Visitors</p>
                        <div className="mx-16"></div>
                    </div>
                    <div className="flex mt-5">
                        <p className="text-4xl font-bold">{number}</p>
                        <button className="bg-green-300 text-green-500 h-7 w-24 ml-5 text-center text-xs">v {percent}%</button>
                    </div>
                    <div className="flex mt-5">
                        <p className='text-xs'><span className='text-green-500'>{rating} %</span> increase of total employee</p>
                    </div>

                </div>

                <div className=" shadow-lg rounded-2xl h-48 bg-white p-2 text-center mb-5 ">
                    <div className="flex">
                        <div className="bg-green-500 rounded-full h-14 w-14 p-4 ">
                            <FontAwesomeIcon className='text-white ' icon={faCab} />
                        </div>
                        <p className='ml-6 font-medium mt-2'>Total <br /> Vehicles</p>
                        <div className="mx-16"></div>
                    </div>
                    <div className="flex mt-5">
                        <p className="text-4xl font-bold">{number=90}</p>
                        <button className="bg-red-300 text-red-500 h-7 w-24 ml-5 text-center text-xs">v {percent}%</button>
                    </div>
                    <div className="flex mt-5">
                        <p className='text-xs'><span className='text-red-500'>{rating} %</span> increase of total employee</p>
                    </div>

                </div>

                <div className=" shadow-lg rounded-2xl h-48 bg-white p-2  text-center mb-5 ">
                    <div className="flex">
                        <div className="bg-red-500 rounded-full h-14 w-14 p-4">
                        <FontAwesomeIcon className='text-white ' icon={faCarAlt} />
                        </div>
                        <p className='ml-6 font-medium mt-2'>Flagged <br /> Vehicles</p>
                        <div className="mx-16"></div>
                    </div>
                    <div className="flex mt-5">
                        <p className="text-4xl font-bold">{number=30}</p>
                        <button className="bg-green-300 text-green-500 h-7 w-24 ml-5 text-center text-xs">v {percent}%</button>
                    </div>
                    <div className="flex mt-5">
                        <p className='text-xs'><span className='text-green-500'>{rating} %</span> increase of total employee</p>
                    </div>

                </div>
            </div>

    </div>
  )
}

export default CardSection