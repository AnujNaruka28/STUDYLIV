"use client"

import React from 'react'
import {useForm,FormProvider} from "react-hook-form"
import CustomForm from '../../common/CustomForm'
export type FormValues = {
    firstName: string,
    lastName: string,
    email: string,
    countryCode: string,
    phoneNumber: number | null,
    message: string
}
const ContactForm:React.FC = () => {
    const methods = useForm<FormValues>({
        defaultValues: {
            firstName: "",lastName: "", email: "",
            countryCode: "91", phoneNumber: null, message: ""
        },
        mode: "onSubmit"
    });
    return (
    <div className='w-full h-fit mx-auto'>
        <FormProvider {...methods}>
            <CustomForm />
        </FormProvider>
    </div>
    )
}

export default ContactForm;