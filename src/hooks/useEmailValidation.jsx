import { useContext, useState } from "react"
import { SingContext } from "../context/SingContext"
import api from "../services/api"

export default function useEmailValidation() {
  const { setErrorEmailMessage } = useContext(SingContext)
  const [receivedEmail, setReceivedEmail] = useState("")
  const [existingEmailError, setExistingEmailError] = useState("")

  async function handleBlur(e) {
    setErrorEmailMessage("")
    const emailInput = e.target.value

    if (!emailInput) {
      setErrorEmailMessage("O campo de E-mail não pode estar vazio!")
      return
    }

    try {
      await api.get(`/email/${emailInput}`, { emailInput })
      setErrorEmailMessage('E-mail inválido!')

    } catch (error) {
      setExistingEmailError("")
      console.log(error.response.data)

      if (receivedEmail !== emailInput) {
        setExistingEmailError(error.response.data.message)
        return
      }
    }
  }

  return {
    handleBlur,
    setReceivedEmail,
    existingEmailError
  }
}
