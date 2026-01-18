
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import { useState } from 'react';
import RefreshHabndler from './RefreshHabndler';
import Header from './Header';
import UpdateEmployee from './Pages/UpdateEmployee';
import Employee from './Pages/Employee';
import CreateEmployee from './Pages/CreateEmployee';
import DeleteEmployeeModal from './Pages/DeleteEmployee'
function App() {
  const [isAuthenticated,setIsAuthenticated]=useState(false);

  const PrivateRoute=({element})=>{
    return isAuthenticated? element:<Navigate to='/login' />
  }


  return (
    <div className=" App">
      <RefreshHabndler setIsAuthenticated={setIsAuthenticated} />
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/emp' element={<Employee/>} />
        <Route path='/edit/:id' element={<PrivateRoute element={<UpdateEmployee/>}/>} />
        <Route path='/delete/:id' element={<DeleteEmployeeModal/>} />
        <Route path='/create' element={<CreateEmployee/>} />
        <Route path='/home' element={<PrivateRoute element={<Home/>}/>} />
      </Routes>
    </div>
  );
}

export default App;
