import ProjectItem from "../ProjectItem/ProjectItem";

import './Projects.css';


const Projects = () => {

    const blurbs = [
        // SkedMan
        "SkedMan is a volunteer management system. I did most of this project",
        // SocialNet
        "SocialNet is a social media project utilizing pulling data from an API and displaying this by mapping the information across reusable components"

    ]

    return(
        <main className="container allprojects">
            <h3 className="pageTitle">The Greaves: Projects</h3>
            <section className="projectItemsSect">
                <ProjectItem
                    link="https://my-scheduling-62f94.web.app/"
                    image='SkedMan300'
                    title="SkedMan"
                    blurb={blurbs[0]}
                />
                <ProjectItem
                    link="https://socialnet-bac93.web.app/"
                    image="SocialNet300"
                    title="SocialNet"
                    blurb={blurbs[1]}
                />
                <h2>Art projects</h2>
                <ProjectItem
                    link="https://www.artstation.com/artwork/3PEkB"
                    image="MinerMadness300"
                    title="Miner Madness"
                />
                <ProjectItem/>
                <ProjectItem/>
            </section>

        </main>
    )
}

export default Projects;