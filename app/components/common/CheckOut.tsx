'use client'

import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/app/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';
import CTAButton from '@/app/components/common/CTAButton';
import { items } from '../cores/DashboardPage/StudentPages/Wishlist/WishlistClient';
import Image from 'next/image';
import { Rating } from '@mui/material';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

const CheckOut = () => {
    const path = usePathname();
    const amount = 1220;
    return (
        <main className='w-full h-full overflow-y-scroll pb-4'>
            <header className='w-full h-fit flex py-6 pr-[120px] pl-6 gap-6'>
                <div className='w-full h-fit flex flex-col gap-3'>
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
                                <BreadcrumbLink href="/dashboard/wishlist" className='text-[var(--richblack-300)]
                                text-sm leading-5.5 font-normal tracking-normal hover:text-[var(--yellow-50)]'>Wishlist</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className='text-[var(--richblack-600)]'>
                                /
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={`/dashboard/${path.split('/')[2]}`}
                                className='capitalize font-medium text-sm leading-5.5 tracking-normal
                                text-[var(--yellow-50)] hover:text-[var(--yellow-5)]'>{path.split('/')[2]}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <p className='w-fit h-fit text-3xl leading-[38px] font-medium tracking-normal text-[var(--richblack-5)] capitalize'>
                        {path.split('/')[2]}
                    </p>
                </div>
            </header>
            <header className='w-full h-fit flex flex-col pr-[120px] pl-6 gap-[13px]'>
                <p className='w-full h-fit font-medium text-base leading-6 text-[var(--richblack-100)]'>
                    Order Summary
                </p>
            </header>
            <div className='w-full h-fit flex gap-1'>
                <div className='w-[65%] h-[624px] flex flex-col gap-[33px] py-6 px-3 overflow-y-auto'>
                    {
                        items.map((item,index) => (
                            <div className='w-full h-fit flex gap-5 px-6 border-b pb-[33px] border-b-[var(--richblack-700)]' key={index}>
                                <Image
                                src={item.thumbnail}
                                alt='course_thumbnail'
                                width={185}
                                height={148}
                                className='w-[20%] rounded-[8px] h-[148px]'
                                />
                                <div className='w-[60%] h-fit flex flex-col gap-[9px]'>
                                    <div className='w-full h-fit flex flex-col gap-[9px]'>
                                        <div className='w-full h-fit flex flex-col gap-2'>
                                            <p className='w-full h-fit font-medium text-lg leading-6.5 text-[var(--richblack-5)]'>
                                                {item.courseName}
                                            </p>
                                            <p className='w-full h-fit font-normal text-base leading-6 text-[var(--richblack-300)]'>
                                                {item.instructor.name}
                                            </p>
                                        </div>
                                        <div className='w-full h-fit flex gap-2'>
                                            <p className='w-fit h-fit font-semibold text-base leading-6 text-[var(--yellow-100)]'>
                                                {item.ratingsAndReviews.ratings}
                                            </p>
                                            <Rating value={item.ratingsAndReviews.ratings}/>
                                            <p className='w-fit h-fit font-normal text-base leading-6 text-[var(--richblack-400)]'>
                                                {item.ratingsAndReviews.reviews} Reviews
                                            </p>
                                        </div>
                                        <div className="w-full h-fit text-sm leading-5.5 font-medium text-[var(--richblack-300)]">
                                            Total Courses • Lesson • Beginner
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[20%] h-fit flex flex-col gap-5 items-end-safe'>
                                    {/* item.price */}
                                    <p className='w-fit h-fit text-2xl leading-8 text-[var(--yellow-50)] font-semibold'>
                                        Rs. 1700
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='w-[30%] h-[500px] flex flex-col rounded-[8px] gap-6.5 border border-[var(--richblack-700)] p-6 mt-5 ml-2 bg-[var(--richblack-800)]'>
                    <div className='w-full h-fit flex flex-col gap-0.5'>
                        <p className='w-full h-fit text-base leading-6 font-semibold text-[var(--richblack-25)]'>
                            Payment Details
                        </p>
                        <p className='w-full h-fit text-sm font-normal text-[var(--richblack-100)] leading-5.5'>
                            Complete your purchase details items and providing your  payment details to us .
                        </p>
                    </div>
                    <div className='w-full h-fit flex flex-col gap-6.5 p-6 border rounded-[8px] bg-[var(--richblack-800)] border-[var(--richblack-700)]'>
                        <div className='w-full h-fit flex flex-col gap-1.5'>
                            <Label htmlFor='fullname' className='w-full h-fit text-[var(--richblack-5)]'>
                                Full Name
                                <span className='text-[var(--pink-200)] text-sm font-normal leading-5.5'>*</span>
                            </Label>
                            <Input id='fullname' type='text' placeholder='Enter Full Name'
                            className='w-full h-fit text-[var(--richblack-200)] border-none p-3 shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset] rounded-[8px] leading-6 font-medium'/>
                        </div>
                        <div className='w-full h-fit flex flex-col gap-1.5'>
                            <Label htmlFor='email-id' className='w-full h-fit text-[var(--richblack-5)]'>
                                Email ID
                                <span className='text-[var(--pink-200)] text-sm font-normal leading-5.5'>*</span>
                            </Label>
                            <Input id='email-id' type='email' placeholder='Enter Email ID'
                            className='w-full h-fit text-[var(--richblack-200)] border-none p-3 shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset] rounded-[8px] leading-6 font-medium'/>
                        </div>
                        <div className='w-full h-fit flex gap-3'>
                            <div className='w-full h-fit pt-3 border-t flex gap-0.5 border-[var(--richblack-700)]'>
                                <p className='w-[50%] h-fit text-base leading-6 font-normal text-[var(--richblack-50)]'>
                                    Total
                                </p>
                                <p className='w-[50%] h-fit text-sm text-end leading-5.5 font-semibold text-[var(--richblack-5)]'>
                                    Rs. 1200/-
                                </p>
                            </div>
                        </div>
                        <CTAButton text={`Pay Rs. ${amount}`} active={true}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CheckOut;