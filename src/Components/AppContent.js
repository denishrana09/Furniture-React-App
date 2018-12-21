import React, { Component } from 'react';
import { Grid,Row,Col,Button } from 'react-bootstrap';
import Product from './Product';

//Add in Index.html -> remaining bootstrap files
class AppContent extends Component {
  constructor(props){
    super(props);
    this.state = { filter:'' };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e){
    console.log(e.target.value);
    this.setState({filter : e.target.value});
  }

  render() {
    return (
      <div className="AppContent">
        <Grid>
          <div className="content-nav-div">
            <ul className="app-content-nav">
              <li><Button className="filterButton" onClick={this.handleFilterChange} value="all">ALL</Button></li>
              <li><Button className="filterButton" onClick={this.handleFilterChange} value="new">NEW</Button></li>
              <li><Button className="filterButton" onClick={this.handleFilterChange} value="offers">OFFERS</Button></li>
              <li><Button className="filterButton" onClick={this.handleFilterChange} value="in10days">DELIVERY IN 10 DAYS</Button></li>
            </ul>
          </div>
          <Row className="show-grid product-row">
            <Col md={6} sm={6} className="product-col">
              <Product imageNum={1}/>
              <Product imageNum={2}/>
              <Product imageNum={3}/>
              <Product imageNum={4}/>
              <Product imageNum={1}/>
            </Col>
            <Col md={6} sm={6} className="product-col product-col-right">
              <Product imageNum={4}/>
              <Product imageNum={3}/>
              <Product imageNum={1}/>
              <Product imageNum={2}/>
              <Product imageNum={3}/>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={12}>
              <Button className="showMoreButton">
                SHOW MORE PRODUCTS
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const PRODUCTS = [{
  category: 'new',
  price: '386$',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '1'
},
{
  category: 'offers',
  price: '386$',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '2'
},
{
  category: 'new',
  price: '386$',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '3'
},
{
  category: 'offers',
  price: '386$',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '4'
},
{
  category: 'in10days',
  price: '386$',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '1'
},
{
  category: 'in10days',
  price: '386$',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '2'
},
{
  category: 'offers',
  price: '386$',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '3'
},
{
  category: 'new',
  price: '386$',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '4'
},
{
  category: 'in10days',
  price: '386$',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '4'
},
{
  category: 'new',
  price: '386$',
  name: 'Patino',
  subname: 'armchair,blue',
  image: '3'
},
];

export default AppContent;
