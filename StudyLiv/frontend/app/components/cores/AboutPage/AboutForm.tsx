"use client"

import React from 'react'
import {useForm,FormProvider} from "react-hook-form"
import CustomForm from '../../common/CustomForm'
import type { FormValues } from '../ContactPage/ContactForm'

const AboutForm:React.FC = () => {
  const methods = useForm<FormValues>({
    defaultValues:{
      firstName: "",lastName: "", email: "",
      countryCode: "91", phoneNumber: null, message: ""
    },
    mode:"onSubmit"
  })
  return (
    <div className='w-full h-fit mx-auto'>
      <FormProvider {...methods}>
        <CustomForm/>
      </FormProvider>
    </div>
  )
}

export default AboutForm;