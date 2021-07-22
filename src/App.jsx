import './App.css'
import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import Content from './components/Content'

import Menu from './components/Menu'

export default function App(props) {
    return (
        <div className="app">
            
            <Router>
                <Menu />
                <Content />
                
            </Router>
            
        </div>
    )
}