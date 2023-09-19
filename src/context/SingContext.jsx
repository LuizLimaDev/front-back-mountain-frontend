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
  const [openClientModal, setOpenClientModal] = useState(false);
  const [apiErrors, setApiErrors] = useState("")
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });
  const [clientForm, setClientForm] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    zipcode: "",
    street: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: ""
  });
  const [clientErrors, setClientErrors] = useState({
    name: false,
    email: false,
    cpf: false,
    phone: false
  });
  const [active, setActive] = useState("home");

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
      openClientModal, setOpenClientModal,
      clientForm, setClientForm,
      clientErrors, setClientErrors,
      apiErrors, setApiErrors,
      active, setActive
    }}
    >
      {children}
    </SingContext.Provider>
  )
}
