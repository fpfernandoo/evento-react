import "../styles/Footer.css";

function Footer() {
    //função pra Data
  
    const ano = new Date().getFullYear();
  
    return (
      <footer className="main-footer">
        <p> Equipe Rocket - {ano}</p>
      </footer>
    ); //fecha retorno
  } //fecha função
  
  export default Footer;
  