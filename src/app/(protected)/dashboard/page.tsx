'use client'

import { useUserContext } from "@/context/UserContext"
import Image from "next/image"

const DashboardPage = () => {

  const {user} = useUserContext()

  if (!user) {
    return (
      <div className="bg-red-300 w-full h-fit p-4">
        <p> کاربری یافت نشد دوباره لود کن</p>
      </div>
    )
  }
  return (
    <div className=" w-full h-full min-h-screen p-4 flex flex-col gap-4 items-center justify-center" dir="rtl">
      <h1>خوش آمدید، {user.name.first}!</h1>
    <Image src={user.picture.large} alt=""  width={200} height={100} style={{borderRadius:'20px'}} className="hover:scale-105"/>
      <p>شماره تلفن: {user.phone}</p>
    </div>
  )
}

export default DashboardPage
