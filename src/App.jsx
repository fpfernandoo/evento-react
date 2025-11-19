import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import CadastroEventos from "./paginas/CadastroEventos";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastrar" element={<CadastroEventos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
