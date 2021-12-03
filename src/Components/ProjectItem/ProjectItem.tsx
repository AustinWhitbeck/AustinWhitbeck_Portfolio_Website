//**** Images imports ****//

// SkedMan //
import SkedMobile from '../../Images/Skedman_Mobile_img.png';
import SkedMobile150px from '../../Images/Skedman_Mobile_150px.png';
import SkedMobile300px from '../../Images/Skedman_Mobile_300px.png';

// MinerMadness //
import MinerMadness300px from '../../Images/MinerMadness_300px.png';

// SocialNet //
import SocialNet300px from '../../Images/SocialNet_300px.png';

// Evaros //
import Evaros300px from '../../Images/Evaros_300px.png';


import './ProjectItem.css';

interface Props {
    link: string,
    link2?: string,
    link2Name?: string,
    image: string,
    title: string,
    blurb?: string

}



const ProjectItem = ({link, link2, link2Name, image, title, blurb}: Props) => {

    let thisImage = undefined;


    switch (image) {
        case image = 'SkedMan':
            thisImage = SkedMobile
            break;
        case image = 'SkedMan150':
            thisImage = SkedMobile150px
            break;
        case image = 'SkedMan300':
            thisImage = SkedMobile300px  
            break;
        case image = 'MinerMadness300':
            thisImage = MinerMadness300px
            break;
        case image = 'SocialNet300':
            thisImage = SocialNet300px
            break;
        case image = 'Evaros300':
            thisImage = Evaros300px
    }

    return(
        <main className="projectItemContainer">
            <section className="projectPrevImgSect">
                <a href={link} target="_blank">
                    <img src={thisImage} alt="project preview picture" className="projectImage"/>
                </a>
            </section>
            <section className="projectInfoSect">
                <h3 className="projectTitle">Project: {title}</h3>
                <p className="itemInfo">{blurb}</p>
                <a href={link2} target="_blank" className="itemInfo">{link2Name}</a>
                <a href={link} target="_blank" className="itemInfo">Reroute to Project</a>
            </section>
        </main>

    )
}

export default ProjectItem;