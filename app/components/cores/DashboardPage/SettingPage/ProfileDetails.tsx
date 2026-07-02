import React, { useState } from 'react'
import { CardProfile } from '../ProfilePage/ProfileContent';
import Image from 'next/image';
import CTAButton from '@/app/components/common/CTAButton';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/app/components/ui/popover';
import CalendarIcon from './CalendarIcon';
import { Calendar } from '@/app/components/ui/calendar';
import { RadioGroup, RadioGroupItem } from '@/app/components/ui/radio-group';
import countryCodes from '@/public/assets/data/countrycode.json';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { HiTrash } from "react-icons/hi";

const ProfileDetails:React.FC = () => {
    const src = `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent("AnujNaruka")}`;
    const [date, setDate] = useState<Date|undefined>(undefined);
    const [open, setOpen] = useState<boolean>(false);
    const [gender, setGender] = useState<string>('male');
    const [showCurrentPassword, setShowCurrentPassword] = useState<boolean>(false);
    const [showChangePassword, setShowChangePassword] = useState<boolean>(false);
    return (
        <main className='w-full h-fit flex flex-col items-center gap-[44px] pr-[360px] pl-[120px] pb-[120px]'>
            <div className='w-full h-fit flex flex-col gap-5'>
                <CardProfile>
                    <div className='w-[10%] h-fit'>
                        <Image src={src} alt='' width={78} height={78}
                        className='rounded-[100%]' />
                    </div>
                    <div className='w-[90%] h-fit flex flex-col gap-3'>
                        <p className='w-full h-fit text-[var(--richblack-25)]
                        leading-6 text-base font-medium tracking-normal'>
                            Change Profile Picture
                        </p>
                        <div className='w-full h-fit flex gap-3'>
                            <CTAButton active={true} text={'Change'}
                            className='shadow-[-0.5px_-1.5px_0px_0px_#0000001F_inset] w-[15%] h-[36px]
                            py-1.5 px-4.5 rounded-[8px] hover:bg-[var(--yellow-100)]'/>
                            <button
                            className='w-[15%] h-[36px] text-base font-medium leading-6 text-center tracking-normal text-[var(--richblack-50)]
                            cursor-pointer flex justify-center-safe items-center-safe py-1.5 px-4.5 rounded-[8px] shadow-none
                            bg-[var(--richblack-700)] hover:bg-[var(--richblack-600)] border border-[var(--richblack-600)]'>
                                Remove
                            </button>
                        </div>
                    </div>
                </CardProfile>
                <CardProfile activeCenter={true} classCustom='flex-col'>
                    <header className='font-semibold text-left text-lg leading-6.5 tracking-normal text-[var(--richblack-5)]'>
                        Profile Information
                    </header>
                    <div className='w-full h-fit flex gap-6'>
                        <div className='w-[50%] h-fit flex flex-col gap-1.5'>
                            <Label htmlFor='display-name' className='w-full h-fit text-[var(--richblack-5)]'>
                                Display Name
                            </Label>
                            <Input id='display-name' type='text' placeholder='Enter your display name'
                            className='w-full h-fit text-[var(--richblack-200)] border-none p-3 shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset] rounded-[8px] leading-6 font-medium'/>
                            <p className='w-full h-fit text-[var(--richblack-500)] text-xs font-normal leading-5'>
                                Name entered above will be used for all issued certifies.
                            </p>
                        </div>
                        <div className='w-[50%] h-full flex flex-col gap-1.5'>
                            <Label htmlFor='profession' className='w-full h-fit text-[var(--richblack-5)]'>
                                Profession
                            </Label>
                            <Select>
                                <SelectTrigger className='w-full h-full border-none p-3 shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset] rounded-[8px] leading-6 font-medium'>
                                    <SelectValue className='w-full h-full p-3 placeholder:text-[var(--richblack-200)] bg-[var(--richblack-700)]' placeholder='Select a profession'/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value='developer'>Developer</SelectItem>
                                        <SelectItem value='designer'>Designer</SelectItem>
                                        <SelectItem value='tester'>Tester</SelectItem>
                                        <SelectItem value='other'>Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className='w-full h-fit flex gap-6'>
                        <div className='w-[50%] h-fit flex flex-col gap-1.5'>
                            <Label htmlFor='date' className='w-full h-fit text-[var(--richblack-5)]'>
                                Date of Birth
                            </Label>
                            <Popover open={open} onOpenChange={setOpen}>
                                <PopoverTrigger asChild className='w-full h-fit'>
                                    <button className='w-full h-fit flex justify-between cursor-pointer items-center-safe shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset] p-3 rounded-[8px] bg-[var(--richblack-700)]' id='date'>
                                        <p className='w-fit h-fit text-[var(--richblack-200)] text-base font-medium leading-6'>
                                            {(date)? date.toLocaleDateString() : 'dd/mm/yyyy'}
                                        </p>
                                        <CalendarIcon/>
                                    </button>
                                </PopoverTrigger>
                                <PopoverContent align='end' className=' p-0 overflow-hidden'>
                                    <Calendar
                                    mode='single'
                                    selected={date}
                                    captionLayout='dropdown'
                                    onSelect={(date) => {
                                        setDate(date);
                                        setOpen(false);
                                    }}/>
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className='w-[50%] flex flex-col gap-1.5'>
                            <Label className='w-full h-fit text-[var(--richblack-5)]'>
                                Gender
                                <span className='text-[var(--pink-200)] text-sm font-normal leading-5.5'>*</span>
                            </Label>
                            <RadioGroup className='w-full h-full flex'>
                                {
                                    ['male','female','other'].map((item,index) => (
                                        <div key={index} className='w-1/3 h-full flex justify-center-safe items-center-safe gap-3 cursor-pointer group'>
                                            <RadioGroupItem value={item} onClick={() => setGender(item)} className={`w-5 h-5 border rounded-full
                                            flex justify-center-safe items-center-safe group-hover:border-[var(--yellow-50)] ${(item === gender) ? 'border-[var(--yellow-50)]': 'border-[var(--richblack-500)]'}`} id={item} checked={(item === gender)} />
                                            <Label htmlFor={item} className={`text-base ${(item === gender) ? 'text-[var(--richblack-5)]' : 'text-[var(--richblack-200)]'} leading-6 cursor-pointer group-hover:text-[var(--richblack-5)] font-medium capitalize group`}>
                                                {item}
                                            </Label>
                                        </div>
                                    ))
                                }
                            </RadioGroup>
                        </div>
                    </div>
                    <div className='w-full h-fit flex gap-6'>
                        <div className='w-[50%] h-fit flex flex-col gap-1.5'>
                            <div className='flex flex-col gap-1.5 h-full w-full'>
                                <Label className='w-full h-fit text-[var(--richblack-5)]'>
                                    Phone Number
                                    <span className='text-[var(--pink-200)] text-sm font-normal leading-5.5'>*</span>
                                </Label>
                                <div className='w-full h-full flex gap-5'>
                                    <Select>
                                        <SelectTrigger className='w-[23.5%] h-full border-none p-3 shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset] rounded-[8px] leading-6 font-medium'>
                                            <SelectValue className='w-full h-full p-3 placeholder: text-[var(--richblack-200)] bg-[var(--richblack-700)]' placeholder='+91'/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {
                                                    countryCodes.map((data,index) => (
                                                        <SelectItem key={index} value={data.code} className='overflow-hidden rounded-sm flex items-center-safe justify-between'>
                                                            {data.code}
                                                            <p className='text-[var(--richblack-200)] text-sm font-normal leading-5.5'>{data.country}</p>
                                                        </SelectItem>
                                                    ))
                                                }
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <Input className='w-[76.5%] h-12 border-none p-3 shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset] rounded-[8px] leading-6 font-medium' placeholder='12345 67890'/>
                                </div>
                            </div>
                        </div>
                        <div className='w-[50%] h-fit flex flex-col gap-1.5'>
                            <Label htmlFor='about' className='w-full h-fit text-[var(--richblack-5)]'>
                                About
                            </Label>
                            <Input id='about' type='text' placeholder='Enter Bio Details'
                            className='w-full h-fit text-[var(--richblack-200)] border-none p-3 shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset] rounded-[8px] leading-6 font-medium'/>
                        </div>
                    </div>
                </CardProfile>
                <CardProfile activeCenter={true} classCustom='flex-col'>
                    <header className='font-semibold text-left text-lg leading-6.5 tracking-normal text-[var(--richblack-5)]'>
                        Password
                    </header>
                    <div className='w-full h-fit flex gap-6'>
                        <div className='w-[50%] h-fit flex flex-col gap-1.5'>
                            <Label htmlFor='current-password' className='w-full h-fit text-[var(--richblack-5)]'>
                                Current Password
                                <span className='text-[var(--pink-200)] text-sm font-normal leading-5.5'>*</span>
                            </Label>
                            <div className='w-full h-full relative'>
                                <Input id='current-password'
                                    type={showCurrentPassword ? 'text' : 'password'}
                                    placeholder='Enter current password'
                                    className='w-full h-fit text-[var(--richblack-200)] border-none p-3 shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset] rounded-[8px] leading-6 font-medium z-10'
                                />
                                {
                                    (!!showCurrentPassword)  ? (
                                        <AiOutlineEye className='w-4.5 h-4.5 text-[var(--richblack-300)] cursor-pointer absolute right-3 z-20 top-1/2 -translate-y-1/2' onClick={() => setShowCurrentPassword(!showCurrentPassword)}/>
                                    ) : (
                                        <AiOutlineEyeInvisible className='w-4.5 h-4.5 text-[var(--richblack-300)] cursor-pointer absolute right-3 z-20 top-1/2 -translate-y-1/2' onClick={() => setShowCurrentPassword(!showCurrentPassword)}/>
                                    )
                                }
                            </div>
                        </div>
                        <div className='w-[50%] h-fit flex flex-col gap-1.5'>
                            <Label htmlFor='change-password' className='w-full h-fit text-[var(--richblack-5)]'>
                                Change Password
                                <span className='text-[var(--pink-200)] text-sm font-normal leading-5.5'>*</span>
                            </Label>
                            <div className='w-full h-full relative'>
                                <Input id='change-password'
                                type={showChangePassword ? 'text' : 'password'}
                                placeholder='Enter change password'
                                className='w-full h-fit text-[var(--richblack-200)] border-none p-3 shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset] rounded-[8px] leading-6 font-medium z-10'/>
                                {
                                    (!!showChangePassword)  ? (
                                        <AiOutlineEye className='w-4.5 h-4.5 text-[var(--richblack-300)] cursor-pointer absolute right-3 z-20 top-1/2 -translate-y-1/2' onClick={() => setShowChangePassword(!showChangePassword)}/>
                                    ) : (
                                        <AiOutlineEyeInvisible className='w-4.5 h-4.5 text-[var(--richblack-300)] cursor-pointer absolute right-3 z-20 top-1/2 -translate-y-1/2' onClick={() => setShowChangePassword(!showChangePassword)}/>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </CardProfile>
            </div>
            <div className="w-full h-fit flex rounded-[8px] p-6 gap-[19px] border border-solid border-[var(--pink-700)] bg-[var(--pink-900)]">
                <div className='w-[52px] h-[52px] bg-[var(--pink-700)] rounded-full flex justify-center-safe items-center-safe'>
                    <HiTrash className='w-6 h-6 fill-[var(--pink-200)]'/>
                </div>
                <div className='w-[calc(100%-52px)] h-fit flex flex-col gap-2'>
                    <p className='w-fit h-fit text-lg leading-6.5 text-[var(--pink-5)] font-bold'>
                        Delete Account
                    </p>
                    <div className='w-fit h-fit flex flex-col gap-0.5'>
                        <p className='w-fit h-fit text-sm leading-5.5 text-[var(--pink-25)] font-medium'>
                            Would you like to delete account?
                        </p>
                        <p className='w-fit h-fit text-sm leading-5.5 text-[var(--pink-25)] font-medium'>
                            This account contains Paid Courses. Deleting your account will remove all <br/>
                            the contain associated with it.
                        </p>
                    </div>
                    <p className='w-fit h-fit text-base leading-6 text-[var(--pink-300)] italic font-medium cursor-pointer'>
                        I want to delete my account.
                    </p>
                </div>
            </div>
            <div className='w-full h-fit bg-transparent border-none flex justify-end gap-5'>
                <CTAButton text={'Cancel'} active={false} className='w-[101px]' />
                <CTAButton text={'Save'} active={true} className='w-[86px]'/>
            </div>
        </main>
    )
}

export default ProfileDetails;