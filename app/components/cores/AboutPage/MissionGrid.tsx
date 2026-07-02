"use client"
import MissionImage from "@/public/assets/Images/FoundingStory.png"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import React from 'react'

interface gridDataType {
    heading?: string | null,
    gradientClass?: string | null,
    para1?: string | null,
    para2?: string | null,
    image?: string | StaticImport,
}

const MissionGrid:React.FC = () => {

    const gridData: gridDataType[] = [
        {
            heading: "Our Founding Story",
            gradientClass: "from-[#833AB4] via-[#FD1D1D] to-[#FCB045]",
            para1: "Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.",
            para2: "As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential."
        },
        {
            gradientClass:"bgGridFound",
            image:"",
        },
        {
            heading: "Our Vision",
            gradientClass: "from-[#E65C00] to-[#F9D423]",
            para1: "With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience."
        },
        {
            heading: "Our Mission",
            gradientClass: "from-[#1fa2ff] via-[#12d8fa] to-[#a6ffcb]",
            para1: "our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities."
        }
    ]
    return (
    <section className='w-full h-fit px-[120px] py-[90px] max-[768px]:py-[32px] max-[768px]:px-[16px] grid xl:grid-cols-2 lg:grid-cols-1 gap-[98px] content-center'>
        {
            gridData.map((box,index) => (
                (index === 1) ?
                (<div key={index} className="w-full h-fit flex flex-col p-[32px] gap-0.5 relative items-center justify-center">
                    {/* Image */}
                    <div className={`${box.gradientClass} w-[50%] h-full rounded-[100%] absolute -translate-x-[50%] -translate-y-[8%] filter-[blur(68px)] rotate-60 opacity-20`}/>
                    <Image src={MissionImage} alt="mission-image" width={600} height={300} className="border border-solid p-2 z-5 w-full h-fit"/>
                </div>)
                :(
                <div key={index} className="flex flex-col w-[80%] h-fit gap-[24px]">
                    <header className={`${box.gradientClass} w-full h-fit text-4xl text-transparent bg-clip-text ${(index === 0) ? "bg-gradient-to-br":"bg-gradient-to-b"} leading-11 tracking-[-2%] font-semibold`}>
                        {box.heading}
                    </header>
                    <div className="flex flex-col gap-4 w-full h-fit font-medium text-base leading-6 tracking-normal text-[var(--richblack-300)]">
                        {(box.para1) && <p className="w-full h-fit">{box.para1}</p>}
                        {(box.para2) && <p className="w-full h-fit">{box.para2}</p>}
                    </div>
                </div>)
            ))
        }
    </section>
    )
}

export default MissionGrid;