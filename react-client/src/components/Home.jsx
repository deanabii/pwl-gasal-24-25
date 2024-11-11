import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <h1>Welcome to my page!</h1>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/experience">Experience</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;