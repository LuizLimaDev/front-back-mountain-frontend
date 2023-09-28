import { useContext, useEffect } from "react";
import api from "../services/api";
import { SingContext } from "../context/SingContext";
import { ChargesContext } from "../context/ChargesContext";

export default function useCharges() {
	const {
		charges,
		charge,
		setCharges,
		setCharge,
		chargeEdit,
		setChargeEdit,
		chargeDelete,
		setChargeDelete,
	} = useContext(ChargesContext);
	const { value } = useContext(SingContext);

	async function getCharges() {
		try {
			const { data } = await api.get("/charges", {
				headers: {
					Authorization: `Bearer ${value}`,
				},
			});

			setCharges(data.charges);
		} catch (error) {
			console.log(error);
		}
	}

	async function handleEditCharge() {
		try {
			await api.put(
				`/charges/${chargeEdit.id}`,
				{
					description: chargeEdit.description,
					status: chargeEdit.status,
					value: chargeEdit.value,
					dueDate: chargeEdit.dueDate,
				},
				{
					headers: {
						Authorization: `Beare ${value}`,
					},
				}
			);
		} catch (error) {
			return error.response.data;
		}
	}

	async function handleDeleteCharge() {
		try {
			await api.delete(`/charges/${chargeDelete.id}`, {
				headers: {
					Authorization: `Beare ${value}`,
				},
			});
		} catch (error) {
			return error.response.data;
		}
	}

	useEffect(() => {
		getCharges();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		charges,
		charge,
		setCharges,
		setCharge,
		chargeEdit,
		setChargeEdit,
		handleEditCharge,
		getCharges,
		chargeDelete,
		setChargeDelete,
		handleDeleteCharge,
	};
}
