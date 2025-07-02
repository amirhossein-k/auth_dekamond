// src\app\(auth)\register\page.tsx
'use client'

import Link from "next/link"
import { useState } from "react"
import { SignUp } from "../../../../actions/Signup"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import styles from '@/app/style/register.module.scss'
import { useUserContext } from "@/context/UserContext"




const RegisterPage = () => {
    const [errorMessage,setErrorMessage] = useState('')
    const [pending,setPending] = useState<boolean>(false)
    
    const {setUser} = useUserContext()

    // valid phoneNumber 
    const validPhone = (phone:string)=>{
        const phoneReg = /^(\+98|0)?9\d{9}$/
        return phoneReg.test(phone)
    }
    // for register
    const mutationUser = useMutation({
        mutationFn:()=>SignUp(),
        onSuccess:async(data)=>{
            console.log('eeeeeeeeee')
            if(data.success && data.data){
                
                    console.log(data.data,'oooiiiei')
                    setUser(data.data.user)
                
                toast.success(`ثبت‌نام موفق! خوش آمدید ${JSON.stringify(data.data?.user.name.first)}`)
                    await new Promise((resolve)=>setTimeout(resolve,1000))

                console.log(data)
                window.location.href = '/dashboard' // هدایت به صفحه لاگین
            }else{
                toast.error(data.error||"خطا در ورود")
                            setErrorMessage(data.error||"خطا در ورود")

            }
        },
        onError:(error:Error)=>{
            toast.error(error.message)
            setErrorMessage(error.message||"خطا در ورود")
        },
        onSettled: () => {
      setPending(false)
    },
    })
    async function handleSubmitt(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setPending(true)
        setErrorMessage('')
        const formDataRegister = new FormData(e.currentTarget)
        const phone_numer = formDataRegister.get('phone') as string


        
        if(!phone_numer){
            setErrorMessage("شماره تلفن الزامیه کاربر محترم")
            setPending(false)
            return
        }
        if(!validPhone(phone_numer)){
            setErrorMessage("شماره ای که وارد کردی به فرمتی که ذکر شده فرق دارد")
            setPending(false)
            return
        }

mutationUser.mutate()
    }

  return (
     <div className= {`  h-screen flex justify-center items-center  ${styles.container}`} >

         <div className="max-w-md mx-auto text-black bg-white rounded-lg px-2 py-3 w-full  ">
            <h1 className="text-center text-xl shadow-md my-2 py-2 "> فرم ثبت نام </h1>
            {errorMessage && (
        <div className="mb-4 text-red-500">
          {errorMessage}
        </div>
      )}
            <form onSubmit={handleSubmitt} className="space-y-4 text-black">
           
     <div className="mb-4">
                        <label htmlFor="phone" className="block mb-1">شماره تلفن:</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            placeholder="09xxxxxxxxx or +989xxxxxxxxx"
                            className="border-2 p-2 w-full"
                        />
                    </div>
               
                <button className="text-white font-bold text-lg border rounded-lg px-2 py-2 inline w-full bg-blue-500"  disabled={pending} type="submit">
                   
                {pending ? 'در حال ثبت‌نام...' : 'ثبت‌نام'}
                   </button>
            </form>
            <p className="flex flex-row-reverse mt-2 " >
               
                <Link href="/login" className="text-blue-600 hover:underline hover:text-black">
صفحه اصلی        </Link>
            </p>
        </div>

      </div>
  )
}

export default RegisterPage
