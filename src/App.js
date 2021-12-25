import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Blog from "./blog";
import About from "./about";
import Content from "./content";
import {Link} from 'react-scroll'


function App() {
  return (
    <div className="App">
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand>
          <img src={logo} width="40px" height="40px" /> Logo
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown className="navtext" title="Products">
              <NavDropdown.Item className="navtext" href="#products/tea">
                Tea
              </NavDropdown.Item>
              <NavDropdown.Item className="navtext" href="#products/coffee">
                Coffee
              </NavDropdown.Item>
              <NavDropdown.Item className="navtext" href="#products/chocolate">
                Chocolate
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="navtext" href="#products/promo">
                Promo
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navtext" href="#blog">
              Blog
            </Nav.Link>
            <Nav.Link className="navtext" href="#about-us">
              About Us
            </Nav.Link>
            <Nav.Link className="navtext" href="#contact-us">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content">
        <Blog/> <br />
        <About/> <br />
        <Content />
      </div>
    </div>
  );
}

export default App;
