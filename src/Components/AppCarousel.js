import React, { Component } from 'react';
import { Carousel,Image,Grid,Row,Col,Button } from 'react-bootstrap';
import SofaImage1 from '../images/product2.jpeg';
import SofaImage2 from '../images/sofa2.jpg';
import SofaImage3 from '../images/sofa3.jpg';
import PercentOffImage from '../images/Capture.jpg';

//Add in Index.html -> remaining bootstrap files
class AppCarousel extends Component {
  render() {
    return (
      <div className="AppCarousel container">
        <Carousel>
            <Carousel.Item className="SofaImageItem bg-dark">
              <Grid className="Image-Grid">
                <Row className="Carousel-Content">
                  <Col className="Main-Image-Col" md={5}>
                    <Image className="SofaImage Main-Image" src={SofaImage1} responsive />
                  </Col>
                  <Col className="Main-Content-Col" md={7}>
                    <div>
                      <h3>Sale Off</h3>
                      <Image className="PercentOff-Image pull-right" src={PercentOffImage}></Image>
                      <h1><span className="sale-span">Sofas</span> and <br/>
                      <span className="sale-span">Armchairs</span></h1>
                      <p>Relax,get comfortable and let yourself go.Once you try one of these Sofas
                        and armchairs you won't want any others. May the style be with you.
                      </p>
                      <Button className="btn-lg Explore-Button"><div className="pull-left">Explore All Items </div><i className="fas fa-arrow-right pull-right"></i></Button>
                    </div>
                  </Col>
                </Row>
              </Grid>
            </Carousel.Item>
            <Carousel.Item className="SofaImageItem bg-dark">
              <Grid className="Image-Grid">
                <Row>
                  <Col>
                    <Image className="SofaImage" src={SofaImage2} responsive />
                  </Col>
                </Row>
              </Grid>
            </Carousel.Item>
            <Carousel.Item className="SofaImageItem bg-dark">
              <Grid className="Image-Grid">
                <Row>
                  <Col>
                    <Image className="SofaImage" src={SofaImage3} responsive />
                  </Col>
                </Row>
              </Grid>
            </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default AppCarousel;
