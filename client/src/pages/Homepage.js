import React from "react";
import { Col, Row, Container } from "../components/Grid";
import GameSpacedash from "../components/Game5";
// import Jumbotron from "../components/Jumbotron";
// import Nav from "../components/Nav";

const Homepage = () => {
    return (
        <Container fluid>
            <Row>
            </Row>
            <Row>
                <GameSpacedash />
            </Row>
        </Container>
    );
};


export default Homepage;