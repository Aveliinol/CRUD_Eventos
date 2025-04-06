import { useState } from 'react';
import database from '../../data/evento';
import style from './Eventos.module.css';
import CardEvento from "../../components/CardEvento/CardEvento";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


function Eventos(){
    const [eventos, setEventos] = useState(database.listarEventos());
    const [evento, setEvento] = useState({ id: '', nome: '', descricao: '', data: '', local: '' });
  
    const cadastrar = (e) => {
      e.preventDefault();
      if (evento.id) {
        database.editarEventos(evento.id, evento);
      } else {
        database.criarEventos(evento);
      }
      setEventos(database.listarEventos()); 
      limparFormulario(); 
    };
  
    const limparFormulario = () => {
      setEvento({ id: '', nome: '', descricao: '', data: '', local: '' });
    };
  
    const editarEvento = (eventoId) => {
      const eventoEditado = eventos.find((evento) => evento.id === eventoId);
      setEvento(eventoEditado);
    };
  
    const deletar = (id) => {
      database.excluirEvento(id);
      setEventos(database.listarEventos());
    };
  
    return (
        <>
        <Header/>
      <div className={style.evento}>
        <h1>{evento.id ? 'Editar Evento' : 'Cadastrar Novo Evento'}</h1>
  
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
          <button type="submit">{evento.id ? 'Atualizar Evento' : 'Cadastrar Evento'}</button>
        </form>
  
        <h2>Lista de Eventos</h2>
        <ul>
          {eventos.map((evento) => (
            <li key={evento.id}>
                 <CardEvento key={evento.id} evento={evento} />
              <button onClick={() => editarEvento(evento.id)}>Editar</button> | 
              <button onClick={() => deletar(evento.id)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
      </>
    );
  };
  
  export default Eventos;