/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const SingContext = createContext()

export const SingProvider = ({ children }) => {
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