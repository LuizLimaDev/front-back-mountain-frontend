import { useContext, useEffect } from "react";
import api from "../services/api";
import { SingContext } from "../context/SingContext";
import { ChargesContext } from "../context/ChargesContext";

export default function useCharges() {
	const { charges, charge, setCharges, setCharge } =
		useContext(ChargesContext);
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

	useEffect(() => {
		getCharges();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		charges,
		charge,
		setCharges,
		setCharge,
	};
}
