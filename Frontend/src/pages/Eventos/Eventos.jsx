import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import database from '../../data/evento';
import style from './Eventos.module.css';
import CardEvento from "../../components/CardEvento/CardEvento";
import HeaderEvento from "../../components/HeaderEvento/HeaderEvento";
import Footer from "../../components/Footer/Footer";


function Eventos() {
  const [eventos, setEventos] = useState(database.listarEventos());
  
  const deletar = (id) => {
    database.excluirEvento(id);
    setEventos(database.listarEventos());
  };
 
  return (
    <>
      <HeaderEvento />
      <div className={style.evento}>
        <h1>Lista de Eventos</h1>
        <ul>
          {eventos.map((evento) => (
            <li key={evento.id}>
              <CardEvento evento={evento} />
              <Link to={`/editar/${evento.id}`}>
                <button>Editar</button>
              </Link>
              <button onClick={() => deletar(evento.id)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Eventos;
