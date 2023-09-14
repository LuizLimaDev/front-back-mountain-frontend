/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useLocalStorage } from "react-use";

export const SingContext = createContext()

export const SingProvider = ({ children }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setCConfirmPassword] = useState('')
  const [value, setValue, remove] = useLocalStorage('token')

  return (
    <SingContext.Provider value={{
      email, setEmail,
      password, setPassword,
      confirmPassword, setCConfirmPassword,
      value, setValue, remove
    }}
    >
      {children}
    </SingContext.Provider>
  )
}