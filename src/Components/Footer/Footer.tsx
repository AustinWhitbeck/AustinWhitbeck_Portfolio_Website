import SocialButton from "../Buttons/SocialButton/SocialButton";


const Footer = () => {

    return(
        <footer className="container" >
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