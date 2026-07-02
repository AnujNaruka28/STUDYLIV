"use client"
import React, { ReactNode } from "react";
import CTAButton from "../../common/CTAButton";
import { TypeAnimation } from "react-type-animation";
import { robotoMono } from "@/app/layout";

interface AnimatedCodeBlockProps {
    heading: ReactNode;
    description: string;
    active: boolean;
    btntext1: string | ReactNode;
    btntext2: string;
    toggleFlex: boolean;
    gradientToggle: boolean;
    codeBlock: string;
}
const AnimatedCodeBlock:React.FC< AnimatedCodeBlockProps > = ({heading,description,active,toggleFlex,btntext1,btntext2,gradientToggle,codeBlock}: AnimatedCodeBlockProps) => {
    return (
    <div className={`w-full min-h-[522px] max-[599px]:mb-[50px] max-[1023px]:min-h-[712px] mt-[30px] pt-[90px] pb-[90px] px-[120px]
    max-[1023px]:py-[32px] max-[1023px]:px-[16px] max-[376px]:px-0 flex ${toggleFlex ? 'flex-row max-[1023px]:flex-col min-[1439px]:gap-x-[93px]' : 'flex-row-reverse min-[1439px]:gap-x-[160px] max-[1023px]:flex-col'}  min-[701px]:items-center justify-between`}>
        <div className="w-full max-w-[486px] max-[599px]:w-full max-[599px]:h-auto h-auto flex flex-col gap-3 max-[599px]:space-y-[10px]">
            <div className="w-full h-auto font-semibold text-4xl leading-11 max-[599px]:text-[30px] max-[599px]:leading-[38px] tracking-[-2%] max-[599px]:tracking-0">
                {heading}
            </div>
            <p className="w-full h-auto text-base leading-[24px] text-[var(--richblack-300)] font-medium
            max-[1371px]:mt-[30px] max-[599px]:mt-[60px]">
                {description}
            </p>
            <div className="flex gap-6 max-[599px]:gap-2 w-full max-w-[338px] h-auto pt-[52px] max-[599px]:w-full">
                <CTAButton text={btntext1} active={active} className={`${toggleFlex ? 'w-[179px] max-[599px]:w-[150px] max-[599px]:text-[13px]' : 'w-[201px] max-[599px]:w-[150px] max-[599px]:text-[11px]'}`} />
                <CTAButton text={btntext2} active={!active} className="w-[135px]"/>
            </div>
        </div>
        <section className="w-full max-[1439px]:h-max max-[376px]:w-full max-[599px]:h-[400px] max-[599px]:mt-[110px] h-fit p-8 flex flex-col gap-0.5 relative max-[700px]:pl-0">

            <div className={` rounded-[100%] left-0 max-[390px]:-left-[50px] opacity-20 filter-[blur(34px)] absolute w-[372px] h-[257px] max-[599px]:w-[272px] max-[599px]:h-[157px] max-[599px]:mt-[110px] top-0  ${gradientToggle? 'codeblock1' : 'codeblock2'}`}/>

            <div className={` ${robotoMono.variable} max-[1439px]:w-full max-[1439px]:h-max max-[1440px]:w-[70%] max-[376px]:w-full max-[599px]:mt-[110px] h-[278px] max-[599px]:h-[400px] code-border p-2 flex gap-2 relative
            `}>

                <div className="flex flex-col justify-center max-[1439px]:h-max my-auto items-center w-[10%] h-full mx-auto font-bold max-[599px]:mt-1.5 text-[14px] max-[426px]:text-[9px] leading-[22px] tracking-[-12%] text-[var(--richblack-400)]">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                </div>
                <div className={`h-full max-[1439px]:w-full w-[90%] font-bold text-[14px] max-[426px]:text-[9px] mt-1.5 leading-[22px] ${gradientToggle ? 'text-[var(--brown-100)]' : 'text-[#12D8FA]'} `}>
                    <TypeAnimation
                    style={{ whiteSpace: 'pre-line', display: 'block' }}
                    sequence={[codeBlock,1000,'']}
                    cursor={true}
                    repeat={Infinity}
                    speed={70}
                    omitDeletionAnimation={true}/>
                </div>
            </div>
        </section>
    </div>
    )
}

export default AnimatedCodeBlock;