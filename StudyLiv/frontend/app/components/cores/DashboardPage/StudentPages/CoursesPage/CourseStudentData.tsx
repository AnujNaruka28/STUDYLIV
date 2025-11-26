"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiTrash } from "react-icons/hi";
type ProgressFilterType = "all" | "pending" | "completed"
// import {UserInput} from "../../../../../../../server/src/validations/user.validation"
// import { CourseProgressInput } from '../../../../../../../server/dist/validations/courseprogress.validation';
import sampleThumbnail from "@/public/assets/Images/singlecoursesample.jpg";
import Image from "next/image";
import CheckFileIcon from "./CheckFileIcon";
import { Progress } from "@/app/components/ui/progress";
import { useState } from "react";

export default function CourseStudentData() {
  // const userData: UserInput[] = [{
  //   firstName: "Anuj",
  //   lastName: "Naruka",
  //   email: "anujnaruka28@gmail.com",
  //   password: "123456",
  //   confirmPassword: "123456",
  //   phoneNumber: "9714240011",
  //   accountType: "Student",
  //   courseProgress: [
  //     {
  //       courseId:"1",
  //       progress: ["fe2f2","bilvgd"] as string[]
  //     },
  //     {
  //       courseId: "2",
  //       progress: ["fe2f2","bilvgd","ef","wfwafwe"] as string[]
  //     },
  //     {
  //       courseId: "3",
  //       progress: ["fe2f2","bilvgd","ef","wfwafwe","gewvgeve","adwdc"] as string[]
  //     },
  //     {
  //       courseId: "4",
  //       progress: [
  //         "fe2f2","bilvgd","ef","wfwafwe","gewvgeve","adwdc",
  //         "egege","Wgfege","wgssw","wgvsgvs","vwss","wegsgesg","vgwges"
  //       ] as string[]
  //     },
  //   ] as CourseProgressInput[]
  // }]
  const progressData = [
    {
      courseName: "The Complete Python",
      courseDescription: "Learn Python from scratch to advanced level",
      duration: "2hr 30mins",
      progress: "65%", //calculate by counting number of sub section ids present in it
      thumbnail: sampleThumbnail
    },
    {
      courseName: "The Complete Python",
      courseDescription: "Learn Python from scratch to advanced level",
      duration: "2hr 30mins",
      progress: "20%", //calculate by counting number of sub section ids present in it
      thumbnail: sampleThumbnail
    },
    {
      courseName: "The Complete Python",
      courseDescription: "Learn Python from scratch to advanced level",
      duration: "2hr 30mins",
      progress: "80%", //calculate by counting number of sub section ids present in it
      thumbnail: sampleThumbnail
    },
    {
      courseName: "The Complete Python",
      courseDescription: "Learn Python from scratch to advanced level",
      duration: "2hr 30mins",
      progress: "100%", //calculate by counting number of sub section ids present in it
      thumbnail: sampleThumbnail
    }
  ]
  const [filter, setFilter] = useState<ProgressFilterType>("all")
  return (
    <div className="px-6 flex flex-col gap-6 w-full h-fit">
      <div className="w-[23%] h-fit rounded-full p-1 flex gap-[5px] items-center-safe justify-center-safe bg-[var(--richblack-800)] shadow-[0px_-1px_0px_0px_#FFFFFF2E_inset]">
        {
          ["all","pending","completed"].map((type,index) => (
            <div key={index} onClick={() => setFilter(type as ProgressFilterType)}
            className={`py-1.5 px-4.5 transition-all duration-200 flex justify-center items-center text-base capitalize  rounded-full leading-6 tracking-normal cursor-pointer
            ${(filter === type) ?
            'bg-[var(--richblack-900)] text-[var(--richblack-5)] font-bold'
            :'bg-transparent text-[var(--richblack-200)] hover:text-[var(--richblack-5)] hover:bg-[var(--richblack-900)] font-medium'}
            `}>
              {type}
            </div>
          ))
        }
      </div>
      <div className="overflow-hidden w-full h-fit rounded-[8px] border-[var(--richblack-700)] border bg-transparent">
        <Table className="w-full h-fit">
          <TableHeader className="bg-[var(--richblack-700)] w-full h-fit border rounded-[8px] border-[var(--richblack-700)]">
            <TableRow className="bg-transparent">
              {["Course Name","Duration","Progress",""].map((h,index) => (
                <TableHead className="h-13.5 p-4 text-left text-sm leading-5.5" key={index}>
                  {h}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="w-full h-fit">
            {
            progressData.map((data,index) => (
              <TableRow key={index} className="w-full h-fit">
                <TableCell className="flex gap-5 items-center w-[50%]">
                  <Image
                    src={data.thumbnail}
                    alt={data.courseName}
                    width={52}
                    height={52}
                    className="rounded-[8px] w-[20%] h-[52px]"
                  />
                  <div className="w-[80%] flex flex-col gap-0.5 text-base leading-6">
                    <p className="text-[var(--richblack-5)] tracking-normal">{data.courseName}</p>
                    <p className="font-normal text-[var(--richblack-300)] line-clamp-1">{data.courseDescription.slice(0,50)}...</p>
                  </div>
                </TableCell>
                <TableCell className="w-[20%]">{data.duration}</TableCell>
                <TableCell className="w-[20%]">
                  <div className="flex flex-col gap-5">
                    <p className="text-xs font-semibold leading-5 text-[var(--richblack-50)]">
                      {data.progress.slice(0,-1) === "100" ? "Completed" : data.progress}
                    </p>
                    <Progress value={Number(data.progress.slice(0,-1))} className="w-full h-2 rounded-full"/>
                  </div>
                </TableCell>
                <TableCell className="w-[10%]">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="cursor-pointer">
                      <BsThreeDotsVertical className="w-6 h-6 fill-[var(--richblack-200)]"/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="border rounded-[8px] p-3 cursor-pointer
                    bg-[var(--richblack-600)] border-[var(--richblack-500)]">
                      {
                        [
                          {
                            logo: <CheckFileIcon className="fill-[var(--richblack-25)] w-5 h-5"/>,
                            text: "Mark as Completed"
                          },
                          {
                            logo: <HiTrash className="fill-[var(--richblack-25)] w-5 h-5"/>,
                            text: "Remove"
                          }
                        ].map((item,index) => (
                          <DropdownMenuItem key={index} className="py-1 flex gap-3 cursor-pointer">
                            {item.logo}
                            <p className="text-base leading-6 text-[var(--richblack-5)] font-semibold tracking-normal">
                              {item.text}
                            </p>
                          </DropdownMenuItem>
                        ))
                      }
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
