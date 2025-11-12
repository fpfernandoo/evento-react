import "../styles/Header.css";

import { Link } from "react-router";
function Header() {
    return (
      <header>

        <h2>Gerenciador de Eventos SENAI</h2>
        <nav>
          <className>
          <Link to="/">Início</Link> | <Link to="/sobre">Sobre</Link>{" "}
          </className>
        </nav>
      </header>
    );
  }
  export default Header;
  