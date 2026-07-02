"use client"

import Link from "next/link";
import { ReactElement } from "react";
import { RiTwitterXFill, RiYoutubeFill, RiMetaFill, RiGoogleFill } from "react-icons/ri";
import { footerData } from "@/public/assets/data/footer-links";
import sLogo from "@/public/assets/Logo/Logo-Small-Light.png";
import Image from "next/image";
interface Media {
  logo: ReactElement;
  to: string;
}

interface FooterItem {
  name: string;
  to: string;
}

export interface FooterSection {
  heading: string;
  subheadings: FooterItem[];
}

const Footer = () => {
    const socialMediaLinks: Media[] = [
    {
      logo: <RiMetaFill className="w-[19.5px] h-[19.43px] text-[var(--richblack-400)]" />,
      to: "https://www.facebook.com/studyliv0/"
    },
    {
      logo: <RiGoogleFill className="w-[19.5px] h-[19.43px] text-[var(--richblack-400)]" />,
      to: "https://www.studyliv.com/"
    },
    {
      logo: <RiTwitterXFill className="w-[19.5px] h-[19.43px] text-[var(--richblack-400)]" />,
      to: "https://x.com/studyliv0"
    },
    {
      logo: <RiYoutubeFill className="w-[19.5px] h-[19.43px] text-[var(--richblack-400)]" />,
      to: "https://www.youtube.com/studyliv0"
    },
  ];

    return (
        <div className="w-full h-fit border-t-[1px] border-solid border-t-[var(--richblack-600)] py-[52px] px-[120px] max-[1025px]:px-[60px] max-[571px]:px-[40px] max-[400px]:px-[20px] max-[1025px]:py-[32px] max-[571px]:py-[24px] max-[400px]:py-[20px] flex flex-col gap-8
        bg-[var(--richblack-800)]">

            <div className="w-[83.4%] h-fit flex max-[1244px]:grid max-[1244px]:grid-cols-2 max-[571px]:grid-cols-1 gap-[52px] justify-center mx-auto relative max-[801px]:pb-[120px]">
                {footerData.map((sectionGroup, groupIndex) => (
                    <div key={groupIndex}>
                        {groupIndex === Math.floor(footerData.length / 2) - 1 && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-[var(--richblack-700)] max-[571px]:hidden"/>
                        )}
                        
                        <div className={`flex gap-3 w-full ${groupIndex < Math.floor(footerData.length / 2) ? (groupIndex === 0 ? '' : 'flex-col') : 'flex-col'}`}>
                            {sectionGroup.map((section, sectionIndex) => (
                                <div key={sectionIndex} className={`w-full ${groupIndex === (footerData.length/2)-1 && sectionIndex === 0 ? 'mb-[14px]' : 'h-full'} gap-3 flex flex-col`}>
                                    {groupIndex === 0 && sectionIndex === 0 && (
                                      <div className="w-full h-[32px] text-2xl font-bold leading-6 text-white flex items-center gap-2 mb-4">
                                        <Image src={sLogo} alt="Study Liv" className="w-[24px] h-[24px] object-contain my-auto" />
                                        <p className="text-white my-auto">Study Liv</p>
                                      </div>
                                    )}
                                    <p className="w-full h-[24px] text-base font-semibold leading-6 text-[var(--richblack-100)]">
                                        {section.heading}
                                    </p>

                                    <div className={`${groupIndex === footerData.length-1 && sectionIndex === 0 ? 'h-[84px]' : 'h-[29.3%]'} w-full flex flex-col gap-2`}>
                                        {section.subheadings.map((item, itemIndex) => (
                                            <Link
                                                href={item.to}
                                                className="w-full h-[26.9%] font-normal text-sm leading-5.5 text-[var(--richblack-400)]"
                                                key={itemIndex}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    {groupIndex === 0 && sectionIndex === 0 && (
                                        <div className="w-[75.9%] h-[51.2%] gap-3 flex">
                                            {socialMediaLinks.map((element, index) => (
                                                <Link href={element.to} key={index} className="w-6 h-6">
                                                    {element.logo}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-[83.4%] h-0 border-solid border border-[var(--richblack-700)] mx-auto"/>

            <div className="w-[83.4%] h-[3%] flex gap-3 mx-auto max-[802px]:flex-col">

              <div className="w-[68%] h-full flex gap-2 max-[802px]:w-full max-[802px]:justify-center">
                {[{title:"Privacy Policy",to:"/privacy"},{title:"Cookie Policy",to:"/cookies"},{title:"Terms",to:"/terms"}].map((item,index) => (
                  <div key={index} className="w-fit h-full flex items-center">
                    <Link href={item.to} className="text-sm max-[441px]:text-[11px] font-medium leading-5.5 text-[var(--richblack-300)]">
                      {item.title}
                    </Link>
                    {index !== 2 && <p className="text-sm font-medium leading-5.5 text-[var(--richblack-700)] mx-2">|</p>}
                  </div>
                ))}
              </div>
              
              <p className="w-[32%] h-full text-end flex text-sm font-medium leading-5.5 text-[var(--richblack-300)] max-[802px]:w-full max-[802px]:justify-center max-[441px]:text-[11px]">
                Copyright © 2025 Study Liv. All rights reserved.
              </p>

            </div>
        </div>
    );
}

export default Footer;