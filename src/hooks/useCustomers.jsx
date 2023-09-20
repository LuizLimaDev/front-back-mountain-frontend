import { useContext, useEffect } from "react"
import api from "../services/api"
import { SingContext } from "../context/SingContext";
import { CustomersContext } from "../context/CustomersContext";

export default function useCustomers() {
  const {         
   customers,
   setCustomers
  } = useContext(CustomersContext);
  const {  value } = useContext(SingContext);

  async function customersUpdate(){
    try {
        const { data } = await api.get("/customers", {
            headers: {
                Authorization: `Bearer ${value}`
            }
        });
        setCustomers(data.customers);
    } catch (error) {
        console.log(error);
    }
  }
  
  useEffect(()=>{
   customersUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    customers,
    customersUpdate,
  }
}
