import './Content.css'
import React from 'react'
import { Switch, Route } from 'react-router'

import About from '../views/About'
import Contact from '../views/Contact'
import Portfolio from '../views/Portfolio'

export default function Content(){
    return (
        <main class="content">
            <Switch>

                <Route path="/portfolio">
                    <Portfolio />
                </Route>

                <Route path="/contact">
                    <Contact />
                </Route>

                <Route path="/">
                    <About />
                </Route>
                
            </Switch>
        </main>
    )
}