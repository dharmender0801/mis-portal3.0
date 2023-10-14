import { useState } from 'react';
import './App.css';
// import { API_ROUTES } from './component/Utils/Constant';
// import HttpReq from './component/Service/HttpReq';
import { Route, Routes } from 'react-router-dom'; // Correct import statement
import PageNotFound from './component/error/error';
// import './assets/css/style.css';
import AdminLayout from './component/Services/AdminLayout';
import Dashboard from './component/UI/Dashboard';
import Login from './component/UI/Login';
import { MODEL } from './component/Utils/MODEL';

function App() {
  const [servicename, setserviceName] = useState();
  const [operator, setOperator] = useState([MODEL.operatordata])
  // const [navColor,setNavColor] = useState();
  const [navColor, setNavColor] = useState(localStorage.getItem('nav') || '#00ff8f');
  const getOperator = (e: any) => {
    setOperator(e);
  }
  const getservicename = (e: any) => {
    setserviceName(e);
  }
  const getColor = (e: any) => {
    setNavColor(e)
  }

  return (
    <Routes key={'r-1'}>
      <Route key={'private-routs'} element={<AdminLayout setNav={getColor} operatorData={getOperator} setservicename={getservicename} />} >
        <Route key={'pt-r-1'} path={"*"} element={<PageNotFound />} />
        <Route key={'pt-r-1'} path={servicename} element={<Dashboard navColor={navColor} operator={operator} service={servicename} />} />
        <Route key={'pt-r-2'} path={"/"} element={<Login />} />
        {/* <Route key={'pt-r-3'} path={"/dashboard"} element={<HomeNav />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
