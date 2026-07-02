'use client'

import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/app/components/ui/breadcrumb';
import { usePathname, useRouter } from 'next/navigation';
import courseThumnail from '@/public/assets/Images/singlecoursesample.jpg'
import Image from 'next/image';
import { Rating } from '@mui/material';
import { AiFillDelete } from "react-icons/ai";
import { Checkbox } from '@/app/components/ui/checkbox';
import { catelogData } from '@/app/components/cores/SingleCatelogPage/SingleCatelog';
import CourseSlider from '../../../SingleCatelogPage/CourseSlider';
import { SwiperOptions } from 'swiper/types';
import CTAButton from '@/app/components/common/CTAButton';

export const items = [
        {
            courseName: "The Complete Python Bootcamp From Zero to Hero in Python",
            instructor: {
                name: "Dr. Angela Yu",
            },
            thumbnail: courseThumnail,
            ratingsAndReviews: {
                ratings: 4.5, // calculated []
                reviews: 120, // calculated []
            },
        },
        {
            courseName: "The Complete Web Development Bootcamp",
            instructor: {
                name: "Dr. Angela Yu",
            },
            thumbnail: courseThumnail,
            ratingsAndReviews: {
                ratings: 4.5, // calculated []
                reviews: 120, // calculated []
            },
        },
        {
            courseName: "The Complete 2023 Web Development Bootcamp",
            instructor: {
                name: "Dr. Angela Yu",
            },
            thumbnail: courseThumnail,
            ratingsAndReviews: {
                ratings: 4.5, // calculated []
                reviews: 120, // calculated []
            }
        },
        {
            courseName: "The Complete 2023 React Bootcamp",
            instructor: {
                name: "Dr. Angela Yu",
            },
            thumbnail: courseThumnail,
            ratingsAndReviews: {
                ratings: 4.5, // calculated []
                reviews: 120, // calculated []
            },
        },
        {
            courseName: "The Complete 2023 Node.js Bootcamp",
            instructor: {
                name: "Dr. Angela Yu",
            },
            thumbnail: courseThumnail,
            ratingsAndReviews: {
                ratings: 4.5, // calculated []
                reviews: 120, // calculated []
            },
        },
        {
            courseName: "The Complete 2023 MongoDB Bootcamp",
            instructor: {
                name: "Dr. Angela Yu",
            },
            thumbnail: courseThumnail,
            ratingsAndReviews: {
                ratings: 4.5, // calculated []
                reviews: 120, // calculated []
            },
        }
    ];
const WishlistClient:React.FC = () => {
    const path = usePathname();
    const router= useRouter();
    
    const handleBuy = () => {
        router.push('/dashboard/checkout')
    }
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
                                <BreadcrumbLink href="/dashboard" className='text-[var(--richblack-300)]
                                text-sm leading-5.5 font-normal tracking-normal hover:text-[var(--yellow-50)]'>Dashboard</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className='text-[var(--richblack-600)]'>
                                /
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={`/dashboard/${path.split("/")[2]}`}
                                className='capitalize font-medium text-sm leading-5.5 tracking-normal
                                text-[var(--yellow-50)] hover:text-[var(--yellow-5)]'>{path.split("/")[2].split("-").join(" ")}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <p className='w-fit h-fit text-3xl leading-[38px] font-medium tracking-normal text-[var(--richblack-5)] capitalize'>
                        {path.split("/")[2].split("-").join(" ")}
                    </p>
                </div>
            </header>
            <header className='w-full h-fit flex flex-col pr-[120px] pl-6 gap-[13px]'>
                <p className='w-full h-fit font-semibold text-base leading-6 text-[var(--richblack-400)]'>
                    {items.length} items in wishlist
                </p>
                <div className='w-full border border-[var(--richblack-700)]'/>
            </header>
            <div className='w-full h-fit flex gap-1'>
                <div className='w-[70%] h-[624px] flex flex-col gap-[33px] py-6 px-3 overflow-y-auto'>
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
                                    <div className='w-full h-[80%] flex gap-1'>
                                        <AiFillDelete className='w-[75%] h-9 fill-[var(--pink-200)] cursor-pointer'/>
                                        <Checkbox className='w-[25%] h-9'/>
                                    </div>
                                    {/* item.price */}
                                    <p className='w-fit h-[20%] text-2xl leading-8 text-[var(--yellow-50)] font-semibold'>
                                        Rs. 1700
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='w-[20%] h-[200px] flex flex-col rounded-[8px] gap-4 border border-[var(--richblack-700)] p-6 mt-5 ml-2 bg-[var(--richblack-800)]'>
                    <div className='w-full h-fit flex flex-col gap-1'>
                        <p className='w-full h-fit text-sm leading-5.5 font-semibold text-[var(--richblack-200)]'>
                            Total:
                        </p>
                        <p className='w-full h-fit text-2xl font-semibold text-[var(--yellow-50)] leading-8'>
                            Rs. 3500
                        </p>
                        <p className='w-full h-fit text-sm font-normal text-[var(--richblack-300)] leading-5.5 line-through'>
                            Rs. 4500
                        </p>
                    </div>
                    <CTAButton text={'Buy Now'} active={true} onClick={() => handleBuy()}/>
                </div>
            </div>
            <div className='w-full h-fit pr-[120px] pl-3 gap-[13px] flex flex-col'>
                <p className='w-full h-fit font-semibold text-base leading-6 text-[var(--richblack-400)]'>
                    Recently Viewed
                </p>
                <div className='w-full border border-[var(--richblack-700)]'/>
                <CourseSlider courses={catelogData[0].courses} className='bottom-[258px]'
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 12
                        },
                        800: {
                            slidesPerView: 2,
                            spaceBetween: 24
                        },
                        1100: {
                            slidesPerView: 2,
                            spaceBetween: 24
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 24
                        }
                    } as SwiperOptions["breakpoints"]}/>
            </div>
        </main>
    )
}

export default WishlistClient;