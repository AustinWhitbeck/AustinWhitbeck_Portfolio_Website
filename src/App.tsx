import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './Components/AboutMe/AboutMe';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Mech from './Components/Mech/Mech';

function App() {
  return (
    <div className="App">
      <Router>

        <Header/>

        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/AboutMe" element={ <AboutMe /> }/>
        </Routes>
      
        {/* <Footer/> */}
        {/* <Mech/> */}

      </Router>
    
    </div>
  );
}

export default App;
