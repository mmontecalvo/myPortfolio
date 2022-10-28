import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

function Card({proyect}) {

    return (
        <article className="card">
            <picture className="card__img">
                <img src={proyect.image} alt="" />
            </picture>
            <div className="card__info">
                <h3 className="info__name">{proyect.name}</h3>
                <p className="info__text">{proyect.description}</p>
            </div>
            <div className="card__links">
                <a href={proyect.ghLink} target="_blank" rel="noreferrer"><GitHubIcon className="link"/></a>
                <a href={proyect.webLink} target="_blank" rel="noreferrer"><LanguageIcon className="link"/></a>
            </div>
        </article>
    )
}

export default Card
