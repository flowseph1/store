import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Registro from '../Pages/Login/Registro';
import { UserContextProvider } from '../Services/Context/UserContext';

function MainRoute() {
    const { user } = UserContextProvider;

    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Registro />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
}

export default MainRoute;
