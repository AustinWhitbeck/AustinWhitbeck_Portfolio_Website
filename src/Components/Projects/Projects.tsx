import ProjectItem from "../ProjectItem/ProjectItem";

import './Projects.css';


const Projects = () => {

    return(
        <main className="container">
            <h3 className="pageTitle">The Greaves: Projects</h3>
            <section className="projectItemsSect">
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
        
            </section>

        </main>
    )
}

export default Projects;