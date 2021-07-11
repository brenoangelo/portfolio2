import './SideBar.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar(){
    return (
        <aside class="sidebar">
            <div class="perfil"></div>

            <nav>
                <ul>
                    <li><Link to="/" class="active">Sobre</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contato</Link></li>
                </ul>
            </nav>
        </aside>
    )
}