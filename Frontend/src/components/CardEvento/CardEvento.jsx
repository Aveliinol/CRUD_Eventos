function CardEvento({evento}){
    return(
    <div>
        <img 
        src={evento.imagem}
        alt={evento.nome} 
        />
        <h3>{evento.nome}</h3>
        <p>{new Date(evento.data).toLocaleDateString("pt-BR")}</p>
        <p>{evento.local}</p>
    </div>
    );
}

export default CardEvento