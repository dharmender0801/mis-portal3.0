import React, { useState, useEffect } from "react";
import { MODEL, vendor } from "../Utils/MODEL";
import HttpReq from "../Service/HttpReq";
import { BASE_URL } from "../Utils/Constant";

const UpdateVendor = (props: any) => {
    const [vandor, setVendor] = useState([MODEL.columnData]);
    const [column, setColumn] = useState([MODEL.columns]);
    const [showTable, setShow] = useState(false);
    const [formData, setFormData] = useState({
        callbackLimit: "",
        callback_url: "",
        counter: "",
        cpId: "",
        cut: "",
        dailyCapping: "",
        vendorName: "",
    });
    const getTotal = (e: any) => {
        HttpReq.GetReq(`${BASE_URL}/${props.service}/find/vendorname?name=${e}`).then((response) => {
            setColumn(response.data.columns);
            setVendor(response.data.datas);
        });
    };

    useEffect(() => {
        if ('Choose Advertizer' !== props.vendName && props.vendName !== "") {
            getTotal(props.vendName);
            setShow(true)
        }
        else {
            setShow(false)
        }

    }, [props.vendName]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, rowIndex: number, columnIndex: number) => {
        const updatedVandor = vandor.map((item, rIndex) => {
            if (rIndex === rowIndex) {
                const updatedValues = item.values.map((val, cIndex) => {
                    if (cIndex === columnIndex) {
                        return { ...val, count: e.target.value };
                    }
                    return val;
                });
                return { ...item, values: updatedValues };
            }
            return item;
        });
        setVendor(updatedVandor);
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {

        event.preventDefault();


        const updatedFormData = vandor.reduce((acc: any, item: any) => {

            item.values.forEach((val: any) => {
                if (val.name !== "CP-ID" && !formData[val.name as keyof typeof formData]) {
                    acc[val.name] = val.count;

                }
            });
            return acc;
        }, { ...formData });


        setFormData((prevFormData) => ({
            ...prevFormData,
            ...updatedFormData,
        }));
        console.log(updatedFormData);

    }

    return (<>
        {showTable ?
            (
                <div style={{ position: "relative", top: "20px" }} className="table-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <p>Note : For any replacement please use <b>&#123;clickid&#125;</b></p>

                        <table>
                            <div className="table">
                                <thead className="bg-primary" >
                                    <tr style={{ background: props.navColor }}>
                                        {column.map((item) => (

                                            <>
                                                {
                                                    item.columnName !== 'COUNTER' && item.columnName !== 'CUT' && item.columnName !== 'CALLBACK LIMIT' ?
                                                        (<>
                                                            {
                                                                item.columnName === 'POSTBACK URL' ? (
                                                                    <>
                                                                        <td style={{ padding: "10px 20px", width: "100%", textAlign: "center" }}>{item?.columnName}</td>
                                                                    </>
                                                                ) : <>
                                                                    <td style={{ padding: "10px 20px", textAlign: "center" }}>{item?.columnName}</td>
                                                                </>
                                                            }
                                                        </>
                                                        ) : ""
                                                }

                                            </>
                                        ))}
                                    </tr>
                                </thead>

                                <tbody>
                                    {vandor.map((item, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {item.values
                                                .filter((val) => val.name === 'CP-ID' || val.name === 'POSTBACK URL' || val.name === 'Advertizer-Name')
                                                .map((val, columnIndex) => (
                                                    <td key={`${rowIndex}-${columnIndex}`} style={{ padding: "8px 8px", textAlign: "center" }}>
                                                        {val.name === 'CP-ID' ? (
                                                            <input
                                                                style={{ textAlign: "center", height: "30px", width: "5em" }}
                                                                type="text"
                                                                name="cpId"
                                                                value={val.count}
                                                                disabled
                                                            />
                                                        ) : val.name === 'POSTBACK URL' ? (
                                                            <input
                                                                style={{ textAlign: "center", height: "30px", width: "50em" }}
                                                                type="text"
                                                                name="callback_url"
                                                                value={val.count}
                                                                onChange={(e) => handleInputChange(e, rowIndex, columnIndex)}
                                                            />
                                                        ) : val.name === 'Advertizer-Name' ? (
                                                            <input
                                                                style={{ textAlign: "center", height: "30px" }}
                                                                type="text"
                                                                name="vendorName"
                                                                value={val.count}
                                                                onChange={(e) => handleInputChange(e, rowIndex, columnIndex)}
                                                            />
                                                        ) : <input  style={{ textAlign: "center", height: "30px" }} type="text" />}
                                                    </td>
                                                ))}
                                        </tr>
                                    ))}
                                </tbody>


                            </div>
                        </table>

                        <div style={{ position: "relative", top: "0" }} className="advertizer">

                            <div className="btn_submit " ><button type="submit">Submit  </button>
                                <button>Reset  </button>
                            </div>
                        </div>
                    </form>
                </div>
            ) : null

        }
    </>
    );
};

export default UpdateVendor;
