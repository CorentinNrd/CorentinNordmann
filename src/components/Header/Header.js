import React from "react";
import '../../css/App.css'
import '../../css/Queries.css';
import '../../css/bootstrap.min.css'
import ProfilPic from '../../assets/profil.png';
import Cv from '../../assets/cv.pdf';
import { Link } from 'react-scroll';

const Header = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <header id="title">
                            <h1 id="hello">
                                <span style={{ "--i": 1 }}>H</span>
                                <span style={{ "--i": 2 }}>e</span>
                                <span style={{ "--i": 3 }}>l</span>
                                <span style={{ "--i": 4 }}>l</span>
                                <span style={{ "--i": 5 }}>o</span>
                            </h1>
                            <h1 id="world">
                                <span style={{ "--i": 6 }}>W</span>
                                <span style={{ "--i": 7 }}>o</span>
                                <span style={{ "--i": 8 }}>r</span>
                                <span style={{ "--i": 9 }}>l</span>
                                <span style={{ "--i": 10 }}>d</span>
                            </h1>
                        </header>
                    </div>
                    <div className="col">
                        <nav id="nav">
                            <ul>
                                <li><a href="https://github.com/CorentinNrd" target="blank">GitHub</a></li>
                                <li><a href="https://www.linkedin.com/in/corentinnordmann/" target="blank">Linkedin</a></li>
                                <li><Link className="contactLink" id="contactLink" to="contact" smooth={true}>Contact</Link></li>
                                <li><a href={Cv} target="blank">Mon cv</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <main id="main">
                <img id="profil_pic" src={ProfilPic} alt="profile pic" />
                <div id="info">
                    <h2 id="name">Corentin</h2>
                    <h2 id="last_name">Nordmann</h2>
                </div>
            </main>
            <div id="info_Contact">
                <a id="email" href="mailto: coconrd@icloud.com">coconrd@icloud.com</a>
                <span>06 27 17 91 83</span>
                <span>Paris</span>
                <span>22 ans</span>
                <a className="btn" id="download_cv" href={Cv} download>Télécharger mon cv</a>
            </div>
        </div>
    )
}

export default Header;