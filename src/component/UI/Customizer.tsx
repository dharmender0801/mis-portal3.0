import React, { useState } from 'react';


function Customizer(props: any) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCustomizer = (e: any) => {
        e.preventDefault();
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };
    const handleColorChange = (e: any) => {
        props.onColorChange(e);
    };
    return (
        <div style={{
            position: "fixed", top: "150px", left: "98%",
            zIndex: "100"
        }}>

            <button className="settings-btn" onClick={toggleCustomizer} style={{ alignItems: "center", alignSelf: "center" }}>
                <span className="settings-icon"></span>
            </button>

            <div style={{ display: "flex", padding: ".8em", }}>

                {
                    isOpen && (
                        <div className="color-options">

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(4, 1fr)",
                                    gridRowGap: "15px",
                                    gridColumnGap: "15px"
                                }}
                            >



                                <div

                                    style={{
                                        background: "#FF0000",
                                        height: "20px",
                                        width: "20px",
                                    }}
                                    onClick={() => handleColorChange("#FF0000")}
                                ></div>
                                <div

                                    style={{
                                        background: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
                                        height: "20px",
                                        width: "20px",
                                    }}
                                    onClick={() => handleColorChange("linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)")}
                                ></div>
                                <div

                                    style={{
                                        background: "linear-gradient(to right, #fe8dc6, #fed1c7)",
                                        height: "20px",
                                        width: "20px",
                                    }}
                                    onClick={() =>
                                        handleColorChange("linear-gradient(to right, #fe8dc6, #fed1c7)")
                                    }
                                ></div>
                                <div

                                    style={{
                                        background: "linear-gradient(to right,  #00a1ff, #00ff8f)",
                                        height: "20px",
                                        width: "20px",
                                    }}
                                    onClick={() =>
                                        handleColorChange("linear-gradient(to right,  #00a1ff,#00ff8f)")
                                    }
                                ></div>
                                <div

                                    style={{
                                        background: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
                                        height: "20px",
                                        width: "20px",
                                    }}
                                    onClick={() =>
                                        handleColorChange("linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)")
                                    }
                                ></div>
                                <div

                                    style={{
                                        background: "linear-gradient(225deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)",
                                        height: "20px",
                                        width: "20px",
                                    }}
                                    onClick={() =>
                                        handleColorChange("linear-gradient(225deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)")
                                    }
                                ></div>
                                <div
                                    style={{
                                        background: " linear-gradient(45deg, #FF5ACD 0%, #FBDA61 100%)",
                                        height: "20px",
                                        width: "20px",
                                    }}
                                    onClick={() =>
                                        handleColorChange(" linear-gradient(45deg, #FF5ACD 0%, #FBDA61 100%)")
                                    }
                                ></div>
                                <div style={{
                                    background: "linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)",
                                    height: "20px",
                                    width: "20px",
                                }}
                                    onClick={() =>
                                        handleColorChange("linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)")
                                    }
                                ></div>
                                <div style={{
                                    background: "radial-gradient( circle 897px at 9% 80.3%,  rgba(55,60,245,1) 0%, rgba(234,161,15,0.90) 100.2% )",
                                    height: "20px",
                                    width: "20px",
                                }}
                                    onClick={() =>
                                        handleColorChange("radial-gradient( circle 897px at 9% 80.3%,  rgba(55,60,245,1) 0%, rgba(234,161,15,0.90) 100.2% )")
                                    }
                                ></div>
                                <div style={{
                                    background: "radial-gradient( circle farthest-corner at 10% 20%, rgba(0,7,128,1)  0.1%, rgba(37,145,251,0.98)  99.8% )",
                                    height: "20px",
                                    width: "20px",
                                }}
                                    onClick={() =>
                                        handleColorChange("radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,7,128,1) 0.1%, rgba(37,145,251,0.98) 99.8% )")
                                    }
                                ></div>



                            </div>
                        </div>
                    )
                }


            </div>
        </div>
    );
}

export default Customizer;
