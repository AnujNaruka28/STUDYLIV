"use client"

import Image from "next/image";
import instructorImg from "@/public/assets/Images/Instructor.png";
import CTAButton from "../../common/CTAButton";
import { BsArrowRight } from "react-icons/bs";
import HighLightedText from "../../common/HighLightedText";
import React from "react";
const BecomeInstructor:React.FC = () => {
  return (
    <div className="w-full bg-[var(--richblack-900)] min-h-[725px] max-[767px]:h-[929px] max-[767px]:px-4 max-[767px]:py-8 max-[767px]:gap-[32px]
    pt-[90px] pb-[90px] px-[120px] flex max-[867px]:flex-col-reverse gap-[98px] justify-center items-center">
        <Image src={instructorImg} alt="Instructor" width={616} height={545}
        className="w-full max-w-[616px] h-auto shadow-[-20px_-20px_0px_0px_#FFFFFF] max-[767px]:shadow-none object-cover max-[767px]:w-full max-[767px]:h-full"/>
        <div className="flex flex-col gap-3 w-full max-w-[94%] h-auto">
            <p className="text-4xl leading-11 tracking-[-2%] font-semibold flex flex-col">
                Become an
                <HighLightedText text="instructor"/>
            </p>
            <p className="text-base font-medium text-[var(--richblack-300)] tracking-normal">
                Instructors from around the world teach millions of students on
                Study-Liv. We provide the tools and skills to teach what you
                love.
            </p>
            <div className="w-full max-w-[225px] h-auto pt-[52px]">
                <CTAButton
                text={
                    <div className="flex items-center justify-center gap-2 w-full">
                        Start Teaching Today
                        <p className="h-full my-auto">
                            <BsArrowRight width={9} height={8}/>
                        </p>
                    </div>
                }
                active={true} className="w-full"/>
            </div>
        </div>
    </div>
  )
}

export default BecomeInstructor;