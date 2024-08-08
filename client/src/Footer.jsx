import { useState, useEffect } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import './App.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={reactLogo} className="footer-logo" alt="logo" />
                </div>
                <div className="footer-text">
                    <h1>FOOTER, PROTOTYPE</h1>
                </div>
            </div>
        </footer>
    )
}

export default Footer