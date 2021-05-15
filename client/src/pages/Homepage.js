import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Game from "../components/game";
// import Jumbotron from "../components/Jumbotron";
// import Nav from "../components/Nav";

const Homepage = () => {
    return (
        <Container fluid>
            <Row>
            </Row>
            <Row>
                <Game />
            </Row>
        </Container>
    );
};


export default Homepage;