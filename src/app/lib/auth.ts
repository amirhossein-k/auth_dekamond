// lib/auth.ts

import { RandomUserResponseApi } from "../types/types";
import { cookies } from "next/headers";


export async function createSession(user: RandomUserResponseApi) { // حذف async
  (await cookies()).set('session', JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
  return true
}

export async function GetSession(cookeHed?:string):Promise<RandomUserResponseApi|null> {
  console.log(cookeHed,'ddd')
  if(cookeHed){
    const sessionCok = cookeHed.split(';')
    .find(c=>c.startsWith('session='))
    ?.split("=")[1]

    if(!sessionCok) return null
    return JSON.parse(decodeURIComponent(sessionCok)) as RandomUserResponseApi

  }

  const cookStore = await cookies()
  const sessionCok = cookStore.get('session')?.value

  if(sessionCok){
    const oop = await JSON.parse(sessionCok) as RandomUserResponseApi
    return oop
  }else{
    return null
  }

  
}