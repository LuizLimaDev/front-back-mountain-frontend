import {
	Box,
	Button,
	InputLabel,
	Modal,
	OutlinedInput,
	TextField,
	Typography,
} from "@mui/material";
import { useContext } from "react";
import CloseIcon from "../../../../assets/closeIcon.svg";
import UsersIcon from "../../../../assets/users.svg";
import { ModalsContext } from "../../../../context/ModalsContext";
import { SingContext } from "../../../../context/SingContext";
import useCustomers from '../../../../hooks/useCustomers';
import useZipcode from '../../../../hooks/useZipcode';
import api from "../../../../services/api";

export default function ClientModal() {
	const {
		openClientModal,
		setOpenClientModal,
		clientForm,
		setClientForm,
		clientErrors,
		setClientErrors,
		value,
	} = useContext(SingContext);

	const { setOpenSnackClientAdd } = useContext(ModalsContext);
	const { customersUpdate } = useCustomers();
	const { handleZipcodeBlur } = useZipcode()

	function handleChange(event) {
		const inputValue = event.target.value
		let formatedNames;

		if (event.target.name === "name") {
			const nameSplit = (inputValue.split(" "));

			for (let i = 0; i < nameSplit.length; i++) {
				nameSplit[i] = nameSplit[i].charAt(0).toUpperCase() + nameSplit[i].slice(1)
			}

			formatedNames = (nameSplit.join(" "));
		}

		setClientForm((prevState) => {
			return { ...prevState, [event.target.name]: inputValue, name: formatedNames };
		});

		setClientErrors({
			name: false,
			email: false,
			cpf: false,
			phone: false,
		});
	}

	function cleanForm() {
		setClientForm({
			name: "",
			email: "",
			cpf: "",
			phone: "",
			zipcode: "",
			street: "",
			complement: "",
			neighborhood: "",
			city: "",
			state: "",
		});
		setClientErrors({
			name: false,
			email: false,
			cpf: false,
			phone: false,
		});
		setOpenClientModal(false);
	}

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			await api.post(
				"/customers",
				{ ...clientForm },
				{
					headers: {
						Authorization: `Bearer ${value}`,
					},
				}
			);
			customersUpdate();
			setOpenSnackClientAdd(true);
			cleanForm();
		} catch (error) {
			const errors = error.response.data.errors
			errors.map(error => {
				setClientErrors((prevState) => {
					return { ...prevState, [error.type]: error.message };
				});
			})
		}
	}

	async function emailCheck(event) {
		try {
			await api.get(`/email/${event.target.value}`);
		} catch (error) {
			setClientErrors((prevState) => {
				return { ...prevState, email: error.response.data.message };
			});
		}
	}

	return (
		<Modal
			open={openClientModal}
			onClose={() => cleanForm()}
		>
			<Box
				sx={{
					width: "37.5rem",
					minHeight: "47.375rem",
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					backgroundColor: "#FFF",
					border: "none",
					borderRadius: "1.875rem",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<img
					src={CloseIcon}
					alt="Close Icon"
					style={{
						alignSelf: "flex-end",
						margin: "1.5rem 1.5rem 0 0",
						cursor: "pointer",
					}}
					onClick={() => cleanForm()}
				/>
				<form onSubmit={(event) => handleSubmit(event)}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "1rem",
							mb: "0.98rem",
						}}
					>
						<img src={UsersIcon} alt="User's Icon" />
						<Typography
							sx={{
								fontFamily: "Montserrat",
								fontSize: "1.625rem",
								fontWeight: "600",
								color: "SCGray2",
							}}
						>
							Cadastro do Cliente
						</Typography>
					</Box>
					<Box
						sx={{
							mb: "0.5rem",
						}}
					>
						<InputLabel
							htmlFor="iname"
							sx={{
								fontFamily: "Nunito",
								fontSize: "0.875rem",
								fontWeight: "600",
								lineHeight: "1.25rem",
								color: "SCGray2",
								mb: "0.38rem",
							}}
						>
							Nome*
						</InputLabel>
						<TextField
							placeholder="Digite o nome"
							id="iname"
							InputProps={{
								style: {
									width: "30.4375rem",
									height: "2.75rem",
									borderRadius: "0.5rem",
									fontFamily: "Nunito",
									fontSize: "1rem",
									fontWeight: "400",
									lineHeight: "1.5rem",
								},
							}}
							name="name"
							value={clientForm.name}
							onChange={(event) => handleChange(event)}
							error={clientErrors.name}
							helperText={clientErrors.name}
						/>
					</Box>
					<Box
						sx={{
							mb: "0.5rem",
						}}
					>
						<InputLabel
							htmlFor="iemail"
							sx={{
								fontFamily: "Nunito",
								fontSize: "0.875rem",
								fontWeight: "600",
								lineHeight: "1.25rem",
								color: "SCGray2",
								mb: "0.38rem",
							}}
						>
							E-mail*
						</InputLabel>
						<TextField
							placeholder="Digite o e-mail"
							id="iemail"
							InputProps={{
								style: {
									width: "30.4375rem",
									height: "2.75rem",
									borderRadius: "0.5rem",
									fontFamily: "Nunito",
									fontSize: "1rem",
									fontWeight: "400",
									lineHeight: "1.5rem",
								},
							}}
							name="email"
							value={clientForm.email}
							onChange={(event) => handleChange(event)}
							error={clientErrors.email}
							helperText={clientErrors.email}
							onBlur={(event) => emailCheck(event)}
						/>
					</Box>
					<Box
						sx={{
							mb: "0.5rem",
							display: "flex",
							justifyContent: "center",
							gap: "1.5rem",
						}}
					>
						<Box>
							<InputLabel
								htmlFor="icpf"
								sx={{
									fontFamily: "Nunito",
									fontSize: "0.875rem",
									fontWeight: "600",
									lineHeight: "1.25rem",
									color: "SCGray2",
									mb: "0.38rem",
								}}
							>
								CPF*
							</InputLabel>
							<TextField
								placeholder="Digite o CPF"
								id="icpf"
								InputProps={{
									style: {
										width: "14.4rem",
										height: "2.75rem",
										borderRadius: "0.5rem",
										fontFamily: "Nunito",
										fontSize: "1rem",
										fontWeight: "400",
										lineHeight: "1.5rem",
									},
								}}
								name="cpf"
								value={clientForm.cpf}
								onChange={(event) => handleChange(event)}
								error={clientErrors.cpf}
								helperText={clientErrors.cpf}
							/>
						</Box>
						<Box>
							<InputLabel
								htmlFor="iphone"
								sx={{
									fontFamily: "Nunito",
									fontSize: "0.875rem",
									fontWeight: "600",
									lineHeight: "1.25rem",
									color: "SCGray2",
									mb: "0.38rem",
								}}
							>
								Telefone*
							</InputLabel>
							<TextField
								placeholder="Digite o telefone"
								id="iphone"
								InputProps={{
									style: {
										width: "14.6rem",
										height: "2.75rem",
										borderRadius: "0.5rem",
										fontFamily: "Nunito",
										fontSize: "1rem",
										fontWeight: "400",
										lineHeight: "1.5rem",
									},
								}}
								name="phone"
								value={clientForm.phone}
								onChange={(event) => handleChange(event)}
								error={clientErrors.phone}
								helperText={clientErrors.phone}
							/>
						</Box>
					</Box>
					<Box
						sx={{
							mb: "0.5rem",
							display: "flex",
							justifyContent: "center",
							gap: "1.5rem",
						}}
					>
						<Box>
							<InputLabel
								htmlFor="icep"
								sx={{
									fontFamily: "Nunito",
									fontSize: "0.875rem",
									fontWeight: "600",
									lineHeight: "1.25rem",
									color: "SCGray2",
									mb: "0.38rem",
								}}
							>
								CEP
							</InputLabel>
							<OutlinedInput
								placeholder="Digite o CEP"
								id="icep"
								sx={{
									width: "14.4rem",
									height: "2.75rem",
									borderRadius: "0.5rem",
									fontFamily: "Nunito",
									fontSize: "1rem",
									fontWeight: "400",
									lineHeight: "1.5rem",
								}}
								name="zipcode"
								value={clientForm.zipcode}
								onChange={(event) => handleChange(event)}
								onBlur={e => handleZipcodeBlur(e.target.value)}
							/>
						</Box>
						<Box>
							<InputLabel
								htmlFor="ihood"
								sx={{
									fontFamily: "Nunito",
									fontSize: "0.875rem",
									fontWeight: "600",
									lineHeight: "1.25rem",
									color: "SCGray2",
									mb: "0.38rem",
								}}
							>
								Bairro
							</InputLabel>
							<OutlinedInput
								placeholder="Digite o bairro"
								id="ihood"
								sx={{
									width: "14.6rem",
									height: "2.75rem",
									borderRadius: "0.5rem",
									fontFamily: "Nunito",
									fontSize: "1rem",
									fontWeight: "400",
									lineHeight: "1.5rem",
								}}
								name="neighborhood"
								value={clientForm.neighborhood}
								onChange={(event) => handleChange(event)}
							/>
						</Box>
					</Box>
					<Box
						sx={{
							mb: "0.5rem",
						}}
					>
						<InputLabel
							htmlFor="iaddress"
							sx={{
								fontFamily: "Nunito",
								fontSize: "0.875rem",
								fontWeight: "600",
								lineHeight: "1.25rem",
								color: "SCGray2",
								mb: "0.38rem",
							}}
						>
							Endereço
						</InputLabel>
						<OutlinedInput
							placeholder="Digite o endereço"
							id="iaddress"
							sx={{
								width: "30.4375rem",
								height: "2.75rem",
								borderRadius: "0.5rem",
								fontFamily: "Nunito",
								fontSize: "1rem",
								fontWeight: "400",
								lineHeight: "1.5rem",
							}}
							name="street"
							value={clientForm.street}
							onChange={(event) => handleChange(event)}
						/>
					</Box>
					<Box
						sx={{
							mb: "0.5rem",
						}}
					>
						<InputLabel
							htmlFor="icomplement"
							sx={{
								fontFamily: "Nunito",
								fontSize: "0.875rem",
								fontWeight: "600",
								lineHeight: "1.25rem",
								color: "SCGray2",
								mb: "0.38rem",
							}}
						>
							Complemento
						</InputLabel>
						<OutlinedInput
							placeholder="Digite o complemento"
							id="icomplement"
							sx={{
								width: "30.4375rem",
								height: "2.75rem",
								borderRadius: "0.5rem",
								fontFamily: "Nunito",
								fontSize: "1rem",
								fontWeight: "400",
								lineHeight: "1.5rem",
							}}
							name="complement"
							value={clientForm.complement}
							onChange={(event) => handleChange(event)}
						/>
					</Box>

					<Box
						sx={{
							mb: "3.56rem",
							display: "flex",
							justifyContent: "center",
							gap: "1.5rem",
						}}
					>
						<Box>
							<InputLabel
								htmlFor="icity"
								sx={{
									fontFamily: "Nunito",
									fontSize: "0.875rem",
									fontWeight: "600",
									lineHeight: "1.25rem",
									color: "SCGray2",
									mb: "0.38rem",
								}}
							>
								Cidade
							</InputLabel>
							<OutlinedInput
								placeholder="Digite a cidade"
								id="icity"
								sx={{
									width: "18.9375rem",
									height: "2.75rem",
									borderRadius: "0.5rem",
									fontFamily: "Nunito",
									fontSize: "1rem",
									fontWeight: "400",
									lineHeight: "1.5rem",
								}}
								name="city"
								value={clientForm.city}
								onChange={(event) => handleChange(event)}
							/>
						</Box>
						<Box>
							<InputLabel
								htmlFor="iuf"
								sx={{
									fontFamily: "Nunito",
									fontSize: "0.875rem",
									fontWeight: "600",
									lineHeight: "1.25rem",
									color: "SCGray2",
									mb: "0.38rem",
								}}
							>
								UF
							</InputLabel>
							<OutlinedInput
								placeholder="Digite a UF"
								id="iuf"
								sx={{
									width: "10rem",
									height: "2.75rem",
									borderRadius: "0.5rem",
									fontFamily: "Nunito",
									fontSize: "1rem",
									fontWeight: "400",
									lineHeight: "1.5rem",
								}}
								name="state"
								value={clientForm.state}
								onChange={(event) => handleChange(event)}
							/>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "1.5rem",
							mb: "2.49rem",
						}}
					>
						<Button
							variant="contained"
							sx={{
								width: "14.46875rem",
								height: "2.125rem",
								borderRadius: "0.625rem",
								backgroundColor: "SCGray8",
								color: "SCNormalGreen",
								fontFamily: "Nunito",
								fontSize: "1.125rem",
								fontWeight: "400",
								textTransform: "capitalize",
								border: "1px solid #DEDEE9",
								"&:hover": {
									backgroundColor: "SCGray8",
								},
							}}
							onClick={() => cleanForm()}
						>
							Cancelar
						</Button>
						<Button
							variant="contained"
							sx={{
								width: "14.46875rem",
								height: "2.125rem",
								borderRadius: "0.625rem",
								backgroundColor: "SCPink",
								color: "#F8F8F9",
								fontFamily: "Nunito",
								fontSize: "1.125rem",
								fontWeight: "400",
								textTransform: "capitalize",
								border: "1px solid #DEDEE9",
								"&:hover": {
									backgroundColor: "SCPink",
								},
							}}
							type="submit"
						>
							Aplicar
						</Button>
					</Box>
				</form>
			</Box>
		</Modal>
	);
}
