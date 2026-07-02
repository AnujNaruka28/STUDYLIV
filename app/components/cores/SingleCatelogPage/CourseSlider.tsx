"use client"
import React from "react"
import { Autoplay, Grid, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/navigation"
import Image, { StaticImageData } from "next/image"
import { Rating } from "@mui/material"
import Link from "next/link"
import type { AutoplayOptions, GridOptions, SwiperOptions } from "swiper/types"
import CustomNav from "./CustomNav"
// import type { Swiper as SwiperType } from "swiper"

export interface courseType {
  id: string
  thumbnailImage: StaticImageData
  title: string
  author: string
  rating: number
  price: number
}

interface CourseSliderProps {
  courses: courseType[]
  autoplay?: AutoplayOptions                  // your autoplay prop
  grid?: GridOptions                          // optional grid
  slidesPerView?: number                      // columns (esp. when grid is used)
  navigation?: boolean
  loop?: boolean
  spaceBetween?: number
  centeredSlides?: boolean                    // avoid true when grid is set
  breakpoints?: SwiperOptions["breakpoints"],
  navArrowHidden?: boolean,
  className?: string
}

const CourseSlider: React.FC<CourseSliderProps> = ({
  courses,
  autoplay,
  grid,
  slidesPerView=1,
  navigation,
  loop = true,
  spaceBetween = 24,
  centeredSlides = false,
  breakpoints,
  navArrowHidden = true,
  className
}) => {
  const usingGrid = Boolean(grid)

  return (
    <Swiper
      modules={[Navigation, Autoplay, Grid]}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      navigation={navigation}
      loop={loop}
      autoplay={autoplay}
      grid={grid}
      centeredSlides={usingGrid ? false : centeredSlides} // prevent grid + centered conflict
      breakpoints={breakpoints}
      className="w-full h-fit relative"
    >
      {courses.map((course, idx) => (
        <SwiperSlide key={course.id || idx} className="flex flex-col gap-5 rounded-[8px] w-1/3 max-[1024px]:w-1/2 max-[800px]:w-full">
          <div className="rounded-[8px] overflow-hidden">
            <Image
              src={course.thumbnailImage}
              alt="thumbnail"
              width={384}
              height={201}
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col gap-[9px]">
            <div className="flex flex-col gap-2 text-base leading-6 tracking-normal">
              <Link href={`/course/${course.id || ""}`} className="font-medium text-[var(--richblack-5)]">
                {course.title}
              </Link>
              <p className="font-normal text-[var(--richblack-300)]">{course.author}</p>
            </div>

            <div className="flex items-center gap-2 max-[400px]:flex-col max-[400px]:items-start">
              <p className="font-semibold text-base leading-6 text-[var(--yellow-100)]">
                {course.rating}
              </p>
              <Rating value={course.rating} size="large" readOnly precision={0.5} />
              <p className="text-[var(--richblack-400)] font-normal text-base leading-6 tracking-normal">
                (Review Count)
              </p>
            </div>

            <footer className="text-[var(--richblack-5)] font-semibold text-xl leading-7">
              ₹{course.price}
            </footer>
          </div>
        </SwiperSlide>
      ))}
      {!!navArrowHidden && <CustomNav className={className!}/>}
    </Swiper>
  )
}

export default CourseSlider
