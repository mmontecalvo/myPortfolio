import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

    const inputElement = useRef(null);

    function inputFocus() {
        if (inputElement.current) {
            inputElement.current.focus();
        }
    }

    useEffect(() => {
        inputFocus();
    }, [inputElement])

    const frmContact = { userEmail:'', emailTitle:'', emailDetails:'' };
    const [contact,setContact] = useState(frmContact);
    const handleChange = e => { 
            const {name,value} = e.target;
            setContact({...contact,[name]:value}); 
    };
    const handleSubmit = e =>{
            e.preventDefault();
        
            emailjs.send('service_y29e26u','template_lbnp6xy', contact, 'oFrRhcXjqLcVOCTHU')
            .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setContact(frmContact);
            }, (err) => {
                    console.log('FAILED...', err);
            });
    }
    
    return (
        <section className="contact mainContent">
            <h2 className="contact__title">Contacto</h2>
            <div className="contact__ways">
                <a href="https://wa.me/+5491164363466?" target="_blank" rel="noreferrer">
                    <WhatsAppIcon className="ways__icon" />
                </a>
                <a href="https://github.com/mmontecalvo" target="_blank" rel="noreferrer">
                    <GitHubIcon className="ways__icon"/>
                </a>
                <a href="https://www.linkedin.com/in/dev-matias-montecalvo/" target="_blank" rel="noreferrer">
                    <LinkedInIcon className="ways__icon"/>
                </a>
            </div>
            <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form__to">
                    <EmailIcon className="to__icon" onClick={inputFocus} />
                    <span className="to__email">mati.montecalvo@gmail.com</span>
                </div>
                <div className="form__write">
                    <div className="write__floating">
                        <input type="text" value={contact.emailTitle} name="emailTitle" onChange={handleChange} className="floating__input" placeholder="Asunto" ref={inputElement} />
                    </div>
                    <div className="write__floating">
                        <input type="email" value={contact.userEmail} name="userEmail" onChange={handleChange} className="floating__input" placeholder="Email"/>
                    </div>
                    <div className="write__floating">
                        <textarea value={contact.emailDetails} name="emailDetails" onChange={handleChange} className="floating__input floating__input--text-area" placeholder="Escribe tu mensaje."></textarea>
                    </div>
                </div>
                <input className="form__send btn" type="submit" value="Enviar Mensaje"/>
            </form>
        </section>
    )
}

export default Contact