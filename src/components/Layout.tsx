import React from 'react'
import Navibar from './NaviBar'
import "bootstrap/dist/css/bootstrap.min.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
        <Navibar />

        <div className="content">
            { children }
        </div>
        
        <footer className="footer-block">
            Copyright 2024
        </footer>
    </div>
  )
}
