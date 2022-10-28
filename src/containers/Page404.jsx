import Button from '../components/Button';
import { NavLink } from 'react-router-dom';

function Page404() {
    return (
        <section className="page404 mainContent">
            <h2 className="page404__title">404</h2>
            <p className="page404__text">La página que estás buscando no puede ser encontrada.</p>
            <NavLink to="/"><Button btnText={"Home"} /></NavLink>
        </section>
    )
}

export default Page404
