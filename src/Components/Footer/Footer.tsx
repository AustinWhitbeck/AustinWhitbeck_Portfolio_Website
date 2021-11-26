import SocialButton from "../Buttons/SocialButton/SocialButton";

// CSS
import './Footer.css';


const Footer = () => {

    return(
        <footer className="container footer" >
            <p>Footer</p>
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
            

            
        </footer>
    )
}

export default Footer;