import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Registro from '../Pages/Login/Registro';
import Producto from '../Pages/Producto/Producto';
import { UserContextProvider } from '../Services/Context/UserContext';
import { AnimatePresence } from 'framer-motion';

function MainRoute() {
    const { user } = UserContextProvider;

    return (
        <AnimatePresence>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Registro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/producto/:id" element={<Producto />} />
            </Routes>
        </AnimatePresence>
    );
}

export default MainRoute;
