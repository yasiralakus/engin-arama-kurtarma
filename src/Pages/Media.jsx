import PhotoGallery from "./PhotoGallery";

export default function Media() {

    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <h1>- Medya -</h1>
                    <h2>Profesyonel ol, öyle kurtar! Profesyonel yaklaş, öyle yaşat!</h2>
                </div>
                <img src="./images/hero.jpg" alt="" />
            </div>

            <div className="media-page">
                <h1>Foto Galeri</h1>
                <PhotoGallery />
            </div>
        </>
    )
}