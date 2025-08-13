import Image from 'next/image'
import SalesImage from '../../public/assets/sales.svg'
import RedArrow from '../../public/assets/red-arrow.svg'

export function Growth() {
  return (
    <div className='container mx-auto mt-[120px] mb-[80px] md:grid grid-cols-2 gap-x-6 justify-between'>
      <div className='sales-div'>
        <p className='text-[#EB2891] text-lg font-medium pt-14 pb-4'>Growth Monitoring</p>
        <h2 className='text-[#172026] font-medium text-[42px]'>Monitor your site’s new subscribers </h2>
        <Image className='block lg:hidden my-6' src={SalesImage} alt='SalesImage'></Image>
        <p className='text-[#172026] font-medium text-lg'>Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. </p>
        <div className='mt-12 mb-8 flex gap-x-16'>
            <div>
                <h2 className='text-[#172026] text-[32px] font-medium mb-4'>100+</h2>
                <p className='text-[#5F7896] text-[18px]'>Lorem ipsum dolor sit</p>
            </div>
            <div>
                <h2 className='text-[#172026] text-[32px] font-medium mb-4'>800+</h2>
                <p className='text-[#5F7896] text-[18px]'>Conse adipiscing elit</p>
            </div>
        </div>
        <button className='flex gap-x-3 text-[#EB2891] font-medium text-lg'>Learn More <Image src={RedArrow} alt='RedArrow'></Image></button>
      </div>
      <div className='w-full'>
        <Image className='hidden lg:block' src={SalesImage} alt='SalesImage'></Image>
      </div>
    </div>
  )
}
