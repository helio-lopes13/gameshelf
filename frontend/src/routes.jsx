import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';

const GameShelfRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/login"/>
                <Route element={<CadastroUsuario />} path="/register"/>
            </Routes>
        </BrowserRouter>
    );
};

export default GameShelfRouter;