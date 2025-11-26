"use client"

import React, { useState } from 'react'
import { Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbSeparator,BreadcrumbList } from '../../ui/breadcrumb';
import SampleCourseThumbnail from '@/public/assets/Images/singlecoursesample.jpg';
import { Rating } from '@mui/material';
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { BiGlobe } from "react-icons/bi";
import { LuClock8 } from "react-icons/lu";
import { GrCursor } from "react-icons/gr";
import { TbDeviceMobilePlus } from "react-icons/tb";
import { LuFileCheck } from "react-icons/lu";
import Image from 'next/image';
import CTAButton from '../../common/CTAButton';
import Accordian from './Accordian';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type AccordionMode = "normal" | "expand" | "collapse";

const SingleCourse:React.FC = () => {
    // operation to find catelog from course id
    const {catelog} = {catelog:"python"};
    const courseData = {
        id: "wvfoueyqwef83r186983gfblq3",
        title: "The Complete Python Bootcamp From Zero to Hero in Python",
        description: "This Python for beginners course will help you to become Zero to Hero. Learn Python Programming in Easy Way.",
        rating: 4.5, // get avg rating
        instructor: "Anuj",
        instructorIntro: "I will be your lead trainer in this course. Within no time, I will help you to understand the subject in an easy manner. I have a huge experience in online training and recording videos. Let's get started!",
        //(populate) instructor obj id for instructor name
        language: "English",
        ratingCount: 650, //calculate arrays
        students: 332402, //calculate students
        createdat: "02/2020", //date conversion
        price: 1200,
        benefits: [
                    {
                        text:"8 hours on-demand video",
                        icon:<LuClock8 className='w-3.5 h-3.5'/>
                    },
                    {
                        text:"Full Lifetime access",
                        icon:<GrCursor className='w-3.5 h-3.5'/>
                    },
                    {
                        text:"Access on Mobile and TV",
                        icon:<TbDeviceMobilePlus className='w-3.5 h-3.5'/>
                    },
                    {
                        text:"Certificate of completion",
                        icon:<LuFileCheck className='w-3.5 h-3.5'/>
                    },
                ],
        summary: [
            "Introduction to Python and Python 3",
            "Understand the basics: Data types, Loops, Conditional statements, Functions and Modules",
            "Learn object oriented programming in Python",
            "Learn how to make your own web-scraping tool using Python",
            "Know how to Read and Parse JSON and XML files"
        ],
        courseThumbnail: SampleCourseThumbnail,
        courseDuration: "7h 57m",
        lectures: "41",
        courseContent: [
            {
                id: "2389thdn2ie9g1",
                sectionName: 'Introduction & Basics',
                subSections: [
                    {
                        id: "10rh123c2rr808r",
                        videotitle: 'Why Python',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdc'
                    },
                    {
                        id: "10rh123c2rr808r",
                        videotitle: 'How to install Python and Sublime text',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfde'
                    },
                    {
                        id: "10rh123c2rr808r",
                        videotitle: 'Variable Declaration and Memory Allocation',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdf'
                    },
                    {
                        id: "10rh123c2rr808r",
                        videotitle: 'Builtin Python Datatypes',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdg'
                    },
                    {
                        id: "10rh123c2rr808r",
                        videotitle: 'Python Operators',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdd'
                    },
                    {
                        id: "live_001",
                        videotitle: 'Live Lecture',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdd'
                    },
                ]
            },
            {
                id:"kwgr2uo3rb3478",
                sectionName: 'Conditional Statements and Loops',
                subSections: [
                    {
                        id: "1deh92he81eg10",
                        videotitle: 'Why Python',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdc'
                    },
                    {
                        id: "1deh92he81eg10",
                        videotitle: 'How to install Python and Sublime text',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfde'
                    },
                    {
                        id: "1deh92he81eg10",
                        videotitle: 'Variable Declaration and Memory Allocation',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdf'
                    },
                    {
                        id: "1deh92he81eg10",
                        videotitle: 'Builtin Python Datatypes',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdg'
                    },
                    {
                        id: "1deh92he81eg10",
                        videotitle: 'Python Operators',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdd'
                    }
                ]
            },
            {
                id:"kwgr2uo3rb3478",
                sectionName: 'Python Data Types - String, Lists, Tuple, Dictionaries',
                subSections: [
                    {
                        id: "19eh13e18eg891ge",
                        videotitle: 'Why Python',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdc'
                    },
                    {
                        id: "19eh13e18eg891ge",
                        videotitle: 'How to install Python and Sublime text',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfde'
                    },
                    {
                        id: "19eh13e18eg891ge",
                        videotitle: 'Variable Declaration and Memory Allocation',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdf'
                    },
                    {
                        id: "19eh13e18eg891ge",
                        videotitle: 'Builtin Python Datatypes',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdg'
                    },
                    {
                        id: "19eh13e18eg891ge",
                        videotitle: 'Python Operators',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdd'
                    }
                ]
            },
            {
                id:"kwgr2uo3rb3478",
                sectionName: 'Python Functions',
                subSections: [
                    {
                        id:"1d9v13dg17gd1",
                        videotitle: 'Why Python',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdc'
                    },
                    {
                        id:"1d9v13dg17gd1",
                        videotitle: 'How to install Python and Sublime text',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfde'
                    },
                    {
                        id:"1d9v13dg17gd1",
                        videotitle: 'Variable Declaration and Memory Allocation',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdf'
                    },
                    {
                        id:"1d9v13dg17gd1",
                        videotitle: 'Builtin Python Datatypes',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdg'
                    },
                    {
                        id:"1d9v13dg17gd1",
                        videotitle: 'Python Operators',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdd'
                    }
                ]
            },
            {
                id:"kwgr2uo3rb3478",
                sectionName: 'Python Modules and Packages',
                subSections: [
                    {
                        id: "10bd91d1210irh139f",
                        videotitle: 'Why Python',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdc'
                    },
                    {
                        id: "10bd91d1210irh139f",
                        videotitle: 'How to install Python and Sublime text',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfde'
                    },
                    {
                        id: "10bd91d1210irh139f",
                        videotitle: 'Variable Declaration and Memory Allocation',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdf'
                    },
                    {
                        id: "10bd91d1210irh139f",
                        videotitle: 'Builtin Python Datatypes',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdg'
                    },
                    {
                        id: "10bd91d1210irh139f",
                        videotitle: 'Python Operators',
                        description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                        duration: '02:09',
                        videoUrl: 'https://res.cloudinary.com/dfwfdd'
                    },
                ]
            }
        ]
    }

    const src = `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(courseData.instructor)}`;
    const [mode, setMode] = useState<AccordionMode>("normal");
    const [coursePurchased,setCoursePurchased] = useState<boolean>(true);
    const toggleAll = () => {
        setMode((prev) => (prev === "expand" ? "collapse" : "expand"));
    };
    return (
    <div className='w-full h-fit gap-[32px] flex flex-col bg-[var(--richblack-900)]'>
        {/* top section */}
        <div className='w-full h-[318px] max-[1025px]:h-fit bg-[var(--richblack-800)] py-[32px] px-[120px]
        max-[600px]:py-4 max-[600px]:px-[60px] max-[400px]:py-2 max-[400px]:px-[30px] gap-6 flex max-[1025px]:flex-col relative'>
            {/* left section */}
            <div className='w-[70%] max-[1025px]:w-full h-fit flex flex-col gap-3'>
                <Breadcrumb className='w-full h-fit flex gap-2'>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className='text-[var(--richblack-300)]
                            text-sm leading-5.5 font-normal tracking-normal hover:text-[var(--yellow-50)]'>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className='text-[var(--richblack-600)]'>
                            /
                        </BreadcrumbSeparator>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/catelog" className='text-[var(--richblack-300)]
                            text-sm leading-5.5 font-normal tracking-normal hover:text-[var(--yellow-50)]'>Catelog</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className='text-[var(--richblack-600)]'>
                            /
                        </BreadcrumbSeparator>
                        <BreadcrumbItem> {/*missing*/}
                            <BreadcrumbLink href={`/catelog/${catelog}`}
                            className='capitalize font-medium text-sm leading-5.5 tracking-normal
                            text-[var(--yellow-50)] hover:text-[var(--yellow-5)]'>{catelog}</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <header className='w-full h-fit text-3xl text-[var(--richblack-5)] font-medium tracking-normal'>
                    {courseData.title}
                </header>
                <p className='w-full h-fit text-[var(--richblack-200)] font-normal leading-5.5 text-sm tracking-normal'>
                    {courseData.description}
                </p>
                <div className='w-full h-fit gap-2 flex items-center max-[500px]:flex-col max-[500px]:items-start'>
                    <p className='w-fit h-fit text-lg font-semibold leading-6.5 text-[var(--yellow-100)] tracking-normal'>
                        {courseData.rating}
                    </p>
                    <Rating
                        value={courseData.rating}
                        size="small"
                        readOnly
                        precision={0.5}
                    />
                    <p className='w-fit h-fit text-base leading-6 font-normal tracking-normal text-[var(--richblack-25)]'>
                        ({courseData.ratingCount} ratings)
                    </p>
                    <p className='w-fit h-fit text-base leading-6 font-normal tracking-normal text-[var(--richblack-25)]'>
                        {courseData.students} students
                    </p>
                </div>
                <p className='w-full h-fit text-base leading-6 font-normal tracking-normal text-[var(--richblack-25)]'>
                    Created by <span className='underline'>{courseData.instructor}</span>
                </p>
                <div className='w-full h-fit flex gap-3'>
                    <div className='w-fit h-fit flex gap-2 items-center'>
                        <HiOutlineInformationCircle className='text-[var(--richblack-25)]'/>
                        <p className='w-fit h-fit text-base leading-6 font-normal tracking-normal text-[var(--richblack-25)]'>
                            Created at {courseData.createdat}
                        </p>
                    </div>
                    <div className='w-fit h-fit flex gap-2 items-center'>
                        <BiGlobe className='text-[var(--richblack-25)]'/>
                        <p className='w-fit h-fit text-base leading-6 font-normal tracking-normal text-[var(--richblack-25)]'>
                            {courseData.language}
                        </p>
                    </div>
                </div>
            </div>
            {/* divider */}
            <div className="w-0 h-[234px] max-[1025px]:hidden border border-solid border-[var(--richblack-700)]"/>
            {/* right section */}
            <div className='w-[30%] max-[1025px]:w-full h-fit rounded-[8px] bg-[var(--richblack-700)] flex flex-col'>
                <Image src={courseData.courseThumbnail} alt='thumbnail' width={384} height={201}
                className='w-full h-fit rounded-t-[8px]'/>
                <div className='w-full h-fit flex flex-col gap-4 p-6'>
                    <p className='w-full h-fit font-bold text-3xl leading-9.5 tracking-normal text-[var(--richblack-5)]'>
                        Rs.{courseData.price}
                    </p>
                    <div className='w-full h-fit flex flex-col gap-3'>
                        {/* instead of path.split("/")[2] use courseId from coursecontent, sectionId,subsectionId */}
                        {(coursePurchased) ? (
                            <Link href={`/course/${courseData.id}/take/${courseData.courseContent[0].subSections[0].id}`}>
                                <CTAButton active={true} text="Go to Course" disable={false} className='w-full'/>
                            </Link>
                        ) : (
                            <>
                                <CTAButton active={true} text="Add to Cart" disable={false} className='w-full'/>
                                <CTAButton active={false} text="Buy now" disable={false} className='w-full'/>
                            </>
                        )}

                        <p className='w-full h-fit text-center text-sm font-normal leading-5.5 text-[var(--richblack-25)]'>
                            30-Day Money-Back Guarantee
                        </p>
                    </div>
                    <div className='w-full h-fit flex flex-col gap-2'>
                        <p className='w-full h-fit text-[var(--richblack-5)] font-medium text-base leading-6'>
                            This course includes:
                        </p>
                        {
                            courseData.benefits.map((data,index) => (
                                <div className='w-full h-fit flex gap-2 items-center text-[var(--caribbeangreen-100)]' key={index}>
                                    {data.icon}
                                    <p className='w-fit h-fit text-sm leading-5.5 tracking-normal font-medium'>
                                        {data.text}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <button className='w-full h-fit bg-transparent rounded-[8px] border-none outline-none
                    py-3 px-6 hover:shadow-[-2px_-2px_0px_0px_#FFFFFF2E_inset] hover:cursor-pointer text-[var(--yellow-100)]
                    font-medium text-base leading-6 tracking-normal text-center'>
                        Share
                    </button>
                </div>
            </div>
        </div>
        <div className='w-full h-fit py-[32px] px-[120px] max-[600px]:py-4 max-[600px]:px-[60px] max-[400px]:py-2
        max-[400px]:px-[30px] flex flex-col gap-[32px]'>
            {/* summary section */}
            <div className='w-[65%] max-[1025px]:w-full h-fit p-8 flex gap-6 border border-solid border-[var(--richblack-700)]'>
                <div className='w-full flex flex-col gap-3'>
                    <p className='w-full h-fit text-3xl leading-9.5 font-medium tracking-normal text-[var(--richblack-5)]'>
                        What you&apos;ll learn
                    </p>
                    <ul className='w-full h-fit list-none flex flex-col gap-2'>
                        {
                            courseData.summary.map((data,index) => (
                                <li key={index} className='w-full h-fit text-sm font-medium leading-5.5 tracking-normal text-[var(--richblack-50)]'>
                                    {data}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {/* accordian */}
            <section className='w-[65%] max-[1025px]:w-full h-fit flex flex-col gap-4'>
                <div className='w-full h-fit flex flex-col gap-2'>
                    <header className='w-full h-fit font-semibold text-2xl leading-8 tracking-normal text-[var(--richblack-5)]'>
                        Course content
                    </header>
                    <div className='w-full h-fit flex justify-between gap-3 text-sm leading-5.5 tracking-normal'>
                        <p className='w-fit h-fit font-normal text-[var(--richblack-50)]'>
                            {courseData.courseContent.length} sections • {courseData.lectures} lectures • {courseData.courseDuration} total length
                        </p>
                        <p className='w-fit h-fit font-medium text-[var(--yellow-50)] cursor-pointer' onClick={() => toggleAll()}>
                            {mode === "expand" ? "Collapse" : "Expand"} all sections
                        </p>
                    </div>
                </div>
                {/* accordian part */}
                <Accordian courseContent={courseData.courseContent} mode={mode}/>
            </section>
            {/* author */}
            <div className='w-[65%] max-[1025px]:w-full h-fit flex gap-4'>
                <div className='w-full h-fit flex flex-col gap-3'>
                    <header className='w-full h-fit font-semibold text-2xl leading-8 tracking-normal text-[var(--richblack-5)]'>
                        Author
                    </header>
                    <div className='w-full h-fit flex gap-3 items-center'>
                        <Image src={src} width={52} height={52} className='w-[52px] h-[52px] rounded-[100%]' alt='instructor_image'/>
                        <p className='w-fit h-fit text-base leading-6 tracking-normal font-medium text-[var(--richblack-5)]'>
                            {courseData.instructor}
                        </p>
                    </div>
                    <p className='w-full h-fit text-sm leading-5.5 font-normal tracking-normal text-[var(--richblack-50)]'>
                        {courseData.instructorIntro}
                    </p>
                </div>
            </div>
        </div>

    </div>
    )
}

export default SingleCourse;