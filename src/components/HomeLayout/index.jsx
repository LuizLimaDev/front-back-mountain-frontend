import { Outlet } from "react-router-dom";
import MenuIcon from "../menu-icon";

import { Box } from "@mui/material";
import HeaderDashBoard from "../HeaderDashBoard";

export default function HomeLayout() {

    return (
        <Box
            sx={{
                width: "100vw",

                backgroundColor: "SCGray8"
            }}
        >
            <Box>
                <MenuIcon />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <HeaderDashBoard />
                <Outlet />
            </Box>
        </Box>
    )
}