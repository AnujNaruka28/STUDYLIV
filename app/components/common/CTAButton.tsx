"use client"

import { inter } from "@/app/layout";
import React, { ReactNode } from "react";

type CTAProps = {
  active?: boolean;
  text: string | ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
  disable?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const CTAButton:React.FC<CTAProps> = ({ active, text, className, type, disable, onClick }: CTAProps) => {
  return (
    <button type={type} disabled={disable} onClick={onClick} className={`btn h-12 rounded-lg pt-3 pb-3 px-6 py-6 font-medium text-[16px] leading-6
    btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl ${inter.variable} font-sans
    ${active ? 'bg-[var(--yellow-50)] shadow-[-2px_-2px_0px_0px_#FFFFFF82_inset] text-[var(--richblack-900)] border-none'
    :'bg-[var(--richblack-800)] shadow-[-2px_-2px_0px_0px_#FFFFFF2E_inset] text-[var(--richblack-5)] border-none'} ${className}`}
    >

      {text}
    </button>
  )
}

export default CTAButton;