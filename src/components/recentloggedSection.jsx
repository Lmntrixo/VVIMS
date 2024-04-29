import React from 'react'
import RecentlyLoggedcomponent from './recentlyLoggedcomponent'

function RecentloggedSection() {
    let matricule="IDCMR115750950"
    let name="Tabe lilian"
    let place="Small soppo, Buea"
    let visitreason="visit for site seeing"
    let date=" 26/03/2024-8:00 AM"
  return (
    
    <div className='mt-10 rounded-xl px-2 md:px-10 py-10 bg-white sm:w-full sm:ml-8 lg:bg-white lg:px-10 md:rounded-xl lg:py-10 lg:w-full'>
        
        <p className="text-3xl font-bold">Recently Logged Visitors</p>

        
        <RecentlyLoggedcomponent/>
        <RecentlyLoggedcomponent/>
        <RecentlyLoggedcomponent/>
        <RecentlyLoggedcomponent/>
        
    </div>
  )
}

export default RecentloggedSection