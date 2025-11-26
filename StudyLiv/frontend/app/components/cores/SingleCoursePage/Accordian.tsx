"use client"
import { formatMinutes, parseToMinute } from '@/lib/parseToMinutes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaAngleUp } from "react-icons/fa6";
import { FiPlayCircle } from "react-icons/fi";
import { AccordionMode } from './SingleCourse';
import { Section } from '@/types/course';
const Accordian:React.FC<{courseContent: Section[],mode?: AccordionMode}> = (
    {courseContent,mode="normal"}
    ) => {
    const path = usePathname();
    const [openSubs, setOpenSubs] = useState<Set<string>>(new Set());
    const [openParents, setOpenParents] = useState<Set<number>>(new Set());

    const toggleParent = (i: number) => {
        setOpenParents(prev => {
            const next = new Set(prev);
            next.has(i) ? next.delete(i) : next.add(i);
            return next;
        });
    };
    const toggleSub = (i: number, j: number) => {
        const key = `${i}-${j}`;
        setOpenSubs(prev => {
            const next = new Set(prev);
            next.has(key) ? next.delete(key) : next.add(key);
            return next;
        });
    };
    useEffect(() => {
        if (mode === "collapse") {
            setOpenParents(new Set());
            setOpenSubs(new Set());
            return;
        }
        if (mode === "expand") {
            const p = new Set<number>();
            const s = new Set<string>();
            courseContent.forEach((sec, i) => {
            p.add(i);
            sec.subSections.forEach((_, j) => s.add(`${i}-${j}`));
        });
        setOpenParents(p);
        setOpenSubs(s);
        return;
    }
    }, [mode, courseContent]);
    return (
    <div className='w-full h-fit flex flex-col border border-[var(--richblack-600)]'>
        {
            courseContent.map((section,i) => {
                const parentOpen = openParents.has(i);
                return <div key={i} className='w-full h-fit flex flex-col'>
                            <header className='w-full h-fit border-b py-[16px] px-[32px] max-[700px]:py-[8px] max-[700px]:px-[16px] max-[400px]:py-1 max-[400px]:px-2 flex items-center gap-3 bg-[var(--richblack-700)]
                            border-[var(--richblack-600)] max-[400px]:gap-1.5'>
                                <div className='w-[80%] max-[930px]:w-[70%] max-[480px]:w-[55%] h-fit flex gap-2'>
                                    <FaAngleUp className={`w-5 h-5 text-[var(--richblack-200)] cursor-pointer ${(parentOpen) ? "": "rotate-180"}`}
                                    onClick={() => toggleParent(i)}/>
                                    <p className='w-fit h-fit text-sm font-medium leading-5.5 tracking-normal text-[var(--richblack-5)]'>
                                        {section.sectionName}
                                    </p>
                                </div>
                                <p className='w-[10%] max-[930px]:w-[20%] max-[480px]:w-[40%] h-fit font-normal text-sm leading-5.5 tracking-normal text-[var(--yellow-50)]'>
                                    {section.subSections.length} lectures
                                </p>
                                <p className='w-[15%] h-fit font-normal text-sm leading-5.5 tracking-normal text-[var(--richblack-25)]'>
                                    {formatMinutes(section.subSections.reduce(
                                        (acc,curr) => acc + parseToMinute(curr.duration),0
                                    ))}min
                                </p>
                            </header>
                            { parentOpen && <div className='w-full h-fit flex flex-col gap-3 py-[16px] px-[32px] transition-all duration-200 ease-out'>
                                                {
                                                    section.subSections.map((subsection,j) => {
                                                    const open = openSubs.has(`${i}-${j}`);
                                                    return <div key={j} className='w-full h-fit gap-3 flex'>
                                                                <div className='w-[90%] h-fit flex flex-col gap-1'>
                                                                    <header className='w-full h-fit flex gap-2 items-center'>
                                                                        <FiPlayCircle className='w-[18px] h-[18px] text-[var(--richblack-50)]'/>
                                                                        <Link href={`${path}/${subsection.videoUrl}/take`} className='w-fit h-fit text-sm font-medium leading-5.5
                                                                        tracking-normal text-[var(--richblack-5)]'>
                                                                            {subsection.videotitle}
                                                                        </Link>
                                                                        <FaAngleUp className={`w-4 h-4 text-[var(--richblack-200)] cursor-pointer ${(open)?"":"rotate-180"}`} onClick={() => toggleSub(i,j)}/>
                                                                    </header>
                                                                    {open && <div className='w-full h-fit px-5.5 transition-all duration-200 ease-out'>
                                                                                <p className='w-full h-fit text-sm leading-5.5
                                                                                tracking-normal text-[var(--richblack-50)]'>
                                                                                    {subsection.description}
                                                                                </p>
                                                                            </div>
                                                                    }
                                                                </div>
                                                                <p className='w-[10%] h-fit text-sm leading-5.5 tracking-normal text-[var(--richblack-25)]'>
                                                                    {subsection.duration}
                                                                </p>
                                                            </div>
                                                    })
                                                }
                            </div>}
                        </div>
                })
        }
    </div>
    )
}

export default Accordian;