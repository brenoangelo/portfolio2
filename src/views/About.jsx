import './About.css'
import React from 'react'

export default function About(){
    return (
        <div className="about">
            <div className="container">
                <h2 className="title-page">Quem sou</h2>
                <h3><strong>Breno</strong> Angelo<span><i className="fas fa-circle"></i></span></h3>
                <h4>Desenvolvedor Front-end</h4>
                <p> 
                Sou desenvolvedor web front-end, desenvolvo Landing pages/sites 
                institucionais responsivos utilizando <strong>Html</strong>, <strong>Css</strong> e <strong>JavaScript</strong> ou
                 com <strong>WordPress</strong>. 
                </p>

                <a className="button" href="#">Contrate-me</a>

                
            </div>
        </div>
    )
}