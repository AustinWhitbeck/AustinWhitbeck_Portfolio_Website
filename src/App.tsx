import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './Components/AboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
        <Route path="/AboutMe" element={ <AboutMe /> }/>
          
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
