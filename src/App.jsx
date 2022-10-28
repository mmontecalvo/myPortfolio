import Header from './components/Header';
import Home from './containers/Home';
import AboutMe from './containers/AboutMe';
import Proyects from './containers/Proyects';
import Contact from './containers/Contact';
import Page404 from './containers/Page404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre-mi" element={<AboutMe />} />
          <Route path="/Proyectos" element={<Proyects />} />
          <Route path="/Contacto" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;





