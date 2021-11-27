import SocialButton from "../Buttons/SocialButton/SocialButton";

// CSS
import './Footer.css';


const Footer = () => {

    return(
        <footer className="container footer" >
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
            

            
        </footer>
    )
}

export default Footer;