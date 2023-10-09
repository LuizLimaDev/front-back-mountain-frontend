import { useContext, useEffect } from "react";
import api from "../services/api";
import { SingContext } from "../context/SingContext";
import { ChargesContext } from "../context/ChargesContext";
import { addHours, format } from "date-fns";
import { ModalsContext } from "../context/ModalsContext";
import useCustomers from "./useCustomers";

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
	const {
		setOpenChargeDetailsModal,
		setOpenSnackChargeCannotDelete,
		setOpenChargeDeleteModal,
		setOpenSnackChargeDelete,
	} = useContext(ModalsContext);
	const { getCustomer } = useCustomers();

	function closeDeleteModal() {
		setOpenChargeDeleteModal(false);
	}

	async function getCharges() {
		try {
			const { data } = await api.get("/charges", {
				headers: {
					Authorization: `Bearer ${value}`,
				},
				params: {
					...chargesParams,
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
						Authorization: `Bearer ${value}`,
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
					Authorization: `Bearer ${value}`,
				},
			});
			getCustomer(chargeDelete.customerid);
			getCharges();
			setOpenSnackChargeDelete(true);
			setChargeDelete(null);
			closeDeleteModal();
		} catch (error) {
			setOpenSnackChargeCannotDelete(error.response);
			setOpenSnackChargeCannotDelete(true);
			closeDeleteModal();
		}
	}

	function openChargeDetails(charge) {
		setChargeDetailSelected({
			name: charge.name,
			id: charge.id,
			status: charge.status,
			value: charge.value,
			dueDate: format(addHours(new Date(charge.duedate), 3), "yyyy'-'MM'-'dd"),
			description: charge.description,
			customerId: charge.customerid,
		});
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
		setChargesParams,
		closeDeleteModal,
	};
}
