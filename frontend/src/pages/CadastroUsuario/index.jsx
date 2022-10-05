import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdCheck } from 'react-icons/md';
import api from "../../services/api";

import './styles.css';

const CadastroUsuario = () => {
    const [formData, setFormData] = useState({
        usuario: '',
        senha: ''
    });

    const navigate = useNavigate();

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

        console.log('Usuário:', usuario, '\nSenha:', senha);
        await api.post('users/register', data);

        navigate('/login');
    }
    
    return (
        <div className="form">
            <form className="formulario" onSubmit={handleSubmit}>
                <input id="usuario" className="field" placeholder="Seu nome de usuário" name="usuario" onChange={handleInputChange}/>

                <input id="senha" className="field" type="password" placeholder="Sua senha" name="senha" onChange={handleInputChange}/>

                <button type="submit" className="botao"><span><MdCheck /> Confirmar</span></button>
            </form>
        </div>
    );
};

export default CadastroUsuario;