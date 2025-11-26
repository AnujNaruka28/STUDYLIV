"use client"
import Link from 'next/link';
import React from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import ProfileDetails from './ProfileDetails';

const SettingClient:React.FC = () => {
    return (
        <main className='w-full h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[var(--richblack-700)] [&::-webkit-scrollbar-thumb]:bg-[var(--richblack-600)]'>
            <header className='w-full h-fit flex py-6 pr-[120px] pl-6 gap-6'>
                <div className='w-full h-fit flex flex-col gap-3'>
                    <Link href={'/dashboard/my-profile'} className='w-full h-fit flex items-center-safe gap-1 hover:text-[var(--richblack-200)]
                    text-[var(--richblack-300)]'>
                        <MdArrowBackIosNew className='w-[18px] h-[18px]'/>
                        <p className='w-fit h-fit font-normal text-sm leading-5.5 tracking-normal'>
                            Back
                        </p>
                    </Link>
                    <p className='w-full h-fit text-3xl leading-[38px] font-medium tracking-normal text-[var(--richblack-5)] capitalize'>
                        Edit Profile
                    </p>
                </div>
            </header>
            <ProfileDetails/>
        </main>
    )
}

export default SettingClient;