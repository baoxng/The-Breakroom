import React from "react";
import { Col, Row, Container } from "../components/Grid";
import GameSpacedash from "../components/Game5";
// import Jumbotron from "../components/Jumbotron";
// import Nav from "../components/Nav";

const GameFive = () => {
    return (
        <Container fluid>
            <Row>
                <GameSpacedash />
            </Row>
        </Container>
    );
};


export default GameFive;