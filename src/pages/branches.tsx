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
          </div>
        </Container>
    </Layout>
  )
}
