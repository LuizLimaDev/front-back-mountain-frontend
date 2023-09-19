/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const MetricsDashboardContext = createContext({});

export const MetricsDasboardProvider = ({ children }) => {
  const [ valueOverdue, setValueOverdue ] = useState(0);
  const [ valuePaid, setValuePaid ] = useState(0);
  const [ valueProjected, setValueProjected ] = useState(0);

  const [ countOverdue, setCountOverdue ] = useState(0);
  const [ countPaid, setCountPaid ] = useState(0);
  const [ countProjected, setCountProjected ] = useState(0);

  const [ listOverdue, setListOverdue ] = useState([]);
  const [ listPaid, setListPaid ] = useState([]);
  const [ listProjected, setListProjected ] = useState([]);

  const [ noPayments, setNoPayments ] = useState([]);
  const [ onPayments, setOnPayments ] = useState([]);
  const [ noPaymentsList, setNoPaymentsList ] = useState([]);
  const [ onPaymentsList, setOnPaymentsList ] = useState([]);

  return (
    <MetricsDashboardContext.Provider value={{
        valueOverdue,
        setValueOverdue,
        valuePaid,
        setValuePaid,
        valueProjected,
        setValueProjected,
        countOverdue, 
        setCountOverdue,
        countPaid, 
        setCountPaid,
        countProjected, 
        setCountProjected,
        listOverdue, 
        setListOverdue,
        listPaid, 
        setListPaid,
        listProjected, 
        setListProjected,
        noPayments, 
        setNoPayments,
        onPayments, 
        setOnPayments,
        noPaymentsList, 
        setNoPaymentsList,
        onPaymentsList, 
        setOnPaymentsList,
    }}
    >
      {children}
    </MetricsDashboardContext.Provider>
  )
}
