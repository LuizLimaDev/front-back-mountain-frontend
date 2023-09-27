import { useContext } from "react";
import { SingContext } from "../context/SingContext";
import axios from "../services/zipcode";
import { CustomersContext } from "../context/CustomersContext";

function useZipcode() {
    const { setClientForm } = useContext(SingContext)
    const { setFormCustomer } = useContext(CustomersContext)

    async function handleZipcodeBlur(e) {
        try {
            const { data } = await axios.get(`/${e}/json`)

            setClientForm({
                name: "",
                email: "",
                cpf: "",
                phone: "",
                zipcode: e,
                street: data.logradouro,
                complement: data.complemento,
                neighborhood: data.bairro,
                city: data.localidade,
                state: data.uf
            })

            setFormCustomer({
                name: "",
                email: "",
                cpf: "",
                phone: "",
                zipcode: e,
                street: data.logradouro,
                complement: data.complemento,
                neighborhood: data.bairro,
                city: data.localidade,
                state: data.uf
            })
        } catch (error) {
            console.log(error);
        }
    }


    return {
        handleZipcodeBlur,
    }
}

export default useZipcode