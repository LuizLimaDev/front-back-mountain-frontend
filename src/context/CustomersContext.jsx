/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CustomersContext = createContext({});

export const CustomersProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);

  return (
    <CustomersContext.Provider value={{
        customers,
        setCustomers
    }}
    >
      {children}
    </CustomersContext.Provider>
  )
}
