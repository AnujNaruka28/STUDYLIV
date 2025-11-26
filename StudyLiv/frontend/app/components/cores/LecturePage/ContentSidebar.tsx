"use client"
import React from 'react'
import { Section } from '@/types/course';
import LecturesBox from './LecturesBox';
import { IoIosArrowRoundBack } from "react-icons/io";
import { LiaCertificateSolid } from "react-icons/lia";
import { useRouter } from 'next/navigation';
import CTAButton from '../../common/CTAButton';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../ui/dialog';
import { Rating } from '@mui/material';
import Image from 'next/image';

const ContentSidebar:React.FC<{courseContent: Section[]}>  = ({courseContent}) => {
    const title= "The Complete Python Bootcamp From Zero to Hero in Python";
    const router= useRouter();
    const src = `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent("Wade Warren")}`;
    return (
    <div className='w-full lg:w-[20%] h-full bg-[var(--richblack-800)] border-t lg:border-t-0 lg:border-r border-solid border-[var(--richblack-700)]
    py-[16px] lg:py-[32px] flex flex-col gap-2.5 overflow-y-scroll transition-all duration-300 ease-in-out'>
        <div className='w-full h-fit py-2 px-4 lg:px-6 gap-2 flex items-center justify-between max-[1025px]:flex-col max-[1025px]:items-start'>
            <IoIosArrowRoundBack className='w-8 h-8 text-[var(--richblack-400)] hover:text-[#47A5C5] cursor-pointer' onClick={() => router.back()}/>
            {/* onClick={() => router.pop() */}
            <Dialog>
                <DialogTrigger asChild>
                    <CTAButton active={true} className='w-[139px]' text="Add Review"/>
                </DialogTrigger>
                <DialogContent className='w-full h-fit bg-[var(--richblack-800)] border border-[var(--richblack-700)] text-[var(--richblack-5)]'>
                    <DialogHeader className='w-full h-fit rounded-t-[8px] border-b border-solid border-[var(--richblack-25)] bg-[var(--richblack-700)] p-0'>
                        <DialogTitle className='text-lg font-semibold leading-6.5 text-[var(--richblack-5)] px-4 py-3'>
                            Add Review
                        </DialogTitle>
                    </DialogHeader>
                    <form className="flex flex-col gap-4 p-4">
                            <div className='w-full h-fit flex flex-col gap-2 items-center'>
                                {/* UserProfile */}
                                <div className='flex items-center gap-3'>
                                    <Image src={src} alt='avatar' width={40} height={40} className='w-[52px] h-[52px] rounded-full object-cover'/>
                                    <div className='flex flex-col gap-0.5'>
                                        <p className='font-semibold text-base leading-6 text-[var(--richblack-5)]'>
                                            Wade Warren
                                        </p>
                                        <p className='text-sm text-[var(--richblack-5)] leading-5.5'>
                                            Posting Publicly
                                        </p>
                                    </div>
                                </div>
                                {/* StarRating */}
                                <Rating id="rating" className="flex gap-1" max={5} readOnly={false} sx={{ color: '#E7C009' }} precision={0.5}/>
                            </div>
                            {/* TextArea */}
                            <div className="grid gap-2">
                                <label htmlFor="review" className="text-[var(--richblack-5)] text-sm leading-5.5 font-normal">
                                    Add Your Experience <span className='text-[var(--pink-200)]'>*</span>
                                </label>
                                <textarea
                                    id="review"
                                    required
                                    placeholder="Share Details of your own experience for this course"
                                    className="bg-[var(--richblack-600)] border shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset]
                                    border-[var(--richblack-600)] rounded-[8px] p-3 text-[var(--richblack-5)] min-h-[120px]
                                    placeholder:text-[var(--richblack-200)] placeholder:text-base placeholder:leading-6 placeholder:font-medium
                                    focus:outline-none focus:ring-1 focus:ring-[#47A5C5]"
                                />
                            </div>
                    </form>
                    <DialogFooter className='max-[650px]:flex'>
                        <DialogClose asChild>
                            <CTAButton active={false} className='w-[101px]' text="Cancel"/>
                        </DialogClose>
                        <DialogClose asChild>
                            <CTAButton active={true} type='submit' className='w-[128px]' text="Save Edits"/>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
        <header className='w-full h-fit py-2 px-4 lg:px-6 gap-2 flex flex-col lg:flex-row lg:items-center'>
            <p className='w-fit h-fit font-bold text-lg leading-6.5 tracking-normal'>
                {/* Course Name fetch from redux */}
                {title}
            </p>
            <p className='w-fit h-fit font-semibold text-sm leading-5.5 tracking-normal'>
                {/* lectures-done/total-lectures */}
                00/20
                {/* {}/{} */}
            </p>
        </header>
        <div className='w-full h-fit py-1 px-4 lg:px-4'>
            <div className='w-full h-0 border border-solid border-[var(--richblack-600)] mx-auto'/>
        </div>
        <LecturesBox courseContent={courseContent}/>
        <div className='w-full h-fit py-2 px-2 border-t border-solid border-[var(--richblack-600)] flex items-center justify-center'>
            <div className='w-full h-fit font-semibold text-sm leading-5.5 flex items-center justify-center tracking-normal text-[var(--richblack-400)] hover:text-[#47A5C5] cursor-pointer group'>
                <LiaCertificateSolid className='w-8 h-8 group-hover:text-[#47A5C5] text-[var(--richblack-400)]'/>
                <p className='group-hover:text-[#47A5C5] text-[var(--richblack-400)]'>
                    Certificate of Completion
                </p>
            </div>
        </div>
    </div>
    )
}

export default ContentSidebar;