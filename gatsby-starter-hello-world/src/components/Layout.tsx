import React from 'react'
import Navbar from './navbar'
import '../style/global.css'

export default function Layout({ children }) {
  return (
    <div className="layout">
        <Navbar />

        <div className="content">
            { children }
        </div>
        
        <footer>
            Copyright 2024
        </footer>
    </div>
  )
}
