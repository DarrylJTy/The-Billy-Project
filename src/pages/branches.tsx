import React from 'react'
import Layout  from "../components/Layout"
import "../style/global.css"
import "../style/branches.css"
import { Button, Container, Carousel } from "react-bootstrap"
import { Link } from "gatsby"


export default function branches() {
  return (
    <Layout>
        <Container fluid className="branches-container">
          <div className="content-container">
            <div className='d-flex flex-row branches-content-block'>
              <Carousel>
                <Carousel.Item>
                  <img src="../living-space.png" />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="../living-space.jpg" />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="../mrbillylogorevamp.png" />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            
            <div className='d-flex flex-row second-content-block'>
              <div className="col-sm branches-area">
                <div className="branches-content">
                  <p>
                    <h2>Find a Store Near You</h2><br />
                    Check out our branches located in Laguna and Metro Manila. 
                  </p>
                  <Link to="/branches" className="btn btn-outline-dark button2">
                    branches
                  </Link>
                </div>
              </div>

              <div className="col-sm review-area">
                <div className="review-content">
                  <p>
                    <h2>Shopped Recently?</h2><br />
                    Let us know how well we served you by rating us on our Facebook Page.
                  </p>
                  <a
                    href="https://www.facebook.com/mrbillybuildeasy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark button3"
                  >
                    Review Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
    </Layout>
  )
}
