import * as React from "react"
import Layout  from "../components/Layout"
import "../style/global.css"
import "../style/index.css"
import { Container } from "react-bootstrap"

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
              <div className="col-sm img-area">
                hi
              </div>

            </div>

            <div className='d-flex flex-row'>
              <div className='col-sm branches-block'>
                hello

              </div>
              <div className='col-sm review-block'>
                afsf
              </div>
            </div>

          </div>
        </Container>
    </Layout>
  )
}
