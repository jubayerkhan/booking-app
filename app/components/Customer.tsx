import React from 'react'
import Image from 'next/image'
import CustomerImg from '../../public/assets/customer.png'
import GreenArrow from '../../public/assets/green-arrow.svg'

export default function Customer() {
    return (
        <div className='container mx-auto mt-[120px] mb-[80px] md:grid grid-cols-2 gap-x-6 justify-between'>
            <div className='w-full'>
                <Image className='hidden lg:block' src={CustomerImg} alt='CustomerImg'></Image>
            </div>
            <div className='sales-div pl-20'>
                <p className='text-[#00A424] text-lg font-medium pt-14 pb-4'>Customer Support</p>
                <h2 className='text-[#172026] font-medium text-[42px]'>Get in touch with your customers</h2>
                {/* <Image className='block lg:hidden my-6' src={SalesImage} alt='SalesImage'></Image> */}
                <p className='text-[#172026] font-medium text-lg'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. </p>
                <ul className='sales-list pt-8'>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipiscing elit</li>
                    <li>Sed do eiusmod tempor incididunt ut labore </li>
                </ul>
                <button className='flex gap-x-3 text-[#00A424] font-medium text-lg'>Learn More <Image src={GreenArrow} alt='GreenArrow'></Image></button>
            </div>
        </div>
    )
}
