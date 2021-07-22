import './Contact.css'
import React from 'react'

export default function Contact(){
    return (
        <div className="contact">
            <div className="container">
                <h2 className="title-page">Contato</h2>
                <div className="form-elements">
                    <form>
                        <label>Descrição do projeto</label>
                        <textarea placeholder="Tipo de projeto, prazo, etc..."></textarea>
                        <label>Sobre você</label>
                        <input type="text" name="fullname" placeholder="Nome completo"/>
                        <input type="email" name="email" placeholder="Seu melhor e-mail"/>
                        <button className="button" type="submit">Solicitar Orçamento</button>
                    </form>

                    <div className="social-media">
                        <h3>Minhas redes sociais</h3>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-whatsapp"></i></a>
                        <a href="#"><i className="fab fa-github"></i></a>
                        <a href="#"><i className="far fa-envelope"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}