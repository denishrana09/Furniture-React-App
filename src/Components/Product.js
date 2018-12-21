import React, { Component } from 'react';
import { Row,Col,Image,Button } from 'react-bootstrap';
import ProductImage1 from '../images/product1.jpg';
import ProductImage2 from '../images/product2.jpg';
import ProductImage3 from '../images/product3.jpg';
import ProductImage4 from '../images/product4.jpg';
// import { Button,Checkbox,FormGroup } from 'react-bootstrap';

class Product extends Component {
    render() {
        let ProductImage = ProductImage4;
        let num = this.props.imageNum;
        if(num === 1) ProductImage = ProductImage1;
        else if(num === 2) ProductImage = ProductImage2;
        else if(num === 3) ProductImage = ProductImage3;
        else ProductImage = ProductImage4;
        return (
            <div className="Product">
            <Row className="show-grid item-row">
                <Col className="product-left-col" md={6}>
                    <div>
                        <Image className="ProductImage"
                        src={ProductImage} />
                    </div>
                </Col>
                <Col className="product-right-col" md={6}>
                    <Row>
                        <Col md={6} sm={12}>
                            <h5 className="heading-content patino">Patino</h5>
                        </Col>
                        <Col md={6} sm={12}>
                            <h5 className="heading-content">356$</h5>
                        </Col>
                    </Row>
                    <h5 className="heading-content">armchair,blue</h5>
                    <h6 className="text-muted heading-content h6-class">Within 6 days</h6>

                    <p className="text-muted heading-content">
                        commodo ullamcorper a lacus vestibulum sed arcu non odio euismod
                    </p>
                    <div className="heading-content buy-class">
                        <Button className="buy-now">Buy Now</Button>
                    </div>
                </Col>
            </Row>
            </div>
        );
    }
}

export default Product;
