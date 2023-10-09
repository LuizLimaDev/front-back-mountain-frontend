import { CircularProgress } from "@mui/material";
import ChevronDown from "../../../assets/chevron-down.png";
import './style.css';

// eslint-disable-next-line react/prop-types
function Avatar({ setAnchorEl, initialsName, username }) {
	function handleClick(e) {
		setAnchorEl(e.currentTarget);
	}
	const menuStyle = {
		position: 'fixed'
	};
	return (
		<div className="dashboard-user" style={menuStyle}>
			{username ?
				(
					<>
						<span className="dashboard-user-icon">{`${initialsName[0]}${initialsName[2]}`}</span>
						<span className="dashboard-user-name">{username}</span>
					</>
				) : (
					<>
						<span className="dashboard-user-icon">..</span>
						<CircularProgress
							color="success"
							sx={{ marginX: "1.5rem" }}
						/>
					</>
				)
			}

			<a>
				<img
					src={ChevronDown}
					alt="Botão mais"
					className="dashboard-user-chevron"
					onClick={handleClick}
				/>
			</a>
		</div>
	);
}

export default Avatar;
