import { useContext, useEffect } from "react";
import api from "../services/api";
import { SingContext } from "../context/SingContext";
import { ChargesContext } from "../context/ChargesContext";
import { format } from "date-fns";
import { ModalsContext } from "../context/ModalsContext";

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
		setChargeDetailSelected,
		chargesParams,
		setChargesParams,
	} = useContext(ChargesContext);

	const { value } = useContext(SingContext);
	const { setOpenChargeDetailsModal } = useContext(ModalsContext)

	async function getCharges() {
		try {
			const { data } = await api.get("/charges", {
				headers: {
					Authorization: `Bearer ${value}`,
				},
				params: {
					...chargesParams
				}
			});

			setCharges(data.charges);
		} catch (error) {
			console.log(error);
		}
	}

	async function handleEditCharge() {
		try {
			await api.put(`/charges/${chargeEdit.id}`, {
				description: chargeEdit.description,
				status: chargeEdit.status,
				value: chargeEdit.value,
				dueDate: chargeEdit.dueDate
			}, {
				headers: {
					Authorization: `Bearer ${value}`
				}
			});
		} catch (error) {
			return error.response.data;
		}
	}

	async function handleDeleteCharge() {
		try {
			const response = await api.delete(`/charges/${chargeDelete.id}`, {
				headers: {
					Authorization: `Bearer ${value}`,
				},
			});
			console.log(response);
			setChargeDelete(null);
			setCharges((prevCharges) =>
				prevCharges.filter((charge) => charge.id !== chargeDelete.id)
			);
		} catch (error) {
			console.log("hello", error);
			return error.response.data;
		}
	}

	function openChargeDetails(charge) {
		setChargeDetailSelected({
			name: charge.name,
			id: charge.id,
			status: charge.status,
			value: charge.value,
			dueDate: format(new Date(charge.duedate), "yyyy'-'MM'-'dd"),
			description: charge.description,
			customerId: charge.customerid,
		})
		setOpenChargeDetailsModal(true);
	}

	useEffect(() => {
		getCharges();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [chargesParams]);

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
		openChargeDetails,
		chargesParams,
		setChargesParams
	};
}
