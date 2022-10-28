function AboutMe() {
    return (
        <section className="aboutMe mainContent">
            <h2 className="aboutMe__title">Sobre mí</h2>
            <div className="aboutMe__body">
                <picture className="body__gif">
                    <img src="https://media0.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e477l887r7mtumje9swc30ncx6bumh3w86e3ovu1gzd&rid=giphy.gif&ct=g" alt="" />
                </picture>
                <div className="body__text">
                    <p>Tengo 25 años, y vivo en la provincia de Buenos Aires, Argentina. Soy estudiante de <strong>Desarrollo Web</strong>, tengo conocimientos de diseño, y encontré, principalmente en el área del <strong>Front-end</strong> una pasión.</p>
                    <p>Actualmente estudio la carrera de <strong>Desarrollador Web Full Stack</strong> en Coderhouse, y me capacito constantemente de forma autodidácta.</p>
                    <p>Por otro lado, me capacito en el sector de las inversiones, realicé el curso de <strong>Asesor Global de Inversiones</strong> de ICB (Instituto de capacitación Bursátil), y hago trading de divisas e inversiones en criptomonedas.</p>
                    <p>Además, me apasionan los <strong>deportes</strong>, el <strong>mindfulness</strong>.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe