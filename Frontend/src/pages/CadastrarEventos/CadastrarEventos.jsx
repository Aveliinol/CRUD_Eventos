import { useState } from 'react';
import database from '../../data/evento';
import style from './CadastrarEvento.module.css';
import HeaderEvento from '../../components/HeaderEvento/HeaderEvento';
import Footer from '../../components/Footer/Footer';

function CadastrarEvento() {
  const [evento, setEvento] = useState({ id: '', nome: '', descricao: '', data: '', local: '' });


  const cadastrar = (e) => {
    e.preventDefault();
    database.criarEventos(evento);
  };

  return (
    <>
      <HeaderEvento />
      <div className={style.cadastrar}>
        <h1>Cadastrar Novo Evento</h1>

        <form onSubmit={cadastrar}>
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
          <button type="submit">Cadastrar Evento</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default CadastrarEvento;
