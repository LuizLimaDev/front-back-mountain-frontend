import { useContext } from "react";
import { SingContext } from "../context/SingContext";
import axios from "../services/zipcode";
import { CustomersContext } from "../context/CustomersContext";

function useZipcode() {
    const { setClientForm, clientForm } = useContext(SingContext)
    const { setFormCustomer, formCustomer } = useContext(CustomersContext)

    async function handleZipcodeBlur(e) {
        try {
            const { data } = await axios.get(`/${e}/json`)

            setClientForm((prevState) => prevState = {
                ...prevState,
                zipcode: e,
                street: data.logradouro,
                complement: data.complemento,
                neighborhood: data.bairro,
                city: data.localidade,
                state: data.uf
            });

            setFormCustomer((prevState) => prevState = {
                ...prevState,
                zipcode: e,
                street: data.logradouro,
                complement: data.complemento,
                neighborhood: data.bairro,
                city: data.localidade,
                state: data.uf
            });
        } catch (error) {
            console.log(error);
        }
    }


    return {
        handleZipcodeBlur,
    }
}

export default useZipcode