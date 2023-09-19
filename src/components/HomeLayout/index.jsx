import { Outlet } from "react-router-dom";
import MenuIcon from "../menu-icon";
import HeaderDashBoard from "../header";

export default function HomeLayout(){
    return(
        <div className="clients-dashboard">
            <div>
                <MenuIcon />
            </div>
            <div>
                <HeaderDashBoard />
                <Outlet />
            </div>
        </div>
    )
}