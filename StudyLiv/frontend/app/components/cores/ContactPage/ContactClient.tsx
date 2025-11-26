"use client"

import React from 'react'
import { IoIosChatboxes } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import ContactForm from './ContactForm';

interface contactinfo {
    icon: React.ReactNode,
    heading: string,
    info1: string,
    info2: string
}
const ContactClient:React.FC = () => {

    const contactInfo: contactinfo[] = [
        {
            icon: <IoIosChatboxes className='w-full h-full'/>,
            heading: "Chat on us",
            info1: "Our friendly team is here to help.",
            info2: "info@studyliv.com"
        },
        {
            icon: <MdLocationPin className='w-full h-full'/>,
            heading: "Visit us",
            info1: "Come and say hello at our office HQ.",
            info2: "Noida Sector 63, H-42"
        },
        {
            icon: <BsTelephoneFill className='w-full h-full'/>,
            heading: "Call us",
            info1: "Mon - Fri From 8am to 5pm",
            info2: "+91 92177 54663"
        }
    ]
    return (
    <div className='w-full h-full bg-[var(--richblack-900)] py-[90px] px-[120px] max-[1014px]:px-[60px] max-[1014px]:py-[45px] flex max-[886px]:flex-col gap-[52px]'>
        {/* Contact Info */}
        <section className='w-[38%] max-[886px]:w-full h-fit flex flex-col gap-6 rounded-xl p-6 bg-[var(--richblack-800)]'>
            {
                contactInfo.map((data,index) => (
                    <div key={index} className='w-full h-fit flex max-[330px]:flex-col gap-[9px] p-3'>
                        <div className='w-[5%] max-[550px]:w-[10%] max-[424px]:w-[15%] max-[330px]:w-full h-fit fill-[var(--richblack-100)] my-auto'>{data.icon}</div>
                        <div className='w-[95%] max-[550px]:w-[90%] max-[424px]:w-[85%] max-[330px]:w-full h-fit flex flex-col gap-0.5 items-start'>
                            <header className='w-full h-fit font-semibold text-lg leading-6.5 text-[var(--richblack-5)] tracking-normal'>
                                {data.heading}
                            </header>
                            <p className='w-full h-fit font-medium text-sm leading-5.5 text-[var(--richblack-200)] tracking-normal'>
                                {data.info1}
                            </p>
                            <p className='w-full h-fit font-semibold text-sm leading-5.5 text-[var(--richblack-200)] tracking-normal'>
                                {data.info2}
                            </p>
                        </div>
                    </div>
                ))
            }
        </section>
        {/* Contact Form */}
        <section className='w-[62%] max-[886px]:w-full h-fit flex flex-col border border-solid border-[var(--richblack-600)]
        rounded-xl p-[52px] max-[550px]:p-[26px] gap-[32px] items-center justify-center bg-transparent'>
            <div className='w-[90%] h-fit flex flex-col gap-3 items-start'>
                <header className='w-full h-fit text-[var(--richblack-5)] max-[455px]:text-2xl max-[455px]:leading-6 font-semibold tracking-[-2%] leading-11 text-4xl'>
                    Got a Idea? We’ve got the skills.
                    Let’s team up
                </header>
                <p className='w-full h-fit text-[var(--richblack-300)] font-medium tracking-normal text-base leading-6'>
                    Tall us more about yourself and what you’re got in mind.
                </p>
            </div>
            <ContactForm/>
        </section>
    </div>
  )
}

export default ContactClient;