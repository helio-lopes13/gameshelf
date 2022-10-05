import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdEast } from 'react-icons/md';
import api from "../../services/api";

import './styles.css';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        usuario: '',
        senha: ''
    });
    
    function handleInputChange(event) {
        const {name, value} = event.target;
        
        setFormData({...formData, [name]: value});
    }
    
    async function handleSubmit(event) {
        event.preventDefault();
        
        const {usuario, senha} = formData;

        const data = new FormData();

        data.append('usuario', usuario);
        data.append('senha', senha);

        await api.post('/login', data);

        navigate('/');
    }
    
    return (
        <div className="form">
            <form className="formulario" onSubmit={handleSubmit}>
                <input id="usuario" className="field" placeholder="Seu nome de usuário" name="usuario" onChange={handleInputChange}/>

                <input id="senha" className="field" placeholder="Sua senha" name="senha" type="password" onChange={handleInputChange} />

                <button type="submit" className="botao"><span><MdEast /> Entrar</span></button>
            
                <Link className="link" to="/register">Cadastre-se</Link>
            </form>
        </div>
    );
};

export default Login;