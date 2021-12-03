import ProjectItem from "../ProjectItem/ProjectItem";

import './Projects.css';


const Projects = () => {

    const blurbs = [
        // SkedMan
        "SkedMan is a volunteer management system. I did most of this project",
        // SocialNet
        "SocialNet is a social media project utilizing pulling data from an API and displaying this by mapping the information across reusable components",
        // Miner Madness
        "Miner Mandess is a STEM based board game intended for kids from 3rd to 5th grade looking to learn about coding concepts. On this project I helped create the board as well as marketing assets and helped write the curriculum so that it can be justified to fit within a school's required learning.",
        // Evaros
        "This is a commission illustration that was requested by a popular Magic: The Gathering, streamer to be used as an avatar and personal branding while streaming on the Twitch platform and for use in Discord."
    ]

    return(
        <main className="container allprojects">
            <h3 className="pageTitle">The Greaves: Projects</h3>
            <section className="projectItemsSect">
                <h2>Dev projects</h2>
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
                    link2="http://epicsite.org/minermadness/"
                    link2Name="epicsite.org/minermadness"
                    image="MinerMadness300"
                    title="Miner Madness"
                    blurb={blurbs[2]}
                />
                <ProjectItem
                    link="https://www.artstation.com/artwork/KrEDQG"
                    image="Evaros300"
                    title="Evaros Commission"
                    blurb={blurbs[3]}
                />
                {/* <ProjectItem/> */}
            </section>

        </main>
    )
}

export default Projects;