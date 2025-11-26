"use client"
import React from 'react'
import HighLightedText from '../../common/HighLightedText'
import CTAButton from '../../common/CTAButton'

interface gridDataType {
    order: number,
    heading: string,
    highlighting: string | null,
    description: string
}
const SpecialGrid:React.FC = () => {

    const gridData: gridDataType[] = [
        {
            order: -1,
            heading: "World-Class Learning for",
            highlighting: "Anyone, Anywhere",
            description: "Studyliv partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide."
        },
        {
            order: 0,
            heading: "Curriculum Based on Industry Needs",
            description: "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
            highlighting: null
        },
        {
            order: 1,
            heading: "Our Learning Methods",
            description: "The learning process uses the namely online and offline.",
            highlighting: null
        },
        {
            order: 2,
            heading: "Certification",
            description: "You will get a certificate that can be used as a certification during job hunting.",
            highlighting: null
        },
        {
            order: 3,
            heading: "Rating \"Auto-grading\"",
            description: "You will immediately get feedback during the learning process without having to wait for an answer or response from the mentor.",
            highlighting: null
        },
        {
            order: 4,
            heading: "Ready to Work",
            description: "Connected with over 150+ hiring partners, you will have the opportunity to find a job after graduating from our program.",
            highlighting: null
        }
    ]
  return (
    <section className='w-full h-fit px-[120px] mx-auto py-[90px] max-[768px]:py-[32px] max-[768px]:px-[16px] xl:grid-rows-2 lg:grid-rows-3 md:grid-rows-4 grid-rows-1 grid xl:grid-cols-4 lg:grid-cols-3 max-[450px]:grid-cols-1'>
        {
            gridData.map((data,index) => (
                (data.order < 0) ? (
                    <div key={index} className='w-[90%] h-fit col-span-2 flex flex-col gap-3 items-start justify-center bg-transparent mb-[52px]'>
                        <p className='text-4xl leading-11 tracking-[-2%] font-semibold'>
                            {data.heading} <HighLightedText text={data.highlighting}/>
                        </p>
                        <div className='w-full h-fit flex flex-col gap-3'>
                            <p className='w-full h-fit text-base leading-6 tracking-normal text-[var(--richblack-300)]'>
                                {data.description}
                            </p>
                            <div className='w-full h-fit pt-[36px]'>
                                <CTAButton active={true} text="Learn More" className='w-[137px]'/>
                            </div>
                        </div>
                    </div>
                ):(
                    <div key={index} className={`w-full h-full p-8 max-[450px]:p-4 flex flex-col gap-8 max-[450px]:gap-4 max-[450px]:col-start-2
                    ${(!(data.order&1)) ? "bg-[var(--richblack-700)]":"bg-[var(--richblack-800)]"} ${(data.order === 2)&&"col-start-2"} }`}>
                        <header className='text-[var(--richblack-5)] font-bold text-lg leading-6.5 tracking-normal'>
                            {data.heading}
                        </header>
                        <p className='font-normal text-sm leading-5.5 tracking-normal text-[var(--richblack-100)]'>
                            {data.description}
                        </p>
                    </div>
                )
            ))
        }

    </section>
  )
}

export default SpecialGrid;