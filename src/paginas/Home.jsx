import Evento from "../components/Evento";
import "../styles/Home.css";

function Home() {
  return (
    <main className="main-home">
      <h1> Bem vindo ao Gerenciador de Eventos </h1>
      <p> Aqui você fica por dentro dos eventos </p>
      <Evento nome="Mundo Senai" data="05/11/2025" local="Auditório" />
      <Evento nome="EFAPI" data="05/12/2025" local="Efapi" />
      <Evento nome="Palestra" data="05/11/2025" local="Auditório" />
    </main>
  );
}
export default Home;
