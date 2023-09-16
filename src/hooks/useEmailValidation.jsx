import { useContext } from "react"
import { SingContext } from "../context/SingContext"
import api from "../services/api"

export default function useEmailValidation() {
  const { setErrorEmailMessage } = useContext(SingContext)

  async function handleBlur(e) {
    setErrorEmailMessage("")
    const email = e.target.value

    if (!email) {
      setErrorEmailMessage("O campo de E-mail não pode estar vazio!")
      return
    }

    try {
      await api.get(`/email/${email}`, { email })
      setErrorEmailMessage('E-mail inválido!')

    } catch (error) {
      console.log(error.response.data)
    }
  }

  return {
    handleBlur,
  }
}
