"use client"
import React, { useState, useCallback } from 'react'
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../../ui/resizable';

import { useLecture } from '@/lib/context/LectureContext';

import MainAIBox from './AIFeatures/MainAIBox';

interface contentProps {
    recieveSideToggle: (active: boolean) => void
}

const Content: React.FC<contentProps> = ({ recieveSideToggle }) => {
    const { lectureUrl } = useLecture();
    const [activeSideBar, setActiveSideBar] = useState(true);

    const toggleSidebar = useCallback(() => {
        setActiveSideBar(prev => {
            const newState = !prev;
            recieveSideToggle(newState);
            return newState;
        });
    }, [recieveSideToggle]);

    return (
        <div className={`${activeSideBar ? 'w-full lg:w-[80%]' : 'w-full'} h-full flex flex-col gap-4 p-4 lg:px-[96px] lg:py-[30px]`}>
            <div className='w-full h-fit'>
                {activeSideBar ? (
                    <TbLayoutSidebarLeftCollapse
                        className='w-[24px] h-[24px] cursor-pointer max-[1025px]:rotate-90'
                        onClick={toggleSidebar}
                    />
                ) : (
                    <TbLayoutSidebarRightCollapse
                        className='w-[24px] h-[24px] cursor-pointer max-[1025px]:rotate-90'
                        onClick={toggleSidebar}
                    />
                )}
            </div>
            <ResizablePanelGroup direction='vertical' className='w-full h-full'>
                <ResizablePanel defaultSize={90} minSize={2} maxSize={100}>
                    <video
                        key={lectureUrl}
                        src={(lectureUrl && lectureUrl.includes('/video/upload/')) ? lectureUrl : "https://res.cloudinary.com/dl3kraaox/video/upload/v1772377213/videoplayback_xzoho7.mp4"}
                        autoPlay
                        playsInline
                        controls
                        className="object-cover w-full h-full max-h-[60vh] lg:max-h-none border border-[var(--richblack-800)] rounded-xl"
                    />
                </ResizablePanel>
                <ResizableHandle withHandle className='bg-[var(--richblack-800)] hover:bg-[var(--pure-greys-700)] my-1' />
                <ResizablePanel defaultSize={2} maxSize={98}>
                    {/* AI PART RESIZABLE COMPONENT */}
                    <MainAIBox />
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}

export default Content;