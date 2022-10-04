import React, { useState } from "react";
import { MdCheck } from 'react-icons/md';

import './styles.css';

const CadastroUsuario = () => {
    const [usuarioCadastro, setUsuarioCadastro] = useState('');
    const [senhaCadastro, setSenhaCadastro] = useState('');

    return (
        <div className="form">
            <form className="formulario">
                <input id="usuario" className="field" placeholder="Seu nome de usuário" name="usuario" onChange={e => {setUsuarioCadastro(e.target.value)}}/>

                <input id="senha" className="field" placeholder="Sua senha" name="senha" onChange={e => {setSenhaCadastro(e.target.value)}}/>

                <button type="submit" className="botao"><span><MdCheck /> Confirmar</span></button>
            </form>
        </div>
    );
};

export default CadastroUsuario;