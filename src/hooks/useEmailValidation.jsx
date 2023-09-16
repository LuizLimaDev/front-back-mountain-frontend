import { useContext, useState } from "react"
import { SingContext } from "../context/SingContext"
import api from "../services/api"

export default function useEmailValidation() {
  const { setErrorEmailMessage } = useContext(SingContext)
  const [receivedEmail, setReceivedEmail] = useState("")
  const [existingEmailError, setExistingEmailError] = useState("")
  const [existingEmailListener, setExistingEmailListener] = useState(false)

  async function handleBlur(e) {
    setErrorEmailMessage("")
    setExistingEmailError("")
    setExistingEmailListener("")

    const emailInput = e.target.value

    if (!emailInput) {
      setErrorEmailMessage("O campo de E-mail não pode estar vazio!")
      return
    }

    try {
      await api.get(`/email/${emailInput}`, { emailInput })
      setErrorEmailMessage('E-mail inválido!')

    } catch (error) {

      if (receivedEmail !== emailInput) {
        console.log('email api: ', receivedEmail, 'email input: ', emailInput)
        setExistingEmailError(error.response.data.message)
        setExistingEmailListener(true)
        return
      }
    }
  }

  return {
    handleBlur,
    setReceivedEmail,
    existingEmailError,
    existingEmailListener
  }
}
