"use client"

import React, { useState } from 'react'
import {Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbSeparator,BreadcrumbList} from '../../ui/breadcrumb'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import CourseSlider from './CourseSlider';
import { courseType } from './CourseSlider';
import { SwiperOptions } from 'swiper/types'
import SampleCourseThumbnail from "@/public/assets/Images/singlecoursesample.jpg"

interface Catelog {
  catelog: string,
  description: string,
  related: {to:string,text:string}[],
  courses: courseType[]
}

export const catelogData: Catelog[] = [
    {
      catelog: "Python",
      description: "Python is a general-purpose, versatile, and powerful programming language. It’s a great first language because Python code is concise and easy to read. Whatever you want to do, python can do it. From web development to machine learning to data science, Python is the language for you.",
      related: [
        {to:"/doc/python",text:"Doc Python"},
        {to:"/cheatsheets",text:"Cheatsheets"},
        {to:"/articles",text:"Articles"},
        {to:"/communityforums",text:"Community Forums"},
        {to:"/projects",text:"Projects"}
      ],
      courses: [
        {
          id:"mock123",
          thumbnailImage: SampleCourseThumbnail ,
          title: "The Complete Python Bootcamp From Zero to Hero in Python",
          author: "Anuj",
          rating: 4.5,
          price: 1200
        },
        {
          id:"",
          thumbnailImage: SampleCourseThumbnail ,
          title: "The Complete Python Bootcamp From Zero to Hero in Python",
          author: "Anuj",
          rating: 4.5,
          price: 1200
        },
        {
          id:"",
          thumbnailImage: SampleCourseThumbnail ,
          title: "The Complete Python Bootcamp From Zero to Hero in Python",
          author: "Anuj",
          rating: 4.5,
          price: 1200
        },
        {
          id:"",
          thumbnailImage: SampleCourseThumbnail ,
          title: "The Complete Python Bootcamp From Zero to Hero in Python",
          author: "Anuj",
          rating: 4.5,
          price: 1200
        },
        {
          id:"",
          thumbnailImage: SampleCourseThumbnail ,
          title: "The Complete Python Bootcamp From Zero to Hero in Python",
          author: "Anuj",
          rating: 4.5,
          price: 1200
        },
        {
          id:"",
          thumbnailImage: SampleCourseThumbnail ,
          title: "The Complete Python Bootcamp From Zero to Hero in Python",
          author: "Anuj",
          rating: 4.5,
          price: 1200
        }
      ]
    },
]
const SingleCatelog:React.FC = () => {
  const path = usePathname();
  const [active,setActive] = useState<string>("Most Popular");
  const setActiveFilter = (filter: string) => setActive(filter);
  return (
    <div className='w-full h-fit gap-[32px] flex flex-col bg-[var(--richblack-900)]'>
      {/* Top Section */}
      <div className='w-full h-fit py-[32px] px-[120px] max-[746px]:px-[60px] max-[740px]:py-[16px] max-[600px]:flex-col flex gap-6 justify-between bg-[var(--richblack-800)]'>
        <div className='w-[70%] max-[600px]:w-full h-fit flex flex-col gap-3 border-r border-solid border-[var(--richblack-800)]'>
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
              <BreadcrumbItem>
                <BreadcrumbLink href={`/catelog/${path.split("/")[2]}`}
                className='capitalize font-medium text-sm leading-5.5 tracking-normal
                text-[var(--yellow-50)] hover:text-[var(--yellow-5)]'>{path.split("/")[2]}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <header className='w-full h-fit font-medium text-3xl leading-[38px] tracking-normal text-[var(--richblack-5)]'>
            {catelogData[0].catelog}
          </header>
          <p className='w-full h-fit text-sm font-normal leading-5.5 tracking-normal text-[var(--richblack-200)]'>
            {catelogData[0].description}
          </p>
        </div>
        <div className='w-[30%] max-[600px]:w-full h-fit items-center flex flex-col gap-3 shadow-[12px_12px_0px_0px_#161D291A] drop-shadow-[0px_0px_50px_0px_#00000033]'>
          <header className='w-full h-fit text-lg font-semibold tracking-normal leading-6.5 text-[var(--richblack-5)]'>
            Related resources
          </header>
          <ul className='w-full h-fit flex flex-col gap-2 list-disc'>
            {
              catelogData[0].related.map((data,index) => (
                <li key={index} className='text-[var(--richblack-100)] text-sm leading-5.5 ml-[15px] font-normal text-start'>
                  <Link href={data.to}>
                    {data.text}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      {/* Slider 1 */}
      <div className='w-full h-fit py-[32px] px-[120px] max-[746px]:px-[60px] max-[740px]:py-[16px]
      flex gap-[44px]'>
        <div className='w-full h-fit flex flex-col gap-[40px]'>
          <div className='w-full h-fit flex flex-col gap-2'>
            <header className='w-full h-fit font-semibold text-3xl leading-[38px] tracking-normal text-[var(--richblack-5)]'>
              Courses to get you started
            </header>
            <div className='w-full h-fit flex border-b border-solid border-[var(--richblack-600)]'>
              {
                ["Most Popular","New","Trending"].map((filter,index)=>(
                  <div key={index} className={`w-max text-center py-2 px-3 h-fit font-normal
                  tracking-normal text-base max-[400px]:text-[10px] leading-6 text-[var(--richblack-200)] cursor-pointer
                  ${(filter === active)&&"border-b border-solid border-[var(--yellow-100)] text-[var(--yellow-100)]"}`} onClick={() => setActiveFilter(filter)}>
                    {filter}
                  </div>
                ))
              }
            </div>
          </div>
          <div className='w-full h-fit flex justify-center items-center gap-[22px] max-[500px]:gap-[11px]'>
            <CourseSlider courses={catelogData[0].courses} className='bottom-[280px]'
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
        </div>
      </div>
      {/* Slider 2 */}
      <div className='w-full h-fit py-[32px] px-[120px] max-[746px]:px-[60px] max-[740px]:py-[16px]'>
        <div className='w-full h-fit flex flex-col gap-[40px]'>
          <div className='w-full h-fit flex flex-col gap-2'>
            <header className='w-full h-fit font-semibold text-3xl leading-[38px] tracking-normal text-[var(--richblack-5)]'>
              Top courses in Python and Machine Learning
            </header>
          </div>
          <CourseSlider courses={catelogData[0].courses} navigation={false} autoplay={{
            delay: 2500, disableOnInteraction: false, reverseDirection: true
          }} navArrowHidden={false} breakpoints={{
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
      </div>
      {/* Frequently Brought */}
      <div className='w-full h-fit py-[32px] px-[120px] max-[746px]:px-[60px] max-[740px]:py-[16px]'>
        <div className='w-full h-fit flex flex-col gap-[40px]'>
          <header className='w-full h-fit font-semibold text-3xl leading-[38px] tracking-normal text-[var(--richblack-5)]'>
            Frequently Bought Together
          </header>
          <div className='w-full h-fit flex justify-center items-center gap-[22px] max-[500px]:gap-[11px]'>

            <CourseSlider courses={catelogData[0].courses} grid={{ rows: 2, fill: "row" }} className='top-[560px]'
              breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 12
              },
              500: {
                slidesPerView: 1,
                spaceBetween: 12
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 24
              },
              1440: {
                slidesPerView: 2,
                spaceBetween: 24
              }
            } as SwiperOptions["breakpoints"]}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCatelog;