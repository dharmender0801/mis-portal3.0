import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomeNav from "../UI/HomeNav";
import Customizer from "../UI/Customizer";

const AdminLayout = (props: any) => {

    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const loadUserInfo = () => {

    }

    const [navColor, setNavColor] = useState(localStorage.getItem('nav') || '#00ff8f');

    const handleColorChange = (color: any) => {
        setNavColor(color);
        props.setNav(color);
        localStorage.setItem('nav', color);
    };
    const getOpertorData = (e: any) => {
        props.operatorData(e);

    };
    const getservicename = (e: any) => {
        props.setservicename(e);
    }

    useEffect(() => {
        if (isLoaded == false) {
            loadUserInfo()
        }
    }, [isLogged])

    return (
        isLogged ?
            <>
                <ToastContainer />
                <HomeNav color={navColor} operatorData={getOpertorData} servicename={getservicename} />
                <div style={{
                    zIndex: 5,
                    position: "relative",
                    top: "2px",
                    marginTop: "-10em"

                }}>
                    <Outlet />
                </div>
                <Customizer onColorChange={handleColorChange} />

            </>
            :
            <Navigate to="/login" />
    )
}
export default AdminLayout;