import { useState } from 'react';
import Button from './Button';
import BurgerMenu from './BurgerMenu';
import { NavLink } from 'react-router-dom';

function Header() {

    const logo = "<h1>Matias Montecalvo</h1>";

    const [ showMenu, setShowMenu ] = useState(((window.innerWidth < 1020) ? false : true));

    const setMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <header className="mainHeader">
            <div className="header">
                <div className="header__logo">
                    <NavLink to="/">{logo}</NavLink>
                </div>
                {
                    (window.innerWidth < 1020) && <BurgerMenu setMenu={setMenu}/>
                }
                <nav className={showMenu ? "header__menu" : "disabled"}>
                    <NavLink to="/Sobre-mi"><Button btnText={"Sobre mí"} /></NavLink>
                    <NavLink to="/Proyectos"><Button btnText={"Proyectos"} /></NavLink>
                    <NavLink to="/Contacto"><Button btnText={"Contacto"} /></NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header
