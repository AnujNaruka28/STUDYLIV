"use client"
import React, { useEffect, useState } from 'react'
import { Section } from '@/types/course';
import { formatMinutes, parseToMinute } from '@/lib/parseToMinutes';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoAlbums } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { HiMiniSignal } from "react-icons/hi2";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
const LecturesBox:React.FC<{courseContent: Section[]}> = ({courseContent}) => {
    const path = usePathname();
    const router = useRouter();
    const [sectionOpen,setSectionOpen] = useState<Set<number>>(new Set());
    const [activeVideo, setActiveVideo] = useState<string>(path.split("/")[path.split("/").length-1]);
    const [activeSection, setActiveSection] = useState<string>(path.split("/")[path.split("/").length-1]);
    useEffect(() => {
        const storedSectionOpen = localStorage.getItem('sectionOpen');
        if (storedSectionOpen) {
            setSectionOpen(new Set(JSON.parse(storedSectionOpen)));
        }
    }, [])

    const setActive = (id: number) => {
        setSectionOpen((prev) => {
            const next=new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            localStorage.setItem('sectionOpen',JSON.stringify(Array.from(next)));
            return next;
        })
    }
    const handleVideoClick = (courseId: string, subsectionId: string) => {
        setActiveVideo(subsectionId);
        router.push(`/course/${courseId}/take/${subsectionId}`);
    }
    const handleQuestionClick = (subsectionId: string) => {
        setActiveSection(subsectionId);
        router.push(`/collab/questions/${subsectionId}`);
    }
    return (
        <div className='w-full h-fit flex flex-col min-[1024px]:overflow-y-scroll'>
        {
            courseContent.map((section,i) => {
                const sectionOn=sectionOpen.has(i);
                return <div className='w-full h-fit flex flex-col' key={i}>
                            <header className='w-full h-fit border-b border-solid border-[var(--richblack-600)]
                            flex gap-2 py-4 px-4 lg:px-6 items-center justify-between'>
                                <p className='w-[60%] lg:w-[60%] h-fit text-sm font-medium leading-5.5 text-[var(--richblack-5)]'>
                                    {section.sectionName}
                                </p>
                                <p className='w-[20%] lg:w-[20%] h-fit text-sm font-normal tracking-normal text-[var(--richblack-25)]'>
                                    {formatMinutes(section.subSections.reduce(
                                        (acc,curr) => acc + parseToMinute(curr.duration),0
                                    ))}min
                                </p>
                                <MdKeyboardDoubleArrowRight className={`w-[20%] lg:w-[20%] h-5 text-[var(--richblack-200)] cursor-pointer ${(sectionOn)?"rotate-90":""}`}
                                onClick={() => setActive(i)}/>
                            </header>
                            {
                                sectionOn &&
                                <div className='py-4 px-4 lg:px-6 flex flex-col gap-3 transition-all ease-in-out duration-200'>
                                {
                                    section.subSections.map((subsection,j) => {
                                        return  <div key={j} className='w-full h-fit flex gap-2 items-center'>
                                                    {
                                                        (subsection.contentType === 'instructor_questions') ?
                                                        (
                                                            <>
                                                                <div className='w-[10%] lg:w-[10%] h-fit flex flex-col relative'>
                                                                    <FaRegCircleQuestion className='w-[18px] h-[18px] text-[var(--richblack-50)]'/>
                                                                    <IoIosCheckmarkCircle className='w-[12px] h-[12px] text-[#47A5C5] absolute right-0 max-[1024px]:left-0 hidden'/>
                                                                </div>
                                                                <div onClick={() => handleQuestionClick(subsection.id)}
                                                                className={`w-[90%] lg:w-[90%] h-fit text-sm font-normal leading-5.5 cursor-pointer tracking-normal ${activeVideo === subsection.id ? "text-[#47A5C5]" : "text-[var(--richblack-400)]"} hover:text-[#47A5C5]`}>
                                                                    {subsection.practicetitle}
                                                                </div>
                                                            </>
                                                        ) :
                                                        (
                                                            <>
                                                                <div className='w-[10%] lg:w-[10%] h-fit flex flex-col relative'>
                                                                    {subsection.contentType === "live" ? (
                                                                        <HiMiniSignal className='w-[18px] h-[18px] text-[var(--richblack-50)]'/>
                                                                    ) : (
                                                                        <IoAlbums className='w-[18px] h-[18px] text-[var(--richblack-50)]'/>
                                                                    )}
                                                                    <IoIosCheckmarkCircle className='w-[12px] h-[12px] text-[#47A5C5] absolute right-0 max-[1024px]:left-0 hidden'/>
                                                                    {   subsection.contentType === "live" &&
                                                                        <div className='h-1 w-1 rounded-full bg-red-500 absolute right-0 max-[1024px]:left-0'/>
                                                                    }
                                                                </div>
                                                                <div onClick={() => handleVideoClick(path.split("/")[2], subsection.id)}
                                                                className={`w-[90%] lg:w-[90%] h-fit text-sm font-normal leading-5.5 cursor-pointer tracking-normal ${activeVideo === subsection.id ? "text-[#47A5C5]" : "text-[var(--richblack-400)]"} hover:text-[#47A5C5]`}>
                                                                    {subsection.videotitle}
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                </div>
                                    })
                                }
                                </div>
                            }
                        </div>
            })
        }
        </div>
    )
}

export default LecturesBox;