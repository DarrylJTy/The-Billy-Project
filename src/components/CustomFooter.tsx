import React from 'react'
import { Link } from 'gatsby'
import "../style/customfooter.css"

export default function CustomFooter() {
  return (
    <footer className="footer">
        <div className="left">
            <p>Marcos Alvarez<br />0955 361 0637<br />Las Piñas City, Philippines</p>
        </div>
        <div className="center">
            <img src="../MrBilly_Logo.png" alt="Logo" /><br />
            <p>MR BILLY BUILD EASY COPYRIGHT 2020 | ALL RIGHTS RESERVED</p>
            <div className="social-icons">
                <a href="https://www.facebook.com/mrbillybuildeasy" target="_blank" rel="noopener noreferrer">F</a>
                <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">M</a>
            </div>
        </div>
        <div className="right text-end">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/catalog">Catalog</Link></li>
                <li><Link to="/branches">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    </footer>
  )
}
