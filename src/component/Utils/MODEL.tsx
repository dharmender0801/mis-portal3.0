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
            width:"20vw"
        },
        {
            name: "cut",
            width:"auto"
        },
        {
            name: "counter",
            width:"auto"
        },
        {
            name: "vendorName",
            width:"auto"
        },
        {
            name: "callbackLimit",
            width:"auto"
        },
        {
            name: "dailyCapping",
            width:"auto"
        },
    ]
}

    export const vendomenu = {
        id:null,
        menu:"",
        country:"",
    }
    export const vendor ={
        callbackLimit:"",
        callback_url:"",
        counter:"",
        cpId:"",
        cut:"",
        vendorName:"",
        dailyCapping:""
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