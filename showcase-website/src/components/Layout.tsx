import React from 'react'
import Navibar from './NaviBar'
import CustomFooter from './CustomFooter'
import "bootstrap/dist/css/bootstrap.min.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
        <Navibar />

        <div className="content">
            { children }
        </div>
        
        <CustomFooter />
    </div>
  )
}
