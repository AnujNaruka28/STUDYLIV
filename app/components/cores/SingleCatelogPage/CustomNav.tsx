import React from 'react'
import { useSwiper } from 'swiper/react';
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from 'react-icons/md';
const CustomNav:React.FC<{className:string}> = ({className} : {className:string}) => {
    const swiper = useSwiper();
    return (
        <div className={`w-full h-fit absolute z-1 flex justify-between ${className}`}>
            <div className='w-fit h-full arrow-left cursor-pointer' onClick={() => swiper.slidePrev()}>
                <MdKeyboardArrowLeft className='w-[32px] h-[32px] max-[500px]:w-[16px] max-[500px]:h-[16px]'/>
            </div>
            <div className='w-fit h-fit arrow-right cursor-pointer' onClick={() => swiper.slideNext()}>
                <MdKeyboardArrowRight className='w-[32px] h-[32px] max-[500px]:w-[16px] max-[500px]:h-[16px]'/>
            </div>
        </div>
    )
}

export default CustomNav;