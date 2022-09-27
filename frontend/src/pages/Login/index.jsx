import React from "react";
import { MdEast } from 'react-icons/md';

import './styles.css';

const Login = () => {
    return (
        <div className="form">
            <form className="formulario">
                <input id="usuario" className="field" placeholder="Seu nome de usuário" name="usuario" />

                <input id="senha" className="field" placeholder="Sua senha" name="senha" />

                <button type="submit" className="botao"><span><MdEast /> Entrar</span></button>
            </form>
        </div>
    );
};

export default Login;