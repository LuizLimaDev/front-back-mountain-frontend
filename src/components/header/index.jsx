import { Box } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useContext, useState } from 'react';
import ChevronDown from '../../assets/chevron-down.png';
import editImg from "../../assets/edit.svg";
import LogoutIcon from '@mui/icons-material/Logout';
import './style.css';
import { useNavigate } from "react-router-dom";
import { SingContext } from '../../context/SingContext';
import { ModalsContext } from '../../context/ModalsContext';

function HeaderDashBoard() {
  const { remove } = useContext(SingContext)
  const { handleOpenEditUser } = useContext(ModalsContext)
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate()

  function handleClick(e) {

    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  function handleLogout() {
    navigate("/")
    remove('token')
  }

  return (
    <div className='dashboard-header'>
      <div>
        <h1>Resumo das cobranças</h1>
      </div>
      <div className='dashboard-user'>
        <span className='dashboard-user-icon'>LR</span>
        <span className='dashboard-user-name'>Lorena</span>
        <a>
          <img
            src={ChevronDown}
            alt='Botão mais'
            className='dashboard-user-chevron'
            onClick={handleClick}
          />
        </a>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".25rem",

                padding: ".625rem .937rem"
              }}
              onClick={() => handleOpenEditUser()}
            >
              <img
                src={editImg}
                alt="editar"
                style={{
                  width: "1.25rem",
                  paddingBottom: ".3rem"
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Nunito",
                  fontWeight: 500,
                  fontSize: ".85rem",
                  color: "SCGray3"
                }}
              >
                Editar
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: ".25rem",

                padding: ".625rem .937rem"
              }}
              onClick={handleLogout}
            >
              <LogoutIcon />
              <Typography
                sx={{
                  fontFamily: "Nunito",
                  fontWeight: 500,
                  fontSize: ".85rem",
                  color: "SCGray3"
                }}
              >
                Sair
              </Typography>
            </Box>
          </Box>
        </Popover>
      </div>
    </div>
  )
}

export default HeaderDashBoard;