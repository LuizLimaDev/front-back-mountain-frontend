/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import useEmailValidation from "../hooks/useEmailValidation";
import api from "../services/api";

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

  const { setReceivedEmail } = useEmailValidation()
  async function getData() {
    try {
      const { data } = await api.get("/users/profile", {
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTQ5MDU0NTksImV4cCI6MTY5NDkzNDI1OSwic3ViIjoiMyJ9.kcH-ELExImOQeV0yN4KOuMGBi0XrBYzwhnZ_uwK1Py8`
        }
      })

      console.log(data)
      setReceivedEmail(data.email)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    getData()
  }, [])

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
    }}
    >
      {children}
    </ModalsContext.Provider>
  )
}
