import DashboardLayout from '@/app/components/cores/DashboardPage/DashboardLayout';
import EnrolledCoursesClient from '@/app/components/cores/DashboardPage/StudentPages/CoursesPage/EnrolledCoursesClient';
import React from 'react'

const EnrolledCourses = () => {
    return (
        <div className='w-full h-full overflow-hidden'>
            <DashboardLayout>
                <EnrolledCoursesClient/>
            </DashboardLayout>
        </div>
    )
}

export default EnrolledCourses;