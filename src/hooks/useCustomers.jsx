import { useContext, useEffect } from "react"
import api from "../services/api"
import { SingContext } from "../context/SingContext";
import { CustomersContext } from "../context/CustomersContext";

export default function useCustomers() {
  const {         
   customers,
   customer,
   setCustomers,
   setCustomer,
   formCustomer,
   setFormCustomer,
   chargesByCustomer, 
   setChargesByCustomer
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

  async function getCustomer(customerId){
    try {
      const { data } = await api.get(`/customers/${customerId}`, {
        headers: {
            Authorization: `Bearer ${value}`
        }
      });

      const { data: charges } = await api.get(`/customers/${customerId}/charges`, {
        headers: {
            Authorization: `Bearer ${value}`
        }
      });
      setCustomer(data.detailsCustomer[0]);
      setFormCustomer(data.detailsCustomer[0]);
      setChargesByCustomer(charges.detailsCustomerCharges);
    } catch (error) {
      console.log("api error", error);
    }
    
  }
  
  useEffect(()=>{
   customersUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    customers,
    customersUpdate,
    getCustomer,
    customer,
    setCustomer,
    formCustomer,
    setFormCustomer,
    chargesByCustomer,
  }
}
