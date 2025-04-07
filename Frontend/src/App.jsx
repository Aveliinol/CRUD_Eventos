import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Eventos from "./pages/Eventos/Eventos";
import CadastrarEvento from "./pages/CadastrarEventos/CadastrarEventos"
import EditarEvento from "./pages/EditarEventos/EditarEventos"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/cadastrar" element={<CadastrarEvento/>}/>
        <Route path="/editar/:id" element={<EditarEvento/>}/>
      </Routes>
    </Router>
  );
}

export default App;