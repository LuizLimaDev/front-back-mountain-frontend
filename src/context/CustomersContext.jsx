/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CustomersContext = createContext({});

export const CustomersProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState({
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
  const [formCustomer, setFormCustomer] = useState({
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
})

  return (
    <CustomersContext.Provider value={{
        customers,
        setCustomers,
        customer,
        setCustomer,
        formCustomer,
        setFormCustomer
    }}
    >
      {children}
    </CustomersContext.Provider>
  )
}
