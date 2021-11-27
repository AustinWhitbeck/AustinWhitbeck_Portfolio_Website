import BasicButton from "../Buttons/BasicButton/BasicButton";
import SocialButton from "../Buttons/SocialButton/SocialButton";

import "./Header.css";


const Header = () => {

    return(
        <header className="Header">
            <section className="HeaderSectionTitle">
                <h3 className="HeaderTitle">Austin Whitbeck</h3>
            </section>
            <section className="HeaderSectionMain">
                <nav className="HeaderNav">
                    <BasicButton
                    text="HOME"
                    path="/"
                    />
                    <BasicButton
                    text="ABOUT"
                    path="/AboutMe"
                    />
                    <BasicButton
                    text="PROJECTS"
                    path="/Projects"
                    />
                    <button className="BasicButton">
                        <a href="https://www.dropbox.com/s/xscmkh30mj4h4oq/AustinWhitbeck_Resume_2021.pdf?dl=0" target="_blank">RESUME</a>
                    </button>
                </nav>
            </section>
            <div className="HeaderSection2">
                <SocialButton 
                    link="https://www.linkedin.com/in/austinwhitbeck/"
                    icon="LinkedIn"
                    text="LinkedIn"
                />
                <SocialButton 
                    link="https://github.com/AustinWhitbeck"
                    icon="GitHub"
                    text="GitHub"
                />
                <SocialButton 
                    link="https://www.artstation.com/austinwhitbeckart"
                    icon="ArtStation"
                    text="ArtStation"
                />
            </div>
            <div className="HeaderSection3"></div>
        </header>
    )
}

export default Header;