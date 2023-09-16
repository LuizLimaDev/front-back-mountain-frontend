/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ModalsContext = createContext()

export const ModalsProvider = ({ children }) => {
  const [openModalEditUser, setOpenModalEditUser] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  return (
    <ModalsContext.Provider value={{
      openModalEditUser, setOpenModalEditUser,
      name, setName,
      email, setEmail,
      cpf, setCpf,
      phone, setPhone,
      password, setPassword,
      confirmPassword, setConfirmPassword
    }}
    >
      {children}
    </ModalsContext.Provider>
  )
}
