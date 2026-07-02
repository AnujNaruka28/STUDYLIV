import DashboardLayout from '@/app/layouts/DashboardLayout';
import SettingClient from '@/app/components/cores/DashboardPage/SettingPage/SettingClient';
import React from 'react'

const Settings = () => {
    return (
        <div className='w-full h-full'>
            <DashboardLayout>
                <SettingClient/>
            </DashboardLayout>
        </div>
    )
}

export default Settings;