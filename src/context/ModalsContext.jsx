/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import useEmailValidation from "../hooks/useEmailValidation";
import api from "../services/api";
import { SingContext } from "./SingContext";

export const ModalsContext = createContext({})

export const ModalsProvider = ({ children }) => {
  const { value } = useContext(SingContext)
  const [openModalEditUser, setOpenModalEditUser] = useState(false)
  const handleOpenEditUser = () => setOpenModalEditUser(true);
  const handleCloseEditUser = () => setOpenModalEditUser(false);
  const [openChargeModal, setOpenChargeModal] = useState(false);
  const [customerCharges, setCustomerCharges] = useState({
    customerId: "",
    name: "",
    description: "",
    dueDate: "",
    value: 0,
    status: "pago"
  });
  const [openSnackChargeAdd, setOpenSnackChargeAdd] = useState(false);
  const [openSnackClientAdd, setOpenSnackClientAdd] = useState(false);



  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [apiErrors, setApiErrors] = useState("")
  const [editFinished, SetEditFinished] = useState(false)

  const { setReceivedEmail } = useEmailValidation()
  async function getData() {
    try {
      const { data } = await api.get("/users/profile", {
        headers: {
          Authorization: `Bearer ${value}`
        }
      })

      setReceivedEmail(data.email)
    } catch (error) {
      console.log(error)
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
      editFinished, SetEditFinished,
      openChargeModal, setOpenChargeModal,
      customerCharges, setCustomerCharges,
      openSnackChargeAdd, setOpenSnackChargeAdd,
      openSnackClientAdd, setOpenSnackClientAdd
    }}
    >
      {children}
    </ModalsContext.Provider>
  )
}
