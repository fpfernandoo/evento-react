import "../styles/Header.css";
import { 
  BsHouseFill,      
  BsInfoCircleFill,     
  BsCalendarEventFill,  
  BsDoorOpenFill   
} from 'react-icons/bs';
import { Link } from "react-router";

function Header() {
  return (
    <header>
<div className="header-logo-titulo">
        <Link to="/" className="logo-link">
    <img src="/logo_senai.png" alt="logo SENAI"/> 
</Link>
    </div>
        <div className="login-header">
        <Link to="/login" className="btn-login-header"><BsDoorOpenFill/> Login/Entrar</Link>
        </div>
        <div className="menu-header">
        <nav>
          <Link to="/"><BsHouseFill/> Início</Link> 
          <Link to="/cadastrar">< BsCalendarEventFill/> Cadastrar Evento</Link>
          <Link to="/sobre"><BsInfoCircleFill/> Sobre</Link>{" "}
        </nav>
        </div>
      </header>
    );
  }
  export default Header;
  