"use client"
import { ACCOUNT_TYPE } from '@/lib/constants';
import { sidebarLinks } from '@/public/assets/data/dashboard-links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = () => {
    const userType = "Student";
    const pathname = usePathname();

    const isActive = (path: string) => path === pathname;

    return (
        <div className='w-[15%] h-screen bg-[var(--richblack-800)] flex flex-col py-[30px] gap-2.5
            border border-solid border-t-0 border-[var(--richblack-700)]'>

            {sidebarLinks.map((btn, index) => (
                <React.Fragment key={index}>
                    {/* Divider for specific id */}
                    {btn.id === 9 && (
                        <div className='w-full h-2 py-1 px-4'>
                            <div className='w-full border border-[var(--richblack-600)]'/>
                        </div>
                    )}

                    {/* Render only if userType matches or it's common */}
                    {(userType === btn.type || btn.type === ACCOUNT_TYPE.COMMON) && (
                        <Link
                            href={btn.path}
                            className={`w-full h-[40px] flex items-center justify-start gap-3 px-[24px] py-2 text-[16px] font-medium cursor-pointer
                            border-r-2 border-none group
                            ${isActive(btn.path)
                            ? 'border-[var(--yellow-50)] border-solid  bg-[var(--yellow-800)]'
                            : 'bg-transparent hover:border-solid hover:bg-[var(--yellow-800)] hover:border-[var(--yellow-50)]'
                        }`}
                        >
                            <btn.icon
                                className={`w-4 h-4 group-hover:text-[var(--yellow-50)] ${
                                isActive(btn.path)
                                    ? 'text-[var(--yellow-50)]'
                                    : 'text-[var(--richblack-300)]'
                                }`}
                            />
                            <p
                                className={`w-fit h-fit group-hover:text-[var(--yellow-50)] text-sm font-medium leading-[22px] tracking-normal ${
                                isActive(btn.path)
                                    ? 'text-[var(--yellow-50)]'
                                    : 'text-[var(--richblack-300)]'
                            }`}
                            >
                                {btn.name}
                            </p>
                        </Link>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Sidebar;
