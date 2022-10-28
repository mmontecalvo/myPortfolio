import photo from '../img/photo.jpg';
import Carrousel from '../components/Carrousel';

function Home() {
    return (
        <section className="home mainContent">
            <div className="home__content">
                <h1 className="content__text">¡Hola!</h1>
                <h1 className="content__text">Soy <span className="text__effect">Matias</span> ,</h1>
                <h1 className="content__text">Front-end Developer</h1>
                <picture className="content__image">
                    <img src={photo} alt="" />
                </picture>
            </div>
            <Carrousel />
        </section>
    )
}

export default Home
