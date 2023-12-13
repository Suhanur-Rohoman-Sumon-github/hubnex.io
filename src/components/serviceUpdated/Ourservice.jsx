import React from 'react'
import testImg1 from '../../assets/costom devp.png';
import testImg2 from '../../assets/Communication.png';
import testImg3 from '../../assets/gg.png';
import testImg4 from '../../assets/Management.png';
import testImg5 from '../../assets/Mobile Development.png';
import testImg6 from '../../assets/Group.png';
import testImg7 from '../../assets/API Programming.png';
import testImg8 from '../../assets/Ux Design.png';
import testImg9 from '../../assets/Address marker.png';
import './Ourservice.css'



const Ourservice = () => {
  return (
    <div className=' py-10 w-full bg-black flex justify-center items-center h-auto'>
        <div className=' h-full w-full flex justify-center items-center'>
            <div className='w-[90%] flex flex-col gap-10 md:justify-around h-full items-center text-black'>  
                <div className='w-full gap-5 flex flex-col items-center justify-center'>
                    <h1 className=' text-white text-[28px] text-center md:text-[50px] xl:text-[55px] font-gilroy-bold'>Our Services</h1>
                    <div className=' md:w-[700px] flex items-center justify-center'>
                        <span className='  text-white text-center text-[18px] md:text-[20px] font-gilroy-regular'>Our goal is to provide a comprehensive platform that empowers individuals and businesses to achieve their full potential. Whether you're looking to advance your career, improve your health and wellness, or grow your...  </span>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Ourservice