/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useLocalStorage } from "react-use";

export const SingContext = createContext()

export const SingProvider = ({ children }) => {
  const [value, setValue, remove] = useLocalStorage("token")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setCConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [steps, setSteps] = useState(0);
  const [errorPassword, setErrorPassword] = useState("");
  const [errorNameMessage, setErrorNameMessage] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState(false);
  const [apiErrors, setApiErrors] = useState("")
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });

  return (
    <SingContext.Provider value={{
      email, setEmail,
      password, setPassword,
      confirmPassword, setCConfirmPassword,
      value, setValue, remove,
      steps, setSteps,
      errorNameMessage, setErrorNameMessage,
      errorEmailMessage, setErrorEmailMessage,
      form, setForm,
      showPassword, setShowPassword,
      errorPassword, setErrorPassword,
      apiErrors, setApiErrors
    }}
    >
      {children}
    </SingContext.Provider>
  )
}
