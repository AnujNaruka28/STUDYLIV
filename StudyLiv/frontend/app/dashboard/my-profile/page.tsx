import DashboardLayout from '@/app/components/cores/DashboardPage/DashboardLayout';
import MyProfileClient from '@/app/components/cores/DashboardPage/ProfilePage/MyProfileClient';
import React from 'react'

const MyProfile = () => {
    return (
        <div className='w-full h-full overflow-hidden'>
            <DashboardLayout>
                <MyProfileClient/>
            </DashboardLayout>
        </div>
    )
}

export default MyProfile;