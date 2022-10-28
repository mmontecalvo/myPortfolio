import logo1 from '../img/technologies/Visual Studio Code.svg';
import logo2 from '../img/technologies/Git.svg';
import logo3 from '../img/technologies/Github.svg';
import logo4 from '../img/technologies/HTML5.svg';
import logo5 from '../img/technologies/CSS3.svg';
import logo6 from '../img/technologies/Sass.svg';
import logo7 from '../img/technologies/Bootstrap.svg';
import logo8 from '../img/technologies/Javascript.svg';
import logo9 from '../img/technologies/React.svg';
import logo10 from '../img/technologies/npm.svg';
import logo11 from '../img/technologies/Material UI (MUI).svg';
import logo12 from '../img/technologies/Figma.svg';
import logo13 from '../img/technologies/Firebase.svg';

function Carrousel() {

    const gallery = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13];

    return (
        <div className="carrousel">
                {
                    gallery.map((logo)=>{
                        return (
                            <div key={logo} className="carrousel__img">
                                <img src={logo} alt="" />
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default Carrousel
