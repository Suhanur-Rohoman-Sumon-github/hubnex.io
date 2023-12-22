import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar';
const ServisesHero = ({title,discriptions,background,h1classNames,divClassName}) => {
    console.log(divClassName);
    return (
             <div className={`h-screen  bg-${background} bg-cover bg-center w-full relative`}  >
        <Navbar />
        <div className='w-full h-full xl:-ml-12 ml-4 md:ml-0 pt-36    md:flex items-center justify-center'>
            <div className=' text-white w-[85%] md:flex justify-start h-full  items-center'>
                <div className={`md:w-90 ml-4 flex flex-col gap-4 xl:gap-14 lg:mb-[180px] xl:mb-40`}>
                    <div className={`text-[24px] md:text-[60px] lg:text-[70px] xl:text-[60px] 2xl:text-[60px] font-gilroy-bold  leading-tight lg:w-[700px]`}>{title}</div>
                    <p className=' text-[16px] mb-[15px]  md:text-[24px] font-gilroy-semi-bold'>{discriptions}</p>
                      {/* change the btn primary to btn servise to handle both mobile view and pc view */}
                    <Link to='/contact' className='btn-service'>Get in touch</Link>
                </div>  
            </div>
          </div>
        </div>
  );
};

export default ServisesHero;
