"use client"
import logo1 from "@/public/assets/TimeLineLogo/Logo1.svg"
import logo2 from "@/public/assets/TimeLineLogo/Logo2.svg"
import logo3 from "@/public/assets/TimeLineLogo/Logo3.svg"
import logo4 from "@/public/assets/TimeLineLogo/Logo4.svg"
import Image from "next/image"
import React from "react"
const TimeLine:React.FC = () => {
    const timelineData = [
        {
            logo: logo1,
            heading: "Leadership",
            description: "Fully committed to the success company",
        },
        {
            logo: logo2,
            heading: "Responsibility",
            description: "Students will always be our top priority",
        },
        {
            logo: logo3,
            heading: "Flexibility",
            description: "The ability to switch is an important skill",
        },
        {
            logo: logo4,
            heading: "Solve the problem",
            description: "Code your way to a solution",
        }
    ]
    return (
        <div className="w-full max-w-[410px] max-[1025px]:w-[200px] max-[1025px]:h-auto h-auto flex flex-col gap-8 max-[431px]:w-[300px]
        max-[431px]:gap-2 max-[431px]:mx-auto max-[431px]:mt-[160px] max-[321px]:mt-[200px]">
            {timelineData.map((item, index) => (
                <div key={index} className="flex flex-col gap-3 items-start">
                    <div  className="w-full h-auto gap-6 pt-4 pb-4 pr-3 pl-3 max-[431px]:pl-1.5 flex
                    max-[1025px]:h-auto max-[1025px]:py-1 max-[1025px]:pr-0">
                        <div className="w-[52px] h-[52px] max-[1025px]:w-[40px] max-[1025px]:h-[40px] p-1 gap-1 flex items-center justify-center bg-white shadow-[0px_0px_62px_0px_#0000001F] rounded-[100%] flex-shrink-0">
                            <Image src={item.logo} alt={item.heading} width={16} height={16} />
                        </div>
                        <div className="w-full max-w-[310px] h-auto gap-0.5 flex flex-col">
                            <p className="text-lg font-semibold leading-6.5 text-[var(--richblack-800)]">{item.heading}</p>
                            <p className="text-sm font-normal leading-5.5 text-[var(--richblack-700)]">{item.description}</p>
                        </div>
                    </div>
                    {index !== timelineData.length - 1 && <div className="w-[42px] h-0 border border-dashed -rotate-90 border-[#AFB2BF] ml-4 max-[1025px]:ml-1 mt-4 max-[431px]:mb-[18px]
                    max-[431px]:mt-0"/>}
                </div>
            ))}
        </div>
    );
}

export default TimeLine;