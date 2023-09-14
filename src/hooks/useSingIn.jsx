import { useContext } from "react"
import api from "../services/api"
import { SingContext } from "../context/SingContext"

export default function useSingUp() {
  const {
    email,
    password,
    setValue
  } = useContext(SingContext)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const { data } = await api.post('/users/sessions', {
        email,
        password
      })

      setValue(data)

    } catch (error) {
      console.log(error.response.data)
    }
  }

  return {
    handleSubmit
  }
}
