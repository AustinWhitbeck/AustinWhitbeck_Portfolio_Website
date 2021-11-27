import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './Components/AboutMe/AboutMe';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Mech from './Components/Mech/Mech';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Router>

        <Header/>

        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/AboutMe" element={ <AboutMe /> }/>
          <Route path="/Projects" element={ <Projects /> }/>
        </Routes>
      
        {/* <Footer/> */}
        {/* <Mech/> */}

      </Router>
    
    </div>
  );
}

export default App;
