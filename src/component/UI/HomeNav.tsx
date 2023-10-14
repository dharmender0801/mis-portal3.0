import React, { useEffect, useState } from "react";
// import { ChromePicker } from "react-color";
import { Link } from "react-router-dom";
import HttpReq from "../Service/HttpReq";
import { API_ROUTES } from "../Utils/Constant";
import { MODEL } from "../Utils/MODEL";

const HomeNav = (props: any) => {


    const navColor = localStorage.getItem('nav') || '#00ff8f';
    const [services, setServices] = useState([MODEL.serviceData]);
    const [country, setCountry] = useState([MODEL.countryData]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [menuId, setMenu] = useState();
    const [serviceId, setServiceId] = useState();
    // const [thirdMenu,setThirdMenu]= useState(false);

    const handleClick = (e: any) => {
        props.operatorData(e);
        setIsNavOpen(!isNavOpen);
        setMenuOpen(false);
    };
    useEffect(() => {
        document.title = 'Africa';
        if (!isLoaded) {
            getService();
        }
    });

    const getService = () => {
        HttpReq.GetReq(API_ROUTES.SERVICE_GET).then((response) => {
            setServices(response.data);
            setIsLoaded(true);
        });
    };

    const getCountry = (id: any) => {
        setServiceId(id);
        HttpReq.GetReq(API_ROUTES.COUNTRY_GET + id).then((response) => {
            setCountry(response.data);

            setIsLoaded(true);
        });
    }
    const toggleBtn = (id: any) => {
        setMenu(id);
        setMenuOpen(!menuOpen)

    }
    const sendName = (e: any) => {
        props.servicename(e)
        // console.log(e);
    }



    return (
        <>
            <nav className="flex-div back">
                <div className="nav-left flex-div ">
                    <Link to={"/"}>
                        <input type="" name="" id="" placeholder="Search" />
                    </Link>
                </div>
                <div className="center">
                    {services.map((item) => {

                        return (
                            <>
                                <Link to={"/"} style={{ textDecoration: 'none' }}>
                                    <span onClick={() => getCountry(item?.serviceId)}> {item?.servicename} </span>
                                </Link>
                            </>
                        );

                    })
                    }
                </div>

            </nav>
            <nav className="second-nav flex-div" style={{ background: navColor }}>
                <div className="nav-left flex-div navMen">
                    {country.map((country) => {
                        return (
                            <div className="country-wrapper">
                                <span
                                    className="NavMenu"
                                    onClick={() => toggleBtn(country?.id)}
                                >
                                    {country.countryname}
                                </span>
                                {menuOpen && menuId === country.id && (
                                    <div className="menu-content">
                                        <div className="check" >
                                            {country.operator.map((opdata) => {
                                                return (
                                                    <>
                                                        <Link to={`${opdata.name}`} style={{ textDecoration: 'none', color: "black" }}>
                                                            <span onClick={() => handleClick(opdata.operatordata)}><span onClick={() => sendName(opdata?.name)}>{opdata?.name}</span> </span>
                                                        </Link>
                                                    </>
                                                )
                                            }
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>


            </nav>


            <div className="" style={{
                height: "10em",
                background: navColor
            }}>




            </div>

        </>
    );
};

export default HomeNav;
