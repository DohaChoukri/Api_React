import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav1() {
  return (
    <Nav defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Nav.Link as="span"><Link to="/">Home</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as="span"><Link to="/blog" >Blog</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as="span"><Link to="/about">About</Link></Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
