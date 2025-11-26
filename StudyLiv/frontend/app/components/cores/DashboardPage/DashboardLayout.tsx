"use client"

import React from 'react'
import Sidebar from './Sidebar';

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='w-full h-[calc(100vh-56px)] bg-[var(--richblack-900)] flex'>
            <Sidebar/>
            <div className='w-[85%] h-full'>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout;