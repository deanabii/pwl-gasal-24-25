import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header">
            <div>PWL Website</div>
            {/* <h1>Welcome to my page!</h1> */}
            <ul className="menu-item">
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

export default Header;