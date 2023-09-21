/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ChargesContext = createContext({});

export const ChargesProvider = ({ children }) => {
	const [charges, setCharges] = useState([]);
	const [charge, setCharge] = useState({
		name: "",
		customerId: "",
		status: "",
		value: "",
		dueDate: "",
		description: "",
	});

	return (
		<ChargesContext.Provider
			value={{
				charges,
				setCharges,
				charge,
				setCharge,
			}}
		>
			{children}
		</ChargesContext.Provider>
	);
};