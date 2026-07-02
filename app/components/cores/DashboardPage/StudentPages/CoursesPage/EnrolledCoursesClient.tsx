"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/app/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';
import React from 'react'
import CourseStudentData from './CourseStudentData';

const EnrolledCoursesClient: React.FC = () => {
    const path = usePathname();
    return (
        <main className='w-full h-full'>
            <header className='w-full h-fit flex py-6 pr-[120px] pl-6 gap-6'>
                <div className='w-full h-fit flex flex-col gap-3'>
                    <Breadcrumb className='w-full h-fit flex gap-2'>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className='text-[var(--richblack-300)]
                                text-sm leading-5.5 font-normal tracking-normal hover:text-[var(--yellow-50)]'>Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className='text-[var(--richblack-600)]'>
                                /
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/dashboard" className='text-[var(--richblack-300)]
                                text-sm leading-5.5 font-normal tracking-normal hover:text-[var(--yellow-50)]'>Dashboard</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className='text-[var(--richblack-600)]'>
                                /
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink href={`/dashboard/${path.split("/")[2]}`}
                                className='capitalize font-medium text-sm leading-5.5 tracking-normal
                                text-[var(--yellow-50)] hover:text-[var(--yellow-5)]'>{path.split("/")[2].split("-").join(" ")}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <p className='w-fit h-fit text-3xl leading-[38px] font-medium tracking-normal text-[var(--richblack-5)] capitalize'>
                        {path.split("/")[2].split("-").join(" ")}
                    </p>
                </div>
            </header>
            <CourseStudentData/>
        </main>
    )
}

export default EnrolledCoursesClient;