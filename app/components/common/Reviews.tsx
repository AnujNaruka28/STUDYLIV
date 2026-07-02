"use client"
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper,SwiperSlide } from "swiper/react";
import {Rating} from "@mui/material"
import "swiper/css";
import type { SwiperOptions } from "swiper/types";

import Image from "next/image";

// Review data array with 9 objects
const reviewsData = [
    {
        user: {
            name: "Sarah Johnson",
            email: "sarah.johnson@example.com"
        },
        review: "Study Liv has completely transformed my learning experience. The courses are well-structured and the instructors are incredibly knowledgeable. I've learned more in 3 months than I did in a year of self-study.",
        rating: 5
    },
    {
        user: {
            name: "Michael Chen",
            email: "michael.chen@example.com"
        },
        review: "The platform's interactive approach makes complex topics easy to understand. The community support is amazing and the progress tracking keeps me motivated. Highly recommended for anyone serious about learning.",
        rating: 4.5
    },
    {
        user: {
            name: "Emily Rodriguez",
            email: "emily.rodriguez@example.com"
        },
        review: "I was skeptical at first, but Study Liv exceeded all my expectations. The quality of content is outstanding and the practical projects helped me build a strong portfolio. Worth every penny!",
        rating: 5
    },
    {
        user: {
            name: "David Thompson",
            email: "david.thompson@example.com"
        },
        review: "As a working professional, I needed flexible learning options. Study Liv's self-paced courses fit perfectly into my schedule. The mobile app is also great for learning on the go.",
        rating: 4
    },
    {
        user: {
            name: "Lisa Wang",
            email: "lisa.wang@example.com"
        },
        review: "The instructors here are industry experts who really know their stuff. They explain concepts clearly and are always available to help. I've gained confidence in my skills and landed a better job!",
        rating: 4.5
    },
    {
        user: {
            name: "James Wilson",
            email: "james.wilson@example.com"
        },
        review: "Study Liv helped me transition into tech from a completely different field. The structured learning path and mentorship program made the journey smooth and achievable. Truly life-changing!",
        rating: 5
    },
    {
        user: {
            name: "Maria Garcia",
            email: "maria.garcia@example.com"
        },
        review: "The platform's focus on practical skills rather than just theory is what sets it apart. I've built real projects that I can showcase to employers. The career support team is also very helpful.",
        rating: 4
    },
    {
        user: {
            name: "Alex Kim",
            email: "alex.kim@example.com"
        },
        review: "I've tried many online learning platforms, but Study Liv stands out for its quality and community. The peer learning features and group projects make learning collaborative and fun.",
        rating: 4.5
    },
    {
        user: {
            name: "Rachel Green",
            email: "rachel.green@example.com"
        },
        review: "The personalized learning experience is incredible. The platform adapts to my pace and learning style. I've improved significantly in areas I struggled with before. Thank you Study Liv!",
        rating: 5
    }
];

const Reviews = () => {
    return (
    <div className="w-full h-fit px-[120px] py-[90px] max-[700px]:px-[16px] max-[700px]:py-[32px] flex flex-col max-[700px]:gap-[32px] gap-[52px] bg-[var(--richblack-900)]">
        <div className="bgReview flex flex-col gap-[20px] w-full h-fit">
            <div className="min-[701px]:mx-auto max-[700px]:text-start w-full h-fit">
                <p className="min-[489px]:text-center font-semibold text-4xl leading-11 tracking-[-2%] text-[var(--richblack-5)]">
                    Reviews from other learners
                </p>
            </div>

            {/* Swiper Slider */}
            <div className="w-full h-fit flex gap-[20px] relative">
                {/* Left fade gradient */}
                <div className="absolute left-0 top-0 w-4 max-[700px]:hidden h-full bg-gradient-to-r from-[var(--richblack-900)] to-transparent z-10 pointer-events-none"></div>
                <Swiper
                spaceBetween={20}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={1}
                
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                    1300: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    }
                } as SwiperOptions["breakpoints"]}
                draggable={true}
                modules={[Autoplay]}
                className="w-full mx-auto"
                >
                    {reviewsData.map((review, index) => {
                        const src = `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(review.user.name)}`;
                        return (
                            <SwiperSlide key={index} className="w-1/4 max-[1300px]:w-1/3 max-[700px]:w-1/2 max-[640px]:w-full flex flex-col p-3 gap-2 h-[200px] bg-[var(--richblack-800)]">
                                <div className="w-full h-fit flex gap-3 items-center justify-center">
                                    <div className="w-[36px] h-[36px] rounded-full">
                                        <Image src={src} alt="profile"
                                        width={36} height={36} className="rounded-full"/>
                                    </div>
                                    <div className="w-full h-max flex flex-col">
                                        <p className="w-full h-fit text-start font-semibold
                                        text-sm leading-5.5 text-[var(--richblack-5)]">
                                            {review.user.name}
                                        </p>
                                        <p className="w-full h-fit text-start font-medium
                                        text-xs leading-5 tracking-normal text-[var(--richblack-600)]">
                                            {review.user.email}
                                        </p>
                                    </div>
                                </div>
                                <p className="w-full text-[var(--richblack-25)] font-medium text-xs leading-5 line-clamp-3">
                                    {review.review}
                                </p>
                                <div className="w-full h-fit gap-2 flex items-center">
                                    <p className="w-fit h-fit font-semibold tracking-normal text-sm leading-5.5 text-[var(--yellow-100)]">
                                        {review.rating}
                                    </p>
                                    <Rating
                                    value={review.rating}
                                    size="large"
                                    readOnly
                                    precision={0.5}
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
                {/* Right fade gradient */}
                <div className="absolute right-0 top-0 w-4 max-[700px]:hidden h-full bg-gradient-to-l from-[var(--richblack-900)] to-transparent z-10 pointer-events-none"></div>
            </div>
            
        </div>
    </div>
  )
}

export default Reviews;