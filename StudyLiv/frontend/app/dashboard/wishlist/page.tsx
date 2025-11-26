import DashboardLayout from '@/app/components/cores/DashboardPage/DashboardLayout';
import WishlistClient from '@/app/components/cores/DashboardPage/StudentPages/Wishlist/WishlistClient';
import React from 'react'

const Wishlist = () => {
    return (
        <div className='w-full h-full overflow-hidden'>
            <DashboardLayout>
                <WishlistClient/>
            </DashboardLayout>
        </div>
    )
}

export default Wishlist;