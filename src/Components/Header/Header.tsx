import BasicButton from "../Buttons/BasicButton/BasicButton";

import "./Header.css";


const Header = () => {

    return(
        <header className="Header">
            <h1>Austin Whitbeck</h1>
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
                <a href="https://www.dropbox.com/s/xscmkh30mj4h4oq/AustinWhitbeck_Resume_2021.pdf?dl=0">Resume</a>
            </nav>
        </header>
    )
}

export default Header;