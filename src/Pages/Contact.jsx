import { Link } from "react-router-dom";
import MapComponent from "./MapComponent";

export default function Contact() {

    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <h1>- İletişim -</h1>
                    <h2>Profesyonel ol, öyle kurtar! Profesyonel yaklaş, öyle yaşat!</h2>
                </div>
                <img src="./images/hero.jpg" alt="" />
            </div>

            <div className="contact-page">
                <h1>Sosyal Medya Hesaplarımız;</h1>
                <h2>Bizi <Link>X</Link>'den takip edin!</h2>
                <h2>Bizi <Link>Instagram</Link>'dan takip edin!</h2>
                <h2>Bizi <Link>Youtube</Link>'dan takip edin!</h2>
                <h2><Link>WhatsApp</Link> kanalımıza katılın!</h2>
                <h2>Bize <Link>mail</Link> gönderin!</h2>
            </div>

            <div className="contact-page">
                <h1>Telefon</h1>
                <h2>0 537 811 02 51</h2>
            </div>

            <div className="contact-page">
                <h1>Adres</h1>
                <a href="https://www.google.com/maps?q=Doğu+Mahallesi+Doğu+27+Sokak+No:+5+Doğanşehir+Malatya" target="_blank">Doğu Mahallesi, Doğu 27 Sokak, No: 5, Doğanşehir/Malatya
                </a>
                <div className="maps">
                    <MapComponent />
                    <img src="./images/dernek.jpg" alt="" />
                </div>
            </div>

        </>
    )
}