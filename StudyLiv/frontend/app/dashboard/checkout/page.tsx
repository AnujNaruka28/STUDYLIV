import React from 'react'
import DashboardLayout from '../../components/cores/DashboardPage/DashboardLayout';
import CheckOut from '../../components/common/CheckOut';

const Checkout = () => {
    return (
        <div className='w-full h-full overflow-hidden'>
            <DashboardLayout>
                <CheckOut/>
            </DashboardLayout>
        </div>
    )
}

export default Checkout;