import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        
        <div className="container--0-">
            <rect>
            <div className="container-0-1-1">
                <Link to="/">home</Link>
                <Link to="/">tiles</Link>
                <Link to="/">bathroom</Link>
                <Link to="/">doors</Link>
            </div>
            <div className="container-0-1-3"></div>
            <div className="container-0-1-4">
                <Link to="/">branches</Link>
                <Link to="/about">about us</Link>
            </div>
            </rect>
        </div>
    </nav>
  )
}
