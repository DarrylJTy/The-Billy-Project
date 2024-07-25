import React from 'react'
import Navibar from './NaviBar'
import CustomFooter from './CustomFooter'
import "bootstrap/dist/css/bootstrap.min.css"
import { Helmet } from "react-helmet";

export default function Layout({ children }) {
  return (
    <>
      <Helmet><title>Mr Billy Build Easy</title></Helmet>
      <div className="layout">
          <Navibar />

          <div className="content">
              { children }
          </div>
          
          <CustomFooter />
        </div>
    </>
  )
}
