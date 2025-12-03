import "../styles/Header.css";
import { 
  BsHouseFill,      // Ícone para Início
  BsInfoCircleFill,     // Ícone para Sobre
  BsCalendarEventFill,  // Ícone para Cadastrar Evento
  BsBoxArrowInRight     // Ícone para Login
} from 'react-icons/bs';
import { Link } from "react-router";
function Header() {
    return (
      <header>

        <h2>Gerenciador de Eventos SENAI</h2>
        <div className="login-header">
        <Link to="/login" className="btn-login-header">Login</Link>
        </div>
        <nav>
          <Link to="/"><BsHouseFill/> Início</Link>
          <Link to="/sobre"><BsInfoCircleFill/> Sobre</Link>{" "} 
          <Link to="/cadastrar">< BsCalendarEventFill/> Cadastrar Evento</Link>
        </nav>
      </header>
    );
  }
  export default Header;
  