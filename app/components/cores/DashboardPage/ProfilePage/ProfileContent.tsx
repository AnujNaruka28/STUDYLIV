import CTAButton from '@/app/components/common/CTAButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import EditIcon from './EditIcon';
import { BaseUserInput } from '../../../../../../server/dist/validations/base.validation';


export const CardProfile = ({children,classCustom,activeCenter = false}: {children: React.ReactNode,classCustom?:string,activeCenter?:boolean}) => {
    return <div className={`w-full h-fit flex gap-5 rounded-[8px] p-6 ${(activeCenter) ? '' : 'items-center-safe'}
            border border-solid border-[var(--richblack-700)] bg-[var(--richblack-800)] ${classCustom || ''}`}>
                {children}
            </div>
}
const ProfileContent:React.FC = () => {
    const src = `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent("AnujNaruka")}`;
    const userData: BaseUserInput = {
        firstName: "Anuj",
        lastName: "Naruka",
        email: "anujnaruka28@gmail.com",
        phoneNumber: "9120089990"
    }
    const iterateUser = Object.entries(userData).map(([key,value]) => (
        {
            feild: key,
            data: value
        }
    ))
    return (
    <main className='w-full h-fit flex flex-col items-center gap-[44px] pr-[360px] pl-[120px]'>
        <div className='w-full h-fit gap-5 flex flex-col'>
            <CardProfile>
                <div className='w-[90%] h-fit flex gap-6 items-center-safe'>
                    <Image src={src} alt='' width={78} height={78}
                    className='rounded-[100%]' />
                    <div className='w-[80%] h-fit flex flex-col gap-0.5'>
                        <header className='text-[var(--richblack-5)] text-lg leading-6.5 font-semibold'>
                            Anuj Nair
                        </header>
                        <p className='text-[var(--richblack-300)] text-sm font-normal leading-5.5'>
                            anujnair2003@gmail.com
                        </p>
                    </div>
                </div>
                <CTAButton
                active={true}
                text={
                    <Link href={'/dashboard/settings'} className='flex items-center gap-2'>
                        <EditIcon/>
                        Edit
                    </Link>
                }
                />
            </CardProfile>
            <CardProfile classCustom='flex-col'>
                <div className='w-full h-fit flex gap-5 items-center-safe'>
                    <p className='w-[90%] h-fit font-semibold text-lg leading-6.5 text-[var(--richblack-5)]'>
                        Personal Details
                    </p>
                    <CTAButton
                        active={true}
                        text={
                            <Link href={'/dashboard/settings'} className='flex items-center gap-2'>
                                <EditIcon/>
                                Edit
                            </Link>
                        }
                    />
                </div>
                <div className='w-full h-fit grid grid-cols-2 grid-rows-2 gap-2'>
                    {
                        iterateUser.map((info,index) => (
                            <div className='flex gap-0.5 flex-col' key={index}>
                                <p className='text-sm leading-5.5 font-normal tracking-normal text-[var(--richblack-600)]'>
                                    {info.feild.charAt(0).toUpperCase() + info.feild.slice(1)}
                                </p>
                                <p className={`text-sm leading-5.5 font-medium tracking-normal text-[var(--richblack-5)]
                                ${(info.feild === "email") ? 'text-[var(--richblack-600)]':'text-[var(--richblack-5)]'}`}>
                                    {info.data}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </CardProfile>
        </div>
    </main>
    )
}

export default ProfileContent;