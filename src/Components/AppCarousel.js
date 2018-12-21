import React, { Component } from 'react';
import { Carousel,Image } from 'react-bootstrap';
import SofaImage1 from '../images/sofa1.jpg';
import SofaImage2 from '../images/sofa2.jpg';
import SofaImage3 from '../images/sofa3.jpg';

//Add in Index.html -> remaining bootstrap files
class AppCarousel extends Component {
  render() {
    return (
      <div className="AppCarousel container">
        <Carousel>
            <Carousel.Item className="SofaImageItem bg-dark">
                <Image className="SofaImage" src={SofaImage1} responsive />
            </Carousel.Item>
            <Carousel.Item className="SofaImageItem bg-dark">
                <Image className="SofaImage" src={SofaImage2} responsive />
            </Carousel.Item>
            <Carousel.Item className="SofaImageItem bg-dark">
                <Image className="SofaImage" src={SofaImage3} responsive />
            </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default AppCarousel;
