import React from 'react'
import Layout from '../components/Layout'
import "../style/global.css"
import "../style/about.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"

export default function About() {
  return (
    <Layout>
        
        <Container fluid className="about-container">
          <div className="content-container">
            <div className='d-flex flex-row about-us-content-block'>
              <h2>About Us</h2>  
            {/* top content block */} 
            </div>

            <div className='d-flex flex-row second-content-block'>
              <div className="col-sm bottom-area">
                <img src="../about-us-img.jpg" className='img-fluid px-0 about-img' /> 
              </div>

              <div className="col-sm about-area">
                <div className="px-3 about-content">
                  <p className="about-us-text">
                    <h2 className='about-us-title'>What we do</h2><br /> 
                    Welcome to Mr. Billy Build Easy, your go-to home improvement store located at Marcos Alvarez, 
                    Las Pinas City, Metro Manila. Since 2022, we've been committed to providing affordable and quality home fixtures. 
                    Visit us at our main branch or at our sub-branches in Pasig and Laguna
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </Container>  
    </Layout>
  )
}
