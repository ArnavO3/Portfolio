import React from "react";
import "./header.css";
import image1 from "../../images/meBlackKurta.jpg";
import { Nav } from "react-bootstrap";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <img src={image1} alt="img" className="headerImg" />
        ARNAV TIWARI
      </div>
      <div className="navbar">
        <Nav className="nav" activeKey="/home">
          <Nav.Item>
            <Nav.Link className="home" href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="about" eventKey="link-1">About Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="project" eventKey="link-2">My Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="contact" eventKey="link-3">Contact Me</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default Header;
