import CardEvento from "../../components/CardEvento/CardEvento";
import database from "../../data/evento"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import style from './home.module.css'

function Home() {

        const [eventos] = useState(database.listarEventos);
        return (
                <div className={style.Home}>
                        <Header />
                        <main>
                                <ul>
                                        {eventos.map((evento) => (
                                                <li key={evento.id}>
                                                        <CardEvento key={evento.id} evento={evento} />
                                                </li>
                                        ))}
                                </ul>
                        </main>
                        <Footer />
                </div>
        )
}

export default Home