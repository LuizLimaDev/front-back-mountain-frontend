import { useContext } from "react"
import api from "../services/api"
import { SingContext } from "../context/SingContext"
import { useNavigate } from "react-router-dom"

export default function useSingUp() {
  const {
    email,
    password,
    setValue,
    setErrorEmailMessage,
    setApiErrors
  } = useContext(SingContext)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    setErrorEmailMessage("")
    e.preventDefault()

    if (!email) {
      setErrorEmailMessage("O campo de E-mail não pode estar vazio!")
    }

    try {
      const { data } = await api.post('/users/sessions', {
        email,
        password
      })

      setValue(data)
      navigate("/home")

    } catch (error) {
      setApiErrors(error.response.data.message)
    }
  }

  return {
    handleSubmit
  }
}
