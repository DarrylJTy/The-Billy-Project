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
              <Carousel className='d-flex flex-row branches-content-block'>
                <Carousel.Item>
                  <img src="../laspinas-branch.png" />
                  <Carousel.Caption>
                    <h3>Las Pinas Branch</h3>
                    <p className='branch-text'>Marcos Alvarez Ave, Las Piñas, 1747 Metro Manila</p>
                    <a
                      href="https://maps.app.goo.gl/bwhqiJ5te4M6PYby5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light"
                    >
                      View on Google Maps
                    </a>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="../c6-branch.png" />
                  <Carousel.Caption>
                    <h3>C6 Branch</h3>
                    <p className='branch-text'>BLK 35, Sta. Ana  Lupang Arienda, Taytay Rizal</p>
                    <a
                      href="https://maps.app.goo.gl/sRABRcs91VakmreX9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light"
                    >
                      View on Google Maps
                    </a>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="../floodway-branch.png" />
                  <Carousel.Caption>
                    <h3>Floodway Branch</h3>
                    <p className='branch-text'>87 E BANK RD.CAINTA,1900 RIZAL PHILLIPINES.</p>
                    <a
                      href="https://maps.app.goo.gl/6CaZhrsiK4kpP4oS8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light"
                    >
                      View on Google Maps
                    </a>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="../pinagbuhatan-branch.png" />
                  <Carousel.Caption>
                    <h3>Pinagbuhatan Branch</h3>
                    <p className='branch-text'>63 Urbano Velasco Ave, Pasig, Metro Manila</p>
                    <a
                      href="https://maps.app.goo.gl/qbqsLzfkB4NBAPwCA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light"
                    >
                      View on Google Maps
                    </a>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="../sanjoaquin-branch.png" />
                  <Carousel.Caption>
                    <h3>San Joaquin Branch</h3>
                    <p className='branch-text'>8 Justice Ramon Jabson, Pasig, 1601 Metro Manila</p>
                    <a
                      href="https://maps.app.goo.gl/5sqrK6SdAwA1Qtuf7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light"
                    >
                      View on Google Maps
                    </a>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
        </Container>
    </Layout>
  )
}
