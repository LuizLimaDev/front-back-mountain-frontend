import ChevronDown from "../../../assets/chevron-down.png";

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
			<span className="dashboard-user-icon">{`${initialsName[0]}${initialsName[2]}`}</span>
			<span className="dashboard-user-name">{username}</span>
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
