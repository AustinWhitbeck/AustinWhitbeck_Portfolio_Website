import mech from '../../Images/ResumeRobot-01.png';
import './Mech.css';

interface Props {
    size: string;
}

const Mech = ({size}: Props) => {

    return(
        <main className="mechContainer">

            {/* <section className="mechHeadContainer">
                <div className="standInMechHead"></div>
                <div className="mechVisor"></div>
                <div className="earRight"></div>
            </section>

           
            <section className="mechBodyContainer">
                <div className="standInMechTorso"></div>
            </section>

           
            <section className="mechShoulderRightContainer">
                <div className="mechShoulderRight"></div>
            </section> */}
            <img className={size} src={mech} alt="big mecha" />
            

        </main>
    )
}

export default Mech;