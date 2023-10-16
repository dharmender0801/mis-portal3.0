import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { MODEL } from "../Utils/MODEL";

import { SiMicrosoftexcel } from 'react-icons/si';
import { FaFilter } from 'react-icons/fa';
import HttpReq from "../Service/HttpReq";
import { API_ROUTES, BASE_URL } from "../Utils/Constant";
import FileUtil from "../Utils/Excel";
import Callback from "../Services/Callback";
import UpdateVendor from "../Services/Update";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Livecallback from "../Services/LiveCallback";
import Mis, { MisRef } from "../Services/Mis";
import AddVendor from "../Services/AddVendor";
import Suppress from "../Services/Suppress";




const Dashboard = (props: any) => {
    const [operator, setOpeartor] = useState([MODEL.operatordata]);
    const [columns, setColumn] = useState([MODEL.columns]);
    const [columndata, setColumnData] = useState([MODEL.columnData]);
    const [columndata1, setColumnData1] = useState([MODEL.columnData]);
    const [columndata2, setColumnData2] = useState([MODEL.columnData]);
    const [tobeShow, setTobeShow] = useState('');
    const [vandor, setVendor] = useState([MODEL.vendoradd]);
    const [vendorColumn, setVendorColumn] = useState([MODEL.columns])
    const [vandorMenus, setVendorMen] = useState([MODEL.vendomenu]);
    const [vendorComp, setComp] = useState('');
    const [vendName, setVendName] = useState('');
    const [added, setAdded] = useState(false);
    const [lpurl, setUrl] = useState('');
    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    const [startDate, setStartdate] = useState(today.toISOString().slice(0, 10));
    const fiveDaysAgo = new Date();
    fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);
    const lastdate = fiveDaysAgo.toISOString().split('T')[0];
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const [fromDate, setFromDate] = useState(fiveDaysAgo.toISOString().split('T')[0]);
    const [toDate, setToDate] = useState(yesterday.toISOString().split('T')[0]);
    const [formData, setFormData] = useState(MODEL.vendor);

    const childRef = useRef<MisRef>(null);
    useEffect(() => {
        let country = "";
        showOptionComp("MIS");
        setComp("Callback")
        // fetch();
        setOpeartor(props.operator);
        if (props.service === 'Airtel-CongoB') {
            country = 'airtel_congob';
        }
        else if (props.service === 'Safaricom-Kenya') {
            country = 'safaricom_kenya';
        }
        vendomenu(country);
        // getData();
        fetchVendor();

    }, [props.operator]);

    const fetchVendor = () => {
        HttpReq.GetReq(`${BASE_URL}/${props.service}/vendor`).then((response) => {
            setVendorColumn(response.data.columns);
            setColumnData2(response.data.datas);
        });
    }



    const vendomenu = (e: any) => {
        HttpReq.GetReq(API_ROUTES.VENDOR_MENU + e).then((response) => {
            setVendorMen(response.data);
        })
    }
    const download = () => {
        FileUtil.generateExcel(props.service, columns, columndata1, props.service);
    }
    const onFromDateChange = (e: any) => {
        setFromDate(e.target.value)
    }

    const onToDateChange = (e: any) => {
        setToDate(e.target.value)
    }

    const getOption = (e: any) => {
        showOptionComp(e.target.value);
    }

    const showOptionComp = (e: any) => {
        setTobeShow(e);
    }

    const vendorOption = (e: any) => {
        setComp(e.target.value);
    }
    const findVendor = (e: any) => {
        setVendName(e.target.value)
    }


    const closeDiv = () => {
        setAdded(false);
    }

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }



    const fetch1 = () => {
        if (childRef.current) {
            childRef.current.childMethod();
        }
    }
    const handleSubmit = () => {
        HttpReq.PostReq(`${BASE_URL}/${props.service}/add/vendor`, formData).then((response) => {
            if (response.data.code === 200) {
                setUrl(response.data.lpUrl)
                setAdded(true);
                toast.success(response.data.statusCode, {
                    position: 'top-right',
                    autoClose: 5000, // Duration the notification should be shown (in milliseconds)
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.error('Failed to add vendor!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }




        })
    }


    return (
        <div className="Dashboard">
            <div className="service-name">
                <h3 style={{ color: "white" }}>{props.service}</h3>
                <h3 style={{ color: "white" }}>Voicechat</h3>
            </div>
            <div className="inCont">
                <div className="topNav">
                    <select name="" id="" style={{ border: "1.5px solid #55acee" }} className="gradientOutline" onChange={getOption}>
                        {operator.map((item) => {
                            return (
                                <><option value={item?.operatorData} >{item?.operatorData}</option></>
                            )
                        })}
                    </select>

                    {
                        tobeShow === 'Advertizer' ? (<>
                            <div className={`DATE`} style={{
                                display: "flex",
                                justifyContent: "left"

                            }}>
                                <select onChange={vendorOption} style={{ border: "1.5px solid #55acee" }} name="" id="">
                                    {
                                        vandorMenus.map((item) => {

                                            return (
                                                <>
                                                    <option value={item?.menu}>{item?.menu}</option>
                                                </>
                                            )
                                        })
                                    }
                                </select>
                                {
                                    tobeShow === 'Advertizer' && vendorComp === 'Update Vendor' || vendorComp === 'Supress Logic' ? (<>

                                        <select

                                            onChange={findVendor}

                                            style={{
                                                padding: ".5em 3em",
                                                borderRadius: "5px",
                                                outline: "none",
                                                border: "1.5px solid #55acee",
                                            }} name="" id="">

                                            <option>Choose Advertizer</option>
                                            {
                                                columndata2.map((item) => {
                                                    return (
                                                        <>
                                                            {
                                                                item.values.map((val) => {
                                                                    return (
                                                                        <>
                                                                            {
                                                                                val.name === 'Advertizer-Name' ? (
                                                                                    <>
                                                                                        <option value={val.count}>{val.count}</option>
                                                                                    </>
                                                                                ) : null
                                                                            }
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </>
                                                    )
                                                })
                                            }
                                        </select>
                                    </>) : null
                                }

                            </div>

                        </>) : null

                    }
                    {
                        tobeShow === 'MIS' || tobeShow === 'Advertizer' && vendorComp === 'Callback' ? (<>
                            <div className={`DATE`}>
                                <input type="date" defaultValue={lastdate} name="from" onChange={onFromDateChange} />
                                <span className={"mr-1 mt-1"}>TO</span>
                                <input type="date" defaultValue={formattedDate} name="to" onChange={onToDateChange} />
                                {tobeShow === 'MIS' ? (<>

                                    <button type="submit" onClick={fetch1} >fetch</button>
                                    <label onClick={download}><SiMicrosoftexcel size={24} /></label>
                                </>) :
                                    tobeShow === 'Advertizer' && vendorComp === 'Callback' ? (<>
                                        <button type="submit" onClick={fetch1} >fetch</button></>) :
                                        null

                                }
                            </div>
                        </>) : null

                    }
                    {
                        tobeShow === 'Advertizer' && vendorComp === 'Vendor Details' || vendorComp === 'Update Vendor' ? (
                            <><input type="text" style={{
                                borderRadius: "20px",
                                outline: "none",
                                border: "1.5px solid #55acee",
                                position: "relative",
                                right: "80px",
                                width: "100vw",
                                paddingLeft: "20px"



                            }} placeholder="Search by advertizer name or CPID" /></>
                        ) : null
                    }

                </div>
                {
                    tobeShow === 'MIS' ? (<>
                        <Mis ref={childRef} navColor={props.navColor} livedate={startDate} service={props.service} startDate={fromDate} enddate={toDate} />
                    </>) : tobeShow === 'Advertizer' && vendorComp === 'Vendor Details' ? (<>
                        <Callback navColor={props.navColor} service={props.service} /></>
                    ) : tobeShow === 'Advertizer' && vendorComp === 'Add Vendor' ? (
                        <><AddVendor navColor={props.navColor} service={props.service} /></>
                    ) : tobeShow === 'Advertizer' && vendorComp === 'Callback' ? (
                        <><Livecallback navColor={props.navColor} livedate={startDate} service={props.service} startDate={fromDate} enddate={toDate} /> </>
                    ) : tobeShow === 'Advertizer' && vendorComp === 'Supress Logic' ? (
                        <><Suppress navColor={props.navColor} service={props.service} vendorName={vendName} /></>
                    ) : tobeShow === 'Advertizer' && vendorComp === 'Update Logic' ? (
                        <><UpdateVendor navColor={props.navColor} service={props.service} vendName={vendName} vendor={columndata2} column={vendorColumn} /></>
                    ) : null
                }




            </div >

        </div >
    )
}
export default Dashboard;