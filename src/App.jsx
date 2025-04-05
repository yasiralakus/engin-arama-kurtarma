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
                    <Link><i className="fa-brands fa-youtube"></i></Link>
                </li>
                <li>
                    <Link><i className="fa-brands fa-x-twitter"></i></Link>
                </li>
                <li>
                    <Link><i className="fa-brands fa-instagram"></i></Link>
                </li>
                <li>
                    <Link><i className="fa-brands fa-whatsapp"></i></Link>
                </li>
                <li>
                    <Link><i className="fa-solid fa-envelope"></i></Link>
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
                <p><Link to={'https://www.yasiralakus.com.tr'}>yasiralakus</Link> tarafından kodlanmıştır.</p>
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

        </div>
    )
}