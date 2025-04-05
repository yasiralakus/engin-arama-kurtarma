import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function App() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="full-page">
            
            <ul className="top-links">
                <p>{time.toLocaleDateString("tr-TR")} - {time.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })}</p>
                <li>
                    <Link target="_blank" rel="noopener noreferrer" to={'https://www.youtube.com/@enginaramavekurtarmadernegi'}><i className="fa-brands fa-youtube"></i></Link>
                </li>
                <li>
                    <Link target="_blank" rel="noopener noreferrer" to={'https://www.x.com/44Engin_A_K_D'}><i className="fa-brands fa-x-twitter"></i></Link>
                </li>
                <li>
                    <Link target="_blank" rel="noopener noreferrer" to={'https://www.instagram.com/engin.arama.kurtarma.44'}><i className="fa-brands fa-instagram"></i></Link>
                </li>
                <li>
                    <Link target="_blank" rel="noopener noreferrer" to={'https://www.whatsapp.com/channel/0029Vb4WAYDDuMRez2q1CK0U'}><i className="fa-brands fa-whatsapp"></i></Link>
                </li>
                <li>
                    <Link target="_blank" rel="noopener noreferrer" to={'mailto:engin.arama.kurtarma.44@gmail.com'}><i className="fa-solid fa-envelope"></i></Link>
                </li>
            </ul>

            <header className="header">

                <div className="logo">
                    <h1>Engin Arama ve Kurtarma Derneği</h1>
                </div>

                <ul className="nav">
                    <li>
                        <NavLink to={'/'}>Hakkımızda</NavLink>
                    </li>
                    <span></span>
                    <li>
                        <NavLink to={'/medya'}>Medya</NavLink>
                    </li>
                    <span></span>
                    <li>
                        <NavLink to={'/ekiplerimiz'}>Ekiplerimiz</NavLink>
                    </li>
                    <span></span>
                    <li>
                        <NavLink to={'/iletisim'}>İletişim</NavLink>
                    </li>
                    <span></span>
                    <li>
                        <Link to={'/bagis-yap'} className="donate-link">Bağış Yap</Link>
                    </li>
                </ul>

            </header>

            <Outlet />

            <footer className="footer">
                <ul className="top-links">
                    <li>
                        <Link target="_blank" rel="noopener noreferrer" to={'https://www.youtube.com/@enginaramavekurtarmadernegi'}><i className="fa-brands fa-youtube"></i></Link>
                    </li>
                    <li>
                        <Link target="_blank" rel="noopener noreferrer" to={'https://www.x.com/44Engin_A_K_D'}><i className="fa-brands fa-x-twitter"></i></Link>
                    </li>
                    <li>
                        <Link target="_blank" rel="noopener noreferrer" to={'https://www.instagram.com/engin.arama.kurtarma.44'}><i className="fa-brands fa-instagram"></i></Link>
                    </li>
                    <li>
                        <Link target="_blank" rel="noopener noreferrer" to={'https://www.whatsapp.com/channel/0029Vb4WAYDDuMRez2q1CK0U'}><i className="fa-brands fa-whatsapp"></i></Link>
                    </li>
                    <li>
                        <Link target="_blank" rel="noopener noreferrer" to={'mailto:engin.arama.kurtarma.44@gmail.com'}><i className="fa-solid fa-envelope"></i></Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to={'/'}>Hakkımızda</Link>
                    </li>
                    <li>
                        <Link to={'/medya'}>Medya</Link>
                    </li>
                    <li>
                        <Link to={'/ekiplerimiz'}>Ekiplerimiz</Link>
                    </li>
                    <li>
                        <Link to={'/iletisim'}>İletişim</Link>
                    </li>
                    <li>
                        <Link to={'/bagis-yap'}>Bağış Yap</Link>
                    </li>
                </ul>
            </footer>

            <div className="coded-by">
                <p><Link target="_blank" rel="noopener noreferrer" to={'https://www.yasiralakus.com.tr'}>yasiralakus</Link> tarafından kodlanmıştır.</p>
            </div>

        </div>
    )
}