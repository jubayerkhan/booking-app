import Image from 'next/image'
import React from 'react'
import SalesImage from '../../public/assets/sales.svg'
import LearnArrow from '../../public/assets/arrow-learn.svg'

export default function Sales() {
  return (
    <div className='container mx-auto mt-[120px] mb-[80px] md:grid grid-cols-2 gap-x-6 justify-between'>
      <div className='sales-div pr-48'>
        <p className='text-[#0085FF] text-lg font-medium pt-14 pb-4'>Sales Monitoring</p>
        <h2 className='text-[#172026] font-medium text-[42px]'>Simplify your sales monitoring</h2>
        <Image className='block lg:hidden my-6' src={SalesImage} alt='SalesImage'></Image>
        <p className='text-[#172026] font-medium text-lg'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. </p>
        <ul className='sales-list pt-8'>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor incididunt ut labore </li>
        </ul>
        <button className='flex gap-x-3 text-[#0085FF] font-medium text-lg'>Learn More <Image src={LearnArrow} alt='LearnArrow'></Image></button>
      </div>
      <div className='w-full'>
        <Image className='hidden lg:block pl-10' src={SalesImage} alt='SalesImage'></Image>
      </div>
    </div>
  )
}
