import axios from 'axios';


const GetReq = (url:string) => {
    return axios.get(url);
}
const PostReq = (url:string, body:any) => {
    return axios.post(url, body);
}
const PutReq = (url:string, body:string) =>
{
    return axios.put(url, body);
}
const HttpReq = {
    GetReq,
    PostReq,
    PutReq,
}
export default HttpReq;