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
    apiErrors, setApiErrors,
    setShowPassword
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

      setValue(data.token)
      navigate("/home")

    } catch (error) {
      setApiErrors(error.response.data.errors)
    }
  }

  function emailErrors() {
    if (apiErrors) {
      return true
    }

    return false
  }

  function passwordErrors() {
    if (apiErrors) {
      return true
    }

    return false
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return {
    handleSubmit,
    emailErrors,
    passwordErrors,
    handleClickShowPassword,
    handleMouseDownPassword
  }
}
