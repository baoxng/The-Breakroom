import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Game from "../components/game";
// import Jumbotron from "../components/Jumbotron";
// import Nav from "../components/Nav";

const Homepage = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <p>is it working</p>
                </Col>
                <Col size="md-6 sm-12">
                    <p>i hope</p>
                </Col>
            </Row>
            <Row>
                <Game />
            </Row>
        </Container>
    );
};


export default Homepage;