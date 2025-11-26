"use client"

import HighLightedText from "../../common/HighLightedText";
import progress from "@/public/assets/Images/Know_your_progress.png";
import compare from "@/public/assets/Images/Compare_with_others.svg";
import plan from "@/public/assets/Images/Plan_your_lessons.svg";
import Image from "next/image";
import CTAButton from "../../common/CTAButton";
import React from "react";
const Features:React.FC = () => {
    const features = [
        {
            image: progress,
            properties: "left-0"
        },
        {
            image: compare,
            properties: "left-[300px] top-[-45px]"
        },
        {
            image: plan,
            properties: "left-[650px] max-[1025px]:top-[250px] max-[1025px]:left-[130px]"
        }
    
    ];
    return (
    <div className="w-full min-h-[940px] max-[1025px]:min-h-[1600px] bg-[var(--pure-greys-5)] pt-[90px] pb-[90px] px-[120px] gap-[26px] flex flex-col items-center
    max-[1025px]:justify-between max-[1025px]:px-4 max-[1025px]:py-8">
        <div className="w-full max-w-[1200px] h-auto max-[767px]:w-full pr-[55px] pl-[55px] max-[340px]:mb-auto
        max-[767px]:px-0 max-[767px]:mr-auto gap-3 flex flex-col min-[768px]:items-center justify-center max-[1025px]:mt-auto">
            <p className="font-semibold leading-11 max-[767px]:leading-9.5 max-[767px]:tracking-[0%] tracking-[-2%] text-4xl max-[767px]:text-3xl text-[var(--richblack-900)] mx-auto text-center">
                Your swiss knife for <HighLightedText text="learning any language"/>
            </p>
            <div className="w-full max-w-[768px] max-[767px]:w-full h-auto flex flex-col gap-3 items-center">
                <div className="text-base font-medium leading-[24px] text-[var(--richblack-700)] mx-auto min-[704px]:text-center">
                    Using spin making learning multiple languages easy. with 20+ languages realistic voice-over,
                    <p className="w-full mx-auto text-center max-[767px]:text-left">progress tracking, custom schedule and more.</p>
                </div>
            </div>
        </div>
        <div className="w-full max-w-[1102px] max-[1025px]:w-[800px] h-auto max-[767px]:flex min-[768px]:relative mx-auto max-[1025px]:mb-auto
        max-[767px]:w-full max-[767px]:h-auto max-[767px]:flex-col max-[426px]:mt-auto max-[340px]:mb-0">
            {
                features.map((element,index) => (
                    <Image src={element.image} key={index} alt={"images"} className={`min-[768px]:absolute ${element.properties} h-auto max-w-full`}/>
                ))
            }
        </div>
        <div className="w-full max-w-[1200px] max-[767px]:w-full h-auto flex gap-6 pt-9 mt-auto justify-center max-[1025px]:mb-auto">
            <CTAButton text="Learn More" active={true}/>
        </div>
    </div>
    );
} 

export default Features;