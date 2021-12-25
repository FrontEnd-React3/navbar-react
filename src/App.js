import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Blog from "./blog";
import About from "./about";
import Content from "./content";
import { Link } from "react-scroll";

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
            <NavDropdown className="navtext" id="navtextid" title="Products">
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
            <Link
              smooth={true}
              duration={1000}
              className="flex navtext"
              to="blog"
            >
              Blog
            </Link>
            <Link
              smooth={true}
              duration={1000}
              className="flex navtext"
              to="about-us"
            >
              About Us
            </Link>
            <Link
              smooth={true}
              duration={1000}
              className="flex navtext"
              to="contact-us"
            >
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="content">
        <Blog /> <br />
        <About /> <br />
        <Content />
      </div>
    </div>
  );
}

export default App;
