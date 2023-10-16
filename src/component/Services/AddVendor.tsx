import React, { useState } from "react";
import { toast } from "react-toastify";
import { MODEL } from "../Utils/MODEL";
import HttpReq from "../Service/HttpReq";
import { BASE_URL } from "../Utils/Constant";
const AddVendor = (props: any) => {
    const [added, setAdded] = useState(false);
    const [lpurl, setUrl] = useState('');
    const [vandor, setVendor] = useState([MODEL.vendoradd]);
    const [formData, setFormData] = useState(MODEL.vendor);
    const copy = async () => {
        await navigator.clipboard.writeText(lpurl);
        console.log("check ")
        toast.success("Copied", {
            position: 'top-right',
            autoClose: 5000, // Duration the notification should be shown (in milliseconds)
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
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
    const closeDiv = () => {
        setAdded(false);
    }

    return (
        <>
            <div className="advertizer">
                <p>Note : for any replacement use <b>&#123;clickid&#125;</b></p>

                <table >
                    <thead className="bg-primary">
                        <tr style={{ background: props.navColor }}>
                            {
                                vandor.map((item) => {
                                    return (
                                        item.column.map((val) => {
                                            return (
                                                <>
                                                    <td style={{ padding: "6px 20px" }}>{val?.name}</td>
                                                </>
                                            )
                                        })
                                    )
                                }
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {
                                vandor.map((item) => {
                                    return (
                                        item.inputValue.map((val) => {
                                            return (

                                                <td >
                                                    {
                                                        val.name === "cut" || val.name === "counter" || val.name === "callbackLimit" || val.name === "dailyCapping" ? (
                                                            <>
                                                                <input onChange={handleChange} style={{ padding: ".8em" }} type="number" name={val?.name} id="" />
                                                            </>
                                                        ) :
                                                            val.name === "postbackUrl" ?
                                                                (
                                                                    <input type="text" onChange={handleChange} style={{ width: "20vw", padding: ".8em" }} name="callback_url" id="" />
                                                                ) : <input type="text" onChange={handleChange} style={{ padding: ".8em" }} name={val?.name} id="" />

                                                    }
                                                </td>

                                            )
                                        })
                                    )
                                }
                                )
                            }
                        </tr>

                    </tbody>
                </table>

                <div className="btn_submit"><button onClick={handleSubmit}>Submit  </button>
                    <button type="reset">Reset  </button>
                </div>

                {
                    added ?
                        (
                            <div className="after-adding">
                                <label>Promotion URL</label>
                                <p
                                    onClick={copy}
                                    style={{
                                        width: "50vw", padding: ".8em", alignSelf: "center", border: 'none',
                                        outline: '#55acee .5px solid', textAlign: "center", cursor: "pointer"
                                        , borderRadius: "5px"
                                    }}
                                >{lpurl}</p>
                                <button style={{ background: "#808080" }} onClick={closeDiv}>Close</button>
                            </div>
                        ) : null
                }
            </div>

        </>
    )
}
export default AddVendor;