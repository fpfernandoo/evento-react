import "../styles/Evento.css";

function Evento(props) {
    return (
      <div className="evento-main">
        <h3>{props.nome}</h3>
        <p>Data: {props.data}</p>
        <p>Local: {props.local}</p>
      </div>
    );
  }
  
  export default Evento;
