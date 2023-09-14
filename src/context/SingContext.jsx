/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useLocalStorage } from "react-use";

export const SingContext = createContext()

export const SingProvider = ({ children }) => {
  const [value, setValue, remove] = useLocalStorage('token')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setCConfirmPassword] = useState('');
  const [steps, setSteps] = useState(0);
  const [errorNameMessage, setErrorNameMessage] = useState(false);
  const [errorEmailMessage, setErrorEmailMessage] = useState(false);
  const [form, setForm] = useState({
      name: "",
      email: "",
      password: "",
      passwordConfirm: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorPassword, setErrorPassword] = useState("");

  return (
    <SingContext.Provider value={{
      email, setEmail,
      password, setPassword,
      confirmPassword, setCConfirmPassword,
      value, setValue, remove
      steps, setSteps,
      errorNameMessage, setErrorNameMessage,
      errorEmailMessage, setErrorEmailMessage,
      form, setForm,
      showPassword, setShowPassword,
      errorPassword, setErrorPassword
    }}
    >
      {children}
    </SingContext.Provider>
  )
}