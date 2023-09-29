import { useContext, useEffect, useState } from "react";
import { ModalsContext } from "../context/ModalsContext";
import { SingContext } from "../context/SingContext";
import useEmailValidation from "./useEmailValidation";
import api from "../services/api";


export default function useGetUserDataInfo() {
    const {
        openModalEditUser,
        handleCloseEditUser,
        handleOpenEditSucess,
        SetEditFinished,
        name, setName,
        email, setEmail,
        cpf, setCpf,
        phone, setPhone,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        setShowPassword,
        setPassowrdCombination,
        handleCloseEditSucess
    } = useContext(ModalsContext)
    const { value, setReceivedEmail } = useContext(SingContext)
    const { setExistingEmailError } = useEmailValidation()

    const [apiErrors, setApiErrors] = useState([])

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function clearForm() {
        setName("")
        setEmail("")
        setCpf("")
        setPhone("")
        setPassword("")
        setConfirmPassword("")
        setShowPassword(false)
        setApiErrors([])
        setExistingEmailError("")
    }

    useEffect(() => {
        async function userGetDataInfo() {
            try {
                const { data } = await api.get("/users/profile", {
                    headers: {
                        Authorization: `Bearer ${value}`
                    }
                })

                setCpf(data.cpf)
                setPhone(data.phone)
                setName(data.name)
                setEmail(data.email)
                setReceivedEmail(data.email)
            } catch (error) {
                console.log(error.response.data)
            }
        }

        if (openModalEditUser) {
            userGetDataInfo()
        }

    }, [openModalEditUser, setCpf, setPhone, setName, setEmail, setReceivedEmail, value])

    async function handleSubmit(e) {
        e.preventDefault()
        setPassowrdCombination("")
        setApiErrors([])

        if (!password && confirmPassword) {
            setApiErrors({ ...apiErrors, newPassword: `Digite a "Nova Senha" e o "Confirmar Senha"` })
            return
        }

        if (password !== confirmPassword) {
            setApiErrors({ ...apiErrors, newPassword: "As senhas não conferem" })
            return
        }

        const userEditData = {
            name,
            email,
            cpf,
            phone,
            newPassword: password
        }

        try {
            await api.put("/users", userEditData, {
                headers: {
                    Authorization: `Bearer ${value}`
                }
            })

            SetEditFinished(true)
            clearForm()
            handleCloseEditUser()
            handleOpenEditSucess()

        } catch (error) {
            const errors = error.response.data.errors;

            errors.map((item) => {
                setApiErrors((prevState) => {
                    return { ...prevState, [item.type]: item.message }
                })
            });
        }
    }

    function timeoutSucess() {
        setTimeout(() => {
            handleCloseEditSucess()
        }, 2500)
    }

    return {
        handleClickShowPassword,
        handleMouseDownPassword,
        apiErrors,
        clearForm,
        handleSubmit,
        timeoutSucess
    }
}