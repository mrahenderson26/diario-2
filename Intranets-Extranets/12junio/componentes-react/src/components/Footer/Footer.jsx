import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer({ linkedin, github, nombre }) {

    return (
        <>
            <footer className="container">

                <div className="redes">
                    <a href={linkedin}><FaLinkedin size={30}/></a>
                    <a href={github}><FaGithub size={30}/></a>
                </div>

                <div className="copyright">
                    <p>&copy; {nombre}, {new Date().getFullYear()}</p>
                </div>

            </footer>
        </>
    )
}

