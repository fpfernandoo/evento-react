import React, { useState } from "react";
import "../styles/CadastroEventos.css";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'; 

function CadastroEvento({ onCadastrar }) { 
    const [nome, setNome] = useState("");
    const [data, setData] = useState("");
    const [local, setLocal] = useState("");
    const navigate = useNavigate();

    function Enviar(e) {
        e.preventDefault();

        const novoEvento = {
            titulo: nome, 
            data,
            local,
        };

        setNome("");
        setData("");
        setLocal("");
        
        toast.success(`Evento "${nome}" cadastrado com sucesso!`); 

    }

    return (
        <div className="cadastroEvento-container">
            <h2>Cadastrar Evento</h2>

            <form onSubmit={Enviar} className="form-evento">
                
                <label>Título do Evento:</label>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                /> 

                <label>Data:</label>
                <input
                    type="date"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    required
                />

                <label>Local:</label>
                <input
                    type="text"
                    value={local}
                    onChange={(e) => setLocal(e.target.value)}
                    required
                />
                <div className="botoes">
                    <button type="submit" className="btn-salvar">Salvar Evento</button>
                    <button type="button" className="btn-salvar" onClick={() => navigate("/")}> Voltar </button>
                </div>
            </form>
        </div>
    );
}
export default CadastroEvento;