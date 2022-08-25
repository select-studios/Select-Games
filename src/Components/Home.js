import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        // <Link to="/"></Link>
        <React.Fragment>
            <nav className="site-navigation">
                <section className="header">
                <div className="header-identity">
                    <a href="#">
                    <img src="./assets/Developer Source File.png" className="header__img" alt="Select Studios" /> 
                    </a>
                </div>
                <ul>
                    <li>
                    <a href="#Game_Libary" className="header__button header__button-effect header__button-effect--white">Game Libary</a>
                    </li>
                    <li>
                    <a href="Blog.html" className="header__button header__button-effect header__button-effect--white">Blog</a>
                    </li>
                    <li>
                    <a href="Backspace.html" className="header__button header__button-effect header__button-effect--white">Backspace</a>
                    </li>
                    <li><a href="Launcher.html" className="header__button--main">Get Launcher</a></li>
                </ul>
                </section>
            </nav>
        </React.Fragment>
    );
}