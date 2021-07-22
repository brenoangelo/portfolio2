import './Menu.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {

    function menuMobile() {
        let ulMenu = document.querySelector('nav ul')
        if (ulMenu.style.width !== "100%") {
            ulMenu.style.width = "100%"
        } else {
            ulMenu.style.width = "0%"
        }
    }

    return (
        <div className="menu">
            <div className="container">
                <div className="logo">
                    <h2>BrenoDev</h2>
                </div>
                <nav>
                    <i className="fa fa-bars"
                        id="ham-button"
                        onClick={() => menuMobile()}></i>
                    <ul>
                        <div className="perfil"></div>
                        <li><NavLink exact={true} to="/" activeClassName="active">Sobre</NavLink></li>
                        <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active">Contato</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}