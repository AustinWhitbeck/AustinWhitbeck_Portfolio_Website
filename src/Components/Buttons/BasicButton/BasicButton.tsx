import { Link, To } from "react-router-dom";

interface Props {
    text: string,
    click?: () => void,
    path?: string,
}

const BasicButton = ({text, click, path }: Props) => {

    return(
        <main>
            <Link to={`${path}`}>
                <button onClick={click}>
                    {text}
                </button>
            </Link>
        </main>
    )
}

export default BasicButton;