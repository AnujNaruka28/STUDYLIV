"use client"
import { BsArrowRight } from "react-icons/bs";
import CTAButton from "../../common/CTAButton";
import React from "react";
import HighLightedText from "../../common/HighLightedText";
import Explore from "./Explore";
import AnimatedCodeBlock from "./AnimatedCodeBlock";
import { inter } from "@/app/layout";
import TimeLine from "./TimeLine";
import Image from "next/image";
import TimeLineImage from "@/public/assets/Images/TimelineImage.png";

const HeroSection: React.FC = () => {
  return (
    <div className='bg-[var(--richblack-900)] h-full w-full'>

      {/* Section 1 */}
      <div className={`w-11/12 mx-auto flex flex-col min-[900px]:justify-center min-[700px]:items-center max-[900px]:px-4 max-[330px]:px-2 max-[900px]:py-8 ${inter.variable} font-sans`}>

        <div className='min-[900px]:w-[913px] w-[360px] max-[360px]:w-[300px] h-[212px] max-[400px]:h-[400px] min-[900px]:h-[276px]
        flex flex-col justify-center min-[660px]:items-center gap-[38px] mb-[120px]'>

          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-[235px] h-[44px]
          text-[var(--richblack-200)] font-medium text-[16px] leading-6 flex justify-center items-center
          rounded-[100px] shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset] mt-[124px]">
            <p>Become an Instructor</p>
            <BsArrowRight className="w-4 h-4"/>
          </button>

          <div className="min-[900px]:w-full w-[360px] max-[376px]:w-[300px] min-[900px]:h-[108px] h-[212px] flex flex-col gap-4 items-center">
            <p className="font-semibold text-4xl leading-11 tracking-[-2%]">
              Empower Your Future with <HighLightedText text="Coding Skills"/>
            </p>
            <div className="min-[900px]:w-[860px] max-[376px]:w-[220px] w-[360px] font-medium text-[16px] leading-6 text-[var(--richblack-300)] mx-auto
            max-[400px]:mb-[60px] max-[376px]:mr-auto max-[376px]:ml-0">
              With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a
              <p className="min-[900px]:mx-[30px]">
                wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
              </p>
            </div>
          </div>

          <div className="w-[308px] h-fit flex gap-6 max-[330px]:gap-2 max-[376px]:mt-[100px]">
            <CTAButton text="Learn More" active={true} className=" w-[135px] "/>
            <CTAButton text="Book a Demo" active={false} className=" w-[149px] "/>
          </div>
        </div>

        <div className="min-[1040px]:w-[1035px] min-[1040px]:h-[515px] max-[900px]:mt-20 w-[360px] max-[376px]:w-[220px]
        h-[171px] mx-3 my-7 relative">
          <div className="absolute firstBgGrid min-[1040px]:w-[992px] min-[1040px]:h-[295px] w-[300px] max-[376px]:w-[180px] max-[376px]:h-[24px] h-[60px] rounded-[100%] -top-4 max-[1040px]:-top-2 -left-10 max-[1040px]:-left-3 opacity-40 filter-[blur(60px)]"/>
          <div className=" w-full h-full min-[1040px]:shadow-[20px_20px_0px_0px_#F5F5F5]
          shadow-[8px_8px_0px_0px_#F5F5F5] absolute">
            <video autoPlay loop muted playsInline preload="none" className="object-cover w-full h-full">
              <source src="https://res.cloudinary.com/dl3kraaox/video/upload/v1755017924/pexels-tea-oebel-6804109_ovfljo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="w-full h-fit flex flex-col items-center">
          <AnimatedCodeBlock
            heading={<p>Unlock your <HighLightedText text="coding potential"/> with our online courses.</p>}
            description="Our courses are designed and taught by industry experts who
                        have years of experience in coding and are passionate about
                        sharing their knowledge with you."
            active={true}
            toggleFlex={true}
            btntext1={<div className="flex items-center justify-center gap-2">Try it Yourself <p className="h-full my-auto"> <BsArrowRight/> </p>  </div>}
            btntext2="Learn More"
            gradientToggle={true}
            codeBlock={` <!DOCTYPE html>\n<html>\n<head>\n<title> Example </title>\n<link rel="stylesheet" href="styles.css">\n</head>\n<body>\n<h1> <a href="/">Header</a> </h1>\n<nav><a href="one/">One</a> </nav>\n</body>\n</html>`}
          />
          <AnimatedCodeBlock
            heading={<p>Start <HighLightedText text="coding"/> <br/>
                      <HighLightedText text=" in seconds"/>
            </p>}
            description="Go ahead, give it a try. Our hands-on learning environment
                        means you'll be writing real code from your very first lesson."
            active={true}
            toggleFlex={false}
            btntext1={<div className="flex items-center justify-center gap-2">Continue Lesson <p className="h-full my-auto"> <BsArrowRight/> </p> </div>}
            btntext2="Learn More"
            gradientToggle={false}
            codeBlock={`import React from "react";\nimport CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
          />
        </div>

      </div>
       <Explore/>
      {/* Section 2 */}
      <div className=" w-full h-[320px] bg-[var(--pure-greys-5)] framebg flex justify-center items-center">
        <div className="w-[388px] h-[80px] flex items-center justify-center gap-6 pt-8
        max-[400px]:gap-3 max-[400px]:pt-6 max-[400px]:w-[300px]">
          <CTAButton text={
            <div className="flex items-center justify-center gap-2 font-bold">Explore Full Catalog <p className="h-full my-auto">  <BsArrowRight/> </p></div>
          } active={true} className="w-[227px] max-[400px]:w-[160px] max-[400px]:text-[10px] border-none"/>
          <CTAButton text={
            <div className="font-bold"> Learn More </div>
          }
          active={false} className="w-[137px] max-[400px]:w-[120px] max-[400px]:text-[10px]"
          />
        </div>
      </div>
      <div className="w-full h-[921px] max-[1025px]:h-[1600px] bg-[var(--pure-greys-5)] pt-[90px] pb-[90px] pl-[120px] pr-[120px] gap-[52px] flex flex-col items-center
      max-[800px]:px-4 max-[800px]:py-8 max-[800px]:gap-[64px] max-[431px]:h-[1500px]">
        <div className=" w-[1200px] max-[1025px]:w-[1010px] max-[599px]:flex-col max-[599px]:ml-auto max-[599px]:mt-15 max-[321px]:mt-0
        h-[144px] max-[999px]:w-[600px] max-[750px]:w-[420px] max-[340px]:w-[300px] flex gap-[12px] justify-between max-[1025px]:justify-center
        max-[800px]:justify-normal">
          <p className={`w-[45%] h-[88px] max-[999px]:h-fit max-[599px]:w-[80%] text-[var(--richblack-900)] font-semibold font-sans ${inter.variable} text-4xl max-[800px]:text-3xl max-[800px]:leading-[38px] max-[750px]:tracking[0%] leading-11 tracking-[-2%]`}>
            Get the skills you need for a <HighLightedText text="job that is in demand."/>
          </p>
          <div className="w-[50%]  max-[599px]:w-[80%] flex flex-col gap-3">
            <p className="w-full h-[48px] max-[999px]:h-fit text-base font-medium leading-[24px] text-[var(--richblack-700)]">
              The modern StudyNotion is the dictates its own terms. Today, to be a <br/>
              competitive specialist requires more than professional skills.
            </p>
            <CTAButton
              text= {
                <div>Learn More</div>
              }
              active={true}
              className="w-[137px] border-none mt-9"
            />
          </div>
        </div>
        
        <div className=" w-[1200px] h-[545px] max-[1260px]:w-[62%] max-[1025px]:w-[600px] max-[600px]:h-[1400px] flex gap-[76px]
        max-[541px]:flex-col max-[431px]:gap-[90px] max-[551px]:items-center">
          <TimeLine/>
          <div className="w-[60%] h-full relative">
            <div className="w-[714px] max-[1260px]:w-full max-[321px]:w-[80%] max-[321px]:mx-auto h-[545px] max-[431px]:h-[470px] relative">
              <div className="w-[749px] max-[1260px]:w-[449px] h-[479px] max-[1260px]:h-[279px] absolute timelinegradBg rounded-[100%] opacity-60 filter-[blur(34px)]
              max-[1025px]:w-[224px] max-[1025px]:h-[140px] max-[1025px]:filter-[blur(17px)]
              max-[431px]:w-full max-[431px]:h-full"/>
              <div className="w-full h-fit max-[431px]:h-full absolute shadow-[20px_20px_0px_0px_#FFFFFF] max-[431px]:shadow-none
              ">
                <Image src={TimeLineImage}
                  width={714} height={545} alt="TimeLineImage" className="max-[431px]:h-[100%] max-[431px]:object-cover"/>
              </div>
            </div>
            <div className="w-[511px] h-[128px] max-[1260px]:w-[440px] max-[1025px]:flex-col max-[1025px]:w-[180px] max-[1025px]:h-[240px]
            max-[1025px]:p-[21px] max-[1260px]:top-[360px] max-[1260px]:right-[100px] absolute translate-x-[20%] -translate-y-[50%]
            flex p-[42px] bg-[var(--caribbeangreen-700)] font-sans justify-center max-[1025px]:justify-around
            max-[1025px]:right-[60px] max-[1025px]:top-[300px]">
              <div className="w-[161px] max-[1025px]:w-[140px] h-[44px] flex gap-6 max-[1025px]:gap-4">
                <p  className="font-bold text-4xl leading-11 tracking-[-2%] text-white"> 10 </p>
                <p  className="font-medium text-[14px] leading-[22px] text-[var(--caribbeangreen-300)]"> YEARS EXPERIENCES </p>
              </div>
              <div className= "w-11 h-0 border border-solid border-[var(--caribbeangreen-500)] rotate-90 min-[1026px]:my-auto max-[1025px]:mx-auto max-[1025px]:rotate-0"/>
              <div className="w-[162px] max-[1025px]:w-[140px] h-[44px] flex gap-6 max-[1025px]:gap-4">
                <p  className="font-bold text-4xl leading-11 tracking-[-2%] text-white"> 250 </p>
                <p  className="w-[68px] font-medium text-[14px] leading-[22px] text-[var(--caribbeangreen-300)]"> TYPES OF COURSES </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroSection;
