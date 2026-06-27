import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
