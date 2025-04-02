const eventos = [





   {
     nome:'Show de Rock',
     data:'06/01/25',
     descricao:'Festival Rock in Rio',



   },

   {
     nome:'Show de Sertanejo',
     data:'06/01/25',
     descricao:'Festival Sertanejo in Natal',


   },

   {
     nome:'Show de Forró',
     data:'24/06/25',
     descricao:'Sao Joao do Arena'

   },

   {
     nome:'Show de Rap',
     data:'06/01/25',
     descricao:'Festival Rap in Natal'


   }
  
]







  function criarEvento(evento){
    eventos.push(evento)
  }




  function lerEventos(){
      return eventos
     }
     




  function atualizarEventos(evento){
    if (!evento.nome || !evento.data || !evento.descricao){
      console.log('Evento invalido')
    }
    const eventoExistente= eventos.findIndex(evento => evento.id === evento.id);

    if(eventoExistente) {
        console.log("evento atualizado", evento.id);
        return evento;
    } else {
        console.log("evento não encontrado");
    }
  }
   










  function removerEventos(evento){
    const eventoExcluido = eventos.indexOf(evento);
    if(index> -1){
      eventos.splice(eventoExcluido, 1);
    }

    
  }










    export default { criarEvento, lerEventos, atualizarEventos, removerEventos }






















  

























