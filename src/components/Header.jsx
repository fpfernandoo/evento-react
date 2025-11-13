import "../styles/Header.css";



import { Link } from "react-router";
function Header() {
    return (
      <header>

        <h2>Gerenciador de Eventos SENAI</h2>
        <nav>
          <Link to="/">Início</Link> | <Link to="/sobre">Sobre</Link>{" "}
          <button className="btn-entrar">Entrar</button>
        </nav>
      </header>
    );
  }
  export default Header;
  