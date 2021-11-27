import BasicButton from "../Buttons/BasicButton/BasicButton";

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
                    text="home"
                    path="/"
                    />
                    <BasicButton
                    text="about"
                    path="/AboutMe"
                    />
                    <BasicButton
                    text="other"
                    />
                    <button className="BasicButton">
                        <a href="https://www.dropbox.com/s/xscmkh30mj4h4oq/AustinWhitbeck_Resume_2021.pdf?dl=0" target="_blank">Resume</a>
                    </button>
                </nav>
            </section>
            <div className="HeaderSection3"></div>
            <div className="HeaderSection2"></div>
        </header>
    )
}

export default Header;