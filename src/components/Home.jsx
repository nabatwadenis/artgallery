import React, { Component } from "react";
import { Link } from "react-router-dom";
import {  Container, Row, Col, Image, Button} from "react-bootstrap";
import "./Home.css";
import CustomNavbar from "./Navbar";
const Home = () => {
    return <>
    < CustomNavbar />
    <Container>
        <h2>Welcome to art gallery</h2>
        <p>This is a simple react-bootstrap implementation in the form of 
            an art gallery website with react-router-dom implementations</p>
        <Link to="./about">
            <Button bsStyle="primary">Learn More</Button>
        </Link>
    </Container>

    </>;
}
 
export default Home;