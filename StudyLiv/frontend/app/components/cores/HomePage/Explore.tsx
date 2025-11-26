"use client"

import React, { useState } from "react";
import HighLightedText from "../../common/HighLightedText";
import { HomePageExplore } from "@/public/assets/data/homepage-explore";
import { HiMiniUsers } from "react-icons/hi2";

const Explore:React.FC = () => {

    const [exploreData,setExploreData] = useState({
        tag: HomePageExplore[0].tag,
        courses: HomePageExplore[0].courses
    });

    const setExplore = (tag: string) => {
        const selectedData = HomePageExplore.find(item => item.tag === tag);
        if (selectedData) {
            setExploreData({
                tag: selectedData.tag,
                courses: selectedData.courses
            });
        }
    }

    return (
        <div className="w-full h-fit -mb-[166px] min-[1440px]:-mb-[200px] flex gap-9 py-[90px] max-[769px]:py-[32px] max-[769px]:px-[16px] px-[120px] flex-col justify-center items-center">

            {/* Heaader */}
            <div className="w-full h-fit gap-2 flex flex-col text-center max-[561px]:text-start">
                <p className="w-full h-fit font-semibold tracking-[-2%] max-[562px]:leading-7 max-[562px]:text-3xl leading-11 text-4xl">
                    Unlock the <HighLightedText text="Power of Code"/>
                </p>
                <p className="w-full h-fit text-base leading-6 tracking-normal font-medium text-[var(--richblack-300)]">
                    Learn to Build Anything You Can Imagine
                </p>
            </div>

            {/* Dynamic Switches */}

            <div className="w-max max-[769px]:w-full p-1 max-[451px]:p-3 bg-[var(--richblack-800)] text-[var(--richblack-200)] flex font-medium
            drop-shadow-[0_1.5px_hsla(0,0%,100%,.25))] rounded-full gap-5 max-[545px]:gap-0.5 justify-center">
                {
                    HomePageExplore.map((element,index) => (
                        <div
                            key={index}
                            onClick={() => setExplore(element.tag)}
                            className={`px-7 max-[465px]:my-auto max-[769px]:px-1 max-[769px]:text-xs py-[7px] max-[465px]:text-center rounded-full cursor-pointer transition-all duration-200 hover:bg-[var(--richblack-900)] hover:text-white ${(exploreData.tag === element.tag) && "text-[var(--richblack-5)] bg-[var(--richblack-900)]"}`}
                        >
                            {element.tag}
                        </div>
                    ))
                }
            </div>

            {/* Dynamic Cards   */}

            <div className="w-full h-fit pt-8 px-13 max-[562px]:px-0 justify-center flex max-[1131px]:flex-col gap-9">
                {
                    exploreData.courses.map((course,index) => (
                        <div key={index} className={`
                        ${(index === 0) ? "bg-white yellowShadow" : "bg-[var(--richblack-800)]"}
                        w-1/3 max-[1131px]:w-full h-fit flex flex-col`}
                        >
                            <div className="w-[95%] max-[562px]:w-full h-fit pt-8 pb-13 px-6 gap-3 flex flex-col" >
                                <p className={`font-semibold text-xl leading-7 tracking-normal ${(index === 0) ? "text-[var(--richblack-800)]" : "text-[var(--richblack-25)]" }`}>
                                    {course.heading}
                                </p>
                                <p className={`${(index === 0) ? "text-[var(--richblack-500)]":"text-[var(--richblack-400)]"} text-base leading-6 font-normal tracking-normal`}>
                                    {course.description}
                                </p>
                            </div>
                            <div className={`w-full h-fit flex gap-4 py-4 px-6 border-t border-dashed justify-between items-center font-medium text-base leading-6 tracking-normal ${(index === 0) ? "dashedOne text-[#0F7A9D]":"dashedOther text-[var(--richblack-400)]"}`}>
                                <div className="w-fit h-fit gap-2 flex items-center">
                                    <HiMiniUsers />
                                    <p className={`${(index === 0) ? "text-[#0A5A72]":"text-[var(--richblack-300)]"}`}>
                                        {course.level}
                                    </p>
                                </div>
                                <div className="w-fit h-fit gap-2 flex items-center">
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.834 13.6382V13.5002C16.8328 12.506 16.4373 11.5528 15.7343 10.8498C15.0313 10.1468 14.0782 9.75136 13.084 9.75017H10.084V8.93267C11.1965 8.74461 12.1978 8.14547 12.8895 7.25396C13.5811 6.36246 13.9126 5.24367 13.8182 4.11929C13.7239 2.99491 13.2106 1.94701 12.38 1.18325C11.5495 0.419487 10.4623 -0.00439453 9.33399 -0.00439453C8.20566 -0.00439453 7.1185 0.419487 6.28796 1.18325C5.45742 1.94701 4.94411 2.99491 4.84975 4.11929C4.75539 5.24367 5.08688 6.36246 5.77851 7.25396C6.47014 8.14547 7.47144 8.74461 8.58399 8.93267V9.75017H5.58399C4.58979 9.75136 3.63666 10.1468 2.93365 10.8498C2.23065 11.5528 1.83518 12.506 1.83399 13.5002V13.6382C1.33358 13.8151 0.911823 14.1632 0.643265 14.621C0.374708 15.0788 0.276639 15.6168 0.366392 16.14C0.456146 16.6631 0.727942 17.1376 1.13374 17.4797C1.53955 17.8219 2.05322 18.0095 2.58399 18.0095C3.11475 18.0095 3.62843 17.8219 4.03423 17.4797C4.44004 17.1376 4.71183 16.6631 4.80159 16.14C4.89134 15.6168 4.79327 15.0788 4.52471 14.621C4.25616 14.1632 3.8344 13.8151 3.33399 13.6382V13.5002C3.33399 12.9034 3.57104 12.3311 3.993 11.9092C4.41496 11.4872 4.98725 11.2502 5.58399 11.2502H8.58399V13.6382C8.08358 13.8151 7.66182 14.1632 7.39327 14.621C7.12471 15.0788 7.02664 15.6168 7.11639 16.14C7.20615 16.6631 7.47794 17.1376 7.88375 17.4797C8.28955 17.8219 8.80322 18.0095 9.33399 18.0095C9.86476 18.0095 10.3784 17.8219 10.7842 17.4797C11.19 17.1376 11.4618 16.6631 11.5516 16.14C11.6413 15.6168 11.5433 15.0788 11.2747 14.621C11.0062 14.1632 10.5844 13.8151 10.084 13.6382V11.2502H13.084C13.6807 11.2502 14.253 11.4872 14.675 11.9092C15.0969 12.3311 15.334 12.9034 15.334 13.5002V13.6382C14.8336 13.8151 14.4118 14.1632 14.1433 14.621C13.8747 15.0788 13.7766 15.6168 13.8664 16.14C13.9561 16.6631 14.2279 17.1376 14.6337 17.4797C15.0395 17.8219 15.5532 18.0095 16.084 18.0095C16.6148 18.0095 17.1284 17.8219 17.5342 17.4797C17.94 17.1376 18.2118 16.6631 18.3016 16.14C18.3913 15.6168 18.2933 15.0788 18.0247 14.621C17.7562 14.1632 17.3344 13.8151 16.834 13.6382Z" 
                                        fill={`${(index === 0) ? "#0F7A9D" : "var(--richblack-400)" }`}/></svg>
                                    <div className={`${(index === 0) ? "text-[#0A5A72]":"text-[var(--richblack-300)]"} gap-x-1 flex justify-center`}>
                                        {course.lessionNumber}
                                        <p>
                                            Lessons
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Explore;