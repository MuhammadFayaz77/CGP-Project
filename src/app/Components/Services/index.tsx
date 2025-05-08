import React from 'react'
import { ServicesArry } from '../Utail/Services'
import { ServicesCard } from './Services'

export default function Services() {
  return (
<div className="flex flex-col items-center justify-center  bg-[#F9F9F9]">
 <div className='flex flex-col items-center justify-center mb-16' > <h1 className=' text-center text-3xl text-black font-bold'>Our Best Features & Services</h1>
 <p className=' text-[#0000008F] px-5 lg:px-0 lg:w-[55%] text-center  '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p></div>
<div className=" w-[90%]   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{ServicesArry.map((items, index) => (
  <ServicesCard
    key={index}
    icon={items.icon}
    title={items.title}
    description={items.description}
  
  />
))}
</div>
</div>
  )
}
