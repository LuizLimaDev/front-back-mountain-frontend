/* eslint-disable react/prop-types */
import { Snackbar } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function SnackBar({
	phrase,
	openSnack,
	setOpenSnack,
	backgroundColor,
	color,
	SnackImage,
	ExitSnackImage,
}) {
	return (
		<Snackbar
			open={openSnack}
			onClose={() => {
				return setOpenSnack(!openSnack);
			}}
			onClick={() => {
				return setOpenSnack(!openSnack);
			}}
			autoHideDuration={2000}
			// eslint-disable-next-line react/no-children-prop
			children={
				<div
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						paddingLeft: "1.5rem",
						paddingRight: "1rem",
					}}
				>
					<img src={SnackImage} alt="Left Image" />
					<p
						style={{
							fontFamily: "Nunito",
							fontSize: "0.875rem",
							fontWeight: "400",
							color: color,
							width: "100%",
							textAlign: "center",
						}}
					>
						{phrase}
					</p>
					<img src={ExitSnackImage} alt="Exit Icon" />
				</div>
			}
			sx={{
				backgroundColor: backgroundColor,
				minWidth: "20.625rem",
				height: "3.375rem",
				borderRadius: "0.625rem",
			}}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
		/>
	);
}
