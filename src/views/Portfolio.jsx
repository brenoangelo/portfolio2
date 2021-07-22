import './Portfolio.css'
import React from 'react'
import portfolioImg from '../assets/img/portfolio-lp.jpg'

export default function Portfolio(){

    return (
        <div className="portfolio">
            <div className="container">
                <h2 className="title-page">Portfolio</h2>

                <div className="portfolio-projects">
                    
                  <a href="#">
                    <div style={{
                      backgroundImage: `url(${portfolioImg})`
                    }} 
                    className="project-single"></div>
                  </a>
                  
                  <a href="#">
                    <div style={{
                      backgroundImage: `url(${portfolioImg})`
                    }} 
                    className="project-single"></div>
                  </a>

                  <a href="#">
                    <div style={{
                      backgroundImage: `url(${portfolioImg})`
                    }} 
                    className="project-single"></div>
                  </a>
                  

                  
                </div>



            </div>
        </div>
    )
}