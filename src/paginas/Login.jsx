// ARQUIVO: src/paginas/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Importa o CSS específico

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // --- LÓGICA DE AUTENTICAÇÃO SIMPLES ---
    if (email === 'EquipeRocket@gmail.com' && senha === '123456') {
      alert('Login efetuado com sucesso!');
      
      // Redireciona para a página inicial ('/') após o login
      navigate('/'); 
      
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Acesso ao Sistema</h1>
        
        <div className="form-group">
          <label htmlFor="email">Email / Usuário:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="login-button">Entrar</button>
      </form>
    </div>
  );
}

export default Login;