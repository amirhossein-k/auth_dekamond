'use client'
import { RandomUserResponseApi } from '@/app/types/types'
import {createContext,ReactNode, useContext, useEffect, useState} from 'react'


interface UserContextType {
  user: RandomUserResponseApi['results'][0] | null;
  setUser: (user: RandomUserResponseApi['results'][0] | null) => void;
  
  
}

export const UserContext = createContext<UserContextType>({}as UserContextType )

export const UserPorvider = ({children}:{children:ReactNode})=>{


    const [user,setUser] = useState<null | RandomUserResponseApi['results'][0]>(null)


// بازیابی کاربر از localStorage در زمان لود
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  // ذخیره کاربر در localStorage هنگام تغییر
  const handleSetUser = (user: RandomUserResponseApi['results'][0] | null) => {
    setUser(user)
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }

    return(
        <UserContext.Provider value={{user,setUser:handleSetUser}}>
            {children}
        </UserContext.Provider>
    )
}
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};