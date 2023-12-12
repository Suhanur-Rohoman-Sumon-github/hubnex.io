import React from 'react'
import { Link } from 'react-router-dom'
import aboutLander from '../../assets/aboutLander.png'

const Hero = () => {
  return (
    <div className=' h-full w-full relative'>
      <img src={aboutLander} alt='aboutLanderPage' className=' absolute bottom-0 right-0 w-full object-cover h-[60%] lg:h-[1147px] lg:w-[1720px]' />
      <div className=' w-full md:w-[70%] h-full md:m-auto flex items-center'>
        <div className=' flex flex-col h-full justify-center lg:justify-start lg:mt-32 xl:mt-96 text-white gap-14 absolute left-10 md:left-28'>

          {/* Note: Section heading text uppercase */}
          <div className='text-[28px] font-gilroy-semi-bold md:text-[70px] xl:text-[60px] 2xl:text-[60px] uppercase'>
            <span>About Us</span>
          </div>
          <div className=' w-full text-[16px] md:w-[700px]  xl:text-[26px] md:text-[28px]'>
            <p className=' leading-tight font-gilroy-medium'>Passionate about exceptional IT services, delivering innovative solutions to meet unique needs.</p>
          </div>
          <div>

            {/* Whatdo: make button reusable */}
            <Link to='/contact' className='btn-primary'>Know More</Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero