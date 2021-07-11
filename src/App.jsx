import './App.css'
import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import Content from './components/Content'

import SideBar from './components/SideBar'

export default function App(props) {
    return (
        <div class="app">
            <div class="container">
                <Router>
                    <SideBar />
                    <Content />
                </Router>
            </div>
        </div>
    )
}