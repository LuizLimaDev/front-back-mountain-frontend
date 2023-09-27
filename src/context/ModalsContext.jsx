/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ModalsContext = createContext({});

export const ModalsProvider = ({ children }) => {
	const [openModalEditUser, setOpenModalEditUser] = useState(false);
	const [openModalEditSucess, setOpenModalEditSucess] = useState(false);
	const [openChargeModal, setOpenChargeModal] = useState(false);
	const [customerCharges, setCustomerCharges] = useState({
		customerId: "",
		name: "",
		description: "",
		dueDate: "",
		value: 0,
		status: "pago",
	});
	const [openSnackChargeAdd, setOpenSnackChargeAdd] = useState(false);
	const [openSnackClientAdd, setOpenSnackClientAdd] = useState(false);
	const [openSnackClientEdit, setOpenSnackClientEdit] = useState(false);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [cpf, setCpf] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [apiErrors, setApiErrors] = useState("");
	const [editFinished, SetEditFinished] = useState(false);

	const [openDeleteChargeModal, setOpenDeleteChargeModal] = useState(false);
	const [chargeToDelete, setChargeToDelete] = useState();

	const handleOpenEditUser = () => setOpenModalEditUser(true);
	const handleCloseEditUser = () => setOpenModalEditUser(false);
	const handleOpenEditSucess = () => setOpenModalEditSucess(true);
	const handleCloseEditSucess = () => setOpenModalEditSucess(false);

	return (
		<ModalsContext.Provider
			value={{
				openModalEditUser,
				setOpenModalEditUser,
				openModalEditSucess,
				name,
				setName,
				email,
				setEmail,
				cpf,
				setCpf,
				phone,
				setPhone,
				password,
				setPassword,
				confirmPassword,
				setConfirmPassword,
				apiErrors,
				setApiErrors,
				handleOpenEditUser,
				handleCloseEditUser,
				handleOpenEditSucess,
				handleCloseEditSucess,
				editFinished,
				SetEditFinished,
				openChargeModal,
				setOpenChargeModal,
				customerCharges,
				setCustomerCharges,
				openSnackChargeAdd,
				setOpenSnackChargeAdd,
				openSnackClientAdd,
				setOpenSnackClientAdd,
				openSnackClientEdit,
				setOpenSnackClientEdit,
				openDeleteChargeModal,
				setOpenDeleteChargeModal,
				chargeToDelete,
				setChargeToDelete,
			}}
		>
			{children}
		</ModalsContext.Provider>
	);
};
