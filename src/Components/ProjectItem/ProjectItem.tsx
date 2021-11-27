

import './ProjectItem.css';

interface Props {
    
}

const ProjectItem = () => {

    return(
        <main className="projectItemContainer">
            <section className="projectPrevImgSect">
                <img src="" alt="project preview picture" />
            </section>
            <section className="projectInfoSect">
                <h4 className="projectTitle">Project Title</h4>
                <p>Info about project</p>
                <a href="">...Rerouting to Project...</a>
            </section>
        </main>

    )
}

export default ProjectItem;