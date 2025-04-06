import { useState, useEffect } from 'react';
import database from '../../data/evento';
import {  useParams } from 'react-router-dom';
import style from './EditarEvento.module.css';
import HeaderEvento from '../../components/HeaderEvento/HeaderEvento';
import Footer from '../../components/Footer/Footer';

function editarEvento() {
  const [evento, setEvento] = useState({ id: '', nome: '', descricao: '', data: '', local: '' });
  const { id } = useParams();
 

  useEffect(() => {
    const eventoEditado = database.listarEventos().find(event => event.id === id);
    if (eventoEditado) {
      setEvento(eventoEditado);
    }
  }, [id]);

  const editar = (e) => {
    e.preventDefault();
    database.editarEventos(evento.id, evento);
  };

  return (
    <>
      <HeaderEvento />
      <div className={style.evento}>
        <h1>Editar Evento</h1>

        <form onSubmit={editar}>
          <input
            type="text"
            placeholder="Nome do Evento"
            value={evento.nome}
            onChange={(e) => setEvento({ ...evento, nome: e.target.value })}
          />
          <textarea
            placeholder="Descrição"
            value={evento.descricao}
            onChange={(e) => setEvento({ ...evento, descricao: e.target.value })}
          />
          <input
            type="date"
            value={evento.data}
            onChange={(e) => setEvento({ ...evento, data: e.target.value })}
          />
          <input
            type="text"
            placeholder="Local"
            value={evento.local}
            onChange={(e) => setEvento({ ...evento, local: e.target.value })}
          />
          <button type="submit">Atualizar Evento</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default editarEvento;
