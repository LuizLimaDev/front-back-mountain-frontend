/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const SingContext = createContext()

export const SingProvider = ({ children }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setCConfirmPassword] = useState('')

  return (
    <SingContext.Provider value={{
      email, setEmail,
      password, setPassword,
      confirmPassword, setCConfirmPassword
    }}
    >
      {children}
    </SingContext.Provider>
  )
}