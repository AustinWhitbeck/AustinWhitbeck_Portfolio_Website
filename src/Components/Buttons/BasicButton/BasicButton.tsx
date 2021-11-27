import { Link, To } from "react-router-dom";

// CSS
import './BasicButton.css';

interface Props {
    text: string,
    click?: () => void,
    path?: string,
}

const BasicButton = ({text, click, path }: Props) => {

    return(
        <main className="ButtonContainer">
            <Link to={`${path}`} >
                <button className="BasicButton" onClick={click}>
                    {text}
                </button>
            </Link>
        </main>
    )
}

export default BasicButton;