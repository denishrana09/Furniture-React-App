import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

//Add in Index.html -> remaining bootstrap files
class AppNavbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Navbar className="App-Navbar" collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand className="Nav-Brand">
              <a href="#brand">Furniture</a>
            </Navbar.Brand>
            <Navbar.Toggle className="Nav-Toggle"/>
          </Navbar.Header>
          <Navbar.Collapse className="Navbar-Collapse">
            <Nav className="Navbar-Nav">
              <NavItem className="App-Nav-Item" eventKey={1} href="#">
                <span className="Nav-Item-Span">New In</span>
              </NavItem>
              <NavItem className="App-Nav-Item" eventKey={2} href="#">
                <span className="Nav-Active">Furniture</span>
              </NavItem>
              <NavItem className="App-Nav-Item" eventKey={2} href="#">
                <span className="Nav-Item-Span">Rest</span>
              </NavItem>
              <NavItem className="App-Nav-Item" eventKey={2} href="#">
                <span className="Nav-Item-Span">Decoration</span>
              </NavItem>
              <NavItem className="App-Nav-Item" eventKey={2} href="#">
                <span className="Nav-Item-Span">Outdoor</span>
              </NavItem>
              <NavItem className="App-Nav-Item" eventKey={2} href="#">
                <span className="Nav-Item-Span">Magazine</span>
              </NavItem>
              <NavItem className="App-Nav-Item" eventKey={2} href="#">
                <span className="Nav-Item-Span">Outlet</span>
              </NavItem>
            </Nav>
            <Nav className="Navbar-Right" pullRight>
              <NavItem className="App-Nav-Item" eventKey={1} href="#">
                <i className="far fa-user"></i>
              </NavItem>
              <NavItem className="App-Nav-Item" eventKey={1} href="#">
                <i className="fas fa-search"></i>
              </NavItem>
              <NavItem className="App-Nav-Item" eventKey={1} href="#">
                <i className="fas fa-shopping-bag"></i>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
