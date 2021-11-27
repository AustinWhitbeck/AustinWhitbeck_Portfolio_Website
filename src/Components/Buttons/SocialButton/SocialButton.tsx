import '../../../Icons/linkedin_icon.svg';
import linkedin from '../../../Icons/linkedin_icon.png';
import github from '../../../Icons/GitHub-Mark-32px.png';
import artstation from '../../../Icons/ArtStation_Icon_2.png';

// CSS
import './SocialButton.css';


interface Props {
    link: string,
    icon: string,
    text?: string
}


const SocialButton = ({ link, icon, text }: Props) => {

    let thisIcon = "";

    if (icon == "LinkedIn") {
        thisIcon = linkedin;
    } else if (icon == "GitHub") {
        thisIcon = github;
    } else if (icon == "ArtStation") {
        thisIcon = artstation;
    }

    return(
        <main className="socialButtonContainer">
            <a href={link} target="_blank">
                <img className="icon-size" src={thisIcon} alt={`link to ${text}`} />
            </a>
        </main>

    )
}

export default SocialButton;