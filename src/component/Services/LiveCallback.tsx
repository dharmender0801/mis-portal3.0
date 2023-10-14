import React, { useState, useEffect } from "react";
import { MODEL } from "../Utils/MODEL";
import HttpReq from "../Service/HttpReq";
import { BASE_URL } from "../Utils/Constant";

const Livecallback = (props: any) => {
    const [columns, setColumn] = useState([MODEL.columns]);
    const [columndata, setColumnData] = useState([MODEL.columnData]);
    const [columndata1, setColumnData1] = useState([MODEL.columnData]);

    useEffect(() => {
        const JsonDta = [
            {
                name: "startdate",
                value: props.startDate
            },
            {
                name: "enddate",
                value: props.enddate
            }
        ]
        console.log(JsonDta);
        getRow(JsonDta);

    }, [props.startDate, props.enddate, props.service]);

    const fetchData = () => {
        const JsonData = [
          {
            name: "startdate",
            value: props.livedate
          },
          {
            name: "enddate",
            value: props.livedate
          }
        ];
        liveFetch(JsonData);
      };

    useEffect(() => {
       
        fetchData();
        const intervalId = setInterval(fetchData, 10000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, [props.livedate]); 
    

    const getRow = (e: any
    ) => {
        HttpReq.PostReq(`${BASE_URL}/${props.service}/callback`, e).then((response) => {
            // setColumn(response.data.columns);
            setColumnData(response.data.datas);
        });
    }

    const liveFetch = (e: any) => {
        HttpReq.PostReq(`${BASE_URL}/${props.service}/callback`, e).then((response) => {
            setColumn(response.data.columns);
            setColumnData1(response.data.datas);
        });
    }

    return (
        <div className="table-container">

            <table style={{ width: "100%" }}>
                <div className="table">
                    <thead className="bg-primary">
                        <tr style={{ background: props.navColor }}>
                            {
                                columns.map((item) => {
                                    return (
                                        <>
                                            <td style={{ padding: "6px 20px", width: "20vw", height: "3vw", textAlign: "center" }}>{item?.columnName}</td>
                                        </>
                                    )
                                }
                                )
                            }
                        </tr>

                        {
                            columndata1.map((item) => {
                                return (
                                    <><tr style={{ background: "green" }}>
                                        {
                                            item.values.map((value) => {
                                                return (
                                                    <>

                                                        <td style={{ padding: "6px 20px", width: "25vw", height: "2vw", textAlign: "center" }}>{value.count}</td>

                                                    </>
                                                )
                                            }
                                            )
                                        }
                                    </tr>
                                    </>
                                )
                            }
                            )
                        }


                    </thead>

                    <tbody>

                        {
                            columndata.map((item) => {
                                return (
                                    <><tr>
                                        {
                                            item.values.map((value) => {
                                                return (
                                                    <>

                                                        <td style={{ padding: "6px 20px", width: "25vw", height: "2vw", textAlign: "center" }}>{value.count}</td>

                                                    </>
                                                )
                                            }
                                            )
                                        }
                                    </tr>
                                    </>
                                )
                            }
                            )
                        }
                    </tbody>
                </div>
            </table>
        </div>
    )
}
export default Livecallback;