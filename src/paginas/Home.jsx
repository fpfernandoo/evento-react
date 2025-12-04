import Evento from "../components/Evento";
import "../styles/Home.css";

function Home() {
  return (
    <main className="main-home">
      <h1> Bem vindo ao Gerenciador de Eventos </h1>
      <p> Aqui você fica por dentro dos eventos </p>
      <Evento nome="Aniversário do Renato" data="05/12/2025" local="Chácara Cristova" />
      <Evento nome="Natal" data="25/12/2025" local="Casa do Gustavo" />
      <Evento nome="Ano Novo" data="31/12/2025" local="Chácara dos Lanzarini" />
    </main>
  );
}
export default Home;
