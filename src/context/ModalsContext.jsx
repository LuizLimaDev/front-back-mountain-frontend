/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ModalsContext = createContext({})

export const ModalsProvider = ({ children }) => {
  const [openModalEditUser, setOpenModalEditUser] = useState(true)
  const handleOpenEditUser = () => setOpenModalEditUser(true);
  const handleCloseEditUser = () => setOpenModalEditUser(false);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [apiErrors, setApiErrors] = useState("")
  const [passwordCombinationError, setPasswordCombinationError] = useState("")

  if (password !== confirmPassword) {
    setPasswordCombinationError("As senhas não coincidem!")
  }

  return (
    <ModalsContext.Provider value={{
      openModalEditUser, setOpenModalEditUser,
      name, setName,
      email, setEmail,
      cpf, setCpf,
      phone, setPhone,
      password, setPassword,
      confirmPassword, setConfirmPassword,
      apiErrors, setApiErrors,
      handleOpenEditUser, handleCloseEditUser,
      passwordCombinationError
    }}
    >
      {children}
    </ModalsContext.Provider>
  )
}
