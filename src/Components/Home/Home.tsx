import { Button } from "@mui/material";
import linkedin from '../../Icons/linkedin_icon.png';
import Mech from "../Mech/Mech";


//  CSS 
import './Home.css';

const Home = () => {

    return(
        <main>
            <section className="container homeTagline">
                <h2 className="tagline">Conceptualize your Goals</h2>
                <h2 className="tagline">Build your</h2>
                <h1 className="tagline">Future</h1>
            </section>
            <Mech/>
        </main>
    )
}

export default Home;