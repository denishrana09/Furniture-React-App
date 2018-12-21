import React, { Component } from 'react';
import './App.css';
import { Grid,Row,Col } from 'react-bootstrap';
import AppNavbar from './Components/AppNavbar';
// import AppCarousel from './Components/AppCarousel';
import AppLeftSidebar from './Components/AppLeftSidebar';
import AppContent from './Components/AppContent';
// import Collection from './Components/Collection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
        {/* <AppCarousel/> */}
        <Grid className="left-right-sidebar">
          <Row className="show-grid">
            <Col className="left-side-bar" md={3} sm={3}>
              <AppLeftSidebar/>
            </Col>
            <Col className="left-side-bar" md={9} sm={9}>
              <AppContent/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
