
import { SubmitHandler, useFormContext } from 'react-hook-form';
import React from 'react'
import CTAButton from './CTAButton';
import type {FormValues} from "../cores/ContactPage/ContactForm"
import countryCodes from "@/public/assets/data/countrycode.json"
const CustomForm = () => {

    const methods = useFormContext<FormValues>();
    const {register,handleSubmit,formState: {errors,isSubmitting} } = methods;
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

    return (
    <form className='w-full h-fit flex flex-col gap-9' method="post" onSubmit={handleSubmit(onSubmit)}>
        <div className='w-[90%] h-fit flex flex-col gap-5 mx-auto'>
            <div className='w-full h-fit justify-center items-center flex max-[426px]:flex-col gap-5 leading-5.5 text-sm text-[var(--richblack-5)] tracking-normal'>
                <label htmlFor="firstName" className='w-1/2 max-[426px]:w-full h-fit flex flex-col gap-1.5 '>
                    <p>
                        First Name
                    </p>
                    <input type="text" placeholder="Enter first name" id='firstName'
                    className="input input-neutral w-full h-fit p-3 rounded-lg shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset]
                    text-base leading-6 font-medium text-[var(--richblack-200)] bg-[var(--richblack-800)] focus:border-[var(--richblack-5)]" required
                    {...register("firstName",{required:"first name is required."})} aria-invalid={!!errors.firstName}/>
                    <span className="text-red-500 text-sm">{errors.firstName?.message}</span>  {/*input-error when error in form */}
                </label>

                <label htmlFor="lastName" className='w-1/2 max-[426px]:w-full h-fit flex flex-col gap-1.5'>
                    <p>
                        Last Name
                    </p>
                    <input type="text" placeholder="Enter last name" id='lastName'
                    className="input input-neutral w-full h-fit p-3 rounded-lg shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset]
                    text-base leading-6 font-medium text-[var(--richblack-200)] bg-[var(--richblack-800)] focus:border-[var(--richblack-5)]" required
                    {...register("lastName",{required:"last name is required."})} aria-invalid={!!errors.lastName}/>
                    <span className="text-red-500 text-sm">{errors.lastName?.message}</span>
                </label>
            </div>

            <label htmlFor="email" className='w-full h-fit flex flex-col gap-1.5'>
                <p className='leading-5.5 text-sm text-[var(--richblack-5)] tracking-normal'>
                    Email Address
                </p>
                <input type="email" placeholder="Enter email address" id='email' className="input input-neutral
                w-full h-fit p-3 rounded-lg shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset] focus:border-[var(--richblack-5)]
                text-base leading-6 font-medium text-[var(--richblack-200)] bg-[var(--richblack-800)]" required
                {...register("email",{required:"email is required."})} aria-invalid={!!errors.email}/>
                <span className="text-red-500 text-sm">{errors.email?.message}</span>
            </label>

            <label htmlFor="phoneNumber" className='w-full h-fit flex flex-col gap-[20px]'>
                <p className='leading-5.5 text-sm text-[var(--richblack-5)] tracking-normal'>
                    Phone Number
                </p>
                {/* Country Code Drop Down */}
                <div className='w-full h-fit flex gap-5 max-[380px]:flex-col'>
                    <div tabIndex={0} className="w-[15%] max-[768px]:w-[30%] max-[380px]:w-full max-[455px]:w-[45%] h-fit shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset] focus:border-[var(--richblack-5)]
                    rounded-lg p-3 flex gap-3 bg-[var(--richblack-800)] cursor-pointer
                    text-base leading-6 font-medium text-[var(--richblack-200)]"
                    >
                        <select className='cursor-pointer overflow-hidden w-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[var(--richblack-700)] [&::-webkit-scrollbar-thumb]:bg-[var(--richblack-600)]' defaultValue={"+91"} {...register("countryCode")} aria-invalid={!!errors.countryCode}>
                        {
                            countryCodes.map((data,index) => (
                                <option key={index} value={data.code} defaultValue={"+91"} className='overflow-hidden bg-[var(--richblack-800)] flex'>
                                    {data.code}
                                    <p>{data.country}</p>
                                </option>
                            ))
                        }
                        </select>
                    </div>
                    {/* Number Input Field */}
                    <input type="phone" placeholder="12345 67890" id='phoneNumber'
                    className="input input-neutral w-[85%] max-[380px]:w-full max-[768px]:w-[70%] max-[455px]:w-[55%] h-fit p-3 rounded-lg shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset]
                    text-base leading-6 font-medium text-[var(--richblack-200)] bg-[var(--richblack-800)] focus:border-[var(--richblack-5)]"
                    {...register("phoneNumber")} aria-invalid={!!errors.phoneNumber}/>
                </div>
                <span className="text-red-500 text-sm">
                    {errors.countryCode?.message || errors.phoneNumber?.message}
                </span>
            </label>

        </div>

        <div className='w-[90%] h-[150px] mx-auto'>
            <label htmlFor="message" className='w-full h-full flex flex-col gap-1.5'>
                <p className='leading-5.5 text-sm w-full h-fit text-[var(--richblack-5)] tracking-normal'>
                Message
                </p>
                <textarea className="border-none w-full h-full shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset] focus:border-[var(--richblack-5)]
                rounded-lg p-3 flex gap-3 bg-[var(--richblack-800)] text-base leading-6 font-medium text-[var(--richblack-200)] appearance-none" placeholder="Message" id="message"
                {...register("message",{required:"message is required."})} aria-invalid={!!errors.message}/>
                <span className="text-red-500 text-sm">{errors.message?.message}</span>
            </label>
        </div>
        <CTAButton text={(isSubmitting)? "Sending": "Send Message"} active={true} className='w-[90%] mx-auto' type={"submit"} disable={isSubmitting}/>
    </form>
  )
}

export default CustomForm;