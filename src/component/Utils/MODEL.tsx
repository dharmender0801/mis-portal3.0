export const serviceData =
{
    id: null,
    servicename: "",
    routeing: "",
    serviceId: null,
}

export const countryData = {
    id: null,
    countryname: "",
    operator: [{
        name: "",
        operatordata: [
            {
                id: null,
                dataRouting: "",
                operatorData: "",
                operatorId: ""
            }
        ]
    }],
}
export const operatordata = {
    id: null,
    dataRouting: "",
    operatorData: "",
    operatorId: ""

}

export const columns = {
    id: null,
    service: "",
    columnName: "",
}

export const columnData = {
    values: [
        {
            name: "",
            count: "",
        }
    ]
}


export const vendoradd = {

    column: [
        {
            name: "Postback Url"
        },
        {
            name: "Cut"
        },
        {
            name: "Counter"
        },
        {
            name: "Vendor Name"
        },
        {
            name: "Callback Limit"
        },
        {
            name: "Daily Capping"
        },
    ],
    inputValue: [
        {
            name: "callback_url",
            width: "20vw"
        },
        {
            name: "cut",
            width: "auto"
        },
        {
            name: "counter",
            width: "auto"
        },
        {
            name: "vendorName",
            width: "auto"
        },
        {
            name: "callbackLimit",
            width: "auto"
        },
        {
            name: "dailyCapping",
            width: "auto"
        },
    ]
}

export const CustomizerColor =
    [
        {
            color: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
        },
        {
            color: "radial-gradient(circle at 10% 20%, rgb(0, 7, 128) 0.1%, rgba(37, 145, 251, 0.98) 99.8%)"
        },
        {
            color: "linear-gradient(135deg, rgb(139, 198, 236) 0%, rgb(149, 153, 226) 100%)"
        },
        {
            color: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
        },
        {
            color: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
        },
        {
            color: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
        },
        {
            color: "linear-gradient(147deg, #4d4855 0%, #000000 74%) "
        },
        {
            color: " linear-gradient(316deg, #3e187a 0%, #994ecc 74%)"
        },
        {
            color: " linear-gradient(315deg, #2bc96d 100%, #d3d3d3 100%)"
        },
        {
            color: "linear-gradient(225deg, rgb(255, 60, 172) 0%, rgb(120, 75, 160) 50%, rgb(43, 134, 197) 100%)"
        },
        {
            color: "radial-gradient(897px at 9% 80.3%, rgb(55, 60, 245) 0%, rgba(234, 161, 15, 0.9) 100.2%)"
        },
        {
            color: "linear-gradient(to right, #fe8dc6, #fed1c7)"
        },
        {
            color: "linear-gradient(to right, #fe8dc6, #fed1c7)"
        },
        {
            color: "linear-gradient(315deg,#170e13 0%,  #7a7adb  74%)"
        },
        {
            color: "linear-gradient(147deg, #e0455f 0%, #44000b 74%)"
        },
    ]



export const vendomenu = {
    id: null,
    menu: "",
    country: "",
}
export const vendor = {
    callbackLimit: "",
    callback_url: "",
    counter: "",
    cpId: "",
    cut: "",
    vendorName: "",
    dailyCapping: ""
}

export const MODEL = {
    serviceData,
    countryData,
    operatordata,
    columns,
    columnData,
    vendoradd,
    vendomenu,
    vendor,

}