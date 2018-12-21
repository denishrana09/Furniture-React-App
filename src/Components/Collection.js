import React, { Component } from 'react';
import { Row,Col,Image } from 'react-bootstrap';
import SofaImage1 from '../images/sofa1.jpeg';
import SofaImage2 from '../images/sofa2.jpeg';
import SofaImage3 from '../images/sofa3.jpeg';

class Collection extends Component {
  render() {
    return (
        <Row className="show-grid" className="image-row">
            <Col md={3} className="image-col">
                <Image className="SofaImage image-center" src={SofaImage1} responsive />
            </Col>
            <Col md={6} className="image-col">
                <Image className="SofaImage" src={SofaImage2} responsive />
            </Col>
            <Col md={3} className="image-col">
                <Image className="SofaImage image-center" src={SofaImage3} responsive />
            </Col>
        </Row>
    );
  }
}

export default Collection;