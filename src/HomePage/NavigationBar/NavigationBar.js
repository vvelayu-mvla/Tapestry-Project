import React, { Component } from "react";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default class NaviagationBar extends Component { 
    
    render() {
        return (
            <Navbar bg="dark" >
                <Navbar.Brand href="/tapestry">Home</Navbar.Brand>
                <NavDropdown.Item href="/tapestry/first">Action</NavDropdown.Item>
                <NavDropdown.Item href="/tapestry/second">Another action</NavDropdown.Item>
                <NavDropdown.Item href="/tapestry/third">Something</NavDropdown.Item>
                <NavDropdown.Item href="/tapestry/fourth">Something else</NavDropdown.Item>
            </Navbar>
        );
    }
}