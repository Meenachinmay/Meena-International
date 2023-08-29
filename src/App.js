
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Services";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Aboutus } from "./components/Aboutus";
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Aboutus></Aboutus>
      <Team></Team>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
