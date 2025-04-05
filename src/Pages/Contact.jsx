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
                <h2>Bizi <Link target="_blank" rel="noopener noreferrer" to={'https://www.x.com/44Engin_A_K_D'}>X</Link>'den takip edin!</h2>
                <h2>Bizi <Link target="_blank" rel="noopener noreferrer" to={'https://www.instagram.com/engin.arama.kurtarma.44'}>Instagram</Link>'dan takip edin!</h2>
                <h2>Bizi <Link target="_blank" rel="noopener noreferrer" to={'https://www.youtube.com/@enginaramavekurtarmadernegi'}>Youtube</Link>'dan takip edin!</h2>
                <h2><Link target="_blank" rel="noopener noreferrer" to={'https://www.whatsapp.com/channel/0029Vb4WAYDDuMRez2q1CK0U'}>WhatsApp</Link> kanalımıza katılın!</h2>
                <h2>Bize <Link target="_blank" rel="noopener noreferrer" to={'mailto:engin.arama.kurtarma.44@gmail.com'}>mail</Link> gönderin!</h2>
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