import Card from "../components/Card"

function Proyects() {

    const proyects = [
        {
            id: 1,
            name: "zBank",
            description: "Proyecto realizado para el curso de Desarrollo Web - Coderhouse. Sitio web estático de un banco digital desarrollado y diseñado con: Figma, HTML, CSS/SASS y Bootstrap.",
            image: "/img/proyects/zbank.png",
            ghLink: "https://github.com/mmontecalvo/zbank-Montecalvo",
            webLink: "https://zbank.netlify.app/",
        },
        {
            id: 2,
            name: "MM Investments",
            description: "Proyecto realizado para el curso de JavaScript - Coderhouse. Sitio web de un fondo de inversión que tiene diferentes planes por defecto, o si el usuario lo desea, puede personalizar su propio plan. Desarrollado con HTML, CSS, Bootstrap y JavaScript.",
            image: "/img/proyects/mm-investments.png",
            ghLink: "https://github.com/mmontecalvo/mm-investments",
            webLink: "https://mmontecalvo.github.io/mm-investments/",
        },
        {
            id: 3,
            name: "Task List App",
            description: "Aplicación web creada a modo de práctica con React Js y Material UI. Consiste en una lista de tareas, donde las mismas se pueden agregar, marcar como realizadas, o eliminar, mientras son almacenadas en el LocalStorage.",
            image: "/img/proyects/task-list.png",
            ghLink: "https://github.com/mmontecalvo/TaskList-ReactJs",
            webLink: "https://mmontecalvo.github.io/TaskList-ReactJs/",
        },
        {
            id: 4,
            name: "Las Condes Web",
            description: "Proyecto realizado para el curso de React Js - Coderhouse. El sitio web es un e-commerce, donde se puede filtrar los productos por categorías, ver cada uno en detalle y agregarlos al carrito o eliminarlos del mismo.",
            image: "/img/proyects/lascondes.png",
            ghLink: "https://github.com/mmontecalvo/montecalvo-lascondes",
            webLink: "https://lascondes.netlify.app/",
        }
    ]

    return (
        <section className="proyects mainContent">
            <h2 className="proyects__title">Proyectos</h2>
            <div className="proyects__cards">
                {
                    proyects.map((proyect) => {
                        return (
                            <Card key={proyect.id} proyect={proyect} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Proyects
