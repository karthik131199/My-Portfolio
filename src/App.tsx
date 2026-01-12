
import './App.css'
import NavBar from './components/navbar';
import Summary from './components/summary';
import Experience from './components/experience';
import Skills from './components/skills';
import ContactMe from './components/contact'
function App() {

  return (
    <>
      <NavBar />
      <section id='home'>
        <Summary />
      </section>

      <section id='experience'>
        <Experience />
      </section>

      <section id='skills'>
        <Skills />
      </section>

      <section id='contact'>
        <ContactMe />
      </section>
    </>
  )
}

export default App
