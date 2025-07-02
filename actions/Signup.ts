// actions\Signup.ts
"use server";

import { createSession } from "@/app/lib/auth";
import { RandomUserResponseApi } from "@/app/types/types";

export async function SignUp():Promise<{
    success:boolean,
    error?:string,
    data?:{user: RandomUserResponseApi['results'][0]}
}> {
    try {
        // give data 
        const res_Inform = await fetch(
            "https://randomuser.me/api/?results=1&nat=us",
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }
        );
        const ApiData_Res:RandomUserResponseApi = await res_Inform.json();
        // error
        if (!res_Inform.ok) {
            return {
                error: "خطا در دریافت اطلاعات از api خواسته شده",
                success: false,
            };
        }
        // session
        // const session = {
        //     userData: ApiData_Res.results[0]
        // }
       const se= await createSession(ApiData_Res)
       console.log(se,'se')

        // pass data
        console.log(ApiData_Res,'res')
        return {
            error: "",
            success: true,
            data: {
                user:ApiData_Res.results[0]
            },
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log(error, "خطا  درعملیات");
        return {
            error: "خطا در دریافت اطلاعات",
            success: false,
        };
    }
}
