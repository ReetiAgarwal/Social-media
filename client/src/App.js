import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthContext } from './context/AuthContext';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
// import Test from './Test';

function App() {

  const {user} = useContext(AuthContext);

  return (
    <>
      {/* <Test/> */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={user?<Home/>:<Register/>} />
          <Route path='/profile/:username' element={<Profile />} />
          <Route path='/login' element={user?<Navigate to="/" />:<Login/>} />
          <Route path='/register' element={user?<Navigate to="/" />:<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
