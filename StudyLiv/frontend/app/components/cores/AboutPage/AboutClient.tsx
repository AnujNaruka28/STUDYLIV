"use client"

import React from "react";
import HighLightedText from "../../common/HighLightedText";
import Image1 from "@/public/assets/Images/aboutus1.webp";
import Image2 from "@/public/assets/Images/aboutus2.webp";
import Image3 from "@/public/assets/Images/aboutus3.webp";
import Image from "next/image";
import MissionGrid from "./MissionGrid";
import SpecialGrid from "./SpecialGrid";
import AboutForm from "./AboutForm";

const AboutClient: React.FC = () => {
    const gridDividerBox : {detail: string,title:string}[] = [
        {
            detail: "5K",
            title: "Active Students"
        },
        {
            detail: "10+",
            title: "Mentors"
        },
        {
            detail: "200+",
            title: "Courses"
        },
        {
            detail: "50+",
            title: "Awards"
        }
    ]
    return (
    <div className="w-full h-full bg-[var(--richblack-900)]">
        {/* Section 1 */}
        <section className="w-full h-fit px-[120px] pt-[80px] max-[768px]:pt-[20px] max-[768px]:px-[16px] flex flex-col justify-center items-center gap-[52px] bg-[var(--richblack-800)]">
            <div className="w-[90%] h-fit flex flex-col gap-[38px] justify-center items-center">
                <div className="w-[82%] max-[769px]:w-full h-fit flex flex-col gap-4 px-[52px] max-[768px]:px-[26px]">
                    <header className="w-full h-fit text-4xl text-center font-semibold max-[400px]:text-2xl max-[400px]:leading-[32px] leading-11 tracking-[-2%]">
                        Driving Innovation in Online Education for a <br />
                        <HighLightedText text="Brighter Future"/>
                    </header>
                    <p className="w-full h-fit font-medium text-base leading-6 text-center tracking-normal text-[var(--richblack-300)]">
                        Studynotion is at the forefront of driving innovation in online education. We&apos;re passionate about creating a
                        brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a
                        vibrant learning community.
                    </p>
                </div>
            </div>
            <div className="w-[90%] h-fit flex gap-6 relative justify-center -mb-[60px] max-[768px]:-mb-[30px]">
                <div className="bgOrangeAbout w-1/2 h-[37px] opacity-74 rounded-[100%] filter-[blur(68px)] absolute"/>
                {
                    [Image1,Image2,Image3].map((image,index) => (
                        <Image key={index} src={image} alt="about-image" width={300} height={300} className="z-5 w-1/3 h-fit"
                        />
                    ))
                }
            </div>
        </section>
        {/* Section 2 */}
        <section className="w-full h-fit border-b py-[90px] px-[120px] max-[768px]:py-[32px] max-[768px]:px-[16px] flex gap-2.5 border-solid border-[var(--richblack-700)]">
            <header className="w-full h-fit text-center font-semibold text-4xl max-[768px]:text-2xl tracking-[-2%] max-[768px]:leading-[32px] leading-[52px] text-[var(--richblack-100)]">
                <span className="text-[var(--richblack-600)] w-[20px] h-[15px]">“</span>
                We are passionate about revolutionizing the way we learn. Our
                innovative platform <HighLightedText text="combines technology"/> , <span className="bg-clip-text from-[#ff512f] to-[#f09819] bg-gradient-to-b text-transparent">expertise</span>, and community to
                create an <span className="bg-clip-text from-[#e65c00] to-[#f9d423] bg-gradient-to-b text-transparent">unparalleled educational experience.</span>
                <span className="text-[var(--richblack-600)] w-[20px] h-[15px]">“</span>
            </header>
        </section>
        {/* Grid Section 1 */}
        <MissionGrid/>
        {/* Grid Divider */}
        <section className="w-full h-fit border-b border-solid border-[var(--richblack-700)] px-[120px] py-[90px] max-[768px]:py-[32px] max-[768px]:px-[16px] flex justify-center items-center max-[514px]:grid max-[514px]:grid-cols-2 max-[514px]:grid-rows-2
        max-[514px]:content-center
        gap-2.5 bg-[var(--richblack-800)]">
            {
                gridDividerBox.map((box,index) => (
                    <div className="flex flex-col gap-3 w-1/4 h-fit text-center justify-center items-center mx-auto" key={index}>
                        <p className="text-[var(--richblack-5)] font-bold text-3xl leading-9.5 tracking-normal">{box.detail}</p>
                        <p className="text-[var(--richblack-500)] font-semibold text-base leading-6 tracking-normal">{box.title}</p>
                    </div>
                ))
            }
        </section>
        {/* Grid Section 2 */}
        <SpecialGrid/>
        {/* Form Section */}
        <section className="w-full h-fit px-[420px] max-[1190px]:px-[210px] max-[760px]:px-[100px] max-[530px]:px-[16px] pt-[90px] flex flex-col gap-[32px] justify-center items-center">
            <div className="w-full h-fit flex flex-col justify-center items-center gap-3">
                <p className="w-full h-fit font-semibold text-4xl leading-11 tracking-[-2%] text-[var(--richblack-5)] text-center">
                    Get in Touch
                </p>
                <p className="w-full h-fit text-base leading-6 tracking-normal font-medium text-[var(--richblack-300)] text-center">
                    We’d love to here for you, Please fill out this form.
                </p>
            </div>
            {/* Form */}
            <AboutForm/>
        </section>
    </div>
    )
}

export default AboutClient;