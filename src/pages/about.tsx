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
            <div className='d-flex flex-row first-content-block'>
              
            {/* top content block */}
              
            </div>

            <div className='d-flex flex-row second-content-block'>
              <div className="col-sm bottom-area">
                <div className="bottom-content">
                    
                {/* bottom left content block */}  
                </div>
              </div>

              <div className="col-sm about-area">
                <div className="px-3 about-content">
                  <p className="text-justify">
                  <h2>About Us</h2><br />
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
