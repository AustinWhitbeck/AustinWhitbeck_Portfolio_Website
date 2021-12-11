

import Mech from '../Mech/Mech';
import './AboutMe.css';

const AboutMe = () => {

    return(
        <main className="container">
            <h3 className="pageTitle">The Pilot: Who am I?</h3>
            <section className="sub-container-about">
                <p><span className="highlighted-text">Hello there!</span> Thank you for taking the time to visit my page. I welcome you and embrace all aspects of you.
                My name is <span className="highlighted-text">Austin Whitbeck</span> and I am a designer, developer, and a big nerd. </p>
                <p>In this space, you will find the products of my journey, finding my way through the aether. I encourage you to bounce around, explore the schematics, and remember that <span className="highlighted-text">you</span> are <span className="highlighted-text">important</span> and <span className="highlighted-text">seen</span>.</p>
            </section>
            {/* <section className="sub-contain-right">
                <h3>The Journey to Today</h3>
            </section> */}
            {/* <Mech
            size="aboutMechDesktop"
            /> */}

        </main>
    )
}

export default AboutMe;