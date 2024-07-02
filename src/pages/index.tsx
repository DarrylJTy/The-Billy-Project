import * as React from "react"
import Layout  from "../components/Layout"
import "../style/global.css"
import "../style/index.css"
import { Button, Container } from "react-bootstrap"
import { Link } from "gatsby"

export default function Home() {
  return (
    <Layout>
        <Container fluid className="index-container">
          <div className="content-container">
            <div className='d-flex flex-row first-content-block'>
              <div className="col-sm text-area">
                <div className="text-content">
                  <p>
                    <h2>Quality Tiles for Every Space</h2><br />
                    Explore a wide range of tiles that blend style and durability, perfect for any space in your home or office.
                  </p>
                </div>
              </div>

              <div className="col-sm px-0 img-area">
                <img src="../living-space.png" className="img-fluid image1"/>
                <Link to="/tiles" className="btn btn-outline-dark button1">
                  shop now
                </Link>
              </div>
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
                    review us
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </Container>
    </Layout>
  )
}
