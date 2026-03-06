'use client'
import React, { useState, useEffect } from 'react';
import ContentSidebar from './ContentSidebar';
import Content from './Content';
import { Section } from '@/types/course';
import { LectureProvider, useLecture } from '@/lib/context/LectureContext';
import { useParams } from 'next/navigation';

const TakeContent = () => {
    // Fetch data from redux for course content lectures
    const courseContent: Section[] = [
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
                    id: "10rh123c2rr808g",
                    videotitle: 'How to install Python and Sublime text',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfde'
                },
                {
                    id: "10rh123c2rr808t",
                    videotitle: 'Variable Declaration and Memory Allocation',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdf'
                },
                {
                    id: "10rh123c2rr808f",
                    videotitle: 'Builtin Python Datatypes',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdg'
                },
                {
                    id: "10rh123c2rr808q",
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
                    videoUrl: 'https://res.cloudinary.com/dfwfdd',
                    contentType: 'live'
                },
                {
                    id: "questions_001",
                    practicetitle: 'Practice Questions',
                    description: 'Ace your career with these questions',
                    contentType: 'instructor_questions',
                    questions: [
                        "What is Python?",
                        "What are the benefits of using Python?",
                        "How do you install Python on your system?"
                    ],
                    duration: '3 Questions'
                }
            ]
        },
        {
            id: "kwgr2uo3rb3478",
            sectionName: 'Conditional Statements and Loops',
            subSections: [
                {
                    id: "1deh92he81eg10f",
                    videotitle: 'Why Python',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdc'
                },
                {
                    id: "1deh92he81eg10s",
                    videotitle: 'How to install Python and Sublime text',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfde'
                },
                {
                    id: "1deh92he81eg10d",
                    videotitle: 'Variable Declaration and Memory Allocation',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdf'
                },
                {
                    id: "1deh92he81eg10q",
                    videotitle: 'Builtin Python Datatypes',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdg'
                },
                {
                    id: "1deh92he81eg10t",
                    videotitle: 'Python Operators',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdd'
                }
            ]
        },
        {
            id: "kwgr2uo3rb3478",
            sectionName: 'Python Data Types - String, Lists, Tuple, Dictionaries',
            subSections: [
                {
                    id: "19eh13e18eg891geg",
                    videotitle: 'Why Python',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdc'
                },
                {
                    id: "19eh13e18eg891gej",
                    videotitle: 'How to install Python and Sublime text',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfde'
                },
                {
                    id: "19eh13e18eg891ges",
                    videotitle: 'Variable Declaration and Memory Allocation',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdf'
                },
                {
                    id: "19eh13e18eg891gef",
                    videotitle: 'Builtin Python Datatypes',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdg'
                },
                {
                    id: "19eh13e18eg891gel",
                    videotitle: 'Python Operators',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdd'
                }
            ]
        },
        {
            id: "kwgr2uo3rb3478",
            sectionName: 'Python Functions',
            subSections: [
                {
                    id: "1d9v13dg17gd1",
                    videotitle: 'Why Python',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdc'
                },
                {
                    id: "1d9v13dg17gd2",
                    videotitle: 'How to install Python and Sublime text',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfde'
                },
                {
                    id: "1d9v13dg17gd3",
                    videotitle: 'Variable Declaration and Memory Allocation',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdf'
                },
                {
                    id: "1d9v13dg17gd6",
                    videotitle: 'Builtin Python Datatypes',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdg'
                },
                {
                    id: "1d9v13dg17gd7",
                    videotitle: 'Python Operators',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdd'
                }
            ]
        },
        {
            id: "kwgr2uo3rb3478",
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
                    id: "10bd91d1210irh139h",
                    videotitle: 'How to install Python and Sublime text',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfde'
                },
                {
                    id: "10bd91d1210irh139b",
                    videotitle: 'Variable Declaration and Memory Allocation',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdf'
                },
                {
                    id: "10bd91d1210irh139v",
                    videotitle: 'Builtin Python Datatypes',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdg'
                },
                {
                    id: "10bd91d1210irh139c",
                    videotitle: 'Python Operators',
                    description: 'Python is one of the fastest-growing programming languages. Let me tell you, learning python is easy.',
                    duration: '02:09',
                    videoUrl: 'https://res.cloudinary.com/dfwfdd'
                }
            ]
        }
    ]
    const { videoId } = useParams();
    const { setLectureUrl } = useLecture();
    const [activeSide, setActiveSide] = useState(true);

    useEffect(() => {
        if (videoId) {
            const currentSection = courseContent.find(section =>
                section.subSections.some(sub => sub.id === videoId)
            );
            const currentSubSection = currentSection?.subSections.find(sub => sub.id === videoId);
            if (currentSubSection?.videoUrl) {
                setLectureUrl(currentSubSection.videoUrl);
            }
        }
    }, [videoId, setLectureUrl, courseContent]);

    function receiveActive(active: boolean) {
        setActiveSide(active)
    }
    return (
        <div className='w-full h-full  bg-[var(--richblack-900)] flex flex-col lg:flex-row overflow-hidden'>
            {
                activeSide && <ContentSidebar courseContent={courseContent} />
            }
            <Content recieveSideToggle={receiveActive} />
        </div>
    )
}

const Take = () => {
    return (
        <LectureProvider>
            <TakeContent />
        </LectureProvider>
    )
}

export default Take;
